---
slug: how-to-write-an-erc-6900-plugin
title: How to write an ERC-6900 Plugin
# image: /static/img/tsf.png
authors: fangting
tags: [alchemy, collabland, developers, plugins]
date: 2024-02-28
---
## Introduction

We're excited to share our latest advancements through our partnership with Alchemy, focusing on leveraging Account Abstraction (AA) with modular plugins(ERC-6900) to enhance UX in Telefrens and Collab.Land. This collaboration has empowered us to explore innovative use cases, enriching our user experience and setting new benchmarks in blockchain utility.

You have decided to write an [ERC-6900](https://eips.ethereum.org/EIPS/eip-6900) plugin that can be used by all ERC-6900 compliant accounts. That’s great!

But, where do you start?

You have come to the right place! In this guide, we will walk through how to write an ERC-6900 plugin by writing a multi-owner plugin together in Solidity.

## Terminology

Here is a list of [ERC-6900 terminology](https://eips.ethereum.org/EIPS/eip-6900#terms) that we will reference throughout the article:

- **MSCA**: modular smart contract account that is compliant with ERC-6900.
- **User Operation**: an [ERC-4337](https://eips.ethereum.org/EIPS/eip-4337#definitions) term that is often used to indicate the context for an ERC-4337 transaction format where txs are sent to the `EntryPoint` contract first, who then calls accounts with user operation(s).
- **Runtime**: a term used to indicate the traditional transaction context, as opposed to the above ERC-4337 transaction format. Here, txs are sent directly to the smart contract, rather than from the `EntryPoint` contract via user operations.

## Resources

An ERC-6900 plugin needs to implement [required interfaces](https://eips.ethereum.org/EIPS/eip-6900#interfaces) and abide by ERC-6900 rules for plugins. The [reference implementation of ERC-6900](https://github.com/erc6900/reference-implementation) provides a nice [`BasePlugin`](https://github.com/erc6900/reference-implementation/blob/main/src/plugins/BasePlugin.sol) and [`IPlugin`](https://github.com/erc6900/reference-implementation/blob/main/src/interfaces/IPlugin.sol#L101), as well as [plugin examples](https://github.com/erc6900/reference-implementation/tree/main/src/plugins). Those are all good materials to help you understand how to write a plugin.

We will also release a set of dev tools in the coming weeks to make it extremely easy to write a plugin. Stay tuned!

When you are ready, let’s get started.

## 1. What is an ERC-6900 plugin?

An [ERC-6900](https://www.notion.so/How-to-write-an-ERC-6900-Plugin-8ef518630b1a43a1b301723925407ec5?pvs=21) plugin is a smart contract that provides up to three types of functions for an MSCA aside from its own functions.

- **Validation functions**. Functions that validate authentication and authorization for an MSCA.
- **Execution functions**. Functions that define the main execution logic of a function of an MSCA.
- **Hook functions**. Functions can be run before the above Validation functions, or before and after the above Execution functions, for whatever purposes.

An ERC-6900 plugin can be installed by one or more MSCAs of different implementations that are compliant with ERC-6900. It stores states of those MSCAs and provides intended functionalities. For security reasons, plugins should be deployed as a **global singleton** rather than an upgradable proxy to ensure security and self-custody for MSCA to use.

## 2. What does the plugin do?

To write a plugin for any MSCA, we first need to define the purpose of the plugin by asking a few key questions. We will use the Multi-Owner Plugin we are writing here to answer the questions.

### What does the plugin do?

The Multi-Owner plugin manages owners of an MSCA. It allows multiple owners of an MSCA to authorize executions.

### What kind of functions and logic does the plugin have?

The Multi-Owner plugin will be able to:

- Update (add, delete) owners for an MSCA.
- Check if an address is an owner of an MSCA.
- Show all owners of an MSCA.
- Validate owner signatures of ERC-4337 enabled UserOperation transactions as well as runtime transactions.

### What kind of extra standards/interfaces does the plugin support?

The Multi-Owner plugin will support [ERC-1271](https://eips.ethereum.org/EIPS/eip-1271) for signature validation.

## 3. Map Plugin Logic to MSCA Functions

We can now map the logic in step 2 into the step 1’s function types of a plugin.

- Update (add, delete) owners for an MSCA ⇒ `updateOwners` ⇒ Execution Function
- Check if an address is an owner of an MSCA ⇒ `isOwner` ⇒ Execution Function (optional)
- Show all owners of an MSCA ⇒ `owners` ⇒ Execution Function (optional)
- Validate owner signatures ⇒ `validate` ⇒ Validation Function
- Support ERC-1271 standard ⇒ `supportsInterface` ⇒ Plugin Function
- Support ERC-1271 signature validation ⇒ `isValidSignature` ⇒ Execution Function

You will notice some of the execution functions are optional. Those are view functions. Viewing state of an MSCA can be through the MSCA itself (by installing those functions as execution functions on the account) or can be through the plugin. Therefore, it is up to the plugin dev to decide if it is beneficial to install view functions. The tradeoff is installation gas cost vs convenient access to states through MSCA itself.

In this Multi-Owner plugin, we will not write any hook function. One can follow the same process to map hook functions.

We have a pretty good structure of the Multi-Owner plugin now. It is time to put it in code.

## 4. Write Plugin Logic

Based on the [`IPlugin`](https://github.com/erc6900/reference-implementation/blob/main/src/interfaces/IPlugin.sol#L101) interface of ERC-6900, we will use the ERC-6900 reference implementation’s [`BasePlugin`](https://github.com/erc6900/reference-implementation/blob/main/src/plugins/BasePlugin.sol#L14) as our base.

The core logic might look like the following:

 ```solidity
    contract MultiOwnerPlugin is BasePlugin, IERC1271 {
      function updateOwners(address[] memory ownersToAdd, address[] memory ownersToRemove)
            public
        {} // write your logic here
    
      function isOwner(address addrToCheck) external view returns (bool) {}
      function owners() external view returns (address[] memory) {}
    
        /// @inheritdoc IERC1271
        /// @dev The signature is valid if it is signed by one of the owners' private key
        /// (if the owner is an EOA) or if it is a valid ERC-1271 signature from one of the
        /// owners (if the owner is a contract). Note that unlike the signature
        /// validation used in `validateUserOp`, this does not wrap the digest in
        /// an "Ethereum Signed Message" envelope before checking the signature in
        /// the EOA-owner case.
        function isValidSignature(bytes32 digest, bytes memory signature) public view override returns (bytes4) {}
    
      /// @inheritdoc BasePlugin
      /// @notice Run the user operation validationFunction specified by the `functionId`.
        /// @param functionId An identifier that routes the call to different internal implementations, should there be
        /// more than one.
        /// @param userOp The user operation.
        /// @param userOpHash The user operation hash.
        /// @return Packed validation data for validAfter (6 bytes), validUntil (6 bytes), and authorizer (20 bytes).
      function userOpValidationFunction(uint8 functionId, UserOperation calldata userOp, bytes32 userOpHash)
            external
            view
            override
            returns (uint256)
        {} // write your user operation vaidation logic here, for ERC-4337 call path
    
      /// @inheritdoc BasePlugin
      /// @notice Run the runtime validationFunction specified by the `functionId`.
        /// @dev To indicate the entire call should revert, the function MUST revert.
        /// @param functionId An identifier that routes the call to different internal implementations, should there be
        /// more than one.
        /// @param sender The caller address.
        /// @param value The call value.
        /// @param data The calldata sent.
        function runtimeValidationFunction(uint8 functionId, address sender, uint256 value, bytes calldata data)
            external
            virtual
        {} // write your user operation vaidation logic here, for non-ERC-4337 call path
    
      /// @inheritdoc BasePlugin
      /// @dev Returns true if this contract implements the interface defined by
        /// `interfaceId`. See the corresponding
        /// https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]
        /// to learn more about how these ids are created.
        ///
        /// This function call must use less than 30 000 gas.
        ///
        /// Supporting the IPlugin interface is a requirement for plugin installation. This is also used
        /// by the modular account to prevent standard execution functions `execute` and `executeBatch` from
        /// making calls to plugins.
        /// @param interfaceId The interface ID to check for support.
        /// @return True if the contract supports `interfaceId`.
        function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {
            return interfaceId == type(IPlugin).interfaceId || super.supportsInterface(interfaceId);
        }
    }
```

You will notice most of the functions are fixed name methods required for the type of functions from ERC-6900, and ERC-1271:

**ERC-1271:**

- `isValidSignature`

**ERC-6900:**

- `userOpValidationFunction`
- `runtimeValidationFunction`
- `supportsInterface`

**The rest of the functions are defined by plugin authors:**

- `updateOwners`
- `isOwner`
- `owners`

## 5. MSCA Installation & Uninstallation

Since we are building a global singleton plugin, assuming there will be more than one MSCA using our plugin, it is time to think how we store MSCA states/data and handle the installation and uninstallation process.

### Plugin Storage Consideration

To support ERC-4337 [storage access rules](https://eips.ethereum.org/EIPS/eip-4337#reputation-scoring-and-throttlingbanning-for-global-entities) (you can only access MSCA address associated storage slots during the user operation validation phase), MSCA data needs to to be accessed only through MSCA address.

In this Multi-Owner plugin, we will need to store a collection of owners for each MSCA in the form of one of the following:

- map of arrays: `mapping(address => address[])`
- map of mapping: `mapping(address => mapping(address => bool)))`

Based on how Solidity stores nested dynamic data types, we won’t able to store the above directly on the plugin contract without violating the ERC-4337 storage access rules.

As our plugin will be a global singleton, we need to find a way to use an MSCA account address to construct a key to store associated data/list (aka owner list) without breaking the storage access rules of ERC-4337.

Good news! We will have audited libraries (to be released soon) to help.

At this post, we will use an `AssociatedLinkedListSet` of `bytes32`, and `AssociatedLinkedListSetLib` from [ERC-6900 reference implementation](https://github.com/erc6900/reference-implementation/blob/main/src/libraries/AssociatedLinkedListSetLib.sol) to help store the owners for our plugin.

It might look like this in code:

```solidity
contract MultiOwnerPlugin is BasePlugin, IERC1271 {
  AssociatedLinkedListSet internal _owners;
}
```

### Installation Consideration

When an MSCA installs a global singleton plugin, the plugin needs to initialize necessary states for the MSCA and install necessary execution functions on to the MSCA.

All those behaviors are defined in the following two functions as part of the `IPlugin` interfaces that ERC-6900 requires all plugins to implement.

```solidity
    /// @notice Initialize plugin data for the modular account.
    /// @dev Called by the modular account during `installPlugin`.
    /// @param data Optional bytes array to be decoded and used by the plugin to setup initial plugin data for the
    /// modular account.
    function onInstall(bytes calldata data) external;

    /// @notice Describe the contents and intended configuration of the plugin.
    /// @dev This manifest MUST stay constant over time.
    /// @return A manifest describing the contents and intended configuration of the plugin.
    function pluginManifest() external pure returns (PluginManifest memory);
```

In this Multi-Owner plugin, we want to initialize owners for the MSCA. It might look like this:

```solidity
function onInstall(bytes calldata data) external override isNotInitialized(msg.sender) {
        (address[] memory initialOwners) = abi.decode(data, (address[]));

    // require non empty owner list
        if (initialOwners.length == 0) {
            revert EmptyOwnersNotAllowed();
        }
    address associated = msg.sender; // the associated storage for MSCA (mag.sender)
    uint256 length = initialOwners.length;
        for (uint256 i = 0; i < length;) {
            if (!_owners.tryAdd(associated, SetValue.wrap(bytes30(bytes20(initialOwners[i]))))) {
                // owner cannot be address(0) or duplicated
        revert InvalidOwner(initialOwners[i]);
            }

            unchecked {
                ++i;
            }
        }
    }
```

We specify what to be installed on the MSCA through the `pluginManifest` method. Based on the previous steps on business logic and plugin mapping. We have the following:

- Install 4 identified execution functions (including 2 optional view functions) from above.
- Apply user operations validation function to some MSCA’s native functions and this plugin’s execution function (6 in total and state changing functions only).
  - MSCA’s native functions: `execute`, `executeBatch`, `installPlugin`, `uninstallPlugin`, `upgradeToAndCall`. Once installed, all those native functions can be called with owner signature only. **Note: this is not necessary for almost any other plugins but plugins that manage ownership.**
  - Plugin’s execution function: `updateOwners`. We don’t need to apply the user operation validation function for the two optional view functions. View functions should never be access through the user operation call path as it will cost MSCA gas. It should always be accessed through the runtime call path.
- Apply runtime validation function.
  - Apply the `runtimeValidationFunction` to the same functions (6 in total) as the above point.
  - Indicate all view only execution functions (3 total, including the two optional view functions) should always be allowed in runtime. View functions should only be allowed in the runtime call path.

### Code Example for Multi-Owner Plugin

```solidity
  /// @inheritdoc BasePlugin
    function pluginManifest() external pure override returns (PluginManifest memory) {
        PluginManifest memory manifest;

        manifest.executionFunctions = new bytes4[](4);
        manifest.executionFunctions[0] = this.updateOwners.selector;
        manifest.executionFunctions[1] = this.owners.selector;
        manifest.executionFunctions[2] = this.isOwner.selector;
        manifest.executionFunctions[3] = this.isValidSignature.selector;

        ManifestFunction memory ownerUserOpValidationFunction = ManifestFunction({
            functionType: ManifestAssociatedFunctionType.SELF,
            functionId: uint8(FunctionId.USER_OP_VALIDATION_OWNER),
            dependencyIndex: 0 // Unused.
        });

        // Update Modular Account's native functions to use userOpValidationFunction provided by this plugin
        manifest.userOpValidationFunctions = new ManifestAssociatedFunction[](6);
        manifest.userOpValidationFunctions[0] = ManifestAssociatedFunction({
            executionSelector: this.updateOwners.selector,
            associatedFunction: ownerUserOpValidationFunction
        });
        manifest.userOpValidationFunctions[1] = ManifestAssociatedFunction({
            executionSelector: IStandardExecutor.execute.selector,
            associatedFunction: ownerUserOpValidationFunction
        });
        manifest.userOpValidationFunctions[2] = ManifestAssociatedFunction({
            executionSelector: IStandardExecutor.executeBatch.selector,
            associatedFunction: ownerUserOpValidationFunction
        });
        manifest.userOpValidationFunctions[3] = ManifestAssociatedFunction({
            executionSelector: UpgradeableModularAccount.installPlugin.selector,
            associatedFunction: ownerUserOpValidationFunction
        });
        manifest.userOpValidationFunctions[4] = ManifestAssociatedFunction({
            executionSelector: UpgradeableModularAccount.uninstallPlugin.selector,
            associatedFunction: ownerUserOpValidationFunction
        });
        manifest.userOpValidationFunctions[5] = ManifestAssociatedFunction({
            executionSelector: UUPSUpgradeable.upgradeToAndCall.selector,
            associatedFunction: ownerUserOpValidationFunction
        });

        ManifestFunction memory ownerOrSelfRuntimeValidationFunction = ManifestFunction({
            functionType: ManifestAssociatedFunctionType.SELF,
            functionId: uint8(FunctionId.RUNTIME_VALIDATION_OWNER_OR_SELF),
            dependencyIndex: 0 // Unused.
        });
        ManifestFunction memory alwaysAllowFunction = ManifestFunction({
            functionType: ManifestAssociatedFunctionType.RUNTIME_VALIDATION_ALWAYS_ALLOW,
            functionId: 0, // Unused.
            dependencyIndex: 0 // Unused.
        });

        // Update Modular Account's native functions to use runtimeValidationFunction provided by this plugin
        manifest.runtimeValidationFunctions = new ManifestAssociatedFunction[](9);
        manifest.runtimeValidationFunctions[0] = ManifestAssociatedFunction({
            executionSelector: this.updateOwners.selector,
            associatedFunction: ownerOrSelfRuntimeValidationFunction
        });
        manifest.runtimeValidationFunctions[1] = ManifestAssociatedFunction({
            executionSelector: IStandardExecutor.execute.selector,
            associatedFunction: ownerOrSelfRuntimeValidationFunction
        });
        manifest.runtimeValidationFunctions[2] = ManifestAssociatedFunction({
            executionSelector: IStandardExecutor.executeBatch.selector,
            associatedFunction: ownerOrSelfRuntimeValidationFunction
        });
        manifest.runtimeValidationFunctions[3] = ManifestAssociatedFunction({
            executionSelector: UpgradeableModularAccount.installPlugin.selector,
            associatedFunction: ownerOrSelfRuntimeValidationFunction
        });
        manifest.runtimeValidationFunctions[4] = ManifestAssociatedFunction({
            executionSelector: UpgradeableModularAccount.uninstallPlugin.selector,
            associatedFunction: ownerOrSelfRuntimeValidationFunction
        });
        manifest.runtimeValidationFunctions[5] = ManifestAssociatedFunction({
            executionSelector: UUPSUpgradeable.upgradeToAndCall.selector,
            associatedFunction: ownerOrSelfRuntimeValidationFunction
        });
        manifest.runtimeValidationFunctions[6] = ManifestAssociatedFunction({
            executionSelector: this.isValidSignature.selector,
            associatedFunction: alwaysAllowFunction
        });
        manifest.runtimeValidationFunctions[7] = ManifestAssociatedFunction({
            executionSelector: this.isOwner.selector,
            associatedFunction: alwaysAllowFunction
        });
        manifest.runtimeValidationFunctions[8] = ManifestAssociatedFunction({
            executionSelector: this.owners.selector,
            associatedFunction: alwaysAllowFunction
        });

        return manifest;
    }
```

### Uninstallation Consideration

When an MSCA uninstalls a global singleton plugin, the plugin needs to handle clearing states for the MSCA. The behavior is defined in the following function:

```solidity
    /// @notice Clear plugin data for the modular account.
    /// @dev Called by the modular account during `uninstallPlugin`.
    /// @param data Optional bytes array to be decoded and used by the plugin to clear plugin data for the modular
    /// account.
    function onUninstall(bytes calldata data) external;
```

### Initializing Owners for the MSCA

In this Multi-Owner plugin example, we want to initialize owners for the MSCA.

It might look like the following:

```solidity
  /// @inheritdoc BasePlugin
    function onUninstall(bytes calldata) external override {
        _owners.clear(msg.sender);
    }
```

## 6. Plugin Metadata Setup

It’s time to setup the plugin’s metadata to help users understand what the plugin does. The metadata provides authorship, version, and permission information.

For the Multi-Owner plugin, it might look like this:

```solidity
    /// @inheritdoc BasePlugin
    function pluginMetadata() external pure virtual override returns (PluginMetadata memory) {
        PluginMetadata memory metadata;
        metadata.name = "Multi Owner Plugin";
        metadata.version = "1.0.0";
        metadata.author = "ERC-6900 Plugin Tutorial";

        // Permission strings
        string memory modifyOwnershipPermission = "Modify Ownership";

        // Permission descriptions
        metadata.permissionDescriptors = new SelectorPermission[](1);
        metadata.permissionDescriptors[0] = SelectorPermission({
            functionSelector: this.updateOwners.selector,
            permissionDescription: modifyOwnershipPermission
        });

        return metadata;
    }
```

## 7. Events and Errors

Events and errors are essential to help users and off-chain services/clients to understand what is going on with a certain action. When writing a plugin, we should ask ourselves:

- Do I have clear errors when things go wrong?
- Do I emit enough data to help users and services to build the history state of an MSCA?

## 8. Putting it All Together

Here is what the Multi-Owner plugin code looks like altogether:

```solidity
pragma solidity ^0.8.21;

import {IERC1271} from "@openzeppelin/contracts/interfaces/IERC1271.sol";
import {UserOperation} from "@eth-infinitism/account-abstraction/interfaces/UserOperation.sol";

import {BasePlugin} from "@erc6900/reference-implementation/src/plugins/BasePlugin.sol";
import {
    ManifestAssociatedFunction,
    ManifestAssociatedFunctionType,
    ManifestFunction,
    PluginManifest,
    PluginMetadata,
    SelectorPermission
} from "@erc6900/reference-implementation/src/interfaces/IPlugin.sol";
import {IStandardExecutor} from "@erc6900/reference-implementation/src/interfaces/IStandardExecutor.sol";
import {IStandardExecutor} from "@erc6900/reference-implementation/src/libraries/AssociatedLinkedListSetLib.sol";

/// @title Multi Owner Plugin
/// @author ERC-6900 Plugin Tutorial
contract MultiOwnerPlugin is BasePlugin, IERC1271 {
    using AssociatedLinkedListSetLib for AssociatedLinkedListSet;

    string internal constant _NAME = "Multi Owner Plugin";
    string internal constant _VERSION = "1.0.0";
    string internal constant _AUTHOR = "ERC-6900 Plugin Tutorial";

    constructor() {}

    AssociatedLinkedListSet internal _owners;

    // ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
    // ┃    Execution functions    ┃
    // ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

    function updateOwners(address[] memory ownersToAdd, address[] memory ownersToRemove)
        public
        isInitialized(msg.sender)
    { // update MSCA owners logic lives here}

    // ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
    // ┃  Execution view functions   ┃
    // ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

    function isOwner(address ownerToCheck) external view returns (bool) {
        return isOwnerOf(msg.sender, ownerToCheck);
    }

    function owners() external view returns (address[] memory) {
        return ownersOf(msg.sender);
    }

    /// @inheritdoc IERC1271
    /// @dev The signature is valid if it is signed by one of the owners' private key
    /// (if the owner is an EOA) or if it is a valid ERC-1271 signature from one of the
    /// owners (if the owner is a contract). Note that unlike the signature
    /// validation used in `validateUserOp`, this does not wrap the digest in
    /// an "Ethereum Signed Message" envelope before checking the signature in
    /// the EOA-owner case.
    function isValidSignature(bytes32 digest, bytes memory signature) public view override returns (bytes4) {
        // ERC-1271 signature validation logic lives here
    }

    // ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
    // ┃    Plugin interface functions    ┃
    // ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

    /// @inheritdoc BasePlugin
    function _onInstall(bytes calldata data) internal override isNotInitialized(msg.sender) {
        (address[] memory initialOwners) = abi.decode(data, (address[]));

    // require non empty owner list
        if (initialOwners.length == 0) {
            revert EmptyOwnersNotAllowed();
        }
    address associated = msg.sender; // the associated storage for MSCA (mag.sender)
    uint256 length = initialOwners.length;
        for (uint256 i = 0; i < length;) {
            if (!_owners.tryAdd(associated, SetValue.wrap(bytes30(bytes20(initialOwners[i]))))) {
                revert InvalidOwner(initialOwners[i]);
            }

            unchecked {
                ++i;
            }
        }
    }

    /// @inheritdoc BasePlugin
    function onUninstall(bytes calldata) external override {
        _owners.clear(msg.sender);
    }

    /// @inheritdoc BasePlugin
    function userOpValidationFunction(uint8 functionId, UserOperation calldata userOp, bytes32 userOpHash)
        external
        view
        override
        returns (uint256)
    { // user operation validation logic lives here }

    /// @inheritdoc BasePlugin
    function runtimeValidationFunction(uint8 functionId, address sender, uint256, bytes calldata)
        external
        view
        override
    { // runtime validation logic lives here }

    /// @inheritdoc BasePlugin
    function pluginManifest() external pure override returns (PluginManifest memory) {
        PluginManifest memory manifest;

        manifest.executionFunctions = new bytes4[](4);
        manifest.executionFunctions[0] = this.updateOwners.selector;
        manifest.executionFunctions[1] = this.owners.selector;
        manifest.executionFunctions[2] = this.isOwner.selector;
        manifest.executionFunctions[3] = this.isValidSignature.selector;

        ManifestFunction memory ownerUserOpValidationFunction = ManifestFunction({
            functionType: ManifestAssociatedFunctionType.SELF,
            functionId: uint8(FunctionId.USER_OP_VALIDATION_OWNER),
            dependencyIndex: 0 // Unused.
        });

        // Update Modular Account's native functions to use userOpValidationFunction provided by this plugin
        manifest.userOpValidationFunctions = new ManifestAssociatedFunction[](6);
        manifest.userOpValidationFunctions[0] = ManifestAssociatedFunction({
            executionSelector: this.updateOwners.selector,
            associatedFunction: ownerUserOpValidationFunction
        });
        manifest.userOpValidationFunctions[1] = ManifestAssociatedFunction({
            executionSelector: IStandardExecutor.execute.selector,
            associatedFunction: ownerUserOpValidationFunction
        });
        manifest.userOpValidationFunctions[2] = ManifestAssociatedFunction({
            executionSelector: IStandardExecutor.executeBatch.selector,
            associatedFunction: ownerUserOpValidationFunction
        });
        manifest.userOpValidationFunctions[3] = ManifestAssociatedFunction({
            executionSelector: UpgradeableModularAccount.installPlugin.selector,
            associatedFunction: ownerUserOpValidationFunction
        });
        manifest.userOpValidationFunctions[4] = ManifestAssociatedFunction({
            executionSelector: UpgradeableModularAccount.uninstallPlugin.selector,
            associatedFunction: ownerUserOpValidationFunction
        });
        manifest.userOpValidationFunctions[5] = ManifestAssociatedFunction({
            executionSelector: UUPSUpgradeable.upgradeToAndCall.selector,
            associatedFunction: ownerUserOpValidationFunction
        });

        ManifestFunction memory ownerOrSelfRuntimeValidationFunction = ManifestFunction({
            functionType: ManifestAssociatedFunctionType.SELF,
            functionId: uint8(FunctionId.RUNTIME_VALIDATION_OWNER_OR_SELF),
            dependencyIndex: 0 // Unused.
        });
        ManifestFunction memory alwaysAllowFunction = ManifestFunction({
            functionType: ManifestAssociatedFunctionType.RUNTIME_VALIDATION_ALWAYS_ALLOW,
            functionId: 0, // Unused.
            dependencyIndex: 0 // Unused.
        });

        // Update Modular Account's native functions to use runtimeValidationFunction provided by this plugin
        manifest.runtimeValidationFunctions = new ManifestAssociatedFunction[](9);
        manifest.runtimeValidationFunctions[0] = ManifestAssociatedFunction({
            executionSelector: this.updateOwners.selector,
            associatedFunction: ownerOrSelfRuntimeValidationFunction
        });
        manifest.runtimeValidationFunctions[1] = ManifestAssociatedFunction({
            executionSelector: IStandardExecutor.execute.selector,
            associatedFunction: ownerOrSelfRuntimeValidationFunction
        });
        manifest.runtimeValidationFunctions[2] = ManifestAssociatedFunction({
            executionSelector: IStandardExecutor.executeBatch.selector,
            associatedFunction: ownerOrSelfRuntimeValidationFunction
        });
        manifest.runtimeValidationFunctions[3] = ManifestAssociatedFunction({
            executionSelector: UpgradeableModularAccount.installPlugin.selector,
            associatedFunction: ownerOrSelfRuntimeValidationFunction
        });
        manifest.runtimeValidationFunctions[4] = ManifestAssociatedFunction({
            executionSelector: UpgradeableModularAccount.uninstallPlugin.selector,
            associatedFunction: ownerOrSelfRuntimeValidationFunction
        });
        manifest.runtimeValidationFunctions[5] = ManifestAssociatedFunction({
            executionSelector: UUPSUpgradeable.upgradeToAndCall.selector,
            associatedFunction: ownerOrSelfRuntimeValidationFunction
        });
        manifest.runtimeValidationFunctions[6] = ManifestAssociatedFunction({
            executionSelector: this.isValidSignature.selector,
            associatedFunction: alwaysAllowFunction
        });
        manifest.runtimeValidationFunctions[7] = ManifestAssociatedFunction({
            executionSelector: this.isOwner.selector,
            associatedFunction: alwaysAllowFunction
        });
        manifest.runtimeValidationFunctions[8] = ManifestAssociatedFunction({
            executionSelector: this.owners.selector,
            associatedFunction: alwaysAllowFunction
        });

        return manifest;
    }

    /// @inheritdoc BasePlugin
    function pluginMetadata() external pure virtual override returns (PluginMetadata memory) {
        PluginMetadata memory metadata;
        metadata.name = _NAME;
        metadata.version = _VERSION;
        metadata.author = _AUTHOR;

        // Permission strings
        string memory modifyOwnershipPermission = "Modify Ownership";

        // Permission descriptions
        metadata.permissionDescriptors = new SelectorPermission[](1);
        metadata.permissionDescriptors[0] = SelectorPermission({
            functionSelector: this.updateOwners.selector,
            permissionDescription: modifyOwnershipPermission
        });

        return metadata;
    }

    // ┏━━━━━━━━━━━━━━━┓
    // ┃    EIP-165    ┃
    // ┗━━━━━━━━━━━━━━━┛

    /// @inheritdoc BasePlugin
    function supportsInterface(bytes4 interfaceId) public view override returns (bool) {
        return interfaceId == type(IMultiOwnerPlugin).interfaceId || super.supportsInterface(interfaceId);
    }
}
```

## More Resources

To learn more about the ERC-6900 ecosystem, check out the following resources:

- [erc6900.io](http://erc6900.io/)
- <https://github.com/erc6900/resources>
- <https://github.com/erc6900/reference-implementation>
- <https://twitter.com/erc6900>
