
(function(jQuery, undefined) {
    var oldManip = jQuery.fn.domManip,
        tmplItmAtt = "_tmplitem",
        newTmplItems = {},
        appendToTmplItems,
        topTmplItem = { key: 0, data: {} },
        itemKey = 0,
        cloneIndex = 0;

    function newTmplItem(options, parentItem, fn, data) {
        var newItem = {
            data: data || (parentItem ? parentItem.data : {}),
            tmpl: null,
            parent: parentItem || null,
            nodes: [],
            nest: nest
        };
        if (options) {
            jQuery.extend(newItem, options, { nodes: [], parent: parentItem });
            fn = fn || (typeof options.tmpl === "function" ? options.tmpl : null)
        }
        if (fn) {
            newItem.tmpl = fn;
            newItem.content = newItem.tmpl(jQuery, newItem);
            newItem.key = ++itemKey;
            newTmplItems[itemKey] = newItem
        }
        return newItem
    }

    jQuery.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        },
        function(name, original) {
            jQuery.fn[name] = function(selector) {
                var ret = [],
                    insert = jQuery(selector),
                    parent = this.length === 1 && this[0].parentNode;
                appendToTmplItems = newTmplItems || {};
                if (parent && parent.nodeType === 11 && parent.childNodes.length === 1 && insert.length === 1) {
                    insert[original](this[0]);
                    ret = this
                } else {
                    for (var i = 0,
                        l = insert.length;
                        i < l;
                        i++) {
                        cloneIndex = i;
                        var elems = (i > 0 ? this.clone(true) : this).get();
                        jQuery.fn[original].apply(jQuery(insert[i]), elems);
                        ret = ret.concat(elems)
                    }
                    cloneIndex = 0;
                    ret = this.pushStack(ret, name, insert.selector)
                }
                var tmplItems = appendToTmplItems;
                appendToTmplItems = null;
                jQuery.tmpl.complete(tmplItems);
                return ret
            }
        });
    jQuery.fn.extend({
        tmpl: function(data, options, parentItem) {
            return jQuery.tmpl(this[0], data, options, parentItem, parentItem === undefined)
        },
        tmplItem: function() {
            return jQuery.tmplItem(this[0])
        },
        templates: function(name) {
            return jQuery.templates(name, this[0])
        },
        domManip: function(args, table, callback, options) {
            if (args[0].nodeType) {
                var dmArgs = jQuery.makeArray(arguments),
                    argsLength = args.length,
                    i = 0,
                    tmplItem;
                while (i < argsLength && !(tmplItem = jQuery.data(args[i++], "tmplItem")));
                if (argsLength > 1)
                    dmArgs[0] = [jQuery.makeArray(args)];
                if (tmplItem && cloneIndex)
                    dmArgs[2] = function(fragClone) {
                        jQuery.tmpl.afterManip(this, fragClone, callback)
                    };
                oldManip.apply(this, dmArgs)
            } else
                oldManip.apply(this, arguments);
            cloneIndex = 0;
            !appendToTmplItems &&
                jQuery.tmpl.complete(newTmplItems);
            return this
        }
    });
    jQuery.extend({
        tmpl: function(tmpl, data, options, parentItem) {
            var ret,
                topLevel = !parentItem;
            if (topLevel) {
                parentItem = topTmplItem;
                tmpl = jQuery.templates[tmpl] || jQuery.templates(null, tmpl)
            } else if (!tmpl) {
                tmpl = parentItem.tmpl;
                newTmplItems[parentItem.key] = parentItem;
                parentItem.nodes = [];
                return jQuery(build(parentItem, null, parentItem.tmpl(jQuery, parentItem)))
            }
            if (!tmpl)
                return [];
            if (typeof data === "function")
                data = data.call(parentItem.data || {}, parentItem);
            ret = jQuery.isArray(data)
                ? jQuery.map(data,
                    function(dataItem) {
                        return newTmplItem(options, parentItem, tmpl, dataItem)
                    })
                : [newTmplItem(options, parentItem, tmpl, data)];
            return topLevel ? jQuery(build(parentItem, null, ret)) : ret
        },
        tmplItem: function(elem) {
            var tmplItem;
            if (elem instanceof jQuery)
                elem = tmpl[0];
            while (elem &&
                elem.nodeType === 1 &&
                !(tmplItem = jQuery.data(elem, "tmplItem")) &&
                (elem = elem.parentNode));
            return tmplItem || topTmplItem
        },
        templates: function(name, tmpl) {
            if (tmpl) {
                if (typeof tmpl === "string")
                    tmpl = buildTmplFn(tmpl);
                else if (tmpl instanceof jQuery)
                    tmpl = tmpl[0] || {};
                if (tmpl.nodeType)
                    tmpl = jQuery.data(tmpl, "tmpl") || jQuery.data(tmpl, "tmpl", buildTmplFn(tmpl.innerHTML));
                return name ? (jQuery.templates[name] = tmpl) : tmpl
            }
            return typeof name !== "string" ? null : jQuery.templates[name] || jQuery.templates(null, jQuery(name))
        },
        encode: function(text) {
            return ("" + text).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'")
                .join("&#39;")
        }
    });
    jQuery.extend(jQuery.tmpl,
    {
        tags: {
            tmpl: { _default: { $2: "null" }, prefix: "if($notnull_1){_=_.concat($item.nest($1,$2));}" },
            each: {
                _default: { $2: "$index, $value" },
                prefix: "if($notnull_1){$.each($1a,function($2){with(this){",
                suffix: "}});}"
            },
            "if": { prefix: "if(($notnull_1) && $1a){", suffix: "}" },
            "else": { prefix: "}else{" },
            html: { prefix: "if($notnull_1){_.push($1a);}" },
            "=": { _default: { $1: "$data" }, prefix: "if($notnull_1){_.push($.encode($1a));}" }
        },
        complete: function(items) {
            newTmplItems = {}
        },
        afterManip: function(elem, fragClone, callback) {
            var content = fragClone.nodeType === 11
                ? jQuery.makeArray(fragClone.childNodes)
                : fragClone.nodeType === 1 ? [fragClone] : [];
            callback.call(elem, fragClone);
            storeTmplItems(content);
            cloneIndex++
        }
    });

    function build(tmplItem, parent, content) {
        var frag,
            ret = jQuery.map(content,
                function(item) {
                    return typeof item === "string"
                        ? item.replace(/(<\w+)([^>]*)/g, "$1 " + tmplItmAtt + '="' + tmplItem.key + '" $2')
                        : build(item, tmplItem, item.content)
                });
        if (parent)
            return ret;
        ret = ret.join("");
        ret.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/,
            function(all, before, middle, after) {
                frag = jQuery(middle).get();
                storeTmplItems(frag);
                if (before)
                    frag = unencode(before).concat(frag);
                if (after)
                    frag = frag.concat(unencode(after))
            });
        return frag ? frag : unencode(ret)
    }

    function unencode(text) {
        var el = document.createElement("div");
        el.innerHTML = text;
        return jQuery.makeArray(el.childNodes)
    }

    function buildTmplFn(markup) {
        return new Function("jQuery",
            "$item",
            "var $=jQuery,_=[],$data=$item.data;with($data){_.push('" +
            $.trim(markup).replace(/([\\'])/g, "\\$1").replace(/[\r\t\n]/g, " ").replace(/\${([^}]*)}/g, "{{= $1}}")
            .replace(/{{(\/?)(\w+|.)(?:\(((?:.(?!}}))*?)?\))?(?:\s+(.*?)?)?(\((.*?)\))?\s*}}/g,
                function(all, slash, type, fnargs, target, parens, args) {
                    var cmd = jQuery.tmpl.tags[type],
                        def,
                        expr;
                    if (!cmd)
                        throw"Template command not found: " + type;
                    def = cmd._default || [];
                    if (target) {
                        target = unescape(target);
                        args = args ? "," + unescape(args) + ")" : parens ? ")" : "";
                        if (parens && target.indexOf(".") > -1) {
                            target += parens;
                            args = ""
                        }
                        expr = args ? "(" + target + ").call($item" + args : target;
                        exprAutoFnDetect = args
                            ? expr
                            : "(typeof(" + target + ")==='function'?(" + target + ").call($item):(" + target + "))"
                    } else
                        expr = def["$1"] || "null";
                    fnargs = unescape(fnargs);
                    return "');" +
                        cmd[slash ? "suffix" : "prefix"].split("$notnull_1")
                        .join("typeof(" + target + ")!=='undefined' && (" + target + ")!=null").split("$1a")
                        .join(exprAutoFnDetect).split("$1").join(expr).split("$2").join(fnargs
                            ? fnargs.replace(/\s*([^\(]+)\s*(\((.*?)\))?/g,
                                function(all, name, parens, params) {
                                    params = params ? "," + params + ")" : parens ? ")" : "";
                                    return params ? "(" + name + ").call($item" + params : all
                                })
                            : def["$2"] || "") +
                        "_.push('"
                }) +
            "');}return _;")
    }

    function unescape(args) {
        return args ? args.replace(/\\'/g, "'").replace(/\\\\/g, "\\") : null
    }

    function nest(tmpl, data, options) {
        return jQuery.tmpl(typeof tmpl === "string" ? jQuery.templates(tmpl) : tmpl, data, options, this)
    }

    function storeTmplItems(content) {
        for (var keySuffix = "_" + cloneIndex,
            elem,
            elems,
            newClonedItems = {},
            i = 0,
            l = content.length;
            i < l;
            i++) {
            if ((elem = content[i]).nodeType !== 1)
                continue;
            elems = elem.getElementsByTagName("*");
            for (var j = 0,
                m = elems.length;
                j < m;
                j++)
                processItemKey(elems[j]);
            processItemKey(elem)
        }

        function processItemKey(el) {
            var pntKey,
                pntNode = el,
                pntItem,
                pntNodeItem,
                tmplItem,
                key;
            if (key = el.getAttribute(tmplItmAtt)) {
                while ((pntNode = pntNode.parentNode).nodeType === 1 && !(pntKey = pntNode.getAttribute(tmplItmAtt)));
                if (pntKey !== key) {
                    tmplItem = newTmplItems[key];
                    cloneIndex &&
                        cloneTmplItem(key);
                    pntNodeItem = el.parentNode;
                    pntNodeItem = pntNodeItem.nodeType === 11 ? 0 : pntNodeItem.getAttribute(tmplItmAtt) || 0
                }
                el.removeAttribute(tmplItmAtt)
            } else if (cloneIndex && (tmplItem = jQuery.data(el, "tmplItem"))) {
                cloneTmplItem(tmplItem.key);
                newTmplItems[tmplItem.key] = tmplItem;
                pntNodeItem = jQuery.data(el.parentNode, "tmplItem");
                pntNodeItem = pntNodeItem ? pntNodeItem.key : 0
            }
            if (tmplItem) {
                pntItem = tmplItem;
                while (pntItem && pntItem.key != pntNodeItem) {
                    pntItem.nodes.push(el);
                    pntItem = pntItem.parent
                }
                delete tmplItem.content;
                jQuery.data(el, "tmplItem", tmplItem)
            }

            function cloneTmplItem(key) {
                key = key + keySuffix;
                tmplItem = newClonedItems[key] = newClonedItems[key] ||
                    newTmplItem(tmplItem, newTmplItems[tmplItem.parent.key + keySuffix] || tmplItem.parent, null, true)
            }
        }
    }
})(jQuery)