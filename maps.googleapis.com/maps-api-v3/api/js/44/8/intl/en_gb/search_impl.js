google.maps.__gjsload__('search_impl', function(_) {
    var C$ = function(a) {
            _.C(this, a, 4)
        },
        Joa = function(a) {
            var b = _.Ph;
            D$ || (D$ = {
                T: "sssM",
                W: ["ss"]
            });
            var c = D$;
            return b.g(a.Pa(), c)
        },
        Koa = function(a, b) {
            a.g[0] = b
        },
        Loa = function(a, b) {
            a.g[2] = b
        },
        E$ = function(a) {
            _.C(this, a, 3)
        },
        F$ = function() {
            var a = _.Wj,
                b = _.Qi;
            this.i = _.H;
            this.g = _.gm(_.ku, a, _.mv + "/maps/api/js/LayersService.GetFeature", b)
        },
        Ooa = function(a, b, c) {
            var d = _.pJ(new F$);
            c.Cj = (0, _.y)(d.load, d);
            c.clickable = 0 != a.get("clickable");
            _.IV(c, _.iW(b));
            var e = [];
            e.push(_.K.addListener(c, "click", (0, _.y)(Moa, null, a)));
            _.A(["mouseover",
                "mouseout", "mousemove"
            ], function(f) {
                e.push(_.K.addListener(c, f, (0, _.y)(Noa, null, a, f)))
            });
            e.push(_.K.addListener(a, "clickable_changed", function() {
                a.g.clickable = 0 != a.get("clickable")
            }));
            a.i = e
        },
        Moa = function(a, b, c, d, e) {
            var f = null;
            if (e && (f = {
                    status: e.getStatus()
                }, 0 == e.getStatus())) {
                f.location = _.vm(e, 1) ? new _.I(_.yc(e.getLocation(), 0), _.yc(e.getLocation(), 1)) : null;
                f.fields = {};
                for (var g = 0, h = _.Ec(e, 2); g < h; ++g) {
                    var k = new _.wW(_.Dc(e, 2, g));
                    f.fields[k.getKey()] = k.ab()
                }
            }
            _.K.trigger(a, "click", b, c, d, f)
        },
        Noa = function(a,
            b, c, d, e, f, g) {
            var h = null;
            f && (h = {
                title: f[1].title,
                snippet: f[1].snippet
            });
            _.K.trigger(a, b, c, d, e, h, g)
        },
        G$ = function() {},
        D$;
    _.z(C$, _.B);
    C$.prototype.getParameter = function(a) {
        return new _.wW(_.Dc(this, 3, a))
    };
    _.z(E$, _.B);
    E$.prototype.getStatus = function() {
        return _.xc(this, 0, -1)
    };
    E$.prototype.getLocation = function() {
        return new _.wn(this.g[1])
    };
    F$.prototype.load = function(a, b) {
        function c(g) {
            g = new E$(g);
            b(g)
        }
        var d = new C$;
        Koa(d, a.layerId.split("|")[0]);
        d.g[1] = a.g;
        Loa(d, _.Fd(_.Gd(this.i)));
        for (var e in a.parameters) {
            var f = new _.wW(_.Cc(d, 3));
            f.g[0] = e;
            f.g[1] = a.parameters[e]
        }
        a = Joa(d);
        this.g(a, c, c);
        return a
    };
    F$.prototype.cancel = function() {
        throw Error("Not implemented");
    };
    G$.prototype.Vl = function(a) {
        if (_.uh[15]) {
            var b = a.o,
                c = a.o = a.getMap();
            b && a.g && (a.j ? (b = b.__gm.g, b.set(b.get().Lc(a.g))) : a.g && _.jW(a.g, b) && (_.A(a.i || [], _.K.removeListener), a.i = null));
            if (c) {
                var d = a.get("layerId"),
                    e = a.get("spotlightDescription"),
                    f = a.get("paintExperimentIds"),
                    g = a.get("styler"),
                    h = a.get("mapsApiLayer");
                b = new _.du;
                d = d.split("|");
                b.layerId = d[0];
                for (var k = 1; k < d.length; ++k) {
                    var l = d[k].split(":");
                    b.parameters[l[0]] = l[1]
                }
                e && (b.spotlightDescription = new _.Vr(e));
                f && (b.paintExperimentIds = f.slice(0));
                g && (b.styler = new _.Un(g));
                h && (b.mapsApiLayer = new _.pn(h));
                a.g = b;
                a.j = a.get("renderOnBaseMap");
                a.j ? (a = c.__gm.g, a.set(_.Sm(a.get(), b))) : Ooa(a, c, b);
                _.rg(c, "Lg")
            }
        }
    };
    _.af("search_impl", new G$);
});