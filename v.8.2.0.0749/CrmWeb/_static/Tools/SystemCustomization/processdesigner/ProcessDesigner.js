var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var SlotIconType = function() {
            function SlotIconType() {}

            SlotIconType.Empty = "empty";
            return SlotIconType
        }();
        Automation.SlotIconType = SlotIconType
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var __extends = this.__extends ||
        function(d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

            function __() { this.constructor = d }

            __.prototype = b.prototype;
            d.prototype = new __
        },
    Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var SlotType = function() {
            function SlotType() {}

            SlotType.TileHolder = 0;
            SlotType.InsertHorizontal = 1;
            SlotType.InsertVertical = 2;
            SlotType.IconHolder = 3;
            return SlotType
        }();
        Automation.SlotType = SlotType;
        var SlotModel = function(_super) {
            __extends(SlotModel, _super);

            function SlotModel(activity, slotType, iconType) {
                _super.call(this);
                this.set("activity", activity);
                this.set("slotType", slotType != undefined ? slotType : SlotType.TileHolder);
                this.set("iconType", iconType != undefined ? iconType : Automation.SlotIconType.Empty)
            }

            SlotModel.prototype.getActivity = function() { return this.get("activity") };
            SlotModel.prototype.setActivity = function(value) { this.set("activity", value) };
            SlotModel.prototype.getSlotType = function() { return this.get("slotType") };
            SlotModel.prototype.setSlotType = function(value) { this.set("slotType", value) };
            SlotModel.prototype.getIconType = function() { return this.get("iconType") };
            SlotModel.prototype.setIconType = function(value) { this.set("iconType", value) };
            return SlotModel
        }(Backbone.Model);
        Automation.SlotModel = SlotModel
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        Automation.ItemModel = Backbone.Model.extend({ defaults: { ActivityTypeID: "", Title: "" } })
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        Automation.ActivityDefinitionModel = Backbone.Model.extend({
                idAttribute: "ActivityID",
                defaults: {
                    ProcessId: null,
                    ParentActivityID: null,
                    ParentBranchID: 0,
                    ActivityTypeID: "empty",
                    Properties: {}
                },
                getDefaultProperties: function() {
                    return { Items: [], UI: { Row: 0, Col: 0, readonlyMode: false }, ActiveItemIndex: 0 }
                },
                initialize: function(options) {
                    this.setProcessId(Automation.CurrentAutomationControl.processId);
                    if ($.isEmptyObject(this.get("Properties"))) {
                        var properties = this.getDefaultProperties();
                        this.set("Properties", properties)
                    }
                },
                sync: function(method, model, options) {
                    var deferred = $.Deferred();
                    deferred.resolve();
                    return deferred.promise()
                },
                setValue: function(object, key, value) {
                    object[key] = value;
                    this.trigger("change")
                },
                getItemCount: function() { return this.get("Properties").Items.length },
                getItem: function(itemId) {
                    var topItem = this.get("Properties").Items[itemId];
                    if (topItem == undefined) topItem = { ItemID: null, ActivityTypeID: Automation.ActivityType.Empty };
                    return new Automation.ItemModel(topItem)
                },
                getActiveItem: function() {
                    var index = this.getActiveItemIndex();
                    return this.getItem(index)
                },
                IsEmpty: function(itemId) {
                    var item;
                    if (typeof itemId === "undefined") item = this.getActiveItem();
                    else item = this.getItem(itemId);
                    if (item.attributes["ItemID"] == null) return true;
                    else return false
                },
                setActiveItemProperties: function(properties) {
                    var index = this.getActiveItemIndex(), topItem = this.get("Properties").Items[index];
                    $.extend(topItem, properties);
                    this.trigger("change")
                },
                setActiveItemPropertiesWithoutRaisingEvent: function(properties) {
                    var index = this.getActiveItemIndex(), topItem = this.get("Properties").Items[index];
                    $.extend(topItem, properties)
                },
                setActiveItemIndex: function(index) { this.get("Properties").ActiveItemIndex = index },
                getActiveItemIndex: function() { return this.get("Properties").ActiveItemIndex },
                getProcessId: function() { return this.get("ProcessId") },
                setProcessId: function(value) { this.set("ProcessId", value) },
                getActivityId: function() { return this.get("ActivityID") },
                setActivityId: function(value) { this.set("ActivityID", value) },
                getParentActivityId: function() { return this.get("ParentActivityID") },
                setParentActivityId: function(value) { this.set("ParentActivityID", value) },
                getParent: function() { return Automation.CurrentAutomationControl.activityTree.getParent(this) },
                getParentBranchId: function() { return this.get("ParentBranchID") },
                setParentBranchId: function(value) { this.set("ParentBranchID", value) },
                getActivities: function() {
                    return Automation.CurrentAutomationControl.activityTree.getChildActivities(this)
                },
                getChildActivitiesSorted: function() {
                    return _.sortBy(this.getActivities(), function(activity) { return activity.getParentBranchId() })
                },
                getActivityTypeId: function() { return this.get("ActivityTypeID") },
                setActivityTypeId: function(activityType) { this.set("ActivityTypeID", activityType) },
                getProperties: function() { return this.get("Properties") },
                setProperties: function(value) { this.set("Properties", value) },
                getRow: function() { return parseInt(this.get("Properties").UI.Row) },
                setRow: function(value) { this.setValue(this.get("Properties").UI, "Row", value) },
                getCol: function() { return parseInt(this.get("Properties").UI.Col) },
                setCol: function(value) { this.setValue(this.get("Properties").UI, "Col", value) },
                getReadonlyMode: function() { return this.get("Properties").UI.readonlyMode == true },
                setReadonlyMode: function(value) { this.setValue(this.get("Properties").UI, "readonlyMode", value) },
                getIsEditMode: function() {
                    var isEditMode = false;
                    switch (this.getActiveItem().get("isEditMode")) {
                    case "False", false:
                        isEditMode = false;
                        break;
                    case "True", true:
                        isEditMode = true;
                        break
                    }
                    return isEditMode
                },
                setIsEditMode: function(value) { this.setActiveItemProperties({ isEditMode: value }) },
                addChildActivity: function(childActivity) {
                    Automation.CurrentAutomationControl.activityTree.addChildActivity(this, childActivity)
                },
                addNewItem: function(activityType) {
                    var tile = { ItemID: null, ActivityTypeID: activityType, Title: "Undefined" };
                    this.getActivityTypeId() == Automation.ActivityType.Empty && this.setActivityTypeId(activityType);
                    this.get("Properties").Items.push(tile);
                    this.setActiveItemIndex(this.getItemCount() - 1)
                },
                deleteItem: function(itemIndex) {
                    var activeItemIndex = this.getActiveItemIndex(), itemCount = this.getItemCount();
                    this.get("Properties").Items.splice(itemIndex, 1);
                    activeItemIndex == itemCount - 1 && this.setActiveItemIndex(activeItemIndex - 1)
                },
                isLeaf: function() {
                    var count = this.getActivities().length;
                    return count > 0 ? false : true
                },
                getNextParentBranchId: function() {
                    var childrenCount = this.getChildActivitiesSorted().length;
                    return childrenCount
                },
                getDefaultLeaf: function() {
                    var childActivities = this.getChildActivitiesSorted();
                    if (childActivities.length > 0) {
                        var firstChild = childActivities[0];
                        if (firstChild.isLeaf()) return firstChild
                    }
                    return undefined
                },
                saveActivityWithSubsequentActivities: function() {
                    var self = this, deferred = $.Deferred();
                    if (self.getActivityTypeId() == Automation.ActivityType.Empty) {
                        Automation.CurrentAutomationControl.activityTree.add(self);
                        deferred.resolveWith(self, [self])
                    } else
                        self.save().done(function() {
                            Automation.CurrentAutomationControl.activityTree.add(self);
                            self.createSubsequentActivity().done(function() { deferred.resolveWith(self, [self]) })
                        });
                    return deferred.promise()
                },
                createSubsequentActivity: function() {
                    var self = this,
                        childPromises = [],
                        deferred = $.Deferred(),
                        activities = Automation.CurrentAutomationControl.settings.getSubsequentActivityGenerator()
                            .createChildActivities(self);
                    $(activities).each(function(index, activity) {
                        if (activity.getActivityTypeId() != Automation.ActivityType.Empty) {
                            activity = activity.convertToConcreteActivity();
                            var promise = activity.saveActivityWithSubsequentActivities();
                            childPromises.push(promise)
                        } else Automation.CurrentAutomationControl.activityTree.add(activity)
                    });
                    $.when.apply(self, childPromises).done(function() { deferred.resolve() });
                    return deferred.promise()
                },
                convertToConcreteActivity: function() {
                    var currentActivity = this,
                        convertedActivity = Automation.CurrentAutomationControl.settings.getActivityDefinitionFactory()
                            .convertToConcreteActivity(currentActivity);
                    if (Automation.CurrentAutomationControl.activityTree.has(currentActivity)) {
                        Automation.CurrentAutomationControl.activityTree.remove(currentActivity);
                        Automation.CurrentAutomationControl.activityTree.add(convertedActivity)
                    }
                    return convertedActivity
                },
                canMove: function() { return true },
                getDependantActivities: function() { return [] },
                getCloneOfActivity: function() {
                    var newActivity = Automation.CurrentAutomationControl.settings.getActivityDefinitionFactory()
                        .createActivity(this.getActivityTypeId());
                    newActivity.setProcessId(this.getProcessId());
                    newActivity.setParentBranchId(this.getParentBranchId());
                    newActivity.setProperties(this.getProperties());
                    return newActivity
                },
                toString: function() {
                    var newline = "\n", content = ">> Activity <<" + newline;
                    content += "ActivityID : " + this.getActivityId() + newline;
                    content += "BranchID : " + this.getParentBranchId() + newline;
                    content += "ActivityTypeID : " + this.getActivityTypeId() + newline;
                    content += "ParentID : " + this.getParentActivityId() + newline;
                    content += "Row :" + this.getRow() + " Col :" + this.getCol() + newline;
                    return content
                }
            },
            {
                supportedEvents: {
                    select: {
                        name: "select",
                        trigger: function(context) {
                            var self = context,
                                eventName = Automation.ActivityDefinitionModel.supportedEvents.select.name;
                            self.trigger(eventName)
                        }
                    },
                    deselect: {
                        name: "deselect",
                        trigger: function(context) {
                            var self = context,
                                eventName = Automation.ActivityDefinitionModel.supportedEvents.deselect
                                    .name;
                            self.trigger(eventName)
                        }
                    },
                    paste: {
                        name: "paste",
                        trigger: function(context) {
                            var self = context,
                                eventName = Automation.ActivityDefinitionModel.supportedEvents.paste.name;
                            self.trigger(eventName)
                        }
                    },
                    dragInProgress: {
                        name: "dragInProgress",
                        trigger: function(context) {
                            var self = context,
                                eventName = Automation.ActivityDefinitionModel.supportedEvents.dragInProgress.name;
                            self.trigger(eventName)
                        }
                    },
                    stopDragInProgress: {
                        name: "stopDragInProgress",
                        trigger: function(context) {
                            var self = context,
                                eventName = Automation.ActivityDefinitionModel.supportedEvents.stopDragInProgress.name;
                            self.trigger(eventName)
                        }
                    }
                }
            })
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var DefaultPropertyPanelView = function(_super) {
            __extends(DefaultPropertyPanelView, _super);

            function DefaultPropertyPanelView(currentModel) { _super.call(this, { model: currentModel }) }

            DefaultPropertyPanelView.prototype.keyDownHandler = function(event) {
                var keyDownHandler = Automation.CurrentAutomationControl.settings
                    .getPropertyPanelActionHandlerProvider().createKeyDownHandler(this.model);
                keyDownHandler.keyDown(this.$el, event)
            };
            DefaultPropertyPanelView.prototype.isIframe = function() { return false };
            DefaultPropertyPanelView.prototype.renderPropertyView = function() {
                var deferred = $.Deferred();
                deferred.Resolve(null);
                return deferred.promise()
            };
            DefaultPropertyPanelView.prototype
                .renderCompleted = function() { this.$el.bind("keydown", this.keyDownHandler) };
            DefaultPropertyPanelView.prototype.dispose = function() { this.$el.unbind("keydown", this.keyDownHandler) };
            return DefaultPropertyPanelView
        }(Backbone.View);
        Automation.DefaultPropertyPanelView = DefaultPropertyPanelView
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        Automation.CurrentAutomationControl = null;
        var AutomationControl = function() {
            function AutomationControl() { this.currentModel = null }

            AutomationControl.prototype.initialize = function() {
                Automation.CurrentAutomationControl = this;
                AutomationControl.instance = this;
                this.globalEventManager = Automation.eventManager
            };
            AutomationControl.prototype.updateCurrentModel = function(newModel) {
                this.currentModel = newModel;
                if (newModel) {
                    var selectedActivities = newModel.getDependantActivities();
                    selectedActivities.push(newModel);
                    this.activityTree.setSelectedActivities(selectedActivities)
                } else this.activityTree.setSelectedActivities([]);
                Automation.eventManager.trigger(Automation.EventNames.ModelUpdated)
            };
            AutomationControl.prototype.setAutoResize = function(canvasContainer, canvas, toolpane, loader) {
                function resize() {
                    var horizontalMargin = 32,
                        minWidth = 200,
                        veticalMargin = 160,
                        minHeight = 500,
                        canvasMargin = 28,
                        widthForCanvas = $(window).width() - toolpane.width() - horizontalMargin,
                        heightForCanvas = $(window).height() - veticalMargin;
                    widthForCanvas = widthForCanvas > minWidth ? widthForCanvas : minWidth;
                    canvasContainer.width(widthForCanvas);
                    loader.width(widthForCanvas);
                    heightForCanvas = heightForCanvas > minHeight ? heightForCanvas : minHeight;
                    toolpane.height(heightForCanvas + canvasMargin);
                    canvas.height(heightForCanvas);
                    loader.height(heightForCanvas)
                }

                resize();
                $(window).resize(resize)
            };
            AutomationControl.prototype.getCurrentModel = function() { return this.currentModel };
            AutomationControl.prototype.setCurrentModel = function(model) { this.currentModel = model };
            return AutomationControl
        }();
        Automation.AutomationControl = AutomationControl
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var DragTouchHelper = function() {
            function DragTouchHelper() {}

            DragTouchHelper.mapTouchEvents = function(draggableElement) {
                draggableElement.unbind("touchstart");
                draggableElement.unbind("touchmove");
                draggableElement.unbind("touchend");
                draggableElement.bind("touchstart", DragTouchHelper.touchEventHandler);
                draggableElement.bind("touchmove", DragTouchHelper.touchEventHandler);
                draggableElement.bind("touchend", DragTouchHelper.touchEventHandler)
            };
            DragTouchHelper.dispatchMouseEvent = function(newEventName, touch, originalEvent) {
                var newEvent = document.createEvent("MouseEvent");
                newEvent.initMouseEvent(newEventName,
                    true,
                    true,
                    window,
                    1,
                    touch.screenX,
                    touch.screenY,
                    touch.clientX,
                    touch.clientY,
                    false,
                    false,
                    false,
                    false,
                    0,
                    null);
                originalEvent.target.dispatchEvent(newEvent)
            };
            DragTouchHelper.longPressTresholdMilliseconds = 1e3;
            DragTouchHelper.moveStarted = false;
            DragTouchHelper.touchEventHandler = function(e, ui) {
                e.preventDefault();
                var touch = e.originalEvent.changedTouches[0], newEventName = "";
                if (e.type === "touchstart") {
                    newEventName = "mousedown";
                    DragTouchHelper.startTime = (new Date).getTime();
                    DragTouchHelper.moveStarted = false;
                    DragTouchHelper.startScreenX = touch.screenX;
                    DragTouchHelper.startScreenY = touch.screenY
                } else if (e.type === "touchmove") {
                    newEventName = "mousemove";
                    if (DragTouchHelper
                        .startScreenX ==
                        touch.screenX &&
                        DragTouchHelper.startScreenY == touch.screenY) return true;
                    DragTouchHelper.moveStarted = true
                } else if (e.type === "touchend") {
                    newEventName = "mouseup";
                    DragTouchHelper.dispatchMouseEvent(newEventName, touch, e);
                    DragTouchHelper.endTime = (new Date).getTime();
                    if (!DragTouchHelper.moveStarted)
                        if (DragTouchHelper.endTime - DragTouchHelper.startTime >
                            DragTouchHelper.longPressTresholdMilliseconds) newEventName = "contextmenu";
                        else newEventName = "click"
                }
                DragTouchHelper.dispatchMouseEvent(newEventName, touch, e);
                return true
            };
            return DragTouchHelper
        }();
        Automation.DragTouchHelper = DragTouchHelper
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var ContextFlyoutItem = function() {
            function ContextFlyoutItem(id, label, clickHandler) {
                this.id = id;
                this.label = label;
                this.clickHandler = clickHandler
            }

            return ContextFlyoutItem
        }();
        Automation.ContextFlyoutItem = ContextFlyoutItem
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var ConnectedComponentsExtractor = function() {
            function ConnectedComponentsExtractor(allConcreteActivities) {
                this.selectedActivitiesDictionary = [];
                this.visitedActivitiesDictionary = [];
                this.allActivities = [];
                this.selectedActivities = [];
                this.allActivities = allConcreteActivities
            }

            ConnectedComponentsExtractor.prototype.getConnectedComponentsFromSelection = function(selectedActivities) {
                var _this = this, connectedComponents = [];
                this.selectedActivities = selectedActivities;
                this.cleanUp();
                $.each(this.selectedActivities,
                    function(index, activity) {
                        if (_this.visitedActivitiesDictionary[activity.getActivityId()] == false) {
                            var component = _this.getConnectedComponentForActivity(activity);
                            connectedComponents.push(component)
                        }
                    });
                return this.sortComponents(connectedComponents)
            };
            ConnectedComponentsExtractor.prototype.sortComponents = function(connectedComponents) {
                for (var count = connectedComponents.length, i = 0; i < count; i++)
                    for (var j = i + 1; j < count; j++) {
                        var rootI = connectedComponents[i].getRoot(),
                            rootJ = connectedComponents[j].getRoot(),
                            distI = Automation.CurrentAutomationControl.activityTree.getDistanceFromRoot(rootI),
                            distJ = Automation.CurrentAutomationControl.activityTree.getDistanceFromRoot(rootJ);
                        if (distI > distJ || distI == distJ && rootI.getParentBranchId() > rootJ.getParentBranchId()) {
                            var aux = connectedComponents[i];
                            connectedComponents[i] = connectedComponents[j];
                            connectedComponents[j] = aux
                        }
                    }
                return connectedComponents
            };
            ConnectedComponentsExtractor.prototype.cleanUp = function() {
                var _this = this;
                $.each(this.allActivities,
                    function(index, activity) {
                        _this.visitedActivitiesDictionary[activity.getActivityId()] = false;
                        _this.selectedActivitiesDictionary[activity.getActivityId()] = false
                    });
                $.each(this.selectedActivities,
                    function(index, activity) { _this.selectedActivitiesDictionary[activity.getActivityId()] = true })
            };
            ConnectedComponentsExtractor.prototype.getConnectedComponentForActivity = function(activity) {
                var root = this.getRootActivityForConnectedComponent(activity),
                    nodesTraversed = [],
                    orphanChildren = [],
                    nodesWithOrphanChildren = [];
                this.DepthFirstSearch(root, nodesTraversed, orphanChildren, nodesWithOrphanChildren);
                var component = new Automation.ConnectedComponent;
                component.setRoot(root);
                component.setNodes(nodesTraversed);
                component.setOrphanChildren(orphanChildren);
                component.setNodesWithOrphanChildren(nodesWithOrphanChildren);
                return component
            };
            ConnectedComponentsExtractor.prototype
                .DepthFirstSearch = function(activity, nodesTraversed, orphanChildren, nodesWithOrphanChildren) {
                    var _this = this;
                    this.visitedActivitiesDictionary[activity.getActivityId()] = true;
                    nodesTraversed.push(activity);
                    var childrenActivities = activity.getChildActivitiesSorted();
                    $.each(childrenActivities,
                        function(index, child) {
                            if (_this
                                .isActivityInSelection(child)
                            ) _this.DepthFirstSearch(child, nodesTraversed, orphanChildren, nodesWithOrphanChildren);
                            else {
                                orphanChildren.push(child);
                                $.inArray(activity, nodesWithOrphanChildren) == -1 &&
                                    nodesWithOrphanChildren.push(activity)
                            }
                        })
                };
            ConnectedComponentsExtractor.prototype.getRootActivityForConnectedComponent = function(activity) {
                var root = activity;
                while (this.isActivityInSelection(root.getParent())) root = root.getParent();
                return root
            };
            ConnectedComponentsExtractor.prototype.isActivityInSelection = function(activity) {
                if (this.selectedActivitiesDictionary[activity.getActivityId()] == true) return true;
                return false
            };
            return ConnectedComponentsExtractor
        }();
        Automation.ConnectedComponentsExtractor = ConnectedComponentsExtractor
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var Point = function() {
            function Point(x, y) {
                this.x = x;
                this.y = y
            }

            Point.prototype.setX = function(value) { this.x = value };
            Point.prototype.getX = function() { return this.x };
            Point.prototype.setY = function(value) { this.y = value };
            Point.prototype.getY = function() { return this.y };
            Point.prototype.toString = function() {
                var newline = "\n", content = ">> Point <<" + newline;
                content += "x :" + this.x + " y :" + this.y + newline;
                return content
            };
            return Point
        }();
        Automation.Point = Point;
        var Rectangle = function() {
            function Rectangle(p1, p2, autoAdjust) {
                autoAdjust = autoAdjust != false ? true : false;
                if (autoAdjust) this.autoAdjustCoordinates(p1, p2);
                else {
                    this.left = p1.getX();
                    this.right = p2.getX();
                    this.top = p1.getY();
                    this.bottom = p2.getY()
                }
                this.height = this.bottom - this.top;
                this.width = this.right - this.left
            }

            Rectangle.prototype.autoAdjustCoordinates = function(p1, p2) {
                this.left = this.min(p1.getX(), p2.getX());
                this.right = this.max(p1.getX(), p2.getX());
                this.top = this.min(p1.getY(), p2.getY());
                this.bottom = this.max(p1.getY(), p2.getY())
            };
            Rectangle.prototype.min = function(a, b) { return a < b ? a : b };
            Rectangle.prototype.max = function(a, b) { return a > b ? a : b };
            Rectangle.prototype.getLeft = function() { return this.left };
            Rectangle.prototype.getRight = function() { return this.right };
            Rectangle.prototype.getTop = function() { return this.top };
            Rectangle.prototype.getBottom = function() { return this.bottom };
            Rectangle.prototype.getHeight = function() { return this.height };
            Rectangle.prototype.getWidth = function() { return this.width };
            Rectangle.prototype.isPointInsideWidth = function(point) {
                var x = point.getX();
                if (x >= this.getLeft() && x <= this.getRight()) return true;
                return false
            };
            Rectangle.prototype.isPointInsideHeight = function(point) {
                var y = point.getY();
                if (y >= this.getTop() && y <= this.getBottom()) return true;
                return false
            };
            Rectangle.prototype.toString = function() {
                var newline = "\n", content = ">>> Rectangle <<<" + newline;
                content += "[(" +
                    this.left +
                    ", " +
                    this.top +
                    "),(" +
                    this.right +
                    ", " +
                    this
                    .bottom +
                    ")]" +
                    newline;
                return content
            };
            return Rectangle
        }();
        Automation.Rectangle = Rectangle
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var Graphics = function() {
            function Graphics() {}

            Graphics.createRectangleDOM = function(rectangle, segmentClass, lineWidth) {
                lineWidth = lineWidth == undefined
                    ? Automation.CurrentAutomationControl.settings.getLayoutProperties().getLineWidth()
                    : lineWidth;
                var leftLine = Graphics.createLineDOM(new Automation.Point(rectangle.getLeft(), rectangle.getTop()),
                        lineWidth,
                        rectangle.getHeight(),
                        segmentClass),
                    rightLine = Graphics.createLineDOM(new Automation.Point(rectangle.getRight(), rectangle.getTop()),
                        lineWidth,
                        rectangle.getHeight(),
                        segmentClass),
                    topLine = Graphics.createLineDOM(new Automation.Point(rectangle.getLeft(), rectangle.getTop()),
                        rectangle.getWidth(),
                        lineWidth,
                        segmentClass),
                    bottomLine = Graphics.createLineDOM(new Automation
                        .Point(rectangle.getLeft(), rectangle.getBottom()),
                        rectangle.getWidth(),
                        lineWidth,
                        segmentClass),
                    segments = [];
                segments.push(leftLine);
                segments.push(rightLine);
                segments.push(topLine);
                segments.push(bottomLine);
                return segments
            };
            Graphics.createLineDOM = function(pointStart, width, height, segmentClass) {
                var line = $('<div class="' + segmentClass + '">');
                line.css("position", "absolute");
                line.css("width", width);
                line.css("height", height);
                line.css(Automation.GetLeftAlignmentAttributeName(), pointStart.getX());
                line.css("top", pointStart.getY());
                return line
            };
            return Graphics
        }();
        Automation.Graphics = Graphics
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var Browser = function() {
            function Browser() {}

            Browser.isFireFox = function() { return /firefox/i.test(window.navigator.userAgent) };
            return Browser
        }();
        Automation.Browser = Browser
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var MouseWheelBehavior = function() {
            function MouseWheelBehavior() {}

            MouseWheelBehavior.calculateMouseWheelScrollOffset = function(e) {
                if (e == null) return 0;
                if (typeof e
                    .wheelDelta !=
                    "undefined" &&
                    e.wheelDelta != null &&
                    e.wheelDelta != 0) return Automation.Browser.isFireFox() ? e.wheelDelta * -40 : e.wheelDelta;
                if (typeof e
                    .detail !=
                    "undefined" &&
                    e.detail != null &&
                    e.detail != 0) return Automation.Browser.isFireFox() ? e.detail * -40 : e.detail;
                if (typeof e
                    .originalEvent !=
                    "undefined" &&
                    e.originalEvent != null) return this.calculateMouseWheelScrollOffset(e.originalEvent);
                return 0
            };
            return MouseWheelBehavior
        }();
        Automation.MouseWheelBehavior = MouseWheelBehavior
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var DefaultLayoutProperties = function() {
            function DefaultLayoutProperties() {
                this.rows = 4;
                this.cols = 6;
                this.height = 60;
                this.width = 230;
                this.rowSpacing = 34;
                this.colSpacing = 44;
                this.lineWidth = 2;
                this.topMargin = 6;
                this.leftMargin = 6;
                this.insertSlotHorizontalOffset = 8;
                this.insertSlotVerticalOffset = 5;
                this.zoomInWidth = 230;
                this.zoomOutWidth = 60;
                this.workspacePositionX = 15;
                this.workspacePositionY = 120
            }

            DefaultLayoutProperties.prototype.getRows = function() { return this.rows };
            DefaultLayoutProperties.prototype.setRows = function(rows) { this.rows = rows };
            DefaultLayoutProperties.prototype.getCols = function() { return this.cols };
            DefaultLayoutProperties.prototype.setCols = function(cols) { this.cols = cols };
            DefaultLayoutProperties.prototype.getHeight = function() { return this.height };
            DefaultLayoutProperties.prototype.setHeight = function(height) { this.height = height };
            DefaultLayoutProperties.prototype.getWidth = function() { return this.width };
            DefaultLayoutProperties.prototype.setWidth = function(width) { this.width = width };
            DefaultLayoutProperties.prototype.getRowSpacing = function() { return this.rowSpacing };
            DefaultLayoutProperties.prototype.setRowSpacing = function(rowSpacing) { this.rowSpacing = rowSpacing };
            DefaultLayoutProperties.prototype.getColSpacing = function() { return this.colSpacing };
            DefaultLayoutProperties.prototype.setColSpacing = function(colSpacing) { this.colSpacing = colSpacing };
            DefaultLayoutProperties.prototype.getLineWidth = function() { return this.lineWidth };
            DefaultLayoutProperties.prototype.setLineWidth = function(lineWidth) { this.lineWidth = lineWidth };
            DefaultLayoutProperties.prototype.getTopMargin = function() { return this.topMargin };
            DefaultLayoutProperties.prototype.setTopMargin = function(topMargin) { this.topMargin = topMargin };
            DefaultLayoutProperties.prototype.getLeftMargin = function() { return this.leftMargin };
            DefaultLayoutProperties.prototype.setLeftMargin = function(leftMargin) { this.leftMargin = leftMargin };
            DefaultLayoutProperties.prototype
                .getInsertSlotHorizontalOffset = function() { return this.insertSlotHorizontalOffset };
            DefaultLayoutProperties.prototype
                .setInsertSlotHorizontalOffset = function(insertSlotHorizontalOffset) {
                    this.insertSlotHorizontalOffset = insertSlotHorizontalOffset
                };
            DefaultLayoutProperties.prototype
                .getInsertSlotVerticalOffset = function() { return this.insertSlotVerticalOffset };
            DefaultLayoutProperties.prototype
                .setInsertSlotVerticalOffset = function(insertSlotVerticalOffset) {
                    this.insertSlotVerticalOffset = insertSlotVerticalOffset
                };
            DefaultLayoutProperties.prototype.getZoomInWidth = function() { return this.zoomInWidth };
            DefaultLayoutProperties.prototype.setZoomInWidth = function(zoomInWidth) { this.zoomInWidth = zoomInWidth };
            DefaultLayoutProperties.prototype.getZoomOutWidth = function() { return this.zoomOutWidth };
            DefaultLayoutProperties.prototype
                .setZoomOutWidth = function(zoomOutWidth) { this.zoomOutWidth = zoomOutWidth };
            DefaultLayoutProperties.prototype.getWorkspacePositionX = function() { return this.workspacePositionX };
            DefaultLayoutProperties.prototype
                .setWorkspacePositionX = function(workspacePositionX) { this.workspacePositionX = workspacePositionX };
            DefaultLayoutProperties.prototype.getWorkspacePositionY = function() { return this.workspacePositionY };
            DefaultLayoutProperties.prototype
                .setWorkspacePositionY = function(workspacePositionY) { this.workspacePositionY = workspacePositionY };
            return DefaultLayoutProperties
        }();
        Automation.DefaultLayoutProperties = DefaultLayoutProperties
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var PositionCalculator = function() {
            function PositionCalculator(layoutProperties) {
                this.computeTop = function(row) { return row * (this.height + this.rowSpacing) + this.topMargin };
                this.computeLeft = function(col) { return col * (this.width + this.colSpacing) + this.leftMargin };
                this.height = layoutProperties.getHeight();
                this.width = layoutProperties.getWidth();
                this.rowSpacing = layoutProperties.getRowSpacing();
                this.colSpacing = layoutProperties.getColSpacing();
                this.topMargin = layoutProperties.getTopMargin();
                this.leftMargin = layoutProperties.getLeftMargin()
            }

            return PositionCalculator
        }();
        Automation.PositionCalculator = PositionCalculator
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var ActivityDropController = function() {
            function ActivityDropController() {}

            ActivityDropController.prototype.dropLibraryElement = function(slot, libraryElement) {
                var activity = this.createEmptyActivity(libraryElement.get("ActivityTypeID")),
                    component = new Automation.ConnectedComponent(activity),
                    dropHandler = Automation.CurrentAutomationControl.settings.getSlotHandlerProvider()
                        .createDropHandler(slot);
                return dropHandler.drop(component)
            };
            ActivityDropController.prototype.dropMultipleComponents = function(slot, components) {
                var multiDropHandler = Automation.CurrentAutomationControl.settings.getSlotHandlerProvider()
                    .createMultipleDropHandler(slot);
                return multiDropHandler.drop(components)
            };
            ActivityDropController.prototype
                .createEmptyActivity = function(activityType) {
                    return Automation.CurrentAutomationControl.settings.getActivityDefinitionFactory()
                        .createActivity(activityType)
                };
            return ActivityDropController
        }();
        Automation.ActivityDropController = ActivityDropController
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var TileFactoryView = function(_super) {
            __extends(TileFactoryView, _super);

            function TileFactoryView() { _super.apply(this, arguments) }

            TileFactoryView.prototype.renderTile = function(itemId, zoom) {
                if (typeof zoom === "undefined") zoom = false;
                var model = this.model,
                    tileInformation = Automation.CurrentAutomationControl.settings.getTileInformationFactory()
                        .getTileInformationForActivityModel(model, itemId),
                    properties = tileInformation.getProperties();
                Automation.CurrentAutomationControl.settings.getDecoratorFactory().getTileDecorator(model)
                    .decorateTileProperties(properties);
                var activeItemAttributes = tileInformation.getDynamicAttributes(),
                    itemType = activeItemAttributes.ActivityTypeID;
                this.$el.html(TileFactoryView.getImageTileViewHtml(itemType, model.IsEmpty(), activeItemAttributes));
                if (!zoom)
                    if (model.IsEmpty(itemId)) {
                        var emptyTileDescriptionTemplate = _.template(properties.emptyTileTemplate);
                        this.$el.append(emptyTileDescriptionTemplate(properties))
                    } else {
                        var tileDescriptionTemplate = _.template(properties.template);
                        this.$el.append(tileDescriptionTemplate(activeItemAttributes))
                    }
                this.$el.addClass(properties.tileclass);
                this.renderStatus(model, activeItemAttributes);
                return this
            };
            TileFactoryView.prototype.renderStatus = function(model, activeItemAttributes) {
                var statusView = Automation.CurrentAutomationControl.settings.getTileInformationFactory()
                    .GetTileStatusView(model, activeItemAttributes);
                this.$el.append(statusView.render().$el)
            };
            TileFactoryView.getImageTileViewHtml = function(activityType, isEmpty, optionalAttributes) {
                var tileImageTemplate,
                    tileInformation = Automation.CurrentAutomationControl.settings.getTileInformationFactory()
                        .GetTileInformationForActivityType(activityType),
                    properties = tileInformation.getProperties();
                if (typeof isEmpty === "undefined" || isEmpty
                ) tileImageTemplate = _.template(properties.emptyTileImageTemplate);
                else tileImageTemplate = _.template(properties.tileImageTemplate);
                var templateAttributes = $.extend(properties, optionalAttributes);
                return tileImageTemplate(templateAttributes)
            };
            return TileFactoryView
        }(Backbone.View);
        Automation.TileFactoryView = TileFactoryView
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        Automation.HelperElementView = Backbone.View.extend({
                className: "helper",
                initialize: function() {
                    this.$el.data(Automation.HelperElementView.modelDataKey, this.model);
                    this.$el.addClass(this.className)
                },
                render: function() {
                    var type = this.model.get("ActivityTypeID");
                    this.$el.html(Automation.TileFactoryView.getImageTileViewHtml(type));
                    var tileProperties = Automation.CurrentAutomationControl.settings.getTileInformationFactory()
                            .GetTileInformationForActivityType(type).getProperties(),
                        activityClass = tileProperties.tileclass;
                    this.$el.addClass(activityClass);
                    return this
                }
            },
            { modelDataKey: "libraryElement" })
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var SlotBase = function(_super) {
            __extends(SlotBase, _super);

            function SlotBase() { _super.apply(this, arguments) }

            SlotBase.prototype.initializeSlot = function() {
                !this.model.getActivity().getReadonlyMode() && this.makeDroppable()
            };
            SlotBase.prototype.render = function() {};
            SlotBase.prototype.makeDroppable = function() {
                var self = this;
                this.$el.droppable({
                    hoverClass: Automation.CssClass.HoverOverDroppable,
                    accept: "." + SlotBase.acceptLibraryElement + ", ." + SlotBase.className,
                    drop: function(event, ui) {
                        var droppedElement = ui.helper.data(Automation.HelperElementView.modelDataKey);
                        if (droppedElement
                            .get("ActivityID") ==
                            undefined) SlotBase.supportedEvents.dropLibraryElement.trigger(self, self, droppedElement);
                        else SlotBase.supportedEvents.dropActivity.trigger(self, self, droppedElement)
                    }
                })
            };
            SlotBase.className = "slot";
            SlotBase.acceptLibraryElement = "graphicElement";
            SlotBase.supportedEvents = {
                dropLibraryElement: {
                    name: "dropLibraryElement",
                    trigger: function(context, slot, dropedLibraryElement) {
                        var self = context, eventName = SlotBase.supportedEvents.dropLibraryElement.name;
                        self.trigger(eventName, slot, dropedLibraryElement)
                    }
                },
                dropActivity: {
                    name: "dropActivity",
                    trigger: function(context, slot, dropActivity) {
                        var self = context, eventName = SlotBase.supportedEvents.dropActivity.name;
                        self.trigger(eventName, slot, dropActivity)
                    }
                }
            };
            return SlotBase
        }(Backbone.View);
        Automation.SlotBase = SlotBase
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var ContainerEdgeScroller = function() {
            function ContainerEdgeScroller(container, scrollOptions) {
                if (typeof scrollOptions === "undefined") scrollOptions = {};
                this.isMovingHorizontal = false;
                this.isMovingVertical = false;
                this.horizontalInterval = 0;
                this.verticalInterval = 0;
                this.container = container;
                this.scrollOptions = $.extend({ step: 10, timer: 25, scrollTriggerMargin: 60 }, scrollOptions)
            }

            ContainerEdgeScroller.prototype.scrollHorizontal = function(step) {
                var self = this;
                self.isMovingHorizontal = true;
                if (!self.horizontalInterval)
                    self.horizontalInterval = setInterval(function() {
                            self.container.scrollLeft(self.container.scrollLeft() + step)
                        },
                        self.scrollOptions.timer)
            };
            ContainerEdgeScroller.prototype.scrollVertical = function(step) {
                var self = this;
                self.isMovingVertical = true;
                if (!self.verticalInterval)
                    self.verticalInterval = setInterval(function() {
                            self.container.scrollTop(self.container.scrollTop() + step)
                        },
                        self.scrollOptions.timer)
            };
            ContainerEdgeScroller.prototype.clearIntervals = function() {
                if (!this.isMovingHorizontal) {
                    clearInterval(this.horizontalInterval);
                    this.horizontalInterval = false
                }
                if (!this.isMovingVertical) {
                    clearInterval(this.verticalInterval);
                    this.verticalInterval = false
                }
            };
            ContainerEdgeScroller.prototype.initialize = function() {
                this.containerOffset = {};
                this.containerOffset.top = this.container.offset().top;
                this.containerOffset.left = this.container.offset().left;
                this.containerOffset.right = this.containerOffset.left + this.container.width();
                this.containerOffset.bottom = this.containerOffset.top + this.container.height()
            };
            ContainerEdgeScroller.prototype.scrollIfCursorOnEdge = function(cursorPageX, cursorPageY) {
                this.isMovingHorizontal = false;
                this.isMovingVertical = false;
                if (Math
                    .abs(cursorPageX - this.containerOffset.left) <=
                    this.scrollOptions.scrollTriggerMargin) this.scrollHorizontal(this.scrollOptions.step * -1);
                else
                    Math.abs(cursorPageX - this.containerOffset.right) <= this.scrollOptions.scrollTriggerMargin &&
                        this.scrollHorizontal(this.scrollOptions.step);
                if (Math
                    .abs(cursorPageY - this.containerOffset.top) <=
                    this.scrollOptions.scrollTriggerMargin) this.scrollVertical(this.scrollOptions.step * -1);
                else
                    Math.abs(cursorPageY - this.containerOffset.bottom) <= this.scrollOptions.scrollTriggerMargin &&
                        this.scrollVertical(this.scrollOptions.step);
                this.clearIntervals()
            };
            ContainerEdgeScroller.prototype.stopScrolling = function() {
                clearInterval(this.horizontalInterval);
                clearInterval(this.verticalInterval);
                this.horizontalInterval = false;
                this.verticalInterval = false
            };
            return ContainerEdgeScroller
        }();
        Automation.ContainerEdgeScroller = ContainerEdgeScroller
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        Automation.TileView = Backbone.View.extend({
                initialize: function() { this.$el.addClass(Automation.TileView.className) },
                render: function(itemId, zoom) {
                    if (typeof zoom === "undefined") zoom = false;
                    var tileFactory = new Automation.TileFactoryView({ model: this.model });
                    this.$el.html(tileFactory.renderTile(itemId, zoom).el);
                    return this
                }
            },
            { className: "tile" })
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var SlotTileHolderView = function(_super) {
            __extends(SlotTileHolderView, _super);

            function SlotTileHolderView() {
                _super.apply(this, arguments);
                this.selectedClassName = Automation.CssClass.Selected;
                this.dragInProgressClass = Automation.CssClass.DragInProgress
            }

            SlotTileHolderView.prototype.initializeSlot = function() {
                this.setupEvents();
                if (!this.model.getActivity().getReadonlyMode()) {
                    this.makeDroppable();
                    this.makeDraggable()
                }
            };
            SlotTileHolderView.prototype.setupEvents = function() {
                var self = this, activity = this.model.getActivity();
                activity.on("sync", this.render, this);
                this.$el.on("click", function(event) { self.tileClickedHandler(event) });
                this.$el.on("dblclick", function(event) { self.tileDblClickedHandler(event) });
                this.$el.on("keydown", function(event) { self.tileKeyDownHandler(event) });
                this.$el.on("focus", function(event) { self.tileFocusHandler(event) });
                this.$el.on("blur", function(event) { self.tileBlurHandler(event) });
                this.$el.on("mousedown", function(event) { event.stopPropagation() });
                this.$el.on("contextmenu", function(event) { self.tileContextMenuClickHandler(event) });
                Automation.eventManager.on("modelUpdated",
                    function() { self.modelUpdateHandler(Automation.CurrentAutomationControl.getCurrentModel()) },
                    this);
                this.listenTo(activity,
                    Automation.ActivityDefinitionModel.supportedEvents.select.name,
                    self.selectHandler);
                this.listenTo(activity,
                    Automation.ActivityDefinitionModel.supportedEvents.deselect.name,
                    self.deSelectHandler);
                this.listenTo(activity,
                    Automation.ActivityDefinitionModel.supportedEvents.dragInProgress.name,
                    self.dragInProgressHandler);
                this.listenTo(activity,
                    Automation.ActivityDefinitionModel.supportedEvents.stopDragInProgress.name,
                    self.stopDragInProgressHandler)
            };
            SlotTileHolderView.prototype.clean = function() { this.$el.children().remove() };
            SlotTileHolderView.prototype.render = function() {
                this.clean();
                Automation.CurrentAutomationControl.getCurrentModel() != null &&
                    Automation.CurrentAutomationControl.getCurrentModel().cid == this.model.getActivity().cid &&
                    this.$el.addClass(this.selectedClassName);
                var tile = new Automation.TileView({ model: this.model.getActivity() });
                this.$el.append(tile.render(this.model.getActivity().getActiveItemIndex(), Automation.zoomOut).el);
                this.model.getActivity().getItemCount() > 1 && this.$el.addClass(Automation.CssClass.MultipleItems);
                this.$el.addClass(Automation.CssClass.Slot);
                var calc = new Automation
                        .PositionCalculator(Automation.CurrentAutomationControl.settings.getLayoutProperties()),
                    top = calc.computeTop(this.model.getActivity().getRow()),
                    left = calc.computeLeft(this.model.getActivity().getCol());
                this.$el.css("top", top + "px");
                this.$el.css(Automation.GetLeftAlignmentAttributeName(), left + "px");
                this.$el.css("position", "");
                this.$el.attr("tabindex", "0");
                return this
            };
            SlotTileHolderView.prototype.modelUpdateHandler = function(currentModel) {
                var self = this, isEditMode = self.model.getActivity().getIsEditMode();
                if (!isEditMode) {
                    self.deSelectHandler();
                    this.model.getActivity() == currentModel && !currentModel.getIsEditMode() && self.selectHandler()
                }
            };
            SlotTileHolderView.prototype.selectHandler = function() { this.$el.addClass(this.selectedClassName) };
            SlotTileHolderView.prototype.deSelectHandler = function() { this.$el.removeClass(this.selectedClassName) };
            SlotTileHolderView.prototype.pasteHandler = function() {
                SlotTileHolderView.supportedEvents.paste.trigger(this)
            };
            SlotTileHolderView.prototype
                .dragInProgressHandler = function() { this.$el.addClass(this.dragInProgressClass) };
            SlotTileHolderView.prototype
                .stopDragInProgressHandler = function() { this.$el.removeClass(this.dragInProgressClass) };
            SlotTileHolderView.prototype.tileClickedHandler = function(event) {
                var clickHandler = Automation.CurrentAutomationControl.settings.getSlotHandlerProvider()
                    .createClickHandler(this.model);
                clickHandler.click(this.$el);
                event.stopPropagation()
            };
            SlotTileHolderView.prototype.tileDblClickedHandler = function(event) {
                var dblClickHandler = Automation.CurrentAutomationControl.settings.getSlotHandlerProvider()
                    .createDblClickHandler(this.model);
                dblClickHandler.dblclick(this.$el);
                event.stopPropagation()
            };
            SlotTileHolderView.prototype.tileKeyDownHandler = function(event) {
                var keyDownHandler = Automation.CurrentAutomationControl.settings.getSlotHandlerProvider()
                    .createKeyDownHandler(this.model);
                keyDownHandler.keyDown(this.$el, event)
            };
            SlotTileHolderView.prototype.tileFocusHandler = function(event) {
                var focusHandler = Automation.CurrentAutomationControl.settings.getSlotHandlerProvider()
                    .createFocusHandler(this.model);
                focusHandler.focus(this.$el)
            };
            SlotTileHolderView.prototype.tileBlurHandler = function(event) {
                var blurHandler = Automation.CurrentAutomationControl.settings.getSlotHandlerProvider()
                    .createBlurHandler(this.model);
                blurHandler.blur(this.$el)
            };
            SlotTileHolderView.prototype.makeDraggable = function() {
                var self = this, container, containerEdgeScroller;
                this.$el.draggable({
                    cursorAt: {
                        top: SlotTileHolderView.defaultDragHelperCursorOffset,
                        left: SlotTileHolderView.defaultDragHelperCursorOffset
                    },
                    refreshPositions: true,
                    helper: function() {
                        var helperLibraryElement = new Automation
                            .HelperElementView({ model: self.model.getActivity(), el: $("<div>") });
                        return helperLibraryElement.render().$el
                    },
                    start: function(e, ui) {
                        self.updateSelectedActivities();
                        $.each(Automation.CurrentAutomationControl.activityTree.getSelectedActivities(),
                            function(index, activity) {
                                Automation.ActivityDefinitionModel.supportedEvents.dragInProgress.trigger(activity)
                            });
                        container = self.$el.parent();
                        containerEdgeScroller = new Automation.ContainerEdgeScroller(container);
                        containerEdgeScroller.initialize()
                    },
                    drag: function(e, ui) {
                        if (!self.model.getActivity().canMove()) {
                            containerEdgeScroller.stopScrolling();
                            return false
                        }
                        var pageX = e.pageX || e.originalEvent.pageX, pageY = e.pageY || e.originalEvent.pageY;
                        ui.position.left = pageX +
                            container.scrollLeft() -
                            container.offset().left -
                            $(this).draggable("option", "cursorAt").left;
                        ui.position.top = pageY +
                            container.scrollTop() -
                            container.offset().top -
                            $(this).draggable("option", "cursorAt").top;
                        containerEdgeScroller.scrollIfCursorOnEdge(pageX, pageY);
                        return true
                    },
                    stop: function(e, ui) {
                        containerEdgeScroller.stopScrolling();
                        $.each(Automation.CurrentAutomationControl.activityTree.getSelectedActivities(),
                            function(index, activity) {
                                Automation.ActivityDefinitionModel.supportedEvents.stopDragInProgress.trigger(activity)
                            })
                    }
                })
            };
            SlotTileHolderView.prototype.updateSelectedActivities = function() {
                var self = this;
                if (!Automation.CurrentAutomationControl.activityTree.isInSelection(self.model.getActivity()) ||
                    Automation.CurrentAutomationControl.activityTree.getSelectedActivities().length <= 1) {
                    var clickHandler = Automation.CurrentAutomationControl.settings.getSlotHandlerProvider()
                        .createClickHandler(self.model);
                    clickHandler.click(self.$el)
                }
            };
            SlotTileHolderView.prototype.tileContextMenuClickHandler = function(event) {
                this.updateSelectedActivities();
                var contextClickHandler = Automation.CurrentAutomationControl.settings.getSlotHandlerProvider()
                        .createContextHandler(this.model),
                    contextMenu = Automation.CurrentAutomationControl.settings.getSlotContextMenu();
                if (contextClickHandler != null && contextMenu != null) {
                    contextClickHandler.click(event);
                    event.preventDefault()
                }
                event.stopPropagation()
            };
            SlotTileHolderView.defaultDragHelperCursorOffset = 30;
            SlotTileHolderView.supportedEvents = {
                dropLibraryElement: Automation.SlotBase.supportedEvents.dropLibraryElement,
                dropActivity: Automation.SlotBase.supportedEvents.dropActivity,
                paste: {
                    name: "paste",
                    trigger: function(context) {
                        var self = context, eventName = SlotTileHolderView.supportedEvents.paste.name;
                        self.trigger(eventName)
                    }
                }
            };
            return SlotTileHolderView
        }(Automation.SlotBase);
        Automation.SlotTileHolderView = SlotTileHolderView
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var CanvasView = function(_super) {
            __extends(CanvasView, _super);

            function CanvasView(canvasContainer) {
                _super.call(this, { el: canvasContainer });
                this.$el.addClass(CanvasView.className)
            }

            CanvasView.prototype.initializeCanvas = function() {
                this.setupEvents();
                this.fetchProcess();
                var self = this;
                this.$el.on("onmousewheel mousewheel DOMMouseScroll",
                    function(ev) {
                        var event = ev || window.event;
                        this.scrollLeft -= Automation.MouseWheelBehavior.calculateMouseWheelScrollOffset(event);
                        event.preventDefault()
                    })
            };
            CanvasView.prototype.fetchProcess = function() {
                var self = this,
                    promise = Automation.CurrentAutomationControl.activityTree
                        .fetch(Automation.CurrentAutomationControl.processId);
                promise.done(function() { self.onFetchProcess() })
            };
            CanvasView.prototype.onFetchProcess = function() { this.render() };
            CanvasView.prototype.setupEvents = function() {
                this.$el.on("mousedown", function(event) { Automation.updateCurrentModel(null) });
                Automation.eventManager.on("canvasrefresh", this.refreshWorkflowTree, this)
            };
            CanvasView.prototype.renderSlots = function(activities) {
                var self = this;
                $.each(activities,
                    function(index, activity) {
                        if (activity.getActivityTypeId() == Automation.ActivityType.Root) return;
                        var slotsList = Automation.CurrentAutomationControl.settings.getSlotGeneratorProvider()
                            .generateSlotsForActivity(activity);
                        $.each(slotsList,
                            function(slotIndex, slot) {
                                self.$el.append(slot.render().$el);
                                if (slot.model.getSlotType() != Automation.SlotType.IconHolder) {
                                    self.listenTo(slot,
                                        Automation.SlotTileHolderView.supportedEvents.paste.name,
                                        self.refreshWorkflowTree);
                                    self.listenTo(slot,
                                        Automation.SlotBase.supportedEvents.dropLibraryElement.name,
                                        self.dropLibraryElementHandler);
                                    self.listenTo(slot,
                                        Automation.SlotBase.supportedEvents.dropActivity.name,
                                        self.dropActivityHandler)
                                }
                            })
                    })
            };
            CanvasView.prototype.render = function() {
                this.scrollLeft = this.el.scrollLeft;
                this.scrollTop = this.el.scrollTop;
                this.clean();
                this.renderSlots(Automation.CurrentAutomationControl.activityTree.getProcessDefinition());
                this.drawTileConnectors();
                this.$el.scrollLeft(this.scrollLeft);
                this.$el.scrollTop(this.scrollTop);
                var self = this;
                $(document).one("ajaxStop",
                    function() {
                        self.$el.data("loadState", "completed");
                        self.$el.trigger("loadCompleted")
                    });
                return this
            };
            CanvasView.prototype.clean = function() { this.$el.children().remove() };
            CanvasView.prototype.scrollToTile = function(tileSelector) {
                var childItem = this.$el.find(tileSelector);
                if (childItem.length == 0) return;
                var slotLeftPosition = parseInt(childItem.css("left").replace("px", "")),
                    slotTopPosition = parseInt(childItem.css("top").replace("px", "")),
                    canvasWidth = this.$el.width(),
                    canvasHeight = this.$el.height(),
                    horizontalOffset = 400,
                    verticleOffset = 80;
                slotLeftPosition > canvasWidth &&
                    this.$el
                    .scrollLeft(slotLeftPosition - canvasWidth + horizontalOffset);
                slotTopPosition > canvasHeight && this.$el.scrollTop(slotTopPosition - canvasHeight + verticleOffset)
            };
            CanvasView.prototype.dropLibraryElementHandler = function(slot, libraryElement) {
                var _this = this,
                    activityDropController = Automation.CurrentAutomationControl.settings.getActivityDropController();
                activityDropController.dropLibraryElement(slot.model, libraryElement).done(function(activity) {
                    Automation.updateCurrentModel(activity);
                    _this.updateProcess()
                })
            };
            CanvasView.prototype.dropActivityHandler = function(slot) {
                var _this = this,
                    extractor = new Automation
                        .ConnectedComponentsExtractor(Automation.CurrentAutomationControl.activityTree
                            .getAllConcreteActivities()),
                    connectedComponents = extractor
                        .getConnectedComponentsFromSelection(Automation.CurrentAutomationControl.activityTree
                            .getSelectedActivities()),
                    activityDropController = Automation.CurrentAutomationControl.settings.getActivityDropController();
                activityDropController.dropMultipleComponents(slot.model, connectedComponents).done(function(activity) {
                    Automation.updateCurrentModel(activity);
                    _this.updateProcess()
                })
            };
            CanvasView.prototype.updateProcess = function() { this.refreshWorkflowTree() };
            CanvasView.prototype.refreshWorkflowTree = function() {
                var _this = this;
                Automation.CurrentAutomationControl.activityTree.createSubsequentActivitiesForLeafs().done(function() {
                    Automation.CurrentAutomationControl.activityTree.UpdatePositions();
                    _this.render()
                })
            };
            CanvasView.prototype.drawTileConnectors = function() {
                var self = this,
                    processDefinition = Automation.CurrentAutomationControl.activityTree.getProcessDefinition(),
                    activityDictionary = [];
                $.each(processDefinition,
                    function(index, activity) { activityDictionary[activity.getActivityId()] = activity });
                $.each(processDefinition,
                    function(index, activity) {
                        var parentId = activity.getParentActivityId();
                        if (parentId != null) {
                            var parentActivity = activityDictionary[parentId];
                            parentActivity.getActivityTypeId() != Automation.ActivityType.Root &&
                                self.drawConnector(parentActivity, activity)
                        }
                    })
            };
            CanvasView.prototype.drawConnector = function(parentActivity, childActivity) {
                var _this = this,
                    connectorSegments = Automation.CurrentAutomationControl.settings
                        .getActivityPositionCalculatorFactory().getCalculator(parentActivity.getActivityTypeId())
                        .getLineConnectors(parentActivity, childActivity);
                $.each(connectorSegments, function(index, segment) { _this.$el.append(segment) })
            };
            CanvasView.className = "canvas";
            return CanvasView
        }(Backbone.View);
        Automation.CanvasView = CanvasView
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var ScrollableDragDrop = function() {
            function ScrollableDragDrop() {}

            ScrollableDragDrop.prototype.makeDraggable = function(element, container, draggableOptions, scrollOptions) {
                if (typeof scrollOptions === "undefined") scrollOptions = {};
                var containerEdgeScroller = new Automation.ContainerEdgeScroller(container, scrollOptions),
                    extendedDraggableOptions = $.extend({},
                        draggableOptions,
                        {
                            start: function() {
                                draggableOptions.start && draggableOptions.start.apply(this, arguments);
                                containerEdgeScroller.initialize()
                            },
                            drag: function(e) {
                                draggableOptions.drag && draggableOptions.drag.apply(this, arguments);
                                containerEdgeScroller.scrollIfCursorOnEdge(e.pageX, e.pageY)
                            },
                            stop: function() {
                                draggableOptions.stop && draggableOptions.stop.apply(this, arguments);
                                containerEdgeScroller.stopScrolling()
                            }
                        });
                element.draggable(extendedDraggableOptions);
                Automation.DragTouchHelper.mapTouchEvents(element)
            };
            return ScrollableDragDrop
        }();
        Automation.ScrollableDragDrop = ScrollableDragDrop
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        Automation.LibraryElementModel = Backbone.Model.extend({ defaults: { Properties: { Title: "Undefined" } } })
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var LibraryElementView = function(_super) {
            __extends(LibraryElementView, _super);

            function LibraryElementView(libraryElementModel, libraryElementContainer, canvasContainer) {
                this._canvasContainer = canvasContainer;
                this.className = "graphicElement";
                _super.call(this, { model: libraryElementModel, el: libraryElementContainer })
            }

            LibraryElementView.prototype.initialize = function() {
                this.libraryElementTemplate = _
                    .template("<span class='lib-iconContainer'><span class ='lib-img-content lib-img-cont-float'><img src = '<%- Image %>' /></span ></span><span class ='lib-rowLabel ellipsis' title = '<%= Title %>'><%= Title %></span > ");
                this.makeDraggable();
                this.$el.addClass(this.className)
            };
            LibraryElementView.prototype.makeDraggable = function() {
                var self = this,
                    draggableOptions = {
                        cursor: "move",
                        refreshPositions: true,
                        helper: function() {
                            var helperLibraryElement = new Automation
                                .HelperElementView({ model: self.model, el: $("<div>") });
                            return helperLibraryElement.render().$el
                        }
                    },
                    dragDrop = new Automation.ScrollableDragDrop;
                dragDrop.makeDraggable(this.$el, this._canvasContainer, draggableOptions)
            };
            LibraryElementView.prototype.render = function() {
                this.$el.append(this.libraryElementTemplate(this.model.toJSON()));
                var type = this.model.get("ActivityTypeID"),
                    tileProperties = Automation.CurrentAutomationControl.settings.getTileInformationFactory()
                        .GetTileInformationForActivityType(type).getProperties(),
                    activityClass = tileProperties.tileclass;
                this.$el.addClass(activityClass);
                return this
            };
            return LibraryElementView
        }(Backbone.View);
        Automation.LibraryElementView = LibraryElementView
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var LibraryModel = function(_super) {
            __extends(LibraryModel, _super);

            function LibraryModel() {
                _super.call(this);
                this.set("LibraryNodes",
                    Automation.CurrentAutomationControl.settings.getLibraryNodesFactory().CreateLibraryNodes())
            }

            return LibraryModel
        }(Backbone.Model);
        Automation.LibraryModel = LibraryModel
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var LibraryCollectionView = function(_super) {
            __extends(LibraryCollectionView, _super);

            function LibraryCollectionView(libraryModel, libraryContainer, canvasContainer) {
                this._canvasContainer = canvasContainer;
                _super.call(this,
                {
                    model: libraryModel,
                    el: libraryContainer,
                    events: {
                        "click div.hitarea":
                            "toggleLibraryGroup"
                    }
                })
            }

            LibraryCollectionView.prototype.render = function() {
                this.$el.html("");
                var nodes = this.model.get("LibraryNodes"), mainUl = $('<ul class="list"></ul>');
                if (nodes == null) return this;
                nodes.length > 0 && this.$el.append(mainUl);
                for (var i = 0; i < nodes.length; i++) {
                    var object = nodes[i],
                        nodename = object.nodename,
                        groupNode = $("<li class='listitem'><div class='hitarea'></div><span class='folder ellipsis'>" +
                            nodename +
                            "</span></li>");
                    $(mainUl).append(groupNode);
                    if (object.subnodes.length == 0) continue;
                    var subUl = $('<ul class="listitems"></ul>');
                    $(groupNode).append(subUl);
                    for (var j = 0; j < object.subnodes.length; j++) {
                        var subnode = object.subnodes[j],
                            typeId = "libraryElement" + subnode.activitytypeid,
                            wrapperLi = $("<li class='subitem' id='" + typeId + "'></li>");
                        $(subUl).append(wrapperLi);
                        var elem1 = new Automation
                            .LibraryElementView(new Automation
                                .LibraryElementModel({
                                    Title: subnode.Title,
                                    Image: subnode.image,
                                    ActivityTypeID: subnode.activitytypeid
                                }),
                                $(wrapperLi),
                                this._canvasContainer);
                        elem1.render()
                    }
                }
                return this
            };
            LibraryCollectionView.prototype.toggleLibraryGroup = function(event) {
                var elementToToggle = $(event.currentTarget).parent().find("ul"), arrowButton = $(event.currentTarget);
                if (elementToToggle.length == 0 || $(arrowButton).length == 0) return;
                if (elementToToggle.css("display") == "block" || elementToToggle.css("display") == "") {
                    elementToToggle.css("display", "none");
                    $(arrowButton).css("backgroundPosition", "0px 0px")
                } else {
                    elementToToggle.css("display", "block");
                    $(arrowButton).css("backgroundPosition", "0px -11px")
                }
            };
            return LibraryCollectionView
        }(Backbone.View);
        Automation.LibraryCollectionView = LibraryCollectionView
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var PropertyView = function(_super) {
            __extends(PropertyView, _super);

            function PropertyView(propertyContainer) {
                _super.call(this, { el: propertyContainer });
                this.currentPropertyView = null
            }

            PropertyView.prototype.initialize = function() {
                var self = this;
                self._visible = true;
                self.propertyViewCurrentModel = "";
                this.$el.parent().tabs({
                    beforeActivate: function(event, ui) {
                        if (self
                            .propertyViewCurrentModel !=
                            "")
                            ui.newPanel.attr("id") !== self.$el.attr("id") &&
                                self.propertyViewCurrentModel.getIsEditMode() &&
                                !self.shouldPropagate() &&
                                event.preventDefault()
                    },
                    activate: function(event, ui) {
                        if (ui.newPanel.attr("id") == self.$el.attr("id")) {
                            self._visible = true;
                            self.refreshView()
                        } else self._visible = false
                    }
                });
                Automation.eventManager.on("modelUpdated", this.refreshView, this);
                this.renderPlaceHolder()
            };
            PropertyView.prototype.refreshView = function() {
                if (!this._visible) return;
                if (Automation.CurrentAutomationControl.getCurrentModel() == null) {
                    if (this.propertyViewCurrentModel === null || this.propertyViewCurrentModel === "") return;
                    if (this.propertyViewCurrentModel.getIsEditMode() && !this.shouldPropagate()) return;
                    else {
                        this.renderPlaceHolder();
                        this.propertyViewCurrentModel.setIsEditMode(false);
                        this.propertyViewCurrentModel = "";
                        return
                    }
                }
                if (this.propertyViewCurrentModel !== null &&
                    this.propertyViewCurrentModel !== "" &&
                    this.propertyViewCurrentModel.getIsEditMode() &&
                    !this.shouldPropagate()) {
                    Automation.CurrentAutomationControl.setCurrentModel(this.propertyViewCurrentModel);
                    return
                }
                if (this.currentPropertyView != null) {
                    this.currentPropertyView.dispose();
                    this.currentPropertyView = null
                }
                this.propertyViewCurrentModel = Automation.CurrentAutomationControl.getCurrentModel();
                this.renderPropertyView(Automation.CurrentAutomationControl.getCurrentModel())
            };
            PropertyView.prototype.renderPropertyView = function(currentModel) {
                var self = this;
                this.$el.html("");
                var propertyView = Automation.CurrentAutomationControl.settings.getPropertyViewFactory()
                    .createProperty(Automation.CurrentAutomationControl.getCurrentModel());
                propertyView.renderPropertyView().done(function(propertyElement) {
                    propertyView.$el = $(propertyElement).appendTo(self.$el);
                    propertyView.$el.attr("tabindex", "0");
                    var propertyPanelLabel = Automation.CurrentAutomationControl.settings
                        .getLabelKeyValuePhraseCollection().GetLabelPhrase()["[PROPERTY PANEL ARIA LABEL]"];
                    propertyView.$el.attr("aria-label", propertyPanelLabel);
                    propertyView.el = propertyView.$el[0];
                    propertyView.renderCompleted();
                    if (propertyView.isIframe()) {
                        var frame = this.$el.find("iframe");
                        $(frame).load(function() {
                            self.$el.data("loadState", "completed");
                            self.$el.trigger("loadCompleted")
                        })
                    }
                    self.currentPropertyView = propertyView
                })
            };
            PropertyView.prototype.renderPlaceHolder = function() { this.renderPropertyView(null) };
            PropertyView.prototype.shouldPropagate = function() {
                var returnPropogattion = true,
                    shouldPropagate = confirm(Automation.CurrentAutomationControl.settings
                        .getLabelKeyValuePhraseCollection()["[CONFIRMATION DIALOGUE BEFORE SAVE]"]);
                if (!shouldPropagate) returnPropogattion = false;
                else this.propertyViewCurrentModel.setIsEditMode(false);
                return returnPropogattion
            };
            return PropertyView
        }(Backbone.View);
        Automation.PropertyView = PropertyView
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        Automation.CommonTileInformation = {
            defaultEmptyTitleTemplate:
                '<span class="emptyTileTitle ellipsis" title="<%= emptyTitleText %>"><%= emptyTitleText %><span>',
            defaultTileImageTemplate:
                '<span class="tileImageWrapper" title="<%= Title %>"><img class="tileImage" src="<%- image %>"></img></span>',
            defaultEmptyTileImageTemplate:
                '<span class="tileImageWrapper" title="<%= emptyTitleText %>"><img class="tileImage" src="<%- image %>"></img></span>'
        }
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var LibraryElementNode = function() {
            function LibraryElementNode() {}

            return LibraryElementNode
        }();
        Automation.LibraryElementNode = LibraryElementNode
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var LibraryGroupNode = function() {
            function LibraryGroupNode() {}

            return LibraryGroupNode
        }();
        Automation.LibraryGroupNode = LibraryGroupNode
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var MultiselectCommandButton = function() {
            function MultiselectCommandButton(workspaceModeController, buttonElement) {
                var _this = this;
                this.multiselectEnabled = false;
                this.workspaceModeController = null;
                this.buttonElement = null;
                this.workspaceModeController = workspaceModeController;
                this.buttonElement = buttonElement;
                this.workspaceModeController.registerMultiselectButton(this);
                this.buttonElement.click(function() { _this.execute() })
            }

            MultiselectCommandButton.prototype.execute = function() {
                this.multiselectEnabled = !this.multiselectEnabled;
                if (this.multiselectEnabled) {
                    this.workspaceModeController.enableMultiselectView();
                    this.enable()
                } else {
                    this.workspaceModeController.disableMultiselectView();
                    this.disable()
                }
            };
            MultiselectCommandButton.prototype.enable = function() { this.buttonElement.addClass("selected") };
            MultiselectCommandButton.prototype.disable = function() { this.buttonElement.removeClass("selected") };
            return MultiselectCommandButton
        }();
        Automation.MultiselectCommandButton = MultiselectCommandButton
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var ZoomViewCommandButton = function() {
            function ZoomViewCommandButton(workspaceModeController, buttonElement) {
                var _this = this;
                this.zoomIn = true;
                this.workspaceModeController = null;
                this.buttonElement = null;
                this.workspaceModeController = workspaceModeController;
                this.buttonElement = buttonElement;
                this.workspaceModeController.registerZoomViewButton(this);
                this.buttonElement.click(function() { _this.execute() });
                this.activateZoomIn()
            }

            ZoomViewCommandButton.prototype.execute = function() {
                this.zoomIn = !this.zoomIn;
                Mscrm.Automation.zoomOut = !this.zoomIn;
                if (this.zoomIn == true) {
                    this.workspaceModeController.zoomIn();
                    this.activateZoomIn()
                } else {
                    this.workspaceModeController.zoomOut();
                    this.activateZoomOut()
                }
            };
            ZoomViewCommandButton.prototype
                .activateZoomIn = function() { this.buttonElement.removeClass("zoomInImage").addClass("zoomOutImage") };
            ZoomViewCommandButton.prototype
                .activateZoomOut = function() {
                    this.buttonElement.removeClass("zoomOutImage")
                        .addClass("zoomInImage")
                };
            return ZoomViewCommandButton
        }();
        Automation.ZoomViewCommandButton = ZoomViewCommandButton
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var PanViewMode = function() {
            function PanViewMode(workspace) {
                this.workspace = null;
                this.pointMouseDown = new Automation.Point(0, 0);
                this.pointMouseMove = new Automation.Point(0, 0);
                this.mouseDown = false;
                this.scrollLeft = 0;
                this.scrollTop = 0;
                this.workspace = workspace
            }

            PanViewMode.prototype.enableMode = function() {
                this.workspace.$el.addClass("canvasGrab");
                $(this.workspace.el).bind("mousedown", { context: this }, this.mouseDownHandler);
                $(window).bind("mousemove", { context: this }, this.mouseMoveHandler)
                    .bind("mouseup", { context: this }, this.mouseUpHandler)
            };
            PanViewMode.prototype.mouseDownHandler = function(event) {
                var self = event.data.context;
                self.mouseDown = true;
                self.pointMouseDown = new Automation.Point(event.clientX, event.clientY);
                self.scrollLeft = self.workspace.el.scrollLeft;
                self.scrollTop = self.workspace.el.scrollTop;
                self.workspace.$el.removeClass("canvasGrab").addClass("canvasGrabbing");
                return false
            };
            PanViewMode.prototype.mouseMoveHandler = function(event) {
                var self = event.data.context;
                if (self.mouseDown == true) {
                    self.workspace.el.scrollLeft = self.scrollLeft + self.pointMouseDown.getX() - event.clientX;
                    self.workspace.el.scrollTop = self.scrollTop + self.pointMouseDown.getY() - event.clientY
                }
            };
            PanViewMode.prototype.mouseUpHandler = function(event) {
                var self = event.data.context;
                self.mouseDown = false;
                self.workspace.$el.removeClass("canvasGrabbing").addClass("canvasGrab")
            };
            PanViewMode.prototype.disableMode = function() {
                this.workspace.$el.removeClass("canvasGrab");
                this.workspace.$el.unbind("mousedown", this.mouseDownHandler);
                $(window).unbind("mouseup", this.mouseUpHandler);
                $(window).unbind("mousemove", this.mouseMoveHandler)
            };
            return PanViewMode
        }();
        Automation.PanViewMode = PanViewMode
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var ZoomViewMode = function() {
            function ZoomViewMode(workspace) {
                this.workspace = null;
                this.workspace = workspace
            }

            ZoomViewMode.prototype.ZoomIn = function() {
                this.workspace.$el.removeClass("zoomOut");
                var layoutProperties = Automation.CurrentAutomationControl.settings.getLayoutProperties();
                layoutProperties.setWidth(layoutProperties.getZoomInWidth());
                this.refreshWorkspace()
            };
            ZoomViewMode.prototype.ZoomOut = function() {
                this.workspace.$el.addClass("zoomOut");
                var layoutProperties = Automation.CurrentAutomationControl.settings.getLayoutProperties();
                layoutProperties.setWidth(layoutProperties.getZoomOutWidth());
                this.refreshWorkspace()
            };
            ZoomViewMode.prototype.refreshWorkspace = function() {
                this.workspace.render();
                this.workspace.scrollToTile(".slot.selected")
            };
            return ZoomViewMode
        }();
        Automation.ZoomViewMode = ZoomViewMode
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var MultiSelectMode = function() {
            function MultiSelectMode(workspace) {
                this.selectLineClass = Automation.CssClass.SelectLine;
                this.pointMouseDown = new Automation.Point(0, 0);
                this.pointMouseMove = new Automation.Point(0, 0);
                this.mouseDown = false;
                this.deltaX = 0;
                this.deltaY = 0;
                this.workspace = workspace;
                this.containerEdgeScroller = new Automation.ContainerEdgeScroller(workspace.$el);
                var layoutProperties = Automation.CurrentAutomationControl.settings.getLayoutProperties();
                this.deltaX = layoutProperties.getWorkspacePositionX();
                this.deltaY = layoutProperties.getWorkspacePositionY()
            }

            MultiSelectMode.prototype.enableMode = function() {
                $(this.workspace.el).bind("mousedown", { context: this }, this.mouseDownHandler);
                $(window).bind("mousemove", { context: this }, this.mouseMoveHandler)
                    .bind("mouseup", { context: this }, this.mouseUpHandler)
            };
            MultiSelectMode.prototype.disableMode = function() {
                this.workspace.$el.unbind("mousedown", this.mouseDownHandler);
                $(window).unbind("mouseup", this.mouseUpHandler);
                $(window).unbind("mousemove", this.mouseMoveHandler)
            };
            MultiSelectMode.prototype.mouseDownHandler = function(event) {
                var self = event.data.context;
                self.containerEdgeScroller.initialize();
                self.pointMouseDown.setX(event.clientX - self.deltaX + self.workspace.el.scrollLeft);
                self.pointMouseDown.setY(event.clientY - self.deltaY + self.workspace.el.scrollTop);
                self.mouseDown = true
            };
            MultiSelectMode.prototype.mouseMoveHandler = function(event) {
                var self = event.data.context;
                if (!self.mouseDown) return;
                self.containerEdgeScroller.scrollIfCursorOnEdge(event.pageX, event.pageY);
                self.pointMouseMove.setX(event.clientX - self.deltaX + self.workspace.el.scrollLeft);
                self.pointMouseMove.setY(event.clientY - self.deltaY + self.workspace.el.scrollTop);
                $("." + self.selectLineClass).remove();
                var rectangle = new Automation.Rectangle(self.pointMouseDown, self.pointMouseMove);
                self.drawRectangle(rectangle);
                var latticePointRectangle = self.computeRowColumnSelect(rectangle);
                self.highlightSelections(latticePointRectangle)
            };
            MultiSelectMode.prototype.highlightSelections = function(latticeCoordinatesRectangle) {
                var deselected = this.getActivitiesDependingOnSelection(latticeCoordinatesRectangle, false),
                    selections = this.getActivitiesDependingOnSelection(latticeCoordinatesRectangle, true);
                Automation.CurrentAutomationControl.activityTree.setSelectedActivities(selections);
                $.each(deselected,
                    function(index, activity) {
                        Automation.ActivityDefinitionModel.supportedEvents.deselect.trigger(activity)
                    });
                $.each(selections,
                    function(index, selection) {
                        Automation.ActivityDefinitionModel.supportedEvents.select.trigger(selection)
                    });
                selections.length == 1 && Automation.updateCurrentModel(selections[0])
            };
            MultiSelectMode.prototype.mouseUpHandler = function(event) {
                var self = event.data.context;
                self.containerEdgeScroller.stopScrolling();
                self.mouseDown = false;
                $("." + self.selectLineClass).remove()
            };
            MultiSelectMode.prototype.computeRowColumnSelect = function(rectangle) {
                var layoutProperties = Automation.CurrentAutomationControl.settings.getLayoutProperties(),
                    cellWidth = layoutProperties.getColSpacing() + layoutProperties.getWidth(),
                    cellHeight = layoutProperties.getRowSpacing() + layoutProperties.getHeight(),
                    leftCol = Math.floor(rectangle.getLeft() / cellWidth),
                    rightCol = Math.floor(rectangle.getRight() / cellWidth),
                    topRow = Math.floor(rectangle.getTop() / cellHeight),
                    bottomRow = Math.floor(rectangle.getBottom() / cellHeight),
                    slotRectangleLeftTop = this.getPixelPositionsForSlotBoundaries(leftCol, topRow),
                    pointLeftTop = new Automation.Point(rectangle.getLeft(), rectangle.getTop());
                if (!slotRectangleLeftTop.isPointInsideWidth(pointLeftTop)) leftCol++;
                if (!slotRectangleLeftTop.isPointInsideHeight(pointLeftTop)) topRow++;
                var latticePointCoordinateRectangle = new Automation
                    .Rectangle(new Automation.Point(leftCol, topRow), new Automation.Point(rightCol, bottomRow), false);
                return latticePointCoordinateRectangle
            };
            MultiSelectMode.prototype.getPixelPositionsForSlotBoundaries = function(column, row) {
                var layoutProperties = Automation.CurrentAutomationControl.settings.getLayoutProperties(),
                    slotWidth = layoutProperties.getWidth(),
                    slotHeight = layoutProperties.getHeight(),
                    SpacingWidth = layoutProperties.getColSpacing(),
                    SpacingHeight = layoutProperties.getRowSpacing(),
                    leftCol = column * (slotWidth + SpacingWidth),
                    topRow = row * (slotHeight + SpacingHeight),
                    rightCol = leftCol + slotWidth,
                    bottomRow = topRow + slotHeight;
                return new Automation.Rectangle(new Automation.Point(leftCol, topRow),
                    new Automation.Point(rightCol, bottomRow))
            };
            MultiSelectMode.prototype.drawRectangle = function(rectangle) {
                var self = this,
                    lineWidth = 0,
                    segments = Automation.Graphics.createRectangleDOM(rectangle, this.selectLineClass, lineWidth);
                $.each(segments, function(index, segment) { self.workspace.$el.append(segment) })
            };
            MultiSelectMode.prototype.isActivityInsideRectangle = function(activity, latticePointRectangle) {
                var row = activity.getRow(), col = activity.getCol(), point = new Automation.Point(col, row);
                if (latticePointRectangle
                    .isPointInsideWidth(point) &&
                    latticePointRectangle.isPointInsideHeight(point)) return true;
                return false
            };
            MultiSelectMode.prototype
                .getActivitiesDependingOnSelection = function(latticePointRectangle, includedInRectangle) {
                    var _this = this, outside = 0, inside = 1, selectedActivities = [], activityDictionary = [];
                    $(Automation.CurrentAutomationControl.activityTree.getAllConcreteActivities())
                        .each(function(index, currentActivity) {
                            activityDictionary[currentActivity.getActivityId()] = outside
                        });
                    $(Automation.CurrentAutomationControl.activityTree.getAllConcreteActivities())
                        .each(function(indexActivity, currentActivity) {
                            if (_this.isActivityInsideRectangle(currentActivity, latticePointRectangle)) {
                                activityDictionary[currentActivity.getActivityId()] = inside;
                                var dependentActivityList = currentActivity.getDependantActivities();
                                $(dependentActivityList)
                                    .each(function(indexDependentActivity, dependentActivity) {
                                        activityDictionary[dependentActivity.getActivityId()] = inside
                                    })
                            }
                        });
                    var toSelect = includedInRectangle ? inside : outside;
                    $(Automation.CurrentAutomationControl.activityTree.getAllConcreteActivities())
                        .each(function(index, currentActivity) {
                            activityDictionary[currentActivity.getActivityId()] == toSelect &&
                                selectedActivities.push(currentActivity)
                        });
                    return selectedActivities
                };
            return MultiSelectMode
        }();
        Automation.MultiSelectMode = MultiSelectMode
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var DefaultWorkspaceModeController = function() {
            function DefaultWorkspaceModeController(workspace) {
                this.workspace = null;
                this.zoomViewMode = null;
                this.panViewMode = null;
                this.multiSelectMode = null;
                this.multiselectButton = null;
                this.zoomViewButton = null;
                this.workspace = workspace;
                this.multiSelectMode = new Automation.MultiSelectMode(workspace);
                this.panViewMode = new Automation.PanViewMode(this.workspace);
                this.zoomViewMode = new Automation.ZoomViewMode(this.workspace);
                this.panViewMode.enableMode()
            }

            DefaultWorkspaceModeController.prototype
                .registerMultiselectButton = function(button) { this.multiselectButton = button };
            DefaultWorkspaceModeController.prototype
                .registerZoomViewButton = function(button) { this.zoomViewButton = button };
            DefaultWorkspaceModeController.prototype.enableMultiselectView = function() {
                this.multiSelectMode.enableMode();
                this.panViewMode.disableMode()
            };
            DefaultWorkspaceModeController.prototype.disableMultiselectView = function() {
                this.panViewMode.enableMode();
                this.multiSelectMode.disableMode()
            };
            DefaultWorkspaceModeController.prototype.zoomIn = function() { this.zoomViewMode.ZoomIn() };
            DefaultWorkspaceModeController.prototype.zoomOut = function() { this.zoomViewMode.ZoomOut() };
            return DefaultWorkspaceModeController
        }();
        Automation.DefaultWorkspaceModeController = DefaultWorkspaceModeController
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var ActivityStatus = function() {
            function ActivityStatus(code, statusMessageId) {
                this.code = code;
                this.statusMessageId = statusMessageId
            }

            return ActivityStatus
        }();
        Automation.ActivityStatus = ActivityStatus
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        Automation.zoomOut = false;
        Automation.eventManager = {};
        _.extend(Automation.eventManager, Backbone.Events);

        function updateCurrentModel(newModel) { Automation.CurrentAutomationControl.updateCurrentModel(newModel) }

        Automation.updateCurrentModel = updateCurrentModel;

        function GetLeftAlignmentAttributeName() {
            return Automation.CurrentAutomationControl.settings.getRenderRTL() ? "right" : "left"
        }

        Automation.GetLeftAlignmentAttributeName = GetLeftAlignmentAttributeName;
        var ActivityType = function() {
            function ActivityType() {}

            ActivityType.Empty = "empty";
            ActivityType.Root = "root";
            return ActivityType
        }();
        Automation.ActivityType = ActivityType;
        var EventNames = function() {
            function EventNames() {}

            EventNames.ModelUpdated = "modelUpdated";
            return EventNames
        }();
        Automation.EventNames = EventNames;
        var CssClass = function() {
            function CssClass() {}

            CssClass.Helper = "helper";
            CssClass.SelectLine = "selectLine";
            CssClass.HoverOverDroppable = "hoverOverDroppable";
            CssClass.ModalPopup = "modalPopup";
            CssClass.Loader = "loader";
            CssClass.Spinner = "spinner";
            CssClass.Slot = "slot";
            CssClass.Selected = "selected";
            CssClass.DragInProgress = "dragInProgress";
            CssClass.MultipleItems = "multipleItems";
            CssClass.TileItemsMenu = "tileItemsMenu";
            CssClass.ContextMenu = "contextmenu";
            return CssClass
        }();
        Automation.CssClass = CssClass
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var ConnectedComponent = function() {
            function ConnectedComponent(activity) {
                if (activity) {
                    this.root = activity;
                    this.nodes = [activity];
                    this.nodesWithOrphanChildren = [activity];
                    this.orphanChildren = activity.getChildActivitiesSorted()
                }
            }

            ConnectedComponent.prototype.getRoot = function() { return this.root };
            ConnectedComponent.prototype.setRoot = function(value) { this.root = value };
            ConnectedComponent.prototype.getNodes = function() { return this.nodes };
            ConnectedComponent.prototype.setNodes = function(value) { this.nodes = value };
            ConnectedComponent.prototype.getOrphanChildren = function() { return this.orphanChildren };
            ConnectedComponent.prototype.setOrphanChildren = function(value) { this.orphanChildren = value };
            ConnectedComponent.prototype
                .getNodesWithOrphanChildren = function() { return this.nodesWithOrphanChildren };
            ConnectedComponent.prototype
                .setNodesWithOrphanChildren = function(value) { this.nodesWithOrphanChildren = value };
            ConnectedComponent.prototype.toString = function(digitsToDisplay) {
                digitsToDisplay = digitsToDisplay ? digitsToDisplay : 4;
                var newline = "\n", content = ">> Conex Component <<" + newline;
                content += "root:" + this.root.getActivityId().substring(0, digitsToDisplay) + newline;
                content += "distance:" +
                    Automation.CurrentAutomationControl.activityTree.getDistanceFromRoot(this.root) +
                    newline;
                var nodesStr = "";
                $.each(this.nodes,
                    function(index, node) {
                        nodesStr += "[" +
                            node.getActivityId()
                            .substring(0, digitsToDisplay) +
                            "]"
                    });
                content += "nodes :" + nodesStr + newline;
                var nodesWithOrphanChildrenStr = "";
                $.each(this.nodesWithOrphanChildren,
                    function(index, node) {
                        nodesWithOrphanChildrenStr += "[" + node.getActivityId().substring(0, digitsToDisplay) + "..]"
                    });
                content += "Nodes with Orphan Children :" + nodesWithOrphanChildrenStr + newline;
                var orphanChildrenStr = "";
                $.each(this.orphanChildren,
                    function(index, child) {
                        var id = child.getActivityId() ? child.getActivityId() : "undefined";
                        orphanChildrenStr += "[" + id.substring(0, digitsToDisplay) + "..]"
                    });
                content += "orphan Children :" + orphanChildrenStr + newline;
                return content
            };
            return ConnectedComponent
        }();
        Automation.ConnectedComponent = ConnectedComponent
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        Automation.ActivityDefinitionCollection = Backbone.Collection.extend({
            model: Automation.ActivityDefinitionModel,
            parse: function(response) {},
            sync: function(method, collection, options) {},
            updatePositions: function() {
                Automation.DefaultActivityPositionCalculator.maxRow = 0;
                var root = this.getProcessDefinitionRoot(), startColumn = root.getCol();
                Automation.CurrentAutomationControl.settings.getActivityPositionCalculatorFactory()
                    .getCalculator(root.getActivityTypeId())
                    .calculate(root, Automation.DefaultActivityPositionCalculator.maxRow, startColumn)
            },
            getProcessDefinition: function() { return this.models },
            getProcessDefinitionRoot: function() {
                var root = null;
                this.forEach(function(activity) { if (activity.getParentActivityId() == null) root = activity });
                return root
            },
            getLeafs: function() {
                var leafs = [];
                this.forEach(function(activity) { activity.isLeaf() && leafs.push(activity) });
                return leafs
            }
        })
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var ActivityTree = function() {
            function ActivityTree() {
                this.activityCollection = null;
                this.selectedActivities = [];
                this.copiedActivities = []
            }

            ActivityTree.prototype
                .setActivityCollection = function(activities) { this.activityCollection = activities };
            ActivityTree.prototype
                .setSelectedActivities = function(activities) { this.selectedActivities = activities };
            ActivityTree.prototype.getSelectedActivities = function() { return this.selectedActivities };
            ActivityTree.prototype.setCopiedActivities = function(activities) { this.copiedActivities = activities };
            ActivityTree.prototype.getCopiedActivities = function() { return this.copiedActivities };
            ActivityTree.prototype.getParent = function(activity) {
                var parentId = activity.getParentActivityId();
                if (parentId == null) return null;
                var parent = null;
                $.each(this.activityCollection.models,
                    function(index, currentActivity) {
                        if (currentActivity.getActivityId() == parentId) {
                            parent = currentActivity;
                            return false
                        }
                    });
                return parent
            };
            ActivityTree.prototype.getChildActivities = function(activity) {
                var childActivities = [];
                if (activity.getActivityId() == undefined) return childActivities;
                $(this.activityCollection.models).each(function(index, currentActivity) {
                    currentActivity.getParentActivityId() == activity.getActivityId() &&
                        childActivities.push(currentActivity)
                });
                return childActivities
            };
            ActivityTree.prototype.addChildActivity = function(parentActivity, childActivity) {
                var nextParentBranchId = this.getChildActivities(parentActivity).length;
                childActivity.setParentActivityId(parentActivity.getActivityId());
                childActivity.setParentBranchId(nextParentBranchId.toString());
                this.activityCollection.add(childActivity)
            };
            ActivityTree.prototype
                .insertChildActivityComponentAtIndex =
                function(parentActivity, childActivityComponent, parentBranchId) {
                    var self = this,
                        childActivities = parentActivity.getChildActivitiesSorted(),
                        childActivity = childActivityComponent.getRoot(),
                        oldParent = childActivity.getParent(),
                        deferred = $.Deferred(),
                        promiseList = [];
                    childActivity.setParentActivityId(parentActivity.getActivityId());
                    childActivity.setParentBranchId(parentBranchId);
                    $.each(childActivities,
                        function(index, activity) {
                            var branchId = activity.getParentBranchId();
                            if (branchId >= parentBranchId) {
                                activity.setParentBranchId(branchId + 1);
                                var promise = activity.save();
                                promiseList.push(promise)
                            }
                        });
                    childActivity.saveActivityWithSubsequentActivities().done(function(activity) {
                        var savedChildActivity = activity;
                        oldParent != null && promiseList.push(oldParent.createSubsequentActivity());
                        $.when.apply(self, promiseList)
                            .done(function() { deferred.resolveWith(savedChildActivity, [savedChildActivity]) })
                    });
                    return deferred.promise()
                };
            ActivityTree.prototype.UpdatePositions = function() { this.activityCollection.updatePositions() };
            ActivityTree.prototype.getProcessDefinition = function() {
                return this.activityCollection.getProcessDefinition()
            };
            ActivityTree.prototype
                .getProcessDefinitionRoot = function() { return this.activityCollection.getProcessDefinitionRoot() };
            ActivityTree.prototype.getLeafs = function() { return this.activityCollection.getLeafs() };
            ActivityTree.prototype.getActivities = function() { return this.activityCollection.models };
            ActivityTree.prototype.getAllConcreteActivities = function() {
                var list = [];
                $.each(this.activityCollection.models,
                    function(index, activity) {
                        activity.getActivityTypeId() != Automation.ActivityType.Empty && list.push(activity)
                    });
                return list
            };
            ActivityTree.prototype.insertActivityComponentAfter = function(parentActivity, insertActivityComponent) {
                var self = this,
                    childActivities = parentActivity.getChildActivitiesSorted(),
                    deferred = $.Deferred(),
                    promiseList = [],
                    insertActivity = insertActivityComponent.getRoot();
                insertActivity.setParentActivityId(parentActivity.getActivityId());
                var promise = insertActivity.save().done(function() {
                    $.each(childActivities,
                        function(index, activity) {
                            activity.setParentActivityId(insertActivity.getActivityId());
                            if (activity.getActivityTypeId() != Automation.ActivityType.Empty) {
                                promise = activity.save();
                                promiseList.push(promise)
                            }
                        });
                    self.add(insertActivity);
                    $.when.apply(self, promiseList).done(function() {
                        deferred.resolveWith(insertActivity, [insertActivity])
                    })
                });
                promiseList.push(promise);
                return deferred.promise()
            };
            ActivityTree.prototype.insertActivityComponentBefore = function(activity, insertComponent) {
                var self = this, deferred = $.Deferred(), root = insertComponent.getRoot();
                root.setParentActivityId(activity.getParent().getActivityId());
                root.setParentBranchId(activity.getParentBranchId());
                root.save().done(function() {
                    self.add(root);
                    var defaultConnectionActivity = insertComponent.getNodesWithOrphanChildren()[0];
                    activity.setParentActivityId(defaultConnectionActivity.getActivityId());
                    activity.setParentBranchId(0);
                    activity.save().done(function() { deferred.resolveWith(root, [root]) })
                });
                return deferred.promise()
            };
            ActivityTree.prototype.cutActivity = function(activityToCut) {
                var component = new Automation.ConnectedComponent(activityToCut);
                return this.cutConnectedComponent(component)
            };
            ActivityTree.prototype.cutConnectedComponent = function(component) {
                var self = this,
                    deferred = $.Deferred(),
                    promiseList = [],
                    activityToCut = component.getRoot(),
                    branchIndex = activityToCut.getParentBranchId(),
                    oldParent = activityToCut.getParent();
                if (oldParent == null) {
                    deferred.resolve();
                    return deferred.promise()
                }
                var oldParentActivityId = oldParent.getActivityId(),
                    oldParentChildren = oldParent.getChildActivitiesSorted(),
                    activityToCutBranchId = activityToCut.getParentBranchId();
                $.each(component.getOrphanChildren(),
                    function(index, child) {
                        child.getActivityTypeId() == Automation.ActivityType.Empty && self.remove(child)
                    });
                var activitiesToMove = this.getActivitiesToMoveOnCut(component),
                    numberOfActivitiesToBeInserted = activitiesToMove.length;
                $.each(oldParentChildren,
                    function(index, activity) {
                        var branchId = activity.getParentBranchId();
                        if (branchId > activityToCutBranchId) {
                            activity.setParentBranchId(branchId + numberOfActivitiesToBeInserted - 1);
                            var promise = activity.save();
                            promiseList.push(promise)
                        }
                    });
                $.each(activitiesToMove,
                    function(index, child) {
                        child.setParentActivityId(oldParentActivityId);
                        child.setParentBranchId(branchIndex);
                        promiseList.push(child.save());
                        branchIndex++
                    });
                activityToCut.setParentActivityId(null);
                $.when.apply(self, promiseList).done(function() { deferred.resolve() });
                return deferred.promise()
            };
            ActivityTree.prototype.getActivitiesToMoveOnCut = function(component) {
                var activitiesToMove = component.getOrphanChildren();
                activitiesToMove = $.grep(activitiesToMove,
                    function(element, index) {
                        if (element.getActivityTypeId() == Automation.ActivityType.Empty) return false;
                        return true
                    });
                return activitiesToMove
            };
            ActivityTree.prototype.fetch = function(objectId) { throw new Error("Abstract method not implemented") };
            ActivityTree.prototype.createSubsequentActivitiesForLeafs = function() {
                var deferred = $.Deferred(), childPromises = [], activities = this.getLeafs();
                $(activities).each(function(index, activity) {
                    var promise = activity.createSubsequentActivity();
                    childPromises.push(promise)
                });
                $.when.apply(self, childPromises).done(function() { deferred.resolve() });
                return deferred.promise()
            };
            ActivityTree.prototype.add = function(activity) { this.activityCollection.add(activity) };
            ActivityTree.prototype.remove = function(activity) { this.activityCollection.remove(activity) };
            ActivityTree.prototype.has = function(activity) {
                var index = $.inArray(activity, this.activityCollection.models);
                return index >= 0 ? true : false
            };
            ActivityTree.prototype.getConnectedComponents = function() {
                var extractor = new Automation.ConnectedComponentsExtractor(this.getAllConcreteActivities()),
                    components = extractor.getConnectedComponentsFromSelection(this.getSelectedActivities());
                return components
            };
            ActivityTree.prototype.isInSelection = function(activity) {
                var index = $.inArray(activity, this.getSelectedActivities());
                return index > -1 ? true : false
            };
            ActivityTree.prototype.getDistanceFromRoot = function(activity) {
                var INFINITY = 1e3, dist = 0;
                while (activity != null && activity.getActivityTypeId() != Automation.ActivityType.Root) {
                    dist++;
                    activity = activity.getParent()
                }
                if (activity == undefined) return INFINITY;
                return dist
            };
            return ActivityTree
        }();
        Automation.ActivityTree = ActivityTree
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var DefaultFlyoutControl = function() {
            function DefaultFlyoutControl(flyoutStyleClass) {
                this.isShown = false;
                this.contentToShow = null;
                this.eventArgs = null;
                this.flyoutContainer = null;
                this.ShowTime = 250;
                this.HideTime = 250;
                if (!flyoutStyleClass) throw"Style is needed.";
                this.flyoutStyleClass = flyoutStyleClass
            }

            DefaultFlyoutControl.prototype.ignoreClick = function() { return false };
            DefaultFlyoutControl.prototype.SetRootElement = function(rootElement) { this.rootElement = rootElement };
            DefaultFlyoutControl.prototype.SetContent = function(content) { this.contentToShow = $(content) };
            DefaultFlyoutControl.prototype.SetEvent = function(event) { this.eventArgs = event };
            DefaultFlyoutControl.prototype.IsShown = function() { return this.isShown };
            DefaultFlyoutControl.prototype.Show = function() {
                var deferred = $.Deferred();
                this.isShown && this.flyoutContainer.remove();
                this.buildFlyoutContainer();
                if (this.isShown) {
                    this.contentToShow.hide();
                    this.flyoutContainer.show();
                    this.contentToShow.fadeIn(this.ShowTime).promise().done(function() { deferred.resolve() })
                } else {
                    var self = this;
                    this.flyoutContainer.slideDown(this.ShowTime).promise().done(function() {
                        self.bindFlyoutHideOnDocumentAndFrameClick();
                        deferred.resolve()
                    })
                }
                this.isShown = true;
                return deferred.promise()
            };
            DefaultFlyoutControl.prototype.buildFlyoutContainer = function() {
                this.flyoutContainer = $("<div></div>");
                this.flyoutContainer.addClass(this.flyoutStyleClass);
                if (this.eventArgs !== null) {
                    var rootElementOffset = this.rootElement.offset();
                    this.flyoutContainer.css({
                        left: this.eventArgs["pageX"] - rootElementOffset.left,
                        top: this.eventArgs["pageY"] - rootElementOffset.top
                    })
                }
                this.flyoutContainer.hide();
                this.flyoutContainer.append(this.contentToShow);
                this.rootElement.append(this.flyoutContainer);
                this.flyoutContainer.unbind("click", this.ignoreClick);
                this.flyoutContainer.bind("click", this.ignoreClick)
            };
            DefaultFlyoutControl.prototype.hideFlyout = function() {
                if (!this.isShown) return;
                this.Hide();
                $(document).unbind("click", this.hideFlyout);
                $.each($("iframe"),
                    function(i, element) {
                        var iframeDoc = $(element).contents().get(0);
                        $(iframeDoc).unbind("click", this.hideFlyout)
                    })
            };
            DefaultFlyoutControl.prototype.bindFlyoutHideOnDocumentAndFrameClick = function() {
                var self = this;
                $(document).bind("click", function(e) { e.button !== 2 && self.hideFlyout() });
                $(document).bind("contextmenu", function() { self.hideFlyout() });
                var hideFlyoutOnFrameReadyOrLoaded = function(iFrameElement) {
                    var bindHideToiFrameElement = function() {
                        var iframeDoc = $(iFrameElement).contents().get(0);
                        $(iframeDoc).bind("click", function() { self.hideFlyout() })
                    };
                    $(iFrameElement).ready(function() { bindHideToiFrameElement() });
                    $(iFrameElement).load(function() { bindHideToiFrameElement() })
                };
                $.each($("iframe"), function(i, element) { hideFlyoutOnFrameReadyOrLoaded(element) })
            };
            DefaultFlyoutControl.prototype.Hide = function() {
                var deferred = $.Deferred();
                if (!this.isShown) {
                    deferred.resolve();
                    return deferred.promise()
                }
                this.isShown = false;
                this.flyoutContainer.unbind("click", this.ignoreClick);
                var self = this;
                this.flyoutContainer.fadeOut(this.HideTime).promise().done(function() {
                    self.flyoutContainer.remove();
                    deferred.resolve()
                });
                return deferred.promise()
            };
            return DefaultFlyoutControl
        }();
        Automation.DefaultFlyoutControl = DefaultFlyoutControl
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var AbstractSubsequentActivities = function() {
            function AbstractSubsequentActivities(parentActivity) { this.parentActivity = parentActivity }

            AbstractSubsequentActivities.prototype.createChildActivities = function() {};
            AbstractSubsequentActivities.prototype.createActivity = function(parentId, activityType) {
                var activity = Automation.CurrentAutomationControl.settings.getActivityDefinitionFactory()
                    .createActivity(activityType);
                activity.setProcessId(Automation.CurrentAutomationControl.processId);
                activity.setParentActivityId(parentId);
                return activity
            };
            return AbstractSubsequentActivities
        }();
        Automation.AbstractSubsequentActivities = AbstractSubsequentActivities
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var DefaultSubsequentActivities = function(_super) {
            __extends(DefaultSubsequentActivities, _super);

            function DefaultSubsequentActivities() { _super.apply(this, arguments) }

            DefaultSubsequentActivities.prototype.createChildActivities = function() {
                if (this.parentActivity.getActivityTypeId() == Automation.ActivityType.Empty ||
                    this.parentActivity.getActivities().length > 0) return [];
                var parentId = this.parentActivity.getActivityId(),
                    activity = this.createActivity(parentId, Automation.ActivityType.Empty);
                activity.setParentBranchId(this.parentActivity.getNextParentBranchId());
                activity.setReadonlyMode(this.parentActivity.getReadonlyMode());
                return activity
            };
            return DefaultSubsequentActivities
        }(Automation.AbstractSubsequentActivities);
        Automation.DefaultSubsequentActivities = DefaultSubsequentActivities
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var DefaultActivityPositionCalculator = function() {
            function DefaultActivityPositionCalculator() {}

            DefaultActivityPositionCalculator.prototype.calculate = function(activityModel, row, column) {
                activityModel.setRow(row);
                activityModel.setCol(column);
                for (var children = activityModel
                             .getChildActivitiesSorted(),
                    step = 0,
                    i = 0;
                    i < children.length;
                    i++) {
                    DefaultActivityPositionCalculator.maxRow += step;
                    step = 1;
                    Automation.CurrentAutomationControl.settings.getActivityPositionCalculatorFactory()
                        .getCalculator(children[i].getActivityTypeId())
                        .calculate(children[i], DefaultActivityPositionCalculator.maxRow, column + 1)
                }
            };
            DefaultActivityPositionCalculator.prototype
                .getLineConnectors = function(parentActivity, childActivity) {
                    return Automation.CurrentAutomationControl.settings.getLineConnectorProviderFactory()
                        .getLineConnectorProvider(parentActivity, childActivity).getLineConnectors()
                };
            return DefaultActivityPositionCalculator
        }();
        Automation.DefaultActivityPositionCalculator = DefaultActivityPositionCalculator
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var DefaultActivityPositionCalculatorFactory = function() {
            function DefaultActivityPositionCalculatorFactory() { this.cachedCalculators = {} }

            DefaultActivityPositionCalculatorFactory.prototype.getCalculator = function(activityType) {
                var calculator = this.cachedCalculators[activityType];
                if (calculator == null || calculator == undefined) {
                    calculator = this.initializeCalculator(activityType);
                    this.cachedCalculators[activityType] = calculator
                }
                return calculator
            };
            DefaultActivityPositionCalculatorFactory.prototype
                .initializeCalculator = function(activityType) {
                    return new Automation.DefaultActivityPositionCalculator
                };
            return DefaultActivityPositionCalculatorFactory
        }();
        Automation.DefaultActivityPositionCalculatorFactory = DefaultActivityPositionCalculatorFactory
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var DefaultLabelPhraseDictionaryCollection = function() {
            function DefaultLabelPhraseDictionaryCollection() {}

            DefaultLabelPhraseDictionaryCollection.prototype.GetLabelPhrase = function() {
                var labelPhraseDictionary = {};
                return labelPhraseDictionary
            };
            return DefaultLabelPhraseDictionaryCollection
        }();
        Automation.DefaultLabelPhraseDictionaryCollection = DefaultLabelPhraseDictionaryCollection
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var DefaultContextFlyoutContent = function() {
            function DefaultContextFlyoutContent(activity) {
                this.optionsPropertyList = {};
                if (!activity) throw"Activity is needed.";
                this.currentActivity = activity;
                this.optionsPropertyList = {}
            }

            DefaultContextFlyoutContent.prototype.buildOptions = function() {
                var self = this, optionsList = [];
                $.each(this.optionsPropertyList,
                    function(key, optionProperty) {
                        var option = $("<li id=" + optionProperty.id + ">" + optionProperty.label + "</li>");
                        option.click(function() { optionProperty.clickHandler.call(self) });
                        optionsList.push(option)
                    });
                return optionsList
            };
            DefaultContextFlyoutContent.prototype.createContent = function() {
                var content = $('<div class="contextmenuitems">'), items = $("<ul>"), elements = this.buildOptions();
                $.each(elements, function(key, element) { items.append(element) });
                content.append(items);
                return content
            };
            return DefaultContextFlyoutContent
        }();
        Automation.DefaultContextFlyoutContent = DefaultContextFlyoutContent
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var DefaultFlyoutContentProvider = function() {
            function DefaultFlyoutContentProvider() {}

            DefaultFlyoutContentProvider.prototype.createContent = function(flyoutContentType, activity) {
                switch (flyoutContentType) {
                case DefaultFlyoutContentProvider.flyoutContentType.ContextFlyout:
                    var contextFlyoutContent = new Automation.DefaultContextFlyoutContent(activity);
                    return contextFlyoutContent.createContent()
                }
            };
            DefaultFlyoutContentProvider.flyoutContentType = { ContextFlyout: "contextFlyout" };
            return DefaultFlyoutContentProvider
        }();
        Automation.DefaultFlyoutContentProvider = DefaultFlyoutContentProvider
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var DefaultSubsequentActivityGenerator = function() {
            function DefaultSubsequentActivityGenerator() {}

            DefaultSubsequentActivityGenerator.prototype
                .createGenerator = function(activity) { return new Automation.DefaultSubsequentActivities(activity) };
            DefaultSubsequentActivityGenerator.prototype.createChildActivities = function(activity) {
                var generator = this.createGenerator(activity);
                return generator.createChildActivities()
            };
            return DefaultSubsequentActivityGenerator
        }();
        Automation.DefaultSubsequentActivityGenerator = DefaultSubsequentActivityGenerator
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var DefaultStatusMessageResolver = function() {
            function DefaultStatusMessageResolver() {}

            DefaultStatusMessageResolver.prototype.ResolveMessage = function(messageId) { return "Error" };
            return DefaultStatusMessageResolver
        }();
        Automation.DefaultStatusMessageResolver = DefaultStatusMessageResolver
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var DefaultStatusCodeProvider = function() {
            function DefaultStatusCodeProvider() {}

            DefaultStatusCodeProvider.prototype.getStatus = function(activityId) { return null };
            return DefaultStatusCodeProvider
        }();
        Automation.DefaultStatusCodeProvider = DefaultStatusCodeProvider
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var DefaultStatusCodeProviderFactory = function() {
            function DefaultStatusCodeProviderFactory() {}

            DefaultStatusCodeProviderFactory.prototype
                .getProvider = function(activityType) { return new Automation.DefaultStatusCodeProvider };
            return DefaultStatusCodeProviderFactory
        }();
        Automation.DefaultStatusCodeProviderFactory = DefaultStatusCodeProviderFactory
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var DefaultTileDecorator = function() {
            function DefaultTileDecorator() {}

            DefaultTileDecorator.prototype.decorateTileProperties = function(tileProperties) {};
            return DefaultTileDecorator
        }();
        Automation.DefaultTileDecorator = DefaultTileDecorator
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var DefaultLineDecorator = function() {
            function DefaultLineDecorator() {}

            DefaultLineDecorator.prototype.decorateLines = function(lines) {};
            return DefaultLineDecorator
        }();
        Automation.DefaultLineDecorator = DefaultLineDecorator
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var DefaultDecoratorFactory = function() {
            function DefaultDecoratorFactory() {}

            DefaultDecoratorFactory.prototype
                .getTileDecorator = function(activityModel) { return new Automation.DefaultTileDecorator };
            DefaultDecoratorFactory.prototype
                .getLineDecorator = function(parentActivity, childActivity) {
                    return new Automation.DefaultLineDecorator
                };
            return DefaultDecoratorFactory
        }();
        Automation.DefaultDecoratorFactory = DefaultDecoratorFactory
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var DefaultLineConnectorProvider = function() {
            function DefaultLineConnectorProvider(parentActivity, childActivity) {
                this.parentActivity = parentActivity;
                this.childActivity = childActivity
            }

            DefaultLineConnectorProvider.prototype
                .getLineConnectors = function() { return this.getLineConnectorsWithLineClass("line") };
            DefaultLineConnectorProvider.prototype.getLineConnectorsWithLineClass = function(lineClass) {
                var row1 = this.parentActivity.getRow(),
                    col1 = this.parentActivity.getCol(),
                    row2 = this.childActivity.getRow(),
                    col2 = this.childActivity.getCol(),
                    positionCalculator = new Automation
                        .PositionCalculator(Automation.CurrentAutomationControl.settings.getLayoutProperties()),
                    startPoint = new Automation.Point(positionCalculator.computeLeft(col1),
                        positionCalculator.computeTop(row1)),
                    endPoint = new Automation.Point(positionCalculator.computeLeft(col2),
                        positionCalculator.computeTop(row2)),
                    lines = Automation.CurrentAutomationControl.settings.getConnectorDOMProvider()
                        .createConnectorDOM(startPoint, endPoint, lineClass);
                Automation.CurrentAutomationControl.settings.getDecoratorFactory()
                    .getLineDecorator(this.parentActivity, this.childActivity).decorateLines(lines);
                return lines
            };
            return DefaultLineConnectorProvider
        }();
        Automation.DefaultLineConnectorProvider = DefaultLineConnectorProvider
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var DefaultLineConnectorProviderFactory = function() {
            function DefaultLineConnectorProviderFactory() {}

            DefaultLineConnectorProviderFactory.prototype
                .getLineConnectorProvider = function(parentActivity, childActivity) {
                    return new Automation.DefaultLineConnectorProvider(parentActivity, childActivity)
                };
            return DefaultLineConnectorProviderFactory
        }();
        Automation.DefaultLineConnectorProviderFactory = DefaultLineConnectorProviderFactory
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var DefaultConnectorDOMProvider = function() {
            function DefaultConnectorDOMProvider() {}

            DefaultConnectorDOMProvider.prototype.createConnectorDOM = function(startPoint, endPoint, segmentClass) {
                var layoutProperties = Automation.CurrentAutomationControl.settings.getLayoutProperties(),
                    segments = [],
                    horizontalClass = " horizontal",
                    verticalClass = " vertical",
                    width = layoutProperties.getWidth(),
                    height = layoutProperties.getHeight(),
                    colSpacing = layoutProperties.getColSpacing(),
                    lineWidth = layoutProperties.getLineWidth(),
                    top = startPoint.getY() + height / 2 - lineWidth / 2,
                    left = startPoint.getX() + width,
                    p1 = new Automation.Point(left, top);
                segments.push(Automation.Graphics
                    .createLineDOM(p1,
                        endPoint.getX() - left - colSpacing / 2 + lineWidth / 2,
                        lineWidth,
                        segmentClass + horizontalClass));
                var top1 = startPoint.getY() + height / 2, top2 = endPoint.getY() + height / 2;
                left = endPoint.getX() - colSpacing / 2 - lineWidth / 2;
                var p2 = new Automation.Point(left, top1), length = top2 - top1;
                if (top2 < top1) {
                    length = top1 - top2;
                    p2 = new Automation.Point(left, top2)
                }
                segments.push(Automation.Graphics.createLineDOM(p2, lineWidth, length, segmentClass + verticalClass));
                top = endPoint.getY() + height / 2 - lineWidth / 2;
                left = endPoint.getX() - colSpacing / 2 - lineWidth / 2;
                var p3 = new Automation.Point(left, top);
                segments.push(Automation.Graphics
                    .createLineDOM(p3, endPoint.getX() - p3.getX(), lineWidth, segmentClass + horizontalClass));
                return segments
            };
            return DefaultConnectorDOMProvider
        }();
        Automation.DefaultConnectorDOMProvider = DefaultConnectorDOMProvider
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var DefaultIconFactory = function() {
            function DefaultIconFactory() {
                this.iconTemplate = "";
                this.iconTemplate = '<div class="iconContainer"><img title="<%= title %>" src="<%- image %>"></div>'
            }

            DefaultIconFactory.prototype.getIconAttributes = function(iconType) { return null };
            DefaultIconFactory.prototype.createIcon = function(iconType) {
                var iconAttributes = this.getIconAttributes(iconType),
                    slotIconHolderTemplate = _.template(this.iconTemplate);
                return $(slotIconHolderTemplate(iconAttributes))[0]
            };
            return DefaultIconFactory
        }();
        Automation.DefaultIconFactory = DefaultIconFactory
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var DefaultLibraryNodesFactory = function() {
            function DefaultLibraryNodesFactory() {}

            DefaultLibraryNodesFactory.prototype.CreateLibraryNodes = function() { return null };
            return DefaultLibraryNodesFactory
        }();
        Automation.DefaultLibraryNodesFactory = DefaultLibraryNodesFactory
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var AbstractActivityTileInformation = function() {
            function AbstractActivityTileInformation(activityModel, itemId) {
                this.activityModel = activityModel;
                this.itemId = itemId
            }

            AbstractActivityTileInformation.prototype.getItem = function() {
                var item = { attributes: {} };
                if (this.activityModel)
                    item = typeof this.itemId === "undefined"
                        ? this.activityModel.getActiveItem()
                        : this.activityModel.getItem(this.itemId);
                return item
            };
            AbstractActivityTileInformation.prototype.getDynamicAttributes = function() {
                var item = this.getItem();
                return this.virtualGetDynamicAttributes(item.attributes)
            };
            AbstractActivityTileInformation.prototype
                .virtualGetDynamicAttributes = function(defaultAttributes) { return defaultAttributes };
            AbstractActivityTileInformation.prototype
                .getProperties = function() { throw new Error("method is abstract") };
            return AbstractActivityTileInformation
        }();
        Automation.AbstractActivityTileInformation = AbstractActivityTileInformation
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var TileProperties = function() {
            function TileProperties(template,
                tileImageTemplate,
                image,
                tileClass,
                emptyTitleText,
                emptyTileTemplate,
                emptyTileImageTemplate) {
                this.template = null;
                this.template = template;
                this.tileImageTemplate = tileImageTemplate;
                this.image = image;
                this.tileclass = tileClass;
                this.emptyTitleText = emptyTitleText;
                this.emptyTileImageTemplate = emptyTileImageTemplate;
                this.emptyTileTemplate = emptyTileTemplate
            }

            return TileProperties
        }();
        Automation.TileProperties = TileProperties
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var EmptyActivityTileInformation = function(_super) {
            __extends(EmptyActivityTileInformation, _super);

            function EmptyActivityTileInformation() { _super.apply(this, arguments) }

            EmptyActivityTileInformation.prototype.getProperties = function() {
                var properties = new Automation
                    .TileProperties("",
                        "",
                        null,
                        "emptyTile",
                        Automation.CurrentAutomationControl.settings.getLabelKeyValuePhraseCollection()
                        .GetLabelPhrase()["[DRAG ELEMENT HERE]"],
                        '<span class="slotTile ellipsis" title="<%= emptyTitleText %>"><%= emptyTitleText %><span>',
                        "");
                return properties
            };
            return EmptyActivityTileInformation
        }(Automation.AbstractActivityTileInformation);
        Automation.EmptyActivityTileInformation = EmptyActivityTileInformation
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var EmptyStatusView = function(_super) {
            __extends(EmptyStatusView, _super);

            function EmptyStatusView() { _super.apply(this, arguments) }

            EmptyStatusView.prototype.render = function() {
                this.$el = $("");
                return this
            };
            return EmptyStatusView
        }(Backbone.View);
        Automation.EmptyStatusView = EmptyStatusView
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var ErrorStatusView = function(_super) {
            __extends(ErrorStatusView, _super);

            function ErrorStatusView(itemAttributes) {
                _super.call(this);
                this.itemAttributes = itemAttributes
            }

            ErrorStatusView.prototype.render = function() {
                var statusMessage = Automation.CurrentAutomationControl.settings.getStatusMessageResolver()
                        .ResolveMessage(this.itemAttributes["StatusMessageId"]),
                    html = '<span class="tileError"><img src="images/error_16.png" class="tileErrorImg" title="' +
                        statusMessage +
                        '"></span>';
                this.$el = $(html);
                return this
            };
            return ErrorStatusView
        }(Backbone.View);
        Automation.ErrorStatusView = ErrorStatusView
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        (function(ActionStatus) {
            ActionStatus[ActionStatus["NotRunning"] = 0] = "NotRunning";
            ActionStatus[ActionStatus["Running"] = 1] = "Running";
            ActionStatus[ActionStatus["Stopping"] = 2] = "Stopping";
            ActionStatus[ActionStatus["Idle"] = 3] = "Idle";
            ActionStatus[ActionStatus["Error"] = 4] = "Error"
        })(Automation.ActionStatus || (Automation.ActionStatus = {}));
        var ActionStatus = Automation.ActionStatus
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var DefaultTileInformationFactory = function() {
            function DefaultTileInformationFactory() {}

            DefaultTileInformationFactory.prototype.GetTileInformationForActivityType = function(activityType) {
                var activityModel = Automation.CurrentAutomationControl.settings.getActivityDefinitionFactory()
                    .createActivity(activityType);
                return this.getTileInformationForActivityModel(activityModel)
            };
            DefaultTileInformationFactory.prototype
                .getTileInformationForActivityModel = function(activityModel, specificItemId) {
                    return new Automation.EmptyActivityTileInformation(activityModel, specificItemId)
                };
            DefaultTileInformationFactory.prototype.GetTileStatusView = function(model, activeItemAttributes) {
                if (!("State" in activeItemAttributes)) return new Automation.EmptyStatusView;
                var status = activeItemAttributes["State"], statusValue = parseInt(status);
                switch (statusValue) {
                case 4:
                    return new Automation.ErrorStatusView(activeItemAttributes);
                default:
                    return new Automation.EmptyStatusView
                }
            };
            return DefaultTileInformationFactory
        }();
        Automation.DefaultTileInformationFactory = DefaultTileInformationFactory
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var AbstractPropertyViewFactory = function() {
            function AbstractPropertyViewFactory() {}

            AbstractPropertyViewFactory.prototype
                .createProperty = function(currentModel) { throw new Error("Method is Abstract") };
            return AbstractPropertyViewFactory
        }();
        Automation.AbstractPropertyViewFactory = AbstractPropertyViewFactory
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        Automation.EmptyActivity = Automation.ActivityDefinitionModel.extend({
            initialize: function(options) {
                this.constructor.__super__.initialize.apply(this, [options]);
                this.setActivityTypeId(Automation.ActivityType.Empty)
            },
            IsEmpty: function() { return true },
            canMove: function() { return false }
        })
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var DefaultActivityDefinitionFactory = function() {
            function DefaultActivityDefinitionFactory() {}

            DefaultActivityDefinitionFactory.prototype.createActivity = function(activityType) {
                switch (activityType) {
                case Automation.ActivityType.Empty:
                    return new Automation.EmptyActivity;
                default:
                    return new Automation.ActivityDefinitionModel
                }
            };
            DefaultActivityDefinitionFactory.prototype.convertToConcreteActivity = function(activity) {
                var concreteActivity = this.createActivity(activity.getActivityTypeId());
                concreteActivity.setActivityId(activity.getActivityId());
                concreteActivity.setProcessId(activity.getProcessId());
                concreteActivity.setParentActivityId(activity.getParentActivityId());
                concreteActivity.setParentBranchId(activity.getParentBranchId());
                concreteActivity.setProperties(activity.getProperties());
                return concreteActivity
            };
            return DefaultActivityDefinitionFactory
        }();
        Automation.DefaultActivityDefinitionFactory = DefaultActivityDefinitionFactory
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var FlyoutItemClickHandler = function() {
            function FlyoutItemClickHandler() {}

            FlyoutItemClickHandler.prototype.execute = function() { this.confirmAction() && this.executeInternal() };
            FlyoutItemClickHandler.prototype.executeInternal = function() {};
            FlyoutItemClickHandler.prototype.confirmAction = function() { return true };
            return FlyoutItemClickHandler
        }();
        Automation.FlyoutItemClickHandler = FlyoutItemClickHandler
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var DefaultDeleteFlyoutItemClickHandler = function(_super) {
            __extends(DefaultDeleteFlyoutItemClickHandler, _super);

            function DefaultDeleteFlyoutItemClickHandler() { _super.apply(this, arguments) }

            DefaultDeleteFlyoutItemClickHandler.prototype.executeInternal = function() {
                var _this = this,
                    connectedComponents = Automation.CurrentAutomationControl.activityTree.getConnectedComponents();
                Automation.eventManager.trigger("hideContextMenus");
                this.removeComponentsFromWorkflowTree(connectedComponents).done(function() {
                    _this.deleteComponentsFromServer(connectedComponents).done(function() {
                        Automation.updateCurrentModel(null);
                        Automation.eventManager.trigger("canvasrefresh")
                    })
                })
            };
            DefaultDeleteFlyoutItemClickHandler.prototype
                .confirmAction = function() {
                    return confirm(Automation.CurrentAutomationControl.settings
                        .getLabelKeyValuePhraseCollection()["[CONFIRMATION DIALOGUE BEFORE DELETE]"])
                };
            DefaultDeleteFlyoutItemClickHandler.prototype
                .removeComponentsFromWorkflowTree = function(connectedComponents) {
                    var promise = null;
                    $.each(connectedComponents,
                        function(index, component) {
                            if (promise == null)
                                promise = Automation.CurrentAutomationControl.activityTree
                                    .cutConnectedComponent(component);
                            else
                                promise = promise.then(function() {
                                    return Automation.CurrentAutomationControl.activityTree
                                        .cutConnectedComponent(component)
                                })
                        });
                    return promise
                };
            DefaultDeleteFlyoutItemClickHandler.prototype.deleteComponentsFromServer = function(connectedComponents) {
                var promise = null;
                $.each(connectedComponents,
                    function(indexComponent, component) {
                        $.each(component.getNodes(),
                            function(indexNode, node) {
                                Automation.CurrentAutomationControl.activityTree.remove(node);
                                if (promise == null) promise = node.destroy();
                                else promise = promise.then(function() { return node.destroy() })
                            })
                    });
                return promise
            };
            return DefaultDeleteFlyoutItemClickHandler
        }(Automation.FlyoutItemClickHandler);
        Automation.DefaultDeleteFlyoutItemClickHandler = DefaultDeleteFlyoutItemClickHandler
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var DefaultContextFlyoutHandler = function() {
            function DefaultContextFlyoutHandler(currentActivity) { this.currentActivity = currentActivity }

            DefaultContextFlyoutHandler.prototype.click = function(event) {
                var contextMenu = Automation.CurrentAutomationControl.settings.getSlotContextMenu(),
                    content = Automation.CurrentAutomationControl.settings.getFlyoutContentProvider()
                        .createContent(Automation.DefaultFlyoutContentProvider.flyoutContentType.ContextFlyout,
                            this.currentActivity);
                contextMenu.SetRootElement(this.getContextRootElement());
                contextMenu.SetContent(content);
                contextMenu.SetEvent(event);
                return contextMenu.Show()
            };
            DefaultContextFlyoutHandler.prototype.getContextRootElement = function() { return $(document.body) };
            return DefaultContextFlyoutHandler
        }();
        Automation.DefaultContextFlyoutHandler = DefaultContextFlyoutHandler
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var DefaultActivityClickHandler = function() {
            function DefaultActivityClickHandler(currentActivity) { this.currentActivity = currentActivity }

            DefaultActivityClickHandler.prototype.click = function(elementClicked) {
                Automation.eventManager.trigger("hideMenus");
                Automation.eventManager.trigger("hideContextMenus");
                Automation.updateCurrentModel(this.currentActivity);
                var deferred = $.Deferred();
                deferred.resolve();
                return deferred.promise()
            };
            return DefaultActivityClickHandler
        }();
        Automation.DefaultActivityClickHandler = DefaultActivityClickHandler
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var DefaultActivityDblClickHandler = function() {
            function DefaultActivityDblClickHandler(currentActivity) { this.currentActivity = currentActivity }

            DefaultActivityDblClickHandler.prototype.dblclick = function(elementDblClicked) {
                Automation.eventManager.trigger("hideMenus");
                Automation.eventManager.trigger("hideContextMenus");
                Automation.eventManager.trigger("slotTileHolderDoubleClick");
                Automation.updateCurrentModel(this.currentActivity);
                var deferred = $.Deferred();
                deferred.resolve();
                return deferred.promise()
            };
            return DefaultActivityDblClickHandler
        }();
        Automation.DefaultActivityDblClickHandler = DefaultActivityDblClickHandler
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var EmptyActivityDblClickHandler = function() {
            function EmptyActivityDblClickHandler(currentActivity) { this.currentActivity = currentActivity }

            EmptyActivityDblClickHandler.prototype.dblclick = function(elementDblClicked) {
                Automation.eventManager.trigger("hideMenus");
                Automation.eventManager.trigger("hideContextMenus");
                $("#lblLibrary").click();
                Automation.updateCurrentModel(this.currentActivity);
                var deferred = $.Deferred();
                deferred.resolve();
                return deferred.promise()
            };
            return EmptyActivityDblClickHandler
        }();
        Automation.EmptyActivityDblClickHandler = EmptyActivityDblClickHandler
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var DefaultDropValidator = function() {
            function DefaultDropValidator() {}

            DefaultDropValidator.prototype.isDropValid = function(activityComponent) {
                for (var result = true, i = 0; i < this.validationSteps.length && result; i++) {
                    var step = this.validationSteps[i];
                    step.currentActivity = this.currentActivity;
                    result = this.validationSteps[i].isDropValid(activityComponent)
                }
                return result
            };
            DefaultDropValidator.prototype.initialize = function() { this.validationSteps = [] };
            return DefaultDropValidator
        }();
        Automation.DefaultDropValidator = DefaultDropValidator
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var AbstractActivityDropHandler = function() {
            function AbstractActivityDropHandler(currentActivity) {
                this.currentActivity = null;
                this.currentActivity = currentActivity
            }

            AbstractActivityDropHandler.prototype.drop = function(droppedActivityComponent) {};
            AbstractActivityDropHandler.prototype.dropAllowed = function(activityComponent) {
                if ($.inArray(this.currentActivity, activityComponent.getNodes()) > -1 ||
                    activityComponent.getRoot().getParent() == this.currentActivity) return false;
                var validator = Automation.CurrentAutomationControl.settings.getDropValidator();
                validator.initialize();
                validator.currentActivity = this.currentActivity;
                return validator.isDropValid(activityComponent)
            };
            return AbstractActivityDropHandler
        }();
        Automation.AbstractActivityDropHandler = AbstractActivityDropHandler
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var DefaultInsertSlotVerticalDropHandler = function(_super) {
            __extends(DefaultInsertSlotVerticalDropHandler, _super);

            function DefaultInsertSlotVerticalDropHandler() { _super.apply(this, arguments) }

            DefaultInsertSlotVerticalDropHandler.prototype.drop = function(activityComponent) {
                var self = this, deferred = $.Deferred();
                if (!this.dropAllowed(activityComponent)) {
                    deferred.resolve();
                    return deferred.promise()
                }
                Automation.CurrentAutomationControl.activityTree.cutConnectedComponent(activityComponent)
                    .done(function() {
                        self.insertActivityComponent(activityComponent)
                            .done(function(activity) { deferred.resolveWith(activity, [activity]) })
                    });
                return deferred.promise()
            };
            DefaultInsertSlotVerticalDropHandler.prototype
                .insertActivityComponent = function(droppedActivityComponent) {
                    var parent = this.currentActivity.getParent(), index = this.currentActivity.getParentBranchId() + 1;
                    return Automation.CurrentAutomationControl.activityTree
                        .insertChildActivityComponentAtIndex(parent, droppedActivityComponent, index)
                };
            DefaultInsertSlotVerticalDropHandler.prototype.dropAllowed = function(activityComponent) {
                if (activityComponent.getRoot().getActivityId() == this.currentActivity.getActivityId() ||
                    $.inArray(this.currentActivity, activityComponent.getNodes()) > -1) return false;
                var validator = Automation.CurrentAutomationControl.settings.getDropValidator();
                validator.currentActivity = this.currentActivity;
                return validator.isDropValid(activityComponent)
            };
            return DefaultInsertSlotVerticalDropHandler
        }(Automation.AbstractActivityDropHandler);
        Automation.DefaultInsertSlotVerticalDropHandler = DefaultInsertSlotVerticalDropHandler
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var EmptyActivityDropHandler = function(_super) {
            __extends(EmptyActivityDropHandler, _super);

            function EmptyActivityDropHandler() { _super.apply(this, arguments) }

            EmptyActivityDropHandler.prototype.drop = function(droppedActivitiesComponent) {
                var self = this, deferred = $.Deferred();
                if (!this.dropAllowed(droppedActivitiesComponent)) {
                    deferred.resolve();
                    return deferred.promise()
                }
                Automation.CurrentAutomationControl.activityTree.cutConnectedComponent(droppedActivitiesComponent)
                    .done(function() {
                        var rootActivity = droppedActivitiesComponent.getRoot(),
                            emptyActivityParentID = self.currentActivity.getParentActivityId(),
                            emptyActivityBranchIndex = self.currentActivity.getParentBranchId();
                        Automation.CurrentAutomationControl.activityTree.remove(self.currentActivity);
                        rootActivity.setParentActivityId(emptyActivityParentID);
                        rootActivity.setParentBranchId(emptyActivityBranchIndex);
                        rootActivity.saveActivityWithSubsequentActivities()
                            .done(function(insertedActivity) {
                                deferred.resolveWith(insertedActivity, [insertedActivity])
                            })
                    });
                return deferred.promise()
            };
            EmptyActivityDropHandler.prototype.dropAllowed = function(droppedActivityComponent) {
                if ($.inArray(this.currentActivity, droppedActivityComponent.getOrphanChildren()) > -1) return false;
                var validator = Automation.CurrentAutomationControl.settings.getDropValidator();
                validator.initialize();
                validator.currentActivity = this.currentActivity.getParent();
                return validator.isDropValid(droppedActivityComponent)
            };
            return EmptyActivityDropHandler
        }(Automation.AbstractActivityDropHandler);
        Automation.EmptyActivityDropHandler = EmptyActivityDropHandler
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var DefaultActivityDropHandler = function(_super) {
            __extends(DefaultActivityDropHandler, _super);

            function DefaultActivityDropHandler() { _super.apply(this, arguments) }

            DefaultActivityDropHandler.prototype.drop = function(droppedActivitiesComponent) {
                var self = this, deferred = $.Deferred();
                if (!this.dropAllowed(droppedActivitiesComponent)) {
                    deferred.resolveWith(this.currentActivity, [this.currentActivity]);
                    return deferred.promise()
                }
                var childActivities = self.currentActivity.getChildActivitiesSorted();
                childActivities.length > 0 &&
                    childActivities[0].getActivityTypeId() == Automation.ActivityType.Empty &&
                    Automation.CurrentAutomationControl.activityTree.remove(childActivities[0]);
                Automation.CurrentAutomationControl.activityTree.cutConnectedComponent(droppedActivitiesComponent)
                    .done(function() {
                        var rootActivity = droppedActivitiesComponent.getRoot();
                        Automation.CurrentAutomationControl.activityTree
                            .addChildActivity(self.currentActivity, rootActivity);
                        rootActivity.saveActivityWithSubsequentActivities()
                            .done(function(insertedActivity) {
                                deferred.resolveWith(insertedActivity, [insertedActivity])
                            })
                    });
                return deferred.promise()
            };
            return DefaultActivityDropHandler
        }(Automation.AbstractActivityDropHandler);
        Automation.DefaultActivityDropHandler = DefaultActivityDropHandler
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var DefaultActivityFocusHandler = function() {
            function DefaultActivityFocusHandler(currentActivity) { this.currentActivity = currentActivity }

            DefaultActivityFocusHandler.prototype.focus = function(elementFocused) {
                elementFocused.addClass(Automation.CssClass.HoverOverDroppable)
            };
            return DefaultActivityFocusHandler
        }();
        Automation.DefaultActivityFocusHandler = DefaultActivityFocusHandler
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var DefaultActivityBlurHandler = function() {
            function DefaultActivityBlurHandler(currentActivity) { this.currentActivity = currentActivity }

            DefaultActivityBlurHandler.prototype.blur = function(elementBlurred) {
                elementBlurred.removeClass(Automation.CssClass.HoverOverDroppable)
            };
            return DefaultActivityBlurHandler
        }();
        Automation.DefaultActivityBlurHandler = DefaultActivityBlurHandler
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var DefaultActivityKeyDownHandler = function() {
            function DefaultActivityKeyDownHandler(currentActivity) { this.currentActivity = currentActivity }

            DefaultActivityKeyDownHandler.prototype.keydown = function(element, event) {};
            return DefaultActivityKeyDownHandler
        }();
        Automation.DefaultActivityKeyDownHandler = DefaultActivityKeyDownHandler
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var EmptyMultiDropHandler = function() {
            function EmptyMultiDropHandler(slot) { this.slot = slot }

            EmptyMultiDropHandler.prototype.drop = function(activityComponents) {
                var promise = null,
                    emptyDropHandler = new Automation.EmptyActivityDropHandler(this.slot.getActivity()),
                    firstComponent = activityComponents[0],
                    insertHorizontalDropHandler = new Automation
                        .DefaultInsertSlotVerticalDropHandler(firstComponent.getRoot()),
                    count = activityComponents.length,
                    preparedComponents = [firstComponent].concat(activityComponents.slice(1, count).reverse());
                $.each(preparedComponents,
                    function(index, component) {
                        if (promise == null) promise = emptyDropHandler.drop(component);
                        else promise = promise.then(function() { return insertHorizontalDropHandler.drop(component) })
                    });
                return promise
            };
            return EmptyMultiDropHandler
        }();
        Automation.EmptyMultiDropHandler = EmptyMultiDropHandler
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var DefaultActivityMultiDropHandler = function() {
            function DefaultActivityMultiDropHandler(slot) { this.slot = slot }

            DefaultActivityMultiDropHandler.prototype.drop = function(activityComponents) {
                var promise = null,
                    dropHandler = Automation.CurrentAutomationControl.settings.getSlotHandlerProvider()
                        .createDropHandler(this.slot);
                $.each(activityComponents,
                    function(index, component) {
                        if (promise == null) promise = dropHandler.drop(component);
                        else promise = promise.then(function() { return dropHandler.drop(component) })
                    });
                return promise
            };
            return DefaultActivityMultiDropHandler
        }();
        Automation.DefaultActivityMultiDropHandler = DefaultActivityMultiDropHandler
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var TileHolderMultiDropHandler = function() {
            function TileHolderMultiDropHandler(slot) { this.slot = slot }

            TileHolderMultiDropHandler.prototype.getTileHoldeMultiDropHandler = function() {
                switch (this.slot.getActivity().getActivityTypeId()) {
                case Automation.ActivityType.Empty:
                    return new Automation.EmptyMultiDropHandler(this.slot);
                default:
                    return new Automation.DefaultActivityMultiDropHandler(this.slot)
                }
            };
            TileHolderMultiDropHandler.prototype.drop = function(activityComponents) {
                var multiDropHandler = this.getTileHoldeMultiDropHandler();
                return multiDropHandler.drop(activityComponents)
            };
            return TileHolderMultiDropHandler
        }();
        Automation.TileHolderMultiDropHandler = TileHolderMultiDropHandler
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var DefaultSlotTileHolderHandlerFactory = function() {
            function DefaultSlotTileHolderHandlerFactory() {
                if (DefaultSlotTileHolderHandlerFactory
                    .instance)
                    throw new
                        Error("Error: Instantiantion failed: Use DefaultSlotTileHolderHandlerFactory.getInstance()")
            }

            DefaultSlotTileHolderHandlerFactory.getInstance = function() {
                if (DefaultSlotTileHolderHandlerFactory
                    .instance ==
                    null) DefaultSlotTileHolderHandlerFactory.instance = new DefaultSlotTileHolderHandlerFactory;
                return DefaultSlotTileHolderHandlerFactory.instance
            };
            DefaultSlotTileHolderHandlerFactory.prototype.createDropHandler = function(currentActivity) {
                switch (currentActivity.getActivityTypeId()) {
                case Automation.ActivityType.Empty:
                    return new Automation.EmptyActivityDropHandler(currentActivity);
                default:
                    return new Automation.DefaultActivityDropHandler(currentActivity)
                }
            };
            DefaultSlotTileHolderHandlerFactory.prototype
                .createMultipleDropHandler = function(slot) { return new Automation.TileHolderMultiDropHandler(slot) };
            DefaultSlotTileHolderHandlerFactory.prototype
                .createClickHandler = function(currentActivity) {
                    return new Automation.DefaultActivityClickHandler(currentActivity)
                };
            DefaultSlotTileHolderHandlerFactory.prototype.createDblClickHandler = function(currentActivity) {
                switch (currentActivity.getActivityTypeId()) {
                case Automation.ActivityType.Empty:
                    return new Automation.EmptyActivityDblClickHandler(currentActivity);
                default:
                    return new Automation.DefaultActivityDblClickHandler(currentActivity)
                }
            };
            DefaultSlotTileHolderHandlerFactory.prototype
                .createKeyDownHandler = function(currentActivity) {
                    return new Automation.DefaultActivityKeyDownHandler(currentActivity)
                };
            DefaultSlotTileHolderHandlerFactory.prototype
                .createFocusHandler = function(currentActivity) {
                    return new Automation.DefaultActivityFocusHandler(currentActivity)
                };
            DefaultSlotTileHolderHandlerFactory.prototype
                .createBlurHandler = function(currentActivity) {
                    return new Automation.DefaultActivityBlurHandler(currentActivity)
                };
            DefaultSlotTileHolderHandlerFactory.prototype.createContextHandler = function(currentActivity) {
                if (currentActivity.getReadonlyMode()) return null;
                switch (currentActivity.getActivityTypeId()) {
                case Automation.ActivityType.Empty:
                    return null;
                default:
                    return new Automation.DefaultContextFlyoutHandler(currentActivity)
                }
            };
            DefaultSlotTileHolderHandlerFactory.instance = null;
            return DefaultSlotTileHolderHandlerFactory
        }();
        Automation.DefaultSlotTileHolderHandlerFactory = DefaultSlotTileHolderHandlerFactory
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var DefaultInsertSlotHorizontalDropHandler = function(_super) {
            __extends(DefaultInsertSlotHorizontalDropHandler, _super);

            function DefaultInsertSlotHorizontalDropHandler() { _super.apply(this, arguments) }

            DefaultInsertSlotHorizontalDropHandler.prototype.drop = function(droppedActivitiesComponent) {
                var self = this, deferred = $.Deferred();
                if (!this.dropAllowed(droppedActivitiesComponent)) {
                    deferred.resolve();
                    return deferred.promise()
                }
                Automation.CurrentAutomationControl.activityTree.cutConnectedComponent(droppedActivitiesComponent)
                    .done(function() {
                        Automation.CurrentAutomationControl.activityTree
                            .insertActivityComponentBefore(self.currentActivity, droppedActivitiesComponent)
                            .done(function(insertedActivity) {
                                insertedActivity.saveActivityWithSubsequentActivities()
                                    .done(function(activity) { deferred.resolveWith(activity, [activity]) })
                            })
                    });
                return deferred.promise()
            };
            DefaultInsertSlotHorizontalDropHandler.prototype.dropAllowed = function(droppedActivitiesComponent) {
                if (droppedActivitiesComponent.getRoot().getActivityId() == this.currentActivity.getActivityId() ||
                    $.inArray(this.currentActivity, droppedActivitiesComponent.getNodes()) > -1) return false;
                var validator = Automation.CurrentAutomationControl.settings.getDropValidator();
                validator.initialize();
                validator.currentActivity = this.currentActivity.getParent();
                return validator.isDropValid(droppedActivitiesComponent)
            };
            return DefaultInsertSlotHorizontalDropHandler
        }(Automation.AbstractActivityDropHandler);
        Automation.DefaultInsertSlotHorizontalDropHandler = DefaultInsertSlotHorizontalDropHandler
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var InsertSlotHorizontalMultiDropHandler = function() {
            function InsertSlotHorizontalMultiDropHandler(slot) { this.slot = slot }

            InsertSlotHorizontalMultiDropHandler.prototype.drop = function(activityComponents) {
                var promise = null,
                    currentActivity = this.slot.getActivity(),
                    insertSlotHorizontalDropHandler = Automation.CurrentAutomationControl.settings
                        .getSlotHandlerProvider().createDropHandler(this.slot),
                    defaultActivityDropHandler = Automation.CurrentAutomationControl.settings.getSlotHandlerProvider()
                        .createFactory(Automation.SlotType.TileHolder).createDropHandler(currentActivity.getParent());
                $.each(activityComponents,
                    function(index, component) {
                        if (promise == null) promise = insertSlotHorizontalDropHandler.drop(component);
                        else promise = promise.then(function() { return defaultActivityDropHandler.drop(component) })
                    });
                return promise
            };
            return InsertSlotHorizontalMultiDropHandler
        }();
        Automation.InsertSlotHorizontalMultiDropHandler = InsertSlotHorizontalMultiDropHandler
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var DefaultSlotInsertHorizontalHandlerFactory = function() {
            function DefaultSlotInsertHorizontalHandlerFactory() {
                if (DefaultSlotInsertHorizontalHandlerFactory
                    .instance)
                    throw new
                        Error("Error: Instantiantion failed: Use DefaultSlotInsertHorizontalHandlerFactory.getInstance()")
            }

            DefaultSlotInsertHorizontalHandlerFactory.getInstance = function() {
                if (DefaultSlotInsertHorizontalHandlerFactory
                    .instance ==
                    null)
                    DefaultSlotInsertHorizontalHandlerFactory.instance = new DefaultSlotInsertHorizontalHandlerFactory;
                return DefaultSlotInsertHorizontalHandlerFactory.instance
            };
            DefaultSlotInsertHorizontalHandlerFactory.prototype
                .createMultipleDropHandler = function(slot) {
                    return new Automation.InsertSlotHorizontalMultiDropHandler(slot)
                };
            DefaultSlotInsertHorizontalHandlerFactory.prototype.createDropHandler = function(currentActivity) {
                switch (currentActivity.getActivityTypeId()) {
                default:
                    return new Automation.DefaultInsertSlotHorizontalDropHandler(currentActivity)
                }
            };
            DefaultSlotInsertHorizontalHandlerFactory.prototype
                .createClickHandler = function(currentActivity) { return null };
            DefaultSlotInsertHorizontalHandlerFactory.prototype
                .createDblClickHandler = function(currentActivity) { throw new Error("Operation not implemented") };
            DefaultSlotInsertHorizontalHandlerFactory.prototype
                .createKeyDownHandler = function(currentActivity) { return null };
            DefaultSlotInsertHorizontalHandlerFactory.prototype
                .createFocusHandler = function(currentActivity) { return null };
            DefaultSlotInsertHorizontalHandlerFactory.prototype
                .createBlurHandler = function(currentActivity) { return null };
            DefaultSlotInsertHorizontalHandlerFactory.prototype
                .createContextHandler = function(currentActivity) { return null };
            DefaultSlotInsertHorizontalHandlerFactory.instance = null;
            return DefaultSlotInsertHorizontalHandlerFactory
        }();
        Automation.DefaultSlotInsertHorizontalHandlerFactory = DefaultSlotInsertHorizontalHandlerFactory
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var DefaultSlotInsertVerticalHandlerFactory = function() {
            function DefaultSlotInsertVerticalHandlerFactory() {
                if (DefaultSlotInsertVerticalHandlerFactory
                    .instance)
                    throw new
                        Error("Error: Instantiantion failed: Use DefaultSlotInsertVerticalHandlerFactory.getInstance()")
            }

            DefaultSlotInsertVerticalHandlerFactory.getInstance = function() {
                if (DefaultSlotInsertVerticalHandlerFactory
                    .instance ==
                    null)
                    DefaultSlotInsertVerticalHandlerFactory.instance = new DefaultSlotInsertVerticalHandlerFactory;
                return DefaultSlotInsertVerticalHandlerFactory.instance
            };
            DefaultSlotInsertVerticalHandlerFactory.prototype.createDropHandler = function(currentActivity) {
                switch (currentActivity.getActivityTypeId()) {
                default:
                    return new Automation.DefaultInsertSlotVerticalDropHandler(currentActivity)
                }
            };
            DefaultSlotInsertVerticalHandlerFactory.prototype
                .createMultipleDropHandler = function(slot) {
                    return new Automation.InsertSlotHorizontalMultiDropHandler(slot)
                };
            DefaultSlotInsertVerticalHandlerFactory.prototype
                .createClickHandler = function(currentActivity) { return null };
            DefaultSlotInsertVerticalHandlerFactory.prototype
                .createDblClickHandler = function(currentActivity) { throw new Error("Operation not implemented") };
            DefaultSlotInsertVerticalHandlerFactory.prototype
                .createKeyDownHandler = function(currentActivity) { return null };
            DefaultSlotInsertVerticalHandlerFactory.prototype
                .createFocusHandler = function(currentActivity) { return null };
            DefaultSlotInsertVerticalHandlerFactory.prototype
                .createBlurHandler = function(currentActivity) { return null };
            DefaultSlotInsertVerticalHandlerFactory.prototype
                .createContextHandler = function(currentActivity) { return null };
            DefaultSlotInsertVerticalHandlerFactory.instance = null;
            return DefaultSlotInsertVerticalHandlerFactory
        }();
        Automation.DefaultSlotInsertVerticalHandlerFactory = DefaultSlotInsertVerticalHandlerFactory
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var DefaultSlotIconHolderHandler = function(_super) {
            __extends(DefaultSlotIconHolderHandler, _super);

            function DefaultSlotIconHolderHandler() { _super.apply(this, arguments) }

            DefaultSlotIconHolderHandler.prototype.drop = function(droppedActivityType) {
                var deferred = $.Deferred();
                deferred.resolve();
                return deferred.promise()
            };
            return DefaultSlotIconHolderHandler
        }(Automation.AbstractActivityDropHandler);
        Automation.DefaultSlotIconHolderHandler = DefaultSlotIconHolderHandler
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var DefaultSlotIconHolderHandlerFactory = function() {
            function DefaultSlotIconHolderHandlerFactory() {
                if (DefaultSlotIconHolderHandlerFactory
                    .instance)
                    throw new
                        Error("Error: Instantiantion failed: Use DefaultSlotIconHolderHandlerFactory.getInstance()")
            }

            DefaultSlotIconHolderHandlerFactory.getInstance = function() {
                if (DefaultSlotIconHolderHandlerFactory
                    .instance ==
                    null) DefaultSlotIconHolderHandlerFactory.instance = new DefaultSlotIconHolderHandlerFactory;
                return DefaultSlotIconHolderHandlerFactory.instance
            };
            DefaultSlotIconHolderHandlerFactory.prototype
                .createMultipleDropHandler = function(slot) {
                    return new Automation.DefaultActivityMultiDropHandler(slot)
                };
            DefaultSlotIconHolderHandlerFactory.prototype.createDropHandler = function(currentActivity) {
                switch (currentActivity.getActivityTypeId()) {
                default:
                    return new Automation.DefaultSlotIconHolderHandler(currentActivity)
                }
            };
            DefaultSlotIconHolderHandlerFactory.prototype
                .createClickHandler = function(currentActivity) { return null };
            DefaultSlotIconHolderHandlerFactory.prototype
                .createDblClickHandler = function(currentActivity) { throw new Error("Operation not implemented") };
            DefaultSlotIconHolderHandlerFactory.prototype
                .createKeyDownHandler = function(currentActivity) { return null };
            DefaultSlotIconHolderHandlerFactory.prototype
                .createFocusHandler = function(currentActivity) { return null };
            DefaultSlotIconHolderHandlerFactory.prototype.createBlurHandler = function(currentActivity) { return null };
            DefaultSlotIconHolderHandlerFactory.prototype
                .createContextHandler = function(currentActivity) { return null };
            DefaultSlotIconHolderHandlerFactory.instance = null;
            return DefaultSlotIconHolderHandlerFactory
        }();
        Automation.DefaultSlotIconHolderHandlerFactory = DefaultSlotIconHolderHandlerFactory
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var DefaultSlotHandlerProvider = function() {
            function DefaultSlotHandlerProvider() {}

            DefaultSlotHandlerProvider.prototype.createFactory = function(slotType) {
                switch (slotType) {
                case Automation.SlotType.TileHolder:
                    return Automation.DefaultSlotTileHolderHandlerFactory.getInstance();
                case Automation.SlotType.InsertHorizontal:
                    return Automation.DefaultSlotInsertHorizontalHandlerFactory.getInstance();
                case Automation.SlotType.InsertVertical:
                    return Automation.DefaultSlotInsertVerticalHandlerFactory.getInstance();
                case Automation.SlotType.IconHolder:
                    return Automation.DefaultSlotIconHolderHandlerFactory.getInstance();
                default:
                    throw Error("Slot type not supported.")
                }
            };
            DefaultSlotHandlerProvider.prototype.createDropHandler = function(slotModel) {
                var slotHandlerFactory = this.createFactory(slotModel.getSlotType());
                return slotHandlerFactory.createDropHandler(slotModel.getActivity())
            };
            DefaultSlotHandlerProvider.prototype.createMultipleDropHandler = function(slotModel) {
                var slotHandlerFactory = this.createFactory(slotModel.getSlotType());
                return slotHandlerFactory.createMultipleDropHandler(slotModel)
            };
            DefaultSlotHandlerProvider.prototype.createClickHandler = function(slotModel) {
                var slotHandlerFactory = this.createFactory(slotModel.getSlotType());
                return slotHandlerFactory.createClickHandler(slotModel.getActivity())
            };
            DefaultSlotHandlerProvider.prototype.createDblClickHandler = function(slotModel) {
                var slotHandlerFactory = this.createFactory(slotModel.getSlotType());
                return slotHandlerFactory.createDblClickHandler(slotModel.getActivity())
            };
            DefaultSlotHandlerProvider.prototype.createKeyDownHandler = function(slotModel) {
                var slotHandlerFactory = this.createFactory(slotModel.getSlotType());
                return slotHandlerFactory.createKeyDownHandler(slotModel.getActivity())
            };
            DefaultSlotHandlerProvider.prototype.createFocusHandler = function(slotModel) {
                var slotHandlerFactory = this.createFactory(slotModel.getSlotType());
                return slotHandlerFactory.createFocusHandler(slotModel.getActivity())
            };
            DefaultSlotHandlerProvider.prototype.createBlurHandler = function(slotModel) {
                var slotHandlerFactory = this.createFactory(slotModel.getSlotType());
                return slotHandlerFactory.createBlurHandler(slotModel.getActivity())
            };
            DefaultSlotHandlerProvider.prototype.createContextHandler = function(slotModel) {
                var slotHandlerFactory = this.createFactory(slotModel.getSlotType());
                return slotHandlerFactory.createContextHandler(slotModel.getActivity())
            };
            return DefaultSlotHandlerProvider
        }();
        Automation.DefaultSlotHandlerProvider = DefaultSlotHandlerProvider
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var DefaultPropertyPanelViewKeyDownHandler = function() {
            function DefaultPropertyPanelViewKeyDownHandler(currentActivity) { this.currentActivity = currentActivity }

            DefaultPropertyPanelViewKeyDownHandler.prototype.keyDown = function(element, event) {};
            return DefaultPropertyPanelViewKeyDownHandler
        }();
        Automation.DefaultPropertyPanelViewKeyDownHandler = DefaultPropertyPanelViewKeyDownHandler
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var DefaultPropertyPanelActionHandlerProvider = function() {
            function DefaultPropertyPanelActionHandlerProvider() {
                if (DefaultPropertyPanelActionHandlerProvider
                    .instance)
                    throw new Error("Error: Instantiantion failed: Use PropertyPanelViewHandlerFactory.getInstance()")
            }

            DefaultPropertyPanelActionHandlerProvider.getInstance = function() {
                if (DefaultPropertyPanelActionHandlerProvider
                    .instance ==
                    null)
                    DefaultPropertyPanelActionHandlerProvider.instance = new DefaultPropertyPanelActionHandlerProvider;
                return DefaultPropertyPanelActionHandlerProvider.instance
            };
            DefaultPropertyPanelActionHandlerProvider.prototype
                .createKeyDownHandler = function(currentActivity) {
                    return new Automation.DefaultPropertyPanelViewKeyDownHandler(currentActivity)
                };
            DefaultPropertyPanelActionHandlerProvider.instance = null;
            return DefaultPropertyPanelActionHandlerProvider
        }();
        Automation.DefaultPropertyPanelActionHandlerProvider = DefaultPropertyPanelActionHandlerProvider
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var AbstractSlotGenerator = function() {
            function AbstractSlotGenerator(activity) { this.activity = activity }

            AbstractSlotGenerator.prototype.generateSlot = function() { throw new Error("method is abstract") };
            return AbstractSlotGenerator
        }();
        Automation.AbstractSlotGenerator = AbstractSlotGenerator
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var DefaultSlotTileHolderGenerator = function(_super) {
            __extends(DefaultSlotTileHolderGenerator, _super);

            function DefaultSlotTileHolderGenerator() { _super.apply(this, arguments) }

            DefaultSlotTileHolderGenerator.prototype.generateSlot = function() {
                var slotView = new Automation.SlotTileHolderView;
                slotView.model = new Automation.SlotModel(this.activity);
                slotView.initializeSlot();
                return slotView
            };
            return DefaultSlotTileHolderGenerator
        }(Automation.AbstractSlotGenerator);
        Automation.DefaultSlotTileHolderGenerator = DefaultSlotTileHolderGenerator
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var SlotTileHolderGeneratorFactory = function() {
            function SlotTileHolderGeneratorFactory() {}

            SlotTileHolderGeneratorFactory.prototype.createSlotGenerator = function(activity) {
                switch (activity.getActivityTypeId()) {
                default:
                    return new Automation.DefaultSlotTileHolderGenerator(activity)
                }
            };
            return SlotTileHolderGeneratorFactory
        }();
        Automation.SlotTileHolderGeneratorFactory = SlotTileHolderGeneratorFactory
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var InsertSlotHorizontalView = function(_super) {
            __extends(InsertSlotHorizontalView, _super);

            function InsertSlotHorizontalView() { _super.apply(this, arguments) }

            InsertSlotHorizontalView.prototype.render = function() {
                this.$el.addClass(InsertSlotHorizontalView.className);
                var layoutProperties = Automation.CurrentAutomationControl.settings.getLayoutProperties(),
                    positionCalculator = new Automation.PositionCalculator(layoutProperties),
                    width = layoutProperties.getWidth(),
                    height = layoutProperties.getHeight(),
                    top = positionCalculator.computeTop(this.model.getActivity().getRow()),
                    left = positionCalculator.computeLeft(this.model.getActivity().getCol() - 1) +
                        width +
                        layoutProperties.getInsertSlotHorizontalOffset();
                this.$el.css("top", top + "px");
                this.$el.css(Automation.GetLeftAlignmentAttributeName(), left + "px");
                this.$el.css("position", "");
                return this
            };
            InsertSlotHorizontalView.className = "slotInsertHorizontal";
            InsertSlotHorizontalView.supportedEvents = Automation.SlotBase.supportedEvents;
            return InsertSlotHorizontalView
        }(Automation.SlotBase);
        Automation.InsertSlotHorizontalView = InsertSlotHorizontalView
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var DefaultSlotInsertHorizontalGenerator = function(_super) {
            __extends(DefaultSlotInsertHorizontalGenerator, _super);

            function DefaultSlotInsertHorizontalGenerator() { _super.apply(this, arguments) }

            DefaultSlotInsertHorizontalGenerator.prototype.generateSlot = function() {
                var slotView = new Automation.InsertSlotHorizontalView;
                slotView.model = new Automation.SlotModel(this.activity, Automation.SlotType.InsertHorizontal);
                slotView.initializeSlot();
                return slotView
            };
            return DefaultSlotInsertHorizontalGenerator
        }(Automation.AbstractSlotGenerator);
        Automation.DefaultSlotInsertHorizontalGenerator = DefaultSlotInsertHorizontalGenerator
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var EmptySlotInsertHorizontalGenerator = function(_super) {
            __extends(EmptySlotInsertHorizontalGenerator, _super);

            function EmptySlotInsertHorizontalGenerator() { _super.apply(this, arguments) }

            EmptySlotInsertHorizontalGenerator.prototype.generateSlot = function() { return null };
            return EmptySlotInsertHorizontalGenerator
        }(Automation.AbstractSlotGenerator);
        Automation.EmptySlotInsertHorizontalGenerator = EmptySlotInsertHorizontalGenerator
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var SlotInsertHorizontalGeneratorFactory = function() {
            function SlotInsertHorizontalGeneratorFactory() {}

            SlotInsertHorizontalGeneratorFactory.prototype.createSlotGenerator = function(activity) {
                switch (activity.getActivityTypeId()) {
                case Automation.ActivityType.Empty:
                    return new Automation.EmptySlotInsertHorizontalGenerator(activity);
                default:
                    return new Automation.DefaultSlotInsertHorizontalGenerator(activity)
                }
            };
            return SlotInsertHorizontalGeneratorFactory
        }();
        Automation.SlotInsertHorizontalGeneratorFactory = SlotInsertHorizontalGeneratorFactory
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var InsertSlotVerticalView = function(_super) {
            __extends(InsertSlotVerticalView, _super);

            function InsertSlotVerticalView() { _super.apply(this, arguments) }

            InsertSlotVerticalView.prototype.render = function() {
                this.$el.addClass(InsertSlotVerticalView.className);
                var layoutProperties = Automation.CurrentAutomationControl.settings.getLayoutProperties(),
                    positionCalculator = new Automation.PositionCalculator(layoutProperties),
                    width = layoutProperties.getWidth(),
                    height = layoutProperties.getHeight(),
                    top = positionCalculator.computeTop(this.model.getActivity().getRow()) +
                        height +
                        layoutProperties.getInsertSlotVerticalOffset(),
                    left = positionCalculator.computeLeft(this.model.getActivity().getCol());
                this.$el.css("top", top + "px");
                this.$el.css(Automation.GetLeftAlignmentAttributeName(), left + "px");
                this.$el.css("position", "");
                return this
            };
            InsertSlotVerticalView.className = "slotInsertVertical";
            InsertSlotVerticalView.supportedEvents = Automation.SlotBase.supportedEvents;
            return InsertSlotVerticalView
        }(Automation.SlotBase);
        Automation.InsertSlotVerticalView = InsertSlotVerticalView
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var DefaultSlotInsertVerticalGenerator = function(_super) {
            __extends(DefaultSlotInsertVerticalGenerator, _super);

            function DefaultSlotInsertVerticalGenerator() { _super.apply(this, arguments) }

            DefaultSlotInsertVerticalGenerator.prototype.generateSlot = function() {
                var slotView = new Automation.InsertSlotVerticalView;
                slotView.model = new Automation.SlotModel(this.activity, Automation.SlotType.InsertVertical);
                slotView.initializeSlot();
                return slotView
            };
            return DefaultSlotInsertVerticalGenerator
        }(Automation.AbstractSlotGenerator);
        Automation.DefaultSlotInsertVerticalGenerator = DefaultSlotInsertVerticalGenerator
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var EmptySlotInsertVerticalGenerator = function(_super) {
            __extends(EmptySlotInsertVerticalGenerator, _super);

            function EmptySlotInsertVerticalGenerator() { _super.apply(this, arguments) }

            EmptySlotInsertVerticalGenerator.prototype.generateSlot = function() { return null };
            return EmptySlotInsertVerticalGenerator
        }(Automation.AbstractSlotGenerator);
        Automation.EmptySlotInsertVerticalGenerator = EmptySlotInsertVerticalGenerator
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var SlotInsertVerticalGeneratorFactory = function() {
            function SlotInsertVerticalGeneratorFactory() {}

            SlotInsertVerticalGeneratorFactory.prototype.createSlotGenerator = function(activity) {
                switch (activity.getActivityTypeId()) {
                case Automation.ActivityType.Empty:
                    return new Automation.EmptySlotInsertVerticalGenerator(activity);
                default:
                    return new Automation.DefaultSlotInsertVerticalGenerator(activity)
                }
            };
            return SlotInsertVerticalGeneratorFactory
        }();
        Automation.SlotInsertVerticalGeneratorFactory = SlotInsertVerticalGeneratorFactory
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var SlotIconHolderView = function(_super) {
            __extends(SlotIconHolderView, _super);

            function SlotIconHolderView() { _super.apply(this, arguments) }

            SlotIconHolderView.prototype.render = function() {
                this.$el.addClass(SlotIconHolderView.className);
                var layoutProperties = Automation.CurrentAutomationControl.settings.getLayoutProperties(),
                    positionCalculator = new Automation.PositionCalculator(layoutProperties),
                    width = layoutProperties.getWidth(),
                    top = positionCalculator.computeTop(this.model.getActivity().getRow()),
                    left = positionCalculator.computeLeft(this.model.getActivity().getCol() - 1) + width;
                this.$el.css("top", top + "px");
                this.$el.css(Automation.GetLeftAlignmentAttributeName(), left + "px");
                this.$el.css("position", "");
                var icon = Automation.CurrentAutomationControl.settings.getIconFactory()
                    .createIcon(this.model.getIconType());
                this.$el.append(icon);
                return this
            };
            SlotIconHolderView.className = "slotIconHolder";
            SlotIconHolderView.supportedEvents = Automation.SlotBase.supportedEvents;
            return SlotIconHolderView
        }(Automation.SlotBase);
        Automation.SlotIconHolderView = SlotIconHolderView
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var DefaultSlotIconHolderGenerator = function(_super) {
            __extends(DefaultSlotIconHolderGenerator, _super);

            function DefaultSlotIconHolderGenerator() { _super.apply(this, arguments) }

            DefaultSlotIconHolderGenerator.prototype.generateSlot = function() { return null };
            return DefaultSlotIconHolderGenerator
        }(Automation.AbstractSlotGenerator);
        Automation.DefaultSlotIconHolderGenerator = DefaultSlotIconHolderGenerator
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var SlotIconHolderGeneratorFactory = function() {
            function SlotIconHolderGeneratorFactory() {}

            SlotIconHolderGeneratorFactory.prototype
                .createSlotGenerator = function(activity) {
                    return new Automation.DefaultSlotIconHolderGenerator(activity)
                };
            return SlotIconHolderGeneratorFactory
        }();
        Automation.SlotIconHolderGeneratorFactory = SlotIconHolderGeneratorFactory
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var DefaultSlotGeneratorProvider = function() {
            function DefaultSlotGeneratorProvider() {}

            DefaultSlotGeneratorProvider.prototype.createGeneratorFactory = function(slotType) {
                switch (slotType) {
                case Automation.SlotType.TileHolder:
                    return new Automation.SlotTileHolderGeneratorFactory;
                case Automation.SlotType.InsertHorizontal:
                    return new Automation.SlotInsertHorizontalGeneratorFactory;
                case Automation.SlotType.InsertVertical:
                    return new Automation.SlotInsertVerticalGeneratorFactory;
                case Automation.SlotType.IconHolder:
                    return new Automation.SlotIconHolderGeneratorFactory;
                default:
                    return new Automation.SlotTileHolderGeneratorFactory
                }
            };
            DefaultSlotGeneratorProvider.prototype.generateSlotsForActivity = function(activity) {
                for (var slotTypes = [
                             Automation.SlotType.TileHolder, Automation.SlotType.InsertHorizontal, Automation.SlotType
                             .InsertVertical, Automation.SlotType.IconHolder
                         ],
                    slotsList = [],
                    i = 0;
                    i < slotTypes.length;
                    i++) {
                    var slotGeneratorFactory = this.createGeneratorFactory(slotTypes[i]),
                        slot = slotGeneratorFactory.createSlotGenerator(activity).generateSlot();
                    slot != null && slotsList.push(slot)
                }
                return slotsList
            };
            return DefaultSlotGeneratorProvider
        }();
        Automation.DefaultSlotGeneratorProvider = DefaultSlotGeneratorProvider
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    (function(Automation) {
        var DefaultSettings = function() {
            function DefaultSettings() {
                this.layoutProperties = null;
                this.activityDefinitionFactory = null;
                this.libraryNodesFactory = null;
                this.slotHandlerProvider = null;
                this.propertyPanelViewHandlerProvider = null;
                this.tileItemMenu = null;
                this.slotContextMenu = null;
                this.propertyViewFactory = null;
                this.subsequentActivityGenerator = null;
                this.slotGeneratorProvider = null;
                this.iconFactory = null;
                this.tileInformationFactory = null;
                this.statusMessageResolver = null;
                this.flyoutContentProvider = null;
                this.labelKeyValuePhraseCollection = null;
                this.activityPositionCalculatorFactory = null;
                this.statusCodeProviderFactory = null;
                this.decoratorFactory = null;
                this.activityDropController = null;
                this.renderRTL = false;
                this.dropValidator = null;
                this.lineConnectorProviderFactory = null;
                this.connectorDOMProvider = null
            }

            DefaultSettings.prototype.initialize = function() {
                this.layoutProperties = new Automation.DefaultLayoutProperties;
                this.activityDefinitionFactory = new Automation.DefaultActivityDefinitionFactory;
                this.libraryNodesFactory = new Automation.DefaultLibraryNodesFactory;
                this.slotHandlerProvider = new Automation.DefaultSlotHandlerProvider;
                this.propertyPanelViewHandlerProvider = new Automation.DefaultPropertyPanelActionHandlerProvider;
                this.tileItemMenu = new Automation.DefaultFlyoutControl(Automation.CssClass.TileItemsMenu);
                this.slotContextMenu = new Automation.DefaultFlyoutControl(Automation.CssClass.ContextMenu);
                this.propertyViewFactory = new Automation.AbstractPropertyViewFactory;
                this.subsequentActivityGenerator = new Automation.DefaultSubsequentActivityGenerator;
                this.slotGeneratorProvider = new Automation.DefaultSlotGeneratorProvider;
                this.iconFactory = new Automation.DefaultIconFactory;
                this.tileInformationFactory = new Automation.DefaultTileInformationFactory;
                this.statusMessageResolver = new Automation.DefaultStatusMessageResolver;
                this.flyoutContentProvider = new Automation.DefaultFlyoutContentProvider;
                this.activityPositionCalculatorFactory = new Automation.DefaultActivityPositionCalculatorFactory;
                this.labelKeyValuePhraseCollection = new Automation.DefaultLabelPhraseDictionaryCollection;
                this.statusCodeProviderFactory = new Automation.DefaultStatusCodeProviderFactory;
                this.lineConnectorProviderFactory = new Automation.DefaultLineConnectorProviderFactory;
                this.connectorDOMProvider = new Automation.DefaultConnectorDOMProvider;
                this.decoratorFactory = new Automation.DefaultDecoratorFactory;
                this.activityDropController = new Automation.ActivityDropController;
                this.dropValidator = new Automation.DefaultDropValidator
            };
            DefaultSettings.prototype.getLayoutProperties = function() { return this.layoutProperties };
            DefaultSettings.prototype
                .getActivityDefinitionFactory = function() { return this.activityDefinitionFactory };
            DefaultSettings.prototype
                .setActivityDefinitionFactory = function(value) { this.activityDefinitionFactory = value };
            DefaultSettings.prototype.getLibraryNodesFactory = function() { return this.libraryNodesFactory };
            DefaultSettings.prototype.setLibraryNodesFactory = function(value) { this.libraryNodesFactory = value };
            DefaultSettings.prototype.getSlotHandlerProvider = function() { return this.slotHandlerProvider };
            DefaultSettings.prototype
                .getPropertyPanelActionHandlerProvider = function() { return this.propertyPanelViewHandlerProvider };
            DefaultSettings.prototype
                .setPropertyPanelActionHandlerProvider = function(value) {
                    this.propertyPanelViewHandlerProvider = value
                };
            DefaultSettings.prototype.getTileItemsMenu = function() { return this.tileItemMenu };
            DefaultSettings.prototype.getSlotContextMenu = function() { return this.slotContextMenu };
            DefaultSettings.prototype.getPropertyViewFactory = function() { return this.propertyViewFactory };
            DefaultSettings.prototype.setPropertyViewFactory = function(value) { this.propertyViewFactory = value };
            DefaultSettings.prototype
                .getSubsequentActivityGenerator = function() { return this.subsequentActivityGenerator };
            DefaultSettings.prototype
                .setSubsequentActivityGenerator = function(subsequentActivityGenerator) {
                    this.subsequentActivityGenerator = subsequentActivityGenerator
                };
            DefaultSettings.prototype.getSlotGeneratorProvider = function() { return this.slotGeneratorProvider };
            DefaultSettings.prototype.setSlotGeneratorProvider = function(value) { this.slotGeneratorProvider = value };
            DefaultSettings.prototype.getIconFactory = function() { return this.iconFactory };
            DefaultSettings.prototype.setIconFactory = function(value) { this.iconFactory = value };
            DefaultSettings.prototype.getTileInformationFactory = function() { return this.tileInformationFactory };
            DefaultSettings.prototype
                .setTileInformationFactory = function(value) { this.tileInformationFactory = value };
            DefaultSettings.prototype
                .getActivityPositionCalculatorFactory = function() { return this.activityPositionCalculatorFactory };
            DefaultSettings.prototype
                .setActivityPositionCalculatorFactory = function(value) {
                    this.activityPositionCalculatorFactory = value
                };
            DefaultSettings.prototype.getHelpPageLink = function() { return this.helpPageLink };
            DefaultSettings.prototype.getStatusMessageResolver = function() { return this.statusMessageResolver };
            DefaultSettings.prototype
                .setStatusMessageResolver = function(resolver) { this.statusMessageResolver = resolver };
            DefaultSettings.prototype.getFlyoutContentProvider = function() { return this.flyoutContentProvider };
            DefaultSettings.prototype
                .setFlyoutContentProvider = function(provider) { this.flyoutContentProvider = provider };
            DefaultSettings.prototype
                .getLabelKeyValuePhraseCollection = function() { return this.labelKeyValuePhraseCollection };
            DefaultSettings.prototype
                .setLabelKeyValuePhraseCollection = function(value) { this.labelKeyValuePhraseCollection = value };
            DefaultSettings.prototype.setSlotHandlerProvider = function(value) { this.slotHandlerProvider = value };
            DefaultSettings.prototype.setRenderRTL = function(value) { this.renderRTL = value };
            DefaultSettings.prototype.getRenderRTL = function() { return this.renderRTL };
            DefaultSettings.prototype
                .setStatusCodeProviderFactory = function(value) { this.statusCodeProviderFactory = value };
            DefaultSettings.prototype
                .getStatusCodeProviderFactory = function() { return this.statusCodeProviderFactory };
            DefaultSettings.prototype
                .setLineConnectorProviderFactory = function(value) { this.lineConnectorProviderFactory = value };
            DefaultSettings.prototype
                .getLineConnectorProviderFactory = function() { return this.lineConnectorProviderFactory };
            DefaultSettings.prototype.setConnectorDOMProvider = function(value) { this.connectorDOMProvider = value };
            DefaultSettings.prototype.getConnectorDOMProvider = function() { return this.connectorDOMProvider };
            DefaultSettings.prototype.setDecoratorFactory = function(value) { this.decoratorFactory = value };
            DefaultSettings.prototype.getDecoratorFactory = function() { return this.decoratorFactory };
            DefaultSettings.prototype
                .setActivityDropController = function(value) { this.activityDropController = value };
            DefaultSettings.prototype.getActivityDropController = function() { return this.activityDropController };
            DefaultSettings.prototype.setDropValidator = function(dropValidator) { this.dropValidator = dropValidator };
            DefaultSettings.prototype.getDropValidator = function() { return this.dropValidator };
            return DefaultSettings
        }();
        Automation.DefaultSettings = DefaultSettings
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation
})(Mscrm || (Mscrm = {}));
Type.registerNamespace("Mscrm.ProcessAutomation");
Mscrm.ProcessAutomation.IBusinessProcessConditionActivity = function() {};
Mscrm.ProcessAutomation.IBusinessProcessConditionActivity
    .registerInterface("Mscrm.ProcessAutomation.IBusinessProcessConditionActivity");
Mscrm.ProcessAutomation.IStageActivity = function() {};
Mscrm.ProcessAutomation.IStageActivity.registerInterface("Mscrm.ProcessAutomation.IStageActivity");
Mscrm.ProcessAutomation.IBusinessProcessConditionEditPropertyViewModel = function() {};
Mscrm.ProcessAutomation.IBusinessProcessConditionEditPropertyViewModel
    .registerInterface("Mscrm.ProcessAutomation.IBusinessProcessConditionEditPropertyViewModel");
Mscrm.ProcessAutomation.IBusinessProcessConditionPropertyViewModel = function() {};
Mscrm.ProcessAutomation.IBusinessProcessConditionPropertyViewModel
    .registerInterface("Mscrm.ProcessAutomation.IBusinessProcessConditionPropertyViewModel");
Mscrm.ProcessAutomation.IConditionDisplayValueBuilder = function() {};
Mscrm.ProcessAutomation.IConditionDisplayValueBuilder
    .registerInterface("Mscrm.ProcessAutomation.IConditionDisplayValueBuilder");
Mscrm.ProcessAutomation.IConditionBranchHtmlBuilder = function() {};
Mscrm.ProcessAutomation.IConditionBranchHtmlBuilder
    .registerInterface("Mscrm.ProcessAutomation.IConditionBranchHtmlBuilder");
Mscrm.ProcessAutomation.IEditableConditionBusinessProcessPropertyHtmlBuilder = function() {};
Mscrm.ProcessAutomation.IEditableConditionBusinessProcessPropertyHtmlBuilder
    .registerInterface("Mscrm.ProcessAutomation.IEditableConditionBusinessProcessPropertyHtmlBuilder");
Mscrm.ProcessAutomation.IEntityMetadataProvider = function() {};
Mscrm.ProcessAutomation.IEntityMetadataProvider.registerInterface("Mscrm.ProcessAutomation.IEntityMetadataProvider");
Mscrm.ProcessAutomation.IRemoteEntityMetadataProvider = function() {};
Mscrm.ProcessAutomation.IRemoteEntityMetadataProvider
    .registerInterface("Mscrm.ProcessAutomation.IRemoteEntityMetadataProvider");
Mscrm.ProcessAutomation.IProcessObjectModelMetadataProvider = function() {};
Mscrm.ProcessAutomation.IProcessObjectModelMetadataProvider
    .registerInterface("Mscrm.ProcessAutomation.IProcessObjectModelMetadataProvider");
Mscrm.ProcessAutomation.IEntityCacheManager = function() {};
Mscrm.ProcessAutomation.IEntityCacheManager.registerInterface("Mscrm.ProcessAutomation.IEntityCacheManager");
Mscrm.ProcessAutomation.IEntityMetadata = function() {};
Mscrm.ProcessAutomation.IEntityMetadata.registerInterface("Mscrm.ProcessAutomation.IEntityMetadata");
Mscrm.ProcessAutomation.IEntityMetadataCache = function() {};
Mscrm.ProcessAutomation.IEntityMetadataCache.registerInterface("Mscrm.ProcessAutomation.IEntityMetadataCache");
Mscrm.ProcessAutomation.IActionCommand = function() {};
Mscrm.ProcessAutomation.IActionCommand.registerInterface("Mscrm.ProcessAutomation.IActionCommand");
Mscrm.ProcessAutomation.IProcessDesignerActivitiesStatusInitializer = function() {};
Mscrm.ProcessAutomation.IProcessDesignerActivitiesStatusInitializer
    .registerInterface("Mscrm.ProcessAutomation.IProcessDesignerActivitiesStatusInitializer");
Mscrm.ProcessAutomation.ICachedStepDisplayInfoProvider = function() {};
Mscrm.ProcessAutomation.ICachedStepDisplayInfoProvider
    .registerInterface("Mscrm.ProcessAutomation.ICachedStepDisplayInfoProvider");
Mscrm.ProcessAutomation.IPolylineCalculator = function() {};
Mscrm.ProcessAutomation.IPolylineCalculator.registerInterface("Mscrm.ProcessAutomation.IPolylineCalculator");
Mscrm.ProcessAutomation.IProcessActivitiesStatusInitializer = function() {};
Mscrm.ProcessAutomation.IProcessActivitiesStatusInitializer
    .registerInterface("Mscrm.ProcessAutomation.IProcessActivitiesStatusInitializer");
Mscrm.ProcessAutomation.IProcessActivityDefinitionModel = function() {};
Mscrm.ProcessAutomation.IProcessActivityDefinitionModel
    .registerInterface("Mscrm.ProcessAutomation.IProcessActivityDefinitionModel");
Mscrm.ProcessAutomation.IProcessSettings = function() {};
Mscrm.ProcessAutomation.IProcessSettings.registerInterface("Mscrm.ProcessAutomation.IProcessSettings");
Mscrm.ProcessAutomation.IReadControl = function() {};
Mscrm.ProcessAutomation.IReadControl.registerInterface("Mscrm.ProcessAutomation.IReadControl");
Mscrm.ProcessAutomation.IReadLookupControl = function() {};
Mscrm.ProcessAutomation.IReadLookupControl.registerInterface("Mscrm.ProcessAutomation.IReadLookupControl");
Mscrm.ProcessAutomation.IActivityTreeToProcessConverter = function() {};
Mscrm.ProcessAutomation.IActivityTreeToProcessConverter
    .registerInterface("Mscrm.ProcessAutomation.IActivityTreeToProcessConverter");
Mscrm.ProcessAutomation.IProcessToUIActivityCollectionVisitor = function() {};
Mscrm.ProcessAutomation.IProcessToUIActivityCollectionVisitor
    .registerInterface("Mscrm.ProcessAutomation.IProcessToUIActivityCollectionVisitor");
Mscrm.ProcessAutomation.IDefaultObjectGeneratorFactory = function() {};
Mscrm.ProcessAutomation.IDefaultObjectGeneratorFactory
    .registerInterface("Mscrm.ProcessAutomation.IDefaultObjectGeneratorFactory");
Mscrm.ProcessAutomation.IDefaultStepGenerator = function() {};
Mscrm.ProcessAutomation.IDefaultStepGenerator.registerInterface("Mscrm.ProcessAutomation.IDefaultStepGenerator");
Mscrm.ProcessAutomation.IMenuCommandFactory = function() {};
Mscrm.ProcessAutomation.IMenuCommandFactory.registerInterface("Mscrm.ProcessAutomation.IMenuCommandFactory");
Mscrm.ProcessAutomation.IProcessDesignerStatusCodeProvider = function() {};
Mscrm.ProcessAutomation.IProcessDesignerStatusCodeProvider
    .registerInterface("Mscrm.ProcessAutomation.IProcessDesignerStatusCodeProvider");
Mscrm.ProcessAutomation.IProcessDesignerStatusCodeProviderFactory = function() {};
Mscrm.ProcessAutomation.IProcessDesignerStatusCodeProviderFactory
    .registerInterface("Mscrm.ProcessAutomation.IProcessDesignerStatusCodeProviderFactory");
Mscrm.ProcessAutomation.IValidationStep = function() {};
Mscrm.ProcessAutomation.IValidationStep.registerInterface("Mscrm.ProcessAutomation.IValidationStep");
Mscrm.ProcessAutomation.IProcessValidator = function() {};
Mscrm.ProcessAutomation.IProcessValidator.registerInterface("Mscrm.ProcessAutomation.IProcessValidator");
Mscrm.ProcessAutomation.IValidationResult = function() {};
Mscrm.ProcessAutomation.IValidationResult.registerInterface("Mscrm.ProcessAutomation.IValidationResult");
Mscrm.ProcessAutomation.IConditionPropertyViewModel = function() {};
Mscrm.ProcessAutomation.IConditionPropertyViewModel
    .registerInterface("Mscrm.ProcessAutomation.IConditionPropertyViewModel");
Mscrm.ProcessAutomation.IDefaultPropertyCommandBarViewModel = function() {};
Mscrm.ProcessAutomation.IDefaultPropertyCommandBarViewModel
    .registerInterface("Mscrm.ProcessAutomation.IDefaultPropertyCommandBarViewModel");
Mscrm.ProcessAutomation.IPropertyCommandBarButton = function() {};
Mscrm.ProcessAutomation.IPropertyCommandBarButton
    .registerInterface("Mscrm.ProcessAutomation.IPropertyCommandBarButton");
Mscrm.ProcessAutomation.IPropertyCommandBarViewModel = function() {};
Mscrm.ProcessAutomation.IPropertyCommandBarViewModel
    .registerInterface("Mscrm.ProcessAutomation.IPropertyCommandBarViewModel");
Mscrm.ProcessAutomation.IPropertyCommandBarViewModelFactory = function() {};
Mscrm.ProcessAutomation.IPropertyCommandBarViewModelFactory
    .registerInterface("Mscrm.ProcessAutomation.IPropertyCommandBarViewModelFactory");
Mscrm.ProcessAutomation.IConditionPropertyEditViewModel = function() {};
Mscrm.ProcessAutomation.IConditionPropertyEditViewModel
    .registerInterface("Mscrm.ProcessAutomation.IConditionPropertyEditViewModel");
Mscrm.ProcessAutomation.IPropertyEditViewModel = function() {};
Mscrm.ProcessAutomation.IPropertyEditViewModel.registerInterface("Mscrm.ProcessAutomation.IPropertyEditViewModel");
Mscrm.ProcessAutomation.IPropertyViewModel = function() {};
Mscrm.ProcessAutomation.IPropertyViewModel.registerInterface("Mscrm.ProcessAutomation.IPropertyViewModel");
Mscrm.ProcessAutomation.IPropertyViewModelFactory = function() {};
Mscrm.ProcessAutomation.IPropertyViewModelFactory
    .registerInterface("Mscrm.ProcessAutomation.IPropertyViewModelFactory");
Mscrm.ProcessAutomation.IPropertyViewModelWithCommandBar = function() {};
Mscrm.ProcessAutomation.IPropertyViewModelWithCommandBar
    .registerInterface("Mscrm.ProcessAutomation.IPropertyViewModelWithCommandBar");
Mscrm.ProcessAutomation.ICanvasViewModel = function() {};
Mscrm.ProcessAutomation.ICanvasViewModel.registerInterface("Mscrm.ProcessAutomation.ICanvasViewModel");
Mscrm.ProcessAutomation.IProcessDesignerViewModel = function() {};
Mscrm.ProcessAutomation.IProcessDesignerViewModel
    .registerInterface("Mscrm.ProcessAutomation.IProcessDesignerViewModel");
Mscrm.ProcessAutomation.IViewModel = function() {};
Mscrm.ProcessAutomation.IViewModel.registerInterface("Mscrm.ProcessAutomation.IViewModel");
Mscrm.ProcessAutomation.ICommandBarViewModel = function() {};
Mscrm.ProcessAutomation.ICommandBarViewModel.registerInterface("Mscrm.ProcessAutomation.ICommandBarViewModel");
Mscrm.ProcessAutomation.IViewModelFactory = function() {};
Mscrm.ProcessAutomation.IViewModelFactory.registerInterface("Mscrm.ProcessAutomation.IViewModelFactory");
Mscrm.ProcessAutomation.IExpressionHtmlBuilderFactory = function() {};
Mscrm.ProcessAutomation.IExpressionHtmlBuilderFactory
    .registerInterface("Mscrm.ProcessAutomation.IExpressionHtmlBuilderFactory");
Mscrm.ProcessAutomation.IHtmlBuilder = function() {};
Mscrm.ProcessAutomation.IHtmlBuilder.registerInterface("Mscrm.ProcessAutomation.IHtmlBuilder");
Mscrm.ProcessAutomation.IPropertyCommandBarButtonView = function() {};
Mscrm.ProcessAutomation.IPropertyCommandBarButtonView
    .registerInterface("Mscrm.ProcessAutomation.IPropertyCommandBarButtonView");
Mscrm.ProcessAutomation.IPropertyCommandBarButtonViewFactory = function() {};
Mscrm.ProcessAutomation.IPropertyCommandBarButtonViewFactory
    .registerInterface("Mscrm.ProcessAutomation.IPropertyCommandBarButtonViewFactory");
Mscrm.ProcessAutomation.IPropertyCommandBarView = function() {};
Mscrm.ProcessAutomation.IPropertyCommandBarView.registerInterface("Mscrm.ProcessAutomation.IPropertyCommandBarView");
Mscrm.ProcessAutomation.IPropertyEditPanelView = function() {};
Mscrm.ProcessAutomation.IPropertyEditPanelView.registerInterface("Mscrm.ProcessAutomation.IPropertyEditPanelView");
Mscrm.ProcessAutomation.IPropertyPanelViewComponent = function() {};
Mscrm.ProcessAutomation.IPropertyPanelViewComponent
    .registerInterface("Mscrm.ProcessAutomation.IPropertyPanelViewComponent");
Mscrm.ProcessAutomation.IPropertyPanelViewComponentFactory = function() {};
Mscrm.ProcessAutomation.IPropertyPanelViewComponentFactory
    .registerInterface("Mscrm.ProcessAutomation.IPropertyPanelViewComponentFactory");
Mscrm.ProcessAutomation.IPropertyPanelViewComponentProvider = function() {};
Mscrm.ProcessAutomation.IPropertyPanelViewComponentProvider
    .registerInterface("Mscrm.ProcessAutomation.IPropertyPanelViewComponentProvider");
Mscrm.ProcessAutomation.IPropertyPanelScrollableCssClassProvider = function() {};
Mscrm.ProcessAutomation.IPropertyPanelScrollableCssClassProvider
    .registerInterface("Mscrm.ProcessAutomation.IPropertyPanelScrollableCssClassProvider");
Mscrm.ProcessAutomation.IConditionLegacyDialog = function() {};
Mscrm.ProcessAutomation.IConditionLegacyDialog.registerInterface("Mscrm.ProcessAutomation.IConditionLegacyDialog");
Mscrm.ProcessAutomation.IProcessLegacyDialog = function() {};
Mscrm.ProcessAutomation.IProcessLegacyDialog.registerInterface("Mscrm.ProcessAutomation.IProcessLegacyDialog");
Mscrm.ProcessAutomation.IProcessPropertyPanelViewWithCommandBar = function() {};
Mscrm.ProcessAutomation.IProcessPropertyPanelViewWithCommandBar
    .registerInterface("Mscrm.ProcessAutomation.IProcessPropertyPanelViewWithCommandBar");
Mscrm.ProcessAutomation.IProcessStatusViewFactory = function() {};
Mscrm.ProcessAutomation.IProcessStatusViewFactory
    .registerInterface("Mscrm.ProcessAutomation.IProcessStatusViewFactory");
Mscrm.ProcessAutomation.IProcessCanvasView = function() {};
Mscrm.ProcessAutomation.IProcessCanvasView.registerInterface("Mscrm.ProcessAutomation.IProcessCanvasView");
Mscrm.ProcessAutomation.IProcessDesignerView = function() {};
Mscrm.ProcessAutomation.IProcessDesignerView.registerInterface("Mscrm.ProcessAutomation.IProcessDesignerView");
Mscrm.ProcessAutomation.IView = function() {};
Mscrm.ProcessAutomation.IView.registerInterface("Mscrm.ProcessAutomation.IView");
Mscrm.ProcessAutomation.IProcessBodyView = function() {};
Mscrm.ProcessAutomation.IProcessBodyView.registerInterface("Mscrm.ProcessAutomation.IProcessBodyView");
Mscrm.ProcessAutomation.IProcessHeaderView = function() {};
Mscrm.ProcessAutomation.IProcessHeaderView.registerInterface("Mscrm.ProcessAutomation.IProcessHeaderView");
Mscrm.ProcessAutomation.IViewFactory = function() {};
Mscrm.ProcessAutomation.IViewFactory.registerInterface("Mscrm.ProcessAutomation.IViewFactory");
Mscrm.ProcessAutomation.IProcessAutomationControl = function() {};
Mscrm.ProcessAutomation.IProcessAutomationControl
    .registerInterface("Mscrm.ProcessAutomation.IProcessAutomationControl");
Mscrm.ProcessAutomation.IProcessInitializer = function() {};
Mscrm.ProcessAutomation.IProcessInitializer.registerInterface("Mscrm.ProcessAutomation.IProcessInitializer");
Mscrm.ProcessAutomation.ActionInitializer = function() {
    Mscrm.ProcessAutomation.ActionInitializer.initializeBase(this)
};
Mscrm.ProcessAutomation.ActionInitializer.actionInstance = function() {
    if (IsNull(Mscrm.ProcessAutomation.ProcessInitializer
        .$3)) Mscrm.ProcessAutomation.ProcessInitializer.$3 = new Mscrm.ProcessAutomation.ActionInitializer;
    return Mscrm.ProcessAutomation.ProcessInitializer.$3
};
Mscrm.ProcessAutomation.ActionInitializer.prototype = {
    initialize: function() {
        this.$0_0 = new Mscrm.ProcessAutomation.ProcessActionDesignerViewModel;
        this.$0_0.initialize();
        this.$G_0 = new Mscrm.ProcessAutomation
            .ProcessActionDesignerView(this.get_jQueryProxy().selectElement("processdesigner"));
        this.$G_0.set_dataContext(this.$0_0);
        this.$G_0.initialize()
    }
};
Mscrm.ProcessAutomation.ActionRuntimeInitializer = function() {
    Mscrm.ProcessAutomation.ActionRuntimeInitializer.initializeBase(this)
};
Mscrm.ProcessAutomation.ActionRuntimeInitializer.actionInstance = function() {
    if (IsNull(Mscrm.ProcessAutomation.ProcessInitializer
        .$3)) Mscrm.ProcessAutomation.ProcessInitializer.$3 = new Mscrm.ProcessAutomation.ActionRuntimeInitializer;
    return Mscrm.ProcessAutomation.ProcessInitializer.$3
};
Mscrm.ProcessAutomation.ActionRuntimeInitializer.prototype = {
    initialize: function() {
        this.$0_0 = new Mscrm.ProcessAutomation.ProcessActionDesignerViewModel;
        this.$0_0.initialize();
        this.$G_0 = new Mscrm.ProcessAutomation
            .ProcessActionRuntimeView(this.get_jQueryProxy().selectElement("processdesigner"));
        this.$G_0.set_dataContext(this.$0_0);
        this.$G_0.initialize()
    }
};
Mscrm.ProcessAutomation.BusinessProcessActivityType = function() {};
Mscrm.ProcessAutomation.BusinessProcessCssClass = function() {};
Mscrm.ProcessAutomation.BusinessProcessSettings = function() {
    Mscrm.ProcessAutomation.BusinessProcessSettings.initializeBase(this)
};
Mscrm.ProcessAutomation.BusinessProcessSettings.prototype = {
    initialize: function() {
        Mscrm.ProcessAutomation.Settings.prototype.initialize.call(this);
        this.setTileInformationFactory(new Mscrm.ProcessAutomation.BusinessProcessTileInformationFactory);
        this.setActivityDefinitionFactory(new Mscrm.ProcessAutomation.BusinessProcessActivityDefinitionFactory);
        this.setPropertyViewFactory(new Mscrm.ProcessAutomation.BusinessProcessPropertyViewFactory);
        this.setPropertyPanelViewComponentProvider(new Mscrm.ProcessAutomation
            .BusinessProcessPropertyPanelViewComponentProvider);
        this.setLibraryNodesFactory(new Mscrm.ProcessAutomation.BusinessProcessLibraryNodesFactory);
        this.setDropValidator(new Mscrm.ProcessAutomation.BusinessProcessDropValidator);
        this.$n_1 = new Mscrm.ProcessAutomation.DefaultBusinessProcessObjectGeneratorFactory;
        this.$n_1.set_processStep(this.$0_1.get_process());
        this.$1W_1 = new Mscrm.ProcessAutomation.BusinessProcessValidator;
        this.$1k_1 = new Mscrm.ProcessAutomation.BusinessProcessToUIActivityCollectionVisitor;
        this.$1Y_1 = new Mscrm.ProcessAutomation.BusinessProcessPropertyViewModelFactory;
        this.$c_1 = new Mscrm.ProcessAutomation.BusinessProcessPropertyPanelScrollableCssClassProvider;
        this.setPropertyViewFactory(new Mscrm.ProcessAutomation.BusinessProcessPropertyViewFactory)
    }
};
Mscrm.ProcessAutomation.BusinessProcessToUIActivityCollectionVisitor = function() {
    this.$1s_2 = {};
    this.$1T_2 = {};
    Mscrm.ProcessAutomation.BusinessProcessToUIActivityCollectionVisitor.initializeBase(this)
};
Mscrm.ProcessAutomation.BusinessProcessToUIActivityCollectionVisitor.prototype = {
    visitWorkflowStep: function(workflowStep) {
        this.$k_2 = new ProcessObjectModel.Visitors.BusinessProcessFlowVisitor;
        this.$k_2.visit(workflowStep);
        var $v_0 = this.createUIActivity(workflowStep, "bpf_root");
        this.$6_1 = $v_0;
        this.$8_1 = 0;
        for (var $v_1 = 0;
            $v_1 < workflowStep.get_Steps().get_Count();
            $v_1++
        ) workflowStep.get_Steps().get_item($v_1).apply(this)
    },
    visitStageStep: function(stageStep) {
        var $v_0 = stageStep.get_stageId(), $v_1 = !IsNull(this.$1s_2[$v_0]), $v_2;
        if (!$v_1) {
            $v_2 = this.$2f_2(stageStep, "stage");
            this.$1s_2[$v_0] = $v_2
        } else $v_2 = this.$1s_2[$v_0];
        this.$6_1 = $v_2;
        this.$8_1 = 0;
        if (!$v_1)
            for (var $v_3 = 0;
                $v_3 < stageStep.get_Steps().get_Count();
                ++$v_3
            ) stageStep.get_Steps().get_item($v_3).apply(this)
    },
    visitEntityStep: function(entityStep) {
        Mscrm.ProcessAutomation.ProcessToUIActivityCollectionVisitor.prototype.visitEntityStep.call(this, entityStep);
        for (var $v_0 = 0;
            $v_0 < entityStep.get_Steps().get_Count();
            $v_0++
        ) entityStep.get_Steps().get_item($v_0).apply(this)
    },
    visitConditionBranchStep: function(conditionBranchStep) {
        Mscrm.ProcessAutomation.ProcessToUIActivityCollectionVisitor.prototype.visitConditionBranchStep
            .call(this, conditionBranchStep);
        if (!conditionBranchStep.get_conditionBranchDisplayMode()) {
            var $v_0 = conditionBranchStep.get_parent().get_parent();
            if (!Microsoft.Crm.Workflow.ObjectModel.StageStep.isInstanceOfType($v_0)) return;
            var $v_1 = $v_0, $v_2 = this.$6_1;
            $v_2.set_parentStageEntityName(this.$2R_2($v_1.get_stageId()));
            var $v_3 = $v_0.get_nextStageId();
            if (isNullOrEmptyString($v_3)) return;
            if (IsNull(this.$1T_2[$v_3])) this.$1T_2[$v_3] = $v_2.getActivityId()
        }
    },
    visitSetNextStageStep: function(setNextStageStep) {
        var $v_0 = setNextStageStep.get_stageId(), $v_1 = this.$k_2.get_stagesById()[$v_0];
        $v_1.apply(this)
    },
    $2f_2: function($p0, $p1) {
        var $v_0 = this.createUIActivity($p0, $p1),
            $v_1 = this.$k_2.getRelationshipStepsByTargetStage($p0.get_stageId());
        if (!IsNull($v_1)) {
            var $v_2 = [], $$dict_8 = $v_1;
            for (var $$key_9 in $$dict_8) {
                var $v_3 = { key: $$key_9, value: $$dict_8[$$key_9] },
                    $v_4 = this.$k_2.get_stagesById()[$v_3.key],
                    $v_5 = new Mscrm.ProcessAutomation.StageRelationship($v_3.value, $v_4);
                Array.add($v_2, $v_5)
            }
            $v_0.set_relationships($v_2)
        }
        $v_0.set_entityName(this.$2R_2($p0.get_stageId()));
        if (!isNullOrEmptyString(this.$1T_2[$p0.get_stageId()])) {
            $v_0.setParentActivityId(this.$1T_2[$p0.get_stageId()]);
            $v_0.setParentBranchId(0)
        }
        return $v_0
    },
    $2R_2: function($p0) {
        var $v_0 = this.$k_2.get_parentEntityStepByStageId()[Microsoft.Crm.Workflow.Utils.StringUtility
            .reduceToCanonicalForm($p0)];
        return $v_0.get_EntityLogicalName()
    },
    $k_2: null
};
Mscrm.ProcessAutomation
    .DefaultBusinessProcessObjectGeneratorFactory = function() {
        Mscrm.ProcessAutomation.DefaultBusinessProcessObjectGeneratorFactory.initializeBase(this)
    };
Mscrm.ProcessAutomation.DefaultBusinessProcessObjectGeneratorFactory.prototype = {
    createGenerator: function(activityType) {
        var $v_0 = null;
        switch (activityType) {
        case "stage":
            $v_0 = new Mscrm.ProcessAutomation.DefaultStageStepGenerator;
            break;
        default:
            $v_0 = Mscrm.ProcessAutomation.DefaultObjectGeneratorFactory.prototype.createGenerator
                .call(this, activityType);
            break
        }
        $v_0.set_processStep(this.$2_0);
        return $v_0
    }
};
Mscrm.ProcessAutomation.DefaultStageStepGenerator = function() {
    Mscrm.ProcessAutomation.DefaultStageStepGenerator.initializeBase(this)
};
Mscrm.ProcessAutomation.DefaultStageStepGenerator.prototype = {
    constructUninitializedStep: function() {
        var $v_0 = new Microsoft.Crm.Workflow.ObjectModel.EntityStep(this.$2_0, this.$2_0.get_primaryEntityName());
        $v_0.set_workflow(this.$2_0);
        var $v_1 = new Microsoft.Crm.Workflow.ObjectModel.StageStep(this.$2_0, "Empty Stage");
        $v_1.set_parent($v_0);
        return $v_1
    }
};
Mscrm.ProcessAutomation.StageRelationship = function(relationshipStep, sourceStageStep) {
    this.$4_0 = relationshipStep;
    this.$1a_0 = sourceStageStep
};
Mscrm.ProcessAutomation.StageRelationship.prototype = {
    $1a_0: null,
    $4_0: null,
    get_step: function() { return this.$4_0 },
    get_sourceStage: function() { return this.$1a_0 }
};
Mscrm.ProcessAutomation
    .BusinessProcessActivityDefinitionFactory = function() {
        Mscrm.ProcessAutomation.BusinessProcessActivityDefinitionFactory.initializeBase(this)
    };
Mscrm.ProcessAutomation.BusinessProcessActivityDefinitionFactory.prototype = {
    createActivity: function(activityType) {
        switch (activityType) {
        case "stage":
            return new Mscrm.ProcessAutomation.StageActivity;
        case "bpf_root":
            return new Mscrm.ProcessAutomation.BusinessProcessRootActivity;
        case "condition":
            return new Mscrm.ProcessAutomation.BusinessProcessConditionActivity;
        default:
            return Mscrm.ProcessAutomation.ProcessActivityDefinitionFactory.prototype.createActivity
                .call(this, activityType)
        }
    }
};
Mscrm.ProcessAutomation.BusinessProcessConditionActivity = function() {
    Mscrm.ProcessAutomation.BusinessProcessConditionActivity.initializeBase(this)
};
Mscrm.ProcessAutomation.BusinessProcessConditionActivity.prototype = {
    get_parentStageEntityName: function() { return this.$27_5 },
    set_parentStageEntityName: function(value) {
        this.$27_5 = value;
        return value
    },
    $27_5: null
};
Mscrm.ProcessAutomation.BusinessProcessRootActivity = function() {
    Mscrm.ProcessAutomation.BusinessProcessRootActivity.initializeBase(this, ["stage"])
};
Mscrm.ProcessAutomation.BusinessProcessRootActivity.prototype = {
    initialize: function(properties) {
        Mscrm.Automation.ActivityDefinitionModel.prototype.initialize.call(this, properties);
        this.setActivityTypeId("bpf_root");
        this.addNewItem("bpf_root")
    },
    initializeFromProcessStep: function() {
        Mscrm.ProcessAutomation.ProcessActivityDefinitionModel.prototype.initializeFromProcessStep.call(this);
        var $v_0 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_1 = this.$2_2,
            $v_2 = new Mscrm.Automation.ItemModel;
        $v_2.Title = $v_0.GetLabel("BusinessProcessTileTitle");
        $v_2.ItemID = $v_1.get_Id();
        this.setActiveItemPropertiesWithoutRaisingEvent($v_2)
    }
};
Mscrm.ProcessAutomation.StageActivity = function() {
    this.$1m_3 = [];
    Mscrm.ProcessAutomation.StageActivity.initializeBase(this, ["stage"])
};
Mscrm.ProcessAutomation.StageActivity.prototype = {
    initialize: function(properties) {
        Mscrm.Automation.ActivityDefinitionModel.prototype.initialize.call(this, properties);
        this.setActivityTypeId("stage");
        this.addNewItem("stage")
    },
    initializeFromProcessStep: function() {
        Mscrm.ProcessAutomation.ProcessActivityDefinitionModel.prototype.initializeFromProcessStep.call(this);
        var $v_0 = this.$2_2, $v_1 = new Mscrm.ProcessAutomation.ProcessItemModel, $v_2 = "";
        if (!IsNull($v_0.get_parent()))
            $v_2 = Mscrm.ProcessAutomation.EntityCacheManager.get_instance()
                .getDisplayName($v_0.get_parent().get_EntityLogicalName());
        $v_1.Title = $v_0.get_stageName();
        $v_1.subtitle = $v_2;
        $v_1.ItemID = $v_0.get_Id();
        this.setActiveItemPropertiesWithoutRaisingEvent($v_1)
    },
    get_relationships: function() { return this.$1m_3 },
    set_relationships: function(value) {
        this.$1m_3 = value;
        return value
    },
    get_entityName: function() { return this.$20_3 },
    set_entityName: function(value) {
        this.$20_3 = value;
        return value
    },
    $20_3: ""
};
Mscrm.ProcessAutomation
    .BusinessProcessLibraryNodesFactory = function() {
        Mscrm.ProcessAutomation.BusinessProcessLibraryNodesFactory.initializeBase(this)
    };
Mscrm.ProcessAutomation.BusinessProcessLibraryNodesFactory.prototype = {
    CreateLibraryNodes: function() {
        var $v_0 = [],
            $v_1 = null,
            $v_2 = null,
            $v_3 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection();
        $v_2 = [];
        Array.add($v_2,
            this.getLibraryElementNode($v_3.GetLabel("LibraryCondition"),
                Mscrm.ProcessAutomation.ProcessImageResources.get_conditionTileIcon(),
                "condition"));
        $v_1 = new Mscrm.Automation.LibraryGroupNode;
        $v_1.nodename = $v_3.GetLabel("LibraryGeneral");
        $v_1.subnodes = $v_2;
        Array.add($v_0, $v_1);
        $v_2 = [];
        Array.add($v_2,
            this.getLibraryElementNode("Stage",
                Mscrm.ProcessAutomation.WorkflowImageResources.get_updateTileIcon(),
                "stage"));
        $v_1 = new Mscrm.Automation.LibraryGroupNode;
        $v_1.nodename = $v_3.GetLabel("LibraryAction");
        $v_1.subnodes = $v_2;
        Array.add($v_0, $v_1);
        return $v_0
    }
};
Mscrm.ProcessAutomation
    .BusinessProcessTileInformationFactory = function() {
        Mscrm.ProcessAutomation.BusinessProcessTileInformationFactory.initializeBase(this)
    };
Mscrm.ProcessAutomation.BusinessProcessTileInformationFactory.prototype = {
    getTileInformationForActivityModel: function(activityModel, specificItemId) {
        var $v_0 = activityModel.getActivityTypeId();
        switch ($v_0) {
        case "stage":
            return new Mscrm.ProcessAutomation.StageActivityTileInformation(activityModel, specificItemId);
        case "bpf_root":
            return new Mscrm.ProcessAutomation
                .BusinessProcessRootActivityTileInformation(activityModel, specificItemId);
        default:
            return Mscrm.ProcessAutomation.ProcessTileInformationFactory.prototype.getTileInformationForActivityModel
                .call(this, activityModel, specificItemId)
        }
    }
};
Mscrm.ProcessAutomation
    .BusinessProcessRootActivityTileInformation = function(model, itemId) {
        Mscrm.ProcessAutomation.BusinessProcessRootActivityTileInformation.initializeBase(this, [model, itemId])
    };
Mscrm.ProcessAutomation.BusinessProcessRootActivityTileInformation.prototype = {
    getProperties: function() {
        var $v_0 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_1 = new Mscrm.Automation
                .TileProperties('\r\n\t\t\t\t<span class="tileTitle" title="<%= Title %>">\r\n\t\t\t\t\t<span class="tileTableCell">\r\n\t\t\t\t\t\t<span class="tileInner ellipsis">\r\n\t\t\t\t\t\t\t<%= Title %>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</span>', Mscrm.Automation.CommonTileInformation.defaultTileImageTemplate, window.CDNURL + "/_imgs/processdesigner/condition_32.png", "bpf_rootTile", $v_0.GetLabel("BusinessProcessTileTitle"), Mscrm.Automation.CommonTileInformation.defaultEmptyTitleTemplate, Mscrm.Automation.CommonTileInformation.defaultEmptyTileImageTemplate);
        return $v_1
    }
};
Mscrm.ProcessAutomation.StageActivityTileInformation = function(model, itemId) {
    Mscrm.ProcessAutomation.StageActivityTileInformation.initializeBase(this, [model, itemId])
};
Mscrm.ProcessAutomation.StageActivityTileInformation.prototype = {
    getProperties: function() {
        var $v_0 = new Mscrm.Automation
            .TileProperties('\r\n\t\t\t\t\t\t   <span class="tileTitle" title="<%= Title %>">\r\n\t\t\t\t\t\t\t\t  <span class="tileTableCell">\r\n\t\t\t\t\t\t\t\t\t\t <span class="tileInner ellipsis">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<%= Subtitle %>\r\n\t\t\t\t\t\t\t\t\t\t </span> \r\n\t\t\t\t\t\t\t\t\t\t<span class="tileInner ellipsis">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<%= Title %>\r\n\t\t\t\t\t\t\t\t\t\t </span>\r\n\t\t\t\t\t\t\t\t  </span>\r\n\t\t\t\t\t\t   </span>', Mscrm.Automation.CommonTileInformation.defaultTileImageTemplate, window.CDNURL + "/_imgs/processdesigner/stage_32.png", "stageTile", "Define Stage", Mscrm.Automation.CommonTileInformation.defaultEmptyTitleTemplate, Mscrm.Automation.CommonTileInformation.defaultEmptyTileImageTemplate);
        return $v_0
    }
};
Mscrm.ProcessAutomation.ValidateEmptyStageStep = function() {
    Mscrm.ProcessAutomation.ValidateEmptyStageStep.initializeBase(this)
};
Mscrm.ProcessAutomation.ValidateEmptyStageStep.prototype = {
    validate: function() {
        var $v_0 = this.$P_0.getActivities();
        if (IsNull($v_0)) return null;
        for (var $v_1 = new Array(0), $v_2 = 0; $v_2 < $v_0.length; $v_2++) this.$39_1($v_0[$v_2], $v_1);
        return $v_1
    },
    $39_1: function($p0, $p1) {
        if (!Mscrm.ProcessAutomation.StageActivity.isInstanceOfType($p0)) return;
        var $v_0 = $p0;
        if (IsNull($v_0.$2_2)) {
            var $v_2 = new Mscrm.ProcessAutomation.ValidationResult;
            $v_2.set_errorMessageId("Empty stage");
            $v_2.set_activityId($p0.getActivityId());
            Array.add($p1, $v_2);
            return
        }
        var $v_1 = $v_0.$2_2;
        if (IsNull($v_1.get_Steps()) || !$v_1.get_Steps().get_Count()) {
            var $v_3 = new Mscrm.ProcessAutomation.ValidationResult;
            $v_3.set_errorMessageId("Empty stage");
            $v_3.set_activityId($p0.getActivityId());
            Array.add($p1, $v_3);
            return
        }
    }
};
Mscrm.ProcessAutomation
    .ValidateConditionHasValidParentStage = function() {
        Mscrm.ProcessAutomation.ValidateConditionHasValidParentStage.initializeBase(this)
    };
Mscrm.ProcessAutomation.ValidateConditionHasValidParentStage.prototype = {
    validate: function() {
        var $v_0 = this.$P_0.getActivities();
        if (IsNull($v_0)) return null;
        for (var $v_1 = new Array(0), $v_2 = 0; $v_2 < $v_0.length; $v_2++) {
            var $v_3 = $v_0[$v_2];
            if ($v_3.getActivityTypeId() !== "condition") continue;
            var $v_4 = $v_3.getParent();
            if (IsNull($v_4)) continue;
            if ($v_4.getActivityTypeId() === "condition") {
                var $v_5 = new Mscrm.ProcessAutomation.ValidationResult;
                $v_5.set_errorMessageId("Condition cannot be inside a condition");
                $v_5.set_activityId($v_3.getActivityId());
                Array.add($v_1, $v_5);
                var $v_6 = new Mscrm.ProcessAutomation.ValidationResult;
                $v_6.set_errorMessageId("Condition cannot have a nested condition without stage");
                $v_6.set_activityId($v_4.getActivityId());
                Array.add($v_1, $v_6);
                break
            }
        }
        return $v_1
    }
};
Mscrm.ProcessAutomation.BusinessProcessValidator = function() {
    Mscrm.ProcessAutomation.BusinessProcessValidator.initializeBase(this);
    Array.add(this.$h_0, new Mscrm.ProcessAutomation.ValidateEmptyStageStep);
    Array.add(this.$h_0, new Mscrm.ProcessAutomation.ValidateConditionHasValidParentStage)
};
Mscrm.ProcessAutomation.BusinessProcessConditionEditPropertyViewModel = function(viewModel) {
    this.$$d_discard = Function.createDelegate(this, this.discard);
    this.$$d_confirm = Function.createDelegate(this, this.confirm);
    Mscrm.ProcessAutomation.BusinessProcessConditionEditPropertyViewModel.initializeBase(this, [viewModel])
};
Mscrm.ProcessAutomation.BusinessProcessConditionEditPropertyViewModel.prototype = {
    initialize: function() {
        Mscrm.ProcessAutomation.ViewModel.prototype.initialize.call(this);
        this.$R_3 = new Mscrm.BusinessRules.ViewModels
            .BranchingConditionBranchSectionViewModel(this.get_processStep(), this.$Y_3);
        this.$R_3.set_usePlaceholderTextForEmptyCondition(true);
        this.$R_3.set_placeholderTextForEmptyCondition(Mscrm.Automation.AutomationControl.instance.settings
            .getLabelKeyValuePhraseCollection().GetLabel("ConditionPropertyEmptyPlaceholder"))
    },
    get_conditionBranchStepSectionViewModel: function() { return this.$R_3 },
    set_conditionBranchStepSectionViewModel: function(value) {
        this.$R_3 = value;
        return value
    },
    get_entityLogicalName: function() { return this.$Y_3 },
    set_entityLogicalName: function(value) {
        this.$Y_3 = value;
        !IsNull(this.$R_3) && !IsNull(value) && this.$R_3.set_entityLogicName(this.$Y_3);
        return value
    },
    get_conditionDisplayValueBuilder: function() {
        if (IsNull(this.$w_3)) {
            this.$w_3 = new Mscrm.ProcessAutomation.ConditionDisplayValueBuilder;
            this.$w_3.set_expressions(this.$R_3.get_conditions().get_expressionViewModels())
        }
        return this.$w_3
    },
    set_conditionDisplayValueBuilder: function(value) {
        this.$w_3 = value;
        return value
    },
    confirm: function() {
        var $v_0 = this.get_processStep();
        $v_0.set_conditionExpression(this.$R_3.get_conditions().get_updatedExpression());
        var $v_1 = null;
        if (!IsNull($v_0.get_conditionExpression())) $v_1 = this.get_conditionDisplayValueBuilder().build();
        this.get_activityDisplayInfo().setDisplayInfo(this.get_processStep().get_Id(), $v_1);
        Mscrm.Automation.AutomationControl.instance.updateProcess()
    },
    discard: function() { Mscrm.Automation.AutomationControl.instance.updateCurrentModel(this.$0_1.get_model()) },
    initializeCommandBar: function() {
        var $v_0 = this.get_commandBarViewModelFactory().getCommandBarViewModel("condition"),
            $v_1 = new Mscrm.ProcessAutomation.ActionCommand;
        $v_1.set_commandAction(this.$$d_confirm);
        $v_0.get_confirmButton().set_command($v_1);
        var $v_2 = new Mscrm.ProcessAutomation.ActionCommand;
        $v_2.set_commandAction(this.$$d_discard);
        $v_0.get_discardButton().set_command($v_2);
        return $v_0
    },
    get_activityDisplayInfo: function() {
        if (IsNull(this.$1A_3)) this.$1A_3 = new Mscrm.ProcessAutomation.CachedStepDisplayInfoProvider;
        return this.$1A_3
    },
    set_activityDisplayInfo: function(value) {
        this.$1A_3 = value;
        return value
    },
    $Y_3: null,
    $w_3: null,
    $R_3: null,
    $1A_3: null
};
Mscrm.ProcessAutomation
    .BusinessProcessConditionPropertyViewModel = function(activityDefinitionModel) {
        Mscrm.ProcessAutomation.BusinessProcessConditionPropertyViewModel
            .initializeBase(this, [activityDefinitionModel])
    };
Mscrm.ProcessAutomation.BusinessProcessConditionPropertyViewModel.prototype = {
    constructEditViewModel: function() {
        var $v_0 = new Mscrm.ProcessAutomation.BusinessProcessConditionEditPropertyViewModel(this);
        $v_0.set_entityLogicalName(this.get_entityLogicalName());
        return $v_0
    }
};
Mscrm.ProcessAutomation.ConditionDisplayValueBuilder = function() {};
Mscrm.ProcessAutomation.ConditionDisplayValueBuilder.prototype = {
    build: function() {
        var $v_0 = this.$1h_0;
        if (IsNull($v_0) || !$v_0.get_count()) return null;
        for (var $v_1 = new Sys.StringBuilder, $v_2 = 0; $v_2 < $v_0.get_count(); $v_2++) {
            var $v_3 = $v_0.get_item($v_2);
            this.$2j_0($v_1, $v_3);
            $v_2 < $v_0.get_count() - 1 &&
                $v_1.append(String.format(" {0}", $v_3.get_andOrOperator().get_displayValue()))
        }
        return $v_1.toString()
    },
    $2j_0: function($p0, $p1) {
        if (IsNull($p1.get_rightOperand()))
            $p0.append(String.format("{0} {1}",
                $p1.get_leftOperand().get_displayValue(),
                $p1.get_expressionOperator().get_displayName()));
        else
            $p0.append(String.format("{0} {1} {2}",
                $p1.get_leftOperand().get_displayValue(),
                $p1.get_expressionOperator().get_displayName(),
                $p1.get_rightOperand().get_displayValue()))
    },
    $1h_0: null,
    get_expressions: function() { return this.$1h_0 },
    set_expressions: function(value) {
        this.$1h_0 = value;
        return value
    }
};
Mscrm.ProcessAutomation
    .BusinessProcessPropertyViewModelFactory = function() {
        Mscrm.ProcessAutomation.BusinessProcessPropertyViewModelFactory.initializeBase(this)
    };
Mscrm.ProcessAutomation.BusinessProcessPropertyViewModelFactory.prototype = {
    getViewModel: function(model) {
        switch (model.getActivityTypeId()) {
        case "stage":
            return new Mscrm.ProcessAutomation.EmptyPropertyViewModel(model);
        case "condition":
            return this.$2e_1(model);
        default:
            return Mscrm.ProcessAutomation.PropertyViewModelFactory.prototype.getViewModel.call(this, model)
        }
    },
    $2e_1: function($p0) {
        var $v_0 = $p0, $v_1 = new Mscrm.ProcessAutomation.BusinessProcessConditionPropertyViewModel($p0);
        $v_1.set_entityLogicalName($v_0.get_parentStageEntityName());
        return $v_1
    }
};
Mscrm.ProcessAutomation.BusinessProcessDesignerViewModel = function() {
    Mscrm.ProcessAutomation.BusinessProcessDesignerViewModel.initializeBase(this)
};
Mscrm.ProcessAutomation.BusinessProcessDesignerViewModel.prototype = {
    get_activityDefinitionCollection: function() {
        if (IsNull(this.$H_2)) {
            var $v_0 = new Mscrm.ProcessAutomation.BusinessProcessToUIActivityCollectionVisitor;
            this.$H_2 = $v_0.convert(this.$F_1)
        }
        return this.$H_2
    },
    $H_2: null
};
Mscrm.ProcessAutomation.ConditionBranchHtmlBuilder = function() {
    Mscrm.ProcessAutomation.ConditionBranchHtmlBuilder.initializeBase(this, [null])
};
Mscrm.ProcessAutomation.ConditionBranchHtmlBuilder.prototype = {
    build: function(builder, objectModel) {
        var $v_0 = objectModel;
        this.$M_1 = this.$2c_1($v_0);
        this.$2a_1($v_0)
    },
    $2c_1: function($p0) {
        var $v_0 = this.get_branchingHtmlBuilder(),
            $v_1 = $v_0.buildConditionHtmlForBranching($p0.get_stepId(), $p0.get_placeholderTextForEmptyCondition());
        return this.get_jQueryProxy().fromHtml($v_1)
    },
    $2a_1: function($p0) {
        for (var $v_0 = this.get_jQueryProxy().selectInElement(".expressioncollection", this.$M_1),
            $v_1 = $p0.get_conditions().get_expressionViewModels(),
            $v_2 = 0;
            $v_2 < $v_1.get_count();
            $v_2++) {
            var $v_3 = new Sys.StringBuilder;
            this.get_expressionHtmlBuilder().buildHtml($v_3, $v_1.get_item($v_2));
            $v_0.append(this.get_jQueryProxy().fromHtml($v_3.toString()))
        }
    },
    get_element: function() { return this.$M_1 },
    get_branchingHtmlBuilder: function() {
        if (IsNull(this.$1D_1))
            this.$1D_1 = new Mscrm.BusinessRules.Builders.ConditionBranchStepSectionViewViewBuilder(null, null);
        return this.$1D_1
    },
    set_branchingHtmlBuilder: function(value) {
        this.$1D_1 = value;
        return value
    },
    get_expressionHtmlBuilder: function() {
        if (IsNull(this.$1R_1)) this.$1R_1 = new Mscrm.BusinessRules.Builders.ExpressionElementHtmlBuilder;
        return this.$1R_1
    },
    set_expressionHtmlBuilder: function(value) {
        this.$1R_1 = value;
        return value
    },
    $M_1: null,
    $1D_1: null,
    $1R_1: null
};
Mscrm.ProcessAutomation
    .EditableConditionBusinessProcessPropertyHtmlBuilder = function() {
        Mscrm.ProcessAutomation.EditableConditionBusinessProcessPropertyHtmlBuilder.initializeBase(this, [null])
    };
Mscrm.ProcessAutomation.EditableConditionBusinessProcessPropertyHtmlBuilder.prototype = {
    build: function(builder, objectModel) {
        var $v_0 = objectModel;
        this.get_conditionBranchHtmlBuilder().build(null, $v_0.get_conditionBranchStepSectionViewModel());
        this.$M_1 = this.get_jQueryProxy().fromHtml(String
            .format(this.$2J_1,
                "propertycontent",
                "propertycontentcontainer",
                "propertyfootercontainer",
                "propertyfootercontainer"));
        this.get_jQueryProxy().selectInElement("#propertycontent", this.$M_1)
            .append(this.get_conditionBranchHtmlBuilder().get_element())
    },
    get_conditionBranchHtmlBuilder: function() {
        if (!this.$1H_1) this.$1H_1 = new Mscrm.ProcessAutomation.ConditionBranchHtmlBuilder;
        return this.$1H_1
    },
    set_conditionBranchHtmlBuilder: function(value) {
        this.$1H_1 = value;
        return value
    },
    get_element: function() { return this.$M_1 },
    $M_1: null,
    $2J_1:
        "<div style='width:100%;height:100%;position:relative'>\r\n\t\t\t\t\t\t\t\t\t<div id='{0}' class='{1}'>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div id='{2}' class='{3}'>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>",
    $1H_1: null
};
Mscrm.ProcessAutomation
    .EditableConditionBusinessProcessPropertyPanelView = function(viewModel) {
        Mscrm.ProcessAutomation.EditableConditionBusinessProcessPropertyPanelView.initializeBase(this, [viewModel])
    };
Mscrm.ProcessAutomation.EditableConditionBusinessProcessPropertyPanelView.prototype = {
    get_conditionsSectionsView: function() { return this.$1I_4 },
    get_editViewModel: function() {
        if (IsNull(this.$0_4)) this.$0_4 = this.$0_2.get_editViewModel();
        return this.$0_4
    },
    get_propertyHtmlBuilder: function() {
        if (!this.$1X_4) this.$1X_4 = new Mscrm.ProcessAutomation.EditableConditionBusinessProcessPropertyHtmlBuilder;
        return this.$1X_4
    },
    set_propertyHtmlBuilder: function(value) {
        this.$1X_4 = value;
        return value
    },
    renderCompleted: function() {
        Mscrm.ProcessAutomation.ProcessPropertyPanelViewWithCommandBar.prototype.renderCompleted.call(this);
        this.$2b_4()
    },
    renderPropertyHtml: function() {
        this.get_propertyHtmlBuilder().build(null, this.get_editViewModel());
        var $v_0 = this.get_propertyHtmlBuilder().get_element();
        this.$t_3 = this.get_jQueryProxy().selectInElement("#propertyfootercontainer", $v_0);
        this.renderCommandBar(this.get_editViewModel().get_commandBarViewModel());
        return $v_0
    },
    $2b_4: function() {
        var $v_0 = String.format("{0}_section", "condition"),
            $v_1 = String.format("{0}_{1}",
                this.get_editViewModel().get_conditionBranchStepSectionViewModel().get_stepId(),
                $v_0);
        this.$1I_4 = new Mscrm.BusinessRules.Views
            .BranchingConditionsSectionsView(this.get_jQueryProxy().selectElement("#" + $v_1));
        this.$1I_4.set_dataContext(this.get_editViewModel().get_conditionBranchStepSectionViewModel().get_conditions());
        this.$1I_4.initialize()
    },
    $1X_4: null,
    $1I_4: null,
    $0_4: null
};
Mscrm.ProcessAutomation
    .BusinessProcessCommandBarViewModel = function() {
        Mscrm.ProcessAutomation.BusinessProcessCommandBarViewModel.initializeBase(this)
    };
Mscrm.ProcessAutomation
    .BusinessProcessPropertyPanelScrollableCssClassProvider =
    function() { Mscrm.ProcessAutomation.BusinessProcessPropertyPanelScrollableCssClassProvider.initializeBase(this) };
Mscrm.ProcessAutomation.BusinessProcessPropertyPanelScrollableCssClassProvider.prototype = {
    getScrollableCssClass: function(model) {
        switch (model.getActivityTypeId()) {
        case "stage":
            return "wf_scrollable_filled_group_stage";
        default:
            return Mscrm.ProcessAutomation.ProcessPropertyPanelScrollableCssClassProvider.prototype
                .getScrollableCssClass.call(this, model)
        }
    }
};
Mscrm.ProcessAutomation
    .ReadBusinessProcessPropertyPanelView = function(viewModel) {
        Mscrm.ProcessAutomation.ReadBusinessProcessPropertyPanelView.initializeBase(this, [viewModel])
    };
Mscrm.ProcessAutomation
    .BusinessProcessRootBodyPropertyPanelViewComponent = function(model) {
        Mscrm.ProcessAutomation.BusinessProcessRootBodyPropertyPanelViewComponent.initializeBase(this, [model])
    };
Mscrm.ProcessAutomation.BusinessProcessRootBodyPropertyPanelViewComponent.prototype = {
    get_template: function() {
        var $v_0 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_1 = String.format(this.$1_1,
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("BusinessProcessPropertyOwner")),
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("BusinessProcessPropertyDescription")),
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("BusinessProcessPropertySecurityRoles")),
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("BusinessProcessPropertyRoleName")),
                this.get_crmEncodeDecodeProxy()
                .crmHtmlEncode($v_0.GetLabel("BBusinessProcessPropertyRoleBusinessUnit")));
        return _.template($v_1)
    },
    retrieveAttributes: function() {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Object),
            $v_1 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_2 = {},
            $v_3 = Mscrm.ProcessAutomation.ProcessDesignerDataJsonWrapper.get_instance(),
            $v_4 = $v_3.EntityJson;
        if ($v_4.Owner)
            $v_2["Owner"] = (new Mscrm.ProcessAutomation.LookupValueBuilder)
                .generateReadControlHtml($v_4.Owner.Name, $v_4.Owner.ID, $v_4.Owner.Type, "lookup");
        else $v_2["Owner"] = this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_1.GetLabel("EmptyPropertyPlaceholder"));
        var $v_5 = [];
        if ($v_4.RoleAssignments)
            for (var $$arr_6 = $v_4.RoleAssignments, $$len_7 = $$arr_6.length, $$idx_8 = 0;
                $$idx_8 < $$len_7;
                ++$$idx_8) {
                var $v_6 = $$arr_6[$$idx_8], $v_7 = {};
                $v_7["Role"] = this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_6.Name);
                $v_7["BusinessUnit"] = this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_6.BusinessUnit.Name);
                Array.add($v_5, $v_7)
            }
        $v_2["RoleAssignmentsArray"] = $v_5;
        $v_2["Description"] = this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_4.Description);
        $v_0.resolve($v_2);
        return $v_0.promise()
    },
    retrieveCompleted: function() {
        Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent.prototype.retrieveCompleted.call(this);
        var $v_0 = this.$5_0.find("#role_assignment_collapse_button, #collapse_label"),
            $v_1 = this.$5_0.filter("#role_assignment_table"),
            $$t_3 = this;
        $v_0.bind("click",
            function($p1_0) {
                $v_0.toggleClass("collapsed");
                $v_1.toggleClass("collapsed")
            })
    },
    dispose: function() {
        Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent.prototype.dispose.call(this);
        var $v_0 = this.$5_0.find("#role_assignment_collapse_button, #collapse_label");
        $v_0.unbind("click")
    },
    $1_1:
        "\r\n\t\t<div class='wf_prop_field_group '>\r\n\t\t\t<div id='owner_label' class='wf_prop_field' tabindex='0'>{0}</div>\r\n\t\t\t<div aria-labelledby='owner_label' class='wf_prop_value' tabindex='0'><%= Owner %></div>\r\n\t\t</div>\r\n\t\t<div id='description_box_label' class='wf_prop_field' tabindex='0'>{1}</div>\r\n\t\t<div aria-labelledby='description_box_label' class='description_box' tabindex='0'>\r\n\t\t\t<%= Description %>\r\n\t\t</div>\r\n\t\t<div class='wf_prop_subheader_line'><a href='#' id='role_assignment_collapse_button' class='collapse_button'></a><a href='#' id='collapse_label' class='collapse_label' tabindex='0'>{2}</a></div>\r\n\t\t<div aria-labelledby='collapse_label' class='wf_table role_assignment_table' id='role_assignment_table'>\r\n\t\t\t<div class='wf_row wf_header'>\r\n\t\t\t\t<div class='wf_col_half wf_col_left' id='role_label' tabindex='0'>{3}</div>\r\n\t\t\t\t<div class='wf_col_half' id='business_unit_label' tabindex='0'>{4}</div>\r\n\t\t\t</div>\r\n\t\t\t<% _.each(RoleAssignmentsArray, function(roleAssignment) {{ %>\r\n\t\t\t\t<div class='wf_row'>\r\n\t\t\t\t\t<div class='wf_col_half wf_col_content wf_col_left'><div class='wf_col_inner ellipsis' aria-labelledby='role_label' tabindex='0'><%= roleAssignment.Role %></div></div>\r\n\t\t\t\t\t<div class='wf_col_half wf_col_content'><div class='wf_col_inner ellipsis' aria-labelledby='business_unit_label' tabindex='0'><%= roleAssignment.BusinessUnit %></div></div>\r\n\t\t\t\t</div>\r\n\t\t\t<% }}); %>\r\n\t\t</div>\r\n"
};
Mscrm.ProcessAutomation
    .StageBodyPropertyPanelViewComponent = function(model) {
        Mscrm.ProcessAutomation.StageBodyPropertyPanelViewComponent.initializeBase(this, [model])
    };
Mscrm.ProcessAutomation.StageBodyPropertyPanelViewComponent.prototype = {
    get_template: function() {
        var $v_0 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_1 = String.format(this.$1_1,
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("StagePropertyRelationshipSectionTitle")),
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("StagePropertyParentStageHeader")),
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("StagePropertyParentEntityHeader")),
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("StagePropertyRelationshipColumnHeader")),
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("StagePropertyStepsSectionTitle")),
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("StagePropertyStepHeader")),
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("StagePropertyTypeHeader")),
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("StagePropertyFieldHeader")),
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("StagePropertyTypeValue")));
        return _.template($v_1)
    },
    retrieveAttributes: function() {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Object),
            $v_1 = {},
            $v_2 = this.$7_0.$2_2,
            $v_3 = this.$31_1(this.$B_0[$v_2.get_parent().get_EntityLogicalName()]);
        $v_1["Relationships"] = $v_3;
        var $v_4 = this.$36_1($v_2);
        $v_1["Steps"] = $v_4;
        $v_0.resolve($v_1);
        return $v_0.promise()
    },
    $36_1: function($p0) {
        var $v_0 = [];
        if ($p0.get_Steps())
            for (var $v_1 = 0; $v_1 < $p0.get_Steps().get_Count(); $v_1++) {
                var $v_2 = $p0.get_Steps().get_item($v_1);
                if (!Microsoft.Crm.Workflow.ObjectModel.StepStep.isInstanceOfType($v_2)) continue;
                var $v_3 = {}, $v_4 = $v_2;
                $v_3["IsProcessRequired"] = $v_4.get_isProcessRequired();
                $v_3["StepName"] = $v_4.get_stepLabels().get_item(0).get_description();
                if (!IsNull($v_4.get_Steps()) && $v_4.get_Steps().get_Count() > 0) {
                    var $v_5 = $v_4.get_Steps().get_item(0);
                    $v_3["ControlName"] = $v_5.get_controlDisplayName()
                } else $v_3["ControlName"] = "";
                Array.add($v_0, $v_3)
            }
        return $v_0
    },
    $31_1: function($p0) {
        for (var $v_0 = this.$7_0.$1m_3, $v_1 = [], $v_2 = 0; $v_2 < $v_0.length; ++$v_2) {
            var $v_3 = {},
                $v_4 = $v_0[$v_2],
                $v_5 = $v_4.$1a_0.get_parent().get_EntityLogicalName(),
                $v_6 = $v_4.$1a_0.get_stageName(),
                $v_7 = Mscrm.ProcessAutomation.EntityCacheManager.get_instance().getDisplayName($v_5),
                $v_8 = $p0.getAttributeByName($v_4.$4_0.get_attributeName()).LabelName;
            $v_3["ParentStage"] = this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_6);
            $v_3["ParentEntity"] = this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_7);
            $v_3["RelationshipValue"] = this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_8);
            Array.add($v_1, $v_3)
        }
        return $v_1
    },
    retrieveCompleted: function() {
        Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent.prototype.retrieveCompleted.call(this);
        this.$2N_1("relationships_collapse_button", "relationship_table");
        this.$2N_1("steps_collapse_button", "steps_table")
    },
    dispose: function() {
        Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent.prototype.dispose.call(this);
        this.$2O_1("relationships_collapse_button");
        this.$2O_1("steps_collapse_button")
    },
    $2N_1: function($p0, $p1) {
        var $v_0 = this.$5_0.find("#" + $p0 + ", #collapse_label"), $v_1 = this.$5_0.filter("#" + $p1), $$t_5 = this;
        $v_0.bind("click",
            function($p1_0) {
                $v_0.toggleClass("collapsed");
                $v_1.toggleClass("collapsed")
            })
    },
    $2O_1: function($p0) {
        var $v_0 = this.$5_0.find("#" + $p0 + ", #collapse_label");
        $v_0.unbind("click")
    },
    $1_1:
        "\r\n\t\t<div class='wf_prop_subheader_line'><a href='#' id='relationships_collapse_button' class='collapse_button'></a><a href='#' id='relationships_collapse_button' class='collapse_label' tabindex='0'>{0}</a></div>\r\n\t\t<div class='wf_table collapsible_table' id='relationship_table'>\r\n\t\t\t<div class='wf_row wf_header'>\r\n\t\t\t\t<div class='wf_col_4' tabindex='0' id='parent_stage_label'>{1}</div>\r\n\t\t\t\t<div class='wf_col_4' tabindex='0' id='parent_entity_label'>{2}</div>\r\n\t\t\t\t<div class='wf_col_4 wf_col_right' id='relationship_type_label' tabindex='0'>{3}</div>\r\n\t\t\t</div>\r\n\t\t\t<% _.each(Relationships, function(relationship) {{ %>\r\n\t\t\t\t<div class='wf_row'>\r\n\t\t\t\t\t<div class='wf_col_4'><div class='wf_col_inner ellipsis' tabindex='0' aria-labelledby='parent_stage_label'><%= relationship.ParentStage %></div></div>\r\n\t\t\t\t\t<div class='wf_col_4'><div class='wf_col_inner ellipsis' tabindex='0' aria-labelledby='parent_entity_label'><%= relationship.ParentEntity %></div></div>\r\n\t\t\t\t\t<div class='wf_col_4 wf_col_right'><div class='wf_col_inner ellipsis' aria-labelledby='relationship_type_label' tabindex='0'><%= relationship.RelationshipValue %></div></div>\r\n\t\t\t\t</div>\r\n\t\t\t<% }}); %>\r\n\t\t</div>\r\n\t\t<div class='wf_prop_subheader_line'><a href='#' id='steps_collapse_button' class='collapse_button'></a><a href='#' id='steps_collapse_button' class='collapse_label' tabindex='0'>{4}</a></div>\r\n\t\t<div class='wf_table collapsible_table' id='steps_table'>\r\n\t\t\t<div class='wf_row wf_header'>\r\n\t\t\t\t<div class='wf_col_4' tabindex='0' id='step_name_label'>{5}</div>\r\n\t\t\t\t<div class='wf_col_3' tabindex='0' id='field_type_label'>{6}</div>\r\n\t\t\t\t<div class='wf_col_4' tabindex='0' id='step_control_label'>{7}</div>\r\n\t\t\t\t<div class='wf_col_1 wf_col_right' tabindex='0'>*</div>\r\n\t\t\t</div>\r\n\t\t\t<% _.each(Steps, function(step) {{ %>\r\n\t\t\t\t<div class='wf_row'>\r\n\t\t\t\t\t<div class='wf_col_4'><div class='wf_col_inner ellipsis' tabindex='0' aria-labelledby='step_name_label'><%= step.StepName %></div></div>\r\n\t\t\t\t\t<div class='wf_col_3'><div class='wf_col_inner ellipsis' tabindex='0' aria-labelledby='field_type_label'>{8}</div></div>\r\n\t\t\t\t\t<div class='wf_col_4'><div class='wf_col_inner ellipsis' tabindex='0' aria-labelledby='step_control_label'><%= step.ControlName %></div></div>\r\n\t\t\t\t\t<div class='wf_col_1 wf_col_right'><div class='wf_col_inner' tabindex='0'>\r\n\t\t\t\t\t\t<% if(step.IsProcessRequired) {{ %>\r\n\t\t\t\t\t\t\t<input type='checkbox' checked='true' disabled='true' class='process_required_checkbox'></input>\r\n\t\t\t\t\t\t<% }} else{{ %>\r\n\t\t\t\t\t\t\t<input type='checkbox' disabled='true' class='process_required_checkbox'></input>\r\n\t\t\t\t\t\t<% }} %></div></div>\r\n\t\t\t\t</div>\r\n\t\t\t<% }}); %>\r\n\t\t</div>\r\n"
};
Mscrm.ProcessAutomation
    .BusinessProcessBodyPropertyPanelViewComponentFactory =
    function() { Mscrm.ProcessAutomation.BusinessProcessBodyPropertyPanelViewComponentFactory.initializeBase(this) };
Mscrm.ProcessAutomation.BusinessProcessBodyPropertyPanelViewComponentFactory.prototype = {
    createComponent: function(model) {
        switch (model.getActivityTypeId()) {
        case "stage":
            return new Mscrm.ProcessAutomation.StageBodyPropertyPanelViewComponent(model);
        case "bpf_root":
            return new Mscrm.ProcessAutomation.BusinessProcessRootBodyPropertyPanelViewComponent(model);
        default:
            return Mscrm.ProcessAutomation.ProcessBodyPropertyPanelViewComponentFactory.prototype.createComponent
                .call(this, model)
        }
    }
};
Mscrm.ProcessAutomation
    .BusinessProcessHeaderPropertyPanelViewComponentFactory =
    function() { Mscrm.ProcessAutomation.BusinessProcessHeaderPropertyPanelViewComponentFactory.initializeBase(this) };
Mscrm.ProcessAutomation.BusinessProcessHeaderPropertyPanelViewComponentFactory.prototype = {
    createComponent: function(model) {
        switch (model.getActivityTypeId()) {
        case "stage":
            return new Mscrm.ProcessAutomation.StageHeaderPropertyPanelViewComponent(model);
        case "bpf_root":
            return new Mscrm.ProcessAutomation.BusinessProcessRootHeaderPropertyPanelViewComponent(model);
        case "condition":
            return new Mscrm.ProcessAutomation.BusinessProcessConditionHeaderPropertyPanelViewComponent(model);
        default:
            return Mscrm.ProcessAutomation.ProcessHeaderPropertyPanelViewComponentFactory.prototype.createComponent
                .call(this, model)
        }
    }
};
Mscrm.ProcessAutomation.BusinessProcessPropertyPanelViewComponentProvider = function() {
    Mscrm.ProcessAutomation.BusinessProcessPropertyPanelViewComponentProvider.initializeBase(this);
    this.$Z_0 = new Mscrm.ProcessAutomation.BusinessProcessHeaderPropertyPanelViewComponentFactory;
    this.$W_0 = new Mscrm.ProcessAutomation.BusinessProcessBodyPropertyPanelViewComponentFactory
};
Mscrm.ProcessAutomation
    .BusinessProcessConditionHeaderPropertyPanelViewComponent =
    function(model) {
        Mscrm.ProcessAutomation.BusinessProcessConditionHeaderPropertyPanelViewComponent.initializeBase(this, [model])
    };
Mscrm.ProcessAutomation.BusinessProcessConditionHeaderPropertyPanelViewComponent.prototype = {
    get_template: function() {
        var $v_0 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_1 = String.format(this.$1_1,
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("ConditionPropertyTitle")));
        return _.template($v_1)
    },
    $1_1: "\r\n\t<div class='process_prop_title process_child_top process_child' tabindex='0'>{0}</div>\r\n"
};
Mscrm.ProcessAutomation
    .StageHeaderPropertyPanelViewComponent = function(model) {
        Mscrm.ProcessAutomation.StageHeaderPropertyPanelViewComponent.initializeBase(this, [model])
    };
Mscrm.ProcessAutomation.StageHeaderPropertyPanelViewComponent.prototype = {
    get_template: function() {
        var $v_0 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_1 = String.format(this.$1_1,
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("StagePropertyPropertyTitle")),
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("StagePropertyStageName")),
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("StagePropertyStageCategory")),
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("StagePropertyEntity")));
        return _.template($v_1)
    },
    retrieveAttributes: function() {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Object),
            $v_1 = this.$7_0.$2_2,
            $v_2 = {},
            $v_3 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection();
        $v_2["StageNameValue"] = this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_1.get_stageName());
        for (var $v_4 = Mscrm.ProcessAutomation.ProcessDesignerDataJsonWrapper.get_instance().AdditionalData,
            $$arr_5 = $v_4.BpfStageCategoryMetadata,
            $$len_6 = $$arr_5.length,
            $$idx_7 = 0;
            $$idx_7 < $$len_6;
            ++$$idx_7) {
            var $v_6 = $$arr_5[$$idx_7], $v_7 = $v_1.get_stageCategory();
            if (!isNullOrEmptyString($v_7) && $v_6.Value === Number.parseInvariant($v_7)) {
                $v_2["StageCategoryValue"] = this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_6.Label);
                break
            } else $v_2["StageCategoryValue"] = ""
        }
        var $v_5 = Mscrm.ProcessAutomation.EntityCacheManager.get_instance()
            .getDisplayName($v_1.get_parent().get_EntityLogicalName());
        $v_2["EntityValue"] = !isNullOrEmptyString($v_5)
            ? this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_5)
            : this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_3.GetLabel("StagePropertyStageCategoryEmpty"));
        $v_0.resolve($v_2);
        return $v_0.promise()
    },
    retrieveCompleted: function() {
        Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent.prototype.retrieveCompleted.call(this);
        var $v_0 = this.$5_0.find("#stagestep_category");
        if (isNullOrEmptyString($v_0.text())) {
            var $v_1 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
                $v_2 = this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_1.GetLabel("StagePropertyStageCategoryEmpty"));
            $v_0.text($v_2);
            $v_0.addClass("uncategorized")
        }
    },
    $1_1:
        "\r\n\t<div class='process_prop_title process_child_top process_child' tabindex='0'>{0}</div>\r\n\t<div class='wf_prop_field_group process_child'>\r\n\t\t<div class='wf_prop_field' tabindex='0' id='stage_name_label'>{1}</div>\r\n\t\t<div class='wf_prop_value' tabindex='0' aria-labelledby='stage_name_label'><%- StageNameValue %></div>\r\n\t</div>\r\n\t<div class='wf_prop_field_group process_child'>\r\n\t\t<div class='wf_prop_field' tabindex='0' id='stage_category_label'>{2}</div>\r\n\t\t<div class='wf_prop_value' id='stagestep_category' tabindex='0' aria-labelledby='stage_category_label'><%- StageCategoryValue %></div>\r\n\t</div>\r\n\t<div class='wf_prop_field_group process_child'>\r\n\t\t<div class='wf_prop_field' tabindex='0' id='entity_value_label'>{3}</div>\r\n\t\t<div class='wf_prop_value' tabindex='0' aria-labelledby='entity_value_label'><%- EntityValue %></div>\r\n\t</div>\r\n"
};
Mscrm.ProcessAutomation
    .BusinessProcessRootHeaderPropertyPanelViewComponent = function(model) {
        Mscrm.ProcessAutomation.BusinessProcessRootHeaderPropertyPanelViewComponent.initializeBase(this, [model])
    };
Mscrm.ProcessAutomation.BusinessProcessRootHeaderPropertyPanelViewComponent.prototype = {
    get_template: function() {
        var $v_0 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_1 = String.format(this.$1_1,
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("BusinessProcessTileTitle")),
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("BusinessProcessPropertyEntity")));
        return _.template($v_1)
    },
    retrieveAttributes: function() {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Object),
            $v_1 = {},
            $v_2 = this.$7_0.get_processStep();
        $v_1["EntityName"] = this.get_crmEncodeDecodeProxy()
            .crmHtmlEncode(Mscrm.ProcessAutomation.EntityCacheManager.get_instance()
                .getDisplayName($v_2.get_primaryEntityName()));
        $v_0.resolve($v_1);
        return $v_0.promise()
    },
    $1_1:
        "\r\n\t<div class='process_prop_title process_child process_child_top' tabindex='0'>{0}</div>\r\n\t<div class='wf_prop_field_group process_child'>\r\n\t\t<div class='wf_prop_field' id='entity_name_label' tabindex='0'>{1}</div>\r\n\t\t<div class='wf_prop_value' aria-labelledby='entity_name_label' tabindex='0'><%= EntityName %></div>\r\n\t</div>\r\n"
};
Mscrm.ProcessAutomation
    .ValidateDroppedConditionHasValidParentStage = function() {
        Mscrm.ProcessAutomation.ValidateDroppedConditionHasValidParentStage.initializeBase(this)
    };
Mscrm.ProcessAutomation.ValidateDroppedConditionHasValidParentStage.prototype = {
    isDropValid: function(activityComponent) {
        var $v_0 = activityComponent.getRoot();
        if (!IsNull($v_0) && $v_0.getActivityTypeId() !== "condition") return true;
        if (this.currentActivity.getActivityTypeId() === "condition") return false;
        var $v_1 = this.currentActivity.getChildActivitiesSorted();
        if (IsNull($v_1) || !$v_1.length) return true;
        for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) if ($v_1[$v_2].getActivityTypeId() === "condition") return false;
        return true
    }
};
Mscrm.ProcessAutomation.BusinessProcessDropValidator = function() {
    Mscrm.ProcessAutomation.BusinessProcessDropValidator.initializeBase(this)
};
Mscrm.ProcessAutomation.BusinessProcessDropValidator.prototype = {
    initialize: function() {
        Mscrm.Automation.DefaultDropValidator.prototype.initialize.call(this);
        Array.add(this.validationSteps, new Mscrm.ProcessAutomation.ValidateDroppedConditionHasValidParentStage)
    }
};
Mscrm.ProcessAutomation.BusinessProcessBodyView = function($p0) {
    Mscrm.ProcessAutomation.BusinessProcessBodyView.initializeBase(this, [$p0])
};
Mscrm.ProcessAutomation.BusinessProcessBodyView.prototype = {
    $9_2: null,
    get_automationControl: function() {
        if (IsNull(this.$9_2)) this.$9_2 = new Mscrm.ProcessAutomation.BusinessProcessAutomationControl;
        return this.$9_2
    }
};
Mscrm.ProcessAutomation.BusinessProcessDesignerView = function(element) {
    Mscrm.ProcessAutomation.BusinessProcessDesignerView.initializeBase(this, [element])
};
Mscrm.ProcessAutomation.BusinessProcessDesignerView.prototype = {
    initialize: function() {
        Mscrm.ProcessAutomation.ProcessDesignerView.prototype.initialize.call(this);
        if (!this.$0_1.get_readOnly()) {
            var $v_0 = this.get_dataContext();
            this.$Q_1 = $v_0.get_viewFactory()
                .createBusinessProcessCommandBarView(this.get_jQueryProxy().selectElement("#crmMenuBar"));
            this.$Q_1.set_dataContext($v_0.get_viewModelFactory()
                .createBusinessProcessCommandBarViewModel($v_0.get_menuCommandFactory()));
            this.$Q_1.initialize()
        }
        this.$C_1 = new Mscrm.ProcessAutomation
            .BusinessProcessHeaderView(this.get_jQueryProxy().selectElement("HeaderViewContainer"));
        this.$C_1.set_dataContext(this.get_dataContext());
        this.$C_1.initialize();
        this.$A_1 = new Mscrm.ProcessAutomation
            .BusinessProcessBodyView(this.get_jQueryProxy().selectElement("BodyViewContainer"));
        this.$A_1.set_dataContext(this.get_dataContext());
        this.$A_1.initialize()
    }
};
Mscrm.ProcessAutomation.BusinessProcessHeaderView = function($p0) {
    Mscrm.ProcessAutomation.BusinessProcessHeaderView.initializeBase(this, [$p0])
};
Mscrm.ProcessAutomation
    .BusinessProcessPropertyViewFactory = function() {
        Mscrm.ProcessAutomation.BusinessProcessPropertyViewFactory.initializeBase(this)
    };
Mscrm.ProcessAutomation.BusinessProcessPropertyViewFactory.prototype = {
    createReadProperty: function(viewModel, activityType) {
        switch (activityType) {
        case "stage":
        case "bpf_root":
            return new Mscrm.ProcessAutomation.ReadBusinessProcessPropertyPanelView(viewModel);
        default:
            return Mscrm.ProcessAutomation.ProcessPropertyViewFactory.prototype.createReadProperty
                .call(this, viewModel, activityType)
        }
    },
    createEditProperty: function(viewModel, activityType) {
        switch (activityType) {
        case "condition":
            return new Mscrm.ProcessAutomation.EditableConditionBusinessProcessPropertyPanelView(viewModel);
        default:
            return this.createReadProperty(viewModel, activityType)
        }
    }
};
Mscrm.ProcessAutomation.BusinessProcessCommandBarView = function(element) {
    this.$$d_$2q_2 = Function.createDelegate(this, this.$2q_2);
    this.$$d_$2d_2 = Function.createDelegate(this, this.$2d_2);
    Mscrm.ProcessAutomation.BusinessProcessCommandBarView.initializeBase(this, [element])
};
Mscrm.ProcessAutomation.BusinessProcessCommandBarView.$2o = function($p0) { return $p0.ctrlKey || $p0.metaKey };
Mscrm.ProcessAutomation.BusinessProcessCommandBarView.prototype = {
    initialize: function() {
        Mscrm.ProcessAutomation.View.prototype.initialize.call(this);
        var $v_0 = this.get_jQueryProxy().selectElement("#_MBSave");
        $v_0.removeAttribute("action");
        $v_0.removeAttribute("onClick");
        this.$T_0.bind("click", this.$$d_$2d_2);
        this.$T_0.bind("keydown", this.$$d_$2d_2);
        var $v_1 = {};
        $v_1["Action"] = "Shortcut";
        $P_CRM(window).bind("keydown", $v_1, this.$$d_$2q_2)
    },
    $2d_2: function($p0) {
        var $v_0 = $p0.target.parentNode.parentNode.parentNode.id;
        switch ($v_0) {
        case "_MBSave":
            this.get_dataContext().get_saveCommand().execute();
            break
        }
    },
    $2q_2: function($p0) {
        if (!Mscrm.ProcessAutomation.BusinessProcessCommandBarView.$2o($p0)) return;
        switch ($p0.which) {
        case 83:
            this.get_dataContext().get_saveCommand().execute();
            $p0.stopPropagation();
            $p0.preventDefault();
            break
        }
    }
};
Mscrm.ProcessAutomation.BusinessProcessSaveCommand = function() {};
Mscrm.ProcessAutomation.BusinessProcessSaveCommand.$33 = function($p0, $p1) {
    if (!$p0.get_success()) return;
    $p0.get_returnValue() === "success" &&
        Mscrm.ProcessAutomation.BusinessProcessSaveCommand.$2z($p1.get_element().Command)
};
Mscrm.ProcessAutomation.BusinessProcessSaveCommand.$2z = function($p0) {
    switch ($p0) {
    case "UpdateProcess":
        break
    }
};
Mscrm.ProcessAutomation.BusinessProcessSaveCommand.$2g = function($p0, $p1) {
    Mscrm.RemoteCommandXml.remoteCommandXmlDefaultErrorHandler($p0, $p1)
};
Mscrm.ProcessAutomation.BusinessProcessSaveCommand.prototype = {
    $1o_0: null,
    setSaveDelegate: function(value) { this.$1o_0 = value },
    execute: function() {
        var $$t_2 = this;
        this.$2y_0("UpdateProcess",
            function($p1_0, $p1_1) {
                Mscrm.ProcessAutomation.BusinessProcessSaveCommand.$33($p1_0, $p1_1);
                !IsNull($$t_2.$1o_0) && $$t_2.$1o_0($p1_0, $p1_1)
            })
    },
    $2y_0: function($p0, $p1) {
        var $v_0 = Mscrm.Automation.AutomationControl.instance.settings.get_activityTreeToProcessConverter();
        $v_0.convert(Mscrm.Automation.AutomationControl.instance.activityTree);
        Mscrm.ProcessAutomation.BusinessProcessSaveCommand.$1p = $v_0.get_process().toJson();
        !isNullOrEmptyString(Mscrm.ProcessAutomation.BusinessProcessSaveCommand.$1p) &&
            this.$2i_0(Mscrm.ProcessAutomation.BusinessProcessSaveCommand.$1p,
                $p0,
                $p1,
                Mscrm.ProcessAutomation.BusinessProcessSaveCommand.$2g)
    },
    $2i_0: function($p0, $p1, $p2, $p3) {
        var $v_0 = new Mscrm.Proxies.RemoteCommandProxy;
        $v_0.set_element(new RemoteCommand("ProcessControl", $p1));
        $v_0.get_element().ErrorHandler = $p3;
        $v_0.setParameter("jsonData", $p0);
        $v_0.setParameter("id", window._Process_Id);
        $v_0.execute($p2)
    }
};
Mscrm.ProcessAutomation.BusinessProcessAutomationControl = function() {
    Mscrm.ProcessAutomation.BusinessProcessAutomationControl.initializeBase(this)
};
Mscrm.ProcessAutomation.BusinessProcessAutomationControl.prototype = {
    initializeSettings: function() {
        var $v_0 = new Mscrm.ProcessAutomation.BusinessProcessSettings;
        $v_0.set_viewModel(this.$0_1);
        this.settings = $v_0;
        this.settings.initialize()
    }
};
Mscrm.ProcessAutomation.BusinessProcessInitializer = function() {
    Mscrm.ProcessAutomation.BusinessProcessInitializer.initializeBase(this)
};
Mscrm.ProcessAutomation.BusinessProcessInitializer.businessProcessInstance = function() {
    if (IsNull(Mscrm.ProcessAutomation.ProcessInitializer
        .$3)) Mscrm.ProcessAutomation.ProcessInitializer.$3 = new Mscrm.ProcessAutomation.BusinessProcessInitializer;
    return Mscrm.ProcessAutomation.ProcessInitializer.$3
};
Mscrm.ProcessAutomation.BusinessProcessInitializer.prototype = {
    initialize: function() {
        this.$0_0 = new Mscrm.ProcessAutomation.BusinessProcessDesignerViewModel;
        this.$0_0.set_menuCommandFactory(new Mscrm.ProcessAutomation.MenuCommandFactory);
        this.$0_0.set_viewFactory(new Mscrm.ProcessAutomation.ViewFactory);
        this.$0_0.set_viewModelFactory(new Mscrm.ProcessAutomation.ViewModelFactory);
        this.$0_0.initialize();
        this.$G_0 = new Mscrm.ProcessAutomation
            .BusinessProcessDesignerView(this.get_jQueryProxy().selectElement("processdesigner"));
        this.$G_0.set_dataContext(this.$0_0);
        this.$G_0.initialize()
    }
};
Mscrm.ProcessAutomation.ProcessDialogAutomationControl = function() {
    Mscrm.ProcessAutomation.ProcessDialogAutomationControl.initializeBase(this)
};
Mscrm.ProcessAutomation.ProcessDialogAutomationControl.prototype = {
    initializeSettings: function() {
        var $v_0 = new Mscrm.ProcessAutomation.ProcessDialogSettings;
        $v_0.set_viewModel(this.$0_1);
        this.settings = $v_0;
        this.settings.initialize()
    }
};
Mscrm.ProcessAutomation.ProcessDialogInitializer = function() {
    Mscrm.ProcessAutomation.ProcessDialogInitializer.initializeBase(this)
};
Mscrm.ProcessAutomation.ProcessDialogInitializer.processDialogInstance = function() {
    if (IsNull(Mscrm.ProcessAutomation.ProcessInitializer
        .$3)) Mscrm.ProcessAutomation.ProcessInitializer.$3 = new Mscrm.ProcessAutomation.ProcessDialogInitializer;
    return Mscrm.ProcessAutomation.ProcessInitializer.$3
};
Mscrm.ProcessAutomation.ProcessDialogInitializer.prototype = {
    initialize: function() {
        this.$0_0 = new Mscrm.ProcessAutomation.ProcessDialogDesignerViewModel;
        this.$0_0.set_menuCommandFactory(new Mscrm.ProcessAutomation.MenuCommandFactory);
        this.$0_0.set_viewFactory(new Mscrm.ProcessAutomation.ViewFactory);
        this.$0_0.set_viewModelFactory(new Mscrm.ProcessAutomation.ViewModelFactory);
        this.$0_0.initialize();
        this.$G_0 = new Mscrm.ProcessAutomation
            .ProcessDialogDesignerView(this.get_jQueryProxy().selectElement("processdesigner"));
        this.$G_0.set_dataContext(this.$0_0);
        this.$G_0.initialize()
    }
};
Mscrm.ProcessAutomation
    .ProcessDialogRuntimeAutomationControl = function() {
        Mscrm.ProcessAutomation.ProcessDialogRuntimeAutomationControl.initializeBase(this)
    };
Mscrm.ProcessAutomation.ProcessDialogRuntimeAutomationControl.prototype = {
    initializeSettings: function() {
        var $v_0 = new Mscrm.ProcessAutomation.ProcessDialogRuntimeSettings;
        $v_0.set_viewModel(this.$0_1);
        this.settings = $v_0;
        this.settings.initialize()
    }
};
Mscrm.ProcessAutomation.ProcessDialogRuntimeInitializer = function() {
    Mscrm.ProcessAutomation.ProcessDialogRuntimeInitializer.initializeBase(this)
};
Mscrm.ProcessAutomation.ProcessDialogRuntimeInitializer.processDialogInstance = function() {
    if (IsNull(Mscrm.ProcessAutomation.ProcessInitializer
        .$3))
        Mscrm.ProcessAutomation.ProcessInitializer.$3 = new Mscrm.ProcessAutomation.ProcessDialogRuntimeInitializer;
    return Mscrm.ProcessAutomation.ProcessInitializer.$3
};
Mscrm.ProcessAutomation.ProcessDialogRuntimeInitializer.prototype = {
    initialize: function() {
        this.$0_0 = new Mscrm.ProcessAutomation.ProcessDialogDesignerViewModel;
        this.$0_0.initialize();
        this.$G_0 = new Mscrm.ProcessAutomation
            .ProcessDialogRuntimeView(this.get_jQueryProxy().selectElement("processdesigner"));
        this.$G_0.set_dataContext(this.$0_0);
        this.$G_0.initialize()
    }
};
Mscrm.ProcessAutomation.ProcessDialogActivityType = function() {};
Mscrm.ProcessAutomation.ProcessDialogCssClass = function() {};
Mscrm.ProcessAutomation.ProcessDialogSettings = function() {
    Mscrm.ProcessAutomation.ProcessDialogSettings.initializeBase(this)
};
Mscrm.ProcessAutomation.ProcessDialogSettings.prototype = {
    initialize: function() {
        Mscrm.ProcessAutomation.WorkflowSettings.prototype.initialize.call(this);
        this.setTileInformationFactory(new Mscrm.ProcessAutomation.ProcessDialogTileInformationFactory);
        this.setActivityDefinitionFactory(new Mscrm.ProcessAutomation.ProcessDialogActivityDefinitionFactory);
        this.setPropertyViewFactory(new Mscrm.ProcessAutomation.ProcessDialogPropertyViewFactory);
        this.setPropertyPanelViewComponentProvider(new Mscrm.ProcessAutomation
            .ProcessDialogPropertyPanelViewComponentProvider);
        this.$c_1 = new Mscrm.ProcessAutomation.ProcessDialogPropertyPanelScrollableCssClassProvider
    }
};
Mscrm.ProcessAutomation.ProcessDialogRuntimeSettings = function() {
    Mscrm.ProcessAutomation.ProcessDialogRuntimeSettings.initializeBase(this)
};
Mscrm.ProcessAutomation.ProcessDialogRuntimeSettings.prototype = {
    initialize: function() {
        Mscrm.ProcessAutomation.ProcessDialogSettings.prototype.initialize.call(this);
        this.setLineConnectorProviderFactory(new Mscrm.Automation.WorkflowRuntimeLineConnectorProviderFactory);
        this.setDecoratorFactory(new Mscrm.ProcessAutomation.WorkflowRuntimeDecoratorFactory);
        this.$g_1 = new Mscrm.ProcessAutomation.RuntimeProcessActivitiesStatusInitializer;
        this.setStatusCodeProviderFactory(new Mscrm.Automation.ProcessDialogRuntimeStatusCodeProviderFactory);
        this.setPropertyViewFactory(new Mscrm.ProcessAutomation.ProcessDialogRuntimePropertyViewFactory);
        this.setPropertyPanelViewComponentProvider(new Mscrm.ProcessAutomation
            .ProcessDialogRuntimePropertyPanelViewComponentProvider)
    }
};
Mscrm.ProcessAutomation
    .ProcessDialogToUIActivityCollectionVisitor = function() {
        Mscrm.ProcessAutomation.ProcessDialogToUIActivityCollectionVisitor.initializeBase(this)
    };
Mscrm.ProcessAutomation.ProcessDialogToUIActivityCollectionVisitor.prototype = {
    visitWorkflowStep: function(workflowStep) {
        var $v_0 = this.createUIActivity(workflowStep, "dialog_root");
        this.$6_1 = $v_0;
        this.$8_1 = 0;
        for (var $v_1 = 0;
            $v_1 < workflowStep.get_Steps().get_Count();
            $v_1++
        ) workflowStep.get_Steps().get_item($v_1).apply(this)
    },
    visitInteractionPageStep: function(interactionPageStep) {
        var $v_0 = this.createUIActivity(interactionPageStep, "dialog_page");
        this.$6_1 = $v_0;
        this.$8_1 = 0;
        for (var $v_1 = 0;
            $v_1 < interactionPageStep.get_Steps().get_Count();
            $v_1++
        ) interactionPageStep.get_Steps().get_item($v_1).apply(this)
    },
    visitChildInteractiveWorkflowStep: function(childWorkflowStep) {
        var $v_0 = this.createUIActivity(childWorkflowStep, "dialog_child");
        this.$6_1 = $v_0;
        this.$8_1 = 0
    },
    visitAssignVariableStep: function(assignVariableStep) {
        var $v_0 = this.createUIActivity(assignVariableStep, "dialog_asiign_variable");
        this.$6_1 = $v_0;
        this.$8_1 = 0
    },
    visitQueryStep: function(queryStep) {
        var $v_0 = this.createUIActivity(queryStep, "dialog_query");
        this.$6_1 = $v_0;
        this.$8_1 = 0
    }
};
Mscrm.ProcessAutomation.AssignVariableActivity = function() {
    Mscrm.ProcessAutomation.AssignVariableActivity.initializeBase(this, ["dialog_root"])
};
Mscrm.ProcessAutomation.AssignVariableActivity.prototype = {
    initialize: function(properties) {
        Mscrm.Automation.ActivityDefinitionModel.prototype.initialize.call(this, properties);
        this.setActivityTypeId("dialog_asiign_variable");
        this.addNewItem("dialog_asiign_variable")
    },
    initializeFromProcessStep: function() {
        Mscrm.ProcessAutomation.ProcessActivityDefinitionModel.prototype.initializeFromProcessStep.call(this);
        var $v_0 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_1 = this.$2_2,
            $v_2 = new Mscrm.ProcessAutomation.ProcessItemModel;
        $v_2.Title = String.format($v_0.GetLabel("AssignValueTileStringFormat"),
            $v_1.get_workflow().getIdentifierDisplayName($v_1.get_variableName()));
        $v_2.ItemID = $v_1.get_Id();
        this.setActiveItemPropertiesWithoutRaisingEvent($v_2)
    }
};
Mscrm.ProcessAutomation.ChildDialogRootActivity = function() {
    Mscrm.ProcessAutomation.ChildDialogRootActivity.initializeBase(this, ["dialog_root"])
};
Mscrm.ProcessAutomation.ChildDialogRootActivity.prototype = {
    initialize: function(properties) {
        Mscrm.Automation.ActivityDefinitionModel.prototype.initialize.call(this, properties);
        this.setActivityTypeId("dialog_child");
        this.addNewItem("dialog_child")
    },
    initializeFromProcessStep: function() {
        Mscrm.ProcessAutomation.ProcessActivityDefinitionModel.prototype.initializeFromProcessStep.call(this);
        var $v_0 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_1 = this.$2_2,
            $v_2 = new Mscrm.ProcessAutomation.ProcessItemModel;
        $v_2.Title = $v_0.GetLabel("ChildDialogTileTitle");
        $v_2.ItemID = $v_1.get_Id();
        this.setActiveItemPropertiesWithoutRaisingEvent($v_2)
    }
};
Mscrm.ProcessAutomation
    .ProcessDialogActivityDefinitionFactory = function() {
        Mscrm.ProcessAutomation.ProcessDialogActivityDefinitionFactory.initializeBase(this)
    };
Mscrm.ProcessAutomation.ProcessDialogActivityDefinitionFactory.prototype = {
    createActivity: function(activityType) {
        switch (activityType) {
        case "dialog_child":
            return new Mscrm.ProcessAutomation.ChildDialogRootActivity;
        case "dialog_asiign_variable":
            return new Mscrm.ProcessAutomation.AssignVariableActivity;
        case "dialog_root":
            return new Mscrm.ProcessAutomation.ProcessDialogRootActivity;
        case "dialog_page":
            return new Mscrm.ProcessAutomation.ProcessDialogPageActivity;
        case "dialog_query":
            return new Mscrm.ProcessAutomation.QueryActivity;
        default:
            return Mscrm.ProcessAutomation.WorkflowActivityDefinitionFactory.prototype.createActivity
                .call(this, activityType)
        }
    }
};
Mscrm.ProcessAutomation.ProcessDialogPageActivity = function() {
    Mscrm.ProcessAutomation.ProcessDialogPageActivity.initializeBase(this, ["dialog_page"])
};
Mscrm.ProcessAutomation.ProcessDialogPageActivity.prototype = {
    initialize: function(properties) {
        Mscrm.Automation.ActivityDefinitionModel.prototype.initialize.call(this, properties);
        this.setActivityTypeId("dialog_page");
        this.addNewItem("dialog_page");
        this.setRow(0);
        this.setCol(0)
    },
    initializeFromProcessStep: function() {
        Mscrm.ProcessAutomation.ProcessActivityDefinitionModel.prototype.initializeFromProcessStep.call(this);
        var $v_0 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_1 = this.$2_2,
            $v_2 = new Mscrm.ProcessAutomation.ProcessItemModel;
        $v_2.Title = $v_0.GetLabel("PageTileTitle");
        $v_2.ItemID = $v_1.get_Id();
        this.setActiveItemPropertiesWithoutRaisingEvent($v_2)
    }
};
Mscrm.ProcessAutomation.ProcessDialogRootActivity = function() {
    Mscrm.ProcessAutomation.ProcessDialogRootActivity.initializeBase(this, ["dialog_root"])
};
Mscrm.ProcessAutomation.ProcessDialogRootActivity.prototype = {
    initialize: function(properties) {
        Mscrm.Automation.ActivityDefinitionModel.prototype.initialize.call(this, properties);
        this.setActivityTypeId("dialog_root");
        this.addNewItem("dialog_root");
        this.setRow(0);
        this.setCol(0)
    },
    initializeFromProcessStep: function() {
        Mscrm.ProcessAutomation.ProcessActivityDefinitionModel.prototype.initializeFromProcessStep.call(this);
        var $v_0 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_1 = this.$2_2,
            $v_2 = new Mscrm.ProcessAutomation.ProcessItemModel;
        $v_2.Title = $v_0.GetLabel("DialogTileTitle");
        $v_2.ItemID = $v_1.get_Id();
        this.setActiveItemPropertiesWithoutRaisingEvent($v_2)
    }
};
Mscrm.ProcessAutomation.QueryActivity = function() {
    Mscrm.ProcessAutomation.QueryActivity.initializeBase(this, ["dialog_root"])
};
Mscrm.ProcessAutomation.QueryActivity.prototype = {
    initialize: function(properties) {
        Mscrm.Automation.ActivityDefinitionModel.prototype.initialize.call(this, properties);
        this.setActivityTypeId("dialog_query");
        this.addNewItem("dialog_query")
    },
    initializeFromProcessStep: function() {
        Mscrm.ProcessAutomation.ProcessActivityDefinitionModel.prototype.initializeFromProcessStep.call(this);
        var $v_0 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_1 = this.$2_2,
            $v_2 = new Mscrm.ProcessAutomation.ProcessItemModel;
        $v_2.Title = $v_0.GetLabel("QueryTileTitle");
        $v_2.ItemID = $v_1.get_Id();
        this.setActiveItemPropertiesWithoutRaisingEvent($v_2)
    }
};
Mscrm.ProcessAutomation
    .AssignVariableActivityTileInformation = function(model, itemId) {
        Mscrm.ProcessAutomation.AssignVariableActivityTileInformation.initializeBase(this, [model, itemId])
    };
Mscrm.ProcessAutomation.AssignVariableActivityTileInformation.prototype = {
    getProperties: function() {
        var $v_0 = new Mscrm.Automation
            .TileProperties('\r\n\t\t\t\t<span class="tileTitle" title="<%= Title %>">\r\n\t\t\t\t\t<span class="tileTableCell">\r\n\t\t\t\t\t\t<span class="tileInner ellipsis">\r\n\t\t\t\t\t\t\t<%= Title %>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</span>', Mscrm.Automation.CommonTileInformation.defaultTileImageTemplate, window.CDNURL + "/_imgs/processdesigner/condition_32.png", "assignValueTile", "Define child dialog", Mscrm.Automation.CommonTileInformation.defaultEmptyTitleTemplate, Mscrm.Automation.CommonTileInformation.defaultEmptyTileImageTemplate);
        return $v_0
    }
};
Mscrm.ProcessAutomation
    .ChildDialogActivityTileInformation = function(model, itemId) {
        Mscrm.ProcessAutomation.ChildDialogActivityTileInformation.initializeBase(this, [model, itemId])
    };
Mscrm.ProcessAutomation.ChildDialogActivityTileInformation.prototype = {
    getProperties: function() {
        var $v_0 = new Mscrm.Automation
            .TileProperties('\r\n\t\t\t\t<span class="tileTitle" title="<%= Title %>">\r\n\t\t\t\t\t<span class="tileTableCell">\r\n\t\t\t\t\t\t<span class="tileInner ellipsis">\r\n\t\t\t\t\t\t\t<%= Title %>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</span>', Mscrm.Automation.CommonTileInformation.defaultTileImageTemplate, window.CDNURL + "/_imgs/processdesigner/linkchilddialog_32.png", "childDialogTile", "Define child dialog", Mscrm.Automation.CommonTileInformation.defaultEmptyTitleTemplate, Mscrm.Automation.CommonTileInformation.defaultEmptyTileImageTemplate);
        return $v_0
    }
};
Mscrm.ProcessAutomation.PageActivityTileInformation = function(model, itemId) {
    Mscrm.ProcessAutomation.PageActivityTileInformation.initializeBase(this, [model, itemId])
};
Mscrm.ProcessAutomation.PageActivityTileInformation.prototype = {
    getProperties: function() {
        var $v_0 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_1 = new Mscrm.Automation
                .TileProperties('\r\n\t\t\t\t<span class="tileTitle" title="<%= Title %>">\r\n\t\t\t\t\t<span class="tileTableCell">\r\n\t\t\t\t\t\t<span class="tileInner ellipsis">\r\n\t\t\t\t\t\t\t<%= Title %>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</span>', Mscrm.Automation.CommonTileInformation.defaultTileImageTemplate, Mscrm.ProcessAutomation.WorkflowImageResources.get_customActivityTileIcon(), "pageTile", $v_0.GetLabel("WorkflowTileTitle"), Mscrm.Automation.CommonTileInformation.defaultEmptyTitleTemplate, Mscrm.Automation.CommonTileInformation.defaultEmptyTileImageTemplate);
        return $v_1
    }
};
Mscrm.ProcessAutomation
    .ProcessDialogTileInformationFactory = function() {
        Mscrm.ProcessAutomation.ProcessDialogTileInformationFactory.initializeBase(this)
    };
Mscrm.ProcessAutomation.ProcessDialogTileInformationFactory.prototype = {
    getTileInformationForActivityModel: function(activityModel, specificItemId) {
        switch (activityModel.getActivityTypeId()) {
        case "dialog_child":
            return new Mscrm.ProcessAutomation.ChildDialogActivityTileInformation(activityModel, specificItemId);
        case "dialog_root":
            return new Mscrm.ProcessAutomation.WorkflowRootActivityTileInformation(activityModel, specificItemId);
        case "dialog_page":
            return new Mscrm.ProcessAutomation.PageActivityTileInformation(activityModel, specificItemId);
        case "dialog_asiign_variable":
            return new Mscrm.ProcessAutomation.AssignVariableActivityTileInformation(activityModel, specificItemId);
        case "dialog_query":
            return new Mscrm.ProcessAutomation.QueryActivityTileInformation(activityModel, specificItemId);
        default:
            return Mscrm.ProcessAutomation.WorkflowTileInformationFactory.prototype.getTileInformationForActivityModel
                .call(this, activityModel, specificItemId)
        }
    }
};
Mscrm.ProcessAutomation.QueryActivityTileInformation = function(model, itemId) {
    Mscrm.ProcessAutomation.QueryActivityTileInformation.initializeBase(this, [model, itemId])
};
Mscrm.ProcessAutomation.QueryActivityTileInformation.prototype = {
    getProperties: function() {
        var $v_0 = new Mscrm.Automation
            .TileProperties('\r\n\t\t\t\t<span class="tileTitle" title="<%= Title %>">\r\n\t\t\t\t\t<span class="tileTableCell">\r\n\t\t\t\t\t\t<span class="tileInner ellipsis">\r\n\t\t\t\t\t\t\t<%= Title %>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</span>', Mscrm.Automation.CommonTileInformation.defaultTileImageTemplate, window.CDNURL + "/_imgs/processdesigner/querycrmdata_32.png", "queryTile", "Define child dialog", Mscrm.Automation.CommonTileInformation.defaultEmptyTitleTemplate, Mscrm.Automation.CommonTileInformation.defaultEmptyTileImageTemplate);
        return $v_0
    }
};
Mscrm.ProcessAutomation.ProcessDialogDesignerViewModel = function() {
    Mscrm.ProcessAutomation.ProcessDialogDesignerViewModel.initializeBase(this)
};
Mscrm.ProcessAutomation.ProcessDialogDesignerViewModel.prototype = {
    get_activityDefinitionCollection: function() {
        if (IsNull(this.$H_3)) {
            var $v_0 = new Mscrm.ProcessAutomation.ProcessDialogToUIActivityCollectionVisitor;
            this.$H_3 = $v_0.convert(this.$F_1)
        }
        return this.$H_3
    },
    $H_3: null
};
Mscrm.ProcessAutomation.ProcessDialogBodyView = function($p0) {
    Mscrm.ProcessAutomation.ProcessDialogBodyView.initializeBase(this, [$p0])
};
Mscrm.ProcessAutomation.ProcessDialogBodyView.prototype = {
    $9_3: null,
    get_automationControl: function() {
        if (IsNull(this.$9_3)) this.$9_3 = new Mscrm.ProcessAutomation.ProcessDialogAutomationControl;
        return this.$9_3
    }
};
Mscrm.ProcessAutomation.ProcessDialogDesignerView = function(element) {
    Mscrm.ProcessAutomation.ProcessDialogDesignerView.initializeBase(this, [element])
};
Mscrm.ProcessAutomation.ProcessDialogDesignerView.prototype = {
    initialize: function() {
        this.$C_1 = new Mscrm.ProcessAutomation
            .WorkflowHeaderView(this.get_jQueryProxy().selectElement("HeaderViewContainer"));
        this.$C_1.set_dataContext(this.get_dataContext());
        this.$C_1.initialize();
        this.$A_1 = new Mscrm.ProcessAutomation
            .ProcessDialogBodyView(this.get_jQueryProxy().selectElement("BodyViewContainer"));
        this.$A_1.set_dataContext(this.get_dataContext());
        this.$A_1.initialize()
    }
};
Mscrm.ProcessAutomation.ProcessDialogPropertyViewFactory = function() {
    Mscrm.ProcessAutomation.ProcessDialogPropertyViewFactory.initializeBase(this)
};
Mscrm.ProcessAutomation.ProcessDialogPropertyViewFactory.prototype = {
    createReadProperty: function(viewModel, activityType) {
        switch (activityType) {
        case "dialog_child":
        case "dialog_page":
        case "dialog_root":
        case "dialog_asiign_variable":
        case "dialog_query":
            return new Mscrm.ProcessAutomation.ReadProcessPropertyPanelView(viewModel);
        default:
            return Mscrm.ProcessAutomation.WorkflowPropertyViewFactory.prototype.createReadProperty
                .call(this, viewModel, activityType)
        }
    }
};
Mscrm.ProcessAutomation.ProcessDialogRuntimeBodyView = function($p0) {
    Mscrm.ProcessAutomation.ProcessDialogRuntimeBodyView.initializeBase(this, [$p0])
};
Mscrm.ProcessAutomation.ProcessDialogRuntimeBodyView.prototype = {
    $9_4: null,
    get_automationControl: function() {
        if (IsNull(this.$9_4)) this.$9_4 = new Mscrm.ProcessAutomation.ProcessDialogRuntimeAutomationControl;
        return this.$9_4
    }
};
Mscrm.ProcessAutomation
    .ProcessDialogRuntimePropertyViewFactory = function() {
        Mscrm.ProcessAutomation.ProcessDialogRuntimePropertyViewFactory.initializeBase(this)
    };
Mscrm.ProcessAutomation.ProcessDialogRuntimePropertyViewFactory.prototype = {
    createReadProperty: function(viewModel, activityType) {
        if (IsNull(viewModel)) return new Mscrm.ProcessAutomation.NullPropertyPanelView(viewModel);
        var $v_0 = viewModel.get_model().get_status();
        if (!IsNull($v_0) && $v_0.code !== -1)
            return new Mscrm.ProcessAutomation.ReadWorkflowRuntimePropertyPanelView(viewModel);
        return Mscrm.ProcessAutomation.ProcessDialogPropertyViewFactory.prototype.createReadProperty
            .call(this, viewModel, activityType)
    }
};
Mscrm.ProcessAutomation.ProcessDialogRuntimeView = function(element) {
    Mscrm.ProcessAutomation.ProcessDialogRuntimeView.initializeBase(this, [element])
};
Mscrm.ProcessAutomation.ProcessDialogRuntimeView.prototype = {
    initialize: function() {
        this.$C_1 = new Mscrm.ProcessAutomation
            .WorkflowHeaderView(this.get_jQueryProxy().selectElement("HeaderViewContainer"));
        this.$C_1.set_dataContext(this.get_dataContext());
        this.$C_1.initialize();
        this.$A_1 = new Mscrm.ProcessAutomation
            .ProcessDialogRuntimeBodyView(this.get_jQueryProxy().selectElement("BodyViewContainer"));
        this.$A_1.set_dataContext(this.get_dataContext());
        this.$A_1.initialize()
    }
};
Mscrm.ProcessAutomation
    .AssignValueHeaderPropertyPanelViewComponent = function(model) {
        Mscrm.ProcessAutomation.AssignValueHeaderPropertyPanelViewComponent.initializeBase(this, [model])
    };
Mscrm.ProcessAutomation.AssignValueHeaderPropertyPanelViewComponent.prototype = {
    get_template: function() {
        var $v_0 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_1 = String.format(this.$1_1,
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("AssignValuePropertyTitle")),
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("AssignValueVariableName")));
        return _.template($v_1)
    },
    retrieveAttributes: function() {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Object),
            $v_1 = {},
            $v_2 = this.$4_0,
            $v_3 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_4 = $v_3.GetLabel("EmptyPropertyPlaceholder");
        if (IsNull($v_2.get_variableName())) {
            $v_1["ArgumentName"] = this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_4);
            $v_1["ArgumentNameAttr"] = this.get_crmEncodeDecodeProxy().crmHtmlAttributeEncode($v_4)
        } else {
            var $v_5 = $v_2.get_workflow().getIdentifierDisplayName($v_2.get_variableName());
            $v_1["ArgumentName"] = this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_5);
            $v_1["ArgumentNameAttr"] = this.get_crmEncodeDecodeProxy().crmHtmlAttributeEncode($v_5)
        }
        $v_0.resolve($v_1);
        return $v_0.promise()
    },
    $1_1:
        "\r\n\t<div class='process_prop_title process_child process_child_top' tabindex='0'>{0}</div>\r\n\t<div class='wf_prop_field_group process_child'>\r\n\t\t<div id='argument_name_label' class='wf_prop_field'>{1}</div>\r\n\t\t<div aria-labelledby='argument_name_label' class='wf_prop_value' tabindex='0' title='<%= ArgumentName %>'><%= ArgumentNameAttr %></div>\r\n\t</div>\r\n"
};
Mscrm.ProcessAutomation
    .ChildDialogHeaderPropertyPanelViewComponent = function(model) {
        Mscrm.ProcessAutomation.ChildDialogHeaderPropertyPanelViewComponent.initializeBase(this, [model])
    };
Mscrm.ProcessAutomation.ChildDialogHeaderPropertyPanelViewComponent.prototype = {
    get_template: function() {
        var $v_0 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_1 = String.format(this.$1_1,
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("ChildDialogPropertyTitle")),
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("ProcessEntity")));
        return _.template($v_1)
    },
    retrieveAttributes: function() {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Object),
            $v_1 = {},
            $v_2 = this.$4_0,
            $v_3 = Microsoft.Crm.Workflow.Expressions.EntityDecoratorFactory
                .getDecorator($v_2.get_entity(), this.get_processObjectModelMetadataProvider()).get_displayName();
        $v_1["Entity"] = this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_3);
        $v_1["EntityAttr"] = this.get_crmEncodeDecodeProxy().crmHtmlAttributeEncode($v_3);
        $v_0.resolve($v_1);
        return $v_0.promise()
    },
    $1_1:
        "\r\n\t<div class='process_prop_title process_child process_child_top' tabindex='0'>{0}</div>\r\n\t<div class='wf_prop_field_group process_child'>\r\n\t\t<div id='status_label' class='wf_prop_field'>{1}</div>\r\n\t\t<div aria-labelledby='status_label' class='wf_prop_value' tabindex='0' title='<%= EntityAttr %>'><%= Entity %></div>\r\n\t</div>\r\n"
};
Mscrm.ProcessAutomation
    .PageHeaderPropertyPanelViewComponent = function(model) {
        Mscrm.ProcessAutomation.PageHeaderPropertyPanelViewComponent.initializeBase(this, [model])
    };
Mscrm.ProcessAutomation.PageHeaderPropertyPanelViewComponent.prototype = {
    get_template: function() {
        var $v_0 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_1 = String.format(this.$1_1,
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("PagePropertyTitle")));
        return _.template($v_1)
    },
    $1_1: "\r\n\t<div class='process_prop_title process_child_top process_child' tabindex='0'>{0}</div>\r\n"
};
Mscrm.ProcessAutomation
    .ProcessDialogRootHeaderPropertyPanelViewComponent = function(model) {
        Mscrm.ProcessAutomation.ProcessDialogRootHeaderPropertyPanelViewComponent.initializeBase(this, [model])
    };
Mscrm.ProcessAutomation.ProcessDialogRootHeaderPropertyPanelViewComponent.prototype = {
    get_template: function() {
        var $v_0 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_1 = String.format(this.$1_1,
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("DialogPropertyTitle")),
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("ProcessEntity")));
        return _.template($v_1)
    },
    retrieveAttributes: function() {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Object),
            $v_1 = {},
            $v_2 = this.$7_0.get_processStep(),
            $v_3 = Mscrm.ProcessAutomation.EntityCacheManager.get_instance()
                .getDisplayName($v_2.get_primaryEntityName());
        $v_1["EntityName"] = this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_3);
        $v_1["EntityNameAttr"] = this.get_crmEncodeDecodeProxy().crmHtmlAttributeEncode($v_3);
        $v_0.resolve($v_1);
        return $v_0.promise()
    },
    $1_1:
        "\r\n\t<div class='process_prop_title process_child process_child_top' tabindex='0'>{0}</div>\r\n\t<div class='wf_prop_field_group process_child'>\r\n\t\t<div id='entity_name_label' class='wf_prop_field'>{1}</div>\r\n\t\t<div aria-labelledby='entity_name_label' class='wf_prop_value' tabindex='0' title='<%= EntityNameAttr %>'><%= EntityName %></div>\r\n\t</div>\r\n"
};
Mscrm.ProcessAutomation
    .QueryHeaderPropertyPanelViewComponent = function(model) {
        Mscrm.ProcessAutomation.QueryHeaderPropertyPanelViewComponent.initializeBase(this, [model])
    };
Mscrm.ProcessAutomation.QueryHeaderPropertyPanelViewComponent.prototype = {
    get_template: function() {
        var $v_0 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_1 = String.format(this.$1_1,
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("QueryPropertyTitle")),
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("ProcessEntity")));
        return _.template($v_1)
    },
    retrieveAttributes: function() {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Object),
            $v_1 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_2 = {},
            $v_3 = this.$4_0,
            $v_4 = $v_1.GetLabel("EmptyPropertyPlaceholder");
        if (!isNullOrEmptyString($v_3.get_entityName()))
            $v_4 = Mscrm.ProcessAutomation.EntityCacheManager.get_instance().getDisplayName($v_3.get_entityName());
        $v_2["Entity"] = this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_4);
        $v_2["EntityAttr"] = this.get_crmEncodeDecodeProxy().crmHtmlAttributeEncode($v_4);
        $v_0.resolve($v_2);
        return $v_0.promise()
    },
    $1_1:
        "\r\n\t<div class='process_prop_title process_child process_child_top' tabindex='0'>{0}</div>\r\n\t<div class='wf_prop_field_group process_child'>\r\n\t\t<div id='status_label' class='wf_prop_field'>{1}</div>\r\n\t\t<div aria-labelledby='status_label' class='wf_prop_value' tabindex='0' title='<%= EntityAttr %>'><%= Entity %></div>\r\n\t</div>\r\n"
};
Mscrm.ProcessAutomation
    .AssignValueBodyPropertyPanelViewComponent = function(model) {
        Mscrm.ProcessAutomation.AssignValueBodyPropertyPanelViewComponent.initializeBase(this, [model])
    };
Mscrm.ProcessAutomation.AssignValueBodyPropertyPanelViewComponent.prototype = {
    get_template: function() {
        var $v_0 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_1 = String.format(this.$1_1, this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("Value")));
        return _.template($v_1)
    },
    retrieveAttributes: function() {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Object),
            $v_1 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_2 = {},
            $v_3 = this.$7_0.get_processStep(),
            $v_4 = $v_1.GetLabel("EmptyPropertyPlaceholder");
        if (IsNull($v_3.get_valueExpression())) {
            $v_2["Value"] = this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_4);
            $v_2["ValueAttr"] = this.get_crmEncodeDecodeProxy().crmHtmlAttributeEncode($v_4)
        } else {
            var $v_5 = new Mscrm.ProcessAutomation.HtmlBuilderContext;
            $v_5.$L_0 = new Mscrm.ProcessAutomation.ProcessObjectModelMetadataProvider(this.$B_0);
            $v_5.$O_0 = this.$B_0[$v_3.get_workflow().get_primaryEntityName()];
            var $v_6 = new Sys.StringBuilder;
            this.get_expressionHtmlBuilderFactory().getExpressionBuilder($v_5, $v_3.get_valueExpression())
                .build($v_6, $v_3.get_valueExpression());
            var $v_7 = $v_6.toString();
            if ($v_7) {
                $v_2["Value"] = $v_7;
                $v_2["ValueAttr"] = $v_7
            }
        }
        $v_0.resolve($v_2);
        return $v_0.promise()
    },
    $1_1:
        "\r\n\t<div class='wf_prop_field_group'>\r\n\t\t<div id='value_label' class='wf_prop_field' title='{0}'>{0}</div>\r\n\t\t<div aria-labelledby='value_label' class='wf_prop_value' tabindex='0' title='<%= ValueAttr %>'><%= Value %></div>\r\n\t</div>\r\n"
};
Mscrm.ProcessAutomation.ChildDialogBodyPropertyPanelViewComponent = function(model) {
    this.$$d_$2U_1 = Function.createDelegate(this, this.$2U_1);
    this.$2V_1 = window.screen.availHeight;
    this.$2W_1 = window.screen.availWidth - 10;
    Mscrm.ProcessAutomation.ChildDialogBodyPropertyPanelViewComponent.initializeBase(this, [model])
};
Mscrm.ProcessAutomation.ChildDialogBodyPropertyPanelViewComponent.prototype = {
    get_template: function() {
        var $v_0 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_1 = String.format(this.$1_1, this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("Dialog")));
        return _.template($v_1)
    },
    retrieveAttributes: function() {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Object), $$t_3 = this;
        this.$2P_1().done(function($p1_0) {
            var $v_1 = {};
            $v_1["ChildWorkflow"] = $$t_3.get_crmEncodeDecodeProxy().crmHtmlEncode($p1_0);
            $v_1["ChildWorkflowAttr"] = $$t_3.get_crmEncodeDecodeProxy().crmHtmlAttributeEncode($p1_0);
            $v_0.resolve($v_1)
        });
        return $v_0.promise()
    },
    $2P_1: function() {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(String, Object),
            $v_1 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_2 = $v_1.GetLabel("EmptyPropertyPlaceholder"),
            $v_3 = this.$4_0,
            $v_4 = $v_3.get_childWorkflow();
        if (IsNull($v_4)) {
            $v_0.resolve($v_2);
            return $v_0.promise()
        }
        if (!isNullOrEmptyString($v_4.get_label())) {
            $v_2 = $v_4.get_label();
            $v_0.resolve($v_2);
            return $v_0.promise()
        }
        if (!IsNull($v_4.get_value()) && !IsNull($v_4.get_value().get_value())) {
            var $v_5 = $v_4.get_value().get_value()
                    .toString(),
                $v_6 = "name",
                $v_7 = [$v_6],
                $$t_A = this,
                $$t_B = this;
            Xrm.Internal.messages.retrieve($v_4.get_entityType(), $v_5, $v_7).then(function($p1_0) {
                    $v_2 = $p1_0.entity.getFieldObjectData($v_6);
                    $v_0.resolve($v_2)
                },
                function($p1_0) { $v_0.resolve($v_2) })
        } else $v_0.resolve($v_2);
        return $v_0.promise()
    },
    retrieveCompleted: function() {
        Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent.prototype.retrieveCompleted.call(this);
        var $v_0 = this.$4_0;
        if (IsNull($v_0)) return;
        var $v_1 = $v_0.get_childWorkflow();
        if (IsNull($v_1) || IsNull($v_1.get_value())) return;
        if (IsNull($v_1.get_value().get_value())) return;
        var $v_2 = this.$5_0.find("#processdesigner_childworkflow"),
            $v_3 = $P_CRM('<a id="startchildworkflowlink" class="link" href="#"></a>');
        $v_3.text($v_2.text());
        $v_2.text("");
        $v_2.append($v_3);
        $v_3.click(this.$$d_$2U_1)
    },
    $2U_1: function($p0) {
        var $v_0 = this.$7_0.$2_2, $v_1 = $v_0.get_childWorkflow(), $v_2 = $v_1.get_value().get_value().toString();
        if (!IsNull($v_1)) {
            var $v_3 = Mscrm.CrmUri.create("/Tools/SystemCustomization/ProcessDesigner/processdesigner.aspx");
            $v_3.get_query()["id"] = this.get_crmEncodeDecodeProxy().crmUrlEncode($v_2);
            $v_3.get_query()["type"] = 1;
            openStdWin($v_3, $v_2, this.$2V_1, this.$2W_1, null)
        }
    },
    dispose: function() {
        Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent.prototype.dispose.call(this);
        if (!IsNull(this.$5_0)) {
            this.$5_0.find("#startchildworkflowlink").unbind("click");
            this.$5_0 = null
        }
    },
    $1_1:
        "\r\n\t<div class='wf_prop_field_group'>\r\n\t\t<div id='childworkflow_label' class='wf_prop_field'>{0}</div>\r\n\t\t<div aria-labelledby='childworkflow_label' class='wf_prop_value' tabindex='0' id='processdesigner_childworkflow' title='<%= ChildWorkflowAttr %>'><%= ChildWorkflow %></div>\r\n\t</div>\r\n"
};
Mscrm.ProcessAutomation
    .PageBodyPropertyPanelViewComponent = function(model) {
        Mscrm.ProcessAutomation.PageBodyPropertyPanelViewComponent.initializeBase(this, [model])
    };
Mscrm.ProcessAutomation.PageBodyPropertyPanelViewComponent.prototype = {
    get_template: function() {
        var $v_0 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_1 = String.format(this.$1_1,
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("ProcessDescription")),
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("PromptAndResponse")));
        return _.template($v_1)
    },
    retrieveAttributes: function() {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Object),
            $v_1 = this.$7_0,
            $v_2 = $v_1.get_processStep(),
            $v_3 = {};
        if (IsNull($v_2)) $v_0.resolve($v_3);
        else {
            $v_3["Description"] = this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_2.get_parent().get_Description());
            $v_3["DescriptionAttr"] = this.get_crmEncodeDecodeProxy()
                .crmHtmlAttributeEncode($v_2.get_parent().get_Description())
        }
        var $v_4 = [], $v_5 = new Mscrm.ProcessAutomation.HtmlBuilderContext;
        $v_5.$L_0 = new Mscrm.ProcessAutomation.ProcessObjectModelMetadataProvider(this.$B_0);
        for (var $v_6 = 0; $v_6 < $v_2.get_Steps().get_Count(); $v_6++) {
            var $v_7 = {}, $v_8 = new Sys.StringBuilder, $v_9 = $v_2.get_Steps().get_item($v_6);
            $v_5.$O_0 = this.$B_0[$v_9.get_queryEntityName()];
            this.get_expressionHtmlBuilderFactory().getExpressionBuilder($v_5, $v_9.get_promptText())
                .build($v_8, $v_9.get_promptText());
            $v_7["Name"] = $v_8.toString();
            $v_7["IdAttr"] = this.get_crmEncodeDecodeProxy().crmHtmlAttributeEncode($v_9.get_Id());
            Array.add($v_4, $v_7)
        }
        $v_3["PromptsList"] = $v_4;
        $v_0.resolve($v_3);
        return $v_0.promise()
    },
    retrieveCompleted: function() {
        Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent.prototype.retrieveCompleted.call(this);
        for (var $v_0 = this.$4_0, $v_1 = 0; $v_1 < $v_0.get_Steps().get_Count(); ++$v_1) {
            var $v_2 = $v_0.get_Steps().get_item($v_1),
                $v_3 = "#" + this.get_crmEncodeDecodeProxy().crmHtmlAttributeEncode($v_2.get_Id()),
                $v_4 = $P_CRM('<a class="link" href="#"></a>').attr("id", $v_3).addClass("wf_prop_line"),
                $v_5 = this.$5_0.find($v_3);
            $v_4.text($v_5.text());
            $v_5.after($v_4);
            $v_5.remove();
            var $$t_8 = this;
            $v_4.click(function($p1_0) {
                var $v_6 = Mscrm.CrmUri.create("/SFA/workflow/PromptResponse.aspx");
                $v_6.get_query()["EntityId"] = $$t_8.get_crmEncodeDecodeProxy()
                    .crmUrlEncode($v_2.get_workflow().get_workflowEntityId().toString());
                $v_6.get_query()["StepId"] = $$t_8.get_crmEncodeDecodeProxy().crmUrlEncode($v_2.get_Id());
                $v_6.get_query()["readonlymode"] = true;
                openStdWin($v_6, "name", 580, 660, null)
            })
        }
    },
    dispose: function() {
        Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent.prototype.dispose.call(this);
        for (var $v_0 = this.$4_0, $v_1 = 0; $v_1 < $v_0.get_Steps().get_Count(); ++$v_1) {
            var $v_2 = $v_0.get_Steps().get_item($v_1),
                $v_3 = "#" + this.get_crmEncodeDecodeProxy().crmHtmlAttributeEncode($v_2.get_Id()),
                $v_4 = this.$5_0.find($v_3);
            $v_4.unbind("click")
        }
    },
    $1_1:
        "\r\n\t<div id='description_label' class='wf_prop_header_line'>{0}</div>\r\n\t<div aria-labelledby='description_label' class='description_box' tabindex='0' title='<%= DescriptionAttr %>'><%= Description %></div>\r\n\t<div class='wf_prop_header_line' tabindex='0'>{1}</div>\r\n\t<% _.each(PromptsList, function(prompt) {{ %>\r\n\t\t<div class='wf_prop_field_group'>\r\n\t\t\t<div id='<%= prompt.IdAttr %>' class='wf_prop_line' tabindex='0'><%= prompt.Name %></div>\r\n\t\t</div>\r\n\t<% }}); %>\r\n"
};
Mscrm.ProcessAutomation
    .ProcessDialogRootBodyPropertyPanelViewComponent = function(model) {
        Mscrm.ProcessAutomation.ProcessDialogRootBodyPropertyPanelViewComponent.initializeBase(this, [model])
    };
Mscrm.ProcessAutomation.ProcessDialogRootBodyPropertyPanelViewComponent.prototype = {
    get_template: function() {
        var $v_0 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_1 = String.format(this.$1_1,
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("WorkflowPropertyUsageLabel")),
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("DialogInputArguments")),
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("ActionArgumentName")),
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("ActionArgumentType")),
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("DialogDefaultValues")),
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("DialogVariables")));
        return _.template($v_1)
    },
    retrieveAttributes: function() {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Object),
            $v_1 = this.$7_0.get_processStep(),
            $v_2 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_3 = {},
            $v_4 = Mscrm.ProcessAutomation.ProcessDesignerDataJsonWrapper.get_instance().EntityJson,
            $v_5 = [];
        $v_4.IsChildProcess &&
            Array.add($v_5, this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_2.GetLabel("WorkflowPropertyUsageChild")));
        $v_4.IsOnDemandProcess &&
            Array.add($v_5,
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_2.GetLabel("WorkflowPropertyUsageOnDemand")));
        $v_3["AttributeUsageTypes"] = $v_5;
        var $v_6 = [], $v_7 = [], $v_8 = new Mscrm.ProcessAutomation.HtmlBuilderContext;
        $v_8.$L_0 = new Mscrm.ProcessAutomation.ProcessObjectModelMetadataProvider(this.$B_0);
        for (var $v_9 = 0; $v_9 < $v_1.get_workflowStepInputs().get_Count(); $v_9++) {
            var $v_A = $v_1.get_workflowStepInputs().get_item($v_9), $v_B = this.$2M_1($v_A, $v_8);
            Array.add($v_6, $v_B)
        }
        for (var $v_C = 0; $v_C < $v_1.get_workflowStepVariables().get_Count(); $v_C++) {
            var $v_D = $v_1.get_workflowStepVariables().get_item($v_C), $v_E = this.$2M_1($v_D, $v_8);
            Array.add($v_7, $v_E)
        }
        $v_3["InputArguments"] = $v_6;
        $v_3["Variables"] = $v_7;
        $v_0.resolve($v_3);
        return $v_0.promise()
    },
    $2M_1: function($p0, $p1) {
        var $v_0 = {};
        $v_0["Name"] = this.get_crmEncodeDecodeProxy().crmHtmlEncode($p0.get_name());
        $v_0["Type"] = this.get_crmEncodeDecodeProxy().crmHtmlEncode($p0.get_argumentTypeDisplay());
        var $v_1 = $p0.get_value(), $v_2 = new Sys.StringBuilder;
        this.get_expressionHtmlBuilderFactory().getExpressionBuilder($p1, $v_1).build($v_2, $v_1);
        $v_0["Value"] = $v_2.toString();
        $v_0["Required"] = $p0.get_required();
        return $v_0
    },
    $1_1:
        "\r\n\t<% if (!(_.isEmpty(AttributeUsageTypes))) {{ %>\r\n\t\t<div class='wf_prop_subheader_line' tabindex='0'>{0}</div>\r\n\t\t<% _.each(AttributeUsageTypes, function(type) {{ %>\r\n\t\t\t<div class='wf_prop_field_group'>\r\n\t\t\t\t<div class='wf_prop_line' tabindex='0'><%= type %></div>\r\n\t\t\t</div>\r\n\t\t<% }}); %>\r\n\t<% }} %>\r\n\t<div class='wf_prop_subheader_line' id='collapse_button_container' data-target='in_arguments_table'><a href='#' class='collapse_button' ></a><a href='#' id='collapse_label' class='collapse_label'>{1}</a></div>\r\n\t<div class='wf_table collapsable' id='in_arguments_table'>\r\n\t\t<div class='wf_row wf_header'>\r\n\t\t\t<div class='wf_col_3'>{2}</div>\r\n\t\t\t<div class='wf_col_3'>{3}</div>\r\n\t\t\t<div class='wf_col_6 wf_col_right'>{4}</div>\r\n\t\t</div>\r\n\t\t<% _.each(InputArguments, function(argumentObject) {{ %>\r\n\t\t\t<div class='wf_row'>\r\n\t\t\t\t<div class='wf_col_3 wf_col_content'>\r\n\t\t\t\t\t<div class='wf_col_inner ellipsis'>\r\n\t\t\t\t\t\t<%= argumentObject.Name %>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class='wf_col_3 wf_col_content'>\r\n\t\t\t\t\t<div class='wf_col_inner ellipsis'>\r\n\t\t\t\t\t\t<%= argumentObject.Type %>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class='wf_col_6 wf_col_content wf_col_right'>\r\n\t\t\t\t\t<div class='wf_col_inner ellipsis'>\r\n\t\t\t\t\t\t<%= argumentObject.Value %>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t<% }}); %>\r\n\t</div>\r\n\t<div class='wf_prop_subheader_line' id='collapse_button_container'  data-target='out_arguments_table'><a href='#' class='collapse_button'></a><a href='#' id='collapse_label' class='collapse_label'>{5}</a></div>\r\n\t<div class='wf_table collapsable' id='out_arguments_table'>\r\n\t\t<div class='wf_row wf_header'>\r\n\t\t\t<div class='wf_col_3'>{2}</div>\r\n\t\t\t<div class='wf_col_3'>{3}</div>\r\n\t\t\t<div class='wf_col_6 wf_col_right'>{4}</div>\r\n\t\t</div>\r\n\t\t<% _.each(Variables, function(argumentObject) {{ %>\r\n\t\t\t<div class='wf_row'>\r\n\t\t\t\t<div class='wf_col_3 wf_col_content'>\r\n\t\t\t\t\t<div class='wf_col_inner ellipsis'>\r\n\t\t\t\t\t\t<%= argumentObject.Name %>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class='wf_col_3 wf_col_content'>\r\n\t\t\t\t\t<div class='wf_col_inner ellipsis'>\r\n\t\t\t\t\t\t<%= argumentObject.Type %>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class='wf_col_6 wf_col_content wf_col_right'>\r\n\t\t\t\t\t<div class='wf_col_inner ellipsis'>\r\n\t\t\t\t\t\t<%= argumentObject.Value %>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t<% }}); %>\r\n\t</div>\r\n"
};
Mscrm.ProcessAutomation.QueryBodyPropertyPanelViewComponent = function(model) {
    this.$$d_$2w_1 = Function.createDelegate(this, this.$2w_1);
    Mscrm.ProcessAutomation.QueryBodyPropertyPanelViewComponent.initializeBase(this, [model])
};
Mscrm.ProcessAutomation.QueryBodyPropertyPanelViewComponent.prototype = {
    get_template: function() {
        var $v_0 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_1 = String.format(this.$1_1,
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("StatementLabel")));
        return _.template($v_1)
    },
    retrieveAttributes: function() {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Object), $v_1 = this.$4_0, $v_2 = {};
        $v_2["Query"] = this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_1.get_Description());
        $v_2["QueryAttr"] = this.get_crmEncodeDecodeProxy().crmHtmlAttributeEncode($v_1.get_Description());
        $v_0.resolve($v_2);
        return $v_0.promise()
    },
    retrieveCompleted: function() {
        Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent.prototype.retrieveCompleted.call(this);
        var $v_0 = this.$4_0;
        if (IsNull($v_0)) return;
        var $v_1 = this.$5_0.find("#processdesigner_query"),
            $v_2 = $P_CRM('<a id="query_link" class="link" href="#"></a>');
        $v_2.text($v_1.text());
        $v_1.text("");
        $v_1.append($v_2);
        $v_2.click(this.$$d_$2w_1)
    },
    $2w_1: function($p0) {
        var $v_0 = this.$7_0.$2_2, $v_1 = Mscrm.CrmUri.create("/SFA/workflow/fetchquery.aspx");
        $v_1.get_query()["EntityId"] = this.get_crmEncodeDecodeProxy()
            .crmUrlEncode($v_0.get_workflow().get_workflowEntityId().toString());
        $v_1.get_query()["StepId"] = this.get_crmEncodeDecodeProxy().crmUrlEncode($v_0.get_Id());
        $v_1.get_query()["readonlymode"] = true;
        openStdWin($v_1, "Defined Query", 580, 660, null)
    },
    dispose: function() {
        Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent.prototype.dispose.call(this);
        if (!IsNull(this.$5_0)) {
            this.$5_0.find("#query_link").unbind("click");
            this.$5_0 = null
        }
    },
    $1_1:
        "\r\n\t<div class='wf_prop_field_group'>\r\n\t\t<div id='childworkflow_label' class='wf_prop_field'>{0}</div>\r\n\t\t<div aria-labelledby='childworkflow_label' class='wf_prop_value' tabindex='0' id='processdesigner_query' title='<%= QueryAttr %>'><%= Query %></div>\r\n\t</div>\r\n"
};
Mscrm.ProcessAutomation.ProcessDialogRuntimePropertyPanelViewComponentProvider = function() {
    this.$14_3 = new Mscrm.ProcessAutomation.ProcessDialogRuntimeStatusPropertyPanelViewComponentFactory;
    Mscrm.ProcessAutomation.ProcessDialogRuntimePropertyPanelViewComponentProvider.initializeBase(this)
};
Mscrm.ProcessAutomation.ProcessDialogRuntimePropertyPanelViewComponentProvider.prototype = {
    getComponents: function(model, entityMetadata) {
        var $v_0 = Mscrm.ProcessAutomation.ProcessPropertyPanelViewComponentProvider.prototype.getComponents
                .call(this, model, entityMetadata),
            $v_1 = this.$14_3.createComponent(model);
        $v_1.set_entityMetadata(entityMetadata);
        Array.add($v_0, $v_1);
        return $v_0
    }
};
Mscrm.ProcessAutomation
    .ProcessDialogRuntimeStatusPropertyPanelViewComponentFactory =
    function() {
        Mscrm.ProcessAutomation.ProcessDialogRuntimeStatusPropertyPanelViewComponentFactory.initializeBase(this)
    };
Mscrm.ProcessAutomation.ProcessDialogRuntimeStatusPropertyPanelViewComponentFactory.prototype = {
    createComponent: function(model) {
        if (model.getActivityTypeId() === "dialog_root")
            return new Mscrm.ProcessAutomation.AsyncOperationRootStatusPropertyPanelViewComponent(model);
        return Mscrm.ProcessAutomation.WorkflowRuntimeStatusPropertyPanelViewComponentFactory.prototype.createComponent
            .call(this, model)
    }
};
Mscrm.ProcessAutomation
    .ProcessDialogBodyPropertyPanelViewComponentFactory = function() {
        Mscrm.ProcessAutomation.ProcessDialogBodyPropertyPanelViewComponentFactory.initializeBase(this)
    };
Mscrm.ProcessAutomation.ProcessDialogBodyPropertyPanelViewComponentFactory.prototype = {
    createComponent: function(model) {
        switch (model.getActivityTypeId()) {
        case "dialog_child":
            return new Mscrm.ProcessAutomation.ChildDialogBodyPropertyPanelViewComponent(model);
        case "dialog_root":
            return new Mscrm.ProcessAutomation.ProcessDialogRootBodyPropertyPanelViewComponent(model);
        case "dialog_page":
            return new Mscrm.ProcessAutomation.PageBodyPropertyPanelViewComponent(model);
        case "dialog_asiign_variable":
            return new Mscrm.ProcessAutomation.AssignValueBodyPropertyPanelViewComponent(model);
        case "dialog_query":
            return new Mscrm.ProcessAutomation.QueryBodyPropertyPanelViewComponent(model);
        default:
            return Mscrm.ProcessAutomation.WorkflowBodyPropertyPanelViewComponentFactory.prototype.createComponent
                .call(this, model)
        }
    }
};
Mscrm.ProcessAutomation
    .ProcessDialogHeaderPropertyPanelViewComponentFactory =
    function() { Mscrm.ProcessAutomation.ProcessDialogHeaderPropertyPanelViewComponentFactory.initializeBase(this) };
Mscrm.ProcessAutomation.ProcessDialogHeaderPropertyPanelViewComponentFactory.prototype = {
    createComponent: function(model) {
        switch (model.getActivityTypeId()) {
        case "dialog_child":
            return new Mscrm.ProcessAutomation.ChildDialogHeaderPropertyPanelViewComponent(model);
        case "dialog_root":
            return new Mscrm.ProcessAutomation.ProcessDialogRootHeaderPropertyPanelViewComponent(model);
        case "dialog_page":
            return new Mscrm.ProcessAutomation.PageHeaderPropertyPanelViewComponent(model);
        case "dialog_asiign_variable":
            return new Mscrm.ProcessAutomation.AssignValueHeaderPropertyPanelViewComponent(model);
        case "dialog_query":
            return new Mscrm.ProcessAutomation.QueryHeaderPropertyPanelViewComponent(model);
        default:
            return Mscrm.ProcessAutomation.WorkflowHeaderPropertyPanelViewComponentFactory.prototype.createComponent
                .call(this, model)
        }
    }
};
Mscrm.ProcessAutomation.ProcessDialogPropertyPanelViewComponentProvider = function() {
    Mscrm.ProcessAutomation.ProcessDialogPropertyPanelViewComponentProvider.initializeBase(this);
    this.$Z_0 = new Mscrm.ProcessAutomation.ProcessDialogHeaderPropertyPanelViewComponentFactory;
    this.$W_0 = new Mscrm.ProcessAutomation.ProcessDialogBodyPropertyPanelViewComponentFactory
};
Mscrm.ProcessAutomation
    .ProcessDialogPropertyPanelScrollableCssClassProvider =
    function() { Mscrm.ProcessAutomation.ProcessDialogPropertyPanelScrollableCssClassProvider.initializeBase(this) };
Mscrm.ProcessAutomation.ProcessDialogPropertyPanelScrollableCssClassProvider.prototype = {
    getScrollableCssClass: function(model) {
        switch (model.getActivityTypeId()) {
        case "dialog_page":
            return "dialog_scrollable_filled_group_page";
        default:
            return Mscrm.ProcessAutomation.WorkflowPropertyPanelScrollableCssClassProvider.prototype
                .getScrollableCssClass.call(this, model)
        }
    }
};
Mscrm.ProcessAutomation.AbstractMetadataProvider = function() {};
Mscrm.ProcessAutomation.ProcessObjectModelMetadataProvider = function(entityMetadata) { this.$1P_0 = entityMetadata };
Mscrm.ProcessAutomation.ProcessObjectModelMetadataProvider.prototype = {
    getAttributeMetadata: function(entityName, attributeName) {
        var $v_0 = this.$1P_0[entityName];
        return $v_0.getAttributeByName(attributeName)
    },
    getAttributeLocalizedName: function(cultureInfo, entityName, attributeName) {
        var $v_0 = this.$1P_0[entityName];
        return $v_0.getAttributeByName(attributeName).LabelName
    },
    getEntityLocalizedName: function(cultureInfo, entityName) {
        var $v_0 = this.$1P_0[entityName];
        return $v_0.get_displayName()
    },
    getResourceString: function(resourceId) {
        return Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection()
            .GetLabel(resourceId)
    },
    tryGetAttributeValueDateTimeBehaviorType: function(entityName, attributeName) { return 0 },
    getAttributeValueType: function(entityName, attributeName) {
        throw Error.notImplemented("The method is not implemented.")
    },
    getAttributesByType: function(entityName, type) { throw Error.notImplemented("The method is not implemented.") },
    getEntitiesReferencedByLookup: function(entityName, attributeName) {
        throw Error.notImplemented("The method is not implemented.")
    },
    getEntityPrimaryFieldLogicalName: function(entityName) {
        throw Error.notImplemented("The method is not implemented.")
    },
    getEntityPrimaryKeyLogicalName: function(entityName) {
        throw Error.notImplemented("The method is not implemented.")
    },
    getLookupAttributes: function(entityName, referenceObjectTypeCode) {
        throw Error.notImplemented("The method is not implemented.")
    },
    getOwnershipType: function(entityName) { throw Error.notImplemented("The method is not implemented.") },
    getParentAttribute: function(entityName, attributeName) {
        throw Error.notImplemented("The method is not implemented.")
    },
    getPicklistValueText: function(cultureInfo, entityName, attributeName, picklistValue) {
        throw Error.notImplemented("The method is not implemented.")
    },
    getRelatedAttributes: function(entityName) { throw Error.notImplemented("The method is not implemented.") },
    getRelatedEntities: function(entityName) { throw Error.notImplemented("The method is not implemented.") },
    getRelatedEntityLogicalName: function(entityName, attributeName) {
        throw Error.notImplemented("The method is not implemented.")
    },
    isCustomEntity: function(entityName) { throw Error.notImplemented("The method is not implemented.") },
    tryGetAttributeValueType: function(entityName, attributeName) {
        throw Error.notImplemented("The method is not implemented.")
    },
    getEntityPrimaryKeyPhysicalName: function(entityName) {
        throw Error.notImplemented("The method is not implemented.")
    },
    getEntityTableName: function(entityName) { throw Error.notImplemented("The method is not implemented.") },
    $1P_0: null
};
Mscrm.ProcessAutomation.RemoteMetadataProvider = function() {
    Mscrm.ProcessAutomation.RemoteMetadataProvider.initializeBase(this)
};
Mscrm.ProcessAutomation.RemoteMetadataProvider.get_instance = function() {
    if (IsNull(Mscrm.ProcessAutomation.RemoteMetadataProvider
        .$3)) Mscrm.ProcessAutomation.RemoteMetadataProvider.$3 = new Mscrm.ProcessAutomation.RemoteMetadataProvider;
    return Mscrm.ProcessAutomation.RemoteMetadataProvider.$3
};
Mscrm.ProcessAutomation.RemoteMetadataProvider.set_instance = function(value) {
    Mscrm.ProcessAutomation.RemoteMetadataProvider.$3 = value;
    return value
};
Mscrm.ProcessAutomation.RemoteMetadataProvider.prototype = {
    retrieveEntityMetadata: function(entityName) {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Mscrm.ProcessAutomation.IEntityMetadata, Object),
            $$t_3 = this,
            $$t_4 = this;
        this.retrieveMultipleEntityMetadata([entityName]).done(function($p1_0) { $v_0.resolve($p1_0[entityName]) })
            .fail(function() { $v_0.reject(null) });
        return $v_0.promise()
    },
    retrieveMultipleEntityMetadata: function(entityNames) {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Object);
        if (!entityNames.length) {
            $v_0.resolve({});
            return $v_0.promise()
        }
        this.get_retrieveEntityMetadataCommand().setParameter("entityNames", JSON.stringify(entityNames));
        this.get_retrieveEntityMetadataCommand()
            .setParameter("processCategory",
                Mscrm.ProcessAutomation.ProcessDesignerDataJsonWrapper.get_instance().ProcessCategory);
        var $$t_A = this;
        this.get_retrieveEntityMetadataCommand().execute(function($p1_0, $p1_1) {
            !$p1_0.get_success() && $v_0.reject("Could not retrieve metadata.");
            for (var $v_1 = Mscrm.Proxies.JQueryProxy.parseJson($p1_0.get_returnValue().substr(8)),
                $$arr_5 = _Dictionary.keys($v_1),
                $$len_6 = $$arr_5.length,
                $$idx_7 = 0;
                $$idx_7 < $$len_6;
                ++$$idx_7) {
                var $v_2 = $$arr_5[$$idx_7], $v_3 = new Mscrm.ProcessAutomation.EntityMetadata;
                $v_3.initializeFromDynamic($v_1[$v_2]);
                $v_1[$v_2] = $v_3
            }
            $v_0.resolve($v_1)
        });
        return $v_0.promise()
    },
    get_retrieveEntityMetadataCommand: function() {
        if (IsNull(this.$10_1)) {
            this.$10_1 = new Mscrm.Proxies.RemoteCommandProxy;
            var $v_0 = new RemoteCommand("ProcessWebService", "RetrieveEntityMetadata");
            this.$10_1.set_element($v_0)
        }
        return this.$10_1
    },
    set_retrieveEntityMetadataCommand: function(value) {
        this.$10_1 = value;
        return value
    },
    $10_1: null
};
Mscrm.ProcessAutomation.SerializedJsonCacheMetadataProvider = function() {
    Mscrm.ProcessAutomation.SerializedJsonCacheMetadataProvider.initializeBase(this);
    this.$1O_1 = {};
    this.$1O_1 = Mscrm.Proxies.JQueryProxy.parseJson(Mscrm.ProcessAutomation.ProcessDesignerDataJsonWrapper
        .get_instance().SerializedEntitiesData.substr(8))
};
Mscrm.ProcessAutomation.SerializedJsonCacheMetadataProvider.get_instance = function() {
    if (IsNull(Mscrm.ProcessAutomation.SerializedJsonCacheMetadataProvider
        .$3))
        Mscrm.ProcessAutomation.SerializedJsonCacheMetadataProvider.$3 = new Mscrm.ProcessAutomation
            .SerializedJsonCacheMetadataProvider;
    return Mscrm.ProcessAutomation.SerializedJsonCacheMetadataProvider.$3
};
Mscrm.ProcessAutomation.SerializedJsonCacheMetadataProvider.set_instance = function(value) {
    Mscrm.ProcessAutomation.SerializedJsonCacheMetadataProvider.$3 = value;
    return value
};
Mscrm.ProcessAutomation.SerializedJsonCacheMetadataProvider.prototype = {
    retrieveEntityMetadata: function(entityName) {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Mscrm.ProcessAutomation.IEntityMetadata, Object),
            $v_1 = new Mscrm.ProcessAutomation.EntityMetadata;
        $v_1.initializeFromDynamic(this.$1O_1[entityName]);
        if (IsNull($v_1)) $v_1 = null;
        $v_0.resolve($v_1);
        return $v_0.promise()
    },
    lookupFromCache: function(entityName) {
        var $v_0 = new Mscrm.ProcessAutomation.EntityMetadata;
        $v_0.initializeFromDynamic(this.$1O_1[entityName]);
        if (IsNull($v_0)) return null;
        return $v_0
    },
    $1O_1: null
};
Mscrm.ProcessAutomation.EntityCacheManager = function() {};
Mscrm.ProcessAutomation.EntityCacheManager.get_instance = function() {
    if (IsNull(Mscrm.ProcessAutomation.EntityCacheManager.$3)) {
        Mscrm.ProcessAutomation.EntityCacheManager.$3 = new Mscrm.ProcessAutomation.EntityCacheManager;
        return Mscrm.ProcessAutomation.EntityCacheManager.$3
    }
    return Mscrm.ProcessAutomation.EntityCacheManager.$3
};
Mscrm.ProcessAutomation.EntityCacheManager.set_instance = function(value) {
    Mscrm.ProcessAutomation.EntityCacheManager.$3 = value;
    return value
};
Mscrm.ProcessAutomation.EntityCacheManager.prototype = {
    getDisplayName: function(entityName) {
        var $v_0 = null, $$t_3 = this;
        Mscrm.ProcessAutomation.SerializedJsonCacheMetadataProvider.get_instance().retrieveEntityMetadata(entityName)
            .done(function($p1_0) { if (!IsNull($p1_0)) $v_0 = $p1_0.get_displayName() });
        return $v_0
    },
    retrieveEntityMetadata: function(entityName) {
        return Mscrm.ProcessAutomation.EntityMetadataCache.get_instance().retrieveEntityMetadata(entityName)
    },
    retrieveMultipleEntityMetadata: function(entities) {
        return Mscrm.ProcessAutomation.EntityMetadataCache.get_instance().retrieveMultipleEntityMetadata(entities)
    }
};
Mscrm.ProcessAutomation.EntityMetadata = function() {};
Mscrm.ProcessAutomation.EntityMetadata.prototype = {
    initializeFromDynamic: function(dynamicWrapper) {
        var $v_0 = dynamicWrapper;
        this.$1e_0 = $v_0.Attributes;
        this.$1z_0 = $v_0.DisplayName;
        this.$21_0 = $v_0.EntityTypeCode;
        var $v_1 = $v_0.AdditionalData;
        if (!IsNull($v_1)) this.$26_0 = $v_1.OneToManyEntityReference
    },
    get_displayName: function() { return this.$1z_0 },
    get_entityTypeCode: function() { return this.$21_0 },
    get_attributes: function() { return this.$1e_0 },
    get_oneToManyEntityRelations: function() { return this.$26_0 },
    getAttributeByName: function(attributeName) {
        if (IsNull(this.$1C_0)) {
            this.$1C_0 = {};
            for (var $$arr_1 = this.$1e_0, $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
                var $v_0 = $$arr_1[$$idx_3];
                this.$1C_0[$v_0.LogicalName] = $v_0
            }
        }
        return this.$1C_0[attributeName]
    },
    $1C_0: null,
    $1z_0: null,
    $21_0: 0,
    $1e_0: null,
    $26_0: null
};
Mscrm.ProcessAutomation.EntityMetadataCache = function() {
    this.$1S_0 = {};
    this.$1S_0 = {};
    var $v_0 = Mscrm.ProcessAutomation.ProcessDesignerDataJsonWrapper.get_instance().EntityName;
    this.$1S_0[$v_0] = Mscrm.ProcessAutomation.SerializedJsonCacheMetadataProvider.get_instance().lookupFromCache($v_0)
};
Mscrm.ProcessAutomation.EntityMetadataCache.get_instance = function() {
    if (IsNull(Mscrm.ProcessAutomation.EntityMetadataCache.$3)) {
        Mscrm.ProcessAutomation.EntityMetadataCache.$3 = new Mscrm.ProcessAutomation.EntityMetadataCache;
        return Mscrm.ProcessAutomation.EntityMetadataCache.$3
    }
    return Mscrm.ProcessAutomation.EntityMetadataCache.$3
};
Mscrm.ProcessAutomation.EntityMetadataCache.set_instance = function(value) {
    Mscrm.ProcessAutomation.EntityMetadataCache.$3 = value;
    return value
};
Mscrm.ProcessAutomation.EntityMetadataCache.prototype = {
    retrieveEntityMetadata: function(entityName) {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Mscrm.ProcessAutomation.IEntityMetadata, Object),
            $$t_3 = this,
            $$t_4 = this;
        this.retrieveMultipleEntityMetadata([entityName]).done(function($p1_0) { $v_0.resolve($p1_0[entityName]) })
            .fail(function() { $v_0.reject(null) });
        return $v_0.promise()
    },
    retrieveMultipleEntityMetadata: function(entities) {
        for (var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Object),
            $v_1 = new Array(0),
            $v_2 = {},
            $v_4 = 0;
            $v_4 < entities.length;
            $v_4++) {
            var $v_5 = this.$2r_0(entities[$v_4]);
            if (IsNull($v_5)) Array.add($v_1, entities[$v_4]);
            else $v_2[entities[$v_4]] = $v_5
        }
        if (!$v_1.length) {
            $v_0.resolve($v_2);
            return $v_0.promise()
        }
        var $v_3 = this, $$t_B = this, $$t_C = this;
        Mscrm.ProcessAutomation.RemoteMetadataProvider.get_instance().retrieveMultipleEntityMetadata($v_1)
            .done(function($p1_0) {
                var $$dict_9 = $p1_0;
                for (var $$key_A in $$dict_9) {
                    var $v_6 = { key: $$key_A, value: $$dict_9[$$key_A] };
                    $v_2[$v_6.key] = $v_6.value;
                    $v_3.$1S_0[$v_6.key] = $v_6.value
                }
                $v_0.resolve($v_2)
            }).fail(function() { $v_0.reject(null) });
        return $v_0.promise()
    },
    $2r_0: function($p0) {
        var $v_0 = this.$1S_0[$p0];
        if (!IsNull($v_0)) return $v_0;
        return null
    }
};
Mscrm.ProcessAutomation.ActionCommand = function() {};
Mscrm.ProcessAutomation.ActionCommand.prototype = {
    get_commandAction: function() { return this.$19_0 },
    set_commandAction: function(value) {
        this.$19_0 = value;
        return value
    },
    execute: function() { !IsNull(this.$19_0) && this.$19_0() },
    $19_0: null
};
Mscrm.ProcessAutomation
    .ProcessDesignerActivitiesStatusInitializer = function() {
        Mscrm.ProcessAutomation.ProcessDesignerActivitiesStatusInitializer.initializeBase(this)
    };
Mscrm.ProcessAutomation.ProcessDesignerActivitiesStatusInitializer.prototype = {
    initializeStatus: function() {
        this.$38_1();
        this.$2T_1()
    },
    get_validationResults: function() { return this.$f_1 },
    set_validationResults: function(value) {
        this.$f_1 = value;
        return value
    },
    $38_1: function() {
        var $v_0 = this.get_$18_1().get_processValidator();
        $v_0.set_uiActivityTree(Mscrm.Automation.AutomationControl.instance.activityTree);
        this.$f_1 = $v_0.validate()
    },
    $2T_1: function() {
        var $v_0 = this.get_$18_1().getStatusCodeProviderFactory(), $v_1 = $v_0;
        $v_1.set_validationResults(this.$f_1);
        var $v_2 = Mscrm.Automation.AutomationControl.instance.activityTree.getActivities();
        if (IsNull($v_2)) return;
        for (var $v_3 = 0; $v_3 < $v_2.length; $v_3++)
            $v_2[$v_3].set_status($v_1.getProvider($v_2[$v_3].getActivityTypeId())
                .getStatus($v_2[$v_3].getActivityId()))
    },
    get_$18_1: function() { return Mscrm.Automation.AutomationControl.instance.settings },
    $f_1: null
};
Mscrm.ProcessAutomation.BranchActivityPositionCalculator = function() {
    Mscrm.ProcessAutomation.BranchActivityPositionCalculator.initializeBase(this)
};
Mscrm.ProcessAutomation.BranchActivityPositionCalculator.prototype = {
    getLineConnectors: function(parentActivity, childActivity) {
        if (!this.$2p_2(parentActivity, childActivity))
            return Mscrm.Automation.AutomationControl.instance.settings.getLineConnectorProviderFactory()
                .getLineConnectorProvider(parentActivity, childActivity).getLineConnectors();
        for (var $v_0 = parentActivity.getDefaultBranchActivityParentsForLineConnections(), $v_1 = [], $v_2 = 0;
            $v_2 < $v_0.length;
            ++$v_2) {
            var $v_3 = $v_0[$v_2];
            if ($v_3 !== childActivity) {
                var $v_4 = Mscrm.Automation.AutomationControl.instance.settings.getActivityPositionCalculatorFactory()
                    .getCalculator($v_3.getActivityTypeId());
                Array.addRange($v_1,
                    Mscrm.ProcessAutomation.BranchActivity.isInstanceOfType($v_3)
                    ? $v_4.getPolylineConnectors($v_3, childActivity)
                    : $v_4.getLineConnectors($v_3, childActivity))
            }
        }
        return $v_1
    },
    $2p_2: function($p0, $p1) {
        if (Mscrm.ProcessAutomation.BranchActivity.isInstanceOfType($p0)) return $p0.get_defaultBranch() === $p1;
        return true
    },
    getPolylineConnectors: function(parentActivity, childActivity) {
        var $v_0 = parentActivity.getCol(),
            $v_1 = parentActivity.getRow(),
            $v_2 = childActivity.getCol(),
            $v_3 = childActivity.getRow();
        if ($v_0 + 1 === $v_2)
            return Mscrm.Automation.AutomationControl.instance.settings.getLineConnectorProviderFactory()
                .getLineConnectorProvider(parentActivity, childActivity).getLineConnectors();
        var $v_4 = Mscrm.Automation.AutomationControl.instance.settings.getLayoutProperties(),
            $v_5 = new Mscrm.Automation.PositionCalculator($v_4),
            $v_6 = new Mscrm.Automation.Point($v_5.computeLeft($v_0), $v_5.computeTop($v_1)),
            $v_7 = new Mscrm.Automation.Point($v_5.computeLeft($v_2), $v_5.computeTop($v_3)),
            $v_8 = parentActivity.get("TreeWidth"),
            $v_9 = new Mscrm.Automation.Point($v_5.computeLeft($v_0 + 1), $v_5.computeTop($v_1 + $v_8)),
            $v_A = [],
            $v_B = Mscrm.Automation.AutomationControl.instance.settings.getConnectorDOMProvider()
                .createConnectorDOM($v_6, $v_9, "line");
        Array.addRange($v_A, $v_B);
        var $v_C = $v_9.getX() - $v_4.getWidth();
        $v_9.setX($v_C);
        $v_B = Mscrm.Automation.AutomationControl.instance.settings.getConnectorDOMProvider()
            .createConnectorDOM($v_9, $v_7, "line");
        Array.addRange($v_A, $v_B);
        return $v_A
    }
};
Mscrm.ProcessAutomation.CachedStepDisplayInfoProvider = function() {};
Mscrm.ProcessAutomation.CachedStepDisplayInfoProvider.get_stepDisplayInfoCache = function() {
    if (!Mscrm.ProcessAutomation.CachedStepDisplayInfoProvider
        .$1r)
        Mscrm.ProcessAutomation.CachedStepDisplayInfoProvider.$1r = Mscrm.Proxies.JQueryProxy
            .parseJson(Mscrm.ProcessAutomation.ProcessDesignerDataJsonWrapper.get_instance().SerializedStepData
                .substr(8));
    return Mscrm.ProcessAutomation.CachedStepDisplayInfoProvider.$1r
};
Mscrm.ProcessAutomation.CachedStepDisplayInfoProvider.prototype = {
    getDisplayInfo: function(stepId) {
        var $v_0 = Mscrm.ProcessAutomation.CachedStepDisplayInfoProvider.get_stepDisplayInfoCache()[stepId];
        if (IsNull($v_0)) return null;
        return $v_0
    },
    setDisplayInfo: function(stepId, displayText) {
        var $v_0 = Mscrm.ProcessAutomation.CachedStepDisplayInfoProvider.get_stepDisplayInfoCache()[stepId];
        if (IsNull($v_0)) {
            $v_0 = new Mscrm.ProcessAutomation.StepDisplayInfo;
            Mscrm.ProcessAutomation.CachedStepDisplayInfoProvider.get_stepDisplayInfoCache()[stepId] = $v_0
        }
        $v_0.DisplayText = displayText
    }
};
Mscrm.ProcessAutomation.ConditionActivityBranches = function() {};
Mscrm.ProcessAutomation.ConditionActivityBranches.prototype = { defaultBranch: null, yesBranch: null, noBranch: null };
Mscrm.ProcessAutomation.Constants = function() {};
Mscrm.ProcessAutomation.ExecutionLineDecorator = function() {
    Mscrm.ProcessAutomation.ExecutionLineDecorator.initializeBase(this)
};
Mscrm.ProcessAutomation.ExecutionLineDecorator.prototype = {
    decorateLines: function(lines) {
        for (var $$arr_1 = lines, $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
            var $v_0 = $$arr_1[$$idx_3];
            $v_0.removeClass("line").addClass("critical_line")
        }
    }
};
Mscrm.ProcessAutomation.ExecutionTileDecorator = function() {
    Mscrm.ProcessAutomation.ExecutionTileDecorator.initializeBase(this)
};
Mscrm.ProcessAutomation.ExecutionTileDecorator.prototype = {
    decorateTileProperties: function(tileProperties) { tileProperties.tileclass += " tileExecution" }
};
Mscrm.ProcessAutomation.ProcessActivitiesStatusInitializer = function() {};
Mscrm.ProcessAutomation.ProcessActivitiesStatusInitializer.prototype = {
    initializeStatus: function() {},
    get_uiActivityTree: function() { return this.$P_0 },
    set_uiActivityTree: function(value) {
        this.$P_0 = value;
        return value
    },
    $P_0: null
};
Mscrm.ProcessAutomation.ProcessActivityCollection = function() {
    Mscrm.ProcessAutomation.ProcessActivityCollection.initializeBase(this)
};
Mscrm.ProcessAutomation.ProcessActivityCollection.prototype = {
    _prepareModel: function(attributes, options) {
        if (attributes instanceof Backbone.Model ||
            Mscrm.ProcessAutomation.ProcessActivityDefinitionModel.isInstanceOfType(attributes)) {
            if (!attributes.collection) attributes.collection = this;
            return attributes
        }
        return Mscrm.Automation.ActivityDefinitionCollection.prototype._prepareModel.call(this, attributes, options)
    }
};
Mscrm.ProcessAutomation
    .ProcessActivityPositionCalculator = function() {
        Mscrm.ProcessAutomation.ProcessActivityPositionCalculator.initializeBase(this)
    };
Mscrm.ProcessAutomation.ProcessActivityPositionCalculator.$34 = function($p0) {
    var $v_0 = 0, $v_1 = $p0.getChildActivitiesSorted();
    if (!IsNull($v_1) && $v_1.length > 0)
        for (var $$arr_3 = $v_1, $$len_4 = $$arr_3.length, $$idx_5 = 0; $$idx_5 < $$len_4; ++$$idx_5) {
            var $v_2 = $$arr_3[$$idx_5], $v_3 = $v_2.get("TreeHeight");
            if ($v_3 > $v_0) $v_0 = $v_3
        }
    $p0.set("TreeHeight", $v_0 + 1)
};
Mscrm.ProcessAutomation.ProcessActivityPositionCalculator.prototype = {
    calculate: function(activityModel, row, column) {
        Mscrm.Automation.DefaultActivityPositionCalculator.prototype.calculate.call(this, activityModel, row, column);
        Mscrm.ProcessAutomation.ProcessActivityPositionCalculator.$34(activityModel)
    }
};
Mscrm.ProcessAutomation.ProcessActivityDefinitionModel = function(activityType) {
    Mscrm.ProcessAutomation.ProcessActivityDefinitionModel.initializeBase(this, [activityType])
};
Mscrm.ProcessAutomation.ProcessActivityDefinitionModel.prototype = {
    get_processStep: function() { return this.$2_2 },
    set_processStep: function(value) {
        this.$2_2 = value;
        this.initializeFromProcessStep();
        return value
    },
    get_status: function() { return this.$1q_2 },
    set_status: function(value) {
        this.$1q_2 = value;
        return value
    },
    initializeFromProcessStep: function() {
        this.setActivityId(this.$2_2.get_Id());
        this.setProcessId(this.$2_2.get_workflow().get_Id())
    },
    $2_2: null,
    $1q_2: null
};
Mscrm.ProcessAutomation.ProcessActivityDropController = function() {
    Mscrm.ProcessAutomation.ProcessActivityDropController.initializeBase(this)
};
Mscrm.ProcessAutomation.ProcessActivityDropController.prototype = {
    createEmptyActivity: function(activityType) {
        var $v_0 = Mscrm.Automation.ActivityDropController.prototype.createEmptyActivity.call(this, activityType),
            $v_1 = Mscrm.Automation.AutomationControl.instance.settings;
        $v_0.set_processStep($v_1.get_defaultObjectGeneratorFactory().createGenerator(activityType).getStep());
        return $v_0
    }
};
Mscrm.ProcessAutomation
    .ProcessActivityPositionCalculatorFactory = function() {
        Mscrm.ProcessAutomation.ProcessActivityPositionCalculatorFactory.initializeBase(this)
    };
Mscrm.ProcessAutomation.ProcessActivityPositionCalculatorFactory.prototype = {
    initializeCalculator: function(activityType) {
        switch (activityType) {
        case "condition":
            return new Mscrm.ProcessAutomation.ProcessConditionActivityPositionCalculator;
        case "wf_wait":
            return new Mscrm.ProcessAutomation.ProcessWaitActivityPositionCalculator;
        default:
            return new Mscrm.ProcessAutomation.ProcessActivityPositionCalculator
        }
    }
};
Mscrm.ProcessAutomation.ProcessActivityType = function() {};
Mscrm.ProcessAutomation
    .ProcessConditionActivityPositionCalculator = function() {
        Mscrm.ProcessAutomation.ProcessConditionActivityPositionCalculator.initializeBase(this)
    };
Mscrm.ProcessAutomation.ProcessConditionActivityPositionCalculator.prototype = {
    calculate: function(activityModel, row, column) {
        activityModel.setRow(row);
        activityModel.setCol(column);
        var $v_0 = this.$2Q_3(activityModel), $v_1 = 0, $v_2 = column, $v_3 = 1;
        if ($v_0.yesBranch) {
            Mscrm.Automation.AutomationControl.instance.settings.getActivityPositionCalculatorFactory()
                .getCalculator($v_0.yesBranch.getActivityTypeId()).calculate($v_0.yesBranch, row, $v_2 + 1);
            var $v_4 = $v_0.yesBranch.get("TreeHeight");
            if ($v_4 > $v_1) $v_1 = $v_4
        }
        Mscrm.Automation.DefaultActivityPositionCalculator.maxRow += $v_3;
        if ($v_0.noBranch) {
            Mscrm.Automation.AutomationControl.instance.settings.getActivityPositionCalculatorFactory()
                .getCalculator($v_0.noBranch.getActivityTypeId())
                .calculate($v_0.noBranch, Mscrm.Automation.DefaultActivityPositionCalculator.maxRow, $v_2 + 1);
            var $v_5 = $v_0.noBranch.get("TreeHeight");
            if ($v_5 > $v_1) $v_1 = $v_5
        }
        activityModel.set("TreeWidth", Mscrm.Automation.DefaultActivityPositionCalculator.maxRow - row);
        if ($v_0.defaultBranch) {
            var $v_6 = Mscrm.Automation.DefaultActivityPositionCalculator.maxRow;
            Mscrm.Automation.DefaultActivityPositionCalculator.maxRow = row;
            $v_2 = column + $v_1 + 1;
            Mscrm.Automation.AutomationControl.instance.settings.getActivityPositionCalculatorFactory()
                .getCalculator($v_0.defaultBranch.getActivityTypeId())
                .calculate($v_0.defaultBranch, Mscrm.Automation.DefaultActivityPositionCalculator.maxRow, $v_2);
            $v_1 += $v_0.defaultBranch.get("TreeHeight");
            if ($v_6 > Mscrm.Automation.DefaultActivityPositionCalculator.maxRow
            ) Mscrm.Automation.DefaultActivityPositionCalculator.maxRow = $v_6
        }
        activityModel.set("TreeHeight", $v_1 + 1)
    },
    getPolylineConnectors: function(parentActivity, childActivity) {
        var $v_0 = this.$2Q_3(parentActivity);
        if (!$v_0.yesBranch)
            return (new Mscrm.ProcessAutomation.ProcessActivityPositionCalculator)
                .getLineConnectors(parentActivity, childActivity);
        return Mscrm.ProcessAutomation.BranchActivityPositionCalculator.prototype.getPolylineConnectors
            .call(this, parentActivity, childActivity)
    },
    $2Q_3: function($p0) {
        var $v_0 = new Mscrm.ProcessAutomation.ConditionActivityBranches, $v_1 = $p0.getChildActivitiesSorted();
        if ($v_1)
            for (var $$arr_3 = $v_1, $$len_4 = $$arr_3.length, $$idx_5 = 0; $$idx_5 < $$len_4; ++$$idx_5) {
                var $v_2 = $$arr_3[$$idx_5];
                switch ($v_2.getParentBranchId()) {
                case 0:
                    $v_0.defaultBranch = $v_2;
                    break;
                case 1:
                    $v_0.yesBranch = $v_2;
                    break;
                case 2:
                    $v_0.noBranch = $v_2;
                    break
                }
            }
        return $v_0
    }
};
Mscrm.ProcessAutomation.ProcessContextFlyoutHandler = function(currentActivity) {
    Mscrm.ProcessAutomation.ProcessContextFlyoutHandler.initializeBase(this, [currentActivity])
};
Mscrm.ProcessAutomation.ProcessContextFlyoutHandler
    .prototype = { getContextRootElement: function() { return $P_CRM("#processdesigner") } };
Mscrm.ProcessAutomation.ProcessCssClass = function() {};
Mscrm.ProcessAutomation.ProcessFlyoutContentProvider = function() {
    Mscrm.ProcessAutomation.ProcessFlyoutContentProvider.initializeBase(this)
};
Mscrm.ProcessAutomation.ProcessFlyoutContentProvider.prototype = {
    createContent: function(flyoutContentType, activity) {
        var $v_0 = null;
        switch (flyoutContentType) {
        case "contextFlyout":
            $v_0 = new Mscrm.Automation.ProcessContextFlyoutContent(activity);
            return $v_0.createContent();
        default:
            throw Error.create("Invalid")
        }
    }
};
Mscrm.ProcessAutomation.ProcessStatusCodeProvider = function() {
    Mscrm.ProcessAutomation.ProcessStatusCodeProvider.initializeBase(this)
};
Mscrm.ProcessAutomation.ProcessStatusCodeProvider.prototype = {
    $4_1: null,
    get_step: function() { return this.$4_1 },
    set_step: function(value) {
        this.$4_1 = value;
        return value
    },
    getStatus: function(activityId) { return new Mscrm.Automation.ActivityStatus(-1, "") }
};
Mscrm.ProcessAutomation.ProcessStatusMessageResolver = function() {
    Mscrm.ProcessAutomation.ProcessStatusMessageResolver.initializeBase(this)
};
Mscrm.ProcessAutomation.ProcessStatusMessageResolver.prototype = {
    resolveMessage: function(messageId) {
        var $v_0 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection();
        if (isNullOrEmptyString(messageId)) return "";
        var $v_1 = $v_0.GetLabel(messageId);
        return isNullOrEmptyString($v_1) ? messageId : $v_1
    }
};
Mscrm.ProcessAutomation.ProcessTree = function() { Mscrm.ProcessAutomation.ProcessTree.initializeBase(this) };
Mscrm.ProcessAutomation.ProcessTree.prototype = {
    fetch: function(processId) {
        var $v_0 = this.fetchCurrentProcess();
        this.setActivityCollection($v_0);
        this.$2s_1();
        var $v_1 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Object), $$t_4 = this;
        this.$2v_1().done(function($p1_0) {
            $v_0.updatePositions();
            $v_1.resolve(null)
        });
        return $v_1.promise()
    },
    createSubsequentActivitiesForLeafs: function() {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Object);
        if (this.get_$2H_1().get_readOnly()) {
            $v_0.resolve(null);
            return $v_0.promise()
        }
        for (var $v_1 = new Array(0), $v_2 = this.getActivities(), $v_3 = 0; $v_3 < $v_2.length; $v_3++) {
            var $v_4 = $v_2[$v_3];
            if ($v_4.getActivityTypeId() === "empty") continue;
            Array.add($v_1, $v_4.createSubsequentActivity())
        }
        if (!$v_1.length) {
            $v_0.resolve(null);
            return $v_0.promise()
        }
        var $$t_6 = this;
        $P_CRM.when.apply(null, $v_1).done(function($p1_0) { $v_0.resolve(null) });
        return $v_0.promise()
    },
    fetchCurrentProcess: function() { return this.get_$2H_1().get_activityDefinitionCollection() },
    $2v_1: function() { return this.createSubsequentActivitiesForLeafs() },
    get_$2H_1: function() {
        if (IsNull(this.$0_1)) {
            var $v_0 = Mscrm.Automation.AutomationControl.instance;
            this.$0_1 = $v_0.get_dataContext()
        }
        return this.$0_1
    },
    $2s_1: function() {
        if (!this.get_$2H_1().get_readOnly()) return;
        for (var $v_0 = this.getActivities(), $v_1 = 0; $v_1 < $v_0.length; $v_1++) $v_0[$v_1].setReadonlyMode(true)
    },
    $0_1: null
};
Mscrm.ProcessAutomation
    .ProcessWaitActivityPositionCalculator = function() {
        Mscrm.ProcessAutomation.ProcessWaitActivityPositionCalculator.initializeBase(this)
    };
Mscrm.ProcessAutomation.ProcessWaitActivityPositionCalculator.prototype = {
    calculate: function(activityModel, row, column) {
        activityModel.setRow(row);
        activityModel.setCol(column);
        for (var $v_0 = activityModel.get_waitActivityBranches(),
            $v_1 = 0,
            $v_2 = row,
            $v_3 = column,
            $v_4 = Mscrm.Automation.AutomationControl.instance.settings.getActivityPositionCalculatorFactory()
                .getCalculator("wf_waitbranch"),
            $v_5 = 0;
            $v_5 < $v_0.$15_0.length;
            ++$v_5) {
            var $v_6 = $v_0.$15_0[$v_5];
            $v_4.calculate($v_6, $v_2, $v_3 + 1);
            var $v_7 = $v_6.get("TreeHeight");
            if ($v_7 > $v_1) $v_1 = $v_7;
            $v_2 = ++Mscrm.Automation.DefaultActivityPositionCalculator.maxRow
        }
        --Mscrm.Automation.DefaultActivityPositionCalculator.maxRow;
        activityModel.set("TreeWidth", Mscrm.Automation.DefaultActivityPositionCalculator.maxRow - row);
        if ($v_0.$N_0) {
            var $v_8 = Mscrm.Automation.DefaultActivityPositionCalculator.maxRow;
            Mscrm.Automation.DefaultActivityPositionCalculator.maxRow = row;
            $v_3 = column + $v_1 + 1;
            Mscrm.Automation.AutomationControl.instance.settings.getActivityPositionCalculatorFactory()
                .getCalculator($v_0.$N_0.getActivityTypeId())
                .calculate($v_0.$N_0, Mscrm.Automation.DefaultActivityPositionCalculator.maxRow, $v_3);
            $v_1 += $v_0.$N_0.get("TreeHeight");
            if ($v_8 > Mscrm.Automation.DefaultActivityPositionCalculator.maxRow
            ) Mscrm.Automation.DefaultActivityPositionCalculator.maxRow = $v_8
        }
        activityModel.set("TreeHeight", $v_1 + 1)
    }
};
Mscrm.ProcessAutomation.Settings = function() { Mscrm.ProcessAutomation.Settings.initializeBase(this) };
Mscrm.ProcessAutomation.Settings.prototype = {
    $28_1: null,
    initialize: function() {
        Mscrm.Automation.DefaultSettings.prototype.initialize.call(this);
        this.setTileInformationFactory(new Mscrm.ProcessAutomation.ProcessTileInformationFactory);
        this.setSlotGeneratorProvider(new Mscrm.ProcessAutomation.ProcessSlotGeneratorProvider);
        this.setIconFactory(new Mscrm.ProcessAutomation.ProcessIconFactory);
        this.setActivityDefinitionFactory(new Mscrm.ProcessAutomation.ProcessActivityDefinitionFactory);
        this.setActivityPositionCalculatorFactory(new Mscrm.ProcessAutomation.ProcessActivityPositionCalculatorFactory);
        this.setLabelKeyValuePhraseCollection(new Mscrm.Automation.ProcessLabelPhraseDictionaryCollection);
        this.setLibraryNodesFactory(new Mscrm.ProcessAutomation.ProcessLibraryNodesFactory);
        this.setPropertyViewFactory(new Mscrm.ProcessAutomation.ProcessPropertyViewFactory);
        this.setSlotHandlerProvider(new Mscrm.Automation.ProcessSlotHandlerProvider);
        this.setPropertyPanelActionHandlerProvider(new Mscrm.Automation.ProcessPropertyPanelActionHandlerProvider);
        this.setStatusCodeProviderFactory(new Mscrm.ProcessAutomation.ProcessDesignerStatusCodeProviderFactory);
        this.setFlyoutContentProvider(new Mscrm.ProcessAutomation.ProcessFlyoutContentProvider);
        this.setActivityDropController(new Mscrm.ProcessAutomation.ProcessActivityDropController);
        this.setStatusMessageResolver(new Mscrm.ProcessAutomation.ProcessStatusMessageResolver);
        this.setSubsequentActivityGenerator(new Mscrm.ProcessAutomation.ProcessSubsequentActivityGenerator);
        this.setRenderRTL(window.LOCID_UI_DIR === "RTL");
        this.setPropertyPanelViewComponentProvider(new Mscrm.ProcessAutomation
            .ProcessPropertyPanelViewComponentProvider);
        this.getLayoutProperties().setTopMargin(40);
        this.$1W_1 = new Mscrm.ProcessAutomation.ProcessValidator;
        this.$1d_1 = new Mscrm.ProcessAutomation.ActivityTreeToProcessConverter;
        this.$g_1 = this.$0_1.get_readOnly()
            ? null
            : new Mscrm.ProcessAutomation.ProcessDesignerActivitiesStatusInitializer;
        this.$1Y_1 = new Mscrm.ProcessAutomation.PropertyViewModelFactory;
        this.$c_1 = new Mscrm.ProcessAutomation.ProcessPropertyPanelScrollableCssClassProvider
    },
    $0_1: null,
    get_viewModel: function() { return this.$0_1 },
    set_viewModel: function(value) {
        this.$0_1 = value;
        return value
    },
    getPropertyPanelViewComponentProvider: function() { return this.$28_1 },
    setPropertyPanelViewComponentProvider: function(provider) { this.$28_1 = provider },
    $n_1: null,
    get_defaultObjectGeneratorFactory: function() { return this.$n_1 },
    set_defaultObjectGeneratorFactory: function(value) {
        this.$n_1 = value;
        return value
    },
    $1W_1: null,
    get_processValidator: function() { return this.$1W_1 },
    set_processValidator: function(value) {
        this.$1W_1 = value;
        return value
    },
    $1d_1: null,
    get_activityTreeToProcessConverter: function() { return this.$1d_1 },
    set_activityTreeToProcessConverter: function(value) {
        this.$1d_1 = value;
        return value
    },
    $1k_1: null,
    get_processToUIActivityCollection: function() { return this.$1k_1 },
    set_processToUIActivityCollection: function(value) {
        this.$1k_1 = value;
        return value
    },
    $g_1: null,
    get_statusInitializer: function() { return this.$g_1 },
    set_statusInitializer: function(value) {
        this.$g_1 = value;
        return value
    },
    $1Y_1: null,
    get_propertyViewModelFactory: function() { return this.$1Y_1 },
    set_propertyViewModelFactory: function(value) {
        this.$1Y_1 = value;
        return value
    },
    $c_1: null,
    get_panelBodyCssProvider: function() { return this.$c_1 },
    set_panelBodyCssProvider: function(value) {
        this.$c_1 = value;
        return value
    }
};
Mscrm.ProcessAutomation.DataAttributeNames = function() {};
Mscrm.ProcessAutomation.AttributeType = function() {};
Mscrm.ProcessAutomation.ReadControlInitializer = function() {};
Mscrm.ProcessAutomation.ReadControlInitializer.initializeReadControls = function(element, entitiesMetadata) {
    if (IsNull(element) || IsNull(entitiesMetadata)) return null;
    var $v_0 = new Array(0);
    $P_CRM(String.format("div[{0}]", "data-control"), element).each(function($p1_0, $p1_1) {
        var $v_1 = null, $v_2 = $P_CRM($p1_1);
        switch ($v_2.attr("data-control")) {
        case "lookup":
            $v_1 = new Mscrm.ProcessAutomation.ReadLookupControl($v_2);
            break;
        default:
            break
        }
        var $v_3 = $v_2.attr("data-entitytype");
        !isNullOrEmptyString($v_3) && $v_1.set_entityMetadata(entitiesMetadata[$v_3]);
        Array.add($v_0, $v_1)
    });
    return $v_0
};
Mscrm.ProcessAutomation.ReadLookupControl = function(element) {
    this.$$d_$2t_0 = Function.createDelegate(this, this.$2t_0);
    this.$M_0 = element;
    this.$p_0 = element.attr("data-recordid");
    this.$1L_0 = element.text()
};
Mscrm.ProcessAutomation.ReadLookupControl.prototype = {
    render: function() {
        if (isNullOrEmptyString(this.$p_0) ||
            IsNull(this.$1U_0) ||
            this.$p_0 === Microsoft.Crm.Client.Core.Framework.Guid.get_empty().toString()) return;
        this.$M_0.text("");
        var $v_0 = $P_CRM('<a id="lookup_html" class="lookup_link" href="#"></a>');
        $v_0.text(this.$1L_0);
        this.$M_0.append($v_0);
        $v_0.click(this.$$d_$2t_0)
    },
    get_displayValue: function() { return this.$1L_0 },
    set_displayValue: function(value) {
        this.$1L_0 = value;
        return value
    },
    get_recordId: function() { return this.$p_0 },
    set_recordId: function(value) {
        this.$p_0 = value;
        return value
    },
    get_entityMetadata: function() { return this.$1U_0 },
    set_entityMetadata: function(value) {
        this.$1U_0 = value;
        return value
    },
    dispose: function() { $P_CRM("#lookup_html", this.$M_0).unbind("click") },
    $2t_0: function($p0) { openObj(this.$1U_0.get_entityTypeCode(), this.$p_0) },
    $M_0: null,
    $p_0: null,
    $1L_0: null,
    $1U_0: null
};
Mscrm.ProcessAutomation.WaitActivityBranches = function() {};
Mscrm.ProcessAutomation.WaitActivityBranches.prototype = {
    $15_0: null,
    $N_0: null,
    get_waitBranches: function() { return this.$15_0 },
    set_waitBranches: function(value) {
        this.$15_0 = value;
        return value
    },
    get_defaultBranch: function() { return this.$N_0 },
    set_defaultBranch: function(value) {
        this.$N_0 = value;
        return value
    }
};
Mscrm.ProcessAutomation.ActivityTreeToProcessConverter = function() {};
Mscrm.ProcessAutomation.ActivityTreeToProcessConverter.prototype = {
    convert: function(tree) {},
    get_process: function() { return this.$F_0 },
    set_process: function(value) {
        this.$F_0 = value;
        return value
    },
    $F_0: null
};
Mscrm.ProcessAutomation.ProcessToUIActivityCollectionVisitor = function() {
    Mscrm.ProcessAutomation.ProcessToUIActivityCollectionVisitor.initializeBase(this);
    this.$1w_1 = Mscrm.Automation.AutomationControl.instance.settings.getActivityDefinitionFactory();
    this.$H_1 = new Mscrm.ProcessAutomation.ProcessActivityCollection
};
Mscrm.ProcessAutomation.ProcessToUIActivityCollectionVisitor.prototype = {
    convert: function(rootStep) {
        this.visitWorkflowStep(rootStep);
        return this.$H_1
    },
    visitConditionBranchStep: function(conditionBranchStep) {
        var $v_0 = null;
        if (!conditionBranchStep.get_conditionBranchDisplayMode() ||
            conditionBranchStep.get_conditionBranchDisplayMode() === 1) {
            $v_0 = this.createUIActivity(conditionBranchStep, "condition");
            this.$6_1 = $v_0;
            this.$8_1 = 1
        }
        for (var $v_1 = 0;
            $v_1 < conditionBranchStep.get_Steps().get_Count();
            $v_1++
        ) conditionBranchStep.get_Steps().get_item($v_1).apply(this);
        this.$6_1 = $v_0
    },
    visitConditionStep: function(conditionStep) {
        for (var $v_0 = null, $v_1 = 0; $v_1 < conditionStep.get_Steps().get_Count(); $v_1++) {
            conditionStep.get_Steps().get_item($v_1).apply(this);
            this.$8_1 = 2;
            if (!$v_1) $v_0 = this.$6_1
        }
        this.$6_1 = $v_0;
        this.$8_1 = 0
    },
    visitWorkflowStep: function(workflowStep) {
        var $v_0 = this.createUIActivity(workflowStep, "root");
        this.$6_1 = $v_0;
        this.$8_1 = 0;
        for (var $v_1 = 0;
            $v_1 < workflowStep.get_Steps().get_Count();
            $v_1++
        ) workflowStep.get_Steps().get_item($v_1).apply(this)
    },
    createUIActivity: function(step, activityType) {
        var $v_0 = this.$1w_1.createActivity(activityType);
        if (!IsNull(this.$6_1)) {
            $v_0.setParentActivityId(this.$6_1.getActivityId());
            $v_0.setParentBranchId(this.$8_1)
        }
        $v_0.set_processStep(step);
        this.$H_1.add($v_0);
        return $v_0
    },
    visitEntityStep: function(entityStep) {},
    visitSetAttributeValueStep: function(setAttributeValueStep) {},
    visitSetDisplayModeStep: function(setDisplayModeStep) {},
    visitSetFieldRequiredLevelStep: function(setFieldRequiredLevelStep) {},
    visitSetMessageStep: function(setMessageStep) {},
    visitSetVisibilityStep: function(setVisibilityStep) {},
    visitStageStep: function(stageStep) {},
    visitPageStep: function(pageStep) {},
    visitStepStep: function(stepStep) {},
    visitControlStep: function(controlStep) {},
    visitActionStep: function(actionStep) {},
    visitCustomJavascriptStep: function(customJSStep) {},
    visitCreateStep: function(createStep) {},
    visitCustomActivityStep: function(customActivityStep) {},
    visitAssignStep: function(assignStep) {},
    visitChildWorkflowStep: function(childWorkflowStep) {},
    visitSendEmailStep: function(sendEmailStep) {},
    visitSetStateStep: function(setStateStep) {},
    visitUpdateStep: function(updateStep) {},
    visitWaitBranchStep: function(waitBranchStep) {},
    visitWaitStep: function(waitStep) {},
    visitWaitTimeoutStep: function(waitTimeoutStep) {},
    visitStopWorkflowStep: function(stopWorkflowStep) {},
    visitRollupRuleStep: function(rollupRuleStep) {},
    visitSetDefaultValueStep: function(setDefaultValueStep) {},
    visitSetNextStageStep: function(setNextStageStep) {},
    visitRelationshipCollectionStep: function(relationshipCollectionStep) {},
    visitRelationshipStep: function(relationshipStep) {},
    visitInteractionStep: function(interactionStep) {},
    visitInteractionPageStep: function(interactionPageStep) {},
    visitChildInteractiveWorkflowStep: function(childWorkflowStep) {},
    visitAssignVariableStep: function(assignVariableStep) {},
    visitQueryStep: function(queryStep) {},
    get_currentParent: function() { return this.$6_1 },
    set_currentParent: function(value) {
        this.$6_1 = value;
        return value
    },
    get_currentParentBranchId: function() { return this.$8_1 },
    set_currentParentBranchId: function(value) {
        this.$8_1 = value;
        return value
    },
    $6_1: null,
    $8_1: 0,
    $1w_1: null,
    $H_1: null
};
Mscrm.ProcessAutomation
    .DefaultConditionBranchStepGenerator = function() {
        Mscrm.ProcessAutomation.DefaultConditionBranchStepGenerator.initializeBase(this)
    };
Mscrm.ProcessAutomation.DefaultConditionBranchStepGenerator.prototype = {
    constructUninitializedStep: function() {
        var $v_0 = new Microsoft.Crm.Workflow.ObjectModel.ConditionStep(this.$2_0);
        $v_0.set_workflow(this.$2_0);
        $v_0.setJQueryFriendlyNameAndId(this.$2_0.get_currentStepId());
        var $v_1 = new Microsoft.Crm.Workflow.ObjectModel
            .ConditionBranchStep($v_0, new Microsoft.Crm.Workflow.Expressions.NullExpression(this.$2_0));
        $v_1.set_parent($v_0);
        return $v_1
    }
};
Mscrm.ProcessAutomation.DefaultObjectGeneratorFactory = function() {};
Mscrm.ProcessAutomation.DefaultObjectGeneratorFactory.prototype = {
    createGenerator: function(activityType) {
        switch (activityType) {
        case "condition":
            return new Mscrm.ProcessAutomation.DefaultConditionBranchStepGenerator;
        default:
            throw Error.create("Non expected type")
        }
    },
    $2_0: null,
    get_processStep: function() { return this.$2_0 },
    set_processStep: function(value) {
        this.$2_0 = value;
        return value
    }
};
Mscrm.ProcessAutomation.DefaultStepGeneratorBase = function() {};
Mscrm.ProcessAutomation.DefaultStepGeneratorBase.prototype = {
    getStep: function() {
        var $v_0 = this.constructUninitializedStep();
        $v_0.set_workflow(this.$2_0);
        $v_0.setJQueryFriendlyNameAndId(this.$2_0.get_currentStepId());
        return $v_0
    },
    $2_0: null,
    get_processStep: function() { return this.$2_0 },
    set_processStep: function(value) {
        this.$2_0 = value;
        return value
    },
    constructUninitializedStep: function() { return null }
};
Mscrm.ProcessAutomation.ConditionSubsequentActivities = function(parentActivity) {
    Mscrm.ProcessAutomation.ConditionSubsequentActivities.initializeBase(this, [parentActivity])
};
Mscrm.ProcessAutomation.ConditionSubsequentActivities.prototype = {
    createChildActivities: function() {
        var $v_0 = new Array(0), $v_1 = this.parentActivity;
        !$v_1.findBranch(1) && Array.add($v_0, this.$2B_1($v_1, 1));
        !$v_1.findBranch(2) && Array.add($v_0, this.$2B_1($v_1, 2));
        !$v_1.findBranch(0) && Array.add($v_0, this.$2B_1($v_1, 0));
        return $v_0
    },
    $2B_1: function($p0, $p1) {
        var $v_0 = $p0.getActivityId(), $v_1 = this.createActivity($v_0, "empty");
        $v_1.setParentBranchId($p1);
        return $v_1
    }
};
Mscrm.ProcessAutomation
    .ProcessSubsequentActivityGenerator = function() {
        Mscrm.ProcessAutomation.ProcessSubsequentActivityGenerator.initializeBase(this)
    };
Mscrm.ProcessAutomation.ProcessSubsequentActivityGenerator.prototype = {
    createGenerator: function(activity) {
        switch (activity.getActivityTypeId()) {
        case "condition":
            return new Mscrm.ProcessAutomation.ConditionSubsequentActivities(activity);
        default:
            return Mscrm.Automation.DefaultSubsequentActivityGenerator.prototype.createGenerator.call(this, activity)
        }
    }
};
Mscrm.ProcessAutomation.MenuCommandFactory = function() {};
Mscrm.ProcessAutomation.MenuCommandFactory.prototype = {
    getBusinessProcessSaveCommand: function(saveDelegate) {
        var $v_0 = new Mscrm.ProcessAutomation.BusinessProcessSaveCommand;
        $v_0.setSaveDelegate(saveDelegate);
        return $v_0
    }
};
Mscrm.ProcessAutomation.BranchActivity = function(activityType) {
    Mscrm.ProcessAutomation.BranchActivity.initializeBase(this, [activityType])
};
Mscrm.ProcessAutomation.BranchActivity.prototype = {
    $N_3: null,
    get_defaultBranch: function() {
        if (!this.$N_3) this.$N_3 = this.findDefaultChildBranch();
        return this.$N_3
    },
    findBranch: function(branchIndex) {
        for (var $v_0 = this.getChildActivitiesSorted(), $$arr_2 = $v_0, $$len_3 = $$arr_2.length, $$idx_4 = 0;
            $$idx_4 < $$len_3;
            ++$$idx_4) {
            var $v_1 = $$arr_2[$$idx_4];
            if ($v_1.getParentBranchId() === branchIndex) return $v_1
        }
        return null
    },
    findDefaultChildBranch: function() { return null },
    getDefaultBranchActivityParentsForLineConnections: function() {
        return this.recursiveGetDefaultBranchActivityParentsForLineConnections(this)
    },
    recursiveGetDefaultBranchActivityParentsForLineConnections: function(activity) {
        if (!activity) return null;
        for (var $v_0 = activity.getChildActivitiesSorted(),
            $v_1 = [],
            $$arr_3 = $v_0,
            $$len_4 = $$arr_3.length,
            $$idx_5 = 0;
            $$idx_5 < $$len_4;
            ++$$idx_5) {
            var $v_2 = $$arr_3[$$idx_5];
            if ($v_2 === this.get_defaultBranch()) continue;
            if ($v_2.isLeaf()) Array.add($v_1, $v_2);
            else
                Array.addRange($v_1,
                    Mscrm.ProcessAutomation.BranchActivity.isInstanceOfType($v_2)
                    ? $v_2.getDefaultBranchActivityParentsForLineConnections()
                    : this.recursiveGetDefaultBranchActivityParentsForLineConnections($v_2))
        }
        return $v_1
    }
};
Mscrm.ProcessAutomation.ConditionActivity = function() {
    Mscrm.ProcessAutomation.ConditionActivity.initializeBase(this, ["condition"])
};
Mscrm.ProcessAutomation.ConditionActivity.prototype = {
    initialize: function(properties) {
        Mscrm.Automation.ActivityDefinitionModel.prototype.initialize.call(this, properties);
        this.setActivityTypeId("condition");
        this.addNewItem("condition")
    },
    initializeFromProcessStep: function() {
        Mscrm.ProcessAutomation.ProcessActivityDefinitionModel.prototype.initializeFromProcessStep.call(this);
        var $v_0 = this.$2_2,
            $v_1 = new Mscrm.ProcessAutomation.ProcessItemModel,
            $v_2 = (new Mscrm.ProcessAutomation.CachedStepDisplayInfoProvider).getDisplayInfo($v_0.get_Id());
        if ($v_2) {
            $v_1.Title = $v_2.DisplayText;
            $v_1.ItemID = $v_0.get_Id();
            this.setActiveItemPropertiesWithoutRaisingEvent($v_1)
        }
    },
    findDefaultChildBranch: function() { return this.findBranch(0) },
    recursiveGetDefaultBranchActivityParentsForLineConnections: function(activity) {
        for (var $v_0 = activity.getChildActivitiesSorted(),
            $v_1 = [],
            $v_2 = 0,
            $$arr_4 = $v_0,
            $$len_5 = $$arr_4.length,
            $$idx_6 = 0;
            $$idx_6 < $$len_5;
            ++$$idx_6) {
            var $v_3 = $$arr_4[$$idx_6];
            if ($v_3 === this.get_defaultBranch()) continue;
            if ($v_3.isLeaf()) Array.add($v_1, $v_3);
            else
                Array.addRange($v_1,
                    Mscrm.ProcessAutomation.BranchActivity.isInstanceOfType($v_3)
                    ? $v_3.getDefaultBranchActivityParentsForLineConnections()
                    : Mscrm.ProcessAutomation.BranchActivity.prototype
                    .recursiveGetDefaultBranchActivityParentsForLineConnections.call(this, $v_3));
            ++$v_2
        }
        $v_2 === 1 && Array.add($v_1, this);
        return $v_1
    }
};
Mscrm.ProcessAutomation.EmptyActivity = function() {
    Mscrm.ProcessAutomation.EmptyActivity.initializeBase(this, ["empty"])
};
Mscrm.ProcessAutomation.EmptyActivity.prototype = {
    initialize: function(properties) {
        Mscrm.Automation.ActivityDefinitionModel.prototype.initialize.call(this, properties);
        this.setActivityTypeId("empty")
    },
    isEmpty: function(itemId) { return true },
    canMove: function() { return false }
};
Mscrm.ProcessAutomation.ProcessActivityDefinitionFactory = function() {
    Mscrm.ProcessAutomation.ProcessActivityDefinitionFactory.initializeBase(this)
};
Mscrm.ProcessAutomation.ProcessActivityDefinitionFactory.prototype = {
    createActivity: function(activityType) {
        switch (activityType) {
        case "empty":
            return new Mscrm.ProcessAutomation.EmptyActivity;
        case "condition":
            return new Mscrm.ProcessAutomation.ConditionActivity;
        case "root":
            return new Mscrm.ProcessAutomation.RootActivity;
        default:
            return new Mscrm.ProcessAutomation.ProcessActivityDefinitionModel(activityType)
        }
    }
};
Mscrm.ProcessAutomation.RootActivity = function() {
    Mscrm.ProcessAutomation.RootActivity.initializeBase(this, ["root"])
};
Mscrm.ProcessAutomation.RootActivity.prototype = {
    initialize: function(properties) {
        Mscrm.Automation.ActivityDefinitionModel.prototype.initialize.call(this, properties);
        this.setActivityTypeId("root");
        this.setRow(0);
        this.setCol(-1)
    }
};
Mscrm.ProcessAutomation.YesBranchIconAttributes = function() {
    Mscrm.ProcessAutomation.YesBranchIconAttributes.initializeBase(this);
    this.title = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection()
        .GetLabel("ConditionYes");
    this.image = window.CDNURL + "/_imgs/processdesigner/yes_16.png"
};
Mscrm.ProcessAutomation.NoBranchIconAttributes = function() {
    Mscrm.ProcessAutomation.NoBranchIconAttributes.initializeBase(this);
    this.title = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection()
        .GetLabel("ConditionNo");
    this.image = window.CDNURL + "/_imgs/processdesigner/no_16.png"
};
Mscrm.ProcessAutomation.ProcessLibraryNodesFactory = function() {
    Mscrm.ProcessAutomation.ProcessLibraryNodesFactory.initializeBase(this)
};
Mscrm.ProcessAutomation.ProcessLibraryNodesFactory.prototype = {
    CreateLibraryNodes: function() {
        var $v_0 = [];
        return $v_0
    },
    getLibraryElementNode: function(title, image, activityType) {
        var $v_0 = new Mscrm.Automation.LibraryElementNode;
        $v_0.Title = title;
        $v_0.image = image;
        $v_0.activitytypeid = activityType;
        return $v_0
    }
};
Mscrm.ProcessAutomation.ConditionActivityTileInformation = function(model, itemId) {
    Mscrm.ProcessAutomation.ConditionActivityTileInformation.initializeBase(this, [model, itemId])
};
Mscrm.ProcessAutomation.ConditionActivityTileInformation.prototype = {
    getProperties: function() {
        var $v_0 = new Mscrm.Automation
            .TileProperties('\r\n\t\t\t\t<span class="tileTitle" title="<%= Title %>">\r\n\t\t\t\t\t<span class="tileTableCell">\r\n\t\t\t\t\t\t<span class="tileInner ellipsis">\r\n\t\t\t\t\t\t\t<%= Title %>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</span>', Mscrm.Automation.CommonTileInformation.defaultTileImageTemplate, Mscrm.ProcessAutomation.ProcessImageResources.get_conditionTileIcon(), "conditionTile", "Define Condition", Mscrm.Automation.CommonTileInformation.defaultEmptyTitleTemplate, Mscrm.Automation.CommonTileInformation.defaultEmptyTileImageTemplate);
        return $v_0
    }
};
Mscrm.ProcessAutomation.ProcessTileInformationFactory = function() {
    Mscrm.ProcessAutomation.ProcessTileInformationFactory.initializeBase(this)
};
Mscrm.ProcessAutomation.ProcessTileInformationFactory.prototype = {
    getTileInformationForActivityModel: function(activityModel, specificItemId) {
        var $v_0 = activityModel.getActivityTypeId();
        switch ($v_0) {
        case "condition":
            return new Mscrm.ProcessAutomation.ConditionActivityTileInformation(activityModel, specificItemId);
        default:
            return Mscrm.Automation.DefaultTileInformationFactory.prototype.getTileInformationForActivityModel
                .call(this, activityModel, specificItemId)
        }
    },
    GetTileStatusView: function(activityModel, activeItemAttributes) {
        var $v_0 = activityModel;
        if (IsNull($v_0) || IsNull($v_0.get_status())) return new Mscrm.Automation.EmptyStatusView;
        switch (activityModel.getActivityTypeId()) {
        case "empty":
            return new Mscrm.Automation.EmptyStatusView;
        default:
            return this.get_statusViewFactory().createStatusView($v_0.get_status())
        }
    },
    get_statusViewFactory: function() {
        if (!this.$1c_1) this.$1c_1 = new Mscrm.ProcessAutomation.ProcessStatusViewFactory;
        return this.$1c_1
    },
    set_statusViewFactory: function(value) {
        this.$1c_1 = value;
        return value
    },
    $1c_1: null
};
Mscrm.ProcessAutomation.ProcessIconFactory = function() {
    Mscrm.ProcessAutomation.ProcessIconFactory.initializeBase(this)
};
Mscrm.ProcessAutomation.ProcessIconFactory.prototype = {
    getIconAttributes: function(iconType) {
        var $v_0 = null;
        switch (iconType) {
        case "YesBranch":
            $v_0 = new Mscrm.ProcessAutomation.YesBranchIconAttributes;
            break;
        case "NoBranch":
            $v_0 = new Mscrm.ProcessAutomation.NoBranchIconAttributes;
            break
        }
        return $v_0
    }
};
Mscrm.ProcessAutomation.ProcessItemModel = function() { Mscrm.ProcessAutomation.ProcessItemModel.initializeBase(this) };
Mscrm.ProcessAutomation.ProcessItemModel.prototype = { subtitle: null };
Mscrm.ProcessAutomation.ProcessSlotIconType = function() {
    Mscrm.ProcessAutomation.ProcessSlotIconType.initializeBase(this)
};
Mscrm.ProcessAutomation
    .ProcessDesignerStatusCodeProvider = function() {
        Mscrm.ProcessAutomation.ProcessDesignerStatusCodeProvider.initializeBase(this)
    };
Mscrm.ProcessAutomation.ProcessDesignerStatusCodeProvider.prototype = {
    getStatus: function(activityId) {
        var $v_0 = this.$i_2;
        if (IsNull($v_0) || !$v_0.length) return new Mscrm.Automation.ActivityStatus(-1, "");
        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            if ($v_0[$v_1].get_activityId() !== activityId) continue;
            if ($v_0[$v_1].get_hasError())
                return new Mscrm.Automation.ActivityStatus(3, $v_0[$v_1].get_errorMessageId())
        }
        return new Mscrm.Automation.ActivityStatus(-1, "")
    },
    get_validationResults: function() { return this.$i_2 },
    set_validationResults: function(value) {
        this.$i_2 = value;
        return value
    },
    $i_2: null
};
Mscrm.ProcessAutomation
    .ProcessDesignerStatusCodeProviderFactory = function() {
        Mscrm.ProcessAutomation.ProcessDesignerStatusCodeProviderFactory.initializeBase(this)
    };
Mscrm.ProcessAutomation.ProcessDesignerStatusCodeProviderFactory.prototype = {
    getProvider: function(activityType) {
        var $v_0 = new Mscrm.ProcessAutomation.ProcessDesignerStatusCodeProvider;
        $v_0.set_validationResults(this.$i_2);
        return $v_0
    },
    get_validationResults: function() { return this.$i_2 },
    set_validationResults: function(value) {
        this.$i_2 = value;
        return value
    },
    $i_2: null
};
Mscrm.ProcessAutomation.ValidationStep = function() {};
Mscrm.ProcessAutomation.ValidationStep.prototype = {
    get_process: function() { return this.$F_0 },
    set_process: function(value) {
        this.$F_0 = value;
        return value
    },
    get_uiActivityTree: function() { return this.$P_0 },
    set_uiActivityTree: function(value) {
        this.$P_0 = value;
        return value
    },
    $F_0: null,
    $P_0: null
};
Mscrm.ProcessAutomation.ProcessValidator = function() { this.$h_0 = new Array(0) };
Mscrm.ProcessAutomation.ProcessValidator.prototype = {
    validate: function() {
        for (var $v_0 = new Array(0), $v_1 = 0; $v_1 < this.$h_0.length; $v_1++) {
            var $v_2 = this.$h_0[$v_1];
            $v_2.set_uiActivityTree(this.$P_0);
            $v_2.set_process(this.$F_0);
            var $v_3 = $v_2.validate();
            !IsNull($v_3) && $v_3.length > 0 && Array.addRange($v_0, $v_3)
        }
        return $v_0
    },
    get_process: function() { return this.$F_0 },
    set_process: function(value) {
        this.$F_0 = value;
        return value
    },
    get_validationSteps: function() { return this.$h_0 },
    set_validationSteps: function(value) {
        this.$h_0 = value;
        return value
    },
    get_uiActivityTree: function() { return this.$P_0 },
    set_uiActivityTree: function(value) {
        this.$P_0 = value;
        return value
    },
    $P_0: null,
    $F_0: null,
    $h_0: null
};
Mscrm.ProcessAutomation.ValidationResult = function() {};
Mscrm.ProcessAutomation.ValidationResult.prototype = {
    get_hasError: function() {
        if (this.$1g_0) return true;
        return false
    },
    get_errorMessageId: function() { return this.$1g_0 },
    set_errorMessageId: function(value) {
        this.$1g_0 = value;
        return value
    },
    get_activityId: function() { return this.$1x_0 },
    set_activityId: function(value) {
        this.$1x_0 = value;
        return value
    },
    $1g_0: null,
    $1x_0: null
};
Mscrm.ProcessAutomation.ProcessCommonTileInformation = function() {};
Mscrm.ProcessAutomation.ProcessImageResources = function() {};
Mscrm.ProcessAutomation.ProcessImageResources
    .get_conditionTileIcon = function() { return "/_imgs/ProcessDesigner/Condition_32.png" };
Mscrm.ProcessAutomation.ConditionPropertyEditViewModel = function(viewModel) {
    Mscrm.ProcessAutomation.ConditionPropertyEditViewModel.initializeBase(this, [viewModel])
};
Mscrm.ProcessAutomation.ConditionPropertyEditViewModel.prototype = {
    serializeExpression: function() {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(String, Object), $v_1 = this.$0_1.get_processStep();
        if (IsNull($v_1)) {
            $v_0.resolve("");
            return $v_0.promise()
        }
        this.get_retrieveConditionXmlCommand().setParameter("workflowStepAsJson",
            this.$0_1.get_processStep().get_workflow().toJson());
        this.get_retrieveConditionXmlCommand().setParameter("stepId", this.$0_1.get_processStep().get_Id());
        var $$t_5 = this;
        this.get_retrieveConditionXmlCommand().execute(function($p1_0, $p1_1) {
            !$p1_0.get_success() && $v_0.reject("Could not retrieve xml.");
            var $v_2 = $p1_0.get_returnValue();
            $v_0.resolve($v_2)
        });
        return $v_0.promise()
    },
    deserializeExpression: function(conditionXml) {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Microsoft.Crm.Workflow.Expressions.ExpressionBase, Object),
            $v_1 = this.$0_1.get_processStep();
        if (IsNull($v_1)) {
            $v_0.resolve(null);
            return $v_0.promise()
        }
        this.get_retrieveExpressionBaseCommand()
            .setParameter("workflowStepAsJson", this.$0_1.get_processStep().get_workflow().toJson());
        this.get_retrieveExpressionBaseCommand().setParameter("conditionXml", conditionXml);
        var $$t_9 = this;
        this.get_retrieveExpressionBaseCommand().execute(function($p1_0, $p1_1) {
            !$p1_0.get_success() && $v_0.reject("Could not retrieve expression.");
            var $v_2 = Mscrm.Proxies.JQueryProxy.parseJson($p1_0.get_returnValue().substr(8)), $v_3 = $v_2[1].Value;
            Mscrm.ProcessAutomation.CachedStepDisplayInfoProvider.get_stepDisplayInfoCache()[$v_1.get_Id()] = $v_3;
            var $v_4 = Mscrm.Proxies.JQueryProxy.parseJson($v_2[0].Value),
                $v_5 = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory.buildExpression($v_4["__class"]);
            $v_5.initializeFromDynamic($v_4);
            $v_0.resolve($v_5)
        });
        return $v_0.promise()
    },
    get_retrieveConditionXmlCommand: function() {
        if (IsNull(this.$11_2)) {
            this.$11_2 = new Mscrm.Proxies.RemoteCommandProxy;
            var $v_0 = new RemoteCommand("ProcessWebService", "RetrieveConditionXmlFromExpression");
            this.$11_2.set_element($v_0)
        }
        return this.$11_2
    },
    set_retrieveConditionXmlCommand: function(value) {
        this.$11_2 = value;
        return value
    },
    get_retrieveExpressionBaseCommand: function() {
        if (IsNull(this.$12_2)) {
            this.$12_2 = new Mscrm.Proxies.RemoteCommandProxy;
            var $v_0 = new RemoteCommand("ProcessWebService", "RetrieveExpressionFromConditionXml");
            this.$12_2.set_element($v_0)
        }
        return this.$12_2
    },
    set_retrieveExpressionBaseCommand: function(value) {
        this.$12_2 = value;
        return value
    },
    $11_2: null,
    $12_2: null
};
Mscrm.ProcessAutomation.ConditionPropertyViewModel = function(activityDefinitionModel) {
    Mscrm.ProcessAutomation.ConditionPropertyViewModel.initializeBase(this, [activityDefinitionModel])
};
Mscrm.ProcessAutomation.ConditionPropertyViewModel.prototype = {
    $Y_2: null,
    get_entityLogicalName: function() { return this.$Y_2 },
    set_entityLogicalName: function(value) {
        this.$Y_2 = value;
        return value
    },
    constructEditViewModel: function() {
        var $v_0 = new Mscrm.ProcessAutomation.ConditionPropertyEditViewModel(this);
        return $v_0
    }
};
Mscrm.ProcessAutomation
    .DefaultPropertyCommandBarViewModel = function() {
        Mscrm.ProcessAutomation.DefaultPropertyCommandBarViewModel.initializeBase(this)
    };
Mscrm.ProcessAutomation.DefaultPropertyCommandBarViewModel.prototype = {
    initialize: function() {
        Mscrm.ProcessAutomation.ViewModel.prototype.initialize.call(this);
        Array.add(this.$K_1, this.get_confirmButton());
        Array.add(this.$K_1, this.get_discardButton())
    },
    get_confirmButton: function() {
        if (IsNull(this.$m_2)) {
            this.$m_2 = new Mscrm.ProcessAutomation.PropertyCommandBarButton;
            this.$m_2.set_id("propertyconfirm");
            this.$m_2.set_label(this.$2S_2("ConfirmText"))
        }
        return this.$m_2
    },
    set_confirmButton: function(value) {
        this.$m_2 = value;
        return value
    },
    get_discardButton: function() {
        if (IsNull(this.$o_2)) {
            this.$o_2 = new Mscrm.ProcessAutomation.PropertyCommandBarButton;
            this.$o_2.set_id("propertydiscard");
            this.$o_2.set_label(this.$2S_2("DiscardText"))
        }
        return this.$o_2
    },
    set_discardButton: function(value) {
        this.$o_2 = value;
        return value
    },
    $2S_2: function($p0) {
        return Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection().GetLabel($p0)
    },
    $m_2: null,
    $o_2: null
};
Mscrm.ProcessAutomation.PropertyCommandBarButton = function() {
    Mscrm.ProcessAutomation.PropertyCommandBarButton.initializeBase(this)
};
Mscrm.ProcessAutomation.PropertyCommandBarButton.prototype = {
    get_label: function() { return this.$24_1 },
    set_label: function(value) {
        this.$24_1 = value;
        return value
    },
    get_id: function() { return this.$23_1 },
    set_id: function(value) {
        this.$23_1 = value;
        return value
    },
    get_command: function() { return this.$1y_1 },
    set_command: function(value) {
        this.$1y_1 = value;
        return value
    },
    $1y_1: null,
    $23_1: null,
    $24_1: null
};
Mscrm.ProcessAutomation.PropertyCommandBarViewModel = function() {
    this.$K_1 = new Array(0);
    Mscrm.ProcessAutomation.PropertyCommandBarViewModel.initializeBase(this)
};
Mscrm.ProcessAutomation.PropertyCommandBarViewModel.prototype = {
    get_buttons: function() { return this.$K_1 },
    set_buttons: function(value) {
        this.$K_1 = value;
        return value
    },
    dispose: function() {
        if (!IsNull(this.$K_1)) for (var $v_0 = 0; $v_0 < this.$K_1.length; $v_0++) this.$K_1[$v_0].set_command(null);
        Mscrm.ProcessAutomation.ViewModel.prototype.dispose.call(this)
    }
};
Mscrm.ProcessAutomation.PropertyCommandBarViewModelFactory = function() {};
Mscrm.ProcessAutomation.PropertyCommandBarViewModelFactory.prototype = {
    getCommandBarViewModel: function(activityType) {
        var $v_0 = new Mscrm.ProcessAutomation.DefaultPropertyCommandBarViewModel;
        $v_0.initialize();
        return $v_0
    }
};
Mscrm.ProcessAutomation.EmptyPropertyViewModel = function(activityDefinitionModel) {
    Mscrm.ProcessAutomation.EmptyPropertyViewModel.initializeBase(this, [activityDefinitionModel])
};
Mscrm.ProcessAutomation.EmptyPropertyViewModel.prototype = { constructEditViewModel: function() { return null } };
Mscrm.ProcessAutomation.PropertyEditViewModel = function(viewModel) {
    Mscrm.ProcessAutomation.PropertyEditViewModel.initializeBase(this);
    this.$0_1 = viewModel
};
Mscrm.ProcessAutomation.PropertyEditViewModel.prototype = {
    get_viewModel: function() { return this.$0_1 },
    set_viewModel: function(value) {
        this.$0_1 = value;
        return value
    },
    get_processStep: function() { return this.$0_1.get_processStep() },
    set_processStep: function(value) {
        this.$0_1.set_processStep(value);
        return value
    },
    confirm: function() {},
    $0_1: null
};
Mscrm.ProcessAutomation
    .PropertyEditViewModelWithCommandBar = function(viewModel) {
        Mscrm.ProcessAutomation.PropertyEditViewModelWithCommandBar.initializeBase(this, [viewModel])
    };
Mscrm.ProcessAutomation.PropertyEditViewModelWithCommandBar.prototype = {
    get_commandBarViewModel: function() {
        if (IsNull(this.$l_2)) this.$l_2 = this.initializeCommandBar();
        return this.$l_2
    },
    set_commandBarViewModel: function(value) {
        this.$l_2 = value;
        return value
    },
    get_commandBarViewModelFactory: function() {
        if (IsNull(this.$1G_2)) this.$1G_2 = new Mscrm.ProcessAutomation.PropertyCommandBarViewModelFactory;
        return this.$1G_2
    },
    set_commandBarViewModelFactory: function(value) {
        this.$1G_2 = value;
        return value
    },
    dispose: function() {
        IsNull(this.$l_2) && this.$l_2.dispose();
        Mscrm.ProcessAutomation.ViewModel.prototype.dispose.call(this)
    },
    $l_2: null,
    $1G_2: null
};
Mscrm.ProcessAutomation.PropertyViewModel = function(activityDefinitionModel) {
    Mscrm.ProcessAutomation.PropertyViewModel.initializeBase(this);
    this.$7_1 = activityDefinitionModel
};
Mscrm.ProcessAutomation.PropertyViewModel.prototype = {
    get_model: function() { return this.$7_1 },
    set_model: function(value) {
        this.$7_1 = value;
        return value
    },
    get_editViewModel: function() {
        if (!this.$1N_1) {
            this.$1N_1 = this.constructEditViewModel();
            this.$1N_1.initialize()
        }
        return this.$1N_1
    },
    get_processStep: function() { return this.$7_1.get_processStep() },
    set_processStep: function(value) {
        this.$7_1.set_processStep(value);
        return value
    },
    $7_1: null,
    $1N_1: null
};
Mscrm.ProcessAutomation.PropertyViewModelFactory = function() {};
Mscrm.ProcessAutomation.PropertyViewModelFactory.prototype = {
    getViewModel: function(model) {
        switch (model.getActivityTypeId()) {
        case "condition":
            return new Mscrm.ProcessAutomation.ConditionPropertyViewModel(model);
        case "empty":
        default:
            return new Mscrm.ProcessAutomation.EmptyPropertyViewModel(model)
        }
    }
};
Mscrm.ProcessAutomation.CanvasViewModel = function() { Mscrm.ProcessAutomation.CanvasViewModel.initializeBase(this) };
Mscrm.ProcessAutomation.CanvasViewModel.prototype = {
    updateProcess: function() {
        this.initializeActivityStatus();
        var $v_0 = this.get_$18_1().get_statusInitializer(), $v_1 = $v_0.get_validationResults();
        if (!$v_1 || !$v_1.length) {
            var $v_2 = this.get_activityTreeToProcess();
            $v_2.set_process(this.$F_1);
            $v_2.convert(Mscrm.Automation.AutomationControl.instance.activityTree);
            var $v_3 = this.get_$18_1().get_processToUIActivityCollection();
            Mscrm.Automation.AutomationControl.instance.activityTree.setActivityCollection($v_3.convert(this.$F_1))
        }
    },
    initializeActivityStatus: function() {
        var $v_0 = this.get_$18_1().get_statusInitializer();
        if (IsNull($v_0)) return;
        $v_0.set_uiActivityTree(Mscrm.Automation.AutomationControl.instance.activityTree);
        $v_0.initializeStatus()
    },
    get_activityTreeToProcess: function() {
        if (!this.$1J_1) {
            var $v_0 = Mscrm.Automation.AutomationControl.instance.settings;
            this.$1J_1 = $v_0.get_activityTreeToProcessConverter()
        }
        return this.$1J_1
    },
    set_activityTreeToProcess: function(value) {
        this.$1J_1 = value;
        return value
    },
    get_process: function() { return this.$F_1 },
    set_process: function(value) {
        this.$F_1 = value;
        return value
    },
    get_$18_1: function() { return Mscrm.Automation.AutomationControl.instance.settings },
    $1J_1: null,
    $F_1: null
};
Mscrm.ProcessAutomation.ProcessDesignerViewModel = function() {
    Mscrm.ProcessAutomation.ProcessDesignerViewModel.initializeBase(this)
};
Mscrm.ProcessAutomation.ProcessDesignerViewModel.prototype = {
    $1j_1: null,
    $F_1: null,
    $1l_1: false,
    $29_1: null,
    $q_1: null,
    $25_1: null,
    initialize: function() {
        Mscrm.ProcessAutomation.ViewModel.prototype.initialize.call(this);
        var $v_0 = Mscrm.ProcessAutomation.ProcessDesignerDataJsonWrapper.get_instance();
        this.$1j_1 = $v_0.EntityJson.ProcessId;
        this.$1l_1 = Boolean.parse($P_CRM("#footerReadonlystate").val());
        var $v_1 = $v_0.EntityJson.JsonString, $v_2 = Mscrm.Proxies.JQueryProxy.parseJson($v_1);
        this.$F_1 = new Microsoft.Crm.Workflow.ObjectModel.WorkflowStep($v_0.EntityName, 4);
        this.$F_1.initializeFromDynamic($v_2)
    },
    get_process: function() { return this.$F_1 },
    set_process: function(value) {
        this.$F_1 = value;
        return value
    },
    get_processId: function() { return this.$1j_1 },
    set_processId: function(value) {
        this.$1j_1 = value;
        return value
    },
    get_readOnly: function() { return this.$1l_1 },
    set_readOnly: function(value) {
        this.$1l_1 = value;
        return value
    },
    get_viewFactory: function() { return this.$29_1 },
    set_viewFactory: function(value) {
        this.$29_1 = value;
        return value
    },
    get_viewModelFactory: function() { return this.$q_1 },
    set_viewModelFactory: function(value) {
        this.$q_1 = value;
        return value
    },
    get_menuCommandFactory: function() { return this.$25_1 },
    set_menuCommandFactory: function(value) {
        this.$25_1 = value;
        return value
    }
};
Mscrm.ProcessAutomation.ViewModel = function() { this.$1Q_0 = new Sys.EventHandlerList };
Mscrm.ProcessAutomation.ViewModel.prototype = {
    add_propertyChanged: function(value) { this.$1Q_0.addHandler("PropertyChanged", value) },
    remove_propertyChanged: function(value) { this.$1Q_0.removeHandler("PropertyChanged", value) },
    dispose: function() {
        if (this.$a_0) return;
        this.$1Q_0 = null;
        this.$a_0 = true
    },
    initialize: function() {},
    get_isDisposed: function() { return this.$a_0 },
    $1Q_0: null,
    $a_0: false
};
Mscrm.ProcessAutomation.CommandBarViewModel = function() {
    Mscrm.ProcessAutomation.CommandBarViewModel.initializeBase(this)
};
Mscrm.ProcessAutomation.CommandBarViewModel.prototype = {
    $1n_1: null,
    get_saveCommand: function() { return this.$1n_1 },
    set_saveCommand: function(value) {
        this.$1n_1 = value;
        return value
    }
};
Mscrm.ProcessAutomation.ViewModelFactory = function() {};
Mscrm.ProcessAutomation.ViewModelFactory.prototype = {
    createBusinessProcessCommandBarViewModel: function(menuCommandFactory) {
        var $v_0 = new Mscrm.ProcessAutomation.BusinessProcessCommandBarViewModel;
        $v_0.$1n_1 = menuCommandFactory.getBusinessProcessSaveCommand(null);
        return new Mscrm.ProcessAutomation.BusinessProcessCommandBarViewModel
    }
};
Mscrm.ProcessAutomation.EvaluateMethodHtmlBuilder = function(context) {
    Mscrm.ProcessAutomation.EvaluateMethodHtmlBuilder.initializeBase(this, [context])
};
Mscrm.ProcessAutomation.EvaluateMethodHtmlBuilder.prototype = {
    build: function(builder, objectModel) {
        if (IsNull(objectModel)) return;
        var $v_0 = objectModel;
        switch ($v_0[0]) {
        case 0:
            this.$2h_1(builder, $v_0);
            break
        }
    },
    $2h_1: function($p0, $p1) {
        var $v_0 = $p1[1], $v_1 = $p1[2], $v_2 = new Sys.StringBuilder;
        this.get_expressionHtmlBuilderFactory().getExpressionBuilder(this.$J_0, $v_0).build($v_2, $v_0);
        var $v_3 = new Sys.StringBuilder;
        this.get_expressionHtmlBuilderFactory().getExpressionBuilder(this.$J_0, $v_1).build($v_3, $v_1);
        $p0.append(String.format("{0}{1}", $v_2.toString(), $v_3.toString()))
    }
};
Mscrm.ProcessAutomation.SelectFirstNotNullHtmlBuilder = function(context) {
    Mscrm.ProcessAutomation.SelectFirstNotNullHtmlBuilder.initializeBase(this, [context])
};
Mscrm.ProcessAutomation.SelectFirstNotNullHtmlBuilder.prototype = {
    build: function(builder, objectModel) {
        if (IsNull(objectModel)) return;
        var $v_0 = objectModel, $v_1 = $v_0[0];
        if (IsNull($v_1)) return;
        this.get_expressionHtmlBuilderFactory().getExpressionBuilder(this.$J_0, $v_1).build(builder, $v_1)
    }
};
Mscrm.ProcessAutomation
    .EntityAttributeExpressionHtmlBuilder = function(context) {
        Mscrm.ProcessAutomation.EntityAttributeExpressionHtmlBuilder.initializeBase(this, [context])
    };
Mscrm.ProcessAutomation.EntityAttributeExpressionHtmlBuilder.prototype = {
    build: function(builder, objectModel) {
        if (IsNull(objectModel)) return;
        var $v_0 = objectModel,
            $v_1 = Microsoft.Crm.Workflow.Expressions.EntityDecoratorFactory
                .getDecorator($v_0.get_entity(), this.$J_0.$L_0).get_displayName(),
            $v_2 = this.$J_0.$L_0.getAttributeLocalizedName(null,
                $v_0.get_entity().get_entityName(),
                $v_0.get_attributeName());
        builder.append(String.format("{{{0}{{{1}}}}}",
            this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_2),
            this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_1)))
    }
};
Mscrm.ProcessAutomation.ExpressionHtmlBuilderFactory = function() {};
Mscrm.ProcessAutomation.ExpressionHtmlBuilderFactory.prototype = {
    getExpressionBuilder: function(context, expression) {
        if (Microsoft.Crm.Workflow.Expressions.PrimitiveExpression
            .isInstanceOfType(expression)) return new Mscrm.ProcessAutomation.PrimitiveExpressionHtmlBuilder(context);
        else if (Microsoft.Crm.Workflow.Expressions.MethodCallExpression
            .isInstanceOfType(expression)) return new Mscrm.ProcessAutomation.MethodCallExpressionHtmlBuilder(context);
        else if (Microsoft.Crm.Workflow.Expressions.LookupExpression
            .isInstanceOfType(expression)) return new Mscrm.ProcessAutomation.LookupExpressionBuilder(context);
        else if (Microsoft.Crm.Workflow.Expressions.EntityAttributeExpression
            .isInstanceOfType(expression))
            return new Mscrm.ProcessAutomation.EntityAttributeExpressionHtmlBuilder(context);
        throw Error.create("Invalid expression serializer")
    }
};
Mscrm.ProcessAutomation.LookupExpressionBuilder = function(context) {
    Mscrm.ProcessAutomation.LookupExpressionBuilder.initializeBase(this, [context])
};
Mscrm.ProcessAutomation.LookupExpressionBuilder.prototype = {
    build: function(builder, objectModel) {
        if (IsNull(objectModel)) return;
        var $v_0 = objectModel,
            $v_1 = $v_0.get_value().get_value(),
            $v_2 = $v_0.get_entityType(),
            $v_3 = new Mscrm.ProcessAutomation.LookupValueBuilder;
        builder.append($v_3.generateReadControlHtml($v_0.get_label(), $v_1, $v_2, "lookup"))
    }
};
Mscrm.ProcessAutomation.MethodCallExpressionHtmlBuilder = function(context) {
    Mscrm.ProcessAutomation.MethodCallExpressionHtmlBuilder.initializeBase(this, [context])
};
Mscrm.ProcessAutomation.MethodCallExpressionHtmlBuilder.prototype = {
    build: function(builder, objectModel) {
        if (IsNull(objectModel)) return;
        var $v_0 = objectModel;
        switch ($v_0.get_method()) {
        case 3:
            (new Mscrm.ProcessAutomation.EvaluateMethodHtmlBuilder(this.$J_0)).build(builder, $v_0.getParameters());
            break;
        case 0:
            (new Mscrm.ProcessAutomation.SelectFirstNotNullHtmlBuilder(this.$J_0)).build(builder, $v_0.getParameters());
            break;
        case 4:
            builder.append(String.format("{{{0}}}",
                Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection()
                .GetLabel("ExecutionTime")));
            break;
        case 11:
            var $v_1 = $v_0.getParameters();
            $v_1.length > 0 && builder.append($v_1[0]);
            break;
        default:
            throw Error.create("Handle method other calls")
        }
    }
};
Mscrm.ProcessAutomation.PartyListExpressionBuilder = function(context) {
    Mscrm.ProcessAutomation.PartyListExpressionBuilder.initializeBase(this, [context])
};
Mscrm.ProcessAutomation.PartyListExpressionBuilder.prototype = {
    build: function(builder, objectModel) {
        if (IsNull(objectModel)) return;
        for (var $v_0 = objectModel,
            $v_1 = new Mscrm.ProcessAutomation.PropertySpecificationHtmlBuilder(this.$J_0),
            $v_2 = 0;
            $v_2 < $v_0.length;
            $v_2++) {
            $v_2 && builder.append(", ");
            for (var $v_3 = $v_0[$v_2], $v_4 = 0; $v_4 < $v_3.get_properties().get_count(); $v_4++) {
                var $v_5 = $v_3.get_properties().get_item($v_4);
                $v_1.build(builder, $v_5)
            }
        }
    }
};
Mscrm.ProcessAutomation.PrimitiveExpressionHtmlBuilder = function(context) {
    Mscrm.ProcessAutomation.PrimitiveExpressionHtmlBuilder.initializeBase(this, [context])
};
Mscrm.ProcessAutomation.PrimitiveExpressionHtmlBuilder.prototype = {
    build: function(builder, objectModel) {
        if (IsNull(objectModel)) return;
        var $v_0 = objectModel;
        switch ($v_0.get_type()) {
        case 2:
            (new Mscrm.ProcessAutomation.DateTimeHtmlBuilder(this.$J_0)).build(builder, $v_0.get_value());
            break;
        case 0:
        case 10:
        case 12:
        case 13:
            (new Mscrm.ProcessAutomation.PicklistHtmlBuilder(this.$J_0)).build(builder, $v_0.get_value());
            break;
        case 6:
        case 1:
        case 8:
            (new Mscrm.ProcessAutomation.LookupExpressionBuilder(this.$J_0)).build(builder, $v_0.get_value());
            break;
        case 9:
            (new Mscrm.ProcessAutomation.PartyListExpressionBuilder(this.$J_0)).build(builder, $v_0.get_value());
            break;
        default:
            var $v_1 = this.$J_0.$13_0
                ? this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.get_value().toString())
                : $v_0.get_value().toString();
            builder.append($v_1);
            break
        }
    }
};
Mscrm.ProcessAutomation.PropertySpecificationHtmlBuilder = function(context) {
    Mscrm.ProcessAutomation.PropertySpecificationHtmlBuilder.initializeBase(this, [context])
};
Mscrm.ProcessAutomation.PropertySpecificationHtmlBuilder.prototype = {
    build: function(builder, objectModel) {
        if (IsNull(objectModel)) return;
        var $v_0 = objectModel;
        this.get_expressionHtmlBuilderFactory().getExpressionBuilder(this.$J_0, $v_0.get_value())
            .build(builder, $v_0.get_value())
    }
};
Mscrm.ProcessAutomation.DateTimeHtmlBuilder = function(context) {
    Mscrm.ProcessAutomation.DateTimeHtmlBuilder.initializeBase(this, [context])
};
Mscrm.ProcessAutomation.DateTimeHtmlBuilder.prototype = {
    build: function(builder, objectModel) {
        if (IsNull(objectModel)) return;
        var $v_0 = new Date(objectModel);
        builder.append(this.get_crmEncodeDecodeProxy().crmHtmlEncode(Mscrm.DateTimeUtility.formatDate($v_0)))
    }
};
Mscrm.ProcessAutomation.LookupValueBuilder = function() {};
Mscrm.ProcessAutomation.LookupValueBuilder.get_$2C = function() {
    if (IsNull(Mscrm.ProcessAutomation.LookupValueBuilder
        .$E)) Mscrm.ProcessAutomation.LookupValueBuilder.$E = new Mscrm.Proxies.CrmEncodeDecodeProxy;
    return Mscrm.ProcessAutomation.LookupValueBuilder.$E
};
Mscrm.ProcessAutomation.LookupValueBuilder.prototype = {
    generateReadControlHtml: function(label, id, entityType, controlType) {
        var $v_0 = Mscrm.ProcessAutomation.LookupValueBuilder.get_$2C().crmHtmlEncode(label);
        return String.format("<div class='{0}' {1}='{2}' style='display: inline;' {3}='{4}' {5}='{6}'>{7}</div>",
            "read_lookup",
            "data-control",
            controlType,
            "data-recordid",
            Mscrm.ProcessAutomation.LookupValueBuilder.get_$2C().crmHtmlAttributeEncode(id),
            "data-entitytype",
            Mscrm.ProcessAutomation.LookupValueBuilder.get_$2C().crmHtmlAttributeEncode(entityType),
            $v_0)
    }
};
Mscrm.ProcessAutomation.PicklistHtmlBuilder = function(context) {
    Mscrm.ProcessAutomation.PicklistHtmlBuilder.initializeBase(this, [context])
};
Mscrm.ProcessAutomation.PicklistHtmlBuilder.prototype = {
    build: function(builder, objectModel) {
        if (IsNull(objectModel)) return;
        for (var $v_0 = Number.parseInvariant(objectModel),
            $v_1 = this.$J_0.$r_0,
            $$arr_4 = $v_1.Options,
            $$len_5 = $$arr_4.length,
            $$idx_6 = 0;
            $$idx_6 < $$len_5;
            ++$$idx_6) {
            var $v_2 = $$arr_4[$$idx_6];
            if ($v_2.Value === $v_0) {
                builder.append(this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_2.Label));
                return
            }
        }
    }
};
Mscrm.ProcessAutomation.HtmlBuilder = function(context) { this.$J_0 = context };
Mscrm.ProcessAutomation.HtmlBuilder.prototype = {
    $I_0: null,
    $S_0: null,
    get_jQueryProxy: function() {
        if (IsNull(this.$I_0)) this.$I_0 = new Mscrm.Proxies.JQueryProxy;
        return this.$I_0
    },
    set_jQueryProxy: function(value) {
        this.$I_0 = value;
        return value
    },
    get_crmEncodeDecodeProxy: function() {
        if (IsNull(this.$E_0)) this.$E_0 = new Mscrm.Proxies.CrmEncodeDecodeProxy;
        return this.$E_0
    },
    set_crmEncodeDecodeProxy: function(value) {
        this.$E_0 = value;
        return value
    },
    get_expressionHtmlBuilderFactory: function() {
        if (IsNull(this.$S_0)) this.$S_0 = new Mscrm.ProcessAutomation.ExpressionHtmlBuilderFactory;
        return this.$S_0
    },
    set_expressionHtmlBuilderFactory: function(value) {
        this.$S_0 = value;
        return value
    },
    get_context: function() { return this.$J_0 },
    $J_0: null,
    $E_0: null
};
Mscrm.ProcessAutomation.HtmlBuilderContext = function() {};
Mscrm.ProcessAutomation.HtmlBuilderContext.prototype = {
    get_metadataProvider: function() { return this.$L_0 },
    set_metadataProvider: function(value) {
        this.$L_0 = value;
        return value
    },
    get_currentEntityMetadata: function() { return this.$O_0 },
    set_currentEntityMetadata: function(value) {
        this.$O_0 = value;
        return value
    },
    get_currentAttributeMetadata: function() { return this.$r_0 },
    set_currentAttributeMetadata: function(value) {
        this.$r_0 = value;
        return value
    },
    get_shouldEncodePrimitiveValues: function() { return this.$13_0 },
    set_shouldEncodePrimitiveValues: function(value) {
        this.$13_0 = value;
        return value
    },
    $13_0: true,
    $L_0: null,
    $O_0: null,
    $r_0: null
};
Mscrm.ProcessAutomation
    .EditableReadConditionPropertyPanelView = function(viewModel) {
        Mscrm.ProcessAutomation.EditableReadConditionPropertyPanelView.initializeBase(this, [viewModel])
    };
Mscrm.ProcessAutomation.EditableReadConditionPropertyPanelView
    .prototype = {
        initializeEditView: function() {
            return new Mscrm.ProcessAutomation.ConditionPropertyEditPanelView(this.$0_2.get_editViewModel())
        }
    };
Mscrm.ProcessAutomation.ConditionPropertyEditPanelView = function(viewModel) {
    Mscrm.ProcessAutomation.ConditionPropertyEditPanelView.initializeBase(this, [viewModel])
};
Mscrm.ProcessAutomation.ConditionPropertyEditPanelView.prototype = {
    renderPropertyView: function() {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Object), $$t_3 = this;
        this.get_$2A_1().serializeExpression().done(function($p1_0) {
            var $v_1 = $$t_3.get_legacyDialog();
            $v_1.set_conditionXml($p1_0);
            $v_1.openDialog();
            $$t_3.$37_1();
            $v_0.resolve(null)
        });
        return $v_0.promise()
    },
    get_legacyDialog: function() {
        if (!this.$b_1) {
            this.$b_1 = new Mscrm.ProcessAutomation.ConditionLegacyDialog;
            this.$b_1.set_conditionBranchStep(this.get_$2A_1().get_processStep());
            this.$b_1.set_height(800);
            this.$b_1.set_width(600)
        }
        return this.$b_1
    },
    set_legacyDialog: function(value) {
        this.$b_1 = value;
        return value
    },
    $37_1: function() {
        if (IsNull(this.get_legacyDialog().get_result())) return;
        var $$t_0 = this;
        window.setTimeout(function() { $$t_0.get_$2A_1().deserializeExpression($$t_0.get_legacyDialog().get_result()) },
            0)
    },
    get_$2A_1: function() { return this.$0_0 },
    $b_1: null
};
Mscrm.ProcessAutomation.PropertyCommandBarButtonView = function(element) {
    Mscrm.ProcessAutomation.PropertyCommandBarButtonView.initializeBase(this, [element])
};
Mscrm.ProcessAutomation.PropertyCommandBarButtonView.prototype = {
    get_dataContext: function() { return this.$0_1 },
    set_dataContext: function(value) {
        this.$0_1 = value;
        return value
    },
    render: function() {
        var $v_0 = this.$2l_1(this.$0_1);
        this.$T_0.append($v_0)
    },
    $2l_1: function($p0) {
        var $v_0 = String.format("<button tabindex='0' id='{0}' title='{1}' class='{3}'>{2}</button>",
            this.get_crmEncodeDecodeProxy().crmHtmlAttributeEncode($p0.get_id()),
            this.get_crmEncodeDecodeProxy().crmHtmlAttributeEncode($p0.get_label()),
            this.get_crmEncodeDecodeProxy().crmHtmlEncode($p0.get_label()),
            this.get_crmEncodeDecodeProxy().crmHtmlAttributeEncode("propertyfooterbutton"));
        return this.get_jQueryProxy().fromHtml($v_0)
    },
    bind: function() {
        var $$t_1 = this;
        this.$T_0.click(function($p1_0) { $$t_1.$0_1.get_command().execute() })
    },
    dispose: function() {
        this.$T_0.unbindAll();
        Mscrm.ProcessAutomation.View.prototype.dispose.call(this)
    },
    $0_1: null
};
Mscrm.ProcessAutomation.PropertyCommandBarButtonViewFactory = function() {};
Mscrm.ProcessAutomation.PropertyCommandBarButtonViewFactory.prototype = {
    getButtonView: function(button, buttonContainer) {
        var $v_0 = new Mscrm.ProcessAutomation.PropertyCommandBarButtonView(buttonContainer);
        $v_0.set_dataContext(button);
        return $v_0
    }
};
Mscrm.ProcessAutomation.PropertyCommandBarView = function(element) {
    Mscrm.ProcessAutomation.PropertyCommandBarView.initializeBase(this, [element])
};
Mscrm.ProcessAutomation.PropertyCommandBarView.prototype = {
    get_dataContext: function() { return this.$0_1 },
    set_dataContext: function(value) {
        this.$0_1 = value;
        return value
    },
    get_buttonViewFactory: function() {
        if (IsNull(this.$1F_1)) this.$1F_1 = new Mscrm.ProcessAutomation.PropertyCommandBarButtonViewFactory;
        return this.$1F_1
    },
    set_buttonViewFactory: function(value) {
        this.$1F_1 = value;
        return value
    },
    render: function() {
        var $v_0 = this.get_jQueryProxy().fromHtml(String
            .format("<div id='{0}' class='{1}'></div>", "propertyfooter", "propertyfooter"));
        this.$K_1 = new Array(0);
        for (var $v_1 = 0; $v_1 < this.$0_1.get_buttons().length; $v_1++) {
            var $v_2 = this.get_jQueryProxy().fromHtml("<div style='display:inline-block'></div>"),
                $v_3 = this.get_buttonViewFactory().getButtonView(this.$0_1.get_buttons()[$v_1], $v_2);
            $v_3.render();
            Array.add(this.$K_1, $v_3);
            $v_0.append($v_2)
        }
        this.$T_0.append($v_0)
    },
    bind: function() { for (var $v_0 = 0; $v_0 < this.$K_1.length; $v_0++) this.$K_1[$v_0].bind() },
    dispose: function() {
        for (var $v_0 = 0; $v_0 < this.$K_1.length; $v_0++) this.$K_1[$v_0].dispose();
        Mscrm.ProcessAutomation.View.prototype.dispose.call(this)
    },
    $0_1: null,
    $K_1: null,
    $1F_1: null
};
Mscrm.ProcessAutomation.EditableReadProcessPropertyPanelView = function(viewModel) {
    this.$$d_$2u_4 = Function.createDelegate(this, this.$2u_4);
    this.$d_4 = String
        .format("<div id='process_prop' class='process_prop'>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div id='process_body'>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div id='{0}'></div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div id='{1}' data-scrollable='true'></div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div id='{2}'><div id='propertyfooter'>Edit</div></div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>", String.format("propertycomponent{0}", 0), String.format("propertycomponent{0}", 1), String.format("propertycomponent{0}", 2));
    Mscrm.ProcessAutomation.EditableReadProcessPropertyPanelView.initializeBase(this, [viewModel])
};
Mscrm.ProcessAutomation.EditableReadProcessPropertyPanelView.prototype = {
    renderCompleted: function() {
        Mscrm.ProcessAutomation.ProcessPropertyPanelView.prototype.renderCompleted.call(this);
        var $v_0 = this.get_jQueryProxy().selectElement("#propertyfooter");
        $v_0.click(this.$$d_$2u_4)
    },
    goToEditState: function() {
        var $v_0 = this.get_editView();
        $v_0.renderPropertyView()
    },
    get_editView: function() {
        if (IsNull(this.$1M_4)) {
            this.$1M_4 = this.initializeEditView();
            this.$1M_4.initialize()
        }
        return this.$1M_4
    },
    initializeEditView: function() {
        return new Mscrm.ProcessAutomation.PropertyEditPanelView(this.$0_2.get_editViewModel())
    },
    get_propertyPanelJQueryHtml: function() { return this.$d_4 },
    dispose: function() {
        var $v_0 = this.get_jQueryProxy().selectElement("#propertyfooter");
        $v_0.unbind("click", this.$$d_$2u_4);
        Mscrm.ProcessAutomation.ReadProcessPropertyPanelView.prototype.dispose.call(this)
    },
    $2u_4: function($p0) { this.goToEditState() },
    $1M_4: null
};
Mscrm.ProcessAutomation.PropertyEditPanelView = function(viewModel) { this.$0_0 = viewModel };
Mscrm.ProcessAutomation.PropertyEditPanelView.prototype = {
    initialize: function() {},
    renderPropertyView: function() {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Object);
        $v_0.resolve(null);
        return $v_0.promise()
    },
    get_editViewModel: function() { return this.$0_0 },
    set_editViewModel: function(value) {
        this.$0_0 = value;
        return value
    },
    $0_0: null
};
Mscrm.ProcessAutomation
    .ConditionBodyPropertyPanelViewComponent = function(model) {
        Mscrm.ProcessAutomation.ConditionBodyPropertyPanelViewComponent.initializeBase(this, [model])
    };
Mscrm.ProcessAutomation.ConditionBodyPropertyPanelViewComponent.prototype = {
    get_template: function() {
        var $v_0 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_1 = String.format(this.$1_1,
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("ProcessConditionText")));
        return _.template($v_1)
    },
    retrieveAttributes: function() {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Object),
            $v_1 = this.$7_0,
            $v_2 = $v_1.$2_2,
            $v_3 = {};
        if (IsNull($v_2)) $v_0.resolve($v_3);
        else {
            var $v_4 = (new Mscrm.ProcessAutomation.CachedStepDisplayInfoProvider).getDisplayInfo($v_2.get_Id())
                .DisplayText;
            $v_3["Description"] = this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_2.get_parent().get_Description());
            $v_3["DescriptionAttr"] = this.get_crmEncodeDecodeProxy()
                .crmHtmlAttributeEncode($v_2.get_parent().get_Description());
            $v_3["DisplayText"] = this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_4);
            $v_3["DisplayTextAttr"] = this.get_crmEncodeDecodeProxy().crmHtmlAttributeEncode($v_4)
        }
        $v_0.resolve($v_3);
        return $v_0.promise()
    },
    $1_1:
        "\r\n\t<div id='display_text_label' class='wf_prop_header_line'>{0}</div>\r\n\t<div aria-labelledby='display_text_label' class='condition_text' tabindex='0' title='<%= DisplayTextAttr %>'><%= DisplayText %></div>\r\n"
};
Mscrm.ProcessAutomation
    .ConditionHeaderPropertyPanelViewComponent = function(model) {
        Mscrm.ProcessAutomation.ConditionHeaderPropertyPanelViewComponent.initializeBase(this, [model])
    };
Mscrm.ProcessAutomation.ConditionHeaderPropertyPanelViewComponent.prototype = {
    get_template: function() {
        var $v_0 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_1 = String.format(this.$1_1,
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("ConditionPropertyTitle")),
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("ProcessDescription")));
        return _.template($v_1)
    },
    retrieveAttributes: function() {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Object),
            $v_1 = this.$7_0,
            $v_2 = $v_1.$2_2,
            $v_3 = {};
        if (IsNull($v_2)) $v_0.resolve($v_3);
        else {
            $v_3["Description"] = this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_2.get_parent().get_Description());
            $v_3["DescriptionAttr"] = this.get_crmEncodeDecodeProxy()
                .crmHtmlAttributeEncode($v_2.get_parent().get_Description())
        }
        $v_0.resolve($v_3);
        return $v_0.promise()
    },
    $1_1:
        "\r\n\t<div class='process_prop_title process_child_top process_child' tabindex='0'>{0}</div>\r\n\t<div id='description_label' class='wf_prop_header_line process_child'>{1}</div>\r\n\t<div aria-labelledby='description_label' class='description_box process_child' tabindex='0' title='<%= DescriptionAttr %>'><%= Description %></div>\r\n"
};
Mscrm.ProcessAutomation.ProcessHeaderPropertyPanelViewComponentFactory = function() {};
Mscrm.ProcessAutomation.ProcessHeaderPropertyPanelViewComponentFactory.prototype = {
    createComponent: function(model) {
        switch (model.getActivityTypeId()) {
        case "condition":
            return new Mscrm.ProcessAutomation.ConditionHeaderPropertyPanelViewComponent(model);
        default:
            return new Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent(model)
        }
    }
};
Mscrm.ProcessAutomation.ProcessBodyPropertyPanelViewComponentFactory = function() {};
Mscrm.ProcessAutomation.ProcessBodyPropertyPanelViewComponentFactory.prototype = {
    createComponent: function(model) {
        switch (model.getActivityTypeId()) {
        case "condition":
            return new Mscrm.ProcessAutomation.ConditionBodyPropertyPanelViewComponent(model);
        default:
            return new Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent(model)
        }
    }
};
Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent = function(model) {
    this.$7_0 = model;
    this.$4_0 = model.get_processStep()
};
Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent.prototype = {
    $4_0: null,
    $7_0: null,
    $B_0: null,
    $5_0: null,
    $1V_0: null,
    $E_0: null,
    $S_0: null,
    get_model: function() { return this.$7_0 },
    get_step: function() { return this.$4_0 },
    get_entityMetadata: function() { return this.$B_0 },
    set_entityMetadata: function(value) {
        this.$B_0 = value;
        return value
    },
    get_componentElement: function() { return this.$5_0 },
    set_componentElement: function(value) {
        this.$5_0 = value;
        return value
    },
    get_crmEncodeDecodeProxy: function() {
        if (IsNull(this.$E_0)) this.$E_0 = new Mscrm.Proxies.CrmEncodeDecodeProxy;
        return this.$E_0
    },
    set_crmEncodeDecodeProxy: function(value) {
        this.$E_0 = value;
        return value
    },
    get_expressionHtmlBuilderFactory: function() {
        if (IsNull(this.$S_0)) this.$S_0 = new Mscrm.ProcessAutomation.ExpressionHtmlBuilderFactory;
        return this.$S_0
    },
    set_expressionHtmlBuilderFactory: function(value) {
        this.$S_0 = value;
        return value
    },
    get_template: function() { return _.template("<div></div>") },
    get_processObjectModelMetadataProvider: function() {
        if (IsNull(this.$1V_0)) this.$1V_0 = new Mscrm.ProcessAutomation.ProcessObjectModelMetadataProvider(this.$B_0);
        return this.$1V_0
    },
    set_processObjectModelMetadataProvider: function(value) {
        this.$1V_0 = value;
        return value
    },
    retrieveAttributes: function() {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Object);
        $v_0.resolve({});
        return $v_0.promise()
    },
    retrieveComponentJQueryObject: function() {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Object);
        if (IsNull(this.$5_0)) {
            var $$t_2 = this;
            this.retrieveAttributes().done(function($p1_0) {
                $$t_2.$5_0 = $P_CRM($$t_2.get_template()($p1_0));
                $$t_2.retrieveCompleted();
                $v_0.resolve($$t_2.$5_0)
            })
        } else {
            this.retrieveCompleted();
            $v_0.resolve(this.$5_0)
        }
        return $v_0.promise()
    },
    dispose: function() { !IsNull(this.$5_0) && this.$5_0.undelegate("#collapse_button_container *", "click") },
    retrieveCompleted: function() { this.$35_0() },
    $35_0: function() {
        var $$t_3 = this;
        this.$5_0.delegate("#collapse_button_container *",
            "click",
            function($p1_0) {
                var $v_0 = $P_CRM($p1_0.target).parents("#collapse_button_container"), $v_1 = $v_0.data("target");
                $v_0.toggleClass("collapsed");
                $$t_3.$5_0.find("#" + $v_1).toggleClass("collapsed");
                $$t_3.$5_0.filter("#" + $v_1).toggleClass("collapsed")
            })
    },
    buildPropertyAttributes: function(property, context, propertyValueHtmlBuilder) {
        context.$r_0 = context.$O_0.getAttributeByName(property.get_name());
        var $v_0 = new Sys.StringBuilder;
        propertyValueHtmlBuilder.build($v_0, property);
        var $v_1 = $v_0.toString();
        if (isNullOrEmptyString($v_1)) return null;
        var $v_2 = {};
        $v_2["Name"] = this.get_crmEncodeDecodeProxy().crmHtmlEncode(context.$r_0.LabelName);
        $v_2["Value"] = $v_1;
        if (Microsoft.Crm.Workflow.Expressions.LookupExpression
            .isInstanceOfType(property.get_value()))
            $v_2["ValueAttr"] = this.get_crmEncodeDecodeProxy()
                .crmHtmlAttributeEncode(property.get_value().get_label());
        else $v_2["ValueAttr"] = this.get_crmEncodeDecodeProxy().crmHtmlAttributeEncode($v_1);
        return $v_2
    }
};
Mscrm.ProcessAutomation.ProcessPropertyPanelViewComponentProvider = function() {
    this.$Z_0 = new Mscrm.ProcessAutomation.ProcessHeaderPropertyPanelViewComponentFactory;
    this.$W_0 = new Mscrm.ProcessAutomation.ProcessBodyPropertyPanelViewComponentFactory
};
Mscrm.ProcessAutomation.ProcessPropertyPanelViewComponentProvider.prototype = {
    get_headerComponentFactory: function() { return this.$Z_0 },
    set_headerComponentFactory: function(value) {
        this.$Z_0 = value;
        return value
    },
    get_bodyComponentFactory: function() { return this.$W_0 },
    set_bodyComponentFactory: function(value) {
        this.$W_0 = value;
        return value
    },
    getComponents: function(model, entityMetadata) {
        var $v_0 = this.$Z_0.createComponent(model);
        $v_0.set_entityMetadata(entityMetadata);
        var $v_1 = this.$W_0.createComponent(model);
        $v_1.set_entityMetadata(entityMetadata);
        return [$v_0, $v_1]
    }
};
Mscrm.ProcessAutomation.ProcessPropertyPanelScrollableCssClassProvider = function() {};
Mscrm.ProcessAutomation.ProcessPropertyPanelScrollableCssClassProvider.prototype = {
    getScrollableCssClass: function(model) {
        switch (model.getActivityTypeId()) {
        case "condition":
            return "wf_scrollable_filled_group_condition";
        default:
            return "wf_scrollable_filled_group_normal"
        }
    }
};
Mscrm.ProcessAutomation.ReadProcessPropertyPanelView = function(viewModel) {
    this.$d_3 = String
        .format("<div id='process_prop' class='process_prop'>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div id='process_body'>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div id='{0}'></div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div id='{1}' data-scrollable='true'></div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>", String.format("propertycomponent{0}", 0), String.format("propertycomponent{0}", 1));
    Mscrm.ProcessAutomation.ReadProcessPropertyPanelView.initializeBase(this, [viewModel])
};
Mscrm.ProcessAutomation.ReadProcessPropertyPanelView.prototype = {
    renderPropertyView: function() {
        var $v_0 = this.get_propertyPanelJQueryElement();
        return this.$32_3($v_0)
    },
    $32_3: function($p0) {
        var $v_0 = this.$0_2.get_processStep(),
            $v_1 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Object),
            $v_2 = Mscrm.ProcessAutomation.ProcessEntityDependencyVisitor.collectRequiredEntityDependency($v_0),
            $$t_D = this,
            $$t_E = this;
        Mscrm.ProcessAutomation.EntityCacheManager.get_instance().retrieveMultipleEntityMetadata($v_2)
            .done(function($p1_0) {
                $$t_D.$y_2 = $p1_0;
                var $v_3 = Mscrm.Automation.AutomationControl.instance.settings.getPropertyPanelViewComponentProvider(),
                    $v_4 = $v_3.getComponents($$t_D.$0_2.get_model(), $p1_0);
                $$t_D.$u_3 = $v_4;
                for (var $v_5 = new Array(0), $v_6 = 0;
                    $v_6 < $v_4.length;
                    $v_6++
                ) Array.add($v_5, $v_4[$v_6].retrieveComponentJQueryObject());
                $P_CRM.when.apply(null, $v_5).then(function($p2_0) {
                        for (var $v_7 = 0; $v_7 < $v_4.length; $v_7++) {
                            var $v_8 = String.format("propertycomponent{0}", $v_7);
                            $$t_D.get_jQueryProxy().selectInElement("#" + $v_8, $p0)
                                .append(new Mscrm.Proxies.JQueryObjectProxy(arguments[$v_7]))
                        }
                        $v_1.resolve($p0.get_jQueryObject())
                    },
                    function($p2_0) {})
            }).fail(function() {});
        return $v_1.promise()
    },
    dispose: function() {
        if (!IsNull(this.$u_3))
            for (var $$arr_0 = this.$u_3, $$len_1 = $$arr_0.length, $$idx_2 = 0; $$idx_2 < $$len_1; ++$$idx_2) {
                var $v_0 = $$arr_0[$$idx_2];
                $v_0.dispose()
            }
        Mscrm.ProcessAutomation.ProcessPropertyPanelView.prototype.dispose.call(this)
    },
    get_propertyPanelJQueryElement: function() {
        var $v_0 = this.get_jQueryProxy().fromHtml(this.get_propertyPanelJQueryHtml()),
            $v_1 = this.get_jQueryProxy().selectInElement("[data-scrollable='true']", $v_0);
        $v_1.addClass(this.get_scrollableCssClassProvider().getScrollableCssClass(this.$0_2.get_model()));
        return $v_0
    },
    get_propertyPanelJQueryHtml: function() { return this.$d_3 },
    get_components: function() { return this.$u_3 },
    set_components: function(value) {
        this.$u_3 = value;
        return value
    },
    get_scrollableCssClassProvider: function() {
        if (!this.$1Z_3) {
            var $v_0 = Mscrm.Automation.AutomationControl.instance.settings;
            this.$1Z_3 = $v_0.get_panelBodyCssProvider()
        }
        return this.$1Z_3
    },
    set_scrollableCssClassProvider: function(value) {
        this.$1Z_3 = value;
        return value
    },
    $u_3: null,
    $1Z_3: null
};
Mscrm.ProcessAutomation.ConditionLegacyDialog = function() {
    Mscrm.ProcessAutomation.ConditionLegacyDialog.initializeBase(this)
};
Mscrm.ProcessAutomation.ConditionLegacyDialog.prototype = {
    get_conditionBranchStep: function() { return this.$1E_1 },
    set_conditionBranchStep: function(value) {
        this.$1E_1 = value;
        return value
    },
    get_conditionXml: function() { return this.$1f_1 },
    set_conditionXml: function(value) {
        this.$1f_1 = value;
        return value
    },
    get_conditionDialogUrl: function() {
        if (!this.$v_1) {
            this.$v_1 = new Mscrm.Proxies.CrmUriProxy;
            var $v_0 = Mscrm.CrmUri.create("/Condition/Condition.aspx");
            $v_0.get_query()["StepId"] = this.$1E_1.get_Id();
            this.$v_1.set_element($v_0)
        }
        return this.$v_1
    },
    set_conditionDialogUrl: function(value) {
        this.$v_1 = value;
        return value
    },
    prepareDialogArguments: function() {
        var $v_0 = Mscrm.ProcessAutomation.ProcessLegacyDialog.prototype.prepareDialogArguments.call(this);
        $v_0["Xml"] = this.$1f_1;
        $v_0["url"] = this.get_conditionDialogUrl().toString();
        $v_0["formparams"] = this.$30_1();
        return $v_0
    },
    $30_1: function() {
        var $v_0 = {};
        $v_0["WorkflowStep"] = this.$1E_1.get_workflow().toJson();
        return JSON.stringify($v_0)
    },
    $1f_1: null,
    $1E_1: null,
    $v_1: null
};
Mscrm.ProcessAutomation.ProcessLegacyDialog = function() {};
Mscrm.ProcessAutomation.ProcessLegacyDialog.prototype = {
    openDialog: function() {
        var $v_0 = this.prepareDialogArguments();
        this.$f_0 = this.get_crmWindowMethodsProxy()
            .openStandardDialog(this.get_legacyDialogContainerUrl(), $v_0, this.$1t_0, this.$1i_0)
    },
    get_result: function() { return this.$f_0 },
    get_initialDialogArguments: function() {
        if (!this.$1B_0) this.$1B_0 = {};
        return this.$1B_0
    },
    set_initialDialogArguments: function(value) {
        this.$1B_0 = value;
        return value
    },
    get_width: function() { return this.$1t_0 },
    set_width: function(value) {
        this.$1t_0 = value;
        return value
    },
    get_height: function() { return this.$1i_0 },
    set_height: function(value) {
        this.$1i_0 = value;
        return value
    },
    get_crmWindowMethodsProxy: function() {
        if (!this.$1K_0) this.$1K_0 = new Mscrm.Proxies.CrmWindowMethodsProxy;
        return this.$1K_0
    },
    set_crmWindowMethodsProxy: function(value) {
        this.$1K_0 = value;
        return value
    },
    get_legacyDialogContainerUrl: function() {
        if (!this.$z_0) {
            this.$z_0 = new Mscrm.Proxies.CrmUriProxy;
            var $v_0 = Mscrm.CrmUri.create("/Tools/SystemCustomization/ProcessDesigner/ProcessPropertyContainer.aspx");
            this.$z_0.set_element($v_0)
        }
        return this.$z_0
    },
    set_legacyDialogContainerUrl: function(value) {
        this.$z_0 = value;
        return value
    },
    prepareDialogArguments: function() { return this.get_initialDialogArguments() },
    $1t_0: 800,
    $1i_0: 600,
    $f_0: null,
    $1B_0: null,
    $z_0: null,
    $1K_0: null
};
Mscrm.ProcessAutomation.NullPropertyPanelView = function(viewModel) {
    Mscrm.ProcessAutomation.NullPropertyPanelView.initializeBase(this, [viewModel])
};
Mscrm.ProcessAutomation.NullPropertyPanelView.prototype = {
    isIframe: function() { return false },
    get_propertyViewTemplate: function() {
        if (!Mscrm.ProcessAutomation.NullPropertyPanelView.$e) {
            var $v_0 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
                $v_1 = String.format('\r\n\t\t\t<div class="panel_placeholder">{0}</div>\r\n\t\t\t',
                    this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("PropertyPanelPlaceholderText")));
            Mscrm.ProcessAutomation.NullPropertyPanelView.$e = _.template($v_1)
        }
        return Mscrm.ProcessAutomation.NullPropertyPanelView.$e
    }
};
Mscrm.ProcessAutomation.ProcessPropertyPanelView = function(viewModel) {
    Mscrm.ProcessAutomation.ProcessPropertyPanelView.initializeBase(this, [viewModel.get_model()]);
    this.$0_2 = viewModel
};
Mscrm.ProcessAutomation.ProcessPropertyPanelView.prototype = {
    isIframe: function() { return false },
    renderPropertyView: function() {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Object);
        $v_0.resolve(this.get_propertyViewTemplate()(this.get_templateAttributes()));
        return $v_0.promise()
    },
    get_templateAttributes: function() {
        if (IsNull(this.model)) return null;
        var $v_0 = {};
        $v_0["Description"] = this.model.get_processStep().get_Description();
        return $v_0
    },
    renderCompleted: function() {
        Mscrm.Automation.DefaultPropertyPanelView.prototype.renderCompleted.call(this);
        this.$X_2 = Mscrm.ProcessAutomation.ReadControlInitializer.initializeReadControls(this.$el, this.$y_2);
        if (IsNull(this.$X_2)) {
            this.$X_2 = null;
            return
        }
        for (var $$arr_0 = this.$X_2, $$len_1 = $$arr_0.length, $$idx_2 = 0; $$idx_2 < $$len_1; ++$$idx_2) {
            var $v_0 = $$arr_0[$$idx_2];
            $v_0.render()
        }
    },
    dispose: function() {
        Mscrm.Automation.DefaultPropertyPanelView.prototype.dispose.call(this);
        if (!IsNull(this.$X_2)) {
            for (var $$arr_0 = this.$X_2, $$len_1 = $$arr_0.length, $$idx_2 = 0; $$idx_2 < $$len_1; ++$$idx_2) {
                var $v_0 = $$arr_0[$$idx_2];
                $v_0.dispose()
            }
            this.$X_2 = null
        }
        this.$y_2 = null
    },
    get_propertyViewTemplate: function() {
        if (!Mscrm.ProcessAutomation.ProcessPropertyPanelView.$e) {
            var $v_0 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
                $v_1 = String
                    .format("\r\n<ul>\r\n\t<li>\r\n\t\t<span>{0}:</span>\r\n\t\t<span><%- Description %></span>\r\n\t</li>\r\n</ul>", $v_0.GetLabel("PropertyTitle"));
            Mscrm.ProcessAutomation.ProcessPropertyPanelView.$e = _.template($v_1)
        }
        return Mscrm.ProcessAutomation.ProcessPropertyPanelView.$e
    },
    get_jQueryProxy: function() { return this.$I_2 || (this.$I_2 = new Mscrm.Proxies.JQueryProxy) },
    set_jQueryProxy: function(value) {
        this.$I_2 = value;
        return value
    },
    get_crmEncodeDecodeProxy: function() {
        if (IsNull(this.$E_2)) this.$E_2 = new Mscrm.Proxies.CrmEncodeDecodeProxy;
        return this.$E_2
    },
    set_crmEncodeDecodeProxy: function(value) {
        this.$E_2 = value;
        return value
    },
    get_entitiesMetadata: function() { return this.$y_2 },
    set_entitiesMetadata: function(value) {
        this.$y_2 = value;
        return value
    },
    get_viewModel: function() { return this.$0_2 },
    set_viewModel: function(value) {
        this.$0_2 = value;
        return value
    },
    $I_2: null,
    $E_2: null,
    $y_2: null,
    $X_2: null,
    $0_2: null
};
Mscrm.ProcessAutomation.ProcessPropertyPanelViewWithCommandBar = function(viewModel) {
    Mscrm.ProcessAutomation.ProcessPropertyPanelViewWithCommandBar.resolveInheritance();
    this.select = this.$;
    Mscrm.ProcessAutomation.ProcessPropertyPanelViewWithCommandBar.initializeBase(this, [viewModel])
};
Mscrm.ProcessAutomation.ProcessPropertyPanelViewWithCommandBar.prototype = {
    get_commandBarView: function() {
        if (!this.$Q_3) this.$Q_3 = new Mscrm.ProcessAutomation.PropertyCommandBarView(this.$t_3);
        return this.$Q_3
    },
    set_commandBarView: function(value) {
        this.$Q_3 = value;
        return value
    },
    renderPropertyView: function() {
        var $v_0 = this.$0_2.get_processStep(),
            $v_1 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Object),
            $v_2 = Mscrm.ProcessAutomation.ProcessEntityDependencyVisitor.collectRequiredEntityDependency($v_0),
            $$t_4 = this,
            $$t_5 = this;
        Mscrm.ProcessAutomation.EntityCacheManager.get_instance().retrieveMultipleEntityMetadata($v_2)
            .done(function($p1_0) { $v_1.resolve($$t_4.renderPropertyHtml().get_jQueryObject()) }).fail(function() {});
        return $v_1.promise()
    },
    get_commandBarContainer: function() { return this.$t_3 },
    set_commandBarContainer: function(value) {
        this.$t_3 = value;
        return value
    },
    renderCompleted: function() {
        Mscrm.ProcessAutomation.ProcessPropertyPanelView.prototype.renderCompleted.call(this);
        this.get_commandBarView().bind()
    },
    renderCommandBar: function(commandBarViewModel) {
        this.get_commandBarView().set_element(this.$t_3);
        this.get_commandBarView().set_dataContext(commandBarViewModel);
        this.get_commandBarView().render()
    },
    $t_3: null,
    $Q_3: null
};
Mscrm.ProcessAutomation.ProcessSlotIconHolderGenerator = function(activity) {
    Mscrm.ProcessAutomation.ProcessSlotIconHolderGenerator.initializeBase(this, [activity])
};
Mscrm.ProcessAutomation.ProcessSlotIconHolderGenerator.prototype = {
    generateSlot: function() {
        var $v_0 = this.activity.getParent();
        if (IsNull($v_0)) return null;
        var $v_1 = null;
        if ($v_0.getActivityTypeId() === "condition")
            switch (this.activity.getParentBranchId()) {
            case 1:
                $v_1 = new Mscrm.Automation.SlotIconHolderView;
                $v_1.model = new Mscrm.Automation.SlotModel(this.activity, 3, "YesBranch");
                $v_1.initializeSlot();
                break;
            case 2:
                $v_1 = new Mscrm.Automation.SlotIconHolderView;
                $v_1.model = new Mscrm.Automation.SlotModel(this.activity, 3, "NoBranch");
                $v_1.initializeSlot();
                break
            }
        return $v_1
    }
};
Mscrm.ProcessAutomation
    .ProcessSlotIconHolderGeneratorFactory = function() {
        Mscrm.ProcessAutomation.ProcessSlotIconHolderGeneratorFactory.initializeBase(this)
    };
Mscrm.ProcessAutomation.ProcessSlotIconHolderGeneratorFactory
    .prototype = {
        createSlotGenerator: function(activity) {
            return new Mscrm.ProcessAutomation.ProcessSlotIconHolderGenerator(activity)
        }
    };
Mscrm.ProcessAutomation
    .ProcessSlotInsertVerticalGeneratorFactory = function() {
        Mscrm.ProcessAutomation.ProcessSlotInsertVerticalGeneratorFactory.initializeBase(this)
    };
Mscrm.ProcessAutomation.ProcessSlotInsertVerticalGeneratorFactory
    .prototype = {
        createSlotGenerator: function(activity) {
            return new Mscrm.Automation.EmptySlotInsertVerticalGenerator(activity)
        }
    };
Mscrm.ProcessAutomation
    .ProcessDefaultActivityDropHandler = function(currentActivity) {
        Mscrm.ProcessAutomation.ProcessDefaultActivityDropHandler.initializeBase(this, [currentActivity])
    };
Mscrm.ProcessAutomation.ProcessDefaultActivityDropHandler.prototype = {
    drop: function(droppedComponent) {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Mscrm.Automation.IActivityDefinitionModel, Object);
        if (!this.dropAllowed(droppedComponent)) {
            $v_0.resolve(null);
            return $v_0.promise()
        }
        var $$t_6 = this, $$t_7 = this;
        Mscrm.Automation.AutomationControl.instance.activityTree.cutConnectedComponent(droppedComponent)
            .done(function($p1_0) {
                Mscrm.Automation.AutomationControl.instance.activityTree
                    .insertActivityComponentAfter($$t_6.currentActivity, droppedComponent)
                    .done(function($p2_0) {
                        $p2_0.saveActivityWithSubsequentActivities().done(function($p3_0) { $v_0.resolve($p3_0) })
                    })
            }).fail(function($p1_0) { $v_0.resolve(null) });
        return $v_0.promise()
    }
};
Mscrm.ProcessAutomation.ProcessSlotGeneratorProvider = function() {
    Mscrm.ProcessAutomation.ProcessSlotGeneratorProvider.initializeBase(this)
};
Mscrm.ProcessAutomation.ProcessSlotGeneratorProvider.prototype = {
    createGeneratorFactory: function(slotType) {
        switch (slotType) {
        case 3:
            return new Mscrm.ProcessAutomation.ProcessSlotIconHolderGeneratorFactory;
        case 2:
            return new Mscrm.ProcessAutomation.ProcessSlotInsertVerticalGeneratorFactory;
        default:
            return Mscrm.Automation.DefaultSlotGeneratorProvider.prototype.createGeneratorFactory.call(this, slotType)
        }
    }
};
Mscrm.ProcessAutomation.InProgressStatusView = function(status) {
    this.$V_2 = '\r\n<span class="tileStatus">\r\n\t<img src="' +
        window.CDNURL +
        '/_imgs/ico/16_inprogress.png" class="tileStatusImg">\r\n</span>\r\n';
    Mscrm.ProcessAutomation.InProgressStatusView.initializeBase(this, [status])
};
Mscrm.ProcessAutomation.InProgressStatusView.prototype = { get_statusViewHtml: function() { return this.$V_2 } };
Mscrm.ProcessAutomation.CanceledStatusView = function(status) {
    this.$V_2 = '\r\n<span class="tileStatus">\r\n\t<img src="' +
        window.CDNURL +
        '/_imgs/ico/16_cancel.png" class="tileStatusImg">\r\n</span>\r\n';
    Mscrm.ProcessAutomation.CanceledStatusView.initializeBase(this, [status])
};
Mscrm.ProcessAutomation.CanceledStatusView.prototype = { get_statusViewHtml: function() { return this.$V_2 } };
Mscrm.ProcessAutomation.FailedStatusView = function(status) {
    this.$V_2 = '\r\n<span class="tileStatus">\r\n\t<img src="' +
        window.CDNURL +
        '/_imgs/ico/16_failed.png" class="tileStatusImg" title=\'{0}\'>\r\n</span>\r\n';
    Mscrm.ProcessAutomation.FailedStatusView.initializeBase(this, [status])
};
Mscrm.ProcessAutomation.FailedStatusView.prototype = { get_statusViewHtml: function() { return this.$V_2 } };
Mscrm.ProcessAutomation.StatusViewBase = function(status) {
    Mscrm.ProcessAutomation.StatusViewBase.resolveInheritance();
    this.select = this.$;
    Mscrm.ProcessAutomation.StatusViewBase.initializeBase(this);
    this.$1b_1 = status
};
Mscrm.ProcessAutomation.StatusViewBase.prototype = {
    render: function() {
        var $v_0 = this.get_statusMessage();
        this.$el = $P_CRM(String.format(this.get_statusViewHtml(), $v_0));
        return this
    },
    get_activityStatus: function() { return this.$1b_1 },
    get_statusMessage: function() {
        if (IsNull(this.$1b_1)) return "";
        var $v_0 = Mscrm.Automation.AutomationControl.instance.settings.getStatusMessageResolver();
        return $v_0.resolveMessage(this.$1b_1.statusMessageId)
    },
    $1b_1: null
};
Mscrm.ProcessAutomation.SuccessStatusView = function(status) {
    this.$V_2 = '\r\n<span class="tileStatus">\r\n\t<img src="' +
        window.CDNURL +
        '/_imgs/ico/16_succeeded.png" class="tileStatusImg">\r\n</span>\r\n';
    Mscrm.ProcessAutomation.SuccessStatusView.initializeBase(this, [status])
};
Mscrm.ProcessAutomation.SuccessStatusView.prototype = { get_statusViewHtml: function() { return this.$V_2 } };
Mscrm.ProcessAutomation.WaitingStatusView = function(status) {
    this.$V_2 = '\r\n<span class="tileStatus">\r\n\t<img src="' +
        window.CDNURL +
        '/_imgs/ico/16_waiting.png" class="tileStatusImg">\r\n</span>\r\n';
    Mscrm.ProcessAutomation.WaitingStatusView.initializeBase(this, [status])
};
Mscrm.ProcessAutomation.WaitingStatusView.prototype = { get_statusViewHtml: function() { return this.$V_2 } };
Mscrm.ProcessAutomation.ProcessStatusViewFactory = function() {};
Mscrm.ProcessAutomation.ProcessStatusViewFactory.prototype = {
    createStatusView: function(status) {
        switch (status.code) {
        case 1:
            return new Mscrm.ProcessAutomation.InProgressStatusView(status);
        case 4:
            return new Mscrm.ProcessAutomation.CanceledStatusView(status);
        case 3:
            return new Mscrm.ProcessAutomation.FailedStatusView(status);
        case 2:
            return new Mscrm.ProcessAutomation.SuccessStatusView(status);
        case 5:
            return new Mscrm.ProcessAutomation.WaitingStatusView(status);
        default:
            return new Mscrm.Automation.EmptyStatusView
        }
    }
};
Mscrm.ProcessAutomation.ProcessBodyView = function($p0) {
    Mscrm.ProcessAutomation.ProcessBodyView.initializeBase(this, [$p0])
};
Mscrm.ProcessAutomation.ProcessBodyView.prototype = {
    $0_1: null,
    get_dataContext: function() { return this.$0_1 },
    set_dataContext: function($p0) {
        if (IsNull(this.$0_1) && !IsNull($p0)) this.$0_1 = $p0;
        return $p0
    },
    initialize: function() {
        Mscrm.ProcessAutomation.View.prototype.initialize.call(this);
        this.get_automationControl().set_dataContext(this.$0_1);
        this.get_automationControl().processId = this.$0_1.get_processId();
        this.get_automationControl().initialize()
    }
};
Mscrm.ProcessAutomation.ProcessCanvasView = function(canvasContainer) {
    Mscrm.ProcessAutomation.ProcessCanvasView.resolveInheritance();
    this.select = this.$;
    Mscrm.ProcessAutomation.ProcessCanvasView.initializeBase(this, [canvasContainer])
};
Mscrm.ProcessAutomation.ProcessCanvasView.prototype = {
    get_dataContext: function() { return this.$x_2 },
    set_dataContext: function(value) {
        if (IsNull(this.$x_2) && !IsNull(value)) this.$x_2 = value;
        return value
    },
    onFetchProcess: function() {
        this.$x_2.initializeActivityStatus();
        Mscrm.Automation.CanvasView.prototype.onFetchProcess.call(this)
    },
    updateProcess: function() {
        this.$x_2.updateProcess();
        Mscrm.Automation.CanvasView.prototype.updateProcess.call(this)
    },
    $x_2: null
};
Mscrm.ProcessAutomation.ProcessDesignerView = function(element) {
    Mscrm.ProcessAutomation.ProcessDesignerView.initializeBase(this, [element])
};
Mscrm.ProcessAutomation.ProcessDesignerView.prototype = {
    $0_1: null,
    $C_1: null,
    $A_1: null,
    $Q_1: null,
    get_viewModel: function() { return this.$0_1 },
    get_dataContext: function() { return this.$0_1 },
    set_dataContext: function(value) {
        if (IsNull(this.$0_1) && !IsNull(value)) this.$0_1 = value;
        return value
    },
    initialize: function() { $P_CRM.fn.extend({ propAttr: $P_CRM.fn.prop || $P_CRM.fn.attr }) },
    dispose: function() {
        if (this.$a_0) return;
        !IsNull(this.$C_1) && this.$C_1.dispose();
        this.$C_1 = null;
        !IsNull(this.$A_1) && this.$A_1.dispose();
        this.$A_1 = null;
        !IsNull(this.$0_1) && this.$0_1.dispose();
        this.$0_1 = null
    },
    get_headerView: function() { return this.$C_1 },
    set_headerView: function(value) {
        this.$C_1 = value;
        return value
    },
    get_bodyView: function() { return this.$A_1 },
    set_bodyView: function(value) {
        this.$A_1 = value;
        return value
    },
    get_commandBarView: function() { return this.$Q_1 },
    set_commandBarView: function(value) {
        this.$Q_1 = value;
        return value
    }
};
Mscrm.ProcessAutomation.ProcessHeaderView = function($p0) {
    Mscrm.ProcessAutomation.ProcessHeaderView.initializeBase(this, [$p0])
};
Mscrm.ProcessAutomation.ProcessHeaderView.prototype = {
    get_dataContext: function() { return this.$0_1 },
    set_dataContext: function($p0) {
        if (IsNull(this.$0_1) && !IsNull($p0)) this.$0_1 = $p0;
        return $p0
    },
    $0_1: null
};
Mscrm.ProcessAutomation.ProcessPropertyViewFactory = function() {
    Mscrm.ProcessAutomation.ProcessPropertyViewFactory.initializeBase(this)
};
Mscrm.ProcessAutomation.ProcessPropertyViewFactory.prototype = {
    createProperty: function(currentModel) {
        if (!currentModel)
            return new Mscrm.ProcessAutomation
                .NullPropertyPanelView(new Mscrm.ProcessAutomation.EmptyPropertyViewModel(null));
        var $v_0 = this.get_$3A_1().getViewModel(currentModel);
        $v_0.initialize();
        if (currentModel.getReadonlyMode()) return this.createReadProperty($v_0, currentModel.getActivityTypeId());
        return this.createEditProperty($v_0, currentModel.getActivityTypeId())
    },
    createEditProperty: function(viewModel, activityType) {
        switch (activityType) {
        case "condition":
            return new Mscrm.ProcessAutomation.EditableReadConditionPropertyPanelView(viewModel);
        default:
            return this.createReadProperty(viewModel, activityType)
        }
    },
    createReadProperty: function(viewModel, activityType) {
        switch (activityType) {
        case "condition":
            return new Mscrm.ProcessAutomation.ReadProcessPropertyPanelView(viewModel);
        default:
            return new Mscrm.ProcessAutomation.ProcessPropertyPanelView(viewModel)
        }
    },
    get_$3A_1: function() {
        if (IsNull(this.$q_1)) {
            var $v_0 = Mscrm.Automation.AutomationControl.instance.settings;
            this.$q_1 = $v_0.get_propertyViewModelFactory()
        }
        return this.$q_1
    },
    $q_1: null
};
Mscrm.ProcessAutomation.View = function(element) { this.$T_0 = element };
Mscrm.ProcessAutomation.View.prototype = {
    $I_0: null,
    $T_0: null,
    $E_0: null,
    initialize: function() {},
    get_jQueryProxy: function() {
        if (IsNull(this.$I_0)) this.$I_0 = new Mscrm.Proxies.JQueryProxy;
        return this.$I_0
    },
    set_jQueryProxy: function(value) {
        this.$I_0 = value;
        return value
    },
    get_element: function() { return this.$T_0 },
    set_element: function(value) {
        this.$T_0 = value;
        return value
    },
    get_crmEncodeDecodeProxy: function() {
        if (IsNull(this.$E_0)) this.$E_0 = new Mscrm.Proxies.CrmEncodeDecodeProxy;
        return this.$E_0
    },
    set_crmEncodeDecodeProxy: function(value) {
        this.$E_0 = value;
        return value
    },
    dispose: function() {},
    get_isDisposed: function() { return this.$a_0 },
    set_isDisposed: function(value) {
        this.$a_0 = value;
        return value
    },
    $a_0: false
};
Mscrm.ProcessAutomation.CommandBarView = function(element) {
    Mscrm.ProcessAutomation.CommandBarView.initializeBase(this, [element])
};
Mscrm.ProcessAutomation.CommandBarView.prototype = {
    get_dataContext: function() { return this.$0_1 },
    set_dataContext: function(value) {
        if (IsNull(this.$0_1) && !IsNull(value)) this.$0_1 = value;
        return value
    },
    $0_1: null
};
Mscrm.ProcessAutomation.ViewFactory = function() {};
Mscrm.ProcessAutomation.ViewFactory.prototype = {
    createBusinessProcessCommandBarView: function(element) {
        return new Mscrm.ProcessAutomation.BusinessProcessCommandBarView(element)
    }
};
Mscrm.ProcessAutomation.ProcessEntityDependencyVisitor = function() {
    Mscrm.ProcessAutomation.ProcessEntityDependencyVisitor.initializeBase(this);
    this.$D_2 = new Array(0)
};
Mscrm.ProcessAutomation.ProcessEntityDependencyVisitor.collectRequiredEntityDependency = function(step) {
    var $v_0 = new Mscrm.ProcessAutomation.ProcessEntityDependencyVisitor;
    !Array.contains($v_0.$D_2, step.get_workflow().get_primaryEntityName()) &&
        Array.add($v_0.$D_2, step.get_workflow().get_primaryEntityName());
    step.apply($v_0);
    return $v_0.$D_2
};
Mscrm.ProcessAutomation.ProcessEntityDependencyVisitor.prototype = {
    visitEntitySpecification: function(entitySpecification) {
        !Array.contains(this.$D_2, entitySpecification.get_entityName()) &&
            Array.add(this.$D_2, entitySpecification.get_entityName());
        Microsoft.Crm.Workflow.ObjectModel.ProcessDefinitionVisitorBase.prototype.visitEntitySpecification
            .call(this, entitySpecification)
    },
    visitEntityAttributeExpression: function(expression) {
        !Array.contains(this.$D_2, expression.get_entity().get_entityName()) &&
            Array.add(this.$D_2, expression.get_entity().get_entityName());
        Microsoft.Crm.Workflow.ObjectModel.ProcessDefinitionVisitorBase.prototype.visitEntityAttributeExpression
            .call(this, expression)
    },
    visitLookupExpression: function(expression) {
        !Array.contains(this.$D_2, expression.get_entityType()) && Array.add(this.$D_2, expression.get_entityType());
        Microsoft.Crm.Workflow.ObjectModel.ProcessDefinitionVisitorBase.prototype.visitLookupExpression
            .call(this, expression)
    },
    visitAssignStep: function(assignStep) {
        !IsNull(assignStep.get_entity()) &&
            !Array.contains(this.$D_2, assignStep.get_entity().get_entityName()) &&
            Array.add(this.$D_2, assignStep.get_entity().get_entityName());
        Microsoft.Crm.Workflow.ObjectModel.ProcessDefinitionVisitorBase.prototype.visitAssignStep.call(this, assignStep)
    },
    visitSendEmailStep: function(sendEmailStep) {
        !IsNull(sendEmailStep.get_entity()) &&
            !Array.contains(this.$D_2, sendEmailStep.get_entity().get_entityName()) &&
            Array.add(this.$D_2, sendEmailStep.get_entity().get_entityName());
        Microsoft.Crm.Workflow.ObjectModel.ProcessDefinitionVisitorBase.prototype.visitSendEmailStep
            .call(this, sendEmailStep)
    },
    visitStageStep: function(stageStep) {
        var $v_0 = stageStep.get_parent().get_EntityLogicalName();
        !IsNull($v_0) && !Array.contains(this.$D_2, $v_0) && Array.add(this.$D_2, $v_0);
        Microsoft.Crm.Workflow.ObjectModel.ProcessDefinitionVisitorBase.prototype.visitStageStep.call(this, stageStep)
    },
    visitChildWorkflowStep: function(childWorkflowStep) {
        !IsNull(childWorkflowStep.get_entity()) &&
            !Array.contains(this.$D_2, childWorkflowStep.get_entity().get_entityName()) &&
            Array.add(this.$D_2, childWorkflowStep.get_entity().get_entityName());
        Microsoft.Crm.Workflow.ObjectModel.ProcessDefinitionVisitorBase.prototype.visitChildWorkflowStep
            .call(this, childWorkflowStep)
    },
    visitInteractionPageStep: function(interactionPageStep) {
        for (var $v_0 = 0; $v_0 < interactionPageStep.get_Steps().get_Count(); ++$v_0) {
            var $v_1 = interactionPageStep.get_Steps().get_item($v_0);
            $v_1.apply(this)
        }
    },
    visitInteractionStep: function(interactionStep) {
        !isNullOrEmptyString(interactionStep.get_queryEntityName()) &&
            !Array.contains(this.$D_2, interactionStep.get_queryEntityName()) &&
            Array.add(this.$D_2, interactionStep.get_queryEntityName())
    },
    visitChildInteractiveWorkflowStep: function(childWorkflowStep) {
        !IsNull(childWorkflowStep.get_entity()) &&
            !Array.contains(this.$D_2, childWorkflowStep.get_entity().get_entityName()) &&
            Array.add(this.$D_2, childWorkflowStep.get_entity().get_entityName())
    },
    visitQueryStep: function(queryStep) {
        !isNullOrEmptyString(queryStep.get_entityName()) &&
            !Array.contains(this.$D_2, queryStep.get_entityName()) &&
            Array.add(this.$D_2, queryStep.get_entityName())
    },
    visitAssignVariableStep: function(assignVariableStep) {
        Microsoft.Crm.Workflow.ObjectModel.ProcessDefinitionVisitorBase.prototype.visitAssignVariableStep
            .call(this, assignVariableStep);
        !IsNull(assignVariableStep.get_valueExpression()) && this.$2Y_2(assignVariableStep.get_valueExpression())
    },
    visitMethodCallExpression: function(expression) {
        Microsoft.Crm.Workflow.ObjectModel.ProcessDefinitionVisitorBase.prototype.visitMethodCallExpression
            .call(this, expression);
        switch (expression.get_method()) {
        case 0:
            var $v_0 = Microsoft.Crm.Workflow.Expressions.MethodCallExpression.extractSelectFirstNull(expression);
            !IsNull($v_0) && this.$2Y_2($v_0);
            break
        }
    },
    $2Y_2: function($p0) {
        if (Microsoft.Crm.Workflow.Expressions.EntityAttributeExpression
            .isInstanceOfType($p0)) this.visitEntityAttributeExpression($p0);
        else if (Microsoft.Crm.Workflow.Expressions.PrimitiveExpression
            .isInstanceOfType($p0)) this.visitPrimitiveExpression($p0);
        else if (Microsoft.Crm.Workflow.Expressions.LookupExpression
            .isInstanceOfType($p0)) this.visitLookupExpression($p0);
        else if (Microsoft.Crm.Workflow.Expressions.MethodCallExpression
            .isInstanceOfType($p0)) this.visitMethodCallExpression($p0);
        else throw Error.create("Expression not supported")
    },
    $D_2: null,
    visitRelationshipCollectionStep: function(relationshipCollectionStep) {},
    visitRelationshipStep: function(relationshipStep) {}
};
Mscrm.ProcessAutomation.ProcessAutomationControl = function() {
    Mscrm.ProcessAutomation.ProcessAutomationControl.initializeBase(this)
};
Mscrm.ProcessAutomation.ProcessAutomationControl.prototype = {
    $0_1: null,
    $s_1: null,
    get_dataContext: function() { return this.$0_1 },
    set_dataContext: function(value) {
        if (IsNull(this.$0_1) && !IsNull(value)) this.$0_1 = value;
        return value
    },
    initialize: function() {
        Mscrm.Automation.AutomationControl.prototype.initialize.call(this);
        var $v_0 = $P_CRM("#canvas");
        Mscrm.Automation.DragTouchHelper.mapTouchEvents($v_0);
        this.initializeSettings();
        this.initializeTree();
        this.initializeToolPane($v_0);
        this.initializeCanvas($v_0);
        this.initializeWorkspaceCommands()
    },
    updateProcess: function() { this.$s_1.updateProcess() },
    initializeToolPane: function(canvasContainer) {
        var $v_0 = $P_CRM("#toolpane");
        $v_0.tabs(null);
        var $v_1 = new Mscrm.Automation
            .LibraryCollectionView(new Mscrm.Automation.LibraryModel, $P_CRM("#library"), canvasContainer);
        $v_1.render(null);
        var $v_2 = new Mscrm.Automation.PropertyView($P_CRM("#property"));
        Object.getType($v_2);
        var $$t_6 = this;
        Mscrm.Automation.AutomationControl.instance.globalEventManager
            .on("slotTileHolderDoubleClick", function($p1_0) { $v_0.tabs("select", "property") }, this);
        var $$t_7 = this;
        Mscrm.Automation.AutomationControl.instance.globalEventManager
            .on("hideContextMenus", function($p1_0) { $$t_7.settings.getSlotContextMenu().Hide() }, this);
        $v_0.tabs("select", "property")
    },
    initializeCanvas: function(canvasContainer) {
        var $v_0 = new Mscrm.ProcessAutomation.CanvasViewModel;
        $v_0.set_process(this.$0_1.get_process());
        $v_0.initialize();
        this.$s_1 = new Mscrm.ProcessAutomation.ProcessCanvasView(canvasContainer);
        this.$s_1.set_dataContext($v_0);
        this.$s_1.initializeCanvas()
    },
    initializeSettings: function() {
        var $v_0 = new Mscrm.ProcessAutomation.Settings;
        $v_0.set_viewModel(this.$0_1);
        this.settings = $v_0;
        this.settings.initialize()
    },
    initializeTree: function() { this.activityTree = new Mscrm.ProcessAutomation.ProcessTree },
    initializeWorkspaceCommands: function() {
        var $v_0 = new Mscrm.Automation.DefaultWorkspaceModeController(this.$s_1);
        new Mscrm.Automation.ZoomViewCommandButton($v_0, $P_CRM("#zoomItem"))
    }
};
Mscrm.ProcessAutomation.ProcessInitializer = function() {};
Mscrm.ProcessAutomation.ProcessInitializer.get_instance = function() {
    return Mscrm.ProcessAutomation.ProcessInitializer.$3
};
Mscrm.ProcessAutomation.ProcessInitializer.set_instance = function(value) {
    Mscrm.ProcessAutomation.ProcessInitializer.$3 = value;
    return value
};
Mscrm.ProcessAutomation.ProcessInitializer.prototype = {
    get_jQueryProxy: function() {
        if (!this.$I_0) this.$I_0 = new Mscrm.Proxies.JQueryProxy;
        return this.$I_0
    },
    set_jQueryProxy: function(value) {
        this.$I_0 = value;
        return value
    },
    get_viewModel: function() { return this.$0_0 },
    set_viewModel: function(value) {
        this.$0_0 = value;
        return value
    },
    get_view: function() { return this.$G_0 },
    set_view: function(value) {
        this.$G_0 = value;
        return value
    },
    $I_0: null,
    $0_0: null,
    $G_0: null
};
Mscrm.ProcessAutomation.ProcessActionActivityType = function() {};
Mscrm.ProcessAutomation.ProcessActionCssClass = function() {};
Mscrm.ProcessAutomation.ProcessActionSettings = function() {
    Mscrm.ProcessAutomation.ProcessActionSettings.initializeBase(this)
};
Mscrm.ProcessAutomation.ProcessActionSettings.prototype = {
    initialize: function() {
        Mscrm.ProcessAutomation.WorkflowSettings.prototype.initialize.call(this);
        this.setActivityDefinitionFactory(new Mscrm.ProcessAutomation.ProcessActionActivityDefinitionFactory);
        this.setTileInformationFactory(new Mscrm.ProcessAutomation.ProcessActionTileInformationFactory);
        this.setPropertyViewFactory(new Mscrm.ProcessAutomation.ProcessActionPropertyViewFactory);
        this.setPropertyPanelViewComponentProvider(new Mscrm.ProcessAutomation
            .ProcessActionPropertyPanelViewComponentProvider);
        this.$c_1 = new Mscrm.ProcessAutomation.ProcessActionPropertyPanelScrollableCssClassProvider
    }
};
Mscrm.ProcessAutomation.ProcessActionRuntimeSettings = function() {
    Mscrm.ProcessAutomation.ProcessActionRuntimeSettings.initializeBase(this)
};
Mscrm.ProcessAutomation.ProcessActionRuntimeSettings.prototype = {
    initialize: function() {
        Mscrm.ProcessAutomation.ProcessActionSettings.prototype.initialize.call(this);
        this.setLineConnectorProviderFactory(new Mscrm.Automation.WorkflowRuntimeLineConnectorProviderFactory);
        this.setDecoratorFactory(new Mscrm.ProcessAutomation.WorkflowRuntimeDecoratorFactory);
        this.$g_1 = new Mscrm.ProcessAutomation.RuntimeProcessActivitiesStatusInitializer;
        this.setStatusCodeProviderFactory(new Mscrm.Automation.ProcessActionRuntimeStatusCodeProviderFactory);
        this.setPropertyViewFactory(new Mscrm.ProcessAutomation.ProcessActionRuntimePropertyViewFactory);
        this.setPropertyPanelViewComponentProvider(new Mscrm.ProcessAutomation
            .ProcessActionRuntimePropertyPanelViewComponentProvider)
    }
};
Mscrm.ProcessAutomation
    .ProcessActionToUIActivityCollectionVisitor = function() {
        Mscrm.ProcessAutomation.ProcessActionToUIActivityCollectionVisitor.initializeBase(this)
    };
Mscrm.ProcessAutomation.ProcessActionToUIActivityCollectionVisitor.prototype = {
    visitWorkflowStep: function(workflowStep) {
        var $v_0 = this.createUIActivity(workflowStep, "ac_root");
        this.$6_1 = $v_0;
        this.$8_1 = 0;
        for (var $v_1 = 0;
            $v_1 < workflowStep.get_Steps().get_Count();
            $v_1++
        ) workflowStep.get_Steps().get_item($v_1).apply(this)
    }
};
Mscrm.ProcessAutomation
    .ProcessActionActivityDefinitionFactory = function() {
        Mscrm.ProcessAutomation.ProcessActionActivityDefinitionFactory.initializeBase(this)
    };
Mscrm.ProcessAutomation.ProcessActionActivityDefinitionFactory.prototype = {
    createActivity: function(activityType) {
        switch (activityType) {
        case "ac_root":
            return new Mscrm.ProcessAutomation.ProcessActionRootActivity;
        default:
            return Mscrm.ProcessAutomation.WorkflowActivityDefinitionFactory.prototype.createActivity
                .call(this, activityType)
        }
    }
};
Mscrm.ProcessAutomation.ProcessActionRootActivity = function() {
    Mscrm.ProcessAutomation.ProcessActionRootActivity.initializeBase(this, ["ac_root"])
};
Mscrm.ProcessAutomation.ProcessActionRootActivity.prototype = {
    initialize: function(properties) {
        Mscrm.Automation.ActivityDefinitionModel.prototype.initialize.call(this, properties);
        this.setActivityTypeId("ac_root");
        this.addNewItem("ac_root");
        this.setRow(0);
        this.setCol(0)
    },
    initializeFromProcessStep: function() {
        Mscrm.ProcessAutomation.ProcessActivityDefinitionModel.prototype.initializeFromProcessStep.call(this);
        var $v_0 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_1 = this.$2_2,
            $v_2 = new Mscrm.ProcessAutomation.ProcessItemModel;
        $v_2.Title = $v_0.GetLabel("ActionTileTitle");
        $v_2.ItemID = $v_1.get_Id();
        this.setActiveItemPropertiesWithoutRaisingEvent($v_2)
    }
};
Mscrm.ProcessAutomation
    .ProcessActionTileInformationFactory = function() {
        Mscrm.ProcessAutomation.ProcessActionTileInformationFactory.initializeBase(this)
    };
Mscrm.ProcessAutomation.ProcessActionTileInformationFactory.prototype = {
    getTileInformationForActivityModel: function(activityModel, specificItemId) {
        var $v_0 = activityModel.getActivityTypeId();
        switch ($v_0) {
        case "ac_root":
            return new Mscrm.ProcessAutomation.WorkflowRootActivityTileInformation(activityModel, specificItemId);
        default:
            return Mscrm.ProcessAutomation.WorkflowTileInformationFactory.prototype.getTileInformationForActivityModel
                .call(this, activityModel, specificItemId)
        }
    }
};
Mscrm.ProcessAutomation.ProcessActionDesignerViewModel = function() {
    Mscrm.ProcessAutomation.ProcessActionDesignerViewModel.initializeBase(this)
};
Mscrm.ProcessAutomation.ProcessActionDesignerViewModel.prototype = {
    get_activityDefinitionCollection: function() {
        if (IsNull(this.$H_3)) {
            var $v_0 = new Mscrm.ProcessAutomation.ProcessActionToUIActivityCollectionVisitor;
            this.$H_3 = $v_0.convert(this.$F_1)
        }
        return this.$H_3
    },
    $H_3: null
};
Mscrm.ProcessAutomation
    .ProcessActionRootBodyPropertyPanelViewComponent = function(model) {
        Mscrm.ProcessAutomation.ProcessActionRootBodyPropertyPanelViewComponent.initializeBase(this, [model])
    };
Mscrm.ProcessAutomation.ProcessActionRootBodyPropertyPanelViewComponent.prototype = {
    get_template: function() {
        var $v_0 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_1 = String.format(this.$1_1,
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("ActionArgumentInput")),
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("ActionArgumentName")),
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("ActionArgumentType")),
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("ProcessEntity")),
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("ActionArgumentOutput")));
        return _.template($v_1)
    },
    retrieveAttributes: function() {
        for (var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Object),
            $v_1 = this.$7_0.$2_2,
            $v_2 = {},
            $v_3 = [],
            $v_4 = [],
            $v_5 = 0;
            $v_5 < $v_1.get_arguments().get_Count();
            $v_5++) {
            var $v_6 = $v_1.get_arguments().get_item($v_5), $v_7 = {};
            $v_7["Name"] = this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_6.get_name());
            $v_7["Type"] = this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_6.get_argumentTypeDisplay());
            $v_7["Entity"] = this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_6.get_entityName());
            $v_7["Required"] = $v_6.get_required();
            if (!IsNull(0))
                if (!$v_6.get_direction()) Array.add($v_3, $v_7);
                else Array.add($v_4, $v_7)
        }
        $v_2["InputArguments"] = $v_3;
        $v_2["OutputArguments"] = $v_4;
        $v_0.resolve($v_2);
        return $v_0.promise()
    },
    $1_1:
        "\r\n\t<div class='wf_prop_subheader_line' id='collapse_button_container' data-target='in_arguments_table'><a href='#' class='collapse_button' ></a><a href='#' id='collapse_label' class='collapse_label'>{0}</a></div>\r\n\t<div class='wf_table collapsable' id='in_arguments_table'>\r\n\t\t<div class='wf_row wf_header'>\r\n\t\t\t<div class='wf_col_5'>{1}</div>\r\n\t\t\t<div class='wf_col_3'>{2}</div>\r\n\t\t\t<div class='wf_col_3'>{3}</div>\r\n\t\t\t<div class='wf_col_1 wf_col_right'>\r\n\t\t\t\t<span class='required_text'>*</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<% _.each(InputArguments, function(argumentObject) {{ %>\r\n\t\t\t<div class='wf_row'>\r\n\t\t\t\t<div class='wf_col_5 wf_col_content'>\r\n\t\t\t\t\t<div class='wf_col_inner ellipsis'>\r\n\t\t\t\t\t\t<%= argumentObject.Name %>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class='wf_col_3 wf_col_content'>\r\n\t\t\t\t\t<div class='wf_col_inner ellipsis'>\r\n\t\t\t\t\t\t<%= argumentObject.Type %>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class='wf_col_3 wf_col_content'>\r\n\t\t\t\t\t<div class='wf_col_inner ellipsis'>\r\n\t\t\t\t\t\t<%= argumentObject.Entity %>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class='wf_col_1 wf_col_content wf_col_right'>\r\n\t\t\t\t\t<div class='wf_col_inner ellipsis'>\r\n\t\t\t\t\t\t<% if (argumentObject.Required) {{ %>\r\n\t\t\t\t\t\t\t<input type='checkbox' checked='true' disabled='true' class='process_required_checkbox'></input>\r\n\t\t\t\t\t\t<% }} else {{ %>\r\n\t\t\t\t\t\t\t<input type='checkbox' disabled='true' class='process_required_checkbox'></input>\r\n\t\t\t\t\t\t<% }} %>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t<% }}); %>\r\n\t</div>\r\n\t<div class='wf_prop_subheader_line' id='collapse_button_container'  data-target='out_arguments_table'><a href='#' class='collapse_button'></a><a href='#' id='collapse_label' class='collapse_label'>{4}</a></div>\r\n\t<div class='wf_table collapsable' id='out_arguments_table'>\r\n\t\t<div class='wf_row wf_header'>\r\n\t\t\t<div class='wf_col_5'>{1}</div>\r\n\t\t\t<div class='wf_col_3'>{2}</div>\r\n\t\t\t<div class='wf_col_3'>{3}</div>\r\n\t\t\t<div class='wf_col_1 wf_col_right'>\r\n\t\t\t\t<span class='required_text'>*</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<% _.each(OutputArguments, function(argumentObject) {{ %>\r\n\t\t\t<div class='wf_row'>\r\n\t\t\t\t<div class='wf_col_5 wf_col_content'>\r\n\t\t\t\t\t<div class='wf_col_inner ellipsis'>\r\n\t\t\t\t\t\t<%= argumentObject.Name %>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class='wf_col_3 wf_col_content'>\r\n\t\t\t\t\t<div class='wf_col_inner ellipsis'>\r\n\t\t\t\t\t\t<%= argumentObject.Type %>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class='wf_col_3 wf_col_content'>\r\n\t\t\t\t\t<div class='wf_col_inner ellipsis'>\r\n\t\t\t\t\t\t<%= argumentObject.Entity %>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class='wf_col_1 wf_col_content wf_col_right'>\r\n\t\t\t\t\t<div class='wf_col_inner ellipsis'>\r\n\t\t\t\t\t\t<% if (argumentObject.Required) {{ %>\r\n\t\t\t\t\t\t\t<input type='checkbox' checked='true' disabled='true' class='process_required_checkbox'></input>\r\n\t\t\t\t\t\t<% }} else {{ %>\r\n\t\t\t\t\t\t\t<input type='checkbox' disabled='true' class='process_required_checkbox'></input>\r\n\t\t\t\t\t\t<% }} %>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t<% }}); %>\r\n\t</div>\r\n"
};
Mscrm.ProcessAutomation
    .ProcessActionRootHeaderPropertyPanelViewComponent = function(model) {
        Mscrm.ProcessAutomation.ProcessActionRootHeaderPropertyPanelViewComponent.initializeBase(this, [model])
    };
Mscrm.ProcessAutomation.ProcessActionRootHeaderPropertyPanelViewComponent.prototype = {
    get_template: function() {
        var $v_0 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_1 = String.format(this.$1_1,
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("ActionPropertyTitle")),
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("ProcessEntity")),
                "Unique Name",
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("ActionPropertyIsTransacted")));
        return _.template($v_1)
    },
    retrieveAttributes: function() {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Object),
            $v_1 = {},
            $v_2 = this.$7_0.$2_2,
            $v_3 = Mscrm.ProcessAutomation.ProcessDesignerDataJsonWrapper.get_instance(),
            $v_4 = $v_3.EntityJson,
            $v_5 = Mscrm.ProcessAutomation.EntityCacheManager.get_instance()
                .getDisplayName($v_2.get_primaryEntityName());
        $v_1["EntityName"] = this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_5);
        $v_1["EntityNameAttr"] = this.get_crmEncodeDecodeProxy().crmHtmlAttributeEncode($v_5);
        $v_1["UniqueName"] = this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_4.UniqueName);
        $v_1["UniqueNameAttr"] = this.get_crmEncodeDecodeProxy().crmHtmlAttributeEncode($v_4.UniqueName);
        $v_1["IsTransacted"] = $v_4.IsTransacted;
        $v_0.resolve($v_1);
        return $v_0.promise()
    },
    $1_1:
        "\r\n\t<div class='process_prop_title process_child process_child_top' tabindex='0'>{0}</div>\r\n\t<div class='wf_prop_field_group process_child'>\r\n\t\t<div id='entity_name_label' class='wf_prop_field'>{1}</div>\r\n\t\t<div aria-labelledby='entity_name_label' class='wf_prop_value' tabindex='0' title='<%= EntityNameAttr %>'><%= EntityName %></div>\r\n\t</div>\r\n\t<div class='wf_prop_field_group process_child'>\r\n\t\t<div id='unique_name_label' class='wf_prop_field'>{2}</div>\r\n\t\t<div aria-labelledby='unique_name_label' class='wf_prop_value' tabindex='0' title='<%= UniqueNameAttr %>'><%= UniqueName %></div>\r\n\t</div>\r\n\t<div class='wf_prop_field_group process_child'>\r\n\t\t<div id='entity_name_label' class='wf_prop_field'>{3}</div>\r\n\t\t<% if (IsTransacted) {{ %>\r\n\t\t\t<input type='checkbox' checked='true' disabled='true' class='process_required_checkbox'></input>\r\n\t\t<% }} else {{ %>\r\n\t\t\t<input type='checkbox' disabled='true' class='process_required_checkbox'></input>\r\n\t\t<% }} %>\r\n\t</div>\r\n"
};
Mscrm.ProcessAutomation
    .ProcessActionBodyPropertyPanelViewComponentFactory = function() {
        Mscrm.ProcessAutomation.ProcessActionBodyPropertyPanelViewComponentFactory.initializeBase(this)
    };
Mscrm.ProcessAutomation.ProcessActionBodyPropertyPanelViewComponentFactory.prototype = {
    createComponent: function(model) {
        switch (model.getActivityTypeId()) {
        case "ac_root":
            return new Mscrm.ProcessAutomation.ProcessActionRootBodyPropertyPanelViewComponent(model);
        default:
            return Mscrm.ProcessAutomation.WorkflowBodyPropertyPanelViewComponentFactory.prototype.createComponent
                .call(this, model)
        }
    }
};
Mscrm.ProcessAutomation
    .ProcessActionHeaderPropertyPanelViewComponentFactory =
    function() { Mscrm.ProcessAutomation.ProcessActionHeaderPropertyPanelViewComponentFactory.initializeBase(this) };
Mscrm.ProcessAutomation.ProcessActionHeaderPropertyPanelViewComponentFactory.prototype = {
    createComponent: function(model) {
        switch (model.getActivityTypeId()) {
        case "ac_root":
            return new Mscrm.ProcessAutomation.ProcessActionRootHeaderPropertyPanelViewComponent(model);
        default:
            return Mscrm.ProcessAutomation.WorkflowHeaderPropertyPanelViewComponentFactory.prototype.createComponent
                .call(this, model)
        }
    }
};
Mscrm.ProcessAutomation.ProcessActionPropertyPanelViewComponentProvider = function() {
    Mscrm.ProcessAutomation.ProcessActionPropertyPanelViewComponentProvider.initializeBase(this);
    this.$Z_0 = new Mscrm.ProcessAutomation.ProcessActionHeaderPropertyPanelViewComponentFactory;
    this.$W_0 = new Mscrm.ProcessAutomation.ProcessActionBodyPropertyPanelViewComponentFactory
};
Mscrm.ProcessAutomation.ProcessActionRuntimePropertyPanelViewComponentProvider = function() {
    this.$14_3 = new Mscrm.ProcessAutomation.ProcessActionRuntimeStatusPropertyPanelViewComponentFactory;
    Mscrm.ProcessAutomation.ProcessActionRuntimePropertyPanelViewComponentProvider.initializeBase(this)
};
Mscrm.ProcessAutomation.ProcessActionRuntimePropertyPanelViewComponentProvider.prototype = {
    getComponents: function(model, entityMetadata) {
        var $v_0 = Mscrm.ProcessAutomation.ProcessPropertyPanelViewComponentProvider.prototype.getComponents
                .call(this, model, entityMetadata),
            $v_1 = this.$14_3.createComponent(model);
        $v_1.set_entityMetadata(entityMetadata);
        Array.add($v_0, $v_1);
        return $v_0
    }
};
Mscrm.ProcessAutomation
    .ProcessActionRuntimeStatusPropertyPanelViewComponentFactory =
    function() {
        Mscrm.ProcessAutomation.ProcessActionRuntimeStatusPropertyPanelViewComponentFactory.initializeBase(this)
    };
Mscrm.ProcessAutomation.ProcessActionRuntimeStatusPropertyPanelViewComponentFactory.prototype = {
    createComponent: function(model) {
        if (model.getActivityTypeId() === "ac_root")
            return new Mscrm.ProcessAutomation.ProcessSessionRootStatusPropertyPanelViewComponent(model);
        return Mscrm.ProcessAutomation.WorkflowRuntimeStatusPropertyPanelViewComponentFactory.prototype.createComponent
            .call(this, model)
    }
};
Mscrm.ProcessAutomation.ReadProcessActionRuntimePropertyPanelView = function(viewModel) {
    this.$d_4 = String
        .format("<div id='process_prop' class='process_prop'>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div id='process_body'>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div id='{0}'></div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div data-scrollable='true'>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div id='{1}'></div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div id='{2}'></div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>", String.format("propertycomponent{0}", 0), String.format("propertycomponent{0}", 1), String.format("propertycomponent{0}", 2));
    Mscrm.ProcessAutomation.ReadProcessActionRuntimePropertyPanelView.initializeBase(this, [viewModel])
};
Mscrm.ProcessAutomation.ReadProcessActionRuntimePropertyPanelView
    .prototype = { get_propertyPanelJQueryHtml: function() { return this.$d_4 } };
Mscrm.ProcessAutomation
    .ProcessActionPropertyPanelScrollableCssClassProvider =
    function() { Mscrm.ProcessAutomation.ProcessActionPropertyPanelScrollableCssClassProvider.initializeBase(this) };
Mscrm.ProcessAutomation.ProcessActionPropertyPanelScrollableCssClassProvider.prototype = {
    getScrollableCssClass: function(model) {
        switch (model.getActivityTypeId()) {
        case "ac_root":
            return "wf_scrollable_filled_group_actionroot";
        default:
            return Mscrm.ProcessAutomation.WorkflowPropertyPanelScrollableCssClassProvider.prototype
                .getScrollableCssClass.call(this, model)
        }
    }
};
Mscrm.ProcessAutomation.ProcessActionBodyView = function($p0) {
    Mscrm.ProcessAutomation.ProcessActionBodyView.initializeBase(this, [$p0])
};
Mscrm.ProcessAutomation.ProcessActionBodyView.prototype = {
    $9_3: null,
    get_automationControl: function() {
        if (IsNull(this.$9_3)) this.$9_3 = new Mscrm.ProcessAutomation.ProcessActionAutomationControl;
        return this.$9_3
    }
};
Mscrm.ProcessAutomation.ProcessActionDesignerView = function(element) {
    Mscrm.ProcessAutomation.ProcessActionDesignerView.initializeBase(this, [element])
};
Mscrm.ProcessAutomation.ProcessActionDesignerView.prototype = {
    initialize: function() {
        this.$C_1 = new Mscrm.ProcessAutomation
            .WorkflowHeaderView(this.get_jQueryProxy().selectElement("HeaderViewContainer"));
        this.$C_1.set_dataContext(this.get_dataContext());
        this.$C_1.initialize();
        this.$A_1 = new Mscrm.ProcessAutomation
            .ProcessActionBodyView(this.get_jQueryProxy().selectElement("BodyViewContainer"));
        this.$A_1.set_dataContext(this.get_dataContext());
        this.$A_1.initialize()
    }
};
Mscrm.ProcessAutomation.ProcessActionRuntimeBodyView = function($p0) {
    Mscrm.ProcessAutomation.ProcessActionRuntimeBodyView.initializeBase(this, [$p0])
};
Mscrm.ProcessAutomation.ProcessActionRuntimeBodyView.prototype = {
    $9_4: null,
    get_automationControl: function() {
        if (IsNull(this.$9_4)) this.$9_4 = new Mscrm.ProcessAutomation.ProcessActionRuntimeAutomationControl;
        return this.$9_4
    }
};
Mscrm.ProcessAutomation.ProcessActionRuntimeView = function(element) {
    Mscrm.ProcessAutomation.ProcessActionRuntimeView.initializeBase(this, [element])
};
Mscrm.ProcessAutomation.ProcessActionRuntimeView.prototype = {
    initialize: function() {
        this.$C_1 = new Mscrm.ProcessAutomation
            .WorkflowHeaderView(this.get_jQueryProxy().selectElement("HeaderViewContainer"));
        this.$C_1.set_dataContext(this.get_dataContext());
        this.$C_1.initialize();
        this.$A_1 = new Mscrm.ProcessAutomation
            .ProcessActionRuntimeBodyView(this.get_jQueryProxy().selectElement("BodyViewContainer"));
        this.$A_1.set_dataContext(this.get_dataContext());
        this.$A_1.initialize()
    }
};
Mscrm.ProcessAutomation
    .ProcessActionRuntimePropertyViewFactory = function() {
        Mscrm.ProcessAutomation.ProcessActionRuntimePropertyViewFactory.initializeBase(this)
    };
Mscrm.ProcessAutomation.ProcessActionRuntimePropertyViewFactory.prototype = {
    createReadProperty: function(viewModel, activityType) {
        var $v_0 = viewModel.get_model().get_status();
        if (!IsNull($v_0) && $v_0.code !== -1)
            return new Mscrm.ProcessAutomation.ReadProcessActionRuntimePropertyPanelView(viewModel);
        return Mscrm.ProcessAutomation.ProcessActionPropertyViewFactory.prototype.createReadProperty
            .call(this, viewModel, activityType)
    }
};
Mscrm.ProcessAutomation.ProcessActionPropertyViewFactory = function() {
    Mscrm.ProcessAutomation.ProcessActionPropertyViewFactory.initializeBase(this)
};
Mscrm.ProcessAutomation.ProcessActionPropertyViewFactory.prototype = {
    createReadProperty: function(viewModel, activityType) {
        switch (activityType) {
        case "ac_root":
            return new Mscrm.ProcessAutomation.ReadProcessPropertyPanelView(viewModel);
        default:
            return Mscrm.ProcessAutomation.WorkflowPropertyViewFactory.prototype.createReadProperty
                .call(this, viewModel, activityType)
        }
    }
};
Mscrm.ProcessAutomation.ProcessActionAutomationControl = function() {
    Mscrm.ProcessAutomation.ProcessActionAutomationControl.initializeBase(this)
};
Mscrm.ProcessAutomation.ProcessActionAutomationControl.prototype = {
    initializeSettings: function() {
        var $v_0 = new Mscrm.ProcessAutomation.ProcessActionSettings;
        $v_0.set_viewModel(this.$0_1);
        this.settings = $v_0;
        this.settings.initialize()
    }
};
Mscrm.ProcessAutomation
    .ProcessActionRuntimeAutomationControl = function() {
        Mscrm.ProcessAutomation.ProcessActionRuntimeAutomationControl.initializeBase(this)
    };
Mscrm.ProcessAutomation.ProcessActionRuntimeAutomationControl.prototype = {
    initializeSettings: function() {
        var $v_0 = new Mscrm.ProcessAutomation.ProcessActionRuntimeSettings;
        $v_0.set_viewModel(this.$0_1);
        this.settings = $v_0;
        this.settings.initialize()
    }
};
Mscrm.ProcessAutomation.WorkflowActivityType = function() {};
Mscrm.ProcessAutomation.WorkflowCssClass = function() {};
Mscrm.ProcessAutomation.WorkflowSettings = function() { Mscrm.ProcessAutomation.WorkflowSettings.initializeBase(this) };
Mscrm.ProcessAutomation.WorkflowSettings.prototype = {
    initialize: function() {
        Mscrm.ProcessAutomation.Settings.prototype.initialize.call(this);
        this.setTileInformationFactory(new Mscrm.ProcessAutomation.WorkflowTileInformationFactory);
        this.setActivityDefinitionFactory(new Mscrm.ProcessAutomation.WorkflowActivityDefinitionFactory);
        this.setPropertyViewFactory(new Mscrm.ProcessAutomation.WorkflowPropertyViewFactory);
        this.setLibraryNodesFactory(new Mscrm.ProcessAutomation.WorkflowLibraryNodesFactory);
        this.setPropertyPanelViewComponentProvider(new Mscrm.ProcessAutomation
            .WorkflowPropertyPanelViewComponentProvider);
        this.$g_1 = new Mscrm.ProcessAutomation.RuntimeProcessActivitiesStatusInitializer;
        this.$n_1 = new Mscrm.ProcessAutomation.DefaultWorkflowObjectGeneratorFactory;
        this.$n_1.set_processStep(this.$0_1.get_process());
        this.$c_1 = new Mscrm.ProcessAutomation.WorkflowPropertyPanelScrollableCssClassProvider
    }
};
Mscrm.ProcessAutomation.WorkflowStepActivityStatus = function() {};
Mscrm.ProcessAutomation
    .RuntimeProcessActivitiesStatusInitializer = function() {
        Mscrm.ProcessAutomation.RuntimeProcessActivitiesStatusInitializer.initializeBase(this)
    };
Mscrm.ProcessAutomation.RuntimeProcessActivitiesStatusInitializer.prototype = {
    initializeStatus: function() { this.$2T_1() },
    $2T_1: function() {
        var $v_0 = Mscrm.Automation.AutomationControl.instance.activityTree.getActivities();
        if (IsNull($v_0)) return;
        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            var $v_2 = this.get_$18_1().getStatusCodeProviderFactory().getProvider($v_0[$v_1].getActivityTypeId());
            $v_2.$4_1 = $v_0[$v_1].get_processStep();
            $v_0[$v_1].set_status($v_2.getStatus($v_0[$v_1].getActivityId()))
        }
    },
    get_$18_1: function() { return Mscrm.Automation.AutomationControl.instance.settings }
};
Mscrm.ProcessAutomation
    .WorkflowRuntimeDefaultStatusCodeProvider = function() {
        Mscrm.ProcessAutomation.WorkflowRuntimeDefaultStatusCodeProvider.initializeBase(this)
    };
Mscrm.ProcessAutomation.WorkflowRuntimeDefaultStatusCodeProvider.prototype = {
    getStatus: function(activityId) {
        for (var $v_0 = Mscrm.ProcessAutomation.ProcessDesignerDataJsonWrapper.get_instance(),
            $$arr_2 = $v_0.RuntimeLogs,
            $$len_3 = $$arr_2.length,
            $$idx_4 = 0;
            $$idx_4 < $$len_3;
            ++$$idx_4) {
            var $v_1 = $$arr_2[$$idx_4];
            if ($v_1
                .ActivityName ===
                this.$2Z_2(activityId)) return new Mscrm.Automation.ActivityStatus($v_1.Status, "")
        }
        return new Mscrm.Automation.ActivityStatus(-1, "")
    },
    $2Z_2: function($p0) { return $p0 + "_step" }
};
Mscrm.ProcessAutomation
    .WorkflowRuntimeConditionActivityStatusCodeProvider = function() {
        Mscrm.ProcessAutomation.WorkflowRuntimeConditionActivityStatusCodeProvider.initializeBase(this)
    };
Mscrm.ProcessAutomation.WorkflowRuntimeConditionActivityStatusCodeProvider.prototype = {
    getStatus: function(activityId) {
        var $v_0 = Mscrm.ProcessAutomation.WorkflowRuntimeDefaultStatusCodeProvider.prototype.getStatus
            .call(this, activityId);
        if ($v_0.code === -1) {
            for (var $v_1 = new Mscrm.Automation.ActivityStatus(-1, ""),
                $v_2 = this.$4_1.get_parent(),
                $v_3 = 0,
                $v_5 = 0;
                $v_5 < $v_2.get_Steps().get_Count();
                $v_5++)
                if ($v_2.get_Steps().get_item($v_5) === this.$4_1) {
                    $v_3 = $v_5;
                    break
                }
            for (var $v_4 = -1, $v_6 = 0; $v_6 < $v_2.get_Steps().get_Count(); $v_6++) {
                var $v_7 = $v_2.get_Steps().get_item($v_6),
                    $v_8 = Mscrm.Automation.AutomationControl.instance.settings.getStatusCodeProviderFactory()
                        .getProvider($v_7.get_typeName());
                $v_1 = $v_8.getStatus($v_7.get_Id());
                if ($v_1.code !== -1) {
                    $v_4 = $v_6;
                    break
                }
            }
            if ($v_4 === -1) {
                $v_1 = Mscrm.ProcessAutomation.WorkflowRuntimeDefaultStatusCodeProvider.prototype.getStatus
                    .call(this, $v_2.get_Id());
                if ($v_1.code !== -1) $v_0 = $v_1
            } else if ($v_4 > $v_3) $v_0 = $v_1
        }
        return $v_0
    }
};
Mscrm.ProcessAutomation
    .WorkflowRuntimeRootActivityStatusCodeProvider = function() {
        Mscrm.ProcessAutomation.WorkflowRuntimeRootActivityStatusCodeProvider.initializeBase(this)
    };
Mscrm.ProcessAutomation.WorkflowRuntimeRootActivityStatusCodeProvider
    .prototype = { getStatus: function(activityId) { return new Mscrm.Automation.ActivityStatus(0, "") } };
Mscrm.ProcessAutomation.WorkflowRuntimeSettings = function() {
    Mscrm.ProcessAutomation.WorkflowRuntimeSettings.initializeBase(this)
};
Mscrm.ProcessAutomation.WorkflowRuntimeSettings.prototype = {
    initialize: function() {
        Mscrm.ProcessAutomation.WorkflowSettings.prototype.initialize.call(this);
        this.setLineConnectorProviderFactory(new Mscrm.Automation.WorkflowRuntimeLineConnectorProviderFactory);
        this.setTileInformationFactory(new Mscrm.ProcessAutomation.WorkflowRuntimeTileInformationFactory);
        this.setActivityDefinitionFactory(new Mscrm.ProcessAutomation.WorkflowActivityDefinitionFactory);
        this.setPropertyViewFactory(new Mscrm.ProcessAutomation.WorkflowRuntimePropertyViewFactory);
        this.setStatusCodeProviderFactory(new Mscrm.Automation.WorkflowRuntimeStatusCodeProviderFactory);
        this.setDecoratorFactory(new Mscrm.ProcessAutomation.WorkflowRuntimeDecoratorFactory);
        this.setPropertyPanelViewComponentProvider(new Mscrm.ProcessAutomation
            .WorkflowRuntimePropertyPanelViewComponentProvider);
        this.$g_1 = new Mscrm.ProcessAutomation.RuntimeProcessActivitiesStatusInitializer
    }
};
Mscrm.ProcessAutomation.WorkflowRuntimeDecoratorFactory = function() {
    Mscrm.ProcessAutomation.WorkflowRuntimeDecoratorFactory.initializeBase(this)
};
Mscrm.ProcessAutomation.WorkflowRuntimeDecoratorFactory.prototype = {
    getTileDecorator: function(activityModel) {
        var $v_0 = activityModel, $v_1 = $v_0.$1q_2;
        if (!IsNull($v_1) && $v_1.code !== -1) return new Mscrm.ProcessAutomation.ExecutionTileDecorator;
        return new Mscrm.Automation.DefaultTileDecorator
    },
    getLineDecorator: function(parentActivity, childActivity) {
        if (IsNull(Mscrm.ProcessAutomation.WorkflowRuntimeDecoratorFactory
            .$U)) Mscrm.ProcessAutomation.WorkflowRuntimeDecoratorFactory.$U = parentActivity;
        if (Mscrm.ProcessAutomation.WorkflowRuntimeDecoratorFactory.$U === parentActivity &&
            this.$1u_1(parentActivity) &&
            this.$1u_1(childActivity)) {
            Mscrm.ProcessAutomation.WorkflowRuntimeDecoratorFactory.$U = childActivity;
            return new Mscrm.ProcessAutomation.ExecutionLineDecorator
        }
        return Mscrm.Automation.DefaultDecoratorFactory.prototype.getLineDecorator
            .call(this, parentActivity, childActivity)
    },
    $1u_1: function($p0) {
        var $v_0 = $p0.get_status();
        return !!$v_0 && $v_0.code !== -1
    }
};
Mscrm.ProcessAutomation
    .WorkflowToUIActivityCollectionVisitor = function() {
        Mscrm.ProcessAutomation.WorkflowToUIActivityCollectionVisitor.initializeBase(this)
    };
Mscrm.ProcessAutomation.WorkflowToUIActivityCollectionVisitor.prototype = {
    visitStopWorkflowStep: function(stopWorkflowStep) {
        var $v_0 = this.createUIActivity(stopWorkflowStep, "wf_stopworkflow");
        this.$6_1 = $v_0;
        this.$8_1 = 0
    },
    visitWorkflowStep: function(workflowStep) {
        var $v_0 = this.createUIActivity(workflowStep, "wf_root");
        this.$6_1 = $v_0;
        this.$8_1 = 0;
        for (var $v_1 = 0;
            $v_1 < workflowStep.get_Steps().get_Count();
            $v_1++
        ) workflowStep.get_Steps().get_item($v_1).apply(this)
    },
    visitCreateStep: function(createStep) {
        var $v_0 = this.createUIActivity(createStep, "wf_create");
        this.$6_1 = $v_0;
        this.$8_1 = 0
    },
    visitStageStep: function(stageStep) {
        for (var $v_0 = 0;
            $v_0 < stageStep.get_Steps().get_Count();
            $v_0++
        ) stageStep.get_Steps().get_item($v_0).apply(this)
    },
    visitCustomActivityStep: function(customActivityStep) {
        var $v_0 = this.createUIActivity(customActivityStep, "wf_customactivity");
        this.$6_1 = $v_0;
        this.$8_1 = 0
    },
    visitAssignStep: function(assignStep) {
        var $v_0 = this.createUIActivity(assignStep, "wf_assign");
        this.$6_1 = $v_0;
        this.$8_1 = 0
    },
    visitChildWorkflowStep: function(childWorkflowStep) {
        var $v_0 = this.createUIActivity(childWorkflowStep, "wf_child");
        this.$6_1 = $v_0;
        this.$8_1 = 0
    },
    visitSendEmailStep: function(sendEmailStep) {
        var $v_0 = this.createUIActivity(sendEmailStep, "wf_sendemail");
        this.$6_1 = $v_0;
        this.$8_1 = 0
    },
    visitSetStateStep: function(setStateStep) {
        var $v_0 = this.createUIActivity(setStateStep, "wf_setstate");
        this.$6_1 = $v_0;
        this.$8_1 = 0
    },
    visitUpdateStep: function(updateStep) {
        var $v_0 = this.createUIActivity(updateStep, "wf_update");
        this.$6_1 = $v_0;
        this.$8_1 = 0
    },
    visitWaitBranchStep: function(waitBranchStep) {
        var $v_0 = this.createUIActivity(waitBranchStep, "wf_waitbranch");
        this.$6_1 = $v_0;
        this.$8_1 = 0;
        for (var $v_1 = 0;
            $v_1 < waitBranchStep.get_Steps().get_Count();
            $v_1++
        ) waitBranchStep.get_Steps().get_item($v_1).apply(this);
        this.$6_1 = $v_0
    },
    visitWaitStep: function(waitStep) {
        var $v_0 = this.createUIActivity(waitStep, "wf_wait");
        this.$6_1 = $v_0;
        for (var $v_1 = 0; $v_1 < waitStep.get_Steps().get_Count(); $v_1++) {
            this.$6_1 = $v_0;
            this.$8_1 = $v_1;
            waitStep.get_Steps().get_item($v_1).apply(this)
        }
        this.$6_1 = $v_0;
        this.$8_1 = 0
    },
    visitWaitTimeoutStep: function(waitTimeoutStep) {
        var $v_0 = this.createUIActivity(waitTimeoutStep, "wf_waittimeout");
        this.$6_1 = $v_0;
        this.$8_1 = 0
    }
};
Mscrm.ProcessAutomation.DefaultCreateStepGenerator = function() {
    Mscrm.ProcessAutomation.DefaultCreateStepGenerator.initializeBase(this)
};
Mscrm.ProcessAutomation.DefaultCreateStepGenerator
    .prototype = {
        constructUninitializedStep: function() { return new Microsoft.Crm.Workflow.ObjectModel.CreateStep(this.$2_0) }
    };
Mscrm.ProcessAutomation.DefaultUpdateStepGenerator = function() {
    Mscrm.ProcessAutomation.DefaultUpdateStepGenerator.initializeBase(this)
};
Mscrm.ProcessAutomation.DefaultUpdateStepGenerator
    .prototype = {
        constructUninitializedStep: function() { return new Microsoft.Crm.Workflow.ObjectModel.UpdateStep(this.$2_0) }
    };
Mscrm.ProcessAutomation
    .DefaultWorkflowObjectGeneratorFactory = function() {
        Mscrm.ProcessAutomation.DefaultWorkflowObjectGeneratorFactory.initializeBase(this)
    };
Mscrm.ProcessAutomation.DefaultWorkflowObjectGeneratorFactory.prototype = {
    createGenerator: function(activityType) {
        var $v_0 = null;
        switch (activityType) {
        case "wf_create":
            $v_0 = new Mscrm.ProcessAutomation.DefaultCreateStepGenerator;
            break;
        case "wf_update":
            $v_0 = new Mscrm.ProcessAutomation.DefaultUpdateStepGenerator;
            break;
        default:
            $v_0 = Mscrm.ProcessAutomation.DefaultObjectGeneratorFactory.prototype.createGenerator
                .call(this, activityType);
            break
        }
        $v_0.set_processStep(this.$2_0);
        return $v_0
    }
};
Mscrm.ProcessAutomation
    .WorkflowActivityDefinitionFactory = function() {
        Mscrm.ProcessAutomation.WorkflowActivityDefinitionFactory.initializeBase(this)
    };
Mscrm.ProcessAutomation.WorkflowActivityDefinitionFactory.prototype = {
    createActivity: function(activityType) {
        switch (activityType) {
        case "wf_assign":
            return new Mscrm.ProcessAutomation.AssignActivity;
        case "wf_child":
            return new Mscrm.ProcessAutomation.ChildWorkflowActivity;
        case "wf_create":
            return new Mscrm.ProcessAutomation.CreateActivity;
        case "wf_customactivity":
            return new Mscrm.ProcessAutomation.CustomActivity;
        case "wf_sendemail":
            return new Mscrm.ProcessAutomation.SendEmailActivity;
        case "wf_setstate":
            return new Mscrm.ProcessAutomation.SetStateActivity;
        case "wf_stopworkflow":
            return new Mscrm.ProcessAutomation.StopWorkflowActivity;
        case "wf_update":
            return new Mscrm.ProcessAutomation.UpdateActivity;
        case "wf_wait":
            return new Mscrm.ProcessAutomation.WaitActivity;
        case "wf_waitbranch":
            return new Mscrm.ProcessAutomation.WaitBranchActivity;
        case "wf_waittimeout":
            return new Mscrm.ProcessAutomation.WaitBranchActivity;
        case "wf_stage":
            return new Mscrm.ProcessAutomation.WorkflowStageActivity;
        case "wf_root":
            return new Mscrm.ProcessAutomation.WorkflowRootActivity;
        default:
            return Mscrm.ProcessAutomation.ProcessActivityDefinitionFactory.prototype.createActivity
                .call(this, activityType)
        }
    }
};
Mscrm.ProcessAutomation.AssignActivity = function() {
    Mscrm.ProcessAutomation.AssignActivity.initializeBase(this, ["wf_assign"])
};
Mscrm.ProcessAutomation.AssignActivity.prototype = {
    initialize: function(properties) {
        Mscrm.Automation.ActivityDefinitionModel.prototype.initialize.call(this, properties);
        this.setActivityTypeId("wf_assign");
        this.addNewItem("wf_assign")
    },
    initializeFromProcessStep: function() {
        Mscrm.ProcessAutomation.ProcessActivityDefinitionModel.prototype.initializeFromProcessStep.call(this);
        var $v_0 = this.$2_2, $v_1 = new Mscrm.ProcessAutomation.ProcessItemModel;
        $v_1.Title = (new Mscrm.ProcessAutomation.CachedStepDisplayInfoProvider).getDisplayInfo($v_0.get_Id())
            .DisplayText;
        $v_1.ItemID = $v_0.get_Id();
        this.setActiveItemPropertiesWithoutRaisingEvent($v_1)
    }
};
Mscrm.ProcessAutomation.ChildWorkflowActivity = function() {
    Mscrm.ProcessAutomation.ChildWorkflowActivity.initializeBase(this, ["wf_child"])
};
Mscrm.ProcessAutomation.ChildWorkflowActivity.prototype = {
    initialize: function(properties) {
        Mscrm.Automation.ActivityDefinitionModel.prototype.initialize.call(this, properties);
        this.setActivityTypeId("wf_child");
        this.addNewItem("wf_child")
    },
    initializeFromProcessStep: function() {
        Mscrm.ProcessAutomation.ProcessActivityDefinitionModel.prototype.initializeFromProcessStep.call(this);
        var $v_0 = this.$2_2, $v_1 = new Mscrm.ProcessAutomation.ProcessItemModel;
        $v_1.Title = (new Mscrm.ProcessAutomation.CachedStepDisplayInfoProvider).getDisplayInfo($v_0.get_Id())
            .DisplayText;
        $v_1.ItemID = $v_0.get_Id();
        this.setActiveItemPropertiesWithoutRaisingEvent($v_1)
    }
};
Mscrm.ProcessAutomation.CreateActivity = function() {
    Mscrm.ProcessAutomation.CreateActivity.initializeBase(this, ["wf_create"])
};
Mscrm.ProcessAutomation.CreateActivity.prototype = {
    initialize: function(properties) {
        Mscrm.Automation.ActivityDefinitionModel.prototype.initialize.call(this, properties);
        this.setActivityTypeId("wf_create");
        this.addNewItem("wf_create")
    },
    initializeFromProcessStep: function() {
        Mscrm.ProcessAutomation.ProcessActivityDefinitionModel.prototype.initializeFromProcessStep.call(this);
        var $v_0 = this.$2_2, $v_1 = new Mscrm.ProcessAutomation.ProcessItemModel;
        $v_1.Title = String.format(Mscrm.Automation.AutomationControl.instance.settings
            .getLabelKeyValuePhraseCollection().GetLabel("CreateTileTitleFormat"),
            Mscrm.ProcessAutomation.EntityCacheManager.get_instance().getDisplayName($v_0.get_entityName()));
        $v_1.ItemID = $v_0.get_Id();
        this.setActiveItemPropertiesWithoutRaisingEvent($v_1)
    }
};
Mscrm.ProcessAutomation.CustomActivity = function() {
    Mscrm.ProcessAutomation.CustomActivity.initializeBase(this, ["wf_customactivity"])
};
Mscrm.ProcessAutomation.CustomActivity.prototype = {
    initialize: function(properties) {
        Mscrm.Automation.ActivityDefinitionModel.prototype.initialize.call(this, properties);
        this.setActivityTypeId("wf_customactivity");
        this.addNewItem("wf_customactivity")
    },
    initializeFromProcessStep: function() {
        Mscrm.ProcessAutomation.ProcessActivityDefinitionModel.prototype.initializeFromProcessStep.call(this);
        var $v_0 = this.$2_2,
            $v_1 = new Mscrm.ProcessAutomation.ProcessItemModel,
            $v_2 = $v_0.get_activityInfo(),
            $v_3 = $v_2 ? $v_2.get_name() : "";
        $v_1.Title = $v_3;
        $v_1.ItemID = $v_0.get_Id();
        this.setActiveItemPropertiesWithoutRaisingEvent($v_1)
    }
};
Mscrm.ProcessAutomation.SendEmailActivity = function() {
    Mscrm.ProcessAutomation.SendEmailActivity.initializeBase(this, ["wf_sendemail"])
};
Mscrm.ProcessAutomation.SendEmailActivity.prototype = {
    initialize: function(properties) {
        Mscrm.Automation.ActivityDefinitionModel.prototype.initialize.call(this, properties);
        this.setActivityTypeId("wf_sendemail");
        this.addNewItem("wf_sendemail")
    },
    initializeFromProcessStep: function() {
        Mscrm.ProcessAutomation.ProcessActivityDefinitionModel.prototype.initializeFromProcessStep.call(this);
        var $v_0 = this.$2_2, $v_1 = new Mscrm.ProcessAutomation.ProcessItemModel;
        $v_1.Title = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection()
            .GetLabel("SendEmailTileTitleFormat");
        $v_1.ItemID = $v_0.get_Id();
        this.setActiveItemPropertiesWithoutRaisingEvent($v_1)
    }
};
Mscrm.ProcessAutomation.SetStateActivity = function() {
    Mscrm.ProcessAutomation.SetStateActivity.initializeBase(this, ["wf_setstate"])
};
Mscrm.ProcessAutomation.SetStateActivity.prototype = {
    initialize: function(properties) {
        Mscrm.Automation.ActivityDefinitionModel.prototype.initialize.call(this, properties);
        this.setActivityTypeId("wf_setstate");
        this.addNewItem("wf_setstate")
    },
    initializeFromProcessStep: function() {
        Mscrm.ProcessAutomation.ProcessActivityDefinitionModel.prototype.initializeFromProcessStep.call(this);
        var $v_0 = this.$2_2, $v_1 = new Mscrm.ProcessAutomation.ProcessItemModel;
        $v_1.Title = (new Mscrm.ProcessAutomation.CachedStepDisplayInfoProvider).getDisplayInfo($v_0.get_Id())
            .DisplayText;
        $v_1.ItemID = $v_0.get_Id();
        this.setActiveItemPropertiesWithoutRaisingEvent($v_1)
    }
};
Mscrm.ProcessAutomation.StopWorkflowActivity = function() {
    Mscrm.ProcessAutomation.StopWorkflowActivity.initializeBase(this, ["wf_stopworkflow"])
};
Mscrm.ProcessAutomation.StopWorkflowActivity.prototype = {
    initialize: function(properties) {
        Mscrm.Automation.ActivityDefinitionModel.prototype.initialize.call(this, properties);
        this.setActivityTypeId("wf_stopworkflow");
        this.addNewItem("wf_stopworkflow")
    },
    initializeFromProcessStep: function() {
        Mscrm.ProcessAutomation.ProcessActivityDefinitionModel.prototype.initializeFromProcessStep.call(this);
        var $v_0 = this.$2_2,
            $v_1 = new Mscrm.ProcessAutomation.ProcessItemModel,
            $v_2 = Mscrm.ProcessAutomation.ProcessDesignerDataJsonWrapper.get_instance().AdditionalData,
            $v_3 = $v_2.WorkflowStatus[$v_0.get_status()];
        $v_1.Title = String.format(Mscrm.Automation.AutomationControl.instance.settings
            .getLabelKeyValuePhraseCollection().GetLabel("StopTileTitleFormat"),
            $v_3);
        $v_1.ItemID = $v_0.get_Id();
        this.setActiveItemPropertiesWithoutRaisingEvent($v_1)
    }
};
Mscrm.ProcessAutomation.UpdateActivity = function() {
    Mscrm.ProcessAutomation.UpdateActivity.initializeBase(this, ["wf_update"])
};
Mscrm.ProcessAutomation.UpdateActivity.prototype = {
    initialize: function(properties) {
        Mscrm.Automation.ActivityDefinitionModel.prototype.initialize.call(this, properties);
        this.setActivityTypeId("wf_update");
        this.addNewItem("wf_update")
    },
    initializeFromProcessStep: function() {
        Mscrm.ProcessAutomation.ProcessActivityDefinitionModel.prototype.initializeFromProcessStep.call(this);
        var $v_0 = this.$2_2,
            $v_1 = new Mscrm.ProcessAutomation.ProcessItemModel,
            $v_2 = (new Mscrm.ProcessAutomation.CachedStepDisplayInfoProvider).getDisplayInfo($v_0.get_Id());
        if (!IsNull($v_2)) $v_1.Title = $v_2.DisplayText;
        $v_1.ItemID = $v_0.get_Id();
        this.setActiveItemPropertiesWithoutRaisingEvent($v_1)
    }
};
Mscrm.ProcessAutomation.WaitActivity = function() {
    Mscrm.ProcessAutomation.WaitActivity.initializeBase(this, ["wf_wait"])
};
Mscrm.ProcessAutomation.WaitActivity.prototype = {
    initialize: function(properties) {
        Mscrm.Automation.ActivityDefinitionModel.prototype.initialize.call(this, properties);
        this.setActivityTypeId("wf_wait");
        this.addNewItem("wf_wait")
    },
    initializeFromProcessStep: function() {
        Mscrm.ProcessAutomation.ProcessActivityDefinitionModel.prototype.initializeFromProcessStep.call(this);
        var $v_0 = this.$2_2,
            $v_1 = new Mscrm.ProcessAutomation.ProcessItemModel,
            $v_2 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection();
        $v_1.Title = $v_2.GetLabel("WaitTileTitle");
        $v_1.ItemID = $v_0.get_Id();
        this.setActiveItemPropertiesWithoutRaisingEvent($v_1)
    },
    findDefaultChildBranch: function() {
        for (var $v_0 = this.getChildActivitiesSorted(), $$arr_1 = $v_0, $$len_2 = $$arr_1.length, $$idx_3 = 0;
            $$idx_3 < $$len_2;
            ++$$idx_3) {
            var $v_1 = $$arr_1[$$idx_3];
            if ($v_1.getActivityTypeId() !== "wf_waitbranch") return $v_1
        }
        return null
    },
    get_waitActivityBranches: function() {
        var $v_0 = new Mscrm.ProcessAutomation.WaitActivityBranches, $v_1 = this.getChildActivitiesSorted();
        if ($v_1) {
            for (var $v_2 = [], $$arr_3 = $v_1, $$len_4 = $$arr_3.length, $$idx_5 = 0; $$idx_5 < $$len_4; ++$$idx_5) {
                var $v_3 = $$arr_3[$$idx_5];
                if ($v_3.getActivityTypeId() === "wf_waitbranch") Array.add($v_2, $v_3);
                else $v_0.$N_0 = $v_3
            }
            $v_0.$15_0 = $v_2
        }
        return $v_0
    }
};
Mscrm.ProcessAutomation.WaitBranchActivity = function() {
    Mscrm.ProcessAutomation.WaitBranchActivity.initializeBase(this, ["wf_waitbranch"])
};
Mscrm.ProcessAutomation.WaitBranchActivity.prototype = {
    initialize: function(properties) {
        Mscrm.Automation.ActivityDefinitionModel.prototype.initialize.call(this, properties);
        this.setActivityTypeId("wf_waitbranch");
        this.addNewItem("wf_waitbranch")
    },
    initializeFromProcessStep: function() {
        Mscrm.ProcessAutomation.ProcessActivityDefinitionModel.prototype.initializeFromProcessStep.call(this);
        var $v_0 = this.$2_2,
            $v_1 = new Mscrm.ProcessAutomation.ProcessItemModel,
            $v_2 = (new Mscrm.ProcessAutomation.CachedStepDisplayInfoProvider).getDisplayInfo($v_0.get_Id());
        if ($v_2) {
            $v_1.Title = $v_2.DisplayText;
            $v_1.ItemID = $v_0.get_Id();
            this.setActiveItemPropertiesWithoutRaisingEvent($v_1)
        }
    }
};
Mscrm.ProcessAutomation.WaitTimeoutActivity = function() {
    Mscrm.ProcessAutomation.WaitTimeoutActivity.initializeBase(this, ["wf_waittimeout"])
};
Mscrm.ProcessAutomation.WaitTimeoutActivity.prototype = {
    initialize: function(properties) {
        Mscrm.Automation.ActivityDefinitionModel.prototype.initialize.call(this, properties);
        this.setActivityTypeId("wf_waittimeout");
        this.addNewItem("wf_waittimeout")
    },
    initializeFromProcessStep: function() {
        Mscrm.ProcessAutomation.ProcessActivityDefinitionModel.prototype.initializeFromProcessStep.call(this);
        var $v_0 = this.$2_2, $v_1 = new Mscrm.ProcessAutomation.ProcessItemModel;
        $v_1.Title = String.format("WaitTimeoutStep - {0}", $v_0.get_Description());
        $v_1.ItemID = $v_0.get_Id();
        this.setActiveItemPropertiesWithoutRaisingEvent($v_1)
    }
};
Mscrm.ProcessAutomation.WorkflowRootActivity = function() {
    Mscrm.ProcessAutomation.WorkflowRootActivity.initializeBase(this, ["wf_root"])
};
Mscrm.ProcessAutomation.WorkflowRootActivity.prototype = {
    initialize: function(properties) {
        Mscrm.Automation.ActivityDefinitionModel.prototype.initialize.call(this, properties);
        this.setActivityTypeId("wf_root");
        this.addNewItem("wf_root");
        this.setRow(0);
        this.setCol(0)
    },
    initializeFromProcessStep: function() {
        Mscrm.ProcessAutomation.ProcessActivityDefinitionModel.prototype.initializeFromProcessStep.call(this);
        var $v_0 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_1 = this.$2_2,
            $v_2 = new Mscrm.ProcessAutomation.ProcessItemModel;
        $v_2.Title = $v_0.GetLabel("WorkflowTileTitle");
        $v_2.ItemID = $v_1.get_Id();
        this.setActiveItemPropertiesWithoutRaisingEvent($v_2)
    }
};
Mscrm.ProcessAutomation.WorkflowStageActivity = function() {
    Mscrm.ProcessAutomation.WorkflowStageActivity.initializeBase(this, ["wf_stage"])
};
Mscrm.ProcessAutomation.WorkflowStageActivity.prototype = {
    initialize: function(properties) {
        Mscrm.Automation.ActivityDefinitionModel.prototype.initialize.call(this, properties);
        this.setActivityTypeId("wf_stage");
        this.addNewItem("wf_stage")
    },
    initializeFromProcessStep: function() {
        Mscrm.ProcessAutomation.ProcessActivityDefinitionModel.prototype.initializeFromProcessStep.call(this);
        var $v_0 = this.$2_2, $v_1 = new Mscrm.ProcessAutomation.ProcessItemModel;
        $v_1.Title = String.format("Stage - {0} Start", $v_0.get_Description());
        $v_1.ItemID = $v_0.get_Id();
        this.setActiveItemPropertiesWithoutRaisingEvent($v_1)
    }
};
Mscrm.ProcessAutomation.WorkflowLibraryNodesFactory = function() {
    Mscrm.ProcessAutomation.WorkflowLibraryNodesFactory.initializeBase(this)
};
Mscrm.ProcessAutomation.WorkflowLibraryNodesFactory.prototype = {
    CreateLibraryNodes: function() {
        var $v_0 = [],
            $v_1 = null,
            $v_2 = null,
            $v_3 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection();
        $v_2 = [];
        Array.add($v_2,
            this.getLibraryElementNode($v_3.GetLabel("LibraryCondition"),
                Mscrm.ProcessAutomation.ProcessImageResources.get_conditionTileIcon(),
                "condition"));
        $v_1 = new Mscrm.Automation.LibraryGroupNode;
        $v_1.nodename = $v_3.GetLabel("LibraryGeneral");
        $v_1.subnodes = $v_2;
        Array.add($v_0, $v_1);
        $v_2 = [];
        Array.add($v_2,
            this.getLibraryElementNode($v_3.GetLabel("LibraryCreateRecord"),
                Mscrm.ProcessAutomation.WorkflowImageResources.get_createTileIcon(),
                "wf_create"));
        Array.add($v_2,
            this.getLibraryElementNode("Update",
                Mscrm.ProcessAutomation.WorkflowImageResources.get_updateTileIcon(),
                "wf_update"));
        Array.add($v_2,
            this.getLibraryElementNode("Assign",
                Mscrm.ProcessAutomation.WorkflowImageResources.get_assignTileIcon(),
                "wf_assign"));
        Array.add($v_2,
            this.getLibraryElementNode("Set Stage",
                Mscrm.ProcessAutomation.WorkflowImageResources.get_setStateTileIcon(),
                "wf_setstate"));
        Array.add($v_2,
            this.getLibraryElementNode("Custom Activity",
                Mscrm.ProcessAutomation.WorkflowImageResources.get_customActivityTileIcon(),
                "wf_create"));
        Array.add($v_2,
            this.getLibraryElementNode("Send email",
                Mscrm.ProcessAutomation.WorkflowImageResources.get_sendEmailTileIcon(),
                "wf_create"));
        Array.add($v_2,
            this.getLibraryElementNode("Stop workflow",
                Mscrm.ProcessAutomation.WorkflowImageResources.get_stopWorkflowTileIcon(),
                "wf_create"));
        Array.add($v_2,
            this.getLibraryElementNode("wait",
                Mscrm.ProcessAutomation.WorkflowImageResources.get_waitTileIcon(),
                "wf_create"));
        $v_1 = new Mscrm.Automation.LibraryGroupNode;
        $v_1.nodename = $v_3.GetLabel("LibraryAction");
        $v_1.subnodes = $v_2;
        Array.add($v_0, $v_1);
        return $v_0
    }
};
Mscrm.ProcessAutomation.WorkflowTileInformationFactory = function() {
    Mscrm.ProcessAutomation.WorkflowTileInformationFactory.initializeBase(this)
};
Mscrm.ProcessAutomation.WorkflowTileInformationFactory.prototype = {
    getTileInformationForActivityModel: function(activityModel, specificItemId) {
        var $v_0 = activityModel.getActivityTypeId();
        switch ($v_0) {
        case "wf_assign":
            return new Mscrm.ProcessAutomation.AssignActivityTileInformation(activityModel, specificItemId);
        case "wf_child":
            return new Mscrm.ProcessAutomation.ChildWorkflowActivityTileInformation(activityModel, specificItemId);
        case "wf_create":
            return new Mscrm.ProcessAutomation.CreateActivityTileInformation(activityModel, specificItemId);
        case "wf_customactivity":
            return new Mscrm.ProcessAutomation.CustomActivityTileInformation(activityModel, specificItemId);
        case "wf_sendemail":
            return new Mscrm.ProcessAutomation.SendEmailActivityTileInformation(activityModel, specificItemId);
        case "wf_setstate":
            return new Mscrm.ProcessAutomation.SetStateActivityTileInformation(activityModel, specificItemId);
        case "wf_stopworkflow":
            return new Mscrm.ProcessAutomation.StopWorkflowActivityTileInformation(activityModel, specificItemId);
        case "wf_update":
            return new Mscrm.ProcessAutomation.UpdateActivityTileInformation(activityModel, specificItemId);
        case "wf_wait":
            return new Mscrm.ProcessAutomation.WaitActivityTileInformation(activityModel, specificItemId);
        case "wf_waitbranch":
            return new Mscrm.ProcessAutomation.WaitBranchActivityTileInformation(activityModel, specificItemId);
        case "wf_waittimeout":
            return new Mscrm.ProcessAutomation.WaitTimeoutActivityTileInformation(activityModel, specificItemId);
        case "wf_root":
            return new Mscrm.ProcessAutomation.WorkflowRootActivityTileInformation(activityModel, specificItemId);
        case "wf_stage":
            return new Mscrm.ProcessAutomation.WorkflowStageActivityTileInformation(activityModel, specificItemId);
        default:
            return Mscrm.ProcessAutomation.ProcessTileInformationFactory.prototype.getTileInformationForActivityModel
                .call(this, activityModel, specificItemId)
        }
    }
};
Mscrm.ProcessAutomation
    .WorkflowRuntimeTileInformationFactory = function() {
        Mscrm.ProcessAutomation.WorkflowRuntimeTileInformationFactory.initializeBase(this)
    };
Mscrm.ProcessAutomation.AssignActivityTileInformation = function(model, itemId) {
    Mscrm.ProcessAutomation.AssignActivityTileInformation.initializeBase(this, [model, itemId])
};
Mscrm.ProcessAutomation.AssignActivityTileInformation.prototype = {
    getProperties: function() {
        var $v_0 = new Mscrm.Automation
            .TileProperties('\r\n\t\t\t\t<span class="tileTitle" title="<%= Title %>">\r\n\t\t\t\t\t<span class="tileTableCell">\r\n\t\t\t\t\t\t<span class="tileInner ellipsis">\r\n\t\t\t\t\t\t\t<%= Title %>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</span>', Mscrm.Automation.CommonTileInformation.defaultTileImageTemplate, Mscrm.ProcessAutomation.WorkflowImageResources.get_assignTileIcon(), "assignTile", "Define Assign", Mscrm.Automation.CommonTileInformation.defaultEmptyTitleTemplate, Mscrm.Automation.CommonTileInformation.defaultEmptyTileImageTemplate);
        return $v_0
    }
};
Mscrm.ProcessAutomation
    .ChildWorkflowActivityTileInformation = function(model, itemId) {
        Mscrm.ProcessAutomation.ChildWorkflowActivityTileInformation.initializeBase(this, [model, itemId])
    };
Mscrm.ProcessAutomation.ChildWorkflowActivityTileInformation.prototype = {
    getProperties: function() {
        var $v_0 = new Mscrm.Automation
            .TileProperties('\r\n\t\t\t\t<span class="tileTitle" title="<%= Title %>">\r\n\t\t\t\t\t<span class="tileTableCell">\r\n\t\t\t\t\t\t<span class="tileInner ellipsis">\r\n\t\t\t\t\t\t\t<%= Title %>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</span><ul class="subItems"><li class="usersWaitingItem"><span class =\'subItemImage\' title=\'Number of people waiting\' ></span></li></ul>', Mscrm.Automation.CommonTileInformation.defaultTileImageTemplate, window.CDNURL + "/_imgs/processdesigner/condition_32.png", "childTile", "Define ChildWorkflow", Mscrm.Automation.CommonTileInformation.defaultEmptyTitleTemplate, Mscrm.Automation.CommonTileInformation.defaultEmptyTileImageTemplate);
        return $v_0
    }
};
Mscrm.ProcessAutomation.CreateActivityTileInformation = function(model, itemId) {
    Mscrm.ProcessAutomation.CreateActivityTileInformation.initializeBase(this, [model, itemId])
};
Mscrm.ProcessAutomation.CreateActivityTileInformation.prototype = {
    getProperties: function() {
        var $v_0 = new Mscrm.Automation
            .TileProperties('\r\n\t\t\t\t<span class="tileTitle" title="<%= Title %>">\r\n\t\t\t\t\t<span class="tileTableCell">\r\n\t\t\t\t\t\t<span class="tileInner ellipsis">\r\n\t\t\t\t\t\t\t<%= Title %>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</span>', Mscrm.Automation.CommonTileInformation.defaultTileImageTemplate, Mscrm.ProcessAutomation.WorkflowImageResources.get_createTileIcon(), "createTile", "Define Create", Mscrm.Automation.CommonTileInformation.defaultEmptyTitleTemplate, Mscrm.Automation.CommonTileInformation.defaultEmptyTileImageTemplate);
        return $v_0
    }
};
Mscrm.ProcessAutomation.CustomActivityTileInformation = function(model, itemId) {
    Mscrm.ProcessAutomation.CustomActivityTileInformation.initializeBase(this, [model, itemId])
};
Mscrm.ProcessAutomation.CustomActivityTileInformation.prototype = {
    getProperties: function() {
        var $v_0 = new Mscrm.Automation
            .TileProperties('\r\n\t\t\t\t<span class="tileTitle" title="<%= Title %>">\r\n\t\t\t\t\t<span class="tileTableCell">\r\n\t\t\t\t\t\t<span class="tileInner ellipsis">\r\n\t\t\t\t\t\t\t<%= Title %>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</span><ul class="subItems"><li class="usersWaitingItem"><span class =\'subItemImage\' title=\'Number of people waiting\' ></span></li></ul>', Mscrm.Automation.CommonTileInformation.defaultTileImageTemplate, Mscrm.ProcessAutomation.WorkflowImageResources.get_customActivityTileIcon(), "customActivityTile", "Define Custom", Mscrm.Automation.CommonTileInformation.defaultEmptyTitleTemplate, Mscrm.Automation.CommonTileInformation.defaultEmptyTileImageTemplate);
        return $v_0
    }
};
Mscrm.ProcessAutomation.SendEmailActivityTileInformation = function(model, itemId) {
    Mscrm.ProcessAutomation.SendEmailActivityTileInformation.initializeBase(this, [model, itemId])
};
Mscrm.ProcessAutomation.SendEmailActivityTileInformation.prototype = {
    getProperties: function() {
        var $v_0 = new Mscrm.Automation
            .TileProperties('\r\n\t\t\t\t<span class="tileTitle" title="<%= Title %>">\r\n\t\t\t\t\t<span class="tileTableCell">\r\n\t\t\t\t\t\t<span class="tileInner ellipsis">\r\n\t\t\t\t\t\t\t<%= Title %>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</span><ul class="subItems"><li class="usersWaitingItem"><span class =\'subItemImage\' title=\'Number of people waiting\' ></span></li></ul>', Mscrm.Automation.CommonTileInformation.defaultTileImageTemplate, Mscrm.ProcessAutomation.WorkflowImageResources.get_sendEmailTileIcon(), "sendEmailTile", "Define SendEmail", Mscrm.Automation.CommonTileInformation.defaultEmptyTitleTemplate, Mscrm.Automation.CommonTileInformation.defaultEmptyTileImageTemplate);
        return $v_0
    }
};
Mscrm.ProcessAutomation.SetStateActivityTileInformation = function(model, itemId) {
    Mscrm.ProcessAutomation.SetStateActivityTileInformation.initializeBase(this, [model, itemId])
};
Mscrm.ProcessAutomation.SetStateActivityTileInformation.prototype = {
    getProperties: function() {
        var $v_0 = new Mscrm.Automation
            .TileProperties('\r\n\t\t\t\t<span class="tileTitle" title="<%= Title %>">\r\n\t\t\t\t\t<span class="tileTableCell">\r\n\t\t\t\t\t\t<span class="tileInner ellipsis">\r\n\t\t\t\t\t\t\t<%= Title %>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</span><ul class="subItems"><li class="usersWaitingItem"><span class =\'subItemImage\' title=\'Number of people waiting\' ></span></li></ul>', Mscrm.Automation.CommonTileInformation.defaultTileImageTemplate, Mscrm.ProcessAutomation.WorkflowImageResources.get_setStateTileIcon(), "setStateTile", "Define SetState", Mscrm.Automation.CommonTileInformation.defaultEmptyTitleTemplate, Mscrm.Automation.CommonTileInformation.defaultEmptyTileImageTemplate);
        return $v_0
    }
};
Mscrm.ProcessAutomation
    .StopWorkflowActivityTileInformation = function(model, itemId) {
        Mscrm.ProcessAutomation.StopWorkflowActivityTileInformation.initializeBase(this, [model, itemId])
    };
Mscrm.ProcessAutomation.StopWorkflowActivityTileInformation.prototype = {
    getProperties: function() {
        var $v_0 = new Mscrm.Automation
            .TileProperties('\r\n\t\t\t\t<span class="tileTitle" title="<%= Title %>">\r\n\t\t\t\t\t<span class="tileTableCell">\r\n\t\t\t\t\t\t<span class="tileInner ellipsis">\r\n\t\t\t\t\t\t\t<%= Title %>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</span>', Mscrm.Automation.CommonTileInformation.defaultTileImageTemplate, Mscrm.ProcessAutomation.WorkflowImageResources.get_stopWorkflowTileIcon(), "stopWorkflowTile", "Define StopWorkflow", Mscrm.Automation.CommonTileInformation.defaultEmptyTitleTemplate, Mscrm.Automation.CommonTileInformation.defaultEmptyTileImageTemplate);
        return $v_0
    }
};
Mscrm.ProcessAutomation.UpdateActivityTileInformation = function(model, itemId) {
    Mscrm.ProcessAutomation.UpdateActivityTileInformation.initializeBase(this, [model, itemId])
};
Mscrm.ProcessAutomation.UpdateActivityTileInformation.prototype = {
    getProperties: function() {
        var $v_0 = new Mscrm.Automation
            .TileProperties('\r\n\t\t\t\t<span class="tileTitle" title="<%= Title %>">\r\n\t\t\t\t\t<span class="tileTableCell">\r\n\t\t\t\t\t\t<span class="tileInner ellipsis">\r\n\t\t\t\t\t\t\t<%= Title %>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</span>', Mscrm.Automation.CommonTileInformation.defaultTileImageTemplate, Mscrm.ProcessAutomation.WorkflowImageResources.get_updateTileIcon(), "updateTile", "Define Update", Mscrm.Automation.CommonTileInformation.defaultEmptyTitleTemplate, Mscrm.Automation.CommonTileInformation.defaultEmptyTileImageTemplate);
        return $v_0
    }
};
Mscrm.ProcessAutomation.WaitActivityTileInformation = function(model, itemId) {
    Mscrm.ProcessAutomation.WaitActivityTileInformation.initializeBase(this, [model, itemId])
};
Mscrm.ProcessAutomation.WaitActivityTileInformation.prototype = {
    getProperties: function() {
        var $v_0 = new Mscrm.Automation
            .TileProperties('\r\n\t\t\t\t<span class="tileTitle" title="<%= Title %>">\r\n\t\t\t\t\t<span class="tileTableCell">\r\n\t\t\t\t\t\t<span class="tileInner ellipsis">\r\n\t\t\t\t\t\t\t<%= Title %>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</span>', Mscrm.Automation.CommonTileInformation.defaultTileImageTemplate, Mscrm.ProcessAutomation.WorkflowImageResources.get_waitTileIcon(), "waitTile", "Define Wait", Mscrm.Automation.CommonTileInformation.defaultEmptyTitleTemplate, Mscrm.Automation.CommonTileInformation.defaultEmptyTileImageTemplate);
        return $v_0
    }
};
Mscrm.ProcessAutomation
    .WaitBranchActivityTileInformation = function(model, itemId) {
        Mscrm.ProcessAutomation.WaitBranchActivityTileInformation.initializeBase(this, [model, itemId])
    };
Mscrm.ProcessAutomation.WaitBranchActivityTileInformation.prototype = {
    getProperties: function() {
        var $v_0 = new Mscrm.Automation
            .TileProperties('\r\n\t\t\t\t<span class="tileTitle" title="<%= Title %>">\r\n\t\t\t\t\t<span class="tileTableCell">\r\n\t\t\t\t\t\t<span class="tileInner ellipsis">\r\n\t\t\t\t\t\t\t<%= Title %>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</span>', Mscrm.Automation.CommonTileInformation.defaultTileImageTemplate, window.CDNURL + "/_imgs/processdesigner/condition_32.png", "waitBranchTile", "Define WaitBranch", Mscrm.Automation.CommonTileInformation.defaultEmptyTitleTemplate, Mscrm.Automation.CommonTileInformation.defaultEmptyTileImageTemplate);
        return $v_0
    }
};
Mscrm.ProcessAutomation
    .WaitTimeoutActivityTileInformation = function(model, itemId) {
        Mscrm.ProcessAutomation.WaitTimeoutActivityTileInformation.initializeBase(this, [model, itemId])
    };
Mscrm.ProcessAutomation.WaitTimeoutActivityTileInformation.prototype = {
    getProperties: function() {
        var $v_0 = new Mscrm.Automation
            .TileProperties('\r\n\t\t\t\t<span class="tileTitle" title="<%= Title %>">\r\n\t\t\t\t\t<span class="tileTableCell">\r\n\t\t\t\t\t\t<span class="tileInner ellipsis">\r\n\t\t\t\t\t\t\t<%= Title %>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</span><ul class="subItems"><li class="usersWaitingItem"><span class =\'subItemImage\' title=\'Number of people waiting\' ></span></li></ul>', Mscrm.Automation.CommonTileInformation.defaultTileImageTemplate, window.CDNURL + "/_imgs/processdesigner/condition_32.png", "waitTimeoutTile", "Define WaitTimeout", Mscrm.Automation.CommonTileInformation.defaultEmptyTitleTemplate, Mscrm.Automation.CommonTileInformation.defaultEmptyTileImageTemplate);
        return $v_0
    }
};
Mscrm.ProcessAutomation
    .WorkflowRootActivityTileInformation = function(model, itemId) {
        Mscrm.ProcessAutomation.WorkflowRootActivityTileInformation.initializeBase(this, [model, itemId])
    };
Mscrm.ProcessAutomation.WorkflowRootActivityTileInformation.prototype = {
    getProperties: function() {
        var $v_0 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_1 = new Mscrm.Automation
                .TileProperties('\r\n\t\t\t\t<span class="tileTitle" title="<%= Title %>">\r\n\t\t\t\t\t<span class="tileTableCell">\r\n\t\t\t\t\t\t<span class="tileInner ellipsis">\r\n\t\t\t\t\t\t\t<%= Title %>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</span>', Mscrm.Automation.CommonTileInformation.defaultTileImageTemplate, Mscrm.ProcessAutomation.WorkflowImageResources.get_workflowRootTileIcon(), "wf_rootTile", $v_0.GetLabel("WorkflowTileTitle"), Mscrm.Automation.CommonTileInformation.defaultEmptyTitleTemplate, Mscrm.Automation.CommonTileInformation.defaultEmptyTileImageTemplate);
        return $v_1
    }
};
Mscrm.ProcessAutomation
    .WorkflowStageActivityTileInformation = function(model, itemId) {
        Mscrm.ProcessAutomation.WorkflowStageActivityTileInformation.initializeBase(this, [model, itemId])
    };
Mscrm.ProcessAutomation.WorkflowStageActivityTileInformation.prototype = {
    getProperties: function() {
        var $v_0 = new Mscrm.Automation
            .TileProperties('\r\n\t\t\t\t<span class="tileTitle" title="<%= Title %>">\r\n\t\t\t\t\t<span class="tileTableCell">\r\n\t\t\t\t\t\t<span class="tileInner ellipsis">\r\n\t\t\t\t\t\t\t<%= Title %>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</span>', Mscrm.Automation.CommonTileInformation.defaultTileImageTemplate, window.CDNURL + "/_imgs/processdesigner/stage_32.png", "workflowStageTile", "Define Stage", Mscrm.Automation.CommonTileInformation.defaultEmptyTitleTemplate, Mscrm.Automation.CommonTileInformation.defaultEmptyTileImageTemplate);
        return $v_0
    }
};
Mscrm.ProcessAutomation.WorkflowDesignerViewModel = function() {
    Mscrm.ProcessAutomation.WorkflowDesignerViewModel.initializeBase(this)
};
Mscrm.ProcessAutomation.WorkflowDesignerViewModel.prototype = {
    get_activityDefinitionCollection: function() {
        if (IsNull(this.$H_2)) {
            var $v_0 = new Mscrm.ProcessAutomation.WorkflowToUIActivityCollectionVisitor;
            this.$H_2 = $v_0.convert(this.$F_1)
        }
        return this.$H_2
    },
    $H_2: null
};
Mscrm.ProcessAutomation
    .AssignBodyPropertyPanelViewComponent = function(model) {
        Mscrm.ProcessAutomation.AssignBodyPropertyPanelViewComponent.initializeBase(this, [model])
    };
Mscrm.ProcessAutomation.AssignBodyPropertyPanelViewComponent.prototype = {
    get_template: function() {
        var $v_0 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_1 = String.format(this.$1_1,
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("AssignPropertyAssignTo")));
        return _.template($v_1)
    },
    retrieveAttributes: function() {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Object),
            $v_1 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_2 = {},
            $v_3 = this.$7_0.$2_2,
            $v_4 = $v_1.GetLabel("EmptyPropertyPlaceholder");
        if (IsNull($v_3.get_assignTo())) {
            $v_2["AssignTo"] = this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_4);
            $v_2["AssignToAttr"] = this.get_crmEncodeDecodeProxy().crmHtmlAttributeEncode($v_4)
        } else {
            var $v_5 = new Mscrm.ProcessAutomation.HtmlBuilderContext;
            $v_5.$L_0 = new Mscrm.ProcessAutomation.ProcessObjectModelMetadataProvider(this.$B_0);
            $v_5.$O_0 = this.$B_0[$v_3.get_entity().get_entityName()];
            var $v_6 = new Mscrm.ProcessAutomation.LookupExpressionBuilder($v_5), $v_7 = new Sys.StringBuilder;
            $v_6.build($v_7, $v_3.get_assignTo());
            var $v_8 = $v_7.toString();
            if ($v_8) {
                $v_2["AssignTo"] = $v_8;
                $v_2["AssignToAttr"] = this.get_crmEncodeDecodeProxy()
                    .crmHtmlAttributeEncode($v_3.get_assignTo().get_label())
            }
        }
        $v_0.resolve($v_2);
        return $v_0.promise()
    },
    $1_1:
        "\r\n\t<div class='wf_prop_field_group'>\r\n\t\t<div id='assign_to_label' class='wf_prop_field' title='{0}'>{0}</div>\r\n\t\t<div aria-labelledby='assign_to_label' class='wf_prop_value' tabindex='0' title='<%= AssignToAttr %>'><%= AssignTo %></div>\r\n\t</div>\r\n"
};
Mscrm.ProcessAutomation
    .ChangeStatusBodyPropertyPanelViewComponent = function(model) {
        Mscrm.ProcessAutomation.ChangeStatusBodyPropertyPanelViewComponent.initializeBase(this, [model])
    };
Mscrm.ProcessAutomation.ChangeStatusBodyPropertyPanelViewComponent.prototype = {
    get_template: function() {
        var $v_0 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_1 = String.format(this.$1_1,
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("ChangeStatusPropertyStatus")));
        return _.template($v_1)
    },
    retrieveAttributes: function() {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Object),
            $v_1 = {},
            $v_2 = this.$4_0,
            $v_3 = this.$B_0[$v_2.get_entity().get_entityName()],
            $v_4 = $v_2.get_status().get_value() - 1,
            $v_5 = $v_3.getAttributeByName(Mscrm.ProcessAutomation.ChangeStatusBodyPropertyPanelViewComponent.$2X);
        if ($v_5) {
            var $v_6 = $v_5.Options[$v_4].Label;
            $v_1["EntityStatus"] = this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_6);
            $v_1["EntityStatusAttr"] = this.get_crmEncodeDecodeProxy().crmHtmlAttributeEncode($v_6)
        }
        $v_0.resolve($v_1);
        return $v_0.promise()
    },
    $1_1:
        "\r\n\t<div class='wf_prop_field_group'>\r\n\t\t<div id='entity_status_label' class='wf_prop_field'>{0}</div>\r\n\t\t<div aria-describedby='entity_status_label' class='wf_prop_value' tabindex='0' title='<%= EntityStatusAttr %>'><%= EntityStatus %></div>\r\n\t</div>\r\n"
};
Mscrm.ProcessAutomation
    .CreateBodyPropertyPanelViewComponent = function(model) {
        Mscrm.ProcessAutomation.CreateBodyPropertyPanelViewComponent.initializeBase(this, [model])
    };
Mscrm.ProcessAutomation.CreateBodyPropertyPanelViewComponent.prototype = {
    get_template: function() {
        var $v_0 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_1 = String.format(this.$1_1,
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("CreatePropertyFieldValues")));
        return _.template($v_1)
    },
    retrieveAttributes: function() {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Object),
            $v_1 = {},
            $v_2 = this.$4_0,
            $v_3 = new Mscrm.ProcessAutomation.HtmlBuilderContext;
        $v_3.$L_0 = new Mscrm.ProcessAutomation.ProcessObjectModelMetadataProvider(this.$B_0);
        $v_3.$O_0 = this.$B_0[$v_2.get_entityName()];
        for (var $v_4 = [], $v_5 = new Mscrm.ProcessAutomation.PropertySpecificationHtmlBuilder($v_3), $v_6 = 0;
            $v_6 < $v_2.get_entity().get_properties().get_count();
            $v_6++) {
            var $v_7 = $v_2.get_entity().get_properties().get_item($v_6),
                $v_8 = this.buildPropertyAttributes($v_7, $v_3, $v_5);
            if (!$v_8) continue;
            Array.add($v_4, $v_8)
        }
        $v_1["EntityProperties"] = $v_4;
        $v_0.resolve($v_1);
        return $v_0.promise()
    },
    $1_1:
        "\r\n\t<div class='wf_prop_header_line' tabindex='0'>{0}</div>\r\n\t<% _.each(EntityProperties, function(property, index) {{ %>\r\n\t<div class='wf_prop_field_group'>\r\n\t\t<div id='<%= 'field' + index %>' class='wf_prop_field'><%= property.Name %></div>\r\n\t\t<div aria-labelledby='<%= 'field' + index %>' class='wf_prop_value' tabindex='0' title='<%= property.ValueAttr %>'><%= property.Value %></div>\r\n\t</div>\r\n\t<% }}); %>\r\n"
};
Mscrm.ProcessAutomation
    .CustomActivityBodyPropertyPanelViewComponent = function(model) {
        Mscrm.ProcessAutomation.CustomActivityBodyPropertyPanelViewComponent.initializeBase(this, [model])
    };
Mscrm.ProcessAutomation.CustomActivityBodyPropertyPanelViewComponent.prototype = {
    get_template: function() {
        var $v_0 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_1 = String.format(this.$1_1,
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("CustomActivityPropertyActivity")));
        return _.template($v_1)
    },
    retrieveAttributes: function() {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Object),
            $v_1 = this.$7_0,
            $v_2 = $v_1.$2_2,
            $v_3 = {};
        $v_3["ActivityName"] = this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_2.get_activityInfo().get_name());
        $v_3["ActivityNameAttr"] = this.get_crmEncodeDecodeProxy()
            .crmHtmlAttributeEncode($v_2.get_activityInfo().get_name());
        $v_0.resolve($v_3);
        return $v_0.promise()
    },
    $1_1:
        "\r\n\t<div class='wf_prop_field_group'>\r\n\t\t<div id='activity_name_label' class='wf_prop_field'>{0}</div>\r\n\t\t<div aria-labelledby='activity_name_label' class='wf_prop_value' tabindex='0' title='<% ActivityNameAttr %>'><%= ActivityName %></div>\r\n\t</div>\r\n"
};
Mscrm.ProcessAutomation
    .SendEmailBodyPropertyPanelViewComponent = function(model) {
        Mscrm.ProcessAutomation.SendEmailBodyPropertyPanelViewComponent.initializeBase(this, [model])
    };
Mscrm.ProcessAutomation.SendEmailBodyPropertyPanelViewComponent.prototype = {
    retrieveAttributes: function() {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Object),
            $v_1 = {},
            $v_2 = this.$4_0,
            $v_3 = new Mscrm.ProcessAutomation.HtmlBuilderContext;
        $v_3.$L_0 = new Mscrm.ProcessAutomation.ProcessObjectModelMetadataProvider(this.$B_0);
        $v_3.$O_0 = this.$B_0[$v_2.get_entity().get_entityName()];
        for (var $v_4 = [], $v_5 = new Mscrm.ProcessAutomation.PropertySpecificationHtmlBuilder($v_3), $v_6 = 0;
            $v_6 < $v_2.get_entity().get_properties().get_count();
            $v_6++) {
            var $v_7 = $v_2.get_entity().get_properties().get_item($v_6);
            if (!Array.contains(Mscrm.ProcessAutomation.SendEmailBodyPropertyPanelViewComponent
                .$2I,
                $v_7.get_name())) continue;
            var $v_8 = this.buildPropertyAttributes($v_7, $v_3, $v_5);
            if (!$v_8) continue;
            Array.add($v_4, $v_8)
        }
        $v_1["EntityProperties"] = $v_4;
        $v_0.resolve($v_1);
        return $v_0.promise()
    }
};
Mscrm.ProcessAutomation
    .SendEmailWithoutTemplateBodyPropertyPanelViewComponent =
    function(model) {
        Mscrm.ProcessAutomation.SendEmailWithoutTemplateBodyPropertyPanelViewComponent.initializeBase(this, [model])
    };
Mscrm.ProcessAutomation.SendEmailWithoutTemplateBodyPropertyPanelViewComponent.prototype = {
    get_template: function() {
        var $v_0 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_1 = String.format(this.$1_2,
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("SendEmailPropertyBody")));
        return _.template($v_1)
    },
    retrieveAttributes: function() {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Object), $$t_B = this;
        Mscrm.ProcessAutomation.SendEmailBodyPropertyPanelViewComponent.prototype.retrieveAttributes.call(this)
            .done(function($p1_0) {
                var $v_1 = $p1_0, $v_2 = $$t_B.$4_0, $v_3 = new Mscrm.ProcessAutomation.HtmlBuilderContext;
                $v_3.$L_0 = new Mscrm.ProcessAutomation.ProcessObjectModelMetadataProvider($$t_B.$B_0);
                $v_3.$O_0 = $$t_B.$B_0[$v_2.get_entity().get_entityName()];
                for (var $v_4 = $v_1["EntityProperties"],
                    $v_5 = new Mscrm.ProcessAutomation.PropertySpecificationHtmlBuilder($v_3),
                    $v_6 = 0;
                    $v_6 < $v_2.get_entity().get_properties().get_count();
                    $v_6++) {
                    var $v_7 = $v_2.get_entity().get_properties().get_item($v_6);
                    if ($v_7.get_name() === "description") {
                        $v_3.$13_0 = false;
                        var $v_8 = $$t_B.buildPropertyAttributes($v_7, $v_3, $v_5);
                        if (!$v_8) continue;
                        $v_1["Body"] = $v_8["Value"];
                        $v_1["BodyAttr"] = $v_8["ValueAttr"];
                        $v_3.$13_0 = true
                    } else if ($v_7.get_name() === "subject") {
                        var $v_9 = $$t_B.buildPropertyAttributes($v_7, $v_3, $v_5);
                        if (!$v_9) continue;
                        Array.add($v_4, $v_9)
                    }
                }
                $v_1["EntityProperties"] = $v_4;
                $v_0.resolve($v_1)
            });
        return $v_0.promise()
    },
    $1_2:
        "\r\n\t<% _.each(EntityProperties, function(property, index) {{ %>\r\n\t\t<div class='wf_prop_field_group '>\r\n\t\t\t<div id='<%= 'field' + index %>' class='wf_prop_field'><%= property.Name %></div>\r\n\t\t\t<div aria-labelledby='<%= 'field' + index %>' class='wf_prop_value' tabindex='0' title='<%= property.ValueAttr %>'><%= property.Value %></div>\r\n\t\t</div>\r\n\t<% }}); %>\r\n\t\r\n\t<div id='body_label' class='wf_prop_field'>{0}</div>\r\n\t<div aria-labelledby='body_label' class='description_box' tabindex='0' title='<%= BodyAttr %>'>\r\n\t\t<%= Body %>\r\n\t</div>\r\n"
};
Mscrm.ProcessAutomation
    .SendEmailWithTemplateBodyPropertyPanelViewComponent = function(model) {
        Mscrm.ProcessAutomation.SendEmailWithTemplateBodyPropertyPanelViewComponent.initializeBase(this, [model])
    };
Mscrm.ProcessAutomation.SendEmailWithTemplateBodyPropertyPanelViewComponent.prototype = {
    $2L_2: "sendemail_template",
    $2K_2: "sendemail_template_link",
    $22_2: true,
    get_template: function() {
        var $v_0 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_1 = String.format(this.$1_2,
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("SendEmailPropertyTemplate")));
        return _.template($v_1)
    },
    retrieveAttributes: function() {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Object), $$t_4 = this;
        Mscrm.ProcessAutomation.SendEmailBodyPropertyPanelViewComponent.prototype.retrieveAttributes.call(this)
            .done(function($p1_0) {
                $$t_4.$2n_2().done(function($p2_0) {
                    var $v_1 = $p1_0;
                    $v_1["TemplateName"] = $$t_4.get_crmEncodeDecodeProxy().crmHtmlEncode($p2_0);
                    $v_1["TemplateNameAttr"] = $$t_4.get_crmEncodeDecodeProxy().crmHtmlAttributeEncode($p2_0);
                    $v_0.resolve($v_1)
                })
            });
        return $v_0.promise()
    },
    $2n_2: function() {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(String, Object),
            $v_1 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_2 = $v_1.GetLabel("EmptyPropertyPlaceholder"),
            $v_3 = this.$7_0.$2_2;
        if (isNullOrEmptyString($v_3.get_emailTemplateId())) {
            $v_0.resolve($v_2);
            return $v_0.promise()
        }
        var $v_4 = $v_3.get_emailTemplateId(), $v_5 = "title", $v_6 = [$v_5], $$t_9 = this, $$t_A = this;
        Xrm.Internal.messages.retrieve("template", $v_4, $v_6).then(function($p1_0) {
                $v_2 = $p1_0.entity.getFieldObjectData($v_5);
                $v_0.resolve($v_2)
            },
            function($p1_0) {
                $$t_A.$22_2 = false;
                $v_0.resolve($v_2)
            });
        return $v_0.promise()
    },
    retrieveCompleted: function() {
        var $v_0 = this.$5_0, $v_1 = this.$4_0;
        if (isNullOrEmptyString($v_1.get_emailTemplateId()) || IsNull($v_0) || !this.$22_2) return;
        var $v_2 = $P_CRM("#" + this.$2L_2, $v_0),
            $v_3 = $P_CRM('<a id="sendemail_template_link" class="link" href="#"></a>'),
            $v_4 = $v_2.text();
        $v_3.text($v_4);
        $v_2.text("");
        $v_2.append($v_3);
        var $$t_6 = this;
        $v_3.click(function($p1_0) { $$t_6.$2x_2() })
    },
    $2x_2: function() {
        var $v_0 = this.$7_0.$2_2, $v_1 = $v_0.get_emailTemplateId();
        if (isNullOrEmptyString($v_0.get_emailTemplateId())) return;
        var $v_2 = Mscrm.CrmUri.create("/tools/emailtemplateeditor/emailtemplateeditor.aspx");
        $v_2.get_query()["id"] = this.get_crmEncodeDecodeProxy().crmUrlEncode($v_1);
        openStdWin($v_2, $v_1, 580, 660, null)
    },
    dispose: function() {
        Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent.prototype.dispose.call(this);
        if (!IsNull(this.$5_0)) {
            this.$5_0.find("#" + this.$2K_2).unbind("click");
            this.$5_0 = null
        }
    },
    $1_2:
        "\r\n\t<div class='wf_prop_field_group'>\r\n\t\t<div id='sendemail_template_label' class='wf_prop_field'>{0}</div>\r\n\t\t<div aria-labelledby='sendemail_template_label' class='wf_prop_value' tabindex='0' id='sendemail_template' title='<%= TemplateNameAttr %>'><%= TemplateName %></div>\r\n\t</div>\r\n\t\r\n\t<% _.each(EntityProperties, function(property, index) {{ %>\r\n\t\t<div class='wf_prop_field_group '>\r\n\t\t\t<div id='<%= 'field' + index %>' class='wf_prop_field'><%= property.Name %></div>\r\n\t\t\t<div aria-labelledby='<%= 'field' + index %>' class='wf_prop_value' tabindex='0' title='<%= property.ValueAttr %>'><%= property.Value %></div>\r\n\t\t</div>\r\n\t<% }}); %>\r\n"
};
Mscrm.ProcessAutomation.StartChildWorkflowBodyPropertyPanelViewComponent = function(model) {
    this.$$d_$2U_1 = Function.createDelegate(this, this.$2U_1);
    Mscrm.ProcessAutomation.StartChildWorkflowBodyPropertyPanelViewComponent.initializeBase(this, [model])
};
Mscrm.ProcessAutomation.StartChildWorkflowBodyPropertyPanelViewComponent.prototype = {
    get_template: function() {
        var $v_0 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_1 = String.format(this.$1_1,
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("ChildWorkflowPropertyWorkflowLabel")));
        return _.template($v_1)
    },
    retrieveAttributes: function() {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Object), $$t_3 = this;
        this.$2P_1().done(function($p1_0) {
            var $v_1 = {};
            $v_1["ChildWorkflow"] = $$t_3.get_crmEncodeDecodeProxy().crmHtmlEncode($p1_0);
            $v_1["ChildWorkflowAttr"] = $$t_3.get_crmEncodeDecodeProxy().crmHtmlAttributeEncode($p1_0);
            $v_0.resolve($v_1)
        });
        return $v_0.promise()
    },
    $2P_1: function() {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(String, Object),
            $v_1 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_2 = $v_1.GetLabel("EmptyPropertyPlaceholder"),
            $v_3 = this.$4_0,
            $v_4 = $v_3.get_childWorkflow();
        if (IsNull($v_4)) {
            $v_0.resolve($v_2);
            return $v_0.promise()
        }
        if (!isNullOrEmptyString($v_4.get_label())) {
            $v_2 = $v_4.get_label();
            $v_0.resolve($v_2);
            return $v_0.promise()
        }
        if (!IsNull($v_4.get_value()) && !IsNull($v_4.get_value().get_value())) {
            var $v_5 = $v_4.get_value().get_value()
                    .toString(),
                $v_6 = "name",
                $v_7 = [$v_6],
                $$t_A = this,
                $$t_B = this;
            Xrm.Internal.messages.retrieve($v_4.get_entityType(), $v_5, $v_7).then(function($p1_0) {
                    $v_2 = $p1_0.entity.getFieldObjectData($v_6);
                    $v_0.resolve($v_2)
                },
                function($p1_0) { $v_0.resolve($v_2) })
        } else $v_0.resolve($v_2);
        return $v_0.promise()
    },
    retrieveCompleted: function() {
        Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent.prototype.retrieveCompleted.call(this);
        var $v_0 = this.$4_0;
        if (IsNull($v_0)) return;
        var $v_1 = $v_0.get_childWorkflow();
        if (IsNull($v_1) || IsNull($v_1.get_value())) return;
        if (IsNull($v_1.get_value().get_value())) return;
        var $v_2 = this.$5_0.find("#processdesigner_childworkflow"),
            $v_3 = $P_CRM('<a id="startchildworkflowlink" class="link" href="#"></a>');
        $v_3.text($v_2.text());
        $v_2.text("");
        $v_2.append($v_3);
        $v_3.click(this.$$d_$2U_1)
    },
    $2U_1: function($p0) {
        var $v_0 = this.$7_0.$2_2, $v_1 = $v_0.get_childWorkflow(), $v_2 = $v_1.get_value().get_value().toString();
        if (!IsNull($v_1)) {
            var $v_3 = Mscrm.CrmUri.create("/sfa/workflow/edit.aspx");
            $v_3.get_query()["id"] = this.get_crmEncodeDecodeProxy().crmUrlEncode($v_2);
            $v_3.get_query()["type"] = $v_1.get_workflow().get_workflowCategory();
            openStdWin($v_3, $v_2, 580, 660, null)
        }
    },
    dispose: function() {
        Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent.prototype.dispose.call(this);
        if (!IsNull(this.$5_0)) {
            this.$5_0.find("#startchildworkflowlink").unbind("click");
            this.$5_0 = null
        }
    },
    $1_1:
        "\r\n\t<div class='wf_prop_field_group'>\r\n\t\t<div id='childworkflow_label' class='wf_prop_field'>{0}</div>\r\n\t\t<div aria-labelledby='childworkflow_label' class='wf_prop_value' tabindex='0' id='processdesigner_childworkflow' title='<%= ChildWorkflowAttr %>'><%= ChildWorkflow %></div>\r\n\t</div>\r\n"
};
Mscrm.ProcessAutomation
    .StopWorkflowBodyPropertyPanelViewComponent = function(model) {
        Mscrm.ProcessAutomation.StopWorkflowBodyPropertyPanelViewComponent.initializeBase(this, [model])
    };
Mscrm.ProcessAutomation.StopWorkflowBodyPropertyPanelViewComponent.prototype = {
    get_template: function() {
        var $v_0 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_1 = String.format(this.$1_1,
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("StopWorkflowPropertyStatusMessage")));
        return _.template($v_1)
    },
    retrieveAttributes: function() {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Object),
            $v_1 = {},
            $v_2 = this.$4_0,
            $v_3 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_4 = $v_3.GetLabel("EmptyPropertyPlaceholder"),
            $v_5 = this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_4),
            $v_6 = $v_2.get_statusMessage();
        if (!IsNull($v_6)) {
            var $v_7 = new Mscrm.ProcessAutomation.HtmlBuilderContext,
                $v_8 = this.get_expressionHtmlBuilderFactory().getExpressionBuilder($v_7, $v_6),
                $v_9 = new Sys.StringBuilder;
            $v_8.build($v_9, $v_6);
            if (!isNullOrEmptyString($v_9.toString())) $v_5 = $v_9.toString()
        }
        $v_1["StatusMessage"] = $v_5;
        $v_1["StatusMessageAttr"] = $v_5;
        $v_0.resolve($v_1);
        return $v_0.promise()
    },
    $1_1:
        "\r\n\t<div class='wf_prop_field_group'>\r\n\t\t<div id='status_message_label' class='wf_prop_field'>{0}</div>\r\n\t\t<div aria-labelledby='status_message_label' class='wf_prop_value' tabindex='0' title='<%= StatusMessageAttr %>'><%= StatusMessage %></div>\r\n\t</div>\r\n"
};
Mscrm.ProcessAutomation
    .UpdateBodyPropertyPanelViewComponent = function(model) {
        Mscrm.ProcessAutomation.UpdateBodyPropertyPanelViewComponent.initializeBase(this, [model])
    };
Mscrm.ProcessAutomation.UpdateBodyPropertyPanelViewComponent.prototype = {
    get_template: function() {
        var $v_0 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_1 = String.format(this.$1_1,
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("UpdatePropertyFieldValues")));
        return _.template($v_1)
    },
    retrieveAttributes: function() {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Object),
            $v_1 = {},
            $v_2 = this.$4_0,
            $v_3 = new Mscrm.ProcessAutomation.HtmlBuilderContext;
        $v_3.$L_0 = new Mscrm.ProcessAutomation.ProcessObjectModelMetadataProvider(this.$B_0);
        $v_3.$O_0 = this.$B_0[$v_2.get_entity().get_entityName()];
        for (var $v_4 = [], $v_5 = new Mscrm.ProcessAutomation.PropertySpecificationHtmlBuilder($v_3), $v_6 = 0;
            $v_6 < $v_2.get_entitySpec().get_properties().get_count();
            $v_6++) {
            var $v_7 = $v_2.get_entitySpec().get_properties().get_item($v_6),
                $v_8 = this.buildPropertyAttributes($v_7, $v_3, $v_5);
            if (!$v_8) continue;
            Array.add($v_4, $v_8)
        }
        $v_1["EntityProperties"] = $v_4;
        $v_0.resolve($v_1);
        return $v_0.promise()
    },
    $1_1:
        "\r\n\t<div class='wf_prop_header_line' tabindex='0'>{0}</div>\r\n\t<% _.each(EntityProperties, function(property, index) {{ %>\r\n\t<div class='wf_prop_field_group'>\r\n\t\t<div id='<%= 'field' + index %>' class='wf_prop_field'><%= property.Name %></div>\r\n\t\t<div aria-labelledby='<%= 'field' + index %>' class='wf_prop_value' tabindex='0' title='<%= property.ValueAttr %>'><%= property.Value %></div>\r\n\t</div>\r\n\t<% }}); %>\r\n"
};
Mscrm.ProcessAutomation
    .WaitBranchBodyPropertyPanelViewComponent = function(model) {
        Mscrm.ProcessAutomation.WaitBranchBodyPropertyPanelViewComponent.initializeBase(this, [model])
    };
Mscrm.ProcessAutomation.WaitBranchBodyPropertyPanelViewComponent.prototype = {
    get_template: function() {
        var $v_0 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_1 = String.format(this.$1_1,
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("WaitBranchPropertyConditionTextLabel")));
        return _.template($v_1)
    },
    retrieveAttributes: function() {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Object),
            $v_1 = {},
            $v_2 = this.$4_0,
            $v_3 = (new Mscrm.ProcessAutomation.CachedStepDisplayInfoProvider).getDisplayInfo($v_2.get_Id())
                .DisplayText;
        $v_1["DisplayText"] = this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_3);
        $v_0.resolve($v_1);
        return $v_0.promise()
    },
    $1_1:
        "\r\n\t<div class='wf_prop_header_line' tabindex='0'>{0}</div>\r\n\t<div class='condition_text' tabindex='0'><%= DisplayText %></div>\r\n"
};
Mscrm.ProcessAutomation
    .WaitBodyPropertyPanelViewComponent = function(model) {
        Mscrm.ProcessAutomation.WaitBodyPropertyPanelViewComponent.initializeBase(this, [model])
    };
Mscrm.ProcessAutomation.WaitBodyPropertyPanelViewComponent.prototype = {
    get_template: function() {
        var $v_0 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_1 = String.format(this.$1_1,
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("WaitPropertyDisplayText")));
        return _.template($v_1)
    },
    retrieveAttributes: function() {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Object),
            $v_1 = this.$7_0,
            $v_2 = $v_1.$2_2,
            $v_3 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_4 = {},
            $v_5 = String.format($v_3.GetLabel("WaitPropertyDisplayText"), $v_2.get_Steps().get_Count());
        $v_4["DisplayText"] = this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_5);
        $v_4["Description"] = this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_2.get_Description());
        $v_4["DescriptionAttr"] = this.get_crmEncodeDecodeProxy().crmHtmlAttributeEncode($v_2.get_Description());
        $v_0.resolve($v_4);
        return $v_0.promise()
    },
    $1_1:
        "\r\n\t<div id='description_label' class='wf_prop_header_line'>{0}</div>\r\n\t<div aria-labelledby='description_label'  class='description_box' title='<%= DescriptionAttr %>' tabindex='0'><%= Description %></div>\r\n\t<div class='wait_associated_text' tabindex='0' ><%= DisplayText %></div>\r\n"
};
Mscrm.ProcessAutomation
    .AssignHeaderPropertyPanelViewComponent = function(model) {
        Mscrm.ProcessAutomation.AssignHeaderPropertyPanelViewComponent.initializeBase(this, [model])
    };
Mscrm.ProcessAutomation.AssignHeaderPropertyPanelViewComponent.prototype = {
    get_template: function() {
        var $v_0 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_1 = String.format(this.$1_1,
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("AssignPropertyTitle")),
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("ProcessEntity")));
        return _.template($v_1)
    },
    retrieveAttributes: function() {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Object),
            $v_1 = {},
            $v_2 = this.$4_0,
            $v_3 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_4 = $v_3.GetLabel("EmptyPropertyPlaceholder"),
            $v_5 = new Mscrm.ProcessAutomation.ProcessObjectModelMetadataProvider(this.$B_0);
        if (IsNull($v_2.get_entity())) {
            $v_1["EntityName"] = this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_4);
            $v_1["EntityNameAttr"] = this.get_crmEncodeDecodeProxy().crmHtmlAttributeEncode($v_4)
        } else {
            var $v_6 = Microsoft.Crm.Workflow.Expressions.EntityDecoratorFactory.getDecorator($v_2.get_entity(), $v_5)
                .get_displayName();
            $v_1["EntityName"] = this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_6);
            $v_1["EntityNameAttr"] = this.get_crmEncodeDecodeProxy().crmHtmlAttributeEncode($v_6)
        }
        $v_0.resolve($v_1);
        return $v_0.promise()
    },
    $1_1:
        "\r\n\t<div class='process_prop_title process_child process_child_top' tabindex='0'>{0}</div>\r\n\t<div class='wf_prop_field_group process_child'>\r\n\t\t<div id='entity_name_label' class='wf_prop_field'>{1}</div>\r\n\t\t<div aria-labelledby='entity_name_label' class='wf_prop_value' tabindex='0' title='<%= EntityNameAttr %>'><%= EntityName %></div>\r\n\t</div>\r\n"
};
Mscrm.ProcessAutomation
    .ChangeStatusHeaderPropertyPanelViewComponent = function(model) {
        Mscrm.ProcessAutomation.ChangeStatusHeaderPropertyPanelViewComponent.initializeBase(this, [model])
    };
Mscrm.ProcessAutomation.ChangeStatusHeaderPropertyPanelViewComponent.prototype = {
    get_template: function() {
        var $v_0 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_1 = String.format(this.$1_1,
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("ChangeStatusPropertyTitle")),
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("ProcessEntity")));
        return _.template($v_1)
    },
    retrieveAttributes: function() {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Object),
            $v_1 = {},
            $v_2 = this.$4_0,
            $v_3 = new Mscrm.ProcessAutomation.ProcessObjectModelMetadataProvider(this.$B_0),
            $v_4 = Microsoft.Crm.Workflow.Expressions.EntityDecoratorFactory.getDecorator($v_2.get_entity(), $v_3)
                .get_displayName();
        $v_1["EntityName"] = this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_4);
        $v_1["EntityNameAttr"] = this.get_crmEncodeDecodeProxy().crmHtmlAttributeEncode($v_4);
        $v_0.resolve($v_1);
        return $v_0.promise()
    },
    $1_1:
        "\r\n\t<div class='process_prop_title process_child process_child_top' tabindex='0'>{0}</div>\r\n\t<div class='wf_prop_field_group process_child'>\r\n\t\t<div id='entity_name_label' class='wf_prop_field'>{1}</div>\r\n\t\t<div aria-labelledby='entity_name_label' class='wf_prop_value' tabindex='0' title='<%= EntityNameAttr %>'><%= EntityName %></div>\r\n\t</div>\r\n"
};
Mscrm.ProcessAutomation
    .WorkflowRootBodyPropertyPanelViewComponent = function(model) {
        Mscrm.ProcessAutomation.WorkflowRootBodyPropertyPanelViewComponent.initializeBase(this, [model])
    };
Mscrm.ProcessAutomation.WorkflowRootBodyPropertyPanelViewComponent.prototype = {
    get_template: function() {
        var $v_0 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_1 = String.format(this.$1_1,
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("WorkflowPropertyUsageLabel")),
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("WorkflowPropertyTriggerLabel")),
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("WorkflowPropertyTriggerNone")));
        return _.template($v_1)
    },
    retrieveAttributes: function() {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Object),
            $v_1 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_2 = {},
            $v_3 = this.$7_0.$2_2,
            $v_4 = Mscrm.ProcessAutomation.ProcessDesignerDataJsonWrapper.get_instance(),
            $v_5 = [];
        $v_4.EntityJson.IsChildProcess &&
            Array.add($v_5, this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_1.GetLabel("WorkflowPropertyUsageChild")));
        $v_4.EntityJson.IsOnDemandProcess &&
            Array.add($v_5,
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_1.GetLabel("WorkflowPropertyUsageOnDemand")));
        $v_2["AttributeUsageTypes"] = $v_5;
        var $v_6 = [];
        $v_4.EntityJson.TriggerOnCreate &&
            Array.add($v_6,
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_1.GetLabel("WorkflowPropertyTriggerCreateLabel")));
        $v_4.EntityJson.TriggerOnDelete &&
            Array.add($v_6,
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_1.GetLabel("WorkflowPropertyTriggerDeleteLabel")));
        var $v_7 = this.$B_0[$v_3.get_primaryEntityName()], $v_8 = $v_4.EntityJson.TriggerOnUpdate;
        if (!isNullOrEmptyString($v_8))
            for (var $$arr_9 = $v_8.split(","), $$len_A = $$arr_9.length, $$idx_B = 0; $$idx_B < $$len_A; ++$$idx_B) {
                var $v_9 = $$arr_9[$$idx_B],
                    $v_A = String.format($v_1.GetLabel("WorkflowPropertyTriggerOnLabel"),
                        $v_7.getAttributeByName($v_9).LabelName);
                Array.add($v_6, this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_A))
            }
        $v_2["AttributeTriggerList"] = $v_6;
        $v_0.resolve($v_2);
        return $v_0.promise()
    },
    $1_1:
        "\r\n\t\t<% if (!(_.isEmpty(AttributeUsageTypes))) {{ %>\r\n\t\t\t<div class='wf_prop_subheader_line' tabindex='0'>{0}</div>\r\n\t\t\t<% _.each(AttributeUsageTypes, function(type) {{ %>\r\n\t\t\t\t<div class='wf_prop_field_group'>\r\n\t\t\t\t\t<div class='wf_prop_line' tabindex='0'><%= type %></div>\r\n\t\t\t\t</div>\r\n\t\t\t<% }}); %>\r\n\t\t<% }} %>\r\n\t\t<div class='wf_prop_subheader_line' tabindex='0'>{1}</div>\r\n\t\t<% if (!(_.isEmpty(AttributeTriggerList))) {{ %>\r\n\t\t\t<% _.each(AttributeTriggerList, function(update) {{ %>\r\n\t\t\t\t<div class='wf_prop_field_group'>\r\n\t\t\t\t\t<div class='wf_prop_line' tabindex='0'><%= update %></div>\r\n\t\t\t\t</div>\r\n\t\t\t<% }}); %>\r\n\t\t<% }} else {{ %>\r\n\t\t\t<div class='wf_prop_field_group'>\r\n\t\t\t\t<div class='wf_prop_line' tabindex='0'>{2}</div>\r\n\t\t\t</div>\r\n\t\t<% }} %>\r\n"
};
Mscrm.ProcessAutomation
    .CreateHeaderPropertyPanelViewComponent = function(model) {
        Mscrm.ProcessAutomation.CreateHeaderPropertyPanelViewComponent.initializeBase(this, [model])
    };
Mscrm.ProcessAutomation.CreateHeaderPropertyPanelViewComponent.prototype = {
    get_template: function() {
        var $v_0 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_1 = String.format(this.$1_1,
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("CreatePropertyTitle")),
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("ProcessEntity")));
        return _.template($v_1)
    },
    retrieveAttributes: function() {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Object),
            $v_1 = {},
            $v_2 = this.$4_0,
            $v_3 = Mscrm.ProcessAutomation.EntityCacheManager.get_instance().getDisplayName($v_2.get_entityName());
        $v_1["EntityName"] = this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_3);
        $v_1["EntityNameAttr"] = this.get_crmEncodeDecodeProxy().crmHtmlAttributeEncode($v_3);
        $v_0.resolve($v_1);
        return $v_0.promise()
    },
    $1_1:
        "\r\n\t<div class='process_prop_title process_child process_child_top' tabindex='0'>{0}</div>\r\n\t<div class='wf_prop_field_group process_child'>\r\n\t\t<div id='entity_name_label' class='wf_prop_field'>{1}</div>\r\n\t\t<div aria-labelledby='entity_name_label' class='wf_prop_value' tabindex='0' title='<%= EntityNameAttr %>'><%= EntityName %></div>\r\n\t</div>\r\n"
};
Mscrm.ProcessAutomation
    .CustomActivityHeaderPropertyPanelViewComponent = function(model) {
        Mscrm.ProcessAutomation.CustomActivityHeaderPropertyPanelViewComponent.initializeBase(this, [model])
    };
Mscrm.ProcessAutomation.CustomActivityHeaderPropertyPanelViewComponent.prototype = {
    get_template: function() {
        var $v_0 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_1 = String.format(this.$1_1,
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("CustomActivityPropertyTitle")));
        return _.template($v_1)
    },
    $1_1: "\r\n\t<div class='process_prop_title process_child_top process_child' tabindex='0'>{0}</div>\r\n"
};
Mscrm.ProcessAutomation
    .SendEmailHeaderPropertyPanelViewComponent = function(model) {
        Mscrm.ProcessAutomation.SendEmailHeaderPropertyPanelViewComponent.initializeBase(this, [model])
    };
Mscrm.ProcessAutomation.SendEmailHeaderPropertyPanelViewComponent.prototype = {
    get_template: function() {
        var $v_0 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_1 = String.format(this.$1_1,
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("SendEmailPropertyTitle")),
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("ProcessEntity")));
        return _.template($v_1)
    },
    retrieveAttributes: function() {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Object),
            $v_1 = {},
            $v_2 = this.$4_0,
            $v_3 = Mscrm.ProcessAutomation.EntityCacheManager.get_instance()
                .getDisplayName($v_2.get_entity().get_entityName());
        $v_1["EntityName"] = this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_3);
        $v_1["EntityNameAttr"] = this.get_crmEncodeDecodeProxy().crmHtmlAttributeEncode($v_3);
        $v_0.resolve($v_1);
        return $v_0.promise()
    },
    $1_1:
        "\r\n\t<div class='process_prop_title process_child process_child_top' tabindex='0'>{0}</div>\r\n\t<div class='wf_prop_field_group process_child'>\r\n\t\t<div id='entity_name_label' class='wf_prop_field'>{1}</div>\r\n\t\t<div aria-labelledby='entity_name_label' class='wf_prop_value' tabindex='0' title='<%= EntityNameAttr %>'><%= EntityName %></div>\r\n\t</div>\r\n"
};
Mscrm.ProcessAutomation
    .StartChildWorkflowHeaderPropertyPanelViewComponent = function(model) {
        Mscrm.ProcessAutomation.StartChildWorkflowHeaderPropertyPanelViewComponent.initializeBase(this, [model])
    };
Mscrm.ProcessAutomation.StartChildWorkflowHeaderPropertyPanelViewComponent.prototype = {
    get_template: function() {
        var $v_0 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_1 = String.format(this.$1_1,
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("ChildWorkflowPropertyTitle")),
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("ProcessEntity")));
        return _.template($v_1)
    },
    retrieveAttributes: function() {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Object),
            $v_1 = {},
            $v_2 = this.$4_0,
            $v_3 = new Mscrm.ProcessAutomation.ProcessObjectModelMetadataProvider(this.$B_0),
            $v_4 = Microsoft.Crm.Workflow.Expressions.EntityDecoratorFactory.getDecorator($v_2.get_entity(), $v_3)
                .get_displayName();
        $v_1["Entity"] = this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_4);
        $v_1["EntityAttr"] = this.get_crmEncodeDecodeProxy().crmHtmlAttributeEncode($v_4);
        $v_0.resolve($v_1);
        return $v_0.promise()
    },
    $1_1:
        "\r\n\t<div class='process_prop_title process_child process_child_top' tabindex='0'>{0}</div>\r\n\t<div class='wf_prop_field_group process_child'>\r\n\t\t<div id='status_label' class='wf_prop_field'>{1}</div>\r\n\t\t<div aria-labelledby='status_label' class='wf_prop_value' tabindex='0' title='<%= EntityAttr %>'><%= Entity %></div>\r\n\t</div>\r\n"
};
Mscrm.ProcessAutomation
    .StopWorkflowHeaderPropertyPanelViewComponent = function(model) {
        Mscrm.ProcessAutomation.StopWorkflowHeaderPropertyPanelViewComponent.initializeBase(this, [model])
    };
Mscrm.ProcessAutomation.StopWorkflowHeaderPropertyPanelViewComponent.prototype = {
    get_template: function() {
        var $v_0 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_1 = String.format(this.$1_1,
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("StopWorkflowPropertyTitle")),
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("StopWorkflowPropertyStatus")));
        return _.template($v_1)
    },
    retrieveAttributes: function() {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Object),
            $v_1 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_2 = {},
            $v_3 = this.$4_0,
            $v_4 = $v_1.GetLabel("EmptyPropertyPlaceholder"),
            $v_5 = $v_4;
        if (!IsNull($v_3.get_status())) {
            var $v_6 = Mscrm.ProcessAutomation.ProcessDesignerDataJsonWrapper.get_instance().AdditionalData;
            $v_5 = $v_6.WorkflowStatus[$v_3.get_status()]
        }
        $v_2["Status"] = this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_5);
        $v_2["StatusAttr"] = this.get_crmEncodeDecodeProxy().crmHtmlAttributeEncode($v_5);
        $v_0.resolve($v_2);
        return $v_0.promise()
    },
    $1_1:
        "\r\n\t<div class='process_prop_title process_child process_child_top' tabindex='0'>{0}</div>\r\n\t<div class='wf_prop_field_group process_child'>\r\n\t\t<div id='status_label' class='wf_prop_field'>{1}</div>\r\n\t\t<div aria-labelledby='status_label' class='wf_prop_value' tabindex='0' title='<%= StatusAttr %>'><%= Status %></div>\r\n\t</div>\r\n"
};
Mscrm.ProcessAutomation
    .UpdateHeaderPropertyPanelViewComponent = function(model) {
        Mscrm.ProcessAutomation.UpdateHeaderPropertyPanelViewComponent.initializeBase(this, [model])
    };
Mscrm.ProcessAutomation.UpdateHeaderPropertyPanelViewComponent.prototype = {
    get_template: function() {
        var $v_0 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_1 = String.format(this.$1_1,
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("UpdatePropertyTitle")),
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("ProcessEntity")));
        return _.template($v_1)
    },
    retrieveAttributes: function() {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Object),
            $v_1 = {},
            $v_2 = this.$4_0,
            $v_3 = new Mscrm.ProcessAutomation.HtmlBuilderContext;
        $v_3.$L_0 = new Mscrm.ProcessAutomation.ProcessObjectModelMetadataProvider(this.$B_0);
        $v_3.$O_0 = this.$B_0[$v_2.get_entity().get_entityName()];
        var $v_4 = Microsoft.Crm.Workflow.Expressions.EntityDecoratorFactory.getDecorator($v_2.get_entity(), $v_3.$L_0)
            .get_displayName();
        $v_1["EntityName"] = this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_4);
        $v_1["EntityNameAttr"] = this.get_crmEncodeDecodeProxy().crmHtmlAttributeEncode($v_4);
        $v_0.resolve($v_1);
        return $v_0.promise()
    },
    $1_1:
        "\r\n\t<div class='process_prop_title process_child process_child_top' tabindex='0'>{0}</div>\r\n\t<div class='wf_prop_field_group process_child'>\r\n\t\t<div id='entity_name_label' class='wf_prop_field'>{1}</div>\r\n\t\t<div aria-labelledby='entity_name_label' class='wf_prop_value' tabindex='0' title='<%= EntityNameAttr %>'><%= EntityName %></div>\r\n\t</div>\r\n"
};
Mscrm.ProcessAutomation
    .WaitBranchHeaderPropertyPanelViewComponent = function(model) {
        Mscrm.ProcessAutomation.WaitBranchHeaderPropertyPanelViewComponent.initializeBase(this, [model])
    };
Mscrm.ProcessAutomation.WaitBranchHeaderPropertyPanelViewComponent.prototype = {
    get_template: function() {
        var $v_0 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_1 = String.format(this.$1_1,
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("WaitBranchPropertyTitle")));
        return _.template($v_1)
    },
    retrieveAttributes: function() {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Object), $v_1 = {};
        $v_0.resolve($v_1);
        return $v_0.promise()
    },
    $1_1: "\r\n\t<div class='process_prop_title process_child_top process_child' tabindex='0'>{0}</div>\r\n"
};
Mscrm.ProcessAutomation
    .WorkflowRootHeaderPropertyPanelViewComponent = function(model) {
        Mscrm.ProcessAutomation.WorkflowRootHeaderPropertyPanelViewComponent.initializeBase(this, [model])
    };
Mscrm.ProcessAutomation.WorkflowRootHeaderPropertyPanelViewComponent.prototype = {
    get_template: function() {
        var $v_0 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_1 = String.format(this.$1_1,
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("WorkflowPropertyTitle")),
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("WorkflowPropertyEntity")),
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("WorkflowPropertyScope")));
        return _.template($v_1)
    },
    retrieveAttributes: function() {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Object),
            $v_1 = {},
            $v_2 = this.$7_0.$2_2,
            $v_3 = Mscrm.ProcessAutomation.ProcessDesignerDataJsonWrapper.get_instance(),
            $v_4 = Mscrm.ProcessAutomation.EntityCacheManager.get_instance()
                .getDisplayName($v_2.get_primaryEntityName());
        $v_1["EntityName"] = this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_4);
        $v_1["EntityNameAttr"] = this.get_crmEncodeDecodeProxy().crmHtmlAttributeEncode($v_4);
        for (var $v_5 = $v_3.AdditionalData, $$arr_6 = $v_5.ScopeOptions, $$len_7 = $$arr_6.length, $$idx_8 = 0;
            $$idx_8 < $$len_7;
            ++$$idx_8) {
            var $v_6 = $$arr_6[$$idx_8];
            if ($v_6.Value === $v_3.EntityJson.Scope) {
                $v_1["Scope"] = this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_6.Label);
                $v_1["ScopeAttr"] = this.get_crmEncodeDecodeProxy().crmHtmlAttributeEncode($v_6.Label)
            }
        }
        $v_0.resolve($v_1);
        return $v_0.promise()
    },
    $1_1:
        "\r\n\t<div class='process_prop_title process_child process_child_top' tabindex='0'>{0}</div>\r\n\t<div class='wf_prop_field_group process_child'>\r\n\t\t<div id='entity_name_label' class='wf_prop_field'>{1}</div>\r\n\t\t<div aria-labelledby='entity_name_label' class='wf_prop_value' tabindex='0' title='<%= EntityNameAttr %>'><%= EntityName %></div>\r\n\t</div>\r\n\t<div class='wf_prop_field_group process_child'>\r\n\t\t<div id='scope_label' class='wf_prop_field'>{2}</div>\r\n\t\t<div aria-labelledby='scope_label' class='wf_prop_value' tabindex='0' title='<%= ScopeAttr %>'><%= Scope %></div>\r\n\t</div>\r\n"
};
Mscrm.ProcessAutomation
    .WaitHeaderPropertyPanelViewComponent = function(model) {
        Mscrm.ProcessAutomation.WaitHeaderPropertyPanelViewComponent.initializeBase(this, [model])
    };
Mscrm.ProcessAutomation.WaitHeaderPropertyPanelViewComponent.prototype = {
    get_template: function() {
        var $v_0 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_1 = String.format(this.$1_1,
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("WaitPropertyTitle")));
        return _.template($v_1)
    },
    retrieveAttributes: function() {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Object), $v_1 = {};
        $v_0.resolve($v_1);
        return $v_0.promise()
    },
    $1_1: "\r\n\t<div class='process_prop_title process_child_top process_child' tabindex='0'>{0}</div>\r\n"
};
Mscrm.ProcessAutomation
    .WorkflowHeaderPropertyPanelViewComponentFactory = function() {
        Mscrm.ProcessAutomation.WorkflowHeaderPropertyPanelViewComponentFactory.initializeBase(this)
    };
Mscrm.ProcessAutomation.WorkflowHeaderPropertyPanelViewComponentFactory.prototype = {
    createComponent: function(model) {
        switch (model.getActivityTypeId()) {
        case "wf_assign":
            return new Mscrm.ProcessAutomation.AssignHeaderPropertyPanelViewComponent(model);
        case "wf_root":
            return new Mscrm.ProcessAutomation.WorkflowRootHeaderPropertyPanelViewComponent(model);
        case "wf_child":
            return new Mscrm.ProcessAutomation.StartChildWorkflowHeaderPropertyPanelViewComponent(model);
        case "wf_create":
            return new Mscrm.ProcessAutomation.CreateHeaderPropertyPanelViewComponent(model);
        case "wf_customactivity":
            return new Mscrm.ProcessAutomation.CustomActivityHeaderPropertyPanelViewComponent(model);
        case "wf_sendemail":
            return new Mscrm.ProcessAutomation.SendEmailHeaderPropertyPanelViewComponent(model);
        case "wf_setstate":
            return new Mscrm.ProcessAutomation.ChangeStatusHeaderPropertyPanelViewComponent(model);
        case "wf_stopworkflow":
            return new Mscrm.ProcessAutomation.StopWorkflowHeaderPropertyPanelViewComponent(model);
        case "wf_update":
            return new Mscrm.ProcessAutomation.UpdateHeaderPropertyPanelViewComponent(model);
        case "wf_wait":
            return new Mscrm.ProcessAutomation.WaitHeaderPropertyPanelViewComponent(model);
        case "wf_waitbranch":
            return new Mscrm.ProcessAutomation.WaitBranchHeaderPropertyPanelViewComponent(model);
        default:
            return Mscrm.ProcessAutomation.ProcessHeaderPropertyPanelViewComponentFactory.prototype.createComponent
                .call(this, model)
        }
    }
};
Mscrm.ProcessAutomation
    .WorkflowBodyPropertyPanelViewComponentFactory = function() {
        Mscrm.ProcessAutomation.WorkflowBodyPropertyPanelViewComponentFactory.initializeBase(this)
    };
Mscrm.ProcessAutomation.WorkflowBodyPropertyPanelViewComponentFactory.prototype = {
    createComponent: function(model) {
        switch (model.getActivityTypeId()) {
        case "wf_assign":
            return new Mscrm.ProcessAutomation.AssignBodyPropertyPanelViewComponent(model);
        case "wf_root":
            return new Mscrm.ProcessAutomation.WorkflowRootBodyPropertyPanelViewComponent(model);
        case "wf_child":
            return new Mscrm.ProcessAutomation.StartChildWorkflowBodyPropertyPanelViewComponent(model);
        case "wf_create":
            return new Mscrm.ProcessAutomation.CreateBodyPropertyPanelViewComponent(model);
        case "wf_customactivity":
            return new Mscrm.ProcessAutomation.CustomActivityBodyPropertyPanelViewComponent(model);
        case "wf_sendemail":
            return !model.get_processStep().get_sendEmailStepType()
                ? new Mscrm.ProcessAutomation.SendEmailWithoutTemplateBodyPropertyPanelViewComponent(model)
                : new Mscrm.ProcessAutomation.SendEmailWithTemplateBodyPropertyPanelViewComponent(model);
        case "wf_setstate":
            return new Mscrm.ProcessAutomation.ChangeStatusBodyPropertyPanelViewComponent(model);
        case "wf_stopworkflow":
            return new Mscrm.ProcessAutomation.StopWorkflowBodyPropertyPanelViewComponent(model);
        case "wf_update":
            return new Mscrm.ProcessAutomation.UpdateBodyPropertyPanelViewComponent(model);
        case "wf_wait":
            return new Mscrm.ProcessAutomation.WaitBodyPropertyPanelViewComponent(model);
        case "wf_waitbranch":
            return new Mscrm.ProcessAutomation.WaitBranchBodyPropertyPanelViewComponent(model);
        default:
            return Mscrm.ProcessAutomation.ProcessBodyPropertyPanelViewComponentFactory.prototype.createComponent
                .call(this, model)
        }
    }
};
Mscrm.ProcessAutomation.WorkflowPropertyPanelViewComponentProvider = function() {
    Mscrm.ProcessAutomation.WorkflowPropertyPanelViewComponentProvider.initializeBase(this);
    this.$Z_0 = new Mscrm.ProcessAutomation.WorkflowHeaderPropertyPanelViewComponentFactory;
    this.$W_0 = new Mscrm.ProcessAutomation.WorkflowBodyPropertyPanelViewComponentFactory
};
Mscrm.ProcessAutomation
    .AsyncOperationRootStatusPropertyPanelViewComponent = function(model) {
        Mscrm.ProcessAutomation.AsyncOperationRootStatusPropertyPanelViewComponent.initializeBase(this, [model])
    };
Mscrm.ProcessAutomation.AsyncOperationRootStatusPropertyPanelViewComponent.prototype = {
    getExecutionDetails: function(wrapper) {
        for (var $v_0 = {},
            $v_1 = [
                wrapper.JobOwner.Name, wrapper.Regarding.Name, wrapper.CreatedOn, wrapper.CompletedOn, wrapper
                .RetryCount.toString(), wrapper.StartReason, wrapper.PostponeUntil
            ],
            $v_2 = [
                "RuntimeJobOwnerLabel", "RuntimeRegardingLabel", "RuntimeCreatedOnLabel", "RuntimeCompletedOnLabel",
                "RuntimeRetryCountLabel", "RuntimeStartReasonLabel", "RuntimePostponeUntilLabel"
            ],
            $v_3 = 0;
            $v_3 < $v_1.length;
            ++$v_3) if (!isNullOrEmptyString($v_1[$v_3])) $v_0[$v_2[$v_3]] = $v_1[$v_3];
        return $v_0
    }
};
Mscrm.ProcessAutomation
    .DefaultStatusPropertyPanelViewComponent = function(model) {
        Mscrm.ProcessAutomation.DefaultStatusPropertyPanelViewComponent.initializeBase(this, [model])
    };
Mscrm.ProcessAutomation.DefaultStatusPropertyPanelViewComponent.prototype = {
    get_template: function() {
        var $v_0 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_1 = String.format(this.$1_1,
                this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_0.GetLabel("WorkflowRuntimeStatusLabel")));
        return _.template($v_1)
    },
    retrieveAttributes: function() {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Object),
            $v_1 = {},
            $v_2 = Mscrm.ProcessAutomation.ProcessDesignerDataJsonWrapper.get_instance(),
            $v_3 = this.$7_0.get_status();
        $v_1["Status"] = "";
        for (var $$arr_4 = $v_2.StatusDisplays, $$len_5 = $$arr_4.length, $$idx_6 = 0; $$idx_6 < $$len_5; ++$$idx_6) {
            var $v_4 = $$arr_4[$$idx_6];
            if (!IsNull($v_3) && $v_4.Value === $v_3.code)
                $v_1["Status"] = this.get_crmEncodeDecodeProxy().crmHtmlEncode($v_4.Label)
        }
        $v_0.resolve($v_1);
        return $v_0.promise()
    },
    $1_1:
        "\r\n\t<div class='wf_prop_header_line' tabindex='0'>{0}</div>\r\n\t<div class='wf_prop_field_group'>\r\n\t\t<div class='wf_prop_line' tabindex='0'><%= Status %></div>\r\n\t</div>\t\r\n"
};
Mscrm.ProcessAutomation
    .ProcessSessionRootStatusPropertyPanelViewComponent = function(model) {
        Mscrm.ProcessAutomation.ProcessSessionRootStatusPropertyPanelViewComponent.initializeBase(this, [model])
    };
Mscrm.ProcessAutomation.ProcessSessionRootStatusPropertyPanelViewComponent.prototype = {
    getExecutionDetails: function(wrapper) {
        for (var $v_0 = {},
            $v_1 = [wrapper.JobOwner.Name, wrapper.Regarding.Name, wrapper.CreatedOn, wrapper.CompletedOn],
            $v_2 = [
                "RuntimeJobOwnerLabel", "RuntimeRegardingLabel", "RuntimeCreatedOnLabel",
                "RuntimeCompletedOnLabel"
            ],
            $v_3 = 0;
            $v_3 < $v_1.length;
            ++$v_3) if (!isNullOrEmptyString($v_1[$v_3])) $v_0[$v_2[$v_3]] = $v_1[$v_3];
        return $v_0
    }
};
Mscrm.ProcessAutomation
    .WorkflowRootStatusPropertyPanelViewComponent = function(model) {
        Mscrm.ProcessAutomation.WorkflowRootStatusPropertyPanelViewComponent.initializeBase(this, [model])
    };
Mscrm.ProcessAutomation.WorkflowRootStatusPropertyPanelViewComponent.prototype = {
    get_template: function() {
        var $v_0 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_1 = String.format(this.$1_1,
                this.get_crmEncodeDecodeProxy()
                .crmHtmlEncode($v_0.GetLabel("RuntimeWorkflowPropertyExecutionDetailsLabel")));
        return _.template($v_1)
    },
    retrieveAttributes: function() {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Object),
            $v_1 = Mscrm.Automation.AutomationControl.instance.settings.getLabelKeyValuePhraseCollection(),
            $v_2 = {},
            $v_3 = Mscrm.ProcessAutomation.ProcessDesignerDataJsonWrapper.get_instance(),
            $v_4 = [],
            $v_5 = $v_3.ExecutionDetails,
            $v_6 = $v_5[0],
            $v_7 = this.getExecutionDetails($v_6),
            $$t_B = this;
        $P_CRM.each($v_7,
            function($p1_0, $p1_1) {
                var $v_8 = {};
                $v_8["ExecutionFieldName"] = $$t_B.get_crmEncodeDecodeProxy().crmHtmlEncode($v_1.GetLabel($p1_0));
                $v_8["ExecutionFieldValue"] = $$t_B.get_crmEncodeDecodeProxy().crmHtmlEncode($v_7[$p1_0]);
                Array.add($v_4, $v_8)
            });
        $v_2["ExecutionDetails"] = $v_4;
        $v_0.resolve($v_2);
        return $v_0.promise()
    },
    getExecutionDetails: function(wrapper) { return {} },
    $1_1:
        "\r\n\t\t<div class='wf_prop_subheader_line' tabindex='0'>{0}</div>\r\n\t\t<% _.each(ExecutionDetails, function(property, index) {{ %>\r\n\t\t<div class='wf_prop_field_group'>\r\n\t\t\t<div id='<%= 'field' + index %>' class='wf_prop_field'><%= property.ExecutionFieldName %></div>\r\n\t\t\t<div aria-labelledby='<%= 'field' + index %>' class='wf_prop_value' tabindex='0' title='<%= property.ExecutionFieldName %>'><%= property.ExecutionFieldValue %></div>\r\n\t\t</div>\r\n\t\t<% }}); %>\r\n"
};
Mscrm.ProcessAutomation.WorkflowRuntimePropertyPanelViewComponentProvider = function() {
    this.$14_2 = new Mscrm.ProcessAutomation.WorkflowRuntimeStatusPropertyPanelViewComponentFactory;
    Mscrm.ProcessAutomation.WorkflowRuntimePropertyPanelViewComponentProvider.initializeBase(this)
};
Mscrm.ProcessAutomation.WorkflowRuntimePropertyPanelViewComponentProvider.prototype = {
    getComponents: function(model, entityMetadata) {
        var $v_0 = Mscrm.ProcessAutomation.ProcessPropertyPanelViewComponentProvider.prototype.getComponents
                .call(this, model, entityMetadata),
            $v_1 = this.$14_2.createComponent(model);
        $v_1.set_entityMetadata(entityMetadata);
        Array.add($v_0, $v_1);
        return $v_0
    }
};
Mscrm.ProcessAutomation.WorkflowRuntimeStatusPropertyPanelViewComponentFactory = function() {};
Mscrm.ProcessAutomation.WorkflowRuntimeStatusPropertyPanelViewComponentFactory.prototype = {
    createComponent: function(model) {
        if (model.getActivityTypeId() === "wf_root") return this.$2m_0(model);
        var $v_0 = model.get_status();
        if (!IsNull($v_0) && $v_0.code !== -1)
            return new Mscrm.ProcessAutomation.DefaultStatusPropertyPanelViewComponent(model);
        return new Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent(model)
    },
    $2m_0: function($p0) {
        var $v_0 = new Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent($p0),
            $v_1 = Mscrm.ProcessAutomation.ProcessDesignerDataJsonWrapper.get_instance(),
            $v_2 = $v_1.ExecutionDetails;
        if (!$v_2.length) return $v_0;
        var $v_3 = $v_2[0];
        if ($v_3.EntityTypeCode === 4700)
            $v_0 = new Mscrm.ProcessAutomation.AsyncOperationRootStatusPropertyPanelViewComponent($p0);
        else if ($v_3.EntityTypeCode === 4710)
            $v_0 = new Mscrm.ProcessAutomation.ProcessSessionRootStatusPropertyPanelViewComponent($p0);
        return $v_0
    }
};
Mscrm.ProcessAutomation.ReadWorkflowRuntimePropertyPanelView = function(viewModel) {
    this.$d_4 = String
        .format("<div id='process_prop' class='process_prop'>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div id='process_body'>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div id='{0}'></div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div data-scrollable='true'>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div id='{1}'></div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div id='{2}'></div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>", String.format("propertycomponent{0}", 0), String.format("propertycomponent{0}", 1), String.format("propertycomponent{0}", 2));
    Mscrm.ProcessAutomation.ReadWorkflowRuntimePropertyPanelView.initializeBase(this, [viewModel])
};
Mscrm.ProcessAutomation.ReadWorkflowRuntimePropertyPanelView
    .prototype = { get_propertyPanelJQueryHtml: function() { return this.$d_4 } };
Mscrm.ProcessAutomation
    .WorkflowPropertyPanelScrollableCssClassProvider = function() {
        Mscrm.ProcessAutomation.WorkflowPropertyPanelScrollableCssClassProvider.initializeBase(this)
    };
Mscrm.ProcessAutomation.WorkflowPropertyPanelScrollableCssClassProvider.prototype = {
    getScrollableCssClass: function(model) {
        switch (model.getActivityTypeId()) {
        case "wf_customactivity":
            return "wf_scrollable_filled_group_customactivity";
        case "wf_root":
            return "wf_scrollable_filled_group_root";
        case "wf_wait":
            return "wf_scrollable_filled_group_wait";
        case "wf_waitbranch":
            return "wf_scrollable_filled_group_waitbranch";
        default:
            return Mscrm.ProcessAutomation.ProcessPropertyPanelScrollableCssClassProvider.prototype
                .getScrollableCssClass.call(this, model)
        }
    }
};
Mscrm.ProcessAutomation.WorkflowBodyView = function($p0) {
    Mscrm.ProcessAutomation.WorkflowBodyView.initializeBase(this, [$p0])
};
Mscrm.ProcessAutomation.WorkflowBodyView.prototype = {
    $9_2: null,
    get_automationControl: function() {
        if (IsNull(this.$9_2)) this.$9_2 = new Mscrm.ProcessAutomation.WorkflowAutomationControl;
        return this.$9_2
    }
};
Mscrm.ProcessAutomation.WorkflowRuntimeBodyView = function($p0) {
    Mscrm.ProcessAutomation.WorkflowRuntimeBodyView.initializeBase(this, [$p0])
};
Mscrm.ProcessAutomation.WorkflowRuntimeBodyView.prototype = {
    $9_3: null,
    get_automationControl: function() {
        if (IsNull(this.$9_3)) this.$9_3 = new Mscrm.ProcessAutomation.WorkflowRuntimeAutomationControl;
        return this.$9_3
    }
};
Mscrm.ProcessAutomation.WorkflowDesignerView = function(element) {
    Mscrm.ProcessAutomation.WorkflowDesignerView.initializeBase(this, [element])
};
Mscrm.ProcessAutomation.WorkflowDesignerView.prototype = {
    initialize: function() {
        Mscrm.ProcessAutomation.ProcessDesignerView.prototype.initialize.call(this);
        this.$C_1 = new Mscrm.ProcessAutomation
            .WorkflowHeaderView(this.get_jQueryProxy().selectElement("HeaderViewContainer"));
        this.$C_1.set_dataContext(this.get_dataContext());
        this.$C_1.initialize();
        this.$A_1 = new Mscrm.ProcessAutomation
            .WorkflowBodyView(this.get_jQueryProxy().selectElement("BodyViewContainer"));
        this.$A_1.set_dataContext(this.get_dataContext());
        this.$A_1.initialize()
    }
};
Mscrm.ProcessAutomation.WorkflowRuntimeView = function(element) {
    Mscrm.ProcessAutomation.WorkflowRuntimeView.initializeBase(this, [element])
};
Mscrm.ProcessAutomation.WorkflowRuntimeView.prototype = {
    initialize: function() {
        this.$C_1 = new Mscrm.ProcessAutomation
            .WorkflowHeaderView(this.get_jQueryProxy().selectElement("HeaderViewContainer"));
        this.$C_1.set_dataContext(this.get_dataContext());
        this.$C_1.initialize();
        this.$A_1 = new Mscrm.ProcessAutomation
            .WorkflowRuntimeBodyView(this.get_jQueryProxy().selectElement("BodyViewContainer"));
        this.$A_1.set_dataContext(this.get_dataContext());
        this.$A_1.initialize()
    }
};
Mscrm.ProcessAutomation.WorkflowHeaderView = function($p0) {
    Mscrm.ProcessAutomation.WorkflowHeaderView.initializeBase(this, [$p0])
};
Mscrm.ProcessAutomation.WorkflowPropertyViewFactory = function() {
    Mscrm.ProcessAutomation.WorkflowPropertyViewFactory.initializeBase(this)
};
Mscrm.ProcessAutomation.WorkflowPropertyViewFactory.prototype = {
    createReadProperty: function(viewModel, activityType) {
        switch (activityType) {
        case "wf_assign":
        case "wf_root":
        case "wf_child":
        case "wf_create":
        case "wf_customactivity":
        case "wf_sendemail":
        case "wf_setstate":
        case "wf_stopworkflow":
        case "wf_update":
        case "wf_wait":
        case "wf_waitbranch":
            return new Mscrm.ProcessAutomation.ReadProcessPropertyPanelView(viewModel);
        default:
            return Mscrm.ProcessAutomation.ProcessPropertyViewFactory.prototype.createReadProperty
                .call(this, viewModel, activityType)
        }
    }
};
Mscrm.ProcessAutomation
    .WorkflowRuntimePropertyViewFactory = function() {
        Mscrm.ProcessAutomation.WorkflowRuntimePropertyViewFactory.initializeBase(this)
    };
Mscrm.ProcessAutomation.WorkflowRuntimePropertyViewFactory.prototype = {
    createReadProperty: function(viewModel, activityType) {
        var $v_0 = viewModel.get_model().get_status();
        if (!IsNull($v_0) && $v_0.code !== -1)
            return new Mscrm.ProcessAutomation.ReadWorkflowRuntimePropertyPanelView(viewModel);
        return Mscrm.ProcessAutomation.WorkflowPropertyViewFactory.prototype.createReadProperty
            .call(this, viewModel, activityType)
    }
};
Mscrm.ProcessAutomation.WorkflowAutomationControl = function() {
    Mscrm.ProcessAutomation.WorkflowAutomationControl.initializeBase(this)
};
Mscrm.ProcessAutomation.WorkflowAutomationControl.prototype = {
    initializeSettings: function() {
        var $v_0 = new Mscrm.ProcessAutomation.WorkflowSettings;
        $v_0.set_viewModel(this.$0_1);
        this.settings = $v_0;
        this.settings.initialize()
    }
};
Mscrm.ProcessAutomation.WorkflowRuntimeAutomationControl = function() {
    Mscrm.ProcessAutomation.WorkflowRuntimeAutomationControl.initializeBase(this)
};
Mscrm.ProcessAutomation.WorkflowRuntimeAutomationControl.prototype = {
    initializeSettings: function() {
        var $v_0 = new Mscrm.ProcessAutomation.WorkflowRuntimeSettings;
        $v_0.set_viewModel(this.$0_1);
        this.settings = $v_0;
        this.settings.initialize()
    }
};
Mscrm.ProcessAutomation.WorkflowImageResources = function() {};
Mscrm.ProcessAutomation.WorkflowImageResources
    .get_assignTileIcon = function() { return "/_imgs/ProcessDesigner/Assign_32.png" };
Mscrm.ProcessAutomation.WorkflowImageResources
    .get_createTileIcon = function() { return "/_imgs/ProcessDesigner/Create_32.png" };
Mscrm.ProcessAutomation.WorkflowImageResources
    .get_customActivityTileIcon = function() { return "/_imgs/ProcessDesigner/CustomAction_32.png" };
Mscrm.ProcessAutomation.WorkflowImageResources
    .get_sendEmailTileIcon = function() { return "/_imgs/ProcessDesigner/Email_32.png" };
Mscrm.ProcessAutomation.WorkflowImageResources
    .get_setStateTileIcon = function() { return "/_imgs/ProcessDesigner/ChangeStatus_32.png" };
Mscrm.ProcessAutomation.WorkflowImageResources
    .get_stopWorkflowTileIcon = function() { return "/_imgs/ProcessDesigner/WorkflowStop_32.png" };
Mscrm.ProcessAutomation.WorkflowImageResources
    .get_updateTileIcon = function() { return "/_imgs/ProcessDesigner/Update_32.png" };
Mscrm.ProcessAutomation.WorkflowImageResources
    .get_waitTileIcon = function() { return "/_imgs/ProcessDesigner/Wait_32.png" };
Mscrm.ProcessAutomation.WorkflowImageResources
    .get_workflowRootTileIcon = function() { return "/_imgs/ProcessDesigner/Setting_32.png" };
Mscrm.ProcessAutomation.WorkflowInitializer = function() {
    Mscrm.ProcessAutomation.WorkflowInitializer.initializeBase(this)
};
Mscrm.ProcessAutomation.WorkflowInitializer.workflowInstance = function() {
    if (IsNull(Mscrm.ProcessAutomation.ProcessInitializer
        .$3)) Mscrm.ProcessAutomation.ProcessInitializer.$3 = new Mscrm.ProcessAutomation.WorkflowInitializer;
    return Mscrm.ProcessAutomation.ProcessInitializer.$3
};
Mscrm.ProcessAutomation.WorkflowInitializer.prototype = {
    initialize: function() {
        this.$0_0 = new Mscrm.ProcessAutomation.WorkflowDesignerViewModel;
        this.$0_0.set_menuCommandFactory(new Mscrm.ProcessAutomation.MenuCommandFactory);
        this.$0_0.set_viewFactory(new Mscrm.ProcessAutomation.ViewFactory);
        this.$0_0.set_viewModelFactory(new Mscrm.ProcessAutomation.ViewModelFactory);
        this.$0_0.initialize();
        this.$G_0 = new Mscrm.ProcessAutomation
            .WorkflowDesignerView(this.get_jQueryProxy().selectElement("processdesigner"));
        this.$G_0.set_dataContext(this.$0_0);
        this.$G_0.initialize()
    }
};
Mscrm.ProcessAutomation.WorkflowRuntimeInitializer = function() {
    Mscrm.ProcessAutomation.WorkflowRuntimeInitializer.initializeBase(this)
};
Mscrm.ProcessAutomation.WorkflowRuntimeInitializer.workflowInstance = function() {
    if (IsNull(Mscrm.ProcessAutomation.ProcessInitializer
        .$3)) Mscrm.ProcessAutomation.ProcessInitializer.$3 = new Mscrm.ProcessAutomation.WorkflowRuntimeInitializer;
    return Mscrm.ProcessAutomation.ProcessInitializer.$3
};
Mscrm.ProcessAutomation.WorkflowRuntimeInitializer.prototype = {
    initialize: function() {
        this.$0_0 = new Mscrm.ProcessAutomation.WorkflowDesignerViewModel;
        this.$0_0.initialize();
        this.$G_0 = new Mscrm.ProcessAutomation
            .WorkflowRuntimeView(this.get_jQueryProxy().selectElement("processdesigner"));
        this.$G_0.set_dataContext(this.$0_0);
        this.$G_0.initialize()
    }
};
Mscrm.ProcessAutomation.EntityAdditionalMetadataJsonWrapper = function() {};
Mscrm.ProcessAutomation.EntityAdditionalMetadataJsonWrapper
    .prototype = { OneToManyEntityReference: null, CanCreate: false, CanRead: false, CanUpdate: false };
Mscrm.ProcessAutomation.RelationshipJsonWrapper = function() {};
Mscrm.ProcessAutomation.RelationshipJsonWrapper
    .prototype = {
        IsValidForAdvancedFind: false,
        ReferencedEntityLogicalName: null,
        ReferencingAttributeLogicalName: null,
        DisplayName: null
    };
Mscrm.ProcessAutomation.BusinessProcessDesignerDataJsonWrapper = function() {};
Mscrm.ProcessAutomation.BusinessProcessDesignerDataJsonWrapper.prototype = { BpfStageCategoryMetadata: null };
Mscrm.ProcessAutomation.BusinessProcessEntityJsonWrapper = function() {
    Mscrm.ProcessAutomation.BusinessProcessEntityJsonWrapper.initializeBase(this)
};
Mscrm.ProcessAutomation.BusinessProcessEntityJsonWrapper.prototype = { Owner: null, RoleAssignments: null };
Mscrm.ProcessAutomation.ElementId = function() {};
Mscrm.ProcessAutomation.EntityMetadataInfo = function() {};
Mscrm.ProcessAutomation.EntityMetadataInfo.prototype = { DisplayName: null };
Mscrm.ProcessAutomation.ProcessActionEntityJsonWrapper = function() {
    Mscrm.ProcessAutomation.ProcessActionEntityJsonWrapper.initializeBase(this)
};
Mscrm.ProcessAutomation.ProcessActionEntityJsonWrapper.prototype = { IsTransacted: false, UniqueName: null };
Mscrm.ProcessAutomation.ProcessDialogEntityJsonWrapper = function() {
    Mscrm.ProcessAutomation.ProcessDialogEntityJsonWrapper.initializeBase(this)
};
Mscrm.ProcessAutomation.ProcessDialogEntityJsonWrapper.prototype = { IsChildProcess: false, IsOnDemandProcess: false };
Mscrm.ProcessAutomation.ProcessDesignerDataJsonWrapper = function() { this.ProcessCategory = -1 };
Mscrm.ProcessAutomation.ProcessDesignerDataJsonWrapper.get_instance = function() {
    if (!Mscrm.ProcessAutomation.ProcessDesignerDataJsonWrapper
        .$3)
        Mscrm.ProcessAutomation.ProcessDesignerDataJsonWrapper.$3 = Mscrm.Proxies.JQueryProxy
            .parseJson(window.__ProcessAutomation_ProcessJsonData.substr(8));
    return Mscrm.ProcessAutomation.ProcessDesignerDataJsonWrapper.$3
};
Mscrm.ProcessAutomation.ProcessDesignerDataJsonWrapper.set_instance = function(value) {
    Mscrm.ProcessAutomation.ProcessDesignerDataJsonWrapper.$3 = value;
    return value
};
Mscrm.ProcessAutomation.ProcessDesignerDataJsonWrapper
    .prototype = {
        EntityJson: null,
        EntityName: null,
        SerializedEntitiesData: null,
        SerializedStepData: null,
        AdditionalData: null
    };
Mscrm.ProcessAutomation.ProcessEntityJsonWrapper = function() {};
Mscrm.ProcessAutomation.ProcessEntityJsonWrapper
    .prototype = { ProcessId: null, JsonString: null, Description: null, Scope: 0 };
Mscrm.ProcessAutomation.ProcessRuntimeDataJsonWrapper = function() {
    Mscrm.ProcessAutomation.ProcessRuntimeDataJsonWrapper.initializeBase(this)
};
Mscrm.ProcessAutomation.ProcessRuntimeDataJsonWrapper
    .prototype = { RuntimeLogs: null, StatusDisplays: null, ExecutionDetails: null };
Mscrm.ProcessAutomation.LookupValueJsonWrapper = function() {};
Mscrm.ProcessAutomation.LookupValueJsonWrapper.prototype = { Name: null, ID: null, Type: null };
Mscrm.ProcessAutomation.ResourceId = function() {};
Mscrm.ProcessAutomation.RoleJsonWrapper = function() {};
Mscrm.ProcessAutomation.RoleJsonWrapper.prototype = { Name: null, BusinessUnit: null };
Mscrm.ProcessAutomation.StepDisplayInfo = function() {};
Mscrm.ProcessAutomation.StepDisplayInfo.prototype = { DisplayText: null };
Mscrm.ProcessAutomation.WorkflowDesignerDataJsonWrapper = function() {};
Mscrm.ProcessAutomation.WorkflowDesignerDataJsonWrapper.prototype = { WorkflowStatus: null, ScopeOptions: null };
Mscrm.ProcessAutomation.WorkflowRuntimeExecutionDetailsJsonWrapper = function() {};
Mscrm.ProcessAutomation.WorkflowRuntimeExecutionDetailsJsonWrapper
    .prototype = {
        JobOwner: null,
        Regarding: null,
        CreatedOn: null,
        CompletedOn: null,
        RetryCount: 0,
        StartReason: null,
        PostponeUntil: null,
        EntityTypeCode: 0
    };
Mscrm.ProcessAutomation.WorkflowRuntimeLog = function() {};
Mscrm.ProcessAutomation.WorkflowRuntimeLog.prototype = {
    StepName: null,
    ActivityName: null,
    Message: null,
    Status: 0,
    ErrorCode: 0,
    ErrorMessage: null
};
Mscrm.ProcessAutomation.WorkflowEntityJsonWrapper = function() {
    Mscrm.ProcessAutomation.WorkflowEntityJsonWrapper.initializeBase(this)
};
Mscrm.ProcessAutomation.WorkflowEntityJsonWrapper
    .prototype = {
        IsChildProcess: false,
        IsOnDemandProcess: false,
        TriggerOnCreate: false,
        TriggerOnDelete: false,
        TriggerOnUpdate: null
    };
Type.registerNamespace("Mscrm.Automation");
Mscrm.Automation
    .ProcessDialogRuntimeStatusCodeProviderFactory = function() {
        Mscrm.Automation.ProcessDialogRuntimeStatusCodeProviderFactory.initializeBase(this)
    };
Mscrm.Automation.ProcessDialogRuntimeStatusCodeProviderFactory.prototype = {
    getProvider: function(activityType) {
        switch (activityType) {
        case "dialog_root":
            return new Mscrm.ProcessAutomation.WorkflowRuntimeRootActivityStatusCodeProvider;
        default:
            return Mscrm.Automation.WorkflowRuntimeStatusCodeProviderFactory.prototype.getProvider
                .call(this, activityType)
        }
    }
};
Mscrm.Automation.ExecutionLineConnectorProvider = function(parentModel, childModel) {
    Mscrm.Automation.ExecutionLineConnectorProvider.initializeBase(this, [parentModel, childModel])
};
Mscrm.Automation.ExecutionLineConnectorProvider.prototype = {
    getLineConnectors: function() {
        var $v_0 = Mscrm.Automation.AutomationControl.instance.settings.getLayoutProperties(),
            $v_1 = $v_0.getLineWidth();
        $v_0.setLineWidth($v_1 * 2);
        var $v_2 = Mscrm.Automation.DefaultLineConnectorProvider.prototype.getLineConnectors.call(this);
        $v_0.setLineWidth($v_1);
        return $v_2
    }
};
Mscrm.Automation.DeleteFlyoutItemClickHandler = function() {
    Mscrm.Automation.DeleteFlyoutItemClickHandler.initializeBase(this)
};
Mscrm.Automation.DeleteFlyoutItemClickHandler.prototype = {
    confirmAction: function() { return confirm("Do you want to delete?") }
};
Mscrm.Automation.ProcessContextFlyoutContent = function(activity) {
    Mscrm.Automation.ProcessContextFlyoutContent.initializeBase(this, [activity]);
    this.optionsPropertyList = new Array(0);
    var $v_0 = new Mscrm.Automation.DeleteFlyoutItemClickHandler, $$t_2 = $v_0;
    Array.add(this.optionsPropertyList,
        new Mscrm.Automation.ContextFlyoutItem("delete",
            "Delete",
            $$t_2.$$d_execute || ($$t_2.$$d_execute = Function.createDelegate($$t_2, $$t_2.execute))))
};
Mscrm.Automation.ProcessLabelPhraseDictionaryCollection = function() {
    Mscrm.Automation.ProcessLabelPhraseDictionaryCollection.initializeBase(this)
};
Mscrm.Automation.ProcessLabelPhraseDictionaryCollection
    .prototype = {
        GetLabelPhrase: function() { return window.__ProcessAutomation_ClientResources },
        GetLabel: function(resourceId) { return window.__ProcessAutomation_ClientResources[resourceId] }
    };
Mscrm.Automation.ProcessStatusCodeProviderFactory = function() {
    Mscrm.Automation.ProcessStatusCodeProviderFactory.initializeBase(this)
};
Mscrm.Automation.ProcessStatusCodeProviderFactory
    .prototype = {
        getProvider: function(activityType) { return new Mscrm.ProcessAutomation.ProcessStatusCodeProvider }
    };
Mscrm.Automation.RuntimeExecutionPathLayoutProperties = function() {
    Mscrm.Automation.RuntimeExecutionPathLayoutProperties.initializeBase(this);
    this.setLineWidth(this.getLineWidth() * 2)
};
Mscrm.Automation
    .ProcessPropertyPanelActionHandlerProvider = function() {
        Mscrm.Automation.ProcessPropertyPanelActionHandlerProvider.initializeBase(this)
    };
Mscrm.Automation.ProcessPropertyPanelActionHandlerProvider.get_instance = function() {
    if (!Mscrm.Automation.ProcessPropertyPanelActionHandlerProvider
        .$j)
        Mscrm.Automation.ProcessPropertyPanelActionHandlerProvider.$j = new Mscrm.Automation
            .ProcessPropertyPanelActionHandlerProvider;
    return Mscrm.Automation.ProcessPropertyPanelActionHandlerProvider.$j
};
Mscrm.Automation.ProcessPropertyPanelActionHandlerProvider
    .prototype = {
        createKeyDownHandler: function(currentActivity) {
            return new Mscrm.Automation.ProcessPropertyPanelViewKeyDownHandler
        }
    };
Mscrm.Automation.ProcessPropertyPanelViewKeyDownHandler = function() {};
Mscrm.Automation.ProcessPropertyPanelViewKeyDownHandler
    .prototype = {
        keyDown: function(element, keyEvent) {
            if (keyEvent.which === 27)
                Mscrm.Automation.ProcessActivityFocusHandler.$17 &&
                    Mscrm.Automation.ProcessActivityFocusHandler.$17.setFocus()
        }
    };
Mscrm.Automation.ProcessActivityFocusHandler = function() {};
Mscrm.Automation.ProcessActivityFocusHandler
    .get_previouslyFocusedTile = function() { return Mscrm.Automation.ProcessActivityFocusHandler.$17 };
Mscrm.Automation.ProcessActivityFocusHandler.set_previouslyFocusedTile = function(value) {
    Mscrm.Automation.ProcessActivityFocusHandler.$17 = value;
    return value
};
Mscrm.Automation.ProcessActivityFocusHandler.prototype = {
    focus: function(element) {
        Mscrm.Automation.ProcessActivityFocusHandler.$17 = new Mscrm.Proxies.JQueryObjectProxy(element);
        element.addClass("hoverOverDroppable")
    }
};
Mscrm.Automation.ProcessActivityKeyDownHandler = function(activity) { this.$2D_0 = activity };
Mscrm.Automation.ProcessActivityKeyDownHandler.prototype = {
    $2D_0: null,
    keyDown: function(element, keyEvent) {
        if (keyEvent.which === 13) {
            Mscrm.Automation.AutomationControl.instance.globalEventManager.trigger("hideMenus");
            Mscrm.Automation.AutomationControl.instance.globalEventManager.trigger("hideContextMenus");
            Mscrm.Automation.AutomationControl.instance.updateCurrentModel(this.$2D_0);
            keyEvent.ctrlKey && $P_CRM("#process_prop").focus();
            keyEvent.stopPropagation()
        }
    }
};
Mscrm.Automation.ProcessSlotHandlerProvider = function() {
    Mscrm.Automation.ProcessSlotHandlerProvider.initializeBase(this)
};
Mscrm.Automation.ProcessSlotHandlerProvider.prototype = {
    createFactory: function(slotType) {
        switch (slotType) {
        case 0:
            return Mscrm.Automation.ProcessSlotTileHolderHandlerFactory.get_instance();
        default:
            return Mscrm.Automation.DefaultSlotHandlerProvider.prototype.createFactory.call(this, slotType)
        }
    }
};
Mscrm.Automation.ProcessSlotTileHolderHandlerFactory = function() {
    Mscrm.Automation.ProcessSlotTileHolderHandlerFactory.initializeBase(this)
};
Mscrm.Automation.ProcessSlotTileHolderHandlerFactory.get_instance = function() {
    if (!Mscrm.Automation.ProcessSlotTileHolderHandlerFactory
        .$j)
        Mscrm.Automation.ProcessSlotTileHolderHandlerFactory.$j = new Mscrm.Automation
            .ProcessSlotTileHolderHandlerFactory;
    return Mscrm.Automation.ProcessSlotTileHolderHandlerFactory.$j
};
Mscrm.Automation.ProcessSlotTileHolderHandlerFactory.prototype = {
    createDropHandler: function(currentActivity) {
        switch (currentActivity.getActivityTypeId()) {
        case "empty":
            return Mscrm.Automation.DefaultSlotTileHolderHandlerFactory.prototype.createDropHandler
                .call(this, currentActivity);
        default:
            return new Mscrm.ProcessAutomation.ProcessDefaultActivityDropHandler(currentActivity)
        }
    },
    createKeyDownHandler: function(currentActivity) {
        return new Mscrm.Automation.ProcessActivityKeyDownHandler(currentActivity)
    },
    createFocusHandler: function(currentActivity) { return new Mscrm.Automation.ProcessActivityFocusHandler },
    createContextHandler: function(currentActivity) {
        return new Mscrm.ProcessAutomation.ProcessContextFlyoutHandler(currentActivity)
    }
};
Mscrm.Automation
    .ProcessActionRuntimeStatusCodeProviderFactory = function() {
        Mscrm.Automation.ProcessActionRuntimeStatusCodeProviderFactory.initializeBase(this)
    };
Mscrm.Automation.ProcessActionRuntimeStatusCodeProviderFactory.prototype = {
    getProvider: function(activityType) {
        switch (activityType) {
        case "ac_root":
            return new Mscrm.ProcessAutomation.WorkflowRuntimeRootActivityStatusCodeProvider;
        default:
            return Mscrm.Automation.WorkflowRuntimeStatusCodeProviderFactory.prototype.getProvider
                .call(this, activityType)
        }
    }
};
Mscrm.Automation
    .WorkflowRuntimeLineConnectorProviderFactory = function() {
        Mscrm.Automation.WorkflowRuntimeLineConnectorProviderFactory.initializeBase(this)
    };
Mscrm.Automation.WorkflowRuntimeLineConnectorProviderFactory.prototype = {
    $U_1: null,
    getLineConnectorProvider: function(parentActivity, childActivity) {
        if (IsNull(this.$U_1)) this.$U_1 = parentActivity;
        if (this.$U_1 === parentActivity && this.$1u_1(parentActivity) && this.$1u_1(childActivity)) {
            this.$U_1 = childActivity;
            return new Mscrm.Automation.ExecutionLineConnectorProvider(parentActivity, childActivity)
        }
        return Mscrm.Automation.DefaultLineConnectorProviderFactory.prototype.getLineConnectorProvider
            .call(this, parentActivity, childActivity)
    },
    $1u_1: function($p0) {
        var $v_0 = $p0;
        return $v_0.get_status().code !== -1
    }
};
Mscrm.Automation
    .WorkflowRuntimeStatusCodeProviderFactory = function() {
        Mscrm.Automation.WorkflowRuntimeStatusCodeProviderFactory.initializeBase(this)
    };
Mscrm.Automation.WorkflowRuntimeStatusCodeProviderFactory.prototype = {
    getProvider: function(activityType) {
        switch (activityType) {
        case "wf_root":
            return new Mscrm.ProcessAutomation.WorkflowRuntimeRootActivityStatusCodeProvider;
        case "condition":
            return new Mscrm.ProcessAutomation.WorkflowRuntimeConditionActivityStatusCodeProvider;
        default:
            return new Mscrm.ProcessAutomation.WorkflowRuntimeDefaultStatusCodeProvider
        }
    }
};
Mscrm.ProcessAutomation.ProcessInitializer.registerClass("Mscrm.ProcessAutomation.ProcessInitializer",
    null,
    Mscrm.ProcessAutomation.IProcessInitializer);
Mscrm.ProcessAutomation.ActionInitializer.registerClass("Mscrm.ProcessAutomation.ActionInitializer",
    Mscrm.ProcessAutomation.ProcessInitializer);
Mscrm.ProcessAutomation.ActionRuntimeInitializer
    .registerClass("Mscrm.ProcessAutomation.ActionRuntimeInitializer", Mscrm.ProcessAutomation.ActionInitializer);
Mscrm.ProcessAutomation.BusinessProcessActivityType
    .registerClass("Mscrm.ProcessAutomation.BusinessProcessActivityType");
Mscrm.ProcessAutomation.BusinessProcessCssClass.registerClass("Mscrm.ProcessAutomation.BusinessProcessCssClass");
Mscrm.ProcessAutomation.Settings.registerClass("Mscrm.ProcessAutomation.Settings",
    Mscrm.Automation.DefaultSettings,
    Mscrm.ProcessAutomation.IProcessSettings,
    Mscrm.Automation.ISettings);
Mscrm.ProcessAutomation.BusinessProcessSettings
    .registerClass("Mscrm.ProcessAutomation.BusinessProcessSettings", Mscrm.ProcessAutomation.Settings);
Mscrm.ProcessAutomation.ProcessToUIActivityCollectionVisitor
    .registerClass("Mscrm.ProcessAutomation.ProcessToUIActivityCollectionVisitor",
        Microsoft.Crm.Workflow.ObjectModel.StepVisitorBase,
        Mscrm.ProcessAutomation.IProcessToUIActivityCollectionVisitor);
Mscrm.ProcessAutomation.BusinessProcessToUIActivityCollectionVisitor
    .registerClass("Mscrm.ProcessAutomation.BusinessProcessToUIActivityCollectionVisitor",
        Mscrm.ProcessAutomation.ProcessToUIActivityCollectionVisitor);
Mscrm.ProcessAutomation.DefaultObjectGeneratorFactory
    .registerClass("Mscrm.ProcessAutomation.DefaultObjectGeneratorFactory",
        null,
        Mscrm.ProcessAutomation.IDefaultObjectGeneratorFactory);
Mscrm.ProcessAutomation.DefaultBusinessProcessObjectGeneratorFactory
    .registerClass("Mscrm.ProcessAutomation.DefaultBusinessProcessObjectGeneratorFactory",
        Mscrm.ProcessAutomation.DefaultObjectGeneratorFactory);
Mscrm.ProcessAutomation.DefaultStepGeneratorBase
    .registerClass("Mscrm.ProcessAutomation.DefaultStepGeneratorBase",
        null,
        Mscrm.ProcessAutomation.IDefaultStepGenerator);
Mscrm.ProcessAutomation.DefaultStageStepGenerator
    .registerClass("Mscrm.ProcessAutomation.DefaultStageStepGenerator",
        Mscrm.ProcessAutomation.DefaultStepGeneratorBase);
Mscrm.ProcessAutomation.StageRelationship.registerClass("Mscrm.ProcessAutomation.StageRelationship");
Mscrm.ProcessAutomation.ProcessActivityDefinitionFactory
    .registerClass("Mscrm.ProcessAutomation.ProcessActivityDefinitionFactory",
        Mscrm.Automation.DefaultActivityDefinitionFactory);
Mscrm.ProcessAutomation.BusinessProcessActivityDefinitionFactory
    .registerClass("Mscrm.ProcessAutomation.BusinessProcessActivityDefinitionFactory",
        Mscrm.ProcessAutomation.ProcessActivityDefinitionFactory);
Mscrm.ProcessAutomation.ProcessActivityDefinitionModel
    .registerClass("Mscrm.ProcessAutomation.ProcessActivityDefinitionModel",
        Mscrm.Automation.ActivityDefinitionModel,
        Mscrm.ProcessAutomation.IProcessActivityDefinitionModel,
        Mscrm.Automation.IActivityDefinitionModel,
        Backbone.IModel);
Mscrm.ProcessAutomation.BranchActivity.registerClass("Mscrm.ProcessAutomation.BranchActivity",
    Mscrm.ProcessAutomation.ProcessActivityDefinitionModel);
Mscrm.ProcessAutomation.ConditionActivity.registerClass("Mscrm.ProcessAutomation.ConditionActivity",
    Mscrm.ProcessAutomation.BranchActivity);
Mscrm.ProcessAutomation.BusinessProcessConditionActivity
    .registerClass("Mscrm.ProcessAutomation.BusinessProcessConditionActivity",
        Mscrm.ProcessAutomation.ConditionActivity,
        Mscrm.ProcessAutomation.IBusinessProcessConditionActivity,
        Mscrm.ProcessAutomation.IProcessActivityDefinitionModel,
        Mscrm.Automation.IActivityDefinitionModel,
        Backbone.IModel);
Mscrm.ProcessAutomation.BusinessProcessRootActivity
    .registerClass("Mscrm.ProcessAutomation.BusinessProcessRootActivity",
        Mscrm.ProcessAutomation.ProcessActivityDefinitionModel);
Mscrm.ProcessAutomation.StageActivity.registerClass("Mscrm.ProcessAutomation.StageActivity",
    Mscrm.ProcessAutomation.ProcessActivityDefinitionModel,
    Mscrm.ProcessAutomation.IStageActivity,
    Mscrm.ProcessAutomation.IProcessActivityDefinitionModel,
    Mscrm.Automation.IActivityDefinitionModel,
    Backbone.IModel);
Mscrm.ProcessAutomation.ProcessLibraryNodesFactory
    .registerClass("Mscrm.ProcessAutomation.ProcessLibraryNodesFactory", Mscrm.Automation.DefaultLibraryNodesFactory);
Mscrm.ProcessAutomation.BusinessProcessLibraryNodesFactory
    .registerClass("Mscrm.ProcessAutomation.BusinessProcessLibraryNodesFactory",
        Mscrm.ProcessAutomation.ProcessLibraryNodesFactory);
Mscrm.ProcessAutomation.ProcessTileInformationFactory
    .registerClass("Mscrm.ProcessAutomation.ProcessTileInformationFactory",
        Mscrm.Automation.DefaultTileInformationFactory);
Mscrm.ProcessAutomation.BusinessProcessTileInformationFactory
    .registerClass("Mscrm.ProcessAutomation.BusinessProcessTileInformationFactory",
        Mscrm.ProcessAutomation.ProcessTileInformationFactory);
Mscrm.ProcessAutomation.BusinessProcessRootActivityTileInformation
    .registerClass("Mscrm.ProcessAutomation.BusinessProcessRootActivityTileInformation",
        Mscrm.Automation.AbstractActivityTileInformation);
Mscrm.ProcessAutomation.StageActivityTileInformation
    .registerClass("Mscrm.ProcessAutomation.StageActivityTileInformation",
        Mscrm.Automation.AbstractActivityTileInformation);
Mscrm.ProcessAutomation.ValidationStep.registerClass("Mscrm.ProcessAutomation.ValidationStep",
    null,
    Mscrm.ProcessAutomation.IValidationStep);
Mscrm.ProcessAutomation.ValidateEmptyStageStep
    .registerClass("Mscrm.ProcessAutomation.ValidateEmptyStageStep", Mscrm.ProcessAutomation.ValidationStep);
Mscrm.ProcessAutomation.ValidateConditionHasValidParentStage
    .registerClass("Mscrm.ProcessAutomation.ValidateConditionHasValidParentStage",
        Mscrm.ProcessAutomation.ValidationStep);
Mscrm.ProcessAutomation.ProcessValidator.registerClass("Mscrm.ProcessAutomation.ProcessValidator",
    null,
    Mscrm.ProcessAutomation.IProcessValidator);
Mscrm.ProcessAutomation.BusinessProcessValidator
    .registerClass("Mscrm.ProcessAutomation.BusinessProcessValidator", Mscrm.ProcessAutomation.ProcessValidator);
Mscrm.ProcessAutomation.ViewModel.registerClass("Mscrm.ProcessAutomation.ViewModel",
    null,
    Mscrm.ProcessAutomation.IViewModel,
    Sys.IDisposable,
    Sys.INotifyPropertyChange);
Mscrm.ProcessAutomation.PropertyEditViewModel.registerClass("Mscrm.ProcessAutomation.PropertyEditViewModel",
    Mscrm.ProcessAutomation.ViewModel,
    Mscrm.ProcessAutomation.IPropertyEditViewModel,
    Mscrm.ProcessAutomation.IViewModel,
    Sys.IDisposable,
    Sys.INotifyPropertyChange);
Mscrm.ProcessAutomation.PropertyEditViewModelWithCommandBar
    .registerClass("Mscrm.ProcessAutomation.PropertyEditViewModelWithCommandBar",
        Mscrm.ProcessAutomation.PropertyEditViewModel,
        Mscrm.ProcessAutomation.IPropertyViewModelWithCommandBar);
Mscrm.ProcessAutomation.BusinessProcessConditionEditPropertyViewModel
    .registerClass("Mscrm.ProcessAutomation.BusinessProcessConditionEditPropertyViewModel",
        Mscrm.ProcessAutomation.PropertyEditViewModelWithCommandBar,
        Mscrm.ProcessAutomation.IBusinessProcessConditionEditPropertyViewModel,
        Mscrm.ProcessAutomation.IPropertyViewModelWithCommandBar,
        Mscrm.ProcessAutomation.IPropertyEditViewModel,
        Mscrm.ProcessAutomation.IViewModel,
        Sys.IDisposable,
        Sys.INotifyPropertyChange);
Mscrm.ProcessAutomation.PropertyViewModel.registerClass("Mscrm.ProcessAutomation.PropertyViewModel",
    Mscrm.ProcessAutomation.ViewModel,
    Mscrm.ProcessAutomation.IPropertyViewModel,
    Mscrm.ProcessAutomation.IViewModel,
    Sys.IDisposable,
    Sys.INotifyPropertyChange);
Mscrm.ProcessAutomation.ConditionPropertyViewModel
    .registerClass("Mscrm.ProcessAutomation.ConditionPropertyViewModel",
        Mscrm.ProcessAutomation.PropertyViewModel,
        Mscrm.ProcessAutomation.IConditionPropertyViewModel,
        Mscrm.ProcessAutomation.IPropertyViewModel,
        Mscrm.ProcessAutomation.IViewModel,
        Sys.IDisposable,
        Sys.INotifyPropertyChange);
Mscrm.ProcessAutomation.BusinessProcessConditionPropertyViewModel
    .registerClass("Mscrm.ProcessAutomation.BusinessProcessConditionPropertyViewModel",
        Mscrm.ProcessAutomation.ConditionPropertyViewModel,
        Mscrm.ProcessAutomation.IBusinessProcessConditionPropertyViewModel,
        Mscrm.ProcessAutomation.IPropertyViewModel,
        Mscrm.ProcessAutomation.IViewModel,
        Sys.IDisposable,
        Sys.INotifyPropertyChange,
        Mscrm.ProcessAutomation.IConditionPropertyViewModel);
Mscrm.ProcessAutomation.ConditionDisplayValueBuilder
    .registerClass("Mscrm.ProcessAutomation.ConditionDisplayValueBuilder",
        null,
        Mscrm.ProcessAutomation.IConditionDisplayValueBuilder);
Mscrm.ProcessAutomation.PropertyViewModelFactory
    .registerClass("Mscrm.ProcessAutomation.PropertyViewModelFactory",
        null,
        Mscrm.ProcessAutomation.IPropertyViewModelFactory);
Mscrm.ProcessAutomation.BusinessProcessPropertyViewModelFactory
    .registerClass("Mscrm.ProcessAutomation.BusinessProcessPropertyViewModelFactory",
        Mscrm.ProcessAutomation.PropertyViewModelFactory);
Mscrm.ProcessAutomation.ProcessDesignerViewModel
    .registerClass("Mscrm.ProcessAutomation.ProcessDesignerViewModel",
        Mscrm.ProcessAutomation.ViewModel,
        Mscrm.ProcessAutomation.IProcessDesignerViewModel,
        Mscrm.ProcessAutomation.IViewModel,
        Sys.IDisposable,
        Sys.INotifyPropertyChange);
Mscrm.ProcessAutomation.BusinessProcessDesignerViewModel
    .registerClass("Mscrm.ProcessAutomation.BusinessProcessDesignerViewModel",
        Mscrm.ProcessAutomation.ProcessDesignerViewModel);
Mscrm.ProcessAutomation.HtmlBuilder.registerClass("Mscrm.ProcessAutomation.HtmlBuilder",
    null,
    Mscrm.ProcessAutomation.IHtmlBuilder);
Mscrm.ProcessAutomation.ConditionBranchHtmlBuilder
    .registerClass("Mscrm.ProcessAutomation.ConditionBranchHtmlBuilder",
        Mscrm.ProcessAutomation.HtmlBuilder,
        Mscrm.ProcessAutomation.IConditionBranchHtmlBuilder,
        Mscrm.ProcessAutomation.IHtmlBuilder);
Mscrm.ProcessAutomation.EditableConditionBusinessProcessPropertyHtmlBuilder
    .registerClass("Mscrm.ProcessAutomation.EditableConditionBusinessProcessPropertyHtmlBuilder",
        Mscrm.ProcessAutomation.HtmlBuilder,
        Mscrm.ProcessAutomation.IEditableConditionBusinessProcessPropertyHtmlBuilder,
        Mscrm.ProcessAutomation.IHtmlBuilder);
Mscrm.ProcessAutomation.ProcessPropertyPanelView
    .registerClass("Mscrm.ProcessAutomation.ProcessPropertyPanelView", Mscrm.Automation.DefaultPropertyPanelView);
Mscrm.ProcessAutomation.ProcessPropertyPanelViewWithCommandBar
    .registerClass("Mscrm.ProcessAutomation.ProcessPropertyPanelViewWithCommandBar",
        Mscrm.ProcessAutomation.ProcessPropertyPanelView,
        Mscrm.ProcessAutomation.IProcessPropertyPanelViewWithCommandBar,
        Mscrm.Automation.IPropertyPanelView,
        Backbone.IView);
Mscrm.ProcessAutomation.EditableConditionBusinessProcessPropertyPanelView
    .registerClass("Mscrm.ProcessAutomation.EditableConditionBusinessProcessPropertyPanelView",
        Mscrm.ProcessAutomation.ProcessPropertyPanelViewWithCommandBar);
Mscrm.ProcessAutomation.CommandBarViewModel.registerClass("Mscrm.ProcessAutomation.CommandBarViewModel",
    Mscrm.ProcessAutomation.ViewModel,
    Mscrm.ProcessAutomation.ICommandBarViewModel,
    Mscrm.ProcessAutomation.IViewModel,
    Sys.IDisposable,
    Sys.INotifyPropertyChange);
Mscrm.ProcessAutomation.BusinessProcessCommandBarViewModel
    .registerClass("Mscrm.ProcessAutomation.BusinessProcessCommandBarViewModel",
        Mscrm.ProcessAutomation.CommandBarViewModel);
Mscrm.ProcessAutomation.ProcessPropertyPanelScrollableCssClassProvider
    .registerClass("Mscrm.ProcessAutomation.ProcessPropertyPanelScrollableCssClassProvider",
        null,
        Mscrm.ProcessAutomation.IPropertyPanelScrollableCssClassProvider);
Mscrm.ProcessAutomation.BusinessProcessPropertyPanelScrollableCssClassProvider
    .registerClass("Mscrm.ProcessAutomation.BusinessProcessPropertyPanelScrollableCssClassProvider",
        Mscrm.ProcessAutomation.ProcessPropertyPanelScrollableCssClassProvider,
        Mscrm.ProcessAutomation.IPropertyPanelScrollableCssClassProvider);
Mscrm.ProcessAutomation.ReadProcessPropertyPanelView
    .registerClass("Mscrm.ProcessAutomation.ReadProcessPropertyPanelView",
        Mscrm.ProcessAutomation.ProcessPropertyPanelView);
Mscrm.ProcessAutomation.ReadBusinessProcessPropertyPanelView
    .registerClass("Mscrm.ProcessAutomation.ReadBusinessProcessPropertyPanelView",
        Mscrm.ProcessAutomation.ReadProcessPropertyPanelView);
Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent
    .registerClass("Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent",
        null,
        Mscrm.ProcessAutomation.IPropertyPanelViewComponent,
        Sys.IDisposable);
Mscrm.ProcessAutomation.BusinessProcessRootBodyPropertyPanelViewComponent
    .registerClass("Mscrm.ProcessAutomation.BusinessProcessRootBodyPropertyPanelViewComponent",
        Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent,
        Mscrm.ProcessAutomation.IPropertyPanelViewComponent,
        Sys.IDisposable);
Mscrm.ProcessAutomation.StageBodyPropertyPanelViewComponent
    .registerClass("Mscrm.ProcessAutomation.StageBodyPropertyPanelViewComponent",
        Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent,
        Mscrm.ProcessAutomation.IPropertyPanelViewComponent,
        Sys.IDisposable);
Mscrm.ProcessAutomation.ProcessBodyPropertyPanelViewComponentFactory
    .registerClass("Mscrm.ProcessAutomation.ProcessBodyPropertyPanelViewComponentFactory",
        null,
        Mscrm.ProcessAutomation.IPropertyPanelViewComponentFactory);
Mscrm.ProcessAutomation.BusinessProcessBodyPropertyPanelViewComponentFactory
    .registerClass("Mscrm.ProcessAutomation.BusinessProcessBodyPropertyPanelViewComponentFactory",
        Mscrm.ProcessAutomation.ProcessBodyPropertyPanelViewComponentFactory,
        Mscrm.ProcessAutomation.IPropertyPanelViewComponentFactory);
Mscrm.ProcessAutomation.ProcessHeaderPropertyPanelViewComponentFactory
    .registerClass("Mscrm.ProcessAutomation.ProcessHeaderPropertyPanelViewComponentFactory",
        null,
        Mscrm.ProcessAutomation.IPropertyPanelViewComponentFactory);
Mscrm.ProcessAutomation.BusinessProcessHeaderPropertyPanelViewComponentFactory
    .registerClass("Mscrm.ProcessAutomation.BusinessProcessHeaderPropertyPanelViewComponentFactory",
        Mscrm.ProcessAutomation.ProcessHeaderPropertyPanelViewComponentFactory);
Mscrm.ProcessAutomation.ProcessPropertyPanelViewComponentProvider
    .registerClass("Mscrm.ProcessAutomation.ProcessPropertyPanelViewComponentProvider",
        null,
        Mscrm.ProcessAutomation.IPropertyPanelViewComponentProvider);
Mscrm.ProcessAutomation.BusinessProcessPropertyPanelViewComponentProvider
    .registerClass("Mscrm.ProcessAutomation.BusinessProcessPropertyPanelViewComponentProvider",
        Mscrm.ProcessAutomation.ProcessPropertyPanelViewComponentProvider,
        Mscrm.ProcessAutomation.IPropertyPanelViewComponentProvider);
Mscrm.ProcessAutomation.BusinessProcessConditionHeaderPropertyPanelViewComponent
    .registerClass("Mscrm.ProcessAutomation.BusinessProcessConditionHeaderPropertyPanelViewComponent",
        Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent);
Mscrm.ProcessAutomation.StageHeaderPropertyPanelViewComponent
    .registerClass("Mscrm.ProcessAutomation.StageHeaderPropertyPanelViewComponent",
        Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent,
        Mscrm.ProcessAutomation.IPropertyPanelViewComponent,
        Sys.IDisposable);
Mscrm.ProcessAutomation.BusinessProcessRootHeaderPropertyPanelViewComponent
    .registerClass("Mscrm.ProcessAutomation.BusinessProcessRootHeaderPropertyPanelViewComponent",
        Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent,
        Mscrm.ProcessAutomation.IPropertyPanelViewComponent,
        Sys.IDisposable);
Mscrm.ProcessAutomation.ValidateDroppedConditionHasValidParentStage
    .registerClass("Mscrm.ProcessAutomation.ValidateDroppedConditionHasValidParentStage",
        Mscrm.Automation.AbstractDropValidationStep);
Mscrm.ProcessAutomation.BusinessProcessDropValidator
    .registerClass("Mscrm.ProcessAutomation.BusinessProcessDropValidator", Mscrm.Automation.DefaultDropValidator);
Mscrm.ProcessAutomation.View.registerClass("Mscrm.ProcessAutomation.View",
    null,
    Mscrm.ProcessAutomation.IView,
    Sys.IDisposable);
Mscrm.ProcessAutomation.ProcessBodyView.registerClass("Mscrm.ProcessAutomation.ProcessBodyView",
    Mscrm.ProcessAutomation.View,
    Mscrm.ProcessAutomation.IProcessBodyView,
    Mscrm.ProcessAutomation.IView,
    Sys.IDisposable);
Mscrm.ProcessAutomation.BusinessProcessBodyView
    .registerClass("Mscrm.ProcessAutomation.BusinessProcessBodyView", Mscrm.ProcessAutomation.ProcessBodyView);
Mscrm.ProcessAutomation.ProcessDesignerView.registerClass("Mscrm.ProcessAutomation.ProcessDesignerView",
    Mscrm.ProcessAutomation.View,
    Mscrm.ProcessAutomation.IProcessDesignerView,
    Mscrm.ProcessAutomation.IView,
    Sys.IDisposable);
Mscrm.ProcessAutomation.BusinessProcessDesignerView
    .registerClass("Mscrm.ProcessAutomation.BusinessProcessDesignerView", Mscrm.ProcessAutomation.ProcessDesignerView);
Mscrm.ProcessAutomation.ProcessHeaderView.registerClass("Mscrm.ProcessAutomation.ProcessHeaderView",
    Mscrm.ProcessAutomation.View,
    Mscrm.ProcessAutomation.IProcessHeaderView,
    Mscrm.ProcessAutomation.IView,
    Sys.IDisposable);
Mscrm.ProcessAutomation.BusinessProcessHeaderView
    .registerClass("Mscrm.ProcessAutomation.BusinessProcessHeaderView", Mscrm.ProcessAutomation.ProcessHeaderView);
Mscrm.ProcessAutomation.ProcessPropertyViewFactory
    .registerClass("Mscrm.ProcessAutomation.ProcessPropertyViewFactory", Mscrm.Automation.AbstractPropertyViewFactory);
Mscrm.ProcessAutomation.BusinessProcessPropertyViewFactory
    .registerClass("Mscrm.ProcessAutomation.BusinessProcessPropertyViewFactory",
        Mscrm.ProcessAutomation.ProcessPropertyViewFactory);
Mscrm.ProcessAutomation.CommandBarView.registerClass("Mscrm.ProcessAutomation.CommandBarView",
    Mscrm.ProcessAutomation.View);
Mscrm.ProcessAutomation.BusinessProcessCommandBarView
    .registerClass("Mscrm.ProcessAutomation.BusinessProcessCommandBarView", Mscrm.ProcessAutomation.CommandBarView);
Mscrm.ProcessAutomation.BusinessProcessSaveCommand
    .registerClass("Mscrm.ProcessAutomation.BusinessProcessSaveCommand", null, Mscrm.Automation.ICommand);
Mscrm.ProcessAutomation.ProcessAutomationControl
    .registerClass("Mscrm.ProcessAutomation.ProcessAutomationControl",
        Mscrm.Automation.AutomationControl,
        Mscrm.ProcessAutomation.IProcessAutomationControl,
        Mscrm.Automation.IAutomationControl);
Mscrm.ProcessAutomation.BusinessProcessAutomationControl
    .registerClass("Mscrm.ProcessAutomation.BusinessProcessAutomationControl",
        Mscrm.ProcessAutomation.ProcessAutomationControl);
Mscrm.ProcessAutomation.BusinessProcessInitializer
    .registerClass("Mscrm.ProcessAutomation.BusinessProcessInitializer", Mscrm.ProcessAutomation.ProcessInitializer);
Mscrm.ProcessAutomation.WorkflowAutomationControl
    .registerClass("Mscrm.ProcessAutomation.WorkflowAutomationControl",
        Mscrm.ProcessAutomation.ProcessAutomationControl);
Mscrm.ProcessAutomation.ProcessDialogAutomationControl
    .registerClass("Mscrm.ProcessAutomation.ProcessDialogAutomationControl",
        Mscrm.ProcessAutomation.WorkflowAutomationControl);
Mscrm.ProcessAutomation.ProcessDialogInitializer
    .registerClass("Mscrm.ProcessAutomation.ProcessDialogInitializer", Mscrm.ProcessAutomation.ProcessInitializer);
Mscrm.ProcessAutomation.ProcessDialogRuntimeAutomationControl
    .registerClass("Mscrm.ProcessAutomation.ProcessDialogRuntimeAutomationControl",
        Mscrm.ProcessAutomation.ProcessDialogAutomationControl);
Mscrm.ProcessAutomation.ProcessDialogRuntimeInitializer
    .registerClass("Mscrm.ProcessAutomation.ProcessDialogRuntimeInitializer",
        Mscrm.ProcessAutomation.ProcessDialogInitializer);
Mscrm.ProcessAutomation.ProcessDialogActivityType.registerClass("Mscrm.ProcessAutomation.ProcessDialogActivityType");
Mscrm.ProcessAutomation.ProcessDialogCssClass.registerClass("Mscrm.ProcessAutomation.ProcessDialogCssClass");
Mscrm.ProcessAutomation.WorkflowSettings.registerClass("Mscrm.ProcessAutomation.WorkflowSettings",
    Mscrm.ProcessAutomation.Settings);
Mscrm.ProcessAutomation.ProcessDialogSettings.registerClass("Mscrm.ProcessAutomation.ProcessDialogSettings",
    Mscrm.ProcessAutomation.WorkflowSettings);
Mscrm.ProcessAutomation.ProcessDialogRuntimeSettings
    .registerClass("Mscrm.ProcessAutomation.ProcessDialogRuntimeSettings",
        Mscrm.ProcessAutomation.ProcessDialogSettings);
Mscrm.ProcessAutomation.WorkflowToUIActivityCollectionVisitor
    .registerClass("Mscrm.ProcessAutomation.WorkflowToUIActivityCollectionVisitor",
        Mscrm.ProcessAutomation.ProcessToUIActivityCollectionVisitor);
Mscrm.ProcessAutomation.ProcessDialogToUIActivityCollectionVisitor
    .registerClass("Mscrm.ProcessAutomation.ProcessDialogToUIActivityCollectionVisitor",
        Mscrm.ProcessAutomation.WorkflowToUIActivityCollectionVisitor);
Mscrm.ProcessAutomation.AssignVariableActivity
    .registerClass("Mscrm.ProcessAutomation.AssignVariableActivity",
        Mscrm.ProcessAutomation.ProcessActivityDefinitionModel);
Mscrm.ProcessAutomation.ChildDialogRootActivity
    .registerClass("Mscrm.ProcessAutomation.ChildDialogRootActivity",
        Mscrm.ProcessAutomation.ProcessActivityDefinitionModel);
Mscrm.ProcessAutomation.WorkflowActivityDefinitionFactory
    .registerClass("Mscrm.ProcessAutomation.WorkflowActivityDefinitionFactory",
        Mscrm.ProcessAutomation.ProcessActivityDefinitionFactory);
Mscrm.ProcessAutomation.ProcessDialogActivityDefinitionFactory
    .registerClass("Mscrm.ProcessAutomation.ProcessDialogActivityDefinitionFactory",
        Mscrm.ProcessAutomation.WorkflowActivityDefinitionFactory);
Mscrm.ProcessAutomation.ProcessDialogPageActivity
    .registerClass("Mscrm.ProcessAutomation.ProcessDialogPageActivity",
        Mscrm.ProcessAutomation.ProcessActivityDefinitionModel);
Mscrm.ProcessAutomation.ProcessDialogRootActivity
    .registerClass("Mscrm.ProcessAutomation.ProcessDialogRootActivity",
        Mscrm.ProcessAutomation.ProcessActivityDefinitionModel);
Mscrm.ProcessAutomation.QueryActivity.registerClass("Mscrm.ProcessAutomation.QueryActivity",
    Mscrm.ProcessAutomation.ProcessActivityDefinitionModel);
Mscrm.ProcessAutomation.AssignVariableActivityTileInformation
    .registerClass("Mscrm.ProcessAutomation.AssignVariableActivityTileInformation",
        Mscrm.Automation.AbstractActivityTileInformation);
Mscrm.ProcessAutomation.ChildDialogActivityTileInformation
    .registerClass("Mscrm.ProcessAutomation.ChildDialogActivityTileInformation",
        Mscrm.Automation.AbstractActivityTileInformation);
Mscrm.ProcessAutomation.PageActivityTileInformation
    .registerClass("Mscrm.ProcessAutomation.PageActivityTileInformation",
        Mscrm.Automation.AbstractActivityTileInformation);
Mscrm.ProcessAutomation.WorkflowTileInformationFactory
    .registerClass("Mscrm.ProcessAutomation.WorkflowTileInformationFactory",
        Mscrm.ProcessAutomation.ProcessTileInformationFactory);
Mscrm.ProcessAutomation.ProcessDialogTileInformationFactory
    .registerClass("Mscrm.ProcessAutomation.ProcessDialogTileInformationFactory",
        Mscrm.ProcessAutomation.WorkflowTileInformationFactory);
Mscrm.ProcessAutomation.QueryActivityTileInformation
    .registerClass("Mscrm.ProcessAutomation.QueryActivityTileInformation",
        Mscrm.Automation.AbstractActivityTileInformation);
Mscrm.ProcessAutomation.WorkflowDesignerViewModel
    .registerClass("Mscrm.ProcessAutomation.WorkflowDesignerViewModel",
        Mscrm.ProcessAutomation.ProcessDesignerViewModel);
Mscrm.ProcessAutomation.ProcessDialogDesignerViewModel
    .registerClass("Mscrm.ProcessAutomation.ProcessDialogDesignerViewModel",
        Mscrm.ProcessAutomation.WorkflowDesignerViewModel);
Mscrm.ProcessAutomation.WorkflowBodyView.registerClass("Mscrm.ProcessAutomation.WorkflowBodyView",
    Mscrm.ProcessAutomation.ProcessBodyView);
Mscrm.ProcessAutomation.ProcessDialogBodyView.registerClass("Mscrm.ProcessAutomation.ProcessDialogBodyView",
    Mscrm.ProcessAutomation.WorkflowBodyView);
Mscrm.ProcessAutomation.WorkflowDesignerView.registerClass("Mscrm.ProcessAutomation.WorkflowDesignerView",
    Mscrm.ProcessAutomation.ProcessDesignerView);
Mscrm.ProcessAutomation.ProcessDialogDesignerView
    .registerClass("Mscrm.ProcessAutomation.ProcessDialogDesignerView", Mscrm.ProcessAutomation.WorkflowDesignerView);
Mscrm.ProcessAutomation.WorkflowPropertyViewFactory
    .registerClass("Mscrm.ProcessAutomation.WorkflowPropertyViewFactory",
        Mscrm.ProcessAutomation.ProcessPropertyViewFactory);
Mscrm.ProcessAutomation.ProcessDialogPropertyViewFactory
    .registerClass("Mscrm.ProcessAutomation.ProcessDialogPropertyViewFactory",
        Mscrm.ProcessAutomation.WorkflowPropertyViewFactory);
Mscrm.ProcessAutomation.ProcessDialogRuntimeBodyView
    .registerClass("Mscrm.ProcessAutomation.ProcessDialogRuntimeBodyView",
        Mscrm.ProcessAutomation.ProcessDialogBodyView);
Mscrm.ProcessAutomation.ProcessDialogRuntimePropertyViewFactory
    .registerClass("Mscrm.ProcessAutomation.ProcessDialogRuntimePropertyViewFactory",
        Mscrm.ProcessAutomation.ProcessDialogPropertyViewFactory);
Mscrm.ProcessAutomation.ProcessDialogRuntimeView
    .registerClass("Mscrm.ProcessAutomation.ProcessDialogRuntimeView",
        Mscrm.ProcessAutomation.ProcessDialogDesignerView);
Mscrm.ProcessAutomation.AssignValueHeaderPropertyPanelViewComponent
    .registerClass("Mscrm.ProcessAutomation.AssignValueHeaderPropertyPanelViewComponent",
        Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent);
Mscrm.ProcessAutomation.ChildDialogHeaderPropertyPanelViewComponent
    .registerClass("Mscrm.ProcessAutomation.ChildDialogHeaderPropertyPanelViewComponent",
        Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent);
Mscrm.ProcessAutomation.PageHeaderPropertyPanelViewComponent
    .registerClass("Mscrm.ProcessAutomation.PageHeaderPropertyPanelViewComponent",
        Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent);
Mscrm.ProcessAutomation.ProcessDialogRootHeaderPropertyPanelViewComponent
    .registerClass("Mscrm.ProcessAutomation.ProcessDialogRootHeaderPropertyPanelViewComponent",
        Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent,
        Mscrm.ProcessAutomation.IPropertyPanelViewComponent,
        Sys.IDisposable);
Mscrm.ProcessAutomation.QueryHeaderPropertyPanelViewComponent
    .registerClass("Mscrm.ProcessAutomation.QueryHeaderPropertyPanelViewComponent",
        Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent);
Mscrm.ProcessAutomation.AssignValueBodyPropertyPanelViewComponent
    .registerClass("Mscrm.ProcessAutomation.AssignValueBodyPropertyPanelViewComponent",
        Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent);
Mscrm.ProcessAutomation.ChildDialogBodyPropertyPanelViewComponent
    .registerClass("Mscrm.ProcessAutomation.ChildDialogBodyPropertyPanelViewComponent",
        Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent);
Mscrm.ProcessAutomation.PageBodyPropertyPanelViewComponent
    .registerClass("Mscrm.ProcessAutomation.PageBodyPropertyPanelViewComponent",
        Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent);
Mscrm.ProcessAutomation.ProcessDialogRootBodyPropertyPanelViewComponent
    .registerClass("Mscrm.ProcessAutomation.ProcessDialogRootBodyPropertyPanelViewComponent",
        Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent,
        Mscrm.ProcessAutomation.IPropertyPanelViewComponent,
        Sys.IDisposable);
Mscrm.ProcessAutomation.QueryBodyPropertyPanelViewComponent
    .registerClass("Mscrm.ProcessAutomation.QueryBodyPropertyPanelViewComponent",
        Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent);
Mscrm.ProcessAutomation.WorkflowPropertyPanelViewComponentProvider
    .registerClass("Mscrm.ProcessAutomation.WorkflowPropertyPanelViewComponentProvider",
        Mscrm.ProcessAutomation.ProcessPropertyPanelViewComponentProvider);
Mscrm.ProcessAutomation.ProcessDialogPropertyPanelViewComponentProvider
    .registerClass("Mscrm.ProcessAutomation.ProcessDialogPropertyPanelViewComponentProvider",
        Mscrm.ProcessAutomation.WorkflowPropertyPanelViewComponentProvider);
Mscrm.ProcessAutomation.ProcessDialogRuntimePropertyPanelViewComponentProvider
    .registerClass("Mscrm.ProcessAutomation.ProcessDialogRuntimePropertyPanelViewComponentProvider",
        Mscrm.ProcessAutomation.ProcessDialogPropertyPanelViewComponentProvider);
Mscrm.ProcessAutomation.WorkflowRuntimeStatusPropertyPanelViewComponentFactory
    .registerClass("Mscrm.ProcessAutomation.WorkflowRuntimeStatusPropertyPanelViewComponentFactory",
        null,
        Mscrm.ProcessAutomation.IPropertyPanelViewComponentFactory);
Mscrm.ProcessAutomation.ProcessDialogRuntimeStatusPropertyPanelViewComponentFactory
    .registerClass("Mscrm.ProcessAutomation.ProcessDialogRuntimeStatusPropertyPanelViewComponentFactory",
        Mscrm.ProcessAutomation.WorkflowRuntimeStatusPropertyPanelViewComponentFactory);
Mscrm.ProcessAutomation.WorkflowBodyPropertyPanelViewComponentFactory
    .registerClass("Mscrm.ProcessAutomation.WorkflowBodyPropertyPanelViewComponentFactory",
        Mscrm.ProcessAutomation.ProcessBodyPropertyPanelViewComponentFactory,
        Mscrm.ProcessAutomation.IPropertyPanelViewComponentFactory);
Mscrm.ProcessAutomation.ProcessDialogBodyPropertyPanelViewComponentFactory
    .registerClass("Mscrm.ProcessAutomation.ProcessDialogBodyPropertyPanelViewComponentFactory",
        Mscrm.ProcessAutomation.WorkflowBodyPropertyPanelViewComponentFactory);
Mscrm.ProcessAutomation.WorkflowHeaderPropertyPanelViewComponentFactory
    .registerClass("Mscrm.ProcessAutomation.WorkflowHeaderPropertyPanelViewComponentFactory",
        Mscrm.ProcessAutomation.ProcessHeaderPropertyPanelViewComponentFactory);
Mscrm.ProcessAutomation.ProcessDialogHeaderPropertyPanelViewComponentFactory
    .registerClass("Mscrm.ProcessAutomation.ProcessDialogHeaderPropertyPanelViewComponentFactory",
        Mscrm.ProcessAutomation.WorkflowHeaderPropertyPanelViewComponentFactory);
Mscrm.ProcessAutomation.WorkflowPropertyPanelScrollableCssClassProvider
    .registerClass("Mscrm.ProcessAutomation.WorkflowPropertyPanelScrollableCssClassProvider",
        Mscrm.ProcessAutomation.ProcessPropertyPanelScrollableCssClassProvider,
        Mscrm.ProcessAutomation.IPropertyPanelScrollableCssClassProvider);
Mscrm.ProcessAutomation.ProcessDialogPropertyPanelScrollableCssClassProvider
    .registerClass("Mscrm.ProcessAutomation.ProcessDialogPropertyPanelScrollableCssClassProvider",
        Mscrm.ProcessAutomation.WorkflowPropertyPanelScrollableCssClassProvider);
Mscrm.ProcessAutomation.AbstractMetadataProvider
    .registerClass("Mscrm.ProcessAutomation.AbstractMetadataProvider",
        null,
        Mscrm.ProcessAutomation.IEntityMetadataProvider);
Mscrm.ProcessAutomation.ProcessObjectModelMetadataProvider
    .registerClass("Mscrm.ProcessAutomation.ProcessObjectModelMetadataProvider",
        null,
        Mscrm.ProcessAutomation.IProcessObjectModelMetadataProvider,
        Microsoft.Crm.Workflow.ObjectModel.IMetadataProvider);
Mscrm.ProcessAutomation.RemoteMetadataProvider
    .registerClass("Mscrm.ProcessAutomation.RemoteMetadataProvider",
        Mscrm.ProcessAutomation.AbstractMetadataProvider,
        Mscrm.ProcessAutomation.IRemoteEntityMetadataProvider,
        Mscrm.ProcessAutomation.IEntityMetadataProvider);
Mscrm.ProcessAutomation.SerializedJsonCacheMetadataProvider
    .registerClass("Mscrm.ProcessAutomation.SerializedJsonCacheMetadataProvider",
        Mscrm.ProcessAutomation.AbstractMetadataProvider);
Mscrm.ProcessAutomation.EntityCacheManager.registerClass("Mscrm.ProcessAutomation.EntityCacheManager",
    null,
    Mscrm.ProcessAutomation.IEntityCacheManager);
Mscrm.ProcessAutomation.EntityMetadata.registerClass("Mscrm.ProcessAutomation.EntityMetadata",
    null,
    Mscrm.ProcessAutomation.IEntityMetadata);
Mscrm.ProcessAutomation.EntityMetadataCache.registerClass("Mscrm.ProcessAutomation.EntityMetadataCache",
    null,
    Mscrm.ProcessAutomation.IEntityMetadataCache);
Mscrm.ProcessAutomation.ActionCommand.registerClass("Mscrm.ProcessAutomation.ActionCommand",
    null,
    Mscrm.ProcessAutomation.IActionCommand,
    Mscrm.Automation.ICommand);
Mscrm.ProcessAutomation.ProcessActivitiesStatusInitializer
    .registerClass("Mscrm.ProcessAutomation.ProcessActivitiesStatusInitializer",
        null,
        Mscrm.ProcessAutomation.IProcessActivitiesStatusInitializer);
Mscrm.ProcessAutomation.ProcessDesignerActivitiesStatusInitializer
    .registerClass("Mscrm.ProcessAutomation.ProcessDesignerActivitiesStatusInitializer",
        Mscrm.ProcessAutomation.ProcessActivitiesStatusInitializer,
        Mscrm.ProcessAutomation.IProcessDesignerActivitiesStatusInitializer,
        Mscrm.ProcessAutomation.IProcessActivitiesStatusInitializer);
Mscrm.ProcessAutomation.ProcessActivityPositionCalculator
    .registerClass("Mscrm.ProcessAutomation.ProcessActivityPositionCalculator",
        Mscrm.Automation.DefaultActivityPositionCalculator);
Mscrm.ProcessAutomation.BranchActivityPositionCalculator
    .registerClass("Mscrm.ProcessAutomation.BranchActivityPositionCalculator",
        Mscrm.ProcessAutomation.ProcessActivityPositionCalculator,
        Mscrm.ProcessAutomation.IPolylineCalculator);
Mscrm.ProcessAutomation.CachedStepDisplayInfoProvider
    .registerClass("Mscrm.ProcessAutomation.CachedStepDisplayInfoProvider",
        null,
        Mscrm.ProcessAutomation.ICachedStepDisplayInfoProvider);
Mscrm.ProcessAutomation.ConditionActivityBranches.registerClass("Mscrm.ProcessAutomation.ConditionActivityBranches");
Mscrm.ProcessAutomation.Constants.registerClass("Mscrm.ProcessAutomation.Constants");
Mscrm.ProcessAutomation.ExecutionLineDecorator
    .registerClass("Mscrm.ProcessAutomation.ExecutionLineDecorator",
        Mscrm.Automation.DefaultLineDecorator,
        Mscrm.Automation.ILineDecorator);
Mscrm.ProcessAutomation.ExecutionTileDecorator
    .registerClass("Mscrm.ProcessAutomation.ExecutionTileDecorator",
        Mscrm.Automation.DefaultTileDecorator,
        Mscrm.Automation.ITileDecorator);
Mscrm.ProcessAutomation.ProcessActivityCollection
    .registerClass("Mscrm.ProcessAutomation.ProcessActivityCollection", Mscrm.Automation.ActivityDefinitionCollection);
Mscrm.ProcessAutomation.ProcessActivityDropController
    .registerClass("Mscrm.ProcessAutomation.ProcessActivityDropController", Mscrm.Automation.ActivityDropController);
Mscrm.ProcessAutomation.ProcessActivityPositionCalculatorFactory
    .registerClass("Mscrm.ProcessAutomation.ProcessActivityPositionCalculatorFactory",
        Mscrm.Automation.DefaultActivityPositionCalculatorFactory);
Mscrm.ProcessAutomation.ProcessActivityType.registerClass("Mscrm.ProcessAutomation.ProcessActivityType");
Mscrm.ProcessAutomation.ProcessConditionActivityPositionCalculator
    .registerClass("Mscrm.ProcessAutomation.ProcessConditionActivityPositionCalculator",
        Mscrm.ProcessAutomation.BranchActivityPositionCalculator);
Mscrm.ProcessAutomation.ProcessContextFlyoutHandler
    .registerClass("Mscrm.ProcessAutomation.ProcessContextFlyoutHandler", Mscrm.Automation.DefaultContextFlyoutHandler);
Mscrm.ProcessAutomation.ProcessCssClass.registerClass("Mscrm.ProcessAutomation.ProcessCssClass");
Mscrm.ProcessAutomation.ProcessFlyoutContentProvider
    .registerClass("Mscrm.ProcessAutomation.ProcessFlyoutContentProvider",
        Mscrm.Automation.DefaultFlyoutContentProvider);
Mscrm.ProcessAutomation.ProcessStatusCodeProvider
    .registerClass("Mscrm.ProcessAutomation.ProcessStatusCodeProvider",
        Mscrm.Automation.DefaultStatusCodeProvider,
        Mscrm.Automation.IStatusCodeProvider);
Mscrm.ProcessAutomation.ProcessStatusMessageResolver
    .registerClass("Mscrm.ProcessAutomation.ProcessStatusMessageResolver",
        Mscrm.Automation.DefaultStatusMessageResolver);
Mscrm.ProcessAutomation.ProcessTree.registerClass("Mscrm.ProcessAutomation.ProcessTree", Mscrm.Automation.ActivityTree);
Mscrm.ProcessAutomation.ProcessWaitActivityPositionCalculator
    .registerClass("Mscrm.ProcessAutomation.ProcessWaitActivityPositionCalculator",
        Mscrm.ProcessAutomation.BranchActivityPositionCalculator);
Mscrm.ProcessAutomation.DataAttributeNames.registerClass("Mscrm.ProcessAutomation.DataAttributeNames");
Mscrm.ProcessAutomation.AttributeType.registerClass("Mscrm.ProcessAutomation.AttributeType");
Mscrm.ProcessAutomation.ReadControlInitializer.registerClass("Mscrm.ProcessAutomation.ReadControlInitializer");
Mscrm.ProcessAutomation.ReadLookupControl.registerClass("Mscrm.ProcessAutomation.ReadLookupControl",
    null,
    Mscrm.ProcessAutomation.IReadLookupControl,
    Mscrm.ProcessAutomation.IReadControl,
    Sys.IDisposable);
Mscrm.ProcessAutomation.WaitActivityBranches.registerClass("Mscrm.ProcessAutomation.WaitActivityBranches");
Mscrm.ProcessAutomation.ActivityTreeToProcessConverter
    .registerClass("Mscrm.ProcessAutomation.ActivityTreeToProcessConverter",
        null,
        Mscrm.ProcessAutomation.IActivityTreeToProcessConverter);
Mscrm.ProcessAutomation.DefaultConditionBranchStepGenerator
    .registerClass("Mscrm.ProcessAutomation.DefaultConditionBranchStepGenerator",
        Mscrm.ProcessAutomation.DefaultStepGeneratorBase);
Mscrm.ProcessAutomation.ConditionSubsequentActivities
    .registerClass("Mscrm.ProcessAutomation.ConditionSubsequentActivities",
        Mscrm.Automation.AbstractSubsequentActivities);
Mscrm.ProcessAutomation.ProcessSubsequentActivityGenerator
    .registerClass("Mscrm.ProcessAutomation.ProcessSubsequentActivityGenerator",
        Mscrm.Automation.DefaultSubsequentActivityGenerator);
Mscrm.ProcessAutomation.MenuCommandFactory.registerClass("Mscrm.ProcessAutomation.MenuCommandFactory",
    null,
    Mscrm.ProcessAutomation.IMenuCommandFactory);
Mscrm.ProcessAutomation.EmptyActivity.registerClass("Mscrm.ProcessAutomation.EmptyActivity",
    Mscrm.ProcessAutomation.ProcessActivityDefinitionModel);
Mscrm.ProcessAutomation.RootActivity.registerClass("Mscrm.ProcessAutomation.RootActivity",
    Mscrm.ProcessAutomation.ProcessActivityDefinitionModel);
Mscrm.ProcessAutomation.YesBranchIconAttributes
    .registerClass("Mscrm.ProcessAutomation.YesBranchIconAttributes", Mscrm.Automation.AbstractIconAttributes);
Mscrm.ProcessAutomation.NoBranchIconAttributes
    .registerClass("Mscrm.ProcessAutomation.NoBranchIconAttributes", Mscrm.Automation.AbstractIconAttributes);
Mscrm.ProcessAutomation.ConditionActivityTileInformation
    .registerClass("Mscrm.ProcessAutomation.ConditionActivityTileInformation",
        Mscrm.Automation.AbstractActivityTileInformation);
Mscrm.ProcessAutomation.ProcessIconFactory.registerClass("Mscrm.ProcessAutomation.ProcessIconFactory",
    Mscrm.Automation.DefaultIconFactory);
Mscrm.ProcessAutomation.ProcessItemModel.registerClass("Mscrm.ProcessAutomation.ProcessItemModel",
    Mscrm.Automation.ItemModel);
Mscrm.ProcessAutomation.ProcessSlotIconType.registerClass("Mscrm.ProcessAutomation.ProcessSlotIconType",
    Mscrm.Automation.SlotIconType);
Mscrm.ProcessAutomation.ProcessDesignerStatusCodeProvider
    .registerClass("Mscrm.ProcessAutomation.ProcessDesignerStatusCodeProvider",
        Mscrm.ProcessAutomation.ProcessStatusCodeProvider,
        Mscrm.ProcessAutomation.IProcessDesignerStatusCodeProvider,
        Mscrm.Automation.IStatusCodeProvider);
Mscrm.Automation.ProcessStatusCodeProviderFactory
    .registerClass("Mscrm.Automation.ProcessStatusCodeProviderFactory",
        Mscrm.Automation.DefaultStatusCodeProviderFactory,
        Mscrm.Automation.IStatusCodeProviderFactory);
Mscrm.ProcessAutomation.ProcessDesignerStatusCodeProviderFactory
    .registerClass("Mscrm.ProcessAutomation.ProcessDesignerStatusCodeProviderFactory",
        Mscrm.Automation.ProcessStatusCodeProviderFactory,
        Mscrm.ProcessAutomation.IProcessDesignerStatusCodeProviderFactory,
        Mscrm.Automation.IStatusCodeProviderFactory);
Mscrm.ProcessAutomation.ValidationResult.registerClass("Mscrm.ProcessAutomation.ValidationResult",
    null,
    Mscrm.ProcessAutomation.IValidationResult);
Mscrm.ProcessAutomation.ProcessCommonTileInformation
    .registerClass("Mscrm.ProcessAutomation.ProcessCommonTileInformation");
Mscrm.ProcessAutomation.ProcessImageResources.registerClass("Mscrm.ProcessAutomation.ProcessImageResources");
Mscrm.ProcessAutomation.ConditionPropertyEditViewModel
    .registerClass("Mscrm.ProcessAutomation.ConditionPropertyEditViewModel",
        Mscrm.ProcessAutomation.PropertyEditViewModel,
        Mscrm.ProcessAutomation.IConditionPropertyEditViewModel,
        Mscrm.ProcessAutomation.IPropertyEditViewModel,
        Mscrm.ProcessAutomation.IViewModel,
        Sys.IDisposable,
        Sys.INotifyPropertyChange);
Mscrm.ProcessAutomation.PropertyCommandBarViewModel
    .registerClass("Mscrm.ProcessAutomation.PropertyCommandBarViewModel",
        Mscrm.ProcessAutomation.ViewModel,
        Mscrm.ProcessAutomation.IPropertyCommandBarViewModel,
        Mscrm.ProcessAutomation.IViewModel,
        Sys.IDisposable,
        Sys.INotifyPropertyChange);
Mscrm.ProcessAutomation.DefaultPropertyCommandBarViewModel
    .registerClass("Mscrm.ProcessAutomation.DefaultPropertyCommandBarViewModel",
        Mscrm.ProcessAutomation.PropertyCommandBarViewModel,
        Mscrm.ProcessAutomation.IDefaultPropertyCommandBarViewModel,
        Mscrm.ProcessAutomation.IPropertyCommandBarViewModel,
        Mscrm.ProcessAutomation.IViewModel,
        Sys.IDisposable,
        Sys.INotifyPropertyChange);
Mscrm.ProcessAutomation.PropertyCommandBarButton
    .registerClass("Mscrm.ProcessAutomation.PropertyCommandBarButton",
        Mscrm.ProcessAutomation.ViewModel,
        Mscrm.ProcessAutomation.IPropertyCommandBarButton,
        Mscrm.ProcessAutomation.IViewModel,
        Sys.IDisposable,
        Sys.INotifyPropertyChange);
Mscrm.ProcessAutomation.PropertyCommandBarViewModelFactory
    .registerClass("Mscrm.ProcessAutomation.PropertyCommandBarViewModelFactory",
        null,
        Mscrm.ProcessAutomation.IPropertyCommandBarViewModelFactory);
Mscrm.ProcessAutomation.EmptyPropertyViewModel
    .registerClass("Mscrm.ProcessAutomation.EmptyPropertyViewModel", Mscrm.ProcessAutomation.PropertyViewModel);
Mscrm.ProcessAutomation.CanvasViewModel.registerClass("Mscrm.ProcessAutomation.CanvasViewModel",
    Mscrm.ProcessAutomation.ViewModel,
    Mscrm.ProcessAutomation.ICanvasViewModel,
    Mscrm.ProcessAutomation.IViewModel,
    Sys.IDisposable,
    Sys.INotifyPropertyChange);
Mscrm.ProcessAutomation.ViewModelFactory.registerClass("Mscrm.ProcessAutomation.ViewModelFactory",
    null,
    Mscrm.ProcessAutomation.IViewModelFactory);
Mscrm.ProcessAutomation.EvaluateMethodHtmlBuilder
    .registerClass("Mscrm.ProcessAutomation.EvaluateMethodHtmlBuilder", Mscrm.ProcessAutomation.HtmlBuilder);
Mscrm.ProcessAutomation.SelectFirstNotNullHtmlBuilder
    .registerClass("Mscrm.ProcessAutomation.SelectFirstNotNullHtmlBuilder", Mscrm.ProcessAutomation.HtmlBuilder);
Mscrm.ProcessAutomation.EntityAttributeExpressionHtmlBuilder
    .registerClass("Mscrm.ProcessAutomation.EntityAttributeExpressionHtmlBuilder", Mscrm.ProcessAutomation.HtmlBuilder);
Mscrm.ProcessAutomation.ExpressionHtmlBuilderFactory
    .registerClass("Mscrm.ProcessAutomation.ExpressionHtmlBuilderFactory",
        null,
        Mscrm.ProcessAutomation.IExpressionHtmlBuilderFactory);
Mscrm.ProcessAutomation.LookupExpressionBuilder
    .registerClass("Mscrm.ProcessAutomation.LookupExpressionBuilder", Mscrm.ProcessAutomation.HtmlBuilder);
Mscrm.ProcessAutomation.MethodCallExpressionHtmlBuilder
    .registerClass("Mscrm.ProcessAutomation.MethodCallExpressionHtmlBuilder", Mscrm.ProcessAutomation.HtmlBuilder);
Mscrm.ProcessAutomation.PartyListExpressionBuilder
    .registerClass("Mscrm.ProcessAutomation.PartyListExpressionBuilder", Mscrm.ProcessAutomation.HtmlBuilder);
Mscrm.ProcessAutomation.PrimitiveExpressionHtmlBuilder
    .registerClass("Mscrm.ProcessAutomation.PrimitiveExpressionHtmlBuilder", Mscrm.ProcessAutomation.HtmlBuilder);
Mscrm.ProcessAutomation.PropertySpecificationHtmlBuilder
    .registerClass("Mscrm.ProcessAutomation.PropertySpecificationHtmlBuilder", Mscrm.ProcessAutomation.HtmlBuilder);
Mscrm.ProcessAutomation.DateTimeHtmlBuilder.registerClass("Mscrm.ProcessAutomation.DateTimeHtmlBuilder",
    Mscrm.ProcessAutomation.HtmlBuilder);
Mscrm.ProcessAutomation.LookupValueBuilder.registerClass("Mscrm.ProcessAutomation.LookupValueBuilder");
Mscrm.ProcessAutomation.PicklistHtmlBuilder.registerClass("Mscrm.ProcessAutomation.PicklistHtmlBuilder",
    Mscrm.ProcessAutomation.HtmlBuilder);
Mscrm.ProcessAutomation.HtmlBuilderContext.registerClass("Mscrm.ProcessAutomation.HtmlBuilderContext");
Mscrm.ProcessAutomation.EditableReadProcessPropertyPanelView
    .registerClass("Mscrm.ProcessAutomation.EditableReadProcessPropertyPanelView",
        Mscrm.ProcessAutomation.ReadProcessPropertyPanelView);
Mscrm.ProcessAutomation.EditableReadConditionPropertyPanelView
    .registerClass("Mscrm.ProcessAutomation.EditableReadConditionPropertyPanelView",
        Mscrm.ProcessAutomation.EditableReadProcessPropertyPanelView);
Mscrm.ProcessAutomation.PropertyEditPanelView.registerClass("Mscrm.ProcessAutomation.PropertyEditPanelView",
    null,
    Mscrm.ProcessAutomation.IPropertyEditPanelView);
Mscrm.ProcessAutomation.ConditionPropertyEditPanelView
    .registerClass("Mscrm.ProcessAutomation.ConditionPropertyEditPanelView",
        Mscrm.ProcessAutomation.PropertyEditPanelView);
Mscrm.ProcessAutomation.PropertyCommandBarButtonView
    .registerClass("Mscrm.ProcessAutomation.PropertyCommandBarButtonView",
        Mscrm.ProcessAutomation.View,
        Mscrm.ProcessAutomation.IPropertyCommandBarButtonView,
        Mscrm.ProcessAutomation.IView,
        Sys.IDisposable);
Mscrm.ProcessAutomation.PropertyCommandBarButtonViewFactory
    .registerClass("Mscrm.ProcessAutomation.PropertyCommandBarButtonViewFactory",
        null,
        Mscrm.ProcessAutomation.IPropertyCommandBarButtonViewFactory);
Mscrm.ProcessAutomation.PropertyCommandBarView
    .registerClass("Mscrm.ProcessAutomation.PropertyCommandBarView",
        Mscrm.ProcessAutomation.View,
        Mscrm.ProcessAutomation.IPropertyCommandBarView,
        Mscrm.ProcessAutomation.IView,
        Sys.IDisposable);
Mscrm.ProcessAutomation.ConditionBodyPropertyPanelViewComponent
    .registerClass("Mscrm.ProcessAutomation.ConditionBodyPropertyPanelViewComponent",
        Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent);
Mscrm.ProcessAutomation.ConditionHeaderPropertyPanelViewComponent
    .registerClass("Mscrm.ProcessAutomation.ConditionHeaderPropertyPanelViewComponent",
        Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent);
Mscrm.ProcessAutomation.ProcessLegacyDialog.registerClass("Mscrm.ProcessAutomation.ProcessLegacyDialog",
    null,
    Mscrm.ProcessAutomation.IProcessLegacyDialog);
Mscrm.ProcessAutomation.ConditionLegacyDialog.registerClass("Mscrm.ProcessAutomation.ConditionLegacyDialog",
    Mscrm.ProcessAutomation.ProcessLegacyDialog,
    Mscrm.ProcessAutomation.IConditionLegacyDialog,
    Mscrm.ProcessAutomation.IProcessLegacyDialog);
Mscrm.ProcessAutomation.NullPropertyPanelView.registerClass("Mscrm.ProcessAutomation.NullPropertyPanelView",
    Mscrm.ProcessAutomation.ProcessPropertyPanelView);
Mscrm.ProcessAutomation.ProcessSlotIconHolderGenerator
    .registerClass("Mscrm.ProcessAutomation.ProcessSlotIconHolderGenerator",
        Mscrm.Automation.DefaultSlotIconHolderGenerator);
Mscrm.ProcessAutomation.ProcessSlotIconHolderGeneratorFactory
    .registerClass("Mscrm.ProcessAutomation.ProcessSlotIconHolderGeneratorFactory",
        Mscrm.Automation.SlotIconHolderGeneratorFactory);
Mscrm.ProcessAutomation.ProcessSlotInsertVerticalGeneratorFactory
    .registerClass("Mscrm.ProcessAutomation.ProcessSlotInsertVerticalGeneratorFactory",
        Mscrm.Automation.SlotInsertVerticalGeneratorFactory);
Mscrm.ProcessAutomation.ProcessDefaultActivityDropHandler
    .registerClass("Mscrm.ProcessAutomation.ProcessDefaultActivityDropHandler",
        Mscrm.Automation.AbstractActivityDropHandler);
Mscrm.ProcessAutomation.ProcessSlotGeneratorProvider
    .registerClass("Mscrm.ProcessAutomation.ProcessSlotGeneratorProvider",
        Mscrm.Automation.DefaultSlotGeneratorProvider);
Mscrm.ProcessAutomation.StatusViewBase.registerClass("Mscrm.ProcessAutomation.StatusViewBase",
    Backbone.View,
    Mscrm.Automation.IStatusView,
    Backbone.IView);
Mscrm.ProcessAutomation.InProgressStatusView.registerClass("Mscrm.ProcessAutomation.InProgressStatusView",
    Mscrm.ProcessAutomation.StatusViewBase);
Mscrm.ProcessAutomation.CanceledStatusView.registerClass("Mscrm.ProcessAutomation.CanceledStatusView",
    Mscrm.ProcessAutomation.StatusViewBase);
Mscrm.ProcessAutomation.FailedStatusView.registerClass("Mscrm.ProcessAutomation.FailedStatusView",
    Mscrm.ProcessAutomation.StatusViewBase);
Mscrm.ProcessAutomation.SuccessStatusView.registerClass("Mscrm.ProcessAutomation.SuccessStatusView",
    Mscrm.ProcessAutomation.StatusViewBase);
Mscrm.ProcessAutomation.WaitingStatusView.registerClass("Mscrm.ProcessAutomation.WaitingStatusView",
    Mscrm.ProcessAutomation.StatusViewBase);
Mscrm.ProcessAutomation.ProcessStatusViewFactory
    .registerClass("Mscrm.ProcessAutomation.ProcessStatusViewFactory",
        null,
        Mscrm.ProcessAutomation.IProcessStatusViewFactory);
Mscrm.ProcessAutomation.ProcessCanvasView.registerClass("Mscrm.ProcessAutomation.ProcessCanvasView",
    Mscrm.Automation.CanvasView,
    Mscrm.ProcessAutomation.IProcessCanvasView,
    Mscrm.Automation.ICanvasView,
    Backbone.IView);
Mscrm.ProcessAutomation.ViewFactory.registerClass("Mscrm.ProcessAutomation.ViewFactory",
    null,
    Mscrm.ProcessAutomation.IViewFactory);
Mscrm.ProcessAutomation.ProcessEntityDependencyVisitor
    .registerClass("Mscrm.ProcessAutomation.ProcessEntityDependencyVisitor",
        Microsoft.Crm.Workflow.ObjectModel.ProcessDefinitionVisitorBase);
Mscrm.ProcessAutomation.ProcessActionActivityType.registerClass("Mscrm.ProcessAutomation.ProcessActionActivityType");
Mscrm.ProcessAutomation.ProcessActionCssClass.registerClass("Mscrm.ProcessAutomation.ProcessActionCssClass");
Mscrm.ProcessAutomation.ProcessActionSettings.registerClass("Mscrm.ProcessAutomation.ProcessActionSettings",
    Mscrm.ProcessAutomation.WorkflowSettings);
Mscrm.ProcessAutomation.ProcessActionRuntimeSettings
    .registerClass("Mscrm.ProcessAutomation.ProcessActionRuntimeSettings",
        Mscrm.ProcessAutomation.ProcessActionSettings);
Mscrm.ProcessAutomation.ProcessActionToUIActivityCollectionVisitor
    .registerClass("Mscrm.ProcessAutomation.ProcessActionToUIActivityCollectionVisitor",
        Mscrm.ProcessAutomation.WorkflowToUIActivityCollectionVisitor);
Mscrm.ProcessAutomation.ProcessActionActivityDefinitionFactory
    .registerClass("Mscrm.ProcessAutomation.ProcessActionActivityDefinitionFactory",
        Mscrm.ProcessAutomation.WorkflowActivityDefinitionFactory);
Mscrm.ProcessAutomation.ProcessActionRootActivity
    .registerClass("Mscrm.ProcessAutomation.ProcessActionRootActivity",
        Mscrm.ProcessAutomation.ProcessActivityDefinitionModel);
Mscrm.ProcessAutomation.ProcessActionTileInformationFactory
    .registerClass("Mscrm.ProcessAutomation.ProcessActionTileInformationFactory",
        Mscrm.ProcessAutomation.WorkflowTileInformationFactory);
Mscrm.ProcessAutomation.ProcessActionDesignerViewModel
    .registerClass("Mscrm.ProcessAutomation.ProcessActionDesignerViewModel",
        Mscrm.ProcessAutomation.WorkflowDesignerViewModel);
Mscrm.ProcessAutomation.ProcessActionRootBodyPropertyPanelViewComponent
    .registerClass("Mscrm.ProcessAutomation.ProcessActionRootBodyPropertyPanelViewComponent",
        Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent,
        Mscrm.ProcessAutomation.IPropertyPanelViewComponent,
        Sys.IDisposable);
Mscrm.ProcessAutomation.ProcessActionRootHeaderPropertyPanelViewComponent
    .registerClass("Mscrm.ProcessAutomation.ProcessActionRootHeaderPropertyPanelViewComponent",
        Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent,
        Mscrm.ProcessAutomation.IPropertyPanelViewComponent,
        Sys.IDisposable);
Mscrm.ProcessAutomation.ProcessActionBodyPropertyPanelViewComponentFactory
    .registerClass("Mscrm.ProcessAutomation.ProcessActionBodyPropertyPanelViewComponentFactory",
        Mscrm.ProcessAutomation.WorkflowBodyPropertyPanelViewComponentFactory);
Mscrm.ProcessAutomation.ProcessActionHeaderPropertyPanelViewComponentFactory
    .registerClass("Mscrm.ProcessAutomation.ProcessActionHeaderPropertyPanelViewComponentFactory",
        Mscrm.ProcessAutomation.WorkflowHeaderPropertyPanelViewComponentFactory);
Mscrm.ProcessAutomation.ProcessActionPropertyPanelViewComponentProvider
    .registerClass("Mscrm.ProcessAutomation.ProcessActionPropertyPanelViewComponentProvider",
        Mscrm.ProcessAutomation.WorkflowPropertyPanelViewComponentProvider);
Mscrm.ProcessAutomation.ProcessActionRuntimePropertyPanelViewComponentProvider
    .registerClass("Mscrm.ProcessAutomation.ProcessActionRuntimePropertyPanelViewComponentProvider",
        Mscrm.ProcessAutomation.ProcessActionPropertyPanelViewComponentProvider);
Mscrm.ProcessAutomation.ProcessActionRuntimeStatusPropertyPanelViewComponentFactory
    .registerClass("Mscrm.ProcessAutomation.ProcessActionRuntimeStatusPropertyPanelViewComponentFactory",
        Mscrm.ProcessAutomation.WorkflowRuntimeStatusPropertyPanelViewComponentFactory);
Mscrm.ProcessAutomation.ReadProcessActionRuntimePropertyPanelView
    .registerClass("Mscrm.ProcessAutomation.ReadProcessActionRuntimePropertyPanelView",
        Mscrm.ProcessAutomation.ReadProcessPropertyPanelView);
Mscrm.ProcessAutomation.ProcessActionPropertyPanelScrollableCssClassProvider
    .registerClass("Mscrm.ProcessAutomation.ProcessActionPropertyPanelScrollableCssClassProvider",
        Mscrm.ProcessAutomation.WorkflowPropertyPanelScrollableCssClassProvider);
Mscrm.ProcessAutomation.ProcessActionBodyView.registerClass("Mscrm.ProcessAutomation.ProcessActionBodyView",
    Mscrm.ProcessAutomation.WorkflowBodyView);
Mscrm.ProcessAutomation.ProcessActionDesignerView
    .registerClass("Mscrm.ProcessAutomation.ProcessActionDesignerView", Mscrm.ProcessAutomation.WorkflowDesignerView);
Mscrm.ProcessAutomation.ProcessActionRuntimeBodyView
    .registerClass("Mscrm.ProcessAutomation.ProcessActionRuntimeBodyView",
        Mscrm.ProcessAutomation.ProcessActionBodyView);
Mscrm.ProcessAutomation.ProcessActionRuntimeView
    .registerClass("Mscrm.ProcessAutomation.ProcessActionRuntimeView",
        Mscrm.ProcessAutomation.ProcessActionDesignerView);
Mscrm.ProcessAutomation.ProcessActionPropertyViewFactory
    .registerClass("Mscrm.ProcessAutomation.ProcessActionPropertyViewFactory",
        Mscrm.ProcessAutomation.WorkflowPropertyViewFactory);
Mscrm.ProcessAutomation.ProcessActionRuntimePropertyViewFactory
    .registerClass("Mscrm.ProcessAutomation.ProcessActionRuntimePropertyViewFactory",
        Mscrm.ProcessAutomation.ProcessActionPropertyViewFactory);
Mscrm.ProcessAutomation.ProcessActionAutomationControl
    .registerClass("Mscrm.ProcessAutomation.ProcessActionAutomationControl",
        Mscrm.ProcessAutomation.WorkflowAutomationControl);
Mscrm.ProcessAutomation.ProcessActionRuntimeAutomationControl
    .registerClass("Mscrm.ProcessAutomation.ProcessActionRuntimeAutomationControl",
        Mscrm.ProcessAutomation.ProcessActionAutomationControl);
Mscrm.ProcessAutomation.WorkflowActivityType.registerClass("Mscrm.ProcessAutomation.WorkflowActivityType");
Mscrm.ProcessAutomation.WorkflowCssClass.registerClass("Mscrm.ProcessAutomation.WorkflowCssClass");
Mscrm.ProcessAutomation.WorkflowStepActivityStatus.registerClass("Mscrm.ProcessAutomation.WorkflowStepActivityStatus");
Mscrm.ProcessAutomation.RuntimeProcessActivitiesStatusInitializer
    .registerClass("Mscrm.ProcessAutomation.RuntimeProcessActivitiesStatusInitializer",
        Mscrm.ProcessAutomation.ProcessActivitiesStatusInitializer);
Mscrm.ProcessAutomation.WorkflowRuntimeDefaultStatusCodeProvider
    .registerClass("Mscrm.ProcessAutomation.WorkflowRuntimeDefaultStatusCodeProvider",
        Mscrm.ProcessAutomation.ProcessStatusCodeProvider,
        Mscrm.Automation.IStatusCodeProvider);
Mscrm.ProcessAutomation.WorkflowRuntimeConditionActivityStatusCodeProvider
    .registerClass("Mscrm.ProcessAutomation.WorkflowRuntimeConditionActivityStatusCodeProvider",
        Mscrm.ProcessAutomation.WorkflowRuntimeDefaultStatusCodeProvider,
        Mscrm.Automation.IStatusCodeProvider);
Mscrm.ProcessAutomation.WorkflowRuntimeRootActivityStatusCodeProvider
    .registerClass("Mscrm.ProcessAutomation.WorkflowRuntimeRootActivityStatusCodeProvider",
        Mscrm.ProcessAutomation.WorkflowRuntimeDefaultStatusCodeProvider,
        Mscrm.Automation.IStatusCodeProvider);
Mscrm.ProcessAutomation.WorkflowRuntimeSettings
    .registerClass("Mscrm.ProcessAutomation.WorkflowRuntimeSettings", Mscrm.ProcessAutomation.WorkflowSettings);
Mscrm.ProcessAutomation.WorkflowRuntimeDecoratorFactory
    .registerClass("Mscrm.ProcessAutomation.WorkflowRuntimeDecoratorFactory",
        Mscrm.Automation.DefaultDecoratorFactory,
        Mscrm.Automation.IDecoratorFactory);
Mscrm.ProcessAutomation.DefaultCreateStepGenerator
    .registerClass("Mscrm.ProcessAutomation.DefaultCreateStepGenerator",
        Mscrm.ProcessAutomation.DefaultStepGeneratorBase);
Mscrm.ProcessAutomation.DefaultUpdateStepGenerator
    .registerClass("Mscrm.ProcessAutomation.DefaultUpdateStepGenerator",
        Mscrm.ProcessAutomation.DefaultStepGeneratorBase);
Mscrm.ProcessAutomation.DefaultWorkflowObjectGeneratorFactory
    .registerClass("Mscrm.ProcessAutomation.DefaultWorkflowObjectGeneratorFactory",
        Mscrm.ProcessAutomation.DefaultObjectGeneratorFactory);
Mscrm.ProcessAutomation.AssignActivity.registerClass("Mscrm.ProcessAutomation.AssignActivity",
    Mscrm.ProcessAutomation.ProcessActivityDefinitionModel);
Mscrm.ProcessAutomation.ChildWorkflowActivity.registerClass("Mscrm.ProcessAutomation.ChildWorkflowActivity",
    Mscrm.ProcessAutomation.ProcessActivityDefinitionModel);
Mscrm.ProcessAutomation.CreateActivity.registerClass("Mscrm.ProcessAutomation.CreateActivity",
    Mscrm.ProcessAutomation.ProcessActivityDefinitionModel);
Mscrm.ProcessAutomation.CustomActivity.registerClass("Mscrm.ProcessAutomation.CustomActivity",
    Mscrm.ProcessAutomation.ProcessActivityDefinitionModel);
Mscrm.ProcessAutomation.SendEmailActivity.registerClass("Mscrm.ProcessAutomation.SendEmailActivity",
    Mscrm.ProcessAutomation.ProcessActivityDefinitionModel);
Mscrm.ProcessAutomation.SetStateActivity.registerClass("Mscrm.ProcessAutomation.SetStateActivity",
    Mscrm.ProcessAutomation.ProcessActivityDefinitionModel);
Mscrm.ProcessAutomation.StopWorkflowActivity.registerClass("Mscrm.ProcessAutomation.StopWorkflowActivity",
    Mscrm.ProcessAutomation.ProcessActivityDefinitionModel);
Mscrm.ProcessAutomation.UpdateActivity.registerClass("Mscrm.ProcessAutomation.UpdateActivity",
    Mscrm.ProcessAutomation.ProcessActivityDefinitionModel);
Mscrm.ProcessAutomation.WaitActivity.registerClass("Mscrm.ProcessAutomation.WaitActivity",
    Mscrm.ProcessAutomation.BranchActivity);
Mscrm.ProcessAutomation.WaitBranchActivity.registerClass("Mscrm.ProcessAutomation.WaitBranchActivity",
    Mscrm.ProcessAutomation.ProcessActivityDefinitionModel);
Mscrm.ProcessAutomation.WaitTimeoutActivity.registerClass("Mscrm.ProcessAutomation.WaitTimeoutActivity",
    Mscrm.ProcessAutomation.ProcessActivityDefinitionModel);
Mscrm.ProcessAutomation.WorkflowRootActivity.registerClass("Mscrm.ProcessAutomation.WorkflowRootActivity",
    Mscrm.ProcessAutomation.ProcessActivityDefinitionModel);
Mscrm.ProcessAutomation.WorkflowStageActivity.registerClass("Mscrm.ProcessAutomation.WorkflowStageActivity",
    Mscrm.ProcessAutomation.ProcessActivityDefinitionModel);
Mscrm.ProcessAutomation.WorkflowLibraryNodesFactory
    .registerClass("Mscrm.ProcessAutomation.WorkflowLibraryNodesFactory",
        Mscrm.ProcessAutomation.ProcessLibraryNodesFactory);
Mscrm.ProcessAutomation.WorkflowRuntimeTileInformationFactory
    .registerClass("Mscrm.ProcessAutomation.WorkflowRuntimeTileInformationFactory",
        Mscrm.ProcessAutomation.WorkflowTileInformationFactory);
Mscrm.ProcessAutomation.AssignActivityTileInformation
    .registerClass("Mscrm.ProcessAutomation.AssignActivityTileInformation",
        Mscrm.Automation.AbstractActivityTileInformation);
Mscrm.ProcessAutomation.ChildWorkflowActivityTileInformation
    .registerClass("Mscrm.ProcessAutomation.ChildWorkflowActivityTileInformation",
        Mscrm.Automation.AbstractActivityTileInformation);
Mscrm.ProcessAutomation.CreateActivityTileInformation
    .registerClass("Mscrm.ProcessAutomation.CreateActivityTileInformation",
        Mscrm.Automation.AbstractActivityTileInformation);
Mscrm.ProcessAutomation.CustomActivityTileInformation
    .registerClass("Mscrm.ProcessAutomation.CustomActivityTileInformation",
        Mscrm.Automation.AbstractActivityTileInformation);
Mscrm.ProcessAutomation.SendEmailActivityTileInformation
    .registerClass("Mscrm.ProcessAutomation.SendEmailActivityTileInformation",
        Mscrm.Automation.AbstractActivityTileInformation);
Mscrm.ProcessAutomation.SetStateActivityTileInformation
    .registerClass("Mscrm.ProcessAutomation.SetStateActivityTileInformation",
        Mscrm.Automation.AbstractActivityTileInformation);
Mscrm.ProcessAutomation.StopWorkflowActivityTileInformation
    .registerClass("Mscrm.ProcessAutomation.StopWorkflowActivityTileInformation",
        Mscrm.Automation.AbstractActivityTileInformation);
Mscrm.ProcessAutomation.UpdateActivityTileInformation
    .registerClass("Mscrm.ProcessAutomation.UpdateActivityTileInformation",
        Mscrm.Automation.AbstractActivityTileInformation);
Mscrm.ProcessAutomation.WaitActivityTileInformation
    .registerClass("Mscrm.ProcessAutomation.WaitActivityTileInformation",
        Mscrm.Automation.AbstractActivityTileInformation);
Mscrm.ProcessAutomation.WaitBranchActivityTileInformation
    .registerClass("Mscrm.ProcessAutomation.WaitBranchActivityTileInformation",
        Mscrm.Automation.AbstractActivityTileInformation);
Mscrm.ProcessAutomation.WaitTimeoutActivityTileInformation
    .registerClass("Mscrm.ProcessAutomation.WaitTimeoutActivityTileInformation",
        Mscrm.Automation.AbstractActivityTileInformation);
Mscrm.ProcessAutomation.WorkflowRootActivityTileInformation
    .registerClass("Mscrm.ProcessAutomation.WorkflowRootActivityTileInformation",
        Mscrm.Automation.AbstractActivityTileInformation);
Mscrm.ProcessAutomation.WorkflowStageActivityTileInformation
    .registerClass("Mscrm.ProcessAutomation.WorkflowStageActivityTileInformation",
        Mscrm.Automation.AbstractActivityTileInformation);
Mscrm.ProcessAutomation.AssignBodyPropertyPanelViewComponent
    .registerClass("Mscrm.ProcessAutomation.AssignBodyPropertyPanelViewComponent",
        Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent);
Mscrm.ProcessAutomation.ChangeStatusBodyPropertyPanelViewComponent
    .registerClass("Mscrm.ProcessAutomation.ChangeStatusBodyPropertyPanelViewComponent",
        Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent);
Mscrm.ProcessAutomation.CreateBodyPropertyPanelViewComponent
    .registerClass("Mscrm.ProcessAutomation.CreateBodyPropertyPanelViewComponent",
        Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent);
Mscrm.ProcessAutomation.CustomActivityBodyPropertyPanelViewComponent
    .registerClass("Mscrm.ProcessAutomation.CustomActivityBodyPropertyPanelViewComponent",
        Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent);
Mscrm.ProcessAutomation.SendEmailBodyPropertyPanelViewComponent
    .registerClass("Mscrm.ProcessAutomation.SendEmailBodyPropertyPanelViewComponent",
        Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent);
Mscrm.ProcessAutomation.SendEmailWithoutTemplateBodyPropertyPanelViewComponent
    .registerClass("Mscrm.ProcessAutomation.SendEmailWithoutTemplateBodyPropertyPanelViewComponent",
        Mscrm.ProcessAutomation.SendEmailBodyPropertyPanelViewComponent);
Mscrm.ProcessAutomation.SendEmailWithTemplateBodyPropertyPanelViewComponent
    .registerClass("Mscrm.ProcessAutomation.SendEmailWithTemplateBodyPropertyPanelViewComponent",
        Mscrm.ProcessAutomation.SendEmailBodyPropertyPanelViewComponent);
Mscrm.ProcessAutomation.StartChildWorkflowBodyPropertyPanelViewComponent
    .registerClass("Mscrm.ProcessAutomation.StartChildWorkflowBodyPropertyPanelViewComponent",
        Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent);
Mscrm.ProcessAutomation.StopWorkflowBodyPropertyPanelViewComponent
    .registerClass("Mscrm.ProcessAutomation.StopWorkflowBodyPropertyPanelViewComponent",
        Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent);
Mscrm.ProcessAutomation.UpdateBodyPropertyPanelViewComponent
    .registerClass("Mscrm.ProcessAutomation.UpdateBodyPropertyPanelViewComponent",
        Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent);
Mscrm.ProcessAutomation.WaitBranchBodyPropertyPanelViewComponent
    .registerClass("Mscrm.ProcessAutomation.WaitBranchBodyPropertyPanelViewComponent",
        Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent);
Mscrm.ProcessAutomation.WaitBodyPropertyPanelViewComponent
    .registerClass("Mscrm.ProcessAutomation.WaitBodyPropertyPanelViewComponent",
        Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent);
Mscrm.ProcessAutomation.AssignHeaderPropertyPanelViewComponent
    .registerClass("Mscrm.ProcessAutomation.AssignHeaderPropertyPanelViewComponent",
        Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent);
Mscrm.ProcessAutomation.ChangeStatusHeaderPropertyPanelViewComponent
    .registerClass("Mscrm.ProcessAutomation.ChangeStatusHeaderPropertyPanelViewComponent",
        Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent);
Mscrm.ProcessAutomation.WorkflowRootBodyPropertyPanelViewComponent
    .registerClass("Mscrm.ProcessAutomation.WorkflowRootBodyPropertyPanelViewComponent",
        Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent,
        Mscrm.ProcessAutomation.IPropertyPanelViewComponent,
        Sys.IDisposable);
Mscrm.ProcessAutomation.CreateHeaderPropertyPanelViewComponent
    .registerClass("Mscrm.ProcessAutomation.CreateHeaderPropertyPanelViewComponent",
        Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent);
Mscrm.ProcessAutomation.CustomActivityHeaderPropertyPanelViewComponent
    .registerClass("Mscrm.ProcessAutomation.CustomActivityHeaderPropertyPanelViewComponent",
        Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent);
Mscrm.ProcessAutomation.SendEmailHeaderPropertyPanelViewComponent
    .registerClass("Mscrm.ProcessAutomation.SendEmailHeaderPropertyPanelViewComponent",
        Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent);
Mscrm.ProcessAutomation.StartChildWorkflowHeaderPropertyPanelViewComponent
    .registerClass("Mscrm.ProcessAutomation.StartChildWorkflowHeaderPropertyPanelViewComponent",
        Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent);
Mscrm.ProcessAutomation.StopWorkflowHeaderPropertyPanelViewComponent
    .registerClass("Mscrm.ProcessAutomation.StopWorkflowHeaderPropertyPanelViewComponent",
        Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent);
Mscrm.ProcessAutomation.UpdateHeaderPropertyPanelViewComponent
    .registerClass("Mscrm.ProcessAutomation.UpdateHeaderPropertyPanelViewComponent",
        Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent);
Mscrm.ProcessAutomation.WaitBranchHeaderPropertyPanelViewComponent
    .registerClass("Mscrm.ProcessAutomation.WaitBranchHeaderPropertyPanelViewComponent",
        Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent);
Mscrm.ProcessAutomation.WorkflowRootHeaderPropertyPanelViewComponent
    .registerClass("Mscrm.ProcessAutomation.WorkflowRootHeaderPropertyPanelViewComponent",
        Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent,
        Mscrm.ProcessAutomation.IPropertyPanelViewComponent,
        Sys.IDisposable);
Mscrm.ProcessAutomation.WaitHeaderPropertyPanelViewComponent
    .registerClass("Mscrm.ProcessAutomation.WaitHeaderPropertyPanelViewComponent",
        Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent);
Mscrm.ProcessAutomation.WorkflowRootStatusPropertyPanelViewComponent
    .registerClass("Mscrm.ProcessAutomation.WorkflowRootStatusPropertyPanelViewComponent",
        Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent,
        Mscrm.ProcessAutomation.IPropertyPanelViewComponent,
        Sys.IDisposable);
Mscrm.ProcessAutomation.AsyncOperationRootStatusPropertyPanelViewComponent
    .registerClass("Mscrm.ProcessAutomation.AsyncOperationRootStatusPropertyPanelViewComponent",
        Mscrm.ProcessAutomation.WorkflowRootStatusPropertyPanelViewComponent,
        Mscrm.ProcessAutomation.IPropertyPanelViewComponent,
        Sys.IDisposable);
Mscrm.ProcessAutomation.DefaultStatusPropertyPanelViewComponent
    .registerClass("Mscrm.ProcessAutomation.DefaultStatusPropertyPanelViewComponent",
        Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent);
Mscrm.ProcessAutomation.ProcessSessionRootStatusPropertyPanelViewComponent
    .registerClass("Mscrm.ProcessAutomation.ProcessSessionRootStatusPropertyPanelViewComponent",
        Mscrm.ProcessAutomation.WorkflowRootStatusPropertyPanelViewComponent,
        Mscrm.ProcessAutomation.IPropertyPanelViewComponent,
        Sys.IDisposable);
Mscrm.ProcessAutomation.WorkflowRuntimePropertyPanelViewComponentProvider
    .registerClass("Mscrm.ProcessAutomation.WorkflowRuntimePropertyPanelViewComponentProvider",
        Mscrm.ProcessAutomation.WorkflowPropertyPanelViewComponentProvider,
        Mscrm.ProcessAutomation.IPropertyPanelViewComponentProvider);
Mscrm.ProcessAutomation.ReadWorkflowRuntimePropertyPanelView
    .registerClass("Mscrm.ProcessAutomation.ReadWorkflowRuntimePropertyPanelView",
        Mscrm.ProcessAutomation.ReadProcessPropertyPanelView);
Mscrm.ProcessAutomation.WorkflowRuntimeBodyView
    .registerClass("Mscrm.ProcessAutomation.WorkflowRuntimeBodyView", Mscrm.ProcessAutomation.WorkflowBodyView);
Mscrm.ProcessAutomation.WorkflowRuntimeView.registerClass("Mscrm.ProcessAutomation.WorkflowRuntimeView",
    Mscrm.ProcessAutomation.WorkflowDesignerView);
Mscrm.ProcessAutomation.WorkflowHeaderView.registerClass("Mscrm.ProcessAutomation.WorkflowHeaderView",
    Mscrm.ProcessAutomation.ProcessHeaderView);
Mscrm.ProcessAutomation.WorkflowRuntimePropertyViewFactory
    .registerClass("Mscrm.ProcessAutomation.WorkflowRuntimePropertyViewFactory",
        Mscrm.ProcessAutomation.WorkflowPropertyViewFactory);
Mscrm.ProcessAutomation.WorkflowRuntimeAutomationControl
    .registerClass("Mscrm.ProcessAutomation.WorkflowRuntimeAutomationControl",
        Mscrm.ProcessAutomation.WorkflowAutomationControl);
Mscrm.ProcessAutomation.WorkflowImageResources.registerClass("Mscrm.ProcessAutomation.WorkflowImageResources");
Mscrm.ProcessAutomation.WorkflowInitializer.registerClass("Mscrm.ProcessAutomation.WorkflowInitializer",
    Mscrm.ProcessAutomation.ProcessInitializer);
Mscrm.ProcessAutomation.WorkflowRuntimeInitializer
    .registerClass("Mscrm.ProcessAutomation.WorkflowRuntimeInitializer", Mscrm.ProcessAutomation.WorkflowInitializer);
Mscrm.ProcessAutomation.EntityAdditionalMetadataJsonWrapper
    .registerClass("Mscrm.ProcessAutomation.EntityAdditionalMetadataJsonWrapper");
Mscrm.ProcessAutomation.RelationshipJsonWrapper.registerClass("Mscrm.ProcessAutomation.RelationshipJsonWrapper");
Mscrm.ProcessAutomation.BusinessProcessDesignerDataJsonWrapper
    .registerClass("Mscrm.ProcessAutomation.BusinessProcessDesignerDataJsonWrapper");
Mscrm.ProcessAutomation.ProcessEntityJsonWrapper.registerClass("Mscrm.ProcessAutomation.ProcessEntityJsonWrapper");
Mscrm.ProcessAutomation.BusinessProcessEntityJsonWrapper
    .registerClass("Mscrm.ProcessAutomation.BusinessProcessEntityJsonWrapper",
        Mscrm.ProcessAutomation.ProcessEntityJsonWrapper);
Mscrm.ProcessAutomation.ElementId.registerClass("Mscrm.ProcessAutomation.ElementId");
Mscrm.ProcessAutomation.EntityMetadataInfo.registerClass("Mscrm.ProcessAutomation.EntityMetadataInfo");
Mscrm.ProcessAutomation.ProcessActionEntityJsonWrapper
    .registerClass("Mscrm.ProcessAutomation.ProcessActionEntityJsonWrapper",
        Mscrm.ProcessAutomation.ProcessEntityJsonWrapper);
Mscrm.ProcessAutomation.ProcessDialogEntityJsonWrapper
    .registerClass("Mscrm.ProcessAutomation.ProcessDialogEntityJsonWrapper",
        Mscrm.ProcessAutomation.ProcessEntityJsonWrapper);
Mscrm.ProcessAutomation.ProcessDesignerDataJsonWrapper
    .registerClass("Mscrm.ProcessAutomation.ProcessDesignerDataJsonWrapper");
Mscrm.ProcessAutomation.ProcessRuntimeDataJsonWrapper
    .registerClass("Mscrm.ProcessAutomation.ProcessRuntimeDataJsonWrapper",
        Mscrm.ProcessAutomation.ProcessDesignerDataJsonWrapper);
Mscrm.ProcessAutomation.LookupValueJsonWrapper.registerClass("Mscrm.ProcessAutomation.LookupValueJsonWrapper");
Mscrm.ProcessAutomation.ResourceId.registerClass("Mscrm.ProcessAutomation.ResourceId");
Mscrm.ProcessAutomation.RoleJsonWrapper.registerClass("Mscrm.ProcessAutomation.RoleJsonWrapper");
Mscrm.ProcessAutomation.StepDisplayInfo.registerClass("Mscrm.ProcessAutomation.StepDisplayInfo");
Mscrm.ProcessAutomation.WorkflowDesignerDataJsonWrapper
    .registerClass("Mscrm.ProcessAutomation.WorkflowDesignerDataJsonWrapper");
Mscrm.ProcessAutomation.WorkflowRuntimeExecutionDetailsJsonWrapper
    .registerClass("Mscrm.ProcessAutomation.WorkflowRuntimeExecutionDetailsJsonWrapper");
Mscrm.ProcessAutomation.WorkflowRuntimeLog.registerClass("Mscrm.ProcessAutomation.WorkflowRuntimeLog");
Mscrm.ProcessAutomation.WorkflowEntityJsonWrapper
    .registerClass("Mscrm.ProcessAutomation.WorkflowEntityJsonWrapper",
        Mscrm.ProcessAutomation.ProcessEntityJsonWrapper);
Mscrm.Automation.WorkflowRuntimeStatusCodeProviderFactory
    .registerClass("Mscrm.Automation.WorkflowRuntimeStatusCodeProviderFactory",
        Mscrm.Automation.ProcessStatusCodeProviderFactory,
        Mscrm.Automation.IStatusCodeProviderFactory);
Mscrm.Automation.ProcessDialogRuntimeStatusCodeProviderFactory
    .registerClass("Mscrm.Automation.ProcessDialogRuntimeStatusCodeProviderFactory",
        Mscrm.Automation.WorkflowRuntimeStatusCodeProviderFactory);
Mscrm.Automation.ExecutionLineConnectorProvider
    .registerClass("Mscrm.Automation.ExecutionLineConnectorProvider", Mscrm.Automation.DefaultLineConnectorProvider);
Mscrm.Automation.DeleteFlyoutItemClickHandler.registerClass("Mscrm.Automation.DeleteFlyoutItemClickHandler",
    Mscrm.Automation.DefaultDeleteFlyoutItemClickHandler);
Mscrm.Automation.ProcessContextFlyoutContent.registerClass("Mscrm.Automation.ProcessContextFlyoutContent",
    Mscrm.Automation.DefaultContextFlyoutContent);
Mscrm.Automation.ProcessLabelPhraseDictionaryCollection
    .registerClass("Mscrm.Automation.ProcessLabelPhraseDictionaryCollection",
        Mscrm.Automation.DefaultLabelPhraseDictionaryCollection);
Mscrm.Automation.RuntimeExecutionPathLayoutProperties
    .registerClass("Mscrm.Automation.RuntimeExecutionPathLayoutProperties",
        Mscrm.Automation.DefaultLayoutProperties,
        Mscrm.Automation.ILayoutProperties);
Mscrm.Automation.ProcessPropertyPanelActionHandlerProvider
    .registerClass("Mscrm.Automation.ProcessPropertyPanelActionHandlerProvider",
        Mscrm.Automation.DefaultPropertyPanelActionHandlerProvider);
Mscrm.Automation.ProcessPropertyPanelViewKeyDownHandler
    .registerClass("Mscrm.Automation.ProcessPropertyPanelViewKeyDownHandler",
        null,
        Mscrm.Automation.IActivityKeyDownHandler);
Mscrm.Automation.ProcessActivityFocusHandler.registerClass("Mscrm.Automation.ProcessActivityFocusHandler",
    null,
    Mscrm.Automation.IActivityFocusHandler);
Mscrm.Automation.ProcessActivityKeyDownHandler
    .registerClass("Mscrm.Automation.ProcessActivityKeyDownHandler", null, Mscrm.Automation.IActivityKeyDownHandler);
Mscrm.Automation.ProcessSlotHandlerProvider.registerClass("Mscrm.Automation.ProcessSlotHandlerProvider",
    Mscrm.Automation.DefaultSlotHandlerProvider);
Mscrm.Automation.ProcessSlotTileHolderHandlerFactory
    .registerClass("Mscrm.Automation.ProcessSlotTileHolderHandlerFactory",
        Mscrm.Automation.DefaultSlotTileHolderHandlerFactory);
Mscrm.Automation.ProcessActionRuntimeStatusCodeProviderFactory
    .registerClass("Mscrm.Automation.ProcessActionRuntimeStatusCodeProviderFactory",
        Mscrm.Automation.WorkflowRuntimeStatusCodeProviderFactory);
Mscrm.Automation.WorkflowRuntimeLineConnectorProviderFactory
    .registerClass("Mscrm.Automation.WorkflowRuntimeLineConnectorProviderFactory",
        Mscrm.Automation.DefaultLineConnectorProviderFactory);
Mscrm.ProcessAutomation.BusinessProcessActivityType.root = "bpf_root";
Mscrm.ProcessAutomation.BusinessProcessActivityType.stage = "stage";
Mscrm.ProcessAutomation.BusinessProcessCssClass.rootTile = "bpf_rootTile";
Mscrm.ProcessAutomation.BusinessProcessCssClass.stageTile = "stageTile";
Mscrm.ProcessAutomation.BusinessProcessCssClass.scrollableStage = "wf_scrollable_filled_group_stage";
Mscrm.ProcessAutomation.StageActivityTileInformation
    .stageActivityTemplate =
    '\r\n\t\t\t\t\t\t   <span class="tileTitle" title="<%= Title %>">\r\n\t\t\t\t\t\t\t\t  <span class="tileTableCell">\r\n\t\t\t\t\t\t\t\t\t\t <span class="tileInner ellipsis">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<%= Subtitle %>\r\n\t\t\t\t\t\t\t\t\t\t </span> \r\n\t\t\t\t\t\t\t\t\t\t<span class="tileInner ellipsis">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<%= Title %>\r\n\t\t\t\t\t\t\t\t\t\t </span>\r\n\t\t\t\t\t\t\t\t  </span>\r\n\t\t\t\t\t\t   </span>';
Mscrm.ProcessAutomation.BusinessProcessSaveCommand.$1p = "";
Mscrm.ProcessAutomation.ProcessDialogActivityType.root = "dialog_root";
Mscrm.ProcessAutomation.ProcessDialogActivityType.page = "dialog_page";
Mscrm.ProcessAutomation.ProcessDialogActivityType.childDialog = "dialog_child";
Mscrm.ProcessAutomation.ProcessDialogActivityType.query = "dialog_query";
Mscrm.ProcessAutomation.ProcessDialogActivityType.assignVariable = "dialog_asiign_variable";
Mscrm.ProcessAutomation.ProcessDialogCssClass.assignValueTile = "assignValueTile";
Mscrm.ProcessAutomation.ProcessDialogCssClass.childDialogTile = "childDialogTile";
Mscrm.ProcessAutomation.ProcessDialogCssClass.pageTile = "pageTile";
Mscrm.ProcessAutomation.ProcessDialogCssClass.queryTile = "queryTile";
Mscrm.ProcessAutomation.ProcessDialogCssClass.scrollablePage = "dialog_scrollable_filled_group_page";
Mscrm.ProcessAutomation.RemoteMetadataProvider.$3 = null;
Mscrm.ProcessAutomation.SerializedJsonCacheMetadataProvider.$3 = null;
Mscrm.ProcessAutomation.EntityCacheManager.$3 = null;
Mscrm.ProcessAutomation.EntityMetadataCache.$3 = null;
Mscrm.ProcessAutomation.CachedStepDisplayInfoProvider.$1r = null;
Mscrm.ProcessAutomation.Constants.badData = "for(;;);";
Mscrm.ProcessAutomation.Constants.propertyFooterContainerId = "propertyfootercontainer";
Mscrm.ProcessAutomation.Constants.propertyFooterId = "propertyfooter";
Mscrm.ProcessAutomation.Constants.menuSaveButton = "_MBSave";
Mscrm.ProcessAutomation.ProcessActivityDefinitionModel.propertyTreeHeight = "TreeHeight";
Mscrm.ProcessAutomation.ProcessActivityDefinitionModel.propertyTreeWidth = "TreeWidth";
Mscrm.ProcessAutomation.ProcessActivityType.empty = "empty";
Mscrm.ProcessAutomation.ProcessActivityType.root = "root";
Mscrm.ProcessAutomation.ProcessActivityType.condition = "condition";
Mscrm.ProcessAutomation.ProcessCssClass.conditionTile = "conditionTile";
Mscrm.ProcessAutomation.ProcessCssClass.visibilityTile = "taskTile";
Mscrm.ProcessAutomation.ProcessCssClass.line = "line";
Mscrm.ProcessAutomation.ProcessCssClass.executionLine = "critical_line";
Mscrm.ProcessAutomation.ProcessCssClass.executionTile = "tileExecution";
Mscrm.ProcessAutomation.ProcessCssClass.scrollableNormal = "wf_scrollable_filled_group_normal";
Mscrm.ProcessAutomation.ProcessCssClass.scrollableCondition = "wf_scrollable_filled_group_condition";
Mscrm.ProcessAutomation.ProcessCssClass.propertyFooter = "propertyfooter";
Mscrm.ProcessAutomation.ProcessCssClass.propertyFooterContainer = "propertyfootercontainer";
Mscrm.ProcessAutomation.ProcessCssClass.propertyFooterButton = "propertyfooterbutton";
Mscrm.ProcessAutomation.ProcessCssClass.propertyContentContainer = "propertycontentcontainer";
Mscrm.ProcessAutomation.DataAttributeNames.attributeEntityType = "data-entitytype";
Mscrm.ProcessAutomation.DataAttributeNames.attributeControl = "data-control";
Mscrm.ProcessAutomation.DataAttributeNames.attributeRecordId = "data-recordid";
Mscrm.ProcessAutomation.AttributeType.lookup = "lookup";
Mscrm.ProcessAutomation.ProcessToUIActivityCollectionVisitor.defaultParentBranchId = 0;
Mscrm.ProcessAutomation.ConditionActivity.defaultBranchIndex = 0;
Mscrm.ProcessAutomation.ConditionActivity.defaultYesBranchIndex = 1;
Mscrm.ProcessAutomation.ConditionActivity.defaultNoBranchIndex = 2;
Mscrm.ProcessAutomation.ProcessSlotIconType.YesBranch = "YesBranch";
Mscrm.ProcessAutomation.ProcessSlotIconType.NoBranch = "NoBranch";
Mscrm.ProcessAutomation.ProcessCommonTileInformation
    .defaultTemplate =
    '\r\n\t\t\t\t<span class="tileTitle" title="<%= Title %>">\r\n\t\t\t\t\t<span class="tileTableCell">\r\n\t\t\t\t\t\t<span class="tileInner ellipsis">\r\n\t\t\t\t\t\t\t<%= Title %>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</span>';
Mscrm.ProcessAutomation.LookupValueBuilder.$E = null;
Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent.attributePropertySpecName = "Name";
Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent.attributePropertySpecValue = "Value";
Mscrm.ProcessAutomation.ProcessBasePropertyPanelViewComponent.attributePropertySpecValueAttributeEncoded = "ValueAttr";
Mscrm.ProcessAutomation.ReadProcessPropertyPanelView.componentParentElementIdFormat = "propertycomponent{0}";
Mscrm.ProcessAutomation.NullPropertyPanelView.$e = null;
Mscrm.ProcessAutomation.ProcessPropertyPanelView.$e = null;
Mscrm.ProcessAutomation.ProcessInitializer.$3 = null;
Mscrm.ProcessAutomation.ProcessActionActivityType.root = "ac_root";
Mscrm.ProcessAutomation.ProcessActionCssClass.scrollableRoot = "wf_scrollable_filled_group_actionroot";
Mscrm.ProcessAutomation.WorkflowActivityType.workflowStage = "wf_stage";
Mscrm.ProcessAutomation.WorkflowActivityType.create = "wf_create";
Mscrm.ProcessAutomation.WorkflowActivityType.stop = "wf_stopworkflow";
Mscrm.ProcessAutomation.WorkflowActivityType.customActivity = "wf_customactivity";
Mscrm.ProcessAutomation.WorkflowActivityType.assign = "wf_assign";
Mscrm.ProcessAutomation.WorkflowActivityType.childWorkflow = "wf_child";
Mscrm.ProcessAutomation.WorkflowActivityType.root = "wf_root";
Mscrm.ProcessAutomation.WorkflowActivityType.sendEmail = "wf_sendemail";
Mscrm.ProcessAutomation.WorkflowActivityType.setState = "wf_setstate";
Mscrm.ProcessAutomation.WorkflowActivityType.update = "wf_update";
Mscrm.ProcessAutomation.WorkflowActivityType.waitBranch = "wf_waitbranch";
Mscrm.ProcessAutomation.WorkflowActivityType.wait = "wf_wait";
Mscrm.ProcessAutomation.WorkflowActivityType.waitTimeout = "wf_waittimeout";
Mscrm.ProcessAutomation.WorkflowCssClass.assignTile = "assignTile";
Mscrm.ProcessAutomation.WorkflowCssClass.childTile = "childTile";
Mscrm.ProcessAutomation.WorkflowCssClass.createTile = "createTile";
Mscrm.ProcessAutomation.WorkflowCssClass.customActivityTile = "customActivityTile";
Mscrm.ProcessAutomation.WorkflowCssClass.sendEmailTile = "sendEmailTile";
Mscrm.ProcessAutomation.WorkflowCssClass.setStateTile = "setStateTile";
Mscrm.ProcessAutomation.WorkflowCssClass.stopWorkflowTile = "stopWorkflowTile";
Mscrm.ProcessAutomation.WorkflowCssClass.updateTile = "updateTile";
Mscrm.ProcessAutomation.WorkflowCssClass.waitTile = "waitTile";
Mscrm.ProcessAutomation.WorkflowCssClass.waitBranchTile = "waitBranchTile";
Mscrm.ProcessAutomation.WorkflowCssClass.waitTimeoutTile = "waitTimeoutTile";
Mscrm.ProcessAutomation.WorkflowCssClass.rootTile = "wf_rootTile";
Mscrm.ProcessAutomation.WorkflowCssClass.workflowStageTile = "workflowStageTile";
Mscrm.ProcessAutomation.WorkflowCssClass.scrollableRoot = "wf_scrollable_filled_group_root";
Mscrm.ProcessAutomation.WorkflowCssClass.scrollableWait = "wf_scrollable_filled_group_wait";
Mscrm.ProcessAutomation.WorkflowCssClass.scrollableWaitBranch = "wf_scrollable_filled_group_waitbranch";
Mscrm.ProcessAutomation.WorkflowCssClass.scrollableCustomActivity = "wf_scrollable_filled_group_customactivity";
Mscrm.ProcessAutomation.WorkflowStepActivityStatus.inProgress = 1;
Mscrm.ProcessAutomation.WorkflowStepActivityStatus.successfullyCompleted = 2;
Mscrm.ProcessAutomation.WorkflowStepActivityStatus.failed = 3;
Mscrm.ProcessAutomation.WorkflowStepActivityStatus.canceled = 4;
Mscrm.ProcessAutomation.WorkflowStepActivityStatus.waiting = 5;
Mscrm.ProcessAutomation.WorkflowStepActivityStatus.hidden = 0;
Mscrm.ProcessAutomation.WorkflowStepActivityStatus.empty = -1;
Mscrm.ProcessAutomation.WorkflowStepActivityStatus.uninitialized = -2;
Mscrm.ProcessAutomation.WorkflowRuntimeDecoratorFactory.$U = null;
Mscrm.ProcessAutomation.ChangeStatusBodyPropertyPanelViewComponent.$2X = "statuscode";
Mscrm.ProcessAutomation.SendEmailBodyPropertyPanelViewComponent.$2I = ["to", "from", "cc", "bcc"];
Mscrm.ProcessAutomation.ElementId.canvas = "canvas";
Mscrm.ProcessAutomation.ElementId.processDesigner = "processdesigner";
Mscrm.ProcessAutomation.ElementId.workspaceWrapper = "workspaceWrapper";
Mscrm.ProcessAutomation.ElementId.loader = "loader";
Mscrm.ProcessAutomation.ElementId.zoomItem = "zoomItem";
Mscrm.ProcessAutomation.ElementId.panIcon = "commandIcon";
Mscrm.ProcessAutomation.ElementId.toolPane = "toolpane";
Mscrm.ProcessAutomation.ElementId.toolPaneHeader = "toolpaneheader";
Mscrm.ProcessAutomation.ElementId.library = "library";
Mscrm.ProcessAutomation.ElementId.property = "property";
Mscrm.ProcessAutomation.ElementId.libraryTab = "libraryTab";
Mscrm.ProcessAutomation.ElementId.propertyTab = "propertyTab";
Mscrm.ProcessAutomation.ElementId.processCategory = "processCategory";
Mscrm.ProcessAutomation.ElementId.processTitle = "processTitle";
Mscrm.ProcessAutomation.ElementId.processFooter = "processFooter";
Mscrm.ProcessAutomation.ElementId.processFooterReadOnlyState = "footerReadonlystate";
Mscrm.ProcessAutomation.ElementId.processFooterState = "processFooterState";
Mscrm.ProcessAutomation.ElementId.processProp = "process_prop";
Mscrm.ProcessAutomation.ProcessDesignerDataJsonWrapper.$3 = null;
Mscrm.ProcessAutomation.ResourceId.emptyActivityText = "[DRAG ELEMENT HERE]";
Mscrm.ProcessAutomation.ResourceId.conditionYes = "ConditionYes";
Mscrm.ProcessAutomation.ResourceId.conditionNo = "ConditionNo";
Mscrm.ProcessAutomation.ResourceId.libraryGeneral = "LibraryGeneral";
Mscrm.ProcessAutomation.ResourceId.libraryStage = "LibraryStage";
Mscrm.ProcessAutomation.ResourceId.libraryCondition = "LibraryCondition";
Mscrm.ProcessAutomation.ResourceId.libraryAction = "LibraryAction";
Mscrm.ProcessAutomation.ResourceId.libraryCreateRecord = "LibraryCreateRecord";
Mscrm.ProcessAutomation.ResourceId.propertyTitle = "PropertyTitle";
Mscrm.ProcessAutomation.ResourceId.createTileTitleFormat = "CreateTileTitleFormat";
Mscrm.ProcessAutomation.ResourceId.stopTileTitleFormat = "StopTileTitleFormat";
Mscrm.ProcessAutomation.ResourceId.sendEmailTileTitleFormat = "SendEmailTileTitleFormat";
Mscrm.ProcessAutomation.ResourceId.description = "ProcessDescription";
Mscrm.ProcessAutomation.ResourceId.conditionText = "ProcessConditionText";
Mscrm.ProcessAutomation.ResourceId.entity = "ProcessEntity";
Mscrm.ProcessAutomation.ResourceId.propertyPanelAriaLabel = "[PROPERTY PANEL ARIA LABEL]";
Mscrm.ProcessAutomation.ResourceId.confirmText = "ConfirmText";
Mscrm.ProcessAutomation.ResourceId.discardText = "DiscardText";
Mscrm.ProcessAutomation.ResourceId.stagePropertyPropertyTitle = "StagePropertyPropertyTitle";
Mscrm.ProcessAutomation.ResourceId.stagePropertyStageName = "StagePropertyStageName";
Mscrm.ProcessAutomation.ResourceId.stagePropertyStageCategory = "StagePropertyStageCategory";
Mscrm.ProcessAutomation.ResourceId.stagePropertyStageCategoryEmpty = "StagePropertyStageCategoryEmpty";
Mscrm.ProcessAutomation.ResourceId.stagePropertyEntity = "StagePropertyEntity";
Mscrm.ProcessAutomation.ResourceId.stagePropertyStepsSectionTitle = "StagePropertyStepsSectionTitle";
Mscrm.ProcessAutomation.ResourceId.stagePropertyStepHeader = "StagePropertyStepHeader";
Mscrm.ProcessAutomation.ResourceId.stagePropertyTypeHeader = "StagePropertyTypeHeader";
Mscrm.ProcessAutomation.ResourceId.stagePropertyFieldHeader = "StagePropertyFieldHeader";
Mscrm.ProcessAutomation.ResourceId.stagePropertyTypeValue = "StagePropertyTypeValue";
Mscrm.ProcessAutomation.ResourceId.stagePropertyRelationshipSectionTitle = "StagePropertyRelationshipSectionTitle";
Mscrm.ProcessAutomation.ResourceId.stagePropertyParentStageHeader = "StagePropertyParentStageHeader";
Mscrm.ProcessAutomation.ResourceId.stagePropertyParentEntityHeader = "StagePropertyParentEntityHeader";
Mscrm.ProcessAutomation.ResourceId.stagePropertyRelationshipHeader = "StagePropertyRelationshipColumnHeader";
Mscrm.ProcessAutomation.ResourceId.stagePropertyPropertyEntityTitle = "StagePropertyPropertyEntityTitle";
Mscrm.ProcessAutomation.ResourceId.assignPropertyTitle = "AssignPropertyTitle";
Mscrm.ProcessAutomation.ResourceId.assignPropertyAssignTo = "AssignPropertyAssignTo";
Mscrm.ProcessAutomation.ResourceId.createPropertyTitle = "CreatePropertyTitle";
Mscrm.ProcessAutomation.ResourceId.createPropertyFieldValues = "CreatePropertyFieldValues";
Mscrm.ProcessAutomation.ResourceId.updatePropertyTitle = "UpdatePropertyTitle";
Mscrm.ProcessAutomation.ResourceId.updatePropertyFieldValues = "UpdatePropertyFieldValues";
Mscrm.ProcessAutomation.ResourceId.changeStatusPropertyTitle = "ChangeStatusPropertyTitle";
Mscrm.ProcessAutomation.ResourceId.changeStatusPropertyStatus = "ChangeStatusPropertyStatus";
Mscrm.ProcessAutomation.ResourceId.customActivityPropertyTitle = "CustomActivityPropertyTitle";
Mscrm.ProcessAutomation.ResourceId.customActivityPropertyActivity = "CustomActivityPropertyActivity";
Mscrm.ProcessAutomation.ResourceId.conditionPropertyTitle = "ConditionPropertyTitle";
Mscrm.ProcessAutomation.ResourceId.conditionPropertyConditionTextLabel = "ConditionPropertyConditionTextLabel";
Mscrm.ProcessAutomation.ResourceId.conditionPropertyEmptyPlaceholder = "ConditionPropertyEmptyPlaceholder";
Mscrm.ProcessAutomation.ResourceId.waitBranchPropertyTitle = "WaitBranchPropertyTitle";
Mscrm.ProcessAutomation.ResourceId.waitBranchPropertyConditionTextLabel = "WaitBranchPropertyConditionTextLabel";
Mscrm.ProcessAutomation.ResourceId.waitPropertyTitle = "WaitPropertyTitle";
Mscrm.ProcessAutomation.ResourceId.waitPropertyDisplayText = "WaitPropertyDisplayText";
Mscrm.ProcessAutomation.ResourceId.waitTileTitle = "WaitTileTitle";
Mscrm.ProcessAutomation.ResourceId.sendEmailPropertyTitle = "SendEmailPropertyTitle";
Mscrm.ProcessAutomation.ResourceId.sendEmailPropertyEntity = "SendEmailPropertyEntity";
Mscrm.ProcessAutomation.ResourceId.sendEmailPropertyTemplate = "SendEmailPropertyTemplate";
Mscrm.ProcessAutomation.ResourceId.sendEmailPropertyBody = "SendEmailPropertyBody";
Mscrm.ProcessAutomation.ResourceId.childWorkflowPropertyTitle = "ChildWorkflowPropertyTitle";
Mscrm.ProcessAutomation.ResourceId.childWorkflowPropertyEntity = "ChildWorkflowPropertyEntity";
Mscrm.ProcessAutomation.ResourceId.childWorkflowPropertyWorkflowLabel = "ChildWorkflowPropertyWorkflowLabel";
Mscrm.ProcessAutomation.ResourceId.stopWorkflowPropertyTitle = "StopWorkflowPropertyTitle";
Mscrm.ProcessAutomation.ResourceId.stopWorkflowPropertyStatus = "StopWorkflowPropertyStatus";
Mscrm.ProcessAutomation.ResourceId.stopWorkflowPropertyStatusMessage = "StopWorkflowPropertyStatusMessage";
Mscrm.ProcessAutomation.ResourceId.executionTime = "ExecutionTime";
Mscrm.ProcessAutomation.ResourceId.workflowTileTitle = "WorkflowTileTitle";
Mscrm.ProcessAutomation.ResourceId.workflowPropertyTitle = "WorkflowPropertyTitle";
Mscrm.ProcessAutomation.ResourceId.workflowPropertyEntity = "WorkflowPropertyEntity";
Mscrm.ProcessAutomation.ResourceId.workflowPropertyScope = "WorkflowPropertyScope";
Mscrm.ProcessAutomation.ResourceId.workflowPropertyUsageLabel = "WorkflowPropertyUsageLabel";
Mscrm.ProcessAutomation.ResourceId.workflowPropertyUsageChild = "WorkflowPropertyUsageChild";
Mscrm.ProcessAutomation.ResourceId.workflowPropertyUsageOnDemand = "WorkflowPropertyUsageOnDemand";
Mscrm.ProcessAutomation.ResourceId.workflowPropertyTriggerOnLabel = "WorkflowPropertyTriggerOnLabel";
Mscrm.ProcessAutomation.ResourceId.workflowPropertyTriggerCreateLabel = "WorkflowPropertyTriggerCreateLabel";
Mscrm.ProcessAutomation.ResourceId.workflowPropertyTriggerDeleteLabel = "WorkflowPropertyTriggerDeleteLabel";
Mscrm.ProcessAutomation.ResourceId.workflowPropertyTriggerLabel = "WorkflowPropertyTriggerLabel";
Mscrm.ProcessAutomation.ResourceId.workflowPropertyTriggerNone = "WorkflowPropertyTriggerNone";
Mscrm.ProcessAutomation.ResourceId.actionTileTitle = "ActionTileTitle";
Mscrm.ProcessAutomation.ResourceId.actionPropertyTitle = "ActionPropertyTitle";
Mscrm.ProcessAutomation.ResourceId.actionPropertyIsTransacted = "ActionPropertyIsTransacted";
Mscrm.ProcessAutomation.ResourceId.actionArgumentInput = "ActionArgumentInput";
Mscrm.ProcessAutomation.ResourceId.actionArgumentOutput = "ActionArgumentOutput";
Mscrm.ProcessAutomation.ResourceId.actionArgumentName = "ActionArgumentName";
Mscrm.ProcessAutomation.ResourceId.actionArgumentType = "ActionArgumentType";
Mscrm.ProcessAutomation.ResourceId.businessProcessTileTitle = "BusinessProcessTileTitle";
Mscrm.ProcessAutomation.ResourceId.businessProcessPropertyTitle = "BusinessProcessPropertyTitle";
Mscrm.ProcessAutomation.ResourceId.businessProcessPropertyEntity = "BusinessProcessPropertyEntity";
Mscrm.ProcessAutomation.ResourceId.businessProcessPropertyOwner = "BusinessProcessPropertyOwner";
Mscrm.ProcessAutomation.ResourceId.businessProcessPropertyDescription = "BusinessProcessPropertyDescription";
Mscrm.ProcessAutomation.ResourceId.businessProcessPropertyRoleName = "BusinessProcessPropertyRoleName";
Mscrm.ProcessAutomation.ResourceId.businessProcessPropertyRoleBusinessUnit = "BBusinessProcessPropertyRoleBusinessUnit";
Mscrm.ProcessAutomation.ResourceId.businessProcessPropertySecurityRoles = "BusinessProcessPropertySecurityRoles";
Mscrm.ProcessAutomation.ResourceId.workflowRuntimeStatusLabel = "WorkflowRuntimeStatusLabel";
Mscrm.ProcessAutomation.ResourceId.propertyPanelPlaceholderText = "PropertyPanelPlaceholderText";
Mscrm.ProcessAutomation.ResourceId.emptyPropertyPlaceholder = "EmptyPropertyPlaceholder";
Mscrm.ProcessAutomation.ResourceId
    .runtimeWorkflowPropertyExecutionDetailsLabel = "RuntimeWorkflowPropertyExecutionDetailsLabel";
Mscrm.ProcessAutomation.ResourceId.runtimeJobOwnerLabel = "RuntimeJobOwnerLabel";
Mscrm.ProcessAutomation.ResourceId.runtimeRegardingLabel = "RuntimeRegardingLabel";
Mscrm.ProcessAutomation.ResourceId.runtimeCreatedOnLabel = "RuntimeCreatedOnLabel";
Mscrm.ProcessAutomation.ResourceId.runtimeCompletedOnLabel = "RuntimeCompletedOnLabel";
Mscrm.ProcessAutomation.ResourceId.runtimeRetryCountLabel = "RuntimeRetryCountLabel";
Mscrm.ProcessAutomation.ResourceId.runtimeStartReasonLabel = "RuntimeStartReasonLabel";
Mscrm.ProcessAutomation.ResourceId.runtimePostponeUntilLabel = "RuntimePostponeUntilLabel";
Mscrm.ProcessAutomation.ResourceId.dialogTileTitle = "DialogTileTitle";
Mscrm.ProcessAutomation.ResourceId.dialogPropertyTitle = "DialogPropertyTitle";
Mscrm.ProcessAutomation.ResourceId.dialogInputArguments = "DialogInputArguments";
Mscrm.ProcessAutomation.ResourceId.dialogVariables = "DialogVariables";
Mscrm.ProcessAutomation.ResourceId.dialogDefaultValues = "DialogDefaultValues";
Mscrm.ProcessAutomation.ResourceId.childDialogTileTitle = "ChildDialogTileTitle";
Mscrm.ProcessAutomation.ResourceId.childDialogPropertyTitle = "ChildDialogPropertyTitle";
Mscrm.ProcessAutomation.ResourceId.dialog = "Dialog";
Mscrm.ProcessAutomation.ResourceId.pageTileTitle = "PageTileTitle";
Mscrm.ProcessAutomation.ResourceId.pagePropertyTitle = "PagePropertyTitle";
Mscrm.ProcessAutomation.ResourceId.promptAndResponse = "PromptAndResponse";
Mscrm.ProcessAutomation.ResourceId.assignValueTileStringFormat = "AssignValueTileStringFormat";
Mscrm.ProcessAutomation.ResourceId.assignValuePropertyTitle = "AssignValuePropertyTitle";
Mscrm.ProcessAutomation.ResourceId.assignValueVariableName = "AssignValueVariableName";
Mscrm.ProcessAutomation.ResourceId.value = "Value";
Mscrm.ProcessAutomation.ResourceId.queryTileTitle = "QueryTileTitle";
Mscrm.ProcessAutomation.ResourceId.queryPropertyTitle = "QueryPropertyTitle";
Mscrm.ProcessAutomation.ResourceId.statementLabel = "StatementLabel";
Mscrm.Automation.ProcessPropertyPanelActionHandlerProvider.$j = null;
Mscrm.Automation.ProcessActivityFocusHandler.$17 = null;
Mscrm.Automation.ProcessSlotTileHolderHandlerFactory.$j = null