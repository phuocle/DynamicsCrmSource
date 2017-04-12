
Sys.Preview.UI._DragDropManager = function() {
};
Sys.Preview.UI._DragDropManager.prototype = {
    _instance: null,
    _events: null,
    _ieBrowserVersion: 0,
    _isIEBrowserVersionComputed: false,
    add_dragStart: function(a) {
        this.get_events().addHandler("dragStart", a)
    },
    remove_dragStart: function(a) {
        this.get_events().removeHandler("dragStart", a)
    },
    get_events: function() {
        if (!this._events)
            this._events = new Sys.EventHandlerList;
        return this._events
    },
    add_dragStop: function(a) {
        this.get_events().addHandler("dragStop", a)
    },
    remove_dragStop: function(a) {
        this.get_events().removeHandler("dragStop", a)
    },
    _getInstance: function() {
        if (!this._instance) {
            if (Sys.Browser.agent === Sys.Browser.InternetExplorer && this._getIEBrowserVersion() !== 10)
                this._instance = new Sys.Preview.UI.IEDragDropManager;
            else
                this._instance = new Sys.Preview.UI.GenericDragDropManager;
            this._instance.initialize();
            this._instance.add_dragStart(Function.createDelegate(this, this._raiseDragStart));
            this._instance.add_dragStop(Function.createDelegate(this, this._raiseDragStop))
        }
        return this._instance
    },
    startDragDrop: function(a, b, c) {
        this._getInstance().startDragDrop(a, b, c)
    },
    registerDropTarget: function(a) {
        this._getInstance().registerDropTarget(a)
    },
    unregisterDropTarget: function(a) {
        this._getInstance().unregisterDropTarget(a)
    },
    dispose: function() {
        delete this._events;
        Sys.Application.unregisterDisposableObject(this);
        Sys.Application.removeComponent(this)
    },
    _raiseDragStart: function(c, b) {
        var a = this.get_events().getHandler("dragStart");
        a &&
            a(this, b)
    },
    _raiseDragStop: function(c, b) {
        var a = this.get_events().getHandler("dragStop");
        a &&
            a(this, b)
    },
    _getIEBrowserVersion: function() {
        if (!this._isIEBrowserVersionComputed) {
            if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
                this._ieBrowserVersion = 7;
                if (Sys.Browser.version >= 8)
                    this._ieBrowserVersion = Sys.Browser.version;
                else {
                    var userAgent = window.navigator.userAgent,
                        re = new RegExp("Trident\\/([0-9]{1,}[\\.0-9]{0,})");
                    if (re.test(userAgent)) {
                        var tokens = re.exec(userAgent),
                            subVersion = tokens.length >= 2 ? Number.parseInvariant(tokens[1]) : 3;
                        this._ieBrowserVersion = subVersion >= 4 ? subVersion + 4 : 7
                    } else
                        this._ieBrowserVersion = Sys.Browser.version
                }
            }
            this._isIEBrowserVersionComputed = true
        }
        return this._ieBrowserVersion
    }
};
Sys.Preview.UI._DragDropManager.registerClass("Sys.Preview.UI._DragDropManager");
Sys.Preview.UI.DragDropManager = new Sys.Preview.UI._DragDropManager;
Sys.Preview.UI.DragDropEventArgs = function(c, a, b) {
    this._dragMode = c;
    this._dataType = a;
    this._data = b
};
Sys.Preview.UI.DragDropEventArgs.prototype = {
    get_dragMode: function() {
        return this._dragMode || null
    },
    get_dragDataType: function() {
        return this._dataType || null
    },
    get_dragData: function() {
        return this._data || null
    }
};
Sys.Preview.UI.DragDropEventArgs.registerClass("Sys.Preview.UI.DragDropEventArgs");
Sys.Preview.UI.IDragSource = function() {
};
Sys.Preview.UI.IDragSource.prototype = {
    get_dragDataType: function() {
        throw Error.notImplemented()
    },
    getDragData: function() {
        throw Error.notImplemented()
    },
    get_dragMode: function() {
        throw Error.notImplemented()
    },
    onDragStart: function() {
        throw Error.notImplemented()
    },
    onDrag: function() {
        throw Error.notImplemented()
    },
    onDragEnd: function() {
        throw Error.notImplemented()
    }
};
Sys.Preview.UI.IDragSource.registerInterface("Sys.Preview.UI.IDragSource");
Sys.Preview.UI.IDropTarget = function() {
};
Sys.Preview.UI.IDropTarget.prototype = {
    get_dropTargetElement: function() {
        throw Error.notImplemented()
    },
    canDrop: function() {
        throw Error.notImplemented()
    },
    drop: function() {
        throw Error.notImplemented()
    },
    onDragEnterTarget: function() {
        throw Error.notImplemented()
    },
    onDragLeaveTarget: function() {
        throw Error.notImplemented()
    },
    onDragInTarget: function() {
        throw Error.notImplemented()
    }
};
Sys.Preview.UI.IDropTarget.registerInterface("Sys.Preview.UI.IDropTarget");
Sys.Preview.UI.DragMode = function() {
    throw Error.invalidOperation()
};
Sys.Preview.UI.DragMode.prototype = { Copy: 0, Move: 1 };
Sys.Preview.UI.DragMode.registerEnum("Sys.Preview.UI.DragMode");
Sys.Preview.UI.IEDragDropManager = function() {
    Sys.Preview.UI.IEDragDropManager.initializeBase(this)
};
Sys.Preview.UI.IEDragDropManager.prototype = {
    _dropTargets: null,
    _radius: 10,
    _activeDragVisual: null,
    _activeContext: null,
    _activeDragSource: null,
    _underlyingTarget: null,
    _oldOffset: null,
    _potentialTarget: null,
    _isDragging: false,
    _mouseUpHandler: null,
    _documentMouseMoveHandler: null,
    _documentDragOverHandler: null,
    _dragStartHandler: null,
    _mouseMoveHandler: null,
    _dragEnterHandler: null,
    _dragLeaveHandler: null,
    _dragOverHandler: null,
    _dropHandler: null,
    add_dragStart: function(a) {
        this.get_events().addHandler("dragStart", a)
    },
    remove_dragStart: function(a) {
        this.get_events().removeHandler("dragStart", a)
    },
    add_dragStop: function(a) {
        this.get_events().addHandler("dragStop", a)
    },
    remove_dragStop: function(a) {
        this.get_events().removeHandler("dragStop", a)
    },
    initialize: function() {
        Sys.Preview.UI.IEDragDropManager.callBaseMethod(this, "initialize");
        this._mouseUpHandler = Function.createDelegate(this, this.mouseUpHandler);
        this._documentMouseMoveHandler = Function.createDelegate(this, this.documentMouseMoveHandler);
        this._documentDragOverHandler = Function.createDelegate(this, this.documentDragOverHandler);
        this._dragStartHandler = Function.createDelegate(this, this.dragStartHandler);
        this._mouseMoveHandler = Function.createDelegate(this, this.mouseMoveHandler);
        this._dragEnterHandler = Function.createDelegate(this, this.dragEnterHandler);
        this._dragLeaveHandler = Function.createDelegate(this, this.dragLeaveHandler);
        this._dragOverHandler = Function.createDelegate(this, this.dragOverHandler);
        this._dropHandler = Function.createDelegate(this, this.dropHandler)
    },
    dispose: function() {
        if (this._dropTargets) {
            for (var a = 0; a < this._dropTargets; a++)
                this.unregisterDropTarget(this._dropTargets[a]);
            this._dropTargets = null
        }
        Sys.Preview.UI.IEDragDropManager.callBaseMethod(this, "dispose")
    },
    startDragDrop: function(b, a, f) {
        var h = window._event;
        if (this._isDragging)
            return;
        this._underlyingTarget = null;
        this._activeDragSource = b;
        this._activeDragVisual = a;
        this._activeContext = f;
        var e = { x: h.clientX, y: h.clientY };
        a.originalPosition = a.style.position;
        a.style.position = "absolute";
        document._lastPosition = e;
        a.startingPoint = e;
        var i = this.getScrollOffset(a, true);
        a.startingPoint = this.addPoints(a.startingPoint, i);
        if (a.style.position == "absolute")
            a.startingPoint = this.subtractPoints(a.startingPoint, Sys.UI.DomElement.getLocation(a));
        else {
            var c = parseInt(a.style.left, 10),
                d = parseInt(a.style.top);
            if (isNaN(c))
                c = "0";
            if (isNaN(d))
                d = "0";
            a.startingPoint = this.subtractPoints(a.startingPoint, { x: c, y: d })
        }
        this._prepareForDomChanges();
        b.onDragStart();
        var j = new Sys.Preview.UI.DragDropEventArgs(b.get_dragMode(), b.get_dragDataType(), b.getDragData(f)),
            g = this.get_events().getHandler("dragStart");
        g &&
            g(this, j);
        this._recoverFromDomChanges();
        this._wireEvents();
        this._drag(true)
    },
    _stopDragDrop: function(a) {
        var c = window._event;
        if (this._activeDragSource) {
            this._unwireEvents();
            if (!a)
                a = this._underlyingTarget == null;
            !a &&
                this._underlyingTarget &&
                this._underlyingTarget.drop(this._activeDragSource.get_dragMode(),
                    this._activeDragSource.get_dragDataType(),
                    this._activeDragSource.getDragData(this._activeContext));
            this._activeDragSource.onDragEnd(a);
            var b = this.get_events().getHandler("dragStop");
            b &&
                b(this, Sys.EventArgs.Empty);
            this._activeDragVisual.style.position = this._activeDragVisual.originalPosition;
            this._activeDragSource = null;
            this._activeContext = null;
            this._activeDragVisual = null;
            this._isDragging = false;
            this._potentialTarget = null;
            c.preventDefault()
        }
    },
    _drag: function(e) {
        var d = window._event,
            c = { x: d.clientX, y: d.clientY };
        document._lastPosition = c;
        var f = this.getScrollOffset(this._activeDragVisual, true),
            a = this.addPoints(this.subtractPoints(c, this._activeDragVisual.startingPoint), f);
        if (!e &&
            parseInt(this._activeDragVisual.style.left) == a.x &&
            parseInt(this._activeDragVisual.style.top) == a.y)
            return;
        Sys.UI.DomElement.setLocation(this._activeDragVisual, a.x, a.y);
        this._prepareForDomChanges();
        this._activeDragSource.onDrag();
        this._recoverFromDomChanges();
        this._potentialTarget = this._findPotentialTarget(this._activeDragSource, this._activeDragVisual);
        var b = this._potentialTarget != this._underlyingTarget || this._potentialTarget == null;
        b &&
            this._underlyingTarget != null &&
            this._leaveTarget(this._activeDragSource, this._underlyingTarget);
        if (this._potentialTarget != null)
            if (b) {
                this._underlyingTarget = this._potentialTarget;
                this._enterTarget(this._activeDragSource, this._underlyingTarget)
            } else
                this._moveInTarget(this._activeDragSource, this._underlyingTarget);
        else
            this._underlyingTarget = null
    },
    _wireEvents: function() {
        Sys.UI.DomEvent.addHandler(document, "mouseup", this._mouseUpHandler);
        Sys.UI.DomEvent.addHandler(document, "mousemove", this._documentMouseMoveHandler);
        Sys.UI.DomEvent.addHandler(document.body, "dragover", this._documentDragOverHandler);
        Sys.UI.DomEvent.addHandler(this._activeDragVisual, "dragstart", this._dragStartHandler);
        Sys.UI.DomEvent.addHandler(this._activeDragVisual, "dragend", this._mouseUpHandler);
        Sys.UI.DomEvent.addHandler(this._activeDragVisual, "drag", this._mouseMoveHandler)
    },
    _unwireEvents: function() {
        Sys.UI.DomEvent.removeHandler(this._activeDragVisual, "drag", this._mouseMoveHandler);
        Sys.UI.DomEvent.removeHandler(this._activeDragVisual, "dragend", this._mouseUpHandler);
        Sys.UI.DomEvent.removeHandler(this._activeDragVisual, "dragstart", this._dragStartHandler);
        Sys.UI.DomEvent.removeHandler(document.body, "dragover", this._documentDragOverHandler);
        Sys.UI.DomEvent.removeHandler(document, "mousemove", this._documentMouseMoveHandler);
        Sys.UI.DomEvent.removeHandler(document, "mouseup", this._mouseUpHandler)
    },
    registerDropTarget: function(a) {
        if (!this._dropTargets)
            this._dropTargets = [];
        Array.add(this._dropTargets, a);
        this._wireDropTargetEvents(a)
    },
    unregisterDropTarget: function(a) {
        this._unwireDropTargetEvents(a);
        this._dropTargets &&
            Array.remove(this._dropTargets, a)
    },
    _wireDropTargetEvents: function(b) {
        var a = b.get_dropTargetElement();
        a._dropTarget = b;
        Sys.UI.DomEvent.addHandler(a, "dragenter", this._dragEnterHandler);
        Sys.UI.DomEvent.addHandler(a, "dragleave", this._dragLeaveHandler);
        Sys.UI.DomEvent.addHandler(a, "dragover", this._dragOverHandler);
        Sys.UI.DomEvent.addHandler(a, "drop", this._dropHandler)
    },
    _unwireDropTargetEvents: function(b) {
        var a = b.get_dropTargetElement();
        a._dropTarget = null;
        Sys.UI.DomEvent.removeHandler(a, "dragenter", this._dragEnterHandler);
        Sys.UI.DomEvent.removeHandler(a, "dragleave", this._dragLeaveHandler);
        Sys.UI.DomEvent.removeHandler(a, "dragover", this._dragOverHandler);
        Sys.UI.DomEvent.removeHandler(a, "drop", this._dropHandler)
    },
    clearCurrentSelection: function() {
        if (window.getSelection)
            window.getSelection().removeAllRanges();
        else
            try {
                document.selection.empty()
            } catch (e) {
            }
    },
    dragStartHandler: function(d) {
        window._event = d;
        this.clearCurrentSelection();
        var c = d.dataTransfer;
        if (!c)
            c = d.rawEvent.dataTransfer;
        var b = this._activeDragSource.get_dragDataType().toLowerCase(),
            a = this._activeDragSource.getDragData(this._activeContext);
        if (a) {
            if (b != "text" && b != "url") {
                b = "text";
                if (a.innerHTML != null)
                    a = a.innerHTML
            }
            c.effectAllowed = "move";
            c.setData(b, a.toString())
        }
    },
    mouseUpHandler: function(a) {
        window._event = a;
        this._stopDragDrop(false)
    },
    documentMouseMoveHandler: function(a) {
        window._event = a;
        this._dragDrop()
    },
    documentDragOverHandler: function(a) {
        window._event = a;
        this._potentialTarget &&
            a.preventDefault()
    },
    mouseMoveHandler: function(a) {
        window._event = a;
        this._drag()
    },
    dragEnterHandler: function(c) {
        window._event = c;
        if (this._isDragging)
            c.preventDefault();
        else
            for (var b = Sys.Preview.UI.IEDragDropManager._getDataObjectsForDropTarget(this._getDropTarget(c.target)),
                a = 0;
                a < b.length;
                a++)
                this._dropTarget.onDragEnterTarget(Sys.Preview.UI.DragMode.Copy, b[a].type, b[a].value)
    },
    dragLeaveHandler: function(c) {
        window._event = c;
        if (this._isDragging)
            c.preventDefault();
        else
            for (var b = Sys.Preview.UI.IEDragDropManager._getDataObjectsForDropTarget(this._getDropTarget(c.target)),
                a = 0;
                a < b.length;
                a++)
                this._dropTarget.onDragLeaveTarget(Sys.Preview.UI.DragMode.Copy, b[a].type, b[a].value)
    },
    dragOverHandler: function(c) {
        window._event = c;
        if (this._isDragging)
            c.preventDefault();
        else
            for (var b = Sys.Preview.UI.IEDragDropManager._getDataObjectsForDropTarget(this._getDropTarget(c.target)),
                a = 0;
                a < b.length;
                a++)
                this._dropTarget.onDragInTarget(Sys.Preview.UI.DragMode.Copy, b[a].type, b[a].value)
    },
    dropHandler: function(c) {
        window._event = c;
        if (!this._isDragging)
            for (var b = Sys.Preview.UI.IEDragDropManager._getDataObjectsForDropTarget(this._getDropTarget(c.target)),
                a = 0;
                a < b.length;
                a++)
                this._dropTarget.drop(Sys.Preview.UI.DragMode.Copy, b[a].type, b[a].value);
        c.preventDefault()
    },
    _getDropTarget: function(a) {
        while (a) {
            if (a._dropTarget != null)
                return a._dropTarget;
            a = a.parentNode
        }
        return null
    },
    _dragDrop: function() {
        if (this._isDragging)
            return;
        this._isDragging = true;
        this._activeDragVisual.dragDrop();
        this.clearCurrentSelection()
    },
    _moveInTarget: function(a, b) {
        this._prepareForDomChanges();
        b.onDragInTarget(a.get_dragMode(), a.get_dragDataType(), a.getDragData(this._activeContext));
        this._recoverFromDomChanges()
    },
    _enterTarget: function(a, b) {
        this._prepareForDomChanges();
        b.onDragEnterTarget(a.get_dragMode(), a.get_dragDataType(), a.getDragData(this._activeContext));
        this._recoverFromDomChanges()
    },
    _leaveTarget: function(a, b) {
        this._prepareForDomChanges();
        b.onDragLeaveTarget(a.get_dragMode(), a.get_dragDataType(), a.getDragData(this._activeContext));
        this._recoverFromDomChanges()
    },
    _findPotentialTarget: function(a) {
        var f = window._event;
        if (!this._dropTargets)
            return null;
        for (var m = a.get_dragDataType(),
            l = a.get_dragMode(),
            k = a.getDragData(this._activeContext),
            d = this.getScrollOffset(document.body, true),
            n = f.clientX + d.x,
            o = f.clientY + d.y,
            g = { x: n - this._radius, y: o - this._radius, width: this._radius * 2, height: this._radius * 2 },
            c = 0;
            c < this._dropTargets.length;
            c++) {
            var b = this._dropTargets[c],
                j = b.canDrop(l, m, k);
            if (!j)
                continue;
            var e = b.get_dropTargetElement(),
                h = Sys.UI.DomElement.getBounds(e),
                i = Sys.UI.Control.overlaps(g, h);
            if (i || e === document.body)
                return b
        }
        return null
    },
    _prepareForDomChanges: function() {
        this._oldOffset = Sys.UI.DomElement.getLocation(this._activeDragVisual)
    },
    _recoverFromDomChanges: function() {
        var a = Sys.UI.DomElement.getLocation(this._activeDragVisual);
        if (this._oldOffset.x != a.x || this._oldOffset.y != a.y) {
            this._activeDragVisual.startingPoint = this
                .subtractPoints(this._activeDragVisual.startingPoint, this.subtractPoints(this._oldOffset, a));
            scrollOffset = this.getScrollOffset(this._activeDragVisual, true);
            var b = this.addPoints(this.subtractPoints(document._lastPosition, this._activeDragVisual.startingPoint),
                scrollOffset);
            Sys.UI.DomElement.setLocation(this._activeDragVisual, b.x, b.y)
        }
    },
    addPoints: function(a, b) {
        return { x: a.x + b.x, y: a.y + b.y }
    },
    subtractPoints: function(a, b) {
        return { x: a.x - b.x, y: a.y - b.y }
    },
    getScrollOffset: function(b, e) {
        var c = b.scrollLeft,
            d = b.scrollTop;
        if (e) {
            var a = b.parentNode;
            while (a != null && a.scrollLeft != null) {
                c += a.scrollLeft;
                d += a.scrollTop;
                if (a == document.body && (c != 0 && d != 0))
                    break;
                a = a.parentNode
            }
        }
        return { x: c, y: d }
    },
    getBrowserRectangle: function() {
        var b = window.innerWidth,
            a = window.innerHeight;
        if (b == null)
            b = document.body.clientWidth;
        if (a == null)
            a = document.body.clientHeight;
        return { x: 0, y: 0, width: b, height: a }
    },
    getNextSibling: function(a) {
        for (a = a.nextSibling; a != null; a = a.nextSibling)
            if (a.innerHTML != null)
                return a;
        return null
    },
    hasParent: function(a) {
        return a.parentNode != null && a.parentNode.tagName != null
    }
};
Sys.Preview.UI.IEDragDropManager.registerClass("Sys.Preview.UI.IEDragDropManager", Sys.Component);
Sys.Preview.UI.IEDragDropManager._getDataObjectsForDropTarget = function(f) {
    if (f == null)
        return [];
    for (var g = window._event,
        e = [],
        b = ["URL", "Text"],
        c,
        a = 0;
        a < b.length;
        a++) {
        var d = g.dataTransfer;
        if (!d)
            d = g.rawEvent.dataTransfer;
        c = d.getData(b[a]);
        if (f.canDrop(Sys.Preview.UI.DragMode.Copy, b[a], c))
            c &&
                Array.add(e, { type: b[a], value: c })
    }
    return e
};
Sys.Preview.UI.GenericDragDropManager = function() {
    Sys.Preview.UI.GenericDragDropManager.initializeBase(this)
};
Sys.Preview.UI.GenericDragDropManager.prototype = {
    _scrollEdgeConst: 40,
    _scrollByConst: 10,
    _scroller: null,
    _scrollDeltaX: null,
    _scrollDeltaY: null,
    _activeDragVisual: null,
    _activeContext: null,
    _activeDragSource: null,
    _mouseUpHandler: null,
    _mouseMoveHandler: null,
    _keyPressHandler: null,
    initialize: function() {
        Sys.Preview.UI.GenericDragDropManager.callBaseMethod(this, "initialize");
        this._mouseUpHandler = Function.createDelegate(this, this.mouseUpHandler);
        this._mouseMoveHandler = Function.createDelegate(this, this.mouseMoveHandler);
        this._keyPressHandler = Function.createDelegate(this, this.keyPressHandler);
        Sys.Browser.agent === Sys.Browser.Safari &&
            Sys.Preview.UI.GenericDragDropManager.__loadSafariCompatLayer(this);
        this._scroller = new Sys.Preview.Timer;
        this._scroller.set_interval(10);
        this._scroller.add_tick(Function.createDelegate(this, this.scrollerTickHandler))
    },
    startDragDrop: function(a, b, c) {
        this._activeDragSource = a;
        this._activeDragVisual = b;
        this._activeContext = c;
        Sys.Preview.UI.GenericDragDropManager.callBaseMethod(this, "startDragDrop", [a, b, c])
    },
    _stopDragDrop: function(a) {
        this._scroller.set_enabled(false);
        Sys.Preview.UI.GenericDragDropManager.callBaseMethod(this, "_stopDragDrop", [a])
    },
    _drag: function(a) {
        Sys.Preview.UI.GenericDragDropManager.callBaseMethod(this, "_drag", [a]);
        this._autoScroll()
    },
    _wireEvents: function() {
        Sys.UI.DomEvent.addHandler(document, "mouseup", this._mouseUpHandler);
        Sys.UI.DomEvent.addHandler(document, "mousemove", this._mouseMoveHandler);
        Sys.UI.DomEvent.addHandler(document, "keypress", this._keyPressHandler)
    },
    _unwireEvents: function() {
        Sys.UI.DomEvent.removeHandler(document, "keypress", this._keyPressHandler);
        Sys.UI.DomEvent.removeHandler(document, "mousemove", this._mouseMoveHandler);
        Sys.UI.DomEvent.removeHandler(document, "mouseup", this._mouseUpHandler)
    },
    _wireDropTargetEvents: function() {
    },
    _unwireDropTargetEvents: function() {
    },
    mouseUpHandler: function(a) {
        window._event = a;
        this._stopDragDrop(false)
    },
    mouseMoveHandler: function(a) {
        window._event = a;
        this._drag()
    },
    keyPressHandler: function(a) {
        window._event = a;
        var b = a.keyCode ? a.keyCode : a.rawEvent.keyCode;
        b == 27 &&
            this._stopDragDrop(true)
    },
    _autoScroll: function() {
        var b = window._event,
            a = this.getBrowserRectangle();
        if (a.width > 0) {
            this._scrollDeltaX = this._scrollDeltaY = 0;
            if (b.clientX < a.x + this._scrollEdgeConst)
                this._scrollDeltaX = -this._scrollByConst;
            else if (b.clientX > a.width - this._scrollEdgeConst)
                this._scrollDeltaX = this._scrollByConst;
            if (b.clientY < a.y + this._scrollEdgeConst)
                this._scrollDeltaY = -this._scrollByConst;
            else if (b.clientY > a.height - this._scrollEdgeConst)
                this._scrollDeltaY = this._scrollByConst;
            if (this._scrollDeltaX != 0 || this._scrollDeltaY != 0)
                this._scroller.set_enabled(true);
            else
                this._scroller.set_enabled(false)
        }
    },
    scrollerTickHandler: function() {
        var d = document.body.scrollLeft,
            f = document.body.scrollTop;
        window.scrollBy(this._scrollDeltaX, this._scrollDeltaY);
        var c = document.body.scrollLeft,
            e = document.body.scrollTop,
            a = this._activeDragVisual,
            b = { x: parseInt(a.style.left) + (c - d), y: parseInt(a.style.top) + (e - f) };
        Sys.UI.DomElement.setLocation(a, b.x, b.y)
    }
};
Sys.Preview.UI.GenericDragDropManager.registerClass("Sys.Preview.UI.GenericDragDropManager",
    Sys.Preview.UI.IEDragDropManager);
