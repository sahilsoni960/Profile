google.maps.__gjsload__('overlay', function(_) {
    var fz = function(a) {
            this.g = a
        },
        gz = function() {},
        hz = function(a) {
            a.Rh = a.Rh || new gz;
            return a.Rh
        },
        iz = function(a) {
            this.Fa = new _.qi(function() {
                var b = a.Rh;
                if (a.getPanes()) {
                    if (a.getProjection()) {
                        if (!b.hh && a.onAdd) a.onAdd();
                        b.hh = !0;
                        a.draw()
                    }
                } else {
                    if (b.hh)
                        if (a.onRemove) a.onRemove();
                        else a.remove();
                    b.hh = !1
                }
            }, 0)
        },
        jz = function(a, b) {
            function c() {
                return _.ri(e.Fa)
            }
            var d = hz(a),
                e = d.wg;
            e || (e = d.wg = new iz(a));
            _.A(d.Da || [], _.K.removeListener);
            var f = d.Ka = d.Ka || new _.Xu,
                g = b.__gm;
            f.bindTo("zoom", g);
            f.bindTo("offset", g);
            f.bindTo("center",
                g, "projectionCenterQ");
            f.bindTo("projection", b);
            f.bindTo("projectionTopLeft", g);
            f = d.lk = d.lk || new fz(f);
            f.bindTo("zoom", g);
            f.bindTo("offset", g);
            f.bindTo("projection", b);
            f.bindTo("projectionTopLeft", g);
            a.bindTo("projection", f, "outProjection");
            a.bindTo("panes", g);
            d.Da = [_.K.addListener(a, "panes_changed", c), _.K.addListener(g, "zoom_changed", c), _.K.addListener(g, "offset_changed", c), _.K.addListener(b, "projection_changed", c), _.K.addListener(g, "projectioncenterq_changed", c)];
            c();
            b instanceof _.uf && (_.rg(b,
                "Ox"), _.In("Ox", "-p", a))
        },
        oz = function(a) {
            if (a) {
                var b = a.getMap();
                if (kz(a) !== b && b && b instanceof _.uf) {
                    var c = b.__gm;
                    c.overlayLayer ? a.__gmop = new lz(b, a, c.overlayLayer) : c.i.then(function(d) {
                        d = d.lb;
                        var e = new mz(b, d);
                        d.kb(e);
                        c.overlayLayer = e;
                        nz(a);
                        oz(a)
                    })
                }
            }
        },
        nz = function(a) {
            if (a) {
                var b = a.__gmop;
                b && (a.__gmop = null, _.Jn("Ox", "-p", b.g), b.g.unbindAll(), b.g.set("panes", null), b.g.set("projection", null), b.j.md(b), b.i && (b.i = !1, b.g.onRemove ? b.g.onRemove() : b.g.remove()))
            }
        },
        kz = function(a) {
            return (a = a.__gmop) ? a.map : null
        },
        lz = function(a, b, c) {
            this.map = a;
            this.g = b;
            this.j = c;
            this.i = !1;
            _.rg(this.map, "Ox");
            _.In("Ox", "-p", this.g);
            c.Zc(this)
        },
        pz = function(a, b) {
            a.g.get("projection") != b && (a.g.bindTo("panes", a.map.__gm), a.g.set("projection", b))
        },
        mz = function(a, b) {
            this.o = a;
            this.j = b;
            this.g = null;
            this.i = []
        };
    _.z(fz, _.M);
    fz.prototype.changed = function(a) {
        "outProjection" != a && (a = !!(this.get("offset") && this.get("projectionTopLeft") && this.get("projection") && _.ee(this.get("zoom"))), a == !this.get("outProjection") && this.set("outProjection", a ? this.g : null))
    };
    var qz = {};
    _.z(iz, _.M);
    qz.Zc = function(a) {
        if (a) {
            var b = a.getMap();
            (hz(a).Xj || null) !== b && (b && jz(a, b), hz(a).Xj = b)
        }
    };
    qz.md = function(a) {
        var b = hz(a),
            c = b.Ka;
        c && c.unbindAll();
        (c = b.lk) && c.unbindAll();
        a.unbindAll();
        a.set("panes", null);
        a.set("projection", null);
        b.Da && _.A(b.Da, _.K.removeListener);
        b.Da = null;
        b.wg && (b.wg.Fa.Ob(), b.wg = null);
        _.Jn("Ox", "-p", a);
        delete hz(a).Xj
    };
    var rz = {};
    lz.prototype.draw = function() {
        this.i || (this.i = !0, this.g.onAdd && this.g.onAdd());
        this.g.draw && this.g.draw()
    };
    mz.prototype.dispose = function() {};
    mz.prototype.Rb = function(a, b, c, d, e, f, g, h) {
        var k = this.g = this.g || new _.Wp(this.o, this.j, function() {});
        k.Rb(a, b, c, d, e, f, g, h);
        a = _.p(this.i);
        for (b = a.next(); !b.done; b = a.next()) b = b.value, pz(b, k), b.draw()
    };
    mz.prototype.Zc = function(a) {
        this.i.push(a);
        this.g && pz(a, this.g);
        this.j.refresh()
    };
    mz.prototype.md = function(a) {
        _.eb(this.i, a)
    };
    rz.Zc = oz;
    rz.md = nz;
    _.af("overlay", {
        Xi: function(a) {
            if (a) {
                (0, qz.md)(a);
                (0, rz.md)(a);
                var b = a.getMap();
                b && (b instanceof _.uf ? (0, rz.Zc)(a) : (0, qz.Zc)(a))
            }
        },
        preventMapHitsFrom: function(a) {
            _.Qq(a, {
                onClick: function(b) {
                    return _.lq(b.event)
                },
                Ib: function(b) {
                    return _.iq(b)
                },
                Rd: function(b) {
                    return _.jq(b)
                },
                Yb: function(b) {
                    return _.jq(b)
                },
                Lb: function(b) {
                    return _.kq(b)
                }
            }).ve(!0)
        },
        preventMapHitsAndGesturesFrom: function(a) {
            a.addEventListener("click", _.ef);
            a.addEventListener("contextmenu", _.ef);
            a.addEventListener("dblclick", _.ef);
            a.addEventListener("mousedown",
                _.ef);
            a.addEventListener("mousemove", _.ef);
            a.addEventListener("MSPointerDown", _.ef);
            a.addEventListener("pointerdown", _.ef);
            a.addEventListener("touchstart", _.ef);
            a.addEventListener("wheel", _.ef)
        }
    });
});