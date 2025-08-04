
var internalUtilities = "",
    xrmInternal = "",
    xrmObjects = "",
    DbDataList = [],
    userCardsList = [],
    modifiedCards = [],
    imagePathToggle = "/_imgs/RelationshipIntelligenceConfig/nav_bar.png",
    imagePathExpand = "/_imgs/RelationshipIntelligenceConfig/Nav_Down.png",
    imagePathToggleHighContrast = "/_imgs/RelationshipIntelligenceConfig/nav_bar_HighContrast.png",
    imagePathExpandHighContrast = "/_imgs/RelationshipIntelligenceConfig/Nav_Down_HighContrast.png",
    cardoptionsResourceKey = "",
    organizationId = "",
    userId = "",
    isRIActionCardOrgSettingEnabled = false,
    isRIEmailEngagementOrgSettingEnabled = false,
    isActivityAnalysisEnabled = false,
    isDeclaimerEnabled = false,
    islive = false,
    isopenedfrompersonaloptions = false,
    currentwindow = window,
    currentContext,
    groupCollapseToolTip = "",
    groupExpandToolTip = "",
    isADCOrgSettingEnabled = false,
    unSavedChangesText = "",
    unSavedChangesDialogTitle = "",
    unSavedChangesDialogYesButtonText = "",
    unSavedChangsDialogNoButtonText = "",
    previousTab = "",
    isRIActionCardsEnabled = false,
    isRIAnalyticsEnabled = false,
    isEmailEnagagementEnabled = false,
    isACIForEmailEnagagementEnabled = false,
    isADCEnabled = false,
    saveTooltipResourceKey = "",
    relationshipInsightsTablTooltipResourceKey = "",
    provisionStatus = "",
    provisionUiChangeInterval = "",
    provisionStatusInterval = "",
    ResourceKeyValuesDictionary = [],
    direction = "ltr",
    isHighContrastEnabled = false,
    isAASolInstalled = false,
    isADCSolInstalled = false,
    isEESolInstalled = false,
    isRASolInstalled = false,
    aafeature = "ActivityAnalysis",
    eefeature = "EmailEngagment",
    adcfeature = "AutoDataCapture",
    actionCardfeature = "RelationshipAssistant",
    rifeature = "RelationshipIntelligence",
    enableMsgType = "enable",
    disableMsgType = "disable",
    appUrl = "",
    appUrlFormat = "https://port.{0}.{1}.com/G/Applications/Index.aspx",
    MSFTSubscription = "MSFT",
    BYOSSubscription = "BYOS",
    DCISubscriptionType = MSFTSubscription,
    isMSFTOwnedSubscriptionTurnedOn = false,
    newConfigExperiencePromise = null,
    isSolutionInstalled = false,
    isFeatureFlag = false,
    newConfigLoaded = false;
$(document).ready(function()
{
    isopenedfrompersonaloptions = checkIfOpenedFromPersonalOptions();
    if(isopenedfrompersonaloptions)
        currentwindow = window.opener;
    internalUtilities = currentwindow.parent.parent.Mscrm.InternalUtilities;
    xrmUtility = currentwindow.parent.parent.Xrm.Utility;
    xrmInternal = currentwindow.parent.parent.Xrm.Internal;
    xrmObjects = currentwindow.parent.parent.Xrm.Objects;
    newConfigExperiencePromise = checkForNewUnifiedConfigFCB();
    newConfigExperiencePromise.then(function(data)
    {
        if(window.top.document.getElementById("contentIFrame0") == null)
            getAppModuleId().then(function(data)
            {
                if(data.value && data.value[0])
                {
                    var appId = data.value[0].appmoduleid;
                    window.open("/main.aspx?pagetype=control&controlName=MscrmControls.UnifiedConfigWrapperControl.UnifiedConfigWrapperControl&navbar=off&appId=" + appId,"_self")
                }
                else
                    window.open("/uclient/main.htm?pagetype=control&controlName=MscrmControls.UnifiedConfigWrapperControl.UnifiedConfigWrapperControl&navbar=off","_self")
            });
        else
        {
            if(newConfigLoaded == true)
                return;
            var frames = $.grep($(window.top.document.getElementById("crmContentPanel")).find("iframe"),function(frame)
                {
                    if($(frame).contents().find("#disclaimerTextDiv").length == 1)
                        return frame
                });
            getAppModuleId().then(function(data)
            {
                if(data.value !== null && data.value[0] !== null)
                {
                    var appId = data.value[0].appmoduleid;
                    frames[0].src = "/main.aspx?pagetype=control&controlName=MscrmControls.UnifiedConfigCustomControl.UnifiedConfigCustomControl&navbar=off&appId=" + appId
                }
                else
                    frames[0].src = "/uclient/main.htm?pagetype=control&controlName=MscrmControls.UnifiedConfigCustomControl.UnifiedConfigCustomControl&navbar=off";
                newConfigLoaded = true
            })
        }
    },function()
    {
        loadOldUIConfig()
    })
});
function getAppModuleId()
{
    var context = currentwindow.parent.parent.Xrm.Page.context;
    if(context.isCrmOnline())
        return $.getJSON("/api/data/v8.0/appmodules?$filter=(clienttype eq 8)&$select=appmoduleid&$top=1");
    else
        return $.getJSON(context.getClientUrl() + "/api/data/v8.0/appmodules?$filter=(clienttype eq 8)&$select=appmoduleid&$top=1")
}
function loadOldUIConfig()
{
    isopenedfrompersonaloptions = checkIfOpenedFromPersonalOptions();
    document.getElementById("headerTitle").style.display = "none";
    document.getElementById("headerDesc").style.display = "none";
    if(isopenedfrompersonaloptions)
        currentwindow = window.opener;
    internalUtilities = currentwindow.parent.parent.Mscrm.InternalUtilities;
    xrmUtility = currentwindow.parent.parent.Xrm.Utility;
    xrmInternal = currentwindow.parent.parent.Xrm.Internal;
    xrmObjects = currentwindow.parent.parent.Xrm.Objects;
    LoadResources();
    cardoptionsResourceKey = HtmlDecodeString(getLocaleString("RI_CARDOPTION_TITLE"));
    groupCollapseToolTip = HtmlDecodeString(getLocaleString("RI_RA_Group_CollapseMessage"));
    groupExpandToolTip = HtmlDecodeString(getLocaleString("RI_RA_Group_ExpandMessage"));
    publicCardTooltip = HtmlDecodeString(getLocaleString("RI_PublicCards_Hover_Message"));
    unSavedChangesText = HtmlDecodeString(getLocaleString("RI_Tabs_UnSavedChanges"));
    unSavedChangesDialogTitle = HtmlDecodeString(getLocaleString("RI_Tabs_UnSavedChanges_dialog_Title"));
    unSavedChangesDialogYesButtonText = HtmlDecodeString(getLocaleString("RI_Tabs_UnSavedChanges_dialog_Ok_Button_label"));
    unSavedChangsDialogNoButtonText = HtmlDecodeString(getLocaleString("RI_Tabs_UnSavedChanges_dialog_Cancel_Button_label"));
    saveTooltipResourceKey = HtmlDecodeString(getLocaleString("RI_CommonButtonSave_Tooltip"));
    relationshipInsightsTablTooltipResourceKey = HtmlDecodeString(getLocaleString("RI_Tab_Common_Tooltip"));
    try
    {
        newConfigExperiencePromise = checkForNewUnifiedConfigFCB();
        newConfigExperiencePromise.then(function(data)
        {
            newConfigExperiencePromiseSuccess(data)
        },function()
        {
        });
        if(currentwindow.parent.parent.LOCID_UI_DIR && $("#contentIFrame0") != undefined && $("#contentIFrame0") != null && $("#contentIFrame0").context != undefined && $("#contentIFrame0").context != null && $("#contentIFrame0").context.body != undefined && $("#contentIFrame0").context.body != null)
        {
            $("#contentIFrame0").context.body.style.direction = currentwindow.parent.parent.LOCID_UI_DIR.toLowerCase();
            direction = currentwindow.parent.parent.LOCID_UI_DIR.toLowerCase()
        }
        userId = getUserId();
        organizationId = getOrgId();
        islive = currentwindow.parent.parent.Xrm.Page.context.isCrmOnline();
        CheckHighContrastEnabled();
        setAccessibility("spnLoadingText","RI_Loading_Text");
        setAccessibility("spnRITitle","RelationshipIntelligence_SubArea_Title");
        setAccessibility("headerDesc","RI_HeaderDescription");
        hideTabsDiv();
        if(!CheckforFeatureEnabled())
            return;
        if(userId == null || userId == undefined || userId == "" || (organizationId == null || organizationId == undefined || organizationId == "") && !isopenedfrompersonaloptions)
            return;
        UpdateApplicationUrl();
        loadOVResourceStrings();
        loadRAResourceStrings();
        loadAnalyticResourceString();
        loadEmailEngagementResourceStrings();
        loadADCResourceString();
        loadProvisionResourceString();
        loadDisclaimerResourceString();
        loadRIPackageInstallResourceString();
        if(!isopenedfrompersonaloptions && !islive)
            return;
        InitializeOrgSettings();
        attachKeyPressEventsForTabsAndButtons();
        disableBeginSetUpButton();
        disableEEBeginSetUpButton();
        hideInnerTabs()
    }
    catch(error)
    {
        xrmUtility.confirmDialog(HtmlDecodeString(getLocaleString("RI_CanNotShow_Error")))
    }
}
function ChangeImgSrcHighContrastEnabled()
{
    $("#RAtabSaveIcon").attr("src","/_imgs/RelationshipIntelligenceConfig/Save_HighContrast_16.png");
    $("#relationInfoIcon").attr("src","/_imgs/RelationshipIntelligenceConfig/Information_HighContrast.png");
    $("#ADCTabSaveIcon").attr("src","/_imgs/RelationshipIntelligenceConfig/Save_HighContrast_16.png");
    $("#adcInfoIcon").attr("src","/_imgs/RelationshipIntelligenceConfig/Information_HighContrast.png");
    $("#EETabSaveIcon").attr("src","/_imgs/RelationshipIntelligenceConfig/Save_HighContrast_16.png");
    $("#emailInfoIcon").attr("src","/_imgs/RelationshipIntelligenceConfig/Information_HighContrast.png");
    $("#HubNameInfoIcon").attr("src","/_imgs/RelationshipIntelligenceConfig/Information_HighContrast.png")
}
function gotoRATab()
{
    $("#tabRelationshipAssistance").click()
}
function CheckHighContrastEnabled()
{
    var columnNames = ["useimagestrips"];
    xrmInternal.messages.retrieve(internalUtilities.EntityNames.UserSettings,userId,columnNames).then(function(responseOrganization)
    {
        if(responseOrganization.entity != undefined && responseOrganization.entity != null && responseOrganization.entity.fields["useimagestrips"])
        {
            var useImageStrips = responseOrganization.entity.fields["useimagestrips"].get_ValueString() == "1" ? true : false;
            isHighContrastEnabled = !useImageStrips;
            isHighContrastEnabled && 
                ChangeImgSrcHighContrastEnabled()
        }
    })
}
function InitializeOrgSettings()
{
    showPageLoadingIcon();
    renderConfigPage()
}
function CheckforFeatureEnabled()
{
    currentContext = currentwindow.parent.Mscrm.FeatureControl.get_Current();
    if(currentContext === undefined && currentContext === null)
        return;
    isRIActionCardsEnabled = isopenedfrompersonaloptions ? currentwindow.FeatureControl[currentwindow.parent.Mscrm.FeatureNames.ActionCard] && currentwindow.FeatureControl[currentwindow.parent.Mscrm.FeatureNames.NonBaseActionCard] : currentContext.isFeatureEnabled(currentwindow.parent.Mscrm.FeatureNames.ActionCard) && currentContext.isFeatureEnabled(currentwindow.parent.Mscrm.FeatureNames.NonBaseActionCard);
    isRIAnalyticsEnabled = isopenedfrompersonaloptions ? currentwindow.FeatureControl[currentwindow.parent.Mscrm.FeatureNames.ActivityInsights] : currentContext.isFeatureEnabled(currentwindow.parent.Mscrm.FeatureNames.ActivityInsights);
    isEmailEnagagementEnabled = isopenedfrompersonaloptions ? currentwindow.FeatureControl[currentwindow.parent.Mscrm.FeatureNames.EmailEngagement] : currentContext.isFeatureEnabled(currentwindow.parent.Mscrm.FeatureNames.EmailEngagement);
    isACIForEmailEnagagementEnabled = isopenedfrompersonaloptions ? currentwindow.FeatureControl[currentwindow.parent.Mscrm.FeatureNames.ACIForEmailEngagement] : currentContext.isFeatureEnabled(currentwindow.parent.Mscrm.FeatureNames.ACIForEmailEngagement);
    isADCEnabled = isopenedfrompersonaloptions ? currentwindow.FeatureControl[currentwindow.parent.Mscrm.FeatureNames.AutoDataCapture] : currentContext.isFeatureEnabled(currentwindow.parent.Mscrm.FeatureNames.AutoDataCapture);
    isFeatureFlag = isopenedfrompersonaloptions ? currentwindow.FeatureControl[currentwindow.parent.Mscrm.FeatureNames.UseNewRIConfig] : currentContext.isFeatureEnabled(currentwindow.parent.Mscrm.FeatureNames.UseNewRIConfig);
    if(!isRIActionCardsEnabled && !isRIAnalyticsEnabled && !isEmailEnagagementEnabled && !isADCEnabled)
    {
        if(document.getElementById("noFCBErrorDiv") != null)
        {
            document.getElementById("noFCBErrorDiv").style.display = "flex";
            setAccessibility("textNoTabTodisplay","RI_ExceptionMessage_RIFeatureDisable")
        }
        return false
    }
    return true
}
function UpdateApplicationUrl()
{
    var clientUrl = "";
    try
    {
        clientUrl = currentwindow.parent.Xrm.Page.context.getClientUrl();
        var segments = clientUrl.split(".");
        appUrl = currentwindow.parent.String.format(appUrlFormat,segments[segments.length - 3],segments[segments.length - 2]);
        if(isFeatureFlag && !isSolutionInstalled)
        {
            appUrl = currentwindow.parent.String.format("https://crmrispa.{0}.{1}.com/",segments[segments.length - 3],segments[segments.length - 2]);
            var orgId = organizationId;
            orgId = orgId.replace("{","").replace("}","");
            appUrl = appUrl + "?orgId=" + orgId;
            var langUrl = "";
            if(currentwindow.parent && currentwindow.parent.parent && currentwindow.parent.parent.Xrm && currentwindow.parent.parent.Xrm.Page && currentwindow.parent.parent.Xrm.Page.context)
                langUrl = "&lcid=" + currentwindow.parent.parent.Xrm.Page.context.getUserLcid();
            appUrl = appUrl + langUrl
        }
    }
    catch(error)
    {
        AddFeatureTelemetryLog(rifeature,"","Get/create appUrl for package installation failed for client URL " + clientUrl)
    }
}
function HtmlEncodeString(resourceSring)
{
    return currentwindow.parent.parent.CrmEncodeDecode.CrmHtmlEncode(resourceSring)
}
function HtmlDecodeString(resourceSring)
{
    return currentwindow.parent.parent.CrmEncodeDecode.CrmHtmlDecode(resourceSring)
}
function onRiAnaltyicsClick(tab,event)
{
    getProvisioningStatus(function(provisionStatus)
    {
        if(provisionStatus.status != 2)
        {
            $("#relationshipAnalayticsIframeContainerDiv").addClass("displaynone");
            $("#RAA-Container-ProvisioningDiv").removeClass("displaynone");
            !$.contains("#provisioningContainer","#RAA-Container-ProvisioningDiv") && 
                $("#provisioningContainer").appendTo("#RAA-Container-ProvisioningDiv");
            loadUiOnProvisionStatus(provisionStatus)
        }
        else
            provisionDivsByStatus(provisionStatus);
        tabUnSavedChangesConfirmDialog();
        DisplayTabOnAccessibility(tab,event,provisionStatus.status)
    })
}
function onEmailEngagementClick(tab,event)
{
    if(isACIForEmailEnagagementEnabled)
        getProvisioningStatus(function(provisionStatus)
        {
            if(provisionStatus.status != 2)
            {
                $("#emailinteractionContentDiv").addClass("displaynone");
                $("#EE-Container-ProvisioningDiv").removeClass("displaynone");
                !$.contains("#provisioningContainer","#EE-Container-ProvisioningDiv") && 
                    $("#provisioningContainer").appendTo("#EE-Container-ProvisioningDiv");
                loadUiOnProvisionStatus(provisionStatus)
            }
            else
                provisionDivsByStatus(provisionStatus);
            tabUnSavedChangesConfirmDialog();
            DisplayTabOnAccessibility(tab,event,provisionStatus.status)
        });
    else
        getEEProvisioningStatus(function(provisionStatus)
        {
            if(provisionStatus.eestatus != 2)
            {
                $("#emailinteractionContentDiv").addClass("displaynone");
                $("#EE-Container-ProvisioningDiv").removeClass("displaynone");
                !$.contains("#provisioningContainer","#EE-Container-ProvisioningDiv") && 
                    $("#provisioningContainer").appendTo("#EE-Container-ProvisioningDiv");
                loadEEUiOnEEProvisionStatus(provisionStatus)
            }
            else
                provisionEEAciNotusedDivsByEEStatus(provisionStatus);
            tabUnSavedChangesConfirmDialog();
            DisplayTabOnAccessibility(tab,event,provisionStatus.eestatus)
        })
}
function tabUnSavedChangesConfirmDialog()
{
    var isActionCardOptionEnabled = $("#chkActionCardEnableOption").is(":checked"),
        isEmailInteractionAllowed = $("#chkEmailInteraction").is(":checked"),
        isAutoCaptureChecked = $("#chkADCOrgSetting").is(":checked");
    if(isRIActionCardsEnabled && modifiedCards !== undefined && modifiedCards !== null)
        (modifiedCards.length >= 1 || isRIActionCardOrgSettingEnabled != isActionCardOptionEnabled) && 
            openUnsavedChangesDialog("tabRelationshipAssistance");
    isEmailEnagagementEnabled && isRIEmailEngagementOrgSettingEnabled != isEmailInteractionAllowed && 
        openUnsavedChangesDialog("tabEmailInteractionAnalysis");
    isADCEnabled && isADCOrgSettingEnabled != isAutoCaptureChecked && 
        openUnsavedChangesDialog("tabAutoDataCapture");
    var iframe = document.getElementById("relationshipAnalyticsIframe");
    isRIAnalyticsEnabled && isActivityAnalysisEnabled && iframe.contentWindow !== undefined && iframe.contentWindow !== null && iframe.contentWindow.tabUnSavedChangesConfirmDialog && 
        iframe.contentWindow.tabUnSavedChangesConfirmDialog()
}
function openUnsavedChangesDialog(unSavedChangesTabId)
{
    var options = new currentwindow.parent.parent.Xrm.DialogOptions;
    options.height = 180;
    options.width = 550;
    var confirmDialogMessage = new currentwindow.parent.parent.Xrm.ConfirmDialogStrings;
    confirmDialogMessage.title = unSavedChangesDialogTitle;
    confirmDialogMessage.text = unSavedChangesText;
    confirmDialogMessage.confirmButtonLabel = unSavedChangesDialogYesButtonText;
    confirmDialogMessage.cancelButtonLabel = unSavedChangsDialogNoButtonText;
    currentwindow.parent.parent.Xrm.Dialog.openConfirmDialog(confirmDialogMessage,options,function()
    {
        yesCallbackFunction(unSavedChangesTabId)
    },function()
    {
        noCallbackFunction(unSavedChangesTabId)
    },null)
}
function yesCallbackFunction(unSavedChangesTab)
{
    if(unSavedChangesTab === "tabRelationshipAssistance")
    {
        saveActionCards();
        modifiedCards = [];
        isRIActionCardOrgSettingEnabled = $("#chkActionCardEnableOption").is(":checked")
    }
    else
        if(unSavedChangesTab === "tabEmailInteractionAnalysis")
        {
            updateOrgSetting();
            isRIEmailEngagementOrgSettingEnabled = $("#chkEmailInteraction").is(":checked")
        }
        else
            if(unSavedChangesTab === "tabAutoDataCapture")
            {
                updateADCSetting();
                isADCOrgSettingEnabled = $("#chkADCOrgSetting").is(":checked")
            }
    setDefaultFocusToActiveTab()
}
function noCallbackFunction(unSavedChangesTab)
{
    if(unSavedChangesTab === "tabRelationshipAssistance")
    {
        $("#chkActionCardEnableOption").prop("checked",isRIActionCardOrgSettingEnabled);
        loadActionCards()
    }
    else
        if(unSavedChangesTab === "tabEmailInteractionAnalysis")
            $("#chkEmailInteraction").prop("checked",isRIEmailEngagementOrgSettingEnabled);
        else
            unSavedChangesTab === "tabAutoDataCapture" && 
                $("#chkADCOrgSetting").prop("checked",isADCOrgSettingEnabled);
    setDefaultFocusToActiveTab()
}
function setDefaultFocusToActiveTab()
{
    var activeTab = $("ul input[type='radio']:checked"),
        activeTabId = activeTab[0].id;
    if(activeTabId === "tabOverview")
        $("#lblOVTitle").focus();
    else
        if(activeTabId === "tabRelationshipAssistance")
            $("#lblRATitle").focus();
        else
            if(activeTabId === "tabAutoDataCapture")
                $("#lblADCTitle").focus();
            else
                if(activeTabId === "tabRelationshipAnalytics")
                    $("#RAATabTitle").focus();
                else
                    activeTabId === "tabEmailInteractionAnalysis" && 
                        $("#lblEIATitle").focus()
}
function DisplayTabOnAccessibility(control,event,provisioningStatus)
{
    var keycode = event.keyCode ? event.keyCode : event.which,
        index = 0;
    if(keycode == "13" || keycode == "32" || event.type == "click")
    {
        var siblingNodes = $(control).siblings();
        if(siblingNodes.children.length >= 0)
        {
            var tabId = siblingNodes[0].id;
            $("#" + tabId).prop("checked","true");
            if(tabId == "tabRelationshipAnalytics" && provisioningStatus === 2)
            {
                var iframe = document.getElementById("relationshipAnalyticsIframe"),
                    iframeContent = iframe.contentDocument.getElementById("lblRelationshipAnalyticsTitle");
                if(iframeContent != undefined && iframeContent != null)
                    if(document.getElementById("tab-RAA-Container").style.display === "none")
                        document.getElementById("textRAApreviewnotAvailable").focus();
                    else
                        iframeContent.childNodes[index + 1].focus();
                else
                    document.getElementById("lnkRAASolutionInstall").focus()
            }
            else
            {
                var element;
                if(tabId == "tabOverview")
                    element = siblingNodes.children(":visible").find("h6")[index];
                else
                    element = siblingNodes.children(":visible").find("a")[index];
                element != undefined && element != null && 
                    element.focus();
                if(tabId == "tabRelationshipAnalytics" || tabId == "tabEmailInteractionAnalysis" && provisioningStatus !== 2)
                    if(isACIForEmailEnagagementEnabled == false && tabId == "tabEmailInteractionAnalysis")
                        $("#EEprovisionerrorDiv").is(":visible") ? $("#EEprovisionerrorDiv").focus() : $("[id^=pleaseWaitTextId]:visible").focus();
                    else
                        $("#provisionerrorDiv").is(":visible") ? $("#provisionerrorDiv").focus() : $("[id^=pleaseWaitTextId]:visible").focus()
            }
        }
        else
            return
    }
}
var staticUiBaseGroupList = [{GroupName:"BaseCards",GroupResourceKey:"RI_CARDS_GROUP_BASECARDS",groupId:0,Cards:[{CardTypeId:"6c54f024-e4dd-40dd-ac05-92667ed7fa3b",CardResourceKey:"RI_CARDS_MEETINGTODAY"},{CardTypeId:"cf6bddd4-e712-4f1d-97b6-68d3a7788a97",CardResourceKey:"RI_CARDS_PHONECALLDUETODAY"},{CardTypeId:"64a6c256-e479-41f5-8719-d1afc4835fe8",CardResourceKey:"RI_CARDS_TASKDUETODAY"},{CardTypeId:"eec00a9d-0d1e-445a-83ad-a3a6fb603cd4",CardResourceKey:"RI_CARDS_FAXDUETODAY"},{CardTypeId:"e9bf7f81-442c-4145-bd43-f68ffc56cd54",CardResourceKey:"RI_CARDS_LETTERDUETODAY"},{CardTypeId:"7ac21a31-8c11-4239-8505-a9fd748439dc",CardResourceKey:"RI_CARDS_EMAILDUETODAY"},{CardTypeId:"8b087b1a-cf01-4203-921c-97dc156225ef",CardResourceKey:"RI_CARDS_SERVICEAPPOINTMENTDUETODAY"},{CardTypeId:"fc4ec2e1-7655-4c8c-a518-ea4bf1ef5721",CardResourceKey:"RI_CARDS_BASECUSTOMACTIVITYDUETODAY"},{CardTypeId:"c16b8555-d33a-4e98-8188-1b123efbd4e9",CardResourceKey:"RI_CARDS_CLOSEDATECOMINGSOON",ValueType:"int",ispubliccard:true},{CardTypeId:"4bc10670-4bcf-4c2d-87af-234a78f7c8a4",CardResourceKey:"RI_CARDS_MISSEDCLOSEDDATE",ispubliccard:true}]}],
    staticUiGroupList = [{GroupName:"EmailCardsfromExchange",GroupResourceKey:"RI_CARDS_GROUP_EMAILBASEDCARDSFROMEXCHANGE",groupId:1,infoIcon:true,Cards:[{CardTypeId:"99091b4d-ec9a-4113-bfe9-96c4e44a3559",CardResourceKey:"RI_CARDS_COMPETITORMENTIONED",ValueType:"bool"},{CardTypeId:"6e8ddce7-41f3-4449-8c64-ff8f407cdc66",CardResourceKey:"RI_CARDS_CUSTOMERQUESTION"},{CardTypeId:"c437e1b3-2aef-442d-8907-cc55439b5bd1",CardResourceKey:"RI_CARDS_FILEREQUESTED"},{CardTypeId:"6f8fb669-52e5-4abb-ae4a-102759795985",CardResourceKey:"RI_CARDS_ISSUEDETECTED"},{CardTypeId:"ea2ed0e8-503b-48d4-b9b5-3bec1966ca94",CardResourceKey:"RI_CARDS_MEETINGREQUESTED"},{CardTypeId:"5784d226-f30a-46e2-b193-c6d0591cc346",CardResourceKey:"RI_CARDS_NEWLEADUPSELLOPPORTUNITY"},{CardTypeId:"d6232578-c302-4035-894f-868d03ee465b",CardResourceKey:"RI_CARDS_STAKEHOLDERRECOMMENDATION",ValueType:"bool"},{CardTypeId:"a1c0c539-b8f1-4f95-8592-4211a3760f5d",CardResourceKey:"RI_CARDS_MISSEDEMAIL",ValueType:"int"},{CardTypeId:"ab8b0481-500c-4ef6-a074-5120f035b950",CardResourceKey:"RI_CARDS_OPPORTUNITYATRISKSENTIMENT"},{CardTypeId:"705efbed-7e6b-445f-bd7d-8c60572ded04",CardResourceKey:"RI_CARDS_MEETINGTODAY"},{CardTypeId:"7176dec3-1923-4f05-9fbc-575b5de9bdfc",CardResourceKey:"RI_CARDS_UPCOMINGMEETING"},{CardTypeId:"7dc5afee-3917-4ab2-841d-d230e9f38866",CardResourceKey:"RI_CARDS_RECENTMEETING"},{CardTypeId:"7e3c4a08-7e2e-4ec0-bfe5-840c8f91b607",CardResourceKey:"RI_CARDS_TASKDUETODAY"},{CardTypeId:"d8d36324-af9b-4cd5-8c52-d00bebd47e62",CardResourceKey:"RI_CARDS_OPPORTUNITYATRISKKTGMODEL"}]},{GroupName:"RelationshipAnalyticsCards",GroupResourceKey:"RI_CARDS_GROUP_RELATIONSHIPANALYTICSCARDS",groupId:2,Cards:[{CardTypeId:"34a086f2-917d-4382-a575-2c84eda0addb",CardResourceKey:"RI_CARDS_NOACTIVITYWITHACCOUNT",ValueType:"int",ispubliccard:true},{CardTypeId:"149ad417-dc4a-4fd0-957b-b59394abe520",CardResourceKey:"RI_CARDS_NOACTIVITYWITHCASE",ValueType:"int",ispubliccard:true},{CardTypeId:"d1b367d0-e6c4-41a0-be3f-f52d4de93eee",CardResourceKey:"RI_CARDS_NOACTIVITYWITHCONTACT",ValueType:"int",ispubliccard:true},{CardTypeId:"da9ca3b2-91ad-4c04-bfd8-da44043247a0",CardResourceKey:"RI_CARDS_NOACTIVITYWITHLEAD",ValueType:"int",ispubliccard:true},{CardTypeId:"654a4101-3717-4824-bf08-a4a92413d579",CardResourceKey:"RI_CARDS_NOACTIVITYWITHOPPORTUNITY",ValueType:"int",ispubliccard:true}]},{GroupName:"EmailEngagementCards ",GroupResourceKey:"RI_CARDS_GROUP_EMAILENGAGEMENTCARDS",groupId:3,AllwaysDisable:true,infoIcon:true,Cards:[{CardTypeId:"5304e0bf-9cd6-40b7-811b-9231463de0d5",CardResourceKey:"RI_CARDS_EMAILOPENED"},{CardTypeId:"17c5af61-217e-47d0-8815-aa38dffd8865",CardResourceKey:"RI_CARDS_EMAILREMINDER"}]},{GroupName:"ProductivityCards",GroupResourceKey:"RI_CARDS_GROUP_PRODUCTIVITYCARDS",groupId:4,Cards:[{CardTypeId:"0e8288aa-a9dc-4faf-af7a-aea6e9e4e757",CardResourceKey:"RI_CARDS_NEARBYCUSTOMERS"},{CardTypeId:"4a5dd3aa-ba13-417f-959a-b94875803bc2",CardResourceKey:"RI_CARDS_RELEVANTNEWS"},{CardTypeId:"2dc1ca86-7141-4b02-8050-7a07973b8468",CardResourceKey:"RI_CARDS_STOCKUPDATES"},{CardTypeId:"2a3e366c-783d-4160-8d7f-c0f858f34681",CardResourceKey:"RI_CARDS_UPCOMINGFLIGHT"},{CardTypeId:"d41bd04e-5722-4c31-a2fe-86d077a84127",CardResourceKey:"RI_CARDS_UPCOMINGMEETING"}]},{GroupName:"TodayCards",GroupResourceKey:"RI_CARDS_GROUP_TODAYCARDS",groupId:5,Cards:[{CardTypeId:"ea201d6c-cb0c-4402-9bd0-10ded4dacd20",CardResourceKey:"RI_CARDS_RECENTMEETING"},{CardTypeId:"efe036f9-fe71-499a-9e06-85a38e97747d",CardResourceKey:"RI_CARDS_TOPPEOPLE"},{CardTypeId:"efa13179-2359-457c-9b8b-21c197a450ae",CardResourceKey:"RI_CARDS_TOPRECORDS"}]}];
