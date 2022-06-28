// this is the file at https://unpkg.com/htm@3.1.0/preact/standalone.module.js saved here as backup
var e,
    n,
    _,
    t,
    o,
    r,
    u,
    l = {},
    i = [],
    c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i

function s(e, n) {
    for (var _ in n) e[_] = n[_]
    return e
}

function f(e) {
    var n = e.parentNode
    n && n.removeChild(e)
}

function a(n, _, t) {
    var o,
        r,
        u,
        l = {}
    for (u in _)
        'key' == u ? (o = _[u]) : 'ref' == u ? (r = _[u]) : (l[u] = _[u])
    if (
        (arguments.length > 2 &&
            (l.children = arguments.length > 3 ? e.call(arguments, 2) : t),
        'function' == typeof n && null != n.defaultProps)
    )
        for (u in n.defaultProps) void 0 === l[u] && (l[u] = n.defaultProps[u])
    return p(n, l, o, r, null)
}

function p(e, t, o, r, u) {
    var l = {
        type: e,
        props: t,
        key: o,
        ref: r,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: null == u ? ++_ : u,
    }
    return null != n.vnode && n.vnode(l), l
}

function h(e) {
    return e.children
}

function d(e, n) {
    ;(this.props = e), (this.context = n)
}

function v(e, n) {
    if (null == n) return e.__ ? v(e.__, e.__.__k.indexOf(e) + 1) : null
    for (var _; n < e.__k.length; n++)
        if (null != (_ = e.__k[n]) && null != _.__e) return _.__e
    return 'function' == typeof e.type ? v(e) : null
}

function y(e) {
    var n, _
    if (null != (e = e.__) && null != e.__c) {
        for (e.__e = e.__c.base = null, n = 0; n < e.__k.length; n++)
            if (null != (_ = e.__k[n]) && null != _.__e) {
                e.__e = e.__c.base = _.__e
                break
            }
        return y(e)
    }
}

function m(e) {
    ;((!e.__d && (e.__d = !0) && t.push(e) && !g.__r++) ||
        r !== n.debounceRendering) &&
        ((r = n.debounceRendering) || o)(g)
}

function g() {
    for (var e; (g.__r = t.length); )
        (e = t.sort(function (e, n) {
            return e.__v.__b - n.__v.__b
        })),
            (t = []),
            e.some(function (e) {
                var n, _, t, o, r, u
                e.__d &&
                    ((r = (o = (n = e).__v).__e),
                    (u = n.__P) &&
                        ((_ = []),
                        ((t = s({}, o)).__v = o.__v + 1),
                        P(
                            u,
                            o,
                            t,
                            n.__n,
                            void 0 !== u.ownerSVGElement,
                            null != o.__h ? [r] : null,
                            _,
                            null == r ? v(o) : r,
                            o.__h
                        ),
                        D(_, o),
                        o.__e != r && y(o)))
            })
}

