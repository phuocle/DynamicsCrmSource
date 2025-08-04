
Sys.Component.prototype.get_dataContext = function() {
    return this._dataContext || null
};
Sys.Component.prototype.set_dataContext = function(a) {
    this._dataContext = a
};
Sys.UI.Control.prototype.get_dataContext = function() {
    var a = Sys.UI.Control.callBaseMethod(this, "get_dataContext");
    if (!a) {
        var b = this.get_parent();
        if (b)
            a = b.get_dataContext()
    }
    return a
};
Sys.UI.Control.prototype.set_dataContext = Sys.Component.prototype.set_dataContext;
Sys.UI.Behavior.prototype.get_dataContext = function() {
    var a = Sys.UI.Behavior.callBaseMethod(this, "get_dataContext");
    if (!a)
        if (this.control)
            a = this.control.get_dataContext();
        else {
            var c = this.get_element();
            if (c) {
                var b = c.control;
                if (b)
                    a = b.get_dataContext()
            }
        }
    return a
};
Sys.UI.Behavior.prototype.set_dataContext = Sys.Component.prototype.set_dataContext;

function _loadMozillaCompatLayer(a) {
    a.HTMLElement.prototype.__defineGetter__("innerText",
        function() {
            return this.textContent
        });
    a.HTMLElement.prototype.__defineSetter__("innerText",
        function(a) {
            if (a)
                this.innerHTML = c(a);
            else
                this.innerHTML = ""
        });

    function c(e) {
        for (var a = new Sys.StringBuilder,
            f = e.length,
            d,
            c = 0;
            c < f;
            c++) {
            var b = e.charAt(c);
            switch (b) {
            case "<":
                a.append("&lt;");
                break;
            case ">":
                a.append("&gt;");
                break;
            case '"':
                a.append("&quot;");
                break;
            case "&":
                a.append("&amp;");
                break;
            case " ":
                if (d == " ")
                    a.append("&nbsp;");
                else
                    a.append(" ");
                break;
            case "\r":
                break;
            case "\n":
                a.appendLine();
                a.appendLine("<br />");
                break;
            default:
                a.append(b);
                break
            }
            d = b
        }
        return a.toString()
    }

    function b(d, g, a) {
        a = a ? a : d;
        for (var f = new XPathEvaluator,
            c = f.evaluate(g, a, d.createNSResolver(d.documentElement), XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null),
            e = new Array(c.snapshotLength),
            b = 0;
            b < c.snapshotLength;
            b++)
            e[b] = c.snapshotItem(b);
        return e
    }

    function d(f, d, e) {
        d += "[1]";
        var a = b(f, d, e);
        if (a.length != 0)
            for (var c = 0; c < a.length; c++)
                if (a[c])
                    return a[c];
        return null
    }

    a.XMLDocument.prototype.selectNodes = function(c, a) {
        return b(this, c, a)
    };
    a.XMLDocument.prototype.selectSingleNode = function(b, a) {
        return d(this, b, a)
    };
    a.XMLDocument.prototype.transformNode = function(c) {
        var a = new XSLTProcessor;
        a.importStylesheet(c);
        var d = document.implementation.createDocument("", "", null),
            b = a.transformToDocument(this);
        return b.xml
    };
    Node.prototype.selectNodes = function(a) {
        var b = this.ownerDocument;
        return b.selectNodes(a, this)
    };
    Node.prototype.selectSingleNode = function(a) {
        var b = this.ownerDocument;
        return b.selectSingleNode(a, this)
    };
    Node.prototype.__defineGetter__("baseName",
        function() {
            return this.localName
        });
    Node.prototype.__defineGetter__("text",
        function() {
            return this.textContent
        });
    Node.prototype.__defineSetter__("text",
        function(a) {
            this.textContent = a
        });
    Node.prototype.__defineGetter__("xml",
        function() {
            return (new XMLSerializer).serializeToString(this)
        });
    DocumentFragment.prototype.getElementById = function(e) {
        for (var d = [],
            c = this.childNodes,
            a,
            b = 0;
            b < c.length;
            b++) {
            a = c[b];
            a.nodeType == 1 &&
                Array.enqueue(d, a)
        }
        while (d.length) {
            a = Array.dequeue(d);
            if (a.id == e)
                return a;
            c = a.childNodes;
            if (c.length != 0)
                for (b = 0; b < c.length; b++) {
                    a = c[b];
                    a.nodeType == 1 &&
                        Array.enqueue(d, a)
                }
        }
        return null
    };
    DocumentFragment.prototype.createElement = function(a) {
        return document.createElement(a)
    }
}

function _loadTypeDescriptorCompatLayer() {
    Sys.Preview.TypeDescriptor.prototype._addEvent = Sys.Preview.TypeDescriptor.prototype.addEvent;
    Sys.Preview.TypeDescriptor.prototype._addProperty = Sys.Preview.TypeDescriptor.prototype.addProperty;
    Sys.Preview.TypeDescriptor.prototype._addMethod = Sys.Preview.TypeDescriptor.prototype.addMethod;
    Sys.Preview.TypeDescriptor._createParameter = Sys.Preview.TypeDescriptor.createParameter;
    Sys.Preview.TypeDescriptor.prototype.addEvent = function(a) {
        this._addEvent(a);
        var b = a.toLowerCase();
        if (a != b) {
            this._addEvent(b);
            this._getEvents()[b].name = a
        }
    };
    Sys.Preview.TypeDescriptor.prototype.addProperty = function(c) {
        var e = this._addProperty.apply(this, arguments),
            a = c.toLowerCase();
        if (c !== a) {
            var b = [];
            Array.add(b, a);
            for (var d = 1; d < arguments.length; d++)
                Array.add(b, arguments[d]);
            this._addProperty.apply(this, b);
            this._getProperties()[a].name = c
        }
        return e
    };
    Sys.Preview.TypeDescriptor.prototype.addMethod = function(c, a) {
        if (a)
            for (var b = a.length - 1; b >= 0; b--)
                a[b].name = a[b].name.toLowerCase();
        return this._addMethod(c, a)
    };
    Sys.Preview.TypeDescriptor.createParameter = function(a, b, c, d) {
        return Sys.Preview.TypeDescriptor._createParameter(a.toLowerCase(), b, c, d)
    }
}

Sys.Browser.agent === Sys.Browser.Firefox &&
    _loadMozillaCompatLayer(window);
Type.registerNamespace("Sys.Preview");
Sys.Preview.IAction = function() {
    throw Error.notImplemented()
};
Sys.Preview.IAction.prototype = {
    execute: function() {
        throw Error.notImplemented()
    },
    setOwner: function() {
        throw Error.notImplemented()
    }
};
Sys.Preview.IAction.registerInterface("Sys.Preview.IAction");
Sys.Preview.Attributes = new function() {
    this.defineAttribute = function(a) {
        this[a] = a
    }
};
Sys.Preview.TypeDescriptor = function() {
    var b = {},
        d = {},
        c = {},
        a = {};
    this._getAttributes = function() {
        return a
    };
    this._getEvents = function() {
        return d
    };
    this._getMethods = function() {
        return c
    };
    this._getProperties = function() {
        return b
    }
};
Sys.Preview.TypeDescriptor.registerClass("Sys.Preview.TypeDescriptor");
Sys.Preview.TypeDescriptor.prototype.addAttribute = function(b, a) {
    this._getAttributes()[b] = a
};
Sys.Preview.TypeDescriptor.prototype.addEvent = function(a) {
    return this._getEvents()[a] = { name: a }
};
Sys.Preview.TypeDescriptor.prototype.addMethod = function(a, b) {
    return this._getMethods()[a] = { name: a, parameters: b }
};
Sys.Preview.TypeDescriptor.prototype.addProperty = function(d, e, b, g, f) {
    if (e === Sys.UI.DomElement)
        throw Error.argumentType("propertyType",
            Sys.UI.DomElement,
            Object,
            "Use isDomElement with a null type for element properties.\ne.g., for descriptors use { name: 'foo', isDomElement: true, type: null }");
    b = !!b;
    var c;
    if (f) {
        c = {};
        for (var a = 4; a < arguments.length; a += 2) {
            var h = arguments[a],
                i = arguments[a + 1];
            c[h] = i
        }
    }
    return this._getProperties()[d] = { name: d, type: e, readOnly: b, isDomElement: g, attributes: c }
};
Sys.Preview.TypeDescriptor.createParameter = function(a, b, c, d) {
    return { name: a, type: b, isDomElement: !!c, isInteger: !!d }
};
Sys.Preview.TypeDescriptor.getTypeDescriptor = function(c) {
    var a = Object.getType(c),
        b = a._descriptor;
    if (!b && !a._descriptorChecked) {
        if (Sys.Preview.ITypeDescriptorProvider.isImplementedBy(c))
            b = c.getDescriptor();
        else
            b = Sys.Preview.TypeDescriptor.generateDescriptor(a);
        a._descriptor = b;
        a._descriptorChecked = true
    }
    return b
};
Sys.Preview.TypeDescriptor.generateBaseDescriptor = function(b) {
    var a = b.getBaseType();
    return Sys.Preview.TypeDescriptor.generateDescriptor(a)
};
Sys.Preview.TypeDescriptor.generateDescriptor = function(c) {
    var b = null,
        a = c;
    while (a) {
        if (a.descriptor) {
            if (!b)
                b = new Sys.Preview.TypeDescriptor;
            Sys.Preview.TypeDescriptor.append(b, a.descriptor)
        }
        a = a.getBaseType()
    }
    return b
};
Sys.Preview.TypeDescriptor.append = function(c, a) {
    if (a.properties)
        for (var f = a.properties.length,
            b = 0;
            b < f;
            b++) {
            var d = a.properties[b],
                l = d.name,
                h = d.attributes,
                r = !!d.readOnly,
                o = !!d.isDomElement,
                p = !!d.isInteger;
            if (!c._getProperties()[l]) {
                var e = [l, d.type, r, o];
                if (typeof h === "array")
                    for (var j = 0,
                        s = h.length;
                        j < s;
                        j++) {
                        var n = h[j];
                        e[e.length] = n.name;
                        e[e.length] = n.value
                    }
                var q = c.addProperty.apply(c, e);
                q.isInteger = p
            }
        }
    if (a.events)
        for (var f = a.events.length,
            b = 0;
            b < f;
            b++) {
            var m = a.events[b].name;
            !c._getEvents()[m] &&
                c.addEvent(m)
        }
    if (a.methods)
        for (var f = a.methods.length,
            b = 0;
            b < f;
            b++) {
            var i = a.methods[b].name;
            if (!c._getMethods()[i]) {
                var g = a.methods[b].params;
                if (!g)
                    g = a.methods[b].parameters;
                if (g)
                    c.addMethod(i, g);
                else
                    c.addMethod(i)
            }
        }
    if (a.attributes)
        for (var f = a.attributes.length,
            b = 0;
            b < f;
            b++) {
            var k = a.attributes[b].name;
            !c._getAttributes()[k] &&
                c.addAttribute(k, a.attributes[b].value)
        }
};
Sys.Preview.TypeDescriptor.unload = function() {
};
Sys.Preview.TypeDescriptor.getAttribute = function(b, a) {
    var c = Sys.Preview.TypeDescriptor.getTypeDescriptor(b);
    return c._getAttributes()[a]
};
Sys.Preview.TypeDescriptor.getProperty = function(b, e, a) {
    if (Sys.Preview.ICustomTypeDescriptor.isImplementedBy(b))
        return b.getProperty(e, a);
    var f = Sys.Preview.TypeDescriptor.getTypeDescriptor(b);
    if (!f) {
        var c = b[e];
        if (c && a)
            c = a.indexOf(".") === -1 ? c[a] : Sys.Preview.TypeDescriptor._evaluatePath(c, a);
        return c
    }
    var g = f._getProperties()[e],
        h = b["get_" + g.name],
        d = h.call(b);
    if (a)
        d = a.indexOf(".") === -1 ? d[a] : Sys.Preview.TypeDescriptor._evaluatePath(d, a);
    return d
};
Sys.Preview.TypeDescriptor.setProperty = function(a, e, b, c) {
    if (Sys.Preview.ICustomTypeDescriptor.isImplementedBy(a)) {
        a.setProperty(e, b, c);
        return
    }
    var g = Sys.Preview.TypeDescriptor.getTypeDescriptor(a);
    if (!g) {
        if (!c)
            a[e] = b;
        else {
            a = a[e];
            if (c.indexOf(".") === -1)
                a[c] = b;
            else
                Sys.Preview.TypeDescriptor._setPath(a, c, b)
        }
        return
    }
    var d = g._getProperties()[e];
    if (c) {
        var h = a["get_" + d.name],
            f = h.call(a);
        if (c.indexOf(".") === -1)
            f[c] = b;
        else
            Sys.Preview.TypeDescriptor._setPath(f, c, b)
    } else {
        var i = a["set_" + d.name];
        b = Sys.Preview.TypeDescriptor._evaluateValue(d.type, d.isDomElement, d.isInteger, b);
        i.call(a, b)
    }
};
Sys.Preview.TypeDescriptor.invokeMethod = function(a, e, f) {
    if (Sys.Preview.ICustomTypeDescriptor.isImplementedBy(a))
        return a.invokeMethod(e, f);
    var j = Sys.Preview.TypeDescriptor.getTypeDescriptor(a);
    if (!j)
        return a[e].call(a);
    var b = j._getMethods()[e],
        i = a[b.name];
    if (!f || !b.parameters || !b.parameters.length)
        return i.call(a);
    else {
        for (var h = [],
            d = 0;
            d < b.parameters.length;
            d++) {
            var c = b.parameters[d],
                g = f[c.name];
            g = Sys.Preview.TypeDescriptor._evaluateValue(c.type, c.isDomElement, c.isInteger, g);
            h[d] = g
        }
        return i.apply(a, h)
    }
};
Sys.Preview.TypeDescriptor.getPropertyType = function(a, d, e) {
    if (Sys.Preview.ICustomTypeDescriptor.isImplementedBy(a))
        return Object;
    if (e)
        return Object;
    var b = Sys.Preview.TypeDescriptor.getTypeDescriptor(a);
    if (!b)
        return Object;
    var c = b._getProperties()[d];
    return c.type || null
};
Sys.Preview.TypeDescriptor._evaluatePath = function(e, f) {
    for (var d,
        c = f.split("."),
        a = e,
        b = 0,
        g = c.length;
        b < g;
        b++) {
        d = c[b];
        a = a[d];
        if (typeof a === "undefined" || a === null)
            return null
    }
    return a
};
Sys.Preview.TypeDescriptor._evaluateValue = function(b, e, d, a) {
    if (!b)
        return a;
    var c = typeof a;
    if (c === "undefined" || a === null)
        return a;
    if (e) {
        if (c === "string")
            a = Sys.UI.DomElement.getElementById(a)
    } else if (b === Object || b === Sys.Component || b.inheritsFrom(Sys.Component)) {
        if (c === "string")
            a = Sys.Application.findComponent(a)
    } else if (b !== String && c === "string")
        if (Type.isEnum(b))
            a = b.parse(a, true);
        else if (a === "" && b === Number)
            a = 0;
        else {
            a = (b.parseInvariant || b.parse)(a);
            if (b === Number && d)
                a = Math.floor(a)
        }
    else if (b === String && c !== "string")
        a = a.toString();
    else if (b === Number && d)
        a = Math.floor(a);
    return a
};
Sys.Preview.TypeDescriptor._setPath = function(e, g, f) {
    for (var a = e,
        b = g.split("."),
        d,
        c = 0;
        c < b.length - 1;
        c++) {
        d = b[c];
        a = a[d];
        if (!a)
            break
    }
    if (a)
        a[b[b.length - 1]] = f
};
Sys.Browser.agent === Sys.Browser.Safari &&
    _loadTypeDescriptorCompatLayer(window);
