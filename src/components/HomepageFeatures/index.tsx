import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Easy to connect and collaborate",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Collab.Land was designed from the ground up to facilitate connections
        and collaborations by enabling web3 with popular web2 platforms.
      </>
    ),
  },
  {
    title: "Create a community of communities",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Collab.Land creates a community of communities to empower membership and
        ownership through decentralized identities, crypto assets and verifiable
        credentials.
      </>
    ),
  },
  {
    title: "Build a decentralized platform",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Collab.Land promotes progressive decentralization to so that our
        communities and members can decide what data to own and what to share.
        Collab.Land is in the process of opening its source code and platform to
        developers and exit to the community for ownership and governance.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