if (Sys.Browser.agent === Sys.Browser.Safari)
    Sys.Preview.UI.GenericDragDropManager.__loadSafariCompatLayer = function(a) {
        a._getScrollOffset = a.getScrollOffset;
        a.getScrollOffset = function() {
            return { x: 0, y: 0 }
        };
        a._getBrowserRectangle = a.getBrowserRectangle;
        a.getBrowserRectangle = function() {
            var b = a._getBrowserRectangle(),
                c = a._getScrollOffset(document.body, true);
            return { x: b.x + c.x, y: b.y + c.y, width: b.width + c.x, height: b.height + c.y }
        }
    };
Sys.Preview.UI.RepeatDirection = function() {
    throw Error.invalidOperation()
};
Sys.Preview.UI.RepeatDirection.prototype = { Horizontal: 0, Vertical: 1 };
Sys.Preview.UI.RepeatDirection.registerEnum("Sys.Preview.UI.RepeatDirection");
Sys.Preview.UI.DragDropList = function(a) {
    Sys.Preview.UI.DragDropList.initializeBase(this, [a]);
    this._acceptedDataTypes = []
};
Sys.Preview.UI.DragDropList.prototype = {
    _isDragging: null,
    _dataType: null,
    _dragMode: null,
    _dragVisual: null,
    _direction: Sys.Preview.UI.RepeatDirection.Vertical,
    _emptyTemplate: null,
    _emptyTemplateInstance: null,
    _dropCueTemplate: null,
    _dropCueTemplateInstance: null,
    _floatContainerInstance: null,
    _originalParent: null,
    _originalNextSibling: null,
    _originalZIndex: null,
    _currentContext: null,
    _data: null,
    get_data: function() {
        return this._data
    },
    set_data: function(a) {
        this._data = a
    },
    initialize: function() {
        Sys.Preview.UI.DragDropList.callBaseMethod(this, "initialize");
        this.get_element().__dragDropList = this;
        Sys.Preview.UI.DragDropManager.registerDropTarget(this)
    },
    startDragDrop: function(c, b, a) {
        if (!this._isDragging) {
            this._isDragging = true;
            this._currentContext = b;
            if (!a)
                a = this.createDragVisual(c);
            else
                this._dragVisual = a;
            Sys.Preview.UI.DragDropManager.startDragDrop(this, a, b)
        }
    },
    createDragVisual: function(a) {
        if (this._dragMode === Sys.Preview.UI.DragMode.Copy)
            this._dragVisual = a.cloneNode(true);
        else
            this._dragVisual = a;
        var e = Sys.Preview.UI.DragDropManager._getInstance().getScrollOffset(a, true);
        this._dragVisual.style.width = a.offsetWidth + "px";
        this._dragVisual.style.height = a.offsetHeight + "px";
        this._dragVisual.style.opacity = "0.4";
        this._dragVisual.style.filter = "progid:DXImageTransform.Microsoft.BasicImage(opacity=0.4);";
        this._originalZIndex = this._dragVisual.style.zIndex;
        this._dragVisual.style.zIndex = 99999;
        this._originalParent = this._dragVisual.parentNode;
        this._originalNextSibling = Sys.Preview.UI.DragDropManager._getInstance().getNextSibling(this._dragVisual);
        var f = Sys.Preview.UI.DragDropManager._getInstance(),
            c = Sys.UI.DomElement.getLocation(a),
            b = this._getFloatContainer();
        Sys.UI.DomElement.setLocation(b, c.x, c.y);
        Sys.Preview.UI.DragDropManager._getInstance().hasParent(this._dragVisual) &&
            this._dragVisual.parentNode.removeChild(this._dragVisual);
        b.appendChild(this._dragVisual);
        var d = f.getScrollOffset(a, true);
        if (e.x !== d.x || e.y !== d.y) {
            var h = f.subtractPoints(e, d),
                g = f.subtractPoints(c, h);
            Sys.UI.DomElement.setLocation(b, g.x, g.y)
        }
        return b
    },
    get_emptyTemplate: function() {
        return this._emptyTemplate
    },
    set_emptyTemplate: function(a) {
        this._emptyTemplate = a
    },
    get_dragDataType: function() {
        return this._dataType
    },
    set_dragDataType: function(a) {
        this._dataType = a
    },
    getDragData: function(a) {
        return a
    },
    get_dragMode: function() {
        return this._dragMode
    },
    set_dragMode: function(a) {
        this._dragMode = a
    },
    dispose: function() {
        this.get_element().__dragDropList = null;
        Sys.Preview.UI.DragDropList.callBaseMethod(this, "dispose")
    },
    onDragStart: function() {
        this._validate()
    },
    onDrag: function() {
    },
    onDragEnd: function(b) {
        if (this._floatContainerInstance) {
            if (this._dragMode === Sys.Preview.UI.DragMode.Copy)
                this._floatContainerInstance.removeChild(this._dragVisual);
            else {
                this._dragVisual.style.opacity = "0.999";
                this._dragVisual.style.filter = "";
                this._dragVisual.style.zIndex = this._originalZIndex ? this._originalZIndex : 0;
                if (b) {
                    this._dragVisual.parentNode.removeChild(this._dragVisual);
                    if (this._originalNextSibling != null)
                        this._originalParent.insertBefore(this._dragVisual, this._originalNextSibling);
                    else
                        this._originalParent.appendChild(this._dragVisual)
                } else
                    this._dragVisual.parentNode === this._floatContainerInstance &&
                        this._dragVisual.parentNode.removeChild(this._dragVisual)
            }
            document.body.removeChild(this._floatContainerInstance)
        } else
            this._dragVisual.parentNode.removeChild(this._dragVisual);
        if (!b && this._data && this._dragMode === Sys.Preview.UI.DragMode.Move) {
            var a = this.getDragData(this._currentContext);
            if (this._data && a)
                if (Sys.Preview.Data.IData.isImplementedBy(this._data))
                    this._data.remove(a);
                else if (this._data instanceof Array)
                    if (typeof this._data.remove === "function")
                        this._data.remove(a);
                    else
                        Array.remove(this._data, a)
        }
        this._isDragging = false;
        this._validate()
    },
    get_direction: function() {
        return this._direction
    },
    set_direction: function(a) {
        this._direction = a
    },
    get_acceptedDataTypes: function() {
        return this._acceptedDataTypes
    },
    set_acceptedDataTypes: function(a) {
        this._acceptedDataTypes = a
    },
    get_dropCueTemplate: function() {
        return this._dropCueTemplate
    },
    set_dropCueTemplate: function(a) {
        this._dropCueTemplate = a
    },
    get_dropTargetElement: function() {
        return this.get_element()
    },
    canDrop: function(c, b) {
        for (var a = 0; a < this._acceptedDataTypes.length; a++)
            if (this._acceptedDataTypes[a] === b)
                return true;
        return false
    },
    drop: function(e, d, a) {
        if (d === "HTML" && e === Sys.Preview.UI.DragMode.Move) {
            dragVisual = a;
            var c = this._findPotentialNextSibling(dragVisual);
            this._setDropCueVisible(false, dragVisual);
            dragVisual.parentNode.removeChild(dragVisual);
            if (c)
                this.get_element().insertBefore(dragVisual, c);
            else
                this.get_element().appendChild(dragVisual)
        } else
            this._setDropCueVisible(false);
        if (this._data && a) {
            var b = a;
            if (Sys.Preview.Data.DataRow
                .isInstanceOfType(a) &&
                Sys.Preview.Data.DataTable.isInstanceOfType(this._data)) {
                var f = a.get_table();
                if (f)
                    b = this._data.createRow(a)
            }
            if (Sys.Preview.Data.IData.isImplementedBy(this._data))
                this._data.add(b);
            else if (this._data instanceof Array)
                if (typeof this._data.add === "function")
                    this._data.add(b);
                else
                    Array.add(this._data, b)
        }
    },
    onDragEnterTarget: function(c, a, b) {
        if (a === "HTML") {
            this._setDropCueVisible(true, b);
            this._validate()
        }
    },
    onDragLeaveTarget: function(b, a) {
        if (a === "HTML") {
            this._setDropCueVisible(false);
            this._validate()
        }
    },
    onDragInTarget: function(c, a, b) {
        a === "HTML" &&
            this._setDropCueVisible(true, b)
    },
    _setDropCueVisible: function(d, b) {
        if (this._dropCueTemplate)
            if (d) {
                if (!this._dropCueTemplateInstance) {
                    var c = document.createDocumentFragment();
                    this._dropCueTemplateInstance = this._dropCueTemplate.createInstance(c).instanceElement
                }
                var a = this._findPotentialNextSibling(b);
                if (!Sys.Preview.UI.DragDropManager._getInstance().hasParent(this._dropCueTemplateInstance)) {
                    if (a)
                        this.get_element().insertBefore(this._dropCueTemplateInstance, a);
                    else
                        this.get_element().appendChild(this._dropCueTemplateInstance);
                    this._dropCueTemplateInstance.style.width = b.offsetWidth + "px";
                    this._dropCueTemplateInstance.style.height = b.offsetHeight + "px"
                } else if (Sys.Preview.UI.DragDropManager._getInstance()
                    .getNextSibling(this._dropCueTemplateInstance) !==
                    a) {
                    this.get_element().removeChild(this._dropCueTemplateInstance);
                    if (a)
                        this.get_element().insertBefore(this._dropCueTemplateInstance, a);
                    else
                        this.get_element().appendChild(this._dropCueTemplateInstance)
                }
            } else
                this._dropCueTemplateInstance &&
                    Sys.Preview.UI.DragDropManager._getInstance().hasParent(this._dropCueTemplateInstance) &&
                    this.get_element().removeChild(this._dropCueTemplateInstance)
    },
    _findPotentialNextSibling: function(e) {
        for (var c = Sys.UI.DomElement.getBounds(e),
            d = this._direction === Sys.Preview.UI.RepeatDirection.Vertical,
            b,
            a = this.get_element().firstChild;
            a !== null;
            a = a.nextSibling)
            if (a.innerHTML && a !== this._dropCueTemplateInstance && a !== this._emptyTemplateInstance) {
                b = Sys.UI.DomElement.getBounds(a);
                if (!d && c.x <= b.x || d && c.y <= b.y)
                    return a
            }
        return null
    },
    _validate: function() {
        for (var b = this._dropCueTemplateInstance == null ||
                     !Sys.Preview.UI.DragDropManager._getInstance().hasParent(this._dropCueTemplateInstance),
            c = 0,
            a = this.get_element().firstChild;
            a !== null;
            a = a.nextSibling)
            if (a.innerHTML && a !== this._emptyTemplateInstance && a !== this._dropCueTemplateInstance)
                c++;
        if (c > 0)
            b = false;
        this._setEmptyTemplateVisible(b)
    },
    _setEmptyTemplateVisible: function(a) {
        if (this._emptyTemplate)
            if (a)
                if (!this._emptyTemplateInstance)
                    this._emptyTemplateInstance = this._emptyTemplate.createInstance(this.get_element())
                        .instanceElement;
                else
                    !Sys.Preview.UI.DragDropManager._getInstance().hasParent(this._emptyTemplateInstance) &&
                        this.get_element().appendChild(this._emptyTemplateInstance);
            else
                this._emptyTemplateInstance &&
                    Sys.Preview.UI.DragDropManager._getInstance().hasParent(this._emptyTemplateInstance) &&
                    this.get_element().removeChild(this._emptyTemplateInstance)
    },
    _getFloatContainer: function() {
        if (!this._floatContainerInstance) {
            this._floatContainerInstance = document.createElement(this.get_element().tagName);
            var a = "0px 0px 0px 0px";
            this._floatContainerInstance.style.position = "absolute";
            this._floatContainerInstance.style.padding = a;
            this._floatContainerInstance.style.margin = a;
            document.body.appendChild(this._floatContainerInstance)
        } else
            !Sys.Preview.UI.DragDropManager._getInstance().hasParent(this._floatContainerInstance) &&
                document.body.appendChild(this._floatContainerInstance);
        return this._floatContainerInstance
    }
};
Sys.Preview.UI.DragDropList.descriptor = {
    properties: [
        { name: "acceptedDataTypes", type: Array }, { name: "data", type: Object },
        { name: "dragDataType", type: String }, { name: "emptyTemplate", type: Sys.Preview.UI.ITemplate },
        { name: "dropCueTemplate", type: Sys.Preview.UI.ITemplate },
        { name: "dropTargetElement", type: Object, readOnly: true },
        { name: "direction", type: Sys.Preview.UI.RepeatDirection }, { name: "dragMode", type: Sys.Preview.UI.DragMode }
    ]
};
Sys.Preview.UI.DragDropList.registerClass("Sys.Preview.UI.DragDropList",
    Sys.UI.Behavior,
    Sys.Preview.UI.IDragSource,
    Sys.Preview.UI.IDropTarget,
    Sys.IDisposable);