Sys.Preview.MarkupContext = function(c, d, a, b) {
    this._document = c;
    this._global = d;
    this._parentContext = a;
    this._dataContext = b || null;
    this._objects = {};
    this._pendingReferences = [];
    this._pendingEndUpdates = []
};
Sys.Preview.MarkupContext.prototype = {
    _dataContextHidden: false,
    _opened: false,
    get_dataContext: function() {
        if (this._dataContextHidden)
            return null;
        return this._dataContext
    },
    get_isGlobal: function() {
        return this._global
    },
    addComponent: function(a, c) {
        var b = a.get_id();
        b &&
            this._addComponentByID(b, a, c)
    },
    removeComponent: function(a) {
        var b = a.get_id();
        b &&
            this._removeComponentByID(b);
        this._global &&
            Sys.Component.isInstanceOfType(a) &&
            Sys.Application.removeComponent(object)
    },
    findComponent: function(c, a) {
        if (a)
            return Sys.Application.findComponent(c, a);
        else {
            var b = this._objects[c];
            if (!b) {
                a = this._parentContext || Sys.Application;
                b = a.findComponent(c)
            }
            return b
        }
    },
    getComponents: function() {
        var a = [],
            b = this._objects;
        for (var c in b)
            a[a.length] = b[c];
        return a
    },
    _addComponentByID: function(c, a, b) {
        this._objects[c] = a;
        !b &&
            this._global &&
            Sys.Component.isInstanceOfType(a) &&
            Sys.Application.addComponent(a)
    },
    addEndUpdate: function(a) {
        Array.add(this._pendingEndUpdates, a)
    },
    addReference: function(c, a, b) {
        Array.add(this._pendingReferences, { o: c, p: a, r: b })
    },
    close: function() {
        this._opened = false;
        this._dataContext = null;
        for (var a = 0; a < this._pendingReferences.length; a++) {
            var b = this._pendingReferences[a],
                c = b.o,
                e = b.p,
                d = b.r,
                f = this.findComponent(d),
                g = c["set_" + e.name];
            g.call(c, f)
        }
        this._pendingReferences = null;
        for (a = 0; a < this._pendingEndUpdates.length; a++)
            this._pendingEndUpdates[a].endUpdate();
        this._pendingEndUpdates = null
    },
    dispose: function() {
        if (!this._global)
            for (var a in this._objects) {
                Sys.IDisposable.isImplementedBy(this._objects[a]) &&
                    this._objects[a].dispose();
                this._objects[a] = null
            }
        this._document = null;
        this._parentContext = null;
        this._dataContext = null;
        this._objects = null;
        this._pendingReferences = null;
        this._pendingEndUpdates = null
    },
    findElement: function(b) {
        if (this._opened) {
            var a = Sys.UI.DomElement.getElementById(b, this._document);
            if (!a && this._parentContext)
                a = Sys.UI.DomElement.getElementById(b, this._parentContext);
            return a
        }
        return null
    },
    hideDataContext: function() {
        if (!this._dataContextHidden) {
            this._dataContextHidden = true;
            return true
        }
        return false
    },
    open: function() {
        this._pendingReferences = [];
        this._pendingEndUpdates = [];
        this._opened = true
    },
    restoreDataContext: function() {
        this._dataContextHidden = false
    }
};
Sys.Preview.MarkupContext.registerClass("Sys.Preview.MarkupContext", null, Sys.IContainer);
Sys.Preview.MarkupContext.createGlobalContext = function() {
    return new Sys.Preview.MarkupContext(document, true)
};
Sys.Preview.MarkupContext.createLocalContext = function(a, b, c) {
    return new Sys.Preview.MarkupContext(a, false, b, c)
};
Sys.Preview.MarkupParser = new function() {
};
Sys.Preview.MarkupParser._defaultNamespaceURI = "http://schemas.microsoft.com/xml-script/2005";
Sys.Preview.MarkupParser._cachedNamespaceURILists = {};
Sys.Preview.MarkupParser.getNodeName = function(a) {
    return a.localName || a.baseName
};
Sys.Preview.MarkupParser.initializeObject = function(a, I, f) {
    var z = Sys.Preview.TypeDescriptor.getTypeDescriptor(a);
    if (!z)
        return null;
    var B = false;
    if (a.beginUpdate && a.endUpdate && a !== Sys.Application) {
        B = true;
        a.beginUpdate()
    }
    var v,
        g,
        i,
        r,
        e,
        n,
        c,
        b,
        h,
        o,
        t,
        H,
        s,
        C = z._getProperties(),
        G = z._getEvents(),
        j = I.attributes;
    if (j)
        for (g = j.length - 1; g >= 0; g--) {
            i = j[g];
            r = i.nodeName;
            if (r === "id" && Sys.UI.Control.isInstanceOfType(a))
                continue;
            e = C[r];
            if (e) {
                c = e.type;
                b = i.nodeValue;
                if (c && (c === Object || c === Sys.Component || c.inheritsFrom(Sys.Component)))
                    f.addReference(a, e, b);
                else {
                    if (e.isDomElement)
                        b = f.findElement(b);
                    else if (c === Array)
                        b = Array.parse("[" + b + "]");
                    else if (c && c !== String)
                        if (Type.isEnum(c))
                            b = c.parse(b, true);
                        else if (b === "" && c === Number)
                            b = 0;
                        else
                            b = (c.parseInvariant || c.parse)(b);
                    n = e.name;
                    t = a["set_" + n];
                    t.call(a, b)
                }
            } else {
                h = G[r];
                if (h) {
                    var E = Function.parse(i.nodeValue);
                    if (E) {
                        o = a["add_" + h.name];
                        o &&
                            o.apply(a, [E])
                    }
                }
            }
        }
    var q = I.childNodes;
    if (q && q.length != 0)
        for (v = q.length - 1; v >= 0; v--) {
            var d = q[v];
            if (d.nodeType != 1)
                continue;
            s = Sys.Preview.MarkupParser.getNodeName(d);
            e = C[s];
            if (e) {
                n = e.name;
                c = e.type;
                if (e.readOnly) {
                    H = a["get_" + n];
                    var m = H.call(a);
                    if (c === Array) {
                        if (d.childNodes.length)
                            for (var u = Sys.Preview.MarkupParser.parseNodes(d.childNodes, f),
                                k = 0;
                                k < u.length;
                                k++) {
                                var l = u[k];
                                if (typeof m.add === "function")
                                    m.add(l);
                                else {
                                    Array.add(m, l);
                                    typeof l.setOwner === "function" &&
                                        l.setOwner(a)
                                }
                            }
                    } else if (c === Object) {
                        j = d.attributes;
                        for (g = j.length - 1; g >= 0; g--) {
                            i = j[g];
                            m[i.nodeName] = i.nodeValue
                        }
                    } else
                        Sys.Preview.MarkupParser.initializeObject(m, d, f)
                } else {
                    b = null;
                    if (c == String)
                        b = d.text;
                    else if (d.childNodes.length != 0) {
                        for (var w,
                            p = 0;
                            p < d.childNodes.length;
                            p++) {
                            if (d.childNodes[p].nodeType != 1)
                                continue;
                            w = d.childNodes[p];
                            break
                        }
                        if (w)
                            b = Sys.Preview.MarkupParser.parseNode(w, f)
                    }
                    if (b) {
                        t = a["set_" + n];
                        t.call(a, b)
                    }
                }
            } else {
                h = G[s];
                if (h) {
                    var x = Sys.Preview.MarkupParser.parseNodes(d.childNodes, f);
                    if (x.length) {
                        o = a["add_" + h.name];
                        if (o)
                            for (var A = 0; A < x.length; A++) {
                                var F = x[A];
                                F.set_eventName(h.name);
                                F.set_eventSource(a)
                            }
                    }
                } else {
                    var y = null,
                        D = s.toUpperCase();
                    if (D === "BINDINGS")
                        y = Sys.Preview.BindingBase;
                    else if (D === "BEHAVIORS")
                        y = Sys.UI.Behavior;
                    if (y)
                        if (d.childNodes.length)
                            for (var u = Sys.Preview.MarkupParser.parseNodes(d.childNodes, f),
                                k = 0;
                                k < u.length;
                                k++) {
                                var l = u[k];
                                typeof l.setOwner === "function" &&
                                    l.setOwner(a)
                            }
                }
            }
        }
    B &&
        f.addEndUpdate(a);
    return a
};
Sys.Preview.MarkupParser.parseNode = function(e, f) {
    var d = null,
        b = Sys.Preview.MarkupParser._getTagType(e);
    if (b) {
        var a = b.parseFromMarkup;
        if (!a) {
            var c = b.getBaseType();
            while (c) {
                a = c.parseFromMarkup;
                if (a)
                    break;
                c = c.getBaseType()
            }
            b.parseFromMarkup = a
        }
        if (a)
            d = a.call(null, b, e, f)
    }
    return d
};
Sys.Preview.MarkupParser.parseNodes = function(e, f) {
    for (var d = [],
        a = 0;
        a < e.length;
        a++) {
        var c = e[a];
        if (c.nodeType !== 1)
            continue;
        var b = Sys.Preview.MarkupParser.parseNode(c, f);
        b &&
            Array.add(d, b)
    }
    return d
};
Sys.Preview.MarkupParser.processDocument = function(i) {
    for (var h = [],
        d = document.getElementsByTagName("script"),
        c = 0;
        c < d.length;
        c++)
        if (d[c].type == "text/xml-script") {
            var j = d[c],
                a = j.innerHTML;
            if (a.startsWith("<!--")) {
                var k = a.indexOf("<", 1),
                    f = a.lastIndexOf(">");
                f = a.lastIndexOf(">", f - 1);
                a = a.substring(k, f + 1)
            }
            if (a.length == 0)
                continue;
            var e;
            if (Sys.Net.XMLDOM)
                e = new Sys.Net.XMLDOM(a);
            else
                e = new XMLDOM(a);
            var b = null,
                g = e.getElementsByTagName("page");
            if (g.length)
                b = g[0];
            b &&
                Sys.Preview.MarkupParser.getNodeName(b) === "page" &&
                Array.add(h, b)
        }
    Sys.Preview.MarkupParser.processDocumentScripts(i, h)
};
Sys.Preview.MarkupParser.processDocumentScripts = function(d, j) {
    d.open();
    for (var g = 0; g < j.length; g++) {
        for (var c = [],
            k = j[g],
            h = k.childNodes,
            f = h.length - 1;
            f >= 0;
            f--) {
            var b = h[f];
            if (b.nodeType !== 1)
                continue;
            var a = Sys.Preview.MarkupParser.getNodeName(b);
            if (a)
                a = a.toLowerCase();
            if (a === "components")
                for (var e = 0; e < b.childNodes.length; e++) {
                    var i = b.childNodes[e];
                    if (i.nodeType !== 1)
                        continue;
                    Array.add(c, i)
                }
        }
        c.length &&
            Sys.Preview.MarkupParser.parseNodes(c, d)
    }
    d.close()
};
Sys.Preview.MarkupParser._getDefaultNamespaces = function() {
    if (!Sys.Preview.MarkupParser._defaultNamespaces) {
        var a = [
            Sys, Sys.UI, Sys.Net, Sys.Preview, Sys.Preview.UI, Sys.Preview.Net, Sys.Preview.Data, Sys.Preview.UI.Data,
            Sys.Preview.Services.Components
        ];
        Sys.Preview.UI.Effects &&
            Array.add(a, Sys.Preview.UI.Effects);
        Sys.Preview.MarkupParser._defaultNamespaces = a
    }
    return Sys.Preview.MarkupParser._defaultNamespaces
};
Sys.Preview.MarkupParser._processNamespaceURI = function(namespaceURI) {
    if (!namespaceURI || namespaceURI === Sys.Preview.MarkupParser._defaultNamespaceURI)
        return Sys.Preview.MarkupParser._getDefaultNamespaces();
    var start = namespaceURI.slice(0, 12).toLowerCase();
    if (start === "javascript:") {
        namespaceURI = namespaceURI.slice(11);
        if (!namespaceURI.length)
            return []
    }
    var nspaceList = namespaceURI.split(",");
    list = [];
    for (var i = 0; i < nspaceList.length; i++) {
        var nspaceName = nspaceList[i];
        if (nspaceName.startsWith(" "))
            nspaceName = nspaceName.trimStart();
        if (nspaceName.endsWith(" "))
            nspaceName = nspaceName.trimEnd();
        if (!nspaceName.length)
            continue;
        var nspace = null;
        try {
            nspace = eval(nspaceName)
        } catch (a) {
        }
        nspace &&
            Array.add(list, nspace)
    }
    return list
};
Sys.Preview.MarkupParser._getTagType = function(f) {
    var e = Sys.Preview.MarkupParser.getNodeName(f),
        b = f.namespaceURI || Sys.Preview.MarkupParser._defaultNamespaceURI,
        a = Sys.Preview.MarkupParser._cachedNamespaceURILists[b];
    if (typeof a === "undefined") {
        a = Sys.Preview.MarkupParser._processNamespaceURI(b);
        Sys.Preview.MarkupParser._cachedNamespaceURILists[b] = a
    }
    for (var d = e.toUpperCase(),
        c = 0;
        c < a.length;
        c++) {
        var h = a[c],
            g = Type.parse(e, h);
        if (typeof g === "function")
            return g
    }
    if (d === "APPLICATION")
        return Sys._Application;
    if (d === "WEBREQUESTMANAGER")
        return Sys.Net._WebRequestManager;
    return null
};
Sys.Preview.ICustomTypeDescriptor = function() {
    throw Error.notImplemented()
};
Sys.Preview.ICustomTypeDescriptor.prototype = {
    getProperty: function() {
        throw Error.notImplemented()
    },
    setProperty: function() {
        throw Error.notImplemented()
    },
    invokeMethod: function() {
        throw Error.notImplemented()
    }
};
Sys.Preview.ICustomTypeDescriptor.registerInterface("Sys.Preview.ICustomTypeDescriptor");
Sys.Preview.ITypeDescriptorProvider = function() {
    throw Error.notImplemented()
};
Sys.Preview.ITypeDescriptorProvider.prototype = {
    getDescriptor: function() {
        throw Error.notImplemented()
    }
};
Sys.Preview.ITypeDescriptorProvider.registerInterface("Sys.Preview.ITypeDescriptorProvider");
Sys.Preview.INotifyCollectionChanged = function() {
    throw Error.notImplemented()
};
Sys.Preview.INotifyCollectionChanged.prototype = {
    add_collectionChanged: function() {
        throw Error.notImplemented()
    },
    remove_collectionChanged: function() {
        throw Error.notImplemented()
    }
};
Sys.Preview.INotifyCollectionChanged.registerInterface("Sys.Preview.INotifyCollectionChanged");
Sys.Preview.NotifyCollectionChangedAction = function() {
    throw Error.invalidOperation()
};
Sys.Preview.NotifyCollectionChangedAction.prototype = { Add: 0, Remove: 1, Reset: 2 };
Sys.Preview.NotifyCollectionChangedAction.registerEnum("Sys.Preview.NotifyCollectionChangedAction");
Sys.Preview.CollectionChangedEventArgs = function(b, a) {
    Sys.Preview.CollectionChangedEventArgs.initializeBase(this);
    this._action = b;
    this._changedItem = a
};
Sys.Preview.CollectionChangedEventArgs.prototype = {
    get_action: function() {
        return this._action
    },
    get_changedItem: function() {
        return this._changedItem
    }
};
Sys.Preview.CollectionChangedEventArgs.descriptor = {
    properties: [
        { name: "action", type: Sys.Preview.NotifyCollectionChangedAction, readOnly: true },
        { name: "changedItem", type: Object, readOnly: true }
    ]
};
Sys.Preview.CollectionChangedEventArgs.registerClass("Sys.Preview.CollectionChangedEventArgs", Sys.EventArgs);
Sys.Preview.BindingDirection = function() {
    throw Error.invalidOperation()
};
Sys.Preview.BindingDirection.prototype = { In: 0, Out: 1, InOut: 2 };
Sys.Preview.BindingDirection.registerEnum("Sys.Preview.BindingDirection");
Sys.Preview.BindingEventArgs = function(d, c, b, a) {
    Sys.Preview.BindingEventArgs.initializeBase(this);
    this._value = d;
    this._direction = c;
    this._targetPropertyType = b;
    this._transformerArgument = a
};
Sys.Preview.BindingEventArgs.prototype = {
    get_direction: function() {
        return this._direction
    },
    get_targetPropertyType: function() {
        return this._targetPropertyType
    },
    get_transformerArgument: function() {
        return this._transformerArgument
    },
    get_value: function() {
        return this._value
    },
    set_value: function(a) {
        this._value = a
    }
};
Sys.Preview.BindingEventArgs.descriptor = {
    properties: [
        { name: "direction", type: Sys.Preview.BindingDirection, readOnly: true },
        { name: "targetPropertyType", type: Type, readOnly: true }, { name: "transformerArgument", readOnly: true },
        { name: "value" }
    ]
};
Sys.Preview.BindingEventArgs.registerClass("Sys.Preview.BindingEventArgs", Sys.CancelEventArgs);
Sys.Preview.BindingBase = function(a) {
    Sys.Preview.BindingBase.initializeBase(this);
    if (a)
        this._target = a
};
Sys.Preview.BindingBase.prototype = {
    _target: null,
    _property: null,
    _propertyKey: null,
    _dataContext: null,
    _dataPath: null,
    _dataPathParts: null,
    _transformerArgument: null,
    _automatic: true,
    _bindingExecuting: false,
    _source: null,
    get_automatic: function() {
        return this._automatic
    },
    set_automatic: function(a) {
        if (!this._source)
            this._automatic = a
    },
    get_dataContext: function() {
        return this._dataContext
    },
    set_dataContext: function(a) {
        if (!this._source)
            this._dataContext = a
    },
    get_dataPath: function() {
        return this._dataPath
    },
    set_dataPath: function(a) {
        if (!this._source)
            this._dataPath = a
    },
    get_target: function() {
        return this._target
    },
    set_target: function(a) {
        this._target = a
    },
    get_property: function() {
        return this._property
    },
    set_property: function(a) {
        if (!this._source)
            this._property = a
    },
    get_propertyKey: function() {
        return this._propertyKey
    },
    set_propertyKey: function(a) {
        if (!this._source)
            this._propertyKey = a
    },
    get_transformerArgument: function() {
        return this._transformerArgument
    },
    set_transformerArgument: function(a) {
        this._transformerArgument = a
    },
    add_transform: function(a) {
        this.get_events().addHandler("transform", a)
    },
    remove_transform: function(a) {
        this.get_events().removeHandler("transform", a)
    },
    dispose: function() {
        this._dataContext = null;
        this._source = null;
        this._target = null;
        Sys.Preview.BindingBase.callBaseMethod(this, "dispose")
    },
    evaluate: function(a) {
        if (this._bindingExecuting)
            return;
        this._bindingExecuting = true;
        if (a === Sys.Preview.BindingDirection.In)
            this.evaluateIn();
        else
            this.evaluateOut();
        this._bindingExecuting = false
    },
    evaluateIn: function() {
        var c = Sys.Preview.TypeDescriptor.getPropertyType(this._target, this._property, this._propertyKey),
            a = this._getSourceValue(c),
            d = false,
            e = this.get_events().getHandler("transform");
        if (e) {
            var b = new Sys.Preview.BindingEventArgs(a, Sys.Preview.BindingDirection.In, c, this._transformerArgument);
            e(this, b);
            d = b.get_cancel();
            a = b.get_value()
        }
        !d &&
            Sys.Preview.TypeDescriptor.setProperty(this._target, this._property, a, this._propertyKey)
    },
    evaluateOut: function() {
    },
    initialize: function() {
        Sys.Preview.BindingBase.callBaseMethod(this, "initialize");
        this._source = this._dataContext;
        if (!this._source)
            this._source = this._target.get_dataContext();
        if (this._dataPath && this._dataPath.indexOf(".") > 0)
            this._dataPathParts = this._dataPath.split(".")
    },
    _evaluateDataPath: function() {
        for (var a = this._source,
            b = 0;
            b < this._dataPathParts.length - 1;
            b++) {
            a = Sys.Preview.TypeDescriptor.getProperty(a, this._dataPathParts[b]);
            if (!a)
                return null
        }
        return a
    },
    _get_dataPathParts: function() {
        return this._dataPathParts
    },
    _getSource: function() {
        return this._source
    },
    _getSourceValue: function() {
        if (this._dataPath && this._dataPath.length) {
            var a = this._source,
                b = this._dataPath;
            if (this._dataPathParts) {
                a = this._evaluateDataPath();
                if (a === null)
                    return null;
                b = this._dataPathParts[this._dataPathParts.length - 1]
            }
            return Sys.Preview.TypeDescriptor.getProperty(a, b)
        }
        if (this._source && Sys.Preview.ICustomTypeDescriptor.isImplementedBy(this._source))
            return this._source.getProperty("");
        return this._source
    },
    _getTargetValue: function(d) {
        var a = Sys.Preview.TypeDescriptor.getProperty(this._target, this._property, this._propertyKey),
            c = this.get_events().getHandler("transform");
        if (c) {
            var b = new Sys.Preview.BindingEventArgs(a, Sys.Preview.BindingDirection.Out, d, this._transformerArgument);
            c(this, b);
            var e = b.get_cancel();
            if (!e)
                a = b.get_value();
            else
                a = null
        }
        return a
    },
    setOwner: function(a) {
        this.set_target(a)
    }
};
Sys.Preview.BindingBase.descriptor = {
    properties: [
        { name: "target", type: Object }, { name: "automatic", type: Boolean }, { name: "dataContext", type: Object },
        { name: "dataPath", type: String }, { name: "property", type: String }, { name: "propertyKey" },
        { name: "transformerArgument", type: String }
    ],
    methods: [{ name: "evaluateIn" }],
    events: [{ name: "transform" }]
};
Sys.Preview.BindingBase.registerClass("Sys.Preview.BindingBase", Sys.Component, Sys.IDisposable);
Sys.Preview.BindingBase.parseFromMarkup = function(h, b, f) {
    var d = new h,
        a,
        c = b.attributes.getNamedItem("transform");
    if (c) {
        var g = c.nodeValue;
        a = Sys.Preview.BindingBase.Transformers[g]
    }
    if (a) {
        d.add_transform(a);
        b.attributes.removeNamedItem("transform")
    }
    var e = Sys.Preview.MarkupParser.initializeObject(d, b, f);
    a &&
        b.attributes.setNamedItem(c);
    if (e) {
        f.addComponent(e);
        return e
    } else
        d.dispose();
    return null
};
Sys.Preview.BindingBase.Transformers = {};
Sys.Preview.BindingBase.Transformers.Invert = function(b, a) {
    a.set_value(!a.get_value())
};
Sys.Preview.BindingBase.Transformers.ToString = function(f, c) {
    var d = c.get_value(),
        b = "",
        a = c.get_transformerArgument(),
        e = a && a.length !== 0 ? a.indexOf("{0}") : -1;
    if (e != -1)
        b = String.format(a, d);
    else if (d)
        b = d.toString();
    else
        b = a;
    c.set_value(b)
};
Sys.Preview.BindingBase.Transformers.ToLocaleString = function(f, d) {
    var b = d.get_value(),
        c = "",
        a = d.get_transformerArgument(),
        e = a && a.length !== 0 ? a.indexOf("{0}") : -1;
    if (e !== -1)
        c = String.format(a, b.toLocalString ? b.toLocalString() : b.toString());
    else if (b)
        c = b.toLocaleString();
    else
        c = a;
    d.set_value(c)
};
Sys.Preview.BindingBase.Transformers.Add = function(e, c) {
    var b = c.get_value();
    if (typeof b !== "number")
        if (b === "")
            b = 0;
        else
            b = Number.parseInvariant(b);
    var a = c.get_transformerArgument();
    if (!a)
        a = 1;
    if (typeof a !== "number")
        if (b === "")
            a = 0;
        else
            a = Number.parseInvariant(a);
    if (c.get_direction() === Sys.Preview.BindingDirection.Out)
        a = -a;
    var d = b + a;
    if (c.get_targetPropertyType() !== "number")
        d = d.toString();
    c.set_value(d)
};
Sys.Preview.BindingBase.Transformers.Multiply = function(e, c) {
    var b = c.get_value();
    if (typeof b !== "number")
        if (b === "")
            b = 0;
        else
            b = Number.parseInvariant(b);
    var a = c.get_transformerArgument();
    if (!a)
        a = 1;
    if (typeof a !== "number")
        if (a === "")
            a = 0;
        else
            a = Number.parseInvariant(a);
    var d;
    if (c.get_direction() === Sys.Preview.BindingDirection.Out)
        d = b / a;
    else
        d = b * a;
    if (c.get_targetPropertyType() !== "number")
        d = d.toString();
    c.set_value(d)
};
Sys.Preview.BindingBase.Transformers.Compare = function(d, b) {
    var a = b.get_value(),
        c = b.get_transformerArgument();
    if (c === null)
        a = a ? true : false;
    else
        a = a === c;
    b.set_value(a)
};
Sys.Preview.BindingBase.Transformers.CompareInverted = function(d, b) {
    var a = b.get_value(),
        c = b.get_transformerArgument();
    if (c === null)
        a = a ? false : true;
    else
        a = a !== c;
    b.set_value(a)
};
Sys.Preview.BindingBase.Transformers.RSSTransform = function(h, f) {
    function b(b, c) {
        var a = b.selectSingleNode(c);
        if (a)
            return a.nodeValue;
        return null
    }

    var c = f.get_value();
    if (!c)
        return;
    for (var e = new Sys.Preview.Data.DataTable([
                 new Sys.Preview.Data.DataColumn("title", String, null, false, true), new Sys.Preview.Data
                 .DataColumn("description", String, null, false, true), new Sys.Preview.Data
                 .DataColumn("link", String, null, false, true), new Sys.Preview.Data
                 .DataColumn("author", String, null, false, true), new Sys.Preview.Data
                 .DataColumn("category", String, null, false, true), new Sys.Preview.Data
                 .DataColumn("comments", String, null, false, true), new Sys.Preview.Data
                 .DataColumn("guid", String, null, true, true), new Sys.Preview.Data
                 .DataColumn("pubDate", String, null, false, true), new Sys.Preview.Data
                 .DataColumn("source", String, null, false, true)
             ]),
        d = 0;
        d < c.length;
        d++) {
        var a = c[d];
        if (!a || a.nodeType != 1)
            continue;
        var g = {
            title: b(a, "./title/text()"),
            description: b(a, "./description/text()"),
            link: b(a, "./link/text()"),
            author: b(a, "./author/text()"),
            category: b(a, "./category/text()"),
            comments: b(a, "./comments/text()"),
            guid: b(a, "./guid/text()"),
            pubDate: b(a, "./pubDate/text()"),
            source: b(a, "./source/text()")
        };
        e.add(g)
    }
    f.set_value(e)
};
Sys.Preview.Binding = function(a) {
    Sys.Preview.Binding.initializeBase(this, [a])
};
Sys.Preview.Binding.prototype = {
    _targetNotificationHandler: null,
    _sourceNotificationHandler: null,
    _direction: Sys.Preview.BindingDirection.In,
    get_direction: function() {
        return this._direction
    },
    set_direction: function(a) {
        if (!this._getSource())
            this._direction = a
    },
    dispose: function() {
        var b = this.get_target(),
            a = this._getSource();
        if (this._targetNotificationHandler) {
            b.remove_propertyChanged(this._targetNotificationHandler);
            this._targetNotificationHandler = null
        }
        if (this._sourceNotificationHandler) {
            a.remove_propertyChanged(this._sourceNotificationHandler);
            this._sourceNotificationHandler = null
        }
        if (this._targetDisposingHandler) {
            b.remove_disposing(this._targetDisposingHandler);
            this._targetDisposingHandler = null
        }
        if (this._sourceDisposingHandler) {
            a.remove_disposing(this._sourceDisposingHandler);
            this._sourceDisposingHandler = null
        }
        Sys.Preview.Binding.callBaseMethod(this, "dispose")
    },
    evaluateOut: function() {
        var a,
            b,
            c = this._get_dataPathParts();
        if (c) {
            a = this._evaluateDataPath();
            b = c[c.length - 1];
            if (!a)
                return
        } else {
            a = this._getSource();
            b = this.get_dataPath()
        }
        var e = Sys.Preview.TypeDescriptor.getPropertyType(a, b),
            d = this._getTargetValue(e);
        d !== null &&
            Sys.Preview.TypeDescriptor.setProperty(a, b, d)
    },
    initialize: function() {
        Sys.Preview.Binding.callBaseMethod(this, "initialize");
        if (this.get_automatic()) {
            if (this._direction !== Sys.Preview.BindingDirection.In) {
                var b = this.get_target();
                if (Sys.INotifyPropertyChange.isImplementedBy(b)) {
                    this._targetNotificationHandler = Function.createDelegate(this, this._onTargetPropertyChanged);
                    b.add_propertyChanged(this._targetNotificationHandler)
                }
                if (Sys.INotifyDisposing.isImplementedBy(b)) {
                    this._targetDisposingHandler = Function.createDelegate(this, this._onDisposing);
                    b.add_disposing(this._targetDisposingHandler)
                }
            }
            if (this._direction !== Sys.Preview.BindingDirection.Out) {
                var a = this._getSource();
                if (Sys.INotifyPropertyChange.isImplementedBy(a)) {
                    this._sourceNotificationHandler = Function.createDelegate(this, this._onSourcePropertyChanged);
                    a.add_propertyChanged(this._sourceNotificationHandler)
                }
                if (Sys.INotifyDisposing.isImplementedBy(a)) {
                    this._sourceDisposingHandler = Function.createDelegate(this, this._onDisposing);
                    a.add_disposing(this._sourceDisposingHandler)
                }
                this.evaluate(Sys.Preview.BindingDirection.In)
            }
        }
    },
    _onSourcePropertyChanged: function(e, d) {
        var a = this.get_dataPath(),
            b = this._get_dataPathParts();
        if (b)
            a = b[0];
        var c = d.get_propertyName();
        (!c || c === a) &&
            this.evaluate(Sys.Preview.BindingDirection.In)
    },
    _onTargetPropertyChanged: function(c, b) {
        var a = b.get_propertyName();
        (!a || a === this.get_property()) &&
            this.evaluate(Sys.Preview.BindingDirection.Out)
    },
    _onDisposing: function() {
        this.dispose()
    }
};
Sys.Preview.Binding.descriptor = {
    properties: [{ name: "direction", type: Sys.Preview.BindingDirection }],
    methods: [{ name: "evaluateOut" }]
};
Sys.Preview.Binding.registerClass("Sys.Preview.Binding", Sys.Preview.BindingBase);
Sys.Preview.XPathBinding = function() {
    Sys.Preview.XPathBinding.initializeBase(this)
};
Sys.Preview.XPathBinding.prototype = {
    _xpath: null,
    get_xpath: function() {
        return this._xpath
    },
    set_xpath: function(a) {
        if (!this._getSource())
            this._xpath = a
    },
    initialize: function() {
        Sys.Preview.XPathBinding.callBaseMethod(this, "initialize");
        this.get_automatic() &&
            this.evaluate(Sys.Preview.BindingDirection.In)
    },
    _getSourceValue: function(f) {
        var b = Sys.Preview.XPathBinding.callBaseMethod(this, "_getSourceValue");
        if (!b)
            return null;
        if (Array.isInstanceOfType(f)) {
            for (var d = b.selectNodes(this._xpath),
                e = [],
                c = 0;
                c < d.length;
                c++) {
                var a = d[c];
                if (!a || a.nodeType !== 1)
                    continue;
                Array.add(e, a)
            }
            return e
        } else {
            var a = b.selectSingleNode(this._xpath);
            if (a)
                return a.nodeValue;
            return null
        }
    }
};
Sys.Preview.XPathBinding.descriptor = { properties: [{ name: "xpath", type: String }] };
Sys.Preview.XPathBinding.registerClass("Sys.Preview.XPathBinding", Sys.Preview.BindingBase);
Sys.Preview.Action = function() {
    Sys.Preview.Action.initializeBase(this)
};
Sys.Preview.Action.prototype = {
    _eventSource: null,
    _eventName: null,
    _eventArgs: null,
    _result: null,
    _target: null,
    _bindings: null,
    get_eventSource: function() {
        return this._eventSource
    },
    set_eventSource: function(a) {
        if (!this.get_isInitialized())
            this._eventSource = a
    },
    get_eventName: function() {
        return this._eventName
    },
    set_eventName: function(a) {
        if (!this.get_isInitialized())
            this._eventName = a
    },
    get_target: function() {
        return this._target
    },
    set_target: function(a) {
        this._target = a
    },
    get_dataContext: function() {
        return this
    },
    get_eventArgs: function() {
        return this._eventArgs
    },
    get_result: function() {
        return this._result
    },
    get_sender: function() {
        return this._eventSource
    },
    get_bindings: function() {
        if (!this._bindings) {
            this._bindings = Sys.Component.createCollection(this);
            this._bindings.add_collectionChanged(Function.createDelegate(this, this._bindingChanged))
        }
        return this._bindings
    },
    _bindingChanged: function(b, a) {
        a.get_action() === Sys.Preview.NotifyCollectionChangedAction.Add &&
            a.get_changedItem().set_automatic(false)
    },
    dispose: function() {
        if (this._sourceHandler) {
            this._eventSource["remove_" + this._eventName](this._sourceHandler);
            this._sourceHandler = null
        }
        if (this._sourceDisposingHandler) {
            this._eventSource.remove_disposing(this._sourceDisposingHandler);
            this._sourceDisposingHandler = null
        }
        if (this._targetDisposingHandler) {
            this._target.remove_disposing(this._targetDisposingHandler);
            this._targetDisposingHandler = null
        }
        this._target = null;
        this._eventSource = null;
        Sys.Preview.Action.callBaseMethod(this, "dispose")
    },
    performAction: function() {
        throw Error.notImplemented()
    },
    execute: function(f, e) {
        this._eventArgs = e;
        var d = this.get_bindings(),
            a,
            b;
        if (d)
            for (var c = 0; c < d.length; c++) {
                a = d[c];
                b = a ? Object.getType(a) : null;
                if (b && (b === Sys.Preview.Binding || Sys.Preview.Binding.inheritsFrom(b)))
                    a.get_direction() !== Sys.Preview.BindingDirection.Out &&
                        a.evaluateIn();
                else
                    a.evaluateIn()
            }
        this._result = this.performAction();
        if (d)
            for (c = 0; c < d.length; c++) {
                a = d[c];
                b = a ? Object.getType(a) : null;
                if (b && (b === Sys.Preview.Binding || Sys.Preview.Binding.inheritsFrom(b)))
                    a.get_direction() !== Sys.Preview.BindingDirection.In &&
                        a.evaluateOut();
                else
                    a.evaluateOut()
            }
        this._eventArgs = null;
        this._result = null
    },
    initialize: function() {
        if (this._eventSource) {
            var a = Sys.Preview.TypeDescriptor.getTypeDescriptor(this._eventSource);
            if (a) {
                if (Sys.INotifyDisposing.isImplementedBy(this._eventSource)) {
                    this._sourceDisposeHandler = Function.createDelegate(this, this._sourceDisposing);
                    this._eventSource.add_disposing(this._sourceDisposeHandler)
                }
                var b = a._getEvents()[this.get_eventName()];
                this._sourceHandler = Function.createDelegate(this, this.execute);
                this._eventName = b.name;
                this._eventSource["add_" + this._eventName](this._sourceHandler)
            }
        }
        if (this._target && Sys.INotifyDisposing.isImplementedBy(this._target)) {
            this._targetDisposeHandler = Function.createDelegate(this, this._targetDisposing);
            this._target.add_disposing(this._targetDisposeHandler)
        }
        Sys.Preview.Action.callBaseMethod(this, "initialize")
    },
    setOwner: function(a) {
        if (!this.get_isInitialized())
            this._eventSource = a
    },
    _sourceDisposing: function() {
        this.dispose()
    },
    _targetDisposing: function() {
        this.dispose()
    }
};
Sys.Preview.Action.descriptor = {
    properties: [
        { name: "eventSource", type: Object }, { name: "eventName", type: String },
        { name: "bindings", type: Array, readOnly: true }, { name: "eventArgs", type: Sys.EventArgs, readOnly: true },
        { name: "result", type: Object, readOnly: true }, { name: "sender", type: Object, readOnly: true },
        { name: "target", type: Object }
    ]
};
Sys.Preview.Action.registerClass("Sys.Preview.Action", Sys.Component, Sys.Preview.IAction);
Sys.Preview.Action.parseFromMarkup = function(e, d, b) {
    var c = new e,
        a = Sys.Preview.MarkupParser.initializeObject(c, d, b);
    if (a) {
        b.addComponent(a);
        return a
    } else
        c.dispose();
    return null
};
Sys.Preview.InvokeMethodAction = function() {
    Sys.Preview.InvokeMethodAction.initializeBase(this)
};
Sys.Preview.InvokeMethodAction.prototype = {
    _method: null,
    _parameters: null,
    get_method: function() {
        return this._method
    },
    set_method: function(a) {
        this._method = a
    },
    get_parameters: function() {
        if (!this._parameters)
            this._parameters = {};
        return this._parameters
    },
    performAction: function() {
        return Sys.Preview.TypeDescriptor.invokeMethod(this.get_target(), this._method, this._parameters)
    }
};
Sys.Preview.InvokeMethodAction.descriptor = {
    properties: [{ name: "method", type: String }, { name: "parameters", type: Object, readOnly: true }]
};
Sys.Preview.InvokeMethodAction.registerClass("Sys.Preview.InvokeMethodAction", Sys.Preview.Action);
Sys.Preview.SetPropertyAction = function() {
    Sys.Preview.SetPropertyAction.initializeBase(this)
};
Sys.Preview.SetPropertyAction.prototype = {
    _property: null,
    _propertyKey: null,
    _value: null,
    get_property: function() {
        return this._property
    },
    set_property: function(a) {
        this._property = a
    },
    get_propertyKey: function() {
        return this._propertyKey
    },
    set_propertyKey: function(a) {
        this._propertyKey = a
    },
    get_value: function() {
        return this._value
    },
    set_value: function(a) {
        this._value = a
    },
    performAction: function() {
        Sys.Preview.TypeDescriptor.setProperty(this.get_target(), this._property, this._value, this._propertyKey);
        return null
    }
};
Sys.Preview.SetPropertyAction.descriptor = {
    properties: [{ name: "property", type: String }, { name: "propertyKey" }, { name: "value", type: String }]
};
Sys.Preview.SetPropertyAction.registerClass("Sys.Preview.SetPropertyAction", Sys.Preview.Action);
Sys.Preview.PostBackAction = function() {
    Sys.Preview.PostBackAction.initializeBase(this)
};
Sys.Preview.PostBackAction.prototype = {
    _eventArgument: null,
    get_target: function() {
        return this._target
    },
    set_target: function(a) {
        this._target = a
    },
    get_eventArgument: function() {
        return this._eventArgument
    },
    set_eventArgument: function(a) {
        this._eventArgument = a
    },
    performAction: function() {
        __doPostBack(this.get_target(), this.get_eventArgument());
        return null
    }
};
Sys.Preview.PostBackAction.descriptor = {
    properties: [{ name: "eventArgument", type: String }, { name: "target", type: String }]
};
Sys.Preview.PostBackAction.registerClass("Sys.Preview.PostBackAction", Sys.Preview.Action);
Sys.Preview.Counter = function() {
    Sys.Preview.Counter.initializeBase(this)
};
Sys.Preview.Counter.prototype = {
    _value: 0,
    _lowerBound: Number.NaN,
    _upperBound: Number.NaN,
    get_canDecrement: function() {
        return isNaN(this._lowerBound) || this._value > this._lowerBound
    },
    get_canIncrement: function() {
        return isNaN(this._upperBound) || this._value < this._upperBound
    },
    get_lowerBound: function() {
        return this._lowerBound
    },
    set_lowerBound: function(a) {
        if (isNaN(a) && isNaN(this._lowerBound) || a === this._lowerBound)
            return;
        var b = this.get_canDecrement();
        this._lowerBound = a;
        this.raisePropertyChanged("lowerBound");
        b !== this.get_canDecrement() &&
            this.raisePropertyChanged("canDecrement")
    },
    get_upperBound: function() {
        return this._upperBound
    },
    set_upperBound: function(a) {
        if (isNaN(a) && isNaN(this._upperBound) || a === this._upperBound)
            return;
        var b = this.get_canIncrement();
        this._upperBound = a;
        this.raisePropertyChanged("upperBound");
        b !== this.get_canIncrement() &&
            this.raisePropertyChanged("canIncrement")
    },
    get_value: function() {
        return this._value
    },
    set_value: function(a) {
        if ((isNaN(this._lowerBound) || a >= this._lowerBound) &&
            (isNaN(this._upperBound) || a <= this._upperBound) &&
            this._value !== a) {
            var b = this.get_canDecrement(),
                c = this.get_canIncrement();
            this._value = a;
            this.raisePropertyChanged("value");
            b !== this.get_canDecrement() &&
                this.raisePropertyChanged("canDecrement");
            c !== this.get_canIncrement() &&
                this.raisePropertyChanged("canIncrement")
        }
    },
    decrement: function() {
        this.set_value(this._value - 1)
    },
    increment: function() {
        this.set_value(this._value + 1)
    }
};
Sys.Preview.Counter.descriptor = {
    properties: [
        { name: "value", type: Number }, { name: "lowerBound", type: Number }, { name: "upperBound", type: Number },
        { name: "canDecrement", type: Boolean, readOnly: true }, { name: "canIncrement", type: Boolean, readOnly: true }
    ],
    methods: [{ name: "increment" }, { name: "decrement" }]
};
Sys.Preview.Counter.registerClass("Sys.Preview.Counter", Sys.Component);
Sys.Preview.Timer = function() {
    Sys.Preview.Timer.initializeBase(this);
    this._interval = 1e3;
    this._enabled = false;
    this._timer = null
};
Sys.Preview.Timer.prototype = {
    get_interval: function() {
        return this._interval
    },
    set_interval: function(a) {
        if (this._interval !== a) {
            this._interval = a;
            this.raisePropertyChanged("interval");
            !this.get_isUpdating() &&
                this._timer !== null &&
                this.restartTimer()
        }
    },
    get_enabled: function() {
        return this._enabled
    },
    set_enabled: function(a) {
        if (a !== this.get_enabled()) {
            this._enabled = a;
            this.raisePropertyChanged("enabled");
            if (!this.get_isUpdating())
                if (a)
                    this._startTimer();
                else
                    this._stopTimer()
        }
    },
    add_tick: function(a) {
        this.get_events().addHandler("tick", a)
    },
    remove_tick: function(a) {
        this.get_events().removeHandler("tick", a)
    },
    dispose: function() {
        this.set_enabled(false);
        this._stopTimer();
        Sys.Preview.Timer.callBaseMethod(this, "dispose")
    },
    updated: function() {
        Sys.Preview.Timer.callBaseMethod(this, "updated");
        this._enabled &&
            this.restartTimer()
    },
    _timerCallback: function() {
        var a = this.get_events().getHandler("tick");
        a &&
            a(this, Sys.EventArgs.Empty)
    },
    restartTimer: function() {
        this._stopTimer();
        this._startTimer()
    },
    _startTimer: function() {
        this._timer = window.setInterval(Function.createDelegate(this, this._timerCallback), this._interval)
    },
    _stopTimer: function() {
        window.clearInterval(this._timer);
        this._timer = null
    }
};
Sys.Preview.Timer.descriptor = {
    properties: [{ name: "interval", type: Number }, { name: "enabled", type: Boolean }],
    events: [{ name: "tick" }]
};
Sys.Preview.Timer.registerClass("Sys.Preview.Timer", Sys.Component);
Sys.Preview.ITask = function() {
    throw Error.notImplemented()
};
Sys.Preview.ITask.prototype = {
    execute: function() {
        throw Error.notImplemented()
    }
};
Sys.Preview.ITask.registerInterface("Sys.Preview.ITask");
Sys.Preview.Reference = function() {
};
Sys.Preview.Reference.prototype = {
    _component: null,
    _onload: null,
    get_component: function() {
        return this._component
    },
    set_component: function(a) {
        this._component = a
    },
    get_onscriptload: function() {
        return this._onload
    },
    set_onscriptload: function(a) {
        this._onload = a
    },
    dispose: function() {
        this._component = null
    }
};
Sys.Preview.Reference.descriptor = {
    properties: [{ name: "component", type: Object }, { name: "onscriptload", type: String }]
};
Sys.Preview.Reference.registerClass("Sys.Preview.Reference", null, Sys.IDisposable);
Sys.Preview.Reference.parseFromMarkup = function(e, d, c) {
    var a = new Sys.Preview.Reference,
        b = Sys.Preview.MarkupParser.initializeObject(a, d, c);
    if (b)
        return b;
    a.dispose();
    return null
};
Sys.Preview._TaskManager = function() {
    Sys.Application.registerDisposableObject(this);
    this._tasks = []
};
Sys.Preview._TaskManager.prototype = {
    _timeoutCookie: null,
    _timeoutHandler: null,
    addTask: function(a) {
        Array.enqueue(this._tasks, a);
        this._startTimeout()
    },
    dispose: function() {
        this._timeoutCookie &&
            window.clearTimeout(this._timeoutCookie);
        if (this._tasks && this._tasks.length)
            for (var a = this._tasks.length - 1; a >= 0; a--)
                this._tasks[a].dispose();
        this._tasks = null;
        this._timeoutHandler = null;
        Sys.Application.unregisterDisposableObject(this)
    },
    _onTimeout: function() {
        this._timeoutCookie = 0;
        var a = Array.dequeue(this._tasks);
        !a.execute() &&
            Array.enqueue(this._tasks, a);
        this._tasks.length &&
            this._startTimeout()
    },
    _startTimeout: function() {
        if (!this._timeoutCookie) {
            if (!this._timeoutHandler)
                this._timeoutHandler = Function.createDelegate(this, this._onTimeout);
            this._timeoutCookie = window.setTimeout(this._timeoutHandler, 0)
        }
    }
};
Sys.Preview._TaskManager.registerClass("Sys.Preview._TaskManager", null, Sys.IDisposable);
Sys.Preview.TaskManager = new Sys.Preview._TaskManager;
Type.registerNamespace("Sys.Preview.Net");
Sys.Preview.Net.ServiceMethodRequest = function() {
    Sys.Preview.Net.ServiceMethodRequest.initializeBase(this)
};
Sys.Preview.Net.ServiceMethodRequest.prototype = {
    _url: null,
    _methodName: null,
    _parameters: null,
    _userContext: null,
    _result: null,
    _request: null,
    _timeoutInterval: 0,
    _useGet: true,
    get_url: function() {
        return this._url
    },
    set_url: function(a) {
        this._url = a
    },
    get_methodName: function() {
        return this._methodName
    },
    set_methodName: function(a) {
        this._methodName = a
    },
    get_useGet: function() {
        return this._useGet
    },
    set_useGet: function(a) {
        this._useGet = a
    },
    get_parameters: function() {
        if (this._parameters === null)
            this._parameters = {};
        return this._parameters
    },
    get_result: function() {
        return this._result
    },
    get_timeoutInterval: function() {
        return this._timeoutInterval
    },
    set_timeoutInterval: function(a) {
        this._timeoutInterval = a
    },
    add_completed: function(a) {
        this.get_events().addHandler("completed", a)
    },
    remove_completed: function(a) {
        this.get_events().removeHandler("completed", a)
    },
    add_timeout: function(a) {
        this.get_events().addHandler("timeout", a)
    },
    remove_timeout: function(a) {
        this.get_events().removeHandler("timeout", a)
    },
    add_error: function(a) {
        this.get_events().addHandler("error", a)
    },
    remove_error: function(a) {
        this.get_events().removeHandler("error", a)
    },
    invoke: function(a) {
        if (this._request !== null)
            return false;
        var d = { parameters: this.get_parameters(), loadMethod: "" };
        this._request = Sys.Net.WebServiceProxy.invoke(this._url,
            this._methodName,
            this._useGet,
            d,
            b,
            c,
            this,
            this._timeoutInterval);

        function b(d, b) {
            b._request = null;
            b._userContext = a;
            b._result = d;
            var c = b.get_events().getHandler("completed");
            c &&
                c(b, Sys.EventArgs.Empty)
        }

        function c(c, b) {
            b._request = null;
            b._userContext = a;
            b._result = c;
            var e = false;
            if (c.get_errorStatus)
                e = c.get_errorStatus() === 2;
            else if (c.get_timedOut)
                e = c.get_timedOut();
            var d;
            if (e)
                d = b.get_events().getHandler("timeout");
            else
                d = b.get_events().getHandler("error");
            d &&
                d(b, Sys.EventArgs.Empty)
        }

        return true
    }
};
Sys.Preview.Net.ServiceMethodRequest.descriptor = {
    properties: [
        { name: "url", type: String }, { name: "methodName", type: String },
        { name: "parameters", type: Object, readOnly: true }, { name: "result", type: Object, readOnly: true },
        { name: "timeoutInterval", type: Number }, { name: "useGet", type: Boolean }
    ],
    methods: [{ name: "invoke", parameters: [{ name: "userContext" }] }],
    events: [{ name: "completed" }, { name: "timeout" }, { name: "error" }]
};
Sys.Preview.Net.ServiceMethodRequest.registerClass("Sys.Preview.Net.ServiceMethodRequest", Sys.Component);
Sys.Net._WebRequestManager.descriptor = {
    properties: [{ name: "defaultTimeout", type: Number }, { name: "defaultExecutorType", type: String }]
};
Sys.Net._WebRequestManager.parseFromMarkup = function(c, b, a) {
    if (!a.get_isGlobal())
        return null;
    Sys.Preview.MarkupParser.initializeObject(Sys.Net.WebRequestManager, b, a);
    return Sys.Net.WebRequestManager
};
Type.registerNamespace("Sys.Preview.Data");
Sys.Preview.Data.IData = function() {
    throw Error.notImplemented()
};
Sys.Preview.Data.IData.prototype = {
    add: function() {
        throw Error.notImplemented()
    },
    clear: function() {
        throw Error.notImplemented()
    },
    get_length: function() {
        throw Error.notImplemented()
    },
    getRow: function() {
        throw Error.notImplemented()
    },
    remove: function() {
        throw Error.notImplemented()
    }
};
Sys.Preview.Data.IData.registerInterface("Sys.Preview.Data.IData");
Sys.Preview.Data.DataRowState = function() {
    throw Error.invalidOperation()
};
Sys.Preview.Data.DataRowState.prototype = { Unchanged: 0, Added: 1, Deleted: 2, Detached: 3, Modified: 4 };
Sys.Preview.Data.DataRowState.registerEnum("Sys.Preview.Data.DataRowState");
Sys.Preview.Data.SortDirection = function() {
    throw Error.invalidOperation()
};
Sys.Preview.Data.SortDirection.prototype = { Ascending: 0, Descending: 1 };
Sys.Preview.Data.SortDirection.registerEnum("Sys.Preview.Data.SortDirection");
Sys.Preview.Data.ServiceType = function() {
    throw Error.invalidOperation()
};
Sys.Preview.Data.ServiceType.prototype = { DataService: 0, Handler: 1 };
Sys.Preview.Data.ServiceType.registerEnum("Sys.Preview.Data.ServiceType");
Sys.Preview.Data.DataColumn = function(b, d, a, e, c) {
    this._columnName = b;
    this._dataType = d;
    this._defaultValue = a;
    this._readOnly = c;
    this._key = e
};
Sys.Preview.Data.DataColumn.prototype = {
    get_columnName: function() {
        return this._columnName
    },
    get_dataType: function() {
        return this._dataType
    },
    get_defaultValue: function() {
        return this._defaultValue
    },
    get_isKey: function() {
        return this._key
    },
    get_readOnly: function() {
        return !!this._readOnly
    },
    dispose: function() {
        this._columnName = null;
        this._dataType = null;
        this._defaultValue = null
    }
};
Sys.Preview.Data.DataColumn.parseFromJson = function(json) {
    return new Sys.Preview.Data.DataColumn(json.name,
        typeof(json.dataType === "string") ? eval(json.dataType) : json.dataType,
        json.defaultValue,
        json.isKey,
        json.readOnly)
};
Sys.Preview.Data.DataColumn.descriptor = {
    properties: [
        { name: "columnName", type: String, readOnly: true }, { name: "dataType", type: Sys.Type, readOnly: true },
        { name: "defaultValue", readOnly: true }, { name: "isKey", type: Boolean, readOnly: true },
        { name: "readOnly", type: Boolean, readOnly: true }
    ]
};
Sys.Preview.Data.DataColumn.registerClass("Sys.Preview.Data.DataColumn", null, Sys.IDisposable);
Sys.Preview.Data.DataRow = function(b, a, c) {
    this._owner = a;
    this._row = b;
    this._index = c
};
Sys.Preview.Data.DataRow.prototype = {
    _state: Sys.Preview.Data.DataRowState.Unchanged,
    _selected: false,
    _events: null,
    get_events: function() {
        if (!this._events)
            this._events = new Sys.EventHandlerList;
        return this._events
    },
    add_propertyChanged: function(a) {
        if (this._disposed)
            return;
        this.get_events().addHandler("propertyChanged", a)
    },
    remove_propertyChanged: function(a) {
        if (this._disposed)
            return;
        this.get_events().removeHandler("propertyChanged", a)
    },
    _onPropertyChanged: function(b) {
        var a = this.get_events().getHandler("propertyChanged");
        a &&
            a(this, new Sys.PropertyChangedEventArgs(b))
    },
    get_isDirty: function() {
        return typeof this._row._original === "object"
    },
    get_index: function() {
        return this._index
    },
    _set_index: function(a) {
        this._index = a
    },
    get_rowObject: function() {
        return typeof this._row._rowObject !== "undefined" ? this._row._rowObject : this._row
    },
    get_selected: function() {
        return this._selected
    },
    set_selected: function(a) {
        if (this._selected !== a) {
            this._selected = a;
            this._onPropertyChanged("$selected")
        }
    },
    get_state: function() {
        return this._state
    },
    _set_state: function(a) {
        this._state = a
    },
    get_table: function() {
        return this._owner
    },
    _set_table: function(a) {
        this._owner = a
    },
    dispose: function() {
        delete this._events;
        this._row = null;
        this._owner = null;
        this._disposed = true
    },
    getProperty: function(a, b) {
        if (!a)
            return typeof this._row._rowObject !== "undefined" ? this._row._rowObject : this._row;
        switch (a) {
        case "$isDirty":
            return this.get_isDirty();
        case "$index":
            return this._index;
        case "$selected":
            return this.get_selected()
        }
        return Sys.Preview.TypeDescriptor.getProperty(this._row, a, b)
    },
    setProperty: function(b, c, f) {
        if (b === "$selected") {
            this.set_selected(c);
            return
        }
        if (this._row[b] === c)
            return;
        var e = this.get_isDirty();
        if (!e && this._owner && this.get_state() === Sys.Preview.Data.DataRowState.Unchanged) {
            var d = {};
            for (var a in this._row)
                if (a.charAt(0) !== "_" && typeof this._row[a] !== "function")
                    d[a] = this._row[a];
            this._row._original = d;
            this._set_state(Sys.Preview.Data.DataRowState.Modified)
        }
        Sys.Preview.TypeDescriptor.setProperty(this._row, b, c, f);
        this._onPropertyChanged(b);
        !e &&
            this._onPropertyChanged("$isDirty");
        this._owner.raiseRowChanged(this._row)
    },
    invokeMethod: function() {
    }
};
Sys.Preview.Data.DataRow.descriptor = {
    properties: [
        { name: "$isDirty", type: Boolean, readOnly: true }, { name: "$index", type: Number, readOnly: true },
        { name: "$selected", type: Boolean }
    ],
    events: [{ name: "propertyChanged", readOnly: true }]
};
Sys.Preview.Data.DataRow.registerClass("Sys.Preview.Data.DataRow",
    null,
    Sys.Preview.ICustomTypeDescriptor,
    Sys.INotifyPropertyChange,
    Sys.IDisposable);
