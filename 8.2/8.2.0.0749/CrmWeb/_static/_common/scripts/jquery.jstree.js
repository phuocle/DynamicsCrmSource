
"use strict";
(function(jQuery) {
    if (jQuery && jQuery.jstree)
        return;
    var is_ie6 = false,
        is_ie7 = false,
        is_ff2 = false;
    (function($) {
        $.vakata = {};
        $.vakata.css = {
            get_css: function(rule_name, delete_flag, sheet) {
                rule_name = rule_name.toLowerCase();
                var css_rules = sheet.cssRules || sheet.rules,
                    j = 0;
                do {
                    if (css_rules.length && j > css_rules.length + 5)
                        return false;
                    if (css_rules[j].selectorText && css_rules[j].selectorText.toLowerCase() == rule_name)
                        if (delete_flag === true) {
                            sheet.removeRule && sheet.removeRule(j);
                            sheet.deleteRule && sheet.deleteRule(j);
                            return true
                        } else
                            return css_rules[j]
                } while (css_rules[++j]);
                return false
            },
            add_css: function(rule_name, sheet) {
                if ($.jstree.css.get_css(rule_name, false, sheet))
                    return false;
                if (sheet.insertRule)
                    sheet.insertRule(rule_name + " { }", 0);
                else
                    sheet.addRule(rule_name, null, 0);
                return $.vakata.css.get_css(rule_name)
            },
            remove_css: function(rule_name, sheet) {
                return $.vakata.css.get_css(rule_name, true, sheet)
            },
            add_sheet: function(opts) {
                var tmp = false,
                    is_new = true;
                if (opts.str) {
                    if (opts.title)
                        tmp = $("style[id='" + opts.title + "-stylesheet']")[0];
                    if (tmp)
                        is_new = false;
                    else {
                        tmp = document.createElement("style");
                        tmp.setAttribute("type", "text/css");
                        opts.title && tmp.setAttribute("id", opts.title + "-stylesheet")
                    }
                    if (tmp.styleSheet)
                        if (is_new) {
                            document.getElementsByTagName("head")[0].appendChild(tmp);
                            tmp.styleSheet.cssText = opts.str
                        } else
                            tmp.styleSheet.cssText = tmp.styleSheet.cssText + " " + opts.str;
                    else {
                        tmp.appendChild(document.createTextNode(opts.str));
                        document.getElementsByTagName("head")[0].appendChild(tmp)
                    }
                    return tmp.sheet || tmp.styleSheet
                }
                if (opts.url)
                    if (document.createStyleSheet)
                        try {
                            tmp = document.createStyleSheet(opts.url)
                        } catch (e) {
                        }
                    else {
                        tmp = document.createElement("link");
                        tmp.rel = "stylesheet";
                        tmp.type = "text/css";
                        tmp.media = "all";
                        tmp.href = opts.url;
                        document.getElementsByTagName("head")[0].appendChild(tmp);
                        return tmp.styleSheet
                    }
            }
        };
        var instances = [],
            focused_instance = -1,
            plugins = {},
            prepared_move = {};
        $.fn.jstree = function(settings) {
            var isMethodCall = typeof settings == "string",
                args = Array.prototype.slice.call(arguments, 1),
                returnValue = this;
            if (isMethodCall) {
                if (settings.substring(0, 1) == "_")
                    return returnValue;
                this.each(function() {
                    var instance = instances[$.data(this, "jstree_instance_id")],
                        methodValue = instance && $.isFunction(instance[settings])
                            ? instance[settings].apply(instance, args)
                            : instance;
                    if (typeof methodValue !== "undefined" &&
                        (settings.indexOf("is_") === 0 || methodValue !== true && methodValue !== false)) {
                        returnValue = methodValue;
                        return false
                    }
                })
            } else
                this.each(function() {
                    var instance_id = $.data(this, "jstree_instance_id"),
                        a = [],
                        b = settings ? $.extend({}, true, settings) : {},
                        c = $(this),
                        s = false,
                        t = [];
                    a = a.concat(args);
                    c.data("jstree") && a.push(c.data("jstree"));
                    b = a.length ? $.extend.apply(null, [true, b].concat(a)) : b;
                    typeof instance_id !== "undefined" && instances[instance_id] && instances[instance_id].destroy();
                    instance_id = parseInt(instances.push({}), 10) - 1;
                    $.data(this, "jstree_instance_id", instance_id);
                    b.plugins = $.isArray(b.plugins) ? b.plugins : $.jstree.defaults.plugins.slice();
                    b.plugins.unshift("core");
                    b.plugins = b.plugins.sort().join(",,").replace(/(,|^)([^,]+)(,,\2)+(,|$)/g, "$1$2$4")
                        .replace(/,,+/g, ",").replace(/,$/, "").split(",");
                    s = $.extend(true, {}, $.jstree.defaults, b);
                    s.plugins = b.plugins;
                    $.each(plugins,
                        function(i, val) {
                            if ($.inArray(i, s.plugins) === -1) {
                                s[i] = null;
                                delete s[i]
                            } else
                                t.push(i)
                        });
                    s.plugins = t;
                    instances[instance_id] = new $.jstree
                        ._instance(instance_id, $(this).addClass("jstree jstree-" + instance_id), s);
                    $.each(instances[instance_id]._get_settings().plugins,
                        function(i, val) {
                            instances[instance_id].data[val] = {}
                        });
                    $.each(instances[instance_id]._get_settings().plugins,
                        function(i, val) {
                            plugins[val] && plugins[val].__init.apply(instances[instance_id])
                        });
                    setTimeout(function() {
                            instances[instance_id] && instances[instance_id].init()
                        },
                        0)
                });
            return returnValue
        };
        $.jstree = {
            defaults: { plugins: [] },
            _focused: function() {
                return instances[focused_instance] || null
            },
            _reference: function(needle) {
                if (instances[needle])
                    return instances[needle];
                var o = $(needle);
                if (!o.length && typeof needle === "string")
                    o = $("#" + needle);
                if (!o.length)
                    return null;
                return instances[o.closest(".jstree").data("jstree_instance_id")] || null
            },
            _instance: function(index, container, settings) {
                this.data = { core: {} };
                this.get_settings = function() {
                    return $.extend(true, {}, settings)
                };
                this._get_settings = function() {
                    return settings
                };
                this.get_index = function() {
                    return index
                };
                this.get_container = function() {
                    return container
                };
                this.get_container_ul = function() {
                    return container.children("ul:eq(0)")
                };
                this._set_settings = function(s) {
                    settings = $.extend(true, {}, settings, s)
                }
            },
            _fn: {},
            plugin: function(pname, pdata) {
                pdata = $.extend({}, { __init: $.noop, __destroy: $.noop, _fn: {}, defaults: false }, pdata);
                plugins[pname] = pdata;
                $.jstree.defaults[pname] = pdata.defaults;
                $.each(pdata._fn,
                    function(i, val) {
                        val.plugin = pname;
                        val.old = $.jstree._fn[i];
                        $.jstree._fn[i] = function() {
                            var rslt,
                                func = val,
                                args = Array.prototype.slice.call(arguments),
                                evnt = new $.Event("before.jstree"),
                                rlbk = false;
                            if (this.data.core.locked === true && i !== "unlock" && i !== "is_locked")
                                return;
                            do {
                                if (func && func.plugin && $.inArray(func.plugin, this._get_settings().plugins) !== -1)
                                    break;
                                func = func.old
                            } while (func);
                            if (!func)
                                return;
                            if (i.indexOf("_") === 0)
                                rslt = func.apply(this, args);
                            else {
                                rslt = this.get_container()
                                    .triggerHandler(evnt, { func: i, inst: this, args: args, plugin: func.plugin });
                                if (rslt === false)
                                    return;
                                if (typeof rslt !== "undefined")
                                    args = rslt;
                                rslt = func.apply($.extend({},
                                        this,
                                        {
                                            __callback: function(data) {
                                                this.get_container()
                                                    .triggerHandler(i + ".jstree",
                                                        { inst: this, args: args, rslt: data, rlbk: rlbk })
                                            },
                                            __rollback: function() {
                                                rlbk = this.get_rollback();
                                                return rlbk
                                            },
                                            __call_old: function(replace_arguments) {
                                                return func.old
                                                    .apply(this,
                                                        replace_arguments
                                                        ? Array.prototype.slice.call(arguments, 1)
                                                        : args)
                                            }
                                        }),
                                    args)
                            }
                            return rslt
                        };
                        $.jstree._fn[i].old = val.old;
                        $.jstree._fn[i].plugin = pname
                    })
            },
            rollback: function(rb) {
                if (rb) {
                    if (!$.isArray(rb))
                        rb = [rb];
                    $.each(rb,
                        function(i, val) {
                            instances[val.i].set_rollback(val.h, val.d)
                        })
                }
            }
        };
        $.jstree._fn = $.jstree._instance.prototype = {};
        $(function() {
            var u = navigator.userAgent.toLowerCase(),
                v = (u.match(/.+?(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [0, "0"])[1],
                css_string =
                    ".jstree ul, .jstree li { display:block; margin:0 0 0 0; padding:0 0 0 0; list-style-type:none; } .jstree li { display:block; min-height:18px; line-height:18px; white-space:nowrap; margin-left:18px; min-width:18px; } .jstree-rtl li { margin-left:0; margin-right:18px; } .jstree > ul > li { margin-left:0px; } .jstree-rtl > ul > li { margin-right:0px; } .jstree ins { display:inline-block; text-decoration:none; width:18px; height:18px; margin:0 0 0 0; padding:0; } .jstree a { display:inline-block; line-height:16px; height:16px; color:black; white-space:nowrap; text-decoration:none; padding:1px 2px; margin:0; } .jstree a:focus { outline: none; } .jstree a > ins { height:16px; width:16px; } .jstree a > .jstree-icon { margin-right:3px; } .jstree-rtl a > .jstree-icon { margin-left:3px; margin-right:0; } li.jstree-open > ul { display:block; } li.jstree-closed > ul { display:none; } ";
            if (/msie/.test(u) && parseInt(v, 10) == 6) {
                is_ie6 = true;
                try {
                    document.execCommand("BackgroundImageCache", false, true)
                } catch (err) {
                }
                css_string +=
                    ".jstree li { height:18px; margin-left:0; margin-right:0; } .jstree li li { margin-left:18px; } .jstree-rtl li li { margin-left:0px; margin-right:18px; } li.jstree-open ul { display:block; } li.jstree-closed ul { display:none !important; } .jstree li a { display:inline; border-width:0 !important; padding:0px 2px !important; } .jstree li a ins { height:16px; width:16px; margin-right:3px; } .jstree-rtl li a ins { margin-right:0px; margin-left:3px; } "
            }
            if (/msie/.test(u) && parseInt(v, 10) == 7) {
                is_ie7 = true;
                css_string += ".jstree li a { border-width:0 !important; padding:0px 2px !important; } "
            }
            if (!/compatible/.test(u) && /mozilla/.test(u) && parseFloat(v, 10) < 1.9) {
                is_ff2 = true;
                css_string +=
                    ".jstree ins { display:-moz-inline-box; } .jstree li { line-height:12px; } .jstree a { display:-moz-inline-box; } .jstree .jstree-no-icons .jstree-checkbox { display:-moz-inline-stack !important; } "
            }
            $.vakata.css.add_sheet({ str: css_string, title: "jstree" })
        });
        $.jstree.plugin("core",
        {
            __init: function() {
                this.data.core.locked = false;
                this.data.core.to_open = this.get_settings().core.initially_open;
                this.data.core.to_load = this.get_settings().core.initially_load
            },
            defaults: {
                html_titles: false,
                animation: 500,
                initially_open: [],
                initially_load: [],
                open_parents: true,
                notify_plugins: true,
                rtl: false,
                load_open: false,
                strings: { loading: "Loading ...", new_node: "New node", multiple_selection: "Multiple selection" }
            },
            _fn: {
                init: function() {
                    this.set_focus();
                    this._get_settings().core
                        .rtl &&
                        this.get_container().addClass("jstree-rtl").css("direction", "rtl");
                    this.get_container()
                        .html("<ul><li class='jstree-last jstree-leaf'><ins>&#160;</ins><a class='jstree-loading' href='#'><ins class='jstree-icon'>&#160;</ins>" + this._get_string("loading") + "</a></li></ul>");
                    this.data.core.li_height = this.get_container_ul().find("li.jstree-closed, li.jstree-leaf").eq(0)
                        .height() ||
                        18;
                    this.get_container().delegate("li > ins",
                        "click.jstree",
                        $.proxy(function(event) {
                                var trgt = $(event.target);
                                this.toggle_node(trgt)
                            },
                            this)).bind("mousedown.jstree",
                        $.proxy(function() {
                                this.set_focus()
                            },
                            this)).bind("dblclick.jstree",
                        function(event) {
                            var sel;
                            if (document.selection && document.selection.empty)
                                document.selection.empty();
                            else if (window.getSelection) {
                                sel = window.getSelection();
                                try {
                                    sel.removeAllRanges();
                                    sel.collapse()
                                } catch (err) {
                                }
                            }
                        });
                    this._get_settings().core.notify_plugins &&
                        this.get_container().bind("load_node.jstree",
                            $.proxy(function(e, data) {
                                    var o = this._get_node(data.rslt.obj),
                                        t = this;
                                    if (o === -1)
                                        o = this.get_container_ul();
                                    if (!o.length)
                                        return;
                                    o.find("li").each(function() {
                                        var th = $(this);
                                        th.data("jstree") &&
                                            $.each(th.data("jstree"),
                                                function(plugin, values) {
                                                    t.data[plugin] &&
                                                        $.isFunction(t["_" + plugin + "_notify"]) &&
                                                        t["_" + plugin + "_notify"].call(t, th, values)
                                                })
                                    })
                                },
                                this));
                    this._get_settings().core.load_open &&
                        this.get_container().bind("load_node.jstree",
                            $.proxy(function(e, data) {
                                    var o = this._get_node(data.rslt.obj),
                                        t = this;
                                    if (o === -1)
                                        o = this.get_container_ul();
                                    if (!o.length)
                                        return;
                                    o.find("li.jstree-open:not(:has(ul))").each(function() {
                                        t.load_node(this, $.noop, $.noop)
                                    })
                                },
                                this));
                    this.__callback();
                    this.load_node(-1,
                        function() {
                            this.loaded();
                            this.reload_nodes()
                        })
                },
                destroy: function() {
                    var i,
                        n = this.get_index(),
                        s = this._get_settings(),
                        _this = this;
                    $.each(s.plugins,
                        function(i, val) {
                            try {
                                plugins[val].__destroy.apply(_this)
                            } catch (err) {
                            }
                        });
                    this.__callback();
                    if (this.is_focused())
                        for (i in instances)
                            if (instances.hasOwnProperty(i) && i != n) {
                                instances[i].set_focus();
                                break
                            }
                    if (n === focused_instance)
                        focused_instance = -1;
                    this.get_container().unbind(".jstree").undelegate(".jstree").removeData("jstree_instance_id")
                        .find("[class^='jstree']").andSelf().attr("class",
                            function() {
                                return this.className.replace(/jstree[^ ]*|$/ig, "")
                            });
                    $(document).unbind(".jstree-" + n).undelegate(".jstree-" + n);
                    instances[n] = null;
                    delete instances[n]
                },
                _core_notify: function(n, data) {
                    data.opened && this.open_node(n, false, true)
                },
                lock: function() {
                    this.data.core.locked = true;
                    this.get_container().children("ul").addClass("jstree-locked").css("opacity", "0.7");
                    this.__callback({})
                },
                unlock: function() {
                    this.data.core.locked = false;
                    this.get_container().children("ul").removeClass("jstree-locked").css("opacity", "1");
                    this.__callback({})
                },
                is_locked: function() {
                    return this.data.core.locked
                },
                save_opened: function() {
                    var _this = this;
                    this.data.core.to_open = [];
                    this.get_container_ul().find("li.jstree-open").each(function() {
                        this.id &&
                            _this.data.core.to_open.push("#" +
                                this.id.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/")
                                .replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:"))
                    });
                    this.__callback(_this.data.core.to_open)
                },
                save_loaded: function() {
                },
                reload_nodes: function(is_callback) {
                    var _this = this,
                        done = true,
                        current = [],
                        remaining = [];
                    if (!is_callback) {
                        this.data.core.reopen = false;
                        this.data.core.refreshing = true;
                        this.data.core.to_open = $.map($.makeArray(this.data.core.to_open),
                            function(n) {
                                return "#" +
                                    n.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/")
                                    .replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:")
                            });
                        this.data.core.to_load = $.map($.makeArray(this.data.core.to_load),
                            function(n) {
                                return "#" +
                                    n.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/")
                                    .replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:")
                            });
                        if (this.data.core.to_open.length)
                            this.data.core.to_load = this.data.core.to_load.concat(this.data.core.to_open)
                    }
                    if (this.data.core.to_load.length) {
                        $.each(this.data.core.to_load,
                            function(i, val) {
                                if (val == "#")
                                    return true;
                                if ($(val).length)
                                    current.push(val);
                                else
                                    remaining.push(val)
                            });
                        if (current.length) {
                            this.data.core.to_load = remaining;
                            $.each(current,
                                function(i, val) {
                                    if (!_this._is_loaded(val)) {
                                        _this.load_node(val,
                                            function() {
                                                _this.reload_nodes(true)
                                            },
                                            function() {
                                                _this.reload_nodes(true)
                                            });
                                        done = false
                                    }
                                })
                        }
                    }
                    this.data.core.to_open.length &&
                        $.each(this.data.core.to_open,
                            function(i, val) {
                                _this.open_node(val, false, true)
                            });
                    if (done) {
                        this.data.core.reopen && clearTimeout(this.data.core.reopen);
                        this.data.core.reopen = setTimeout(function() {
                                _this.__callback({}, _this)
                            },
                            50);
                        this.data.core.refreshing = false;
                        this.reopen()
                    }
                },
                reopen: function() {
                    var _this = this;
                    this.data.core.to_open.length &&
                        $.each(this.data.core.to_open,
                            function(i, val) {
                                _this.open_node(val, false, true)
                            });
                    this.__callback({})
                },
                refresh: function(obj) {
                    var _this = this;
                    this.save_opened();
                    if (!obj)
                        obj = -1;
                    obj = this._get_node(obj);
                    if (!obj)
                        obj = -1;
                    if (obj !== -1)
                        obj.children("UL").remove();
                    else
                        this.get_container_ul().empty();
                    this.load_node(obj,
                        function() {
                            _this.__callback({ obj: obj });
                            _this.reload_nodes()
                        })
                },
                loaded: function() {
                    this.__callback()
                },
                set_focus: function() {
                    if (this.is_focused())
                        return;
                    var f = $.jstree._focused();
                    f && f.unset_focus();
                    this.get_container().addClass("jstree-focused");
                    focused_instance = this.get_index();
                    this.__callback()
                },
                is_focused: function() {
                    return focused_instance == this.get_index()
                },
                unset_focus: function() {
                    if (this.is_focused()) {
                        this.get_container().removeClass("jstree-focused");
                        focused_instance = -1
                    }
                    this.__callback()
                },
                _get_node: function(obj) {
                    var $obj = $(obj, this.get_container());
                    if ($obj.is(".jstree") || obj == -1)
                        return -1;
                    $obj = $obj.closest("li", this.get_container());
                    return $obj.length ? $obj : false
                },
                _get_next: function(obj, strict) {
                    obj = this._get_node(obj);
                    if (obj === -1)
                        return this.get_container().find("> ul > li:first-child");
                    if (!obj.length)
                        return false;
                    if (strict)
                        return obj.nextAll("li").size() > 0 ? obj.nextAll("li:eq(0)") : false;
                    if (obj.hasClass("jstree-open"))
                        return obj.find("li:eq(0)");
                    else if (obj.nextAll("li").size() > 0)
                        return obj.nextAll("li:eq(0)");
                    else
                        return obj.parentsUntil(".jstree", "li").next("li").eq(0)
                },
                _get_prev: function(obj, strict) {
                    obj = this._get_node(obj);
                    if (obj === -1)
                        return this.get_container().find("> ul > li:last-child");
                    if (!obj.length)
                        return false;
                    if (strict)
                        return obj.prevAll("li").length > 0 ? obj.prevAll("li:eq(0)") : false;
                    if (obj.prev("li").length) {
                        obj = obj.prev("li").eq(0);
                        while (obj.hasClass("jstree-open"))
                            obj = obj.children("ul:eq(0)").children("li:last");
                        return obj
                    } else {
                        var o = obj.parentsUntil(".jstree", "li:eq(0)");
                        return o.length ? o : false
                    }
                },
                _get_parent: function(obj) {
                    obj = this._get_node(obj);
                    if (obj == -1 || !obj.length)
                        return false;
                    var o = obj.parentsUntil(".jstree", "li:eq(0)");
                    return o.length ? o : -1
                },
                _get_children: function(obj) {
                    obj = this._get_node(obj);
                    if (obj === -1)
                        return this.get_container().children("ul:eq(0)").children("li");
                    if (!obj.length)
                        return false;
                    return obj.children("ul:eq(0)").children("li")
                },
                get_path: function(obj, id_mode) {
                    var p = [],
                        _this = this;
                    obj = this._get_node(obj);
                    if (obj === -1 || !obj || !obj.length)
                        return false;
                    obj.parentsUntil(".jstree", "li").each(function() {
                        p.push(id_mode ? this.id : _this.get_text(this))
                    });
                    p.reverse();
                    p.push(id_mode ? obj.attr("id") : this.get_text(obj));
                    return p
                },
                _get_string: function(key) {
                    return this._get_settings().core.strings[key] || key
                },
                is_open: function(obj) {
                    obj = this._get_node(obj);
                    return obj && obj !== -1 && obj.hasClass("jstree-open")
                },
                is_closed: function(obj) {
                    obj = this._get_node(obj);
                    return obj && obj !== -1 && obj.hasClass("jstree-closed")
                },
                is_leaf: function(obj) {
                    obj = this._get_node(obj);
                    return obj && obj !== -1 && obj.hasClass("jstree-leaf")
                },
                correct_state: function(obj) {
                    obj = this._get_node(obj);
                    if (!obj || obj === -1)
                        return false;
                    obj.removeClass("jstree-closed jstree-open").addClass("jstree-leaf").children("ul").remove();
                    this.__callback({ obj: obj })
                },
                open_node: function(obj, callback, skip_animation) {
                    obj = this._get_node(obj);
                    if (!obj.length)
                        return false;
                    if (!obj.hasClass("jstree-closed")) {
                        callback && callback.call();
                        return false
                    }
                    var s = skip_animation || is_ie6 ? 0 : this._get_settings().core.animation,
                        t = this;
                    if (!this._is_loaded(obj)) {
                        obj.children("a").addClass("jstree-loading");
                        this.load_node(obj,
                            function() {
                                t.open_node(obj, callback, skip_animation)
                            },
                            callback)
                    } else {
                        this._get_settings().core.open_parents &&
                            obj.parentsUntil(".jstree", ".jstree-closed").each(function() {
                                t.open_node(this, false, true)
                            });
                        s && obj.children("ul").css("display", "none");
                        obj.removeClass("jstree-closed").addClass("jstree-open").children("a")
                            .removeClass("jstree-loading");
                        if (s)
                            obj.children("ul").stop(true, true).slideDown(s,
                                function() {
                                    this.style.display = "";
                                    t.after_open(obj)
                                });
                        else
                            t.after_open(obj);
                        this.__callback({ obj: obj });
                        callback && callback.call()
                    }
                },
                after_open: function(obj) {
                    this.__callback({ obj: obj })
                },
                close_node: function(obj, skip_animation) {
                    obj = this._get_node(obj);
                    var s = skip_animation || is_ie6 ? 0 : this._get_settings().core.animation,
                        t = this;
                    if (!obj.length || !obj.hasClass("jstree-open"))
                        return false;
                    s && obj.children("ul").attr("style", "display:block !important");
                    obj.removeClass("jstree-open").addClass("jstree-closed");
                    if (s)
                        obj.children("ul").stop(true, true).slideUp(s,
                            function() {
                                this.style.display = "";
                                t.after_close(obj)
                            });
                    else
                        t.after_close(obj);
                    this.__callback({ obj: obj })
                },
                after_close: function(obj) {
                    this.__callback({ obj: obj })
                },
                toggle_node: function(obj) {
                    obj = this._get_node(obj);
                    if (obj.hasClass("jstree-closed"))
                        return this.open_node(obj);
                    if (obj.hasClass("jstree-open"))
                        return this.close_node(obj)
                },
                open_all: function(obj, do_animation, original_obj) {
                    obj = obj ? this._get_node(obj) : -1;
                    if (!obj || obj === -1)
                        obj = this.get_container_ul();
                    if (original_obj)
                        obj = obj.find("li.jstree-closed");
                    else {
                        original_obj = obj;
                        if (obj.is(".jstree-closed"))
                            obj = obj.find("li.jstree-closed").andSelf();
                        else
                            obj = obj.find("li.jstree-closed")
                    }
                    var _this = this;
                    obj.each(function() {
                        var __this = this;
                        if (!_this._is_loaded(this))
                            _this.open_node(this,
                                function() {
                                    _this.open_all(__this, do_animation, original_obj)
                                },
                                !do_animation);
                        else
                            _this.open_node(this, false, !do_animation)
                    });
                    original_obj.find("li.jstree-closed").length === 0 && this.__callback({ obj: original_obj })
                },
                close_all: function(obj, do_animation) {
                    var _this = this;
                    obj = obj ? this._get_node(obj) : this.get_container();
                    if (!obj || obj === -1)
                        obj = this.get_container_ul();
                    obj.find("li.jstree-open").andSelf().each(function() {
                        _this.close_node(this, !do_animation)
                    });
                    this.__callback({ obj: obj })
                },
                clean_node: function(obj) {
                    obj = obj && obj != -1 ? $(obj) : this.get_container_ul();
                    obj = obj.is("li") ? obj.find("li").andSelf() : obj.find("li");
                    obj.removeClass("jstree-last").filter("li:last-child").addClass("jstree-last").end()
                        .filter(":has(li)").not(".jstree-open").removeClass("jstree-leaf").addClass("jstree-closed");
                    obj.not(".jstree-open, .jstree-closed").addClass("jstree-leaf").children("ul").remove();
                    this.__callback({ obj: obj })
                },
                get_rollback: function() {
                    this.__callback();
                    return { i: this.get_index(), h: this.get_container().children("ul").clone(true), d: this.data }
                },
                set_rollback: function(html, data) {
                    this.get_container().empty().append(html);
                    this.data = data;
                    this.__callback()
                },
                load_node: function(obj, s_call, e_call) {
                    this.__callback({ obj: obj })
                },
                _is_loaded: function(obj) {
                    return true
                },
                create_node: function(obj, position, js, callback, is_loaded) {
                    obj = this._get_node(obj);
                    position = typeof position === "undefined" ? "last" : position;
                    var d = $("<li/>"),
                        s = this._get_settings().core,
                        tmp;
                    if (obj !== -1 && !obj.length)
                        return false;
                    if (!is_loaded && !this._is_loaded(obj)) {
                        this.load_node(obj,
                            function() {
                                this.create_node(obj, position, js, callback, true)
                            });
                        return false
                    }
                    this.__rollback();
                    if (typeof js === "string")
                        js = { data: js };
                    if (!js)
                        js = {};
                    js.attr && d.attr(js.attr);
                    js.metadata && d.data(js.metadata);
                    js.state && d.addClass("jstree-" + js.state);
                    if (!js.data)
                        js.data = this._get_string("new_node");
                    if (!$.isArray(js.data)) {
                        tmp = js.data;
                        js.data = [];
                        js.data.push(tmp)
                    }
                    $.each(js.data,
                        function(i, m) {
                            tmp = $("<a/>");
                            if ($.isFunction(m))
                                m = m.call(this, js);
                            if (typeof m == "string")
                                tmp.attr("href", "#")[s.html_titles ? "html" : "text"](m);
                            else {
                                if (!m.attr)
                                    m.attr = {};
                                if (!m.attr.href)
                                    m.attr.href = "#";
                                tmp.attr(m.attr)[s.html_titles ? "html" : "text"](m.title);
                                m.language && tmp.addClass(m.language)
                            }
                            tmp.prepend("<ins class='jstree-icon'>&#160;</ins>");
                            if (!m.icon && js.icon)
                                m.icon = js.icon;
                            if (m.icon)
                                if (m.icon.indexOf("/") === -1)
                                    tmp.children("ins").addClass(m.icon);
                                else
                                    tmp.children("ins").css("background",
                                        "url('" + m.icon + "') center center no-repeat");
                            d.append(tmp)
                        });
                    d.prepend("<ins class='jstree-icon'>&#160;</ins>");
                    if (obj === -1) {
                        obj = this.get_container();
                        if (position === "before")
                            position = "first";
                        if (position === "after")
                            position = "last"
                    }
                    switch (position) {
                    case "before":
                        obj.before(d);
                        tmp = this._get_parent(obj);
                        break;
                    case "after":
                        obj.after(d);
                        tmp = this._get_parent(obj);
                        break;
                    case "inside":
                    case "first":
                        !obj.children("ul").length && obj.append("<ul/>");
                        obj.children("ul").prepend(d);
                        tmp = obj;
                        break;
                    case "last":
                        !obj.children("ul").length && obj.append("<ul/>");
                        obj.children("ul").append(d);
                        tmp = obj;
                        break;
                    default:
                        !obj.children("ul").length && obj.append("<ul/>");
                        if (!position)
                            position = 0;
                        tmp = obj.children("ul").children("li").eq(position);
                        if (tmp.length)
                            tmp.before(d);
                        else
                            obj.children("ul").append(d);
                        tmp = obj;
                        break
                    }
                    if (tmp === -1 || tmp.get(0) === this.get_container().get(0))
                        tmp = -1;
                    this.clean_node(tmp);
                    this.__callback({ obj: d, parent: tmp });
                    callback && callback.call(this, d);
                    return d
                },
                get_text: function(obj) {
                    obj = this._get_node(obj);
                    if (!obj.length)
                        return false;
                    var s = this._get_settings().core.html_titles;
                    obj = obj.children("a:eq(0)");
                    if (s) {
                        obj = obj.clone();
                        obj.children("INS").remove();
                        return obj.html()
                    } else {
                        obj = obj.contents().filter(function() {
                            return this.nodeType == 3
                        })[0];
                        return obj.nodeValue
                    }
                },
                set_text: function(obj, val) {
                    obj = this._get_node(obj);
                    if (!obj.length)
                        return false;
                    obj = obj.children("a:eq(0)");
                    if (this._get_settings().core.html_titles) {
                        var tmp = obj.children("INS").clone();
                        obj.html(val).prepend(tmp);
                        this.__callback({ obj: obj, name: val });
                        return true
                    } else {
                        obj = obj.contents().filter(function() {
                            return this.nodeType == 3
                        })[0];
                        this.__callback({ obj: obj, name: val });
                        return obj.nodeValue = val
                    }
                },
                rename_node: function(obj, val) {
                    obj = this._get_node(obj);
                    this.__rollback();
                    obj &&
                        obj.length &&
                        this.set_text.apply(this, Array.prototype.slice.call(arguments)) &&
                        this.__callback({ obj: obj, name: val })
                },
                delete_node: function(obj) {
                    obj = this._get_node(obj);
                    if (!obj.length)
                        return false;
                    this.__rollback();
                    var p = this._get_parent(obj),
                        prev = $([]),
                        t = this;
                    obj.each(function() {
                        prev = prev.add(t._get_prev(this))
                    });
                    obj = obj.detach();
                    p !== -1 &&
                        p.find("> ul > li").length === 0 &&
                        p.removeClass("jstree-open jstree-closed").addClass("jstree-leaf");
                    this.clean_node(p);
                    this.__callback({ obj: obj, prev: prev, parent: p });
                    return obj
                },
                prepare_move: function(o, r, pos, cb, is_cb) {
                    var p = {};
                    p.ot = $.jstree._reference(o) || this;
                    p.o = p.ot._get_node(o);
                    p.r = r === -1 ? -1 : this._get_node(r);
                    p.p = typeof pos === "undefined" || pos === false ? "last" : pos;
                    if (!is_cb &&
                        prepared_move.o &&
                        prepared_move.o[0] === p.o[0] &&
                        prepared_move.r[0] === p.r[0] &&
                        prepared_move.p === p.p) {
                        this.__callback(prepared_move);
                        cb && cb.call(this, prepared_move);
                        return
                    }
                    p.ot = $.jstree._reference(p.o) || this;
                    p.rt = $.jstree._reference(p.r) || this;
                    if (p.r === -1 || !p.r) {
                        p.cr = -1;
                        switch (p.p) {
                        case "first":
                        case "before":
                        case "inside":
                            p.cp = 0;
                            break;
                        case "after":
                        case "last":
                            p.cp = p.rt.get_container().find(" > ul > li").length;
                            break;
                        default:
                            p.cp = p.p;
                            break
                        }
                    } else {
                        if (!/^(before|after)$/.test(p.p) && !this._is_loaded(p.r))
                            return this.load_node(p.r,
                                function() {
                                    this.prepare_move(o, r, pos, cb, true)
                                });
                        switch (p.p) {
                        case "before":
                            p.cp = p.r.index();
                            p.cr = p.rt._get_parent(p.r);
                            break;
                        case "after":
                            p.cp = p.r.index() + 1;
                            p.cr = p.rt._get_parent(p.r);
                            break;
                        case "inside":
                        case "first":
                            p.cp = 0;
                            p.cr = p.r;
                            break;
                        case "last":
                            p.cp = p.r.find(" > ul > li").length;
                            p.cr = p.r;
                            break;
                        default:
                            p.cp = p.p;
                            p.cr = p.r;
                            break
                        }
                    }
                    p.np = p.cr == -1 ? p.rt.get_container() : p.cr;
                    p.op = p.ot._get_parent(p.o);
                    p.cop = p.o.index();
                    if (p.op === -1)
                        p.op = p.ot ? p.ot.get_container() : this.get_container();
                    if (!/^(before|after)$/.test(p.p) && p.op && p.np && p.op[0] === p.np[0] && p.o.index() < p.cp)
                        p.cp++;
                    p.or = p.np.find(" > ul > li:nth-child(" + (p.cp + 1) + ")");
                    prepared_move = p;
                    this.__callback(prepared_move);
                    cb && cb.call(this, prepared_move)
                },
                check_move: function() {
                    var obj = prepared_move,
                        ret = true,
                        r = obj.r === -1 ? this.get_container() : obj.r;
                    if (!obj || !obj.o || obj.or[0] === obj.o[0])
                        return false;
                    if (obj.op && obj.np && obj.op[0] === obj.np[0] && obj.cp - 1 === obj.o.index())
                        return false;
                    obj.o.each(function() {
                        if (r.parentsUntil(".jstree", "li").andSelf().index(this) !== -1) {
                            ret = false;
                            return false
                        }
                    });
                    return ret
                },
                move_node: function(obj, ref, position, is_copy, is_prepared, skip_check) {
                    if (!is_prepared)
                        return this.prepare_move(obj,
                            ref,
                            position,
                            function(p) {
                                this.move_node(p, false, false, is_copy, true, skip_check)
                            });
                    if (is_copy)
                        prepared_move.cy = true;
                    if (!skip_check && !this.check_move())
                        return false;
                    this.__rollback();
                    var o = false;
                    if (is_copy) {
                        o = obj.o.clone(true);
                        o.find("*[id]").andSelf().each(function() {
                            if (this.id)
                                this.id = "copy_" + this.id
                        })
                    } else
                        o = obj.o;
                    if (obj.or.length)
                        obj.or.before(o);
                    else {
                        !obj.np.children("ul").length && $("<ul/>").appendTo(obj.np);
                        obj.np.children("ul:eq(0)").append(o)
                    }
                    try {
                        obj.ot.clean_node(obj.op);
                        obj.rt.clean_node(obj.np);
                        !obj.op.find("> ul > li").length &&
                            obj.op.removeClass("jstree-open jstree-closed").addClass("jstree-leaf").children("ul")
                            .remove()
                    } catch (e) {
                    }
                    if (is_copy) {
                        prepared_move.cy = true;
                        prepared_move.oc = o
                    }
                    this.__callback(prepared_move);
                    return prepared_move
                },
                _get_move: function() {
                    return prepared_move
                }
            }
        })
    })(jQuery);
    (function($) {
        var scrollbar_width,
            e1,
            e2;
        $(function() {
            if (/msie/.test(navigator.userAgent.toLowerCase())) {
                e1 = $('<textarea cols="10" rows="2"></textarea>').css({ position: "absolute", top: -1e3, left: 0 })
                    .appendTo("body");
                e2 = $('<textarea cols="10" rows="2" style="overflow: hidden;"></textarea>')
                    .css({ position: "absolute", top: -1e3, left: 0 }).appendTo("body");
                scrollbar_width = e1.width() - e2.width();
                e1.add(e2).remove()
            } else {
                e1 = $("<div/>").css({
                    width: 100,
                    height: 100,
                    overflow: "auto",
                    position: "absolute",
                    top: -1e3,
                    left: 0
                }).prependTo("body").append("<div/>").find("div").css({ width: "100%", height: 200 });
                scrollbar_width = 100 - e1.width();
                e1.parent().remove()
            }
        });
        $.jstree.plugin("ui",
        {
            __init: function() {
                this.data.ui.selected = $();
                this.data.ui.last_selected = false;
                this.data.ui.hovered = null;
                this.data.ui.to_select = this.get_settings().ui.initially_select;
                this.get_container().delegate("a",
                    "click.jstree",
                    $.proxy(function(event) {
                            event.preventDefault();
                            event.currentTarget.blur();
                            !$(event.currentTarget).hasClass("jstree-loading") &&
                                this.select_node(event.currentTarget, true, event)
                        },
                        this)).delegate("a",
                    "mouseenter.jstree",
                    $.proxy(function(event) {
                            !$(event.currentTarget).hasClass("jstree-loading") && this.hover_node(event.target)
                        },
                        this)).delegate("a",
                    "mouseleave.jstree",
                    $.proxy(function(event) {
                            !$(event.currentTarget).hasClass("jstree-loading") && this.dehover_node(event.target)
                        },
                        this)).bind("reopen.jstree",
                    $.proxy(function() {
                            this.reselect()
                        },
                        this)).bind("get_rollback.jstree",
                    $.proxy(function() {
                            this.dehover_node();
                            this.save_selected()
                        },
                        this)).bind("set_rollback.jstree",
                    $.proxy(function() {
                            this.reselect()
                        },
                        this)).bind("close_node.jstree",
                    $.proxy(function(event, data) {
                            var s = this._get_settings().ui,
                                obj = this._get_node(data.rslt.obj),
                                clk = obj && obj.length ? obj.children("ul").find("a.jstree-clicked") : $(),
                                _this = this;
                            if (s.selected_parent_close === false || !clk.length)
                                return;
                            clk.each(function() {
                                _this.deselect_node(this);
                                s.selected_parent_close === "select_parent" && _this.select_node(obj)
                            })
                        },
                        this)).bind("delete_node.jstree",
                    $.proxy(function(event, data) {
                            var s = this._get_settings().ui.select_prev_on_delete,
                                obj = this._get_node(data.rslt.obj),
                                clk = obj && obj.length ? obj.find("a.jstree-clicked") : [],
                                _this = this;
                            clk.each(function() {
                                _this.deselect_node(this)
                            });
                            s &&
                                clk.length &&
                                data.rslt.prev.each(function() {
                                    if (this.parentNode) {
                                        _this.select_node(this);
                                        return false
                                    }
                                })
                        },
                        this)).bind("move_node.jstree",
                    $.proxy(function(event, data) {
                            data.rslt.cy && data.rslt.oc.find("a.jstree-clicked").removeClass("jstree-clicked")
                        },
                        this))
            },
            defaults: {
                select_limit: -1,
                select_multiple_modifier: "ctrl",
                select_range_modifier: "shift",
                selected_parent_close: "select_parent",
                selected_parent_open: true,
                select_prev_on_delete: true,
                disable_selecting_children: false,
                initially_select: []
            },
            _fn: {
                _get_node: function(obj, allow_multiple) {
                    if (typeof obj === "undefined" || obj === null)
                        return allow_multiple ? this.data.ui.selected : this.data.ui.last_selected;
                    var $obj = $(obj, this.get_container());
                    if ($obj.is(".jstree") || obj == -1)
                        return -1;
                    $obj = $obj.closest("li", this.get_container());
                    return $obj.length ? $obj : false
                },
                _ui_notify: function(n, data) {
                    data.selected && this.select_node(n, false)
                },
                save_selected: function() {
                    var _this = this;
                    this.data.ui.to_select = [];
                    this.data.ui.selected.each(function() {
                        this.id &&
                            _this.data.ui.to_select.push("#" +
                                this.id.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/")
                                .replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:"))
                    });
                    this.__callback(this.data.ui.to_select)
                },
                reselect: function() {
                    var _this = this,
                        s = this.data.ui.to_select;
                    s = $.map($.makeArray(s),
                        function(n) {
                            return "#" +
                                n.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/")
                                .replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:")
                        });
                    $.each(s,
                        function(i, val) {
                            val && val !== "#" && _this.select_node(val)
                        });
                    this.data.ui.selected = this.data.ui.selected.filter(function() {
                        return this.parentNode
                    });
                    this.__callback()
                },
                refresh: function(obj) {
                    this.save_selected();
                    return this.__call_old()
                },
                hover_node: function(obj) {
                    obj = this._get_node(obj);
                    if (!obj.length)
                        return false;
                    !obj.hasClass("jstree-hovered") && this.dehover_node();
                    this.data.ui.hovered = obj.children("a").addClass("jstree-hovered").parent();
                    this._fix_scroll(obj);
                    this.__callback({ obj: obj })
                },
                dehover_node: function() {
                    var obj = this.data.ui.hovered,
                        p;
                    if (!obj || !obj.length)
                        return false;
                    p = obj.children("a").removeClass("jstree-hovered").parent();
                    if (this.data.ui.hovered[0] === p[0])
                        this.data.ui.hovered = null;
                    this.__callback({ obj: obj })
                },
                select_node: function(obj, check, e) {
                    obj = this._get_node(obj);
                    if (obj == -1 || !obj || !obj.length)
                        return false;
                    var s = this._get_settings().ui,
                        is_multiple = s.select_multiple_modifier == "on" ||
                            s.select_multiple_modifier !== false && e && e[s.select_multiple_modifier + "Key"],
                        is_range = s.select_range_modifier !== false &&
                            e &&
                            e[s.select_range_modifier + "Key"] &&
                            this.data.ui.last_selected &&
                            this.data.ui.last_selected[0] !== obj[0] &&
                            this.data.ui.last_selected.parent()[0] === obj.parent()[0],
                        is_selected = this.is_selected(obj),
                        proceed = true,
                        t = this;
                    if (check) {
                        if (s.disable_selecting_children &&
                            is_multiple &&
                            (obj.parentsUntil(".jstree", "li").children("a.jstree-clicked").length ||
                                obj.children("ul").find("a.jstree-clicked:eq(0)").length))
                            return false;
                        proceed = false;
                        switch (!0) {
                        case is_range:
                            this.data.ui.last_selected.addClass("jstree-last-selected");
                            obj = obj[obj
                                .index() <
                                this.data.ui.last_selected.index()
                                ? "nextUntil"
                                : "prevUntil"](".jstree-last-selected").andSelf();
                            if (s.select_limit == -1 || obj.length < s.select_limit) {
                                this.data.ui.last_selected.removeClass("jstree-last-selected");
                                this.data.ui.selected.each(function() {
                                    this !== t.data.ui.last_selected[0] && t.deselect_node(this)
                                });
                                is_selected = false;
                                proceed = true
                            } else
                                proceed = false;
                            break;
                        case is_selected && !is_multiple:
                            this.deselect_all();
                            is_selected = false;
                            proceed = true;
                            break;
                        case !is_selected && !is_multiple:
                            if (s.select_limit == -1 || s.select_limit > 0) {
                                this.deselect_all();
                                proceed = true
                            }
                            break;
                        case is_selected && is_multiple:
                            this.deselect_node(obj);
                            break;
                        case !is_selected && is_multiple:
                            if (s.select_limit == -1 || this.data.ui.selected.length + 1 <= s.select_limit)
                                proceed = true;
                            break
                        }
                    }
                    if (proceed && !is_selected) {
                        if (!is_range)
                            this.data.ui.last_selected = obj;
                        obj.children("a").addClass("jstree-clicked");
                        s.selected_parent_open &&
                            obj.parents(".jstree-closed").each(function() {
                                t.open_node(this, false, true)
                            });
                        this.data.ui.selected = this.data.ui.selected.add(obj);
                        this._fix_scroll(obj.eq(0));
                        this.__callback({ obj: obj, e: e })
                    }
                },
                _fix_scroll: function(obj) {
                    var c = this.get_container()[0],
                        t;
                    if (c.scrollHeight > c.offsetHeight) {
                        obj = this._get_node(obj);
                        if (!obj || obj === -1 || !obj.length || !obj.is(":visible"))
                            return;
                        t = obj.offset().top - this.get_container().offset().top;
                        if (t < 0)
                            c.scrollTop = c.scrollTop + t - 1;
                        if (t + this.data.core.li_height + (c.scrollWidth > c.offsetWidth ? scrollbar_width : 0) >
                            c.offsetHeight)
                            c.scrollTop = c.scrollTop +
                            (t -
                                c.offsetHeight +
                                this.data.core.li_height +
                                1 +
                                (c.scrollWidth > c.offsetWidth ? scrollbar_width : 0))
                    }
                },
                deselect_node: function(obj) {
                    obj = this._get_node(obj);
                    if (!obj.length)
                        return false;
                    if (this.is_selected(obj)) {
                        obj.children("a").removeClass("jstree-clicked");
                        this.data.ui.selected = this.data.ui.selected.not(obj);
                        if (this.data.ui.last_selected.get(0) === obj.get(0))
                            this.data.ui.last_selected = this.data.ui.selected.eq(0);
                        this.__callback({ obj: obj })
                    }
                },
                toggle_select: function(obj) {
                    obj = this._get_node(obj);
                    if (!obj.length)
                        return false;
                    if (this.is_selected(obj))
                        this.deselect_node(obj);
                    else
                        this.select_node(obj)
                },
                is_selected: function(obj) {
                    return this.data.ui.selected.index(this._get_node(obj)) >= 0
                },
                get_selected: function(context) {
                    return context ? $(context).find("a.jstree-clicked").parent() : this.data.ui.selected
                },
                deselect_all: function(context) {
                    var ret = context
                        ? $(context).find("a.jstree-clicked").parent()
                        : this.get_container().find("a.jstree-clicked").parent();
                    ret.children("a.jstree-clicked").removeClass("jstree-clicked");
                    this.data.ui.selected = $([]);
                    this.data.ui.last_selected = false;
                    this.__callback({ obj: ret })
                }
            }
        });
        $.jstree.defaults.plugins.push("ui")
    })(jQuery);
    (function($) {
        $.jstree.plugin("crrm",
        {
            __init: function() {
                this.get_container().bind("move_node.jstree",
                    $.proxy(function(e, data) {
                            if (this._get_settings().crrm.move.open_onmove) {
                                var t = this;
                                data.rslt.np.parentsUntil(".jstree").andSelf().filter(".jstree-closed")
                                    .each(function() {
                                        t.open_node(this, false, true)
                                    })
                            }
                        },
                        this))
            },
            defaults: {
                input_width_limit: 200,
                move: {
                    always_copy: false,
                    open_onmove: true,
                    default_position: "last",
                    check_move: function(m) {
                        return true
                    }
                }
            },
            _fn: {
                _show_input: function(obj, callback) {
                    obj = this._get_node(obj);
                    var rtl = this._get_settings().core.rtl,
                        w = this._get_settings().crrm.input_width_limit,
                        w1 = obj.children("ins").width(),
                        w2 = obj.find("> a:visible > ins").width() * obj.find("> a:visible > ins").length,
                        t = this.get_text(obj),
                        h1 = $("<div/>",
                        {
                            css: {
                                position: "absolute",
                                top: "-200px",
                                left: rtl ? "0px" : "-1000px",
                                visibility: "hidden"
                            }
                        }).appendTo("body"),
                        h2 = obj.css("position", "relative").append($("<input/>",
                        {
                            value: t,
                            "class": "jstree-rename-input",
                            css: {
                                padding: "0",
                                border: "1px solid silver",
                                position: "absolute",
                                left: rtl ? "auto" : w1 + w2 + 4 + "px",
                                right: rtl ? w1 + w2 + 4 + "px" : "auto",
                                top: "0px",
                                height: this.data.core.li_height - 2 + "px",
                                lineHeight: this.data.core.li_height - 2 + "px",
                                width: "150px"
                            },
                            blur: $.proxy(function() {
                                    var i = obj.children(".jstree-rename-input"),
                                        v = i.val();
                                    if (v === "")
                                        v = t;
                                    h1.remove();
                                    i.remove();
                                    this.set_text(obj, t);
                                    this.rename_node(obj, v);
                                    callback.call(this, obj, v, t);
                                    obj.css("position", "")
                                },
                                this),
                            keyup: function(event) {
                                var key = event.keyCode || event.which;
                                if (key == 27) {
                                    this.value = t;
                                    this.blur();
                                    return
                                } else if (key == 13) {
                                    this.blur();
                                    return
                                } else
                                    h2.width(Math.min(h1.text("pW" + this.value).width(), w))
                            },
                            keypress: function(event) {
                                var key = event.keyCode || event.which;
                                if (key == 13)
                                    return false
                            }
                        })).children(".jstree-rename-input");
                    this.set_text(obj, "");
                    h1.css({
                        fontFamily: h2.css("fontFamily") || "",
                        fontSize: h2.css("fontSize") || "",
                        fontWeight: h2.css("fontWeight") || "",
                        fontStyle: h2.css("fontStyle") || "",
                        fontStretch: h2.css("fontStretch") || "",
                        fontVariant: h2.css("fontVariant") || "",
                        letterSpacing: h2.css("letterSpacing") || "",
                        wordSpacing: h2.css("wordSpacing") || ""
                    });
                    h2.width(Math.min(h1.text("pW" + h2[0].value).width(), w))[0].select()
                },
                rename: function(obj) {
                    obj = this._get_node(obj);
                    this.__rollback();
                    var f = this.__callback;
                    this._show_input(obj,
                        function(obj, new_name, old_name) {
                            f.call(this, { obj: obj, new_name: new_name, old_name: old_name })
                        })
                },
                create: function(obj, position, js, callback, skip_rename) {
                    var t,
                        _this = this;
                    obj = this._get_node(obj);
                    if (!obj)
                        obj = -1;
                    this.__rollback();
                    t = this.create_node(obj,
                        position,
                        js,
                        function(t) {
                            var p = this._get_parent(t),
                                pos = $(t).index();
                            callback && callback.call(this, t);
                            p.length && p.hasClass("jstree-closed") && this.open_node(p, false, true);
                            if (!skip_rename)
                                this._show_input(t,
                                    function(obj, new_name, old_name) {
                                        _this.__callback({ obj: obj, name: new_name, parent: p, position: pos })
                                    });
                            else
                                _this.__callback({ obj: t, name: this.get_text(t), parent: p, position: pos })
                        });
                    return t
                },
                remove: function(obj) {
                    obj = this._get_node(obj, true);
                    var p = this._get_parent(obj),
                        prev = this._get_prev(obj);
                    this.__rollback();
                    obj = this.delete_node(obj);
                    obj !== false && this.__callback({ obj: obj, prev: prev, parent: p })
                },
                check_move: function() {
                    if (!this.__call_old())
                        return false;
                    var s = this._get_settings().crrm.move;
                    if (!s.check_move.call(this, this._get_move()))
                        return false;
                    return true
                },
                move_node: function(obj, ref, position, is_copy, is_prepared, skip_check) {
                    var s = this._get_settings().crrm.move;
                    if (!is_prepared) {
                        if (typeof position === "undefined")
                            position = s.default_position;
                        if (position === "inside" && !s.default_position.match(/^(before|after)$/))
                            position = s.default_position;
                        return this.__call_old(true, obj, ref, position, is_copy, false, skip_check)
                    }
                    if (s.always_copy === true ||
                        s.always_copy === "multitree" && obj.rt.get_index() !== obj.ot.get_index())
                        is_copy = true;
                    this.__call_old(true, obj, ref, position, is_copy, true, skip_check)
                },
                cut: function(obj) {
                    obj = this._get_node(obj, true);
                    if (!obj || !obj.length)
                        return false;
                    this.data.crrm.cp_nodes = false;
                    this.data.crrm.ct_nodes = obj;
                    this.__callback({ obj: obj })
                },
                copy: function(obj) {
                    obj = this._get_node(obj, true);
                    if (!obj || !obj.length)
                        return false;
                    this.data.crrm.ct_nodes = false;
                    this.data.crrm.cp_nodes = obj;
                    this.__callback({ obj: obj })
                },
                paste: function(obj) {
                    obj = this._get_node(obj);
                    if (!obj || !obj.length)
                        return false;
                    var nodes = this.data.crrm.ct_nodes ? this.data.crrm.ct_nodes : this.data.crrm.cp_nodes;
                    if (!this.data.crrm.ct_nodes && !this.data.crrm.cp_nodes)
                        return false;
                    if (this.data.crrm.ct_nodes) {
                        this.move_node(this.data.crrm.ct_nodes, obj);
                        this.data.crrm.ct_nodes = false
                    }
                    this.data.crrm.cp_nodes && this.move_node(this.data.crrm.cp_nodes, obj, false, true);
                    this.__callback({ obj: obj, nodes: nodes })
                }
            }
        })
    })(jQuery);
    (function($) {
        var themes_loaded = [];
        $.jstree._themes = false;
        $.jstree.plugin("themes",
        {
            __init: function() {
                this.get_container().bind("init.jstree",
                    $.proxy(function() {
                            var s = this._get_settings().themes;
                            this.data.themes.dots = s.dots;
                            this.data.themes.icons = s.icons;
                            this.set_theme(s.theme, s.url)
                        },
                        this)).bind("loaded.jstree",
                    $.proxy(function() {
                            if (!this.data.themes.dots)
                                this.hide_dots();
                            else
                                this.show_dots();
                            if (!this.data.themes.icons)
                                this.hide_icons();
                            else
                                this.show_icons()
                        },
                        this))
            },
            defaults: { theme: "default", url: false, dots: true, icons: true },
            _fn: {
                set_theme: function(theme_name, theme_url) {
                    if (!theme_name)
                        return false;
                    if (!theme_url)
                        theme_url = $.jstree._themes + theme_name + "/style.css";
                    if ($.inArray(theme_url, themes_loaded) == -1) {
                        $.vakata.css.add_sheet({ url: theme_url });
                        themes_loaded.push(theme_url)
                    }
                    if (this.data.themes.theme != theme_name) {
                        this.get_container().removeClass("jstree-" + this.data.themes.theme);
                        this.data.themes.theme = theme_name
                    }
                    this.get_container().addClass("jstree-" + theme_name);
                    if (!this.data.themes.dots)
                        this.hide_dots();
                    else
                        this.show_dots();
                    if (!this.data.themes.icons)
                        this.hide_icons();
                    else
                        this.show_icons();
                    this.__callback()
                },
                get_theme: function() {
                    return this.data.themes.theme
                },
                show_dots: function() {
                    this.data.themes.dots = true;
                    this.get_container().children("ul").removeClass("jstree-no-dots")
                },
                hide_dots: function() {
                    this.data.themes.dots = false;
                    this.get_container().children("ul").addClass("jstree-no-dots")
                },
                toggle_dots: function() {
                    if (this.data.themes.dots)
                        this.hide_dots();
                    else
                        this.show_dots()
                },
                show_icons: function() {
                    this.data.themes.icons = true;
                    this.get_container().children("ul").removeClass("jstree-no-icons")
                },
                hide_icons: function() {
                    this.data.themes.icons = false;
                    this.get_container().children("ul").addClass("jstree-no-icons")
                },
                toggle_icons: function() {
                    if (this.data.themes.icons)
                        this.hide_icons();
                    else
                        this.show_icons()
                }
            }
        });
        $(function() {
            $.jstree._themes === false &&
                $("script").each(function() {
                    if (this.src.toString().match(/jquery\.jstree[^\/]*?\.js(\?.*)?$/)) {
                        $.jstree._themes = this.src.toString().replace(/jquery\.jstree[^\/]*?\.js(\?.*)?$/, "") +
                            "themes/";
                        return false
                    }
                });
            if ($.jstree._themes === false)
                $.jstree._themes = "themes/"
        });
        $.jstree.defaults.plugins.push("themes")
    })(jQuery);
    (function($) {
        var bound = [];

        function exec(i, event) {
            var f = $.jstree._focused(),
                tmp;
            if (f && f.data && f.data.hotkeys && f.data.hotkeys.enabled) {
                tmp = f._get_settings().hotkeys[i];
                if (tmp)
                    return tmp.call(f, event)
            }
        }

        $.jstree.plugin("hotkeys",
        {
            __init: function() {
                if (typeof $.hotkeys === "undefined")
                    throw"jsTree hotkeys: jQuery hotkeys plugin not included.";
                if (!this.data.ui)
                    throw"jsTree hotkeys: jsTree UI plugin not included.";
                $.each(this._get_settings().hotkeys,
                    function(i, v) {
                        if (v !== false && $.inArray(i, bound) == -1) {
                            $(document).bind("keydown",
                                i,
                                function(event) {
                                    return exec(i, event)
                                });
                            bound.push(i)
                        }
                    });
                this.get_container().bind("lock.jstree",
                    $.proxy(function() {
                            if (this.data.hotkeys.enabled) {
                                this.data.hotkeys.enabled = false;
                                this.data.hotkeys.revert = true
                            }
                        },
                        this)).bind("unlock.jstree",
                    $.proxy(function() {
                            if (this.data.hotkeys.revert)
                                this.data.hotkeys.enabled = true
                        },
                        this));
                this.enable_hotkeys()
            },
            defaults: {
                up: function() {
                    var o = this.data.ui.hovered || this.data.ui.last_selected || -1;
                    this.hover_node(this._get_prev(o));
                    return false
                },
                "ctrl+up": function() {
                    var o = this.data.ui.hovered || this.data.ui.last_selected || -1;
                    this.hover_node(this._get_prev(o));
                    return false
                },
                "shift+up": function() {
                    var o = this.data.ui.hovered || this.data.ui.last_selected || -1;
                    this.hover_node(this._get_prev(o));
                    return false
                },
                down: function() {
                    var o = this.data.ui.hovered || this.data.ui.last_selected || -1;
                    this.hover_node(this._get_next(o));
                    return false
                },
                "ctrl+down": function() {
                    var o = this.data.ui.hovered || this.data.ui.last_selected || -1;
                    this.hover_node(this._get_next(o));
                    return false
                },
                "shift+down": function() {
                    var o = this.data.ui.hovered || this.data.ui.last_selected || -1;
                    this.hover_node(this._get_next(o));
                    return false
                },
                left: function() {
                    var o = this.data.ui.hovered || this.data.ui.last_selected;
                    if (o)
                        if (o.hasClass("jstree-open"))
                            this.close_node(o);
                        else
                            this.hover_node(this._get_prev(o));
                    return false
                },
                "ctrl+left": function() {
                    var o = this.data.ui.hovered || this.data.ui.last_selected;
                    if (o)
                        if (o.hasClass("jstree-open"))
                            this.close_node(o);
                        else
                            this.hover_node(this._get_prev(o));
                    return false
                },
                "shift+left": function() {
                    var o = this.data.ui.hovered || this.data.ui.last_selected;
                    if (o)
                        if (o.hasClass("jstree-open"))
                            this.close_node(o);
                        else
                            this.hover_node(this._get_prev(o));
                    return false
                },
                right: function() {
                    var o = this.data.ui.hovered || this.data.ui.last_selected;
                    if (o && o.length)
                        if (o.hasClass("jstree-closed"))
                            this.open_node(o);
                        else
                            this.hover_node(this._get_next(o));
                    return false
                },
                "ctrl+right": function() {
                    var o = this.data.ui.hovered || this.data.ui.last_selected;
                    if (o && o.length)
                        if (o.hasClass("jstree-closed"))
                            this.open_node(o);
                        else
                            this.hover_node(this._get_next(o));
                    return false
                },
                "shift+right": function() {
                    var o = this.data.ui.hovered || this.data.ui.last_selected;
                    if (o && o.length)
                        if (o.hasClass("jstree-closed"))
                            this.open_node(o);
                        else
                            this.hover_node(this._get_next(o));
                    return false
                },
                space: function() {
                    this.data.ui.hovered && this.data.ui.hovered.children("a:eq(0)").click();
                    return false
                },
                "ctrl+space": function(event) {
                    event.type = "click";
                    this.data.ui.hovered && this.data.ui.hovered.children("a:eq(0)").trigger(event);
                    return false
                },
                "shift+space": function(event) {
                    event.type = "click";
                    this.data.ui.hovered && this.data.ui.hovered.children("a:eq(0)").trigger(event);
                    return false
                },
                f2: function() {
                    this.rename(this.data.ui.hovered || this.data.ui.last_selected)
                },
                del: function() {
                    this.remove(this.data.ui.hovered || this._get_node(null))
                }
            },
            _fn: {
                enable_hotkeys: function() {
                    this.data.hotkeys.enabled = true
                },
                disable_hotkeys: function() {
                    this.data.hotkeys.enabled = false
                }
            }
        })
    })(jQuery);
    (function($) {
        $.jstree.plugin("json_data",
        {
            __init: function() {
                var s = this._get_settings().json_data;
                s.progressive_unload &&
                    this.get_container().bind("after_close.jstree",
                        function(e, data) {
                            data.rslt.obj.children("ul").remove()
                        })
            },
            defaults: {
                data: false,
                ajax: false,
                correct_state: true,
                progressive_render: false,
                progressive_unload: false
            },
            _fn: {
                load_node: function(obj, s_call, e_call) {
                    var _this = this;
                    this.load_node_json(obj,
                        function() {
                            _this.__callback({ obj: _this._get_node(obj) });
                            s_call.call(this)
                        },
                        e_call)
                },
                _is_loaded: function(obj) {
                    var s = this._get_settings().json_data;
                    obj = this._get_node(obj);
                    return obj == -1 ||
                        !obj ||
                        !s.ajax && !s.progressive_render && !$.isFunction(s.data) ||
                        obj.is(".jstree-open, .jstree-leaf") ||
                        obj.children("ul").children("li").length > 0
                },
                refresh: function(obj) {
                    obj = this._get_node(obj);
                    var s = this._get_settings().json_data;
                    obj &&
                        obj !== -1 &&
                        s.progressive_unload &&
                        ($.isFunction(s.data) || !!s.ajax) &&
                        obj.removeData("jstree_children");
                    return this.__call_old()
                },
                load_node_json: function(obj, s_call, e_call) {
                    var s = this.get_settings().json_data,
                        d,
                        error_func = function() {
                        },
                        success_func = function() {
                        };
                    obj = this._get_node(obj);
                    if (obj &&
                        obj !== -1 &&
                        (s.progressive_render || s.progressive_unload) &&
                        !obj.is(".jstree-open, .jstree-leaf") &&
                        obj.children("ul").children("li").length === 0 &&
                        obj.data("jstree_children")) {
                        d = this._parse_json(obj.data("jstree_children"), obj);
                        if (d) {
                            obj.append(d);
                            !s.progressive_unload && obj.removeData("jstree_children")
                        }
                        this.clean_node(obj);
                        s_call && s_call.call(this);
                        return
                    }
                    if (obj && obj !== -1)
                        if (obj.data("jstree_is_loading"))
                            return;
                        else
                            obj.data("jstree_is_loading", true);
                    switch (!0) {
                    case !s.data && !s.ajax:
                        throw"Neither data nor ajax settings supplied.";
                    case $.isFunction(s.data):
                        s.data.call(this,
                            obj,
                            $.proxy(function(d) {
                                    d = this._parse_json(d, obj);
                                    if (!d) {
                                        if (obj === -1 || !obj)
                                            s.correct_state && this.get_container().children("ul").empty();
                                        else {
                                            obj.children("a.jstree-loading").removeClass("jstree-loading");
                                            obj.removeData("jstree_is_loading");
                                            s.correct_state && this.correct_state(obj)
                                        }
                                        e_call && e_call.call(this)
                                    } else {
                                        if (obj === -1 || !obj)
                                            this.get_container().children("ul").empty().append(d.children());
                                        else {
                                            obj.append(d).children("a.jstree-loading").removeClass("jstree-loading");
                                            obj.removeData("jstree_is_loading")
                                        }
                                        this.clean_node(obj);
                                        s_call && s_call.call(this)
                                    }
                                },
                                this));
                        break;
                    case !!s.data && !s.ajax || !!s.data && !!s.ajax && (!obj || obj === -1):
                        if (!obj || obj == -1) {
                            d = this._parse_json(s.data, obj);
                            if (d) {
                                this.get_container().children("ul").empty().append(d.children());
                                this.clean_node()
                            } else
                                s.correct_state && this.get_container().children("ul").empty()
                        }
                        s_call && s_call.call(this);
                        break;
                    case !s.data && !!s.ajax || !!s.data && !!s.ajax && obj && obj !== -1:
                        error_func = function(x, t, e) {
                            var ef = this.get_settings().json_data.ajax.error;
                            ef && ef.call(this, x, t, e);
                            if (obj != -1 && obj.length) {
                                obj.children("a.jstree-loading").removeClass("jstree-loading");
                                obj.removeData("jstree_is_loading");
                                t === "success" && s.correct_state && this.correct_state(obj)
                            } else
                                t === "success" && s.correct_state && this.get_container().children("ul").empty();
                            e_call && e_call.call(this)
                        };
                        success_func = function(d, t, x) {
                            var sf = this.get_settings().json_data.ajax.success;
                            if (sf)
                                d = sf.call(this, d, t, x) || d;
                            if (d === "" ||
                                d && d.toString && d.toString().replace(/^[\s\n]+$/, "") === "" ||
                                !$.isArray(d) && !$.isPlainObject(d))
                                return error_func.call(this, x, t, "");
                            d = this._parse_json(d, obj);
                            if (d) {
                                if (obj === -1 || !obj)
                                    this.get_container().children("ul").empty().append(d.children());
                                else {
                                    obj.append(d).children("a.jstree-loading").removeClass("jstree-loading");
                                    obj.removeData("jstree_is_loading")
                                }
                                this.clean_node(obj);
                                s_call && s_call.call(this)
                            } else if (obj === -1 || !obj) {
                                if (s.correct_state) {
                                    this.get_container().children("ul").empty();
                                    s_call && s_call.call(this)
                                }
                            } else {
                                obj.children("a.jstree-loading").removeClass("jstree-loading");
                                obj.removeData("jstree_is_loading");
                                if (s.correct_state) {
                                    this.correct_state(obj);
                                    s_call && s_call.call(this)
                                }
                            }
                        };
                        s.ajax.context = this;
                        s.ajax.error = error_func;
                        s.ajax.success = success_func;
                        if (!s.ajax.dataType)
                            s.ajax.dataType = "json";
                        if ($.isFunction(s.ajax.url))
                            s.ajax.url = s.ajax.url.call(this, obj);
                        if ($.isFunction(s.ajax.data))
                            s.ajax.data = s.ajax.data.call(this, obj);
                        $.ajax(s.ajax);
                        break
                    }
                },
                _parse_json: function(js, obj, is_callback) {
                    var d = false,
                        p = this._get_settings(),
                        s = p.json_data,
                        t = p.core.html_titles,
                        tmp,
                        i,
                        j,
                        ul1,
                        ul2;
                    if (!js)
                        return d;
                    s.progressive_unload && obj && obj !== -1 && obj.data("jstree_children", d);
                    if ($.isArray(js)) {
                        d = $();
                        if (!js.length)
                            return false;
                        for (i = 0, j = js.length; i < j; i++) {
                            tmp = this._parse_json(js[i], obj, true);
                            if (tmp.length)
                                d = d.add(tmp)
                        }
                    } else {
                        if (typeof js == "string")
                            js = { data: js };
                        if (!js.data && js.data !== "")
                            return d;
                        d = $("<li/>");
                        js.attr && d.attr(js.attr);
                        js.metadata && d.data(js.metadata);
                        js.state && d.addClass("jstree-" + js.state);
                        if (!$.isArray(js.data)) {
                            tmp = js.data;
                            js.data = [];
                            js.data.push(tmp)
                        }
                        $.each(js.data,
                            function(i, m) {
                                tmp = $("<a/>");
                                if ($.isFunction(m))
                                    m = m.call(this, js);
                                if (typeof m == "string")
                                    tmp.attr("href", "#")[t ? "html" : "text"](m);
                                else {
                                    if (!m.attr)
                                        m.attr = {};
                                    if (!m.attr.href)
                                        m.attr.href = "#";
                                    tmp.attr(m.attr)[t ? "html" : "text"](m.title);
                                    m.language && tmp.addClass(m.language)
                                }
                                tmp.prepend("<ins class='jstree-icon'>&#160;</ins>");
                                if (!m.icon && js.icon)
                                    m.icon = js.icon;
                                if (m.icon)
                                    if (m.icon.indexOf("/") === -1)
                                        tmp.children("ins").addClass(m.icon);
                                    else
                                        tmp.children("ins")
                                            .css("background", "url('" + m.icon + "') center center no-repeat");
                                d.append(tmp)
                            });
                        d.prepend("<ins class='jstree-icon'>&#160;</ins>");
                        if (js.children)
                            if (s.progressive_render && js.state !== "open")
                                d.addClass("jstree-closed").data("jstree_children", js.children);
                            else {
                                s.progressive_unload && d.data("jstree_children", js.children);
                                if ($.isArray(js.children) && js.children.length) {
                                    tmp = this._parse_json(js.children, obj, true);
                                    if (tmp.length) {
                                        ul2 = $("<ul/>");
                                        ul2.append(tmp);
                                        d.append(ul2)
                                    }
                                }
                            }
                    }
                    if (!is_callback) {
                        ul1 = $("<ul/>");
                        ul1.append(d);
                        d = ul1
                    }
                    return d
                },
                get_json: function(obj, li_attr, a_attr, is_callback) {
                    var result = [],
                        s = this._get_settings(),
                        _this = this,
                        tmp1,
                        tmp2,
                        li,
                        a,
                        t,
                        lang;
                    obj = this._get_node(obj);
                    if (!obj || obj === -1)
                        obj = this.get_container().find("> ul > li");
                    li_attr = $.isArray(li_attr) ? li_attr : ["id", "class"];
                    !is_callback && this.data.types && li_attr.push(s.types.type_attr);
                    a_attr = $.isArray(a_attr) ? a_attr : [];
                    obj.each(function() {
                        li = $(this);
                        tmp1 = { data: [] };
                        if (li_attr.length)
                            tmp1.attr = {};
                        $.each(li_attr,
                            function(i, v) {
                                tmp2 = li.attr(v);
                                if (tmp2 && tmp2.length && tmp2.replace(/jstree[^ ]*/ig, "").length)
                                    tmp1.attr[v] = (" " + tmp2).replace(/ jstree[^ ]*/ig, "").replace(/\s+$/ig, " ")
                                        .replace(/^ /, "").replace(/ $/, "")
                            });
                        if (li.hasClass("jstree-open"))
                            tmp1.state = "open";
                        if (li.hasClass("jstree-closed"))
                            tmp1.state = "closed";
                        if (li.data())
                            tmp1.metadata = li.data();
                        a = li.children("a");
                        a.each(function() {
                            t = $(this);
                            if (a_attr.length ||
                                $.inArray("languages", s.plugins) !== -1 ||
                                t.children("ins").get(0).style.backgroundImage.length ||
                                t.children("ins").get(0).className &&
                                t.children("ins").get(0).className.replace(/jstree[^ ]*|$/ig, "").length) {
                                lang = false;
                                $.inArray("languages", s.plugins) !== -1 &&
                                    $.isArray(s.languages) &&
                                    s.languages.length &&
                                    $.each(s.languages,
                                        function(l, lv) {
                                            if (t.hasClass(lv)) {
                                                lang = lv;
                                                return false
                                            }
                                        });
                                tmp2 = { attr: {}, title: _this.get_text(t, lang) };
                                $.each(a_attr,
                                    function(k, z) {
                                        tmp2.attr[z] = (" " + (t.attr(z) || "")).replace(/ jstree[^ ]*/ig, "")
                                            .replace(/\s+$/ig, " ").replace(/^ /, "").replace(/ $/, "")
                                    });
                                $.inArray("languages", s.plugins) !== -1 &&
                                    $.isArray(s.languages) &&
                                    s.languages.length &&
                                    $.each(s.languages,
                                        function(k, z) {
                                            if (t.hasClass(z)) {
                                                tmp2.language = z;
                                                return true
                                            }
                                        });
                                if (t.children("ins").get(0).className.replace(/jstree[^ ]*|$/ig, "")
                                    .replace(/^\s+$/ig, "").length)
                                    tmp2.icon = t.children("ins").get(0).className.replace(/jstree[^ ]*|$/ig, "")
                                        .replace(/\s+$/ig, " ").replace(/^ /, "").replace(/ $/, "");
                                if (t.children("ins").get(0).style.backgroundImage.length)
                                    tmp2.icon = t.children("ins").get(0).style.backgroundImage.replace("url(", "")
                                        .replace(")", "")
                            } else
                                tmp2 = _this.get_text(t);
                            if (a.length > 1)
                                tmp1.data.push(tmp2);
                            else
                                tmp1.data = tmp2
                        });
                        li = li.find("> ul > li");
                        if (li.length)
                            tmp1.children = _this.get_json(li, li_attr, a_attr, true);
                        result.push(tmp1)
                    });
                    return result
                }
            }
        })
    })(jQuery);
    (function($) {
        $.jstree.plugin("languages",
        {
            __init: function() {
                this._load_css()
            },
            defaults: [],
            _fn: {
                set_lang: function(i) {
                    var langs = this._get_settings().languages,
                        st = false,
                        selector = ".jstree-" + this.get_index() + " a";
                    if (!$.isArray(langs) || langs.length === 0)
                        return false;
                    if ($.inArray(i, langs) == -1)
                        if (!!langs[i])
                            i = langs[i];
                        else
                            return false;
                    if (i == this.data.languages.current_language)
                        return true;
                    st = $.vakata.css.get_css(selector + "." + this.data.languages.current_language,
                        false,
                        this.data.languages.language_css);
                    if (st !== false)
                        st.style.display = "none";
                    st = $.vakata.css.get_css(selector + "." + i, false, this.data.languages.language_css);
                    if (st !== false)
                        st.style.display = "";
                    this.data.languages.current_language = i;
                    this.__callback(i);
                    return true
                },
                get_lang: function() {
                    return this.data.languages.current_language
                },
                _get_string: function(key, lang) {
                    var langs = this._get_settings().languages,
                        s = this._get_settings().core.strings;
                    if ($.isArray(langs) && langs.length)
                        lang = lang && $.inArray(lang, langs) != -1 ? lang : this.data.languages.current_language;
                    if (s[lang] && s[lang][key])
                        return s[lang][key];
                    if (s[key])
                        return s[key];
                    return key
                },
                get_text: function(obj, lang) {
                    obj = this._get_node(obj) || this.data.ui.last_selected;
                    if (!obj.size())
                        return false;
                    var langs = this._get_settings().languages,
                        s = this._get_settings().core.html_titles;
                    if ($.isArray(langs) && langs.length) {
                        lang = lang && $.inArray(lang, langs) != -1 ? lang : this.data.languages.current_language;
                        obj = obj.children("a." + lang)
                    } else
                        obj = obj.children("a:eq(0)");
                    if (s) {
                        obj = obj.clone();
                        obj.children("INS").remove();
                        return obj.html()
                    } else {
                        obj = obj.contents().filter(function() {
                            return this.nodeType == 3
                        })[0];
                        return obj.nodeValue
                    }
                },
                set_text: function(obj, val, lang) {
                    obj = this._get_node(obj) || this.data.ui.last_selected;
                    if (!obj.size())
                        return false;
                    var langs = this._get_settings().languages,
                        s = this._get_settings().core.html_titles,
                        tmp;
                    if ($.isArray(langs) && langs.length) {
                        lang = lang && $.inArray(lang, langs) != -1 ? lang : this.data.languages.current_language;
                        obj = obj.children("a." + lang)
                    } else
                        obj = obj.children("a:eq(0)");
                    if (s) {
                        tmp = obj.children("INS").clone();
                        obj.html(val).prepend(tmp);
                        this.__callback({ obj: obj, name: val, lang: lang });
                        return true
                    } else {
                        obj = obj.contents().filter(function() {
                            return this.nodeType == 3
                        })[0];
                        this.__callback({ obj: obj, name: val, lang: lang });
                        return obj.nodeValue = val
                    }
                },
                _load_css: function() {
                    var langs = this._get_settings().languages,
                        str = "/* languages css */",
                        selector = ".jstree-" + this.get_index() + " a",
                        ln;
                    if ($.isArray(langs) && langs.length) {
                        this.data.languages.current_language = langs[0];
                        for (ln = 0; ln < langs.length; ln++) {
                            str += selector + "." + langs[ln] + " {";
                            if (langs[ln] != this.data.languages.current_language)
                                str += " display:none; ";
                            str += " } "
                        }
                        this.data.languages.language_css = $.vakata.css
                            .add_sheet({ str: str, title: "jstree-languages" })
                    }
                },
                create_node: function(obj, position, js, callback) {
                    var t = this.__call_old(true,
                        obj,
                        position,
                        js,
                        function(t) {
                            var langs = this._get_settings().languages,
                                a = t.children("a"),
                                ln;
                            if ($.isArray(langs) && langs.length) {
                                for (ln = 0; ln < langs.length; ln++)
                                    !a.is("." + langs[ln]) &&
                                        t.append(a.eq(0).clone().removeClass(langs.join(" ")).addClass(langs[ln]));
                                a.not("." + langs.join(", .")).remove()
                            }
                            callback && callback.call(this, t)
                        });
                    return t
                }
            }
        })
    })(jQuery);
    (function($) {
        $.jstree.plugin("cookies",
        {
            __init: function() {
                if (typeof $.cookie === "undefined")
                    throw"jsTree cookie: jQuery cookie plugin not included.";
                var s = this._get_settings().cookies,
                    tmp;
                if (!!s.save_loaded) {
                    tmp = $.cookie(s.save_loaded);
                    if (tmp && tmp.length)
                        this.data.core.to_load = tmp.split(",")
                }
                if (!!s.save_opened) {
                    tmp = $.cookie(s.save_opened);
                    if (tmp && tmp.length)
                        this.data.core.to_open = tmp.split(",")
                }
                if (!!s.save_selected) {
                    tmp = $.cookie(s.save_selected);
                    if (tmp && tmp.length && this.data.ui)
                        this.data.ui.to_select = tmp.split(",")
                }
                this.get_container().one((this.data.ui ? "reselect" : "reopen") + ".jstree",
                    $.proxy(function() {
                            this.get_container()
                                .bind("open_node.jstree close_node.jstree select_node.jstree deselect_node.jstree",
                                    $.proxy(function(e) {
                                            this._get_settings().cookies.auto_save &&
                                                this
                                                .save_cookie((e.handleObj.namespace + e.handleObj.type)
                                                    .replace("jstree", ""))
                                        },
                                        this))
                        },
                        this))
            },
            defaults: {
                save_loaded: "jstree_load",
                save_opened: "jstree_open",
                save_selected: "jstree_select",
                auto_save: true,
                cookie_options: {}
            },
            _fn: {
                save_cookie: function(c) {
                    if (this.data.core.refreshing)
                        return;
                    var s = this._get_settings().cookies;
                    if (!c) {
                        if (s.save_loaded) {
                            this.save_loaded();
                            $.cookie(s.save_loaded, this.data.core.to_load.join(","), s.cookie_options)
                        }
                        if (s.save_opened) {
                            this.save_opened();
                            $.cookie(s.save_opened, this.data.core.to_open.join(","), s.cookie_options)
                        }
                        if (s.save_selected && this.data.ui) {
                            this.save_selected();
                            $.cookie(s.save_selected, this.data.ui.to_select.join(","), s.cookie_options)
                        }
                        return
                    }
                    switch (c) {
                    case "open_node":
                    case "close_node":
                        if (!!s.save_opened) {
                            this.save_opened();
                            $.cookie(s.save_opened, this.data.core.to_open.join(","), s.cookie_options)
                        }
                        if (!!s.save_loaded) {
                            this.save_loaded();
                            $.cookie(s.save_loaded, this.data.core.to_load.join(","), s.cookie_options)
                        }
                        break;
                    case "select_node":
                    case "deselect_node":
                        if (!!s.save_selected && this.data.ui) {
                            this.save_selected();
                            $.cookie(s.save_selected, this.data.ui.to_select.join(","), s.cookie_options)
                        }
                        break
                    }
                }
            }
        })
    })(jQuery);
    (function($) {
        $.jstree.plugin("sort",
        {
            __init: function() {
                this.get_container().bind("load_node.jstree",
                    $.proxy(function(e, data) {
                            var obj = this._get_node(data.rslt.obj);
                            obj = obj === -1 ? this.get_container().children("ul") : obj.children("ul");
                            this.sort(obj)
                        },
                        this)).bind("rename_node.jstree create_node.jstree create.jstree",
                    $.proxy(function(e, data) {
                            this.sort(data.rslt.obj.parent())
                        },
                        this)).bind("move_node.jstree",
                    $.proxy(function(e, data) {
                            var m = data.rslt.np == -1 ? this.get_container() : data.rslt.np;
                            this.sort(m.children("ul"))
                        },
                        this))
            },
            defaults: function(a, b) {
                return this.get_text(a) > this.get_text(b) ? 1 : -1
            },
            _fn: {
                sort: function(obj) {
                    var s = this._get_settings().sort,
                        t = this;
                    obj.append($.makeArray(obj.children("li")).sort($.proxy(s, t)));
                    obj.find("> li > ul").each(function() {
                        t.sort($(this))
                    });
                    this.clean_node(obj)
                }
            }
        })
    })(jQuery);
    (function($) {
        $.expr[":"].jstree_contains = function(a, i, m) {
            return (a.textContent || a.innerText || "").toLowerCase().indexOf(m[3].toLowerCase()) >= 0
        };
        $.expr[":"].jstree_title_contains = function(a, i, m) {
            return (a.getAttribute("title") || "").toLowerCase().indexOf(m[3].toLowerCase()) >= 0
        };
        $.jstree.plugin("search",
        {
            __init: function() {
                this.data.search.str = "";
                this.data.search.result = $();
                this._get_settings().search.show_only_matches &&
                    this.get_container().bind("search.jstree",
                        function(e, data) {
                            $(this).children("ul").find("li").hide().removeClass("jstree-last");
                            data.rslt.nodes.parentsUntil(".jstree").andSelf().show().filter("ul").each(function() {
                                $(this).children("li:visible").eq(-1).addClass("jstree-last")
                            })
                        }).bind("clear_search.jstree",
                        function() {
                            $(this).children("ul").find("li").css("display", "").end().end().jstree("clean_node", -1)
                        })
            },
            defaults: { ajax: false, search_method: "jstree_contains", show_only_matches: false },
            _fn: {
                search: function(str, skip_async) {
                    if ($.trim(str) === "") {
                        this.clear_search();
                        return
                    }
                    var s = this.get_settings().search,
                        t = this,
                        error_func = function() {
                        },
                        success_func = function() {
                        };
                    this.data.search.str = str;
                    if (!skip_async &&
                        s.ajax !== false &&
                        this.get_container_ul().find("li.jstree-closed:not(:has(ul)):eq(0)").length > 0) {
                        this.search.supress_callback = true;
                        error_func = function() {
                        };
                        success_func = function(d, t, x) {
                            var sf = this.get_settings().search.ajax.success;
                            if (sf)
                                d = sf.call(this, d, t, x) || d;
                            this.data.search.to_open = d;
                            this._search_open()
                        };
                        s.ajax.context = this;
                        s.ajax.error = error_func;
                        s.ajax.success = success_func;
                        if ($.isFunction(s.ajax.url))
                            s.ajax.url = s.ajax.url.call(this, str);
                        if ($.isFunction(s.ajax.data))
                            s.ajax.data = s.ajax.data.call(this, str);
                        if (!s.ajax.data)
                            s.ajax.data = { search_string: str };
                        if (!s.ajax.dataType || /^json/.exec(s.ajax.dataType))
                            s.ajax.dataType = "json";
                        $.ajax(s.ajax);
                        return
                    }
                    this.data.search.result.length && this.clear_search();
                    this.data.search.result = this.get_container()
                        .find("a" +
                            (this.data.languages ? "." + this.get_lang() : "") +
                            ":" +
                            s.search_method +
                            "(" +
                            this.data.search.str +
                            ")");
                    this.data.search.result.addClass("jstree-search").parent().parents(".jstree-closed")
                        .each(function() {
                            t.open_node(this, false, true)
                        });
                    this.__callback({ nodes: this.data.search.result, str: str })
                },
                clear_search: function(str) {
                    this.data.search.result.removeClass("jstree-search");
                    this.__callback(this.data.search.result);
                    this.data.search.result = $()
                },
                _search_open: function(is_callback) {
                    var _this = this,
                        done = true,
                        current = [],
                        remaining = [];
                    if (this.data.search.to_open.length) {
                        $.each(this.data.search.to_open,
                            function(i, val) {
                                if (val == "#")
                                    return true;
                                if ($(val).length && $(val).is(".jstree-closed"))
                                    current.push(val);
                                else
                                    remaining.push(val)
                            });
                        if (current.length) {
                            this.data.search.to_open = remaining;
                            $.each(current,
                                function(i, val) {
                                    _this.open_node(val,
                                        function() {
                                            _this._search_open(true)
                                        })
                                });
                            done = false
                        }
                    }
                    done && this.search(this.data.search.str, true)
                }
            }
        })
    })(jQuery);
    (function($) {
        $.vakata.context = {
            hide_on_mouseleave: false,
            cnt: $("<div id='vakata-contextmenu'/>"),
            vis: false,
            tgt: false,
            par: false,
            func: false,
            data: false,
            rtl: false,
            show: function(s, t, x, y, d, p, rtl) {
                $.vakata.context.rtl = !!rtl;
                var html = $.vakata.context.parse(s),
                    h,
                    w;
                if (!html)
                    return;
                $.vakata.context.vis = true;
                $.vakata.context.tgt = t;
                $.vakata.context.par = p || t || null;
                $.vakata.context.data = d || null;
                $.vakata.context.cnt.html(html).css({ visibility: "hidden", display: "block", left: 0, top: 0 });
                $.vakata.context.hide_on_mouseleave &&
                    $.vakata.context.cnt.one("mouseleave",
                        function(e) {
                            $.vakata.context.hide()
                        });
                h = $.vakata.context.cnt.height();
                w = $.vakata.context.cnt.width();
                if (x + w > $(document).width()) {
                    x = $(document).width() - (w + 5);
                    $.vakata.context.cnt.find("li > ul").addClass("right")
                }
                if (y + h > $(document).height()) {
                    y = y - (h + t[0].offsetHeight);
                    $.vakata.context.cnt.find("li > ul").addClass("bottom")
                }
                $.vakata.context.cnt.css({ left: x, top: y }).find("li:has(ul)").bind("mouseenter",
                    function(e) {
                        var w = $(document).width(),
                            h = $(document).height(),
                            ul = $(this).children("ul").show();
                        w !== $(document).width() && ul.toggleClass("right");
                        h !== $(document).height() && ul.toggleClass("bottom")
                    }).bind("mouseleave",
                    function(e) {
                        $(this).children("ul").hide()
                    }).end().css({ visibility: "visible" }).show();
                $(document).triggerHandler("context_show.vakata")
            },
            hide: function() {
                $.vakata.context.vis = false;
                $.vakata.context.cnt.attr("class", "").css({ visibility: "hidden" });
                $(document).triggerHandler("context_hide.vakata")
            },
            parse: function(s, is_callback) {
                if (!s)
                    return false;
                var str = "",
                    tmp = false,
                    was_sep = true;
                if (!is_callback)
                    $.vakata.context.func = {};
                str += "<ul>";
                $.each(s,
                    function(i, val) {
                        if (!val)
                            return true;
                        $.vakata.context.func[i] = val.action;
                        if (!was_sep && val.separator_before)
                            str += "<li class='vakata-separator vakata-separator-before'></li>";
                        was_sep = false;
                        str += "<li class='" +
                            (val._class || "") +
                            (val._disabled ? " jstree-contextmenu-disabled " : "") +
                            "'><ins ";
                        if (val.icon && val.icon.indexOf("/") === -1)
                            str += " class='" + val.icon + "' ";
                        if (val.icon && val.icon.indexOf("/") !== -1)
                            str += " style='background:url(" + val.icon + ") center center no-repeat;' ";
                        str += ">&#160;</ins><a href='#' rel='" + i + "'>";
                        if (val.submenu)
                            str += "<span style='float:" +
                                ($.vakata.context.rtl ? "left" : "right") +
                                ";'>&raquo;</span>";
                        str += val.label + "</a>";
                        if (val.submenu) {
                            tmp = $.vakata.context.parse(val.submenu, true);
                            if (tmp)
                                str += tmp
                        }
                        str += "</li>";
                        if (val.separator_after) {
                            str += "<li class='vakata-separator vakata-separator-after'></li>";
                            was_sep = true
                        }
                    });
                str = str.replace(/<li class\='vakata-separator vakata-separator-after'\><\/li\>$/, "");
                str += "</ul>";
                $(document).triggerHandler("context_parse.vakata");
                return str.length > 10 ? str : false
            },
            exec: function(i) {
                if ($.isFunction($.vakata.context.func[i])) {
                    $.vakata.context.func[i].call($.vakata.context.data, $.vakata.context.par);
                    return true
                } else
                    return false
            }
        };
        $(function() {
            var css_string =
                "#vakata-contextmenu { display:block; visibility:hidden; left:0; top:-200px; position:absolute; margin:0; padding:0; min-width:180px; background:#ebebeb; border:1px solid silver; z-index:10000; *width:180px; } #vakata-contextmenu ul { min-width:180px; *width:180px; } #vakata-contextmenu ul, #vakata-contextmenu li { margin:0; padding:0; list-style-type:none; display:block; } #vakata-contextmenu li { line-height:20px; min-height:20px; position:relative; padding:0px; } #vakata-contextmenu li a { padding:1px 6px; line-height:17px; display:block; text-decoration:none; margin:1px 1px 0 1px; } #vakata-contextmenu li ins { float:left; width:16px; height:16px; text-decoration:none; margin-right:2px; } #vakata-contextmenu li a:hover, #vakata-contextmenu li.vakata-hover > a { background:gray; color:white; } #vakata-contextmenu li ul { display:none; position:absolute; top:-2px; left:100%; background:#ebebeb; border:1px solid gray; } #vakata-contextmenu .right { right:100%; left:auto; } #vakata-contextmenu .bottom { bottom:-1px; top:auto; } #vakata-contextmenu li.vakata-separator { min-height:0; height:1px; line-height:1px; font-size:1px; overflow:hidden; margin:0 2px; background:silver; /* border-top:1px solid #fefefe; */ padding:0; } ";
            $.vakata.css.add_sheet({ str: css_string, title: "vakata" });
            $.vakata.context.cnt.delegate("a",
                "click",
                function(e) {
                    e.preventDefault()
                }).delegate("a",
                "mouseup",
                function(e) {
                    if (!$(this).parent().hasClass("jstree-contextmenu-disabled") &&
                        $.vakata.context.exec($(this).attr("rel")))
                        $.vakata.context.hide();
                    else
                        $(this).blur()
                }).delegate("a",
                "mouseover",
                function() {
                    $.vakata.context.cnt.find(".vakata-hover").removeClass("vakata-hover")
                }).appendTo("body");
            $(document).bind("mousedown",
                function(e) {
                    $.vakata.context.vis && !$.contains($.vakata.context.cnt[0], e.target) && $.vakata.context.hide()
                });
            typeof $.hotkeys !== "undefined" &&
                $(document).bind("keydown",
                    "up",
                    function(e) {
                        if ($.vakata.context.vis) {
                            var o = $.vakata.context.cnt.find("ul:visible").last().children(".vakata-hover")
                                .removeClass("vakata-hover").prevAll("li:not(.vakata-separator)").first();
                            if (!o.length)
                                o = $.vakata.context.cnt.find("ul:visible").last().children("li:not(.vakata-separator)")
                                    .last();
                            o.addClass("vakata-hover");
                            e.stopImmediatePropagation();
                            e.preventDefault()
                        }
                    }).bind("keydown",
                    "down",
                    function(e) {
                        if ($.vakata.context.vis) {
                            var o = $.vakata.context.cnt.find("ul:visible").last().children(".vakata-hover")
                                .removeClass("vakata-hover").nextAll("li:not(.vakata-separator)").first();
                            if (!o.length)
                                o = $.vakata.context.cnt.find("ul:visible").last().children("li:not(.vakata-separator)")
                                    .first();
                            o.addClass("vakata-hover");
                            e.stopImmediatePropagation();
                            e.preventDefault()
                        }
                    }).bind("keydown",
                    "right",
                    function(e) {
                        if ($.vakata.context.vis) {
                            $.vakata.context.cnt.find(".vakata-hover").children("ul").show()
                                .children("li:not(.vakata-separator)").removeClass("vakata-hover").first()
                                .addClass("vakata-hover");
                            e.stopImmediatePropagation();
                            e.preventDefault()
                        }
                    }).bind("keydown",
                    "left",
                    function(e) {
                        if ($.vakata.context.vis) {
                            $.vakata.context.cnt.find(".vakata-hover").children("ul").hide()
                                .children(".vakata-separator").removeClass("vakata-hover");
                            e.stopImmediatePropagation();
                            e.preventDefault()
                        }
                    }).bind("keydown",
                    "esc",
                    function(e) {
                        $.vakata.context.hide();
                        e.preventDefault()
                    }).bind("keydown",
                    "space",
                    function(e) {
                        $.vakata.context.cnt.find(".vakata-hover").last().children("a").click();
                        e.preventDefault()
                    })
        });
        $.jstree.plugin("contextmenu",
        {
            __init: function() {
                this.get_container().delegate("a",
                    "contextmenu.jstree",
                    $.proxy(function(e) {
                            e.preventDefault();
                            !$(e.currentTarget).hasClass("jstree-loading") &&
                                this.show_contextmenu(e.currentTarget, e.pageX, e.pageY)
                        },
                        this)).delegate("a",
                    "click.jstree",
                    $.proxy(function(e) {
                            this.data.contextmenu && $.vakata.context.hide()
                        },
                        this)).bind("destroy.jstree",
                    $.proxy(function() {
                            this.data.contextmenu && $.vakata.context.hide()
                        },
                        this));
                $(document).bind("context_hide.vakata",
                    $.proxy(function() {
                            this.data.contextmenu = false
                        },
                        this))
            },
            defaults: {
                select_node: false,
                show_at_node: true,
                items: {
                    create: {
                        separator_before: false,
                        separator_after: true,
                        label: "Create",
                        action: function(obj) {
                            this.create(obj)
                        }
                    },
                    rename: {
                        separator_before: false,
                        separator_after: false,
                        label: "Rename",
                        action: function(obj) {
                            this.rename(obj)
                        }
                    },
                    remove: {
                        separator_before: false,
                        icon: false,
                        separator_after: false,
                        label: "Delete",
                        action: function(obj) {
                            if (this.is_selected(obj))
                                this.remove();
                            else
                                this.remove(obj)
                        }
                    },
                    ccp: {
                        separator_before: true,
                        icon: false,
                        separator_after: false,
                        label: "Edit",
                        action: false,
                        submenu: {
                            cut: {
                                separator_before: false,
                                separator_after: false,
                                label: "Cut",
                                action: function(obj) {
                                    this.cut(obj)
                                }
                            },
                            copy: {
                                separator_before: false,
                                icon: false,
                                separator_after: false,
                                label: "Copy",
                                action: function(obj) {
                                    this.copy(obj)
                                }
                            },
                            paste: {
                                separator_before: false,
                                icon: false,
                                separator_after: false,
                                label: "Paste",
                                action: function(obj) {
                                    this.paste(obj)
                                }
                            }
                        }
                    }
                }
            },
            _fn: {
                show_contextmenu: function(obj, x, y) {
                    obj = this._get_node(obj);
                    var s = this.get_settings().contextmenu,
                        a = obj.children("a:visible:eq(0)"),
                        o = false,
                        i = false;
                    if (s.select_node && this.data.ui && !this.is_selected(obj)) {
                        this.deselect_all();
                        this.select_node(obj, true)
                    }
                    if (s.show_at_node || typeof x === "undefined" || typeof y === "undefined") {
                        o = a.offset();
                        x = o.left;
                        y = o.top + this.data.core.li_height
                    }
                    i = obj.data("jstree") && obj.data("jstree").contextmenu ? obj.data("jstree").contextmenu : s.items;
                    if ($.isFunction(i))
                        i = i.call(this, obj);
                    this.data.contextmenu = true;
                    $.vakata.context.show(i, a, x, y, this, obj, this._get_settings().core.rtl);
                    this.data.themes &&
                        $.vakata.context.cnt.attr("class", "jstree-" + this.data.themes.theme + "-context")
                }
            }
        })
    })(jQuery);
    (function($) {
        $.jstree.plugin("types",
        {
            __init: function() {
                var s = this._get_settings().types;
                this.data.types.attach_to = [];
                this.get_container().bind("init.jstree",
                    $.proxy(function() {
                            var types = s.types,
                                attr = s.type_attr,
                                icons_css = "",
                                _this = this;
                            $.each(types,
                                function(i, tp) {
                                    $.each(tp,
                                        function(k, v) {
                                            !/^(max_depth|max_children|icon|valid_children)$/.test(k) &&
                                                _this.data.types.attach_to.push(k)
                                        });
                                    if (!tp.icon)
                                        return true;
                                    if (tp.icon.image || tp.icon.position) {
                                        if (i == "default")
                                            icons_css += ".jstree-" + _this.get_index() + " a > .jstree-icon { ";
                                        else
                                            icons_css += ".jstree-" +
                                                _this.get_index() +
                                                " li[" +
                                                attr +
                                                '="' +
                                                i +
                                                '"] > a > .jstree-icon { ';
                                        if (tp.icon.image)
                                            icons_css += " background-image:url(" + tp.icon.image + "); ";
                                        if (tp.icon.position)
                                            icons_css += " background-position:" + tp.icon.position + "; ";
                                        else
                                            icons_css += " background-position:0 0; ";
                                        icons_css += "} "
                                    }
                                });
                            icons_css !== "" && $.vakata.css.add_sheet({ str: icons_css, title: "jstree-types" })
                        },
                        this)).bind("before.jstree",
                    $.proxy(function(e, data) {
                            var s,
                                t,
                                o = this._get_settings().types.use_data ? this._get_node(data.args[0]) : false,
                                d = o && o !== -1 && o.length ? o.data("jstree") : false;
                            if (d && d.types && d.types[data.func] === false) {
                                e.stopImmediatePropagation();
                                return false
                            }
                            if ($.inArray(data.func, this.data.types.attach_to) !== -1) {
                                if (!data.args[0] || !data.args[0].tagName && !data.args[0].jquery)
                                    return;
                                s = this._get_settings().types.types;
                                t = this._get_type(data.args[0]);
                                if ((s[t] && typeof s[t][data.func] !== "undefined" ||
                                        s["default"] && typeof s["default"][data.func] !== "undefined") &&
                                    this._check(data.func, data.args[0]) === false) {
                                    e.stopImmediatePropagation();
                                    return false
                                }
                            }
                        },
                        this));
                is_ie6 &&
                    this.get_container().bind("load_node.jstree set_type.jstree",
                        $.proxy(function(e, data) {
                                var r = data && data.rslt && data.rslt.obj && data.rslt.obj !== -1
                                        ? this._get_node(data.rslt.obj).parent()
                                        : this.get_container_ul(),
                                    c = false,
                                    s = this._get_settings().types;
                                $.each(s.types,
                                    function(i, tp) {
                                        if (tp.icon && (tp.icon.image || tp.icon.position)) {
                                            c = i === "default"
                                                ? r.find("li > a > .jstree-icon")
                                                : r.find("li[" + s.type_attr + "='" + i + "'] > a > .jstree-icon");
                                            tp.icon.image && c.css("backgroundImage", "url(" + tp.icon.image + ")");
                                            c.css("backgroundPosition", tp.icon.position || "0 0")
                                        }
                                    })
                            },
                            this))
            },
            defaults: {
                max_children: -1,
                max_depth: -1,
                valid_children: "all",
                use_data: false,
                type_attr: "rel",
                types: { "default": { max_children: -1, max_depth: -1, valid_children: "all" } }
            },
            _fn: {
                _types_notify: function(n, data) {
                    data.type && this._get_settings().types.use_data && this.set_type(data.type, n)
                },
                _get_type: function(obj) {
                    obj = this._get_node(obj);
                    return !obj || !obj.length ? false : obj.attr(this._get_settings().types.type_attr) || "default"
                },
                set_type: function(str, obj) {
                    obj = this._get_node(obj);
                    var ret = !obj.length || !str ? false : obj.attr(this._get_settings().types.type_attr, str);
                    ret && this.__callback({ obj: obj, type: str });
                    return ret
                },
                _check: function(rule, obj, opts) {
                    obj = this._get_node(obj);
                    var v = false,
                        t = this._get_type(obj),
                        d = 0,
                        _this = this,
                        s = this._get_settings().types,
                        data = false;
                    if (obj === -1)
                        if (!!s[rule])
                            v = s[rule];
                        else
                            return;
                    else {
                        if (t === false)
                            return;
                        data = s.use_data ? obj.data("jstree") : false;
                        if (data && data.types && typeof data.types[rule] !== "undefined")
                            v = data.types[rule];
                        else if (!!s.types[t] && typeof s.types[t][rule] !== "undefined")
                            v = s.types[t][rule];
                        else if (!!s.types["default"] && typeof s.types["default"][rule] !== "undefined")
                            v = s.types["default"][rule]
                    }
                    if ($.isFunction(v))
                        v = v.call(this, obj);
                    rule === "max_depth" &&
                        obj !== -1 &&
                        opts !== false &&
                        s.max_depth !== -2 &&
                        v !== 0 &&
                        obj.children("a:eq(0)").parentsUntil(".jstree", "li").each(function(i) {
                            if (s.max_depth !== -1 && s.max_depth - (i + 1) <= 0) {
                                v = 0;
                                return false
                            }
                            d = i === 0 ? v : _this._check(rule, this, false);
                            if (d !== -1 && d - (i + 1) <= 0) {
                                v = 0;
                                return false
                            }
                            if (d >= 0 && (d - (i + 1) < v || v < 0))
                                v = d - (i + 1);
                            if (s.max_depth >= 0 && (s.max_depth - (i + 1) < v || v < 0))
                                v = s.max_depth - (i + 1)
                        });
                    return v
                },
                check_move: function() {
                    if (!this.__call_old())
                        return false;
                    var m = this._get_move(),
                        s = m.rt._get_settings().types,
                        mc = m.rt._check("max_children", m.cr),
                        md = m.rt._check("max_depth", m.cr),
                        vc = m.rt._check("valid_children", m.cr),
                        ch = 0,
                        d = 1,
                        t;
                    if (vc === "none")
                        return false;
                    if ($.isArray(vc) && m.ot && m.ot._get_type) {
                        m.o.each(function() {
                            if ($.inArray(m.ot._get_type(this), vc) === -1) {
                                d = false;
                                return false
                            }
                        });
                        if (d === false)
                            return false
                    }
                    if (s.max_children !== -2 && mc !== -1) {
                        ch = m.cr === -1
                            ? this.get_container().find("> ul > li").not(m.o).length
                            : m.cr.find("> ul > li").not(m.o).length;
                        if (ch + m.o.length > mc)
                            return false
                    }
                    if (s.max_depth !== -2 && md !== -1) {
                        d = 0;
                        if (md === 0)
                            return false;
                        if (typeof m.o.d === "undefined") {
                            t = m.o;
                            while (t.length > 0) {
                                t = t.find("> ul > li");
                                d++
                            }
                            m.o.d = d
                        }
                        if (md - m.o.d < 0)
                            return false
                    }
                    return true
                },
                create_node: function(obj, position, js, callback, is_loaded, skip_check) {
                    if (!skip_check && (is_loaded || this._is_loaded(obj))) {
                        var p = typeof position == "string" && position.match(/^before|after$/i) && obj !== -1
                                ? this._get_parent(obj)
                                : this._get_node(obj),
                            s = this._get_settings().types,
                            mc = this._check("max_children", p),
                            md = this._check("max_depth", p),
                            vc = this._check("valid_children", p),
                            ch;
                        if (typeof js === "string")
                            js = { data: js };
                        if (!js)
                            js = {};
                        if (vc === "none")
                            return false;
                        if ($.isArray(vc))
                            if (!js.attr || !js.attr[s.type_attr]) {
                                if (!js.attr)
                                    js.attr = {};
                                js.attr[s.type_attr] = vc[0]
                            } else if ($.inArray(js.attr[s.type_attr], vc) === -1)
                                return false;
                        if (s.max_children !== -2 && mc !== -1) {
                            ch = p === -1 ? this.get_container().find("> ul > li").length : p.find("> ul > li").length;
                            if (ch + 1 > mc)
                                return false
                        }
                        if (s.max_depth !== -2 && md !== -1 && md - 1 < 0)
                            return false
                    }
                    return this.__call_old(true, obj, position, js, callback, is_loaded, skip_check)
                }
            }
        })
    })(jQuery);
    (function($) {
        $.jstree.plugin("html_data",
        {
            __init: function() {
                this.data.html_data.original_container_html = this.get_container().find(" > ul > li").clone(true);
                this.data.html_data.original_container_html.find("li").andSelf().contents().filter(function() {
                    return this.nodeType == 3
                }).remove()
            },
            defaults: { data: false, ajax: false, correct_state: true },
            _fn: {
                load_node: function(obj, s_call, e_call) {
                    var _this = this;
                    this.load_node_html(obj,
                        function() {
                            _this.__callback({ obj: _this._get_node(obj) });
                            s_call.call(this)
                        },
                        e_call)
                },
                _is_loaded: function(obj) {
                    obj = this._get_node(obj);
                    return obj == -1 ||
                        !obj ||
                        !this._get_settings().html_data.ajax && !$.isFunction(this._get_settings().html_data.data) ||
                        obj.is(".jstree-open, .jstree-leaf") ||
                        obj.children("ul").children("li").size() > 0
                },
                load_node_html: function(obj, s_call, e_call) {
                    var d,
                        s = this.get_settings().html_data,
                        error_func = function() {
                        },
                        success_func = function() {
                        };
                    obj = this._get_node(obj);
                    if (obj && obj !== -1)
                        if (obj.data("jstree_is_loading"))
                            return;
                        else
                            obj.data("jstree_is_loading", true);
                    switch (!0) {
                    case $.isFunction(s.data):
                        s.data.call(this,
                            obj,
                            $.proxy(function(d) {
                                    if (d && d !== "" && d.toString && d.toString().replace(/^[\s\n]+$/, "") !== "") {
                                        d = $(d);
                                        if (!d.is("ul"))
                                            d = $("<ul/>").append(d);
                                        if (obj == -1 || !obj)
                                            this.get_container().children("ul").empty().append(d.children())
                                                .find("li, a")
                                                .filter(function() {
                                                    return !this.firstChild ||
                                                        !this.firstChild.tagName ||
                                                        this.firstChild.tagName !== "INS"
                                                }).prepend("<ins class='jstree-icon'>&#160;</ins>").end().filter("a")
                                                .children("ins:first-child").not(".jstree-icon")
                                                .addClass("jstree-icon");
                                        else {
                                            obj.children("a.jstree-loading").removeClass("jstree-loading");
                                            obj.append(d).children("ul").find("li, a").filter(function() {
                                                    return !this.firstChild ||
                                                        !this.firstChild.tagName ||
                                                        this.firstChild.tagName !== "INS"
                                                }).prepend("<ins class='jstree-icon'>&#160;</ins>").end().filter("a")
                                                .children("ins:first-child").not(".jstree-icon")
                                                .addClass("jstree-icon");
                                            obj.removeData("jstree_is_loading")
                                        }
                                        this.clean_node(obj);
                                        s_call && s_call.call(this)
                                    } else if (obj && obj !== -1) {
                                        obj.children("a.jstree-loading").removeClass("jstree-loading");
                                        obj.removeData("jstree_is_loading");
                                        if (s.correct_state) {
                                            this.correct_state(obj);
                                            s_call && s_call.call(this)
                                        }
                                    } else if (s.correct_state) {
                                        this.get_container().children("ul").empty();
                                        s_call && s_call.call(this)
                                    }
                                },
                                this));
                        break;
                    case !s.data && !s.ajax:
                        if (!obj || obj == -1) {
                            this.get_container().children("ul").empty()
                                .append(this.data.html_data.original_container_html).find("li, a").filter(function() {
                                    return !this.firstChild ||
                                        !this.firstChild.tagName ||
                                        this.firstChild.tagName !== "INS"
                                }).prepend("<ins class='jstree-icon'>&#160;</ins>").end().filter("a")
                                .children("ins:first-child").not(".jstree-icon").addClass("jstree-icon");
                            this.clean_node()
                        }
                        s_call && s_call.call(this);
                        break;
                    case !!s.data && !s.ajax || !!s.data && !!s.ajax && (!obj || obj === -1):
                        if (!obj || obj == -1) {
                            d = $(s.data);
                            if (!d.is("ul"))
                                d = $("<ul/>").append(d);
                            this.get_container().children("ul").empty().append(d.children()).find("li, a")
                                .filter(function() {
                                    return !this.firstChild ||
                                        !this.firstChild.tagName ||
                                        this.firstChild.tagName !== "INS"
                                }).prepend("<ins class='jstree-icon'>&#160;</ins>").end().filter("a")
                                .children("ins:first-child").not(".jstree-icon").addClass("jstree-icon");
                            this.clean_node()
                        }
                        s_call && s_call.call(this);
                        break;
                    case !s.data && !!s.ajax || !!s.data && !!s.ajax && obj && obj !== -1:
                        obj = this._get_node(obj);
                        error_func = function(x, t, e) {
                            var ef = this.get_settings().html_data.ajax.error;
                            ef && ef.call(this, x, t, e);
                            if (obj != -1 && obj.length) {
                                obj.children("a.jstree-loading").removeClass("jstree-loading");
                                obj.removeData("jstree_is_loading");
                                t === "success" && s.correct_state && this.correct_state(obj)
                            } else
                                t === "success" && s.correct_state && this.get_container().children("ul").empty();
                            e_call && e_call.call(this)
                        };
                        success_func = function(d, t, x) {
                            var sf = this.get_settings().html_data.ajax.success;
                            if (sf)
                                d = sf.call(this, d, t, x) || d;
                            if (d === "" || d && d.toString && d.toString().replace(/^[\s\n]+$/, "") === "")
                                return error_func.call(this, x, t, "");
                            if (d) {
                                d = $(d);
                                if (!d.is("ul"))
                                    d = $("<ul/>").append(d);
                                if (obj == -1 || !obj)
                                    this.get_container().children("ul").empty().append(d.children()).find("li, a")
                                        .filter(function() {
                                            return !this.firstChild ||
                                                !this.firstChild.tagName ||
                                                this.firstChild.tagName !== "INS"
                                        }).prepend("<ins class='jstree-icon'>&#160;</ins>").end().filter("a")
                                        .children("ins:first-child").not(".jstree-icon").addClass("jstree-icon");
                                else {
                                    obj.children("a.jstree-loading").removeClass("jstree-loading");
                                    obj.append(d).children("ul").find("li, a").filter(function() {
                                            return !this.firstChild ||
                                                !this.firstChild.tagName ||
                                                this.firstChild.tagName !== "INS"
                                        }).prepend("<ins class='jstree-icon'>&#160;</ins>").end().filter("a")
                                        .children("ins:first-child").not(".jstree-icon").addClass("jstree-icon");
                                    obj.removeData("jstree_is_loading")
                                }
                                this.clean_node(obj);
                                s_call && s_call.call(this)
                            } else if (obj && obj !== -1) {
                                obj.children("a.jstree-loading").removeClass("jstree-loading");
                                obj.removeData("jstree_is_loading");
                                if (s.correct_state) {
                                    this.correct_state(obj);
                                    s_call && s_call.call(this)
                                }
                            } else if (s.correct_state) {
                                this.get_container().children("ul").empty();
                                s_call && s_call.call(this)
                            }
                        };
                        s.ajax.context = this;
                        s.ajax.error = error_func;
                        s.ajax.success = success_func;
                        if (!s.ajax.dataType)
                            s.ajax.dataType = "html";
                        if ($.isFunction(s.ajax.url))
                            s.ajax.url = s.ajax.url.call(this, obj);
                        if ($.isFunction(s.ajax.data))
                            s.ajax.data = s.ajax.data.call(this, obj);
                        $.ajax(s.ajax);
                        break
                    }
                }
            }
        });
        $.jstree.defaults.plugins.push("html_data")
    })(jQuery);
    (function($) {
        $.jstree.plugin("themeroller",
        {
            __init: function() {
                var s = this._get_settings().themeroller;
                this.get_container().addClass("ui-widget-content").addClass("jstree-themeroller").delegate("a",
                    "mouseenter.jstree",
                    function(e) {
                        !$(e.currentTarget).hasClass("jstree-loading") && $(this).addClass(s.item_h)
                    }).delegate("a",
                    "mouseleave.jstree",
                    function() {
                        $(this).removeClass(s.item_h)
                    }).bind("init.jstree",
                    $.proxy(function(e, data) {
                            data.inst.get_container().find("> ul > li > .jstree-loading > ins")
                                .addClass("ui-icon-refresh");
                            this._themeroller(data.inst.get_container().find("> ul > li"))
                        },
                        this)).bind("open_node.jstree create_node.jstree",
                    $.proxy(function(e, data) {
                            this._themeroller(data.rslt.obj)
                        },
                        this)).bind("loaded.jstree refresh.jstree",
                    $.proxy(function(e) {
                            this._themeroller()
                        },
                        this)).bind("close_node.jstree",
                    $.proxy(function(e, data) {
                            this._themeroller(data.rslt.obj)
                        },
                        this)).bind("delete_node.jstree",
                    $.proxy(function(e, data) {
                            this._themeroller(data.rslt.parent)
                        },
                        this)).bind("correct_state.jstree",
                    $.proxy(function(e, data) {
                            data.rslt.obj.children("ins.jstree-icon")
                                .removeClass(s.opened + " " + s.closed + " ui-icon")
                                .end().find("> a > ins.ui-icon").filter(function() {
                                    return this.className.toString().replace(s.item_clsd, "").replace(s.item_open, "")
                                        .replace(s.item_leaf, "").indexOf("ui-icon-") ===
                                        -1
                                }).removeClass(s.item_open + " " + s.item_clsd)
                                .addClass(s.item_leaf || "jstree-no-icon")
                        },
                        this)).bind("select_node.jstree",
                    $.proxy(function(e, data) {
                            data.rslt.obj.children("a").addClass(s.item_a)
                        },
                        this)).bind("deselect_node.jstree deselect_all.jstree",
                    $.proxy(function(e, data) {
                            this.get_container().find("a." + s.item_a).removeClass(s.item_a).end()
                                .find("a.jstree-clicked")
                                .addClass(s.item_a)
                        },
                        this)).bind("dehover_node.jstree",
                    $.proxy(function(e, data) {
                            data.rslt.obj.children("a").removeClass(s.item_h)
                        },
                        this)).bind("hover_node.jstree",
                    $.proxy(function(e, data) {
                            this.get_container().find("a." + s.item_h).not(data.rslt.obj).removeClass(s.item_h);
                            data.rslt.obj.children("a").addClass(s.item_h)
                        },
                        this)).bind("move_node.jstree",
                    $.proxy(function(e, data) {
                            this._themeroller(data.rslt.o);
                            this._themeroller(data.rslt.op)
                        },
                        this))
            },
            __destroy: function() {
                var s = this._get_settings().themeroller,
                    c = ["ui-icon"];
                $.each(s,
                    function(i, v) {
                        v = v.split(" ");
                        if (v.length)
                            c = c.concat(v)
                    });
                this.get_container().removeClass("ui-widget-content").find("." + c.join(", .")).removeClass(c.join(" "))
            },
            _fn: {
                _themeroller: function(obj) {
                    var s = this._get_settings().themeroller;
                    obj = !obj || obj == -1 ? this.get_container_ul() : this._get_node(obj).parent();
                    obj.find("li.jstree-closed").children("ins.jstree-icon").removeClass(s.opened)
                        .addClass("ui-icon " + s.closed).end().children("a").addClass(s.item)
                        .children("ins.jstree-icon").addClass("ui-icon").filter(function() {
                            return this.className.toString().replace(s.item_clsd, "").replace(s.item_open, "")
                                .replace(s.item_leaf, "").indexOf("ui-icon-") ===
                                -1
                        }).removeClass(s.item_leaf + " " + s.item_open).addClass(s.item_clsd || "jstree-no-icon").end()
                        .end().end().end().find("li.jstree-open").children("ins.jstree-icon").removeClass(s.closed)
                        .addClass("ui-icon " + s.opened).end().children("a").addClass(s.item)
                        .children("ins.jstree-icon").addClass("ui-icon").filter(function() {
                            return this.className.toString().replace(s.item_clsd, "").replace(s.item_open, "")
                                .replace(s.item_leaf, "").indexOf("ui-icon-") ===
                                -1
                        }).removeClass(s.item_leaf + " " + s.item_clsd).addClass(s.item_open || "jstree-no-icon").end()
                        .end().end().end().find("li.jstree-leaf").children("ins.jstree-icon")
                        .removeClass(s.closed + " ui-icon " + s.opened).end().children("a").addClass(s.item)
                        .children("ins.jstree-icon").addClass("ui-icon").filter(function() {
                            return this.className.toString().replace(s.item_clsd, "").replace(s.item_open, "")
                                .replace(s.item_leaf, "").indexOf("ui-icon-") ===
                                -1
                        }).removeClass(s.item_clsd + " " + s.item_open).addClass(s.item_leaf || "jstree-no-icon")
                }
            },
            defaults: {
                opened: "ui-icon-triangle-1-se",
                closed: "ui-icon-triangle-1-e",
                item: "ui-state-default",
                item_h: "ui-state-hover",
                item_a: "ui-state-active",
                item_open: "ui-icon-folder-open",
                item_clsd: "ui-icon-folder-collapsed",
                item_leaf: "ui-icon-document"
            }
        });
        $(function() {
            var css_string =
                ".jstree-themeroller .ui-icon { overflow:visible; } .jstree-themeroller a { padding:0 2px; } .jstree-themeroller .jstree-no-icon { display:none; }";
            $.vakata.css.add_sheet({ str: css_string, title: "jstree" })
        })
    })(jQuery);
    (function($) {
        $.jstree.plugin("unique",
        {
            __init: function() {
                this.get_container().bind("before.jstree",
                    $.proxy(function(e, data) {
                            var nms = [],
                                res = true,
                                p,
                                t;
                            if (data.func == "move_node")
                                if (data.args[4] === true)
                                    if (data.args[0].o && data.args[0].o.length) {
                                        data.args[0].o.children("a").each(function() {
                                            nms.push($(this).text().replace(/^\s+/g, ""))
                                        });
                                        res = this
                                            ._check_unique(nms,
                                                data.args[0].np.find("> ul > li").not(data.args[0].o),
                                                "move_node")
                                    }
                            if (data.func == "create_node")
                                if (data.args[4] || this._is_loaded(data.args[0])) {
                                    p = this._get_node(data.args[0]);
                                    if (data.args[1] && (data.args[1] === "before" || data.args[1] === "after")) {
                                        p = this._get_parent(data.args[0]);
                                        if (!p || p === -1)
                                            p = this.get_container()
                                    }
                                    if (typeof data.args[2] === "string")
                                        nms.push(data.args[2]);
                                    else if (!data.args[2] || !data.args[2].data)
                                        nms.push(this._get_string("new_node"));
                                    else
                                        nms.push(data.args[2].data);
                                    res = this._check_unique(nms, p.find("> ul > li"), "create_node")
                                }
                            if (data.func == "rename_node") {
                                nms.push(data.args[1]);
                                t = this._get_node(data.args[0]);
                                p = this._get_parent(t);
                                if (!p || p === -1)
                                    p = this.get_container();
                                res = this._check_unique(nms, p.find("> ul > li").not(t), "rename_node")
                            }
                            if (!res) {
                                e.stopPropagation();
                                return false
                            }
                        },
                        this))
            },
            defaults: { error_callback: $.noop },
            _fn: {
                _check_unique: function(nms, p, func) {
                    var cnms = [];
                    p.children("a").each(function() {
                        cnms.push($(this).text().replace(/^\s+/g, ""))
                    });
                    if (!cnms.length || !nms.length)
                        return true;
                    cnms = cnms.sort().join(",,").replace(/(,|^)([^,]+)(,,\2)+(,|$)/g, "$1$2$4").replace(/,,+/g, ",")
                        .replace(/,$/, "").split(",");
                    if (cnms.length + nms.length !=
                        cnms.concat(nms).sort().join(",,").replace(/(,|^)([^,]+)(,,\2)+(,|$)/g, "$1$2$4")
                        .replace(/,,+/g, ",").replace(/,$/, "").split(",").length) {
                        this._get_settings().unique.error_callback.call(null, nms, p, func);
                        return false
                    }
                    return true
                },
                check_move: function() {
                    if (!this.__call_old())
                        return false;
                    var p = this._get_move(),
                        nms = [];
                    if (p.o && p.o.length) {
                        p.o.children("a").each(function() {
                            nms.push($(this).text().replace(/^\s+/g, ""))
                        });
                        return this._check_unique(nms, p.np.find("> ul > li").not(p.o), "check_move")
                    }
                    return true
                }
            }
        })
    })(jQuery);
    (function($) {
        $.jstree.plugin("wholerow",
        {
            __init: function() {
                if (!this.data.ui)
                    throw"jsTree wholerow: jsTree UI plugin not included.";
                this.data.wholerow.html = false;
                this.data.wholerow.to = false;
                this.get_container().bind("init.jstree",
                        $.proxy(function(e, data) {
                                this._get_settings().core.animation = 0
                            },
                            this)).bind("open_node.jstree create_node.jstree clean_node.jstree loaded.jstree",
                        $.proxy(function(e, data) {
                                this._prepare_wholerow_span(data && data.rslt && data.rslt.obj ? data.rslt.obj : -1)
                            },
                            this))
                    .bind("search.jstree clear_search.jstree reopen.jstree after_open.jstree after_close.jstree create_node.jstree delete_node.jstree clean_node.jstree",
                        $.proxy(function(e, data) {
                                this.data.to && clearTimeout(this.data.to);
                                this.data.to = setTimeout(function(t, o) {
                                        return function() {
                                            t._prepare_wholerow_ul(o)
                                        }
                                    }(this, data && data.rslt && data.rslt.obj ? data.rslt.obj : -1),
                                    0)
                            },
                            this)).bind("deselect_all.jstree",
                        $.proxy(function(e, data) {
                                this.get_container().find(" > .jstree-wholerow .jstree-clicked")
                                    .removeClass("jstree-clicked " +
                                        (this.data.themeroller ? this._get_settings().themeroller.item_a : ""))
                            },
                            this)).bind("select_node.jstree deselect_node.jstree ",
                        $.proxy(function(e, data) {
                                data.rslt.obj.each(function() {
                                    var ref = data.inst.get_container()
                                        .find(" > .jstree-wholerow li:visible:eq(" +
                                            parseInt(($(this).offset().top -
                                                    data.inst.get_container().offset().top +
                                                    data.inst.get_container()[0].scrollTop) /
                                                data.inst.data.core.li_height,
                                                10) +
                                            ")");
                                    ref.children("a").attr("class", data.rslt.obj.children("a").attr("class"))
                                })
                            },
                            this)).bind("hover_node.jstree dehover_node.jstree",
                        $.proxy(function(e, data) {
                                this.get_container().find(" > .jstree-wholerow .jstree-hovered")
                                    .removeClass("jstree-hovered " +
                                        (this.data.themeroller ? this._get_settings().themeroller.item_h : ""));
                                if (e.type === "hover_node") {
                                    var ref = this.get_container()
                                        .find(" > .jstree-wholerow li:visible:eq(" +
                                            parseInt((data.rslt.obj.offset().top -
                                                    this.get_container().offset().top +
                                                    this.get_container()[0].scrollTop) /
                                                this.data.core.li_height,
                                                10) +
                                            ")");
                                    ref.children("a").attr("class",
                                        data.rslt.obj.children(".jstree-hovered").attr("class"))
                                }
                            },
                            this)).delegate(".jstree-wholerow-span, ins.jstree-icon, li",
                        "click.jstree",
                        function(e) {
                            var n = $(e.currentTarget);
                            if (e.target.tagName === "A" ||
                                e.target.tagName === "INS" && n.closest("li").is(".jstree-open, .jstree-closed"))
                                return;
                            n.closest("li").children("a:visible:eq(0)").click();
                            e.stopImmediatePropagation()
                        }).delegate("li",
                        "mouseover.jstree",
                        $.proxy(function(e) {
                                e.stopImmediatePropagation();
                                if ($(e.currentTarget).children(".jstree-hovered, .jstree-clicked").length)
                                    return false;
                                this.hover_node(e.currentTarget);
                                return false
                            },
                            this)).delegate("li",
                        "mouseleave.jstree",
                        $.proxy(function(e) {
                                if ($(e.currentTarget).children("a").hasClass("jstree-hovered").length)
                                    return;
                                this.dehover_node(e.currentTarget)
                            },
                            this));
                (is_ie7 || is_ie6) &&
                    $.vakata.css.add_sheet({
                        str: ".jstree-" + this.get_index() + " { position:relative; } ",
                        title: "jstree"
                    })
            },
            defaults: {},
            __destroy: function() {
                this.get_container().children(".jstree-wholerow").remove();
                this.get_container().find(".jstree-wholerow-span").remove()
            },
            _fn: {
                _prepare_wholerow_span: function(obj) {
                    obj = !obj || obj == -1 ? this.get_container().find("> ul > li") : this._get_node(obj);
                    if (obj === false)
                        return;
                    obj.each(function() {
                        $(this).find("li").andSelf().each(function() {
                            var $t = $(this);
                            if ($t.children(".jstree-wholerow-span").length)
                                return true;
                            $t.prepend("<span class='jstree-wholerow-span' style='width:" +
                                $t.parentsUntil(".jstree", "li").length * 18 +
                                "px;'>&#160;</span>")
                        })
                    })
                },
                _prepare_wholerow_ul: function() {
                    var o = this.get_container().children("ul").eq(0),
                        h = o.html();
                    o.addClass("jstree-wholerow-real");
                    if (this.data.wholerow.last_html !== h) {
                        this.data.wholerow.last_html = h;
                        this.get_container().children(".jstree-wholerow").remove();
                        this.get_container().append(o.clone().removeClass("jstree-wholerow-real")
                            .wrapAll("<div class='jstree-wholerow'/>").parent().width(o.parent()[0].scrollWidth)
                            .css("top", (o.height() + (is_ie7 ? 5 : 0)) * -1).find("li[id]").each(function() {
                                this.removeAttribute("id")
                            }).end())
                    }
                }
            }
        });
        $(function() {
            var css_string =
                ".jstree .jstree-wholerow-real { position:relative; z-index:1; } .jstree .jstree-wholerow-real li { cursor:pointer; } .jstree .jstree-wholerow-real a { border-left-color:transparent !important; border-right-color:transparent !important; } .jstree .jstree-wholerow { position:relative; z-index:0; height:0; } .jstree .jstree-wholerow ul, .jstree .jstree-wholerow li { width:100%; } .jstree .jstree-wholerow, .jstree .jstree-wholerow ul, .jstree .jstree-wholerow li, .jstree .jstree-wholerow a { margin:0 !important; padding:0 !important; } .jstree .jstree-wholerow, .jstree .jstree-wholerow ul, .jstree .jstree-wholerow li { background:transparent !important; }.jstree .jstree-wholerow ins, .jstree .jstree-wholerow span, .jstree .jstree-wholerow input { display:none !important; }.jstree .jstree-wholerow a, .jstree .jstree-wholerow a:hover { text-indent:-9999px; !important; width:100%; padding:0 !important; border-right-width:0px !important; border-left-width:0px !important; } .jstree .jstree-wholerow-span { position:absolute; left:0; margin:0px; padding:0; height:18px; border-width:0; padding:0; z-index:0; }";
            if (is_ff2)
                css_string +=
                    ".jstree .jstree-wholerow a { display:block; height:18px; margin:0; padding:0; border:0; } .jstree .jstree-wholerow-real a { border-color:transparent !important; } ";
            if (is_ie7 || is_ie6)
                css_string +=
                    ".jstree .jstree-wholerow, .jstree .jstree-wholerow li, .jstree .jstree-wholerow ul, .jstree .jstree-wholerow a { margin:0; padding:0; line-height:18px; } .jstree .jstree-wholerow a { display:block; height:18px; line-height:18px; overflow:hidden; } ";
            $.vakata.css.add_sheet({ str: css_string, title: "jstree" })
        })
    })(jQuery);
    (function($) {
        var nodeInterface = ["getChildren", "getChildrenCount", "getAttr", "getName", "getProps"],
            validateInterface = function(obj, inter) {
                var valid = true;
                obj = obj || {};
                inter = [].concat(inter);
                $.each(inter,
                    function(i, v) {
                        if (!$.isFunction(obj[v])) {
                            valid = false;
                            return false
                        }
                    });
                return valid
            };
        $.jstree.plugin("model",
        {
            __init: function() {
                if (!this.data.json_data)
                    throw"jsTree model: jsTree json_data plugin not included.";
                this._get_settings().json_data.data = function(n, b) {
                    var obj = n == -1 ? this._get_settings().model.object : n.data("jstree_model");
                    if (!validateInterface(obj, nodeInterface))
                        return b.call(null, false);
                    if (this._get_settings().model.async)
                        obj.getChildren($.proxy(function(data) {
                                this.model_done(data, b)
                            },
                            this));
                    else
                        this.model_done(obj.getChildren(), b)
                }
            },
            defaults: { object: false, id_prefix: false, async: false },
            _fn: {
                model_done: function(data, callback) {
                    var ret = [],
                        s = this._get_settings(),
                        _this = this;
                    if (!$.isArray(data))
                        data = [data];
                    $.each(data,
                        function(i, nd) {
                            var r = nd.getProps() || {};
                            r.attr = nd.getAttr() || {};
                            if (nd.getChildrenCount())
                                r.state = "closed";
                            r.data = nd.getName();
                            if (!$.isArray(r.data))
                                r.data = [r.data];
                            if (_this.data.types && $.isFunction(nd.getType))
                                r.attr[s.types.type_attr] = nd.getType();
                            if (r.attr.id && s.model.id_prefix)
                                r.attr.id = s.model.id_prefix + r.attr.id;
                            if (!r.metadata)
                                r.metadata = {};
                            r.metadata.jstree_model = nd;
                            ret.push(r)
                        });
                    callback.call(null, ret)
                }
            }
        })
    })(jQuery)
})($P_CRM)