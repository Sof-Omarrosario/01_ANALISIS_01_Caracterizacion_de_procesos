(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["referencias", "chunk-515a8379"],
  {
    "0095": function (t, n, e) {
      "use strict";
      e("95c5");
    },

    "1276": function (t, n, e) {
      "use strict";
      var r = e("d784"),
        i = e("44e7"),
        a = e("825a"),
        c = e("1d80"),
        l = e("4840"),
        o = e("8aa5"),
        s = e("50c4"),
        u = e("14c3"),
        f = e("9263"),
        d = e("d039"),
        p = [].push,
        g = Math.min,
        v = 4294967295,
        h = !d(function () {
          return !RegExp(v, "y");
        });

      r(
        "split",
        2,
        function (t, n, e) {
          var r;

          return (r =
            "c" == "abbc".split(/(b)*/)[1] ||
            4 != "test".split(/(?:)/, -1).length ||
            2 != "ab".split(/(?:ab)*/).length ||
            4 != ".".split(/(.?)(.?)/).length ||
            ".".split(/()()/).length > 1 ||
            "".split(/.?/).length
              ? function (t, e) {
                  var r = String(c(this)),
                    a = void 0 === e ? v : e >>> 0;

                  if (0 === a) return [];
                  if (void 0 === t) return [r];
                  if (!i(t)) return n.call(r, t, a);

                  var l,
                    o,
                    s,
                    u = [],
                    d =
                      (t.ignoreCase ? "i" : "") +
                      (t.multiline ? "m" : "") +
                      (t.unicode ? "u" : "") +
                      (t.sticky ? "y" : ""),
                    g = 0,
                    h = new RegExp(t.source, d + "g");

                  while ((l = f.call(h, r))) {
                    if (
                      ((o = h.lastIndex),
                      o > g &&
                        (u.push(r.slice(g, l.index)),
                        l.length > 1 &&
                          l.index < r.length &&
                          p.apply(u, l.slice(1)),
                        (s = l[0].length),
                        (g = o),
                        u.length >= a))
                    )
                      break;

                    h.lastIndex === l.index && h.lastIndex++;
                  }

                  return g === r.length
                    ? (!s && h.test("") || u.push(""))
                    : u.push(r.slice(g)),
                    u.length > a ? u.slice(0, a) : u;
                }
              : n);
        },
        !h
      );
    },

    "13aa": function (t, n, e) {
      "use strict";
      e.r(n);

      var r = function () {
          var t = this,
            n = t.$createElement,
            e = t._self._c || n;

          return e("div", { staticClass: "container-fluid banner-interno" }, [
            e("div", {
              staticClass: "banner-interno__fondo",
              style: {
                "background-image":
                  "url(" + t.globalData.fondoBannerPrincipal + ")",
              },
            }),
            e("div", { staticClass: "container" }, [
              e("div", { staticClass: "banner-interno__titulo py-5" }, [
                t.icono.length
                  ? e(
                      "div",
                      { staticClass: "banner-interno__titulo__icono me-3" },
                      [e("i", { class: t.icono })]
                    )
                  : t._e(),
                e("h2", {
                  staticClass: "mb-0",
                  domProps: { innerHTML: t._s(t.titulo) },
                }),
              ]),
            ]),
          ]);
        },
        i = [];

      var a = {
          name: "BannerInterno",
          props: {
            icono: { type: String, default: "" },
            titulo: { type: String, default: "" },
          },
          data: function () {
            return {};
          },
          computed: {
            globalData: function () {
              return this.$config.global;
            },
          },
        },
        c = a,
        l = e("2877"),
        o = Object(l["a"])(c, r, i, false, null, null, null);

      n["default"] = o.exports;
    },

    "64ef": function (t, n, e) {
      "use strict";
      e.r(n);

      var r = function () {
          var t = this,
            n = t.$createElement,
            e = t._self._c || n;

          return e(
            "div",
            { staticClass: "curso-main-container referencias" },
            [
              e("BannerInterno", {
                attrs: {
                  icono: "fas fa-book",
                  titulo: "Referencias bibliográficas",
                },
              }),
              e(
                "div",
                {
                  staticClass:
                    "container tarjeta tarjeta--blanca p-4 p-md-5 mb-5",
                },
                t._l(t.orderedData, function (n) {
                  return e("div", { key: n.link, staticClass: "referencias__item" }, [
                    e("span", {
                      domProps: { innerHTML: t._s(n.referencia) },
                    }),
                    n.link
                      ? e("a", { attrs: { href: n.link, target: "_blank" } }, [
                          e("span", {
                            domProps: { innerHTML: t._s(n.link) },
                          }),
                          e("i", {
                            staticClass: "fas fa-external-link-alt",
                          }),
                        ])
                      : t._e(),
                    e("hr", { staticClass: "my-3" }),
                  ]);
                }),
                0
              ),
            ],
            1
          );
        },
        i = [];

      var a = e("2909"),
        c = e("13aa"),
        l = e("ecc5");

      var o = {
          name: "Referencias",
          components: { BannerInterno: c["default"] },
          mixins: [l["a"]],
          computed: {
            referenciasData: function () {
              return this.$config.referencias;
            },
            orderedData: function () {
              var t = this;

              return Object(a["a"])(this.referenciasData).sort(function (n, e) {
                var r = t
                  .quitarAcentos(n.referencia.split(" ")[0].toLowerCase()),
                  i = t
                    .quitarAcentos(e.referencia.split(" ")[0].toLowerCase());

                return r < i ? -1 : r > i ? 1 : 0;
              });
            },
          },
        },
        s = o,
        u = e("2877"),
        f = Object(u["a"])(s, r, i, false, null, null, null);

      n["default"] = f.exports;
    },
  },
]);
//# sourceMappingURL=referencias.a568b5d4.js.map