Sys.Preview.Data.DataRowView = function(a, b) {
    this._row = a;
    this._index = b
};
Sys.Preview.Data.DataRowView.prototype = {
    _rowPropertyChanged: null,
    _events: null,
    get_events: function() {
        if (!this._events)
            this._events = new Sys.EventHandlerList;
        return this._events
    },
    add_propertyChanged: function(a) {
        this.get_events().addHandler("propertyChanged", a)
    },
    remove_propertyChanged: function(a) {
        this.get_events().removeHandler("propertyChanged", a)
    },
    _onPropertyChanged: function(b) {
        var a = this.get_events().getHandler("propertyChanged");
        a &&
            a(this, new Sys.PropertyChangedEventArgs(b))
    },
    get_dataIndex: function() {
        return this._row.get_index()
    },
    get_index: function() {
        return this._index
    },
    _set_index: function(a) {
        this._index = a
    },
    get_isDirty: function() {
        return this._row.get_isDirty()
    },
    _get_row: function() {
        return this._row
    },
    get_rowObject: function() {
        return this._row.get_rowObject()
    },
    get_selected: function() {
        return this._row.get_selected()
    },
    set_selected: function(a) {
        this._row.set_selected(a)
    },
    get_table: function() {
        return this._row.get_table()
    },
    dispose: function() {
        this._row &&
            this._rowPropertyChanged &&
            this._row.remove_propertyChanged(this._rowPropertyChanged);
        delete this._events;
        this._row = null
    },
    initialize: function() {
        this._rowPropertyChanged = Function.createDelegate(this, this._onRowPropertyChanged);
        this._row.add_propertyChanged(this._rowPropertyChanged)
    },
    _onRowPropertyChanged: function(b, a) {
        this._onPropertyChanged(a.get_propertyName())
    },
    getProperty: function(a, b) {
        if (a === "$index")
            return this._index;
        if (a === "$dataIndex")
            return this._row.get_index();
        return this._row.getProperty(a, b)
    },
    setProperty: function(b, a, c) {
        this._row.setProperty(b, a, c)
    },
    invokeMethod: function() {
    }
};
Sys.Preview.Data.DataRowView.descriptor = {
    properties: [
        { name: "$dataIndex", type: Number, readOnly: true }, { name: "$isDirty", type: Boolean, readOnly: true },
        { name: "$index", type: Number, readOnly: true }, { name: "$selected", type: Boolean }
    ],
    events: [{ name: "propertyChanged", readOnly: true }]
};
Sys.Preview.Data.DataRowView.registerClass("Sys.Preview.Data.DataRowView",
    null,
    Sys.Preview.ICustomTypeDescriptor,
    Sys.INotifyPropertyChange,
    Sys.IDisposable);
