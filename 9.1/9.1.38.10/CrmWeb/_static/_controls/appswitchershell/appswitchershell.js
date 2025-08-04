
var shell,
    appLocalList = [],
    appIds = [];
function InitiailizeD365Shell(appModuleList)
{
    appLocalList.length == 0 && !IsNullOrUndefined(appModuleList) && 
        PopulateAppLocalList(appModuleList);
    IsNullOrUndefined(shell) && 
        CreateAppSwitcherFlyout()
}
function CreateAppSwitcherFlyout()
{
    if(IsNullOrUndefined(document.getElementById("crmAppSwitcherFlyout")))
    {
        var flyoutDiv = document.createElement("div");
        flyoutDiv.id = "crmAppSwitcherFlyout";
        var navBarMastHead = document.getElementById("crmMasthead");
        navBarMastHead.appendChild(flyoutDiv)
    }
}
function IsNullOrUndefined(value)
{
    return null === value || value === undefined
}
function LoadD6365ShellScripts()
{
    var scriptsToload = [];
    scriptsToload.push("/_static/_common/scripts/react.js");
    scriptsToload.push("/_static/_controls/appswitchershell/d365shell.js");
    loadScriptsAdv(scriptsToload);
    notifyOnAllScriptsLoaded(function()
    {
        InitializeShell()
    })
}
function HideD365Shell()
{
    !IsNullOrUndefined(shell) && 
        shell.taskpane.hide()
}
function ToggleD365Shell()
{
    !IsNullOrUndefined(shell) && 
        shell.taskpane.toggle()
}
function PopulateAppLocalList(appModuleCollection)
{
    for(var clientUrl = Xrm.Page.context.getClientUrl(),
        webResourceVersionNumber = !IsNullOrUndefined(window.WEB_RESOURCE_ORG_VERSION_NUMBER) ? "/" + window.WEB_RESOURCE_ORG_VERSION_NUMBER : "",
        i = 0; i < appModuleCollection.length; i++)
    {
        var appModule = appModuleCollection[i];
        appIds.push(appModule.AppModuleId);
        appLocalList.push({id:appModule.AppModuleId,displayName:appModule.Name,backgroundColor:"#002050",iconUri:clientUrl + webResourceVersionNumber + "/WebResources/" + appModule.IconPath,appOpenUri:appModule.Url})
    }
}
function InitializeShell()
{
    var shellConfig = {};
    shellConfig.taskpane = {containerId:"crmAppSwitcherFlyout",topOffsetInPixel:50};
    shellConfig.locale = window.Locale;
    shellConfig.rtlMode = window.RTLMode;
    shellConfig.highContrastMode = window.HighContrastEnabled;
    shellConfig.inFocusMode = Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.AppSwitcherInFocusMode");
    shell = D365.init(shellConfig);
    shell.taskpane.addTransientApps(appLocalList);
    shell.taskpane.identifyActiveApps(appIds)
}
