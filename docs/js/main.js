(self.webpackChunknft_web_store_client =
  self.webpackChunknft_web_store_client || []).push([
  [179],
  {
    43528: (e, t, n) => {
      "use strict";
      n.d(t, { n: () => i });
      var r = n(3283),
        i = {
          editionId: 0,
          name: "",
          description: "",
          mediaType: "",
          mediaUrl: "",
          likes: 0,
          metadata: {},
          priceInWei: "0",
          nftData: "",
          pricing: { ETH: "", USD: 0, WEI: n.n(r)().utils.toBN(0) },
          isAvailable: !1,
          order: null,
          tokenId: "",
          revealed: !1,
          ownerAddress: "",
          isVisible: !0,
        };
    },
    34486: (e, t, n) => {
      "use strict";
      n.d(t, { Y: () => o });
      var r = n(3283),
        i = n.n(r),
        a = n(43528),
        o = {
          collectionId: 0,
          creator: {
            name: "",
            l1Address: "",
            userName: "",
            avatar: "",
            description: "",
          },
          name: "",
          description: "",
          image: "",
          editionCount: 0,
          availableCount: { count: 0 },
          likes: 0,
          metadata: {},
          pricing: { ETH: "", USD: 0, WEI: i().utils.toBN(0) },
          editions: [a.n],
        };
    },
    51252: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => C });
      var r = n(15861),
        i = n(87757),
        a = n.n(i),
        o = n(14642),
        s = n(68939),
        c = n(70885),
        l = n(77044),
        u = n(67294);
      var d = n(11014),
        p = n(53667);
      function f() {
        return (f = (0, r.Z)(
          a().mark(function e(t) {
            var n, r, i;
            return a().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = t.account),
                      (r = t.library),
                      (i = t.nftId),
                      (e.next = 3),
                      (0, d.Z)({
                        url: ""
                          .concat(p.Z.revealHiddenItem, "?nftId=")
                          .concat(i),
                        method: "post",
                        account: n,
                        library: r,
                      })
                    );
                  case 3:
                    return e.abrupt("return", e.sent);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      const h = function (e) {
        return f.apply(this, arguments);
      };
      var m = n(48866),
        x = n(30567),
        g = n(63641),
        v = n(96974),
        b = n(71893),
        w = n(85893),
        y = b.default.div.withConfig({
          displayName: "RevealableWrapper",
          componentId: "sc-13g0w0j-0",
        })([""]),
        A = b.default.div.withConfig({
          displayName: "ButtonContainer",
          componentId: "sc-13g0w0j-1",
        })([
          "position:absolute;left:0;top:0;height:100%;width:100%;display:flex;justify-content:center;align-items:center;",
        ]),
        k = b.default.button.withConfig({
          displayName: "RevealButton",
          componentId: "sc-13g0w0j-2",
        })(
          [
            "background:",
            ";color:",
            ";height:50px;border-radius:25px;max-width:240px;width:90%;border:none;font-weight:bold;font-size:1.125em;z-index:99;transition:all 300ms cubic-bezier(0.23,1,0.32,1) 0s;&:hover{box-shadow:rgb(0 0 0 / 25%) 0px 8px 15px;transform:translateY(-2px);}",
          ],
          function (e) {
            return e.theme.bg0;
          },
          function (e) {
            return e.theme.bg9;
          }
        );
      const C = function (e) {
        var t = e.children,
          n = e.collection,
          i = e.edition,
          d = e.hideButton,
          p = void 0 !== d && d,
          f = (0, l.Ge)(),
          b = f.account,
          C = f.library,
          j = (0, o.x)().showModal,
          E = (0, v.s0)(),
          I = (function (e) {
            var t = (0, l.Ge)().account,
              n = (0, u.useState)(!1),
              r = (0, c.Z)(n, 2),
              i = r[0],
              a = r[1],
              o = (0, u.useState)(!1),
              s = (0, c.Z)(o, 2),
              d = s[0],
              p = s[1];
            return (
              (0, u.useEffect)(
                function () {
                  if (null !== e.preRevealImage && !e.revealed) {
                    var t = new Image();
                    (t.src = e.mediaUrl),
                      (t.onload = function () {
                        return a(!0);
                      });
                  }
                },
                [e.mediaUrl, e.preRevealImage, e.revealed]
              ),
              (0, u.useEffect)(
                function () {
                  t && p(i && t.toLowerCase() === e.ownerAddress.toLowerCase());
                },
                [i, t, e.ownerAddress]
              ),
              d
            );
          })(i);
        function S() {
          return (S = (0, r.Z)(
            a().mark(function e() {
              return a().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!b || !C) {
                          e.next = 14;
                          break;
                        }
                        return (
                          (e.prev = 1),
                          (e.next = 4),
                          h({ account: b, library: C, nftId: i.tokenId })
                        );
                      case 4:
                        e.sent && j({ nft: n, edition: i, flow: s.e.REVEAL }),
                          (e.next = 12);
                        break;
                      case 8:
                        (e.prev = 8),
                          (e.t0 = e.catch(1)),
                          (0, x._)(e.t0),
                          (0, g.Eo)(
                            "Error encountered when attempting to reveal"
                          );
                      case 12:
                        e.next = 15;
                        break;
                      case 14:
                        (0, m.m)(E);
                      case 15:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 8]]
              );
            })
          )).apply(this, arguments);
        }
        return (0, w.jsxs)(y, {
          children: [
            t,
            I &&
              !p &&
              (0, w.jsx)(A, {
                children: (0, w.jsx)(k, {
                  onClick: function () {
                    return S.apply(this, arguments);
                  },
                  "aria-label": "Reveal item",
                  children: "Reveal Item",
                }),
              }),
          ],
        });
      };
    },
    94810: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => p });
      var r = n(60151),
        i = n(79464),
        a = n(71893),
        o = n(12636),
        s = n(85893),
        c = a.default.div.withConfig({
          displayName: "ContentWrapper",
          componentId: "sc-86k09d-0",
        })([
          "text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;min-height:620px;",
        ]),
        l = a.default.div.withConfig({
          displayName: "AwaitSignatureWrapper",
          componentId: "sc-86k09d-1",
        })(["margin-top:15px;"]),
        u = a.default.div.withConfig({
          displayName: "AnimationWrapper",
          componentId: "sc-86k09d-2",
        })([""]),
        d = a.default.p.withConfig({
          displayName: "PromptMessage",
          componentId: "sc-86k09d-3",
        })(["color:", ";font-size:16px;"], function (e) {
          return e.theme.bg7;
        });
      function p() {
        return (0, s.jsxs)(c, {
          children: [
            (0, s.jsx)(r.r6, { children: "Approve Wallet Transactions" }),
            (0, s.jsx)(r.l2, {
              children: "Approve the following transactions in your wallet",
            }),
            (0, s.jsxs)(l, {
              children: [
                (0, s.jsx)(u, {
                  children: (0, s.jsx)(i.Z, {
                    options: {
                      loop: !0,
                      autoplay: !0,
                      animationData: o,
                      rendererSettings: {
                        preserveAspectRatio: "xMidYMid slice",
                      },
                    },
                    height: 122,
                    width: 122,
                    speed: 1,
                    isClickToPauseDisabled: !0,
                  }),
                }),
                (0, s.jsx)(d, { children: "Waiting for Signature" }),
              ],
            }),
          ],
        });
      }
    },
    5144: (e, t, n) => {
      "use strict";
      n.d(t, { a: () => p, Z: () => f });
      var r = n(7853),
        i = n(30666),
        a = n(71893),
        o = n(85893),
        s = a.default.div.withConfig({
          displayName: "AvatarUsernameWrapper",
          componentId: "sc-k5zqme-0",
        })(["display:block;"]),
        c = a.default.div.withConfig({
          displayName: "RowWrapper",
          componentId: "sc-k5zqme-1",
        })(["display:flex;align-items:center;"]),
        l = a.default.span.withConfig({
          displayName: "Label",
          componentId: "sc-k5zqme-2",
        })(
          [
            "color:",
            ";font-size:14px;padding-bottom:5px;font-weight:bold;display:inline-block;",
          ],
          function (e) {
            return e.theme.bg5;
          }
        ),
        u = a.default.span.withConfig({
          displayName: "Username",
          componentId: "sc-k5zqme-3",
        })(
          [
            "font-size:16px;font-weight:500;color:",
            ";margin-left:6px;font-weight:bold;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;.skeleton &{",
            ";max-width:50%;flex:1;}",
          ],
          function (e) {
            return e.theme.bg6;
          },
          function (e) {
            return e.theme.skeleton;
          }
        ),
        d = (0, a.default)(u).withConfig({
          displayName: "CardUsername",
          componentId: "sc-k5zqme-4",
        })(["font-size:16px;color:", ";margin-right:0;"], function (e) {
          return e.theme.bg8;
        }),
        p = function (e) {
          var t,
            n,
            a = e.label,
            u = e.user;
          return (0, o.jsxs)(s, {
            children: [
              a && (0, o.jsx)(l, { children: a }),
              (0, o.jsxs)(c, {
                children: [
                  (0, o.jsx)(r.Z, { user: u, size: 36 }),
                  (0, o.jsx)(d, {
                    children:
                      null !==
                        (t =
                          null !== (n = u.name) && void 0 !== n
                            ? n
                            : u.ensName) && void 0 !== t
                        ? t
                        : (0, i.a_)(u.l1Address),
                  }),
                ],
              }),
            ],
          });
        };
      const f = function (e) {
        var t,
          n,
          a = e.label,
          d = e.user,
          p = e.size,
          f = void 0 === p ? 40 : p;
        return (0, o.jsxs)(s, {
          children: [
            a && (0, o.jsx)(l, { children: a }),
            (0, o.jsxs)(c, {
              children: [
                (0, o.jsx)(r.Z, { user: d, size: f }),
                (0, o.jsx)(u, {
                  children:
                    null !==
                      (t =
                        null !== (n = d.name) && void 0 !== n
                          ? n
                          : d.ensName) && void 0 !== t
                      ? t
                      : (0, i.a_)(d.l1Address),
                }),
              ],
            }),
          ],
        });
      };
    },
    7853: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => l });
      var r = n(14189),
        i = n(71893),
        a = n(85893),
        o = i.default.div.withConfig({
          displayName: "AvatarWrapper",
          componentId: "sc-5pgp68-0",
        })(
          [
            "height:",
            ";width:",
            ";position:relative;background-color:",
            ";flex-shrink:0;overflow:hidden;.skeleton &{",
            ";}border-radius:50% !important;",
          ],
          function (e) {
            return e.size + "px";
          },
          function (e) {
            return e.size + "px";
          },
          function (e) {
            return e.theme.bg0;
          },
          function (e) {
            return e.theme.skeleton;
          }
        ),
        s = i.default.div.withConfig({
          displayName: "AvatarImage",
          componentId: "sc-5pgp68-1",
        })(
          [
            "height:100%;width:100%;background:url(",
            ");background-size:cover;background-position:center;",
          ],
          function (e) {
            return e.imageUrl;
          }
        ),
        c = i.default.img.withConfig({
          displayName: "BlockieImage",
          componentId: "sc-5pgp68-2",
        })(["width:100%;height:100%;"]);
      const l = function (e) {
        var t = e.user,
          n = e.size;
        return (0, a.jsx)(o, {
          size: n,
          children:
            t.l1Address &&
            (t.avatar
              ? (0, a.jsx)(s, {
                  imageUrl: t.avatar,
                  "data-testid": "user-avatar",
                })
              : (0, a.jsx)(c, {
                  src:
                    "data:image/svg+xml;utf8," +
                    (0, r.kb)({ seed: t.l1Address.toLowerCase() }),
                  alt: "blockie-avatar",
                })),
        });
      };
    },
    1192: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => k });
      var r = n(70885),
        i = n(68692),
        a = n(67294),
        o = n(71893),
        s = n(93379),
        c = n.n(s),
        l = n(7795),
        u = n.n(l),
        d = n(90569),
        p = n.n(d),
        f = n(3565),
        h = n.n(f),
        m = n(19216),
        x = n.n(m),
        g = n(44589),
        v = n.n(g),
        b = n(5307),
        w = {};
      (w.styleTagTransform = v()),
        (w.setAttributes = h()),
        (w.insert = p().bind(null, "head")),
        (w.domAPI = u()),
        (w.insertStyleElement = x()),
        c()(b.Z, w),
        b.Z && b.Z.locals && b.Z.locals;
      var y = n(85893),
        A = o.default.div.withConfig({
          displayName: "ImageMedia",
          componentId: "sc-8d9yrv-0",
        })(
          [
            "max-width:100%;max-height:100%;width:100%;height:100%;position:absolute;top:0;left:0;right:0;bottom:0;background-image:",
            ";background-size:cover;background-position:center;border-radius:10px;",
          ],
          function (e) {
            return "url(" + e.imageUrl + ")";
          }
        );
      const k = function (e) {
        var t = e.url,
          n = e.mediaType,
          o = (0, a.useState)(t),
          s = (0, r.Z)(o, 2),
          c = s[0],
          l = s[1],
          u = (0, a.useRef)(null);
        if (
          n &&
          (n.toLowerCase().includes("mov") || n.toLowerCase().includes("mp4"))
        )
          return (
            null !== u.current &&
              ((u.current.src = t),
              (u.current.onloadeddata = function () {
                null !== u.current &&
                  (1 > u.current.videoWidth / u.current.videoHeight
                    ? u.current.setAttribute(
                        "style",
                        "width: 100%; top: 25%; transform: translate(0, -50%)"
                      )
                    : u.current.setAttribute("style", "height: 100%"));
              })),
            (0, y.jsx)("div", {
              className: "video-wrapper",
              children: (0, y.jsxs)("video", {
                className: "card-video",
                ref: u,
                autoPlay: !0,
                loop: !0,
                muted: !0,
                children: [
                  (0, y.jsx)("source", { src: t, type: "video/mp4" }),
                  "Your browser does not support the video tag.",
                ],
              }),
            })
          );
        var d = new Image();
        return (
          (d.onerror = function () {
            (d.onerror = null), (d.src = i.Z), l(i.Z);
          }),
          (d.src = c),
          (0, y.jsx)(A, { imageUrl: c })
        );
      };
    },
    71092: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => u });
      var r = n(70885),
        i = n(67294),
        a = n(71893),
        o = n(74855),
        s = n(24724),
        c = n(85893),
        l = a.default.span.withConfig({
          displayName: "CopyTextWrapper",
          componentId: "sc-1jwzu55-0",
        })(["cursor:pointer;"]);
      const u = function (e) {
        var t = e.textToCopy,
          n = e.label,
          a = (0, i.useState)(!1),
          u = (0, r.Z)(a, 2),
          d = u[0],
          p = u[1];
        return (0, c.jsxs)(
          l,
          {
            "data-tip": d ? "Copied" : "Copy to clipboard",
            "data-for": "copy",
            children: [
              (0, c.jsx)(o.CopyToClipboard, {
                text: t || "",
                onCopy: function () {
                  return (
                    p(!0),
                    void setTimeout(function () {
                      p(!1);
                    }, 1500)
                  );
                },
                "aria-label": "copy-text",
                children: (0, c.jsx)("span", { children: n }),
              }),
              (0, c.jsx)(s.mi, {
                id: "copy",
                place: "bottom",
                type: "dark",
                effect: "solid",
                getContent: function () {
                  return d ? "Copied" : "Copy to clipboard";
                },
              }),
            ],
          },
          d ? "Copied" : "Copy to clipboard"
        );
      };
    },
    14642: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => I, x: () => E });
      var r,
        i,
        a = n(4942),
        o = n(70885),
        s = n(30168),
        c = n(34486),
        l = n(47417),
        u = n(24724),
        d = n(67294),
        p = n(71893),
        f = n(68939),
        h = n(82739),
        m = n(85893),
        x = p.default.div.withConfig({
          displayName: "ModalOuterWrapper",
          componentId: "sc-ljh7cw-0",
        })(
          [
            "opacity:",
            ";visibility:",
            ";position:fixed;top:0;bottom:0;right:0;left:0;overflow:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch;opacity:1;display:flex;flex-flow:column nowrap;justify-content:flex-start;z-index:9999;width:100%;",
          ],
          function (e) {
            return e.show ? 1 : 0;
          },
          function (e) {
            return e.show ? "visible" : "hidden";
          }
        ),
        g = p.default.div.withConfig({
          displayName: "ModalInnerWrapper",
          componentId: "sc-ljh7cw-1",
        })([
          "flex-shrink:0;flex-grow:0;width:100%;min-height:100%;margin:auto;display:flex;align-items:center;justify-content:center;z-index:2;backdrop-filter:blur(5px);background-color:rgba(0,0,0,0.15);",
        ]),
        v = p.default.div.withConfig({
          displayName: "ModalCard",
          componentId: "sc-ljh7cw-2",
        })(
          [
            "background:",
            ";border-radius:25px;width:100%;max-width:600px;padding:42px;margin:50px 15px;opacity:",
            ";transform:",
            ";transition:transform 0.2s ease 0s,opacity 0.2s ease 0s;z-index:2;position:relative;",
            ";",
            ";",
          ],
          function (e) {
            var t = e.theme;
            return e.isReveal ? t.bg99 : t.bg00;
          },
          function (e) {
            return e.show ? 1 : 0;
          },
          function (e) {
            return e.show ? "translateY(0)" : "translateY(15%)";
          },
          function (e) {
            return e.isReveal ? "overflow: hidden" : "";
          },
          function (e) {
            return e.theme.mediaWidth.upToExtraSmall(
              r || (r = (0, s.Z)(["\n    padding: 20px;\n  "]))
            );
          }
        ),
        b = p.default.div.withConfig({
          displayName: "CloseButtonWrapper",
          componentId: "sc-ljh7cw-3",
        })(
          ["position:absolute;top:30px;right:30px;z-index:99;", ";"],
          function (e) {
            return e.theme.mediaWidth.upToExtraSmall(
              i || (i = (0, s.Z)(["\n     top: 15px;\n    right: 15px;\n  "]))
            );
          }
        );
      const w = function (e) {
        var t = e.nft,
          n = e.showModal,
          r = e.flow,
          i = e.content,
          a = e.closeModalCallback,
          s = e.edition,
          p = e.closeEnabled,
          w = (0, d.useRef)(null),
          y = (0, d.useState)(0),
          A = (0, o.Z)(y, 2),
          k = A[0],
          C = A[1];
        (0, l.Z)(w, function () {
          return I();
        }),
          (0, d.useEffect)(
            function () {
              document.body.style.overflow = n ? "hidden" : "hidden auto";
            },
            [n]
          ),
          (0, d.useEffect)(
            function () {
              C(0);
            },
            [r]
          );
        var j = (0, f.Z)(r),
          E = t || c.Y,
          I = function () {
            p && (C(0), a());
          },
          S = {
            nft: E,
            nextScreen: function () {
              C(function (e) {
                return e + 1;
              });
            },
            prevScreen: function () {
              C(function (e) {
                return e - 1;
              });
            },
            closeModal: I,
            edition: s,
          },
          N = r === f.e.REVEAL;
        return (0, m.jsx)(h.t.Provider, {
          value: S,
          children: (0, m.jsx)(x, {
            show: n,
            children: (0, m.jsx)(g, {
              children: (0, m.jsxs)(v, {
                ref: w,
                show: n,
                isReveal: N,
                children: [
                  p &&
                    (0, m.jsx)(b, {
                      children: (0, m.jsx)(u.PZ, { onClick: I }),
                    }),
                  null !== j && n && j[k],
                  i,
                ],
              }),
            }),
          }),
        });
      };
      var y = n(96974);
      function A(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function k(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? A(Object(n), !0).forEach(function (t) {
                (0, a.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : A(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var C = {
          showModal: function () {},
          closeModal: function () {},
          setCloseEnabled: function () {},
        },
        j = (0, d.createContext)(C),
        E = function () {
          return (0, d.useContext)(j);
        };
      const I = function (e) {
        var t = e.children,
          n = (0, d.useState)(""),
          r = (0, o.Z)(n, 2),
          i = r[0],
          a = r[1],
          s = (0, d.useState)(!1),
          c = (0, o.Z)(s, 2),
          l = c[0],
          u = c[1],
          p = (0, d.useState)(!0),
          f = (0, o.Z)(p, 2),
          h = f[0],
          x = f[1],
          g = (0, d.useState)({}),
          v = (0, o.Z)(g, 2),
          b = v[0],
          A = v[1],
          C = (0, y.TH)(),
          E = (0, d.useCallback)(
            function () {
              u(!1), b.callback && b.callback(), A({});
            },
            [b]
          );
        return (
          (0, d.useEffect)(
            function () {
              i !== C.pathname && h && (E(), a(C.pathname));
            },
            [C.pathname, i, E]
          ),
          (0, m.jsxs)(j.Provider, {
            value: {
              showModal: function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                u(!0), A(e);
              },
              closeModal: E,
              setCloseEnabled: x,
            },
            children: [
              (0, m.jsx)(
                w,
                k({ showModal: l, closeModalCallback: E, closeEnabled: h }, b)
              ),
              t,
            ],
          })
        );
      };
    },
    97266: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => u });
      var r = n(27e3),
        i = n(24724),
        a = n(71893),
        o = n(85893),
        s = a.default.div.withConfig({
          displayName: "InfoWrapper",
          componentId: "sc-1te8wk5-0",
        })(["display:inline-block;"]),
        c = a.default.div.withConfig({
          displayName: "TipText",
          componentId: "sc-1te8wk5-1",
        })(
          [
            "color:",
            ";margin:0 0.3125em;cursor:pointer;display:flex;align-items:center;gap:0.25em;margin-top:0.05em;",
          ],
          function (e) {
            return e.theme.bg5;
          }
        ),
        l = a.default.img.withConfig({
          displayName: "StyledIcon",
          componentId: "sc-1te8wk5-2",
        })(["margin-top:0.1em;"]);
      const u = function (e) {
        var t = e.label,
          n = void 0 === t ? "" : t,
          a = e.infoText;
        return (0, o.jsxs)(s, {
          "data-for": "".concat(n, "-tooltip"),
          "data-tip": a,
          children: [
            (0, o.jsxs)(c, {
              children: [(0, o.jsx)(l, { src: r.Z, alt: "info icon" }), " ", n],
            }),
            (0, o.jsx)(i.mi, {
              id: "".concat(n, "-tooltip"),
              place: "top",
              type: "dark",
              effect: "solid",
            }),
          ],
        });
      };
    },
    23119: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => l });
      var r = n(43528),
        i = n(1192),
        a = n(51252),
        o = n(71893),
        s = n(85893),
        c = o.default.div.withConfig({
          displayName: "MediaWrapper",
          componentId: "sc-s5z3aa-0",
        })(
          [
            "display:flex;align-items:center;justify-content:center;width:100%;height:0;padding-bottom:100%;border-radius:10px;position:relative;",
            ";",
          ],
          function (e) {
            var t = e.theme;
            return e.skeleton ? t.skeleton : "";
          }
        );
      const l = function (e) {
        var t,
          n,
          o,
          l,
          u = e.mediaUrl,
          d = e.preRevealImageUrl,
          p = e.revealed,
          f = e.edition,
          h = e.skeleton,
          m = void 0 !== h && h,
          x =
            (d && !p) ||
            ((null == f ? void 0 : f.preRevealImage) && !f.revealed);
        return (0, s.jsx)(c, {
          skeleton: m,
          children: x
            ? (0, s.jsx)(a.Z, {
                edition: f || r.n,
                hideButton: !0,
                children: (0, s.jsx)(i.Z, {
                  url:
                    null !==
                      (o =
                        null !==
                          (l =
                            null != d
                              ? d
                              : null == f
                              ? void 0
                              : f.preRevealThumbnailUrl) && void 0 !== l
                          ? l
                          : null == f
                          ? void 0
                          : f.preRevealImage) && void 0 !== o
                      ? o
                      : "",
                }),
              })
            : (0, s.jsx)(i.Z, {
                url:
                  null !==
                    (t =
                      null !==
                        (n =
                          null != u
                            ? u
                            : null == f
                            ? void 0
                            : f.thumbnailUrl) && void 0 !== n
                        ? n
                        : null == f
                        ? void 0
                        : f.mediaUrl) && void 0 !== t
                    ? t
                    : "",
              }),
        });
      };
    },
    3262: (e, t, n) => {
      "use strict";
      n.d(t, {
        iO: () => m,
        eS: () => g,
        uO: () => v,
        ZP: () => b,
        xB: () => C,
      });
      var r,
        i,
        a,
        o,
        s = n(30168),
        c = n(994),
        l = n(60151),
        u = n(71893),
        d = n(85893),
        p = u.default.h4.withConfig({
          displayName: "ModalSubtitle",
          componentId: "sc-10aorbt-0",
        })(
          [
            "font-weight:normal;font-size:1rem;color:",
            ";margin-top:0;text-align:",
            ";",
            ";",
          ],
          function (e) {
            return e.theme.bg5;
          },
          function (e) {
            return e.center ? "center" : "left";
          },
          function (e) {
            return e.theme.mediaWidth.upToExtraSmall(
              r || (r = (0, s.Z)(["\n    text-align: left;\n  "]))
            );
          }
        ),
        f = u.default.div.withConfig({
          displayName: "ModalTitleContainer",
          componentId: "sc-10aorbt-1",
        })(["display:flex;align-items:center;gap:1em;"]),
        h = u.default.div.withConfig({
          displayName: "ModalTitleTrailing",
          componentId: "sc-10aorbt-2",
        })(
          ["color:", ";font-size:0.875rem;font-weight:500;margin:0;"],
          function (e) {
            return e.theme.bg5;
          }
        ),
        m = u.default.p.withConfig({
          displayName: "ModalText",
          componentId: "sc-10aorbt-3",
        })(
          ["font-size:1.125em;text-align:", ";color:", ";"],
          function (e) {
            return e.center ? "center" : "left";
          },
          function (e) {
            var t = e.theme;
            return e.color || t.bg7;
          }
        ),
        x = u.default.div.withConfig({
          displayName: "ModalFooterStyled",
          componentId: "sc-10aorbt-5",
        })(["display:flex;align-items:center;gap:1em;", ";"], function (e) {
          return e.theme.mediaWidth.upToSmall(
            i || (i = (0, s.Z)(["\n    flex-direction: column;\n  "]))
          );
        }),
        g = u.default.div.withConfig({
          displayName: "ModalSkeletonSection",
          componentId: "sc-10aorbt-6",
        })(["position:relative;margin:1.5em auto;"]),
        v = u.default.div.withConfig({
          displayName: "HalfModal",
          componentId: "sc-10aorbt-7",
        })(["max-width:20em;margin:auto;margin-bottom:", ";"], function (e) {
          return e.gapAfter ? "8em" : "auto";
        });
      function b(e) {
        var t = e.title,
          n = e.subtitle,
          r = e.titleTrailing,
          i = e.children,
          a = e.primaryAction,
          o = e.secondaryAction,
          s = e.backAction,
          c = e.center;
        return (0, d.jsxs)(d.Fragment, {
          children: [
            t &&
              (0, d.jsx)(C, {
                title: t,
                subtitle: n,
                titleTrailing: r,
                backAction: s,
                center: c,
              }),
            i,
            a && (0, d.jsx)(j, { primaryAction: a, secondaryAction: o }),
          ],
        });
      }
      var w = u.default.div.withConfig({
          displayName: "ModalHeaderWrapper",
          componentId: "sc-10aorbt-8",
        })(
          [
            "display:flex;position:relative;gap:10px;margin-right:",
            ";padding-top:24px;",
            ";",
          ],
          function (e) {
            return e.center ? "auto" : "1.5em";
          },
          function (e) {
            return e.theme.mediaWidth.upToExtraSmall(
              a || (a = (0, s.Z)(["\n    margin-right: 1.5em;\n  "]))
            );
          }
        ),
        y = u.default.button.withConfig({
          displayName: "ModalBackButton",
          componentId: "sc-10aorbt-9",
        })(
          [
            "border:none;background:transparent;padding:0;display:flex;align-items:center;position:",
            ";top:0;left:0;height:35px;",
            ";",
          ],
          function (e) {
            return e.center ? "absolute" : "relative";
          },
          function (e) {
            return e.theme.mediaWidth.upToExtraSmall(
              o || (o = (0, s.Z)(["\n    position: relative;\n  "]))
            );
          }
        ),
        A = u.default.img.withConfig({
          displayName: "BackImage",
          componentId: "sc-10aorbt-10",
        })([""]),
        k = u.default.div.withConfig({
          displayName: "TextWrapper",
          componentId: "sc-10aorbt-11",
        })(["display:flex;flex-direction:column;flex:1;gap:1em;"]);
      function C(e) {
        var t = e.title,
          n = e.subtitle,
          r = e.titleTrailing,
          i = e.backAction,
          a = e.center;
        return (0, d.jsxs)(w, {
          center: a,
          children: [
            i &&
              (0, d.jsx)(y, {
                onClick: i,
                "aria-label": "Back",
                center: a,
                children: (0, d.jsx)(A, { src: c.Z, alt: "back icon" }),
              }),
            (0, d.jsxs)(k, {
              children: [
                (0, d.jsxs)(f, {
                  children: [
                    (0, d.jsx)(l.r6, { center: a, children: t }),
                    r && (0, d.jsx)(h, { children: r }),
                  ],
                }),
                n && (0, d.jsx)(p, { center: a, children: n }),
              ],
            }),
          ],
        });
      }
      function j(e) {
        var t = e.primaryAction,
          n = e.secondaryAction;
        return (0, d.jsxs)(x, { children: [t, n] });
      }
    },
    38204: (e, t, n) => {
      "use strict";
      n.d(t, { $: () => r });
      var r = n(71893).default.div.withConfig({
        displayName: "InfoMessage",
        componentId: "sc-1adiayn-0",
      })(
        [
          "background:",
          ";padding:0.9375em 1.75em;border-radius:5px;color:",
          ";font-weight:500;font-size:0.75rem;display:flex;align-items:center;",
        ],
        function (e) {
          return e.theme.primary7;
        },
        function (e) {
          return e.theme.bg5;
        }
      );
    },
    56460: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => l, B: () => x });
      var r = n(97266),
        i = n(71893),
        a = n(85893),
        o = i.default.section.withConfig({
          displayName: "FeeSectionWrapper",
          componentId: "sc-1klz5k6-0",
        })(
          ["background-color:", ";padding:1.875rem;border-radius:0.625rem;"],
          function (e) {
            return e.theme.bg1;
          }
        ),
        s = i.default.div.withConfig({
          displayName: "RowWrapper",
          componentId: "sc-1klz5k6-1",
        })([""]),
        c = i.default.hr.withConfig({
          displayName: "HorizontalRule",
          componentId: "sc-1klz5k6-2",
        })(["border:none;border-top:0.0625em solid ", ";;"], function (e) {
          return e.theme.bg2;
        });
      function l(e) {
        var t = e.rows;
        return (0, a.jsx)(o, {
          children: t.map(function (e, n) {
            var r = n !== t.length - 1 ? (0, a.jsx)(c, {}) : null;
            return (0, a.jsxs)(s, { children: [e, r] }, "fees".concat(n));
          }),
        });
      }
      var u = i.default.div.withConfig({
          displayName: "Row",
          componentId: "sc-1klz5k6-3",
        })(["display:flex;justify-content:space-between;align-items:center;"]),
        d = i.default.div.withConfig({
          displayName: "FeeAmount",
          componentId: "sc-1klz5k6-4",
        })(
          [
            "font-size:0.875rem;color:",
            ";font-weight:",
            ";display:flex;justify-content:flex-start;align-items:center;",
          ],
          function (e) {
            return e.theme.bg9;
          },
          function (e) {
            return e.bold ? "bold" : "500";
          }
        ),
        p = i.default.p.withConfig({
          displayName: "ErrorText",
          componentId: "sc-1klz5k6-5",
        })([
          "position:absolute;color:red;font-size:0.875em;font-weight:400;margin:0;top:18px;right:0;",
        ]),
        f = i.default.div.withConfig({
          displayName: "FeeText",
          componentId: "sc-1klz5k6-6",
        })(
          [
            "font-size:0.875rem;color:",
            ";font-weight:",
            ";display:flex;justify-content:flex-start;align-items:center;",
          ],
          function (e) {
            return e.theme.bg5;
          },
          function (e) {
            return e.bold ? "bold" : "500";
          }
        ),
        h = i.default.div.withConfig({
          displayName: "Left",
          componentId: "sc-1klz5k6-7",
        })(["display:flex;justify-content:flex-start;align-items:center;"]),
        m = i.default.div.withConfig({
          displayName: "Right",
          componentId: "sc-1klz5k6-8",
        })(["position:relative;"]),
        x = function (e) {
          var t = e.leftText,
            n = e.leftBold,
            i = void 0 !== n && n,
            o = e.rightText,
            s = e.rightBold,
            c = void 0 !== s && s,
            l = e.infoText,
            x = e.error;
          return (0, a.jsxs)(u, {
            children: [
              (0, a.jsxs)(h, {
                children: [
                  (0, a.jsx)(f, { bold: i, children: t }),
                  l && (0, a.jsx)(r.Z, { infoText: l }),
                ],
              }),
              (0, a.jsxs)(m, {
                children: [
                  (0, a.jsx)(d, { bold: c, children: o }),
                  x && (0, a.jsx)(p, { children: x }),
                ],
              }),
            ],
          });
        };
    },
    60151: (e, t, n) => {
      "use strict";
      n.d(t, {
        AZ: () => j,
        SP: () => O,
        i7: () => R,
        vf: () => M,
        l2: () => k,
        r6: () => A,
        Lw: () => F,
        V3: () => D,
      });
      var r = n(30168);
      n(87757), n(5144), n.p, n.p, n(67294), n(46066);
      var i = n(93379),
        a = n.n(i),
        o = n(7795),
        s = n.n(o),
        c = n(90569),
        l = n.n(c),
        u = n(3565),
        d = n.n(u),
        p = n(19216),
        f = n.n(p),
        h = n(44589),
        m = n.n(h),
        x = n(48902),
        g = {};
      (g.styleTagTransform = m()),
        (g.setAttributes = d()),
        (g.insert = l().bind(null, "head")),
        (g.domAPI = s()),
        (g.insertStyleElement = f()),
        a()(x.Z, g),
        x.Z && x.Z.locals && x.Z.locals;
      var v = n(85893);
      n(23119), n(82529), n(33072), n(55646), n(53667), n(30666);
      var b,
        w,
        y = n(71893),
        A =
          (n(3283),
          y.default.h3.withConfig({
            displayName: "ModalTitle",
            componentId: "sc-1jj83je-0",
          })(
            [
              "color:",
              ";font-weight:bold;font-size:25px;line-height:29px;margin:0;flex:",
              ";text-align:",
              ";",
              ";",
              ";",
            ],
            function (e) {
              return e.theme.bg9;
            },
            function (e) {
              return e.center ? 1 : "unset";
            },
            function (e) {
              return e.center ? "center" : "inherit";
            },
            function (e) {
              return e.theme.mediaWidth.upToExtraSmall(
                b || (b = (0, r.Z)(["\n    text-align: left;\n  "]))
              );
            },
            function (e) {
              return e.theme.mediaWidth.upToExtremeSmall(
                w || (w = (0, r.Z)(["\n    width: min-content"]))
              );
            }
          )),
        k = y.default.p.withConfig({
          displayName: "ModalSubtitle",
          componentId: "sc-1jj83je-1",
        })(
          ["color:", ";font-weight:normal;font-size:16px;line-height:19px;"],
          function (e) {
            return e.theme.bg7;
          }
        ),
        C = y.default.div.withConfig({
          displayName: "ModalInputWrapper",
          componentId: "sc-1jj83je-9",
        })([
          "display:flex;flex-direction:column;margin-top:31px;position:relative;",
        ]),
        j = y.default.label.withConfig({
          displayName: "InputLabel",
          componentId: "sc-1jj83je-10",
        })(
          ["color:", ";font-weight:500;font-size:18px;line-height:21px;"],
          function (e) {
            return e.theme.bg7;
          }
        ),
        E = y.default.div.withConfig({
          displayName: "InputWrapper",
          componentId: "sc-1jj83je-11",
        })(["width:100%;position:relative;margin-top:13px;"]),
        I = y.default.input.withConfig({
          displayName: "Input",
          componentId: "sc-1jj83je-12",
        })(
          [
            "background-color:",
            ";color:",
            ";width:100%;border:none;font-size:1em;line-height:148%;height:44px;border-radius:5px;padding:0 1em;&:disabled{color:",
            ";}",
          ],
          function (e) {
            return e.theme.bg1;
          },
          function (e) {
            return e.theme.bg99;
          },
          function (e) {
            return e.theme.bg5;
          }
        ),
        S = y.default.span.withConfig({
          displayName: "InputInfo",
          componentId: "sc-1jj83je-13",
        })(
          [
            "color:",
            ";font-weight:normal;font-size:0.875em;line-height:1em;min-height:1em;",
          ],
          function (e) {
            return e.theme.bg5;
          }
        ),
        N = y.default.span.withConfig({
          displayName: "InputError",
          componentId: "sc-1jj83je-14",
        })(
          [
            "color:",
            ";font-weight:normal;font-size:0.875em;line-height:1em;min-height:1em;",
          ],
          function (e) {
            return e.theme.error;
          }
        ),
        T = y.default.span.withConfig({
          displayName: "InputAnnotation",
          componentId: "sc-1jj83je-15",
        })(
          ["font-size:1em;color:", ";position:absolute;right:1em;top:0.75em;"],
          function (e) {
            return e.theme.bg7;
          }
        ),
        Z = y.default.div.withConfig({
          displayName: "NoticeWrapper",
          componentId: "sc-1jj83je-16",
        })([
          "width:100%;display:flex;justify-content:space-between;margin-top:0.5em;",
        ]),
        P = y.default.div.withConfig({
          displayName: "Left",
          componentId: "sc-1jj83je-17",
        })(["flex:1;display:flex;flex-direction:column;gap:0.5em;"]),
        L = y.default.div.withConfig({
          displayName: "Right",
          componentId: "sc-1jj83je-18",
        })(["margin-right:1em;margin-left:0.25em;text-align:right;"]),
        O = function (e) {
          var t = e.label,
            n = e.type,
            r = e.info,
            i = e.infoRight,
            a = e.handleChange,
            o = e.error,
            s = e.annotation,
            c = e.value,
            l = e.disabled,
            u = void 0 !== l && l;
          return (0, v.jsxs)(C, {
            children: [
              (0, v.jsx)(j, { children: t }),
              (0, v.jsxs)(E, {
                children: [
                  (0, v.jsx)(I, {
                    disabled: u,
                    value: c,
                    type: n,
                    onChange: a,
                    "aria-label": t,
                  }),
                  s && (0, v.jsx)(T, { children: s }),
                ],
              }),
              (0, v.jsxs)(Z, {
                children: [
                  (0, v.jsxs)(P, {
                    children: [
                      void 0 !== r && (0, v.jsx)(S, { children: r }),
                      void 0 !== o && (0, v.jsx)(N, { children: o }),
                    ],
                  }),
                  (0, v.jsx)(L, {
                    children: i && (0, v.jsx)(S, { children: i }),
                  }),
                ],
              }),
            ],
          });
        },
        B = y.default.textarea.withConfig({
          displayName: "TextArea",
          componentId: "sc-1jj83je-19",
        })(
          [
            "background-color:",
            ";color:",
            ";width:100%;border:none;font-size:1em;line-height:148%;min-height:130px;max-width:100%;min-width:100%;border-radius:5px;padding:0.5em 1em;&:disabled{color:",
            ";}",
          ],
          function (e) {
            return e.theme.bg1;
          },
          function (e) {
            return e.theme.bg99;
          },
          function (e) {
            return e.theme.bg5;
          }
        ),
        R = function (e) {
          var t = e.label,
            n = e.info,
            r = e.infoRight,
            i = e.handleChange,
            a = e.error,
            o = e.annotation,
            s = e.value,
            c = e.disabled,
            l = void 0 !== c && c;
          return (0, v.jsxs)(C, {
            children: [
              (0, v.jsx)(j, { children: t }),
              (0, v.jsxs)(E, {
                children: [
                  (0, v.jsx)(B, {
                    disabled: l,
                    value: s,
                    onChange: i,
                    "aria-label": t,
                  }),
                  o && (0, v.jsx)(T, { children: o }),
                ],
              }),
              (0, v.jsxs)(Z, {
                children: [
                  (0, v.jsxs)(P, {
                    children: [
                      void 0 !== n && (0, v.jsx)(S, { children: n }),
                      void 0 !== a && (0, v.jsx)(N, { children: a }),
                    ],
                  }),
                  (0, v.jsx)(L, {
                    children: r && (0, v.jsx)(S, { children: r }),
                  }),
                ],
              }),
            ],
          });
        },
        M = function (e) {
          var t = e.label,
            n = e.children;
          return (0, v.jsxs)(C, {
            children: [(0, v.jsx)(j, { children: t }), n],
          });
        },
        D = y.default.div.withConfig({
          displayName: "ResultWrapper",
          componentId: "sc-1jj83je-23",
        })([
          "margin-top:40px;display:flex;align-items:center;justify-content:center;flex-direction:column;width:100%;",
        ]),
        F = y.default.img.withConfig({
          displayName: "ResultIcon",
          componentId: "sc-1jj83je-24",
        })(["max-width:102px;"]);
    },
    68939: (e, t, n) => {
      "use strict";
      n.d(t, { e: () => nt, Z: () => ct });
      var r = n(15861),
        i = n(70885),
        a = n(87757),
        o = n.n(a);
      const s = n.p + "06db18aeb45897dab75ae4cf9ed3f487.svg";
      var c = n(94810),
        l = n(71092),
        u = n(97266),
        d = n(3262),
        p = n(60151),
        f = n(82739);
      const h = JSON.parse(
        '{"v":"4.8.0","meta":{"g":"LottieFiles AE 1.0.0","a":"","k":"","d":"","tc":""},"fr":24,"ip":0,"op":52,"w":300,"h":300,"nm":"eth logo","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shape Layer 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[150,150,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[174.781,174.781],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":4,"ix":4},"w":{"a":0,"k":10,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[-0.442,2.024],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":24,"s":[0]},{"t":51,"s":[100]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":24,"s":[70]},{"t":51,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"gs","o":{"a":0,"k":100,"ix":9},"w":{"a":0,"k":12,"ix":10},"g":{"p":7,"k":{"a":0,"k":[0,0.533,0.667,0.945,0.146,0.735,0.733,0.851,0.29,0.937,0.8,0.757,0.464,0.829,0.89,0.861,0.638,0.722,0.98,0.965,0.819,0.753,0.839,0.961,1,0.784,0.698,0.957],"ix":8}},"s":{"a":0,"k":[0,0],"ix":4},"e":{"a":0,"k":[100,0],"ix":5},"t":1,"lc":2,"lj":1,"ml":4,"ml2":{"a":0,"k":4,"ix":13},"bm":0,"nm":"Gradient Stroke 1","mn":"ADBE Vector Graphic - G-Stroke","hd":false}],"ip":0,"op":52,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Shape Layer 2","sr":1,"ks":{"o":{"a":0,"k":25,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[150,150,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[174.781,174.781],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.898039221764,0.901960790157,0.917647063732,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[-0.442,2.024],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":52,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Layer 1 Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[150,150,0],"ix":2},"a":{"a":0,"k":[150,150,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-32.528,168.103],[160.283,39.023],[32.529,-151.808],[-160.282,-22.728]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[12.813,-8.578],[-23.043,-34.42],[-34.421,23.043],[23.044,34.42],[24.185,0]],"o":[[-34.42,23.043],[23.043,34.42],[34.419,-23.043],[-14.465,-21.607],[-14.343,0]],"v":[[-41.723,-58.512],[-62.323,45.533],[41.724,66.133],[62.323,-37.912],[-0.068,-71.197]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[12.994,19.409],[-30.922,20.702],[-20.7,-30.922],[30.923,-20.701],[12.887,0.001]],"o":[[-20.702,-30.923],[30.924,-20.701],[20.702,30.923],[-11.513,7.708],[-21.726,-0.002]],"v":[[-55.99,41.295],[-37.484,-52.18],[55.99,-33.673],[37.483,59.801],[0.062,71.197]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"mm","mm":4,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"tr","p":{"a":0,"k":[149.907,147.001],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[-13.976,-3.486],[13.977,-19.294],[-13.976,19.294]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.447058853449,0.450980422076,0.839215746113,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0.5,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.807843197093,0.690196078431,0.980392216701,1],"ix":4},"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[-7.9]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[50]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0.127]},"t":14,"s":[50]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":24,"s":[100]},{"t":32,"s":[50]}],"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[163.742,176.873],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":3,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[14.023,-3.486],[-14.024,-19.294],[14.023,19.294]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.447058853449,0.450980422076,0.839215746113,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0.5,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.505882352941,0.658823529412,0.972549079446,1],"ix":4},"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[-4.152]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[50]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0.103]},"t":9,"s":[50]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":18,"s":[100]},{"t":26,"s":[50]}],"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[135.742,176.873],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":3,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[-13.835,-14.4],[13.835,-2.494],[-13.835,14.4]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.447058853449,0.450980422076,0.839215746113,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0.5,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.807843197093,0.690196078431,0.980392216701,1],"ix":4},"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[50]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":13,"s":[100]},{"t":23,"s":[50]}],"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[163.413,153.308],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":3,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[13.859,-14.4],[-13.859,-2.494],[13.859,14.4]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.447058853449,0.450980422076,0.839215746113,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0.5,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.505882352941,0.658823529412,0.972549079446,1],"ix":4},"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[50]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":7,"s":[100]},{"t":14,"s":[50]}],"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[135.577,153.261],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":3,"cix":2,"bm":0,"ix":5,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[-13.694,10.484],[13.694,22.071],[-13.694,-22.07]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.447058853449,0.450980422076,0.839215746113,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0.5,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.647058823529,0.988235353956,0.964705942191,1],"ix":4},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[50]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":12,"s":[100]},{"t":23,"s":[50]}],"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[163.215,128.449],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 6","np":3,"cix":2,"bm":0,"ix":6,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[13.765,10.518],[-13.765,22.141],[13.765,-22.141]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.447058853449,0.450980422076,0.839215746113,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0.5,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.807843197093,0.690196078431,0.980392216701,1],"ix":4},"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[50]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":9,"s":[100]},{"t":18,"s":[50]}],"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[135.633,128.379],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 7","np":3,"cix":2,"bm":0,"ix":7,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":52,"st":0,"bm":0}],"markers":[]}'
      );
      var m = n(65057),
        x = n(3122),
        g = n(33072),
        v = n(32439),
        b = n(67294),
        w = n(79464);
      const y = n.p + "255512819eacce999c76aebfcb12469b.svg";
      var A = n(85893);
      function k(e) {
        var t = e.href,
          n = e.linkText,
          r = e.altText;
        return (0, A.jsxs)("a", {
          rel: "noreferrer",
          target: "_blank",
          href: t,
          children: [
            n,
            (0, A.jsx)("img", { width: "14", height: "14", src: y, alt: r }),
          ],
        });
      }
      var C = n(38204);
      function j(e) {
        var t = e.txInfo,
          n = (0, g.u)().pendingTransactions,
          r = (0, b.useState)(!1),
          a = (0, i.Z)(r, 2),
          o = a[0],
          s = a[1],
          c = (0, b.useState)(!0),
          l = (0, i.Z)(c, 2),
          u = l[0],
          f = l[1];
        (0, b.useEffect)(
          function () {
            s(!u && void 0 === n[t.txHash]),
              void 0 !== n[t.txHash] &&
                f(
                  "pending" === n[t.txHash].status &&
                    n[t.txHash].txType === v.U.DEPOSIT
                );
          },
          [n]
        );
        var y = n[t.txHash],
          j = "https://goerli.etherscan.io/tx/".concat(t.txHash),
          E = "",
          I = "",
          S = "",
          N = "calculating";
        switch (t.txType) {
          case v.U.DEPOSIT:
            if (
              ((E = u
                ? "Transaction Pending "
                : "".concat(
                    y ? y.confirmedBlocks : o ? 12 : 0,
                    "/12 Blocks confirmed "
                  )),
              (I = o
                ? "Deposit Successful"
                : "Deposit request sent successfully"),
              (S = o
                ? "Your funds are now available on the GameStop Marketplace. Please check your account balance."
                : "Your funds will be available on the GameStop Marketplace (on Loopring L2) after 12 block confirmations."),
              y && void 0 !== y.estimatedTime && y.confirmedBlocks > 0)
            ) {
              var T = new Date(y.estimatedTime);
              N =
                T.getMinutes() <= 0
                  ? "~".concat(T.getSeconds(), " sec")
                  : "~".concat(T.getMinutes(), " min");
            }
            break;
          case v.U.WITHDRAWAL:
            (E =
              "You can close this modal and check the transaction status in the account section."),
              (I = o
                ? "Withdrawal Successful"
                : "Withdrawal Request Sent Successfully");
            var Z = y ? y.speed : "normal";
            S = o
              ? ""
              : "Your funds will be available on the Ethereum network within ".concat(
                  "fast" === Z ? "5" : "30",
                  " minutes."
                );
            break;
          case v.U.WITHDRAW_NFT:
            (E =
              "You can close this modal and check the transaction status in the account section."),
              (I = o
                ? "Withdraw NFT Successful"
                : "Withdraw NFT Request Sent Successfully"),
              (S = o
                ? ""
                : "It can take up to 30 minutes for your NFT to be available on the Ethereum Main Network.");
        }
        var P =
          t.txType === v.U.DEPOSIT
            ? (0, A.jsxs)(d.eS, {
                children: [
                  !o &&
                    (0, A.jsx)(x.lU, {
                      center: !0,
                      children: (0, A.jsxs)("strong", {
                        children: [
                          "Estimated Time:",
                          " ",
                          u ? "calculating" : N,
                        ],
                      }),
                    }),
                  (0, A.jsx)(x.lU, {
                    center: !0,
                    children: (0, A.jsxs)("span", {
                      children: [
                        E,
                        (0, A.jsx)(k, {
                          href: j,
                          altText: "External link to ".concat(j),
                        }),
                      ],
                    }),
                  }),
                ],
              })
            : (0, A.jsx)(d.eS, {
                children: (0, A.jsx)(x.lU, {
                  center: !0,
                  children: (0, A.jsx)("span", { children: E }),
                }),
              });
        return (0, A.jsxs)(d.ZP, {
          children: [
            (0, A.jsx)(d.eS, {
              children: (0, A.jsxs)(x.lU, {
                center: !0,
                children: [
                  (0, A.jsx)(p.r6, { children: I }),
                  (0, A.jsx)(x.mc, { large: !0, text: S }),
                ],
              }),
            }),
            (0, A.jsx)(d.eS, {
              children: o
                ? (0, A.jsx)(p.V3, {
                    children: (0, A.jsx)(p.Lw, {
                      src: m.Z,
                      alt: "success-icon",
                    }),
                  })
                : (0, A.jsx)(w.Z, {
                    options: {
                      loop: !0,
                      autoplay: !0,
                      animationData: h,
                      rendererSettings: {
                        preserveAspectRatio: "xMidYMid slice",
                      },
                    },
                    height: 200,
                    width: 200,
                    speed: 1,
                    isClickToPauseDisabled: !0,
                  }),
            }),
            P,
            t.txType === v.U.DEPOSIT &&
              (0, A.jsx)(C.$, {
                children:
                  "You can close this modal and continue navigating the marketplace. You can also check the status of your deposit from your account balance section.",
              }),
          ],
        });
      }
      var E = n(71893),
        I = E.default.div.withConfig({
          displayName: "StyledWrapper",
          componentId: "sc-lkp2dp-0",
        })(["margin-top:0.8125em;"]),
        S = E.default.input.withConfig({
          displayName: "StyledInput",
          componentId: "sc-lkp2dp-1",
        })(["appearance:none;margin:0;"]),
        N = E.default.span.withConfig({
          displayName: "StyledSpan",
          componentId: "sc-lkp2dp-2",
        })(["margin-right:0.5em;"]),
        T = E.default.label.withConfig({
          displayName: "StyledLabel",
          componentId: "sc-lkp2dp-3",
        })(
          [
            "font-size:0.875rem;border:",
            ";border-radius:0.9375em;padding:0.3em 1.5em;cursor:pointer;background-color:",
            ";color:",
            ";",
          ],
          function (e) {
            return "1px solid ".concat(e.theme.bg9);
          },
          function (e) {
            return e.checked ? e.theme.bg9 : "white";
          },
          function (e) {
            return e.checked ? "white" : e.theme.bg9;
          }
        );
      function Z(e) {
        var t = e.items.map(function (t) {
          return (0,
          A.jsxs)(N, { children: [(0, A.jsx)(S, { type: "radio", id: t.id, name: t.name, value: t.value, checked: t.value === e.currentlySelectedValue, onChange: e.onChangeHandler }), (0, A.jsx)(T, { checked: t.value === e.currentlySelectedValue, htmlFor: t.id, children: t.label })] }, t.value);
        });
        return (0, A.jsx)(I, { children: t });
      }
      var P = n(50256),
        L = n(29864),
        O = n(69012),
        B = n(11014),
        R = n(53667);
      function M() {
        return (M = (0, r.Z)(
          o().mark(function e(t) {
            var n, r, i, a;
            return o().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = t.account),
                      (r = t.library),
                      (i = t.amount),
                      (a = t.fastWithdrawalMode),
                      e.abrupt(
                        "return",
                        (0, B.Z)({
                          url: ""
                            .concat(R.Z.withdrawTokenInfo, "?toAddress=")
                            .concat(n, "&amount=")
                            .concat(i, "&fastWithdrawalMode=")
                            .concat(a),
                          method: "get",
                          account: n,
                          library: r,
                        })
                      )
                    );
                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      const D = function (e) {
        return M.apply(this, arguments);
      };
      var F = n(98790),
        W = n(92514),
        _ = n(36610),
        U = n(13317);
      function z(e) {
        return V.apply(this, arguments);
      }
      function V() {
        return (V = (0, r.Z)(
          o().mark(function e(t) {
            var n, r, i, a, s, c, l, u, d, p, f, h;
            return o().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = t.account),
                      (r = t.library),
                      (i = t.withdrawalAmount),
                      (a = t.withdrawalMode),
                      (s = t.withdrawInfo),
                      (c = t.connector),
                      (e.next = 3),
                      r.eth.getChainId()
                    );
                  case 3:
                    return (
                      (l = e.sent),
                      (u = new W.vq({ chainId: l })),
                      (e.next = 7),
                      (0, _.Z)({
                        web3: r,
                        address: n,
                        chainId: l,
                        walletType: (0, U.Z)(c),
                        keySeed: F.MR.replace(F.vO, s.exchangeAddress).replace(
                          F.xS,
                          s.nonce.toString()
                        ),
                      })
                    );
                  case 7:
                    return (
                      (d = e.sent),
                      (p = d.sk),
                      (e.next = 11),
                      u.getUserApiKey({ accountId: s.accountID }, p)
                    );
                  case 11:
                    return (
                      (f = e.sent),
                      (h = f.apiKey),
                      (e.t0 = u),
                      (e.t1 = r),
                      (e.t2 = h),
                      (e.t3 = W.Mt.MetaMask),
                      (e.next = 19),
                      r.eth.getChainId()
                    );
                  case 19:
                    return (
                      (e.t4 = e.sent),
                      (e.t5 = p),
                      (e.t6 = {
                        accountId: s.accountID,
                        exchange: s.exchangeAddress,
                        maxFee: {
                          tokenId: s.maxFeeTokenID,
                          volume: s.maxFeeAmount,
                        },
                        minGas: 0,
                        owner: n,
                        storageId: s.storageID,
                        to: n,
                        token: { tokenId: 0, volume: i },
                        validUntil: W.O8,
                        extraData: "",
                        fastWithdrawalMode: "fast" === a,
                      }),
                      (e.t7 = {
                        web3: e.t1,
                        apiKey: e.t2,
                        walletType: e.t3,
                        chainId: e.t4,
                        eddsaKey: e.t5,
                        request: e.t6,
                      }),
                      (e.next = 25),
                      e.t0.submitOffchainWithdraw.call(e.t0, e.t7)
                    );
                  case 25:
                    return e.abrupt("return", e.sent);
                  case 26:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      var G = n(48866),
        q = n(9036),
        H = n(30567),
        K = n(30666),
        Y = n(63641),
        Q = n(77044),
        J = n(96974),
        X = n(3283),
        $ = n.n(X);
      function ee() {
        var e,
          t,
          n = (0, Q.Ge)(),
          a = n.account,
          h = n.library,
          m = n.connector,
          w = (0, b.useContext)(f.t).closeModal,
          y = (0, g.u)(),
          k = y.watchTransaction,
          C = y.l1Balance,
          E = y.l2Balance,
          I = y.exchangeRate,
          S = (0, b.useState)(!0),
          N = (0, i.Z)(S, 2),
          T = N[0],
          B = N[1],
          R = (0, b.useState)(),
          M = (0, i.Z)(R, 2),
          F = M[0],
          W = M[1],
          _ = (0, b.useState)(""),
          U = (0, i.Z)(_, 2),
          V = U[0],
          X = U[1],
          ee = (0, b.useState)(""),
          te = (0, i.Z)(ee, 2),
          ne = te[0],
          re = te[1],
          ie = (0, b.useState)(!1),
          ae = (0, i.Z)(ie, 2),
          oe = ae[0],
          se = ae[1],
          ce = (0, b.useState)("normal"),
          le = (0, i.Z)(ce, 2),
          ue = le[0],
          de = le[1],
          pe = (0, b.useState)(),
          fe = (0, i.Z)(pe, 2),
          he = fe[0],
          me = fe[1],
          xe = (0, b.useState)(!1),
          ge = (0, i.Z)(xe, 2),
          ve = ge[0],
          be = ge[1],
          we = (0, J.s0)(),
          ye = (0, O.Z)().canDoLoopringAction,
          Ae = (0, b.useCallback)(
            (0, r.Z)(
              o().mark(function e() {
                var t;
                return o().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if ((B(!0), !a || !h)) {
                          e.next = 12;
                          break;
                        }
                        return (
                          (e.next = 4),
                          D({
                            account: a,
                            library: h,
                            amount: "" === V ? "0" : V,
                            fastWithdrawalMode: "fast" === ue,
                          })
                        );
                      case 4:
                        if (((t = e.sent), B(!1), !t)) {
                          e.next = 11;
                          break;
                        }
                        return W(t), e.abrupt("return", t);
                      case 11:
                        (0, H._)("Error retrieving withdraw info");
                      case 12:
                        return e.abrupt("return", null);
                      case 13:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            [a, h, V, ue]
          );
        function ke() {
          return (ke = (0, r.Z)(
            o().mark(function e() {
              var t, n, r, i;
              return o().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!a || !h) {
                          e.next = 37;
                          break;
                        }
                        return (e.next = 3), ye();
                      case 3:
                        if (e.sent) {
                          e.next = 5;
                          break;
                        }
                        return e.abrupt("return");
                      case 5:
                        if (!(Number(V) <= 0 || isNaN(Number(V)))) {
                          e.next = 7;
                          break;
                        }
                        return e.abrupt(
                          "return",
                          re("Please enter a value greater than 0")
                        );
                      case 7:
                        return (e.prev = 7), be(!0), (e.next = 11), Ae();
                      case 11:
                        if ((t = e.sent)) {
                          e.next = 14;
                          break;
                        }
                        throw Error("Error retrieving withdraw info");
                      case 14:
                        return (
                          (e.next = 16),
                          z({
                            account: a,
                            library: h,
                            withdrawalAmount: V,
                            withdrawalMode: ue,
                            withdrawInfo: t,
                            connector: m,
                          })
                        );
                      case 16:
                        if (
                          ((n = e.sent), (r = ""), !("hash" in n) || !n.hash)
                        ) {
                          e.next = 22;
                          break;
                        }
                        (r = n.hash), (e.next = 24);
                        break;
                      case 22:
                        return (
                          be(!1),
                          e.abrupt(
                            "return",
                            (0, Y.Eo)("Error submitting withdraw request.")
                          )
                        );
                      case 24:
                        (i = {
                          txType: v.U.WITHDRAWAL,
                          txHash: r,
                          status: "pending",
                          value: V,
                          accountId: t.accountID,
                          blockNumber: 0,
                          confirmedBlocks: 0,
                          timestamp: new Date().getTime(),
                          estimatedTime: new Date(),
                          speed: ue,
                        }),
                          k(i),
                          me(i),
                          se(!0),
                          (e.next = 35);
                        break;
                      case 30:
                        (e.prev = 30),
                          (e.t0 = e.catch(7)),
                          (0, H._)(e.t0),
                          be(!1),
                          (0, Y.Eo)(
                            "Something went wrong with the withdrawal. Please try again later"
                          );
                      case 35:
                        e.next = 38;
                        break;
                      case 37:
                        (0, G.m)(we);
                      case 38:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[7, 30]]
              );
            })
          )).apply(this, arguments);
        }
        return (
          (0, b.useEffect)(
            function () {
              Ae();
            },
            [Ae]
          ),
          oe && he
            ? (0, A.jsx)(j, { txInfo: he })
            : ve
            ? (0, A.jsx)(c.Z, {})
            : (0, A.jsxs)(d.ZP, {
                title: "Make A Withdrawal",
                titleTrailing: (0, A.jsx)(u.Z, {
                  label: "Learn More",
                  infoText:
                    "Withdrawing your ETH from Loopring (Layer 2) to Ethereum (Layer 1) costs a small fee, to cover Ethereum network costs.",
                }),
                subtitle:
                  "You are always in control of your own funds; withdraw to Ethereum (Layer 1) at any time.",
                primaryAction: (0, A.jsx)(L.TextButton, {
                  label: "Withdraw",
                  onClick: function () {
                    return ke.apply(this, arguments);
                  },
                  disabled: T || !!ne || !V,
                  stretch: !0,
                }),
                secondaryAction: (0, A.jsx)(L.TextButton, {
                  variant: L.ButtonVariant.secondary,
                  label: "Cancel",
                  onClick: w,
                  stretch: !0,
                }),
                children: [
                  (0, A.jsx)(d.eS, {
                    children: (0, A.jsxs)(P.Sn, {
                      children: [
                        (0, A.jsxs)(P.tY, {
                          children: [
                            (0, A.jsx)(x.mc, { text: "From", bold: !0 }),
                            (0, A.jsxs)(x.lU, {
                              children: [
                                (0, A.jsx)(x.Q5, {
                                  text: "GameStop NFT (Loopring L2)",
                                }),
                                (0, A.jsx)(P.un, {
                                  children: (0, A.jsx)(l.Z, {
                                    textToCopy: a || "",
                                    label: (0, K.a_)(a || ""),
                                  }),
                                }),
                              ],
                            }),
                            (0, A.jsx)(P.YP, {
                              icon: (0, A.jsx)("img", {
                                src: s,
                                alt: "Ethereum logo",
                              }),
                              text: (0, A.jsx)(P.jM, {
                                eth: (0, K.nr)(E),
                                usd: (0, K.YQ)(parseFloat(E) * I),
                              }),
                            }),
                          ],
                        }),
                        (0, A.jsx)(P.bu, {}),
                        (0, A.jsx)(P.tY, {
                          children: (0, A.jsxs)(P.SR, {
                            children: [
                              (0, A.jsx)(x.mc, { text: "To", bold: !0 }),
                              (0, A.jsxs)(x.lU, {
                                children: [
                                  (0, A.jsx)(x.Q5, {
                                    text: "Ethereum Network (L1)",
                                  }),
                                  (0, A.jsx)(P.un, {
                                    children: (0, A.jsx)(l.Z, {
                                      textToCopy: a || "",
                                      label: (0, K.a_)(a || ""),
                                    }),
                                  }),
                                ],
                              }),
                              (0, A.jsx)(P.YP, {
                                icon: (0, A.jsx)("img", {
                                  src: s,
                                  alt: "Ethereum logo",
                                }),
                                text: (0, A.jsx)(P.jM, {
                                  eth: (0, K.nr)(C),
                                  usd: (0, K.YQ)(parseFloat(C) * I),
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, A.jsx)(d.eS, {
                    children: (0, A.jsx)(p.SP, {
                      error: ne,
                      label: "Amount",
                      type: "number",
                      annotation: "ETH",
                      handleChange: function (e) {
                        var t, n, r, i;
                        (t = e.target.value),
                          (r = Number(t) ? $().utils.toWei(t) : "0"),
                          (i =
                            null !==
                              (n = null == F ? void 0 : F.maxFeeAmount) &&
                            void 0 !== n
                              ? n
                              : "0"),
                          X(r),
                          (0, q.Z)(r, E, i)
                            ? re("Insufficient funds")
                            : Number(r) <= 0
                            ? re("Please enter a value greater than 0")
                            : re("");
                      },
                      infoRight: (0, K.YQ)(
                        parseFloat(V.length > 0 ? $().utils.fromWei(V) : "0") *
                          I
                      ),
                    }),
                  }),
                  (0, A.jsxs)(d.eS, {
                    children: [
                      (0, A.jsx)(p.AZ, { children: "Transaction Speed" }),
                      (0, A.jsx)(Z, {
                        onChangeHandler: function (e) {
                          de(e.target.value);
                        },
                        currentlySelectedValue: ue,
                        items: [
                          {
                            id: "normal",
                            name: "transactionSpeed",
                            value: "normal",
                            label: "Normal",
                          },
                          {
                            id: "fast",
                            name: "transactionSpeed",
                            value: "fast",
                            label: "Fast",
                          },
                        ],
                      }),
                      (0, A.jsx)(x.lU, {
                        children: (0, A.jsx)(x.mc, {
                          text:
                            ((t = T
                              ? "loading"
                              : (0, K.pe)(
                                  null !==
                                    (e = null == F ? void 0 : F.maxFeeAmount) &&
                                    void 0 !== e
                                    ? e
                                    : "0"
                                )),
                            "normal" === ue
                              ? "Normal ~ 30 minutes (".concat(t, " fee)")
                              : "Fast ~ less than 5 minutes (".concat(
                                  t,
                                  " fee)"
                                )),
                        }),
                      }),
                    ],
                  }),
                ],
              })
        );
      }
      var te = n(78299),
        ne = n.n(te),
        re = n(221),
        ie = n(9493),
        ae = n(52224),
        oe = n(23061),
        se = n(14214),
        ce = n(1765);
      var le = E.default.div.withConfig({
        displayName: "LoaderContainer",
        componentId: "sc-1eheko7-0",
      })(["display:flex;align-items:center;justify-content:center;"]);
      function ue() {
        var e = (function () {
            var e = (0, b.useState)({
                isLoading: !1,
                isError: !1,
                isSuccess: !1,
              }),
              t = (0, i.Z)(e, 2),
              n = t[0],
              a = t[1],
              s = (0, Q.Ge)(),
              c = s.account,
              l = s.library,
              u = s.connector,
              d = s.chainId,
              p = (0, ce.t)().authSig,
              f = (0, ae.JX)(),
              h = (0, i.Z)(f, 2),
              m = h[0],
              x = h[1].data,
              g = (0, b.useCallback)(
                function () {
                  p && m(p);
                },
                [p, m]
              );
            return (
              (0, b.useEffect)(
                function () {
                  g();
                },
                [g]
              ),
              (0, b.useEffect)(
                function () {
                  (0, r.Z)(
                    o().mark(function e() {
                      var t, n;
                      return o().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!(x && c && l && u && d)) {
                                e.next = 22;
                                break;
                              }
                              return (
                                a({
                                  isLoading: !0,
                                  isError: !1,
                                  isSuccess: !1,
                                }),
                                (e.next = 4),
                                (0, _.Z)({
                                  web3: l,
                                  address: c,
                                  chainId: d,
                                  walletType: (0, U.Z)(u),
                                  keySeed: F.MR.replace(
                                    F.vO,
                                    x.exchangeAddress
                                  ).replace(F.xS, x.nonce.toString()),
                                })
                              );
                            case 4:
                              return (
                                (t = e.sent),
                                (e.t1 = W.vq),
                                (e.next = 8),
                                l.eth.getChainId()
                              );
                            case 8:
                              return (
                                (e.t2 = e.sent),
                                (e.t3 = { chainId: e.t2 }),
                                (e.t0 = new e.t1(e.t3)),
                                (e.t4 = l),
                                (e.next = 14),
                                l.eth.getChainId()
                              );
                            case 14:
                              return (
                                (e.t5 = e.sent),
                                (e.t6 = W.Mt.MetaMask),
                                (e.t7 = {
                                  accountId: x.accountID,
                                  exchange: x.exchangeAddress,
                                  maxFee: {
                                    tokenId: x.maxFeeTokenID,
                                    volume: x.maxFeeAmount,
                                  },
                                  nonce: x.nonce,
                                  owner: c,
                                  publicKey: {
                                    x: t.formatedPx,
                                    y: t.formatedPy,
                                  },
                                  validUntil: W.O8,
                                }),
                                (e.t8 = {
                                  web3: e.t4,
                                  chainId: e.t5,
                                  walletType: e.t6,
                                  request: e.t7,
                                }),
                                (e.next = 20),
                                e.t0.updateAccount.call(e.t0, e.t8)
                              );
                            case 20:
                              "code" in (n = e.sent) && 0 !== n.code
                                ? a({
                                    isLoading: !1,
                                    isError: !0,
                                    isSuccess: !1,
                                  })
                                : a({
                                    isLoading: !1,
                                    isError: !1,
                                    isSuccess: !0,
                                  });
                            case 22:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  )();
                },
                [c, l, u, x]
              ),
              n
            );
          })(),
          t = e.isError
            ? {
                title: "Oops, something went wrong.",
                component: (0, A.jsx)("div", {}),
              }
            : e.isSuccess
            ? { title: "Success!", component: (0, A.jsx)("div", {}) }
            : {
                title: "Activating...",
                component: (0, A.jsx)(le, {
                  children: (0, A.jsx)(se.Loader, {}),
                }),
              };
        return (0, A.jsxs)(d.ZP, {
          children: [
            (0, A.jsx)(d.eS, {
              children: (0, A.jsx)(d.xB, { title: t.title, center: !0 }),
            }),
            (0, A.jsx)(d.eS, { children: t.component }),
          ],
        });
      }
      var de = E.default.div.withConfig({
        displayName: "ButtonListWrapper",
        componentId: "sc-14fx9rt-0",
      })([
        "display:flex;flex-direction:column;gap:10px;max-width:450px;margin:0 auto;max-height:500px;padding-bottom:24px;",
      ]);
      de.displayName = "ButtonListWrapper";
      var pe = E.default.div.withConfig({
        displayName: "InfoPane",
        componentId: "sc-14fx9rt-1",
      })(
        [
          "display:flex;justify-content:space-between;align-items:center;border-top:",
          ";padding:12px 0;",
        ],
        function (e) {
          var t = e.theme;
          return "1px solid ".concat(t.bg2);
        }
      );
      pe.displayName = "InfoPane";
      var fe = E.default.div.withConfig({
        displayName: "LeftContent",
        componentId: "sc-14fx9rt-2",
      })([""]);
      fe.displayName = "LeftContent";
      var he = E.default.div.withConfig({
        displayName: "RightContent",
        componentId: "sc-14fx9rt-3",
      })([""]);
      function me() {
        var e,
          t,
          n = (0, Q.Ge)().account,
          r = (0, re.Z)(),
          a = r.format,
          o = r.isSuccess ? a() : "unknown",
          s = (0, ae.xv)(n || ie.skipToken).data,
          c =
            null !== (e = null == s ? void 0 : s.avatar) && void 0 !== e
              ? e
              : (0, oe.ZB)(
                  null !==
                    (t = null == s ? void 0 : s.l1Address.toLowerCase()) &&
                    void 0 !== t
                    ? t
                    : ""
                ),
          l = (0, b.useState)("default"),
          u = (0, i.Z)(l, 2),
          p = u[0],
          f = u[1];
        return "states" === p
          ? (0, A.jsx)(ue, {})
          : (0, A.jsxs)(d.ZP, {
              children: [
                (0, A.jsx)(d.eS, {
                  children: (0, A.jsx)(d.xB, {
                    title: "Activate wallet",
                    subtitle:
                      "In order to buy and trade NFTs on our marketplace you must activate access to the Loopring Network Layer 2. This is a one-time fee. Learn more...",
                    center: !0,
                  }),
                }),
                (0, A.jsxs)(d.eS, {
                  children: [
                    (0, A.jsxs)(de, {
                      children: [
                        (0, A.jsxs)(pe, {
                          children: [
                            (0, A.jsx)(fe, { children: "Payment method:" }),
                            (0, A.jsx)(he, {
                              children: (0, A.jsx)(ne(), {
                                imageSrc: c,
                                name: "Wallet: ".concat((0, K.a_)(n || "  ")),
                              }),
                            }),
                          ],
                        }),
                        (0, A.jsxs)(pe, {
                          children: [
                            (0, A.jsx)(fe, {
                              children: "One-time activation fee:",
                            }),
                            (0, A.jsx)(he, { children: o }),
                          ],
                        }),
                      ],
                    }),
                    (0, A.jsx)(L.TextButton, {
                      stretch: !0,
                      onClick: function () {
                        return f("states");
                      },
                      label: "Pay ".concat(o, " to activate"),
                    }),
                  ],
                }),
              ],
            });
      }
      he.displayName = "RightContent";
      const xe = n.p + "8d149a95470ba796205eaf03d577a9fa.svg",
        ge = n.p + "e09a5c34cea7a1768055db71ca8589dd.svg",
        ve = n.p + "680aaedb508156d0b62ed5e7feec9af2.svg";
      var be = n(97761),
        we = [
          {
            inputs: [
              { internalType: "address", name: "from", type: "address" },
              { internalType: "address", name: "to", type: "address" },
              {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
              },
              { internalType: "uint96", name: "amount", type: "uint96" },
              { internalType: "bytes", name: "extraData", type: "bytes" },
            ],
            name: "deposit",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
        ];
      function ye(e) {
        var t = e.onClose,
          n = (0, Q.Ge)(),
          a = n.account,
          h = n.library,
          m = (0, b.useContext)(f.t).closeModal,
          w = (0, g.u)(),
          y = w.watchTransaction,
          k = w.l1Balance,
          C = w.l2Balance,
          E = w.exchangeRate,
          I = (0, b.useState)(""),
          S = (0, i.Z)(I, 2),
          N = S[0],
          T = S[1],
          Z = (0, b.useState)(""),
          O = (0, i.Z)(Z, 2),
          B = O[0],
          R = O[1],
          M = (0, b.useState)(!1),
          D = (0, i.Z)(M, 2),
          F = D[0],
          W = D[1],
          _ = (0, b.useState)(!1),
          U = (0, i.Z)(_, 2),
          z = U[0],
          V = U[1],
          q = (0, b.useState)(),
          X = (0, i.Z)(q, 2),
          ee = (X[0], X[1]),
          te = (0, b.useState)(),
          ne = (0, i.Z)(te, 2),
          re = ne[0],
          ie = ne[1],
          ae = (0, b.useState)(!0),
          oe = (0, i.Z)(ae, 2),
          se = oe[0],
          ce = oe[1],
          le = (0, J.s0)();
        function ue() {
          return (ue = (0, r.Z)(
            o().mark(function e() {
              var t;
              return o().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!a || !h) {
                          e.next = 18;
                          break;
                        }
                        if (!(Number(N) <= 0 || isNaN(Number(N)))) {
                          e.next = 3;
                          break;
                        }
                        return e.abrupt(
                          "return",
                          R("Please enter a value greater than 0")
                        );
                      case 3:
                        V(!0),
                          (t = new h.eth.Contract(
                            we,
                            window.nft.EXCHANGE_ADDRESS
                          )),
                          (e.prev = 5),
                          t.methods
                            .deposit(
                              a,
                              a,
                              "0x0000000000000000000000000000000000000000",
                              N,
                              "0x0000000000000000000000000000000000000000"
                            )
                            .send({ from: a, value: N })
                            .on("error", function () {
                              V(!1), R("");
                            })
                            .on("transactionHash", function (e) {
                              var t = {
                                txType: v.U.DEPOSIT,
                                txHash: e,
                                status: "pending",
                                value: N,
                                blockNumber: 0,
                                confirmedBlocks: 0,
                                timestamp: new Date().getTime(),
                                estimatedTime: new Date(),
                              };
                              y(t), ie(t), W(!0), V(!1);
                            })
                            .on("receipt", function (e) {
                              ee(e);
                            }),
                          (e.next = 16);
                        break;
                      case 9:
                        if (
                          ((e.prev = 9),
                          (e.t0 = e.catch(5)),
                          !e.t0.code || 4001 !== e.t0.code)
                        ) {
                          e.next = 13;
                          break;
                        }
                        return e.abrupt("return");
                      case 13:
                        V(!1), (0, Y.Eo)(e.t0), (0, H._)(e.t0);
                      case 16:
                        e.next = 19;
                        break;
                      case 18:
                        (0, G.m)(le);
                      case 19:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[5, 9]]
              );
            })
          )).apply(this, arguments);
        }
        return F && re
          ? (0, A.jsx)(j, { txInfo: re })
          : z
          ? (0, A.jsx)(c.Z, {})
          : (0, A.jsxs)(d.ZP, {
              title: "Make A Deposit",
              backAction: t,
              titleTrailing: (0, A.jsx)(u.Z, {
                label: "Learn More",
                infoText:
                  "Deposit from Ethereum (Layer 1) to Loopring (Layer 2). GameStop NFT is built on the Loopring zk-rollup, which is secured by Ethereum, but allows you to transact with lower fees and higher speeds. You can always withdraw your funds to Layer 1, no matter what.",
              }),
              primaryAction: (0, A.jsx)(L.TextButton, {
                disabled: se,
                label: "Deposit",
                onClick: function () {
                  return ue.apply(this, arguments);
                },
                stretch: !0,
              }),
              secondaryAction: (0, A.jsx)(L.TextButton, {
                variant: L.ButtonVariant.secondary,
                label: "Cancel",
                onClick: null != t ? t : m,
                stretch: !0,
              }),
              children: [
                (0, A.jsx)(d.eS, {
                  children: (0, A.jsxs)(P.Sn, {
                    children: [
                      (0, A.jsxs)(P.tY, {
                        children: [
                          (0, A.jsx)(x.mc, { text: "From", bold: !0 }),
                          (0, A.jsxs)(x.lU, {
                            children: [
                              (0, A.jsx)(x.Q5, {
                                text: "Ethereum Network (L1)",
                              }),
                              (0, A.jsx)(P.un, {
                                children: (0, A.jsx)(l.Z, {
                                  textToCopy: a || "",
                                  label: (0, K.a_)(a || ""),
                                }),
                              }),
                            ],
                          }),
                          (0, A.jsx)(P.YP, {
                            icon: (0, A.jsx)("img", {
                              src: s,
                              alt: "Ethereum logo",
                            }),
                            text: (0, A.jsx)(P.jM, {
                              eth: (0, K.nr)(k),
                              usd: (0, K.YQ)(parseFloat(k) * E),
                            }),
                          }),
                        ],
                      }),
                      (0, A.jsx)(P.bu, {}),
                      (0, A.jsx)(P.tY, {
                        children: (0, A.jsxs)(P.SR, {
                          children: [
                            (0, A.jsx)(x.mc, { text: "To", bold: !0 }),
                            (0, A.jsxs)(x.lU, {
                              children: [
                                (0, A.jsx)(x.Q5, {
                                  text: "GameStop NFT (Loopring L2)",
                                }),
                                (0, A.jsx)(P.un, {
                                  children: (0, A.jsx)(l.Z, {
                                    textToCopy: a || "",
                                    label: (0, K.a_)(a || ""),
                                  }),
                                }),
                              ],
                            }),
                            (0, A.jsx)(P.YP, {
                              icon: (0, A.jsx)("img", {
                                src: s,
                                alt: "Ethereum logo",
                              }),
                              text: (0, A.jsx)(P.jM, {
                                eth: (0, K.nr)(C),
                                usd: (0, K.YQ)(parseFloat(C) * E),
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
                (0, A.jsx)(d.eS, {
                  children: (0, A.jsx)(p.SP, {
                    error: B,
                    label: "Amount",
                    type: "number",
                    annotation: "ETH",
                    handleChange: function (e) {
                      return (
                        (t = e.target.value),
                        parseFloat(t) > parseFloat(k)
                          ? (R("Insufficient balance"), ce(!0))
                          : Number(t) <= 0 || isNaN(Number(t))
                          ? (R("Please enter a value greater than 0"), ce(!0))
                          : (R(""), ce(!1)),
                        void T(Number(t) ? $().utils.toWei(t) : "0")
                      );
                      var t;
                    },
                    infoRight: (0, K.YQ)(
                      parseFloat(N.length > 0 ? $().utils.fromWei(N) : "0") * E
                    ),
                  }),
                }),
                (0, A.jsx)(d.eS, {
                  children: (0, A.jsxs)(x.lU, {
                    children: [
                      (0, A.jsx)(x.mc, {
                        large: !0,
                        text: "Deposits take 12 Ethereum confirmations. This can take as little as 3 minutes, but can sometimes take longer depending on Ethereum network congestion.",
                      }),
                      (0, A.jsx)(x.mc, {
                        large: !0,
                        text: "Deposits are Ethereum transactions, so you will need to pay network (gas) fees. The suggested gas fee will pop up in your wallet. Once on Layer 2, there are no more gas fees to transact!",
                      }),
                    ],
                  }),
                }),
              ],
            });
      }
      const Ae = n.p + "c4e123ccff055d1ff9a77e3487ec7789.svg",
        ke = n.p + "b0ae5f78936f26c6cc6e2f8cd8658009.svg";
      var Ce = n(14642),
        je = n(55646);
      function Ee(e) {
        return Ie.apply(this, arguments);
      }
      function Ie() {
        return (Ie = (0, r.Z)(
          o().mark(function e(t) {
            return o().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      (0, je.ZP)(
                        "".concat(R.Z.getWyreReservation, "?address=").concat(t)
                      )
                    );
                  case 2:
                    return e.abrupt("return", e.sent);
                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      var Se = n(61641),
        Ne = E.default.div.withConfig({
          displayName: "ButtonListWrapper",
          componentId: "sc-144em29-0",
        })([
          "display:flex;flex-direction:column;gap:15px;max-width:450px;margin:0 auto;min-height:315px;padding-bottom:50px;",
        ]);
      function Te(e) {
        var t = e.onClose,
          n = (0, Q.Ge)().account,
          i = (0, Ce.x)().closeModal,
          a = (function () {
            var e = (0, r.Z)(
              o().mark(function e() {
                var t, r;
                return o().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!n) {
                          e.next = 6;
                          break;
                        }
                        return (e.next = 3), Ee(n);
                      case 3:
                        (t = e.sent),
                          i(),
                          null != t && t.url
                            ? window.open(t.url, "_blank", "noopener")
                            : ((r = "Error initializing Wyre"),
                              (0, Y.Eo)(r),
                              (0, H._)(r));
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
        return (0, A.jsxs)(d.ZP, {
          children: [
            (0, A.jsx)(d.eS, {
              children: (0, A.jsx)(d.xB, {
                title: "Deposit Funds (To L2)",
                subtitle: "Which provider would you like to use?",
                backAction: t,
                center: !0,
              }),
            }),
            (0, A.jsxs)(Ne, {
              children: [
                (0, A.jsx)(be.ListButton, {
                  label: "Buy ETH with Wyre",
                  icon: ke,
                  flipIcon: !0,
                  onClick: a,
                }),
                (0, A.jsx)(be.ListButton, {
                  label: "Buy ETH with Ramp",
                  icon: Ae,
                  flipIcon: !0,
                  onClick: function () {
                    n &&
                      (i(),
                      new Se.L({
                        hostAppName: "GameStop NFT",
                        hostLogoUrl: "".concat(
                          window.location.origin,
                          "/logo.svg"
                        ),
                        userAddress: n,
                        swapAsset: "LOOPRING_ETH",
                        url: window.nft.RAMP_URL,
                        hostApiKey: window.nft.RAMP_HOST_API_KEY,
                        fiatCurrency: "USD",
                      }).show());
                  },
                }),
              ],
            }),
          ],
        });
      }
      const Ze = n.p + "81acd6a282481f9569ee6f913587cb72.svg";
      var Pe = n(79361),
        Le = n.n(Pe),
        Oe = n(74855),
        Be = E.default.div.withConfig({
          displayName: "QRCodeWrapper",
          componentId: "sc-es1glh-0",
        })([
          "margin:0 auto;width:250px;height:250px;max-width:100%;display:flex;align-items:center;justify-content:center;",
        ]),
        Re = (0, E.default)(Le()).withConfig({
          displayName: "QRCodeItem",
          componentId: "sc-es1glh-1",
        })(["height:100%;width:100%;display:block;"]),
        Me = E.default.div.withConfig({
          displayName: "InfoWrapper",
          componentId: "sc-es1glh-2",
        })(
          [
            "background-color:",
            ";border-radius:10px;padding:20px 20px 25px 20px;max-width:375px;margin:35px auto 0 auto;display:flex;flex-direction:column;gap:5px;",
          ],
          function (e) {
            return e.theme.bg1;
          }
        ),
        De = E.default.div.withConfig({
          displayName: "CopyButtonWrapper",
          componentId: "sc-es1glh-3",
        })(
          [
            "cursor:pointer;font-weight:400;font-size:0.75em;color:",
            ";display:flex;gap:5px;",
          ],
          function (e) {
            return e.theme.bg7;
          }
        ),
        Fe = E.default.img.withConfig({
          displayName: "CopyIconImage",
          componentId: "sc-es1glh-4",
        })([""]),
        We = E.default.span.withConfig({
          displayName: "AddressLabel",
          componentId: "sc-es1glh-5",
        })(
          [
            "color:",
            ";font-weight:bold;font-size:0.75em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;",
          ],
          function (e) {
            return e.theme.bg7;
          }
        );
      function _e(e) {
        var t = e.onClose,
          n = (0, Q.Ge)().account,
          r = (0, b.useState)("Copy to clipboard"),
          a = (0, i.Z)(r, 2),
          o = a[0],
          s = a[1];
        return (0, A.jsxs)(d.ZP, {
          children: [
            (0, A.jsx)(d.eS, {
              children: (0, A.jsx)(d.xB, {
                title: "Receive Address",
                subtitle: "Ask a friend to send ETH on Loopring L2",
                backAction: t,
                center: !0,
              }),
            }),
            (0, A.jsx)(d.eS, {
              children: (0, A.jsx)(Be, {
                children: (0, A.jsx)(Re, {
                  value: "ethereum:".concat(n),
                  renderAs: "svg",
                  imageSettings: { height: 24, width: 24, excavate: !1 },
                }),
              }),
            }),
            (0, A.jsx)(d.eS, {
              children: (0, A.jsxs)(Me, {
                children: [
                  (0, A.jsx)(Oe.CopyToClipboard, {
                    text: n,
                    onCopy: function () {
                      s("Copied"),
                        setTimeout(function () {
                          s("Copy to clipboard");
                        }, 1500);
                    },
                    "aria-label": "copy address to clipboard",
                    children: (0, A.jsxs)(De, {
                      children: [
                        (0, A.jsx)(Fe, { src: Ze, alt: "copy icon" }),
                        o,
                      ],
                    }),
                  }),
                  (0, A.jsx)(We, { children: n }),
                ],
              }),
            }),
          ],
        });
      }
      var Ue = E.default.div.withConfig({
          displayName: "ButtonListWrapper",
          componentId: "sc-13czy1a-0",
        })([
          "display:flex;flex-direction:column;gap:10px;max-width:450px;margin:0 auto;min-height:315px;padding-bottom:50px;",
        ]),
        ze = E.default.div.withConfig({
          displayName: "ImageWrapper",
          componentId: "sc-13czy1a-1",
        })(["margin-top:3px;width:40px;"]);
      function Ve() {
        var e = (0, b.useState)("default"),
          t = (0, i.Z)(e, 2),
          n = t[0],
          r = t[1];
        return "providers" === n
          ? (0, A.jsx)(Te, {
              onClose: function () {
                return r("default");
              },
            })
          : "deposit" === n
          ? (0, A.jsx)(ye, {
              onClose: function () {
                return r("default");
              },
            })
          : "share" === n
          ? (0, A.jsx)(_e, {
              onClose: function () {
                return r("default");
              },
            })
          : (0, A.jsxs)(d.ZP, {
              children: [
                (0, A.jsx)(d.eS, {
                  children: (0, A.jsx)(d.xB, {
                    title: "Deposit Funds (To L2)",
                    subtitle: "How would you like to add funds?",
                    center: !0,
                  }),
                }),
                (0, A.jsx)(d.eS, {
                  children: (0, A.jsxs)(Ue, {
                    children: [
                      (0, A.jsx)(be.ListButton, {
                        icon: (0, A.jsx)(ze, {
                          children: (0, A.jsx)("img", {
                            src: xe,
                            alt: "credit card icon",
                          }),
                        }),
                        label: "Buy ETH with a card",
                        description: "Buy Ether on L2 using Wyre or Ramp",
                        onClick: function () {
                          return r("providers");
                        },
                      }),
                      (0, A.jsx)(be.ListButton, {
                        icon: (0, A.jsx)(ze, {
                          children: (0, A.jsx)("img", {
                            src: ge,
                            alt: "deposit icon",
                          }),
                        }),
                        label: "Deposit ETH from your wallet",
                        description:
                          "Transfer Ether from your L1 to L2 account",
                        onClick: function () {
                          return r("deposit");
                        },
                      }),
                      (0, A.jsx)(be.ListButton, {
                        icon: (0, A.jsx)(ze, {
                          children: (0, A.jsx)("img", {
                            src: ve,
                            alt: "share icon",
                          }),
                        }),
                        label: "Ask a friend",
                        description:
                          "Ask a friend who is already on L2 to transfer ETH to your account",
                        onClick: function () {
                          return r("share");
                        },
                      }),
                    ],
                  }),
                }),
              ],
            });
      }
      var Ge = n(19264),
        qe = n(11768),
        He = n(42662),
        Ke = n.n(He);
      function Ye(e) {
        var t = e.options,
          n = e.children,
          r = (0, b.useRef)(null);
        return (
          (0, b.useEffect)(
            function () {
              r.current && Ke().init(r.current, t);
            },
            [t]
          ),
          (0, A.jsx)("div", { ref: r, children: n })
        );
      }
      var Qe = E.default.video.withConfig({
          displayName: "StyledVideo",
          componentId: "sc-wdk2z9-0",
        })([
          "width:100%;margin:auto;position:absolute;top:50%;transform:translateY(-50%);",
        ]),
        Je = (0, E.keyframes)([
          "0%{opacity:0;transform:translateY(15%)}100%{opacity:1;transform:translateY(0)}",
        ]),
        Xe = E.default.div.withConfig({
          displayName: "EditionWrapper",
          componentId: "sc-wdk2z9-1",
        })(
          [
            "pointer-events:",
            ";animation-name:",
            ";animation-duration:0.5s;opacity:",
            ";animation-iteration-count:once;max-width:430px;padding:15px;margin:0 auto;",
          ],
          function (e) {
            return e.show ? "auto" : "none";
          },
          function (e) {
            return e.show ? Je : "";
          },
          function (e) {
            return e.show ? 1 : 0;
          }
        ),
        $e = E.default.div.withConfig({
          displayName: "ButtonWrapper",
          componentId: "sc-wdk2z9-2",
        })(["margin-top:25px;"]),
        et = E.default.div.withConfig({
          displayName: "CardWrapper",
          componentId: "sc-wdk2z9-3",
        })([
          "position:relative;&:after{content:'';position:absolute;top:0;left:0;width:100%;height:100%;z-index:-1;filter:blur(30px);background-size:100% 100%;background-image:linear-gradient( 45deg,#88aaf1 0%,#efccc1 35.31%,#b8faf6 66.85%,#c8b2f4 95%,#88aaf1 100% );}",
        ]);
      function tt() {
        var e = (0, b.useContext)(f.t),
          t = e.nft,
          n = e.edition,
          r = e.closeModal,
          a = (0, b.useState)(!1),
          o = (0, i.Z)(a, 2),
          s = o[0],
          c = o[1],
          l = (0, b.useState)(n),
          u = (0, i.Z)(l, 2),
          p = u[0],
          h = u[1],
          m = (0, J.s0)();
        if (!p) throw Error("edition to be revealed missing");
        return (0, A.jsx)(d.ZP, {
          children: (0, A.jsxs)(d.eS, {
            children: [
              !s &&
                (0, A.jsx)(Qe, {
                  src: Ge.Z,
                  autoPlay: !0,
                  muted: !0,
                  onEnded: function () {
                    c(!0),
                      h(function (e) {
                        return e && (e.revealed = !0), e;
                      });
                  },
                }),
              (0, A.jsxs)(Xe, {
                show: s,
                children: [
                  (0, A.jsx)(Ye, {
                    options: {
                      max: 5,
                      speed: 1e4,
                      startX: 0,
                      startY: 0,
                      "max-glare": 0.8,
                      gyroscope: !0,
                    },
                    children: (0, A.jsx)(et, {
                      children: (0, A.jsx)(qe.Z, { nft: t, edition: p }),
                    }),
                  }),
                  (0, A.jsx)($e, {
                    children: (0, A.jsx)(L.TextButton, {
                      variant: L.ButtonVariant.secondary,
                      label: "View Your Collection",
                      onClick: function () {
                        m("/profile"), r();
                      },
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var nt = {
          DEPOSIT: "DEPOSIT",
          DEPOSIT_ETH: "DEPOSIT_ETH",
          ACTIVATE: "ACTIVATE",
          WITHDRAW: "WITHDRAW",
          REVEAL: "REVEAL",
        },
        rt = [(0, A.jsx)(Ve, {}, "add-funds")],
        it = [(0, A.jsx)(ye, {}, "deposit-start")],
        at = [(0, A.jsx)(me, {}, "activate")],
        ot = [(0, A.jsx)(ee, {}, "withdraw")],
        st = [(0, A.jsx)(tt, {}, "reveal")];
      const ct = function (e) {
        switch (e) {
          case nt.DEPOSIT:
            return rt;
          case nt.WITHDRAW:
            return ot;
          case nt.ACTIVATE:
            return at;
          case nt.DEPOSIT_ETH:
            return it;
          case nt.REVEAL:
            return st;
          default:
            return null;
        }
      };
    },
    82739: (e, t, n) => {
      "use strict";
      n.d(t, { t: () => r });
      var r = (0, n(67294).createContext)({});
    },
    72295: (e, t, n) => {
      "use strict";
      n.d(t, { L: () => c, Z: () => u });
      var r = n(65057),
        i = n(71893),
        a = n(85893),
        o = i.default.div.withConfig({
          displayName: "ContentWrapper",
          componentId: "sc-zf6ruq-0",
        })([
          "text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;min-height:620px;",
        ]),
        s = i.default.div.withConfig({
          displayName: "ResultWrapper",
          componentId: "sc-zf6ruq-1",
        })([
          "margin-top:40px;display:flex;align-items:center;justify-content:center;flex-direction:column;width:100%;",
        ]),
        c = i.default.img.withConfig({
          displayName: "ResultIcon",
          componentId: "sc-zf6ruq-2",
        })(["max-width:102px;"]),
        l = i.default.p.withConfig({
          displayName: "ResultLabel",
          componentId: "sc-zf6ruq-3",
        })(
          [
            "font-weight:bold;font-size:1.5625em;line-height:2.3125em;text-align:center;color:",
            ";",
          ],
          function (e) {
            return e.theme.bg7;
          }
        );
      function u(e) {
        var t = e.result,
          n = void 0 === t ? "Your NFT was transferred successfully." : t;
        return (0, a.jsxs)(o, {
          children: [
            (0, a.jsx)(s, {
              children: (0, a.jsx)(c, { src: r.Z, alt: "success-icon" }),
            }),
            (0, a.jsx)(l, { children: n }),
          ],
        });
      }
    },
    11768: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => Ne });
      var r = n(70885),
        i = n(30168),
        a = n(5144),
        o = n(1192);
      const s = n.p + "fff28510631a86c01f98075adad4c41f.svg";
      var c = n(14642),
        l = n(15861),
        u = n(87757),
        d = n.n(u),
        p = n(94810),
        f = n(23119),
        h = n(3262),
        m = n(60151),
        x = n(82739),
        g = n(3122),
        v = n(29864),
        b = n(11014),
        w = n(53667);
      function y(e) {
        var t = e.account,
          n = e.library,
          r = e.visible,
          i = e.nftId;
        return (0, b.Z)({
          account: t,
          library: n,
          url: w.Z.toggleNftVisibility,
          method: "POST",
          body: { visible: r, nftId: i },
        });
      }
      var A = n(48866),
        k = n(30567),
        C = n(63641),
        j = n(77044),
        E = n(67294),
        I = n(96974),
        S = n(71893),
        N = n(65057),
        T = n(54071),
        Z = n(85893),
        P = S.default.div.withConfig({
          displayName: "ListingSuccessIcon",
          componentId: "sc-a08fnr-0",
        })(["margin-bottom:1em;"]);
      function L() {
        var e = (0, I.s0)(),
          t = (0, E.useContext)(x.t).closeModal;
        return (0, Z.jsx)(h.ZP, {
          primaryAction: (0, Z.jsx)(v.TextButton, {
            onClick: function () {
              e("/profile?tab=".concat(T.aX.HIDDEN)), t();
            },
            label: "View Hidden NFT",
          }),
          children: (0, Z.jsx)(h.eS, {
            children: (0, Z.jsxs)(g.lU, {
              center: !0,
              children: [
                (0, Z.jsx)(P, {
                  children: (0, Z.jsx)(m.Lw, { src: N.Z, alt: "success-icon" }),
                }),
                (0, Z.jsx)(m.r6, {
                  children:
                    "Your NFT was successfully hidden from your collection",
                }),
              ],
            }),
          }),
        });
      }
      var O = S.default.div.withConfig({
        displayName: "ListingSuccessIcon",
        componentId: "sc-a3rl70-0",
      })(["margin-bottom:1em;"]);
      function B() {
        var e = (0, I.s0)(),
          t = (0, E.useContext)(x.t).closeModal;
        return (0, Z.jsx)(h.ZP, {
          primaryAction: (0, Z.jsx)(v.TextButton, {
            onClick: function () {
              e("/profile?tab=".concat(T.aX.MY_COLLECTION)), t();
            },
            label: "View NFT",
          }),
          children: (0, Z.jsx)(h.eS, {
            children: (0, Z.jsxs)(g.lU, {
              center: !0,
              children: [
                (0, Z.jsx)(O, {
                  children: (0, Z.jsx)(m.Lw, { src: N.Z, alt: "success-icon" }),
                }),
                (0, Z.jsx)(m.r6, {
                  children: "Your NFT is now visible on your public profile",
                }),
              ],
            }),
          }),
        });
      }
      var R = S.default.div.withConfig({
          displayName: "NftIconWrapper",
          componentId: "sc-1cka5b4-0",
        })(["height:9.375em;width:9.375em;position:relative;margin:0 auto;"]),
        M = {
          successMessage: "Item hidden from profile",
          errorMessage: "Error hiding item",
          buttonText: "Hide NFT",
          modalTitle: "Hide NFT",
          modalText:
            "This NFT will no longer show up in your collection and will be hidden to visitors looking at your collection. You can unhide this NFT from the Hidden tab at any time.",
        },
        D = {
          successMessage: "Item visible profile",
          errorMessage: "Error unhiding item",
          buttonText: "Unhide NFT",
          modalTitle: "Unhide NFT",
          modalText:
            "This NFT will show up in your profile collection and will be visible to visitors. You can hide this NFT from the My Collection tab at any time.",
        };
      function F(e) {
        var t = e.edition,
          n = e.visible,
          i = (0, j.Ge)(),
          a = i.account,
          o = i.library,
          s = (0, E.useContext)(x.t).closeModal,
          c = (0, I.s0)(),
          u = (0, E.useState)("init"),
          b = (0, r.Z)(u, 2),
          w = b[0],
          S = b[1],
          N = M;
        function T() {
          return (T = (0, l.Z)(
            d().mark(function e() {
              return d().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!a || !o) {
                          e.next = 16;
                          break;
                        }
                        return (
                          S("signing"),
                          (e.prev = 2),
                          (e.next = 5),
                          y({
                            account: a,
                            library: o,
                            visible: n,
                            nftId: t.tokenId,
                          })
                        );
                      case 5:
                        e.sent.success
                          ? (S("success"),
                            (0, C.XA)(N.successMessage),
                            (t.isVisible = n))
                          : (S("init"), (0, C.Eo)(N.errorMessage)),
                          (e.next = 14);
                        break;
                      case 9:
                        (e.prev = 9),
                          (e.t0 = e.catch(2)),
                          (0, k._)(e.t0),
                          S("init"),
                          (0, C.Eo)(N.errorMessage);
                      case 14:
                        e.next = 17;
                        break;
                      case 16:
                        (0, A.m)(c);
                      case 17:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[2, 9]]
              );
            })
          )).apply(this, arguments);
        }
        return (
          n && (N = D),
          "success" === w
            ? n
              ? (0, Z.jsx)(B, {})
              : (0, Z.jsx)(L, {})
            : "signing" === w
            ? (0, Z.jsx)(p.Z, {})
            : (0, Z.jsxs)(h.ZP, {
                primaryAction: (0, Z.jsx)(v.TextButton, {
                  label: N.buttonText,
                  onClick: function () {
                    return T.apply(this, arguments);
                  },
                }),
                secondaryAction: (0, Z.jsx)(v.TextButton, {
                  variant: v.ButtonVariant.secondary,
                  label: "Cancel",
                  onClick: s,
                }),
                children: [
                  (0, Z.jsx)(h.eS, {
                    children: (0, Z.jsx)(R, {
                      children: (0, Z.jsx)(f.Z, { edition: t }),
                    }),
                  }),
                  (0, Z.jsx)(h.eS, {
                    children: (0, Z.jsxs)(g.lU, {
                      center: !0,
                      children: [
                        (0, Z.jsx)(m.r6, { children: N.modalTitle }),
                        (0, Z.jsx)(m.l2, { children: N.modalText }),
                      ],
                    }),
                  }),
                ],
              })
        );
      }
      var W = n(24724),
        _ = S.default.div.withConfig({
          displayName: "OuterContainer",
          componentId: "sc-1imv1m3-0",
        })([
          "position:absolute;height:100%;width:100%;display:flex;top:0;align-items:center;justify-content:center;pointer-events:none;z-index:2;",
        ]),
        U = S.default.div.withConfig({
          displayName: "IconWrapper",
          componentId: "sc-1imv1m3-1",
        })(
          [
            "width:105px;height:40px;border-radius:33px;background-color:",
            ";display:flex;align-items:center;justify-content:center;pointer-events:auto;position:relative;",
          ],
          function (e) {
            return e.theme.bg7;
          }
        ),
        z = S.default.div.withConfig({
          displayName: "ButtonWrapper",
          componentId: "sc-1imv1m3-2",
        })(["display:block;margin-top:5px;"]),
        V = S.default.button.withConfig({
          displayName: "TooltipButton",
          componentId: "sc-1imv1m3-3",
        })(
          [
            "background-color:transparent;border:none;color:",
            ";margin:0;font-weight:bold;padding:0;z-index:2;pointer-events:auto;",
          ],
          function (e) {
            return e.theme.bg1;
          }
        ),
        G = S.default.img.withConfig({
          displayName: "IconImage",
          componentId: "sc-1imv1m3-4",
        })([""]);
      const q = function (e) {
        var t = e.edition,
          n = (0, c.x)().showModal;
        return (0, Z.jsx)(_, {
          children: (0, Z.jsxs)(U, {
            "data-for": "".concat(t.tokenId, "-hidden-tooltip"),
            "data-tip": "",
            children: [
              (0, Z.jsx)(G, { src: s, alt: "hidden icon" }),
              (0, Z.jsxs)(W.hV, {
                overridePosition: function (e, t, n, r) {
                  var i = e.left,
                    a = e.top;
                  return (
                    null !== r &&
                      ((i = n.clientWidth / 2 - r.clientWidth / 2),
                      (a = -r.clientHeight)),
                    { top: a, left: i }
                  );
                },
                id: "".concat(t.tokenId, "-hidden-tooltip"),
                place: "top",
                type: "dark",
                effect: "solid",
                delayHide: 500,
                children: [
                  "This item is Hidden from your public collection on your profile. Only you are able to view it.",
                  (0, Z.jsx)(z, {
                    children: (0, Z.jsx)(V, {
                      onClick: function () {
                        return n({
                          content: (0, Z.jsx)(F, { edition: t, visible: !0 }),
                        });
                      },
                      children: "Unhide",
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      };
      var H = n(51252),
        K = n(39711),
        Y = S.default.div.withConfig({
          displayName: "LinkWrapper",
          componentId: "sc-1cwxyk4-0",
        })(
          [
            "pointer-events:",
            ";cursor:",
            ";position:absolute;top:0;left:0;right:0;bottom:0;flex:1;",
            " ",
            "",
          ],
          function (e) {
            return e.isL1 ? "none" : "auto";
          },
          function (e) {
            return e.isL1 ? "default" : "pointer";
          },
          function (e) {
            var t = e.hiddenNft,
              n = e.disabled,
              r = e.theme;
            return (
              (t || n) &&
              "\n      &:after {\n        content: '';\n        position: absolute;\n        top: -2px;\n        left: -2px;\n        right: -2px;\n        bottom: -2px;\n        flex: 1; \n        background-color: ".concat(
                r.pageBG,
                ";\n        pointer-events: none;\n        opacity: 0.4;\n        cursor: default;\n  }"
              )
            );
          },
          function (e) {
            return e.preview && "\n    z-index: 10;\n  ";
          }
        ),
        Q = (0, S.default)(K.Link).withConfig({
          displayName: "StyledLink",
          componentId: "sc-1cwxyk4-1",
        })(["position:absolute;top:0;left:0;right:0;bottom:0;flex:1;"]),
        J = S.default.div.withConfig({
          displayName: "CardWrapper",
          componentId: "sc-1cwxyk4-2",
        })(
          [
            "position:relative;flex:1;flex-direction:column;box-sizing:content-box;display:flex;background-color:",
            ";border-radius:15px;padding:17px;border:",
            ";transition:all 0.25s ease-in-out;&:hover{border:",
            ";box-shadow:9px 11px 40px -10px rgba(0,0,0,0.06);transform:translateY(-2.5px);z-index:2;}",
          ],
          function (e) {
            return e.theme.pageBG;
          },
          function (e) {
            var t = e.theme,
              n = e.primaryColor;
            return n ? "1px solid " + n : "1px solid " + t.bg2;
          },
          function (e) {
            var t = e.theme,
              n = e.hoverColor;
            return n ? "1px solid " + n : "1px solid " + t.bg3;
          }
        ),
        X = S.default.div.withConfig({
          displayName: "CardHeader",
          componentId: "sc-1cwxyk4-3",
        })(
          [
            "display:flex;justify-content:space-between;align-items:center;position:relative;",
            "",
          ],
          function (e) {
            var t = e.hiddenNft,
              n = e.theme;
            return (
              t &&
              "\n      &:after {\n        content: '';\n        position: absolute;\n        top: -2px;\n        left: -2px;\n        right: -2px;\n        bottom: -2px;\n        flex: 1; \n        background-color: ".concat(
                n.pageBG,
                ";\n        pointer-events: none;\n        opacity: 0.4;\n        z-index: 2;\n  }\n  "
              )
            );
          }
        ),
        $ = S.default.div.withConfig({
          displayName: "OwnerInfo",
          componentId: "sc-1cwxyk4-4",
        })([
          "align-items:center;pointer-events:auto;z-index:1;.skeleton &{flex:1;}",
        ]),
        ee = S.default.div.withConfig({
          displayName: "Media",
          componentId: "sc-1cwxyk4-5",
        })(
          [
            "display:flex;align-items:center;justify-content:center;width:100%;height:0;padding-bottom:100%;border-radius:10px;position:relative;margin-top:14px;.skeleton &{",
            ";}",
          ],
          function (e) {
            return e.theme.skeleton;
          }
        ),
        te = S.default.div.withConfig({
          displayName: "Details",
          componentId: "sc-1cwxyk4-6",
        })([
          "display:flex;flex-direction:column;justify-content:space-between;position:relative;flex:1;",
        ]);
      const ne = (0, E.forwardRef)(function (e, t) {
        var n,
          r,
          i,
          s,
          c,
          l,
          u = e.nft,
          d = e.edition,
          p = e.url,
          f = e.body,
          h = e.primaryColor,
          m = e.hoverColor,
          x = e.onClick,
          g = e.hidden,
          v = e.disabled,
          b = e.preview;
        void 0 === u.metadata && (u.metadata = {});
        var w = "".concat(d.tokenId, "-owner-tip"),
          y = d.preRevealImage && !d.revealed,
          A = !0 === u.metadata.isL1;
        return (0, Z.jsxs)(J, {
          ref: t,
          id: u.name + u.collectionId,
          isL1: A,
          primaryColor: h,
          hoverColor: m,
          children: [
            (0, Z.jsx)(X, {
              hiddenNft: !!g,
              children: (0, Z.jsx)($, {
                children: (0, Z.jsxs)(K.Link, {
                  to:
                    null !==
                      (n =
                        null !== (r = "/" + u.creator.name) && void 0 !== r
                          ? r
                          : u.creator.ensName) && void 0 !== n
                      ? n
                      : u.creator.l1Address,
                  "data-for": w,
                  "data-tip":
                    "The creator of this NFT. Click to view their profile",
                  children: [
                    (0, Z.jsx)(a.a, { user: u.creator }),
                    (0, Z.jsx)(W.mi, {
                      id: w,
                      place: "top",
                      type: "dark",
                      effect: "solid",
                    }),
                  ],
                }),
              }),
            }),
            (0, Z.jsxs)(ee, {
              children: [
                y
                  ? (0, Z.jsx)(H.Z, {
                      collection: u,
                      edition: d,
                      children: (0, Z.jsx)(o.Z, {
                        url:
                          null !==
                            (c =
                              null !== (l = d.preRevealThumbnailUrl) &&
                              void 0 !== l
                                ? l
                                : d.preRevealImage) && void 0 !== c
                            ? c
                            : "",
                      }),
                    })
                  : (0, Z.jsx)(
                      o.Z,
                      {
                        url:
                          null !== (s = d.thumbnailUrl) && void 0 !== s
                            ? s
                            : d.mediaUrl,
                      },
                      null !== (i = d.thumbnailUrl) && void 0 !== i
                        ? i
                        : d.mediaUrl
                    ),
                g && (0, Z.jsx)(q, { edition: d }),
              ],
            }),
            (0, Z.jsx)(te, { children: f }),
            (0, Z.jsx)(Y, {
              isL1: A,
              hiddenNft: !!g,
              disabled: !!v,
              preview: !!b,
              children: (0, Z.jsx)(Q, {
                onClick: function (e) {
                  x && (e.preventDefault(), x());
                },
                to: { pathname: p },
              }),
            }),
          ],
        });
      });
      n(43528);
      const re = n.p + "a9f2582ee6aefca5e08924fdcc34ea7e.svg";
      var ie = n(44014),
        ae = n(13146),
        oe = n(30666);
      (S.default.div.withConfig({
        displayName: "CollectionWrapper",
        componentId: "sc-se0dm7-0",
      })(["flex:1;position:relative;", ""], function (e) {
        return e.skeleton
          ? "\n    > * {\n      a, button, div {\n      pointer-events: none !important;\n      }\n    }\n  "
          : "";
      }).displayName = "CollectionWrapper"),
        (S.default.div.withConfig({
          displayName: "BaseWrapper",
          componentId: "sc-se0dm7-1",
        })(["position:relative;z-index:1;"]).displayName = "BaseWrapper"),
        (S.default.div.withConfig({
          displayName: "StackedCard",
          componentId: "sc-se0dm7-2",
        })(
          [
            "position:absolute;top:12px;left:12px;right:12px;bottom:-12px;background-color:",
            ";border-radius:15px;border:",
            ";z-index:0;",
          ],
          function (e) {
            return e.theme.pageBG;
          },
          function (e) {
            return "1px solid " + e.theme.bg2;
          }
        ).displayName = "StackedCard"),
        (S.default.div.withConfig({
          displayName: "EditionDetails",
          componentId: "sc-se0dm7-3",
        })([
          "display:flex;flex-direction:column;min-height:72px;flex:1;margin-top:25px;",
        ]).displayName = "EditionDetails"),
        (S.default.span.withConfig({
          displayName: "Title",
          componentId: "sc-se0dm7-5",
        })(
          [
            "font-size:18px;font-weight:",
            ";line-height:21px;color:",
            ";display:inline;-webkit-line-clamp:2;text-overflow:ellipsis;overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;word-wrap:break-word;",
          ],
          ae.FontWeight.BOLD,
          function (e) {
            return e.theme.bg8;
          }
        ).displayName = "Title");
      var se = S.default.span.withConfig({
        displayName: "Inventory",
        componentId: "sc-se0dm7-6",
      })(
        ["color:", ";font-size:14px;.skeleton &{", ";}"],
        function (e) {
          return e.theme.bg6;
        },
        function (e) {
          return e.theme.skeleton;
        }
      );
      (se.displayName = "Inventory"),
        (S.default.div.withConfig({
          displayName: "DetailTop",
          componentId: "sc-se0dm7-7",
        })(["display:flex;justify-content:space-between;"]).displayName =
          "DetailTop"),
        (S.default.div.withConfig({
          displayName: "DetailBottom",
          componentId: "sc-se0dm7-8",
        })([
          "display:flex;justify-content:space-between;margin-top:10px;",
        ]).displayName = "DetailBottom"),
        (S.default.div.withConfig({
          displayName: "Left",
          componentId: "sc-se0dm7-9",
        })([
          "display:flex;flex-direction:column;justify-content:space-between;margin-right:5px;flex:1;",
        ]).displayName = "Left"),
        (S.default.div.withConfig({
          displayName: "Right",
          componentId: "sc-se0dm7-10",
        })([
          "display:flex;flex-direction:column;align-items:flex-end;",
        ]).displayName = "Right"),
        (S.default.span.withConfig({
          displayName: "Price",
          componentId: "sc-se0dm7-11",
        })(
          [
            "font-size:14px;font-weight:500;color:",
            ";.skeleton &{",
            ";max-width:50%;}",
          ],
          function (e) {
            return e.theme.bg6;
          },
          function (e) {
            return e.theme.skeleton;
          }
        ).displayName = "Price"),
        (S.default.div.withConfig({
          displayName: "FromLabel",
          componentId: "sc-se0dm7-12",
        })(["display:flex;color:", ";"], function (e) {
          return e.theme.bg7;
        }).displayName = "FromLabel");
      var ce = S.default.div.withConfig({
        displayName: "EthIconStyle",
        componentId: "sc-se0dm7-13",
      })(
        ["display:flex;font-weight:", ";align-items:center;"],
        ae.FontWeight.BOLD
      );
      ce.displayName = "EthIconStyle";
      var le = S.default.img.withConfig({
        displayName: "EthIcon",
        componentId: "sc-se0dm7-14",
      })(["width:9px;margin:3px;"]);
      le.displayName = "EthIcon";
      var ue,
        de,
        pe = function (e) {
          return (0, Z.jsxs)(ce, {
            children: [(0, Z.jsx)(le, { src: re, alt: "" }), e],
          });
        },
        fe = n(33072),
        he = n(16951),
        me = n(3283),
        xe = n.n(me),
        ge = S.default.div.withConfig({
          displayName: "EditionWrapper",
          componentId: "sc-1qlftvm-0",
        })(
          ["z-index:", ";flex:1;display:flex;position:relative;", ";"],
          function (e) {
            return e.menuOpen ? 2 : 0;
          },
          function (e) {
            var t = e.skeleton,
              n = e.disabled;
            return t || n
              ? "\n    > * {\n      pointer-events: none !important;\n\n      a, button, div {\n        pointer-events: none !important;\n      }\n    }\n  "
              : "";
          }
        );
      ge.displayName = "EditionWrapper";
      var ve = S.default.div.withConfig({
        displayName: "StackedCard",
        componentId: "sc-1qlftvm-1",
      })(
        [
          "position:absolute;top:12px;left:12px;right:12px;bottom:-12px;background-color:",
          ";border-radius:15px;border:",
          ";z-index:-1;",
        ],
        function (e) {
          return e.theme.pageBG;
        },
        function (e) {
          return "1px solid " + e.theme.bg2;
        }
      );
      ve.displayName = "StackedCard";
      var be = S.default.div.withConfig({
        displayName: "EditionDetails",
        componentId: "sc-1qlftvm-2",
      })([
        "display:flex;flex-direction:column;flex:1;margin-top:17px;min-height:72px;position:relative;",
      ]);
      be.displayName = "EditionDetails";
      var we = S.default.div.withConfig({
        displayName: "TitleContainer",
        componentId: "sc-1qlftvm-3",
      })(
        [
          "display:flex;align-items:flex-start;margin-bottom:10px;.skeleton &{",
          ";flex:1;}",
        ],
        function (e) {
          return e.theme.skeleton;
        }
      );
      we.displayName = "TitleContainer";
      var ye = (0, S.default)(K.Link).withConfig({
          displayName: "StyledCollectionLink",
          componentId: "sc-1qlftvm-4",
        })(
          [
            "font-size:14px;color:",
            ";margin-bottom:3px;align-self:flex-start;display:inline-block;z-index:1;&:hover{color:",
            ";}.skeleton &{",
            ";width:100%;max-width:50%;height:15px;margin-bottom:5px;}",
          ],
          function (e) {
            return e.theme.bg6;
          },
          function (e) {
            return e.theme.primary1;
          },
          function (e) {
            return e.theme.skeleton;
          }
        ),
        Ae = S.default.span.withConfig({
          displayName: "Title",
          componentId: "sc-1qlftvm-5",
        })(
          [
            "font-size:18px;font-weight:",
            ";line-height:21px;color:",
            ";display:inline;-webkit-line-clamp:2;text-overflow:ellipsis;overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;word-wrap:break-word;",
          ],
          ae.FontWeight.BOLD,
          function (e) {
            return e.theme.bg8;
          }
        ),
        ke = S.default.div.withConfig({
          displayName: "DetailBottom",
          componentId: "sc-1qlftvm-6",
        })([
          "display:flex;justify-content:space-between;margin-bottom:0;position:relative;",
        ]),
        Ce = S.default.div.withConfig({
          displayName: "Left",
          componentId: "sc-1qlftvm-7",
        })(["flex:1;"]);
      Ce.displayName = "Left";
      var je = S.default.div.withConfig({
          displayName: "Right",
          componentId: "sc-1qlftvm-8",
        })([
          "display:flex;flex-direction:column;align-items:flex-end;position:relative;",
        ]),
        Ee = S.default.span.withConfig({
          displayName: "Price",
          componentId: "sc-1qlftvm-9",
        })(
          [
            "font-size:14px;font-weight:",
            ";color:",
            ";.skeleton &{",
            ";max-width:35%;}",
          ],
          ae.FontWeight.MEDIUM,
          function (e) {
            return e.theme.bg6;
          },
          function (e) {
            return e.theme.skeleton;
          }
        );
      Ee.displayName = "Price";
      var Ie = S.default.div.withConfig({
        displayName: "LastLabel",
        componentId: "sc-1qlftvm-10",
      })(
        [
          "display:flex;align-items:center;font-weight:",
          ";font-size:0.8em;color:",
          ";",
          ";",
        ],
        ae.FontWeight.MEDIUM,
        function (e) {
          return e.theme.bg5;
        },
        function (e) {
          return e.theme.mediaWidth.upToExtraLarge(
            ue || (ue = (0, i.Z)(["\n    padding-top: 6px;\n  "]))
          );
        }
      );
      Ie.displayName = "LastLabel";
      var Se = S.default.div.withConfig({
        displayName: "NotForSaleLabel",
        componentId: "sc-1qlftvm-11",
      })(
        [
          "display:flex;justify-content:space-between;min-width:max-content;",
          ";",
        ],
        function (e) {
          return e.theme.mediaWidth.upToExtraLarge(
            de || (de = (0, i.Z)(["\n    flex-direction: column;\n  "]))
          );
        }
      );
      Se.displayName = "NotForSaleLabel";
      const Ne = (0, E.forwardRef)(function (e, t) {
        var n,
          i = e.nft,
          a = e.options,
          o = e.edition,
          s = e.skeleton,
          c = e.onClick,
          l = e.grouped,
          u = e.itemsCount,
          d = e.hidden,
          p = e.label,
          f = void 0 === p ? o.name : p,
          h = e.disabled,
          m = e.preview,
          x = (0, E.useState)(!1),
          g = (0, r.Z)(x, 2),
          v = g[0],
          b = g[1],
          w = (0, fe.u)().exchangeRate,
          y = (0, I.bS)(he._2);
        if (o.order) {
          var A = xe().utils.fromWei(o.order.buyTokenAmount);
          n = ""
            .concat((0, oe.nr)(A || ""), " (")
            .concat((0, oe.YQ)(Number(A) * w), ")");
        } else {
          var k = xe().utils.fromWei(o.priceInWei);
          n = ""
            .concat((0, oe.nr)(k || ""), " (")
            .concat((0, oe.YQ)(Number(k) * w), ")");
        }
        var C = (0, Z.jsxs)(be, {
            children: [
              (0, Z.jsx)(ye, {
                to: "/collection/" + i.collectionId,
                children: i.name,
              }),
              (0, Z.jsx)(we, { children: (0, Z.jsx)(Ae, { children: f }) }),
              (0, Z.jsxs)(ke, {
                children: [
                  (0, Z.jsx)(Ce, {
                    children: (0, Z.jsxs)(Ee, {
                      className: "price",
                      children: [
                        o.isAvailable && pe(n),
                        !u &&
                          !o.isAvailable &&
                          (0, Z.jsxs)(Se, {
                            children: [
                              "Not for sale",
                              !y &&
                                (0, Z.jsxs)(Ie, { children: ["Last", pe(n)] }),
                            ],
                          }),
                      ],
                    }),
                  }),
                  (0, Z.jsxs)(je, {
                    className: "right",
                    children: [
                      u &&
                        (0, Z.jsxs)(se, {
                          children: [u, " ", 1 === u ? "item" : "items"],
                        }),
                      a &&
                        (0, Z.jsx)(ie.Z, { options: a, menuOpenCallback: b }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          j = l && void 0 !== u && u > 1;
        return (0,
        Z.jsxs)(ge, { menuOpen: v, className: s ? "skeleton" : "", skeleton: !!s, disabled: !!h, children: [(0, Z.jsx)(ne, { inPage: "edition", ref: t, nft: i, url: "/collection/".concat(i.collectionId, "/edition/").concat(o.editionId), edition: o, body: C, onClick: c, hidden: d, disabled: !!h, preview: !!m }), j && (0, Z.jsx)(ve, {})] });
      });
    },
    44014: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => h });
      var r = n(70885),
        i = n(2180),
        a = n(50525),
        o = n(29864),
        s = n(47417),
        c = n(67294),
        l = n(71893),
        u = n(85893),
        d = l.default.div.withConfig({
          displayName: "OptionMenuWrapper",
          componentId: "sc-1bx81ot-0",
        })(["position:relative;display:flex;justify-content:flex-end;"]);
      d.displayName = "OptionMenuWrapper";
      var p = l.default.div.withConfig({
        displayName: "MenuWrapper",
        componentId: "sc-1bx81ot-1",
      })(["position:absolute;right:0;top:40px;min-width:250px;z-index:1;"]);
      p.displayName = "MenuWrapper";
      var f = l.default.button.withConfig({
        displayName: "MenuButtonOption",
        componentId: "sc-1bx81ot-2",
      })([
        "min-width:100%;padding:8px 30px 8px 10%;position:relative;text-align:left;background-color:transparent;border:none;cursor:pointer;font-size:16px;font-weight:bold;color:#333;",
      ]);
      f.displayName = "MenuButtonOption";
      const h = function (e) {
        var t = e.options,
          n = e.menuOpenCallback,
          l = void 0 === n ? function () {} : n,
          h = (0, c.useRef)(null),
          m = (0, c.useState)(!1),
          x = (0, r.Z)(m, 2),
          g = x[0],
          v = x[1];
        (0, s.Z)(h, function () {
          return b();
        });
        var b = function () {
            l(!1), v(!1);
          },
          w = t.map(function (e, t) {
            return (0, u.jsx)(
              f,
              {
                onClick: function () {
                  e.action(), v(!1);
                },
                "aria-label": e.label,
                children: e.label,
              },
              t + "-" + e
            );
          });
        return (0, u.jsxs)(d, {
          ref: h,
          children: [
            (0, u.jsx)(o.TextButton, {
              size: "small",
              "aria-label": "toggle options",
              label: "Actions",
              icon: i.Z,
              flipIcon: !0,
              stretch: !0,
              onClick: function (e) {
                e.preventDefault(),
                  v(function (e) {
                    return l(!e), !e;
                  });
              },
            }),
            g && (0, u.jsx)(p, { children: (0, u.jsx)(a.Z, { body: w }) }),
          ],
        });
      };
    },
    50525: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => o });
      var r = n(71893),
        i = n(85893),
        a = r.default.div.withConfig({
          displayName: "PopoverMenuWrapper",
          componentId: "sc-1a67v17-0",
        })([
          "min-width:100%;max-width:300px;padding:10px 0;background-color:white;box-shadow:0px 4px 4px 0px rgba(0,0,0,0.04);border-radius:5px;display:flex;flex-direction:column;padding:20px 0 20px 0;",
        ]);
      const o = function (e) {
        var t = e.body;
        return (0, i.jsx)(a, { children: t });
      };
    },
    54071: (e, t, n) => {
      "use strict";
      n.d(t, { aX: () => m, dP: () => x, mQ: () => g, OK: () => v });
      var r,
        i,
        a = n(70885),
        o = n(30168),
        s = n(67294),
        c = n(71893),
        l = n(85893),
        u = c.default.div.withConfig({
          displayName: "TabsWrapper",
          componentId: "sc-1jvb2k4-0",
        })([""]),
        d = c.default.div.withConfig({
          displayName: "TabHeader",
          componentId: "sc-1jvb2k4-1",
        })(["display:flex;gap:15px;", ";"], function (e) {
          return e.theme.mediaWidth.upToSmall(
            r || (r = (0, o.Z)(["\n    flex-direction: column;\n  "]))
          );
        }),
        p = c.default.div.withConfig({
          displayName: "TabSelectorWrapper",
          componentId: "sc-1jvb2k4-2",
        })(["flex:1;display:flex;overflow-x:auto;padding-bottom:5px;"]),
        f = c.default.button.withConfig({
          displayName: "TabButton",
          componentId: "sc-1jvb2k4-3",
        })(
          [
            "border:none;background:transparent;border-bottom:",
            ";color:",
            ";font-size:16px;font-weight:",
            ";text-align:left;margin-right:40px;padding:10px 0;cursor:pointer;white-space:nowrap;",
            ";",
          ],
          function (e) {
            var t = e.theme;
            return e.active ? "1px solid " + t.bg7 : "none";
          },
          function (e) {
            var t = e.theme;
            return e.active ? t.bg9 : t.bg7;
          },
          function (e) {
            return e.active ? "bold" : 500;
          },
          function (e) {
            return e.theme.mediaWidth.upToSmall(
              i || (i = (0, o.Z)(["\n    margin-right: 30px;\n  "]))
            );
          }
        ),
        h = c.default.div.withConfig({
          displayName: "TabContent",
          componentId: "sc-1jvb2k4-4",
        })(["margin-top:23px;"]),
        m = {
          MY_COLLECTION: "my-collection",
          FOR_SALE: "for-sale",
          LIKED: "liked",
          HIDDEN: "hidden",
        },
        x = { COLLECTION: "Collection", CREATOR: "Creator" },
        g = function (e) {
          var t = e.children,
            n = e.callback,
            r = e.initialTab,
            i = void 0 === r ? 0 : r,
            o = e.rightContent,
            c = (0, s.useState)(i),
            f = (0, a.Z)(c, 2),
            m = f[0],
            x = f[1];
          return (0, l.jsxs)(u, {
            children: [
              (0, l.jsxs)(d, {
                children: [
                  (0, l.jsx)(p, {
                    children: s.Children.map(t, function (e, t) {
                      return (0, s.cloneElement)(e, {
                        onClick: function () {
                          x(t), n && n(t);
                        },
                        tabIndex: t,
                        active: t === m,
                      });
                    }),
                  }),
                  o,
                ],
              }),
              (0, l.jsx)(h, { children: t[m].props.children }),
            ],
          });
        },
        v = function (e) {
          var t = e.active,
            n = e.label,
            r = e.onClick;
          return (0, l.jsx)(f, {
            active: !!t,
            onClick: r,
            "aria-label": n,
            children: n,
          });
        };
    },
    3122: (e, t, n) => {
      "use strict";
      n.d(t, { Q5: () => c, mc: () => l, lU: () => u });
      var r = n(71893),
        i = n(85893),
        a = r.default.h3.withConfig({
          displayName: "StyledTextPrimary",
          componentId: "sc-d6dtk-0",
        })(
          ["font-size:0.875rem;font-weight:400;color:", ";margin:0;"],
          function (e) {
            return e.theme.bg7;
          }
        ),
        o = r.default.div.withConfig({
          displayName: "StyledTextSubdued",
          componentId: "sc-d6dtk-1",
        })(
          ["font-size:", ";font-weight:", ";color:", ";margin:0;"],
          function (e) {
            return e.large ? "0.875rem" : "0.75rem";
          },
          function (e) {
            var t = e.large;
            return e.bold ? 700 : t ? 400 : 500;
          },
          function (e) {
            return e.theme.bg5;
          }
        ),
        s = r.default.div.withConfig({
          displayName: "StyledTTextContainer",
          componentId: "sc-d6dtk-2",
        })(
          ["margin:1em 0;display:grid;gap:", ";text-align:", ";"],
          function (e) {
            return e.tight ? "0.2em" : "0.4em";
          },
          function (e) {
            return e.center ? "center" : "initial";
          }
        );
      function c(e) {
        var t = e.text;
        return (0, i.jsx)(a, { children: t });
      }
      function l(e) {
        var t = e.text,
          n = e.large,
          r = void 0 !== n && n,
          a = e.bold,
          s = void 0 !== a && a;
        return (0, i.jsx)(o, { large: r, bold: s, children: t });
      }
      function u(e) {
        var t = e.children,
          n = e.tight,
          r = void 0 !== n && n,
          a = e.center,
          o = void 0 !== a && a;
        return (0, i.jsx)(s, { center: o, tight: r, children: t });
      }
    },
    50256: (e, t, n) => {
      "use strict";
      n.d(t, {
        YP: () => m,
        jM: () => b,
        SR: () => f,
        bu: () => w,
        Sn: () => h,
        un: () => A,
        tY: () => p,
      });
      var r = n(30168);
      const i = n.p + "0156ef55a23ab1b15bf9b26666cbd2b9.svg";
      var a,
        o,
        s = n(71893),
        c = n(85893),
        l = s.default.section.withConfig({
          displayName: "StyledTransferCard",
          componentId: "sc-1cv2nin-0",
        })(
          [
            "display:flex;justify-content:space-between;gap:1em;align-items:center;border:1px solid ",
            ";border-radius:10px;padding:1.4em 1.5em;",
            ";",
          ],
          function (e) {
            return e.theme.bg7;
          },
          function (e) {
            return e.theme.mediaWidth.upToExtraSmall(
              a ||
                (a = (0, r.Z)([
                  "\n    flex-direction: column;\n    align-items: flex-start;\n    border: none;\n    padding: 0;\n    gap: 2em;\n  ",
                ]))
            );
          }
        ),
        u = s.default.div.withConfig({
          displayName: "StyledIconCard",
          componentId: "sc-1cv2nin-1",
        })(["display:flex;gap:8px;align-items:flex-start;"]),
        d = s.default.img.withConfig({
          displayName: "TransferArrowImage",
          componentId: "sc-1cv2nin-2",
        })(["", ";"], function (e) {
          return e.theme.mediaWidth.upToExtraSmall(
            o || (o = (0, r.Z)(["\n    display: none;\n  "]))
          );
        }),
        p = s.default.div.withConfig({
          displayName: "TransferSection",
          componentId: "sc-1cv2nin-3",
        })([
          "flex:1;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;",
        ]),
        f = s.default.div.withConfig({
          displayName: "RightSideTransferWrapper",
          componentId: "sc-1cv2nin-4",
        })(["margin-left:auto;"]);
      function h(e) {
        var t = e.children;
        return (0, c.jsx)(l, { children: t });
      }
      function m(e) {
        var t = e.icon,
          n = e.text;
        return (0, c.jsxs)(u, { children: [t, n] });
      }
      var x = s.default.div.withConfig({
          displayName: "PriceWrapper",
          componentId: "sc-1cv2nin-5",
        })(["display:flex;flex-direction:column;"]),
        g = s.default.span.withConfig({
          displayName: "EthPrice",
          componentId: "sc-1cv2nin-6",
        })(["font-size:1em;font-weight:bold;color:", ";"], function (e) {
          return e.theme.bg7;
        }),
        v = s.default.span.withConfig({
          displayName: "UsdPrice",
          componentId: "sc-1cv2nin-7",
        })(["font-size:0.875em;font-weight:500;color:", ";"], function (e) {
          return e.theme.bg7;
        });
      function b(e) {
        var t = e.eth,
          n = e.usd;
        return (0, c.jsxs)(x, {
          children: [
            (0, c.jsx)(g, { children: t }),
            (0, c.jsx)(v, { children: n }),
          ],
        });
      }
      function w() {
        return (0, c.jsx)(d, {
          src: i,
          alt: "Arrow icon with grey background",
        });
      }
      var y = s.default.div.withConfig({
        displayName: "StyledEthAddress",
        componentId: "sc-1cv2nin-8",
      })(
        ["font-size:0.75rem;font-weight:500;color:", ";margin:0;"],
        function (e) {
          return e.theme.bg5;
        }
      );
      function A(e) {
        var t = e.children;
        return (0, c.jsx)(y, { children: t });
      }
    },
    82529: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => j, S: () => C });
      var r = n(15861),
        i = n(4942),
        a = n(42982),
        o = n(70885),
        s = n(87757),
        c = n.n(s),
        l = n(88223),
        u = n(55646),
        d = n(30567),
        p = n(53667);
      function f(e) {
        return h.apply(this, arguments);
      }
      function h() {
        return (
          (h = (0, r.Z)(
            c().mark(function e(t) {
              var n;
              return c().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = []),
                          (e.prev = 1),
                          (e.next = 4),
                          Promise.all(
                            t.map(
                              (function () {
                                var e = (0, r.Z)(
                                  c().mark(function e(t) {
                                    return c().wrap(function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return e.abrupt(
                                              "return",
                                              (0, u.ZP)(
                                                p.Z.getPublicProfile +
                                                  "?address=".concat(t)
                                              )
                                                .then(function (e) {
                                                  return n.push(e);
                                                })
                                                .catch(function (e) {
                                                  return (0, d._)(e);
                                                })
                                            );
                                          case 1:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e);
                                  })
                                );
                                return function (t) {
                                  return e.apply(this, arguments);
                                };
                              })()
                            )
                          )
                        );
                      case 4:
                        e.next = 9;
                        break;
                      case 6:
                        (e.prev = 6), (e.t0 = e.catch(1)), (0, d._)(e.t0);
                      case 9:
                        return e.abrupt("return", n);
                      case 10:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 6]]
              );
            })
          )),
          h.apply(this, arguments)
        );
      }
      var m = n(77044),
        x = n(1430),
        g = n(93469),
        v = n(67294),
        b = n(85893);
      function w(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? w(Object(n), !0).forEach(function (t) {
                (0, i.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : w(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var A = {
          users: {},
          addAddresses: function () {},
          updateUser: function () {},
        },
        k = (0, v.createContext)(A),
        C = function () {
          return (0, v.useContext)(k);
        };
      const j = function (e) {
        var t = e.children,
          n = (0, m.Ge)(),
          s = n.library,
          u = n.account,
          d = (0, v.useState)({}),
          p = (0, o.Z)(d, 2),
          h = p[0],
          w = p[1],
          A = (0, v.useState)([]),
          C = (0, o.Z)(A, 2),
          j = C[0],
          E = C[1],
          I = (0, v.useState)([]),
          S = (0, o.Z)(I, 2),
          N = S[0],
          T = S[1];
        (0, v.useEffect)(
          function () {
            s && (Z(N), T([]));
          },
          [s]
        ),
          (0, v.useEffect)(
            function () {
              null == u || u.toLowerCase();
            },
            [u, h]
          );
        var Z = function (e) {
            var t = e.map(function (e) {
                return e.toLowerCase();
              }),
              n = (0, x.Z)(t, j);
            P((0, x.Z)(n, Object.keys(h))),
              s
                ? L(n)
                : T(function (t) {
                    return (0,
                    a.Z)(new Set([].concat((0, a.Z)(t), (0, a.Z)(e))));
                  });
          },
          P = function (e) {
            var t = {};
            e.forEach(function (e) {
              return (t[e] = { l1Address: e });
            }),
              w(function (e) {
                return y(y({}, e), t);
              });
          },
          L = function (e) {
            e.length &&
              (Promise.all([O(e), R(e)]),
              E(function (t) {
                return (0, a.Z)(new Set([].concat((0, a.Z)(t), (0, a.Z)(e))));
              }));
          };
        function O(e) {
          return B.apply(this, arguments);
        }
        function B() {
          return (
            (B = (0, r.Z)(
              c().mark(function e(t) {
                var n;
                return c().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), f(t);
                      case 2:
                        (n = e.sent),
                          w(function (e) {
                            var t = (0, g.Z)(e);
                            return (
                              n.forEach(function (e) {
                                t[e.l1Address]
                                  ? (t[e.l1Address] = y(
                                      y({}, e),
                                      {},
                                      { ensName: t[e.l1Address].ensName }
                                    ))
                                  : (t[e.l1Address] = e);
                              }),
                              t
                            );
                          });
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            B.apply(this, arguments)
          );
        }
        function R(e) {
          return M.apply(this, arguments);
        }
        function M() {
          return (M = (0, r.Z)(
            c().mark(function e(t) {
              var n;
              return c().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!s) {
                        e.next = 5;
                        break;
                      }
                      return (e.next = 3), (0, l.bD)(s, t);
                    case 3:
                      (n = e.sent), D("ensName", n);
                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        var D = function (e, t) {
          w(function (n) {
            var r = (0, g.Z)(n);
            return (
              Object.keys(t).forEach(function (n) {
                r[n]
                  ? (r[n][e] = t[n])
                  : (r[n] = (0, i.Z)({ l1Address: n }, e, t[n]));
              }),
              r
            );
          });
        };
        return (0, b.jsx)(k.Provider, {
          value: {
            users: h,
            addAddresses: Z,
            updateUser: function (e) {
              w(function (t) {
                return y(y({}, t), {}, (0, i.Z)({}, e.l1Address, e));
              });
            },
          },
          children: t,
        });
      };
    },
    33072: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => v, u: () => g });
      var r = n(15861),
        i = n(87757),
        a = n.n(i),
        o = n(70885),
        s = n(46441),
        c = n(77044),
        l = n(67294),
        u = n(28065);
      var d = n(39800);
      var p = n(92436),
        f = n(32439),
        h = n(85893),
        m = {
          l1Balance: "0",
          l2Balance: "0",
          pendingTransactions: {},
          watchTransaction: function () {},
          exchangeRate: 0,
          fetchL2Balance: function () {},
          l2BalanceInitialized: !1,
        },
        x = (0, l.createContext)(m),
        g = function () {
          return (0, l.useContext)(x);
        };
      const v = function (e) {
        var t = e.children,
          n = (0, c.Ge)().account,
          i = (0, f.Z)(),
          m = (function () {
            var e = (0, l.useState)(0),
              t = (0, o.Z)(e, 2),
              n = t[0],
              r = t[1],
              i = (0, u.Z)(),
              a = (0, d.R)(null, { pollingInterval: 3e4 });
            return (
              (0, l.useEffect)(
                function () {
                  i || a.refetch();
                },
                [i]
              ),
              (0, l.useEffect)(
                function () {
                  if (a.data) {
                    var e = a.data.rates[0].quotes[0].rate;
                    n !== e && r(e);
                  }
                },
                [n, a.data]
              ),
              n
            );
          })(),
          g = (0, p.Z)(),
          v = g.l2Balance,
          b = g.fetchL2Balance,
          w = g.l2BalanceInitialized,
          y = (function () {
            var e = (0, c.Ge)(),
              t = e.account,
              n = e.library,
              i = e.chainId,
              d = (0, l.useState)(0),
              p = (0, o.Z)(d, 2),
              f = p[0],
              h = p[1],
              m = (0, l.useState)(0),
              x = (0, o.Z)(m, 2),
              g = x[0],
              v = x[1],
              b = (0, u.Z)();
            return (
              (0, l.useEffect)(
                function () {
                  if (!b) {
                    t &&
                      n &&
                      n.eth
                        .getBalance(t)
                        .then(function (e) {
                          e !== f && h(e);
                        })
                        .catch(function () {
                          h(0);
                        });
                    var e = setTimeout(
                      (0, r.Z)(
                        a().mark(function e() {
                          return a().wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  v(function (e) {
                                    return e + 1;
                                  });
                                case 1:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })
                      ),
                      3e4
                    );
                    return function () {
                      clearTimeout(e);
                    };
                  }
                },
                [t, n, i, g, b]
              ),
              (0, s.dF)(f)
            );
          })(),
          A = (function () {
            var e = (0, r.Z)(
              a().mark(function e(t) {
                var r;
                return a().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        null ===
                          (r = JSON.parse(
                            localStorage.getItem("pending-txs")
                          )) && (r = {}),
                          void 0 === r[n] && (r[n] = {}),
                          (r[n][t.txHash] = t),
                          localStorage.setItem(
                            "pending-txs",
                            JSON.stringify(r)
                          );
                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        return (0, h.jsx)(x.Provider, {
          value: {
            l1Balance: y,
            l2Balance: v,
            fetchL2Balance: b,
            pendingTransactions: i,
            watchTransaction: A,
            exchangeRate: m,
            l2BalanceInitialized: w,
          },
          children: t,
        });
      };
    },
    98790: (e, t, n) => {
      "use strict";
      n.d(t, { MR: () => r, vO: () => i, xS: () => a });
      var r =
          "Sign this message to access Loopring Exchange: ${exchangeAddress} with key nonce: ${nonce}",
        i = "${exchangeAddress}",
        a = "${nonce}";
    },
    27113: (e, t, n) => {
      "use strict";
      n.d(t, { F: () => r });
      var r = "GameStop NFT";
    },
    221: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => s });
      var r = n(46441),
        i = n(39800),
        a = n(30666),
        o = n(92436);
      const s = function () {
        var e = (0, o.Z)().l2Balance,
          t = (0, i.R)(),
          n = t.data,
          s = t.isSuccess;
        if (n) {
          var c = n.gasPrice,
            l = n.ethFee,
            u = n.rates,
            d = Number(l) + c,
            p = (0, r.dF)(d.toString());
          return {
            format: function () {
              var e,
                t =
                  null ===
                    (e = u.map(function (e) {
                      return null == e
                        ? void 0
                        : e.quotes.find(function (e) {
                            return "USD" === (null == e ? void 0 : e.currency);
                          });
                    })[0]) || void 0 === e
                    ? void 0
                    : e.rate;
              return t ? (0, a.S2)(d.toString(), Number(p) * t) : "TBD";
            },
            hasEnoughFunds: function () {
              return Number(e) - Number(p) >= 0;
            },
            isSuccess: s,
          };
        }
        return {
          format: function () {
            return "TBD";
          },
          hasEnoughFunds: function () {
            return !1;
          },
          isSuccess: !1,
        };
      };
    },
    1765: (e, t, n) => {
      "use strict";
      n.d(t, { t: () => u });
      var r = n(15861),
        i = n(87757),
        a = n.n(i),
        o = n(77044),
        s = n(94975),
        c = n(25237),
        l = n(18895),
        u = function () {
          var e = (0, l.Z)().needSwitch,
            t = (0, o.Ge)(),
            n = t.account,
            i = t.library,
            u = (0, s.Z)(
              (0, r.Z)(
                a().mark(function t() {
                  return a().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (!n || !i || e) {
                            t.next = 4;
                            break;
                          }
                          return t.abrupt("return", (0, c.y)(n, i));
                        case 4:
                          throw new Error("No auth");
                        case 5:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              ),
              [n, i]
            ),
            d = u.value,
            p = u.loading;
          return { authSig: d, authSigError: u.error, isAuthSigLoading: p };
        };
    },
    18895: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => i });
      var r = n(77044);
      const i = function () {
        var e = (0, r.Ge)().chainId,
          t = "PROD" === window.nft.ENV;
        return {
          correctChain: t ? "Mainnet" : "Goerli",
          needSwitch: !(t || !e || 5 === e) || !(!t || !e || 1 === e),
          chainId: e,
        };
      };
    },
    47417: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => i });
      var r = n(67294);
      const i = function (e, t) {
        (0, r.useEffect)(
          function () {
            var n = function (e) {
                ("Escape" !== e.key && "Esc" !== e.key) || t();
              },
              r = function (n) {
                (null !== e.current && e.current.contains(n.target)) || t();
              };
            return (
              document.addEventListener("mousedown", r),
              document.addEventListener("keydown", n),
              function () {
                document.removeEventListener("mousedown", r),
                  document.removeEventListener("keydown", n);
              }
            );
          },
          [e, t]
        );
      };
    },
    92436: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => d });
      var r = n(70885),
        i = n(46441),
        a = n(55646),
        o = n(30567),
        s = n(53667),
        c = n(77044),
        l = n(67294),
        u = n(28065);
      const d = function () {
        var e = (0, c.Ge)(),
          t = e.account,
          n = e.library,
          d = (0, l.useState)("0"),
          p = (0, r.Z)(d, 2),
          f = p[0],
          h = p[1],
          m = (0, l.useState)(!1),
          x = (0, r.Z)(m, 2),
          g = x[0],
          v = x[1],
          b = (0, l.useState)(0),
          w = (0, r.Z)(b, 2),
          y = w[0],
          A = w[1],
          k = (0, u.Z)(),
          C = (0, l.useCallback)(
            function () {
              if (t && n) {
                var e = s.Z.balances + "?address=" + t + "&tokenSymbols=ETH";
                (0, a.ZP)(e)
                  .then(function (e) {
                    e.balances.length > 0
                      ? e.balances[0].amount !== f && h(e.balances[0].amount)
                      : h("0"),
                      v(!0);
                  })
                  .catch(function (e) {
                    (0, o._)("Error fetching L2 balance");
                  });
              }
            },
            [t, n]
          );
        return (
          (0, l.useEffect)(
            function () {
              if (k) return function () {};
              C();
              var e = setTimeout(function () {
                A(function (e) {
                  return e + 1;
                });
              }, 3e4);
              return function () {
                clearTimeout(e);
              };
            },
            [y, k]
          ),
          (0, l.useEffect)(
            function () {
              C();
            },
            [C]
          ),
          {
            l2Balance: (0, i.dF)(f),
            fetchL2Balance: C,
            l2BalanceInitialized: g,
          }
        );
      };
    },
    69012: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => A });
      var r = n(15861),
        i = n(70885),
        a = n(87757),
        o = n.n(a),
        s = n(14642),
        c = n(68939),
        l = n(33072),
        u = n(98790),
        d = n(92514),
        p = n(36610),
        f = n(11014),
        h = n(13317),
        m = n(48866),
        x = n(55646),
        g = n(53667),
        v = n(63641),
        b = n(77044),
        w = n(67294),
        y = n(96974);
      const A = function () {
        var e = (0, b.Ge)(),
          t = e.account,
          n = e.library,
          a = e.connector,
          A = e.chainId,
          k = (0, y.s0)(),
          C = (0, w.useState)(!1),
          j = (0, i.Z)(C, 2),
          E = j[0],
          I = j[1],
          S = (0, l.u)().l2Balance,
          N = (0, s.x)().showModal;
        (0, w.useEffect)(
          function () {
            I(!1);
          },
          [t]
        );
        var T = (0, w.useMemo)(
          function () {
            return "0.0" !== S;
          },
          [S]
        );
        function Z() {
          return (Z = (0, r.Z)(
            o().mark(function e() {
              var r, i, s, l;
              return o().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (t && n && A) {
                        e.next = 3;
                        break;
                      }
                      return (0, m.m)(k), e.abrupt("return", !1);
                    case 3:
                      if (T) {
                        e.next = 6;
                        break;
                      }
                      return N({ flow: c.e.DEPOSIT }), e.abrupt("return", !1);
                    case 6:
                      if (E || !T) {
                        e.next = 41;
                        break;
                      }
                      return (
                        (e.next = 9),
                        (0, x.ZP)(
                          "".concat(g.Z.isAccountSetup, "?address=").concat(t)
                        )
                      );
                    case 9:
                      if (((r = e.sent), I(r), !r)) {
                        e.next = 13;
                        break;
                      }
                      return e.abrupt("return", !0);
                    case 13:
                      return (
                        (e.next = 15),
                        (0, f.Z)({
                          url: g.Z.updateEddsaKeyInfo,
                          account: t,
                          library: n,
                          method: "get",
                        })
                      );
                    case 15:
                      if ((i = e.sent).accountID) {
                        e.next = 19;
                        break;
                      }
                      return (
                        (0, v.Eo)(
                          "Something went wrong please try again later"
                        ),
                        e.abrupt("return", !1)
                      );
                    case 19:
                      return (
                        (e.next = 21),
                        (0, p.Z)({
                          web3: n,
                          address: t,
                          chainId: A,
                          walletType: (0, h.Z)(a),
                          keySeed: u.MR.replace(
                            u.vO,
                            i.exchangeAddress
                          ).replace(u.xS, i.nonce.toString()),
                        })
                      );
                    case 21:
                      return (
                        (s = e.sent),
                        (e.t1 = d.vq),
                        (e.next = 25),
                        n.eth.getChainId()
                      );
                    case 25:
                      return (
                        (e.t2 = e.sent),
                        (e.t3 = { chainId: e.t2 }),
                        (e.t0 = new e.t1(e.t3)),
                        (e.t4 = n),
                        (e.next = 31),
                        n.eth.getChainId()
                      );
                    case 31:
                      return (
                        (e.t5 = e.sent),
                        (e.t6 = d.Mt.MetaMask),
                        (e.t7 = {
                          accountId: i.accountID,
                          exchange: i.exchangeAddress,
                          maxFee: {
                            tokenId: i.maxFeeTokenID,
                            volume: i.maxFeeAmount,
                          },
                          nonce: i.nonce,
                          owner: t,
                          publicKey: { x: s.formatedPx, y: s.formatedPy },
                          validUntil: d.O8,
                        }),
                        (e.t8 = {
                          web3: e.t4,
                          chainId: e.t5,
                          walletType: e.t6,
                          request: e.t7,
                        }),
                        (e.next = 37),
                        e.t0.updateAccount.call(e.t0, e.t8)
                      );
                    case 37:
                      if (!("code" in (l = e.sent)) || 0 === l.code) {
                        e.next = 41;
                        break;
                      }
                      return (
                        (0, v.Eo)("Error activating account"),
                        e.abrupt("return", !1)
                      );
                    case 41:
                      return e.abrupt("return", !0);
                    case 42:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        return {
          canDoLoopringAction: function () {
            return Z.apply(this, arguments);
          },
        };
      };
    },
    32439: (e, t, n) => {
      "use strict";
      n.d(t, { U: () => b, Z: () => w });
      var r = n(15861),
        i = n(70885),
        a = n(87757),
        o = n.n(a),
        s = n(33072),
        c = n(92514),
        l = n(36610);
      function u() {
        return (
          (u = (0, r.Z)(
            o().mark(function e(t, n, r) {
              var i,
                a,
                s,
                u,
                d,
                p,
                f = arguments;
              return o().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (i = f.length > 3 && void 0 !== f[3] ? f[3] : ""),
                        (e.t0 = c.vq),
                        (e.next = 4),
                        n.eth.getChainId()
                      );
                    case 4:
                      if (
                        ((e.t1 = e.sent),
                        (e.t2 = { chainId: e.t1 }),
                        (a = new e.t0(e.t2)),
                        (s = "".concat(t, "-eddsaKey")),
                        null !== (u = (0, l.J)(s)) && void 0 !== r)
                      ) {
                        e.next = 11;
                        break;
                      }
                      return e.abrupt("return");
                    case 11:
                      return (
                        (e.next = 13), a.getUserApiKey({ accountId: r }, u.sk)
                      );
                    case 13:
                      return (
                        (d = e.sent),
                        (p = d.apiKey),
                        (e.next = 17),
                        a.getUserOnchainWithdrawalHistory(
                          { accountId: r, hashes: i },
                          p
                        )
                      );
                    case 17:
                      return e.abrupt("return", e.sent);
                    case 18:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          u.apply(this, arguments)
        );
      }
      const d = function (e, t, n) {
        return u.apply(this, arguments);
      };
      function p(e) {
        return f.apply(this, arguments);
      }
      function f() {
        return (f = (0, r.Z)(
          o().mark(function e(t) {
            var n, r;
            return o().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      fetch(t.url, {
                        method: t.method ? t.method : "post",
                        body: t.body ? JSON.stringify(t.body) : null,
                        headers: {
                          "Content-Type": "application/json",
                          "X-API-KEY": "".concat(t.apiKey),
                        },
                      })
                    );
                  case 2:
                    return (n = e.sent), (e.next = 5), n.json();
                  case 5:
                    return (r = e.sent), e.abrupt("return", r);
                  case 7:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function h() {
        return (
          (h = (0, r.Z)(
            o().mark(function e(t, n, r) {
              var i,
                a,
                s,
                u,
                d,
                f,
                h,
                m,
                x = arguments;
              return o().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (i = x.length > 3 && void 0 !== x[3] ? x[3] : ""),
                        (a = x.length > 4 && void 0 !== x[4] ? x[4] : 1),
                        (s =
                          1 === a
                            ? "https://api3.loopring.io/api/v3"
                            : "https://api.uat.loopring.pro/api/v3"),
                        (e.t0 = c.vq),
                        (e.next = 6),
                        n.eth.getChainId()
                      );
                    case 6:
                      if (
                        ((e.t1 = e.sent),
                        (e.t2 = { chainId: e.t1 }),
                        (u = new e.t0(e.t2)),
                        (d = "".concat(t, "-eddsaKey")),
                        null !== (f = (0, l.J)(d)) && void 0 !== r)
                      ) {
                        e.next = 13;
                        break;
                      }
                      return e.abrupt("return");
                    case 13:
                      return (
                        (e.next = 15), u.getUserApiKey({ accountId: r }, f.sk)
                      );
                    case 15:
                      return (
                        (h = e.sent),
                        (m = h.apiKey),
                        (e.next = 19),
                        p({
                          apiKey: m,
                          url: ""
                            .concat(s, "/user/nft/withdrawals?accountId=")
                            .concat(r, "&hashes=")
                            .concat(i),
                          method: "get",
                        })
                      );
                    case 19:
                      return e.abrupt("return", e.sent);
                    case 20:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          h.apply(this, arguments)
        );
      }
      const m = function (e, t, n) {
        return h.apply(this, arguments);
      };
      var x = n(63641),
        g = n(77044),
        v = n(67294),
        b = {
          DEPOSIT: "Deposit",
          WITHDRAWAL: "Withdrawal",
          WITHDRAW_NFT: "Withdraw NFT",
          DEPLOY: "Deploy Contract",
        };
      const w = function () {
        var e = (0, g.Ge)(),
          t = e.account,
          n = e.library,
          a = (0, v.useState)(0),
          l = (0, i.Z)(a, 2),
          u = l[0],
          p = l[1],
          f = (0, v.useState)({}),
          h = (0, i.Z)(f, 2),
          w = h[0],
          y = h[1],
          A = (0, v.useState)(1e4),
          k = (0, i.Z)(A, 2),
          C = k[0],
          j = k[1],
          E = (0, s.u)().fetchL2Balance;
        return (
          (0, v.useEffect)(
            function () {
              var e,
                i = (function () {
                  var i = (0, r.Z)(
                    o().mark(function i() {
                      var a, s, l, u, p, f, h, g, v, w, A, k, C, I, S, N;
                      return o().wrap(function (i) {
                        for (;;)
                          switch ((i.prev = i.next)) {
                            case 0:
                              if (
                                ((a = localStorage.getItem("pending-txs")),
                                (s = {}),
                                null !== a && (s = JSON.parse(a)),
                                null != t)
                              ) {
                                i.next = 5;
                                break;
                              }
                              return i.abrupt("return");
                            case 5:
                              if (Object.prototype.hasOwnProperty.call(s, t)) {
                                i.next = 8;
                                break;
                              }
                              return y({}), i.abrupt("return");
                            case 8:
                              if (
                                ((l = s[t]), 0 !== (u = Object.keys(l)).length)
                              ) {
                                i.next = 15;
                                break;
                              }
                              return j(1e4), i.abrupt("return");
                            case 15:
                              j(5e3), y(l);
                            case 17:
                              if (void 0 !== n) {
                                i.next = 19;
                                break;
                              }
                              return i.abrupt("return");
                            case 19:
                              return (i.next = 21), n.eth.getBlockNumber();
                            case 21:
                              if (
                                ((p = i.sent),
                                (f = u.filter(function (e) {
                                  return l[e].txType === b.WITHDRAWAL;
                                })),
                                (h = u.filter(function (e) {
                                  return l[e].txType === b.WITHDRAW_NFT;
                                })),
                                (g = u.filter(function (e) {
                                  return l[e].txType === b.DEPOSIT;
                                })),
                                (v = u.filter(function (e) {
                                  return l[e].txType === b.DEPLOY;
                                })),
                                !(f.length > 0))
                              ) {
                                i.next = 37;
                                break;
                              }
                              if (
                                ((w = f.join(",")),
                                void 0 === (A = l[f[0]].accountId))
                              ) {
                                i.next = 37;
                                break;
                              }
                              return (i.next = 32), d(t, n, A, w);
                            case 32:
                              void 0 !== (k = i.sent) &&
                                k.userOnchainWithdrawalHistory.forEach(
                                  function (e) {
                                    "processed" === e.status &&
                                      ((0, x.XA)(
                                        "".concat(
                                          l[e.hash].txType,
                                          " completed successfully"
                                        )
                                      ),
                                      delete l[e.hash]);
                                  }
                                ),
                                (s[t] = l),
                                y(l),
                                localStorage.setItem(
                                  "pending-txs",
                                  JSON.stringify(s)
                                );
                            case 37:
                              if (!(h.length > 0)) {
                                i.next = 56;
                                break;
                              }
                              if (
                                ((C = h.join(",")),
                                void 0 === (I = l[h[0]].accountId))
                              ) {
                                i.next = 56;
                                break;
                              }
                              return (
                                (i.t0 = m),
                                (i.t1 = t),
                                (i.t2 = n),
                                (i.t3 = I),
                                (i.t4 = C),
                                (i.next = 48),
                                n.eth.getChainId()
                              );
                            case 48:
                              return (
                                (i.t5 = i.sent),
                                (i.next = 51),
                                (0, i.t0)(i.t1, i.t2, i.t3, i.t4, i.t5)
                              );
                            case 51:
                              void 0 !== (S = i.sent) &&
                                S.withdrawals.forEach(function (e) {
                                  "processed" === e.status &&
                                    ((0, x.XA)(
                                      "".concat(
                                        l[e.hash].txType,
                                        " completed successfully"
                                      )
                                    ),
                                    delete l[e.hash]);
                                }),
                                (s[t] = l),
                                y(l),
                                localStorage.setItem(
                                  "pending-txs",
                                  JSON.stringify(s)
                                );
                            case 56:
                              if (!(g.length > 0)) {
                                i.next = 63;
                                break;
                              }
                              return (i.next = 59), n.eth.getBlock(p);
                            case 59:
                              if (void 0 === (N = i.sent)) {
                                i.next = 63;
                                break;
                              }
                              return (
                                (i.next = 63),
                                Promise.all(
                                  g.map(
                                    (function () {
                                      var i = (0, r.Z)(
                                        o().mark(function r(i) {
                                          var a, c, u, d;
                                          return o().wrap(function (r) {
                                            for (;;)
                                              switch ((r.prev = r.next)) {
                                                case 0:
                                                  if (
                                                    "pending" !== l[i].status
                                                  ) {
                                                    r.next = 10;
                                                    break;
                                                  }
                                                  return (
                                                    (r.next = 3),
                                                    n.eth.getTransaction(i)
                                                  );
                                                case 3:
                                                  if (
                                                    null ===
                                                    (a = r.sent).blockNumber
                                                  ) {
                                                    r.next = 10;
                                                    break;
                                                  }
                                                  return (
                                                    (l[i].blockNumber =
                                                      a.blockNumber),
                                                    (l[i].status =
                                                      "confirming"),
                                                    (r.next = 9),
                                                    n.eth.getBlock(
                                                      a.blockNumber
                                                    )
                                                  );
                                                case 9:
                                                  l[i].timestamp =
                                                    r.sent.timestamp;
                                                case 10:
                                                  "confirming" ===
                                                    l[i].status &&
                                                    ((c = p - l[i].blockNumber),
                                                    (l[i].confirmedBlocks = c),
                                                    (u =
                                                      1e3 *
                                                      (new Date(
                                                        N.timestamp
                                                      ).getTime() -
                                                        new Date(
                                                          l[i].timestamp
                                                        ).getTime())),
                                                    c > 0 &&
                                                      ((d = new Date(
                                                        (u / c) * (12 - c)
                                                      )),
                                                      (l[i].estimatedTime = d)),
                                                    c >= 12 &&
                                                      ((0, x.XA)(
                                                        "".concat(
                                                          l[i].txType,
                                                          " completed successfully"
                                                        )
                                                      ),
                                                      (e = setTimeout(E, 1e3)),
                                                      delete l[i]),
                                                    (s[t] = l),
                                                    y(l),
                                                    localStorage.setItem(
                                                      "pending-txs",
                                                      JSON.stringify(s)
                                                    ));
                                                case 11:
                                                case "end":
                                                  return r.stop();
                                              }
                                          }, r);
                                        })
                                      );
                                      return function (e) {
                                        return i.apply(this, arguments);
                                      };
                                    })()
                                  )
                                )
                              );
                            case 63:
                              v.length > 0 &&
                                n &&
                                v.forEach(
                                  (function () {
                                    var e = (0, r.Z)(
                                      o().mark(function e(r) {
                                        return o().wrap(function (e) {
                                          for (;;)
                                            switch ((e.prev = e.next)) {
                                              case 0:
                                                return (
                                                  (e.next = 2),
                                                  (0, c.Tz)(n, l[r].value)
                                                );
                                              case 2:
                                                e.sent &&
                                                  ((0, x.XA)(
                                                    "".concat(
                                                      l[r].txType,
                                                      " completed successfully"
                                                    )
                                                  ),
                                                  delete l[r]),
                                                  (s[t] = l),
                                                  y(l),
                                                  localStorage.setItem(
                                                    "pending-txs",
                                                    JSON.stringify(s)
                                                  );
                                              case 7:
                                              case "end":
                                                return e.stop();
                                            }
                                        }, e);
                                      })
                                    );
                                    return function (t) {
                                      return e.apply(this, arguments);
                                    };
                                  })()
                                );
                            case 64:
                            case "end":
                              return i.stop();
                          }
                      }, i);
                    })
                  );
                  return function () {
                    return i.apply(this, arguments);
                  };
                })();
              i();
              var a = setTimeout(
                (0, r.Z)(
                  o().mark(function e() {
                    return o().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            p(function (e) {
                              return e + 1;
                            });
                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                ),
                C
              );
              return function () {
                clearTimeout(a), clearTimeout(e);
              };
            },
            [t, u, n, E]
          ),
          w
        );
      };
    },
    20494: (e, t, n) => {
      "use strict";
      var r = n(82529),
        i = n(33072),
        a = n(76049),
        o = n(77044),
        s = n(73935),
        c = n(82100),
        l = n(30168),
        u = n(85893);
      function d(e) {
        var t = e.fill,
          n = void 0 === t ? "black" : t;
        return (0, u.jsx)("svg", {
          width: "34",
          height: "38",
          viewBox: "0 0 34 38",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          "aria-label": "discord icon",
          children: (0, u.jsx)("path", {
            d: "M28.2656 9.46212C25.5683 7.15396 21.3013 6.76349 21.12 6.7469C20.8352 6.72128 20.5646 6.89314 20.4485 7.17054C20.44 7.18864 20.3465 7.41629 20.243 7.77057C22.0266 8.09019 24.2182 8.73545 26.2015 10.0456C26.5189 10.2551 26.6166 10.6999 26.4197 11.0391C26.2922 11.2592 26.0698 11.3798 25.8431 11.3798C25.7213 11.3798 25.598 11.3451 25.4861 11.2713C22.0776 9.0219 17.8191 8.90882 17.0003 8.90882C16.1815 8.90882 11.9216 9.0219 8.5159 11.2713C8.19715 11.4823 7.78065 11.3768 7.58232 11.0391C7.38399 10.6999 7.48315 10.2566 7.80048 10.0456C9.78381 8.73696 11.974 8.09019 13.759 7.77057C13.6541 7.41478 13.5606 7.18864 13.5536 7.17054C13.436 6.89314 13.1668 6.71826 12.8806 6.74841C12.7007 6.76349 8.43373 7.15396 5.69957 9.49529C4.27157 10.8989 1.41699 19.1124 1.41699 26.2132C1.41699 26.3384 1.44816 26.462 1.50624 26.5706C3.47682 30.2537 8.85165 31.2185 10.0771 31.2607C10.0841 31.2607 10.0912 31.2607 10.0983 31.2607C10.3151 31.2607 10.5191 31.1507 10.6466 30.9637L11.8861 29.1516C8.54423 28.2319 6.83715 26.6716 6.73798 26.5796C6.45748 26.3158 6.43057 25.8605 6.67848 25.562C6.9264 25.2634 7.35282 25.2348 7.63332 25.4971C7.6744 25.5363 10.818 28.3752 17.0003 28.3752C23.194 28.3752 26.3375 25.5243 26.3687 25.4956C26.6492 25.2363 27.077 25.2634 27.3235 25.5635C27.57 25.862 27.5431 26.3158 27.264 26.5781C27.1649 26.6716 25.4578 28.2304 22.1159 29.1501L23.3555 30.9622C23.483 31.1492 23.687 31.2592 23.9037 31.2592C23.9108 31.2592 23.9179 31.2592 23.925 31.2592C25.1504 31.2185 30.5252 30.2537 32.4958 26.569C32.5525 26.4605 32.5836 26.3384 32.5836 26.2132C32.5836 19.1124 29.729 10.8989 28.2656 9.46212L28.2656 9.46212ZM12.5959 23.3292C11.2869 23.3292 10.2244 22.0371 10.2244 20.4451C10.2244 18.8531 11.2855 17.561 12.5959 17.561C13.9063 17.561 14.9674 18.8531 14.9674 20.4451C14.9674 22.0371 13.9063 23.3292 12.5959 23.3292ZM21.4047 23.3292C20.0957 23.3292 19.0332 22.0371 19.0332 20.4451C19.0332 18.8531 20.0943 17.561 21.4047 17.561C22.7137 17.561 23.7762 18.8531 23.7762 20.4451C23.7762 22.0371 22.7137 23.3292 21.4047 23.3292Z",
            fill: n,
          }),
        });
      }
      function p(e) {
        var t = e.fill,
          n = void 0 === t ? "black" : t;
        return (0, u.jsxs)("svg", {
          width: "30",
          height: "26",
          viewBox: "0 0 30 26",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          "aria-label": "Email icon",
          children: [
            (0, u.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M4.86903 3.31036C4.14852 3.31036 3.55356 3.94352 3.55356 4.71029V21.5094C3.55356 22.2762 4.14852 22.9094 4.86903 22.9094H25.9166C26.6371 22.9094 27.2321 22.2762 27.2321 21.5094V4.71029C27.2321 3.94352 26.6371 3.31036 25.9166 3.31036H4.86903ZM0.922607 4.71029C0.922607 2.3972 2.69549 0.510498 4.86903 0.510498H25.9166C28.0902 0.510498 29.863 2.3972 29.863 4.71029V21.5094C29.863 23.8225 28.0902 25.7092 25.9166 25.7092H4.86903C2.69549 25.7092 0.922607 23.8225 0.922607 21.5094V4.71029Z",
              fill: n,
            }),
            (0, u.jsx)("path", {
              d: "M27.2609 2.22241L15.4216 10.6221L3.58228 2.22241",
              fill: n,
            }),
            (0, u.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M2.48768 1.44581C2.89067 0.802495 3.70741 0.628658 4.31191 1.05753L15.4215 8.9395L26.5311 1.05753C27.1356 0.628658 27.9523 0.802495 28.3553 1.44581C28.7583 2.08912 28.595 2.95831 27.9905 3.38718L16.1512 11.7869C15.7093 12.1003 15.1337 12.1003 14.6918 11.7869L2.85252 3.38718C2.24802 2.95831 2.08468 2.08912 2.48768 1.44581Z",
              fill: n,
            }),
          ],
        });
      }
      function f(e) {
        var t = e.fill,
          n = void 0 === t ? "black" : t;
        return (0, u.jsx)("svg", {
          width: "31",
          height: "33",
          viewBox: "0 0 31 33",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          "aria-label": "Twitter icon",
          children: (0, u.jsx)("path", {
            d: "M30.6846 6.38401C29.5709 6.90961 28.4523 7.3064 27.2128 7.44038C28.4524 6.64681 29.445 5.32764 29.9389 3.87449C28.6993 4.66805 27.4597 5.19366 26.0991 5.46162C24.8595 4.14244 23.2471 3.34888 21.5136 3.34888C18.1628 3.34888 15.4367 6.25003 15.4367 9.81076C15.4367 10.3415 15.4367 10.8671 15.5626 11.2639C10.4784 11.0011 6.0188 8.49159 3.04089 4.53407C2.4211 5.46162 2.17415 6.64681 2.17415 7.83201C2.17415 10.0787 3.28784 12.0575 4.90027 13.2427C3.90763 13.1087 2.91984 12.8459 2.17415 12.4491C2.17415 12.4491 2.17415 12.4491 2.17415 12.5831C2.17415 15.747 4.28048 18.3854 7.00659 18.9162C6.51269 19.045 6.0188 19.179 5.39901 19.179C5.02616 19.179 4.65332 19.179 4.28048 19.045C5.02616 21.6833 7.25838 23.5333 9.9845 23.5333C7.87817 25.2492 5.27311 26.3004 2.4211 26.3004C1.92721 26.3004 1.42847 26.3004 0.93457 26.1716C3.66069 28.0164 6.88554 29.0728 10.2314 29.0728C21.5136 29.0728 27.5856 19.179 27.5856 10.6043C27.5856 10.3415 27.5856 10.0787 27.5856 9.81077C28.8252 8.88838 29.8178 7.70318 30.6846 6.38401",
            fill: n,
          }),
        });
      }
      var h,
        m,
        x,
        g,
        v,
        b = n(16951),
        w = n(24724),
        y = n(96974),
        A = n(71893),
        k = A.default.div.withConfig({
          displayName: "FooterOuterWrapper",
          componentId: "sc-1lpc923-0",
        })(
          [
            "width:100%;background-color:",
            ";border-top:",
            ";padding-top:65px;padding-bottom:90px;margin-top:150px;",
            ";",
          ],
          function (e) {
            return e.theme.pageBG;
          },
          function (e) {
            var t = e.theme;
            return "1px solid ".concat(t.bg3);
          },
          function (e) {
            var t = e.isComingSoon,
              n = e.theme;
            return (
              t &&
              "\n      background-color: transparent;\n      border-top: none;\n      margin-top: 16px;\n\n      "
                .concat(j, " {\n        color: ")
                .concat(n.white, ";\n      }\n\n      ")
                .concat(E, " {\n        border-color: ")
                .concat(n.white, ";\n        color: ")
                .concat(
                  n.white,
                  ";\n\n        &::placeholder {\n          color: "
                )
                .concat(n.white, ";\n        }\n      }\n\n      ")
                .concat(I, " {\n        color: ")
                .concat(n.white, ";\n      }\n\n      ")
                .concat(Z, " {\n        color: ")
                .concat(n.white, ";\n      }\n  ")
            );
          }
        ),
        C = A.default.div.withConfig({
          displayName: "FooterInnerWrapper",
          componentId: "sc-1lpc923-1",
        })(
          [
            "",
            ";display:flex;align-items:center;justify-content:flex-end;",
            ";",
          ],
          function (e) {
            return e.theme.pageWidth;
          },
          function (e) {
            return e.theme.mediaWidth.upToSmall(
              h || (h = (0, l.Z)(["\n    flex-direction: column;\n  "]))
            );
          }
        ),
        j = A.default.span.withConfig({
          displayName: "NewsletterHeading",
          componentId: "sc-1lpc923-2",
        })(["color:", ";font-size:22px;font-weight:bold;"], function (e) {
          return e.theme.bg8;
        }),
        E = A.default.input.withConfig({
          displayName: "EmailInput",
          componentId: "sc-1lpc923-3",
        })(
          [
            "flex:1;width:300px;border:1px solid;border-radius:9px;height:50px;background-color:transparent;padding-left:28px;padding-right:85px;line-height:50px;color:",
            ";font-size:18px;font-weight:400;",
          ],
          function (e) {
            return e.theme.bg8;
          }
        ),
        I = A.default.input.withConfig({
          displayName: "EmailSubmitButton",
          componentId: "sc-1lpc923-4",
        })(
          [
            "position:absolute;top:7px;right:14px;background-color:transparent;border-radius:40px;height:36px;color:",
            ";font-size:16px;border:none;font-weight:500;cursor:pointer;text-align:center;",
          ],
          function (e) {
            return e.theme.bg8;
          }
        ),
        S = A.default.div.withConfig({
          displayName: "NavigationWrapper",
          componentId: "sc-1lpc923-5",
        })(
          ["display:flex;flex-direction:column;justify-content:flex-end;", ";"],
          function (e) {
            return e.theme.mediaWidth.upToSmall(
              m ||
                (m = (0, l.Z)([
                  "\n    margin-top: 33px;\n    justify-content: center;\n  ",
                ]))
            );
          }
        ),
        N = A.default.div.withConfig({
          displayName: "LinkWrapper",
          componentId: "sc-1lpc923-6",
        })(
          ["display:flex;align-items:center;justify-content:flex-end;", ";"],
          function (e) {
            return e.theme.mediaWidth.upToSmall(
              x || (x = (0, l.Z)(["\n    justify-content: center;\n  "]))
            );
          }
        ),
        T = A.default.a.withConfig({
          displayName: "SocialLink",
          componentId: "sc-1lpc923-7",
        })(["margin-left:20px;", ";"], function (e) {
          return e.theme.mediaWidth.upToSmall(
            g ||
              (g = (0, l.Z)([
                "\n      margin-left: 10px;\n      margin-right: 10px;\n  ",
              ]))
          );
        }),
        Z = A.default.a.withConfig({
          displayName: "StyledExternalLink",
          componentId: "sc-1lpc923-8",
        })(
          [
            "color:",
            ";margin-top:10px;margin-left:35px;font-size:18px;font-weight:bold;text-decoration:none;",
            ";",
          ],
          function (e) {
            return e.theme.bg7;
          },
          function (e) {
            return e.theme.mediaWidth.upToSmall(
              v || (v = (0, l.Z)(["\n      margin: 33px 18px 0 18px;\n  "]))
            );
          }
        );
      const P = function (e) {
        var t = e.allowUserFlag,
          n = (0, y.TH)(),
          r = (0, b.ZS)(n.pathname) && !t;
        return (0, u.jsx)(k, {
          isComingSoon: r,
          children: (0, u.jsx)(C, {
            children: (0, u.jsxs)(S, {
              children: [
                (0, u.jsxs)(N, {
                  children: [
                    (0, u.jsx)(T, {
                      href: "https://discord.gg/gamestop",
                      target: "_blank",
                      "aria-label": "discord",
                      children: (0, u.jsx)(d, {
                        fill: r ? (0, w.O9)(!1).white : (0, w.O9)(!1).text2,
                      }),
                    }),
                    (0, u.jsx)(T, {
                      href: "https://twitter.com/gamestop",
                      target: "_blank",
                      "aria-label": "twitter",
                      children: (0, u.jsx)(f, {
                        fill: r ? (0, w.O9)(!1).white : (0, w.O9)(!1).text2,
                      }),
                    }),
                    (0, u.jsx)(T, {
                      href: "mailto:blockchainsupport@gamestop.com",
                      target: "_blank",
                      "aria-label": "email",
                      children: (0, u.jsx)(p, {
                        fill: r ? (0, w.O9)(!1).white : (0, w.O9)(!1).text2,
                      }),
                    }),
                  ],
                }),
                (0, u.jsxs)(N, {
                  children: [
                    (0, u.jsx)(Z, {
                      href: window.location.origin + "/terms_of_service.pdf",
                      target: "_blank",
                      "aria-label": "terms of service",
                      children: "Terms of Service",
                    }),
                    (0, u.jsx)(Z, {
                      href: window.location.origin + "/privacy_policy.pdf",
                      target: "_blank",
                      "aria-label": "privacy policy",
                      children: "Privacy Policy",
                    }),
                    (0, u.jsx)(Z, {
                      href: "https://careers.gamestop.com/us/en",
                      target: "_blank",
                      "aria-label": "careers",
                      children: "Careers",
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      };
      var L = n(14642),
        O = n(4942),
        B = n(15861),
        R = n(70885),
        M = n(87757),
        D = n.n(M),
        F = n(68692),
        W = n(68939),
        _ = n(94810),
        U = n(97266),
        z = n(3262),
        V = n(29864),
        G = n(69012),
        q = n(11014),
        H = n(53667);
      function K(e, t, n) {
        return Y.apply(this, arguments);
      }
      function Y() {
        return (Y = (0, B.Z)(
          D().mark(function e(t, n, r) {
            return D().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      (0, q.Z)({
                        account: t,
                        library: n,
                        url:
                          H.Z.transferTokenInfo +
                          "?toAddress=".concat(r, "&tokenId=0"),
                        method: "get",
                      })
                    );
                  case 2:
                    return e.abrupt("return", e.sent);
                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      var Q = n(88223),
        J = n(98790),
        X = n(92514),
        $ = n(36610),
        ee = n(13317);
      function te(e) {
        return ne.apply(this, arguments);
      }
      function ne() {
        return (
          (ne = (0, B.Z)(
            D().mark(function e(t) {
              var n, r, i, a, o, s, c, l, u, d, p, f;
              return D().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = t.account),
                        (r = t.library),
                        (i = t.toAddress),
                        (a = t.tokenVolume),
                        (o = t.transferInfo),
                        (s = t.connector),
                        (e.next = 3),
                        r.eth.getChainId()
                      );
                    case 3:
                      return (
                        (c = e.sent),
                        (l = new X.vq({ chainId: c })),
                        (e.next = 7),
                        (0, $.Z)({
                          web3: r,
                          address: n,
                          chainId: c,
                          walletType: (0, ee.Z)(s),
                          keySeed: J.MR.replace(
                            J.vO,
                            o.exchangeAddress
                          ).replace(J.xS, o.nonce.toString()),
                        })
                      );
                    case 7:
                      return (
                        (u = e.sent),
                        (d = u.sk),
                        (e.next = 11),
                        l.getUserApiKey({ accountId: o.fromAccountID }, d)
                      );
                    case 11:
                      return (
                        (p = e.sent),
                        (f = p.apiKey),
                        (e.t0 = l),
                        (e.t1 = r),
                        (e.next = 17),
                        r.eth.getChainId()
                      );
                    case 17:
                      return (
                        (e.t2 = e.sent),
                        (e.t3 = (0, ee.Z)(s)),
                        (e.t4 = f),
                        (e.t5 = d),
                        (e.t6 = {
                          exchange: o.exchangeAddress,
                          storageId: o.storageID,
                          maxFee: {
                            tokenId: o.maxFeeTokenID,
                            volume: o.maxFeeAmount,
                          },
                          payeeAddr: i,
                          payeeId: o.toAccountID,
                          payerAddr: n,
                          payerId: o.fromAccountID,
                          token: { tokenId: 0, volume: a },
                          validUntil: X.O8,
                        }),
                        (e.t7 = {
                          web3: e.t1,
                          chainId: e.t2,
                          walletType: e.t3,
                          apiKey: e.t4,
                          eddsaKey: e.t5,
                          request: e.t6,
                        }),
                        (e.next = 25),
                        e.t0.submitInternalTransfer.call(e.t0, e.t7)
                      );
                    case 25:
                      return e.abrupt("return", e.sent);
                    case 26:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          ne.apply(this, arguments)
        );
      }
      var re = n(9036),
        ie = n(30567),
        ae = n(30666),
        oe = n(63641),
        se = n(67294),
        ce = n(3283),
        le = n.n(ce),
        ue = n(60151),
        de = n(56460),
        pe = n(72295);
      const fe = function () {
        var e = (0, o.Ge)(),
          t = e.library,
          n = e.account,
          r = e.connector,
          a = (0, se.useState)(""),
          s = (0, R.Z)(a, 2),
          c = s[0],
          l = s[1],
          d = (0, se.useState)(""),
          p = (0, R.Z)(d, 2),
          f = p[0],
          h = p[1],
          m = (0, se.useState)(""),
          x = (0, R.Z)(m, 2),
          g = x[0],
          v = x[1],
          b = (0, se.useState)(!0),
          w = (0, R.Z)(b, 2),
          y = w[0],
          A = w[1],
          k = (0, se.useState)(),
          C = (0, R.Z)(k, 2),
          j = C[0],
          E = C[1],
          I = (0, se.useState)(""),
          S = (0, R.Z)(I, 2),
          N = S[0],
          T = S[1],
          Z = (0, se.useState)(),
          P = (0, R.Z)(Z, 2),
          O = P[0],
          M = P[1],
          F = (0, G.Z)().canDoLoopringAction,
          W = (0, L.x)().closeModal,
          q = (0, se.useState)(!1),
          H = (0, R.Z)(q, 2),
          Y = H[0],
          J = H[1],
          X = (0, se.useState)(!1),
          $ = (0, R.Z)(X, 2),
          ee = $[0],
          ne = $[1],
          ce = (0, i.u)(),
          fe = ce.l2Balance,
          he = ce.exchangeRate,
          me = (0, se.useCallback)(
            (function () {
              var e = (0, B.Z)(
                D().mark(function e(r) {
                  var i;
                  return D().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ((A(!0), !n || !t)) {
                            e.next = 12;
                            break;
                          }
                          return (e.next = 4), K(n, t, r);
                        case 4:
                          if (((i = e.sent), A(!1), !i)) {
                            e.next = 11;
                            break;
                          }
                          return E(i), e.abrupt("return", i);
                        case 11:
                          (0, ie._)("Error retrieving transfer l2 info");
                        case 12:
                          return e.abrupt("return", null);
                        case 13:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            [n, t]
          );
        function xe() {
          return (xe = (0, B.Z)(
            D().mark(function e() {
              var i;
              return D().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), F();
                      case 2:
                        if (e.sent) {
                          e.next = 4;
                          break;
                        }
                        return e.abrupt("return");
                      case 4:
                        if (t && n) {
                          e.next = 6;
                          break;
                        }
                        return e.abrupt("return");
                      case 6:
                        if (!(isNaN(Number(c)) || Number(c) <= 0)) {
                          e.next = 8;
                          break;
                        }
                        return e.abrupt("return");
                      case 8:
                        return (e.prev = 8), ne(!0), (e.next = 12), me(g);
                      case 12:
                        if ((i = e.sent)) {
                          e.next = 15;
                          break;
                        }
                        throw Error("Error retrieving l2 transfer info");
                      case 15:
                        return (
                          (e.next = 17),
                          te({
                            account: n,
                            library: t,
                            toAddress: g,
                            tokenVolume: c,
                            transferInfo: i,
                            connector: r,
                          })
                        );
                      case 17:
                        "hash" in e.sent && J(!0), (e.next = 26);
                        break;
                      case 21:
                        (e.prev = 21),
                          (e.t0 = e.catch(8)),
                          (0, ie._)(e.t0),
                          (0, oe.Eo)("Encountered error while transferring"),
                          J(!1);
                      case 26:
                        ne(!1);
                      case 27:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[8, 21]]
              );
            })
          )).apply(this, arguments);
        }
        function ge() {
          return (ge = (0, B.Z)(
            D().mark(function e(t) {
              var n, i;
              return D().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!(0, ae.my)(t)) {
                        e.next = 16;
                        break;
                      }
                      return (e.next = 3), (0, Q.f0)(t, r);
                    case 3:
                      if (!(n = e.sent)) {
                        e.next = 11;
                        break;
                      }
                      return v(n), T(n), M(void 0), e.abrupt("return");
                    case 11:
                      return (
                        M("Address for ENS name not found"),
                        T(void 0),
                        e.abrupt("return")
                      );
                    case 14:
                      e.next = 26;
                      break;
                    case 16:
                      if (!le().utils.isAddress(t)) {
                        e.next = 24;
                        break;
                      }
                      return v(t), (e.next = 20), (0, Q.JM)(t, r);
                    case 20:
                      (i = e.sent) ? (T(i), M(void 0)) : (T(""), M(void 0)),
                        (e.next = 26);
                      break;
                    case 24:
                      T(void 0), M("Invalid address");
                    case 26:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        if (
          ((0, se.useEffect)(
            function () {
              n && me(n);
            },
            [n, me]
          ),
          Y)
        )
          return (0, u.jsx)(pe.Z, {
            result: "You have successfully transferred ".concat(
              le().utils.fromWei(c),
              " ETH"
            ),
          });
        if (ee) return (0, u.jsx)(_.Z, {});
        var ve = [
          (0, u.jsx)(
            de.B,
            {
              leftText: "Max Fee",
              infoText:
                "This is a network fee which goes to the Layer 2 provider (Loopring).",
              rightBold: !0,
              rightText:
                null != j && j.maxFeeAmount
                  ? (0, ae.S2)(
                      null == j ? void 0 : j.maxFeeAmount,
                      he *
                        Number(
                          le().utils.fromWei(
                            null == j ? void 0 : j.maxFeeAmount
                          )
                        )
                    )
                  : "loading fees",
            },
            "fee-row-1"
          ),
        ];
        return (0, u.jsxs)(z.ZP, {
          title: "Make A Transfer",
          titleTrailing: (0, u.jsx)(U.Z, {
            label: "Learn More",
            infoText:
              "Recipient will receive the transfer amount instantly to their Ethereum address, on Loopring Layer 2",
          }),
          subtitle: "Transfer ETH to a friend on Loopring L2",
          primaryAction: (0, u.jsx)(V.TextButton, {
            label: "Transfer",
            onClick: function () {
              return xe.apply(this, arguments);
            },
            disabled: y || !!O || !g || !!f || !c,
            stretch: !0,
          }),
          secondaryAction: (0, u.jsx)(V.TextButton, {
            variant: V.ButtonVariant.secondary,
            label: "Cancel",
            onClick: W,
            stretch: !0,
          }),
          children: [
            (0, u.jsx)(z.eS, {
              children: (0, u.jsx)(ue.SP, {
                type: "number",
                label: "Amount",
                annotation: "ETH",
                info: "L2 Balance: "
                  .concat((0, ae.nr)(fe), " (")
                  .concat((0, ae.YQ)(parseFloat(fe) * he), ")"),
                error: f,
                handleChange: function (e) {
                  var t,
                    n = Number(e.target.value)
                      ? le().utils.toWei(e.target.value)
                      : "0";
                  (0, re.Z)(
                    n,
                    fe,
                    null !== (t = null == j ? void 0 : j.maxFeeAmount) &&
                      void 0 !== t
                      ? t
                      : "0"
                  )
                    ? h("Insufficient balance")
                    : h(""),
                    l(n);
                },
                infoRight: (0, ae.YQ)(
                  parseFloat(c.length > 0 ? le().utils.fromWei(c) : "0") * he
                ),
              }),
            }),
            (0, u.jsx)(z.eS, {
              children: (0, u.jsx)(ue.SP, {
                type: "text",
                info: N,
                error: O,
                label: "Recipient Address (ENS or hexadecimal address)",
                handleChange: function (e) {
                  return (function (e) {
                    return ge.apply(this, arguments);
                  })(e.target.value);
                },
              }),
            }),
            (0, u.jsx)(z.eS, { children: (0, u.jsx)(de.Z, { rows: ve }) }),
          ],
        });
      };
      var he = n(2616),
        me = n(57167),
        xe = n(221),
        ge = A.default.div.withConfig({
          displayName: "Content",
          componentId: "sc-163jlx5-0",
        })([
          "display:flex;justify-content:center;align-items:center;flex-direction:column;margin-top:-24px;",
        ]);
      const ve = function (e) {
        var t = e.correctChain,
          n = function (e) {
            return le().utils.toHex(e);
          },
          r = { Mainnet: n(1), Goerli: n(5) },
          i = (function () {
            var e = (0, B.Z)(
              D().mark(function e() {
                return D().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          window.ethereum.request({
                            method: "wallet_switchEthereumChain",
                            params: [{ chainId: r[t] }],
                          })
                        );
                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
        return (0, u.jsx)(z.ZP, {
          children: (0, u.jsxs)(z.eS, {
            children: [
              (0, u.jsx)(z.eS, {
                children: (0, u.jsx)(z.xB, {
                  title: "Connect your wallet to ".concat(
                    t,
                    " to use our marketplace"
                  ),
                  subtitle:
                    "Our system indicates that your wallet is not connected to Ethereum's ".concat(
                      t,
                      " network."
                    ),
                  center: !0,
                }),
              }),
              (0, u.jsx)(z.eS, {
                children: (0, u.jsx)(ge, {
                  children: (0, u.jsx)(V.TextButton, {
                    label: "Switch Networks",
                    onClick: i,
                  }),
                }),
              }),
            ],
          }),
        });
      };
      var be = n(18895);
      var we = n(40140),
        ye = n(92987),
        Ae = n(55646);
      function ke() {
        return (ke = (0, B.Z)(
          D().mark(function e(t) {
            return D().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      (0, Ae.Ko)(H.Z.cloudSearch, { query: t })
                    );
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      const Ce = function (e) {
        return ke.apply(this, arguments);
      };
      var je = n(87378),
        Ee = n(52224),
        Ie = n(23061);
      function Se(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      var Ne = A.default.span.withConfig({
        displayName: "RedText",
        componentId: "sc-1k4ztl9-0",
      })(["color:red;"]);
      Ne.displayName = "RedText";
      const Te = function (e) {
        var t,
          n,
          r,
          a = e.allowUserFlag,
          s = (0, se.useState)(),
          c = (0, R.Z)(s, 2),
          l = c[0],
          d = c[1],
          p = (0, o.Ge)().account,
          f = (0, i.u)(),
          h = f.l1Balance,
          m = f.l2Balance,
          x = f.exchangeRate,
          g = (0, L.x)().showModal,
          v = (0, y.TH)(),
          w = (0, y.s0)();
        !(function () {
          var e = (0, L.x)(),
            t = e.showModal,
            n = e.closeModal,
            r = e.setCloseEnabled,
            i = (0, be.Z)(),
            a = i.needSwitch,
            o = i.correctChain,
            s = i.chainId;
          (0, se.useEffect)(
            function () {
              a || void 0 === s
                ? (r(!1), t({ content: (0, u.jsx)(ve, { correctChain: o }) }))
                : (r(!0), n());
            },
            [s, a]
          );
        })();
        var A = (0, Ee.M0)(p || je.skipToken).data,
          k = (0, xe.Z)().hasEnoughFunds,
          C = !A && k(),
          j = (0, Ee.xv)(
            (null == p ? void 0 : p.toLowerCase()) || je.skipToken
          ).data,
          E = (0, b.ZS)(v.pathname) && !a,
          I = (function () {
            var e = (0, o.Ge)(),
              t = e.activate,
              n = e.active,
              r = (0, se.useState)(!1),
              i = (0, R.Z)(r, 2),
              a = i[0],
              s = i[1],
              c = (0, se.useCallback)(
                function () {
                  var e = (0, ye.Nr)();
                  e &&
                    (t((0, ye.HI)(e.walletType), void 0, !0).catch(function (
                      e
                    ) {
                      (0, ie._)(e), s(!0), (0, ye.JP)();
                    }),
                    window.removeEventListener("ethereum#initialized", c),
                    window.removeEventListener("gamestop#initialized", c));
                },
                [t]
              ),
              l = (0, se.useCallback)(
                function (e) {
                  (e === ye.wR.Injected && window.ethereum) ||
                  (e === ye.wR.GamestopExtension && window.gamestop)
                    ? c()
                    : (e === ye.wR.Injected &&
                        window.addEventListener("ethereum#initialized", c, {
                          once: !0,
                        }),
                      e === ye.wR.GamestopExtension &&
                        window.addEventListener("gamestop#initialized", c, {
                          once: !0,
                        }),
                      setTimeout(function () {
                        c();
                      }, 3e3));
                },
                [c]
              );
            return (
              (0, se.useEffect)(
                function () {
                  var e = (0, ye.Nr)();
                  e &&
                    (e.walletType === ye.wR.Injected ||
                    e.walletType === ye.wR.GamestopExtension
                      ? l(e.walletType)
                      : c());
                },
                [l, c]
              ),
              (0, se.useEffect)(
                function () {
                  !a && n && s(!0);
                },
                [a, n]
              ),
              a
            );
          })();
        !(function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = (0, o.Ge)(),
            n = t.active,
            r = t.error,
            i = t.activate;
          (0, se.useEffect)(
            function () {
              var t = window.ethereum;
              if (t && t.on && !n && !r && !e) {
                var a = function () {
                    i(we.Lj, void 0, !0).catch(function (e) {
                      (0,
                      ie._)("Failed to activate after chain changed: " + e.message);
                    });
                  },
                  o = function (e) {
                    e.length > 0 &&
                      i(we.Lj, void 0, !0).catch(function (e) {
                        (0,
                        ie._)("Failed to activate after accounts changed: " + e.message);
                      });
                  };
                return (
                  t.on("chainChanged", a),
                  t.on("accountsChanged", o),
                  function () {
                    t.removeListener &&
                      (t.removeListener("chainChanged", a),
                      t.removeListener("accountsChanged", o));
                  }
                );
              }
            },
            [n, r, e, i]
          );
        })(!I);
        var S = (function () {
            var e = (0, B.Z)(
              D().mark(function e(t) {
                return D().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return e.abrupt(
                          "return",
                          new Promise(function (e) {
                            l && clearTimeout(l),
                              d(
                                setTimeout(
                                  (0, B.Z)(
                                    D().mark(function n() {
                                      return D().wrap(function (n) {
                                        for (;;)
                                          switch ((n.prev = n.next)) {
                                            case 0:
                                              return (
                                                (n.t0 = e), (n.next = 3), Ce(t)
                                              );
                                            case 3:
                                              (n.t1 = n.sent), (0, n.t0)(n.t1);
                                            case 5:
                                            case "end":
                                              return n.stop();
                                          }
                                      }, n);
                                    })
                                  ),
                                  500
                                )
                              );
                          })
                        );
                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          N = (function () {
            var e = (0, B.Z)(
              D().mark(function e(t) {
                var n, r, i;
                return D().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (n = 3), (e.next = 3), S(t);
                      case 3:
                        return (
                          (r = e.sent),
                          (i = { collections: [], nfts: [] }),
                          r.collections &&
                            (i.collections = r.collections
                              .sort(function (e, t) {
                                return Number(e.score) < Number(t.score)
                                  ? 1
                                  : -1;
                              })
                              .slice(0, n)
                              .map(function (e) {
                                return {
                                  name: e.data.name,
                                  imageUrl: F.Z,
                                  description: e.data.description,
                                  collectionSlug: e.data.slug,
                                };
                              })),
                          r.nfts &&
                            (i.nfts = r.nfts
                              .sort(function (e, t) {
                                return Number(e.score) < Number(t.score)
                                  ? 1
                                  : -1;
                              })
                              .slice(0, n)
                              .map(function (e) {
                                var t, n, r;
                                return {
                                  name:
                                    null !== (t = e.data.name) && void 0 !== t
                                      ? t
                                      : "",
                                  imageUrl: (0, Ie.VJ)(
                                    null !== (n = e.data.mediaThumbnailUri) &&
                                      void 0 !== n
                                      ? n
                                      : ""
                                  ),
                                  description:
                                    null !== (r = e.data.description) &&
                                    void 0 !== r
                                      ? r
                                      : "",
                                  collectionSlug: e.data.contractAddress,
                                  nftPath: e.data.tokenId,
                                };
                              })),
                          e.abrupt("return", i)
                        );
                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          T = {};
        switch (v.pathname) {
          case b.Dx:
            a &&
              (T = {
                backgroundImage: !0,
                title: {
                  header: (0, u.jsxs)(u.Fragment, {
                    children: [
                      "Power to the",
                      " ",
                      (0, u.jsx)(Ne, {
                        children: (0, u.jsxs)(me.TypeWriter, {
                          children: [
                            (0, u.jsx)("p", { children: "Creator" }),
                            (0, u.jsx)("p", { children: "Player" }),
                            (0, u.jsx)("p", { children: "Web developer" }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  tagline:
                    "Easily collect, exchange & sell gaming collectibles",
                  link: { text: "Explore", url: "/marketplace" },
                },
              });
            break;
          case b.hE:
            T = {
              backgroundImage: !1,
              title: {
                header: "FAQs & Tutorials",
                tagline: "Questions? We're here to help",
              },
            };
            break;
          case b._e:
            T = {
              backgroundImage: !1,
              title: {
                header: "Connect a wallet",
                tagline: "Connect to GameStop NFT using a wallet option below",
              },
            };
            break;
          default:
            T = {};
        }
        var Z = p ? '"'.concat((0, Ie.ZB)(p), '"') : "",
          P = p
            ? {
                address: p,
                displayName:
                  null !==
                    (t =
                      null !== (n = null == j ? void 0 : j.userName) &&
                      void 0 !== n
                        ? n
                        : null == j
                        ? void 0
                        : j.ensName) && void 0 !== t
                    ? t
                    : (0, ae.a_)(p),
                ethBalanceL1: Number(h),
                ethBalanceL2: Number(m),
                imgSrc:
                  null !== (r = null == j ? void 0 : j.avatar) && void 0 !== r
                    ? r
                    : Z,
                usdBalance: (Number(m) + Number(h)) * x,
                showActivation: !!C,
              }
            : void 0;
        return (0, u.jsx)(
          he.PageHeader,
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? Se(Object(n), !0).forEach(function (t) {
                    (0, O.Z)(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : Se(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t)
                    );
                  });
            }
            return e;
          })(
            {
              onLogin: function () {
                return w(b._e);
              },
              showLoginButton: !0,
              loginState: P,
              accountHandlers: {
                onActivate: function () {
                  return g({ flow: W.e.ACTIVATE });
                },
                onAddFunds: function () {
                  return g({ flow: W.e.DEPOSIT });
                },
                onAddFundsToL2: function () {
                  return g({ flow: W.e.DEPOSIT });
                },
                onProfileClick: function () {
                  return w(b._2);
                },
                onSend: function () {
                  return g({ content: (0, u.jsx)(fe, {}) });
                },
                onWithdraw: function () {
                  return g({ flow: W.e.WITHDRAW });
                },
              },
              popularSearches: ["Cool Man Spike", "Rugs", "Cat"],
              onNavigate: function (e) {
                e.nftPath
                  ? w("/token/".concat(e.collectionSlug, "/").concat(e.nftPath))
                  : w("/collection/".concat(e.collectionSlug));
              },
              onSearch: N,
              isLightTheme: E,
              simplyfyNav: !a,
            },
            T
          )
        );
      };
      var Ze = n(27113),
        Pe = n(86863),
        Le = n(17203),
        Oe = A.default.div.withConfig({
          displayName: "BannerWrapper",
          componentId: "sc-cd8u2b-0",
        })(["z-index:9999;position:relative;"]);
      Oe.displayName = "BannerWrapper";
      const Be = function (e) {
        var t = e.hasFunds,
          n = e.fee,
          r = e.isSuccess,
          i = (0, L.x)().showModal,
          a = (0, se.useState)(!1),
          o = (0, R.Z)(a, 2),
          s = o[0],
          c = o[1],
          l = (function (e, t) {
            return e
              ? {
                  title: "Your wallet has not been activated.",
                  description: "Pay a one-time fee of ".concat(
                    t,
                    " to activate Loopring Layer 2."
                  ),
                  label: "Activate",
                  onClick: function () {
                    c(!0), i({ flow: W.e.ACTIVATE });
                  },
                }
              : {
                  title: "Activate Loopring Layer 2.",
                  description:
                    "Upon launch of GameStop NFT, trading will happen on Layer 2.",
                  label: "Add Funds",
                  onClick: function () {
                    c(!0), i({ flow: W.e.DEPOSIT });
                  },
                };
          })(t, n),
          d = l.title,
          p = l.description,
          f = l.label,
          h = l.onClick;
        return !s && r
          ? (0, u.jsx)(Oe, {
              children: (0, u.jsx)(Le.Banner, {
                title: d,
                description: p,
                primaryAction: { label: f, onClick: h },
                secondaryAction: {
                  label: "Do it later",
                  onClick: function () {
                    sessionStorage.removeItem(ye.o0), c(!0);
                  },
                },
              }),
            })
          : (0, u.jsx)(u.Fragment, {});
      };
      var Re = n(9493);
      var Me = n(1765),
        De = n(61341),
        Fe = n(41937),
        We = A.default.div.withConfig({
          displayName: "CenterDiv",
          componentId: "sc-fygxwx-0",
        })([
          "display:flex;flex-direction:column;align-items:center;justify-content:center;",
        ]),
        _e = A.default.img.withConfig({
          displayName: "IconImage",
          componentId: "sc-fygxwx-1",
        })(["margin-top:25px;width:100px;height:100px;pointer-events:none;"]),
        Ue = function () {
          return (0, u.jsx)(We, {
            children: (0, u.jsxs)(z.ZP, {
              title: "Uh Oh! For some reason our system thinks you're a robot",
              center: !0,
              children: [
                (0, u.jsx)(ue.vf, {
                  label: "Please try reloading this page or try again later.",
                }),
                (0, u.jsx)(z.eS, { children: (0, u.jsx)(_e, { src: Fe.Z }) }),
                (0, u.jsx)(z.eS, {
                  children: (0, u.jsx)(V.TextButton, {
                    variant: V.ButtonVariant.secondary,
                    label: "Reload the page",
                    onClick: function () {
                      return location.reload();
                    },
                    size: "small",
                  }),
                }),
              ],
            }),
          });
        },
        ze = function () {
          (0, se.useEffect)(function () {
            window.addEventListener(De.z, function () {
              return e({ content: (0, u.jsx)(Ue, {}) });
            });
          }, []);
          var e = (0, L.x)().showModal;
          return (0, u.jsx)(u.Fragment, {});
        },
        Ve = n(14214),
        Ge = A.default.div.withConfig({
          displayName: "PageLoaderContainer",
          componentId: "sc-ssl0m2-0",
        })([
          "display:flex;align-items:center;justify-content:center;min-height:50vh;",
        ]);
      function qe() {
        return (0, u.jsx)(Ge, { children: (0, u.jsx)(Ve.Loader, {}) });
      }
      var He = (0, se.lazy)(function () {
          return Promise.all([n.e(205), n.e(279)]).then(n.bind(n, 54279));
        }),
        Ke = (0, se.lazy)(function () {
          return Promise.all([n.e(461), n.e(988), n.e(118)]).then(
            n.bind(n, 72258)
          );
        }),
        Ye = (0, se.lazy)(function () {
          return n.e(316).then(n.bind(n, 15316));
        }),
        Qe = (0, se.lazy)(function () {
          return Promise.all([n.e(313), n.e(185), n.e(684), n.e(769)]).then(
            n.bind(n, 58768)
          );
        }),
        Je = (0, se.lazy)(function () {
          return n.e(999).then(n.bind(n, 47999));
        }),
        Xe = (0, se.lazy)(function () {
          return n.e(71).then(n.bind(n, 2071));
        }),
        $e = (0, se.lazy)(function () {
          return n.e(361).then(n.bind(n, 30361));
        }),
        et = (0, se.lazy)(function () {
          return n.e(438).then(n.bind(n, 95438));
        }),
        tt = (0, se.lazy)(function () {
          return Promise.all([n.e(461), n.e(588)]).then(n.bind(n, 35588));
        }),
        nt = (0, se.lazy)(function () {
          return n.e(271).then(n.bind(n, 61271));
        }),
        rt = (0, se.lazy)(function () {
          return n.e(600).then(n.bind(n, 25600));
        }),
        it = (0, se.lazy)(function () {
          return n.e(146).then(n.bind(n, 22146));
        }),
        at = (0, se.lazy)(function () {
          return Promise.all([
            n.e(461),
            n.e(313),
            n.e(272),
            n.e(185),
            n.e(684),
            n.e(168),
          ]).then(n.bind(n, 25168));
        }),
        ot = (0, se.lazy)(function () {
          return n.e(887).then(n.bind(n, 36887));
        }),
        st = (0, se.lazy)(function () {
          return n.e(904).then(n.bind(n, 42904));
        }),
        ct = (0, se.lazy)(function () {
          return Promise.all([
            n.e(461),
            n.e(340),
            n.e(185),
            n.e(988),
            n.e(760),
          ]).then(n.bind(n, 10760));
        });
      const lt = function (e) {
        var t = e.allowUserFlag;
        return (0, u.jsx)(se.Suspense, {
          fallback: (0, u.jsx)(qe, {}),
          children: (0, u.jsxs)(y.Z5, {
            children: [
              (0, u.jsx)(y.AW, { path: b.kM, element: (0, u.jsx)(at, {}) }),
              (0, u.jsx)(y.AW, {
                path: b.C_,
                element: t ? (0, u.jsx)(tt, {}) : (0, u.jsx)(Ye, {}),
              }),
              (0, u.jsx)(y.AW, {
                path: b.du,
                element: t ? (0, u.jsx)(Ke, {}) : (0, u.jsx)(Ye, {}),
              }),
              (0, u.jsx)(y.AW, {
                path: b.j3,
                element: t ? (0, u.jsx)(Qe, {}) : (0, u.jsx)(Ye, {}),
              }),
              (0, u.jsx)(y.AW, {
                path: b.$Y,
                element: t ? (0, u.jsx)(Qe, {}) : (0, u.jsx)(Ye, {}),
              }),
              (0, u.jsx)(y.AW, { path: b._e, element: (0, u.jsx)(it, {}) }),
              (0, u.jsx)(y.AW, { path: b.hE, element: (0, u.jsx)(nt, {}) }),
              (0, u.jsx)(y.AW, { path: b.qk, element: (0, u.jsx)(Je, {}) }),
              (0, u.jsx)(y.AW, { path: b.zK, element: (0, u.jsx)(Xe, {}) }),
              (0, u.jsx)(y.AW, { path: b.P3, element: (0, u.jsx)(et, {}) }),
              (0, u.jsx)(y.AW, { path: b.xK, element: (0, u.jsx)($e, {}) }),
              (0, u.jsx)(y.AW, {
                path: b.Nj,
                element: t ? (0, u.jsx)(st, {}) : (0, u.jsx)(Ye, {}),
              }),
              (0, u.jsx)(y.AW, { path: b.Zb, element: (0, u.jsx)(He, {}) }),
              (0, u.jsx)(y.AW, { path: b.SP, element: (0, u.jsx)(ot, {}) }),
              (0, u.jsx)(y.AW, { path: b.ih, element: (0, u.jsx)(ct, {}) }),
              (0, u.jsx)(y.AW, { path: b.XI, element: (0, u.jsx)(ct, {}) }),
              (0, u.jsx)(y.AW, {
                path: b.Dx,
                element: t ? (0, u.jsx)(rt, {}) : (0, u.jsx)(Ye, {}),
              }),
              (0, u.jsx)(y.AW, { path: "*", element: (0, u.jsx)(ot, {}) }),
            ],
          }),
        });
      };
      var ut = n(64593),
        dt = n(39711),
        pt = n(72132),
        ft =
          (n(97938),
          A.default.div.withConfig({
            displayName: "PageContainer",
            componentId: "sc-1h2juxg-0",
          })([
            "display:flex;flex-direction:column;width:100%;min-height:100vh;",
          ]));
      ft.displayName = "PageContainer";
      var ht = A.default.div.withConfig({
        displayName: "PageContent",
        componentId: "sc-1h2juxg-1",
      })(["flex:1;position:relative;"]);
      ht.displayName = "PageContent";
      const mt = function (e) {
        var t = e.children,
          n = (0, y.TH)();
        return (
          (0, se.useEffect)(
            function () {
              window.scrollTo(0, 0);
            },
            [n.pathname]
          ),
          (0, u.jsx)(se.Fragment, { children: t })
        );
      };
      function xt() {
        var e,
          t = (0, o.Ge)().account,
          n = (0, Me.t)().authSig,
          r = (0, Ee.KM)(n || Re.skipToken).data,
          i =
            null == r
              ? void 0
              : r.featureFlags.map(function (e) {
                  return e.toString();
                });
        e = (null == i ? void 0 : i.includes(Pe.FeatureAcl.comingnow)) || !1;
        var a = (function () {
          var e,
            t = (0, o.Ge)().account,
            n = (0, be.Z)().needSwitch,
            r = (0, se.useState)(!1),
            i = (0, R.Z)(r, 2),
            a = i[0],
            s = i[1],
            c = (0, se.useState)(""),
            l = (0, R.Z)(c, 2),
            d = l[0],
            p = l[1],
            f = (0, Ee.M0)(t || Re.skipToken),
            h = f.data,
            m = f.refetch,
            x =
              null === (e = (0, ye.Jx)()) || void 0 === e
                ? void 0
                : e.showBanner,
            g = (0, xe.Z)(),
            v = g.format,
            b = g.hasEnoughFunds,
            w = g.isSuccess;
          return (
            (0, se.useEffect)(
              function () {
                p(v()), s(b());
              },
              [t, h, v, b]
            ),
            (0, se.useEffect)(
              function () {
                m();
              },
              [t, n]
            ),
            !h &&
              !n &&
              x &&
              (0, u.jsx)(Be, { hasFunds: a, fee: d, isSuccess: w })
          );
        })();
        return (0, u.jsxs)(ft, {
          children: [
            (0, u.jsx)(ut.q, {
              children: (0, u.jsx)("title", { children: Ze.F }),
            }),
            (0, u.jsx)(dt.BrowserRouter, {
              children: (0, u.jsxs)(L.Z, {
                children: [
                  (0, u.jsx)(ze, {}),
                  (0, u.jsx)(Te, { allowUserFlag: e }),
                  (0, u.jsxs)(ht, {
                    children: [
                      t && a,
                      (0, u.jsx)(mt, {
                        children: (0, u.jsx)(lt, { allowUserFlag: e }),
                      }),
                    ],
                  }),
                  (0, u.jsx)(P, { allowUserFlag: e }),
                ],
              }),
            }),
            (0, u.jsx)(pt.Ix, { hideProgressBar: !0, theme: "dark" }),
          ],
        });
      }
      var gt = n(93379),
        vt = n.n(gt),
        bt = n(7795),
        wt = n.n(bt),
        yt = n(90569),
        At = n.n(yt),
        kt = n(3565),
        Ct = n.n(kt),
        jt = n(19216),
        Et = n.n(jt),
        It = n(44589),
        St = n.n(It),
        Nt = n(94800),
        Tt = {};
      (Tt.styleTagTransform = St()),
        (Tt.setAttributes = Ct()),
        (Tt.insert = At().bind(null, "head")),
        (Tt.domAPI = wt()),
        (Tt.insertStyleElement = Et()),
        vt()(Nt.Z, Tt),
        Nt.Z && Nt.Z.locals && Nt.Z.locals;
      var Zt,
        Pt = n(29829),
        Lt = n(45673),
        Ot = n(39800),
        Bt = n(53852),
        Rt = n(80879),
        Mt = (0, Pt.configureStore)({
          reducer:
            ((Zt = {}),
            (0, O.Z)(Zt, Ee.Bf.reducerPath, Ee.Bf.reducer),
            (0, O.Z)(Zt, Ot.P.reducerPath, Ot.P.reducer),
            (0, O.Z)(Zt, Rt.j.reducerPath, Rt.j.reducer),
            (0, O.Z)(Zt, Bt._H.reducerPath, Bt._H.reducer),
            Zt),
          middleware: function (e) {
            return e({ serializableCheck: !1 })
              .concat(Ee.Bf.middleware)
              .concat(Ot.P.middleware)
              .concat(Rt.j.middleware)
              .concat(Bt._H.middleware);
          },
        });
      if (
        ((0, Lt.setupListeners)(Mt.dispatch),
        s.render(
          (0, u.jsx)(o.Ht, {
            getLibrary: a.Z,
            children: (0, u.jsx)(w.ZP, {
              children: (0, u.jsx)(c.Provider, {
                store: Mt,
                children: (0, u.jsx)(i.Z, {
                  children: (0, u.jsx)(r.Z, { children: (0, u.jsx)(xt, {}) }),
                }),
              }),
            }),
          }),
          document.getElementById("root")
        ),
        window.nft.HCAPTCHA_ON)
      ) {
        window.hCaptchaReady = new Promise(function (e) {
          window.setHCaptchaReady = e;
        });
        var Dt = document.createElement("script");
        (Dt.src =
          "https://js.hcaptcha.com/1/api.js?onload=setHCaptchaReady&render=explicit"),
          document.head.appendChild(Dt);
      }
    },
    36610: (e, t, n) => {
      "use strict";
      n.d(t, { J: () => d, Z: () => p });
      var r = n(4942),
        i = n(15861),
        a = n(87757),
        o = n.n(a),
        s = n(92514);
      function c(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : c(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function u() {
        return (u = (0, i.Z)(
          o().mark(function e(t) {
            var n, r;
            return o().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), (0, s.Au)(t);
                  case 2:
                    return (
                      (n = e.sent),
                      (r = "".concat(t.address, "-eddsaKey")),
                      sessionStorage.setItem(r, JSON.stringify(n)),
                      e.abrupt("return", l({}, n))
                    );
                  case 6:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function d(e) {
        var t = sessionStorage.getItem(e);
        return t ? JSON.parse(t) : null;
      }
      const p = function (e) {
        return u.apply(this, arguments);
      };
    },
    88223: (e, t, n) => {
      "use strict";
      n.d(t, { f0: () => p, JM: () => h, bD: () => x });
      var r = n(15861),
        i = n(87757),
        a = n.n(i),
        o = n(26143),
        s = n(40140),
        c = n(59873),
        l = [
          {
            inputs: [
              { internalType: "contract ENS", name: "_ens", type: "address" },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            inputs: [
              {
                internalType: "address[]",
                name: "addresses",
                type: "address[]",
              },
            ],
            name: "getNames",
            outputs: [
              { internalType: "string[]", name: "r", type: "string[]" },
            ],
            stateMutability: "view",
            type: "function",
          },
        ],
        u = "0x333Fc8f550043f239a2CF79aEd5e9cF4A20Eb41e",
        d = "0x3671aE578E63FdF66ad4F3E12CC0c0d71Ac7510C";
      function p(e, t) {
        return f.apply(this, arguments);
      }
      function f() {
        return (f = (0, r.Z)(
          a().mark(function e(t, n) {
            var r, i;
            return a().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.t0 = o.ZP), (e.next = 3), (0, s.VH)(n);
                  case 3:
                    return (
                      (e.t1 = e.sent),
                      (e.t2 = (0, o.OL)("1")),
                      (e.t3 = { provider: e.t1, ensAddress: e.t2 }),
                      (r = new e.t0(e.t3)),
                      (e.next = 9),
                      r.name(t).getAddress()
                    );
                  case 9:
                    if (!(i = e.sent) || i.includes("0x0000000000000000000")) {
                      e.next = 14;
                      break;
                    }
                    return e.abrupt("return", i);
                  case 14:
                    return e.abrupt("return", null);
                  case 15:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function h(e, t) {
        return m.apply(this, arguments);
      }
      function m() {
        return (m = (0, r.Z)(
          a().mark(function e(t, n) {
            var r, i, c;
            return a().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.t0 = o.ZP), (e.next = 3), (0, s.VH)(n);
                  case 3:
                    return (
                      (e.t1 = e.sent),
                      (e.t2 = (0, o.OL)("1")),
                      (e.t3 = { provider: e.t1, ensAddress: e.t2 }),
                      (i = new e.t0(e.t3)),
                      (e.next = 9),
                      i.getName(t)
                    );
                  case 9:
                    if ((c = e.sent) && c.name) {
                      e.next = 12;
                      break;
                    }
                    return e.abrupt("return", null);
                  case 12:
                    return (
                      (e.t4 = t.toLowerCase()),
                      (e.next = 15),
                      i.name(c.name).getAddress()
                    );
                  case 15:
                    if (((e.t6 = r = e.sent), (e.t5 = null === e.t6), e.t5)) {
                      e.next = 19;
                      break;
                    }
                    e.t5 = void 0 === r;
                  case 19:
                    if (!e.t5) {
                      e.next = 23;
                      break;
                    }
                    (e.t7 = void 0), (e.next = 24);
                    break;
                  case 23:
                    e.t7 = r.toLowerCase();
                  case 24:
                    if (((e.t8 = e.t7), e.t4 === e.t8)) {
                      e.next = 27;
                      break;
                    }
                    return e.abrupt("return", null);
                  case 27:
                    return e.abrupt("return", c.name);
                  case 28:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function x(e, t) {
        return g.apply(this, arguments);
      }
      function g() {
        return (g = (0, r.Z)(
          a().mark(function e(t, n) {
            var r, i, o;
            return a().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (t) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return", {});
                  case 2:
                    return (
                      (e.t0 = t.eth.Contract),
                      (e.t1 = l),
                      (e.next = 6),
                      t.eth.getChainId()
                    );
                  case 6:
                    if (((e.t2 = e.sent), (e.t3 = 5), e.t2 !== e.t3)) {
                      e.next = 12;
                      break;
                    }
                    (e.t4 = u), (e.next = 13);
                    break;
                  case 12:
                    e.t4 = d;
                  case 13:
                    return (
                      (e.t5 = e.t4),
                      (r = new e.t0(e.t1, e.t5)),
                      (e.next = 17),
                      r.methods.getNames(n).call()
                    );
                  case 17:
                    return (
                      (i = e.sent),
                      (o = {}),
                      n.map(function (e, t) {
                        var n = i[t];
                        "" !== n && c.normalize(n) === n && (o[e] = n);
                      }),
                      e.abrupt("return", o)
                    );
                  case 21:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
    },
    16951: (e, t, n) => {
      "use strict";
      n.d(t, {
        Zb: () => r,
        hE: () => i,
        _e: () => a,
        C_: () => o,
        kM: () => s,
        rt: () => c,
        _2: () => l,
        Dx: () => u,
        xK: () => d,
        P3: () => p,
        qk: () => f,
        zK: () => h,
        Nj: () => m,
        SP: () => x,
        ih: () => g,
        XI: () => v,
        du: () => b,
        j3: () => w,
        $Y: () => y,
        ZS: () => k,
      });
      var r = "/account-history",
        i = "/faq",
        a = "/login",
        o = "/marketplace",
        s = "/mint",
        c = "/404",
        l = "/profile",
        u = "/",
        d = "/email",
        p = "/email/verify/:emailVerificationCode",
        f = "/email/unsubscribe/:emailUnsubscribeCode",
        h = "/email/unsubscribed",
        m = "/stats",
        x = "/404",
        g = "/:userId",
        v = "/profile/edit",
        b = "/collection/:collection",
        w = "/collection/:collectionId/edition/:editionId",
        y = "/token/:contractAddress/:tokenId",
        A = ["marketplace", "coming-soon", "stats", "token/", "collection/"];
      function k(e) {
        var t = A.filter(function (t) {
            var n = e.substring(1, t.length);
            return t.includes(n);
          }),
          n = e === u;
        return Boolean(t.length || n);
      }
    },
    39800: (e, t, n) => {
      "use strict";
      n.d(t, { P: () => r, R: () => i });
      var r = n(83919).Mp.injectEndpoints({
          endpoints: function (e) {
            return {
              ratesAndFees: e.query({
                query: function () {
                  return { url: "ratesAndFees" };
                },
              }),
            };
          },
        }),
        i = r.useRatesAndFeesQuery;
    },
    83919: (e, t, n) => {
      "use strict";
      n.d(t, {
        Mp: () => I,
        qS: () => N,
        e$: () => E,
        yI: () => S,
        Ek: () => y,
      });
      var r = n(4942),
        i = n(15861),
        a = n(87757),
        o = n.n(a),
        s = n(30848),
        c = n(45673),
        l = n(61341),
        u = n(55646),
        d = n(30567),
        p = n(23085).Buffer;
      function f() {
        var e,
          t =
            null === (e = window.performance) || void 0 === e
              ? void 0
              : e.getEntriesByType("navigation")[0];
        if (!t) return "";
        var n = {
          type: t.type,
          timing: {
            connectEnd: t.connectEnd,
            connectStart: t.connectStart,
            decodedBodySize: t.decodedBodySize,
            domComplete: t.domComplete,
            domContentLoadedEventEnd: t.domContentLoadedEventEnd,
            domContentLoadedEventStart: t.domContentLoadedEventStart,
            domInteractive: t.domInteractive,
            domainLookupEnd: t.domainLookupEnd,
            domainLookupStart: t.domainLookupStart,
            encodedBodySize: t.encodedBodySize,
            fetchStart: t.fetchStart,
            loadEventEnd: t.loadEventEnd,
            loadEventStart: t.loadEventStart,
            redirectCount: t.redirectCount,
            redirectEnd: t.redirectEnd,
            redirectStart: t.redirectStart,
            requestStart: t.requestStart,
            responseEnd: t.responseEnd,
            responseStart: t.responseStart,
            secureConnectionStart: t.secureConnectionStart,
            startTime: t.startTime,
            transferSize: t.transferSize,
            unloadEventEnd: t.unloadEventEnd,
            unloadEventStart: t.unloadEventStart,
          },
        };
        return p.from(JSON.stringify(n), "utf-8").toString("base64");
      }
      var h = n(66649),
        m = n(23085).Buffer;
      function x(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function g() {
        var e,
          t = { latencies: [] },
          n = (function (e, t) {
            var n =
              ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
            if (!n) {
              if (
                Array.isArray(e) ||
                (n = (function (e, t) {
                  if (e) {
                    if ("string" == typeof e) return x(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return (
                      "Object" === n &&
                        e.constructor &&
                        (n = e.constructor.name),
                      "Map" === n || "Set" === n
                        ? Array.from(e)
                        : "Arguments" === n ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                        ? x(e, t)
                        : void 0
                    );
                  }
                })(e)) ||
                (t && e && "number" == typeof e.length)
              ) {
                n && (e = n);
                var r = 0,
                  i = function () {};
                return {
                  s: i,
                  n: function () {
                    return r >= e.length
                      ? { done: !0 }
                      : { done: !1, value: e[r++] };
                  },
                  e: function (e) {
                    throw e;
                  },
                  f: i,
                };
              }
              throw new TypeError(
                "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            }
            var a,
              o = !0,
              s = !1;
            return {
              s: function () {
                n = n.call(e);
              },
              n: function () {
                var e = n.next();
                return (o = e.done), e;
              },
              e: function (e) {
                (s = !0), (a = e);
              },
              f: function () {
                try {
                  o || null == n.return || n.return();
                } finally {
                  if (s) throw a;
                }
              },
            };
          })(
            window.performance
              .getEntriesByType("resource")
              .filter(function (e) {
                return (
                  ("fetch" === e.initiatorType ||
                    "iframe" === e.initiatorType ||
                    "script" === e.initiatorType) &&
                  -1 === e.name.indexOf("://localhost") &&
                  -1 === e.name.indexOf("://127.0.0.1")
                );
              })
          );
        try {
          for (n.s(); !(e = n.n()).done; ) {
            var r = e.value,
              i = r.name
                .replace(window.nft.MARKETPLACE_SVC_URL, "nft-svc-marketplace")
                .replace(window.nft.S3_URL, "s3/")
                .replace(window.nft.IPFS_URL, "ipfs/")
                .replace(window.location.origin, "origin")
                .replace(
                  /http[s\u017F]:\/\/[\x2D0-9a-z\u017F\u212A]+\.hcaptcha\.com\//i,
                  "hcaptcha/"
                )
                .replace(
                  /[0-9a-f]{8}\x2D([0-9a-f]{4}\x2D){3}[0-9a-f]{12}/gi,
                  "{ID}"
                )
                .replace(/Qm[0-9a-z\u017F\u212A]{44}/gi, "{IPFSHASH}")
                .replace(
                  /\/[0-9]+\.[0-9a-f]{20}\.j[s\u017F]/i,
                  "/{NUM}.{HASH}.js"
                )
                .replace(/\.[0-9a-f]{20}\.j[s\u017F]/i, ".{HASH}.js")
                .replace(/\/[0-9a-f]{7}\//gi, "/{HASH}/")
                .split("?")[0]
                .split("#")[0];
            -1 !== i.indexOf("://") && (i = "unknown-url");
            var a = r.duration;
            (0, h.Ai)(t, i, a);
          }
        } catch (e) {
          n.e(e);
        } finally {
          n.f();
        }
        return (
          window.performance.clearResourceTimings(),
          t.latencies.length
            ? m.from(JSON.stringify(t), "utf-8").toString("base64")
            : ""
        );
      }
      function v(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? v(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : v(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var w = !1;
      window.addEventListener("load", function () {
        setTimeout(function () {
          w = !0;
        }, 1e3);
      });
      var y = function (e) {
        return { Authorization: "Bearer ".concat(e) };
      };
      function A(e) {
        return Array.isArray(e) || void 0 === e
          ? new Headers(e)
          : e instanceof Headers
          ? e
          : new Headers(Object.entries(e));
      }
      var k = window.nft.MARKETPLACE_SVC_URL,
        C = (0, c.fetchBaseQuery)({ baseUrl: k }),
        j = (function () {
          var e = (0, i.Z)(
            o().mark(function e(t, n, r) {
              var i, a, s, c, p, h;
              return o().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((i = "string" == typeof t ? { url: t } : b({}, t)),
                        (a = A(i.headers)),
                        (i.headers = a),
                        (s = a.has("authorization")),
                        !window.nft.HCAPTCHA_ON || (!s && !u.w6))
                      ) {
                        e.next = 10;
                        break;
                      }
                      return (e.t0 = a), (e.next = 8), (0, l.Z)();
                    case 8:
                      (e.t1 = e.sent), e.t0.set.call(e.t0, "Token", e.t1);
                    case 10:
                      return (
                        s &&
                          (w && ((c = f()) && a.set("PerfPing", c), (w = !1)),
                          (p = (0, d.c)()) && a.set("ErrorPing", p),
                          (h = g()) && a.set("Telemetry", h)),
                        e.abrupt("return", C(i, n, r))
                      );
                    case 12:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, n, r) {
            return e.apply(this, arguments);
          };
        })(),
        E = (0, s.LC)({
          reducerPath: "marketplaceSvc",
          baseQuery: j,
          tagTypes: ["Balance", "Orders", "Drafts"],
          endpoints: function () {
            return {};
          },
        }),
        I = (0, s.LC)({
          reducerPath: "appData",
          baseQuery: j,
          endpoints: function () {
            return {};
          },
        }),
        S = (0, s.LC)({
          reducerPath: "userData",
          baseQuery: j,
          endpoints: function () {
            return {};
          },
        }),
        N = (0, s.LC)({
          reducerPath: "email",
          baseQuery: j,
          endpoints: function () {
            return {};
          },
        });
    },
    53852: (e, t, n) => {
      "use strict";
      n.d(t, { _H: () => r, Dw: () => i, Tk: () => a });
      var r = n(83919).qS.injectEndpoints({
          endpoints: function (e) {
            return {
              getVerifyEmail: e.query({
                query: function (e) {
                  return {
                    url: "verifyEmailAddress",
                    params: { emailVerificationCode: e.emailVerificationCode },
                  };
                },
              }),
              unsubscribe: e.query({
                query: function (e) {
                  return { url: "unsubscribe", params: { code: e.code } };
                },
              }),
            };
          },
        }),
        i = r.useGetVerifyEmailQuery,
        a = r.useUnsubscribeQuery;
    },
    25237: (e, t, n) => {
      "use strict";
      n.d(t, { y: () => d });
      var r = n(15861),
        i = n(87757),
        a = n.n(i),
        o = n(48295),
        s = n(30567),
        c = n(97544),
        l = n(23085).Buffer,
        u = "token-";
      function d(e, t) {
        return p.apply(this, arguments);
      }
      function p() {
        return (p = (0, r.Z)(
          a().mark(function e(t, n) {
            var r, i, s, d, p, h, m;
            return a().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((r = "".concat(u).concat(t)),
                      (i = sessionStorage.getItem(r)) && f(i))
                    ) {
                      e.next = 19;
                      break;
                    }
                    return (
                      (s = new Date()),
                      (d = new Date(s.getTime() + 252e5).toISOString()),
                      (p = new c.SiweMessage({
                        domain: window.location.host,
                        address: t,
                        statement: o.Wl,
                        uri: window.location.origin,
                        version: "1",
                        chainId: window.nft.CHAIN_ID,
                        expirationTime: d,
                        issuedAt: s.toISOString(),
                      })),
                      (h = p.prepareMessage()),
                      (e.next = 9),
                      n.eth.personal.sign(h, t, "")
                    );
                  case 9:
                    (e.t0 = e.sent),
                      (e.t1 = p.issuedAt),
                      (e.t2 = d),
                      (e.t3 = p.domain),
                      (e.t4 = p.uri),
                      (e.t5 = p.address),
                      (e.t6 = p.nonce),
                      (m = {
                        signature: e.t0,
                        issuedAt: e.t1,
                        expirationTime: e.t2,
                        domain: e.t3,
                        uri: e.t4,
                        address: e.t5,
                        nonce: e.t6,
                      }),
                      (i = l
                        .from(JSON.stringify(m), "utf8")
                        .toString("base64")),
                      sessionStorage.setItem(r, i);
                  case 19:
                    return e.abrupt("return", i);
                  case 20:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function f(e) {
        try {
          if (e) {
            var t = o.hr.parse(
                JSON.parse(l.from(e, "base64").toString("utf8"))
              ),
              n = Date.parse(t.expirationTime);
            return new Date().getTime() + 3e5 < n;
          }
          return !1;
        } catch (e) {
          return (0, s._)(e), !1;
        }
      }
    },
    52224: (e, t, n) => {
      "use strict";
      n.d(t, {
        Bf: () => a,
        Qr: () => o,
        Mm: () => s,
        Hz: () => c,
        Xo: () => l,
        Nh: () => u,
        d3: () => d,
        tx: () => p,
        yD: () => f,
        c5: () => h,
        Fx: () => m,
        EN: () => x,
        LQ: () => g,
        Hu: () => v,
        FM: () => b,
        Lq: () => w,
        ui: () => y,
        xv: () => A,
        eY: () => k,
        _q: () => C,
        yY: () => j,
        Qb: () => E,
        wq: () => I,
        DL: () => S,
        KM: () => N,
        cj: () => T,
        iz: () => Z,
        sj: () => P,
        dW: () => L,
        Gy: () => O,
        M0: () => B,
        JX: () => R,
        nB: () => M,
        is: () => D,
        Px: () => F,
        Tm: () => W,
        WR: () => _,
        Pr: () => U,
        jw: () => z,
        Am: () => V,
        fA: () => G,
      });
      var r = n(83919),
        i = n(89806),
        a = r.e$.injectEndpoints({
          endpoints: function (e) {
            return {
              getNfts: e.query({
                query: function (e) {
                  return { url: "getNfts", params: e };
                },
              }),
              getNftByContractTokenId: e.query({
                query: function (e) {
                  var t = e.contractAddress,
                    n = e.tokenId;
                  return {
                    url: "getNft",
                    params: {
                      tokenIdAndContractAddress: "".concat(n, "_").concat(t),
                    },
                  };
                },
              }),
              getCollectionByUser: e.query({
                query: function (e) {
                  return { url: "search", params: { creatorUserName: e } };
                },
                transformResponse: i.fW,
              }),
              getCollectionStats: e.query({
                query: function (e) {
                  return {
                    url: "getCollectionStats",
                    params: { collectionId: e },
                  };
                },
              }),
              getStats: e.query({
                query: function (e) {
                  return {
                    url: "getStats",
                    params: { timePeriod: e.timePeriod, type: e.type },
                  };
                },
              }),
              getNftBalances: e.query({
                query: function (e) {
                  return { url: "nftBalances", params: { address: e } };
                },
                providesTags: ["Balance"],
                transformResponse: i.iT,
              }),
              getLayer1NftBalances: e.query({
                query: function (e) {
                  return { url: "layer1NftBalances", params: { address: e } };
                },
                transformResponse: i.cl,
              }),
              getCollectionSlugAvailability: e.query({
                query: function (e) {
                  return { url: "getCollectionSlugAvailability", params: e };
                },
              }),
              getGroupedNftOrders: e.query({
                query: function (e) {
                  return { url: "getNftOrders", params: e };
                },
                transformResponse: i.TW,
                providesTags: ["Orders"],
              }),
              getNftOrders: e.query({
                query: function (e) {
                  return { url: "getNftOrders", params: e };
                },
                transformResponse: i.pX,
                providesTags: ["Orders"],
              }),
              getPublicProfile: e.query({
                query: function (e) {
                  return { url: "getPublicProfile", params: { address: e } };
                },
              }),
              getLikes: e.query({
                query: function (e) {
                  return { url: "likes", params: { account: e } };
                },
              }),
              getCollections: e.query({
                query: function (e) {
                  return { url: "getCollections", params: e };
                },
              }),
              getIsAccountSetup: e.query({
                query: function (e) {
                  return { url: "isAccountSetup", params: { address: e } };
                },
              }),
              getUserAccountHistory: e.query({
                query: function (e) {
                  return { url: "userAccountHistory", params: { address: e } };
                },
              }),
              getAvailableSubscriptionTopics: e.query({
                query: function () {
                  return { url: "getAvailableSubscriptionTopics" };
                },
              }),
              getDeployContractFee: e.mutation({
                query: function (e) {
                  return {
                    url: "getDeployContractFee",
                    params: { address: e },
                  };
                },
              }),
              unlistNft: e.mutation({
                query: function (e) {
                  var t = e.orderId,
                    n = e.authSig;
                  return {
                    url: "sell",
                    method: "DELETE",
                    headers: (0, r.Ek)(n),
                    params: { orderId: t },
                  };
                },
              }),
              listNft: e.mutation({
                query: function (e) {
                  var t = e.authSig,
                    n = e.body;
                  return {
                    url: "listNftForSale",
                    method: "POST",
                    headers: (0, r.Ek)(t),
                    body: n,
                  };
                },
                invalidatesTags: ["Orders"],
              }),
              createDraftNft: e.mutation({
                query: function (e) {
                  var t = e.body,
                    n = e.authSig;
                  return {
                    url: "createDraftNft",
                    method: "POST",
                    headers: (0, r.Ek)(n),
                    body: t,
                    invalidatesTags: ["Drafts"],
                  };
                },
              }),
              updateDraftNft: e.mutation({
                query: function (e) {
                  var t = e.body,
                    n = e.authSig;
                  return {
                    url: "updateDraftNft",
                    method: "POST",
                    headers: (0, r.Ek)(n),
                    body: t,
                    invalidatesTags: ["Drafts"],
                  };
                },
              }),
              deleteDraftNft: e.mutation({
                query: function (e) {
                  var t = e.draftNftId,
                    n = e.authSig;
                  return {
                    url: "deleteDraftNft",
                    method: "DELETE",
                    headers: (0, r.Ek)(n),
                    params: { draftNftId: t },
                    invalidatesTags: ["Drafts"],
                  };
                },
              }),
              submitMint: e.mutation({
                query: function (e) {
                  var t = e.authSig,
                    n = e.body;
                  return {
                    url: "publishDraftNft",
                    method: "POST",
                    params: { uniqueId: e.uniqueId },
                    headers: (0, r.Ek)(t),
                    body: n,
                  };
                },
              }),
              createCollection: e.mutation({
                query: function (e) {
                  var t = e.authSig,
                    n = e.body;
                  return {
                    url: "createCollection",
                    method: "POST",
                    headers: (0, r.Ek)(t),
                    body: n,
                  };
                },
              }),
              getCreatorCollections: e.query({
                query: function (e) {
                  return {
                    url: "getCreatorCollections",
                    headers: (0, r.Ek)(e),
                  };
                },
              }),
              getCreatorDraftNfts: e.query({
                query: function (e) {
                  var t = e.authSig,
                    n = e.collectionId;
                  return {
                    url: "getCreatorDraftNfts",
                    headers: (0, r.Ek)(t),
                    params: { collectionId: n },
                  };
                },
                transformResponse: i.Yn,
                providesTags: ["Drafts"],
              }),
              tradeNft: e.mutation({
                query: function (e) {
                  var t = e.authSig,
                    n = e.body;
                  return {
                    url: "trade",
                    method: "POST",
                    headers: (0, r.Ek)(t),
                    body: n,
                  };
                },
              }),
              getUploadUrl: e.mutation({
                query: function (e) {
                  return {
                    url: "getUploadUrl",
                    method: "POST",
                    headers: (0, r.Ek)(e),
                  };
                },
              }),
              createNftLike: e.mutation({
                query: function (e) {
                  var t = e.authSig;
                  return {
                    url: "like",
                    params: { nftId: e.nftId },
                    method: "POST",
                    headers: (0, r.Ek)(t),
                  };
                },
              }),
              deleteNftLike: e.mutation({
                query: function (e) {
                  var t = e.authSig;
                  return {
                    url: "like",
                    params: { nftId: e.nftId },
                    method: "DELETE",
                    headers: (0, r.Ek)(t),
                  };
                },
              }),
              getUserFeatures: e.query({
                query: function (e) {
                  return { url: "getUserFeatures", headers: (0, r.Ek)(e) };
                },
              }),
              transferInfo: e.mutation({
                query: function (e) {
                  var t = e.authSig,
                    n = e.toAddress,
                    i = e.tokenId;
                  return {
                    url: "transferInfo",
                    method: "GET",
                    headers: (0, r.Ek)(t),
                    params: { toAddress: n, tokenId: i },
                  };
                },
              }),
              transferNft: e.mutation({
                query: function (e) {
                  var t = e.authSig,
                    n = e.body;
                  return {
                    url: "transferNft",
                    method: "POST",
                    headers: (0, r.Ek)(t),
                    body: n,
                  };
                },
              }),
              getPublishDraftNftInfo: e.mutation({
                query: function (e) {
                  var t = e.authSig,
                    n = e.account,
                    i = e.draftNftId,
                    a = e.uniqueId;
                  return {
                    url: "getPublishDraftNftInfo",
                    headers: (0, r.Ek)(t),
                    params: {
                      creatorEthAddress: n,
                      draftNftId: i,
                      uniqueId: a,
                    },
                  };
                },
              }),
              getMintingInfo: e.mutation({
                query: function (e) {
                  var t = e.authSig,
                    n = e.account,
                    i = e.amount,
                    a = e.uniqueId;
                  return {
                    url: "getMintingInfo",
                    headers: (0, r.Ek)(t),
                    params: { creatorEthAddress: n, amount: i, uniqueId: a },
                  };
                },
              }),
              updateEddsaKeyInfo: e.mutation({
                query: function (e) {
                  return { url: "updateEddsaKeyInfo", headers: (0, r.Ek)(e) };
                },
              }),
              getProfile: e.mutation({
                query: function (e) {
                  return {
                    url: "getProfile",
                    method: "GET",
                    headers: (0, r.Ek)(e),
                  };
                },
              }),
              setProfile: e.mutation({
                query: function (e) {
                  var t = e.authSig,
                    n = e.body;
                  return {
                    url: "setProfile",
                    method: "POST",
                    headers: (0, r.Ek)(t),
                    body: n,
                  };
                },
              }),
              sendVerificationEmail: e.mutation({
                query: function (e) {
                  return {
                    url: "sendVerificationEmail",
                    method: "GET",
                    headers: (0, r.Ek)(e),
                  };
                },
              }),
              toggleNftVisibility: e.mutation({
                query: function (e) {
                  var t = e.authSig;
                  return {
                    url: "toggleNftVisibility",
                    method: "POST",
                    body: e.body,
                    headers: (0, r.Ek)(t),
                  };
                },
                invalidatesTags: ["Balance"],
              }),
              getWithdrawNftInfo: e.mutation({
                query: function (e) {
                  var t = e.authSig,
                    n = e.amount,
                    i = e.tokenId;
                  return {
                    url: "withdrawInfo",
                    method: "GET",
                    headers: (0, r.Ek)(t),
                    params: { amount: n, tokenId: i },
                  };
                },
              }),
            };
          },
        }),
        o = a.useCreateCollectionMutation,
        s = a.useCreateDraftNftMutation,
        c = a.useUpdateDraftNftMutation,
        l = a.useDeleteDraftNftMutation,
        u = (a.useGetCollectionByUserQuery, a.useGetCollectionStatsQuery),
        d = a.useGetStatsQuery,
        p = a.useGetNftBalancesQuery,
        f = a.useGetGroupedNftOrdersQuery,
        h = a.useGetNftOrdersQuery,
        m = a.useGetNftsQuery,
        x = a.useGetNftByContractTokenIdQuery,
        g = a.useGetLayer1NftBalancesQuery,
        v = a.useListNftMutation,
        b = a.useGetCreatorCollectionsQuery,
        w = a.useGetCreatorDraftNftsQuery,
        y = a.useGetCollectionSlugAvailabilityQuery,
        A = a.useGetPublicProfileQuery,
        k = a.useUnlistNftMutation,
        C = a.useSubmitMintMutation,
        j = a.useTradeNftMutation,
        E = a.useGetUploadUrlMutation,
        I = a.useCreateNftLikeMutation,
        S = a.useDeleteNftLikeMutation,
        N = a.useGetUserFeaturesQuery,
        T = a.useGetLikesQuery,
        Z = a.useTransferInfoMutation,
        P = a.useTransferNftMutation,
        L = a.useGetCollectionsQuery,
        O = a.useGetPublishDraftNftInfoMutation,
        B = a.useGetIsAccountSetupQuery,
        R = a.useUpdateEddsaKeyInfoMutation,
        M = a.useGetUserAccountHistoryQuery,
        D = a.useGetMintingInfoMutation,
        F = a.useGetAvailableSubscriptionTopicsQuery,
        W = a.useGetProfileMutation,
        _ = a.useSetProfileMutation,
        U = a.useSendVerificationEmailMutation,
        z = a.useToggleNftVisibilityMutation,
        V = a.useGetDeployContractFeeMutation,
        G = a.useGetWithdrawNftInfoMutation;
    },
    89806: (e, t, n) => {
      "use strict";
      n.d(t, {
        fW: () => x,
        Pg: () => g,
        TW: () => m,
        cl: () => d,
        iT: () => p,
        Yn: () => h,
        pX: () => f,
      });
      var r = n(4942);
      function i(e) {
        return {
          collectionId: "0",
          nftId: "",
          name: e.editionName,
          description: e.description,
          mediaUri: e.image,
          amount: 1,
          tokenId: e.tokenId,
          mediaType: "png",
          revealed: !1,
          firstMintedAt: new Date(0),
          createdAt: new Date(0),
          updatedAt: new Date(0),
          likeCount: 0,
          contractAddress: "ethereum",
          creatorEthAddress: "",
          royaltyFeeBips: 0,
          nftType: "ERC721",
          mutable: !1,
          metadataUri: "",
          mediaThumbnailUri: e.image,
          preRevealMediaType: null,
          preRevealMediaUri: null,
          preRevealMediaThumbnailUri: null,
          metadataJson: {
            isL1: !0,
            properties: e.properties,
            attributes: e.attributes,
          },
          copyright: "",
        };
      }
      var a = n(13550),
        o = n.n(a),
        s = n(3283),
        c = n.n(s);
      function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var d = function (e) {
          return null == e
            ? void 0
            : e.map(function (e) {
                return {
                  nft: i(e),
                  ownedAmount: "1",
                  loopringBalances: [],
                  isVisible: e.isVisible,
                };
              });
        },
        p = function (e) {
          return u(
            u({}, e),
            {},
            {
              nfts: e.nfts.sort(function (e, t) {
                return e.nft.createdAt < t.nft.createdAt ? -1 : 1;
              }),
            }
          );
        },
        f = function (e) {
          return null == e
            ? void 0
            : e.sort(function (e, t) {
                return new (o())(e.pricePerNft).gt(new (o())(t.pricePerNft))
                  ? 1
                  : -1;
              });
        },
        h = function (e) {
          return e.sort(function (e, t) {
            return e.createdAt < t.createdAt ? -1 : 1;
          });
        },
        m = function (e) {
          var t = {};
          return (
            f(e).forEach(function (e) {
              Object.prototype.hasOwnProperty.call(t, e.nftId) ||
                (t[e.nftId] = []),
                t[e.nftId].push(e);
            }),
            t
          );
        },
        x = function (e) {
          return e.map(function (e) {
            return u(
              u({}, e),
              {},
              {
                pricing: { ETH: "0", USD: 0, WEI: c().utils.toBN(0) },
                metadata: { isL1: !1 },
              }
            );
          });
        },
        g = function (e) {
          var t, n;
          return {
            name: e.name,
            mediaUri: null !== (t = e.mediaUri) && void 0 !== t ? t : "",
            contractAddress: "",
            nftId: "",
            tokenId: "",
            mutable: !1,
            metadataUri: "",
            metadataJson: e.metadata,
            revealed: !1,
            firstMintedAt: new Date(),
            likeCount: 0,
            description: e.description,
            createdAt: new Date(),
            collectionId: null,
            creatorEthAddress: null,
            updatedAt: new Date(),
            amount: "",
            royaltyFeeBips: 0,
            nftType: "ERC1155",
            mediaType: e.mediaType,
            mediaThumbnailUri: e.mediaThumbnailUri,
            preRevealMediaType: e.preRevealMediaType,
            preRevealMediaUri: e.preRevealMediaUri,
            preRevealMediaThumbnailUri: e.preRevealMediaThumbnailUri,
            copyright: null !== (n = e.copyright) && void 0 !== n ? n : "",
          };
        };
    },
    80879: (e, t, n) => {
      "use strict";
      n.d(t, { j: () => i, s: () => a });
      var r = n(83919),
        i = r.yI.injectEndpoints({
          endpoints: function (e) {
            return {
              getDisplayNameAvailability: e.query({
                query: function (e) {
                  var t = e.authSig,
                    n = e.params;
                  return {
                    url: "getDisplayNameAvailability",
                    headers: (0, r.Ek)(t),
                    params: n,
                  };
                },
              }),
            };
          },
        }),
        a = i.useGetDisplayNameAvailabilityQuery;
    },
    36856: (e, t, n) => {
      "use strict";
      n.d(t, {
        PZ: () => f,
        hU: () => v,
        Tz: () => x,
        P2: () => C,
        hV: () => w,
        mi: () => b,
      });
      var r = n(30168),
        i = n(87657);
      n.p, n.p;
      const a = n.p + "1838649103597bb83cb1ffd3fa75efb6.svg";
      var o,
        s = n(70344),
        c = (n(30666), n(67294), n(96168)),
        l = n(71893),
        u = n(85893),
        d = l.default.button.withConfig({
          displayName: "Button",
          componentId: "sc-18j7gm-0",
        })(["cursor:pointer;"]),
        p = (0, l.default)(d).withConfig({
          displayName: "StyledCloseButton",
          componentId: "sc-18j7gm-1",
        })(["background-color:transparent;border:none;padding:5px;"]),
        f = function (e) {
          var t = e.onClick;
          return (0, u.jsx)(p, {
            onClick: t,
            "aria-label": "close",
            children: (0, u.jsx)("img", { src: i.Z, alt: "close-icon" }),
          });
        },
        h = (0, l.default)(d).withConfig({
          displayName: "StyledShareButton",
          componentId: "sc-18j7gm-2",
        })(
          [
            "height:32px;color:",
            ";border:none;border-radius:16px;font-size:",
            ";padding:0 15px;background:transparent;display:flex;align-items:center;",
          ],
          function (e) {
            var t = e.theme;
            return e.darkMode ? t.bg1 : t.bg6;
          },
          function (e) {
            return e.small ? "14px" : "15px";
          }
        ),
        m = l.default.img.withConfig({
          displayName: "IconImg",
          componentId: "sc-18j7gm-3",
        })(
          ["margin-right:", ";margin-left:", ";width:15px;"],
          function (e) {
            return e.reverse ? "0" : "5px";
          },
          function (e) {
            return e.reverse ? "5px" : "0";
          }
        ),
        x = function (e) {
          var t = e.action,
            n = e.darkMode,
            r = e.small;
          return (0, u.jsxs)(h, {
            "aria-label": "share",
            onClick: t,
            darkMode: n,
            small: r,
            children: [
              "Share",
              (0, u.jsx)(m, {
                src: n ? a : s.Z,
                alt: "share-icon",
                reverse: !0,
              }),
            ],
          });
        },
        g = (0, l.default)(d).withConfig({
          displayName: "StyledIconButton",
          componentId: "sc-18j7gm-6",
        })(
          [
            "height:24px;color:",
            ";border:none;font-size:16px;background:transparent;display:flex;align-items:center;padding:0;",
          ],
          function (e) {
            return e.theme.bg9;
          }
        ),
        v = function (e) {
          var t = e.action,
            n = e.iconUrl,
            r = e.label;
          return (0, u.jsxs)(g, {
            onClick: t,
            children: [(0, u.jsx)(m, { src: n, alt: r + "-icon" }), r],
          });
        },
        b = (0, l.default)(c.Z).withConfig({
          displayName: "StyledTooltip",
          componentId: "sc-18j7gm-7",
        })(
          [
            "background-color:",
            " !important;opacity:1 !important;max-width:215px;border-radius:15px !important;padding:",
            ";font-size:12px !important;font-weight:400 !important;z-index:9999;&:hover{pointer-events:auto !important;visibility:visible !important;opacity:1 !important;}",
          ],
          function (e) {
            return e.theme.bg9;
          },
          function (e) {
            return "small" === e.size
              ? "7px 12px 7px 12px !important"
              : "12px !important";
          }
        ),
        w = (0, l.default)(b).withConfig({
          displayName: "StyledHiddenTooltip",
          componentId: "sc-18j7gm-8",
        })(
          [
            "pointer-events:auto !important;position:absolute !important;max-width:250px !important;width:250px !important;",
            ";",
          ],
          function (e) {
            return e.theme.mediaWidth.upToExtraSmall(
              o ||
                (o = (0, r.Z)([
                  "\n    max-width: 215px !important;\n    width: 215px !important;\n  ",
                ]))
            );
          }
        ),
        y = l.default.span.withConfig({
          displayName: "CheckboxSpan",
          componentId: "sc-18j7gm-9",
        })(
          [
            "position:absolute;top:0;left:0;height:25px;width:25px;background-color:",
            ";border-radius:5px;border:1px solid ",
            ";&:after{content:'';position:absolute;display:none;}",
          ],
          function (e) {
            return e.theme.bg00;
          },
          function (e) {
            return e.theme.bg6;
          }
        ),
        A = l.default.input.withConfig({
          displayName: "CheckboxInput",
          componentId: "sc-18j7gm-10",
        })(["visibility:hidden;display:none;"]),
        k = l.default.label.withConfig({
          displayName: "CheckboxLabel",
          componentId: "sc-18j7gm-11",
        })(
          [
            "display:block;position:relative;padding-left:35px;cursor:pointer;font-size:1em;line-height:25px;&:hover ",
            " ~ ",
            "{background-color:",
            ";}",
            ":active ~ ",
            "{background-color:white;}",
            ":checked ~ ",
            "{background-color:",
            ";}",
            ":checked ~ ",
            "::after{display:block;}",
            "::after{left:7px;bottom:5px;width:6px;height:12px;border:solid white;border-width:0 4px 4px 0;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}",
          ],
          A,
          y,
          function (e) {
            return e.theme.bg0;
          },
          A,
          y,
          A,
          y,
          function (e) {
            return e.theme.bg99;
          },
          A,
          y,
          y
        ),
        C = function (e) {
          var t = e.label,
            n = e.checked,
            r = e.name,
            i = e.onChange;
          return (0, u.jsxs)(k, {
            htmlFor: r,
            children: [
              t,
              (0, u.jsx)(A, {
                type: "checkbox",
                id: r,
                checked: n,
                onChange: i,
              }),
              (0, u.jsx)(y, {}),
            ],
          });
        };
    },
    24724: (e, t, n) => {
      "use strict";
      n.d(t, {
        PZ: () => f.PZ,
        hU: () => f.hU,
        Tz: () => f.Tz,
        P2: () => f.P2,
        hV: () => f.hV,
        mi: () => f.mi,
        O9: () => b,
        ZP: () => w,
      });
      var r,
        i,
        a,
        o,
        s,
        c = n(30168),
        l = n(4942),
        u = n(67294),
        d = n(71893),
        p = n(85893),
        f = n(36856);
      function h(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? h(Object(n), !0).forEach(function (t) {
                (0, l.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : h(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var x = {
          upToExtremeSmall: 450,
          upToExtraSmall: 500,
          upToSmall: 768,
          upToMedium: 1024,
          upToLarge: 1280,
          upToExtraLarge: 1600,
        },
        g = {
          s2: "2px",
          s4: "4px",
          s8: "8px",
          s12: "12px",
          s16: "16px",
          s20: "20px",
          s24: "24px",
          s32: "32px",
          s64: "64px",
          s128: "128px",
        },
        v = Object.keys(x).reduce(function (e, t) {
          return (
            (e[t] = function (e, n, r) {
              return (0, d.css)(
                ["@media (max-width:", "px){", "}"],
                x[t],
                (0, d.css)(e, n, r)
              );
            }),
            e
          );
        }, {});
      function b(e) {
        return {
          white: "#FFFFFF",
          black: "#000000",
          button1: "#f3f4f6",
          text1: e ? "#FFFFFF" : "#000000",
          text2: e ? "#C3C5CB" : "#565A69",
          text3: e ? "#6C7284" : "#888D9B",
          text4: e ? "#565A69" : "#C3C5CB",
          text5: e ? "#2C2F36" : "#EDEEF2",
          bg00: e ? "#000" : "#fff",
          bg0: e ? "#191B1F" : "#f9fafb",
          bg1: e ? "#212429" : "#f3f4f6",
          bg2: e ? "#2C2F36" : "#e5e6ea",
          bg3: e ? "#40444F" : "#d1d4da",
          bg4: e ? "#565A69" : "#9da2ad",
          bg5: e ? "#6C7284" : "#6d717e",
          bg6: e ? "#1A2028" : "#4f5663",
          bg7: e ? "#1A2028" : "#3d4351",
          bg8: e ? "#1A2028" : "#272d39",
          bg9: e ? "#1A2028" : "#1a1e2b",
          bg99: e ? "#1A2028" : "#000000",
          modalBG: e ? "rgba(0,0,0,.425)" : "#fff",
          advancedBG: e ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.6)",
          pageBG: e ? "#000" : "#ffffff",
          gamestopBlack: e ? "#fff" : "#212322",
          primary1: e ? "#2172E5" : "#ee2a28",
          primary2: e ? "#3680E7" : "#ff3355",
          primary3: e ? "#4D8FEA" : "#ff4d6a",
          primary4: e ? "#376bad70" : "#ff8094",
          primary5: e ? "#153d6f70" : "#ffccd4",
          primary6: e ? "#153d6f70" : "#fff2f4",
          primary7: e ? "#153d6f70" : "#fff7f9",
          primaryText1: e ? "#6da8ff" : "#ee2a28",
          contrastColor: e ? "#000" : "#fff",
          secondary1: e ? "#2172E5" : "#d550fb",
          secondary2: e ? "#17000b26" : "#eaa7fd",
          secondary3: e ? "#17000b26" : "#f7dcfe",
          secondary4: e ? "#17000b26" : "#fdf6ff",
          secondary5: e ? "#17000b26" : "#ffffff",
          tertiary1: e ? "#2172E5" : "#078bb0",
          tertiary2: e ? "#17000b26" : "#83c5d7",
          tertiary3: e ? "#17000b26" : "#e6f3f7",
          tertiary4: e ? "#17000b26" : "#f3f9fb",
          red1: "#FD4040",
          red2: "#F82D3A",
          red3: "#D60000",
          red4: "#BC2828",
          green1: "#00D222",
          green2: "#00B176",
          yellow1: "#e3a507",
          yellow2: "#ff8f00",
          yellow3: "#F3B71E",
          yellow4: "#EBAD04",
          blue1: "#2172E5",
          blue2: "#5199FF",
          error: "#FD4040",
          success: "#27AE60",
          warning: "#ff8f00",
        };
      }
      function w(e) {
        var t = e.children,
          n = (0, u.useMemo)(
            function () {
              return m(
                m({}, (e = b(!1))),
                {},
                {
                  grids: { sm: 8, md: 12, lg: 24 },
                  gridSizes: { regular: "260px" },
                  navbarHeight: "123px",
                  ethGradient:
                    "linear-gradient(90deg, #88AAF1 1.79%, #EFCCC1 35.31%, #B8FAF6 66.85%, #C8B2F4 96.43%)",
                  shadow1: " 9px 11px 25px -10px rgba(0, 0, 0, 0.1)",
                  shadow2: "9px 11px 40px -10px rgba(0, 0, 0, 0.06)",
                  shadow3: "1px 5px 30px 3px rgba(0, 0, 0, 0.04)",
                  shadowMediaDetail:
                    "4px 4px 20px 2px rgba(0, 0, 0, 0.2), 5px 10px 23px -12px rgba(0, 0, 0, 0.05)",
                  mediaWidth: v,
                  space: g,
                  flexColumnNoWrap: (0, d.css)([
                    "display:flex;flex-flow:column nowrap;",
                  ]),
                  flexRowNoWrap: (0, d.css)([
                    "display:flex;flex-flow:row nowrap;",
                  ]),
                  skeleton: (0, d.css)(
                    [
                      "visibility:hidden;position:relative;*{visibility:hidden;pointer-events:none !important;cursor:default !important;}&:after{content:'';visibility:visible;background-color:",
                      ";background-image:linear-gradient( 90deg,",
                      ",",
                      ",",
                      ",",
                      ",",
                      " );background-size:200px 100%;background-repeat:no-repeat;border-radius:8px;animation:skeleton 2000ms ease-in-out infinite;width:100%;height:100%;position:absolute;top:0;left:0;}@keyframes skeleton{0%{background-position:-200px 0;}100%{background-position:calc(200px + 100%) 0;}}",
                    ],
                    e.bg2,
                    e.bg2,
                    e.bg2,
                    e.bg1,
                    e.bg2,
                    e.bg2
                  ),
                  pageWidth: (0, d.css)(
                    [
                      "max-width:1600px;margin:0 auto;padding:0 80px;",
                      " ",
                      " ",
                      " ",
                      " ",
                      "",
                    ],
                    v.upToExtraLarge(
                      r ||
                        (r = (0, c.Z)(["\n        padding: 0 80px;\n      "]))
                    ),
                    v.upToLarge(
                      i ||
                        (i = (0, c.Z)(["\n        padding: 0 60px;\n      "]))
                    ),
                    v.upToMedium(
                      a ||
                        (a = (0, c.Z)(["\n        padding: 0 50px;\n      "]))
                    ),
                    v.upToSmall(
                      o ||
                        (o = (0, c.Z)(["\n        padding: 0 40px;\n      "]))
                    ),
                    v.upToExtraSmall(
                      s ||
                        (s = (0, c.Z)(["\n        padding: 0 20px;\n      "]))
                    )
                  ),
                }
              );
              var e;
            },
            [!1]
          );
        return (0, p.jsx)(d.ThemeProvider, { theme: n, children: t });
      }
    },
    11014: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => x, R: () => v });
      var r = n(15861),
        i = n(15671),
        a = n(97326),
        o = n(60136),
        s = n(6215),
        c = n(61120),
        l = n(72407),
        u = n(4942),
        d = n(87757),
        p = n.n(d),
        f = n(25237),
        h = n(61341);
      var m = (function (e) {
        (0, o.Z)(l, e);
        var t,
          n,
          r =
            ((t = l),
            (n = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                r = (0, c.Z)(t);
              if (n) {
                var i = (0, c.Z)(this).constructor;
                e = Reflect.construct(r, arguments, i);
              } else e = r.apply(this, arguments);
              return (0, s.Z)(this, e);
            });
        function l(e) {
          var t;
          return (
            (0, i.Z)(this, l),
            (t = r.call(this, "Failed request with data")),
            (0, u.Z)((0, a.Z)(t), "data", void 0),
            (t.data = e),
            t
          );
        }
        return l;
      })((0, l.Z)(Error));
      function x(e) {
        return g.apply(this, arguments);
      }
      function g() {
        return (g = (0, r.Z)(
          p().mark(function e(t) {
            var n, r, i, a, o, s, c, l, u;
            return p().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = t.url),
                      (r = t.method),
                      (i = t.body),
                      (a = t.account),
                      (o = t.library),
                      (e.next = 3),
                      (0, f.y)(a, o)
                    );
                  case 3:
                    return (s = e.sent), (e.next = 6), (0, h.Z)();
                  case 6:
                    return (
                      (c = e.sent),
                      (e.next = 9),
                      fetch(n, {
                        method: r || "post",
                        body: i ? JSON.stringify(i) : null,
                        headers: {
                          "Content-Type": "application/json",
                          Authorization: "Bearer ".concat(s),
                          Token: c,
                        },
                      })
                    );
                  case 9:
                    return (l = e.sent), (e.next = 12), l.json();
                  case 12:
                    if (((u = e.sent), !l.ok)) {
                      e.next = 15;
                      break;
                    }
                    return e.abrupt("return", u);
                  case 15:
                    throw new m(u);
                  case 16:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function v(e) {
        sessionStorage.removeItem("".concat("sig-").concat(e));
      }
    },
    14189: (e, t, n) => {
      "use strict";
      n.d(t, { kb: () => o });
      var r = new Array(4);
      function i() {
        var e = r[0] ^ (r[0] << 11);
        return (
          (r[0] = r[1]),
          (r[1] = r[2]),
          (r[2] = r[3]),
          (r[3] = r[3] ^ (r[3] >> 19) ^ e ^ (e >> 8)),
          (r[3] >>> 0) / ((1 << 31) >>> 0)
        );
      }
      function a() {
        return (
          "hsl(" +
          Math.floor(360 * i()) +
          "," +
          (60 * i() + 40) +
          "%," +
          25 * (i() + i() + i() + i()) +
          "%)"
        );
      }
      function o(e) {
        var t = (function (e) {
            for (
              var t = e, n = e, r = Math.ceil(t / 2), a = t - r, o = [], s = 0;
              s < n;
              s++
            ) {
              for (var c = [], l = 0; l < r; l++) c[l] = Math.floor(2.3 * i());
              var u = c.slice(0, a);
              u.reverse(), (c = c.concat(u));
              for (var d = 0; d < c.length; d++) o.push(c[d]);
            }
            return o;
          })(
            (e = (function (e) {
              var t = {};
              return (
                (t.seed =
                  e.seed ||
                  Math.floor(Math.random() * Math.pow(10, 16)).toString(16)),
                (function (e) {
                  r.fill(0);
                  for (var t = 0; t < e.length; t++)
                    r[t % 4] = (r[t % 4] << 5) - r[t % 4] + e.charCodeAt(t);
                })(t.seed),
                (t.size = e.size || 8),
                (t.scale = e.scale || 4),
                (t.color = e.color || a()),
                (t.bgcolor = e.bgcolor || a()),
                (t.spotcolor = e.spotcolor || a()),
                t
              );
            })(e)).size
          ),
          n = Math.sqrt(t.length),
          o = e.size * e.scale,
          s =
            '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' +
            o +
            " " +
            o +
            '">';
        s +=
          '<rect x="0" y="0" width="' +
          o +
          '" height="' +
          o +
          '" fill="' +
          e.bgcolor +
          '"/>';
        for (var c = 0; c < t.length; c++)
          if (t[c]) {
            var l = Math.floor(c / n),
              u = c % n,
              d = 1 == t[c] ? e.color : e.spotcolor;
            s +=
              '<rect x="' +
              u * e.scale +
              '" y="' +
              l * e.scale +
              '" width="' +
              e.scale +
              '" height="' +
              e.scale +
              '" fill="' +
              d +
              '" shape-rendering="crispEdges"/>';
          }
        return s + "</svg>";
      }
    },
    40140: (e, t, n) => {
      "use strict";
      n.d(t, {
        OU: () => be,
        xG: () => ye,
        VH: () => ke,
        Lj: () => ve,
        Lw: () => we,
        H5: () => Ae,
      });
      var r = n(15861),
        i = n(4942),
        a = n(87757),
        o = n.n(a);
      const s = n.p + "10c9a70cd1e84c4e40906d98d9213ac0.svg";
      var c,
        l = n(97452),
        u = n(3283),
        d = n.n(u);
      !(function (e) {
        (e[(e.MAINNET = 1)] = "MAINNET"),
          (e[(e.ROPSTEN = 3)] = "ROPSTEN"),
          (e[(e.RINKEBY = 4)] = "RINKEBY"),
          (e[(e.GOERLI = 5)] = "GOERLI"),
          (e[(e.KOVAN = 42)] = "KOVAN"),
          (e[(e.HARMONY = 16666e5)] = "HARMONY"),
          (e[(e.BINANCE = 56)] = "BINANCE"),
          (e[(e.ARBITRUM_KOVAN = 0x8376940b1db0)] = "ARBITRUM_KOVAN"),
          (e[(e.ARBITRUM_ONE = 42161)] = "ARBITRUM_ONE");
      })(c || (c = {}));
      var p = n(52733),
        f = n(37416),
        h = n(30168),
        m = n(73935),
        x = n(71893),
        g = n(85518),
        v = n(77044),
        b = n(24724);
      const w = n.p + "ccaa3601c5e0547792e2824cb7e7c123.svg",
        y = n.p + "0a6b6ddf83411844565b1fc333e057cf.png",
        A = n.p + "aa421fbd57170955314b97a22cf4f993.png";
      var k,
        C,
        j,
        E,
        I = n(76049),
        S = n(85893),
        N = n(79361),
        T = {
          open: function (e, t, n) {
            var r = this,
              i = document.createElement("div");
            i.setAttribute("id", "gamestop-modal"),
              m.render((0, S.jsx)(Y, { uri: e }), document.body.appendChild(i));
            var a = document.getElementById("close-modal-button");
            null == a ||
              a.addEventListener(
                "click",
                function () {
                  return r.close();
                },
                { once: !0 }
              ),
              t(n);
          },
          close: function () {
            var e = document.getElementById("gamestop-modal");
            null == e || e.remove();
          },
        },
        Z = x.default.div.withConfig({
          displayName: "GamestopWalletModalPageContainer",
          componentId: "sc-zt00ln-0",
        })([
          "z-index:99999;display:flex;align-items:center;justify-content:center;position:fixed;left:0;top:0;height:100vh;width:100%;background:rgba(0,0,0,0.35);backdrop-filter:blur(5px);",
        ]),
        P = x.default.div.withConfig({
          displayName: "ModalWrapper",
          componentId: "sc-zt00ln-1",
        })(
          [
            "",
            " display:flex;align-items:flex-start;justify-content:flex-start;flex-direction:column;background-color:#fff;padding:45px 100px;border-radius:25px;margin:15px;width:calc(100% - 30px);position:relative;max-width:630px;max-height:90vh;",
          ],
          function (e) {
            return e.theme.pageWidth;
          }
        ),
        L = x.default.div.withConfig({
          displayName: "CloseButtonWrapper",
          componentId: "sc-zt00ln-2",
        })(["position:absolute;top:20px;right:20px;"]),
        O = x.default.div.withConfig({
          displayName: "ModalHeaderWrapper",
          componentId: "sc-zt00ln-3",
        })(["flex:0;display:flex;justify-content:flex-start;margin-top:45px;"]),
        B = x.default.img.withConfig({
          displayName: "HeaderImage",
          componentId: "sc-zt00ln-4",
        })(["width:115px;height:21.79px;"]),
        R = x.default.h4.withConfig({
          displayName: "SectionTitle",
          componentId: "sc-zt00ln-5",
        })(["flex:0;margin:0;font-size:20px;font-weight:bold;"]),
        M = x.default.ol.withConfig({
          displayName: "StyledOrderedList",
          componentId: "sc-zt00ln-6",
        })(
          ["flex:0;color:", ";padding-left:25px;margin:0;font-size:16px;"],
          function (e) {
            return e.theme.bg6;
          }
        ),
        D = x.default.li.withConfig({
          displayName: "StyledListItem",
          componentId: "sc-zt00ln-7",
        })(
          [
            "color:",
            ";margin-top:25px;padding-left:5px;font-size:16px;max-width:425px;",
          ],
          function (e) {
            return e.theme.bg5;
          }
        ),
        F = x.default.div.withConfig({
          displayName: "QRCodeSection",
          componentId: "sc-zt00ln-8",
        })(
          [
            "background-color:",
            ";flex:1;padding:25px;align-self:center;border-radius:15px;position:relative;display:flex;align-items:center;justify-content:center;",
            ";",
            ";",
          ],
          function (e) {
            return e.theme.bg1;
          },
          function (e) {
            return e.theme.mediaWidth.upToSmall(
              k || (k = (0, h.Z)(["\n      padding: 10px;\n  "]))
            );
          },
          function (e) {
            return e.theme.mediaWidth.upToExtraSmall(
              C ||
                (C = (0, h.Z)([
                  "\n      padding: 0px;\n      background-color: white;\n      margin-top: 25px;\n  ",
                ]))
            );
          }
        ),
        W = (0, x.default)(N).withConfig({
          displayName: "QRCodeItem",
          componentId: "sc-zt00ln-9",
        })(
          [
            "height:100%;background-color:white;padding:5px;width:100%;display:block;",
            ";",
          ],
          function (e) {
            return e.theme.mediaWidth.upToExtraSmall(
              j || (j = (0, h.Z)(["\n      padding: 0px;\n  "]))
            );
          }
        ),
        _ = x.default.div.withConfig({
          displayName: "DesktopWrapper",
          componentId: "sc-zt00ln-10",
        })(
          [
            "width:100%;flex:1;display:flex;align-items:flex-start;justify-content:flex-start;margin-top:25px;padding-bottom:100px;",
            ";",
          ],
          function (e) {
            return e.theme.mediaWidth.upToExtraSmall(
              E ||
                (E = (0, h.Z)([
                  "\n      flex-direction: column;\n      padding-bottom: 50px;\n\n  ",
                ]))
            );
          }
        ),
        U = x.default.div.withConfig({
          displayName: "DesktopContent",
          componentId: "sc-zt00ln-11",
        })(["flex:2;margin-right:25px;"]),
        z = x.default.div.withConfig({
          displayName: "MobileWrapper",
          componentId: "sc-zt00ln-12",
        })([
          "display:flex;align-items:center;justify-content:center;flex-direction:column;flex:1;width:100%;margin-top:50px;",
        ]),
        V = x.default.p.withConfig({
          displayName: "MobileText",
          componentId: "sc-zt00ln-13",
        })(
          ["color:", ";font-size:18px;font-weight:bold;text-align:center;"],
          function (e) {
            return e.theme.bg9;
          }
        ),
        G = x.default.a.withConfig({
          displayName: "MobileButtonLink",
          componentId: "sc-zt00ln-14",
        })(
          [
            "background-color:",
            ";color:white;padding:0 60px;height:40px;border-radius:20px;font-size:14px;font-weight:bold;text-decoration:none;display:flex;align-items:center;justify-content:center;",
          ],
          function (e) {
            return e.theme.bg9;
          }
        ),
        q = x.default.p.withConfig({
          displayName: "DownloadText",
          componentId: "sc-zt00ln-15",
        })(
          ["color:", ";font-size:14px;text-align:center;margin-top:80px;"],
          function (e) {
            return e.theme.bg5;
          }
        ),
        H = x.default.a.withConfig({
          displayName: "DownloadButtonLink",
          componentId: "sc-zt00ln-16",
        })(["margin:0 5px;"]),
        K = x.default.div.withConfig({
          displayName: "DownloadButtonWrapper",
          componentId: "sc-zt00ln-17",
        })([
          "display:flex;width:100%;justify-content:center;align-items:center;padding-bottom:25px;",
        ]);
      function Y(e) {
        var t = e.uri;
        return (0, S.jsx)(v.Ht, {
          getLibrary: I.Z,
          children: (0, S.jsx)(b.ZP, {
            children: (0, S.jsx)(Z, {
              children: (0, S.jsxs)(P, {
                children: [
                  (0, S.jsx)(L, {
                    id: "close-modal-button",
                    children: (0, S.jsx)(b.PZ, { onClick: function () {} }),
                  }),
                  (0, S.jsx)(O, {
                    children: (0, S.jsx)(B, { src: w, alt: "gamestop" }),
                  }),
                  !g.tq &&
                    (0, S.jsxs)(_, {
                      children: [
                        (0, S.jsxs)(U, {
                          children: [
                            (0, S.jsx)(R, {
                              children: "Login with 2 simple steps",
                            }),
                            (0, S.jsxs)(M, {
                              children: [
                                (0, S.jsx)(D, {
                                  children:
                                    "Download the GameStop wallet on your Android or IOS device if you haven’t already.",
                                }),
                                (0, S.jsx)(D, {
                                  children:
                                    "Open the Gamestop wallet on your mobile. Tap on camera tab and scan the QR code below.",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, S.jsx)(F, {
                          children: (0, S.jsx)(W, {
                            value: t,
                            renderAs: "svg",
                            imageSettings: {
                              src: "/gme-qr-icon.svg",
                              x: null,
                              y: null,
                              height: 24,
                              width: 24,
                              excavate: !1,
                            },
                          }),
                        }),
                      ],
                    }),
                  g.tq &&
                    (0, S.jsxs)(z, {
                      children: [
                        (0, S.jsx)(V, { children: "Connect to mobile wallet" }),
                        (0, S.jsx)(G, { href: t, children: "Connect" }),
                        (0, S.jsx)(q, {
                          children:
                            "Download the GameStop Mobile wallet on your mobile device if you have not already.",
                        }),
                        (0, S.jsxs)(K, {
                          children: [
                            (0, S.jsx)(H, {
                              href: "https://apps.apple.com/",
                              children: (0, S.jsx)("img", {
                                src: y,
                                alt: "download from ios app store",
                              }),
                            }),
                            (0, S.jsx)(H, {
                              href: "https://play.google.com/",
                              children: (0, S.jsx)("img", {
                                src: A,
                                alt: "download from google play store",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                ],
              }),
            }),
          }),
        });
      }
      const Q = T;
      var J = n(74556),
        X = n(84484),
        $ = n(43144),
        ee = n(97326),
        te = n(15671),
        ne = n(60136),
        re = n(6215),
        ie = n(61120),
        ae = n(72407),
        oe = n(26939),
        se = n(2177);
      function ce(e, t) {
        var n =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (e) {
                if ("string" == typeof e) return le(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  "Object" === n && e.constructor && (n = e.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(e)
                    : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? le(e, t)
                    : void 0
                );
              }
            })(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              i = function () {};
            return {
              s: i,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: i,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var a,
          o = !0,
          s = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (o = e.done), e;
          },
          e: function (e) {
            (s = !0), (a = e);
          },
          f: function () {
            try {
              o || null == n.return || n.return();
            } finally {
              if (s) throw a;
            }
          },
        };
      }
      function le(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function ue(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = (0, ie.Z)(e);
          if (t) {
            var i = (0, ie.Z)(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return (0, re.Z)(this, n);
        };
      }
      var de,
        pe = (function (e) {
          (0, ne.Z)(n, e);
          var t = ue(n);
          function n(e, r, i) {
            var a;
            return (
              (0, te.Z)(this, n),
              ((a = t.call(this, e)).code = r),
              (a.data = i),
              a
            );
          }
          return n;
        })((0, ae.Z)(Error)),
        fe = function e(t, n, a, s) {
          var c = this;
          (0, te.Z)(this, e),
            (0, i.Z)(this, "isMetaMask", !1),
            (0, i.Z)(this, "chainId", void 0),
            (0, i.Z)(this, "url", void 0),
            (0, i.Z)(this, "host", void 0),
            (0, i.Z)(this, "path", void 0),
            (0, i.Z)(this, "batchWaitTimeMs", void 0),
            (0, i.Z)(this, "connector", void 0),
            (0, i.Z)(this, "nextId", 1),
            (0, i.Z)(this, "batchTimeoutId", null),
            (0, i.Z)(this, "batch", []),
            (0, i.Z)(
              this,
              "clearBatch",
              (0, r.Z)(
                o().mark(function e() {
                  var t, n, r, i, a, s, l, u, d, p, f, h, m, x;
                  return o().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t = (t = c.batch).filter(function (e) {
                                if (
                                  "wallet_switchEthereumChain" ===
                                  e.request.method
                                ) {
                                  try {
                                    c.connector.changeChainId(
                                      parseInt(e.request.params[0].chainId)
                                    ),
                                      e.resolve({ id: e.request.id });
                                  } catch (t) {
                                    e.reject(t);
                                  }
                                  return !1;
                                }
                                return !0;
                              })),
                              (c.batch = []),
                              (c.batchTimeoutId = null),
                              (e.prev = 4),
                              (e.next = 7),
                              fetch(c.url, {
                                method: "POST",
                                headers: {
                                  "content-type": "application/json",
                                  accept: "application/json",
                                },
                                body: JSON.stringify(
                                  t.map(function (e) {
                                    return e.request;
                                  })
                                ),
                              })
                            );
                          case 7:
                            (n = e.sent), (e.next = 14);
                            break;
                          case 10:
                            return (
                              (e.prev = 10),
                              (e.t0 = e.catch(4)),
                              t.forEach(function (e) {
                                return (0,
                                e.reject)(new Error("Failed to send batch call"));
                              }),
                              e.abrupt("return")
                            );
                          case 14:
                            if (n.ok) {
                              e.next = 17;
                              break;
                            }
                            return (
                              t.forEach(function (e) {
                                return (0,
                                e.reject)(new pe("".concat(n.status, ": ").concat(n.statusText), -32e3));
                              }),
                              e.abrupt("return")
                            );
                          case 17:
                            return (e.prev = 17), (e.next = 20), n.json();
                          case 20:
                            (r = e.sent), (e.next = 27);
                            break;
                          case 23:
                            return (
                              (e.prev = 23),
                              (e.t1 = e.catch(17)),
                              t.forEach(function (e) {
                                return (0,
                                e.reject)(new Error("Failed to parse JSON response"));
                              }),
                              e.abrupt("return")
                            );
                          case 27:
                            (i = t.reduce(function (e, t) {
                              return (e[t.request.id] = t), e;
                            }, {})),
                              (a = ce(r));
                            try {
                              for (a.s(); !(s = a.n()).done; )
                                (l = s.value),
                                  (u = i[l.id]),
                                  (d = u.resolve),
                                  (p = u.reject),
                                  (f = u.request.method),
                                  "error" in l
                                    ? p(
                                        new pe(
                                          null == l ||
                                          null === (h = l.error) ||
                                          void 0 === h
                                            ? void 0
                                            : h.message,
                                          null == l ||
                                          null === (m = l.error) ||
                                          void 0 === m
                                            ? void 0
                                            : m.code,
                                          null == l ||
                                          null === (x = l.error) ||
                                          void 0 === x
                                            ? void 0
                                            : x.data
                                        )
                                      )
                                    : "result" in l && d
                                    ? d(l.result)
                                    : p(
                                        new pe(
                                          "Received unexpected JSON-RPC response to ".concat(
                                            f,
                                            " request."
                                          ),
                                          -32e3,
                                          l
                                        )
                                      );
                            } catch (e) {
                              a.e(e);
                            } finally {
                              a.f();
                            }
                          case 30:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [
                      [4, 10],
                      [17, 23],
                    ]
                  );
                })
              )
            ),
            (0, i.Z)(this, "sendAsync", function (e, t) {
              c.request(e.method, e.params)
                .then(function (n) {
                  return t(null, { jsonrpc: "2.0", id: e.id, result: n });
                })
                .catch(function (e) {
                  return t(e, null);
                });
            }),
            (0, i.Z)(
              this,
              "request",
              (function () {
                var e = (0, r.Z)(
                  o().mark(function e(t, n) {
                    var r, i;
                    return o().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ("string" == typeof t) {
                              e.next = 2;
                              break;
                            }
                            return e.abrupt(
                              "return",
                              c.request(t.method, t.params)
                            );
                          case 2:
                            if ("eth_chainId" !== t) {
                              e.next = 4;
                              break;
                            }
                            return e.abrupt(
                              "return",
                              "0x".concat(c.chainId.toString(16))
                            );
                          case 4:
                            return (
                              (i = new Promise(function (e, r) {
                                c.batch.push({
                                  request: {
                                    jsonrpc: "2.0",
                                    id: c.nextId++,
                                    method: t,
                                    params: n,
                                  },
                                  resolve: e,
                                  reject: r,
                                });
                              })),
                              (c.batchTimeoutId =
                                null !== (r = c.batchTimeoutId) && void 0 !== r
                                  ? r
                                  : setTimeout(
                                      c.clearBatch,
                                      c.batchWaitTimeMs
                                    )),
                              e.abrupt("return", i)
                            );
                          case 7:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })()
            ),
            (this.connector = t),
            (this.chainId = n),
            (this.url = a);
          var l = new URL(a);
          (this.host = l.host),
            (this.path = l.pathname),
            (this.batchWaitTimeMs = null != s ? s : 50);
        },
        he = (function (e) {
          (0, ne.Z)(l, e);
          var t,
            n,
            a,
            s,
            c = ue(l);
          function l(e) {
            var t,
              n = e.urls,
              r = e.defaultChainId;
            return (
              (0, te.Z)(this, l),
              (0, se.Z)(
                r || 1 === Object.keys(n).length,
                "defaultChainId is a required argument with >1 url"
              ),
              (t = c.call(this, {
                supportedChainIds: Object.keys(n).map(function (e) {
                  return Number(e);
                }),
              })),
              (0, i.Z)((0, ee.Z)(t), "providers", void 0),
              (0, i.Z)((0, ee.Z)(t), "currentChainId", void 0),
              (t.currentChainId = null != r ? r : Number(Object.keys(n)[0])),
              (t.providers = Object.keys(n).reduce(function (e, r) {
                return (
                  (e[Number(r)] = new fe(
                    (0, ee.Z)(t),
                    Number(r),
                    n[Number(r)]
                  )),
                  e
                );
              }, {})),
              t
            );
          }
          return (
            (0, $.Z)(l, [
              {
                key: "provider",
                get: function () {
                  return this.providers[this.currentChainId];
                },
              },
              {
                key: "activate",
                value:
                  ((s = (0, r.Z)(
                    o().mark(function e() {
                      return o().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return e.abrupt("return", {
                                  provider: this.providers[this.currentChainId],
                                  chainId: this.currentChainId,
                                  account: null,
                                });
                              case 1:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function () {
                    return s.apply(this, arguments);
                  }),
              },
              {
                key: "getProvider",
                value:
                  ((a = (0, r.Z)(
                    o().mark(function e() {
                      return o().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return e.abrupt(
                                  "return",
                                  this.providers[this.currentChainId]
                                );
                              case 1:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function () {
                    return a.apply(this, arguments);
                  }),
              },
              {
                key: "getChainId",
                value:
                  ((n = (0, r.Z)(
                    o().mark(function e() {
                      return o().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return e.abrupt("return", this.currentChainId);
                              case 1:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function () {
                    return n.apply(this, arguments);
                  }),
              },
              {
                key: "getAccount",
                value:
                  ((t = (0, r.Z)(
                    o().mark(function e() {
                      return o().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return e.abrupt("return", null);
                            case 1:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  )),
                  function () {
                    return t.apply(this, arguments);
                  }),
              },
              { key: "deactivate", value: function () {} },
              {
                key: "changeChainId",
                value: function (e) {
                  if (!(e in this.providers))
                    throw new Error("Unsupported chain ID: ".concat(e));
                  (this.currentChainId = e),
                    this.emitUpdate({
                      chainId: e,
                      account: null,
                      provider: this.providers[e],
                    });
                },
              },
            ]),
            l
          );
        })(oe.Q),
        me = window.nft.INFURA_KEY,
        xe =
          ((de = {}),
          (0, i.Z)(de, c.MAINNET, "https://mainnet.infura.io/v3/".concat(me)),
          (0, i.Z)(de, c.RINKEBY, "https://rinkeby.infura.io/v3/".concat(me)),
          (0, i.Z)(de, c.ROPSTEN, "https://ropsten.infura.io/v3/".concat(me)),
          (0, i.Z)(de, c.GOERLI, "https://goerli.infura.io/v3/".concat(me)),
          (0, i.Z)(de, c.KOVAN, "https://kovan.infura.io/v3/".concat(me)),
          (0, i.Z)(de, c.HARMONY, "https://rpc.s0.t.hmny.io"),
          (0, i.Z)(de, c.BINANCE, "https://bsc-dataseed.binance.org/"),
          (0, i.Z)(de, c.ARBITRUM_KOVAN, "https://kovan5.arbitrum.io/rpc"),
          (0, i.Z)(de, c.ARBITRUM_ONE, "https://arb1.arbitrum.io/rpc"),
          de),
        ge = [
          c.MAINNET,
          c.KOVAN,
          c.GOERLI,
          c.RINKEBY,
          c.ROPSTEN,
          c.HARMONY,
          c.BINANCE,
          c.ARBITRUM_KOVAN,
          c.ARBITRUM_ONE,
        ],
        ve =
          (new he({
            urls: xe,
            defaultChainId: "PROD" === window.nft.ENV ? c.MAINNET : c.GOERLI,
          }),
          new J._k({ supportedChainIds: ge })),
        be = new p.lK({ supportedChainIds: ge }),
        we = new X.z({
          supportedChainIds: ge,
          rpc: xe,
          qrcode: !0,
          pollingInterval: 15e3,
        }),
        ye = new f.r({
          supportedChainIds: ge,
          rpc: xe,
          qrcode: !0,
          qrcodeModal: Q,
          pollingInterval: 15e3,
        }),
        Ae = new l.J({
          url: xe[1],
          appName: "Gamestop NFT",
          appLogoUrl: s,
          darkMode: !0,
        }),
        ke = (function () {
          var e = (0, r.Z)(
            o().mark(function e(t) {
              var n;
              return o().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        (void 0 !== window.web3 &&
                          (n = window.web3.currentProvider),
                        void 0 !== window.ethereum && (n = window.ethereum),
                        n)
                      ) {
                        e.next = 11;
                        break;
                      }
                      if (!t) {
                        e.next = 9;
                        break;
                      }
                      return (e.next = 6), t.getProvider();
                    case 6:
                      (e.t0 = e.sent), (e.next = 10);
                      break;
                    case 9:
                      e.t0 = new (d().providers.HttpProvider)(
                        xe["PROD" === window.nft.ENV ? 1 : 5]
                      );
                    case 10:
                      n = e.t0;
                    case 11:
                      return e.abrupt("return", n);
                    case 12:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })();
    },
    76049: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => a });
      var r = n(3283),
        i = n.n(r);
      function a(e) {
        return e ? new (i())(e) : new (i())();
      }
    },
    61341: (e, t, n) => {
      "use strict";
      n.d(t, { z: () => f, Z: () => h });
      var r = n(15861),
        i = n(87757),
        a = n.n(i),
        o = n(30567),
        s = n(15671),
        c = n(43144),
        l = n(4942),
        u = null,
        d = new ((function () {
          function e() {
            (0, s.Z)(this, e), (0, l.Z)(this, "owner", Promise.resolve());
          }
          return (
            (0, c.Z)(e, [
              {
                key: "enter",
                value: function () {
                  var e = function () {},
                    t = new Promise(function (t) {
                      e = t;
                    }),
                    n = this.owner.then(function () {
                      return e;
                    });
                  return (this.owner = t), n;
                },
              },
            ]),
            e
          );
        })())(),
        p = null,
        f = "botblock";
      function h() {
        return m.apply(this, arguments);
      }
      function m() {
        return (m = (0, r.Z)(
          a().mark(function e() {
            var t, n;
            return a().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (window.nft.HCAPTCHA_ON) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return", "");
                    case 2:
                      return (e.next = 4), d.enter();
                    case 4:
                      return (
                        (t = e.sent),
                        (e.prev = 5),
                        (e.next = 8),
                        window.hCaptchaReady
                      );
                    case 8:
                      return (
                        u ||
                          (((u = document.createElement("div")).style.display =
                            "none"),
                          document.body.appendChild(u)),
                        p ||
                          (p = window.hcaptcha.render(u, {
                            size: "invisible",
                            sitekey: window.nft.HCAPTCHA_SITE_KEY,
                          })),
                        (e.next = 12),
                        window.hcaptcha.execute(p, { async: !0 })
                      );
                    case 12:
                      return (n = e.sent), e.abrupt("return", n.response);
                    case 16:
                      throw (
                        ((e.prev = 16),
                        (e.t0 = e.catch(5)),
                        (0, o._)("hCaptcha exception"),
                        window.dispatchEvent(new Event(f)),
                        e.t0)
                      );
                    case 21:
                      return (e.prev = 21), t(), e.finish(21);
                    case 24:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[5, 16, 21, 24]]
            );
          })
        )).apply(this, arguments);
      }
    },
    13317: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => c });
      var r = n(92514),
        i = n(30950),
        a = n(84484),
        o = n(97452),
        s = n(37416);
      function c(e) {
        return e instanceof i._k
          ? r.Mt.MetaMask
          : e instanceof s.r || e instanceof a.z
          ? r.Mt.WalletConnect
          : e instanceof o.J
          ? r.Mt.WalletLink
          : r.Mt.MetaMask;
      }
    },
    48866: (e, t, n) => {
      "use strict";
      function r(e) {
        e("/login", { state: { redirect: window.location.pathname } });
      }
      function i(e) {
        e("/marketplace", { state: { redirect: window.location.pathname } });
      }
      n.d(t, { m: () => r, u: () => i });
    },
    55646: (e, t, n) => {
      "use strict";
      n.d(t, { w6: () => l, ZP: () => p, Ko: () => h });
      var r = n(15861),
        i = n(87757),
        a = n.n(i),
        o = n(61973),
        s = n(61341),
        c = n(30567),
        l = !1,
        u = {},
        d = (function () {
          var e = (0, r.Z)(
            a().mark(function e(t) {
              return a().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!l) {
                        e.next = 4;
                        break;
                      }
                      return (e.next = 3), (0, s.Z)();
                    case 3:
                      t.Token = e.sent;
                    case 4:
                      return e.abrupt("return", t);
                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })();
      function p(e, t) {
        return f.apply(this, arguments);
      }
      function f() {
        return (f = (0, r.Z)(
          a().mark(function e(t, n) {
            var r, i, s, l, p, f, h, m, x;
            return a().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (((r = t.toString()), !u[r])) {
                        e.next = 5;
                        break;
                      }
                      if (
                        ((i = u[r]),
                        (s = i.data),
                        (l = i.expiration),
                        !(new Date() <= l))
                      ) {
                        e.next = 5;
                        break;
                      }
                      return e.abrupt("return", s);
                    case 5:
                      return (
                        (e.prev = 5),
                        (e.t0 = fetch),
                        (e.t1 = t),
                        (e.next = 10),
                        d({})
                      );
                    case 10:
                      return (
                        (e.t2 = e.sent),
                        (e.t3 = { method: "GET", headers: e.t2 }),
                        (e.next = 14),
                        (0, e.t0)(e.t1, e.t3)
                      );
                    case 14:
                      if ((p = e.sent).ok) {
                        e.next = 17;
                        break;
                      }
                      throw new Error(p.statusText);
                    case 17:
                      return (e.next = 19), p.json();
                    case 19:
                      return (
                        (f = e.sent),
                        (h = p.headers.get("cache-control")) &&
                          ((m = h.match(/max-age=(\d+)/)),
                          (x = m ? parseInt(m[1], 10) : -1) > 0 &&
                            (u[r] = {
                              data: f,
                              expiration: (0, o.Z)(new Date(), x),
                            })),
                        void 0 !== n && n(),
                        e.abrupt("return", f)
                      );
                    case 26:
                      throw (
                        ((e.prev = 26),
                        (e.t4 = e.catch(5)),
                        (0, c._)(e.t4),
                        e.t4)
                      );
                    case 30:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[5, 26]]
            );
          })
        )).apply(this, arguments);
      }
      function h(e) {
        return m.apply(this, arguments);
      }
      function m() {
        return (
          (m = (0, r.Z)(
            a().mark(function e(t) {
              var n,
                r,
                i,
                o = arguments;
              return a().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = o.length > 1 && void 0 !== o[1] ? o[1] : {}),
                          (e.prev = 1),
                          (e.t0 = fetch),
                          (e.t1 = t),
                          (e.next = 6),
                          d({ "Content-Type": "application/json" })
                        );
                      case 6:
                        return (
                          (e.t2 = e.sent),
                          (e.t3 = JSON.stringify(n)),
                          (e.t4 = {
                            method: "POST",
                            headers: e.t2,
                            body: e.t3,
                          }),
                          (e.next = 11),
                          (0, e.t0)(e.t1, e.t4)
                        );
                      case 11:
                        if ((r = e.sent).ok) {
                          e.next = 14;
                          break;
                        }
                        throw new Error(r.statusText);
                      case 14:
                        return (e.next = 16), r.json();
                      case 16:
                        return (i = e.sent), e.abrupt("return", i);
                      case 20:
                        throw (
                          ((e.prev = 20),
                          (e.t5 = e.catch(1)),
                          (0, c._)(e.t5),
                          e.t5)
                        );
                      case 24:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 20]]
              );
            })
          )),
          m.apply(this, arguments)
        );
      }
    },
    23061: (e, t, n) => {
      "use strict";
      n.d(t, { ZB: () => s, r4: () => r, VJ: () => c });
      var r,
        i,
        a = n(14189),
        o =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
      function s(e) {
        return "data:image/svg+xml;utf8,\n  ".concat(
          encodeURIComponent((0, a.kb)({ seed: e.toLowerCase() }))
        );
      }
      function c(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "image",
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : r.Large2,
          a =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : i.WebP;
        if (e.startsWith("ipfs://")) {
          var s = e.replace("ipfs://", window.nft.IPFS_URL);
          return null != t && t.startsWith("image")
            ? "".concat(s, "?img-width=").concat(n, "&image-format=").concat(a)
            : s;
        }
        if (e.startsWith("https://")) return e;
        if (-1 !== e.indexOf("://")) return o;
        if (e.startsWith("public/")) {
          var c,
            l = e.replace("public/", "");
          switch (n) {
            case r.Avatar:
              c = "avatar";
              break;
            case r.Expanded:
              c = "expanded";
              break;
            case r.Large1:
              c = "large1";
              break;
            case r.Large2:
              c = "large2";
              break;
            case r.Small1:
              c = "small1";
              break;
            case r.Small2:
              c = "small2";
              break;
            default:
              c = "large2";
          }
          return ""
            .concat(window.nft.STATIC_CONTENT_URL)
            .concat(l, "?img-width=")
            .concat(c, "&img-format=")
            .concat(a);
        }
        return window.nft.S3_URL + e;
      }
      !(function (e) {
        (e[(e.Avatar = 200)] = "Avatar"),
          (e[(e.Expanded = 1600)] = "Expanded"),
          (e[(e.Large1 = 550)] = "Large1"),
          (e[(e.Large2 = 900)] = "Large2"),
          (e[(e.Small1 = 400)] = "Small1"),
          (e[(e.Small2 = 660)] = "Small2");
      })(r || (r = {})),
        (function (e) {
          (e.JPEG = "JPEG"),
            (e.PNG = "PNG"),
            (e.WebP = "WebP"),
            (e.GIF = "GIF");
        })(i || (i = {}));
    },
    9036: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => a });
      var r = n(3283),
        i = n.n(r);
      function a(e, t, n) {
        var r = i().utils.toBN(e);
        return (
          n && r.add(i().utils.toBN(n)),
          r.gt(i().utils.toBN(i().utils.toWei(t)))
        );
      }
    },
    92987: (e, t, n) => {
      "use strict";
      n.d(t, {
        Zj: () => u,
        o0: () => d,
        mm: () => p,
        PH: () => f,
        Nr: () => h,
        Jx: () => m,
        JP: () => x,
        wR: () => r,
        iK: () => g,
        HI: () => v,
      });
      var r,
        i = n(97452),
        a = n(52733),
        o = n(37416),
        s = n(74556),
        c = n(84484),
        l = n(40140),
        u = "login-info",
        d = "session-info";
      function p(e) {
        localStorage.setItem(
          u,
          JSON.stringify({ loggedIn: !0, walletType: g(e) })
        );
      }
      function f() {
        sessionStorage.setItem(d, JSON.stringify({ showBanner: !0 }));
      }
      function h() {
        var e = localStorage.getItem(u);
        if (e)
          try {
            return JSON.parse(e);
          } catch (e) {
            return null;
          }
        return null;
      }
      function m() {
        var e = sessionStorage.getItem(d);
        if (e)
          try {
            return JSON.parse(e);
          } catch (e) {
            return null;
          }
        return null;
      }
      function x() {
        localStorage.removeItem(u), sessionStorage.removeItem(d);
      }
      function g(e) {
        return e instanceof s._k
          ? r.Injected
          : e instanceof a.lK
          ? r.GamestopExtension
          : e instanceof o.r
          ? r.GamestopMobile
          : e instanceof c.z
          ? r.WalletConnect
          : e instanceof i.J
          ? r.WalletLink
          : r.Unknown;
      }
      function v(e) {
        switch (e) {
          case r.Injected:
            return l.Lj;
          case r.GamestopMobile:
            return l.xG;
          case r.GamestopExtension:
            return l.OU;
          case r.WalletConnect:
            return l.Lw;
          case r.WalletLink:
            return l.H5;
          case r.Unknown:
          default:
            return l.Lj;
        }
      }
      !(function (e) {
        (e.Unknown = "Unknown"),
          (e.Injected = "Injected"),
          (e.GamestopExtension = "GamestopExtension"),
          (e.GamestopMobile = "GamestopMobile"),
          (e.WalletLink = "WalletLink"),
          (e.WalletConnect = "WalletConnect");
      })(r || (r = {}));
    },
    30567: (e, t, n) => {
      "use strict";
      n.d(t, { _: () => l, c: () => u });
      var r = n(62512),
        i = n(60976),
        a = n(25108),
        o = n(23085).Buffer,
        s = { errorLogs: [], snags: [], windowErrors: [] },
        c = a.error.bind(a);
      function l(e) {
        var t = !0;
        try {
          (0, i.w6)(s, JSON.stringify((0, r.OJ)(e)));
        } catch (e) {
          t = !1;
        }
        "PROD" !== window.nft.ENV && c("pingable=".concat(t), "Snag", e);
      }
      function u() {
        var e = s;
        return e.errorLogs.length || e.windowErrors.length
          ? ((s = { errorLogs: [], snags: [], windowErrors: [] }),
            o.from(JSON.stringify(e), "utf-8").toString("base64"))
          : "";
      }
      (a.error = function () {
        for (
          var e = !0, t = arguments.length, n = new Array(t), r = 0;
          r < t;
          r++
        )
          n[r] = arguments[r];
        try {
          (0, i.Xi)(s, JSON.stringify(n));
        } catch (t) {
          e = !1;
        }
        "PROD" !== window.nft.ENV &&
          c.apply(void 0, ["pingable=".concat(e)].concat(n));
      }),
        window.addEventListener("error", function (e) {
          var t = !0;
          try {
            (0, i.v1)(s, e.message, e.filename);
          } catch (e) {
            t = !1;
          }
          "PROD" !== window.nft.ENV &&
            c("pingable=".concat(t), "Window error", e);
        });
    },
    53667: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => r });
      const r = {
        balances: "".concat(window.nft.MARKETPLACE_SVC_URL, "/balances"),
        email: "".concat(window.nft.SALESFORCE_SVC_URL, "/v1/submit"),
        history: "".concat(window.nft.MARKETPLACE_SVC_URL, "/history"),
        like: "".concat(window.nft.MARKETPLACE_SVC_URL, "/like"),
        likes: "".concat(window.nft.MARKETPLACE_SVC_URL, "/likes"),
        nftBalances: "".concat(window.nft.MARKETPLACE_SVC_URL, "/nftBalances"),
        rates: "".concat(window.nft.MARKETPLACE_SVC_URL, "/rates"),
        search: "".concat(window.nft.MARKETPLACE_SVC_URL, "/search"),
        tradeInfo: "".concat(window.nft.MARKETPLACE_SVC_URL, "/tradeInfo"),
        withdrawTokenInfo: "".concat(
          window.nft.MARKETPLACE_SVC_URL,
          "/withdrawTokenInfo"
        ),
        withdrawInfo: "".concat(
          window.nft.MARKETPLACE_SVC_URL,
          "/withdrawInfo"
        ),
        tradePrimary: "".concat(
          window.nft.MARKETPLACE_SVC_URL,
          "/tradePrimary"
        ),
        tradeSecondary: "".concat(
          window.nft.MARKETPLACE_SVC_URL,
          "/tradeSecondary"
        ),
        transferInfo: "".concat(
          window.nft.MARKETPLACE_SVC_URL,
          "/transferInfo"
        ),
        transferTokenInfo: "".concat(
          window.nft.MARKETPLACE_SVC_URL,
          "/transferTokenInfo"
        ),
        transferNft: "".concat(window.nft.MARKETPLACE_SVC_URL, "/transferNft"),
        withdrawNft: "".concat(window.nft.MARKETPLACE_SVC_URL, "/withdrawNft"),
        updateEddsaKeyInfo: "".concat(
          window.nft.MARKETPLACE_SVC_URL,
          "/updateEddsaKeyInfo"
        ),
        isAccountSetup: "".concat(
          window.nft.MARKETPLACE_SVC_URL,
          "/isAccountSetup"
        ),
        listNftForSale: "".concat(
          window.nft.MARKETPLACE_SVC_URL,
          "/listNftForSale"
        ),
        listNftForSaleInfo: "".concat(
          window.nft.MARKETPLACE_SVC_URL,
          "/listNftForSaleInfo"
        ),
        unlistNftForSale: "".concat(window.nft.MARKETPLACE_SVC_URL, "/sell"),
        primaryMarketplaceNftFee: "".concat(
          window.nft.MARKETPLACE_SVC_URL,
          "/primaryMarketplaceNftFee"
        ),
        revealHiddenItem: "".concat(
          window.nft.MARKETPLACE_SVC_URL,
          "/revealHiddenItem"
        ),
        secondaryMarketplaceNftFee: "".concat(
          window.nft.MARKETPLACE_SVC_URL,
          "/secondaryMarketplaceNftFee"
        ),
        secondaryMarketplaceNftLimits: "".concat(
          window.nft.MARKETPLACE_SVC_URL,
          "/secondaryMarketplaceNftLimits"
        ),
        setProfile: "".concat(window.nft.MARKETPLACE_SVC_URL, "/setProfile"),
        getProfile: "".concat(window.nft.MARKETPLACE_SVC_URL, "/getProfile"),
        sendVerificationEmail: "".concat(
          window.nft.MARKETPLACE_SVC_URL,
          "/sendVerificationEmail"
        ),
        getAvailableSubscriptionTopics: "".concat(
          window.nft.MARKETPLACE_SVC_URL,
          "/getAvailableSubscriptionTopics"
        ),
        accountHistory: "".concat(
          window.nft.MARKETPLACE_SVC_URL,
          "/userAccountHistory"
        ),
        displayNames: "".concat(
          window.nft.MARKETPLACE_SVC_URL,
          "/displayNames"
        ),
        tokenId: "".concat(window.nft.MARKETPLACE_SVC_URL, "/tokenId"),
        layer1NftBalances: "".concat(
          window.nft.MARKETPLACE_SVC_URL,
          "/layer1NftBalances"
        ),
        toggleNftVisibility: "".concat(
          window.nft.MARKETPLACE_SVC_URL,
          "/toggleNftVisibility"
        ),
        getWyreReservation: "".concat(
          window.nft.MARKETPLACE_SVC_URL,
          "/wyreReservationId"
        ),
        getPublicProfile: "".concat(
          window.nft.MARKETPLACE_SVC_URL,
          "/getPublicProfile"
        ),
        submitCollection: "".concat(
          window.nft.MARKETPLACE_SVC_URL,
          "/createCollection"
        ),
        createDraftNft: "".concat(
          window.nft.MARKETPLACE_SVC_URL,
          "/createDraftNft"
        ),
        updateDraftNft: "".concat(
          window.nft.MARKETPLACE_SVC_URL,
          "/updateDraftNft"
        ),
        publishDraftNft: "".concat(
          window.nft.MARKETPLACE_SVC_URL,
          "/publishDraftNft"
        ),
        getPublishDraftNftInfo: "".concat(
          window.nft.MARKETPLACE_SVC_URL,
          "/getPublishDraftNftInfo"
        ),
        getCreatorCollections: "".concat(
          window.nft.MARKETPLACE_SVC_URL,
          "/getCreatorCollections"
        ),
        userInfo: "".concat(window.nft.MARKETPLACE_SVC_URL, "/userInfo"),
        getCreatorDraftNfts: "".concat(
          window.nft.MARKETPLACE_SVC_URL,
          "/getCreatorDraftNfts"
        ),
        cloudSearch: "".concat(window.nft.MARKETPLACE_SVC_URL, "/cloudSearch"),
        support: "https://support.nft.gamestop.com",
        loopringExplorer: "https://explorer.loopring.io",
      };
    },
    30666: (e, t, n) => {
      "use strict";
      n.d(t, {
        a_: () => o,
        Y5: () => s,
        YQ: () => c,
        nr: () => l,
        pe: () => u,
        S2: () => d,
        my: () => f,
      });
      var r = n(46441),
        i = n(3283),
        a = n.n(i),
        o = function (e) {
          return e.length
            ? e.substr(0, 6) + "..." + e.substr(e.length - 4, e.length)
            : "";
        },
        s = function (e) {
          var t,
            n,
            i = (0, r.dF)(
              "".concat(
                Number(e).toLocaleString("fullwide", { useGrouping: !1 })
              )
            ),
            a = 100 * parseFloat(i);
          return 0 !== a && a < 1
            ? "< 0.01"
            : a >= 1e5
            ? ((t = Number(BigInt(a.toFixed())) / 100),
              (n = [
                { value: 1, symbol: "" },
                { value: 1e3, symbol: "k" },
                { value: 1e6, symbol: "M" },
                { value: 1e9, symbol: "B" },
                { value: 1e12, symbol: "T" },
                { value: 1e15, symbol: "P" },
                { value: 1e18, symbol: "E" },
              ]
                .slice()
                .reverse()
                .find(function (e) {
                  return t >= e.value;
                }))
                ? (t / n.value)
                    .toFixed(1)
                    .replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + n.symbol
                : "0")
            : "".concat(parseFloat(i).toFixed(2));
        },
        c = function (e) {
          if (e < 0.01 && e > 0) {
            var t = p(e);
            return "$" + e.toFixed(t);
          }
          return (
            "$" +
            parseFloat(e.toFixed(2)).toLocaleString(void 0, {
              minimumFractionDigits: 2,
            })
          );
        },
        l = function (e) {
          var t = parseFloat(e);
          if (t < 0.001 && t > 0) {
            var n = p(t);
            return t.toFixed(n) + " ETH";
          }
          return (
            (Math.round(1e3 * parseFloat(e)) / 1e3).toLocaleString() + " ETH"
          );
        },
        u = function (e) {
          var t = a().utils.fromWei(e),
            n = parseFloat(t);
          if (n < 0.001 && n > 0) {
            var r = p(n);
            return n.toFixed(r) + " ETH";
          }
          return (
            (Math.round(1e3 * parseFloat(t)) / 1e3).toLocaleString() + " ETH"
          );
        },
        d = function (e, t) {
          return "".concat(u(e), " (").concat(c(t), ")");
        };
      function p(e) {
        for (var t = 0; e < 1; ) (e *= 10), t++;
        return t;
      }
      var f = function (e) {
        return e.match(
          new RegExp(
            /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?/i
          )
        );
      };
    },
    63641: (e, t, n) => {
      "use strict";
      n.d(t, { Eo: () => i, XA: () => a, a0: () => o });
      var r = n(72132);
      function i(e) {
        var t,
          n = null !== (t = e.message) && void 0 !== t ? t : e;
        r.Am.error(n);
      }
      function a(e) {
        r.Am.success(e);
      }
      function o(e, t) {
        switch (e) {
          case "toobig":
            i("File too large. Max file size is ".concat(t, " MB"));
            break;
          case "unsupportedtype":
            i("Unsupported file type");
            break;
          case "multiplefiles":
            i("Too many files uploaded. Must upload only one file");
            break;
          default:
            i("Unexpected error while loading file");
        }
      }
    },
    86435: (e, t, n) => {
      "use strict";
      n.d(t, { AP: () => b });
      var r = n(15861),
        i = n(43144),
        a = n(97326),
        o = n(4942),
        s = n(15671),
        c = n(60136),
        l = n(6215),
        u = n(61120),
        d = n(72407),
        p = n(87757),
        f = n.n(p),
        h = n(26939),
        m = n(25108);
      function x(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = (0, u.Z)(e);
          if (t) {
            var i = (0, u.Z)(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return (0, l.Z)(this, n);
        };
      }
      var g = "PROD" !== window.nft.ENV,
        v = (function (e) {
          (0, c.Z)(n, e);
          var t = x(n);
          function n() {
            var e;
            return (
              (0, s.Z)(this, n),
              ((e = t.call(this)).name = e.constructor.name),
              (e.message = "The user rejected the request."),
              e
            );
          }
          return n;
        })((0, d.Z)(Error)),
        b = (function (e) {
          (0, c.Z)(b, e);
          var t,
            l,
            u,
            d,
            p,
            h = x(b);
          function b(e) {
            var t, n, r, i;
            return (
              (0, s.Z)(this, b),
              (t = h.call(this, {
                supportedChainIds:
                  ((n = e),
                  (r = n.supportedChainIds),
                  (i = n.rpc),
                  r ||
                    (i
                      ? Object.keys(i).map(function (e) {
                          return Number(e);
                        })
                      : void 0)),
              })),
              (0, o.Z)((0, a.Z)(t), "config", void 0),
              (0, o.Z)((0, a.Z)(t), "walletConnectProvider", void 0),
              (t.config = e),
              (t.handleChainChanged = t.handleChainChanged.bind((0, a.Z)(t))),
              (t.handleAccountsChanged = t.handleAccountsChanged.bind(
                (0, a.Z)(t)
              )),
              (t.handleDisconnect = t.handleDisconnect.bind((0, a.Z)(t))),
              t
            );
          }
          return (
            (0, i.Z)(b, [
              {
                key: "handleChainChanged",
                value: function (e) {
                  g && m.log("Handling 'chainChanged' event with payload", e),
                    this.emitUpdate({ chainId: e });
                },
              },
              {
                key: "handleAccountsChanged",
                value: function (e) {
                  m.log("Handling 'accountsChanged' event with payload", e),
                    this.emitUpdate({ account: e[0] });
                },
              },
              {
                key: "handleDisconnect",
                value: function () {
                  m.log("Handling 'disconnect' event"),
                    this.emitDeactivate(),
                    this.walletConnectProvider &&
                      (this.walletConnectProvider.stop(),
                      this.walletConnectProvider.removeListener(
                        "chainChanged",
                        this.handleChainChanged
                      ),
                      this.walletConnectProvider.removeListener(
                        "accountsChanged",
                        this.handleAccountsChanged
                      ),
                      (this.walletConnectProvider = void 0)),
                    this.emitDeactivate();
                },
              },
              {
                key: "activate",
                value:
                  ((p = (0, r.Z)(
                    f().mark(function e() {
                      var t, r;
                      return f().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (this.walletConnectProvider) {
                                  e.next = 5;
                                  break;
                                }
                                return (
                                  (e.next = 3),
                                  Promise.all([n.e(90), n.e(485)])
                                    .then(n.bind(n, 72485))
                                    .then(function (e) {
                                      var t;
                                      return null !==
                                        (t = null == e ? void 0 : e.default) &&
                                        void 0 !== t
                                        ? t
                                        : e;
                                    })
                                );
                              case 3:
                                (t = e.sent),
                                  (this.walletConnectProvider = new t(
                                    this.config
                                  ));
                              case 5:
                                if (this.walletConnectProvider.wc.connected) {
                                  e.next = 9;
                                  break;
                                }
                                return (
                                  (e.next = 8),
                                  this.walletConnectProvider.wc.createSession({
                                    chainId:
                                      this.supportedChainIds &&
                                      this.supportedChainIds.length > 0
                                        ? this.supportedChainIds[0]
                                        : 1,
                                  })
                                );
                              case 8:
                                this.emit(
                                  "URI_AVAILABLE",
                                  this.walletConnectProvider.wc.uri
                                );
                              case 9:
                                return (
                                  (e.next = 11),
                                  this.walletConnectProvider
                                    .enable()
                                    .then(function (e) {
                                      return e[0];
                                    })
                                    .catch(function (e) {
                                      if ("User closed modal" === e.message)
                                        throw new v();
                                      throw e;
                                    })
                                );
                              case 11:
                                return (
                                  (r = e.sent),
                                  this.walletConnectProvider.on(
                                    "disconnect",
                                    this.handleDisconnect
                                  ),
                                  this.walletConnectProvider.on(
                                    "chainChanged",
                                    this.handleChainChanged
                                  ),
                                  this.walletConnectProvider.on(
                                    "accountsChanged",
                                    this.handleAccountsChanged
                                  ),
                                  e.abrupt("return", {
                                    provider: this.walletConnectProvider,
                                    account: r,
                                  })
                                );
                              case 16:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function () {
                    return p.apply(this, arguments);
                  }),
              },
              {
                key: "getProvider",
                value:
                  ((d = (0, r.Z)(
                    f().mark(function e() {
                      return f().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return e.abrupt(
                                  "return",
                                  this.walletConnectProvider
                                );
                              case 1:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function () {
                    return d.apply(this, arguments);
                  }),
              },
              {
                key: "getChainId",
                value:
                  ((u = (0, r.Z)(
                    f().mark(function e() {
                      return f().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return e.abrupt(
                                  "return",
                                  this.walletConnectProvider.send("eth_chainId")
                                );
                              case 1:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function () {
                    return u.apply(this, arguments);
                  }),
              },
              {
                key: "getAccount",
                value:
                  ((l = (0, r.Z)(
                    f().mark(function e() {
                      return f().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return e.abrupt(
                                  "return",
                                  this.walletConnectProvider
                                    .send("eth_accounts")
                                    .then(function (e) {
                                      return e[0];
                                    })
                                );
                              case 1:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function () {
                    return l.apply(this, arguments);
                  }),
              },
              {
                key: "deactivate",
                value: function () {
                  this.walletConnectProvider &&
                    (this.walletConnectProvider.stop(),
                    this.walletConnectProvider.removeListener(
                      "disconnect",
                      this.handleDisconnect
                    ),
                    this.walletConnectProvider.removeListener(
                      "chainChanged",
                      this.handleChainChanged
                    ),
                    this.walletConnectProvider.removeListener(
                      "accountsChanged",
                      this.handleAccountsChanged
                    ));
                },
              },
              {
                key: "throwError",
                value: function () {
                  throw new v();
                },
              },
              {
                key: "close",
                value:
                  ((t = (0, r.Z)(
                    f().mark(function e() {
                      var t, n;
                      return f().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  null === (t = this.walletConnectProvider) ||
                                  void 0 === t
                                    ? void 0
                                    : t.close()
                                );
                              case 2:
                                return (
                                  (e.next = 4),
                                  null === (n = this.walletConnectProvider) ||
                                  void 0 === n
                                    ? void 0
                                    : n.killSession()
                                );
                              case 4:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function () {
                    return t.apply(this, arguments);
                  }),
              },
            ]),
            b
          );
        })(h.Q);
    },
    52733: (e, t, n) => {
      "use strict";
      n.d(t, { lK: () => C });
      var r = n(4942),
        i = n(15861),
        a = n(43144),
        o = n(97326),
        s = n(15671),
        c = n(60136),
        l = n(6215),
        u = n(61120),
        d = n(72407),
        p = n(87757),
        f = n.n(p),
        h = n(26939),
        m = n(45298),
        x = n(25108);
      function g(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function v(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? g(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : g(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function b(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = (0, u.Z)(e);
          if (t) {
            var i = (0, u.Z)(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return (0, l.Z)(this, n);
        };
      }
      var w = "PROD" !== window.nft.ENV;
      function y(e) {
        return e.hasOwnProperty("result") ? e.result : e;
      }
      var A = (function (e) {
          (0, c.Z)(n, e);
          var t = b(n);
          function n() {
            var e;
            return (
              (0, s.Z)(this, n),
              ((e = t.call(this)).name = e.constructor.name),
              (e.message =
                "No Ethereum provider was found on window.gamestop."),
              e
            );
          }
          return n;
        })((0, d.Z)(Error)),
        k = (function (e) {
          (0, c.Z)(n, e);
          var t = b(n);
          function n() {
            var e;
            return (
              (0, s.Z)(this, n),
              ((e = t.call(this)).name = e.constructor.name),
              (e.message = "The user rejected the request."),
              e
            );
          }
          return n;
        })((0, d.Z)(Error)),
        C = (function (e) {
          (0, c.Z)(p, e);
          var t,
            n,
            r,
            l,
            u,
            d = b(p);
          function p(e) {
            var t;
            return (
              (0, s.Z)(this, p),
              ((t = d.call(this, e)).handleNetworkChanged =
                t.handleNetworkChanged.bind((0, o.Z)(t))),
              (t.handleChainChanged = t.handleChainChanged.bind((0, o.Z)(t))),
              (t.handleAccountsChanged = t.handleAccountsChanged.bind(
                (0, o.Z)(t)
              )),
              (t.handleClose = t.handleClose.bind((0, o.Z)(t))),
              t
            );
          }
          return (
            (0, a.Z)(p, [
              {
                key: "handleChainChanged",
                value: function (e) {
                  w && x.log("Handling 'chainChanged' event with payload", e),
                    this.emitUpdate({ chainId: e, provider: window.gamestop });
                },
              },
              {
                key: "handleAccountsChanged",
                value: function (e) {
                  w &&
                    x.log("Handling 'accountsChanged' event with payload", e),
                    0 === e.length
                      ? this.emitDeactivate()
                      : this.emitUpdate({ account: e[0] });
                },
              },
              {
                key: "handleClose",
                value: function (e, t) {
                  w && x.log("Handling 'close' event with payload", e, t),
                    this.emitDeactivate();
                },
              },
              {
                key: "handleNetworkChanged",
                value: function (e) {
                  w && x.log("Handling 'networkChanged' event with payload", e),
                    this.emitUpdate({ chainId: e, provider: window.gamestop });
                },
              },
              {
                key: "activate",
                value:
                  ((u = (0, i.Z)(
                    f().mark(function e() {
                      var t;
                      return f().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (window.gamestop) {
                                  e.next = 2;
                                  break;
                                }
                                throw new A();
                              case 2:
                                return (
                                  window.gamestop.on &&
                                    (window.gamestop.on(
                                      "chainChanged",
                                      this.handleChainChanged
                                    ),
                                    window.gamestop.on(
                                      "accountsChanged",
                                      this.handleAccountsChanged
                                    ),
                                    window.gamestop.on(
                                      "close",
                                      this.handleClose
                                    ),
                                    window.gamestop.on(
                                      "networkChanged",
                                      this.handleNetworkChanged
                                    )),
                                  window.gamestop &&
                                    (window.gamestop.autoRefreshOnNetworkChange =
                                      !1),
                                  (e.prev = 4),
                                  (e.next = 7),
                                  window.gamestop
                                    .send("eth_requestAccounts")
                                    .then(function (e) {
                                      return y(e)[0];
                                    })
                                );
                              case 7:
                                (t = e.sent), (e.next = 15);
                                break;
                              case 10:
                                if (
                                  ((e.prev = 10),
                                  (e.t0 = e.catch(4)),
                                  4001 !== e.t0.code)
                                ) {
                                  e.next = 14;
                                  break;
                                }
                                throw new k();
                              case 14:
                                (0, m.Z)(
                                  !1,
                                  "eth_requestAccounts was unsuccessful, falling back to enable"
                                );
                              case 15:
                                if (t) {
                                  e.next = 19;
                                  break;
                                }
                                return (
                                  (e.next = 18),
                                  window.gamestop.enable().then(function (e) {
                                    return e && y(e)[0];
                                  })
                                );
                              case 18:
                                t = e.sent;
                              case 19:
                                return e.abrupt(
                                  "return",
                                  v(
                                    { provider: window.gamestop },
                                    t ? { account: t } : {}
                                  )
                                );
                              case 20:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[4, 10]]
                      );
                    })
                  )),
                  function () {
                    return u.apply(this, arguments);
                  }),
              },
              {
                key: "getProvider",
                value:
                  ((l = (0, i.Z)(
                    f().mark(function e() {
                      return f().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return e.abrupt("return", window.gamestop);
                            case 1:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  )),
                  function () {
                    return l.apply(this, arguments);
                  }),
              },
              {
                key: "getChainId",
                value:
                  ((r = (0, i.Z)(
                    f().mark(function e() {
                      var t;
                      return f().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (window.gamestop) {
                                  e.next = 2;
                                  break;
                                }
                                throw new A();
                              case 2:
                                return (
                                  (e.prev = 2),
                                  (e.next = 5),
                                  window.gamestop.send("eth_chainId").then(y)
                                );
                              case 5:
                                (t = e.sent), (e.next = 11);
                                break;
                              case 8:
                                (e.prev = 8),
                                  (e.t0 = e.catch(2)),
                                  (0, m.Z)(
                                    !1,
                                    "eth_chainId was unsuccessful, falling back to net_version"
                                  );
                              case 11:
                                if (t) {
                                  e.next = 21;
                                  break;
                                }
                                return (
                                  (e.prev = 12),
                                  (e.next = 15),
                                  window.gamestop.send("net_version").then(y)
                                );
                              case 15:
                                (t = e.sent), (e.next = 21);
                                break;
                              case 18:
                                (e.prev = 18),
                                  (e.t1 = e.catch(12)),
                                  (0, m.Z)(
                                    !1,
                                    "net_version was unsuccessful, falling back to net version v2"
                                  );
                              case 21:
                                if (!t)
                                  try {
                                    t = y(
                                      window.gamestop.send({
                                        method: "net_version",
                                      })
                                    );
                                  } catch (e) {
                                    (0, m.Z)(
                                      !1,
                                      "net_version v2 was unsuccessful, falling back to manual matches and static properties"
                                    );
                                  }
                                return (
                                  t ||
                                    (t = window.gamestop.isDapper
                                      ? y(
                                          window.gamestop.cachedResults
                                            .net_version
                                        )
                                      : window.gamestop.chainId ||
                                        window.gamestop.netVersion ||
                                        window.gamestop.networkVersion ||
                                        window.gamestop._chainId),
                                  e.abrupt("return", t)
                                );
                              case 24:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [
                          [2, 8],
                          [12, 18],
                        ]
                      );
                    })
                  )),
                  function () {
                    return r.apply(this, arguments);
                  }),
              },
              {
                key: "getAccount",
                value:
                  ((n = (0, i.Z)(
                    f().mark(function e() {
                      var t;
                      return f().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (window.gamestop) {
                                  e.next = 2;
                                  break;
                                }
                                throw new A();
                              case 2:
                                return (
                                  (e.prev = 2),
                                  (e.next = 5),
                                  window.gamestop
                                    .send("eth_accounts")
                                    .then(function (e) {
                                      return y(e)[0];
                                    })
                                );
                              case 5:
                                (t = e.sent), (e.next = 11);
                                break;
                              case 8:
                                (e.prev = 8),
                                  (e.t0 = e.catch(2)),
                                  (0, m.Z)(
                                    !1,
                                    "eth_accounts was unsuccessful, falling back to enable"
                                  );
                              case 11:
                                if (t) {
                                  e.next = 21;
                                  break;
                                }
                                return (
                                  (e.prev = 12),
                                  (e.next = 15),
                                  window.gamestop.enable().then(function (e) {
                                    return y(e)[0];
                                  })
                                );
                              case 15:
                                (t = e.sent), (e.next = 21);
                                break;
                              case 18:
                                (e.prev = 18),
                                  (e.t1 = e.catch(12)),
                                  (0, m.Z)(
                                    !1,
                                    "enable was unsuccessful, falling back to eth_accounts v2"
                                  );
                              case 21:
                                return (
                                  t ||
                                    (t = y(
                                      window.gamestop.send({
                                        method: "eth_accounts",
                                      })
                                    )[0]),
                                  e.abrupt("return", t)
                                );
                              case 23:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [
                          [2, 8],
                          [12, 18],
                        ]
                      );
                    })
                  )),
                  function () {
                    return n.apply(this, arguments);
                  }),
              },
              {
                key: "deactivate",
                value: function () {
                  window.gamestop &&
                    window.gamestop.removeListener &&
                    (window.gamestop.removeListener(
                      "chainChanged",
                      this.handleChainChanged
                    ),
                    window.gamestop.removeListener(
                      "accountsChanged",
                      this.handleAccountsChanged
                    ),
                    window.gamestop.removeListener("close", this.handleClose),
                    window.gamestop.removeListener(
                      "networkChanged",
                      this.handleNetworkChanged
                    ));
                },
              },
              {
                key: "isAuthorized",
                value:
                  ((t = (0, i.Z)(
                    f().mark(function e() {
                      return f().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (window.gamestop) {
                                  e.next = 2;
                                  break;
                                }
                                return e.abrupt("return", !1);
                              case 2:
                                return (
                                  (e.prev = 2),
                                  (e.next = 5),
                                  window.gamestop
                                    .send("eth_accounts")
                                    .then(function (e) {
                                      return y(e).length > 0;
                                    })
                                );
                              case 5:
                                return e.abrupt("return", e.sent);
                              case 8:
                                return (
                                  (e.prev = 8),
                                  (e.t0 = e.catch(2)),
                                  e.abrupt("return", !1)
                                );
                              case 11:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[2, 8]]
                      );
                    })
                  )),
                  function () {
                    return t.apply(this, arguments);
                  }),
              },
            ]),
            p
          );
        })(h.Q);
    },
    37416: (e, t, n) => {
      "use strict";
      n.d(t, { r: () => s });
      var r = n(15671),
        i = n(60136),
        a = n(6215),
        o = n(61120);
      var s = (function (e) {
        (0, i.Z)(c, e);
        var t,
          n,
          s =
            ((t = c),
            (n = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                r = (0, o.Z)(t);
              if (n) {
                var i = (0, o.Z)(this).constructor;
                e = Reflect.construct(r, arguments, i);
              } else e = r.apply(this, arguments);
              return (0, a.Z)(this, e);
            });
        function c(e) {
          return (0, r.Z)(this, c), s.call(this, e);
        }
        return c;
      })(n(86435).AP);
    },
    74556: (e, t, n) => {
      "use strict";
      n.d(t, { _k: () => C });
      var r = n(4942),
        i = n(15861),
        a = n(43144),
        o = n(97326),
        s = n(15671),
        c = n(60136),
        l = n(6215),
        u = n(61120),
        d = n(72407),
        p = n(87757),
        f = n.n(p),
        h = n(26939),
        m = n(45298),
        x = n(25108);
      function g(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function v(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? g(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : g(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function b(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = (0, u.Z)(e);
          if (t) {
            var i = (0, u.Z)(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return (0, l.Z)(this, n);
        };
      }
      var w = "PROD" !== window.nft.ENV;
      function y(e) {
        return e.hasOwnProperty("result") ? e.result : e;
      }
      var A = (function (e) {
          (0, c.Z)(n, e);
          var t = b(n);
          function n() {
            var e;
            return (
              (0, s.Z)(this, n),
              ((e = t.call(this)).name = e.constructor.name),
              (e.message =
                "No Ethereum provider was found on window.ethereum."),
              e
            );
          }
          return n;
        })((0, d.Z)(Error)),
        k = (function (e) {
          (0, c.Z)(n, e);
          var t = b(n);
          function n() {
            var e;
            return (
              (0, s.Z)(this, n),
              ((e = t.call(this)).name = e.constructor.name),
              (e.message = "The user rejected the request."),
              e
            );
          }
          return n;
        })((0, d.Z)(Error)),
        C = (function (e) {
          (0, c.Z)(p, e);
          var t,
            n,
            r,
            l,
            u,
            d = b(p);
          function p(e) {
            var t;
            return (
              (0, s.Z)(this, p),
              ((t = d.call(this, e)).handleNetworkChanged =
                t.handleNetworkChanged.bind((0, o.Z)(t))),
              (t.handleChainChanged = t.handleChainChanged.bind((0, o.Z)(t))),
              (t.handleAccountsChanged = t.handleAccountsChanged.bind(
                (0, o.Z)(t)
              )),
              (t.handleClose = t.handleClose.bind((0, o.Z)(t))),
              t
            );
          }
          return (
            (0, a.Z)(p, [
              {
                key: "handleChainChanged",
                value: function (e) {
                  w && x.log("Handling 'chainChanged' event with payload", e),
                    this.emitUpdate({ chainId: e, provider: window.ethereum });
                },
              },
              {
                key: "handleAccountsChanged",
                value: function (e) {
                  w &&
                    x.log("Handling 'accountsChanged' event with payload", e),
                    0 === e.length
                      ? this.emitDeactivate()
                      : this.emitUpdate({ account: e[0] });
                },
              },
              {
                key: "handleClose",
                value: function (e, t) {
                  w && x.log("Handling 'close' event with payload", e, t),
                    this.emitDeactivate();
                },
              },
              {
                key: "handleNetworkChanged",
                value: function (e) {
                  w && x.log("Handling 'networkChanged' event with payload", e),
                    this.emitUpdate({ chainId: e, provider: window.ethereum });
                },
              },
              {
                key: "activate",
                value:
                  ((u = (0, i.Z)(
                    f().mark(function e() {
                      var t;
                      return f().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (window.ethereum) {
                                  e.next = 2;
                                  break;
                                }
                                throw new A();
                              case 2:
                                return (
                                  window.ethereum.on &&
                                    (window.ethereum.on(
                                      "chainChanged",
                                      this.handleChainChanged
                                    ),
                                    window.ethereum.on(
                                      "accountsChanged",
                                      this.handleAccountsChanged
                                    ),
                                    window.ethereum.on(
                                      "close",
                                      this.handleClose
                                    ),
                                    window.ethereum.on(
                                      "networkChanged",
                                      this.handleNetworkChanged
                                    )),
                                  window.ethereum.isMetaMask &&
                                    (window.ethereum.autoRefreshOnNetworkChange =
                                      !1),
                                  (e.prev = 4),
                                  (e.next = 7),
                                  window.ethereum
                                    .send("eth_requestAccounts")
                                    .then(function (e) {
                                      return y(e)[0];
                                    })
                                );
                              case 7:
                                (t = e.sent), (e.next = 15);
                                break;
                              case 10:
                                if (
                                  ((e.prev = 10),
                                  (e.t0 = e.catch(4)),
                                  4001 !== e.t0.code)
                                ) {
                                  e.next = 14;
                                  break;
                                }
                                throw new k();
                              case 14:
                                (0, m.Z)(
                                  !1,
                                  "eth_requestAccounts was unsuccessful, falling back to enable"
                                );
                              case 15:
                                if (t) {
                                  e.next = 19;
                                  break;
                                }
                                return (
                                  (e.next = 18),
                                  window.ethereum.enable().then(function (e) {
                                    return e && y(e)[0];
                                  })
                                );
                              case 18:
                                t = e.sent;
                              case 19:
                                return e.abrupt(
                                  "return",
                                  v(
                                    { provider: window.ethereum },
                                    t ? { account: t } : {}
                                  )
                                );
                              case 20:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[4, 10]]
                      );
                    })
                  )),
                  function () {
                    return u.apply(this, arguments);
                  }),
              },
              {
                key: "getProvider",
                value:
                  ((l = (0, i.Z)(
                    f().mark(function e() {
                      return f().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return e.abrupt("return", window.ethereum);
                            case 1:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  )),
                  function () {
                    return l.apply(this, arguments);
                  }),
              },
              {
                key: "getChainId",
                value:
                  ((r = (0, i.Z)(
                    f().mark(function e() {
                      var t;
                      return f().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (window.ethereum) {
                                  e.next = 2;
                                  break;
                                }
                                throw new A();
                              case 2:
                                return (
                                  (e.prev = 2),
                                  (e.next = 5),
                                  window.ethereum.send("eth_chainId").then(y)
                                );
                              case 5:
                                (t = e.sent), (e.next = 11);
                                break;
                              case 8:
                                (e.prev = 8),
                                  (e.t0 = e.catch(2)),
                                  (0, m.Z)(
                                    !1,
                                    "eth_chainId was unsuccessful, falling back to net_version"
                                  );
                              case 11:
                                if (t) {
                                  e.next = 21;
                                  break;
                                }
                                return (
                                  (e.prev = 12),
                                  (e.next = 15),
                                  window.ethereum.send("net_version").then(y)
                                );
                              case 15:
                                (t = e.sent), (e.next = 21);
                                break;
                              case 18:
                                (e.prev = 18),
                                  (e.t1 = e.catch(12)),
                                  (0, m.Z)(
                                    !1,
                                    "net_version was unsuccessful, falling back to net version v2"
                                  );
                              case 21:
                                if (!t)
                                  try {
                                    t = y(
                                      window.ethereum.send({
                                        method: "net_version",
                                      })
                                    );
                                  } catch (e) {
                                    (0, m.Z)(
                                      !1,
                                      "net_version v2 was unsuccessful, falling back to manual matches and static properties"
                                    );
                                  }
                                return (
                                  t ||
                                    (t = window.ethereum.isDapper
                                      ? y(
                                          window.ethereum.cachedResults
                                            .net_version
                                        )
                                      : window.ethereum.chainId ||
                                        window.ethereum.netVersion ||
                                        window.ethereum.networkVersion ||
                                        window.ethereum._chainId),
                                  e.abrupt("return", t)
                                );
                              case 24:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [
                          [2, 8],
                          [12, 18],
                        ]
                      );
                    })
                  )),
                  function () {
                    return r.apply(this, arguments);
                  }),
              },
              {
                key: "getAccount",
                value:
                  ((n = (0, i.Z)(
                    f().mark(function e() {
                      var t;
                      return f().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (window.ethereum) {
                                  e.next = 2;
                                  break;
                                }
                                throw new A();
                              case 2:
                                return (
                                  (e.prev = 2),
                                  (e.next = 5),
                                  window.ethereum
                                    .send("eth_accounts")
                                    .then(function (e) {
                                      return y(e)[0];
                                    })
                                );
                              case 5:
                                (t = e.sent), (e.next = 11);
                                break;
                              case 8:
                                (e.prev = 8),
                                  (e.t0 = e.catch(2)),
                                  (0, m.Z)(
                                    !1,
                                    "eth_accounts was unsuccessful, falling back to enable"
                                  );
                              case 11:
                                if (t) {
                                  e.next = 21;
                                  break;
                                }
                                return (
                                  (e.prev = 12),
                                  (e.next = 15),
                                  window.ethereum.enable().then(function (e) {
                                    return y(e)[0];
                                  })
                                );
                              case 15:
                                (t = e.sent), (e.next = 21);
                                break;
                              case 18:
                                (e.prev = 18),
                                  (e.t1 = e.catch(12)),
                                  (0, m.Z)(
                                    !1,
                                    "enable was unsuccessful, falling back to eth_accounts v2"
                                  );
                              case 21:
                                return (
                                  t ||
                                    (t = y(
                                      window.ethereum.send({
                                        method: "eth_accounts",
                                      })
                                    )[0]),
                                  e.abrupt("return", t)
                                );
                              case 23:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [
                          [2, 8],
                          [12, 18],
                        ]
                      );
                    })
                  )),
                  function () {
                    return n.apply(this, arguments);
                  }),
              },
              {
                key: "deactivate",
                value: function () {
                  window.ethereum &&
                    window.ethereum.removeListener &&
                    (window.ethereum.removeListener(
                      "chainChanged",
                      this.handleChainChanged
                    ),
                    window.ethereum.removeListener(
                      "accountsChanged",
                      this.handleAccountsChanged
                    ),
                    window.ethereum.removeListener("close", this.handleClose),
                    window.ethereum.removeListener(
                      "networkChanged",
                      this.handleNetworkChanged
                    ));
                },
              },
              {
                key: "isAuthorized",
                value:
                  ((t = (0, i.Z)(
                    f().mark(function e() {
                      return f().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (window.ethereum) {
                                  e.next = 2;
                                  break;
                                }
                                return e.abrupt("return", !1);
                              case 2:
                                return (
                                  (e.prev = 2),
                                  (e.next = 5),
                                  window.ethereum
                                    .send("eth_accounts")
                                    .then(function (e) {
                                      return y(e).length > 0;
                                    })
                                );
                              case 5:
                                return e.abrupt("return", e.sent);
                              case 8:
                                return (
                                  (e.prev = 8),
                                  (e.t0 = e.catch(2)),
                                  e.abrupt("return", !1)
                                );
                              case 11:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[2, 8]]
                      );
                    })
                  )),
                  function () {
                    return t.apply(this, arguments);
                  }),
              },
            ]),
            p
          );
        })(h.Q);
    },
    84484: (e, t, n) => {
      "use strict";
      n.d(t, { z: () => s });
      var r = n(15671),
        i = n(60136),
        a = n(6215),
        o = n(61120);
      var s = (function (e) {
        (0, i.Z)(c, e);
        var t,
          n,
          s =
            ((t = c),
            (n = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                r = (0, o.Z)(t);
              if (n) {
                var i = (0, o.Z)(this).constructor;
                e = Reflect.construct(r, arguments, i);
              } else e = r.apply(this, arguments);
              return (0, a.Z)(this, e);
            });
        function c(e) {
          return (0, r.Z)(this, c), s.call(this, e);
        }
        return c;
      })(n(86435).AP);
    },
    48902: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => s });
      var r = n(87537),
        i = n.n(r),
        a = n(23645),
        o = n.n(a)()(i());
      o.push([
        e.id,
        '.slick-list,.slick-slider,.slick-track{position:relative;display:block}.slick-loading .slick-slide,.slick-loading .slick-track{visibility:hidden}.slick-slider{box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-khtml-user-select:none;-ms-touch-action:pan-y;touch-action:pan-y;-webkit-tap-highlight-color:transparent}.slick-list{overflow:hidden;margin:0;padding:0}.slick-list:focus{outline:0}.slick-list.dragging{cursor:pointer;cursor:hand}.slick-slider .slick-list,.slick-slider .slick-track{-webkit-transform:translate3d(0, 0, 0);-moz-transform:translate3d(0, 0, 0);-ms-transform:translate3d(0, 0, 0);-o-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}.slick-track{top:0;left:0}.slick-track:after,.slick-track:before{display:table;content:""}.slick-track:after{clear:both}.slick-slide{display:none;float:left;height:100%;min-height:1px}[dir=rtl] .slick-slide{float:right}.slick-slide img{display:block}.slick-slide.slick-loading img{display:none}.slick-slide.dragging img{pointer-events:none}.slick-initialized .slick-slide{display:block}.slick-vertical .slick-slide{display:block;height:auto;border:1px solid transparent}.slick-arrow.slick-hidden{display:none}.slick-dots,.slick-next,.slick-prev{position:absolute;display:block;padding:0}.slick-dots li button:before,.slick-next:before,.slick-prev:before{font-family:slick;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.slick-next,.slick-prev{font-size:0;line-height:0;top:50%;width:20px;height:20px;-webkit-transform:translate(0, -50%);-ms-transform:translate(0, -50%);transform:translate(0, -50%);cursor:pointer;color:transparent;border:none;outline:0;background:0 0}.slick-next:focus:before,.slick-next:hover:before,.slick-prev:focus:before,.slick-prev:hover:before{opacity:1}.slick-next.slick-disabled:before,.slick-prev.slick-disabled:before{opacity:.25}.slick-next:before,.slick-prev:before{font-size:20px;line-height:1;opacity:.75;color:#fff}.slick-prev{left:-25px}[dir=rtl] .slick-prev{right:-25px;left:auto}.slick-prev:before{content:"←"}.slick-next:before,[dir=rtl] .slick-prev:before{content:"→"}.slick-next{right:-25px}[dir=rtl] .slick-next{right:auto;left:-25px}[dir=rtl] .slick-next:before{content:"←"}.slick-dotted.slick-slider{margin-bottom:30px}.slick-dots{bottom:-25px;width:100%;margin:0;list-style:none;text-align:center}.slick-dots li{position:relative;display:inline-block;width:20px;height:20px;margin:0 5px;padding:0;cursor:pointer}.slick-dots li button{font-size:0;line-height:0;display:block;width:20px;height:20px;padding:5px;cursor:pointer;color:transparent;border:0;outline:0;background:0 0}.slick-dots li button:focus,.slick-dots li button:hover{outline:0}.slick-dots li button:focus:before,.slick-dots li button:hover:before{opacity:1}.slick-dots li button:before{font-size:6px;line-height:20px;position:absolute;top:0;left:0;width:20px;height:20px;content:"•";text-align:center;opacity:.25;color:#000}.slick-dots li.slick-active button:before{opacity:.75;color:#000}.default-slider-styles{border:none !important}.default-slider-styles:before{background:transparent !important}.slick-disabled{opacity:0 !important;pointer-events:none !important}.hide-next{opacity:0 !important;pointer-events:none !important}.slider{cursor:default !important}',
        "",
        {
          version: 3,
          sources: ["webpack://./src/components/carousel/slick-carousel.scss"],
          names: [],
          mappings:
            "AAAA,uCAAA,iBAGE,CAAA,aACA,CAAA,wDAEF,iBAEE,CAAA,cAEF,qBACE,CAAA,wBACA,CAAA,qBACA,CAAA,oBACA,CAAA,gBACA,CAAA,0BACA,CAAA,uBACA,CAAA,sBACA,CAAA,kBACA,CAAA,uCACA,CAAA,YAEF,eACE,CAAA,QACA,CAAA,SACA,CAAA,kBAEF,SACE,CAAA,qBAEF,cACE,CAAA,WACA,CAAA,qDAEF,sCAEE,CAAA,mCACA,CAAA,kCACA,CAAA,iCACA,CAAA,8BACA,CAAA,aAEF,KACE,CAAA,MACA,CAAA,uCAEF,aAEE,CAAA,UACA,CAAA,mBAEF,UACE,CAAA,aAEF,YACE,CAAA,UACA,CAAA,WACA,CAAA,cACA,CAAA,uBAEF,WACE,CAAA,iBAEF,aACE,CAAA,+BAEF,YACE,CAAA,0BAEF,mBACE,CAAA,gCAEF,aACE,CAAA,6BAEF,aACE,CAAA,WACA,CAAA,4BACA,CAAA,0BAEF,YACE,CAAA,oCAEF,iBAGE,CAAA,aACA,CAAA,SACA,CAAA,mEAEF,iBAGE,CAAA,kCACA,CAAA,iCACA,CAAA,wBAGF,WAEE,CAAA,aACA,CAAA,OACA,CAAA,UACA,CAAA,WACA,CAAA,oCACA,CAAA,gCACA,CAAA,4BACA,CAAA,cACA,CAAA,iBACA,CAAA,WACA,CAAA,SACA,CAAA,cACA,CAAA,oGAOF,SAIE,CAAA,oEAEF,WAEE,CAAA,sCAEF,cAEE,CAAA,aACA,CAAA,WACA,CAAA,UACA,CAAA,YAEF,UACE,CAAA,sBAEF,WACE,CAAA,SACA,CAAA,mBAEF,WACE,CAAA,gDAEF,WAEE,CAAA,YAEF,WACE,CAAA,sBAEF,UACE,CAAA,UACA,CAAA,6BAEF,WACE,CAAA,2BAEF,kBACE,CAAA,YAEF,YACE,CAAA,UACA,CAAA,QACA,CAAA,eACA,CAAA,iBACA,CAAA,eAEF,iBACE,CAAA,oBACA,CAAA,UACA,CAAA,WACA,CAAA,YACA,CAAA,SACA,CAAA,cACA,CAAA,sBAEF,WACE,CAAA,aACA,CAAA,aACA,CAAA,UACA,CAAA,WACA,CAAA,WACA,CAAA,cACA,CAAA,iBACA,CAAA,QACA,CAAA,SACA,CAAA,cACA,CAAA,wDAEF,SAEE,CAAA,sEAEF,SAEE,CAAA,6BAEF,aACE,CAAA,gBACA,CAAA,iBACA,CAAA,KACA,CAAA,MACA,CAAA,UACA,CAAA,WACA,CAAA,WACA,CAAA,iBACA,CAAA,WACA,CAAA,UACA,CAAA,0CAEF,WACE,CAAA,UACA,CAAA,uBAGF,sBACE,CAAA,8BAEF,iCACE,CAAA,gBAEF,oBACE,CAAA,8BACA,CAAA,WAEF,oBACE,CAAA,8BACA,CAAA,QAGF,yBACE",
          sourcesContent: [
            ".slick-list,\n.slick-slider,\n.slick-track {\n  position: relative;\n  display: block;\n}\n.slick-loading .slick-slide,\n.slick-loading .slick-track {\n  visibility: hidden;\n}\n.slick-slider {\n  box-sizing: border-box;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-touch-callout: none;\n  -khtml-user-select: none;\n  -ms-touch-action: pan-y;\n  touch-action: pan-y;\n  -webkit-tap-highlight-color: transparent;\n}\n.slick-list {\n  overflow: hidden;\n  margin: 0;\n  padding: 0;\n}\n.slick-list:focus {\n  outline: 0;\n}\n.slick-list.dragging {\n  cursor: pointer;\n  cursor: hand;\n}\n.slick-slider .slick-list,\n.slick-slider .slick-track {\n  -webkit-transform: translate3d(0, 0, 0);\n  -moz-transform: translate3d(0, 0, 0);\n  -ms-transform: translate3d(0, 0, 0);\n  -o-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n}\n.slick-track {\n  top: 0;\n  left: 0;\n}\n.slick-track:after,\n.slick-track:before {\n  display: table;\n  content: '';\n}\n.slick-track:after {\n  clear: both;\n}\n.slick-slide {\n  display: none;\n  float: left;\n  height: 100%;\n  min-height: 1px;\n}\n[dir='rtl'] .slick-slide {\n  float: right;\n}\n.slick-slide img {\n  display: block;\n}\n.slick-slide.slick-loading img {\n  display: none;\n}\n.slick-slide.dragging img {\n  pointer-events: none;\n}\n.slick-initialized .slick-slide {\n  display: block;\n}\n.slick-vertical .slick-slide {\n  display: block;\n  height: auto;\n  border: 1px solid transparent;\n}\n.slick-arrow.slick-hidden {\n  display: none;\n} /*# sourceMappingURL=slick.min.css.map */\n.slick-dots,\n.slick-next,\n.slick-prev {\n  position: absolute;\n  display: block;\n  padding: 0;\n}\n.slick-dots li button:before,\n.slick-next:before,\n.slick-prev:before {\n  font-family: slick;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.slick-next,\n.slick-prev {\n  font-size: 0;\n  line-height: 0;\n  top: 50%;\n  width: 20px;\n  height: 20px;\n  -webkit-transform: translate(0, -50%);\n  -ms-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n  cursor: pointer;\n  color: transparent;\n  border: none;\n  outline: 0;\n  background: 0 0;\n}\n.slick-next:focus,\n.slick-next:hover,\n.slick-prev:focus,\n.slick-prev:hover {\n}\n.slick-next:focus:before,\n.slick-next:hover:before,\n.slick-prev:focus:before,\n.slick-prev:hover:before {\n  opacity: 1;\n}\n.slick-next.slick-disabled:before,\n.slick-prev.slick-disabled:before {\n  opacity: 0.25;\n}\n.slick-next:before,\n.slick-prev:before {\n  font-size: 20px;\n  line-height: 1;\n  opacity: 0.75;\n  color: #fff;\n}\n.slick-prev {\n  left: -25px;\n}\n[dir='rtl'] .slick-prev {\n  right: -25px;\n  left: auto;\n}\n.slick-prev:before {\n  content: '←';\n}\n.slick-next:before,\n[dir='rtl'] .slick-prev:before {\n  content: '→';\n}\n.slick-next {\n  right: -25px;\n}\n[dir='rtl'] .slick-next {\n  right: auto;\n  left: -25px;\n}\n[dir='rtl'] .slick-next:before {\n  content: '←';\n}\n.slick-dotted.slick-slider {\n  margin-bottom: 30px;\n}\n.slick-dots {\n  bottom: -25px;\n  width: 100%;\n  margin: 0;\n  list-style: none;\n  text-align: center;\n}\n.slick-dots li {\n  position: relative;\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  margin: 0 5px;\n  padding: 0;\n  cursor: pointer;\n}\n.slick-dots li button {\n  font-size: 0;\n  line-height: 0;\n  display: block;\n  width: 20px;\n  height: 20px;\n  padding: 5px;\n  cursor: pointer;\n  color: transparent;\n  border: 0;\n  outline: 0;\n  background: 0 0;\n}\n.slick-dots li button:focus,\n.slick-dots li button:hover {\n  outline: 0;\n}\n.slick-dots li button:focus:before,\n.slick-dots li button:hover:before {\n  opacity: 1;\n}\n.slick-dots li button:before {\n  font-size: 6px;\n  line-height: 20px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 20px;\n  height: 20px;\n  content: '•';\n  text-align: center;\n  opacity: 0.25;\n  color: #000;\n}\n.slick-dots li.slick-active button:before {\n  opacity: 0.75;\n  color: #000;\n} /*# sourceMappingURL=slick-theme.min.css.map */\n\n.default-slider-styles {\n  border: none !important;\n}\n.default-slider-styles:before {\n  background: transparent !important;\n}\n.slick-disabled {\n  opacity: 0 !important;\n  pointer-events: none !important;\n}\n.hide-next {\n  opacity: 0 !important;\n  pointer-events: none !important;\n}\n\n.slider {\n  cursor: default !important;\n}\n",
          ],
          sourceRoot: "",
        },
      ]);
      const s = o;
    },
    5307: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => s });
      var r = n(87537),
        i = n.n(r),
        a = n(23645),
        o = n.n(a)()(i());
      o.push([
        e.id,
        ".video-wrapper{-webkit-flex:1 1;flex:1 1;align-items:center;justify-content:center;max-width:100% !important;max-height:100% !important;height:100% !important;width:100% !important;margin:auto;display:flex;position:absolute;left:50%;top:50%;transform:translate3d(-50%, -50%, 0px);border-radius:10px;overflow:hidden}.card-video{height:auto;width:auto;min-width:100% !important;min-height:100% !important;border-radius:10px;margin:auto;position:absolute;flex:1}",
        "",
        {
          version: 3,
          sources: [
            "webpack://./src/components/content-aware-media/content-aware-media.styles.scss",
          ],
          names: [],
          mappings:
            "AAEA,eACE,gBAAA,CACA,QAAA,CACA,kBAAA,CACA,sBAAA,CACA,yBAAA,CACA,0BAAA,CACA,sBAAA,CACA,qBAAA,CACA,WAAA,CACA,YAAA,CACA,iBAAA,CACA,QAAA,CACA,OAAA,CACA,sCAAA,CACA,kBAAA,CACA,eAAA,CAGF,YACE,WAAA,CACA,UAAA,CACA,yBAAA,CACA,0BAAA,CACA,kBAAA,CACA,WAAA,CACA,iBAAA,CACA,MAAA",
          sourcesContent: [
            "@import '../../assets/styles/theme.scss';\n\n.video-wrapper {\n  -webkit-flex: 1 1;\n  flex: 1 1;\n  align-items: center;\n  justify-content: center;\n  max-width: 100% !important;\n  max-height: 100% !important;\n  height: 100% !important;\n  width: 100% !important;\n  margin: auto;\n  display: flex;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate3d(-50%, -50%, 0px);\n  border-radius: 10px;\n  overflow: hidden;\n}\n\n.card-video {\n  height: auto;\n  width: auto;\n  min-width: 100% !important;\n  min-height: 100% !important;\n  border-radius: 10px;\n  margin: auto;\n  position: absolute;\n  flex: 1;\n}\n",
          ],
          sourceRoot: "",
        },
      ]);
      const s = o;
    },
    94800: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => s });
      var r = n(87537),
        i = n.n(r),
        a = n(23645),
        o = n.n(a)()(i());
      o.push([
        e.id,
        'html,body{margin:0;width:100vw;font-weight:500}body{min-width:375px;overflow:hidden auto}body:after{content:"";position:fixed;z-index:1;top:0;left:0;width:100%;height:100%;pointer-events:none}button{cursor:pointer;font-weight:500}*{font-family:"Poppins",-apple-system,BlinkMacSystemFont,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;box-sizing:border-box;text-decoration:none}code{font-family:source-code-pro,Menlo,Monaco,Consolas,"Courier New",monospace}input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}',
        "",
        {
          version: 3,
          sources: ["webpack://./src/index.scss"],
          names: [],
          mappings:
            "AAEA,UAEE,QAAA,CACA,WAAA,CACA,eAAA,CAGF,KACE,eAAA,CACA,oBAAA,CAGF,WACE,UAAA,CACA,cAAA,CACA,SAAA,CACA,KAAA,CACA,MAAA,CACA,UAAA,CACA,WAAA,CACA,mBAAA,CAIF,OACE,cAAA,CACA,eAAA,CAGF,EACE,iEAAA,CACA,kCAAA,CACA,iCAAA,CACA,qBAAA,CACA,oBAAA,CAGF,KACE,yEAAA,CAMF,kEAEE,uBAAA,CACA,QAAA,CAIF,mBACE,yBAAA",
          sourcesContent: [
            "@import './assets/styles/theme.scss';\n\nhtml,\nbody {\n  margin: 0;\n  width: 100vw;\n  font-weight: 500;\n}\n\nbody {\n  min-width: 375px;\n  overflow: hidden auto;\n}\n\nbody:after {\n  content: '';\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  // backdrop-filter: invert(100%);\n}\n\nbutton {\n  cursor: pointer;\n  font-weight: 500;\n}\n\n* {\n  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  box-sizing: border-box;\n  text-decoration: none;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n\n// Hide arrows for number type inputs\n/* Chrome, Safari, Edge, Opera */\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n/* Firefox */\ninput[type='number'] {\n  -moz-appearance: textfield;\n}\n",
          ],
          sourceRoot: "",
        },
      ]);
      const s = o;
    },
    19264: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => r });
      const r = n.p + "82b91f51c211bd5519ee071813736f24.mp4";
    },
    994: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => r });
      const r = n.p + "31ff16eef888637505a9c58ca047dd60.svg";
    },
    41937: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => r });
      const r = n.p + "59ef7bec328d1f80905b9b2a13cd5166.svg";
    },
    2180: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => r });
      const r = n.p + "3ccdc6e60a9573d5efb48df80b51767c.svg";
    },
    87657: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => r });
      const r = n.p + "5eb42a1b2c3a480c09463284653b3023.svg";
    },
    27e3: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => r });
      const r = n.p + "6614ca92fedfdbe508969e74bdd2769d.svg";
    },
    65057: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => r });
      const r = n.p + "b48fe74be48eaa85621e4a67e2bd9eac.svg";
    },
    70344: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => r });
      const r = n.p + "e33e04602d2c85d6edb3008d7823158e.svg";
    },
    68692: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => r });
      const r = n.p + "380adbb6d5fe8232ecb538cffb8b1068.jpg";
    },
    35883: () => {},
    46601: () => {},
    89214: () => {},
    42480: () => {},
    52361: () => {},
    94616: () => {},
    55024: () => {},
    12636: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"v":"5.5.0","fr":30,"ip":0,"op":61,"w":600,"h":600,"nm":"Comp 1","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shape Layer 2","sr":1,"ks":{"o":{"a":0,"k":80,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.526],"y":[0.673]},"o":{"x":[0.472],"y":[0.326]},"t":0,"s":[0]},{"t":60,"s":[183]}],"ix":10},"p":{"a":0,"k":[300.062,300,0],"ix":2},"a":{"a":0,"k":[-22.637,19.301,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[368.602,368.602],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.070482904771,0.092439112944,0.111259191176,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":49,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[-22.699,19.301],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.438],"y":[1]},"o":{"x":[0.579],"y":[0]},"t":30,"s":[0]},{"t":60,"s":[49]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.504],"y":[1]},"o":{"x":[0.559],"y":[0]},"t":0,"s":[1]},{"t":30,"s":[50]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Shape Layer 1","sr":1,"ks":{"o":{"a":0,"k":10,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[322.699,280.699,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[368.602,368.602],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.070588235294,0.094117647059,0.109803921569,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":49,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[-22.699,19.301],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0}],"markers":[]}'
      );
    },
  },
  (e) => {
    e.O(
      0,
      [
        104, 96, 190, 109, 696, 685, 840, 163, 354, 142, 784, 725, 831, 959,
        357, 935, 464, 937, 447, 569, 125,
      ],
      () => (20494, e((e.s = 20494)))
    ),
      e.O();
  },
]);
//# sourceMappingURL=main.ad48a3a03de610e8c589.js.map