Sys.Preview.Data.DataRowCollection = function(a, b) {
    this._rows = a;
    this._dataTable = b
};
Sys.Preview.Data.DataRowCollection.prototype = {
    _indexToRow: null,
    _tableCollectionChanged: null,
    _suspendNotifications: false,
    _events: null,
    get_events: function() {
        if (!this._events)
            this._events = new Sys.EventHandlerList;
        return this._events
    },
    add_propertyChanged: function(a) {
        this.get_events().addHandler("propertyChanged", a)
    },
    remove_propertyChanged: function(a) {
        this.get_events().removeHandler("propertyChanged", a)
    },
    _onPropertyChanged: function(b) {
        var a = this.get_events().getHandler("propertyChanged");
        a &&
            a(this, new Sys.PropertyChangedEventArgs(b))
    },
    add_collectionChanged: function(a) {
        this.get_events().addHandler("collectionChanged", a)
    },
    remove_collectionChanged: function(a) {
        this.get_events().removeHandler("collectionChanged", a)
    },
    _onCollectionChanged: function(c, b) {
        var a = this.get_events().getHandler("collectionChanged");
        a &&
            a(this, new Sys.Preview.CollectionChangedEventArgs(c, b))
    },
    _get_dataTable: function() {
        return this._dataTable
    },
    get_length: function() {
        return this._rows.length
    },
    add: function(c) {
        var a = this._dataTable.add(c),
            b = new Sys.Preview.Data.DataRowView(a, this._rows.length);
        b.initialize();
        if (typeof this._rows.add === "function")
            this._rows.add(b);
        else
            Array.add(this._rows, b);
        if (this._indexToRow)
            this._indexToRow[a.get_dataIndex()] = a
    },
    clear: function() {
        this._suspendNotifications = true;
        for (var a = this._rows.length - 1; a >= 0; a--)
            this._dataTable.remove(this._rows[a]._get_row());
        this._rows = [];
        this._indexToRow = null;
        this._suspendNotifications = false;
        this._onCollectionChanged(Sys.Preview.NotifyCollectionChangedAction.Reset, null)
    },
    getRow: function(a) {
        return this._rows[a]
    },
    getItem: function(a) {
        return this.getRow(a)
    },
    remove: function(a) {
        this._dataTable.remove(a._get_row())
    },
    dispose: function() {
        if (this._dataTable && this._tableCollectionChanged) {
            this._dataTable.remove_collectionChanged(this._tableCollectionChanged);
            this._tableCollectionChanged = null
        }
        delete this._events;
        this._rows = null;
        this._dataTable = null
    },
    initialize: function() {
        if (this._dataTable.add_collectionChanged) {
            this._tableCollectionChanged = Function.createDelegate(this, this.onTableCollectionChanged);
            this._dataTable.add_collectionChanged(this._tableCollectionChanged)
        }
    },
    ensureLookupTable: function() {
        if (!this._indexToRow) {
            this._indexToRow = [];
            for (var a = this._rows.length - 1; a >= 0; a--) {
                var b = this._rows[a];
                this._indexToRow[b.get_dataIndex()] = b
            }
        }
    },
    onTableCollectionChanged: function(d, c) {
        if (this._suspendNotifications)
            return;
        switch (c.get_action()) {
        case Sys.Preview.NotifyCollectionChangedAction.Reset:
            this._rows = [];
            this._indexToRow = null;
            this._onCollectionChanged(Sys.Preview.NotifyCollectionChangedAction.Reset, b);
            return;
        case Sys.Preview.NotifyCollectionChangedAction.Remove:
            var b = c.get_changedItem();
            this.ensureLookupTable();
            var a = b.get_index();
            if (this._indexToRow[a]) {
                if (typeof this._rows.remove === "function")
                    this._rows.remove(this._indexToRow[a]);
                else
                    Array.remove(this._rows, this._indexToRow[a]);
                delete this._indexToRow[a];
                this._onCollectionChanged(Sys.Preview.NotifyCollectionChangedAction.Remove, b)
            }
            return
        }
    }
};
Sys.Preview.Data.DataRowCollection.descriptor = {
    properties: [{ name: "length", type: Number, readOnly: true }],
    methods: [{ name: "add" }, { name: "clear" }, { name: "remove" }],
    events: [{ name: "collectionChanged", readOnly: true }, { name: "propertyChanged", readOnly: true }]
};
Sys.Preview.Data.DataRowCollection.registerClass("Sys.Preview.Data.DataRowCollection",
    null,
    Sys.Preview.Data.IData,
    Sys.INotifyPropertyChange,
    Sys.Preview.INotifyCollectionChanged,
    Sys.IDisposable);
Sys.Preview.Data.DataTable = function(b, a) {
    this._array = Array.isInstanceOfType(a) ? a : [];
    this._columns = Array.isInstanceOfType(b) ? b : [];
    this._rows = [];
    this._deletedRows = [];
    this._newRows = [];
    this._updatedRows = [];
    this._columnDictionary = {};
    this._keys = null;
    this._events = null
};
Sys.Preview.Data.DataTable.prototype = {
    get_events: function() {
        if (!this._events)
            this._events = new Sys.EventHandlerList;
        return this._events
    },
    add_propertyChanged: function(a) {
        if (this._disposed)
            return;
        this.get_events().addHandler("propertyChanged", a)
    },
    remove_propertyChanged: function(a) {
        if (this._disposed)
            return;
        this.get_events().removeHandler("propertyChanged", a)
    },
    _onPropertyChanged: function(b) {
        if (this._disposed)
            return;
        var a = this.get_events().getHandler("propertyChanged");
        a &&
            a(this, new Sys.PropertyChangedEventArgs(b))
    },
    add_collectionChanged: function(a) {
        if (this._disposed)
            return;
        this.get_events().addHandler("collectionChanged", a)
    },
    remove_collectionChanged: function(a) {
        if (this._disposed)
            return;
        this.get_events().removeHandler("collectionChanged", a)
    },
    _onCollectionChanged: function(c, b) {
        if (this._disposed)
            return;
        var a = this.get_events().getHandler("collectionChanged");
        a &&
            a(this, new Sys.Preview.CollectionChangedEventArgs(c, b))
    },
    get_columns: function() {
        return this._columns
    },
    get_keyNames: function() {
        if (this._disposed)
            return null;
        if (!this._keys) {
            this._keys = [];
            for (var c = this._columns.length,
                a = 0;
                a < c;
                a++) {
                var b = this._columns[a];
                b.get_isKey() &&
                    Array.add(this._keys, b.get_columnName())
            }
        }
        return this._keys
    },
    get_isDirty: function() {
        if (this._disposed)
            return false;
        return this._deletedRows.length !== 0 || this._newRows.length !== 0 || this._updatedRows.length !== 0
    },
    get_length: function() {
        if (this._disposed)
            return 0;
        return this._array.length
    },
    add: function(a) {
        if (this._disposed)
            return null;
        var b;
        if (Sys.Preview.Data.DataRow.isInstanceOfType(a)) {
            b = a;
            b._set_table(this);
            a = a.get_rowObject()
        } else
            b = new Sys.Preview.Data.DataRow(a, this);
        var e = this._array.length;
        b._set_index(e);
        var c = this.get_columns();
        if (c)
            for (var f = c.length - 1; f >= 0; f--) {
                var d = c[f];
                if (typeof a[d.get_columnName()] === "undefined")
                    a[d.get_columnName()] = d.get_defaultValue()
            }
        var g = this.get_isDirty();
        this._array[e] = a;
        this._rows[e] = b;
        Array.add(this._newRows, a);
        b._set_state(Sys.Preview.Data.DataRowState.Added);
        this._onCollectionChanged(Sys.Preview.NotifyCollectionChangedAction.Add, b);
        this._onPropertyChanged("length");
        !g &&
            this._onPropertyChanged("isDirty");
        return b
    },
    clear: function() {
        if (this.get_length() > 0) {
            for (var c = this.get_isDirty(),
                a = this._array.length - 1;
                a >= 0;
                a--) {
                var b = this._array[a];
                if (b && !Array.contains(this._newRows, b)) {
                    Array.add(this._deletedRows, b);
                    this._rows[a]._set_state(Sys.Preview.Data.DataRowState.Deleted)
                }
            }
            this._rows = [];
            this._array = [];
            this._newRows = [];
            this._updatedRows = [];
            this._onCollectionChanged(Sys.Preview.NotifyCollectionChangedAction.Reset, null);
            this._onPropertyChanged("length");
            !c &&
                this._onPropertyChanged("isDirty")
        }
    },
    createRow: function(c) {
        if (this._disposed)
            return null;
        for (var g = {},
            f = {},
            b = this._columns.length - 1;
            b >= 0;
            b--) {
            var e = this._columns[b],
                d = e.get_columnName(),
                a = f;
            if (c)
                a = Sys.Preview.TypeDescriptor.getProperty(c, d);
            if (a === f || typeof a === "undefined")
                a = e.get_defaultValue();
            g[d] = a
        }
        var h = new Sys.Preview.Data.DataRow(g, this, -1);
        h._set_state(Sys.Preview.Data.DataRowState.Detached);
        return h
    },
    getChanges: function() {
        if (this._disposed)
            return null;
        return { updated: this._updatedRows, inserted: this._newRows, deleted: this._deletedRows }
    },
    getColumn: function(b) {
        if (this._disposed)
            return null;
        var d = this._columnDictionary[b];
        if (d)
            return d;
        for (var c = this._columns.length - 1; c >= 0; c--) {
            var a = this._columns[c];
            if (a.get_columnName() === b) {
                this._columnDictionary[b] = a;
                return a
            }
        }
        return null
    },
    getRow: function(b) {
        if (this._disposed)
            return null;
        var c = this._rows[b];
        if (!c) {
            var a = this._array[b];
            if (a) {
                c = Sys.Preview.Data.DataRow.isInstanceOfType(a) ? a : new Sys.Preview.Data.DataRow(a, this, b);
                this._rows[b] = c
            }
        }
        return c
    },
    getItem: function(a) {
        return this.getRow(a)
    },
    remove: function(b) {
        if (this._disposed)
            return;
        if (Sys.Preview.Data.DataRow.isInstanceOfType(b))
            b = b.get_rowObject();
        var d = this.get_isDirty(),
            a = Array.indexOf(this._array, b),
            c = this.getItem(a);
        if (typeof this._array.removeAt === "function")
            this._array.removeAt(a);
        else
            Array.removeAt(this._array, a);
        Array.removeAt(this._rows, a);
        a = Array.indexOf(this._newRows, b);
        if (a !== -1)
            Array.removeAt(this._newRows, a);
        else
            Array.add(this._deletedRows, b);
        c._set_state(Sys.Preview.Data.DataRowState.Deleted);
        this._onCollectionChanged(Sys.Preview.NotifyCollectionChangedAction.Remove, c);
        this._onPropertyChanged("length");
        d !== this.get_isDirty() &&
            this._onPropertyChanged("isDirty")
    },
    dispose: function() {
        delete this._events;
        this._disposed = true;
        var a,
            b;
        if (this._rows)
            for (a = this._rows.length - 1; a >= 0; a--) {
                b = this._rows[a];
                b &&
                    this._rows[a].dispose()
            }
        if (this._deletedRows)
            for (a = this._deletedRows.length - 1; a >= 0; a--) {
                b = this._deletedRows[a];
                b &&
                    b.dispose &&
                    b.dispose()
            }
        if (this._newRows)
            for (a = this._newRows.length - 1; a >= 0; a--) {
                b = this._newRows[a];
                b &&
                    b.dispose &&
                    b.dispose()
            }
        if (this._updatedRows)
            for (a = this._updatedRows.length - 1; a >= 0; a--) {
                b = this._updatedRows[a];
                b &&
                    b.dispose &&
                    b.dispose()
            }
        this._rows = null;
        this._deletedRows = null;
        this._newRows = null;
        this._updatedRows = null;
        this._columns = null;
        this._array = null;
        this._keys = null
    },
    raiseRowChanged: function(a) {
        if (this._disposed)
            return;
        if (Array.indexOf(this._updatedRows, a) === -1 && Array.indexOf(this._newRows, a) === -1) {
            var b = this.get_isDirty();
            Array.add(this._updatedRows, a);
            !b &&
                this._onPropertyChanged("isDirty")
        }
    }
};
Sys.Preview.Data.DataTable.parseFromJson = function(a) {
    var b = null;
    if (a.columns) {
        b = [];
        for (var c = 0; c < a.columns.length; c++)
            Array.add(b, Sys.Preview.Data.DataColumn.parseFromJson(a.columns[c]))
    }
    return new Sys.Preview.Data.DataTable(b, a.rows)
};
Sys.Preview.Data.DataTable.descriptor = {
    properties: [
        { name: "columns", type: Array, readOnly: true }, { name: "keyNames", type: Array, readOnly: true },
        { name: "length", type: Number, readOnly: true }, { name: "isDirty", type: Boolean, readOnly: true }
    ],
    methods: [{ name: "add" }, { name: "clear" }, { name: "remove" }],
    events: [{ name: "collectionChanged", readOnly: true }, { name: "propertyChanged", readOnly: true }]
};
Sys.Preview.Data.DataTable.registerClass("Sys.Preview.Data.DataTable",
    null,
    Sys.Preview.Data.IData,
    Sys.INotifyPropertyChange,
    Sys.Preview.INotifyCollectionChanged,
    Sys.IDisposable);