Sys.Preview.UI.DataSourceDropTarget = function(a) {
    Sys.Preview.UI.DataSourceDropTarget.initializeBase(this, [a])
};
Sys.Preview.UI.DataSourceDropTarget.prototype = {
    _control: null,
    _acceptedDataTypes: null,
    _append: true,
    _target: null,
    _property: "data",
    get_append: function() {
        return this._append
    },
    set_append: function(a) {
        this._append = a
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
        this._property = a
    },
    get_acceptedDataTypes: function() {
        return this._acceptedDataTypes
    },
    set_acceptedDataTypes: function(a) {
        this._acceptedDataTypes = a
    },
    initialize: function() {
        Sys.Preview.UI.DataSourceDropTarget.callBaseMethod(this, "initialize");
        this._control = Sys.Application.findComponent(this.get_element().id);
        Sys.Preview.UI.DragDropManager.registerDropTarget(this)
    },
    get_dropTargetElement: function() {
        return this.get_element()
    },
    canDrop: function(c, b) {
        for (var a = 0; a < this._acceptedDataTypes.length; a++)
            if (this._acceptedDataTypes[a] === b)
                return true;
        return false
    },
    drop: function(e, f, d) {
        if (d) {
            var a,
                c = this._target ? this._target : this._control;
            if (this._append) {
                a = c["get_" + this._property];
                if (a) {
                    var b = a.call(c);
                    if (b) {
                        if (Sys.Preview.Data.IData.isImplementedBy(b))
                            b.add(d);
                        else if (b instanceof Array)
                            if (typeof b.add === "function")
                                b.add(d);
                            else
                                Array.add(b, d)
                    } else {
                        a = c["set_" + this._property];
                        a &&
                            a.call(c, d)
                    }
                }
            } else {
                a = c["set_" + this._property];
                a &&
                    a.call(c, d)
            }
        }
    },
    onDragEnterTarget: function() {
    },
    onDragLeaveTarget: function() {
    },
    onDragInTarget: function() {
    }
};
Sys.Preview.UI.DataSourceDropTarget.descriptor = {
    properties: [
        { name: "acceptedDataTypes", type: Array }, { name: "append", type: Boolean },
        { name: "dropTargetElement", type: Object, readOnly: true }, { name: "target", type: Object },
        { name: "property", type: String }
    ]
};
Sys.Preview.UI.DataSourceDropTarget.registerClass("Sys.Preview.UI.DataSourceDropTarget",
    Sys.UI.Behavior,
    Sys.Preview.UI.IDropTarget);
