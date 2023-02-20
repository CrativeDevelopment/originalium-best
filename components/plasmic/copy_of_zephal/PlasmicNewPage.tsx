// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: vXFWcgZVsQStiwmZYTMd6Z
// Component: ZM6crH9W2CmX3H
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { Reveal } from "@plasmicpkgs/react-awesome-reveal"; // plasmic-import: R6s1FdhksG/codeComponent

import { useScreenVariants as useScreenVariants_1SYc7ZVhv84Bua } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 1sYC7ZVhv84bua/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_copy_of_zephal.module.css"; // plasmic-import: vXFWcgZVsQStiwmZYTMd6Z/projectcss
import sty from "./PlasmicNewPage.module.css"; // plasmic-import: ZM6crH9W2CmX3H/css

import Icon16Icon from "./icons/PlasmicIcon__Icon16"; // plasmic-import: nY0LSP2XFn9aDF/icon

export type PlasmicNewPage__VariantMembers = {};
export type PlasmicNewPage__VariantsArgs = {};
type VariantPropType = keyof PlasmicNewPage__VariantsArgs;
export const PlasmicNewPage__VariantProps = new Array<VariantPropType>();

export type PlasmicNewPage__ArgsType = {};
type ArgPropType = keyof PlasmicNewPage__ArgsType;
export const PlasmicNewPage__ArgProps = new Array<ArgPropType>();

export type PlasmicNewPage__OverridesType = {
  root?: p.Flex<"div">;
  frame1918?: p.Flex<"div">;
  frame1945?: p.Flex<"div">;
  frame1943?: p.Flex<"div">;
  frame1944?: p.Flex<"div">;
  frame1985?: p.Flex<"div">;
  buttons?: p.Flex<"div">;
  joinTheClub?: p.Flex<"div">;
  buttons2?: p.Flex<"div">;
  frame1948?: p.Flex<"div">;
  foreground?: p.Flex<"div">;
  h2?: p.Flex<"h2">;
};