Sys.Preview.Data.DataView = function() {
    Sys.Preview.Data.DataView.initializeBase(this)
};
Sys.Preview.Data.DataView.prototype = {
    _data: null,
    _filteredTable: null,
    _filteredRows: null,
    _paginatedRows: null,
    _pageSize: 0,
    _pageIndex: 0,
    _sorted: false,
    _sortColumn: "",
    _sortDirection: Sys.Preview.Data.SortDirection.Ascending,
    _filters: null,
    _dataChangedDelegate: null,
    _compareRowsDelegate: null,
    _updating: false,
    get_data: function() {
        return this._data
    },
    set_data: function(a) {
        if (!this._dataChangedDelegate)
            this._dataChangedDelegate = Function.createDelegate(this, this.onDataChanged);
        this._filteredTable = null;
        this._data &&
            this._data.remove_collectionChanged &&
            this._data.remove_collectionChanged(this._dataChangedDelegate);
        this._data = a;
        this._data &&
            this._data.add_collectionChanged &&
            this._data.add_collectionChanged(this._dataChangedDelegate);
        this.raisePropertyChanged("data");
        this.raisePropertyChanged("filteredData")
    },
    get_filteredData: function() {
        this.ensureFilteredData();
        return this._filteredTable
    },
    get_filters: function() {
        if (!this._filters) {
            this._filters = Sys.Component.createCollection(this);
            if (!this._dataChangedDelegate)
                this._dataChangedDelegate = Function.createDelegate(this, this.onDataChanged);
            this._filters.add_collectionChanged(this._dataChangedDelegate)
        }
        return this._filters
    },
    get_hasNextPage: function() {
        this.ensureFilteredData();
        return this.get_pageIndex() < this.get_pageCount() - 1
    },
    get_hasPreviousPage: function() {
        if (!this._data)
            return false;
        return this.get_pageIndex() > 0
    },
    get_length: function() {
        this.ensureFilteredData();
        return this._filteredTable
            ? this._filteredTable.length ? this._filteredTable.length : this._filteredTable.get_length()
            : 0
    },
    get_pageCount: function() {
        if (this._pageSize === 0)
            return 1;
        this.ensureFilteredData();
        if (!this._filteredRows)
            return 1;
        return Math.floor((this._filteredRows.length - 1) / this._pageSize) + 1
    },
    get_pageIndex: function() {
        return this._pageIndex
    },
    set_pageIndex: function(a, c) {
        var b = this.get_pageCount();
        if (a >= b)
            a = b > 0 ? b - 1 : 0;
        if (a !== this._pageIndex) {
            var d = this.prepareChange();
            this._pageIndex = a;
            this._paginatedRows = null;
            this.triggerChangeEvents(d, false);
            !c &&
                this.raisePropertyChanged("filteredData")
        }
    },
    get_pageSize: function() {
        return this._pageSize
    },
    set_pageSize: function(a) {
        if (this._pageSize !== a) {
            var b = this.prepareChange();
            this._pageSize = a;
            this._paginatedRows = null;
            this.triggerChangeEvents(b, true);
            this.raisePropertyChanged("filteredData")
        }
    },
    get_sortColumn: function() {
        return this._sortColumn
    },
    set_sortColumn: function(a) {
        this.sort(a, this._sortDirection)
    },
    get_sortDirection: function() {
        return this._sortDirection
    },
    set_sortDirection: function(a) {
        this.sort(this._sortColumn, a)
    },
    dispose: function() {
        this._disposed = true;
        if (this._filters) {
            this._filters.dispose();
            this._filters = null
        }
        if (this._data && this._dataChangedDelegate) {
            this._data.removeCollectionChanged &&
                this._data.remove_collectionChanged(this._dataChangedDelegate);
            this._dataChangedDelegate = null;
            this._data = null
        }
        Sys.Preview.Data.DataView.callBaseMethod(this, "dispose")
    },
    getItem: function(a) {
        return this._filteredTable ? this._filteredTable[a] : null
    },
    initialize: function() {
        Sys.Preview.Data.DataView.callBaseMethod(this, "initialize");
        if (this._filters)
            for (var a = 0; a < this._filters.length; a++)
                this._filters[a].initialize(this)
    },
    sort: function(d, a) {
        var b = d !== this._sortColumn,
            c = a !== this._sortDirection;
        if (b || c) {
            this._sortColumn = d;
            this._sortDirection = a;
            b &&
                this.raisePropertyChanged("sortColumn");
            c &&
                this.raisePropertyChanged("sortDirection");
            this._sorted = false;
            this.set_pageIndex(0, true);
            this.raisePropertyChanged("filteredData")
        }
    },
    _raiseFilterChanged: function() {
        this._dataChangedDelegate(this, Sys.EventArgs.Empty)
    },
    compareRows: function(c, d) {
        var a = this.get_sortColumn(),
            b = this.get_sortDirection();
        if (c.getProperty(a) === d.getProperty(a))
            return 0;
        if (c.getProperty(a) < d.getProperty(a))
            return b === Sys.Preview.Data.SortDirection.Ascending ? -1 : 1;
        return b === Sys.Preview.Data.SortDirection.Ascending ? 1 : -1
    },
    onDataChanged: function(d, b) {
        if (this._disposed)
            return;
        if (b !== Sys.EventArgs.Empty) {
            var c = b.get_changedItem(),
                a = this.get_filters();
            if (c && !this.isValidAfterFiltering.call(c, a, a.length))
                return
        }
        this._filteredTable = null;
        this.raisePropertyChanged("filteredData")
    },
    ensureFilteredData: function() {
        if (this._updating || !this._data)
            return;
        this._updating = true;
        var i = this.prepareChange();
        if (typeof this._data.length === "number" && this._data.length === 0) {
            this._filteredRows = [];
            this._paginatedRows = [];
            this._filteredTable = new Sys.Preview.Data.DataRowCollection([], this._data);
            this._filteredTable.initialize();
            this._sorted = true
        } else {
            if (!this._filteredTable) {
                this._filteredRows = [];
                this._paginatedRows = null;
                this._filteredTable = null;
                for (var e = this.get_filters(),
                    g = e.length,
                    h = this._data.get_length
                        ? this._data.get_length()
                        : typeof this._data.length !== "undefined" ? this._data.length : 0,
                    a = 0;
                    a < h;
                    a++) {
                    var b = this._data.getItem ? this._data.getItem(a) : this._data[a];
                    if (!Sys.Preview.Data.DataRow.isInstanceOfType(b))
                        b = new Sys.Preview.Data.DataRow(b, null, a);
                    if (this.isValidAfterFiltering.call(this, b, e, g)) {
                        var f = new Sys.Preview.Data.DataRowView(b, a);
                        f.initialize();
                        Array.add(this._filteredRows, f)
                    }
                }
            }
            if (!this._sorted && this._sortColumn && this._filteredRows.length !== 0) {
                if (!this._compareRowsDelegate)
                    this._compareRowsDelegate = Function.createDelegate(this, this.compareRows);
                this._filteredRows.sort(this._compareRowsDelegate);
                for (var a = this._filteredRows.length - 1; a >= 0; a--)
                    this._filteredRows[a]._set_index(a);
                this._sorted = true;
                this._paginatedRows = null;
                this._filteredTable = null
            }
            if (this._pageSize > 0 && !this._paginatedRows) {
                this._paginatedRows = [];
                this._filteredTable = null;
                var d = this._filteredRows.length,
                    c = this._pageSize * this._pageIndex;
                if (d && c >= d) {
                    this._pageIndex = Math.floor(d / this._pageSize) - 1;
                    c = this._pageSize * this._pageIndex
                }
                for (var j = c + this._pageSize,
                    a = c;
                    a < j && a < d;
                    a++) {
                    this._filteredRows[a]._set_index(a);
                    Array.add(this._paginatedRows, this._filteredRows[a])
                }
            } else
                this._paginatedRows = this._filteredRows;
            if (!this._filteredTable) {
                this._filteredTable = new Sys.Preview.Data.DataRowCollection(this._paginatedRows, this._data);
                this._filteredTable.initialize()
            }
        }
        this.triggerChangeEvents(i, true);
        this._updating = false
    },
    isValidAfterFiltering: function(d, c, b) {
        for (var a = 0; a < b; a++)
            if (!c[a].filter(d))
                return false;
        return true
    },
    triggerChangeEvents: function(b, d) {
        var c,
            a = this.get_pageIndex();
        if (d) {
            this.get_pageCount() !== b.pageCount &&
                this.raisePropertyChanged("pageCount");
            this.get_length() !== b.length &&
                this.raisePropertyChanged("length");
            c = this.get_pageCount();
            if (a >= c) {
                a = c > 0 ? c - 1 : 0;
                this.set_pageIndex(a)
            }
        } else
            c = b.pageCount;
        a !== b.pageIndex &&
            this.raisePropertyChanged("pageIndex");
        a < c - 1 !== b.hasNextPage &&
            this.raisePropertyChanged("hasNextPage");
        a > 0 !== b.hasPreviousPage &&
            this.raisePropertyChanged("hasPreviousPage")
    },
    prepareChange: function() {
        return {
            pageCount: this.get_pageCount(),
            pageIndex: this.get_pageIndex(),
            length: this.get_length(),
            hasNextPage: this.get_hasNextPage(),
            hasPreviousPage: this.get_hasPreviousPage()
        }
    }
};
Sys.Preview.Data.DataView.descriptor = {
    properties: [
        { name: "data", type: Sys.Preview.Data.DataTable },
        { name: "filteredData", type: Sys.Preview.Data.DataTable, readOnly: true },
        { name: "filters", type: Array, readOnly: true }, { name: "hasNextPage", type: Boolean, readOnly: true },
        { name: "hasPreviousPage", type: Boolean, readOnly: true }, { name: "length", type: Number, readOnly: true },
        { name: "pageCount", type: Number, readOnly: true }, { name: "pageIndex", type: Number },
        { name: "pageSize", type: Number }, { name: "sortColumn", type: String },
        { name: "sortDirection", type: Sys.Preview.Data.SortDirection }
    ],
    methods: [
        {
            name: "sort",
            params: [
                { name: "sortColumn", type: String }, { name: "sortDirection", type: Sys.Preview.Data.SortDirection }
            ]
        }
    ]
};
Sys.Preview.Data.DataView.registerClass("Sys.Preview.Data.DataView", Sys.Component);
Sys.Preview.Data.DataFilter = function() {
    Sys.Preview.Data.DataFilter.initializeBase(this)
};
Sys.Preview.Data.DataFilter.prototype = {
    filter: function() {
        throw Error.notImplemented()
    },
    get_dataContext: function() {
        var a = Sys.Preview.Data.DataFilter.callBaseMethod(this, "get_dataContext");
        if (!a)
            if (this.owner)
                a = this.owner.get_dataContext();
        return a
    },
    dispose: function() {
        this.owner = null;
        Sys.Preview.Data.DataFilter.callBaseMethod(this, "dispose")
    },
    raisePropertyChanged: function(a) {
        Sys.Preview.Data.DataFilter.callBaseMethod(this, "raisePropertyChanged", [a]);
        this.owner &&
            this.owner._raiseFilterChanged(this)
    },
    setOwner: function(a) {
        this.owner = a
    }
};
Sys.Preview.Data.DataFilter.registerClass("Sys.Preview.Data.DataFilter", Sys.Component);
Sys.Preview.Data.PropertyFilter = function() {
    Sys.Preview.Data.PropertyFilter.initializeBase(this)
};
Sys.Preview.Data.PropertyFilter.prototype = {
    _property: null,
    _value: null,
    get_property: function() {
        return this._property
    },
    set_property: function(a) {
        this._property = a;
        this.raisePropertyChanged("property")
    },
    get_value: function() {
        return this._value
    },
    set_value: function(a) {
        this._value = a;
        this.raisePropertyChanged("value")
    },
    filter: function(a) {
        return Sys.Preview.TypeDescriptor.getProperty(a, this._property) === this._value
    }
};
Sys.Preview.Data.PropertyFilter.descriptor = { properties: [{ name: "property", type: String }, { name: "value" }] };
Sys.Preview.Data.PropertyFilter.registerClass("Sys.Preview.Data.PropertyFilter", Sys.Preview.Data.DataFilter);
Sys.Preview.Data.DataSource = function() {
    Sys.Preview.Data.DataSource.initializeBase(this);
    this._parameters = {}
};
Sys.Preview.Data.DataSource.prototype = {
    _data: null,
    _initialData: null,
    _autoLoad: false,
    _serviceURL: "",
    _loadMethod: "",
    _serviceType: Sys.Preview.Data.ServiceType.DataService,
    _isReady: true,
    _dataChangedDelegate: null,
    _request: null,
    _timeout: 0,
    add_dataAvailable: function(a) {
        this.get_events().addHandler("dataAvailable", a)
    },
    remove_dataAvailable: function(a) {
        this.get_events().removeHandler("dataAvailable", a)
    },
    _onDataAvailable: function() {
        var a = this.get_events().getHandler("dataAvailable");
        a &&
            a(this, Sys.EventArgs.Empty)
    },
    get_autoLoad: function() {
        return this._autoLoad
    },
    set_autoLoad: function(a) {
        this._autoLoad = a
    },
    get_data: function() {
        return this._data
    },
    set_data: function(a) {
        if (a && Object.getTypeName(a) === "Object")
            a = Sys.Preview.Data.DataTable.parseFromJson(a);
        var b = this.get_isDirtyAndReady(),
            d = this.get_isReady(),
            c = this.get_rowCount();
        this._data &&
            this._dataChangedDelegate &&
            this._data.remove_propertyChanged(this._dataChangedDelegate);
        if (a instanceof Array)
            a = new Sys.Preview.Data.DataTable([], a);
        this._data = a;
        if (this._data) {
            if (!this._dataChangedDelegate)
                this._dataChangedDelegate = Function.createDelegate(this, this.onDataPropertyChanged);
            this._data.add_propertyChanged(this._dataChangedDelegate)
        }
        this.raisePropertyChanged("data");
        b !== this.get_isDirtyAndReady() &&
            this.raisePropertyChanged("isDirtyAndReady");
        d !== this.get_isReady() &&
            this.raisePropertyChanged("isReady");
        c !== this.get_rowCount() &&
            this.raisePropertyChanged("rowCount")
    },
    get_initialData: function() {
        return this._initialData
    },
    set_initialData: function(a) {
        if (!this._data)
            if (this.get_isInitialized()) {
                var b = null;
                if (a && a.length)
                    b = Sys.Serialization.JavaScriptSerializer.deserialize(a);
                this.set_data(b)
            } else
                this._initialData = a
    },
    get_isDirtyAndReady: function() {
        return this._isReady && this._data && this._data.get_isDirty()
    },
    get_isReady: function() {
        return this._isReady
    },
    _set_isReady: function(a) {
        if (this._isReady !== a) {
            var b = this.get_isDirtyAndReady();
            this._isReady = a;
            this.raisePropertyChanged("isReady");
            this.get_isDirtyAndReady() !== b &&
                this.raisePropertyChanged("isDirtyAndReady")
        }
    },
    get_loadMethod: function() {
        return this._loadMethod
    },
    set_loadMethod: function(a) {
        this._loadMethod = a
    },
    get_parameters: function() {
        return this._parameters
    },
    get_serviceURL: function() {
        return this._serviceURL
    },
    set_serviceURL: function(a) {
        this._serviceURL = a
    },
    get_serviceType: function() {
        return this._serviceType
    },
    set_serviceType: function(a) {
        this._serviceType = a
    },
    get_rowCount: function() {
        if (this._data)
            return this._data.get_length();
        return 0
    },
    dispose: function() {
        this._data &&
            this._data.dispose();
        this._data = null;
        Sys.Preview.Data.DataSource.callBaseMethod(this, "dispose")
    },
    initialize: function() {
        Sys.Preview.Data.DataSource.callBaseMethod(this, "initialize");
        (this._autoLoad || this._initialData) &&
            this.load()
    },
    onDataPropertyChanged: function(b, a) {
        switch (a.get_propertyName()) {
        case "isDirty":
            this.raisePropertyChanged("isDirtyAndReady");
            break;
        case "length":
            this.raisePropertyChanged("rowCount");
            break
        }
    },
    onRequestComplete: function(a) {
        this.onLoadComplete(a.get_object())
    },
    onLoadComplete: function(rawData, userContext, methodName) {
        var oldDirtyAndReady = this.get_isDirtyAndReady();
        this.set_data(eval(rawData));
        this._isReady = true;
        this.raisePropertyChanged("isReady");
        this.get_isDirtyAndReady() !== oldDirtyAndReady &&
            this.raisePropertyChanged("isDirtyAndReady");
        this._onDataAvailable()
    },
    ready: function() {
        this._set_isReady(true)
    },
    load: function() {
        if (this._initialData) {
            this.set_data(Sys.Serialization.JavaScriptSerializer.deserialize(this._initialData));
            this._initialData = null;
            return
        }
        this._set_isReady(false);
        if (this._serviceType === Sys.Preview.Data.ServiceType.DataService) {
            var e = "GetData",
                f = { parameters: this._parameters, loadMethod: this._loadMethod },
                b = Function.createDelegate(this, this.onLoadComplete),
                d = Function.createDelegate(this, this.ready);
            this._request = Sys.Net.WebServiceProxy.invoke(this._serviceURL, e, false, f, b, d, this, this._timeout)
        } else {
            var b = Function.createDelegate(this, this.onRequestComplete),
                c = Function.createDelegate(this, this.ready),
                g = Sys.Net.WebRequest._createUrl(this._serviceURL, this._parameters),
                a = new Sys.Net.WebRequest;
            a.set_url(g);
            a.add_completed(function(a, e) {
                if (a.get_responseAvailable()) {
                    var d = a.get_statusCode();
                    if (d >= 200 || d < 300)
                        b(a, e);
                    else
                        c()
                }
            });
            a.invoke()
        }
    },
    save: function() {
        if (this._data && this._data.get_isDirty()) {
            var b = this._data.getChanges();
            this._set_isReady(false);
            if (this._serviceType === Sys.Preview.Data.ServiceType.DataService) {
                var d = "SaveData",
                    e = { changeList: b, parameters: this._parameters, loadMethod: this._loadMethod },
                    a = Function.createDelegate(this, this.onLoadComplete),
                    c = Function.createDelegate(this, this.ready);
                this._request = Sys.Net.WebServiceProxy.invoke(this._serviceURL, d, false, e, a, c, this, this._timeout)
            }
        }
    }
};
Sys.Preview.Data.DataSource.descriptor = {
    properties: [
        { name: "data", type: Object }, { name: "autoLoad", type: Boolean }, { name: "initialData", type: String },
        { name: "isDirtyAndReady", type: Boolean, readOnly: true }, { name: "isReady", type: Boolean, readOnly: true },
        { name: "loadMethod", type: String }, { name: "rowCount", type: Number, readOnly: true },
        { name: "serviceURL", type: String }, { name: "parameters", type: Object, readOnly: true },
        { name: "serviceType", type: Sys.Preview.Data.ServiceType }
    ],
    methods: [{ name: "load" }, { name: "save" }],
    events: [{ name: "dataAvailable", readOnly: true }]
};
Sys.Preview.Data.DataSource.registerClass("Sys.Preview.Data.DataSource", Sys.Component);
Sys.Preview.Data.XMLDataSource = function() {
    Sys.Preview.Data.XMLDataSource.initializeBase(this)
};
Sys.Preview.Data.XMLDataSource.prototype = {
    _document: null,
    _initialDocument: null,
    _data: null,
    _xpath: "",
    _serviceURL: null,
    _parameters: null,
    _isReady: false,
    _autoLoad: false,
    add_documentAvailable: function(a) {
        this.get_events().addHandler("documentAvailable", a)
    },
    remove_documentAvailable: function(a) {
        this.get_events().removeHandler("documentAvailable", a)
    },
    _onDocumentAvailable: function() {
        var a = this.get_events().getHandler("documentAvailable");
        a &&
            a(this, Sys.EventArgs.Empty)
    },
    get_autoLoad: function() {
        return this._autoLoad
    },
    set_autoLoad: function(a) {
        this._autoLoad = a
    },
    get_document: function() {
        return this._document
    },
    get_data: function() {
        return this._data
    },
    get_initialDocument: function() {
        return this._initialDocument
    },
    set_initialDocument: function(b) {
        if (!this._document) {
            var a;
            if (Sys.Net.XMLDOM)
                a = new Sys.Net.XMLDOM(b.trim());
            else
                a = new XMLDOM(b.trim());
            if (this.get_isInitialized())
                this._setDocument(a);
            else
                this._initialDocument = a
        }
    },
    get_isReady: function() {
        return this._isReady
    },
    get_parameters: function() {
        if (this._parameters === null)
            this._parameters = {};
        return this._parameters
    },
    get_serviceURL: function() {
        return this._serviceURL
    },
    set_serviceURL: function(a) {
        this._serviceURL = a
    },
    get_xpath: function() {
        return this._xpath
    },
    set_xpath: function(a) {
        if (this._xpath !== a) {
            this._xpath = a;
            this._document &&
                this._updateData()
        }
    },
    dispose: function() {
        this._document = null;
        this._initialDocument = null;
        this._data = null;
        Sys.Preview.Data.XMLDataSource.callBaseMethod(this, "dispose")
    },
    initialize: function() {
        Sys.Preview.Data.XMLDataSource.callBaseMethod(this, "initialize");
        this._autoLoad &&
            this.load()
    },
    load: function() {
        if (this._initialDocument) {
            var a = this._initialDocument;
            this._initialDocument = null;
            this._setDocument(a);
            this._updateReady(true)
        } else
            this._invokeService()
    },
    _invokeService: function() {
        var c = Function.createDelegate(this, this._serviceCompleted),
            b = Function.createDelegate(this, this._serviceTimeout),
            d = Sys.Net.WebRequest._createUrl(this._serviceURL, this.get_parameters()),
            a = new Sys.Net.WebRequest;
        a.set_url(d);
        a.add_completed(function(a, e) {
            if (a.get_responseAvailable()) {
                var d = a.get_statusCode();
                if (d >= 200 || d < 300)
                    c(a, e);
                else
                    b()
            }
        });
        a.invoke();
        this._updateReady(false)
    },
    _serviceCompleted: function(a) {
        a.get_statusCode() === 200 &&
            this._setDocument(a.get_xml());
        this._updateReady(true)
    },
    _serviceTimeout: function() {
        this._updateReady(true)
    },
    _setDocument: function(a) {
        this._document = a;
        this._updateData();
        this.raisePropertyChanged("document");
        this._onDocumentAvailable()
    },
    _updateData: function() {
        var a = this._xpath;
        if (!a || !a.length)
            a = "*/*";
        for (var d = this._document.selectNodes(a),
            e = [],
            c = 0;
            c < d.length;
            c++) {
            var b = d[c];
            if (!b || b.nodeType !== 1)
                continue;
            Array.add(e, b)
        }
        this._data = e;
        this.raisePropertyChanged("data")
    },
    _updateReady: function(a) {
        this._isReady = a;
        this.raisePropertyChanged("isReady")
    }
};
Sys.Preview.Data.XMLDataSource.descriptor = {
    properties: [
        { name: "autoLoad", type: Boolean }, { name: "data", type: Object, readOnly: true },
        { name: "document", type: Object, readOnly: true }, { name: "initialDocument", type: String },
        { name: "isReady", type: Boolean, readOnly: true }, { name: "parameters", type: Object, readOnly: true },
        { name: "serviceURL", type: String }, { name: "xpath", type: String }
    ],
    events: [{ name: "documentAvailable", readOnly: true }],
    methods: [{ name: "load" }]
};
Sys.Preview.Data.XMLDataSource.registerClass("Sys.Preview.Data.XMLDataSource", Sys.Component);
Type.registerNamespace("Sys.Preview.UI");
Sys.Preview.UI.DialogResult = function() {
    throw Error.invalidOperation()
};
Sys.Preview.UI.DialogResult.prototype = { OK: 0, Cancel: 1 };
Sys.Preview.UI.DialogResult.registerEnum("Sys.Preview.UI.DialogResult");
Sys.Preview.UI.Color = function(c, b, a) {
    Sys.Preview.UI.Color.initializeBase(this);
    this._r = c;
    this._g = b;
    this._b = a
};
Sys.Preview.UI.Color.prototype = {
    get_blue: function() {
        return this._b
    },
    get_green: function() {
        return this._g
    },
    get_red: function() {
        return this._r
    },
    toString: function() {
        var c = this._r.toString(16);
        if (this._r < 16)
            c = "0" + c;
        var a = this._g.toString(16);
        if (this._g < 16)
            a = "0" + a;
        var b = this._b.toString(16);
        if (this._b < 16)
            b = "0" + b;
        return "#" + c + a + b
    }
};
Sys.Preview.UI.Color.registerClass("Sys.Preview.UI.Color");
Sys.Preview.UI.Color.parse = function(a) {
    if (a && a.length === 7 && a.startsWith("#")) {
        var d = parseInt("0x" + a.substr(1, 2), 10),
            b = parseInt("0x" + a.substr(3, 2), 10),
            c = parseInt("0x" + a.substr(5, 2), 10);
        return new Sys.Preview.UI.Color(d, b, c)
    }
    return null
};
Sys.Preview.Attributes.defineAttribute("ValueProperty");
Sys.Preview.UI.CommandEventArgs = function(a, b) {
    Sys.Preview.UI.CommandEventArgs.initializeBase(this);
    this._commandName = a;
    this._argument = b
};
Sys.Preview.UI.CommandEventArgs.prototype = {
    get_argument: function() {
        return this._argument
    },
    get_commandName: function() {
        return this._commandName
    }
};
Sys.Preview.UI.CommandEventArgs.descriptor = {
    properties: [
        { name: "argument", type: String, readOnly: true }, { name: "commandName", type: String, readOnly: true }
    ]
};
Sys.Preview.UI.CommandEventArgs.registerClass("Sys.Preview.UI.CommandEventArgs", Sys.EventArgs);
Sys.Preview.UI.IValidationTarget = function() {
};
Sys.Preview.UI.IValidationTarget.prototype = {
    validated: null,
    get_isInvalid: function() {
        throw Error.notImplemented()
    },
    get_validationMessage: function() {
        throw Error.notImplemented()
    },
    validate: function() {
        throw Error.notImplemented()
    }
};
Sys.Preview.UI.IValidationTarget.registerInterface("Sys.Preview.UI.IValidationTarget");
Sys.Preview.UI.Validator = function() {
    Sys.Preview.UI.Validator.initializeBase(this)
};
Sys.Preview.UI.Validator.prototype = {
    _errorMessage: null,
    _isInvalid: false,
    get_dataContext: function() {
        var a = Sys.Component.callBaseMethod(this, "get_dataContext");
        if (!a)
            if (this.control)
                a = this.control.get_dataContext();
        return a
    },
    get_errorMessage: function() {
        return this._errorMessage
    },
    set_errorMessage: function(a) {
        this._errorMessage = a
    },
    get_isInvalid: function() {
        return this._isInvalid
    },
    dispose: function() {
        this.control = null;
        Sys.Preview.UI.Validator.callBaseMethod(this, "dispose")
    },
    performValidation: function(a) {
        this._isInvalid = !this.validate(a)
    },
    setOwner: function(a) {
        this.control = a
    },
    validate: function() {
        throw Error.notImplemented()
    }
};
Sys.Preview.UI.Validator.descriptor = {
    properties: [{ name: "errorMessage", type: String }, { name: "isInvalid", type: Boolean }]
};
Sys.Preview.UI.Validator.registerClass("Sys.Preview.UI.Validator", Sys.Component);
Sys.Preview.UI.ValidationGroup = function() {
    Sys.Preview.UI.ValidationGroup.initializeBase(this);
    this._associatedControls = []
};
Sys.Preview.UI.ValidationGroup.prototype = {
    _valid: true,
    _validated: false,
    _validatedHandler: null,
    get_associatedControls: function() {
        return this._associatedControls
    },
    get_isValid: function() {
        if (!this._validated) {
            this.validate();
            this._validated = true
        }
        return this._valid
    },
    dispose: function() {
        if (this._associatedControls) {
            for (var a = 0; a < this._associatedControls.length; a++) {
                this._associatedControls[a].get_component().remove_validated(this._validatedHandler);
                this._associatedControls[a].dispose()
            }
            this._validatedHandler = null;
            this._associatedControls = null
        }
        Sys.Preview.UI.ValidationGroup.callBaseMethod(this, "dispose")
    },
    initialize: function() {
        Sys.Preview.UI.ValidationGroup.callBaseMethod(this, "initialize");
        this._validatedHandler = Function.createDelegate(this, this._onControlValidated);
        for (var a = 0; a < this._associatedControls.length; a++)
            this._associatedControls[a].get_component().add_validated(this._validatedHandler)
    },
    validate: function() {
        var b = true;
        if (this._associatedControls && this._associatedControls.length)
            for (var a = 0; a < this._associatedControls.length; a++)
                if (this._associatedControls[a].get_component().get_isInvalid()) {
                    b = false;
                    break
                }
        this._valid = b
    },
    _onControlValidated: function() {
        var a = this._valid;
        this.validate();
        this._valid !== a &&
            this.raisePropertyChanged("isValid")
    }
};
Sys.Preview.UI.ValidationGroup.descriptor = {
    properties: [
        { name: "isValid", type: Boolean, readOnly: true }, { name: "associatedControls", type: Array, readOnly: true }
    ]
};
Sys.Preview.UI.ValidationGroup.registerClass("Sys.Preview.UI.ValidationGroup", Sys.Component);
Sys.Preview.UI.InputControl = function(a) {
    Sys.Preview.UI.InputControl.initializeBase(this, [a])
};
Sys.Preview.UI.InputControl.prototype = {
    _valuePropertyName: null,
    _validators: null,
    _invalid: false,
    _validated: false,
    _validationMessage: null,
    add_validated: function(a) {
        this.get_events().addHandler("validated", a)
    },
    remove_validated: function(a) {
        if (this._disposed)
            return;
        this.get_events().removeHandler("validated", a)
    },
    _onValidated: function() {
        var a = this.get_events().getHandler("validated");
        a &&
            a(this, Sys.EventArgs.Empty)
    },
    get_isInvalid: function() {
        if (!this._validated) {
            this.validate(false);
            this._validated = true
        }
        return this._invalid
    },
    get_validationMessage: function() {
        return this.get_isInvalid() ? this._validationMessage : ""
    },
    get_validators: function() {
        if (!this._validators)
            this._validators = Sys.Component.createCollection(this);
        return this._validators
    },
    dispose: function() {
        if (this._validators) {
            this._validators.dispose();
            this._validators = null
        }
        this._disposed = true;
        Sys.Preview.UI.InputControl.callBaseMethod(this, "dispose")
    },
    raisePropertyChanged: function(a) {
        if (this._validators && this._validators.length) {
            if (!this._valuePropertyName)
                this._valuePropertyName = Sys.Preview.TypeDescriptor
                    .getAttribute(this, Sys.Preview.Attributes.ValueProperty);
            if (this._valuePropertyName === a)
                if (!this.validate(true))
                    return
        }
        Sys.Preview.UI.InputControl.callBaseMethod(this, "raisePropertyChanged", [a])
    },
    validate: function(d) {
        if (!this._validators || !this._validators.length)
            return true;
        if (!this._valuePropertyName)
            this._valuePropertyName = Sys.Preview.TypeDescriptor
                .getAttribute(this, Sys.Preview.Attributes.ValueProperty);
        for (var e = Sys.Preview.TypeDescriptor.getProperty(this, this._valuePropertyName),
            a = null,
            c = 0;
            c < this._validators.length;
            c++) {
            var b = this._validators[c];
            b.performValidation(e);
            if (b.get_isInvalid()) {
                a = b;
                this._validationMessage = a.get_errorMessage();
                this._invalid = true;
                break
            }
        }
        if (!a)
            this._invalid = false;
        d &&
            this._onValidated();
        return !this._invalid
    }
};
Sys.Preview.UI.InputControl.descriptor = {
    properties: [
        { name: "isInvalid", type: Boolean, readOnly: true },
        { name: "validationMessage", type: String, readOnly: true }, { name: "validators", type: Array, readOnly: true }
    ]
};
Sys.Preview.UI.InputControl.registerClass("Sys.Preview.UI.InputControl",
    Sys.UI.Control,
    Sys.Preview.UI.IValidationTarget);