Sys.Preview.UI.DraggableListItem = function(e) {
    Sys.Preview.UI.DraggableListItem.initializeBase(this, [e]);
    var d,
        a,
        c,
        b;
    this.get_data = function() {
        if (d == null) {
            var a = this._findDragSource();
            if (a != null && a.get_dragDataType() == "HTML")
                return this.get_element()
        }
        return d
    };
    this.set_data = function(a) {
        d = a
    };
    this.get_handle = function() {
        return a
    };
    this.set_handle = function(b) {
        if (a != null) {
            Sys.UI.DomEvent.removeHandler(a, "mousedown", this._handleMouseDown);
            a.__draggableBehavior = null
        }
        if (b.element)
            b = b.element;
        a = b;
        a.__draggableBehavior = this;
        Sys.UI.DomEvent.addHandler(a, "mousedown", this._handleMouseDown);
        a.__draggableBehavior = this
    };
    this.get_dragVisualTemplate = function() {
        return c
    };
    this.set_dragVisualTemplate = function(a) {
        c = a
    };
    this._handleMouseDown = function(b) {
        window._event = b;
        a.__draggableBehavior._handleMouseDownInternal()
    };
    this._handleMouseDownInternal = function() {
        var b = window._event;
        if (b.button <= 1) {
            var a = this._findDragSource();
            if (a != null) {
                var c = this._createDragVisual();
                a.startDragDrop(this.get_element(), this.get_data(), c);
                b.preventDefault()
            }
        }
    };
    this._createDragVisual = function() {
        var d = window._event;
        if (c != null) {
            if (b == null)
                b = c.createInstance(this.get_element()).instanceElement;
            else
                !Sys.Preview.UI.DragDropManager._getInstance().hasParent(b) &&
                    this.get_element().appendChild(b);
            var a = { x: d.clientX, y: d.clientY };
            a = Sys.Preview.UI.DragDropManager._getInstance()
                .addPoints(a, Sys.Preview.UI.DragDropManager._getInstance().getScrollOffset(document.body, true));
            Sys.UI.DomElement.setLocation(b, a.x, a.y)
        }
        return b
    };
    this._findDragSource = function() {
        var a = this.get_element();
        while (a != null) {
            if (a.__dragDropList != null)
                return a.__dragDropList;
            a = a.parentNode
        }
        return null
    }
};
Sys.Preview.UI.DraggableListItem.descriptor = {
    properties: [
        { name: "data", type: Object }, { name: "handle", isDomElement: true },
        { name: "dragVisualTemplate", type: Sys.Preview.UI.ITemplate }
    ]
};
Sys.Preview.UI.DraggableListItem.registerClass("Sys.Preview.UI.DraggableListItem", Sys.UI.Behavior);
Sys.Preview.UI.FloatingBehavior = function(a) {
    Sys.Preview.UI.FloatingBehavior.initializeBase(this, [a]);
    this._mouseDownHandler = Function.createDelegate(this, this.mouseDownHandler)
};
Sys.Preview.UI.FloatingBehavior.prototype = {
    _handle: null,
    _location: null,
    _dragStartLocation: null,
    _profileProperty: null,
    _profileComponent: null,
    add_move: function(a) {
        this.get_events().addHandler("move", a)
    },
    remove_move: function(a) {
        this.get_events().removeHandler("move", a)
    },
    get_handle: function() {
        return this._handle
    },
    set_handle: function(a) {
        this._handle &&
            Sys.UI.DomEvent.removeHandler(this._handle, "mousedown", this._mouseDownHandler);
        this._handle = a;
        Sys.UI.DomEvent.addHandler(this._handle, "mousedown", this._mouseDownHandler)
    },
    get_profileProperty: function() {
        return this._profileProperty
    },
    set_profileProperty: function(a) {
        this._profileProperty = a
    },
    get_profileComponent: function() {
        return this._profileComponent
    },
    set_profileComponent: function(a) {
        this._profileComponent = a
    },
    get_location: function() {
        return this._location
    },
    set_location: function(c) {
        if (this._location != c) {
            this._location = c;
            if (this.get_isInitialized()) {
                var b = this._location.split(","),
                    a = { x: parseInt(b[0]), y: parseInt(b[1]) };
                Sys.UI.DomElement.setLocation(this.get_element(), a.x, a.y)
            }
            this.raisePropertyChanged("location")
        }
    },
    initialize: function() {
        Sys.Preview.UI.FloatingBehavior.callBaseMethod(this, "initialize");
        Sys.Preview.UI.DragDropManager.registerDropTarget(this);
        var a = this.get_element(),
            d;
        if (this._location) {
            var f = this._location.split(",");
            d = { x: parseInt(f[0]), y: parseInt(f[1]) }
        } else
            d = Sys.UI.DomElement.getLocation(a);
        if (a.offsetWidth)
            a.style.width = a.offsetWidth + "px";
        if (a.offsetHeight)
            a.style.height = a.offsetHeight + "px";
        a.style.position = "absolute";
        Sys.UI.DomElement.setLocation(a, d.x, d.y);
        var g = this.get_profileProperty();
        if (g) {
            var b = new Sys.Preview.Binding;
            b.beginUpdate();
            b.set_target(this);
            b.set_property("location");
            var e = this.get_profileComponent();
            if (!e)
                e = Sys.Preview.Services.Components.Profile.instance;
            b.set_dataContext(e);
            b.set_dataPath(g);
            b.set_direction(Sys.Preview.BindingDirection.InOut);
            var c = new Sys.Preview.InvokeMethodAction;
            c.beginUpdate();
            c.set_eventSource(e);
            c.set_eventName("loadComplete");
            c.set_target(b);
            c.set_method("evaluateIn");
            c.endUpdate();
            b.endUpdate();
            this._binding = b;
            this._action = c
        }
    },
    dispose: function() {
        Sys.Preview.UI.DragDropManager.unregisterDropTarget(this);
        this._handle &&
            this._mouseDownHandler &&
            Sys.UI.DomEvent.removeHandler(this._handle, "mousedown", this._mouseDownHandler);
        this._mouseDownHandler = null;
        Sys.Preview.UI.FloatingBehavior.callBaseMethod(this, "dispose")
    },
    checkCanDrag: function(a) {
        var c = ["input", "button", "select", "textarea", "label"],
            b = a.tagName;
        if (b.toLowerCase() == "a" && a.href != null && a.href.length > 0)
            return false;
        if (Array.indexOf(c, b.toLowerCase()) > -1)
            return false;
        return true
    },
    mouseDownHandler: function(a) {
        window._event = a;
        var b = this.get_element();
        if (this.checkCanDrag(a.target)) {
            this._dragStartLocation = Sys.UI.DomElement.getLocation(b);
            a.preventDefault();
            this.startDragDrop(b)
        }
    },
    get_dragDataType: function() {
        return "_floatingObject"
    },
    getDragData: function() {
        return null
    },
    get_dragMode: function() {
        return Sys.Preview.UI.DragMode.Move
    },
    onDragStart: function() {
    },
    onDrag: function() {
    },
    onDragEnd: function(a) {
        if (!a) {
            var d = this.get_events().getHandler("move");
            if (d) {
                var b = new Sys.CancelEventArgs;
                d(this, b);
                a = b.get_cancel()
            }
        }
        var e = this.get_element();
        if (a)
            Sys.UI.DomElement.setLocation(e, this._dragStartLocation.x, this._dragStartLocation.y);
        else {
            var c = Sys.UI.DomElement.getLocation(e);
            this._location = c.x + "," + c.y;
            this.raisePropertyChanged("location")
        }
    },
    startDragDrop: function(a) {
        Sys.Preview.UI.DragDropManager.startDragDrop(this, a, null)
    },
    get_dropTargetElement: function() {
        return document.body
    },
    canDrop: function(b, a) {
        return a === "_floatingObject"
    },
    drop: function() {
    },
    onDragEnterTarget: function() {
    },
    onDragLeaveTarget: function() {
    },
    onDragInTarget: function() {
    }
};
Sys.Preview.UI.FloatingBehavior.descriptor = {
    properties: [
        { name: "profileProperty", type: String }, { name: "profileComponent", type: Object },
        { name: "dragData", type: Object, readOnly: true }, { name: "dragDataType", type: String, readOnly: true },
        { name: "dragMode", type: Sys.Preview.UI.DragMode, readOnly: true },
        { name: "dropTargetElement", type: Object, readOnly: true }, { name: "handle", isDomElement: true },
        { name: "location", type: String }
    ],
    events: [{ name: "move" }]
};
Sys.Preview.UI.FloatingBehavior.registerClass("Sys.Preview.UI.FloatingBehavior",
    Sys.UI.Behavior,
    Sys.Preview.UI.IDragSource,
    Sys.Preview.UI.IDropTarget,
    Sys.IDisposable);
Sys.UI.Control.overlaps = function(a, b) {
    var g = a.x >= b.x && a.x <= b.x + b.width,
        e = a.x + a.width >= b.x && a.x + a.width <= b.x + b.width,
        c = a.x < b.x && a.x + a.height > b.x + b.height,
        h = a.y >= b.y && a.y <= b.y + b.height,
        f = a.y + a.height >= b.y && a.y + a.height <= b.y + b.height,
        d = a.y < b.y && a.y + a.height > b.y + b.height;
    if ((g || e || c) && (h || f || d))
        return true;
    return false
};
typeof Sys !== "undefined" &&
    Sys.Application.notifyScriptLoaded()