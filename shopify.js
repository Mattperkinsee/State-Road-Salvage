! function() {
    function t(t, e) {
        return e = {
            exports: {}
        }, t(e, e.exports), e.exports
    }

    function e(t, e) {
        for (var n = -1, i = null == t ? 0 : t.length, r = Array(i); ++n < i;) r[n] = e(t[n], n, t);
        return r
    }

    function n() {
        this.__data__ = [], this.size = 0
    }

    function i(t, e) {
        return t === e || t !== t && e !== e
    }

    function r(t, e) {
        for (var n = t.length; n--;)
            if (i(t[n][0], e)) return n;
        return -1
    }

    function o(t) {
        var e = this.__data__,
            n = r(e, t);
        return !(n < 0) && (n == e.length - 1 ? e.pop() : An.call(e, n, 1), --this.size, !0)
    }

    function s(t) {
        var e = this.__data__,
            n = r(e, t);
        return n < 0 ? void 0 : e[n][1]
    }

    function a(t) {
        return r(this.__data__, t) > -1
    }

    function c(t, e) {
        var n = this.__data__,
            i = r(n, t);
        return i < 0 ? (++this.size, n.push([t, e])) : n[i][1] = e, this
    }

    function u(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            var i = t[e];
            this.set(i[0], i[1])
        }
    }

    function l() {
        this.__data__ = new u, this.size = 0
    }

    function d(t) {
        var e = this.__data__,
            n = e.delete(t);
        return this.size = e.size, n
    }

    function h(t) {
        return this.__data__.get(t)
    }

    function f(t) {
        return this.__data__.has(t)
    }

    function p(t) {
        var e = In.call(t, Bn),
            n = t[Bn];
        try {
            t[Bn] = void 0;
            var i = !0
        } catch (t) {}
        var r = Fn.call(t);
        return i && (e ? t[Bn] = n : delete t[Bn]), r
    }

    function m(t) {
        return Hn.call(t)
    }

    function g(t) {
        return null == t ? void 0 === t ? qn : Mn : (t = Object(t), Rn && Rn in t ? p(t) : m(t))
    }

    function v(t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e)
    }

    function y(t) {
        if (!v(t)) return !1;
        var e = g(t);
        return e == zn || e == Vn || e == Wn || e == Un
    }

    function b(t) {
        return !!Yn && Yn in t
    }

    function _(t) {
        if (null != t) {
            try {
                return Gn.call(t)
            } catch (t) {}
            try {
                return t + ""
            } catch (t) {}
        }
        return ""
    }

    function w(t) {
        return !(!v(t) || b(t)) && (y(t) ? ii : Jn).test(_(t))
    }

    function S(t, e) {
        return null == t ? void 0 : t[e]
    }

    function x(t, e) {
        var n = S(t, e);
        return w(n) ? n : void 0
    }

    function C() {
        this.__data__ = oi ? oi(null) : {}, this.size = 0
    }

    function T(t) {
        var e = this.has(t) && delete this.__data__[t];
        return this.size -= e ? 1 : 0, e
    }

    function k(t) {
        var e = this.__data__;
        if (oi) {
            var n = e[t];
            return n === si ? void 0 : n
        }
        return ci.call(e, t) ? e[t] : void 0
    }

    function E(t) {
        var e = this.__data__;
        return oi ? void 0 !== e[t] : li.call(e, t)
    }

    function A(t, e) {
        var n = this.__data__;
        return this.size += this.has(t) ? 0 : 1, n[t] = oi && void 0 === e ? di : e, this
    }

    function j(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            var i = t[e];
            this.set(i[0], i[1])
        }
    }

    function P() {
        this.size = 0, this.__data__ = {
            hash: new j,
            map: new(ri || u),
            string: new j
        }
    }

    function D(t) {
        var e = typeof t;
        return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
    }

    function N(t, e) {
        var n = t.__data__;
        return D(e) ? n["string" == typeof e ? "string" : "hash"] : n.map
    }

    function O(t) {
        var e = N(this, t).delete(t);
        return this.size -= e ? 1 : 0, e
    }

    function I(t) {
        return N(this, t).get(t)
    }

    function F(t) {
        return N(this, t).has(t)
    }

    function B(t, e) {
        var n = N(this, t),
            i = n.size;
        return n.set(t, e), this.size += n.size == i ? 0 : 1, this
    }

    function L(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            var i = t[e];
            this.set(i[0], i[1])
        }
    }

    function H(t, e) {
        var n = this.__data__;
        if (n instanceof u) {
            var i = n.__data__;
            if (!ri || i.length < hi - 1) return i.push([t, e]), this.size = ++n.size, this;
            n = this.__data__ = new L(i)
        }
        return n.set(t, e), this.size = n.size, this
    }

    function M(t) {
        var e = this.__data__ = new u(t);
        this.size = e.size
    }

    function q(t, e) {
        for (var n = -1, i = null == t ? 0 : t.length; ++n < i && !1 !== e(t[n], n, t););
        return t
    }

    function R(t, e, n) {
        "__proto__" == e && fi ? fi(t, e, {
            configurable: !0,
            enumerable: !0,
            value: n,
            writable: !0
        }) : t[e] = n
    }

    function W(t, e, n) {
        var r = t[e];
        mi.call(t, e) && i(r, n) && (void 0 !== n || e in t) || R(t, e, n)
    }

    function z(t, e, n, i) {
        var r = !n;
        n || (n = {});
        for (var o = -1, s = e.length; ++o < s;) {
            var a = e[o],
                c = i ? i(n[a], t[a], a, n, t) : void 0;
            void 0 === c && (c = t[a]), r ? R(n, a, c) : W(n, a, c)
        }
        return n
    }

    function V(t, e) {
        for (var n = -1, i = Array(t); ++n < t;) i[n] = e(n);
        return i
    }

    function U(t) {
        return null != t && "object" == typeof t
    }

    function X(t) {
        return U(t) && g(t) == gi
    }

    function Y() {
        return !1
    }

    function Q(t, e) {
        return !!(e = null == e ? Ei : e) && ("number" == typeof t || Ai.test(t)) && t > -1 && t % 1 == 0 && t < e
    }

    function G(t) {
        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= ji
    }

    function K(t) {
        return U(t) && G(t.length) && !!Pi[g(t)]
    }

    function J(t, e) {
        var n = wi(t),
            i = !n && _i(t),
            r = !n && !i && $i(t),
            o = !n && !i && !r && Li(t),
            s = n || i || r || o,
            a = s ? V(t.length, String) : [],
            c = a.length;
        for (var u in t) !e && !Mi.call(t, u) || s && ("length" == u || r && ("offset" == u || "parent" == u) || o && ("buffer" == u || "byteLength" == u || "byteOffset" == u) || Q(u, c)) || a.push(u);
        return a
    }

    function Z(t) {
        var e = t && t.constructor;
        return t === ("function" == typeof e && e.prototype || qi)
    }

    function tt(t, e) {
        return function(n) {
            return t(e(n))
        }
    }

    function et(t) {
        if (!Z(t)) return Ri(t);
        var e = [];
        for (var n in Object(t)) zi.call(t, n) && "constructor" != n && e.push(n);
        return e
    }

    function nt(t) {
        return null != t && G(t.length) && !y(t)
    }

    function it(t) {
        return nt(t) ? J(t) : et(t)
    }

    function rt(t, e) {
        return t && z(e, it(e), t)
    }

    function ot(t) {
        var e = [];
        if (null != t)
            for (var n in Object(t)) e.push(n);
        return e
    }

    function st(t) {
        if (!v(t)) return ot(t);
        var e = Z(t),
            n = [];
        for (var i in t)("constructor" != i || !e && Ui.call(t, i)) && n.push(i);
        return n
    }

    function at(t) {
        return nt(t) ? J(t, !0) : st(t)
    }

    function ct(t, e) {
        return t && z(e, at(e), t)
    }

    function ut(t, e) {
        if (e) return t.slice();
        var n = t.length,
            i = Ki ? Ki(n) : new t.constructor(n);
        return t.copy(i), i
    }

    function lt(t, e) {
        var n = -1,
            i = t.length;
        for (e || (e = Array(i)); ++n < i;) e[n] = t[n];
        return e
    }

    function dt() {
        return []
    }

    function ht(t, e) {
        return z(t, Zi(t), e)
    }

    function ft(t, e) {
        for (var n = -1, i = e.length, r = t.length; ++n < i;) t[r + n] = e[n];
        return t
    }

    function pt(t, e) {
        return z(t, nr(t), e)
    }

    function mt(t, e, n) {
        var i = e(t);
        return wi(t) ? i : ft(i, n(t))
    }

    function gt(t) {
        return mt(t, it, Zi)
    }

    function vt(t) {
        return mt(t, at, nr)
    }

    function yt(t) {
        var e = t.length,
            n = t.constructor(e);
        return e && "string" == typeof t[0] && mr.call(t, "index") && (n.index = t.index, n.input = t.input), n
    }

    function bt(t) {
        var e = new t.constructor(t.byteLength);
        return new gr(e).set(new gr(t)), e
    }

    function _t(t, e) {
        var n = e ? bt(t.buffer) : t.buffer;
        return new t.constructor(n, t.byteOffset, t.byteLength)
    }

    function wt(t, e) {
        return t.set(e[0], e[1]), t
    }

    function St(t, e, n, i) {
        var r = -1,
            o = null == t ? 0 : t.length;
        for (i && o && (n = t[++r]); ++r < o;) n = e(n, t[r], r, t);
        return n
    }

    function xt(t) {
        var e = -1,
            n = Array(t.size);
        return t.forEach(function(t, i) {
            n[++e] = [i, t]
        }), n
    }

    function Ct(t, e, n) {
        return St(e ? n(xt(t), vr) : xt(t), wt, new t.constructor)
    }

    function Tt(t) {
        var e = new t.constructor(t.source, yr.exec(t));
        return e.lastIndex = t.lastIndex, e
    }

    function kt(t, e) {
        return t.add(e), t
    }

    function $t(t) {
        var e = -1,
            n = Array(t.size);
        return t.forEach(function(t) {
            n[++e] = t
        }), n
    }

    function Et(t, e, n) {
        return St(e ? n($t(t), br) : $t(t), kt, new t.constructor)
    }

    function At(t) {
        return wr ? Object(wr.call(t)) : {}
    }

    function jt(t, e) {
        var n = e ? bt(t.buffer) : t.buffer;
        return new t.constructor(n, t.byteOffset, t.length)
    }

    function Pt(t, e, n, i) {
        var r = t.constructor;
        switch (e) {
            case jr:
                return bt(t);
            case Sr:
            case xr:
                return new r(+t);
            case Pr:
                return _t(t, i);
            case Dr:
            case Nr:
            case Or:
            case Ir:
            case Fr:
            case Br:
            case Lr:
            case Hr:
            case Mr:
                return jt(t, i);
            case Cr:
                return Ct(t, i, n);
            case Tr:
            case Er:
                return new r(t);
            case kr:
                return Tt(t);
            case $r:
                return Et(t, i, n);
            case Ar:
                return At(t)
        }
    }

    function Dt(t) {
        return "function" != typeof t.constructor || Z(t) ? {} : Rr(tr(t))
    }

    function Nt(t, e, n, i, r, o) {
        var s, a = e & Wr,
            c = e & zr,
            u = e & Vr;
        if (n && (s = r ? n(t, i, r, o) : n(t)), void 0 !== s) return s;
        if (!v(t)) return t;
        var l = wi(t);
        if (l) {
            if (s = yt(t), !a) return lt(t, s)
        } else {
            var d = fr(t),
                h = d == Xr || d == Yr;
            if ($i(t)) return ut(t, a);
            if (d == Qr || d == Ur || h && !r) {
                if (s = c || h ? {} : Dt(t), !a) return c ? pt(t, ct(s, t)) : ht(t, rt(s, t))
            } else {
                if (!Gr[d]) return r ? t : {};
                s = Pt(t, d, Nt, a)
            }
        }
        o || (o = new M);
        var f = o.get(t);
        if (f) return f;
        o.set(t, s);
        var p = u ? c ? vt : gt : c ? keysIn : it,
            m = l ? void 0 : p(t);
        return q(m || t, function(i, r) {
            m && (r = i, i = t[r]), W(s, r, Nt(i, e, n, r, t, o))
        }), s
    }

    function Ot(t) {
        return "symbol" == typeof t || U(t) && g(t) == Kr
    }

    function It(t, e) {
        if (wi(t)) return !1;
        var n = typeof t;
        return !("number" != n && "symbol" != n && "boolean" != n && null != t && !Ot(t)) || (Zr.test(t) || !Jr.test(t) || null != e && t in Object(e))
    }

    function Ft(t, e) {
        if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError(to);
        var n = function() {
            var i = arguments,
                r = e ? e.apply(this, i) : i[0],
                o = n.cache;
            if (o.has(r)) return o.get(r);
            var s = t.apply(this, i);
            return n.cache = o.set(r, s) || o, s
        };
        return n.cache = new(Ft.Cache || L), n
    }

    function Bt(t) {
        if ("string" == typeof t) return t;
        if (wi(t)) return e(t, Bt) + "";
        if (Ot(t)) return co ? co.call(t) : "";
        var n = t + "";
        return "0" == n && 1 / t == -so ? "-0" : n
    }

    function Lt(t) {
        return null == t ? "" : Bt(t)
    }

    function Ht(t, e) {
        return wi(t) ? t : It(t, e) ? [t] : oo(Lt(t))
    }

    function Mt(t) {
        var e = null == t ? 0 : t.length;
        return e ? t[e - 1] : void 0
    }

    function qt(t) {
        if ("string" == typeof t || Ot(t)) return t;
        var e = t + "";
        return "0" == e && 1 / t == -uo ? "-0" : e
    }

    function Rt(t, e) {
        e = Ht(e, t);
        for (var n = 0, i = e.length; null != t && n < i;) t = t[qt(e[n++])];
        return n && n == i ? t : void 0
    }

    function Wt(t, e, n) {
        var i = -1,
            r = t.length;
        e < 0 && (e = -e > r ? 0 : r + e), n = n > r ? r : n, n < 0 && (n += r), r = e > n ? 0 : n - e >>> 0, e >>>= 0;
        for (var o = Array(r); ++i < r;) o[i] = t[i + e];
        return o
    }

    function zt(t, e) {
        return e.length < 2 ? t : Rt(t, Wt(e, 0, -1))
    }

    function Vt(t, e) {
        return e = Ht(e, t), null == (t = zt(t, e)) || delete t[qt(Mt(e))]
    }

    function Ut(t) {
        return wi(t) || _i(t) || !!(lo && t && t[lo])
    }

    function Xt(t, e, n, i, r) {
        var o = -1,
            s = t.length;
        for (n || (n = Ut), r || (r = []); ++o < s;) {
            var a = t[o];
            e > 0 && n(a) ? e > 1 ? Xt(a, e - 1, n, i, r) : ft(r, a) : i || (r[r.length] = a)
        }
        return r
    }

    function Yt(t) {
        return (null == t ? 0 : t.length) ? Xt(t, 1) : []
    }

    function Qt(t, e, n) {
        switch (n.length) {
            case 0:
                return t.call(e);
            case 1:
                return t.call(e, n[0]);
            case 2:
                return t.call(e, n[0], n[1]);
            case 3:
                return t.call(e, n[0], n[1], n[2])
        }
        return t.apply(e, n)
    }

    function Gt(t, e, n) {
        return e = ho(void 0 === e ? t.length - 1 : e, 0),
            function() {
                for (var i = arguments, r = -1, o = ho(i.length - e, 0), s = Array(o); ++r < o;) s[r] = i[e + r];
                r = -1;
                for (var a = Array(e + 1); ++r < e;) a[r] = i[r];
                return a[e] = n(s), Qt(t, this, a)
            }
    }

    function Kt(t) {
        return function() {
            return t
        }
    }

    function Jt(t) {
        return t
    }

    function Zt(t) {
        return this.__data__.set(t, bo), this
    }

    function te(t) {
        return this.__data__.has(t)
    }

    function ee(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.__data__ = new L; ++e < n;) this.add(t[e])
    }

    function ne(t, e) {
        for (var n = -1, i = null == t ? 0 : t.length; ++n < i;)
            if (e(t[n], n, t)) return !0;
        return !1
    }

    function ie(t, e) {
        return t.has(e)
    }

    function re(t, e, n, i, r, o) {
        var s = n & _o,
            a = t.length,
            c = e.length;
        if (a != c && !(s && c > a)) return !1;
        var u = o.get(t);
        if (u && o.get(e)) return u == e;
        var l = -1,
            d = !0,
            h = n & wo ? new ee : void 0;
        for (o.set(t, e), o.set(e, t); ++l < a;) {
            var f = t[l],
                p = e[l];
            if (i) var m = s ? i(p, f, l, e, t, o) : i(f, p, l, t, e, o);
            if (void 0 !== m) {
                if (m) continue;
                d = !1;
                break
            }
            if (h) {
                if (!ne(e, function(t, e) {
                        if (!ie(h, e) && (f === t || r(f, t, n, i, o))) return h.push(e)
                    })) {
                    d = !1;
                    break
                }
            } else if (f !== p && !r(f, p, n, i, o)) {
                d = !1;
                break
            }
        }
        return o.delete(t), o.delete(e), d
    }

    function oe(t, e, n, r, o, s, a) {
        switch (n) {
            case Oo:
                if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                t = t.buffer, e = e.buffer;
            case No:
                return !(t.byteLength != e.byteLength || !s(new gr(t), new gr(e)));
            case Co:
            case To:
            case Eo:
                return i(+t, +e);
            case ko:
                return t.name == e.name && t.message == e.message;
            case Ao:
            case Po:
                return t == e + "";
            case $o:
                var c = xt;
            case jo:
                var u = r & So;
                if (c || (c = $t), t.size != e.size && !u) return !1;
                var l = a.get(t);
                if (l) return l == e;
                r |= xo, a.set(t, e);
                var d = re(c(t), c(e), r, o, s, a);
                return a.delete(t), d;
            case Do:
                if (Fo) return Fo.call(t) == Fo.call(e)
        }
        return !1
    }

    function se(t, e, n, i, r, o) {
        var s = n & Bo,
            a = it(t),
            c = a.length;
        if (c != it(e).length && !s) return !1;
        for (var u = c; u--;) {
            var l = a[u];
            if (!(s ? l in e : Ho.call(e, l))) return !1
        }
        var d = o.get(t);
        if (d && o.get(e)) return d == e;
        var h = !0;
        o.set(t, e), o.set(e, t);
        for (var f = s; ++u < c;) {
            l = a[u];
            var p = t[l],
                m = e[l];
            if (i) var g = s ? i(m, p, l, e, t, o) : i(p, m, l, t, e, o);
            if (!(void 0 === g ? p === m || r(p, m, n, i, o) : g)) {
                h = !1;
                break
            }
            f || (f = "constructor" == l)
        }
        if (h && !f) {
            var v = t.constructor,
                y = e.constructor;
            v != y && "constructor" in t && "constructor" in e && !("function" == typeof v && v instanceof v && "function" == typeof y && y instanceof y) && (h = !1)
        }
        return o.delete(t), o.delete(e), h
    }

    function ae(t, e, n, i, r, o) {
        var s = wi(t),
            a = wi(e),
            c = Ro,
            u = Ro;
        s || (c = fr(t), c = c == qo ? Wo : c), a || (u = fr(e), u = u == qo ? Wo : u);
        var l = c == Wo,
            d = u == Wo,
            h = c == u;
        if (h && $i(t)) {
            if (!$i(e)) return !1;
            s = !0, l = !1
        }
        if (h && !l) return o || (o = new M), s || Li(t) ? re(t, e, n, i, r, o) : oe(t, e, c, n, i, r, o);
        if (!(n & Mo)) {
            var f = l && Vo.call(t, "__wrapped__"),
                p = d && Vo.call(e, "__wrapped__");
            if (f || p) {
                var m = f ? t.value() : t,
                    g = p ? e.value() : e;
                return o || (o = new M), r(m, g, n, i, o)
            }
        }
        return !!h && (o || (o = new M), se(t, e, n, i, r, o))
    }

    function ce(t, e, n, i, r) {
        return t === e || (null == t || null == e || !v(t) && !U(e) ? t !== t && e !== e : ae(t, e, n, i, ce, r))
    }

    function ue(t, e, n, i) {
        var r = n.length,
            o = r,
            s = !i;
        if (null == t) return !o;
        for (t = Object(t); r--;) {
            var a = n[r];
            if (s && a[2] ? a[1] !== t[a[0]] : !(a[0] in t)) return !1
        }
        for (; ++r < o;) {
            a = n[r];
            var c = a[0],
                u = t[c],
                l = a[1];
            if (s && a[2]) {
                if (void 0 === u && !(c in t)) return !1
            } else {
                var d = new M;
                if (i) var h = i(u, l, c, t, e, d);
                if (!(void 0 === h ? ce(l, u, Uo | Xo, i, d) : h)) return !1
            }
        }
        return !0
    }

    function le(t) {
        return t === t && !v(t)
    }

    function de(t) {
        for (var e = it(t), n = e.length; n--;) {
            var i = e[n],
                r = t[i];
            e[n] = [i, r, le(r)]
        }
        return e
    }

    function he(t, e) {
        return function(n) {
            return null != n && (n[t] === e && (void 0 !== e || t in Object(n)))
        }
    }

    function fe(t) {
        var e = de(t);
        return 1 == e.length && e[0][2] ? he(e[0][0], e[0][1]) : function(n) {
            return n === t || ue(n, t, e)
        }
    }

    function pe(t, e, n) {
        var i = null == t ? void 0 : Rt(t, e);
        return void 0 === i ? n : i
    }

    function me(t, e) {
        return null != t && e in Object(t)
    }

    function ge(t, e, n) {
        e = Ht(e, t);
        for (var i = -1, r = e.length, o = !1; ++i < r;) {
            var s = qt(e[i]);
            if (!(o = null != t && n(t, s))) break;
            t = t[s]
        }
        return o || ++i != r ? o : !!(r = null == t ? 0 : t.length) && G(r) && Q(s, r) && (wi(t) || _i(t))
    }

    function ve(t, e) {
        return null != t && ge(t, e, me)
    }

    function ye(t, e) {
        return It(t) && le(e) ? he(qt(t), e) : function(n) {
            var i = pe(n, t);
            return void 0 === i && i === e ? ve(n, t) : ce(e, i, Yo | Qo)
        }
    }

    function be(t) {
        return function(e) {
            return null == e ? void 0 : e[t]
        }
    }

    function _e(t) {
        return function(e) {
            return Rt(e, t)
        }
    }

    function we(t) {
        return It(t) ? be(qt(t)) : _e(t)
    }

    function Se(t) {
        return "function" == typeof t ? t : null == t ? Jt : "object" == typeof t ? wi(t) ? ye(t[0], t[1]) : fe(t) : we(t)
    }

    function xe(t, e, n, i) {
        for (var r = t.length, o = n + (i ? 1 : -1); i ? o-- : ++o < r;)
            if (e(t[o], o, t)) return o;
        return -1
    }

    function Ce(t) {
        if ("number" == typeof t) return t;
        if (Ot(t)) return Go;
        if (v(t)) {
            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = v(e) ? e + "" : e
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = t.replace(Ko, "");
        var n = Zo.test(t);
        return n || ts.test(t) ? es(t.slice(2), n ? 2 : 8) : Jo.test(t) ? Go : +t
    }

    function Te(t) {
        if (!t) return 0 === t ? t : 0;
        if ((t = Ce(t)) === ns || t === -ns) {
            return (t < 0 ? -1 : 1) * is
        }
        return t === t ? t : 0
    }

    function ke(t) {
        var e = Te(t),
            n = e % 1;
        return e === e ? n ? e - n : e : 0
    }

    function $e(t, e, n) {
        var i = null == t ? 0 : t.length;
        if (!i) return -1;
        var r = null == n ? 0 : ke(n);
        return r < 0 && (r = rs(i + r, 0)), xe(t, Se(e, 3), r)
    }

    function Ee() {
        this.registered = {}, this.instances = [], this.extensions = {
            "*": []
        }
    }

    function Ae() {
        this.extensions.forEach(function(t) {
            this.extend(t)
        }.bind(this))
    }

    function je(t, e, n) {
        function i(e) {
            var n = h,
                i = f;
            return h = f = void 0, b = e, m = t.apply(i, n)
        }

        function r(t) {
            return b = t, g = setTimeout(a, e), _ ? i(t) : m
        }

        function o(t) {
            var n = t - y,
                i = t - b,
                r = e - n;
            return w ? hs(r, p - i) : r
        }

        function s(t) {
            var n = t - y,
                i = t - b;
            return void 0 === y || n >= e || n < 0 || w && i >= p
        }

        function a() {
            var t = us();
            if (s(t)) return c(t);
            g = setTimeout(a, o(t))
        }

        function c(t) {
            return g = void 0, S && h ? i(t) : (h = f = void 0, m)
        }

        function u() {
            void 0 !== g && clearTimeout(g), b = 0, h = y = f = g = void 0
        }

        function l() {
            return void 0 === g ? m : c(us())
        }

        function d() {
            var t = us(),
                n = s(t);
            if (h = arguments, f = this, y = t, n) {
                if (void 0 === g) return r(y);
                if (w) return g = setTimeout(a, e), i(y)
            }
            return void 0 === g && (g = setTimeout(a, e)), m
        }
        var h, f, p, m, g, y, b = 0,
            _ = !1,
            w = !1,
            S = !0;
        if ("function" != typeof t) throw new TypeError(ls);
        return e = Ce(e) || 0, v(n) && (_ = !!n.leading, w = "maxWait" in n, p = w ? ds(Ce(n.maxWait) || 0, e) : p, S = "trailing" in n ? !!n.trailing : S), d.cancel = u, d.flush = l, d
    }

    function Pe(t, e, n) {
        var i = !0,
            r = !0;
        if ("function" != typeof t) throw new TypeError(fs);
        return v(n) && (i = "leading" in n ? !!n.leading : i, r = "trailing" in n ? !!n.trailing : r), je(t, e, {
            leading: i,
            maxWait: e,
            trailing: r
        })
    }

    function De(t, e) {
        for (var n = t ? e.length : 0, i = n - 1; n--;) {
            var r = e[n];
            if (n == i || r !== o) {
                var o = r;
                Q(r) ? Ps.call(t, r, 1) : Vt(t, r)
            }
        }
        return t
    }

    function Ne(t, e) {
        var n = [];
        if (!t || !t.length) return n;
        var i = -1,
            r = [],
            o = t.length;
        for (e = Se(e, 3); ++i < o;) {
            var s = t[i];
            e(s, i, t) && (n.push(s), r.push(i))
        }
        return De(t, r), n
    }

    function Oe(t, e) {
        for (var n = -1, i = null == t ? 0 : t.length, r = 0, o = []; ++n < i;) {
            var s = t[n];
            e(s, n, t) && (o[r++] = s)
        }
        return o
    }

    function Ie(t, e) {
        return t && Ds(t, e, it)
    }

    function Fe(t, e) {
        var n = [];
        return Ns(t, function(t, i, r) {
            e(t, i, r) && n.push(t)
        }), n
    }

    function Be(t, e) {
        return (wi(t) ? Oe : Fe)(t, Se(e, 3))
    }

    function Le() {
        this.$document = $n(document), this.namespace = ".section-js-events", document.addEventListener("shopify:section:load", function(t) {
            var e = t.detail.sectionId,
                n = t.target.querySelector('[data-section-id="' + e + '"]'),
                i = n.getAttribute("data-section-type");
            this.load(i, n)
        }.bind(this))
    }

    function He(t) {
        this.container = t.container, this.$container = $n(this.container), this.id = t.id, this.namespace = "." + t.id, this.extensions = t.extensions || [], this.$eventBinder = this.$container, Me.call(this), qe.call(this), Re.call(this)
    }

    function Me() {
        this.extensions.forEach(function(t) {
            this.extend(t)
        }.bind(this))
    }

    function qe() {
        $n(document).on("shopify:section:unload" + this.namespace, We.bind(this)).on("shopify:section:select" + this.namespace, ze.bind(this)).on("shopify:section:deselect" + this.namespace, Ve.bind(this)).on("shopify:block:select" + this.namespace, Ue.bind(this)).on("shopify:block:deselect" + this.namespace, Xe.bind(this))
    }

    function Re() {
        this.on("section_load", this.onLoad.bind(this)), this.on("section_unload", this.onUnload.bind(this)), this.on("section_select", this.onSelect.bind(this)), this.on("section_deselect", this.onDeselect.bind(this)), this.on("block_select", this.onBlockSelect.bind(this)), this.on("block_deselect", this.onBlockDeselect.bind(this))
    }

    function We(t) {
        this.id === t.detail.sectionId && (t.type = "section_unload", this.trigger(t), this.off(this.namespace), Os.off(this.namespace), $n(document).off(this.namespace), $n(window).off(this.namespace), Ne(Os.instances, {
            id: this.id
        }))
    }

    function ze(t) {
        this.id === t.detail.sectionId && (t.type = "section_select", this.trigger(t))
    }

    function Ve(t) {
        this.id === t.detail.sectionId && (t.type = "section_deselect", this.trigger(t))
    }

    function Ue(t) {
        this.id === t.detail.sectionId && (t.type = "block_select", this.trigger(t))
    }

    function Xe(t) {
        this.id === t.detail.sectionId && (t.type = "block_deselect", this.trigger(t))
    }

    function Ye(t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e)
    }

    function Qe(t) {
        var e = Xs.call(t, Qs),
            n = t[Qs];
        try {
            t[Qs] = void 0;
            var i = !0
        } catch (t) {}
        var r = Ys.call(t);
        return i && (e ? t[Qs] = n : delete t[Qs]), r
    }

    function Ge(t) {
        return Js.call(t)
    }

    function Ke(t) {
        return null == t ? void 0 === t ? ra : ia : oa && oa in Object(t) ? ea(t) : na(t)
    }

    function Je(t) {
        return null != t && "object" == typeof t
    }

    function Ze(t) {
        return "symbol" == typeof t || ua(t) && ca(t) == la
    }

    function tn(t) {
        if ("number" == typeof t) return t;
        if (fa(t)) return pa;
        if (ha(t)) {
            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = ha(e) ? e + "" : e
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = t.replace(ma, "");
        var n = va.test(t);
        return n || ya.test(t) ? ba(t.slice(2), n ? 2 : 8) : ga.test(t) ? pa : +t
    }

    function en(t) {
        if (!t) return 0 === t ? t : 0;
        if ((t = wa(t)) === Sa || t === -Sa) {
            return (t < 0 ? -1 : 1) * xa
        }
        return t === t ? t : 0
    }

    function nn(t) {
        var e = Ta(t),
            n = e % 1;
        return e === e ? n ? e - n : e : 0
    }

    function rn(t, e, n) {
        return t === t && (void 0 !== n && (t = t <= n ? t : n), void 0 !== e && (t = t >= e ? t : e)), t
    }

    function on(t) {
        return t ? Ea(Aa(t), 0, ja) : 0
    }

    function sn(t, e, n, i) {
        var r = t.length;
        for (n = Da(n), n < 0 && (n = -n > r ? 0 : r + n), i = void 0 === i || i > r ? r : Da(i), i < 0 && (i += r), i = n > i ? 0 : Na(i); n < i;) t[n++] = e;
        return t
    }

    function an(t, e) {
        return t === e || t !== t && e !== e
    }

    function cn(t) {
        if (!Ba(t)) return !1;
        var e = Fa(t);
        return e == Ha || e == Ma || e == La || e == qa
    }

    function un(t) {
        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= Wa
    }

    function ln(t) {
        return null != t && Ua(t.length) && !Va(t)
    }

    function dn(t, e) {
        return !!(e = null == e ? Ya : e) && ("number" == typeof t || Qa.test(t)) && t > -1 && t % 1 == 0 && t < e
    }

    function hn(t, e, n) {
        if (!tc(n)) return !1;
        var i = typeof e;
        return !!("number" == i ? Ja(n) && Za(e, n.length) : "string" == i && e in n) && Ka(n[e], t)
    }

    function fn(t, e, n, i) {
        var r = null == t ? 0 : t.length;
        return r ? (n && "number" != typeof n && ic(t, e, n) && (n = 0, i = r), nc(t, e, n, i)) : []
    }

    function pn(t) {
        !cc && lc.createRange && (cc = lc.createRange(), cc.selectNode(lc.body));
        var e;
        return cc && cc.createContextualFragment ? e = cc.createContextualFragment(t) : (e = lc.createElement("body"), e.innerHTML = t), e.childNodes[0]
    }

    function mn(t, e, n) {
        t[n] !== e[n] && (t[n] = e[n], t[n] ? t.setAttribute(n, "") : t.removeAttribute(n, ""))
    }

    function gn() {}

    function vn(t, e) {
        var n = t.nodeName,
            i = e.nodeName;
        return n === i || !!(e.actualize && n.charCodeAt(0) < 91 && i.charCodeAt(0) > 90) && n === i.toUpperCase()
    }

    function yn(t, e) {
        return e && e !== hc ? lc.createElementNS(e, t) : lc.createElement(t)
    }

    function bn(t, e) {
        if (e.assignAttributes) e.assignAttributes(t);
        else {
            var n, i, r, o, s, a = e.attributes;
            for (n = a.length - 1; n >= 0; --n) i = a[n], r = i.name, o = i.namespaceURI, s = i.value, o ? (r = i.localName || r, t.getAttributeNS(o, r) !== s && t.setAttributeNS(o, r, s)) : t.getAttribute(r) !== s && t.setAttribute(r, s);
            for (a = t.attributes, n = a.length - 1; n >= 0; --n) i = a[n], !1 !== i.specified && (r = i.name, o = i.namespaceURI, o ? (r = i.localName || r, uc(e, o, r) || t.removeAttributeNS(o, r)) : uc(e, null, r) || t.removeAttribute(r))
        }
    }

    function _n(t, e) {
        for (var n = t.firstChild; n;) {
            var i = n.nextSibling;
            e.appendChild(n), n = i
        }
        return e
    }

    function wn(t) {
        return t.id
    }

    function Sn(t, e, n) {
        function i(t) {
            l ? l.push(t) : l = [t]
        }

        function r(t, e) {
            if (t.nodeType === fc)
                for (var n = t.firstChild; n;) {
                    var o = void 0;
                    e && (o = d(n)) ? i(o) : (v(n), n.firstChild && r(n, e)), n = n.nextSibling
                }
        }

        function o(t, e, n) {
            !1 !== g(t) && (e && e.removeChild(t), v(t), r(t, n))
        }

        function s(t) {
            if (t.nodeType === fc)
                for (var e = t.firstChild; e;) {
                    var n = d(e);
                    n && (_[n] = e), s(e), e = e.nextSibling
                }
        }

        function a(t) {
            f(t);
            for (var e = t.firstChild; e;) {
                var n = e.nextSibling,
                    i = d(e);
                if (i) {
                    var r = _[i];
                    r && vn(e, r) && (e.parentNode.replaceChild(r, e), c(r, e))
                }
                a(e), e = n
            }
        }

        function c(n, r, s) {
            var u, l = d(r);
            if (l && delete _[l], !e.isSameNode || !e.isSameNode(t)) {
                if (!s) {
                    if (!1 === p(n, r)) return;
                    if (bn(n, r), m(n), !1 === y(n, r)) return
                }
                if ("TEXTAREA" !== n.nodeName) {
                    var f, g, v, b, w = r.firstChild,
                        S = n.firstChild;
                    t: for (; w;) {
                        for (v = w.nextSibling, f = d(w); S;) {
                            if (g = S.nextSibling, w.isSameNode && w.isSameNode(S)) {
                                w = v, S = g;
                                continue t
                            }
                            u = d(S);
                            var x = S.nodeType,
                                C = void 0;
                            if (x === w.nodeType && (x === fc ? (f ? f !== u && ((b = _[f]) ? S.nextSibling === b ? C = !1 : (n.insertBefore(b, S), u ? i(u) : o(S, n, !0), g = S.nextSibling, S = b) : C = !1) : u && (C = !1), (C = !1 !== C && vn(S, w)) && c(S, w)) : x !== pc && x != mc || (C = !0, S.nodeValue = w.nodeValue)), C) {
                                w = v, S = g;
                                continue t
                            }
                            u ? i(u) : o(S, n, !0), S = g
                        }
                        if (f && (b = _[f]) && vn(b, w)) n.appendChild(b), c(b, w);
                        else {
                            var T = h(w);
                            !1 !== T && (T && (w = T), w.actualize && (w = w.actualize(n.ownerDocument || lc)), n.appendChild(w), a(w))
                        }
                        w = v, S = g
                    }
                    for (; S;) g = S.nextSibling, (u = d(S)) ? i(u) : o(S, n, !0), S = g
                }
                var k = gc[n.nodeName];
                k && k(n, r)
            }
        }
        if (n || (n = {}), "string" == typeof e)
            if ("#document" === t.nodeName || "HTML" === t.nodeName) {
                var u = e;
                e = lc.createElement("html"), e.innerHTML = u
            } else e = pn(e);
        var l, d = n.getNodeKey || wn,
            h = n.onBeforeNodeAdded || gn,
            f = n.onNodeAdded || gn,
            p = n.onBeforeElUpdated || gn,
            m = n.onElUpdated || gn,
            g = n.onBeforeNodeDiscarded || gn,
            v = n.onNodeDiscarded || gn,
            y = n.onBeforeElChildrenUpdated || gn,
            b = !0 === n.childrenOnly,
            _ = {};
        s(t);
        var w = t,
            S = w.nodeType,
            x = e.nodeType;
        if (!b)
            if (S === fc) x === fc ? vn(t, e) || (v(t), w = _n(t, yn(e.nodeName, e.namespaceURI))) : w = e;
            else if (S === pc || S === mc) {
            if (x === S) return w.nodeValue = e.nodeValue, w;
            w = e
        }
        if (w === e) v(t);
        else if (c(w, e, b), l)
            for (var C = 0, T = l.length; C < T; C++) {
                var k = _[l[C]];
                k && o(k, k.parentNode, !1)
            }
        return !b && w !== t && t.parentNode && (w.actualize && (w = w.actualize(t.ownerDocument || lc)), t.parentNode.replaceChild(w, t)), w
    }

    function xn(t, e) {
        return null == t || t !== t ? e : t
    }

    function Cn(t, e) {
        this.$element = $n(t), this.$slides = $n(Lc.slides, this.$element), this.config = $n.extend({}, qc, e), this._setCurrentSlide($n(Lc.activeSlide, this.$element)), this._assignTouchHandlers(), this.bindedOnFocus = this._onFocus.bind(this), this.bindedOnBlur = this._onBlur.bind(this), this.$slides[0].addEventListener("focus", this.bindedOnFocus, !0), this.$slides[0].addEventListener("blur", this.bindedOnBlur, !0)
    }

    function Tn(t) {
        var e;
        switch (t) {
            case "ZERO_RESULTS":
                e = nu.zeroResults;
                break;
            case "OVER_QUERY_LIMIT":
                e = nu.overQueryLimit;
                break;
            case "REQUEST_DENIED":
                e = nu.requestDenied;
                break;
            case "UNKNOWN_ERROR":
                e = nu.geocodeUnknownError;
                break;
            default:
                e = nu.geocodeUnknownError
        }
        return e
    }
    var kn = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
        $n = t(function(t) {
            ! function(e, n) {
                "use strict";
                "object" == typeof t && "object" == typeof t.exports ? t.exports = e.document ? n(e, !0) : function(t) {
                    if (!t.document) throw new Error("jQuery requires a window with a document");
                    return n(t)
                } : n(e)
            }("undefined" != typeof window ? window : kn, function(t, e) {
                "use strict";

                function n(t, e) {
                    e = e || Z;
                    var n = e.createElement("script");
                    n.text = t, e.head.appendChild(n).parentNode.removeChild(n)
                }

                function i(t) {
                    var e = !!t && "length" in t && t.length,
                        n = dt.type(t);
                    return "function" !== n && !dt.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
                }

                function r(t, e, n) {
                    if (dt.isFunction(e)) return dt.grep(t, function(t, i) {
                        return !!e.call(t, i, t) !== n
                    });
                    if (e.nodeType) return dt.grep(t, function(t) {
                        return t === e !== n
                    });
                    if ("string" == typeof e) {
                        if (wt.test(e)) return dt.filter(e, t, n);
                        e = dt.filter(e, t)
                    }
                    return dt.grep(t, function(t) {
                        return rt.call(e, t) > -1 !== n && 1 === t.nodeType
                    })
                }

                function o(t, e) {
                    for (;
                        (t = t[e]) && 1 !== t.nodeType;);
                    return t
                }

                function s(t) {
                    var e = {};
                    return dt.each(t.match(kt) || [], function(t, n) {
                        e[n] = !0
                    }), e
                }

                function a(t) {
                    return t
                }

                function c(t) {
                    throw t
                }

                function u(t, e, n) {
                    var i;
                    try {
                        t && dt.isFunction(i = t.promise) ? i.call(t).done(e).fail(n) : t && dt.isFunction(i = t.then) ? i.call(t, e, n) : e.call(void 0, t)
                    } catch (t) {
                        n.call(void 0, t)
                    }
                }

                function l() {
                    Z.removeEventListener("DOMContentLoaded", l), t.removeEventListener("load", l), dt.ready()
                }

                function d() {
                    this.expando = dt.expando + d.uid++
                }

                function h(t, e, n) {
                    var i;
                    if (void 0 === n && 1 === t.nodeType)
                        if (i = "data-" + e.replace(Ot, "-$&").toLowerCase(), "string" == typeof(n = t.getAttribute(i))) {
                            try {
                                n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Nt.test(n) ? JSON.parse(n) : n)
                            } catch (t) {}
                            Dt.set(t, e, n)
                        } else n = void 0;
                    return n
                }

                function f(t, e, n, i) {
                    var r, o = 1,
                        s = 20,
                        a = i ? function() {
                            return i.cur()
                        } : function() {
                            return dt.css(t, e, "")
                        },
                        c = a(),
                        u = n && n[3] || (dt.cssNumber[e] ? "" : "px"),
                        l = (dt.cssNumber[e] || "px" !== u && +c) && Ft.exec(dt.css(t, e));
                    if (l && l[3] !== u) {
                        u = u || l[3], n = n || [], l = +c || 1;
                        do {
                            o = o || ".5", l /= o, dt.style(t, e, l + u)
                        } while (o !== (o = a() / c) && 1 !== o && --s)
                    }
                    return n && (l = +l || +c || 0, r = n[1] ? l + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = l, i.end = r)), r
                }

                function p(t) {
                    var e, n = t.ownerDocument,
                        i = t.nodeName,
                        r = Mt[i];
                    return r || (e = n.body.appendChild(n.createElement(i)), r = dt.css(e, "display"), e.parentNode.removeChild(e), "none" === r && (r = "block"), Mt[i] = r, r)
                }

                function m(t, e) {
                    for (var n, i, r = [], o = 0, s = t.length; o < s; o++) i = t[o], i.style && (n = i.style.display, e ? ("none" === n && (r[o] = Pt.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && Lt(i) && (r[o] = p(i))) : "none" !== n && (r[o] = "none", Pt.set(i, "display", n)));
                    for (o = 0; o < s; o++) null != r[o] && (t[o].style.display = r[o]);
                    return t
                }

                function g(t, e) {
                    var n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
                    return void 0 === e || e && dt.nodeName(t, e) ? dt.merge([t], n) : n
                }

                function v(t, e) {
                    for (var n = 0, i = t.length; n < i; n++) Pt.set(t[n], "globalEval", !e || Pt.get(e[n], "globalEval"))
                }

                function y(t, e, n, i, r) {
                    for (var o, s, a, c, u, l, d = e.createDocumentFragment(), h = [], f = 0, p = t.length; f < p; f++)
                        if ((o = t[f]) || 0 === o)
                            if ("object" === dt.type(o)) dt.merge(h, o.nodeType ? [o] : o);
                            else if (Vt.test(o)) {
                        for (s = s || d.appendChild(e.createElement("div")), a = (Rt.exec(o) || ["", ""])[1].toLowerCase(), c = zt[a] || zt._default, s.innerHTML = c[1] + dt.htmlPrefilter(o) + c[2], l = c[0]; l--;) s = s.lastChild;
                        dt.merge(h, s.childNodes), s = d.firstChild, s.textContent = ""
                    } else h.push(e.createTextNode(o));
                    for (d.textContent = "", f = 0; o = h[f++];)
                        if (i && dt.inArray(o, i) > -1) r && r.push(o);
                        else if (u = dt.contains(o.ownerDocument, o), s = g(d.appendChild(o), "script"), u && v(s), n)
                        for (l = 0; o = s[l++];) Wt.test(o.type || "") && n.push(o);
                    return d
                }

                function b() {
                    return !0
                }

                function _() {
                    return !1
                }

                function w() {
                    try {
                        return Z.activeElement
                    } catch (t) {}
                }

                function S(t, e, n, i, r, o) {
                    var s, a;
                    if ("object" == typeof e) {
                        "string" != typeof n && (i = i || n, n = void 0);
                        for (a in e) S(t, a, n, i, e[a], o);
                        return t
                    }
                    if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = _;
                    else if (!r) return t;
                    return 1 === o && (s = r, r = function(t) {
                        return dt().off(t), s.apply(this, arguments)
                    }, r.guid = s.guid || (s.guid = dt.guid++)), t.each(function() {
                        dt.event.add(this, e, r, i, n)
                    })
                }

                function x(t, e) {
                    return dt.nodeName(t, "table") && dt.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t : t
                }

                function C(t) {
                    return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
                }

                function T(t) {
                    var e = Zt.exec(t.type);
                    return e ? t.type = e[1] : t.removeAttribute("type"), t
                }

                function k(t, e) {
                    var n, i, r, o, s, a, c, u;
                    if (1 === e.nodeType) {
                        if (Pt.hasData(t) && (o = Pt.access(t), s = Pt.set(e, o), u = o.events)) {
                            delete s.handle, s.events = {};
                            for (r in u)
                                for (n = 0, i = u[r].length; n < i; n++) dt.event.add(e, r, u[r][n])
                        }
                        Dt.hasData(t) && (a = Dt.access(t), c = dt.extend({}, a), Dt.set(e, c))
                    }
                }

                function $(t, e) {
                    var n = e.nodeName.toLowerCase();
                    "input" === n && qt.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
                }

                function E(t, e, i, r) {
                    e = nt.apply([], e);
                    var o, s, a, c, u, l, d = 0,
                        h = t.length,
                        f = h - 1,
                        p = e[0],
                        m = dt.isFunction(p);
                    if (m || h > 1 && "string" == typeof p && !lt.checkClone && Jt.test(p)) return t.each(function(n) {
                        var o = t.eq(n);
                        m && (e[0] = p.call(this, n, o.html())), E(o, e, i, r)
                    });
                    if (h && (o = y(e, t[0].ownerDocument, !1, t, r), s = o.firstChild, 1 === o.childNodes.length && (o = s), s || r)) {
                        for (a = dt.map(g(o, "script"), C), c = a.length; d < h; d++) u = o, d !== f && (u = dt.clone(u, !0, !0), c && dt.merge(a, g(u, "script"))), i.call(t[d], u, d);
                        if (c)
                            for (l = a[a.length - 1].ownerDocument, dt.map(a, T), d = 0; d < c; d++) u = a[d], Wt.test(u.type || "") && !Pt.access(u, "globalEval") && dt.contains(l, u) && (u.src ? dt._evalUrl && dt._evalUrl(u.src) : n(u.textContent.replace(te, ""), l))
                    }
                    return t
                }

                function A(t, e, n) {
                    for (var i, r = e ? dt.filter(e, t) : t, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || dt.cleanData(g(i)), i.parentNode && (n && dt.contains(i.ownerDocument, i) && v(g(i, "script")), i.parentNode.removeChild(i));
                    return t
                }

                function j(t, e, n) {
                    var i, r, o, s, a = t.style;
                    return n = n || ie(t), n && (s = n.getPropertyValue(e) || n[e], "" !== s || dt.contains(t.ownerDocument, t) || (s = dt.style(t, e)), !lt.pixelMarginRight() && ne.test(s) && ee.test(e) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
                }

                function P(t, e) {
                    return {
                        get: function() {
                            return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                        }
                    }
                }

                function D(t) {
                    if (t in ce) return t;
                    for (var e = t[0].toUpperCase() + t.slice(1), n = ae.length; n--;)
                        if ((t = ae[n] + e) in ce) return t
                }

                function N(t, e, n) {
                    var i = Ft.exec(e);
                    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
                }

                function O(t, e, n, i, r) {
                    for (var o = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; o < 4; o += 2) "margin" === n && (s += dt.css(t, n + Bt[o], !0, r)), i ? ("content" === n && (s -= dt.css(t, "padding" + Bt[o], !0, r)), "margin" !== n && (s -= dt.css(t, "border" + Bt[o] + "Width", !0, r))) : (s += dt.css(t, "padding" + Bt[o], !0, r), "padding" !== n && (s += dt.css(t, "border" + Bt[o] + "Width", !0, r)));
                    return s
                }

                function I(t, e, n) {
                    var i, r = !0,
                        o = ie(t),
                        s = "border-box" === dt.css(t, "boxSizing", !1, o);
                    if (t.getClientRects().length && (i = t.getBoundingClientRect()[e]), i <= 0 || null == i) {
                        if (i = j(t, e, o), (i < 0 || null == i) && (i = t.style[e]), ne.test(i)) return i;
                        r = s && (lt.boxSizingReliable() || i === t.style[e]), i = parseFloat(i) || 0
                    }
                    return i + O(t, e, n || (s ? "border" : "content"), r, o) + "px"
                }

                function F(t, e, n, i, r) {
                    return new F.prototype.init(t, e, n, i, r)
                }

                function B() {
                    le && (t.requestAnimationFrame(B), dt.fx.tick())
                }

                function L() {
                    return t.setTimeout(function() {
                        ue = void 0
                    }), ue = dt.now()
                }

                function H(t, e) {
                    var n, i = 0,
                        r = {
                            height: t
                        };
                    for (e = e ? 1 : 0; i < 4; i += 2 - e) n = Bt[i], r["margin" + n] = r["padding" + n] = t;
                    return e && (r.opacity = r.width = t), r
                }

                function M(t, e, n) {
                    for (var i, r = (W.tweeners[e] || []).concat(W.tweeners["*"]), o = 0, s = r.length; o < s; o++)
                        if (i = r[o].call(n, e, t)) return i
                }

                function q(t, e, n) {
                    var i, r, o, s, a, c, u, l, d = "width" in e || "height" in e,
                        h = this,
                        f = {},
                        p = t.style,
                        g = t.nodeType && Lt(t),
                        v = Pt.get(t, "fxshow");
                    n.queue || (s = dt._queueHooks(t, "fx"), null == s.unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
                        s.unqueued || a()
                    }), s.unqueued++, h.always(function() {
                        h.always(function() {
                            s.unqueued--, dt.queue(t, "fx").length || s.empty.fire()
                        })
                    }));
                    for (i in e)
                        if (r = e[i], de.test(r)) {
                            if (delete e[i], o = o || "toggle" === r, r === (g ? "hide" : "show")) {
                                if ("show" !== r || !v || void 0 === v[i]) continue;
                                g = !0
                            }
                            f[i] = v && v[i] || dt.style(t, i)
                        }
                    if ((c = !dt.isEmptyObject(e)) || !dt.isEmptyObject(f)) {
                        d && 1 === t.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], u = v && v.display, null == u && (u = Pt.get(t, "display")), l = dt.css(t, "display"), "none" === l && (u ? l = u : (m([t], !0), u = t.style.display || u, l = dt.css(t, "display"), m([t]))), ("inline" === l || "inline-block" === l && null != u) && "none" === dt.css(t, "float") && (c || (h.done(function() {
                            p.display = u
                        }), null == u && (l = p.display, u = "none" === l ? "" : l)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", h.always(function() {
                            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                        })), c = !1;
                        for (i in f) c || (v ? "hidden" in v && (g = v.hidden) : v = Pt.access(t, "fxshow", {
                                display: u
                            }), o && (v.hidden = !g), g && m([t], !0), h.done(function() {
                                g || m([t]), Pt.remove(t, "fxshow");
                                for (i in f) dt.style(t, i, f[i])
                            })), c = M(g ? v[i] : 0, i, h),
                            i in v || (v[i] = c.start, g && (c.end = c.start, c.start = 0))
                    }
                }

                function R(t, e) {
                    var n, i, r, o, s;
                    for (n in t)
                        if (i = dt.camelCase(n), r = e[i], o = t[n], dt.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), (s = dt.cssHooks[i]) && "expand" in s) {
                            o = s.expand(o), delete t[i];
                            for (n in o) n in t || (t[n] = o[n], e[n] = r)
                        } else e[i] = r
                }

                function W(t, e, n) {
                    var i, r, o = 0,
                        s = W.prefilters.length,
                        a = dt.Deferred().always(function() {
                            delete c.elem
                        }),
                        c = function() {
                            if (r) return !1;
                            for (var e = ue || L(), n = Math.max(0, u.startTime + u.duration - e), i = n / u.duration || 0, o = 1 - i, s = 0, c = u.tweens.length; s < c; s++) u.tweens[s].run(o);
                            return a.notifyWith(t, [u, o, n]), o < 1 && c ? n : (a.resolveWith(t, [u]), !1)
                        },
                        u = a.promise({
                            elem: t,
                            props: dt.extend({}, e),
                            opts: dt.extend(!0, {
                                specialEasing: {},
                                easing: dt.easing._default
                            }, n),
                            originalProperties: e,
                            originalOptions: n,
                            startTime: ue || L(),
                            duration: n.duration,
                            tweens: [],
                            createTween: function(e, n) {
                                var i = dt.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                                return u.tweens.push(i), i
                            },
                            stop: function(e) {
                                var n = 0,
                                    i = e ? u.tweens.length : 0;
                                if (r) return this;
                                for (r = !0; n < i; n++) u.tweens[n].run(1);
                                return e ? (a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u, e])) : a.rejectWith(t, [u, e]), this
                            }
                        }),
                        l = u.props;
                    for (R(l, u.opts.specialEasing); o < s; o++)
                        if (i = W.prefilters[o].call(u, t, l, u.opts)) return dt.isFunction(i.stop) && (dt._queueHooks(u.elem, u.opts.queue).stop = dt.proxy(i.stop, i)), i;
                    return dt.map(l, M, u), dt.isFunction(u.opts.start) && u.opts.start.call(t, u), dt.fx.timer(dt.extend(c, {
                        elem: t,
                        anim: u,
                        queue: u.opts.queue
                    })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
                }

                function z(t) {
                    return t.getAttribute && t.getAttribute("class") || ""
                }

                function V(t, e, n, i) {
                    var r;
                    if (dt.isArray(e)) dt.each(e, function(e, r) {
                        n || Ce.test(t) ? i(t, r) : V(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, n, i)
                    });
                    else if (n || "object" !== dt.type(e)) i(t, e);
                    else
                        for (r in e) V(t + "[" + r + "]", e[r], n, i)
                }

                function U(t) {
                    return function(e, n) {
                        "string" != typeof e && (n = e, e = "*");
                        var i, r = 0,
                            o = e.toLowerCase().match(kt) || [];
                        if (dt.isFunction(n))
                            for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
                    }
                }

                function X(t, e, n, i) {
                    function r(a) {
                        var c;
                        return o[a] = !0, dt.each(t[a] || [], function(t, a) {
                            var u = a(e, n, i);
                            return "string" != typeof u || s || o[u] ? s ? !(c = u) : void 0 : (e.dataTypes.unshift(u), r(u), !1)
                        }), c
                    }
                    var o = {},
                        s = t === Fe;
                    return r(e.dataTypes[0]) || !o["*"] && r("*")
                }

                function Y(t, e) {
                    var n, i, r = dt.ajaxSettings.flatOptions || {};
                    for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
                    return i && dt.extend(!0, t, i), t
                }

                function Q(t, e, n) {
                    for (var i, r, o, s, a = t.contents, c = t.dataTypes;
                        "*" === c[0];) c.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
                    if (i)
                        for (r in a)
                            if (a[r] && a[r].test(i)) {
                                c.unshift(r);
                                break
                            }
                    if (c[0] in n) o = c[0];
                    else {
                        for (r in n) {
                            if (!c[0] || t.converters[r + " " + c[0]]) {
                                o = r;
                                break
                            }
                            s || (s = r)
                        }
                        o = o || s
                    }
                    if (o) return o !== c[0] && c.unshift(o), n[o]
                }

                function G(t, e, n, i) {
                    var r, o, s, a, c, u = {},
                        l = t.dataTypes.slice();
                    if (l[1])
                        for (s in t.converters) u[s.toLowerCase()] = t.converters[s];
                    for (o = l.shift(); o;)
                        if (t.responseFields[o] && (n[t.responseFields[o]] = e), !c && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), c = o, o = l.shift())
                            if ("*" === o) o = c;
                            else if ("*" !== c && c !== o) {
                        if (!(s = u[c + " " + o] || u["* " + o]))
                            for (r in u)
                                if (a = r.split(" "), a[1] === o && (s = u[c + " " + a[0]] || u["* " + a[0]])) {
                                    !0 === s ? s = u[r] : !0 !== u[r] && (o = a[0], l.unshift(a[1]));
                                    break
                                }
                        if (!0 !== s)
                            if (s && t.throws) e = s(e);
                            else try {
                                e = s(e)
                            } catch (t) {
                                return {
                                    state: "parsererror",
                                    error: s ? t : "No conversion from " + c + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: e
                    }
                }

                function K(t) {
                    return dt.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
                }
                var J = [],
                    Z = t.document,
                    tt = Object.getPrototypeOf,
                    et = J.slice,
                    nt = J.concat,
                    it = J.push,
                    rt = J.indexOf,
                    ot = {},
                    st = ot.toString,
                    at = ot.hasOwnProperty,
                    ct = at.toString,
                    ut = ct.call(Object),
                    lt = {},
                    dt = function(t, e) {
                        return new dt.fn.init(t, e)
                    },
                    ht = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                    ft = /^-ms-/,
                    pt = /-([a-z])/g,
                    mt = function(t, e) {
                        return e.toUpperCase()
                    };
                dt.fn = dt.prototype = {
                    jquery: "3.1.0",
                    constructor: dt,
                    length: 0,
                    toArray: function() {
                        return et.call(this)
                    },
                    get: function(t) {
                        return null != t ? t < 0 ? this[t + this.length] : this[t] : et.call(this)
                    },
                    pushStack: function(t) {
                        var e = dt.merge(this.constructor(), t);
                        return e.prevObject = this, e
                    },
                    each: function(t) {
                        return dt.each(this, t)
                    },
                    map: function(t) {
                        return this.pushStack(dt.map(this, function(e, n) {
                            return t.call(e, n, e)
                        }))
                    },
                    slice: function() {
                        return this.pushStack(et.apply(this, arguments))
                    },
                    first: function() {
                        return this.eq(0)
                    },
                    last: function() {
                        return this.eq(-1)
                    },
                    eq: function(t) {
                        var e = this.length,
                            n = +t + (t < 0 ? e : 0);
                        return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
                    },
                    end: function() {
                        return this.prevObject || this.constructor()
                    },
                    push: it,
                    sort: J.sort,
                    splice: J.splice
                }, dt.extend = dt.fn.extend = function() {
                    var t, e, n, i, r, o, s = arguments[0] || {},
                        a = 1,
                        c = arguments.length,
                        u = !1;
                    for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || dt.isFunction(s) || (s = {}), a === c && (s = this, a--); a < c; a++)
                        if (null != (t = arguments[a]))
                            for (e in t) n = s[e], i = t[e], s !== i && (u && i && (dt.isPlainObject(i) || (r = dt.isArray(i))) ? (r ? (r = !1, o = n && dt.isArray(n) ? n : []) : o = n && dt.isPlainObject(n) ? n : {}, s[e] = dt.extend(u, o, i)) : void 0 !== i && (s[e] = i));
                    return s
                }, dt.extend({
                    expando: "jQuery" + ("3.1.0" + Math.random()).replace(/\D/g, ""),
                    isReady: !0,
                    error: function(t) {
                        throw new Error(t)
                    },
                    noop: function() {},
                    isFunction: function(t) {
                        return "function" === dt.type(t)
                    },
                    isArray: Array.isArray,
                    isWindow: function(t) {
                        return null != t && t === t.window
                    },
                    isNumeric: function(t) {
                        var e = dt.type(t);
                        return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
                    },
                    isPlainObject: function(t) {
                        var e, n;
                        return !(!t || "[object Object]" !== st.call(t)) && (!(e = tt(t)) || "function" == typeof(n = at.call(e, "constructor") && e.constructor) && ct.call(n) === ut)
                    },
                    isEmptyObject: function(t) {
                        var e;
                        for (e in t) return !1;
                        return !0
                    },
                    type: function(t) {
                        return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? ot[st.call(t)] || "object" : typeof t
                    },
                    globalEval: function(t) {
                        n(t)
                    },
                    camelCase: function(t) {
                        return t.replace(ft, "ms-").replace(pt, mt)
                    },
                    nodeName: function(t, e) {
                        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
                    },
                    each: function(t, e) {
                        var n, r = 0;
                        if (i(t))
                            for (n = t.length; r < n && !1 !== e.call(t[r], r, t[r]); r++);
                        else
                            for (r in t)
                                if (!1 === e.call(t[r], r, t[r])) break; return t
                    },
                    trim: function(t) {
                        return null == t ? "" : (t + "").replace(ht, "")
                    },
                    makeArray: function(t, e) {
                        var n = e || [];
                        return null != t && (i(Object(t)) ? dt.merge(n, "string" == typeof t ? [t] : t) : it.call(n, t)), n
                    },
                    inArray: function(t, e, n) {
                        return null == e ? -1 : rt.call(e, t, n)
                    },
                    merge: function(t, e) {
                        for (var n = +e.length, i = 0, r = t.length; i < n; i++) t[r++] = e[i];
                        return t.length = r, t
                    },
                    grep: function(t, e, n) {
                        for (var i = [], r = 0, o = t.length, s = !n; r < o; r++) !e(t[r], r) !== s && i.push(t[r]);
                        return i
                    },
                    map: function(t, e, n) {
                        var r, o, s = 0,
                            a = [];
                        if (i(t))
                            for (r = t.length; s < r; s++) null != (o = e(t[s], s, n)) && a.push(o);
                        else
                            for (s in t) null != (o = e(t[s], s, n)) && a.push(o);
                        return nt.apply([], a)
                    },
                    guid: 1,
                    proxy: function(t, e) {
                        var n, i, r;
                        if ("string" == typeof e && (n = t[e], e = t, t = n), dt.isFunction(t)) return i = et.call(arguments, 2), r = function() {
                            return t.apply(e || this, i.concat(et.call(arguments)))
                        }, r.guid = t.guid = t.guid || dt.guid++, r
                    },
                    now: Date.now,
                    support: lt
                }), "function" == typeof Symbol && (dt.fn[Symbol.iterator] = J[Symbol.iterator]), dt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
                    ot["[object " + e + "]"] = e.toLowerCase()
                });
                var gt = function(t) {
                    function e(t, e, n, i) {
                        var r, o, s, a, c, l, h, f = e && e.ownerDocument,
                            p = e ? e.nodeType : 9;
                        if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
                        if (!i && ((e ? e.ownerDocument || e : H) !== P && j(e), e = e || P, N)) {
                            if (11 !== p && (c = mt.exec(t)))
                                if (r = c[1]) {
                                    if (9 === p) {
                                        if (!(s = e.getElementById(r))) return n;
                                        if (s.id === r) return n.push(s), n
                                    } else if (f && (s = f.getElementById(r)) && B(e, s) && s.id === r) return n.push(s), n
                                } else {
                                    if (c[2]) return G.apply(n, e.getElementsByTagName(t)), n;
                                    if ((r = c[3]) && _.getElementsByClassName && e.getElementsByClassName) return G.apply(n, e.getElementsByClassName(r)), n
                                }
                            if (_.qsa && !z[t + " "] && (!O || !O.test(t))) {
                                if (1 !== p) f = e, h = t;
                                else if ("object" !== e.nodeName.toLowerCase()) {
                                    for ((a = e.getAttribute("id")) ? a = a.replace(bt, _t) : e.setAttribute("id", a = L), l = C(t), o = l.length; o--;) l[o] = "#" + a + " " + d(l[o]);
                                    h = l.join(","), f = gt.test(t) && u(e.parentNode) || e
                                }
                                if (h) try {
                                    return G.apply(n, f.querySelectorAll(h)), n
                                } catch (t) {} finally {
                                    a === L && e.removeAttribute("id")
                                }
                            }
                        }
                        return k(t.replace(ot, "$1"), e, n, i)
                    }

                    function n() {
                        function t(n, i) {
                            return e.push(n + " ") > w.cacheLength && delete t[e.shift()], t[n + " "] = i
                        }
                        var e = [];
                        return t
                    }

                    function i(t) {
                        return t[L] = !0, t
                    }

                    function r(t) {
                        var e = P.createElement("fieldset");
                        try {
                            return !!t(e)
                        } catch (t) {
                            return !1
                        } finally {
                            e.parentNode && e.parentNode.removeChild(e), e = null
                        }
                    }

                    function o(t, e) {
                        for (var n = t.split("|"), i = n.length; i--;) w.attrHandle[n[i]] = e
                    }

                    function s(t, e) {
                        var n = e && t,
                            i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                        if (i) return i;
                        if (n)
                            for (; n = n.nextSibling;)
                                if (n === e) return -1;
                        return t ? 1 : -1
                    }

                    function a(t) {
                        return function(e) {
                            return "label" in e && e.disabled === t || "form" in e && e.disabled === t || "form" in e && !1 === e.disabled && (e.isDisabled === t || e.isDisabled !== !t && ("label" in e || !St(e)) !== t)
                        }
                    }

                    function c(t) {
                        return i(function(e) {
                            return e = +e, i(function(n, i) {
                                for (var r, o = t([], n.length, e), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                            })
                        })
                    }

                    function u(t) {
                        return t && void 0 !== t.getElementsByTagName && t
                    }

                    function l() {}

                    function d(t) {
                        for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
                        return i
                    }

                    function h(t, e, n) {
                        var i = e.dir,
                            r = e.next,
                            o = r || i,
                            s = n && "parentNode" === o,
                            a = q++;
                        return e.first ? function(e, n, r) {
                            for (; e = e[i];)
                                if (1 === e.nodeType || s) return t(e, n, r)
                        } : function(e, n, c) {
                            var u, l, d, h = [M, a];
                            if (c) {
                                for (; e = e[i];)
                                    if ((1 === e.nodeType || s) && t(e, n, c)) return !0
                            } else
                                for (; e = e[i];)
                                    if (1 === e.nodeType || s)
                                        if (d = e[L] || (e[L] = {}), l = d[e.uniqueID] || (d[e.uniqueID] = {}), r && r === e.nodeName.toLowerCase()) e = e[i] || e;
                                        else {
                                            if ((u = l[o]) && u[0] === M && u[1] === a) return h[2] = u[2];
                                            if (l[o] = h, h[2] = t(e, n, c)) return !0
                                        }
                        }
                    }

                    function f(t) {
                        return t.length > 1 ? function(e, n, i) {
                            for (var r = t.length; r--;)
                                if (!t[r](e, n, i)) return !1;
                            return !0
                        } : t[0]
                    }

                    function p(t, n, i) {
                        for (var r = 0, o = n.length; r < o; r++) e(t, n[r], i);
                        return i
                    }

                    function m(t, e, n, i, r) {
                        for (var o, s = [], a = 0, c = t.length, u = null != e; a < c; a++)(o = t[a]) && (n && !n(o, i, r) || (s.push(o), u && e.push(a)));
                        return s
                    }

                    function g(t, e, n, r, o, s) {
                        return r && !r[L] && (r = g(r)), o && !o[L] && (o = g(o, s)), i(function(i, s, a, c) {
                            var u, l, d, h = [],
                                f = [],
                                g = s.length,
                                v = i || p(e || "*", a.nodeType ? [a] : a, []),
                                y = !t || !i && e ? v : m(v, h, t, a, c),
                                b = n ? o || (i ? t : g || r) ? [] : s : y;
                            if (n && n(y, b, a, c), r)
                                for (u = m(b, f), r(u, [], a, c), l = u.length; l--;)(d = u[l]) && (b[f[l]] = !(y[f[l]] = d));
                            if (i) {
                                if (o || t) {
                                    if (o) {
                                        for (u = [], l = b.length; l--;)(d = b[l]) && u.push(y[l] = d);
                                        o(null, b = [], u, c)
                                    }
                                    for (l = b.length; l--;)(d = b[l]) && (u = o ? J(i, d) : h[l]) > -1 && (i[u] = !(s[u] = d))
                                }
                            } else b = m(b === s ? b.splice(g, b.length) : b), o ? o(null, s, b, c) : G.apply(s, b)
                        })
                    }

                    function v(t) {
                        for (var e, n, i, r = t.length, o = w.relative[t[0].type], s = o || w.relative[" "], a = o ? 1 : 0, c = h(function(t) {
                                return t === e
                            }, s, !0), u = h(function(t) {
                                return J(e, t) > -1
                            }, s, !0), l = [function(t, n, i) {
                                var r = !o && (i || n !== $) || ((e = n).nodeType ? c(t, n, i) : u(t, n, i));
                                return e = null, r
                            }]; a < r; a++)
                            if (n = w.relative[t[a].type]) l = [h(f(l), n)];
                            else {
                                if (n = w.filter[t[a].type].apply(null, t[a].matches), n[L]) {
                                    for (i = ++a; i < r && !w.relative[t[i].type]; i++);
                                    return g(a > 1 && f(l), a > 1 && d(t.slice(0, a - 1).concat({
                                        value: " " === t[a - 2].type ? "*" : ""
                                    })).replace(ot, "$1"), n, a < i && v(t.slice(a, i)), i < r && v(t = t.slice(i)), i < r && d(t))
                                }
                                l.push(n)
                            }
                        return f(l)
                    }

                    function y(t, n) {
                        var r = n.length > 0,
                            o = t.length > 0,
                            s = function(i, s, a, c, u) {
                                var l, d, h, f = 0,
                                    p = "0",
                                    g = i && [],
                                    v = [],
                                    y = $,
                                    b = i || o && w.find.TAG("*", u),
                                    _ = M += null == y ? 1 : Math.random() || .1,
                                    S = b.length;
                                for (u && ($ = s === P || s || u); p !== S && null != (l = b[p]); p++) {
                                    if (o && l) {
                                        for (d = 0, s || l.ownerDocument === P || (j(l), a = !N); h = t[d++];)
                                            if (h(l, s || P, a)) {
                                                c.push(l);
                                                break
                                            }
                                        u && (M = _)
                                    }
                                    r && ((l = !h && l) && f--, i && g.push(l))
                                }
                                if (f += p, r && p !== f) {
                                    for (d = 0; h = n[d++];) h(g, v, s, a);
                                    if (i) {
                                        if (f > 0)
                                            for (; p--;) g[p] || v[p] || (v[p] = Y.call(c));
                                        v = m(v)
                                    }
                                    G.apply(c, v), u && !i && v.length > 0 && f + n.length > 1 && e.uniqueSort(c)
                                }
                                return u && (M = _, $ = y), g
                            };
                        return r ? i(s) : s
                    }
                    var b, _, w, S, x, C, T, k, $, E, A, j, P, D, N, O, I, F, B, L = "sizzle" + 1 * new Date,
                        H = t.document,
                        M = 0,
                        q = 0,
                        R = n(),
                        W = n(),
                        z = n(),
                        V = function(t, e) {
                            return t === e && (A = !0), 0
                        },
                        U = {}.hasOwnProperty,
                        X = [],
                        Y = X.pop,
                        Q = X.push,
                        G = X.push,
                        K = X.slice,
                        J = function(t, e) {
                            for (var n = 0, i = t.length; n < i; n++)
                                if (t[n] === e) return n;
                            return -1
                        },
                        Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                        tt = "[\\x20\\t\\r\\n\\f]",
                        et = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                        nt = "\\[" + tt + "*(" + et + ")(?:" + tt + "*([*^$|!~]?=)" + tt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + et + "))|)" + tt + "*\\]",
                        it = ":(" + et + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + nt + ")*)|.*)\\)|)",
                        rt = new RegExp(tt + "+", "g"),
                        ot = new RegExp("^" + tt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + tt + "+$", "g"),
                        st = new RegExp("^" + tt + "*," + tt + "*"),
                        at = new RegExp("^" + tt + "*([>+~]|" + tt + ")" + tt + "*"),
                        ct = new RegExp("=" + tt + "*([^\\]'\"]*?)" + tt + "*\\]", "g"),
                        ut = new RegExp(it),
                        lt = new RegExp("^" + et + "$"),
                        dt = {
                            ID: new RegExp("^#(" + et + ")"),
                            CLASS: new RegExp("^\\.(" + et + ")"),
                            TAG: new RegExp("^(" + et + "|[*])"),
                            ATTR: new RegExp("^" + nt),
                            PSEUDO: new RegExp("^" + it),
                            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + tt + "*(even|odd|(([+-]|)(\\d*)n|)" + tt + "*(?:([+-]|)" + tt + "*(\\d+)|))" + tt + "*\\)|)", "i"),
                            bool: new RegExp("^(?:" + Z + ")$", "i"),
                            needsContext: new RegExp("^" + tt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + tt + "*((?:-\\d)?\\d*)" + tt + "*\\)|)(?=[^-]|$)", "i")
                        },
                        ht = /^(?:input|select|textarea|button)$/i,
                        ft = /^h\d$/i,
                        pt = /^[^{]+\{\s*\[native \w/,
                        mt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                        gt = /[+~]/,
                        vt = new RegExp("\\\\([\\da-f]{1,6}" + tt + "?|(" + tt + ")|.)", "ig"),
                        yt = function(t, e, n) {
                            var i = "0x" + e - 65536;
                            return i !== i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                        },
                        bt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
                        _t = function(t, e) {
                            return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
                        },
                        wt = function() {
                            j()
                        },
                        St = h(function(t) {
                            return !0 === t.disabled
                        }, {
                            dir: "parentNode",
                            next: "legend"
                        });
                    try {
                        G.apply(X = K.call(H.childNodes), H.childNodes), X[H.childNodes.length].nodeType
                    } catch (t) {
                        G = {
                            apply: X.length ? function(t, e) {
                                Q.apply(t, K.call(e))
                            } : function(t, e) {
                                for (var n = t.length, i = 0; t[n++] = e[i++];);
                                t.length = n - 1
                            }
                        }
                    }
                    _ = e.support = {}, x = e.isXML = function(t) {
                        var e = t && (t.ownerDocument || t).documentElement;
                        return !!e && "HTML" !== e.nodeName
                    }, j = e.setDocument = function(t) {
                        var e, n, i = t ? t.ownerDocument || t : H;
                        return i !== P && 9 === i.nodeType && i.documentElement ? (P = i, D = P.documentElement, N = !x(P), H !== P && (n = P.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", wt, !1) : n.attachEvent && n.attachEvent("onunload", wt)), _.attributes = r(function(t) {
                            return t.className = "i", !t.getAttribute("className")
                        }), _.getElementsByTagName = r(function(t) {
                            return t.appendChild(P.createComment("")), !t.getElementsByTagName("*").length
                        }), _.getElementsByClassName = pt.test(P.getElementsByClassName), _.getById = r(function(t) {
                            return D.appendChild(t).id = L, !P.getElementsByName || !P.getElementsByName(L).length
                        }), _.getById ? (w.find.ID = function(t, e) {
                            if (void 0 !== e.getElementById && N) {
                                var n = e.getElementById(t);
                                return n ? [n] : []
                            }
                        }, w.filter.ID = function(t) {
                            var e = t.replace(vt, yt);
                            return function(t) {
                                return t.getAttribute("id") === e
                            }
                        }) : (delete w.find.ID, w.filter.ID = function(t) {
                            var e = t.replace(vt, yt);
                            return function(t) {
                                var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                                return n && n.value === e
                            }
                        }), w.find.TAG = _.getElementsByTagName ? function(t, e) {
                            return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : _.qsa ? e.querySelectorAll(t) : void 0
                        } : function(t, e) {
                            var n, i = [],
                                r = 0,
                                o = e.getElementsByTagName(t);
                            if ("*" === t) {
                                for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                                return i
                            }
                            return o
                        }, w.find.CLASS = _.getElementsByClassName && function(t, e) {
                            if (void 0 !== e.getElementsByClassName && N) return e.getElementsByClassName(t)
                        }, I = [], O = [], (_.qsa = pt.test(P.querySelectorAll)) && (r(function(t) {
                            D.appendChild(t).innerHTML = "<a id='" + L + "'></a><select id='" + L + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + tt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || O.push("\\[" + tt + "*(?:value|" + Z + ")"), t.querySelectorAll("[id~=" + L + "-]").length || O.push("~="), t.querySelectorAll(":checked").length || O.push(":checked"), t.querySelectorAll("a#" + L + "+*").length || O.push(".#.+[+~]")
                        }), r(function(t) {
                            t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var e = P.createElement("input");
                            e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && O.push("name" + tt + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && O.push(":enabled", ":disabled"), D.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && O.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), O.push(",.*:")
                        })), (_.matchesSelector = pt.test(F = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && r(function(t) {
                            _.disconnectedMatch = F.call(t, "*"), F.call(t, "[s!='']:x"), I.push("!=", it)
                        }), O = O.length && new RegExp(O.join("|")), I = I.length && new RegExp(I.join("|")), e = pt.test(D.compareDocumentPosition), B = e || pt.test(D.contains) ? function(t, e) {
                            var n = 9 === t.nodeType ? t.documentElement : t,
                                i = e && e.parentNode;
                            return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                        } : function(t, e) {
                            if (e)
                                for (; e = e.parentNode;)
                                    if (e === t) return !0;
                            return !1
                        }, V = e ? function(t, e) {
                            if (t === e) return A = !0, 0;
                            var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                            return n || (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !_.sortDetached && e.compareDocumentPosition(t) === n ? t === P || t.ownerDocument === H && B(H, t) ? -1 : e === P || e.ownerDocument === H && B(H, e) ? 1 : E ? J(E, t) - J(E, e) : 0 : 4 & n ? -1 : 1)
                        } : function(t, e) {
                            if (t === e) return A = !0, 0;
                            var n, i = 0,
                                r = t.parentNode,
                                o = e.parentNode,
                                a = [t],
                                c = [e];
                            if (!r || !o) return t === P ? -1 : e === P ? 1 : r ? -1 : o ? 1 : E ? J(E, t) - J(E, e) : 0;
                            if (r === o) return s(t, e);
                            for (n = t; n = n.parentNode;) a.unshift(n);
                            for (n = e; n = n.parentNode;) c.unshift(n);
                            for (; a[i] === c[i];) i++;
                            return i ? s(a[i], c[i]) : a[i] === H ? -1 : c[i] === H ? 1 : 0
                        }, P) : P
                    }, e.matches = function(t, n) {
                        return e(t, null, null, n)
                    }, e.matchesSelector = function(t, n) {
                        if ((t.ownerDocument || t) !== P && j(t), n = n.replace(ct, "='$1']"), _.matchesSelector && N && !z[n + " "] && (!I || !I.test(n)) && (!O || !O.test(n))) try {
                            var i = F.call(t, n);
                            if (i || _.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                        } catch (t) {}
                        return e(n, P, null, [t]).length > 0
                    }, e.contains = function(t, e) {
                        return (t.ownerDocument || t) !== P && j(t), B(t, e)
                    }, e.attr = function(t, e) {
                        (t.ownerDocument || t) !== P && j(t);
                        var n = w.attrHandle[e.toLowerCase()],
                            i = n && U.call(w.attrHandle, e.toLowerCase()) ? n(t, e, !N) : void 0;
                        return void 0 !== i ? i : _.attributes || !N ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
                    }, e.escape = function(t) {
                        return (t + "").replace(bt, _t)
                    }, e.error = function(t) {
                        throw new Error("Syntax error, unrecognized expression: " + t)
                    }, e.uniqueSort = function(t) {
                        var e, n = [],
                            i = 0,
                            r = 0;
                        if (A = !_.detectDuplicates, E = !_.sortStable && t.slice(0), t.sort(V), A) {
                            for (; e = t[r++];) e === t[r] && (i = n.push(r));
                            for (; i--;) t.splice(n[i], 1)
                        }
                        return E = null, t
                    }, S = e.getText = function(t) {
                        var e, n = "",
                            i = 0,
                            r = t.nodeType;
                        if (r) {
                            if (1 === r || 9 === r || 11 === r) {
                                if ("string" == typeof t.textContent) return t.textContent;
                                for (t = t.firstChild; t; t = t.nextSibling) n += S(t)
                            } else if (3 === r || 4 === r) return t.nodeValue
                        } else
                            for (; e = t[i++];) n += S(e);
                        return n
                    }, w = e.selectors = {
                        cacheLength: 50,
                        createPseudo: i,
                        match: dt,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function(t) {
                                return t[1] = t[1].replace(vt, yt), t[3] = (t[3] || t[4] || t[5] || "").replace(vt, yt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                            },
                            CHILD: function(t) {
                                return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                            },
                            PSEUDO: function(t) {
                                var e, n = !t[6] && t[2];
                                return dt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ut.test(n) && (e = C(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function(t) {
                                var e = t.replace(vt, yt).toLowerCase();
                                return "*" === t ? function() {
                                    return !0
                                } : function(t) {
                                    return t.nodeName && t.nodeName.toLowerCase() === e
                                }
                            },
                            CLASS: function(t) {
                                var e = R[t + " "];
                                return e || (e = new RegExp("(^|" + tt + ")" + t + "(" + tt + "|$)")) && R(t, function(t) {
                                    return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                                })
                            },
                            ATTR: function(t, n, i) {
                                return function(r) {
                                    var o = e.attr(r, t);
                                    return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(rt, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
                                }
                            },
                            CHILD: function(t, e, n, i, r) {
                                var o = "nth" !== t.slice(0, 3),
                                    s = "last" !== t.slice(-4),
                                    a = "of-type" === e;
                                return 1 === i && 0 === r ? function(t) {
                                    return !!t.parentNode
                                } : function(e, n, c) {
                                    var u, l, d, h, f, p, m = o !== s ? "nextSibling" : "previousSibling",
                                        g = e.parentNode,
                                        v = a && e.nodeName.toLowerCase(),
                                        y = !c && !a,
                                        b = !1;
                                    if (g) {
                                        if (o) {
                                            for (; m;) {
                                                for (h = e; h = h[m];)
                                                    if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                                p = m = "only" === t && !p && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (p = [s ? g.firstChild : g.lastChild], s && y) {
                                            for (h = g, d = h[L] || (h[L] = {}), l = d[h.uniqueID] || (d[h.uniqueID] = {}), u = l[t] || [], f = u[0] === M && u[1], b = f && u[2], h = f && g.childNodes[f]; h = ++f && h && h[m] || (b = f = 0) || p.pop();)
                                                if (1 === h.nodeType && ++b && h === e) {
                                                    l[t] = [M, f, b];
                                                    break
                                                }
                                        } else if (y && (h = e, d = h[L] || (h[L] = {}), l = d[h.uniqueID] || (d[h.uniqueID] = {}), u = l[t] || [], f = u[0] === M && u[1], b = f), !1 === b)
                                            for (;
                                                (h = ++f && h && h[m] || (b = f = 0) || p.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++b || (y && (d = h[L] || (h[L] = {}), l = d[h.uniqueID] || (d[h.uniqueID] = {}), l[t] = [M, b]), h !== e)););
                                        return (b -= r) === i || b % i == 0 && b / i >= 0
                                    }
                                }
                            },
                            PSEUDO: function(t, n) {
                                var r, o = w.pseudos[t] || w.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                                return o[L] ? o(n) : o.length > 1 ? (r = [t, t, "", n], w.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                                    for (var i, r = o(t, n), s = r.length; s--;) i = J(t, r[s]), t[i] = !(e[i] = r[s])
                                }) : function(t) {
                                    return o(t, 0, r)
                                }) : o
                            }
                        },
                        pseudos: {
                            not: i(function(t) {
                                var e = [],
                                    n = [],
                                    r = T(t.replace(ot, "$1"));
                                return r[L] ? i(function(t, e, n, i) {
                                    for (var o, s = r(t, null, i, []), a = t.length; a--;)(o = s[a]) && (t[a] = !(e[a] = o))
                                }) : function(t, i, o) {
                                    return e[0] = t, r(e, null, o, n), e[0] = null, !n.pop()
                                }
                            }),
                            has: i(function(t) {
                                return function(n) {
                                    return e(t, n).length > 0
                                }
                            }),
                            contains: i(function(t) {
                                return t = t.replace(vt, yt),
                                    function(e) {
                                        return (e.textContent || e.innerText || S(e)).indexOf(t) > -1
                                    }
                            }),
                            lang: i(function(t) {
                                return lt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(vt, yt).toLowerCase(),
                                    function(e) {
                                        var n;
                                        do {
                                            if (n = N ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                                        } while ((e = e.parentNode) && 1 === e.nodeType);
                                        return !1
                                    }
                            }),
                            target: function(e) {
                                var n = t.location && t.location.hash;
                                return n && n.slice(1) === e.id
                            },
                            root: function(t) {
                                return t === D
                            },
                            focus: function(t) {
                                return t === P.activeElement && (!P.hasFocus || P.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                            },
                            enabled: a(!1),
                            disabled: a(!0),
                            checked: function(t) {
                                var e = t.nodeName.toLowerCase();
                                return "input" === e && !!t.checked || "option" === e && !!t.selected
                            },
                            selected: function(t) {
                                return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                            },
                            empty: function(t) {
                                for (t = t.firstChild; t; t = t.nextSibling)
                                    if (t.nodeType < 6) return !1;
                                return !0
                            },
                            parent: function(t) {
                                return !w.pseudos.empty(t)
                            },
                            header: function(t) {
                                return ft.test(t.nodeName)
                            },
                            input: function(t) {
                                return ht.test(t.nodeName)
                            },
                            button: function(t) {
                                var e = t.nodeName.toLowerCase();
                                return "input" === e && "button" === t.type || "button" === e
                            },
                            text: function(t) {
                                var e;
                                return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                            },
                            first: c(function() {
                                return [0]
                            }),
                            last: c(function(t, e) {
                                return [e - 1]
                            }),
                            eq: c(function(t, e, n) {
                                return [n < 0 ? n + e : n]
                            }),
                            even: c(function(t, e) {
                                for (var n = 0; n < e; n += 2) t.push(n);
                                return t
                            }),
                            odd: c(function(t, e) {
                                for (var n = 1; n < e; n += 2) t.push(n);
                                return t
                            }),
                            lt: c(function(t, e, n) {
                                for (var i = n < 0 ? n + e : n; --i >= 0;) t.push(i);
                                return t
                            }),
                            gt: c(function(t, e, n) {
                                for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
                                return t
                            })
                        }
                    }, w.pseudos.nth = w.pseudos.eq;
                    for (b in {
                            radio: !0,
                            checkbox: !0,
                            file: !0,
                            password: !0,
                            image: !0
                        }) w.pseudos[b] = function(t) {
                        return function(e) {
                            return "input" === e.nodeName.toLowerCase() && e.type === t
                        }
                    }(b);
                    for (b in {
                            submit: !0,
                            reset: !0
                        }) w.pseudos[b] = function(t) {
                        return function(e) {
                            var n = e.nodeName.toLowerCase();
                            return ("input" === n || "button" === n) && e.type === t
                        }
                    }(b);
                    return l.prototype = w.filters = w.pseudos, w.setFilters = new l, C = e.tokenize = function(t, n) {
                        var i, r, o, s, a, c, u, l = W[t + " "];
                        if (l) return n ? 0 : l.slice(0);
                        for (a = t, c = [], u = w.preFilter; a;) {
                            i && !(r = st.exec(a)) || (r && (a = a.slice(r[0].length) || a), c.push(o = [])), i = !1, (r = at.exec(a)) && (i = r.shift(), o.push({
                                value: i,
                                type: r[0].replace(ot, " ")
                            }), a = a.slice(i.length));
                            for (s in w.filter) !(r = dt[s].exec(a)) || u[s] && !(r = u[s](r)) || (i = r.shift(), o.push({
                                value: i,
                                type: s,
                                matches: r
                            }), a = a.slice(i.length));
                            if (!i) break
                        }
                        return n ? a.length : a ? e.error(t) : W(t, c).slice(0)
                    }, T = e.compile = function(t, e) {
                        var n, i = [],
                            r = [],
                            o = z[t + " "];
                        if (!o) {
                            for (e || (e = C(t)), n = e.length; n--;) o = v(e[n]), o[L] ? i.push(o) : r.push(o);
                            o = z(t, y(r, i)), o.selector = t
                        }
                        return o
                    }, k = e.select = function(t, e, n, i) {
                        var r, o, s, a, c, l = "function" == typeof t && t,
                            h = !i && C(t = l.selector || t);
                        if (n = n || [], 1 === h.length) {
                            if (o = h[0] = h[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && _.getById && 9 === e.nodeType && N && w.relative[o[1].type]) {
                                if (!(e = (w.find.ID(s.matches[0].replace(vt, yt), e) || [])[0])) return n;
                                l && (e = e.parentNode), t = t.slice(o.shift().value.length)
                            }
                            for (r = dt.needsContext.test(t) ? 0 : o.length; r-- && (s = o[r], !w.relative[a = s.type]);)
                                if ((c = w.find[a]) && (i = c(s.matches[0].replace(vt, yt), gt.test(o[0].type) && u(e.parentNode) || e))) {
                                    if (o.splice(r, 1), !(t = i.length && d(o))) return G.apply(n, i), n;
                                    break
                                }
                        }
                        return (l || T(t, h))(i, e, !N, n, !e || gt.test(t) && u(e.parentNode) || e), n
                    }, _.sortStable = L.split("").sort(V).join("") === L, _.detectDuplicates = !!A, j(), _.sortDetached = r(function(t) {
                        return 1 & t.compareDocumentPosition(P.createElement("fieldset"))
                    }), r(function(t) {
                        return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
                    }) || o("type|href|height|width", function(t, e, n) {
                        if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
                    }), _.attributes && r(function(t) {
                        return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
                    }) || o("value", function(t, e, n) {
                        if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
                    }), r(function(t) {
                        return null == t.getAttribute("disabled")
                    }) || o(Z, function(t, e, n) {
                        var i;
                        if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
                    }), e
                }(t);
                dt.find = gt, dt.expr = gt.selectors, dt.expr[":"] = dt.expr.pseudos, dt.uniqueSort = dt.unique = gt.uniqueSort, dt.text = gt.getText, dt.isXMLDoc = gt.isXML, dt.contains = gt.contains, dt.escapeSelector = gt.escape;
                var vt = function(t, e, n) {
                        for (var i = [], r = void 0 !== n;
                            (t = t[e]) && 9 !== t.nodeType;)
                            if (1 === t.nodeType) {
                                if (r && dt(t).is(n)) break;
                                i.push(t)
                            }
                        return i
                    },
                    yt = function(t, e) {
                        for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                        return n
                    },
                    bt = dt.expr.match.needsContext,
                    _t = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
                    wt = /^.[^:#\[\.,]*$/;
                dt.filter = function(t, e, n) {
                    var i = e[0];
                    return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? dt.find.matchesSelector(i, t) ? [i] : [] : dt.find.matches(t, dt.grep(e, function(t) {
                        return 1 === t.nodeType
                    }))
                }, dt.fn.extend({
                    find: function(t) {
                        var e, n, i = this.length,
                            r = this;
                        if ("string" != typeof t) return this.pushStack(dt(t).filter(function() {
                            for (e = 0; e < i; e++)
                                if (dt.contains(r[e], this)) return !0
                        }));
                        for (n = this.pushStack([]), e = 0; e < i; e++) dt.find(t, r[e], n);
                        return i > 1 ? dt.uniqueSort(n) : n
                    },
                    filter: function(t) {
                        return this.pushStack(r(this, t || [], !1))
                    },
                    not: function(t) {
                        return this.pushStack(r(this, t || [], !0))
                    },
                    is: function(t) {
                        return !!r(this, "string" == typeof t && bt.test(t) ? dt(t) : t || [], !1).length
                    }
                });
                var St, xt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
                (dt.fn.init = function(t, e, n) {
                    var i, r;
                    if (!t) return this;
                    if (n = n || St, "string" == typeof t) {
                        if (!(i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : xt.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                        if (i[1]) {
                            if (e = e instanceof dt ? e[0] : e, dt.merge(this, dt.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : Z, !0)), _t.test(i[1]) && dt.isPlainObject(e))
                                for (i in e) dt.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                            return this
                        }
                        return r = Z.getElementById(i[2]), r && (this[0] = r, this.length = 1), this
                    }
                    return t.nodeType ? (this[0] = t, this.length = 1, this) : dt.isFunction(t) ? void 0 !== n.ready ? n.ready(t) : t(dt) : dt.makeArray(t, this)
                }).prototype = dt.fn, St = dt(Z);
                var Ct = /^(?:parents|prev(?:Until|All))/,
                    Tt = {
                        children: !0,
                        contents: !0,
                        next: !0,
                        prev: !0
                    };
                dt.fn.extend({
                    has: function(t) {
                        var e = dt(t, this),
                            n = e.length;
                        return this.filter(function() {
                            for (var t = 0; t < n; t++)
                                if (dt.contains(this, e[t])) return !0
                        })
                    },
                    closest: function(t, e) {
                        var n, i = 0,
                            r = this.length,
                            o = [],
                            s = "string" != typeof t && dt(t);
                        if (!bt.test(t))
                            for (; i < r; i++)
                                for (n = this[i]; n && n !== e; n = n.parentNode)
                                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && dt.find.matchesSelector(n, t))) {
                                        o.push(n);
                                        break
                                    }
                        return this.pushStack(o.length > 1 ? dt.uniqueSort(o) : o)
                    },
                    index: function(t) {
                        return t ? "string" == typeof t ? rt.call(dt(t), this[0]) : rt.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                    },
                    add: function(t, e) {
                        return this.pushStack(dt.uniqueSort(dt.merge(this.get(), dt(t, e))))
                    },
                    addBack: function(t) {
                        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
                    }
                }), dt.each({
                    parent: function(t) {
                        var e = t.parentNode;
                        return e && 11 !== e.nodeType ? e : null
                    },
                    parents: function(t) {
                        return vt(t, "parentNode")
                    },
                    parentsUntil: function(t, e, n) {
                        return vt(t, "parentNode", n)
                    },
                    next: function(t) {
                        return o(t, "nextSibling")
                    },
                    prev: function(t) {
                        return o(t, "previousSibling")
                    },
                    nextAll: function(t) {
                        return vt(t, "nextSibling")
                    },
                    prevAll: function(t) {
                        return vt(t, "previousSibling")
                    },
                    nextUntil: function(t, e, n) {
                        return vt(t, "nextSibling", n)
                    },
                    prevUntil: function(t, e, n) {
                        return vt(t, "previousSibling", n)
                    },
                    siblings: function(t) {
                        return yt((t.parentNode || {}).firstChild, t)
                    },
                    children: function(t) {
                        return yt(t.firstChild)
                    },
                    contents: function(t) {
                        return t.contentDocument || dt.merge([], t.childNodes)
                    }
                }, function(t, e) {
                    dt.fn[t] = function(n, i) {
                        var r = dt.map(this, e, n);
                        return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = dt.filter(i, r)), this.length > 1 && (Tt[t] || dt.uniqueSort(r), Ct.test(t) && r.reverse()), this.pushStack(r)
                    }
                });
                var kt = /\S+/g;
                dt.Callbacks = function(t) {
                    t = "string" == typeof t ? s(t) : dt.extend({}, t);
                    var e, n, i, r, o = [],
                        a = [],
                        c = -1,
                        u = function() {
                            for (r = t.once, i = e = !0; a.length; c = -1)
                                for (n = a.shift(); ++c < o.length;) !1 === o[c].apply(n[0], n[1]) && t.stopOnFalse && (c = o.length, n = !1);
                            t.memory || (n = !1), e = !1, r && (o = n ? [] : "")
                        },
                        l = {
                            add: function() {
                                return o && (n && !e && (c = o.length - 1, a.push(n)), function e(n) {
                                    dt.each(n, function(n, i) {
                                        dt.isFunction(i) ? t.unique && l.has(i) || o.push(i) : i && i.length && "string" !== dt.type(i) && e(i)
                                    })
                                }(arguments), n && !e && u()), this
                            },
                            remove: function() {
                                return dt.each(arguments, function(t, e) {
                                    for (var n;
                                        (n = dt.inArray(e, o, n)) > -1;) o.splice(n, 1), n <= c && c--
                                }), this
                            },
                            has: function(t) {
                                return t ? dt.inArray(t, o) > -1 : o.length > 0
                            },
                            empty: function() {
                                return o && (o = []), this
                            },
                            disable: function() {
                                return r = a = [], o = n = "", this
                            },
                            disabled: function() {
                                return !o
                            },
                            lock: function() {
                                return r = a = [], n || e || (o = n = ""), this
                            },
                            locked: function() {
                                return !!r
                            },
                            fireWith: function(t, n) {
                                return r || (n = n || [], n = [t, n.slice ? n.slice() : n], a.push(n), e || u()), this
                            },
                            fire: function() {
                                return l.fireWith(this, arguments), this
                            },
                            fired: function() {
                                return !!i
                            }
                        };
                    return l
                }, dt.extend({
                    Deferred: function(e) {
                        var n = [
                                ["notify", "progress", dt.Callbacks("memory"), dt.Callbacks("memory"), 2],
                                ["resolve", "done", dt.Callbacks("once memory"), dt.Callbacks("once memory"), 0, "resolved"],
                                ["reject", "fail", dt.Callbacks("once memory"), dt.Callbacks("once memory"), 1, "rejected"]
                            ],
                            i = "pending",
                            r = {
                                state: function() {
                                    return i
                                },
                                always: function() {
                                    return o.done(arguments).fail(arguments), this
                                },
                                catch: function(t) {
                                    return r.then(null, t)
                                },
                                pipe: function() {
                                    var t = arguments;
                                    return dt.Deferred(function(e) {
                                        dt.each(n, function(n, i) {
                                            var r = dt.isFunction(t[i[4]]) && t[i[4]];
                                            o[i[1]](function() {
                                                var t = r && r.apply(this, arguments);
                                                t && dt.isFunction(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[i[0] + "With"](this, r ? [t] : arguments)
                                            })
                                        }), t = null
                                    }).promise()
                                },
                                then: function(e, i, r) {
                                    function o(e, n, i, r) {
                                        return function() {
                                            var u = this,
                                                l = arguments,
                                                d = function() {
                                                    var t, d;
                                                    if (!(e < s)) {
                                                        if ((t = i.apply(u, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                                        d = t && ("object" == typeof t || "function" == typeof t) && t.then,
                                                            dt.isFunction(d) ? r ? d.call(t, o(s, n, a, r), o(s, n, c, r)) : (s++, d.call(t, o(s, n, a, r), o(s, n, c, r), o(s, n, a, n.notifyWith))) : (i !== a && (u = void 0, l = [t]), (r || n.resolveWith)(u, l))
                                                    }
                                                },
                                                h = r ? d : function() {
                                                    try {
                                                        d()
                                                    } catch (t) {
                                                        dt.Deferred.exceptionHook && dt.Deferred.exceptionHook(t, h.stackTrace), e + 1 >= s && (i !== c && (u = void 0, l = [t]), n.rejectWith(u, l))
                                                    }
                                                };
                                            e ? h() : (dt.Deferred.getStackHook && (h.stackTrace = dt.Deferred.getStackHook()), t.setTimeout(h))
                                        }
                                    }
                                    var s = 0;
                                    return dt.Deferred(function(t) {
                                        n[0][3].add(o(0, t, dt.isFunction(r) ? r : a, t.notifyWith)), n[1][3].add(o(0, t, dt.isFunction(e) ? e : a)), n[2][3].add(o(0, t, dt.isFunction(i) ? i : c))
                                    }).promise()
                                },
                                promise: function(t) {
                                    return null != t ? dt.extend(t, r) : r
                                }
                            },
                            o = {};
                        return dt.each(n, function(t, e) {
                            var s = e[2],
                                a = e[5];
                            r[e[1]] = s.add, a && s.add(function() {
                                i = a
                            }, n[3 - t][2].disable, n[0][2].lock), s.add(e[3].fire), o[e[0]] = function() {
                                return o[e[0] + "With"](this === o ? void 0 : this, arguments), this
                            }, o[e[0] + "With"] = s.fireWith
                        }), r.promise(o), e && e.call(o, o), o
                    },
                    when: function(t) {
                        var e = arguments.length,
                            n = e,
                            i = Array(n),
                            r = et.call(arguments),
                            o = dt.Deferred(),
                            s = function(t) {
                                return function(n) {
                                    i[t] = this, r[t] = arguments.length > 1 ? et.call(arguments) : n, --e || o.resolveWith(i, r)
                                }
                            };
                        if (e <= 1 && (u(t, o.done(s(n)).resolve, o.reject), "pending" === o.state() || dt.isFunction(r[n] && r[n].then))) return o.then();
                        for (; n--;) u(r[n], s(n), o.reject);
                        return o.promise()
                    }
                });
                var $t = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                dt.Deferred.exceptionHook = function(e, n) {
                    t.console && t.console.warn && e && $t.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n)
                }, dt.readyException = function(e) {
                    t.setTimeout(function() {
                        throw e
                    })
                };
                var Et = dt.Deferred();
                dt.fn.ready = function(t) {
                    return Et.then(t).catch(function(t) {
                        dt.readyException(t)
                    }), this
                }, dt.extend({
                    isReady: !1,
                    readyWait: 1,
                    holdReady: function(t) {
                        t ? dt.readyWait++ : dt.ready(!0)
                    },
                    ready: function(t) {
                        (!0 === t ? --dt.readyWait : dt.isReady) || (dt.isReady = !0, !0 !== t && --dt.readyWait > 0 || Et.resolveWith(Z, [dt]))
                    }
                }), dt.ready.then = Et.then, "complete" === Z.readyState || "loading" !== Z.readyState && !Z.documentElement.doScroll ? t.setTimeout(dt.ready) : (Z.addEventListener("DOMContentLoaded", l), t.addEventListener("load", l));
                var At = function(t, e, n, i, r, o, s) {
                        var a = 0,
                            c = t.length,
                            u = null == n;
                        if ("object" === dt.type(n)) {
                            r = !0;
                            for (a in n) At(t, e, a, n[a], !0, o, s)
                        } else if (void 0 !== i && (r = !0, dt.isFunction(i) || (s = !0), u && (s ? (e.call(t, i), e = null) : (u = e, e = function(t, e, n) {
                                return u.call(dt(t), n)
                            })), e))
                            for (; a < c; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
                        return r ? t : u ? e.call(t) : c ? e(t[0], n) : o
                    },
                    jt = function(t) {
                        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
                    };
                d.uid = 1, d.prototype = {
                    cache: function(t) {
                        var e = t[this.expando];
                        return e || (e = {}, jt(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                            value: e,
                            configurable: !0
                        }))), e
                    },
                    set: function(t, e, n) {
                        var i, r = this.cache(t);
                        if ("string" == typeof e) r[dt.camelCase(e)] = n;
                        else
                            for (i in e) r[dt.camelCase(i)] = e[i];
                        return r
                    },
                    get: function(t, e) {
                        return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][dt.camelCase(e)]
                    },
                    access: function(t, e, n) {
                        return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
                    },
                    remove: function(t, e) {
                        var n, i = t[this.expando];
                        if (void 0 !== i) {
                            if (void 0 !== e) {
                                dt.isArray(e) ? e = e.map(dt.camelCase) : (e = dt.camelCase(e), e = e in i ? [e] : e.match(kt) || []), n = e.length;
                                for (; n--;) delete i[e[n]]
                            }(void 0 === e || dt.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                        }
                    },
                    hasData: function(t) {
                        var e = t[this.expando];
                        return void 0 !== e && !dt.isEmptyObject(e)
                    }
                };
                var Pt = new d,
                    Dt = new d,
                    Nt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                    Ot = /[A-Z]/g;
                dt.extend({
                    hasData: function(t) {
                        return Dt.hasData(t) || Pt.hasData(t)
                    },
                    data: function(t, e, n) {
                        return Dt.access(t, e, n)
                    },
                    removeData: function(t, e) {
                        Dt.remove(t, e)
                    },
                    _data: function(t, e, n) {
                        return Pt.access(t, e, n)
                    },
                    _removeData: function(t, e) {
                        Pt.remove(t, e)
                    }
                }), dt.fn.extend({
                    data: function(t, e) {
                        var n, i, r, o = this[0],
                            s = o && o.attributes;
                        if (void 0 === t) {
                            if (this.length && (r = Dt.get(o), 1 === o.nodeType && !Pt.get(o, "hasDataAttrs"))) {
                                for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = dt.camelCase(i.slice(5)), h(o, i, r[i])));
                                Pt.set(o, "hasDataAttrs", !0)
                            }
                            return r
                        }
                        return "object" == typeof t ? this.each(function() {
                            Dt.set(this, t)
                        }) : At(this, function(e) {
                            var n;
                            if (o && void 0 === e) {
                                if (void 0 !== (n = Dt.get(o, t))) return n;
                                if (void 0 !== (n = h(o, t))) return n
                            } else this.each(function() {
                                Dt.set(this, t, e)
                            })
                        }, null, e, arguments.length > 1, null, !0)
                    },
                    removeData: function(t) {
                        return this.each(function() {
                            Dt.remove(this, t)
                        })
                    }
                }), dt.extend({
                    queue: function(t, e, n) {
                        var i;
                        if (t) return e = (e || "fx") + "queue", i = Pt.get(t, e), n && (!i || dt.isArray(n) ? i = Pt.access(t, e, dt.makeArray(n)) : i.push(n)), i || []
                    },
                    dequeue: function(t, e) {
                        e = e || "fx";
                        var n = dt.queue(t, e),
                            i = n.length,
                            r = n.shift(),
                            o = dt._queueHooks(t, e),
                            s = function() {
                                dt.dequeue(t, e)
                            };
                        "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, s, o)), !i && o && o.empty.fire()
                    },
                    _queueHooks: function(t, e) {
                        var n = e + "queueHooks";
                        return Pt.get(t, n) || Pt.access(t, n, {
                            empty: dt.Callbacks("once memory").add(function() {
                                Pt.remove(t, [e + "queue", n])
                            })
                        })
                    }
                }), dt.fn.extend({
                    queue: function(t, e) {
                        var n = 2;
                        return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? dt.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                            var n = dt.queue(this, t, e);
                            dt._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && dt.dequeue(this, t)
                        })
                    },
                    dequeue: function(t) {
                        return this.each(function() {
                            dt.dequeue(this, t)
                        })
                    },
                    clearQueue: function(t) {
                        return this.queue(t || "fx", [])
                    },
                    promise: function(t, e) {
                        var n, i = 1,
                            r = dt.Deferred(),
                            o = this,
                            s = this.length,
                            a = function() {
                                --i || r.resolveWith(o, [o])
                            };
                        for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;)(n = Pt.get(o[s], t + "queueHooks")) && n.empty && (i++, n.empty.add(a));
                        return a(), r.promise(e)
                    }
                });
                var It = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                    Ft = new RegExp("^(?:([+-])=|)(" + It + ")([a-z%]*)$", "i"),
                    Bt = ["Top", "Right", "Bottom", "Left"],
                    Lt = function(t, e) {
                        return t = e || t, "none" === t.style.display || "" === t.style.display && dt.contains(t.ownerDocument, t) && "none" === dt.css(t, "display")
                    },
                    Ht = function(t, e, n, i) {
                        var r, o, s = {};
                        for (o in e) s[o] = t.style[o], t.style[o] = e[o];
                        r = n.apply(t, i || []);
                        for (o in e) t.style[o] = s[o];
                        return r
                    },
                    Mt = {};
                dt.fn.extend({
                    show: function() {
                        return m(this, !0)
                    },
                    hide: function() {
                        return m(this)
                    },
                    toggle: function(t) {
                        return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                            Lt(this) ? dt(this).show() : dt(this).hide()
                        })
                    }
                });
                var qt = /^(?:checkbox|radio)$/i,
                    Rt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
                    Wt = /^$|\/(?:java|ecma)script/i,
                    zt = {
                        option: [1, "<select multiple='multiple'>", "</select>"],
                        thead: [1, "<table>", "</table>"],
                        col: [2, "<table><colgroup>", "</colgroup></table>"],
                        tr: [2, "<table><tbody>", "</tbody></table>"],
                        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                        _default: [0, "", ""]
                    };
                zt.optgroup = zt.option, zt.tbody = zt.tfoot = zt.colgroup = zt.caption = zt.thead, zt.th = zt.td;
                var Vt = /<|&#?\w+;/;
                ! function() {
                    var t = Z.createDocumentFragment(),
                        e = t.appendChild(Z.createElement("div")),
                        n = Z.createElement("input");
                    n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), lt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", lt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
                }();
                var Ut = Z.documentElement,
                    Xt = /^key/,
                    Yt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                    Qt = /^([^.]*)(?:\.(.+)|)/;
                dt.event = {
                    global: {},
                    add: function(t, e, n, i, r) {
                        var o, s, a, c, u, l, d, h, f, p, m, g = Pt.get(t);
                        if (g)
                            for (n.handler && (o = n, n = o.handler, r = o.selector), r && dt.find.matchesSelector(Ut, r), n.guid || (n.guid = dt.guid++), (c = g.events) || (c = g.events = {}), (s = g.handle) || (s = g.handle = function(e) {
                                    return void 0 !== dt && dt.event.triggered !== e.type ? dt.event.dispatch.apply(t, arguments) : void 0
                                }), e = (e || "").match(kt) || [""], u = e.length; u--;) a = Qt.exec(e[u]) || [], f = m = a[1], p = (a[2] || "").split(".").sort(), f && (d = dt.event.special[f] || {}, f = (r ? d.delegateType : d.bindType) || f, d = dt.event.special[f] || {}, l = dt.extend({
                                type: f,
                                origType: m,
                                data: i,
                                handler: n,
                                guid: n.guid,
                                selector: r,
                                needsContext: r && dt.expr.match.needsContext.test(r),
                                namespace: p.join(".")
                            }, o), (h = c[f]) || (h = c[f] = [], h.delegateCount = 0, d.setup && !1 !== d.setup.call(t, i, p, s) || t.addEventListener && t.addEventListener(f, s)), d.add && (d.add.call(t, l), l.handler.guid || (l.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, l) : h.push(l), dt.event.global[f] = !0)
                    },
                    remove: function(t, e, n, i, r) {
                        var o, s, a, c, u, l, d, h, f, p, m, g = Pt.hasData(t) && Pt.get(t);
                        if (g && (c = g.events)) {
                            for (e = (e || "").match(kt) || [""], u = e.length; u--;)
                                if (a = Qt.exec(e[u]) || [], f = m = a[1], p = (a[2] || "").split(".").sort(), f) {
                                    for (d = dt.event.special[f] || {}, f = (i ? d.delegateType : d.bindType) || f, h = c[f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = h.length; o--;) l = h[o], !r && m !== l.origType || n && n.guid !== l.guid || a && !a.test(l.namespace) || i && i !== l.selector && ("**" !== i || !l.selector) || (h.splice(o, 1), l.selector && h.delegateCount--, d.remove && d.remove.call(t, l));
                                    s && !h.length && (d.teardown && !1 !== d.teardown.call(t, p, g.handle) || dt.removeEvent(t, f, g.handle), delete c[f])
                                } else
                                    for (f in c) dt.event.remove(t, f + e[u], n, i, !0);
                            dt.isEmptyObject(c) && Pt.remove(t, "handle events")
                        }
                    },
                    dispatch: function(t) {
                        var e, n, i, r, o, s, a = dt.event.fix(t),
                            c = new Array(arguments.length),
                            u = (Pt.get(this, "events") || {})[a.type] || [],
                            l = dt.event.special[a.type] || {};
                        for (c[0] = a, e = 1; e < arguments.length; e++) c[e] = arguments[e];
                        if (a.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, a)) {
                            for (s = dt.event.handlers.call(this, a, u), e = 0;
                                (r = s[e++]) && !a.isPropagationStopped();)
                                for (a.currentTarget = r.elem, n = 0;
                                    (o = r.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (i = ((dt.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, c)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                            return l.postDispatch && l.postDispatch.call(this, a), a.result
                        }
                    },
                    handlers: function(t, e) {
                        var n, i, r, o, s = [],
                            a = e.delegateCount,
                            c = t.target;
                        if (a && c.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                            for (; c !== this; c = c.parentNode || this)
                                if (1 === c.nodeType && (!0 !== c.disabled || "click" !== t.type)) {
                                    for (i = [], n = 0; n < a; n++) o = e[n], r = o.selector + " ", void 0 === i[r] && (i[r] = o.needsContext ? dt(r, this).index(c) > -1 : dt.find(r, this, null, [c]).length), i[r] && i.push(o);
                                    i.length && s.push({
                                        elem: c,
                                        handlers: i
                                    })
                                }
                        return a < e.length && s.push({
                            elem: this,
                            handlers: e.slice(a)
                        }), s
                    },
                    addProp: function(t, e) {
                        Object.defineProperty(dt.Event.prototype, t, {
                            enumerable: !0,
                            configurable: !0,
                            get: dt.isFunction(e) ? function() {
                                if (this.originalEvent) return e(this.originalEvent)
                            } : function() {
                                if (this.originalEvent) return this.originalEvent[t]
                            },
                            set: function(e) {
                                Object.defineProperty(this, t, {
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                    value: e
                                })
                            }
                        })
                    },
                    fix: function(t) {
                        return t[dt.expando] ? t : new dt.Event(t)
                    },
                    special: {
                        load: {
                            noBubble: !0
                        },
                        focus: {
                            trigger: function() {
                                if (this !== w() && this.focus) return this.focus(), !1
                            },
                            delegateType: "focusin"
                        },
                        blur: {
                            trigger: function() {
                                if (this === w() && this.blur) return this.blur(), !1
                            },
                            delegateType: "focusout"
                        },
                        click: {
                            trigger: function() {
                                if ("checkbox" === this.type && this.click && dt.nodeName(this, "input")) return this.click(), !1
                            },
                            _default: function(t) {
                                return dt.nodeName(t.target, "a")
                            }
                        },
                        beforeunload: {
                            postDispatch: function(t) {
                                void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                            }
                        }
                    }
                }, dt.removeEvent = function(t, e, n) {
                    t.removeEventListener && t.removeEventListener(e, n)
                }, dt.Event = function(t, e) {
                    if (!(this instanceof dt.Event)) return new dt.Event(t, e);
                    t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? b : _, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && dt.extend(this, e), this.timeStamp = t && t.timeStamp || dt.now(), this[dt.expando] = !0
                }, dt.Event.prototype = {
                    constructor: dt.Event,
                    isDefaultPrevented: _,
                    isPropagationStopped: _,
                    isImmediatePropagationStopped: _,
                    isSimulated: !1,
                    preventDefault: function() {
                        var t = this.originalEvent;
                        this.isDefaultPrevented = b, t && !this.isSimulated && t.preventDefault()
                    },
                    stopPropagation: function() {
                        var t = this.originalEvent;
                        this.isPropagationStopped = b, t && !this.isSimulated && t.stopPropagation()
                    },
                    stopImmediatePropagation: function() {
                        var t = this.originalEvent;
                        this.isImmediatePropagationStopped = b, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
                    }
                }, dt.each({
                    altKey: !0,
                    bubbles: !0,
                    cancelable: !0,
                    changedTouches: !0,
                    ctrlKey: !0,
                    detail: !0,
                    eventPhase: !0,
                    metaKey: !0,
                    pageX: !0,
                    pageY: !0,
                    shiftKey: !0,
                    view: !0,
                    char: !0,
                    charCode: !0,
                    key: !0,
                    keyCode: !0,
                    button: !0,
                    buttons: !0,
                    clientX: !0,
                    clientY: !0,
                    offsetX: !0,
                    offsetY: !0,
                    pointerId: !0,
                    pointerType: !0,
                    screenX: !0,
                    screenY: !0,
                    targetTouches: !0,
                    toElement: !0,
                    touches: !0,
                    which: function(t) {
                        var e = t.button;
                        return null == t.which && Xt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && Yt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
                    }
                }, dt.event.addProp), dt.each({
                    mouseenter: "mouseover",
                    mouseleave: "mouseout",
                    pointerenter: "pointerover",
                    pointerleave: "pointerout"
                }, function(t, e) {
                    dt.event.special[t] = {
                        delegateType: e,
                        bindType: e,
                        handle: function(t) {
                            var n, i = this,
                                r = t.relatedTarget,
                                o = t.handleObj;
                            return r && (r === i || dt.contains(i, r)) || (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
                        }
                    }
                }), dt.fn.extend({
                    on: function(t, e, n, i) {
                        return S(this, t, e, n, i)
                    },
                    one: function(t, e, n, i) {
                        return S(this, t, e, n, i, 1)
                    },
                    off: function(t, e, n) {
                        var i, r;
                        if (t && t.preventDefault && t.handleObj) return i = t.handleObj, dt(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                        if ("object" == typeof t) {
                            for (r in t) this.off(r, e, t[r]);
                            return this
                        }
                        return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = _), this.each(function() {
                            dt.event.remove(this, t, n, e)
                        })
                    }
                });
                var Gt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
                    Kt = /<script|<style|<link/i,
                    Jt = /checked\s*(?:[^=]|=\s*.checked.)/i,
                    Zt = /^true\/(.*)/,
                    te = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
                dt.extend({
                    htmlPrefilter: function(t) {
                        return t.replace(Gt, "<$1></$2>")
                    },
                    clone: function(t, e, n) {
                        var i, r, o, s, a = t.cloneNode(!0),
                            c = dt.contains(t.ownerDocument, t);
                        if (!(lt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || dt.isXMLDoc(t)))
                            for (s = g(a), o = g(t), i = 0, r = o.length; i < r; i++) $(o[i], s[i]);
                        if (e)
                            if (n)
                                for (o = o || g(t), s = s || g(a), i = 0, r = o.length; i < r; i++) k(o[i], s[i]);
                            else k(t, a);
                        return s = g(a, "script"), s.length > 0 && v(s, !c && g(t, "script")), a
                    },
                    cleanData: function(t) {
                        for (var e, n, i, r = dt.event.special, o = 0; void 0 !== (n = t[o]); o++)
                            if (jt(n)) {
                                if (e = n[Pt.expando]) {
                                    if (e.events)
                                        for (i in e.events) r[i] ? dt.event.remove(n, i) : dt.removeEvent(n, i, e.handle);
                                    n[Pt.expando] = void 0
                                }
                                n[Dt.expando] && (n[Dt.expando] = void 0)
                            }
                    }
                }), dt.fn.extend({
                    detach: function(t) {
                        return A(this, t, !0)
                    },
                    remove: function(t) {
                        return A(this, t)
                    },
                    text: function(t) {
                        return At(this, function(t) {
                            return void 0 === t ? dt.text(this) : this.empty().each(function() {
                                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                            })
                        }, null, t, arguments.length)
                    },
                    append: function() {
                        return E(this, arguments, function(t) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                x(this, t).appendChild(t)
                            }
                        })
                    },
                    prepend: function() {
                        return E(this, arguments, function(t) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var e = x(this, t);
                                e.insertBefore(t, e.firstChild)
                            }
                        })
                    },
                    before: function() {
                        return E(this, arguments, function(t) {
                            this.parentNode && this.parentNode.insertBefore(t, this)
                        })
                    },
                    after: function() {
                        return E(this, arguments, function(t) {
                            this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                        })
                    },
                    empty: function() {
                        for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (dt.cleanData(g(t, !1)), t.textContent = "");
                        return this
                    },
                    clone: function(t, e) {
                        return t = null != t && t, e = null == e ? t : e, this.map(function() {
                            return dt.clone(this, t, e)
                        })
                    },
                    html: function(t) {
                        return At(this, function(t) {
                            var e = this[0] || {},
                                n = 0,
                                i = this.length;
                            if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                            if ("string" == typeof t && !Kt.test(t) && !zt[(Rt.exec(t) || ["", ""])[1].toLowerCase()]) {
                                t = dt.htmlPrefilter(t);
                                try {
                                    for (; n < i; n++) e = this[n] || {}, 1 === e.nodeType && (dt.cleanData(g(e, !1)), e.innerHTML = t);
                                    e = 0
                                } catch (t) {}
                            }
                            e && this.empty().append(t)
                        }, null, t, arguments.length)
                    },
                    replaceWith: function() {
                        var t = [];
                        return E(this, arguments, function(e) {
                            var n = this.parentNode;
                            dt.inArray(this, t) < 0 && (dt.cleanData(g(this)), n && n.replaceChild(e, this))
                        }, t)
                    }
                }), dt.each({
                    appendTo: "append",
                    prependTo: "prepend",
                    insertBefore: "before",
                    insertAfter: "after",
                    replaceAll: "replaceWith"
                }, function(t, e) {
                    dt.fn[t] = function(t) {
                        for (var n, i = [], r = dt(t), o = r.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), dt(r[s])[e](n), it.apply(i, n.get());
                        return this.pushStack(i)
                    }
                });
                var ee = /^margin/,
                    ne = new RegExp("^(" + It + ")(?!px)[a-z%]+$", "i"),
                    ie = function(e) {
                        var n = e.ownerDocument.defaultView;
                        return n && n.opener || (n = t), n.getComputedStyle(e)
                    };
                ! function() {
                    function e() {
                        if (a) {
                            a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Ut.appendChild(s);
                            var e = t.getComputedStyle(a);
                            n = "1%" !== e.top, o = "2px" === e.marginLeft, i = "4px" === e.width, a.style.marginRight = "50%", r = "4px" === e.marginRight, Ut.removeChild(s), a = null
                        }
                    }
                    var n, i, r, o, s = Z.createElement("div"),
                        a = Z.createElement("div");
                    a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", lt.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), dt.extend(lt, {
                        pixelPosition: function() {
                            return e(), n
                        },
                        boxSizingReliable: function() {
                            return e(), i
                        },
                        pixelMarginRight: function() {
                            return e(), r
                        },
                        reliableMarginLeft: function() {
                            return e(), o
                        }
                    }))
                }();
                var re = /^(none|table(?!-c[ea]).+)/,
                    oe = {
                        position: "absolute",
                        visibility: "hidden",
                        display: "block"
                    },
                    se = {
                        letterSpacing: "0",
                        fontWeight: "400"
                    },
                    ae = ["Webkit", "Moz", "ms"],
                    ce = Z.createElement("div").style;
                dt.extend({
                    cssHooks: {
                        opacity: {
                            get: function(t, e) {
                                if (e) {
                                    var n = j(t, "opacity");
                                    return "" === n ? "1" : n
                                }
                            }
                        }
                    },
                    cssNumber: {
                        animationIterationCount: !0,
                        columnCount: !0,
                        fillOpacity: !0,
                        flexGrow: !0,
                        flexShrink: !0,
                        fontWeight: !0,
                        lineHeight: !0,
                        opacity: !0,
                        order: !0,
                        orphans: !0,
                        widows: !0,
                        zIndex: !0,
                        zoom: !0
                    },
                    cssProps: {
                        float: "cssFloat"
                    },
                    style: function(t, e, n, i) {
                        if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                            var r, o, s, a = dt.camelCase(e),
                                c = t.style;
                            if (e = dt.cssProps[a] || (dt.cssProps[a] = D(a) || a), s = dt.cssHooks[e] || dt.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(t, !1, i)) ? r : c[e];
                            o = typeof n, "string" === o && (r = Ft.exec(n)) && r[1] && (n = f(t, e, r), o = "number"), null != n && n === n && ("number" === o && (n += r && r[3] || (dt.cssNumber[a] ? "" : "px")), lt.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (c[e] = "inherit"), s && "set" in s && void 0 === (n = s.set(t, n, i)) || (c[e] = n))
                        }
                    },
                    css: function(t, e, n, i) {
                        var r, o, s, a = dt.camelCase(e);
                        return e = dt.cssProps[a] || (dt.cssProps[a] = D(a) || a), s = dt.cssHooks[e] || dt.cssHooks[a], s && "get" in s && (r = s.get(t, !0, n)), void 0 === r && (r = j(t, e, i)), "normal" === r && e in se && (r = se[e]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
                    }
                }), dt.each(["height", "width"], function(t, e) {
                    dt.cssHooks[e] = {
                        get: function(t, n, i) {
                            if (n) return !re.test(dt.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? I(t, e, i) : Ht(t, oe, function() {
                                return I(t, e, i)
                            })
                        },
                        set: function(t, n, i) {
                            var r, o = i && ie(t),
                                s = i && O(t, e, i, "border-box" === dt.css(t, "boxSizing", !1, o), o);
                            return s && (r = Ft.exec(n)) && "px" !== (r[3] || "px") && (t.style[e] = n, n = dt.css(t, e)), N(t, n, s)
                        }
                    }
                }), dt.cssHooks.marginLeft = P(lt.reliableMarginLeft, function(t, e) {
                    if (e) return (parseFloat(j(t, "marginLeft")) || t.getBoundingClientRect().left - Ht(t, {
                        marginLeft: 0
                    }, function() {
                        return t.getBoundingClientRect().left
                    })) + "px"
                }), dt.each({
                    margin: "",
                    padding: "",
                    border: "Width"
                }, function(t, e) {
                    dt.cssHooks[t + e] = {
                        expand: function(n) {
                            for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[t + Bt[i] + e] = o[i] || o[i - 2] || o[0];
                            return r
                        }
                    }, ee.test(t) || (dt.cssHooks[t + e].set = N)
                }), dt.fn.extend({
                    css: function(t, e) {
                        return At(this, function(t, e, n) {
                            var i, r, o = {},
                                s = 0;
                            if (dt.isArray(e)) {
                                for (i = ie(t), r = e.length; s < r; s++) o[e[s]] = dt.css(t, e[s], !1, i);
                                return o
                            }
                            return void 0 !== n ? dt.style(t, e, n) : dt.css(t, e)
                        }, t, e, arguments.length > 1)
                    }
                }), dt.Tween = F, F.prototype = {
                    constructor: F,
                    init: function(t, e, n, i, r, o) {
                        this.elem = t, this.prop = n, this.easing = r || dt.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (dt.cssNumber[n] ? "" : "px")
                    },
                    cur: function() {
                        var t = F.propHooks[this.prop];
                        return t && t.get ? t.get(this) : F.propHooks._default.get(this)
                    },
                    run: function(t) {
                        var e, n = F.propHooks[this.prop];
                        return this.options.duration ? this.pos = e = dt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : F.propHooks._default.set(this), this
                    }
                }, F.prototype.init.prototype = F.prototype, F.propHooks = {
                    _default: {
                        get: function(t) {
                            var e;
                            return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = dt.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
                        },
                        set: function(t) {
                            dt.fx.step[t.prop] ? dt.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[dt.cssProps[t.prop]] && !dt.cssHooks[t.prop] ? t.elem[t.prop] = t.now : dt.style(t.elem, t.prop, t.now + t.unit)
                        }
                    }
                }, F.propHooks.scrollTop = F.propHooks.scrollLeft = {
                    set: function(t) {
                        t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
                    }
                }, dt.easing = {
                    linear: function(t) {
                        return t
                    },
                    swing: function(t) {
                        return .5 - Math.cos(t * Math.PI) / 2
                    },
                    _default: "swing"
                }, dt.fx = F.prototype.init, dt.fx.step = {};
                var ue, le, de = /^(?:toggle|show|hide)$/,
                    he = /queueHooks$/;
                dt.Animation = dt.extend(W, {
                        tweeners: {
                            "*": [function(t, e) {
                                var n = this.createTween(t, e);
                                return f(n.elem, t, Ft.exec(e), n), n
                            }]
                        },
                        tweener: function(t, e) {
                            dt.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(kt);
                            for (var n, i = 0, r = t.length; i < r; i++) n = t[i], W.tweeners[n] = W.tweeners[n] || [], W.tweeners[n].unshift(e)
                        },
                        prefilters: [q],
                        prefilter: function(t, e) {
                            e ? W.prefilters.unshift(t) : W.prefilters.push(t)
                        }
                    }), dt.speed = function(t, e, n) {
                        var i = t && "object" == typeof t ? dt.extend({}, t) : {
                            complete: n || !n && e || dt.isFunction(t) && t,
                            duration: t,
                            easing: n && e || e && !dt.isFunction(e) && e
                        };
                        return dt.fx.off || Z.hidden ? i.duration = 0 : i.duration = "number" == typeof i.duration ? i.duration : i.duration in dt.fx.speeds ? dt.fx.speeds[i.duration] : dt.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                            dt.isFunction(i.old) && i.old.call(this), i.queue && dt.dequeue(this, i.queue)
                        }, i
                    }, dt.fn.extend({
                        fadeTo: function(t, e, n, i) {
                            return this.filter(Lt).css("opacity", 0).show().end().animate({
                                opacity: e
                            }, t, n, i)
                        },
                        animate: function(t, e, n, i) {
                            var r = dt.isEmptyObject(t),
                                o = dt.speed(e, n, i),
                                s = function() {
                                    var e = W(this, dt.extend({}, t), o);
                                    (r || Pt.get(this, "finish")) && e.stop(!0)
                                };
                            return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
                        },
                        stop: function(t, e, n) {
                            var i = function(t) {
                                var e = t.stop;
                                delete t.stop, e(n)
                            };
                            return "string" != typeof t && (n = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function() {
                                var e = !0,
                                    r = null != t && t + "queueHooks",
                                    o = dt.timers,
                                    s = Pt.get(this);
                                if (r) s[r] && s[r].stop && i(s[r]);
                                else
                                    for (r in s) s[r] && s[r].stop && he.test(r) && i(s[r]);
                                for (r = o.length; r--;) o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(n), e = !1, o.splice(r, 1));
                                !e && n || dt.dequeue(this, t)
                            })
                        },
                        finish: function(t) {
                            return !1 !== t && (t = t || "fx"), this.each(function() {
                                var e, n = Pt.get(this),
                                    i = n[t + "queue"],
                                    r = n[t + "queueHooks"],
                                    o = dt.timers,
                                    s = i ? i.length : 0;
                                for (n.finish = !0, dt.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                                for (e = 0; e < s; e++) i[e] && i[e].finish && i[e].finish.call(this);
                                delete n.finish
                            })
                        }
                    }), dt.each(["toggle", "show", "hide"], function(t, e) {
                        var n = dt.fn[e];
                        dt.fn[e] = function(t, i, r) {
                            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(H(e, !0), t, i, r)
                        }
                    }), dt.each({
                        slideDown: H("show"),
                        slideUp: H("hide"),
                        slideToggle: H("toggle"),
                        fadeIn: {
                            opacity: "show"
                        },
                        fadeOut: {
                            opacity: "hide"
                        },
                        fadeToggle: {
                            opacity: "toggle"
                        }
                    }, function(t, e) {
                        dt.fn[t] = function(t, n, i) {
                            return this.animate(e, t, n, i)
                        }
                    }), dt.timers = [], dt.fx.tick = function() {
                        var t, e = 0,
                            n = dt.timers;
                        for (ue = dt.now(); e < n.length; e++)(t = n[e])() || n[e] !== t || n.splice(e--, 1);
                        n.length || dt.fx.stop(), ue = void 0
                    }, dt.fx.timer = function(t) {
                        dt.timers.push(t), t() ? dt.fx.start() : dt.timers.pop()
                    }, dt.fx.interval = 13, dt.fx.start = function() {
                        le || (le = t.requestAnimationFrame ? t.requestAnimationFrame(B) : t.setInterval(dt.fx.tick, dt.fx.interval))
                    }, dt.fx.stop = function() {
                        t.cancelAnimationFrame ? t.cancelAnimationFrame(le) : t.clearInterval(le), le = null
                    }, dt.fx.speeds = {
                        slow: 600,
                        fast: 200,
                        _default: 400
                    }, dt.fn.delay = function(e, n) {
                        return e = dt.fx ? dt.fx.speeds[e] || e : e, n = n || "fx", this.queue(n, function(n, i) {
                            var r = t.setTimeout(n, e);
                            i.stop = function() {
                                t.clearTimeout(r)
                            }
                        })
                    },
                    function() {
                        var t = Z.createElement("input"),
                            e = Z.createElement("select"),
                            n = e.appendChild(Z.createElement("option"));
                        t.type = "checkbox", lt.checkOn = "" !== t.value, lt.optSelected = n.selected, t = Z.createElement("input"), t.value = "t", t.type = "radio", lt.radioValue = "t" === t.value
                    }();
                var fe, pe = dt.expr.attrHandle;
                dt.fn.extend({
                    attr: function(t, e) {
                        return At(this, dt.attr, t, e, arguments.length > 1)
                    },
                    removeAttr: function(t) {
                        return this.each(function() {
                            dt.removeAttr(this, t)
                        })
                    }
                }), dt.extend({
                    attr: function(t, e, n) {
                        var i, r, o = t.nodeType;
                        if (3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? dt.prop(t, e, n) : (1 === o && dt.isXMLDoc(t) || (r = dt.attrHooks[e.toLowerCase()] || (dt.expr.match.bool.test(e) ? fe : void 0)), void 0 !== n ? null === n ? void dt.removeAttr(t, e) : r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : r && "get" in r && null !== (i = r.get(t, e)) ? i : (i = dt.find.attr(t, e), null == i ? void 0 : i))
                    },
                    attrHooks: {
                        type: {
                            set: function(t, e) {
                                if (!lt.radioValue && "radio" === e && dt.nodeName(t, "input")) {
                                    var n = t.value;
                                    return t.setAttribute("type", e), n && (t.value = n), e
                                }
                            }
                        }
                    },
                    removeAttr: function(t, e) {
                        var n, i = 0,
                            r = e && e.match(kt);
                        if (r && 1 === t.nodeType)
                            for (; n = r[i++];) t.removeAttribute(n)
                    }
                }), fe = {
                    set: function(t, e, n) {
                        return !1 === e ? dt.removeAttr(t, n) : t.setAttribute(n, n), n
                    }
                }, dt.each(dt.expr.match.bool.source.match(/\w+/g), function(t, e) {
                    var n = pe[e] || dt.find.attr;
                    pe[e] = function(t, e, i) {
                        var r, o, s = e.toLowerCase();
                        return i || (o = pe[s], pe[s] = r, r = null != n(t, e, i) ? s : null, pe[s] = o), r
                    }
                });
                var me = /^(?:input|select|textarea|button)$/i,
                    ge = /^(?:a|area)$/i;
                dt.fn.extend({
                    prop: function(t, e) {
                        return At(this, dt.prop, t, e, arguments.length > 1)
                    },
                    removeProp: function(t) {
                        return this.each(function() {
                            delete this[dt.propFix[t] || t]
                        })
                    }
                }), dt.extend({
                    prop: function(t, e, n) {
                        var i, r, o = t.nodeType;
                        if (3 !== o && 8 !== o && 2 !== o) return 1 === o && dt.isXMLDoc(t) || (e = dt.propFix[e] || e, r = dt.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
                    },
                    propHooks: {
                        tabIndex: {
                            get: function(t) {
                                var e = dt.find.attr(t, "tabindex");
                                return e ? parseInt(e, 10) : me.test(t.nodeName) || ge.test(t.nodeName) && t.href ? 0 : -1
                            }
                        }
                    },
                    propFix: {
                        for: "htmlFor",
                        class: "className"
                    }
                }), lt.optSelected || (dt.propHooks.selected = {
                    get: function(t) {
                        var e = t.parentNode;
                        return e && e.parentNode && e.parentNode.selectedIndex, null
                    },
                    set: function(t) {
                        var e = t.parentNode;
                        e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
                    }
                }), dt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                    dt.propFix[this.toLowerCase()] = this
                });
                var ve = /[\t\r\n\f]/g;
                dt.fn.extend({
                    addClass: function(t) {
                        var e, n, i, r, o, s, a, c = 0;
                        if (dt.isFunction(t)) return this.each(function(e) {
                            dt(this).addClass(t.call(this, e, z(this)))
                        });
                        if ("string" == typeof t && t)
                            for (e = t.match(kt) || []; n = this[c++];)
                                if (r = z(n), i = 1 === n.nodeType && (" " + r + " ").replace(ve, " ")) {
                                    for (s = 0; o = e[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                                    a = dt.trim(i), r !== a && n.setAttribute("class", a)
                                }
                        return this
                    },
                    removeClass: function(t) {
                        var e, n, i, r, o, s, a, c = 0;
                        if (dt.isFunction(t)) return this.each(function(e) {
                            dt(this).removeClass(t.call(this, e, z(this)))
                        });
                        if (!arguments.length) return this.attr("class", "");
                        if ("string" == typeof t && t)
                            for (e = t.match(kt) || []; n = this[c++];)
                                if (r = z(n), i = 1 === n.nodeType && (" " + r + " ").replace(ve, " ")) {
                                    for (s = 0; o = e[s++];)
                                        for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                                    a = dt.trim(i), r !== a && n.setAttribute("class", a)
                                }
                        return this
                    },
                    toggleClass: function(t, e) {
                        var n = typeof t;
                        return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : dt.isFunction(t) ? this.each(function(n) {
                            dt(this).toggleClass(t.call(this, n, z(this), e), e)
                        }) : this.each(function() {
                            var e, i, r, o;
                            if ("string" === n)
                                for (i = 0, r = dt(this), o = t.match(kt) || []; e = o[i++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                            else void 0 !== t && "boolean" !== n || (e = z(this), e && Pt.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : Pt.get(this, "__className__") || ""))
                        })
                    },
                    hasClass: function(t) {
                        var e, n, i = 0;
                        for (e = " " + t + " "; n = this[i++];)
                            if (1 === n.nodeType && (" " + z(n) + " ").replace(ve, " ").indexOf(e) > -1) return !0;
                        return !1
                    }
                });
                var ye = /\r/g,
                    be = /[\x20\t\r\n\f]+/g;
                dt.fn.extend({
                    val: function(t) {
                        var e, n, i, r = this[0]; {
                            if (arguments.length) return i = dt.isFunction(t), this.each(function(n) {
                                var r;
                                1 === this.nodeType && (r = i ? t.call(this, n, dt(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : dt.isArray(r) && (r = dt.map(r, function(t) {
                                    return null == t ? "" : t + ""
                                })), (e = dt.valHooks[this.type] || dt.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                            });
                            if (r) return (e = dt.valHooks[r.type] || dt.valHooks[r.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(ye, "") : null == n ? "" : n)
                        }
                    }
                }), dt.extend({
                    valHooks: {
                        option: {
                            get: function(t) {
                                var e = dt.find.attr(t, "value");
                                return null != e ? e : dt.trim(dt.text(t)).replace(be, " ")
                            }
                        },
                        select: {
                            get: function(t) {
                                for (var e, n, i = t.options, r = t.selectedIndex, o = "select-one" === t.type, s = o ? null : [], a = o ? r + 1 : i.length, c = r < 0 ? a : o ? r : 0; c < a; c++)
                                    if (n = i[c], (n.selected || c === r) && !n.disabled && (!n.parentNode.disabled || !dt.nodeName(n.parentNode, "optgroup"))) {
                                        if (e = dt(n).val(), o) return e;
                                        s.push(e)
                                    }
                                return s
                            },
                            set: function(t, e) {
                                for (var n, i, r = t.options, o = dt.makeArray(e), s = r.length; s--;) i = r[s], (i.selected = dt.inArray(dt.valHooks.option.get(i), o) > -1) && (n = !0);
                                return n || (t.selectedIndex = -1), o
                            }
                        }
                    }
                }), dt.each(["radio", "checkbox"], function() {
                    dt.valHooks[this] = {
                        set: function(t, e) {
                            if (dt.isArray(e)) return t.checked = dt.inArray(dt(t).val(), e) > -1
                        }
                    }, lt.checkOn || (dt.valHooks[this].get = function(t) {
                        return null === t.getAttribute("value") ? "on" : t.value
                    })
                });
                var _e = /^(?:focusinfocus|focusoutblur)$/;
                dt.extend(dt.event, {
                    trigger: function(e, n, i, r) {
                        var o, s, a, c, u, l, d, h = [i || Z],
                            f = at.call(e, "type") ? e.type : e,
                            p = at.call(e, "namespace") ? e.namespace.split(".") : [];
                        if (s = a = i = i || Z, 3 !== i.nodeType && 8 !== i.nodeType && !_e.test(f + dt.event.triggered) && (f.indexOf(".") > -1 && (p = f.split("."), f = p.shift(), p.sort()), u = f.indexOf(":") < 0 && "on" + f, e = e[dt.expando] ? e : new dt.Event(f, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : dt.makeArray(n, [e]), d = dt.event.special[f] || {}, r || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                            if (!r && !d.noBubble && !dt.isWindow(i)) {
                                for (c = d.delegateType || f, _e.test(c + f) || (s = s.parentNode); s; s = s.parentNode) h.push(s), a = s;
                                a === (i.ownerDocument || Z) && h.push(a.defaultView || a.parentWindow || t)
                            }
                            for (o = 0;
                                (s = h[o++]) && !e.isPropagationStopped();) e.type = o > 1 ? c : d.bindType || f, l = (Pt.get(s, "events") || {})[e.type] && Pt.get(s, "handle"), l && l.apply(s, n), (l = u && s[u]) && l.apply && jt(s) && (e.result = l.apply(s, n), !1 === e.result && e.preventDefault());
                            return e.type = f, r || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(h.pop(), n) || !jt(i) || u && dt.isFunction(i[f]) && !dt.isWindow(i) && (a = i[u], a && (i[u] = null), dt.event.triggered = f, i[f](), dt.event.triggered = void 0, a && (i[u] = a)), e.result
                        }
                    },
                    simulate: function(t, e, n) {
                        var i = dt.extend(new dt.Event, n, {
                            type: t,
                            isSimulated: !0
                        });
                        dt.event.trigger(i, null, e)
                    }
                }), dt.fn.extend({
                    trigger: function(t, e) {
                        return this.each(function() {
                            dt.event.trigger(t, e, this)
                        })
                    },
                    triggerHandler: function(t, e) {
                        var n = this[0];
                        if (n) return dt.event.trigger(t, e, n, !0)
                    }
                }), dt.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, e) {
                    dt.fn[e] = function(t, n) {
                        return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
                    }
                }), dt.fn.extend({
                    hover: function(t, e) {
                        return this.mouseenter(t).mouseleave(e || t)
                    }
                }), lt.focusin = "onfocusin" in t, lt.focusin || dt.each({
                    focus: "focusin",
                    blur: "focusout"
                }, function(t, e) {
                    var n = function(t) {
                        dt.event.simulate(e, t.target, dt.event.fix(t))
                    };
                    dt.event.special[e] = {
                        setup: function() {
                            var i = this.ownerDocument || this,
                                r = Pt.access(i, e);
                            r || i.addEventListener(t, n, !0), Pt.access(i, e, (r || 0) + 1)
                        },
                        teardown: function() {
                            var i = this.ownerDocument || this,
                                r = Pt.access(i, e) - 1;
                            r ? Pt.access(i, e, r) : (i.removeEventListener(t, n, !0), Pt.remove(i, e))
                        }
                    }
                });
                var we = t.location,
                    Se = dt.now(),
                    xe = /\?/;
                dt.parseXML = function(e) {
                    var n;
                    if (!e || "string" != typeof e) return null;
                    try {
                        n = (new t.DOMParser).parseFromString(e, "text/xml")
                    } catch (t) {
                        n = void 0
                    }
                    return n && !n.getElementsByTagName("parsererror").length || dt.error("Invalid XML: " + e), n
                };
                var Ce = /\[\]$/,
                    Te = /\r?\n/g,
                    ke = /^(?:submit|button|image|reset|file)$/i,
                    $e = /^(?:input|select|textarea|keygen)/i;
                dt.param = function(t, e) {
                    var n, i = [],
                        r = function(t, e) {
                            var n = dt.isFunction(e) ? e() : e;
                            i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
                        };
                    if (dt.isArray(t) || t.jquery && !dt.isPlainObject(t)) dt.each(t, function() {
                        r(this.name, this.value)
                    });
                    else
                        for (n in t) V(n, t[n], e, r);
                    return i.join("&")
                }, dt.fn.extend({
                    serialize: function() {
                        return dt.param(this.serializeArray())
                    },
                    serializeArray: function() {
                        return this.map(function() {
                            var t = dt.prop(this, "elements");
                            return t ? dt.makeArray(t) : this
                        }).filter(function() {
                            var t = this.type;
                            return this.name && !dt(this).is(":disabled") && $e.test(this.nodeName) && !ke.test(t) && (this.checked || !qt.test(t))
                        }).map(function(t, e) {
                            var n = dt(this).val();
                            return null == n ? null : dt.isArray(n) ? dt.map(n, function(t) {
                                return {
                                    name: e.name,
                                    value: t.replace(Te, "\r\n")
                                }
                            }) : {
                                name: e.name,
                                value: n.replace(Te, "\r\n")
                            }
                        }).get()
                    }
                });
                var Ee = /%20/g,
                    Ae = /#.*$/,
                    je = /([?&])_=[^&]*/,
                    Pe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                    De = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
                    Ne = /^(?:GET|HEAD)$/,
                    Oe = /^\/\//,
                    Ie = {},
                    Fe = {},
                    Be = "*/".concat("*"),
                    Le = Z.createElement("a");
                Le.href = we.href, dt.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: we.href,
                        type: "GET",
                        isLocal: De.test(we.protocol),
                        global: !0,
                        processData: !0,
                        async: !0,
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        accepts: {
                            "*": Be,
                            text: "text/plain",
                            html: "text/html",
                            xml: "application/xml, text/xml",
                            json: "application/json, text/javascript"
                        },
                        contents: {
                            xml: /\bxml\b/,
                            html: /\bhtml/,
                            json: /\bjson\b/
                        },
                        responseFields: {
                            xml: "responseXML",
                            text: "responseText",
                            json: "responseJSON"
                        },
                        converters: {
                            "* text": String,
                            "text html": !0,
                            "text json": JSON.parse,
                            "text xml": dt.parseXML
                        },
                        flatOptions: {
                            url: !0,
                            context: !0
                        }
                    },
                    ajaxSetup: function(t, e) {
                        return e ? Y(Y(t, dt.ajaxSettings), e) : Y(dt.ajaxSettings, t)
                    },
                    ajaxPrefilter: U(Ie),
                    ajaxTransport: U(Fe),
                    ajax: function(e, n) {
                        function i(e, n, i, a) {
                            var u, h, f, _, w, S = n;
                            l || (l = !0, c && t.clearTimeout(c), r = void 0, s = a || "", x.readyState = e > 0 ? 4 : 0, u = e >= 200 && e < 300 || 304 === e, i && (_ = Q(p, x, i)), _ = G(p, _, x, u), u ? (p.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (dt.lastModified[o] = w), (w = x.getResponseHeader("etag")) && (dt.etag[o] = w)), 204 === e || "HEAD" === p.type ? S = "nocontent" : 304 === e ? S = "notmodified" : (S = _.state, h = _.data, f = _.error, u = !f)) : (f = S, !e && S || (S = "error", e < 0 && (e = 0))), x.status = e, x.statusText = (n || S) + "", u ? v.resolveWith(m, [h, S, x]) : v.rejectWith(m, [x, S, f]), x.statusCode(b), b = void 0, d && g.trigger(u ? "ajaxSuccess" : "ajaxError", [x, p, u ? h : f]), y.fireWith(m, [x, S]), d && (g.trigger("ajaxComplete", [x, p]), --dt.active || dt.event.trigger("ajaxStop")))
                        }
                        "object" == typeof e && (n = e, e = void 0), n = n || {};
                        var r, o, s, a, c, u, l, d, h, f, p = dt.ajaxSetup({}, n),
                            m = p.context || p,
                            g = p.context && (m.nodeType || m.jquery) ? dt(m) : dt.event,
                            v = dt.Deferred(),
                            y = dt.Callbacks("once memory"),
                            b = p.statusCode || {},
                            _ = {},
                            w = {},
                            S = "canceled",
                            x = {
                                readyState: 0,
                                getResponseHeader: function(t) {
                                    var e;
                                    if (l) {
                                        if (!a)
                                            for (a = {}; e = Pe.exec(s);) a[e[1].toLowerCase()] = e[2];
                                        e = a[t.toLowerCase()]
                                    }
                                    return null == e ? null : e
                                },
                                getAllResponseHeaders: function() {
                                    return l ? s : null
                                },
                                setRequestHeader: function(t, e) {
                                    return null == l && (t = w[t.toLowerCase()] = w[t.toLowerCase()] || t, _[t] = e), this
                                },
                                overrideMimeType: function(t) {
                                    return null == l && (p.mimeType = t), this
                                },
                                statusCode: function(t) {
                                    var e;
                                    if (t)
                                        if (l) x.always(t[x.status]);
                                        else
                                            for (e in t) b[e] = [b[e], t[e]];
                                    return this
                                },
                                abort: function(t) {
                                    var e = t || S;
                                    return r && r.abort(e), i(0, e), this
                                }
                            };
                        if (v.promise(x), p.url = ((e || p.url || we.href) + "").replace(Oe, we.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(kt) || [""], null == p.crossDomain) {
                            u = Z.createElement("a");
                            try {
                                u.href = p.url, u.href = u.href, p.crossDomain = Le.protocol + "//" + Le.host != u.protocol + "//" + u.host
                            } catch (t) {
                                p.crossDomain = !0
                            }
                        }
                        if (p.data && p.processData && "string" != typeof p.data && (p.data = dt.param(p.data, p.traditional)), X(Ie, p, n, x), l) return x;
                        d = dt.event && p.global, d && 0 == dt.active++ && dt.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Ne.test(p.type), o = p.url.replace(Ae, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Ee, "+")) : (f = p.url.slice(o.length), p.data && (o += (xe.test(o) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (o = o.replace(je, ""), f = (xe.test(o) ? "&" : "?") + "_=" + Se++ + f), p.url = o + f), p.ifModified && (dt.lastModified[o] && x.setRequestHeader("If-Modified-Since", dt.lastModified[o]), dt.etag[o] && x.setRequestHeader("If-None-Match", dt.etag[o])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && x.setRequestHeader("Content-Type", p.contentType), x.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Be + "; q=0.01" : "") : p.accepts["*"]);
                        for (h in p.headers) x.setRequestHeader(h, p.headers[h]);
                        if (p.beforeSend && (!1 === p.beforeSend.call(m, x, p) || l)) return x.abort();
                        if (S = "abort", y.add(p.complete), x.done(p.success), x.fail(p.error), r = X(Fe, p, n, x)) {
                            if (x.readyState = 1, d && g.trigger("ajaxSend", [x, p]), l) return x;
                            p.async && p.timeout > 0 && (c = t.setTimeout(function() {
                                x.abort("timeout")
                            }, p.timeout));
                            try {
                                l = !1, r.send(_, i)
                            } catch (t) {
                                if (l) throw t;
                                i(-1, t)
                            }
                        } else i(-1, "No Transport");
                        return x
                    },
                    getJSON: function(t, e, n) {
                        return dt.get(t, e, n, "json")
                    },
                    getScript: function(t, e) {
                        return dt.get(t, void 0, e, "script")
                    }
                }), dt.each(["get", "post"], function(t, e) {
                    dt[e] = function(t, n, i, r) {
                        return dt.isFunction(n) && (r = r || i, i = n, n = void 0), dt.ajax(dt.extend({
                            url: t,
                            type: e,
                            dataType: r,
                            data: n,
                            success: i
                        }, dt.isPlainObject(t) && t))
                    }
                }), dt._evalUrl = function(t) {
                    return dt.ajax({
                        url: t,
                        type: "GET",
                        dataType: "script",
                        cache: !0,
                        async: !1,
                        global: !1,
                        throws: !0
                    })
                }, dt.fn.extend({
                    wrapAll: function(t) {
                        var e;
                        return this[0] && (dt.isFunction(t) && (t = t.call(this[0])), e = dt(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                            for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                            return t
                        }).append(this)), this
                    },
                    wrapInner: function(t) {
                        return dt.isFunction(t) ? this.each(function(e) {
                            dt(this).wrapInner(t.call(this, e))
                        }) : this.each(function() {
                            var e = dt(this),
                                n = e.contents();
                            n.length ? n.wrapAll(t) : e.append(t)
                        })
                    },
                    wrap: function(t) {
                        var e = dt.isFunction(t);
                        return this.each(function(n) {
                            dt(this).wrapAll(e ? t.call(this, n) : t)
                        })
                    },
                    unwrap: function(t) {
                        return this.parent(t).not("body").each(function() {
                            dt(this).replaceWith(this.childNodes)
                        }), this
                    }
                }), dt.expr.pseudos.hidden = function(t) {
                    return !dt.expr.pseudos.visible(t)
                }, dt.expr.pseudos.visible = function(t) {
                    return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
                }, dt.ajaxSettings.xhr = function() {
                    try {
                        return new t.XMLHttpRequest
                    } catch (t) {}
                };
                var He = {
                        0: 200,
                        1223: 204
                    },
                    Me = dt.ajaxSettings.xhr();
                lt.cors = !!Me && "withCredentials" in Me, lt.ajax = Me = !!Me, dt.ajaxTransport(function(e) {
                    var n, i;
                    if (lt.cors || Me && !e.crossDomain) return {
                        send: function(r, o) {
                            var s, a = e.xhr();
                            if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                                for (s in e.xhrFields) a[s] = e.xhrFields[s];
                            e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                            for (s in r) a.setRequestHeader(s, r[s]);
                            n = function(t) {
                                return function() {
                                    n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(He[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                        binary: a.response
                                    } : {
                                        text: a.responseText
                                    }, a.getAllResponseHeaders()))
                                }
                            }, a.onload = n(), i = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                                4 === a.readyState && t.setTimeout(function() {
                                    n && i()
                                })
                            }, n = n("abort");
                            try {
                                a.send(e.hasContent && e.data || null)
                            } catch (t) {
                                if (n) throw t
                            }
                        },
                        abort: function() {
                            n && n()
                        }
                    }
                }), dt.ajaxPrefilter(function(t) {
                    t.crossDomain && (t.contents.script = !1)
                }), dt.ajaxSetup({
                    accepts: {
                        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                    },
                    contents: {
                        script: /\b(?:java|ecma)script\b/
                    },
                    converters: {
                        "text script": function(t) {
                            return dt.globalEval(t), t
                        }
                    }
                }), dt.ajaxPrefilter("script", function(t) {
                    void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
                }), dt.ajaxTransport("script", function(t) {
                    if (t.crossDomain) {
                        var e, n;
                        return {
                            send: function(i, r) {
                                e = dt("<script>").prop({
                                    charset: t.scriptCharset,
                                    src: t.url
                                }).on("load error", n = function(t) {
                                    e.remove(), n = null, t && r("error" === t.type ? 404 : 200, t.type)
                                }), Z.head.appendChild(e[0])
                            },
                            abort: function() {
                                n && n()
                            }
                        }
                    }
                });
                var qe = [],
                    Re = /(=)\?(?=&|$)|\?\?/;
                dt.ajaxSetup({
                    jsonp: "callback",
                    jsonpCallback: function() {
                        var t = qe.pop() || dt.expando + "_" + Se++;
                        return this[t] = !0, t
                    }
                }), dt.ajaxPrefilter("json jsonp", function(e, n, i) {
                    var r, o, s, a = !1 !== e.jsonp && (Re.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Re.test(e.data) && "data");
                    if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = dt.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Re, "$1" + r) : !1 !== e.jsonp && (e.url += (xe.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
                        return s || dt.error(r + " was not called"), s[0]
                    }, e.dataTypes[0] = "json", o = t[r], t[r] = function() {
                        s = arguments
                    }, i.always(function() {
                        void 0 === o ? dt(t).removeProp(r) : t[r] = o, e[r] && (e.jsonpCallback = n.jsonpCallback, qe.push(r)), s && dt.isFunction(o) && o(s[0]), s = o = void 0
                    }), "script"
                }), lt.createHTMLDocument = function() {
                    var t = Z.implementation.createHTMLDocument("").body;
                    return t.innerHTML = "<form></form><form></form>", 2 === t.childNodes.length
                }(), dt.parseHTML = function(t, e, n) {
                    if ("string" != typeof t) return [];
                    "boolean" == typeof e && (n = e, e = !1);
                    var i, r, o;
                    return e || (lt.createHTMLDocument ? (e = Z.implementation.createHTMLDocument(""), i = e.createElement("base"), i.href = Z.location.href, e.head.appendChild(i)) : e = Z), r = _t.exec(t), o = !n && [], r ? [e.createElement(r[1])] : (r = y([t], e, o), o && o.length && dt(o).remove(), dt.merge([], r.childNodes))
                }, dt.fn.load = function(t, e, n) {
                    var i, r, o, s = this,
                        a = t.indexOf(" ");
                    return a > -1 && (i = dt.trim(t.slice(a)), t = t.slice(0, a)), dt.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), s.length > 0 && dt.ajax({
                        url: t,
                        type: r || "GET",
                        dataType: "html",
                        data: e
                    }).done(function(t) {
                        o = arguments, s.html(i ? dt("<div>").append(dt.parseHTML(t)).find(i) : t)
                    }).always(n && function(t, e) {
                        s.each(function() {
                            n.apply(this, o || [t.responseText, e, t])
                        })
                    }), this
                }, dt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
                    dt.fn[e] = function(t) {
                        return this.on(e, t)
                    }
                }), dt.expr.pseudos.animated = function(t) {
                    return dt.grep(dt.timers, function(e) {
                        return t === e.elem
                    }).length
                }, dt.offset = {
                    setOffset: function(t, e, n) {
                        var i, r, o, s, a, c, u, l = dt.css(t, "position"),
                            d = dt(t),
                            h = {};
                        "static" === l && (t.style.position = "relative"), a = d.offset(), o = dt.css(t, "top"), c = dt.css(t, "left"), u = ("absolute" === l || "fixed" === l) && (o + c).indexOf("auto") > -1, u ? (i = d.position(), s = i.top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(c) || 0), dt.isFunction(e) && (e = e.call(t, n, dt.extend({}, a))), null != e.top && (h.top = e.top - a.top + s), null != e.left && (h.left = e.left - a.left + r), "using" in e ? e.using.call(t, h) : d.css(h)
                    }
                }, dt.fn.extend({
                    offset: function(t) {
                        if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                            dt.offset.setOffset(this, t, e)
                        });
                        var e, n, i, r, o = this[0];
                        if (o) return o.getClientRects().length ? (i = o.getBoundingClientRect(), i.width || i.height ? (r = o.ownerDocument, n = K(r), e = r.documentElement, {
                            top: i.top + n.pageYOffset - e.clientTop,
                            left: i.left + n.pageXOffset - e.clientLeft
                        }) : i) : {
                            top: 0,
                            left: 0
                        }
                    },
                    position: function() {
                        if (this[0]) {
                            var t, e, n = this[0],
                                i = {
                                    top: 0,
                                    left: 0
                                };
                            return "fixed" === dt.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), dt.nodeName(t[0], "html") || (i = t.offset()), i = {
                                top: i.top + dt.css(t[0], "borderTopWidth", !0),
                                left: i.left + dt.css(t[0], "borderLeftWidth", !0)
                            }), {
                                top: e.top - i.top - dt.css(n, "marginTop", !0),
                                left: e.left - i.left - dt.css(n, "marginLeft", !0)
                            }
                        }
                    },
                    offsetParent: function() {
                        return this.map(function() {
                            for (var t = this.offsetParent; t && "static" === dt.css(t, "position");) t = t.offsetParent;
                            return t || Ut
                        })
                    }
                }), dt.each({
                    scrollLeft: "pageXOffset",
                    scrollTop: "pageYOffset"
                }, function(t, e) {
                    var n = "pageYOffset" === e;
                    dt.fn[t] = function(i) {
                        return At(this, function(t, i, r) {
                            var o = K(t);
                            if (void 0 === r) return o ? o[e] : t[i];
                            o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : t[i] = r
                        }, t, i, arguments.length)
                    }
                }), dt.each(["top", "left"], function(t, e) {
                    dt.cssHooks[e] = P(lt.pixelPosition, function(t, n) {
                        if (n) return n = j(t, e), ne.test(n) ? dt(t).position()[e] + "px" : n
                    })
                }), dt.each({
                    Height: "height",
                    Width: "width"
                }, function(t, e) {
                    dt.each({
                        padding: "inner" + t,
                        content: e,
                        "": "outer" + t
                    }, function(n, i) {
                        dt.fn[i] = function(r, o) {
                            var s = arguments.length && (n || "boolean" != typeof r),
                                a = n || (!0 === r || !0 === o ? "margin" : "border");
                            return At(this, function(e, n, r) {
                                var o;
                                return dt.isWindow(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === r ? dt.css(e, n, a) : dt.style(e, n, r, a)
                            }, e, s ? r : void 0, s)
                        }
                    })
                }), dt.fn.extend({
                    bind: function(t, e, n) {
                        return this.on(t, null, e, n)
                    },
                    unbind: function(t, e) {
                        return this.off(t, null, e)
                    },
                    delegate: function(t, e, n, i) {
                        return this.on(e, t, n, i)
                    },
                    undelegate: function(t, e, n) {
                        return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
                    }
                }), dt.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function() {
                    return dt
                });
                var We = t.jQuery,
                    ze = t.$;
                return dt.noConflict = function(e) {
                    return t.$ === dt && (t.$ = ze), e && t.jQuery === dt && (t.jQuery = We), dt
                }, e || (t.jQuery = t.$ = dt), dt
            })
        }),
        En = Array.prototype,
        An = En.splice;
    u.prototype.clear = n, u.prototype.delete = o, u.prototype.get = s, u.prototype.has = a, u.prototype.set = c;
    var jn = "object" == typeof global && global && global.Object === Object && global,
        Pn = "object" == typeof self && self && self.Object === Object && self,
        Dn = jn || Pn || Function("return this")(),
        Nn = Dn.Symbol,
        On = Object.prototype,
        In = On.hasOwnProperty,
        Fn = On.toString,
        Bn = Nn ? Nn.toStringTag : void 0,
        Ln = Object.prototype,
        Hn = Ln.toString,
        Mn = "[object Null]",
        qn = "[object Undefined]",
        Rn = Nn ? Nn.toStringTag : void 0,
        Wn = "[object AsyncFunction]",
        zn = "[object Function]",
        Vn = "[object GeneratorFunction]",
        Un = "[object Proxy]",
        Xn = Dn["__core-js_shared__"],
        Yn = function() {
            var t = /[^.]+$/.exec(Xn && Xn.keys && Xn.keys.IE_PROTO || "");
            return t ? "Symbol(src)_1." + t : ""
        }(),
        Qn = Function.prototype,
        Gn = Qn.toString,
        Kn = /[\\^$.*+?()[\]{}|]/g,
        Jn = /^\[object .+?Constructor\]$/,
        Zn = Function.prototype,
        ti = Object.prototype,
        ei = Zn.toString,
        ni = ti.hasOwnProperty,
        ii = RegExp("^" + ei.call(ni).replace(Kn, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        ri = x(Dn, "Map"),
        oi = x(Object, "create"),
        si = "__lodash_hash_undefined__",
        ai = Object.prototype,
        ci = ai.hasOwnProperty,
        ui = Object.prototype,
        li = ui.hasOwnProperty,
        di = "__lodash_hash_undefined__";
    j.prototype.clear = C, j.prototype.delete = T, j.prototype.get = k, j.prototype.has = E, j.prototype.set = A, L.prototype.clear = P, L.prototype.delete = O, L.prototype.get = I, L.prototype.has = F, L.prototype.set = B;
    var hi = 200;
    M.prototype.clear = l, M.prototype.delete = d, M.prototype.get = h, M.prototype.has = f, M.prototype.set = H;
    var fi = function() {
            try {
                var t = x(Object, "defineProperty");
                return t({}, "", {}), t
            } catch (t) {}
        }(),
        pi = Object.prototype,
        mi = pi.hasOwnProperty,
        gi = "[object Arguments]",
        vi = Object.prototype,
        yi = vi.hasOwnProperty,
        bi = vi.propertyIsEnumerable,
        _i = X(function() {
            return arguments
        }()) ? X : function(t) {
            return U(t) && yi.call(t, "callee") && !bi.call(t, "callee")
        },
        wi = Array.isArray,
        Si = "object" == typeof exports && exports && !exports.nodeType && exports,
        xi = Si && "object" == typeof module && module && !module.nodeType && module,
        Ci = xi && xi.exports === Si,
        Ti = Ci ? Dn.Buffer : void 0,
        ki = Ti ? Ti.isBuffer : void 0,
        $i = ki || Y,
        Ei = 9007199254740991,
        Ai = /^(?:0|[1-9]\d*)$/,
        ji = 9007199254740991,
        Pi = {};
    Pi["[object Float32Array]"] = Pi["[object Float64Array]"] = Pi["[object Int8Array]"] = Pi["[object Int16Array]"] = Pi["[object Int32Array]"] = Pi["[object Uint8Array]"] = Pi["[object Uint8ClampedArray]"] = Pi["[object Uint16Array]"] = Pi["[object Uint32Array]"] = !0, Pi["[object Arguments]"] = Pi["[object Array]"] = Pi["[object ArrayBuffer]"] = Pi["[object Boolean]"] = Pi["[object DataView]"] = Pi["[object Date]"] = Pi["[object Error]"] = Pi["[object Function]"] = Pi["[object Map]"] = Pi["[object Number]"] = Pi["[object Object]"] = Pi["[object RegExp]"] = Pi["[object Set]"] = Pi["[object String]"] = Pi["[object WeakMap]"] = !1;
    var Di = "object" == typeof exports && exports && !exports.nodeType && exports,
        Ni = Di && "object" == typeof module && module && !module.nodeType && module,
        Oi = Ni && Ni.exports === Di,
        Ii = Oi && jn.process,
        Fi = function() {
            try {
                return Ii && Ii.binding && Ii.binding("util")
            } catch (t) {}
        }(),
        Bi = Fi && Fi.isTypedArray,
        Li = Bi ? function(t) {
            return function(e) {
                return t(e)
            }
        }(Bi) : K,
        Hi = Object.prototype,
        Mi = Hi.hasOwnProperty,
        qi = Object.prototype,
        Ri = tt(Object.keys, Object),
        Wi = Object.prototype,
        zi = Wi.hasOwnProperty,
        Vi = Object.prototype,
        Ui = Vi.hasOwnProperty,
        Xi = "object" == typeof exports && exports && !exports.nodeType && exports,
        Yi = Xi && "object" == typeof module && module && !module.nodeType && module,
        Qi = Yi && Yi.exports === Xi,
        Gi = Qi ? Dn.Buffer : void 0,
        Ki = Gi ? Gi.allocUnsafe : void 0,
        Ji = Object.getOwnPropertySymbols,
        Zi = Ji ? tt(Ji, Object) : dt,
        tr = tt(Object.getPrototypeOf, Object),
        er = Object.getOwnPropertySymbols,
        nr = er ? function(t) {
            for (var e = []; t;) ft(e, Zi(t)), t = tr(t);
            return e
        } : dt,
        ir = x(Dn, "DataView"),
        rr = x(Dn, "Promise"),
        or = x(Dn, "Set"),
        sr = x(Dn, "WeakMap"),
        ar = _(ir),
        cr = _(ri),
        ur = _(rr),
        lr = _(or),
        dr = _(sr),
        hr = g;
    (ir && "[object DataView]" != hr(new ir(new ArrayBuffer(1))) || ri && "[object Map]" != hr(new ri) || rr && "[object Promise]" != hr(rr.resolve()) || or && "[object Set]" != hr(new or) || sr && "[object WeakMap]" != hr(new sr)) && (hr = function(t) {
        var e = g(t),
            n = "[object Object]" == e ? t.constructor : void 0,
            i = n ? _(n) : "";
        if (i) switch (i) {
            case ar:
                return "[object DataView]";
            case cr:
                return "[object Map]";
            case ur:
                return "[object Promise]";
            case lr:
                return "[object Set]";
            case dr:
                return "[object WeakMap]"
        }
        return e
    });
    var fr = hr,
        pr = Object.prototype,
        mr = pr.hasOwnProperty,
        gr = Dn.Uint8Array,
        vr = 1,
        yr = /\w*$/,
        br = 1,
        _r = Nn ? Nn.prototype : void 0,
        wr = _r ? _r.valueOf : void 0,
        Sr = "[object Boolean]",
        xr = "[object Date]",
        Cr = "[object Map]",
        Tr = "[object Number]",
        kr = "[object RegExp]",
        $r = "[object Set]",
        Er = "[object String]",
        Ar = "[object Symbol]",
        jr = "[object ArrayBuffer]",
        Pr = "[object DataView]",
        Dr = "[object Float32Array]",
        Nr = "[object Float64Array]",
        Or = "[object Int8Array]",
        Ir = "[object Int16Array]",
        Fr = "[object Int32Array]",
        Br = "[object Uint8Array]",
        Lr = "[object Uint8ClampedArray]",
        Hr = "[object Uint16Array]",
        Mr = "[object Uint32Array]",
        qr = Object.create,
        Rr = function() {
            function t() {}
            return function(e) {
                if (!v(e)) return {};
                if (qr) return qr(e);
                t.prototype = e;
                var n = new t;
                return t.prototype = void 0, n
            }
        }(),
        Wr = 1,
        zr = 2,
        Vr = 4,
        Ur = "[object Arguments]",
        Xr = "[object Function]",
        Yr = "[object GeneratorFunction]",
        Qr = "[object Object]",
        Gr = {};
    Gr[Ur] = Gr["[object Array]"] = Gr["[object ArrayBuffer]"] = Gr["[object DataView]"] = Gr["[object Boolean]"] = Gr["[object Date]"] = Gr["[object Float32Array]"] = Gr["[object Float64Array]"] = Gr["[object Int8Array]"] = Gr["[object Int16Array]"] = Gr["[object Int32Array]"] = Gr["[object Map]"] = Gr["[object Number]"] = Gr[Qr] = Gr["[object RegExp]"] = Gr["[object Set]"] = Gr["[object String]"] = Gr["[object Symbol]"] = Gr["[object Uint8Array]"] = Gr["[object Uint8ClampedArray]"] = Gr["[object Uint16Array]"] = Gr["[object Uint32Array]"] = !0, Gr["[object Error]"] = Gr[Xr] = Gr["[object WeakMap]"] = !1;
    var Kr = "[object Symbol]",
        Jr = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        Zr = /^\w*$/,
        to = "Expected a function";
    Ft.Cache = L;
    var eo = 500,
        no = /^\./,
        io = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        ro = /\\(\\)?/g,
        oo = function(t) {
            var e = Ft(t, function(t) {
                    return n.size === eo && n.clear(), t
                }),
                n = e.cache;
            return e
        }(function(t) {
            var e = [];
            return no.test(t) && e.push(""), t.replace(io, function(t, n, i, r) {
                e.push(i ? r.replace(ro, "$1") : n || t)
            }), e
        }),
        so = 1 / 0,
        ao = Nn ? Nn.prototype : void 0,
        co = ao ? ao.toString : void 0,
        uo = 1 / 0,
        lo = Nn ? Nn.isConcatSpreadable : void 0,
        ho = Math.max,
        fo = fi ? function(t, e) {
            return fi(t, "toString", {
                configurable: !0,
                enumerable: !1,
                value: Kt(e),
                writable: !0
            })
        } : Jt,
        po = 800,
        mo = 16,
        go = Date.now,
        vo = function(t) {
            var e = 0,
                n = 0;
            return function() {
                var i = go(),
                    r = mo - (i - n);
                if (n = i, r > 0) {
                    if (++e >= po) return arguments[0]
                } else e = 0;
                return t.apply(void 0, arguments)
            }
        }(fo),
        yo = function(t) {
            return vo(Gt(t, void 0, Yt), t + "")
        }(function(t, n) {
            var i = {};
            if (null == t) return i;
            var r = !1;
            n = e(n, function(e) {
                return e = Ht(e, t), r || (r = e.length > 1), e
            }), z(t, vt(t), i), r && (i = Nt(i, 7));
            for (var o = n.length; o--;) Vt(i, n[o]);
            return i
        }),
        bo = "__lodash_hash_undefined__";
    ee.prototype.add = ee.prototype.push = Zt, ee.prototype.has = te;
    var _o = 1,
        wo = 2,
        So = 1,
        xo = 2,
        Co = "[object Boolean]",
        To = "[object Date]",
        ko = "[object Error]",
        $o = "[object Map]",
        Eo = "[object Number]",
        Ao = "[object RegExp]",
        jo = "[object Set]",
        Po = "[object String]",
        Do = "[object Symbol]",
        No = "[object ArrayBuffer]",
        Oo = "[object DataView]",
        Io = Nn ? Nn.prototype : void 0,
        Fo = Io ? Io.valueOf : void 0,
        Bo = 1,
        Lo = Object.prototype,
        Ho = Lo.hasOwnProperty,
        Mo = 1,
        qo = "[object Arguments]",
        Ro = "[object Array]",
        Wo = "[object Object]",
        zo = Object.prototype,
        Vo = zo.hasOwnProperty,
        Uo = 1,
        Xo = 2,
        Yo = 1,
        Qo = 2,
        Go = NaN,
        Ko = /^\s+|\s+$/g,
        Jo = /^[-+]0x[0-9a-f]+$/i,
        Zo = /^0b[01]+$/i,
        ts = /^0o[0-7]+$/i,
        es = parseInt,
        ns = 1 / 0,
        is = 1.7976931348623157e308,
        rs = Math.max,
        os = function(t) {
            return function(e, n, i) {
                var r = Object(e);
                if (!nt(e)) {
                    var o = Se(n, 3);
                    e = it(e), n = function(t) {
                        return o(r[t], t, r)
                    }
                }
                var s = t(e, n, i);
                return s > -1 ? r[o ? e[s] : s] : void 0
            }
        }($e);
    Ee.prototype = {
        register: function(t, e, n) {
            function i(e, n) {
                this.name = t.toLowerCase(), this.container = e, this.$container = $n(e), this.extensions = n, Ae.call(this)
            }
            i.classname = e, i.constructor = i, i.prototype = Object.create(Ae.prototype), $n.extend(i.prototype, n), this.registered[t] = i
        },
        extend: function(t, e) {
            "*" === t ? (t = Object.keys(this.registered), t.push("*")) : "string" == typeof t && (t = [t]), t.forEach(function(t) {
                this.extensions[t] = this.extensions[t] || [], this.extensions[t].push(e), void 0 !== this.registered[t] && "*" !== t && this.instances.forEach(function(n) {
                    n.name === t && n.extend(e)
                })
            }.bind(this))
        },
        load: function(t) {
            "*" === t ? t = Object.keys(this.registered) : "string" == typeof t && (t = [t]), t.forEach(this._loadTemplate.bind(this))
        },
        _loadTemplate: function(t) {
            var e, n, i = this.registered[t],
                r = os(this.instances, {
                    name: t
                });
            void 0 === i || r || (e = "*" === i.classname ? document.body : document.querySelector("body." + i.classname)) && (n = this.extensions["*"].concat(this.extensions[t] || []), r = new i(e, n), $n.isFunction(r.onLoad) && r.onLoad(e), this.instances.push(r))
        }
    }, Ae.prototype = {
        extend: function(t) {
            var e = t.init;
            this.extensions.push(t), $n.isFunction(e) && (t = yo(t, "init")), $n.extend(this, t), e.apply(this)
        }
    };
    var ss = new Ee,
        as = {
            disableScroll: "disable-scroll"
        },
        cs = {
            pointerEventToXY: function(t) {
                var e;
                return e = t.originalEvent.touches ? t.originalEvent.touches[0] || t.originalEvent.changedTouches[0] : t, {
                    x: e.pageX,
                    y: e.pageY
                }
            },
            promiseRepeatSeries: function(t, e) {
                return e--, t().then(function() {
                    if (e) return this.promiseRepeatSeries(t, e)
                }.bind(this))
            },
            mapPromiseSeries: function(t, e, n) {
                function i(t, i) {
                    return $n.Deferred(function(r) {
                        setTimeout(function() {
                            r.resolve(e(t, i))
                        }, n)
                    })
                }
                var r = $n.Deferred().resolve();
                return $n.each(t, function(t, o) {
                    r = r.then(function() {
                        return "number" == typeof n ? i(t, o) : e(t, o)
                    })
                }), r
            },
            promiseAnimationEnd: function(t) {
                var e = "animationend webkitAnimationEnd oAnimationEnd",
                    n = ["animation-duration", "-moz-animation-duration", "-webkit-animation-duration", "-o-animation-duration"],
                    i = 0,
                    r = $n.Deferred().resolve();
                return $n.each(n, function(e, n) {
                    i || (i = parseFloat(t.css(n)))
                }), i > 0 && (r = $n.Deferred(function(n) {
                    t.on(e, function(i) {
                        i.target === t[0] && (t.off(e), n.resolve())
                    })
                })), r
            },
            promiseTransitionEnd: function(t) {
                var e = "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
                    n = ["transition-duration", "-moz-transition-duration", "-webkit-transition-duration", "-o-transition-duration"],
                    i = 0,
                    r = $n.Deferred().resolve();
                return $n.each(n, function(e, n) {
                    i || (i = parseFloat(t.css(n)))
                }), i > 0 && (r = $n.Deferred(function(n) {
                    t.on(e, function(i) {
                        i.target === t[0] && (t.off(e), n.resolve())
                    })
                })), r
            },
            isLocalStorageSupported: function() {
                var t = "localStorageTest";
                try {
                    return localStorage.setItem(t, t), localStorage.removeItem(t), !0
                } catch (t) {
                    return !1
                }
            },
            isSessionStorageSupported: function() {
                var t = "sessionStorageTest";
                try {
                    return sessionStorage.setItem(t, t), sessionStorage.removeItem(t), !0
                } catch (t) {
                    return !1
                }
            },
            disableTabbingOfChildren: function(t) {
                $n(t).each(function(t, e) {
                    $n("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]", e).attr("tabindex", "-1")
                })
            },
            enableTabbingOfChildren: function(t) {
                $n(t).each(function(t, e) {
                    $n("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]", e).removeAttr("tabindex")
                })
            },
            isiOSSafari: function() {
                var t = window.navigator.userAgent,
                    e = Boolean(t.match(/iPad/i)) || Boolean(t.match(/iPhone/i)),
                    n = Boolean(t.match(/WebKit/i));
                return e && n && !t.match(/CriOS/i)
            },
            disableScrollBody: function() {
                document.body.scrollHeight - window.innerHeight != 0 && $n("html").addClass(as.disableScroll)
            },
            enableScrollBody: function() {
                $n("html").removeClass(as.disableScroll)
            },
            updateUrlParameter: function(t, e, n) {
                var i = new RegExp("([?&])" + e + "=.*?(&|$)", "i"),
                    r = -1 === t.indexOf("?") ? "?" : "&";
                return t.match(i) ? t.replace(i, "$1" + e + "=" + n + "$2") : t + r + e + "=" + n
            },
            cookiesEnabled: function() {
                var t = navigator.cookieEnabled;
                return t || (document.cookie = "testcookie", t = -1 !== document.cookie.indexOf("testcookie")), t
            },
            onFirst: function(t, e) {
                this.on(t, e), this.each(function() {
                    var e = $n._data(this, "events")[t.split(".")[0]],
                        n = e.pop();
                    e.splice(0, 0, n)
                })
            },
            promiseStylesheet: function() {
                return void 0 === this.stylesheetPromise && (this.stylesheetPromise = $n.Deferred(function(t) {
                    var e = document.querySelector('link[href="' + theme.stylesheet + '"]');
                    e.loaded && t.resolve(), onloadCSS(e, function() {
                        t.resolve()
                    })
                })), this.stylesheetPromise
            },
            isMobile: function() {
                function t() {
                    return e = $n(window).outerWidth() < theme.mediaQuerySmall
                }
                var e = !1;
                return this.isMobile = function() {
                    return e
                }, $n.fn.onFirst = this.onFirst, $n(window).onFirst("resize", t), t()
            },
            isTablet: function() {
                function t() {
                    var t = $n(window).outerWidth();
                    return e = t > theme.mediaQuerySmall && t < theme.mediaQueryMedium
                }
                var e = !1;
                return this.isTablet = function() {
                    return e
                }, $n.fn.onFirst = this.onFirst, $n(window).onFirst("resize", t), t()
            },
            isInOrAboveViewport: function(t) {
                var e = t.getBoundingClientRect();
                return e.top + 50 >= 0 && e.top + 50 <= window.innerHeight || e.bottom + 50 >= 0 && e.bottom + 50 <= window.innerHeight || e.top + 50 < 0 && e.bottom + 50 > window.innerHeight || e.bottom < 0
            }
        },
        us = function() {
            return Dn.Date.now()
        },
        ls = "Expected a function",
        ds = Math.max,
        hs = Math.min,
        fs = "Expected a function",
        ps = {
            elementsToAnimate: "[data-animate]"
        },
        ms = {
            animated: "has-animated",
            animationsDisabled: "animations--disabled"
        };
    ss.register("Page animations", "*", {
        onLoad: function() {
            this.animationNamespace = ".animations", this.$elementsToAnimate = $n(ps.elementsToAnimate, this.$container), 0 !== this.$elementsToAnimate.length && ($n(window).on("scroll" + this.animationNamespace, Pe(this._animateElementsInViewport.bind(this), 200)), $n(window).on("resize" + this.animationNamespace, Pe(this._animateElementsInViewport.bind(this), 200)), Shopify && Shopify.designMode && ($n(document).on("shopify:section:load shopify:section:select", this._onSectionSelect.bind(this)), $n(document).on("shopify:section:unload shopify:section:deselect", this._onSectionDeselect.bind(this))), cs.promiseStylesheet().then(this._animateElementsInViewport.bind(this)))
        },
        _animateElementsInViewport: function() {
            this.$elementsToAnimate = this.$elementsToAnimate.map(function(t, e) {
                return cs.isInOrAboveViewport(e) ? (requestAnimationFrame(function() {
                    $n(e).addClass(ms.animated), $n(e).trigger("animate_element", [e])
                }), null) : e
            }), 0 === this.$elementsToAnimate.length && $n(window).off(this.animationNamespace)
        },
        _onSectionSelect: function() {
            $n(document.body).addClass(ms.animationsDisabled)
        },
        _onSectionDeselect: function(t) {
            $n(document.body).removeClass(ms.animationsDisabled), $n(t.target).find(ps.elementsToAnimate).addClass(ms.animated)
        }
    });
    var gs = {
            socialSharing: ".social-sharing",
            socialSharingToggle: ".social-sharing__toggle",
            linkList: ".social-sharing__item-list"
        },
        vs = {
            socialSharingAction: "social-sharing--active"
        },
        ys = {
            init: function() {
                this.$elements = $n(gs.socialSharing, this.$container), this.clicked = !1, $n(gs.socialSharingToggle, this.$container).on("click", this._onClick.bind(this)).one("click", function() {
                    this.clicked = !0
                }), this.$container.on("section_unload", this.destroySocialSharing.bind(this))
            },
            showSocialSharing: function() {
                $n(gs.socialSharing, this.$container).addClass(vs.socialSharingAction), $n(gs.socialSharingToggle, this.$container).attr("aria-expanded", !0), $n(gs.linkList, this.$container).attr("aria-hidden", !1), cs.enableTabbingOfChildren($n(gs.linkList, this.$container))
            },
            hideSocialSharing: function() {
                $n(gs.socialSharing, this.$container).removeClass(vs.socialSharingAction), $n(gs.socialSharingToggle, this.$container).attr("aria-expanded", !1), $n(gs.linkList, this.$container).attr("aria-hidden", !0), cs.disableTabbingOfChildren($n(gs.linkList, this.$container))
            },
            destroySocialSharing: function() {
                $n(gs.socialSharingToggle, this.$container).off()
            },
            _onClick: function(t) {
                "true" === $n(t.currentTarget).attr("aria-expanded") ? this.hideSocialSharing() : this.showSocialSharing()
            }
        },
        bs = {
            articleContentWrapper: ".article__wrapper",
            articleShareDesktop: ".article__share-desktop",
            articleShareMobile: ".article__share-mobile",
            articleShareDesktopWrapper: ".article__share-desktop-wrapper",
            socialSharing: ".social-sharing"
        },
        _s = {
            shareFixed: "article__share-desktop--fixed",
            shareBottom: "article__share-desktop--bottom"
        },
        ws = {
            shareExpandedHeight: 350
        };
    ss.register("Article Template", "template-article", {
        onLoad: function() {
            this.extend(ys), $n(window).on("scroll", this.setSharePosition.bind(this)).on("resize", this.updateMeasurements.bind(this)), cs.promiseStylesheet().then(function() {
                this.updateMeasurements()
            }.bind(this))
        },
        setSharePosition: function() {
            if (!cs.isMobile() && !cs.isTablet()) {
                var t = $n(window).scrollTop();
                requestAnimationFrame(function() {
                    t > this.fixedTop ? t > this.fixedBottom ? $n(bs.articleShareDesktop).removeClass(_s.shareFixed).addClass(_s.shareBottom) : $n(bs.articleShareDesktop).addClass(_s.shareFixed).removeClass(_s.shareBottom) : $n(bs.articleShareDesktop).removeClass(_s.shareFixed).removeClass(_s.shareBottom), this.clicked || (t > this.fixedBottom - ws.shareExpandedHeight ? this.showSocialSharing() : this.hideSocialSharing())
                }.bind(this))
            }
        },
        updateMeasurements: function() {
            this.fixedTop = $n(bs.articleContentWrapper).offset().top, this.fixedBottom = this.fixedTop + $n(bs.articleContentWrapper).height() - $n(bs.articleShareDesktopWrapper).height(), this.windowHeight = $n(window).outerHeight(), this.setSharePosition()
        }
    });
    var Ss = {
            addressCountrySelect: ".address-country-selector",
            newToggle: ".address-new-toggle",
            newAddressContainer: ".new-address",
            editToggle: ".address-edit-toggle",
            editAddressContainer: "#EditAddress_",
            deleteAddress: ".address-delete",
            currentAddresses: ".current-addresses",
            currentAddress: "#CurrentAddress_",
            currentAddressesItem: ".current-addresses__item"
        },
        xs = {
            customerAddresses: "template-customers-addresses",
            newAddressHide: "new-address--hidden",
            editAddressShow: "edit-address--show"
        };
    ss.register("Customer Addresses Template", "template-customers-addresses", {
        onLoad: function(t) {
            var e = this.$sideScroller = $n(t),
                n = $n(theme.countryOptionTags).filter("option"),
                i = $n(Ss.addressCountrySelect, e);
            n.each(function() {
                this.value = this.text
            }), i.each(function(t, i) {
                var r = this._populateCountrySelect(i, n),
                    o = this._fetchCurrentProvinces(r),
                    s = $n(r.attr("data-province-select"), e),
                    a = s.data("default");
                this._populateProvinceSelect(s, o, a)
            }.bind(this)), $n(Ss.newToggle).on("click", this._onNewAddressClick.bind(this)), $n(Ss.editToggle).on("click", this._onEditAddressClick.bind(this)), $n(Ss.deleteAddress).on("click", this._onDeleteAddressClick.bind(this))
        },
        _populateCountrySelect: function(t, e) {
            var n = $n(t),
                i = n.data("default") || $n(e[0]).val();
            return n.html(e.clone()).val(i).on("change", this._onCountrySelectChange.bind(this))
        },
        _populateProvinceSelect: function(t, e, n) {
            var i = t.parent(),
                r = e.map(this._createProvinceOption),
                o = n || $n(r[0]).val();
            return r.length ? i.show() : i.hide(), t.html(r).val(o)
        },
        _createProvinceOption: function(t) {
            return $n("<option>").attr({
                value: t[1]
            }).text(t[1])
        },
        _fetchCurrentProvinces: function(t) {
            return t.find(":selected").data("provinces") || []
        },
        _onCountrySelectChange: function(t) {
            var e = $n(t.target),
                n = this._fetchCurrentProvinces(e),
                i = $n(e.data("province-select"));
            this._populateProvinceSelect(i, n)
        },
        _onNewAddressClick: function() {
            $n(Ss.newAddressContainer, this.$sideScroller).toggleClass(xs.newAddressHide)
        },
        _onEditAddressClick: function(t) {
            var e = $n(t.target).data("form-id");
            $n(Ss.editAddressContainer + e, this.$sideScroller).toggleClass(xs.editAddressShow)
        },
        _onDeleteAddressClick: function(t) {
            var e = $n(t.target),
                n = e.data("form-id"),
                i = e.data("confirm-message"),
                r = $n(Ss.currentAddress + n, this.$sideScroller);
            confirm(i) && ($n.post("/account/addresses/" + n, {
                _method: "delete"
            }), r.remove(), $n(Ss.currentAddressesItem).length || ($n(Ss.currentAddresses, this.$sideScroller).remove(), $n(Ss.newAddressContainer, this.$sideScroller).removeClass(xs.newAddressHide)))
        }
    });
    var Cs = {
        recoverPasswordForm: "#RecoverPassword",
        hideRecoverPasswordLink: "#HideRecoverPasswordLink"
    };
    ss.register("Customer Login Template", "template-customers-login", {
        onLoad: function(t) {
            var e = this.$sideScroller = $n(t);
            this.checkUrlHash(), this.resetPasswordSuccess(), $n(Cs.recoverPasswordForm, e).on("click", this.onShowHidePasswordForm.bind(this)), $n(Cs.hideRecoverPasswordLink, e).on("click", this.onShowHidePasswordForm.bind(this))
        },
        onShowHidePasswordForm: function(t) {
            t.preventDefault(), this.toggleRecoverPasswordForm()
        },
        checkUrlHash: function() {
            "#recover" === window.location.hash && this.toggleRecoverPasswordForm()
        },
        toggleRecoverPasswordForm: function() {
            $n("#RecoverPasswordForm").toggleClass("hide"), $n("#CustomerLoginForm").toggleClass("hide")
        },
        resetPasswordSuccess: function() {
            $n(".reset-password-success").length && $n("#ResetSuccess").removeClass("hide")
        }
    });
    var Ts = {
            pageLinkFocus: function(t) {
                function e() {
                    t.first().removeClass(n).removeAttr("tabindex")
                }
                var n = "js-focus-hidden";
                t.first().attr("tabIndex", "-1").focus().addClass(n).one("blur", e)
            },
            forceFocus: function(t) {
                t.focus(), t.is(document.activeElement) || t.attr("tabindex", "0").focus().one("blur", function() {
                    t.removeAttr("tabindex")
                })
            },
            focusHash: function() {
                var t = window.location.hash;
                t && document.getElementById(t.slice(1)) && this.pageLinkFocus($n(t))
            },
            bindInPageLinks: function() {
                $n("a[href*=#]").on("click", function(t) {
                    this.pageLinkFocus($n(t.currentTarget.hash))
                }.bind(this))
            },
            trapFocus: function(t) {
                var e = t.namespace ? "focusin." + t.namespace : "focusin";
                t.$elementToFocus || (t.$elementToFocus = t.$container), t.$container.attr("tabindex", "-1"), t.$elementToFocus.focus(), $n(document).on(e, function(e) {
                    t.$container[0] === e.target || t.$container.has(e.target).length || t.$container.focus()
                })
            },
            removeTrapFocus: function(t) {
                var e = t.namespace ? "focusin." + t.namespace : "focusin";
                t.$container && t.$container.length && t.$container.removeAttr("tabindex"), $n(document).off(e)
            }
        },
        ks = {
            wrapTable: function() {
                $n(".rte table").wrap('<div class="rte__table-wrapper"></div>')
            },
            iframeReset: function() {
                var t = $n('.rte iframe[src*="youtube.com/embed"], .rte iframe[src*="player.vimeo"]'),
                    e = t.add(".rte iframe#admin_bar_iframe");
                t.each(function() {
                    $n(this).wrap('<div class="video-wrapper"></div>')
                }), e.each(function() {
                    this.src = this.src
                })
            }
        };
    ss.register("Page Helpers", "*", {
        onLoad: function() {
            this.pageLinkFocus(), this.rteFixes(), this.disableOutlineOnClick(), this.checkIfMobileOS()
        },
        pageLinkFocus: function() {
            Ts.pageLinkFocus($(window.location.hash)), $(".in-page-link").on("click", function(t) {
                Ts.pageLinkFocus($(t.currentTarget.hash))
            })
        },
        rteFixes: function() {
            ks.wrapTable(), ks.iframeReset()
        },
        disableOutlineOnClick: function() {
            var t = {
                outlineDisabled: "outline-disabled"
            };
            $("html").addClass(t.outlineDisabled), $(document).on("keyup", function() {
                $("html").removeClass(t.outlineDisabled)
            }), $(document).on("click", function(e) {
                $("html").toggleClass(t.outlineDisabled, !$(e.target).is("input, textarea, select"))
            })
        },
        checkIfMobileOS: function() {
            var t = navigator.userAgent.toLowerCase(),
                e = /ipad|iphone|ipod/.test(t) && !window.MSStream,
                n = /android/.test(t);
            (e || n) && $("html").addClass("is-mobile-os")
        }
    });
    var $s = {
        qrCode: "#QrCode",
        printButton: "#PrintGiftCard",
        giftCardCode: ".giftcard__code"
    };
    ss.register("Giftcard Template", "template-giftcard", {
            onLoad: function() {
                var t = $n($s.qrCode);
                new QRCode(t[0], {
                    text: t.attr("data-identifier"),
                    width: 120,
                    height: 120
                }), $n($s.printButton).on("click", function() {
                    window.print()
                }), $n($s.giftCardCode).on("click", {
                    element: "GiftCardDigits"
                }, this.selectText)
            },
            selectText: function(t) {
                var e = "",
                    n = document.getElementById(t.data.element);
                if (document.body.createTextRange) e = document.body.createTextRange(), e.moveToElementText(n), e.select();
                else if (window.getSelection) {
                    var i = window.getSelection();
                    e = document.createRange(), e.selectNodeContents(n), i.removeAllRanges(), i.addRange(e)
                }
            }
        }),
        function(t) {
            t.fn.prepareTransition = function() {
                return this.each(function() {
                    var e = t(this);
                    e.one("TransitionEnd webkitTransitionEnd transitionend oTransitionEnd", function() {
                        e.removeClass("is-transitioning")
                    });
                    var n = ["transition-duration", "-moz-transition-duration", "-webkit-transition-duration", "-o-transition-duration"],
                        i = 0;
                    t.each(n, function(t, n) {
                        i || (i = parseFloat(e.css(n)))
                    }), 0 != i && (e.addClass("is-transitioning"), e[0].offsetWidth)
                })
            }
        }($n);
    var Es = {
            passwordModal: ".password-modal",
            modalOpenButton: ".password__open-modal",
            modalCloseButton: ".password-modal__close",
            modalInput: ".password-modal__input"
        },
        As = {
            passwordModalOpen: "password-modal--open",
            disableScroll: "disable-scroll"
        };
    ss.register("Password Template", "password-template", {
        onLoad: function(t) {
            var e = this.$container = $n(t);
            $n(Es.modalOpenButton, e).on("click", this.showPasswordModal.bind(this)), $n(Es.modalCloseButton, e).on("click", this.hidePasswordModal.bind(this)), $n(".errors", e).length && this.showPasswordModal()
        },
        showPasswordModal: function() {
            var t = this.$container,
                e = $n(Es.passwordModal, t);
            Ts.trapFocus({
                $container: e,
                namespace: "passwordModal",
                $elementToFocus: $n(Es.modalCloseButton, t)
            }), e.prepareTransition().addClass(As.passwordModalOpen), $n(Es.modalOpenButton, t).attr("aria-expanded", !0), $n(Es.modalInput, t).focus(), $n(document.documentElement).addClass(As.disableScroll), $n(document).on("keyup", this.closeOnEscape.bind(this))
        },
        hidePasswordModal: function() {
            var t = this.$container,
                e = $n(Es.passwordModal, t);
            Ts.removeTrapFocus({
                namespace: "passwordModal"
            }), e.prepareTransition().removeClass(As.passwordModalOpen), $n(document.documentElement).removeClass(As.disableScroll), $n(Es.modalOpenButton, t).attr("aria-expanded", !1).focus(), $n(document).off("keyup", this.closeOnEscape.bind(this))
        },
        closeOnEscape: function(t) {
            27 === t.keyCode && this.hidePasswordModal()
        }
    });
    var js = Array.prototype,
        Ps = js.splice,
        Ds = function(t) {
            return function(e, n, i) {
                for (var r = -1, o = Object(e), s = i(e), a = s.length; a--;) {
                    var c = s[t ? a : ++r];
                    if (!1 === n(o[c], c, o)) break
                }
                return e
            }
        }(),
        Ns = function(t, e) {
            return function(n, i) {
                if (null == n) return n;
                if (!nt(n)) return t(n, i);
                for (var r = n.length, o = e ? r : -1, s = Object(n);
                    (e ? o-- : ++o < r) && !1 !== i(s[o], o, s););
                return n
            }
        }(Ie);
    $n.extend(Le.prototype, {
        registered: {},
        instances: [],
        extensions: {
            "*": []
        },
        register: function(t, e) {
            function n(e) {
                this.type = t, He.call(this, e)
            }
            n.constructor = this.registered[t], n.prototype = Object.create(He.prototype), $n.extend(n.prototype, e), this.registered[t] = n
        },
        load: function(t, e) {
            t = this._normalizeTypeParam(t), e = this._normalizeContainersParam(e), t.forEach(function(t) {
                var n = this.registered[t],
                    i = e;
                void 0 !== n && (void 0 === i && (i = document.querySelectorAll('[data-section-type="' + t + '"]')), i = Array.prototype.slice.call(i), i.forEach(function(e) {
                    if (!this._instanceExists(e)) {
                        var i = this.extensions["*"].concat(this.extensions[t] || []),
                            r = new n({
                                container: e,
                                extensions: i,
                                id: e.getAttribute("data-section-id")
                            });
                        r.trigger("section_load"), this.instances.push(r)
                    }
                }.bind(this)))
            }.bind(this))
        },
        extend: function(t, e) {
            t = this._normalizeTypeParam(t), t.forEach(function(t) {
                this.extensions[t] = this.extensions[t] || [], this.extensions[t].push(e), void 0 !== this.registered[t] && this.instances.forEach(function(n) {
                    n.type === t && n.extend(e)
                })
            }.bind(this))
        },
        isInstance: function(t) {
            return "object" == typeof os(this.instances, {
                type: t
            })
        },
        getInstances: function(t) {
            return $n.Deferred(function(e) {
                var n = Be(this.instances, {
                    type: t
                });
                0 === n.length ? e.reject() : e.resolve(n)
            }.bind(this))
        },
        on: function() {
            var t = Array.prototype.slice.call(arguments);
            t[0] = t[0].concat(this.namespace), this.$document.on.apply(this.$document, t)
        },
        off: function() {
            var t = Array.prototype.slice.call(arguments);
            t[0] = t[0].concat(this.namespace), this.$document.off.apply(this.$document, arguments)
        },
        trigger: function() {
            var t = arguments;
            this.instances.forEach(function(e) {
                e.trigger.apply(e, t)
            })
        },
        _sectionTrigger: function() {
            this.$document.trigger.apply(this.$document, arguments)
        },
        _normalizeTypeParam: function(t) {
            return "*" === t ? t = Object.keys(this.registered) : "string" == typeof t && (t = [t]), t = t.map(function(t) {
                return t.toLowerCase()
            })
        },
        _normalizeContainersParam: function(t) {
            return Array.isArray(t) || "object" != typeof t || (t = [t]), t
        },
        _instanceExists: function(t) {
            return void 0 !== os(this.instances, {
                id: t.getAttribute("data-section-id")
            })
        }
    });
    var Os = new Le;
    He.prototype = {
        onLoad: function() {},
        onUnload: function() {},
        onSelect: function() {},
        onDeselect: function() {},
        onBlockSelect: function() {},
        onBlockDeselect: function() {},
        on: function() {
            var t = Array.prototype.slice.call(arguments);
            t[0] = t[0].concat(this.namespace), this.$eventBinder.on.apply(this.$eventBinder, t), this.$eventBinder = this.$container
        },
        one: function() {
            var t = Array.prototype.slice.call(arguments);
            t[0] = t[0].concat(this.namespace), this.$eventBinder.one.apply(this.$eventBinder, t), this.$eventBinder = this.$container
        },
        off: function() {
            var t = Array.prototype.slice.call(arguments);
            t[0] = t[0] || "", t[0] = t[0].concat(this.namespace), this.$eventBinder.off.apply(this.$eventBinder, arguments), this.$eventBinder = this.$container
        },
        trigger: function() {
            var t = Array.prototype.slice.call(arguments);
            t[1] = t[1] || [], t[1].splice(0, 0, this), this.$eventBinder.trigger.apply(this.$eventBinder, t), this.$eventBinder = this.$container
        },
        extend: function(t) {
            var e = t.init;
            this.extensions.push(t), $n.extend(this, yo(t, "init")), $n.isFunction(e) && e.apply(this)
        }
    }, He.prototype.document = function() {
        var t = $n(document),
            e = this;
        return {
            on: function() {
                e.$eventBinder = t, e.on.apply(e, arguments)
            },
            off: function() {
                e.$eventBinder = t, e.off.apply(e, arguments)
            },
            trigger: function() {
                e.$eventBinder = t, e.trigger.apply(e, arguments)
            }
        }
    }, He.prototype.window = function() {
        var t = $n(window),
            e = this;
        return {
            on: function() {
                e.$eventBinder = t, e.on.apply(e, arguments)
            },
            off: function() {
                e.$eventBinder = t, e.off.apply(e, arguments)
            },
            trigger: function() {
                e.$eventBinder = t, e.trigger.apply(e, arguments)
            }
        }
    };
    var Is = Ye,
        Fs = "object" == typeof kn && kn && kn.Object === Object && kn,
        Bs = Fs,
        Ls = Bs,
        Hs = "object" == typeof self && self && self.Object === Object && self,
        Ms = Ls || Hs || Function("return this")(),
        qs = Ms,
        Rs = qs,
        Ws = Rs.Symbol,
        zs = Ws,
        Vs = zs,
        Us = Object.prototype,
        Xs = Us.hasOwnProperty,
        Ys = Us.toString,
        Qs = Vs ? Vs.toStringTag : void 0,
        Gs = Qe,
        Ks = Object.prototype,
        Js = Ks.toString,
        Zs = Ge,
        ta = zs,
        ea = Gs,
        na = Zs,
        ia = "[object Null]",
        ra = "[object Undefined]",
        oa = ta ? ta.toStringTag : void 0,
        sa = Ke,
        aa = Je,
        ca = sa,
        ua = aa,
        la = "[object Symbol]",
        da = Ze,
        ha = Is,
        fa = da,
        pa = NaN,
        ma = /^\s+|\s+$/g,
        ga = /^[-+]0x[0-9a-f]+$/i,
        va = /^0b[01]+$/i,
        ya = /^0o[0-7]+$/i,
        ba = parseInt,
        _a = tn,
        wa = _a,
        Sa = 1 / 0,
        xa = 1.7976931348623157e308,
        Ca = en,
        Ta = Ca,
        ka = nn,
        $a = rn,
        Ea = $a,
        Aa = ka,
        ja = 4294967295,
        Pa = on,
        Da = ka,
        Na = Pa,
        Oa = sn,
        Ia = an,
        Fa = sa,
        Ba = Is,
        La = "[object AsyncFunction]",
        Ha = "[object Function]",
        Ma = "[object GeneratorFunction]",
        qa = "[object Proxy]",
        Ra = cn,
        Wa = 9007199254740991,
        za = un,
        Va = Ra,
        Ua = za,
        Xa = ln,
        Ya = 9007199254740991,
        Qa = /^(?:0|[1-9]\d*)$/,
        Ga = dn,
        Ka = Ia,
        Ja = Xa,
        Za = Ga,
        tc = Is,
        ec = hn,
        nc = Oa,
        ic = ec,
        rc = fn,
        oc = {
            cardListSubLoaded: "card-list__sub-actions--loaded",
            cardReveal: "card--reveal"
        },
        sc = {
            cardList: ".card-list",
            cardListColumn: ".card-list__column",
            cardListSub: ".card-list__sub-actions",
            card: ".card",
            cardWrapper: ".card__wrapper"
        },
        ac = {
            init: function() {
                this.$cardList = $n(sc.cardList, this.$container), this.$emptyColumn = $n(sc.cardListColumn, this.$container).clone().empty(), this.$cards = $n(sc.card, this.$container), this.desktopColumnCount = this.$cardList.data("desktop-columns") || 2, this.mobileColumnCount = this.$cardList.data("mobile-columns") || 1, this.cardLoadPromises = [], this.window().on("resize", this._onResize.bind(this)), this.on("keydown", sc.cardWrapper, this._onCardTabDown.bind(this)), this.on("keyup", this._onCardTabUp.bind(this)), cs.promiseStylesheet().then(function() {
                    this.cardsLoaded = this._loadCards(), $n("html").removeClass("site-footer--hidden"), $n(sc.cardListSub, this.$container).prepareTransition().addClass(oc.cardListSubLoaded)
                }.bind(this))
            },
            _onResize: function() {
                this.$columns = this._replaceColumns()
            },
            _onCardTabDown: function(t) {
                if (9 === t.keyCode) {
                    var e = $n(t.target).data("tabindex");
                    this.tabFromList = !0, t.shiftKey ? e > 1 && (t.preventDefault(), $n("[data-tabindex=" + (e - 1) + "]").focus()) : e === this.$cards.length ? $n(sc.cardWrapper, this.$container).last().focus() : (t.preventDefault(), $n("[data-tabindex=" + (e + 1) + "]").focus())
                }
            },
            _onCardTabUp: function(t) {
                if (9 === t.keyCode) {
                    var e = this.tabFromList || !1;
                    this.tabFromList = !1, t.shiftKey && !e && $n(sc.cardWrapper, this.$container).last().is(t.target) && $n("[data-tabindex=" + this.$cards.length + "]").focus()
                }
            },
            _loadCards: function() {
                return this.trigger("cards_load_start"), this.$columns = this._addColumns(), this._promiseAllCardsReveal().always(function() {
                    this.trigger("cards_load_done")
                }.bind(this))
            },
            _addColumns: function() {
                for (var t, e = cs.isMobile() ? this.mobileColumnCount : this.desktopColumnCount, n = 1; n < e; n++) this.$cardList.append(this.$emptyColumn.clone());
                return t = $n(sc.cardListColumn, this.$container), t.heights = rc(Array(e), 0), t
            },
            _replaceColumns: function() {
                var t = cs.isMobile() ? this.mobileColumnCount : this.desktopColumnCount,
                    e = this.$emptyColumn.clone();
                e.heights = rc(Array(t), 0);
                for (var n = 1; n < t; n++) e.push(this.$emptyColumn.clone()[0]);
                return $n.each(this.$cards, function(t, n) {
                    this._positionCard($n(n), t, e)
                }.bind(this)), this.$cardList.html(e), e
            },
            _promiseAllCardsReveal: function() {
                var t = $n.Deferred().resolve();
                return this.$cards.each(function(e, n) {
                    this._positionCard($n(n), e, this.$columns);
                    var i = this._promiseRevealReady(n);
                    t = t.then(function() {
                        return i
                    }).then(this._revealCard.bind(this, n)).then(function() {
                        return $n.Deferred(function(t) {
                            setTimeout(t.resolve, 80)
                        })
                    })
                }.bind(this)), t
            },
            _revealCard: function(t) {
                var e = $n(t);
                this.trigger("card_loaded", [e[0]]), requestAnimationFrame(e.addClass.bind(e, oc.cardReveal))
            },
            _promiseRevealReady: function(t) {
                return $n.Deferred(function(e) {
                    function n(r, o) {
                        o === t && (i.off("animate_element", n), e.resolve())
                    }
                    var i = $n(t);
                    requestAnimationFrame(function() {
                        if (cs.isInOrAboveViewport(t)) return e.resolve()
                    }), i.on("animate_element", n)
                })
            },
            _positionCard: function(t, e, n) {
                for (var i = t.outerHeight(!0), r = n.heights.indexOf(Math.min.apply(Math, n.heights)), o = 0; o < n.heights.length; o++)
                    if (n.heights[r] > n.heights[o] - 150) {
                        r = o;
                        break
                    }
                n.eq(r).append(t), n.heights[r] += i, t.find("a").attr("data-tabindex", e + 1)
            }
        };
    Os.register("blog-template", {
        onLoad: function() {
            this.extend(ac)
        }
    });
    var cc, uc, lc = "undefined" != typeof document && document,
        dc = lc ? lc.body || lc.createElement("div") : {},
        hc = "http://www.w3.org/1999/xhtml",
        fc = 1,
        pc = 3,
        mc = 8;
    uc = dc.hasAttributeNS ? function(t, e, n) {
        return t.hasAttributeNS(e, n)
    } : dc.hasAttribute ? function(t, e, n) {
        return t.hasAttribute(n)
    } : function(t, e, n) {
        return !!t.getAttributeNode(n)
    };
    var gc = {
            OPTION: function(t, e) {
                mn(t, e, "selected")
            },
            INPUT: function(t, e) {
                mn(t, e, "checked"), mn(t, e, "disabled"), t.value !== e.value && (t.value = e.value), uc(e, null, "value") || t.removeAttribute("value")
            },
            TEXTAREA: function(t, e) {
                var n = e.value;
                t.value !== n && (t.value = n), t.firstChild && (t.firstChild.nodeValue = n)
            }
        },
        vc = Sn,
        yc = {
            isUpdating: !1,
            getCart: function() {
                return $n.getJSON("/cart.js")
            },
            on: function(t, e) {
                $n(this).on(t, e)
            },
            trigger: function(t, e) {
                $n(this).triggerHandler(t, e)
            },
            updateNote: function(t) {
                return this._promiseChange({
                    url: "/cart/update.js",
                    dataType: "json",
                    data: {
                        note: t || ""
                    }
                })
            },
            addItem: function(t, e) {
                return this._promiseChange({
                    url: "/cart/add.js",
                    dataType: "json",
                    data: {
                        id: t,
                        quantity: void 0 === e ? 1 : e
                    }
                })
            },
            addItemFromForm: function(t) {
                return this._promiseChange({
                    url: "/cart/add.js",
                    dataType: "json",
                    data: t
                })
            },
            removeItem: function(t) {
                return this._promiseChange({
                    url: "/cart/change.js",
                    dataType: "json",
                    data: {
                        id: t,
                        quantity: 0
                    }
                })
            },
            changeItem: function(t, e) {
                var n = parseInt(e, 10),
                    i = {
                        url: "/cart/change.js",
                        dataType: "json",
                        data: {
                            id: t,
                            quantity: e
                        }
                    };
                return this._promiseChange(i).then(function(e) {
                    var i = os(e.items, {
                        key: t
                    });
                    return "object" == typeof i && i.quantity !== n && this.trigger("quantity", i), e
                }.bind(this))
            },
            saveLocalState: function(t) {
                return cs.isLocalStorageSupported() && (localStorage.shopify_cart_state = JSON.stringify(t)), t
            },
            getLocalState: function() {
                if (cs.isLocalStorageSupported()) return JSON.parse(localStorage.shopify_cart_state || "")
            },
            _promiseChange: function(t) {
                var e = $n.ajax(t);
                return this.isUpdating = !0, navigator && !theme.isOnline && (e = $n.Deferred().reject()), e.then(function(t) {
                    return void 0 === t.token ? this.getCart() : t
                }.bind(this)).then(this.saveLocalState).then(this._triggerChangeEvent.bind(this)).catch(this._triggerErrorEvent.bind(this)).always(function() {
                    this.isUpdating = !1
                }.bind(this))
            },
            _triggerChangeEvent: function(t) {
                return this.trigger("change", t), t
            },
            _triggerErrorEvent: function(t) {
                throw this.trigger("error", t), t
            }
        },
        bc = {
            formatMoney: function(t, e) {
                function n(t, e, n, i) {
                    if (e = xn(e, 2), n = xn(n, ","), i = xn(i, "."), isNaN(t) || null == t) return 0;
                    t = (t / 100).toFixed(e);
                    var r = t.split(".");
                    return r[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + n) + (r[1] ? i + r[1] : "")
                }
                "string" == typeof t && (t = t.replace(".", ""));
                var i = "",
                    r = /\{\{\s*(\w+)\s*\}\}/,
                    o = e || "${{amount}}";
                switch (o.match(r)[1]) {
                    case "amount":
                        i = n(t, 2);
                        break;
                    case "amount_no_decimals":
                        i = n(t, 0);
                        break;
                    case "amount_with_comma_separator":
                        i = n(t, 2, ".", ",");
                        break;
                    case "amount_no_decimals_with_comma_separator":
                        i = n(t, 0, ".", ",");
                        break;
                    case "amount_no_decimals_with_space_separator":
                        i = n(t, 0, " ")
                }
                return o.replace(r, i)
            }
        },
        _c = {
            preload: function(t, e) {
                "string" == typeof t && (t = [t]);
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    this.loadImage(this.getSizedImageUrl(i, e))
                }
            },
            loadImage: function(t) {
                (new Image).src = t
            },
            switchImage: function(t, e, n) {
                var i = this.imageSize(e.src),
                    r = this.getSizedImageUrl(t.src, i);
                n ? n(r, t, e) : e.src = r
            },
            imageSize: function(t) {
                t = t || "";
                var e = t.match(/.+_((?:pico|icon|thumb|small|compact|medium|large|grande)|\d{1,4}x\d{0,4}|x\d{1,4})[_\.@]/);
                return null !== e ? e[1] : null
            },
            getSizedImageUrl: function(t, e) {
                if (null == e) return t;
                if ("master" === e) return this.removeProtocol(t);
                var n = t.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);
                if (null != n) {
                    var i = t.split(n[0]),
                        r = n[0];
                    return this.removeProtocol(i[0] + "_" + e + r)
                }
                return null
            },
            removeProtocol: function(t) {
                return t.replace(/http(s)?:/, "")
            }
        },
        wc = {
            itemId: "data-cart-item-id"
        },
        Sc = {
            ajaxCart: ".cart-drawer",
            itemList: "[data-cart-item-list]",
            item: "[data-cart-item]",
            itemId: "[data-cart-item-id]",
            itemHref: "[data-cart-item-href]",
            itemImage: "[data-cart-item-image]",
            itemBackgroundImage: "[data-cart-item-background-image]",
            itemTitle: "[data-cart-item-title]",
            itemVariantTitle: "[data-cart-item-variant-title]",
            itemPropertyList: "[data-cart-item-property-list]",
            itemProperty: "[data-cart-item-property]",
            itemDiscountList: "[data-cart-item-discount-list]",
            itemDiscount: "[data-cart-item-discount]",
            itemLabelQuantity: "[data-cart-item-label-quantity]",
            itemInputQuantity: "[data-cart-item-input-quantity]",
            itemDelete: "[data-cart-item-delete]",
            itemPrice: "[data-cart-item-price]",
            itemMessage: "[data-item-message]",
            itemOriginalPrice: "[data-cart-item-original-price]",
            itemLinePrice: "[data-cart-item-line-price]",
            cartNoteContainer: "[data-cart-note-container]",
            cartNoteInput: "[data-cart-note]",
            cartMessage: "[data-cart-message]",
            cartTotalDiscountContainer: "[data-cart-total-discount-container]",
            cartTotalDiscount: "[data-cart-total-discount]",
            cartSubtotal: "[data-cart-subtotal]",
            cartSubmit: "[data-cart-submit]"
        },
        xc = {
            cartTemplate: "ajax-cart__template",
            cartItemRemove: "ajax-cart__item--remove",
            cartError: "ajax-cart--error",
            visuallyHidden: "visually-hidden",
            cartDiscountActive: "ajax-cart__discount-container--active",
            btnLoaderActive: "btn--loader-active"
        },
        Cc = {
            init: function() {
                this.$ajaxCart = $n(Sc.ajaxCart, this.$container), this.$itemTemplate = $n(Sc.item, this.$container).first().clone(), this.$propertyTemplate = $n(Sc.itemProperty, this.$container).first().clone(), this.$discountTemplate = $n(Sc.itemDiscount, this.$container).first().clone(), yc.on("quantity", this._onQuantityError.bind(this)), yc.on("change", function(t, e) {
                    this.update(e)
                }.bind(this)), this.on("change keyup input", Sc.itemInputQuantity, je(this._onItemQuantityChange.bind(this), 500)), this.on("focus", Sc.itemInputQuantity, this._highlightText), this.on("click", Sc.itemDelete, this._onItemDelete.bind(this)), this.on("change", Sc.cartNoteInput, this._onNoteChange.bind(this)), this.on("submit", this._onSubmit.bind(this)), this.window().on("storage", this._onStorageStateChange.bind(this))
            },
            refresh: function() {
                yc.getCart().then(this.update.bind(this))
            },
            update: function(t) {
                this.trigger("cart_update_start", [t]);
                var e = this._createCart(t);
                vc(this.$container[0], e[0]), this.trigger("cart_update_done", [t])
            },
            _onError: function(t) {
                this.trigger("cart_error", [t]), this.$container.addClass(xc.cartError), $n(Sc.item, this.$container).removeClass(xc.cartItemRemove), $n(Sc.cartMessage, this.$container).text(theme.strings.cartError)
            },
            _onQuantityError: function(t, e) {
                this.trigger("cart_item_quantity_error", [e]), this.$container.addClass(xc.cartError);
                var n = theme.strings.cartQuantityError.replace("[quantity]", e.quantity).replace("[title]", e.title);
                $n(Sc.itemMessage, $n("[" + wc.itemId + '="' + e.key + '"]')).html(n), $n(Sc.cartMessage, this.$container).html(n)
            },
            _createCart: function(t) {
                var e = this.$container.clone();
                return e.removeClass(xc.cartError), $n(Sc.cartMessage, e).text(""), $n(Sc.item, e).not(Sc.cartNoteContainer).remove(), $n(Sc.itemList, e).prepend(this._createItemList(t)), $n(Sc.cartNoteInput, e).val(t.note), $n(Sc.cartTotalDiscountContainer, e).toggleClass(xc.cartDiscountActive, 0 !== t.total_discount), $n(Sc.cartTotalDiscount, e).html(bc.formatMoney(t.total_discount, theme.moneyFormat)), $n(Sc.cartSubtotal, e).html(bc.formatMoney(t.total_price, theme.moneyFormat)), $n(Sc.cartSubmit, e).attr("disabled", 0 === t.items.length), e
            },
            _createItemList: function(t) {
                return $n.map(t.items, function(t) {
                    var e = this.$itemTemplate.clone().removeClass(xc.cartTemplate),
                        n = this._createPropertyList(t),
                        i = this._createDiscountList(t);
                    return e.find(Sc.itemId).addBack(Sc.itemId).attr(wc.itemId, t.key), $n(Sc.itemHref, e).attr("href", t.url), $n(Sc.itemImage, e).attr("src", t.image ? _c.getSizedImageUrl(t.image, "medium") : "").toggleClass("hide", "string" != typeof t.image), $n(Sc.itemBackgroundImage, e).css("background-image", t.image ? "url(" + _c.getSizedImageUrl(t.image, "medium") + ")" : "none"), $n(Sc.itemTitle, e).text(t.product_title), $n(Sc.itemVariantTitle, e).text(t.variant_title), $n(Sc.itemPrice, e).html(bc.formatMoney(t.discounted_price, theme.moneyFormat)), $n(Sc.itemOriginalPrice, e).html(t.discounted_price === t.price ? "" : bc.formatMoney(t.original_price, theme.moneyFormat)), $n(Sc.itemLinePrice, e).html(bc.formatMoney(t.line_price, theme.moneyFormat)), $n(Sc.itemLabelQuantity, e).attr("for", "quantity_" + t.key), $n(Sc.itemInputQuantity, e).attr("name", "updates[" + t.key + "]").attr("id", "quantity_" + t.key).val(t.quantity), $n(Sc.itemPropertyList, e).html(n), $n(Sc.itemDiscountList, e).html(i), e[0]
                }.bind(this))
            },
            _createPropertyList: function(t) {
                return $n.map(t.properties, function(t, e) {
                    var n = this.$propertyTemplate.clone().removeClass(xc.cartTemplate);
                    return -1 === t.indexOf("/uploads/") ? n.text(e + ": " + t).toggleClass(xc.visuallyHidden, "" === t) : n.html(e + ': <a href="' + t + '">' + t.split("/").pop() + "</a>"), n[0]
                }.bind(this))
            },
            _createDiscountList: function(t) {
                return $n.map(t.discounts, function(t) {
                    var e = this.$discountTemplate.clone().removeClass(xc.cartTemplate);
                    return e.text(t.title), e[0]
                }.bind(this))
            },
            _onStorageStateChange: function(t) {
                if ("shopify_cart_state" === t.key) {
                    var e = yc.getLocalState();
                    this.trigger("cart_storage_state_change", [e]), this.update(yc.getLocalState())
                }
            },
            _onItemQuantityChange: function(t) {
                var e = $n(t.target),
                    n = e.closest(Sc.item).attr(wc.itemId),
                    i = e.val();
                this.trigger("cart_item_quantity_change", [n, i]), yc.changeItem(n, i).catch(this._onError.bind(this))
            },
            _onItemDelete: function(t) {
                t.preventDefault();
                var e = $n(t.target),
                    n = $n(Sc.item, this.$container),
                    i = e.closest(Sc.item),
                    r = $n(Sc.cartNoteContainer, this.$container),
                    o = i.attr(wc.itemId);
                this.trigger("cart_item_remove", [o]), 2 === n.length && n.last().is(r) && (r.addClass(xc.cartItemRemove), cs.promiseTransitionEnd($n(Sc.itemList, this.$container)).then(function() {
                    r.removeClass(xc.cartItemRemove)
                })), i.addClass(xc.cartItemRemove), cs.promiseAnimationEnd(i).then(function() {
                    yc.removeItem(o).catch(this._onError.bind(this))
                }.bind(this))
            },
            _onNoteChange: function(t) {
                var e = $n(t.target).val();
                this.trigger("cart_note_change", [e]), yc.updateNote(e).catch(this._onError.bind(this))
            },
            _onSubmit: function(t) {
                yc.isUpdating ? t.preventDefault() : ($n(Sc.cartSubmit, this.$container).addClass(xc.btnLoaderActive), this.trigger("cart_submit"))
            },
            _highlightText: function(t) {
                $n(t.target).select()
            }
        },
        Tc = {
            drawerActive: "drawer--active",
            disableScroll: "disable-scroll"
        },
        kc = {
            drawerPush: "[data-drawer-push]",
            drawerCover: ".drawer-cover",
            mainContent: ".main-content",
            siteHeader: ".site-header"
        },
        $c = {
            init: function() {
                this.$toggleButton = null, this.draggingAction = null, this.namespaceTouch = ".onTouchStart", this.namespaceOpen = ".onOpen", this.document().on("resize", this._onWindowResize.bind(this))
            },
            drawerOpen: function(t) {
                this.trigger("drawer_open_start"), Ts.trapFocus({
                    $container: this.$container,
                    namespace: "drawer"
                }), t && t.currentTarget && (this.$toggleButton = $n(t.target).attr("aria-expanded", !0)), cs.disableScrollBody(), $n("body").addClass(Tc.drawerActive), this.trigger("drawer_open_transitioning"), cs.promiseTransitionEnd(this.$container).then(function() {
                    cs.enableTabbingOfChildren(this.$container), this.$container.attr("aria-hidden", !1), this.document().on("click touchend" + this.namespaceOpen, kc.drawerCover, this.drawerClose.bind(this)), this.document().on("keyup" + this.namespaceOpen, this._closeOnEscape.bind(this)), this.document().on("touchstart" + this.namespaceOpen, this._onTouchStart.bind(this)), this.trigger("drawer_open_done")
                }.bind(this))
            },
            drawerClose: function() {
                this.trigger("drawer_close_start"), Ts.removeTrapFocus({
                    namespace: "drawer"
                }), this.$toggleButton && this.$toggleButton.length && (this.$toggleButton.focus().attr("aria-expanded", !1), this.$toggleButton = null), cs.enableScrollBody(), cs.disableTabbingOfChildren(this.$container), this.$container.attr("aria-hidden", !0), this.document().off(this.namespaceOpen), $n("body").removeClass(Tc.drawerActive), this.trigger("drawer_close_transitioning"), cs.promiseTransitionEnd(this.$container).then(function() {
                    this.trigger("drawer_close_done")
                }.bind(this))
            },
            _onWindowResize: function() {
                this.sliderWidth = 0
            },
            _onTouchStart: function(t) {
                this.startPosition = cs.pointerEventToXY(t), this.$elementsToPush = this.$elementsToPush || $n(kc.drawerPush), this.sliderWidth = this.sliderWidth || this.$container.width(), this.isDragging = !1, this.document().on("touchmove" + this.namespaceTouch, this._onTouchMove.bind(this)), this.document().on("touchend" + this.namespaceTouch, this._onTouchEnd.bind(this))
            },
            _onTouchMove: function(t) {
                var e, n, i, r;
                this.isDragging = !0, this.currentPosition = cs.pointerEventToXY(t), this.trigger("drawer_dragging", [this.currentPosition]), e = this.currentPosition.x - this.startPosition.x, n = this.currentPosition.y - this.startPosition.y, i = Math.atan2(e, n) / (Math.PI / 180), this.translated = e > 0 ? e : 0, Math.abs(i) > 65 && Math.abs(i) < 115 && null === this.draggingAction ? this.draggingAction = "slide" : (Math.abs(i) < 65 || Math.abs(i) > 115) && null === this.draggingAction && (this.draggingAction = "scroll"), "slide" === this.draggingAction && (t.preventDefault(), r = {
                    transform: "translateX(-" + (this.sliderWidth - this.translated) + "px)",
                    transition: "none"
                }, this.$elementsToPush.css(r))
            },
            _onTouchEnd: function() {
                var t;
                this.wasDragging = this.isDragging, this.isDragging = !1, this.wasDragging && (t = this.translated / this.sliderWidth, t > .25 && "slide" === this.draggingAction ? (this.drawerClose("ease-out"), this.trigger("drawer_dragging_success")) : this.trigger("drawer_dragging_fail"), this.$elementsToPush.removeAttr("style")), this.draggingAction = null, this.document().off(this.namespaceTouch)
            },
            _closeOnEscape: function(t) {
                27 === t.keyCode && this.drawerClose()
            }
        },
        Ec = {
            drawer: ".drawer",
            cartHeader: ".cart-drawer__header",
            cartTitle: ".cart-drawer__header-title",
            cartContent: ".cart-drawer__content",
            cartToggle: ".ajax-cart__toggle",
            cartCloseButton: ".cart-drawer__close-button",
            siteHeader: ".site-header"
        },
        Ac = {
            cartTemplate: "template-cart",
            cartEmpty: "cart-drawer--empty",
            cartNoCookies: "cart-drawer--no-cookies"
        };
    Os.register("cart-drawer", {
        onLoad: function() {
            if (!$n(document.body).hasClass(Ac.cartTemplate)) {
                if (this.extend($c), this._setDrawerHeaderHeight(), this.on("drawer_close_done", this._onDrawerClose.bind(this)), this.document().on("click", Ec.cartToggle, this._openCartDrawer.bind(this)), !cs.cookiesEnabled()) return void this.$container.addClass(Ac.cartNoCookies);
                this.extend(Cc), yc.on("change", function(t, e) {
                    this.$ajaxCart.toggleClass(Ac.cartEmpty, 0 === e.items.length)
                }.bind(this))
            }
        },
        onSelect: function() {
            this._openCartDrawer()
        },
        onDeselect: function() {
            this._closeCartDrawer()
        },
        _onDrawerClose: function() {
            Os.getInstances("header-section").then(function(t) {
                t[0].scrollHandler = !0
            })
        },
        _setDrawerHeaderHeight: function() {
            var t = $n(Ec.cartHeader, this.$container),
                e = $n(Ec.siteHeader).outerHeight();
            t.css("height", e)
        },
        _openCartDrawer: function(t) {
            t.preventDefault(), Os.getInstances("header-section").then(function(t) {
                return t[0].scrollHandler = !1, t[0].hideNavigation()
            }).then(function() {
                this.drawerOpen(t), $n(Ec.cartContent, this.$container).scrollTop(0), Ts.forceFocus($n(Ec.cartTitle, this.$container)), this.$container.on("click", Ec.cartCloseButton, this._closeCartDrawer.bind(this))
            }.bind(this))
        },
        _closeCartDrawer: function() {
            this.drawerClose()
        }
    });
    var jc = {
        showClass: "cart-item__update--show",
        showEditClass: "cart-item__edit--active",
        cartEmpty: "cart--empty",
        cartNoCookies: "cart--no-cookies"
    };
    Os.register("cart-template", {
        onLoad: function() {
            var t = $n(this.container);
            if (!cs.cookiesEnabled()) return void t.addClass(jc.cartNoCookies);
            this.extend(Cc), yc.on("change", function(e, n) {
                t.toggleClass(jc.cartEmpty, 0 === n.items.length)
            })
        }
    });
    var Pc = {
        filterBy: "#FilterBy",
        sortBy: "#SortBy",
        collectionImage: ".section-header-image"
    };
    Os.register("collection-template", {
        onLoad: function() {
            var t = this.$container = $n(this.container),
                e = $n(Pc.filterBy, t),
                n = $n(Pc.sortBy, t);
            this.defaultSort = this.getDefaultSortValue(), this.extend(ac), e.on("change", this.onFilterChange.bind(this)), n.on("change", this.onSortChange.bind(this))
        },
        onSortChange: function() {
            var t = "";
            this.sort = this.getSortValue(), this.sort !== this.defaultSort && (t = ["sort_by=" + this.sort]), document.location.search = t.length ? "?" + t : ""
        },
        onFilterChange: function() {
            this.filter = this.getFilterValue(), document.location.href = this.filter + document.location.search
        },
        getSortValue: function() {
            return $n(Pc.sortBy).val() || this.defaultSort
        },
        getDefaultSortValue: function() {
            return $n(Pc.sortBy, this.$container).val() || "title-ascending"
        },
        getFilterValue: function() {
            return $n(Pc.filterBy, this.$container).val() || "collections/all"
        }
    }), Os.register("featured-blog", {
        onLoad: function() {
            this.extend(ac)
        }
    });
    var Dc = {
            validate: function(t) {
                if ("object" != typeof t || "number" != typeof t.id) throw Error("Please pass a valid Product object to the Product Controller");
                return $.extend({}, t)
            },
            getVariant: function(t, e) {
                var n;
                return "string" == typeof e || "number" == typeof e ? n = this._getVariantFromId(t, e) : "object" == typeof e && "number" == typeof e.id ? n = this._getVariantFromId(t, e.id) : wi(e) && (n = "object" == typeof e[0] ? this._getVariantFromOptionCollection(t, e) : this._getVariantFromOptionArray(t, e)), n
            },
            optionArrayFromOptionCollection: function(t, e) {
                var n = [];
                return e.forEach(function(e) {
                    var i;
                    if ("string" != typeof e.name) throw Error("Invalid value type passed for name of option " + i + ". Value should be string.");
                    if (-1 === (i = $e(t.options, function(t) {
                            return t.toLowerCase() === e.name.toLowerCase()
                        }))) throw Error("Invalid option name, " + e.name);
                    n[i] = e.value
                }), n
            },
            _getVariantFromId: function(t, e) {
                return os(t.variants, {
                    id: e
                })
            },
            _getVariantFromOptionCollection: function(t, e, n) {
                var i = this.optionArrayFromOptionCollection(t, e);
                return this._getVariantFromOptionArray(t, i, n)
            },
            _getVariantFromOptionArray: function(t, e) {
                return os(t.variants, function(t) {
                    return e.every(function(e, n) {
                        return t.options[n] === e
                    })
                })
            }
        },
        Nc = {
            productPriceSale: "product__price--sale",
            productNotificationSuccess: "product__notification--success",
            productNotificationError: "product__notification--error",
            buttonTransition: "btn--to-secondary-transitioned",
            ajaxCartToggle: "ajax-cart__toggle",
            hide: "hide",
            lazyPreload: "lazypreload"
        },
        Oc = {
            productForm: ".product-form",
            selectorWrapper: ".product-form__item",
            ajaxCartToggle: ".ajax-cart__toggle",
            productJSON: "[data-product-json]",
            optionInputs: "[data-option-input]",
            masterSelect: "[data-master-select]",
            variantImage: "[data-variant-image]",
            variantImageToggleHide: "[data-variant-image-toggle-hide]",
            variantImageSrc: "[data-variant-image-src]",
            productPrice: "[data-product-price]",
            regularPrice: "[data-regular-price]",
            compareAtPrice: "[data-compare-price]",
            submitButton: "[data-cart-submit]",
            submitButtonPrimaryText: "[data-cart-primary-submit-text]",
            submitButtonSecondaryText: "[data-cart-secondary-submit-text]",
            notification: "[data-cart-notification]"
        },
        Ic = {
            init: function() {
                var t = $n(Oc.productJSON, this.container);
                0 !== t.length && (this.product = JSON.parse(t.html()), this.variant = Dc.getVariant(this.product, this.$container.data("variant-id")), this._formatVariantSelectors(), this.on("submit", Oc.productForm, this._addItemToCart.bind(this)), this.one("focus", Oc.optionInputs, this._preloadVariantImages.bind(this)), this.on("change.variantController", Oc.optionInputs, this.update.bind(this)), this.document().on("click", Oc.ajaxCartToggle, this._resetAddToCartButton.bind(this)), this.window().on("online", this._updateOnlineStatus), this.window().on("offline", this._updateOfflineStatus))
            },
            update: function() {
                var t = $n(Oc.optionInputs, this.$container),
                    e = t.serializeArray(),
                    n = Dc.getVariant(this.product, e);
                void 0 === n ? (this.trigger("variant_change_undefined", [this.product, e]), n = $n.extend({}, this.variant), n.isUndefined = !0, n.available = !1, n.options = Dc.optionArrayFromOptionCollection(this.product, e)) : this.trigger("variant_change_successful", [this.product, n]), this.variant = n, vc(this.$container[0], this._updatedContainer(this.variant)), this.trigger("variant_change", [this.product, n])
            },
            _preloadVariantImages: function() {
                $n(Oc.variantImage, this.$container).addClass(Nc.lazyPreload)
            },
            _formatVariantSelectors: function() {
                cs.promiseStylesheet().then(function() {
                    $n(Oc.selectorWrapper, this.$container).each(function() {
                        var t = $n(this),
                            e = t.find("label");
                        t.find("select, input").css({
                            "padding-left": e.outerWidth(),
                            opacity: 1
                        })
                    })
                }.bind(this))
            },
            _updatedContainer: function(t) {
                var e = this.$container.clone();
                return $n(Oc.masterSelect, e).val(t.id), this._updateInputValues(t, e), this._updateProductPrices(t, e), this._updateVariantImage(t, e), this._toggleVariantImageHide(t, e), this._updateCartButtonState(t, e), e[0]
            },
            _updateInputValues: function(t, e) {
                $n(Oc.optionInputs, e).each(function(e) {
                    $n(this).val(t.options[e])
                })
            },
            _updateCartButtonState: function(t, e) {
                var n;
                n = t.isUndefined ? theme.strings.unavailable : t.available ? theme.strings.addToCart : theme.strings.soldOut, this._resetAddToCartButton(), $n(Oc.submitButton, e).prop("disabled", !t.available), $n(Oc.submitButtonPrimaryText, e).text(n)
            },
            _updateProductPrices: function(t, e) {
                var n = t.price,
                    i = t.compare_at_price;
                $n(Oc.regularPrice, e).html(bc.formatMoney(n, theme.moneyFormat)), $n(Oc.compareAtPrice, e).html(bc.formatMoney(i, theme.moneyFormat)), $n(Oc.productPrice, e).toggleClass(Nc.productPriceSale, i > n)
            },
            _updateVariantImage: function(t, e) {
                var n = t.featured_image && t.featured_image.src || this.product.featured_image,
                    i = $n(Oc.variantImageSrc, e),
                    r = _c.imageSize(i.attr("src")),
                    o = _c.getSizedImageUrl(n, r);
                i.attr("src", o)
            },
            _toggleVariantImageHide: function(t, e) {
                if (t.featured_image || this.product.featured_image) {
                    var n = t.featured_image || this.product.featured_image.id,
                        i = n && n.id;
                    $n(Oc.variantImageToggleHide, e).filter('[data-id="' + i + '"]').removeClass(Nc.hide).siblings().addClass(Nc.hide)
                }
            },
            _addItemToCart: function(t) {
                if (Os.isInstance("cart-drawer")) {
                    t.preventDefault();
                    var e = $n(Oc.submitButton, this.$container),
                        n = $n(Oc.productForm, this.$container).serialize();
                    e.hasClass(Nc.ajaxCartToggle) || yc.addItemFromForm(n).then(this._transitionAddToCartButton.bind(this, n)).catch(this._onAddItemFail.bind(this)).always(function() {
                        this.trigger("variant_add_to_cart", [this.product, this.variant, n])
                    }.bind(this))
                }
            },
            _onAddItemFail: function(t) {
                var e = $n(Oc.notification, this.$container),
                    n = t && t.responseText;
                return n = n ? JSON.parse(n).description : theme.strings.cartError, e.addClass(Nc.productNotificationError).removeClass(Nc.productNotificationSuccess).html(n).attr("role", "alert"), this.trigger("variant_add_to_cart_fail", [this.product, this.variant, n]), cs.promiseTransitionEnd(e)
            },
            _transitionAddToCartButton: function(t) {
                var e = $n(Oc.notification, this.$container),
                    n = $n(Oc.submitButton, this.$container),
                    i = $n(Oc.submitButtonPrimaryText, n),
                    r = $n(Oc.submitButtonSecondaryText, n);
                return n.addClass([Nc.buttonTransition, Nc.ajaxCartToggle].join(" ")), i.attr("aria-hidden", !0), r.attr("aria-hidden", !1), e.removeClass(Nc.productNotificationError).addClass(Nc.productNotificationSuccess).text(theme.strings.addItemSuccess).attr("role", "alert"), this.trigger("variant_add_to_cart_successful", [this.product, this.variant, t]), cs.promiseTransitionEnd(e)
            },
            _resetAddToCartButton: function() {
                var t = $n(Oc.notification, this.$container),
                    e = $n(Oc.submitButton, this.$container),
                    n = $n(Oc.submitButtonPrimaryText, e),
                    i = $n(Oc.submitButtonSecondaryText, e);
                e.removeClass([Nc.buttonTransition, Nc.ajaxCartToggle].join(" ")), n.attr("aria-hidden", !1), i.attr("aria-hidden", !0), t.removeClass(Nc.productNotificationError).removeClass(Nc.productNotificationSuccess).text("").attr("role", "")
            },
            _updateOnlineStatus: function() {
                theme.isOnline = !0
            },
            _updateOfflineStatus: function() {
                theme.isOnline = !1
            }
        },
        Fc = {
            socialSharing: ".social-sharing",
            detailsButton: ".product__more-details"
        };
    Os.register("featured-product", {
        onLoad: function() {
            this.extend(ys), this.extend(Ic), this.on("variant_change", this._updateProductLink.bind(this))
        },
        _updateProductLink: function(t, e, n, i) {
            var r = $n(Fc.detailsButton, this.$container),
                o = cs.updateUrlParameter(r.attr("href"), "variant", i.id);
            r.attr("href", o)
        }
    });
    var Bc = t(function(t) {
            ! function(e, n, i, r) {
                "use strict";

                function o(t, e, n) {
                    return setTimeout(l(t, n), e)
                }

                function s(t, e, n) {
                    return !!Array.isArray(t) && (a(t, n[e], n), !0)
                }

                function a(t, e, n) {
                    var i;
                    if (t)
                        if (t.forEach) t.forEach(e, n);
                        else if (t.length !== r)
                        for (i = 0; i < t.length;) e.call(n, t[i], i, t), i++;
                    else
                        for (i in t) t.hasOwnProperty(i) && e.call(n, t[i], i, t)
                }

                function c(t, n, i) {
                    var r = "DEPRECATED METHOD: " + n + "\n" + i + " AT \n";
                    return function() {
                        var n = new Error("get-stack-trace"),
                            i = n && n.stack ? n.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                            o = e.console && (e.console.warn || e.console.log);
                        return o && o.call(e.console, r, i), t.apply(this, arguments)
                    }
                }

                function u(t, e, n) {
                    var i, r = e.prototype;
                    i = t.prototype = Object.create(r), i.constructor = t, i._super = r, n && dt(i, n)
                }

                function l(t, e) {
                    return function() {
                        return t.apply(e, arguments)
                    }
                }

                function d(t, e) {
                    return typeof t == pt ? t.apply(e ? e[0] || r : r, e) : t
                }

                function h(t, e) {
                    return t === r ? e : t
                }

                function f(t, e, n) {
                    a(v(e), function(e) {
                        t.addEventListener(e, n, !1)
                    })
                }

                function p(t, e, n) {
                    a(v(e), function(e) {
                        t.removeEventListener(e, n, !1)
                    })
                }

                function m(t, e) {
                    for (; t;) {
                        if (t == e) return !0;
                        t = t.parentNode
                    }
                    return !1
                }

                function g(t, e) {
                    return t.indexOf(e) > -1
                }

                function v(t) {
                    return t.trim().split(/\s+/g)
                }

                function y(t, e, n) {
                    if (t.indexOf && !n) return t.indexOf(e);
                    for (var i = 0; i < t.length;) {
                        if (n && t[i][n] == e || !n && t[i] === e) return i;
                        i++
                    }
                    return -1
                }

                function b(t) {
                    return Array.prototype.slice.call(t, 0)
                }

                function _(t, e, n) {
                    for (var i = [], r = [], o = 0; o < t.length;) {
                        var s = e ? t[o][e] : t[o];
                        y(r, s) < 0 && i.push(t[o]), r[o] = s, o++
                    }
                    return n && (i = e ? i.sort(function(t, n) {
                        return t[e] > n[e]
                    }) : i.sort()), i
                }

                function w(t, e) {
                    for (var n, i, o = e[0].toUpperCase() + e.slice(1), s = 0; s < ht.length;) {
                        if (n = ht[s], (i = n ? n + o : e) in t) return i;
                        s++
                    }
                    return r
                }

                function S() {
                    return _t++
                }

                function x(t) {
                    var n = t.ownerDocument || t;
                    return n.defaultView || n.parentWindow || e
                }

                function C(t, e) {
                    var n = this;
                    this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function(e) {
                        d(t.options.enable, [t]) && n.handler(e)
                    }, this.init()
                }

                function T(t) {
                    var e = t.options.inputClass;
                    return new(e || (xt ? H : Ct ? R : St ? z : L))(t, k)
                }

                function k(t, e, n) {
                    var i = n.pointers.length,
                        r = n.changedPointers.length,
                        o = e & kt && i - r == 0,
                        s = e & (Et | At) && i - r == 0;
                    n.isFirst = !!o, n.isFinal = !!s, o && (t.session = {}), n.eventType = e, $(t, n), t.emit("hammer.input", n), t.recognize(n), t.session.prevInput = n
                }

                function $(t, e) {
                    var n = t.session,
                        i = e.pointers,
                        r = i.length;
                    n.firstInput || (n.firstInput = j(e)), r > 1 && !n.firstMultiple ? n.firstMultiple = j(e) : 1 === r && (n.firstMultiple = !1);
                    var o = n.firstInput,
                        s = n.firstMultiple,
                        a = s ? s.center : o.center,
                        c = e.center = P(i);
                    e.timeStamp = vt(), e.deltaTime = e.timeStamp - o.timeStamp, e.angle = I(a, c), e.distance = O(a, c), E(n, e), e.offsetDirection = N(e.deltaX, e.deltaY);
                    var u = D(e.deltaTime, e.deltaX, e.deltaY);
                    e.overallVelocityX = u.x, e.overallVelocityY = u.y, e.overallVelocity = gt(u.x) > gt(u.y) ? u.x : u.y, e.scale = s ? B(s.pointers, i) : 1, e.rotation = s ? F(s.pointers, i) : 0, e.maxPointers = n.prevInput ? e.pointers.length > n.prevInput.maxPointers ? e.pointers.length : n.prevInput.maxPointers : e.pointers.length, A(n, e);
                    var l = t.element;
                    m(e.srcEvent.target, l) && (l = e.srcEvent.target), e.target = l
                }

                function E(t, e) {
                    var n = e.center,
                        i = t.offsetDelta || {},
                        r = t.prevDelta || {},
                        o = t.prevInput || {};
                    e.eventType !== kt && o.eventType !== Et || (r = t.prevDelta = {
                        x: o.deltaX || 0,
                        y: o.deltaY || 0
                    }, i = t.offsetDelta = {
                        x: n.x,
                        y: n.y
                    }), e.deltaX = r.x + (n.x - i.x), e.deltaY = r.y + (n.y - i.y)
                }

                function A(t, e) {
                    var n, i, o, s, a = t.lastInterval || e,
                        c = e.timeStamp - a.timeStamp;
                    if (e.eventType != At && (c > Tt || a.velocity === r)) {
                        var u = e.deltaX - a.deltaX,
                            l = e.deltaY - a.deltaY,
                            d = D(c, u, l);
                        i = d.x, o = d.y, n = gt(d.x) > gt(d.y) ? d.x : d.y, s = N(u, l), t.lastInterval = e
                    } else n = a.velocity, i = a.velocityX, o = a.velocityY, s = a.direction;
                    e.velocity = n, e.velocityX = i, e.velocityY = o, e.direction = s
                }

                function j(t) {
                    for (var e = [], n = 0; n < t.pointers.length;) e[n] = {
                        clientX: mt(t.pointers[n].clientX),
                        clientY: mt(t.pointers[n].clientY)
                    }, n++;
                    return {
                        timeStamp: vt(),
                        pointers: e,
                        center: P(e),
                        deltaX: t.deltaX,
                        deltaY: t.deltaY
                    }
                }

                function P(t) {
                    var e = t.length;
                    if (1 === e) return {
                        x: mt(t[0].clientX),
                        y: mt(t[0].clientY)
                    };
                    for (var n = 0, i = 0, r = 0; r < e;) n += t[r].clientX, i += t[r].clientY, r++;
                    return {
                        x: mt(n / e),
                        y: mt(i / e)
                    }
                }

                function D(t, e, n) {
                    return {
                        x: e / t || 0,
                        y: n / t || 0
                    }
                }

                function N(t, e) {
                    return t === e ? jt : gt(t) >= gt(e) ? t < 0 ? Pt : Dt : e < 0 ? Nt : Ot
                }

                function O(t, e, n) {
                    n || (n = Lt);
                    var i = e[n[0]] - t[n[0]],
                        r = e[n[1]] - t[n[1]];
                    return Math.sqrt(i * i + r * r)
                }

                function I(t, e, n) {
                    n || (n = Lt);
                    var i = e[n[0]] - t[n[0]],
                        r = e[n[1]] - t[n[1]];
                    return 180 * Math.atan2(r, i) / Math.PI
                }

                function F(t, e) {
                    return I(e[1], e[0], Ht) + I(t[1], t[0], Ht)
                }

                function B(t, e) {
                    return O(e[0], e[1], Ht) / O(t[0], t[1], Ht)
                }

                function L() {
                    this.evEl = qt, this.evWin = Rt, this.pressed = !1, C.apply(this, arguments)
                }

                function H() {
                    this.evEl = Vt, this.evWin = Ut, C.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
                }

                function M() {
                    this.evTarget = Yt, this.evWin = Qt, this.started = !1, C.apply(this, arguments)
                }

                function q(t, e) {
                    var n = b(t.touches),
                        i = b(t.changedTouches);
                    return e & (Et | At) && (n = _(n.concat(i), "identifier", !0)), [n, i]
                }

                function R() {
                    this.evTarget = Kt, this.targetIds = {}, C.apply(this, arguments)
                }

                function W(t, e) {
                    var n = b(t.touches),
                        i = this.targetIds;
                    if (e & (kt | $t) && 1 === n.length) return i[n[0].identifier] = !0, [n, n];
                    var r, o, s = b(t.changedTouches),
                        a = [],
                        c = this.target;
                    if (o = n.filter(function(t) {
                            return m(t.target, c)
                        }), e === kt)
                        for (r = 0; r < o.length;) i[o[r].identifier] = !0, r++;
                    for (r = 0; r < s.length;) i[s[r].identifier] && a.push(s[r]), e & (Et | At) && delete i[s[r].identifier], r++;
                    return a.length ? [_(o.concat(a), "identifier", !0), a] : void 0
                }

                function z() {
                    C.apply(this, arguments);
                    var t = l(this.handler, this);
                    this.touch = new R(this.manager, t), this.mouse = new L(this.manager, t), this.primaryTouch = null, this.lastTouches = []
                }

                function V(t, e) {
                    t & kt ? (this.primaryTouch = e.changedPointers[0].identifier, U.call(this, e)) : t & (Et | At) && U.call(this, e)
                }

                function U(t) {
                    var e = t.changedPointers[0];
                    if (e.identifier === this.primaryTouch) {
                        var n = {
                            x: e.clientX,
                            y: e.clientY
                        };
                        this.lastTouches.push(n);
                        var i = this.lastTouches,
                            r = function() {
                                var t = i.indexOf(n);
                                t > -1 && i.splice(t, 1)
                            };
                        setTimeout(r, Jt)
                    }
                }

                function X(t) {
                    for (var e = t.srcEvent.clientX, n = t.srcEvent.clientY, i = 0; i < this.lastTouches.length; i++) {
                        var r = this.lastTouches[i],
                            o = Math.abs(e - r.x),
                            s = Math.abs(n - r.y);
                        if (o <= Zt && s <= Zt) return !0
                    }
                    return !1
                }

                function Y(t, e) {
                    this.manager = t, this.set(e)
                }

                function Q(t) {
                    if (g(t, re)) return re;
                    var e = g(t, oe),
                        n = g(t, se);
                    return e && n ? re : e || n ? e ? oe : se : g(t, ie) ? ie : ne
                }

                function G(t) {
                    this.options = dt({}, this.defaults, t || {}), this.id = S(), this.manager = null, this.options.enable = h(this.options.enable, !0), this.state = ce, this.simultaneous = {}, this.requireFail = []
                }

                function K(t) {
                    return t & fe ? "cancel" : t & de ? "end" : t & le ? "move" : t & ue ? "start" : ""
                }

                function J(t) {
                    return t == Ot ? "down" : t == Nt ? "up" : t == Pt ? "left" : t == Dt ? "right" : ""
                }

                function Z(t, e) {
                    var n = e.manager;
                    return n ? n.get(t) : t
                }

                function tt() {
                    G.apply(this, arguments)
                }

                function et() {
                    tt.apply(this, arguments), this.pX = null, this.pY = null
                }

                function nt() {
                    tt.apply(this, arguments)
                }

                function it() {
                    G.apply(this, arguments), this._timer = null, this._input = null
                }

                function rt() {
                    tt.apply(this, arguments)
                }

                function ot() {
                    tt.apply(this, arguments)
                }

                function st() {
                    G.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
                }

                function at(t, e) {
                    return e = e || {}, e.recognizers = h(e.recognizers, at.defaults.preset), new ct(t, e)
                }

                function ct(t, e) {
                    this.options = dt({}, at.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = T(this), this.touchAction = new Y(this, this.options.touchAction), ut(this, !0), a(this.options.recognizers, function(t) {
                        var e = this.add(new t[0](t[1]));
                        t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
                    }, this)
                }

                function ut(t, e) {
                    var n = t.element;
                    if (n.style) {
                        var i;
                        a(t.options.cssProps, function(r, o) {
                            i = w(n.style, o), e ? (t.oldCssProps[i] = n.style[i], n.style[i] = r) : n.style[i] = t.oldCssProps[i] || ""
                        }), e || (t.oldCssProps = {})
                    }
                }

                function lt(t, e) {
                    var i = n.createEvent("Event");
                    i.initEvent(t, !0, !0), i.gesture = e, e.target.dispatchEvent(i)
                }
                var dt, ht = ["", "webkit", "Moz", "MS", "ms", "o"],
                    ft = n.createElement("div"),
                    pt = "function",
                    mt = Math.round,
                    gt = Math.abs,
                    vt = Date.now;
                dt = "function" != typeof Object.assign ? function(t) {
                    if (t === r || null === t) throw new TypeError("Cannot convert undefined or null to object");
                    for (var e = Object(t), n = 1; n < arguments.length; n++) {
                        var i = arguments[n];
                        if (i !== r && null !== i)
                            for (var o in i) i.hasOwnProperty(o) && (e[o] = i[o])
                    }
                    return e
                } : Object.assign;
                var yt = c(function(t, e, n) {
                        for (var i = Object.keys(e), o = 0; o < i.length;)(!n || n && t[i[o]] === r) && (t[i[o]] = e[i[o]]), o++;
                        return t
                    }, "extend", "Use `assign`."),
                    bt = c(function(t, e) {
                        return yt(t, e, !0)
                    }, "merge", "Use `assign`."),
                    _t = 1,
                    wt = /mobile|tablet|ip(ad|hone|od)|android/i,
                    St = "ontouchstart" in e,
                    xt = w(e, "PointerEvent") !== r,
                    Ct = St && wt.test(navigator.userAgent),
                    Tt = 25,
                    kt = 1,
                    $t = 2,
                    Et = 4,
                    At = 8,
                    jt = 1,
                    Pt = 2,
                    Dt = 4,
                    Nt = 8,
                    Ot = 16,
                    It = Pt | Dt,
                    Ft = Nt | Ot,
                    Bt = It | Ft,
                    Lt = ["x", "y"],
                    Ht = ["clientX", "clientY"];
                C.prototype = {
                    handler: function() {},
                    init: function() {
                        this.evEl && f(this.element, this.evEl, this.domHandler), this.evTarget && f(this.target, this.evTarget, this.domHandler), this.evWin && f(x(this.element), this.evWin, this.domHandler)
                    },
                    destroy: function() {
                        this.evEl && p(this.element, this.evEl, this.domHandler), this.evTarget && p(this.target, this.evTarget, this.domHandler), this.evWin && p(x(this.element), this.evWin, this.domHandler)
                    }
                };
                var Mt = {
                        mousedown: kt,
                        mousemove: $t,
                        mouseup: Et
                    },
                    qt = "mousedown",
                    Rt = "mousemove mouseup";
                u(L, C, {
                    handler: function(t) {
                        var e = Mt[t.type];
                        e & kt && 0 === t.button && (this.pressed = !0), e & $t && 1 !== t.which && (e = Et), this.pressed && (e & Et && (this.pressed = !1), this.callback(this.manager, e, {
                            pointers: [t],
                            changedPointers: [t],
                            pointerType: "mouse",
                            srcEvent: t
                        }))
                    }
                });
                var Wt = {
                        pointerdown: kt,
                        pointermove: $t,
                        pointerup: Et,
                        pointercancel: At,
                        pointerout: At
                    },
                    zt = {
                        2: "touch",
                        3: "pen",
                        4: "mouse",
                        5: "kinect"
                    },
                    Vt = "pointerdown",
                    Ut = "pointermove pointerup pointercancel";
                e.MSPointerEvent && !e.PointerEvent && (Vt = "MSPointerDown", Ut = "MSPointerMove MSPointerUp MSPointerCancel"), u(H, C, {
                    handler: function(t) {
                        var e = this.store,
                            n = !1,
                            i = t.type.toLowerCase().replace("ms", ""),
                            r = Wt[i],
                            o = zt[t.pointerType] || t.pointerType,
                            s = "touch" == o,
                            a = y(e, t.pointerId, "pointerId");
                        r & kt && (0 === t.button || s) ? a < 0 && (e.push(t), a = e.length - 1) : r & (Et | At) && (n = !0), a < 0 || (e[a] = t, this.callback(this.manager, r, {
                            pointers: e,
                            changedPointers: [t],
                            pointerType: o,
                            srcEvent: t
                        }), n && e.splice(a, 1))
                    }
                });
                var Xt = {
                        touchstart: kt,
                        touchmove: $t,
                        touchend: Et,
                        touchcancel: At
                    },
                    Yt = "touchstart",
                    Qt = "touchstart touchmove touchend touchcancel";
                u(M, C, {
                    handler: function(t) {
                        var e = Xt[t.type];
                        if (e === kt && (this.started = !0), this.started) {
                            var n = q.call(this, t, e);
                            e & (Et | At) && n[0].length - n[1].length == 0 && (this.started = !1), this.callback(this.manager, e, {
                                pointers: n[0],
                                changedPointers: n[1],
                                pointerType: "touch",
                                srcEvent: t
                            })
                        }
                    }
                });
                var Gt = {
                        touchstart: kt,
                        touchmove: $t,
                        touchend: Et,
                        touchcancel: At
                    },
                    Kt = "touchstart touchmove touchend touchcancel";
                u(R, C, {
                    handler: function(t) {
                        var e = Gt[t.type],
                            n = W.call(this, t, e);
                        n && this.callback(this.manager, e, {
                            pointers: n[0],
                            changedPointers: n[1],
                            pointerType: "touch",
                            srcEvent: t
                        })
                    }
                });
                var Jt = 2500,
                    Zt = 25;
                u(z, C, {
                    handler: function(t, e, n) {
                        var i = "touch" == n.pointerType,
                            r = "mouse" == n.pointerType;
                        if (!(r && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
                            if (i) V.call(this, e, n);
                            else if (r && X.call(this, n)) return;
                            this.callback(t, e, n)
                        }
                    },
                    destroy: function() {
                        this.touch.destroy(), this.mouse.destroy()
                    }
                });
                var te = w(ft.style, "touchAction"),
                    ee = te !== r,
                    ne = "auto",
                    ie = "manipulation",
                    re = "none",
                    oe = "pan-x",
                    se = "pan-y",
                    ae = function() {
                        if (!ee) return !1;
                        var t = {},
                            n = e.CSS && e.CSS.supports;
                        return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(i) {
                            t[i] = !n || e.CSS.supports("touch-action", i)
                        }), t
                    }();
                Y.prototype = {
                    set: function(t) {
                        "compute" == t && (t = this.compute()), ee && this.manager.element.style && ae[t] && (this.manager.element.style[te] = t), this.actions = t.toLowerCase().trim()
                    },
                    update: function() {
                        this.set(this.manager.options.touchAction)
                    },
                    compute: function() {
                        var t = [];
                        return a(this.manager.recognizers, function(e) {
                            d(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
                        }), Q(t.join(" "))
                    },
                    preventDefaults: function(t) {
                        var e = t.srcEvent,
                            n = t.offsetDirection;
                        if (this.manager.session.prevented) return void e.preventDefault();
                        var i = this.actions,
                            r = g(i, re) && !ae[re],
                            o = g(i, se) && !ae[se],
                            s = g(i, oe) && !ae[oe];
                        if (r) {
                            var a = 1 === t.pointers.length,
                                c = t.distance < 2,
                                u = t.deltaTime < 250;
                            if (a && c && u) return
                        }
                        return s && o ? void 0 : r || o && n & It || s && n & Ft ? this.preventSrc(e) : void 0
                    },
                    preventSrc: function(t) {
                        this.manager.session.prevented = !0, t.preventDefault()
                    }
                };
                var ce = 1,
                    ue = 2,
                    le = 4,
                    de = 8,
                    he = de,
                    fe = 16;
                G.prototype = {
                    defaults: {},
                    set: function(t) {
                        return dt(this.options, t), this.manager && this.manager.touchAction.update(), this
                    },
                    recognizeWith: function(t) {
                        if (s(t, "recognizeWith", this)) return this;
                        var e = this.simultaneous;
                        return t = Z(t, this), e[t.id] || (e[t.id] = t, t.recognizeWith(this)), this
                    },
                    dropRecognizeWith: function(t) {
                        return s(t, "dropRecognizeWith", this) ? this : (t = Z(t, this), delete this.simultaneous[t.id], this)
                    },
                    requireFailure: function(t) {
                        if (s(t, "requireFailure", this)) return this;
                        var e = this.requireFail;
                        return t = Z(t, this), -1 === y(e, t) && (e.push(t), t.requireFailure(this)), this
                    },
                    dropRequireFailure: function(t) {
                        if (s(t, "dropRequireFailure", this)) return this;
                        t = Z(t, this);
                        var e = y(this.requireFail, t);
                        return e > -1 && this.requireFail.splice(e, 1), this
                    },
                    hasRequireFailures: function() {
                        return this.requireFail.length > 0
                    },
                    canRecognizeWith: function(t) {
                        return !!this.simultaneous[t.id]
                    },
                    emit: function(t) {
                        function e(e) {
                            n.manager.emit(e, t)
                        }
                        var n = this,
                            i = this.state;
                        i < de && e(n.options.event + K(i)), e(n.options.event), t.additionalEvent && e(t.additionalEvent), i >= de && e(n.options.event + K(i))
                    },
                    tryEmit: function(t) {
                        if (this.canEmit()) return this.emit(t);
                        this.state = 32
                    },
                    canEmit: function() {
                        for (var t = 0; t < this.requireFail.length;) {
                            if (!(this.requireFail[t].state & (32 | ce))) return !1;
                            t++
                        }
                        return !0
                    },
                    recognize: function(t) {
                        var e = dt({}, t);
                        if (!d(this.options.enable, [this, e])) return this.reset(), void(this.state = 32);
                        this.state & (he | fe | 32) && (this.state = ce), this.state = this.process(e), this.state & (ue | le | de | fe) && this.tryEmit(e)
                    },
                    process: function(t) {},
                    getTouchAction: function() {},
                    reset: function() {}
                }, u(tt, G, {
                    defaults: {
                        pointers: 1
                    },
                    attrTest: function(t) {
                        var e = this.options.pointers;
                        return 0 === e || t.pointers.length === e
                    },
                    process: function(t) {
                        var e = this.state,
                            n = t.eventType,
                            i = e & (ue | le),
                            r = this.attrTest(t);
                        return i && (n & At || !r) ? e | fe : i || r ? n & Et ? e | de : e & ue ? e | le : ue : 32
                    }
                }), u(et, tt, {
                    defaults: {
                        event: "pan",
                        threshold: 10,
                        pointers: 1,
                        direction: Bt
                    },
                    getTouchAction: function() {
                        var t = this.options.direction,
                            e = [];
                        return t & It && e.push(se), t & Ft && e.push(oe), e
                    },
                    directionTest: function(t) {
                        var e = this.options,
                            n = !0,
                            i = t.distance,
                            r = t.direction,
                            o = t.deltaX,
                            s = t.deltaY;
                        return r & e.direction || (e.direction & It ? (r = 0 === o ? jt : o < 0 ? Pt : Dt, n = o != this.pX, i = Math.abs(t.deltaX)) : (r = 0 === s ? jt : s < 0 ? Nt : Ot, n = s != this.pY, i = Math.abs(t.deltaY))), t.direction = r, n && i > e.threshold && r & e.direction
                    },
                    attrTest: function(t) {
                        return tt.prototype.attrTest.call(this, t) && (this.state & ue || !(this.state & ue) && this.directionTest(t))
                    },
                    emit: function(t) {
                        this.pX = t.deltaX, this.pY = t.deltaY;
                        var e = J(t.direction);
                        e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t)
                    }
                }), u(nt, tt, {
                    defaults: {
                        event: "pinch",
                        threshold: 0,
                        pointers: 2
                    },
                    getTouchAction: function() {
                        return [re]
                    },
                    attrTest: function(t) {
                        return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & ue)
                    },
                    emit: function(t) {
                        if (1 !== t.scale) {
                            var e = t.scale < 1 ? "in" : "out";
                            t.additionalEvent = this.options.event + e
                        }
                        this._super.emit.call(this, t)
                    }
                }), u(it, G, {
                    defaults: {
                        event: "press",
                        pointers: 1,
                        time: 251,
                        threshold: 9
                    },
                    getTouchAction: function() {
                        return [ne]
                    },
                    process: function(t) {
                        var e = this.options,
                            n = t.pointers.length === e.pointers,
                            i = t.distance < e.threshold,
                            r = t.deltaTime > e.time;
                        if (this._input = t, !i || !n || t.eventType & (Et | At) && !r) this.reset();
                        else if (t.eventType & kt) this.reset(), this._timer = o(function() {
                            this.state = he, this.tryEmit()
                        }, e.time, this);
                        else if (t.eventType & Et) return he;
                        return 32
                    },
                    reset: function() {
                        clearTimeout(this._timer)
                    },
                    emit: function(t) {
                        this.state === he && (t && t.eventType & Et ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = vt(), this.manager.emit(this.options.event, this._input)))
                    }
                }), u(rt, tt, {
                    defaults: {
                        event: "rotate",
                        threshold: 0,
                        pointers: 2
                    },
                    getTouchAction: function() {
                        return [re]
                    },
                    attrTest: function(t) {
                        return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & ue)
                    }
                }), u(ot, tt, {
                    defaults: {
                        event: "swipe",
                        threshold: 10,
                        velocity: .3,
                        direction: It | Ft,
                        pointers: 1
                    },
                    getTouchAction: function() {
                        return et.prototype.getTouchAction.call(this)
                    },
                    attrTest: function(t) {
                        var e, n = this.options.direction;
                        return n & (It | Ft) ? e = t.overallVelocity : n & It ? e = t.overallVelocityX : n & Ft && (e = t.overallVelocityY), this._super.attrTest.call(this, t) && n & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && gt(e) > this.options.velocity && t.eventType & Et
                    },
                    emit: function(t) {
                        var e = J(t.offsetDirection);
                        e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
                    }
                }), u(st, G, {
                    defaults: {
                        event: "tap",
                        pointers: 1,
                        taps: 1,
                        interval: 300,
                        time: 250,
                        threshold: 9,
                        posThreshold: 10
                    },
                    getTouchAction: function() {
                        return [ie]
                    },
                    process: function(t) {
                        var e = this.options,
                            n = t.pointers.length === e.pointers,
                            i = t.distance < e.threshold,
                            r = t.deltaTime < e.time;
                        if (this.reset(), t.eventType & kt && 0 === this.count) return this.failTimeout();
                        if (i && r && n) {
                            if (t.eventType != Et) return this.failTimeout();
                            var s = !this.pTime || t.timeStamp - this.pTime < e.interval,
                                a = !this.pCenter || O(this.pCenter, t.center) < e.posThreshold;
                            this.pTime = t.timeStamp, this.pCenter = t.center, a && s ? this.count += 1 : this.count = 1, this._input = t;
                            if (0 === this.count % e.taps) return this.hasRequireFailures() ? (this._timer = o(function() {
                                this.state = he, this.tryEmit()
                            }, e.interval, this), ue) : he
                        }
                        return 32
                    },
                    failTimeout: function() {
                        return this._timer = o(function() {
                            this.state = 32
                        }, this.options.interval, this), 32
                    },
                    reset: function() {
                        clearTimeout(this._timer)
                    },
                    emit: function() {
                        this.state == he && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
                    }
                }), at.VERSION = "2.0.7", at.defaults = {
                    domEvents: !1,
                    touchAction: "compute",
                    enable: !0,
                    inputTarget: null,
                    inputClass: null,
                    preset: [
                        [rt, {
                            enable: !1
                        }],
                        [nt, {
                                enable: !1
                            },
                            ["rotate"]
                        ],
                        [ot, {
                            direction: It
                        }],
                        [et, {
                                direction: It
                            },
                            ["swipe"]
                        ],
                        [st],
                        [st, {
                                event: "doubletap",
                                taps: 2
                            },
                            ["tap"]
                        ],
                        [it]
                    ],
                    cssProps: {
                        userSelect: "none",
                        touchSelect: "none",
                        touchCallout: "none",
                        contentZooming: "none",
                        userDrag: "none",
                        tapHighlightColor: "rgba(0,0,0,0)"
                    }
                };
                ct.prototype = {
                    set: function(t) {
                        return dt(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
                    },
                    stop: function(t) {
                        this.session.stopped = t ? 2 : 1
                    },
                    recognize: function(t) {
                        var e = this.session;
                        if (!e.stopped) {
                            this.touchAction.preventDefaults(t);
                            var n, i = this.recognizers,
                                r = e.curRecognizer;
                            (!r || r && r.state & he) && (r = e.curRecognizer = null);
                            for (var o = 0; o < i.length;) n = i[o], 2 === e.stopped || r && n != r && !n.canRecognizeWith(r) ? n.reset() : n.recognize(t), !r && n.state & (ue | le | de) && (r = e.curRecognizer = n), o++
                        }
                    },
                    get: function(t) {
                        if (t instanceof G) return t;
                        for (var e = this.recognizers, n = 0; n < e.length; n++)
                            if (e[n].options.event == t) return e[n];
                        return null
                    },
                    add: function(t) {
                        if (s(t, "add", this)) return this;
                        var e = this.get(t.options.event);
                        return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t
                    },
                    remove: function(t) {
                        if (s(t, "remove", this)) return this;
                        if (t = this.get(t)) {
                            var e = this.recognizers,
                                n = y(e, t); - 1 !== n && (e.splice(n, 1), this.touchAction.update())
                        }
                        return this
                    },
                    on: function(t, e) {
                        if (t !== r && e !== r) {
                            var n = this.handlers;
                            return a(v(t), function(t) {
                                n[t] = n[t] || [], n[t].push(e)
                            }), this
                        }
                    },
                    off: function(t, e) {
                        if (t !== r) {
                            var n = this.handlers;
                            return a(v(t), function(t) {
                                e ? n[t] && n[t].splice(y(n[t], e), 1) : delete n[t]
                            }), this
                        }
                    },
                    emit: function(t, e) {
                        this.options.domEvents && lt(t, e);
                        var n = this.handlers[t] && this.handlers[t].slice();
                        if (n && n.length) {
                            e.type = t, e.preventDefault = function() {
                                e.srcEvent.preventDefault()
                            };
                            for (var i = 0; i < n.length;) n[i](e), i++
                        }
                    },
                    destroy: function() {
                        this.element && ut(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
                    }
                }, dt(at, {
                    INPUT_START: kt,
                    INPUT_MOVE: $t,
                    INPUT_END: Et,
                    INPUT_CANCEL: At,
                    STATE_POSSIBLE: ce,
                    STATE_BEGAN: ue,
                    STATE_CHANGED: le,
                    STATE_ENDED: de,
                    STATE_RECOGNIZED: he,
                    STATE_CANCELLED: fe,
                    STATE_FAILED: 32,
                    DIRECTION_NONE: jt,
                    DIRECTION_LEFT: Pt,
                    DIRECTION_RIGHT: Dt,
                    DIRECTION_UP: Nt,
                    DIRECTION_DOWN: Ot,
                    DIRECTION_HORIZONTAL: It,
                    DIRECTION_VERTICAL: Ft,
                    DIRECTION_ALL: Bt,
                    Manager: ct,
                    Input: C,
                    TouchAction: Y,
                    TouchInput: R,
                    MouseInput: L,
                    PointerEventInput: H,
                    TouchMouseInput: z,
                    SingleTouchInput: M,
                    Recognizer: G,
                    AttrRecognizer: tt,
                    Tap: st,
                    Pan: et,
                    Swipe: ot,
                    Pinch: nt,
                    Rotate: rt,
                    Press: it,
                    on: f,
                    off: p,
                    each: a,
                    merge: bt,
                    extend: yt,
                    assign: dt,
                    inherit: u,
                    bindFn: l,
                    prefixed: w
                }), (void 0 !== e ? e : "undefined" != typeof self ? self : {}).Hammer = at, "function" == typeof define && define.amd ? define(function() {
                    return at
                }) : void 0 !== t && t.exports ? t.exports = at : e.Hammer = at
            }(window, document)
        }),
        Lc = {
            slides: ".slider__slide",
            activeSlide: ".slider__slide--active"
        },
        Hc = {
            activeSlide: "slider__slide--active",
            previousSlide: "slider__slide--previous",
            nextSlide: "slider__slide--next",
            transitioningSlide: "slider__slide--transitioning",
            draggingSlide: "slider__slide--dragging"
        },
        Mc = {
            nextSlide: "nextslide",
            prevSlide: "prevslide",
            transitionStart: "slidetransitionstart",
            transitionEnd: "slidetransitionend"
        },
        qc = {
            moveThreshold: 25
        };
    Cn.prototype = $n.extend({}, Cn.prototype, {
        destroy: function() {
            return this.$element.off("touchstart mousedown"), this.$slides[0].removeEventListener("focus", this.bindedOnFocus, !0), this.$slides[0].removeEventListener("blur", this.bindedOnBlur, !0), null
        },
        nextSlide: function() {
            return this._triggerEvent([Mc.nextSlide, Mc.transitionStart]), this._promiseNextSlide().then(function() {
                this._triggerEvent(Mc.transitionEnd)
            }.bind(this))
        },
        previousSlide: function() {
            return this._triggerEvent([Mc.prevSlide, Mc.transitionStart]), this._promisePrevSlide().then(function() {
                this._triggerEvent(Mc.transitionEnd)
            }.bind(this))
        },
        setSlide: function(t, e) {
            var n = this.slidePromiseChain || $n.Deferred().resolve(),
                i = this.$currentSlide.index(),
                r = this.$slides.length,
                o = $n.Deferred().resolve();
            return this.slidePromiseChain = n.then(function() {
                return t < r && t !== i && (e ? t > i ? o = cs.promiseRepeatSeries(this.nextSlide.bind(this), t - i) : t < i && (o = cs.promiseRepeatSeries(this.previousSlide.bind(this), i - t)) : o = this._promiseSlide(this.$slides.eq(t))), o
            }.bind(this)), this.slidePromiseChain
        },
        _promiseNextSlide: function() {
            return requestAnimationFrame(function() {
                this.$nextSlide.addClass(Hc.nextSlide), requestAnimationFrame(function() {
                    this.$slides.removeAttr("style"), this.$nextSlide.removeClass(Hc.nextSlide).addClass(Hc.activeSlide).addClass(Hc.transitioningSlide), this.$currentSlide.removeClass(Hc.activeSlide).addClass(Hc.previousSlide).addClass(Hc.transitioningSlide)
                }.bind(this))
            }.bind(this)), this._promiseSlideTransitionEnd().then(function() {
                this._setCurrentSlide(this.$nextSlide)
            }.bind(this))
        },
        _promisePrevSlide: function() {
            return requestAnimationFrame(function() {
                this.$previousSlide.addClass(Hc.previousSlide), requestAnimationFrame(function() {
                    this.$slides.removeAttr("style"), this.$previousSlide.removeClass(Hc.previousSlide).addClass(Hc.activeSlide).addClass(Hc.transitioningSlide), this.$currentSlide.removeClass(Hc.activeSlide).addClass(Hc.nextSlide).addClass(Hc.transitioningSlide)
                }.bind(this))
            }.bind(this)), this._promiseSlideTransitionEnd().then(function() {
                this._setCurrentSlide(this.$previousSlide)
            }.bind(this))
        },
        _promiseSlide: function(t) {
            return this._setCurrentSlide(t), t.addClass(Hc.activeSlide).siblings().removeClass(Hc.activeSlide), $n.Deferred(function(t) {
                requestAnimationFrame(function() {
                    this._triggerEvent(Mc.transitionEnd), t.resolve()
                }.bind(this))
            }.bind(this))
        },
        _promiseCancelSlide: function() {
            return requestAnimationFrame(function() {
                this.$slides.removeAttr("style").addClass(Hc.transitioningSlide)
            }.bind(this)), this._promiseSlideTransitionEnd()
        },
        _promiseSlideTransitionEnd: function() {
            return $n.Deferred(function(t) {
                this.$currentSlide.one("transitionend", function() {
                    this.$slides.removeClass([Hc.transitioningSlide, Hc.nextSlide, Hc.previousSlide].join(" ")), t.resolve()
                }.bind(this))
            }.bind(this))
        },
        _setCurrentSlide: function(t) {
            this.$currentSlide = t, this.$nextSlide = this._nextSlideIndex(t, this.$slides), this.$previousSlide = this._prevSlideIndex(t, this.$slides)
        },
        _assignTouchHandlers: function() {
            this.bindedTouchStart = this._onTouchStart.bind(this), this.bindedTouchMove = this._onTouchMove.bind(this), this.bindedTouchEnd = this._onTouchEnd.bind(this), this.$element.one("touchstart", this.bindedTouchStart).one("mousedown", this.bindedTouchStart)
        },
        _onTouchStart: function(t) {
            this.windowWidth = $n(window).innerWidth(), this.startPosition = cs.pointerEventToXY(t), this.isDragging = !1, this.$element.on("touchmove mousemove", this.bindedTouchMove).on("touchend mouseup", this.bindedTouchEnd)
        },
        _onTouchMove: function(t) {
            this.currentPosition = cs.pointerEventToXY(t), this.percentMoved = (this.currentPosition.x - this.startPosition.x) / this.windowWidth * 100, this.isDragging || (this.isDragging = !0), this.percentMoved > 0 ? (this.$previousSlide.addClass(Hc.previousSlide), this.$nextSlide.removeClass(Hc.nextSlide), this.$previousSlide.css({
                transform: "translateX(" + (this.percentMoved - 100) + "%)"
            })) : (this.$previousSlide.removeClass(Hc.previousSlide), this.$nextSlide.addClass(Hc.nextSlide), this.$nextSlide.css({
                transform: "translateX(" + (100 + this.percentMoved) + "%)"
            })), this.$currentSlide.addClass(Hc.draggingSlide).css({
                transform: "translateX(" + this.percentMoved + "%)"
            })
        },
        _onTouchEnd: function() {
            var t = this.config.moveThreshold,
                e = $n.Deferred().resolve();
            this.$element.off(), this.isDragging && (this.isDragging = !1, this.$currentSlide.removeClass(Hc.draggingSlide), e = this.percentMoved > t ? this.previousSlide() : this.percentMoved < -t ? this.nextSlide() : this._promiseCancelSlide()), e.then(function() {
                this.$element.one("touchstart", this.bindedTouchStart).one("mousedown", this.bindedTouchStart)
            }.bind(this))
        },
        _onFocus: function() {
            this.$element.one("keyup", this._onKeyup.bind(this))
        },
        _onBlur: function() {
            this.$element.off("keyup")
        },
        _onKeyup: function(t) {
            var e = $n.Deferred().resolve(),
                n = !1;
            switch (t.keyCode) {
                case 37:
                    e = this.previousSlide(), n = $n.contains(this.$element[0], document.activeElement);
                    break;
                case 39:
                    e = this.nextSlide(), n = $n.contains(this.$element[0], document.activeElement)
            }
            e.then(function() {
                n && this.$element.focus(), this.$element.one("keyup", this._onKeyup.bind(this))
            }.bind(this))
        },
        _triggerEvent: function(t) {
            "string" == typeof t && (t = [t]), t.forEach(function(t) {
                this.$element.trigger(t, {
                    $previousSlide: this.$previousSlide,
                    $currentSlide: this.$currentSlide,
                    $nextSlide: this.$nextSlide
                })
            }.bind(this))
        },
        _nextSlideIndex: function(t, e) {
            var n = t.index(),
                i = e.length,
                r = n + 1;
            return n + 1 === i && (r = 0), e.eq(r)
        },
        _prevSlideIndex: function(t, e) {
            var n = t.index(),
                i = e.length,
                r = n - 1;
            return n - 1 == -1 && (r = i - 1), e.eq(r)
        }
    });
    var Rc = {
            coverTopBackground: ".reveal-slider__cover-background--top",
            coverBottomBackground: ".reveal-slider__cover-background--bottom",
            coverContent: ".reveal-slider__cover-content",
            slideNavButtons: ".reveal-slider__nav-button",
            slidePreviousButton: ".reveal-slider__previous-button",
            slideNextButton: ".reveal-slider__next-button",
            closeCoverButton: ".reveal-slider__close",
            slider: ".slider"
        },
        Wc = {
            navButtonActive: "active",
            coverOpen: "open"
        },
        zc = {
            initRevealSlider: function() {
                this.trigger("reveal_slider_init_start"), this.revealSlider = !0, this.coverIsOpen = !1, this.revealSliderNamespace = ".revealSlider", this.mediaQuerySmall = theme.mediaQuerySmall, this.slider = new Cn($n(Rc.slider, this.$container)), this.hammertime = new Bc(this.$container[0]), this.on("click", Rc.slideNavButtons, this._onClickNavButton.bind(this)), this.on("click", Rc.slidePreviousButton, this.slider.previousSlide.bind(this.slider)), this.on("click", Rc.slideNextButton, this.slider.nextSlide.bind(this.slider)), this.on("click", Rc.closeCoverButton, this.closeCover.bind(this)), this.on("click", Rc.coverContent, this.openCover.bind(this)), this.on("nextslide prevslide", this._changeBackgroundColor.bind(this)), this.on("slidetransitionend", this._onSlideTransitionEnd.bind(this)), this.document().on("touchstart" + this.revealSliderNamespace, this._onTouchStart.bind(this)), this.document().on("touchend" + this.revealSliderNamespace, this._onTouchEnd.bind(this)), this.hammertime.on("pinchout pinchin", this._onPinch.bind(this)).on("pinchend pinchcancel", this._onPinchEnd.bind(this)), this.trigger("reveal_slider_init_done")
            },
            destroyRevealSlider: function() {
                this.revealSlider = !1, this.slider = this.slider.destroy(), this.document().off(this.revealSliderNamespace), this.off(), this.trigger("reveal_slider_destroy")
            },
            openCover: function() {
                this.$container.addClass(Wc.coverOpen), this.coverIsOpen = !0, this.trigger("reveal_slider_open_cover")
            },
            closeCover: function() {
                this.$container.removeClass(Wc.coverOpen), this.coverIsOpen = !1, this.trigger("reveal_slider_close_cover")
            },
            _changeBackgroundColor: function(t, e) {
                var n;
                n = "nextslide" === t.type ? e.$nextSlide.data("background-color") : e.$previousSlide.data("background-color"), $n(Rc.slider, this.$container).css({
                    backgroundColor: n
                })
            },
            _onSlideTransitionEnd: function(t, e) {
                var n = e.$currentSlide.index();
                $n(Rc.slideNavButtons, this.$container).eq(n).addClass(Wc.navButtonActive).siblings().removeClass(Wc.navButtonActive)
            },
            _onClickNavButton: function(t) {
                var e = $n(t.target),
                    n = e.index();
                this.slider.setSlide(e.index()), this.trigger("reveal_slider_set_slide", [n])
            },
            _onTouchStart: function(t) {
                t.originalEvent.touches.length <= 1 || (this.enablePinch = !0, this.hammertime.get("pinch").set({
                    enable: this.enablePinch
                }))
            },
            _onTouchEnd: function() {
                this.enablePinch && (this.enablePinch = !1, this.hammertime.get("pinch").set({
                    enable: this.enablePinch
                }))
            },
            _onPinch: function(t) {
                this.$coverTopBackground = this.$coverTopBackground || $n(Rc.coverTopBackground, this.$container), this.$coverBottomBackground = this.$coverBottomBackground || $n(Rc.coverBottomBackground, this.$container), this.$coverTitle = this.$coverTitle || $n(Rc.coverContent, this.$container), "pinchin" === t.type && !this.coverIsOpen || "pinchout" === t.type && this.coverIsOpen || (this.distance = this.coverIsOpen ? 70 * t.scale : 25 * (t.scale - 1), this.distance < 0 && (this.distance = 0), this.$coverBottomBackground.css({
                    transform: "translateY(" + this.distance + "%)"
                }), this.$coverTopBackground.css({
                    transform: "translateY(-" + this.distance + "%)"
                }), this.$coverTitle.css({
                    opacity: 1 - this.distance / 30
                }))
            },
            _onPinchEnd: function(t) {
                t.scale > 2 ? (this.$container.addClass(Wc.coverOpen), this.coverIsOpen = !0) : (this.$container.removeClass(Wc.coverOpen), this.coverIsOpen = !1), requestAnimationFrame(function() {
                    this.$coverTopBackground.removeAttr("style"), this.$coverBottomBackground.removeAttr("style"), this.$coverTitle.removeAttr("style")
                }.bind(this))
            }
        },
        Vc = {
            coverContent: ".side-scroller__cover-content",
            slidesContainer: ".side-scroller__slides-container",
            coverBackground: ".side-scroller__cover-background",
            slides: ".side-scroller__slide"
        },
        Uc = {
            coverFixed: "side-scroller--fixed",
            coverBottom: "side-scroller--fixed-bottom"
        },
        Xc = {
            initSideScroller: function() {
                this.trigger("side_scroller_init_start"), this.$slides = $n(Vc.slides, this.$container), this.$slidesContainer = $n(Vc.slidesContainer, this.$container), this.sideScroller = !0, this.sideScrollerNamespace = ".sideScroller", this.coverPosition = "top", this.window().on("scroll" + this.sideScrollerNamespace, this._onScroll.bind(this)), this.window().on("resize" + this.sideScrollerNamespace, this._updateCoverPositionValues.bind(this)), this.window().on("resize" + this.sideScrollerNamespace, this._onScroll.bind(this)), this.document().on("drawer_open_start" + this.sideScrollerNamespace, this._handleFixedSideImage.bind(this)), this.document().on("drawer_close_done" + this.sideScrollerNamespace, this._resetFixedSideImage.bind(this)), cs.promiseStylesheet().then(function() {
                    this._updateCoverPositionValues(), this._onScroll(), this.trigger("side_scroller_init_done")
                }.bind(this))
            },
            destroySideScroller: function() {
                this.sideScroller = !1, this.window().off(this.sideScrollerNamespace), this.document().off(this.sideScrollerNamespace), this.trigger("side_scroller_destroy")
            },
            _handleFixedSideImage: function() {
                if ("fixed" === this.coverPosition) {
                    var t = $n(Vc.coverContent, this.$container),
                        e = t.outerHeight(),
                        n = $n(window).scrollTop(),
                        i = n - this.featuresOffset.top;
                    $n(Vc.coverBackground, this.$container).css({
                        transform: "translateY(" + i + "px)",
                        position: "absolute"
                    }), $n(Vc.coverContent, this.$container).css({
                        transform: "translate(-50%, " + (i - e / 2) + "px)",
                        position: "absolute"
                    })
                }
            },
            _resetFixedSideImage: function() {
                "fixed" === this.coverPosition && $n(Vc.coverBackground, this.$container).add(Vc.coverContent, this.$container).css({
                    transform: "",
                    position: ""
                })
            },
            _onScroll: function() {
                var t = $n(window).scrollTop();
                t > this.featuresOffset.top && t + this.windowHeight <= this.featuresOffset.top + this.featuresHeight ? (requestAnimationFrame(this._setCoverPosition.bind(this, "fixed")), requestAnimationFrame(this._updateBackgroundColor.bind(this, t))) : t + this.windowHeight > this.featuresOffset.top + this.featuresHeight ? requestAnimationFrame(this._setCoverPosition.bind(this, "bottom")) : requestAnimationFrame(this._setCoverPosition.bind(this, "top"))
            },
            _setCoverPosition: function(t) {
                if (this.coverPosition !== t) switch (t) {
                    case "top":
                        this.$container.removeClass([Uc.coverBottom, Uc.coverFixed].join(" ")), this.trigger("side_scroller_position_top");
                        break;
                    case "fixed":
                        this.$container.removeClass(Uc.coverBottom).addClass(Uc.coverFixed), this.trigger("side_scroller_position_fixed");
                        break;
                    case "bottom":
                        this.$container.removeClass(Uc.coverFixed).addClass(Uc.coverBottom), this.trigger("side_scroller_position_bottom")
                }
                this.coverPosition = t
            },
            _updateBackgroundColor: function(t) {
                var e = Math.floor((t - this.featuresOffset.top + this.windowHeight / 2) / this.slideHeight);
                this.currentBackgroundIndex = this.currentBackgroundIndex || 0, e !== this.currentBackgroundIndex && (this.currentBackgroundIndex = e, this.$slidesContainer.css({
                    backgroundColor: this.$slides.eq(e).data("background-color")
                }))
            },
            _updateCoverPositionValues: function() {
                this.slideHeight = this.$slides.first().height(), this.featuresOffset = this.$container.offset(), this.featuresHeight = this.$container.height(), this.windowHeight = $n(window).innerHeight(), this.windowWidth = $n(window).innerWidth()
            }
        };
    Os.register("featured-slider", {
        onLoad: function() {
            this.coverIsOpen = !1, this.extend(zc), this.extend(Xc), this._toggleViewState(), $n(window).on("resize", je(this._toggleViewState.bind(this)))
        },
        onUnload: function() {
            this._destroyDesktopState(), this._destroyMobileState()
        },
        onDeselect: function() {
            this.mobileViewEnabled && this.closeCover()
        },
        onBlockSelect: function(t) {
            this.mobileViewEnabled ? (this.openCover(), this.slider.setSlide($n(t.target).index())) : $n("html, body").animate({
                scrollTop: $n(t.target).offset().top
            }, 400)
        },
        onBlockDeselect: function() {
            this.mobileViewEnabled && this.revealSlider.closeCover()
        },
        _toggleViewState: function() {
            var t, e, n = $n(window).innerWidth();
            void 0 === this.mobileViewEnabled ? (t = n < theme.mediaQuerySmall, e = n >= theme.mediaQuerySmall) : (t = n < theme.mediaQuerySmall && !this.mobileViewEnabled, e = n >= theme.mediaQuerySmall && this.mobileViewEnabled), t && (this.mobileViewEnabled = !0, this._destroyDesktopState(), this._enableMobileState()), e && (this.mobileViewEnabled = !1, this._destroyMobileState(), this._enableDesktopState())
        },
        _enableDesktopState: function() {
            this.initSideScroller()
        },
        _destroyDesktopState: function() {
            void 0 !== this.sideScroller && this.destroySideScroller()
        },
        _enableMobileState: function() {
            this.initRevealSlider()
        },
        _destroyMobileState: function() {
            this.revealSlider && this.destroyRevealSlider()
        }
    });
    var Yc = {
            footerParallax: "site-footer--parallax"
        },
        Qc = {
            contentForLayout: ".content-for-layout",
            footerCover: ".site-footer__drawer-cover "
        };
    Os.register("footer", {
        onLoad: function() {
            this.container.hasAttribute("data-footer-parallax") && (this.window().on("resize", this._setParallax.bind(this)), this.document().on("drawer_open_start", this._handleDrawerOpenState.bind(this)), this.document().on("drawer_close_done", this._resetDrawerOpenState.bind(this)), $n(document.body).addClass(Yc.footerParallax), cs.promiseStylesheet().then(this._setParallax.bind(this)))
        },
        onUnload: function() {
            $n(document.body).removeClass(Yc.footerParallax), $n(Qc.contentForLayout).css("margin-bottom", "")
        },
        _setParallax: function() {
            this.height = this.$container.innerHeight(), $n(Qc.contentForLayout).css("margin-bottom", this.height)
        },
        _handleDrawerOpenState: function() {
            if (document.body.scrollHeight - window.innerHeight == 0) this.$container.css("margin-bottom", document.body.clientHeight - document.body.scrollHeight);
            else {
                var t = document.body.scrollHeight - window.innerHeight - window.scrollY,
                    e = t - this.height;
                this.$container.css("margin-bottom", e), $n(Qc.footerCover).css("height", t).show()
            }
        },
        _resetDrawerOpenState: function() {
            this.$container.css("margin-bottom", ""), $n(Qc.footerCover).hide()
        }
    });
    var Gc = {
            skipLink: ".skip-link",
            navigation: ".navigation",
            navAnimateElements: ".navigation__entrance-animation",
            cartBubble: ".site-header__cart-bubble",
            siteHeader: ".site-header",
            siteHeaderWrapper: ".site-header__wrapper",
            siteHeaderLogo: ".site-header__logo",
            siteHeaderCart: ".site-header__cart",
            navigationButton: ".site-header__navigation",
            navigationExpandSublinks: ".navigation__expand-sublinks",
            navigationSublinks: ".navigation__sublinks",
            navigationHasSublinks: ".navigation__has-sublinks",
            announcementBar: ".announcement-bar",
            announcementBarClose: ".announcement-bar__close"
        },
        Kc = {
            themeEditor: "theme-editor",
            headerFixed: "site-header--fixed",
            headerHomepage: "site-header--homepage",
            cartBubbleVisible: "site-header__cart-bubble--visible",
            bubblePulse: "bubble-pulse",
            drawerActive: "drawer--active",
            navigationOpen: "navigation-open",
            navigationOpenEditor: "navigation-open--editor",
            navigationTransitioning: "navigation--is-transitioning",
            navigationHasSublinksCollapsed: "navigation__has-sublinks--collapsed",
            navigationEntranceActive: "navigation__entrance-animation--active",
            siteHeaderWrapperTransitioning: "site-header__wrapper--transitioning",
            announcementBarVisible: "announcement-bar--visible"
        },
        Jc = !0,
        Zc = !1,
        tu = !1;
    Os.register("header-section", {
        onLoad: function() {
            var t = this.$container = $n(this.container);
            this.scrollTop = 0, this.isFixed = !1, this.headerHeight = 0, this.promiseChain = $n.Deferred().resolve(), $n(Gc.navigationButton).one("click", this._toggleNavigationDisplay.bind(this)).one("click", this._setSublinksMaxHeight.bind(this)), $n(Gc.navigationExpandSublinks, t).on("click", this._toggleNavigationSublinks), $n(Gc.announcementBarClose, t).on("click", this._closeAnnouncementBar.bind(this)), $n(document).on("scroll" + this.namespace, Pe(this._toggleHeaderPosition.bind(this), 200)), $n(window).on("resize" + this.namespace, this._adjustNavigationPadding.bind(this)), yc.on("change", this._toggleCartBubble.bind(this)), cs.promiseStylesheet().then(function() {
                this._setupAnnouncementBar()
            }.bind(this))
        },
        onSelect: function() {
            this._adjustNavigationPadding(), tu || (Zc = !0, this.showNavigation())
        },
        onDeselect: function() {
            Zc = !1, setTimeout(function() {
                Zc || (tu = !1, Zc = !1, this.hideNavigation())
            }.bind(this), 100)
        },
        _setupAnnouncementBar: function() {
            var t = $n(Gc.announcementBar, this.$container);
            if (t.length && (!cs.isSessionStorageSupported() || !sessionStorage.getItem("announcement-bar-hidden"))) {
                var e = $n(Gc.siteHeaderWrapper);
                requestAnimationFrame(function() {
                    t.addClass(Kc.announcementBarVisible), e.css("margin-top", "-" + t.outerHeight() + "px"), requestAnimationFrame(function() {
                        e.addClass(Kc.siteHeaderWrapperTransitioning).css("margin-top", "")
                    })
                })
            }
        },
        _closeAnnouncementBar: function(t) {
            if (t.preventDefault(), !Shopify.designMode) {
                var e = $n(Gc.announcementBar),
                    n = $n(Gc.siteHeaderWrapper);
                n.css("margin-top", "-" + e.outerHeight() + "px"), $n(Gc.announcementBarClose).attr("aria-expanded", !1), cs.isSessionStorageSupported() && sessionStorage.setItem("announcement-bar-hidden", !0), cs.promiseTransitionEnd(n).then(function() {
                    e.remove(), n.removeClass(Kc.siteHeaderWrapperTransitioning).css("margin-top", "")
                })
            }
        },
        _toggleHeaderPosition: function() {
            if (Jc && !this.headerAnimating) {
                var t = $n(document).scrollTop();
                this.headerHeight = this.headerHeight || this.$container.outerHeight(), t <= 0 ? requestAnimationFrame(this._promiseHeaderReset.bind(this)) : t < this.scrollTop && t > 0 && !this.isFixed && !this.isAnimating ? requestAnimationFrame(this._promiseHeaderSlideIn.bind(this)) : t > this.scrollTop && t > this.headerHeight && this.isFixed && !this.isAnimating && requestAnimationFrame(this._promiseHeaderSlideOut.bind(this)), this.scrollTop = t, this._doubleCheckPosition()
            }
        },
        _doubleCheckPosition: function() {
            void 0 === this.doubleCheckDebounced && (this.doubleCheckDebounced = je(function() {
                this.scrollTop = $n(document).scrollTop(), this.scrollTop <= 0 && this._promiseHeaderReset()
            }.bind(this), 500)), this.doubleCheckDebounced()
        },
        _promiseHeaderReset: function() {
            this.promiseChain = this.promiseChain.then(function() {
                this.$container.removeClass(Kc.headerFixed), $n("body").css("padding-top", "")
            }.bind(this))
        },
        /*
        _promiseHeaderSlideIn: function() {
            return this.isFixed = !0, this.headerAnimating = !0, $n(Gc.siteHeaderWrapper).css("transform", "translateY(-100%)"), requestAnimationFrame(function() {
                this.$container.addClass(Kc.headerFixed), this.$container.hasClass(Kc.headerHomepage) || $n("body").css("padding-top", this.headerHeight), requestAnimationFrame(function() {
                    $n(Gc.siteHeaderWrapper).css({
                       // transform: "translateY(0%)",
                       // transition: "transform 0.25s ease-out"
                    })
                })
            }.bind(this)), cs.promiseTransitionEnd($n(Gc.siteHeaderWrapper)).then(function() {
                this.headerAnimating = !1, $n(Gc.siteHeaderWrapper).attr("style", "")
            }.bind(this))
        },
        _promiseHeaderSlideOut: function() {
            return this.isFixed = !1, this.headerAnimating = !0, $n(Gc.siteHeaderWrapper).css({
             //   transform: "translateY(-100%)",
               // transition: "transform 0.25s ease-out"
            }), cs.promiseTransitionEnd($n(Gc.siteHeaderWrapper)).then(function() {
                this.headerAnimating = !1, $n(Gc.siteHeaderWrapper).attr("style", ""), $n("body").css("padding-top", ""), this.$container.removeClass(Kc.headerFixed)
            }.bind(this))
        },*/
        _toggleCartBubble: function(t, e) {
            var n = $n(Gc.cartBubble, this.$container);
            n.toggleClass(Kc.cartBubbleVisible, 0 !== e.items.length), $n("body").hasClass(Kc.drawerActive) || (n.addClass(Kc.bubblePulse), cs.promiseAnimationEnd(n).then(function() {
                n.removeClass(Kc.bubblePulse)
            }))
        },
        showNavigation: function() {
            return $n(document.body).hasClass(Kc.navigationOpen) || (Jc = !1, this._adjustNavigationPadding(), cs.enableTabbingOfChildren(Gc.navigation), $n(Gc.navigation).attr("aria-hidden", !1), $n(Gc.siteHeaderLogo).attr("tabindex", "-1"), $n(Gc.siteHeaderCart).attr("tabindex", "-1"), $n(Gc.skipLink).attr("tabindex", "-1"), this.promiseChain = this.promiseChain.then(this._promiseNavTransition.bind(this, !0)).then(this._promiseNavItemsTransition.bind(this, $n(Gc.navAnimateElements, this.$container).toArray(), !0)).then(function() {
                $n(document).on("keyup" + this.namespace, this._closeOnEscape.bind(this)), $n(Gc.navigationButton).attr("aria-expanded", !0).off().one("click", this._toggleNavigationDisplay.bind(this))
            }.bind(this))), this.promiseChain.then(function() {
                Shopify.designMode && $n(document.body).addClass(Kc.navigationOpenEditor)
            })
        },
        hideNavigation: function() {
            if ($n(document.body).hasClass(Kc.navigationOpen)) {
                var t = $n(Gc.navAnimateElements, this.$container);
                cs.disableTabbingOfChildren(Gc.navigation), $n(Gc.navigation).attr("aria-hidden", !0), $n(Gc.siteHeaderLogo).attr("tabindex", ""), $n(Gc.siteHeaderCart).attr("tabindex", ""), $n(Gc.skipLink).attr("tabindex", ""), Shopify.designMode && ($n(document.body).removeClass(Kc.navigationOpenEditor), t.addClass(Kc.navigationEntranceActive)), this.promiseChain = this.promiseChain.then(this._promiseNavItemsTransition.bind(this, t.toArray().reverse(), !1)).then(this._promiseNavTransition.bind(this, !1)).then(function() {
                    Jc = !0, $n(document).off("keyup" + this.namespace), $n(Gc.navigationButton).off().one("click", this._toggleNavigationDisplay.bind(this)).attr("aria-expanded", !1).focus()
                }.bind(this))
            }
            return this.promiseChain
        },
        _toggleNavigationDisplay: function() {
            tu = !0, $n(document.body).hasClass(Kc.navigationOpen) ? this.hideNavigation() : this.showNavigation()
        },
        _adjustNavigationPadding: function() {
            this.headerHeight = $n(Gc.siteHeader).height(), $n(Gc.navigation, this.$container).css("padding-top", this.headerHeight + "px")
        },
        _promiseNavTransition: function(t) {
            return $n(document.body).addClass(Kc.navigationTransitioning).toggleClass(Kc.navigationOpen, t), $n(window).scrollTop(this.scrollTop), cs.promiseTransitionEnd($n(Gc.navigation, this.$container)).then(function() {
                $n(document.body).removeClass(Kc.navigationTransitioning)
            })
        },
        _promiseNavItemsTransition: function(t, e) {
            return cs.mapPromiseSeries(t, function(t, n) {
                var i = $n(n);
                return i.toggleClass(Kc.navigationEntranceActive, e), cs.promiseTransitionEnd(i)
            })
        },
        _closeOnEscape: function(t) {
            27 === t.keyCode && this.hideNavigation()
        },
        _toggleNavigationSublinks: function() {
            var t = $n(this),
                e = t.parent(),
                n = "true" === t.attr("aria-expanded");
            e.toggleClass(Kc.navigationHasSublinksCollapsed), e.siblings(Gc.navigationHasSublinks).addClass(Kc.navigationHasSublinksCollapsed).children(Gc.navigationExpandSublinks).attr("aria-expanded", !1), t.attr("aria-expanded", !n)
        },
        _setSublinksMaxHeight: function() {
            $n(Gc.navigationSublinks, this.$container).each(function() {
                var t = $n(this),
                    e = t.parent(),
                    n = t.outerHeight();
                e.css("max-height", n)
            })
        }
    }), Os.register("list-collections-template", {
        onLoad: function() {
            this.extend(ac)
        }
    });
    var eu, nu = {
            zeroResults: theme.strings.map && theme.strings.map.zeroResults,
            overQueryLimit: theme.strings.map && theme.strings.map.overQueryLimit,
            authError: theme.strings.map && theme.strings.map.authError,
            requestDenied: theme.strings.map && theme.strings.map.addressError,
            geocodeUnknownError: theme.strings.map && theme.strings.map.addressError,
            missingKey: theme.strings.map && theme.strings.map.addressError,
            apiLoadError: theme.strings.map && theme.strings.map.authError
        },
        iu = {
            promiseAPI: function(t) {
                return t = t || "", void 0 === eu && (eu = $n.getScript("https://maps.googleapis.com/maps/api/js?key=" + t)), eu.then(function() {
                    return $n.Deferred(function(t) {
                        window.google && window.google.maps || t.reject(nu.apiLoadError), t.resolve(window.google)
                    })
                })
            },
            promiseGeocode: function(t) {
                return this.promiseAPI().then(function(e) {
                    return $n.Deferred(function(n) {
                        var i;
                        window.gm_authFailure = function() {
                            n.reject(nu.authError)
                        }, i = new e.maps.Geocoder, i.geocode({
                            address: t
                        }, function(t, i) {
                            i !== e.maps.GeocoderStatus.OK && n.reject(Tn(i)), n.resolve(t)
                        })
                    })
                })
            },
            promiseMap: function(t) {
                return $n.when(this.promiseAPI(t.key), this.promiseGeocode(t.address)).then(function(e, n) {
                    return $n.Deferred(function(i) {
                        var r, o = n[0].geometry.location,
                            s = $n.extend({}, {
                                zoom: 14,
                                center: o,
                                disableDefaultUI: !0
                            }, t);
                        return window.gm_authFailure = function() {
                            i.reject(nu.authError)
                        }, r = new e.maps.Map(t.container, s), r.centerMarker = new e.maps.Marker({
                            map: r,
                            position: r.getCenter()
                        }), e.maps.event.addDomListener(window, "resize", je(function() {
                            e.maps.event.trigger(r, "resize"), r.setCenter(o)
                        }, 250)), i.resolve(r)
                    })
                })
            }
        },
        ru = {
            map: ".map-section__container",
            mapError: ".map-section__error-message"
        },
        ou = {
            mapError: "map-section--load-error"
        };
    Os.register("map", {
        onLoad: function() {
            if (this.$container = $n(this.container), this.$map = $n(ru.map, this.$container), this.key = this.$map.data("api-key"), "string" == typeof this.key && "" !== this.key) {
                var t = {
                    key: this.key,
                    container: this.$map[0],
                    address: this.$map.data("address-setting")
                };
                cs.promiseStylesheet().then(function() {
                    return iu.promiseMap(t)
                }).then(function(t) {
                    this.map = t
                }.bind(this)).catch(function(t) {
                    this.$container.addClass(ou.mapError), Shopify.designMode && $n(ru.mapError, this.$container).html(t).css("display", "inline-block")
                }.bind(this))
            }
        }
    });
    var su = {
            emailField: "#EmailField",
            submitButton: ".btn--newsletter__submit",
            newsletterMessage: ".newsletter__message"
        },
        au = {
            blankError: theme.strings.newsletter && theme.strings.newsletter.blankError,
            invalidError: theme.strings.newsletter && theme.strings.newsletter.invalidError
        };
    Os.register("newsletter", {
        onLoad: function() {
            this.$container = $n(this.container), this.$container.on("click", su.submitButton, this._checkEmail.bind(this))
        },
        _checkEmail: function() {
            var t, e = su.emailField + this.$container.data("section-id"),
                n = $n(e, this.$container),
                i = $n(su.newsletterMessage, this.$container),
                r = n[0].value,
                o = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if ("" == r) var t = au.blankError;
            else if (!o.test(r)) var t = au.invalidError;
            if (void 0 !== t) return i.html('<p class="errors">' + t + "</p>"), !1;
            i.html("")
        }
    });
    var cu = {
            lazypreload: "lazypreload",
            showProductSlideshow: "product-slideshow--show",
            productSlideshowSelectActive: "product-slideshow__slide-select--active"
        },
        uu = {
            slider: ".slider",
            productSlideshow: ".product-slideshow",
            productSlideshowOpen: ".product-slideshow__open",
            productSlideshowSlide: "[data-product-slideshow-slide]",
            productSlideshowImage: "[data-product-slideshow-image]",
            productSlideshowNext: "[data-product-slideshow-next]",
            productSlideshowSelect: "[data-product-slideshow-select]",
            productSlideshowPrevious: "[data-product-slideshow-previous]",
            productSlideshowClose: "[data-product-slideshow-close]"
        },
        lu = {
            init: function() {
                this.$productSlideshow = $n(uu.productSlideshow, this.$container), 0 !== this.$productSlideshow.length && ($n(uu.productSlideshowOpen).on("click", this._onImageClick.bind(this)), this.$productSlideshow.appendTo(document.body), this.slideCount = $n(uu.productSlideshowSlide, this.$productSlideshow).length, this.slideCount > 1 && (this.slider = new Cn($n(uu.slider, this.$productSlideshow))))
            },
            showSlideshow: function() {
                return this.trigger("product_slideshow_show"), this.$slideshowOpenFocus = $n(document.activeElement), $n(uu.productSlideshowImage, this.$productSlideshow).addClass(cu.lazypreload), Os.getInstances("header-section").then(function(t) {
                    t[0].scrollHandler = !1, this._assignEventHandlers(), Ts.trapFocus({
                        $container: this.$productSlideshow,
                        namespace: "product-slideshow"
                    }), this.$productSlideshow.addClass(cu.showProductSlideshow).attr("aria-hidden", !1), cs.disableScrollBody(), cs.enableTabbingOfChildren(this.$productSlideshow)
                }.bind(this))
            },
            hideSlideshow: function() {
                return this.trigger("product_slideshow_hide"), Os.getInstances("header-section").then(function(t) {
                    t[0].scrollHandler = !0, this._removeEventHandlers(), Ts.removeTrapFocus({
                        namespace: "product-slideshow"
                    }), cs.enableScrollBody(), cs.disableTabbingOfChildren(this.$productSlideshow), this.$productSlideshow.removeClass(cu.showProductSlideshow).attr("aria-hidden", !0), this.$slideshowOpenFocus.focus()
                }.bind(this))
            },
            setSlide: function(t) {
                if (!(this.slideCount <= 1)) {
                    var e = this._getSlideIndex(t);
                    return this.trigger("product_slideshow_set_slide", [e]), this.slider.setSlide(e)
                }
            },
            _onImageClick: function(t) {
                t.preventDefault();
                var e = $n(t.currentTarget).data("id");
                "number" == typeof e && (this.setSlide(e), this.showSlideshow())
            },
            _assignEventHandlers: function() {
                $n(document).one("keyup.product-slideshow", this._onKeyup.bind(this)), this.$productSlideshow.on("slidetransitionend", this._setSlideIndicator.bind(this)).on("click", uu.productSlideshowSelect, this._setSlide.bind(this)).one("click", uu.productSlideshowClose, this.hideSlideshow.bind(this)).one("click", uu.productSlideshowNext, this._nextSlide.bind(this)).one("click", uu.productSlideshowPrevious, this._previousSlide.bind(this))
            },
            _removeEventHandlers: function() {
                this.$productSlideshow.off(), $n(document).off(".product-slideshow")
            },
            _getSlideIndex: function(t) {
                return $n(uu.productSlideshowSlide, this.$productSlideshow).filter('[data-id="' + t + '"]').index()
            },
            _setSlide: function(t) {
                var e = $n(t.target),
                    n = e.index();
                this.trigger("product_slideshow_set_slide", [n]), this.slider.setSlide(n, !0)
            },
            _nextSlide: function() {
                return this.trigger("product_slideshow_next"), this.trigger("product_slideshow_set_slide", [this.slider.$nextSlide.index()]), this.slider.nextSlide().then(function() {
                    this.$productSlideshow.one("click", uu.productSlideshowNext, this._nextSlide.bind(this))
                }.bind(this))
            },
            _previousSlide: function() {
                return this.trigger("product_slideshow_previous"), this.trigger("product_slideshow_set_slide", [this.slider.$previousSlide.index()]), this.slider.previousSlide().then(function() {
                    this.$productSlideshow.one("click", uu.productSlideshowPrevious, this._previousSlide.bind(this))
                }.bind(this))
            },
            _setSlideIndicator: function(t, e) {
                var n = e.$currentSlide.index();
                $n(uu.productSlideshowSelect, this.$productSlideshow).eq(n).addClass(cu.productSlideshowSelectActive).siblings().removeClass(cu.productSlideshowSelectActive)
            },
            _onKeyup: function(t) {
                var e = $n.Deferred().resolve();
                switch (t.keyCode) {
                    case 37:
                        e = this.slider.previousSlide();
                        break;
                    case 39:
                        e = this.slider.nextSlide();
                        break;
                    case 27:
                        this.hideSlideshow(), e = $n.Deferred().reject()
                }
                e.then(function() {
                    $n(document).one("keyup", this._onKeyup.bind(this))
                }.bind(this))
            }
        },
        du = {
            productFormWrapper: ".product__form-wrapper",
            productDescription: ".product__description"
        },
        hu = {
            productFormFixed: "product__form-wrapper--fixed",
            productFormBottom: "product__form-wrapper--bottom"
        };
    Os.register("product-template", {
        onLoad: function() {
            this.coverPosition = "top", this.extend(lu), this.extend(ys), this.extend(Ic), this.window().on("scroll", this._setFormPosition.bind(this)), this.window().on("resize", this._updateMeasurements.bind(this)), this.on("variant_add_to_cart", this._updateMeasurements.bind(this)), this.on("variant_change", this._updateHistoryState.bind(this)), this.document().on("drawer_open_start", this._handleFixedSideImage.bind(this)), this.document().on("drawer_close_done", this._resetFixedSideImage.bind(this)), cs.promiseStylesheet().then(function() {
                this._updateMeasurements()
            }.bind(this))
        },
        _handleFixedSideImage: function() {
            if ("fixed" === this.coverPosition) {
                var t = $(window).scrollTop(),
                    e = t - this.fixedTop + 160 + 28;
                $(du.productFormWrapper, this.$container).css({
                    transform: "translateY(" + e + "px)",
                    position: "absolute"
                })
            }
        },
        _resetFixedSideImage: function() {
            "fixed" === this.coverPosition && $(du.productFormWrapper, this.$container).css({
                transform: "",
                position: ""
            })
        },
        _updateHistoryState: function(t, e, n, i) {
            if (history.replaceState) {
                var r = window.location.protocol + "//" + window.location.host + window.location.pathname + "?variant=" + i.id;
                window.history.replaceState({
                    path: r
                }, "", r)
            }
        },
        _setFormPosition: function() {
            if (!cs.isMobile() && this.enableSticky) {
                var t = $(window).scrollTop();
                requestAnimationFrame(function() {
                    t > this.fixedTop ? t > this.fixedBottom ? (this.coverPosition = "bottom", $(du.productFormWrapper).css("width", this.formWidth).removeClass(hu.productFormFixed).addClass(hu.productFormBottom)) : (this.coverPosition = "fixed", $(du.productFormWrapper).css("width", this.formWidth).addClass(hu.productFormFixed).removeClass(hu.productFormBottom)) : (this.coverPosition = "top", $(du.productFormWrapper).css("width", "").removeClass(hu.productFormFixed).removeClass(hu.productFormBottom))
                }.bind(this))
            }
        },
        _updateMeasurements: function() {
            var t = $(du.productFormWrapper),
                e = $(du.productDescription).outerHeight(!0),
                n = t.height();
            this.enableSticky = e > n, this.enableSticky && (this.fixedTop = t.parent().offset().top - 80, this.fixedBottom = this.fixedTop + e - n, this.formWidth = t.parent().width(), this._setFormPosition())
        }
    });
    var fu = {
            slider: ".quotes-slider",
            slide: ".quotes-slide"
        },
        pu = {
            visible: "quotes-slide--visible"
        };
    Os.register("quotes-section", {
        onLoad: function() {
            this.$container = $n(this.container), this.$slider = $n(fu.slider, this.$container), this.totalSlides = this.$slider.data("count"), this.speed = this.$slider.data("speed"), this.currentSlide = 0, this.$slider.find(fu.slide).length > 1 && this._startSlider()
        },
        _startSlider: function() {
            this.interval = setInterval(function() {
                this.currentSlide + 1 >= this.totalSlides ? this.currentSlide = 0 : this.currentSlide++, this._showSlide(fu.slide + "--" + this.currentSlide)
            }.bind(this), this.speed)
        },
        _showSlide: function(t) {
            this.$slider.find(fu.slide).removeClass(pu.visible).end().find(t).addClass(pu.visible)
        },
        onBlockSelect: function(t) {
            clearInterval(this.interval);
            var e = this.$container.find(fu.slide + "--" + t.detail.blockId);
            this._showSlide(e)
        },
        onBlockDeselect: function() {
            this._startSlider()
        }
    }), Os.register("search-template", {
        onLoad: function() {
            this.extend(ac)
        }
    });
    var mu, gu, vu = {
            promiseAPI: function() {
                if (!mu) {
                    var t = document.createElement("script");
                    t.src = "https://www.youtube.com/iframe_api";
                    var e = document.getElementsByTagName("script")[0];
                    e.parentNode.insertBefore(t, e), mu = $n.Deferred(function(t) {
                        window.onYouTubeIframeAPIReady = t.resolve, setTimeout(function() {
                            t.reject("Request for YouTube API timed out after 30 seconds.")
                        }, 3e4)
                    })
                }
                return mu
            },
            promisePlayer: function(t, e) {
                return this.promiseAPI().then(function() {
                    return $n.Deferred(function(n) {
                        void 0 === window.YT && n.reject("We're sorry, something went wrong. The YouTube API has not loaded correctly.");
                        var i = new YT.Player(t, e);
                        i.addEventListener("onReady", function() {
                            n.resolve(i)
                        }), setTimeout(function() {
                            n.reject("Request for YouTube player has timed out after 30 seconds.")
                        }, 3e4)
                    })
                })
            }
        },
        yu = {
            promiseAPI: function() {
                return gu || (gu = $n.Deferred(function(t) {
                    var e = document.createElement("script");
                    e.src = "https://player.vimeo.com/api/player.js", e.onload = e.onreadystatechange = function() {
                        this.readyState && "complete" !== this.readyState || t.resolve()
                    };
                    var n = document.getElementsByTagName("script")[0];
                    n.parentNode.insertBefore(e, n), setTimeout(function() {
                        t.reject("Request for Vimeo API timed out after 30 seconds.")
                    }, 3e4)
                })), gu
            },
            promisePlayer: function(t, e) {
                return this.promiseAPI().then(function() {
                    return $n.Deferred(function(n) {
                        void 0 === window.Vimeo && n.reject("We're sorry, something went wrong. The Vimeo API has not loaded correctly.");
                        var i = new window.Vimeo.Player(t, e);
                        setTimeout(function() {
                            n.reject("Request for Vimeo player has timed out after 30 seconds.")
                        }, 3e4), i.ready().then(function() {
                            n.resolve(i)
                        })
                    })
                })
            }
        },
        bu = {
            buttons: ".slideshow__buttons",
            button: ".slideshow__button",
            label: ".slideshow__button-label",
            cta: ".slideshow__button-cta--desktop",
            slide: ".slideshow__slide",
            slideshow: ".slideshow",
            video: ".slideshow__video"
        },
        _u = {
            buttonActive: "slideshow__button--active",
            linkActive: "slideshow__button--link",
            slideActive: "slideshow__slide--active",
            slideActiveTransitioning: "slideshow__slide--transitioning",
            videoLoaded: "slideshow__video--loaded"
        },
        wu = {
            easeIntensity: 10
        },
        Su = {
            initDesktopSlideshow: function() {
                this.trigger("slideshow_desktop_init_start"), this.$slide = $n(bu.slide, this.$container), this.$buttons = $n(bu.buttons, this.$container), this.$button = $n(bu.button, this.$container), this.desktopSlideshow = !0, this.isAnimating = !1, this.currentDesktopSlide = 0, this.totalSlides = this.$buttons.data("count"), this.players = [], this.desktopSlideshowNamespace = ".desktopSlideshow", this.on("mouseover" + this.desktopSlideshowNamespace, this._onHoverSlideshow.bind(this)), this.on("mousemove" + this.desktopSlideshowNamespace, this._mouseMoveButtons.bind(this)), this.on("mouseleave" + this.desktopSlideshowNamespace, this._resetButtonsPosition.bind(this)), this.on("click" + this.desktopSlideshowNamespace, bu.label, this._onClickButton.bind(this)), this.on("keydown" + this.desktopSlideshowNamespace, this._addKeyBindings.bind(this)), this.window().on("resize" + this.desktopSlideshowNamespace, this._setButtonWrapperValues.bind(this)), cs.promiseStylesheet().then(function() {
                    this._setButtonWrapperValues(), this._setSlideDesktop(0), this.trigger("slideshow_desktop_init_done")
                }.bind(this))
            },
            destroyDesktopSlideshow: function() {
                this.trigger("slideshow_desktop_destroy"), this.desktopSlideshow = !1, this.off(this.desktopSlideshowNamespace), this.window().off(this.desktopSlideshowNamespace), this._setButtonsTranslateX(0);
                for (var t in this.players) {
                    if (!this.players.hasOwnProperty(t)) return;
                    var e = this.players[t];
                    "function" == typeof e.destroy ? e.destroy() : "function" == typeof e.unload && e.unload()
                }
                this.players = []
            },
            _onHoverSlideshow: function() {
                this._animateButtonFrame()
            },
            _mouseMoveButtons: function(t) {
                this.totalSlides <= 3 || (this.mousePosition = t.pageX - this.centerOfButtonsWrapper, this.isAnimating || (this.isAnimating = !0, this._animateButtonFrame()))
            },
            _resetButtonsPosition: function() {
                this.mousePosition = 0
            },
            _onClickButton: function(t) {
                var e = $n(t.target).parent(),
                    n = e.index();
                this._setButtonStatus(n), this._setSlideDesktop(n)
            },
            _setButtonStatus: function(t) {
                var e = this.$button.eq(t);
                this.$button.removeClass(_u.buttonActive).find(bu.label).attr("aria-expanded", !1), e.addClass(_u.buttonActive).find(bu.label).attr("aria-expanded", !0).focus(), this.$button.find(bu.cta).attr("tabindex", "-1"), e.hasClass(_u.linkActive) && e.find(bu.cta).attr("tabindex", "0")
            },
            _animateButtonFrame: function() {
                var t = this.mousePosition - this.xPosition,
                    e = this.buttonsInnerWidth / this.buttonsWrapperWidth - 1;
                if (Math.abs(t) < 1) return void(this.isAnimating = !1);
                this.xPosition += t / wu.easeIntensity, this._setButtonsTranslateX(-this.xPosition * e), requestAnimationFrame(this._animateButtonFrame.bind(this))
            },
            _setButtonsTranslateX: function(t) {
                this.$buttons.css({
                    transform: "translate3d(" + t + "px, 0, 0)"
                })
            },
            _addKeyBindings: function(t) {
                37 === t.which ? this._previousSlideDesktop() : 39 === t.which && this._nextSlideDesktop()
            },
            _previousSlideDesktop: function() {
                0 !== this.currentDesktopSlide && this._setSlideDesktop(this.currentDesktopSlide - 1)
            },
            _nextSlideDesktop: function() {
                this.currentDesktopSlide !== this.totalSlides - 1 && this._setSlideDesktop(this.currentDesktopSlide + 1)
            },
            _setSlideDesktop: function(t) {
                var e = this.$slide.eq(this.currentDesktopSlide),
                    n = this.$slide.eq(t),
                    i = n.find(bu.video);
                i.length && this._loadVideo(i, n), this.currentDesktopSlide !== t && (n.addClass(_u.slideActive).attr("aria-hidden", !1), e.addClass(_u.slideActiveTransitioning), cs.promiseTransitionEnd(n).then(function() {
                    e.removeClass(_u.slideActive).removeClass(_u.slideActiveTransitioning).attr("aria-hidden", !0)
                }), this._setButtonStatus(t), this.currentDesktopSlide = t, this.trigger("slideshow_set_slide", [t]), this.currentDesktopSlide - 1 >= 0 && this.trigger("slideshow_previous_slide", [t - 1]), this.currentDesktopSlide + 1 < this.totalSlides && this.trigger("slideshow_next_slide", [t + 1]))
            },
            _loadVideo: function(t, e) {
                return this.$video = t, this.trigger("slideshow_video_load", [t[0]]), this._promiseVideo().then(function() {
                    e.addClass(_u.videoLoaded), this.trigger("slideshow_video_loaded", [t[0]])
                }.bind(this))
            },
            _promiseVideo: function() {
                var t, e = this.$video.attr("data-video-type");
                return "youtube" === e ? (t = this._loadYoutubePlayer(), this.$video.attr("tabindex", "-1")) : "vimeo" === e && (t = this._loadVimeoPlayer(), this.$video.find("iframe").attr("tabindex", "-1")), t
            },
            _loadYoutubePlayer: function() {
                var t = this.$video.attr("data-video-id");
                return vu.promisePlayer(this.$video[0], {
                    videoId: t,
                    ratio: 16 / 9,
                    playerVars: {
                        iv_load_policy: 3,
                        modestbranding: 1,
                        autoplay: 0,
                        controls: 0,
                        showinfo: 0,
                        wmode: "opaque",
                        branding: 0,
                        autohide: 0,
                        rel: 0
                    },
                    events: {
                        onStateChange: function(e) {
                            0 === e.data && this.players[t].seekTo(0)
                        }.bind(this)
                    }
                }).then(function(e) {
                    return this.players[t] = e, e.playVideo().mute(), $n.Deferred(function(t) {
                        e.addEventListener("onStateChange", function(e) {
                            1 === e.data && t.resolve()
                        })
                    })
                }.bind(this))
            },
            _loadVimeoPlayer: function() {
                var t = this.$video.attr("data-video-id");
                return yu.promisePlayer(this.$video[0], {
                    id: t,
                    loop: !0,
                    playbar: !1
                }).then(function(e) {
                    return this.players[t] = e, e.play(), e.setVolume(0), $n.Deferred(function(t) {
                        e.on("timeupdate", function(n) {
                            n.percent <= 0 || (e.off("timeupdate"), t.resolve())
                        })
                    })
                }.bind(this))
            },
            _setButtonWrapperValues: function() {
                this.mousePosition = 0, this.xPosition = 0, this.buttonsWrapperWidth = this.$container.outerWidth(), this.buttonsInnerWidth = this.$button.first().width() * this.totalSlides, this.centerOfButtonsWrapper = this.buttonsWrapperWidth / 2, this._setButtonsTranslateX(0)
            }
        },
        xu = {
            button: ".slideshow__button",
            buttons: ".slideshow__buttons",
            cta: ".slideshow__button-cta--mobile",
            label: ".slideshow__button-label",
            nextButton: ".slideshow__button--next",
            previousButton: ".slideshow__button--previous",
            slide: ".slideshow__slide",
            slideshow: ".slideshow",
            slideNavButtons: ".slideshow__nav-dot"
        },
        Cu = {
            buttonActive: "slideshow__button--active",
            dotActive: "slideshow__nav-dot--active",
            linkActive: "slideshow__button--link",
            slideActive: "slideshow__slide--active",
            slideActiveTransitioning: "slideshow__slide--transitioning"
        },
        Tu = {
            initMobileSlideshow: function() {
                this.trigger("slideshow_mobile_init_start"), this.$buttons = $n(xu.buttons, this.$container), this.$button = $n(xu.button, this.$container), this.mobileSlideshow = !0, this.currentMobileSlide = 0, this.totalSlides = this.$buttons.data("count"), this.xPosition = 0, this.mobileSlideshowNamespace = ".mobileSlideshow", this.on("click" + this.mobileSlideshowNamespace, xu.slideNavButtons, this._onClickNavDot.bind(this)), this.on("click" + this.mobileSlideshowNamespace, xu.previousButton, this._previousSlideMobile.bind(this)), this.on("click" + this.mobileSlideshowNamespace, xu.nextButton, this._nextSlideMobile.bind(this)), this.totalSlides > 1 && (this.hammertime = new Bc(this.$container[0]), this.hammertime.on("swipeleft", this._nextSlideMobile.bind(this)).on("swiperight", this._previousSlideMobile.bind(this))), this._setA11ySettings(0), this.$button.first().addClass(Cu.buttonActive), cs.promiseStylesheet().then(function() {
                    this._setSlideMobile(0), this.trigger("slideshow_mobile_init_done")
                }.bind(this))
            },
            destroyMobileSlideshow: function() {
                this.trigger("slideshow_mobile_destroy"), this.mobileSlideshow = !1, this.$container.off(this.mobileSlideshowNamespace), this.totalSlides > 1 && this.hammertime.destroy()
            },
            _onClickNavDot: function(t) {
                var e = $n(t.target),
                    n = e.index();
                this._setSlideMobile(n)
            },
            _previousSlideMobile: function() {
                0 !== this.currentMobileSlide && this._setSlideMobile(this.currentMobileSlide - 1)
            },
            _nextSlideMobile: function() {
                this.currentMobileSlide !== this.totalSlides - 1 && this._setSlideMobile(this.currentMobileSlide + 1)
            },
            _setSlideMobile: function(t) {
                this.currentMobileSlide !== t && (this.xPosition = 50 * t, this.$buttons.css({
                    transform: "translate3d(-" + this.xPosition + "%, 0, 0)"
                }), this._setActiveStates(t), this._setA11ySettings(t), this.currentMobileSlide = t, this.trigger("slideshow_set_slide", [t]), this.currentMobileSlide - 1 >= 0 && this.trigger("slideshow_previous_slide", [t - 1]), this.currentMobileSlide + 1 < this.totalSlides && this.trigger("slideshow_next_slide", [t + 1]))
            },
            _setActiveStates: function(t) {
                this.$slide = this.$slide || $n(xu.slide, this.$container), this.$button = this.$button || $n(xu.button, this.$container), this.$dot = this.$dot || $n(xu.slideNavButtons, this.$container);
                var e = this.$slide.eq(this.currentMobileSlide),
                    n = this.$slide.eq(t);
                n.addClass(Cu.slideActive).attr("aria-hidden", !1), e.addClass(Cu.slideActiveTransitioning), cs.promiseTransitionEnd(n).then(function() {
                    e.removeClass(Cu.slideActive).removeClass(Cu.slideActiveTransitioning).attr("aria-hidden", !0)
                }), this.$button.removeClass(Cu.buttonActive), this.$button.eq(t).addClass(Cu.buttonActive), this.$dot.removeClass(Cu.dotActive), this.$dot.eq(t).addClass(Cu.dotActive)
            },
            _setA11ySettings: function(t) {
                var e = this.$button.eq(t);
                this.$label = this.$label || this.$button.find(xu.label), this.$cta = this.$cta || this.$button.find(xu.cta), this.$label.attr("tabindex", "-1"), this.$cta.attr("tabindex", "-1"), e.hasClass(Cu.linkActive) && this.$cta.eq(t).attr("tabindex", "0")
            }
        },
        ku = {
            button: ".slideshow__button",
            slide: ".slideshow__slide"
        },
        $u = {
            buttonActive: "slideshow__button--active",
            slideActive: "slideshow__slide--active"
        };
    Os.register("slideshow-section", {
        onLoad: function() {
            this.extend(Su), this.extend(Tu), this._toggleViewState(), this.window().on("resize", this._toggleViewState.bind(this))
        },
        onUnload: function() {
            this._destroyDesktopState(), this._destroyMobileState()
        },
        onBlockSelect: function(t) {
            cs.promiseStylesheet().then(function() {
                var e = $n(t.target).index();
                this.mobileViewEnabled ? this._setSlideMobile(e) : this._setSlideDesktop(e)
            }.bind(this))
        },
        _toggleViewState: function() {
            var t, e, n = $n(window).innerWidth();
            void 0 === this.mobileViewEnabled ? (t = n < theme.mediaQuerySmall, e = n >= theme.mediaQuerySmall) : (t = n < theme.mediaQuerySmall && !this.mobileViewEnabled, e = n >= theme.mediaQuerySmall && this.mobileViewEnabled), t && (this.mobileViewEnabled = !0, this._destroyDesktopState(), this._enableMobileState()), e && (this.mobileViewEnabled = !1, this._destroyMobileState(), this._enableDesktopState())
        },
        _enableDesktopState: function() {
            this.initDesktopSlideshow()
        },
        _destroyDesktopState: function() {
            this.desktopSlideshow && (this.destroyDesktopSlideshow(), this._resetSlideshowValues())
        },
        _enableMobileState: function() {
            this.initMobileSlideshow()
        },
        _destroyMobileState: function() {
            this.mobileSlideshow && (this.destroyMobileSlideshow(), this._resetSlideshowValues())
        },
        _resetSlideshowValues: function() {
            $n(ku.slide).removeClass($u.slideActive).first().addClass($u.slideActive), $n(ku.button).removeClass($u.buttonActive).first().addClass($u.buttonActive)
        }
    });
    var Eu = {
            loadPlayerButton: ".video-section__load-player-button",
            closePlayerButton: ".video-section__player-close",
            playerContainer: ".video-section__player",
            cover: ".video-section__cover",
            errorMessage: ".video-section__error",
            bodyOverlay: ".video-section__body-overlay"
        },
        Au = {
            playerLoading: "video-section--loading",
            playerLoaded: "video-section--loaded",
            playerError: "video-section--error",
            animateButton: "animated pulse"
        };
    Os.register("video-section", {
        onLoad: function() {
            this.$container = $n(this.container), this.$container.on("click", Eu.loadPlayerButton, this._loadPlayer.bind(this)).on("click", Eu.closePlayerButton, this._closePlayer.bind(this)).on("click", Eu.bodyOverlay, this._closePlayer.bind(this))
        },
        _loadPlayer: function() {
            var t, e = this.$container,
                n = $n(Eu.loadPlayerButton, e),
                i = $n(Eu.playerContainer, e),
                r = this.$container.attr("data-video-type");
            return n.addClass(Au.animateButton), this._scrollToPlayer(e), "youtube" === r ? t = this._loadYoutubePlayer(i[0]) : "vimeo" === r && (t = this._loadVimeoPlayer(i[0])), t.then(this._onPlayerLoadReady.bind(this)).catch(this._onPlayerLoadError.bind(this)).always(function() {
                n.removeClass(Au.animateButton)
            })
        },
        _scrollToPlayer: function(t) {
            var e = t.offset().top,
                n = ($n(window).height() - t.height()) / 2;
            $n("html, body").animate({
                scrollTop: e - n
            }, 400)
        },
        _loadYoutubePlayer: function(t) {
            return vu.promisePlayer(t, {
                videoId: this.$container.attr("data-video-id"),
                ratio: 16 / 9,
                playerVars: {
                    modestbranding: 1,
                    autoplay: 1,
                    showinfo: 0,
                    rel: 0
                }
            }).then(function(t) {
                this.player = t
            }.bind(this))
        },
        _loadVimeoPlayer: function(t) {
            return yu.promisePlayer(t, {
                id: this.$container.attr("data-video-id")
            }).then(function(t) {
                this.player = t, this.player.play()
            }.bind(this))
        },
        _onPlayerLoadReady: function() {
            $n(Eu.closePlayerButton, this.$container).show().focus(), $n(Eu.cover, this.$container).prepareTransition().addClass(Au.playerLoaded), this.$container.addClass(Au.playerLoaded), this._setScrollPositionValues(), $n(document).one("keyup" + this.namespace, this._closeOnEscape.bind(this)).on("scroll" + this.namespace, this._onScroll.bind(this)), $n(window).on("resize" + this.namespace, this._setScrollPositionValues.bind(this))
        },
        _onPlayerLoadError: function(t) {
            this.$container.addClass(Au.playerError), $n(Eu.errorMessage, this.$container).text(t)
        },
        _closeOnEscape: function(t) {
            27 === t.keyCode && (this._closePlayer(), $n(Eu.loadPlayerButton, this.$container).focus())
        },
        _onScroll: function() {
            var t = $n(window).scrollTop();
            (t > this.videoTop + .25 * this.videoHeight || t + this.windowHeight < this.videoBottom - .25 * this.videoHeight) && requestAnimationFrame(this._closePlayer.bind(this))
        },
        _setScrollPositionValues: function() {
            this.videoHeight = this.$container.outerHeight(!0), this.videoTop = this.$container.offset().top, this.videoBottom = this.videoTop + this.videoHeight, this.windowHeight = $n(window).innerHeight()
        },
        _closePlayer: function() {
            $n(Eu.cover, this.$container).prepareTransition().removeClass(Au.playerLoaded), this.$container.removeClass(Au.playerLoaded), $n(Eu.closePlayerButton, this.$container).hide(), "function" == typeof this.player.destroy ? this.player.destroy() : "function" == typeof this.player.unload && this.player.unload(), $n(document).off(this.namespace), $n(window).off(this.namespace)
        }
    }), window.$ = window.jQuery = $n, window.theme.templates = ss, window.theme.sections = Os, $n(document).ready(function() {
        ss.load("*"), Os.load("*")
    })
}();