Sys.Preview.UI.MessageBoxStyle = function() {
    throw Error.invalidOperation()
};
Sys.Preview.UI.MessageBoxStyle.prototype = { OK: 0, OKCancel: 1 };
Sys.Preview.UI.MessageBoxStyle.registerEnum("Sys.Preview.UI.MessageBoxStyle");
Sys.Preview.UI.Window = function() {
    throw Error.invalidOperation()
};
Sys.Preview.UI.Window.messageBox = function(c, a) {
    if (!a)
        a = Sys.Preview.UI.MessageBoxStyle.OK;
    var b = Sys.Preview.UI.DialogResult.OK;
    switch (a) {
    case Sys.Preview.UI.MessageBoxStyle.OK:
        window.alert(c);
        break;
    case Sys.Preview.UI.MessageBoxStyle.OKCancel:
        if (window.confirm(c) === false)
            b = Sys.Preview.UI.DialogResult.Cancel;
        break
    }
    return b
};
Sys.Preview.UI.Window.inputBox = function(b, a) {
    if (!a)
        a = "";
    return window.prompt(b, a)
};
Sys.Preview.UI.ITemplate = function() {
    throw Error.notImplemented()
};
Sys.Preview.UI.ITemplate.prototype = {
    createInstance: function() {
        throw Error.notImplemented()
    },
    initialize: function() {
        throw Error.notImplemented()
    }
};
Sys.Preview.UI.ITemplate.registerInterface("Sys.Preview.UI.ITemplate");
Sys.Preview.UI.ITemplate.disposeInstance = function(a) {
    if (a.markupContext) {
        a.markupContext.dispose();
        a.markupContext = null
    }
};
Sys.Preview.UI.TemplateInstance = function() {
    this.instanceElement = null;
    this.callbackResult = null
};
Sys.Preview.UI.Template = function(b, c, a) {
    Sys.Preview.UI.Template.initializeBase(this);
    this._layoutElement = b;
    this._scriptNode = c;
    this._parentMarkupContext = a
};
Sys.Preview.UI.Template.prototype = {
    createInstance: function(e, g, c, f) {
        var a = new Sys.Preview.UI.TemplateInstance;
        a.instanceElement = this._layoutElement.cloneNode(true);
        var d = document.createDocumentFragment();
        d.appendChild(a.instanceElement);
        var b = Sys.Preview.MarkupContext.createLocalContext(d, this._parentMarkupContext, g);
        b.open();
        Sys.Preview.MarkupParser.parseNodes(this._scriptNode.childNodes, b);
        if (c)
            a.callbackResult = c(a.instanceElement, b, f);
        a.instanceElement.markupContext = b;
        e.appendChild(a.instanceElement);
        b.close();
        return a
    },
    dispose: function() {
        this._layoutElement = null;
        this._scriptNode = null;
        this._parentMarkupContext = null
    },
    initialize: function() {
        this._layoutElement.parentNode &&
            this._layoutElement.parentNode.removeChild(this._layoutElement)
    }
};
Sys.Preview.UI.Template.registerClass("Sys.Preview.UI.Template", null, Sys.Preview.UI.ITemplate, Sys.IDisposable);
Sys.Preview.UI.Template.parseFromMarkup = function(f, b, a) {
    var c = b.attributes.getNamedItem("layoutElement"),
        d = c.nodeValue,
        e = a.findElement(d);
    return new Sys.Preview.UI.Template(e, b, a)
};
Sys.Preview.UI.PositioningMode = function() {
    throw Error.invalidOperation()
};
Sys.Preview.UI.PositioningMode.prototype = {
    Absolute: 0,
    Center: 1,
    BottomLeft: 2,
    BottomRight: 3,
    TopLeft: 4,
    TopRight: 5
};
Sys.Preview.UI.PositioningMode.registerEnum("Sys.Preview.UI.PositioningMode");
Sys.Preview.UI.ClickBehavior = function(a) {
    Sys.Preview.UI.ClickBehavior.initializeBase(this, [a])
};
Sys.Preview.UI.ClickBehavior.prototype = {
    _clickHandler: null,
    add_click: function(a) {
        this.get_events().addHandler("click", a)
    },
    remove_click: function(a) {
        this.get_events().removeHandler("click", a)
    },
    dispose: function() {
        this._clickHandler &&
            Sys.UI.DomEvent.removeHandler(this.get_element(), "click", this._clickHandler);
        Sys.Preview.UI.ClickBehavior.callBaseMethod(this, "dispose")
    },
    initialize: function() {
        Sys.Preview.UI.ClickBehavior.callBaseMethod(this, "initialize");
        this._clickHandler = Function.createDelegate(this, this._onClick);
        Sys.UI.DomEvent.addHandler(this.get_element(), "click", this._clickHandler)
    },
    _onClick: function() {
        var a = this.get_events().getHandler("click");
        a &&
            a(this, Sys.EventArgs.Empty)
    }
};
Sys.Preview.UI.ClickBehavior.descriptor = { events: [{ name: "click" }] };
Sys.Preview.UI.ClickBehavior.registerClass("Sys.Preview.UI.ClickBehavior", Sys.UI.Behavior);
Sys.Preview.UI.Label = function(a) {
    Sys.Preview.UI.Label.initializeBase(this, [a])
};
Sys.Preview.UI.Label.prototype = {
    _htmlEncode: false,
    get_htmlEncode: function() {
        return this._htmlEncode
    },
    set_htmlEncode: function(a) {
        this._htmlEncode = a
    },
    get_text: function() {
        var a = this.get_element();
        if (this._htmlEncode)
            return a.innerText;
        else
            return a.innerHTML
    },
    set_text: function(a) {
        if (!a)
            a = "";
        var b = this.get_element();
        if (this._htmlEncode) {
            if (b.innerText !== a) {
                b.innerText = a;
                this.raisePropertyChanged("text")
            }
        } else if (b.innerHTML !== a) {
            b.innerHTML = a;
            this.raisePropertyChanged("text")
        }
    }
};
Sys.Preview.UI.Label.descriptor = {
    properties: [{ name: "htmlEncode", type: Boolean }, { name: "text", type: String }]
};
Sys.Preview.UI.Label.registerClass("Sys.Preview.UI.Label", Sys.UI.Control);
Sys.Preview.UI.Image = function(a) {
    Sys.Preview.UI.Image.initializeBase(this, [a])
};
Sys.Preview.UI.Image.prototype = {
    get_alternateText: function() {
        return this.get_element().alt
    },
    set_alternateText: function(a) {
        this.get_element().alt = a
    },
    get_height: function() {
        return this.get_element().height
    },
    set_height: function(a) {
        this.get_element().height = a
    },
    get_imageURL: function() {
        return this.get_element().src
    },
    set_imageURL: function(a) {
        this.get_element().src = a
    },
    get_width: function() {
        return this.get_element().width
    },
    set_width: function(a) {
        this.get_element().width = a
    }
};
Sys.Preview.UI.Image.descriptor = {
    properties: [
        { name: "alternateText", type: String }, { name: "height" }, { name: "imageURL", type: String },
        { name: "width" }
    ]
};
Sys.Preview.UI.Image.registerClass("Sys.Preview.UI.Image", Sys.UI.Control);
if (Sys.Browser.agent === Sys.Browser.Safari) {
    Sys.Preview.UI.Image_ = function(a) {
        Sys.Preview.UI.Image_.initializeBase(this, [a])
    };
    Sys.Preview.UI.Image_.registerClass("Sys.Preview.UI.Image_", Sys.Preview.UI.Image)
}
Sys.Preview.UI.HyperLink = function(a) {
    Sys.Preview.UI.HyperLink.initializeBase(this, [a])
};
Sys.Preview.UI.HyperLink.prototype = {
    _clickHandler: null,
    get_navigateURL: function() {
        return this.get_element().href
    },
    set_navigateURL: function(a) {
        this.get_element().href = a ? a : ""
    },
    initialize: function() {
        Sys.Preview.UI.HyperLink.callBaseMethod(this, "initialize");
        this._clickHandler = Function.createDelegate(this, this._onClick);
        Sys.UI.DomEvent.addHandler(this.get_element(), "click", this._clickHandler)
    },
    dispose: function() {
        this._clickHandler &&
            Sys.UI.DomEvent.removeHandler(this.get_element(), "click", this._clickHandler);
        Sys.Preview.UI.HyperLink.callBaseMethod(this, "dispose")
    },
    add_click: function(a) {
        this.get_events().addHandler("click", a)
    },
    remove_click: function(a) {
        this.get_events().removeHandler("click", a)
    },
    _onClick: function() {
        var a = this.get_events().getHandler("click");
        a &&
            a(this, Sys.EventArgs.Empty)
    }
};
Sys.Preview.UI.HyperLink.descriptor = {
    properties: [{ name: "navigateURL", type: String }],
    events: [{ name: "click" }]
};
Sys.Preview.UI.HyperLink.registerClass("Sys.Preview.UI.HyperLink", Sys.Preview.UI.Label);
Sys.Preview.UI.Button = function(a) {
    Sys.Preview.UI.Button.initializeBase(this, [a])
};
Sys.Preview.UI.Button.prototype = {
    _command: null,
    _arg: null,
    _clickHandler: null,
    get_argument: function() {
        return this._arg
    },
    set_argument: function(a) {
        if (this._arg !== a) {
            this._arg = a;
            this.raisePropertyChanged("argument")
        }
    },
    get_command: function() {
        return this._command
    },
    set_command: function(a) {
        if (this._command !== a) {
            this._command = a;
            this.raisePropertyChanged("command")
        }
    },
    initialize: function() {
        Sys.Preview.UI.Button.callBaseMethod(this, "initialize");
        this._clickHandler = Function.createDelegate(this, this._onClick);
        Sys.UI.DomEvent.addHandler(this.get_element(), "click", this._clickHandler)
    },
    dispose: function() {
        this._clickHandler &&
            Sys.UI.DomEvent.removeHandler(this.get_element(), "click", this._clickHandler);
        Sys.Preview.UI.Button.callBaseMethod(this, "dispose")
    },
    add_click: function(a) {
        this.get_events().addHandler("click", a)
    },
    remove_click: function(a) {
        this.get_events().removeHandler("click", a)
    },
    _onClick: function() {
        var a = this.get_events().getHandler("click");
        a &&
            a(this, Sys.EventArgs.Empty);
        this._command &&
            this.raiseBubbleEvent(this, new Sys.Preview.UI.CommandEventArgs(this._command, this._arg))
    }
};
Sys.Preview.UI.Button.descriptor = {
    properties: [{ name: "command", type: String }, { name: "argument", type: String }],
    events: [{ name: "click" }]
};
Sys.Preview.UI.Button.registerClass("Sys.Preview.UI.Button", Sys.UI.Control);
Sys.Preview.UI.CheckBox = function(a) {
    Sys.Preview.UI.CheckBox.initializeBase(this, [a])
};
Sys.Preview.UI.CheckBox.prototype = {
    _clickHandler: null,
    get_checked: function() {
        return !!this.get_element().checked
    },
    set_checked: function(a) {
        a = !!a;
        if (a !== this.get_checked()) {
            this.get_element().checked = a;
            this.raisePropertyChanged("checked")
        }
    },
    initialize: function() {
        Sys.Preview.UI.CheckBox.callBaseMethod(this, "initialize");
        this._clickHandler = Function.createDelegate(this, this._onClick);
        Sys.UI.DomEvent.addHandler(this.get_element(), "click", this._clickHandler)
    },
    dispose: function() {
        this._clickHandler &&
            Sys.UI.DomEvent.removeHandler(this.get_element(), "click", this._clickHandler);
        Sys.Preview.UI.CheckBox.callBaseMethod(this, "dispose")
    },
    add_click: function(a) {
        this.get_events().addHandler("click", a)
    },
    remove_click: function(a) {
        this.get_events().removeHandler("click", a)
    },
    _onClick: function() {
        this.raisePropertyChanged("checked");
        var a = this.get_events().getHandler("click");
        a &&
            a(this, Sys.EventArgs.Empty)
    }
};
Sys.Preview.UI.CheckBox.descriptor = { properties: [{ name: "checked" }], events: [{ name: "click" }] };
Sys.Preview.UI.CheckBox.registerClass("Sys.Preview.UI.CheckBox", Sys.UI.Control);
Sys.Preview.UI.TextBox = function(a) {
    Sys.Preview.UI.TextBox.initializeBase(this, [a])
};
Sys.Preview.UI.TextBox.prototype = {
    _text: null,
    _changeHandler: null,
    _keyPressHandler: null,
    get_text: function() {
        return this.get_element().value
    },
    set_text: function(a) {
        var b = this.get_element();
        if (!a)
            a = "";
        if (b.value !== a) {
            b.value = a;
            this.raisePropertyChanged("text")
        }
    },
    dispose: function() {
        if (this._changeHandler) {
            Sys.UI.DomEvent.removeHandler(this.get_element(), "change", this._changeHandler);
            this._changeHandler = null
        }
        if (this._keyPressHandler) {
            Sys.UI.DomEvent.removeHandler(this.get_element(), "keypress", this._keyPressHandler);
            this._keyPressHandler = null
        }
        Sys.Preview.UI.TextBox.callBaseMethod(this, "dispose")
    },
    _onChange: function() {
        var a = this.get_element().value;
        if (a !== this._text) {
            this._text = a;
            this.raisePropertyChanged("text")
        }
    },
    _onKeyPress: function(a) {
        var c = a.keyCode ? a.keyCode : a.rawEvent.keyCode;
        if (c === Sys.UI.Key.enter) {
            var b = this.get_element().value;
            if (b !== this._text) {
                this._text = b;
                this.raisePropertyChanged("text")
            }
        }
    },
    initialize: function() {
        Sys.Preview.UI.TextBox.callBaseMethod(this, "initialize");
        var a = this.get_element();
        this._text = a.value;
        this._changeHandler = Function.createDelegate(this, this._onChange);
        Sys.UI.DomEvent.addHandler(a, "change", this._changeHandler);
        this._keyPressHandler = Function.createDelegate(this, this._onKeyPress);
        Sys.UI.DomEvent.addHandler(a, "keypress", this._keyPressHandler)
    }
};
Sys.Preview.UI.TextBox.descriptor = {
    properties: [{ name: "text", type: String }],
    attributes: [{ name: Sys.Preview.Attributes.ValueProperty, value: "text" }]
};
Sys.Preview.UI.TextBox.registerClass("Sys.Preview.UI.TextBox", Sys.Preview.UI.InputControl);
Sys.Preview.UI.Selector = function(a) {
    Sys.Preview.UI.Selector.initializeBase(this, [a]);
    this._dataChangedDelegate = Function.createDelegate(this, this.dataBind)
};
Sys.Preview.UI.Selector.prototype = {
    _selectionChangedHandler: null,
    _data: null,
    _textProperty: null,
    _valueProperty: null,
    _firstItemText: null,
    add_selectionChanged: function(a) {
        this.get_events().addHandler("selectionChanged", a)
    },
    remove_selectionChanged: function(a) {
        this.get_events().removeHandler("selectionChanged", a)
    },
    _onSelectionChanged: function() {
        this.raisePropertyChanged("selectedValue");
        var a = this.get_events().getHandler("selectionChanged");
        a &&
            a(this, Sys.EventArgs.Empty)
    },
    get_data: function() {
        return this._data
    },
    set_data: function(a) {
        this._data &&
            Sys.Preview.INotifyCollectionChanged.isImplementedBy(this._data) &&
            this._data.remove_collectionChanged(this._dataChangedDelegate);
        this._data = a;
        if (this._data) {
            if (!Sys.Preview.Data.DataTable.isInstanceOfType(this._data))
                if (typeof this._data === "object")
                    this._data = Sys.Preview.Data.DataTable.parseFromJson(this._data);
                else if (this._data instanceof Array)
                    this._data = new Sys.Preview.Data.DataTable([], this._data);
            this._data.add_collectionChanged(this._dataChangedDelegate)
        }
        this.dataBind();
        this.raisePropertyChanged("data")
    },
    get_firstItemText: function() {
        return this._firstItemText
    },
    set_firstItemText: function(a) {
        if (this._firstItemText != a) {
            this._firstItemText = a;
            this.raisePropertyChanged("firstItemText");
            this.dataBind()
        }
    },
    get_selectedValue: function() {
        return this.get_element().value
    },
    set_selectedValue: function(a) {
        this.get_element().value = a
    },
    get_textProperty: function() {
        return this._textProperty
    },
    set_textProperty: function(a) {
        this._textProperty = a;
        this.raisePropertyChanged("textProperty")
    },
    get_valueProperty: function() {
        return this._valueProperty
    },
    set_valueProperty: function(a) {
        this._valueProperty = a;
        this.raisePropertyChanged("valueProperty")
    },
    dataBind: function() {
        for (var b = this.get_element().options,
            d = [],
            a = b.length - 1;
            a >= 0;
            a--) {
            b[a].selected &&
                Array.add(d, b[a].value);
            b[a] = null
        }
        var c;
        if (this._firstItemText && this._firstItemText.length != 0) {
            c = new Option(this._firstItemText, "");
            b[this.get_element().length] = c
        }
        if (this._data) {
            var f = this._data.get_length();
            for (a = 0; a < f; a++) {
                var e = this._data.getItem(a);
                c = new Option(Sys.Preview.TypeDescriptor.getProperty(e, this._textProperty),
                    Sys.Preview.TypeDescriptor.getProperty(e, this._valueProperty));
                c.selected = Array.contains(d, c.value);
                b[this.get_element().length] = c
            }
        }
    },
    dispose: function() {
        if (this._selectionChangedHandler) {
            Sys.UI.DomEvent.removeHandler(this.get_element(), "change", this._selectionChangedHandler);
            this._selectionChangedHandler = null
        }
        Sys.Preview.UI.Selector.callBaseMethod(this, "dispose")
    },
    initialize: function() {
        Sys.Preview.UI.Selector.callBaseMethod(this, "initialize");
        this._selectionChangedHandler = Function.createDelegate(this, this._onSelectionChanged);
        Sys.UI.DomEvent.addHandler(this.get_element(), "change", this._selectionChangedHandler)
    }
};
Sys.Preview.UI.Selector.descriptor = {
    properties: [
        { name: "data", type: Sys.Preview.Data.DataTable }, { name: "firstItemText", type: String },
        { name: "selectedValue", type: String }, { name: "textProperty", type: String },
        { name: "valueProperty", type: String }
    ],
    events: [{ name: "selectionChanged", readOnly: true }]
};
Sys.Preview.UI.Selector.registerClass("Sys.Preview.UI.Selector", Sys.UI.Control);
Sys.Preview.UI.RequiredFieldValidator = function() {
    Sys.Preview.UI.RequiredFieldValidator.initializeBase(this)
};
Sys.Preview.UI.RequiredFieldValidator.prototype = {
    validate: function(a) {
        if (!a)
            return false;
        if (String.isInstanceOfType(a))
            if (a.length === 0)
                return false;
        return true
    }
};
Sys.Preview.UI.RequiredFieldValidator.registerClass("Sys.Preview.UI.RequiredFieldValidator", Sys.Preview.UI.Validator);
Sys.Preview.UI.TypeValidator = function() {
    Sys.Preview.UI.TypeValidator.initializeBase(this)
};
Sys.Preview.UI.TypeValidator.prototype = {
    _type: null,
    get_type: function() {
        return this._type
    },
    set_type: function(a) {
        this._type = a
    },
    validate: function(b) {
        if (typeof this._type !== "function")
            return false;
        if (this._type === String)
            return true;
        var d = this._type.parseLocale || this._type.parseInvariant || this.type.parse;
        if (typeof d !== "function")
            return false;
        var a = true;
        if (b && b.length)
            try {
                var c = d(b);
                if (isNaN(c) || c === null)
                    a = false
            } catch (e) {
                a = false
            }
        return a
    }
};
Sys.Preview.UI.TypeValidator.descriptor = { properties: [{ name: "type", type: Type }] };
Sys.Preview.UI.TypeValidator.registerClass("Sys.Preview.UI.TypeValidator", Sys.Preview.UI.Validator);
Sys.Preview.UI.RangeValidator = function() {
    Sys.Preview.UI.RangeValidator.initializeBase(this)
};
Sys.Preview.UI.RangeValidator.prototype = {
    _lowerBound: null,
    _upperBound: null,
    get_lowerBound: function() {
        return this._lowerBound
    },
    set_lowerBound: function(a) {
        this._lowerBound = a
    },
    get_upperBound: function() {
        return this._upperBound
    },
    set_upperBound: function(a) {
        this._upperBound = a
    },
    validate: function(a) {
        if (a && a.length)
            return a <= this._upperBound && a >= this._lowerBound;
        return true
    }
};
Sys.Preview.UI.RangeValidator.descriptor = {
    properties: [{ name: "lowerBound", type: Number }, { name: "upperBound", type: Number }]
};
Sys.Preview.UI.RangeValidator.registerClass("Sys.Preview.UI.RangeValidator", Sys.Preview.UI.Validator);
Sys.Preview.UI.RegexValidator = function() {
    Sys.Preview.UI.RegexValidator.initializeBase(this)
};
Sys.Preview.UI.RegexValidator.prototype = {
    _regex: null,
    get_regex: function() {
        return this._regex
    },
    set_regex: function(a) {
        if (typeof a === "string")
            this._regex = new RegExp(a.replace(/^\/|\/$/g, ""));
        else
            this._regex = a
    },
    validate: function(a) {
        if (this._regex && a && a.length) {
            var b = this._regex.exec(a);
            return b && b[0] === a
        }
        return true
    }
};
Sys.Preview.UI.RegexValidator.descriptor = { properties: [{ name: "regex", type: String }] };
Sys.Preview.UI.RegexValidator.registerClass("Sys.Preview.UI.RegexValidator", Sys.Preview.UI.Validator);
Sys.Preview.UI.CustomValidationEventArgs = function(a) {
    Sys.Preview.UI.CustomValidationEventArgs.initializeBase(this);
    this._value = a
};
Sys.Preview.UI.CustomValidationEventArgs.prototype = {
    _isValid: true,
    get_value: function() {
        return this._value
    },
    get_isValid: function() {
        return this._isValid
    },
    set_isValid: function(a) {
        this._isValid = a
    }
};
Sys.Preview.UI.CustomValidationEventArgs.descriptor = {
    properties: [{ name: "isValid", type: Boolean }, { name: "value", readOnly: true }]
};
Sys.Preview.UI.CustomValidationEventArgs.registerClass("Sys.Preview.UI.CustomValidationEventArgs", Sys.EventArgs);
Sys.Preview.UI.CustomValidator = function() {
    Sys.Preview.UI.CustomValidator.initializeBase(this)
};
Sys.Preview.UI.CustomValidator.prototype = {
    add_validateValue: function(a) {
        this.get_events().addHandler("validateValue", a)
    },
    remove_validateValue: function(a) {
        this.get_events().removeHandler("validateValue", a)
    },
    validate: function(a) {
        if (a && a.length) {
            var c = new Sys.Preview.UI.CustomValidationEventArgs(a),
                b = this.get_events().getHandler("validateValue");
            b &&
                b(this, c);
            return c.get_isValid()
        }
        return true
    }
};
Sys.Preview.UI.CustomValidator.descriptor = { events: [{ name: "validateValue" }] };
Sys.Preview.UI.CustomValidator.registerClass("Sys.Preview.UI.CustomValidator", Sys.Preview.UI.Validator);
Sys.Preview.UI.ValidationErrorLabel = function(a) {
    Sys.Preview.UI.ValidationErrorLabel.initializeBase(this, [a])
};
Sys.Preview.UI.ValidationErrorLabel.prototype = {
    _associatedControl: null,
    _validatedHandler: null,
    get_associatedControl: function() {
        return this._associatedControl
    },
    set_associatedControl: function(a) {
        this._associatedControl &&
            this._validatedHandler &&
            this._associatedControl.remove_validated(this._validatedHandler);
        if (Sys.Preview.UI.IValidationTarget.isImplementedBy(a))
            this._associatedControl = a;
        if (this._associatedControl) {
            if (!this._validatedHandler)
                this._validatedHandler = Function.createDelegate(this, this._onControlValidated);
            this._associatedControl.add_validated(this._validatedHandler)
        }
    },
    dispose: function() {
        if (this._associatedControl) {
            if (this._validatedHandler) {
                this._associatedControl.remove_validated(this._validatedHandler);
                this._validatedHandler = null
            }
            this._associatedControl = null
        }
        Sys.Preview.UI.ValidationErrorLabel.callBaseMethod(this, "dispose")
    },
    initialize: function() {
        Sys.Preview.UI.ValidationErrorLabel.callBaseMethod(this, "initialize");
        this.set_visible(false)
    },
    _onControlValidated: function() {
        var a = this._associatedControl.get_isInvalid(),
            b = "";
        if (a)
            b = this._associatedControl.get_validationMessage();
        this.set_visible(a);
        this.get_element().title = b
    }
};
Sys.Preview.UI.ValidationErrorLabel.descriptor = { properties: [{ name: "associatedControl", type: Object }] };
Sys.Preview.UI.ValidationErrorLabel.registerClass("Sys.Preview.UI.ValidationErrorLabel", Sys.Preview.UI.Label);
Type.registerNamespace("Sys.Preview.Services.Components");
Sys.Preview.Services.Components.Profile = function() {
    Sys.Preview.Services.Components.Profile.initializeBase(this)
};
Sys.Preview.Services.Components.Profile.prototype = {
    _isDirty: false,
    _autoSave: false,
    get_autoSave: function() {
        return this._autoSave
    },
    set_autoSave: function(a) {
        this._autoSave = a
    },
    get_isDirty: function() {
        return this._isDirty
    },
    get_path: function() {
        return Sys.Services.ProfileService.get_path()
    },
    set_path: function(a) {
        Sys.Services.ProfileService.set_path(a)
    },
    add_loadComplete: function(a) {
        this.get_events().addHandler("loadComplete", a)
    },
    remove_loadComplete: function(a) {
        this.get_events().removeHandler("loadComplete", a)
    },
    add_saveComplete: function(a) {
        this.get_events().addHandler("saveComplete", a)
    },
    remove_saveComplete: function(a) {
        this.get_events().removeHandler("saveComplete", a)
    },
    getProperty: function(c, d) {
        var b = Sys.Services.ProfileService.properties;
        if (d) {
            var a = b[c];
            return a ? a[d] || null : null
        }
        return b[c] || null
    },
    initialize: function() {
        Sys.Preview.Services.Components.Profile.callBaseMethod(this, "initialize");
        var a = true;
        for (var b in Sys.Services.ProfileService.properties) {
            a = false;
            break
        }
        a &&
            this.load()
    },
    invokeMethod: function(a, b) {
        if (a === "save")
            this.save.apply(this, b);
        else
            a === "load" &&
                this.load.apply(this, b)
    },
    load: function(a) {
        if (!this.loadCallback)
            this.loadCallback = Function.createDelegate(this, this._loadComplete);
        Sys.Services.ProfileService.load(a, this.loadCallback)
    },
    save: function(a) {
        if (!this.saveCallback)
            this.saveCallback = Function.createDelegate(this, this._saveComplete);
        Sys.Services.ProfileService.save(a, this.saveCallback)
    },
    setProperty: function(g, f, e) {
        var d = Sys.Services.ProfileService.properties,
            c = null,
            a = g;
        if (e) {
            var b = d[a];
            if (!b) {
                b = new Sys.Services.ProfileGroup;
                d[a] = b
            }
            a = a + "." + e;
            b[e] = f;
            c = this._isDirty;
            this._isDirty = true;
            this.raisePropertyChanged(a)
        } else {
            d[a] = f;
            c = this._isDirty;
            this._isDirty = true;
            this.raisePropertyChanged(a)
        }
        c === false &&
            this.raisePropertyChanged("isDirty");
        this._autoSave &&
            this._isDirty &&
            this.save([a])
    },
    _loadComplete: function() {
        this._isDirty = false;
        var a = this.get_events().getHandler("loadComplete");
        a &&
            a(this, Sys.EventArgs.Empty)
    },
    _saveComplete: function() {
        this._isDirty = false;
        this.raisePropertyChanged("isDirty");
        var a = this.get_events().getHandler("saveComplete");
        a &&
            a(this, Sys.EventArgs.Empty)
    },
    _saveIfDirty: function() {
        this._isDirty &&
            this.save()
    }
};
Sys.Preview.Services.Components.Profile.descriptor = {
    properties: [
        { name: "autoSave", type: Boolean }, { name: "path", type: String },
        { name: "isDirty", type: Boolean, readOnly: true }
    ],
    methods: [{ name: "load" }, { name: "save" }],
    events: [{ name: "loadComplete" }, { name: "saveComplete" }]
};
Sys.Preview.Services.Components.Profile.registerClass("Sys.Preview.Services.Components.Profile",
    Sys.Component,
    Sys.Preview.ICustomTypeDescriptor);
