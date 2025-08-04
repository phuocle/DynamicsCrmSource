
var customization = function(modules)
    {
        var installedModules = {};
        function __webpack_require__(moduleId)
        {
            if(installedModules[moduleId])
                return installedModules[moduleId].exports;
            var module = installedModules[moduleId] = {i:moduleId,l:false,exports:{}};
            modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);
            module.l = true;
            return module.exports
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.d = function(exports,name,getter)
        {
            !__webpack_require__.o(exports,name) && 
                Object.defineProperty(exports,name,{enumerable:true,"get":getter})
        };
        __webpack_require__.r = function(exports)
        {
            typeof Symbol !== "undefined" && Symbol.toStringTag && 
                Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});
            Object.defineProperty(exports,"__esModule",{value:true})
        };
        __webpack_require__.t = function(value,mode)
        {
            if(mode & 1)
                value = __webpack_require__(value);
            if(mode & 8)
                return value;
            if(mode & 4 && typeof value === "object" && value && value.__esModule)
                return value;
            var ns = Object.create(null);
            __webpack_require__.r(ns);
            Object.defineProperty(ns,"default",{enumerable:true,value:value});
            if(mode & 2 && typeof value != "string")
                for(var key in value)
                    __webpack_require__.d(ns,key,function(key)
                    {
                        return value[key]
                    }.bind(null,key));
            return ns
        };
        __webpack_require__.n = function(module)
        {
            var getter = module && module.__esModule ? function()
                {
                    return module["default"]
                } : function()
                {
                    return module
                };
            __webpack_require__.d(getter,"a",getter);
            return getter
        };
        __webpack_require__.o = function(object,property)
        {
            return Object.prototype.hasOwnProperty.call(object,property)
        };
        __webpack_require__.p = "";
        return __webpack_require__(__webpack_require__.s = 0)
    }({"./src/PCFControlContext.ts":function(module,__webpack_exports__,__webpack_require__)
    {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var _PCFCustomization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/PCFCustomization.ts"),
            _TelemetryReporter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/TelemetryReporter.ts"),
            __awaiter = undefined && undefined.__awaiter || function(thisArg,_arguments,P,generator)
            {
                return new (P || (P = Promise))(function(resolve,reject)
                {
                    function fulfilled(value)
                    {
                        try
                        {
                            step(generator.next(value))
                        }
                        catch(e)
                        {
                            reject(e)
                        }
                    }
                    function rejected(value)
                    {
                        try
                        {
                            step(generator["throw"](value))
                        }
                        catch(e)
                        {
                            reject(e)
                        }
                    }
                    function step(result)
                    {
                        result.done ? resolve(result.value) : (new P(function(resolve)
                        {
                            resolve(result.value)
                        })).then(fulfilled,rejected)
                    }
                    step((generator = generator.apply(thisArg,_arguments || [])).next())
                })
            },
            __generator = undefined && undefined.__generator || function(thisArg,body)
            {
                var _ = {label:0,sent:function()
                    {
                        if(t[0] & 1)
                            throw t[1];
                        return t[1]
                    },trys:[],ops:[]},
                    f,
                    y,
                    t,
                    g;
                return g = {next:verb(0),"throw":verb(1),"return":verb(2)}, typeof Symbol === "function" && (g[Symbol.iterator] = function()
                {
                    return this
                }), g;
                function verb(n)
                {
                    return function(v)
                    {
                        return step([n,v])
                    }
                }
                function step(op)
                {
                    if(f)
                        throw new TypeError("Generator is already executing.");
                    while(_)
                        try
                        {
                            if(f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y,op[1])).done)
                                return t;
                            if(y = 0, t)
                                op = [op[0] & 2,t.value];
                            switch(op[0])
                            {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return {value:op[1],done:false};
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if(!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2))
                                    {
                                        _ = 0;
                                        continue
                                    }
                                    if(op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3]))
                                    {
                                        _.label = op[1];
                                        break
                                    }
                                    if(op[0] === 6 && _.label < t[1])
                                    {
                                        _.label = t[1];
                                        t = op;
                                        break
                                    }
                                    if(t && _.label < t[2])
                                    {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break
                                    }
                                    t[2] && 
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue
                            }
                            op = body.call(thisArg,_)
                        }
                        catch(e)
                        {
                            op = [6,e];
                            y = 0
                        }
                        finally
                        {
                            f = t = 0
                        }
                    if(op[0] & 5)
                        throw op[1];
                    return {value:op[0] ? op[1] : void 0,done:true}
                }
            },
            PCFControlContextScope = "PCFControlContext",
            PCFControlContext = function()
            {
                function PCFControlContext(syncService,instanceId,sessionInfo,customControlInfo,telemetryReporter)
                {
                    var _this = this;
                    this.syncService = syncService;
                    this.instanceId = instanceId;
                    this.sessionInfo = sessionInfo;
                    this.customControlInfo = customControlInfo;
                    this.telemetryReporter = telemetryReporter;
                    this.getPropertyValueFromModel = function(propertyName)
                    {
                        return __awaiter(_this,void 0,void 0,function()
                        {
                            var _this = this;
                            return __generator(this,function(_a)
                            {
                                switch(_a.label)
                                {
                                    case 0:
                                        return [4,this.syncService.send({instanceId:this.instanceId,type:_PCFCustomization__WEBPACK_IMPORTED_MODULE_0__["CustomizationSyncMessageType"].CustomizationSyncMessage,actionName:_PCFCustomization__WEBPACK_IMPORTED_MODULE_0__["CustomizationAction"].GetPropertyValueFromModel,actionData:{modelPropertyName:propertyName}}).then(function(result)
                                        {
                                            if(result && result.actionData)
                                            {
                                                var actionData = result.actionData;
                                                return actionData.modelPropertyValue
                                            }
                                            return
                                        }).then(undefined,function(error)
                                        {
                                            _this.telemetryReporter.sendTelemetryEvent({scope:PCFControlContextScope,eventName:"getPropertyValueFromModel",errorMessage:error.errorMessage,telemetryType:_TelemetryReporter__WEBPACK_IMPORTED_MODULE_1__["b"].ReportError},_PCFCustomization__WEBPACK_IMPORTED_MODULE_0__["CustomizationAction"].ReportTelemetry,_this.instanceId);
                                            return
                                        })];
                                    case 1:
                                        return [2,_a.sent()]
                                }
                            })
                        })
                    };
                    this.setPropertyValueInModel = function(propertyName,propertyValueModel)
                    {
                        return __awaiter(_this,void 0,void 0,function()
                        {
                            var _this = this;
                            return __generator(this,function(_a)
                            {
                                switch(_a.label)
                                {
                                    case 0:
                                        return [4,this.syncService.send({instanceId:this.instanceId,type:_PCFCustomization__WEBPACK_IMPORTED_MODULE_0__["CustomizationSyncMessageType"].CustomizationSyncMessage,actionName:_PCFCustomization__WEBPACK_IMPORTED_MODULE_0__["CustomizationAction"].SetPropertyValueInModel,actionData:{modelPropertyName:propertyName,modelPropertyValue:propertyValueModel}}).then(function(result)
                                        {
                                            return result.success
                                        }).then(undefined,function(error)
                                        {
                                            _this.telemetryReporter.sendTelemetryEvent({scope:PCFControlContextScope,eventName:"setPropertyValueInModel",errorMessage:error.errorMessage,telemetryType:_TelemetryReporter__WEBPACK_IMPORTED_MODULE_1__["b"].ReportError},_PCFCustomization__WEBPACK_IMPORTED_MODULE_0__["CustomizationAction"].ReportTelemetry,_this.instanceId);
                                            return false
                                        })];
                                    case 1:
                                        return [2,_a.sent()]
                                }
                            })
                        })
                    };
                    this.getSessionInfo = function()
                    {
                        return _this.sessionInfo
                    };
                    this.getCustomControlInfo = function()
                    {
                        return _this.customControlInfo
                    };
                    this.getInstanceId = function()
                    {
                        return _this.instanceId
                    }
                }
                return PCFControlContext
            }();
        __webpack_exports__["default"] = PCFControlContext
    },"./src/PCFCustomization.ts":function(module,__webpack_exports__,__webpack_require__)
    {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var ObjectTransformer = function()
            {
                function ObjectTransformer()
                {
                }
                ObjectTransformer.prototype.transform = function(objectToTransform,transformationFunc,bindingContext)
                {
                    var _this = this;
                    if(bindingContext === void 0)
                        bindingContext = "";
                    var result;
                    if(objectToTransform)
                        if(Object.keys(objectToTransform).length === 0)
                            result = objectToTransform;
                        else
                        {
                            result = Array.isArray(objectToTransform) ? [] : {};
                            Object.keys(objectToTransform).forEach(function(key)
                            {
                                var element = objectToTransform[key];
                                switch(typeof element)
                                {
                                    case "object":
                                        if(element.replacementType)
                                        {
                                            var funcReplacementType = element && element.replacementType;
                                            if(transformationFunc[funcReplacementType])
                                                result[key] = transformationFunc[funcReplacementType](element,bindingContext)
                                        }
                                        else
                                            result[key] = _this.transform(element,transformationFunc,_this.getBindingContext(bindingContext,key));
                                        break;
                                    case "function":
                                        if(transformationFunc.replacementFunction)
                                            result[key] = transformationFunc.replacementFunction(_this.getBindingContext(bindingContext,element.name));
                                        break;
                                    default:
                                        result[key] = element;
                                        break
                                }
                            })
                        }
                    return result
                };
                ObjectTransformer.prototype.isITypeReplacement = function(element)
                {
                    return element.replacementType !== undefined
                };
                ObjectTransformer.prototype.getBindingContext = function(bindingContext,key)
                {
                    if(bindingContext !== "")
                        return bindingContext + "." + key;
                    else
                        return "" + key
                };
                return ObjectTransformer
            }(),
            lib_ObjectTransformer = ObjectTransformer,
            SyncMessageTypes;
        (function(SyncMessageTypes)
        {
            SyncMessageTypes[SyncMessageTypes["SyncMessageRequest"] = 0] = "SyncMessageRequest";
            SyncMessageTypes[SyncMessageTypes["SyncMessageResponse"] = 1] = "SyncMessageResponse";
            SyncMessageTypes[SyncMessageTypes["HandshakeRequest"] = 2] = "HandshakeRequest";
            SyncMessageTypes[SyncMessageTypes["HandshakeAck"] = 3] = "HandshakeAck"
        })(SyncMessageTypes || (SyncMessageTypes = {}));
        function log(displayName,message)
        {
            console.log("Channel:" + displayName + " => " + message)
        }
        var SyncChannel = function()
            {
                function SyncChannel(channelId,targetDomain,displayName,targetWindow)
                {
                    var _this = this;
                    this._outboundMessageHandlers = {};
                    this.powerAppsRegExp = /\.powerapps\.com$/;
                    this._targetDomain = targetDomain;
                    this._channelId = channelId;
                    this._targetWindow = targetWindow;
                    this._displayName = displayName;
                    this._messageHandler = undefined;
                    this.Ready = new Promise(function(resolve,reject)
                    {
                        _this._onReady = {resolve:resolve,reject:reject}
                    });
                    this._outboundMessageId = 1;
                    this.listener = function(event)
                    {
                        if(!_this.validateMessageOrigin(event))
                            return;
                        if(event.data && event.data.messageType !== undefined)
                        {
                            var message_1 = event.data;
                            log(_this._displayName,"received message of type" + message_1.messageType);
                            switch(message_1.messageType)
                            {
                                case SyncMessageTypes.HandshakeRequest:
                                    if(message_1.messageData && message_1.messageData.channelId === _this._channelId)
                                    {
                                        log(_this._displayName,"Received handshake request for channel" + message_1.messageData.channelId);
                                        _this._targetWindow = event.source;
                                        var handshakeack = _this.createMessage({channelId:_this._channelId},SyncMessageTypes.HandshakeAck);
                                        handshakeack.sourceId = message_1.messageId;
                                        _this._send(handshakeack);
                                        _this._onReady.resolve("")
                                    }
                                    break;
                                case SyncMessageTypes.HandshakeAck:
                                    if(message_1.messageData && message_1.messageData.channelId === _this._channelId && message_1.sourceId && _this._outboundMessageHandlers[message_1.sourceId])
                                    {
                                        _this._outboundMessageHandlers[message_1.sourceId].resolve(message_1.messageData);
                                        _this._onReady.resolve("")
                                    }
                                    break;
                                case SyncMessageTypes.SyncMessageRequest:
                                    log(_this._displayName,"Received sync message request " + message_1.messageId);
                                    var responsePromise = _this._messageHandler.call({},message_1.messageData);
                                    responsePromise.then(function(response)
                                    {
                                        var outboundMessage = _this.createMessage(response,SyncMessageTypes.SyncMessageResponse);
                                        outboundMessage.sourceId = message_1.messageId;
                                        log(_this._displayName,"Sending response" + outboundMessage.messageId);
                                        _this._send(outboundMessage)
                                    });
                                    break;
                                case SyncMessageTypes.SyncMessageResponse:
                                    if(message_1.sourceId && _this._outboundMessageHandlers[message_1.sourceId])
                                    {
                                        log(_this._displayName," received response for request" + message_1.sourceId);
                                        _this._outboundMessageHandlers[message_1.sourceId].resolve(message_1.messageData);
                                        delete _this._outboundMessageHandlers[message_1.sourceId]
                                    }
                                    break;
                                default:
                                    throw new Error("Unsupported message type")
                            }
                        }
                    };
                    window.addEventListener("message",this.listener);
                    targetWindow && 
                        this.handshake()
                }
                SyncChannel.prototype.teardown = function()
                {
                    window.removeEventListener("message",this.listener)
                };
                SyncChannel.prototype.ChannelId = function()
                {
                    return this._channelId
                };
                SyncChannel.prototype.send = function(messageData)
                {
                    var _this = this;
                    return this.Ready.then(function()
                    {
                        var outboundMessage = _this.createMessage(messageData,SyncMessageTypes.SyncMessageRequest),
                            responsePromise = new Promise(function(resolve,reject)
                            {
                                _this._outboundMessageHandlers[outboundMessage.messageId] = {resolve:resolve,reject:reject}
                            });
                        log(_this._displayName,"sending message of type " + outboundMessage.messageType);
                        _this._send(outboundMessage);
                        return responsePromise
                    })
                };
                SyncChannel.prototype.onReceive = function(messageHandler)
                {
                    this._messageHandler = messageHandler
                };
                SyncChannel.prototype.validateMessageOrigin = function(event)
                {
                    if(this._targetDomain === "*")
                    {
                        if(this.powerAppsRegExp.test(this.removeTrailingSlash(event.origin)))
                            return true;
                        return false
                    }
                    if(this.removeTrailingSlash(event.origin) !== this.removeTrailingSlash(this._targetDomain))
                        return false;
                    return true
                };
                SyncChannel.prototype.removeTrailingSlash = function(url)
                {
                    return url.replace(/\/$/,"")
                };
                SyncChannel.prototype.handshake = function()
                {
                    var _this = this,
                        messageData = {channelId:this._channelId},
                        outboundMessage = this.createMessage(messageData,SyncMessageTypes.HandshakeRequest),
                        responsePromise = new Promise(function(resolve,reject)
                        {
                            _this._outboundMessageHandlers[outboundMessage.messageId] = {resolve:resolve,reject:reject}
                        });
                    this._send(outboundMessage);
                    return responsePromise
                };
                SyncChannel.prototype.createMessage = function(message,messagetype)
                {
                    var messageId = this._outboundMessageId++,
                        messageData = message,
                        messageType = messagetype;
                    return {messageId:messageId,messageType:messageType,messageData:messageData}
                };
                SyncChannel.prototype._send = function(message)
                {
                    if(this._targetWindow)
                        this._targetWindow.postMessage(message,this._targetDomain);
                    else
                        throw new Error("lost the target window")
                };
                return SyncChannel
            }(),
            lib_SyncChannel = SyncChannel,
            PCFControlContext = __webpack_require__("./src/PCFControlContext.ts"),
            TelemetryReporter = __webpack_require__("./src/TelemetryReporter.ts");
        __webpack_require__.d(__webpack_exports__,"CustomizationSyncMessageType",function()
        {
            return CustomizationSyncMessageType
        });
        __webpack_require__.d(__webpack_exports__,"CustomizationAction",function()
        {
            return CustomizationAction
        });
        __webpack_require__.d(__webpack_exports__,"ScriptType",function()
        {
            return ScriptType
        });
        var __awaiter = undefined && undefined.__awaiter || function(thisArg,_arguments,P,generator)
            {
                return new (P || (P = Promise))(function(resolve,reject)
                {
                    function fulfilled(value)
                    {
                        try
                        {
                            step(generator.next(value))
                        }
                        catch(e)
                        {
                            reject(e)
                        }
                    }
                    function rejected(value)
                    {
                        try
                        {
                            step(generator["throw"](value))
                        }
                        catch(e)
                        {
                            reject(e)
                        }
                    }
                    function step(result)
                    {
                        result.done ? resolve(result.value) : (new P(function(resolve)
                        {
                            resolve(result.value)
                        })).then(fulfilled,rejected)
                    }
                    step((generator = generator.apply(thisArg,_arguments || [])).next())
                })
            },
            __generator = undefined && undefined.__generator || function(thisArg,body)
            {
                var _ = {label:0,sent:function()
                    {
                        if(t[0] & 1)
                            throw t[1];
                        return t[1]
                    },trys:[],ops:[]},
                    f,
                    y,
                    t,
                    g;
                return g = {next:verb(0),"throw":verb(1),"return":verb(2)}, typeof Symbol === "function" && (g[Symbol.iterator] = function()
                {
                    return this
                }), g;
                function verb(n)
                {
                    return function(v)
                    {
                        return step([n,v])
                    }
                }
                function step(op)
                {
                    if(f)
                        throw new TypeError("Generator is already executing.");
                    while(_)
                        try
                        {
                            if(f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y,op[1])).done)
                                return t;
                            if(y = 0, t)
                                op = [op[0] & 2,t.value];
                            switch(op[0])
                            {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return {value:op[1],done:false};
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if(!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2))
                                    {
                                        _ = 0;
                                        continue
                                    }
                                    if(op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3]))
                                    {
                                        _.label = op[1];
                                        break
                                    }
                                    if(op[0] === 6 && _.label < t[1])
                                    {
                                        _.label = t[1];
                                        t = op;
                                        break
                                    }
                                    if(t && _.label < t[2])
                                    {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break
                                    }
                                    t[2] && 
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue
                            }
                            op = body.call(thisArg,_)
                        }
                        catch(e)
                        {
                            op = [6,e];
                            y = 0
                        }
                        finally
                        {
                            f = t = 0
                        }
                    if(op[0] & 5)
                        throw op[1];
                    return {value:op[0] ? op[1] : void 0,done:true}
                }
            },
            CustomizationSyncMessageType;
        (function(CustomizationSyncMessageType)
        {
            CustomizationSyncMessageType["CustomizationSyncMessage"] = "CustomizationSyncMessage"
        })(CustomizationSyncMessageType || (CustomizationSyncMessageType = {}));
        var CustomizationAction;
        (function(CustomizationAction)
        {
            CustomizationAction["Init"] = "Init";
            CustomizationAction["LoadAuthoringScript"] = "LoadAuthoringScript";
            CustomizationAction["InvokeFunction"] = "InvokeFunction";
            CustomizationAction["GetPropertyValueFromModel"] = "GetPropertyValueFromModel";
            CustomizationAction["SetPropertyValueInModel"] = "SetPropertyValueInModel";
            CustomizationAction["ReportTelemetry"] = "ReportTelemetry"
        })(CustomizationAction || (CustomizationAction = {}));
        var ScriptType;
        (function(ScriptType)
        {
            ScriptType["Library"] = "Library";
            ScriptType["Code"] = "Code"
        })(ScriptType || (ScriptType = {}));
        var PCFCustomization_PCFCustomization = function()
            {
                function PCFCustomization()
                {
                    var _this = this;
                    this.handleRequest = function(request)
                    {
                        return __awaiter(_this,void 0,void 0,function()
                        {
                            var _a,
                                error;
                            return __generator(this,function(_b)
                            {
                                switch(_b.label)
                                {
                                    case 0:
                                        if(!(request && request.type === CustomizationSyncMessageType.CustomizationSyncMessage && request.actionName))
                                            return [3,8];
                                        _a = request.actionName;
                                        switch(_a)
                                        {
                                            case CustomizationAction.Init:
                                                return [3,1];
                                            case CustomizationAction.LoadAuthoringScript:
                                                return [3,3];
                                            case CustomizationAction.InvokeFunction:
                                                return [3,5]
                                        }
                                        return [3,7];
                                    case 1:
                                        return [4,this.handleInitRequest(request)];
                                    case 2:
                                        return [2,_b.sent()];
                                    case 3:
                                        return [4,this.handleLoadAuthoringScriptRequest(request)];
                                    case 4:
                                        return [2,_b.sent()];
                                    case 5:
                                        return [4,this.handleInvokeFunctionRequest(request)];
                                    case 6:
                                        return [2,_b.sent()];
                                    case 7:
                                        error = "unknown request action type " + request.actionName;
                                        return [2,this.generateResponseMessage(request,{},false,error)];
                                    case 8:
                                        return [2,this.generateResponseMessage(request,{},false,request ? "Request is invalid with request type: " + request.type + " or request action name: " + request.actionName : "Can not process null or undefined request")]
                                }
                            })
                        })
                    };
                    this.handleInitRequest = function(request)
                    {
                        return __awaiter(_this,void 0,void 0,function()
                        {
                            var customControlInfo,
                                instanceId,
                                sessionInfo,
                                responseActionData,
                                requestActionData,
                                controlContext,
                                instanceObj,
                                initObject,
                                key;
                            return __generator(this,function(_a)
                            {
                                switch(_a.label)
                                {
                                    case 0:
                                        responseActionData = {};
                                        if(!request.actionData)
                                            return [3,4];
                                        requestActionData = request.actionData;
                                        if(requestActionData.customControlInfo && requestActionData.sessionInfo)
                                        {
                                            customControlInfo = requestActionData.customControlInfo;
                                            sessionInfo = requestActionData.sessionInfo
                                        }
                                        else
                                            return [2,this.generateResponseMessage(request,responseActionData,false,"no control info or session info")];
                                        instanceId = request.instanceId;
                                        if(!instanceId)
                                            return [3,3];
                                        controlContext = new PCFControlContext["default"](this.state.syncService,instanceId,sessionInfo,customControlInfo,this.telemetryReporter);
                                        instanceObj = this.state.instances[instanceId];
                                        if(instanceObj)
                                            instanceObj.controlContext = controlContext;
                                        else
                                            instanceObj = {controlContext:controlContext,transformObject:{}};
                                        if(!this.onInit)
                                            return [3,2];
                                        this.telemetryReporter.sendTelemetryEvent({telemetryType:TelemetryReporter["b"].ReportEvent,eventType:TelemetryReporter["a"].Start,scope:"PCFCustomization",eventName:"initControlContext"},CustomizationAction.ReportTelemetry,request.instanceId);
                                        return [4,this.onInit(controlContext)];
                                    case 1:
                                        initObject = _a.sent();
                                        this.telemetryReporter.sendTelemetryEvent({telemetryType:TelemetryReporter["b"].ReportEvent,eventType:TelemetryReporter["a"].End,scope:"PCFCustomization",eventName:"initControlContext"},CustomizationAction.ReportTelemetry,request.instanceId);
                                        key = CustomizationAction.Init;
                                        instanceObj.transformObject[key] = initObject;
                                        this.state.instances[instanceId] = instanceObj;
                                        responseActionData = this.objectTransformer.transform(initObject,this.transformationFunc(instanceId),"instances." + instanceId + ".transformObject." + key);
                                        return [2,this.generateResponseMessage(request,responseActionData,true)];
                                    case 2:
                                        return [2,this.generateResponseMessage(request,requestActionData,false,"onInit function isn't set yet")];
                                    case 3:
                                        return [2,this.generateResponseMessage(request,requestActionData,false,"Instance Id is not provided")];
                                    case 4:
                                        return [2,this.generateResponseMessage(request,{},false,"no action data")]
                                }
                            })
                        })
                    };
                    this.handleLoadAuthoringScriptRequest = function(request)
                    {
                        return __awaiter(_this,void 0,void 0,function()
                        {
                            var actionData,
                                isLoaded,
                                _this = this;
                            return __generator(this,function(_a)
                            {
                                switch(_a.label)
                                {
                                    case 0:
                                        if(!request.actionData)
                                            return [3,2];
                                        actionData = request.actionData;
                                        this.telemetryReporter.sendTelemetryEvent({telemetryType:TelemetryReporter["b"].ReportEvent,eventType:TelemetryReporter["a"].Start,scope:"PCFCustomization",eventName:"loadScript"},CustomizationAction.ReportTelemetry,request.instanceId);
                                        return [4,this.loadScripts(actionData)];
                                    case 1:
                                        isLoaded = _a.sent();
                                        this.telemetryReporter.sendTelemetryEvent({telemetryType:TelemetryReporter["b"].ReportEvent,eventType:TelemetryReporter["a"].End,scope:"PCFCustomization",eventName:"loadScript"},CustomizationAction.ReportTelemetry,request.instanceId);
                                        return [2,this.generateResponseMessage(request,{},isLoaded).then(undefined,function(reason)
                                        {
                                            return _this.generateResponseMessage(request,{},false,reason)
                                        })];
                                    case 2:
                                        return [2,this.generateResponseMessage(request,{},false,"no action data")]
                                }
                            })
                        })
                    };
                    this.loadScripts = function(loadAuthoringScriptData)
                    {
                        return __awaiter(_this,void 0,void 0,function()
                        {
                            var libraryScripts,
                                coreScripts,
                                _this = this;
                            return __generator(this,function(_a)
                            {
                                switch(_a.label)
                                {
                                    case 0:
                                        if(!!this.scriptLoadingPromise)
                                            return [3,2];
                                        this.scriptLoadingPromise = new Promise(function(resolve,reject)
                                        {
                                            _this.scriptLoadingPromiseResolve = resolve;
                                            _this.scriptLoadingPromiseReject = reject
                                        });
                                        libraryScripts = this.filterScriptsByType(loadAuthoringScriptData.authoringScripts,ScriptType.Library);
                                        coreScripts = this.filterScriptsByType(loadAuthoringScriptData.authoringScripts,ScriptType.Code);
                                        return [4,this.createScriptElements(libraryScripts.concat(coreScripts)).then(undefined,function(error)
                                        {
                                            _this.scriptLoadingPromiseReject(error)
                                        })];
                                    case 1:
                                        _a.sent();
                                        _a.label = 2;
                                    case 2:
                                        return [2,this.scriptLoadingPromise]
                                }
                            })
                        })
                    };
                    this.filterScriptsByType = function(authoringScripts,resourceType)
                    {
                        return authoringScripts.filter(function(scriptInfo)
                        {
                            return scriptInfo.Type === resourceType
                        }).sort(function(scriptA,scriptB)
                        {
                            return scriptA.Order - scriptB.Order
                        })
                    };
                    this.createScriptElements = function(scripts)
                    {
                        return Promise.all(scripts.map(function(script)
                        {
                            var scriptLoadingPromise = new Promise(function(resolve,reject)
                                {
                                    var scriptElement = document.createElement("script");
                                    scriptElement.onload = function()
                                    {
                                        resolve()
                                    };
                                    scriptElement.onerror = function(errorMessage)
                                    {
                                        reject(errorMessage)
                                    };
                                    if(script.Path != null && script.Path.indexOf("data:,") != -1)
                                        scriptElement.src = escape(script.Path);
                                    else
                                        scriptElement.src = script.Path;
                                    document.head.appendChild(scriptElement)
                                });
                            return scriptLoadingPromise
                        }))
                    };
                    this.handleInvokeFunctionRequest = function(request)
                    {
                        return __awaiter(_this,void 0,void 0,function()
                        {
                            var requestData,
                                instanceId,
                                funcToInvoke,
                                invokeFunctionResponse,
                                newBindingContext,
                                errorMessage;
                            return __generator(this,function(_a)
                            {
                                switch(_a.label)
                                {
                                    case 0:
                                        if(!request.actionData)
                                            return [3,5];
                                        requestData = request.actionData;
                                        instanceId = request.instanceId;
                                        if(!instanceId)
                                            return [3,4];
                                        funcToInvoke = this.getBindedObject(requestData.bindingContext);
                                        if(!(funcToInvoke && typeof funcToInvoke === "function"))
                                            return [3,2];
                                        this.telemetryReporter.sendTelemetryEvent({telemetryType:TelemetryReporter["b"].ReportEvent,eventType:TelemetryReporter["a"].Start,scope:"PCFCustomization",eventName:"invoke function " + funcToInvoke.name},CustomizationAction.ReportTelemetry,request.instanceId);
                                        return [4,funcToInvoke.apply(this,requestData.args)];
                                    case 1:
                                        invokeFunctionResponse = _a.sent();
                                        this.telemetryReporter.sendTelemetryEvent({telemetryType:TelemetryReporter["b"].ReportEvent,eventType:TelemetryReporter["a"].End,scope:"PCFCustomization",eventName:"invoke function " + funcToInvoke.name},CustomizationAction.ReportTelemetry,request.instanceId);
                                        if(invokeFunctionResponse)
                                        {
                                            newBindingContext = this.storeFunctionInvokeResponse(invokeFunctionResponse,requestData.bindingContext,instanceId);
                                            invokeFunctionResponse = this.objectTransformer.transform(invokeFunctionResponse,this.transformationFunc(instanceId),"" + newBindingContext)
                                        }
                                        return [2,this.generateResponseMessage(request,invokeFunctionResponse,true)];
                                    case 2:
                                        errorMessage = "Can not find the function " + request.actionData.bindingContext + " in customControlInstance with instanceId: " + instanceId;
                                        return [2,this.generateResponseMessage(request,{},false,errorMessage)];
                                    case 3:
                                        return [3,5];
                                    case 4:
                                        return [2,this.generateResponseMessage(request,{},false,"Instance Id is not provided")];
                                    case 5:
                                        return [2,this.generateResponseMessage(request,{},false,"no action data")]
                                }
                            })
                        })
                    };
                    this.storeFunctionInvokeResponse = function(invokeFuncObject,bindingContext,instanceId)
                    {
                        var contextString = bindingContext.split("."),
                            invokeFunctionName = contextString[contextString.length - 1],
                            parentBindingContext = "" + contextString.slice(0,contextString.length - 1).join("."),
                            parentBindingObject = _this.getBindedObject(parentBindingContext),
                            newBindingContextSuffix = "invoke_" + invokeFunctionName;
                        parentBindingObject[newBindingContextSuffix] = invokeFuncObject;
                        return parentBindingContext + "." + newBindingContextSuffix
                    };
                    this.generateResponseMessage = function(request,actionData,success,error)
                    {
                        var response = {instanceId:request.instanceId,type:CustomizationSyncMessageType.CustomizationSyncMessage,actionName:request.actionName,actionData:actionData,success:success};
                        if(!success)
                            response.error = error;
                        return Promise.resolve(response)
                    };
                    this.transformationFunc = function(instanceId)
                    {
                        return {replacementFunction:function(bindingContext)
                        {
                            if(bindingContext === void 0)
                                bindingContext = "";
                            return {replacementType:"FunctionTypeReplacement",instanceId:instanceId,bindingContext:bindingContext}
                        }}
                    };
                    this.getBindedObject = function(bindingContext)
                    {
                        var result,
                            currentBindedObject = _this.state,
                            bindings = bindingContext.split(".");
                        bindings.forEach(function(binding)
                        {
                            currentBindedObject = currentBindedObject[binding];
                            if(!currentBindedObject)
                                return
                        });
                        result = currentBindedObject;
                        return result
                    };
                    var syncService = new lib_SyncChannel("customization channel","*","CustomControl_channel",window.parent);
                    this.objectTransformer = new lib_ObjectTransformer;
                    syncService.onReceive(this.handleRequest);
                    this.state = {instances:{},syncService:syncService};
                    this.telemetryReporter = new TelemetryReporter["c"](syncService)
                }
                PCFCustomization.PCFCustomizationObj = new PCFCustomization;
                PCFCustomization.init = function(onInit)
                {
                    PCFCustomization.PCFCustomizationObj.onInit = onInit;
                    PCFCustomization.PCFCustomizationObj.scriptLoadingPromiseResolve(true)
                };
                return PCFCustomization
            }(),
            src_PCFCustomization = __webpack_exports__["default"] = PCFCustomization_PCFCustomization
    },"./src/TelemetryReporter.ts":function(module,__webpack_exports__,__webpack_require__)
    {
        "use strict";
        __webpack_require__.d(__webpack_exports__,"b",function()
        {
            return TelemetryType
        });
        __webpack_require__.d(__webpack_exports__,"a",function()
        {
            return TelemetryEventType
        });
        var _PCFCustomization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/PCFCustomization.ts"),
            TelemetryType;
        (function(TelemetryType)
        {
            TelemetryType["ReportError"] = "ReportError";
            TelemetryType["ReportEvent"] = "ReportEvent"
        })(TelemetryType || (TelemetryType = {}));
        var TelemetryEventType;
        (function(TelemetryEventType)
        {
            TelemetryEventType["Start"] = "Start";
            TelemetryEventType["End"] = "End"
        })(TelemetryEventType || (TelemetryEventType = {}));
        var TelemetryReporter = function()
            {
                function TelemetryReporter(syncService)
                {
                    var _this = this;
                    this.syncService = syncService;
                    this.sendTelemetryEvent = function(actionData,actionName,instanceId)
                    {
                        _this.syncService.send({instanceId:instanceId,actionName:actionName,type:_PCFCustomization__WEBPACK_IMPORTED_MODULE_0__["CustomizationSyncMessageType"].CustomizationSyncMessage,actionData:actionData})
                    }
                }
                return TelemetryReporter
            }();
        __webpack_exports__["c"] = TelemetryReporter
    },0:function(module,exports,__webpack_require__)
    {
        __webpack_require__("./src/PCFControlContext.ts");
        module.exports = __webpack_require__("./src/PCFCustomization.ts")
    }})["default"];
window.PCFCustomization = window.customization
