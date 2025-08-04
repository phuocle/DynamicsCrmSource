
function LocalStorageHelper()
{
}
LocalStorageHelper.notify = function(event,value)
{
    if(value === undefined || value === null)
        value = Date.now();
    localStorage.setItem(event,value);
    localStorage.removeItem(event)
};
LocalStorageHelper.isLocalStorageAvailable = function()
{
    try
    {
        var storage = window["localStorage"],
            x = "__storage_test__";
        storage.setItem(x,x);
        storage.removeItem(x);
        return true
    }
    catch(e)
    {
        return false
    }
};
LocalStorageHelper.readOrDefault = function(key,defaultValue)
{
    var value = localStorage.getItem(key);
    if(value === null)
        return defaultValue;
    return value
};
LocalStorageHelper.write = function(key,value)
{
    localStorage.setItem(key,value);
    return value
};
LocalStorageHelper.remove = function(key)
{
    localStorage.removeItem(key)
};
function SessionStorageHelper()
{
}
SessionStorageHelper.readOrDefault = function(key,defaultValue)
{
    var value = sessionStorage.getItem(key);
    if(value === null)
        return defaultValue;
    return value
};
SessionStorageHelper.write = function(key,value)
{
    sessionStorage.setItem(key,value);
    return value
};
SessionStorageHelper.remove = function(key)
{
    sessionStorage.removeItem(key)
};
SessionStorageHelper.isSessionStorageAvailable = function()
{
    try
    {
        var storage = window["sessionStorage"],
            x = "__storage_test__";
        storage.setItem(x,x);
        storage.removeItem(x);
        return true
    }
    catch(e)
    {
        return false
    }
};
function CookieHelper()
{
}
CookieHelper.setCookie = function(cname,cvalue,exdays)
{
    var expiresDate = new Date(Date.now() + exdays * 24 * 60 * 60 * 1e3),
        expiresStr = "expires=" + expiresDate.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expiresStr + ";path=/"
};
CookieHelper.checkCookie = function(cname)
{
    var decodedCookie = decodeURIComponent(document.cookie);
    return decodedCookie.indexOf(cname + "=") !== -1
};
CookieHelper.deleteCookie = function(cname)
{
    CookieHelper.setCookie(cname,"",-1)
};
function JSHelper()
{
}
JSHelper.addEventListener = function(el,eventName,handler)
{
    if(el.addEventListener)
        el.addEventListener(eventName,handler);
    else
        el.attachEvent("on" + eventName,function()
        {
            handler.call(el)
        })
};
JSHelper.removeEventListener = function(el,eventName,handler)
{
    if(el.removeEventListener)
        el.removeEventListener(eventName,handler);
    else
        el.detachEvent("on" + eventName,handler)
};
JSHelper.log = function()
{
    var isLogEnabled = false;
    if(isLogEnabled && console)
        try
        {
            var args = arguments;
            if(args.length > 0)
                args[0] = "[INACTIVITY] " + args[0];
            try
            {
                args.callee = JSHelper.log.caller
            }
            catch(e)
            {
            }
            var newarr = [].slice.call(args);
            console.log.apply(console,newarr)
        }
        catch(e)
        {
        }
};
JSHelper.isCurrentTabActive = function()
{
    var state = null;
    if(typeof document.hidden !== "undefined")
        state = "visibilityState";
    else
        if(typeof document.mozHidden !== "undefined")
            state = "mozVisibilityState";
        else
            if(typeof document.msHidden !== "undefined")
                state = "msVisibilityState";
            else
                if(typeof document.webkitHidden !== "undefined")
                    state = "webkitVisibilityState";
    return state ? document[state] !== "hidden" : true
};
function InactivityGlobal()
{
}
InactivityGlobal.stringWarningDescription = function()
{
    if(typeof INACTIVITY_DIALOG_WARNING_DESCRIPTION !== "undefined")
        return INACTIVITY_DIALOG_WARNING_DESCRIPTION;
    throw"Session inactivity settings not found (textwarning)"
};
InactivityGlobal.stringErrorDescription = function()
{
    if(typeof INACTIVITY_DIALOG_ERROR_DESCRIPTION !== "undefined")
        return INACTIVITY_DIALOG_ERROR_DESCRIPTION;
    throw"Session inactivity settings not found (texterror)"
};
InactivityGlobal.stringContinueButton = function()
{
    if(typeof INACTIVITY_DIALOG_CONTINUE_BUTTON !== "undefined")
        return INACTIVITY_DIALOG_CONTINUE_BUTTON;
    throw"Session inactivity settings not found (textbutton)"
};
InactivityGlobal.inactivitySignoutInSeconds = function()
{
    if(typeof INACTIVITY_SIGNOUT_IN_SECONDS !== "undefined")
        return INACTIVITY_SIGNOUT_IN_SECONDS;
    throw"Session inactivity settings not found (timesignout)"
};
InactivityGlobal.inactivityWarningInSeconds = function()
{
    if(typeof INACTIVITY_SHOW_WARNING_IN_SECONDS !== "undefined")
        return INACTIVITY_SHOW_WARNING_IN_SECONDS;
    throw"Session inactivity settings not found (timewarning)"
};
InactivityGlobal.sharedInactivityMonitor = function(value)
{
    var main = window;
    while(main.self !== main.top && main.parent)
        main = main.parent;
    if(value === undefined)
        if(typeof main.INACTIVITY_MONITOR !== "undefined")
            return main.INACTIVITY_MONITOR;
        else
            return null;
    else
    {
        main.INACTIVITY_MONITOR = value;
        return value
    }
};
InactivityGlobal.sessionHasExpired = function(value)
{
    if(value === undefined)
        return CookieHelper.checkCookie(InactivityKeys.sessionHasExpiredKey());
    if(value)
        CookieHelper.setCookie(InactivityKeys.sessionHasExpiredKey(),1,10);
    else
        CookieHelper.deleteCookie(InactivityKeys.sessionHasExpiredKey())
};
function ActiveTabTracker(monitor,element,isMainWindow)
{
    ActiveTabTracker.prototype.onTabFocus = function()
    {
        JSHelper.log("Tab state changed to ",true);
        if(this.isTabActive)
            return;
        this.isTabActive = true;
        this.monitor.registerTabState(true)
    };
    ActiveTabTracker.prototype.onTabBlur = function()
    {
        JSHelper.log("Tab state changed to ",false);
        if(!this.isTabActive)
            return;
        this.isTabActive = false;
        this.monitor.registerTabState(false)
    };
    ActiveTabTracker.prototype.onUnload = function()
    {
        JSHelper.log("Tab closed!");
        this.isTabActive = false;
        this.monitor.registerTabClose()
    };
    ActiveTabTracker.prototype.registerTabEvents = function()
    {
        JSHelper.addEventListener(this.element,"focus",this.onTabFocus.bind(this));
        JSHelper.addEventListener(this.element,"blur",this.onTabBlur.bind(this));
        this.isMainWindow && 
            JSHelper.addEventListener(this.element,"beforeunload",this.onUnload.bind(this))
    };
    this.isMainWindow = isMainWindow === undefined ? false : isMainWindow;
    this.monitor = monitor;
    this.element = element;
    this.isTabActive = this.monitor.isMonitorActive;
    this.registerTabEvents();
    this.monitor.registerTabState(this.isTabActive)
}
function InactivityTracker(monitor,element)
{
    InactivityTracker.prototype.registerActivity = function()
    {
        this.monitor.registerActivity()
    };
    InactivityTracker.prototype.registerInactivityEvents = function()
    {
        JSHelper.addEventListener(this.element,"mousemove",this.registerActivity.bind(this));
        JSHelper.addEventListener(this.element,"mousedown",this.registerActivity.bind(this));
        JSHelper.addEventListener(this.element,"touchstart",this.registerActivity.bind(this));
        JSHelper.addEventListener(this.element,"click",this.registerActivity.bind(this));
        JSHelper.addEventListener(this.element,"scroll",this.registerActivity.bind(this));
        JSHelper.addEventListener(this.element,"keydown",this.registerActivity.bind(this));
        JSHelper.addEventListener(this.element,"keyup",this.registerActivity.bind(this))
    };
    this.monitor = monitor;
    this.element = element;
    this.registerInactivityEvents()
}
function InactivityReminder(monitor)
{
    InactivityReminder.prototype.onContinue = function()
    {
        this.monitor.hideWarningAndNotify();
        this.hideDialog()
    };
    InactivityReminder.prototype.showDialog = function()
    {
        if(this.isVisible)
            return false;
        if(!this.dialogElement)
            this.buildDialog();
        else
        {
            this.centerDialog();
            this.dialogMessageElement.innerHTML = this.warningMessage;
            this.dialogButtonElement.style.display = "block"
        }
        if(!this.dialogElement)
            return false;
        JSHelper.addEventListener(this.dialogButtonElement,"click",this.onContinueBind);
        this.dialogElement.style.width = "100%";
        this.dialogElement.style.height = "100%";
        this.dialogElement.style.display = "block";
        this.isVisible = true;
        this.tbody.style.overflow = "hidden";
        return true
    };
    InactivityReminder.prototype.showSignOut = function()
    {
        !this.isVisible && 
            this.showDialog();
        if(!this.dialogElement)
            return false;
        this.dialogMessageElement.innerHTML = this.errorMessage;
        this.dialogButtonElement.style.display = "none";
        return true
    };
    InactivityReminder.prototype.hideDialog = function()
    {
        if(!this.isVisible)
            return false;
        JSHelper.removeEventListener(this.dialogButtonElement,"click",this.onContinueBind);
        this.dialogElement.style.display = "none";
        this.isVisible = false;
        this.tbody.style.overflow = "";
        return true
    };
    InactivityReminder.prototype.centerDialog = function()
    {
        if(!this.tnode)
            return false;
        var pageWidth = window.innerWidth,
            pageHeight = window.innerHeight;
        if(typeof pageWidth != "number")
        {
            pageWidth = document.body.clientWidth;
            pageHeight = document.body.clientHeight
        }
        var divWidth = this.tnode.style.width.replace("px",""),
            divHeight = this.tnode.style.height.replace("px",""),
            divLeft = (pageWidth - divWidth) / 2,
            divTop = (pageHeight - divHeight) / 2;
        this.tnode.style.left = divLeft + "px";
        this.tnode.style.top = divTop + "px";
        return true
    };
    InactivityReminder.prototype.buildDialog = function()
    {
        if(this.dialogElement)
            return this.dialogElement;
        var elbody = document.getElementsByTagName("body");
        if(elbody.length === 0)
            return;
        this.tbody = elbody[0];
        var zindex = "9999997",
            divName = "InactivityReminderDialog",
            tContainer = document.createElement("div");
        tContainer.id = divName + "Container";
        tContainer.className = "ms-crm-sm-container";
        tContainer.style.display = "none";
        this.tbody.appendChild(tContainer);
        var tBackgroundNode = document.createElement("div");
        tBackgroundNode.id = divName + "Background";
        tBackgroundNode.className = "ms-crm-sm-background";
        tBackgroundNode.style.zIndex = zindex + 1;
        tContainer.appendChild(tBackgroundNode);
        this.tnode = document.createElement("div");
        this.tnode.id = divName;
        this.tnode.className = "ms-crm-sm-dialog";
        this.tnode.style.height = "179px";
        this.tnode.style.width = "420px";
        this.tnode.style.zIndex = zindex + 2;
        this.tbody.appendChild(this.tnode);
        this.centerDialog();
        var ror1Div = document.createElement("div");
        ror1Div.id = divName + "Row1";
        ror1Div.className = "ms-crm-sm-dialog-header";
        var tHeaderDiv = document.createElement("div");
        tHeaderDiv.className = "ms-crm-sm-dialog-header-desc";
        tHeaderDiv.innerHTML = "<table cellspacing='0' cellpadding='0'><tr><td class='ms-crm-sm-image' ><img alt='warning' src='/_imgs/error/notif_icn_warn.png' /></td><td class='ms-crm-sm-message'><span id='_inactivityWarnText'>" + this.warningMessage + "</span></td></tr></table>";
        ror1Div.appendChild(tHeaderDiv);
        this.tnode.appendChild(ror1Div);
        var ror2Div = document.createElement("div");
        ror2Div.id = divName + "Row2";
        ror2Div.className = "ms-crm-sm-dialog-header ms-crm-sm-dialog-header-row2";
        this.tnode.appendChild(ror2Div);
        var ror3Div = document.createElement("div");
        ror3Div.id = divName + "Row3";
        ror3Div.className = "ms-crm-sm-dialog-footer";
        ror3Div.innerHTML = "<table cellspacing='0' cellpadding='0'><tr><td></td><td class='ms-crm-sm-dialog-buttons'><button id='_continue_btn'>" + this.buttonText + "</button></td><td><div>&nbsp;</div></td></tr></table>";
        this.tnode.appendChild(ror3Div);
        tContainer.appendChild(this.tnode);
        this.dialogMessageElement = document.getElementById("_inactivityWarnText");
        this.dialogButtonElement = document.getElementById("_continue_btn");
        this.dialogElement = document.getElementById(divName + "Container")
    };
    this.warningMessage = CrmEncodeDecode.CrmHtmlAttributeEncode(InactivityGlobal.stringWarningDescription());
    this.errorMessage = CrmEncodeDecode.CrmHtmlAttributeEncode(InactivityGlobal.stringErrorDescription());
    this.buttonText = CrmEncodeDecode.CrmHtmlAttributeEncode(InactivityGlobal.stringContinueButton());
    this.isVisible = false;
    this.dialogElement = null;
    this.dialogMessageElement = null;
    this.dialogButtonElement = null;
    this.tnode = null;
    this.monitor = monitor;
    this.onContinueBind = this.onContinue.bind(this)
}
function InactivityKeys()
{
}
InactivityKeys.showWarningKey = function()
{
    return "ost_showWarning"
};
InactivityKeys.hideWarningKey = function()
{
    return "ost_hideWarning"
};
InactivityKeys.signOutKey = function()
{
    return "ost_signOut"
};
InactivityKeys.syncLastActivityTimeKey = function()
{
    return "ost_SyncLastActivityTime"
};
InactivityKeys.newMonitorInstanceKey = function()
{
    return "ost_newMonitorInstance"
};
InactivityKeys.newTabSelectedKey = function()
{
    return "ost_newTabSelected"
};
InactivityKeys.sessionHasExpiredKey = function()
{
    return "ost_sessionHasExpired"
};
function InactivityMonitor(inactivitySignoutInSeconds,inactivityWarningInSeconds)
{
    InactivityMonitor.prototype.nextInactivityCheckInMs = function()
    {
        var nextEvent = null,
            elapsedInSeconds = (Date.now() - this.currentLastInactivityTime) / 1e3;
        if(elapsedInSeconds > this.inactivitySignoutInSeconds && this.inactivitySignoutInSeconds > 0)
            nextEvent = null;
        else
            if(elapsedInSeconds > this.inactivityWarningInSeconds && this.inactivityWarningInSeconds > 0)
                nextEvent = (this.inactivitySignoutInSeconds - elapsedInSeconds) * 1e3;
            else
                nextEvent = (this.inactivityWarningInSeconds - elapsedInSeconds) * 1e3;
        return nextEvent
    };
    InactivityMonitor.prototype.restartTimer = function()
    {
        clearTimeout(this.timerHandler);
        this.timerHandler = null;
        clearTimeout(this.checkWarningTimer);
        this.checkWarningTimer = null;
        var nextEvent = this.nextInactivityCheckInMs();
        if(nextEvent)
            this.timerHandler = setTimeout(this.checkInactivity.bind(this),nextEvent);
        JSHelper.log("Inactivity timer restarted")
    };
    InactivityMonitor.prototype.showWarningAndNotify = function()
    {
        this.showWarning();
        LocalStorageHelper.notify(InactivityKeys.showWarningKey(),this.currentLastInactivityTime)
    };
    InactivityMonitor.prototype.showWarning = function()
    {
        this.inactivityReminder.showDialog();
        this.isMonitorEnabled = false
    };
    InactivityMonitor.prototype.hideWarningAndNotify = function()
    {
        this.hideWarningDialog();
        this.registerActivity();
        this.restartTimer();
        LocalStorageHelper.notify(InactivityKeys.hideWarningKey(),this.currentLastInactivityTime)
    };
    InactivityMonitor.prototype.hideWarningDialog = function()
    {
        this.inactivityReminder.hideDialog();
        this.isMonitorEnabled = true
    };
    InactivityMonitor.prototype.tryToSignOut = function(options)
    {
        options = options || {};
        options.force = options.hasOwnProperty("force") ? options.force : false;
        options.mustNotify = options.hasOwnProperty("mustNotify") ? options.mustNotify : true;
        this.inactivityReminder.showSignOut();
        if(this.isMonitorActive || options.force)
        {
            options.mustNotify && 
                LocalStorageHelper.notify(InactivityKeys.signOutKey(),true);
            this.doSignOut(options)
        }
        else
            options.mustNotify && 
                LocalStorageHelper.notify(InactivityKeys.signOutKey(),false)
    };
    InactivityMonitor.prototype.doSignOut = function()
    {
        console.info("Session closed due to inactivity on ",Date.now());
        var instance = Mscrm.PageManager.get_instance();
        instance && 
            instance.raiseEvent(Mscrm.ScriptEvents.SignOutRequested,null);
        setTimeout(function()
        {
            InactivityGlobal.sessionHasExpired(false);
            window.$clearHandlers && 
                $clearHandlers(window);
            window.document.body.innerHTML = "";
            window.location.href = window.location.protocol.replace(/\:/g,"") + "://" + window.location.host + "/main.aspx?signout=1"
        },1e3)
    };
    InactivityMonitor.prototype.registerActivity = function()
    {
        if(this.isMonitorEnabled)
        {
            this.currentLastInactivityTime = Date.now();
            JSHelper.log("Local activity: ",this.currentLastInactivityTime)
        }
    };
    InactivityMonitor.prototype.registerTabClose = function()
    {
        if(!InactivityGlobal.sessionHasExpired())
        {
            clearTimeout(this.timerHandler);
            this.timerHandler = null;
            clearTimeout(this.checkWarningTimer);
            this.checkWarningTimer = null;
            this.registerActivity();
            LocalStorageHelper.notify(InactivityKeys.newTabSelectedKey(),this.currentLastInactivityTime);
            this.isMonitorActive = false
        }
    };
    InactivityMonitor.prototype.registerTabState = function(isTabActive)
    {
        if(this.isMonitorActive === isTabActive)
            return;
        this.isMonitorActive = isTabActive;
        if(this.isMonitorActive && InactivityGlobal.sessionHasExpired())
            this.tryToSignOut({force:true});
        else
        {
            this.registerActivity();
            this.restartTimer();
            LocalStorageHelper.notify(InactivityKeys.newTabSelectedKey(),this.currentLastInactivityTime)
        }
    };
    InactivityMonitor.prototype.storageEventHandler = function(event)
    {
        if(event.newValue === null || event.newValue === undefined || event.newValue === "")
            return;
        if(Inactivity.isUSDUnsupportedBrowser())
            return;
        (event.key === InactivityKeys.syncLastActivityTimeKey() || event.key === InactivityKeys.newMonitorInstanceKey() || event.key === InactivityKeys.newTabSelectedKey() || event.key === InactivityKeys.showWarningKey() || event.key === InactivityKeys.hideWarningKey() || event.key === InactivityKeys.signOutKey()) && 
            JSHelper.log("Event received ",event.key,event.newValue);
        if(event.key === InactivityKeys.newMonitorInstanceKey())
            if(InactivityGlobal.sessionHasExpired())
                this.tryToSignOut({force:true});
            else
            {
                this.hideWarningDialog();
                this.updateCurrentLastInactivityTimeFromEvent(event.newValue)
            }
        if(event.key === InactivityKeys.syncLastActivityTimeKey() || event.key === InactivityKeys.newTabSelectedKey())
            this.updateCurrentLastInactivityTimeFromEvent(event.newValue);
        else
            if(event.key === InactivityKeys.showWarningKey())
            {
                this.showWarning();
                this.updateCurrentLastInactivityTimeFromEvent(event.newValue)
            }
            else
                if(event.key === InactivityKeys.hideWarningKey())
                {
                    this.hideWarningDialog();
                    this.updateCurrentLastInactivityTimeFromEvent(event.newValue)
                }
                else
                    if(event.key === InactivityKeys.signOutKey())
                    {
                        var mustForce = event.newValue === "true";
                        this.tryToSignOut({force:mustForce,mustNotify:false})
                    }
    };
    InactivityMonitor.prototype.updateCurrentLastInactivityTimeFromEvent = function(eventData)
    {
        var newlastActivityTime = +eventData;
        if(this.currentLastInactivityTime !== newlastActivityTime)
            if(!this.currentLastInactivityTime || this.currentLastInactivityTime < newlastActivityTime)
            {
                this.currentLastInactivityTime = newlastActivityTime;
                this.restartTimer()
            }
            else
                LocalStorageHelper.notify(InactivityKeys.syncLastActivityTimeKey(),this.currentLastInactivityTime)
    };
    InactivityMonitor.prototype.checkInactivity = function()
    {
        clearTimeout(this.timerHandler);
        this.timerHandler = null;
        clearTimeout(this.checkWarningTimer);
        this.checkWarningTimer = null;
        if(Inactivity.isUSDUnsupportedBrowser())
            return;
        var elapsedInSeconds = (Date.now() - this.currentLastInactivityTime) / 1e3;
        if(elapsedInSeconds > this.inactivitySignoutInSeconds && this.inactivitySignoutInSeconds > 0)
        {
            InactivityGlobal.sessionHasExpired(true);
            this.tryToSignOut()
        }
        else
            if(elapsedInSeconds > this.inactivityWarningInSeconds && this.inactivityWarningInSeconds > 0)
            {
                LocalStorageHelper.notify(InactivityKeys.syncLastActivityTimeKey(),this.currentLastInactivityTime);
                this.checkWarningTimer = setTimeout(this.checkInactivityWarning.bind(this),500)
            }
            else
            {
                var nextEvent = (this.inactivityWarningInSeconds - elapsedInSeconds) * 1e3;
                this.timerHandler = setTimeout(this.checkInactivity.bind(this),nextEvent)
            }
    };
    InactivityMonitor.prototype.checkInactivityWarning = function()
    {
        clearTimeout(this.timerHandler);
        this.timerHandler = null;
        clearTimeout(this.checkWarningTimer);
        this.checkWarningTimer = null;
        if(Inactivity.isUSDUnsupportedBrowser())
            return;
        var nextEvent,
            elapsedInSeconds = (Date.now() - this.currentLastInactivityTime) / 1e3;
        if(elapsedInSeconds > this.inactivityWarningInSeconds)
        {
            this.showWarningAndNotify();
            nextEvent = (this.inactivitySignoutInSeconds - elapsedInSeconds) * 1e3
        }
        else
            nextEvent = (this.inactivityWarningInSeconds - elapsedInSeconds) * 1e3;
        this.timerHandler = setTimeout(this.checkInactivity.bind(this),nextEvent)
    };
    JSHelper.addEventListener(window,"storage",this.storageEventHandler.bind(this));
    this.inactivityReminder = new InactivityReminder(this);
    this.inactivitySignoutInSeconds = inactivitySignoutInSeconds;
    this.inactivityWarningInSeconds = inactivityWarningInSeconds;
    this.timerHandler = null;
    this.currentLastInactivityTime = 0;
    this.isMonitorEnabled = true;
    if(InactivityGlobal.sessionHasExpired())
        this.tryToSignOut({force:true});
    else
    {
        this.registerTabState(JSHelper.isCurrentTabActive());
        LocalStorageHelper.notify(InactivityKeys.newMonitorInstanceKey(),this.currentLastInactivityTime)
    }
}
function Inactivity()
{
}
Inactivity.start = function()
{
    if(Inactivity.isOutlookHostedWindow() || Inactivity.isUSDUnsupportedBrowser() || !LocalStorageHelper.isLocalStorageAvailable() || !SessionStorageHelper.isSessionStorageAvailable())
        return;
    if(!Function.prototype.bind)
        return;
    var isMainWindow = window.self === window.top,
        monitor = InactivityGlobal.sharedInactivityMonitor();
    if(monitor === null && isMainWindow)
    {
        monitor = new InactivityMonitor(InactivityGlobal.inactivitySignoutInSeconds(),InactivityGlobal.inactivityWarningInSeconds());
        InactivityGlobal.sharedInactivityMonitor(monitor)
    }
    if(monitor === null)
        return;
    if(isMainWindow)
        console.info("Inactivity started and monitoring page: ",window.location.href);
    else
        console.info("Inactivity started and monitoring iframe: ",window.location.href);
    new InactivityTracker(monitor,window);
    new ActiveTabTracker(monitor,window,isMainWindow);
    window.frames.length && 
        Inactivity.initializeIframes(monitor,window)
};
Inactivity.isOutlookHostedWindow = function()
{
    var result = false;
    if(window.top.IS_OUTLOOK_CLIENT)
    {
        var hostWindow = window.top.outlook || window.top.external;
        if(!IsNull(hostWindow))
            result = hostWindow.HostEnabled
    }
    if(!result)
        result = CookieHelper.checkCookie("OutlookVersion");
    return result
};
Inactivity.isUSDUnsupportedBrowser = function()
{
    var isRunningInsideUSD = false,
        isUsingSupportedBrowser = false,
        mainWindow = window.top;
    if(!!mainWindow.IsUSD)
        isRunningInsideUSD = mainWindow.IsUSD;
    if(isRunningInsideUSD)
        if(mainWindow.USDBrowserMode !== undefined && mainWindow.USDBrowserMode !== null && mainWindow.USDBrowserMode !== "" && mainWindow.USDBrowserMode !== 0 && mainWindow.USDBrowserMode !== 2)
            isUsingSupportedBrowser = true;
    return isRunningInsideUSD && !isUsingSupportedBrowser
};
Inactivity.initializeIframes = function(monitor,iframeWindow)
{
    for(var i = 0; i < iframeWindow.frames.length; i++)
        try
        {
            var newWindow = iframeWindow.frames[i].window;
            new InactivityTracker(monitor,newWindow);
            new ActiveTabTracker(monitor,newWindow,false);
            console.info("Inactivity started and monitoring iframe: ",newWindow.location.href);
            newWindow.frames.length && 
                Inactivity.initializeIframes(monitor,newWindow)
        }
        catch(e)
        {
        }
};
Inactivity.onReady = function()
{
    JSHelper.removeEventListener(window,"load",Inactivity.onReady);
    Inactivity.start()
};
if(document.readyState === "complete")
    Inactivity.onReady();
else
    JSHelper.addEventListener(window,"load",Inactivity.onReady)