export interface DefaultNewPageProps {}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicNewPage__RenderFunc(props: {
  variants: PlasmicNewPage__VariantsArgs;
  args: PlasmicNewPage__ArgsType;
  overrides: PlasmicNewPage__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_1SYc7ZVhv84Bua()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicNewPage.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicNewPage.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicNewPage.pageMetadata.title}
        />
        <meta
          key="description"
          name="description"
          content={PlasmicNewPage.pageMetadata.description}
        />
        <meta
          key="og:description"
          property="og:description"
          content={PlasmicNewPage.pageMetadata.description}
        />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={PlasmicNewPage.pageMetadata.description}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            sty.root
          )}
        >
          <div className={classNames(projectcss.all, sty.freeBox__r0Lgg)}>
            <p.Stack
              as={"div"}
              data-plasmic-name={"frame1918"}
              data-plasmic-override={overrides.frame1918}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame1918)}
            >
              <p.Stack
                as={"div"}
                data-plasmic-name={"frame1945"}
                data-plasmic-override={overrides.frame1945}
                hasGap={true}
                className={classNames(projectcss.all, sty.frame1945)}
              >
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"frame1943"}
                  data-plasmic-override={overrides.frame1943}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.frame1943)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__odqLi
                    )}
                  >
                    {"Discord"}
                  </div>
                </p.Stack>

                <p.Stack
                  as={"div"}
                  data-plasmic-name={"frame1944"}
                  data-plasmic-override={overrides.frame1944}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.frame1944)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__l0GfD
                    )}
                  >
                    {"youutbe"}
                  </div>
                </p.Stack>
              </p.Stack>
            </p.Stack>

            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__zfBJb)}>
                <Reveal
                  className={classNames("__wab_instance", sty.reveal__l7NdM)}
                  triggerOnce={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__lFTsc
                    )}
                  >
                    {"originalium"}
                  </div>
                </Reveal>

                <Reveal
                  className={classNames("__wab_instance", sty.reveal___50SWg)}
                  delay={1 as const}
                  triggerOnce={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__jrdB
                    )}
                  >
                    {
                      "literally za best and funiest minecraft community out there hosted by trende2001 with love from honduras, and baba akram!"
                    }
                  </div>
                </Reveal>

                <Reveal
                  className={classNames("__wab_instance", sty.reveal__sB6B9)}
                  delay={2 as const}
                  triggerOnce={true}
                >
                  <p.Stack
                    as={"div"}
                    data-plasmic-name={"frame1985"}
                    data-plasmic-override={overrides.frame1985}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.frame1985)}
                  >
                    <p.Stack
                      as={"div"}
                      data-plasmic-name={"buttons"}
                      data-plasmic-override={overrides.buttons}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.buttons)}
                    >
                      <div
                        data-plasmic-name={"joinTheClub"}
                        data-plasmic-override={overrides.joinTheClub}
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.joinTheClub
                        )}
                      >
                        {"discord"}
                      </div>
                    </p.Stack>

                    <p.Stack
                      as={"div"}
                      data-plasmic-name={"buttons2"}
                      data-plasmic-override={overrides.buttons2}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.buttons2)}
                    >
                      <p.Stack
                        as={"div"}
                        data-plasmic-name={"frame1948"}
                        data-plasmic-override={overrides.frame1948}
                        hasGap={true}
                        className={classNames(projectcss.all, sty.frame1948)}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__lmUbG
                          )}
                        >
                          {"youtube"}
                        </div>
                      </p.Stack>
                    </p.Stack>
                  </p.Stack>
                </Reveal>
              </div>
            ) : null}
          </div>

          {true ? (
            <div className={classNames(projectcss.all, sty.freeBox__aknTz)}>
              <p.Stack
                as={"div"}
                data-plasmic-name={"foreground"}
                data-plasmic-override={overrides.foreground}
                hasGap={true}
                className={classNames(projectcss.all, sty.foreground)}
              >
                <div className={classNames(projectcss.all, sty.column__irDxv)}>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__hoQ7E)}
                  >
                    <Reveal
                      className={classNames(
                        "__wab_instance",
                        sty.reveal__mviD3
                      )}
                      delay={0.2 as const}
                      triggerOnce={true}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__oLhz4
                        )}
                      >
                        {"originalium"}
                      </div>
                    </Reveal>

                    <Reveal
                      className={classNames(
                        "__wab_instance",
                        sty.reveal__kGqaj
                      )}
                      delay={0.5 as const}
                      triggerOnce={true}
                    >
                      <h2
                        data-plasmic-name={"h2"}
                        data-plasmic-override={overrides.h2}
                        className={classNames(
                          projectcss.all,
                          projectcss.h2,
                          projectcss.__wab_text,
                          sty.h2
                        )}
                      >
                        {"why originaslium"}
                      </h2>
                    </Reveal>

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__hnezg
                      )}
                    >
                      {
                        "ok so basically originalium is literally za best with the founder of trende2001 with love from baba arkam and honduras, its aslo very funnyt and literally the best!!!11"
                      }
                    </div>
                  </p.Stack>
                </div>

                <div className={classNames(projectcss.all, sty.column__zYyln)}>
                  <div
                    className={classNames(projectcss.all, sty.freeBox___09K2Y)}
                  >
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(
                        projectcss.all,
                        sty.freeBox___6Hslr
                      )}
                    >
                      <Reveal
                        className={classNames(
                          "__wab_instance",
                          sty.reveal__mIxdw
                        )}
                        delay={1.5 as const}
                        triggerOnce={true}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__fzaXb
                          )}
                        >
                          {"wtf literally the best!!!!!!111"}
                        </div>
                      </Reveal>

                      <Icon16Icon
                        className={classNames(projectcss.all, sty.svg__jy4Ww)}
                        role={"img"}
                      />
                    </p.Stack>

                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__nZp7Q)}
                    >
                      <Reveal
                        className={classNames(
                          "__wab_instance",
                          sty.reveal__nvOzt
                        )}
                        delay={2 as const}
                        triggerOnce={true}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__gvnXr
                          )}
                        >
                          {"funny youtube vidoes"}
                        </div>
                      </Reveal>

                      <Icon16Icon
                        className={classNames(projectcss.all, sty.svg__pZcxS)}
                        role={"img"}
                      />
                    </p.Stack>

                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__kbEm5)}
                    >
                      <Reveal
                        className={classNames(
                          "__wab_instance",
                          sty.reveal__e7RXu
                        )}
                        delay={2.5 as const}
                        triggerOnce={true}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__gXZs
                          )}
                        >
                          {"the best community and founder trende2001"}
                        </div>
                      </Reveal>

                      <Icon16Icon
                        className={classNames(projectcss.all, sty.svg__o4DZ)}
                        role={"img"}
                      />
                    </p.Stack>

                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__nuS5H)}
                    >
                      <Reveal
                        className={classNames(
                          "__wab_instance",
                          sty.reveal__w1Ul8
                        )}
                        delay={3 as const}
                        triggerOnce={true}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__fv5Ge
                          )}
                        >
                          {"love from baba arkam and honduras"}
                        </div>
                      </Reveal>

                      <Icon16Icon
                        className={classNames(projectcss.all, sty.svg__em4Fp)}
                        role={"img"}
                      />
                    </p.Stack>

                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__fbos0)}
                    >
                      <Reveal
                        className={classNames(
                          "__wab_instance",
                          sty.reveal__qIdGa
                        )}
                        delay={3.5 as const}
                        triggerOnce={true}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__aKmEd
                          )}
                        >
                          {"theres swedes in the community, wtf the best!"}
                        </div>
                      </Reveal>

                      <Icon16Icon
                        className={classNames(projectcss.all, sty.svg__zMv4F)}
                        role={"img"}
                      />
                    </p.Stack>
                  </div>
                </div>
              </p.Stack>
            </div>
          ) : null}
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "frame1918",
    "frame1945",
    "frame1943",
    "frame1944",
    "frame1985",
    "buttons",
    "joinTheClub",
    "buttons2",
    "frame1948",
    "foreground",
    "h2"
  ],
  frame1918: ["frame1918", "frame1945", "frame1943", "frame1944"],
  frame1945: ["frame1945", "frame1943", "frame1944"],
  frame1943: ["frame1943"],
  frame1944: ["frame1944"],
  frame1985: ["frame1985", "buttons", "joinTheClub", "buttons2", "frame1948"],
  buttons: ["buttons", "joinTheClub"],
  joinTheClub: ["joinTheClub"],
  buttons2: ["buttons2", "frame1948"],
  frame1948: ["frame1948"],
  foreground: ["foreground", "h2"],
  h2: ["h2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  frame1918: "div";
  frame1945: "div";
  frame1943: "div";
  frame1944: "div";
  frame1985: "div";
  buttons: "div";
  joinTheClub: "div";
  buttons2: "div";
  frame1948: "div";
  foreground: "div";
  h2: "h2";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNewPage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNewPage__VariantsArgs;
    args?: PlasmicNewPage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNewPage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicNewPage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicNewPage__ArgProps,
          internalVariantPropNames: PlasmicNewPage__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicNewPage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNewPage";
  } else {
    func.displayName = `PlasmicNewPage.${nodeName}`;
  }
  return func;
}

export const PlasmicNewPage = Object.assign(
  // Top-level PlasmicNewPage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    frame1918: makeNodeComponent("frame1918"),
    frame1945: makeNodeComponent("frame1945"),
    frame1943: makeNodeComponent("frame1943"),
    frame1944: makeNodeComponent("frame1944"),
    frame1985: makeNodeComponent("frame1985"),
    buttons: makeNodeComponent("buttons"),
    joinTheClub: makeNodeComponent("joinTheClub"),
    buttons2: makeNodeComponent("buttons2"),
    frame1948: makeNodeComponent("frame1948"),
    foreground: makeNodeComponent("foreground"),
    h2: makeNodeComponent("h2"),

    // Metadata about props expected for PlasmicNewPage
    internalVariantProps: PlasmicNewPage__VariantProps,
    internalArgProps: PlasmicNewPage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "originalium za best!",
      description:
        "with help from baba akram, and honduras, we have been able to create the most best and funniest minecraft server ever, originalium! founder: trende2001",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicNewPage;
/* prettier-ignore-end */