Sys.Preview.Services.Components.Profile.parseFromMarkup = function(e, a, c) {
    if (!c.get_isGlobal())
        return null;
    var b = null,
        d = a.attributes.getNamedItem("id");
    if (d) {
        b = d.nodeValue;
        a.attributes.removeNamedItem("id")
    }
    Sys.Preview.MarkupParser.initializeObject(Sys.Preview.Services.Components.Profile.instance, a, c);
    if (b && b.length) {
        c._addComponentByID(b, Sys.Preview.Services.Components.Profile.instance, true);
        a.attributes.setNamedItem(d)
    }
    return Sys.Preview.Services.Components.Profile.instance
};
Sys.Preview.Services.Components.Profile.instance = new Sys.Preview.Services.Components.Profile;
Type.registerNamespace("Sys.Preview.UI.Data");
Sys.Preview.UI.Data.DataControl = function(a) {
    Sys.Preview.UI.Data.DataControl.initializeBase(this, [a]);
    this._dataIndex = 0
};
Sys.Preview.UI.Data.DataControl.prototype = {
    _data: null,
    _suspendChangeNotifications: false,
    _dataChangedDelegate: null,
    prepareChange: function() {
        return {
            dataIndex: this.get_dataIndex(),
            canMoveNext: this.get_canMoveNext(),
            canMovePrevious: this.get_canMovePrevious()
        }
    },
    triggerChangeEvents: function(a) {
        var d = this.get_dataIndex();
        if (a.dataIndex !== d) {
            this.raisePropertyChanged("dataIndex");
            this.raisePropertyChanged("dataItem");
            a.dataIndex = d
        }
        var c = this.get_canMoveNext();
        if (a.canMoveNext !== c) {
            this.raisePropertyChanged("canMoveNext");
            a.canMoveNext = c
        }
        var b = this.get_canMovePrevious();
        if (a.canMovePrevious !== b) {
            this.raisePropertyChanged("canMovePrevious");
            a.canMovePrevious = b
        }
    },
    get_canMoveNext: function() {
        if (!this._data)
            return false;
        return this._dataIndex < this.get_length() - 1
    },
    get_canMovePrevious: function() {
        if (!this._data)
            return false;
        return this._dataIndex > 0
    },
    get_data: function() {
        return this._data
    },
    set_data: function(b) {
        var a = this.prepareChange();
        if (this._data && Sys.Preview.INotifyCollectionChanged.isImplementedBy(this._data)) {
            this._data.remove_collectionChanged(this._dataChangedDelegate);
            this._dataChangedDelegate = null
        }
        this._data = b;
        if (this._data && Sys.Preview.INotifyCollectionChanged.isImplementedBy(this._data)) {
            this._dataChangedDelegate = Function.createDelegate(this, this.onDataChanged);
            this._data.add_collectionChanged(this._dataChangedDelegate)
        }
        this._dataIndex >= this.get_length() &&
            this.set_dataIndex(0);
        !this.get_isUpdating() &&
            this.render();
        this.raisePropertyChanged("data");
        this.triggerChangeEvents(a)
    },
    get_dataContext: function() {
        return this.get_dataItem()
    },
    get_dataIndex: function() {
        return this._dataIndex
    },
    set_dataIndex: function(a) {
        if (this._dataIndex !== a) {
            var b = this.prepareChange();
            this._dataIndex = a;
            !this._suspendChangeNotifications &&
                this.triggerChangeEvents(b)
        }
    },
    get_dataItem: function() {
        if (this._data && this._dataIndex >= 0) {
            if (Sys.Preview.Data.IData.isImplementedBy(this._data))
                return this._data.getItem(this._dataIndex);
            if (this._data instanceof Array)
                return this._data[this._dataIndex]
        }
        return null
    },
    get_length: function() {
        if (!this._data)
            return 0;
        if (Sys.Preview.Data.IData.isImplementedBy(this._data))
            return this._data.get_length();
        if (this._data instanceof Array)
            return this._data.length;
        return 0
    },
    addItem: function() {
        if (this._data) {
            var a = this.prepareChange();
            if (Sys.Preview.Data.IData.isImplementedBy(this._data))
                this._data.add({});
            else if (this._data instanceof Array)
                if (typeof this._data.add === "function")
                    this._data.add({});
                else
                    Array.add(this._data, {});
            this.set_dataIndex(this.get_length() - 1);
            this.triggerChangeEvents(a)
        }
    },
    deleteCurrentItem: function() {
        if (this._data) {
            var b = this.prepareChange();
            this._suspendChangeNotifications = true;
            var a = this.get_dataItem();
            this.get_dataIndex() === this.get_length() - 1 &&
                this.set_dataIndex(Math.max(0, this.get_length() - 2));
            if (Sys.Preview.Data.IData.isImplementedBy(this._data))
                this._data.remove(a);
            else if (this._data instanceof Array)
                if (typeof this._data.remove === "function")
                    this._data.remove(a);
                else
                    Array.remove(this._data, a);
            this._suspendChangeNotifications = false;
            this.triggerChangeEvents(b)
        }
    },
    getItem: function(a) {
        if (this._data) {
            if (Sys.Preview.Data.IData.isImplementedBy(this._data))
                return this._data.getItem(a);
            if (this._data instanceof Array)
                return this._data[a]
        }
        return null
    },
    moveNext: function() {
        if (this._data) {
            var b = this.prepareChange(),
                a = this.get_dataIndex() + 1;
            a < this.get_length() &&
                this.set_dataIndex(a);
            this.triggerChangeEvents(b)
        }
    },
    movePrevious: function() {
        if (this._data) {
            var b = this.prepareChange(),
                a = this.get_dataIndex() - 1;
            a >= 0 &&
                this.set_dataIndex(a);
            this.triggerChangeEvents(b)
        }
    },
    onBubbleEvent: function(d, c) {
        if (c.get_commandName() === "select") {
            var a = c.get_argument();
            if (!a && a !== 0) {
                var b = d.get_dataContext();
                if (b)
                    a = b.get_index()
            }
            if (a && String.isInstanceOfType(a))
                a = Number.parseInvariant(a);
            if (a || a === 0) {
                this.set_dataIndex(a);
                return true
            }
        }
        return false
    },
    onDataChanged: function() {
        this.render()
    }
};
Sys.Preview.UI.Data.DataControl.descriptor = {
    properties: [
        { name: "canMoveNext", type: Boolean, readOnly: true },
        { name: "canMovePrevious", type: Boolean, readOnly: true }, { name: "data", type: Sys.Preview.Data.DataTable },
        { name: "dataIndex", type: Number }, { name: "dataItem", type: Object, readOnly: true },
        { name: "length", type: Number, readOnly: true }
    ],
    methods: [{ name: "addItem" }, { name: "deleteCurrentItem" }, { name: "moveNext" }, { name: "movePrevious" }]
};
Sys.Preview.UI.Data.DataControl.registerClass("Sys.Preview.UI.Data.DataControl", Sys.UI.Control);
Sys.Preview.UI.Data.DataNavigator = function(a) {
    Sys.Preview.UI.Data.DataNavigator.initializeBase(this, [a])
};
Sys.Preview.UI.Data.DataNavigator.prototype = {
    _data: null,
    get_dataView: function() {
        return this._data
    },
    set_dataView: function(a) {
        this._data = a;
        this.raisePropertyChanged("dataView")
    },
    get_dataContext: function() {
        return this.get_dataView()
    },
    onBubbleEvent: function(e, b) {
        if (!this._data)
            return false;
        var d = b.get_commandName().toLowerCase();
        switch (d) {
        case "page":
            var a = b.get_argument();
            if (a && String.isInstanceOfType(a))
                a = Number.parseInvariant(a);
            if (a || a === 0) {
                this._data.set_pageIndex(a);
                return true
            }
            break;
        case "nextpage":
            this._data.set_pageIndex(this._data.get_pageIndex() + 1);
            return true;
        case "previouspage":
            var c = this._data.get_pageIndex() - 1;
            c >= 0 &&
                this._data.set_pageIndex(c);
            return true;
        case "firstpage":
            this._data.set_pageIndex(0);
            return true;
        case "lastpage":
            this._data.set_pageIndex(this._data.get_pageCount() - 1);
            return true
        }
        return false
    }
};
Sys.Preview.UI.Data.DataNavigator.descriptor = { properties: [{ name: "dataView", type: Object }] };
Sys.Preview.UI.Data.DataNavigator.registerClass("Sys.Preview.UI.Data.DataNavigator", Sys.UI.Control);
Sys.Preview.UI.Data.ItemView = function(a) {
    Sys.Preview.UI.Data.ItemView.initializeBase(this, [a])
};
Sys.Preview.UI.Data.ItemView.prototype = {
    _itemTemplate: null,
    _emptyTemplate: null,
    _keyDownHandler: null,
    _layoutTemplateElement: null,
    set_dataIndex: function(a) {
        if (this.get_dataIndex() !== a) {
            Sys.Preview.UI.Data.ItemView.callBaseMethod(this, "set_dataIndex", [a]);
            !this.get_isUpdating() &&
                this.render()
        }
    },
    get_emptyTemplate: function() {
        return this._emptyTemplate
    },
    set_emptyTemplate: function(a) {
        this._emptyTemplate &&
            this._emptyTemplate.dispose();
        this._emptyTemplate = a;
        !this.get_isUpdating() &&
            this.render();
        this.raisePropertyChanged("emptyTemplate")
    },
    get_itemTemplate: function() {
        return this._itemTemplate
    },
    set_itemTemplate: function(a) {
        this._itemTemplate &&
            this._itemTemplate.dispose();
        this._itemTemplate = a;
        !this.get_isUpdating() &&
            this.render();
        this.raisePropertyChanged("itemTemplate")
    },
    dispose: function() {
        var a = this.get_element();
        if (a) {
            this._keyDownHandler &&
                Sys.UI.DomEvent.removeHandler(a, "keydown", this._keyDownHandler);
            if (a.childNodes.length) {
                a.markupContext = null;
                Sys.Preview.UI.ITemplate.disposeInstance(a.firstChild)
            }
        }
        if (this._itemTemplate) {
            this._itemTemplate.dispose();
            this._itemTemplate = null
        }
        if (this._emptyTemplate) {
            this._emptyTemplate.dispose();
            this._emptyTemplate = null
        }
        this._layoutTemplateElement = null;
        Sys.Preview.UI.Data.ItemView.callBaseMethod(this, "dispose")
    },
    initialize: function() {
        this._keyDownHandler = Function.createDelegate(this, this._onKeyDown);
        Sys.Preview.UI.Data.ItemView.callBaseMethod(this, "initialize");
        Sys.UI.DomEvent.addHandler(this.get_element(), "keydown", this._keyDownHandler);
        this._itemTemplate &&
            this._itemTemplate.initialize();
        this._emptyTemplate &&
            this._emptyTemplate.initialize();
        this.render()
    },
    _onKeyDown: function(a) {
        if (a.target === this.get_element()) {
            var b = a.keyCode ? a.keyCode : a.rawEvent.keyCode;
            if (b === Sys.UI.Key.up || b === Sys.UI.Key.left) {
                this.movePrevious();
                a.preventDefault()
            } else if (b === Sys.UI.Key.down || b === Sys.UI.Key.right) {
                this.moveNext();
                a.preventDefault()
            }
        }
    },
    render: function() {
        var b = this.get_element();
        if (b.childNodes.length)
            this._layoutTemplateElement &&
                Sys.Preview.UI.ITemplate.disposeInstance(this._layoutTemplateElement);
        b.innerHTML = "";
        var a,
            d = this.get_data();
        if (d && d.get_length())
            a = this._itemTemplate;
        else
            a = this._emptyTemplate;
        if (a) {
            var c = a.createInstance(b, this.get_dataContext()).instanceElement;
            b.markupContext = c.markupContext;
            this._layoutTemplateElement = c
        }
    },
    findObject: function(b) {
        var a,
            c = this.get_element();
        if (c.markupContext)
            a = c.markupContext.findComponent(b);
        if (!a) {
            var d = this.get_parent();
            if (d)
                a = d.findObject(b);
            else
                a = Sys.Application.findComponent(b)
        }
        return a
    }
};
Sys.Preview.UI.Data.ItemView.descriptor = {
    properties: [
        { name: "itemTemplate", type: Sys.Preview.UI.ITemplate },
        { name: "emptyTemplate", type: Sys.Preview.UI.ITemplate }
    ]
};
Sys.Preview.UI.Data.ItemView.registerClass("Sys.Preview.UI.Data.ItemView",
    Sys.Preview.UI.Data.DataControl,
    Sys.IContainer);
Sys.Preview.UI.Data.ListViewRenderTask = function(k, l, i, b, d, h, c, j, a, g, f, e) {
    this._listView = k;
    this._data = l;
    this._itemTemplate = i;
    this._itemTemplateParent = b;
    this._separatorTemplate = d;
    this._itemElements = h;
    this._separatorElements = c;
    this._itemClass = j;
    this._alternatingItemClass = a;
    this._separatorClass = g;
    this._itemFocusHandler = f;
    this._itemClickHandler = e;
    this._currentIndex = 0
};
Sys.Preview.UI.Data.ListViewRenderTask.prototype = {
    dispose: function() {
        this._listView = null;
        this._data = null;
        this._itemTemplate = null;
        this._itemTemplateParent = null;
        this._separatorTemplate = null;
        this._itemElements = null;
        this._separatorElements = null;
        this._itemClass = null;
        this._alternatingItemClass = null;
        this._separatorClass = null;
        this._itemFocusHandler = null;
        this._itemClickHandler = null
    },
    execute: function() {
        for (var c = Array.isInstanceOfType(this._data),
            b = c ? this._data.length : this._data ? this._data.get_length ? this._data.get_length() : 0 : 0,
            f = b - 1,
            e = Math.min(b, this._currentIndex + 5);
            this._currentIndex < e;
            this._currentIndex++) {
            var g = c ? this._data[this._currentIndex] : this._data.getItem(this._currentIndex);
            if (this._itemTemplate) {
                var a = this._itemTemplate.createInstance(this._itemTemplateParent, g).instanceElement;
                if (this._itemClass)
                    if (this._currentIndex % 2 === 1 && this._alternatingItemClass)
                        a.className = this._alternatingItemClass;
                    else
                        a.className = this._itemClass;
                this._itemElements[this._currentIndex] = a;
                a.tabIndex = -1;
                a.dataIndex = this._currentIndex;
                Sys.UI.DomEvent.addHandler(a, "focus", this._itemFocusHandler);
                Sys.UI.DomEvent.addHandler(a, "click", this._itemClickHandler)
            }
            if (this._separatorTemplate && this._currentIndex !== f && this._itemTemplateParent) {
                var d = this._separatorTemplate.createInstance(this._itemTemplateParent).instanceElement;
                if (this._separatorClass)
                    d.className = this._separatorClass;
                this._separatorElements[this._currentIndex] = d
            }
        }
        if (this._currentIndex === b) {
            this._listView._renderTaskComplete(this);
            return true
        } else
            return false
    }
};
Sys.Preview.UI.Data.ListViewRenderTask.registerClass("Sys.Preview.UI.Data.ListViewRenderTask",
    null,
    Sys.Preview.ITask,
    Sys.IDisposable);