function k(e, n, _, t, o, r, u, c, s, f) {
    var a,
        d,
        y,
        m,
        g,
        k,
        x,
        H = (t && t.__k) || i,
        E = H.length
    for (_.__k = [], a = 0; a < n.length; a++)
        if (
            null !=
            (m = _.__k[a] =
                null == (m = n[a]) || 'boolean' == typeof m
                    ? null
                    : 'string' == typeof m ||
                      'number' == typeof m ||
                      'bigint' == typeof m
                    ? p(null, m, null, null, m)
                    : Array.isArray(m)
                    ? p(h, { children: m }, null, null, null)
                    : m.__b > 0
                    ? p(m.type, m.props, m.key, null, m.__v)
                    : m)
        ) {
            if (
                ((m.__ = _),
                (m.__b = _.__b + 1),
                null === (y = H[a]) ||
                    (y && m.key == y.key && m.type === y.type))
            )
                H[a] = void 0
            else
                for (d = 0; d < E; d++) {
                    if ((y = H[d]) && m.key == y.key && m.type === y.type) {
                        H[d] = void 0
                        break
                    }
                    y = null
                }
            P(e, m, (y = y || l), o, r, u, c, s, f),
                (g = m.__e),
                (d = m.ref) &&
                    y.ref != d &&
                    (x || (x = []),
                    y.ref && x.push(y.ref, null, m),
                    x.push(d, m.__c || g, m)),
                null != g
                    ? (null == k && (k = g),
                      'function' == typeof m.type &&
                      null != m.__k &&
                      m.__k === y.__k
                          ? (m.__d = s = b(m, s, e))
                          : (s = C(e, m, y, H, g, s)),
                      f || 'option' !== _.type
                          ? 'function' == typeof _.type && (_.__d = s)
                          : (e.value = ''))
                    : s && y.__e == s && s.parentNode != e && (s = v(y))
        }
    for (_.__e = k, a = E; a--; )
        null != H[a] &&
            ('function' == typeof _.type &&
                null != H[a].__e &&
                H[a].__e == _.__d &&
                (_.__d = v(t, a + 1)),
            U(H[a], H[a]))
    if (x) for (a = 0; a < x.length; a++) T(x[a], x[++a], x[++a])
}

function b(e, n, _) {
    var t, o
    for (t = 0; t < e.__k.length; t++)
        (o = e.__k[t]) &&
            ((o.__ = e),
            (n =
                'function' == typeof o.type
                    ? b(o, n, _)
                    : C(_, o, o, e.__k, o.__e, n)))
    return n
}

function C(e, n, _, t, o, r) {
    var u, l, i
    if (void 0 !== n.__d) (u = n.__d), (n.__d = void 0)
    else if (null == _ || o != r || null == o.parentNode)
        e: if (null == r || r.parentNode !== e) e.appendChild(o), (u = null)
        else {
            for (l = r, i = 0; (l = l.nextSibling) && i < t.length; i += 2)
                if (l == o) break e
            e.insertBefore(o, r), (u = r)
        }
    return void 0 !== u ? u : o.nextSibling
}

function x(e, n, _) {
    '-' === n[0]
        ? e.setProperty(n, _)
        : (e[n] =
              null == _ ? '' : 'number' != typeof _ || c.test(n) ? _ : _ + 'px')
}

function H(e, n, _, t, o) {
    var r
    e: if ('style' === n)
        if ('string' == typeof _) e.style.cssText = _
        else {
            if (('string' == typeof t && (e.style.cssText = t = ''), t))
                for (n in t) (_ && n in _) || x(e.style, n, '')
            if (_) for (n in _) (t && _[n] === t[n]) || x(e.style, n, _[n])
        }
    else if ('o' === n[0] && 'n' === n[1])
        (r = n !== (n = n.replace(/Capture$/, ''))),
            (n = n.toLowerCase() in e ? n.toLowerCase().slice(2) : n.slice(2)),
            e.l || (e.l = {}),
            (e.l[n + r] = _),
            _
                ? t || e.addEventListener(n, r ? S : E, r)
                : e.removeEventListener(n, r ? S : E, r)
    else if ('dangerouslySetInnerHTML' !== n) {
        if (o) n = n.replace(/xlink[H:h]/, 'h').replace(/sName$/, 's')
        else if (
            'href' !== n &&
            'list' !== n &&
            'form' !== n &&
            'tabIndex' !== n &&
            'download' !== n &&
            n in e
        )
            try {
                e[n] = null == _ ? '' : _
                break e
            } catch (e) {}
        'function' == typeof _ ||
            (null != _ && (!1 !== _ || ('a' === n[0] && 'r' === n[1]))
                ? e.setAttribute(n, _)
                : e.removeAttribute(n))
    }
}

function E(e) {
    this.l[e.type + !1](n.event ? n.event(e) : e)
}

function S(e) {
    this.l[e.type + !0](n.event ? n.event(e) : e)
}

