
Type.registerNamespace("MaxSession");
Type.registerNamespace("MaxSession.Helper");
Type.registerNamespace("MaxSession.Global");
Type.registerNamespace("MaxSession.KnownKeys");
Type.registerNamespace("MaxSession.Dialog");
MaxSession.Helper.isLocalStorageAvailable = function()
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
MaxSession.Helper.notify = function(event,value)
{
    if(typeof MAXSESSION_LOCALSTORAGE == "undefined")
        MAXSESSION_LOCALSTORAGE = MaxSession.Helper.isLocalStorageAvailable();
    if(!MAXSESSION_LOCALSTORAGE)
        return;
    if(value === undefined || value === null)
        value = Date.now();
    localStorage.setItem(event,value);
    localStorage.removeItem(event)
};
MaxSession.Helper.addEventListener = function(el,eventName,handler)
{
    if(el.addEventListener)
        el.addEventListener(eventName,handler);
    else
        el.attachEvent("on" + eventName,function()
        {
            handler.call(el)
        })
};
MaxSession.Helper.removeEventListener = function(el,eventName,handler)
{
    if(el.removeEventListener)
        el.removeEventListener(eventName,handler);
    else
        el.detachEvent("on" + eventName,handler)
};
MaxSession.Helper.checkCookie = function(cname)
{
    var decodedCookie = decodeURIComponent(document.cookie);
    return decodedCookie.indexOf(cname + "=") !== -1
};
MaxSession.Helper.isOutlookHostedWindow = function()
{
    var result = false;
    if(isTopAccessible() && window.top.IS_OUTLOOK_CLIENT)
    {
        var hostWindow = window.top.outlook || window.top.external;
        if(!IsNull(hostWindow))
            result = hostWindow.HostEnabled
    }
    if(!result)
        result = MaxSession.Helper.checkCookie("OutlookVersion");
    return result
};
MaxSession.Helper.isUSDUnsupportedBrowser = function()
{
    var isRunningInsideUSD = false,
        isUsingSupportedBrowser = false,
        mainWindow = isTopAccessible() ? window.top : window.self;
    if(!!mainWindow.IsUSD)
        isRunningInsideUSD = mainWindow.IsUSD;
    if(isRunningInsideUSD)
        if(mainWindow.USDBrowserMode !== undefined && mainWindow.USDBrowserMode !== null && mainWindow.USDBrowserMode !== "" && mainWindow.USDBrowserMode !== 0 && mainWindow.USDBrowserMode !== 2)
            isUsingSupportedBrowser = true;
    return isRunningInsideUSD && !isUsingSupportedBrowser
};
MaxSession.Helper.isInsideIFrame = function()
{
    return window.self !== window.top
};
MaxSession.Helper.isReauthenticationPage = function()
{
    return window.location.pathname.toLowerCase().endsWith("dlg_prompt_reauthenticate.aspx") || window.location.pathname.toLowerCase().endsWith("dlg_reauthenticate_success.aspx")
};
MaxSession.Helper.isMainPage = function()
{
    var mainPage = window.self === window.top;
    if(!mainPage && window.location.pathname.toLowerCase().endsWith("main.aspx"))
        if(window.location.search.length == 0)
            mainPage = true;
        else
        {
            var uri = Mscrm.CrmUri.create(window.location.href),
                pageType = uri.get_query()["pageType"];
            if(IsNull(pageType) || pageType.length == 0)
                mainPage = true
        }
    return mainPage
};
MaxSession.Global.stringWarningDescription = function()
{
    if(typeof DIALOG_REAUTH_DESCRIPTION !== "undefined")
        return DIALOG_REAUTH_DESCRIPTION;
    throw"Session timeout settings not found (textwarning)"
};
MaxSession.Global.stringErrorDescription = function()
{
    if(typeof DIALOG_REAUTH_EXPIRED_DESCRIPTION !== "undefined")
        return DIALOG_REAUTH_EXPIRED_DESCRIPTION;
    throw"Session timeout settings not found (texterror)"
};
MaxSession.Global.stringSigninButton = function()
{
    if(typeof DIALOG_REAUTH_SIGNIN_BUTTON !== "undefined")
        return DIALOG_REAUTH_SIGNIN_BUTTON;
    throw"Session timeout settings not found (signinbutton)"
};
MaxSession.Global.stringCancelButton = function()
{
    if(typeof DIALOG_REAUTH_CANCEL_BUTTON !== "undefined")
        return DIALOG_REAUTH_CANCEL_BUTTON;
    throw"Session timeout settings not found (cancelbutton)"
};
MaxSession.Global.stringCloseButton = function()
{
    if(typeof DIALOG_REAUTH_CLOSE_BUTTON !== "undefined")
        return DIALOG_REAUTH_CLOSE_BUTTON;
    throw"Session timeout settings not found (closebutton)"
};
MaxSession.Global.signoutInSeconds = function()
{
    if(typeof AUTH_EXPIRATION_AFTER_REMINDER_IN_SECONDS !== "undefined")
        return AUTH_EXPIRATION_AFTER_REMINDER_IN_SECONDS;
    throw"Session timeout settings not found (timesignout)"
};
MaxSession.Global.warningInSeconds = function()
{
    if(typeof AUTH_EXPIRATION_REMINDER_TIME_IN_SECONDS !== "undefined")
        return AUTH_EXPIRATION_REMINDER_TIME_IN_SECONDS;
    throw"Session timeout settings not found (timewarning)"
};
MaxSession.Global.UserLanguageCode = function()
{
    if(typeof USER_LANGUAGE_CODE !== "undefined")
        return USER_LANGUAGE_CODE;
    throw"Session timeout settings not found (user_lang_code)"
};
MaxSession.Global.Monitor = function(value)
{
    var main = window;
    while(main.self !== main.top && isParentAccessible(main))
        main = main.parent;
    if(value === undefined)
        if(typeof main.SESSIONTIMEOUT_MONITOR !== "undefined")
            return main.SESSIONTIMEOUT_MONITOR;
        else
            return null;
    else
    {
        main.SESSIONTIMEOUT_MONITOR = value;
        return value
    }
};
MaxSession.KnownKeys.showWarningKey = function()
{
    return "oss_showWarning"
};
MaxSession.KnownKeys.hideWarningKey = function()
{
    return "oss_hideWarning"
};
MaxSession.KnownKeys.showSignOutKey = function()
{
    return "oss_showSignOut"
};
MaxSession.KnownKeys.mustSignOutKey = function()
{
    return "oss_mustSignOut"
};
MaxSession.KnownKeys.reloadKey = function()
{
    return "oss_reload"
};
MaxSession.Dialog.Common = function(name,message,buttons,buttonHandler)
{
    MaxSession.Dialog.Common.prototype.onButtonClick = function(buttonId)
    {
        this.buttonHandler.buttonClicked(buttonId)
    };
    MaxSession.Dialog.Common.prototype.showDialog = function()
    {
        if(this.isVisible)
            return false;
        if(!this.dialogElement)
            this.buildDialog();
        else
            this.centerDialog();
        if(!this.dialogElement)
            return false;
        for(var i = 0; i < this.buttons.length; i++)
        {
            var button = this.buttons[i];
            button.handler = this.onButtonClick.bind(this,button.id);
            var element = document.getElementById(button.id);
            element && 
                MaxSession.Helper.addEventListener(element,"click",button.handler)
        }
        this.dialogElement.style.width = "100%";
        this.dialogElement.style.height = "100%";
        this.dialogElement.style.display = "block";
        this.isVisible = true;
        this.tbody.style.overflow = "hidden";
        return true
    };
    MaxSession.Dialog.Common.prototype.hideDialog = function()
    {
        if(!this.isVisible)
            return false;
        for(var i = 0; i < this.buttons.length; i++)
        {
            var button = this.buttons[i],
                element = document.getElementById(button.id);
            element && button.handler && 
                MaxSession.Helper.removeEventListener(element,"click",button.handler)
        }
        this.dialogElement.style.display = "none";
        this.isVisible = false;
        this.tbody.style.overflow = "";
        return true
    };
    MaxSession.Dialog.Common.prototype.centerDialog = function()
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
    MaxSession.Dialog.Common.prototype.buildDialog = function()
    {
        if(this.dialogElement)
            return this.dialogElement;
        var elbody = document.getElementsByTagName("body");
        if(elbody.length === 0)
            return;
        this.tbody = elbody[0];
        var zindex = "9999997",
            divName = this.name,
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
        this.tnode.style.zIndex = zindex + 2;
        this.tnode.style.width = "420px";
        this.tnode.style.height = "179px";
        this.tbody.appendChild(this.tnode);
        this.centerDialog();
        var ror1Div = document.createElement("div");
        ror1Div.id = divName + "Row1";
        ror1Div.className = "ms-crm-sm-dialog-header";
        var tHeaderDiv = document.createElement("div");
        tHeaderDiv.className = "ms-crm-sm-dialog-header-desc";
        tHeaderDiv.innerHTML = "<table cellspacing='0' cellpadding='0'><tr><td class='ms-crm-sm-image'><img alt='warning' src='/_imgs/error/notif_icn_warn.png' /></td><td class='ms-crm-sm-message'>" + this.message + "</td></tr></table>";
        ror1Div.appendChild(tHeaderDiv);
        this.tnode.appendChild(ror1Div);
        var ror2Div = document.createElement("div");
        ror2Div.id = divName + "Row2";
        ror2Div.className = "ms-crm-sm-dialog-header ms-crm-sm-dialog-header-row2";
        this.tnode.appendChild(ror2Div);
        var ror3Div = document.createElement("div");
        ror3Div.id = divName + "Row3";
        ror3Div.className = "ms-crm-sm-dialog-footer";
        for(var buttonText = "<table cellspacing='0' cellpadding='0'><tr><td></td>",
            i = 0; i < this.buttons.length; i++)
        {
            var button = this.buttons[i];
            buttonText = buttonText + "<td class='ms-crm-sm-dialog-buttons'>";
            buttonText = buttonText + "<button id='" + button.id + "'>" + button.text + "</button></td>"
        }
        buttonText = buttonText + "<td><div>&nbsp;</div></td></tr></table>";
        ror3Div.innerHTML = buttonText;
        this.tnode.appendChild(ror3Div);
        tContainer.appendChild(this.tnode);
        this.dialogElement = document.getElementById(divName + "Container")
    };
    this.name = name;
    this.message = message;
    this.buttons = buttons;
    this.buttonHandler = buttonHandler;
    this.isVisible = false;
    this.dialogElement = null;
    this.tnode = null
};
MaxSession.Dialog.Reminder = function()
{
    MaxSession.Dialog.Reminder.prototype.showDialog = function()
    {
        this.dialog.showDialog()
    };
    MaxSession.Dialog.Reminder.prototype.hideDialog = function()
    {
        this.dialog.hideDialog()
    };
    MaxSession.Dialog.Reminder.prototype.buttonClicked = function(buttonId)
    {
        if(buttonId === "_cancel")
            this.doCancel();
        else
            buttonId === "_sign_in" && 
                this.doSignIn()
    };
    MaxSession.Dialog.Reminder.prototype.doCancel = function()
    {
        this.hideDialog();
        MaxSession.Helper.notify(MaxSession.KnownKeys.hideWarningKey())
    };
    MaxSession.Dialog.Reminder.prototype.doSignIn = function()
    {
        var baseUri = Mscrm.CrmUri.create("/_root/dlg_prompt_reauthenticate.aspx");
        baseUri.get_query()["user_lcid"] = MaxSession.Global.UserLanguageCode();
        baseUri.get_query()["reauth"] = true;
        var oUrl = baseUri.toString();
        openStdWin(oUrl,null,980,520,true)
    };
    this.message = CrmEncodeDecode.CrmHtmlAttributeEncode(MaxSession.Global.stringWarningDescription());
    this.signinButtonText = CrmEncodeDecode.CrmHtmlAttributeEncode(MaxSession.Global.stringSigninButton());
    this.cancelButtonText = CrmEncodeDecode.CrmHtmlAttributeEncode(MaxSession.Global.stringCancelButton());
    this.buttons = [{id:"_sign_in",text:this.signinButtonText},{id:"_cancel",text:this.cancelButtonText}];
    this.dialog = new MaxSession.Dialog.Common("reAuthObject",this.message,this.buttons,this)
};
MaxSession.Dialog.Signout = function(monitor)
{
    MaxSession.Dialog.Signout.prototype.showDialog = function()
    {
        this.dialog.showDialog()
    };
    MaxSession.Dialog.Signout.prototype.hideDialog = function()
    {
        this.dialog.hideDialog()
    };
    MaxSession.Dialog.Signout.prototype.buttonClicked = function(buttonId)
    {
        buttonId === "_close_session" && 
            this.doClose()
    };
    MaxSession.Dialog.Signout.prototype.doClose = function()
    {
        MaxSession.Helper.notify(MaxSession.KnownKeys.mustSignOutKey());
        this.monitor.doSignOut()
    };
    this.message = CrmEncodeDecode.CrmHtmlAttributeEncode(MaxSession.Global.stringErrorDescription());
    this.closeButtonText = CrmEncodeDecode.CrmHtmlAttributeEncode(MaxSession.Global.stringCloseButton());
    this.buttons = [{id:"_close_session",text:this.closeButtonText}];
    this.monitor = monitor;
    this.dialog = new MaxSession.Dialog.Common("sessionExpiredObject",this.message,this.buttons,this)
};
MaxSession.Monitor = function(warningInSeconds,signoutInSeconds,lastUpdate)
{
    MaxSession.Monitor.prototype.checkSessionTimeout = function(currentDate)
    {
        clearTimeout(this.timerHandler);
        this.timerHandler = null;
        var nextEvent = null;
        if(MaxSession.Helper.isUSDUnsupportedBrowser())
            return;
        if(typeof currentDate == "undefined")
            currentDate = Date.now();
        if(this.errorShowDate !== null && currentDate >= this.errorShowDate)
        {
            this.signoutDialog.showDialog();
            MaxSession.Helper.notify(MaxSession.KnownKeys.showSignOutKey());
            this.reminderDialog.hideDialog();
            MaxSession.Helper.notify(MaxSession.KnownKeys.hideWarningKey())
        }
        else
            if(this.warningShowDate === null || currentDate >= this.warningShowDate)
            {
                if(this.warningShowDate !== null)
                {
                    this.reminderDialog.showDialog();
                    MaxSession.Helper.notify(MaxSession.KnownKeys.showWarningKey())
                }
                if(this.errorShowDate !== null)
                    nextEvent = this.errorShowDate - currentDate
            }
            else
                nextEvent = this.warningShowDate - currentDate;
        if(nextEvent)
            this.timerHandler = setTimeout(this.checkSessionTimeout.bind(this),nextEvent)
    };
    MaxSession.Monitor.prototype.doSignOut = function()
    {
        console.info("Session closed due to timeout on ",Date.now());
        var instance = Mscrm.PageManager.get_instance();
        instance && 
            instance.raiseEvent(Mscrm.ScriptEvents.SignOutRequested,null);
        window.$clearHandlers && 
            $clearHandlers(window);
        window.document.body.innerHTML = "";
        window.location.href = window.location.protocol.replace(/\:/g,"") + "://" + window.location.host + "/main.aspx?signout=1"
    };
    MaxSession.Monitor.prototype.storageEventHandler = function(event)
    {
        if(event.newValue === null || event.newValue === undefined || event.newValue === "")
            return;
        if(MaxSession.Helper.isUSDUnsupportedBrowser())
            return;
        if(event.key === MaxSession.KnownKeys.showWarningKey())
            this.reminderDialog.showDialog();
        else
            if(event.key === MaxSession.KnownKeys.hideWarningKey())
                this.reminderDialog.hideDialog();
            else
                if(event.key === MaxSession.KnownKeys.showSignOutKey())
                    this.signoutDialog.showDialog();
                else
                    if(event.key === MaxSession.KnownKeys.mustSignOutKey())
                        this.doSignOut();
                    else
                        event.key === MaxSession.KnownKeys.reloadKey() && 
                            this.reload(JSON.parse(event.newValue))
    };
    MaxSession.Monitor.prototype.reload = function(options)
    {
        var enabled = options.enabled,
            warningInSeconds = options.warning,
            signoutInSeconds = options.signout,
            currentDate = options.now,
            newLastUpdate = options.lastupdate;
        if(enabled)
        {
            var mustUpdateTimer = !!newLastUpdate && (this.lastUpdate === null || this.lastUpdate < newLastUpdate);
            if(mustUpdateTimer)
            {
                var newWarningShowDate = warningInSeconds > 0 ? currentDate + warningInSeconds * 1e3 : null,
                    newErrorShowDate = signoutInSeconds > 0 ? currentDate + signoutInSeconds * 1e3 : null;
                this.warningShowDate = newWarningShowDate;
                this.errorShowDate = newErrorShowDate;
                this.lastUpdate = newLastUpdate;
                this.warningShowDate !== null && 
                    this.reminderDialog.hideDialog();
                this.checkSessionTimeout(currentDate)
            }
        }
        else
        {
            clearTimeout(this.timerHandler);
            this.timerHandler = null
        }
    };
    MaxSession.Helper.addEventListener(window,"storage",this.storageEventHandler.bind(this));
    this.reminderDialog = new MaxSession.Dialog.Reminder;
    this.signoutDialog = new MaxSession.Dialog.Signout(this);
    this.timerHandler = null;
    this.warningShowDate = null;
    this.errorShowDate = null;
    this.lastUpdate = null;
    var options = {now:Date.now(),enabled:true,warning:warningInSeconds,signout:signoutInSeconds,lastupdate:lastUpdate};
    this.reload(options);
    if(warningInSeconds !== 0)
        MaxSession.Helper.notify(MaxSession.KnownKeys.reloadKey(),JSON.stringify(options));
    else
        if(signoutInSeconds !== 0 && MaxSession.Helper.isMainPage())
        {
            this.reminderDialog.showDialog();
            MaxSession.Helper.notify(MaxSession.KnownKeys.showWarningKey())
        }
};
MaxSession.start = function()
{
    if(MaxSession.Helper.isOutlookHostedWindow())
        return;
    if(MaxSession.Helper.isUSDUnsupportedBrowser())
        return;
    if(MaxSession.Helper.isReauthenticationPage())
        return;
    if(!Function.prototype.bind)
        return;
    var lastUpdate = window.AUTH_EXPIRATION_LAST_UPDATE;
    if(MaxSession.Helper.isInsideIFrame())
    {
        var monitor = MaxSession.Global.Monitor();
        if(monitor)
        {
            var options = {now:Date.now(),enabled:true,warning:MaxSession.Global.warningInSeconds(),signout:MaxSession.Global.signoutInSeconds(),lastupdate:lastUpdate};
            monitor.reload(options);
            MaxSession.Helper.notify(MaxSession.KnownKeys.reloadKey(),JSON.stringify(options));
            console.info("Max Session timeout settings updated from iframe: ",window.location.href)
        }
    }
    else
    {
        MaxSession.Global.Monitor(new MaxSession.Monitor(MaxSession.Global.warningInSeconds(),MaxSession.Global.signoutInSeconds(),lastUpdate));
        console.info("Max Session timeout started and monitoring page: ",window.location.href)
    }
};
MaxSession.onReady = function()
{
    MaxSession.Helper.removeEventListener(window,"load",MaxSession.onReady);
    MaxSession.start()
};
function RegisterAuthExpiryReminder(enabled,warningTimer,signOutTimer,lastUpdate)
{
    var monitor = MaxSession.Global.Monitor();
    if(monitor)
    {
        var options = {now:Date.now(),enabled:enabled,warning:warningTimer,signout:signOutTimer,lastupdate:lastUpdate};
        monitor.reload(options);
        MaxSession.Helper.notify(MaxSession.KnownKeys.reloadKey(),JSON.stringify(options))
    }
}
function MaxSessionMonitorHideActionMsg()
{
    var monitor = MaxSession.Global.Monitor();
    monitor && 
        monitor.reminderDialog.hideDialog()
}
function isTopAccessible()
{
    try
    {
        return !!window.top.location && !!window.top.location.href
    }
    catch(error)
    {
        return false
    }
}
function isParentAccessible(wInstance)
{
    if(!wInstance)
        wInstance = window;
    try
    {
        return !!wInstance.parent.location && !!wInstance.parent.location.href
    }
    catch(error)
    {
        return false
    }
}
if(document.readyState === "complete")
    MaxSession.onReady();
else
    MaxSession.Helper.addEventListener(window,"load",MaxSession.onReady)
