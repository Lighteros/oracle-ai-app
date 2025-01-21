import {
  z as r,
  r as o,
  u as C,
  b as y,
  k as D,
  j as e,
  l as A,
} from "./vendor-DsZaj2x0.js";
import {
  B as N,
  a as E,
  u as M,
  I as n,
  T as v,
  S as B,
  f as R,
  O as k,
  t as I,
  b as T,
  s as S,
  c as U,
  M as F,
} from "./SkeletonLoader-BcMseZQF.js";
import { B as p } from "./main-DPfugBja.js";
const G = r.object({
    businessName: r.string().min(1, "Business Name is required"),
    officialWebsite: r
      .string()
      .url("Invalid website address")
      .min(1, "Website is required"),
    corporateEmail: r
      .string()
      .email("Invalid email address")
      .min(1, "Email is required"),
    purpose: r
      .string()
      .min(10, "Purpose/Use Case must be at least 10 characters")
      .min(1, "Purpose/Use Case is required"),
    characteristics: r
      .string()
      .min(10, "GPU Characteristics must be at least 10 characters")
      .min(1, "GPU Characteristics are required"),
    fullName: r.string().min(1, "Full name is required"),
    role: r
      .string()
      .min(5, "Role/Designation must be at least 5 characters")
      .min(1, "Role/Designation is required"),
    email: r
      .string()
      .email("Invalid email address")
      .min(1, "Email is required"),
    telegram: r.string().min(1, "Telegram Username is required"),
  }),
  O = ({ onClose: l, model: c }) => {
    const [d, m] = o.useState(!1),
      { address: s } = C(),
      { open: u } = y(),
      { data: f, isLoading: x } = D({
        ...k,
        functionName: "balanceOf",
        args: [s],
      }),
      b = o.useMemo(
        () => new N(f?.toString() ?? 0).dividedBy(E.pow(18)).toString(),
        [f]
      ),
      h = o.useMemo(() => new N(b).gte(c.priceInNumber), [b, c]),
      {
        register: t,
        handleSubmit: P,
        formState: { errors: i },
      } = M({
        resolver: I(G),
        mode: "onChange",
        defaultValues: {
          businessName: "",
          officialWebsite: "",
          corporateEmail: "",
          purpose: "",
          characteristics: "",
          fullName: "",
          role: "",
          email: "",
          telegram: "",
        },
      }),
      g = o.useMemo(() => x || !h || d, [x, h, d]),
      w = async (a) => {
        if (!(!a || g))
          try {
            m(!0),
              (
                await T.post(S, {
                  Address: s,
                  Model: c.name,
                  "Business Name": a.businessName,
                  "Official Website": a.officialWebsite,
                  "Corporate Email": a.corporateEmail,
                  "Purpose/Use Case": a.purpose,
                  "Desired GPU Characteristics": a.characteristics,
                  "Full Name": a.fullName,
                  "Role/Designation": a.role,
                  "Your Email": a.email,
                  "Your Telegram": a.telegram,
                })
              ).status === 200 && (l(), A.success("Form sent!"));
          } catch (j) {
            console.log(j);
          } finally {
            m(!1);
          }
      };
    return e.jsxs("div", {
      className:
        "bg-[rgba(33,24,41,0.90)] rounded-3xl p-5 md:p-8 max-w-[630px] border border-[rgba(84,70,95,0.60)] space-y-5 w-full md:w-[630px]",
      children: [
        e.jsxs("div", {
          className: "space-y-2",
          children: [
            e.jsx("h2", {
              className:
                "text-2xl md:text-4xl font-semibold uppercase text-[#D1C4DA]",
              children: "Rent GPU",
            }),
            e.jsxs("div", {
              className: "text-sm text-[rgba(209,196,218,0.90)]",
              children: [
                e.jsx("p", {
                  children:
                    "Submit your inquiry, and our team will reply soon.",
                }),
                e.jsxs("p", {
                  children: [
                    "For further information, please join",
                    " ",
                    e.jsx("a", {
                      href: "https://t.me/OpClouds_Tech",
                      className: "text-[#A665FA]",
                      target: "_blank",
                      children: "@Oracle_Tech",
                    }),
                    " ",
                    "on Telegram.",
                  ],
                }),
              ],
            }),
          ],
        }),
        e.jsxs("form", {
          className: "space-y-6",
          onSubmit: P(w),
          children: [
            e.jsx("div", { children: "*Business Profile:" }),
            e.jsx(n, {
              placeholder: "Business Name",
              errors: i,
              register: t,
              name: "businessName",
            }),
            e.jsx(n, {
              placeholder: "Official Website",
              errors: i,
              register: t,
              name: "officialWebsite",
            }),
            e.jsx(n, {
              placeholder: "Corporate Email",
              errors: i,
              register: t,
              name: "corporateEmail",
            }),
            e.jsx("div", { children: "*Details on GPU:" }),
            e.jsx(v, {
              placeholder: "Purpose/Use Case",
              errors: i,
              register: t,
              name: "purpose",
            }),
            e.jsx(v, {
              placeholder: "Desired GPU Characteristics",
              errors: i,
              register: t,
              name: "characteristics",
            }),
            e.jsx("div", { children: "*Personal Contact:" }),
            e.jsx(n, {
              placeholder: "Full Name",
              errors: i,
              register: t,
              name: "fullName",
            }),
            e.jsx(n, {
              placeholder: "Role/Designation within the Organization",
              errors: i,
              register: t,
              name: "role",
            }),
            e.jsx(n, {
              placeholder: "Your Email",
              errors: i,
              register: t,
              name: "email",
            }),
            e.jsx(n, {
              placeholder: "Your Telegram Handle",
              errors: i,
              register: t,
              name: "telegram",
            }),
            e.jsxs("div", {
              className:
                "text-[rgba(240,227,250,0.9)] flex items-center justify-between mt-8",
              children: [
                e.jsxs("p", {
                  className: "md:hidden",
                  children: ["Price: ", c.price],
                }),
                e.jsxs("p", {
                  className: "hidden md:block",
                  children: ["Price: ", c.price, " ORC/Month"],
                }),
                e.jsxs("p", {
                  children: [
                    "Your $ORC balance:",
                    " ",
                    x ? e.jsx(B, {}) : R(b, 4),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className: "flex items-center justify-between mt-3",
              children: [
                e.jsx(p, {
                  variant: "outline",
                  type: "button",
                  onClick: l,
                  children: "Close",
                }),
                s
                  ? e.jsx(p, {
                      loading: d,
                      type: "submit",
                      disabled: g,
                      children: x
                        ? "Checking balance..."
                        : h
                        ? "Submit"
                        : "Insufficient balance",
                    })
                  : e.jsx(p, {
                      type: "button",
                      onClick: u,
                      children: "Connect Wallet",
                    }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Y = [
    {
      name: "1x A100-SXM-80GB",
      cpu: "AMD EPYC 7763 64-Core Processor",
      vram: 80,
      ram: 250,
      vcpu: 16,
      priceInNumber: 9e5,
      price: "900K",
    },
    {
      name: "1x RTX 4090",
      cpu: "AMD EPYC 7443P 24-Core Processor",
      vram: 24,
      ram: 61,
      vcpu: 16,
      priceInNumber: 275e3,
      price: "275K",
    },
    {
      name: "2x RTX 4090",
      cpu: "Xeon® E5-2690 Processor",
      vram: 16,
      ram: 62,
      vcpu: 16,
      priceInNumber: 85e4,
      price: "850K",
    },
    {
      name: "1x RTX 4090",
      cpu: "AMD EPYC 7532 32-Core Processor",
      vram: 24,
      ram: 124,
      vcpu: 32,
      priceInNumber: 5e5,
      price: "500K",
    },
    {
      name: "1x RTX A6000",
      cpu: "AMD EPYC 7452 32-Core Processor",
      vram: 48,
      ram: 50,
      vcpu: 8,
      priceInNumber: 8e5,
      price: "800K",
    },
    {
      name: "4x RTX 4090",
      cpu: "AMD EPYC 7402 24-Core Processor",
      vram: 24,
      ram: 248,
      vcpu: 64,
      priceInNumber: 9e5,
      price: "900K",
    },
    {
      name: "4x RTX A6000",
      cpu: "AMD EPYC 7252 8-Core Processor",
      vram: 48,
      ram: 200,
      vcpu: 36,
      priceInNumber: 33e5,
      price: "3M3",
    },
    {
      name: "1x RTX A4000",
      cpu: "AMD EPYC 7452 32-Core Processor",
      vram: 16,
      ram: 31,
      vcpu: 8,
      priceInNumber: 125e3,
      price: "125K",
    },
    {
      name: "4x RTX 4090",
      cpu: "AMD EPYC 7402P 24-Core Processor",
      vram: 24,
      ram: 248,
      vcpu: 64,
      priceInNumber: 95e4,
      price: "950K",
    },
  ],
  z = () => {
    const [l, c] = o.useState(),
      [d, m] = o.useState(!1);
    return e.jsxs("div", {
      className: "relative w-full mb-12 h-fit",
      children: [
        e.jsx("img", {
          src: U,
          className:
            "w-full absolute opacity-80 h-full max-md:object-cover top-[3%] md:top-[20%]",
          alt: "",
        }),
        e.jsxs("div", {
          className: "flex flex-wrap m-2 mx-auto w-full container",
          children: [
            e.jsx("h1", {
              className:
                "text-3xl md:text-5xl font-semibold mb-1 md:mb-8 text-[#D1C4DA] max-md:flex items-center justify-center w-full",
              children: "Live GPUs",
            }),
            e.jsx("div", {
              style: { filter: "blur(150px)" },
              className:
                "w-[400px] h-[400px] md:w-[546px] -z-10 md:h-[546px] bg-[rgb(42,19,41,0.9)] absolute top-[0%] right-[-72%] md:top-[-5%] md:right-[-26%]",
            }),
            e.jsx("div", {
              style: { filter: "blur(150px)" },
              className:
                "h-[300px] w-[300px] md:w-[822px] -z-10 md:h-[822px] bg-[rgb(42,19,41,0.9)] absolute md:top-[40%] md:left-[-26%]",
            }),
            e.jsx("div", {
              style: { filter: "blur(150px)" },
              className:
                "w-[600px] h-[600px] bg-[#1e153b] absolute top-[50%] right-[-20% -z-10]",
            }),
            e.jsx("div", {
              style: { filter: "blur(150px)" },
              className:
                "w-[600px] h-[600px] bg-[#1e153b] absolute bottom-[0%] md:bottom-[-7%] left-[-23%] -z-10",
            }),
            e.jsx("div", {
              className:
                "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full mt-8 relative",
              children: Y.map((s, u) =>
                e.jsxs(
                  "div",
                  {
                    className:
                      " relative max-md:py-[18px] max-md:px-[13px] md:p-8 rounded-2xl flex-grow min-w-80 z-50 hover:border-green-300/30 transition-all duration-300 w-full",
                    children: [
                      e.jsx("div", {
                        style: {
                          background:
                            "linear-gradient(162.13deg, rgba(168, 96, 237, 0.9) -14.7%, rgba(166, 100, 250, 0) 49.41%, rgba(168, 96, 237, 0.9) 112.25%)",
                        },
                        className: "absolute inset-0 scale-[1.006] rounded-3xl",
                      }),
                      e.jsx("div", {
                        className: "bg-[#261731] absolute inset-0 rounded-3xl",
                      }),
                      e.jsxs("div", {
                        className: "relative z-50 space-y-8",
                        children: [
                          e.jsxs("div", {
                            className: "space-y-3",
                            children: [
                              e.jsxs("div", {
                                className: "flex items-start justify-between",
                                children: [
                                  e.jsxs("div", {
                                    children: [
                                      e.jsx("h2", {
                                        className:
                                          "font-semibold text-lg md:text-2xl title-nodes whitespace-nowrap",
                                        children: s.name,
                                      }),
                                      e.jsx("p", {
                                        className:
                                          "text-[#FFA7F5] text-[12.5px] md:text-sm font-semibold uppercase tracking-[0.14px] whitespace-nowrap",
                                        children: s.cpu,
                                      }),
                                    ],
                                  }),
                                  e.jsx("p", {
                                    className:
                                      "text-[rgba(178,106,250,0.70)] py-[3px] px-[4px] md:py-0.5 md:px-[5px] whitespace-nowrap tracking-[0.2px] text-[11px] leading-[11px] md:leading-[20px] mb-1 border rounded-md border-[#A860ED]",
                                    children: "Available",
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "flex items-center gap-x-9 pb-2",
                                children: [
                                  e.jsxs("div", {
                                    className: "flex flex-col justify-center",
                                    children: [
                                      e.jsx("p", {
                                        className:
                                          "text-[#B6A3C7] font-semibold max-md:text-sm tracking-[0.16px]",
                                        children: "GPU",
                                      }),
                                      " ",
                                      e.jsxs("p", {
                                        className:
                                          "text-[#DDD1E4] font-medium text-xs md:text-sm tracking-[0.14px]",
                                        children: [s.vram, " GB"],
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className: "flex flex-col justify-center",
                                    children: [
                                      e.jsx("p", {
                                        className:
                                          "text-[#B6A3C7] font-semibold max-md:text-sm tracking-[0.16px]",
                                        children: "RAM",
                                      }),
                                      e.jsxs("p", {
                                        className:
                                          "text-[#DDD1E4] font-medium text-xs md:text-sm tracking-[0.14px]",
                                        children: [s.ram, " GB"],
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className: "flex flex-col justify-center",
                                    children: [
                                      e.jsx("p", {
                                        className:
                                          "text-[#B6A3C7] font-semibold max-md:text-sm tracking-[0.16px]",
                                        children: "vCPU",
                                      }),
                                      e.jsxs("p", {
                                        className:
                                          "text-[#DDD1E4] font-medium text-xs md:text-sm tracking-[0.14px]",
                                        children: [s.vcpu, " GB"],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className:
                                  "relative flex items-center justify-center w-fit",
                                children: [
                                  e.jsx("div", {
                                    style: {
                                      background:
                                        "radial-gradient(66.44% 67.55% at 104.95% -4.05%, #FF8BF2 0%, #A664FA 100%)",
                                    },
                                    className:
                                      "absolute inset-0 m-auto rounded-md scale-x-[1.01] scale-y-[1.04] -z-10",
                                  }),
                                  e.jsx("div", {
                                    className:
                                      "relative z-50 bg-[#261731] py-[4px] md:py-[6px] px-2 rounded-md",
                                    children: e.jsxs("p", {
                                      className:
                                        "title-nodes text-[12.5px] leading-5 md:text-base font-medium tracking-[0.18px] mx-auto",
                                      children: ["$", s.price, " ORC/Month"],
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsx("div", {
                            className:
                              "flex items-center justify-center gap-4 relative z-50",
                            children: e.jsx(p, {
                              className: "w-full",
                              onClick: () => {
                                c(s), m(!0);
                              },
                              children: e.jsx("p", {
                                className:
                                  "leading-[14px] text-lg font-semibold",
                                children: "Rent Now",
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  },
                  u
                )
              ),
            }),
          ],
        }),
        l &&
          e.jsx(F, {
            isOpen: d,
            closeModal: () => m(!1),
            children: e.jsx(O, { onClose: () => m(!1), model: l }),
          }),
      ],
    });
  },
  K = () => {
    const { address: l } = C();
    return e.jsxs("div", {
      children: [
        e.jsx("div", {
          className: "mb-8 mx-auto container",
          children:
            !l &&
            e.jsx("div", {
              className:
                "p-5 md:p-8 gap-4 rounded-3xl bg-[rgba(52,38,67,0.70)] mt-4 md:mt-0",
              children: e.jsx("h2", {
                className: "md:text-2xl font-medium capitalize text-[#B2A5C0]",
                children: "Connect Your Wallet To Get Started!",
              }),
            }),
        }),
        e.jsx(z, {}),
      ],
    });
  };
export { K as default };