function P(e, _, t, o, r, u, l, i, c) {
    var f,
        a,
        p,
        v,
        y,
        m,
        g,
        b,
        C,
        x,
        H,
        E = _.type
    if (void 0 !== _.constructor) return null
    null != t.__h &&
        ((c = t.__h), (i = _.__e = t.__e), (_.__h = null), (u = [i])),
        (f = n.__b) && f(_)
    try {
        e: if ('function' == typeof E) {
            if (
                ((b = _.props),
                (C = (f = E.contextType) && o[f.__c]),
                (x = f ? (C ? C.props.value : f.__) : o),
                t.__c
                    ? (g = (a = _.__c = t.__c).__ = a.__E)
                    : ('prototype' in E && E.prototype.render
                          ? (_.__c = a = new E(b, x))
                          : ((_.__c = a = new d(b, x)),
                            (a.constructor = E),
                            (a.render = A)),
                      C && C.sub(a),
                      (a.props = b),
                      a.state || (a.state = {}),
                      (a.context = x),
                      (a.__n = o),
                      (p = a.__d = !0),
                      (a.__h = [])),
                null == a.__s && (a.__s = a.state),
                null != E.getDerivedStateFromProps &&
                    (a.__s == a.state && (a.__s = s({}, a.__s)),
                    s(a.__s, E.getDerivedStateFromProps(b, a.__s))),
                (v = a.props),
                (y = a.state),
                p)
            )
                null == E.getDerivedStateFromProps &&
                    null != a.componentWillMount &&
                    a.componentWillMount(),
                    null != a.componentDidMount &&
                        a.__h.push(a.componentDidMount)
            else {
                if (
                    (null == E.getDerivedStateFromProps &&
                        b !== v &&
                        null != a.componentWillReceiveProps &&
                        a.componentWillReceiveProps(b, x),
                    (!a.__e &&
                        null != a.shouldComponentUpdate &&
                        !1 === a.shouldComponentUpdate(b, a.__s, x)) ||
                        _.__v === t.__v)
                ) {
                    ;(a.props = b),
                        (a.state = a.__s),
                        _.__v !== t.__v && (a.__d = !1),
                        (a.__v = _),
                        (_.__e = t.__e),
                        (_.__k = t.__k),
                        _.__k.forEach(function (e) {
                            e && (e.__ = _)
                        }),
                        a.__h.length && l.push(a)
                    break e
                }
                null != a.componentWillUpdate &&
                    a.componentWillUpdate(b, a.__s, x),
                    null != a.componentDidUpdate &&
                        a.__h.push(function () {
                            a.componentDidUpdate(v, y, m)
                        })
            }
            ;(a.context = x),
                (a.props = b),
                (a.state = a.__s),
                (f = n.__r) && f(_),
                (a.__d = !1),
                (a.__v = _),
                (a.__P = e),
                (f = a.render(a.props, a.state, a.context)),
                (a.state = a.__s),
                null != a.getChildContext &&
                    (o = s(s({}, o), a.getChildContext())),
                p ||
                    null == a.getSnapshotBeforeUpdate ||
                    (m = a.getSnapshotBeforeUpdate(v, y)),
                (H =
                    null != f && f.type === h && null == f.key
                        ? f.props.children
                        : f),
                k(e, Array.isArray(H) ? H : [H], _, t, o, r, u, l, i, c),
                (a.base = _.__e),
                (_.__h = null),
                a.__h.length && l.push(a),
                g && (a.__E = a.__ = null),
                (a.__e = !1)
        } else
            null == u && _.__v === t.__v
                ? ((_.__k = t.__k), (_.__e = t.__e))
                : (_.__e = w(t.__e, _, t, o, r, u, l, c))
        ;(f = n.diffed) && f(_)
    } catch (e) {
        ;(_.__v = null),
            (c || null != u) &&
                ((_.__e = i), (_.__h = !!c), (u[u.indexOf(i)] = null)),
            n.__e(e, _, t)
    }
}