function LoadResources()
{
    var resourceKeyArray = ["RI_CARDOPTION_TITLE","RI_RA_Group_CollapseMessage","RI_RA_Group_ExpandMessage","RI_PublicCards_Hover_Message","RI_Tabs_UnSavedChanges","RI_Tabs_UnSavedChanges_dialog_Title","RI_Tabs_UnSavedChanges_dialog_Ok_Button_label","RI_Tabs_UnSavedChanges_dialog_Cancel_Button_label","RI_Tabs_UnSavedChanges_dialog_Cancel_Button_label","RI_CommonButtonSave_Tooltip","RI_Tab_Common_Tooltip","RI_Loading_Text","RelationshipIntelligence_SubArea_Title","RI_HeaderDescription","RI_CanNotShow_Error","RI_ExceptionMessage_RIFeatureDisable","RI_Disclaimer_TermsConditions_Text","RI_Disclaimer_ReadTermsCondLabel_Text","RI_Disclaimer_DisclaimerConsentLabel_Text","RI_DataConsent_Click_Here_Url","RI_Disclaimer_DisclaimerPrivacyStatementLabel_Text","RI_Disclaimer_Click_Feature_Technical_Documentation_LearnMore_Url","RI_Disclaimer_Continue_Text","RI_Package_Install_Text","RI_RelationshipAssistanceTab_Title","RI_Provisioning_AccessKeyUpdatePopUp_Admin_Entry_Link","RI_CommonButtonSave_Title","RI_EmailEngagementTab_ConsentLabel_ToolTip","RI_RelationshipAssistanceTab_UseActionCards","RI_EmailEngagementTab_ConsentLabel","RI_DataConsent_Click_LearnMore_Url","RI_RelationshipAnalyticsTab_Title","RI_lnkRAASolutionInstall_Text","RI_ActivityAnalysis_Solution_Install_Url","RI_RelationshipAssistanceTab_UserOption_ActionCardInfo","RI_RelationshipAssistanceTab_ActionCardInfo","RI_RA_Get_Error","RI_RA_Invalid_Input_Error","RI_RA_Save_Error","RI_RelationshipAnalytics_Get_Error_Message","RI_EmailEngagementTab_Title","RI_HowEngagedYourCustomer_Text","RI_Email_Engagement_Learnmore_Link_Url","RI_EmailEngagementTab_EmailCheckboxLabel","RI_Provisioning_ConsentLabel","RI_Provisioning_FeatureTechnicalDocumentation_Link_Text","RI_ExceptionMessage_RIFeatures_LoadingFailed","RI_Provisioning_ClickHereToUpdate_Link","RI_Provisioning_UnableToConnectService_Exception_Message","RI_Provisioning_Learnmore_Link_Text","RI_Provisioning_InformationLabel_Text","RI_Provisioning_AccessKeyUpdatePopUp_Header_Whatsthis_Link_Url","RI_Provisioning_AccessKeyUpdatePopUp_Header_Whatsthis_Link_Tooltip","RI_Provisioning_AccessKeyUpdatePopUp_Header_Title","RI_Provisioning_CustomerInsightshub_Link","RI_Provisioning_CustomerInsightshub_CreateTenantAzureUrl","RI_Provisioning_DontHaveHub_Lable","RI_Provisioning_UnableToSetupRI_Exception_Message","RI_Provisioning_UnableToSetupRI_Exception_Message_RelationshipInsights","RI_Provisioning_CustomerInsightsHub_InfoIcon_ToolTip","RI_Provisioning_AccessKey_Lable_Text","RI_Provisioning_AccessKey_ToolTip_Text","RI_Provisioning_RetypeAccessKey_Lable_Text","RI_Provisioning_Click_LearnMore_Url","RI_Provisioning_TenantURLLable","RI_Provisioning_BeginSetup_Button","RI_Provisioning_Success","RI_Provisioning_GotoSettings_Button","RI_Provisioning_TenantURL_Error_Message","RI_Provisioning_AccessPolicyKey_Error_Message","RI_Provisioning_AccessPolicyKetNotMatch_Exception_Message","RI_Provisioning_Popup_OkButtonText","RI_Provisioning_Popup_CancelButtonText","RI_Provisioning_AccessKeyUpdatePopUp_Header_Title_Description","RI_Provisioning_Waiting_Message","RI_Provisioning_VerifyInfo_Message","RI_Provisioning_SettingUp_Message","RI_Provisioning_FinishSetUp_Message","RI_Provisioning_ConsentLabel_ToolTip","RI_Provisioning_TenantUrl_WatermarkText","RI_Provisioning_AccessKey_WatermarkText","RI_Provisioning_ReEnterAccessKey_WatermarkText","RI_AutodataCaptureTab_Title","RI_AutodataCaptureTab_LearnmoreInfo","RI_AutoCapture_Learnmore_Link_Url","RI_AutodataCapture_CheckboxLabel","RI_ADC_Save_Error_Message","RI_SettingsTurnOff_Message","Settings_Privacy_Statement","RI_HowEngagedYourCustomer_Text_ToolTip","RI_AutodataCaptureTab_LearnmoreInfo_ToolTip","RI_Disclaimer_DisclaimerConsentLabel_Text_ToolTip","RI_Disclaimer_DisclaimerPrivacyStatementLabel_Text_ToolTip","RI_RelationshipAssistanceTab_ActionCardInfo_ToolTip","EE_Provisioning_InformationLabel_Text","EE_Provisioning_Message","EE_Provisioning_Waiting_Message","EE_Provisioning_UnableToSetupEE_Exception_Message","EE_Provisioning_UnableToSetupEE_Exception_Message_EmailEngagement","RI_Provisioning_Select_MSFT_Button","RI_Provisioning_Select_BYOS_Button","RI_Provisioning_DCI","RI_Basic_Disclaimer_TermsConditions_Text","RI_Select_Provisioning_Type","RI_OverviewTab_Title","RI_RA_BaseCard_Title","RI_RA_SalesInsights_Title","RI_RA_BaseCard_Content_Title","RI_RA_SalesInsights_Content_Title","RI_RA_BaseCard_Content_Description","RI_RA_SalesInsights_Content_Description","RI_RA_BaseCard_Status","RI_RA_SalesInsights_CardStatus","RI_RA_ConfigureLabel","RI_SI_InstallLabel"];
    loadResourcekeysForStaticData(resourceKeyArray);
    ResourceKeyValuesDictionary = xrmInternal.getStringKeyList(resourceKeyArray)
}
function loadDisclaimerResourceString()
{
    setAccessibility("riBasicDisclaimerDiv","RI_Basic_Disclaimer_TermsConditions_Text");
    setAccessibility("disClaimerTerms","RI_Disclaimer_TermsConditions_Text");
    setAccessibility("DisclaimerReadTermsCondLabel","RI_Disclaimer_ReadTermsCondLabel_Text");
    setAccessibilityForLinkButton("DisclaimerConsentLabel","RI_Disclaimer_DisclaimerConsentLabel_Text",1,HtmlDecodeString(getLocaleString("RI_DataConsent_Click_Here_Url")));
    setAccessibilityForLinkButton("DisclaimerPrivacyStatementLabel","RI_Disclaimer_DisclaimerPrivacyStatementLabel_Text",1,HtmlDecodeString(getLocaleString("RI_Disclaimer_Click_Feature_Technical_Documentation_LearnMore_Url")));
    setAccessibility("btnDisclaimerContinue","RI_Disclaimer_Continue_Text",1);
    setAccessibilityToCheckBoxControl("chkBoxdisclaimer","RI_Disclaimer_ReadTermsCondLabel_Text",1)
}
function loadRIPackageInstallResourceString()
{
    setAccessibility("btnpackageInstall","RI_Package_Install_Text",1)
}
function loadOVResourceStrings()
{
    setAccessibility("lblOVTitle","RI_OverviewTab_Title",1);
    var overview_TabTooltip = internalUtilities._String.format(relationshipInsightsTablTooltipResourceKey,HtmlDecodeString(getLocaleString("RI_OverviewTab_Title")));
    $("#lblOVTitle").attr({"aria-label":overview_TabTooltip,title:overview_TabTooltip});
    setAccessibility("lblBusiCardContentTitle","RI_RA_BaseCard_Content_Title",1);
    var RI_RA_BaseCard_Content_Title_Tooltip = internalUtilities._String.format(relationshipInsightsTablTooltipResourceKey,HtmlDecodeString(getLocaleString("RI_RA_BaseCard_Content_Title")));
    $("#lblBusiCardContentTitle").attr({"aria-label":RI_RA_BaseCard_Content_Title_Tooltip,title:RI_RA_BaseCard_Content_Title_Tooltip});
    setAccessibility("lblSalesCardContentTitle","RI_RA_SalesInsights_Content_Title",1);
    var RI_RA_SalesInsights_Content_Title_Tooltip = internalUtilities._String.format(relationshipInsightsTablTooltipResourceKey,HtmlDecodeString(getLocaleString("RI_RA_SalesInsights_Content_Title")));
    $("#lblSalesCardContentTitle").attr({"aria-label":RI_RA_SalesInsights_Content_Title_Tooltip,title:RI_RA_SalesInsights_Content_Title_Tooltip});
    setAccessibility("lblBusiCardContentDesc","RI_RA_BaseCard_Content_Description",1);
    var RI_RA_BaseCard_Content_Description_Tooltip = internalUtilities._String.format(relationshipInsightsTablTooltipResourceKey,HtmlDecodeString(getLocaleString("RI_RA_BaseCard_Content_Description")));
    $("#lblBusiCardContentDesc").attr({"aria-label":RI_RA_BaseCard_Content_Description_Tooltip,title:RI_RA_BaseCard_Content_Description_Tooltip});
    setAccessibility("lblSalesCardContentDesc","RI_RA_SalesInsights_Content_Description",1);
    var RI_RA_SalesInsights_Content_Description_Tooltip = internalUtilities._String.format(relationshipInsightsTablTooltipResourceKey,HtmlDecodeString(getLocaleString("RI_RA_SalesInsights_Content_Description")));
    $("#lblSalesCardContentDesc").attr({"aria-label":RI_RA_SalesInsights_Content_Description_Tooltip,title:RI_RA_SalesInsights_Content_Description_Tooltip});
    setAccessibility("lblBusiCardStatus","RI_RA_BaseCard_Status",1);
    var RI_RA_BaseCard_Status_Tooltip = internalUtilities._String.format(relationshipInsightsTablTooltipResourceKey,HtmlDecodeString(getLocaleString("RI_RA_BaseCard_Status")));
    $("#lblBusiCardStatus").attr({"aria-label":RI_RA_BaseCard_Status_Tooltip,title:RI_RA_BaseCard_Status_Tooltip});
    setAccessibility("lblSalesInsightsStatus","RI_RA_SalesInsights_CardStatus",1);
    var RI_RA_SalesInsights_CardStatus_Tooltip = internalUtilities._String.format(relationshipInsightsTablTooltipResourceKey,HtmlDecodeString(getLocaleString("RI_RA_SalesInsights_CardStatus")));
    $("#lblSalesInsightsStatus").attr({"aria-label":RI_RA_SalesInsights_CardStatus_Tooltip,title:RI_RA_SalesInsights_CardStatus_Tooltip});
    setAccessibility("lblConfigure","RI_RA_ConfigureLabel",1);
    var RI_RA_ConfigureLabel_Tooltip = internalUtilities._String.format(relationshipInsightsTablTooltipResourceKey,HtmlDecodeString(getLocaleString("RI_RA_ConfigureLabel")));
    $("#lblConfigure").attr({"aria-label":RI_RA_ConfigureLabel_Tooltip,title:RI_RA_ConfigureLabel_Tooltip});
    setAccessibility("lblInstall","RI_SI_InstallLabel",1);
    var RI_SI_InstallLabel_Tooltip = internalUtilities._String.format(relationshipInsightsTablTooltipResourceKey,HtmlDecodeString(getLocaleString("RI_SI_InstallLabel")));
    $("#lblInstall").attr({"aria-label":RI_SI_InstallLabel_Tooltip,title:RI_SI_InstallLabel_Tooltip})
}
function loadRAResourceStrings()
{
    setAccessibility("lblRATitle","RI_RelationshipAssistanceTab_Title",1);
    var relationshipAssistant_TabTooltip = internalUtilities._String.format(relationshipInsightsTablTooltipResourceKey,HtmlDecodeString(getLocaleString("RI_RelationshipAssistanceTab_Title")));
    $("#lblRATitle").attr({"aria-label":relationshipAssistant_TabTooltip,title:relationshipAssistant_TabTooltip});
    setAccessibility("updatePopUpEntryLink","RI_Provisioning_AccessKeyUpdatePopUp_Admin_Entry_Link",1);
    applyResourceKeyToControl("spnRASave","RI_CommonButtonSave_Title");
    saveButtonTooltip = internalUtilities._String.format(saveTooltipResourceKey,HtmlDecodeString(getLocaleString("RI_RelationshipAssistanceTab_Title")));
    $("#btnSave").attr({"aria-label":saveButtonTooltip,title:saveButtonTooltip,tabindex:"3"});
    setAccessibility("relationInfoIcon",HtmlDecodeString(getLocaleString("RI_EmailEngagementTab_ConsentLabel_ToolTip")),"",true);
    setAccessibility("spnACEnableUse","RI_RelationshipAssistanceTab_UseActionCards");
    setAccessibilityForLinkButton("spnConsentRA","RI_EmailEngagementTab_ConsentLabel",2,HtmlDecodeString(getLocaleString("RI_DataConsent_Click_LearnMore_Url")));
    setAccessibility("textRACardPreviewnotAvailable",previewTurnOffMessageByTabTitle(HtmlDecodeString(getLocaleString("RI_RelationshipAssistanceTab_Title"))),"",true);
    setAccessibilityToCheckBoxControl("chkActionCardEnableOption","RI_RelationshipAssistanceTab_UseActionCards",2)
}
function loadAnalyticResourceString()
{
    setAccessibility("RAATabTitle","RI_RelationshipAnalyticsTab_Title",1);
    var relationshipAnalytics_TabTooltip = internalUtilities._String.format(relationshipInsightsTablTooltipResourceKey,HtmlDecodeString(getLocaleString("RI_RelationshipAnalyticsTab_Title")));
    $("#RAATabTitle").attr({"aria-label":relationshipAnalytics_TabTooltip,title:relationshipAnalytics_TabTooltip});
    setAccessibilityForAnchorTag("lnkRAASolutionInstall","RI_lnkRAASolutionInstall_Text",2,"RI_ActivityAnalysis_Solution_Install_Url");
    setAccessibility("textRAApreviewnotAvailable",previewTurnOffMessageByTabTitle(HtmlDecodeString(getLocaleString("RI_RelationshipAnalyticsTab_Title"))),"",true)
}
function loadRelationshipAssistanceTab()
{
    try
    {
        if(isopenedfrompersonaloptions)
        {
            setAccessibilityForLinkButton("spnActionCardsDesc","RI_RelationshipAssistanceTab_UserOption_ActionCardInfo",2,HtmlDecodeString(getLocaleString("RI_DataConsent_Click_LearnMore_Url")));
            $("#OrgSettingDiv").css("display","none");
            $("#privacystatementdivision").css("display","none")
        }
        else
        {
            setAccessibilityForLinkButton("spnActionCardsDesc","RI_RelationshipAssistanceTab_ActionCardInfo",2,HtmlDecodeString(getLocaleString("RI_DataConsent_Click_LearnMore_Url")));
            var ActioncardChkbxctrl = $("#chkActionCardEnableOption");
            ActioncardChkbxctrl !== undefined && ActioncardChkbxctrl !== null && 
                ActioncardChkbxctrl.prop("checked",isRIActionCardOrgSettingEnabled)
        }
        loadActionCards()
    }
    catch(error)
    {
        xrmUtility.confirmDialog(HtmlDecodeString(getLocaleString("RI_RA_Get_Error")))
    }
}
function loadResourcekeysForStaticData(arr)
{
    for(var i = 0; i < staticUiBaseGroupList.length; i++)
    {
        var currentGroupObject = staticUiBaseGroupList[i],
            currentGroupResourceKey = staticUiBaseGroupList[i].GroupResourceKey;
        arr.push(currentGroupResourceKey + "_TITLE");
        arr.push(currentGroupResourceKey + "_INFOICONMESSAGE");
        for(var j = 0; j < currentGroupObject.Cards.length; j++)
        {
            var currentCardResourceKey = currentGroupObject.Cards[j].CardResourceKey;
            arr.push(currentCardResourceKey + "_TITLE");
            arr.push(currentCardResourceKey + "_SECTITLE");
            arr.push(currentCardResourceKey + "_TOOLTIP")
        }
    }
    for(var i = 0; i < staticUiGroupList.length; i++)
    {
        var currentGroupObject = staticUiGroupList[i],
            currentGroupResourceKey = staticUiGroupList[i].GroupResourceKey;
        arr.push(currentGroupResourceKey + "_TITLE");
        arr.push(currentGroupResourceKey + "_INFOICONMESSAGE");
        for(var j = 0; j < currentGroupObject.Cards.length; j++)
        {
            var currentCardResourceKey = currentGroupObject.Cards[j].CardResourceKey;
            arr.push(currentCardResourceKey + "_TITLE");
            arr.push(currentCardResourceKey + "_SECTITLE");
            arr.push(currentCardResourceKey + "_TOOLTIP")
        }
    }
}
function loadActionCards()
{
    try
    {
        showLoadingIconOfTab(currentwindow.parent.Mscrm.FeatureNames.ActionCard);
        modifiedCards = [];
        var fetchXmlforcardtype = "<fetch mapping='logical'><entity name='cardtype'><attribute name='cardtypeid'/><attribute name='isenabled'/><attribute name='cardname'/><attribute name='cardtype'/><attribute name='intcardoption'/><attribute name='boolcardoption'/><attribute name='stringcardoption'/><attribute name='ispreviewcard'/><attribute name='isliveonly'/></entity></fetch>";
        xrmInternal.messages.retrieveMultiple(fetchXmlforcardtype).then(function(retrieveCardtypeResponse)
        {
            if(retrieveCardtypeResponse != undefined && retrieveCardtypeResponse != null)
            {
                var cardTypeCollection = retrieveCardtypeResponse.get_entityCollection();
                if(cardTypeCollection != null && cardTypeCollection.get_entities() != null && cardTypeCollection.get_entities().length > 0)
                {
                    dbDataList = cardTypeCollection.get_entities();
                    getUserActionCards()
                }
            }
        },internalUtilities.ClientApiUtility.actionFailedCallback)
    }
    catch(error)
    {
        xrmUtility.confirmDialog(HtmlDecodeString(getLocaleString("RI_RA_Get_Error")))
    }
}
function hidePageLoadingIcon()
{
    var loadIcon = $("#pageloaddiv");
    loadIcon !== undefined && loadIcon !== null && 
        loadIcon.addClass("displaynone")
}
function showPageLoadingIcon()
{
    var loadIcon = $("#pageloaddiv");
    loadIcon !== undefined && loadIcon !== null && 
        loadIcon.removeClass("displaynone")
}
function showLoadingIconOfTab(featurename)
{
    if(featurename == currentwindow.parent.Mscrm.FeatureNames.ActionCard)
        $("#cardsloaddiv").removeClass("displaynone");
    else
        if(featurename == currentwindow.parent.Mscrm.FeatureNames.AutoDataCapture)
            $("#autocaptureloaddiv").removeClass("displaynone");
        else
            featurename == currentwindow.parent.Mscrm.FeatureNames.EmailEngagement && 
                $("#emailengagementloaddiv").removeClass("displaynone")
}
function hideLoadingIconOfTab(featurename)
{
    if(featurename == currentwindow.parent.Mscrm.FeatureNames.ActionCard)
        $("#cardsloaddiv").addClass("displaynone");
    else
        if(featurename == currentwindow.parent.Mscrm.FeatureNames.AutoDataCapture)
            $("#autocaptureloaddiv").addClass("displaynone");
        else
            featurename == currentwindow.parent.Mscrm.FeatureNames.EmailEngagement && 
                $("#emailengagementloaddiv").addClass("displaynone")
}
function getUserActionCards()
{
    if(!isopenedfrompersonaloptions)
    {
        loadGroupsAndCardsHtml();
        return
    }
    var fetchXmlforusercards = "<fetch mapping='logical'><entity name='actioncardusersettings'><attribute name='actioncardusersettingsid'/><attribute name='cardtypeid'/><attribute name='isenabled'/><attribute name='cardtype'/><attribute name='intcardoption'/><attribute name='boolcardoption'/><attribute name='stringcardoption'/><attribute name='ownerid'/><filter type='and'><condition attribute='ownerid' operator='eq' value='" + userId + "'/></filter></entity></fetch>";
    xrmInternal.messages.retrieveMultiple(fetchXmlforusercards).then(function(response)
    {
        if(response != undefined && response != null)
        {
            var userCardsCollection = response.get_entityCollection();
            if(userCardsCollection != null && userCardsCollection.get_entities() != null && userCardsCollection.get_entities().length > 0)
            {
                userCardsList = userCardsCollection.get_entities();
                updateMatchedDbCardTypesWithUserActionCards()
            }
            loadGroupsAndCardsHtml()
        }
    },internalUtilities.ClientApiUtility.actionFailedCallback)
}
function updateMatchedDbCardTypesWithUserActionCards()
{
    if(userCardsList.length > 0 && dbDataList.length > 0)
        for(var i = 0; i < userCardsList.length; i++)
            for(var j = 0; j < dbDataList.length; j++)
                if(userCardsList[i].fields["cardtypeid"].Id.toString() == dbDataList[j].fields["cardtypeid"].toString())
                {
                    userCardsList[i].fields["isenabled"] !== undefined && dbDataList[j].fields["isenabled"] !== undefined && 
                        dbDataList[j].fields["isenabled"].set_value(userCardsList[i].fields["isenabled"].get_value());
                    if(userCardsList[i].fields["intcardoption"] !== undefined && dbDataList[j].fields["intcardoption"] !== undefined)
                        dbDataList[j].fields["intcardoption"] = userCardsList[i].fields["intcardoption"];
                    userCardsList[i].fields["boolcardoption"] !== undefined && dbDataList[j].fields["boolcardoption"] !== undefined && 
                        dbDataList[j].fields["boolcardoption"].set_value(userCardsList[i].fields["boolcardoption"].get_value());
                    break
                }
}
function checkIfOnlyBaseCards()
{
    return !islive || !isDeclaimerEnabled
}
function loadGroupsAndCardsHtml()
{
    setCardObjectForRendering(staticUiBaseGroupList);
    !checkIfOnlyBaseCards() && isRIActionCardOrgSettingEnabled && 
        setCardObjectForRendering(staticUiGroupList);
    $("#actionCardTreebase") !== undefined && "#actionCardTreebase" !== null && 
        $("#actionCardTreebase").empty();
    $("#actioncardGroupTemplate").tmpl(staticUiBaseGroupList).appendTo("#actionCardTreebase");
    if(isRIActionCardOrgSettingEnabled)
    {
        $("#actionCardTree") !== undefined && "#actionCardTree" !== null && 
            $("#actionCardTree").empty();
        if(isSolutionInstalled)
        {
            $("#privacystatementdivision").removeClass("displaynone");
            $("#actionCardTree").removeClass("displaynone");
            $("#actioncardGroupTemplate").tmpl(staticUiGroupList).appendTo("#actionCardTree")
        }
        else
        {
            $("#privacystatementdivision").addClass("displaynone");
            $("#actionCardTree").addClass("displaynone")
        }
    }
    else
    {
        $("#actionCardTree").addClass("displaynone");
        !isSolutionInstalled && 
            $("#privacystatementdivision").addClass("displaynone")
    }
    if(direction === "ltr")
        $("li.li-style-width").css("padding-left","30px");
    else
        $("li.li-style-width").css("padding-right","30px");
    hideLoadingIconOfTab(currentwindow.parent.Mscrm.FeatureNames.ActionCard);
    ApplyReadOnly();
    if(checkIfOnlyBaseCards())
    {
        $("#grouplinkimg_0").attr("src",imagePathExpand);
        $("#groupcardList_0").css("display","")
    }
}
function setCardObjectForRendering(staticUiGroupList)
{
    for(var i = 0; i < staticUiGroupList.length; i++)
    {
        var currentGroupObject = staticUiGroupList[i];
        currentGroupObject.groupName = HtmlDecodeString(getLocaleString(currentGroupObject.GroupResourceKey + "_TITLE"));
        currentGroupObject.isgroupcheckboxchecked = "checked";
        currentGroupObject.infoiconclass = "displaynone";
        currentGroupObject.grouptooltip = groupExpandToolTip;
        currentGroupObject.infoicontooltip = "";
        currentGroupObject.groupnavbariconsrc = isHighContrastEnabled === true ? "/_imgs/RelationshipIntelligenceConfig/nav_bar_HighContrast.png" : "/_imgs/RelationshipIntelligenceConfig/nav_bar.png";
        if(currentGroupObject.infoIcon !== undefined && currentGroupObject.infoIcon === true)
        {
            currentGroupObject.infoiconsrc = isHighContrastEnabled === true ? "/_imgs/RelationshipIntelligenceConfig/Information_HighContrast.png" : "/_imgs/RelationshipIntelligenceConfig/Information.png";
            currentGroupObject.infoiconclass = "displayinline";
            currentGroupObject.infoicontooltip = HtmlDecodeString(getLocaleString(currentGroupObject.GroupResourceKey + "_INFOICONMESSAGE"))
        }
        for(var j = 0; j < currentGroupObject.Cards.length; j++)
        {
            var currentObject = currentGroupObject.Cards[j];
            currentObject.ispubliccardclass = "";
            currentObject.ispubliccarddisabled = "";
            if(currentObject != undefined && currentObject.CardTypeId != "")
            {
                currentObject.title = HtmlDecodeString(getLocaleString(currentObject.CardResourceKey + "_TITLE"));
                currentObject.previewiconsrc = isHighContrastEnabled === true ? "/_imgs/RelationshipIntelligenceConfig/Preview_Card_HighContrast.png" : "/_imgs/RelationshipIntelligenceConfig/Preview_Card.png";
                if(currentObject.ValueType !== undefined && currentObject.ValueType !== null)
                    currentObject.secTitle = HtmlDecodeString(getLocaleString(currentObject.CardResourceKey + "_SECTITLE"));
                currentObject.tooltip = HtmlDecodeString(getLocaleString(currentObject.CardResourceKey + "_TOOLTIP"));
                var corespondingDBObject = getCardByIdFromDbList(currentObject.CardTypeId);
                if(corespondingDBObject != undefined && corespondingDBObject != null)
                {
                    currentObject.counterclass = currentGroupObject.groupId;
                    currentObject.cardsCounterclass = j;
                    currentObject.ischecked = corespondingDBObject.fields["isenabled"].get_ValueString() == "1" ? "checked" : "";
                    currentObject.booloptionvalue = corespondingDBObject.fields["boolcardoption"].get_ValueString() === "1" ? "checked" : "";
                    currentObject.txtboxVal = corespondingDBObject.fields["intcardoption"] === undefined || corespondingDBObject.fields["intcardoption"] === null ? "" : corespondingDBObject.fields["intcardoption"];
                    currentObject.cardTypeId = corespondingDBObject.fields["cardtypeid"].toString();
                    currentObject.cardTypeChkbox = i + "_" + corespondingDBObject.fields["cardtypeid"].toString();
                    currentObject.cardoptionsResourceKey = cardoptionsResourceKey;
                    if(currentObject.ispubliccard !== undefined && currentObject.ispubliccard === true && isopenedfrompersonaloptions)
                    {
                        currentObject.ispubliccarddisabled = "disabled";
                        currentObject.publiccardtooltip = publicCardTooltip
                    }
                    if(corespondingDBObject.fields["isenabled"].get_ValueString() == "0")
                        currentGroupObject.isgroupcheckboxchecked = ""
                }
            }
        }
        currentGroupObject.Cards.sort(SortActionCards)
    }
}
function SortActionCards(actionCardA,actionCardB)
{
    if(actionCardA !== undefined && actionCardA != null && actionCardA.title !== undefined && (actionCardB !== undefined && actionCardB != null && actionCardB.title !== undefined))
        return actionCardA.title < actionCardB.title ? -1 : actionCardA.title > actionCardB.title ? 1 : 0;
    else
        return -1
}
function ApplyReadOnly()
{
    $("#groupcardList_3 :input").attr("disabled",true);
    !isEmailEnagagementEnabled && 
        $("#card_3").hide()
}
function previewcardChangeImage(currentitem)
{
    var cardId = currentitem.id;
    $("#" + cardId).on({mouseover:function()
    {
        if($("#" + cardId).find("img") !== undefined && $("#" + cardId).find("img") !== null)
        {
            var imgSrc = isHighContrastEnabled === true ? "/_imgs/RelationshipIntelligenceConfig/Preview_Card_Hover_HighContrast_16.png" : "/_imgs/RelationshipIntelligenceConfig/Preview_Card_Hover_16.png";
            $("#" + cardId).find("img").attr("src",imgSrc)
        }
    },mouseout:function()
    {
        if($("#" + cardId).find("img") !== undefined && $("#" + cardId).find("img") !== null)
        {
            var imgSrc = isHighContrastEnabled === true ? "/_imgs/RelationshipIntelligenceConfig/Preview_Card_HighContrast.png" : "/_imgs/RelationshipIntelligenceConfig/Preview_Card.png";
            $("#" + cardId).find("img").attr("src",imgSrc)
        }
    }})
}
function toggleGroup(currentitem,event)
{
    var currentitemId = currentitem.id,
        index = currentitemId.substr(currentitemId.indexOf("_") + 1);
    if(event.type === "keydown" && event.keyCode === 13 || event.type === "mousedown" && event.which === 1)
    {
        if($("[id^='groupcardList_" + index + "']")[0].style.display == "none")
        {
            $("#" + currentitemId).attr({"aria-label":groupCollapseToolTip,title:groupCollapseToolTip});
            currentitem.childNodes[1].src = isHighContrastEnabled === true ? imagePathExpandHighContrast : imagePathExpand;
            $("[id^='groupcardList_" + index + "']")[0].style.display = ""
        }
        else
        {
            $("#" + currentitemId).attr({"aria-label":groupExpandToolTip,title:groupExpandToolTip});
            currentitem.childNodes[1].src = isHighContrastEnabled === true ? imagePathToggleHighContrast : imagePathToggle;
            $("[id^='groupcardList_" + index + "']")[0].style.display = "none"
        }
        if(event.type === "keydown")
            $("#" + currentitemId).focus();
        else
        {
            $("#" + currentitemId).blur();
            event.preventDefault()
        }
    }
}
function checkedUncheckedAll(currentItem)
{
    var checkBoxid = currentItem.id.substr("groupcardList_checkBox_".length,currentItem.id.length - "groupcardList_checkBox_".length);
    $("#groupcardList_" + checkBoxid).find(".select_" + checkBoxid).each(function()
    {
        var ismodified = false;
        if(currentItem.checked)
        {
            if(!this.checked)
            {
                this.checked = true;
                ismodified = true
            }
        }
        else
        {
            this.checked = false;
            ismodified = true
        }
        if(ismodified && this.name != undefined && this.name != "")
        {
            var cardId = this.name.substr(this.name.indexOf("_") + 1);
            addCardToModifiedList(cardId,this.checked,"","")
        }
    })
}
function checkedUncheckedCardGroup(currentItem)
{
    var checkBoxid = currentItem.name.substr(0,currentItem.name.indexOf("_"));
    if($(".select_" + checkBoxid + ":checked").length == $(".select_" + checkBoxid).length)
        $("#groupcardList_checkBox_" + checkBoxid).prop("checked",true);
    else
        $("#groupcardList_checkBox_" + checkBoxid).prop("checked",false);
    if(currentItem.name != undefined && currentItem.name != "")
    {
        var cardId = currentItem.name.substr(currentItem.name.indexOf("_") + 1);
        addCardToModifiedList(cardId,currentItem.checked,"","")
    }
}
function secondaryValueOnChange(currentItem)
{
    var cardId = "",
        cardSecondaryValue = "",
        cardOptionType = "";
    if($(currentItem).is("input:text"))
    {
        if(currentItem.value === null || currentItem.value === undefined || isNaN(currentItem.value) || currentItem.value === "" || currentItem.value < 1 || currentItem.value > 2147483647)
        {
            var secondaryTxtBoxVal = internalUtilities._String.format(HtmlDecodeString(getLocaleString("RI_RA_Invalid_Input_Error")),currentItem.value);
            xrmUtility.confirmDialog(secondaryTxtBoxVal);
            $(currentItem).focus();
            return
        }
        cardId = currentItem.id.substr("cardtype-txtbox-".length,currentItem.id.length - "cardtype-txtbox-".length);
        cardSecondaryValue = Math.floor(currentItem.value);
        cardOptionType = "int"
    }
    if($(currentItem).is("input:checkbox"))
    {
        cardId = currentItem.id.substr("cardtype-chkbox-".length,currentItem.id.length - "cardtype-chkbox-".length);
        cardSecondaryValue = currentItem.checked;
        cardOptionType = "bool"
    }
    addCardToModifiedList(cardId,null,cardSecondaryValue,cardOptionType)
}
function addCardToModifiedList(cardId,isEnabled,cardSecondaryValue,cardOptionType)
{
    if(cardId != undefined && cardId != "")
    {
        for(var iscardExists = false,
            i = 0; i < modifiedCards.length; i++)
            if(isEnabled !== undefined && isEnabled !== null && modifiedCards[i].cardTypeId == cardId && cardSecondaryValue == "" && cardOptionType == "")
            {
                modifiedCards[i].isEnabled = isEnabled;
                iscardExists = true;
                break
            }
            else
                if(modifiedCards[i].cardTypeId == cardId && cardOptionType != "")
                {
                    modifiedCards[i].seconaryValue = cardSecondaryValue;
                    modifiedCards[i].optionType = cardOptionType;
                    iscardExists = true;
                    break
                }
        if(!iscardExists)
        {
            var cardDetails;
            cardDetails = {cardTypeId:cardId,cardType:"",seconaryValue:cardSecondaryValue,optionType:cardOptionType};
            if(isEnabled !== undefined && isEnabled !== null)
                cardDetails.isEnabled = isEnabled;
            modifiedCards.push(cardDetails)
        }
    }
}
function compareWithDbValueAndClean()
{
    var cleanedCards = modifiedCards;
    if(modifiedCards.length > 0)
        for(var i = 0; i < modifiedCards.length; i++)
        {
            var dbcard = getCardByIdFromDbList(modifiedCards[i].cardTypeId),
                isenabled = dbcard.fields["isenabled"].get_ValueString() == "1" ? true : false;
            cleanedCards[i].cardType = dbcard.fields["cardtype"];
            cleanedCards[i].cardName = dbcard.fields["cardname"];
            modifiedCards[i].isEnabled != undefined && modifiedCards[i].isEnabled != null && isenabled == modifiedCards[i].isEnabled && 
                cleanedCards.splice(i,1)
        }
    return cleanedCards
}
function getCardByIdFromDbList(cardid)
{
    for(var i = 0; i < dbDataList.length; i++)
        if(dbDataList[i].fields["cardtypeid"].toString() == cardid)
            return dbDataList[i]
}
function saveActionCards()
{
    try
    {
        var entityRecords = [],
            cardlist = compareWithDbValueAndClean();
        if(!isopenedfrompersonaloptions)
        {
            var isActionCardOptionEnabled = $("#chkActionCardEnableOption").is(":checked");
            if(isRIActionCardOrgSettingEnabled != isActionCardOptionEnabled)
            {
                var attributeDetails = prepareAttributesForOrgSettings(isActionCardOptionEnabled,"isactioncardenabled"),
                    entity = prepareEntityRecord(organizationId,internalUtilities.EntityNames.Organization,attributeDetails);
                if(entity != null)
                {
                    isRIActionCardOrgSettingEnabled = isActionCardOptionEnabled;
                    entityRecords.push(entity);
                    AddFeatureTelemetryLog(actionCardfeature,isActionCardOptionEnabled ? enableMsgType : disableMsgType,"Action Card feature (non base card) bit [isactioncardenabled] is getting updated with value : " + isActionCardOptionEnabled)
                }
            }
        }
        if(cardlist != null && cardlist.length > 0)
            for(var i = 0; i < cardlist.length; i++)
            {
                var entity = null,
                    attributeDetails = null;
                if(isopenedfrompersonaloptions)
                {
                    cardlist[i].initiatedByUser = true;
                    var userActionCardSettingId = getUserActionCardId(cardlist[i]);
                    if(userActionCardSettingId != null)
                    {
                        attributeDetails = prepareAttributesForCard(cardlist[i]);
                        entity = prepareEntityRecord(userActionCardSettingId,"actioncardusersettings",attributeDetails)
                    }
                    else
                        createUserCardDetail(cardlist[i])
                }
                else
                {
                    cardlist[i].initiatedByUser = false;
                    attributeDetails = prepareAttributesForCard(cardlist[i]);
                    entity = prepareEntityRecord(cardlist[i].cardTypeId,"cardtype",attributeDetails)
                }
                entity != null && 
                    entityRecords.push(entity)
            }
        if(entityRecords.length > 0)
        {
            update(entityRecords,currentwindow.parent.Mscrm.FeatureNames.ActionCard,cardlist);
            modifiedCards = []
        }
        else
        {
            loadActionCards();
            setDefaultFocusToActiveTab()
        }
    }
    catch(error)
    {
        xrmUtility.confirmDialog(HtmlDecodeString(getLocaleString("RI_RA_Save_Error")))
    }
}
function prepareAttributesForCard(card)
{
    var attributeNames = [],
        attributeTypes = {},
        attributeValues = {};
    if(card.optionType != "")
        if(card.optionType == "bool")
        {
            attributeNames.push("boolcardoption");
            attributeTypes["boolcardoption"] = xrmObjects.AttributeType.boolean;
            attributeValues["boolcardoption"] = card.seconaryValue
        }
        else
            if(card.optionType == "int")
            {
                attributeNames.push("intcardoption");
                attributeTypes["intcardoption"] = xrmObjects.AttributeType.integer;
                attributeValues["intcardoption"] = card.seconaryValue
            }
    if(card.isEnabled !== undefined && card.isEnabled !== null)
    {
        attributeNames.push("isenabled");
        attributeTypes["isenabled"] = xrmObjects.AttributeType.boolean;
        attributeValues["isenabled"] = card.isEnabled
    }
    return {attributeNames:attributeNames,attributeTypes:attributeTypes,attributeValues:attributeValues}
}
function prepareAttributesForOrgSettings(isenabled,columnname)
{
    var attributeNames = new Array(0),
        attributeTypes = {},
        attributeValues = {};
    attributeNames[attributeNames.length] = columnname;
    attributeTypes[columnname] = xrmObjects.AttributeType.boolean;
    attributeValues[columnname] = isenabled;
    return {attributeNames:attributeNames,attributeTypes:attributeTypes,attributeValues:attributeValues}
}
function prepareEntityRecord(id,tablename,attributeDetails)
{
    if(attributeDetails != undefined)
    {
        var entity = new xrmObjects.EntityReference(tablename,new currentwindow.parent.parent.Microsoft.Crm.Client.Core.Framework.Guid(id)),
            entityRecord = new currentwindow.parent.parent.Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord(entity,attributeDetails.attributeValues,attributeDetails.attributeTypes,{},{},new currentwindow.parent.parent.Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
        entityRecord.get_changedFieldNames().addRange(attributeDetails.attributeNames);
        return entityRecord
    }
    return null
}
function createUserCardDetail(card)
{
    try
    {
        var attributeNames = "",
            attributeTypes = {},
            attributeValues = {};
        if(card.optionType != "")
        {
            attributeNames = new Array(6);
            attributeNames[0] = "cardtypeid";
            attributeNames[1] = "isenabled";
            attributeNames[2] = "cardtype";
            attributeNames[3] = "ownerid";
            attributeNames[4] = "owneridtype";
            attributeTypes["cardtypeid"] = xrmObjects.AttributeType.lookup;
            attributeTypes["isenabled"] = xrmObjects.AttributeType.boolean;
            attributeTypes["cardtype"] = xrmObjects.AttributeType.integer;
            attributeTypes["ownerid"] = xrmObjects.AttributeType.owner;
            attributeTypes["owneridtype"] = xrmObjects.AttributeType.integer;
            attributeValues["cardtypeid"] = new xrmObjects.EntityReference("cardtype",new currentwindow.parent.parent.Microsoft.Crm.Client.Core.Framework.Guid(card.cardTypeId));
            attributeValues["isenabled"] = card.isEnabled;
            attributeValues["cardtype"] = card.cardType;
            attributeValues["ownerid"] = new xrmObjects.EntityReference(internalUtilities.EntityNames.SystemUser,new currentwindow.parent.parent.Microsoft.Crm.Client.Core.Framework.Guid(userId));
            attributeValues["owneridtype"] = internalUtilities.EntityTypeCode.SystemUser;
            if(card.optionType == "bool")
            {
                attributeNames[5] = "boolcardoption";
                attributeTypes["boolcardoption"] = xrmObjects.AttributeType.boolean;
                attributeValues["boolcardoption"] = card.seconaryValue
            }
            else
                if(card.optionType == "int")
                {
                    attributeNames[5] = "intcardoption";
                    attributeTypes["intcardoption"] = xrmObjects.AttributeType.integer;
                    attributeValues["intcardoption"] = card.seconaryValue
                }
        }
        else
        {
            attributeNames = new Array(5);
            attributeNames[0] = "cardtypeid";
            attributeNames[1] = "isenabled";
            attributeNames[2] = "cardtype";
            attributeNames[3] = "ownerid";
            attributeNames[4] = "owneridtype";
            attributeTypes["cardtypeid"] = xrmObjects.AttributeType.lookup;
            attributeTypes["isenabled"] = xrmObjects.AttributeType.boolean;
            attributeTypes["cardtype"] = xrmObjects.AttributeType.integer;
            attributeTypes["ownerid"] = xrmObjects.AttributeType.owner;
            attributeTypes["owneridtype"] = xrmObjects.AttributeType.integer;
            attributeValues["cardtypeid"] = new xrmObjects.EntityReference("cardtype",new currentwindow.parent.parent.Microsoft.Crm.Client.Core.Framework.Guid(card.cardTypeId));
            attributeValues["isenabled"] = card.isEnabled;
            attributeValues["cardtype"] = card.cardType;
            attributeValues["ownerid"] = new xrmObjects.EntityReference(internalUtilities.EntityNames.SystemUser,new currentwindow.parent.parent.Microsoft.Crm.Client.Core.Framework.Guid(userId));
            attributeValues["owneridtype"] = internalUtilities.EntityTypeCode.SystemUser
        }
        var entity = new xrmObjects.EntityReference("actioncardusersettings",currentwindow.parent.parent.Microsoft.Crm.Client.Core.Framework.Guid.get_empty()),
            usercardDetails = new currentwindow.parent.parent.Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord(entity,attributeValues,attributeTypes,{},{},new currentwindow.parent.parent.Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
        usercardDetails.get_changedFieldNames().addRange(attributeNames);
        xrmInternal.messages.create(usercardDetails).then(function(Resposne)
        {
        },internalUtilities.ClientApiUtility.actionFailedCallback)
    }
    catch(error)
    {
        xrmInternal.openErrorDialog(error)
    }
}
function renderConfigPage()
{
    var isRIThirdPartySolutionEnabled = isopenedfrompersonaloptions ? currentwindow.FeatureControl[currentwindow.parent.Mscrm.FeatureNames.RIThirdPartySolution] : currentContext.isFeatureEnabled(currentwindow.parent.Mscrm.FeatureNames.RIThirdPartySolution);
    if(!isRIThirdPartySolutionEnabled)
    {
        getOrgSettings();
        return
    }
    getRISolutionInstalled()
}
function getOrgSettings()
{
    try
    {
        var columnNames = ["organizationid","isactioncardenabled","isemailmonitoringallowed","isautodatacaptureenabled","isactivityanalysisenabled","isrelationshipinsightsenabled"];
        xrmInternal.messages.retrieve(internalUtilities.EntityNames.Organization,organizationId,columnNames).then(function(responseOrganization)
        {
            if(responseOrganization.entity === undefined || responseOrganization.entity == null)
            {
                xrmInternal.openErrorDialog(error);
                return
            }
            else
            {
                var riDisclaimerOrgObj = responseOrganization.entity.fields["isrelationshipinsightsenabled"];
                isDeclaimerEnabled = riDisclaimerOrgObj !== undefined && riDisclaimerOrgObj !== null && riDisclaimerOrgObj.get_ValueString() == "1" ? true : false;
                var actionCardOrgObj = responseOrganization.entity.fields["isactioncardenabled"];
                isRIActionCardOrgSettingEnabled = actionCardOrgObj !== undefined && actionCardOrgObj !== null && actionCardOrgObj.get_ValueString() == "1" ? true : false;
                var emailEngagementOrgObj = responseOrganization.entity.fields["isemailmonitoringallowed"];
                isRIEmailEngagementOrgSettingEnabled = emailEngagementOrgObj !== undefined && emailEngagementOrgObj !== null && emailEngagementOrgObj.get_ValueString() == "1" ? true : false;
                var autoCaptureOrgSettingObj = responseOrganization.entity.fields["isautodatacaptureenabled"];
                isADCOrgSettingEnabled = autoCaptureOrgSettingObj !== undefined && autoCaptureOrgSettingObj !== null && autoCaptureOrgSettingObj.get_ValueString() == "1" ? true : false;
                var previewActivityAnlaysis = responseOrganization.entity.fields["isactivityanalysisenabled"];
                isActivityAnalysisEnabled = previewActivityAnlaysis !== undefined && previewActivityAnlaysis !== null && previewActivityAnlaysis.get_ValueString() == "1" ? true : false;
                hidePageLoadingIcon();
                if(isopenedfrompersonaloptions || isDeclaimerEnabled)
                    if(isFeatureFlag && !isSolutionInstalled)
                    {
                        isRIActionCardsEnabled = true;
                        HideDisclaimerDiv();
                        showTabsDiv();
                        LoadTabsByFeatureAndPreviewOrgSettings();
                        !isopenedfrompersonaloptions && showOverviewTab()
                    }
                    else
                    {
                        HideDisclaimerDiv();
                        showTabsDiv();
                        LoadTabsByFeatureAndPreviewOrgSettings()
                    }
                else
                    if(isFeatureFlag && !isSolutionInstalled)
                    {
                        isRIActionCardsEnabled = true;
                        HideDisclaimerDiv();
                        showTabsDiv();
                        showOverviewTab()
                    }
                    else
                    {
                        HidePackageInstallButton();
                        ShowDisclaimerContinueButton();
                        disableContinueButton();
                        ShowDisclaimerTextDiv();
                        hideTabsDiv()
                    }
            }
        },internalUtilities.ClientApiUtility.actionFailedCallback)
    }
    catch(error)
    {
        xrmInternal.openErrorDialog(error)
    }
}
function ShowDisclaimerTextDiv()
{
    var disclaimerDiv = $("#disclaimerTextDiv");
    disclaimerDiv != undefined && disclaimerDiv != null && 
        disclaimerDiv.removeClass("displaynone")
}
function HideDisclaimerDiv()
{
    var disclaimerDiv = $("#disclaimerTextDiv");
    disclaimerDiv != undefined && disclaimerDiv != null && 
        disclaimerDiv.addClass("displaynone")
}
function HidePackageInstallButton()
{
    var installbtn = $("#btnpackageInstall");
    installbtn != undefined && installbtn != null && 
        installbtn.addClass("displaynone")
}
function ShowPackageInstallButton()
{
    var installbtn = $("#btnpackageInstall");
    installbtn != undefined && installbtn != null && 
        installbtn.removeClass("displaynone")
}
function HideDisclaimerContinueButton()
{
    var installbtn = $("#btnDisclaimerContinue");
    installbtn != undefined && installbtn != null && 
        installbtn.addClass("displaynone")
}
function ShowDisclaimerContinueButton()
{
    uncheckTermsCheckBox();
    var installbtn = $("#btnDisclaimerContinue");
    installbtn != undefined && installbtn != null && 
        installbtn.removeClass("displaynone")
}
function openSolutionInstallPackage()
{
    window.open(appUrl)
}
function validateDisclaimerCheckbox()
{
    var chkBoxdisclaimer = $("#chkBoxdisclaimer");
    if(chkBoxdisclaimer !== null && chkBoxdisclaimer !== undefined && $(chkBoxdisclaimer).is(":checked"))
    {
        enableInstallButton();
        enableContinueButton()
    }
    else
    {
        disableInstallButton();
        disableContinueButton()
    }
}
function enableContinueButton()
{
    $("#btnDisclaimerContinue").prop("disabled",false);
    $("#btnDisclaimerContinue").removeClass("button-disable")
}
function disableContinueButton()
{
    $("#btnDisclaimerContinue").prop("disabled",true);
    $("#btnDisclaimerContinue").addClass("button-disable")
}
function uncheckTermsCheckBox()
{
    $("#chkBoxdisclaimer").prop("checked",false);
    $("#chkBoxdisclaimer").prop("enabled",true)
}
function enableInstallButton()
{
    $("#btnpackageInstall").prop("disabled",false);
    $("#btnpackageInstall").removeClass("button-disable")
}
function disableInstallButton()
{
    $("#btnpackageInstall").prop("disabled",true);
    $("#btnpackageInstall").addClass("button-disable")
}
function saveDisclaimerOrgSetting()
{
    if(xrmInternal != null && xrmInternal != undefined)
        try
        {
            var entityRecords = [],
                disClaimerCheckboxValue = $("#chkBoxdisclaimer").is(":checked");
            if(!disClaimerCheckboxValue)
                return;
            var attributeDetails = prepareAttributesForOrgSettings(disClaimerCheckboxValue,"isrelationshipinsightsenabled"),
                entity = prepareEntityRecord(organizationId,internalUtilities.EntityNames.Organization,attributeDetails);
            if(entity != null)
            {
                entityRecords.push(entity);
                updateSettings(entityRecords);
                AddFeatureTelemetryLog(rifeature,enableMsgType,"Disclaimer is accepted. isrelationshipinsightsenabled set to true.");
                InitializeOrgSettings()
            }
            window.location.reload()
        }
        catch(error)
        {
            xrmInternal.openErrorDialog(error)
        }
}
function getUserActionCardId(card)
{
    if(userCardsList.length > 0)
        for(var i = 0; i < userCardsList.length; i++)
            if(card.cardTypeId == userCardsList[i].fields["cardtypeid"].Id.toString())
                return userCardsList[i].fields["actioncardusersettingsid"].toString();
    return null
}
function addTelemetryLogForActionCardSelection(cardlist)
{
    for(var i = 0; i < cardlist.length; i++)
        AddTelemetryLog(cardlist[i])
}
function AddTelemetryLog(cardDetails)
{
    try
    {
        var arguments = {};
        arguments["actionCardName"] = cardDetails.cardName;
        arguments["actionCardType"] = cardDetails.cardType;
        arguments["isActionCardSelected"] = cardDetails.isEnabled;
        arguments["initiatedByUser"] = cardDetails.initiatedByUser;
        currentwindow.parent.Mscrm.MetricsReporting.instance().addMetric("raactioncardselected",arguments)
    }
    catch(e)
    {
    }
}
function AddFeatureTelemetryLog(featureType,messageType,message)
{
    try
    {
        var arguments = {};
        arguments["featureType"] = featureType;
        arguments["message"] = message;
        arguments["messageType"] = messageType;
        currentwindow.parent.Mscrm.MetricsReporting.instance().addMetric("riunifiedconfigfeature",arguments)
    }
    catch(e)
    {
    }
}
function update(entityRecords,featurename,cardlist)
{
    cardlist = cardlist != undefined && cardlist != null && cardlist.length > 0 ? cardlist : [];
    try
    {
        if(entityRecords.length > 0)
        {
            showLoadingIconOfTab(featurename);
            xrmInternal.messages.updateMultiple(entityRecords).then(function(response)
            {
                if(response != null && response != undefined)
                {
                    if(response.isFaulted && response.responses != undefined && response.responses != null && response.responses.length > 0 && response.responses[0].get_fault() != null && response.responses[0].get_fault().get_errorCode() != null)
                    {
                        xrmInternal.openErrorDialog(response.responses[0].get_fault().get_errorCode());
                        return
                    }
                    else
                        if(featurename == currentwindow.parent.Mscrm.FeatureNames.ActionCard)
                        {
                            loadActionCards();
                            addTelemetryLogForActionCardSelection(cardlist)
                        }
                        else
                            if(featurename == currentwindow.parent.Mscrm.FeatureNames.AutoDataCapture)
                                LoadAutoDataCaptureTab();
                            else
                                featurename == currentwindow.parent.Mscrm.FeatureNames.EmailEngagement && 
                                    LoadEmailEngagement();
                    hideLoadingIconOfTab(featurename);
                    setDefaultFocusToActiveTab()
                }
            },internalUtilities.ClientApiUtility.actionFailedCallback)
        }
    }
    catch(error)
    {
        xrmInternal.openErrorDialog(error)
    }
}
function updateSettings(entityRecords)
{
    try
    {
        if(entityRecords.length > 0)
        {
            showPageLoadingIcon();
            xrmInternal.messages.updateMultiple(entityRecords).then(function(response)
            {
                if(response != null && response != undefined)
                    if(response.isFaulted && response.responses != undefined && response.responses != null && response.responses.length > 0 && response.responses[0].get_fault() != null && response.responses[0].get_fault().get_errorCode() != null)
                    {
                        xrmInternal.openErrorDialog(response.responses[0].get_fault().get_errorCode());
                        return
                    }
                    else
                        InitializeOrgSettings()
            },internalUtilities.ClientApiUtility.actionFailedCallback)
        }
    }
    catch(error)
    {
        xrmInternal.openErrorDialog(error)
    }
}
function LoadRelationshipAnalyticsIframeIfExists()
{
    if(isopenedfrompersonaloptions)
        return false;
    var httpRequest = null,
        serverUrl = window.parent.Xrm.Page.context.getClientUrl(),
        webresourceFileName = "/msdyn_/UnifiedConfig/msdyn_RelationshipAnalytics.html";
    try
    {
        if(window.XMLHttpRequest)
            httpRequest = new XMLHttpRequest;
        else
            httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
        if(serverUrl.match(/\/$/))
            serverUrl = serverUrl.substring(0,serverUrl.length - 1);
        httpRequest.open("GET",serverUrl + "/webresources/" + webresourceFileName,false);
        httpRequest.send(null);
        if(httpRequest.status != 404)
        {
            document.getElementById("relationshipAnalyticsIframe").src = serverUrl + "/webresources/" + webresourceFileName;
            return true
        }
        else
            return false
    }
    catch(error)
    {
        xrmUtility.confirmDialog(HtmlDecodeString(getLocaleString("RI_RelationshipAnalytics_Get_Error_Message")))
    }
}
function loadEmailEngagementResourceStrings()
{
    applyResourceKeyToControl("textEEpreviewnotAvailable",previewTurnOffMessageByTabTitle(HtmlDecodeString(getLocaleString("RI_EmailEngagementTab_Title"))),true);
    setAccessibility("lblEIATitle","RI_EmailEngagementTab_Title",1);
    var emailEngagement_TabTooltip = internalUtilities._String.format(relationshipInsightsTablTooltipResourceKey,HtmlDecodeString(getLocaleString("RI_EmailEngagementTab_Title")));
    $("#lblEIATitle").attr({"aria-label":emailEngagement_TabTooltip,title:emailEngagement_TabTooltip});
    applyResourceKeyToControl("spnEIASave","RI_CommonButtonSave_Title");
    saveButtonTooltip = internalUtilities._String.format(saveTooltipResourceKey,HtmlDecodeString(getLocaleString("RI_EmailEngagementTab_Title")));
    $("#btnEmailSave").attr({"aria-label":saveButtonTooltip,title:saveButtonTooltip,tabindex:"3"});
    setAccessibilityForLinkButton("lblEmailInformation","RI_HowEngagedYourCustomer_Text",2,HtmlDecodeString(getLocaleString("RI_Email_Engagement_Learnmore_Link_Url")));
    setAccessibilityToCheckBoxControl("chkEmailInteraction","RI_EmailEngagementTab_EmailCheckboxLabel",2);
    setAccessibility("lblEmailInteraction","RI_EmailEngagementTab_EmailCheckboxLabel");
    setAccessibilityForLinkButton("lblDataConsent","RI_EmailEngagementTab_ConsentLabel",2,HtmlDecodeString(getLocaleString("RI_Email_Engagement_Learnmore_Link_Url")));
    setAccessibility("emailInfoIcon",HtmlDecodeString(getLocaleString("RI_EmailEngagementTab_ConsentLabel_ToolTip")),"",true);
    setAccessibility("textEEpreviewnotAvailable",previewTurnOffMessageByTabTitle(HtmlDecodeString(getLocaleString("RI_EmailEngagementTab_Title"))),"",true)
}
function LoadEmailEngagement()
{
    var EmailChkbxctrl = $("#chkEmailInteraction");
    EmailChkbxctrl !== undefined && EmailChkbxctrl !== null && 
        EmailChkbxctrl.prop("checked",isRIEmailEngagementOrgSettingEnabled)
}
function updateOrgSetting()
{
    if(xrmInternal != null && xrmInternal != undefined)
        try
        {
            var entityRecords = [],
                isEmailInteractionAllowed = $("#chkEmailInteraction").is(":checked");
            if(isRIEmailEngagementOrgSettingEnabled != isEmailInteractionAllowed)
            {
                var attributeDetails = prepareAttributesForOrgSettings(isEmailInteractionAllowed,"isemailmonitoringallowed"),
                    entity = prepareEntityRecord(organizationId,internalUtilities.EntityNames.Organization,attributeDetails);
                if(entity != null)
                {
                    entityRecords.push(entity);
                    isRIEmailEngagementOrgSettingEnabled = isEmailInteractionAllowed;
                    update(entityRecords,currentwindow.parent.Mscrm.FeatureNames.EmailEngagement);
                    AddFeatureTelemetryLog(eefeature,isEmailInteractionAllowed ? enableMsgType : disableMsgType,"EmailEngagement feature bit [isemailmonitoringallowed] is updated with value " + isEmailInteractionAllowed)
                }
            }
        }
        catch(error)
        {
            xrmInternal.openErrorDialog(error)
        }
}
function getLocaleString(resourceKey)
{
    try
    {
        if(resourceKey != null && resourceKey != "")
        {
            var localString = ResourceKeyValuesDictionary[resourceKey];
            if(localString == undefined || localString === null)
                localString = xrmInternal.getResourceString(resourceKey);
            if(localString != "[object Object]")
                return HtmlEncodeString(localString)
        }
    }
    catch(error)
    {
    }
    return resourceKey
}
function applyResourceKeyToControl(controlid,resourceKey,isresourcestring)
{
    var ctrl = $("#" + controlid);
    if(ctrl !== undefined && ctrl !== null)
    {
        var localstring = isresourcestring != undefined && isresourcestring == true ? resourceKey : getLocaleString(resourceKey);
        ctrl.text(HtmlDecodeString(localstring))
    }
}
function setAccessibility(controlid,resourceKey,tabindex,isresourcestring)
{
    var tabIndex = tabindex,
        ctrl = $("#" + controlid);
    if(ctrl !== undefined && ctrl !== null)
    {
        var resourceString = isresourcestring != undefined && isresourcestring == true ? resourceKey : getLocaleString(resourceKey);
        ctrl.text(HtmlDecodeString(resourceString));
        ctrl.attr({"aria-label":HtmlDecodeString(resourceString),title:HtmlDecodeString(resourceString),tabindex:tabIndex})
    }
}
function setAccessibilityToCheckBoxControl(controlid,resouceKey,tabindex)
{
    var tabIndex = tabindex,
        ctrl = $("#" + controlid);
    if(ctrl !== undefined && ctrl !== null)
    {
        var resourceString = getLocaleString(resouceKey);
        ctrl.attr({"aria-label":HtmlDecodeString(resourceString),title:HtmlDecodeString(resourceString),tabindex:tabIndex})
    }
}
function setAccessibilityForLinkButton(controlid,resouceKey,tabindex,url)
{
    var tabIndex = tabindex,
        ctrl = $("#" + controlid),
        langUrl = "";
    if(currentwindow.parent && currentwindow.parent.parent && currentwindow.parent.parent.Xrm && currentwindow.parent.parent.Xrm.Page && currentwindow.parent.parent.Xrm.Page.context)
        langUrl = "&clcid=0x" + currentwindow.parent.parent.Xrm.Page.context.getUserLcid().toString(16);
    var resourceString = HtmlDecodeString(getLocaleString(resouceKey)),
        url = url + langUrl;
    if(ctrl !== undefined && ctrl !== null)
    {
        if(resouceKey == "RI_EmailEngagementTab_ConsentLabel" || resouceKey == "RI_Provisioning_ConsentLabel")
            ctrl.html(internalUtilities._String.format(resourceString,"<a class='anchor-style' href='" + HtmlDecodeString(getLocaleString("RI_DataConsent_Click_Here_Url") + HtmlEncodeString(langUrl)) + "' title='" + HtmlDecodeString(getLocaleString("Settings_Privacy_Statement")) + "' tabIndex='" + tabIndex + "' target='_blank'>","</a>","<a class='anchor-style' href='" + url + "' title='" + HtmlDecodeString(getLocaleString("RI_Provisioning_FeatureTechnicalDocumentation_Link_Text")) + "' tabIndex='" + tabIndex + "' target='_blank'>","</a>"));
        else
            ctrl.html(internalUtilities._String.format(resourceString,"<a id='url' class='anchor-style' tabindex='" + tabIndex + "' target='_blank' href='" + url + "'>","</a>"));
        var controlTooltip = HtmlDecodeString(getLocaleString(resouceKey + "_ToolTip"));
        ctrl.attr({"aria-label":controlTooltip,title:controlTooltip})
    }
}
function LoadTabsByFeatureAndPreviewOrgSettings()
{
    try
    {
        InitializeRIActionCards();
        InitializeADC();
        provisionStatus == "" && 
            getProvisioningStatus(function(provisionstatus)
            {
                InitializeRIAnalytics(provisionstatus);
                InitializeEmailEngagement(provisionstatus);
                TabDisplayOrder();
                setRiProvisioningType(provisionstatus);
                provisionstatus.status == 2 && DCISubscriptionType == BYOSSubscription && 
                    $("#updatePopUpEntryLink").removeClass("displaynone")
            })
    }
    catch(err)
    {
        xrmUtility.confirmDialog(HtmlDecodeString(getLocaleString("RI_ExceptionMessage_RIFeatures_LoadingFailed")))
    }
}
function TabDisplayOrder()
{
    var tabCtrl;
    if(isFeatureFlag && !isSolutionInstalled)
        tabCtrl = $("#tabOverview");
    else
        if(isRIActionCardsEnabled)
            tabCtrl = $("#tabRelationshipAssistance");
        else
            if(!isopenedfrompersonaloptions && isADCEnabled)
                tabCtrl = $("#tabAutoDataCapture");
            else
                if(!isopenedfrompersonaloptions && isRIAnalyticsEnabled)
                {
                    tabCtrl = $("#tabRelationshipAnalytics");
                    onRiAnaltyicsClick()
                }
                else
                    if(!isopenedfrompersonaloptions && isEmailEnagagementEnabled)
                    {
                        tabCtrl = $("#tabEmailInteractionAnalysis");
                        onEmailEngagementClick()
                    }
                    else
                        tabCtrl = null;
    tabCtrl !== undefined && tabCtrl !== null && 
        tabCtrl.prop("checked",true)
}
function InitializeRIActionCards()
{
    if(isRIActionCardOrgSettingEnabled)
        document.getElementById("chkActionCardEnableOption").checked = true;
    if(isRIActionCardsEnabled && document.getElementById("liRelationshipAssistanceTab") != null)
    {
        document.getElementById("liRelationshipAssistanceTab").style.display = "block";
        loadRelationshipAssistanceTab()
    }
}
function InitializeRIAnalytics(provisionStatus)
{
    if(isopenedfrompersonaloptions)
        return;
    if(isRIAnalyticsEnabled && document.getElementById("liRelationshipAnalyticsTab") != null)
    {
        document.getElementById("liRelationshipAnalyticsTab").style.display = "block";
        document.getElementById("liRelationshipAnalyticsTab").className = "";
        if(!isActivityAnalysisEnabled)
        {
            if(document.getElementById("tab-RAA-Container") != null)
                document.getElementById("tab-RAA-Container").style.display = "none";
            if(document.getElementById("divRAApreviewNotAvailable") != null)
                document.getElementById("divRAApreviewNotAvailable").style.display = "block";
            return
        }
        if(provisionStatus == undefined || provisionStatus == null || provisionStatus.status != 2)
            return;
        var isSolutionLoaded = LoadRelationshipAnalyticsIframeIfExists();
        if(!isSolutionLoaded)
        {
            if(document.getElementById("tab-RAA-Container") != null)
                document.getElementById("tab-RAA-Container").style.display = "none";
            if(document.getElementById("divRASolutionNotAvailable") != null)
                document.getElementById("divRASolutionNotAvailable").style.display = "block"
        }
    }
}
function InitializeEmailEngagement(provisionStatus)
{
    if(isopenedfrompersonaloptions)
        return;
    if(isEmailEnagagementEnabled && document.getElementById("liEmailInteractionAnalysisTab") != null)
    {
        document.getElementById("liEmailInteractionAnalysisTab").style.display = "block";
        document.getElementById("liEmailInteractionAnalysisTab").className = "";
        if(isACIForEmailEnagagementEnabled)
        {
            if(provisionStatus == undefined || provisionStatus == null || provisionStatus.status != 2)
                return
        }
        else
            if(provisionStatus == undefined || provisionStatus == null || provisionStatus.eestatus != 2)
                return;
        LoadEmailEngagement()
    }
}
function InitializeADC()
{
    if(isopenedfrompersonaloptions)
        return;
    if(isADCEnabled && document.getElementById("liAutoDataCaptureTab") != null)
    {
        document.getElementById("liAutoDataCaptureTab").style.display = "block";
        document.getElementById("liAutoDataCaptureTab").className = "";
        LoadAutoDataCaptureTab()
    }
}
function getOrgId()
{
    if(currentwindow.parent != undefined || currentwindow.parent != null || currentwindow.parent.parent != undefined || currentwindow.parent.parent != null || currentwindow.parent.parent.ORG_ID === undefined || currentwindow.parent.parent.ORG_ID == null)
    {
        var columnNames = ["organizationid"];
        xrmInternal.messages.retrieve(internalUtilities.EntityNames.SystemUser,userId,columnNames).then(function(responseSystemUser)
        {
            var systemUser = responseSystemUser.entity;
            return systemUser.getValue("organizationid").toString()
        },internalUtilities.ClientApiUtility.actionFailedCallback)
    }
    return currentwindow.parent.parent.ORG_ID
}
function getUserId()
{
    if(currentwindow.parent != undefined || currentwindow.parent != null || currentwindow.parent.parent != undefined || currentwindow.parent.parent != null || currentwindow.parent.parent.USER_GUID === undefined || currentwindow.parent.parent.USER_GUID == null)
        return currentwindow.parent.parent.Xrm.Page.context.getUserId();
    return currentwindow.parent.parent.USER_GUID
}
function checkIfOpenedFromPersonalOptions()
{
    var queryParameter = (new RegExp("[?&]ispersonal=([^&#]*)")).exec(currentwindow.location.href);
    if(queryParameter == null)
    {
        qeryParameter = (new RegExp("[?&]Data=([^&#]*)")).exec(currentwindow.location.href);
        if(queryParameter == null)
            return false;
        queryParameter = decodeURIComponent(queryParameter[1]);
        if(queryParameter.substring(0,10) == "ispersonal")
            queryParameter = queryParameter.split("=")
    }
    if(queryParameter != undefined && queryParameter != null)
        return (queryParameter[1] || 0) == "true" ? true : false;
    return false
}
function hideTabsDiv()
{
    var tabsDiv = $("#tabsDiv");
    tabsDiv != undefined && tabsDiv != null && 
        tabsDiv.css("display","none")
}
function showTabsDiv()
{
    var tabsDiv = $("#tabsDiv");
    tabsDiv != undefined && tabsDiv != null && 
        tabsDiv.css("display","inline")
}
function showOverviewTab()
{
    var overviewTab = $("#liOverviewTab");
    overviewTab != undefined && overviewTab != null && overviewTab.removeClass("displaynone");
    InitializeRIActionCards();
    $("#tabOverview").prop("checked",true);
    setDefaultFocusToActiveTab()
}
function goBackToChooseSubscription()
{
    hideAllProvisiongDivs();
    hideAllErrorSpans();
    var chooseSubscriptionDiv = $("#ChooseSubscriptionPage");
    chooseSubscriptionDiv != undefined && chooseSubscriptionDiv != null && 
        chooseSubscriptionDiv.removeClass("displaynone")
}
function loadChooseSubscriptionPage()
{
    var chooseSubscriptionDiv = $("#ChooseSubscriptionPage");
    chooseSubscriptionDiv != undefined && chooseSubscriptionDiv != null && 
        chooseSubscriptionDiv.removeClass("displaynone")
}
function loadUiOnProvisionStatus(provisionstatus)
{
    hideAllProvisiongDivs();
    hideAllErrorSpans();
    switch(provisionstatus.status)
    {
        case 0:
            loadMSFTProvisioningUI();
            break;
        case 3:
            var loading1Div = $("#Loading1");
            loading1Div != undefined && loading1Div != null && 
                loading1Div.removeClass("displaynone");
            startTimer();
            break;
        case 5:
            provisionDivsByStatus(provisionstatus);
            break;
        default:
            break
    }
}
function loadBYOSProvisioningUI()
{
    hideAllProvisiongDivs();
    hideAllErrorSpans();
    var signInDiv = $("#SignIn");
    if(signInDiv != undefined && signInDiv != null)
    {
        signInDiv.removeClass("displaynone");
        $("#provisionerrorDiv").hide();
        if(!isMSFTOwnedSubscriptionTurnedOn)
        {
            var backBtn = $("#backButton");
            backBtn.remove()
        }
    }
}
function loadMSFTProvisioningUI()
{
    hideAllProvisiongDivs();
    hideAllErrorSpans();
    $("#updatePopUpEntryLink").addClass("displaynone");
    $("#backButtonMSFT").remove();
    var signInDiv = $("#SignInMSFT");
    if(signInDiv != undefined && signInDiv != null)
    {
        signInDiv.removeClass("displaynone");
        $("#provisionerrorDivForMSFTSub").addClass("displaynone")
    }
    $("#chkPrivacyAgreementForMSFTSub").prop("checked",false);
    disableOneClickProvisioningBtn()
}
function loadEEUiOnEEProvisionStatus(provisionstatus)
{
    hideAllProvisiongDivs();
    hideAllErrorSpans();
    switch(provisionstatus.eestatus)
    {
        case 0:
            var signInDiv = $("#EEAciNotEnabled");
            if(signInDiv != undefined && signInDiv != null)
            {
                signInDiv.removeClass("displaynone");
                $("#EEprovisionerrorDiv").hide()
            }
            break;
        case 3:
            var loading1Div = $("#EELoading1");
            loading1Div != undefined && loading1Div != null && 
                loading1Div.removeClass("displaynone");
            startTimer();
            break;
        case 5:
            provisionEEAciNotusedDivsByEEStatus(provisionstatus);
            break;
        default:
            break
    }
}
function hideAllProvisiongDivs()
{
    var signInDiv = $("#SignIn"),
        loading1Div = $("#Loading1"),
        loading2Div = $("#Loading2"),
        loading3Div = $("#Loading3"),
        EEsignInDiv = $("#EEAciNotEnabled"),
        eeloading1Div = $("#EELoading1"),
        signInMSFTDiv = $("#SignInMSFT"),
        chooseSubscriptionDiv = $("#ChooseSubscriptionPage");
    signInDiv != undefined && signInDiv != null && 
        signInDiv.addClass("displaynone");
    EEsignInDiv != undefined && EEsignInDiv != null && 
        EEsignInDiv.addClass("displaynone");
    eeloading1Div != undefined && eeloading1Div != null && 
        eeloading1Div.addClass("displaynone");
    loading1Div != undefined && loading1Div != null && 
        loading1Div.addClass("displaynone");
    loading2Div != undefined && loading2Div != null && 
        loading2Div.addClass("displaynone");
    loading3Div != undefined && loading3Div != null && 
        loading3Div.addClass("displaynone");
    chooseSubscriptionDiv != undefined && chooseSubscriptionDiv != null && 
        chooseSubscriptionDiv.addClass("displaynone");
    signInMSFTDiv != undefined && signInMSFTDiv != null && 
        signInMSFTDiv.addClass("displaynone")
}
function hideProvisionContainerDiv()
{
    var provisioningContainerDiv = $("#provisioningDiv");
    provisioningContainerDiv != undefined && provisioningContainerDiv != null && 
        provisioningContainerDiv.hide()
}
function showProvisionContainerDiv()
{
    var provisioningContainerDiv = $("#provisioningDiv");
    provisioningContainerDiv != undefined && provisioningContainerDiv != null && 
        provisioningContainerDiv.show()
}
function validateIfEmpty(currenttextbox)
{
    if(currenttextbox.id == "huburlValue")
    {
        currenttextbox.value = currenttextbox.value.trim();
        currenttextbox.value.match(/^[A-Za-z][A-Za-z0-9]+$/) && currenttextbox.value.length < 40 ? $("#hubUriEmtpyTextErrorId").hide() : $("#hubUriEmtpyTextErrorId").show()
    }
    validateProvisioningSection()
}
function validateIfEmtpyAndCompareAccessKeys(currenttextbox)
{
    if(currenttextbox.id == "accessKey")
        currenttextbox.value == "" ? $("#accessKeyEmtpyTextErrorId").show() : $("#accessKeyEmtpyTextErrorId").hide();
    if(currenttextbox.id == "reEnterAccessKey")
        if(currenttextbox.value == "")
        {
            $("#reenterAccessKeyEmtpyTextErrorId").show();
            $("#reenterAccessKeyCompareTextErrorId").hide()
        }
        else
            $("#reenterAccessKeyEmtpyTextErrorId").hide();
    if((currenttextbox.id == "accessKey" || currenttextbox.id == "reEnterAccessKey") && $("#accessKey").val() != "" && $("#reEnterAccessKey").val() != "")
        $("#accessKey").val() != $("#reEnterAccessKey").val() ? $("#reenterAccessKeyCompareTextErrorId").show() : $("#reenterAccessKeyCompareTextErrorId").hide();
    validateProvisioningSection()
}
function hideAllErrorSpans()
{
    var hubUriErrorSpan = $("#hubUriEmtpyTextErrorId"),
        accesskeyErrorSpan = $("#accessKeyEmtpyTextErrorId"),
        reenterKeyEmptyErrorSpan = $("#reenterAccessKeyEmtpyTextErrorId"),
        reenterKeyCompareSpan = $("#reenterAccessKeyCompareTextErrorId");
    hubUriErrorSpan != undefined && hubUriErrorSpan != null && 
        hubUriErrorSpan.hide();
    accesskeyErrorSpan != undefined && accesskeyErrorSpan != null && 
        accesskeyErrorSpan.hide();
    reenterKeyEmptyErrorSpan != undefined && reenterKeyEmptyErrorSpan != null && 
        reenterKeyEmptyErrorSpan.hide();
    reenterKeyCompareSpan != undefined && reenterKeyCompareSpan != null && 
        reenterKeyCompareSpan.hide()
}
function startLoading()
{
    hideAllErrorSpans();
    $("#huburlValue").val() == "" && 
        $("#hubUriEmtpyTextErrorId").show();
    $("#accessKey").val() == "" && 
        $("#accessKeyEmtpyTextErrorId").show();
    $("#reEnterAccessKey").val() == "" && 
        $("#reenterAccessKeyEmtpyTextErrorId").show();
    $("#accessKey").val() != "" && $("#reEnterAccessKey").val() != "" && $("#accessKey").val() != $("#reEnterAccessKey").val() && 
        $("#reenterAccessKeyCompareTextErrorId").show();
    if($("#huburlValue").val() != "" && $("#accessKey").val() != "" && $("#reEnterAccessKey").val() != "" && $("#accessKey").val() == $("#reEnterAccessKey").val())
    {
        hideAllProvisiongDivs();
        hideAllErrorSpans();
        StartProvision();
        $("#Loading1").removeClass("displaynone");
        $("#pleaseWaitTextId1").focus();
        startTimer()
    }
}
function startEELoading()
{
    if(isACIForEmailEnagagementEnabled == false)
    {
        hideAllErrorSpans();
        hideAllProvisiongDivs();
        hideAllErrorSpans();
        StartEEProvision();
        $("#EELoading1").removeClass("displaynone");
        $("#EEpleaseWaitTextId1").focus();
        startEETimer()
    }
}
function startOneClickLoading()
{
    hideAllErrorSpans();
    hideAllProvisiongDivs();
    hideAllErrorSpans();
    StartOneClickProvision();
    $("#Loading1").removeClass("displaynone");
    $("#pleaseWaitTextId1").focus();
    startTimer()
}
function showUpdateTenantInfoLink(provisionstatus)
{
    if(provisionstatus != undefined && provisionstatus != null && provisionstatus.errorStatus != undefined && provisionstatus.errorStatus != null && provisionstatus.errorStatus == 402)
    {
        var updatelinkText = getLocaleString("RI_Provisioning_ClickHereToUpdate_Link"),
            aciProvisioningErrorString = HtmlEncodeString(internalUtilities._String.format(HtmlDecodeString(getLocaleString("RI_Provisioning_UnableToConnectService_Exception_Message")),"<a class='anchor-style' style='text-decoration:underline' title=" + HtmlDecodeString(updatelinkText) + " onclick='popupForUpdateAccessKey();'>" + HtmlDecodeString(updatelinkText) + "</a>"));
        $("#aciProvisioningErrorDiv").removeClass("displaynone").html("<img src='/_imgs/ico/16_error.gif'/>" + HtmlDecodeString(aciProvisioningErrorString))
    }
}
function startTimer()
{
    var timesRun = 0;
    provisionUiChangeInterval = setInterval(function()
    {
        if(timesRun == 1)
        {
            hideAllProvisiongDivs();
            $("#Loading2").removeClass("displaynone");
            $("#pleaseWaitTextId2").focus()
        }
        if(timesRun == 2)
        {
            hideAllProvisiongDivs();
            $("#Loading3").removeClass("displaynone");
            $("#pleaseWaitTextId3").focus();
            clearInterval(provisionUiChangeInterval)
        }
        timesRun += 1
    },9e4);
    provisionStatusInterval = setInterval(function()
    {
        getProvisioningStatus(function(provisionstatus)
        {
            if(provisionstatus.status != undefined && provisionstatus.status != null && (provisionstatus.status == 2 || provisionstatus.status == 5))
            {
                stopTimer();
                provisionDivsByStatus(provisionstatus)
            }
        })
    },3e4)
}
function checkForNewUnifiedConfigFCB()
{
    return $.Deferred(function()
    {
        var self = this;
        self.resolve(true)
    })
}
function checkIfHTMLLoadsFromWebResource(callback)
{
    newConfigExperiencePromise.then(function(data)
    {
        newConfigExperiencePromiseSuccess(data,callback)
    },function()
    {
        document.getElementById("headerTitle").style.display = "";
        document.getElementById("headerDesc").style.display = "";
        callback()
    })
}
function newConfigExperiencePromiseSuccess(data,callback)
{
    var orgSettingsValues = data.get_entityCollection();
    if(orgSettingsValues.get_count() > 0)
        if(window.top.document.getElementById("contentIFrame0") == null)
            getAppModuleId().then(function(data)
            {
                if(data.value !== null && data.value[0] !== null)
                {
                    var appId = data.value[0].appmoduleid;
                    window.open("/main.aspx?pagetype=control&controlName=MscrmControls.UnifiedConfigWrapperControl.UnifiedConfigWrapperControl&navbar=off&appId=" + appId,"_self")
                }
                else
                    window.open("/uclient/main.htm?pagetype=control&controlName=MscrmControls.UnifiedConfigWrapperControl.UnifiedConfigWrapperControl&navbar=off","_self")
            });
        else
        {
            if(newConfigLoaded == true)
                return;
            var frames = $.grep($(window.top.document.getElementById("crmContentPanel")).find("iframe"),function(frame)
                {
                    if($(frame).contents().find("#disclaimerTextDiv").length == 1)
                        return frame
                });
            getAppModuleId().then(function(data)
            {
                if(data.value !== null && data.value[0] !== null)
                {
                    var appId = data.value[0].appmoduleid;
                    frames[0].src = "/main.aspx?pagetype=control&controlName=MscrmControls.UnifiedConfigCustomControl.UnifiedConfigCustomControl&navbar=off&appId=" + appId
                }
                else
                    frames[0].src = "/uclient/main.htm?pagetype=control&controlName=MscrmControls.UnifiedConfigCustomControl.UnifiedConfigCustomControl&navbar=off";
                newConfigLoaded = true
            })
        }
    else
        if(callback != null)
        {
            document.getElementById("headerTitle").style.display = "";
            document.getElementById("headerDesc").style.display = "";
            callback()
        }
        else
            return
}
function startTimerForPackageInstallationCheck()
{
    pkgInstallStatusInterval = setInterval(function()
    {
        getPackageInstallationStatus(function(pkgInstallStatus)
        {
            if(pkgInstallStatus)
            {
                callback = function()
                {
                    if(isFeatureFlag)
                    {
                        ShowDisclaimerTextDiv();
                        hideTabsDiv()
                    }
                    clearInterval(pkgInstallStatusInterval);
                    HidePackageInstallButton();
                    ShowDisclaimerContinueButton();
                    disableContinueButton()
                };
                checkIfHTMLLoadsFromWebResource(callback)
            }
        })
    },5e3)
}
function startEETimer()
{
    var timesRun = 0;
    provisionUiChangeInterval = setInterval(function()
    {
        if(timesRun == 1)
        {
            hideAllProvisiongDivs();
            $("#EELoading1").removeClass("displaynone");
            $("#EEpleaseWaitTextId1").focus()
        }
        if(timesRun == 2)
        {
            hideAllProvisiongDivs();
            $("#EELoading1").removeClass("displaynone");
            $("#EEpleaseWaitTextId1").focus();
            clearInterval(provisionUiChangeInterval)
        }
        timesRun += 1
    },9e4);
    provisionStatusInterval = setInterval(function()
    {
        getProvisioningStatus(function(provisionstatus)
        {
            if(provisionstatus.eestatus != undefined && provisionstatus.eestatus != null && (provisionstatus.eestatus == 2 || provisionstatus.eestatus == 5))
            {
                stopTimer();
                provisionEEAciNotusedDivsByEEStatus(provisionstatus)
            }
        })
    },3e4)
}
function stopTimer()
{
    clearInterval(provisionUiChangeInterval);
    clearInterval(provisionStatusInterval)
}
function setRiProvisioningType(provisionStatus)
{
    if(provisionStatus != null && provisionStatus != undefined && provisionStatus.raDciHubPlanType == "1")
        DCISubscriptionType = MSFTSubscription;
    else
        DCISubscriptionType = BYOSSubscription
}
function provisionDivsByStatus(provisionstatus)
{
    hideAllProvisiongDivs();
    if(provisionstatus.status == 5 || provisionstatus.errorStatus !== undefined && (provisionstatus.errorStatus == 401 || provisionstatus.errorStatus == 403 || provisionstatus.errorStatus == 404 || provisionstatus.errorStatus == 500))
        if(DCISubscriptionType == BYOSSubscription)
        {
            var signInDiv = $("#SignIn");
            if(signInDiv != undefined && signInDiv != null)
            {
                signInDiv.removeClass("displaynone");
                var errorstring = HtmlEncodeString(internalUtilities._String.format(HtmlDecodeString(getLocaleString("RI_Provisioning_UnableToSetupRI_Exception_Message")),"<b>" + HtmlDecodeString(getLocaleString("RI_Provisioning_UnableToSetupRI_Exception_Message_RelationshipInsights")) + "</b>"));
                $("#provisionerrorDiv").html(HtmlDecodeString(getErrorMessageByProvisionStatus(provisionstatus)));
                $("#provisionerrorDiv").show();
                $("#provisionerrorDiv").focus();
                $("#chkPrivacyAgreement").prop("checked",false);
                validateProvisioningSection();
                if(!isMSFTOwnedSubscriptionTurnedOn)
                {
                    var backBtn = $("#backButton");
                    backBtn.remove()
                }
                stopTimer()
            }
        }
        else
            if(DCISubscriptionType == MSFTSubscription)
            {
                var signInDiv = $("#SignInMSFT");
                if(signInDiv != undefined && signInDiv != null)
                {
                    signInDiv.removeClass("displaynone");
                    $("#provisionerrorDivForMSFTSub").show();
                    $("#provisionerrorDivForMSFTSub").focus();
                    $("#chkPrivacyAgreementForMSFTSub").prop("checked",false);
                    validateOneClickProvisioningSection();
                    stopTimer()
                }
            }
    if(provisionstatus.status == 2)
    {
        $("#RAA-Container-ProvisioningDiv").addClass("displaynone");
        $("#EE-Container-ProvisioningDiv").addClass("displaynone");
        $("#relationshipAnalayticsIframeContainerDiv").removeClass("displaynone");
        $("#emailinteractionContentDiv").removeClass("displaynone");
        DCISubscriptionType == BYOSSubscription && 
            $("#updatePopUpEntryLink").removeClass("displaynone");
        InitializeRIAnalytics(provisionstatus);
        InitializeEmailEngagement(provisionstatus)
    }
}
function getErrorMessageByProvisionStatus(provisionStatus)
{
    var errorstring = "";
    if(provisionStatus.errorStatus == 402 || provisionStatus.errorStatus == 406 || provisionStatus.errorStatus == 408)
        errorstring = HtmlEncodeString(internalUtilities._String.format(HtmlDecodeString(getLocaleString("RI_Provisioning_UnableToSetupRI_ValidationFailed_Exception_Message")),"<b>" + HtmlDecodeString(getLocaleString("RI_Provisioning_UnableToSetupRI_Exception_Message_RelationshipInsights")) + "</b>"));
    else
        errorstring = HtmlEncodeString(internalUtilities._String.format(HtmlDecodeString(getLocaleString("RI_Provisioning_UnableToSetupRI_Exception_Message")),"<b>" + HtmlDecodeString(getLocaleString("RI_Provisioning_UnableToSetupRI_Exception_Message_RelationshipInsights")) + "</b>"));
    errorstring = errorstring + HtmlEncodeString("<br/>" + provisionStatus.errorMessage);
    return errorstring
}
function provisionEEAciNotusedDivsByEEStatus(provisionstatus)
{
    hideAllProvisiongDivs();
    if(provisionstatus.eestatus == 5 || provisionstatus.errorStatus !== undefined && (provisionstatus.errorStatus == 401 || provisionstatus.errorStatus == 403 || provisionstatus.errorStatus == 404 || provisionstatus.errorStatus == 500))
    {
        var signInDiv = $("#EEAciNotEnabled");
        if(signInDiv != undefined && signInDiv != null)
        {
            signInDiv.removeClass("displaynone");
            $("#EEprovisionerrorDiv").show();
            $("#EEprovisionerrorDiv").focus();
            stopTimer()
        }
    }
    if(provisionstatus.eestatus == 2)
    {
        $("#RAA-Container-ProvisioningDiv").addClass("displaynone");
        $("#EE-Container-ProvisioningDiv").addClass("displaynone");
        $("#relationshipAnalayticsIframeContainerDiv").removeClass("displaynone");
        $("#emailinteractionContentDiv").removeClass("displaynone");
        $("#updatePopUpEntryLink").removeClass("displaynone");
        InitializeEmailEngagement(provisionstatus)
    }
}
function getProvisioningStatus(provisioningcallback)
{
    if(isopenedfrompersonaloptions)
        return;
    try
    {
        var getRelationshipAnalyticsFetchxml = "<fetch mapping='logical'><entity name='msdyn_activityanalysisconfig'>  <all-attributes /><filter type='and'><condition attribute='organizationid' operator='eq' value='" + organizationId + "'/></filter></entity></fetch>";
        $.when(xrmInternal.messages.getRIProvisioningStatus(),xrmInternal.messages.retrieveMultiple(getRelationshipAnalyticsFetchxml)).then(function(response,response1)
        {
            if(response1 !== undefined && response1 !== null)
            {
                var orgSettingsValues = response1.get_entityCollection();
                if(orgSettingsValues.get_count() > 0)
                    if(orgSettingsValues.get_entities()[0].getValue("msdyn_oneclickactivityanalysisprovisioning") !== undefined && orgSettingsValues.get_entities()[0].getValue("msdyn_oneclickactivityanalysisprovisioning") !== null && orgSettingsValues.get_entities()[0].getValue("msdyn_oneclickactivityanalysisprovisioning").get_value() == true)
                        isMSFTOwnedSubscriptionTurnedOn = true
            }
            else
                isMSFTOwnedSubscriptionTurnedOn = false;
            if(response !== undefined && response !== null && response.provisioningStatus !== undefined && response.provisioningStatus != null)
            {
                var data = JSON.parse(response.provisioningStatus),
                    proStatus = data.RiProvisioningStatus !== undefined && data.RiProvisioningStatus !== null ? parseInt(data.RiProvisioningStatus) : -1,
                    eeProStatus = data.EEProvisioningStatus !== undefined && data.EEProvisioningStatus !== null ? parseInt(data.EEProvisioningStatus) : -1,
                    errorCode = data.RiErrorStatusCode !== undefined && data.RiErrorStatusCode !== null ? parseInt(data.RiErrorStatusCode) : -1,
                    raDCIHubPlanType = data.RaDCIHubPlanType !== undefined && data.RaDCIHubPlanType !== null ? parseInt(data.RaDCIHubPlanType) : -1;
                provisionStatus = {status:proStatus,eestatus:eeProStatus,errorStatus:errorCode,errorMessage:data.RiErrorStatusMessage,raDciHubPlanType:raDCIHubPlanType};
                provisioningcallback({status:proStatus,eestatus:eeProStatus,errorStatus:errorCode,errorMessage:data.RiErrorStatusMessage,raDciHubPlanType:raDCIHubPlanType})
            }
        },function(response)
        {
            provisionStatus = {status:5,eestatus:5,errorStatus:response.get_request().status,raDciHubPlanType:-1};
            provisionDivsByStatus(provisionStatus);
            provisioningcallback(provisionStatus);
            internalUtilities.ClientApiUtility.actionFailedCallback(response)
        })
    }
    catch(error)
    {
        xrmInternal.openErrorDialog(error)
    }
}
function getRISolutionInstalled()
{
    try
    {
        var fetchXmlforsolution = "<fetch mapping='logical' count='20' version='1.0'><entity name='solution'><attribute name='uniquename' /><filter type='or'><condition attribute='uniquename' operator='eq' value='RelationshipAnalytics' /><condition attribute='uniquename' operator='eq' value='EmailEngagement' /><condition attribute='uniquename' operator='eq' value='AutoDataCapture' /><condition attribute='uniquename' operator='eq' value='RelationshipAssistant' /></filter></entity></fetch>";
        xrmInternal.messages.retrieveMultiple(fetchXmlforsolution).then(function(retrieveRoleResponse)
        {
            if(retrieveRoleResponse != undefined && retrieveRoleResponse != null)
            {
                var solutionCollection = retrieveRoleResponse.get_entityCollection();
                if(solutionCollection != null && solutionCollection.get_entities() != null && solutionCollection.get_entities().length > 0)
                    for(var solutionentities = solutionCollection.get_entities(),
                        i = 0; i < solutionentities.length; i++)
                        switch(solutionentities[i].fields["uniquename"].toString())
                        {
                            case "RelationshipAnalytics":
                                isAASolInstalled = true;
                                break;
                            case "EmailEngagement":
                                isEESolInstalled = true;
                                break;
                            case "AutoDataCapture":
                                isADCSolInstalled = true;
                                break;
                            case "RelationshipAssistant":
                                isRASolInstalled = true;
                                break;
                            default:
                        }
            }
            isRIAnalyticsEnabled = isRIAnalyticsEnabled & isAASolInstalled;
            isEmailEnagagementEnabled = isEmailEnagagementEnabled & isEESolInstalled;
            isADCEnabled = isADCEnabled & isADCSolInstalled;
            if(isFeatureFlag && !isSolutionInstalled)
                isRIActionCardsEnabled = true;
            else
                isRIActionCardsEnabled = isRIActionCardsEnabled & isRASolInstalled;
            getPackageInstallationStatus(function(pkgInstallStatus)
            {
                hidePageLoadingIcon();
                if(pkgInstallStatus)
                    checkIfHTMLLoadsFromWebResource(getOrgSettings);
                else
                    if(isFeatureFlag && !isSolutionInstalled)
                    {
                        HideDisclaimerDiv();
                        showTabsDiv();
                        startTimerForPackageInstallationCheck();
                        !isopenedfrompersonaloptions && showOverviewTab()
                    }
                    else
                    {
                        document.getElementById("headerTitle").style.display = "";
                        document.getElementById("headerDesc").style.display = "";
                        ShowPackageInstallButton();
                        disableInstallButton();
                        HideDisclaimerContinueButton();
                        startTimerForPackageInstallationCheck();
                        ShowDisclaimerTextDiv();
                        hideTabsDiv()
                    }
            })
        })
    }
    catch(error)
    {
    }
}
function getPackageInstallationStatus(pkgInstallcallback)
{
    try
    {
        var fetchXmlforroleassignment = "<fetch mapping='logical' count='2' version='1.0'><entity name='role'><attribute name='roleid' /><link-entity name='systemuserroles' from='roleid' to='roleid'><link-entity name='systemuser' from='systemuserid' to='systemuserid'><filter><condition attribute='systemuserid' operator='eq' value='202B99F3-331A-4AAF-BC57-C51C98A85B89' /></filter></link-entity></link-entity><filter><condition attribute='roleid' operator='eq' value='016fd16e-7be7-e611-80d6-00155d204901' /></filter></entity></fetch>";
        xrmInternal.messages.retrieveMultiple(fetchXmlforroleassignment).then(function(retrieveRoleResponse)
        {
            if(retrieveRoleResponse != undefined && retrieveRoleResponse != null)
            {
                var roleTypeCollection = retrieveRoleResponse.get_entityCollection();
                if(roleTypeCollection != null && roleTypeCollection.get_entities() != null && roleTypeCollection.get_entities().length > 0)
                {
                    isSolutionInstalled = true;
                    pkgInstallcallback(true)
                }
                else
                    pkgInstallcallback(false)
            }
        })
    }
    catch(error)
    {
        pkgInstallcallback(false)
    }
}
function getEEProvisioningStatus(provisioningcallback)
{
    if(isopenedfrompersonaloptions)
        return;
    try
    {
        xrmInternal.messages.getRIProvisioningStatus().then(function(response)
        {
            if(response !== undefined && response !== null && response.provisioningStatus !== undefined && response.provisioningStatus != null)
            {
                var data = JSON.parse(response.provisioningStatus),
                    proStatus = data.RiProvisioningStatus !== undefined && data.RiProvisioningStatus !== null ? parseInt(data.RiProvisioningStatus) : -1,
                    eeProStatus = data.EEProvisioningStatus !== undefined && data.EEProvisioningStatus !== null ? parseInt(data.EEProvisioningStatus) : -1,
                    errorCode = data.RiErrorStatusCode !== undefined && data.RiErrorStatusCode !== null ? parseInt(data.RiErrorStatusCode) : -1;
                provisionStatus = {status:proStatus,eestatus:eeProStatus,errorStatus:errorCode,errorMessage:data.RiErrorStatusMessage};
                provisioningcallback({status:proStatus,eestatus:eeProStatus,errorStatus:errorCode,errorMessage:data.RiErrorStatusMessage})
            }
        },function(response)
        {
            provisionStatus = {status:5,eestatus:5,errorStatus:response.get_request().eestatus};
            provisionDivsByStatus(provisionStatus);
            provisioningcallback(provisionStatus);
            internalUtilities.ClientApiUtility.actionFailedCallback(response)
        })
    }
    catch(error)
    {
        xrmInternal.openErrorDialog(error)
    }
}
function getTenantApiHubName(callback)
{
    try
    {
        xrmInternal.messages.getRITenantEndpointUrl().then(function(response)
        {
            if(response !== undefined && response !== null && response.tenantEndpointUrl !== undefined && response.tenantEndpointUrl != null)
            {
                var data = JSON.parse(response.tenantEndpointUrl),
                    tenantEndpointHubName = data.HubName !== undefined && data.HubName !== null ? data.HubName : "";
                callback({hubName:tenantEndpointHubName})
            }
        },internalUtilities.ClientApiUtility.actionFailedCallback)
    }
    catch(error)
    {
        xrmInternal.openErrorDialog(error)
    }
}
function StartProvision()
{
    DCISubscriptionType = BYOSSubscription;
    try
    {
        var hubName = $("#huburlValue").val(),
            tenantAppUrl = $("#webAppUrlValue").val(),
            accesskey = $("#accessKey").val();
        xrmInternal.messages.startRIProvisioning(hubName,accesskey).then(function(Resposne)
        {
            provisionStatus.status = 3
        },function(response)
        {
            provisionStatus = {status:5,errorStatus:response.get_request().status};
            provisionDivsByStatus(provisionStatus);
            internalUtilities.ClientApiUtility.actionFailedCallback(response)
        })
    }
    catch(error)
    {
        xrmInternal.openErrorDialog(error)
    }
}
function StartEEProvision()
{
    try
    {
        var hubName = "",
            tenantAppUrl = "",
            accesskey = "";
        xrmInternal.messages.startRIProvisioning(hubName,accesskey).then(function(Resposne)
        {
            provisionStatus.eestatus = 3
        },function(response)
        {
            provisionStatus = {eestatus:5,errorStatus:response.get_request().eestatus};
            provisionEEAciNotusedDivsByEEStatus(provisionStatus);
            internalUtilities.ClientApiUtility.actionFailedCallback(response)
        })
    }
    catch(error)
    {
        xrmInternal.openErrorDialog(error)
    }
}
function StartOneClickProvision()
{
    DCISubscriptionType = MSFTSubscription;
    try
    {
        var hubName = "oneclick",
            tenantAppUrl = "",
            accesskey = "";
        xrmInternal.messages.startRIProvisioning(hubName,accesskey).then(function(Resposne)
        {
            provisionStatus.status = 3
        },function(response)
        {
            provisionStatus = {status:5,errorStatus:response.get_request().status};
            provisionDivsByStatus(provisionStatus);
            internalUtilities.ClientApiUtility.actionFailedCallback(response)
        })
    }
    catch(error)
    {
        xrmInternal.openErrorDialog(error)
    }
}
function updateRiTenantInformation(hubName,accesskey,callback)
{
    try
    {
        AddFeatureTelemetryLog(rifeature,"","RI Tenant is getting updated with DCI Hub name : " + hubName);
        xrmInternal.messages.updateRITenantInfo(hubName,accesskey).then(function(response)
        {
            response != undefined && response != null && 
                callback(true)
        },internalUtilities.ClientApiUtility.actionFailedCallback)
    }
    catch(error)
    {
        AddFeatureTelemetryLog(rifeature,"","RI Tenant is failed to update DCI Hub name : " + hubName);
        xrmInternal.openErrorDialog(error)
    }
}
function loadProvisionResourceString()
{
    var langUrl = "";
    if(currentwindow.parent && currentwindow.parent.parent && currentwindow.parent.parent.Xrm && currentwindow.parent.parent.Xrm.Page && currentwindow.parent.parent.Xrm.Page.context)
        langUrl = "&clcid=0x" + currentwindow.parent.parent.Xrm.Page.context.getUserLcid().toString(16);
    var learnmoreText = getLocaleString("RI_Provisioning_Learnmore_Link_Text"),
        infolabelString = HtmlEncodeString(internalUtilities._String.format(HtmlDecodeString(getLocaleString("RI_Provisioning_InformationLabel_Text")),"<b>","</b>","<a class='anchor-style' href='" + HtmlDecodeString(getLocaleString("RI_Provisioning_AccessKeyUpdatePopUp_Header_Whatsthis_Link_Url") + HtmlEncodeString(langUrl)) + "' title='" + HtmlDecodeString(learnmoreText) + "' tabIndex='2' target='_blank'>" + HtmlDecodeString(learnmoreText) + "</a>"));
    $("#signInfoDiv").html(HtmlDecodeString(infolabelString));
    var whatsThisLinkToolTip = getLocaleString("RI_Provisioning_AccessKeyUpdatePopUp_Header_Whatsthis_Link_Tooltip"),
        updatePopupheaderString = HtmlEncodeString(internalUtilities._String.format(HtmlDecodeString(getLocaleString("RI_Provisioning_AccessKeyUpdatePopUp_Header_Title")),"<a style='color:#0072C6' href='" + HtmlDecodeString(getLocaleString("RI_Provisioning_AccessKeyUpdatePopUp_Header_Whatsthis_Link_Url") + HtmlEncodeString(langUrl)) + "' title='" + HtmlDecodeString(whatsThisLinkToolTip) + "' tabIndex='2' target='_blank'>","</a>"));
    $("#UpdateDialogHeader").html(HtmlDecodeString(updatePopupheaderString));
    var createTenantLinkText = getLocaleString("RI_Provisioning_CustomerInsightshub_Link"),
        createTenantAzureUrl = getLocaleString("RI_Provisioning_CustomerInsightshub_CreateTenantAzureUrl"),
        createtenantinfostring = HtmlEncodeString(internalUtilities._String.format(HtmlDecodeString(getLocaleString("RI_Provisioning_DontHaveHub_Lable")),"<a href='" + HtmlDecodeString(createTenantAzureUrl + HtmlEncodeString(langUrl)) + "' target='_blank' title='" + HtmlDecodeString(createTenantLinkText) + "' tabIndex='2'>" + HtmlDecodeString(createTenantLinkText) + "</a>"));
    $("#createTenantTextId").html(HtmlDecodeString(createtenantinfostring));
    var errorstring = HtmlEncodeString(internalUtilities._String.format(HtmlDecodeString(getLocaleString("RI_Provisioning_UnableToSetupRI_Exception_Message")),"<b>" + HtmlDecodeString(getLocaleString("RI_Provisioning_UnableToSetupRI_Exception_Message_RelationshipInsights")) + "</b>"));
    $("#provisionerrorDiv").html(HtmlDecodeString(errorstring));
    var signInfDivTooltip = internalUtilities._String.format(HtmlDecodeString(getLocaleString("RI_Provisioning_InformationLabel_Text")),"","","");
    $("#signInfoDiv").attr({"aria-label":signInfDivTooltip,title:signInfDivTooltip});
    var updatePopupheaderTooltip = internalUtilities._String.format(HtmlDecodeString(getLocaleString("RI_Provisioning_AccessKeyUpdatePopUp_Header_Title")),"","");
    $("#UpdateDialogHeader").attr({"aria-label":updatePopupheaderTooltip,title:updatePopupheaderTooltip});
    var createTenantAzureUrlTooltip = internalUtilities._String.format(HtmlDecodeString(getLocaleString("RI_Provisioning_DontHaveHub_Lable")),HtmlDecodeString(createTenantLinkText));
    $("#createTenantTextId").attr({"aria-label":createTenantAzureUrlTooltip,title:createTenantAzureUrlTooltip});
    var provisionerrorDivTooltip = internalUtilities._String.format(HtmlDecodeString(getLocaleString("RI_Provisioning_UnableToSetupRI_Exception_Message")),HtmlDecodeString(getLocaleString("RI_Provisioning_UnableToSetupRI_Exception_Message_RelationshipInsights")));
    $("#provisionerrorDiv").attr({"aria-label":provisionerrorDivTooltip,title:provisionerrorDivTooltip,tabindex:2});
    var infoIconSpanTooltip = HtmlDecodeString(getLocaleString("RI_Provisioning_CustomerInsightsHub_InfoIcon_ToolTip"));
    $("#infoIconSpan").attr({"aria-label":infoIconSpanTooltip,title:infoIconSpanTooltip});
    applyResourceKeyToControl("accessKeyTextId","RI_Provisioning_AccessKey_Lable_Text");
    var accesskeyTooltipText = HtmlDecodeString(getLocaleString("RI_Provisioning_AccessKey_ToolTip_Text"));
    $("#accessKeyTextId").attr({"aria-label":accesskeyTooltipText,title:accesskeyTooltipText});
    applyResourceKeyToControl("reenterAccessKeyTextId","RI_Provisioning_RetypeAccessKey_Lable_Text");
    var reenterAccessKeyTooltipText = HtmlDecodeString(getLocaleString("RI_Provisioning_RetypeAccessKey_Lable_Text"));
    $("#reenterAccessKeyTextId").attr({"aria-label":reenterAccessKeyTooltipText,title:reenterAccessKeyTooltipText});
    setAccessibilityForLinkButton("provisioningDataConsent","RI_Provisioning_ConsentLabel",2,HtmlDecodeString(getLocaleString("RI_Provisioning_Click_LearnMore_Url")));
    applyResourceKeyToControl("customerInsightsTextId","RI_Provisioning_TenantURLLable");
    var customerInsightsTooltipText = HtmlDecodeString(getLocaleString("RI_Provisioning_TenantURLLable"));
    $("#customerInsightsTextId").attr({"aria-label":customerInsightsTooltipText,title:customerInsightsTooltipText});
    setAccessibility("backButton","RI_Select_Provisioning_Type",2);
    setAccessibility("beginSetupBtn","RI_Provisioning_BeginSetup_Button",2);
    setAccessibility("provisionCompleteHeaderTextId","RI_Provisioning_Success");
    setAccessibility("backToStartBtn","RI_Provisioning_GotoSettings_Button",2);
    setAccessibility("hubUriEmtpyTextErrorId","RI_Provisioning_TenantURL_Error_Message");
    setAccessibility("accessKeyEmtpyTextErrorId","RI_Provisioning_AccessPolicyKey_Error_Message");
    setAccessibility("reenterAccessKeyEmtpyTextErrorId","RI_Provisioning_AccessPolicyKey_Error_Message");
    setAccessibility("reenterAccessKeyCompareTextErrorId","RI_Provisioning_AccessPolicyKetNotMatch_Exception_Message");
    setAccessibility("popupOkBtn","RI_Provisioning_Popup_OkButtonText",2);
    setAccessibility("popupCancelBtn","RI_Provisioning_Popup_CancelButtonText",2);
    setAccessibility("UpdateDialogHeaderDesc","RI_Provisioning_AccessKeyUpdatePopUp_Header_Title_Description");
    setAccessibility("pleaseWaitTextId1","RI_Provisioning_Waiting_Message",2);
    setAccessibility("verifyingTextId","RI_Provisioning_FinishSetUp_Message");
    setAccessibility("pleaseWaitTextId2","RI_Provisioning_Waiting_Message",2);
    setAccessibility("settingUpTextId","RI_Provisioning_SettingUp_Message");
    setAccessibility("pleaseWaitTextId3","RI_Provisioning_Waiting_Message",2);
    setAccessibility("finishingSetupTextId","RI_Provisioning_FinishSetUp_Message");
    setAccessibility("provisionCompleteHeaderTextId","RI_Provisioning_Success");
    setAccessibilityToCheckBoxControl("chkPrivacyAgreement","RI_Provisioning_ConsentLabel_ToolTip",2);
    setAccessibilityToCheckBoxControl("chkPrivacyAgreementForMSFTSub","RI_Provisioning_ConsentLabel_ToolTip",2);
    setAccessibilityForLinkButton("provisioningDataConsentForMSFTSub","RI_Provisioning_ConsentLabel",2,HtmlDecodeString(getLocaleString("RI_Provisioning_Click_LearnMore_Url")));
    var errorstringMSFT = HtmlEncodeString(internalUtilities._String.format(HtmlDecodeString(getLocaleString("RI_Provisioning_UnableToSetupRI_Exception_Message")),"<b>" + HtmlDecodeString(getLocaleString("RI_Provisioning_UnableToSetupRI_Exception_Message_RelationshipInsights")) + "</b>"));
    $("#provisionerrorDivForMSFTSub").html(HtmlDecodeString(errorstringMSFT));
    var provisionerrorDivTooltipMSFT = internalUtilities._String.format(HtmlDecodeString(getLocaleString("RI_Provisioning_UnableToSetupRI_Exception_Message")),HtmlDecodeString(getLocaleString("RI_Provisioning_UnableToSetupRI_Exception_Message_RelationshipInsights")));
    $("#provisionerrorDivForMSFTSub").attr({"aria-label":provisionerrorDivTooltipMSFT,title:provisionerrorDivTooltipMSFT,tabindex:2});
    setAccessibility("backButtonMSFT","RI_Select_Provisioning_Type",2);
    setAccessibility("beginOneClickProvisionBtn","RI_Provisioning_BeginSetup_Button",2);
    setAccessibility("BYOSSetupPage","RI_Provisioning_Select_BYOS_Button",2);
    setAccessibility("MSFTSetupPage","RI_Provisioning_Select_MSFT_Button",2);
    var provisionDCI = HtmlEncodeString(internalUtilities._String.format("<b>" + HtmlDecodeString(getLocaleString("RI_Provisioning_DCI")) + "</b>"));
    $("#chooseSubscriptionDiv").html(HtmlDecodeString(provisionDCI));
    var provisionDCIToolTip = internalUtilities._String.format(HtmlDecodeString(getLocaleString("RI_Provisioning_DCI")));
    $("#chooseSubscriptionDiv").attr({"aria-label":provisionDCIToolTip,title:provisionDCIToolTip,tabindex:2});
    var eelearnmoreText = getLocaleString("RI_Provisioning_Learnmore_Link_Text"),
        eeinfolabelString = HtmlEncodeString(internalUtilities._String.format(HtmlDecodeString(getLocaleString("EE_Provisioning_InformationLabel_Text"))));
    $("#EEInfoDiv").html(HtmlDecodeString(eeinfolabelString));
    setAccessibilityToCheckBoxControl("EEchkPrivacyAgreement","RI_Provisioning_ConsentLabel_ToolTip",2);
    var eeerrorstring = HtmlEncodeString(internalUtilities._String.format(HtmlDecodeString(getLocaleString("EE_Provisioning_UnableToSetupEE_Exception_Message")),"<b>" + HtmlDecodeString(getLocaleString("EE_Provisioning_UnableToSetupEE_Exception_Message_EmailEngagement")) + "</b>"));
    $("#EEprovisionerrorDiv").html(HtmlDecodeString(eeerrorstring));
    var eeInfDivTooltip = internalUtilities._String.format(HtmlDecodeString(getLocaleString("EE_Provisioning_InformationLabel_Text")),"","","");
    $("#EEInfoDiv").attr({"aria-label":eeInfDivTooltip,title:eeInfDivTooltip});
    var eeprovisionerrorDivTooltip = internalUtilities._String.format(HtmlDecodeString(getLocaleString("EE_Provisioning_UnableToSetupEE_Exception_Message")),HtmlDecodeString(getLocaleString("EE_Provisioning_UnableToSetupEE_Exception_Message_EmailEngagement")));
    $("#EEprovisionerrorDiv").attr({"aria-label":eeprovisionerrorDivTooltip,title:eeprovisionerrorDivTooltip,tabindex:2});
    setAccessibilityForLinkButton("EEprovisioningDataConsent","RI_Provisioning_ConsentLabel",2,HtmlDecodeString(getLocaleString("RI_Provisioning_Click_LearnMore_Url")));
    setAccessibility("EEbeginSetupBtn","RI_Provisioning_BeginSetup_Button",2);
    setAccessibility("provisioningEETextId","EE_Provisioning_Message");
    setAccessibility("EEpleaseWaitTextId1","EE_Provisioning_Waiting_Message",2);
    setWaterMarkText();
    setButtonText()
}
function setWaterMarkText()
{
    var tenantHubUrlTextBox = $("#huburlValue"),
        accessKeyTextBox = $("#accessKey"),
        reEnterKeyTextBox = $("#reEnterAccessKey"),
        resourceString = "";
    if(tenantHubUrlTextBox != undefined && tenantHubUrlTextBox != null)
    {
        resourceString = getLocaleString("RI_Provisioning_TenantUrl_WatermarkText");
        tenantHubUrlTextBox.attr("placeholder",HtmlDecodeString(resourceString))
    }
    if(accessKeyTextBox != undefined && accessKeyTextBox != null)
    {
        resourceString = getLocaleString("RI_Provisioning_AccessKey_WatermarkText");
        accessKeyTextBox.attr("placeholder",HtmlDecodeString(resourceString))
    }
    if(reEnterKeyTextBox != undefined && reEnterKeyTextBox != null)
    {
        resourceString = getLocaleString("RI_Provisioning_ReEnterAccessKey_WatermarkText");
        reEnterKeyTextBox.attr("placeholder",HtmlDecodeString(resourceString))
    }
}
function setButtonText()
{
    var beginSetUpBtn = $("#beginSetupBtn"),
        eeBeginSetUpBtn = $("#EEbeginSetupBtn"),
        backToStartBtn = $("#backToStartBtn"),
        popupOkBtn = $("#popupOkBtn"),
        popupCancelBtn = $("#popupCancelBtn"),
        btnDisclaimerContinue = $("#btnDisclaimerContinue"),
        btnpackageInstall = $("#btnpackageInstall"),
        beginOneClickProvisionSetUpBtn = $("#beginOneClickProvisionBtn"),
        MSFTSetupPageBtn = $("#MSFTSetupPage"),
        BYOSSetupPageBtn = $("#BYOSSetupPage"),
        backBtnAAMSFTPage = $("#backButtonMSFT"),
        backBtnAABYOSPage = $("#backButton");
    beginSetUpBtn != undefined && beginSetUpBtn != null && 
        beginSetUpBtn.val(HtmlDecodeString(getLocaleString("RI_Provisioning_BeginSetup_Button")));
    backBtnAAMSFTPage != undefined && backBtnAAMSFTPage != null && 
        backBtnAAMSFTPage.val(HtmlDecodeString(getLocaleString("RI_Select_Provisioning_Type")));
    backBtnAABYOSPage != undefined && backBtnAABYOSPage != null && 
        backBtnAABYOSPage.val(HtmlDecodeString(getLocaleString("RI_Select_Provisioning_Type")));
    beginOneClickProvisionSetUpBtn != undefined && beginOneClickProvisionSetUpBtn != null && 
        beginOneClickProvisionSetUpBtn.val(HtmlDecodeString(getLocaleString("RI_Provisioning_BeginSetup_Button")));
    MSFTSetupPageBtn != undefined && MSFTSetupPageBtn != null && 
        MSFTSetupPageBtn.val(HtmlDecodeString(getLocaleString("RI_Provisioning_Select_MSFT_Button")));
    BYOSSetupPageBtn != undefined && BYOSSetupPageBtn != null && 
        BYOSSetupPageBtn.val(HtmlDecodeString(getLocaleString("RI_Provisioning_Select_BYOS_Button")));
    eeBeginSetUpBtn != undefined && eeBeginSetUpBtn != null && 
        eeBeginSetUpBtn.val(HtmlDecodeString(getLocaleString("RI_Provisioning_BeginSetup_Button")));
    backToStartBtn != undefined && backToStartBtn != null && 
        backToStartBtn.val(HtmlDecodeString(getLocaleString("RI_Provisioning_GotoSettings_Button")));
    popupOkBtn != undefined && popupOkBtn != null && 
        popupOkBtn.val(HtmlDecodeString(getLocaleString("RI_Provisioning_Popup_OkButtonText")));
    popupCancelBtn != undefined && popupCancelBtn != null && 
        popupCancelBtn.val(HtmlDecodeString(getLocaleString("RI_Provisioning_Popup_CancelButtonText")));
    btnDisclaimerContinue != undefined && btnDisclaimerContinue != null && 
        btnDisclaimerContinue.val(HtmlDecodeString(getLocaleString("RI_Disclaimer_Continue_Text")));
    btnpackageInstall != undefined && btnpackageInstall != null && 
        btnpackageInstall.val(HtmlDecodeString(getLocaleString("RI_Package_Install_Text")))
}
function popupForUpdateAccessKey()
{
    getTenantApiHubName(function(data)
    {
        if(data != undefined && data != null && data.hubName != undefined && data.hubName != null)
        {
            $("#huburlValue").val(data.hubName);
            $("#huburlValue").prop("disabled",true);
            $("#beginSetupBtn").css("display","none");
            $("#beginOneClickProvisionBtn").css("display","none");
            $("#backButton").css("display","none");
            $("#backButtonMSFT").css("display","none");
            $("#EEbeginSetupBtn").css("display","none");
            $("#popupOkBtn").css("display","");
            $("#popupCancelBtn").css("display","");
            $("#signInfoDiv").css("display","none");
            $("#UpdateDialogHeaderDiv").css("display","inline");
            $("#signInfoDiv").addClass("displaynone");
            $("#UpdateDialogHeader").removeClass("displaynone");
            $("#UpdateDialogHeaderDesc").removeClass("displaynone");
            $("#PrivacyInfoDiv").addClass("displaynone");
            $("#customerInsightsTextId").parent().addClass("provisioningDivWidth");
            $("#accessKeyTextId").parent().addClass("provisioningDivWidth");
            $("#reenterAccessKeyTextId").parent().addClass("provisioningDivWidth");
            $("#infoIconSpan").addClass("displaynone");
            hideAllErrorSpans();
            var signInDiv = $("#SignIn");
            if(signInDiv != undefined && signInDiv != null)
            {
                $("#SignIn").removeClass("displaynone");
                $("#provisionerrorDiv").addClass("displaynone");
                $(".ConatinerDiv").addClass("showpopup");
                $(".ConatinerDiv").html(signInDiv);
                $(".ConatinerDiv").removeClass("displaynone");
                $("#provisionerrorDiv").hide();
                $("#accessKey").focus()
            }
        }
    })
}
function updateTenantInfo()
{
    var tenantApiUrl = $("#huburlValue").val(),
        accesskey = $("#accessKey").val(),
        reenteredAccesskey = $("#reEnterAccessKey").val();
    accesskey == "" && 
        $("#accessKeyEmtpyTextErrorId").show();
    reenteredAccesskey == "" && 
        $("#reenterAccessKeyEmtpyTextErrorId").show();
    accesskey != "" && reenteredAccesskey != "" && accesskey != reenteredAccesskey && 
        $("#reenterAccessKeyCompareTextErrorId").show();
    tenantApiUrl != "" && accesskey != "" && reenteredAccesskey != "" && accesskey == reenteredAccesskey && 
        updateRiTenantInformation(tenantApiUrl,accesskey,function(isupdated)
        {
            if(isupdated)
            {
                $("#aciProvisioningErrorDiv").addClass("displaynone");
                cancelUpdation()
            }
        })
}
function cancelUpdation()
{
    hideAllErrorSpans();
    $("#huburlValue").prop("disabled",false);
    $("#beginSetupBtn").css("display","");
    $("#popupOkBtn").css("display","none");
    $("#popupCancelBtn").css("display","none");
    $("#UpdateDialogHeaderDiv").css("display","none");
    $("#signInfoDiv").removeClass("displaynone");
    $("#UpdateDialogHeader").addClass("displaynone");
    $("#UpdateDialogHeaderDesc").addClass("displaynone");
    $("#PrivacyInfoDiv").removeClass("displaynone");
    $("#customerInsightsTextId").parent().removeClass("provisioningDivWidth");
    $("#accessKeyTextId").parent().removeClass("provisioningDivWidth");
    $("#reenterAccessKeyTextId").parent().removeClass("provisioningDivWidth");
    $("#infoIconSpan").removeClass("displaynone");
    var signInDiv = $("#SignIn");
    if(signInDiv != undefined && signInDiv != null)
    {
        $("#SignIn").addClass("displaynone");
        $(".ConatinerDiv").removeClass("showpopup");
        $(".ConatinerDiv").addClass("displaynone")
    }
}
function loadADCResourceString()
{
    setAccessibility("lblADCTitle","RI_AutodataCaptureTab_Title",1);
    applyResourceKeyToControl("spnADCSave","RI_CommonButtonSave_Title");
    var autoData_TabTooltip = internalUtilities._String.format(relationshipInsightsTablTooltipResourceKey,HtmlDecodeString(getLocaleString("RI_AutodataCaptureTab_Title")));
    $("#lblADCTitle").attr({"aria-label":autoData_TabTooltip,title:autoData_TabTooltip});
    saveButtonTooltip = internalUtilities._String.format(saveTooltipResourceKey,HtmlDecodeString(getLocaleString("RI_AutodataCaptureTab_Title")));
    $("#btnADCSave").attr({"aria-label":saveButtonTooltip,title:saveButtonTooltip,tabindex:"3"});
    setAccessibilityForLinkButton("lblADCDataConsent","RI_EmailEngagementTab_ConsentLabel",2,HtmlDecodeString(getLocaleString("RI_AutoCapture_Learnmore_Link_Url")));
    setAccessibility("adcInfoIcon",HtmlDecodeString(getLocaleString("RI_EmailEngagementTab_ConsentLabel_ToolTip")),"",true);
    setAccessibilityForLinkButton("lblADCInformation","RI_AutodataCaptureTab_LearnmoreInfo",2,HtmlDecodeString(getLocaleString("RI_AutoCapture_Learnmore_Link_Url")));
    setAccessibility("lblADCOrgSetting","RI_AutodataCapture_CheckboxLabel");
    setAccessibility("textADCPreviewnotAvailable",previewTurnOffMessageByTabTitle(HtmlDecodeString(getLocaleString("RI_AutodataCaptureTab_Title"))),"",true);
    setAccessibilityToCheckBoxControl("chkADCOrgSetting","RI_AutodataCapture_CheckboxLabel",2)
}
function LoadAutoDataCaptureTab()
{
    var checkboxCtrl = $("#chkADCOrgSetting");
    checkboxCtrl !== undefined && checkboxCtrl !== null && 
        checkboxCtrl.prop("checked",isADCOrgSettingEnabled)
}
function updateADCSetting()
{
    if(xrmInternal != null && xrmInternal != undefined)
        try
        {
            var isChecked = $("#chkADCOrgSetting").is(":checked");
            if(isADCOrgSettingEnabled != isChecked)
            {
                var attributeDetails = prepareAttributesForOrgSettings(isChecked,"isautodatacaptureenabled"),
                    entity = prepareEntityRecord(organizationId,internalUtilities.EntityNames.Organization,attributeDetails);
                if(entity != null)
                {
                    var entityRecords = [];
                    entityRecords.push(entity);
                    isADCOrgSettingEnabled = isChecked;
                    update(entityRecords,currentwindow.parent.Mscrm.FeatureNames.AutoDataCapture);
                    AddFeatureTelemetryLog(adcfeature,isChecked ? enableMsgType : disableMsgType,"Auto data capture feature bit [isautodatacaptureenabled] is updated with value " + isChecked)
                }
            }
        }
        catch(error)
        {
            xrmUtility.confirmDialog(HtmlDecodeString(getLocaleString("RI_ADC_Save_Error_Message")))
        }
}
function previewTurnOffMessageByTabTitle(tabTitle)
{
    var formattedRITurnOffText = internalUtilities._String.format(HtmlDecodeString(getLocaleString("RI_SettingsTurnOff_Message")),tabTitle);
    return formattedRITurnOffText
}
function validateProvisioningSection()
{
    var hubUrlText = $("#huburlValue"),
        accessKey = $("#accessKey"),
        reEnterExcessKey = $("#reEnterAccessKey"),
        chkPrivacyAgreement = $("#chkPrivacyAgreement");
    if(hubUrlText.val() != "" && accessKey.val() != "" && reEnterExcessKey.val() != "" && accessKey.val() == reEnterExcessKey.val() && $(chkPrivacyAgreement).is(":checked"))
        enableBeginSetUpButton();
    else
        disableBeginSetUpButton()
}
function validateEEProvisioningSection()
{
    var eechkPrivacyAgreement = $("#EEchkPrivacyAgreement");
    if($(eechkPrivacyAgreement).is(":checked"))
        enableEEBeginSetUpButton();
    else
        disableEEBeginSetUpButton()
}
function validateOneClickProvisioningSection()
{
    var eechkPrivacyAgreement = $("#chkPrivacyAgreementForMSFTSub");
    if($(eechkPrivacyAgreement).is(":checked"))
        enableOneClickProvisioningBtn();
    else
        disableOneClickProvisioningBtn()
}
function enableOneClickProvisioningBtn()
{
    $("#beginOneClickProvisionBtn").prop("disabled",false);
    $("#beginOneClickProvisionBtn").removeClass("button-disable")
}
function disableOneClickProvisioningBtn()
{
    $("#beginOneClickProvisionBtn").prop("disabled",true);
    $("#beginOneClickProvisionBtn").addClass("button-disable")
}
function enableBeginSetUpButton()
{
    $("#beginSetupBtn").prop("disabled",false);
    $("#beginSetupBtn").removeClass("button-disable")
}
function disableBeginSetUpButton()
{
    $("#beginSetupBtn").prop("disabled",true);
    $("#beginSetupBtn").addClass("button-disable")
}
function enableEEBeginSetUpButton()
{
    $("#EEbeginSetupBtn").prop("disabled",false);
    $("#EEbeginSetupBtn").removeClass("button-disable")
}
function disableEEBeginSetUpButton()
{
    $("#EEbeginSetupBtn").prop("disabled",true);
    $("#EEbeginSetupBtn").addClass("button-disable")
}
function attachKeyPressEventsForTabsAndButtons()
{
    $("#lblOVTitle").on("click keypress",function(event)
    {
        event.type == "click" && event.preventDefault();
        tabUnSavedChangesConfirmDialog();
        DisplayTabOnAccessibility(this,event,provisionStatus.status)
    });
    $("#lblRATitle").on("click keypress",function(event)
    {
        event.type == "click" && 
            event.preventDefault();
        tabUnSavedChangesConfirmDialog();
        DisplayTabOnAccessibility(this,event,provisionStatus.status)
    });
    $("#lblADCTitle").on("click keypress",function(event)
    {
        event.type == "click" && 
            event.preventDefault();
        tabUnSavedChangesConfirmDialog();
        DisplayTabOnAccessibility(this,event,provisionStatus.status)
    });
    $("#RAATabTitle").on("click keypress",function(event)
    {
        event.type == "click" && 
            event.preventDefault();
        if(provisionStatus.status == 2)
        {
            $("#relationshipAnalayticsIframeContainerDiv").removeClass("displaynone");
            $("#RAA-Container-ProvisioningDiv").addClass("displaynone");
            tabUnSavedChangesConfirmDialog();
            DisplayTabOnAccessibility(this,event,provisionStatus.status)
        }
        else
            onRiAnaltyicsClick(this,event)
    });
    $("#lblEIATitle").on("click keypress",function(event)
    {
        event.type == "click" && 
            event.preventDefault();
        if(isACIForEmailEnagagementEnabled)
            if(provisionStatus.status == 2)
            {
                $("#emailinteractionContentDiv").removeClass("displaynone");
                $("#EE-Container-ProvisioningDiv").addClass("displaynone");
                tabUnSavedChangesConfirmDialog();
                DisplayTabOnAccessibility(this,event,provisionStatus.status)
            }
            else
                onEmailEngagementClick(this,event);
        else
            if(provisionStatus.eestatus == 2)
            {
                $("#emailinteractionContentDiv").removeClass("displaynone");
                $("#EE-Container-ProvisioningDiv").addClass("displaynone");
                tabUnSavedChangesConfirmDialog();
                DisplayTabOnAccessibility(this,event,provisionStatus.status)
            }
            else
                onEmailEngagementClick(this,event)
    });
    $("#btnSave").keypress(function(event)
    {
        (event.keyCode == "13" || event.keyCode == "32") && 
            saveActionCards()
    });
    $("#btnEmailSave").keypress(function(event)
    {
        (event.keyCode == "13" || event.keyCode == "32") && 
            updateOrgSetting()
    });
    $("#btnADCSave").keypress(function(event)
    {
        (event.keyCode == "13" || event.keyCode == "32") && 
            updateADCSetting()
    });
    $("#beginSetupBtn").keypress(function(event)
    {
        (event.keyCode == "13" || event.keyCode == "32") && 
            startLoading()
    });
    $("#EEbeginSetupBtn").keypress(function(event)
    {
        (event.keyCode == "13" || event.keyCode == "32") && 
            startEELoading()
    });
    $("#popupOkBtn").keypress(function(event)
    {
        (event.keyCode == "13" || event.keyCode == "32") && 
            updateTenantInfo()
    });
    $("#popupCancelBtn").keypress(function(event)
    {
        (event.keyCode == "13" || event.keyCode == "32") && 
            cancelUpdation()
    });
    $("#updatePopUpEntryLink").keypress(function(event)
    {
        event.keyCode == "13" && 
            popupForUpdateAccessKey()
    });
    $("#beginOneClickProvisionBtn").keypress(function(event)
    {
        (event.keyCode == "13" || event.keyCode == "32") && 
            startOneClickLoading()
    });
    $("#MSFTSetupPage").keypress(function(event)
    {
        (event.keyCode == "13" || event.keyCode == "32") && 
            loadMSFTProvisioningUI()
    });
    $("#BYOSSetupPage").keypress(function(event)
    {
        (event.keyCode == "13" || event.keyCode == "32") && 
            loadBYOSProvisioningUI()
    });
    $("#backButton").keypress(function(event)
    {
        (event.keyCode == "13" || event.keyCode == "32") && 
            goBackToChooseSubscription()
    });
    $("#backButtonMSFT").keypress(function(event)
    {
        (event.keyCode == "13" || event.keyCode == "32") && 
            goBackToChooseSubscription()
    })
}
function setAccessibilityForAnchorTag(controlid,resouceKey,tabindex,url)
{
    var tabIndex = tabindex,
        ctrl = $("#" + controlid);
    if(ctrl !== undefined && ctrl !== null)
    {
        var resourceString = HtmlDecodeString(getLocaleString(resouceKey));
        ctrl.attr({"aria-label":resourceString,title:resourceString,tabindex:tabIndex,href:HtmlDecodeString(getLocaleString(url))});
        ctrl.text(resourceString)
    }
}
function validateNumber(event)
{
    var key = window.event ? event.keyCode : event.which;
    if(event.keyCode === 8 || event.keyCode === 46 || event.keyCode === 37 || event.keyCode === 39 || event.keyCode === 9)
        return true;
    else
        if(key < 48 || key > 57)
        {
            event.preventDefault();
            return false
        }
        else
            return true
}
function hideInnerTabs()
{
    $("#liRelationshipAssistanceTab").addClass("displaynone");
    $("#liAutoDataCaptureTab").addClass("displaynone");
    $("#liRelationshipAnalyticsTab").addClass("displaynone");
    $("#liEmailInteractionAnalysisTab").addClass("displaynone")
}
