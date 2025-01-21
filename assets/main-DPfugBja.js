import {
  d as x,
  Q as h,
  c as f,
  m as X,
  j as A,
  W as l,
  a as E,
  B as N,
  r as z,
  u as q,
  b as j,
  e as J,
  L as a,
  N as L,
  _ as S,
  R,
  f as k,
  g as Z,
  h as y,
  i as W,
} from "./vendor-DsZaj2x0.js";
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) i(e);
  new MutationObserver((e) => {
    for (const d of e)
      if (d.type === "childList")
        for (const c of d.addedNodes)
          c.tagName === "LINK" && c.rel === "modulepreload" && i(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(e) {
    const d = {};
    return (
      e.integrity && (d.integrity = e.integrity),
      e.referrerPolicy && (d.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === "use-credentials"
        ? (d.credentials = "include")
        : e.crossOrigin === "anonymous"
        ? (d.credentials = "omit")
        : (d.credentials = "same-origin"),
      d
    );
  }
  function i(e) {
    if (e.ep) return;
    e.ep = !0;
    const d = s(e);
    fetch(e.href, d);
  }
})();
var H = {
  NVM_INC: "/Users/dohoangviet/.nvm/versions/node/v16.20.2/include/node",
  MANPATH:
    "/Users/dohoangviet/.nvm/versions/node/v16.20.2/share/man:/opt/homebrew/share/man:/usr/share/man:/usr/local/share/man:/Users/dohoangviet/.nvm/versions/node/v16.20.2/share/man:/opt/homebrew/share/man::",
  npm_package_dependencies_vite_plugin_babel_macros: "^1.0.6",
  TERM_PROGRAM: "vscode",
  NODE: "/Users/dohoangviet/.nvm/versions/node/v16.20.2/bin/node",
  INIT_CWD: "/Users/dohoangviet/Desktop/HOLA/Opclouds/opc-fe",
  NVM_CD_FLAGS: "-q",
  npm_package_devDependencies_typescript: "^5.2.2",
  npm_package_dependencies_react_hook_form: "^7.51.0",
  npm_package_dependencies_axios: "^1.6.7",
  npm_package_dependencies__esbuild_plugins_node_globals_polyfill: "^0.2.3",
  npm_config_version_git_tag: "true",
  SHELL: "/bin/zsh",
  TERM: "xterm-256color",
  npm_package_devDependencies_vite: "^5.1.4",
  npm_package_dependencies_vite_plugin_svgr: "^4.2.0",
  npm_package_dependencies__hookform_resolvers: "^3.3.4",
  TMPDIR: "/var/folders/8z/7bjrw5gx7p39xb1fwt7xwt1r0000gn/T/",
  HOMEBREW_REPOSITORY: "/opt/homebrew",
  npm_package_scripts_lint:
    "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
  npm_config_init_license: "MIT",
  npm_config_email: "hvietdo99@gmail.com",
  TERM_PROGRAM_VERSION: "1.87.2",
  npm_package_devDependencies__vitejs_plugin_react: "^4.2.1",
  npm_package_dependencies_react_loading_skeleton: "^3.4.0",
  npm_package_scripts_dev: "vite",
  MallocNanoZone: "0",
  ORIGINAL_XDG_CURRENT_DESKTOP: "undefined",
  ZDOTDIR: "/Users/dohoangviet",
  npm_package_dependencies_postcss: "^8.4.35",
  npm_package_private: "true",
  npm_config_registry: "https://registry.yarnpkg.com",
  ZSH: "/Users/dohoangviet/.oh-my-zsh",
  npm_package_devDependencies_eslint_plugin_react_refresh: "^0.4.5",
  npm_package_dependencies_react_dom: "^18.2.0",
  npm_package_dependencies__headlessui_react: "^1.7.18",
  npm_package_readmeFilename: "README.md",
  USER: "dohoangviet",
  NVM_DIR: "/Users/dohoangviet/.nvm",
  npm_package_description: "## Getting started",
  LS_COLORS:
    "di=1;36:ln=35:so=32:pi=33:ex=31:bd=34;46:cd=34;43:su=30;41:sg=30;46:tw=30;42:ow=30;43",
  npm_package_devDependencies__types_react: "^18.2.56",
  npm_package_dependencies_wagmi: "^2.5.7",
  npm_package_dependencies__ethersproject_bignumber: "^5.7.0",
  COMMAND_MODE: "unix2003",
  npm_package_dependencies_viem: "^2.7.16",
  npm_package_dependencies_react_icons: "^5.0.1",
  SSH_AUTH_SOCK: "/private/tmp/com.apple.launchd.BinIKLjklB/Listeners",
  __CF_USER_TEXT_ENCODING: "0x1F5:0x0:0x0",
  npm_package_devDependencies_eslint: "^8.56.0",
  npm_package_dependencies_styled_components: "^6.1.8",
  npm_execpath: "/usr/local/lib/node_modules/yarn/bin/yarn.js",
  npm_package_devDependencies__typescript_eslint_eslint_plugin: "^7.0.2",
  npm_package_dependencies__ethersproject_constants: "^5.7.0",
  PAGER: "less",
  npm_package_dependencies_vite_tsconfig_paths: "^4.3.1",
  LSCOLORS: "Gxfxcxdxbxegedabagacad",
  npm_package_devDependencies__types_react_dom: "^18.2.19",
  npm_package_devDependencies__typescript_eslint_parser: "^7.0.2",
  PATH: "/var/folders/8z/7bjrw5gx7p39xb1fwt7xwt1r0000gn/T/yarn--1711632754051-0.9254903284661504:/Users/dohoangviet/Desktop/HOLA/Opclouds/opc-fe/node_modules/.bin:/Users/dohoangviet/.config/yarn/link/node_modules/.bin:/Users/dohoangviet/.yarn/bin:/Users/dohoangviet/.nvm/versions/node/v16.20.2/libexec/lib/node_modules/npm/bin/node-gyp-bin:/Users/dohoangviet/.nvm/versions/node/v16.20.2/lib/node_modules/npm/bin/node-gyp-bin:/Users/dohoangviet/.nvm/versions/node/v16.20.2/bin/node_modules/npm/bin/node-gyp-bin:/Users/dohoangviet/.nvm/versions/node/v16.20.2/bin:/Users/dohoangviet/.local/share/solana/install/active_release/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Users/dohoangviet/.nvm/versions/node/v16.20.2/bin:/Users/dohoangviet/.local/share/solana/install/active_release/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/Users/dohoangviet/.cargo/bin:/Users/dohoangviet/.foundry/bin",
  npm_config_argv:
    '{"remain":[],"cooked":["run","build"],"original":["build"]}',
  _: "/Users/dohoangviet/Desktop/HOLA/Opclouds/opc-fe/node_modules/.bin/vite",
  __CFBundleIdentifier: "com.microsoft.VSCode",
  USER_ZDOTDIR: "/Users/dohoangviet",
  npm_package_dependencies_react_toastify: "^10.0.4",
  npm_package_dependencies_bignumber_js: "^9.1.2",
  PWD: "/Users/dohoangviet/Desktop/HOLA/Opclouds/opc-fe",
  npm_package_devDependencies_tailwindcss: "^3.4.1",
  npm_package_dependencies__ethersproject_abi: "^5.7.0",
  npm_package_devDependencies_eslint_plugin_react_hooks: "^4.6.0",
  npm_package_scripts_preview: "vite preview",
  npm_lifecycle_event: "build",
  npm_package_dependencies_ua_parser_js: "^1.0.37",
  LANG: "en_US.UTF-8",
  npm_package_name: "vite-project",
  npm_package_dependencies_autoprefixer: "^10.4.17",
  npm_package_scripts_build: "tsc && vite build",
  npm_config_version_commit_hooks: "true",
  XPC_FLAGS: "0x0",
  VSCODE_GIT_ASKPASS_EXTRA_ARGS: "",
  npm_package_dependencies_react_router_dom: "^6.22.2",
  npm_config_username: "mantleswapv3",
  npm_package_dependencies__web3modal_wagmi: "^4.0.10",
  npm_package_dependencies__types_ua_parser_js: "^0.7.39",
  npm_config_bin_links: "true",
  npm_package_dependencies__tanstack_react_query: "^5.24.1",
  XPC_SERVICE_NAME: "0",
  npm_package_version: "0.0.0",
  VSCODE_INJECTION: "1",
  HOME: "/Users/dohoangviet",
  SHLVL: "2",
  npm_package_type: "module",
  VSCODE_GIT_ASKPASS_MAIN:
    "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js",
  npm_package_dependencies_framer_motion: "^11.0.8",
  npm_package_dependencies__ethersproject_address: "^5.7.0",
  npm_config_save_prefix: "^",
  npm_config_strict_ssl: "true",
  HOMEBREW_PREFIX: "/opt/homebrew",
  npm_config_version_git_message: "v%s",
  LOGNAME: "dohoangviet",
  LESS: "-R",
  YARN_WRAP_OUTPUT: "false",
  npm_lifecycle_script: "tsc && vite build",
  npm_package_dependencies_zod: "^3.22.4",
  VSCODE_GIT_IPC_HANDLE:
    "/var/folders/8z/7bjrw5gx7p39xb1fwt7xwt1r0000gn/T/vscode-git-033492ea56.sock",
  npm_package_dependencies_react: "^18.2.0",
  npm_package_dependencies_ethers: "^6.11.1",
  NVM_BIN: "/Users/dohoangviet/.nvm/versions/node/v16.20.2/bin",
  npm_config_version_git_sign: "",
  npm_config_ignore_scripts: "",
  npm_config_user_agent: "yarn/1.22.19 npm/? node/v16.20.2 darwin arm64",
  HOMEBREW_CELLAR: "/opt/homebrew/Cellar",
  INFOPATH: "/opt/homebrew/share/info:/opt/homebrew/share/info:",
  GIT_ASKPASS:
    "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh",
  VSCODE_GIT_ASKPASS_NODE:
    "/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)",
  npm_config_init_version: "1.0.0",
  npm_config_ignore_optional: "",
  COLORTERM: "truecolor",
  npm_node_execpath: "/Users/dohoangviet/.nvm/versions/node/v16.20.2/bin/node",
  npm_config_version_tag_prefix: "v",
  NODE_ENV: "production",
  VITE_WALLET_PROJECT_ID: "b4a77bd569642fa0e44c611836e41aef",
  VITE_SHEET_URL:
    "https://sheet.best/api/sheets/3247c961-6cb3-4e9e-acb1-5e1e7ab49731",
  VITE_SHEET_VM_URL:
    "https://sheet.best/api/sheets/1eb2d354-9481-495d-af82-a3f5516e4643",
};
const O = H.VITE_WALLET_PROJECT_ID,
  V = {
    name: "Oracle",
    description: "Oracle",
    url: "https://opclouds.tech",
    icons: ["https://avatars.githubusercontent.com/u/37784886"],
  },
  G = [X],
  p = x({
    chains: G,
    projectId: O,
    metadata: V,
    enableWalletConnect: !0,
    enableInjected: !0,
    enableEIP6963: !0,
    enableCoinbase: !0,
  }),
  P = new h();
f({ wagmiConfig: p, projectId: O, defaultChain: X });
const T = ({ children: u }) =>
  A.jsx(l, {
    config: p,
    children: A.jsx(E, { client: P, children: A.jsx(N, { children: u }) }),
  });
function m() {
  return A.jsxs("img", {
    src: "/caption.png",
    style: { maxWidth: "initial", width: "auto" }
  });
}
function I() {
  return A.jsxs("img", {
    src: "/caption.png",
    style: { maxWidth: "initial", width: "auto" }
  });
}
const Y = () =>
    A.jsx("div", {
      role: "status",
      children: A.jsxs("svg", {
        "aria-hidden": "true",
        className: "w-6 h-6 animate-spin text-transparent fill-white",
        viewBox: "0 0 100 101",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          A.jsx("path", {
            d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
            fill: "currentColor",
          }),
          A.jsx("path", {
            d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
            fill: "currentFill",
          }),
        ],
      }),
    }),
  F = ({
    children: u,
    icon: t,
    className: s,
    disabled: i,
    variant: e = "default",
    loading: d,
    onClick: c,
    ...r
  }) =>
    A.jsx("button", {
      style: {
        background: i
          ? "#b5b5b5"
          : e === "default"
          ? "var(--Neon-1, radial-gradient(87.08% 85.65% at 104.95% -4.05%, #FF8BF2 0%, #A664FA 100%))"
          : e === "wait"
          ? "#F69828"
          : "",
      },
      className: `bg-cover bg-no-repeat  outline-none max-h-[48px] flex items-center justify-center max-md:px-3 max-md:py-3 max-md:font-medium max-md:text-sm px-6 py-4 md:min-w-[134px] rounded-md md:rounded-xl font-medium md:font-semibold text-base ${s} ${
        i && "cursor-not-allowed"
      } ${
        i
          ? "text-white"
          : e === "outline"
          ? "title-nodes border-[#A665FA] border"
          : "text-white border-transparent border-none"
      }`,
      onClick: () => {
        i || (c && c());
      },
      ...r,
      children: d
        ? A.jsx("div", {
            className: "flex items-center justify-center min-h-[28px]",
            children: A.jsx(Y, {}),
          })
        : A.jsxs("div", {
            className: "flex items-center gap-x-2 justify-center",
            children: [t, u],
          }),
    }),
  v = [
    { title: "GPU Services", path: "/gpu-services" },
    { title: "VM Services", path: "/vm-services" },
    { title: "Stake" },
  ],
  M = () => {
    const [u, t] = z.useState(!1),
      [s, i] = z.useState(window.innerWidth),
      { address: e } = q(),
      { open: d } = j(),
      c = () => {
        window.scrollY > 20 ? t(!0) : t(!1);
      };
    z.useEffect(() => {
      const n = () => {
        i(window.innerWidth);
      };
      return (
        window.addEventListener("resize", n),
        window.addEventListener("scroll", c),
        () => {
          window.removeEventListener("scroll", c),
            window.removeEventListener("resize", n);
        }
      );
    }, []);
    const { pathname: r } = J();
    return A.jsxs("div", {
      children: [
        A.jsx("div", {
          className: `fixed top-0 right-0 left-0 mx-auto w-full text-white backdrop-blur-lg z-[60]
      `,
          children: A.jsxs("div", {
            className:
              "w-full flex h-16 py-10 items-center justify-between container mx-auto",
            children: [
              A.jsx(a, {
                to: "/",
                children: s > 768 ? A.jsx(m, {}) : A.jsx(I, {}),
              }),
              A.jsx("div", {
                className:
                  "hidden md:flex items-center gap-9 text-lg font-normal",
                children: v.map((n, b) =>
                  A.jsx(
                    a,
                    {
                      to: n.path ?? "",
                      "aria-disabled": !n.path,
                      className: `${
                        (r !== "/" && r === n.path) ||
                        (r === "/" && n.path === "/gpu-services")
                          ? "text-[#AF68FA] font-semibold"
                          : ""
                      } cursor-pointer aria-disabled:text-white/20 aria-disabled:cursor-not-allowed`,
                      children: n.title,
                    },
                    b
                  )
                ),
              }),
              e
                ? A.jsx("w3m-button", {})
                : A.jsx(F, { onClick: d, children: "Connect Wallet" }),
            ],
          }),
        }),
        A.jsx("div", {
          className:
            "bg-[#07091A]/80 backdrop-blur-md md:hidden fixed z-[60] bottom-0 right-0 left-0 h-16 flex items-center justify-around container mx-auto text-white rounded-tl-xl rounded-tr-xl",
          children: v.map((n, b) =>
            A.jsx(
              L,
              {
                to: n.path ?? "",
                "aria-disabled": !n.path,
                className: `${
                  (r !== "/" && r === n.path) ||
                  (r === "/" && n.path === "/gpu-services")
                    ? "text-[#AF68FA] font-semibold"
                    : ""
                } cursor-pointer aria-disabled:text-white/20 aria-disabled:cursor-not-allowed`,
                children: n.title,
              },
              b
            )
          ),
        }),
      ],
    });
  },
  w = () => {
    const [u, t] = z.useState(!0),
      s = document.getElementsByTagName("html");
    return (
      z.useEffect(() => {
        const i = setTimeout(() => {
          t(!1);
        }, 2e3);
        return (
          u === !0
            ? (s[0].style.overflow = "hidden")
            : (s[0].style.overflow = "unset"),
          () => clearTimeout(i)
        );
      }, [u]),
      A.jsx("div", {
        className: `${
          u ? "top-[0%]" : "top-[-100%]"
        } absolute h-full right-0 left-0 z-[9999] transition-all duration-[1000ms] scroll-smooth`,
        children: A.jsx("div", {
          className:
            "bg-[#0C0911] w-screen h-screen flex items-center justify-center",
          children: A.jsx("div", {
            className: "scale-[1.5] md:scale-[2] lg:scale-[4]",
            children: A.jsx(m, {}),
          }),
        }),
      })
    );
  },
  U = ({ children: u }) =>
    A.jsxs("div", {
      children: [
        A.jsx(M, {}),
        A.jsx(w, {}),
        A.jsx("div", {
          className:
            "relative text-white pt-20 md:pt-36 pb-10 md:pb-0 overflow-hidden",
          children: u,
        }),
      ],
    }),
  o = z.lazy(() =>
    S(() => import("./index-BMOkBRXw.js"), __vite__mapDeps([0, 1, 2, 3]))
  ),
  K = z.lazy(() =>
    S(() => import("./index-CdZXGeNd.js"), __vite__mapDeps([4, 1, 2, 3]))
  ),
  D = [
    { path: "/", component: A.jsx(o, {}) },
    { path: "/gpu-services", component: A.jsx(o, {}) },
    { path: "/vm-services", component: A.jsx(K, {}) },
  ];
function C() {
  return A.jsxs(R.StrictMode, {
    children: [
      A.jsx(T, {
        children: A.jsx(A.Fragment, {
          children: A.jsx(U, {
            children: A.jsx(z.Suspense, {
              children: A.jsx(k, {
                children: D.map((u, t) =>
                  A.jsx(Z, { path: u.path, element: u.component }, t)
                ),
              }),
            }),
          }),
        }),
      }),
      A.jsx(y, {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: !1,
        newestOnTop: !1,
        closeOnClick: !0,
        rtl: !1,
        pauseOnFocusLoss: !0,
        draggable: !0,
        pauseOnHover: !0,
        theme: "dark",
      }),
    ],
  });
}
W.createRoot(document.getElementById("root")).render(
  A.jsx(R.StrictMode, { children: A.jsx(C, {}) })
);
export { F as B };
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = [
      "assets/index-BMOkBRXw.js",
      "assets/vendor-DsZaj2x0.js",
      "assets/SkeletonLoader-BcMseZQF.js",
      "assets/SkeletonLoader-CqACEEbq.css",
      "assets/index-CdZXGeNd.js",
    ];
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i]);
}