function D(e, _) {
    n.__c && n.__c(_, e),
        e.some(function (_) {
            try {
                ;(e = _.__h),
                    (_.__h = []),
                    e.some(function (e) {
                        e.call(_)
                    })
            } catch (e) {
                n.__e(e, _.__v)
            }
        })
}

function w(n, _, t, o, r, u, i, c) {
    var s,
        a,
        p,
        h = t.props,
        d = _.props,
        y = _.type,
        m = 0
    if (('svg' === y && (r = !0), null != u))
        for (; m < u.length; m++)
            if (
                (s = u[m]) &&
                (s === n || (y ? s.localName == y : 3 == s.nodeType))
            ) {
                ;(n = s), (u[m] = null)
                break
            }
    if (null == n) {
        if (null === y) return document.createTextNode(d)
        ;(n = r
            ? document.createElementNS('http://www.w3.org/2000/svg', y)
            : document.createElement(y, d.is && d)),
            (u = null),
            (c = !1)
    }
    if (null === y) h === d || (c && n.data === d) || (n.data = d)
    else {
        if (
            ((u = u && e.call(n.childNodes)),
            (a = (h = t.props || l).dangerouslySetInnerHTML),
            (p = d.dangerouslySetInnerHTML),
            !c)
        ) {
            if (null != u)
                for (h = {}, m = 0; m < n.attributes.length; m++)
                    h[n.attributes[m].name] = n.attributes[m].value
            ;(p || a) &&
                ((p &&
                    ((a && p.__html == a.__html) ||
                        p.__html === n.innerHTML)) ||
                    (n.innerHTML = (p && p.__html) || ''))
        }
        if (
            ((function (e, n, _, t, o) {
                var r
                for (r in _)
                    'children' === r ||
                        'key' === r ||
                        r in n ||
                        H(e, r, null, _[r], t)
                for (r in n)
                    (o && 'function' != typeof n[r]) ||
                        'children' === r ||
                        'key' === r ||
                        'value' === r ||
                        'checked' === r ||
                        _[r] === n[r] ||
                        H(e, r, n[r], _[r], t)
            })(n, d, h, r, c),
            p)
        )
            _.__k = []
        else if (
            ((m = _.props.children),
            k(
                n,
                Array.isArray(m) ? m : [m],
                _,
                t,
                o,
                r && 'foreignObject' !== y,
                u,
                i,
                u ? u[0] : t.__k && v(t, 0),
                c
            ),
            null != u)
        )
            for (m = u.length; m--; ) null != u[m] && f(u[m])
        c ||
            ('value' in d &&
                void 0 !== (m = d.value) &&
                (m !== n.value || ('progress' === y && !m)) &&
                H(n, 'value', m, h.value, !1),
            'checked' in d &&
                void 0 !== (m = d.checked) &&
                m !== n.checked &&
                H(n, 'checked', m, h.checked, !1))
    }
    return n
}

function T(e, _, t) {
    try {
        'function' == typeof e ? e(_) : (e.current = _)
    } catch (e) {
        n.__e(e, t)
    }
}

function U(e, _, t) {
    var o, r
    if (
        (n.unmount && n.unmount(e),
        (o = e.ref) && ((o.current && o.current !== e.__e) || T(o, null, _)),
        null != (o = e.__c))
    ) {
        if (o.componentWillUnmount)
            try {
                o.componentWillUnmount()
            } catch (e) {
                n.__e(e, _)
            }
        o.base = o.__P = null
    }
    if ((o = e.__k))
        for (r = 0; r < o.length; r++)
            o[r] && U(o[r], _, 'function' != typeof e.type)
    t || null == e.__e || f(e.__e), (e.__e = e.__d = void 0)
}

function A(e, n, _) {
    return this.constructor(e, _)
}

