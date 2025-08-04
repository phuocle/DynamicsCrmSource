
LoadjQueryObjectOwa = function(a,t)
{
    var y = "click",
        z = "customEvent_tap",
        d = window.navigator.msPointerEnabled,
        w = "ontouchstart"  in  document || d,
        p = "TOUCH",
        v = "CLICK",
        l = typeof t != "undefined" ? t : w ? p : v,
        f = l == "TOUCH" ? z : y,
        A = "BODYTOUCH",
        j = "contextmenu",
        k = "customEvent_swipe",
        n = "customEvent_shortPress",
        o = "customEvent_longPress",
        h = 750,
        i = [h];
    i.sort();
    var b,
        c,
        e,
        m = "",
        g = "jqueryowa";
    if(d)
    {
        b = "MSPointerDown";
        c = "MSPointerMove";
        e = "MSPointerUp";
        m = "MSPointerCancel"
    }
    else
        if(w)
        {
            b = "touchstart";
            c = "touchmove";
            e = "touchend"
        }
        else
        {
            b = "mousedown";
            c = "mousemove";
            e = "mouseup mouseleave"
        }
    function s(a)
    {
        if(!a.originalEvent)
        {
            a.pageX = 0;
            a.pageY = 0
        }
        else
            if(!a.originalEvent.changedTouches)
            {
                a.pageX = a.originalEvent.pageX;
                a.pageY = a.originalEvent.pageY
            }
            else
            {
                a.pageX = a.originalEvent.changedTouches[0].pageX;
                a.pageY = a.originalEvent.changedTouches[0].pageY
            }
    }
    function r(c,b)
    {
        return typeof b == "undefined" || c == b.start && c == b.end || a(c).has(b.start).length > 0 && a(c).has(b.end).length > 0
    }
    function q(b,a)
    {
        if(typeof a != "undefined")
        {
            if(typeof a.coords == "undefined")
                throw"Passing data through manual triggers is unsupported";
            b.pageX = a.coords.x;
            b.pageY = a.coords.y
        }
    }
    a.fn.click = function(b,d,c,e)
    {
        if(a.isFunction(b))
            return this.each(function(h,g)
            {
                a(g).bind(f + (c ? "." + c : ""),e,l == p ? function(a,c)
                {
                    if(r(this,c))
                    {
                        q(a,c);
                        b(a)
                    }
                } : function(a)
                {
                    (typeof a.which == "undefined" || a.which != 3) && b(a)
                },d)
            });
        else
            a(this).trigger(f)
    };
    a.fn.unClick = function(b,c)
    {
        return this.each(function(e,d)
        {
            if(a.isFunction(b))
                a(d).unbind(f,b,c);
            else
                a(d).unbind(f + (b ? "." + b : ""))
        })
    };
    a.fn.rightClick = function(b,c,e,d)
    {
        if(a.isFunction(b))
            return this.each(function(h,g)
            {
                a(g).bind(j + (e ? "." + e : ""),d,l == p ? function(a,c)
                {
                    if(r(this,c))
                    {
                        q(a,c);
                        b(a)
                    }
                } : function(a)
                {
                    b(a)
                },c);
                l == v && a(g).bind(f,d,function(b)
                {
                    if(b.which && b.which == 3)
                    {
                        b.type = j;
                        a(this).trigger(b);
                        b.stopPropogation()
                    }
                },c)
            });
        else
            a(this).trigger(j)
    };
    a.fn.unRightClick = function(b,c)
    {
        return this.each(function(e,d)
        {
            if(a.isFunction(b))
                a(d).unbind(j,b,c);
            else
                a(d).unbind(j + (b ? "." + b : ""))
        })
    };
    a.fn.swipe = function(g,h,d,f,b,e)
    {
        if(a.isFunction(g))
            return this.each(function(j,i)
            {
                a(i).touch(function(j)
                {
                    a.isFunction(d) && a(i).touchMove(d,false,b,e);
                    a(i).one(k + (b ? "." + b : ""),e,function(h,e)
                    {
                        a.isFunction(d) && a(this).unbind(c + (b ? "." + b : ""));
                        if(typeof e == "undefined" || typeof e.coords == "undefined" || typeof e.direction == "undefined")
                            throw"Manual triggering of swipe events is unsupported";
                        h.direction = e.direction;
                        h.pageX = e.coords.x;
                        h.pageY = e.coords.y;
                        if(e.direction == "incomplete")
                            a.isFunction(f) && f(h);
                        else
                            g(h)
                    });
                    a.isFunction(h) && h(j)
                },false,b,e)
            })
    };
    a.fn.unSwipe = function(c,d)
    {
        return this.each(function(f,e)
        {
            if(a.isFunction(c))
                a(e).unbind(b,c,d);
            else
                a(e).unbind(b + (c ? "." + c : ""))
        })
    };
    a.fn.touch = function(c,f,d,g,e)
    {
        if(a.isFunction(c))
            return this.each(function(i,h)
            {
                a(h).bind(b + (d ? "." + d : ""),g,function(b)
                {
                    s(b);
                    if(!e)
                    {
                        a.data(this,"axisLock",true);
                        a.data(this,"axisDirection","");
                        a.data(this,"axisX",b.pageX);
                        a.data(this,"axisY",b.pageY)
                    }
                    else
                        a.data(this,"axisLock",false);
                    c(b)
                },f)
            });
        else
            a(this).trigger(b)
    };
    a.fn.unTouch = function(c,d)
    {
        return this.each(function(f,e)
        {
            if(a.isFunction(c))
                a(e).unbind(b,c,d);
            else
                a(e).unbind(b + (c ? "." + c : ""))
        })
    };
    a.fn.touchMove = function(b,e,d,f)
    {
        if(a.isFunction(b))
            return this.each(function(h,g)
            {
                a(g).bind(c + (d ? "." + d : ""),f,function(c)
                {
                    s(c);
                    if(a.data(this,"axisLock"))
                    {
                        var d = a.data(this,"axisX"),
                            e = a.data(this,"axisY");
                        if(a.data(this,"axisDirection") === "")
                        {
                            var f = Math.abs(c.pageX - d),
                                g = Math.abs(c.pageY - e);
                            if(g > 6)
                                a.data(this,"axisDirection","Y");
                            else
                                f > 6 && a.data(this,"axisDirection","X")
                        }
                        else
                        {
                            if(a.data(this,"axisDirection") == "X")
                                c.pageY = e;
                            else
                                c.pageX = d;
                            b(c)
                        }
                    }
                    else
                        b(c)
                },e)
            })
    };
    a.fn.unTouchMove = function(b,d)
    {
        return this.each(function(f,e)
        {
            if(a.isFunction(b))
                a(e).unbind(c,b,d);
            else
                a(e).unbind(c + (b ? "." + b : ""))
        })
    };
    a.fn.touchEnd = function(b,c,f,d)
    {
        if(a.isFunction(b))
            return this.each(function(h,g)
            {
                a(g).bind(u(e,f),d,function(c)
                {
                    s(c);
                    if(a.data(this,"axisLock"))
                        if(a.data(this,"axisDirection") == "X")
                            c.pageY = a.data(this,"axisY");
                        else
                            c.pageX = a.data(this,"axisX");
                    a.data(this,"axisLock","");
                    a.data(this,"axisDirection","");
                    a.data(this,"axisX","");
                    a.data(this,"axisY","");
                    b(c)
                },c)
            })
    };
    a.fn.unTouchEnd = function(b,c)
    {
        return this.each(function(f,d)
        {
            if(a.isFunction(b))
                a(d).unbind(e,b,c);
            else
                a(d).unbind(u(e,b))
        })
    };
    function u(b,a)
    {
        return b.split(" ").map(function(b)
        {
            return b + (a ? "." + a : "")
        }).join(" ")
    }
    a.fn.touchCancel = function(b,e,c,f)
    {
        if(a.isFunction(b))
            return this.each(function(h,g)
            {
                if(!d)
                    return;
                a(g).bind(m + (c ? "." + c : ""),f,b,e)
            })
    };
    a.fn.unTouchCancel = function(b,c)
    {
        return this.each(function(f,e)
        {
            if(!d)
                return;
            if(a.isFunction(b))
                a(e).unbind(m,b,c);
            else
                a(e).unbind(m + (b ? "." + b : ""))
        })
    };
    function x(f,b,d,c,g,e)
    {
        if(a.isFunction(b))
            return a(f).each(function(h,f)
            {
                a(f).bind(o + e + (c ? "." + c : ""),g,function(a,c)
                {
                    if(r(this,c))
                    {
                        q(a,c);
                        b(a)
                    }
                },d)
            })
    }
    a.fn.longPress = function(c,a,d,b)
    {
        x(this,c,a,d,b,h)
    };
    a.fn.unLongPress = function(b,c)
    {
        return this.each(function(e,d)
        {
            if(a.isFunction(b))
                a(d).unbind(o + longPressDuration,b,c);
            else
                a(d).unbind(o + longPressDuration + (b ? "." + b : ""))
        })
    };
    a.fn.shortPress = function(b,d,c,e)
    {
        if(a.isFunction(b))
            return this.each(function(g,f)
            {
                a(f).bind(n + h + (c ? "." + c : ""),e,b,d)
            })
    };
    a.fn.unShortPress = function(b,c)
    {
        return this.each(function(e,d)
        {
            if(a.isFunction(b))
                a(d).unbind(n + h,b,c);
            else
                a(d).unbind(n + h + (b ? "." + b : ""))
        })
    };
    a.fn.cleanupTouchEvents = function()
    {
        return this.each(function(c,b)
        {
            a(b).unTouchMove(g);
            a(b).unTouchEnd(g);
            a(b).unTouchCancel(g)
        })
    };
    a(document).ready(function()
    {
        var b = a("body");
        d && b.bind("MSHoldVisual",function(a)
        {
            a.preventDefault()
        });
        b.touch(function(e)
        {
            var t = false,
                u = false,
                c = a(e.target),
                q = {x:e.pageX,y:e.pageY},
                h = {x:e.pageX,y:e.pageY},
                r = {start:e.target,end:e.target,coords:h},
                j = {direction:"incomplete",coords:h},
                m = [];
            function s()
            {
                a.each(m,function(b,a)
                {
                    clearTimeout(a);
                    m[b] = -1
                })
            }
            a.each(i,function(a)
            {
                m[a] = setTimeout(function()
                {
                    m[a] = -1;
                    c.trigger(k,j);
                    c.trigger(o + i[a],r)
                },i[a])
            });
            d && b.touchCancel(function()
            {
                s();
                b.cleanupTouchEvents()
            },false,g);
            b.touchMove(function(a)
            {
                h.x = a.pageX;
                h.y = a.pageY;
                if(!t && (Math.abs(q.x - a.pageX) > 20 || Math.abs(q.y - a.pageY) > 20))
                {
                    t = true;
                    s();
                    var g = 1 / Math.sqrt(3),
                        e = a.pageX - q.x,
                        f = a.pageY - q.y,
                        b = Math.abs(e),
                        d = Math.abs(f),
                        i = b > d ? d / b : b / d;
                    if(i <= g)
                    {
                        u = true;
                        if(b > d)
                            j.direction = e > 0 ? "right" : "left";
                        else
                            j.direction = f > 0 ? "down" : "up";
                        c.trigger(k,j)
                    }
                }
            },false,g);
            b.touchEnd(function(d)
            {
                b.cleanupTouchEvents();
                r.end = d.target;
                h.x = d.pageX;
                h.y = d.pageY;
                if(!t)
                {
                    c.trigger(k,j);
                    if(d.which != 3)
                    {
                        a.each(m,function(b,a)
                        {
                            a != -1 && c.trigger(n + i[b],r)
                        });
                        l == p && c.trigger(f,r)
                    }
                }
                else
                    !u && c.trigger(k,j);
                s()
            },false,g)
        })
    })
}
