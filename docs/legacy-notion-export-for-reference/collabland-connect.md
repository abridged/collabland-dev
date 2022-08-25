# CollabLand-Connect

```bash
git clone git@github.com:abridged/collabland-connect.git
cd collabland-connect
npm install
npm run build
```

set the api server url to your local tunnel as logged by the monorepo v

```bash
bash start-tipjarbot001.sh (Described in the Monorepo docs)

collabland:discord:ws [WS => Shard 0] [IDENTIFY] Shard 0/1 with intents: 23 +1ms
Local tunnel is started at https://collabland-calebgates.loca.lt
```

start-react.sh

```bash
#REACT_APP_BITSKI_CLIENT_ID=
REACT_APP_IS_DEBUG=false
#REACT_APP_INFURA_ID=
REACT_APP_API_SERVER_URL=https://collabland-calebgates.loca.lt
export PORT=3001

npm run start
```

Main Errors:

- Arm vs Intel
- Memory Limitations when building collab-connect - why require so much memory
- node-pre-gyp

Summary:

[https://github.com/abridged/collabland-connect](https://github.com/abridged/collabland-connect)

```bash
git clone git@github.com:abridged/collabland-connect.git
cd collabland-connect

```

## Error 1

```bash
## Got an error for not having "node-pre-gyp"
npm install -g node-pre-gyp
npm install

npm run build
```

## Error 2

Failing to build - ram error? Using mac with only 8 gigs of ram (thank goodness for M1 Max 64gb Ram)

```bash
Creating an optimized production build...
=============

WARNING: You are currently running a version of TypeScript which is not officially supported by @typescript-eslint/typescript-estree.

You may find that it works just fine, or you may not.

SUPPORTED TYPESCRIPT VERSIONS: >=3.3.1 <4.2.0

YOUR TYPESCRIPT VERSION: 4.6.4

Please only submit bug reports when using the officially supported version.

=============

<--- Last few GCs --->

[18120:0x1049e0000]   174259 ms: Mark-sweep (reduce) 2038.8 (2051.5) -> 2036.9 (2055.3) MB, 1530.2 / 0.1 ms  (+ 0.1 ms in 251 steps since start of marking, biggest step 0.0 ms, walltime since start of marking 1647 ms) (average mu = 0.260, current mu = 0.2[18120:0x1049e0000]   176812 ms: Mark-sweep (reduce) 2039.9 (2055.2) -> 2038.4 (2054.2) MB, 2541.7 / 0.1 ms  (average mu = 0.126, current mu = 0.005) allocation failure scavenge might not succeed

<--- JS stacktrace --->

FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
 1: 0x101306bb5 node::Abort() (.cold.1) [/usr/local/bin/node]
 2: 0x1000ad6c9 node::Abort() [/usr/local/bin/node]
 3: 0x1000ad82f node::OnFatalError(char const*, char const*) [/usr/local/bin/node]
 4: 0x1001f1b97 v8::Utils::ReportOOMFailure(v8::internal::Isolate*, char const*, bool) [/usr/local/bin/node]
 5: 0x1001f1b33 v8::internal::V8::FatalProcessOutOfMemory(v8::internal::Isolate*, char const*, bool) [/usr/local/bin/node]
 6: 0x10039f695 v8::internal::Heap::FatalProcessOutOfMemory(char const*) [/usr/local/bin/node]
 7: 0x1003a113a v8::internal::Heap::RecomputeLimits(v8::internal::GarbageCollector) [/usr/local/bin/node]
 8: 0x10039c865 v8::internal::Heap::PerformGarbageCollection(v8::internal::GarbageCollector, v8::GCCallbackFlags) [/usr/local/bin/node]
 9: 0x10039a190 v8::internal::Heap::CollectGarbage(v8::internal::AllocationSpace, v8::internal::GarbageCollectionReason, v8::GCCallbackFlags) [/usr/local/bin/node]
10: 0x1003a88ba v8::internal::Heap::AllocateRawWithLightRetrySlowPath(int, v8::internal::AllocationType, v8::internal::AllocationOrigin, v8::internal::AllocationAlignment) [/usr/local/bin/node]
11: 0x1003a8941 v8::internal::Heap::AllocateRawWithRetryOrFailSlowPath(int, v8::internal::AllocationType, v8::internal::AllocationOrigin, v8::internal::AllocationAlignment) [/usr/local/bin/node]
12: 0x100376712 v8::internal::Factory::NewFillerObject(int, bool, v8::internal::AllocationType, v8::internal::AllocationOrigin) [/usr/local/bin/node]
13: 0x1006f64c8 v8::internal::Runtime_AllocateInYoungGeneration(int, unsigned long*, v8::internal::Isolate*) [/usr/local/bin/node]
14: 0x100a7c3f9 Builtins_CEntry_Return1_DontSaveFPRegs_ArgvOnStack_NoBuiltinExit [/usr/local/bin/node]
15: 0x2b841fb76cf7
```

To fix this error, you need to update the maximum heap size in node using the following cmd:

```jsx
export NODE_OPTIONS="--max-old-space-size=8192"
```

```jsx
node -e 'console.log(v8.getHeapStatistics().heap_size_limit/(1024*1024))'
```

[https://stackoverflow.com/questions/53230823/fatal-error-ineffective-mark-compacts-near-heap-limit-allocation-failed-javas](https://stackoverflow.com/questions/53230823/fatal-error-ineffective-mark-compacts-near-heap-limit-allocation-failed-javas)

** 

## Error 3

## Arm vs Intel

```bash
Caleb Gates,
Has anyone had issues with npm installing ther collab-connect with an M1 non intel version of node?
I have a developer having this challenge
I cloned my MacbookPro 2019 onto my M1 Max and mine works so people are saying I have the intel version of node

can someone with an m1 run > file $(which node) in terminal and if your out put is v* /bin/node: Mach-O 64-bit executable arm64 please reach out - one of the people working on the proxy wallet is having issues getting setup and needs help.  My output is .nvm/versions/node/v16.0.0/bin/node: Mach-O 64-bit executable x86_64
```

Possible Solution:

[https://www.notion.so/Run-x86-Apps-including-homebrew-in-the-Terminal-on-Apple-Silicon-8350b43d97de4ce690f283277e958602](https://www.notion.so/Run-x86-Apps-including-homebrew-in-the-Terminal-on-Apple-Silicon-8350b43d97de4ce690f283277e958602)

Solution:

[https://twitter.com/endingwithali/status/1522028608960614400](https://twitter.com/endingwithali/status/1522028608960614400)

# Error 4

## AWS Amplify deployment issue

```jsx
Failed to compile.
Failed to minify the bundle. Error: static/js/2.011c9943.chunk.js from Terser
Error: Call retries were exceeded
at /codebuild/output/src089568832/src/collabland-connect/node_modules/react-scripts/scripts/build.js:188:23
at finalCallback (/codebuild/output/src089568832/src/collabland-connect/node_modules/webpack/lib/Compiler.js:257:39)
at /codebuild/output/src089568832/src/collabland-connect/node_modules/webpack/lib/Compiler.js:273:13
```

Solution:

Install dev dependency `yarn add terser -D`