function M(_, t, o) {
    var r, u, i
    n.__ && n.__(_, t),
        (u = (r = 'function' == typeof o) ? null : (o && o.__k) || t.__k),
        (i = []),
        P(
            t,
            (_ = ((!r && o) || t).__k = a(h, null, [_])),
            u || l,
            l,
            void 0 !== t.ownerSVGElement,
            !r && o
                ? [o]
                : u
                ? null
                : t.firstChild
                ? e.call(t.childNodes)
                : null,
            i,
            !r && o ? o : u ? u.__e : t.firstChild,
            r
        ),
        D(i, _)
}

function F(e, n) {
    var _ = {
        __c: (n = '__cC' + u++),
        __: e,
        Consumer: function (e, n) {
            return e.children(n)
        },
        Provider: function (e) {
            var _, t
            return (
                this.getChildContext ||
                    ((_ = []),
                    ((t = {})[n] = this),
                    (this.getChildContext = function () {
                        return t
                    }),
                    (this.shouldComponentUpdate = function (e) {
                        this.props.value !== e.value && _.some(m)
                    }),
                    (this.sub = function (e) {
                        _.push(e)
                        var n = e.componentWillUnmount
                        e.componentWillUnmount = function () {
                            _.splice(_.indexOf(e), 1), n && n.call(e)
                        }
                    })),
                e.children
            )
        },
    }
    return (_.Provider.__ = _.Consumer.contextType = _)
}

;(e = i.slice),
    (n = {
        __e: function (e, n) {
            for (var _, t, o; (n = n.__); )
                if ((_ = n.__c) && !_.__)
                    try {
                        if (
                            ((t = _.constructor) &&
                                null != t.getDerivedStateFromError &&
                                (_.setState(t.getDerivedStateFromError(e)),
                                (o = _.__d)),
                            null != _.componentDidCatch &&
                                (_.componentDidCatch(e), (o = _.__d)),
                            o)
                        )
                            return (_.__E = _)
                    } catch (n) {
                        e = n
                    }
            throw e
        },
    }),
    (_ = 0),
    (d.prototype.setState = function (e, n) {
        var _
        ;(_ =
            null != this.__s && this.__s !== this.state
                ? this.__s
                : (this.__s = s({}, this.state))),
            'function' == typeof e && (e = e(s({}, _), this.props)),
            e && s(_, e),
            null != e && this.__v && (n && this.__h.push(n), m(this))
    }),
    (d.prototype.forceUpdate = function (e) {
        this.__v && ((this.__e = !0), e && this.__h.push(e), m(this))
    }),
    (d.prototype.render = h),
    (t = []),
    (o =
        'function' == typeof Promise
            ? Promise.prototype.then.bind(Promise.resolve())
            : setTimeout),
    (g.__r = 0),
    (u = 0)
var L,
    N,
    W,
    R = 0,
    I = [],
    O = n.__b,
    V = n.__r,
    q = n.diffed,
    B = n.__c,
    $ = n.unmount

function j(e, _) {
    n.__h && n.__h(N, e, R || _), (R = 0)
    var t = N.__H || (N.__H = { __: [], __h: [] })
    return e >= t.__.length && t.__.push({}), t.__[e]
}

function G(e) {
    return (R = 1), z(ie, e)
}

function z(e, n, _) {
    var t = j(L++, 2)
    return (
        (t.t = e),
        t.__c ||
            ((t.__ = [
                _ ? _(n) : ie(void 0, n),
                function (e) {
                    var n = t.t(t.__[0], e)
                    t.__[0] !== n && ((t.__ = [n, t.__[1]]), t.__c.setState({}))
                },
            ]),
            (t.__c = N)),
        t.__
    )
}

function J(e, _) {
    var t = j(L++, 3)
    !n.__s && le(t.__H, _) && ((t.__ = e), (t.__H = _), N.__H.__h.push(t))
}