Sys.Preview.UI.Data.ListView = function(a) {
    Sys.Preview.UI.Data.ListView.initializeBase(this, [a]);
    this._itemElements = [];
    this._separatorElements = []
};
Sys.Preview.UI.Data.ListView.prototype = {
    _itemClass: null,
    _alternatingItemClass: null,
    _separatorClass: null,
    _selectedItemClass: null,
    _focusHandler: null,
    _keyDownHandler: null,
    _itemFocusHandler: null,
    _itemClickHandler: null,
    _focusIndex: null,
    _layoutTemplate: null,
    _itemTemplate: null,
    _separatorTemplate: null,
    _emptyTemplate: null,
    _itemTemplateParentElementId: null,
    _layoutTemplateElement: null,
    _pendingTasks: 0,
    get_alternatingItemCssClass: function() {
        return this._alternatingItemClass
    },
    set_alternatingItemCssClass: function(a) {
        if (a !== this._alternatingItemClass) {
            this._alternatingItemClass = a;
            this.render();
            this.raisePropertyChanged("alternatingItemCssClass")
        }
    },
    set_dataIndex: function(b) {
        var c = this.get_dataIndex();
        if (c !== b) {
            var a = this.getItemElement(c);
            a &&
                this._selectedItemClass &&
                Sys.UI.DomElement.removeCssClass(a, this._selectedItemClass);
            Sys.Preview.UI.Data.ListView.callBaseMethod(this, "set_dataIndex", [b]);
            a = this.getItemElement(b);
            a &&
                this._selectedItemClass &&
                Sys.UI.DomElement.addCssClass(a, this._selectedItemClass)
        }
    },
    get_emptyTemplate: function() {
        return this._emptyTemplate
    },
    set_emptyTemplate: function(a) {
        this._emptyTemplate &&
            this._emptyTemplate.dispose();
        this._emptyTemplate = a;
        !this.get_isUpdating() &&
            this.render();
        this.raisePropertyChanged("emptyTemplate")
    },
    get_itemCssClass: function() {
        return this._itemClass
    },
    set_itemCssClass: function(a) {
        if (a !== this._itemClass) {
            this._itemClass = a;
            this.render();
            this.raisePropertyChanged("itemCssClass")
        }
    },
    get_itemTemplate: function() {
        return this._itemTemplate
    },
    set_itemTemplate: function(a) {
        this._itemTemplate &&
            this._itemTemplate.dispose();
        this._itemTemplate = a;
        !this.get_isUpdating() &&
            this.render();
        this.raisePropertyChanged("itemTemplate")
    },
    get_itemTemplateParentElementId: function() {
        return this._itemTemplateParentElementId
    },
    set_itemTemplateParentElementId: function(a) {
        this._itemTemplateParentElementId = a;
        this.raisePropertyChanged("itemTemplateParentElementId")
    },
    get_layoutTemplate: function() {
        return this._layoutTemplate
    },
    set_layoutTemplate: function(a) {
        this._layoutTemplate &&
            this._layoutTemplate.dispose();
        this._layoutTemplate = a;
        !this.get_isUpdating() &&
            this.render();
        this.raisePropertyChanged("layoutTemplate")
    },
    get_selectedItemCssClass: function() {
        return this._selectedItemClass
    },
    set_selectedItemCssClass: function(a) {
        if (a !== this._selectedItemClass) {
            this._selectedItemClass = a;
            this.render();
            this.raisePropertyChanged("selectedItemCssClass")
        }
    },
    get_separatorCssClass: function() {
        return this._separatorClass
    },
    set_separatorCssClass: function(a) {
        if (a !== this._separatorClass) {
            this._separatorClass = a;
            this.render();
            this.raisePropertyChanged("separatorCssClass")
        }
    },
    get_separatorTemplate: function() {
        return this._separatorTemplate
    },
    set_separatorTemplate: function(a) {
        this._separatorTemplate &&
            this._separatorTemplate.dispose();
        this._separatorTemplate = a;
        !this.get_isUpdating() &&
            this.render();
        this.raisePropertyChanged("separatorTemplate")
    },
    getItemElement: function(a) {
        return this._itemElements[a]
    },
    add_renderComplete: function(a) {
        this.get_events().addHandler("renderComplete", a)
    },
    remove_renderComplete: function(a) {
        this.get_events().removeHandler("renderComplete", a)
    },
    initialize: function() {
        var a = this.get_element();
        this._focusHandler = Function.createDelegate(this, this._onGotFocus);
        this._keyDownHandler = Function.createDelegate(this, this._onKeyDown);
        this._itemFocusHandler = Function.createDelegate(this, this._onItemFocus);
        this._itemClickHandler = Function.createDelegate(this, this._onItemClick);
        Sys.Preview.UI.Data.ListView.callBaseMethod(this, "initialize");
        Sys.UI.DomEvent.addHandler(a, "keydown", this._keyDownHandler);
        Sys.UI.DomEvent.addHandler(a, "focus", this._focusHandler);
        this._itemTemplate &&
            this._itemTemplate.initialize();
        this._separatorTemplate &&
            this._separatorTemplate.initialize();
        this._emptyTemplate &&
            this._emptyTemplate.initialize();
        this._layoutTemplate &&
            this._layoutTemplate.initialize();
        if (!a.tabIndex)
            a.tabIndex = 0;
        this.render()
    },
    dispose: function() {
        if (this._disposed)
            return;
        var b = this.get_element();
        if (b) {
            this._focusHandler &&
                Sys.UI.DomEvent.removeHandler(b, "focus", this._focusHandler);
            this._keyDownHandler &&
                Sys.UI.DomEvent.removeHandler(b, "keydown", this._keyDownHandler)
        }
        if (this._itemElements)
            for (var a = this._itemElements.length - 1; a >= 0; a--) {
                this._itemFocusHandler &&
                    Sys.UI.DomEvent.removeHandler(this._itemElements[a], "focus", this._itemFocusHandler);
                this._itemClickHandler &&
                    Sys.UI.DomEvent.removeHandler(this._itemElements[a], "click", this._itemClickHandler)
            }
        if (this._layoutTemplate) {
            this._layoutTemplate.dispose();
            this._layoutTemplate = null
        }
        if (this._itemTemplate) {
            this._itemTemplate.dispose();
            this._itemTemplate = null
        }
        if (this._separatorTemplate) {
            this._separatorTemplate.dispose();
            this._separatorTemplate = null
        }
        if (this._emptyTemplate) {
            this._emptyTemplate.dispose();
            this._emptyTemplate = null
        }
        this._itemElements = null;
        this._separatorElements = null;
        this._layoutTemplateElement = null;
        this._disposed = true;
        Sys.Preview.UI.Data.ListView.callBaseMethod(this, "dispose")
    },
    _onGotFocus: function(a) {
        a.target === this.get_element() &&
            this.setFocus(this, this.getItemElement(this.get_dataIndex()))
    },
    _onKeyDown: function(a) {
        if (a.target === this.getItemElement(this._focusIndex)) {
            var b = a.keyCode ? a.keyCode : a.rawEvent.keyCode;
            if (b === Sys.UI.Key.up || b === Sys.UI.Key.left) {
                if (this._focusIndex > 0) {
                    this.setFocus(this, this.getItemElement(this._focusIndex - 1));
                    a.preventDefault()
                }
            } else if (b === Sys.UI.Key.down || b === Sys.UI.Key.right) {
                if (this._focusIndex < this.get_length() - 1) {
                    this.setFocus(this, this.getItemElement(this._focusIndex + 1));
                    a.preventDefault()
                }
            } else if (b === Sys.UI.Key.enter || b === Sys.UI.Key.space)
                if (this._focusIndex !== -1) {
                    this.set_dataIndex(this._focusIndex);
                    a.preventDefaut()
                }
        }
    },
    _onItemFocus: function(a) {
        if (typeof a.target.dataIndex !== "undefined")
            this._focusIndex = a.target.dataIndex
    },
    _onItemClick: function(d) {
        var a = d.target,
            b = a.tagName.toUpperCase();
        while (a && typeof a.dataIndex === "undefined")
            a = a.parentNode;
        if (a) {
            var c = a.dataIndex;
            sel = this.getItemElement(c);
            if (sel) {
                this.set_dataIndex(c);
                b !== "INPUT" &&
                    b !== "TEXTAREA" &&
                    b !== "SELECT" &&
                    b !== "BUTTON" &&
                    b !== "A" &&
                    this.setFocus(this, sel)
            }
        }
    },
    render: function() {
        for (var d = this.get_element(),
            b,
            a = this._itemElements.length - 1;
            a >= 0;
            a--) {
            b = this._itemElements[a];
            b &&
                Sys.Preview.UI.ITemplate.disposeInstance(b)
        }
        this._itemElements = [];
        for (a = this._separatorElements.length - 1; a >= 0; a--) {
            b = this._separatorElements[a];
            b &&
                Sys.Preview.UI.ITemplate.disposeInstance(b)
        }
        this._separatorElements = [];
        if (d.childNodes.length)
            this._layoutTemplateElement &&
                Sys.Preview.UI.ITemplate.disposeInstance(this._layoutTemplateElement);
        d.innerHTML = "";
        var m = false,
            c = this.get_data(),
            g = c ? c.get_length ? c.get_length() : c.length : 0;
        if (g && g > 0) {
            var h = this.get_layoutTemplate();
            if (h) {
                var l = this.get_itemTemplate(),
                    k = this.get_separatorTemplate(),
                    e = h.createInstance(d,
                        null,
                        this.findItemTemplateParentCallback,
                        this._itemTemplateParentElementId),
                    j = e.callbackResult;
                this._layoutTemplateElement = e.instanceElement;
                m = true;
                this._pendingTasks++;
                var n = new Sys.Preview.UI.Data
                    .ListViewRenderTask(this,
                        c,
                        l,
                        j,
                        k,
                        this._itemElements,
                        this._separatorElements,
                        this._itemClass,
                        this._alternatingItemClass,
                        this._separatorClass,
                        this._itemFocusHandler,
                        this._itemClickHandler);
                Sys.Preview.TaskManager.addTask(n)
            }
        } else {
            var f = this.get_emptyTemplate();
            f &&
                f.createInstance(d);
            var i = this.get_events().getHandler("renderComplete");
            i &&
                i(this, Sys.EventArgs.Empty)
        }
    },
    _renderTaskComplete: function() {
        this._pendingTasks--;
        if (this._pendingTasks <= 0) {
            this._pendingTasks = 0;
            var a = this.get_events().getHandler("renderComplete");
            a &&
                a(this, Sys.EventArgs.Empty)
        }
    },
    findItemTemplateParentCallback: function(c, a, b) {
        return a.findElement(b)
    },
    setFocus: function(d, c) {
        if (c.focus) {
            for (var e = d.get_length() - 1; e >= 0; e--) {
                var f = d.getItemElement(e);
                if (f)
                    f.tabIndex = -1
            }
            var a = d.get_element(),
                b = a.tabIndex;
            if (b === -1)
                b = a.__tabIndex;
            c.tabIndex = b;
            setTimeout(Function.createCallback(this.focus, c), 0);
            a.__tabIndex = b;
            a.tabIndex = -1
        }
    },
    focus: function(a) {
        try {
            a.focus()
        } catch (b) {
        }
    }
};
Sys.Preview.UI.Data.ListView.descriptor = {
    properties: [
        { name: "alternatingItemCssClass", type: String }, { name: "layoutTemplate", type: Sys.Preview.UI.ITemplate },
        { name: "itemCssClass", type: String }, { name: "itemTemplate", type: Sys.Preview.UI.ITemplate },
        { name: "itemTemplateParentElementId", type: String }, { name: "selectedItemCssClass", type: String },
        { name: "separatorCssClass", type: String }, { name: "separatorTemplate", type: Sys.Preview.UI.ITemplate },
        { name: "emptyTemplate", type: Sys.Preview.UI.ITemplate }
    ],
    events: [{ name: "renderComplete" }]
};
Sys.Preview.UI.Data.ListView.registerClass("Sys.Preview.UI.Data.ListView", Sys.Preview.UI.Data.DataControl);
Sys.Preview.UI.Data.SortBehavior = function(a) {
    Sys.Preview.UI.Data.SortBehavior.initializeBase(this, [a])
};
Sys.Preview.UI.Data.SortBehavior.prototype = {
    _clickHandler: null,
    _sortChangedDelegate: null,
    _sortColumn: "",
    _sortAscendingCssClass: "sortAscending",
    _sortDescendingCssClass: "sortDescending",
    _dataView: null,
    get_sortAscendingCssClass: function() {
        return this._sortAscendingCssClass
    },
    set_sortAscendingCssClass: function(a) {
        this._sortAscendingCssClass = a
    },
    get_sortColumn: function() {
        return this._sortColumn
    },
    set_sortColumn: function(a) {
        if (a !== this._sortColumn) {
            this._sortColumn = a;
            this.raisePropertyChanged("sortColumn")
        }
    },
    get_sortDescendingCssClass: function() {
        return this._sortDescendingCssClass
    },
    set_sortDescendingCssClass: function(a) {
        this._sortDescendingCssClass = a
    },
    get_dataView: function() {
        return this._dataView
    },
    set_dataView: function(a) {
        this._dataView &&
            this._sortChangedDelegate &&
            this._dataView.remove_propertyChanged(this._sortChangedDelegate);
        this._dataView = a;
        if (this.get_isInitialized()) {
            this._dataView.add_propertyChanged(this._sortChangedDelegate);
            this.update()
        }
    },
    dispose: function() {
        if (this._dataView && !this._dataView._disposed && this._sortChangedDelegate) {
            this._dataView.remove_propertyChanged(this._sortChangedDelegate);
            this._sortChangedDelegate = null
        }
        this._dataView = null;
        if (this._clickHandler) {
            Sys.UI.DomEvent.removeHandler(this.get_element(), "click", this._clickHandler);
            this._clickHandler = null
        }
        Sys.Preview.UI.Data.SortBehavior.callBaseMethod(this, "dispose")
    },
    initialize: function() {
        Sys.Preview.UI.Data.SortBehavior.callBaseMethod(this, "initialize");
        this._clickHandler = Function.createDelegate(this, this.clickHandler);
        Sys.UI.DomEvent.addHandler(this.get_element(), "click", this._clickHandler);
        this._sortChangedDelegate = Function.createDelegate(this, this.sortChanged);
        if (this._dataView) {
            this._dataView.add_propertyChanged(this._sortChangedDelegate);
            this.update()
        }
    },
    clickHandler: function() {
        var a = this.get_dataView();
        if (a)
            if (a.get_sortColumn() === this._sortColumn)
                a.set_sortDirection(a.get_sortDirection() === Sys.Preview.Data.SortDirection.Ascending
                    ? Sys.Preview.Data.SortDirection.Descending
                    : Sys.Preview.Data.SortDirection.Ascending);
            else
                a.sort(this._sortColumn, Sys.Preview.Data.SortDirection.Ascending)
    },
    update: function() {
        var a = this.get_element();
        if (this._dataView && this._dataView.get_sortColumn() === this._sortColumn)
            if (this._dataView.get_sortDirection() === Sys.Preview.Data.SortDirection.Ascending) {
                Sys.UI.DomElement.removeCssClass(a, this._sortDescendingCssClass);
                Sys.UI.DomElement.addCssClass(a, this._sortAscendingCssClass)
            } else {
                Sys.UI.DomElement.removeCssClass(a, this._sortAscendingCssClass);
                Sys.UI.DomElement.addCssClass(a, this._sortDescendingCssClass)
            }
        else {
            Sys.UI.DomElement.removeCssClass(a, this._sortAscendingCssClass);
            Sys.UI.DomElement.removeCssClass(a, this._sortDescendingCssClass)
        }
    },
    sortChanged: function(c, b) {
        var a = b.get_propertyName();
        (a === "sortColumn" || a === "sortDirection") &&
            this.update()
    }
};
Sys.Preview.UI.Data.SortBehavior.descriptor = {
    properties: [
        { name: "dataView", type: Object }, { name: "sortAscendingCssClass", type: String },
        { name: "sortColumn", type: String }, { name: "sortDescendingCssClass", type: String }
    ]
};
Sys.Preview.UI.Data.SortBehavior.registerClass("Sys.Preview.UI.Data.SortBehavior", Sys.UI.Behavior);
Sys.Preview.UI.Data.XSLTView = function(a) {
    Sys.Preview.UI.Data.XSLTView.initializeBase(this, [a])
};
Sys.Preview.UI.Data.XSLTView.prototype = {
    _document: null,
    _transform: null,
    _parameters: null,
    get_document: function() {
        return this._document
    },
    set_document: function(a) {
        this._document = a;
        this.get_isInitialized() &&
            this._render()
    },
    get_parameters: function() {
        if (!this._parameters)
            this._parameters = {};
        return this._parameters
    },
    get_transform: function() {
        return this._transform
    },
    set_transform: function(a) {
        this._transform = a;
        this.get_isInitialized() &&
            this._render()
    },
    dispose: function() {
        this._document = null;
        this._transform = null;
        Sys.Preview.UI.Data.XSLTView.callBaseMethod(this, "dispose")
    },
    initialize: function() {
        Sys.Preview.UI.Data.XSLTView.callBaseMethod(this, "initialize");
        this._render()
    },
    update: function() {
        this._render()
    },
    _render: function() {
        var c = "";
        if (this._document && this._transform) {
            if (this._parameters) {
                Sys.Browser.agent === Sys.Browser.InternetExplorer &&
                    this._transform.setProperty("SelectionNamespaces",
                        'xmlns:xsl="http://www.w3.org/1999/XSL/Transform"');
                for (var a in this._parameters) {
                    var b = this._transform.selectSingleNode('//xsl:param[@name="' + a + '"]');
                    if (b) {
                        b.text = this._parameters[a].toString();
                        b.removeAttribute("select")
                    }
                }
            }
            c = this._document.transformNode(this._transform)
        }
        this.get_element().innerHTML = c
    }
};
Sys.Preview.UI.Data.XSLTView.descriptor = {
    properties: [
        { name: "document", type: Object }, { name: "parameters", type: Object, readOnly: true },
        { name: "transform", type: Object }
    ],
    methods: [{ name: "update" }]
};
Sys.Preview.UI.Data.XSLTView.registerClass("Sys.Preview.UI.Data.XSLTView", Sys.UI.Control);
Sys.Component.descriptor = {
    properties: [
        { name: "dataContext", type: Object }, { name: "id", type: String },
        { name: "isInitialized", type: Boolean, readOnly: true }, { name: "isUpdating", type: Boolean, readOnly: true }
    ],
    events: [{ name: "propertyChanged" }]
};
Sys.UI.Control.descriptor = {
    properties: [
        { name: "element", type: Object, readOnly: true }, { name: "role", type: String, readOnly: true },
        { name: "parent", type: Object }, { name: "visible", type: Boolean },
        { name: "visibilityMode", type: Sys.UI.VisibilityMode }
    ],
    methods: [
        { name: "addCssClass", parameters: [{ name: "className", type: String }] },
        { name: "removeCssClass", parameters: [{ name: "className", type: String }] },
        { name: "toggleCssClass", parameters: [{ name: "className", type: String }] }
    ]
};
Sys.UI.Behavior.descriptor = { properties: [{ name: "name", type: String }] };
Sys.Component.parseFromMarkup = function(g, f, a) {
    var e = new g,
        d = false,
        c = a.get_dataContext();
    if (c)
        d = a.hideDataContext();
    var b = Sys.Preview.MarkupParser.initializeObject(e, f, a);
    if (b) {
        a.addComponent(b);
        c &&
            b.set_dataContext(c)
    } else
        e.dispose();
    d &&
        a.restoreDataContext();
    return b
};
Sys.Component.createCollection = function(c) {
    var a = [];
    a._component = c;
    var b = null;
    a.get_events = function() {
        if (!b)
            b = new Sys.EventHandlerList;
        return b
    };
    a.add_collectionChanged = function(a) {
        this.get_events().addHandler("collectionChanged", a)
    };
    a.remove_collectionChanged = function(a) {
        this.get_events().removeHandler("collectionChanged", a)
    };
    a._onCollectionChanged = function(b) {
        var a = this.get_events().getHandler("collectionChanged");
        a &&
            a(this, b)
    };
    a.add = function(a) {
        Array.add(this, a);
        typeof a.setOwner === "function" &&
            a.setOwner(this._component);
        this._onCollectionChanged(new Sys.Preview
            .CollectionChangedEventArgs(Sys.Preview.NotifyCollectionChangedAction.Add, a))
    };
    a.clear = function() {
        for (var a = this.length - 1; a >= 0; a--) {
            this[a].dispose();
            this[a] = null
        }
        Array.clear(this);
        this._onCollectionChanged(new Sys.Preview
            .CollectionChangedEventArgs(Sys.Preview.NotifyCollectionChangedAction.Reset, null))
    };
    a.dispose = function() {
        this.clear();
        delete this._events;
        this._component = null;
        this._disposed = true
    };
    a.remove = function(a) {
        a.dispose();
        Array.remove(this, a);
        this._onCollectionChanged(new Sys.Preview
            .CollectionChangedEventArgs(Sys.Preview.NotifyCollectionChangedAction.Remove, a))
    };
    a.removeAt = function(a) {
        var b = this[a];
        b.dispose();
        Array.removeAt(this, a);
        this._onCollectionChanged(new Sys.Preview
            .CollectionChangedEventArgs(Sys.Preview.NotifyCollectionChangedAction.Remove, b))
    };
    return a
};
Sys.Component.createMultiple = function(b, g, c, f, d) {
    for (var e = Sys.Component.create,
        a = 0,
        h = b.length;
        a < h;
        a++)
        e(g, c, f, d, b[a])
};
Sys.UI.Control.parseFromMarkup = function(i, f, a) {
    var h = f.attributes.getNamedItem("id"),
        j = h.nodeValue,
        g = a.findElement(j),
        d = false,
        c = a.get_dataContext();
    if (c)
        d = a.hideDataContext();
    var e = new i(g),
        b = Sys.Preview.MarkupParser.initializeObject(e, f, a);
    if (b) {
        a.addComponent(b);
        c &&
            b.set_dataContext(c)
    } else
        e.dispose();
    d &&
        a.restoreDataContext();
    return b
};
Sys.UI.Behavior.parseFromMarkup = function(j, c, d) {
    var f,
        e,
        b = c.attributes.getNamedItem("elementID");
    if (!b) {
        var a = c.parentNode;
        if (a) {
            a = a.parentNode;
            if (a && a.attributes) {
                var h = a.attributes.getNamedItem("id");
                if (h) {
                    e = h.nodeValue;
                    f = d.findElement(e)
                }
            }
        }
    } else {
        if (b.nodeValue.length) {
            e = b.nodeValue;
            f = d.findElement(e)
        }
        c.attributes.removeNamedItem("elementID")
    }
    var i = new j(f),
        g = Sys.Preview.MarkupParser.initializeObject(i, c, d);
    if (g) {
        b &&
            c.attributes.setNamedItem(b);
        d.addComponent(g)
    } else
        i.dispose();
    return g
};
Sys.UI.DomElement._contains = function(b, a) {
    while (a) {
        a = a.parentNode;
        if (a === b)
            return true
    }
    return false
};
Sys.UI.DomElement._testTerm = function(a, b) {
    return a.id && b.id === a.id ||
        a.tagName && b.tagName === a.tagName ||
        (" " + b.className + " ").indexOf(a.className) !== -1
};
Sys.UI.DomElement.getElementListByClassName = function(d, a) {
    a = a || document;
    d = " " + d + " ";
    for (var c = a.all || a.getElementsByTagName("*"),
        e = [],
        b = 0,
        f = c.length;
        b < f;
        b++)
        if ((" " + c[b].className + " ").indexOf(d) !== -1)
            e[e.length] = c[b];
    return e
};
Sys.UI.DomElement.getElementListBySelectors = function(r, s) {
    var p = /([^\.#]*)\.?([^#]*)#?(.*)/,
        j = r.trim().split(/\s+/),
        e = s || document,
        l = e.body ? e : e.documentElement,
        n = j.length;
    if (n === 0)
        return [];
    for (var g = 0; g < n; g++) {
        j[g].search(p);
        j[g] = { tagName: RegExp.$1.toLowerCase(), className: RegExp.$2.toLowerCase(), id: RegExp.$3 }
    }
    var a = j[0],
        f = [],
        c = [];
    if (a.id) {
        var b = l.getElementById(a.id);
        if (b && (e === l || e.contains && e.contains(b) || this._contains(e, b)))
            f = [b]
    } else if (a.tagName)
        f = e.getElementsByTagName(a.tagName);
    else if (a.className)
        f = this.getElementListByClassName(a.className, e);
    a.className = " " + a.className + " ";
    for (g = 1; g < n; g++) {
        var m = f.length;
        if (m === 0)
            return [];
        var q = a;
        a = j[g];
        a.className = " " + a.className + " ";
        for (var i = 0; i < m; i++) {
            var d = f[i];
            if (!this._testTerm(q, d))
                continue;
            if (a.id) {
                b = l.getElementById(a.id);
                if (b && (d === l || d.contains && d.contains(b) || this._contains(d, b)))
                    c[c.length] = b
            } else if (a.tagName)
                for (var k = d.getElementsByTagName(a.tagName),
                    h = 0,
                    o = k.length;
                    h < o;
                    h++)
                    c[c.length] = k[h];
            else {
                k = d.getElementsByTagName("*");
                o = k.length;
                for (h = 0; h < o; h++) {
                    b = k[h];
                    if ((" " + b.className + " ").indexOf(a.className) !== -1)
                        c[c.length] = b
                }
            }
        }
        f = c;
        c = []
    }
    m = f.length;
    for (var i = 0; i < m; i++) {
        var d = f[i];
        if (this._testTerm(a, d))
            c[c.length] = d
    }
    return c
};

function $object(b, a) {
    return Sys.Application.findComponent(b, a)
}

Sys._Application.descriptor = { events: [{ name: "init" }, { name: "load" }, { name: "unload" }] };
Sys._Application.parseFromMarkup = function(e, c, a) {
    if (!a.get_isGlobal())
        return null;
    var d = null,
        b = c.attributes.getNamedItem("id");
    if (b) {
        d = b.nodeValue;
        c.attributes.removeNamedItem("id")
    }
    Sys.Preview.MarkupParser.initializeObject(Sys.Application, c, a);
    b &&
        c.attributes.setNamedItem(b);
    d &&
        a.findComponent(d) !== Sys.Application &&
        a._addComponentByID(d, Sys.Application, true);
    return Sys.Application
};
Sys.Application.getMarkupContext = function() {
    return this._markupContext
};
Sys.Application.__initHandler = function() {
    var a = Sys.Application;
    a.remove_init(Sys.Application.__initHandler);
    Sys.Preview.MarkupParser.processDocument(a._markupContext)
};
Sys.Application.__unloadHandler = function() {
    var a = Sys.Application;
    a.remove_unload(a.__unloadHandler);
    if (a._markupContext) {
        a._markupContext.dispose();
        a._markupContext = null
    }
};
if (!Sys.Application._markupContext) {
    Sys.Application._markupContext = Sys.Preview.MarkupContext.createGlobalContext();
    Sys.Application.add_init(Sys.Application.__initHandler);
    Sys.Application.add_unload(Sys.Application.__unloadHandler)
}
if (!Sys.Serialization.JavaScriptSerializer._dateRegEx) {
    Sys.Serialization.JavaScriptSerializer
        ._dateRegEx = new RegExp('(^|[^\\\\])\\"\\\\/Date\\((-?[0-9]+)\\)\\\\/\\"', "g");
    Sys.Serialization.JavaScriptSerializer._jsonRegEx = new RegExp("[^,:{}\\[\\]0-9.\\-+Eaeflnr-u \\n\\r\\t]", "g");
    Sys.Serialization.JavaScriptSerializer._jsonStringRegEx = new RegExp('"(\\\\.|[^"\\\\])*"', "g");
    Sys.Serialization.JavaScriptSerializer.deserialize = function(data, secure) {
        if (data.length === 0)
            throw Error.argument("data", Sys.Res.cannotDeserializeEmptyString);
        try {
            var exp = data.replace(Sys.Serialization.JavaScriptSerializer._dateRegEx, "$1new Date($2)");
            if (secure &&
                Sys.Serialization.JavaScriptSerializer._jsonRegEx
                .test(exp.replace(Sys.Serialization.JavaScriptSerializer._jsonStringRegEx, "")))
                throw null;
            return eval("(" + exp + ")")
        } catch (a) {
            throw Error.argument("data", Sys.Res.cannotDeserializeInvalidJson)
        }
    }
}
if (!Sys.UI.DomElement.getVisible)
    Sys.UI.DomElement.getVisible = function(a) {
        return a.style.visibility !== "hidden"
    };
if (!Sys.UI.DomElement.setVisible)
    Sys.UI.DomElement.setVisible = function(a, b) {
        if (b !== Sys.UI.DomElement.getVisible(a)) {
            a.style.visibility = b ? "visible" : "hidden";
            if (b) {
                if (a.style.display === "none")
                    a.style.display = a._display ? a._display : "inline"
            } else {
                a._display = a.style.display;
                a.style.display = "none"
            }
        }
    };
Sys.Preview.HistoryEventArgs = function(a) {
    Sys.Preview.HistoryEventArgs.initializeBase(this);
    this._state = a
};
Sys.Preview.HistoryEventArgs.prototype = {
    get_state: function() {
        return this._state
    }
};
Sys.Preview.HistoryEventArgs.registerClass("Sys.Preview.HistoryEventArgs", Sys.EventArgs);
Sys.Preview._History = function() {
    Sys.Preview._History.initializeBase(this);
    this._appLoadHandler = null;
    this._beginRequestHandler = null;
    this._currentEntry = "";
    this._emptyPageUrl = null;
    this._endRequestHandler = null;
    this._historyFrame = null;
    this._iframeLoadHandler = null;
    this._ignoreIFrame = false;
    this._ignoreTimer = false;
    this._state = {};
    this._clientId = null;
    this._uniqueId = null;
    this._timerCookie = 0;
    this._timerHandler = null
};
Sys.Preview._History.prototype = {
    get_stateString: function() {
        var a = decodeURIComponent(window.location.hash || "");
        if (a.length > 0 && a.charAt(0) === "#")
            a = a.substring(1);
        return a
    },
    add_navigate: function(a) {
        this.get_events().addHandler("navigate", a)
    },
    remove_navigate: function(a) {
        this.get_events().removeHandler("navigate", a)
    },
    addHistoryPoint: function(c) {
        var b = this._state;
        for (var a in c) {
            var d = c[a];
            if (d === null) {
                if (typeof b[a] !== "undefined")
                    delete b[a]
            } else
                b[a] = d
        }
        var e = Sys.Serialization.JavaScriptSerializer.serialize(b);
        this._ignoreTimer = true;
        this._ignoreIFrame = true;
        this._setState(e)
    },
    dispose: function() {
        if (this._appLoadHandler) {
            Sys.Application.remove_load(this._appLoadHandler);
            delete this._appLoadHandler
        }
        if (this._historyFrame) {
            Sys.UI.DomEvent.removeHandler(this._historyFrame, "load", this._iframeLoadHandler);
            delete this._iframeLoadHandler;
            delete this._historyFrame
        }
        if (this._timerCookie) {
            window.clearTimeout(this._timerCookie);
            delete this._timerCookie
        }
        if (this._endRequestHandler) {
            Sys.WebForms.PageRequestManager.getInstance().remove_endRequest(this._endRequestHandler);
            delete this._endRequestHandler
        }
        if (this._beginRequestHandler) {
            Sys.WebForms.PageRequestManager.getInstance().remove_beginRequest(this._beginRequestHandler);
            delete this._beginRequestHandler
        }
        Sys.Preview._History.callBaseMethod(this, "dispose")
    },
    initialize: function() {
        Sys.Preview._History.callBaseMethod(this, "initialize");
        this._appLoadHandler = Function.createDelegate(this, this._onApplicationLoaded);
        Sys.Application.add_load(this._appLoadHandler)
    },
    setServerId: function(a, b) {
        this._clientId = a;
        this._uniqueId = b
    },
    setServerState: function(a) {
        this._state.__s = a
    },
    _setState: function(a, c) {
        if (a !== this._currentEntry) {
            if (this._historyFrame && !c) {
                var b = this._emptyPageUrl + a;
                if (this._historyFrame.src != b)
                    this._historyFrame.src = b
            }
            this._currentEntry = a;
            var d = this.get_stateString();
            if (a !== d)
                window.location.hash = a ? encodeURIComponent(a) : ""
        }
    },
    _onApplicationLoaded: function() {
        Sys.Application.remove_load(this._appLoadHandler);
        delete this._appLoadHandler;
        if (Sys.WebForms) {
            var a = document.createElement("DIV");
            a.id = this._clientId;
            a.style.display = "none";
            document.body.appendChild(a);
            this._beginRequestHandler = Function.createDelegate(this, this._onPageRequestManagerBeginRequest);
            Sys.WebForms.PageRequestManager.getInstance().add_beginRequest(this._beginRequestHandler);
            this._endRequestHandler = Function.createDelegate(this, this._onPageRequestManagerEndRequest);
            Sys.WebForms.PageRequestManager.getInstance().add_endRequest(this._endRequestHandler)
        }
        if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
            this._historyFrame = document.getElementById("__historyFrame");
            var c = this._historyFrame.src;
            this._emptyPageUrl = c + (c.indexOf("?") === -1 ? "?" : "&") + "_state=";
            this._iframeLoadHandler = Function.createDelegate(this, this._onIFrameLoad);
            Sys.UI.DomEvent.addHandler(this._historyFrame, "load", this._iframeLoadHandler)
        }
        this._timerHandler = Function.createDelegate(this, this._onIdle);
        this._timerCookie = window.setTimeout(this._timerHandler, 100);
        var b = this.get_stateString();
        b !== this._currentEntry &&
            this._navigate(b)
    },
    _onIdle: function() {
        delete this._timerCookie;
        var a = this.get_stateString();
        if (a !== this._currentEntry)
            !this._ignoreTimer &&
                this._navigate(a);
        else
            this._ignoreTimer = false;
        this._timerCookie = window.setTimeout(this._timerHandler, 100)
    },
    _onIFrameLoad: function() {
        if (!this._ignoreIFrame) {
            var a = this._historyFrame.contentWindow.location.search,
                b = a.indexOf("_state=");
            if (b !== -1 && b + 7 < a.length)
                a = a.substring(b + 7);
            else
                a = "";
            this._setState(a, true);
            this._navigate(a)
        }
        this._ignoreIFrame = false
    },
    _onPageRequestManagerBeginRequest: function() {
        this._ignoreTimer = true
    },
    _onPageRequestManagerEndRequest: function(d, c) {
        var a = c.get_dataItems()[this._clientId];
        if (typeof a !== "undefined") {
            this.setServerState(a);
            var b = Sys.Serialization.JavaScriptSerializer.serialize(this._state);
            if (b != this._currentEntry) {
                this._ignoreIFrame = true;
                this._setState(b);
                this._raiseNavigate()
            }
        }
        this._ignoreTimer = false
    },
    _navigate: function(b) {
        var a = {};
        if (b)
            try {
                a = Sys.Serialization.JavaScriptSerializer.deserialize(b, true)
            } catch (e) {
            }
        if (this._uniqueId) {
            var d = Sys.Serialization.JavaScriptSerializer.serialize(this._state.__s),
                c = Sys.Serialization.JavaScriptSerializer.serialize(a.__s);
            if (c !== d) {
                __doPostBack(this._uniqueId, c);
                this._state = a;
                return
            }
        }
        this._setState(b);
        this._state = a;
        this._raiseNavigate()
    },
    _raiseNavigate: function() {
        var b = this.get_events().getHandler("navigate"),
            a = new Sys.Preview.HistoryEventArgs(this._state);
        b &&
            b(this, a);
        window.pageNavigate &&
            window.pageNavigate(this, a)
    }
};
Sys.Preview._History.registerClass("Sys.Preview._History", Sys.Component);
Sys._Application.prototype.get_history = function() {
    var a = this._history;
    if (!a) {
        a = this._history = new Sys.Preview._History;
        Sys.Application.registerDisposableObject(a);
        a.initialize()
    }
    return a
};
typeof Sys !== "undefined" &&
    Sys.Application.notifyScriptLoaded()