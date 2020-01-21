/*! instantsearch.js 2.10.4 | © Algolia Inc. and other contributors; Licensed MIT | github.com/algolia/instantsearch.js */ ! function (e, t) {
    "object" === typeof exports && "object" === typeof module ? module.exports = t() : "function" === typeof define && define.amd ? define([], t) : "object" === typeof exports ? exports.instantsearch = t() : e.instantsearch = t()
}("undefined" !== typeof self ? self : this, function () {
    return function (e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var a = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(a.exports, a, a.exports, t), a.l = !0, a.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.d = function (e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        }, t.n = function (e) {
            var n = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "", t(t.s = 214)
    }([function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }

        function i(e) {
            var t = "string" === typeof e,
                n = void 0;
            if (n = t ? document.querySelector(e) : e, !o(n)) {
                var r = "Container must be `string` or `HTMLElement`.";
                throw t && (r += " Unable to find " + e), new Error(r)
            }
            return n
        }

        function o(e) {
            return e instanceof window.HTMLElement || Boolean(e) && e.nodeType > 0
        }

        function s(e) {
            return 1 === e.button || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey
        }

        function u(e) {
            return function (t, n) {
                return t && !n ? e + "--" + t : t && n ? e + "--" + t + "__" + n : !t && n ? e + "__" + n : e
            }
        }

        function c(e) {
            var t = e.transformData,
                n = e.defaultTemplates,
                r = e.templates,
                a = e.templatesConfig,
                i = l(n, r);
            return j({
                transformData: t,
                templatesConfig: a
            }, i)
        }

        function l() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = (0, U.default)([].concat(a((0, A.default)(e)), a((0, A.default)(t))));
            return (0, N.default)(n, function (n, r) {
                var a = e[r],
                    i = t[r],
                    o = void 0 !== i && i !== a;
                return n.templates[r] = o ? i : a, n.useCustomCompileOptions[r] = o, n
            }, {
                templates: {},
                useCustomCompileOptions: {}
            })
        }

        function f(e) {
            var t = e.templates,
                n = e.templateKey,
                r = e.compileOptions,
                a = e.helpers,
                i = e.data,
                o = t[n],
                s = "undefined" === typeof o ? "undefined" : C(o),
                u = "string" === s,
                c = "function" === s;
            if (!u && !c) throw new Error("Template must be 'string' or 'function', was '" + s + "' (key: " + n + ")");
            if (c) return o(i);
            var l = p(a, r, i);
            return K.default.compile(o, r).render(j({}, i, {
                helpers: l
            }))
        }

        function p(e, t, n) {
            return (0, q.default)(e, function (e) {
                return (0, W.default)(function (r) {
                    var a = this,
                        i = function (e) {
                            return K.default.compile(e, t).render(a)
                        };
                    return e.call(n, r, i)
                })
            })
        }

        function d(e, t, n, r, a) {
            var i = {
                    type: t,
                    attributeName: n,
                    name: r
                },
                o = (0, k.default)(a, {
                    name: n
                }),
                s = void 0;
            if ("hierarchical" === t) {
                var u = e.getHierarchicalFacetByName(n),
                    c = r.split(u.separator);
                i.name = c[c.length - 1];
                for (var l = 0; void 0 !== o && l < c.length; ++l) o = (0, k.default)(o.data, {
                    name: c[l]
                });
                s = (0, L.default)(o, "count")
            } else s = (0, L.default)(o, 'data["' + i.name + '"]');
            var f = (0, L.default)(o, "exhaustive");
            return void 0 !== s && (i.count = s), void 0 !== f && (i.exhaustive = f), i
        }

        function h(e, t, n) {
            var r = n && t.query && t.query.trim() ? [{
                type: "query",
                name: t.query,
                query: t.query,
                attributeName: "query"
            }] : [];
            return (0, F.default)(t.facetsRefinements, function (n, a) {
                (0, F.default)(n, function (n) {
                    r.push(d(t, "facet", a, n, e.facets))
                })
            }), (0, F.default)(t.facetsExcludes, function (e, t) {
                (0, F.default)(e, function (e) {
                    r.push({
                        type: "exclude",
                        attributeName: t,
                        name: e,
                        exclude: !0
                    })
                })
            }), (0, F.default)(t.disjunctiveFacetsRefinements, function (n, a) {
                (0, F.default)(n, function (n) {
                    r.push(d(t, "disjunctive", a, b(n), e.disjunctiveFacets))
                })
            }), (0, F.default)(t.hierarchicalFacetsRefinements, function (n, a) {
                (0, F.default)(n, function (n) {
                    r.push(d(t, "hierarchical", a, n, e.hierarchicalFacets))
                })
            }), (0, F.default)(t.numericRefinements, function (e, t) {
                (0, F.default)(e, function (e, n) {
                    (0, F.default)(e, function (e) {
                        r.push({
                            type: "numeric",
                            attributeName: t,
                            name: "" + e,
                            numericValue: e,
                            operator: n
                        })
                    })
                })
            }), (0, F.default)(t.tagRefinements, function (e) {
                r.push({
                    type: "tag",
                    attributeName: "_tags",
                    name: e
                })
            }), r
        }

        function m(e) {
            var t = e.helper,
                n = e.whiteList,
                r = e.blackList,
                a = void 0 === r ? [] : r,
                i = e.clearsQuery,
                o = void 0 !== i && i,
                s = v({
                    helper: t,
                    whiteList: n,
                    blackList: a
                }),
                u = t.state;
            return s.forEach(function (e) {
                u = "_tags" === e ? u.clearTags() : u.clearRefinements(e)
            }), o && (u = u.setQuery("")), u
        }

        function v(e) {
            var t = e.helper,
                n = e.whiteList,
                r = e.blackList,
                a = t.lastResults || {};
            return (n || h(a, t.state).map(function (e) {
                return e.attributeName
            })).filter(function (e) {
                return -1 === r.indexOf(e)
            })
        }

        function g(e, t) {
            if (t) return (0, B.default)(t, function (t, n) {
                return e + n
            })
        }

        function y(e) {
            return "number" === typeof e && e < 0 && (e = String(e).replace(/^-/, "\\-")), e
        }

        function b(e) {
            return String(e).replace(/^\\-/, "-")
        }

        function _(e, t) {
            if (void 0 === e || "function" !== typeof e) throw new Error(t)
        }

        function w(e) {
            return "object" === ("undefined" === typeof e ? "undefined" : C(e)) && null !== e && e.$$typeof === $
        }

        function P(e) {
            console.warn("[InstantSearch.js]: " + e.trim())
        }

        function R(e, t) {
            var n = !1;
            return function () {
                return n || (n = !0, P(t)), e.apply(void 0, arguments)
            }
        }

        function x(e) {
            x.cache[e] || (x.cache[e] = !0, P(e))
        }

        function S(e) {
            var t = e.match(J);
            if (!t) throw new Error('Invalid value for "aroundLatLng" parameter: "' + e + '"');
            return {
                lat: parseFloat(t[1]),
                lng: parseFloat(t[2])
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.parseAroundLatLngFromString = t.warn = t.deprecate = t.isReactElement = t.checkRendering = t.unescapeRefinement = t.escapeRefinement = t.prefixKeys = t.clearRefinements = t.getAttributesToClear = t.getRefinements = t.isDomElement = t.isSpecialClick = t.renderTemplate = t.prepareTemplateProps = t.bemHelper = t.getContainerNode = void 0;
        var C = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            j = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            O = n(19),
            N = r(O),
            E = n(18),
            F = r(E),
            M = n(9),
            k = r(M),
            T = n(61),
            L = r(T),
            I = n(14),
            A = r(I),
            H = n(387),
            U = r(H),
            D = n(176),
            B = r(D),
            V = n(177),
            q = r(V),
            Q = n(388),
            W = r(Q),
            z = n(389),
            K = r(z);
        t.getContainerNode = i, t.bemHelper = u, t.prepareTemplateProps = c, t.renderTemplate = f, t.isSpecialClick = s, t.isDomElement = o, t.getRefinements = h, t.getAttributesToClear = v, t.clearRefinements = m, t.prefixKeys = g, t.escapeRefinement = y, t.unescapeRefinement = b, t.checkRendering = _, t.isReactElement = w, t.deprecate = R, t.warn = x, t.parseAroundLatLngFromString = S;
        var $ = "function" === typeof Symbol && "symbol" === C(Symbol.iterator) && Symbol.for && Symbol.for("react.element") || 60103;
        x.cache = {};
        var J = /^(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)$/
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            var n, r, a, i, o = ye;
            for (i = arguments.length; i-- > 2;) ge.push(arguments[i]);
            for (t && null != t.children && (ge.length || ge.push(t.children), delete t.children); ge.length;)
                if ((r = ge.pop()) && void 0 !== r.pop)
                    for (i = r.length; i--;) ge.push(r[i]);
                else "boolean" === typeof r && (r = null), (a = "function" !== typeof e) && (null == r ? r = "" : "number" === typeof r ? r = String(r) : "string" !== typeof r && (a = !1)), a && n ? o[o.length - 1] += r : o === ye ? o = [r] : o.push(r), n = a;
            var s = new me;
            return s.nodeName = e, s.children = o, s.attributes = null == t ? void 0 : t, s.key = null == t ? void 0 : t.key, void 0 !== ve.vnode && ve.vnode(s), s
        }

        function a(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }

        function i(e, t) {
            return r(e.nodeName, a(a({}, e.attributes), t), arguments.length > 2 ? [].slice.call(arguments, 2) : e.children)
        }

        function o(e) {
            !e._dirty && (e._dirty = !0) && 1 == we.push(e) && (ve.debounceRendering || be)(s)
        }

        function s() {
            var e, t = we;
            for (we = []; e = t.pop();) e._dirty && S(e)
        }

        function u(e, t, n) {
            return "string" === typeof t || "number" === typeof t ? void 0 !== e.splitText : "string" === typeof t.nodeName ? !e._componentConstructor && c(e, t.nodeName) : n || e._componentConstructor === t.nodeName
        }

        function c(e, t) {
            return e.normalizedNodeName === t || e.nodeName.toLowerCase() === t.toLowerCase()
        }

        function l(e) {
            var t = a({}, e.attributes);
            t.children = e.children;
            var n = e.nodeName.defaultProps;
            if (void 0 !== n)
                for (var r in n) void 0 === t[r] && (t[r] = n[r]);
            return t
        }

        function f(e, t) {
            var n = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);
            return n.normalizedNodeName = e, n
        }

        function p(e) {
            var t = e.parentNode;
            t && t.removeChild(e)
        }

        function d(e, t, n, r, a) {
            if ("className" === t && (t = "class"), "key" === t);
            else if ("ref" === t) n && n(null), r && r(e);
            else if ("class" !== t || a)
                if ("style" === t) {
                    if (r && "string" !== typeof r && "string" !== typeof n || (e.style.cssText = r || ""), r && "object" === typeof r) {
                        if ("string" !== typeof n)
                            for (var i in n) i in r || (e.style[i] = "");
                        for (var i in r) e.style[i] = "number" === typeof r[i] && !1 === _e.test(i) ? r[i] + "px" : r[i]
                    }
                } else if ("dangerouslySetInnerHTML" === t) r && (e.innerHTML = r.__html || "");
            else if ("o" == t[0] && "n" == t[1]) {
                var o = t !== (t = t.replace(/Capture$/, ""));
                t = t.toLowerCase().substring(2), r ? n || e.addEventListener(t, h, o) : e.removeEventListener(t, h, o), (e._listeners || (e._listeners = {}))[t] = r
            } else if ("list" !== t && "type" !== t && !a && t in e) {
                try {
                    e[t] = null == r ? "" : r
                } catch (e) {}
                null != r && !1 !== r || "spellcheck" == t || e.removeAttribute(t)
            } else {
                var s = a && t !== (t = t.replace(/^xlink:?/, ""));
                null == r || !1 === r ? s ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" !== typeof r && (s ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), r) : e.setAttribute(t, r))
            } else e.className = r || ""
        }

        function h(e) {
            return this._listeners[e.type](ve.event && ve.event(e) || e)
        }

        function m() {
            for (var e; e = Pe.pop();) ve.afterMount && ve.afterMount(e), e.componentDidMount && e.componentDidMount()
        }

        function v(e, t, n, r, a, i) {
            Re++ || (xe = null != a && void 0 !== a.ownerSVGElement, Se = null != e && !("__preactattr_" in e));
            var o = g(e, t, n, r, i);
            return a && o.parentNode !== a && a.appendChild(o), --Re || (Se = !1, i || m()), o
        }

        function g(e, t, n, r, a) {
            var i = e,
                o = xe;
            if (null != t && "boolean" !== typeof t || (t = ""), "string" === typeof t || "number" === typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || a) ? e.nodeValue != t && (e.nodeValue = t) : (i = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(i, e), b(e, !0))), i.__preactattr_ = !0, i;
            var s = t.nodeName;
            if ("function" === typeof s) return C(e, t, n, r);
            if (xe = "svg" === s || "foreignObject" !== s && xe, s = String(s), (!e || !c(e, s)) && (i = f(s, xe), e)) {
                for (; e.firstChild;) i.appendChild(e.firstChild);
                e.parentNode && e.parentNode.replaceChild(i, e), b(e, !0)
            }
            var u = i.firstChild,
                l = i.__preactattr_,
                p = t.children;
            if (null == l) {
                l = i.__preactattr_ = {};
                for (var d = i.attributes, h = d.length; h--;) l[d[h].name] = d[h].value
            }
            return !Se && p && 1 === p.length && "string" === typeof p[0] && null != u && void 0 !== u.splitText && null == u.nextSibling ? u.nodeValue != p[0] && (u.nodeValue = p[0]) : (p && p.length || null != u) && y(i, p, n, r, Se || null != l.dangerouslySetInnerHTML), w(i, t.attributes, l), xe = o, i
        }

        function y(e, t, n, r, a) {
            var i, o, s, c, l, f = e.childNodes,
                d = [],
                h = {},
                m = 0,
                v = 0,
                y = f.length,
                _ = 0,
                w = t ? t.length : 0;
            if (0 !== y)
                for (var P = 0; P < y; P++) {
                    var R = f[P],
                        x = R.__preactattr_,
                        S = w && x ? R._component ? R._component.__key : x.key : null;
                    null != S ? (m++, h[S] = R) : (x || (void 0 !== R.splitText ? !a || R.nodeValue.trim() : a)) && (d[_++] = R)
                }
            if (0 !== w)
                for (var P = 0; P < w; P++) {
                    c = t[P], l = null;
                    var S = c.key;
                    if (null != S) m && void 0 !== h[S] && (l = h[S], h[S] = void 0, m--);
                    else if (v < _)
                        for (i = v; i < _; i++)
                            if (void 0 !== d[i] && u(o = d[i], c, a)) {
                                l = o, d[i] = void 0, i === _ - 1 && _--, i === v && v++;
                                break
                            } l = g(l, c, n, r), s = f[P], l && l !== e && l !== s && (null == s ? e.appendChild(l) : l === s.nextSibling ? p(s) : e.insertBefore(l, s))
                }
            if (m)
                for (var P in h) void 0 !== h[P] && b(h[P], !1);
            for (; v <= _;) void 0 !== (l = d[_--]) && b(l, !1)
        }

        function b(e, t) {
            var n = e._component;
            n ? j(n) : (null != e.__preactattr_ && e.__preactattr_.ref && e.__preactattr_.ref(null), !1 !== t && null != e.__preactattr_ || p(e), _(e))
        }

        function _(e) {
            for (e = e.lastChild; e;) {
                var t = e.previousSibling;
                b(e, !0), e = t
            }
        }

        function w(e, t, n) {
            var r;
            for (r in n) t && null != t[r] || null == n[r] || d(e, r, n[r], n[r] = void 0, xe);
            for (r in t) "children" === r || "innerHTML" === r || r in n && t[r] === ("value" === r || "checked" === r ? e[r] : n[r]) || d(e, r, n[r], n[r] = t[r], xe)
        }

        function P(e, t, n) {
            var r, a = Ce.length;
            for (e.prototype && e.prototype.render ? (r = new e(t, n), O.call(r, t, n)) : (r = new O(t, n), r.constructor = e, r.render = R); a--;)
                if (Ce[a].constructor === e) return r.nextBase = Ce[a].nextBase, Ce.splice(a, 1), r;
            return r
        }

        function R(e, t, n) {
            return this.constructor(e, n)
        }

        function x(e, t, n, r, a) {
            e._disable || (e._disable = !0, e.__ref = t.ref, e.__key = t.key, delete t.ref, delete t.key, "undefined" === typeof e.constructor.getDerivedStateFromProps && (!e.base || a ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, r)), r && r !== e.context && (e.prevContext || (e.prevContext = e.context), e.context = r), e.prevProps || (e.prevProps = e.props), e.props = t, e._disable = !1, 0 !== n && (1 !== n && !1 === ve.syncComponentUpdates && e.base ? o(e) : S(e, 1, a)), e.__ref && e.__ref(e))
        }

        function S(e, t, n, r) {
            if (!e._disable) {
                var i, o, s, u = e.props,
                    c = e.state,
                    f = e.context,
                    p = e.prevProps || u,
                    d = e.prevState || c,
                    h = e.prevContext || f,
                    g = e.base,
                    y = e.nextBase,
                    _ = g || y,
                    w = e._component,
                    R = !1,
                    C = h;
                if (e.constructor.getDerivedStateFromProps && (c = a(a({}, c), e.constructor.getDerivedStateFromProps(u, c)), e.state = c), g && (e.props = p, e.state = d, e.context = h, 2 !== t && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(u, c, f) ? R = !0 : e.componentWillUpdate && e.componentWillUpdate(u, c, f), e.props = u, e.state = c, e.context = f), e.prevProps = e.prevState = e.prevContext = e.nextBase = null, e._dirty = !1, !R) {
                    i = e.render(u, c, f), e.getChildContext && (f = a(a({}, f), e.getChildContext())), g && e.getSnapshotBeforeUpdate && (C = e.getSnapshotBeforeUpdate(p, d));
                    var O, N, E = i && i.nodeName;
                    if ("function" === typeof E) {
                        var F = l(i);
                        o = w, o && o.constructor === E && F.key == o.__key ? x(o, F, 1, f, !1) : (O = o, e._component = o = P(E, F, f), o.nextBase = o.nextBase || y, o._parentComponent = e, x(o, F, 0, f, !1), S(o, 1, n, !0)), N = o.base
                    } else s = _, O = w, O && (s = e._component = null), (_ || 1 === t) && (s && (s._component = null), N = v(s, i, f, n || !g, _ && _.parentNode, !0));
                    if (_ && N !== _ && o !== w) {
                        var M = _.parentNode;
                        M && N !== M && (M.replaceChild(N, _), O || (_._component = null, b(_, !1)))
                    }
                    if (O && j(O), e.base = N, N && !r) {
                        for (var k = e, T = e; T = T._parentComponent;)(k = T).base = N;
                        N._component = k, N._componentConstructor = k.constructor
                    }
                }
                for (!g || n ? Pe.unshift(e) : R || (e.componentDidUpdate && e.componentDidUpdate(p, d, C), ve.afterUpdate && ve.afterUpdate(e)); e._renderCallbacks.length;) e._renderCallbacks.pop().call(e);
                Re || r || m()
            }
        }

        function C(e, t, n, r) {
            for (var a = e && e._component, i = a, o = e, s = a && e._componentConstructor === t.nodeName, u = s, c = l(t); a && !u && (a = a._parentComponent);) u = a.constructor === t.nodeName;
            return a && u && (!r || a._component) ? (x(a, c, 3, n, r), e = a.base) : (i && !s && (j(i), e = o = null), a = P(t.nodeName, c, n), e && !a.nextBase && (a.nextBase = e, o = null), x(a, c, 1, n, r), e = a.base, o && e !== o && (o._component = null, b(o, !1))), e
        }

        function j(e) {
            ve.beforeUnmount && ve.beforeUnmount(e);
            var t = e.base;
            e._disable = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;
            var n = e._component;
            n ? j(n) : t && (t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null), e.nextBase = t, p(t), Ce.push(e), _(t)), e.__ref && e.__ref(null)
        }

        function O(e, t) {
            this._dirty = !0, this.context = t, this.props = e, this.state = this.state || {}, this._renderCallbacks = []
        }

        function N(e, t, n) {
            return v(n, e, {}, !1, t, !1)
        }

        function E() {
            return null
        }

        function F(e) {
            var t = e.nodeName,
                n = e.attributes;
            e.attributes = {}, t.defaultProps && G(e.attributes, t.defaultProps), n && G(e.attributes, n)
        }

        function M(e, t) {
            var n, r, a;
            if (t) {
                for (a in t)
                    if (n = Me.test(a)) break;
                if (n) {
                    r = e.attributes = {};
                    for (a in t) t.hasOwnProperty(a) && (r[Me.test(a) ? a.replace(/([A-Z0-9])/, "-$1").toLowerCase() : a] = t[a])
                }
            }
        }

        function k(e, t, n) {
            var r = t && t._preactCompatRendered && t._preactCompatRendered.base;
            r && r.parentNode !== t && (r = null), !r && t && (r = t.firstElementChild);
            for (var a = t.childNodes.length; a--;) t.childNodes[a] !== r && t.removeChild(t.childNodes[a]);
            var i = N(e, t, r);
            return t && (t._preactCompatRendered = i && (i._component || {
                base: i
            })), "function" === typeof n && n(), i && i._component || i
        }

        function T(e, t, n, a) {
            var i = r(He, {
                    context: e.context
                }, t),
                o = k(i, n),
                s = o._component || o.base;
            return a && a.call(s, o), s
        }

        function L(e) {
            T(this, e.vnode, e.container)
        }

        function I(e, t) {
            return r(L, {
                vnode: e,
                container: t
            })
        }

        function A(e) {
            var t = e._preactCompatRendered && e._preactCompatRendered.base;
            return !(!t || t.parentNode !== e) && (N(r(E), e, t), !0)
        }

        function H(e) {
            return q.bind(null, e)
        }

        function U(e, t) {
            for (var n = t || 0; n < e.length; n++) {
                var r = e[n];
                Array.isArray(r) ? U(r) : r && "object" === typeof r && !z(r) && (r.props && r.type || r.attributes && r.nodeName || r.children) && (e[n] = q(r.type || r.nodeName, r.props || r.attributes, r.children))
            }
        }

        function D(e) {
            return "function" === typeof e && !(e.prototype && e.prototype.render)
        }

        function B(e) {
            return ee({
                displayName: e.displayName || e.name,
                render: function () {
                    return e(this.props, this.context)
                }
            })
        }

        function V(e) {
            var t = e[Ee];
            return t ? !0 === t ? e : t : (t = B(e), Object.defineProperty(t, Ee, {
                configurable: !0,
                value: !0
            }), t.displayName = e.displayName, t.propTypes = e.propTypes, t.defaultProps = e.defaultProps, Object.defineProperty(e, Ee, {
                configurable: !0,
                value: t
            }), t)
        }

        function q() {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            return U(e, 2), Q(r.apply(void 0, e))
        }

        function Q(e) {
            e.preactCompatNormalized = !0, J(e), D(e.nodeName) && (e.nodeName = V(e.nodeName));
            var t = e.attributes.ref,
                n = t && typeof t;
            return !Ue || "string" !== n && "number" !== n || (e.attributes.ref = K(t, Ue)), $(e), e
        }

        function W(e, t) {
            for (var n = [], a = arguments.length - 2; a-- > 0;) n[a] = arguments[a + 2];
            if (!z(e)) return e;
            var o = e.attributes || e.props,
                s = r(e.nodeName || e.type, G({}, o), e.children || o && o.children),
                u = [s, t];
            return n && n.length ? u.push(n) : t && t.children && u.push(t.children), Q(i.apply(void 0, u))
        }

        function z(e) {
            return e && (e instanceof Le || e.$$typeof === Ne)
        }

        function K(e, t) {
            return t._refProxies[e] || (t._refProxies[e] = function (n) {
                t && t.refs && (t.refs[e] = n, null === n && (delete t._refProxies[e], t = null))
            })
        }

        function $(e) {
            var t = e.nodeName,
                n = e.attributes;
            if (n && "string" === typeof t) {
                var r = {};
                for (var a in n) r[a.toLowerCase()] = a;
                if (r.ondoubleclick && (n.ondblclick = n[r.ondoubleclick], delete n[r.ondoubleclick]), r.onchange && ("textarea" === t || "input" === t.toLowerCase() && !/^fil|che|rad/i.test(n.type))) {
                    var i = r.oninput || "oninput";
                    n[i] || (n[i] = ie([n[i], n[r.onchange]]), delete n[r.onchange])
                }
            }
        }

        function J(e) {
            var t = e.attributes || (e.attributes = {});
            Qe.enumerable = "className" in t, t.className && (t.class = t.className), Object.defineProperty(t, "className", Qe)
        }

        function G(e, t) {
            for (var n = arguments, r = 1, a = void 0; r < arguments.length; r++)
                if (a = n[r])
                    for (var i in a) a.hasOwnProperty(i) && (e[i] = a[i]);
            return e
        }

        function Y(e, t) {
            for (var n in e)
                if (!(n in t)) return !0;
            for (var r in t)
                if (e[r] !== t[r]) return !0;
            return !1
        }

        function X(e) {
            return e && (e.base || 1 === e.nodeType && e) || null
        }

        function Z() {}

        function ee(e) {
            function t(e, t) {
                re(this), le.call(this, e, t, ke), oe.call(this, e, t)
            }
            return e = G({
                constructor: t
            }, e), e.mixins && ne(e, te(e.mixins)), e.statics && G(t, e.statics), e.propTypes && (t.propTypes = e.propTypes), e.defaultProps && (t.defaultProps = e.defaultProps), e.getDefaultProps && (t.defaultProps = e.getDefaultProps.call(t)), Z.prototype = le.prototype, t.prototype = G(new Z, e), t.displayName = e.displayName || "Component", t
        }

        function te(e) {
            for (var t = {}, n = 0; n < e.length; n++) {
                var r = e[n];
                for (var a in r) r.hasOwnProperty(a) && "function" === typeof r[a] && (t[a] || (t[a] = [])).push(r[a])
            }
            return t
        }

        function ne(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = ie(t[n].concat(e[n] || De), "getDefaultProps" === n || "getInitialState" === n || "getChildContext" === n))
        }

        function re(e) {
            for (var t in e) {
                var n = e[t];
                "function" !== typeof n || n.__bound || Fe.hasOwnProperty(t) || ((e[t] = n.bind(e)).__bound = !0)
            }
        }

        function ae(e, t, n) {
            if ("string" === typeof t && (t = e.constructor.prototype[t]), "function" === typeof t) return t.apply(e, n)
        }

        function ie(e, t) {
            return function () {
                for (var n, r = arguments, a = this, i = 0; i < e.length; i++) {
                    var o = ae(a, e[i], r);
                    if (t && null != o) {
                        n || (n = {});
                        for (var s in o) o.hasOwnProperty(s) && (n[s] = o[s])
                    } else "undefined" !== typeof o && (n = o)
                }
                return n
            }
        }

        function oe(e, t) {
            se.call(this, e, t), this.componentWillReceiveProps = ie([se, this.componentWillReceiveProps || "componentWillReceiveProps"]), this.render = ie([se, ue, this.render || "render", ce])
        }

        function se(e, t) {
            if (e) {
                var n = e.children;
                if (n && Array.isArray(n) && 1 === n.length && ("string" === typeof n[0] || "function" === typeof n[0] || n[0] instanceof Le) && (e.children = n[0], e.children && "object" === typeof e.children && (e.children.length = 1, e.children[0] = e.children)), Te) {
                    var r = "function" === typeof this ? this : this.constructor,
                        a = this.propTypes || r.propTypes,
                        i = this.displayName || r.name;
                    a && he.a.checkPropTypes(a, e, "prop", i)
                }
            }
        }

        function ue(e) {
            Ue = this
        }

        function ce() {
            Ue === this && (Ue = null)
        }

        function le(e, t, n) {
            O.call(this, e, t), this.state = this.getInitialState ? this.getInitialState() : {}, this.refs = {}, this._refProxies = {}, n !== ke && oe.call(this, e, t)
        }

        function fe(e, t) {
            le.call(this, e, t)
        }

        function pe(e) {
            e()
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var de = n(209),
            he = n.n(de),
            me = function () {},
            ve = {},
            ge = [],
            ye = [],
            be = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout,
            _e = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
            we = [],
            Pe = [],
            Re = 0,
            xe = !1,
            Se = !1,
            Ce = [];
        a(O.prototype, {
            setState: function (e, t) {
                this.prevState || (this.prevState = this.state), this.state = a(a({}, this.state), "function" === typeof e ? e(this.state, this.props) : e), t && this._renderCallbacks.push(t), o(this)
            },
            forceUpdate: function (e) {
                e && this._renderCallbacks.push(e), S(this, 2)
            },
            render: function () {}
        });
        n.d(t, "version", function () {
            return je
        }), n.d(t, "DOM", function () {
            return Ve
        }), n.d(t, "Children", function () {
            return Be
        }), n.d(t, "render", function () {
            return k
        }), n.d(t, "createClass", function () {
            return ee
        }), n.d(t, "createPortal", function () {
            return I
        }), n.d(t, "createFactory", function () {
            return H
        }), n.d(t, "createElement", function () {
            return q
        }), n.d(t, "cloneElement", function () {
            return W
        }), n.d(t, "isValidElement", function () {
            return z
        }), n.d(t, "findDOMNode", function () {
            return X
        }), n.d(t, "unmountComponentAtNode", function () {
            return A
        }), n.d(t, "Component", function () {
            return le
        }), n.d(t, "PureComponent", function () {
            return fe
        }), n.d(t, "unstable_renderSubtreeIntoContainer", function () {
            return T
        }), n.d(t, "unstable_batchedUpdates", function () {
            return pe
        }), n.d(t, "__spread", function () {
            return G
        }), n.d(t, "PropTypes", function () {
            return he.a
        });
        var je = "15.1.0",
            Oe = "a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan".split(" "),
            Ne = "undefined" !== typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
            Ee = "undefined" !== typeof Symbol && Symbol.for ? Symbol.for("__preactCompatWrapper") : "__preactCompatWrapper",
            Fe = {
                constructor: 1,
                render: 1,
                shouldComponentUpdate: 1,
                componentWillReceiveProps: 1,
                componentWillUpdate: 1,
                componentDidUpdate: 1,
                componentWillMount: 1,
                componentDidMount: 1,
                componentWillUnmount: 1,
                componentDidUnmount: 1
            },
            Me = /^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vector|vert|word|writing|x)[A-Z]/,
            ke = {},
            Te = !1;
        try {
            Te = !1
        } catch (e) {}
        var Le = r("a", null).constructor;
        Le.prototype.$$typeof = Ne, Le.prototype.preactCompatUpgraded = !1, Le.prototype.preactCompatNormalized = !1, Object.defineProperty(Le.prototype, "type", {
            get: function () {
                return this.nodeName
            },
            set: function (e) {
                this.nodeName = e
            },
            configurable: !0
        }), Object.defineProperty(Le.prototype, "props", {
            get: function () {
                return this.attributes
            },
            set: function (e) {
                this.attributes = e
            },
            configurable: !0
        });
        var Ie = ve.event;
        ve.event = function (e) {
            return Ie && (e = Ie(e)), e.persist = Object, e.nativeEvent = e, e
        };
        var Ae = ve.vnode;
        ve.vnode = function (e) {
            if (!e.preactCompatUpgraded) {
                e.preactCompatUpgraded = !0;
                var t = e.nodeName,
                    n = e.attributes = null == e.attributes ? {} : G({}, e.attributes);
                "function" === typeof t ? (!0 === t[Ee] || t.prototype && "isReactComponent" in t.prototype) && (e.children && "" === String(e.children) && (e.children = void 0), e.children && (n.children = e.children), e.preactCompatNormalized || Q(e), F(e)) : (e.children && "" === String(e.children) && (e.children = void 0), e.children && (n.children = e.children), n.defaultValue && (n.value || 0 === n.value || (n.value = n.defaultValue), delete n.defaultValue), M(e, n))
            }
            Ae && Ae(e)
        };
        var He = function () {};
        He.prototype.getChildContext = function () {
            return this.props.context
        }, He.prototype.render = function (e) {
            return e.children[0]
        };
        for (var Ue, De = [], Be = {
                map: function (e, t, n) {
                    return null == e ? null : (e = Be.toArray(e), n && n !== e && (t = t.bind(n)), e.map(t))
                },
                forEach: function (e, t, n) {
                    if (null == e) return null;
                    e = Be.toArray(e), n && n !== e && (t = t.bind(n)), e.forEach(t)
                },
                count: function (e) {
                    return e && e.length || 0
                },
                only: function (e) {
                    if (e = Be.toArray(e), 1 !== e.length) throw new Error("Children.only() expects only one child.");
                    return e[0]
                },
                toArray: function (e) {
                    return null == e ? [] : De.concat(e)
                }
            }, Ve = {}, qe = Oe.length; qe--;) Ve[Oe[qe]] = H(Oe[qe]);
        var Qe = {
            configurable: !0,
            get: function () {
                return this.class
            },
            set: function (e) {
                this.class = e
            }
        };
        G(le.prototype = new O, {
            constructor: le,
            isReactComponent: {},
            replaceState: function (e, t) {
                var n = this;
                this.setState(e, t);
                for (var r in n.state) r in e || delete n.state[r]
            },
            getDOMNode: function () {
                return this.base
            },
            isMounted: function () {
                return !!this.base
            }
        }), Z.prototype = le.prototype, fe.prototype = new Z, fe.prototype.isPureReactComponent = !0, fe.prototype.shouldComponentUpdate = function (e, t) {
            return Y(this.props, e) || Y(this.state, t)
        };
        var We = {
            version: je,
            DOM: Ve,
            PropTypes: he.a,
            Children: Be,
            render: k,
            createClass: ee,
            createPortal: I,
            createFactory: H,
            createElement: q,
            cloneElement: W,
            isValidElement: z,
            findDOMNode: X,
            unmountComponentAtNode: A,
            Component: le,
            PureComponent: fe,
            unstable_renderSubtreeIntoContainer: T,
            unstable_batchedUpdates: pe,
            __spread: G
        };
        t.default = We
    }, function (e, t, n) {
        var r, a;
        ! function () {
            "use strict";

            function n() {
                for (var e = [], t = 0; t < arguments.length; t++) {
                    var r = arguments[t];
                    if (r) {
                        var a = typeof r;
                        if ("string" === a || "number" === a) e.push(r);
                        else if (Array.isArray(r) && r.length) {
                            var o = n.apply(null, r);
                            o && e.push(o)
                        } else if ("object" === a)
                            for (var s in r) i.call(r, s) && r[s] && e.push(s)
                    }
                }
                return e.join(" ")
            }
            var i = {}.hasOwnProperty;
            "undefined" !== typeof e && e.exports ? (n.default = n, e.exports = n) : (r = [], void 0 !== (a = function () {
                return n
            }.apply(t, r)) && (e.exports = a))
        }()
    }, function (e, t, n) {
        e.exports = n(408)()
    }, function (e, t) {
        var n = Array.isArray;
        e.exports = n
    }, function (e, t, n) {
        var r = n(115),
            a = "object" == typeof self && self && self.Object === Object && self,
            i = r || a || Function("return this")();
        e.exports = i
    }, function (e, t) {
        function n(e) {
            return null != e && "object" == typeof e
        }
        e.exports = n
    }, function (e, t) {
        function n(e) {
            var t = typeof e;
            return null != e && ("object" == t || "function" == t)
        }
        e.exports = n
    }, function (e, t, n) {
        function r(e, t) {
            return a(e, t)
        }
        var a = n(93);
        e.exports = r
    }, function (e, t, n) {
        var r = n(305),
            a = n(153),
            i = r(a);
        e.exports = i
    }, function (e, t, n) {
        function r(e) {
            return "function" == typeof e ? e : null == e ? o : "object" == typeof e ? s(e) ? i(e[0], e[1]) : a(e) : u(e)
        }
        var a = n(260),
            i = n(274),
            o = n(25),
            s = n(4),
            u = n(279);
        e.exports = r
    }, function (e, t, n) {
        function r(e, t) {
            return (s(e) ? a : o)(e, i(t, 3))
        }
        var a = n(21),
            i = n(10),
            o = n(139),
            s = n(4);
        e.exports = r
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function o(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function s(e, t, n) {
            if (!e) return n;
            var r = (0, m.default)(n),
                a = void 0,
                i = "undefined" === typeof e ? "undefined" : u(e);
            if ("function" === i) a = e(r);
            else {
                if ("object" !== i) throw new Error("transformData must be a function or an object, was " + i + " (key : " + t + ")");
                a = e[t] ? e[t](r) : n
            }
            var o = "undefined" === typeof a ? "undefined" : u(a),
                s = "undefined" === typeof n ? "undefined" : u(n);
            if (o !== s) throw new Error("`transformData` must return a `" + s + "`, got `" + o + "`.");
            return a
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PureTemplate = void 0;
        var u = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            c = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            l = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            f = n(1),
            p = r(f),
            d = n(3),
            h = (r(d), n(210)),
            m = r(h),
            v = n(8),
            g = r(v),
            y = n(0),
            b = t.PureTemplate = function (e) {
                function t() {
                    return a(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return o(t, e), l(t, [{
                    key: "shouldComponentUpdate",
                    value: function (e) {
                        return !(0, g.default)(this.props.data, e.data) || this.props.templateKey !== e.templateKey || !(0, g.default)(this.props.rootProps, e.rootProps)
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this.props.rootTagName,
                            t = this.props.useCustomCompileOptions[this.props.templateKey],
                            n = t ? this.props.templatesConfig.compileOptions : {},
                            r = (0, y.renderTemplate)({
                                templates: this.props.templates,
                                templateKey: this.props.templateKey,
                                compileOptions: n,
                                helpers: this.props.templatesConfig.helpers,
                                data: this.props.data
                            });
                        if (null === r) return null;
                        if ((0, y.isReactElement)(r)) throw new Error("Support for templates as React elements has been removed, please use react-instantsearch");
                        return p.default.createElement(e, c({}, this.props.rootProps, {
                            dangerouslySetInnerHTML: {
                                __html: r
                            }
                        }))
                    }
                }]), t
            }(f.Component);
        b.defaultProps = {
            data: {},
            rootTagName: "div",
            useCustomCompileOptions: {},
            templates: {},
            templatesConfig: {}
        };
        t.default = function (e) {
            return function (t) {
                var n = void 0 === t.data ? {} : t.data;
                return p.default.createElement(e, c({}, t, {
                    data: s(t.transformData, t.templateKey, n)
                }))
            }
        }(b)
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function o(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }();
        t.default = function (e) {
            var t, n;
            return n = t = function (t) {
                function n() {
                    return a(this, n), i(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments))
                }
                return o(n, t), s(n, [{
                    key: "render",
                    value: function () {
                        var t = this.props.shouldAutoHideContainer;
                        return l.default.createElement("div", {
                            style: {
                                display: t ? "none" : ""
                            }
                        }, l.default.createElement(e, this.props))
                    }
                }]), n
            }(c.Component), t.displayName = e.name + "-AutoHide", n
        };
        var u = n(3),
            c = (r(u), n(1)),
            l = r(c)
    }, function (e, t, n) {
        function r(e) {
            return o(e) ? a(e) : i(e)
        }
        var a = n(113),
            i = n(116),
            o = n(16);
        e.exports = r
    }, function (e, t, n) {
        function r(e) {
            return null == e ? void 0 === e ? u : s : c && c in Object(e) ? i(e) : o(e)
        }
        var a = n(27),
            i = n(222),
            o = n(223),
            s = "[object Null]",
            u = "[object Undefined]",
            c = a ? a.toStringTag : void 0;
        e.exports = r
    }, function (e, t, n) {
        function r(e) {
            return null != e && i(e.length) && !a(e)
        }
        var a = n(17),
            i = n(82);
        e.exports = r
    }, function (e, t, n) {
        function r(e) {
            if (!i(e)) return !1;
            var t = a(e);
            return t == s || t == u || t == o || t == c
        }
        var a = n(15),
            i = n(7),
            o = "[object AsyncFunction]",
            s = "[object Function]",
            u = "[object GeneratorFunction]",
            c = "[object Proxy]";
        e.exports = r
    }, function (e, t, n) {
        function r(e, t) {
            return (s(e) ? a : i)(e, o(t))
        }
        var a = n(92),
            i = n(45),
            o = n(91),
            s = n(4);
        e.exports = r
    }, function (e, t, n) {
        function r(e, t, n) {
            var r = u(e) ? a : s,
                c = arguments.length < 3;
            return r(e, o(t, 4), n, c, i)
        }
        var a = n(282),
            i = n(45),
            o = n(10),
            s = n(283),
            u = n(4);
        e.exports = r
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function o(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function s(e) {
            var t = function (t) {
                function n(e) {
                    a(this, n);
                    var t = i(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e));
                    return t.handleHeaderClick = t.handleHeaderClick.bind(t), t.state = {
                        collapsed: e.collapsible && e.collapsible.collapsed
                    }, t._cssClasses = {
                        root: (0, h.default)("ais-root", t.props.cssClasses.root),
                        body: (0, h.default)("ais-body", t.props.cssClasses.body)
                    }, t._footerElement = t._getElement({
                        type: "footer"
                    }), t
                }
                return o(n, t), c(n, [{
                    key: "_getElement",
                    value: function (e) {
                        var t = e.type,
                            n = e.handleClick,
                            r = void 0 === n ? null : n,
                            a = this.props.templateProps && this.props.templateProps.templates;
                        if (!a || !a[t]) return null;
                        var i = (0, h.default)(this.props.cssClasses[t], "ais-" + t),
                            o = (0, v.default)(this.props, "headerFooterData." + t);
                        return p.default.createElement(y.default, u({}, this.props.templateProps, {
                            data: o,
                            rootProps: {
                                className: i,
                                onClick: r
                            },
                            templateKey: t,
                            transformData: null
                        }))
                    }
                }, {
                    key: "handleHeaderClick",
                    value: function () {
                        this.setState({
                            collapsed: !this.state.collapsed
                        })
                    }
                }, {
                    key: "render",
                    value: function () {
                        var t = [this._cssClasses.root];
                        this.props.collapsible && t.push("ais-root__collapsible"), this.state.collapsed && t.push("ais-root__collapsed");
                        var n = u({}, this._cssClasses, {
                                root: (0, h.default)(t)
                            }),
                            r = this._getElement({
                                type: "header",
                                handleClick: this.props.collapsible ? this.handleHeaderClick : null
                            });
                        return p.default.createElement("div", {
                            className: n.root
                        }, r, p.default.createElement("div", {
                            className: n.body
                        }, p.default.createElement(e, this.props)), this._footerElement)
                    }
                }]), n
            }(f.Component);
            return t.defaultProps = {
                cssClasses: {},
                collapsible: !1
            }, t.displayName = e.name + "-HeaderFooter", t
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            c = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            l = n(3),
            f = (r(l), n(1)),
            p = r(f),
            d = n(2),
            h = r(d),
            m = n(61),
            v = r(m),
            g = n(12),
            y = r(g);
        t.default = s
    }, function (e, t) {
        function n(e, t) {
            for (var n = -1, r = null == e ? 0 : e.length, a = Array(r); ++n < r;) a[n] = t(e[n], n, e);
            return a
        }
        e.exports = n
    }, function (e, t, n) {
        function r(e, t) {
            return o(i(e, t, a), e + "")
        }
        var a = n(25),
            i = n(121),
            o = n(89);
        e.exports = r
    }, function (e, t, n) {
        function r(e) {
            if (!o(e) || a(e) != s) return !1;
            var t = i(e);
            if (null === t) return !0;
            var n = f.call(t, "constructor") && t.constructor;
            return "function" == typeof n && n instanceof n && l.call(n) == p
        }
        var a = n(15),
            i = n(100),
            o = n(6),
            s = "[object Object]",
            u = Function.prototype,
            c = Object.prototype,
            l = u.toString,
            f = c.hasOwnProperty,
            p = l.call(Object);
        e.exports = r
    }, function (e, t, n) {
        function r(e, t) {
            var n = i(e, t);
            return a(n) ? n : void 0
        }
        var a = n(232),
            i = n(235);
        e.exports = r
    }, function (e, t) {
        function n(e) {
            return e
        }
        e.exports = n
    }, function (e, t, n) {
        function r(e) {
            return "string" == typeof e || !i(e) && o(e) && a(e) == s
        }
        var a = n(15),
            i = n(4),
            o = n(6),
            s = "[object String]";
        e.exports = r
    }, function (e, t, n) {
        var r = n(5),
            a = r.Symbol;
        e.exports = a
    }, function (e, t) {
        function n(e, t) {
            return e === t || e !== e && t !== t
        }
        e.exports = n
    }, function (e, t, n) {
        function r(e, t) {
            return a(e) ? e : i(e, t) ? [e] : o(s(e))
        }
        var a = n(4),
            i = n(97),
            o = n(275),
            s = n(63);
        e.exports = r
    }, function (e, t, n) {
        function r(e) {
            if ("string" == typeof e || a(e)) return e;
            var t = e + "";
            return "0" == t && 1 / e == -i ? "-0" : t
        }
        var a = n(48),
            i = 1 / 0;
        e.exports = r
    }, function (e, t, n) {
        function r(e, t, n, r) {
            var o = !n;
            n || (n = {});
            for (var s = -1, u = t.length; ++s < u;) {
                var c = t[s],
                    l = r ? r(n[c], e[c], c, n, e) : void 0;
                void 0 === l && (l = e[c]), o ? i(n, c, l) : a(n, c, l)
            }
            return n
        }
        var a = n(99),
            i = n(49);
        e.exports = r
    }, function (e, t, n) {
        function r(e) {
            var t = a(e),
                n = t % 1;
            return t === t ? n ? t - n : t : 0
        }
        var a = n(151);
        e.exports = r
    }, function (e, t, n) {
        function r(e) {
            if (null == e) return !0;
            if (u(e) && (s(e) || "string" == typeof e || "function" == typeof e.splice || c(e) || f(e) || o(e))) return !e.length;
            var t = i(e);
            if (t == p || t == d) return !e.size;
            if (l(e)) return !a(e).length;
            for (var n in e)
                if (m.call(e, n)) return !1;
            return !0
        }
        var a = n(116),
            i = n(47),
            o = n(38),
            s = n(4),
            u = n(16),
            c = n(40),
            l = n(54),
            f = n(53),
            p = "[object Map]",
            d = "[object Set]",
            h = Object.prototype,
            m = h.hasOwnProperty;
        e.exports = r
    }, function (e, t) {
        function n(e, t) {
            for (var n = -1, a = e.length, i = 0, o = []; ++n < a;) {
                var s = e[n];
                s !== t && s !== r || (e[n] = r, o[i++] = n)
            }
            return o
        }
        var r = "__lodash_placeholder__";
        e.exports = n
    }, function (e, t) {
        var n = Object.prototype.hasOwnProperty,
            r = Object.prototype.toString;
        e.exports = function (e, t, a) {
            if ("[object Function]" !== r.call(t)) throw new TypeError("iterator must be a function");
            var i = e.length;
            if (i === +i)
                for (var o = 0; o < i; o++) t.call(a, e[o], o, e);
            else
                for (var s in e) n.call(e, s) && t.call(a, e[s], s, e)
        }
    }, function (e, t) {
        e.exports = function (e) {
            return JSON.parse(JSON.stringify(e))
        }
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function s(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.RawRefinementList = void 0;
        var u = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            c = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            l = n(3),
            f = (r(l), n(1)),
            p = r(f),
            d = n(2),
            h = r(d),
            m = n(0),
            v = n(12),
            g = r(v),
            y = n(425),
            b = r(y),
            _ = n(8),
            w = r(_),
            P = n(426),
            R = r(P),
            x = n(13),
            S = r(x),
            C = n(20),
            j = r(C),
            O = t.RawRefinementList = function (e) {
                function t(e) {
                    i(this, t);
                    var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return n.handleItemClick = n.handleItemClick.bind(n), n
                }
                return s(t, e), c(t, [{
                    key: "shouldComponentUpdate",
                    value: function (e, t) {
                        var n = t !== this.state,
                            r = !(0, w.default)(this.props.facetValues, e.facetValues);
                        return n || r
                    }
                }, {
                    key: "refine",
                    value: function (e, t) {
                        this.props.toggleRefinement(e, t)
                    }
                }, {
                    key: "_generateFacetItem",
                    value: function (e) {
                        var n = void 0;
                        e.data && e.data.length > 0 && (n = p.default.createElement(t, u({}, this.props, {
                            depth: this.props.depth + 1,
                            facetValues: e.data
                        })));
                        var r = this.props.createURL(e.value),
                            i = u({}, e, {
                                url: r,
                                cssClasses: this.props.cssClasses
                            }),
                            o = (0, h.default)(this.props.cssClasses.item, a({}, this.props.cssClasses.active, e.isRefined)),
                            s = e.value;
                        return void 0 !== e.isRefined && (s += "/" + e.isRefined), void 0 !== e.count && (s += "/" + e.count), p.default.createElement(b.default, {
                            facetValueToRefine: e.value,
                            handleClick: this.handleItemClick,
                            isRefined: e.isRefined,
                            itemClassName: o,
                            key: s,
                            subItems: n,
                            templateData: i,
                            templateKey: "item",
                            templateProps: this.props.templateProps
                        })
                    }
                }, {
                    key: "handleItemClick",
                    value: function (e) {
                        var t = e.facetValueToRefine,
                            n = e.originalEvent,
                            r = e.isRefined;
                        if (!(0, m.isSpecialClick)(n)) {
                            if ("INPUT" === n.target.tagName) return void this.refine(t, r);
                            for (var a = n.target; a !== n.currentTarget;) {
                                if ("LABEL" === a.tagName && (a.querySelector('input[type="checkbox"]') || a.querySelector('input[type="radio"]'))) return;
                                "A" === a.tagName && a.href && n.preventDefault(), a = a.parentNode
                            }
                            n.stopPropagation(), this.refine(t, r)
                        }
                    }
                }, {
                    key: "componentWillReceiveProps",
                    value: function (e) {
                        this.searchbox && !e.isFromSearch && this.searchbox.clearInput()
                    }
                }, {
                    key: "refineFirstValue",
                    value: function () {
                        var e = this.props.facetValues[0];
                        if (e) {
                            var t = e.value;
                            this.props.toggleRefinement(t)
                        }
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this,
                            t = [this.props.cssClasses.list];
                        this.props.cssClasses.depth && t.push("" + this.props.cssClasses.depth + this.props.depth);
                        var n = !0 === this.props.showMore && this.props.canToggleShowMore ? p.default.createElement(g.default, u({
                                rootProps: {
                                    onClick: this.props.toggleShowMore
                                },
                                templateKey: "show-more-" + (this.props.isShowingMore ? "active" : "inactive")
                            }, this.props.templateProps)) : void 0,
                            r = !0 !== this.props.searchIsAlwaysActive && !(this.props.isFromSearch || !this.props.hasExhaustiveItems),
                            a = this.props.searchFacetValues ? p.default.createElement(R.default, {
                                ref: function (t) {
                                    e.searchbox = t
                                },
                                placeholder: this.props.searchPlaceholder,
                                onChange: this.props.searchFacetValues,
                                onValidate: function () {
                                    return e.refineFirstValue()
                                },
                                disabled: r
                            }) : null,
                            i = this.props.searchFacetValues && this.props.isFromSearch && 0 === this.props.facetValues.length ? p.default.createElement(g.default, u({
                                templateKey: "noResults"
                            }, this.props.templateProps)) : null;
                        return p.default.createElement("div", {
                            className: (0, h.default)(t)
                        }, a, this.props.facetValues.map(this._generateFacetItem, this), i, n)
                    }
                }]), t
            }(f.Component);
        O.defaultProps = {
            cssClasses: {},
            depth: 0
        }, t.default = (0, S.default)((0, j.default)(O))
    }, function (e, t, n) {
        var r = n(221),
            a = n(6),
            i = Object.prototype,
            o = i.hasOwnProperty,
            s = i.propertyIsEnumerable,
            u = r(function () {
                return arguments
            }()) ? r : function (e) {
                return a(e) && o.call(e, "callee") && !s.call(e, "callee")
            };
        e.exports = u
    }, function (e, t) {
        var n;
        n = function () {
            return this
        }();
        try {
            n = n || Function("return this")() || (0, eval)("this")
        } catch (e) {
            "object" === typeof window && (n = window)
        }
        e.exports = n
    }, function (e, t, n) {
        (function (e) {
            var r = n(5),
                a = n(224),
                i = "object" == typeof t && t && !t.nodeType && t,
                o = i && "object" == typeof e && e && !e.nodeType && e,
                s = o && o.exports === i,
                u = s ? r.Buffer : void 0,
                c = u ? u.isBuffer : void 0,
                l = c || a;
            e.exports = l
        }).call(t, n(81)(e))
    }, function (e, t) {
        function n(e, t) {
            var n = typeof e;
            return !!(t = null == t ? r : t) && ("number" == n || "symbol" != n && a.test(e)) && e > -1 && e % 1 == 0 && e < t
        }
        var r = 9007199254740991,
            a = /^(?:0|[1-9]\d*)$/;
        e.exports = n
    }, function (e, t) {
        function n(e) {
            return function (t) {
                return e(t)
            }
        }
        e.exports = n
    }, function (e, t, n) {
        function r(e, t, n) {
            return t === t ? o(e, t, n) : a(e, i, n)
        }
        var a = n(119),
            i = n(252),
            o = n(253);
        e.exports = r
    }, function (e, t, n) {
        function r(e, t) {
            return e && a(e, t, i)
        }
        var a = n(125),
            i = n(14);
        e.exports = r
    }, function (e, t, n) {
        var r = n(44),
            a = n(258),
            i = a(r);
        e.exports = i
    }, function (e, t, n) {
        function r(e, t) {
            return (s(e) ? a : i)(e, o(t, 3))
        }
        var a = n(126),
            i = n(259),
            o = n(10),
            s = n(4);
        e.exports = r
    }, function (e, t, n) {
        var r = n(271),
            a = n(86),
            i = n(272),
            o = n(133),
            s = n(134),
            u = n(15),
            c = n(118),
            l = c(r),
            f = c(a),
            p = c(i),
            d = c(o),
            h = c(s),
            m = u;
        (r && "[object DataView]" != m(new r(new ArrayBuffer(1))) || a && "[object Map]" != m(new a) || i && "[object Promise]" != m(i.resolve()) || o && "[object Set]" != m(new o) || s && "[object WeakMap]" != m(new s)) && (m = function (e) {
            var t = u(e),
                n = "[object Object]" == t ? e.constructor : void 0,
                r = n ? c(n) : "";
            if (r) switch (r) {
                case l:
                    return "[object DataView]";
                case f:
                    return "[object Map]";
                case p:
                    return "[object Promise]";
                case d:
                    return "[object Set]";
                case h:
                    return "[object WeakMap]"
            }
            return t
        }), e.exports = m
    }, function (e, t, n) {
        function r(e) {
            return "symbol" == typeof e || i(e) && a(e) == o
        }
        var a = n(15),
            i = n(6),
            o = "[object Symbol]";
        e.exports = r
    }, function (e, t, n) {
        function r(e, t, n) {
            "__proto__" == t && a ? a(e, t, {
                configurable: !0,
                enumerable: !0,
                value: n,
                writable: !0
            }) : e[t] = n
        }
        var a = n(123);
        e.exports = r
    }, function (e, t, n) {
        function r(e) {
            return o(e) ? a(e, !0) : i(e)
        }
        var a = n(113),
            i = n(286),
            o = n(16);
        e.exports = r
    }, function (e, t) {
        function n(e) {
            return e.placeholder
        }
        e.exports = n
    }, function (e, t, n) {
        "use strict";

        function r(e, t, n) {
            return new a(e, t, n)
        }
        var a = n(220),
            i = n(80),
            o = n(158);
        r.version = n(178), r.AlgoliaSearchHelper = a, r.SearchParameters = i, r.SearchResults = o, r.url = n(108), e.exports = r
    }, function (e, t, n) {
        var r = n(225),
            a = n(42),
            i = n(83),
            o = i && i.isTypedArray,
            s = o ? a(o) : r;
        e.exports = s
    }, function (e, t) {
        function n(e) {
            var t = e && e.constructor;
            return e === ("function" == typeof t && t.prototype || r)
        }
        var r = Object.prototype;
        e.exports = n
    }, function (e, t, n) {
        var r = n(24),
            a = r(Object, "create");
        e.exports = a
    }, function (e, t, n) {
        function r(e) {
            var t = -1,
                n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        var a = n(240),
            i = n(241),
            o = n(242),
            s = n(243),
            u = n(244);
        r.prototype.clear = a, r.prototype.delete = i, r.prototype.get = o, r.prototype.has = s, r.prototype.set = u, e.exports = r
    }, function (e, t, n) {
        function r(e, t) {
            for (var n = e.length; n--;)
                if (a(e[n][0], t)) return n;
            return -1
        }
        var a = n(28);
        e.exports = r
    }, function (e, t, n) {
        function r(e, t) {
            var n = e.__data__;
            return a(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
        }
        var a = n(246);
        e.exports = r
    }, function (e, t) {
        function n(e, t, n) {
            switch (n.length) {
                case 0:
                    return e.call(t);
                case 1:
                    return e.call(t, n[0]);
                case 2:
                    return e.call(t, n[0], n[1]);
                case 3:
                    return e.call(t, n[0], n[1], n[2])
            }
            return e.apply(t, n)
        }
        e.exports = n
    }, function (e, t, n) {
        function r(e) {
            var t = this.__data__ = new a(e);
            this.size = t.size
        }
        var a = n(56),
            i = n(262),
            o = n(263),
            s = n(264),
            u = n(265),
            c = n(266);
        r.prototype.clear = i, r.prototype.delete = o, r.prototype.get = s, r.prototype.has = u, r.prototype.set = c, e.exports = r
    }, function (e, t, n) {
        function r(e, t, n) {
            var r = null == e ? void 0 : a(e, t);
            return void 0 === r ? n : r
        }
        var a = n(62);
        e.exports = r
    }, function (e, t, n) {
        function r(e, t) {
            t = a(t, e);
            for (var n = 0, r = t.length; null != e && n < r;) e = e[i(t[n++])];
            return n && n == r ? e : void 0
        }
        var a = n(29),
            i = n(30);
        e.exports = r
    }, function (e, t, n) {
        function r(e) {
            return null == e ? "" : a(e)
        }
        var a = n(98);
        e.exports = r
    }, function (e, t) {
        function n(e, t) {
            var n = -1,
                r = e.length;
            for (t || (t = Array(r)); ++n < r;) t[n] = e[n];
            return t
        }
        e.exports = n
    }, function (e, t, n) {
        var r = n(7),
            a = Object.create,
            i = function () {
                function e() {}
                return function (t) {
                    if (!r(t)) return {};
                    if (a) return a(t);
                    e.prototype = t;
                    var n = new e;
                    return e.prototype = void 0, n
                }
            }();
        e.exports = i
    }, function (e, t, n) {
        function r(e, t, n) {
            var r = null == e ? 0 : e.length;
            if (!r) return -1;
            var s = null == n ? 0 : i(n);
            return s < 0 && (s = o(r + s, 0)), a(e, t, s)
        }
        var a = n(43),
            i = n(32),
            o = Math.max;
        e.exports = r
    }, function (e, t) {
        function n(e) {
            return void 0 === e
        }
        e.exports = n
    }, function (e, t, n) {
        var r = n(22),
            a = n(28),
            i = n(69),
            o = n(50),
            s = Object.prototype,
            u = s.hasOwnProperty,
            c = r(function (e, t) {
                e = Object(e);
                var n = -1,
                    r = t.length,
                    c = r > 2 ? t[2] : void 0;
                for (c && i(t[0], t[1], c) && (r = 1); ++n < r;)
                    for (var l = t[n], f = o(l), p = -1, d = f.length; ++p < d;) {
                        var h = f[p],
                            m = e[h];
                        (void 0 === m || a(m, s[h]) && !u.call(e, h)) && (e[h] = l[h])
                    }
                return e
            });
        e.exports = c
    }, function (e, t, n) {
        function r(e, t, n) {
            if (!s(n)) return !1;
            var r = typeof t;
            return !!("number" == r ? i(n) && o(t, n.length) : "string" == r && t in n) && a(n[t], e)
        }
        var a = n(28),
            i = n(16),
            o = n(41),
            s = n(7);
        e.exports = r
    }, function (e, t, n) {
        function r(e, t, n, r, P, R, x, S) {
            var C = t & v;
            if (!C && "function" != typeof e) throw new TypeError(h);
            var j = r ? r.length : 0;
            if (j || (t &= ~(b | _), r = P = void 0), x = void 0 === x ? x : w(d(x), 0), S = void 0 === S ? S : d(S), j -= P ? P.length : 0, t & _) {
                var O = r,
                    N = P;
                r = P = void 0
            }
            var E = C ? void 0 : c(e),
                F = [e, t, n, r, P, O, N, R, x, S];
            if (E && l(F, E), e = F[0], t = F[1], n = F[2], r = F[3], P = F[4], S = F[9] = void 0 === F[9] ? C ? 0 : e.length : w(F[9] - j, 0), !S && t & (g | y) && (t &= ~(g | y)), t && t != m) M = t == g || t == y ? o(e, t, S) : t != b && t != (m | b) || P.length ? s.apply(void 0, F) : u(e, t, n, r);
            else var M = i(e, t, n);
            return p((E ? a : f)(M, F), e, t)
        }
        var a = n(160),
            i = n(329),
            o = n(330),
            s = n(162),
            u = n(341),
            c = n(166),
            l = n(342),
            f = n(168),
            p = n(169),
            d = n(32),
            h = "Expected a function",
            m = 1,
            v = 2,
            g = 8,
            y = 16,
            b = 32,
            _ = 64,
            w = Math.max;
        e.exports = r
    }, function (e, t, n) {
        function r(e) {
            return function () {
                var t = arguments;
                switch (t.length) {
                    case 0:
                        return new e;
                    case 1:
                        return new e(t[0]);
                    case 2:
                        return new e(t[0], t[1]);
                    case 3:
                        return new e(t[0], t[1], t[2]);
                    case 4:
                        return new e(t[0], t[1], t[2], t[3]);
                    case 5:
                        return new e(t[0], t[1], t[2], t[3], t[4]);
                    case 6:
                        return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                    case 7:
                        return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
                }
                var n = a(e.prototype),
                    r = e.apply(n, t);
                return i(r) ? r : n
            }
        }
        var a = n(65),
            i = n(7);
        e.exports = r
    }, function (e, t) {
        function n() {}
        e.exports = n
    }, function (e, t) {
        function n() {
            throw new Error("setTimeout has not been defined")
        }

        function r() {
            throw new Error("clearTimeout has not been defined")
        }

        function a(e) {
            if (l === setTimeout) return setTimeout(e, 0);
            if ((l === n || !l) && setTimeout) return l = setTimeout, setTimeout(e, 0);
            try {
                return l(e, 0)
            } catch (t) {
                try {
                    return l.call(null, e, 0)
                } catch (t) {
                    return l.call(this, e, 0)
                }
            }
        }

        function i(e) {
            if (f === clearTimeout) return clearTimeout(e);
            if ((f === r || !f) && clearTimeout) return f = clearTimeout, clearTimeout(e);
            try {
                return f(e)
            } catch (t) {
                try {
                    return f.call(null, e)
                } catch (t) {
                    return f.call(this, e)
                }
            }
        }

        function o() {
            m && d && (m = !1, d.length ? h = d.concat(h) : v = -1, h.length && s())
        }

        function s() {
            if (!m) {
                var e = a(o);
                m = !0;
                for (var t = h.length; t;) {
                    for (d = h, h = []; ++v < t;) d && d[v].run();
                    v = -1, t = h.length
                }
                d = null, m = !1, i(e)
            }
        }

        function u(e, t) {
            this.fun = e, this.array = t
        }

        function c() {}
        var l, f, p = e.exports = {};
        ! function () {
            try {
                l = "function" === typeof setTimeout ? setTimeout : n
            } catch (e) {
                l = n
            }
            try {
                f = "function" === typeof clearTimeout ? clearTimeout : r
            } catch (e) {
                f = r
            }
        }();
        var d, h = [],
            m = !1,
            v = -1;
        p.nextTick = function (e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            h.push(new u(e, t)), 1 !== h.length || m || a(s)
        }, u.prototype.run = function () {
            this.fun.apply(null, this.array)
        }, p.title = "browser", p.browser = !0, p.env = {}, p.argv = [], p.version = "", p.versions = {}, p.on = c, p.addListener = c, p.once = c, p.off = c, p.removeListener = c, p.removeAllListeners = c, p.emit = c, p.prependListener = c, p.prependOnceListener = c, p.listeners = function (e) {
            return []
        }, p.binding = function (e) {
            throw new Error("process.binding is not supported")
        }, p.cwd = function () {
            return "/"
        }, p.chdir = function (e) {
            throw new Error("process.chdir is not supported")
        }, p.umask = function () {
            return 0
        }
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            var r = n(35),
                a = this;
            "function" === typeof Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : a.stack = (new Error).stack || "Cannot get a stacktrace, browser is too old", this.name = "AlgoliaSearchError", this.message = e || "Unknown error", t && r(t, function (e, t) {
                a[t] = e
            })
        }

        function a(e, t) {
            function n() {
                var n = Array.prototype.slice.call(arguments, 0);
                "string" !== typeof n[0] && n.unshift(t), r.apply(this, n), this.name = "AlgoliaSearch" + e + "Error"
            }
            return i(n, r), n
        }
        var i = n(180);
        i(r, Error), e.exports = {
            AlgoliaSearchError: r,
            UnparsableJSON: a("UnparsableJSON", "Could not parse the incoming response as JSON, see err.more for details"),
            RequestTimeout: a("RequestTimeout", "Request timedout before getting a response"),
            Network: a("Network", "Network issue, see err.more for details"),
            JSONPScriptFail: a("JSONPScriptFail", "<script> was loaded but did not call our provided callback"),
            JSONPScriptError: a("JSONPScriptError", "<script> unable to load due to an `error` event on it"),
            Unknown: a("Unknown", "Unknown error occured")
        }
    }, function (e, t) {
        var n = {}.toString;
        e.exports = Array.isArray || function (e) {
            return "[object Array]" == n.call(e)
        }
    }, function (e, t, n) {
        var r = n(35);
        e.exports = function (e, t) {
            var n = [];
            return r(e, function (r, a) {
                n.push(t(r, a, e))
            }), n
        }
    }, function (e, t, n) {
        (function (r) {
            function a() {
                return !("undefined" === typeof window || !window.process || "renderer" !== window.process.type) || ("undefined" !== typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" !== typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" !== typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" !== typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
            }

            function i(e) {
                var n = this.useColors;
                if (e[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + e[0] + (n ? "%c " : " ") + "+" + t.humanize(this.diff), n) {
                    var r = "color: " + this.color;
                    e.splice(1, 0, r, "color: inherit");
                    var a = 0,
                        i = 0;
                    e[0].replace(/%[a-zA-Z%]/g, function (e) {
                        "%%" !== e && (a++, "%c" === e && (i = a))
                    }), e.splice(i, 0, r)
                }
            }

            function o() {
                return "object" === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
            }

            function s(e) {
                try {
                    null == e ? t.storage.removeItem("debug") : t.storage.debug = e
                } catch (e) {}
            }

            function u() {
                var e;
                try {
                    e = t.storage.debug
                } catch (e) {}
                return !e && "undefined" !== typeof r && "env" in r && (e = Object({
                    NODE_ENV: "production"
                }).DEBUG), e
            }
            t = e.exports = n(371), t.log = o, t.formatArgs = i, t.save = s, t.load = u, t.useColors = a, t.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : function () {
                try {
                    return window.localStorage
                } catch (e) {}
            }(), t.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], t.formatters.j = function (e) {
                try {
                    return JSON.stringify(e)
                } catch (e) {
                    return "[UnexpectedJSONParseError]: " + e.message
                }
            }, t.enable(u())
        }).call(t, n(73))
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function i(e) {
            return (0, d.default)(e).replace(new RegExp(y.highlightPreTag, "g"), "<em>").replace(new RegExp(y.highlightPostTag, "g"), "</em>")
        }

        function o(e) {
            return (0, g.default)(e) && "string" !== typeof e.value ? (0, f.default)(e, function (e, t, n) {
                return c({}, e, a({}, n, o(t)))
            }, {}) : (0, m.default)(e) ? e.map(o) : c({}, e, {
                value: i(e.value)
            })
        }

        function s(e) {
            return void 0 === e.__escaped && (e = e.map(function (e) {
                return e._highlightResult && (e._highlightResult = o(e._highlightResult)), e._snippetResult && (e._snippetResult = o(e._snippetResult)), e
            }), e.__escaped = !0), e
        }

        function u(e) {
            return e.map(function (e) {
                return c({}, e, {
                    highlighted: i(e.highlighted)
                })
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.tagConfig = void 0;
        var c = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
        t.default = s, t.escapeFacets = u;
        var l = n(19),
            f = r(l),
            p = n(392),
            d = r(p),
            h = n(4),
            m = r(h),
            v = n(23),
            g = r(v),
            y = t.tagConfig = {
                highlightPreTag: "__ais-highlight__",
                highlightPostTag: "__/ais-highlight__"
            }
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function i(e, t) {
            return (0, p.checkRendering)(e, d),
                function () {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = n.attributeName,
                        i = n.min,
                        u = n.max,
                        l = n.precision,
                        p = void 0 === l ? 2 : l;
                    if (!r) throw new Error(d);
                    var h = (0, f.default)(i),
                        m = (0, f.default)(u),
                        v = function (e) {
                            return Number(Number(e).toFixed(p))
                        },
                        g = {
                            from: function (e) {
                                return e
                            },
                            to: function (e) {
                                return v(e).toLocaleString()
                            }
                        };
                    return {
                        _getCurrentRange: function (e) {
                            var t = Math.pow(10, p),
                                n = void 0;
                            n = h ? i : (0, f.default)(e.min) ? e.min : 0;
                            var r = void 0;
                            return r = m ? u : (0, f.default)(e.max) ? e.max : 0, {
                                min: Math.floor(n * t) / t,
                                max: Math.ceil(r * t) / t
                            }
                        },
                        _getCurrentRefinement: function (e) {
                            var t = e.getNumericRefinement(r, ">=") || [],
                                n = s(t, 1),
                                a = n[0],
                                i = e.getNumericRefinement(r, "<=") || [],
                                o = s(i, 1),
                                u = o[0];
                            return [(0, f.default)(a) ? a : -1 / 0, (0, f.default)(u) ? u : 1 / 0]
                        },
                        _refine: function (e, t) {
                            return function () {
                                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                    a = s(n, 2),
                                    o = a[0],
                                    c = a[1],
                                    l = t.min,
                                    p = t.max,
                                    d = e.getNumericRefinement(r, ">=") || [],
                                    g = s(d, 1),
                                    y = g[0],
                                    b = e.getNumericRefinement(r, "<=") || [],
                                    _ = s(b, 1),
                                    w = _[0],
                                    P = void 0 === o || "" === o,
                                    R = void 0 === c || "" === c,
                                    x = P ? void 0 : parseFloat(o),
                                    S = R ? void 0 : parseFloat(c),
                                    C = void 0;
                                C = h || l !== x ? h && P ? i : x : void 0;
                                var j = void 0;
                                j = m || p !== S ? m && R ? u : S : void 0;
                                var O = void 0 === C,
                                    N = (0, f.default)(C),
                                    E = (0, f.default)(l),
                                    F = E && l <= C,
                                    M = O || N && (!E || F),
                                    k = void 0 === j,
                                    T = (0, f.default)(j),
                                    L = (0, f.default)(p),
                                    I = L && p >= j,
                                    A = k || T && (!L || I),
                                    H = y !== C,
                                    U = w !== j;
                                (H || U) && M && A && (e.clearRefinements(r), N && e.addNumericRefinement(r, ">=", v(C)), T && e.addNumericRefinement(r, "<=", v(j)), e.search())
                            }
                        },
                        getConfiguration: function (e) {
                            var t = {
                                    disjunctiveFacets: [r]
                                },
                                n = h || m,
                                o = e && e.numericRefinements && void 0 !== e.numericRefinements[r],
                                s = (0, f.default)(i),
                                c = (0, f.default)(u),
                                l = s && c ? i < u : s || c;
                            return n && !o && l && (t.numericRefinements = a({}, r, {}), h && (t.numericRefinements[r][">="] = [i]), m && (t.numericRefinements[r]["<="] = [u])), t
                        },
                        init: function (t) {
                            var r = t.helper,
                                a = t.instantSearchInstance,
                                i = {},
                                s = this._getCurrentRange(i),
                                u = this._getCurrentRefinement(r);
                            e({
                                refine: this._refine(r, {}),
                                format: g,
                                range: s,
                                widgetParams: o({}, n, {
                                    precision: p
                                }),
                                start: u,
                                instantSearchInstance: a
                            }, !0)
                        },
                        render: function (t) {
                            var a = t.results,
                                i = t.helper,
                                s = t.instantSearchInstance,
                                u = a.disjunctiveFacets || [],
                                l = (0, c.default)(u, {
                                    name: r
                                }),
                                f = l && l.stats || {},
                                d = this._getCurrentRange(f),
                                h = this._getCurrentRefinement(i);
                            e({
                                refine: this._refine(i, d),
                                format: g,
                                range: d,
                                widgetParams: o({}, n, {
                                    precision: p
                                }),
                                start: h,
                                instantSearchInstance: s
                            }, !1)
                        },
                        dispose: function (e) {
                            var n = e.state;
                            return t(), n.removeNumericRefinement(r).removeDisjunctiveFacet(r)
                        },
                        getWidgetState: function (e, t) {
                            var n = t.searchParameters,
                                i = n.getNumericRefinements(r),
                                s = i[">="],
                                u = void 0 === s ? "" : s,
                                c = i["<="],
                                l = void 0 === c ? "" : c;
                            return "" === u && "" === l || e && e.range && e.range[r] === u + ":" + l ? e : o({}, e, {
                                range: o({}, e.range, a({}, r, u + ":" + l))
                            })
                        },
                        getWidgetSearchParameters: function (e, t) {
                            var n = t.uiState,
                                a = n && n.range && n.range[r];
                            if (!a || -1 === a.indexOf(":")) return e;
                            var i = e.getNumericRefinements(r),
                                o = i[">="],
                                u = void 0 === o ? [NaN] : o,
                                c = i["<="],
                                l = void 0 === c ? [NaN] : c,
                                p = e.clearRefinements(r),
                                d = a.split(":").map(parseFloat),
                                h = s(d, 2),
                                m = h[0],
                                v = h[1];
                            return u.includes(m) && l.includes(v) ? e : ((0, f.default)(m) && (p = p.addNumericRefinement(r, ">=", m)), (0, f.default)(v) && (p = p.addNumericRefinement(r, "<=", v)), p)
                        }
                    }
                }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            s = function () {
                function e(e, t) {
                    var n = [],
                        r = !0,
                        a = !1,
                        i = void 0;
                    try {
                        for (var o, s = e[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, i = e
                    } finally {
                        try {
                            !r && s.return && s.return()
                        } finally {
                            if (a) throw i
                        }
                    }
                    return n
                }
                return function (t, n) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t)) return e(t, n);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }();
        t.default = i;
        var u = n(9),
            c = r(u),
            l = n(111),
            f = r(l),
            p = n(0),
            d = "Usage:\nvar customRange = connectRange(function render(params, isFirstRendering) {\n  // params = {\n  //   refine,\n  //   range,\n  //   start,\n  //   format,\n  //   instantSearchInstance,\n  //   widgetParams,\n  // }\n});\nsearch.addWidget(\n  customRange({\n    attributeName,\n    [ min ],\n    [ max ],\n    [ precision = 2 ],\n  })\n);\nFull documentation available at https://community.algolia.com/instantsearch.js/v2/connectors/connectRange.html\n"
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            return _(e, function (e) {
                return v(e, t)
            })
        }

        function a(e) {
            var t = e ? a._parseNumbers(e) : {};
            this.index = t.index || "", this.query = t.query || "", this.facets = t.facets || [], this.disjunctiveFacets = t.disjunctiveFacets || [], this.hierarchicalFacets = t.hierarchicalFacets || [], this.facetsRefinements = t.facetsRefinements || {}, this.facetsExcludes = t.facetsExcludes || {}, this.disjunctiveFacetsRefinements = t.disjunctiveFacetsRefinements || {}, this.numericRefinements = t.numericRefinements || {}, this.tagRefinements = t.tagRefinements || [], this.hierarchicalFacetsRefinements = t.hierarchicalFacetsRefinements || {}, this.numericFilters = t.numericFilters, this.tagFilters = t.tagFilters, this.optionalTagFilters = t.optionalTagFilters, this.optionalFacetFilters = t.optionalFacetFilters, this.hitsPerPage = t.hitsPerPage, this.maxValuesPerFacet = t.maxValuesPerFacet, this.page = t.page || 0, this.queryType = t.queryType, this.typoTolerance = t.typoTolerance, this.minWordSizefor1Typo = t.minWordSizefor1Typo, this.minWordSizefor2Typos = t.minWordSizefor2Typos, this.minProximity = t.minProximity, this.allowTyposOnNumericTokens = t.allowTyposOnNumericTokens, this.ignorePlurals = t.ignorePlurals, this.restrictSearchableAttributes = t.restrictSearchableAttributes, this.advancedSyntax = t.advancedSyntax, this.analytics = t.analytics, this.analyticsTags = t.analyticsTags, this.synonyms = t.synonyms, this.replaceSynonymsInHighlight = t.replaceSynonymsInHighlight, this.optionalWords = t.optionalWords, this.removeWordsIfNoResults = t.removeWordsIfNoResults, this.attributesToRetrieve = t.attributesToRetrieve, this.attributesToHighlight = t.attributesToHighlight, this.highlightPreTag = t.highlightPreTag, this.highlightPostTag = t.highlightPostTag, this.attributesToSnippet = t.attributesToSnippet, this.getRankingInfo = t.getRankingInfo, this.distinct = t.distinct, this.aroundLatLng = t.aroundLatLng, this.aroundLatLngViaIP = t.aroundLatLngViaIP, this.aroundRadius = t.aroundRadius, this.minimumAroundRadius = t.minimumAroundRadius, this.aroundPrecision = t.aroundPrecision, this.insideBoundingBox = t.insideBoundingBox, this.insidePolygon = t.insidePolygon, this.snippetEllipsisText = t.snippetEllipsisText, this.disableExactOnAttributes = t.disableExactOnAttributes, this.enableExactOnSingleWordQuery = t.enableExactOnSingleWordQuery, this.offset = t.offset, this.length = t.length;
            var n = this;
            s(t, function (e, t) {
                -1 === a.PARAMETERS.indexOf(t) && (n[t] = e)
            })
        }
        var i = n(14),
            o = n(227),
            s = n(256),
            u = n(18),
            c = n(46),
            l = n(11),
            f = n(19),
            p = n(140),
            d = n(66),
            h = n(304),
            m = n(33),
            v = n(8),
            g = n(67),
            y = n(26),
            b = n(17),
            _ = n(9),
            w = n(154),
            P = n(68),
            R = n(103),
            x = n(315),
            S = n(316),
            C = n(317);
        a.PARAMETERS = i(new a), a._parseNumbers = function (e) {
            if (e instanceof a) return e;
            var t = {};
            if (u(["aroundPrecision", "aroundRadius", "getRankingInfo", "minWordSizefor2Typos", "minWordSizefor1Typo", "page", "maxValuesPerFacet", "distinct", "minimumAroundRadius", "hitsPerPage", "minProximity"], function (n) {
                    var r = e[n];
                    if (y(r)) {
                        var a = parseFloat(r);
                        t[n] = h(a) ? r : a
                    }
                }), Array.isArray(e.insideBoundingBox) && (t.insideBoundingBox = e.insideBoundingBox.map(function (e) {
                    return e.map(function (e) {
                        return parseFloat(e)
                    })
                })), e.numericRefinements) {
                var n = {};
                u(e.numericRefinements, function (e, t) {
                    n[t] = {}, u(e, function (e, r) {
                        var a = l(e, function (e) {
                            return Array.isArray(e) ? l(e, function (e) {
                                return y(e) ? parseFloat(e) : e
                            }) : y(e) ? parseFloat(e) : e
                        });
                        n[t][r] = a
                    })
                }), t.numericRefinements = n
            }
            return R({}, e, t)
        }, a.make = function (e) {
            var t = new a(e);
            return u(e.hierarchicalFacets, function (e) {
                if (e.rootPath) {
                    var n = t.getHierarchicalRefinement(e.name);
                    n.length > 0 && 0 !== n[0].indexOf(e.rootPath) && (t = t.clearRefinements(e.name)), n = t.getHierarchicalRefinement(e.name), 0 === n.length && (t = t.toggleHierarchicalFacetRefinement(e.name, e.rootPath))
                }
            }), t
        }, a.validate = function (e, t) {
            var n = t || {};
            return e.tagFilters && n.tagRefinements && n.tagRefinements.length > 0 ? new Error("[Tags] Cannot switch from the managed tag API to the advanced API. It is probably an error, if it is really what you want, you should first clear the tags with clearTags method.") : e.tagRefinements.length > 0 && n.tagFilters ? new Error("[Tags] Cannot switch from the advanced tag API to the managed API. It is probably an error, if it is not, you should first clear the tags with clearTags method.") : e.numericFilters && n.numericRefinements && !m(n.numericRefinements) ? new Error("[Numeric filters] Can't switch from the advanced to the managed API. It is probably an error, if this is really what you want, you have to first clear the numeric filters.") : !m(e.numericRefinements) && n.numericFilters ? new Error("[Numeric filters] Can't switch from the managed API to the advanced. It is probably an error, if this is really what you want, you have to first clear the numeric filters.") : null
        }, a.prototype = {
            constructor: a,
            clearRefinements: function (e) {
                var t = C.clearRefinement,
                    n = {
                        numericRefinements: this._clearNumericRefinements(e),
                        facetsRefinements: t(this.facetsRefinements, e, "conjunctiveFacet"),
                        facetsExcludes: t(this.facetsExcludes, e, "exclude"),
                        disjunctiveFacetsRefinements: t(this.disjunctiveFacetsRefinements, e, "disjunctiveFacet"),
                        hierarchicalFacetsRefinements: t(this.hierarchicalFacetsRefinements, e, "hierarchicalFacet")
                    };
                return n.numericRefinements === this.numericRefinements && n.facetsRefinements === this.facetsRefinements && n.facetsExcludes === this.facetsExcludes && n.disjunctiveFacetsRefinements === this.disjunctiveFacetsRefinements && n.hierarchicalFacetsRefinements === this.hierarchicalFacetsRefinements ? this : this.setQueryParameters(n)
            },
            clearTags: function () {
                return void 0 === this.tagFilters && 0 === this.tagRefinements.length ? this : this.setQueryParameters({
                    tagFilters: void 0,
                    tagRefinements: []
                })
            },
            setIndex: function (e) {
                return e === this.index ? this : this.setQueryParameters({
                    index: e
                })
            },
            setQuery: function (e) {
                return e === this.query ? this : this.setQueryParameters({
                    query: e
                })
            },
            setPage: function (e) {
                return e === this.page ? this : this.setQueryParameters({
                    page: e
                })
            },
            setFacets: function (e) {
                return this.setQueryParameters({
                    facets: e
                })
            },
            setDisjunctiveFacets: function (e) {
                return this.setQueryParameters({
                    disjunctiveFacets: e
                })
            },
            setHitsPerPage: function (e) {
                return this.hitsPerPage === e ? this : this.setQueryParameters({
                    hitsPerPage: e
                })
            },
            setTypoTolerance: function (e) {
                return this.typoTolerance === e ? this : this.setQueryParameters({
                    typoTolerance: e
                })
            },
            addNumericRefinement: function (e, t, n) {
                var r = x(n);
                if (this.isNumericRefined(e, t, r)) return this;
                var a = R({}, this.numericRefinements);
                return a[e] = R({}, a[e]), a[e][t] ? (a[e][t] = a[e][t].slice(), a[e][t].push(r)) : a[e][t] = [r], this.setQueryParameters({
                    numericRefinements: a
                })
            },
            getConjunctiveRefinements: function (e) {
                if (!this.isConjunctiveFacet(e)) throw new Error(e + " is not defined in the facets attribute of the helper configuration");
                return this.facetsRefinements[e] || []
            },
            getDisjunctiveRefinements: function (e) {
                if (!this.isDisjunctiveFacet(e)) throw new Error(e + " is not defined in the disjunctiveFacets attribute of the helper configuration");
                return this.disjunctiveFacetsRefinements[e] || []
            },
            getHierarchicalRefinement: function (e) {
                return this.hierarchicalFacetsRefinements[e] || []
            },
            getExcludeRefinements: function (e) {
                if (!this.isConjunctiveFacet(e)) throw new Error(e + " is not defined in the facets attribute of the helper configuration");
                return this.facetsExcludes[e] || []
            },
            removeNumericRefinement: function (e, t, n) {
                if (void 0 !== n) {
                    var r = x(n);
                    return this.isNumericRefined(e, t, r) ? this.setQueryParameters({
                        numericRefinements: this._clearNumericRefinements(function (n, a) {
                            return a === e && n.op === t && v(n.val, r)
                        })
                    }) : this
                }
                return void 0 !== t ? this.isNumericRefined(e, t) ? this.setQueryParameters({
                    numericRefinements: this._clearNumericRefinements(function (n, r) {
                        return r === e && n.op === t
                    })
                }) : this : this.isNumericRefined(e) ? this.setQueryParameters({
                    numericRefinements: this._clearNumericRefinements(function (t, n) {
                        return n === e
                    })
                }) : this
            },
            getNumericRefinements: function (e) {
                return this.numericRefinements[e] || {}
            },
            getNumericRefinement: function (e, t) {
                return this.numericRefinements[e] && this.numericRefinements[e][t]
            },
            _clearNumericRefinements: function (e) {
                if (g(e)) return m(this.numericRefinements) ? this.numericRefinements : {};
                if (y(e)) return m(this.numericRefinements[e]) ? this.numericRefinements : p(this.numericRefinements, e);
                if (b(e)) {
                    var t = !1,
                        n = f(this.numericRefinements, function (n, r, a) {
                            var i = {};
                            return u(r, function (n, r) {
                                var o = [];
                                u(n, function (t) {
                                    e({
                                        val: t,
                                        op: r
                                    }, a, "numeric") || o.push(t)
                                }), m(o) ? t = !0 : (o.length !== n.length && (t = !0), i[r] = o)
                            }), m(i) || (n[a] = i), n
                        }, {});
                    return t ? n : this.numericRefinements
                }
            },
            addFacet: function (e) {
                return this.isConjunctiveFacet(e) ? this : this.setQueryParameters({
                    facets: this.facets.concat([e])
                })
            },
            addDisjunctiveFacet: function (e) {
                return this.isDisjunctiveFacet(e) ? this : this.setQueryParameters({
                    disjunctiveFacets: this.disjunctiveFacets.concat([e])
                })
            },
            addHierarchicalFacet: function (e) {
                if (this.isHierarchicalFacet(e.name)) throw new Error("Cannot declare two hierarchical facets with the same name: `" + e.name + "`");
                return this.setQueryParameters({
                    hierarchicalFacets: this.hierarchicalFacets.concat([e])
                })
            },
            addFacetRefinement: function (e, t) {
                if (!this.isConjunctiveFacet(e)) throw new Error(e + " is not defined in the facets attribute of the helper configuration");
                return C.isRefined(this.facetsRefinements, e, t) ? this : this.setQueryParameters({
                    facetsRefinements: C.addRefinement(this.facetsRefinements, e, t)
                })
            },
            addExcludeRefinement: function (e, t) {
                if (!this.isConjunctiveFacet(e)) throw new Error(e + " is not defined in the facets attribute of the helper configuration");
                return C.isRefined(this.facetsExcludes, e, t) ? this : this.setQueryParameters({
                    facetsExcludes: C.addRefinement(this.facetsExcludes, e, t)
                })
            },
            addDisjunctiveFacetRefinement: function (e, t) {
                if (!this.isDisjunctiveFacet(e)) throw new Error(e + " is not defined in the disjunctiveFacets attribute of the helper configuration");
                return C.isRefined(this.disjunctiveFacetsRefinements, e, t) ? this : this.setQueryParameters({
                    disjunctiveFacetsRefinements: C.addRefinement(this.disjunctiveFacetsRefinements, e, t)
                })
            },
            addTagRefinement: function (e) {
                if (this.isTagRefined(e)) return this;
                var t = {
                    tagRefinements: this.tagRefinements.concat(e)
                };
                return this.setQueryParameters(t)
            },
            removeFacet: function (e) {
                return this.isConjunctiveFacet(e) ? this.clearRefinements(e).setQueryParameters({
                    facets: c(this.facets, function (t) {
                        return t !== e
                    })
                }) : this
            },
            removeDisjunctiveFacet: function (e) {
                return this.isDisjunctiveFacet(e) ? this.clearRefinements(e).setQueryParameters({
                    disjunctiveFacets: c(this.disjunctiveFacets, function (t) {
                        return t !== e
                    })
                }) : this
            },
            removeHierarchicalFacet: function (e) {
                return this.isHierarchicalFacet(e) ? this.clearRefinements(e).setQueryParameters({
                    hierarchicalFacets: c(this.hierarchicalFacets, function (t) {
                        return t.name !== e
                    })
                }) : this
            },
            removeFacetRefinement: function (e, t) {
                if (!this.isConjunctiveFacet(e)) throw new Error(e + " is not defined in the facets attribute of the helper configuration");
                return C.isRefined(this.facetsRefinements, e, t) ? this.setQueryParameters({
                    facetsRefinements: C.removeRefinement(this.facetsRefinements, e, t)
                }) : this
            },
            removeExcludeRefinement: function (e, t) {
                if (!this.isConjunctiveFacet(e)) throw new Error(e + " is not defined in the facets attribute of the helper configuration");
                return C.isRefined(this.facetsExcludes, e, t) ? this.setQueryParameters({
                    facetsExcludes: C.removeRefinement(this.facetsExcludes, e, t)
                }) : this
            },
            removeDisjunctiveFacetRefinement: function (e, t) {
                if (!this.isDisjunctiveFacet(e)) throw new Error(e + " is not defined in the disjunctiveFacets attribute of the helper configuration");
                return C.isRefined(this.disjunctiveFacetsRefinements, e, t) ? this.setQueryParameters({
                    disjunctiveFacetsRefinements: C.removeRefinement(this.disjunctiveFacetsRefinements, e, t)
                }) : this
            },
            removeTagRefinement: function (e) {
                if (!this.isTagRefined(e)) return this;
                var t = {
                    tagRefinements: c(this.tagRefinements, function (t) {
                        return t !== e
                    })
                };
                return this.setQueryParameters(t)
            },
            toggleRefinement: function (e, t) {
                return this.toggleFacetRefinement(e, t)
            },
            toggleFacetRefinement: function (e, t) {
                if (this.isHierarchicalFacet(e)) return this.toggleHierarchicalFacetRefinement(e, t);
                if (this.isConjunctiveFacet(e)) return this.toggleConjunctiveFacetRefinement(e, t);
                if (this.isDisjunctiveFacet(e)) return this.toggleDisjunctiveFacetRefinement(e, t);
                throw new Error("Cannot refine the undeclared facet " + e + "; it should be added to the helper options facets, disjunctiveFacets or hierarchicalFacets")
            },
            toggleConjunctiveFacetRefinement: function (e, t) {
                if (!this.isConjunctiveFacet(e)) throw new Error(e + " is not defined in the facets attribute of the helper configuration");
                return this.setQueryParameters({
                    facetsRefinements: C.toggleRefinement(this.facetsRefinements, e, t)
                })
            },
            toggleExcludeFacetRefinement: function (e, t) {
                if (!this.isConjunctiveFacet(e)) throw new Error(e + " is not defined in the facets attribute of the helper configuration");
                return this.setQueryParameters({
                    facetsExcludes: C.toggleRefinement(this.facetsExcludes, e, t)
                })
            },
            toggleDisjunctiveFacetRefinement: function (e, t) {
                if (!this.isDisjunctiveFacet(e)) throw new Error(e + " is not defined in the disjunctiveFacets attribute of the helper configuration");
                return this.setQueryParameters({
                    disjunctiveFacetsRefinements: C.toggleRefinement(this.disjunctiveFacetsRefinements, e, t)
                })
            },
            toggleHierarchicalFacetRefinement: function (e, t) {
                if (!this.isHierarchicalFacet(e)) throw new Error(e + " is not defined in the hierarchicalFacets attribute of the helper configuration");
                var n = this._getHierarchicalFacetSeparator(this.getHierarchicalFacetByName(e)),
                    r = {};
                return void 0 !== this.hierarchicalFacetsRefinements[e] && this.hierarchicalFacetsRefinements[e].length > 0 && (this.hierarchicalFacetsRefinements[e][0] === t || 0 === this.hierarchicalFacetsRefinements[e][0].indexOf(t + n)) ? -1 === t.indexOf(n) ? r[e] = [] : r[e] = [t.slice(0, t.lastIndexOf(n))] : r[e] = [t], this.setQueryParameters({
                    hierarchicalFacetsRefinements: P({}, r, this.hierarchicalFacetsRefinements)
                })
            },
            addHierarchicalFacetRefinement: function (e, t) {
                if (this.isHierarchicalFacetRefined(e)) throw new Error(e + " is already refined.");
                var n = {};
                return n[e] = [t], this.setQueryParameters({
                    hierarchicalFacetsRefinements: P({}, n, this.hierarchicalFacetsRefinements)
                })
            },
            removeHierarchicalFacetRefinement: function (e) {
                if (!this.isHierarchicalFacetRefined(e)) throw new Error(e + " is not refined.");
                var t = {};
                return t[e] = [], this.setQueryParameters({
                    hierarchicalFacetsRefinements: P({}, t, this.hierarchicalFacetsRefinements)
                })
            },
            toggleTagRefinement: function (e) {
                return this.isTagRefined(e) ? this.removeTagRefinement(e) : this.addTagRefinement(e)
            },
            isDisjunctiveFacet: function (e) {
                return d(this.disjunctiveFacets, e) > -1
            },
            isHierarchicalFacet: function (e) {
                return void 0 !== this.getHierarchicalFacetByName(e)
            },
            isConjunctiveFacet: function (e) {
                return d(this.facets, e) > -1
            },
            isFacetRefined: function (e, t) {
                if (!this.isConjunctiveFacet(e)) throw new Error(e + " is not defined in the facets attribute of the helper configuration");
                return C.isRefined(this.facetsRefinements, e, t)
            },
            isExcludeRefined: function (e, t) {
                if (!this.isConjunctiveFacet(e)) throw new Error(e + " is not defined in the facets attribute of the helper configuration");
                return C.isRefined(this.facetsExcludes, e, t)
            },
            isDisjunctiveFacetRefined: function (e, t) {
                if (!this.isDisjunctiveFacet(e)) throw new Error(e + " is not defined in the disjunctiveFacets attribute of the helper configuration");
                return C.isRefined(this.disjunctiveFacetsRefinements, e, t)
            },
            isHierarchicalFacetRefined: function (e, t) {
                if (!this.isHierarchicalFacet(e)) throw new Error(e + " is not defined in the hierarchicalFacets attribute of the helper configuration");
                var n = this.getHierarchicalRefinement(e);
                return t ? -1 !== d(n, t) : n.length > 0
            },
            isNumericRefined: function (e, t, n) {
                if (g(n) && g(t)) return !!this.numericRefinements[e];
                var a = this.numericRefinements[e] && !g(this.numericRefinements[e][t]);
                if (g(n) || !a) return a;
                var i = x(n),
                    o = !g(r(this.numericRefinements[e][t], i));
                return a && o
            },
            isTagRefined: function (e) {
                return -1 !== d(this.tagRefinements, e)
            },
            getRefinedDisjunctiveFacets: function () {
                var e = o(i(this.numericRefinements), this.disjunctiveFacets);
                return i(this.disjunctiveFacetsRefinements).concat(e).concat(this.getRefinedHierarchicalFacets())
            },
            getRefinedHierarchicalFacets: function () {
                return o(l(this.hierarchicalFacets, "name"), i(this.hierarchicalFacetsRefinements))
            },
            getUnrefinedDisjunctiveFacets: function () {
                var e = this.getRefinedDisjunctiveFacets();
                return c(this.disjunctiveFacets, function (t) {
                    return -1 === d(e, t)
                })
            },
            managedParameters: ["index", "facets", "disjunctiveFacets", "facetsRefinements", "facetsExcludes", "disjunctiveFacetsRefinements", "numericRefinements", "tagRefinements", "hierarchicalFacets", "hierarchicalFacetsRefinements"],
            getQueryParams: function () {
                var e = this.managedParameters,
                    t = {};
                return s(this, function (n, r) {
                    -1 === d(e, r) && void 0 !== n && (t[r] = n)
                }), t
            },
            getQueryParameter: function (e) {
                if (!this.hasOwnProperty(e)) throw new Error("Parameter '" + e + "' is not an attribute of SearchParameters (http://algolia.github.io/algoliasearch-helper-js/docs/SearchParameters.html)");
                return this[e]
            },
            setQueryParameter: function (e, t) {
                if (this[e] === t) return this;
                var n = {};
                return n[e] = t, this.setQueryParameters(n)
            },
            setQueryParameters: function (e) {
                if (!e) return this;
                var t = a.validate(this, e);
                if (t) throw t;
                var n = a._parseNumbers(e);
                return this.mutateMe(function (t) {
                    var r = i(e);
                    return u(r, function (e) {
                        t[e] = n[e]
                    }), t
                })
            },
            filter: function (e) {
                return S(this, e)
            },
            mutateMe: function (e) {
                var t = new this.constructor(this);
                return e(t, this), t
            },
            _getHierarchicalFacetSortBy: function (e) {
                return e.sortBy || ["isRefined:desc", "name:asc"]
            },
            _getHierarchicalFacetSeparator: function (e) {
                return e.separator || " > "
            },
            _getHierarchicalRootPath: function (e) {
                return e.rootPath || null
            },
            _getHierarchicalShowParentLevel: function (e) {
                return "boolean" !== typeof e.showParentLevel || e.showParentLevel
            },
            getHierarchicalFacetByName: function (e) {
                return _(this.hierarchicalFacets, {
                    name: e
                })
            },
            getHierarchicalFacetBreadcrumb: function (e) {
                if (!this.isHierarchicalFacet(e)) throw new Error("Cannot get the breadcrumb of an unknown hierarchical facet: `" + e + "`");
                var t = this.getHierarchicalRefinement(e)[0];
                if (!t) return [];
                var n = this._getHierarchicalFacetSeparator(this.getHierarchicalFacetByName(e)),
                    r = t.split(n);
                return l(r, w)
            },
            toString: function () {
                return JSON.stringify(this, null, 2)
            }
        }, e.exports = a
    }, function (e, t) {
        e.exports = function (e) {
            return e.webpackPolyfill || (e.deprecate = function () {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function () {
                    return e.l
                }
            }), Object.defineProperty(e, "id", {
                enumerable: !0,
                get: function () {
                    return e.i
                }
            }), e.webpackPolyfill = 1), e
        }
    }, function (e, t) {
        function n(e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= r
        }
        var r = 9007199254740991;
        e.exports = n
    }, function (e, t, n) {
        (function (e) {
            var r = n(115),
                a = "object" == typeof t && t && !t.nodeType && t,
                i = a && "object" == typeof e && e && !e.nodeType && e,
                o = i && i.exports === a,
                s = o && r.process,
                u = function () {
                    try {
                        return s && s.binding && s.binding("util")
                    } catch (e) {}
                }();
            e.exports = u
        }).call(t, n(81)(e))
    }, function (e, t, n) {
        function r(e) {
            var t = -1,
                n = null == e ? 0 : e.length;
            for (this.__data__ = new a; ++t < n;) this.add(e[t])
        }
        var a = n(85),
            i = n(250),
            o = n(251);
        r.prototype.add = r.prototype.push = i, r.prototype.has = o, e.exports = r
    }, function (e, t, n) {
        function r(e) {
            var t = -1,
                n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        var a = n(229),
            i = n(245),
            o = n(247),
            s = n(248),
            u = n(249);
        r.prototype.clear = a, r.prototype.delete = i, r.prototype.get = o, r.prototype.has = s, r.prototype.set = u, e.exports = r
    }, function (e, t, n) {
        var r = n(24),
            a = n(5),
            i = r(a, "Map");
        e.exports = i
    }, function (e, t, n) {
        function r(e, t) {
            return !!(null == e ? 0 : e.length) && a(e, t, 0) > -1
        }
        var a = n(43);
        e.exports = r
    }, function (e, t) {
        function n(e, t) {
            return e.has(t)
        }
        e.exports = n
    }, function (e, t, n) {
        var r = n(254),
            a = n(124),
            i = a(r);
        e.exports = i
    }, function (e, t, n) {
        function r(e) {
            return i(e) && a(e)
        }
        var a = n(16),
            i = n(6);
        e.exports = r
    }, function (e, t, n) {
        function r(e) {
            return "function" == typeof e ? e : a
        }
        var a = n(25);
        e.exports = r
    }, function (e, t) {
        function n(e, t) {
            for (var n = -1, r = null == e ? 0 : e.length; ++n < r && !1 !== t(e[n], n, e););
            return e
        }
        e.exports = n
    }, function (e, t, n) {
        function r(e, t, n, o, s) {
            return e === t || (null == e || null == t || !i(e) && !i(t) ? e !== e && t !== t : a(e, t, n, o, r, s))
        }
        var a = n(267),
            i = n(6);
        e.exports = r
    }, function (e, t) {
        function n(e) {
            var t = -1,
                n = Array(e.size);
            return e.forEach(function (e) {
                n[++t] = e
            }), n
        }
        e.exports = n
    }, function (e, t) {
        function n(e, t) {
            for (var n = -1, r = t.length, a = e.length; ++n < r;) e[a + n] = t[n];
            return e
        }
        e.exports = n
    }, function (e, t, n) {
        var r = n(126),
            a = n(132),
            i = Object.prototype,
            o = i.propertyIsEnumerable,
            s = Object.getOwnPropertySymbols,
            u = s ? function (e) {
                return null == e ? [] : (e = Object(e), r(s(e), function (t) {
                    return o.call(e, t)
                }))
            } : a;
        e.exports = u
    }, function (e, t, n) {
        function r(e, t) {
            if (a(e)) return !1;
            var n = typeof e;
            return !("number" != n && "symbol" != n && "boolean" != n && null != e && !i(e)) || (s.test(e) || !o.test(e) || null != t && e in Object(t))
        }
        var a = n(4),
            i = n(48),
            o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            s = /^\w*$/;
        e.exports = r
    }, function (e, t, n) {
        function r(e) {
            if ("string" == typeof e) return e;
            if (o(e)) return i(e, r) + "";
            if (s(e)) return l ? l.call(e) : "";
            var t = e + "";
            return "0" == t && 1 / e == -u ? "-0" : t
        }
        var a = n(27),
            i = n(21),
            o = n(4),
            s = n(48),
            u = 1 / 0,
            c = a ? a.prototype : void 0,
            l = c ? c.toString : void 0;
        e.exports = r
    }, function (e, t, n) {
        function r(e, t, n) {
            var r = e[t];
            s.call(e, t) && i(r, n) && (void 0 !== n || t in e) || a(e, t, n)
        }
        var a = n(49),
            i = n(28),
            o = Object.prototype,
            s = o.hasOwnProperty;
        e.exports = r
    }, function (e, t, n) {
        var r = n(117),
            a = r(Object.getPrototypeOf, Object);
        e.exports = a
    }, function (e, t, n) {
        function r(e) {
            return a(e, o, i)
        }
        var a = n(131),
            i = n(143),
            o = n(50);
        e.exports = r
    }, function (e, t, n) {
        function r(e) {
            var t = new e.constructor(e.byteLength);
            return new a(t).set(new a(e)), t
        }
        var a = n(129);
        e.exports = r
    }, function (e, t, n) {
        var r = n(104),
            a = n(157),
            i = a(function (e, t, n) {
                r(e, t, n)
            });
        e.exports = i
    }, function (e, t, n) {
        function r(e, t, n, f, p) {
            e !== t && o(t, function (o, c) {
                if (u(o)) p || (p = new a), s(e, t, c, n, r, f, p);
                else {
                    var d = f ? f(l(e, c), o, c + "", e, t, p) : void 0;
                    void 0 === d && (d = o), i(e, c, d)
                }
            }, c)
        }
        var a = n(60),
            i = n(155),
            o = n(125),
            s = n(313),
            u = n(7),
            c = n(50),
            l = n(156);
        e.exports = r
    }, function (e, t, n) {
        function r(e) {
            this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = o, this.__views__ = []
        }
        var a = n(65),
            i = n(106),
            o = 4294967295;
        r.prototype = a(i.prototype), r.prototype.constructor = r, e.exports = r
    }, function (e, t) {
        function n() {}
        e.exports = n
    }, function (e, t) {
        function n() {
            this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
        }

        function r(e) {
            return "function" === typeof e
        }

        function a(e) {
            return "number" === typeof e
        }

        function i(e) {
            return "object" === typeof e && null !== e
        }

        function o(e) {
            return void 0 === e
        }
        e.exports = n, n.EventEmitter = n, n.prototype._events = void 0, n.prototype._maxListeners = void 0, n.defaultMaxListeners = 10, n.prototype.setMaxListeners = function (e) {
            if (!a(e) || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
            return this._maxListeners = e, this
        }, n.prototype.emit = function (e) {
            var t, n, a, s, u, c;
            if (this._events || (this._events = {}), "error" === e && (!this._events.error || i(this._events.error) && !this._events.error.length)) {
                if ((t = arguments[1]) instanceof Error) throw t;
                var l = new Error('Uncaught, unspecified "error" event. (' + t + ")");
                throw l.context = t, l
            }
            if (n = this._events[e], o(n)) return !1;
            if (r(n)) switch (arguments.length) {
                case 1:
                    n.call(this);
                    break;
                case 2:
                    n.call(this, arguments[1]);
                    break;
                case 3:
                    n.call(this, arguments[1], arguments[2]);
                    break;
                default:
                    s = Array.prototype.slice.call(arguments, 1), n.apply(this, s)
            } else if (i(n))
                for (s = Array.prototype.slice.call(arguments, 1), c = n.slice(), a = c.length, u = 0; u < a; u++) c[u].apply(this, s);
            return !0
        }, n.prototype.addListener = function (e, t) {
            var a;
            if (!r(t)) throw TypeError("listener must be a function");
            return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, r(t.listener) ? t.listener : t), this._events[e] ? i(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, i(this._events[e]) && !this._events[e].warned && (a = o(this._maxListeners) ? n.defaultMaxListeners : this._maxListeners) && a > 0 && this._events[e].length > a && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" === typeof console.trace && console.trace()), this
        }, n.prototype.on = n.prototype.addListener, n.prototype.once = function (e, t) {
            function n() {
                this.removeListener(e, n), a || (a = !0, t.apply(this, arguments))
            }
            if (!r(t)) throw TypeError("listener must be a function");
            var a = !1;
            return n.listener = t, this.on(e, n), this
        }, n.prototype.removeListener = function (e, t) {
            var n, a, o, s;
            if (!r(t)) throw TypeError("listener must be a function");
            if (!this._events || !this._events[e]) return this;
            if (n = this._events[e], o = n.length, a = -1, n === t || r(n.listener) && n.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
            else if (i(n)) {
                for (s = o; s-- > 0;)
                    if (n[s] === t || n[s].listener && n[s].listener === t) {
                        a = s;
                        break
                    } if (a < 0) return this;
                1 === n.length ? (n.length = 0, delete this._events[e]) : n.splice(a, 1), this._events.removeListener && this.emit("removeListener", e, t)
            }
            return this
        }, n.prototype.removeAllListeners = function (e) {
            var t, n;
            if (!this._events) return this;
            if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;
            if (0 === arguments.length) {
                for (t in this._events) "removeListener" !== t && this.removeAllListeners(t);
                return this.removeAllListeners("removeListener"), this._events = {}, this
            }
            if (n = this._events[e], r(n)) this.removeListener(e, n);
            else if (n)
                for (; n.length;) this.removeListener(e, n[n.length - 1]);
            return delete this._events[e], this
        }, n.prototype.listeners = function (e) {
            return this._events && this._events[e] ? r(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
        }, n.prototype.listenerCount = function (e) {
            if (this._events) {
                var t = this._events[e];
                if (r(t)) return 1;
                if (t) return t.length
            }
            return 0
        }, n.listenerCount = function (e, t) {
            return e.listenerCount(t)
        }
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return m(e) ? d(e, r) : Array.isArray(e) ? f(e, r) : h(e) ? y(e) : e
        }

        function a(e, t, n, r) {
            if (null !== e && (n = n.replace(e, ""), r = r.replace(e, "")), n = t[n] || n, r = t[r] || r, -1 !== _.indexOf(n) || -1 !== _.indexOf(r)) {
                if ("q" === n) return -1;
                if ("q" === r) return 1;
                var a = -1 !== b.indexOf(n),
                    i = -1 !== b.indexOf(r);
                if (a && !i) return 1;
                if (i && !a) return -1
            }
            return n.localeCompare(r)
        }
        var i = n(353),
            o = n(80),
            s = n(174),
            u = n(358),
            c = n(18),
            l = n(359),
            f = n(11),
            p = n(176),
            d = n(177),
            h = n(26),
            m = n(23),
            v = n(33),
            g = n(173),
            y = n(109).encode,
            b = ["dFR", "fR", "nR", "hFR", "tR"],
            _ = i.ENCODED_PARAMETERS;
        t.getStateFromQueryString = function (e, t) {
            var n = t && t.prefix || "",
                r = t && t.mapping || {},
                a = g(r),
                u = s.parse(e),
                c = new RegExp("^" + n),
                f = p(u, function (e, t) {
                    var r = n && c.test(t),
                        o = r ? t.replace(c, "") : t;
                    return i.decode(a[o] || o) || o
                }),
                d = o._parseNumbers(f);
            return l(d, o.PARAMETERS)
        }, t.getUnrecognizedParametersInQueryString = function (e, t) {
            var n = t && t.prefix,
                r = t && t.mapping || {},
                a = g(r),
                o = {},
                u = s.parse(e);
            if (n) {
                var l = new RegExp("^" + n);
                c(u, function (e, t) {
                    l.test(t) || (o[t] = e)
                })
            } else c(u, function (e, t) {
                i.decode(a[t] || t) || (o[t] = e)
            });
            return o
        }, t.getQueryStringFromState = function (e, t) {
            var n = t && t.moreAttributes,
                o = t && t.prefix || "",
                c = t && t.mapping || {},
                l = t && t.safe || !1,
                f = g(c),
                d = l ? e : r(e),
                h = p(d, function (e, t) {
                    var n = i.encode(t);
                    return o + (c[n] || n)
                }),
                m = "" === o ? null : new RegExp("^" + o),
                y = u(a, null, m, f);
            if (!v(n)) {
                var b = s.stringify(h, {
                        encode: l,
                        sort: y
                    }),
                    _ = s.stringify(n, {
                        encode: l
                    });
                return b ? b + "&" + _ : _
            }
            return s.stringify(h, {
                encode: l,
                sort: y
            })
        }
    }, function (e, t, n) {
        "use strict";
        var r = Object.prototype.hasOwnProperty,
            a = function () {
                for (var e = [], t = 0; t < 256; ++t) e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
                return e
            }(),
            i = function (e) {
                for (var t; e.length;) {
                    var n = e.pop();
                    if (t = n.obj[n.prop], Array.isArray(t)) {
                        for (var r = [], a = 0; a < t.length; ++a) "undefined" !== typeof t[a] && r.push(t[a]);
                        n.obj[n.prop] = r
                    }
                }
                return t
            };
        t.arrayToObject = function (e, t) {
            for (var n = t && t.plainObjects ? Object.create(null) : {}, r = 0; r < e.length; ++r) "undefined" !== typeof e[r] && (n[r] = e[r]);
            return n
        }, t.merge = function (e, n, a) {
            if (!n) return e;
            if ("object" !== typeof n) {
                if (Array.isArray(e)) e.push(n);
                else {
                    if ("object" !== typeof e) return [e, n];
                    (a.plainObjects || a.allowPrototypes || !r.call(Object.prototype, n)) && (e[n] = !0)
                }
                return e
            }
            if ("object" !== typeof e) return [e].concat(n);
            var i = e;
            return Array.isArray(e) && !Array.isArray(n) && (i = t.arrayToObject(e, a)), Array.isArray(e) && Array.isArray(n) ? (n.forEach(function (n, i) {
                r.call(e, i) ? e[i] && "object" === typeof e[i] ? e[i] = t.merge(e[i], n, a) : e.push(n) : e[i] = n
            }), e) : Object.keys(n).reduce(function (e, i) {
                var o = n[i];
                return r.call(e, i) ? e[i] = t.merge(e[i], o, a) : e[i] = o, e
            }, i)
        }, t.assign = function (e, t) {
            return Object.keys(t).reduce(function (e, n) {
                return e[n] = t[n], e
            }, e)
        }, t.decode = function (e) {
            try {
                return decodeURIComponent(e.replace(/\+/g, " "))
            } catch (t) {
                return e
            }
        }, t.encode = function (e) {
            if (0 === e.length) return e;
            for (var t = "string" === typeof e ? e : String(e), n = "", r = 0; r < t.length; ++r) {
                var i = t.charCodeAt(r);
                45 === i || 46 === i || 95 === i || 126 === i || i >= 48 && i <= 57 || i >= 65 && i <= 90 || i >= 97 && i <= 122 ? n += t.charAt(r) : i < 128 ? n += a[i] : i < 2048 ? n += a[192 | i >> 6] + a[128 | 63 & i] : i < 55296 || i >= 57344 ? n += a[224 | i >> 12] + a[128 | i >> 6 & 63] + a[128 | 63 & i] : (r += 1, i = 65536 + ((1023 & i) << 10 | 1023 & t.charCodeAt(r)), n += a[240 | i >> 18] + a[128 | i >> 12 & 63] + a[128 | i >> 6 & 63] + a[128 | 63 & i])
            }
            return n
        }, t.compact = function (e) {
            for (var t = [{
                    obj: {
                        o: e
                    },
                    prop: "o"
                }], n = [], r = 0; r < t.length; ++r)
                for (var a = t[r], o = a.obj[a.prop], s = Object.keys(o), u = 0; u < s.length; ++u) {
                    var c = s[u],
                        l = o[c];
                    "object" === typeof l && null !== l && -1 === n.indexOf(l) && (t.push({
                        obj: o,
                        prop: c
                    }), n.push(l))
                }
            return i(t)
        }, t.isRegExp = function (e) {
            return "[object RegExp]" === Object.prototype.toString.call(e)
        }, t.isBuffer = function (e) {
            return null !== e && "undefined" !== typeof e && !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
        }
    }, function (e, t, n) {
        "use strict";

        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function a(e, t) {
            var n = {};
            for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
            return n
        }

        function i(e, t) {
            return (0, u.checkRendering)(e, c),
                function () {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        i = n.attributeName,
                        u = n.limit,
                        l = void 0 === u ? 10 : u,
                        f = n.sortBy,
                        p = void 0 === f ? ["name:asc"] : f,
                        d = n.showMoreLimit,
                        h = n.transformItems,
                        m = void 0 === h ? function (e) {
                            return e
                        } : h;
                    if (!i || !isNaN(d) && d < l) throw new Error(c);
                    return {
                        isShowingMore: !1,
                        toggleShowMore: function () {},
                        cachedToggleShowMore: function () {
                            this.toggleShowMore()
                        },
                        createToggleShowMore: function (e) {
                            var t = this,
                                n = e.results,
                                r = e.instantSearchInstance;
                            return function () {
                                t.isShowingMore = !t.isShowingMore, t.render({
                                    results: n,
                                    instantSearchInstance: r
                                })
                            }
                        },
                        getLimit: function () {
                            return this.isShowingMore ? d : l
                        },
                        refine: function (e) {
                            return function (t) {
                                var n = e.getHierarchicalFacetBreadcrumb(i),
                                    r = s(n, 1),
                                    a = r[0];
                                e.toggleRefinement(i, t || a).search()
                            }
                        },
                        getConfiguration: function (e) {
                            var t = {
                                    hierarchicalFacets: [{
                                        name: i,
                                        attributes: [i]
                                    }]
                                },
                                n = e.maxValuesPerFacet || 0;
                            return t.maxValuesPerFacet = Math.max(n, d || l), t
                        },
                        init: function (t) {
                            var r = t.helper,
                                a = t.createURL,
                                o = t.instantSearchInstance;
                            this.cachedToggleShowMore = this.cachedToggleShowMore.bind(this), this._createURL = function (e) {
                                return a(r.state.toggleRefinement(i, e))
                            }, this._refine = this.refine(r), e({
                                items: [],
                                createURL: this._createURL,
                                refine: this._refine,
                                instantSearchInstance: o,
                                canRefine: !1,
                                widgetParams: n,
                                isShowingMore: this.isShowingMore,
                                toggleShowMore: this.cachedToggleShowMore,
                                canToggleShowMore: !1
                            }, !0)
                        },
                        render: function (t) {
                            var r = t.results,
                                s = t.instantSearchInstance,
                                u = r.getFacetValues(i, {
                                    sortBy: p
                                }).data || [],
                                c = m(u.slice(0, this.getLimit()).map(function (e) {
                                    var t = e.name,
                                        n = e.path,
                                        r = a(e, ["name", "path"]);
                                    return o({}, r, {
                                        label: t,
                                        value: n
                                    })
                                }));
                            this.toggleShowMore = this.createToggleShowMore({
                                results: r,
                                instantSearchInstance: s
                            }), e({
                                items: c,
                                createURL: this._createURL,
                                refine: this._refine,
                                instantSearchInstance: s,
                                canRefine: c.length > 0,
                                widgetParams: n,
                                isShowingMore: this.isShowingMore,
                                toggleShowMore: this.cachedToggleShowMore,
                                canToggleShowMore: this.isShowingMore || u.length > this.getLimit()
                            }, !1)
                        },
                        dispose: function (e) {
                            var n = e.state;
                            t();
                            var r = n;
                            return n.isHierarchicalFacetRefined(i) && (r = n.removeHierarchicalFacetRefinement(i)), r = r.removeHierarchicalFacet(i), (r.maxValuesPerFacet === l || d && r.maxValuesPerFacet === d) && r.setQueryParameters("maxValuesPerFacet", void 0), r
                        },
                        getWidgetState: function (e, t) {
                            var n = t.searchParameters,
                                a = n.getHierarchicalFacetBreadcrumb(i),
                                u = s(a, 1),
                                c = u[0];
                            return !c || e.menu && e.menu[i] === c ? e : o({}, e, {
                                menu: o({}, e.menu, r({}, i, c))
                            })
                        },
                        getWidgetSearchParameters: function (e, t) {
                            var n = t.uiState;
                            if (n.menu && n.menu[i]) {
                                var r = n.menu[i];
                                return e.isHierarchicalFacetRefined(i, r) ? e : e.toggleRefinement(i, r)
                            }
                            if (e.isHierarchicalFacetRefined(i)) {
                                var a = e.getHierarchicalFacetBreadcrumb(i),
                                    o = s(a, 1),
                                    u = o[0];
                                return e.toggleRefinement(i, u)
                            }
                            return e
                        }
                    }
                }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            s = function () {
                function e(e, t) {
                    var n = [],
                        r = !0,
                        a = !1,
                        i = void 0;
                    try {
                        for (var o, s = e[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, i = e
                    } finally {
                        try {
                            !r && s.return && s.return()
                        } finally {
                            if (a) throw i
                        }
                    }
                    return n
                }
                return function (t, n) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t)) return e(t, n);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }();
        t.default = i;
        var u = n(0),
            c = "Usage:\nvar customMenu = connectMenu(function render(params, isFirstRendering) {\n  // params = {\n  //   items,\n  //   createURL,\n  //   refine,\n  //   instantSearchInstance,\n  //   canRefine,\n  //   widgetParams,\n  //   isShowingMore,\n  //   toggleShowMore\n  // }\n});\nsearch.addWidget(\n  customMenu({\n    attributeName,\n    [ limit ],\n    [ showMoreLimit ]\n    [ sortBy = ['name:asc'] ]\n    [ transformItems ]\n  })\n);\nFull documentation available at https://community.algolia.com/instantsearch.js/v2/connectors/connectMenu.html\n"
    }, function (e, t, n) {
        function r(e) {
            return "number" == typeof e && i(e)
        }
        var a = n(5),
            i = a.isFinite;
        e.exports = r
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function o(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.RawSelector = void 0;
        var s = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            u = n(3),
            c = (r(u), n(1)),
            l = r(c),
            f = n(13),
            p = r(f),
            d = n(20),
            h = r(d),
            m = t.RawSelector = function (e) {
                function t() {
                    return a(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return o(t, e), s(t, [{
                    key: "componentWillMount",
                    value: function () {
                        this.handleChange = this.handleChange.bind(this)
                    }
                }, {
                    key: "handleChange",
                    value: function (e) {
                        this.props.setValue(e.target.value)
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this,
                            t = this.props,
                            n = t.currentValue,
                            r = t.options;
                        return l.default.createElement("select", {
                            className: this.props.cssClasses.select,
                            onChange: this.handleChange,
                            value: "" + n
                        }, r.map(function (t) {
                            return l.default.createElement("option", {
                                className: e.props.cssClasses.item,
                                key: t.label + t.value,
                                value: "" + t.value
                            }, t.label)
                        }))
                    }
                }]), t
            }(c.Component);
        t.default = (0, p.default)((0, h.default)(m))
    }, function (e, t, n) {
        function r(e, t) {
            var n = o(e),
                r = !n && i(e),
                l = !n && !r && s(e),
                p = !n && !r && !l && c(e),
                d = n || r || l || p,
                h = d ? a(e.length, String) : [],
                m = h.length;
            for (var v in e) !t && !f.call(e, v) || d && ("length" == v || l && ("offset" == v || "parent" == v) || p && ("buffer" == v || "byteLength" == v || "byteOffset" == v) || u(v, m)) || h.push(v);
            return h
        }
        var a = n(114),
            i = n(38),
            o = n(4),
            s = n(40),
            u = n(41),
            c = n(53),
            l = Object.prototype,
            f = l.hasOwnProperty;
        e.exports = r
    }, function (e, t) {
        function n(e, t) {
            for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
            return r
        }
        e.exports = n
    }, function (e, t, n) {
        (function (t) {
            var n = "object" == typeof t && t && t.Object === Object && t;
            e.exports = n
        }).call(t, n(39))
    }, function (e, t, n) {
        function r(e) {
            if (!a(e)) return i(e);
            var t = [];
            for (var n in Object(e)) s.call(e, n) && "constructor" != n && t.push(n);
            return t
        }
        var a = n(54),
            i = n(226),
            o = Object.prototype,
            s = o.hasOwnProperty;
        e.exports = r
    }, function (e, t) {
        function n(e, t) {
            return function (n) {
                return e(t(n))
            }
        }
        e.exports = n
    }, function (e, t) {
        function n(e) {
            if (null != e) {
                try {
                    return a.call(e)
                } catch (e) {}
                try {
                    return e + ""
                } catch (e) {}
            }
            return ""
        }
        var r = Function.prototype,
            a = r.toString;
        e.exports = n
    }, function (e, t) {
        function n(e, t, n, r) {
            for (var a = e.length, i = n + (r ? 1 : -1); r ? i-- : ++i < a;)
                if (t(e[i], i, e)) return i;
            return -1
        }
        e.exports = n
    }, function (e, t) {
        function n(e, t, n) {
            for (var r = -1, a = null == e ? 0 : e.length; ++r < a;)
                if (n(t, e[r])) return !0;
            return !1
        }
        e.exports = n
    }, function (e, t, n) {
        function r(e, t, n) {
            return t = i(void 0 === t ? e.length - 1 : t, 0),
                function () {
                    for (var r = arguments, o = -1, s = i(r.length - t, 0), u = Array(s); ++o < s;) u[o] = r[t + o];
                    o = -1;
                    for (var c = Array(t + 1); ++o < t;) c[o] = r[o];
                    return c[t] = n(u), a(e, this, c)
                }
        }
        var a = n(59),
            i = Math.max;
        e.exports = r
    }, function (e, t) {
        function n(e) {
            return function () {
                return e
            }
        }
        e.exports = n
    }, function (e, t, n) {
        var r = n(24),
            a = function () {
                try {
                    var e = r(Object, "defineProperty");
                    return e({}, "", {}), e
                } catch (e) {}
            }();
        e.exports = a
    }, function (e, t) {
        function n(e) {
            var t = 0,
                n = 0;
            return function () {
                var o = i(),
                    s = a - (o - n);
                if (n = o, s > 0) {
                    if (++t >= r) return arguments[0]
                } else t = 0;
                return e.apply(void 0, arguments)
            }
        }
        var r = 800,
            a = 16,
            i = Date.now;
        e.exports = n
    }, function (e, t, n) {
        var r = n(257),
            a = r();
        e.exports = a
    }, function (e, t) {
        function n(e, t) {
            for (var n = -1, r = null == e ? 0 : e.length, a = 0, i = []; ++n < r;) {
                var o = e[n];
                t(o, n, e) && (i[a++] = o)
            }
            return i
        }
        e.exports = n
    }, function (e, t, n) {
        function r(e, t, n, r, c, l) {
            var f = n & s,
                p = e.length,
                d = t.length;
            if (p != d && !(f && d > p)) return !1;
            var h = l.get(e);
            if (h && l.get(t)) return h == t;
            var m = -1,
                v = !0,
                g = n & u ? new a : void 0;
            for (l.set(e, t), l.set(t, e); ++m < p;) {
                var y = e[m],
                    b = t[m];
                if (r) var _ = f ? r(b, y, m, t, e, l) : r(y, b, m, e, t, l);
                if (void 0 !== _) {
                    if (_) continue;
                    v = !1;
                    break
                }
                if (g) {
                    if (!i(t, function (e, t) {
                            if (!o(g, t) && (y === e || c(y, e, n, r, l))) return g.push(t)
                        })) {
                        v = !1;
                        break
                    }
                } else if (y !== b && !c(y, b, n, r, l)) {
                    v = !1;
                    break
                }
            }
            return l.delete(e), l.delete(t), v
        }
        var a = n(84),
            i = n(128),
            o = n(88),
            s = 1,
            u = 2;
        e.exports = r
    }, function (e, t) {
        function n(e, t) {
            for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
                if (t(e[n], n, e)) return !0;
            return !1
        }
        e.exports = n
    }, function (e, t, n) {
        var r = n(5),
            a = r.Uint8Array;
        e.exports = a
    }, function (e, t, n) {
        function r(e) {
            return a(e, o, i)
        }
        var a = n(131),
            i = n(96),
            o = n(14);
        e.exports = r
    }, function (e, t, n) {
        function r(e, t, n) {
            var r = t(e);
            return i(e) ? r : a(r, n(e))
        }
        var a = n(95),
            i = n(4);
        e.exports = r
    }, function (e, t) {
        function n() {
            return []
        }
        e.exports = n
    }, function (e, t, n) {
        var r = n(24),
            a = n(5),
            i = r(a, "Set");
        e.exports = i
    }, function (e, t, n) {
        var r = n(24),
            a = n(5),
            i = r(a, "WeakMap");
        e.exports = i
    }, function (e, t, n) {
        function r(e) {
            return e === e && !a(e)
        }
        var a = n(7);
        e.exports = r
    }, function (e, t) {
        function n(e, t) {
            return function (n) {
                return null != n && (n[e] === t && (void 0 !== t || e in Object(n)))
            }
        }
        e.exports = n
    }, function (e, t, n) {
        function r(e, t) {
            return null != e && i(e, t, a)
        }
        var a = n(278),
            i = n(138);
        e.exports = r
    }, function (e, t, n) {
        function r(e, t, n) {
            t = a(t, e);
            for (var r = -1, l = t.length, f = !1; ++r < l;) {
                var p = c(t[r]);
                if (!(f = null != e && n(e, p))) break;
                e = e[p]
            }
            return f || ++r != l ? f : !!(l = null == e ? 0 : e.length) && u(l) && s(p, l) && (o(e) || i(e))
        }
        var a = n(29),
            i = n(38),
            o = n(4),
            s = n(41),
            u = n(82),
            c = n(30);
        e.exports = r
    }, function (e, t, n) {
        function r(e, t) {
            var n = -1,
                r = i(e) ? Array(e.length) : [];
            return a(e, function (e, a, i) {
                r[++n] = t(e, a, i)
            }), r
        }
        var a = n(45),
            i = n(16);
        e.exports = r
    }, function (e, t, n) {
        var r = n(21),
            a = n(141),
            i = n(299),
            o = n(29),
            s = n(31),
            u = n(301),
            c = n(148),
            l = n(101),
            f = c(function (e, t) {
                var n = {};
                if (null == e) return n;
                var c = !1;
                t = r(t, function (t) {
                    return t = o(t, e), c || (c = t.length > 1), t
                }), s(e, l(e), n), c && (n = a(n, 7, u));
                for (var f = t.length; f--;) i(n, t[f]);
                return n
            });
        e.exports = f
    }, function (e, t, n) {
        function r(e, t, n, k, T, L) {
            var I, A = t & S,
                H = t & C,
                U = t & j;
            if (n && (I = T ? n(e, k, T, L) : n(e)), void 0 !== I) return I;
            if (!P(e)) return e;
            var D = b(e);
            if (D) {
                if (I = v(e), !A) return l(e, I)
            } else {
                var B = m(e),
                    V = B == N || B == E;
                if (_(e)) return c(e, A);
                if (B == F || B == O || V && !T) {
                    if (I = H || V ? {} : y(e), !A) return H ? p(e, u(I, e)) : f(e, s(I, e))
                } else {
                    if (!M[B]) return T ? e : {};
                    I = g(e, B, A)
                }
            }
            L || (L = new a);
            var q = L.get(e);
            if (q) return q;
            if (L.set(e, I), R(e)) return e.forEach(function (a) {
                I.add(r(a, t, n, a, e, L))
            }), I;
            if (w(e)) return e.forEach(function (a, i) {
                I.set(i, r(a, t, n, i, e, L))
            }), I;
            var Q = U ? H ? h : d : H ? keysIn : x,
                W = D ? void 0 : Q(e);
            return i(W || e, function (a, i) {
                W && (i = a, a = e[i]), o(I, i, r(a, t, n, i, e, L))
            }), I
        }
        var a = n(60),
            i = n(92),
            o = n(99),
            s = n(284),
            u = n(285),
            c = n(142),
            l = n(64),
            f = n(288),
            p = n(289),
            d = n(130),
            h = n(101),
            m = n(47),
            v = n(290),
            g = n(291),
            y = n(145),
            b = n(4),
            _ = n(40),
            w = n(295),
            P = n(7),
            R = n(297),
            x = n(14),
            S = 1,
            C = 2,
            j = 4,
            O = "[object Arguments]",
            N = "[object Function]",
            E = "[object GeneratorFunction]",
            F = "[object Object]",
            M = {};
        M[O] = M["[object Array]"] = M["[object ArrayBuffer]"] = M["[object DataView]"] = M["[object Boolean]"] = M["[object Date]"] = M["[object Float32Array]"] = M["[object Float64Array]"] = M["[object Int8Array]"] = M["[object Int16Array]"] = M["[object Int32Array]"] = M["[object Map]"] = M["[object Number]"] = M[F] = M["[object RegExp]"] = M["[object Set]"] = M["[object String]"] = M["[object Symbol]"] = M["[object Uint8Array]"] = M["[object Uint8ClampedArray]"] = M["[object Uint16Array]"] = M["[object Uint32Array]"] = !0, M["[object Error]"] = M[N] = M["[object WeakMap]"] = !1, e.exports = r
    }, function (e, t, n) {
        (function (e) {
            function r(e, t) {
                if (t) return e.slice();
                var n = e.length,
                    r = c ? c(n) : new e.constructor(n);
                return e.copy(r), r
            }
            var a = n(5),
                i = "object" == typeof t && t && !t.nodeType && t,
                o = i && "object" == typeof e && e && !e.nodeType && e,
                s = o && o.exports === i,
                u = s ? a.Buffer : void 0,
                c = u ? u.allocUnsafe : void 0;
            e.exports = r
        }).call(t, n(81)(e))
    }, function (e, t, n) {
        var r = n(95),
            a = n(100),
            i = n(96),
            o = n(132),
            s = Object.getOwnPropertySymbols,
            u = s ? function (e) {
                for (var t = []; e;) r(t, i(e)), e = a(e);
                return t
            } : o;
        e.exports = u
    }, function (e, t, n) {
        function r(e, t) {
            var n = t ? a(e.buffer) : e.buffer;
            return new e.constructor(n, e.byteOffset, e.length)
        }
        var a = n(102);
        e.exports = r
    }, function (e, t, n) {
        function r(e) {
            return "function" != typeof e.constructor || o(e) ? {} : a(i(e))
        }
        var a = n(65),
            i = n(100),
            o = n(54);
        e.exports = r
    }, function (e, t) {
        function n(e) {
            var t = null == e ? 0 : e.length;
            return t ? e[t - 1] : void 0
        }
        e.exports = n
    }, function (e, t) {
        function n(e, t, n) {
            var r = -1,
                a = e.length;
            t < 0 && (t = -t > a ? 0 : a + t), n = n > a ? a : n, n < 0 && (n += a), a = t > n ? 0 : n - t >>> 0, t >>>= 0;
            for (var i = Array(a); ++r < a;) i[r] = e[r + t];
            return i
        }
        e.exports = n
    }, function (e, t, n) {
        function r(e) {
            return o(i(e, void 0, a), e + "")
        }
        var a = n(149),
            i = n(121),
            o = n(89);
        e.exports = r
    }, function (e, t, n) {
        function r(e) {
            return (null == e ? 0 : e.length) ? a(e, 1) : []
        }
        var a = n(150);
        e.exports = r
    }, function (e, t, n) {
        function r(e, t, n, o, s) {
            var u = -1,
                c = e.length;
            for (n || (n = i), s || (s = []); ++u < c;) {
                var l = e[u];
                t > 0 && n(l) ? t > 1 ? r(l, t - 1, n, o, s) : a(s, l) : o || (s[s.length] = l)
            }
            return s
        }
        var a = n(95),
            i = n(302);
        e.exports = r
    }, function (e, t, n) {
        function r(e) {
            if (!e) return 0 === e ? e : 0;
            if ((e = a(e)) === i || e === -i) {
                return (e < 0 ? -1 : 1) * o
            }
            return e === e ? e : 0
        }
        var a = n(303),
            i = 1 / 0,
            o = 1.7976931348623157e308;
        e.exports = r
    }, function (e, t, n) {
        function r(e) {
            return "number" == typeof e || i(e) && a(e) == o
        }
        var a = n(15),
            i = n(6),
            o = "[object Number]";
        e.exports = r
    }, function (e, t, n) {
        function r(e, t, n) {
            var r = null == e ? 0 : e.length;
            if (!r) return -1;
            var u = null == n ? 0 : o(n);
            return u < 0 && (u = s(r + u, 0)), a(e, i(t, 3), u)
        }
        var a = n(119),
            i = n(10),
            o = n(32),
            s = Math.max;
        e.exports = r
    }, function (e, t, n) {
        function r(e, t, n) {
            if ((e = c(e)) && (n || void 0 === t)) return e.replace(l, "");
            if (!e || !(t = a(t))) return e;
            var r = u(e),
                f = u(t),
                p = s(r, f),
                d = o(r, f) + 1;
            return i(r, p, d).join("")
        }
        var a = n(98),
            i = n(306),
            o = n(307),
            s = n(308),
            u = n(309),
            c = n(63),
            l = /^\s+|\s+$/g;
        e.exports = r
    }, function (e, t, n) {
        function r(e, t, n) {
            (void 0 === n || i(e[t], n)) && (void 0 !== n || t in e) || a(e, t, n)
        }
        var a = n(49),
            i = n(28);
        e.exports = r
    }, function (e, t) {
        function n(e, t) {
            return "__proto__" == t ? void 0 : e[t]
        }
        e.exports = n
    }, function (e, t, n) {
        function r(e) {
            return a(function (t, n) {
                var r = -1,
                    a = n.length,
                    o = a > 1 ? n[a - 1] : void 0,
                    s = a > 2 ? n[2] : void 0;
                for (o = e.length > 3 && "function" == typeof o ? (a--, o) : void 0, s && i(n[0], n[1], s) && (o = a < 3 ? void 0 : o, a = 1), t = Object(t); ++r < a;) {
                    var u = n[r];
                    u && e(t, u, r, o)
                }
                return t
            })
        }
        var a = n(22),
            i = n(69);
        e.exports = r
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            var t = {};
            return d(e, function (e, n) {
                t[e] = n
            }), t
        }

        function a(e, t, n) {
            t && t[n] && (e.stats = t[n])
        }

        function i(e, t) {
            return b(e, function (e) {
                return _(e.attributes, t)
            })
        }

        function o(e, t) {
            var n = t[0];
            this._rawResults = t, this.query = n.query, this.parsedQuery = n.parsedQuery, this.hits = n.hits, this.index = n.index, this.hitsPerPage = n.hitsPerPage, this.nbHits = n.nbHits, this.nbPages = n.nbPages, this.page = n.page, this.processingTimeMS = y(t, "processingTimeMS"), this.aroundLatLng = n.aroundLatLng, this.automaticRadius = n.automaticRadius, this.serverUsed = n.serverUsed, this.timeoutCounts = n.timeoutCounts, this.timeoutHits = n.timeoutHits, this.exhaustiveFacetsCount = n.exhaustiveFacetsCount, this.exhaustiveNbHits = n.exhaustiveNbHits, this.userData = n.userData, this.queryID = n.queryID, this.disjunctiveFacets = [], this.hierarchicalFacets = w(e.hierarchicalFacets, function () {
                return []
            }), this.facets = [];
            var o = e.getRefinedDisjunctiveFacets(),
                s = r(e.facets),
                u = r(e.disjunctiveFacets),
                c = 1,
                l = this;
            d(n.facets, function (t, r) {
                var o = i(e.hierarchicalFacets, r);
                if (o) {
                    var c = o.attributes.indexOf(r),
                        f = v(e.hierarchicalFacets, {
                            name: o.name
                        });
                    l.hierarchicalFacets[f][c] = {
                        attribute: r,
                        data: t,
                        exhaustive: n.exhaustiveFacetsCount
                    }
                } else {
                    var p, d = -1 !== m(e.disjunctiveFacets, r),
                        h = -1 !== m(e.facets, r);
                    d && (p = u[r], l.disjunctiveFacets[p] = {
                        name: r,
                        data: t,
                        exhaustive: n.exhaustiveFacetsCount
                    }, a(l.disjunctiveFacets[p], n.facets_stats, r)), h && (p = s[r], l.facets[p] = {
                        name: r,
                        data: t,
                        exhaustive: n.exhaustiveFacetsCount
                    }, a(l.facets[p], n.facets_stats, r))
                }
            }), this.hierarchicalFacets = h(this.hierarchicalFacets), d(o, function (r) {
                var i = t[c],
                    o = e.getHierarchicalFacetByName(r);
                d(i.facets, function (t, r) {
                    var s;
                    if (o) {
                        s = v(e.hierarchicalFacets, {
                            name: o.name
                        });
                        var c = v(l.hierarchicalFacets[s], {
                            attribute: r
                        });
                        if (-1 === c) return;
                        l.hierarchicalFacets[s][c].data = x({}, l.hierarchicalFacets[s][c].data, t)
                    } else {
                        s = u[r];
                        var f = n.facets && n.facets[r] || {};
                        l.disjunctiveFacets[s] = {
                            name: r,
                            data: R({}, t, f),
                            exhaustive: i.exhaustiveFacetsCount
                        }, a(l.disjunctiveFacets[s], i.facets_stats, r), e.disjunctiveFacetsRefinements[r] && d(e.disjunctiveFacetsRefinements[r], function (t) {
                            !l.disjunctiveFacets[s].data[t] && m(e.disjunctiveFacetsRefinements[r], t) > -1 && (l.disjunctiveFacets[s].data[t] = 0)
                        })
                    }
                }), c++
            }), d(e.getRefinedHierarchicalFacets(), function (n) {
                var r = e.getHierarchicalFacetByName(n),
                    a = e._getHierarchicalFacetSeparator(r),
                    i = e.getHierarchicalRefinement(n);
                if (!(0 === i.length || i[0].split(a).length < 2)) {
                    var o = t[c];
                    d(o.facets, function (t, n) {
                        var o = v(e.hierarchicalFacets, {
                                name: r.name
                            }),
                            s = v(l.hierarchicalFacets[o], {
                                attribute: n
                            });
                        if (-1 !== s) {
                            var u = {};
                            if (i.length > 0) {
                                var c = i[0].split(a)[0];
                                u[c] = l.hierarchicalFacets[o][s].data[c]
                            }
                            l.hierarchicalFacets[o][s].data = R(u, t, l.hierarchicalFacets[o][s].data)
                        }
                    }), c++
                }
            }), d(e.facetsExcludes, function (e, t) {
                var r = s[t];
                l.facets[r] = {
                    name: t,
                    data: n.facets[t],
                    exhaustive: n.exhaustiveFacetsCount
                }, d(e, function (e) {
                    l.facets[r] = l.facets[r] || {
                        name: t
                    }, l.facets[r].data = l.facets[r].data || {}, l.facets[r].data[e] = 0
                })
            }), this.hierarchicalFacets = w(this.hierarchicalFacets, N(e)), this.facets = h(this.facets), this.disjunctiveFacets = h(this.disjunctiveFacets), this._state = e
        }

        function s(e, t) {
            var n = {
                name: t
            };
            if (e._state.isConjunctiveFacet(t)) {
                var r = b(e.facets, n);
                return r ? w(r.data, function (n, r) {
                    return {
                        name: r,
                        count: n,
                        isRefined: e._state.isFacetRefined(t, r),
                        isExcluded: e._state.isExcludeRefined(t, r)
                    }
                }) : []
            }
            if (e._state.isDisjunctiveFacet(t)) {
                var a = b(e.disjunctiveFacets, n);
                return a ? w(a.data, function (n, r) {
                    return {
                        name: r,
                        count: n,
                        isRefined: e._state.isDisjunctiveFacetRefined(t, r)
                    }
                }) : []
            }
            if (e._state.isHierarchicalFacet(t)) return b(e.hierarchicalFacets, n)
        }

        function u(e, t) {
            if (!t.data || 0 === t.data.length) return t;
            var n = w(t.data, C(u, e)),
                r = e(n);
            return x({}, t, {
                data: r
            })
        }

        function c(e, t) {
            return t.sort(e)
        }

        function l(e, t) {
            var n = b(e, {
                name: t
            });
            return n && n.stats
        }

        function f(e, t, n, r, a) {
            var i = b(a, {
                    name: n
                }),
                o = g(i, "data[" + r + "]"),
                s = g(i, "exhaustive");
            return {
                type: t,
                attributeName: n,
                name: r,
                count: o || 0,
                exhaustive: s || !1
            }
        }

        function p(e, t, n, r) {
            for (var a = b(r, {
                    name: t
                }), i = e.getHierarchicalFacetByName(t), o = n.split(i.separator), s = o[o.length - 1], u = 0; void 0 !== a && u < o.length; ++u) a = b(a.data, {
                name: o[u]
            });
            var c = g(a, "count"),
                l = g(a, "exhaustive");
            return {
                type: "hierarchical",
                attributeName: t,
                name: s,
                count: c || 0,
                exhaustive: l || !1
            }
        }
        var d = n(18),
            h = n(318),
            m = n(66),
            v = n(153),
            g = n(61),
            y = n(319),
            b = n(9),
            _ = n(321),
            w = n(11),
            P = n(159),
            R = n(68),
            x = n(103),
            S = n(17),
            C = n(328),
            j = n(343),
            O = n(170),
            N = n(346);
        o.prototype.getFacetByName = function (e) {
            var t = {
                name: e
            };
            return b(this.facets, t) || b(this.disjunctiveFacets, t) || b(this.hierarchicalFacets, t)
        }, o.DEFAULT_SORT = ["isRefined:desc", "count:desc", "name:asc"], o.prototype.getFacetValues = function (e, t) {
            var n = s(this, e);
            if (!n) throw new Error(e + " is not a retrieved facet.");
            var r = R({}, t, {
                sortBy: o.DEFAULT_SORT
            });
            if (Array.isArray(r.sortBy)) {
                var a = O(r.sortBy, o.DEFAULT_SORT);
                return Array.isArray(n) ? P(n, a[0], a[1]) : u(j(P, a[0], a[1]), n)
            }
            if (S(r.sortBy)) return Array.isArray(n) ? n.sort(r.sortBy) : u(C(c, r.sortBy), n);
            throw new Error("options.sortBy is optional but if defined it must be either an array of string (predicates) or a sorting function")
        }, o.prototype.getFacetStats = function (e) {
            if (this._state.isConjunctiveFacet(e)) return l(this.facets, e);
            if (this._state.isDisjunctiveFacet(e)) return l(this.disjunctiveFacets, e);
            throw new Error(e + " is not present in `facets` or `disjunctiveFacets`")
        }, o.prototype.getRefinements = function () {
            var e = this._state,
                t = this,
                n = [];
            return d(e.facetsRefinements, function (r, a) {
                d(r, function (r) {
                    n.push(f(e, "facet", a, r, t.facets))
                })
            }), d(e.facetsExcludes, function (r, a) {
                d(r, function (r) {
                    n.push(f(e, "exclude", a, r, t.facets))
                })
            }), d(e.disjunctiveFacetsRefinements, function (r, a) {
                d(r, function (r) {
                    n.push(f(e, "disjunctive", a, r, t.disjunctiveFacets))
                })
            }), d(e.hierarchicalFacetsRefinements, function (r, a) {
                d(r, function (r) {
                    n.push(p(e, a, r, t.hierarchicalFacets))
                })
            }), d(e.numericRefinements, function (e, t) {
                d(e, function (e, r) {
                    d(e, function (e) {
                        n.push({
                            type: "numeric",
                            attributeName: t,
                            name: e,
                            numericValue: e,
                            operator: r
                        })
                    })
                })
            }), d(e.tagRefinements, function (e) {
                n.push({
                    type: "tag",
                    attributeName: "_tags",
                    name: e
                })
            }), n
        }, e.exports = o
    }, function (e, t, n) {
        function r(e, t, n, r) {
            return null == e ? [] : (i(t) || (t = null == t ? [] : [t]), n = r ? void 0 : n, i(n) || (n = null == n ? [] : [n]), a(e, t, n))
        }
        var a = n(324),
            i = n(4);
        e.exports = r
    }, function (e, t, n) {
        var r = n(25),
            a = n(161),
            i = a ? function (e, t) {
                return a.set(e, t), e
            } : r;
        e.exports = i
    }, function (e, t, n) {
        var r = n(134),
            a = r && new r;
        e.exports = a
    }, function (e, t, n) {
        function r(e, t, n, b, _, w, P, R, x, S) {
            function C() {
                for (var d = arguments.length, h = Array(d), m = d; m--;) h[m] = arguments[m];
                if (E) var v = c(C),
                    g = o(h, v);
                if (b && (h = a(h, b, _, E)), w && (h = i(h, w, P, E)), d -= g, E && d < S) {
                    var y = f(h, v);
                    return u(e, t, r, C.placeholder, n, h, y, R, x, S - d)
                }
                var k = O ? n : this,
                    T = N ? k[e] : e;
                return d = h.length, R ? h = l(h, R) : F && d > 1 && h.reverse(), j && x < d && (h.length = x), this && this !== p && this instanceof C && (T = M || s(T)), T.apply(k, h)
            }
            var j = t & g,
                O = t & d,
                N = t & h,
                E = t & (m | v),
                F = t & y,
                M = N ? void 0 : s(e);
            return C
        }
        var a = n(163),
            i = n(164),
            o = n(331),
            s = n(71),
            u = n(165),
            c = n(51),
            l = n(340),
            f = n(34),
            p = n(5),
            d = 1,
            h = 2,
            m = 8,
            v = 16,
            g = 128,
            y = 512;
        e.exports = r
    }, function (e, t) {
        function n(e, t, n, a) {
            for (var i = -1, o = e.length, s = n.length, u = -1, c = t.length, l = r(o - s, 0), f = Array(c + l), p = !a; ++u < c;) f[u] = t[u];
            for (; ++i < s;)(p || i < o) && (f[n[i]] = e[i]);
            for (; l--;) f[u++] = e[i++];
            return f
        }
        var r = Math.max;
        e.exports = n
    }, function (e, t) {
        function n(e, t, n, a) {
            for (var i = -1, o = e.length, s = -1, u = n.length, c = -1, l = t.length, f = r(o - u, 0), p = Array(f + l), d = !a; ++i < f;) p[i] = e[i];
            for (var h = i; ++c < l;) p[h + c] = t[c];
            for (; ++s < u;)(d || i < o) && (p[h + n[s]] = e[i++]);
            return p
        }
        var r = Math.max;
        e.exports = n
    }, function (e, t, n) {
        function r(e, t, n, r, d, h, m, v, g, y) {
            var b = t & l,
                _ = b ? m : void 0,
                w = b ? void 0 : m,
                P = b ? h : void 0,
                R = b ? void 0 : h;
            t |= b ? f : p, (t &= ~(b ? p : f)) & c || (t &= ~(s | u));
            var x = [e, t, d, P, _, R, w, v, g, y],
                S = n.apply(void 0, x);
            return a(e) && i(S, x), S.placeholder = r, o(S, e, t)
        }
        var a = n(332),
            i = n(168),
            o = n(169),
            s = 1,
            u = 2,
            c = 4,
            l = 8,
            f = 32,
            p = 64;
        e.exports = r
    }, function (e, t, n) {
        var r = n(161),
            a = n(72),
            i = r ? function (e) {
                return r.get(e)
            } : a;
        e.exports = i
    }, function (e, t, n) {
        function r(e, t) {
            this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
        }
        var a = n(65),
            i = n(106);
        r.prototype = a(i.prototype), r.prototype.constructor = r, e.exports = r
    }, function (e, t, n) {
        var r = n(160),
            a = n(124),
            i = a(r);
        e.exports = i
    }, function (e, t, n) {
        function r(e, t, n) {
            var r = t + "";
            return o(e, i(r, s(a(r), n)))
        }
        var a = n(337),
            i = n(338),
            o = n(89),
            s = n(339);
        e.exports = r
    }, function (e, t, n) {
        "use strict";
        var r = n(19),
            a = n(9),
            i = n(344);
        e.exports = function (e, t) {
            return r(e, function (e, n) {
                var r = n.split(":");
                if (t && 1 === r.length) {
                    var o = a(t, function (e) {
                        return i(e, n[0])
                    });
                    o && (r = o.split(":"))
                }
                return e[0].push(r[0]), e[1].push(r[1]), e
            }, [
                [],
                []
            ])
        }
    }, function (e, t, n) {
        function r(e, t, n) {
            for (var r = -1, s = t.length, u = {}; ++r < s;) {
                var c = t[r],
                    l = a(e, c);
                n(l, c) && i(u, o(c, e), l)
            }
            return u
        }
        var a = n(62),
            i = n(348),
            o = n(29);
        e.exports = r
    }, function (e, t, n) {
        (function (e, r) {
            function a(e, n) {
                var r = {
                    seen: [],
                    stylize: o
                };
                return arguments.length >= 3 && (r.depth = arguments[2]), arguments.length >= 4 && (r.colors = arguments[3]), m(n) ? r.showHidden = n : n && t._extend(r, n), w(r.showHidden) && (r.showHidden = !1), w(r.depth) && (r.depth = 2), w(r.colors) && (r.colors = !1), w(r.customInspect) && (r.customInspect = !0), r.colors && (r.stylize = i), u(r, e, r.depth)
            }

            function i(e, t) {
                var n = a.styles[t];
                return n ? "\x1b[" + a.colors[n][0] + "m" + e + "\x1b[" + a.colors[n][1] + "m" : e
            }

            function o(e, t) {
                return e
            }

            function s(e) {
                var t = {};
                return e.forEach(function (e, n) {
                    t[e] = !0
                }), t
            }

            function u(e, n, r) {
                if (e.customInspect && n && C(n.inspect) && n.inspect !== t.inspect && (!n.constructor || n.constructor.prototype !== n)) {
                    var a = n.inspect(r, e);
                    return b(a) || (a = u(e, a, r)), a
                }
                var i = c(e, n);
                if (i) return i;
                var o = Object.keys(n),
                    m = s(o);
                if (e.showHidden && (o = Object.getOwnPropertyNames(n)), S(n) && (o.indexOf("message") >= 0 || o.indexOf("description") >= 0)) return l(n);
                if (0 === o.length) {
                    if (C(n)) {
                        var v = n.name ? ": " + n.name : "";
                        return e.stylize("[Function" + v + "]", "special")
                    }
                    if (P(n)) return e.stylize(RegExp.prototype.toString.call(n), "regexp");
                    if (x(n)) return e.stylize(Date.prototype.toString.call(n), "date");
                    if (S(n)) return l(n)
                }
                var g = "",
                    y = !1,
                    _ = ["{", "}"];
                if (h(n) && (y = !0, _ = ["[", "]"]), C(n)) {
                    g = " [Function" + (n.name ? ": " + n.name : "") + "]"
                }
                if (P(n) && (g = " " + RegExp.prototype.toString.call(n)), x(n) && (g = " " + Date.prototype.toUTCString.call(n)), S(n) && (g = " " + l(n)), 0 === o.length && (!y || 0 == n.length)) return _[0] + g + _[1];
                if (r < 0) return P(n) ? e.stylize(RegExp.prototype.toString.call(n), "regexp") : e.stylize("[Object]", "special");
                e.seen.push(n);
                var w;
                return w = y ? f(e, n, r, m, o) : o.map(function (t) {
                    return p(e, n, r, m, t, y)
                }), e.seen.pop(), d(w, g, _)
            }

            function c(e, t) {
                if (w(t)) return e.stylize("undefined", "undefined");
                if (b(t)) {
                    var n = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                    return e.stylize(n, "string")
                }
                return y(t) ? e.stylize("" + t, "number") : m(t) ? e.stylize("" + t, "boolean") : v(t) ? e.stylize("null", "null") : void 0
            }

            function l(e) {
                return "[" + Error.prototype.toString.call(e) + "]"
            }

            function f(e, t, n, r, a) {
                for (var i = [], o = 0, s = t.length; o < s; ++o) F(t, String(o)) ? i.push(p(e, t, n, r, String(o), !0)) : i.push("");
                return a.forEach(function (a) {
                    a.match(/^\d+$/) || i.push(p(e, t, n, r, a, !0))
                }), i
            }

            function p(e, t, n, r, a, i) {
                var o, s, c;
                if (c = Object.getOwnPropertyDescriptor(t, a) || {
                        value: t[a]
                    }, c.get ? s = c.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : c.set && (s = e.stylize("[Setter]", "special")), F(r, a) || (o = "[" + a + "]"), s || (e.seen.indexOf(c.value) < 0 ? (s = v(n) ? u(e, c.value, null) : u(e, c.value, n - 1), s.indexOf("\n") > -1 && (s = i ? s.split("\n").map(function (e) {
                        return "  " + e
                    }).join("\n").substr(2) : "\n" + s.split("\n").map(function (e) {
                        return "   " + e
                    }).join("\n"))) : s = e.stylize("[Circular]", "special")), w(o)) {
                    if (i && a.match(/^\d+$/)) return s;
                    o = JSON.stringify("" + a), o.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (o = o.substr(1, o.length - 2), o = e.stylize(o, "name")) : (o = o.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), o = e.stylize(o, "string"))
                }
                return o + ": " + s
            }

            function d(e, t, n) {
                var r = 0;
                return e.reduce(function (e, t) {
                    return r++, t.indexOf("\n") >= 0 && r++, e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
                }, 0) > 60 ? n[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + n[1] : n[0] + t + " " + e.join(", ") + " " + n[1]
            }

            function h(e) {
                return Array.isArray(e)
            }

            function m(e) {
                return "boolean" === typeof e
            }

            function v(e) {
                return null === e
            }

            function g(e) {
                return null == e
            }

            function y(e) {
                return "number" === typeof e
            }

            function b(e) {
                return "string" === typeof e
            }

            function _(e) {
                return "symbol" === typeof e
            }

            function w(e) {
                return void 0 === e
            }

            function P(e) {
                return R(e) && "[object RegExp]" === O(e)
            }

            function R(e) {
                return "object" === typeof e && null !== e
            }

            function x(e) {
                return R(e) && "[object Date]" === O(e)
            }

            function S(e) {
                return R(e) && ("[object Error]" === O(e) || e instanceof Error)
            }

            function C(e) {
                return "function" === typeof e
            }

            function j(e) {
                return null === e || "boolean" === typeof e || "number" === typeof e || "string" === typeof e || "symbol" === typeof e || "undefined" === typeof e
            }

            function O(e) {
                return Object.prototype.toString.call(e)
            }

            function N(e) {
                return e < 10 ? "0" + e.toString(10) : e.toString(10)
            }

            function E() {
                var e = new Date,
                    t = [N(e.getHours()), N(e.getMinutes()), N(e.getSeconds())].join(":");
                return [e.getDate(), L[e.getMonth()], t].join(" ")
            }

            function F(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            var M = /%[sdj%]/g;
            t.format = function (e) {
                if (!b(e)) {
                    for (var t = [], n = 0; n < arguments.length; n++) t.push(a(arguments[n]));
                    return t.join(" ")
                }
                for (var n = 1, r = arguments, i = r.length, o = String(e).replace(M, function (e) {
                        if ("%%" === e) return "%";
                        if (n >= i) return e;
                        switch (e) {
                            case "%s":
                                return String(r[n++]);
                            case "%d":
                                return Number(r[n++]);
                            case "%j":
                                try {
                                    return JSON.stringify(r[n++])
                                } catch (e) {
                                    return "[Circular]"
                                }
                                default:
                                    return e
                        }
                    }), s = r[n]; n < i; s = r[++n]) v(s) || !R(s) ? o += " " + s : o += " " + a(s);
                return o
            }, t.deprecate = function (n, a) {
                function i() {
                    if (!o) {
                        if (r.throwDeprecation) throw new Error(a);
                        r.traceDeprecation ? console.trace(a) : console.error(a), o = !0
                    }
                    return n.apply(this, arguments)
                }
                if (w(e.process)) return function () {
                    return t.deprecate(n, a).apply(this, arguments)
                };
                if (!0 === r.noDeprecation) return n;
                var o = !1;
                return i
            };
            var k, T = {};
            t.debuglog = function (e) {
                if (w(k) && (k = Object({
                        NODE_ENV: "production"
                    }).NODE_DEBUG || ""), e = e.toUpperCase(), !T[e])
                    if (new RegExp("\\b" + e + "\\b", "i").test(k)) {
                        var n = r.pid;
                        T[e] = function () {
                            var r = t.format.apply(t, arguments);
                            console.error("%s %d: %s", e, n, r)
                        }
                    } else T[e] = function () {};
                return T[e]
            }, t.inspect = a, a.colors = {
                bold: [1, 22],
                italic: [3, 23],
                underline: [4, 24],
                inverse: [7, 27],
                white: [37, 39],
                grey: [90, 39],
                black: [30, 39],
                blue: [34, 39],
                cyan: [36, 39],
                green: [32, 39],
                magenta: [35, 39],
                red: [31, 39],
                yellow: [33, 39]
            }, a.styles = {
                special: "cyan",
                number: "yellow",
                boolean: "yellow",
                undefined: "grey",
                null: "bold",
                string: "green",
                date: "magenta",
                regexp: "red"
            }, t.isArray = h, t.isBoolean = m, t.isNull = v, t.isNullOrUndefined = g, t.isNumber = y, t.isString = b, t.isSymbol = _, t.isUndefined = w, t.isRegExp = P, t.isObject = R, t.isDate = x, t.isError = S, t.isFunction = C, t.isPrimitive = j, t.isBuffer = n(350);
            var L = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            t.log = function () {
                console.log("%s - %s", E(), t.format.apply(t, arguments))
            }, t.inherits = n(351), t._extend = function (e, t) {
                if (!t || !R(t)) return e;
                for (var n = Object.keys(t), r = n.length; r--;) e[n[r]] = t[n[r]];
                return e
            }
        }).call(t, n(39), n(73))
    }, function (e, t, n) {
        var r = n(122),
            a = n(354),
            i = n(25),
            o = Object.prototype,
            s = o.toString,
            u = a(function (e, t, n) {
                null != t && "function" != typeof t.toString && (t = s.call(t)), e[t] = n
            }, r(i));
        e.exports = u
    }, function (e, t, n) {
        "use strict";
        var r = n(356),
            a = n(357),
            i = n(175);
        e.exports = {
            formats: i,
            parse: a,
            stringify: r
        }
    }, function (e, t, n) {
        "use strict";
        var r = String.prototype.replace,
            a = /%20/g;
        e.exports = {
            default: "RFC3986",
            formatters: {
                RFC1738: function (e) {
                    return r.call(e, a, "+")
                },
                RFC3986: function (e) {
                    return e
                }
            },
            RFC1738: "RFC1738",
            RFC3986: "RFC3986"
        }
    }, function (e, t, n) {
        function r(e, t) {
            var n = {};
            return t = o(t, 3), i(e, function (e, r, i) {
                a(n, t(e, r, i), e)
            }), n
        }
        var a = n(49),
            i = n(44),
            o = n(10);
        e.exports = r
    }, function (e, t, n) {
        function r(e, t) {
            var n = {};
            return t = o(t, 3), i(e, function (e, r, i) {
                a(n, r, t(e, r, i))
            }), n
        }
        var a = n(49),
            i = n(44),
            o = n(10);
        e.exports = r
    }, function (e, t, n) {
        "use strict";
        e.exports = "2.26.1"
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function o(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function s() {
            return "#"
        }

        function u(e) {
            return function (t, n) {
                if (!n.getConfiguration) return t;
                var r = n.getConfiguration(t, e),
                    a = function e(t, n) {
                        return Array.isArray(t) ? (0, _.default)(t, n) : (0, P.default)(t) ? (0, y.default)({}, t, n, e) : void 0
                    };
                return (0, y.default)({}, t, r, a)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var c = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            l = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }();
        t.enhanceConfiguration = u;
        var f = n(361),
            p = r(f),
            d = n(52),
            h = r(d),
            m = n(18),
            v = r(m),
            g = n(183),
            y = r(g),
            b = n(381),
            _ = r(b),
            w = n(23),
            P = r(w),
            R = n(107),
            x = r(R),
            S = n(383),
            C = r(S),
            j = n(384),
            O = r(j),
            N = n(185),
            E = r(N),
            F = n(186),
            M = r(F),
            k = n(187),
            T = r(k),
            L = n(385),
            I = r(L),
            A = {
                stateMapping: (0, E.default)(),
                router: (0, M.default)()
            },
            H = function (e, t, n) {
                return e(t, n)
            },
            U = function (e) {
                var t = e.appId,
                    n = e.apiKey,
                    r = e.indexName,
                    a = e.createAlgoliaClient,
                    i = e.searchClient;
                if (i) {
                    if (i && (null === r || null !== t || null !== n || a !== H)) {
                        throw new Error("\nUsage: instantsearch({\n  indexName: 'my_index_name',\n  searchClient: algoliasearch('appId', 'apiKey')\n});")
                    }
                } else if (null === t || null === n || null === r) {
                    throw new Error("\nUsage: instantsearch({\n  appId: 'my_application_id',\n  apiKey: 'my_search_api_key',\n  indexName: 'my_index_name'\n});")
                }
            },
            D = function (e) {
                function t(e) {
                    a(this, t);
                    var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this)),
                        r = e.appId,
                        o = void 0 === r ? null : r,
                        s = e.apiKey,
                        u = void 0 === s ? null : s,
                        l = e.indexName,
                        f = void 0 === l ? null : l,
                        d = e.numberLocale,
                        h = e.searchParameters,
                        m = void 0 === h ? {} : h,
                        v = e.urlSync,
                        g = void 0 === v ? null : v,
                        y = e.routing,
                        b = void 0 === y ? null : y,
                        _ = e.searchFunction,
                        w = e.createAlgoliaClient,
                        R = void 0 === w ? H : w,
                        x = e.stalledSearchDelay,
                        S = void 0 === x ? 200 : x,
                        C = e.searchClient,
                        j = void 0 === C ? null : C;
                    if (U({
                            appId: o,
                            apiKey: u,
                            indexName: f,
                            createAlgoliaClient: R,
                            searchClient: j
                        }), j && "function" !== typeof j.search) throw new Error("InstantSearch configuration error: `searchClient` must implement a `search(requests)` method.");
                    var O = j || R(p.default, o, u);
                    if ("function" === typeof O.addAlgoliaAgent && O.addAlgoliaAgent("instantsearch.js " + T.default), n.client = O, n.helper = null, n.indexName = f, n.searchParameters = c({}, m, {
                            index: f
                        }), n.widgets = [], n.templatesConfig = {
                            helpers: (0, I.default)({
                                numberLocale: d
                            }),
                            compileOptions: {}
                        }, n._stalledSearchDelay = S, _ && (n._searchFunction = _), null !== g) {
                        if (null !== b) throw new Error("InstantSearch configuration error: it is not possible to use `urlSync` and `routing` at the same time");
                        console.warn("InstantSearch.js: `urlSync` option is deprecated and will be removed in the next major version."), console.warn("You can now use the new `routing` option"), !0 === g && console.warn("Use it like this: `routing: true`"), console.warn("For advanced use cases, checkout the documentation: https://community.algolia.com/instantsearch.js/v2/guides/routing.html#migrating-from-urlsync")
                    }
                    return n.urlSync = !0 === g ? {} : g, !0 === b ? n.routing = A : (0, P.default)(b) && (n.routing = c({}, A, b)), e.createAlgoliaClient && console.warn("\nInstantSearch.js: `createAlgoliaClient` option is deprecated and will be removed in the next major version.\nPlease use `searchClient` instead: https://community.algolia.com/instantsearch.js/v2/instantsearch.html#struct-InstantSearchOptions-searchClient.\nTo help you migrate, please refer to the migration guide: https://community.algolia.com/instantsearch.js/v2/guides/prepare-for-v3.html"), n
                }
                return o(t, e), l(t, [{
                    key: "addWidget",
                    value: function (e) {
                        this.addWidgets([e])
                    }
                }, {
                    key: "addWidgets",
                    value: function (e) {
                        var t = this;
                        if (!Array.isArray(e)) throw new Error("You need to provide an array of widgets or call `addWidget()`");
                        e.forEach(function (e) {
                            if (void 0 === e.render && void 0 === e.init) throw new Error("Widget definition missing render or init method");
                            t.widgets.push(e)
                        }), this.started && Boolean(e.length) && (this.searchParameters = this.widgets.reduce(u({}), c({}, this.helper.state)), this.helper.setState(this.searchParameters), e.forEach(function (e) {
                            e.init && e.init({
                                state: t.helper.state,
                                helper: t.helper,
                                templatesConfig: t.templatesConfig,
                                createURL: t._createAbsoluteURL,
                                onHistoryChange: t._onHistoryChange,
                                instantSearchInstance: t
                            })
                        }), this.helper.search())
                    }
                }, {
                    key: "removeWidget",
                    value: function (e) {
                        this.removeWidgets([e])
                    }
                }, {
                    key: "removeWidgets",
                    value: function (e) {
                        var t = this;
                        if (!Array.isArray(e)) throw new Error("You need to provide an array of widgets or call `removeWidget()`");
                        e.forEach(function (e) {
                            if (!t.widgets.includes(e) || "function" !== typeof e.dispose) throw new Error("The widget you tried to remove does not implement the dispose method, therefore it is not possible to remove this widget");
                            t.widgets = t.widgets.filter(function (t) {
                                return t !== e
                            });
                            var n = e.dispose({
                                helper: t.helper,
                                state: t.helper.getState()
                            });
                            n && (t.searchParameters = t.widgets.filter(function (e) {
                                return "URLSync" !== e.constructor.name
                            }).reduce(u({}), c({}, n)), t.helper.setState(t.searchParameters))
                        }), setTimeout(function () {
                            t.widgets.length > 0 && t.helper.search()
                        }, 0)
                    }
                }, {
                    key: "refresh",
                    value: function () {
                        this.helper && this.helper.clearCache().search()
                    }
                }, {
                    key: "start",
                    value: function () {
                        var e = this;
                        if (!this.widgets) throw new Error("No widgets were added to instantsearch.js");
                        if (this.started) throw new Error("start() has been already called once");
                        var t = void 0;
                        if (this.urlSync) {
                            var n = (0, C.default)(this.urlSync);
                            this._createURL = n.createURL.bind(n), this._createAbsoluteURL = function (t) {
                                return e._createURL(t, {
                                    absolute: !0
                                })
                            }, this._onHistoryChange = n.onHistoryChange.bind(n), this.widgets.push(n), t = n.searchParametersFromUrl
                        } else if (this.routing) {
                            var r = new O.default(c({}, this.routing, {
                                instantSearchInstance: this
                            }));
                            this._onHistoryChange = r.onHistoryChange.bind(r), this._createURL = r.createURL.bind(r), this._createAbsoluteURL = this._createURL, this.widgets.push(r)
                        } else this._createURL = s, this._createAbsoluteURL = s, this._onHistoryChange = function () {};
                        this.searchParameters = this.widgets.reduce(u(t), this.searchParameters);
                        var a = (0, h.default)(this.client, this.searchParameters.index || this.indexName, this.searchParameters);
                        this._searchFunction && (this._mainHelperSearch = a.search.bind(a), a.search = function () {
                            var t = (0, h.default)({
                                search: function () {
                                    return new Promise(function () {})
                                }
                            }, a.state.index, a.state);
                            t.once("search", function (t) {
                                a.overrideStateWithoutTriggeringChangeEvent(t), e._mainHelperSearch()
                            }), e._searchFunction(t)
                        }), this.helper = a, this._init(a.state, this.helper), this.helper.on("result", this._render.bind(this, this.helper)), this.helper.on("error", function (t) {
                            e.emit("error", t)
                        }), this._searchStalledTimer = null, this._isSearchStalled = !0, this.helper.search(), this.helper.on("search", function () {
                            e._isSearchStalled || e._searchStalledTimer || (e._searchStalledTimer = setTimeout(function () {
                                e._isSearchStalled = !0, e._render(e.helper, e.helper.lastResults, e.helper.lastResults._state)
                            }, e._stalledSearchDelay))
                        }), this.started = !0
                    }
                }, {
                    key: "dispose",
                    value: function () {
                        this.removeWidgets(this.widgets)
                    }
                }, {
                    key: "createURL",
                    value: function (e) {
                        if (!this._createURL) throw new Error("You need to call start() before calling createURL()");
                        return this._createURL(this.helper.state.setQueryParameters(e))
                    }
                }, {
                    key: "_render",
                    value: function (e, t, n) {
                        var r = this;
                        this.helper.hasPendingRequests() || (clearTimeout(this._searchStalledTimer), this._searchStalledTimer = null, this._isSearchStalled = !1), (0, v.default)(this.widgets, function (a) {
                            a.render && a.render({
                                templatesConfig: r.templatesConfig,
                                results: t,
                                state: n,
                                helper: e,
                                createURL: r._createAbsoluteURL,
                                instantSearchInstance: r,
                                searchMetadata: {
                                    isSearchStalled: r._isSearchStalled
                                }
                            })
                        }), this.emit("render")
                    }
                }, {
                    key: "_init",
                    value: function (e, t) {
                        var n = this;
                        (0, v.default)(this.widgets, function (r) {
                            r.init && r.init({
                                state: e,
                                helper: t,
                                templatesConfig: n.templatesConfig,
                                createURL: n._createAbsoluteURL,
                                onHistoryChange: n._onHistoryChange,
                                instantSearchInstance: n
                            })
                        })
                    }
                }]), t
            }(x.default);
        t.default = D
    }, function (e, t) {
        "function" === typeof Object.create ? e.exports = function (e, t) {
            e.super_ = t, e.prototype = Object.create(t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            })
        } : e.exports = function (e, t) {
            e.super_ = t;
            var n = function () {};
            n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
        }
    }, function (e, t, n) {
        function r(e, t) {
            return function (n, r, i) {
                if ("function" === typeof n && "object" === typeof r || "object" === typeof i) throw new a.AlgoliaSearchError("index.search usage is index.search(query, params, cb)");
                0 === arguments.length || "function" === typeof n ? (i = n, n = "") : 1 !== arguments.length && "function" !== typeof r || (i = r, r = void 0), "object" === typeof n && null !== n ? (r = n, n = void 0) : void 0 !== n && null !== n || (n = "");
                var o = "";
                void 0 !== n && (o += e + "=" + encodeURIComponent(n));
                var s;
                return void 0 !== r && (r.additionalUA && (s = r.additionalUA, delete r.additionalUA), o = this.as._getSearchParams(r, o)), this._search(o, t, i, s)
            }
        }
        e.exports = r;
        var a = n(74)
    }, function (e, t, n) {
        e.exports = function (e, t) {
            var r = n(368),
                a = n(35),
                i = {};
            return a(r(e), function (n) {
                !0 !== t(n) && (i[n] = e[n])
            }), i
        }
    }, function (e, t, n) {
        var r = n(104),
            a = n(157),
            i = a(function (e, t, n, a) {
                r(e, t, n, a)
            });
        e.exports = i
    }, function (e, t, n) {
        function r(e, t, n) {
            var r = -1,
                f = i,
                p = e.length,
                d = !0,
                h = [],
                m = h;
            if (n) d = !1, f = o;
            else if (p >= l) {
                var v = t ? null : u(e);
                if (v) return c(v);
                d = !1, f = s, m = new a
            } else m = t ? [] : h;
            e: for (; ++r < p;) {
                var g = e[r],
                    y = t ? t(g) : g;
                if (g = n || 0 !== g ? g : 0, d && y === y) {
                    for (var b = m.length; b--;)
                        if (m[b] === y) continue e;
                    t && m.push(y), h.push(g)
                } else f(m, y, n) || (m !== h && m.push(y), h.push(g))
            }
            return h
        }
        var a = n(84),
            i = n(87),
            o = n(120),
            s = n(88),
            u = n(382),
            c = n(94),
            l = 200;
        e.exports = r
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }();
        t.default = function () {
            return new i
        };
        var i = function () {
            function e() {
                r(this, e)
            }
            return a(e, [{
                key: "stateToRoute",
                value: function (e) {
                    return e
                }
            }, {
                key: "routeToState",
                value: function (e) {
                    return e
                }
            }]), e
        }()
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e) {
            var t = e.qsModule,
                n = e.routeState,
                r = e.location,
                a = r.protocol,
                i = r.hostname,
                o = r.port,
                s = void 0 === o ? "" : o,
                u = r.pathname,
                c = r.hash,
                l = t.stringify(n),
                f = "" === s ? "" : ":" + s;
            return n && 0 !== Object.keys(n).length ? a + "//" + i + f + u + "?" + l + c : a + "//" + i + f + u + c
        }

        function i(e) {
            var t = e.qsModule,
                n = e.location;
            return t.parse(n.search.slice(1))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }();
        t.default = function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return new(Function.prototype.bind.apply(c, [null].concat(t)))
        };
        var s = n(174),
            u = function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(s),
            c = function () {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = t.windowTitle,
                        o = t.writeDelay,
                        s = void 0 === o ? 400 : o,
                        u = t.createURL,
                        c = void 0 === u ? a : u,
                        l = t.parseURL,
                        f = void 0 === l ? i : l;
                    r(this, e), this.windowTitle = n, this.writeTimer = void 0, this.writeDelay = s, this._createURL = c, this.parseURL = f
                }
                return o(e, [{
                    key: "write",
                    value: function (e) {
                        var t = this,
                            n = this.createURL(e),
                            r = this.windowTitle && this.windowTitle(e);
                        this.writeTimer && window.clearTimeout(this.writeTimer), this.writeTimer = setTimeout(function () {
                            r && (window.document.title = r), window.history.pushState(e, r || "", n), t.writeTimer = void 0
                        }, this.writeDelay)
                    }
                }, {
                    key: "read",
                    value: function () {
                        return this.parseURL({
                            qsModule: u.default,
                            location: window.location
                        })
                    }
                }, {
                    key: "onUpdate",
                    value: function (e) {
                        var t = this;
                        this._onPopState = function (n) {
                            t.writeTimer && (window.clearTimeout(t.writeTimer), t.writeTimer = void 0);
                            var r = n.state;
                            e(r || t.read())
                        }, window.addEventListener("popstate", this._onPopState)
                    }
                }, {
                    key: "createURL",
                    value: function (e) {
                        return this._createURL({
                            qsModule: u.default,
                            routeState: e,
                            location: window.location
                        })
                    }
                }, {
                    key: "dispose",
                    value: function () {
                        window.removeEventListener("popstate", this._onPopState), this.writeTimer && window.clearTimeout(this.writeTimer), this.write()
                    }
                }]), e
            }()
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = "2.10.4"
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            return (0, a.checkRendering)(e, i),
                function () {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = n.excludeAttributes,
                        i = void 0 === r ? [] : r,
                        o = n.clearsQuery,
                        s = void 0 !== o && o;
                    return {
                        init: function (t) {
                            var r = t.helper,
                                o = t.instantSearchInstance,
                                u = t.createURL,
                                c = (0, a.getAttributesToClear)({
                                    helper: r,
                                    blackList: i
                                }),
                                l = s ? 0 !== c.length || "" !== r.state.query : 0 !== c.length;
                            this._refine = function () {
                                r.setState((0, a.clearRefinements)({
                                    helper: r,
                                    blackList: i,
                                    clearsQuery: s
                                })).search()
                            }, this._createURL = function () {
                                return u((0, a.clearRefinements)({
                                    helper: r,
                                    blackList: i,
                                    clearsQuery: s
                                }))
                            }, e({
                                refine: this._refine,
                                hasRefinements: l,
                                createURL: this._createURL,
                                instantSearchInstance: o,
                                widgetParams: n
                            }, !0)
                        },
                        render: function (t) {
                            var r = t.helper,
                                o = t.instantSearchInstance,
                                u = (0, a.getAttributesToClear)({
                                    helper: r,
                                    blackList: i
                                }),
                                c = s ? 0 !== u.length || "" !== r.state.query : 0 !== u.length;
                            e({
                                refine: this._refine,
                                hasRefinements: c,
                                createURL: this._createURL,
                                instantSearchInstance: o,
                                widgetParams: n
                            }, !1)
                        },
                        dispose: function () {
                            t()
                        }
                    }
                }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = r;
        var a = n(0),
            i = "Usage:\nvar customClearAll = connectClearAll(function render(params, isFirstRendering) {\n  // params = {\n  //   refine,\n  //   hasRefinements,\n  //   createURL,\n  //   instantSearchInstance,\n  //   widgetParams,\n  // }\n});\nsearch.addWidget(\n  customClearAll({\n    [ excludeAttributes = [] ],\n    [ clearsQuery = false ]\n  })\n);\nFull documentation available at https://community.algolia.com/instantsearch.js/v2/connectors/connectClearAll.html\n"
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            return (0, F.checkRendering)(e, M),
                function () {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = n.attributes,
                        a = void 0 === r ? [] : r,
                        i = n.onlyListedAttributes,
                        o = void 0 !== i && i,
                        l = n.clearsQuery,
                        f = void 0 !== l && l,
                        d = n.transformItems,
                        m = void 0 === d ? function (e) {
                            return e
                        } : d,
                        g = (0, y.default)(a) && (0, O.default)(a, function (e, t) {
                            return e && (0, _.default)(t) && (0, v.default)(t.name) && ((0, p.default)(t.label) || (0, v.default)(t.label)) && ((0, p.default)(t.template) || (0, v.default)(t.template) || (0, P.default)(t.template)) && ((0, p.default)(t.transformData) || (0, P.default)(t.transformData))
                        }, !0);
                    if (!(0, y.default)(a) || !g || !(0, h.default)(o)) throw new Error(M);
                    var b = (0, C.default)(a, function (e) {
                            return e.name
                        }),
                        w = o ? b : void 0,
                        R = (0, O.default)(a, function (e, t) {
                            return e[t.name] = t, e
                        }, {});
                    return {
                        init: function (t) {
                            var r = t.helper,
                                a = t.createURL,
                                i = t.instantSearchInstance;
                            this._clearRefinementsAndSearch = function () {
                                r.setState((0, F.clearRefinements)({
                                    helper: r,
                                    whiteList: w,
                                    clearsQuery: f
                                })).search()
                            }, this._createClearAllURL = function () {
                                return a((0, F.clearRefinements)({
                                    helper: r,
                                    whiteList: w,
                                    clearsQuery: f
                                }))
                            };
                            var l = m(s({}, r.state, b, o, f)),
                                p = function (e) {
                                    return a(u(r.state, e))
                                },
                                d = function (e) {
                                    return c(r, e)
                                };
                            e({
                                attributes: R,
                                clearAllClick: this._clearRefinementsAndSearch,
                                clearAllURL: this._createClearAllURL(),
                                refine: d,
                                createURL: p,
                                refinements: l,
                                instantSearchInstance: i,
                                widgetParams: n
                            }, !0)
                        },
                        render: function (t) {
                            var r = t.results,
                                a = t.helper,
                                i = t.state,
                                l = t.createURL,
                                p = t.instantSearchInstance,
                                d = m(s(r, i, b, o, f)),
                                h = function (e) {
                                    return l(u(a.state, e))
                                },
                                v = function (e) {
                                    return c(a, e)
                                };
                            e({
                                attributes: R,
                                clearAllClick: this._clearRefinementsAndSearch,
                                clearAllURL: this._createClearAllURL(),
                                refine: v,
                                createURL: h,
                                refinements: d,
                                instantSearchInstance: p,
                                widgetParams: n
                            }, !1)
                        },
                        dispose: function () {
                            t()
                        }
                    }
                }
        }

        function i(e, t, n) {
            var r = e.indexOf(n);
            return -1 !== r ? r : e.length + t.indexOf(n)
        }

        function o(e, t, n, r) {
            var a = i(e, t, n.attributeName),
                o = i(e, t, r.attributeName);
            return a === o ? n.name === r.name ? 0 : n.name < r.name ? -1 : 1 : a < o ? -1 : 1
        }

        function s(e, t, n, r, a) {
            var i = (0, F.getRefinements)(e, t, a),
                s = (0, O.default)(i, function (e, t) {
                    return -1 === n.indexOf(t.attributeName) && e.indexOf(-1 === t.attributeName) && e.push(t.attributeName), e
                }, []);
            return i = i.sort(o.bind(null, n, s)), r && !(0, x.default)(n) && (i = (0, E.default)(i, function (e) {
                return -1 !== n.indexOf(e.attributeName)
            })), i.map(l)
        }

        function u(e, t) {
            switch (t.type) {
                case "facet":
                    return e.removeFacetRefinement(t.attributeName, t.name);
                case "disjunctive":
                    return e.removeDisjunctiveFacetRefinement(t.attributeName, t.name);
                case "hierarchical":
                    return e.clearRefinements(t.attributeName);
                case "exclude":
                    return e.removeExcludeRefinement(t.attributeName, t.name);
                case "numeric":
                    return e.removeNumericRefinement(t.attributeName, t.operator, t.numericValue);
                case "tag":
                    return e.removeTagRefinement(t.name);
                case "query":
                    return e.setQueryParameter("query", "");
                default:
                    throw new Error("clearRefinement: type " + t.type + " is not handled")
            }
        }

        function c(e, t) {
            e.setState(u(e.state, t)).search()
        }

        function l(e) {
            if (e.computedLabel = e.name, e.hasOwnProperty("operator") && "string" === typeof e.operator) {
                var t = e.operator;
                ">=" === e.operator && (t = "\u2265"), "<=" === e.operator && (t = "\u2264"), e.computedLabel = t + " " + e.name
            }
            return e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = a;
        var f = n(67),
            p = r(f),
            d = n(190),
            h = r(d),
            m = n(26),
            v = r(m),
            g = n(4),
            y = r(g),
            b = n(23),
            _ = r(b),
            w = n(17),
            P = r(w),
            R = n(33),
            x = r(R),
            S = n(11),
            C = r(S),
            j = n(19),
            O = r(j),
            N = n(46),
            E = r(N),
            F = n(0),
            M = "Usage:\nvar customCurrentRefinedValues = connectCurrentRefinedValues(function renderFn(params, isFirstRendering) {\n  // params = {\n  //   attributes,\n  //   clearAllClick,\n  //   clearAllPosition,\n  //   clearAllURL,\n  //   refine,\n  //   createURL,\n  //   refinements,\n  //   instantSearchInstance,\n  //   widgetParams,\n  // }\n});\nsearch.addWidget(\n  customCurrentRefinedValues({\n    [ attributes = [] ],\n    [ onlyListedAttributes = false ],\n    [ clearsQuery = false ],\n    [ transformItems ],\n  })\n);\nFull documentation available at https://community.algolia.com/instantsearch.js/v2/connectors/connectCurrentRefinedValues.html\n"
    }, function (e, t, n) {
        function r(e) {
            return !0 === e || !1 === e || i(e) && a(e) == o
        }
        var a = n(15),
            i = n(6),
            o = "[object Boolean]";
        e.exports = r
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function i(e, t) {
            var n = {};
            for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
            return n
        }

        function o(e, t) {
            return (0, d.checkRendering)(e, h),
                function () {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = n.attributes,
                        o = n.separator,
                        c = void 0 === o ? " > " : o,
                        f = n.rootPath,
                        d = void 0 === f ? null : f,
                        m = n.showParentLevel,
                        v = void 0 === m || m,
                        g = n.limit,
                        y = void 0 === g ? 10 : g,
                        b = n.sortBy,
                        _ = void 0 === b ? ["name:asc"] : b,
                        w = n.transformItems,
                        P = void 0 === w ? function (e) {
                            return e
                        } : w;
                    if (!r || !r.length) throw new Error(h);
                    var R = u(r, 1),
                        x = R[0];
                    return {
                        getConfiguration: function (e) {
                            if (e.hierarchicalFacets) {
                                var t = (0, l.default)(e.hierarchicalFacets, function (e) {
                                    return e.name === x
                                });
                                if (t && (!(0, p.default)(t.attributes, r) || t.separator !== c)) return console.warn("using Breadcrumb & HierarchicalMenu on the same facet with different options"), {}
                            }
                            return {
                                hierarchicalFacets: [{
                                    name: x,
                                    attributes: r,
                                    separator: c,
                                    rootPath: d,
                                    showParentLevel: v
                                }],
                                maxValuesPerFacet: void 0 !== e.maxValuesPerFacet ? Math.max(e.maxValuesPerFacet, y) : y
                            }
                        },
                        init: function (t) {
                            function r(e) {
                                return i(a.state.toggleRefinement(x, e))
                            }
                            var a = t.helper,
                                i = t.createURL,
                                o = t.instantSearchInstance;
                            this._refine = function (e) {
                                a.toggleRefinement(x, e).search()
                            }, e({
                                createURL: r,
                                items: [],
                                refine: this._refine,
                                instantSearchInstance: o,
                                widgetParams: n
                            }, !0)
                        },
                        _prepareFacetValues: function (e, t) {
                            var n = this;
                            return e.slice(0, y).map(function (e) {
                                var r = e.name,
                                    a = e.path,
                                    o = i(e, ["name", "path"]);
                                return Array.isArray(o.data) && (o.data = n._prepareFacetValues(o.data, t)), s({}, o, {
                                    label: r,
                                    value: a
                                })
                            })
                        },
                        render: function (t) {
                            function r(e) {
                                return o(i.toggleRefinement(x, e))
                            }
                            var a = t.results,
                                i = t.state,
                                o = t.createURL,
                                s = t.instantSearchInstance,
                                u = P(this._prepareFacetValues(a.getFacetValues(x, {
                                    sortBy: _
                                }).data || [], i));
                            e({
                                createURL: r,
                                items: u,
                                refine: this._refine,
                                instantSearchInstance: s,
                                widgetParams: n
                            }, !1)
                        },
                        dispose: function (e) {
                            var n = e.state;
                            t();
                            var r = n;
                            return n.isHierarchicalFacetRefined(x) && (r = n.removeHierarchicalFacetRefinement(x)), r = r.removeHierarchicalFacet(x), r.maxValuesPerFacet === y && r.setQueryParameters("maxValuesPerFacet", void 0), r
                        },
                        getWidgetState: function (e, t) {
                            var n = t.searchParameters,
                                r = n.getHierarchicalFacetBreadcrumb(x);
                            return r && 0 !== r.length ? e.hierarchicalMenu && (0, p.default)(r, e.hierarchicalMenu[x]) ? e : s({}, e, {
                                hierarchicalMenu: s({}, e.hierarchicalMenu, a({}, x, r))
                            }) : e
                        },
                        getWidgetSearchParameters: function (e, t) {
                            var n = t.uiState;
                            return n.hierarchicalMenu && n.hierarchicalMenu[x] ? e.clearRefinements(x).toggleRefinement(x, n.hierarchicalMenu[x].join(c)) : e
                        }
                    }
                }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            u = function () {
                function e(e, t) {
                    var n = [],
                        r = !0,
                        a = !1,
                        i = void 0;
                    try {
                        for (var o, s = e[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, i = e
                    } finally {
                        try {
                            !r && s.return && s.return()
                        } finally {
                            if (a) throw i
                        }
                    }
                    return n
                }
                return function (t, n) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t)) return e(t, n);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }();
        t.default = o;
        var c = n(9),
            l = r(c),
            f = n(8),
            p = r(f),
            d = n(0),
            h = "Usage:\nvar customHierarchicalMenu = connectHierarchicalMenu(function renderFn(params, isFirstRendering) {\n  // params = {\n  //   createURL,\n  //   items,\n  //   refine,\n  //   instantSearchInstance,\n  //   widgetParams,\n  // }\n});\nsearch.addWidget(\n  customHierarchicalMenu({\n    attributes,\n    [ separator = ' > ' ],\n    [ rootPath = null ],\n    [ showParentLevel = true ],\n    [ limit = 10 ],\n    [ sortBy = ['name:asc'] ],\n    [ transformItems ],\n  })\n);\nFull documentation available at https://community.algolia.com/instantsearch.js/v2/connectors/connectHierarchicalMenu.html\n"
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            return (0, o.checkRendering)(e, s),
                function () {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = n.transformItems,
                        o = void 0 === r ? function (e) {
                            return e
                        } : r;
                    return {
                        getConfiguration: function () {
                            return n.escapeHits ? a.tagConfig : void 0
                        },
                        init: function (t) {
                            var r = t.instantSearchInstance;
                            e({
                                hits: [],
                                results: void 0,
                                instantSearchInstance: r,
                                widgetParams: n
                            }, !0)
                        },
                        render: function (t) {
                            var r = t.results,
                                a = t.instantSearchInstance;
                            r.hits = o(r.hits), n.escapeHits && r.hits && r.hits.length > 0 && (r.hits = (0, i.default)(r.hits)), e({
                                hits: r.hits,
                                results: r,
                                instantSearchInstance: a,
                                widgetParams: n
                            }, !1)
                        },
                        dispose: function () {
                            t()
                        }
                    }
                }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = r;
        var a = n(78),
            i = function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(a),
            o = n(0),
            s = "Usage:\nvar customHits = connectHits(function render(params, isFirstRendering) {\n  // params = {\n  //   hits,\n  //   results,\n  //   instantSearchInstance,\n  //   widgetParams,\n  // }\n});\nsearch.addWidget(\n  customHits({\n    [ escapeHits = false ],\n    [ transformItems ]\n  })\n);\nFull documentation available at https://community.algolia.com/instantsearch.js/v2/connectors/connectHits.html\n"
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }

        function i(e, t) {
            return (0, f.checkRendering)(e, p),
                function () {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = n.items,
                        i = n.transformItems,
                        s = void 0 === i ? function (e) {
                            return e
                        } : i,
                        c = r;
                    if (!c) throw new Error(p);
                    var f = c.filter(function (e) {
                        return e.default
                    });
                    if (f.length > 1) throw new Error("[Error][hitsPerPageSelector] more than one default value is specified in `items[]`\nThe first one will be picked, you should probably set only one default value");
                    var d = (0, l.default)(r, function (e) {
                        return !0 === e.default
                    });
                    return {
                        getConfiguration: function () {
                            return f.length > 0 ? {
                                hitsPerPage: f[0].value
                            } : {}
                        },
                        init: function (t) {
                            var r = t.helper,
                                i = t.state,
                                o = t.instantSearchInstance;
                            (0, u.default)(c, function (e) {
                                return Number(i.hitsPerPage) === Number(e.value)
                            }) || (void 0 === i.hitsPerPage ? window.console && window.console.warn("[Warning][hitsPerPageSelector] hitsPerPage not defined.\n  You should probably set the value `hitsPerPage`\n  using the searchParameters attribute of the instantsearch constructor.") : window.console && window.console.warn("[Warning][hitsPerPageSelector] No item in `items`\n  with `value: hitsPerPage` (hitsPerPage: " + i.hitsPerPage + ")"), c = [{
                                value: "",
                                label: ""
                            }].concat(a(c))), this.setHitsPerPage = function (e) {
                                return e || 0 === e ? r.setQueryParameter("hitsPerPage", e).search() : r.setQueryParameter("hitsPerPage", void 0).search()
                            }, e({
                                items: s(this._normalizeItems(i)),
                                refine: this.setHitsPerPage,
                                hasNoResults: !0,
                                widgetParams: n,
                                instantSearchInstance: o
                            }, !0)
                        },
                        render: function (t) {
                            var r = t.state,
                                a = t.results,
                                i = t.instantSearchInstance,
                                o = 0 === a.nbHits;
                            e({
                                items: s(this._normalizeItems(r)),
                                refine: this.setHitsPerPage,
                                hasNoResults: o,
                                widgetParams: n,
                                instantSearchInstance: i
                            }, !1)
                        },
                        _normalizeItems: function (e) {
                            var t = e.hitsPerPage;
                            return c.map(function (e) {
                                return o({}, e, {
                                    isRefined: Number(e.value) === Number(t)
                                })
                            })
                        },
                        dispose: function () {
                            t()
                        },
                        getWidgetState: function (e, t) {
                            var n = t.searchParameters,
                                r = n.hitsPerPage;
                            return d && r === d.value || void 0 === r || e.hitsPerPage === r ? e : o({}, e, {
                                hitsPerPage: r
                            })
                        },
                        getWidgetSearchParameters: function (e, t) {
                            var n = t.uiState;
                            return n.hitsPerPage ? e.setQueryParameter("hitsPerPage", n.hitsPerPage) : d ? e.setQueryParameter("hitsPerPage", d.value) : e.setQueryParameter("hitsPerPage", void 0)
                        }
                    }
                }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
        t.default = i;
        var s = n(395),
            u = r(s),
            c = n(9),
            l = r(c),
            f = n(0),
            p = "Usage:\nvar customHitsPerPage = connectHitsPerPage(function render(params, isFirstRendering) {\n  // params = {\n  //   items,\n  //   refine,\n  //   hasNoResults,\n  //   instantSearchInstance,\n  //   widgetParams,\n  // }\n});\nsearch.addWidget(\n  customHitsPerPage({\n    items: [\n      {value: 5, label: '5 results per page', default: true},\n      {value: 10, label: '10 results per page'},\n      {value: 42, label: '42 results per page'},\n    ],\n    [ transformItems ]\n  })\n);\nFull documentation available at https://community.algolia.com/instantsearch.js/v2/connectors/connectHitsPerPage.html\n"
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }

        function a(e, t) {
            return (0, s.checkRendering)(e, u),
                function () {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        a = n.transformItems,
                        s = void 0 === a ? function (e) {
                            return e
                        } : a,
                        u = [],
                        c = -1,
                        l = function (e) {
                            return function () {
                                return e.nextPage().search()
                            }
                        };
                    return {
                        getConfiguration: function () {
                            return n.escapeHits ? i.tagConfig : void 0
                        },
                        init: function (t) {
                            var r = t.instantSearchInstance,
                                a = t.helper;
                            this.showMore = l(a), e({
                                hits: u,
                                results: void 0,
                                showMore: this.showMore,
                                isLastPage: !0,
                                instantSearchInstance: r,
                                widgetParams: n
                            }, !0)
                        },
                        render: function (t) {
                            var a = t.results,
                                i = t.state,
                                l = t.instantSearchInstance;
                            0 === i.page && (u = [], c = -1), a.hits = s(a.hits), n.escapeHits && a.hits && a.hits.length > 0 && (a.hits = (0, o.default)(a.hits)), c < i.page && (u = [].concat(r(u), r(a.hits)), c = i.page);
                            var f = a.nbPages <= a.page + 1;
                            e({
                                hits: u,
                                results: a,
                                showMore: this.showMore,
                                isLastPage: f,
                                instantSearchInstance: l,
                                widgetParams: n
                            }, !1)
                        },
                        dispose: function () {
                            t()
                        }
                    }
                }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = a;
        var i = n(78),
            o = function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(i),
            s = n(0),
            u = "Usage:\nvar customInfiniteHits = connectInfiniteHits(function render(params, isFirstRendering) {\n  // params = {\n  //   hits,\n  //   results,\n  //   showMore,\n  //   isLastPage,\n  //   instantSearchInstance,\n  //   widgetParams,\n  // }\n});\nsearch.addWidget(\n  customInfiniteHits({\n    [ escapeHits: true ],\n    [ transformItems ]\n  })\n);\nFull documentation available at https://community.algolia.com/instantsearch.js/v2/connectors/connectInfiniteHits.html\n"
    }, function (e, t, n) {
        "use strict";

        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function a(e, t) {
            return (0, p.checkRendering)(e, d),
                function () {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        a = n.attributeName,
                        s = n.options,
                        l = n.transformItems,
                        p = void 0 === l ? function (e) {
                            return e
                        } : l;
                    if (!a || !s) throw new Error(d);
                    return {
                        init: function (t) {
                            var r = t.helper,
                                u = t.createURL,
                                c = t.instantSearchInstance;
                            this._refine = function (e) {
                                var t = o(r.state, a, s, e);
                                r.setState(t).search()
                            }, this._createURL = function (e) {
                                return function (t) {
                                    return u(o(e, a, s, t))
                                }
                            }, this._prepareItems = function (e) {
                                return s.map(function (t) {
                                    var n = t.start,
                                        r = t.end;
                                    return {
                                        label: t.name,
                                        value: window.encodeURI(JSON.stringify({
                                            start: n,
                                            end: r
                                        })),
                                        isRefined: i(e, a, {
                                            start: n,
                                            end: r
                                        })
                                    }
                                })
                            }, e({
                                createURL: this._createURL(r.state),
                                items: p(this._prepareItems(r.state)),
                                hasNoResults: !0,
                                refine: this._refine,
                                instantSearchInstance: c,
                                widgetParams: n
                            }, !0)
                        },
                        render: function (t) {
                            var r = t.results,
                                a = t.state,
                                i = t.instantSearchInstance;
                            e({
                                createURL: this._createURL(a),
                                items: p(this._prepareItems(a)),
                                hasNoResults: 0 === r.nbHits,
                                refine: this._refine,
                                instantSearchInstance: i,
                                widgetParams: n
                            }, !1)
                        },
                        dispose: function (e) {
                            var n = e.state;
                            return t(), n.clearRefinements(a)
                        },
                        getWidgetState: function (e, t) {
                            var n = t.searchParameters,
                                i = n.getNumericRefinements(a),
                                o = i["="] && i["="][0];
                            if (o || 0 === o) return c({}, e, {
                                numericRefinementList: c({}, e.numericRefinementList, r({}, a, "" + i["="]))
                            });
                            var s = i[">="] && i[">="][0] || "",
                                u = i["<="] && i["<="][0] || "";
                            return "" !== s || "" !== u ? e.numericRefinementList && e.numericRefinementList[a] === s + ":" + u ? e : c({}, e, {
                                numericRefinementList: c({}, e.numericRefinementList, r({}, a, s + ":" + u))
                            }) : e
                        },
                        getWidgetSearchParameters: function (e, t) {
                            var n = t.uiState,
                                r = e.clearRefinements(a),
                                i = n.numericRefinementList && n.numericRefinementList[a];
                            if (!i) return r;
                            var o = -1 === i.indexOf(":") && i;
                            if (o) return r.addNumericRefinement(a, "=", o);
                            var s = i.split(":").map(parseFloat),
                                c = u(s, 2),
                                l = c[0],
                                p = c[1];
                            return (0, f.default)(l) && (r = r.addNumericRefinement(a, ">=", l)), (0, f.default)(p) && (r = r.addNumericRefinement(a, "<=", p)), r
                        }
                    }
                }
        }

        function i(e, t, n) {
            var r = e.getNumericRefinements(t);
            return void 0 !== n.start && void 0 !== n.end && n.start === n.end ? s(r, "=", n.start) : void 0 !== n.start ? s(r, ">=", n.start) : void 0 !== n.end ? s(r, "<=", n.end) : void 0 === n.start && void 0 === n.end ? 0 === Object.keys(r).length : void 0
        }

        function o(e, t, n, r) {
            var a = e,
                o = JSON.parse(window.decodeURI(r)),
                u = a.getNumericRefinements(t);
            if (void 0 === o.start && void 0 === o.end) return a.clearRefinements(t);
            if (i(a, t, o) || (a = a.clearRefinements(t)), void 0 !== o.start && void 0 !== o.end) {
                if (o.start > o.end) throw new Error("option.start should be > to option.end");
                if (o.start === o.end) return a = s(u, "=", o.start) ? a.removeNumericRefinement(t, "=", o.start) : a.addNumericRefinement(t, "=", o.start)
            }
            return void 0 !== o.start && (a = s(u, ">=", o.start) ? a.removeNumericRefinement(t, ">=", o.start) : a.addNumericRefinement(t, ">=", o.start)), void 0 !== o.end && (a = s(u, "<=", o.end) ? a.removeNumericRefinement(t, "<=", o.end) : a.addNumericRefinement(t, "<=", o.end)), a.page = 0, a
        }

        function s(e, t, n) {
            return void 0 !== e[t] && e[t].includes(n)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = function () {
                function e(e, t) {
                    var n = [],
                        r = !0,
                        a = !1,
                        i = void 0;
                    try {
                        for (var o, s = e[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, i = e
                    } finally {
                        try {
                            !r && s.return && s.return()
                        } finally {
                            if (a) throw i
                        }
                    }
                    return n
                }
                return function (t, n) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t)) return e(t, n);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            c = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            };
        t.default = a;
        var l = n(111),
            f = function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(l),
            p = n(0),
            d = "Usage:\nvar customNumericRefinementList = connectNumericRefinementList(function renderFn(params, isFirstRendering) {\n  // params = {\n  //   createURL,\n  //   items,\n  //   hasNoResults,\n  //   refine,\n  //   instantSearchInstance,\n  //   widgetParams,\n  //  }\n});\n\nsearch.addWidget(\n  customNumericRefinementList({\n    attributeName,\n    options,\n    [ transformItems ],\n  })\n);\n\nFull documentation available at https://community.algolia.com/instantsearch.js/v2/connectors/connectNumericRefinementList.html\n"
    }, function (e, t, n) {
        "use strict";

        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function a(e, t) {
            return (0, o.checkRendering)(e, s),
                function () {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        a = n.attributeName,
                        o = n.options,
                        u = n.operator,
                        c = void 0 === u ? "=" : u,
                        l = n.transformItems,
                        f = void 0 === l ? function (e) {
                            return e
                        } : l;
                    if (!a || !o) throw new Error(s);
                    return {
                        getConfiguration: function (e, t) {
                            var n = this._getRefinedValue(t);
                            return n ? {
                                numericRefinements: r({}, a, r({}, c, [n]))
                            } : {}
                        },
                        init: function (t) {
                            var r = t.helper,
                                i = t.instantSearchInstance;
                            this._refine = function (e) {
                                r.clearRefinements(a), void 0 !== e && "undefined" !== e && r.addNumericRefinement(a, c, e), r.search()
                            }, e({
                                currentRefinement: this._getRefinedValue(r.state),
                                options: f(o),
                                refine: this._refine,
                                hasNoResults: !0,
                                instantSearchInstance: i,
                                widgetParams: n
                            }, !0)
                        },
                        render: function (t) {
                            var r = t.helper,
                                a = t.results,
                                i = t.instantSearchInstance;
                            e({
                                currentRefinement: this._getRefinedValue(r.state),
                                options: f(o),
                                refine: this._refine,
                                hasNoResults: 0 === a.nbHits,
                                instantSearchInstance: i,
                                widgetParams: n
                            }, !1)
                        },
                        dispose: function (e) {
                            var n = e.state;
                            return t(), n.removeNumericRefinement(a)
                        },
                        getWidgetState: function (e, t) {
                            var n = t.searchParameters,
                                s = this._getRefinedValue(n);
                            return e.numericSelector && s === e.numericSelector[a] || s === o[0].value ? e : s || 0 === s ? i({}, e, {
                                numericSelector: i({}, e.numericSelector, r({}, a, s))
                            }) : e
                        },
                        getWidgetSearchParameters: function (e, t) {
                            var n = t.uiState,
                                r = n.numericSelector && n.numericSelector[a],
                                i = this._getRefinedValue(e);
                            return r ? r === i ? e : e.clearRefinements(a).addNumericRefinement(a, c, r) : "number" === typeof (o[0] && o[0].value) ? e.clearRefinements(a).addNumericRefinement(a, c, o[0].value) : e
                        },
                        _getRefinedValue: function (e) {
                            return e && e.numericRefinements && void 0 !== e.numericRefinements[a] && void 0 !== e.numericRefinements[a][c] && void 0 !== e.numericRefinements[a][c][0] ? e.numericRefinements[a][c][0] : o[0].value
                        }
                    }
                }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
        t.default = a;
        var o = n(0),
            s = "Usage:\nvar customNumericSelector = connectNumericSelector(function renderFn(params, isFirstRendering) {\n  // params = {\n  //   currentRefinement,\n  //   options,\n  //   refine,\n  //   hasNoResults,\n  //   instantSearchInstance,\n  //   widgetParams,\n  // }\n});\nsearch.addWidget(\n  customNumericSelector({\n    attributeName,\n    options,\n    [ operator = '=' ],\n    [ transformItems ]\n  })\n);\nFull documentation available at https://community.algolia.com/instantsearch.js/v2/connectors/connectNumericSelector.html\n"
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            return (0, i.checkRendering)(e, u),
                function () {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = n.maxPages,
                        i = n.padding,
                        o = void 0 === i ? 3 : i,
                        u = new s.default({
                            currentPage: 0,
                            total: 0,
                            padding: o
                        });
                    return {
                        init: function (t) {
                            var r = t.helper,
                                a = t.createURL,
                                i = t.instantSearchInstance;
                            this.refine = function (e) {
                                r.setPage(e), r.search()
                            }, this.createURL = function (e) {
                                return function (t) {
                                    return a(e.setPage(t))
                                }
                            }, e({
                                createURL: this.createURL(r.state),
                                currentRefinement: r.getPage() || 0,
                                nbHits: 0,
                                nbPages: 0,
                                pages: [],
                                isFirstPage: !0,
                                isLastPage: !0,
                                refine: this.refine,
                                widgetParams: n,
                                instantSearchInstance: i
                            }, !0)
                        },
                        getMaxPage: function (e) {
                            var t = e.nbPages;
                            return void 0 !== r ? Math.min(r, t) : t
                        },
                        render: function (t) {
                            var r = t.results,
                                a = t.state,
                                i = t.instantSearchInstance,
                                o = this.getMaxPage(r);
                            u.currentPage = a.page, u.total = o, e({
                                createURL: this.createURL(a),
                                currentRefinement: a.page,
                                refine: this.refine,
                                nbHits: r.nbHits,
                                nbPages: o,
                                pages: u.pages(),
                                isFirstPage: u.isFirstPage(),
                                isLastPage: u.isLastPage(),
                                widgetParams: n,
                                instantSearchInstance: i
                            }, !1)
                        },
                        dispose: function () {
                            t()
                        },
                        getWidgetState: function (e, t) {
                            var n = t.searchParameters,
                                r = n.page;
                            return 0 === r || r + 1 === e.page ? e : a({}, e, {
                                page: r + 1
                            })
                        },
                        getWidgetSearchParameters: function (e, t) {
                            var n = t.uiState;
                            return n.page ? e.setQueryParameter("page", n.page - 1) : e.setQueryParameter("page", 0)
                        }
                    }
                }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
        t.default = r;
        var i = n(0),
            o = n(397),
            s = function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(o),
            u = "Usage:\nvar customPagination = connectPagination(function render(params, isFirstRendering) {\n  // params = {\n  //   createURL,\n  //   currentRefinement,\n  //   nbHits,\n  //   nbPages,\n  //   pages,\n  //   refine,\n  //   widgetParams,\n  // }\n});\nsearch.addWidget(\n  customPagination({\n    [ maxPages ]\n    [ padding ]\n  })\n);\nFull documentation available at https://community.algolia.com/instantsearch.js/v2/connectors/connectPagination.html\n"
    }, function (e, t, n) {
        var r = n(398),
            a = r();
        e.exports = a
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function i(e, t) {
            return (0, u.checkRendering)(e, d),
                function () {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = n.attributeName;
                    if (!r) throw new Error(d);
                    return {
                        getConfiguration: function () {
                            return {
                                facets: [r]
                            }
                        },
                        _generateRanges: function (e) {
                            var t = e.getFacetStats(r);
                            return (0, l.default)(t)
                        },
                        _extractRefinedRange: function (e) {
                            var t = e.getRefinements(r),
                                n = void 0,
                                a = void 0;
                            return 0 === t.length ? [] : (t.forEach(function (e) {
                                -1 !== e.operator.indexOf(">") ? n = Math.floor(e.value[0]) : -1 !== e.operator.indexOf("<") && (a = Math.ceil(e.value[0]))
                            }), [{
                                from: n,
                                to: a,
                                isRefined: !0
                            }])
                        },
                        _refine: function (e, t) {
                            var n = t.from,
                                a = t.to,
                                i = this._extractRefinedRange(e);
                            e.clearRefinements(r), 0 !== i.length && i[0].from === n && i[0].to === a || ("undefined" !== typeof n && e.addNumericRefinement(r, ">=", Math.floor(n)), "undefined" !== typeof a && e.addNumericRefinement(r, "<=", Math.ceil(a))), e.search()
                        },
                        init: function (t) {
                            var r = this,
                                a = t.helper,
                                i = t.instantSearchInstance;
                            this.refine = function (e) {
                                r._refine(a, e)
                            }, e({
                                instantSearchInstance: i,
                                items: [],
                                refine: this.refine,
                                widgetParams: n
                            }, !0)
                        },
                        render: function (t) {
                            var a = t.results,
                                i = t.helper,
                                o = t.state,
                                s = t.createURL,
                                u = t.instantSearchInstance,
                                c = void 0;
                            a && a.hits && a.hits.length > 0 ? (c = this._extractRefinedRange(i), 0 === c.length && (c = this._generateRanges(a))) : c = [], c.map(function (e) {
                                var t = o.clearRefinements(r);
                                return e.isRefined || (void 0 !== e.from && (t = t.addNumericRefinement(r, ">=", Math.floor(e.from))), void 0 !== e.to && (t = t.addNumericRefinement(r, "<=", Math.ceil(e.to)))), e.url = s(t), e
                            }), e({
                                items: c,
                                refine: this.refine,
                                widgetParams: n,
                                instantSearchInstance: u
                            }, !1)
                        },
                        dispose: function (e) {
                            var n = e.state;
                            return t(), n.removeFacetRefinement(r).removeFacet(r)
                        },
                        getWidgetState: function (e, t) {
                            var n = t.searchParameters,
                                i = n.getNumericRefinements(r),
                                o = i[">="],
                                u = void 0 === o ? "" : o,
                                c = i["<="],
                                l = void 0 === c ? "" : c;
                            return "" === u && "" === l || e && e.priceRanges && e.priceRanges[r] === u + ":" + l ? e : s({}, e, {
                                priceRanges: s({}, e.priceRanges, a({}, r, u + ":" + l))
                            })
                        },
                        getWidgetSearchParameters: function (e, t) {
                            var n = t.uiState,
                                a = n && n.priceRanges && n.priceRanges[r];
                            if (!a || -1 === a.indexOf(":")) return e;
                            var i = e.getNumericRefinements(r),
                                s = i[">="],
                                u = void 0 === s ? [NaN] : s,
                                c = i["<="],
                                l = void 0 === c ? [NaN] : c,
                                f = e.clearRefinements(r),
                                d = a.split(":").map(parseFloat),
                                h = o(d, 2),
                                m = h[0],
                                v = h[1];
                            return u.includes(m) && l.includes(v) ? e : ((0, p.default)(m) && (f = f.addNumericRefinement(r, ">=", m)), (0, p.default)(v) && (f = f.addNumericRefinement(r, "<=", v)), f)
                        }
                    }
                }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function () {
                function e(e, t) {
                    var n = [],
                        r = !0,
                        a = !1,
                        i = void 0;
                    try {
                        for (var o, s = e[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, i = e
                    } finally {
                        try {
                            !r && s.return && s.return()
                        } finally {
                            if (a) throw i
                        }
                    }
                    return n
                }
                return function (t, n) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t)) return e(t, n);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            s = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            };
        t.default = i;
        var u = n(0),
            c = n(400),
            l = r(c),
            f = n(111),
            p = r(f),
            d = "Usage:\nvar customPriceRanges = connectPriceRanges(function render(params, isFirstRendering) {\n  // params = {\n  //   items,\n  //   refine,\n  //   instantSearchInstance,\n  //   widgetParams,\n  // }\n});\nsearch.addWidget(\n  customPriceRanges({\n    attributeName,\n  })\n);\nFull documentation available at https://community.algolia.com/instantsearch.js/v2/connectors/connectPriceRanges.html\n"
    }, function (e, t, n) {
        "use strict";

        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function a(e, t) {
            var n = {};
            for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
            return n
        }

        function i(e, t) {
            return (0, s.checkRendering)(e, f),
                function () {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        i = n.attributeName,
                        s = n.operator,
                        c = void 0 === s ? "or" : s,
                        d = n.limit,
                        h = void 0 === d ? 10 : d,
                        m = n.showMoreLimit,
                        v = n.sortBy,
                        g = void 0 === v ? ["isRefined", "count:desc", "name:asc"] : v,
                        y = n.escapeFacetValues,
                        b = void 0 !== y && y,
                        _ = n.transformItems,
                        w = void 0 === _ ? function (e) {
                            return e
                        } : _;
                    p({
                        message: f,
                        attributeName: i,
                        operator: c,
                        showMoreLimit: m,
                        limit: h
                    });
                    var P = function (e) {
                            var t = e.name,
                                n = a(e, ["name"]);
                            return o({}, n, {
                                label: t,
                                value: t,
                                highlighted: t
                            })
                        },
                        R = function (t) {
                            var r = t.items,
                                a = t.state,
                                o = t.createURL,
                                s = t.helperSpecializedSearchFacetValues,
                                u = t.refine,
                                c = t.isFromSearch,
                                l = t.isFirstSearch,
                                f = t.isShowingMore,
                                p = t.toggleShowMore,
                                d = t.hasExhaustiveItems,
                                h = t.instantSearchInstance,
                                v = function (e) {
                                    return o(a.toggleRefinement(i, e))
                                },
                                g = s && s(a, o, s, u, h);
                            e({
                                createURL: v,
                                items: r,
                                refine: u,
                                searchForItems: g,
                                instantSearchInstance: h,
                                isFromSearch: c,
                                canRefine: c || r.length > 0,
                                widgetParams: n,
                                isShowingMore: f,
                                canToggleShowMore: !!m && (f || !d),
                                toggleShowMore: p,
                                hasExhaustiveItems: d
                            }, l)
                        },
                        x = void 0,
                        S = void 0,
                        C = void 0,
                        j = function (e) {
                            return function (t, n, r, s, c) {
                                return function (l) {
                                    if ("" === l && x) R({
                                        items: x,
                                        state: t,
                                        createURL: n,
                                        helperSpecializedSearchFacetValues: r,
                                        refine: s,
                                        isFromSearch: !1,
                                        isFirstSearch: !1,
                                        instantSearchInstance: c,
                                        hasExhaustiveItems: !1
                                    });
                                    else {
                                        var f = {
                                            highlightPreTag: b ? u.tagConfig.highlightPreTag : void 0,
                                            highlightPostTag: b ? u.tagConfig.highlightPostTag : void 0
                                        };
                                        e.searchForFacetValues(i, l, h, f).then(function (e) {
                                            var i = b ? (0, u.escapeFacets)(e.facetHits) : e.facetHits,
                                                l = w(i.map(function (e) {
                                                    var t = e.value,
                                                        n = a(e, ["value"]);
                                                    return o({}, n, {
                                                        value: t,
                                                        label: t
                                                    })
                                                }));
                                            R({
                                                items: l,
                                                state: t,
                                                createURL: n,
                                                helperSpecializedSearchFacetValues: r,
                                                refine: s,
                                                isFromSearch: !0,
                                                isFirstSearch: !1,
                                                instantSearchInstance: c,
                                                hasExhaustiveItems: !1
                                            })
                                        })
                                    }
                                }
                            }
                        };
                    return {
                        isShowingMore: !1,
                        toggleShowMore: function () {},
                        cachedToggleShowMore: function () {
                            this.toggleShowMore()
                        },
                        createToggleShowMore: function (e) {
                            var t = this;
                            return function () {
                                t.isShowingMore = !t.isShowingMore, t.render(e)
                            }
                        },
                        getLimit: function () {
                            return this.isShowingMore ? m : h
                        },
                        getConfiguration: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = r({}, "and" === c ? "facets" : "disjunctiveFacets", [i]);
                            if (void 0 !== h) {
                                var n = e.maxValuesPerFacet || 0;
                                t.maxValuesPerFacet = void 0 === m ? Math.max(n, h) : Math.max(n, h, m)
                            }
                            return t
                        },
                        init: function (e) {
                            var t = e.helper,
                                n = e.createURL,
                                r = e.instantSearchInstance;
                            this.cachedToggleShowMore = this.cachedToggleShowMore.bind(this), C = function (e) {
                                return t.toggleRefinement(i, e).search()
                            }, S = j(t), R({
                                items: [],
                                state: t.state,
                                createURL: n,
                                helperSpecializedSearchFacetValues: S,
                                refine: C,
                                isFromSearch: !1,
                                isFirstSearch: !0,
                                instantSearchInstance: r,
                                isShowingMore: this.isShowingMore,
                                toggleShowMore: this.cachedToggleShowMore,
                                hasExhaustiveItems: !0
                            })
                        },
                        render: function (e) {
                            var t = e.results,
                                n = e.state,
                                r = e.createURL,
                                a = e.instantSearchInstance,
                                o = t.getFacetValues(i, {
                                    sortBy: g
                                }),
                                s = w(o.slice(0, this.getLimit()).map(P)),
                                u = n.getQueryParameter("maxValuesPerFacet"),
                                c = this.getLimit(),
                                l = u > c ? o.length <= c : o.length < c;
                            x = s, this.toggleShowMore = this.createToggleShowMore(e), R({
                                items: s,
                                state: n,
                                createURL: r,
                                helperSpecializedSearchFacetValues: S,
                                refine: C,
                                isFromSearch: !1,
                                isFirstSearch: !1,
                                instantSearchInstance: a,
                                isShowingMore: this.isShowingMore,
                                toggleShowMore: this.cachedToggleShowMore,
                                hasExhaustiveItems: l
                            })
                        },
                        dispose: function (e) {
                            var n = e.state;
                            return t(), "and" === c ? n.removeFacetRefinement(i).removeFacet(i) : n.removeDisjunctiveFacetRefinement(i).removeDisjunctiveFacet(i)
                        },
                        getWidgetState: function (e, t) {
                            var n = t.searchParameters,
                                a = "or" === c ? n.getDisjunctiveRefinements(i) : n.getConjunctiveRefinements(i);
                            return 0 === a.length || e.refinementList && (0, l.default)(a, e.refinementList[i]) ? e : o({}, e, {
                                refinementList: o({}, e.refinementList, r({}, i, a))
                            })
                        },
                        getWidgetSearchParameters: function (e, t) {
                            var n = t.uiState,
                                r = n.refinementList && n.refinementList[i];
                            return void 0 === r ? e : r.reduce(function (e, t) {
                                return "or" === c ? e.addDisjunctiveFacetRefinement(i, t) : e.addFacetRefinement(i, t)
                            }, e.clearRefinements(i))
                        }
                    }
                }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.checkUsage = void 0;
        var o = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
        t.default = i;
        var s = n(0),
            u = n(78),
            c = n(8),
            l = function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(c),
            f = "Usage:\nvar customRefinementList = connectRefinementList(function render(params) {\n  // params = {\n  //   isFromSearch,\n  //   createURL,\n  //   items,\n  //   refine,\n  //   searchForItems,\n  //   instantSearchInstance,\n  //   canRefine,\n  //   toggleShowMore,\n  //   isShowingMore,\n  //   widgetParams,\n  // }\n});\n\nsearch.addWidget(\n  customRefinementList({\n    attributeName,\n    [ operator = 'or' ],\n    [ limit ],\n    [ showMoreLimit ],\n    [ sortBy = ['isRefined', 'count:desc', 'name:asc'] ],\n    [ escapeFacetValues = false ],\n    [ transformItems ]\n  })\n);\n\nFull documentation available at https://community.algolia.com/instantsearch.js/v2/connectors/connectRefinementList.html\n",
            p = t.checkUsage = function (e) {
                var t = e.attributeName,
                    n = e.operator,
                    r = e.showMoreLimit,
                    a = e.limit,
                    i = e.message,
                    o = void 0 === t,
                    s = !/^(and|or)$/.test(n),
                    u = void 0 !== r && (isNaN(r) || r < a);
                if (o || s || u) throw new Error(i)
            }
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            return (0, i.checkRendering)(e, o),
                function () {
                    function n(e) {
                        return function () {
                            e.setQuery(""), e.search()
                        }
                    }
                    var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        i = r.queryHook;
                    return {
                        _clear: function () {},
                        _cachedClear: function () {
                            this._clear()
                        },
                        init: function (t) {
                            var a = t.helper,
                                o = t.onHistoryChange,
                                s = t.instantSearchInstance;
                            this._cachedClear = this._cachedClear.bind(this), this._clear = n(a), this._refine = function () {
                                var e = void 0,
                                    t = function (t) {
                                        var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                                        t !== a.state.query && (e = a.state.query, a.setQuery(t)), n && void 0 !== e && e !== t && a.search()
                                    };
                                return i ? function (e) {
                                    return i(e, t)
                                } : t
                            }(), this._onHistoryChange = o, e({
                                query: a.state.query,
                                onHistoryChange: this._onHistoryChange,
                                refine: this._refine,
                                clear: this._cachedClear,
                                widgetParams: r,
                                instantSearchInstance: s
                            }, !0)
                        },
                        render: function (t) {
                            var a = t.helper,
                                i = t.instantSearchInstance,
                                o = t.searchMetadata;
                            this._clear = n(a), e({
                                query: a.state.query,
                                onHistoryChange: this._onHistoryChange,
                                refine: this._refine,
                                clear: this._cachedClear,
                                widgetParams: r,
                                instantSearchInstance: i,
                                isSearchStalled: o.isSearchStalled
                            }, !1)
                        },
                        dispose: function (e) {
                            var n = e.state;
                            return t(), n.setQuery("")
                        },
                        getWidgetState: function (e, t) {
                            var n = t.searchParameters,
                                r = n.query;
                            return "" === r || e && e.query === r ? e : a({}, e, {
                                query: r
                            })
                        },
                        getWidgetSearchParameters: function (e, t) {
                            var n = t.uiState;
                            return e.setQuery(n.query || "")
                        }
                    }
                }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
        t.default = r;
        var i = n(0),
            o = "Usage:\nvar customSearchBox = connectSearchBox(function render(params, isFirstRendering) {\n  // params = {\n  //   query,\n  //   onHistoryChange,\n  //   refine,\n  //   instantSearchInstance,\n  //   widgetParams,\n  //   clear,\n  // }\n});\nsearch.addWidget(\n  customSearchBox({\n    [ queryHook ],\n  })\n);\nFull documentation available at https://community.algolia.com/instantsearch.js/v2/connectors/connectSearchBox.html\n"
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            return (0, s.checkRendering)(e, u),
                function () {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = n.indices,
                        i = n.transformItems,
                        s = void 0 === i ? function (e) {
                            return e
                        } : i;
                    if (!r) throw new Error(u);
                    var c = r.map(function (e) {
                        return {
                            label: e.label,
                            value: e.name
                        }
                    });
                    return {
                        init: function (t) {
                            var a = t.helper,
                                i = t.instantSearchInstance,
                                u = a.getIndex();
                            if (!(0, o.default)(r, function (e) {
                                    return e.name === u
                                })) throw new Error("[sortBySelector]: Index " + u + " not present in `indices`");
                            this.initialIndex = i.indexName, this.setIndex = function (e) {
                                return a.setIndex(e).search()
                            }, e({
                                currentRefinement: u,
                                options: s(c),
                                refine: this.setIndex,
                                hasNoResults: !0,
                                widgetParams: n,
                                instantSearchInstance: i
                            }, !0)
                        },
                        render: function (t) {
                            var r = t.helper,
                                a = t.results,
                                i = t.instantSearchInstance;
                            e({
                                currentRefinement: r.getIndex(),
                                options: s(c),
                                refine: this.setIndex,
                                hasNoResults: 0 === a.nbHits,
                                widgetParams: n,
                                instantSearchInstance: i
                            }, !1)
                        },
                        dispose: function (e) {
                            var n = e.state;
                            return t(), n.setIndex(this.initialIndex)
                        },
                        getWidgetState: function (e, t) {
                            var n = t.searchParameters,
                                r = n.getQueryParameter("index");
                            return r === this.initialIndex || e && e.sortBy === r ? e : a({}, e, {
                                sortBy: n.getQueryParameter("index")
                            })
                        },
                        getWidgetSearchParameters: function (e, t) {
                            var n = t.uiState;
                            return e.setQueryParameter("index", n.sortBy || this.initialIndex)
                        }
                    }
                }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
        t.default = r;
        var i = n(9),
            o = function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(i),
            s = n(0),
            u = "Usage:\nvar customSortBySelector = connectSortBySelector(function render(params, isFirstRendering) {\n  // params = {\n  //   currentRefinement,\n  //   options,\n  //   refine,\n  //   hasNoResults,\n  //   instantSearchInstance,\n  //   widgetParams,\n  // }\n});\nsearch.addWidget(\n  customSortBySelector({\n    indices,\n    [ transformItems ]\n  })\n);\nFull documentation available at https://community.algolia.com/instantsearch.js/v2/connectors/connectSortBySelector.html\n"
    }, function (e, t, n) {
        "use strict";

        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function a(e, t) {
            return (0, o.checkRendering)(e, s),
                function () {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        a = n.attributeName,
                        o = n.max,
                        u = void 0 === o ? 5 : o;
                    if (!a) throw new Error(s);
                    return {
                        getConfiguration: function () {
                            return {
                                disjunctiveFacets: [a]
                            }
                        },
                        init: function (t) {
                            var r = t.helper,
                                i = t.createURL,
                                o = t.instantSearchInstance;
                            this._toggleRefinement = this._toggleRefinement.bind(this, r), this._createURL = function (e) {
                                return function (t) {
                                    return i(e.toggleRefinement(a, t))
                                }
                            }, e({
                                instantSearchInstance: o,
                                items: [],
                                hasNoResults: !0,
                                refine: this._toggleRefinement,
                                createURL: this._createURL(r.state),
                                widgetParams: n
                            }, !0)
                        },
                        render: function (t) {
                            for (var r = t.helper, i = t.results, o = t.state, s = t.instantSearchInstance, c = [], l = {}, f = u; f >= 0; --f) l[f] = 0;
                            i.getFacetValues(a).forEach(function (e) {
                                var t = Math.round(e.name);
                                if (t && !(t > u))
                                    for (var n = t; n >= 1; --n) l[n] += e.count
                            });
                            for (var p = this._getRefinedStar(r.state), d = u - 1; d >= 1; --d) {
                                var h = l[d];
                                if (!p || d === p || 0 !== h) {
                                    for (var m = [], v = 1; v <= u; ++v) m.push(v <= d);
                                    c.push({
                                        stars: m,
                                        name: String(d),
                                        value: String(d),
                                        count: h,
                                        isRefined: p === d
                                    })
                                }
                            }
                            e({
                                instantSearchInstance: s,
                                items: c,
                                hasNoResults: 0 === i.nbHits,
                                refine: this._toggleRefinement,
                                createURL: this._createURL(o),
                                widgetParams: n
                            }, !1)
                        },
                        dispose: function (e) {
                            var n = e.state;
                            return t(), n.removeDisjunctiveFacetRefinement(a).removeDisjunctiveFacet(a)
                        },
                        getWidgetState: function (e, t) {
                            var n = t.searchParameters,
                                o = this._getRefinedStar(n);
                            return void 0 === o || e && e.starRating && e.starRating[a] === o ? e : i({}, e, {
                                starRating: i({}, e.starRating, r({}, a, o))
                            })
                        },
                        getWidgetSearchParameters: function (e, t) {
                            var n = t.uiState,
                                r = n.starRating && n.starRating[a];
                            if (r === this._getRefinedStar(e)) return e;
                            var i = e.clearRefinements(a);
                            if (void 0 !== r)
                                for (var o = Number(r); o <= u; ++o) i = i.addDisjunctiveFacetRefinement(a, o);
                            return i
                        },
                        _toggleRefinement: function (e, t) {
                            var n = this._getRefinedStar(e.state) === Number(t);
                            if (e.clearRefinements(a), !n)
                                for (var r = Number(t); r <= u; ++r) e.addDisjunctiveFacetRefinement(a, r);
                            e.search()
                        },
                        _getRefinedStar: function (e) {
                            var t = void 0;
                            return e.getDisjunctiveRefinements(a).forEach(function (e) {
                                (!t || Number(e) < t) && (t = Number(e))
                            }), t
                        }
                    }
                }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
        t.default = a;
        var o = n(0),
            s = "Usage:\nvar customStarRating = connectStarRating(function render(params, isFirstRendering) {\n  // params = {\n  //   items,\n  //   createURL,\n  //   refine,\n  //   instantSearchInstance,\n  //   hasNoResults,\n  //   widgetParams,\n  // }\n});\nsearch.addWidget(\n  customStarRatingI({\n    attributeName,\n    [ max=5 ],\n  })\n);\nFull documentation available at https://community.algolia.com/instantsearch.js/v2/connectors/connectStarRating.html\n"
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            return (0, a.checkRendering)(e, i),
                function () {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return {
                        init: function (t) {
                            var r = t.helper,
                                a = t.instantSearchInstance;
                            e({
                                instantSearchInstance: a,
                                hitsPerPage: r.state.hitsPerPage,
                                nbHits: 0,
                                nbPages: 0,
                                page: r.state.page,
                                processingTimeMS: -1,
                                query: r.state.query,
                                widgetParams: n
                            }, !0)
                        },
                        render: function (t) {
                            var r = t.results,
                                a = t.instantSearchInstance;
                            e({
                                instantSearchInstance: a,
                                hitsPerPage: r.hitsPerPage,
                                nbHits: r.nbHits,
                                nbPages: r.nbPages,
                                page: r.page,
                                processingTimeMS: r.processingTimeMS,
                                query: r.query,
                                widgetParams: n
                            }, !1)
                        },
                        dispose: function () {
                            t()
                        }
                    }
                }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = r;
        var a = n(0),
            i = "Usage:\nvar customStats = connectStats(function render(params, isFirstRendering) {\n  // params = {\n  //   instantSearchInstance,\n  //   hitsPerPage,\n  //   nbHits,\n  //   nbPages,\n  //   page,\n  //   processingTimeMS,\n  //   query,\n  //   widgetParams,\n  // }\n});\nsearch.addWidget(customStats());\nFull documentation available at https://community.algolia.com/instantsearch.js/v2/connectors/connectStats.html"
    }, function (e, t, n) {
        "use strict";

        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function a(e, t) {
            return (0, o.checkRendering)(e, c),
                function () {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        a = n.attributeName,
                        s = n.label,
                        l = n.values,
                        f = void 0 === l ? {
                            on: !0,
                            off: void 0
                        } : l;
                    if (!a || !s) throw new Error(c);
                    var p = void 0 !== f.off,
                        d = f ? (0, o.escapeRefinement)(f.on) : void 0,
                        h = f ? (0, o.escapeRefinement)(f.off) : void 0;
                    return {
                        getConfiguration: function () {
                            return {
                                disjunctiveFacets: [a]
                            }
                        },
                        _toggleRefinement: function (e) {
                            (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).isRefined ? (e.removeDisjunctiveFacetRefinement(a, d), p && e.addDisjunctiveFacetRefinement(a, h)) : (p && e.removeDisjunctiveFacetRefinement(a, h), e.addDisjunctiveFacetRefinement(a, d)), e.search()
                        },
                        init: function (t) {
                            var r = this,
                                i = t.state,
                                o = t.helper,
                                u = t.createURL,
                                c = t.instantSearchInstance;
                            this._createURL = function (e) {
                                return function () {
                                    return u(i.removeDisjunctiveFacetRefinement(a, e ? d : h).addDisjunctiveFacetRefinement(a, e ? h : d))
                                }
                            }, this.toggleRefinement = function (e) {
                                r._toggleRefinement(o, e)
                            };
                            var l = i.isDisjunctiveFacetRefined(a, d);
                            if (p && !l) {
                                var f = o.getPage();
                                o.addDisjunctiveFacetRefinement(a, h).setPage(f)
                            }
                            var m = {
                                    name: s,
                                    isRefined: l,
                                    count: 0
                                },
                                v = {
                                    name: s,
                                    isRefined: p && !l,
                                    count: 0
                                },
                                g = {
                                    name: s,
                                    isRefined: l,
                                    count: null,
                                    onFacetValue: m,
                                    offFacetValue: v
                                };
                            e({
                                value: g,
                                createURL: this._createURL(g.isRefined),
                                refine: this.toggleRefinement,
                                instantSearchInstance: c,
                                widgetParams: n
                            }, !0)
                        },
                        render: function (t) {
                            var r = t.helper,
                                i = t.results,
                                c = t.state,
                                l = t.instantSearchInstance,
                                f = r.state.isDisjunctiveFacetRefined(a, d),
                                m = void 0 !== h && h,
                                v = i.getFacetValues(a),
                                g = (0, u.default)(v, function (e) {
                                    return e.name === (0, o.unescapeRefinement)(d)
                                }),
                                y = {
                                    name: s,
                                    isRefined: void 0 !== g && g.isRefined,
                                    count: void 0 === g ? null : g.count
                                },
                                b = p ? (0, u.default)(v, function (e) {
                                    return e.name === (0, o.unescapeRefinement)(m)
                                }) : void 0,
                                _ = {
                                    name: s,
                                    isRefined: void 0 !== b && b.isRefined,
                                    count: void 0 === b ? v.reduce(function (e, t) {
                                        return e + t.count
                                    }, 0) : b.count
                                },
                                w = f ? _ : y,
                                P = {
                                    name: s,
                                    isRefined: f,
                                    count: void 0 === w ? null : w.count,
                                    onFacetValue: y,
                                    offFacetValue: _
                                };
                            e({
                                value: P,
                                state: c,
                                createURL: this._createURL(P.isRefined),
                                refine: this.toggleRefinement,
                                helper: r,
                                instantSearchInstance: l,
                                widgetParams: n
                            }, !1)
                        },
                        dispose: function (e) {
                            var n = e.state;
                            return t(), n.removeDisjunctiveFacetRefinement(a).removeDisjunctiveFacet(a)
                        },
                        getWidgetState: function (e, t) {
                            var n = t.searchParameters,
                                o = n.isDisjunctiveFacetRefined(a, d);
                            return !o || e && e.toggle && e.toggle[a] === o ? e : i({}, e, {
                                toggle: i({}, e.toggle, r({}, a, o))
                            })
                        },
                        getWidgetSearchParameters: function (e, t) {
                            var n = t.uiState;
                            return Boolean(n.toggle && n.toggle[a]) ? p ? e.removeDisjunctiveFacetRefinement(a, h).addDisjunctiveFacetRefinement(a, d) : e.addDisjunctiveFacetRefinement(a, d) : p ? e.removeDisjunctiveFacetRefinement(a, d).addDisjunctiveFacetRefinement(a, h) : e.removeDisjunctiveFacetRefinement(a, d)
                        }
                    }
                }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
        t.default = a;
        var o = n(0),
            s = n(9),
            u = function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(s),
            c = "Usage:\nvar customToggle = connectToggle(function render(params, isFirstRendering) {\n  // params = {\n  //   value,\n  //   createURL,\n  //   refine,\n  //   instantSearchInstance,\n  //   widgetParams,\n  // }\n});\nsearch.addWidget(\n  customToggle({\n    attributeName,\n    label,\n    [ values = {on: true, off: undefined} ]\n  })\n);\nFull documentation available at https://community.algolia.com/instantsearch.js/v2/connectors/connectToggle.html\n"
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            return (0, p.checkRendering)(e, d),
                function () {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = n.attributes,
                        a = n.separator,
                        u = void 0 === a ? " > " : a,
                        l = n.rootPath,
                        p = void 0 === l ? null : l,
                        h = n.transformItems,
                        m = void 0 === h ? function (e) {
                            return e
                        } : h,
                        v = s(r, 1),
                        g = v[0];
                    if (!r || !Array.isArray(r) || 0 === r.length) throw new Error(d);
                    return {
                        getConfiguration: function (e) {
                            if (e.hierarchicalFacets) {
                                var t = (0, c.default)(e.hierarchicalFacets, function (e) {
                                    return e.name === g
                                });
                                if (t) return (0, f.default)(t.attributes, r) && t.separator === u || console.warn("Using Breadcrumb & HierarchicalMenu on the same facet with different options. Adding that one will override the configuration of the HierarchicalMenu. Check your options."), {}
                            }
                            return {
                                hierarchicalFacets: [{
                                    attributes: r,
                                    name: g,
                                    separator: u,
                                    rootPath: p
                                }]
                            }
                        },
                        init: function (t) {
                            var r = t.createURL,
                                a = t.helper,
                                i = t.instantSearchInstance;
                            this._createURL = function (e) {
                                if (!e) {
                                    var t = a.getHierarchicalFacetBreadcrumb(g);
                                    if (t.length > 0) return r(a.state.toggleRefinement(g, t[0]))
                                }
                                return r(a.state.toggleRefinement(g, e))
                            }, this._refine = function (e) {
                                if (e) a.toggleRefinement(g, e).search();
                                else {
                                    var t = a.getHierarchicalFacetBreadcrumb(g);
                                    t.length > 0 && a.toggleRefinement(g, t[0]).search()
                                }
                            }, e({
                                createURL: this._createURL,
                                canRefine: !1,
                                instantSearchInstance: i,
                                items: [],
                                refine: this._refine,
                                widgetParams: n
                            }, !0)
                        },
                        render: function (t) {
                            var r = t.instantSearchInstance,
                                a = t.results,
                                u = t.state,
                                c = s(u.hierarchicalFacets, 1),
                                l = c[0].name,
                                f = a.getFacetValues(l),
                                p = Array.isArray(f.data) ? f.data : [],
                                d = m(o(i(p)));
                            e({
                                canRefine: d.length > 0,
                                createURL: this._createURL,
                                instantSearchInstance: r,
                                items: d,
                                refine: this._refine,
                                widgetParams: n
                            }, !1)
                        },
                        dispose: function () {
                            t()
                        }
                    }
                }
        }

        function i(e) {
            return e.reduce(function (e, t) {
                return t.isRefined && (e.push({
                    name: t.name,
                    value: t.path
                }), Array.isArray(t.data) && (e = e.concat(i(t.data)))), e
            }, [])
        }

        function o(e) {
            return e.map(function (t, n) {
                return {
                    name: t.name,
                    value: n + 1 === e.length ? null : e[n + 1].value
                }
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = function () {
            function e(e, t) {
                var n = [],
                    r = !0,
                    a = !1,
                    i = void 0;
                try {
                    for (var o, s = e[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    a = !0, i = e
                } finally {
                    try {
                        !r && s.return && s.return()
                    } finally {
                        if (a) throw i
                    }
                }
                return n
            }
            return function (t, n) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }();
        t.default = a;
        var u = n(9),
            c = r(u),
            l = n(8),
            f = r(l),
            p = n(0),
            d = "Usage:\nvar customBreadcrumb = connectBreadcrumb(function renderFn(params, isFirstRendering) {\n  // params = {\n  //   createURL,\n  //   items,\n  //   refine,\n  //   instantSearchInstance,\n  //   widgetParams,\n  // }\n});\nsearch.addWidget(\n  customBreadcrumb({\n    attributes,\n    [ rootPath = null ],\n    [ transformItems ]\n  })\n);\nFull documentation available at https://community.algolia.com/instantsearch.js/v2/connectors/connectBreadcrumb.html\n"
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(72),
            a = function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(r),
            i = n(0),
            o = function (e, t) {
                return (0, i.checkRendering)(e, "Usage:\n\nvar customGeoSearch = connectGeoSearch(function render(params, isFirstRendering) {\n  // params = {\n  //   items,\n  //   position,\n  //   refine,\n  //   clearMapRefinement,\n  //   isRefinedWithMap,\n  //   toggleRefineOnMapMove,\n  //   isRefineOnMapMove,\n  //   setMapMoveSinceLastRefine,\n  //   hasMapMoveSinceLastRefine,\n  //   hasMapMoveSinceLastRefine,\n  //   widgetParams,\n  //   instantSearchInstance,\n  // }\n});\n\nsearch.addWidget(\n  customGeoSearch({\n    [ enableRefineOnMapMove = true ],\n    [ enableGeolocationWithIP = true ],\n    [ position ],\n    [ radius ],\n    [ precision ],\n    [ transformItems ],\n  })\n);\n\nFull documentation available at https://community.algolia.com/instantsearch.js/v2/connectors/connectGeoSearch.html\n"),
                    function () {
                        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            r = n.enableRefineOnMapMove,
                            o = void 0 === r || r,
                            s = n.enableGeolocationWithIP,
                            u = void 0 === s || s,
                            c = n.position,
                            l = n.radius,
                            f = n.precision,
                            p = n.transformItems,
                            d = void 0 === p ? function (e) {
                                return e
                            } : p,
                            h = {
                                isRefineOnMapMove: o,
                                hasMapMoveSinceLastRefine: !1,
                                lastRefinePosition: "",
                                lastRefineBoundingBox: "",
                                internalToggleRefineOnMapMove: a.default,
                                internalSetMapMoveSinceLastRefine: a.default
                            },
                            m = function (e) {
                                return e.aroundLatLng && (0, i.parseAroundLatLngFromString)(e.aroundLatLng)
                            },
                            v = function (e) {
                                return function (t) {
                                    var n = t.northEast,
                                        r = t.southWest,
                                        a = [n.lat, n.lng, r.lat, r.lng].join();
                                    e.setQueryParameter("insideBoundingBox", a).search(), h.hasMapMoveSinceLastRefine = !1, h.lastRefineBoundingBox = a
                                }
                            },
                            g = function (e) {
                                return function () {
                                    e.setQueryParameter("insideBoundingBox").search()
                                }
                            },
                            y = function (e) {
                                return function () {
                                    return Boolean(e.insideBoundingBox)
                                }
                            },
                            b = function () {
                                return h.internalToggleRefineOnMapMove()
                            },
                            _ = function (e, t) {
                                return function () {
                                    h.isRefineOnMapMove = !h.isRefineOnMapMove, e(t)
                                }
                            },
                            w = function () {
                                return h.isRefineOnMapMove
                            },
                            P = function () {
                                return h.internalSetMapMoveSinceLastRefine()
                            },
                            R = function (e, t) {
                                return function () {
                                    var n = !0 !== h.hasMapMoveSinceLastRefine;
                                    h.hasMapMoveSinceLastRefine = !0, n && e(t)
                                }
                            },
                            x = function () {
                                return h.hasMapMoveSinceLastRefine
                            };
                        return {
                            init: function (t) {
                                var r = t.state,
                                    i = t.helper,
                                    o = t.instantSearchInstance;
                                h.internalToggleRefineOnMapMove = _(a.default, t), h.internalSetMapMoveSinceLastRefine = R(a.default, t), e({
                                    items: [],
                                    position: m(r),
                                    refine: v(i),
                                    clearMapRefinement: g(i),
                                    isRefinedWithMap: y(r),
                                    toggleRefineOnMapMove: b,
                                    isRefineOnMapMove: w,
                                    setMapMoveSinceLastRefine: P,
                                    hasMapMoveSinceLastRefine: x,
                                    widgetParams: n,
                                    instantSearchInstance: o
                                }, !0)
                            },
                            render: function t(r) {
                                var a = r.results,
                                    i = r.helper,
                                    o = r.instantSearchInstance,
                                    s = i.getState(),
                                    u = Boolean(s.aroundLatLng) && Boolean(h.lastRefinePosition) && s.aroundLatLng !== h.lastRefinePosition,
                                    c = !s.insideBoundingBox && Boolean(h.lastRefineBoundingBox) && s.insideBoundingBox !== h.lastRefineBoundingBox;
                                (u || c) && (h.hasMapMoveSinceLastRefine = !1), h.lastRefinePosition = s.aroundLatLng || "", h.lastRefineBoundingBox = s.insideBoundingBox || "", h.internalToggleRefineOnMapMove = _(t, r), h.internalSetMapMoveSinceLastRefine = R(t, r);
                                var l = d(a.hits.filter(function (e) {
                                    return e._geoloc
                                }));
                                e({
                                    items: l,
                                    position: m(s),
                                    refine: v(i),
                                    clearMapRefinement: g(i),
                                    isRefinedWithMap: y(s),
                                    toggleRefineOnMapMove: b,
                                    isRefineOnMapMove: w,
                                    setMapMoveSinceLastRefine: P,
                                    hasMapMoveSinceLastRefine: x,
                                    widgetParams: n,
                                    instantSearchInstance: o
                                }, !1)
                            },
                            getConfiguration: function (e) {
                                var t = {};
                                return !u || c || e.aroundLatLng || void 0 !== e.aroundLatLngViaIP || (t.aroundLatLngViaIP = !0), !c || e.aroundLatLng || e.aroundLatLngViaIP || (t.aroundLatLng = c.lat + ", " + c.lng), l && !e.aroundRadius && (t.aroundRadius = l), f && !e.aroundPrecision && (t.aroundPrecision = f), t
                            },
                            dispose: function (e) {
                                var n = e.state;
                                t();
                                var r = n;
                                return u && !c && (r = r.setQueryParameter("aroundLatLngViaIP")), c && (r = r.setQueryParameter("aroundLatLng")), l && (r = r.setQueryParameter("aroundRadius")), f && (r = r.setQueryParameter("aroundPrecision")), r = r.setQueryParameter("insideBoundingBox")
                            }
                        }
                    }
            };
        t.default = o
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if ((0, s.default)(e) && !(0, s.default)(t) || !(0, s.default)(e) && (0, s.default)(t)) throw new Error(f);
            return function () {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (!(0, c.default)(n.searchParameters)) throw new Error(f);
                return {
                    getConfiguration: function () {
                        return n.searchParameters
                    },
                    init: function (t) {
                        var r = t.helper;
                        this._refine = this.refine(r), (0, s.default)(e) && e({
                            refine: this._refine,
                            widgetParams: n
                        }, !0)
                    },
                    refine: function (e) {
                        var t = this;
                        return function (r) {
                            var a = t.removeSearchParameters(e.getState()),
                                o = (0, l.enhanceConfiguration)({})(i({}, a), {
                                    getConfiguration: function () {
                                        return r
                                    }
                                });
                            e.setState(o).search(), n.searchParameters = r
                        }
                    },
                    render: function () {
                        e && e({
                            refine: this._refine,
                            widgetParams: n
                        }, !1)
                    },
                    dispose: function (e) {
                        var n = e.state;
                        return t && t(), this.removeSearchParameters(n)
                    },
                    removeSearchParameters: function (e) {
                        return e.mutateMe(function (e) {
                            Object.keys(n.searchParameters).forEach(function (t) {
                                delete e[t]
                            })
                        })
                    }
                }
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
        t.default = a;
        var o = n(17),
            s = r(o),
            u = n(23),
            c = r(u),
            l = n(179),
            f = "Usage:\nvar customConfigureWidget = connectConfigure(\n  function renderFn(params, isFirstRendering) {\n    // params = {\n    //   refine,\n    //   widgetParams\n    // }\n  },\n  function disposeFn() {}\n)\n"
    }, function (e, t, n) {
        e.exports = n(405)()
    }, function (e, t, n) {
        function r(e) {
            return a(e, i | o)
        }
        var a = n(141),
            i = 1,
            o = 4;
        e.exports = r
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function o(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            u = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            c = n(3),
            l = (r(c), n(1)),
            f = r(l),
            p = n(11),
            d = r(p),
            h = n(12),
            m = r(h),
            v = n(212),
            g = r(v),
            y = n(2),
            b = r(y),
            _ = function (e) {
                function t() {
                    return a(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return o(t, e), u(t, [{
                    key: "renderWithResults",
                    value: function () {
                        var e = this,
                            t = (0, d.default)(this.props.hits, function (t, n) {
                                var r = s({}, t, {
                                    __hitIndex: n
                                });
                                return f.default.createElement(m.default, s({
                                    data: r,
                                    key: r.objectID,
                                    rootProps: {
                                        className: e.props.cssClasses.item
                                    },
                                    templateKey: "item"
                                }, e.props.templateProps))
                            });
                        return f.default.createElement("div", {
                            className: this.props.cssClasses.root
                        }, t)
                    }
                }, {
                    key: "renderAllResults",
                    value: function () {
                        var e = (0, b.default)(this.props.cssClasses.root, this.props.cssClasses.allItems);
                        return f.default.createElement(m.default, s({
                            data: this.props.results,
                            rootProps: {
                                className: e
                            },
                            templateKey: "allItems"
                        }, this.props.templateProps))
                    }
                }, {
                    key: "renderNoResults",
                    value: function () {
                        var e = (0, b.default)(this.props.cssClasses.root, this.props.cssClasses.empty);
                        return f.default.createElement(m.default, s({
                            data: this.props.results,
                            rootProps: {
                                className: e
                            },
                            templateKey: "empty"
                        }, this.props.templateProps))
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this.props.results.hits.length > 0,
                            t = (0, g.default)(this.props, "templateProps.templates.allItems");
                        return e ? t ? this.renderAllResults() : this.renderWithResults() : this.renderNoResults()
                    }
                }]), t
            }(l.Component);
        _.defaultProps = {
            results: {
                hits: []
            }
        }, t.default = _
    }, function (e, t, n) {
        function r(e, t) {
            return null != e && i(e, t, a)
        }
        var a = n(429),
            i = n(138);
        e.exports = r
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            if (!e) return null;
            if (!0 === e) return s;
            var t = a({}, e);
            return e.templates || (t.templates = s.templates), e.limit || (t.limit = s.limit), t
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
        t.default = r;
        var i = n(437),
            o = function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(i),
            s = {
                templates: o.default,
                limit: 100
            }
    }, function (e, t, n) {
        n(215), n(216), e.exports = n(217)
    }, function (e, t) {}, function (e, t) {}, function (e, t, n) {
        "use strict";
        var r = n(218),
            a = function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(r);
        e.exports = a.default
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e, t
        }

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(219),
            o = a(i),
            s = n(52),
            u = a(s),
            c = n(179),
            l = a(c),
            f = n(187),
            p = a(f),
            d = n(386),
            h = r(d),
            m = n(403),
            v = r(m),
            g = n(483),
            y = r(g),
            b = n(484),
            _ = r(b),
            w = (0, o.default)(l.default);
        w.routers = y, w.stateMappings = _, w.createQueryString = u.default.url.getQueryStringFromState, w.connectors = h, w.widgets = v, w.version = p.default, t.default = w
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            var t = function () {
                for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return new(a.apply(e, [null].concat(n)))
            };
            return t.__proto__ = e, t.prototype = e.prototype, t
        }
        var a = Function.prototype.bind;
        e.exports = r
    }, function (e, t, n) {
        "use strict";

        function r(e, t, n) {
            e.addAlgoliaAgent && !o(e) && e.addAlgoliaAgent("JS Helper " + y), this.setClient(e);
            var r = n || {};
            r.index = t, this.state = s.make(r), this.lastResults = null, this._queryId = 0, this._lastQueryIdReceived = -1, this.derivedHelpers = [], this._currentNbQueries = 0
        }

        function a(e) {
            if (e < 0) throw new Error("Page requested below 0.");
            return this._change(this.state.setPage(e)), this
        }

        function i() {
            return this.state.page
        }

        function o(e) {
            var t = e._ua;
            return !!t && -1 !== t.indexOf("JS Helper")
        }
        var s = n(80),
            u = n(158),
            c = n(349),
            l = n(352),
            f = n(172),
            p = n(107),
            d = n(149),
            h = n(18),
            m = n(33),
            v = n(11),
            g = n(108),
            y = n(178);
        f.inherits(r, p.EventEmitter), r.prototype.search = function () {
            return this._search(), this
        }, r.prototype.getQuery = function () {
            var e = this.state;
            return l._getHitsSearchParams(e)
        }, r.prototype.searchOnce = function (e, t) {
            var n = e ? this.state.setQueryParameters(e) : this.state,
                r = l._getQueries(n.index, n),
                a = this;
            return this._currentNbQueries++, this.emit("searchOnce", n), t ? void this.client.search(r).then(function (e) {
                a._currentNbQueries--, 0 === a._currentNbQueries && a.emit("searchQueueEmpty"), t(null, new u(n, e.results), n)
            }).catch(function (e) {
                a._currentNbQueries--, 0 === a._currentNbQueries && a.emit("searchQueueEmpty"), t(e, null, n)
            }) : this.client.search(r).then(function (e) {
                return a._currentNbQueries--, 0 === a._currentNbQueries && a.emit("searchQueueEmpty"), {
                    content: new u(n, e.results),
                    state: n,
                    _originalResponse: e
                }
            }, function (e) {
                throw a._currentNbQueries--, 0 === a._currentNbQueries && a.emit("searchQueueEmpty"), e
            })
        }, r.prototype.searchForFacetValues = function (e, t, n, r) {
            var a = this.state.setQueryParameters(r || {}),
                i = a.isDisjunctiveFacet(e),
                o = l.getSearchForFacetQuery(e, t, n, a);
            this._currentNbQueries++;
            var s = this;
            return this.emit("searchForFacetValues", a, e, t), ("function" === typeof this.client.searchForFacetValues ? this.client.searchForFacetValues([{
                indexName: a.index,
                params: o
            }]) : this.client.initIndex(a.index).searchForFacetValues(o)).then(function (t) {
                return s._currentNbQueries--, 0 === s._currentNbQueries && s.emit("searchQueueEmpty"), t = Array.isArray(t) ? t[0] : t, t.facetHits = h(t.facetHits, function (t) {
                    t.isRefined = i ? a.isDisjunctiveFacetRefined(e, t.value) : a.isFacetRefined(e, t.value)
                }), t
            }, function (e) {
                throw s._currentNbQueries--, 0 === s._currentNbQueries && s.emit("searchQueueEmpty"), e
            })
        }, r.prototype.setQuery = function (e) {
            return this._change(this.state.setPage(0).setQuery(e)), this
        }, r.prototype.clearRefinements = function (e) {
            return this._change(this.state.setPage(0).clearRefinements(e)), this
        }, r.prototype.clearTags = function () {
            return this._change(this.state.setPage(0).clearTags()), this
        }, r.prototype.addDisjunctiveFacetRefinement = function (e, t) {
            return this._change(this.state.setPage(0).addDisjunctiveFacetRefinement(e, t)), this
        }, r.prototype.addDisjunctiveRefine = function () {
            return this.addDisjunctiveFacetRefinement.apply(this, arguments)
        }, r.prototype.addHierarchicalFacetRefinement = function (e, t) {
            return this._change(this.state.setPage(0).addHierarchicalFacetRefinement(e, t)), this
        }, r.prototype.addNumericRefinement = function (e, t, n) {
            return this._change(this.state.setPage(0).addNumericRefinement(e, t, n)), this
        }, r.prototype.addFacetRefinement = function (e, t) {
            return this._change(this.state.setPage(0).addFacetRefinement(e, t)), this
        }, r.prototype.addRefine = function () {
            return this.addFacetRefinement.apply(this, arguments)
        }, r.prototype.addFacetExclusion = function (e, t) {
            return this._change(this.state.setPage(0).addExcludeRefinement(e, t)), this
        }, r.prototype.addExclude = function () {
            return this.addFacetExclusion.apply(this, arguments)
        }, r.prototype.addTag = function (e) {
            return this._change(this.state.setPage(0).addTagRefinement(e)), this
        }, r.prototype.removeNumericRefinement = function (e, t, n) {
            return this._change(this.state.setPage(0).removeNumericRefinement(e, t, n)), this
        }, r.prototype.removeDisjunctiveFacetRefinement = function (e, t) {
            return this._change(this.state.setPage(0).removeDisjunctiveFacetRefinement(e, t)), this
        }, r.prototype.removeDisjunctiveRefine = function () {
            return this.removeDisjunctiveFacetRefinement.apply(this, arguments)
        }, r.prototype.removeHierarchicalFacetRefinement = function (e) {
            return this._change(this.state.setPage(0).removeHierarchicalFacetRefinement(e)), this
        }, r.prototype.removeFacetRefinement = function (e, t) {
            return this._change(this.state.setPage(0).removeFacetRefinement(e, t)), this
        }, r.prototype.removeRefine = function () {
            return this.removeFacetRefinement.apply(this, arguments)
        }, r.prototype.removeFacetExclusion = function (e, t) {
            return this._change(this.state.setPage(0).removeExcludeRefinement(e, t)), this
        }, r.prototype.removeExclude = function () {
            return this.removeFacetExclusion.apply(this, arguments)
        }, r.prototype.removeTag = function (e) {
            return this._change(this.state.setPage(0).removeTagRefinement(e)), this
        }, r.prototype.toggleFacetExclusion = function (e, t) {
            return this._change(this.state.setPage(0).toggleExcludeFacetRefinement(e, t)), this
        }, r.prototype.toggleExclude = function () {
            return this.toggleFacetExclusion.apply(this, arguments)
        }, r.prototype.toggleRefinement = function (e, t) {
            return this.toggleFacetRefinement(e, t)
        }, r.prototype.toggleFacetRefinement = function (e, t) {
            return this._change(this.state.setPage(0).toggleFacetRefinement(e, t)), this
        }, r.prototype.toggleRefine = function () {
            return this.toggleFacetRefinement.apply(this, arguments)
        }, r.prototype.toggleTag = function (e) {
            return this._change(this.state.setPage(0).toggleTagRefinement(e)), this
        }, r.prototype.nextPage = function () {
            return this.setPage(this.state.page + 1)
        }, r.prototype.previousPage = function () {
            return this.setPage(this.state.page - 1)
        }, r.prototype.setCurrentPage = a, r.prototype.setPage = a, r.prototype.setIndex = function (e) {
            return this._change(this.state.setPage(0).setIndex(e)), this
        }, r.prototype.setQueryParameter = function (e, t) {
            return this._change(this.state.setPage(0).setQueryParameter(e, t)), this
        }, r.prototype.setState = function (e) {
            return this._change(s.make(e)), this
        }, r.prototype.getState = function (e) {
            return void 0 === e ? this.state : this.state.filter(e)
        }, r.prototype.getStateAsQueryString = function (e) {
            var t = e && e.filters || ["query", "attribute:*"],
                n = this.getState(t);
            return g.getQueryStringFromState(n, e)
        }, r.getConfigurationFromQueryString = g.getStateFromQueryString, r.getForeignConfigurationInQueryString = g.getUnrecognizedParametersInQueryString, r.prototype.setStateFromQueryString = function (e, t) {
            var n = t && t.triggerChange || !1,
                r = g.getStateFromQueryString(e, t),
                a = this.state.setQueryParameters(r);
            n ? this.setState(a) : this.overrideStateWithoutTriggeringChangeEvent(a)
        }, r.prototype.overrideStateWithoutTriggeringChangeEvent = function (e) {
            return this.state = new s(e), this
        }, r.prototype.isRefined = function (e, t) {
            if (this.state.isConjunctiveFacet(e)) return this.state.isFacetRefined(e, t);
            if (this.state.isDisjunctiveFacet(e)) return this.state.isDisjunctiveFacetRefined(e, t);
            throw new Error(e + " is not properly defined in this helper configuration(use the facets or disjunctiveFacets keys to configure it)")
        }, r.prototype.hasRefinements = function (e) {
            return !m(this.state.getNumericRefinements(e)) || (this.state.isConjunctiveFacet(e) ? this.state.isFacetRefined(e) : this.state.isDisjunctiveFacet(e) ? this.state.isDisjunctiveFacetRefined(e) : !!this.state.isHierarchicalFacet(e) && this.state.isHierarchicalFacetRefined(e))
        }, r.prototype.isExcluded = function (e, t) {
            return this.state.isExcludeRefined(e, t)
        }, r.prototype.isDisjunctiveRefined = function (e, t) {
            return this.state.isDisjunctiveFacetRefined(e, t)
        }, r.prototype.hasTag = function (e) {
            return this.state.isTagRefined(e)
        }, r.prototype.isTagRefined = function () {
            return this.hasTagRefinements.apply(this, arguments)
        }, r.prototype.getIndex = function () {
            return this.state.index
        }, r.prototype.getCurrentPage = i, r.prototype.getPage = i, r.prototype.getTags = function () {
            return this.state.tagRefinements
        }, r.prototype.getQueryParameter = function (e) {
            return this.state.getQueryParameter(e)
        }, r.prototype.getRefinements = function (e) {
            var t = [];
            if (this.state.isConjunctiveFacet(e)) {
                var n = this.state.getConjunctiveRefinements(e);
                h(n, function (e) {
                    t.push({
                        value: e,
                        type: "conjunctive"
                    })
                });
                var r = this.state.getExcludeRefinements(e);
                h(r, function (e) {
                    t.push({
                        value: e,
                        type: "exclude"
                    })
                })
            } else if (this.state.isDisjunctiveFacet(e)) {
                var a = this.state.getDisjunctiveRefinements(e);
                h(a, function (e) {
                    t.push({
                        value: e,
                        type: "disjunctive"
                    })
                })
            }
            var i = this.state.getNumericRefinements(e);
            return h(i, function (e, n) {
                t.push({
                    value: e,
                    operator: n,
                    type: "numeric"
                })
            }), t
        }, r.prototype.getNumericRefinement = function (e, t) {
            return this.state.getNumericRefinement(e, t)
        }, r.prototype.getHierarchicalFacetBreadcrumb = function (e) {
            return this.state.getHierarchicalFacetBreadcrumb(e)
        }, r.prototype._search = function () {
            var e = this.state,
                t = l._getQueries(e.index, e),
                n = [{
                    state: e,
                    queriesCount: t.length,
                    helper: this
                }];
            this.emit("search", e, this.lastResults);
            var r = v(this.derivedHelpers, function (t) {
                    var r = t.getModifiedState(e),
                        a = l._getQueries(r.index, r);
                    return n.push({
                        state: r,
                        queriesCount: a.length,
                        helper: t
                    }), t.emit("search", r, t.lastResults), a
                }),
                a = t.concat(d(r)),
                i = this._queryId++;
            this._currentNbQueries++;
            try {
                this.client.search(a).then(this._dispatchAlgoliaResponse.bind(this, n, i)).catch(this._dispatchAlgoliaError.bind(this, i))
            } catch (e) {
                this.emit("error", e)
            }
        }, r.prototype._dispatchAlgoliaResponse = function (e, t, n) {
            if (!(t < this._lastQueryIdReceived)) {
                this._currentNbQueries -= t - this._lastQueryIdReceived, this._lastQueryIdReceived = t, 0 === this._currentNbQueries && this.emit("searchQueueEmpty");
                var r = n.results.slice();
                h(e, function (e) {
                    var t = e.state,
                        n = e.queriesCount,
                        a = e.helper,
                        i = r.splice(0, n),
                        o = a.lastResults = new u(t, i);
                    a.emit("result", o, t)
                })
            }
        }, r.prototype._dispatchAlgoliaError = function (e, t) {
            e < this._lastQueryIdReceived || (this._currentNbQueries -= e - this._lastQueryIdReceived, this._lastQueryIdReceived = e, this.emit("error", t), 0 === this._currentNbQueries && this.emit("searchQueueEmpty"))
        }, r.prototype.containsRefinement = function (e, t, n, r) {
            return e || 0 !== t.length || 0 !== n.length || 0 !== r.length
        }, r.prototype._hasDisjunctiveRefinements = function (e) {
            return this.state.disjunctiveRefinements[e] && this.state.disjunctiveRefinements[e].length > 0
        }, r.prototype._change = function (e) {
            e !== this.state && (this.state = e, this.emit("change", this.state, this.lastResults))
        }, r.prototype.clearCache = function () {
            return this.client.clearCache && this.client.clearCache(), this
        }, r.prototype.setClient = function (e) {
            return this.client === e ? this : (e.addAlgoliaAgent && !o(e) && e.addAlgoliaAgent("JS Helper " + y), this.client = e, this)
        }, r.prototype.getClient = function () {
            return this.client
        }, r.prototype.derive = function (e) {
            var t = new c(this, e);
            return this.derivedHelpers.push(t), t
        }, r.prototype.detachDerivedHelper = function (e) {
            var t = this.derivedHelpers.indexOf(e);
            if (-1 === t) throw new Error("Derived helper already detached");
            this.derivedHelpers.splice(t, 1)
        }, r.prototype.hasPendingRequests = function () {
            return this._currentNbQueries > 0
        }, e.exports = r
    }, function (e, t, n) {
        function r(e) {
            return i(e) && a(e) == o
        }
        var a = n(15),
            i = n(6),
            o = "[object Arguments]";
        e.exports = r
    }, function (e, t, n) {
        function r(e) {
            var t = o.call(e, u),
                n = e[u];
            try {
                e[u] = void 0;
                var r = !0
            } catch (e) {}
            var a = s.call(e);
            return r && (t ? e[u] = n : delete e[u]), a
        }
        var a = n(27),
            i = Object.prototype,
            o = i.hasOwnProperty,
            s = i.toString,
            u = a ? a.toStringTag : void 0;
        e.exports = r
    }, function (e, t) {
        function n(e) {
            return a.call(e)
        }
        var r = Object.prototype,
            a = r.toString;
        e.exports = n
    }, function (e, t) {
        function n() {
            return !1
        }
        e.exports = n
    }, function (e, t, n) {
        function r(e) {
            return o(e) && i(e.length) && !!s[a(e)]
        }
        var a = n(15),
            i = n(82),
            o = n(6),
            s = {};
        s["[object Float32Array]"] = s["[object Float64Array]"] = s["[object Int8Array]"] = s["[object Int16Array]"] = s["[object Int32Array]"] = s["[object Uint8Array]"] = s["[object Uint8ClampedArray]"] = s["[object Uint16Array]"] = s["[object Uint32Array]"] = !0, s["[object Arguments]"] = s["[object Array]"] = s["[object ArrayBuffer]"] = s["[object Boolean]"] = s["[object DataView]"] = s["[object Date]"] = s["[object Error]"] = s["[object Function]"] = s["[object Map]"] = s["[object Number]"] = s["[object Object]"] = s["[object RegExp]"] = s["[object Set]"] = s["[object String]"] = s["[object WeakMap]"] = !1, e.exports = r
    }, function (e, t, n) {
        var r = n(117),
            a = r(Object.keys, Object);
        e.exports = a
    }, function (e, t, n) {
        var r = n(21),
            a = n(228),
            i = n(22),
            o = n(255),
            s = i(function (e) {
                var t = r(e, o);
                return t.length && t[0] === e[0] ? a(t) : []
            });
        e.exports = s
    }, function (e, t, n) {
        function r(e, t, n) {
            for (var r = n ? o : i, f = e[0].length, p = e.length, d = p, h = Array(p), m = 1 / 0, v = []; d--;) {
                var g = e[d];
                d && t && (g = s(g, u(t))), m = l(g.length, m), h[d] = !n && (t || f >= 120 && g.length >= 120) ? new a(d && g) : void 0
            }
            g = e[0];
            var y = -1,
                b = h[0];
            e: for (; ++y < f && v.length < m;) {
                var _ = g[y],
                    w = t ? t(_) : _;
                if (_ = n || 0 !== _ ? _ : 0, !(b ? c(b, w) : r(v, w, n))) {
                    for (d = p; --d;) {
                        var P = h[d];
                        if (!(P ? c(P, w) : r(e[d], w, n))) continue e
                    }
                    b && b.push(w), v.push(_)
                }
            }
            return v
        }
        var a = n(84),
            i = n(87),
            o = n(120),
            s = n(21),
            u = n(42),
            c = n(88),
            l = Math.min;
        e.exports = r
    }, function (e, t, n) {
        function r() {
            this.size = 0, this.__data__ = {
                hash: new a,
                map: new(o || i),
                string: new a
            }
        }
        var a = n(230),
            i = n(56),
            o = n(86);
        e.exports = r
    }, function (e, t, n) {
        function r(e) {
            var t = -1,
                n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        var a = n(231),
            i = n(236),
            o = n(237),
            s = n(238),
            u = n(239);
        r.prototype.clear = a, r.prototype.delete = i, r.prototype.get = o, r.prototype.has = s, r.prototype.set = u, e.exports = r
    }, function (e, t, n) {
        function r() {
            this.__data__ = a ? a(null) : {}, this.size = 0
        }
        var a = n(55);
        e.exports = r
    }, function (e, t, n) {
        function r(e) {
            return !(!o(e) || i(e)) && (a(e) ? h : c).test(s(e))
        }
        var a = n(17),
            i = n(233),
            o = n(7),
            s = n(118),
            u = /[\\^$.*+?()[\]{}|]/g,
            c = /^\[object .+?Constructor\]$/,
            l = Function.prototype,
            f = Object.prototype,
            p = l.toString,
            d = f.hasOwnProperty,
            h = RegExp("^" + p.call(d).replace(u, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        e.exports = r
    }, function (e, t, n) {
        function r(e) {
            return !!i && i in e
        }
        var a = n(234),
            i = function () {
                var e = /[^.]+$/.exec(a && a.keys && a.keys.IE_PROTO || "");
                return e ? "Symbol(src)_1." + e : ""
            }();
        e.exports = r
    }, function (e, t, n) {
        var r = n(5),
            a = r["__core-js_shared__"];
        e.exports = a
    }, function (e, t) {
        function n(e, t) {
            return null == e ? void 0 : e[t]
        }
        e.exports = n
    }, function (e, t) {
        function n(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0, t
        }
        e.exports = n
    }, function (e, t, n) {
        function r(e) {
            var t = this.__data__;
            if (a) {
                var n = t[e];
                return n === i ? void 0 : n
            }
            return s.call(t, e) ? t[e] : void 0
        }
        var a = n(55),
            i = "__lodash_hash_undefined__",
            o = Object.prototype,
            s = o.hasOwnProperty;
        e.exports = r
    }, function (e, t, n) {
        function r(e) {
            var t = this.__data__;
            return a ? void 0 !== t[e] : o.call(t, e)
        }
        var a = n(55),
            i = Object.prototype,
            o = i.hasOwnProperty;
        e.exports = r
    }, function (e, t, n) {
        function r(e, t) {
            var n = this.__data__;
            return this.size += this.has(e) ? 0 : 1, n[e] = a && void 0 === t ? i : t, this
        }
        var a = n(55),
            i = "__lodash_hash_undefined__";
        e.exports = r
    }, function (e, t) {
        function n() {
            this.__data__ = [], this.size = 0
        }
        e.exports = n
    }, function (e, t, n) {
        function r(e) {
            var t = this.__data__,
                n = a(t, e);
            return !(n < 0) && (n == t.length - 1 ? t.pop() : o.call(t, n, 1), --this.size, !0)
        }
        var a = n(57),
            i = Array.prototype,
            o = i.splice;
        e.exports = r
    }, function (e, t, n) {
        function r(e) {
            var t = this.__data__,
                n = a(t, e);
            return n < 0 ? void 0 : t[n][1]
        }
        var a = n(57);
        e.exports = r
    }, function (e, t, n) {
        function r(e) {
            return a(this.__data__, e) > -1
        }
        var a = n(57);
        e.exports = r
    }, function (e, t, n) {
        function r(e, t) {
            var n = this.__data__,
                r = a(n, e);
            return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this
        }
        var a = n(57);
        e.exports = r
    }, function (e, t, n) {
        function r(e) {
            var t = a(this, e).delete(e);
            return this.size -= t ? 1 : 0, t
        }
        var a = n(58);
        e.exports = r
    }, function (e, t) {
        function n(e) {
            var t = typeof e;
            return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
        }
        e.exports = n
    }, function (e, t, n) {
        function r(e) {
            return a(this, e).get(e)
        }
        var a = n(58);
        e.exports = r
    }, function (e, t, n) {
        function r(e) {
            return a(this, e).has(e)
        }
        var a = n(58);
        e.exports = r
    }, function (e, t, n) {
        function r(e, t) {
            var n = a(this, e),
                r = n.size;
            return n.set(e, t), this.size += n.size == r ? 0 : 1, this
        }
        var a = n(58);
        e.exports = r
    }, function (e, t) {
        function n(e) {
            return this.__data__.set(e, r), this
        }
        var r = "__lodash_hash_undefined__";
        e.exports = n
    }, function (e, t) {
        function n(e) {
            return this.__data__.has(e)
        }
        e.exports = n
    }, function (e, t) {
        function n(e) {
            return e !== e
        }
        e.exports = n
    }, function (e, t) {
        function n(e, t, n) {
            for (var r = n - 1, a = e.length; ++r < a;)
                if (e[r] === t) return r;
            return -1
        }
        e.exports = n
    }, function (e, t, n) {
        var r = n(122),
            a = n(123),
            i = n(25),
            o = a ? function (e, t) {
                return a(e, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: r(t),
                    writable: !0
                })
            } : i;
        e.exports = o
    }, function (e, t, n) {
        function r(e) {
            return a(e) ? e : []
        }
        var a = n(90);
        e.exports = r
    }, function (e, t, n) {
        function r(e, t) {
            return e && a(e, i(t))
        }
        var a = n(44),
            i = n(91);
        e.exports = r
    }, function (e, t) {
        function n(e) {
            return function (t, n, r) {
                for (var a = -1, i = Object(t), o = r(t), s = o.length; s--;) {
                    var u = o[e ? s : ++a];
                    if (!1 === n(i[u], u, i)) break
                }
                return t
            }
        }
        e.exports = n
    }, function (e, t, n) {
        function r(e, t) {
            return function (n, r) {
                if (null == n) return n;
                if (!a(n)) return e(n, r);
                for (var i = n.length, o = t ? i : -1, s = Object(n);
                    (t ? o-- : ++o < i) && !1 !== r(s[o], o, s););
                return n
            }
        }
        var a = n(16);
        e.exports = r
    }, function (e, t, n) {
        function r(e, t) {
            var n = [];
            return a(e, function (e, r, a) {
                t(e, r, a) && n.push(e)
            }), n
        }
        var a = n(45);
        e.exports = r
    }, function (e, t, n) {
        function r(e) {
            var t = i(e);
            return 1 == t.length && t[0][2] ? o(t[0][0], t[0][1]) : function (n) {
                return n === e || a(n, e, t)
            }
        }
        var a = n(261),
            i = n(273),
            o = n(136);
        e.exports = r
    }, function (e, t, n) {
        function r(e, t, n, r) {
            var u = n.length,
                c = u,
                l = !r;
            if (null == e) return !c;
            for (e = Object(e); u--;) {
                var f = n[u];
                if (l && f[2] ? f[1] !== e[f[0]] : !(f[0] in e)) return !1
            }
            for (; ++u < c;) {
                f = n[u];
                var p = f[0],
                    d = e[p],
                    h = f[1];
                if (l && f[2]) {
                    if (void 0 === d && !(p in e)) return !1
                } else {
                    var m = new a;
                    if (r) var v = r(d, h, p, e, t, m);
                    if (!(void 0 === v ? i(h, d, o | s, r, m) : v)) return !1
                }
            }
            return !0
        }
        var a = n(60),
            i = n(93),
            o = 1,
            s = 2;
        e.exports = r
    }, function (e, t, n) {
        function r() {
            this.__data__ = new a, this.size = 0
        }
        var a = n(56);
        e.exports = r
    }, function (e, t) {
        function n(e) {
            var t = this.__data__,
                n = t.delete(e);
            return this.size = t.size, n
        }
        e.exports = n
    }, function (e, t) {
        function n(e) {
            return this.__data__.get(e)
        }
        e.exports = n
    }, function (e, t) {
        function n(e) {
            return this.__data__.has(e)
        }
        e.exports = n
    }, function (e, t, n) {
        function r(e, t) {
            var n = this.__data__;
            if (n instanceof a) {
                var r = n.__data__;
                if (!i || r.length < s - 1) return r.push([e, t]), this.size = ++n.size, this;
                n = this.__data__ = new o(r)
            }
            return n.set(e, t), this.size = n.size, this
        }
        var a = n(56),
            i = n(86),
            o = n(85),
            s = 200;
        e.exports = r
    }, function (e, t, n) {
        function r(e, t, n, r, v, y) {
            var b = c(e),
                _ = c(t),
                w = b ? h : u(e),
                P = _ ? h : u(t);
            w = w == d ? m : w, P = P == d ? m : P;
            var R = w == m,
                x = P == m,
                S = w == P;
            if (S && l(e)) {
                if (!l(t)) return !1;
                b = !0, R = !1
            }
            if (S && !R) return y || (y = new a), b || f(e) ? i(e, t, n, r, v, y) : o(e, t, w, n, r, v, y);
            if (!(n & p)) {
                var C = R && g.call(e, "__wrapped__"),
                    j = x && g.call(t, "__wrapped__");
                if (C || j) {
                    var O = C ? e.value() : e,
                        N = j ? t.value() : t;
                    return y || (y = new a), v(O, N, n, r, y)
                }
            }
            return !!S && (y || (y = new a), s(e, t, n, r, v, y))
        }
        var a = n(60),
            i = n(127),
            o = n(268),
            s = n(270),
            u = n(47),
            c = n(4),
            l = n(40),
            f = n(53),
            p = 1,
            d = "[object Arguments]",
            h = "[object Array]",
            m = "[object Object]",
            v = Object.prototype,
            g = v.hasOwnProperty;
        e.exports = r
    }, function (e, t, n) {
        function r(e, t, n, r, a, R, S) {
            switch (n) {
                case P:
                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                    e = e.buffer, t = t.buffer;
                case w:
                    return !(e.byteLength != t.byteLength || !R(new i(e), new i(t)));
                case p:
                case d:
                case v:
                    return o(+e, +t);
                case h:
                    return e.name == t.name && e.message == t.message;
                case g:
                case b:
                    return e == t + "";
                case m:
                    var C = u;
                case y:
                    var j = r & l;
                    if (C || (C = c), e.size != t.size && !j) return !1;
                    var O = S.get(e);
                    if (O) return O == t;
                    r |= f, S.set(e, t);
                    var N = s(C(e), C(t), r, a, R, S);
                    return S.delete(e), N;
                case _:
                    if (x) return x.call(e) == x.call(t)
            }
            return !1
        }
        var a = n(27),
            i = n(129),
            o = n(28),
            s = n(127),
            u = n(269),
            c = n(94),
            l = 1,
            f = 2,
            p = "[object Boolean]",
            d = "[object Date]",
            h = "[object Error]",
            m = "[object Map]",
            v = "[object Number]",
            g = "[object RegExp]",
            y = "[object Set]",
            b = "[object String]",
            _ = "[object Symbol]",
            w = "[object ArrayBuffer]",
            P = "[object DataView]",
            R = a ? a.prototype : void 0,
            x = R ? R.valueOf : void 0;
        e.exports = r
    }, function (e, t) {
        function n(e) {
            var t = -1,
                n = Array(e.size);
            return e.forEach(function (e, r) {
                n[++t] = [r, e]
            }), n
        }
        e.exports = n
    }, function (e, t, n) {
        function r(e, t, n, r, o, u) {
            var c = n & i,
                l = a(e),
                f = l.length;
            if (f != a(t).length && !c) return !1;
            for (var p = f; p--;) {
                var d = l[p];
                if (!(c ? d in t : s.call(t, d))) return !1
            }
            var h = u.get(e);
            if (h && u.get(t)) return h == t;
            var m = !0;
            u.set(e, t), u.set(t, e);
            for (var v = c; ++p < f;) {
                d = l[p];
                var g = e[d],
                    y = t[d];
                if (r) var b = c ? r(y, g, d, t, e, u) : r(g, y, d, e, t, u);
                if (!(void 0 === b ? g === y || o(g, y, n, r, u) : b)) {
                    m = !1;
                    break
                }
                v || (v = "constructor" == d)
            }
            if (m && !v) {
                var _ = e.constructor,
                    w = t.constructor;
                _ != w && "constructor" in e && "constructor" in t && !("function" == typeof _ && _ instanceof _ && "function" == typeof w && w instanceof w) && (m = !1)
            }
            return u.delete(e), u.delete(t), m
        }
        var a = n(130),
            i = 1,
            o = Object.prototype,
            s = o.hasOwnProperty;
        e.exports = r
    }, function (e, t, n) {
        var r = n(24),
            a = n(5),
            i = r(a, "DataView");
        e.exports = i
    }, function (e, t, n) {
        var r = n(24),
            a = n(5),
            i = r(a, "Promise");
        e.exports = i
    }, function (e, t, n) {
        function r(e) {
            for (var t = i(e), n = t.length; n--;) {
                var r = t[n],
                    o = e[r];
                t[n] = [r, o, a(o)]
            }
            return t
        }
        var a = n(135),
            i = n(14);
        e.exports = r
    }, function (e, t, n) {
        function r(e, t) {
            return s(e) && u(t) ? c(l(e), t) : function (n) {
                var r = i(n, e);
                return void 0 === r && r === t ? o(n, e) : a(t, r, f | p)
            }
        }
        var a = n(93),
            i = n(61),
            o = n(137),
            s = n(97),
            u = n(135),
            c = n(136),
            l = n(30),
            f = 1,
            p = 2;
        e.exports = r
    }, function (e, t, n) {
        var r = n(276),
            a = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            i = /\\(\\)?/g,
            o = r(function (e) {
                var t = [];
                return 46 === e.charCodeAt(0) && t.push(""), e.replace(a, function (e, n, r, a) {
                    t.push(r ? a.replace(i, "$1") : n || e)
                }), t
            });
        e.exports = o
    }, function (e, t, n) {
        function r(e) {
            var t = a(e, function (e) {
                    return n.size === i && n.clear(), e
                }),
                n = t.cache;
            return t
        }
        var a = n(277),
            i = 500;
        e.exports = r
    }, function (e, t, n) {
        function r(e, t) {
            if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError(i);
            var n = function () {
                var r = arguments,
                    a = t ? t.apply(this, r) : r[0],
                    i = n.cache;
                if (i.has(a)) return i.get(a);
                var o = e.apply(this, r);
                return n.cache = i.set(a, o) || i, o
            };
            return n.cache = new(r.Cache || a), n
        }
        var a = n(85),
            i = "Expected a function";
        r.Cache = a, e.exports = r
    }, function (e, t) {
        function n(e, t) {
            return null != e && t in Object(e)
        }
        e.exports = n
    }, function (e, t, n) {
        function r(e) {
            return o(e) ? a(s(e)) : i(e)
        }
        var a = n(280),
            i = n(281),
            o = n(97),
            s = n(30);
        e.exports = r
    }, function (e, t) {
        function n(e) {
            return function (t) {
                return null == t ? void 0 : t[e]
            }
        }
        e.exports = n
    }, function (e, t, n) {
        function r(e) {
            return function (t) {
                return a(t, e)
            }
        }
        var a = n(62);
        e.exports = r
    }, function (e, t) {
        function n(e, t, n, r) {
            var a = -1,
                i = null == e ? 0 : e.length;
            for (r && i && (n = e[++a]); ++a < i;) n = t(n, e[a], a, e);
            return n
        }
        e.exports = n
    }, function (e, t) {
        function n(e, t, n, r, a) {
            return a(e, function (e, a, i) {
                n = r ? (r = !1, e) : t(n, e, a, i)
            }), n
        }
        e.exports = n
    }, function (e, t, n) {
        function r(e, t) {
            return e && a(t, i(t), e)
        }
        var a = n(31),
            i = n(14);
        e.exports = r
    }, function (e, t, n) {
        function r(e, t) {
            return e && a(t, i(t), e)
        }
        var a = n(31),
            i = n(50);
        e.exports = r
    }, function (e, t, n) {
        function r(e) {
            if (!a(e)) return o(e);
            var t = i(e),
                n = [];
            for (var r in e)("constructor" != r || !t && u.call(e, r)) && n.push(r);
            return n
        }
        var a = n(7),
            i = n(54),
            o = n(287),
            s = Object.prototype,
            u = s.hasOwnProperty;
        e.exports = r
    }, function (e, t) {
        function n(e) {
            var t = [];
            if (null != e)
                for (var n in Object(e)) t.push(n);
            return t
        }
        e.exports = n
    }, function (e, t, n) {
        function r(e, t) {
            return a(e, i(e), t)
        }
        var a = n(31),
            i = n(96);
        e.exports = r
    }, function (e, t, n) {
        function r(e, t) {
            return a(e, i(e), t)
        }
        var a = n(31),
            i = n(143);
        e.exports = r
    }, function (e, t) {
        function n(e) {
            var t = e.length,
                n = new e.constructor(t);
            return t && "string" == typeof e[0] && a.call(e, "index") && (n.index = e.index, n.input = e.input), n
        }
        var r = Object.prototype,
            a = r.hasOwnProperty;
        e.exports = n
    }, function (e, t, n) {
        function r(e, t, n) {
            var r = e.constructor;
            switch (t) {
                case g:
                    return a(e);
                case c:
                case l:
                    return new r(+e);
                case y:
                    return i(e, n);
                case b:
                case _:
                case w:
                case P:
                case R:
                case x:
                case S:
                case C:
                case j:
                    return u(e, n);
                case f:
                    return new r;
                case p:
                case m:
                    return new r(e);
                case d:
                    return o(e);
                case h:
                    return new r;
                case v:
                    return s(e)
            }
        }
        var a = n(102),
            i = n(292),
            o = n(293),
            s = n(294),
            u = n(144),
            c = "[object Boolean]",
            l = "[object Date]",
            f = "[object Map]",
            p = "[object Number]",
            d = "[object RegExp]",
            h = "[object Set]",
            m = "[object String]",
            v = "[object Symbol]",
            g = "[object ArrayBuffer]",
            y = "[object DataView]",
            b = "[object Float32Array]",
            _ = "[object Float64Array]",
            w = "[object Int8Array]",
            P = "[object Int16Array]",
            R = "[object Int32Array]",
            x = "[object Uint8Array]",
            S = "[object Uint8ClampedArray]",
            C = "[object Uint16Array]",
            j = "[object Uint32Array]";
        e.exports = r
    }, function (e, t, n) {
        function r(e, t) {
            var n = t ? a(e.buffer) : e.buffer;
            return new e.constructor(n, e.byteOffset, e.byteLength)
        }
        var a = n(102);
        e.exports = r
    }, function (e, t) {
        function n(e) {
            var t = new e.constructor(e.source, r.exec(e));
            return t.lastIndex = e.lastIndex, t
        }
        var r = /\w*$/;
        e.exports = n
    }, function (e, t, n) {
        function r(e) {
            return o ? Object(o.call(e)) : {}
        }
        var a = n(27),
            i = a ? a.prototype : void 0,
            o = i ? i.valueOf : void 0;
        e.exports = r
    }, function (e, t, n) {
        var r = n(296),
            a = n(42),
            i = n(83),
            o = i && i.isMap,
            s = o ? a(o) : r;
        e.exports = s
    }, function (e, t, n) {
        function r(e) {
            return i(e) && a(e) == o
        }
        var a = n(47),
            i = n(6),
            o = "[object Map]";
        e.exports = r
    }, function (e, t, n) {
        var r = n(298),
            a = n(42),
            i = n(83),
            o = i && i.isSet,
            s = o ? a(o) : r;
        e.exports = s
    }, function (e, t, n) {
        function r(e) {
            return i(e) && a(e) == o
        }
        var a = n(47),
            i = n(6),
            o = "[object Set]";
        e.exports = r
    }, function (e, t, n) {
        function r(e, t) {
            return t = a(t, e), null == (e = o(e, t)) || delete e[s(i(t))]
        }
        var a = n(29),
            i = n(146),
            o = n(300),
            s = n(30);
        e.exports = r
    }, function (e, t, n) {
        function r(e, t) {
            return t.length < 2 ? e : a(e, i(t, 0, -1))
        }
        var a = n(62),
            i = n(147);
        e.exports = r
    }, function (e, t, n) {
        function r(e) {
            return a(e) ? void 0 : e
        }
        var a = n(23);
        e.exports = r
    }, function (e, t, n) {
        function r(e) {
            return o(e) || i(e) || !!(s && e && e[s])
        }
        var a = n(27),
            i = n(38),
            o = n(4),
            s = a ? a.isConcatSpreadable : void 0;
        e.exports = r
    }, function (e, t, n) {
        function r(e) {
            if ("number" == typeof e) return e;
            if (i(e)) return o;
            if (a(e)) {
                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = a(t) ? t + "" : t
            }
            if ("string" != typeof e) return 0 === e ? e : +e;
            e = e.replace(s, "");
            var n = c.test(e);
            return n || l.test(e) ? f(e.slice(2), n ? 2 : 8) : u.test(e) ? o : +e
        }
        var a = n(7),
            i = n(48),
            o = NaN,
            s = /^\s+|\s+$/g,
            u = /^[-+]0x[0-9a-f]+$/i,
            c = /^0b[01]+$/i,
            l = /^0o[0-7]+$/i,
            f = parseInt;
        e.exports = r
    }, function (e, t, n) {
        function r(e) {
            return a(e) && e != +e
        }
        var a = n(152);
        e.exports = r
    }, function (e, t, n) {
        function r(e) {
            return function (t, n, r) {
                var s = Object(t);
                if (!i(t)) {
                    var u = a(n, 3);
                    t = o(t), n = function (e) {
                        return u(s[e], e, s)
                    }
                }
                var c = e(t, n, r);
                return c > -1 ? s[u ? t[c] : c] : void 0
            }
        }
        var a = n(10),
            i = n(16),
            o = n(14);
        e.exports = r
    }, function (e, t, n) {
        function r(e, t, n) {
            var r = e.length;
            return n = void 0 === n ? r : n, !t && n >= r ? e : a(e, t, n)
        }
        var a = n(147);
        e.exports = r
    }, function (e, t, n) {
        function r(e, t) {
            for (var n = e.length; n-- && a(t, e[n], 0) > -1;);
            return n
        }
        var a = n(43);
        e.exports = r
    }, function (e, t, n) {
        function r(e, t) {
            for (var n = -1, r = e.length; ++n < r && a(t, e[n], 0) > -1;);
            return n
        }
        var a = n(43);
        e.exports = r
    }, function (e, t, n) {
        function r(e) {
            return i(e) ? o(e) : a(e)
        }
        var a = n(310),
            i = n(311),
            o = n(312);
        e.exports = r
    }, function (e, t) {
        function n(e) {
            return e.split("")
        }
        e.exports = n
    }, function (e, t) {
        function n(e) {
            return r.test(e)
        }
        var r = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
        e.exports = n
    }, function (e, t) {
        function n(e) {
            return e.match(f) || []
        }
        var r = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
            a = "\\ud83c[\\udffb-\\udfff]",
            i = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            o = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            s = "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",
            u = "(?:\\u200d(?:" + ["[^\\ud800-\\udfff]", i, o].join("|") + ")[\\ufe0e\\ufe0f]?" + s + ")*",
            c = "[\\ufe0e\\ufe0f]?" + s + u,
            l = "(?:" + ["[^\\ud800-\\udfff]" + r + "?", r, i, o, "[\\ud800-\\udfff]"].join("|") + ")",
            f = RegExp(a + "(?=" + a + ")|" + l + c, "g");
        e.exports = n
    }, function (e, t, n) {
        function r(e, t, n, r, b, _, w) {
            var P = g(e, n),
                R = g(t, n),
                x = w.get(R);
            if (x) return void a(e, n, x);
            var S = _ ? _(P, R, n + "", e, t, w) : void 0,
                C = void 0 === S;
            if (C) {
                var j = l(R),
                    O = !j && p(R),
                    N = !j && !O && v(R);
                S = R, j || O || N ? l(P) ? S = P : f(P) ? S = s(P) : O ? (C = !1, S = i(R, !0)) : N ? (C = !1, S = o(R, !0)) : S = [] : m(R) || c(R) ? (S = P, c(P) ? S = y(P) : (!h(P) || r && d(P)) && (S = u(R))) : C = !1
            }
            C && (w.set(R, S), b(S, R, r, _, w), w.delete(R)), a(e, n, S)
        }
        var a = n(155),
            i = n(142),
            o = n(144),
            s = n(64),
            u = n(145),
            c = n(38),
            l = n(4),
            f = n(90),
            p = n(40),
            d = n(17),
            h = n(7),
            m = n(23),
            v = n(53),
            g = n(156),
            y = n(314);
        e.exports = r
    }, function (e, t, n) {
        function r(e) {
            return a(e, i(e))
        }
        var a = n(31),
            i = n(50);
        e.exports = r
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            if (i(e)) return e;
            if (o(e)) return parseFloat(e);
            if (Array.isArray(e)) return a(e, r);
            throw new Error("The value should be a number, a parseable string or an array of those.")
        }
        var a = n(11),
            i = n(152),
            o = n(26);
        e.exports = r
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            var n = {},
                r = i(t, function (e) {
                    return -1 !== e.indexOf("attribute:")
                }),
                c = o(r, function (e) {
                    return e.split(":")[1]
                }); - 1 === u(c, "*") ? a(c, function (t) {
                e.isConjunctiveFacet(t) && e.isFacetRefined(t) && (n.facetsRefinements || (n.facetsRefinements = {}), n.facetsRefinements[t] = e.facetsRefinements[t]), e.isDisjunctiveFacet(t) && e.isDisjunctiveFacetRefined(t) && (n.disjunctiveFacetsRefinements || (n.disjunctiveFacetsRefinements = {}), n.disjunctiveFacetsRefinements[t] = e.disjunctiveFacetsRefinements[t]), e.isHierarchicalFacet(t) && e.isHierarchicalFacetRefined(t) && (n.hierarchicalFacetsRefinements || (n.hierarchicalFacetsRefinements = {}), n.hierarchicalFacetsRefinements[t] = e.hierarchicalFacetsRefinements[t]);
                var r = e.getNumericRefinements(t);
                s(r) || (n.numericRefinements || (n.numericRefinements = {}), n.numericRefinements[t] = e.numericRefinements[t])
            }) : (s(e.numericRefinements) || (n.numericRefinements = e.numericRefinements), s(e.facetsRefinements) || (n.facetsRefinements = e.facetsRefinements), s(e.disjunctiveFacetsRefinements) || (n.disjunctiveFacetsRefinements = e.disjunctiveFacetsRefinements), s(e.hierarchicalFacetsRefinements) || (n.hierarchicalFacetsRefinements = e.hierarchicalFacetsRefinements));
            var l = i(t, function (e) {
                return -1 === e.indexOf("attribute:")
            });
            return a(l, function (t) {
                n[t] = e[t]
            }), n
        }
        var a = n(18),
            i = n(46),
            o = n(11),
            s = n(33),
            u = n(66);
        e.exports = r
    }, function (e, t, n) {
        "use strict";
        var r = n(67),
            a = n(26),
            i = n(17),
            o = n(33),
            s = n(68),
            u = n(19),
            c = n(46),
            l = n(140),
            f = {
                addRefinement: function (e, t, n) {
                    if (f.isRefined(e, t, n)) return e;
                    var r = "" + n,
                        a = e[t] ? e[t].concat(r) : [r],
                        i = {};
                    return i[t] = a, s({}, i, e)
                },
                removeRefinement: function (e, t, n) {
                    if (r(n)) return f.clearRefinement(e, t);
                    var a = "" + n;
                    return f.clearRefinement(e, function (e, n) {
                        return t === n && a === e
                    })
                },
                toggleRefinement: function (e, t, n) {
                    if (r(n)) throw new Error("toggleRefinement should be used with a value");
                    return f.isRefined(e, t, n) ? f.removeRefinement(e, t, n) : f.addRefinement(e, t, n)
                },
                clearRefinement: function (e, t, n) {
                    if (r(t)) return o(e) ? e : {};
                    if (a(t)) return o(e[t]) ? e : l(e, t);
                    if (i(t)) {
                        var s = !1,
                            f = u(e, function (e, r, a) {
                                var i = c(r, function (e) {
                                    return !t(e, a, n)
                                });
                                return o(i) ? s = !0 : (i.length !== r.length && (s = !0), e[a] = i), e
                            }, {});
                        return s ? f : e
                    }
                },
                isRefined: function (e, t, a) {
                    var i = n(66),
                        o = !!e[t] && e[t].length > 0;
                    if (r(a) || !o) return o;
                    var s = "" + a;
                    return -1 !== i(e[t], s)
                }
            };
        e.exports = f
    }, function (e, t) {
        function n(e) {
            for (var t = -1, n = null == e ? 0 : e.length, r = 0, a = []; ++t < n;) {
                var i = e[t];
                i && (a[r++] = i)
            }
            return a
        }
        e.exports = n
    }, function (e, t, n) {
        function r(e, t) {
            return e && e.length ? i(e, a(t, 2)) : 0
        }
        var a = n(10),
            i = n(320);
        e.exports = r
    }, function (e, t) {
        function n(e, t) {
            for (var n, r = -1, a = e.length; ++r < a;) {
                var i = t(e[r]);
                void 0 !== i && (n = void 0 === n ? i : n + i)
            }
            return n
        }
        e.exports = n
    }, function (e, t, n) {
        function r(e, t, n, r) {
            e = i(e) ? e : u(e), n = n && !r ? s(n) : 0;
            var l = e.length;
            return n < 0 && (n = c(l + n, 0)), o(e) ? n <= l && e.indexOf(t, n) > -1 : !!l && a(e, t, n) > -1
        }
        var a = n(43),
            i = n(16),
            o = n(26),
            s = n(32),
            u = n(322),
            c = Math.max;
        e.exports = r
    }, function (e, t, n) {
        function r(e) {
            return null == e ? [] : a(e, i(e))
        }
        var a = n(323),
            i = n(14);
        e.exports = r
    }, function (e, t, n) {
        function r(e, t) {
            return a(t, function (t) {
                return e[t]
            })
        }
        var a = n(21);
        e.exports = r
    }, function (e, t, n) {
        function r(e, t, n) {
            var r = -1;
            t = a(t.length ? t : [l], u(i));
            var f = o(e, function (e, n, i) {
                return {
                    criteria: a(t, function (t) {
                        return t(e)
                    }),
                    index: ++r,
                    value: e
                }
            });
            return s(f, function (e, t) {
                return c(e, t, n)
            })
        }
        var a = n(21),
            i = n(10),
            o = n(139),
            s = n(325),
            u = n(42),
            c = n(326),
            l = n(25);
        e.exports = r
    }, function (e, t) {
        function n(e, t) {
            var n = e.length;
            for (e.sort(t); n--;) e[n] = e[n].value;
            return e
        }
        e.exports = n
    }, function (e, t, n) {
        function r(e, t, n) {
            for (var r = -1, i = e.criteria, o = t.criteria, s = i.length, u = n.length; ++r < s;) {
                var c = a(i[r], o[r]);
                if (c) {
                    if (r >= u) return c;
                    return c * ("desc" == n[r] ? -1 : 1)
                }
            }
            return e.index - t.index
        }
        var a = n(327);
        e.exports = r
    }, function (e, t, n) {
        function r(e, t) {
            if (e !== t) {
                var n = void 0 !== e,
                    r = null === e,
                    i = e === e,
                    o = a(e),
                    s = void 0 !== t,
                    u = null === t,
                    c = t === t,
                    l = a(t);
                if (!u && !l && !o && e > t || o && s && c && !u && !l || r && s && c || !n && c || !i) return 1;
                if (!r && !o && !l && e < t || l && n && i && !r && !o || u && n && i || !s && i || !c) return -1
            }
            return 0
        }
        var a = n(48);
        e.exports = r
    }, function (e, t, n) {
        var r = n(22),
            a = n(70),
            i = n(51),
            o = n(34),
            s = r(function (e, t) {
                var n = o(t, i(s));
                return a(e, 32, void 0, t, n)
            });
        s.placeholder = {}, e.exports = s
    }, function (e, t, n) {
        function r(e, t, n) {
            function r() {
                return (this && this !== i && this instanceof r ? u : e).apply(s ? n : this, arguments)
            }
            var s = t & o,
                u = a(e);
            return r
        }
        var a = n(71),
            i = n(5),
            o = 1;
        e.exports = r
    }, function (e, t, n) {
        function r(e, t, n) {
            function r() {
                for (var i = arguments.length, p = Array(i), d = i, h = u(r); d--;) p[d] = arguments[d];
                var m = i < 3 && p[0] !== h && p[i - 1] !== h ? [] : c(p, h);
                return (i -= m.length) < n ? s(e, t, o, r.placeholder, void 0, p, m, void 0, void 0, n - i) : a(this && this !== l && this instanceof r ? f : e, this, p)
            }
            var f = i(e);
            return r
        }
        var a = n(59),
            i = n(71),
            o = n(162),
            s = n(165),
            u = n(51),
            c = n(34),
            l = n(5);
        e.exports = r
    }, function (e, t) {
        function n(e, t) {
            for (var n = e.length, r = 0; n--;) e[n] === t && ++r;
            return r
        }
        e.exports = n
    }, function (e, t, n) {
        function r(e) {
            var t = o(e),
                n = s[t];
            if ("function" != typeof n || !(t in a.prototype)) return !1;
            if (e === n) return !0;
            var r = i(n);
            return !!r && e === r[0]
        }
        var a = n(105),
            i = n(166),
            o = n(333),
            s = n(335);
        e.exports = r
    }, function (e, t, n) {
        function r(e) {
            for (var t = e.name + "", n = a[t], r = o.call(a, t) ? n.length : 0; r--;) {
                var i = n[r],
                    s = i.func;
                if (null == s || s == e) return i.name
            }
            return t
        }
        var a = n(334),
            i = Object.prototype,
            o = i.hasOwnProperty;
        e.exports = r
    }, function (e, t) {
        var n = {};
        e.exports = n
    }, function (e, t, n) {
        function r(e) {
            if (u(e) && !s(e) && !(e instanceof a)) {
                if (e instanceof i) return e;
                if (f.call(e, "__wrapped__")) return c(e)
            }
            return new i(e)
        }
        var a = n(105),
            i = n(167),
            o = n(106),
            s = n(4),
            u = n(6),
            c = n(336),
            l = Object.prototype,
            f = l.hasOwnProperty;
        r.prototype = o.prototype, r.prototype.constructor = r, e.exports = r
    }, function (e, t, n) {
        function r(e) {
            if (e instanceof a) return e.clone();
            var t = new i(e.__wrapped__, e.__chain__);
            return t.__actions__ = o(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
        }
        var a = n(105),
            i = n(167),
            o = n(64);
        e.exports = r
    }, function (e, t) {
        function n(e) {
            var t = e.match(r);
            return t ? t[1].split(a) : []
        }
        var r = /\{\n\/\* \[wrapped with (.+)\] \*/,
            a = /,? & /;
        e.exports = n
    }, function (e, t) {
        function n(e, t) {
            var n = t.length;
            if (!n) return e;
            var a = n - 1;
            return t[a] = (n > 1 ? "& " : "") + t[a], t = t.join(n > 2 ? ", " : " "), e.replace(r, "{\n/* [wrapped with " + t + "] */\n")
        }
        var r = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
        e.exports = n
    }, function (e, t, n) {
        function r(e, t) {
            return a(o, function (n) {
                var r = "_." + n[0];
                t & n[1] && !i(e, r) && e.push(r)
            }), e.sort()
        }
        var a = n(92),
            i = n(87),
            o = [
                ["ary", 128],
                ["bind", 1],
                ["bindKey", 2],
                ["curry", 8],
                ["curryRight", 16],
                ["flip", 512],
                ["partial", 32],
                ["partialRight", 64],
                ["rearg", 256]
            ];
        e.exports = r
    }, function (e, t, n) {
        function r(e, t) {
            for (var n = e.length, r = o(t.length, n), s = a(e); r--;) {
                var u = t[r];
                e[r] = i(u, n) ? s[u] : void 0
            }
            return e
        }
        var a = n(64),
            i = n(41),
            o = Math.min;
        e.exports = r
    }, function (e, t, n) {
        function r(e, t, n, r) {
            function u() {
                for (var t = -1, i = arguments.length, s = -1, f = r.length, p = Array(f + i), d = this && this !== o && this instanceof u ? l : e; ++s < f;) p[s] = r[s];
                for (; i--;) p[s++] = arguments[++t];
                return a(d, c ? n : this, p)
            }
            var c = t & s,
                l = i(e);
            return u
        }
        var a = n(59),
            i = n(71),
            o = n(5),
            s = 1;
        e.exports = r
    }, function (e, t, n) {
        function r(e, t) {
            var n = e[1],
                r = t[1],
                m = n | r,
                v = m < (u | c | p),
                g = r == p && n == f || r == p && n == d && e[7].length <= t[8] || r == (p | d) && t[7].length <= t[8] && n == f;
            if (!v && !g) return e;
            r & u && (e[2] = t[2], m |= n & u ? 0 : l);
            var y = t[3];
            if (y) {
                var b = e[3];
                e[3] = b ? a(b, y, t[4]) : y, e[4] = b ? o(e[3], s) : t[4]
            }
            return y = t[5], y && (b = e[5], e[5] = b ? i(b, y, t[6]) : y, e[6] = b ? o(e[5], s) : t[6]), y = t[7], y && (e[7] = y), r & p && (e[8] = null == e[8] ? t[8] : h(e[8], t[8])), null == e[9] && (e[9] = t[9]), e[0] = t[0], e[1] = m, e
        }
        var a = n(163),
            i = n(164),
            o = n(34),
            s = "__lodash_placeholder__",
            u = 1,
            c = 2,
            l = 4,
            f = 8,
            p = 128,
            d = 256,
            h = Math.min;
        e.exports = r
    }, function (e, t, n) {
        var r = n(22),
            a = n(70),
            i = n(51),
            o = n(34),
            s = r(function (e, t) {
                var n = o(t, i(s));
                return a(e, 64, void 0, t, n)
            });
        s.placeholder = {}, e.exports = s
    }, function (e, t, n) {
        function r(e, t, n) {
            return e = s(e), n = null == n ? 0 : a(o(n), 0, e.length), t = i(t), e.slice(n, n + t.length) == t
        }
        var a = n(345),
            i = n(98),
            o = n(32),
            s = n(63);
        e.exports = r
    }, function (e, t) {
        function n(e, t, n) {
            return e === e && (void 0 !== n && (e = e <= n ? e : n), void 0 !== t && (e = e >= t ? e : t)), e
        }
        e.exports = n
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return function (t, n) {
                var r = e.hierarchicalFacets[n],
                    i = e.hierarchicalFacetsRefinements[r.name] && e.hierarchicalFacetsRefinements[r.name][0] || "",
                    o = e._getHierarchicalFacetSeparator(r),
                    s = e._getHierarchicalRootPath(r),
                    u = e._getHierarchicalShowParentLevel(r),
                    l = h(e._getHierarchicalFacetSortBy(r)),
                    f = a(l, o, s, u, i),
                    p = t;
                return s && (p = t.slice(s.split(o).length)), c(p, f, {
                    name: e.hierarchicalFacets[n].name,
                    count: null,
                    isRefined: !0,
                    path: null,
                    data: null
                })
            }
        }

        function a(e, t, n, r, a) {
            return function (s, c, f) {
                var h = s;
                if (f > 0) {
                    var m = 0;
                    for (h = s; m < f;) h = h && p(h.data, {
                        isRefined: !0
                    }), m++
                }
                if (h) {
                    var v = i(h.path || n, a, t, n, r);
                    h.data = l(u(d(c.data, v), o(t, a)), e[0], e[1])
                }
                return s
            }
        }

        function i(e, t, n, r, a) {
            return function (i, o) {
                return (!r || 0 === o.indexOf(r) && r !== o) && (!r && -1 === o.indexOf(n) || r && o.split(n).length - r.split(n).length === 1 || -1 === o.indexOf(n) && -1 === t.indexOf(n) || 0 === t.indexOf(o) || 0 === o.indexOf(e + n) && (a || 0 === o.indexOf(t)))
            }
        }

        function o(e, t) {
            return function (n, r) {
                return {
                    name: f(s(r.split(e))),
                    path: r,
                    count: n,
                    isRefined: t === r || 0 === t.indexOf(r + e),
                    data: null
                }
            }
        }
        e.exports = r;
        var s = n(146),
            u = n(11),
            c = n(19),
            l = n(159),
            f = n(154),
            p = n(9),
            d = n(347),
            h = n(170)
    }, function (e, t, n) {
        function r(e, t) {
            if (null == e) return {};
            var n = a(s(e), function (e) {
                return [e]
            });
            return t = i(t), o(e, n, function (e, n) {
                return t(e, n[0])
            })
        }
        var a = n(21),
            i = n(10),
            o = n(171),
            s = n(101);
        e.exports = r
    }, function (e, t, n) {
        function r(e, t, n, r) {
            if (!s(e)) return e;
            t = i(t, e);
            for (var c = -1, l = t.length, f = l - 1, p = e; null != p && ++c < l;) {
                var d = u(t[c]),
                    h = n;
                if (c != f) {
                    var m = p[d];
                    h = r ? r(m, d, p) : void 0, void 0 === h && (h = s(m) ? m : o(t[c + 1]) ? [] : {})
                }
                a(p, d, h), p = p[d]
            }
            return e
        }
        var a = n(99),
            i = n(29),
            o = n(41),
            s = n(7),
            u = n(30);
        e.exports = r
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            this.main = e, this.fn = t, this.lastResults = null
        }
        var a = n(172),
            i = n(107);
        a.inherits(r, i.EventEmitter), r.prototype.detach = function () {
            this.removeAllListeners(), this.main.detachDerivedHelper(this)
        }, r.prototype.getModifiedState = function (e) {
            return this.fn(e)
        }, e.exports = r
    }, function (e, t) {
        e.exports = function (e) {
            return e && "object" === typeof e && "function" === typeof e.copy && "function" === typeof e.fill && "function" === typeof e.readUInt8
        }
    }, function (e, t) {
        "function" === typeof Object.create ? e.exports = function (e, t) {
            e.super_ = t, e.prototype = Object.create(t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            })
        } : e.exports = function (e, t) {
            e.super_ = t;
            var n = function () {};
            n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(18),
            a = n(11),
            i = n(19),
            o = n(103),
            s = {
                _getQueries: function (e, t) {
                    var n = [];
                    return n.push({
                        indexName: e,
                        params: s._getHitsSearchParams(t)
                    }), r(t.getRefinedDisjunctiveFacets(), function (r) {
                        n.push({
                            indexName: e,
                            params: s._getDisjunctiveFacetSearchParams(t, r)
                        })
                    }), r(t.getRefinedHierarchicalFacets(), function (r) {
                        var a = t.getHierarchicalFacetByName(r),
                            i = t.getHierarchicalRefinement(r),
                            o = t._getHierarchicalFacetSeparator(a);
                        i.length > 0 && i[0].split(o).length > 1 && n.push({
                            indexName: e,
                            params: s._getDisjunctiveFacetSearchParams(t, r, !0)
                        })
                    }), n
                },
                _getHitsSearchParams: function (e) {
                    var t = e.facets.concat(e.disjunctiveFacets).concat(s._getHitsHierarchicalFacetsAttributes(e)),
                        n = s._getFacetFilters(e),
                        r = s._getNumericFilters(e),
                        a = s._getTagFilters(e),
                        i = {
                            facets: t,
                            tagFilters: a
                        };
                    return n.length > 0 && (i.facetFilters = n), r.length > 0 && (i.numericFilters = r), o(e.getQueryParams(), i)
                },
                _getDisjunctiveFacetSearchParams: function (e, t, n) {
                    var r = s._getFacetFilters(e, t, n),
                        a = s._getNumericFilters(e, t),
                        i = s._getTagFilters(e),
                        u = {
                            hitsPerPage: 1,
                            page: 0,
                            attributesToRetrieve: [],
                            attributesToHighlight: [],
                            attributesToSnippet: [],
                            tagFilters: i,
                            analytics: !1,
                            clickAnalytics: !1
                        },
                        c = e.getHierarchicalFacetByName(t);
                    return u.facets = c ? s._getDisjunctiveHierarchicalFacetAttribute(e, c, n) : t, a.length > 0 && (u.numericFilters = a), r.length > 0 && (u.facetFilters = r), o(e.getQueryParams(), u)
                },
                _getNumericFilters: function (e, t) {
                    if (e.numericFilters) return e.numericFilters;
                    var n = [];
                    return r(e.numericRefinements, function (e, i) {
                        r(e, function (e, o) {
                            t !== i && r(e, function (e) {
                                if (Array.isArray(e)) {
                                    var t = a(e, function (e) {
                                        return i + o + e
                                    });
                                    n.push(t)
                                } else n.push(i + o + e)
                            })
                        })
                    }), n
                },
                _getTagFilters: function (e) {
                    return e.tagFilters ? e.tagFilters : e.tagRefinements.join(",")
                },
                _getFacetFilters: function (e, t, n) {
                    var a = [];
                    return r(e.facetsRefinements, function (e, t) {
                        r(e, function (e) {
                            a.push(t + ":" + e)
                        })
                    }), r(e.facetsExcludes, function (e, t) {
                        r(e, function (e) {
                            a.push(t + ":-" + e)
                        })
                    }), r(e.disjunctiveFacetsRefinements, function (e, n) {
                        if (n !== t && e && 0 !== e.length) {
                            var i = [];
                            r(e, function (e) {
                                i.push(n + ":" + e)
                            }), a.push(i)
                        }
                    }), r(e.hierarchicalFacetsRefinements, function (r, i) {
                        var o = r[0];
                        if (void 0 !== o) {
                            var s, u, c = e.getHierarchicalFacetByName(i),
                                l = e._getHierarchicalFacetSeparator(c),
                                f = e._getHierarchicalRootPath(c);
                            if (t === i) {
                                if (-1 === o.indexOf(l) || !f && !0 === n || f && f.split(l).length === o.split(l).length) return;
                                f ? (u = f.split(l).length - 1, o = f) : (u = o.split(l).length - 2, o = o.slice(0, o.lastIndexOf(l))), s = c.attributes[u]
                            } else u = o.split(l).length - 1, s = c.attributes[u];
                            s && a.push([s + ":" + o])
                        }
                    }), a
                },
                _getHitsHierarchicalFacetsAttributes: function (e) {
                    var t = [];
                    return i(e.hierarchicalFacets, function (t, n) {
                        var r = e.getHierarchicalRefinement(n.name)[0];
                        if (!r) return t.push(n.attributes[0]), t;
                        var a = e._getHierarchicalFacetSeparator(n),
                            i = r.split(a).length,
                            o = n.attributes.slice(0, i + 1);
                        return t.concat(o)
                    }, t)
                },
                _getDisjunctiveHierarchicalFacetAttribute: function (e, t, n) {
                    var r = e._getHierarchicalFacetSeparator(t);
                    if (!0 === n) {
                        var a = e._getHierarchicalRootPath(t),
                            i = 0;
                        return a && (i = a.split(r).length), [t.attributes[i]]
                    }
                    var o = e.getHierarchicalRefinement(t.name)[0] || "",
                        s = o.split(r).length - 1;
                    return t.attributes.slice(0, s + 1)
                },
                getSearchForFacetQuery: function (e, t, n, r) {
                    var a = r.isDisjunctiveFacet(e) ? r.clearRefinements(e) : r,
                        i = {
                            facetQuery: t,
                            facetName: e
                        };
                    return "number" === typeof n && (i.maxFacetHits = n), o(s._getHitsSearchParams(a), i)
                }
            };
        e.exports = s
    }, function (e, t, n) {
        "use strict";
        var r = n(173),
            a = n(14),
            i = {
                advancedSyntax: "aS",
                allowTyposOnNumericTokens: "aTONT",
                analyticsTags: "aT",
                analytics: "a",
                aroundLatLngViaIP: "aLLVIP",
                aroundLatLng: "aLL",
                aroundPrecision: "aP",
                aroundRadius: "aR",
                attributesToHighlight: "aTH",
                attributesToRetrieve: "aTR",
                attributesToSnippet: "aTS",
                disjunctiveFacetsRefinements: "dFR",
                disjunctiveFacets: "dF",
                distinct: "d",
                facetsExcludes: "fE",
                facetsRefinements: "fR",
                facets: "f",
                getRankingInfo: "gRI",
                hierarchicalFacetsRefinements: "hFR",
                hierarchicalFacets: "hF",
                highlightPostTag: "hPoT",
                highlightPreTag: "hPrT",
                hitsPerPage: "hPP",
                ignorePlurals: "iP",
                index: "idx",
                insideBoundingBox: "iBB",
                insidePolygon: "iPg",
                length: "l",
                maxValuesPerFacet: "mVPF",
                minimumAroundRadius: "mAR",
                minProximity: "mP",
                minWordSizefor1Typo: "mWS1T",
                minWordSizefor2Typos: "mWS2T",
                numericFilters: "nF",
                numericRefinements: "nR",
                offset: "o",
                optionalWords: "oW",
                page: "p",
                queryType: "qT",
                query: "q",
                removeWordsIfNoResults: "rWINR",
                replaceSynonymsInHighlight: "rSIH",
                restrictSearchableAttributes: "rSA",
                synonyms: "s",
                tagFilters: "tF",
                tagRefinements: "tR",
                typoTolerance: "tT",
                optionalTagFilters: "oTF",
                optionalFacetFilters: "oFF",
                snippetEllipsisText: "sET",
                disableExactOnAttributes: "dEOA",
                enableExactOnSingleWordQuery: "eEOSWQ"
            },
            o = r(i);
        e.exports = {
            ENCODED_PARAMETERS: a(o),
            decode: function (e) {
                return o[e]
            },
            encode: function (e) {
                return i[e]
            }
        }
    }, function (e, t, n) {
        function r(e, t) {
            return function (n, r) {
                return a(n, e, t(r), {})
            }
        }
        var a = n(355);
        e.exports = r
    }, function (e, t, n) {
        function r(e, t, n, r) {
            return a(e, function (e, a, i) {
                t(r, n(e), a, i)
            }), r
        }
        var a = n(44);
        e.exports = r
    }, function (e, t, n) {
        "use strict";
        var r = n(109),
            a = n(175),
            i = {
                brackets: function (e) {
                    return e + "[]"
                },
                indices: function (e, t) {
                    return e + "[" + t + "]"
                },
                repeat: function (e) {
                    return e
                }
            },
            o = Date.prototype.toISOString,
            s = {
                delimiter: "&",
                encode: !0,
                encoder: r.encode,
                encodeValuesOnly: !1,
                serializeDate: function (e) {
                    return o.call(e)
                },
                skipNulls: !1,
                strictNullHandling: !1
            },
            u = function e(t, n, a, i, o, u, c, l, f, p, d, h) {
                var m = t;
                if ("function" === typeof c) m = c(n, m);
                else if (m instanceof Date) m = p(m);
                else if (null === m) {
                    if (i) return u && !h ? u(n, s.encoder) : n;
                    m = ""
                }
                if ("string" === typeof m || "number" === typeof m || "boolean" === typeof m || r.isBuffer(m)) {
                    if (u) {
                        return [d(h ? n : u(n, s.encoder)) + "=" + d(u(m, s.encoder))]
                    }
                    return [d(n) + "=" + d(String(m))]
                }
                var v = [];
                if ("undefined" === typeof m) return v;
                var g;
                if (Array.isArray(c)) g = c;
                else {
                    var y = Object.keys(m);
                    g = l ? y.sort(l) : y
                }
                for (var b = 0; b < g.length; ++b) {
                    var _ = g[b];
                    o && null === m[_] || (v = Array.isArray(m) ? v.concat(e(m[_], a(n, _), a, i, o, u, c, l, f, p, d, h)) : v.concat(e(m[_], n + (f ? "." + _ : "[" + _ + "]"), a, i, o, u, c, l, f, p, d, h)))
                }
                return v
            };
        e.exports = function (e, t) {
            var n = e,
                o = t ? r.assign({}, t) : {};
            if (null !== o.encoder && void 0 !== o.encoder && "function" !== typeof o.encoder) throw new TypeError("Encoder has to be a function.");
            var c = "undefined" === typeof o.delimiter ? s.delimiter : o.delimiter,
                l = "boolean" === typeof o.strictNullHandling ? o.strictNullHandling : s.strictNullHandling,
                f = "boolean" === typeof o.skipNulls ? o.skipNulls : s.skipNulls,
                p = "boolean" === typeof o.encode ? o.encode : s.encode,
                d = "function" === typeof o.encoder ? o.encoder : s.encoder,
                h = "function" === typeof o.sort ? o.sort : null,
                m = "undefined" !== typeof o.allowDots && o.allowDots,
                v = "function" === typeof o.serializeDate ? o.serializeDate : s.serializeDate,
                g = "boolean" === typeof o.encodeValuesOnly ? o.encodeValuesOnly : s.encodeValuesOnly;
            if ("undefined" === typeof o.format) o.format = a.default;
            else if (!Object.prototype.hasOwnProperty.call(a.formatters, o.format)) throw new TypeError("Unknown format option provided.");
            var y, b, _ = a.formatters[o.format];
            "function" === typeof o.filter ? (b = o.filter, n = b("", n)) : Array.isArray(o.filter) && (b = o.filter, y = b);
            var w = [];
            if ("object" !== typeof n || null === n) return "";
            var P;
            P = o.arrayFormat in i ? o.arrayFormat : "indices" in o ? o.indices ? "indices" : "repeat" : "indices";
            var R = i[P];
            y || (y = Object.keys(n)), h && y.sort(h);
            for (var x = 0; x < y.length; ++x) {
                var S = y[x];
                f && null === n[S] || (w = w.concat(u(n[S], S, R, l, f, p ? d : null, b, h, m, v, _, g)))
            }
            var C = w.join(c),
                j = !0 === o.addQueryPrefix ? "?" : "";
            return C.length > 0 ? j + C : ""
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(109),
            a = Object.prototype.hasOwnProperty,
            i = {
                allowDots: !1,
                allowPrototypes: !1,
                arrayLimit: 20,
                decoder: r.decode,
                delimiter: "&",
                depth: 5,
                parameterLimit: 1e3,
                plainObjects: !1,
                strictNullHandling: !1
            },
            o = function (e, t) {
                for (var n = {}, r = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, o = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit, s = r.split(t.delimiter, o), u = 0; u < s.length; ++u) {
                    var c, l, f = s[u],
                        p = f.indexOf("]="),
                        d = -1 === p ? f.indexOf("=") : p + 1; - 1 === d ? (c = t.decoder(f, i.decoder), l = t.strictNullHandling ? null : "") : (c = t.decoder(f.slice(0, d), i.decoder), l = t.decoder(f.slice(d + 1), i.decoder)), a.call(n, c) ? n[c] = [].concat(n[c]).concat(l) : n[c] = l
                }
                return n
            },
            s = function (e, t, n) {
                for (var r = t, a = e.length - 1; a >= 0; --a) {
                    var i, o = e[a];
                    if ("[]" === o) i = [], i = i.concat(r);
                    else {
                        i = n.plainObjects ? Object.create(null) : {};
                        var s = "[" === o.charAt(0) && "]" === o.charAt(o.length - 1) ? o.slice(1, -1) : o,
                            u = parseInt(s, 10);
                        !isNaN(u) && o !== s && String(u) === s && u >= 0 && n.parseArrays && u <= n.arrayLimit ? (i = [], i[u] = r) : i[s] = r
                    }
                    r = i
                }
                return r
            },
            u = function (e, t, n) {
                if (e) {
                    var r = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
                        i = /(\[[^[\]]*])/,
                        o = /(\[[^[\]]*])/g,
                        u = i.exec(r),
                        c = u ? r.slice(0, u.index) : r,
                        l = [];
                    if (c) {
                        if (!n.plainObjects && a.call(Object.prototype, c) && !n.allowPrototypes) return;
                        l.push(c)
                    }
                    for (var f = 0; null !== (u = o.exec(r)) && f < n.depth;) {
                        if (f += 1, !n.plainObjects && a.call(Object.prototype, u[1].slice(1, -1)) && !n.allowPrototypes) return;
                        l.push(u[1])
                    }
                    return u && l.push("[" + r.slice(u.index) + "]"), s(l, t, n)
                }
            };
        e.exports = function (e, t) {
            var n = t ? r.assign({}, t) : {};
            if (null !== n.decoder && void 0 !== n.decoder && "function" !== typeof n.decoder) throw new TypeError("Decoder has to be a function.");
            if (n.ignoreQueryPrefix = !0 === n.ignoreQueryPrefix, n.delimiter = "string" === typeof n.delimiter || r.isRegExp(n.delimiter) ? n.delimiter : i.delimiter, n.depth = "number" === typeof n.depth ? n.depth : i.depth, n.arrayLimit = "number" === typeof n.arrayLimit ? n.arrayLimit : i.arrayLimit, n.parseArrays = !1 !== n.parseArrays, n.decoder = "function" === typeof n.decoder ? n.decoder : i.decoder, n.allowDots = "boolean" === typeof n.allowDots ? n.allowDots : i.allowDots, n.plainObjects = "boolean" === typeof n.plainObjects ? n.plainObjects : i.plainObjects, n.allowPrototypes = "boolean" === typeof n.allowPrototypes ? n.allowPrototypes : i.allowPrototypes, n.parameterLimit = "number" === typeof n.parameterLimit ? n.parameterLimit : i.parameterLimit, n.strictNullHandling = "boolean" === typeof n.strictNullHandling ? n.strictNullHandling : i.strictNullHandling, "" === e || null === e || "undefined" === typeof e) return n.plainObjects ? Object.create(null) : {};
            for (var a = "string" === typeof e ? o(e, n) : e, s = n.plainObjects ? Object.create(null) : {}, c = Object.keys(a), l = 0; l < c.length; ++l) {
                var f = c[l],
                    p = u(f, a[f], n);
                s = r.merge(s, p, n)
            }
            return r.compact(s)
        }
    }, function (e, t, n) {
        var r = n(22),
            a = n(70),
            i = n(51),
            o = n(34),
            s = r(function (e, t, n) {
                var r = 1;
                if (n.length) {
                    var u = o(n, i(s));
                    r |= 32
                }
                return a(e, r, t, n, u)
            });
        s.placeholder = {}, e.exports = s
    }, function (e, t, n) {
        var r = n(360),
            a = n(148),
            i = a(function (e, t) {
                return null == e ? {} : r(e, t)
            });
        e.exports = i
    }, function (e, t, n) {
        function r(e, t) {
            return a(e, t, function (t, n) {
                return i(e, n)
            })
        }
        var a = n(171),
            i = n(137);
        e.exports = r
    }, function (e, t, n) {
        "use strict";
        var r = n(362),
            a = n(373);
        e.exports = a(r, "(lite) ")
    }, function (e, t, n) {
        function r(e, t, r) {
            var i = n(77)("algoliasearch"),
                o = n(36),
                s = n(75),
                c = n(76),
                l = "Usage: algoliasearch(applicationID, apiKey, opts)";
            if (!0 !== r._allowEmptyCredentials && !e) throw new u.AlgoliaSearchError("Please provide an application ID. " + l);
            if (!0 !== r._allowEmptyCredentials && !t) throw new u.AlgoliaSearchError("Please provide an API key. " + l);
            this.applicationID = e, this.apiKey = t, this.hosts = {
                read: [],
                write: []
            }, r = r || {}, this._timeouts = r.timeouts || {
                connect: 1e3,
                read: 2e3,
                write: 3e4
            }, r.timeout && (this._timeouts.connect = this._timeouts.read = this._timeouts.write = r.timeout);
            var f = r.protocol || "https:";
            if (/:$/.test(f) || (f += ":"), "http:" !== f && "https:" !== f) throw new u.AlgoliaSearchError("protocol must be `http:` or `https:` (was `" + r.protocol + "`)");
            if (this._checkAppIdData(), r.hosts) s(r.hosts) ? (this.hosts.read = o(r.hosts), this.hosts.write = o(r.hosts)) : (this.hosts.read = o(r.hosts.read), this.hosts.write = o(r.hosts.write));
            else {
                var p = c(this._shuffleResult, function (t) {
                        return e + "-" + t + ".algolianet.com"
                    }),
                    d = (!1 === r.dsn ? "" : "-dsn") + ".algolia.net";
                this.hosts.read = [this.applicationID + d].concat(p), this.hosts.write = [this.applicationID + ".algolia.net"].concat(p)
            }
            this.hosts.read = c(this.hosts.read, a(f)), this.hosts.write = c(this.hosts.write, a(f)), this.extraHeaders = {}, this.cache = r._cache || {}, this._ua = r._ua, this._useCache = !(void 0 !== r._useCache && !r._cache) || r._useCache, this._useRequestCache = this._useCache && r._useRequestCache, this._useFallback = void 0 === r.useFallback || r.useFallback, this._setTimeout = r._setTimeout, i("init done, %j", this)
        }

        function a(e) {
            return function (t) {
                return e + "//" + t.toLowerCase()
            }
        }

        function i(e) {
            if (void 0 === Array.prototype.toJSON) return JSON.stringify(e);
            var t = Array.prototype.toJSON;
            delete Array.prototype.toJSON;
            var n = JSON.stringify(e);
            return Array.prototype.toJSON = t, n
        }

        function o(e) {
            for (var t, n, r = e.length; 0 !== r;) n = Math.floor(Math.random() * r), r -= 1, t = e[r], e[r] = e[n], e[n] = t;
            return e
        }

        function s(e) {
            var t = {};
            for (var n in e)
                if (Object.prototype.hasOwnProperty.call(e, n)) {
                    var r;
                    r = "x-algolia-api-key" === n || "x-algolia-application-id" === n ? "**hidden for security purposes**" : e[n], t[n] = r
                } return t
        }
        e.exports = r;
        var u = n(74),
            c = n(363),
            l = n(364),
            f = n(370),
            p = Object({
                NODE_ENV: "production"
            }).RESET_APP_DATA_TIMER && parseInt(Object({
                NODE_ENV: "production"
            }).RESET_APP_DATA_TIMER, 10) || 12e4;
        r.prototype.initIndex = function (e) {
            return new l(this, e)
        }, r.prototype.setExtraHeader = function (e, t) {
            this.extraHeaders[e.toLowerCase()] = t
        }, r.prototype.getExtraHeader = function (e) {
            return this.extraHeaders[e.toLowerCase()]
        }, r.prototype.unsetExtraHeader = function (e) {
            delete this.extraHeaders[e.toLowerCase()]
        }, r.prototype.addAlgoliaAgent = function (e) {
            -1 === this._ua.indexOf(";" + e) && (this._ua += ";" + e)
        }, r.prototype._jsonRequest = function (e) {
            function t(n, a) {
                function c(e) {
                    var t = e && e.body && e.body.message && e.body.status || e.statusCode || e && e.body && 200;
                    p("received response: statusCode: %s, computed statusCode: %d, headers: %j", e.statusCode, t, e.headers);
                    var n = 2 === Math.floor(t / 100),
                        r = new Date;
                    if (b.push({
                            currentHost: S,
                            headers: s(f),
                            content: o || null,
                            contentLength: void 0 !== o ? o.length : null,
                            method: a.method,
                            timeouts: a.timeouts,
                            url: a.url,
                            startTime: R,
                            endTime: r,
                            duration: r - R,
                            statusCode: t
                        }), n) return m._useCache && !m._useRequestCache && h && (h[l] = e.responseText), {
                        responseText: e.responseText,
                        body: e.body
                    };
                    if (4 !== Math.floor(t / 100)) return v += 1, w();
                    p("unrecoverable error");
                    var i = new u.AlgoliaSearchError(e.body && e.body.message, {
                        debugData: b,
                        statusCode: t
                    });
                    return m._promise.reject(i)
                }

                function _(t) {
                    p("error: %s, stack: %s", t.message, t.stack);
                    var n = new Date;
                    return b.push({
                        currentHost: S,
                        headers: s(f),
                        content: o || null,
                        contentLength: void 0 !== o ? o.length : null,
                        method: a.method,
                        timeouts: a.timeouts,
                        url: a.url,
                        startTime: R,
                        endTime: n,
                        duration: n - R
                    }), t instanceof u.AlgoliaSearchError || (t = new u.Unknown(t && t.message, t)), v += 1, t instanceof u.Unknown || t instanceof u.UnparsableJSON || v >= m.hosts[e.hostType].length && (g || !y) ? (t.debugData = b, m._promise.reject(t)) : t instanceof u.RequestTimeout ? P() : w()
                }

                function w() {
                    return p("retrying request"), m._incrementHostIndex(e.hostType), t(n, a)
                }

                function P() {
                    return p("retrying request with higher timeout"), m._incrementHostIndex(e.hostType), m._incrementTimeoutMultipler(), a.timeouts = m._getTimeoutsForRequest(e.hostType), t(n, a)
                }
                m._checkAppIdData();
                var R = new Date;
                if (m._useCache && !m._useRequestCache && (l = e.url), m._useCache && !m._useRequestCache && o && (l += "_body_" + a.body), r(!m._useRequestCache, h, l)) {
                    p("serving response from cache");
                    var x = h[l];
                    return m._promise.resolve({
                        body: JSON.parse(x),
                        responseText: x
                    })
                }
                if (v >= m.hosts[e.hostType].length) return !y || g ? (p("could not get any response"), m._promise.reject(new u.AlgoliaSearchError("Cannot connect to the AlgoliaSearch API. Send an email to support@algolia.com to report and resolve the issue. Application id was: " + m.applicationID, {
                    debugData: b
                }))) : (p("switching to fallback"), v = 0, a.method = e.fallback.method, a.url = e.fallback.url, a.jsonBody = e.fallback.body, a.jsonBody && (a.body = i(a.jsonBody)), f = m._computeRequestHeaders({
                    additionalUA: d,
                    headers: e.headers
                }), a.timeouts = m._getTimeoutsForRequest(e.hostType), m._setHostIndexByType(0, e.hostType), g = !0, t(m._request.fallback, a));
                var S = m._getHostByType(e.hostType),
                    C = S + a.url,
                    j = {
                        body: a.body,
                        jsonBody: a.jsonBody,
                        method: a.method,
                        headers: f,
                        timeouts: a.timeouts,
                        debug: p,
                        forceAuthHeaders: a.forceAuthHeaders
                    };
                return p("method: %s, url: %s, headers: %j, timeouts: %d", j.method, C, j.headers, j.timeouts), n === m._request.fallback && p("using fallback"), n.call(m, C, j).then(c, _)
            }

            function r(e, t, n) {
                return m._useCache && e && t && void 0 !== t[n]
            }

            function a(t, n) {
                if (r(m._useRequestCache, h, l) && t.catch(function () {
                        delete h[l]
                    }), "function" !== typeof e.callback) return t.then(n);
                t.then(function (t) {
                    c(function () {
                        e.callback(null, n(t))
                    }, m._setTimeout || setTimeout)
                }, function (t) {
                    c(function () {
                        e.callback(t)
                    }, m._setTimeout || setTimeout)
                })
            }
            this._checkAppIdData();
            var o, l, f, p = n(77)("algoliasearch:" + e.url),
                d = e.additionalUA || "",
                h = e.cache,
                m = this,
                v = 0,
                g = !1,
                y = m._useFallback && m._request.fallback && e.fallback;
            this.apiKey.length > 500 && void 0 !== e.body && (void 0 !== e.body.params || void 0 !== e.body.requests) ? (e.body.apiKey = this.apiKey, f = this._computeRequestHeaders({
                additionalUA: d,
                withApiKey: !1,
                headers: e.headers
            })) : f = this._computeRequestHeaders({
                additionalUA: d,
                headers: e.headers
            }), void 0 !== e.body && (o = i(e.body)), p("request start");
            var b = [];
            if (m._useCache && m._useRequestCache && (l = e.url), m._useCache && m._useRequestCache && o && (l += "_body_" + o), r(m._useRequestCache, h, l)) {
                p("serving request from cache");
                var _ = h[l];
                return a("function" !== typeof _.then ? m._promise.resolve({
                    responseText: _
                }) : _, function (e) {
                    return JSON.parse(e.responseText)
                })
            }
            var w = t(m._request, {
                url: e.url,
                method: e.method,
                body: o,
                jsonBody: e.body,
                timeouts: m._getTimeoutsForRequest(e.hostType),
                forceAuthHeaders: e.forceAuthHeaders
            });
            return m._useCache && m._useRequestCache && h && (h[l] = w), a(w, function (e) {
                return e.body
            })
        }, r.prototype._getSearchParams = function (e, t) {
            if (void 0 === e || null === e) return t;
            for (var n in e) null !== n && void 0 !== e[n] && e.hasOwnProperty(n) && (t += "" === t ? "" : "&", t += n + "=" + encodeURIComponent("[object Array]" === Object.prototype.toString.call(e[n]) ? i(e[n]) : e[n]));
            return t
        }, r.prototype._computeRequestHeaders = function (e) {
            var t = n(35),
                r = e.additionalUA ? this._ua + ";" + e.additionalUA : this._ua,
                a = {
                    "x-algolia-agent": r,
                    "x-algolia-application-id": this.applicationID
                };
            return !1 !== e.withApiKey && (a["x-algolia-api-key"] = this.apiKey), this.userToken && (a["x-algolia-usertoken"] = this.userToken), this.securityTags && (a["x-algolia-tagfilters"] = this.securityTags), t(this.extraHeaders, function (e, t) {
                a[t] = e
            }), e.headers && t(e.headers, function (e, t) {
                a[t] = e
            }), a
        }, r.prototype.search = function (e, t, r) {
            var a = n(75),
                i = n(76);
            if (!a(e)) throw new Error("Usage: client.search(arrayOfQueries[, callback])");
            "function" === typeof t ? (r = t, t = {}) : void 0 === t && (t = {});
            var o = this,
                s = {
                    requests: i(e, function (e) {
                        var t = "";
                        return void 0 !== e.query && (t += "query=" + encodeURIComponent(e.query)), {
                            indexName: e.indexName,
                            params: o._getSearchParams(e.params, t)
                        }
                    })
                },
                u = i(s.requests, function (e, t) {
                    return t + "=" + encodeURIComponent("/1/indexes/" + encodeURIComponent(e.indexName) + "?" + e.params)
                }).join("&");
            return void 0 !== t.strategy && (s.strategy = t.strategy), this._jsonRequest({
                cache: this.cache,
                method: "POST",
                url: "/1/indexes/*/queries",
                body: s,
                hostType: "read",
                fallback: {
                    method: "GET",
                    url: "/1/indexes/*",
                    body: {
                        params: u
                    }
                },
                callback: r
            })
        }, r.prototype.searchForFacetValues = function (e) {
            var t = n(75),
                r = n(76),
                a = "Usage: client.searchForFacetValues([{indexName, params: {facetName, facetQuery, ...params}}, ...queries])";
            if (!t(e)) throw new Error(a);
            var i = this;
            return i._promise.all(r(e, function (e) {
                if (!e || void 0 === e.indexName || void 0 === e.params.facetName || void 0 === e.params.facetQuery) throw new Error(a);
                var t = n(36),
                    r = n(182),
                    o = e.indexName,
                    s = e.params,
                    u = s.facetName,
                    c = r(t(s), function (e) {
                        return "facetName" === e
                    }),
                    l = i._getSearchParams(c, "");
                return i._jsonRequest({
                    cache: i.cache,
                    method: "POST",
                    url: "/1/indexes/" + encodeURIComponent(o) + "/facets/" + encodeURIComponent(u) + "/query",
                    hostType: "read",
                    body: {
                        params: l
                    }
                })
            }))
        }, r.prototype.setSecurityTags = function (e) {
            if ("[object Array]" === Object.prototype.toString.call(e)) {
                for (var t = [], n = 0; n < e.length; ++n)
                    if ("[object Array]" === Object.prototype.toString.call(e[n])) {
                        for (var r = [], a = 0; a < e[n].length; ++a) r.push(e[n][a]);
                        t.push("(" + r.join(",") + ")")
                    } else t.push(e[n]);
                e = t.join(",")
            }
            this.securityTags = e
        }, r.prototype.setUserToken = function (e) {
            this.userToken = e
        }, r.prototype.clearCache = function () {
            this.cache = {}
        }, r.prototype.setRequestTimeout = function (e) {
            e && (this._timeouts.connect = this._timeouts.read = this._timeouts.write = e)
        }, r.prototype.setTimeouts = function (e) {
            this._timeouts = e
        }, r.prototype.getTimeouts = function () {
            return this._timeouts
        }, r.prototype._getAppIdData = function () {
            var e = f.get(this.applicationID);
            return null !== e && this._cacheAppIdData(e), e
        }, r.prototype._setAppIdData = function (e) {
            return e.lastChange = (new Date).getTime(), this._cacheAppIdData(e), f.set(this.applicationID, e)
        }, r.prototype._checkAppIdData = function () {
            var e = this._getAppIdData(),
                t = (new Date).getTime();
            return null === e || t - e.lastChange > p ? this._resetInitialAppIdData(e) : e
        }, r.prototype._resetInitialAppIdData = function (e) {
            var t = e || {};
            return t.hostIndexes = {
                read: 0,
                write: 0
            }, t.timeoutMultiplier = 1, t.shuffleResult = t.shuffleResult || o([1, 2, 3]), this._setAppIdData(t)
        }, r.prototype._cacheAppIdData = function (e) {
            this._hostIndexes = e.hostIndexes, this._timeoutMultiplier = e.timeoutMultiplier, this._shuffleResult = e.shuffleResult
        }, r.prototype._partialAppIdDataUpdate = function (e) {
            var t = n(35),
                r = this._getAppIdData();
            return t(e, function (e, t) {
                r[t] = e
            }), this._setAppIdData(r)
        }, r.prototype._getHostByType = function (e) {
            return this.hosts[e][this._getHostIndexByType(e)]
        }, r.prototype._getTimeoutMultiplier = function () {
            return this._timeoutMultiplier
        }, r.prototype._getHostIndexByType = function (e) {
            return this._hostIndexes[e]
        }, r.prototype._setHostIndexByType = function (e, t) {
            var r = n(36),
                a = r(this._hostIndexes);
            return a[t] = e, this._partialAppIdDataUpdate({
                hostIndexes: a
            }), e
        }, r.prototype._incrementHostIndex = function (e) {
            return this._setHostIndexByType((this._getHostIndexByType(e) + 1) % this.hosts[e].length, e)
        }, r.prototype._incrementTimeoutMultipler = function () {
            var e = Math.max(this._timeoutMultiplier + 1, 4);
            return this._partialAppIdDataUpdate({
                timeoutMultiplier: e
            })
        }, r.prototype._getTimeoutsForRequest = function (e) {
            return {
                connect: this._timeouts.connect * this._timeoutMultiplier,
                complete: this._timeouts[e] * this._timeoutMultiplier
            }
        }
    }, function (e, t) {
        e.exports = function (e, t) {
            t(e, 0)
        }
    }, function (e, t, n) {
        function r(e, t) {
            this.indexName = t, this.as = e, this.typeAheadArgs = null, this.typeAheadValueOption = null, this.cache = {}
        }
        var a = n(181),
            i = n(365),
            o = n(366);
        e.exports = r, r.prototype.clearCache = function () {
            this.cache = {}
        }, r.prototype.search = a("query"), r.prototype.similarSearch = a("similarQuery"), r.prototype.browse = function (e, t, r) {
            var a, i, o = n(367),
                s = this;
            0 === arguments.length || 1 === arguments.length && "function" === typeof arguments[0] ? (a = 0, r = arguments[0], e = void 0) : "number" === typeof arguments[0] ? (a = arguments[0], "number" === typeof arguments[1] ? i = arguments[1] : "function" === typeof arguments[1] && (r = arguments[1], i = void 0), e = void 0, t = void 0) : "object" === typeof arguments[0] ? ("function" === typeof arguments[1] && (r = arguments[1]), t = arguments[0], e = void 0) : "string" === typeof arguments[0] && "function" === typeof arguments[1] && (r = arguments[1], t = void 0), t = o({}, t || {}, {
                page: a,
                hitsPerPage: i,
                query: e
            });
            var u = this.as._getSearchParams(t, "");
            return this.as._jsonRequest({
                method: "POST",
                url: "/1/indexes/" + encodeURIComponent(s.indexName) + "/browse",
                body: {
                    params: u
                },
                hostType: "read",
                callback: r
            })
        }, r.prototype.browseFrom = function (e, t) {
            return this.as._jsonRequest({
                method: "POST",
                url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/browse",
                body: {
                    cursor: e
                },
                hostType: "read",
                callback: t
            })
        }, r.prototype.searchForFacetValues = function (e, t) {
            var r = n(36),
                a = n(182);
            if (void 0 === e.facetName || void 0 === e.facetQuery) throw new Error("Usage: index.searchForFacetValues({facetName, facetQuery, ...params}[, callback])");
            var i = e.facetName,
                o = a(r(e), function (e) {
                    return "facetName" === e
                }),
                s = this.as._getSearchParams(o, "");
            return this.as._jsonRequest({
                method: "POST",
                url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/facets/" + encodeURIComponent(i) + "/query",
                hostType: "read",
                body: {
                    params: s
                },
                callback: t
            })
        }, r.prototype.searchFacet = i(function (e, t) {
            return this.searchForFacetValues(e, t)
        }, o("index.searchFacet(params[, callback])", "index.searchForFacetValues(params[, callback])")), r.prototype._search = function (e, t, n, r) {
            return this.as._jsonRequest({
                cache: this.cache,
                method: "POST",
                url: t || "/1/indexes/" + encodeURIComponent(this.indexName) + "/query",
                body: {
                    params: e
                },
                hostType: "read",
                fallback: {
                    method: "GET",
                    url: "/1/indexes/" + encodeURIComponent(this.indexName),
                    body: {
                        params: e
                    }
                },
                callback: n,
                additionalUA: r
            })
        }, r.prototype.getObject = function (e, t, n) {
            var r = this;
            1 !== arguments.length && "function" !== typeof t || (n = t, t = void 0);
            var a = "";
            if (void 0 !== t) {
                a = "?attributes=";
                for (var i = 0; i < t.length; ++i) 0 !== i && (a += ","), a += t[i]
            }
            return this.as._jsonRequest({
                method: "GET",
                url: "/1/indexes/" + encodeURIComponent(r.indexName) + "/" + encodeURIComponent(e) + a,
                hostType: "read",
                callback: n
            })
        }, r.prototype.getObjects = function (e, t, r) {
            var a = n(75),
                i = n(76);
            if (!a(e)) throw new Error("Usage: index.getObjects(arrayOfObjectIDs[, callback])");
            var o = this;
            1 !== arguments.length && "function" !== typeof t || (r = t, t = void 0);
            var s = {
                requests: i(e, function (e) {
                    var n = {
                        indexName: o.indexName,
                        objectID: e
                    };
                    return t && (n.attributesToRetrieve = t.join(",")), n
                })
            };
            return this.as._jsonRequest({
                method: "POST",
                url: "/1/indexes/*/objects",
                hostType: "read",
                body: s,
                callback: r
            })
        }, r.prototype.as = null, r.prototype.indexName = null, r.prototype.typeAheadArgs = null, r.prototype.typeAheadValueOption = null
    }, function (e, t) {
        e.exports = function (e, t) {
            function n() {
                return r || (console.warn(t), r = !0), e.apply(this, arguments)
            }
            var r = !1;
            return n
        }
    }, function (e, t) {
        e.exports = function (e, t) {
            return "algoliasearch: `" + e + "` was replaced by `" + t + "`. Please see https://github.com/algolia/algoliasearch-client-javascript/wiki/Deprecated#" + e.toLowerCase().replace(/[\.\(\)]/g, "")
        }
    }, function (e, t, n) {
        var r = n(35);
        e.exports = function e(t) {
            var n = Array.prototype.slice.call(arguments);
            return r(n, function (n) {
                for (var r in n) n.hasOwnProperty(r) && ("object" === typeof t[r] && "object" === typeof n[r] ? t[r] = e({}, t[r], n[r]) : void 0 !== n[r] && (t[r] = n[r]))
            }), t
        }
    }, function (e, t, n) {
        "use strict";
        var r = Object.prototype.hasOwnProperty,
            a = Object.prototype.toString,
            i = Array.prototype.slice,
            o = n(369),
            s = Object.prototype.propertyIsEnumerable,
            u = !s.call({
                toString: null
            }, "toString"),
            c = s.call(function () {}, "prototype"),
            l = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
            f = function (e) {
                var t = e.constructor;
                return t && t.prototype === e
            },
            p = {
                $console: !0,
                $external: !0,
                $frame: !0,
                $frameElement: !0,
                $frames: !0,
                $innerHeight: !0,
                $innerWidth: !0,
                $outerHeight: !0,
                $outerWidth: !0,
                $pageXOffset: !0,
                $pageYOffset: !0,
                $parent: !0,
                $scrollLeft: !0,
                $scrollTop: !0,
                $scrollX: !0,
                $scrollY: !0,
                $self: !0,
                $webkitIndexedDB: !0,
                $webkitStorageInfo: !0,
                $window: !0
            },
            d = function () {
                if ("undefined" === typeof window) return !1;
                for (var e in window) try {
                    if (!p["$" + e] && r.call(window, e) && null !== window[e] && "object" === typeof window[e]) try {
                        f(window[e])
                    } catch (e) {
                        return !0
                    }
                } catch (e) {
                    return !0
                }
                return !1
            }(),
            h = function (e) {
                if ("undefined" === typeof window || !d) return f(e);
                try {
                    return f(e)
                } catch (e) {
                    return !1
                }
            },
            m = function (e) {
                var t = null !== e && "object" === typeof e,
                    n = "[object Function]" === a.call(e),
                    i = o(e),
                    s = t && "[object String]" === a.call(e),
                    f = [];
                if (!t && !n && !i) throw new TypeError("Object.keys called on a non-object");
                var p = c && n;
                if (s && e.length > 0 && !r.call(e, 0))
                    for (var d = 0; d < e.length; ++d) f.push(String(d));
                if (i && e.length > 0)
                    for (var m = 0; m < e.length; ++m) f.push(String(m));
                else
                    for (var v in e) p && "prototype" === v || !r.call(e, v) || f.push(String(v));
                if (u)
                    for (var g = h(e), y = 0; y < l.length; ++y) g && "constructor" === l[y] || !r.call(e, l[y]) || f.push(l[y]);
                return f
            };
        m.shim = function () {
            if (Object.keys) {
                if (! function () {
                        return 2 === (Object.keys(arguments) || "").length
                    }(1, 2)) {
                    var e = Object.keys;
                    Object.keys = function (t) {
                        return e(o(t) ? i.call(t) : t)
                    }
                }
            } else Object.keys = m;
            return Object.keys || m
        }, e.exports = m
    }, function (e, t, n) {
        "use strict";
        var r = Object.prototype.toString;
        e.exports = function (e) {
            var t = r.call(e),
                n = "[object Arguments]" === t;
            return n || (n = "[object Array]" !== t && null !== e && "object" === typeof e && "number" === typeof e.length && e.length >= 0 && "[object Function]" === r.call(e.callee)), n
        }
    }, function (e, t, n) {
        (function (t) {
            function r(e, t) {
                return u("localStorage failed with", t), o(), s = l, s.get(e)
            }

            function a(e, t) {
                return 1 === arguments.length ? s.get(e) : s.set(e, t)
            }

            function i() {
                try {
                    return "localStorage" in t && null !== t.localStorage && (t.localStorage[c] || t.localStorage.setItem(c, JSON.stringify({})), !0)
                } catch (e) {
                    return !1
                }
            }

            function o() {
                try {
                    t.localStorage.removeItem(c)
                } catch (e) {}
            }
            var s, u = n(77)("algoliasearch:src/hostIndexState.js"),
                c = "algoliasearch-client-js",
                l = {
                    state: {},
                    set: function (e, t) {
                        return this.state[e] = t, this.state[e]
                    },
                    get: function (e) {
                        return this.state[e] || null
                    }
                },
                f = {
                    set: function (e, n) {
                        l.set(e, n);
                        try {
                            var a = JSON.parse(t.localStorage[c]);
                            return a[e] = n, t.localStorage[c] = JSON.stringify(a), a[e]
                        } catch (t) {
                            return r(e, t)
                        }
                    },
                    get: function (e) {
                        try {
                            return JSON.parse(t.localStorage[c])[e] || null
                        } catch (t) {
                            return r(e, t)
                        }
                    }
                };
            s = i() ? f : l, e.exports = {
                get: a,
                set: a,
                supportsLocalStorage: i
            }
        }).call(t, n(39))
    }, function (e, t, n) {
        function r(e) {
            var n, r = 0;
            for (n in e) r = (r << 5) - r + e.charCodeAt(n), r |= 0;
            return t.colors[Math.abs(r) % t.colors.length]
        }

        function a(e) {
            function n() {
                if (n.enabled) {
                    var e = n,
                        r = +new Date,
                        a = r - (c || r);
                    e.diff = a, e.prev = c, e.curr = r, c = r;
                    for (var i = new Array(arguments.length), o = 0; o < i.length; o++) i[o] = arguments[o];
                    i[0] = t.coerce(i[0]), "string" !== typeof i[0] && i.unshift("%O");
                    var s = 0;
                    i[0] = i[0].replace(/%([a-zA-Z%])/g, function (n, r) {
                        if ("%%" === n) return n;
                        s++;
                        var a = t.formatters[r];
                        if ("function" === typeof a) {
                            var o = i[s];
                            n = a.call(e, o), i.splice(s, 1), s--
                        }
                        return n
                    }), t.formatArgs.call(e, i);
                    (n.log || t.log || console.log.bind(console)).apply(e, i)
                }
            }
            return n.namespace = e, n.enabled = t.enabled(e), n.useColors = t.useColors(), n.color = r(e), "function" === typeof t.init && t.init(n), n
        }

        function i(e) {
            t.save(e), t.names = [], t.skips = [];
            for (var n = ("string" === typeof e ? e : "").split(/[\s,]+/), r = n.length, a = 0; a < r; a++) n[a] && (e = n[a].replace(/\*/g, ".*?"), "-" === e[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")))
        }

        function o() {
            t.enable("")
        }

        function s(e) {
            var n, r;
            for (n = 0, r = t.skips.length; n < r; n++)
                if (t.skips[n].test(e)) return !1;
            for (n = 0, r = t.names.length; n < r; n++)
                if (t.names[n].test(e)) return !0;
            return !1
        }

        function u(e) {
            return e instanceof Error ? e.stack || e.message : e
        }
        t = e.exports = a.debug = a.default = a, t.coerce = u, t.disable = o, t.enable = i, t.enabled = s, t.humanize = n(372), t.names = [], t.skips = [], t.formatters = {};
        var c
    }, function (e, t) {
        function n(e) {
            if (e = String(e), !(e.length > 100)) {
                var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
                if (t) {
                    var n = parseFloat(t[1]);
                    switch ((t[2] || "ms").toLowerCase()) {
                        case "years":
                        case "year":
                        case "yrs":
                        case "yr":
                        case "y":
                            return n * l;
                        case "days":
                        case "day":
                        case "d":
                            return n * c;
                        case "hours":
                        case "hour":
                        case "hrs":
                        case "hr":
                        case "h":
                            return n * u;
                        case "minutes":
                        case "minute":
                        case "mins":
                        case "min":
                        case "m":
                            return n * s;
                        case "seconds":
                        case "second":
                        case "secs":
                        case "sec":
                        case "s":
                            return n * o;
                        case "milliseconds":
                        case "millisecond":
                        case "msecs":
                        case "msec":
                        case "ms":
                            return n;
                        default:
                            return
                    }
                }
            }
        }

        function r(e) {
            return e >= c ? Math.round(e / c) + "d" : e >= u ? Math.round(e / u) + "h" : e >= s ? Math.round(e / s) + "m" : e >= o ? Math.round(e / o) + "s" : e + "ms"
        }

        function a(e) {
            return i(e, c, "day") || i(e, u, "hour") || i(e, s, "minute") || i(e, o, "second") || e + " ms"
        }

        function i(e, t, n) {
            if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s"
        }
        var o = 1e3,
            s = 60 * o,
            u = 60 * s,
            c = 24 * u,
            l = 365.25 * c;
        e.exports = function (e, t) {
            t = t || {};
            var i = typeof e;
            if ("string" === i && e.length > 0) return n(e);
            if ("number" === i && !1 === isNaN(e)) return t.long ? a(e) : r(e);
            throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(374),
            a = r.Promise || n(375).Promise;
        e.exports = function (e, t) {
            function i(e, t, r) {
                return r = n(36)(r || {}), r._ua = r._ua || i.ua, new o(e, t, r)
            }

            function o() {
                e.apply(this, arguments)
            }
            var s = n(180),
                u = n(74),
                c = n(376),
                l = n(378),
                f = n(379);
            t = t || "", i.version = n(380), i.ua = "Algolia for vanilla JavaScript " + t + i.version, i.initPlaces = f(i), r.__algolia = {
                debug: n(77),
                algoliasearch: i
            };
            var p = {
                hasXMLHttpRequest: "XMLHttpRequest" in r,
                hasXDomainRequest: "XDomainRequest" in r
            };
            return p.hasXMLHttpRequest && (p.cors = "withCredentials" in new XMLHttpRequest), s(o, e), o.prototype._request = function (e, t) {
                return new a(function (n, r) {
                    function a() {
                        if (!h) {
                            clearTimeout(d);
                            var e;
                            try {
                                e = {
                                    body: JSON.parse(v.responseText),
                                    responseText: v.responseText,
                                    statusCode: v.status,
                                    headers: v.getAllResponseHeaders && v.getAllResponseHeaders() || {}
                                }
                            } catch (t) {
                                e = new u.UnparsableJSON({
                                    more: v.responseText
                                })
                            }
                            e instanceof u.UnparsableJSON ? r(e) : n(e)
                        }
                    }

                    function i(e) {
                        h || (clearTimeout(d), r(new u.Network({
                            more: e
                        })))
                    }

                    function o() {
                        h = !0, v.abort(), r(new u.RequestTimeout)
                    }

                    function s() {
                        g = !0, clearTimeout(d), d = setTimeout(o, t.timeouts.complete)
                    }

                    function l() {
                        g || s()
                    }

                    function f() {
                        !g && v.readyState > 1 && s()
                    }
                    if (!p.cors && !p.hasXDomainRequest) return void r(new u.Network("CORS not supported"));
                    e = c(e, t.headers);
                    var d, h, m = t.body,
                        v = p.cors ? new XMLHttpRequest : new XDomainRequest,
                        g = !1;
                    d = setTimeout(o, t.timeouts.connect), v.onprogress = l, "onreadystatechange" in v && (v.onreadystatechange = f), v.onload = a, v.onerror = i, v instanceof XMLHttpRequest ? (v.open(t.method, e, !0), t.forceAuthHeaders && (v.setRequestHeader("x-algolia-application-id", t.headers["x-algolia-application-id"]), v.setRequestHeader("x-algolia-api-key", t.headers["x-algolia-api-key"]))) : v.open(t.method, e), p.cors && (m && ("POST" === t.method ? v.setRequestHeader("content-type", "application/x-www-form-urlencoded") : v.setRequestHeader("content-type", "application/json")), v.setRequestHeader("accept", "application/json")), m ? v.send(m) : v.send()
                })
            }, o.prototype._request.fallback = function (e, t) {
                return e = c(e, t.headers), new a(function (n, r) {
                    l(e, t, function (e, t) {
                        if (e) return void r(e);
                        n(t)
                    })
                })
            }, o.prototype._promise = {
                reject: function (e) {
                    return a.reject(e)
                },
                resolve: function (e) {
                    return a.resolve(e)
                },
                delay: function (e) {
                    return new a(function (t) {
                        setTimeout(t, e)
                    })
                },
                all: function (e) {
                    return a.all(e)
                }
            }, i
        }
    }, function (e, t, n) {
        (function (t) {
            var n;
            n = "undefined" !== typeof window ? window : "undefined" !== typeof t ? t : "undefined" !== typeof self ? self : {}, e.exports = n
        }).call(t, n(39))
    }, function (e, t, n) {
        (function (t, n) {
            ! function (t, n) {
                e.exports = n()
            }(0, function () {
                "use strict";

                function e(e) {
                    var t = typeof e;
                    return null !== e && ("object" === t || "function" === t)
                }

                function r(e) {
                    return "function" === typeof e
                }

                function a(e) {
                    B = e
                }

                function i(e) {
                    V = e
                }

                function o() {
                    return "undefined" !== typeof D ? function () {
                        D(u)
                    } : s()
                }

                function s() {
                    var e = setTimeout;
                    return function () {
                        return e(u, 1)
                    }
                }

                function u() {
                    for (var e = 0; e < U; e += 2) {
                        (0, $[e])($[e + 1]), $[e] = void 0, $[e + 1] = void 0
                    }
                    U = 0
                }

                function c(e, t) {
                    var n = this,
                        r = new this.constructor(f);
                    void 0 === r[G] && N(r);
                    var a = n._state;
                    if (a) {
                        var i = arguments[a - 1];
                        V(function () {
                            return C(a, r, i, n._result)
                        })
                    } else R(n, r, e, t);
                    return r
                }

                function l(e) {
                    var t = this;
                    if (e && "object" === typeof e && e.constructor === t) return e;
                    var n = new t(f);
                    return b(n, e), n
                }

                function f() {}

                function p() {
                    return new TypeError("You cannot resolve a promise with itself")
                }

                function d() {
                    return new TypeError("A promises callback cannot return that same promise.")
                }

                function h(e) {
                    try {
                        return e.then
                    } catch (e) {
                        return ee.error = e, ee
                    }
                }

                function m(e, t, n, r) {
                    try {
                        e.call(t, n, r)
                    } catch (e) {
                        return e
                    }
                }

                function v(e, t, n) {
                    V(function (e) {
                        var r = !1,
                            a = m(n, t, function (n) {
                                r || (r = !0, t !== n ? b(e, n) : w(e, n))
                            }, function (t) {
                                r || (r = !0, P(e, t))
                            }, "Settle: " + (e._label || " unknown promise"));
                        !r && a && (r = !0, P(e, a))
                    }, e)
                }

                function g(e, t) {
                    t._state === X ? w(e, t._result) : t._state === Z ? P(e, t._result) : R(t, void 0, function (t) {
                        return b(e, t)
                    }, function (t) {
                        return P(e, t)
                    })
                }

                function y(e, t, n) {
                    t.constructor === e.constructor && n === c && t.constructor.resolve === l ? g(e, t) : n === ee ? (P(e, ee.error), ee.error = null) : void 0 === n ? w(e, t) : r(n) ? v(e, t, n) : w(e, t)
                }

                function b(t, n) {
                    t === n ? P(t, p()) : e(n) ? y(t, n, h(n)) : w(t, n)
                }

                function _(e) {
                    e._onerror && e._onerror(e._result), x(e)
                }

                function w(e, t) {
                    e._state === Y && (e._result = t, e._state = X, 0 !== e._subscribers.length && V(x, e))
                }

                function P(e, t) {
                    e._state === Y && (e._state = Z, e._result = t, V(_, e))
                }

                function R(e, t, n, r) {
                    var a = e._subscribers,
                        i = a.length;
                    e._onerror = null, a[i] = t, a[i + X] = n, a[i + Z] = r, 0 === i && e._state && V(x, e)
                }

                function x(e) {
                    var t = e._subscribers,
                        n = e._state;
                    if (0 !== t.length) {
                        for (var r = void 0, a = void 0, i = e._result, o = 0; o < t.length; o += 3) r = t[o], a = t[o + n], r ? C(n, r, a, i) : a(i);
                        e._subscribers.length = 0
                    }
                }

                function S(e, t) {
                    try {
                        return e(t)
                    } catch (e) {
                        return ee.error = e, ee
                    }
                }

                function C(e, t, n, a) {
                    var i = r(n),
                        o = void 0,
                        s = void 0,
                        u = void 0,
                        c = void 0;
                    if (i) {
                        if (o = S(n, a), o === ee ? (c = !0, s = o.error, o.error = null) : u = !0, t === o) return void P(t, d())
                    } else o = a, u = !0;
                    t._state !== Y || (i && u ? b(t, o) : c ? P(t, s) : e === X ? w(t, o) : e === Z && P(t, o))
                }

                function j(e, t) {
                    try {
                        t(function (t) {
                            b(e, t)
                        }, function (t) {
                            P(e, t)
                        })
                    } catch (t) {
                        P(e, t)
                    }
                }

                function O() {
                    return te++
                }

                function N(e) {
                    e[G] = te++, e._state = void 0, e._result = void 0, e._subscribers = []
                }

                function E() {
                    return new Error("Array Methods must be provided an Array")
                }

                function F(e) {
                    return new ne(this, e).promise
                }

                function M(e) {
                    var t = this;
                    return new t(H(e) ? function (n, r) {
                        for (var a = e.length, i = 0; i < a; i++) t.resolve(e[i]).then(n, r)
                    } : function (e, t) {
                        return t(new TypeError("You must pass an array to race."))
                    })
                }

                function k(e) {
                    var t = this,
                        n = new t(f);
                    return P(n, e), n
                }

                function T() {
                    throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                }

                function L() {
                    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                }

                function I() {
                    var e = void 0;
                    if ("undefined" !== typeof n) e = n;
                    else if ("undefined" !== typeof self) e = self;
                    else try {
                        e = Function("return this")()
                    } catch (e) {
                        throw new Error("polyfill failed because global object is unavailable in this environment")
                    }
                    var t = e.Promise;
                    if (t) {
                        var r = null;
                        try {
                            r = Object.prototype.toString.call(t.resolve())
                        } catch (e) {}
                        if ("[object Promise]" === r && !t.cast) return
                    }
                    e.Promise = re
                }
                var A = void 0;
                A = Array.isArray ? Array.isArray : function (e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                };
                var H = A,
                    U = 0,
                    D = void 0,
                    B = void 0,
                    V = function (e, t) {
                        $[U] = e, $[U + 1] = t, 2 === (U += 2) && (B ? B(u) : J())
                    },
                    q = "undefined" !== typeof window ? window : void 0,
                    Q = q || {},
                    W = Q.MutationObserver || Q.WebKitMutationObserver,
                    z = "undefined" === typeof self && "undefined" !== typeof t && "[object process]" === {}.toString.call(t),
                    K = "undefined" !== typeof Uint8ClampedArray && "undefined" !== typeof importScripts && "undefined" !== typeof MessageChannel,
                    $ = new Array(1e3),
                    J = void 0;
                J = z ? function () {
                    return function () {
                        return t.nextTick(u)
                    }
                }() : W ? function () {
                    var e = 0,
                        t = new W(u),
                        n = document.createTextNode("");
                    return t.observe(n, {
                            characterData: !0
                        }),
                        function () {
                            n.data = e = ++e % 2
                        }
                }() : K ? function () {
                    var e = new MessageChannel;
                    return e.port1.onmessage = u,
                        function () {
                            return e.port2.postMessage(0)
                        }
                }() : void 0 === q ? function () {
                    try {
                        var e = Function("return this")().require("vertx");
                        return D = e.runOnLoop || e.runOnContext, o()
                    } catch (e) {
                        return s()
                    }
                }() : s();
                var G = Math.random().toString(36).substring(2),
                    Y = void 0,
                    X = 1,
                    Z = 2,
                    ee = {
                        error: null
                    },
                    te = 0,
                    ne = function () {
                        function e(e, t) {
                            this._instanceConstructor = e, this.promise = new e(f), this.promise[G] || N(this.promise), H(t) ? (this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? w(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(t), 0 === this._remaining && w(this.promise, this._result))) : P(this.promise, E())
                        }
                        return e.prototype._enumerate = function (e) {
                            for (var t = 0; this._state === Y && t < e.length; t++) this._eachEntry(e[t], t)
                        }, e.prototype._eachEntry = function (e, t) {
                            var n = this._instanceConstructor,
                                r = n.resolve;
                            if (r === l) {
                                var a = h(e);
                                if (a === c && e._state !== Y) this._settledAt(e._state, t, e._result);
                                else if ("function" !== typeof a) this._remaining--, this._result[t] = e;
                                else if (n === re) {
                                    var i = new n(f);
                                    y(i, e, a), this._willSettleAt(i, t)
                                } else this._willSettleAt(new n(function (t) {
                                    return t(e)
                                }), t)
                            } else this._willSettleAt(r(e), t)
                        }, e.prototype._settledAt = function (e, t, n) {
                            var r = this.promise;
                            r._state === Y && (this._remaining--, e === Z ? P(r, n) : this._result[t] = n), 0 === this._remaining && w(r, this._result)
                        }, e.prototype._willSettleAt = function (e, t) {
                            var n = this;
                            R(e, void 0, function (e) {
                                return n._settledAt(X, t, e)
                            }, function (e) {
                                return n._settledAt(Z, t, e)
                            })
                        }, e
                    }(),
                    re = function () {
                        function e(t) {
                            this[G] = O(), this._result = this._state = void 0, this._subscribers = [], f !== t && ("function" !== typeof t && T(), this instanceof e ? j(this, t) : L())
                        }
                        return e.prototype.catch = function (e) {
                            return this.then(null, e)
                        }, e.prototype.finally = function (e) {
                            var t = this,
                                n = t.constructor;
                            return t.then(function (t) {
                                return n.resolve(e()).then(function () {
                                    return t
                                })
                            }, function (t) {
                                return n.resolve(e()).then(function () {
                                    throw t
                                })
                            })
                        }, e
                    }();
                return re.prototype.then = c, re.all = F, re.race = M, re.resolve = l, re.reject = k, re._setScheduler = a, re._setAsap = i, re._asap = V, re.polyfill = I, re.Promise = re, re
            })
        }).call(t, n(73), n(39))
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            return /\?/.test(e) ? e += "&" : e += "?", e + a(t)
        }
        e.exports = r;
        var a = n(377)
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            if (e.map) return e.map(t);
            for (var n = [], r = 0; r < e.length; r++) n.push(t(e[r], r));
            return n
        }
        var a = function (e) {
            switch (typeof e) {
                case "string":
                    return e;
                case "boolean":
                    return e ? "true" : "false";
                case "number":
                    return isFinite(e) ? e : "";
                default:
                    return ""
            }
        };
        e.exports = function (e, t, n, s) {
            return t = t || "&", n = n || "=", null === e && (e = void 0), "object" === typeof e ? r(o(e), function (o) {
                var s = encodeURIComponent(a(o)) + n;
                return i(e[o]) ? r(e[o], function (e) {
                    return s + encodeURIComponent(a(e))
                }).join(t) : s + encodeURIComponent(a(e[o]))
            }).join(t) : s ? encodeURIComponent(a(s)) + n + encodeURIComponent(a(e)) : ""
        };
        var i = Array.isArray || function (e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            },
            o = Object.keys || function (e) {
                var t = [];
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
                return t
            }
    }, function (e, t, n) {
        "use strict";

        function r(e, t, n) {
            function r() {
                t.debug("JSONP: success"), v || p || (v = !0, f || (t.debug("JSONP: Fail. Script loaded but did not call the callback"), s(), n(new a.JSONPScriptFail)))
            }

            function o() {
                "loaded" !== this.readyState && "complete" !== this.readyState || r()
            }

            function s() {
                clearTimeout(g), h.onload = null, h.onreadystatechange = null, h.onerror = null, d.removeChild(h)
            }

            function u() {
                try {
                    delete window[m], delete window[m + "_loaded"]
                } catch (e) {
                    window[m] = window[m + "_loaded"] = void 0
                }
            }

            function c() {
                t.debug("JSONP: Script timeout"), p = !0, s(), n(new a.RequestTimeout)
            }

            function l() {
                t.debug("JSONP: Script error"), v || p || (s(), n(new a.JSONPScriptError))
            }
            if ("GET" !== t.method) return void n(new Error("Method " + t.method + " " + e + " is not supported by JSONP."));
            t.debug("JSONP: start");
            var f = !1,
                p = !1;
            i += 1;
            var d = document.getElementsByTagName("head")[0],
                h = document.createElement("script"),
                m = "algoliaJSONP_" + i,
                v = !1;
            window[m] = function (e) {
                if (u(), p) return void t.debug("JSONP: Late answer, ignoring");
                f = !0, s(), n(null, {
                    body: e,
                    responseText: JSON.stringify(e)
                })
            }, e += "&callback=" + m, t.jsonBody && t.jsonBody.params && (e += "&" + t.jsonBody.params);
            var g = setTimeout(c, t.timeouts.complete);
            h.onreadystatechange = o, h.onload = r, h.onerror = l, h.async = !0, h.defer = !0, h.src = e, d.appendChild(h)
        }
        e.exports = r;
        var a = n(74),
            i = 0
    }, function (e, t, n) {
        function r(e) {
            return function (t, r, i) {
                var o = n(36);
                i = i && o(i) || {}, i.hosts = i.hosts || ["places-dsn.algolia.net", "places-1.algolianet.com", "places-2.algolianet.com", "places-3.algolianet.com"], 0 !== arguments.length && "object" !== typeof t && void 0 !== t || (t = "", r = "", i._allowEmptyCredentials = !0);
                var s = e(t, r, i),
                    u = s.initIndex("places");
                return u.search = a("query", "/1/places/query"), u.getObject = function (e, t) {
                    return this.as._jsonRequest({
                        method: "GET",
                        url: "/1/places/" + encodeURIComponent(e),
                        hostType: "read",
                        callback: t
                    })
                }, u
            }
        }
        e.exports = r;
        var a = n(181)
    }, function (e, t, n) {
        "use strict";
        e.exports = "3.30.0"
    }, function (e, t, n) {
        var r = n(150),
            a = n(22),
            i = n(184),
            o = n(90),
            s = a(function (e) {
                return i(r(e, 1, o, !0))
            });
        e.exports = s
    }, function (e, t, n) {
        var r = n(133),
            a = n(72),
            i = n(94),
            o = r && 1 / i(new r([, -0]))[1] == 1 / 0 ? function (e) {
                return new r(e)
            } : a;
        e.exports = o
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e) {
            return o() + window.location.pathname + e
        }

        function o() {
            return window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "")
        }

        function s() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.useHash || !1,
                n = e.urlUtils;
            return new b(n || (t ? g : y), e)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            c = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            l = n(52),
            f = r(l),
            p = n(108),
            d = r(p),
            h = n(8),
            m = r(h),
            v = f.default.AlgoliaSearchHelper,
            g = {
                ignoreNextPopState: !1,
                character: "#",
                onpopstate: function (e) {
                    var t = this;
                    this._onHashChange = function (n) {
                        if (t.ignoreNextPopState) return void(t.ignoreNextPopState = !1);
                        e(n)
                    }, window.addEventListener("hashchange", this._onHashChange)
                },
                pushState: function (e) {
                    this.ignoreNextPopState = !0, window.location.assign(i(this.createURL(e)))
                },
                createURL: function (e) {
                    return window.location.search + this.character + e
                },
                readUrl: function () {
                    return window.location.hash.slice(1)
                },
                dispose: function () {
                    window.removeEventListener("hashchange", this._onHashChange), window.location.assign(i(""))
                }
            },
            y = {
                character: "?",
                onpopstate: function (e) {
                    this._onPopState = function () {
                        return e.apply(void 0, arguments)
                    }, window.addEventListener("popstate", this._onPopState)
                },
                pushState: function (e, t) {
                    var n = t.getHistoryState;
                    window.history.pushState(n(), "", i(this.createURL(e)))
                },
                createURL: function (e) {
                    return this.character + e + document.location.hash
                },
                readUrl: function () {
                    return window.location.search.slice(1)
                },
                dispose: function () {
                    window.removeEventListener("popstate", this._onPopState), window.history.pushState(null, null, i(""))
                }
            },
            b = function () {
                function e(t, n) {
                    a(this, e), this.urlUtils = t, this.originalConfig = null, this.mapping = n.mapping || {}, this.getHistoryState = n.getHistoryState || function () {
                        return null
                    }, this.threshold = n.threshold || 700, this.trackedParameters = n.trackedParameters || ["query", "attribute:*", "index", "page", "hitsPerPage"], this.firstRender = !0, this.searchParametersFromUrl = v.getConfigurationFromQueryString(this.urlUtils.readUrl(), {
                        mapping: this.mapping
                    })
                }
                return c(e, [{
                    key: "init",
                    value: function (e) {
                        var t = e.state;
                        this.initState = t
                    }
                }, {
                    key: "getConfiguration",
                    value: function (e) {
                        return this.originalConfig = (0, f.default)({}, e.index, e).state, this.searchParametersFromUrl
                    }
                }, {
                    key: "render",
                    value: function (e) {
                        var t = this,
                            n = e.helper,
                            r = e.state;
                        if (this.firstRender) {
                            this.firstRender = !1, this.onHistoryChange(this.onPopState.bind(this, n)), n.on("change", function (e) {
                                return t.renderURLFromState(e)
                            });
                            this.getQueryString(this.initState) !== this.getQueryString(r) && this.renderURLFromState(r)
                        }
                    }
                }, {
                    key: "dispose",
                    value: function (e) {
                        e.helper.removeListener("change", this.renderURLFromState), this.urlUtils.dispose()
                    }
                }, {
                    key: "onPopState",
                    value: function (e, t) {
                        clearTimeout(this.urlUpdateTimeout);
                        var n = e.getState(this.trackedParameters),
                            r = u({}, this.originalConfig, n);
                        (0, m.default)(r, t) || e.overrideStateWithoutTriggeringChangeEvent(t).search()
                    }
                }, {
                    key: "renderURLFromState",
                    value: function (e) {
                        var t = this,
                            n = this.getQueryString(e);
                        clearTimeout(this.urlUpdateTimeout), this.urlUpdateTimeout = setTimeout(function () {
                            t.urlUtils.pushState(n, {
                                getHistoryState: t.getHistoryState
                            })
                        }, this.threshold)
                    }
                }, {
                    key: "getQueryString",
                    value: function (e) {
                        var t = this.urlUtils.readUrl(),
                            n = v.getForeignConfigurationInQueryString(t, {
                                mapping: this.mapping
                            });
                        return d.default.getQueryStringFromState(e.filter(this.trackedParameters), {
                            moreAttributes: n,
                            mapping: this.mapping,
                            safe: !0
                        })
                    }
                }, {
                    key: "createURL",
                    value: function (e, t) {
                        var n = t.absolute,
                            r = e.filter(this.trackedParameters),
                            a = this.urlUtils.createURL(f.default.url.getQueryStringFromState(r, {
                                mapping: this.mapping
                            }));
                        return n ? i(a) : a
                    }
                }, {
                    key: "onHistoryChange",
                    value: function (e) {
                        var t = this;
                        this.urlUtils.onpopstate(function () {
                            var n = t.urlUtils.readUrl(),
                                r = v.getConfigurationFromQueryString(n, {
                                    mapping: t.mapping
                                }),
                                a = u({}, t.originalConfig, r);
                            e(a)
                        })
                    }
                }]), e
            }();
        t.default = s
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            o = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            s = n(52),
            u = r(s),
            c = n(8),
            l = r(c),
            f = function () {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = t.instantSearchInstance,
                        r = t.router,
                        i = t.stateMapping;
                    a(this, e), this.originalConfig = null, this.firstRender = !0, this.router = r, this.stateMapping = i, this.instantSearchInstance = n, this.originalUIState = this.stateMapping.routeToState(this.router.read())
                }
                return o(e, [{
                    key: "init",
                    value: function (e) {
                        var t = e.state;
                        this.initState = this.getAllUIStates({
                            searchParameters: t
                        })
                    }
                }, {
                    key: "getConfiguration",
                    value: function (e) {
                        return this.originalConfig = (0, u.default)({}, e.index, e).state, i({}, this.getAllSearchParameters({
                            currentSearchParameters: this.originalConfig,
                            uiState: this.originalUIState
                        }))
                    }
                }, {
                    key: "render",
                    value: function (e) {
                        var t = e.state;
                        this.firstRender && (this.firstRender = !1, this.setupRouting(t))
                    }
                }, {
                    key: "setupRouting",
                    value: function (e) {
                        var t = this,
                            n = this.instantSearchInstance.helper;
                        this.router.onUpdate(function (r) {
                            var a = t.stateMapping.routeToState(r),
                                o = t.getAllUIStates({
                                    searchParameters: n.state
                                });
                            if (!(0, l.default)(a, o)) {
                                var s = t.getAllSearchParameters({
                                        currentSearchParameters: e,
                                        instantSearchInstance: t.instantSearchInstance,
                                        uiState: a
                                    }),
                                    u = i({}, t.originalConfig, s);
                                (0, l.default)(u, s) || n.overrideStateWithoutTriggeringChangeEvent(s).search()
                            }
                        }), this.renderURLFromState = function (e) {
                            var n = t.getAllUIStates({
                                    searchParameters: e
                                }),
                                r = t.stateMapping.stateToRoute(n);
                            t.router.write(r)
                        }, n.on("change", this.renderURLFromState);
                        var r = this.getAllUIStates({
                            searchParameters: e
                        });
                        if (!(0, l.default)(this.initState, r)) {
                            var a = this.stateMapping.stateToRoute(r);
                            this.router.write(a)
                        }
                    }
                }, {
                    key: "dispose",
                    value: function () {
                        this.renderURLFromState && this.instantSearchInstance.helper.removeListener("change", this.renderURLFromState), this.router.dispose()
                    }
                }, {
                    key: "getAllSearchParameters",
                    value: function (e) {
                        var t = e.currentSearchParameters,
                            n = e.uiState;
                        return this.instantSearchInstance.widgets.reduce(function (e, t) {
                            return t.getWidgetSearchParameters ? t.getWidgetSearchParameters(e, {
                                uiState: n
                            }) : e
                        }, t)
                    }
                }, {
                    key: "getAllUIStates",
                    value: function (e) {
                        var t = e.searchParameters,
                            n = this.instantSearchInstance,
                            r = n.widgets,
                            a = n.helper;
                        return r.filter(function (e) {
                            return Boolean(e.getWidgetState)
                        }).reduce(function (e, n) {
                            return n.getWidgetState(e, {
                                helper: a,
                                searchParameters: t
                            })
                        }, {})
                    }
                }, {
                    key: "createURL",
                    value: function (e) {
                        var t = this.getAllUIStates({
                                searchParameters: e
                            }),
                            n = this.stateMapping.stateToRoute(t);
                        return this.router.createURL(n)
                    }
                }, {
                    key: "onHistoryChange",
                    value: function (e) {
                        var t = this,
                            n = this.instantSearchInstance.helper;
                        this.router.onUpdate(function (r) {
                            var a = t.stateMapping.routeToState(r),
                                o = t.getAllUIStates({
                                    searchParameters: n.state
                                });
                            if (!(0, l.default)(a, o)) {
                                var s = t.getAllSearchParameters({
                                        currentSearchParameters: n.state,
                                        instantSearchInstance: t.instantSearchInstance,
                                        uiState: a
                                    }),
                                    u = i({}, t.originalConfig, s);
                                e(u)
                            }
                        })
                    }
                }]), e
            }();
        t.default = f
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function (e) {
            var t = e.numberLocale;
            return {
                formatNumber: function (e, n) {
                    return Number(n(e)).toLocaleString(t)
                }
            }
        }
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n(188);
        Object.defineProperty(t, "connectClearAll", {
            enumerable: !0,
            get: function () {
                return r(a).default
            }
        });
        var i = n(189);
        Object.defineProperty(t, "connectCurrentRefinedValues", {
            enumerable: !0,
            get: function () {
                return r(i).default
            }
        });
        var o = n(191);
        Object.defineProperty(t, "connectHierarchicalMenu", {
            enumerable: !0,
            get: function () {
                return r(o).default
            }
        });
        var s = n(192);
        Object.defineProperty(t, "connectHits", {
            enumerable: !0,
            get: function () {
                return r(s).default
            }
        });
        var u = n(193);
        Object.defineProperty(t, "connectHitsPerPage", {
            enumerable: !0,
            get: function () {
                return r(u).default
            }
        });
        var c = n(194);
        Object.defineProperty(t, "connectInfiniteHits", {
            enumerable: !0,
            get: function () {
                return r(c).default
            }
        });
        var l = n(110);
        Object.defineProperty(t, "connectMenu", {
            enumerable: !0,
            get: function () {
                return r(l).default
            }
        });
        var f = n(195);
        Object.defineProperty(t, "connectNumericRefinementList", {
            enumerable: !0,
            get: function () {
                return r(f).default
            }
        });
        var p = n(196);
        Object.defineProperty(t, "connectNumericSelector", {
            enumerable: !0,
            get: function () {
                return r(p).default
            }
        });
        var d = n(197);
        Object.defineProperty(t, "connectPagination", {
            enumerable: !0,
            get: function () {
                return r(d).default
            }
        });
        var h = n(199);
        Object.defineProperty(t, "connectPriceRanges", {
            enumerable: !0,
            get: function () {
                return r(h).default
            }
        });
        var m = n(401);
        Object.defineProperty(t, "connectRangeSlider", {
            enumerable: !0,
            get: function () {
                return r(m).default
            }
        });
        var v = n(79);
        Object.defineProperty(t, "connectRange", {
            enumerable: !0,
            get: function () {
                return r(v).default
            }
        });
        var g = n(200);
        Object.defineProperty(t, "connectRefinementList", {
            enumerable: !0,
            get: function () {
                return r(g).default
            }
        });
        var y = n(201);
        Object.defineProperty(t, "connectSearchBox", {
            enumerable: !0,
            get: function () {
                return r(y).default
            }
        });
        var b = n(202);
        Object.defineProperty(t, "connectSortBySelector", {
            enumerable: !0,
            get: function () {
                return r(b).default
            }
        });
        var _ = n(203);
        Object.defineProperty(t, "connectStarRating", {
            enumerable: !0,
            get: function () {
                return r(_).default
            }
        });
        var w = n(204);
        Object.defineProperty(t, "connectStats", {
            enumerable: !0,
            get: function () {
                return r(w).default
            }
        });
        var P = n(205);
        Object.defineProperty(t, "connectToggle", {
            enumerable: !0,
            get: function () {
                return r(P).default
            }
        });
        var R = n(206);
        Object.defineProperty(t, "connectBreadcrumb", {
            enumerable: !0,
            get: function () {
                return r(R).default
            }
        });
        var x = n(207);
        Object.defineProperty(t, "connectGeoSearch", {
            enumerable: !0,
            get: function () {
                return r(x).default
            }
        });
        var S = n(208);
        Object.defineProperty(t, "connectConfigure", {
            enumerable: !0,
            get: function () {
                return r(S).default
            }
        });
        var C = n(402);
        Object.defineProperty(t, "connectAutocomplete", {
            enumerable: !0,
            get: function () {
                return r(C).default
            }
        })
    }, function (e, t, n) {
        function r(e) {
            return e && e.length ? a(e) : []
        }
        var a = n(184);
        e.exports = r
    }, function (e, t, n) {
        function r(e, t, n) {
            t = n ? void 0 : t;
            var o = a(e, i, void 0, void 0, void 0, void 0, void 0, t);
            return o.placeholder = r.placeholder, o
        }
        var a = n(70),
            i = 8;
        r.placeholder = {}, e.exports = r
    }, function (e, t, n) {
        var r = n(390);
        r.Template = n(391).Template, r.template = r.Template, e.exports = r
    }, function (e, t, n) {
        ! function (e) {
            function t(e) {
                "}" === e.n.substr(e.n.length - 1) && (e.n = e.n.substring(0, e.n.length - 1))
            }

            function n(e) {
                return e.trim ? e.trim() : e.replace(/^\s*|\s*$/g, "")
            }

            function r(e, t, n) {
                if (t.charAt(n) != e.charAt(0)) return !1;
                for (var r = 1, a = e.length; r < a; r++)
                    if (t.charAt(n + r) != e.charAt(r)) return !1;
                return !0
            }

            function a(t, n, r, s) {
                var u = [],
                    c = null,
                    l = null,
                    f = null;
                for (l = r[r.length - 1]; t.length > 0;) {
                    if (f = t.shift(), l && "<" == l.tag && !(f.tag in w)) throw new Error("Illegal content in < super tag.");
                    if (e.tags[f.tag] <= e.tags.$ || i(f, s)) r.push(f), f.nodes = a(t, f.tag, r, s);
                    else {
                        if ("/" == f.tag) {
                            if (0 === r.length) throw new Error("Closing tag without opener: /" + f.n);
                            if (c = r.pop(), f.n != c.n && !o(f.n, c.n, s)) throw new Error("Nesting error: " + c.n + " vs. " + f.n);
                            return c.end = f.i, u
                        }
                        "\n" == f.tag && (f.last = 0 == t.length || "\n" == t[0].tag)
                    }
                    u.push(f)
                }
                if (r.length > 0) throw new Error("missing closing tag: " + r.pop().n);
                return u
            }

            function i(e, t) {
                for (var n = 0, r = t.length; n < r; n++)
                    if (t[n].o == e.n) return e.tag = "#", !0
            }

            function o(e, t, n) {
                for (var r = 0, a = n.length; r < a; r++)
                    if (n[r].c == e && n[r].o == t) return !0
            }

            function s(e) {
                var t = [];
                for (var n in e) t.push('"' + c(n) + '": function(c,p,t,i) {' + e[n] + "}");
                return "{ " + t.join(",") + " }"
            }

            function u(e) {
                var t = [];
                for (var n in e.partials) t.push('"' + c(n) + '":{name:"' + c(e.partials[n].name) + '", ' + u(e.partials[n]) + "}");
                return "partials: {" + t.join(",") + "}, subs: " + s(e.subs)
            }

            function c(e) {
                return e.replace(y, "\\\\").replace(m, '\\"').replace(v, "\\n").replace(g, "\\r").replace(b, "\\u2028").replace(_, "\\u2029")
            }

            function l(e) {
                return ~e.indexOf(".") ? "d" : "f"
            }

            function f(e, t) {
                var n = "<" + (t.prefix || ""),
                    r = n + e.n + P++;
                return t.partials[r] = {
                    name: e.n,
                    partials: {}
                }, t.code += 't.b(t.rp("' + c(r) + '",c,p,"' + (e.indent || "") + '"));', r
            }

            function p(e, t) {
                t.code += "t.b(t.t(t." + l(e.n) + '("' + c(e.n) + '",c,p,0)));'
            }

            function d(e) {
                return "t.b(" + e + ");"
            }
            var h = /\S/,
                m = /\"/g,
                v = /\n/g,
                g = /\r/g,
                y = /\\/g,
                b = /\u2028/,
                _ = /\u2029/;
            e.tags = {
                "#": 1,
                "^": 2,
                "<": 3,
                $: 4,
                "/": 5,
                "!": 6,
                ">": 7,
                "=": 8,
                _v: 9,
                "{": 10,
                "&": 11,
                _t: 12
            }, e.scan = function (a, i) {
                function o() {
                    d.length > 0 && (m.push({
                        tag: "_t",
                        text: new String(d)
                    }), d = "")
                }

                function s() {
                    for (var t = !0, n = y; n < m.length; n++)
                        if (!(t = e.tags[m[n].tag] < e.tags._v || "_t" == m[n].tag && null === m[n].text.match(h))) return !1;
                    return t
                }

                function u(e, t) {
                    if (o(), e && s())
                        for (var n, r = y; r < m.length; r++) m[r].text && ((n = m[r + 1]) && ">" == n.tag && (n.indent = m[r].text.toString()), m.splice(r, 1));
                    else t || m.push({
                        tag: "\n"
                    });
                    v = !1, y = m.length
                }
                var c = a.length,
                    l = 0,
                    f = null,
                    p = null,
                    d = "",
                    m = [],
                    v = !1,
                    g = 0,
                    y = 0,
                    b = "{{",
                    _ = "}}";
                for (i && (i = i.split(" "), b = i[0], _ = i[1]), g = 0; g < c; g++) 0 == l ? r(b, a, g) ? (--g, o(), l = 1) : "\n" == a.charAt(g) ? u(v) : d += a.charAt(g) : 1 == l ? (g += b.length - 1, p = e.tags[a.charAt(g + 1)], f = p ? a.charAt(g + 1) : "_v", "=" == f ? (g = function (e, t) {
                    var r = "=" + _,
                        a = e.indexOf(r, t),
                        i = n(e.substring(e.indexOf("=", t) + 1, a)).split(" ");
                    return b = i[0], _ = i[i.length - 1], a + r.length - 1
                }(a, g), l = 0) : (p && g++, l = 2), v = g) : r(_, a, g) ? (m.push({
                    tag: f,
                    n: n(d),
                    otag: b,
                    ctag: _,
                    i: "/" == f ? v - b.length : g + _.length
                }), d = "", g += _.length - 1, l = 0, "{" == f && ("}}" == _ ? g++ : t(m[m.length - 1]))) : d += a.charAt(g);
                return u(v, !0), m
            };
            var w = {
                _t: !0,
                "\n": !0,
                $: !0,
                "/": !0
            };
            e.stringify = function (t, n, r) {
                return "{code: function (c,p,i) { " + e.wrapMain(t.code) + " }," + u(t) + "}"
            };
            var P = 0;
            e.generate = function (t, n, r) {
                P = 0;
                var a = {
                    code: "",
                    subs: {},
                    partials: {}
                };
                return e.walk(t, a), r.asString ? this.stringify(a, n, r) : this.makeTemplate(a, n, r)
            }, e.wrapMain = function (e) {
                return 'var t=this;t.b(i=i||"");' + e + "return t.fl();"
            }, e.template = e.Template, e.makeTemplate = function (e, t, n) {
                var r = this.makePartials(e);
                return r.code = new Function("c", "p", "i", this.wrapMain(e.code)), new this.template(r, t, this, n)
            }, e.makePartials = function (e) {
                var t, n = {
                    subs: {},
                    partials: e.partials,
                    name: e.name
                };
                for (t in n.partials) n.partials[t] = this.makePartials(n.partials[t]);
                for (t in e.subs) n.subs[t] = new Function("c", "p", "t", "i", e.subs[t]);
                return n
            }, e.codegen = {
                "#": function (t, n) {
                    n.code += "if(t.s(t." + l(t.n) + '("' + c(t.n) + '",c,p,1),c,p,0,' + t.i + "," + t.end + ',"' + t.otag + " " + t.ctag + '")){t.rs(c,p,function(c,p,t){', e.walk(t.nodes, n), n.code += "});c.pop();}"
                },
                "^": function (t, n) {
                    n.code += "if(!t.s(t." + l(t.n) + '("' + c(t.n) + '",c,p,1),c,p,1,0,0,"")){', e.walk(t.nodes, n), n.code += "};"
                },
                ">": f,
                "<": function (t, n) {
                    var r = {
                        partials: {},
                        code: "",
                        subs: {},
                        inPartial: !0
                    };
                    e.walk(t.nodes, r);
                    var a = n.partials[f(t, n)];
                    a.subs = r.subs, a.partials = r.partials
                },
                $: function (t, n) {
                    var r = {
                        subs: {},
                        code: "",
                        partials: n.partials,
                        prefix: t.n
                    };
                    e.walk(t.nodes, r), n.subs[t.n] = r.code, n.inPartial || (n.code += 't.sub("' + c(t.n) + '",c,p,i);')
                },
                "\n": function (e, t) {
                    t.code += d('"\\n"' + (e.last ? "" : " + i"))
                },
                _v: function (e, t) {
                    t.code += "t.b(t.v(t." + l(e.n) + '("' + c(e.n) + '",c,p,0)));'
                },
                _t: function (e, t) {
                    t.code += d('"' + c(e.text) + '"')
                },
                "{": p,
                "&": p
            }, e.walk = function (t, n) {
                for (var r, a = 0, i = t.length; a < i; a++)(r = e.codegen[t[a].tag]) && r(t[a], n);
                return n
            }, e.parse = function (e, t, n) {
                return n = n || {}, a(e, "", [], n.sectionTags || [])
            }, e.cache = {}, e.cacheKey = function (e, t) {
                return [e, !!t.asString, !!t.disableLambda, t.delimiters, !!t.modelGet].join("||")
            }, e.compile = function (t, n) {
                n = n || {};
                var r = e.cacheKey(t, n),
                    a = this.cache[r];
                if (a) {
                    var i = a.partials;
                    for (var o in i) delete i[o].instance;
                    return a
                }
                return a = this.generate(this.parse(this.scan(t, n.delimiters), t, n), t, n), this.cache[r] = a
            }
        }(t)
    }, function (e, t, n) {
        ! function (e) {
            function t(e, t, n) {
                var r;
                return t && "object" == typeof t && (void 0 !== t[e] ? r = t[e] : n && t.get && "function" == typeof t.get && (r = t.get(e))), r
            }

            function n(e, t, n, r, a, i) {
                function o() {}

                function s() {}
                o.prototype = e, s.prototype = e.subs;
                var u, c = new o;
                c.subs = new s, c.subsText = {}, c.buf = "", r = r || {}, c.stackSubs = r, c.subsText = i;
                for (u in t) r[u] || (r[u] = t[u]);
                for (u in r) c.subs[u] = r[u];
                a = a || {}, c.stackPartials = a;
                for (u in n) a[u] || (a[u] = n[u]);
                for (u in a) c.partials[u] = a[u];
                return c
            }

            function r(e) {
                return String(null === e || void 0 === e ? "" : e)
            }

            function a(e) {
                return e = r(e), l.test(e) ? e.replace(i, "&amp;").replace(o, "&lt;").replace(s, "&gt;").replace(u, "&#39;").replace(c, "&quot;") : e
            }
            e.Template = function (e, t, n, r) {
                e = e || {}, this.r = e.code || this.r, this.c = n, this.options = r || {}, this.text = t || "", this.partials = e.partials || {}, this.subs = e.subs || {}, this.buf = ""
            }, e.Template.prototype = {
                r: function (e, t, n) {
                    return ""
                },
                v: a,
                t: r,
                render: function (e, t, n) {
                    return this.ri([e], t || {}, n)
                },
                ri: function (e, t, n) {
                    return this.r(e, t, n)
                },
                ep: function (e, t) {
                    var r = this.partials[e],
                        a = t[r.name];
                    if (r.instance && r.base == a) return r.instance;
                    if ("string" == typeof a) {
                        if (!this.c) throw new Error("No compiler available.");
                        a = this.c.compile(a, this.options)
                    }
                    if (!a) return null;
                    if (this.partials[e].base = a, r.subs) {
                        t.stackText || (t.stackText = {});
                        for (key in r.subs) t.stackText[key] || (t.stackText[key] = void 0 !== this.activeSub && t.stackText[this.activeSub] ? t.stackText[this.activeSub] : this.text);
                        a = n(a, r.subs, r.partials, this.stackSubs, this.stackPartials, t.stackText)
                    }
                    return this.partials[e].instance = a, a
                },
                rp: function (e, t, n, r) {
                    var a = this.ep(e, n);
                    return a ? a.ri(t, n, r) : ""
                },
                rs: function (e, t, n) {
                    var r = e[e.length - 1];
                    if (!f(r)) return void n(e, t, this);
                    for (var a = 0; a < r.length; a++) e.push(r[a]), n(e, t, this), e.pop()
                },
                s: function (e, t, n, r, a, i, o) {
                    var s;
                    return (!f(e) || 0 !== e.length) && ("function" == typeof e && (e = this.ms(e, t, n, r, a, i, o)), s = !!e, !r && s && t && t.push("object" == typeof e ? e : t[t.length - 1]), s)
                },
                d: function (e, n, r, a) {
                    var i, o = e.split("."),
                        s = this.f(o[0], n, r, a),
                        u = this.options.modelGet,
                        c = null;
                    if ("." === e && f(n[n.length - 2])) s = n[n.length - 1];
                    else
                        for (var l = 1; l < o.length; l++) i = t(o[l], s, u), void 0 !== i ? (c = s, s = i) : s = "";
                    return !(a && !s) && (a || "function" != typeof s || (n.push(c), s = this.mv(s, n, r), n.pop()), s)
                },
                f: function (e, n, r, a) {
                    for (var i = !1, o = null, s = !1, u = this.options.modelGet, c = n.length - 1; c >= 0; c--)
                        if (o = n[c], void 0 !== (i = t(e, o, u))) {
                            s = !0;
                            break
                        } return s ? (a || "function" != typeof i || (i = this.mv(i, n, r)), i) : !a && ""
                },
                ls: function (e, t, n, a, i) {
                    var o = this.options.delimiters;
                    return this.options.delimiters = i, this.b(this.ct(r(e.call(t, a)), t, n)), this.options.delimiters = o, !1
                },
                ct: function (e, t, n) {
                    if (this.options.disableLambda) throw new Error("Lambda features disabled.");
                    return this.c.compile(e, this.options).render(t, n)
                },
                b: function (e) {
                    this.buf += e
                },
                fl: function () {
                    var e = this.buf;
                    return this.buf = "", e
                },
                ms: function (e, t, n, r, a, i, o) {
                    var s, u = t[t.length - 1],
                        c = e.call(u);
                    return "function" == typeof c ? !!r || (s = this.activeSub && this.subsText && this.subsText[this.activeSub] ? this.subsText[this.activeSub] : this.text, this.ls(c, u, n, s.substring(a, i), o)) : c
                },
                mv: function (e, t, n) {
                    var a = t[t.length - 1],
                        i = e.call(a);
                    return "function" == typeof i ? this.ct(r(i.call(a)), a, n) : i
                },
                sub: function (e, t, n, r) {
                    var a = this.subs[e];
                    a && (this.activeSub = e, a(t, n, this, r), this.activeSub = !1)
                }
            };
            var i = /&/g,
                o = /</g,
                s = />/g,
                u = /\'/g,
                c = /\"/g,
                l = /[&<>\"\']/,
                f = Array.isArray || function (e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                }
        }(t)
    }, function (e, t, n) {
        function r(e) {
            return e = i(e), e && s.test(e) ? e.replace(o, a) : e
        }
        var a = n(393),
            i = n(63),
            o = /[&<>"']/g,
            s = RegExp(o.source);
        e.exports = r
    }, function (e, t, n) {
        var r = n(394),
            a = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            },
            i = r(a);
        e.exports = i
    }, function (e, t) {
        function n(e) {
            return function (t) {
                return null == e ? void 0 : e[t]
            }
        }
        e.exports = n
    }, function (e, t, n) {
        function r(e, t, n) {
            var r = s(e) ? a : o;
            return n && u(e, t, n) && (t = void 0), r(e, i(t, 3))
        }
        var a = n(128),
            i = n(10),
            o = n(396),
            s = n(4),
            u = n(69);
        e.exports = r
    }, function (e, t, n) {
        function r(e, t) {
            var n;
            return a(e, function (e, r, a) {
                return !(n = t(e, r, a))
            }), !!n
        }
        var a = n(45);
        e.exports = r
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = n(198),
            o = function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(i),
            s = function () {
                function e(t) {
                    r(this, e), this.currentPage = t.currentPage, this.total = t.total, this.padding = t.padding
                }
                return a(e, [{
                    key: "pages",
                    value: function () {
                        var e = this.total,
                            t = this.currentPage,
                            n = this.padding;
                        if (0 === e) return [0];
                        var r = this.nbPagesDisplayed(n, e);
                        if (r === e) return (0, o.default)(0, e);
                        var a = this.calculatePaddingLeft(t, n, e, r),
                            i = r - a,
                            s = t - a,
                            u = t + i;
                        return (0, o.default)(s, u)
                    }
                }, {
                    key: "nbPagesDisplayed",
                    value: function (e, t) {
                        return Math.min(2 * e + 1, t)
                    }
                }, {
                    key: "calculatePaddingLeft",
                    value: function (e, t, n, r) {
                        return e <= t ? e : e >= n - t ? r - (n - e) : t
                    }
                }, {
                    key: "isLastPage",
                    value: function () {
                        return this.currentPage === this.total - 1
                    }
                }, {
                    key: "isFirstPage",
                    value: function () {
                        return 0 === this.currentPage
                    }
                }]), e
            }();
        t.default = s
    }, function (e, t, n) {
        function r(e) {
            return function (t, n, r) {
                return r && "number" != typeof r && i(t, n, r) && (n = r = void 0), t = o(t), void 0 === n ? (n = t, t = 0) : n = o(n), r = void 0 === r ? t < n ? 1 : -1 : o(r), a(t, n, r, e)
            }
        }
        var a = n(399),
            i = n(69),
            o = n(151);
        e.exports = r
    }, function (e, t) {
        function n(e, t, n, i) {
            for (var o = -1, s = a(r((t - e) / (n || 1)), 0), u = Array(s); s--;) u[i ? s : ++o] = e, e += n;
            return u
        }
        var r = Math.ceil,
            a = Math.max;
        e.exports = n
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            var n = Math.round(e / t) * t;
            return n < 1 && (n = 1), n
        }

        function a(e) {
            if (e.min === e.max) return [];
            var t = void 0;
            t = e.avg < 100 ? 1 : e.avg < 1e3 ? 10 : 100;
            for (var n = r(Math.round(e.avg), t), a = Math.ceil(e.min), i = r(Math.floor(e.max), t); i > e.max;) i -= t;
            var o = void 0,
                s = void 0,
                u = [];
            if (a !== i) {
                for (o = a, u.push({
                        to: o
                    }); o < n;) s = u[u.length - 1].to, o = r(s + (n - a) / 3, t), o <= s && (o = s + 1), u.push({
                    from: s,
                    to: o
                });
                for (; o < i;) s = u[u.length - 1].to, o = r(s + (i - n) / 3, t), o <= s && (o = s + 1), u.push({
                    from: s,
                    to: o
                });
                1 === u.length && o !== n && (u.push({
                    from: o,
                    to: n
                }), o = n), 1 === u.length ? (u[0].from = e.min, u[0].to = e.max) : delete u[u.length - 1].to
            }
            return u
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = a
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(0),
            a = n(79),
            i = function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(a);
        t.default = (0, r.deprecate)(i.default, "'connectRangeSlider' was replaced by 'connectRange'.\n  Please see https://community.algolia.com/instantsearch.js/v2/connectors/connectRange.html")
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            return (0, o.checkRendering)(e, s),
                function () {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = n.indices,
                        o = void 0 === r ? [] : r;
                    if (!Array.isArray(o)) throw new Error(s);
                    return {
                        getConfiguration: function () {
                            return n.escapeHits ? a.tagConfig : void 0
                        },
                        init: function (e) {
                            var t = this,
                                n = e.instantSearchInstance,
                                r = e.helper;
                            this._refine = this.refine(r), this.indices = [{
                                helper: r,
                                label: "primary",
                                index: r.getIndex(),
                                results: void 0,
                                hits: []
                            }], o.forEach(function (e) {
                                var n = e.label,
                                    a = e.value,
                                    i = r.derive(function (e) {
                                        return e.setIndex(a)
                                    });
                                t.indices.push({
                                    label: n,
                                    index: a,
                                    helper: i,
                                    results: void 0,
                                    hits: []
                                }), i.on("result", function (e) {
                                    return t.saveResults({
                                        results: e,
                                        label: n
                                    })
                                })
                            }), this.instantSearchInstance = n, this.renderWithAllIndices({
                                isFirstRendering: !0
                            })
                        },
                        saveResults: function (e) {
                            var t = e.results,
                                r = e.label,
                                a = this.indices.find(function (e) {
                                    return e.label === r
                                });
                            n.escapeHits && t.hits && t.hits.length > 0 && (t.hits = (0, i.default)(t.hits)), a.results = t, a.hits = t && t.hits && Array.isArray(t.hits) ? t.hits : [], this.renderWithAllIndices()
                        },
                        refine: function (e) {
                            return function (t) {
                                return e.setQuery(t).search()
                            }
                        },
                        render: function (e) {
                            var t = e.results;
                            this.saveResults({
                                results: t,
                                label: this.indices[0].label
                            })
                        },
                        renderWithAllIndices: function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                r = t.isFirstRendering,
                                a = void 0 !== r && r,
                                i = this.indices[0].helper.state.query;
                            e({
                                widgetParams: n,
                                currentRefinement: i,
                                indices: this.indices.map(function (e) {
                                    return {
                                        index: e.index,
                                        label: e.label,
                                        hits: e.hits,
                                        results: e.results
                                    }
                                }),
                                instantSearchInstance: this.instantSearchInstance,
                                refine: this._refine
                            }, a)
                        },
                        dispose: function () {
                            this.indices.slice(1).forEach(function (e) {
                                return e.helper.detach()
                            }), t()
                        }
                    }
                }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = r;
        var a = n(78),
            i = function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(a),
            o = n(0),
            s = "Usage:\nvar customAutcomplete = connectAutocomplete(function render(params, isFirstRendering) {\n  // params = {\n  //   indices,\n  //   refine,\n  //   currentRefinement\n  // }\n});\nsearch.addWiget(customAutcomplete({\n  [ indices ],\n  [ escapeHits = false ]\n}));\nFull documentation available at https://community.algolia.com/instantsearch.js/connectors/connectAutocomplete.html\n"
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n(404);
        Object.defineProperty(t, "clearAll", {
            enumerable: !0,
            get: function () {
                return r(a).default
            }
        });
        var i = n(413);
        Object.defineProperty(t, "configure", {
            enumerable: !0,
            get: function () {
                return r(i).default
            }
        });
        var o = n(414);
        Object.defineProperty(t, "currentRefinedValues", {
            enumerable: !0,
            get: function () {
                return r(o).default
            }
        });
        var s = n(417);
        Object.defineProperty(t, "geoSearch", {
            enumerable: !0,
            get: function () {
                return r(s).default
            }
        });
        var u = n(424);
        Object.defineProperty(t, "hierarchicalMenu", {
            enumerable: !0,
            get: function () {
                return r(u).default
            }
        });
        var c = n(428);
        Object.defineProperty(t, "hits", {
            enumerable: !0,
            get: function () {
                return r(c).default
            }
        });
        var l = n(431);
        Object.defineProperty(t, "hitsPerPageSelector", {
            enumerable: !0,
            get: function () {
                return r(l).default
            }
        });
        var f = n(432);
        Object.defineProperty(t, "infiniteHits", {
            enumerable: !0,
            get: function () {
                return r(f).default
            }
        });
        var p = n(435);
        Object.defineProperty(t, "menu", {
            enumerable: !0,
            get: function () {
                return r(p).default
            }
        });
        var d = n(438);
        Object.defineProperty(t, "refinementList", {
            enumerable: !0,
            get: function () {
                return r(d).default
            }
        });
        var h = n(441);
        Object.defineProperty(t, "numericRefinementList", {
            enumerable: !0,
            get: function () {
                return r(h).default
            }
        });
        var m = n(443);
        Object.defineProperty(t, "numericSelector", {
            enumerable: !0,
            get: function () {
                return r(m).default
            }
        });
        var v = n(444);
        Object.defineProperty(t, "pagination", {
            enumerable: !0,
            get: function () {
                return r(v).default
            }
        });
        var g = n(449);
        Object.defineProperty(t, "priceRanges", {
            enumerable: !0,
            get: function () {
                return r(g).default
            }
        });
        var y = n(453);
        Object.defineProperty(t, "rangeInput", {
            enumerable: !0,
            get: function () {
                return r(y).default
            }
        });
        var b = n(456);
        Object.defineProperty(t, "searchBox", {
            enumerable: !0,
            get: function () {
                return r(b).default
            }
        });
        var _ = n(458);
        Object.defineProperty(t, "rangeSlider", {
            enumerable: !0,
            get: function () {
                return r(_).default
            }
        });
        var w = n(467);
        Object.defineProperty(t, "sortBySelector", {
            enumerable: !0,
            get: function () {
                return r(w).default
            }
        });
        var P = n(468);
        Object.defineProperty(t, "starRating", {
            enumerable: !0,
            get: function () {
                return r(P).default
            }
        });
        var R = n(471);
        Object.defineProperty(t, "stats", {
            enumerable: !0,
            get: function () {
                return r(R).default
            }
        });
        var x = n(474);
        Object.defineProperty(t, "toggle", {
            enumerable: !0,
            get: function () {
                return r(x).default
            }
        });
        var S = n(476);
        Object.defineProperty(t, "analytics", {
            enumerable: !0,
            get: function () {
                return r(S).default
            }
        });
        var C = n(477);
        Object.defineProperty(t, "breadcrumb", {
            enumerable: !0,
            get: function () {
                return r(C).default
            }
        });
        var j = n(480);
        Object.defineProperty(t, "menuSelect", {
            enumerable: !0,
            get: function () {
                return r(j).default
            }
        })
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e) {
            var t = e.container,
                n = e.templates,
                r = void 0 === n ? m.default : n,
                a = e.cssClasses,
                o = void 0 === a ? {} : a,
                s = e.collapsible,
                u = void 0 !== s && s,
                c = e.autoHideContainer,
                p = void 0 === c || c,
                h = e.excludeAttributes,
                b = void 0 === h ? [] : h,
                _ = e.clearsQuery,
                w = void 0 !== _ && _;
            if (!t) throw new Error(y);
            var P = (0, f.getContainerNode)(t),
                R = {
                    root: (0, l.default)(v(null), o.root),
                    header: (0, l.default)(v("header"), o.header),
                    body: (0, l.default)(v("body"), o.body),
                    footer: (0, l.default)(v("footer"), o.footer),
                    link: (0, l.default)(v("link"), o.link)
                },
                x = g({
                    containerNode: P,
                    cssClasses: R,
                    collapsible: u,
                    autoHideContainer: p,
                    renderState: {},
                    templates: r
                });
            try {
                return (0, d.default)(x, function () {
                    return (0, i.unmountComponentAtNode)(P)
                })({
                    excludeAttributes: b,
                    clearsQuery: w
                })
            } catch (e) {
                throw new Error(y)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = a;
        var i = n(1),
            o = r(i),
            s = n(407),
            u = r(s),
            c = n(2),
            l = r(c),
            f = n(0),
            p = n(188),
            d = r(p),
            h = n(412),
            m = r(h),
            v = (0, f.bemHelper)("ais-clear-all"),
            g = function (e) {
                var t = e.containerNode,
                    n = e.cssClasses,
                    r = e.collapsible,
                    a = e.autoHideContainer,
                    s = e.renderState,
                    c = e.templates;
                return function (e, l) {
                    var p = e.refine,
                        d = e.hasRefinements,
                        h = e.createURL,
                        v = e.instantSearchInstance;
                    if (l) return void(s.templateProps = (0, f.prepareTemplateProps)({
                        defaultTemplates: m.default,
                        templatesConfig: v.templatesConfig,
                        templates: c
                    }));
                    var g = a && !d;
                    (0, i.render)(o.default.createElement(u.default, {
                        refine: p,
                        collapsible: r,
                        cssClasses: n,
                        hasRefinements: d,
                        shouldAutoHideContainer: g,
                        templateProps: s.templateProps,
                        url: h()
                    }), t)
                }
            },
            y = "Usage:\nclearAll({\n  container,\n  [ cssClasses.{root,header,body,footer,link}={} ],\n  [ templates.{header,link,footer}={link: 'Clear all'} ],\n  [ autoHideContainer=true ],\n  [ collapsible=false ],\n  [ excludeAttributes=[] ]\n})"
    }, function (e, t, n) {
        "use strict";

        function r() {}
        var a = n(406);
        e.exports = function () {
            function e(e, t, n, r, i, o) {
                if (o !== a) {
                    var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                    throw s.name = "Invariant Violation", s
                }
            }

            function t() {
                return e
            }
            e.isRequired = e;
            var n = {
                array: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: t,
                element: e,
                instanceOf: t,
                node: e,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t,
                exact: t
            };
            return n.checkPropTypes = r, n.PropTypes = n, n
        }
    }, function (e, t, n) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function o(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.RawClearAll = void 0;
        var s = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            u = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            c = n(3),
            l = (r(c), n(1)),
            f = r(l),
            p = n(12),
            d = r(p),
            h = n(0),
            m = n(13),
            v = r(m),
            g = n(20),
            y = r(g),
            b = t.RawClearAll = function (e) {
                function t() {
                    return a(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return o(t, e), u(t, [{
                    key: "componentWillMount",
                    value: function () {
                        this.handleClick = this.handleClick.bind(this)
                    }
                }, {
                    key: "shouldComponentUpdate",
                    value: function (e) {
                        return this.props.url !== e.url || this.props.hasRefinements !== e.hasRefinements
                    }
                }, {
                    key: "handleClick",
                    value: function (e) {
                        (0, h.isSpecialClick)(e) || (e.preventDefault(), this.props.refine())
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this.props,
                            t = e.hasRefinements,
                            n = e.cssClasses,
                            r = {
                                hasRefinements: t
                            };
                        return f.default.createElement("a", {
                            className: t ? n.link : n.link + " " + n.link + "-disabled",
                            href: this.props.url,
                            onClick: this.handleClick
                        }, f.default.createElement(d.default, s({
                            data: r,
                            templateKey: "link"
                        }, this.props.templateProps)))
                    }
                }]), t
            }(l.Component);
        t.default = (0, v.default)((0, y.default)(b))
    }, function (e, t, n) {
        "use strict";
        var r = n(409),
            a = n(410),
            i = n(411);
        e.exports = function () {
            function e(e, t, n, r, o, s) {
                s !== i && a(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")
            }

            function t() {
                return e
            }
            e.isRequired = e;
            var n = {
                array: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: t,
                element: e,
                instanceOf: t,
                node: e,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t,
                exact: t
            };
            return n.checkPropTypes = r, n.PropTypes = n, n
        }
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return function () {
                return e
            }
        }
        var a = function () {};
        a.thatReturns = r, a.thatReturnsFalse = r(!1), a.thatReturnsTrue = r(!0), a.thatReturnsNull = r(null), a.thatReturnsThis = function () {
            return this
        }, a.thatReturnsArgument = function (e) {
            return e
        }, e.exports = a
    }, function (e, t, n) {
        "use strict";

        function r(e, t, n, r, i, o, s, u) {
            if (a(t), !e) {
                var c;
                if (void 0 === t) c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                else {
                    var l = [n, r, i, o, s, u],
                        f = 0;
                    c = new Error(t.replace(/%s/g, function () {
                        return l[f++]
                    })), c.name = "Invariant Violation"
                }
                throw c.framesToPop = 1, c
            }
        }
        var a = function (e) {};
        e.exports = r
    }, function (e, t, n) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            header: "",
            link: "Clear all",
            footer: ""
        }
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            try {
                return (0, i.default)()({
                    searchParameters: e
                })
            } catch (e) {
                throw new Error(o)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = r;
        var a = n(208),
            i = function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(a),
            o = "Usage:\nsearch.addWidget(\n  instantsearch.widgets.configure({\n    // any searchParameter\n  })\n);\nFull documentation available at https://community.algolia.com/instantsearch.js/v2/widgets/configure.html\n"
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e) {
            var t = e.container,
                n = e.attributes,
                r = void 0 === n ? [] : n,
                a = e.onlyListedAttributes,
                o = void 0 !== a && a,
                s = e.clearAll,
                c = void 0 === s ? "before" : s,
                f = e.templates,
                d = void 0 === f ? O.default : f,
                m = e.transformData,
                g = e.autoHideContainer,
                b = void 0 === g || g,
                w = e.cssClasses,
                R = void 0 === w ? {} : w,
                x = e.collapsible,
                S = void 0 !== x && x,
                j = e.clearsQuery,
                k = void 0 !== j && j,
                T = e.transformItems,
                L = (0, l.default)(m) || (0, _.default)(m) || (0, y.default)(m) && (0, _.default)(m.item),
                I = ["header", "item", "clearAll", "footer"],
                A = (0, y.default)(d) && (0, P.default)(d, function (e, t, n) {
                    return e && -1 !== I.indexOf(n) && ((0, h.default)(t) || (0, _.default)(t))
                }, !0),
                H = ["root", "header", "body", "clearAll", "list", "item", "link", "count", "footer"],
                U = (0, y.default)(R) && (0, P.default)(R, function (e, t, n) {
                    return e && -1 !== H.indexOf(n) && (0, h.default)(t) || (0, v.default)(t)
                }, !0);
            if (!((0, h.default)(t) || (0, N.isDomElement)(t)) || !(0, v.default)(r) || !(0, p.default)(o) || -1 === [!1, "before", "after"].indexOf(c) || !(0, y.default)(d) || !A || !L || !(0, p.default)(b) || !U) throw new Error(M);
            var D = (0, N.getContainerNode)(t),
                B = {
                    root: (0, u.default)(E(null), R.root),
                    header: (0, u.default)(E("header"), R.header),
                    body: (0, u.default)(E("body"), R.body),
                    clearAll: (0, u.default)(E("clear-all"), R.clearAll),
                    list: (0, u.default)(E("list"), R.list),
                    item: (0, u.default)(E("item"), R.item),
                    link: (0, u.default)(E("link"), R.link),
                    count: (0, u.default)(E("count"), R.count),
                    footer: (0, u.default)(E("footer"), R.footer)
                },
                V = F({
                    containerNode: D,
                    clearAllPosition: c,
                    collapsible: S,
                    cssClasses: B,
                    autoHideContainer: b,
                    renderState: {},
                    templates: d,
                    transformData: m
                });
            try {
                return (0, C.default)(V, function () {
                    return (0, i.unmountComponentAtNode)(D)
                })({
                    attributes: r,
                    onlyListedAttributes: o,
                    clearAll: c,
                    clearsQuery: k,
                    transformItems: T
                })
            } catch (e) {
                throw new Error(M)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = a;
        var i = n(1),
            o = r(i),
            s = n(2),
            u = r(s),
            c = n(67),
            l = r(c),
            f = n(190),
            p = r(f),
            d = n(26),
            h = r(d),
            m = n(4),
            v = r(m),
            g = n(23),
            y = r(g),
            b = n(17),
            _ = r(b),
            w = n(19),
            P = r(w),
            R = n(415),
            x = r(R),
            S = n(189),
            C = r(S),
            j = n(416),
            O = r(j),
            N = n(0),
            E = (0, N.bemHelper)("ais-current-refined-values"),
            F = function (e) {
                var t = e.autoHideContainer,
                    n = e.clearAllPosition,
                    r = e.collapsible,
                    a = e.containerNode,
                    s = e.cssClasses,
                    u = e.renderState,
                    c = e.transformData,
                    l = e.templates;
                return function (e, f) {
                    var p = e.attributes,
                        d = e.clearAllClick,
                        h = e.clearAllURL,
                        m = e.refine,
                        v = e.createURL,
                        g = e.refinements,
                        y = e.instantSearchInstance;
                    if (f) return void(u.templateProps = (0, N.prepareTemplateProps)({
                        transformData: c,
                        defaultTemplates: O.default,
                        templatesConfig: y.templatesConfig,
                        templates: l
                    }));
                    var b = t && g && 0 === g.length,
                        _ = g.map(function (e) {
                            return m.bind(null, e)
                        }),
                        w = g.map(function (e) {
                            return v(e)
                        });
                    (0, i.render)(o.default.createElement(x.default, {
                        attributes: p,
                        clearAllClick: d,
                        clearAllPosition: n,
                        clearAllURL: h,
                        clearRefinementClicks: _,
                        clearRefinementURLs: w,
                        collapsible: r,
                        cssClasses: s,
                        refinements: g,
                        shouldAutoHideContainer: b,
                        templateProps: u.templateProps
                    }), a)
                }
            },
            M = "Usage:\ncurrentRefinedValues({\n  container,\n  [ attributes: [{name[, label, template, transformData]}] ],\n  [ onlyListedAttributes = false ],\n  [ clearAll = 'before' ] // One of ['before', 'after', false]\n  [ templates.{header,item,clearAll,footer} ],\n  [ transformData.{item} ],\n  [ autoHideContainer = true ],\n  [ cssClasses.{root, header, body, clearAll, list, item, link, count, footer} = {} ],\n  [ collapsible = false ],\n  [ clearsQuery = false ],\n  [ transformItems ]\n})"
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function o(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function s(e) {
            var t = {};
            return void 0 !== e.template && (t.templates = {
                item: e.template
            }), void 0 !== e.transformData && (t.transformData = e.transformData), t
        }

        function u(e, t, n) {
            var r = (0, S.default)(t);
            return r.cssClasses = n, void 0 !== e.label && (r.label = e.label), void 0 !== r.operator && (r.displayOperator = r.operator, ">=" === r.operator && (r.displayOperator = "&ge;"), "<=" === r.operator && (r.displayOperator = "&le;")), r
        }

        function c(e) {
            return function (t) {
                (0, w.isSpecialClick)(t) || (t.preventDefault(), e())
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.RawCurrentRefinedValues = void 0;
        var l = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            f = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            p = n(3),
            d = (r(p), n(1)),
            h = r(d),
            m = n(12),
            v = r(m),
            g = n(20),
            y = r(g),
            b = n(13),
            _ = r(b),
            w = n(0),
            P = n(11),
            R = r(P),
            x = n(210),
            S = r(x),
            C = n(8),
            j = r(C),
            O = t.RawCurrentRefinedValues = function (e) {
                function t() {
                    return a(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return o(t, e), f(t, [{
                    key: "shouldComponentUpdate",
                    value: function (e) {
                        return !(0, j.default)(this.props.refinements, e.refinements)
                    }
                }, {
                    key: "_clearAllElement",
                    value: function (e, t) {
                        if (t === e) {
                            var n = this.props,
                                r = n.refinements,
                                a = n.cssClasses;
                            return h.default.createElement("a", {
                                className: r && r.length > 0 ? a.clearAll : a.clearAll + " " + a.clearAll + "-disabled",
                                href: this.props.clearAllURL,
                                onClick: c(this.props.clearAllClick)
                            }, h.default.createElement(v.default, l({
                                templateKey: "clearAll"
                            }, this.props.templateProps)))
                        }
                    }
                }, {
                    key: "_refinementElement",
                    value: function (e, t) {
                        var n = this.props.attributes[e.attributeName] || {},
                            r = u(n, e, this.props.cssClasses),
                            a = s(n),
                            i = e.attributeName + (e.operator ? e.operator : ":") + (e.exclude ? e.exclude : "") + e.name;
                        return h.default.createElement("div", {
                            className: this.props.cssClasses.item,
                            key: i
                        }, h.default.createElement("a", {
                            className: this.props.cssClasses.link,
                            href: this.props.clearRefinementURLs[t],
                            onClick: c(this.props.clearRefinementClicks[t])
                        }, h.default.createElement(v.default, l({
                            data: r,
                            templateKey: "item"
                        }, this.props.templateProps, a))))
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this,
                            t = (0, R.default)(this.props.refinements, function (t, n) {
                                return e._refinementElement(t, n)
                            });
                        return h.default.createElement("div", null, this._clearAllElement("before", this.props.clearAllPosition), h.default.createElement("div", {
                            className: this.props.cssClasses.list
                        }, t), this._clearAllElement("after", this.props.clearAllPosition))
                    }
                }]), t
            }(d.Component);
        t.default = (0, _.default)((0, y.default)(O))
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            var t = e.type,
                n = e.label,
                r = e.operator,
                a = e.displayOperator,
                i = e.exclude,
                o = e.name,
                s = e.count,
                u = e.cssClasses,
                c = r ? a : "",
                l = n ? n + " " + (c || ":") + " " : c,
                f = void 0 === s ? 0 : s,
                p = "query" === t ? "" : '<span class="' + u.count + '">' + f + "</span>";
            return l + " " + (i ? "-" : "") + " " + ("query" === t ? "<q>" + o + "</q>" : o) + " " + p
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            header: "",
            item: r,
            clearAll: "Clear all",
            footer: ""
        }
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            var n = {};
            for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
            return n
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            o = n(2),
            s = r(o),
            u = n(72),
            c = r(u),
            l = n(1),
            f = n(0),
            p = n(207),
            d = r(p),
            h = n(418),
            m = r(h),
            v = n(422),
            g = r(v),
            y = n(423),
            b = r(y),
            _ = (0, f.bemHelper)("ais-geo-search"),
            w = "Usage:\n\ngeoSearch({\n  container,\n  googleReference,\n  [ initialZoom = 1 ],\n  [ initialPosition = { lat: 0, lng: 0 } ],\n  [ paddingBoundingBox = { top: 0, right: 0, bottom: 0, right: 0 } ],\n  [ cssClasses.{root,map,controls,clear,control,toggleLabel,toggleLabelActive,toggleInput,redo} = {} ],\n  [ templates.{clear,toggle,redo} ],\n  [ mapOptions ],\n  [ builtInMarker ],\n  [ customHTMLMarker = false ],\n  [ enableClearMapRefinement = true ],\n  [ enableRefineControl = true ],\n  [ enableRefineOnMapMove = true ],\n  [ enableGeolocationWithIP = true ],\n  [ position ],\n  [ radius ],\n  [ precision ],\n})\n\nFull documentation available at https://community.algolia.com/instantsearch.js/v2/widgets/geoSearch.html\n",
            P = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.initialZoom,
                    n = void 0 === t ? 1 : t,
                    r = e.initialPosition,
                    o = void 0 === r ? {
                        lat: 0,
                        lng: 0
                    } : r,
                    u = e.templates,
                    p = void 0 === u ? {} : u,
                    h = e.cssClasses,
                    v = void 0 === h ? {} : h,
                    y = e.paddingBoundingBox,
                    P = void 0 === y ? {} : y,
                    R = e.builtInMarker,
                    x = void 0 === R ? {} : R,
                    S = e.customHTMLMarker,
                    C = void 0 !== S && S,
                    j = e.enableClearMapRefinement,
                    O = void 0 === j || j,
                    N = e.enableRefineControl,
                    E = void 0 === N || N,
                    F = e.container,
                    M = e.googleReference,
                    k = a(e, ["initialZoom", "initialPosition", "templates", "cssClasses", "paddingBoundingBox", "builtInMarker", "customHTMLMarker", "enableClearMapRefinement", "enableRefineControl", "container", "googleReference"]),
                    T = {
                        createOptions: c.default,
                        events: {}
                    },
                    L = {
                        template: "<p>Your custom HTML Marker</p>",
                        createOptions: c.default,
                        events: {}
                    },
                    I = {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    };
                if (!F) throw new Error('Must provide a "container". ' + w);
                if (!M) throw new Error('Must provide a "googleReference". ' + w);
                var A = (0, f.getContainerNode)(F),
                    H = {
                        root: (0, s.default)(_(null), v.root),
                        map: (0, s.default)(_("map"), v.map),
                        controls: (0, s.default)(_("controls"), v.controls),
                        clear: (0, s.default)(_("clear"), v.clear),
                        control: (0, s.default)(_("control"), v.control),
                        toggleLabel: (0, s.default)(_("toggle-label"), v.toggleLabel),
                        toggleLabelActive: (0, s.default)(_("toggle-label-active"), v.toggleLabelActive),
                        toggleInput: (0, s.default)(_("toggle-input"), v.toggleInput),
                        redo: (0, s.default)(_("redo"), v.redo)
                    },
                    U = i({}, g.default, p),
                    D = i({}, T, x),
                    B = Boolean(C) && i({}, L, C),
                    V = i({}, I, P),
                    q = function (e) {
                        var t = e.item,
                            n = a(e, ["item"]);
                        return new M.maps.Marker(i({}, D.createOptions(t), n, {
                            __id: t.objectID,
                            position: t._geoloc
                        }))
                    },
                    Q = (0, b.default)(M),
                    W = function (e) {
                        var t = e.item,
                            n = a(e, ["item"]);
                        return new Q(i({}, B.createOptions(t), n, {
                            __id: t.objectID,
                            position: t._geoloc,
                            className: (0, s.default)(_("marker")),
                            template: (0, f.renderTemplate)({
                                templateKey: "template",
                                templates: B,
                                data: t
                            })
                        }))
                    },
                    z = B ? W : q,
                    K = B || D;
                try {
                    return (0, d.default)(m.default, function () {
                        for ((0, l.unmountComponentAtNode)(A.querySelector("." + H.controls)); A.firstChild;) A.removeChild(A.firstChild)
                    })(i({}, k, {
                        renderState: {},
                        container: A,
                        googleReference: M,
                        initialZoom: n,
                        initialPosition: o,
                        templates: U,
                        cssClasses: H,
                        paddingBoundingBox: V,
                        createMarker: z,
                        markerOptions: K,
                        enableClearMapRefinement: O,
                        enableRefineControl: E
                    }))
                } catch (e) {
                    throw new Error("See usage. " + w)
                }
            };
        t.default = P
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            i = function () {
                function e(e, t) {
                    var n = [],
                        r = !0,
                        a = !1,
                        i = void 0;
                    try {
                        for (var o, s = e[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, i = e
                    } finally {
                        try {
                            !r && s.return && s.return()
                        } finally {
                            if (a) throw i
                        }
                    }
                    return n
                }
                return function (t, n) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t)) return e(t, n);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            o = n(1),
            s = r(o),
            u = n(0),
            c = n(419),
            l = r(c),
            f = function (e) {
                var t = e.refine,
                    n = e.paddingBoundingBox,
                    r = e.mapInstance,
                    a = Math.pow(2, r.getZoom()),
                    i = r.getProjection().fromLatLngToPoint(r.getBounds().getNorthEast());
                i.x = i.x - n.right / a, i.y = i.y + n.top / a;
                var o = r.getProjection().fromLatLngToPoint(r.getBounds().getSouthWest());
                o.x = o.x + n.right / a, o.y = o.y - n.bottom / a;
                var s = r.getProjection().fromPointToLatLng(i),
                    u = r.getProjection().fromPointToLatLng(o);
                t({
                    northEast: {
                        lat: s.lat(),
                        lng: s.lng()
                    },
                    southWest: {
                        lat: u.lat(),
                        lng: u.lng()
                    }
                })
            },
            p = function (e, t) {
                return e.reduce(function (e, n) {
                    var r = i(e, 2),
                        a = r[0],
                        o = r[1];
                    return t.includes(n.__id) ? [a.concat(n), o] : [a, o.concat(n)]
                }, [
                    [],
                    []
                ])
            },
            d = function (e, t) {
                var n = e.items,
                    r = e.position,
                    c = e.refine,
                    d = e.clearMapRefinement,
                    h = e.toggleRefineOnMapMove,
                    m = e.isRefineOnMapMove,
                    v = e.setMapMoveSinceLastRefine,
                    g = e.hasMapMoveSinceLastRefine,
                    y = e.isRefinedWithMap,
                    b = e.widgetParams,
                    _ = e.instantSearchInstance,
                    w = b.container,
                    P = b.googleReference,
                    R = b.cssClasses,
                    x = b.templates,
                    S = b.initialZoom,
                    C = b.initialPosition,
                    j = b.enableClearMapRefinement,
                    O = b.enableRefineControl,
                    N = b.paddingBoundingBox,
                    E = b.mapOptions,
                    F = b.createMarker,
                    M = b.markerOptions,
                    k = b.renderState;
                if (t) {
                    k.isUserInteraction = !0, k.isPendingRefine = !1, k.markers = [];
                    var T = document.createElement("div");
                    T.className = R.root, w.appendChild(T);
                    var L = document.createElement("div");
                    L.className = R.map, T.appendChild(L);
                    var I = document.createElement("div");
                    I.className = R.controls, T.appendChild(I), k.mapInstance = new P.maps.Map(L, a({
                        mapTypeControl: !1,
                        fullscreenControl: !1,
                        streetViewControl: !1,
                        clickableIcons: !1,
                        zoomControlOptions: {
                            position: P.maps.ControlPosition.LEFT_TOP
                        }
                    }, E));
                    var A = function () {
                        var e = function () {
                            k.isUserInteraction && (v(), m() && (k.isPendingRefine = !0))
                        };
                        k.mapInstance.addListener("center_changed", e), k.mapInstance.addListener("zoom_changed", e), k.mapInstance.addListener("dragstart", e), k.mapInstance.addListener("idle", function () {
                            k.isUserInteraction && k.isPendingRefine && (k.isPendingRefine = !1, f({
                                mapInstance: k.mapInstance,
                                refine: c,
                                paddingBoundingBox: N
                            }))
                        })
                    };
                    return P.maps.event.addListenerOnce(k.mapInstance, "idle", A), void(k.templateProps = (0, u.prepareTemplateProps)({
                        templatesConfig: _.templatesConfig,
                        templates: x
                    }))
                }
                if (!n.length && !y() && !g()) {
                    var H = r || C;
                    k.isUserInteraction = !1, k.mapInstance.setCenter(H), k.mapInstance.setZoom(S), k.isUserInteraction = !0
                }
                var U = n.map(function (e) {
                        return e.objectID
                    }),
                    D = p(k.markers, U),
                    B = i(D, 2),
                    V = B[0],
                    q = B[1],
                    Q = V.map(function (e) {
                        return e.__id
                    }),
                    W = n.filter(function (e) {
                        return !Q.includes(e.objectID)
                    });
                q.forEach(function (e) {
                    return e.setMap(null)
                }), k.markers = V.concat(W.map(function (e) {
                    var t = F({
                        map: k.mapInstance,
                        item: e
                    });
                    return Object.keys(M.events).forEach(function (n) {
                        t.addListener(n, function (r) {
                            M.events[n]({
                                map: k.mapInstance,
                                event: r,
                                item: e,
                                marker: t
                            })
                        })
                    }), t
                }));
                var z = k.markers.length,
                    K = k.mapInstance.getCenter(),
                    $ = k.mapInstance.getZoom(),
                    J = void 0 !== K && void 0 !== $,
                    G = !g() && (!y() || y() && !J);
                if (z && G) {
                    var Y = k.markers.reduce(function (e, t) {
                        return e.extend(t.getPosition())
                    }, new P.maps.LatLngBounds);
                    k.isUserInteraction = !1, k.mapInstance.fitBounds(Y), k.isUserInteraction = !0
                }(0, o.render)(s.default.createElement(l.default, {
                    cssClasses: R,
                    enableRefineControl: O,
                    enableClearMapRefinement: j,
                    isRefineOnMapMove: m(),
                    isRefinedWithMap: y(),
                    hasMapMoveSinceLastRefine: g(),
                    onRefineToggle: h,
                    onRefineClick: function () {
                        return f({
                            mapInstance: k.mapInstance,
                            refine: c,
                            paddingBoundingBox: N
                        })
                    },
                    onClearClick: d,
                    templateProps: k.templateProps
                }), w.querySelector("." + R.controls))
            };
        t.default = d
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            i = n(1),
            o = r(i),
            s = n(3),
            u = r(s),
            c = n(2),
            l = r(c),
            f = n(12),
            p = r(f),
            d = n(420),
            h = r(d),
            m = n(421),
            v = r(m),
            g = function (e) {
                var t = e.cssClasses,
                    n = e.enableRefineControl,
                    r = e.enableClearMapRefinement,
                    i = e.isRefineOnMapMove,
                    s = e.isRefinedWithMap,
                    u = e.hasMapMoveSinceLastRefine,
                    c = e.onRefineToggle,
                    f = e.onRefineClick,
                    d = e.onClearClick,
                    m = e.templateProps;
                return o.default.createElement("div", null, n && o.default.createElement("div", {
                    className: t.control
                }, i || !u ? o.default.createElement(v.default, {
                    classNameLabel: (0, l.default)(t.toggleLabel, i && t.toggleLabelActive),
                    classNameInput: t.toggleInput,
                    checked: i,
                    onToggle: c
                }, o.default.createElement(p.default, a({}, m, {
                    templateKey: "toggle",
                    rootTagName: "span"
                }))) : o.default.createElement(h.default, {
                    className: t.redo,
                    disabled: !u,
                    onClick: f
                }, o.default.createElement(p.default, a({}, m, {
                    templateKey: "redo",
                    rootTagName: "span"
                })))), !n && !i && o.default.createElement("div", {
                    className: t.control
                }, o.default.createElement(h.default, {
                    className: t.redo,
                    disabled: !u,
                    onClick: f
                }, o.default.createElement(p.default, a({}, m, {
                    templateKey: "redo",
                    rootTagName: "span"
                })))), r && s && o.default.createElement(h.default, {
                    className: t.clear,
                    onClick: d
                }, o.default.createElement(p.default, a({}, m, {
                    templateKey: "clear",
                    rootTagName: "span"
                }))))
            };
        u.default.shape({
            control: u.default.string.isRequired,
            toggleLabel: u.default.string.isRequired,
            toggleLabelActive: u.default.string.isRequired,
            toggleInput: u.default.string.isRequired,
            redo: u.default.string.isRequired,
            clear: u.default.string.isRequired
        });
        t.default = g
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n(1),
            i = r(a),
            o = n(3),
            s = (r(o), function (e) {
                var t = e.className,
                    n = e.disabled,
                    r = e.onClick,
                    a = e.children;
                return i.default.createElement("button", {
                    className: t,
                    onClick: r,
                    disabled: n
                }, a)
            });
        s.defaultProps = {
            disabled: !1
        }, t.default = s
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n(1),
            i = r(a),
            o = n(3),
            s = (r(o), function (e) {
                var t = e.classNameLabel,
                    n = e.classNameInput,
                    r = e.checked,
                    a = e.onToggle,
                    o = e.children;
                return i.default.createElement("label", {
                    className: t
                }, i.default.createElement("input", {
                    className: n,
                    type: "checkbox",
                    checked: r,
                    onChange: a
                }), o)
            });
        t.default = s
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            clear: "Clear the map refinement",
            toggle: "Search as I move the map",
            redo: "Redo search here"
        }
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function i(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            s = function (e) {
                return function (t) {
                    function n(t) {
                        var i = t.__id,
                            o = t.position,
                            s = t.map,
                            u = t.template,
                            c = t.className,
                            l = t.anchor,
                            f = void 0 === l ? {
                                x: 0,
                                y: 0
                            } : l;
                        r(this, n);
                        var p = a(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
                        return p.__id = i, p.anchor = f, p.listeners = {}, p.latLng = new e.maps.LatLng(o), p.element = document.createElement("div"), p.element.className = c, p.element.style.position = "absolute", p.element.innerHTML = u, p.setMap(s), p
                    }
                    return i(n, t), o(n, [{
                        key: "onAdd",
                        value: function () {
                            this.getPanes().overlayMouseTarget.appendChild(this.element);
                            var e = this.element.getBoundingClientRect();
                            this.offset = {
                                x: this.anchor.x + e.width / 2,
                                y: this.anchor.y + e.height
                            }, this.element.style.width = e.width + "px"
                        }
                    }, {
                        key: "draw",
                        value: function () {
                            var e = this.getProjection().fromLatLngToDivPixel(this.latLng);
                            this.element.style.left = Math.round(e.x - this.offset.x) + "px", this.element.style.top = Math.round(e.y - this.offset.y) + "px", this.element.style.zIndex = parseInt(this.element.style.top, 10)
                        }
                    }, {
                        key: "onRemove",
                        value: function () {
                            var e = this;
                            this.element && (this.element.parentNode.removeChild(this.element), Object.keys(this.listeners).forEach(function (t) {
                                e.element.removeEventListener(t, e.listeners[t])
                            }), delete this.element, delete this.listeners)
                        }
                    }, {
                        key: "addListener",
                        value: function (e, t) {
                            this.listeners[e] = t, this.element.addEventListener(e, t)
                        }
                    }, {
                        key: "getPosition",
                        value: function () {
                            return this.latLng
                        }
                    }]), n
                }(e.maps.OverlayView)
            };
        t.default = s
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.container,
                n = e.attributes,
                r = e.separator,
                a = void 0 === r ? " > " : r,
                o = e.rootPath,
                s = void 0 === o ? null : o,
                c = e.showParentLevel,
                f = void 0 === c || c,
                p = e.limit,
                d = void 0 === p ? 10 : p,
                b = e.sortBy,
                _ = void 0 === b ? ["name:asc"] : b,
                w = e.cssClasses,
                P = void 0 === w ? {} : w,
                R = e.autoHideContainer,
                x = void 0 === R || R,
                S = e.templates,
                C = void 0 === S ? h.default : S,
                j = e.collapsible,
                O = void 0 !== j && j,
                N = e.transformData,
                E = e.transformItems;
            if (!t || !n || !n.length) throw new Error(y);
            var F = (0, m.getContainerNode)(t),
                M = {
                    root: (0, u.default)(v(null), P.root),
                    header: (0, u.default)(v("header"), P.header),
                    body: (0, u.default)(v("body"), P.body),
                    footer: (0, u.default)(v("footer"), P.footer),
                    list: (0, u.default)(v("list"), P.list),
                    depth: v("list", "lvl"),
                    item: (0, u.default)(v("item"), P.item),
                    active: (0, u.default)(v("item", "active"), P.active),
                    link: (0, u.default)(v("link"), P.link),
                    count: (0, u.default)(v("count"), P.count)
                },
                k = g({
                    autoHideContainer: x,
                    collapsible: O,
                    cssClasses: M,
                    containerNode: F,
                    transformData: N,
                    templates: C,
                    renderState: {}
                });
            try {
                return (0, l.default)(k, function () {
                    return (0, i.unmountComponentAtNode)(F)
                })({
                    attributes: n,
                    separator: a,
                    rootPath: s,
                    showParentLevel: f,
                    limit: d,
                    sortBy: _,
                    transformItems: E
                })
            } catch (e) {
                throw new Error(y)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = a;
        var i = n(1),
            o = r(i),
            s = n(2),
            u = r(s),
            c = n(191),
            l = r(c),
            f = n(37),
            p = r(f),
            d = n(427),
            h = r(d),
            m = n(0),
            v = (0, m.bemHelper)("ais-hierarchical-menu"),
            g = function (e) {
                var t = e.autoHideContainer,
                    n = e.collapsible,
                    r = e.cssClasses,
                    a = e.containerNode,
                    s = e.transformData,
                    u = e.templates,
                    c = e.renderState;
                return function (e, l) {
                    var f = e.createURL,
                        d = e.items,
                        v = e.refine,
                        g = e.instantSearchInstance;
                    if (l) return void(c.templateProps = (0, m.prepareTemplateProps)({
                        transformData: s,
                        defaultTemplates: h.default,
                        templatesConfig: g.templatesConfig,
                        templates: u
                    }));
                    var y = t && 0 === d.length;
                    (0, i.render)(o.default.createElement(p.default, {
                        collapsible: n,
                        createURL: f,
                        cssClasses: r,
                        facetValues: d,
                        shouldAutoHideContainer: y,
                        templateProps: c.templateProps,
                        toggleRefinement: v
                    }), a)
                }
            },
            y = "Usage:\nhierarchicalMenu({\n  container,\n  attributes,\n  [ separator=' > ' ],\n  [ rootPath ],\n  [ showParentLevel=false ],\n  [ limit=10 ],\n  [ sortBy=['name:asc'] ],\n  [ cssClasses.{root , header, body, footer, list, depth, item, active, link}={} ],\n  [ templates.{header, item, footer} ],\n  [ transformData.{item} ],\n  [ autoHideContainer=true ],\n  [ collapsible=false ],\n  [ transformItems ]\n})"
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function o(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            u = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            c = n(3),
            l = (r(c), n(1)),
            f = r(l),
            p = n(12),
            d = r(p),
            h = n(8),
            m = r(h),
            v = function (e) {
                function t() {
                    return a(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return o(t, e), u(t, [{
                    key: "componentWillMount",
                    value: function () {
                        this.handleClick = this.handleClick.bind(this)
                    }
                }, {
                    key: "shouldComponentUpdate",
                    value: function (e) {
                        return !(0, m.default)(this.props, e)
                    }
                }, {
                    key: "handleClick",
                    value: function (e) {
                        this.props.handleClick({
                            facetValueToRefine: this.props.facetValueToRefine,
                            isRefined: this.props.isRefined,
                            originalEvent: e
                        })
                    }
                }, {
                    key: "render",
                    value: function () {
                        return f.default.createElement("div", {
                            className: this.props.itemClassName,
                            onClick: this.handleClick
                        }, f.default.createElement(d.default, s({
                            data: this.props.templateData,
                            templateKey: this.props.templateKey
                        }, this.props.templateProps)), this.props.subItems)
                    }
                }]), t
            }(l.Component);
        t.default = v
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function o(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            u = n(3),
            c = (r(u), n(1)),
            l = r(c),
            f = l.default.createElement("symbol", {
                xmlns: "http://www.w3.org/2000/svg",
                id: "sbx-icon-search-12",
                viewBox: "0 0 40 41"
            }, l.default.createElement("path", {
                d: "M30.967 27.727l-.03-.03c-.778-.777-2.038-.777-2.815 0l-1.21 1.21c-.78.78-.778 2.04 0 2.817l.03.03 4.025-4.027zm1.083 1.084L39.24 36c.778.778.78 2.037 0 2.816l-1.21 1.21c-.777.778-2.038.78-2.816 0l-7.19-7.19 4.026-4.025zM15.724 31.45c8.684 0 15.724-7.04 15.724-15.724C31.448 7.04 24.408 0 15.724 0 7.04 0 0 7.04 0 15.724c0 8.684 7.04 15.724 15.724 15.724zm0-3.93c6.513 0 11.793-5.28 11.793-11.794 0-6.513-5.28-11.793-11.793-11.793C9.21 3.93 3.93 9.21 3.93 15.725c0 6.513 5.28 11.793 11.794 11.793z",
                fillRule: "evenodd"
            })),
            p = l.default.createElement("symbol", {
                xmlns: "http://www.w3.org/2000/svg",
                id: "sbx-icon-clear-2",
                viewBox: "0 0 20 20"
            }, l.default.createElement("path", {
                d: "M8.96 10L.52 1.562 0 1.042 1.04 0l.522.52L10 8.96 18.438.52l.52-.52L20 1.04l-.52.522L11.04 10l8.44 8.438.52.52L18.96 20l-.522-.52L10 11.04l-8.438 8.44-.52.52L0 18.96l.52-.522L8.96 10z",
                fillRule: "evenodd"
            })),
            d = l.default.createElement("button", {
                type: "submit",
                title: "Submit your search query.",
                className: "sbx-sffv__submit"
            }, l.default.createElement("svg", {
                role: "img",
                "aria-label": "Search"
            }, l.default.createElement("use", {
                xlinkHref: "#sbx-icon-search-12"
            }))),
            h = l.default.createElement("button", {
                type: "reset",
                title: "Clear the search query.",
                className: "sbx-sffv__reset"
            }, l.default.createElement("svg", {
                role: "img",
                "aria-label": "Reset"
            }, l.default.createElement("use", {
                xlinkHref: "#sbx-icon-clear-2"
            }))),
            m = function (e) {
                function t() {
                    return a(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return o(t, e), s(t, [{
                    key: "clearInput",
                    value: function () {
                        this.input && (this.input.value = "")
                    }
                }, {
                    key: "validateSearch",
                    value: function (e) {
                        if (e.preventDefault(), this.input) {
                            this.input.value && this.props.onValidate()
                        }
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this,
                            t = this.props,
                            n = t.placeholder,
                            r = t.onChange,
                            a = this.props.disabled ? "sbx-sffv__input sbx-sffv__input-disabled" : "sbx-sffv__input",
                            i = this.props.disabled ? "searchbox sbx-sffv sbx-sffv-disabled" : "searchbox sbx-sffv";
                        return l.default.createElement("form", {
                            noValidate: "novalidate",
                            className: i,
                            onReset: function () {
                                r("")
                            },
                            onSubmit: function (t) {
                                return e.validateSearch(t)
                            }
                        }, l.default.createElement("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            style: {
                                display: "none"
                            }
                        }, f, p), l.default.createElement("div", {
                            role: "search",
                            className: "sbx-sffv__wrapper"
                        }, l.default.createElement("input", {
                            type: "search",
                            name: "search",
                            placeholder: n,
                            autoComplete: "off",
                            required: "required",
                            className: a,
                            onChange: function (e) {
                                return r(e.target.value)
                            },
                            ref: function (t) {
                                e.input = t
                            },
                            disabled: this.props.disabled
                        }), d, h))
                    }
                }]), t
            }(c.Component);
        t.default = m
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            header: "",
            item: '<a class="{{cssClasses.link}}" href="{{url}}">{{label}} <span class="{{cssClasses.count}}">{{#helpers.formatNumber}}{{count}}{{/helpers.formatNumber}}</span></a>',
            footer: ""
        }
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e) {
            var t = e.container,
                n = e.cssClasses,
                r = void 0 === n ? {} : n,
                a = e.templates,
                o = void 0 === a ? h.default : a,
                s = e.transformData,
                c = e.escapeHits,
                l = void 0 !== c && c,
                f = e.transformItems;
            if (!t) throw new Error("Must provide a container." + y);
            if (o.item && o.allItems) throw new Error("Must contain only allItems OR item template." + y);
            var d = (0, m.getContainerNode)(t),
                b = {
                    root: (0, u.default)(v(null), r.root),
                    item: (0, u.default)(v("item"), r.item),
                    empty: (0, u.default)(v(null, "empty"), r.empty)
                },
                _ = g({
                    containerNode: d,
                    cssClasses: b,
                    renderState: {},
                    transformData: s,
                    templates: o
                });
            try {
                return (0, p.default)(_, function () {
                    return (0, i.unmountComponentAtNode)(d)
                })({
                    escapeHits: l,
                    transformItems: f
                })
            } catch (e) {
                throw new Error(y)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = a;
        var i = n(1),
            o = r(i),
            s = n(2),
            u = r(s),
            c = n(211),
            l = r(c),
            f = n(192),
            p = r(f),
            d = n(430),
            h = r(d),
            m = n(0),
            v = (0, m.bemHelper)("ais-hits"),
            g = function (e) {
                var t = e.renderState,
                    n = e.cssClasses,
                    r = e.containerNode,
                    a = e.transformData,
                    s = e.templates;
                return function (e, u) {
                    var c = e.hits,
                        f = e.results,
                        p = e.instantSearchInstance;
                    if (u) return void(t.templateProps = (0, m.prepareTemplateProps)({
                        transformData: a,
                        defaultTemplates: h.default,
                        templatesConfig: p.templatesConfig,
                        templates: s
                    }));
                    (0, i.render)(o.default.createElement(l.default, {
                        cssClasses: n,
                        hits: c,
                        results: f,
                        templateProps: t.templateProps
                    }), r)
                }
            },
            y = "Usage:\nhits({\n  container,\n  [ transformItems ],\n  [ cssClasses.{root,empty,item}={} ],\n  [ templates.{empty,item} | templates.{empty, allItems} ],\n  [ transformData.{empty,item} | transformData.{empty, allItems} ],\n})"
    }, function (e, t) {
        function n(e, t) {
            return null != e && a.call(e, t)
        }
        var r = Object.prototype,
            a = r.hasOwnProperty;
        e.exports = n
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            empty: "No results",
            item: function (e) {
                return JSON.stringify(e, null, 2)
            }
        }
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.container,
                n = e.items,
                r = e.cssClasses,
                a = void 0 === r ? {} : r,
                o = e.autoHideContainer,
                s = void 0 !== o && o,
                c = e.transformItems;
            if (!t) throw new Error(y);
            var l = (0, m.getContainerNode)(t),
                f = {
                    root: (0, u.default)(v(null), a.root),
                    select: (0, u.default)(v(null), a.select),
                    item: (0, u.default)(v("item"), a.item)
                },
                p = g({
                    containerNode: l,
                    cssClasses: f,
                    autoHideContainer: s
                });
            try {
                return (0, h.default)(p, function () {
                    return (0, i.unmountComponentAtNode)(l)
                })({
                    items: n,
                    transformItems: c
                })
            } catch (e) {
                throw new Error(y)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = a;
        var i = n(1),
            o = r(i),
            s = n(2),
            u = r(s),
            c = n(9),
            l = r(c),
            f = n(112),
            p = r(f),
            d = n(193),
            h = r(d),
            m = n(0),
            v = (0, m.bemHelper)("ais-hits-per-page-selector"),
            g = function (e) {
                var t = e.containerNode,
                    n = e.cssClasses,
                    r = e.autoHideContainer;
                return function (e, a) {
                    var s = e.items,
                        u = e.refine,
                        c = e.hasNoResults;
                    if (!a) {
                        var f = (0, l.default)(s, function (e) {
                                return e.isRefined
                            }) || {},
                            d = f.value;
                        (0, i.render)(o.default.createElement(p.default, {
                            cssClasses: n,
                            currentValue: d,
                            options: s,
                            setValue: u,
                            shouldAutoHideContainer: r && c
                        }), t)
                    }
                }
            },
            y = "Usage:\nhitsPerPageSelector({\n  container,\n  items,\n  [ cssClasses.{root,select,item}={} ],\n  [ autoHideContainer=false ],\n  [ transformItems ]\n})"
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.container,
                n = e.cssClasses,
                r = void 0 === n ? {} : n,
                a = e.showMoreLabel,
                o = void 0 === a ? "Show more results" : a,
                s = e.templates,
                c = void 0 === s ? p.default : s,
                l = e.transformData,
                f = e.escapeHits,
                d = void 0 !== f && f,
                b = e.transformItems;
            if (!t) throw new Error("Must provide a container." + y);
            if (void 0 !== c.allItems) throw new Error("allItems is not a valid template for the infiniteHits widget");
            var _ = (0, m.getContainerNode)(t),
                w = {
                    root: (0, u.default)(v(null), r.root),
                    item: (0, u.default)(v("item"), r.item),
                    empty: (0, u.default)(v(null, "empty"), r.empty),
                    showmore: (0, u.default)(v("showmore"), r.showmore),
                    showmoreButton: (0, u.default)(v("showmoreButton"), r.showmoreButton)
                },
                P = g({
                    containerNode: _,
                    cssClasses: w,
                    transformData: l,
                    templates: c,
                    showMoreLabel: o,
                    renderState: {}
                });
            try {
                return (0, h.default)(P, function () {
                    return (0, i.unmountComponentAtNode)(_)
                })({
                    escapeHits: d,
                    transformItems: b
                })
            } catch (e) {
                throw new Error(y)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = a;
        var i = n(1),
            o = r(i),
            s = n(2),
            u = r(s),
            c = n(433),
            l = r(c),
            f = n(434),
            p = r(f),
            d = n(194),
            h = r(d),
            m = n(0),
            v = (0, m.bemHelper)("ais-infinite-hits"),
            g = function (e) {
                var t = e.cssClasses,
                    n = e.containerNode,
                    r = e.renderState,
                    a = e.templates,
                    s = e.transformData,
                    u = e.showMoreLabel;
                return function (e, c) {
                    var f = e.hits,
                        d = e.results,
                        h = e.showMore,
                        v = e.isLastPage,
                        g = e.instantSearchInstance;
                    if (c) return void(r.templateProps = (0, m.prepareTemplateProps)({
                        transformData: s,
                        defaultTemplates: p.default,
                        templatesConfig: g.templatesConfig,
                        templates: a
                    }));
                    (0, i.render)(o.default.createElement(l.default, {
                        cssClasses: t,
                        hits: f,
                        results: d,
                        showMore: h,
                        showMoreLabel: u,
                        templateProps: r.templateProps,
                        isLastPage: v
                    }), n)
                }
            },
            y = "\nUsage:\ninfiniteHits({\n  container,\n  [ escapeHits = false ],\n  [ transformItems ],\n  [ showMoreLabel ],\n  [ cssClasses.{root,empty,item,showmore,showmoreButton}={} ],\n  [ templates.{empty,item} | templates.{empty} ],\n  [ transformData.{empty,item} | transformData.{empty} ],\n})"
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function o(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            u = n(3),
            c = (r(u), n(1)),
            l = r(c),
            f = n(211),
            p = r(f),
            d = function (e) {
                function t() {
                    return a(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return o(t, e), s(t, [{
                    key: "render",
                    value: function () {
                        var e = this.props,
                            t = e.cssClasses,
                            n = e.hits,
                            r = e.results,
                            a = e.showMore,
                            i = e.showMoreLabel,
                            o = e.templateProps,
                            s = this.props.isLastPage ? l.default.createElement("button", {
                                disabled: !0,
                                className: t.showmoreButton
                            }, i) : l.default.createElement("button", {
                                onClick: a,
                                className: t.showmoreButton
                            }, i);
                        return l.default.createElement("div", null, l.default.createElement(p.default, {
                            cssClasses: t,
                            hits: n,
                            results: r,
                            templateProps: o
                        }), l.default.createElement("div", {
                            className: t.showmore
                        }, s))
                    }
                }]), t
            }(c.Component);
        t.default = d
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            empty: "No results",
            item: function (e) {
                return JSON.stringify(e, null, 2)
            }
        }
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e) {
            var t = e.container,
                n = e.attributeName,
                r = e.sortBy,
                a = void 0 === r ? ["name:asc"] : r,
                s = e.limit,
                u = void 0 === s ? 10 : s,
                l = e.cssClasses,
                p = void 0 === l ? {} : l,
                h = e.templates,
                v = void 0 === h ? f.default : h,
                g = e.collapsible,
                P = void 0 !== g && g,
                R = e.transformData,
                x = e.autoHideContainer,
                S = void 0 === x || x,
                C = e.showMore,
                j = void 0 !== C && C,
                O = e.transformItems;
            if (!t) throw new Error(w);
            var N = (0, d.default)(j);
            if (N && N.limit < u) throw new Error("showMore.limit configuration should be > than the limit in the main configuration");
            var E = (0, y.getContainerNode)(t),
                F = N && N.limit || void 0,
                M = N && (0, y.prefixKeys)("show-more-", N.templates),
                k = M ? i({}, v, M) : v,
                T = {
                    root: (0, c.default)(b(null), p.root),
                    header: (0, c.default)(b("header"), p.header),
                    body: (0, c.default)(b("body"), p.body),
                    footer: (0, c.default)(b("footer"), p.footer),
                    list: (0, c.default)(b("list"), p.list),
                    item: (0, c.default)(b("item"), p.item),
                    active: (0, c.default)(b("item", "active"), p.active),
                    link: (0, c.default)(b("link"), p.link),
                    count: (0, c.default)(b("count"), p.count)
                },
                L = _({
                    containerNode: E,
                    cssClasses: T,
                    collapsible: P,
                    autoHideContainer: S,
                    renderState: {},
                    templates: k,
                    transformData: R,
                    showMoreConfig: N
                });
            try {
                return (0, m.default)(L, function () {
                    return (0, o.unmountComponentAtNode)(E)
                })({
                    attributeName: n,
                    limit: u,
                    sortBy: a,
                    showMoreLimit: F,
                    transformItems: O
                })
            } catch (e) {
                throw new Error(w)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
        t.default = a;
        var o = n(1),
            s = r(o),
            u = n(2),
            c = r(u),
            l = n(436),
            f = r(l),
            p = n(213),
            d = r(p),
            h = n(110),
            m = r(h),
            v = n(37),
            g = r(v),
            y = n(0),
            b = (0, y.bemHelper)("ais-menu"),
            _ = function (e) {
                var t = e.containerNode,
                    n = e.cssClasses,
                    r = e.collapsible,
                    a = e.autoHideContainer,
                    u = e.renderState,
                    c = e.templates,
                    l = e.transformData,
                    p = e.showMoreConfig;
                return function (e, d) {
                    var h = e.refine,
                        m = e.items,
                        v = e.createURL,
                        b = e.canRefine,
                        _ = e.instantSearchInstance,
                        w = e.isShowingMore,
                        P = e.toggleShowMore,
                        R = e.canToggleShowMore;
                    if (d) return void(u.templateProps = (0, y.prepareTemplateProps)({
                        transformData: l,
                        defaultTemplates: f.default,
                        templatesConfig: _.templatesConfig,
                        templates: c
                    }));
                    var x = m.map(function (e) {
                            return i({}, e, {
                                url: v(e.name)
                            })
                        }),
                        S = a && !b;
                    (0, o.render)(s.default.createElement(g.default, {
                        collapsible: r,
                        createURL: v,
                        cssClasses: n,
                        facetValues: x,
                        shouldAutoHideContainer: S,
                        showMore: null !== p,
                        templateProps: u.templateProps,
                        toggleRefinement: h,
                        toggleShowMore: P,
                        isShowingMore: w,
                        canToggleShowMore: R
                    }), t)
                }
            },
            w = "Usage:\nmenu({\n  container,\n  attributeName,\n  [ sortBy=['name:asc'] ],\n  [ limit=10 ],\n  [ cssClasses.{root,list,item} ],\n  [ templates.{header,item,footer} ],\n  [ transformData.{item} ],\n  [ autoHideContainer ],\n  [ showMore.{templates: {active, inactive}, limit} ],\n  [ collapsible=false ],\n  [ transformItems ]\n})"
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            header: "",
            item: '<a class="{{cssClasses.link}}" href="{{url}}">{{label}} <span class="{{cssClasses.count}}">{{#helpers.formatNumber}}{{count}}{{/helpers.formatNumber}}</span></a>',
            footer: ""
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            active: '<a class="ais-show-more ais-show-more__active">Show less</a>',
            inactive: '<a class="ais-show-more ais-show-more__inactive">Show more</a>'
        }
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.container,
                n = e.attributeName,
                r = e.operator,
                a = void 0 === r ? "or" : r,
                s = e.sortBy,
                u = void 0 === s ? ["isRefined", "count:desc", "name:asc"] : s,
                l = e.limit,
                f = void 0 === l ? 10 : l,
                p = e.cssClasses,
                d = void 0 === p ? {} : p,
                h = e.templates,
                v = void 0 === h ? g.default : h,
                y = e.collapsible,
                _ = void 0 !== y && y,
                C = e.transformData,
                j = e.autoHideContainer,
                O = void 0 === j || j,
                N = e.showMore,
                E = void 0 !== N && N,
                F = e.searchForFacetValues,
                M = void 0 !== F && F,
                k = e.transformItems;
            if (!t) throw new Error(S);
            var T = (0, w.default)(E);
            if (T && T.limit < f) throw new Error("showMore.limit configuration should be > than the limit in the main configuration");
            var L = !!M && Boolean(M.escapeFacetValues),
                I = T && T.limit || f,
                A = (0, P.getContainerNode)(t),
                H = T ? (0, P.prefixKeys)("show-more-", T.templates) : {},
                U = M ? M.templates || b.default : {},
                D = i({}, v, H, U),
                B = {
                    root: (0, c.default)(R(null), d.root),
                    header: (0, c.default)(R("header"), d.header),
                    body: (0, c.default)(R("body"), d.body),
                    footer: (0, c.default)(R("footer"), d.footer),
                    list: (0, c.default)(R("list"), d.list),
                    item: (0, c.default)(R("item"), d.item),
                    active: (0, c.default)(R("item", "active"), d.active),
                    label: (0, c.default)(R("label"), d.label),
                    checkbox: (0, c.default)(R("checkbox"), d.checkbox),
                    count: (0, c.default)(R("count"), d.count)
                },
                V = x({
                    containerNode: A,
                    cssClasses: B,
                    transformData: C,
                    templates: D,
                    renderState: {},
                    collapsible: _,
                    autoHideContainer: O,
                    showMoreConfig: T,
                    searchForFacetValues: M
                });
            try {
                return (0, m.default)(V, function () {
                    return (0, o.unmountComponentAtNode)(A)
                })({
                    attributeName: n,
                    operator: a,
                    limit: f,
                    showMoreLimit: I,
                    sortBy: u,
                    escapeFacetValues: L,
                    transformItems: k
                })
            } catch (e) {
                throw new Error(S)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
        t.default = a;
        var o = n(1),
            s = r(o),
            u = n(2),
            c = r(u),
            l = n(46),
            f = r(l),
            p = n(37),
            d = r(p),
            h = n(200),
            m = r(h),
            v = n(439),
            g = r(v),
            y = n(440),
            b = r(y),
            _ = n(213),
            w = r(_),
            P = n(0),
            R = (0, P.bemHelper)("ais-refinement-list"),
            x = function (e) {
                var t = e.containerNode,
                    n = e.cssClasses,
                    r = e.transformData,
                    a = e.templates,
                    i = e.renderState,
                    u = e.collapsible,
                    c = e.autoHideContainer,
                    l = e.showMoreConfig,
                    p = e.searchForFacetValues;
                return function (e, h) {
                    var m = e.refine,
                        v = e.items,
                        y = e.createURL,
                        b = e.searchForItems,
                        _ = e.isFromSearch,
                        w = e.instantSearchInstance,
                        R = e.canRefine,
                        x = e.toggleShowMore,
                        S = e.isShowingMore,
                        C = e.hasExhaustiveItems,
                        j = e.canToggleShowMore;
                    if (h) return void(i.templateProps = (0, P.prepareTemplateProps)({
                        transformData: r,
                        defaultTemplates: g.default,
                        templatesConfig: w.templatesConfig,
                        templates: a
                    }));
                    var O = {
                        header: {
                            refinedFacetsCount: (0, f.default)(v, {
                                isRefined: !0
                            }).length
                        }
                    };
                    (0, o.render)(s.default.createElement(d.default, {
                        collapsible: u,
                        createURL: y,
                        cssClasses: n,
                        facetValues: v,
                        headerFooterData: O,
                        shouldAutoHideContainer: c && !1 === R,
                        templateProps: i.templateProps,
                        toggleRefinement: m,
                        searchFacetValues: p ? b : void 0,
                        searchPlaceholder: p.placeholder || "Search for other...",
                        isFromSearch: _,
                        showMore: null !== l,
                        toggleShowMore: x,
                        isShowingMore: S,
                        hasExhaustiveItems: C,
                        searchIsAlwaysActive: p.isAlwaysActive || !1,
                        canToggleShowMore: j
                    }), t)
                }
            },
            S = "Usage:\nrefinementList({\n  container,\n  attributeName,\n  [ operator='or' ],\n  [ sortBy=['isRefined', 'count:desc', 'name:asc'] ],\n  [ limit=10 ],\n  [ cssClasses.{root, header, body, footer, list, item, active, label, checkbox, count}],\n  [ templates.{header,item,footer} ],\n  [ transformData.{item} ],\n  [ autoHideContainer=true ],\n  [ collapsible=false ],\n  [ showMore.{templates: {active, inactive}, limit} ],\n  [ collapsible=false ],\n  [ searchForFacetValues.{placeholder, templates: {noResults}, isAlwaysActive, escapeFacetValues}],\n  [ transformItems ],\n})"
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            header: "",
            item: '<label class="{{cssClasses.label}}">\n  <input type="checkbox"\n         class="{{cssClasses.checkbox}}"\n         value="{{value}}"\n         {{#isRefined}}checked{{/isRefined}} />\n      {{{highlighted}}}\n  <span class="{{cssClasses.count}}">{{#helpers.formatNumber}}{{count}}{{/helpers.formatNumber}}</span>\n</label>',
            footer: ""
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            noResults: "No results"
        }
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.container,
                n = e.attributeName,
                r = e.options,
                a = e.cssClasses,
                o = void 0 === a ? {} : a,
                s = e.templates,
                c = void 0 === s ? h.default : s,
                l = e.collapsible,
                f = void 0 !== l && l,
                d = e.transformData,
                b = e.autoHideContainer,
                _ = void 0 === b || b,
                w = e.transformItems;
            if (!t || !n || !r) throw new Error(y);
            var P = (0, m.getContainerNode)(t),
                R = {
                    root: (0, u.default)(v(null), o.root),
                    header: (0, u.default)(v("header"), o.header),
                    body: (0, u.default)(v("body"), o.body),
                    footer: (0, u.default)(v("footer"), o.footer),
                    list: (0, u.default)(v("list"), o.list),
                    item: (0, u.default)(v("item"), o.item),
                    label: (0, u.default)(v("label"), o.label),
                    radio: (0, u.default)(v("radio"), o.radio),
                    active: (0, u.default)(v("item", "active"), o.active)
                },
                x = g({
                    containerNode: P,
                    collapsible: f,
                    autoHideContainer: _,
                    cssClasses: R,
                    renderState: {},
                    transformData: d,
                    templates: c
                });
            try {
                return (0, p.default)(x, function () {
                    return (0, i.unmountComponentAtNode)(P)
                })({
                    attributeName: n,
                    options: r,
                    transformItems: w
                })
            } catch (e) {
                throw new Error(y)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = a;
        var i = n(1),
            o = r(i),
            s = n(2),
            u = r(s),
            c = n(37),
            l = r(c),
            f = n(195),
            p = r(f),
            d = n(442),
            h = r(d),
            m = n(0),
            v = (0, m.bemHelper)("ais-refinement-list"),
            g = function (e) {
                var t = e.containerNode,
                    n = e.collapsible,
                    r = e.autoHideContainer,
                    a = e.cssClasses,
                    s = e.renderState,
                    u = e.transformData,
                    c = e.templates;
                return function (e, f) {
                    var p = e.createURL,
                        d = e.instantSearchInstance,
                        v = e.refine,
                        g = e.items,
                        y = e.hasNoResults;
                    if (f) return void(s.templateProps = (0, m.prepareTemplateProps)({
                        transformData: u,
                        defaultTemplates: h.default,
                        templatesConfig: d.templatesConfig,
                        templates: c
                    }));
                    (0, i.render)(o.default.createElement(l.default, {
                        collapsible: n,
                        createURL: p,
                        cssClasses: a,
                        facetValues: g,
                        shouldAutoHideContainer: r && y,
                        templateProps: s.templateProps,
                        toggleRefinement: v
                    }), t)
                }
            },
            y = "Usage:\nnumericRefinementList({\n  container,\n  attributeName,\n  options,\n  [ cssClasses.{root,header,body,footer,list,item,active,label,radio,count} ],\n  [ templates.{header,item,footer} ],\n  [ transformData.{item} ],\n  [ autoHideContainer ],\n  [ collapsible=false ],\n  [ transformItems ]\n})"
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            header: "",
            item: '<label class="{{cssClasses.label}}">\n  <input type="radio" class="{{cssClasses.radio}}" name="{{attributeName}}" {{#isRefined}}checked{{/isRefined}} />{{label}}\n</label>',
            footer: ""
        }
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e) {
            var t = e.container,
                n = e.operator,
                r = void 0 === n ? "=" : n,
                a = e.attributeName,
                o = e.options,
                s = e.cssClasses,
                c = void 0 === s ? {} : s,
                l = e.autoHideContainer,
                f = void 0 !== l && l,
                g = e.transformItems,
                y = (0, d.getContainerNode)(t);
            if (!t || !o || 0 === o.length || !a) throw new Error(v);
            var b = {
                    root: (0, u.default)(h(null), c.root),
                    select: (0, u.default)(h(null), c.select),
                    item: (0, u.default)(h("item"), c.item)
                },
                _ = m({
                    autoHideContainer: f,
                    containerNode: y,
                    cssClasses: b
                });
            try {
                return (0, p.default)(_, function () {
                    return (0, i.unmountComponentAtNode)(y)
                })({
                    operator: r,
                    attributeName: a,
                    options: o,
                    transformItems: g
                })
            } catch (e) {
                throw new Error(v)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = a;
        var i = n(1),
            o = r(i),
            s = n(2),
            u = r(s),
            c = n(112),
            l = r(c),
            f = n(196),
            p = r(f),
            d = n(0),
            h = (0, d.bemHelper)("ais-numeric-selector"),
            m = function (e) {
                var t = e.containerNode,
                    n = e.autoHideContainer,
                    r = e.cssClasses;
                return function (e, a) {
                    var s = e.currentRefinement,
                        u = e.refine,
                        c = e.hasNoResults,
                        f = e.options;
                    a || (0, i.render)(o.default.createElement(l.default, {
                        cssClasses: r,
                        currentValue: s,
                        options: f,
                        setValue: u,
                        shouldAutoHideContainer: n && c
                    }), t)
                }
            },
            v = "Usage: numericSelector({\n  container,\n  attributeName,\n  options,\n  cssClasses.{root,select,item},\n  autoHideContainer,\n  transformItems\n})"
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.container,
                n = e.labels,
                r = void 0 === n ? v : n,
                a = e.cssClasses,
                i = void 0 === a ? {} : a,
                u = e.maxPages,
                c = e.padding,
                f = e.showFirstLast,
                p = void 0 === f || f,
                d = e.autoHideContainer,
                _ = void 0 === d || d,
                w = e.scrollTo,
                P = void 0 === w ? "body" : w;
            if (!t) throw new Error(b);
            var R = (0, m.getContainerNode)(t),
                x = !0 === P ? "body" : P,
                S = !1 !== x && (0, m.getContainerNode)(x),
                C = {
                    root: (0, l.default)(g(null), i.root),
                    item: (0, l.default)(g("item"), i.item),
                    link: (0, l.default)(g("link"), i.link),
                    page: (0, l.default)(g("item", "page"), i.page),
                    previous: (0, l.default)(g("item", "previous"), i.previous),
                    next: (0, l.default)(g("item", "next"), i.next),
                    first: (0, l.default)(g("item", "first"), i.first),
                    last: (0, l.default)(g("item", "last"), i.last),
                    active: (0, l.default)(g("item", "active"), i.active),
                    disabled: (0, l.default)(g("item", "disabled"), i.disabled)
                },
                j = (0, o.default)(r, v),
                O = y({
                    containerNode: R,
                    cssClasses: C,
                    labels: j,
                    showFirstLast: p,
                    padding: c,
                    autoHideContainer: _,
                    scrollToNode: S
                });
            try {
                return (0, h.default)(O, function () {
                    return (0, s.unmountComponentAtNode)(R)
                })({
                    maxPages: u,
                    padding: c
                })
            } catch (e) {
                throw new Error(b)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = a;
        var i = n(68),
            o = r(i),
            s = n(1),
            u = r(s),
            c = n(2),
            l = r(c),
            f = n(445),
            p = r(f),
            d = n(197),
            h = r(d),
            m = n(0),
            v = {
                previous: "\u2039",
                next: "\u203a",
                first: "\xab",
                last: "\xbb"
            },
            g = (0, m.bemHelper)("ais-pagination"),
            y = function (e) {
                var t = e.containerNode,
                    n = e.cssClasses,
                    r = e.labels,
                    a = e.showFirstLast,
                    i = e.autoHideContainer,
                    o = e.scrollToNode;
                return function (e, c) {
                    var l = e.createURL,
                        f = e.currentRefinement,
                        d = e.nbHits,
                        h = e.nbPages,
                        m = e.pages,
                        v = e.isFirstPage,
                        g = e.isLastPage,
                        y = e.refine;
                    if (!c) {
                        var b = function (e) {
                                y(e), !1 !== o && o.scrollIntoView()
                            },
                            _ = i && 0 === d;
                        (0, s.render)(u.default.createElement(p.default, {
                            createURL: l,
                            cssClasses: n,
                            currentPage: f,
                            labels: r,
                            nbHits: d,
                            nbPages: h,
                            pages: m,
                            isFirstPage: v,
                            isLastPage: g,
                            setCurrentPage: b,
                            shouldAutoHideContainer: _,
                            showFirstLast: a
                        }), t)
                    }
                }
            },
            b = "Usage:\npagination({\n  container,\n  [ cssClasses.{root,item,page,previous,next,first,last,active,disabled}={} ],\n  [ labels.{previous,next,first,last} ],\n  [ maxPages ],\n  [ padding=3 ],\n  [ showFirstLast=true ],\n  [ autoHideContainer=true ],\n  [ scrollTo='body' ]\n})"
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function o(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.RawPagination = void 0;
        var s = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            u = n(3),
            c = (r(u), n(1)),
            l = r(c),
            f = n(446),
            p = r(f),
            d = n(0),
            h = n(13),
            m = r(h),
            v = n(448),
            g = r(v),
            y = n(2),
            b = r(y),
            _ = function (e) {
                function t(e) {
                    a(this, t);
                    var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, (0, p.default)(e, t.defaultProps)));
                    return n.handleClick = n.handleClick.bind(n), n
                }
                return o(t, e), s(t, [{
                    key: "pageLink",
                    value: function (e) {
                        var t = e.label,
                            n = e.ariaLabel,
                            r = e.pageNumber,
                            a = e.additionalClassName,
                            i = void 0 === a ? null : a,
                            o = e.isDisabled,
                            s = void 0 !== o && o,
                            u = e.isActive,
                            c = void 0 !== u && u,
                            f = e.createURL,
                            p = {
                                item: (0, b.default)(this.props.cssClasses.item, i),
                                link: (0, b.default)(this.props.cssClasses.link)
                            };
                        s ? p.item = (0, b.default)(p.item, this.props.cssClasses.disabled) : c && (p.item = (0, b.default)(p.item, this.props.cssClasses.active));
                        var d = f && !s ? f(r) : "#";
                        return l.default.createElement(g.default, {
                            ariaLabel: n,
                            cssClasses: p,
                            handleClick: this.handleClick,
                            isDisabled: s,
                            key: t + r + n,
                            label: t,
                            pageNumber: r,
                            url: d
                        })
                    }
                }, {
                    key: "previousPageLink",
                    value: function (e) {
                        var t = e.isFirstPage,
                            n = e.currentPage,
                            r = e.createURL;
                        return this.pageLink({
                            ariaLabel: "Previous",
                            additionalClassName: this.props.cssClasses.previous,
                            isDisabled: 0 === this.props.nbHits || t,
                            label: this.props.labels.previous,
                            pageNumber: n - 1,
                            createURL: r
                        })
                    }
                }, {
                    key: "nextPageLink",
                    value: function (e) {
                        var t = e.isLastPage,
                            n = e.currentPage,
                            r = e.createURL;
                        return this.pageLink({
                            ariaLabel: "Next",
                            additionalClassName: this.props.cssClasses.next,
                            isDisabled: 0 === this.props.nbHits || t,
                            label: this.props.labels.next,
                            pageNumber: n + 1,
                            createURL: r
                        })
                    }
                }, {
                    key: "firstPageLink",
                    value: function (e) {
                        var t = e.isFirstPage,
                            n = e.createURL;
                        return this.pageLink({
                            ariaLabel: "First",
                            additionalClassName: this.props.cssClasses.first,
                            isDisabled: 0 === this.props.nbHits || t,
                            label: this.props.labels.first,
                            pageNumber: 0,
                            createURL: n
                        })
                    }
                }, {
                    key: "lastPageLink",
                    value: function (e) {
                        var t = e.isLastPage,
                            n = e.nbPages,
                            r = e.createURL;
                        return this.pageLink({
                            ariaLabel: "Last",
                            additionalClassName: this.props.cssClasses.last,
                            isDisabled: 0 === this.props.nbHits || t,
                            label: this.props.labels.last,
                            pageNumber: n - 1,
                            createURL: r
                        })
                    }
                }, {
                    key: "pages",
                    value: function (e) {
                        var t = this,
                            n = e.currentPage,
                            r = e.pages,
                            a = e.createURL;
                        return r.map(function (e) {
                            return t.pageLink({
                                ariaLabel: e + 1,
                                additionalClassName: t.props.cssClasses.page,
                                isActive: e === n,
                                label: e + 1,
                                pageNumber: e,
                                createURL: a
                            })
                        })
                    }
                }, {
                    key: "handleClick",
                    value: function (e, t) {
                        (0, d.isSpecialClick)(t) || (t.preventDefault(), this.props.setCurrentPage(e))
                    }
                }, {
                    key: "render",
                    value: function () {
                        return l.default.createElement("ul", {
                            className: this.props.cssClasses.root
                        }, this.props.showFirstLast && this.firstPageLink(this.props), this.previousPageLink(this.props), this.pages(this.props), this.nextPageLink(this.props), this.props.showFirstLast && this.lastPageLink(this.props))
                    }
                }]), t
            }(c.Component);
        t.RawPagination = _, _.defaultProps = {
            nbHits: 0,
            currentPage: 0,
            nbPages: 0
        }, t.default = (0, m.default)(_)
    }, function (e, t, n) {
        var r = n(59),
            a = n(22),
            i = n(447),
            o = n(183),
            s = a(function (e) {
                return e.push(void 0, i), r(o, void 0, e)
            });
        e.exports = s
    }, function (e, t, n) {
        function r(e, t, n, o, s, u) {
            return i(e) && i(t) && (u.set(t, e), a(e, t, void 0, r, u), u.delete(t)), e
        }
        var a = n(104),
            i = n(7);
        e.exports = r
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function o(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            u = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            c = n(3),
            l = (r(c), n(1)),
            f = r(l),
            p = n(8),
            d = r(p),
            h = function (e) {
                function t() {
                    return a(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return o(t, e), u(t, [{
                    key: "componentWillMount",
                    value: function () {
                        this.handleClick = this.handleClick.bind(this)
                    }
                }, {
                    key: "shouldComponentUpdate",
                    value: function (e) {
                        return !(0, d.default)(this.props, e)
                    }
                }, {
                    key: "handleClick",
                    value: function (e) {
                        this.props.handleClick(this.props.pageNumber, e)
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this.props,
                            t = e.cssClasses,
                            n = e.label,
                            r = e.ariaLabel,
                            a = e.url,
                            i = e.isDisabled,
                            o = "span",
                            u = {
                                className: t.link,
                                dangerouslySetInnerHTML: {
                                    __html: n
                                }
                            };
                        i || (o = "a", u = s({}, u, {
                            "aria-label": r,
                            href: a,
                            onClick: this.handleClick
                        }));
                        var c = f.default.createElement(o, u);
                        return f.default.createElement("li", {
                            className: t.item
                        }, c)
                    }
                }]), t
            }(l.Component);
        t.default = h
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.container,
                n = e.attributeName,
                r = e.cssClasses,
                a = void 0 === r ? {} : r,
                s = e.templates,
                u = void 0 === s ? m.default : s,
                l = e.collapsible,
                f = void 0 !== l && l,
                p = e.labels,
                h = void 0 === p ? {} : p,
                _ = e.currency,
                w = void 0 === _ ? "$" : _,
                P = e.autoHideContainer,
                R = void 0 === P || P;
            if (!t) throw new Error(b);
            var x = (0, v.getContainerNode)(t),
                S = i({
                    button: "Go",
                    separator: "to"
                }, h),
                C = {
                    root: (0, c.default)(g(null), a.root),
                    header: (0, c.default)(g("header"), a.header),
                    body: (0, c.default)(g("body"), a.body),
                    list: (0, c.default)(g("list"), a.list),
                    link: (0, c.default)(g("link"), a.link),
                    item: (0, c.default)(g("item"), a.item),
                    active: (0, c.default)(g("item", "active"), a.active),
                    form: (0, c.default)(g("form"), a.form),
                    label: (0, c.default)(g("label"), a.label),
                    input: (0, c.default)(g("input"), a.input),
                    currency: (0, c.default)(g("currency"), a.currency),
                    button: (0, c.default)(g("button"), a.button),
                    separator: (0, c.default)(g("separator"), a.separator),
                    footer: (0, c.default)(g("footer"), a.footer)
                },
                j = void 0 !== h.currency ? h.currency : w,
                O = y({
                    containerNode: x,
                    templates: u,
                    renderState: {},
                    collapsible: f,
                    cssClasses: C,
                    labels: S,
                    currency: j,
                    autoHideContainer: R
                });
            try {
                return (0, d.default)(O, function () {
                    return (0, o.unmountComponentAtNode)(x)
                })({
                    attributeName: n
                })
            } catch (e) {
                throw new Error(b)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
        t.default = a;
        var o = n(1),
            s = r(o),
            u = n(2),
            c = r(u),
            l = n(450),
            f = r(l),
            p = n(199),
            d = r(p),
            h = n(452),
            m = r(h),
            v = n(0),
            g = (0, v.bemHelper)("ais-price-ranges"),
            y = function (e) {
                var t = e.containerNode,
                    n = e.templates,
                    r = e.renderState,
                    a = e.collapsible,
                    i = e.cssClasses,
                    u = e.labels,
                    c = e.currency,
                    l = e.autoHideContainer;
                return function (e, p) {
                    var d = e.refine,
                        h = e.items,
                        g = e.instantSearchInstance;
                    if (p) return void(r.templateProps = (0, v.prepareTemplateProps)({
                        defaultTemplates: m.default,
                        templatesConfig: g.templatesConfig,
                        templates: n
                    }));
                    var y = l && 0 === h.length;
                    (0, o.render)(s.default.createElement(f.default, {
                        collapsible: a,
                        cssClasses: i,
                        currency: c,
                        facetValues: h,
                        labels: u,
                        refine: d,
                        shouldAutoHideContainer: y,
                        templateProps: r.templateProps
                    }), t)
                }
            },
            b = "Usage:\npriceRanges({\n  container,\n  attributeName,\n  [ currency=$ ],\n  [ cssClasses.{root,header,body,list,item,active,link,form,label,input,currency,separator,button,footer} ],\n  [ templates.{header,item,footer} ],\n  [ labels.{currency,separator,button} ],\n  [ autoHideContainer=true ],\n  [ collapsible=false ]\n})"
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function s(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.RawPriceRanges = void 0;
        var u = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            c = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            l = n(3),
            f = (r(l), n(1)),
            p = r(f),
            d = n(12),
            h = r(d),
            m = n(451),
            v = r(m),
            g = n(2),
            y = r(g),
            b = n(8),
            _ = r(b),
            w = n(13),
            P = r(w),
            R = n(20),
            x = r(R),
            S = t.RawPriceRanges = function (e) {
                function t() {
                    return i(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return s(t, e), c(t, [{
                    key: "componentWillMount",
                    value: function () {
                        this.refine = this.refine.bind(this)
                    }
                }, {
                    key: "shouldComponentUpdate",
                    value: function (e) {
                        return !(0, _.default)(this.props.facetValues, e.facetValues)
                    }
                }, {
                    key: "getForm",
                    value: function () {
                        var e = u({
                                currency: this.props.currency
                            }, this.props.labels),
                            t = void 0;
                        return t = 1 === this.props.facetValues.length ? {
                            from: void 0 !== this.props.facetValues[0].from ? this.props.facetValues[0].from : "",
                            to: void 0 !== this.props.facetValues[0].to ? this.props.facetValues[0].to : ""
                        } : {
                            from: "",
                            to: ""
                        }, p.default.createElement(v.default, {
                            cssClasses: this.props.cssClasses,
                            currentRefinement: t,
                            labels: e,
                            refine: this.refine
                        })
                    }
                }, {
                    key: "getItemFromFacetValue",
                    value: function (e) {
                        var t = this,
                            n = (0, y.default)(this.props.cssClasses.item, a({}, this.props.cssClasses.active, e.isRefined)),
                            r = e.from + "_" + e.to,
                            i = function (n) {
                                return t.refine(e, n)
                            },
                            o = u({
                                currency: this.props.currency
                            }, e);
                        return p.default.createElement("div", {
                            className: n,
                            key: r
                        }, p.default.createElement("a", {
                            className: this.props.cssClasses.link,
                            href: e.url,
                            onClick: i
                        }, p.default.createElement(h.default, u({
                            data: o,
                            templateKey: "item"
                        }, this.props.templateProps))))
                    }
                }, {
                    key: "refine",
                    value: function (e, t) {
                        t.preventDefault(), this.props.refine(e)
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this;
                        return p.default.createElement("div", null, p.default.createElement("div", {
                            className: this.props.cssClasses.list
                        }, this.props.facetValues.map(function (t) {
                            return e.getItemFromFacetValue(t)
                        })), this.getForm())
                    }
                }]), t
            }(f.Component);
        S.defaultProps = {
            cssClasses: {}
        }, t.default = (0, P.default)((0, x.default)(S))
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function s(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            c = n(3),
            l = (r(c), n(1)),
            f = r(l),
            p = function (e) {
                function t(e) {
                    i(this, t);
                    var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return n.state = {
                        from: e.currentRefinement.from,
                        to: e.currentRefinement.to
                    }, n
                }
                return s(t, e), u(t, [{
                    key: "componentWillMount",
                    value: function () {
                        this.handleSubmit = this.handleSubmit.bind(this)
                    }
                }, {
                    key: "componentWillReceiveProps",
                    value: function (e) {
                        this.setState({
                            from: e.currentRefinement.from,
                            to: e.currentRefinement.to
                        })
                    }
                }, {
                    key: "getInput",
                    value: function (e) {
                        var t = this;
                        return f.default.createElement("label", {
                            className: this.props.cssClasses.label
                        }, f.default.createElement("span", {
                            className: this.props.cssClasses.currency
                        }, this.props.labels.currency, " "), f.default.createElement("input", {
                            className: this.props.cssClasses.input,
                            onChange: function (n) {
                                return t.setState(a({}, e, n.target.value))
                            },
                            ref: function (n) {
                                return t[e] = n
                            },
                            type: "number",
                            value: this.state[e]
                        }))
                    }
                }, {
                    key: "handleSubmit",
                    value: function (e) {
                        var t = "" !== this.from.value ? parseInt(this.from.value, 10) : void 0,
                            n = "" !== this.to.value ? parseInt(this.to.value, 10) : void 0;
                        this.props.refine({
                            from: t,
                            to: n
                        }, e)
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this,
                            t = this.getInput("from"),
                            n = this.getInput("to"),
                            r = this.handleSubmit;
                        return f.default.createElement("form", {
                            className: this.props.cssClasses.form,
                            onSubmit: r,
                            ref: function (t) {
                                return e.form = t
                            }
                        }, t, f.default.createElement("span", {
                            className: this.props.cssClasses.separator
                        }, " ", this.props.labels.separator, " "), n, f.default.createElement("button", {
                            className: this.props.cssClasses.button,
                            type: "submit"
                        }, this.props.labels.button))
                    }
                }]), t
            }(l.Component);
        p.defaultProps = {
            cssClasses: {},
            labels: {}
        }, t.default = p
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            header: "",
            item: "\n    {{#from}}\n      {{^to}}\n        &ge;\n      {{/to}}\n      {{currency}}{{#helpers.formatNumber}}{{from}}{{/helpers.formatNumber}}\n    {{/from}}\n    {{#to}}\n      {{#from}}\n        -\n      {{/from}}\n      {{^from}}\n        &le;\n      {{/from}}\n      {{#helpers.formatNumber}}{{to}}{{/helpers.formatNumber}}\n    {{/to}}\n  ",
            footer: ""
        }
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.container,
                n = e.attributeName,
                r = e.min,
                a = e.max,
                o = e.precision,
                s = void 0 === o ? 0 : o,
                u = e.cssClasses,
                c = void 0 === u ? {} : u,
                f = e.templates,
                p = void 0 === f ? g.default : f,
                d = e.labels,
                v = void 0 === d ? {} : d,
                w = e.autoHideContainer,
                P = void 0 === w || w,
                R = e.collapsible,
                x = void 0 !== R && R;
            if (!t) throw new Error(_);
            var S = (0, m.getContainerNode)(t),
                C = i({
                    separator: "to",
                    submit: "Go"
                }, v),
                j = {
                    root: (0, l.default)(y(null), c.root),
                    header: (0, l.default)(y("header"), c.header),
                    body: (0, l.default)(y("body"), c.body),
                    form: (0, l.default)(y("form"), c.form),
                    fieldset: (0, l.default)(y("fieldset"), c.fieldset),
                    labelMin: (0, l.default)(y("labelMin"), c.labelMin),
                    inputMin: (0, l.default)(y("inputMin"), c.inputMin),
                    separator: (0, l.default)(y("separator"), c.separator),
                    labelMax: (0, l.default)(y("labelMax"), c.labelMax),
                    inputMax: (0, l.default)(y("inputMax"), c.inputMax),
                    submit: (0, l.default)(y("submit"), c.submit),
                    footer: (0, l.default)(y("footer"), c.footer)
                },
                O = b({
                    containerNode: S,
                    cssClasses: j,
                    templates: p,
                    labels: C,
                    autoHideContainer: P,
                    collapsible: x,
                    renderState: {}
                });
            try {
                return (0, h.default)(O)({
                    attributeName: n,
                    min: r,
                    max: a,
                    precision: s
                })
            } catch (e) {
                throw new Error(_)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            o = function () {
                function e(e, t) {
                    var n = [],
                        r = !0,
                        a = !1,
                        i = void 0;
                    try {
                        for (var o, s = e[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, i = e
                    } finally {
                        try {
                            !r && s.return && s.return()
                        } finally {
                            if (a) throw i
                        }
                    }
                    return n
                }
                return function (t, n) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t)) return e(t, n);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }();
        t.default = a;
        var s = n(1),
            u = r(s),
            c = n(2),
            l = r(c),
            f = n(454),
            p = r(f),
            d = n(79),
            h = r(d),
            m = n(0),
            v = n(455),
            g = r(v),
            y = (0, m.bemHelper)("ais-range-input"),
            b = function (e) {
                var t = e.containerNode,
                    n = e.templates,
                    r = e.cssClasses,
                    a = e.labels,
                    i = e.autoHideContainer,
                    c = e.collapsible,
                    l = e.renderState;
                return function (e, f) {
                    var d = e.refine,
                        h = e.range,
                        v = e.start,
                        y = e.widgetParams,
                        b = e.instantSearchInstance;
                    if (f) return void(l.templateProps = (0, m.prepareTemplateProps)({
                        defaultTemplates: g.default,
                        templatesConfig: b.templatesConfig,
                        templates: n
                    }));
                    var _ = h.min,
                        w = h.max,
                        P = o(v, 2),
                        R = P[0],
                        x = P[1],
                        S = 1 / Math.pow(10, y.precision),
                        C = i && _ === w,
                        j = {
                            min: R !== -1 / 0 && R !== _ ? R : void 0,
                            max: x !== 1 / 0 && x !== w ? x : void 0
                        };
                    (0, s.render)(u.default.createElement(p.default, {
                        min: _,
                        max: w,
                        step: S,
                        values: j,
                        cssClasses: r,
                        labels: a,
                        refine: d,
                        shouldAutoHideContainer: C,
                        collapsible: c,
                        templateProps: l.templateProps
                    }), t)
                }
            },
            _ = "Usage:\nrangeInput({\n  container,\n  attributeName,\n  [ min ],\n  [ max ],\n  [ precision = 0 ],\n  [ cssClasses.{root, header, body, form, fieldset, labelMin, inputMin, separator, labelMax, inputMax, submit, footer} ],\n  [ templates.{header, footer} ],\n  [ labels.{separator, submit} ],\n  [ autoHideContainer=true ],\n  [ collapsible=false ]\n})"
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function s(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.RawRangeInput = void 0;
        var u = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            c = n(1),
            l = r(c),
            f = n(3),
            p = (r(f), n(13)),
            d = r(p),
            h = n(20),
            m = r(h),
            v = t.RawRangeInput = function (e) {
                function t(e) {
                    i(this, t);
                    var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return n.onChange = function (e) {
                        return function (t) {
                            n.setState(a({}, e, t.currentTarget.value))
                        }
                    }, n.onSubmit = function (e) {
                        e.preventDefault(), n.props.refine([n.state.min, n.state.max])
                    }, n.state = {
                        min: e.values.min,
                        max: e.values.max
                    }, n
                }
                return s(t, e), u(t, [{
                    key: "componentWillReceiveProps",
                    value: function (e) {
                        this.setState({
                            min: e.values.min,
                            max: e.values.max
                        })
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this.state,
                            t = e.min,
                            n = e.max,
                            r = this.props,
                            a = r.min,
                            i = r.max,
                            o = r.step,
                            s = r.cssClasses,
                            u = r.labels,
                            c = a >= i;
                        return l.default.createElement("form", {
                            className: s.form,
                            onSubmit: this.onSubmit
                        }, l.default.createElement("fieldset", {
                            className: s.fieldset
                        }, l.default.createElement("label", {
                            className: s.labelMin
                        }, l.default.createElement("input", {
                            className: s.inputMin,
                            type: "number",
                            min: a,
                            max: i,
                            step: o,
                            value: t,
                            onChange: this.onChange("min"),
                            placeholder: a,
                            disabled: c
                        })), l.default.createElement("span", {
                            className: s.separator
                        }, u.separator), l.default.createElement("label", {
                            className: s.labelMax
                        }, l.default.createElement("input", {
                            className: s.inputMax,
                            type: "number",
                            min: a,
                            max: i,
                            step: o,
                            value: n,
                            onChange: this.onChange("max"),
                            placeholder: i,
                            disabled: c
                        })), l.default.createElement("button", {
                            role: "button",
                            className: s.submit,
                            disabled: c
                        }, u.submit)))
                    }
                }]), t
            }(c.Component);
        t.default = (0, d.default)((0, m.default)(v))
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            header: "",
            footer: ""
        }
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e) {
            var t = e.containerNode,
                n = e.query,
                r = e.loadingIndicator,
                a = e.isSearchStalled,
                i = s(t);
            if (document.activeElement === i || n === i.value || (i.value = n), r) {
                var o = "INPUT" === t.tagName ? t.parentNode : t.firstChild;
                a ? o.classList.add("ais-stalled-search") : o.classList.remove("ais-stalled-search")
            }
        }

        function i() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.container,
                n = e.placeholder,
                r = void 0 === n ? "" : n,
                a = e.cssClasses,
                i = void 0 === a ? {} : a,
                o = e.poweredBy,
                s = void 0 !== o && o,
                u = e.wrapInput,
                c = void 0 === u || u,
                l = e.autofocus,
                f = void 0 === l ? "auto" : l,
                p = e.searchOnEnterKeyPressOnly,
                d = void 0 !== p && p,
                h = e.reset,
                m = void 0 === h || h,
                v = e.magnifier,
                g = void 0 === v || v,
                y = e.loadingIndicator,
                b = void 0 !== y && y,
                _ = e.queryHook;
            if (!t) throw new Error(M);
            var w = (0, x.getContainerNode)(t);
            "boolean" !== typeof f && (f = "auto"), !0 === s && (s = {});
            var P = E({
                containerNode: w,
                cssClasses: i,
                placeholder: r,
                poweredBy: s,
                templates: O.default,
                autofocus: f,
                searchOnEnterKeyPressOnly: d,
                wrapInput: c,
                reset: m,
                magnifier: g,
                loadingIndicator: b
            });
            try {
                return (0, C.default)(P, F(w))({
                    queryHook: _
                })
            } catch (e) {
                throw new Error(M)
            }
        }

        function o(e) {
            return "INPUT" === e.tagName ? e : document.createElement("input")
        }

        function s(e) {
            return "INPUT" === e.tagName ? e : e.querySelector("input")
        }

        function u(e, t) {
            var n = document.createElement("div");
            return (0, R.default)(N(null), t.root).split(" ").forEach(function (e) {
                return n.classList.add(e)
            }), n.appendChild(e), n
        }

        function c(e, t, n) {
            e.addEventListener ? e.addEventListener(t, n) : e.attachEvent("on" + t, n)
        }

        function l(e) {
            return (e.currentTarget ? e.currentTarget : e.srcElement).value
        }

        function f(e, t) {
            return function (n) {
                return n.keyCode === e && t(n)
            }
        }

        function p(e) {
            return function (t) {
                return e(l(t))
            }
        }

        function d(e, t, n, r) {
            var a = {
                autocapitalize: "off",
                autocomplete: "off",
                autocorrect: "off",
                placeholder: e,
                role: "textbox",
                spellcheck: "false",
                type: "text",
                value: n
            };
            (0, w.default)(a, function (e, n) {
                t.hasAttribute(n) || t.setAttribute(n, e)
            }), (0, R.default)(N("input"), r.input).split(" ").forEach(function (e) {
                return t.classList.add(e)
            })
        }

        function h(e, t, n, r) {
            var a = n.reset;
            t = b({
                cssClasses: {},
                template: a
            }, t);
            var i = {
                    root: (0, R.default)(N("reset"), t.cssClasses.root)
                },
                o = (0, x.renderTemplate)({
                    templateKey: "template",
                    templates: t,
                    data: {
                        cssClasses: i
                    }
                }),
                s = y(o, (0, R.default)(N("reset-wrapper")));
            e.parentNode.appendChild(s), s.addEventListener("click", function (e) {
                e.preventDefault(), r()
            })
        }

        function m(e, t, n) {
            var r = n.magnifier;
            t = b({
                cssClasses: {},
                template: r
            }, t);
            var a = {
                    root: (0, R.default)(N("magnifier"), t.cssClasses.root)
                },
                i = (0, x.renderTemplate)({
                    templateKey: "template",
                    templates: t,
                    data: {
                        cssClasses: a
                    }
                }),
                o = y(i, (0, R.default)(N("magnifier-wrapper")));
            e.parentNode.appendChild(o)
        }

        function v(e, t, n) {
            var r = n.loadingIndicator;
            t = b({
                cssClasses: {},
                template: r
            }, t);
            var a = {
                    root: (0, R.default)(N("loading-indicator"), t.cssClasses.root)
                },
                i = (0, x.renderTemplate)({
                    templateKey: "template",
                    templates: t,
                    data: {
                        cssClasses: a
                    }
                }),
                o = y(i, (0, R.default)(N("loading-indicator-wrapper")));
            e.parentNode.appendChild(o)
        }

        function g(e, t, n) {
            var r = n.poweredBy;
            t = b({
                cssClasses: {},
                template: r
            }, t);
            var a = {
                    root: (0, R.default)(N("powered-by"), t.cssClasses.root),
                    link: (0, R.default)(N("powered-by-link"), t.cssClasses.link)
                },
                i = "https://www.algolia.com/?utm_source=instantsearch.js&utm_medium=website&utm_content=" + location.hostname + "&utm_campaign=poweredby",
                o = (0, x.renderTemplate)({
                    templateKey: "template",
                    templates: t,
                    data: {
                        cssClasses: a,
                        url: i
                    }
                }),
                s = y(o);
            e.parentNode.insertBefore(s, e.nextSibling)
        }

        function y(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                n = document.createElement("div");
            return n.innerHTML = '<span class="' + t + '">' + e.trim() + "</span>", n.firstChild
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var b = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
        t.default = i;
        var _ = n(18),
            w = r(_),
            P = n(2),
            R = r(P),
            x = n(0),
            S = n(201),
            C = r(S),
            j = n(457),
            O = r(j),
            N = (0, x.bemHelper)("ais-search-box"),
            E = function (e) {
                var t = e.containerNode,
                    n = e.cssClasses,
                    r = e.placeholder,
                    i = e.poweredBy,
                    s = e.templates,
                    y = e.autofocus,
                    b = e.searchOnEnterKeyPressOnly,
                    _ = e.wrapInput,
                    w = e.reset,
                    P = e.magnifier,
                    x = e.loadingIndicator;
                return function (e, S) {
                    var C = e.refine,
                        j = e.clear,
                        O = e.query,
                        E = e.onHistoryChange,
                        F = e.isSearchStalled;
                    if (S) {
                        var M = window.addEventListener ? "input" : "propertychange",
                            k = o(t),
                            T = k === t,
                            L = O;
                        if (T) {
                            var I = document.createElement("div");
                            k.parentNode.insertBefore(I, k);
                            var A = k.parentNode,
                                H = _ ? u(k, n) : k;
                            A.replaceChild(H, I);
                            var U = k.value;
                            U && (L = U, C(U, !1))
                        } else {
                            var D = _ ? u(k, n) : k;
                            t.appendChild(D)
                        }
                        P && m(k, P, s), w && h(k, w, s, j), x && v(k, x, s), d(r, k, L, n), i && g(k, i, s), window.addEventListener("pageshow", function () {
                            k.value = L
                        }), E(function (e) {
                            k.value = e.query || ""
                        }), (!0 === y || "auto" === y && "" === L) && (k.focus(), k.setSelectionRange(L.length, L.length)), b ? (c(k, M, function (e) {
                            C(l(e), !1)
                        }), c(k, "keyup", function (e) {
                            13 === e.keyCode && C(l(e))
                        })) : (c(k, M, p(C)), ("propertychange" === M || window.attachEvent) && c(k, "keyup", f(8, p(C))))
                    } else a({
                        containerNode: t,
                        query: O,
                        loadingIndicator: x,
                        isSearchStalled: F
                    });
                    if (w) {
                        var B = "." + (0, R.default)(N("reset-wrapper"));
                        ("INPUT" === t.tagName ? t.parentNode.querySelector(B) : t.querySelector(B)).style.display = O && O.trim() ? "block" : "none"
                    }
                }
            },
            F = function (e) {
                return function () {
                    var t = document.createRange();
                    t.selectNodeContents(e), t.deleteContents()
                }
            },
            M = "Usage:\nsearchBox({\n  container,\n  [ placeholder ],\n  [ cssClasses.{input,poweredBy} ],\n  [ poweredBy=false || poweredBy.{template, cssClasses.{root,link}} ],\n  [ wrapInput ],\n  [ autofocus ],\n  [ searchOnEnterKeyPressOnly ],\n  [ queryHook ]\n  [ reset=true || reset.{template, cssClasses.{root}} ]\n})"
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            poweredBy: '\n<div class="{{cssClasses.root}}">\n  Search by\n  <a class="{{cssClasses.link}}" href="{{url}}" target="_blank">Algolia</a>\n</div>',
            reset: '\n<button type="reset" title="Clear the search query." class="{{cssClasses.root}}">\n  <svg\n    xmlns="http://www.w3.org/2000/svg"\n    viewBox="0 0 20 20" width="100%"\n    height="100%"\n  >\n    <path\n      d="M8.114 10L.944 2.83 0 1.885 1.886 0l.943.943L10 8.113l7.17-7.17.944-.943L20 1.886l-.943.943-7.17 7.17 7.17 7.17.943.944L18.114 20l-.943-.943-7.17-7.17-7.17 7.17-.944.943L0 18.114l.943-.943L8.113 10z"\n      fill-rule="evenodd">\n    </path>\n  </svg>\n</button>\n  ',
            magnifier: '\n<div class="{{cssClasses.root}}">\n  <svg\n    xmlns="http://www.w3.org/2000/svg" id="sbx-icon-search-13"\n    viewBox="0 0 40 40"\n    width="100%"\n    height="100%"\n  >\n    <path\n      d="M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z"\n      fill-rule="evenodd">\n    </path>\n  </svg>\n</div>\n  ',
            loadingIndicator: '\n<div class="{{cssClasses.root}}">\n\x3c!-- By Sam Herbert (@sherb), for everyone. More @ http://goo.gl/7AJzbL --\x3e\n<svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#BFC7D8">\n    <g fill="none" fill-rule="evenodd">\n        <g transform="translate(1 1)" stroke-width="2">\n            <circle stroke-opacity=".5" cx="18" cy="18" r="18"/>\n            <path d="M36 18c0-9.94-8.06-18-18-18">\n                <animateTransform\n                    attributeName="transform"\n                    type="rotate"\n                    from="0 18 18"\n                    to="360 18 18"\n                    dur="1s"\n                    repeatCount="indefinite"/>\n            </path>\n        </g>\n    </g>\n</svg>\n</div>\n  '
        }
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.container,
                n = e.attributeName,
                r = e.min,
                a = e.max,
                i = e.templates,
                s = void 0 === i ? m : i,
                u = e.cssClasses,
                l = void 0 === u ? {} : u,
                f = e.step,
                p = e.pips,
                b = void 0 === p || p,
                _ = e.precision,
                w = void 0 === _ ? 0 : _,
                P = e.tooltips,
                R = void 0 === P || P,
                x = e.autoHideContainer,
                S = void 0 === x || x,
                C = e.collapsible,
                j = void 0 !== C && C;
            if (!t) throw new Error(y);
            var O = (0, h.getContainerNode)(t),
                N = {
                    root: (0, c.default)(v(null), l.root),
                    header: (0, c.default)(v("header"), l.header),
                    body: (0, c.default)(v("body"), l.body),
                    footer: (0, c.default)(v("footer"), l.footer)
                },
                E = g({
                    containerNode: O,
                    step: f,
                    pips: b,
                    tooltips: R,
                    renderState: {},
                    templates: s,
                    autoHideContainer: S,
                    collapsible: j,
                    cssClasses: N
                });
            try {
                return (0, d.default)(E, function () {
                    return (0, o.unmountComponentAtNode)(O)
                })({
                    attributeName: n,
                    min: r,
                    max: a,
                    precision: w
                })
            } catch (e) {
                throw new Error(y)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function () {
            function e(e, t) {
                var n = [],
                    r = !0,
                    a = !1,
                    i = void 0;
                try {
                    for (var o, s = e[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    a = !0, i = e
                } finally {
                    try {
                        !r && s.return && s.return()
                    } finally {
                        if (a) throw i
                    }
                }
                return n
            }
            return function (t, n) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }();
        t.default = a;
        var o = n(1),
            s = r(o),
            u = n(2),
            c = r(u),
            l = n(459),
            f = r(l),
            p = n(79),
            d = r(p),
            h = n(0),
            m = {
                header: "",
                footer: ""
            },
            v = (0, h.bemHelper)("ais-range-slider"),
            g = function (e) {
                var t = e.containerNode,
                    n = e.cssClasses,
                    r = e.pips,
                    a = e.step,
                    u = e.tooltips,
                    c = e.autoHideContainer,
                    l = e.collapsible,
                    p = e.renderState,
                    d = e.templates;
                return function (e, v) {
                    var g = e.refine,
                        y = e.range,
                        b = e.start,
                        _ = e.instantSearchInstance;
                    if (v) return void(p.templateProps = (0, h.prepareTemplateProps)({
                        defaultTemplates: m,
                        templatesConfig: _.templatesConfig,
                        templates: d
                    }));
                    var w = y.min,
                        P = y.max,
                        R = c && w === P,
                        x = i(b, 2),
                        S = x[0],
                        C = x[1],
                        j = S === -1 / 0 ? w : S,
                        O = C === 1 / 0 ? P : C,
                        N = [j > P ? P : j, O < w ? w : O];
                    (0, o.render)(s.default.createElement(f.default, {
                        cssClasses: n,
                        refine: g,
                        min: w,
                        max: P,
                        values: N,
                        tooltips: u,
                        step: a,
                        pips: r,
                        shouldAutoHideContainer: R,
                        collapsible: l,
                        templateProps: p.templateProps
                    }), t)
                }
            },
            y = "Usage:\nrangeSlider({\n  container,\n  attributeName,\n  [ min ],\n  [ max ],\n  [ pips = true ],\n  [ step = 1 ],\n  [ precision = 0 ],\n  [ tooltips=true ],\n  [ templates.{header, footer} ],\n  [ cssClasses.{root, header, body, footer} ],\n  [ autoHideContainer=true ],\n  [ collapsible=false ],\n});\n"
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function s(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.RawSlider = void 0;
        var u = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            c = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            l = n(460),
            f = r(l),
            p = n(198),
            d = r(p),
            h = n(212),
            m = r(h),
            v = n(3),
            g = (r(v), n(1)),
            y = r(g),
            b = n(461),
            _ = r(b),
            w = n(2),
            P = r(w),
            R = n(466),
            x = r(R),
            S = n(13),
            C = r(S),
            j = n(20),
            O = r(j),
            N = t.RawSlider = function (e) {
                function t() {
                    var e, n, r, a;
                    i(this, t);
                    for (var s = arguments.length, c = Array(s), l = 0; l < s; l++) c[l] = arguments[l];
                    return n = r = o(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(c))), r.handleChange = function (e) {
                        var t = e.values;
                        r.isDisabled || r.props.refine(t)
                    }, r.createHandleComponent = function (e) {
                        return function (t) {
                            var n = Math.round(100 * parseFloat(t["aria-valuenow"])) / 100,
                                r = (0, m.default)(e, "format") ? e.format(n) : n,
                                a = (0, P.default)("ais-range-slider--handle", t.className, {
                                    "ais-range-slider--handle-lower": 0 === t["data-handle-key"],
                                    "ais-range-slider--handle-upper": 1 === t["data-handle-key"]
                                });
                            return y.default.createElement("div", u({}, t, {
                                className: a
                            }), e ? y.default.createElement("div", {
                                className: "ais-range-slider--tooltip"
                            }, r) : null)
                        }
                    }, a = n, o(r, a)
                }
                return s(t, e), c(t, [{
                    key: "computeDefaultPitPoints",
                    value: function (e) {
                        var t = e.min,
                            n = e.max,
                            r = n - t,
                            i = r / 34;
                        return [t].concat(a((0, f.default)(33, function (e) {
                            return t + i * (e + 1)
                        })), [n])
                    }
                }, {
                    key: "computeSnapPoints",
                    value: function (e) {
                        var t = e.min,
                            n = e.max,
                            r = e.step;
                        if (r) return [].concat(a((0, d.default)(t, n, r)), [n])
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this.props,
                            t = e.tooltips,
                            n = e.step,
                            r = e.pips,
                            a = e.values,
                            i = this.isDisabled ? {
                                min: this.props.min,
                                max: this.props.max + .001
                            } : this.props,
                            o = i.min,
                            s = i.max,
                            u = this.computeSnapPoints({
                                min: o,
                                max: s,
                                step: n
                            }),
                            c = !1 === r ? [] : this.computeDefaultPitPoints({
                                min: o,
                                max: s
                            });
                        return y.default.createElement("div", {
                            className: this.isDisabled ? "ais-range-slider--disabled" : ""
                        }, y.default.createElement(_.default, {
                            handle: this.createHandleComponent(t),
                            onChange: this.handleChange,
                            min: o,
                            max: s,
                            pitComponent: x.default,
                            pitPoints: c,
                            snap: !0,
                            snapPoints: u,
                            values: this.isDisabled ? [o, s] : a,
                            disabled: this.isDisabled
                        }))
                    }
                }, {
                    key: "isDisabled",
                    get: function () {
                        return this.props.min >= this.props.max
                    }
                }]), t
            }(g.Component);
        t.default = (0, C.default)((0, O.default)(N))
    }, function (e, t, n) {
        function r(e, t) {
            if ((e = o(e)) < 1 || e > s) return [];
            var n = u,
                r = c(e, u);
            t = i(t), e -= u;
            for (var l = a(r, t); ++n < e;) t(n);
            return l
        }
        var a = n(114),
            i = n(91),
            o = n(32),
            s = 9007199254740991,
            u = 4294967295,
            c = Math.min;
        e.exports = r
    }, function (e, t, n) {
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function s(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function u(e) {
            return ["rheostat", "vertical" === e.orientation ? "rheostat-vertical" : "rheostat-horizontal"].concat(e.className.split(" ")).join(" ")
        }

        function c(e) {
            return Number(e.currentTarget.getAttribute("data-handle-key"))
        }

        function l(e) {
            e.stopPropagation(), e.preventDefault()
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var f = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            p = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            d = n(462),
            h = r(d),
            m = n(3),
            v = r(m),
            g = n(464),
            y = function (e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }(g),
            b = n(465),
            _ = r(b),
            w = Object.prototype.hasOwnProperty,
            P = v.default.arrayOf(v.default.number),
            R = v.default.oneOfType([v.default.func, v.default.string]),
            x = function (e) {
                function t() {
                    return i(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return s(t, e), p(t, [{
                    key: "render",
                    value: function () {
                        function e() {
                            return h.default.createElement("button", f({}, this.props, {
                                type: "button"
                            }))
                        }
                        return e
                    }()
                }]), t
            }(h.default.Component),
            S = {
                algorithm: v.default.shape({
                    getValue: v.default.func,
                    getPosition: v.default.func
                }),
                children: v.default.node,
                className: v.default.string,
                disabled: v.default.bool,
                handle: R,
                max: v.default.number,
                min: v.default.number,
                onClick: v.default.func,
                onChange: v.default.func,
                onKeyPress: v.default.func,
                onSliderDragEnd: v.default.func,
                onSliderDragMove: v.default.func,
                onSliderDragStart: v.default.func,
                onValuesUpdated: v.default.func,
                orientation: v.default.oneOf(["horizontal", "vertical"]),
                pitComponent: R,
                pitPoints: P,
                progressBar: R,
                snap: v.default.bool,
                snapPoints: P,
                values: P
            },
            C = {
                algorithm: _.default,
                className: "",
                children: null,
                disabled: !1,
                handle: x,
                max: y.PERCENT_FULL,
                min: y.PERCENT_EMPTY,
                onClick: null,
                onChange: null,
                onKeyPress: null,
                onSliderDragEnd: null,
                onSliderDragMove: null,
                onSliderDragStart: null,
                onValuesUpdated: null,
                orientation: "horizontal",
                pitComponent: null,
                pitPoints: [],
                progressBar: "div",
                snap: !1,
                snapPoints: [],
                values: [y.PERCENT_EMPTY]
            },
            j = function (e) {
                function t(e) {
                    i(this, t);
                    var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)),
                        r = n.props,
                        a = r.algorithm,
                        s = r.max,
                        c = r.min,
                        l = r.values;
                    return n.state = {
                        className: u(n.props),
                        handlePos: l.map(function (e) {
                            return a.getPosition(e, c, s)
                        }),
                        handleDimensions: 0,
                        mousePos: null,
                        sliderBox: {},
                        slidingIndex: null,
                        values: l
                    }, n.getPublicState = n.getPublicState.bind(n), n.getSliderBoundingBox = n.getSliderBoundingBox.bind(n), n.getProgressStyle = n.getProgressStyle.bind(n), n.getMinValue = n.getMinValue.bind(n), n.getMaxValue = n.getMaxValue.bind(n), n.getHandleDimensions = n.getHandleDimensions.bind(n), n.getClosestSnapPoint = n.getClosestSnapPoint.bind(n), n.getSnapPosition = n.getSnapPosition.bind(n), n.getNextPositionForKey = n.getNextPositionForKey.bind(n), n.getNextState = n.getNextState.bind(n), n.handleClick = n.handleClick.bind(n), n.getClosestHandle = n.getClosestHandle.bind(n), n.setStartSlide = n.setStartSlide.bind(n), n.startMouseSlide = n.startMouseSlide.bind(n), n.startTouchSlide = n.startTouchSlide.bind(n), n.handleMouseSlide = n.handleMouseSlide.bind(n), n.handleTouchSlide = n.handleTouchSlide.bind(n), n.handleSlide = n.handleSlide.bind(n), n.endSlide = n.endSlide.bind(n), n.handleKeydown = n.handleKeydown.bind(n), n.validatePosition = n.validatePosition.bind(n), n.validateValues = n.validateValues.bind(n), n.canMove = n.canMove.bind(n), n.fireChangeEvent = n.fireChangeEvent.bind(n), n.slideTo = n.slideTo.bind(n), n.updateNewValues = n.updateNewValues.bind(n), n
                }
                return s(t, e), p(t, [{
                    key: "componentWillReceiveProps",
                    value: function () {
                        function e(e) {
                            var t = this.props,
                                n = t.className,
                                r = t.disabled,
                                a = t.min,
                                i = t.max,
                                o = t.orientation,
                                s = this.state,
                                c = s.values,
                                l = s.slidingIndex,
                                f = e.min !== a || e.max !== i,
                                p = c.length !== e.values.length || c.some(function (t, n) {
                                    return e.values[n] !== t
                                }),
                                d = e.className !== n || e.orientation !== o,
                                h = e.disabled && !r;
                            d && this.setState({
                                className: u(e)
                            }), (f || p) && this.updateNewValues(e), h && null !== l && this.endSlide()
                        }
                        return e
                    }()
                }, {
                    key: "getPublicState",
                    value: function () {
                        function e() {
                            var e = this.props,
                                t = e.min;
                            return {
                                max: e.max,
                                min: t,
                                values: this.state.values
                            }
                        }
                        return e
                    }()
                }, {
                    key: "getSliderBoundingBox",
                    value: function () {
                        function e() {
                            var e = this.refs.rheostat,
                                t = e.getDOMNode ? e.getDOMNode() : e,
                                n = t.getBoundingClientRect();
                            return {
                                height: n.height || t.clientHeight,
                                left: n.left,
                                top: n.top,
                                width: n.width || t.clientWidth
                            }
                        }
                        return e
                    }()
                }, {
                    key: "getProgressStyle",
                    value: function () {
                        function e(e) {
                            var t = this.state.handlePos,
                                n = t[e];
                            if (0 === e) return "vertical" === this.props.orientation ? {
                                height: String(n) + "%",
                                top: 0
                            } : {
                                left: 0,
                                width: String(n) + "%"
                            };
                            var r = t[e - 1],
                                a = n - r;
                            return "vertical" === this.props.orientation ? {
                                height: a + "%",
                                top: String(r) + "%"
                            } : {
                                left: String(r) + "%",
                                width: a + "%"
                            }
                        }
                        return e
                    }()
                }, {
                    key: "getMinValue",
                    value: function () {
                        function e(e) {
                            return this.state.values[e - 1] ? Math.max(this.props.min, this.state.values[e - 1]) : this.props.min
                        }
                        return e
                    }()
                }, {
                    key: "getMaxValue",
                    value: function () {
                        function e(e) {
                            return this.state.values[e + 1] ? Math.min(this.props.max, this.state.values[e + 1]) : this.props.max
                        }
                        return e
                    }()
                }, {
                    key: "getHandleDimensions",
                    value: function () {
                        function e(e, t) {
                            var n = e.currentTarget || null;
                            return n ? "vertical" === this.props.orientation ? n.clientHeight / t.height * y.PERCENT_FULL / 2 : n.clientWidth / t.width * y.PERCENT_FULL / 2 : 0
                        }
                        return e
                    }()
                }, {
                    key: "getClosestSnapPoint",
                    value: function () {
                        function e(e) {
                            return this.props.snapPoints.length ? this.props.snapPoints.reduce(function (t, n) {
                                return Math.abs(t - e) < Math.abs(n - e) ? t : n
                            }) : e
                        }
                        return e
                    }()
                }, {
                    key: "getSnapPosition",
                    value: function () {
                        function e(e) {
                            if (!this.props.snap) return e;
                            var t = this.props,
                                n = t.algorithm,
                                r = t.max,
                                a = t.min,
                                i = n.getValue(e, a, r),
                                o = this.getClosestSnapPoint(i);
                            return n.getPosition(o, a, r)
                        }
                        return e
                    }()
                }, {
                    key: "getNextPositionForKey",
                    value: function () {
                        function e(e, t) {
                            var n, r = this.state,
                                i = r.handlePos,
                                o = r.values,
                                s = this.props,
                                u = s.algorithm,
                                c = s.max,
                                l = s.min,
                                f = s.snapPoints,
                                p = this.props.snap,
                                d = o[e],
                                h = i[e],
                                m = h,
                                v = 1;
                            c >= 100 ? h = Math.round(h) : v = 100 / (c - l);
                            var g = null;
                            p && (g = f.indexOf(this.getClosestSnapPoint(o[e])));
                            var b = (n = {}, a(n, y.KEYS.LEFT, function (e) {
                                return -1 * e
                            }), a(n, y.KEYS.RIGHT, function (e) {
                                return 1 * e
                            }), a(n, y.KEYS.UP, function (e) {
                                return 1 * e
                            }), a(n, y.KEYS.DOWN, function (e) {
                                return -1 * e
                            }), a(n, y.KEYS.PAGE_DOWN, function (e) {
                                return e > 1 ? -e : -10 * e
                            }), a(n, y.KEYS.PAGE_UP, function (e) {
                                return e > 1 ? e : 10 * e
                            }), n);
                            if (w.call(b, t)) h += b[t](v), p && (h > m ? g < f.length - 1 && (d = f[g + 1]) : g > 0 && (d = f[g - 1]));
                            else if (t === y.KEYS.HOME) h = y.PERCENT_EMPTY, p && (d = f[0]);
                            else {
                                if (t !== y.KEYS.END) return null;
                                h = y.PERCENT_FULL, p && (d = f[f.length - 1])
                            }
                            return p ? u.getPosition(d, l, c) : h
                        }
                        return e
                    }()
                }, {
                    key: "getNextState",
                    value: function () {
                        function e(e, t) {
                            var n = this,
                                r = this.state.handlePos,
                                a = this.props,
                                i = a.max,
                                o = a.min,
                                s = this.validatePosition(e, t),
                                u = r.map(function (t, n) {
                                    return n === e ? s : t
                                });
                            return {
                                handlePos: u,
                                values: u.map(function (e) {
                                    return n.props.algorithm.getValue(e, o, i)
                                })
                            }
                        }
                        return e
                    }()
                }, {
                    key: "getClosestHandle",
                    value: function () {
                        function e(e) {
                            var t = this.state.handlePos;
                            return t.reduce(function (n, r, a) {
                                return Math.abs(t[a] - e) < Math.abs(t[n] - e) ? a : n
                            }, 0)
                        }
                        return e
                    }()
                }, {
                    key: "setStartSlide",
                    value: function () {
                        function e(e, t, n) {
                            var r = this.getSliderBoundingBox();
                            this.setState({
                                handleDimensions: this.getHandleDimensions(e, r),
                                mousePos: {
                                    x: t,
                                    y: n
                                },
                                sliderBox: r,
                                slidingIndex: c(e)
                            })
                        }
                        return e
                    }()
                }, {
                    key: "startMouseSlide",
                    value: function () {
                        function e(e) {
                            this.setStartSlide(e, e.clientX, e.clientY), "function" === typeof document.addEventListener ? (document.addEventListener("mousemove", this.handleMouseSlide, !1), document.addEventListener("mouseup", this.endSlide, !1)) : (document.attachEvent("onmousemove", this.handleMouseSlide), document.attachEvent("onmouseup", this.endSlide)), l(e)
                        }
                        return e
                    }()
                }, {
                    key: "startTouchSlide",
                    value: function () {
                        function e(e) {
                            if (!(e.changedTouches.length > 1)) {
                                var t = e.changedTouches[0];
                                this.setStartSlide(e, t.clientX, t.clientY), document.addEventListener("touchmove", this.handleTouchSlide, !1), document.addEventListener("touchend", this.endSlide, !1), this.props.onSliderDragStart && this.props.onSliderDragStart(), l(e)
                            }
                        }
                        return e
                    }()
                }, {
                    key: "handleMouseSlide",
                    value: function () {
                        function e(e) {
                            null !== this.state.slidingIndex && (this.handleSlide(e.clientX, e.clientY), l(e))
                        }
                        return e
                    }()
                }, {
                    key: "handleTouchSlide",
                    value: function () {
                        function e(e) {
                            if (null !== this.state.slidingIndex) {
                                if (e.changedTouches.length > 1) return void this.endSlide();
                                var t = e.changedTouches[0];
                                this.handleSlide(t.clientX, t.clientY), l(e)
                            }
                        }
                        return e
                    }()
                }, {
                    key: "handleSlide",
                    value: function () {
                        function e(e, t) {
                            var n = this.state,
                                r = n.slidingIndex,
                                a = n.sliderBox,
                                i = "vertical" === this.props.orientation ? (t - a.top) / a.height * y.PERCENT_FULL : (e - a.left) / a.width * y.PERCENT_FULL;
                            this.slideTo(r, i), this.canMove(r, i) && (this.setState({
                                x: e,
                                y: t
                            }), this.props.onSliderDragMove && this.props.onSliderDragMove())
                        }
                        return e
                    }()
                }, {
                    key: "endSlide",
                    value: function () {
                        function e() {
                            var e = this,
                                t = this.state.slidingIndex;
                            if (this.setState({
                                    slidingIndex: null
                                }), "function" === typeof document.removeEventListener ? (document.removeEventListener("mouseup", this.endSlide, !1), document.removeEventListener("touchend", this.endSlide, !1), document.removeEventListener("touchmove", this.handleTouchSlide, !1), document.removeEventListener("mousemove", this.handleMouseSlide, !1)) : (document.detachEvent("onmousemove", this.handleMouseSlide), document.detachEvent("onmouseup", this.endSlide)), this.props.onSliderDragEnd && this.props.onSliderDragEnd(), this.props.snap) {
                                var n = this.getSnapPosition(this.state.handlePos[t]);
                                this.slideTo(t, n, function () {
                                    return e.fireChangeEvent()
                                })
                            } else this.fireChangeEvent()
                        }
                        return e
                    }()
                }, {
                    key: "handleClick",
                    value: function () {
                        function e(e) {
                            var t = this;
                            if (!e.target.getAttribute("data-handle-key")) {
                                var n = this.getSliderBoundingBox(),
                                    r = "vertical" === this.props.orientation ? (e.clientY - n.top) / n.height : (e.clientX - n.left) / n.width,
                                    a = r * y.PERCENT_FULL,
                                    i = this.getClosestHandle(a),
                                    o = this.getSnapPosition(a);
                                this.slideTo(i, o, function () {
                                    return t.fireChangeEvent()
                                }), this.props.onClick && this.props.onClick()
                            }
                        }
                        return e
                    }()
                }, {
                    key: "handleKeydown",
                    value: function () {
                        function e(e) {
                            var t = this,
                                n = c(e);
                            if (e.keyCode === y.KEYS.ESC) return void e.currentTarget.blur();
                            var r = this.getNextPositionForKey(n, e.keyCode);
                            null !== r && (this.canMove(n, r) && (this.slideTo(n, r, function () {
                                return t.fireChangeEvent()
                            }), this.props.onKeyPress && this.props.onKeyPress()), l(e))
                        }
                        return e
                    }()
                }, {
                    key: "validatePosition",
                    value: function () {
                        function e(e, t) {
                            var n = this.state,
                                r = n.handlePos,
                                a = n.handleDimensions;
                            return Math.max(Math.min(t, void 0 !== r[e + 1] ? r[e + 1] - a : y.PERCENT_FULL), void 0 !== r[e - 1] ? r[e - 1] + a : y.PERCENT_EMPTY)
                        }
                        return e
                    }()
                }, {
                    key: "validateValues",
                    value: function () {
                        function e(e, t) {
                            var n = t || this.props,
                                r = n.max,
                                a = n.min;
                            return e.map(function (e, t, n) {
                                var i = Math.max(Math.min(e, r), a);
                                return n.length && i < n[t - 1] ? n[t - 1] : i
                            })
                        }
                        return e
                    }()
                }, {
                    key: "canMove",
                    value: function () {
                        function e(e, t) {
                            var n = this.state,
                                r = n.handlePos,
                                a = n.handleDimensions;
                            return !(t < y.PERCENT_EMPTY) && (!(t > y.PERCENT_FULL) && (!(t > (void 0 !== r[e + 1] ? r[e + 1] - a : 1 / 0)) && !(t < (void 0 !== r[e - 1] ? r[e - 1] + a : -1 / 0))))
                        }
                        return e
                    }()
                }, {
                    key: "fireChangeEvent",
                    value: function () {
                        function e() {
                            var e = this.props.onChange;
                            e && e(this.getPublicState())
                        }
                        return e
                    }()
                }, {
                    key: "slideTo",
                    value: function () {
                        function e(e, t, n) {
                            var r = this,
                                a = this.getNextState(e, t);
                            this.setState(a, function () {
                                var e = r.props.onValuesUpdated;
                                e && e(r.getPublicState()), n && n()
                            })
                        }
                        return e
                    }()
                }, {
                    key: "updateNewValues",
                    value: function () {
                        function e(e) {
                            var t = this;
                            if (null === this.state.slidingIndex) {
                                var n = e.max,
                                    r = e.min,
                                    a = e.values,
                                    i = this.props.algorithm,
                                    o = this.validateValues(a, e);
                                this.setState({
                                    handlePos: o.map(function (e) {
                                        return i.getPosition(e, r, n)
                                    }),
                                    values: o
                                }, function () {
                                    return t.fireChangeEvent()
                                })
                            }
                        }
                        return e
                    }()
                }, {
                    key: "render",
                    value: function () {
                        function e() {
                            var e = this,
                                t = this.props,
                                n = t.algorithm,
                                r = t.children,
                                a = t.disabled,
                                i = t.handle,
                                o = t.max,
                                s = t.min,
                                u = t.orientation,
                                c = t.pitComponent,
                                l = t.pitPoints,
                                f = t.progressBar,
                                p = this.state,
                                d = p.className,
                                m = p.handlePos,
                                v = p.values;
                            return h.default.createElement("div", {
                                className: d,
                                ref: "rheostat",
                                onClick: !a && this.handleClick,
                                style: {
                                    position: "relative"
                                }
                            }, h.default.createElement("div", {
                                className: "rheostat-background"
                            }), m.map(function (t, n) {
                                var r = "vertical" === u ? {
                                    top: String(t) + "%",
                                    position: "absolute"
                                } : {
                                    left: String(t) + "%",
                                    position: "absolute"
                                };
                                return h.default.createElement(i, {
                                    "aria-valuemax": e.getMaxValue(n),
                                    "aria-valuemin": e.getMinValue(n),
                                    "aria-valuenow": v[n],
                                    "aria-disabled": a,
                                    "data-handle-key": n,
                                    className: "rheostat-handle",
                                    key: "handle-" + String(n),
                                    onClick: e.killEvent,
                                    onKeyDown: !a && e.handleKeydown,
                                    onMouseDown: !a && e.startMouseSlide,
                                    onTouchStart: !a && e.startTouchSlide,
                                    role: "slider",
                                    style: r,
                                    tabIndex: 0
                                })
                            }), m.map(function (t, n, r) {
                                return 0 === n && r.length > 1 ? null : h.default.createElement(f, {
                                    className: "rheostat-progress",
                                    key: "progress-bar-" + String(n),
                                    style: e.getProgressStyle(n)
                                })
                            }), c && l.map(function (e) {
                                var t = n.getPosition(e, s, o),
                                    r = "vertical" === u ? {
                                        top: String(t) + "%",
                                        position: "absolute"
                                    } : {
                                        left: String(t) + "%",
                                        position: "absolute"
                                    };
                                return h.default.createElement(c, {
                                    key: "pit-" + String(e),
                                    style: r
                                }, e)
                            }), r)
                        }
                        return e
                    }()
                }]), t
            }(h.default.Component);
        j.propTypes = S, j.defaultProps = C, t.default = j
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            function (e) {
                function r() {
                    return null
                }

                function a(e) {
                    var t = e.nodeName,
                        n = e.attributes;
                    e.attributes = {}, t.defaultProps && w(e.attributes, t.defaultProps), n && w(e.attributes, n)
                }

                function i(e, t) {
                    var n, r, a;
                    if (t) {
                        for (a in t)
                            if (n = W.test(a)) break;
                        if (n) {
                            r = e.attributes = {};
                            for (a in t) t.hasOwnProperty(a) && (r[W.test(a) ? a.replace(/([A-Z0-9])/, "-$1").toLowerCase() : a] = t[a])
                        }
                    }
                }

                function o(e, t, n) {
                    var r = t && t._preactCompatRendered && t._preactCompatRendered.base;
                    r && r.parentNode !== t && (r = null), !r && t && (r = t.firstElementChild);
                    for (var a = t.childNodes.length; a--;) t.childNodes[a] !== r && t.removeChild(t.childNodes[a]);
                    var i = Object(U.e)(e, t, r);
                    return t && (t._preactCompatRendered = i && (i._component || {
                        base: i
                    })), "function" === typeof n && n(), i && i._component || i
                }

                function s(e, t, n, r) {
                    var a = Object(U.c)(Y, {
                            context: e.context
                        }, t),
                        i = o(a, n),
                        s = i._component || i.base;
                    return r && r.call(s, i), s
                }

                function u(e) {
                    var t = e._preactCompatRendered && e._preactCompatRendered.base;
                    return !(!t || t.parentNode !== e) && (Object(U.e)(Object(U.c)(r), e, t), !0)
                }

                function c(e) {
                    return h.bind(null, e)
                }

                function l(e, t) {
                    for (var n = t || 0; n < e.length; n++) {
                        var r = e[n];
                        Array.isArray(r) ? l(r) : r && "object" === typeof r && !g(r) && (r.props && r.type || r.attributes && r.nodeName || r.children) && (e[n] = h(r.type || r.nodeName, r.props || r.attributes, r.children))
                    }
                }

                function f(e) {
                    return "function" === typeof e && !(e.prototype && e.prototype.render)
                }

                function p(e) {
                    return S({
                        displayName: e.displayName || e.name,
                        render: function () {
                            return e(this.props, this.context)
                        }
                    })
                }

                function d(e) {
                    var t = e[q];
                    return t ? !0 === t ? e : t : (t = p(e), Object.defineProperty(t, q, {
                        configurable: !0,
                        value: !0
                    }), t.displayName = e.displayName, t.propTypes = e.propTypes, t.defaultProps = e.defaultProps, Object.defineProperty(e, q, {
                        configurable: !0,
                        value: t
                    }), t)
                }

                function h() {
                    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
                    return l(e, 2), m(U.c.apply(void 0, e))
                }

                function m(e) {
                    e.preactCompatNormalized = !0, _(e), f(e.nodeName) && (e.nodeName = d(e.nodeName));
                    var t = e.attributes.ref,
                        n = t && typeof t;
                    return !X || "string" !== n && "number" !== n || (e.attributes.ref = y(t, X)), b(e), e
                }

                function v(e, t) {
                    for (var n = [], r = arguments.length - 2; r-- > 0;) n[r] = arguments[r + 2];
                    if (!g(e)) return e;
                    var a = e.attributes || e.props,
                        i = Object(U.c)(e.nodeName || e.type, w({}, a), e.children || a && a.children),
                        o = [i, t];
                    return n && n.length ? o.push(n) : t && t.children && o.push(t.children), m(U.b.apply(void 0, o))
                }

                function g(e) {
                    return e && (e instanceof $ || e.$$typeof === V)
                }

                function y(e, t) {
                    return t._refProxies[e] || (t._refProxies[e] = function (n) {
                        t && t.refs && (t.refs[e] = n, null === n && (delete t._refProxies[e], t = null))
                    })
                }

                function b(e) {
                    var t = e.nodeName,
                        n = e.attributes;
                    if (n && "string" === typeof t) {
                        var r = {};
                        for (var a in n) r[a.toLowerCase()] = a;
                        if (r.ondoubleclick && (n.ondblclick = n[r.ondoubleclick], delete n[r.ondoubleclick]), r.onchange && ("textarea" === t || "input" === t.toLowerCase() && !/^fil|che|rad/i.test(n.type))) {
                            var i = r.oninput || "oninput";
                            n[i] || (n[i] = E([n[i], n[r.onchange]]), delete n[r.onchange])
                        }
                    }
                }

                function _(e) {
                    var t = e.attributes || (e.attributes = {});
                    re.enumerable = "className" in t, t.className && (t.class = t.className), Object.defineProperty(t, "className", re)
                }

                function w(e, t) {
                    for (var n = arguments, r = 1, a = void 0; r < arguments.length; r++)
                        if (a = n[r])
                            for (var i in a) a.hasOwnProperty(i) && (e[i] = a[i]);
                    return e
                }

                function P(e, t) {
                    for (var n in e)
                        if (!(n in t)) return !0;
                    for (var r in t)
                        if (e[r] !== t[r]) return !0;
                    return !1
                }

                function R(e) {
                    return e && e.base || e
                }

                function x() {}

                function S(e) {
                    function t(e, t) {
                        O(this), L.call(this, e, t, z), F.call(this, e, t)
                    }
                    return e = w({
                        constructor: t
                    }, e), e.mixins && j(e, C(e.mixins)), e.statics && w(t, e.statics), e.propTypes && (t.propTypes = e.propTypes), e.defaultProps && (t.defaultProps = e.defaultProps), e.getDefaultProps && (t.defaultProps = e.getDefaultProps.call(t)), x.prototype = L.prototype, t.prototype = w(new x, e), t.displayName = e.displayName || "Component", t
                }

                function C(e) {
                    for (var t = {}, n = 0; n < e.length; n++) {
                        var r = e[n];
                        for (var a in r) r.hasOwnProperty(a) && "function" === typeof r[a] && (t[a] || (t[a] = [])).push(r[a])
                    }
                    return t
                }

                function j(e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = E(t[n].concat(e[n] || Z), "getDefaultProps" === n || "getInitialState" === n || "getChildContext" === n))
                }

                function O(e) {
                    for (var t in e) {
                        var n = e[t];
                        "function" !== typeof n || n.__bound || Q.hasOwnProperty(t) || ((e[t] = n.bind(e)).__bound = !0)
                    }
                }

                function N(e, t, n) {
                    if ("string" === typeof t && (t = e.constructor.prototype[t]), "function" === typeof t) return t.apply(e, n)
                }

                function E(e, t) {
                    return function () {
                        for (var n, r = arguments, a = this, i = 0; i < e.length; i++) {
                            var o = N(a, e[i], r);
                            if (t && null != o) {
                                n || (n = {});
                                for (var s in o) o.hasOwnProperty(s) && (n[s] = o[s])
                            } else "undefined" !== typeof o && (n = o)
                        }
                        return n
                    }
                }

                function F(e, t) {
                    M.call(this, e, t), this.componentWillReceiveProps = E([M, this.componentWillReceiveProps || "componentWillReceiveProps"]), this.render = E([M, k, this.render || "render", T])
                }

                function M(e, t) {
                    if (e) {
                        var n = e.children;
                        if (n && Array.isArray(n) && 1 === n.length && ("string" === typeof n[0] || "function" === typeof n[0] || n[0] instanceof $) && (e.children = n[0], e.children && "object" === typeof e.children && (e.children.length = 1, e.children[0] = e.children)), K) {
                            var r = "function" === typeof this ? this : this.constructor,
                                a = this.propTypes || r.propTypes,
                                i = this.displayName || r.name;
                            a && H.a.checkPropTypes(a, e, "prop", i)
                        }
                    }
                }

                function k(e) {
                    X = this
                }

                function T() {
                    X === this && (X = null)
                }

                function L(e, t, n) {
                    U.a.call(this, e, t), this.state = this.getInitialState ? this.getInitialState() : {}, this.refs = {}, this._refProxies = {}, n !== z && F.call(this, e, t)
                }

                function I(e, t) {
                    L.call(this, e, t)
                }
                n.d(t, "version", function () {
                    return D
                }), n.d(t, "DOM", function () {
                    return te
                }), n.d(t, "Children", function () {
                    return ee
                }), n.d(t, "render", function () {
                    return o
                }), n.d(t, "createClass", function () {
                    return S
                }), n.d(t, "createFactory", function () {
                    return c
                }), n.d(t, "createElement", function () {
                    return h
                }), n.d(t, "cloneElement", function () {
                    return v
                }), n.d(t, "isValidElement", function () {
                    return g
                }), n.d(t, "findDOMNode", function () {
                    return R
                }), n.d(t, "unmountComponentAtNode", function () {
                    return u
                }), n.d(t, "Component", function () {
                    return L
                }), n.d(t, "PureComponent", function () {
                    return I
                }), n.d(t, "unstable_renderSubtreeIntoContainer", function () {
                    return s
                }), n.d(t, "__spread", function () {
                    return w
                });
                var A = n(3),
                    H = n.n(A),
                    U = n(463);
                n.d(t, "PropTypes", function () {
                    return H.a
                });
                var D = "15.1.0",
                    B = "a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan".split(" "),
                    V = "undefined" !== typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
                    q = "undefined" !== typeof Symbol && Symbol.for ? Symbol.for("__preactCompatWrapper") : "__preactCompatWrapper",
                    Q = {
                        constructor: 1,
                        render: 1,
                        shouldComponentUpdate: 1,
                        componentWillReceiveProps: 1,
                        componentWillUpdate: 1,
                        componentDidUpdate: 1,
                        componentWillMount: 1,
                        componentDidMount: 1,
                        componentWillUnmount: 1,
                        componentDidUnmount: 1
                    },
                    W = /^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vector|vert|word|writing|x)[A-Z]/,
                    z = {},
                    K = "undefined" === typeof e || !Object({
                        NODE_ENV: "production"
                    }) || !1,
                    $ = Object(U.c)("a", null).constructor;
                $.prototype.$$typeof = V, $.prototype.preactCompatUpgraded = !1, $.prototype.preactCompatNormalized = !1, Object.defineProperty($.prototype, "type", {
                    get: function () {
                        return this.nodeName
                    },
                    set: function (e) {
                        this.nodeName = e
                    },
                    configurable: !0
                }), Object.defineProperty($.prototype, "props", {
                    get: function () {
                        return this.attributes
                    },
                    set: function (e) {
                        this.attributes = e
                    },
                    configurable: !0
                });
                var J = U.d.event;
                U.d.event = function (e) {
                    return J && (e = J(e)), e.persist = Object, e.nativeEvent = e, e
                };
                var G = U.d.vnode;
                U.d.vnode = function (e) {
                    if (!e.preactCompatUpgraded) {
                        e.preactCompatUpgraded = !0;
                        var t = e.nodeName,
                            n = e.attributes = w({}, e.attributes);
                        "function" === typeof t ? (!0 === t[q] || t.prototype && "isReactComponent" in t.prototype) && (e.children && "" === String(e.children) && (e.children = void 0), e.children && (n.children = e.children), e.preactCompatNormalized || m(e), a(e)) : (e.children && "" === String(e.children) && (e.children = void 0), e.children && (n.children = e.children), n.defaultValue && (n.value || 0 === n.value || (n.value = n.defaultValue), delete n.defaultValue), i(e, n))
                    }
                    G && G(e)
                };
                var Y = function () {};
                Y.prototype.getChildContext = function () {
                    return this.props.context
                }, Y.prototype.render = function (e) {
                    return e.children[0]
                };
                for (var X, Z = [], ee = {
                        map: function (e, t, n) {
                            return null == e ? null : (e = ee.toArray(e), n && n !== e && (t = t.bind(n)), e.map(t))
                        },
                        forEach: function (e, t, n) {
                            if (null == e) return null;
                            e = ee.toArray(e), n && n !== e && (t = t.bind(n)), e.forEach(t)
                        },
                        count: function (e) {
                            return e && e.length || 0
                        },
                        only: function (e) {
                            if (e = ee.toArray(e), 1 !== e.length) throw new Error("Children.only() expects only one child.");
                            return e[0]
                        },
                        toArray: function (e) {
                            return null == e ? [] : Z.concat(e)
                        }
                    }, te = {}, ne = B.length; ne--;) te[B[ne]] = c(B[ne]);
                var re = {
                    configurable: !0,
                    get: function () {
                        return this.class
                    },
                    set: function (e) {
                        this.class = e
                    }
                };
                w(L.prototype = new U.a, {
                    constructor: L,
                    isReactComponent: {},
                    replaceState: function (e, t) {
                        var n = this;
                        this.setState(e, t);
                        for (var r in n.state) r in e || delete n.state[r]
                    },
                    getDOMNode: function () {
                        return this.base
                    },
                    isMounted: function () {
                        return !!this.base
                    }
                }), x.prototype = L.prototype, I.prototype = new x, I.prototype.isPureReactComponent = !0, I.prototype.shouldComponentUpdate = function (e, t) {
                    return P(this.props, e) || P(this.state, t)
                };
                var ae = {
                    version: D,
                    DOM: te,
                    PropTypes: H.a,
                    Children: ee,
                    render: o,
                    createClass: S,
                    createFactory: c,
                    createElement: h,
                    cloneElement: v,
                    isValidElement: g,
                    findDOMNode: R,
                    unmountComponentAtNode: u,
                    Component: L,
                    PureComponent: I,
                    unstable_renderSubtreeIntoContainer: s,
                    __spread: w
                };
                t.default = ae
            }.call(t, n(73))
    }, function (e, t, n) {
        "use strict";

        function r() {}

        function a(e, t) {
            var n, a, i, o, s = L;
            for (o = arguments.length; o-- > 2;) T.push(arguments[o]);
            for (t && null != t.children && (T.length || T.push(t.children), delete t.children); T.length;)
                if ((a = T.pop()) && void 0 !== a.pop)
                    for (o = a.length; o--;) T.push(a[o]);
                else "boolean" === typeof a && (a = null), (i = "function" !== typeof e) && (null == a ? a = "" : "number" === typeof a ? a = String(a) : "string" !== typeof a && (i = !1)), i && n ? s[s.length - 1] += a : s === L ? s = [a] : s.push(a), n = i;
            var u = new r;
            return u.nodeName = e, u.children = s, u.attributes = null == t ? void 0 : t, u.key = null == t ? void 0 : t.key, void 0 !== k.vnode && k.vnode(u), u
        }

        function i(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }

        function o(e, t) {
            return a(e.nodeName, i(i({}, e.attributes), t), arguments.length > 2 ? [].slice.call(arguments, 2) : e.children)
        }

        function s(e) {
            !e._dirty && (e._dirty = !0) && 1 == H.push(e) && (k.debounceRendering || I)(u)
        }

        function u() {
            var e, t = H;
            for (H = []; e = t.pop();) e._dirty && O(e)
        }

        function c(e, t, n) {
            return "string" === typeof t || "number" === typeof t ? void 0 !== e.splitText : "string" === typeof t.nodeName ? !e._componentConstructor && l(e, t.nodeName) : n || e._componentConstructor === t.nodeName
        }

        function l(e, t) {
            return e.normalizedNodeName === t || e.nodeName.toLowerCase() === t.toLowerCase()
        }

        function f(e) {
            var t = i({}, e.attributes);
            t.children = e.children;
            var n = e.nodeName.defaultProps;
            if (void 0 !== n)
                for (var r in n) void 0 === t[r] && (t[r] = n[r]);
            return t
        }

        function p(e, t) {
            var n = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);
            return n.normalizedNodeName = e, n
        }

        function d(e) {
            var t = e.parentNode;
            t && t.removeChild(e)
        }

        function h(e, t, n, r, a) {
            if ("className" === t && (t = "class"), "key" === t);
            else if ("ref" === t) n && n(null), r && r(e);
            else if ("class" !== t || a)
                if ("style" === t) {
                    if (r && "string" !== typeof r && "string" !== typeof n || (e.style.cssText = r || ""), r && "object" === typeof r) {
                        if ("string" !== typeof n)
                            for (var i in n) i in r || (e.style[i] = "");
                        for (var i in r) e.style[i] = "number" === typeof r[i] && !1 === A.test(i) ? r[i] + "px" : r[i]
                    }
                } else if ("dangerouslySetInnerHTML" === t) r && (e.innerHTML = r.__html || "");
            else if ("o" == t[0] && "n" == t[1]) {
                var o = t !== (t = t.replace(/Capture$/, ""));
                t = t.toLowerCase().substring(2), r ? n || e.addEventListener(t, v, o) : e.removeEventListener(t, v, o), (e._listeners || (e._listeners = {}))[t] = r
            } else if ("list" !== t && "type" !== t && !a && t in e) m(e, t, null == r ? "" : r), null != r && !1 !== r || e.removeAttribute(t);
            else {
                var s = a && t !== (t = t.replace(/^xlink\:?/, ""));
                null == r || !1 === r ? s ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" !== typeof r && (s ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), r) : e.setAttribute(t, r))
            } else e.className = r || ""
        }

        function m(e, t, n) {
            try {
                e[t] = n
            } catch (e) {}
        }

        function v(e) {
            return this._listeners[e.type](k.event && k.event(e) || e)
        }

        function g() {
            for (var e; e = U.pop();) k.afterMount && k.afterMount(e), e.componentDidMount && e.componentDidMount()
        }

        function y(e, t, n, r, a, i) {
            D++ || (B = null != a && void 0 !== a.ownerSVGElement, V = null != e && !("__preactattr_" in e));
            var o = b(e, t, n, r, i);
            return a && o.parentNode !== a && a.appendChild(o), --D || (V = !1, i || g()), o
        }

        function b(e, t, n, r, a) {
            var i = e,
                o = B;
            if (null != t && "boolean" !== typeof t || (t = ""), "string" === typeof t || "number" === typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || a) ? e.nodeValue != t && (e.nodeValue = t) : (i = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(i, e), w(e, !0))), i.__preactattr_ = !0, i;
            var s = t.nodeName;
            if ("function" === typeof s) return N(e, t, n, r);
            if (B = "svg" === s || "foreignObject" !== s && B, s = String(s), (!e || !l(e, s)) && (i = p(s, B), e)) {
                for (; e.firstChild;) i.appendChild(e.firstChild);
                e.parentNode && e.parentNode.replaceChild(i, e), w(e, !0)
            }
            var u = i.firstChild,
                c = i.__preactattr_,
                f = t.children;
            if (null == c) {
                c = i.__preactattr_ = {};
                for (var d = i.attributes, h = d.length; h--;) c[d[h].name] = d[h].value
            }
            return !V && f && 1 === f.length && "string" === typeof f[0] && null != u && void 0 !== u.splitText && null == u.nextSibling ? u.nodeValue != f[0] && (u.nodeValue = f[0]) : (f && f.length || null != u) && _(i, f, n, r, V || null != c.dangerouslySetInnerHTML), R(i, t.attributes, c), B = o, i
        }

        function _(e, t, n, r, a) {
            var i, o, s, u, l, f = e.childNodes,
                p = [],
                h = {},
                m = 0,
                v = 0,
                g = f.length,
                y = 0,
                _ = t ? t.length : 0;
            if (0 !== g)
                for (var P = 0; P < g; P++) {
                    var R = f[P],
                        x = R.__preactattr_,
                        S = _ && x ? R._component ? R._component.__key : x.key : null;
                    null != S ? (m++, h[S] = R) : (x || (void 0 !== R.splitText ? !a || R.nodeValue.trim() : a)) && (p[y++] = R)
                }
            if (0 !== _)
                for (var P = 0; P < _; P++) {
                    u = t[P], l = null;
                    var S = u.key;
                    if (null != S) m && void 0 !== h[S] && (l = h[S], h[S] = void 0, m--);
                    else if (!l && v < y)
                        for (i = v; i < y; i++)
                            if (void 0 !== p[i] && c(o = p[i], u, a)) {
                                l = o, p[i] = void 0, i === y - 1 && y--, i === v && v++;
                                break
                            } l = b(l, u, n, r), s = f[P], l && l !== e && l !== s && (null == s ? e.appendChild(l) : l === s.nextSibling ? d(s) : e.insertBefore(l, s))
                }
            if (m)
                for (var P in h) void 0 !== h[P] && w(h[P], !1);
            for (; v <= y;) void 0 !== (l = p[y--]) && w(l, !1)
        }

        function w(e, t) {
            var n = e._component;
            n ? E(n) : (null != e.__preactattr_ && e.__preactattr_.ref && e.__preactattr_.ref(null), !1 !== t && null != e.__preactattr_ || d(e), P(e))
        }

        function P(e) {
            for (e = e.lastChild; e;) {
                var t = e.previousSibling;
                w(e, !0), e = t
            }
        }

        function R(e, t, n) {
            var r;
            for (r in n) t && null != t[r] || null == n[r] || h(e, r, n[r], n[r] = void 0, B);
            for (r in t) "children" === r || "innerHTML" === r || r in n && t[r] === ("value" === r || "checked" === r ? e[r] : n[r]) || h(e, r, n[r], n[r] = t[r], B)
        }

        function x(e) {
            var t = e.constructor.name;
            (q[t] || (q[t] = [])).push(e)
        }

        function S(e, t, n) {
            var r, a = q[e.name];
            if (e.prototype && e.prototype.render ? (r = new e(t, n), F.call(r, t, n)) : (r = new F(t, n), r.constructor = e, r.render = C), a)
                for (var i = a.length; i--;)
                    if (a[i].constructor === e) {
                        r.nextBase = a[i].nextBase, a.splice(i, 1);
                        break
                    } return r
        }

        function C(e, t, n) {
            return this.constructor(e, n)
        }

        function j(e, t, n, r, a) {
            e._disable || (e._disable = !0, (e.__ref = t.ref) && delete t.ref, (e.__key = t.key) && delete t.key, !e.base || a ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, r), r && r !== e.context && (e.prevContext || (e.prevContext = e.context), e.context = r), e.prevProps || (e.prevProps = e.props), e.props = t, e._disable = !1, 0 !== n && (1 !== n && !1 === k.syncComponentUpdates && e.base ? s(e) : O(e, 1, a)), e.__ref && e.__ref(e))
        }

        function O(e, t, n, r) {
            if (!e._disable) {
                var a, o, s, u = e.props,
                    c = e.state,
                    l = e.context,
                    p = e.prevProps || u,
                    d = e.prevState || c,
                    h = e.prevContext || l,
                    m = e.base,
                    v = e.nextBase,
                    b = m || v,
                    _ = e._component,
                    P = !1;
                if (m && (e.props = p, e.state = d, e.context = h, 2 !== t && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(u, c, l) ? P = !0 : e.componentWillUpdate && e.componentWillUpdate(u, c, l), e.props = u, e.state = c, e.context = l), e.prevProps = e.prevState = e.prevContext = e.nextBase = null, e._dirty = !1, !P) {
                    a = e.render(u, c, l), e.getChildContext && (l = i(i({}, l), e.getChildContext()));
                    var R, x, C = a && a.nodeName;
                    if ("function" === typeof C) {
                        var N = f(a);
                        o = _, o && o.constructor === C && N.key == o.__key ? j(o, N, 1, l, !1) : (R = o, e._component = o = S(C, N, l), o.nextBase = o.nextBase || v, o._parentComponent = e, j(o, N, 0, l, !1), O(o, 1, n, !0)), x = o.base
                    } else s = b, R = _, R && (s = e._component = null), (b || 1 === t) && (s && (s._component = null), x = y(s, a, l, n || !m, b && b.parentNode, !0));
                    if (b && x !== b && o !== _) {
                        var F = b.parentNode;
                        F && x !== F && (F.replaceChild(x, b), R || (b._component = null, w(b, !1)))
                    }
                    if (R && E(R), e.base = x, x && !r) {
                        for (var M = e, T = e; T = T._parentComponent;)(M = T).base = x;
                        x._component = M, x._componentConstructor = M.constructor
                    }
                }
                if (!m || n ? U.unshift(e) : P || (e.componentDidUpdate && e.componentDidUpdate(p, d, h), k.afterUpdate && k.afterUpdate(e)), null != e._renderCallbacks)
                    for (; e._renderCallbacks.length;) e._renderCallbacks.pop().call(e);
                D || r || g()
            }
        }

        function N(e, t, n, r) {
            for (var a = e && e._component, i = a, o = e, s = a && e._componentConstructor === t.nodeName, u = s, c = f(t); a && !u && (a = a._parentComponent);) u = a.constructor === t.nodeName;
            return a && u && (!r || a._component) ? (j(a, c, 3, n, r), e = a.base) : (i && !s && (E(i), e = o = null), a = S(t.nodeName, c, n), e && !a.nextBase && (a.nextBase = e, o = null), j(a, c, 1, n, r), e = a.base, o && e !== o && (o._component = null, w(o, !1))), e
        }

        function E(e) {
            k.beforeUnmount && k.beforeUnmount(e);
            var t = e.base;
            e._disable = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;
            var n = e._component;
            n ? E(n) : t && (t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null), e.nextBase = t, d(t), x(e), P(t)), e.__ref && e.__ref(null)
        }

        function F(e, t) {
            this._dirty = !0, this.context = t, this.props = e, this.state = this.state || {}
        }

        function M(e, t, n) {
            return y(n, e, {}, !1, t, !1)
        }
        n.d(t, "c", function () {
            return a
        }), n.d(t, "b", function () {
            return o
        }), n.d(t, "a", function () {
            return F
        }), n.d(t, "e", function () {
            return M
        }), n.d(t, "d", function () {
            return k
        });
        var k = {},
            T = [],
            L = [],
            I = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout,
            A = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
            H = [],
            U = [],
            D = 0,
            B = !1,
            V = !1,
            q = {};
        i(F.prototype, {
            setState: function (e, t) {
                var n = this.state;
                this.prevState || (this.prevState = i({}, n)), i(n, "function" === typeof e ? e(n, this.props) : e), t && (this._renderCallbacks = this._renderCallbacks || []).push(t), s(this)
            },
            forceUpdate: function (e) {
                e && (this._renderCallbacks = this._renderCallbacks || []).push(e), O(this, 2)
            },
            render: function () {}
        })
    }, function (e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.KEYS = {
            DOWN: 40,
            END: 35,
            ESC: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            RIGHT: 39,
            UP: 38
        }, t.PERCENT_EMPTY = 0, t.PERCENT_FULL = 100
    }, function (e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            getPosition: function () {
                function e(e, t, n) {
                    return (e - t) / (n - t) * 100
                }
                return e
            }(),
            getValue: function () {
                function e(e, t, n) {
                    var r = e / 100;
                    return 0 === e ? t : 100 === e ? n : Math.round((n - t) * r + t)
                }
                return e
            }()
        }
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            i = n(1),
            o = r(i),
            s = n(3),
            u = (r(s), n(2)),
            c = r(u),
            l = function (e) {
                var t = e.style,
                    n = e.children,
                    r = Math.round(parseFloat(t.left)),
                    i = [0, 50, 100].includes(r),
                    s = Array.isArray(n) ? n[0] : n,
                    u = Math.round(100 * parseFloat(s)) / 100;
                return o.default.createElement("div", {
                    style: a({}, t, {
                        marginLeft: 100 === r ? "-2px" : 0
                    }),
                    className: (0, c.default)("ais-range-slider--marker ais-range-slider--marker-horizontal", {
                        "ais-range-slider--marker-large": i
                    })
                }, i ? o.default.createElement("div", {
                    className: "ais-range-slider--value"
                }, u) : null)
            };
        t.default = l
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.container,
                n = e.indices,
                r = e.cssClasses,
                a = void 0 === r ? {} : r,
                o = e.autoHideContainer,
                s = void 0 !== o && o,
                c = e.transformItems;
            if (!t) throw new Error(v);
            var l = (0, d.getContainerNode)(t),
                f = {
                    root: (0, u.default)(h(null), a.root),
                    select: (0, u.default)(h(null), a.select),
                    item: (0, u.default)(h("item"), a.item)
                },
                g = m({
                    containerNode: l,
                    cssClasses: f,
                    autoHideContainer: s
                });
            try {
                return (0, p.default)(g, function () {
                    return (0, i.unmountComponentAtNode)(l)
                })({
                    indices: n,
                    transformItems: c
                })
            } catch (e) {
                throw new Error(v)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = a;
        var i = n(1),
            o = r(i),
            s = n(2),
            u = r(s),
            c = n(112),
            l = r(c),
            f = n(202),
            p = r(f),
            d = n(0),
            h = (0, d.bemHelper)("ais-sort-by-selector"),
            m = function (e) {
                var t = e.containerNode,
                    n = e.cssClasses,
                    r = e.autoHideContainer;
                return function (e, a) {
                    var s = e.currentRefinement,
                        u = e.options,
                        c = e.refine,
                        f = e.hasNoResults;
                    if (!a) {
                        var p = r && f;
                        (0, i.render)(o.default.createElement(l.default, {
                            cssClasses: n,
                            currentValue: s,
                            options: u,
                            setValue: c,
                            shouldAutoHideContainer: p
                        }), t)
                    }
                }
            },
            v = "Usage:\nsortBySelector({\n  container,\n  indices,\n  [cssClasses.{root,select,item}={}],\n  [autoHideContainer=false],\n  [transformItems]\n})"
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.container,
                n = e.attributeName,
                r = e.max,
                a = void 0 === r ? 5 : r,
                i = e.cssClasses,
                s = void 0 === i ? {} : i,
                u = e.labels,
                l = void 0 === u ? g.default : u,
                f = e.templates,
                p = void 0 === f ? m.default : f,
                h = e.collapsible,
                v = void 0 !== h && h,
                P = e.transformData,
                R = e.autoHideContainer,
                x = void 0 === R || R;
            if (!t) throw new Error(w);
            var S = (0, y.getContainerNode)(t),
                C = {
                    root: (0, c.default)(b(null), s.root),
                    header: (0, c.default)(b("header"), s.header),
                    body: (0, c.default)(b("body"), s.body),
                    footer: (0, c.default)(b("footer"), s.footer),
                    list: (0, c.default)(b("list"), s.list),
                    item: (0, c.default)(b("item"), s.item),
                    link: (0, c.default)(b("link"), s.link),
                    disabledLink: (0, c.default)(b("link", "disabled"), s.disabledLink),
                    count: (0, c.default)(b("count"), s.count),
                    star: (0, c.default)(b("star"), s.star),
                    emptyStar: (0, c.default)(b("star", "empty"), s.emptyStar),
                    active: (0, c.default)(b("item", "active"), s.active)
                },
                j = _({
                    containerNode: S,
                    cssClasses: C,
                    collapsible: v,
                    autoHideContainer: x,
                    renderState: {},
                    templates: p,
                    transformData: P,
                    labels: l
                });
            try {
                return (0, d.default)(j, function () {
                    return (0, o.unmountComponentAtNode)(S)
                })({
                    attributeName: n,
                    max: a
                })
            } catch (e) {
                throw new Error(w)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
        t.default = a;
        var o = n(1),
            s = r(o),
            u = n(2),
            c = r(u),
            l = n(37),
            f = r(l),
            p = n(203),
            d = r(p),
            h = n(469),
            m = r(h),
            v = n(470),
            g = r(v),
            y = n(0),
            b = (0, y.bemHelper)("ais-star-rating"),
            _ = function (e) {
                var t = e.containerNode,
                    n = e.cssClasses,
                    r = e.templates,
                    a = e.collapsible,
                    u = e.transformData,
                    c = e.autoHideContainer,
                    l = e.renderState,
                    p = e.labels;
                return function (e, d) {
                    var h = e.refine,
                        v = e.items,
                        g = e.createURL,
                        b = e.instantSearchInstance,
                        _ = e.hasNoResults;
                    if (d) return void(l.templateProps = (0, y.prepareTemplateProps)({
                        transformData: u,
                        defaultTemplates: m.default,
                        templatesConfig: b.templatesConfig,
                        templates: r
                    }));
                    var w = c && _;
                    (0, o.render)(s.default.createElement(f.default, {
                        collapsible: a,
                        createURL: g,
                        cssClasses: n,
                        facetValues: v.map(function (e) {
                            return i({}, e, {
                                labels: p
                            })
                        }),
                        shouldAutoHideContainer: w,
                        templateProps: l.templateProps,
                        toggleRefinement: h
                    }), t)
                }
            },
            w = "Usage:\nstarRating({\n  container,\n  attributeName,\n  [ max=5 ],\n  [ cssClasses.{root,header,body,footer,list,item,active,link,disabledLink,star,emptyStar,count} ],\n  [ templates.{header,item,footer} ],\n  [ transformData.{item} ],\n  [ labels.{andUp} ],\n  [ autoHideContainer=true ],\n  [ collapsible=false ]\n})"
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            header: "",
            item: '<a class="{{cssClasses.link}}{{^count}} {{cssClasses.disabledLink}}{{/count}}" {{#count}}href="{{href}}"{{/count}}>\n  {{#stars}}<span class="{{#.}}{{cssClasses.star}}{{/.}}{{^.}}{{cssClasses.emptyStar}}{{/.}}"></span>{{/stars}}\n  {{labels.andUp}}\n  {{#count}}<span class="{{cssClasses.count}}">{{#helpers.formatNumber}}{{count}}{{/helpers.formatNumber}}</span>{{/count}}\n</a>',
            footer: ""
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            andUp: "& Up"
        }
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.container,
                n = e.cssClasses,
                r = void 0 === n ? {} : n,
                a = e.autoHideContainer,
                o = void 0 === a || a,
                s = e.collapsible,
                c = void 0 !== s && s,
                l = e.transformData,
                f = e.templates,
                d = void 0 === f ? h.default : f;
            if (!t) throw new Error(y);
            var b = (0, m.getContainerNode)(t),
                _ = {
                    body: (0, u.default)(v("body"), r.body),
                    footer: (0, u.default)(v("footer"), r.footer),
                    header: (0, u.default)(v("header"), r.header),
                    root: (0, u.default)(v(null), r.root),
                    time: (0, u.default)(v("time"), r.time)
                },
                w = g({
                    containerNode: b,
                    cssClasses: _,
                    collapsible: c,
                    autoHideContainer: o,
                    renderState: {},
                    templates: d,
                    transformData: l
                });
            try {
                return (0, p.default)(w, function () {
                    return (0, i.unmountComponentAtNode)(b)
                })()
            } catch (e) {
                throw new Error(y)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = a;
        var i = n(1),
            o = r(i),
            s = n(2),
            u = r(s),
            c = n(472),
            l = r(c),
            f = n(204),
            p = r(f),
            d = n(473),
            h = r(d),
            m = n(0),
            v = (0, m.bemHelper)("ais-stats"),
            g = function (e) {
                var t = e.containerNode,
                    n = e.cssClasses,
                    r = e.collapsible,
                    a = e.autoHideContainer,
                    s = e.renderState,
                    u = e.templates,
                    c = e.transformData;
                return function (e, f) {
                    var p = e.hitsPerPage,
                        d = e.nbHits,
                        v = e.nbPages,
                        g = e.page,
                        y = e.processingTimeMS,
                        b = e.query,
                        _ = e.instantSearchInstance;
                    if (f) return void(s.templateProps = (0, m.prepareTemplateProps)({
                        transformData: c,
                        defaultTemplates: h.default,
                        templatesConfig: _.templatesConfig,
                        templates: u
                    }));
                    var w = a && 0 === d;
                    (0, i.render)(o.default.createElement(l.default, {
                        collapsible: r,
                        cssClasses: n,
                        hitsPerPage: p,
                        nbHits: d,
                        nbPages: v,
                        page: g,
                        processingTimeMS: y,
                        query: b,
                        shouldAutoHideContainer: w,
                        templateProps: s.templateProps
                    }), t)
                }
            },
            y = "Usage:\nstats({\n  container,\n  [ templates.{header, body, footer} ],\n  [ transformData.{body} ],\n  [ autoHideContainer=true ],\n  [ cssClasses.{root, header, body, footer, time} ],\n})"
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function o(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.RawStats = void 0;
        var s = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            u = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            c = n(3),
            l = (r(c), n(1)),
            f = r(l),
            p = n(12),
            d = r(p),
            h = n(13),
            m = r(h),
            v = n(20),
            g = r(v),
            y = t.RawStats = function (e) {
                function t() {
                    return a(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return o(t, e), u(t, [{
                    key: "render",
                    value: function () {
                        var e = {
                            hasManyResults: this.props.nbHits > 1,
                            hasNoResults: 0 === this.props.nbHits,
                            hasOneResult: 1 === this.props.nbHits,
                            hitsPerPage: this.props.hitsPerPage,
                            nbHits: this.props.nbHits,
                            nbPages: this.props.nbPages,
                            page: this.props.page,
                            processingTimeMS: this.props.processingTimeMS,
                            query: this.props.query,
                            cssClasses: this.props.cssClasses
                        };
                        return f.default.createElement(d.default, s({
                            data: e,
                            templateKey: "body"
                        }, this.props.templateProps))
                    }
                }]), t
            }(l.Component);
        t.default = (0, m.default)((0, g.default)(y))
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            header: "",
            body: '{{#hasNoResults}}No results{{/hasNoResults}}\n  {{#hasOneResult}}1 result{{/hasOneResult}}\n  {{#hasManyResults}}{{#helpers.formatNumber}}{{nbHits}}{{/helpers.formatNumber}} results{{/hasManyResults}}\n  <span class="{{cssClasses.time}}">found in {{processingTimeMS}}ms</span>',
            footer: ""
        }
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.container,
                n = e.attributeName,
                r = e.label,
                a = e.cssClasses,
                o = void 0 === a ? {} : a,
                s = e.templates,
                c = void 0 === s ? l.default : s,
                f = e.transformData,
                p = e.autoHideContainer,
                d = void 0 === p || p,
                b = e.collapsible,
                _ = void 0 !== b && b,
                w = e.values,
                P = void 0 === w ? {
                    on: !0,
                    off: void 0
                } : w;
            if (!t) throw new Error(y);
            var R = (0, m.getContainerNode)(t),
                x = {
                    root: (0, u.default)(v(null), o.root),
                    header: (0, u.default)(v("header"), o.header),
                    body: (0, u.default)(v("body"), o.body),
                    footer: (0, u.default)(v("footer"), o.footer),
                    list: (0, u.default)(v("list"), o.list),
                    item: (0, u.default)(v("item"), o.item),
                    active: (0, u.default)(v("item", "active"), o.active),
                    label: (0, u.default)(v("label"), o.label),
                    checkbox: (0, u.default)(v("checkbox"), o.checkbox),
                    count: (0, u.default)(v("count"), o.count)
                },
                S = g({
                    containerNode: R,
                    cssClasses: x,
                    collapsible: _,
                    autoHideContainer: d,
                    renderState: {},
                    templates: c,
                    transformData: f
                });
            try {
                return (0, h.default)(S, function () {
                    return (0, i.unmountComponentAtNode)(R)
                })({
                    attributeName: n,
                    label: r,
                    values: P
                })
            } catch (e) {
                throw new Error(y)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = a;
        var i = n(1),
            o = r(i),
            s = n(2),
            u = r(s),
            c = n(475),
            l = r(c),
            f = n(37),
            p = r(f),
            d = n(205),
            h = r(d),
            m = n(0),
            v = (0, m.bemHelper)("ais-toggle"),
            g = function (e) {
                var t = e.containerNode,
                    n = e.cssClasses,
                    r = e.collapsible,
                    a = e.autoHideContainer,
                    s = e.renderState,
                    u = e.templates,
                    c = e.transformData;
                return function (e, f) {
                    var d = e.value,
                        h = e.createURL,
                        v = e.refine,
                        g = e.instantSearchInstance;
                    if (f) return void(s.templateProps = (0, m.prepareTemplateProps)({
                        transformData: c,
                        defaultTemplates: l.default,
                        templatesConfig: g.templatesConfig,
                        templates: u
                    }));
                    var y = a && (0 === d.count || null === d.count);
                    (0, i.render)(o.default.createElement(p.default, {
                        collapsible: r,
                        createURL: h,
                        cssClasses: n,
                        facetValues: [d],
                        shouldAutoHideContainer: y,
                        templateProps: s.templateProps,
                        toggleRefinement: function (e, t) {
                            return v({
                                isRefined: t
                            })
                        }
                    }), t)
                }
            },
            y = "Usage:\ntoggle({\n  container,\n  attributeName,\n  label,\n  [ values={on: true, off: undefined} ],\n  [ cssClasses.{root,header,body,footer,list,item,active,label,checkbox,count} ],\n  [ templates.{header,item,footer} ],\n  [ transformData.{item} ],\n  [ autoHideContainer=true ],\n  [ collapsible=false ]\n})"
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            header: "",
            item: '<label class="{{cssClasses.label}}">\n  <input type="checkbox" class="{{cssClasses.checkbox}}" value="{{name}}" {{#isRefined}}checked{{/isRefined}} />{{name}}\n  <span class="{{cssClasses.count}}">{{#helpers.formatNumber}}{{count}}{{/helpers.formatNumber}}</span>\n</label>',
            footer: ""
        }
    }, function (e, t, n) {
        "use strict";

        function r() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.pushFunction,
                n = e.delay,
                r = void 0 === n ? 3e3 : n,
                o = e.triggerOnUIInteraction,
                s = void 0 !== o && o,
                u = e.pushInitialSearch,
                c = void 0 === u || u,
                l = e.pushPagination,
                f = void 0 !== l && l;
            if (!t) throw new Error(i);
            var p = null,
                d = function (e) {
                    var t = [];
                    for (var n in e)
                        if (e.hasOwnProperty(n)) {
                            var r = e[n].join("+");
                            t.push(encodeURIComponent(n) + "=" + encodeURIComponent(n) + "_" + encodeURIComponent(r))
                        } return t.join("&")
                },
                h = function (e) {
                    var t = [];
                    for (var n in e)
                        if (e.hasOwnProperty(n)) {
                            var r = e[n];
                            if (r.hasOwnProperty(">=") && r.hasOwnProperty("<=")) r[">="][0] === r["<="][0] ? t.push(n + "=" + n + "_" + r[">="]) : t.push(n + "=" + n + "_" + r[">="] + "to" + r["<="]);
                            else if (r.hasOwnProperty(">=")) t.push(n + "=" + n + "_from" + r[">="]);
                            else if (r.hasOwnProperty("<=")) t.push(n + "=" + n + "_to" + r["<="]);
                            else if (r.hasOwnProperty("=")) {
                                var a = [];
                                for (var i in r["="]) r["="].hasOwnProperty(i) && a.push(r["="][i]);
                                t.push(n + "=" + n + "_" + a.join("-"))
                            }
                        } return t.join("&")
                },
                m = "",
                v = function (e) {
                    if (null !== e) {
                        var n = [],
                            r = d(a({}, e.state.disjunctiveFacetsRefinements, e.state.facetsRefinements, e.state.hierarchicalFacetsRefinements)),
                            i = h(e.state.numericRefinements);
                        "" !== r && n.push(r), "" !== i && n.push(i), n = n.join("&");
                        var o = "Query: " + e.state.query + ", " + n;
                        !0 === f && (o += ", Page: " + e.state.page), m !== o && (t(n, e.state, e.results), m = o)
                    }
                },
                g = void 0,
                y = !0;
            return !0 === c && (y = !1), {
                init: function () {
                    !0 === s && (document.addEventListener("click", function () {
                        v(p)
                    }), window.addEventListener("beforeunload", function () {
                        v(p)
                    }))
                },
                render: function (e) {
                    var t = e.results,
                        n = e.state;
                    if (!0 === y) return void(y = !1);
                    p = {
                        results: t,
                        state: n
                    }, g && clearTimeout(g), g = setTimeout(function () {
                        return v(p)
                    }, r)
                }
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            i = "Usage:\nanalytics({\n  pushFunction,\n  [ delay=3000 ],\n  [ triggerOnUIInteraction=false ],\n  [ pushInitialSearch=true ]\n})";
        t.default = r
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.attributes,
                n = e.autoHideContainer,
                r = void 0 !== n && n,
                a = e.container,
                o = e.cssClasses,
                s = void 0 === o ? {} : o,
                c = e.rootPath,
                l = void 0 === c ? null : c,
                f = e.separator,
                d = void 0 === f ? " > " : f,
                b = e.templates,
                _ = void 0 === b ? h.default : b,
                w = e.transformData,
                P = e.transformItems;
            if (!a) throw new Error(y);
            var R = (0, m.getContainerNode)(a),
                x = {
                    disabledLabel: (0, u.default)(v("disabledLabel"), s.disabledLabel),
                    home: (0, u.default)(v("home"), s.home),
                    item: (0, u.default)(v("item"), s.item),
                    label: (0, u.default)(v("label"), s.label),
                    root: (0, u.default)(v("root"), s.root),
                    separator: (0, u.default)(v("separator"), s.separator)
                },
                S = g({
                    autoHideContainer: r,
                    containerNode: R,
                    cssClasses: x,
                    renderState: {},
                    separator: d,
                    templates: _,
                    transformData: w
                });
            try {
                return (0, p.default)(S, function () {
                    return (0, i.unmountComponentAtNode)(R)
                })({
                    attributes: t,
                    rootPath: l,
                    transformItems: P
                })
            } catch (e) {
                throw new Error(y)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = a;
        var i = n(1),
            o = r(i),
            s = n(2),
            u = r(s),
            c = n(478),
            l = r(c),
            f = n(206),
            p = r(f),
            d = n(479),
            h = r(d),
            m = n(0),
            v = (0, m.bemHelper)("ais-breadcrumb"),
            g = function (e) {
                var t = e.autoHideContainer,
                    n = e.containerNode,
                    r = e.cssClasses,
                    a = e.renderState,
                    s = e.separator,
                    u = e.templates,
                    c = e.transformData;
                return function (e, f) {
                    var p = e.canRefine,
                        d = e.createURL,
                        v = e.instantSearchInstance,
                        g = e.items,
                        y = e.refine;
                    if (f) return void(a.templateProps = (0, m.prepareTemplateProps)({
                        defaultTemplates: h.default,
                        templatesConfig: v.templatesConfig,
                        templates: u,
                        transformData: c
                    }));
                    var b = t && !p;
                    (0, i.render)(o.default.createElement(l.default, {
                        canRefine: p,
                        cssClasses: r,
                        createURL: d,
                        items: g,
                        refine: y,
                        separator: s,
                        shouldAutoHideContainer: b,
                        templateProps: a.templateProps
                    }), n)
                }
            },
            y = "Usage:\nbreadcrumb({\n  container,\n  attributes,\n  [ autoHideContainer=true ],\n  [ cssClasses.{disabledLabel, home, label, root, separator}={} ],\n  [ templates.{home, separator}]\n  [ transformData.{item} ],\n  [ transformItems ],\n})"
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function o(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            u = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            c = n(1),
            l = r(c),
            f = n(3),
            p = r(f),
            d = n(12),
            h = r(d),
            m = n(13),
            v = r(m),
            g = (p.default.arrayOf(p.default.shape({
                name: p.default.string,
                value: p.default.string
            })), function (e) {
                function t() {
                    return a(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return o(t, e), u(t, [{
                    key: "render",
                    value: function () {
                        var e = this,
                            t = this.props,
                            n = t.createURL,
                            r = t.items,
                            a = t.refine,
                            i = t.cssClasses,
                            o = r.map(function (t, o) {
                                var u = o === r.length - 1,
                                    c = u ? l.default.createElement("a", {
                                        className: i.disabledLabel + " " + i.label
                                    }, t.name) : l.default.createElement("a", {
                                        className: i.label,
                                        href: n(t.value),
                                        onClick: function (e) {
                                            e.preventDefault(), a(t.value)
                                        }
                                    }, t.name);
                                return [l.default.createElement(h.default, s({
                                    key: t.name + o,
                                    rootProps: {
                                        className: i.separator
                                    },
                                    templateKey: "separator"
                                }, e.props.templateProps)), c]
                            }),
                            u = r.length > 0 ? [i.home, i.label] : [i.disabledLabel, i.home, i.label],
                            c = function (e) {
                                e.preventDefault(), a(null)
                            },
                            f = n(null);
                        return l.default.createElement("div", {
                            className: i.root
                        }, l.default.createElement("a", {
                            className: u.join(" "),
                            href: f,
                            onClick: c
                        }, l.default.createElement(h.default, s({
                            templateKey: "home"
                        }, this.props.templateProps))), o)
                    }
                }]), t
            }(c.PureComponent));
        t.default = (0, v.default)(g)
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            home: "Home",
            separator: ""
        }
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e) {
            var t = e.container,
                n = e.attributeName,
                r = e.sortBy,
                a = void 0 === r ? ["name:asc"] : r,
                i = e.limit,
                o = void 0 === i ? 10 : i,
                s = e.cssClasses,
                c = void 0 === s ? {} : s,
                f = e.templates,
                d = void 0 === f ? p.default : f,
                h = e.transformData,
                b = e.autoHideContainer,
                _ = void 0 === b || b,
                w = e.transformItems;
            if (!t || !n) throw new Error(y);
            var P = (0, m.getContainerNode)(t),
                R = {
                    root: (0, u.default)(v(null), c.root),
                    header: (0, u.default)(v("header"), c.header),
                    footer: (0, u.default)(v("footer"), c.footer),
                    select: (0, u.default)(v("select"), c.select),
                    option: (0, u.default)(v("option"), c.option)
                },
                x = g({
                    containerNode: P,
                    cssClasses: R,
                    autoHideContainer: _,
                    renderState: {},
                    templates: d,
                    transformData: h
                });
            try {
                return (0, l.default)(x)({
                    attributeName: n,
                    limit: o,
                    sortBy: a,
                    transformItems: w
                })
            } catch (e) {
                throw new Error(y)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = a;
        var i = n(1),
            o = r(i),
            s = n(2),
            u = r(s),
            c = n(110),
            l = r(c),
            f = n(481),
            p = r(f),
            d = n(482),
            h = r(d),
            m = n(0),
            v = (0, m.bemHelper)("ais-menu-select"),
            g = function (e) {
                var t = e.containerNode,
                    n = e.cssClasses,
                    r = e.autoHideContainer,
                    a = e.renderState,
                    s = e.templates,
                    u = e.transformData;
                return function (e, c) {
                    var l = e.refine,
                        f = e.items,
                        d = e.canRefine,
                        v = e.instantSearchInstance;
                    if (c) return void(a.templateProps = (0, m.prepareTemplateProps)({
                        transformData: u,
                        defaultTemplates: p.default,
                        templatesConfig: v.templatesConfig,
                        templates: s
                    }));
                    var g = r && !d;
                    (0, i.render)(o.default.createElement(h.default, {
                        cssClasses: n,
                        items: f,
                        refine: l,
                        templateProps: a.templateProps,
                        shouldAutoHideContainer: g,
                        canRefine: d
                    }), t)
                }
            },
            y = "Usage:\nmenuSelect({\n  container,\n  attributeName,\n  [ sortBy=['name:asc'] ],\n  [ limit=10 ],\n  [ cssClasses.{root,select,option,header,footer} ]\n  [ templates.{header,item,footer,seeAllOption} ],\n  [ transformData.{item} ],\n  [ autoHideContainer ]\n  [ transformItems ]\n})"
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            header: "",
            item: "{{label}} ({{#helpers.formatNumber}}{{count}}{{/helpers.formatNumber}})",
            footer: "",
            seeAllOption: "See all"
        }
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function o(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            u = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            c = n(1),
            l = r(c),
            f = n(3),
            p = (r(f), n(12)),
            d = r(p),
            h = n(13),
            m = r(h),
            v = n(20),
            g = r(v),
            y = function (e) {
                function t() {
                    var e, n, r, o;
                    a(this, t);
                    for (var s = arguments.length, u = Array(s), c = 0; c < s; c++) u[c] = arguments[c];
                    return n = r = i(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(u))), r.handleSelectChange = function (e) {
                        var t = e.target.value;
                        r.props.refine(t)
                    }, o = n, i(r, o)
                }
                return o(t, e), u(t, [{
                    key: "render",
                    value: function () {
                        var e = this.props,
                            t = e.cssClasses,
                            n = e.templateProps,
                            r = e.items,
                            a = r.find(function (e) {
                                return e.isRefined
                            }) || {
                                value: ""
                            },
                            i = a.value;
                        return l.default.createElement("select", {
                            className: t.select,
                            value: i,
                            onChange: this.handleSelectChange
                        }, l.default.createElement("option", {
                            value: "",
                            className: t.option
                        }, l.default.createElement(d.default, s({
                            templateKey: "seeAllOption"
                        }, n))), r.map(function (e) {
                            return l.default.createElement("option", {
                                key: e.value,
                                value: e.value,
                                className: t.option
                            }, l.default.createElement(d.default, s({
                                data: e,
                                templateKey: "item"
                            }, n)))
                        }))
                    }
                }]), t
            }(c.Component);
        t.default = (0, m.default)((0, g.default)(y))
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n(186);
        Object.defineProperty(t, "history", {
            enumerable: !0,
            get: function () {
                return r(a).default
            }
        })
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n(185);
        Object.defineProperty(t, "simple", {
            enumerable: !0,
            get: function () {
                return r(a).default
            }
        })
    }])
});
//# sourceMappingURL=/dist/instantsearch.min.js.map