function K(e, _) {
    var t = j(L++, 4)
    !n.__s && le(t.__H, _) && ((t.__ = e), (t.__H = _), N.__h.push(t))
}

function Q(e) {
    return (
        (R = 5),
        Y(function () {
            return { current: e }
        }, [])
    )
}

function X(e, n, _) {
    ;(R = 6),
        K(
            function () {
                'function' == typeof e ? e(n()) : e && (e.current = n())
            },
            null == _ ? _ : _.concat(e)
        )
}

function Y(e, n) {
    var _ = j(L++, 7)
    return le(_.__H, n) && ((_.__ = e()), (_.__H = n), (_.__h = e)), _.__
}

function Z(e, n) {
    return (
        (R = 8),
        Y(function () {
            return e
        }, n)
    )
}

function ee(e) {
    var n = N.context[e.__c],
        _ = j(L++, 9)
    return (
        (_.c = e),
        n ? (null == _.__ && ((_.__ = !0), n.sub(N)), n.props.value) : e.__
    )
}

function ne(e, _) {
    n.useDebugValue && n.useDebugValue(_ ? _(e) : e)
}

function _e(e) {
    var n = j(L++, 10),
        _ = G()
    return (
        (n.__ = e),
        N.componentDidCatch ||
            (N.componentDidCatch = function (e) {
                n.__ && n.__(e), _[1](e)
            }),
        [
            _[0],
            function () {
                _[1](void 0)
            },
        ]
    )
}

function te() {
    I.forEach(function (e) {
        if (e.__P)
            try {
                e.__H.__h.forEach(re), e.__H.__h.forEach(ue), (e.__H.__h = [])
            } catch (_) {
                ;(e.__H.__h = []), n.__e(_, e.__v)
            }
    }),
        (I = [])
}

;(n.__b = function (e) {
    ;(N = null), O && O(e)
}),
    (n.__r = function (e) {
        V && V(e), (L = 0)
        var n = (N = e.__c).__H
        n && (n.__h.forEach(re), n.__h.forEach(ue), (n.__h = []))
    }),
    (n.diffed = function (e) {
        q && q(e)
        var _ = e.__c
        _ &&
            _.__H &&
            _.__H.__h.length &&
            ((1 !== I.push(_) && W === n.requestAnimationFrame) ||
                (
                    (W = n.requestAnimationFrame) ||
                    function (e) {
                        var n,
                            _ = function () {
                                clearTimeout(t),
                                    oe && cancelAnimationFrame(n),
                                    setTimeout(e)
                            },
                            t = setTimeout(_, 100)
                        oe && (n = requestAnimationFrame(_))
                    }
                )(te)),
            (N = void 0)
    }),
    (n.__c = function (e, _) {
        _.some(function (e) {
            try {
                e.__h.forEach(re),
                    (e.__h = e.__h.filter(function (e) {
                        return !e.__ || ue(e)
                    }))
            } catch (t) {
                _.some(function (e) {
                    e.__h && (e.__h = [])
                }),
                    (_ = []),
                    n.__e(t, e.__v)
            }
        }),
            B && B(e, _)
    }),
    (n.unmount = function (e) {
        $ && $(e)
        var _ = e.__c
        if (_ && _.__H)
            try {
                _.__H.__.forEach(re)
            } catch (e) {
                n.__e(e, _.__v)
            }
    })
var oe = 'function' == typeof requestAnimationFrame

function re(e) {
    var n = N
    'function' == typeof e.__c && e.__c(), (N = n)
}

function ue(e) {
    var n = N
    ;(e.__c = e.__()), (N = n)
}

function le(e, n) {
    return (
        !e ||
        e.length !== n.length ||
        n.some(function (n, _) {
            return n !== e[_]
        })
    )
}

function ie(e, n) {
    return 'function' == typeof n ? n(e) : n
}

