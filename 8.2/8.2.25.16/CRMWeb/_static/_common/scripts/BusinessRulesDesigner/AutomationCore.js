// -----------------------------------------------------------------------
// <copyright file="SlotIconType.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="../Common/Common.ts" />
    (function (Automation) {
        /** Slot icon type.
        * Defining it as string, so that each editor can add their own type in their class
        */
        var SlotIconType = (function () {
            function SlotIconType() {
            }
            SlotIconType.Empty = "empty";
            return SlotIconType;
        })();
        Automation.SlotIconType = SlotIconType;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="SlotModel.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Mscrm;
(function (Mscrm) {
    /// <reference path="../Imported/Backbone.d.ts" />
    /// <reference path="../Common/Automation.d.ts" />
    /// <reference path="./SlotIconType.ts" />
    (function (Automation) {
        /** Slot Model */
        var SlotType = (function () {
            function SlotType() {
            }
            SlotType.TileHolder = 0;
            SlotType.InsertHorizontal = 1;
            SlotType.InsertVertical = 2;
            SlotType.IconHolder = 3;
            return SlotType;
        })();
        Automation.SlotType = SlotType;

        var SlotModel = (function (_super) {
            __extends(SlotModel, _super);
            /** Create a new instance of the SlotModel
            * @param activity: The activity for the slot model.
            * @param type: The slot type for the slot model.
            */
            function SlotModel(activity, slotType, iconType) {
                _super.call(this);
                this.set("activity", activity);
                this.set("slotType", (slotType != undefined) ? slotType : SlotType.TileHolder);
                this.set("iconType", (iconType != undefined) ? iconType : Automation.SlotIconType.Empty);
            }
            /** Get the activity.
            * @return: Activity
            */
            SlotModel.prototype.getActivity = function () {
                return this.get("activity");
            };

            /** Set the activity.
            * @value: The activity.
            */
            SlotModel.prototype.setActivity = function (value) {
                this.set("activity", value);
            };

            /** Get the slot type.
            * @return: The slot type.
            */
            SlotModel.prototype.getSlotType = function () {
                return this.get("slotType");
            };

            /** Set the slot type.
            * @value: The slot type.
            */
            SlotModel.prototype.setSlotType = function (value) {
                this.set("slotType", value);
            };

            /** Get the activity type.
            * @return: The activity type.
            */
            SlotModel.prototype.getIconType = function () {
                return this.get("iconType");
            };

            /** Set the activity type.
            * @value: The activity type.
            */
            SlotModel.prototype.setIconType = function (value) {
                this.set("iconType", value);
            };
            return SlotModel;
        })(Backbone.Model);
        Automation.SlotModel = SlotModel;
        ;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="ItemModel.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="../Imported/Backbone.d.ts" />
    (function (Automation) {
        /** The item model. */
        Automation.ItemModel = Backbone.Model.extend({
            defaults: {
                ActivityTypeID: "",
                Title: ""
            }
        });
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="ActivityDefinitionModel.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="../../Imported/Backbone.d.ts" />
    /// <reference path="../../Common/Common.ts" />
    /// <reference path="../../Common/Automation.d.ts" />
    /// <reference path="../../AutomationControl.ts" />
    /// <reference path="../ItemModel.ts" />
    (function (Automation) {
        /* Activity model for workflow automation. */
        Automation.ActivityDefinitionModel = Backbone.Model.extend({
            idAttribute: 'ActivityID',
            defaults: {
                ProcessId: null,
                ParentActivityID: null,
                ParentBranchID: 0,
                ActivityTypeID: "empty",
                Properties: {}
            },
            /** Returns the default properties. */
            getDefaultProperties: function () {
                return {
                    Items: [],
                    UI: { Row: 0, Col: 0, readonlyMode: false },
                    ActiveItemIndex: 0
                };
            },
            initialize: function (options) {
                this.setProcessId(Automation.CurrentAutomationControl.processId);
                if ($.isEmptyObject(this.get("Properties"))) {
                    var properties = this.getDefaultProperties();
                    this.set("Properties", properties);
                }
            },
            sync: function (method, model, options) {
                var deferred = $.Deferred();
                deferred.resolve();
                return deferred.promise();
            },
            // Setters and getter
            setValue: function (object, key, value) {
                object[key] = value;
                this.trigger("change");
            },
            getItemCount: function () {
                return this.get("Properties").Items.length;
            },
            /** Gets the item from activity.
            * @param itemId id of the item to get.
            */
            getItem: function (itemId) {
                var topItem = this.get("Properties").Items[itemId];

                if (topItem == undefined)
                    topItem = { ItemID: null, ActivityTypeID: Automation.ActivityType.Empty };

                return new Automation.ItemModel(topItem);
            },
            /* The item that is on top of the stack */
            getActiveItem: function () {
                var index = this.getActiveItemIndex();
                return this.getItem(index);
            },
            IsEmpty: function (itemId) {
                var item;

                if (typeof (itemId) === "undefined") {
                    item = this.getActiveItem();
                } else {
                    item = this.getItem(itemId);
                }

                if (item.attributes['ItemID'] == null)
                    return true;
                else
                    return false;
            },
            setActiveItemProperties: function (properties) {
                var index = this.getActiveItemIndex();
                var topItem = this.get("Properties").Items[index];
                $.extend(topItem, properties);
                this.trigger("change");
            },
            setActiveItemPropertiesWithoutRaisingEvent: function (properties) {
                var index = this.getActiveItemIndex();
                var topItem = this.get("Properties").Items[index];
                $.extend(topItem, properties);
            },
            setActiveItemIndex: function (index) {
                this.get("Properties").ActiveItemIndex = index;
            },
            getActiveItemIndex: function () {
                return this.get("Properties").ActiveItemIndex;
            },
            getProcessId: function () {
                return this.get("ProcessId");
            },
            setProcessId: function (value) {
                this.set("ProcessId", value);
            },
            getActivityId: function () {
                return this.get("ActivityID");
            },
            setActivityId: function (value) {
                this.set("ActivityID", value);
            },
            getParentActivityId: function () {
                return this.get("ParentActivityID");
            },
            setParentActivityId: function (value) {
                this.set("ParentActivityID", value);
            },
            getParent: function () {
                return Automation.CurrentAutomationControl.activityTree.getParent(this);
            },
            getParentBranchId: function () {
                return this.get("ParentBranchID");
            },
            setParentBranchId: function (value) {
                this.set("ParentBranchID", value);
            },
            getActivities: function () {
                return Automation.CurrentAutomationControl.activityTree.getChildActivities(this);
            },
            /** Get activities sorted by parentBranchOID */
            getChildActivitiesSorted: function () {
                return _.sortBy(this.getActivities(), function (activity) {
                    return activity.getParentBranchId();
                });
            },
            getActivityTypeId: function () {
                return this.get("ActivityTypeID");
            },
            setActivityTypeId: function (activityType) {
                this.set("ActivityTypeID", activityType);
            },
            getProperties: function () {
                return this.get("Properties");
            },
            setProperties: function (value) {
                this.set("Properties", value);
            },
            getRow: function () {
                return parseInt(this.get("Properties").UI.Row);
            },
            setRow: function (value) {
                this.setValue(this.get("Properties").UI, "Row", value);
            },
            getCol: function () {
                return parseInt(this.get("Properties").UI.Col);
            },
            setCol: function (value) {
                this.setValue(this.get("Properties").UI, "Col", value);
            },
            getReadonlyMode: function () {
                // Return true only if readonlyMode is set to true, false otherwise (if it is false or undefined)
                return this.get("Properties").UI.readonlyMode == true;
            },
            setReadonlyMode: function (value) {
                this.setValue(this.get("Properties").UI, "readonlyMode", value);
            },
            getIsEditMode: function () {
                var isEditMode = false;
                switch (this.getActiveItem().get("isEditMode")) {
                    case "False", false:
                        isEditMode = false;
                        break;
                    case "True", true:
                        isEditMode = true;
                        break;
                }

                return isEditMode;
            },
            setIsEditMode: function (value) {
                this.setActiveItemProperties({ isEditMode: value });
            },
            /** Add a child activity.
            * @param childActivity: The child activity.
            */
            addChildActivity: function (childActivity) {
                Automation.CurrentAutomationControl.activityTree.addChildActivity(this, childActivity);
            },
            /** Add a new item to the activity.
            * @param activityType: Type of the activity to ad to items.
            */
            addNewItem: function (activityType) {
                var tile = { ItemID: null, ActivityTypeID: activityType, Title: "Undefined" };
                if (this.getActivityTypeId() == Automation.ActivityType.Empty)
                    this.setActivityTypeId(activityType);

                this.get("Properties").Items.push(tile);
                this.setActiveItemIndex(this.getItemCount() - 1);
            },
            /** delete a item to the activity.
            * @param itemIndex: ItemIndex of item to be deleted from activity.
            */
            deleteItem: function (itemIndex) {
                var activeItemIndex = this.getActiveItemIndex();
                var itemCount = this.getItemCount();
                this.get("Properties").Items.splice(itemIndex, 1);

                // if last item is active item, reduce the active item index by 1 after an item delete
                if (activeItemIndex == (itemCount - 1)) {
                    this.setActiveItemIndex(activeItemIndex - 1);
                }
            },
            /**
            * Returns true or false if the activity is a leaf.
            */
            isLeaf: function () {
                var count = this.getActivities().length;

                return count > 0 ? false : true;
            },
            /**
            * Gets the next parent branch id for this activity.
            */
            getNextParentBranchId: function () {
                var childrenCount = this.getChildActivitiesSorted().length;
                return childrenCount;
            },
            /**
            * Gets the default leaf.
            */
            getDefaultLeaf: function () {
                var childActivities = this.getChildActivitiesSorted();
                if (childActivities.length > 0) {
                    var firstChild = childActivities[0];
                    if (firstChild.isLeaf()) {
                        return firstChild;
                    }
                }
                return undefined;
            },
            /** Saves the activity and creates it's subsequent activities.
            Note: The instance that calls this method will not be automatically updated. Use the returned promise to do so.
            @return: promise with the new activity as a parameter.
            */
            saveActivityWithSubsequentActivities: function () {
                var self = this;
                var deferred = $.Deferred();

                if (self.getActivityTypeId() == Automation.ActivityType.Empty) {
                    Automation.CurrentAutomationControl.activityTree.add(self);
                    deferred.resolveWith(self, [self]);
                } else {
                    self.save().done(function () {
                        Automation.CurrentAutomationControl.activityTree.add(self);
                        self.createSubsequentActivity().done(function () {
                            deferred.resolveWith(self, [self]);
                        });
                    });
                }
                return deferred.promise();
            },
            /** Creates a new empty slots as chilren of the given activity.
            * @param parentActivity: The parent activity
            */
            createSubsequentActivity: function () {
                var self = this;
                var childPromises = [];
                var deferred = $.Deferred();
                var activities = Automation.CurrentAutomationControl.settings.getSubsequentActivityGenerator().createChildActivities(self);
                $(activities).each(function (index, activity) {
                    if (activity.getActivityTypeId() != Automation.ActivityType.Empty) {
                        activity = activity.convertToConcreteActivity();
                        var promise = activity.saveActivityWithSubsequentActivities();
                        childPromises.push(promise);
                    } else {
                        Automation.CurrentAutomationControl.activityTree.add(activity);
                    }
                });

                $.when.apply(self, childPromises).done(function () {
                    deferred.resolve();
                });

                return deferred.promise();
            },
            convertToConcreteActivity: function () {
                var currentActivity = this;
                var convertedActivity = Automation.CurrentAutomationControl.settings.getActivityDefinitionFactory().convertToConcreteActivity(currentActivity);

                if (Automation.CurrentAutomationControl.activityTree.has(currentActivity)) {
                    Automation.CurrentAutomationControl.activityTree.remove(currentActivity);
                    Automation.CurrentAutomationControl.activityTree.add(convertedActivity);
                }

                return convertedActivity;
            },
            /** Returns true if the activity can be moved. */
            canMove: function () {
                return true;
            },
            /** Returns the array of activities that this activity is dependant on. */
            getDependantActivities: function () {
                return [];
            },
            /** Gets a clone of relevant activities data (doesn't include its ids) */
            getCloneOfActivity: function () {
                var newActivity = Automation.CurrentAutomationControl.settings.getActivityDefinitionFactory().createActivity(this.getActivityTypeId());
                newActivity.setProcessId(this.getProcessId());
                newActivity.setParentBranchId(this.getParentBranchId());
                newActivity.setProperties(this.getProperties());
                return newActivity;
            },
            toString: function () {
                var newline = "\n";
                var content = ">> Activity <<" + newline;
                content += "ActivityID : " + this.getActivityId() + newline;
                content += "BranchID : " + this.getParentBranchId() + newline;
                content += "ActivityTypeID : " + this.getActivityTypeId() + newline;
                content += "ParentID : " + this.getParentActivityId() + newline;
                content += "Row :" + this.getRow() + " Col :" + this.getCol() + newline;
                return content;
            }
        }, /**
        /* This is the list of events that activity definition model supports.
        /* Each event in the list has a name and a fire method that triggers the event.
        /* The fire event has a mandatory first parameter context, from which the event will be triggered.
        */
        {
            supportedEvents: {
                /* Notifies when something has been droped on the Slot */
                select: {
                    name: "select",
                    trigger: function (context) {
                        var self = context;
                        var eventName = Automation.ActivityDefinitionModel.supportedEvents.select.name;
                        self.trigger(eventName);
                    }
                },
                deselect: {
                    name: "deselect",
                    trigger: function (context) {
                        var self = context;
                        var eventName = Automation.ActivityDefinitionModel.supportedEvents.deselect.name;
                        self.trigger(eventName);
                    }
                },
                paste: {
                    name: "paste",
                    trigger: function (context) {
                        var self = context;
                        var eventName = Automation.ActivityDefinitionModel.supportedEvents.paste.name;
                        self.trigger(eventName);
                    }
                },
                dragInProgress: {
                    name: "dragInProgress",
                    trigger: function (context) {
                        var self = context;
                        var eventName = Automation.ActivityDefinitionModel.supportedEvents.dragInProgress.name;
                        self.trigger(eventName);
                    }
                },
                stopDragInProgress: {
                    name: "stopDragInProgress",
                    trigger: function (context) {
                        var self = context;
                        var eventName = Automation.ActivityDefinitionModel.supportedEvents.stopDragInProgress.name;
                        self.trigger(eventName);
                    }
                }
            }
        });
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="IActivityKeyDownHandler.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
// -----------------------------------------------------------------------
// <copyright file="DefaultPropertyPanelView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="../Common/Common.ts" />
    /// <reference path="../Common/Automation.d.ts" />
    /// <reference path="../Slot/Handlers/KeyHandlers/IActivityKeyDownHandler.ts"/>
    (function (Automation) {
        /** Property Panel View */
        var DefaultPropertyPanelView = (function (_super) {
            __extends(DefaultPropertyPanelView, _super);
            function DefaultPropertyPanelView(currentModel) {
                _super.call(this, {
                    model: currentModel
                });
            }
            /** Handles key down events for the panel view */
            DefaultPropertyPanelView.prototype.keyDownHandler = function (event) {
                var keyDownHandler = Automation.CurrentAutomationControl.settings.getPropertyPanelActionHandlerProvider().createKeyDownHandler(this.model);
                keyDownHandler.keyDown(this.$el, event);
            };

            /** Is this property panel view used iframe to render
            * @return: iframe flag
            */
            DefaultPropertyPanelView.prototype.isIframe = function () {
                return false;
            };

            /** Render property panel view
            * @return:
            */
            DefaultPropertyPanelView.prototype.renderPropertyView = function () {
                var deferred = $.Deferred();
                deferred.Resolve(null);
                return deferred.promise();
            };

            /** Callback for when panel view has been rendered
            * @return:
            */
            DefaultPropertyPanelView.prototype.renderCompleted = function () {
                this.$el.bind("keydown", this.keyDownHandler);
            };

            /** Callback for when the property view is removed
            * @return:
            */
            DefaultPropertyPanelView.prototype.dispose = function () {
                this.$el.unbind("keydown", this.keyDownHandler);
            };
            return DefaultPropertyPanelView;
        })(Backbone.View);
        Automation.DefaultPropertyPanelView = DefaultPropertyPanelView;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="AutomationControl.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="./Common/Common.ts" />
    /// <reference path="./Common/Automation.d.ts" />
    (function (Automation) {
        Automation.CurrentAutomationControl = null;

        /** Control for campaign automation */
        var AutomationControl = (function () {
            function AutomationControl() {
                this.currentModel = null;
            }
            AutomationControl.prototype.initialize = function () {
                Automation.CurrentAutomationControl = this;
                AutomationControl.instance = this;
                this.globalEventManager = Automation.eventManager;
            };

            /* Updates the current selected model */
            AutomationControl.prototype.updateCurrentModel = function (newModel) {
                this.currentModel = newModel;
                if (newModel) {
                    var selectedActivities = newModel.getDependantActivities();
                    selectedActivities.push(newModel);
                    this.activityTree.setSelectedActivities(selectedActivities);
                } else {
                    this.activityTree.setSelectedActivities([]);
                }
                Automation.eventManager.trigger(Automation.EventNames.ModelUpdated);
            };

            AutomationControl.prototype.setAutoResize = function (canvasContainer, canvas, toolpane, loader) {
                function resize() {
                    var horizontalMargin = 32;
                    var minWidth = 200;
                    var veticalMargin = 160;
                    var minHeight = 500;
                    var canvasMargin = 28;

                    var widthForCanvas = $(window).width() - toolpane.width() - horizontalMargin;
                    var heightForCanvas = $(window).height() - veticalMargin;

                    widthForCanvas = widthForCanvas > minWidth ? widthForCanvas : minWidth;
                    canvasContainer.width(widthForCanvas);
                    loader.width(widthForCanvas);

                    heightForCanvas = heightForCanvas > minHeight ? heightForCanvas : minHeight;
                    toolpane.height(heightForCanvas + canvasMargin); // canvas has top margin, toolpane doesn't
                    canvas.height(heightForCanvas);
                    loader.height(heightForCanvas);
                }

                resize();
                $(window).resize(resize);
            };

            /* Gets the currently selected model */
            AutomationControl.prototype.getCurrentModel = function () {
                return this.currentModel;
            };

            /* Sets the currently selected model */
            AutomationControl.prototype.setCurrentModel = function (model) {
                this.currentModel = model;
            };
            return AutomationControl;
        })();
        Automation.AutomationControl = AutomationControl;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="DragTouchHelper.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    (function (Automation) {
        /**
        * Adds support for touch events to draggable ui objects
        */
        var DragTouchHelper = (function () {
            function DragTouchHelper() {
            }
            /** Maps touch events to supported mouse events
            * @param draggableElement element that supports draggable operations
            */
            DragTouchHelper.mapTouchEvents = function (draggableElement) {
                draggableElement.unbind('touchstart');
                draggableElement.unbind('touchmove');
                draggableElement.unbind('touchend');
                draggableElement.bind('touchstart', DragTouchHelper.touchEventHandler);
                draggableElement.bind('touchmove', DragTouchHelper.touchEventHandler);
                draggableElement.bind('touchend', DragTouchHelper.touchEventHandler);
            };

            DragTouchHelper.dispatchMouseEvent = function (newEventName, touch, originalEvent) {
                var newEvent = document.createEvent('MouseEvent');
                newEvent.initMouseEvent(newEventName, true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
                originalEvent.target.dispatchEvent(newEvent);
            };
            DragTouchHelper.longPressTresholdMilliseconds = 1000;

            DragTouchHelper.moveStarted = false;

            DragTouchHelper.touchEventHandler = function (e, ui) {
                e.preventDefault();
                var touch = e.originalEvent.changedTouches[0];

                var newEventName = '';
                if (e.type === 'touchstart') {
                    newEventName = 'mousedown';
                    DragTouchHelper.startTime = new Date().getTime();
                    DragTouchHelper.moveStarted = false;
                    DragTouchHelper.startScreenX = touch.screenX;
                    DragTouchHelper.startScreenY = touch.screenY;
                } else if (e.type === 'touchmove') {
                    newEventName = 'mousemove';
                    if (DragTouchHelper.startScreenX == touch.screenX && DragTouchHelper.startScreenY == touch.screenY) {
                        // Skip firing mouse move event on initial touch when location didn't change
                        return true;
                    }

                    DragTouchHelper.moveStarted = true;
                } else if (e.type === 'touchend') {
                    newEventName = 'mouseup';
                    DragTouchHelper.dispatchMouseEvent(newEventName, touch, e);

                    DragTouchHelper.endTime = new Date().getTime();

                    if (!DragTouchHelper.moveStarted) {
                        if ((DragTouchHelper.endTime - DragTouchHelper.startTime) > DragTouchHelper.longPressTresholdMilliseconds) {
                            newEventName = 'contextmenu';
                        } else {
                            newEventName = 'click';
                        }
                    }
                }

                DragTouchHelper.dispatchMouseEvent(newEventName, touch, e);
                return true;
            };
            return DragTouchHelper;
        })();
        Automation.DragTouchHelper = DragTouchHelper;
        ;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="ContextFlyoutItem.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="./Automation.d.ts" />
    /// <reference path="../AutomationControl.ts" />
    /// <reference path="../Model/Activities/ActivityDefinitionModel.ts" />
    (function (Automation) {
        /**
        * Summary: Creates ContextMenu Content
        */
        var ContextFlyoutItem = (function () {
            /**
            * Summary: Creates ContextMenu Content
            * @param activity: activity for which ContextMenu content has to be set
            */
            function ContextFlyoutItem(id, label, clickHandler) {
                this.id = id;
                this.label = label;
                this.clickHandler = clickHandler;
            }
            return ContextFlyoutItem;
        })();
        Automation.ContextFlyoutItem = ContextFlyoutItem;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="ConnectedComponentsExtractor.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="./Common.ts" />
    /// <reference path="./ConnectedComponent.ts" />
    /// <reference path="../AutomationControl.ts" />
    (function (Automation) {
        /**
        * Retrieves connected components in a workflow selection.
        */
        var ConnectedComponentsExtractor = (function () {
            function ConnectedComponentsExtractor(allConcreteActivities) {
                this.selectedActivitiesDictionary = [];
                this.visitedActivitiesDictionary = [];
                this.allActivities = [];
                this.selectedActivities = [];
                this.allActivities = allConcreteActivities;
            }
            /** Gets all the connected components from the selected activities.
            @return: array of connected components
            */
            ConnectedComponentsExtractor.prototype.getConnectedComponentsFromSelection = function (selectedActivities) {
                var _this = this;
                var connectedComponents = [];

                this.selectedActivities = selectedActivities;

                this.cleanUp();

                $.each(this.selectedActivities, function (index, activity) {
                    if (_this.visitedActivitiesDictionary[activity.getActivityId()] == false) {
                        var component = _this.getConnectedComponentForActivity(activity);
                        connectedComponents.push(component);
                    }
                });

                return this.sortComponents(connectedComponents);
            };

            ConnectedComponentsExtractor.prototype.sortComponents = function (connectedComponents) {
                var count = connectedComponents.length;

                for (var i = 0; i < count; i++) {
                    for (var j = i + 1; j < count; j++) {
                        var rootI = connectedComponents[i].getRoot();
                        var rootJ = connectedComponents[j].getRoot();
                        var distI = Automation.CurrentAutomationControl.activityTree.getDistanceFromRoot(rootI);
                        var distJ = Automation.CurrentAutomationControl.activityTree.getDistanceFromRoot(rootJ);

                        if ((distI > distJ) || (distI == distJ && rootI.getParentBranchId() > rootJ.getParentBranchId())) {
                            var aux = connectedComponents[i];
                            connectedComponents[i] = connectedComponents[j];
                            connectedComponents[j] = aux;
                        }
                    }
                }
                return connectedComponents;
            };

            ConnectedComponentsExtractor.prototype.cleanUp = function () {
                var _this = this;
                $.each(this.allActivities, function (index, activity) {
                    _this.visitedActivitiesDictionary[activity.getActivityId()] = false;
                    _this.selectedActivitiesDictionary[activity.getActivityId()] = false;
                });
                $.each(this.selectedActivities, function (index, activity) {
                    _this.selectedActivitiesDictionary[activity.getActivityId()] = true;
                });
            };

            ConnectedComponentsExtractor.prototype.getConnectedComponentForActivity = function (activity) {
                var root = this.getRootActivityForConnectedComponent(activity);
                var nodesTraversed = [];
                var orphanChildren = [];
                var nodesWithOrphanChildren = [];
                this.DepthFirstSearch(root, nodesTraversed, orphanChildren, nodesWithOrphanChildren);

                var component = new Automation.ConnectedComponent();
                component.setRoot(root);
                component.setNodes(nodesTraversed);
                component.setOrphanChildren(orphanChildren);
                component.setNodesWithOrphanChildren(nodesWithOrphanChildren);
                return component;
            };

            ConnectedComponentsExtractor.prototype.DepthFirstSearch = function (activity, nodesTraversed, orphanChildren, nodesWithOrphanChildren) {
                var _this = this;
                this.visitedActivitiesDictionary[activity.getActivityId()] = true;
                nodesTraversed.push(activity);
                var childrenActivities = activity.getChildActivitiesSorted();

                $.each(childrenActivities, function (index, child) {
                    if (_this.isActivityInSelection(child)) {
                        _this.DepthFirstSearch(child, nodesTraversed, orphanChildren, nodesWithOrphanChildren);
                    } else {
                        orphanChildren.push(child);
                        if ($.inArray(activity, nodesWithOrphanChildren) == -1) {
                            nodesWithOrphanChildren.push(activity);
                        }
                    }
                });
            };

            ConnectedComponentsExtractor.prototype.getRootActivityForConnectedComponent = function (activity) {
                var root = activity;
                while (this.isActivityInSelection(root.getParent())) {
                    root = root.getParent();
                }
                return root;
            };

            ConnectedComponentsExtractor.prototype.isActivityInSelection = function (activity) {
                if (this.selectedActivitiesDictionary[activity.getActivityId()] == true)
                    return true;
                return false;
            };
            return ConnectedComponentsExtractor;
        })();
        Automation.ConnectedComponentsExtractor = ConnectedComponentsExtractor;
        ;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="Dimensions.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    (function (Automation) {
        var Point = (function () {
            function Point(x, y) {
                this.x = x;
                this.y = y;
            }
            /** Set x coordinate. */
            Point.prototype.setX = function (value) {
                this.x = value;
            };

            /** Get X coordinate. */
            Point.prototype.getX = function () {
                return this.x;
            };

            /** Set y coordinate. */
            Point.prototype.setY = function (value) {
                this.y = value;
            };

            /** Get x coordinate. */
            Point.prototype.getY = function () {
                return this.y;
            };

            /* String representation of the object*/
            Point.prototype.toString = function () {
                var newline = "\n";
                var content = ">> Point <<" + newline;
                content += "x :" + this.x + " y :" + this.y + newline;
                return content;
            };
            return Point;
        })();
        Automation.Point = Point;

        /** Rectangle represenation */
        var Rectangle = (function () {
            /** Create a new instance of Rectangle
            * @param p1: left top point.
            * @param p2: right bottom point.
            * @param autoAdjusts: If set to true or not specified, it changes the coordinates to ensure that the points forming the rectangle are actually left top and right bottom.
            */
            function Rectangle(p1, p2, autoAdjust) {
                autoAdjust = (autoAdjust != false) ? true : false;
                if (autoAdjust) {
                    this.autoAdjustCoordinates(p1, p2);
                } else {
                    this.left = p1.getX();
                    this.right = p2.getX();
                    this.top = p1.getY();
                    this.bottom = p2.getY();
                }
                this.height = this.bottom - this.top;
                this.width = this.right - this.left;
            }
            Rectangle.prototype.autoAdjustCoordinates = function (p1, p2) {
                this.left = this.min(p1.getX(), p2.getX());
                this.right = this.max(p1.getX(), p2.getX());
                this.top = this.min(p1.getY(), p2.getY());
                this.bottom = this.max(p1.getY(), p2.getY());
            };

            Rectangle.prototype.min = function (a, b) {
                return (a < b) ? a : b;
            };

            Rectangle.prototype.max = function (a, b) {
                return (a > b) ? a : b;
            };

            /** Get left coordinate. */
            Rectangle.prototype.getLeft = function () {
                return this.left;
            };

            /** Get right coordinate. */
            Rectangle.prototype.getRight = function () {
                return this.right;
            };

            /** Get top coordinate. */
            Rectangle.prototype.getTop = function () {
                return this.top;
            };

            /** Get bottom coordinate. */
            Rectangle.prototype.getBottom = function () {
                return this.bottom;
            };

            /** Get height coordiante. */
            Rectangle.prototype.getHeight = function () {
                return this.height;
            };

            /** Get width coordinate. */
            Rectangle.prototype.getWidth = function () {
                return this.width;
            };

            /** Tests if the point is inside the rectangle bounds horizontaly.*/
            Rectangle.prototype.isPointInsideWidth = function (point) {
                var x = point.getX();

                if (x >= this.getLeft() && x <= this.getRight()) {
                    return true;
                }

                return false;
            };

            /** Tests if the point is inside the rectangle bounds vertically.*/
            Rectangle.prototype.isPointInsideHeight = function (point) {
                var y = point.getY();

                if (y >= this.getTop() && y <= this.getBottom()) {
                    return true;
                }

                return false;
            };

            /* String representation of the object*/
            Rectangle.prototype.toString = function () {
                var newline = "\n";
                var content = ">>> Rectangle <<<" + newline;
                content += "[(" + this.left + ", " + this.top + "),(" + this.right + ", " + this.bottom + ")]" + newline;
                return content;
            };
            return Rectangle;
        })();
        Automation.Rectangle = Rectangle;
        ;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="Graphics.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="./Dimensions.ts"/>
    /// <reference path="../AutomationControl.ts" />
    (function (Automation) {
        /** The Workflow tree, providing methods to traverse the tree structure. */
        var Graphics = (function () {
            function Graphics() {
            }
            /** Create rectangle dom elemet
            @param rectangle: An array of segments representing the rectangle edges.
            @param segmentClass: The class that is added for each segment of the rectangle.
            */
            Graphics.createRectangleDOM = function (rectangle, segmentClass, lineWidth) {
                lineWidth = (lineWidth == undefined) ? Automation.CurrentAutomationControl.settings.getLayoutProperties().getLineWidth() : lineWidth;

                var leftLine = Graphics.createLineDOM(new Automation.Point(rectangle.getLeft(), rectangle.getTop()), lineWidth, rectangle.getHeight(), segmentClass);
                var rightLine = Graphics.createLineDOM(new Automation.Point(rectangle.getRight(), rectangle.getTop()), lineWidth, rectangle.getHeight(), segmentClass);
                var topLine = Graphics.createLineDOM(new Automation.Point(rectangle.getLeft(), rectangle.getTop()), rectangle.getWidth(), lineWidth, segmentClass);
                var bottomLine = Graphics.createLineDOM(new Automation.Point(rectangle.getLeft(), rectangle.getBottom()), rectangle.getWidth(), lineWidth, segmentClass);

                var segments = [];

                segments.push(leftLine);
                segments.push(rightLine);
                segments.push(topLine);
                segments.push(bottomLine);

                return segments;
            };

            /** Creates a line dom element
            @param pointStart: the starting point of the line.
            @param width: The width.
            @param height: The height.
            @param segmentClass: The class that will be added on the line.
            */
            Graphics.createLineDOM = function (pointStart, width, height, segmentClass) {
                var line = $('<div class="' + segmentClass + '">');
                line.css("position", "absolute");
                line.css("width", width);
                line.css("height", height);

                line.css(Automation.GetLeftAlignmentAttributeName(), pointStart.getX());
                line.css("top", pointStart.getY());

                return line;
            };
            return Graphics;
        })();
        Automation.Graphics = Graphics;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="Browser.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="../AutomationControl.ts" />
    (function (Automation) {
        /** class for checking properties of browser */
        var Browser = (function () {
            function Browser() {
            }
            /** Check if the browser is firefox
            */
            Browser.isFireFox = function () {
                return /firefox/i.test(window.navigator.userAgent);
            };
            return Browser;
        })();
        Automation.Browser = Browser;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="MouseWheelBehavior.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="./Browser.ts" />
    (function (Automation) {
        var MouseWheelBehavior = (function () {
            function MouseWheelBehavior() {
            }
            /** Calculate the scroll delta
            */
            MouseWheelBehavior.calculateMouseWheelScrollOffset = function (e) {
                if (e == null) {
                    return 0;
                }

                if (typeof (e.wheelDelta) != "undefined" && e.wheelDelta != null && e.wheelDelta != 0) {
                    return Automation.Browser.isFireFox() ? e.wheelDelta * -40 : e.wheelDelta;
                }

                if (typeof (e.detail) != "undefined" && e.detail != null && e.detail != 0) {
                    return Automation.Browser.isFireFox() ? e.detail * -40 : e.detail;
                }

                if (typeof (e.originalEvent) != "undefined" && e.originalEvent != null) {
                    return this.calculateMouseWheelScrollOffset(e.originalEvent);
                }

                return 0;
            };
            return MouseWheelBehavior;
        })();
        Automation.MouseWheelBehavior = MouseWheelBehavior;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="CanvasModel.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="./Common.ts" />
    (function (Automation) {
        /** Canvas model */
        var DefaultLayoutProperties = (function () {
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
                /* Represents the X coordinat where the workspace is position relative to page. */
                this.workspacePositionX = 15;
                /* Represents the Y coordinat where the workspace is position relative to page. */
                this.workspacePositionY = 120;
            }
            DefaultLayoutProperties.prototype.getRows = function () {
                return this.rows;
            };

            DefaultLayoutProperties.prototype.setRows = function (rows) {
                this.rows = rows;
            };

            DefaultLayoutProperties.prototype.getCols = function () {
                return this.cols;
            };

            DefaultLayoutProperties.prototype.setCols = function (cols) {
                this.cols = cols;
            };

            DefaultLayoutProperties.prototype.getHeight = function () {
                return this.height;
            };

            DefaultLayoutProperties.prototype.setHeight = function (height) {
                this.height = height;
            };

            DefaultLayoutProperties.prototype.getWidth = function () {
                return this.width;
            };

            DefaultLayoutProperties.prototype.setWidth = function (width) {
                this.width = width;
            };

            DefaultLayoutProperties.prototype.getRowSpacing = function () {
                return this.rowSpacing;
            };

            DefaultLayoutProperties.prototype.setRowSpacing = function (rowSpacing) {
                this.rowSpacing = rowSpacing;
            };

            DefaultLayoutProperties.prototype.getColSpacing = function () {
                return this.colSpacing;
            };

            DefaultLayoutProperties.prototype.setColSpacing = function (colSpacing) {
                this.colSpacing = colSpacing;
            };

            DefaultLayoutProperties.prototype.getLineWidth = function () {
                return this.lineWidth;
            };

            DefaultLayoutProperties.prototype.setLineWidth = function (lineWidth) {
                this.lineWidth = lineWidth;
            };

            DefaultLayoutProperties.prototype.getTopMargin = function () {
                return this.topMargin;
            };

            DefaultLayoutProperties.prototype.setTopMargin = function (topMargin) {
                this.topMargin = topMargin;
            };

            DefaultLayoutProperties.prototype.getLeftMargin = function () {
                return this.leftMargin;
            };

            DefaultLayoutProperties.prototype.setLeftMargin = function (leftMargin) {
                this.leftMargin = leftMargin;
            };

            DefaultLayoutProperties.prototype.getInsertSlotHorizontalOffset = function () {
                return this.insertSlotHorizontalOffset;
            };

            DefaultLayoutProperties.prototype.setInsertSlotHorizontalOffset = function (insertSlotHorizontalOffset) {
                this.insertSlotHorizontalOffset = insertSlotHorizontalOffset;
            };

            DefaultLayoutProperties.prototype.getInsertSlotVerticalOffset = function () {
                return this.insertSlotVerticalOffset;
            };

            DefaultLayoutProperties.prototype.setInsertSlotVerticalOffset = function (insertSlotVerticalOffset) {
                this.insertSlotVerticalOffset = insertSlotVerticalOffset;
            };

            DefaultLayoutProperties.prototype.getZoomInWidth = function () {
                return this.zoomInWidth;
            };

            DefaultLayoutProperties.prototype.setZoomInWidth = function (zoomInWidth) {
                this.zoomInWidth = zoomInWidth;
            };

            DefaultLayoutProperties.prototype.getZoomOutWidth = function () {
                return this.zoomOutWidth;
            };

            DefaultLayoutProperties.prototype.setZoomOutWidth = function (zoomOutWidth) {
                this.zoomOutWidth = zoomOutWidth;
            };

            /* Represents the X coordinat where the workspace is position relative to page. */
            DefaultLayoutProperties.prototype.getWorkspacePositionX = function () {
                return this.workspacePositionX;
            };

            DefaultLayoutProperties.prototype.setWorkspacePositionX = function (workspacePositionX) {
                this.workspacePositionX = workspacePositionX;
            };

            /* Represents the Y coordinat where the workspace is position relative to page. */
            DefaultLayoutProperties.prototype.getWorkspacePositionY = function () {
                return this.workspacePositionY;
            };

            DefaultLayoutProperties.prototype.setWorkspacePositionY = function (workspacePositionY) {
                this.workspacePositionY = workspacePositionY;
            };
            return DefaultLayoutProperties;
        })();
        Automation.DefaultLayoutProperties = DefaultLayoutProperties;
        ;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="PositionCalculator.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="./DefaultLayoutProperties.ts" />
    (function (Automation) {
        /**
        * Calculates the offset of an element for the given settings
        */
        var PositionCalculator = (function () {
            /** Initializes a new instance of the PositionCalculator class.
            * @param settings used for calculations
            */
            function PositionCalculator(layoutProperties) {
                /**
                * Calculates the top position for the given row
                * @param row row to calculate position for
                */
                this.computeTop = function (row) {
                    return row * (this.height + this.rowSpacing) + this.topMargin;
                };
                /**
                * Calculates the left position for the given row
                * @param col column to calculate position for
                */
                this.computeLeft = function (col) {
                    return col * (this.width + this.colSpacing) + this.leftMargin;
                };
                this.height = layoutProperties.getHeight();
                this.width = layoutProperties.getWidth();
                this.rowSpacing = layoutProperties.getRowSpacing();
                this.colSpacing = layoutProperties.getColSpacing();
                this.topMargin = layoutProperties.getTopMargin();
                this.leftMargin = layoutProperties.getLeftMargin();
            }
            return PositionCalculator;
        })();
        Automation.PositionCalculator = PositionCalculator;
        ;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="ActivityDropController.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    ///<reference path="..\AutomationControl.ts" />
    ///<reference path="..\Model\SlotModel.ts" />
    ///<reference path="..\Common\ConnectedComponent.ts" />
    (function (Automation) {
        /** Controller that handles the drop of an activity on another activity */
        var ActivityDropController = (function () {
            function ActivityDropController() {
            }
            /** Drop a library element on the specified slot
            * @slot: The slot.
            * @libraryElement: The libraryElement.
            * @return: A promise.
            */
            ActivityDropController.prototype.dropLibraryElement = function (slot, libraryElement) {
                var activity = this.createEmptyActivity(libraryElement.get("ActivityTypeID"));
                var component = new Automation.ConnectedComponent(activity);

                var dropHandler = Automation.CurrentAutomationControl.settings.getSlotHandlerProvider().createDropHandler(slot);
                return dropHandler.drop(component);
            };

            /** Drop multiple components on the specified slot.
            * @slot: The slot.
            * @components: Array of components.
            * @return: A promise.
            */
            ActivityDropController.prototype.dropMultipleComponents = function (slot, components) {
                var multiDropHandler = Automation.CurrentAutomationControl.settings.getSlotHandlerProvider().createMultipleDropHandler(slot);
                return multiDropHandler.drop(components);
            };

            /* Creates an empty activity to drop on the canvas
            * @activityType: Type of the activity.
            */
            ActivityDropController.prototype.createEmptyActivity = function (activityType) {
                return Automation.CurrentAutomationControl.settings.getActivityDefinitionFactory().createActivity(activityType);
            };
            return ActivityDropController;
        })();
        Automation.ActivityDropController = ActivityDropController;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="TileFactoryView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="../Common/Common.ts" />
    /// <reference path="../Imported/Backbone.d.ts" />
    /// <reference path="../AutomationControl.ts" />
    (function (Automation) {
        /** The Tile Factory View */
        var TileFactoryView = (function (_super) {
            __extends(TileFactoryView, _super);
            function TileFactoryView() {
                _super.apply(this, arguments);
            }
            /** Renders the view */
            TileFactoryView.prototype.renderTile = function (itemId, zoom) {
                if (typeof zoom === "undefined") { zoom = false; }
                var model = this.model;
                var tileInformation = Automation.CurrentAutomationControl.settings.getTileInformationFactory().getTileInformationForActivityModel(model, itemId);
                var properties = tileInformation.getProperties();
                Automation.CurrentAutomationControl.settings.getDecoratorFactory().getTileDecorator(model).decorateTileProperties(properties);
                var activeItemAttributes = tileInformation.getDynamicAttributes();

                var itemType = activeItemAttributes.ActivityTypeID;
                this.$el.html(TileFactoryView.getImageTileViewHtml(itemType, model.IsEmpty(), activeItemAttributes));

                if (!zoom) {
                    if (model.IsEmpty(itemId)) {
                        var emptyTileDescriptionTemplate = _.template(properties.emptyTileTemplate);
                        this.$el.append(emptyTileDescriptionTemplate(properties));
                    } else {
                        var tileDescriptionTemplate = _.template(properties.template);
                        this.$el.append(tileDescriptionTemplate(activeItemAttributes));
                    }
                }
                this.$el.addClass(properties.tileclass);
                this.renderStatus(model, activeItemAttributes);
                return this;
            };

            TileFactoryView.prototype.renderStatus = function (model, activeItemAttributes) {
                var statusView = Automation.CurrentAutomationControl.settings.getTileInformationFactory().GetTileStatusView(model, activeItemAttributes);
                this.$el.append(statusView.render().$el);
            };

            /** Gets the image representation of tile view
            * @param activityType - the activity type of the view
            * @param isEmpty - whether the view should be created for empty tile
            * @param optionalAttributes - optional additional attrbutes to be used
            */
            TileFactoryView.getImageTileViewHtml = function (activityType, isEmpty, optionalAttributes) {
                var tileImageTemplate;
                var tileInformation = Automation.CurrentAutomationControl.settings.getTileInformationFactory().GetTileInformationForActivityType(activityType);
                var properties = tileInformation.getProperties();
                if (typeof (isEmpty) === "undefined" || isEmpty) {
                    tileImageTemplate = _.template(properties.emptyTileImageTemplate);
                } else {
                    tileImageTemplate = _.template(properties.tileImageTemplate);
                }

                var templateAttributes = $.extend(properties, optionalAttributes);
                return tileImageTemplate(templateAttributes);
            };
            return TileFactoryView;
        })(Backbone.View);
        Automation.TileFactoryView = TileFactoryView;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="HelperElementView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="../Common/Common.ts" />
    /// <reference path="../Imported/Backbone.d.ts" />
    /// <reference path="../AutomationControl.ts" />
    /// <reference path="../Views/TileFactoryView.ts" />
    (function (Automation) {
        /** Helper Element - the view for the dragged element */
        Automation.HelperElementView = Backbone.View.extend({
            className: "helper",
            initialize: function () {
                this.$el.data(Automation.HelperElementView.modelDataKey, this.model);
                this.$el.addClass(this.className);
            },
            render: function () {
                var type = this.model.get("ActivityTypeID");

                this.$el.html(Automation.TileFactoryView.getImageTileViewHtml(type));
                var tileProperties = Automation.CurrentAutomationControl.settings.getTileInformationFactory().GetTileInformationForActivityType(type).getProperties();
                var activityClass = tileProperties.tileclass;
                this.$el.addClass(activityClass);

                return this;
            }
        }, {
            modelDataKey: "libraryElement"
        });
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="SlotBase.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="../Common/Common.ts" />
    /// <reference path="../Views/HelperElementView.ts" />
    /// <reference path="../Imported/Backbone.d.ts" />
    /// <reference path="../AutomationControl.ts" />
    (function (Automation) {
        /** Slot View is the box rendered on the workspace where we can drop items.*/
        var SlotBase = (function (_super) {
            __extends(SlotBase, _super);
            function SlotBase() {
                _super.apply(this, arguments);
            }
            /** Backbone view constructor internally calls Initialize method.
            Therefore renaming it to InitializeSlot so that backbone view infra doesn't call this method.
            We have to do this because we want to set backbone model property before calling this */
            SlotBase.prototype.initializeSlot = function () {
                if (!this.model.getActivity().getReadonlyMode()) {
                    this.makeDroppable();
                }
            };

            /** Renders the slot */
            SlotBase.prototype.render = function () {
            };

            /* Make the slot accept dropping of elements. */
            SlotBase.prototype.makeDroppable = function () {
                var self = this;

                this.$el.droppable({
                    hoverClass: Automation.CssClass.HoverOverDroppable,
                    accept: "." + SlotBase.acceptLibraryElement + ", ." + SlotBase.className,
                    drop: function (event, ui) {
                        var droppedElement = ui.helper.data(Automation.HelperElementView.modelDataKey);
                        if (droppedElement.get("ActivityID") == undefined) {
                            SlotBase.supportedEvents.dropLibraryElement.trigger(self, self, droppedElement);
                        } else {
                            SlotBase.supportedEvents.dropActivity.trigger(self, self, droppedElement);
                        }
                    }
                });
            };
            SlotBase.className = "slot";
            SlotBase.acceptLibraryElement = "graphicElement";

            SlotBase.supportedEvents = {
                dropLibraryElement: {
                    name: "dropLibraryElement",
                    trigger: function (context, slot, dropedLibraryElement) {
                        var self = context;
                        var eventName = SlotBase.supportedEvents.dropLibraryElement.name;
                        self.trigger(eventName, slot, dropedLibraryElement);
                    }
                },
                dropActivity: {
                    name: "dropActivity",
                    trigger: function (context, slot, dropActivity) {
                        var self = context;
                        var eventName = SlotBase.supportedEvents.dropActivity.name;
                        self.trigger(eventName, slot, dropActivity);
                    }
                }
            };
            return SlotBase;
        })(Backbone.View);
        Automation.SlotBase = SlotBase;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="ContainerEdgeScroller.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------

var Mscrm;
(function (Mscrm) {
    (function (Automation) {
        /**
        * This class enables scorlling a container when cursor is close to container's edges.
        */
        var ContainerEdgeScroller = (function () {
            /** Creates instance of ContainerEdgeScroller
            * @param container The jQuery element which needs to scroll
            * @param scrollOptions Optional, default - step : 10 (px), timer : 25 (msec), scrollTriggerMargin : 60 (px)
            */
            function ContainerEdgeScroller(container, scrollOptions) {
                if (typeof scrollOptions === "undefined") { scrollOptions = {}; }
                this.isMovingHorizontal = false;
                this.isMovingVertical = false;
                this.horizontalInterval = 0;
                this.verticalInterval = 0;
                this.container = container;
                this.scrollOptions = $.extend({ step: 10, timer: 25, scrollTriggerMargin: 60 }, scrollOptions);
            }
            /** Scrolls the container horizontally
            * @param step {number} a number (px) by which the container will scroll
            */
            ContainerEdgeScroller.prototype.scrollHorizontal = function (step) {
                var self = this;
                self.isMovingHorizontal = true;

                if (!self.horizontalInterval) {
                    self.horizontalInterval = setInterval(function () {
                        self.container.scrollLeft(self.container.scrollLeft() + step);
                    }, self.scrollOptions.timer);
                }
            };

            /** Scrolls the container vertically
            * @param step {number} a number (px) by which the container will scroll
            */
            ContainerEdgeScroller.prototype.scrollVertical = function (step) {
                var self = this;
                self.isMovingVertical = true;

                if (!self.verticalInterval) {
                    self.verticalInterval = setInterval(function () {
                        self.container.scrollTop(self.container.scrollTop() + step);
                    }, self.scrollOptions.timer);
                }
            };

            ContainerEdgeScroller.prototype.clearIntervals = function () {
                if (!this.isMovingHorizontal) {
                    clearInterval(this.horizontalInterval);
                    this.horizontalInterval = false;
                }
                if (!this.isMovingVertical) {
                    clearInterval(this.verticalInterval);
                    this.verticalInterval = false;
                }
            };

            /** Initializes the container edge scroller. */
            ContainerEdgeScroller.prototype.initialize = function () {
                this.containerOffset = {};
                this.containerOffset.top = this.container.offset().top;
                this.containerOffset.left = this.container.offset().left;
                this.containerOffset.right = this.containerOffset.left + this.container.width();
                this.containerOffset.bottom = this.containerOffset.top + this.container.height();
            };

            /** Scrolls the container if cursors is on container's edge */
            ContainerEdgeScroller.prototype.scrollIfCursorOnEdge = function (cursorPageX, cursorPageY) {
                this.isMovingHorizontal = false;
                this.isMovingVertical = false;
                if (Math.abs(cursorPageX - this.containerOffset.left) <= this.scrollOptions.scrollTriggerMargin) {
                    this.scrollHorizontal(this.scrollOptions.step * -1);
                } else if (Math.abs(cursorPageX - this.containerOffset.right) <= this.scrollOptions.scrollTriggerMargin) {
                    this.scrollHorizontal(this.scrollOptions.step);
                }

                if (Math.abs(cursorPageY - this.containerOffset.top) <= this.scrollOptions.scrollTriggerMargin) {
                    this.scrollVertical(this.scrollOptions.step * -1);
                } else if (Math.abs(cursorPageY - this.containerOffset.bottom) <= this.scrollOptions.scrollTriggerMargin) {
                    this.scrollVertical(this.scrollOptions.step);
                }

                this.clearIntervals();
            };

            /** Stops the srolling */
            ContainerEdgeScroller.prototype.stopScrolling = function () {
                clearInterval(this.horizontalInterval);
                clearInterval(this.verticalInterval);
                this.horizontalInterval = false;
                this.verticalInterval = false;
            };
            return ContainerEdgeScroller;
        })();
        Automation.ContainerEdgeScroller = ContainerEdgeScroller;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="TileView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="../Common/Common.ts" />
    /// <reference path="../Imported/Backbone.d.ts" />
    /// <reference path="../AutomationControl.ts" />
    /// <reference path="./TileFactoryView.ts" />
    (function (Automation) {
        /** The Tile View */
        Automation.TileView = Backbone.View.extend({
            initialize: function () {
                this.$el.addClass(Automation.TileView.className);
            },
            /** Renders the tile
            * @param itemId - id of the item to render
            * @param zoom - wheteher to render the tile zoomed in or not. Parameter is optional.
            */
            render: function (itemId, zoom) {
                if (typeof zoom === "undefined") { zoom = false; }
                var tileFactory = new Automation.TileFactoryView({ model: this.model });
                this.$el.html(tileFactory.renderTile(itemId, zoom).el);
                return this;
            }
        }, {
            className: "tile"
        });
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="SlotTileHolderView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="../Common/Common.ts" />
    /// <reference path="../Common/ContainerEdgeScroller.ts" />
    /// <reference path="../Common/PositionCalculator.ts" />
    /// <reference path="../Imported/Backbone.d.ts" />
    /// <reference path="../AutomationControl.ts" />
    /// <reference path="./SlotBase.ts" />
    /// <reference path="./HelperElementView.ts" />
    /// <reference path="./TileView.ts" />
    /// <reference path="../Model/Activities/ActivityDefinitionModel.ts" />
    (function (Automation) {
        /** Slot View is the box rendered on the workspace where we can drop items.*/
        var SlotTileHolderView = (function (_super) {
            __extends(SlotTileHolderView, _super);
            function SlotTileHolderView() {
                _super.apply(this, arguments);
                this.selectedClassName = Automation.CssClass.Selected;
                this.dragInProgressClass = Automation.CssClass.DragInProgress;
            }
            SlotTileHolderView.prototype.initializeSlot = function () {
                this.setupEvents();

                if (!this.model.getActivity().getReadonlyMode()) {
                    this.makeDroppable();
                    this.makeDraggable();
                }
            };

            /** Setup events */
            SlotTileHolderView.prototype.setupEvents = function () {
                var self = this;
                var activity = this.model.getActivity();
                activity.on("sync", this.render, this);

                this.$el.on("click", function (event) {
                    self.tileClickedHandler(event);
                });

                this.$el.on("dblclick", function (event) {
                    self.tileDblClickedHandler(event);
                });

                this.$el.on("keydown", function (event) {
                    self.tileKeyDownHandler(event);
                });

                this.$el.on("focus", function (event) {
                    self.tileFocusHandler(event);
                });

                this.$el.on("blur", function (event) {
                    self.tileBlurHandler(event);
                });

                this.$el.on("mousedown", function (event) {
                    // This is to prevent parent from takeing mouse down action.
                    event.stopPropagation();
                });

                /* Initializes the context click handler*/
                this.$el.on("contextmenu", function (event) {
                    self.tileContextMenuClickHandler(event);
                });

                /** Update selection on click of tile */
                Automation.eventManager.on('modelUpdated', function () {
                    self.modelUpdateHandler(Automation.CurrentAutomationControl.getCurrentModel());
                }, this);

                this.listenTo(activity, Automation.ActivityDefinitionModel.supportedEvents.select.name, self.selectHandler);
                this.listenTo(activity, Automation.ActivityDefinitionModel.supportedEvents.deselect.name, self.deSelectHandler);

                //this.listenTo(activity, ActivityDefinitionModel.supportedEvents.paste.name, self.pasteHandler);
                this.listenTo(activity, Automation.ActivityDefinitionModel.supportedEvents.dragInProgress.name, self.dragInProgressHandler);
                this.listenTo(activity, Automation.ActivityDefinitionModel.supportedEvents.stopDragInProgress.name, self.stopDragInProgressHandler);
            };

            /** Remove tile elements from the DOM */
            SlotTileHolderView.prototype.clean = function () {
                this.$el.children().remove();
            };

            /** Renders the slot */
            SlotTileHolderView.prototype.render = function () {
                this.clean();
                if (Automation.CurrentAutomationControl.getCurrentModel() != null && Automation.CurrentAutomationControl.getCurrentModel().cid == this.model.getActivity().cid) {
                    this.$el.addClass(this.selectedClassName);
                }

                var tile = new Automation.TileView({ model: this.model.getActivity() });
                this.$el.append(tile.render(this.model.getActivity().getActiveItemIndex(), Automation.zoomOut).el);
                if (this.model.getActivity().getItemCount() > 1) {
                    this.$el.addClass(Automation.CssClass.MultipleItems);
                }
                this.$el.addClass(Automation.CssClass.Slot);

                var calc = new Automation.PositionCalculator(Automation.CurrentAutomationControl.settings.getLayoutProperties());
                var top = calc.computeTop(this.model.getActivity().getRow());
                var left = calc.computeLeft(this.model.getActivity().getCol());

                this.$el.css("top", top + "px");
                this.$el.css(Automation.GetLeftAlignmentAttributeName(), left + "px");

                // Fix for IE - the offset writes also a inline position relative on IE which overrides the css style position absolute
                this.$el.css("position", "");

                // tab indexing with 0 since the tiles in the DOM are laid out exactly how we want (depth first)
                // TODO (t-jafarr): we may want to extend this to allow for customizeable tab indexing
                this.$el.attr("tabindex", "0");

                return this;
            };

            /** Model update handler. */
            SlotTileHolderView.prototype.modelUpdateHandler = function (currentModel) {
                var self = this;
                var isEditMode = (self.model.getActivity()).getIsEditMode();

                if (!isEditMode) {
                    self.deSelectHandler();
                    if (this.model.getActivity() == currentModel && !currentModel.getIsEditMode()) {
                        self.selectHandler();
                    }
                }
            };

            SlotTileHolderView.prototype.selectHandler = function () {
                this.$el.addClass(this.selectedClassName);
            };

            SlotTileHolderView.prototype.deSelectHandler = function () {
                this.$el.removeClass(this.selectedClassName);
            };

            SlotTileHolderView.prototype.pasteHandler = function () {
                SlotTileHolderView.supportedEvents.paste.trigger(this);
            };

            SlotTileHolderView.prototype.dragInProgressHandler = function () {
                this.$el.addClass(this.dragInProgressClass);
            };

            SlotTileHolderView.prototype.stopDragInProgressHandler = function () {
                this.$el.removeClass(this.dragInProgressClass);
            };

            /** Handler when a tile is clicked*/
            SlotTileHolderView.prototype.tileClickedHandler = function (event) {
                var clickHandler = Automation.CurrentAutomationControl.settings.getSlotHandlerProvider().createClickHandler(this.model);
                clickHandler.click(this.$el);
                event.stopPropagation();
            };

            /** Handler when a tile is double clicked*/
            SlotTileHolderView.prototype.tileDblClickedHandler = function (event) {
                var dblClickHandler = Automation.CurrentAutomationControl.settings.getSlotHandlerProvider().createDblClickHandler(this.model);
                dblClickHandler.dblclick(this.$el);
                event.stopPropagation();
            };

            /** Handler when a key is down while focused on a tile*/
            SlotTileHolderView.prototype.tileKeyDownHandler = function (event) {
                var keyDownHandler = Automation.CurrentAutomationControl.settings.getSlotHandlerProvider().createKeyDownHandler(this.model);
                keyDownHandler.keyDown(this.$el, event);
            };

            /** Handler when a tile is focused */
            SlotTileHolderView.prototype.tileFocusHandler = function (event) {
                var focusHandler = Automation.CurrentAutomationControl.settings.getSlotHandlerProvider().createFocusHandler(this.model);
                focusHandler.focus(this.$el);
            };

            /** Handler when a tile loses focused */
            SlotTileHolderView.prototype.tileBlurHandler = function (event) {
                var blurHandler = Automation.CurrentAutomationControl.settings.getSlotHandlerProvider().createBlurHandler(this.model);
                blurHandler.blur(this.$el);
            };

            /* Make the slot draggable. */
            SlotTileHolderView.prototype.makeDraggable = function () {
                var self = this;
                var container;
                var containerEdgeScroller;
                this.$el.draggable({
                    cursorAt: { top: SlotTileHolderView.defaultDragHelperCursorOffset, left: SlotTileHolderView.defaultDragHelperCursorOffset },
                    // Refresh position is needed to correctly recalculate droppable locations when container is being scrolled.
                    // Otherwise upon scrolling container, hovering over droppable locations will highlight incorrect location.
                    refreshPositions: true,
                    helper: function () {
                        var helperLibraryElement = new Automation.HelperElementView({ model: self.model.getActivity(), el: $("<div>") });
                        return helperLibraryElement.render().$el;
                    },
                    start: function (e, ui) {
                        self.updateSelectedActivities();

                        $.each(Automation.CurrentAutomationControl.activityTree.getSelectedActivities(), function (index, activity) {
                            Automation.ActivityDefinitionModel.supportedEvents.dragInProgress.trigger(activity);
                        });

                        container = self.$el.parent();
                        containerEdgeScroller = new Automation.ContainerEdgeScroller(container);
                        containerEdgeScroller.initialize();
                    },
                    drag: function (e, ui) {
                        if (!self.model.getActivity().canMove()) {
                            containerEdgeScroller.stopScrolling();
                            return false;
                        }

                        var pageX = (e.pageX || e.originalEvent.pageX);
                        var pageY = (e.pageY || e.originalEvent.pageY);

                        // Set position of helper element in regards to container offset and scrolling position
                        ui.position.left = pageX + container.scrollLeft() - container.offset().left - $(this).draggable('option', 'cursorAt').left;
                        ui.position.top = pageY + container.scrollTop() - container.offset().top - $(this).draggable('option', 'cursorAt').top;

                        containerEdgeScroller.scrollIfCursorOnEdge(pageX, pageY);

                        return true;
                    },
                    stop: function (e, ui) {
                        containerEdgeScroller.stopScrolling();

                        $.each(Automation.CurrentAutomationControl.activityTree.getSelectedActivities(), function (index, activity) {
                            Automation.ActivityDefinitionModel.supportedEvents.stopDragInProgress.trigger(activity);
                        });
                    }
                });
            };

            SlotTileHolderView.prototype.updateSelectedActivities = function () {
                var self = this;
                if (!Automation.CurrentAutomationControl.activityTree.isInSelection(self.model.getActivity()) || Automation.CurrentAutomationControl.activityTree.getSelectedActivities().length <= 1) {
                    var clickHandler = Automation.CurrentAutomationControl.settings.getSlotHandlerProvider().createClickHandler(self.model);
                    clickHandler.click(self.$el);
                }
            };

            /** Hanlder when a tile is right clicked*/
            SlotTileHolderView.prototype.tileContextMenuClickHandler = function (event) {
                this.updateSelectedActivities();

                var contextClickHandler = Automation.CurrentAutomationControl.settings.getSlotHandlerProvider().createContextHandler(this.model);
                var contextMenu = Automation.CurrentAutomationControl.settings.getSlotContextMenu();
                if (contextClickHandler != null && contextMenu != null) {
                    contextClickHandler.click(event);
                    event.preventDefault();
                }

                event.stopPropagation();
            };
            SlotTileHolderView.defaultDragHelperCursorOffset = 30;

            SlotTileHolderView.supportedEvents = {
                dropLibraryElement: Automation.SlotBase.supportedEvents.dropLibraryElement,
                dropActivity: Automation.SlotBase.supportedEvents.dropActivity,
                paste: {
                    name: "paste",
                    trigger: function (context) {
                        var self = context;
                        var eventName = SlotTileHolderView.supportedEvents.paste.name;
                        self.trigger(eventName);
                    }
                }
            };
            return SlotTileHolderView;
        })(Automation.SlotBase);
        Automation.SlotTileHolderView = SlotTileHolderView;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="CanvasView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="../Common/Common.ts" />
    /// <reference path="../Common/ConnectedComponentsExtractor.ts" />
    /// <reference path="../Common/Dimensions.ts" />
    /// <reference path="../Common/Graphics.ts" />
    /// <reference path="../Common/MouseWheelBehavior.ts" />
    /// <reference path="../Common/PositionCalculator.ts" />
    /// <reference path="../Common/Automation.d.ts" />
    /// <reference path="../Slot/ActivityDropController.ts" />
    /// <reference path="../AutomationControl.ts" />
    /// <reference path="./SlotBase.ts" />
    /// <reference path="./SlotTileHolderView.ts" />
    (function (Automation) {
        var CanvasView = (function (_super) {
            __extends(CanvasView, _super);
            function CanvasView(canvasContainer) {
                _super.call(this, { el: canvasContainer });
                this.$el.addClass(CanvasView.className);
            }
            /** Initialize the canvas. */
            CanvasView.prototype.initializeCanvas = function () {
                this.setupEvents();
                this.fetchProcess();
                var self = this;
                this.$el.on("onmousewheel mousewheel DOMMouseScroll", function (ev) {
                    var event = ev || window.event;
                    this.scrollLeft -= Automation.MouseWheelBehavior.calculateMouseWheelScrollOffset(event);

                    event.preventDefault();
                });
            };

            /** Fetches the workflow definition and render it. */
            CanvasView.prototype.fetchProcess = function () {
                var self = this;
                var promise = Automation.CurrentAutomationControl.activityTree.fetch(Automation.CurrentAutomationControl.processId);
                promise.done(function () {
                    self.onFetchProcess();
                });
            };

            /** Event Handler called after fetching the process */
            CanvasView.prototype.onFetchProcess = function () {
                this.render();
            };

            /** Sets-up the events. */
            CanvasView.prototype.setupEvents = function () {
                this.$el.on("mousedown", function (event) {
                    Automation.updateCurrentModel(null);
                });

                Automation.eventManager.on('canvasrefresh', this.refreshWorkflowTree, this);
            };

            /* Renders the activityCollection on the Workspace*/
            CanvasView.prototype.renderSlots = function (activities) {
                var self = this;

                $.each(activities, function (index, activity) {
                    if (activity.getActivityTypeId() == Automation.ActivityType.Root)
                        return;

                    var slotsList = Automation.CurrentAutomationControl.settings.getSlotGeneratorProvider().generateSlotsForActivity(activity);

                    $.each(slotsList, function (slotIndex, slot) {
                        self.$el.append(slot.render().$el);
                        if (slot.model.getSlotType() != Automation.SlotType.IconHolder) {
                            self.listenTo(slot, Automation.SlotTileHolderView.supportedEvents.paste.name, self.refreshWorkflowTree);
                            self.listenTo(slot, Automation.SlotBase.supportedEvents.dropLibraryElement.name, self.dropLibraryElementHandler);
                            self.listenTo(slot, Automation.SlotBase.supportedEvents.dropActivity.name, self.dropActivityHandler);
                        }
                    });
                });
            };

            /*Renders the Workspace.*/
            CanvasView.prototype.render = function () {
                this.scrollLeft = this.el.scrollLeft;
                this.scrollTop = this.el.scrollTop;

                this.clean();
                this.renderSlots(Automation.CurrentAutomationControl.activityTree.getProcessDefinition());

                this.drawTileConnectors();

                this.$el.scrollLeft(this.scrollLeft);
                this.$el.scrollTop(this.scrollTop);

                var self = this;
                $(document).one("ajaxStop", function () {
                    self.$el.data("loadState", "completed");
                    self.$el.trigger("loadCompleted");
                });

                return this;
            };

            /* Cleans the Workspace by removing all the content.*/
            CanvasView.prototype.clean = function () {
                this.$el.children().remove();
            };

            /* Scroll to the selected tile.
            * @param tileSelector: selector for the selected tile
            */
            CanvasView.prototype.scrollToTile = function (tileSelector) {
                var childItem = this.$el.find(tileSelector);
                if (childItem.length == 0)
                    return;
                var slotLeftPosition = parseInt(childItem.css('left').replace('px', ''));
                var slotTopPosition = parseInt(childItem.css('top').replace('px', ''));
                var canvasWidth = this.$el.width();
                var canvasHeight = this.$el.height();
                var horizontalOffset = 400;
                var verticleOffset = 80;
                if (slotLeftPosition > canvasWidth) {
                    this.$el.scrollLeft((slotLeftPosition - canvasWidth) + horizontalOffset);
                }
                if (slotTopPosition > canvasHeight) {
                    this.$el.scrollTop((slotTopPosition - canvasHeight) + verticleOffset);
                }
            };

            /** Handler for libraryElement droped on a slot of the Workspace
            * @slot: The slot.
            * @libraryElement: The libraryElement.
            */
            CanvasView.prototype.dropLibraryElementHandler = function (slot, libraryElement) {
                var _this = this;
                var activityDropController = Automation.CurrentAutomationControl.settings.getActivityDropController();
                activityDropController.dropLibraryElement(slot.model, libraryElement).done(function (activity) {
                    Automation.updateCurrentModel(activity);
                    _this.updateProcess();
                });
            };

            /** Handler for activity droped on a slot of the Workspace
            * @slot: The slot.
            */
            CanvasView.prototype.dropActivityHandler = function (slot) {
                var _this = this;
                var extractor = new Automation.ConnectedComponentsExtractor(Automation.CurrentAutomationControl.activityTree.getAllConcreteActivities());
                var connectedComponents = extractor.getConnectedComponentsFromSelection(Automation.CurrentAutomationControl.activityTree.getSelectedActivities());

                var activityDropController = Automation.CurrentAutomationControl.settings.getActivityDropController();
                activityDropController.dropMultipleComponents(slot.model, connectedComponents).done(function (activity) {
                    Automation.updateCurrentModel(activity);
                    _this.updateProcess();
                });
            };

            /** update the current process view */
            CanvasView.prototype.updateProcess = function () {
                this.refreshWorkflowTree();
            };

            /** Refreshes the workspace by adding the subsequent slots and updating the positions */
            CanvasView.prototype.refreshWorkflowTree = function () {
                var _this = this;
                Automation.CurrentAutomationControl.activityTree.createSubsequentActivitiesForLeafs().done(function () {
                    Automation.CurrentAutomationControl.activityTree.UpdatePositions();
                    _this.render();
                });
            };

            /** Draws the lines, connecting the tiles.
            */
            CanvasView.prototype.drawTileConnectors = function () {
                var self = this;
                var processDefinition = Automation.CurrentAutomationControl.activityTree.getProcessDefinition();
                var activityDictionary = [];
                $.each(processDefinition, function (index, activity) {
                    activityDictionary[activity.getActivityId()] = activity;
                });

                $.each(processDefinition, function (index, activity) {
                    var parentId = activity.getParentActivityId();
                    if (parentId != null) {
                        var parentActivity = activityDictionary[parentId];
                        if (parentActivity.getActivityTypeId() != Automation.ActivityType.Root) {
                            self.drawConnector(parentActivity, activity);
                        }
                    }
                });
            };

            CanvasView.prototype.drawConnector = function (parentActivity, childActivity) {
                var _this = this;
                var connectorSegments = Automation.CurrentAutomationControl.settings.getActivityPositionCalculatorFactory().getCalculator(parentActivity.getActivityTypeId()).getLineConnectors(parentActivity, childActivity);
                $.each(connectorSegments, function (index, segment) {
                    _this.$el.append(segment);
                });
            };
            CanvasView.className = "canvas";
            return CanvasView;
        })(Backbone.View);
        Automation.CanvasView = CanvasView;
        ;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="ScrollableDragDrop.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="./Common.ts" />
/// <reference path="./DragTouchHelper.ts" />
/// <reference path="./ContainerEdgeScroller.ts" />
var Mscrm;
(function (Mscrm) {
    (function (Automation) {
        /**
        * This class wraps the jQuery dragdrop extension and extends it further to
        * make the target container scroll if the user is holding the drop target on the
        * edge of the visible area of container
        */
        var ScrollableDragDrop = (function () {
            function ScrollableDragDrop() {
            }
            /** Makes an element draggable and makes the container scroll if required
            * @param element The jQuery element which needs to be draggable
            * @param container The jQuery element which needs to scroll
            * @param draggableOptions The options required for jQuery draggable
            * @param scrollOptions Optional, default - step : 10 (px), timer : 25 (msec), scrollTriggerMargin : 60 (px)
            */
            ScrollableDragDrop.prototype.makeDraggable = function (element, container, draggableOptions, scrollOptions) {
                if (typeof scrollOptions === "undefined") { scrollOptions = {}; }
                var containerEdgeScroller = new Automation.ContainerEdgeScroller(container, scrollOptions);
                var extendedDraggableOptions = $.extend({}, draggableOptions, {
                    start: function () {
                        if (draggableOptions.start) {
                            draggableOptions.start.apply(this, arguments);
                        }

                        containerEdgeScroller.initialize();
                    },
                    drag: function (e) {
                        if (draggableOptions.drag) {
                            draggableOptions.drag.apply(this, arguments);
                        }

                        containerEdgeScroller.scrollIfCursorOnEdge(e.pageX, e.pageY);
                    },
                    stop: function () {
                        if (draggableOptions.stop) {
                            draggableOptions.stop.apply(this, arguments);
                        }

                        containerEdgeScroller.stopScrolling();
                    }
                });
                element.draggable(extendedDraggableOptions);
                Automation.DragTouchHelper.mapTouchEvents(element);
            };
            return ScrollableDragDrop;
        })();
        Automation.ScrollableDragDrop = ScrollableDragDrop;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="LibraryElementModel.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="../../Imported/Backbone.d.ts" />
    (function (Automation) {
        /** The Library Element Model */
        Automation.LibraryElementModel = Backbone.Model.extend({
            defaults: {
                Properties: {
                    Title: "Undefined"
                }
            }
        });
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="LibraryElementView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="../Common/Common.ts" />
    /// <reference path="../Common/ScrollableDragDrop.ts" />
    /// <reference path="../Imported/Backbone.d.ts" />
    /// <reference path="../AutomationControl.ts" />
    /// <reference path="../Model/Library/LibraryElementModel.ts" />
    /// <reference path="./HelperElementView.ts" />
    (function (Automation) {
        /** Library elements located in Library panel under the group */
        var LibraryElementView = (function (_super) {
            __extends(LibraryElementView, _super);
            function LibraryElementView(libraryElementModel, libraryElementContainer, canvasContainer) {
                this._canvasContainer = canvasContainer;
                this.className = "graphicElement";
                _super.call(this, {
                    model: libraryElementModel,
                    el: libraryElementContainer
                });
            }
            LibraryElementView.prototype.initialize = function () {
                this.libraryElementTemplate = _.template("<span class='lib-iconContainer'>" + "<span class ='lib-img-content lib-img-cont-float'>" + "<img src = '<%- Image %>' />" + "</span >" + "</span>" + "<span class ='lib-rowLabel ellipsis' title = " + "'<%= Title %>'" + "><%= Title %></span > ");

                this.makeDraggable();
                this.$el.addClass(this.className);
            };

            LibraryElementView.prototype.makeDraggable = function () {
                var self = this;

                var draggableOptions = {
                    cursor: 'move',
                    // Refresh position is needed to correctly recalculate droppable locations when container is being scrolled.
                    // Otherwise upon scrolling container, hovering over droppable locations will highlight incorrect location.
                    refreshPositions: true,
                    helper: function () {
                        var helperLibraryElement = new Automation.HelperElementView({ model: self.model, el: $("<div>") });
                        return helperLibraryElement.render().$el;
                    }
                };

                var dragDrop = new Automation.ScrollableDragDrop();
                dragDrop.makeDraggable(this.$el, this._canvasContainer, draggableOptions);
            };

            LibraryElementView.prototype.render = function () {
                this.$el.append(this.libraryElementTemplate(this.model.toJSON()));
                var type = this.model.get("ActivityTypeID");
                var tileProperties = Automation.CurrentAutomationControl.settings.getTileInformationFactory().GetTileInformationForActivityType(type).getProperties();
                var activityClass = tileProperties.tileclass;
                this.$el.addClass(activityClass);

                return this;
            };
            return LibraryElementView;
        })(Backbone.View);
        Automation.LibraryElementView = LibraryElementView;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="LibraryModel.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="../../Imported/Backbone.d.ts" />
    /// <reference path="../../AutomationControl.ts" />
    (function (Automation) {
        /** The Library Tab Model */
        var LibraryModel = (function (_super) {
            __extends(LibraryModel, _super);
            function LibraryModel() {
                _super.call(this);
                this.set("LibraryNodes", Automation.CurrentAutomationControl.settings.getLibraryNodesFactory().CreateLibraryNodes());
            }
            return LibraryModel;
        })(Backbone.Model);
        Automation.LibraryModel = LibraryModel;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="LibraryCollectionView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="../Common/Common.ts" />
    /// <reference path="../Imported/Backbone.d.ts" />
    /// <reference path="../AutomationControl.ts" />
    /// <reference path="../Views/LibraryElementView.ts" />
    /// <reference path="../Model/Library/LibraryElementModel.ts" />
    /// <reference path="../Model/Library/LibraryModel.ts" />
    (function (Automation) {
        /** Library collection located in the Library panel */
        var LibraryCollectionView = (function (_super) {
            __extends(LibraryCollectionView, _super);
            function LibraryCollectionView(libraryModel, libraryContainer, canvasContainer) {
                this._canvasContainer = canvasContainer;
                _super.call(this, {
                    model: libraryModel,
                    el: libraryContainer,
                    events: {
                        "click div.hitarea": "toggleLibraryGroup"
                    }
                });
            }
            LibraryCollectionView.prototype.render = function () {
                this.$el.html('');
                var nodes = this.model.get('LibraryNodes');
                var mainUl = $('<ul class="list"></ul>');

                if (nodes == null) {
                    return this;
                }

                if (nodes.length > 0)
                    this.$el.append(mainUl);

                for (var i = 0; i < nodes.length; i++) {
                    var object = nodes[i];
                    var nodename = object.nodename;
                    var groupNode = $("<li class='listitem'><div class='hitarea'></div><span class='folder ellipsis'>" + nodename + "</span></li>");
                    $(mainUl).append(groupNode);

                    if (object.subnodes.length == 0) {
                        continue;
                    }

                    var subUl = $('<ul class="listitems"></ul>');
                    $(groupNode).append(subUl);

                    for (var j = 0; j < object.subnodes.length; j++) {
                        var subnode = object.subnodes[j];
                        var typeId = "libraryElement" + subnode.activitytypeid;

                        var wrapperLi = $("<li class='subitem' id='" + typeId + "'></li>");
                        $(subUl).append(wrapperLi);

                        var elem1 = new Automation.LibraryElementView(new Automation.LibraryElementModel({ Title: subnode.Title, Image: subnode.image, ActivityTypeID: subnode.activitytypeid }), $(wrapperLi), this._canvasContainer);
                        elem1.render();
                    }
                }

                return this;
            };

            LibraryCollectionView.prototype.toggleLibraryGroup = function (event) {
                var elementToToggle = $(event.currentTarget).parent().find('ul');
                var arrowButton = $(event.currentTarget);
                if (elementToToggle.length == 0 || $(arrowButton).length == 0) {
                    return;
                }

                if (elementToToggle.css('display') == 'block' || elementToToggle.css('display') == '') {
                    elementToToggle.css('display', 'none');
                    $(arrowButton).css('backgroundPosition', '0px 0px');
                } else {
                    elementToToggle.css('display', 'block');
                    $(arrowButton).css('backgroundPosition', '0px -11px');
                }
            };
            return LibraryCollectionView;
        })(Backbone.View);
        Automation.LibraryCollectionView = LibraryCollectionView;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="PropertyView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="../Common/Common.ts" />
    /// <reference path="../Imported/Backbone.d.ts" />
    /// <reference path="../AutomationControl.ts" />
    (function (Automation) {
        /** Property tab view - view for properties */
        var PropertyView = (function (_super) {
            __extends(PropertyView, _super);
            function PropertyView(propertyContainer) {
                _super.call(this, { el: propertyContainer });
                this.currentPropertyView = null;
            }
            PropertyView.prototype.initialize = function () {
                var self = this;
                self._visible = true;
                self.propertyViewCurrentModel = '';
                this.$el.parent().tabs({
                    beforeActivate: function (event, ui) {
                        if (self.propertyViewCurrentModel != "") {
                            if (ui.newPanel.attr('id') !== self.$el.attr('id') && self.propertyViewCurrentModel.getIsEditMode() && !self.shouldPropagate()) {
                                event.preventDefault();
                            }
                        }
                    },
                    activate: function (event, ui) {
                        if (ui.newPanel.attr('id') == self.$el.attr('id')) {
                            self._visible = true;
                            self.refreshView();
                        } else {
                            self._visible = false;
                        }
                    }
                });
                Automation.eventManager.on('modelUpdated', this.refreshView, this);
                this.renderPlaceHolder();
            };

            PropertyView.prototype.refreshView = function () {
                if (!this._visible) {
                    return;
                }

                if (Automation.CurrentAutomationControl.getCurrentModel() == null) {
                    if (this.propertyViewCurrentModel === null || this.propertyViewCurrentModel === '') {
                        return;
                    }

                    if (this.propertyViewCurrentModel.getIsEditMode() && !this.shouldPropagate()) {
                        return;
                    } else {
                        this.renderPlaceHolder();
                        this.propertyViewCurrentModel.setIsEditMode(false);
                        this.propertyViewCurrentModel = '';
                        return;
                    }
                }

                if (this.propertyViewCurrentModel !== null && this.propertyViewCurrentModel !== '' && this.propertyViewCurrentModel.getIsEditMode() && !this.shouldPropagate()) {
                    Automation.CurrentAutomationControl.setCurrentModel(this.propertyViewCurrentModel);
                    return;
                }

                if (this.currentPropertyView != null) {
                    this.currentPropertyView.dispose();
                    this.currentPropertyView = null;
                }
                this.propertyViewCurrentModel = Automation.CurrentAutomationControl.getCurrentModel();
                this.renderPropertyView(Automation.CurrentAutomationControl.getCurrentModel());
            };

            PropertyView.prototype.renderPropertyView = function (currentModel) {
                var self = this;
                this.$el.html('');
                var propertyView = Automation.CurrentAutomationControl.settings.getPropertyViewFactory().createProperty(Automation.CurrentAutomationControl.getCurrentModel());
                propertyView.renderPropertyView().done(function (propertyElement) {
                    propertyView.$el = $(propertyElement).appendTo(self.$el);
                    propertyView.$el.attr("tabindex", "0");
                    var propertyPanelLabel = Automation.CurrentAutomationControl.settings.getLabelKeyValuePhraseCollection().GetLabelPhrase()["[PROPERTY PANEL ARIA LABEL]"];
                    propertyView.$el.attr("aria-label", propertyPanelLabel);
                    propertyView.el = propertyView.$el[0];
                    propertyView.renderCompleted();
                    if (propertyView.isIframe()) {
                        var frame = this.$el.find("iframe");
                        $(frame).load(function () {
                            self.$el.data("loadState", "completed");
                            self.$el.trigger("loadCompleted");
                        });
                    }
                    self.currentPropertyView = propertyView;
                });
            };

            PropertyView.prototype.renderPlaceHolder = function () {
                this.renderPropertyView(null);
            };

            PropertyView.prototype.shouldPropagate = function () {
                var returnPropogattion = true;
                var shouldPropagate = confirm(Automation.CurrentAutomationControl.settings.getLabelKeyValuePhraseCollection()["[CONFIRMATION DIALOGUE BEFORE SAVE]"]);
                if (!shouldPropagate) {
                    returnPropogattion = false;
                } else {
                    this.propertyViewCurrentModel.setIsEditMode(false);
                }

                return returnPropogattion;
            };
            return PropertyView;
        })(Backbone.View);
        Automation.PropertyView = PropertyView;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="CommonTileInformation.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    (function (Automation) {
        Automation.CommonTileInformation = {
            defaultEmptyTitleTemplate: '<span class="emptyTileTitle ellipsis" title="<%= emptyTitleText %>"><%= emptyTitleText %><span>',
            defaultTileImageTemplate: '<span class="tileImageWrapper" title="<%= Title %>"><img class="tileImage" src="<%- image %>"></img></span>',
            defaultEmptyTileImageTemplate: '<span class="tileImageWrapper" title="<%= emptyTitleText %>"><img class="tileImage" src="<%- image %>"></img></span>'
        };
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="LibraryModel.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="../../Imported/Backbone.d.ts" />
    /// <reference path="../../AutomationControl.ts" />
    /// <reference path="../../Common/Automation.d.ts" />
    (function (Automation) {
        /** The Library Tab Element Node */
        var LibraryElementNode = (function () {
            function LibraryElementNode() {
            }
            return LibraryElementNode;
        })();
        Automation.LibraryElementNode = LibraryElementNode;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="LibraryModel.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="../../Imported/Backbone.d.ts" />
    /// <reference path="../../AutomationControl.ts" />
    /// <reference path="../../Common/Automation.d.ts" />
    (function (Automation) {
        /** The Library Tab ItemGroup Node */
        var LibraryGroupNode = (function () {
            function LibraryGroupNode() {
            }
            return LibraryGroupNode;
        })();
        Automation.LibraryGroupNode = LibraryGroupNode;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="MultiselectCommandButton.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    (function (Automation) {
        /**
        * Reacts on multiselect button interaction
        */
        var MultiselectCommandButton = (function () {
            function MultiselectCommandButton(workspaceModeController, buttonElement) {
                var _this = this;
                this.multiselectEnabled = false;
                this.workspaceModeController = null;
                this.buttonElement = null;
                this.workspaceModeController = workspaceModeController;
                this.buttonElement = buttonElement;
                this.workspaceModeController.registerMultiselectButton(this);

                this.buttonElement.click(function () {
                    _this.execute();
                });
            }
            /** Execute the command. */
            MultiselectCommandButton.prototype.execute = function () {
                this.multiselectEnabled = !this.multiselectEnabled;

                if (this.multiselectEnabled) {
                    this.workspaceModeController.enableMultiselectView();
                    this.enable();
                } else {
                    this.workspaceModeController.disableMultiselectView();
                    this.disable();
                }
            };

            MultiselectCommandButton.prototype.enable = function () {
                this.buttonElement.addClass("selected");
            };

            MultiselectCommandButton.prototype.disable = function () {
                this.buttonElement.removeClass("selected");
            };
            return MultiselectCommandButton;
        })();
        Automation.MultiselectCommandButton = MultiselectCommandButton;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="ZoomViewCommandButton.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    (function (Automation) {
        /**
        * Reacts on zoom button interaction
        */
        var ZoomViewCommandButton = (function () {
            function ZoomViewCommandButton(workspaceModeController, buttonElement) {
                var _this = this;
                this.zoomIn = true;
                this.workspaceModeController = null;
                this.buttonElement = null;
                this.workspaceModeController = workspaceModeController;
                this.buttonElement = buttonElement;
                this.workspaceModeController.registerZoomViewButton(this);

                this.buttonElement.click(function () {
                    _this.execute();
                });
                this.activateZoomIn();
            }
            /** Execute the command. */
            ZoomViewCommandButton.prototype.execute = function () {
                this.zoomIn = !this.zoomIn;
                Mscrm.Automation.zoomOut = !this.zoomIn;

                if (this.zoomIn == true) {
                    this.workspaceModeController.zoomIn();
                    this.activateZoomIn();
                } else {
                    this.workspaceModeController.zoomOut();
                    this.activateZoomOut();
                }
            };

            ZoomViewCommandButton.prototype.activateZoomIn = function () {
                this.buttonElement.removeClass("zoomInImage").addClass("zoomOutImage");
            };

            ZoomViewCommandButton.prototype.activateZoomOut = function () {
                this.buttonElement.removeClass("zoomOutImage").addClass("zoomInImage");
            };
            return ZoomViewCommandButton;
        })();
        Automation.ZoomViewCommandButton = ZoomViewCommandButton;
        ;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="PanViewMode.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="../../Common/Common.ts" />
    /// <reference path="../../Common/Dimensions.ts" />
    (function (Automation) {
        /**
        * Calculates the offset of an element for the given settings
        */
        var PanViewMode = (function () {
            function PanViewMode(workspace) {
                this.workspace = null;
                this.pointMouseDown = new Automation.Point(0, 0);
                this.pointMouseMove = new Automation.Point(0, 0);
                this.mouseDown = false;
                this.scrollLeft = 0;
                this.scrollTop = 0;
                this.workspace = workspace;
            }
            /** Enables the pan view mode. */
            PanViewMode.prototype.enableMode = function () {
                this.workspace.$el.addClass("canvasGrab");
                $(this.workspace.el).bind("mousedown", { context: this }, this.mouseDownHandler);
                $(window).bind("mousemove", { context: this }, this.mouseMoveHandler).bind("mouseup", { context: this }, this.mouseUpHandler);
            };

            PanViewMode.prototype.mouseDownHandler = function (event) {
                var self = event.data.context;
                self.mouseDown = true;
                self.pointMouseDown = new Automation.Point(event.clientX, event.clientY);

                self.scrollLeft = self.workspace.el.scrollLeft;
                self.scrollTop = self.workspace.el.scrollTop;
                self.workspace.$el.removeClass("canvasGrab").addClass("canvasGrabbing");
                return false;
            };

            PanViewMode.prototype.mouseMoveHandler = function (event) {
                var self = event.data.context;
                if (self.mouseDown == true) {
                    self.workspace.el.scrollLeft = self.scrollLeft + self.pointMouseDown.getX() - event.clientX;
                    self.workspace.el.scrollTop = self.scrollTop + self.pointMouseDown.getY() - event.clientY;
                }
            };

            PanViewMode.prototype.mouseUpHandler = function (event) {
                var self = event.data.context;
                self.mouseDown = false;
                self.workspace.$el.removeClass("canvasGrabbing").addClass("canvasGrab");
            };

            /** Disables the pan view mode. */
            PanViewMode.prototype.disableMode = function () {
                this.workspace.$el.removeClass("canvasGrab");
                this.workspace.$el.unbind('mousedown', this.mouseDownHandler);
                $(window).unbind('mouseup', this.mouseUpHandler);
                $(window).unbind('mousemove', this.mouseMoveHandler);
            };
            return PanViewMode;
        })();
        Automation.PanViewMode = PanViewMode;
        ;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="ZoomViewMode.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="../../AutomationControl.ts" />
    (function (Automation) {
        /**
        * Calculates the offset of an element for the given settings
        */
        var ZoomViewMode = (function () {
            function ZoomViewMode(workspace) {
                this.workspace = null;
                this.workspace = workspace;
            }
            /** Zoom in. */
            ZoomViewMode.prototype.ZoomIn = function () {
                this.workspace.$el.removeClass("zoomOut");

                var layoutProperties = Automation.CurrentAutomationControl.settings.getLayoutProperties();
                layoutProperties.setWidth(layoutProperties.getZoomInWidth());

                this.refreshWorkspace();
            };

            /** Zoom out. */
            ZoomViewMode.prototype.ZoomOut = function () {
                this.workspace.$el.addClass("zoomOut");
                var layoutProperties = Automation.CurrentAutomationControl.settings.getLayoutProperties();
                layoutProperties.setWidth(layoutProperties.getZoomOutWidth());
                this.refreshWorkspace();
            };

            ZoomViewMode.prototype.refreshWorkspace = function () {
                this.workspace.render();
                this.workspace.scrollToTile('.slot.selected');
            };
            return ZoomViewMode;
        })();
        Automation.ZoomViewMode = ZoomViewMode;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="MultiSelectMode.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="../../AutomationControl.ts" />
    /// <reference path="../../Common/ContainerEdgeScroller.ts" />
    /// <reference path="../../Common/Dimensions.ts" />
    /// <reference path="../../Common/Graphics.ts" />
    /// <reference path="../../Model/Activities/ActivityDefinitionModel.ts" />
    (function (Automation) {
        /**
        * Calculates the offset of an element for the given settings
        */
        var MultiSelectMode = (function () {
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
                this.deltaY = layoutProperties.getWorkspacePositionY();
            }
            /** Enable multi select mode. */
            MultiSelectMode.prototype.enableMode = function () {
                $(this.workspace.el).bind("mousedown", { context: this }, this.mouseDownHandler);
                $(window).bind("mousemove", { context: this }, this.mouseMoveHandler).bind("mouseup", { context: this }, this.mouseUpHandler);
            };

            /** Disable multi select mode. */
            MultiSelectMode.prototype.disableMode = function () {
                this.workspace.$el.unbind('mousedown', this.mouseDownHandler);
                $(window).unbind('mouseup', this.mouseUpHandler);
                $(window).unbind('mousemove', this.mouseMoveHandler);
            };

            MultiSelectMode.prototype.mouseDownHandler = function (event) {
                var self = event.data.context;
                self.containerEdgeScroller.initialize();
                self.pointMouseDown.setX(event.clientX - self.deltaX + self.workspace.el.scrollLeft);
                self.pointMouseDown.setY(event.clientY - self.deltaY + self.workspace.el.scrollTop);
                self.mouseDown = true;
            };

            MultiSelectMode.prototype.mouseMoveHandler = function (event) {
                var self = event.data.context;
                if (!self.mouseDown) {
                    return;
                }

                self.containerEdgeScroller.scrollIfCursorOnEdge(event.pageX, event.pageY);

                self.pointMouseMove.setX(event.clientX - self.deltaX + self.workspace.el.scrollLeft);
                self.pointMouseMove.setY(event.clientY - self.deltaY + self.workspace.el.scrollTop);

                $("." + self.selectLineClass).remove();
                var rectangle = new Automation.Rectangle(self.pointMouseDown, self.pointMouseMove);
                self.drawRectangle(rectangle);
                var latticePointRectangle = self.computeRowColumnSelect(rectangle);
                self.highlightSelections(latticePointRectangle);
            };

            MultiSelectMode.prototype.highlightSelections = function (latticeCoordinatesRectangle) {
                var deselected = this.getActivitiesDependingOnSelection(latticeCoordinatesRectangle, false);
                var selections = this.getActivitiesDependingOnSelection(latticeCoordinatesRectangle, true);
                Automation.CurrentAutomationControl.activityTree.setSelectedActivities(selections);

                $.each(deselected, function (index, activity) {
                    Automation.ActivityDefinitionModel.supportedEvents.deselect.trigger(activity);
                });

                $.each(selections, function (index, selection) {
                    Automation.ActivityDefinitionModel.supportedEvents.select.trigger(selection);
                });

                if (selections.length == 1) {
                    Automation.updateCurrentModel(selections[0]);
                }
            };

            MultiSelectMode.prototype.mouseUpHandler = function (event) {
                var self = event.data.context;
                self.containerEdgeScroller.stopScrolling();
                self.mouseDown = false;
                $("." + self.selectLineClass).remove();
            };

            MultiSelectMode.prototype.computeRowColumnSelect = function (rectangle) {
                var layoutProperties = Automation.CurrentAutomationControl.settings.getLayoutProperties();
                var cellWidth = layoutProperties.getColSpacing() + layoutProperties.getWidth();
                var cellHeight = layoutProperties.getRowSpacing() + layoutProperties.getHeight();

                var leftCol = Math.floor(rectangle.getLeft() / cellWidth);
                var rightCol = Math.floor(rectangle.getRight() / cellWidth);
                var topRow = Math.floor(rectangle.getTop() / cellHeight);
                var bottomRow = Math.floor(rectangle.getBottom() / cellHeight);

                var slotRectangleLeftTop = this.getPixelPositionsForSlotBoundaries(leftCol, topRow);
                var pointLeftTop = new Automation.Point(rectangle.getLeft(), rectangle.getTop());

                if (!slotRectangleLeftTop.isPointInsideWidth(pointLeftTop)) {
                    leftCol++;
                }
                if (!slotRectangleLeftTop.isPointInsideHeight(pointLeftTop)) {
                    topRow++;
                }

                var latticePointCoordinateRectangle = new Automation.Rectangle(new Automation.Point(leftCol, topRow), new Automation.Point(rightCol, bottomRow), false);

                return latticePointCoordinateRectangle;
            };

            MultiSelectMode.prototype.getPixelPositionsForSlotBoundaries = function (column, row) {
                var layoutProperties = Automation.CurrentAutomationControl.settings.getLayoutProperties();
                var slotWidth = layoutProperties.getWidth();
                var slotHeight = layoutProperties.getHeight();
                var SpacingWidth = layoutProperties.getColSpacing();
                var SpacingHeight = layoutProperties.getRowSpacing();

                var leftCol = column * (slotWidth + SpacingWidth);
                var topRow = row * (slotHeight + SpacingHeight);
                var rightCol = leftCol + slotWidth;
                var bottomRow = topRow + slotHeight;

                return new Automation.Rectangle(new Automation.Point(leftCol, topRow), new Automation.Point(rightCol, bottomRow));
            };

            MultiSelectMode.prototype.drawRectangle = function (rectangle) {
                var self = this;
                var lineWidth = 0;
                var segments = Automation.Graphics.createRectangleDOM(rectangle, this.selectLineClass, lineWidth);
                $.each(segments, function (index, segment) {
                    self.workspace.$el.append(segment);
                });
            };

            MultiSelectMode.prototype.isActivityInsideRectangle = function (activity, latticePointRectangle) {
                var row = activity.getRow();
                var col = activity.getCol();

                var point = new Automation.Point(col, row);
                if (latticePointRectangle.isPointInsideWidth(point) && latticePointRectangle.isPointInsideHeight(point)) {
                    return true;
                }

                return false;
            };

            /** Gets the activities that have the coordinates by row and column inside/outside the rectangle in lattice point coordinates.
            * @param latticePointRectangle: The rectangle of the selection in lattice point coordinate.
            * @param includedInRectangle: If we want the activities inside the rectangle or outside the rectangle.
            * @return: The activities.
            */
            MultiSelectMode.prototype.getActivitiesDependingOnSelection = function (latticePointRectangle, includedInRectangle) {
                var _this = this;
                var outside = 0;
                var inside = 1;

                var selectedActivities = [];
                var activityDictionary = [];
                $(Automation.CurrentAutomationControl.activityTree.getAllConcreteActivities()).each(function (index, currentActivity) {
                    activityDictionary[currentActivity.getActivityId()] = outside;
                });

                // Mark the activities that are inside the rectangle and the dependencies.
                $(Automation.CurrentAutomationControl.activityTree.getAllConcreteActivities()).each(function (indexActivity, currentActivity) {
                    if (_this.isActivityInsideRectangle(currentActivity, latticePointRectangle)) {
                        activityDictionary[currentActivity.getActivityId()] = inside;

                        var dependentActivityList = currentActivity.getDependantActivities();
                        $(dependentActivityList).each(function (indexDependentActivity, dependentActivity) {
                            activityDictionary[dependentActivity.getActivityId()] = inside;
                        });
                    }
                });

                var toSelect = includedInRectangle ? inside : outside;
                $(Automation.CurrentAutomationControl.activityTree.getAllConcreteActivities()).each(function (index, currentActivity) {
                    if (activityDictionary[currentActivity.getActivityId()] == toSelect) {
                        selectedActivities.push(currentActivity);
                    }
                });
                return selectedActivities;
            };
            return MultiSelectMode;
        })();
        Automation.MultiSelectMode = MultiSelectMode;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="DefaultWorkspaceModeController.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="Common.ts"/>
    /// <reference path="Automation.d.ts"/>
    /// <reference path="../Workspace/Commands/MultiselectCommandButton.ts"/>
    /// <reference path="../Workspace/Commands/ZoomViewCommandButton.ts"/>
    /// <reference path="../Workspace/modes/PanViewMode.ts"/>
    /// <reference path="../Workspace/modes/ZoomViewMode.ts"/>
    /// <reference path="../Workspace/modes/MultiSelectMode.ts"/>
    /// <reference path="../Workspace/IWorkspace.d.ts"/>
    (function (Automation) {
        /**
        * The class controlling the workspace mode and its command
        */
        var DefaultWorkspaceModeController = (function () {
            function DefaultWorkspaceModeController(workspace) {
                this.workspace = null;
                // Modes
                this.zoomViewMode = null;
                this.panViewMode = null;
                this.multiSelectMode = null;
                // Buttons
                this.multiselectButton = null;
                this.zoomViewButton = null;
                this.workspace = workspace;
                this.multiSelectMode = new Automation.MultiSelectMode(workspace);
                this.panViewMode = new Automation.PanViewMode(this.workspace);
                this.zoomViewMode = new Automation.ZoomViewMode(this.workspace);
                this.panViewMode.enableMode();
            }
            /** Registers the multiselect view button. */
            DefaultWorkspaceModeController.prototype.registerMultiselectButton = function (button) {
                this.multiselectButton = button;
            };

            /** Registers the zoom view button. */
            DefaultWorkspaceModeController.prototype.registerZoomViewButton = function (button) {
                this.zoomViewButton = button;
            };

            /** Enables the multiselect view mode. */
            DefaultWorkspaceModeController.prototype.enableMultiselectView = function () {
                this.multiSelectMode.enableMode();
                this.panViewMode.disableMode();
            };

            /** Disables the multiselect view mode. */
            DefaultWorkspaceModeController.prototype.disableMultiselectView = function () {
                this.panViewMode.enableMode();
                this.multiSelectMode.disableMode();
            };

            /** Zoom in. */
            DefaultWorkspaceModeController.prototype.zoomIn = function () {
                this.zoomViewMode.ZoomIn();
            };

            /** Zoom out. */
            DefaultWorkspaceModeController.prototype.zoomOut = function () {
                this.zoomViewMode.ZoomOut();
            };
            return DefaultWorkspaceModeController;
        })();
        Automation.DefaultWorkspaceModeController = DefaultWorkspaceModeController;
        ;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="StatusMessageResolver.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="./Common.ts" />
    /// <reference path="./Automation.d.ts" />
    (function (Automation) {
        /** Resolves status messages */
        var ActivityStatus = (function () {
            function ActivityStatus(code, statusMessageId) {
                this.code = code;
                this.statusMessageId = statusMessageId;
            }
            return ActivityStatus;
        })();
        Automation.ActivityStatus = ActivityStatus;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="Common.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../Imported/Backbone.d.ts" />
/// <reference path="../AutomationControl.ts" />
/// <reference path="./DragTouchHelper.ts" />
/// <reference path="./ContextFlyoutItem.ts" />
/// <reference path="../Views/CanvasView.ts" />
/// <reference path="../Views/LibraryCollectionView.ts" />
/// <reference path="../Views/PropertyView.ts" />
/// <reference path="../Model/TileInformation/CommonTileInformation.ts" />
/// <reference path="../Model/Library/LibraryElementNode.ts" />
/// <reference path="../Model/Library/LibraryGroupNode.ts" />
/// <reference path="DefaultWorkspaceModeController.ts" />
/// <reference path="ActivityStatus.ts" />

var Mscrm;
(function (Mscrm) {
    (function (Automation) {
        /** Flag indicating if the canvas is zoomed or not */
        Automation.zoomOut = false;

        /** Create a global even manager */
        Automation.eventManager = {};
        _.extend(Automation.eventManager, Backbone.Events);

        /** Create a global method to update the current model */
        function updateCurrentModel(newModel) {
            Automation.CurrentAutomationControl.updateCurrentModel(newModel);
        }
        Automation.updateCurrentModel = updateCurrentModel;

        /** Returns 'right' if RTL is enabled, 'left' if LTR is enabled **/
        function GetLeftAlignmentAttributeName() {
            return Automation.CurrentAutomationControl.settings.getRenderRTL() ? "right" : "left";
        }
        Automation.GetLeftAlignmentAttributeName = GetLeftAlignmentAttributeName;

        /** Contains common activitytype */
        /* Defining the type as string, as we can create a different class for each process */
        var ActivityType = (function () {
            function ActivityType() {
            }
            ActivityType.Empty = "empty";

            ActivityType.Root = "root";
            return ActivityType;
        })();
        Automation.ActivityType = ActivityType;

        /** Contains names of the events */
        var EventNames = (function () {
            function EventNames() {
            }
            EventNames.ModelUpdated = "modelUpdated";
            return EventNames;
        })();
        Automation.EventNames = EventNames;

        /** Contains the css class */
        var CssClass = (function () {
            function CssClass() {
            }
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
            return CssClass;
        })();
        Automation.CssClass = CssClass;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="ConnectedComponent.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="./Common.ts" />
    /// <reference path="./Automation.d.ts" />
    /// <reference path="../AutomationControl.ts" />
    (function (Automation) {
        /**
        * Builds the slots.
        */
        var ConnectedComponent = (function () {
            function ConnectedComponent(activity) {
                if (activity) {
                    this.root = activity;
                    this.nodes = [activity];
                    this.nodesWithOrphanChildren = [activity];
                    this.orphanChildren = activity.getChildActivitiesSorted();
                }
            }
            /** Get the root of the connected component.
            @return: The root.
            */
            ConnectedComponent.prototype.getRoot = function () {
                return this.root;
            };

            /** Set the root of the connected component.
            @param value: The value.
            */
            ConnectedComponent.prototype.setRoot = function (value) {
                this.root = value;
            };

            /** Get the nodes that are forming the connected component.
            @return: The nodes.
            */
            ConnectedComponent.prototype.getNodes = function () {
                return this.nodes;
            };

            /** Set the nodes that are forming the connected component.
            @param value: The nodes.
            */
            ConnectedComponent.prototype.setNodes = function (value) {
                this.nodes = value;
            };

            /** Get all the orphan children of the connected component.
            @return: The orphanChildren.
            */
            ConnectedComponent.prototype.getOrphanChildren = function () {
                return this.orphanChildren;
            };

            /** Set all the orphan children of the connected component.
            @value: The orphan children.
            */
            ConnectedComponent.prototype.setOrphanChildren = function (value) {
                this.orphanChildren = value;
            };

            /** Get all the nodes with orphan children .
            @return: The orphanChildren.
            */
            ConnectedComponent.prototype.getNodesWithOrphanChildren = function () {
                return this.nodesWithOrphanChildren;
            };

            /** Set all the nodes with orphan children .
            @value: The orphanChildren.
            */
            ConnectedComponent.prototype.setNodesWithOrphanChildren = function (value) {
                this.nodesWithOrphanChildren = value;
            };

            /* String representation of the object*/
            ConnectedComponent.prototype.toString = function (digitsToDisplay) {
                digitsToDisplay = (digitsToDisplay) ? digitsToDisplay : 4;
                var newline = "\n";
                var content = ">> Conex Component <<" + newline;
                content += "root:" + this.root.getActivityId().substring(0, digitsToDisplay) + newline;
                content += "distance:" + Automation.CurrentAutomationControl.activityTree.getDistanceFromRoot(this.root) + newline;

                var nodesStr = "";
                $.each(this.nodes, function (index, node) {
                    nodesStr += "[" + node.getActivityId().substring(0, digitsToDisplay) + "]";
                });
                content += "nodes :" + nodesStr + newline;

                var nodesWithOrphanChildrenStr = "";
                $.each(this.nodesWithOrphanChildren, function (index, node) {
                    nodesWithOrphanChildrenStr += "[" + node.getActivityId().substring(0, digitsToDisplay) + "..]";
                });

                content += "Nodes with Orphan Children :" + nodesWithOrphanChildrenStr + newline;

                var orphanChildrenStr = "";
                $.each(this.orphanChildren, function (index, child) {
                    var id = (child.getActivityId()) ? child.getActivityId() : "undefined";
                    orphanChildrenStr += "[" + id.substring(0, digitsToDisplay) + "..]";
                });

                content += "orphan Children :" + orphanChildrenStr + newline;

                return content;
            };
            return ConnectedComponent;
        })();
        Automation.ConnectedComponent = ConnectedComponent;
        ;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="ActivityDefinitionCollection.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="../../Common/Common.ts" />
    /// <reference path="./ActivityDefinitionModel.ts" />
    /// <reference path="../../AutomationControl.ts" />
    (function (Automation) {
        Automation.ActivityDefinitionCollection = Backbone.Collection.extend({
            model: Automation.ActivityDefinitionModel,
            /** Convert the received models to concrete implemenations.*/
            parse: function (response) {
            },
            /** Overrides the Backbone sync method that determines how the collection will be synced with server. */
            sync: function (method, collection, options) {
            },
            /** Updates the position for all activities */
            updatePositions: function () {
                Automation.DefaultActivityPositionCalculator.maxRow = 0;
                var root = this.getProcessDefinitionRoot();
                var startColumn = root.getCol();
                Automation.CurrentAutomationControl.settings.getActivityPositionCalculatorFactory().getCalculator(root.getActivityTypeId()).calculate(root, Automation.DefaultActivityPositionCalculator.maxRow, startColumn);
            },
            /** Returns the workflow definition as an array of activities.*/
            getProcessDefinition: function () {
                return this.models;
            },
            /** Returns the root node for the workflow definition.*/
            getProcessDefinitionRoot: function () {
                var root = null;

                this.forEach(function (activity) {
                    if (activity.getParentActivityId() == null) {
                        root = activity;
                    }
                });

                return root;
            },
            /** Returns an array of activities that are the leafs of the Workflow. */
            getLeafs: function () {
                var leafs = [];
                this.forEach(function (activity) {
                    if (activity.isLeaf())
                        leafs.push(activity);
                });

                return leafs;
            }
        });
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="ActivityTree.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="./Common/ConnectedComponent.ts" />
    /// <reference path="./Common/ConnectedComponentsExtractor.ts" />
    /// <reference path="./Model/Activities/ActivityDefinitionCollection.ts" />
    /// <reference path="./Model/Activities/ActivityDefinitionModel.ts" />
    (function (Automation) {
        var ActivityTree = (function () {
            function ActivityTree() {
                this.activityCollection = null;
                this.selectedActivities = [];
                this.copiedActivities = [];
            }
            /** Sets the activities.
            * @param activities: The activities.
            */
            ActivityTree.prototype.setActivityCollection = function (activities) {
                this.activityCollection = activities;
            };

            /** Sets the selected activities.
            * @param activities: The activities.
            */
            ActivityTree.prototype.setSelectedActivities = function (activities) {
                this.selectedActivities = activities;
            };

            /** Gets the selected activities. */
            ActivityTree.prototype.getSelectedActivities = function () {
                return this.selectedActivities;
            };

            /** Sets the copied activities.
            * @param activities: The activities.
            */
            ActivityTree.prototype.setCopiedActivities = function (activities) {
                this.copiedActivities = activities;
            };

            /** Gets the copied activities. */
            ActivityTree.prototype.getCopiedActivities = function () {
                return this.copiedActivities;
            };

            /** Get parent instance of activity.
            * @param activity: The activity.
            */
            ActivityTree.prototype.getParent = function (activity) {
                var parentId = activity.getParentActivityId();
                if (parentId == null) {
                    return null;
                }

                var parent = null;
                $.each(this.activityCollection.models, function (index, currentActivity) {
                    if (currentActivity.getActivityId() == parentId) {
                        parent = currentActivity;
                        return false;
                    }
                });

                return parent;
            };

            /** Get child activities.
            * @param activity: The activity.
            */
            ActivityTree.prototype.getChildActivities = function (activity) {
                var childActivities = [];

                if (activity.getActivityId() == undefined) {
                    return childActivities;
                }

                $(this.activityCollection.models).each(function (index, currentActivity) {
                    if (currentActivity.getParentActivityId() == activity.getActivityId()) {
                        childActivities.push(currentActivity);
                    }
                });
                return childActivities;
            };

            /** Adds a child activity.
            @param parentActivity: The parent activity.
            @param childActivity: The child activity.
            @return: The child activity.
            */
            ActivityTree.prototype.addChildActivity = function (parentActivity, childActivity) {
                var nextParentBranchId = this.getChildActivities(parentActivity).length;
                childActivity.setParentActivityId(parentActivity.getActivityId());
                childActivity.setParentBranchId(nextParentBranchId.toString());
                this.activityCollection.add(childActivity);
            };

            /** Inserts an activity component as a child at the specified location.
            @ param parentActivity: The parent activity.
            @ param childActivityComponent: The child activity component.
            @ param parentBranchId: The location where the activity is inserted.
            @return: A promise with the default selected activity as parameter.
            */
            ActivityTree.prototype.insertChildActivityComponentAtIndex = function (parentActivity, childActivityComponent, parentBranchId) {
                var self = this;
                var childActivities = parentActivity.getChildActivitiesSorted();
                var childActivity = childActivityComponent.getRoot();
                var oldParent = childActivity.getParent();
                var deferred = $.Deferred();
                var promiseList = [];

                childActivity.setParentActivityId(parentActivity.getActivityId());
                childActivity.setParentBranchId(parentBranchId);

                $.each(childActivities, function (index, activity) {
                    var branchId = activity.getParentBranchId();
                    if (branchId >= parentBranchId) {
                        activity.setParentBranchId(branchId + 1);
                        var promise = activity.save();
                        promiseList.push(promise);
                    }
                });

                childActivity.saveActivityWithSubsequentActivities().done(function (activity) {
                    var savedChildActivity = activity;
                    if (oldParent != null) {
                        promiseList.push(oldParent.createSubsequentActivity());
                    }

                    $.when.apply(self, promiseList).done(function () {
                        deferred.resolveWith(savedChildActivity, [savedChildActivity]);
                    });
                });

                return deferred.promise();
            };

            /** Updates the position for all activities */
            ActivityTree.prototype.UpdatePositions = function () {
                this.activityCollection.updatePositions();
            };

            /** Returns the workflow definition as an array of activities.*/
            ActivityTree.prototype.getProcessDefinition = function () {
                return this.activityCollection.getProcessDefinition();
            };

            /** Returns the root node for the workflow definition.*/
            ActivityTree.prototype.getProcessDefinitionRoot = function () {
                return this.activityCollection.getProcessDefinitionRoot();
            };

            /** Returns an array of activities that are the leafs of the Workflow. */
            ActivityTree.prototype.getLeafs = function () {
                return this.activityCollection.getLeafs();
            };

            /** Returns all the activities */
            ActivityTree.prototype.getActivities = function () {
                return this.activityCollection.models;
            };

            /** Returns all the activities that are not empty */
            ActivityTree.prototype.getAllConcreteActivities = function () {
                var list = [];
                $.each(this.activityCollection.models, function (index, activity) {
                    if (activity.getActivityTypeId() != Automation.ActivityType.Empty) {
                        list.push(activity);
                    }
                });
                return list;
            };

            /** Inserts an activity component after the parent activity and reparentes its children to the inserted activitiy component.
            @param parentActivity:The parent activity.
            @param insertActivityComponent: The activity component.
            @return: A promise with the default selected activity as parameter.
            */
            ActivityTree.prototype.insertActivityComponentAfter = function (parentActivity, insertActivityComponent) {
                var self = this;
                var childActivities = parentActivity.getChildActivitiesSorted();
                var deferred = $.Deferred();
                var promiseList = [];

                var insertActivity = insertActivityComponent.getRoot();
                insertActivity.setParentActivityId(parentActivity.getActivityId());

                var promise = insertActivity.save().done(function () {
                    $.each(childActivities, function (index, activity) {
                        activity.setParentActivityId(insertActivity.getActivityId());
                        if (activity.getActivityTypeId() != Automation.ActivityType.Empty) {
                            promise = activity.save();
                            promiseList.push(promise);
                        }
                    });

                    self.add(insertActivity);

                    $.when.apply(self, promiseList).done(function () {
                        deferred.resolveWith(insertActivity, [insertActivity]);
                    });
                });
                promiseList.push(promise);

                return deferred.promise();
            };

            /** Inserts a new activity component before the specified activity.
            @param activity: The activity.
            @param insertActivity: The activity component that is inserted before the specified activity.
            @return: The promise wich has default select activity as parameter.
            */
            ActivityTree.prototype.insertActivityComponentBefore = function (activity, insertComponent) {
                var self = this;
                var deferred = $.Deferred();

                var root = insertComponent.getRoot();
                root.setParentActivityId(activity.getParent().getActivityId());
                root.setParentBranchId(activity.getParentBranchId());

                root.save().done(function () {
                    self.add(root);
                    var defaultConnectionActivity = insertComponent.getNodesWithOrphanChildren()[0];

                    activity.setParentActivityId(defaultConnectionActivity.getActivityId());
                    activity.setParentBranchId(0);
                    activity.save().done(function () {
                        deferred.resolveWith(root, [root]);
                    });
                });

                return deferred.promise();
            };

            /** Cuts the activity from the workflow tree
            @param: The activity to cut.
            @return: A promise with the default selected activity as parameter.
            */
            ActivityTree.prototype.cutActivity = function (activityToCut) {
                var component = new Automation.ConnectedComponent(activityToCut);
                return this.cutConnectedComponent(component);
            };

            /** Cuts the activity component from the workflow tree.
            @param component: The activity component.
            @return: A promise with the default selected activity as parameter.
            */
            ActivityTree.prototype.cutConnectedComponent = function (component) {
                var self = this;
                var deferred = $.Deferred();
                var promiseList = [];
                var activityToCut = component.getRoot();
                var branchIndex = activityToCut.getParentBranchId();

                var oldParent = activityToCut.getParent();
                if (oldParent == null) {
                    // Return as activity is already cut
                    deferred.resolve();
                    return deferred.promise();
                }

                var oldParentActivityId = oldParent.getActivityId();
                var oldParentChildren = oldParent.getChildActivitiesSorted();
                var activityToCutBranchId = activityToCut.getParentBranchId();
                $.each(component.getOrphanChildren(), function (index, child) {
                    if (child.getActivityTypeId() == Automation.ActivityType.Empty) {
                        self.remove(child);
                    }
                });

                var activitiesToMove = this.getActivitiesToMoveOnCut(component);
                var numberOfActivitiesToBeInserted = activitiesToMove.length;

                $.each(oldParentChildren, function (index, activity) {
                    var branchId = activity.getParentBranchId();
                    if (branchId > activityToCutBranchId) {
                        activity.setParentBranchId(branchId + numberOfActivitiesToBeInserted - 1);
                        var promise = activity.save();
                        promiseList.push(promise);
                    }
                });

                $.each(activitiesToMove, function (index, child) {
                    child.setParentActivityId(oldParentActivityId);
                    child.setParentBranchId(branchIndex);
                    promiseList.push(child.save());
                    branchIndex++;
                });

                // Detach the activity from parent
                activityToCut.setParentActivityId(null);

                $.when.apply(self, promiseList).done(function () {
                    deferred.resolve();
                });

                return deferred.promise();
            };

            /** Gets the activities to move over to the parent all the child activities of the cut activity and its dependant activities children */
            ActivityTree.prototype.getActivitiesToMoveOnCut = function (component) {
                var activitiesToMove = component.getOrphanChildren();

                // Do not include empty activities
                activitiesToMove = $.grep(activitiesToMove, function (element, index) {
                    if (element.getActivityTypeId() == Automation.ActivityType.Empty) {
                        return false;
                    }
                    return true;
                });

                return activitiesToMove;
            };

            /** Fetch activities from the server.
            @param properties: The fetch properties.
            */
            ActivityTree.prototype.fetch = function (objectId) {
                throw new Error("Abstract method not implemented");
            };

            /* Creates the subsequent activities for the leaf activities.
            @return: returns a promise.
            */
            ActivityTree.prototype.createSubsequentActivitiesForLeafs = function () {
                var deferred = $.Deferred();

                var childPromises = [];
                var activities = this.getLeafs();
                $(activities).each(function (index, activity) {
                    var promise = activity.createSubsequentActivity();
                    childPromises.push(promise);
                });

                $.when.apply(self, childPromises).done(function () {
                    deferred.resolve();
                });

                return deferred.promise();
            };

            /** Add activity
            @param : The activity to add.
            */
            ActivityTree.prototype.add = function (activity) {
                this.activityCollection.add(activity);
            };

            /** Remove activity.
            @param : The activity to remove.
            */
            ActivityTree.prototype.remove = function (activity) {
                this.activityCollection.remove(activity);
            };

            ActivityTree.prototype.has = function (activity) {
                var index = $.inArray(activity, this.activityCollection.models);
                return (index >= 0) ? true : false;
            };

            /** Gets the connected components. */
            ActivityTree.prototype.getConnectedComponents = function () {
                var extractor = new Automation.ConnectedComponentsExtractor(this.getAllConcreteActivities());
                var components = extractor.getConnectedComponentsFromSelection(this.getSelectedActivities());
                return components;
            };

            /** Tests if the specified activity is inside the selection.
            @param activity: The activity.
            */
            ActivityTree.prototype.isInSelection = function (activity) {
                var index = $.inArray(activity, this.getSelectedActivities());
                return (index > -1) ? true : false;
            };

            /** Returns the distance between the activity and the root.
            @param activity: The activity.
            */
            ActivityTree.prototype.getDistanceFromRoot = function (activity) {
                var INFINITY = 1000;
                var dist = 0;

                while ((activity != null) && (activity.getActivityTypeId() != Automation.ActivityType.Root)) {
                    dist++;
                    activity = activity.getParent();
                }

                if (activity == undefined) {
                    return INFINITY;
                }
                return dist;
            };
            return ActivityTree;
        })();
        Automation.ActivityTree = ActivityTree;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="Common.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="./Common.ts" />
    /// <reference path="./Automation.d.ts" />
    (function (Automation) {
        /**
        * Summary: Creates flyout control
        */
        var DefaultFlyoutControl = (function () {
            /**
            * Summary: Creates flyout control
            * @param flyoutStyleClass: Css class to be used to style the flyout control
            */
            function DefaultFlyoutControl(flyoutStyleClass) {
                this.isShown = false;
                this.contentToShow = null;
                this.eventArgs = null;
                this.flyoutContainer = null;
                /** Property indicating the time for show flyout animation (in ms) */
                this.ShowTime = 250;
                /** Property indicating the time for hide flyout animation (in ms) */
                this.HideTime = 250;
                if (!flyoutStyleClass) {
                    throw "Style is needed.";
                }

                this.flyoutStyleClass = flyoutStyleClass;
            }
            DefaultFlyoutControl.prototype.ignoreClick = function () {
                return false;
            };

            /**
            * Summary: Sets root element for flyout control
            * @param rootElement: the root element
            */
            DefaultFlyoutControl.prototype.SetRootElement = function (rootElement) {
                this.rootElement = rootElement;
            };

            /**
            * Summary: Sets the content that will be shown on the flyout control
            * @param content: the html content to be shown.
            */
            DefaultFlyoutControl.prototype.SetContent = function (content) {
                this.contentToShow = $(content);
            };

            /**
            * Summary: Sets the event for which flyout is shown
            * @param event: the UI event
            */
            DefaultFlyoutControl.prototype.SetEvent = function (event) {
                this.eventArgs = event;
            };

            /**
            * Summary: True if flyout is shown; false otherwise.
            */
            DefaultFlyoutControl.prototype.IsShown = function () {
                return this.isShown;
            };

            /** Summary: Shows the flyout control
            * @returns promise
            */
            DefaultFlyoutControl.prototype.Show = function () {
                var deferred = $.Deferred();
                if (this.isShown) {
                    this.flyoutContainer.remove();
                }

                this.buildFlyoutContainer();

                if (this.isShown) {
                    this.contentToShow.hide();
                    this.flyoutContainer.show();
                    this.contentToShow.fadeIn(this.ShowTime).promise().done(function () {
                        deferred.resolve();
                    });
                } else {
                    var self = this;
                    this.flyoutContainer.slideDown(this.ShowTime).promise().done(function () {
                        self.bindFlyoutHideOnDocumentAndFrameClick();
                        deferred.resolve();
                    });
                }

                this.isShown = true;
                return deferred.promise();
            };

            DefaultFlyoutControl.prototype.buildFlyoutContainer = function () {
                this.flyoutContainer = $("<div></div>");
                this.flyoutContainer.addClass(this.flyoutStyleClass);
                if (this.eventArgs !== null) {
                    var rootElementOffset = this.rootElement.offset();
                    this.flyoutContainer.css({
                        'left': this.eventArgs['pageX'] - rootElementOffset.left,
                        'top': this.eventArgs['pageY'] - rootElementOffset.top
                    });
                }

                this.flyoutContainer.hide();
                this.flyoutContainer.append(this.contentToShow);
                this.rootElement.append(this.flyoutContainer);

                this.flyoutContainer.unbind("click", this.ignoreClick);
                this.flyoutContainer.bind("click", this.ignoreClick);
            };

            DefaultFlyoutControl.prototype.hideFlyout = function () {
                if (!this.isShown) {
                    return;
                }

                this.Hide();
                $(document).unbind("click", this.hideFlyout);
                $.each($("iframe"), function (i, element) {
                    var iframeDoc = $(element).contents().get(0);
                    $(iframeDoc).unbind("click", this.hideFlyout);
                });
            };

            DefaultFlyoutControl.prototype.bindFlyoutHideOnDocumentAndFrameClick = function () {
                var self = this;
                $(document).bind("click", function (e) {
                    // Added a additional check for right click
                    // as Firefox treats right click as a click
                    // and hides the context menu
                    if (e.button !== 2) {
                        self.hideFlyout();
                    }
                });

                $(document).bind("contextmenu", function () {
                    self.hideFlyout();
                });

                var hideFlyoutOnFrameReadyOrLoaded = function (iFrameElement) {
                    var bindHideToiFrameElement = function () {
                        var iframeDoc = $(iFrameElement).contents().get(0);
                        $(iframeDoc).bind("click", function () {
                            self.hideFlyout();
                        });
                    };

                    $(iFrameElement).ready(function () {
                        bindHideToiFrameElement();
                    });

                    $(iFrameElement).load(function () {
                        bindHideToiFrameElement();
                    });
                };

                $.each($("iframe"), function (i, element) {
                    hideFlyoutOnFrameReadyOrLoaded(element);
                });
            };

            /** Summary: Hides the flyout control
            * @returns promise
            */
            DefaultFlyoutControl.prototype.Hide = function () {
                var deferred = $.Deferred();

                if (!this.isShown) {
                    deferred.resolve();
                    return deferred.promise();
                }

                this.isShown = false;
                this.flyoutContainer.unbind("click", this.ignoreClick);

                var self = this;

                this.flyoutContainer.fadeOut(this.HideTime).promise().done(function () {
                    self.flyoutContainer.remove();
                    deferred.resolve();
                });

                return deferred.promise();
            };
            return DefaultFlyoutControl;
        })();
        Automation.DefaultFlyoutControl = DefaultFlyoutControl;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="AbstractSubsequentSlots.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    ///<reference path="..\..\AutomationControl.ts" />
    (function (Automation) {
        /**
        * Abstract subsequent slots class.
        */
        var AbstractSubsequentActivities = (function () {
            function AbstractSubsequentActivities(parentActivity) {
                this.parentActivity = parentActivity;
            }
            /**
            * Creates  the child slots for the given activity.
            */
            AbstractSubsequentActivities.prototype.createChildActivities = function () {
            };

            /**
            * Creates a slot activity.
            * @param parentId: The parent id.
            * @param activityType: The activity type.
            * @return: The slot activity.
            */
            AbstractSubsequentActivities.prototype.createActivity = function (parentId, activityType) {
                var activity = Automation.CurrentAutomationControl.settings.getActivityDefinitionFactory().createActivity(activityType);

                activity.setProcessId(Automation.CurrentAutomationControl.processId);
                activity.setParentActivityId(parentId);

                return activity;
            };
            return AbstractSubsequentActivities;
        })();
        Automation.AbstractSubsequentActivities = AbstractSubsequentActivities;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="DefaultSubsequentSlots.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="./AbstractSubsequentActivities.ts" />
    (function (Automation) {
        /**
        * The default subsequent slots class.
        */
        var DefaultSubsequentActivities = (function (_super) {
            __extends(DefaultSubsequentActivities, _super);
            function DefaultSubsequentActivities() {
                _super.apply(this, arguments);
            }
            /**
            * Creates  the child slots for the given activity.
            @return: The created child activities.
            */
            DefaultSubsequentActivities.prototype.createChildActivities = function () {
                // If activity already has some child activities or is an empty activity skip adding default empty activity
                if (this.parentActivity.getActivityTypeId() == Automation.ActivityType.Empty || this.parentActivity.getActivities().length > 0) {
                    return [];
                }

                var parentId = this.parentActivity.getActivityId();

                var activity = this.createActivity(parentId, Automation.ActivityType.Empty);
                activity.setParentBranchId(this.parentActivity.getNextParentBranchId());
                activity.setReadonlyMode(this.parentActivity.getReadonlyMode());

                return activity;
            };
            return DefaultSubsequentActivities;
        })(Automation.AbstractSubsequentActivities);
        Automation.DefaultSubsequentActivities = DefaultSubsequentActivities;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="DefaultActivityPositionCalculator.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="./Common.ts" />
    /// <reference path="./PositionCalculator.ts" />
    /// <reference path="./Automation.d.ts" />
    /// <reference path="../Model/Slots/DefaultSubsequentActivities.ts" />
    (function (Automation) {
        /**
        * Get the position for a given activity
        */
        var DefaultActivityPositionCalculator = (function () {
            function DefaultActivityPositionCalculator() {
            }
            /** Summary: Get the position for a given activity
            */
            DefaultActivityPositionCalculator.prototype.calculate = function (activityModel, row, column) {
                activityModel.setRow(row);
                activityModel.setCol(column);
                var children = activityModel.getChildActivitiesSorted();

                var step = 0;
                for (var i = 0; i < children.length; i++) {
                    DefaultActivityPositionCalculator.maxRow += step;
                    step = 1;
                    Automation.CurrentAutomationControl.settings.getActivityPositionCalculatorFactory().getCalculator(children[i].getActivityTypeId()).calculate(children[i], DefaultActivityPositionCalculator.maxRow, column + 1);
                }
            };

            /** Draws the connector between two activities.
            * @param parentActivity: The parent activity.
            * @param childActivity: The child activity.
            */
            DefaultActivityPositionCalculator.prototype.getLineConnectors = function (parentActivity, childActivity) {
                return Automation.CurrentAutomationControl.settings.getLineConnectorProviderFactory().getLineConnectorProvider(parentActivity, childActivity).getLineConnectors();
            };
            return DefaultActivityPositionCalculator;
        })();
        Automation.DefaultActivityPositionCalculator = DefaultActivityPositionCalculator;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="DefaultActivityPositionCalculatorFactory.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="./Common.ts" />
    /// <reference path="./Automation.d.ts" />
    /// <reference path="./DefaultActivityPositionCalculator.ts" />
    (function (Automation) {
        /**
        * Get the position calculator for a given activity
        */
        var DefaultActivityPositionCalculatorFactory = (function () {
            function DefaultActivityPositionCalculatorFactory() {
                this.cachedCalculators = {};
            }
            /** Summary: Get the position calculator for a given activity
            */
            DefaultActivityPositionCalculatorFactory.prototype.getCalculator = function (activityType) {
                var calculator = this.cachedCalculators[activityType];
                if (calculator == null || calculator == undefined) {
                    calculator = this.initializeCalculator(activityType);
                    this.cachedCalculators[activityType] = calculator;
                }
                return calculator;
            };

            /** Summary: Initialize a new calculator for a given activity type
            */
            DefaultActivityPositionCalculatorFactory.prototype.initializeCalculator = function (activityType) {
                return new Automation.DefaultActivityPositionCalculator();
            };
            return DefaultActivityPositionCalculatorFactory;
        })();
        Automation.DefaultActivityPositionCalculatorFactory = DefaultActivityPositionCalculatorFactory;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="LabelPhraseCollection.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="./Common.ts" />
    (function (Automation) {
        var DefaultLabelPhraseDictionaryCollection = (function () {
            function DefaultLabelPhraseDictionaryCollection() {
            }
            /** Summary: Getting label Phrases for all the control
            */
            DefaultLabelPhraseDictionaryCollection.prototype.GetLabelPhrase = function () {
                var labelPhraseDictionary = {};
                return labelPhraseDictionary;
            };
            return DefaultLabelPhraseDictionaryCollection;
        })();
        Automation.DefaultLabelPhraseDictionaryCollection = DefaultLabelPhraseDictionaryCollection;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="DefaultContextFlyoutContent.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="./ConnectedComponent.ts" />
    /// <reference path="./ConnectedComponentsExtractor.ts" />
    /// <reference path="./Automation.d.ts" />
    /// <reference path="../AutomationControl.ts" />
    /// <reference path="../Model/Activities/ActivityDefinitionModel.ts" />
    (function (Automation) {
        /**
        * Summary: Creates ContextMenu Content
        */
        var DefaultContextFlyoutContent = (function () {
            /**
            * Summary: Creates ContextMenu Content
            * @param activity: activity for which ContextMenu content has to be set
            */
            function DefaultContextFlyoutContent(activity) {
                // context menu options list
                this.optionsPropertyList = {};
                if (!activity) {
                    throw "Activity is needed.";
                }

                this.currentActivity = activity;
                this.optionsPropertyList = {};
            }
            /**
            * Summary: Build the context elements
            @return: array of options.
            */
            DefaultContextFlyoutContent.prototype.buildOptions = function () {
                var self = this;
                var optionsList = [];
                $.each(this.optionsPropertyList, function (key, optionProperty) {
                    var option = $('<li id=' + optionProperty.id + '>' + optionProperty.label + '</li>');
                    option.click(function () {
                        optionProperty.clickHandler.call(self);
                    });

                    optionsList.push(option);
                });

                return optionsList;
            };

            /**
            * Summary: Creates ContextMenu Content
            @return: content created for context menu
            */
            DefaultContextFlyoutContent.prototype.createContent = function () {
                var content = $('<div class="contextmenuitems">');
                var items = $('<ul>');
                var elements = this.buildOptions();
                $.each(elements, function (key, element) {
                    items.append(element);
                });

                content.append(items);
                return content;
            };
            return DefaultContextFlyoutContent;
        })();
        Automation.DefaultContextFlyoutContent = DefaultContextFlyoutContent;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="FlyoutContentProvider.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="./DefaultContextFlyoutContent.ts" />
    (function (Automation) {
        /**
        * Summary: Creates flyout content provider
        */
        var DefaultFlyoutContentProvider = (function () {
            function DefaultFlyoutContentProvider() {
            }
            /** Creates content for flyout based on flyoutcontent type and activity.
            * @param flyoutContentType: The content type for which flyout needs to be build
            * @param activity: The activity.
            */
            DefaultFlyoutContentProvider.prototype.createContent = function (flyoutContentType, activity) {
                switch (flyoutContentType) {
                    case DefaultFlyoutContentProvider.flyoutContentType.ContextFlyout:
                        var contextFlyoutContent = new Automation.DefaultContextFlyoutContent(activity);
                        return contextFlyoutContent.createContent();
                }
            };
            DefaultFlyoutContentProvider.flyoutContentType = {
                ContextFlyout: "contextFlyout"
            };
            return DefaultFlyoutContentProvider;
        })();
        Automation.DefaultFlyoutContentProvider = DefaultFlyoutContentProvider;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="SubsequentActivityGenerator.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="./Common.ts" />
    /// <reference path="./Automation.d.ts" />
    /// <reference path="../Model/Slots/DefaultSubsequentActivities.ts" />
    (function (Automation) {
        /**
        * Builds the slots.
        */
        var DefaultSubsequentActivityGenerator = (function () {
            function DefaultSubsequentActivityGenerator() {
            }
            /** Creates subsequent slots for the given activity.
            * @param activity: The activity.
            * @return : Array of of subsequent activities for the given activity.
            */
            DefaultSubsequentActivityGenerator.prototype.createGenerator = function (activity) {
                return new Automation.DefaultSubsequentActivities(activity);
            };

            DefaultSubsequentActivityGenerator.prototype.createChildActivities = function (activity) {
                var generator = this.createGenerator(activity);
                return generator.createChildActivities();
            };
            return DefaultSubsequentActivityGenerator;
        })();
        Automation.DefaultSubsequentActivityGenerator = DefaultSubsequentActivityGenerator;
        ;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="StatusMessageResolver.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="./Common.ts" />
    /// <reference path="./Automation.d.ts" />
    (function (Automation) {
        /** Resolves status messages */
        var DefaultStatusMessageResolver = (function () {
            function DefaultStatusMessageResolver() {
            }
            /** Resolve message based on message id
            @param messageId - id of message
            @return resolved message
            */
            DefaultStatusMessageResolver.prototype.ResolveMessage = function (messageId) {
                return "Error";
            };
            return DefaultStatusMessageResolver;
        })();
        Automation.DefaultStatusMessageResolver = DefaultStatusMessageResolver;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="DefaultStatusCodeProvider.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="./Common.ts" />
    /// <reference path="./Automation.d.ts" />
    (function (Automation) {
        /**
        * Status Code Provider
        */
        var DefaultStatusCodeProvider = (function () {
            function DefaultStatusCodeProvider() {
            }
            /** Summary: Get the status code using the given activity id
            */
            DefaultStatusCodeProvider.prototype.getStatus = function (activityId) {
                return null;
            };
            return DefaultStatusCodeProvider;
        })();
        Automation.DefaultStatusCodeProvider = DefaultStatusCodeProvider;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="DefaultStatusCodeProviderFactory.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="./Common.ts" />
    /// <reference path="./Automation.d.ts" />
    /// <reference path="./DefaultStatusCodeProvider.ts" />
    (function (Automation) {
        /**
        * Status Code Provider Factory
        */
        var DefaultStatusCodeProviderFactory = (function () {
            function DefaultStatusCodeProviderFactory() {
            }
            DefaultStatusCodeProviderFactory.prototype.getProvider = function (activityType) {
                /** Summary: Get the status code provider using the given activity type
                */
                return new Automation.DefaultStatusCodeProvider();
            };
            return DefaultStatusCodeProviderFactory;
        })();
        Automation.DefaultStatusCodeProviderFactory = DefaultStatusCodeProviderFactory;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="DefaultTileDecorator.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="./Common.ts" />
    /// <reference path="./Automation.d.ts" />
    (function (Automation) {
        /**
        * Status Code Provider
        */
        var DefaultTileDecorator = (function () {
            function DefaultTileDecorator() {
            }
            /** Summary: Adds extra information to the tile
            */
            DefaultTileDecorator.prototype.decorateTileProperties = function (tileProperties) {
            };
            return DefaultTileDecorator;
        })();
        Automation.DefaultTileDecorator = DefaultTileDecorator;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="DefaultLineDecorator.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="./Common.ts" />
    /// <reference path="./Automation.d.ts" />
    (function (Automation) {
        /**
        * Status Code Provider
        */
        var DefaultLineDecorator = (function () {
            function DefaultLineDecorator() {
            }
            /** Summary: Adds extra properties to the lines
            */
            DefaultLineDecorator.prototype.decorateLines = function (lines) {
            };
            return DefaultLineDecorator;
        })();
        Automation.DefaultLineDecorator = DefaultLineDecorator;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="DefaultDecoratorFactory.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="./Common.ts" />
    /// <reference path="./Automation.d.ts" />
    /// <reference path="./DefaultTileDecorator.ts" />
    /// <reference path="./DefaultLineDecorator.ts" />
    (function (Automation) {
        /**
        * Decorator Factory
        */
        var DefaultDecoratorFactory = (function () {
            function DefaultDecoratorFactory() {
            }
            /** Summary: Get the tile decorator for the activity model
            */
            DefaultDecoratorFactory.prototype.getTileDecorator = function (activityModel) {
                return new Automation.DefaultTileDecorator();
            };

            /** Summary: Get the line decorator for the activity models
            */
            DefaultDecoratorFactory.prototype.getLineDecorator = function (parentActivity, childActivity) {
                return new Automation.DefaultLineDecorator();
            };
            return DefaultDecoratorFactory;
        })();
        Automation.DefaultDecoratorFactory = DefaultDecoratorFactory;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="DefaultLineConnectorProvider.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="./Common.ts" />
    /// <reference path="./PositionCalculator.ts" />
    /// <reference path="./Automation.d.ts" />
    /// <reference path="../Model/Slots/DefaultSubsequentActivities.ts" />
    (function (Automation) {
        /**
        * Draw the lines connecting activities
        */
        var DefaultLineConnectorProvider = (function () {
            function DefaultLineConnectorProvider(parentActivity, childActivity) {
                this.parentActivity = parentActivity;
                this.childActivity = childActivity;
            }
            /** Draws the connector between two activities.
            * @param parentActivity: The parent activity.
            * @param childActivity: The child activity.
            */
            DefaultLineConnectorProvider.prototype.getLineConnectors = function () {
                return this.getLineConnectorsWithLineClass("line");
            };

            /** Draws the connector between two activities with the specified line class.
            * @param parentActivity: The parent activity.
            * @param childActivity: The child activity.
            */
            DefaultLineConnectorProvider.prototype.getLineConnectorsWithLineClass = function (lineClass) {
                var row1 = this.parentActivity.getRow();
                var col1 = this.parentActivity.getCol();

                var row2 = this.childActivity.getRow();
                var col2 = this.childActivity.getCol();

                var positionCalculator = new Automation.PositionCalculator(Automation.CurrentAutomationControl.settings.getLayoutProperties());

                var startPoint = new Automation.Point(positionCalculator.computeLeft(col1), positionCalculator.computeTop(row1));
                var endPoint = new Automation.Point(positionCalculator.computeLeft(col2), positionCalculator.computeTop(row2));

                var lines = Automation.CurrentAutomationControl.settings.getConnectorDOMProvider().createConnectorDOM(startPoint, endPoint, lineClass);
                Automation.CurrentAutomationControl.settings.getDecoratorFactory().getLineDecorator(this.parentActivity, this.childActivity).decorateLines(lines);
                return lines;
            };
            return DefaultLineConnectorProvider;
        })();
        Automation.DefaultLineConnectorProvider = DefaultLineConnectorProvider;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="DefaultLineConnectorProviderFactory.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="./Common.ts" />
    /// <reference path="./Automation.d.ts" />
    /// <reference path="./DefaultLineConnectorProvider.ts" />
    (function (Automation) {
        /**
        * Get the line connector provider for a given activities
        */
        var DefaultLineConnectorProviderFactory = (function () {
            function DefaultLineConnectorProviderFactory() {
            }
            /** Summary: Get the line provider for the parent and child activities
            */
            DefaultLineConnectorProviderFactory.prototype.getLineConnectorProvider = function (parentActivity, childActivity) {
                return new Automation.DefaultLineConnectorProvider(parentActivity, childActivity);
            };
            return DefaultLineConnectorProviderFactory;
        })();
        Automation.DefaultLineConnectorProviderFactory = DefaultLineConnectorProviderFactory;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="DefaultConnectorDOMProvider.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="./Common.ts" />
    /// <reference path="./Automation.d.ts" />
    (function (Automation) {
        /**
        * Draw the lines connecting activities
        */
        var DefaultConnectorDOMProvider = (function () {
            function DefaultConnectorDOMProvider() {
            }
            /** Create the connector dom.
            @param startPoint: The starting point.
            @param endPoint: The ending point.
            @param segmentClass: The class that is added to the line, in order to support diferent styles.
            @return: An array of segments.
            */
            DefaultConnectorDOMProvider.prototype.createConnectorDOM = function (startPoint, endPoint, segmentClass) {
                var layoutProperties = Automation.CurrentAutomationControl.settings.getLayoutProperties();

                var segments = [];

                var horizontalClass = " horizontal";
                var verticalClass = " vertical";

                var width = layoutProperties.getWidth();
                var height = layoutProperties.getHeight();
                var colSpacing = layoutProperties.getColSpacing();
                var lineWidth = layoutProperties.getLineWidth();

                //Draw horizontal line from start point to the point which has half colSpacing far away from end point
                var top = startPoint.getY() + height / 2 - lineWidth / 2;
                var left = startPoint.getX() + width;
                var p1 = new Automation.Point(left, top);
                segments.push(Automation.Graphics.createLineDOM(p1, endPoint.getX() - left - colSpacing / 2 + lineWidth / 2, lineWidth, segmentClass + horizontalClass));

                //Draw vertical line from start point to end point. The line position is in left side(half colSpacing) from end point
                var top1 = startPoint.getY() + height / 2;
                var top2 = endPoint.getY() + height / 2;
                left = endPoint.getX() - colSpacing / 2 - lineWidth / 2;
                var p2 = new Automation.Point(left, top1);
                var length = top2 - top1;
                if (top2 < top1) {
                    length = top1 - top2;
                    p2 = new Automation.Point(left, top2);
                }
                segments.push(Automation.Graphics.createLineDOM(p2, lineWidth, length, segmentClass + verticalClass));

                //Draw half colSpacing horizontal line to end point
                top = endPoint.getY() + height / 2 - lineWidth / 2;
                left = endPoint.getX() - colSpacing / 2 - lineWidth / 2;
                var p3 = new Automation.Point(left, top);
                segments.push(Automation.Graphics.createLineDOM(p3, endPoint.getX() - p3.getX(), lineWidth, segmentClass + horizontalClass));

                return segments;
            };
            return DefaultConnectorDOMProvider;
        })();
        Automation.DefaultConnectorDOMProvider = DefaultConnectorDOMProvider;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="IconFactory.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="../Common/Common.ts" />
    /// <reference path="../Common/Automation.d.ts" />
    /// <reference path="./SlotModel.ts"/>
    (function (Automation) {
        /** The Property View Factory */
        var DefaultIconFactory = (function () {
            function DefaultIconFactory() {
                this.iconTemplate = "";
                this.iconTemplate = '<div class="iconContainer"><img title="<%= title %>" src="<%- image %>"></div>';
            }
            /** Creates the icon HTML generator.
            * @param iconType: The type of the icon.
            * @return: icon generator.
            */
            DefaultIconFactory.prototype.getIconAttributes = function (iconType) {
                return null;
            };

            /** Creates a icon.
            * @param iconType: The type of the icon.
            * @return: icon dom element.
            */
            DefaultIconFactory.prototype.createIcon = function (iconType) {
                var iconAttributes = this.getIconAttributes(iconType);
                var slotIconHolderTemplate = _.template(this.iconTemplate);
                return $(slotIconHolderTemplate(iconAttributes))[0];
            };
            return DefaultIconFactory;
        })();
        Automation.DefaultIconFactory = DefaultIconFactory;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="LibraryNodesFactory.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="../../Common/Automation.d.ts" />
    (function (Automation) {
        var DefaultLibraryNodesFactory = (function () {
            function DefaultLibraryNodesFactory() {
            }
            /** Creates the library nodes */
            DefaultLibraryNodesFactory.prototype.CreateLibraryNodes = function () {
                return null;
            };
            return DefaultLibraryNodesFactory;
        })();
        Automation.DefaultLibraryNodesFactory = DefaultLibraryNodesFactory;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="DynamicSegmentActivityTileInformation.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="../../Common/Common.ts"/>
    /// <reference path="../../Common/Automation.d.ts" />
    (function (Automation) {
        /* Abstract activity tile information. */
        var AbstractActivityTileInformation = (function () {
            function AbstractActivityTileInformation(activityModel, itemId) {
                this.activityModel = activityModel;
                this.itemId = itemId;
            }
            /** Get's the item from the activity model. */
            AbstractActivityTileInformation.prototype.getItem = function () {
                var item = { attributes: {} };
                if (this.activityModel) {
                    item = (typeof (this.itemId) === "undefined") ? this.activityModel.getActiveItem() : this.activityModel.getItem(this.itemId);
                }
                return item;
            };

            /** Gets the dynamic attributes. */
            AbstractActivityTileInformation.prototype.getDynamicAttributes = function () {
                var item = this.getItem();
                return this.virtualGetDynamicAttributes(item.attributes);
            };

            /** Gets the dynamic attributes.
            * @protected
            */
            AbstractActivityTileInformation.prototype.virtualGetDynamicAttributes = function (defaultAttributes) {
                return defaultAttributes;
            };

            /** GetProperties */
            AbstractActivityTileInformation.prototype.getProperties = function () {
                throw new Error('method is abstract');
            };
            return AbstractActivityTileInformation;
        })();
        Automation.AbstractActivityTileInformation = AbstractActivityTileInformation;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="CommonTileInformation.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="../../Common/Automation.d.ts" />
    (function (Automation) {
        var TileProperties = (function () {
            function TileProperties(template, tileImageTemplate, image, tileClass, emptyTitleText, emptyTileTemplate, emptyTileImageTemplate) {
                this.template = null;
                this.template = template;
                this.tileImageTemplate = tileImageTemplate;
                this.image = image;
                this.tileclass = tileClass;
                this.emptyTitleText = emptyTitleText;
                this.emptyTileImageTemplate = emptyTileImageTemplate;
                this.emptyTileTemplate = emptyTileTemplate;
            }
            return TileProperties;
        })();
        Automation.TileProperties = TileProperties;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="EmptyActivityTileInformation.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="../../Common/Common.ts"/>
    /// <reference path="../../Common/Automation.d.ts" />
    /// <reference path="../../AutomationControl.ts" />
    /// <reference path="./AbstractActivityTileInformation.ts" />
    /// <reference path="./TileProperties.ts" />
    (function (Automation) {
        var EmptyActivityTileInformation = (function (_super) {
            __extends(EmptyActivityTileInformation, _super);
            function EmptyActivityTileInformation() {
                _super.apply(this, arguments);
            }
            EmptyActivityTileInformation.prototype.getProperties = function () {
                var properties = new Automation.TileProperties('', '', null, 'emptyTile', Automation.CurrentAutomationControl.settings.getLabelKeyValuePhraseCollection().GetLabelPhrase()["[DRAG ELEMENT HERE]"], '<span class="slotTile ellipsis" title="<%= emptyTitleText %>"><%= emptyTitleText %><span>', '');
                return properties;
            };
            return EmptyActivityTileInformation;
        })(Automation.AbstractActivityTileInformation);
        Automation.EmptyActivityTileInformation = EmptyActivityTileInformation;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="EmptyStatusView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="../../Common/Common.ts" />
    /// <reference path="../../Imported/Backbone.d.ts" />
    (function (Automation) {
        /** View for empty status */
        var EmptyStatusView = (function (_super) {
            __extends(EmptyStatusView, _super);
            function EmptyStatusView() {
                _super.apply(this, arguments);
            }
            /** Renders the view */
            EmptyStatusView.prototype.render = function () {
                this.$el = $('');
                return this;
            };
            return EmptyStatusView;
        })(Backbone.View);
        Automation.EmptyStatusView = EmptyStatusView;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="ErrorStatusView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="../../Imported/Backbone.d.ts" />
    /// <reference path="../../AutomationControl.ts" />
    (function (Automation) {
        /** View for error status */
        var ErrorStatusView = (function (_super) {
            __extends(ErrorStatusView, _super);
            function ErrorStatusView(itemAttributes) {
                _super.call(this);
                this.itemAttributes = itemAttributes;
            }
            /** Renders the view */
            ErrorStatusView.prototype.render = function () {
                var statusMessage = Automation.CurrentAutomationControl.settings.getStatusMessageResolver().ResolveMessage(this.itemAttributes["StatusMessageId"]);

                var html = '<span class="tileError">' + '<img src="images/error_16.png" class="tileErrorImg" title="' + statusMessage + '">' + '</span>';

                this.$el = $(html);
                return this;
            };
            return ErrorStatusView;
        })(Backbone.View);
        Automation.ErrorStatusView = ErrorStatusView;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="ActionStatus.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="../../Common/Common.ts" />
    (function (Automation) {
        /** Status options for Process Automation actions */
        (function (ActionStatus) {
            ActionStatus[ActionStatus["NotRunning"] = 0] = "NotRunning";
            ActionStatus[ActionStatus["Running"] = 1] = "Running";
            ActionStatus[ActionStatus["Stopping"] = 2] = "Stopping";
            ActionStatus[ActionStatus["Idle"] = 3] = "Idle";
            ActionStatus[ActionStatus["Error"] = 4] = "Error";
        })(Automation.ActionStatus || (Automation.ActionStatus = {}));
        var ActionStatus = Automation.ActionStatus;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="TileInformationFactory.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="../../Common/Common.ts"/>
    /// <reference path="../../Common/Automation.d.ts" />
    /// <reference path="../../AutomationControl.ts" />
    /// <reference path="./AbstractActivityTileInformation.ts" />
    /// <reference path="./EmptyActivityTileInformation.ts" />
    ///<reference path="../../Views/TileStatus/EmptyStatusView.ts"/>
    ///<reference path="../../Views/TileStatus/ErrorStatusView.ts"/>
    ///<reference path="../../Views/TileStatus/ActionStatus.ts"/>
    (function (Automation) {
        /** Factory providing information about the tile */
        var DefaultTileInformationFactory = (function () {
            function DefaultTileInformationFactory() {
            }
            /** Generates information object of the activity depending on ActivityType.
            @param activityType: The activity Type.
            @return: An information object of activity.
            */
            DefaultTileInformationFactory.prototype.GetTileInformationForActivityType = function (activityType) {
                var activityModel = Automation.CurrentAutomationControl.settings.getActivityDefinitionFactory().createActivity(activityType);

                return this.getTileInformationForActivityModel(activityModel);
            };

            /** Generates information object of the activity depending on ActivityModel.
            @param activityModel: The activity model.
            @param specificItemId: A specific item id.
            @return: An information object of activity.
            */
            DefaultTileInformationFactory.prototype.getTileInformationForActivityModel = function (activityModel, specificItemId) {
                return new Automation.EmptyActivityTileInformation(activityModel, specificItemId);
            };

            /** Gets the view for the tile status based on its item attributes
            @param activeItemAttributes: attributes of the active item
            @return: status view
            */
            DefaultTileInformationFactory.prototype.GetTileStatusView = function (model, activeItemAttributes) {
                if (!("State" in activeItemAttributes)) {
                    return new Automation.EmptyStatusView();
                }

                var status = activeItemAttributes["State"];
                var statusValue = parseInt(status);
                switch (statusValue) {
                    case 4 /* Error */:
                        return new Automation.ErrorStatusView(activeItemAttributes);
                    default:
                        return new Automation.EmptyStatusView();
                }
            };
            return DefaultTileInformationFactory;
        })();
        Automation.DefaultTileInformationFactory = DefaultTileInformationFactory;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="PropertyViewFactory.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="../Common/Common.ts" />
    /// <reference path="../Common/Automation.d.ts" />
    (function (Automation) {
        /** The Property View Factory */
        var AbstractPropertyViewFactory = (function () {
            function AbstractPropertyViewFactory() {
            }
            /** Creates a property.
            * @param nodeType: The type of the property.
            * @param currentModel: Current model for the property.
            * @return: Current view.
            */
            AbstractPropertyViewFactory.prototype.createProperty = function (currentModel) {
                throw new Error("Method is Abstract");
            };
            return AbstractPropertyViewFactory;
        })();
        Automation.AbstractPropertyViewFactory = AbstractPropertyViewFactory;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="EmptyActivity.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="./ActivityDefinitionModel.ts" />
    (function (Automation) {
        /** The Empty activity class. */
        Automation.EmptyActivity = Automation.ActivityDefinitionModel.extend({
            initialize: function (options) {
                this.constructor.__super__.initialize.apply(this, [options]);
                this.setActivityTypeId(Automation.ActivityType.Empty);
            },
            IsEmpty: function () {
                return true;
            },
            /** Returns true if the activity can be moved. */
            canMove: function () {
                return false;
            }
        });
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="ActivityDefinitionFactory.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="../../Common/Automation.d.ts" />
    /// <reference path="../../AutomationControl.ts" />
    /// <reference path="./EmptyActivity.ts" />
    (function (Automation) {
        var DefaultActivityDefinitionFactory = (function () {
            function DefaultActivityDefinitionFactory() {
            }
            /** Creates an activity.
            * @param activityType: The type of the activity.
            */
            DefaultActivityDefinitionFactory.prototype.createActivity = function (activityType) {
                switch (activityType) {
                    case Automation.ActivityType.Empty:
                        return new Automation.EmptyActivity();
                    default:
                        return new Automation.ActivityDefinitionModel();
                }
            };

            /** Converts an ActivityDefinitionModel to a Concrete Activity
            * @param activity: The activity to convert.
            * @return : The concrete activity.
            */
            DefaultActivityDefinitionFactory.prototype.convertToConcreteActivity = function (activity) {
                var concreteActivity = this.createActivity(activity.getActivityTypeId());
                concreteActivity.setActivityId(activity.getActivityId());
                concreteActivity.setProcessId(activity.getProcessId());
                concreteActivity.setParentActivityId(activity.getParentActivityId());
                concreteActivity.setParentBranchId(activity.getParentBranchId());
                concreteActivity.setProperties(activity.getProperties());
                return concreteActivity;
            };
            return DefaultActivityDefinitionFactory;
        })();
        Automation.DefaultActivityDefinitionFactory = DefaultActivityDefinitionFactory;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="FlyoutItemClickHandler.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    ///<reference path="../AutomationControl.ts" />
    /// <reference path="./Automation.d.ts" />
    (function (Automation) {
        /** Default handler for click on menu item */
        var FlyoutItemClickHandler = (function () {
            function FlyoutItemClickHandler() {
            }
            /** Handles a click on item.
            */
            FlyoutItemClickHandler.prototype.execute = function () {
                if (this.confirmAction()) {
                    this.executeInternal();
                }
            };

            /** Internally execute the action
            @return: promise.
            */
            FlyoutItemClickHandler.prototype.executeInternal = function () {
            };

            /* Validate if the action is ok to execute
            **/
            FlyoutItemClickHandler.prototype.confirmAction = function () {
                return true;
            };
            return FlyoutItemClickHandler;
        })();
        Automation.FlyoutItemClickHandler = FlyoutItemClickHandler;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="DeleteFlyoutItemClickHandler.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    ///<reference path="..\..\..\AutomationControl.ts" />
    ///<reference path="..\..\..\Common\FlyoutItemClickHandler.ts" />
    (function (Automation) {
        /** Default handler for click on menu item */
        var DefaultDeleteFlyoutItemClickHandler = (function (_super) {
            __extends(DefaultDeleteFlyoutItemClickHandler, _super);
            function DefaultDeleteFlyoutItemClickHandler() {
                _super.apply(this, arguments);
            }
            /** Internally execute the action
            @return: promise.
            */
            DefaultDeleteFlyoutItemClickHandler.prototype.executeInternal = function () {
                var _this = this;
                var connectedComponents = Automation.CurrentAutomationControl.activityTree.getConnectedComponents();
                Automation.eventManager.trigger("hideContextMenus");
                this.removeComponentsFromWorkflowTree(connectedComponents).done(function () {
                    _this.deleteComponentsFromServer(connectedComponents).done(function () {
                        Automation.updateCurrentModel(null);
                        Automation.eventManager.trigger("canvasrefresh");
                    });
                });
            };

            /* Validate if the action is ok to execute
            **/
            DefaultDeleteFlyoutItemClickHandler.prototype.confirmAction = function () {
                return confirm(Automation.CurrentAutomationControl.settings.getLabelKeyValuePhraseCollection()["[CONFIRMATION DIALOGUE BEFORE DELETE]"]);
            };

            DefaultDeleteFlyoutItemClickHandler.prototype.removeComponentsFromWorkflowTree = function (connectedComponents) {
                var promise = null;
                $.each(connectedComponents, function (index, component) {
                    if (promise == null) {
                        promise = Automation.CurrentAutomationControl.activityTree.cutConnectedComponent(component);
                    } else {
                        promise = promise.then(function () {
                            return Automation.CurrentAutomationControl.activityTree.cutConnectedComponent(component);
                        });
                    }
                });
                return promise;
            };

            DefaultDeleteFlyoutItemClickHandler.prototype.deleteComponentsFromServer = function (connectedComponents) {
                var promise = null;
                $.each(connectedComponents, function (indexComponent, component) {
                    $.each(component.getNodes(), function (indexNode, node) {
                        Automation.CurrentAutomationControl.activityTree.remove(node);
                        if (promise == null) {
                            promise = node.destroy();
                        } else {
                            promise = promise.then(function () {
                                return node.destroy();
                            });
                        }
                    });
                });
                return promise;
            };
            return DefaultDeleteFlyoutItemClickHandler;
        })(Automation.FlyoutItemClickHandler);
        Automation.DefaultDeleteFlyoutItemClickHandler = DefaultDeleteFlyoutItemClickHandler;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="DefaultActivityClickHandler.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    ///<reference path="..\..\..\AutomationControl.ts" />
    ///<reference path="..\..\..\Common\DefaultFlyoutContentProvider.ts" />
    ///<reference path=".\DefaultDeleteFlyoutItemClickHandler.ts" />
    (function (Automation) {
        /** Default handler for click on activity */
        var DefaultContextFlyoutHandler = (function () {
            function DefaultContextFlyoutHandler(currentActivity) {
                this.currentActivity = currentActivity;
            }
            /** Handles a click on activity.
            @param event: The context event
            @return: promise.
            */
            DefaultContextFlyoutHandler.prototype.click = function (event) {
                var contextMenu = Automation.CurrentAutomationControl.settings.getSlotContextMenu();
                var content = Automation.CurrentAutomationControl.settings.getFlyoutContentProvider().createContent(Automation.DefaultFlyoutContentProvider.flyoutContentType.ContextFlyout, this.currentActivity);
                contextMenu.SetRootElement(this.getContextRootElement());
                contextMenu.SetContent(content);
                contextMenu.SetEvent(event);
                return contextMenu.Show();
            };

            DefaultContextFlyoutHandler.prototype.getContextRootElement = function () {
                return $(document.body);
            };
            return DefaultContextFlyoutHandler;
        })();
        Automation.DefaultContextFlyoutHandler = DefaultContextFlyoutHandler;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="DefaultActivityClickHandler.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    (function (Automation) {
        /** Default handler for click on activity */
        var DefaultActivityClickHandler = (function () {
            function DefaultActivityClickHandler(currentActivity) {
                this.currentActivity = currentActivity;
            }
            /** Handles a click on activity.
            @param elementClicked: The element that click should be performed on.
            @return: promise.
            */
            DefaultActivityClickHandler.prototype.click = function (elementClicked) {
                Automation.eventManager.trigger('hideMenus');
                Automation.eventManager.trigger('hideContextMenus');
                Automation.updateCurrentModel(this.currentActivity);
                var deferred = $.Deferred();
                deferred.resolve();
                return deferred.promise();
            };
            return DefaultActivityClickHandler;
        })();
        Automation.DefaultActivityClickHandler = DefaultActivityClickHandler;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="DefaultActivityDblClickHandler.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    ///<reference path="..\..\..\AutomationControl.ts" />
    (function (Automation) {
        /** Default handler for doule click on activity */
        var DefaultActivityDblClickHandler = (function () {
            function DefaultActivityDblClickHandler(currentActivity) {
                this.currentActivity = currentActivity;
            }
            /** Handles a double click on activity.
            @param elementDblClicked: The element that double click should be performed on.
            @return: promise.
            */
            DefaultActivityDblClickHandler.prototype.dblclick = function (elementDblClicked) {
                Automation.eventManager.trigger('hideMenus');
                Automation.eventManager.trigger('hideContextMenus');
                Automation.eventManager.trigger("slotTileHolderDoubleClick");
                Automation.updateCurrentModel(this.currentActivity);
                var deferred = $.Deferred();
                deferred.resolve();
                return deferred.promise();
            };
            return DefaultActivityDblClickHandler;
        })();
        Automation.DefaultActivityDblClickHandler = DefaultActivityDblClickHandler;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="EmptyActivityDblClickHandler.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    (function (Automation) {
        /** Default handler for doule click on activity */
        var EmptyActivityDblClickHandler = (function () {
            function EmptyActivityDblClickHandler(currentActivity) {
                this.currentActivity = currentActivity;
            }
            /** Handles a double click on activity.
            @param elementDblClicked: The element that double click should be performed on.
            @return: promise.
            */
            EmptyActivityDblClickHandler.prototype.dblclick = function (elementDblClicked) {
                Automation.eventManager.trigger('hideMenus');
                Automation.eventManager.trigger('hideContextMenus');
                $("#lblLibrary").click();
                Automation.updateCurrentModel(this.currentActivity);
                var deferred = $.Deferred();
                deferred.resolve();
                return deferred.promise();
            };
            return EmptyActivityDblClickHandler;
        })();
        Automation.EmptyActivityDblClickHandler = EmptyActivityDblClickHandler;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="DefaultDropValidator.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    ///<reference path="..\..\..\..\AutomationControl.ts" />
    ///<reference path="..\..\..\..\Common\Automation.d.ts" />
    ///<reference path="..\..\..\..\Common\Common.ts" />
    (function (Automation) {
        /** Handles the validation of the drop*/
        var DefaultDropValidator = (function () {
            function DefaultDropValidator() {
            }
            /** Check for the validity of the drop
            * @param {activityComponent} : The component which we are dropping
            */
            DefaultDropValidator.prototype.isDropValid = function (activityComponent) {
                var result = true;
                for (var i = 0; i < this.validationSteps.length && result; i++) {
                    var step = this.validationSteps[i];
                    step.currentActivity = this.currentActivity;
                    result = this.validationSteps[i].isDropValid(activityComponent);
                }
                return result;
            };

            /** Initialize the validator */
            DefaultDropValidator.prototype.initialize = function () {
                this.validationSteps = [];
            };
            return DefaultDropValidator;
        })();
        Automation.DefaultDropValidator = DefaultDropValidator;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="AbstractActivityDropHandler.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="../../../Common/ConnectedComponent.ts" />
    /// <reference path="DropValidator\DefaultDropValidator.ts" />
    (function (Automation) {
        /** Controller that handles the drop of an activity on another activity */
        var AbstractActivityDropHandler = (function () {
            function AbstractActivityDropHandler(currentActivity) {
                this.currentActivity = null;
                this.currentActivity = currentActivity;
            }
            /** Executes the drop action. */
            AbstractActivityDropHandler.prototype.drop = function (droppedActivityComponent) {
            };

            /** Returns true if drop is allowed for the given activity component, false otherwise
            *@param activityComponent - activity component that is dropped
            */
            AbstractActivityDropHandler.prototype.dropAllowed = function (activityComponent) {
                // 1. Don't allow to drop on activity that is already contained in the activityComponent
                // 2. Don't allow to drop on components parent.
                if ($.inArray(this.currentActivity, activityComponent.getNodes()) > -1 || activityComponent.getRoot().getParent() == this.currentActivity) {
                    return false;
                }
                var validator = Automation.CurrentAutomationControl.settings.getDropValidator();
                validator.initialize();
                validator.currentActivity = this.currentActivity;
                return validator.isDropValid(activityComponent);
            };
            return AbstractActivityDropHandler;
        })();
        Automation.AbstractActivityDropHandler = AbstractActivityDropHandler;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="DefaultInsertSlotVerticalDropHandler.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    ///<reference path="..\..\..\AutomationControl.ts" />
    ///<reference path="AbstractActivityDropHandler.ts" />
    ///<reference path="..\..\..\Common\ConnectedComponent.ts" />
    ///<reference path="DropValidator\DefaultDropValidator.ts" />
    (function (Automation) {
        var DefaultInsertSlotVerticalDropHandler = (function (_super) {
            __extends(DefaultInsertSlotVerticalDropHandler, _super);
            function DefaultInsertSlotVerticalDropHandler() {
                _super.apply(this, arguments);
            }
            /** Drop an activity.
            @param droppedActivity: The activity that is dropped.
            @return: The created activity.
            */
            DefaultInsertSlotVerticalDropHandler.prototype.drop = function (activityComponent) {
                var self = this;
                var deferred = $.Deferred();

                if (!this.dropAllowed(activityComponent)) {
                    deferred.resolve();
                    return deferred.promise();
                }

                Automation.CurrentAutomationControl.activityTree.cutConnectedComponent(activityComponent).done(function () {
                    self.insertActivityComponent(activityComponent).done(function (activity) {
                        deferred.resolveWith(activity, [activity]);
                    });
                });

                return deferred.promise();
            };

            DefaultInsertSlotVerticalDropHandler.prototype.insertActivityComponent = function (droppedActivityComponent) {
                var parent = this.currentActivity.getParent();
                var index = this.currentActivity.getParentBranchId() + 1;
                return Automation.CurrentAutomationControl.activityTree.insertChildActivityComponentAtIndex(parent, droppedActivityComponent, index);
            };

            /** Returns true if drop is allowed for the given activity, false otherwise
            *@param droppedActivity - activity that is dropped
            */
            DefaultInsertSlotVerticalDropHandler.prototype.dropAllowed = function (activityComponent) {
                // Don't allow activity to be dropped on its own insert slot
                // Don't allow activity to be dropped on insertions slot inside component.
                if (activityComponent.getRoot().getActivityId() == this.currentActivity.getActivityId() || $.inArray(this.currentActivity, activityComponent.getNodes()) > -1) {
                    return false;
                }

                var validator = Automation.CurrentAutomationControl.settings.getDropValidator();
                validator.currentActivity = this.currentActivity;
                return validator.isDropValid(activityComponent);
            };
            return DefaultInsertSlotVerticalDropHandler;
        })(Automation.AbstractActivityDropHandler);
        Automation.DefaultInsertSlotVerticalDropHandler = DefaultInsertSlotVerticalDropHandler;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="EmptyActivityDropHandler.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    ///<reference path="..\..\..\AutomationControl.ts" />
    ///<reference path="..\..\..\Common\Common.ts" />
    ///<reference path="..\..\..\Common\ConnectedComponent.ts" />
    ///<reference path="AbstractActivityDropHandler.ts" />
    (function (Automation) {
        /** Handles drop on empty activity */
        var EmptyActivityDropHandler = (function (_super) {
            __extends(EmptyActivityDropHandler, _super);
            function EmptyActivityDropHandler() {
                _super.apply(this, arguments);
            }
            /** Drop an activity component.
            @param droppedActivitiesComponent: The activity component that is dropped.
            @return: A promise with the default selected activity as parameter.
            */
            EmptyActivityDropHandler.prototype.drop = function (droppedActivitiesComponent) {
                var self = this;
                var deferred = $.Deferred();

                if (!this.dropAllowed(droppedActivitiesComponent)) {
                    deferred.resolve();
                    return deferred.promise();
                }

                Automation.CurrentAutomationControl.activityTree.cutConnectedComponent(droppedActivitiesComponent).done(function () {
                    var rootActivity = droppedActivitiesComponent.getRoot();
                    var emptyActivityParentID = self.currentActivity.getParentActivityId();
                    var emptyActivityBranchIndex = self.currentActivity.getParentBranchId();

                    Automation.CurrentAutomationControl.activityTree.remove(self.currentActivity);
                    rootActivity.setParentActivityId(emptyActivityParentID);
                    rootActivity.setParentBranchId(emptyActivityBranchIndex);

                    rootActivity.saveActivityWithSubsequentActivities().done(function (insertedActivity) {
                        deferred.resolveWith(insertedActivity, [insertedActivity]);
                    });
                });

                return deferred.promise();
            };

            /** Returns true if drop is allowed for the given activity, false otherwise
            *@param droppedActivity - activity that is dropped
            */
            EmptyActivityDropHandler.prototype.dropAllowed = function (droppedActivityComponent) {
                // Don't allow parent activity to be dropped on its own empty slot
                if ($.inArray(this.currentActivity, droppedActivityComponent.getOrphanChildren()) > -1) {
                    return false;
                }

                var validator = Automation.CurrentAutomationControl.settings.getDropValidator();
                validator.initialize();
                validator.currentActivity = this.currentActivity.getParent();
                return validator.isDropValid(droppedActivityComponent);
            };
            return EmptyActivityDropHandler;
        })(Automation.AbstractActivityDropHandler);
        Automation.EmptyActivityDropHandler = EmptyActivityDropHandler;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="DefaultActivityDropHandler.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    ///<reference path="..\..\..\AutomationControl.ts" />
    ///<reference path="..\..\..\Common\Common.ts" />
    ///<reference path="..\..\..\Common\ConnectedComponent.ts" />
    ///<reference path="AbstractActivityDropHandler.ts" />
    (function (Automation) {
        var DefaultActivityDropHandler = (function (_super) {
            __extends(DefaultActivityDropHandler, _super);
            function DefaultActivityDropHandler() {
                _super.apply(this, arguments);
            }
            /** Drop an activity component.
            @param droppedActivitiesComponent: The activity that is dropped.
            @return: A promise with the created activity as parameter.
            */
            DefaultActivityDropHandler.prototype.drop = function (droppedActivitiesComponent) {
                var self = this;
                var deferred = $.Deferred();

                if (!this.dropAllowed(droppedActivitiesComponent)) {
                    deferred.resolveWith(this.currentActivity, [this.currentActivity]);
                    return deferred.promise();
                }

                //If we drop on an activity with an empty element, remove the empty activity so we don't keep it as a child.
                var childActivities = self.currentActivity.getChildActivitiesSorted();
                if (childActivities.length > 0 && childActivities[0].getActivityTypeId() == Automation.ActivityType.Empty) {
                    Automation.CurrentAutomationControl.activityTree.remove(childActivities[0]);
                }

                Automation.CurrentAutomationControl.activityTree.cutConnectedComponent(droppedActivitiesComponent).done(function () {
                    var rootActivity = droppedActivitiesComponent.getRoot();

                    Automation.CurrentAutomationControl.activityTree.addChildActivity(self.currentActivity, rootActivity);
                    rootActivity.saveActivityWithSubsequentActivities().done(function (insertedActivity) {
                        deferred.resolveWith(insertedActivity, [insertedActivity]);
                    });
                });

                return deferred.promise();
            };
            return DefaultActivityDropHandler;
        })(Automation.AbstractActivityDropHandler);
        Automation.DefaultActivityDropHandler = DefaultActivityDropHandler;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="IActivityFocusHandler.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
// -----------------------------------------------------------------------
// <copyright file="DefaultActivityFocusHandler.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="./IActivityFocusHandler.ts"/>
    (function (Automation) {
        /** Default handler for focus on activity */
        var DefaultActivityFocusHandler = (function () {
            function DefaultActivityFocusHandler(currentActivity) {
                this.currentActivity = currentActivity;
            }
            /** Handles aon on focus on activity.
            @param elementFocused: The element that focus should be performed on.
            @return: promise.
            */
            DefaultActivityFocusHandler.prototype.focus = function (elementFocused) {
                elementFocused.addClass(Automation.CssClass.HoverOverDroppable);
            };
            return DefaultActivityFocusHandler;
        })();
        Automation.DefaultActivityFocusHandler = DefaultActivityFocusHandler;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="DefaultActivityBlurHandler.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    (function (Automation) {
        /** Default handler for blur on activity */
        var DefaultActivityBlurHandler = (function () {
            function DefaultActivityBlurHandler(currentActivity) {
                this.currentActivity = currentActivity;
            }
            /** Handles aon on blur on activity.
            @param elementBlurred: The element that blur should be performed on.
            @return: promise.
            */
            DefaultActivityBlurHandler.prototype.blur = function (elementBlurred) {
                elementBlurred.removeClass(Automation.CssClass.HoverOverDroppable);
            };
            return DefaultActivityBlurHandler;
        })();
        Automation.DefaultActivityBlurHandler = DefaultActivityBlurHandler;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="DefaultActivityKeyDownHandler.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    (function (Automation) {
        /** Default handler for key down on activity */
        var DefaultActivityKeyDownHandler = (function () {
            function DefaultActivityKeyDownHandler(currentActivity) {
                this.currentActivity = currentActivity;
            }
            /** Handles a key down on activity.
            @param element: The element that key down should be performed on.
            @return: promise.
            */
            DefaultActivityKeyDownHandler.prototype.keydown = function (element, event) {
            };
            return DefaultActivityKeyDownHandler;
        })();
        Automation.DefaultActivityKeyDownHandler = DefaultActivityKeyDownHandler;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="InsertSlotVerticalMultiDropHandler.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    ///<reference path="..\..\..\AutomationControl.ts" />
    ///<reference path="..\..\..\Model\SlotModel.ts" />
    ///<reference path="..\..\..\Common\ConnectedComponent.ts" />
    (function (Automation) {
        /** Empty multiple components drop handler.*/
        var EmptyMultiDropHandler = (function () {
            function EmptyMultiDropHandler(slot) {
                this.slot = slot;
            }
            /** Drop multiple activity components.
            @param activityComponents: The array of activity components.
            @return: A promise with the created activity as parameter.
            */
            EmptyMultiDropHandler.prototype.drop = function (activityComponents) {
                var promise = null;

                var emptyDropHandler = new Automation.EmptyActivityDropHandler(this.slot.getActivity());
                var firstComponent = activityComponents[0];
                var insertHorizontalDropHandler = new Automation.DefaultInsertSlotVerticalDropHandler(firstComponent.getRoot());

                var count = activityComponents.length;
                var preparedComponents = [firstComponent].concat(activityComponents.slice(1, count).reverse());
                $.each(preparedComponents, function (index, component) {
                    if (promise == null) {
                        promise = emptyDropHandler.drop(component);
                    } else {
                        promise = promise.then(function () {
                            return insertHorizontalDropHandler.drop(component);
                        });
                    }
                });

                return promise;
            };
            return EmptyMultiDropHandler;
        })();
        Automation.EmptyMultiDropHandler = EmptyMultiDropHandler;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="DefaultActivityDropHandler.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    ///<reference path="..\..\..\AutomationControl.ts" />
    ///<reference path="..\..\..\Model\SlotModel.ts" />
    ///<reference path="..\..\..\Common\ConnectedComponent.ts" />
    (function (Automation) {
        var DefaultActivityMultiDropHandler = (function () {
            function DefaultActivityMultiDropHandler(slot) {
                this.slot = slot;
            }
            /** Drop multiple activity components.
            @param activityComponents: The array of activity components.
            @return: A promise with the created activity as parameter.
            */
            DefaultActivityMultiDropHandler.prototype.drop = function (activityComponents) {
                var promise = null;
                var dropHandler = Automation.CurrentAutomationControl.settings.getSlotHandlerProvider().createDropHandler(this.slot);
                $.each(activityComponents, function (index, component) {
                    if (promise == null) {
                        promise = dropHandler.drop(component);
                    } else {
                        promise = promise.then(function () {
                            return dropHandler.drop(component);
                        });
                    }
                });
                return promise;
            };
            return DefaultActivityMultiDropHandler;
        })();
        Automation.DefaultActivityMultiDropHandler = DefaultActivityMultiDropHandler;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="DefaultActivityDropHandler.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    ///<reference path="..\..\..\Common\Automation.d.ts" />
    ///<reference path="..\..\..\Model\SlotModel.ts" />
    ///<reference path="..\..\..\Common\Common.ts" />
    ///<reference path="..\..\..\Common\ConnectedComponent.ts" />
    ///<reference path="EmptyMultiDropHandler.ts"/>
    ///<reference path="DefaultActivityMultiDropHandler.ts"/>
    (function (Automation) {
        var TileHolderMultiDropHandler = (function () {
            function TileHolderMultiDropHandler(slot) {
                this.slot = slot;
            }
            TileHolderMultiDropHandler.prototype.getTileHoldeMultiDropHandler = function () {
                switch (this.slot.getActivity().getActivityTypeId()) {
                    case Automation.ActivityType.Empty:
                        return new Automation.EmptyMultiDropHandler(this.slot);
                    default:
                        return new Automation.DefaultActivityMultiDropHandler(this.slot);
                }
            };

            /** Drop multiple activity components.
            @param activityComponents: The array of activity components.
            @return: A promise with the created activity as parameter.
            */
            TileHolderMultiDropHandler.prototype.drop = function (activityComponents) {
                var multiDropHandler = this.getTileHoldeMultiDropHandler();
                return multiDropHandler.drop(activityComponents);
            };
            return TileHolderMultiDropHandler;
        })();
        Automation.TileHolderMultiDropHandler = TileHolderMultiDropHandler;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="DefaultSlotTileHolderHandlerFactory.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="./Handlers/ContextHandlers/DefaultContextFlyoutHandler.ts"/>
    /// <reference path="./Handlers/ClickHandlers/DefaultActivityClickHandler.ts"/>
    /// <reference path="./Handlers/DblClickHandlers/DefaultActivityDblClickHandler.ts"/>
    /// <reference path="./Handlers/DblClickHandlers/EmptyActivityDblClickHandler.ts"/>
    /// <reference path="./Handlers/DropHandlers/DefaultInsertSlotVerticalDropHandler.ts"/>
    /// <reference path="./Handlers/DropHandlers/EmptyActivityDropHandler.ts"/>
    /// <reference path="./Handlers/DropHandlers/DefaultActivityDropHandler.ts"/>
    /// <reference path="./Handlers/FocusHandlers/DefaultActivityFocusHandler.ts"/>
    /// <reference path="./Handlers/FocusHandlers/DefaultActivityBlurHandler.ts"/>
    /// <reference path="./Handlers/KeyHandlers/DefaultActivityKeyDownHandler.ts"/>
    /// <reference path="./Handlers/MultiDropHandlers/TileHolderMultiDropHandler.ts"/>
    /// <reference path="../Common/Common.ts" />
    (function (Automation) {
        var DefaultSlotTileHolderHandlerFactory = (function () {
            function DefaultSlotTileHolderHandlerFactory() {
                if (DefaultSlotTileHolderHandlerFactory.instance) {
                    throw new Error("Error: Instantiantion failed: Use DefaultSlotTileHolderHandlerFactory.getInstance()");
                }
            }
            /** Get the instance of the handler factory
            @return: the instance of the handler factory.
            */
            DefaultSlotTileHolderHandlerFactory.getInstance = function () {
                if (DefaultSlotTileHolderHandlerFactory.instance == null) {
                    DefaultSlotTileHolderHandlerFactory.instance = new DefaultSlotTileHolderHandlerFactory();
                }
                return DefaultSlotTileHolderHandlerFactory.instance;
            };

            /**
            Creates a drop handler of the given activity.
            @param currentActivity: The activity.
            @return: An activity drop handler.
            */
            DefaultSlotTileHolderHandlerFactory.prototype.createDropHandler = function (currentActivity) {
                switch (currentActivity.getActivityTypeId()) {
                    case Automation.ActivityType.Empty:
                        return new Automation.EmptyActivityDropHandler(currentActivity);
                    default:
                        return new Automation.DefaultActivityDropHandler(currentActivity);
                }
            };

            /**Creates a drop handler of the given slot.
            * @param slot: The Slot.
            * @return: An drop handler.
            */
            DefaultSlotTileHolderHandlerFactory.prototype.createMultipleDropHandler = function (slot) {
                return new Automation.TileHolderMultiDropHandler(slot);
            };

            /**
            Creates a click handler of the given activity.
            @param currentActivity: The activity.
            @return: An activity click handler.
            */
            DefaultSlotTileHolderHandlerFactory.prototype.createClickHandler = function (currentActivity) {
                return new Automation.DefaultActivityClickHandler(currentActivity);
            };

            /**
            Creates a double click handler of the given activity.
            @param currentActivity: The activity.
            @return: An activity double click handler.
            */
            DefaultSlotTileHolderHandlerFactory.prototype.createDblClickHandler = function (currentActivity) {
                switch (currentActivity.getActivityTypeId()) {
                    case Automation.ActivityType.Empty:
                        return new Automation.EmptyActivityDblClickHandler(currentActivity);
                    default:
                        return new Automation.DefaultActivityDblClickHandler(currentActivity);
                }
            };

            /**
            Creates a key down handler of the given activity.
            @param currentActivity: The activity.
            @return: An activity key down handler.
            */
            DefaultSlotTileHolderHandlerFactory.prototype.createKeyDownHandler = function (currentActivity) {
                return new Automation.DefaultActivityKeyDownHandler(currentActivity);
            };

            /**
            Creates an on focus handler of the given activity.
            @param currentActivity: The activity.
            @return: An activity on focus handler.
            */
            DefaultSlotTileHolderHandlerFactory.prototype.createFocusHandler = function (currentActivity) {
                return new Automation.DefaultActivityFocusHandler(currentActivity);
            };

            /**
            Creates an on blur handler of the given activity.
            @param currentActivity: The activity.
            @return: An activity on blur handler.
            */
            DefaultSlotTileHolderHandlerFactory.prototype.createBlurHandler = function (currentActivity) {
                return new Automation.DefaultActivityBlurHandler(currentActivity);
            };

            /**
            Creates a context handler of the given activity.
            @param currentActivity: The activity.
            @return: An activity click handler.
            */
            DefaultSlotTileHolderHandlerFactory.prototype.createContextHandler = function (currentActivity) {
                if (currentActivity.getReadonlyMode()) {
                    return null;
                }

                switch (currentActivity.getActivityTypeId()) {
                    case Automation.ActivityType.Empty:
                        return null;
                    default:
                        return new Automation.DefaultContextFlyoutHandler(currentActivity);
                }
            };
            DefaultSlotTileHolderHandlerFactory.instance = null;
            return DefaultSlotTileHolderHandlerFactory;
        })();
        Automation.DefaultSlotTileHolderHandlerFactory = DefaultSlotTileHolderHandlerFactory;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="DefaultInsertSlotHorizontalDropHandler.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    ///<reference path="..\..\..\AutomationControl.ts" />
    ///<reference path="AbstractActivityDropHandler.ts" />
    ///<reference path="..\..\..\Common\ConnectedComponent.ts" />
    ///<reference path="DropValidator\DefaultDropValidator.ts" />
    (function (Automation) {
        var DefaultInsertSlotHorizontalDropHandler = (function (_super) {
            __extends(DefaultInsertSlotHorizontalDropHandler, _super);
            function DefaultInsertSlotHorizontalDropHandler() {
                _super.apply(this, arguments);
            }
            /** Drop an activity component.
            @param droppedActivitiesComponent: The activity that is dropped.
            @return: A promise with the created activity as parameter.
            */
            DefaultInsertSlotHorizontalDropHandler.prototype.drop = function (droppedActivitiesComponent) {
                var self = this;
                var deferred = $.Deferred();

                if (!this.dropAllowed(droppedActivitiesComponent)) {
                    deferred.resolve();
                    return deferred.promise();
                }

                Automation.CurrentAutomationControl.activityTree.cutConnectedComponent(droppedActivitiesComponent).done(function () {
                    Automation.CurrentAutomationControl.activityTree.insertActivityComponentBefore(self.currentActivity, droppedActivitiesComponent).done(function (insertedActivity) {
                        insertedActivity.saveActivityWithSubsequentActivities().done(function (activity) {
                            deferred.resolveWith(activity, [activity]);
                        });
                    });
                });

                return deferred.promise();
            };

            /** Returns true if drop is allowed for the given activity component, false otherwise
            *@param droppedActivitiesComponent - activity that is dropped.
            */
            DefaultInsertSlotHorizontalDropHandler.prototype.dropAllowed = function (droppedActivitiesComponent) {
                // Don't allow activity to be dropped on its own insert slot
                // Don't allow activity to be dropped on insertions slot inside component.
                if (droppedActivitiesComponent.getRoot().getActivityId() == this.currentActivity.getActivityId() || $.inArray(this.currentActivity, droppedActivitiesComponent.getNodes()) > -1) {
                    return false;
                }

                var validator = Automation.CurrentAutomationControl.settings.getDropValidator();
                validator.initialize();
                validator.currentActivity = this.currentActivity.getParent();
                return validator.isDropValid(droppedActivitiesComponent);
            };
            return DefaultInsertSlotHorizontalDropHandler;
        })(Automation.AbstractActivityDropHandler);
        Automation.DefaultInsertSlotHorizontalDropHandler = DefaultInsertSlotHorizontalDropHandler;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="InsertSlotHorizontalMultiDropHandler.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    ///<reference path="..\..\..\AutomationControl.ts" />
    ///<reference path="..\..\..\Model\SlotModel.ts" />
    ///<reference path="..\..\..\Common\ConnectedComponent.ts" />
    (function (Automation) {
        var InsertSlotHorizontalMultiDropHandler = (function () {
            function InsertSlotHorizontalMultiDropHandler(slot) {
                this.slot = slot;
            }
            /** Drop multiple activity components.
            @param activityComponents: The array of activity components.
            @return: A promise with the created activity as parameter.
            */
            InsertSlotHorizontalMultiDropHandler.prototype.drop = function (activityComponents) {
                var promise = null;
                var currentActivity = this.slot.getActivity();

                var insertSlotHorizontalDropHandler = Automation.CurrentAutomationControl.settings.getSlotHandlerProvider().createDropHandler(this.slot);
                var defaultActivityDropHandler = Automation.CurrentAutomationControl.settings.getSlotHandlerProvider().createFactory(Automation.SlotType.TileHolder).createDropHandler(currentActivity.getParent());

                $.each(activityComponents, function (index, component) {
                    if (promise == null) {
                        promise = insertSlotHorizontalDropHandler.drop(component);
                    } else {
                        promise = promise.then(function () {
                            return defaultActivityDropHandler.drop(component);
                        });
                    }
                });
                return promise;
            };
            return InsertSlotHorizontalMultiDropHandler;
        })();
        Automation.InsertSlotHorizontalMultiDropHandler = InsertSlotHorizontalMultiDropHandler;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="DefaultSlotInsertHorizontalHandlerFactoryMP.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="./Handlers/DropHandlers/DefaultInsertSlotHorizontalDropHandler.ts"/>
    /// <reference path="./Handlers/MultiDropHandlers/InsertSlotHorizontalMultiDropHandler.ts"/>
    (function (Automation) {
        var DefaultSlotInsertHorizontalHandlerFactory = (function () {
            function DefaultSlotInsertHorizontalHandlerFactory() {
                if (DefaultSlotInsertHorizontalHandlerFactory.instance) {
                    throw new Error("Error: Instantiantion failed: Use DefaultSlotInsertHorizontalHandlerFactory.getInstance()");
                }
            }
            /** Get the instance of the handler factory
            @return: the instance of the handler factory.
            */
            DefaultSlotInsertHorizontalHandlerFactory.getInstance = function () {
                if (DefaultSlotInsertHorizontalHandlerFactory.instance == null) {
                    DefaultSlotInsertHorizontalHandlerFactory.instance = new DefaultSlotInsertHorizontalHandlerFactory();
                }
                return DefaultSlotInsertHorizontalHandlerFactory.instance;
            };

            /**Creates a drop handler of the given slot.
            * @param slot: The Slot.
            * @return: An drop handler.
            */
            DefaultSlotInsertHorizontalHandlerFactory.prototype.createMultipleDropHandler = function (slot) {
                return new Automation.InsertSlotHorizontalMultiDropHandler(slot);
            };

            /**Creates a drop handler of the given activity.
            * @param currentActivity: The activity.
            * @return: An activity drop handler.
            */
            DefaultSlotInsertHorizontalHandlerFactory.prototype.createDropHandler = function (currentActivity) {
                switch (currentActivity.getActivityTypeId()) {
                    default:
                        return new Automation.DefaultInsertSlotHorizontalDropHandler(currentActivity);
                }
            };

            /** Creates an activity handler for clicking on activity elements.
            * @param {currentActivity} : The activity on which click should be performed.
            * @return: An activity click handler.
            */
            DefaultSlotInsertHorizontalHandlerFactory.prototype.createClickHandler = function (currentActivity) {
                return null;
            };

            /** Creates an activity handler for double clicking on activity elements.
            * @param {currentActivity} : The activity on which double click should be performed.
            * @return: An activity double click handler.
            */
            DefaultSlotInsertHorizontalHandlerFactory.prototype.createDblClickHandler = function (currentActivity) {
                throw new Error("Operation not implemented");
            };

            /** Creates an activity handler for key down events on activity elements.
            * @param {currentActivity} : The activity on which key down should be performed.
            * @return: An activity key down handler.
            */
            DefaultSlotInsertHorizontalHandlerFactory.prototype.createKeyDownHandler = function (currentActivity) {
                return null;
            };

            /** Creates an activity handler for on focus events on activity elements.
            * @param {currentActivity} : The activity on which focus should be performed.
            * @return: An activity on focus handler.
            */
            DefaultSlotInsertHorizontalHandlerFactory.prototype.createFocusHandler = function (currentActivity) {
                return null;
            };

            /** Creates an activity handler for on blur events on activity elements.
            * @param {currentActivity} : The activity on which blur should be performed.
            * @return: An activity on blur handler.
            */
            DefaultSlotInsertHorizontalHandlerFactory.prototype.createBlurHandler = function (currentActivity) {
                return null;
            };

            /**
            Creates a context handler of the given activity.
            @param currentActivity: The activity.
            @return: An activity click handler.
            */
            DefaultSlotInsertHorizontalHandlerFactory.prototype.createContextHandler = function (currentActivity) {
                return null;
            };
            DefaultSlotInsertHorizontalHandlerFactory.instance = null;
            return DefaultSlotInsertHorizontalHandlerFactory;
        })();
        Automation.DefaultSlotInsertHorizontalHandlerFactory = DefaultSlotInsertHorizontalHandlerFactory;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="DefaultSlotInsertHorizontalHandlerFactoryMP.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="./Handlers/DropHandlers/DefaultInsertSlotVerticalDropHandler.ts"/>
    /// <reference path="./Handlers/MultiDropHandlers/InsertSlotHorizontalMultiDropHandler.ts"/>
    (function (Automation) {
        var DefaultSlotInsertVerticalHandlerFactory = (function () {
            function DefaultSlotInsertVerticalHandlerFactory() {
                if (DefaultSlotInsertVerticalHandlerFactory.instance) {
                    throw new Error("Error: Instantiantion failed: Use DefaultSlotInsertVerticalHandlerFactory.getInstance()");
                }
            }
            /** Get the instance of the handler factory
            @return: the instance of the handler factory.
            */
            DefaultSlotInsertVerticalHandlerFactory.getInstance = function () {
                if (DefaultSlotInsertVerticalHandlerFactory.instance == null) {
                    DefaultSlotInsertVerticalHandlerFactory.instance = new DefaultSlotInsertVerticalHandlerFactory();
                }
                return DefaultSlotInsertVerticalHandlerFactory.instance;
            };

            /**Creates a drop handler of the given activity.
            * @param currentActivity: The activity.
            * @return: An activity drop handler.
            */
            DefaultSlotInsertVerticalHandlerFactory.prototype.createDropHandler = function (currentActivity) {
                switch (currentActivity.getActivityTypeId()) {
                    default:
                        return new Automation.DefaultInsertSlotVerticalDropHandler(currentActivity);
                }
            };

            /**Creates a drop handler of the given slot.
            * @param slot: The Slot.
            * @return: An drop handler.
            */
            DefaultSlotInsertVerticalHandlerFactory.prototype.createMultipleDropHandler = function (slot) {
                return new Automation.InsertSlotHorizontalMultiDropHandler(slot);
            };

            /** Creates an activity handler for clicking on activity elements.
            * @param {currentActivity} : The activity on which click should be performed.
            * @return: An activity click handler.
            */
            DefaultSlotInsertVerticalHandlerFactory.prototype.createClickHandler = function (currentActivity) {
                return null;
            };

            /** Creates an activity handler for double clicking on activity elements.
            * @param {currentActivity} : The activity on which double click should be performed.
            * @return: An activity double click handler.
            */
            DefaultSlotInsertVerticalHandlerFactory.prototype.createDblClickHandler = function (currentActivity) {
                throw new Error("Operation not implemented");
            };

            /** Creates an activity handler for key down on activity elements.
            * @param {currentActivity} : The activity on which key down should be performed.
            * @return: An activity key down handler.
            */
            DefaultSlotInsertVerticalHandlerFactory.prototype.createKeyDownHandler = function (currentActivity) {
                return null;
            };

            /** Creates an activity handler for on focus events on activity elements.
            * @param {currentActivity} : The activity on which focus should be performed.
            * @return: An activity on focus handler.
            */
            DefaultSlotInsertVerticalHandlerFactory.prototype.createFocusHandler = function (currentActivity) {
                return null;
            };

            /** Creates an activity handler for on blur events on activity elements.
            * @param {currentActivity} : The activity on which blur should be performed.
            * @return: An activity on blur handler.
            */
            DefaultSlotInsertVerticalHandlerFactory.prototype.createBlurHandler = function (currentActivity) {
                return null;
            };

            /**
            Creates a context handler of the given activity.
            @param currentActivity: The activity.
            @return: An activity click handler.
            */
            DefaultSlotInsertVerticalHandlerFactory.prototype.createContextHandler = function (currentActivity) {
                return null;
            };
            DefaultSlotInsertVerticalHandlerFactory.instance = null;
            return DefaultSlotInsertVerticalHandlerFactory;
        })();
        Automation.DefaultSlotInsertVerticalHandlerFactory = DefaultSlotInsertVerticalHandlerFactory;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="DefaultSlotIconHolderHandler.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    ///<reference path="AbstractActivityDropHandler.ts" />
    (function (Automation) {
        var DefaultSlotIconHolderHandler = (function (_super) {
            __extends(DefaultSlotIconHolderHandler, _super);
            function DefaultSlotIconHolderHandler() {
                _super.apply(this, arguments);
            }
            DefaultSlotIconHolderHandler.prototype.drop = function (droppedActivityType) {
                var deferred = $.Deferred();
                deferred.resolve();
                return deferred.promise();
            };
            return DefaultSlotIconHolderHandler;
        })(Automation.AbstractActivityDropHandler);
        Automation.DefaultSlotIconHolderHandler = DefaultSlotIconHolderHandler;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="DefaultSlotIconHolderHandlerFactory.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="./Handlers/DropHandlers/DefaultSlotIconHolderHandler.ts"/>
    /// <reference path="./Handlers/MultiDropHandlers/DefaultActivityMultiDropHandler.ts"/>
    (function (Automation) {
        var DefaultSlotIconHolderHandlerFactory = (function () {
            function DefaultSlotIconHolderHandlerFactory() {
                if (DefaultSlotIconHolderHandlerFactory.instance) {
                    throw new Error("Error: Instantiantion failed: Use DefaultSlotIconHolderHandlerFactory.getInstance()");
                }
            }
            /** Get the instance of the handler factory
            @return: the instance of the handler factory.
            */
            DefaultSlotIconHolderHandlerFactory.getInstance = function () {
                if (DefaultSlotIconHolderHandlerFactory.instance == null) {
                    DefaultSlotIconHolderHandlerFactory.instance = new DefaultSlotIconHolderHandlerFactory();
                }
                return DefaultSlotIconHolderHandlerFactory.instance;
            };

            /**Creates a drop handler of the given slot.
            * @param slot: The Slot.
            * @return: An drop handler.
            */
            DefaultSlotIconHolderHandlerFactory.prototype.createMultipleDropHandler = function (slot) {
                return new Automation.DefaultActivityMultiDropHandler(slot);
            };

            /**Creates a drop handler of the given activity.
            * @param currentActivity: The activity.
            * @return: An activity drop handler.
            */
            DefaultSlotIconHolderHandlerFactory.prototype.createDropHandler = function (currentActivity) {
                switch (currentActivity.getActivityTypeId()) {
                    default:
                        return new Automation.DefaultSlotIconHolderHandler(currentActivity);
                }
            };

            /** Creates an activity handler for clicking on activity elements.
            * @param {currentActivity} : The activity on which click should be performed.
            * @return: An activity click handler.
            */
            DefaultSlotIconHolderHandlerFactory.prototype.createClickHandler = function (currentActivity) {
                return null;
            };

            /** Creates an activity handler for double clicking on activity elements.
            * @param {currentActivity} : The activity on which double click should be performed.
            * @return: An activity double click handler.
            */
            DefaultSlotIconHolderHandlerFactory.prototype.createDblClickHandler = function (currentActivity) {
                throw new Error("Operation not implemented");
            };

            /** Creates an activity handler for key down events on activity elements.
            * @param {currentActivity} : The activity on which key down should be performed.
            * @return: An activity key down handler.
            */
            DefaultSlotIconHolderHandlerFactory.prototype.createKeyDownHandler = function (currentActivity) {
                return null;
            };

            /** Creates an activity handler for on focus events on activity elements.
            * @param {currentActivity} : The activity on which focus should be performed.
            * @return: An activity on focus handler.
            */
            DefaultSlotIconHolderHandlerFactory.prototype.createFocusHandler = function (currentActivity) {
                return null;
            };

            /** Creates an activity handler for on blur events on activity elements.
            * @param {currentActivity} : The activity on which blur should be performed.
            * @return: An activity on blur handler.
            */
            DefaultSlotIconHolderHandlerFactory.prototype.createBlurHandler = function (currentActivity) {
                return null;
            };

            /**
            Creates a context handler of the given activity.
            @param currentActivity: The activity.
            @return: An activity click handler.
            */
            DefaultSlotIconHolderHandlerFactory.prototype.createContextHandler = function (currentActivity) {
                return null;
            };
            DefaultSlotIconHolderHandlerFactory.instance = null;
            return DefaultSlotIconHolderHandlerFactory;
        })();
        Automation.DefaultSlotIconHolderHandlerFactory = DefaultSlotIconHolderHandlerFactory;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="SlotHandlerFactoryProvider.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="../AutomationControl.ts" />
    /// <reference path="../Model/SlotModel.ts" />
    /// <reference path="./DefaultSlotTileHolderHandlerFactory.ts"/>
    /// <reference path="./DefaultSlotInsertHorizontalHandlerFactory.ts"/>
    /// <reference path="./DefaultSlotInsertVerticalHandlerFactory.ts"/>
    /// <reference path="./DefaultSlotIconHolderHandlerFactory.ts"/>
    (function (Automation) {
        var DefaultSlotHandlerProvider = (function () {
            function DefaultSlotHandlerProvider() {
            }
            DefaultSlotHandlerProvider.prototype.createFactory = function (slotType) {
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
                        throw Error("Slot type not supported.");
                }
            };

            DefaultSlotHandlerProvider.prototype.createDropHandler = function (slotModel) {
                var slotHandlerFactory = this.createFactory(slotModel.getSlotType());
                return slotHandlerFactory.createDropHandler(slotModel.getActivity());
            };

            DefaultSlotHandlerProvider.prototype.createMultipleDropHandler = function (slotModel) {
                var slotHandlerFactory = this.createFactory(slotModel.getSlotType());
                return slotHandlerFactory.createMultipleDropHandler(slotModel);
            };

            DefaultSlotHandlerProvider.prototype.createClickHandler = function (slotModel) {
                var slotHandlerFactory = this.createFactory(slotModel.getSlotType());
                return slotHandlerFactory.createClickHandler(slotModel.getActivity());
            };

            DefaultSlotHandlerProvider.prototype.createDblClickHandler = function (slotModel) {
                var slotHandlerFactory = this.createFactory(slotModel.getSlotType());
                return slotHandlerFactory.createDblClickHandler(slotModel.getActivity());
            };

            DefaultSlotHandlerProvider.prototype.createKeyDownHandler = function (slotModel) {
                var slotHandlerFactory = this.createFactory(slotModel.getSlotType());
                return slotHandlerFactory.createKeyDownHandler(slotModel.getActivity());
            };

            DefaultSlotHandlerProvider.prototype.createFocusHandler = function (slotModel) {
                var slotHandlerFactory = this.createFactory(slotModel.getSlotType());
                return slotHandlerFactory.createFocusHandler(slotModel.getActivity());
            };

            DefaultSlotHandlerProvider.prototype.createBlurHandler = function (slotModel) {
                var slotHandlerFactory = this.createFactory(slotModel.getSlotType());
                return slotHandlerFactory.createBlurHandler(slotModel.getActivity());
            };

            DefaultSlotHandlerProvider.prototype.createContextHandler = function (slotModel) {
                var slotHandlerFactory = this.createFactory(slotModel.getSlotType());
                return slotHandlerFactory.createContextHandler(slotModel.getActivity());
            };
            return DefaultSlotHandlerProvider;
        })();
        Automation.DefaultSlotHandlerProvider = DefaultSlotHandlerProvider;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="DefaultPropertyPanelViewKeyDownHandler.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="./IActivityKeyDownHandler.ts"/>
    (function (Automation) {
        /** Default handler for key down on activity */
        var DefaultPropertyPanelViewKeyDownHandler = (function () {
            function DefaultPropertyPanelViewKeyDownHandler(currentActivity) {
                this.currentActivity = currentActivity;
            }
            /** Handles a key down on activity.
            @param element: The element that key down should be performed on.
            @return: promise.
            */
            DefaultPropertyPanelViewKeyDownHandler.prototype.keyDown = function (element, event) {
            };
            return DefaultPropertyPanelViewKeyDownHandler;
        })();
        Automation.DefaultPropertyPanelViewKeyDownHandler = DefaultPropertyPanelViewKeyDownHandler;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="PropertyPanelViewHandlerProvider.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="./Handlers/KeyHandlers/DefaultPropertyPanelViewKeyDownHandler.ts"/>
    /// <reference path="../Common/Common.ts" />
    (function (Automation) {
        var DefaultPropertyPanelActionHandlerProvider = (function () {
            function DefaultPropertyPanelActionHandlerProvider() {
                if (DefaultPropertyPanelActionHandlerProvider.instance) {
                    throw new Error("Error: Instantiantion failed: Use PropertyPanelViewHandlerFactory.getInstance()");
                }
            }
            /** Get the instance of the handler factory
            @return: the instance of the handler factory.
            */
            DefaultPropertyPanelActionHandlerProvider.getInstance = function () {
                if (DefaultPropertyPanelActionHandlerProvider.instance == null) {
                    DefaultPropertyPanelActionHandlerProvider.instance = new DefaultPropertyPanelActionHandlerProvider();
                }
                return DefaultPropertyPanelActionHandlerProvider.instance;
            };

            /**
            Creates a key down handler of the given activity.
            @param currentActivity: The activity.
            @return: An activity key down handler.
            */
            DefaultPropertyPanelActionHandlerProvider.prototype.createKeyDownHandler = function (currentActivity) {
                return new Automation.DefaultPropertyPanelViewKeyDownHandler(currentActivity);
            };
            DefaultPropertyPanelActionHandlerProvider.instance = null;
            return DefaultPropertyPanelActionHandlerProvider;
        })();
        Automation.DefaultPropertyPanelActionHandlerProvider = DefaultPropertyPanelActionHandlerProvider;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="AbstractSlotGenerator.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="../../../Common/Automation.d.ts" />
    (function (Automation) {
        /** Abstract slot generator. */
        var AbstractSlotGenerator = (function () {
            function AbstractSlotGenerator(activity) {
                this.activity = activity;
            }
            /** Generates slot.
            @return: A slot view.
            */
            AbstractSlotGenerator.prototype.generateSlot = function () {
                throw new Error('method is abstract');
            };
            return AbstractSlotGenerator;
        })();
        Automation.AbstractSlotGenerator = AbstractSlotGenerator;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="DefaultSlotTileHolderGenerator.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="../../../../Common/Common.ts" />
    /// <reference path="../AbstractSlotGenerator.ts" />
    /// <reference path="../../../SlotTileHolderView.ts" />
    (function (Automation) {
        /** Default slot tile holder generator. */
        var DefaultSlotTileHolderGenerator = (function (_super) {
            __extends(DefaultSlotTileHolderGenerator, _super);
            function DefaultSlotTileHolderGenerator() {
                _super.apply(this, arguments);
            }
            /** Generates slot.
            @return: A slot tile holder view.
            */
            DefaultSlotTileHolderGenerator.prototype.generateSlot = function () {
                var slotView = new Automation.SlotTileHolderView();
                slotView.model = new Automation.SlotModel(this.activity);
                slotView.initializeSlot();
                return slotView;
            };
            return DefaultSlotTileHolderGenerator;
        })(Automation.AbstractSlotGenerator);
        Automation.DefaultSlotTileHolderGenerator = DefaultSlotTileHolderGenerator;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="SlotTileHolderGenerator.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="./SlotTileHolder/DefaultSlotTileHolderGenerator.ts"/>
    (function (Automation) {
        /** Slot tile holder generator factory. */
        var SlotTileHolderGeneratorFactory = (function () {
            function SlotTileHolderGeneratorFactory() {
            }
            /** Creates a slot tile holder generator.
            @param activity: The activity.
            @return: The slot generator.
            */
            SlotTileHolderGeneratorFactory.prototype.createSlotGenerator = function (activity) {
                switch (activity.getActivityTypeId()) {
                    default:
                        return new Automation.DefaultSlotTileHolderGenerator(activity);
                }
            };
            return SlotTileHolderGeneratorFactory;
        })();
        Automation.SlotTileHolderGeneratorFactory = SlotTileHolderGeneratorFactory;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="InsertSlotHorizontalView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="../Common/Common.ts" />
    /// <reference path="../Common/PositionCalculator.ts" />
    /// <reference path="../Imported/Backbone.d.ts" />
    /// <reference path="../AutomationControl.ts" />
    /// <reference path="./SlotBase.ts" />
    (function (Automation) {
        /** Slot View is the box rendered on the workspace where we can drop items.*/
        var InsertSlotHorizontalView = (function (_super) {
            __extends(InsertSlotHorizontalView, _super);
            function InsertSlotHorizontalView() {
                _super.apply(this, arguments);
            }
            /** Renders the slot */
            InsertSlotHorizontalView.prototype.render = function () {
                this.$el.addClass(InsertSlotHorizontalView.className);

                var layoutProperties = Automation.CurrentAutomationControl.settings.getLayoutProperties();
                var positionCalculator = new Automation.PositionCalculator(layoutProperties);

                var width = layoutProperties.getWidth();
                var height = layoutProperties.getHeight();

                var top = positionCalculator.computeTop(this.model.getActivity().getRow());
                var left = positionCalculator.computeLeft(this.model.getActivity().getCol() - 1) + width + layoutProperties.getInsertSlotHorizontalOffset();

                this.$el.css("top", top + "px");
                this.$el.css(Automation.GetLeftAlignmentAttributeName(), left + "px");

                //Fix for IE - the offset writes also a inline position relative on IE which overrides the css style position absolute
                this.$el.css("position", "");
                return this;
            };
            InsertSlotHorizontalView.className = "slotInsertHorizontal";

            InsertSlotHorizontalView.supportedEvents = Automation.SlotBase.supportedEvents;
            return InsertSlotHorizontalView;
        })(Automation.SlotBase);
        Automation.InsertSlotHorizontalView = InsertSlotHorizontalView;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="DefaultSlotInsertHorizontalGenerator.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="../../../../Common/Common.ts" />
    /// <reference path="../AbstractSlotGenerator.ts" />
    /// <reference path="../../../../Views/InsertSlotHorizontalView.ts" />
    (function (Automation) {
        /** Default slot insert horizontal generator.*/
        var DefaultSlotInsertHorizontalGenerator = (function (_super) {
            __extends(DefaultSlotInsertHorizontalGenerator, _super);
            function DefaultSlotInsertHorizontalGenerator() {
                _super.apply(this, arguments);
            }
            /** Generates slot.
            @return: A slot insert horizontal view.
            */
            DefaultSlotInsertHorizontalGenerator.prototype.generateSlot = function () {
                var slotView = new Automation.InsertSlotHorizontalView();
                slotView.model = new Automation.SlotModel(this.activity, Automation.SlotType.InsertHorizontal);
                slotView.initializeSlot();
                return slotView;
            };
            return DefaultSlotInsertHorizontalGenerator;
        })(Automation.AbstractSlotGenerator);
        Automation.DefaultSlotInsertHorizontalGenerator = DefaultSlotInsertHorizontalGenerator;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="EmptySlotInsertHorizontalGenerator.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="../../../../Common/Common.ts" />
    /// <reference path="../AbstractSlotGenerator.ts" />
    (function (Automation) {
        /** Empty slot insert horizontal generator. */
        var EmptySlotInsertHorizontalGenerator = (function (_super) {
            __extends(EmptySlotInsertHorizontalGenerator, _super);
            function EmptySlotInsertHorizontalGenerator() {
                _super.apply(this, arguments);
            }
            /** Generates slot.
            @return: A slot insert horizontal view.
            */
            EmptySlotInsertHorizontalGenerator.prototype.generateSlot = function () {
                return null;
            };
            return EmptySlotInsertHorizontalGenerator;
        })(Automation.AbstractSlotGenerator);
        Automation.EmptySlotInsertHorizontalGenerator = EmptySlotInsertHorizontalGenerator;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="SlotInsertHorizontalGeneratorFactory.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="./SlotInsertHorizontal/DefaultSlotInsertHorizontalGenerator.ts"/>
    /// <reference path="./SlotInsertHorizontal/EmptySlotInsertHorizontalGenerator.ts"/>
    (function (Automation) {
        /** Slot insert horizontal generator factory. */
        var SlotInsertHorizontalGeneratorFactory = (function () {
            function SlotInsertHorizontalGeneratorFactory() {
            }
            /** Creates a slot insert horizontal generator.
            @param activity: The activity.
            @return: The slot generator.
            */
            SlotInsertHorizontalGeneratorFactory.prototype.createSlotGenerator = function (activity) {
                switch (activity.getActivityTypeId()) {
                    case Automation.ActivityType.Empty:
                        return new Automation.EmptySlotInsertHorizontalGenerator(activity);
                    default:
                        return new Automation.DefaultSlotInsertHorizontalGenerator(activity);
                }
            };
            return SlotInsertHorizontalGeneratorFactory;
        })();
        Automation.SlotInsertHorizontalGeneratorFactory = SlotInsertHorizontalGeneratorFactory;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="InsertSlotVerticalView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="../Common/Common.ts" />
    /// <reference path="../Common/PositionCalculator.ts" />
    /// <reference path="../Imported/Backbone.d.ts" />
    /// <reference path="../AutomationControl.ts" />
    /// <reference path="./SlotBase.ts" />
    (function (Automation) {
        /** Slot View is the box rendered on the workspace where we can drop items.*/
        var InsertSlotVerticalView = (function (_super) {
            __extends(InsertSlotVerticalView, _super);
            function InsertSlotVerticalView() {
                _super.apply(this, arguments);
            }
            /** Renders the slot */
            InsertSlotVerticalView.prototype.render = function () {
                this.$el.addClass(InsertSlotVerticalView.className);

                var layoutProperties = Automation.CurrentAutomationControl.settings.getLayoutProperties();
                var positionCalculator = new Automation.PositionCalculator(layoutProperties);

                var width = layoutProperties.getWidth();
                var height = layoutProperties.getHeight();

                var top = positionCalculator.computeTop(this.model.getActivity().getRow()) + height + layoutProperties.getInsertSlotVerticalOffset();
                var left = positionCalculator.computeLeft(this.model.getActivity().getCol());

                this.$el.css("top", top + "px");
                this.$el.css(Automation.GetLeftAlignmentAttributeName(), left + "px");

                //Fix for IE - the offset writes also a inline position relative on IE which overrides the css style position absolute
                this.$el.css("position", "");
                return this;
            };
            InsertSlotVerticalView.className = "slotInsertVertical";

            InsertSlotVerticalView.supportedEvents = Automation.SlotBase.supportedEvents;
            return InsertSlotVerticalView;
        })(Automation.SlotBase);
        Automation.InsertSlotVerticalView = InsertSlotVerticalView;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="DefaultSlotInsertVerticalGenerator.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="../../../../Common/Common.ts" />
    /// <reference path="../AbstractSlotGenerator.ts" />
    /// <reference path="../../../../Views/InsertSlotVerticalView.ts" />
    (function (Automation) {
        /** Default slot insert vertical generator. */
        var DefaultSlotInsertVerticalGenerator = (function (_super) {
            __extends(DefaultSlotInsertVerticalGenerator, _super);
            function DefaultSlotInsertVerticalGenerator() {
                _super.apply(this, arguments);
            }
            /** Generates slot.
            @return: A slot insert vertical view.
            */
            DefaultSlotInsertVerticalGenerator.prototype.generateSlot = function () {
                var slotView = new Automation.InsertSlotVerticalView();
                slotView.model = new Automation.SlotModel(this.activity, Automation.SlotType.InsertVertical);
                slotView.initializeSlot();
                return slotView;
            };
            return DefaultSlotInsertVerticalGenerator;
        })(Automation.AbstractSlotGenerator);
        Automation.DefaultSlotInsertVerticalGenerator = DefaultSlotInsertVerticalGenerator;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="EmptySlotInsertVerticalGenerator.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="../../../../Common/Common.ts" />
    /// <reference path="../AbstractSlotGenerator.ts" />
    (function (Automation) {
        /** Empty slot insert vertical generator. */
        var EmptySlotInsertVerticalGenerator = (function (_super) {
            __extends(EmptySlotInsertVerticalGenerator, _super);
            function EmptySlotInsertVerticalGenerator() {
                _super.apply(this, arguments);
            }
            /** Generates slot.
            @return: A slot insert vertical view.
            */
            EmptySlotInsertVerticalGenerator.prototype.generateSlot = function () {
                return null;
            };
            return EmptySlotInsertVerticalGenerator;
        })(Automation.AbstractSlotGenerator);
        Automation.EmptySlotInsertVerticalGenerator = EmptySlotInsertVerticalGenerator;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="SlotInsertVerticalGeneratorFactory.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="./SlotInsertVertical/DefaultSlotInsertVerticalGenerator.ts"/>
    /// <reference path="./SlotInsertVertical/EmptySlotInsertVerticalGenerator.ts"/>
    (function (Automation) {
        /** Slot insert vertical generator factory. */
        var SlotInsertVerticalGeneratorFactory = (function () {
            function SlotInsertVerticalGeneratorFactory() {
            }
            /** Creates a slot insert vertical generator.
            @param activity: The activity.
            @return: The slot generator.
            */
            SlotInsertVerticalGeneratorFactory.prototype.createSlotGenerator = function (activity) {
                switch (activity.getActivityTypeId()) {
                    case Automation.ActivityType.Empty:
                        return new Automation.EmptySlotInsertVerticalGenerator(activity);
                    default:
                        return new Automation.DefaultSlotInsertVerticalGenerator(activity);
                }
            };
            return SlotInsertVerticalGeneratorFactory;
        })();
        Automation.SlotInsertVerticalGeneratorFactory = SlotInsertVerticalGeneratorFactory;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="SlotIconHolderView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="../Common/Common.ts" />
    /// <reference path="../Common/PositionCalculator.ts" />
    /// <reference path="../Imported/Backbone.d.ts" />
    /// <reference path="../AutomationControl.ts" />
    /// <reference path="./SlotBase.ts" />
    (function (Automation) {
        /**Slot icon holder view.*/
        var SlotIconHolderView = (function (_super) {
            __extends(SlotIconHolderView, _super);
            function SlotIconHolderView() {
                _super.apply(this, arguments);
            }
            /** Renders the slot */
            SlotIconHolderView.prototype.render = function () {
                this.$el.addClass(SlotIconHolderView.className);

                var layoutProperties = Automation.CurrentAutomationControl.settings.getLayoutProperties();
                var positionCalculator = new Automation.PositionCalculator(layoutProperties);

                var width = layoutProperties.getWidth();

                var top = positionCalculator.computeTop(this.model.getActivity().getRow());
                var left = positionCalculator.computeLeft(this.model.getActivity().getCol() - 1) + width;

                this.$el.css("top", top + "px");
                this.$el.css(Automation.GetLeftAlignmentAttributeName(), left + "px");

                //Fix for IE - the offset writes also a inline position relative on IE which overrides the css style position absolute
                this.$el.css("position", "");

                var icon = Automation.CurrentAutomationControl.settings.getIconFactory().createIcon(this.model.getIconType());
                this.$el.append(icon);

                return this;
            };
            SlotIconHolderView.className = "slotIconHolder";

            SlotIconHolderView.supportedEvents = Automation.SlotBase.supportedEvents;
            return SlotIconHolderView;
        })(Automation.SlotBase);
        Automation.SlotIconHolderView = SlotIconHolderView;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="DefaultSlotIconHolderGenerator.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="../../../../Common/Common.ts" />
    /// <reference path="../../../SlotIconHolderView.ts" />
    /// <reference path="../AbstractSlotGenerator.ts" />
    (function (Automation) {
        /** Default slot icon holder generator. */
        var DefaultSlotIconHolderGenerator = (function (_super) {
            __extends(DefaultSlotIconHolderGenerator, _super);
            function DefaultSlotIconHolderGenerator() {
                _super.apply(this, arguments);
            }
            /** Generates slot.
            @return: A slot icon holder view.
            */
            DefaultSlotIconHolderGenerator.prototype.generateSlot = function () {
                return null;
            };
            return DefaultSlotIconHolderGenerator;
        })(Automation.AbstractSlotGenerator);
        Automation.DefaultSlotIconHolderGenerator = DefaultSlotIconHolderGenerator;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="SlotIconHolderGeneratorFactory.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="./SlotIconHolder/DefaultSlotIconHolderGenerator.ts"/>
    (function (Automation) {
        /** Slot icon holder generator factory. */
        var SlotIconHolderGeneratorFactory = (function () {
            function SlotIconHolderGeneratorFactory() {
            }
            /** Creates a slot icon holder generator.
            @param activity: The activity.
            @return: The slot generator.
            */
            SlotIconHolderGeneratorFactory.prototype.createSlotGenerator = function (activity) {
                return new Automation.DefaultSlotIconHolderGenerator(activity);
            };
            return SlotIconHolderGeneratorFactory;
        })();
        Automation.SlotIconHolderGeneratorFactory = SlotIconHolderGeneratorFactory;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="SlotGeneratorProvider.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="../../Common/Common.ts" />
    /// <reference path="../../Common/Automation.d.ts" />
    /// <reference path="./Generators/SlotTileHolderGeneratorFactory.ts"/>
    /// <reference path="./Generators/SlotInsertHorizontalGeneratorFactory.ts"/>
    /// <reference path="./Generators/SlotInsertVerticalGeneratorFactory.ts"/>
    /// <reference path="./Generators/SlotIconHolderGeneratorFactory.ts"/>
    (function (Automation) {
        /** Slot generator factory provider. */
        var DefaultSlotGeneratorProvider = (function () {
            function DefaultSlotGeneratorProvider() {
            }
            /** Create a slot generator factory for the specified slot type.
            * Overriedes the below method to return new Factories
            @param: The slot type.
            @return: The slot generator factory.
            */
            DefaultSlotGeneratorProvider.prototype.createGeneratorFactory = function (slotType) {
                switch (slotType) {
                    case Automation.SlotType.TileHolder:
                        return new Automation.SlotTileHolderGeneratorFactory();
                    case Automation.SlotType.InsertHorizontal:
                        return new Automation.SlotInsertHorizontalGeneratorFactory();
                    case Automation.SlotType.InsertVertical:
                        return new Automation.SlotInsertVerticalGeneratorFactory();
                    case Automation.SlotType.IconHolder:
                        return new Automation.SlotIconHolderGeneratorFactory();
                    default:
                        return new Automation.SlotTileHolderGeneratorFactory();
                }
            };

            /** Generates all slots related to the specified activity.
            @param activity: The activity.
            @return: An array of slots.
            */
            DefaultSlotGeneratorProvider.prototype.generateSlotsForActivity = function (activity) {
                var slotTypes = [Automation.SlotType.TileHolder, Automation.SlotType.InsertHorizontal, Automation.SlotType.InsertVertical, Automation.SlotType.IconHolder];
                var slotsList = [];

                for (var i = 0; i < slotTypes.length; i++) {
                    var slotGeneratorFactory = this.createGeneratorFactory(slotTypes[i]);
                    var slot = slotGeneratorFactory.createSlotGenerator(activity).generateSlot();

                    if (slot != null) {
                        slotsList.push(slot);
                    }
                }

                return slotsList;
            };
            return DefaultSlotGeneratorProvider;
        })();
        Automation.DefaultSlotGeneratorProvider = DefaultSlotGeneratorProvider;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="Settings.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    /// <reference path="./Common/DefaultFlyoutControl.ts" />
    /// <reference path="./Common/Automation.d.ts" />
    /// <reference path="./Common/DefaultActivityPositionCalculatorFactory.ts" />
    /// <reference path="./Common/DefaultLabelPhraseDictionaryCollection.ts" />
    /// <reference path="./Common/DefaultFlyoutContentProvider.ts" />
    /// <reference path="./Common/DefaultLayoutProperties.ts" />
    /// <reference path="./Common/DefaultSubsequentActivityGenerator.ts" />
    /// <reference path="./Common/DefaultStatusMessageResolver.ts" />
    /// <reference path="./Common/DefaultStatusCodeProviderFactory.ts" />
    /// <reference path="./Common/DefaultDecoratorFactory.ts" />
    /// <reference path="./Common/DefaultLineConnectorProviderFactory.ts" />
    /// <reference path="./Common/DefaultConnectorDOMProvider.ts" />
    /// <reference path="./Model/DefaultIconFactory.ts" />
    /// <reference path="./Model/Library/DefaultLibraryNodesFactory.ts" />
    /// <reference path="./Model/TileInformation/DefaultTileInformationFactory.ts" />
    /// <reference path="./Views/AbstractPropertyViewFactory.ts" />
    /// <reference path="./Model/Activities/DefaultActivityDefinitionFactory.ts" />
    /// <reference path="./Slot/DefaultSlotHandlerProvider.ts" />
    /// <reference path="./Slot/Handlers/DropHandlers/DropValidator/DefaultDropValidator.ts" />
    /// <reference path="./Slot/DefaultPropertyPanelActionHandlerProvider.ts" />
    /// <reference path="./Views/Slot/DefaultSlotGeneratorProvider.ts" />
    (function (Automation) {
        /** Contains global settings for the ProcessAutomation module */
        var DefaultSettings = (function () {
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
                this.connectorDOMProvider = null;
            }
            /** Registers the zoom view button. */
            DefaultSettings.prototype.initialize = function () {
                this.layoutProperties = new Automation.DefaultLayoutProperties();
                this.activityDefinitionFactory = new Automation.DefaultActivityDefinitionFactory();
                this.libraryNodesFactory = new Automation.DefaultLibraryNodesFactory();
                this.slotHandlerProvider = new Automation.DefaultSlotHandlerProvider();
                this.propertyPanelViewHandlerProvider = new Automation.DefaultPropertyPanelActionHandlerProvider();
                this.tileItemMenu = new Automation.DefaultFlyoutControl(Automation.CssClass.TileItemsMenu);
                this.slotContextMenu = new Automation.DefaultFlyoutControl(Automation.CssClass.ContextMenu);
                this.propertyViewFactory = new Automation.AbstractPropertyViewFactory();
                this.subsequentActivityGenerator = new Automation.DefaultSubsequentActivityGenerator();
                this.slotGeneratorProvider = new Automation.DefaultSlotGeneratorProvider();
                this.iconFactory = new Automation.DefaultIconFactory();
                this.tileInformationFactory = new Automation.DefaultTileInformationFactory();
                this.statusMessageResolver = new Automation.DefaultStatusMessageResolver();
                this.flyoutContentProvider = new Automation.DefaultFlyoutContentProvider();
                this.activityPositionCalculatorFactory = new Automation.DefaultActivityPositionCalculatorFactory();
                this.labelKeyValuePhraseCollection = new Automation.DefaultLabelPhraseDictionaryCollection();
                this.statusCodeProviderFactory = new Automation.DefaultStatusCodeProviderFactory();
                this.lineConnectorProviderFactory = new Automation.DefaultLineConnectorProviderFactory();
                this.connectorDOMProvider = new Automation.DefaultConnectorDOMProvider();
                this.decoratorFactory = new Automation.DefaultDecoratorFactory();
                this.activityDropController = new Automation.ActivityDropController();
                this.dropValidator = new Automation.DefaultDropValidator();
            };

            /** Specifies the layout properties. */
            DefaultSettings.prototype.getLayoutProperties = function () {
                return this.layoutProperties;
            };

            /** Specifies the activityDefinitionFactory */
            DefaultSettings.prototype.getActivityDefinitionFactory = function () {
                return this.activityDefinitionFactory;
            };

            /** Specifies the activityDefinitionFactory */
            DefaultSettings.prototype.setActivityDefinitionFactory = function (value) {
                this.activityDefinitionFactory = value;
            };

            /** Specifies the libraryNodesFactory */
            DefaultSettings.prototype.getLibraryNodesFactory = function () {
                return this.libraryNodesFactory;
            };

            /** Specifies the libraryNodesFactory */
            DefaultSettings.prototype.setLibraryNodesFactory = function (value) {
                this.libraryNodesFactory = value;
            };

            /** Specifies the slot handler provider. **/
            DefaultSettings.prototype.getSlotHandlerProvider = function () {
                return this.slotHandlerProvider;
            };

            /** Specifies the property panel view handler provider. **/
            DefaultSettings.prototype.getPropertyPanelActionHandlerProvider = function () {
                return this.propertyPanelViewHandlerProvider;
            };

            /** Specifies the property panel view handler provider. **/
            DefaultSettings.prototype.setPropertyPanelActionHandlerProvider = function (value) {
                this.propertyPanelViewHandlerProvider = value;
            };

            /** Specifies the item menu */
            DefaultSettings.prototype.getTileItemsMenu = function () {
                return this.tileItemMenu;
            };

            /** Specifies the context menu */
            DefaultSettings.prototype.getSlotContextMenu = function () {
                return this.slotContextMenu;
            };

            /** Specifies the propertyViewFactory */
            DefaultSettings.prototype.getPropertyViewFactory = function () {
                return this.propertyViewFactory;
            };

            /** Specifies the propertyViewFactory */
            DefaultSettings.prototype.setPropertyViewFactory = function (value) {
                this.propertyViewFactory = value;
            };

            /** Specifies the subsequent activity generator */
            DefaultSettings.prototype.getSubsequentActivityGenerator = function () {
                return this.subsequentActivityGenerator;
            };

            /** Specifies the subsequent activity generator */
            DefaultSettings.prototype.setSubsequentActivityGenerator = function (subsequentActivityGenerator) {
                this.subsequentActivityGenerator = subsequentActivityGenerator;
            };

            /** Slot generator provider. */
            DefaultSettings.prototype.getSlotGeneratorProvider = function () {
                return this.slotGeneratorProvider;
            };

            /** Slot generator provider. */
            DefaultSettings.prototype.setSlotGeneratorProvider = function (value) {
                this.slotGeneratorProvider = value;
            };

            /** Icon factory */
            DefaultSettings.prototype.getIconFactory = function () {
                return this.iconFactory;
            };

            /** Icon factory */
            DefaultSettings.prototype.setIconFactory = function (value) {
                this.iconFactory = value;
            };

            /** Specifies the TileInformation Factory */
            DefaultSettings.prototype.getTileInformationFactory = function () {
                return this.tileInformationFactory;
            };

            /** Specifies the TileInformation Factory */
            DefaultSettings.prototype.setTileInformationFactory = function (value) {
                this.tileInformationFactory = value;
            };

            /** Specifies the ActivityPositionCalculatorFactory Factory */
            DefaultSettings.prototype.getActivityPositionCalculatorFactory = function () {
                return this.activityPositionCalculatorFactory;
            };

            /** Specifies the ActivityPositionCalculatorFactory Factory */
            DefaultSettings.prototype.setActivityPositionCalculatorFactory = function (value) {
                this.activityPositionCalculatorFactory = value;
            };

            /** Specifies the help page base link */
            DefaultSettings.prototype.getHelpPageLink = function () {
                return this.helpPageLink;
            };

            /** Specifies themessage resolver class */
            DefaultSettings.prototype.getStatusMessageResolver = function () {
                return this.statusMessageResolver;
            };

            /** Specifies the message resolver class */
            DefaultSettings.prototype.setStatusMessageResolver = function (resolver) {
                this.statusMessageResolver = resolver;
            };

            /** Specifies flyout content provider */
            DefaultSettings.prototype.getFlyoutContentProvider = function () {
                return this.flyoutContentProvider;
            };

            /** Specifies flyout content provider */
            DefaultSettings.prototype.setFlyoutContentProvider = function (provider) {
                this.flyoutContentProvider = provider;
            };

            /** Specifies the Localization for all the activities **/
            DefaultSettings.prototype.getLabelKeyValuePhraseCollection = function () {
                return this.labelKeyValuePhraseCollection;
            };

            /** Specifies the Localization for all the activities **/
            DefaultSettings.prototype.setLabelKeyValuePhraseCollection = function (value) {
                this.labelKeyValuePhraseCollection = value;
            };

            /** Specifies the slot handler provider for all the activities **/
            DefaultSettings.prototype.setSlotHandlerProvider = function (value) {
                this.slotHandlerProvider = value;
            };

            /** Specifies the Localization for all the activities **/
            DefaultSettings.prototype.setRenderRTL = function (value) {
                this.renderRTL = value;
            };

            /** Specifies the slot handler provider for all the activities **/
            DefaultSettings.prototype.getRenderRTL = function () {
                return this.renderRTL;
            };

            /** Specifies the StatusCodeProviderFactory */
            DefaultSettings.prototype.setStatusCodeProviderFactory = function (value) {
                this.statusCodeProviderFactory = value;
            };

            /** Specifies the StatusCodeProviderFactory */
            DefaultSettings.prototype.getStatusCodeProviderFactory = function () {
                return this.statusCodeProviderFactory;
            };

            /** Specifies the LineConnectorProviderFactory */
            DefaultSettings.prototype.setLineConnectorProviderFactory = function (value) {
                this.lineConnectorProviderFactory = value;
            };

            /** Specifies the LineConnectorProviderFactory */
            DefaultSettings.prototype.getLineConnectorProviderFactory = function () {
                return this.lineConnectorProviderFactory;
            };

            /** Specifies the IConnectorDOMProvider */
            DefaultSettings.prototype.setConnectorDOMProvider = function (value) {
                this.connectorDOMProvider = value;
            };

            /** Specifies the IConnectorDOMProvider */
            DefaultSettings.prototype.getConnectorDOMProvider = function () {
                return this.connectorDOMProvider;
            };

            /** Specifies the TileDecoratorFactory */
            DefaultSettings.prototype.setDecoratorFactory = function (value) {
                this.decoratorFactory = value;
            };

            /** Specifies the TileDecoratorFactory */
            DefaultSettings.prototype.getDecoratorFactory = function () {
                return this.decoratorFactory;
            };

            /** Specifies the IActivityDropController */
            DefaultSettings.prototype.setActivityDropController = function (value) {
                this.activityDropController = value;
            };

            /** Specifies the IActivityDropController */
            DefaultSettings.prototype.getActivityDropController = function () {
                return this.activityDropController;
            };

            /** Specifies the IDropValidator */
            DefaultSettings.prototype.setDropValidator = function (dropValidator) {
                this.dropValidator = dropValidator;
            };

            /** Get the IDropValidator */
            DefaultSettings.prototype.getDropValidator = function () {
                return this.dropValidator;
            };
            return DefaultSettings;
        })();
        Automation.DefaultSettings = DefaultSettings;
    })(Mscrm.Automation || (Mscrm.Automation = {}));
    var Automation = Mscrm.Automation;
})(Mscrm || (Mscrm = {}));
//# sourceMappingURL=AutomationCore.js.map