var ce = function (e, n, _, t) {
        var o
        n[0] = 0
        for (var r = 1; r < n.length; r++) {
            var u = n[r++],
                l = n[r] ? ((n[0] |= u ? 1 : 2), _[n[r++]]) : n[++r]
            3 === u
                ? (t[0] = l)
                : 4 === u
                ? (t[1] = Object.assign(t[1] || {}, l))
                : 5 === u
                ? ((t[1] = t[1] || {})[n[++r]] = l)
                : 6 === u
                ? (t[1][n[++r]] += l + '')
                : u
                ? ((o = e.apply(l, ce(e, l, _, ['', null]))),
                  t.push(o),
                  l[0] ? (n[0] |= 2) : ((n[r - 2] = 0), (n[r] = o)))
                : t.push(l)
        }
        return t
    },
    se = new Map(),
    fe = function (e) {
        var n = se.get(this)
        return (
            n || ((n = new Map()), se.set(this, n)),
            (n = ce(
                this,
                n.get(e) ||
                    (n.set(
                        e,
                        (n = (function (e) {
                            for (
                                var n,
                                    _,
                                    t = 1,
                                    o = '',
                                    r = '',
                                    u = [0],
                                    l = function (e) {
                                        1 === t &&
                                        (e ||
                                            (o = o.replace(
                                                /^\s*\n\s*|\s*\n\s*$/g,
                                                ''
                                            )))
                                            ? u.push(0, e, o)
                                            : 3 === t && (e || o)
                                            ? (u.push(3, e, o), (t = 2))
                                            : 2 === t && '...' === o && e
                                            ? u.push(4, e, 0)
                                            : 2 === t && o && !e
                                            ? u.push(5, 0, !0, o)
                                            : t >= 5 &&
                                              ((o || (!e && 5 === t)) &&
                                                  (u.push(t, 0, o, _), (t = 6)),
                                              e &&
                                                  (u.push(t, e, 0, _),
                                                  (t = 6))),
                                            (o = '')
                                    },
                                    i = 0;
                                i < e.length;
                                i++
                            ) {
                                i && (1 === t && l(), l(i))
                                for (var c = 0; c < e[i].length; c++)
                                    (n = e[i][c]),
                                        1 === t
                                            ? '<' === n
                                                ? (l(), (u = [u]), (t = 3))
                                                : (o += n)
                                            : 4 === t
                                            ? '--' === o && '>' === n
                                                ? ((t = 1), (o = ''))
                                                : (o = n + o[0])
                                            : r
                                            ? n === r
                                                ? (r = '')
                                                : (o += n)
                                            : '"' === n || "'" === n
                                            ? (r = n)
                                            : '>' === n
                                            ? (l(), (t = 1))
                                            : t &&
                                              ('=' === n
                                                  ? ((t = 5), (_ = o), (o = ''))
                                                  : '/' === n &&
                                                    (t < 5 ||
                                                        '>' === e[i][c + 1])
                                                  ? (l(),
                                                    3 === t && (u = u[0]),
                                                    (t = u),
                                                    (u = u[0]).push(2, 0, t),
                                                    (t = 0))
                                                  : ' ' === n ||
                                                    '\t' === n ||
                                                    '\n' === n ||
                                                    '\r' === n
                                                  ? (l(), (t = 2))
                                                  : (o += n)),
                                        3 === t &&
                                            '!--' === o &&
                                            ((t = 4), (u = u[0]))
                            }
                            return l(), u
                        })(e))
                    ),
                    n),
                arguments,
                []
            )).length > 1
                ? n
                : n[0]
        )
    }.bind(a)
export {
    a as h,
    fe as html,
    M as render,
    d as Component,
    F as createContext,
    G as useState,
    z as useReducer,
    J as useEffect,
    K as useLayoutEffect,
    Q as useRef,
    X as useImperativeHandle,
    Y as useMemo,
    Z as useCallback,
    ee as useContext,
    ne as useDebugValue,
    _e as useErrorBoundary,
}
