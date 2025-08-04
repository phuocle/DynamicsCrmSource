
var _oConst = {sInvalidSchemaNameChars:"[^A-Za-z0-9_]",sCheckBoxIdFormat:"chkDA{0}",sEntityEditorUrlFormat:"/tools/systemcustomization/Entities/manageEntity.aspx?entityId={0}",sInformationPageId:"divInformation",sFormsPageId:"divForms",sViewsPageId:"divViews",sUIElementsPageId:"divUIElements",sVisualizationsPageId:"divVisualizations",sAttributesPageId:"divAttributes",sRelationshipsPageId1ToN:"divRelationships1ToN",sRelationshipsPageIdNTo1:"divRelationshipsNTo1",sRelationshipsPageIdNToN:"divRelationshipsNToN",sMessagesPageId:"divMessages",sBusinessRulesListPage:"divBusinessRules",sHierarchyRulesListPage:"divHierarchyRules",sSimilarityRulesListPage:"divSimilarityRules",sAlternateKeysListPage:"divAlternateKeys",sDashboardsPage:"divDashboards"},
    _oMessages = {sPublishAlert:LOCID_MANENT_PUBLISHALERT,sCloseAlert:LOCID_FORMS_SAVE_CONFIRM_TITLE,sPublishUnsavedAlert:LOCID_MESSAGE_PUBLISHUNSAVED},
    _bSaving = false,
    _bReadyState = false,
    _sInputXml = "",
    _txtSingularName,
    _txtPluralName;
Sys.Application.add_load(ManageEntityJsWindowOnLoad);
Sys.Application.add_unload(ManageEntityJsWindowOnUnLoad);
function ManageEntityJsWindowOnLoad()
{
    _bReadyState = true;
    !_bCreate && 
        window.focus();
    _sInputXml = getEntityXml();
    loadPage(_oConst.sInformationPageId);
    _txtSingularName = Mscrm.FormControlInputBehavior.GetBehavior("txtSingularName");
    _txtPluralName = Mscrm.FormControlInputBehavior.GetBehavior("txtPluralName");
    !_txtSingularName.get_disabled() && 
        _txtSingularName.setFocus();
    $addHandler(document,"keydown",ProcessKeyDown);
    var entityColorTextBox = document.getElementById("entityColor");
    entityColorTextBox != null && 
        $addHandler(entityColorTextBox,"keyup",onEntityColorChange);
    attachWindowOnBeforeUnload(window_onbeforeunload)
}
function ManageEntityJsWindowOnUnLoad()
{
    $removeHandler(document,"keydown",ProcessKeyDown);
    var entityColorTextBox = document.getElementById("entityColor");
    entityColorTextBox != null && 
        $removeHandler(entityColorTextBox,"keyup",onEntityColorChange)
}
function window_onbeforeunload(oEvent)
{
    oEvent = oEvent.rawEvent;
    if(!_bSaving && isFormDirty())
        oEvent.returnValue = _oMessages.sCloseAlert
}
function _save()
{
    saveEntityAction(false)
}
function _saveandclose()
{
    saveEntityAction(true)
}
function _saveandnew()
{
}
function CallbackParams(bClose,bReload,bRefreshGrid,bRerfreshMsgGrid)
{
    this.bClose = bClose;
    this.bReload = bReload;
    this.bRefreshGrid = bRefreshGrid;
    this.bRerfreshMsgGrid = bRerfreshMsgGrid
}
function remoteEntityCommandCallback(oResult,oCallbackParams)
{
    if(oResult.Success || oResult.get_success && oResult.get_success())
    {
        var isNewEntity = false;
        if(oResult.Success)
        {
            if(oResult.RemoteCommand.Command == _oEntUtlConst.sCreateEntityCommand)
            {
                _sEntityId = oResult.ReturnValue;
                isNewEntity = true
            }
        }
        else
            if(oResult.get_remoteCommandXml().get_command() == _oEntUtlConst.sCreateEntityCommand)
            {
                var iEntityIdStart = oResult.get_returnValue().indexOf("<entityid>");
                if(iEntityIdStart != -1)
                {
                    iEntityIdStart += 10;
                    _sEntityId = CrmEncodeDecode.CrmXmlDecode(oResult.get_returnValue().substring(iEntityIdStart,oResult.get_returnValue().indexOf("</entityid>")));
                    isNewEntity = true
                }
            }
        SendResponseToAppDesigner(isNewEntity,_sEntityId,oResult);
        if(oCallbackParams.bRefreshGrid)
        {
            try
            {
                window.opener.$find("gridEntities").Refresh()
            }
            catch(e)
            {
            }
            RefreshSolutionExplorer()
        }
        if(oCallbackParams.bClose)
        {
            CloseEntityEditor();
            return false
        }
        if(oCallbackParams.bReload)
        {
            var frmReload = $get("frmReloadId");
            frmReload.action = Mscrm.CrmUri.create(formatString(_oConst.sEntityEditorUrlFormat,_sEntityId));
            frmReload.submit();
            return false
        }
        oCallbackParams.bRerfreshMsgGrid && 
            refreshMsgGrid()
    }
    _bSaving = false;
    return true
}
function remoteEntityCommandCallbackAsync(oResult,oCallbackParams)
{
    bHideMessage = true;
    var isNewEntity = false;
    if(!IsNull(oResult) && oResult.get_success())
    {
        if(oResult.get_remoteCommandXml().get_command() == _oEntUtlConst.sCreateEntityCommand)
        {
            var iEntityIdStart = oResult.get_returnValue().indexOf("<entityid>");
            isNewEntity = true;
            if(iEntityIdStart != -1)
            {
                iEntityIdStart += 10;
                _sEntityId = CrmEncodeDecode.CrmXmlDecode(oResult.get_returnValue().substring(iEntityIdStart,oResult.get_returnValue().indexOf("</entityid>")))
            }
        }
        SendResponseToAppDesigner(isNewEntity,_sEntityId,oResult);
        if(!IsNull(oCallbackParams) && !IsNull(oCallbackParams._remoteCallBackParameters$0))
        {
            if(oCallbackParams.get_remoteCallBackParameters().bRefreshGrid)
            {
                try
                {
                    window.opener.$find("gridEntities").Refresh()
                }
                catch(e)
                {
                }
                RefreshSolutionExplorer()
            }
            if(oCallbackParams.get_remoteCallBackParameters().bClose)
            {
                CloseEntityEditor();
                bHideMessage = false
            }
            if(oCallbackParams.get_remoteCallBackParameters().bReload)
            {
                var frmReload = $get("frmReloadId");
                frmReload.action = Mscrm.CrmUri.create(formatString(_oConst.sEntityEditorUrlFormat,_sEntityId));
                frmReload.submit()
            }
            oCallbackParams.get_remoteCallBackParameters().bRerfreshMsgGrid && refreshMsgGrid()
        }
    }
    else
        _bSaving = false;
    bHideMessage && HideActionMsg();
    !IsNull(oResult) && !oResult.get_success() && ViewXml(XUI.Xml.XMLSerializer.serializeToString(oResult.get_rawResponse()))
}
function RefreshSolutionExplorer()
{
    try
    {
        var pagemode = document.getElementById("pagemode");
        if(!IsNull(pagemode) && pagemode.value == "iframe")
            PageOnloadCallBack();
        else
        {
            var grid = window.opener.$find(getGridId(window.opener));
            grid.Refresh();
            window.opener.Mscrm.TreeNavControl.refreshTree()
        }
    }
    catch(e)
    {
    }
}
function CloseEntityEditor()
{
    var pagemode = document.getElementById("pagemode");
    if(!IsNull(pagemode) && pagemode.value == "iframe")
        Mscrm.TreeNavControl.navigateToNode("9801");
    else
        closeWindow()
}
function IsRequestFromAppDesigner()
{
    var returnValue = false;
    if(Mscrm.FeatureControl.get_Current().areFeaturesEnabled([Mscrm.FeatureNames.AppModuleForOrganization,Mscrm.FeatureNames.AppDesigner]))
        returnValue = !IsNull(window.parent) && !IsNull(window.parent.opener) && !IsNull(window.parent.opener.AppDesignerCallback);
    return returnValue
}
function SendResponseToAppDesigner(isNewEntity,entityId,oResult)
{
    if(IsRequestFromAppDesigner())
    {
        var command = oResult.Success ? oResult.RemoteCommand.Command : oResult.get_remoteCommandXml().get_command(),
            isPublish = command == _oEntUtlConst.sPublishAllCustomizationsCommand || command == _oEntUtlConst.sPublishCustomizationsCommand;
        if(isNewEntity || isPublish)
        {
            var entityDisplayName = Mscrm.FormControlInputBehavior.GetBehavior($get("txtSingularName").id).get_dataValue(),
                entityPluralName = Mscrm.FormControlInputBehavior.GetBehavior($get("txtPluralName").id).get_dataValue(),
                entityLogicalName = "new_" + Mscrm.FormControlInputBehavior.GetBehavior($get("txtSchemaName").id).get_dataValue();
            if(!isNullOrEmptyString(entityId))
                entityId = entityId.replace(/{|}/g,"").toLowerCase();
            var resultobj = {id:entityId,displayName:entityDisplayName,params:{isNewEntity:isNewEntity,pluralname:entityPluralName,logicalName:entityLogicalName}};
            window.parent.opener.AppDesignerCallback(resultobj,"Entity",entityId)
        }
    }
}
function PageOnloadCallBack()
{
    try
    {
        var pagemode = document.getElementById("pagemode");
        !IsNull(pagemode) && pagemode.value == "iframe" && 
            Mscrm.TreeNavControl.iFrameOnLoadCallBack()
    }
    catch(e)
    {
    }
}
function saveEntityAction(bClose)
{
    if(!_bSaving && validateParameters())
    {
        _bSaving = true;
        var sDataXml = getEntityXml(),
            oCallbackParams = new CallbackParams(bClose,true,true,false);
        if(_bCreate)
            if(Mscrm.Utilities.isSafari())
                createEntity(sDataXml,remoteEntityCommandCallbackAsync,oCallbackParams);
            else
                createEntity(sDataXml,remoteEntityCommandCallback,oCallbackParams);
        else
            if(isFormDirty())
                if(Mscrm.Utilities.isSafari())
                    updateEntity(sDataXml,remoteEntityCommandCallbackAsync,oCallbackParams);
                else
                    updateEntity(sDataXml,remoteEntityCommandCallback,oCallbackParams);
            else
                if(bClose)
                {
                    CloseEntityEditor();
                    return
                }
                else
                    _bSaving = false;
        var _isCCFSaving = false;
        if(Mscrm.FeatureControl.get_Current().isFeatureEnabled(Mscrm.FeatureNames.CustomControlMobile) && !IsNull(Mscrm.CustomControls) && !IsNull(Mscrm.CustomControls.CustomControlManager))
            if(isCustomControlsTabDirty())
            {
                var entityCustomControlXmlDoc = Mscrm.CustomControls.CustomControlManager.get_instance().generateGridSnippetForEntity();
                if(!IsNull(entityCustomControlXmlDoc))
                {
                    var sCustomControlXml = convertXmlDocToString(entityCustomControlXmlDoc);
                    if(!IsNull(sCustomControlXml))
                    {
                        _isCCFSaving = true;
                        window.setTimeout(function()
                        {
                            createOrupdateCustomControlDefaultConfig(sCustomControlXml,scheduleUpdateEntityHomeGridEvents)
                        },200)
                    }
                }
            }
        !_isCCFSaving && 
            scheduleUpdateEntityHomeGridEvents()
    }
}
function scheduleUpdateEntityHomeGridEvents()
{
    if(Mscrm.FeatureControl.get_Current().isFeatureEnabled(Mscrm.FeatureNames.EditableGridControlJsEvents) && isEventsControlsTabDirty())
    {
        Mscrm.FormLibraryAndEventHandlerUtils.processLibraryXmlBeforeSave();
        var newFormXml = convertXmlDocToString(Mscrm.FormLibraryAndEventHandlerUtils.formXml);
        !IsNull(newFormXml) && 
            window.setTimeout(function()
            {
                updateEntityHomeGridEvents(newFormXml,_sEntityId)
            },200)
    }
}
function deleteEntityAction()
{
    var uri = Mscrm.CrmUri.create("/_grid/cmds/dlg_delete.aspx?iObjType=9801&iTotal=1"),
        ids = [];
    ids[0] = _sEntityId;
    var crmDialog = new Mscrm.CrmDialog(uri,ids,570,205,null);
    crmDialog.setCallbackInfo("performActionAfterDelete",this,null);
    crmDialog.show()
}
function performActionAfterDelete(result)
{
    if(!IsNull(result))
    {
        try
        {
            var pagemode = $get("pagemode");
            if(!IsNull(pagemode) && pagemode.value == "iframe")
                PageOnloadCallBack();
            else
            {
                var grid = window.opener.$find(getGridId(window.opener));
                grid.Refresh();
                window.opener.Mscrm.TreeNavControl.refreshTree()
            }
        }
        catch(e)
        {
        }
        CloseEntityEditor()
    }
}
function showDependencyAction()
{
    Mscrm.Dependency.launchDependencyDlg(Mscrm.EntityTypeCode.Entity,_sEntityId)
}
function managedPropertyAction()
{
    Mscrm.ManagedPropertyUtil.launchManagedPropertyDlg(Mscrm.EntityTypeCode.Entity,_sEntityId)
}
function publishEntityAction()
{
    if(!isFormDirty() || confirm(_oMessages.sPublishAlert))
    {
        var oDataXml = createXmlDoc(_oTags.publish),
            oEntitiesXml = addXmlNode(oDataXml,_oTags.entities);
        addTextXmlNode(oEntitiesXml,_oTags.entity,_sEntityId);
        var sDataXml = convertXmlDocToString(oDataXml),
            oCallbackParams = new CallbackParams(false,false,true,true);
        if(Mscrm.Utilities.isSafari())
            publishEntities(sDataXml,1,remoteEntityCommandCallbackAsync,oCallbackParams);
        else
            publishEntities(sDataXml,1,remoteEntityCommandCallback,oCallbackParams)
    }
}
function publishEntitiesAllAction()
{
    var isDirty = isFormDirty();
    if(!isDirty || isDirty && confirm(_oMessages.sPublishUnsavedAlert))
    {
        var oCallbackParams = new CallbackParams(false,false,true,true);
        publishEntitiesAll(remoteEntityCommandCallback,oCallbackParams)
    }
}
function updateEntityIconsAction()
{
    var retVal = updateEntityIcons(_sEntityId,true);
    !IsNull(retVal) && retVal && 
        RefreshSolutionExplorer()
}
var _oVisiblePage = null;
function loadPage(sPageId,ev)
{
    var oPage = $get(sPageId);
    if(!IsNull(_oVisiblePage))
        _oVisiblePage.style.display = "none";
    _oVisiblePage = oPage;
    _oVisiblePage.style.display = "inline";
    if(sPageId != _oConst.sInformationPageId)
    {
        var oIFrameElement = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild(oPage));
        if(oIFrameElement.src.indexOf("/_static/blank.htm") > -1)
            oIFrameElement.src = oIFrameElement.getAttribute("url")
    }
    var target = Mscrm.Utilities.getEventTarget(ev);
    !IsNull(target) && 
        Mscrm.Details.resetBreadcrumb(target);
    PageOnloadCallBack()
}
function getEntityXml()
{
    var oDataXml = createXmlDoc(_oTags.entity),
        addEvenWhenDisabled = _bCreate;
    addTextXmlNode(oDataXml,_oTags.entityid,_sEntityId);
    addTextXmlNode(oDataXml,_oTags.sitemapid,_siteMapId);
    addSchemaXml(oDataXml,addEvenWhenDisabled);
    addDisplayAreaXml(oDataXml);
    addActivityXml(oDataXml);
    addRichClientXml(oDataXml,addEvenWhenDisabled);
    addMailMergeXml(oDataXml,addEvenWhenDisabled);
    addAccessTeamXml(oDataXml);
    addDuplicateDetectionXml(oDataXml);
    addAssociatedEntityXml(oDataXml,addEvenWhenDisabled);
    addConnectionsXml(oDataXml,true);
    addAuditXml(oDataXml);
    addChangeTrackingXml(oDataXml);
    addDocumentManagementXml(oDataXml);
    addKnowledgeManagementXml(oDataXml);
    addBusinessProcessXml(oDataXml);
    addCollaborationXml(oDataXml);
    addVisibleInMobileXml(oDataXml);
    addReadingPaneEnabledXml(oDataXml);
    addPrimaryAttributeXml(oDataXml);
    addQuickCreateXml(oDataXml);
    addPrimaryImageXml(oDataXml);
    addEntityColorXml(oDataXml);
    addOneNoteIntegrationXml(oDataXml);
    addExternalChannelsXml(oDataXml);
    addInteractionCentricXml(oDataXml);
    addSlaXml(oDataXml);
    return convertXmlDocToString(oDataXml)
}
function addSchemaXml(oDataXml)
{
    addControlDataValue(oDataXml,_oTags.singularname,$get("txtSingularName"),true);
    addControlDataValue(oDataXml,_oTags.pluralname,$get("txtPluralName"),true);
    addControlDataValue(oDataXml,_oTags.schemaname,$get("txtSchemaName"),true);
    addControlDataValue(oDataXml,_oTags.ownershiptype,$get("selOwnershipType"),true);
    addControlDataValue(oDataXml,_oTags.description,$get("txtDescription"),true);
    if(!IsNull($get("txtHelpURL")))
    {
        addControlDataValue(oDataXml,_oTags.entityhelpurl,$get("txtHelpURL"),true);
        addControlDataValue(oDataXml,_oTags.entityhelpurlenabled,$get("checkCustomizedHelp"),true)
    }
}
function addDisplayAreaXml(oDataXml)
{
    for(var oDisplayAreasXml = addXmlNode(oDataXml,_oTags.displayareas),
        iCheckBox = 0; true; iCheckBox++)
    {
        var oCheckBox = $get(formatString(_oConst.sCheckBoxIdFormat,iCheckBox)),
            checkBoxControl = Mscrm.FormControlInputBehavior.GetElementBehavior(oCheckBox);
        if(IsNull(oCheckBox))
            break;
        if(!checkBoxControl.get_disabled())
        {
            var oDisplayAreaXml = addXmlNode(oDisplayAreasXml,_oTags.displayarea);
            addXmlAttribute(oDisplayAreaXml,_oTags.id,oCheckBox.getAttribute("areaid"));
            addControlDataValueAsAttribute(oDisplayAreaXml,_oTags.displayed,oCheckBox)
        }
    }
}
function addMailMergeXml(oDataXml,addEvenWhenDisabled)
{
    addControlDataValue(oDataXml,_oTags.mailmergecheck,$get("EnableMailMergeCheck"),addEvenWhenDisabled)
}
function addAuditXml(oDataXml)
{
    addControlDataValue(oDataXml,_oTags.auditenabled,$get("chkIsAuditingEnabled"));
    addControlDataValue(oDataXml,_oTags.retrieveauditenabled,$get("chkRetrieveAuditing"));
    addControlDataValue(oDataXml,_oTags.retrievemultipleauditenabled,$get("chkRetrieveMultipleAuditing"))
}
function addChangeTrackingXml(oDataXml)
{
    addControlDataValue(oDataXml,_oTags.changetrackingenabled,$get("chkChangeTrackingEnabled"))
}
function addDocumentManagementXml(oDataXml)
{
    addControlDataValue(oDataXml,_oTags.docmgmtenabled,$get("enableDocumentMgmt"))
}
function addOneNoteIntegrationXml(oDataXml)
{
    !IsNull($get("enableOneNoteIntegration")) && 
        addControlDataValue(oDataXml,_oTags.onenoteintegrationenabled,$get("enableOneNoteIntegration"))
}
function addExternalChannelsXml(oDataXml)
{
    !IsNull($get("chkExternalChannelsEnabled")) && 
        addControlDataValue(oDataXml,_oTags.isenabledforexternalchannels,$get("chkExternalChannelsEnabled"))
}
function addKnowledgeManagementXml(oDataXml)
{
    !IsNull($get("enableKnowledgeMgmt")) && 
        addControlDataValue(oDataXml,_oTags.knowledgemgmtenabled,$get("enableKnowledgeMgmt"))
}
function addSlaXml(oDataXml)
{
    !IsNull($get("enableSla")) && 
        addControlDataValue(oDataXml,_oTags.isslaenabled,$get("enableSla"))
}
function addEntityColorXml(oDataXml)
{
    addControlDataValue(oDataXml,_oTags.entitycolor,$get("entityColor"))
}
function addAccessTeamXml(oDataXml)
{
    addControlDataValue(oDataXml,_oTags.autocreateaccessteams,$get("enableAutoCreateAccessTeams"))
}
function addBusinessProcessXml(oDataXml)
{
    addControlDataValue(oDataXml,_oTags.businessprocessenabled,$get("chkIsBusinessProcessEnabled"))
}
function addInteractionCentricXml(oDataXml)
{
    addControlDataValue(oDataXml,_oTags.interactioncentricenabled,$get("chkIsInteractionCentricEnabled"))
}
function addDuplicateDetectionXml(oDataXml)
{
    addControlDataValue(oDataXml,_oTags.duplicatecheck,$get("chkEnableDupCheck"),true)
}
function addCollaborationXml(oDataXml)
{
    addControlDataValue(oDataXml,_oTags.collaboration,$get("chkCollaboration"),true);
    addControlDataValue(oDataXml,_oTags.autoroutetoownerqueue,$get("chkAutoRoute"),true)
}
function addActivityXml(oDataXml)
{
    var checkIsActivity = $get("checkIsActivity"),
        isActivityControl = Mscrm.FormControlInputBehavior.GetElementBehavior(checkIsActivity),
        checkIsCommunicationActivity = $get("checkIsCommunicationActivity"),
        oAcXml = addXmlNode(oDataXml,_oTags.entityisactivity);
    if(!IsNull(oAcXml) && !isActivityControl.get_disabled())
    {
        addControlDataValue(oDataXml,_oTags.ownershiptype,$get("selOwnershipType"),true);
        addControlDataValue(oAcXml,_oTags.entityisactivity,checkIsActivity);
        addControlDataValue(oDataXml,_oTags.iscommunicationactivity,checkIsCommunicationActivity)
    }
}
function addRichClientXml(oDataXml,addEvenWhenDisabled)
{
    var oRCXml = addXmlNode(oDataXml,_oTags.richclient);
    addControlDataValue(oRCXml,_oTags.offline,$get("chkRCOffline"),addEvenWhenDisabled)
}
function addAssociatedEntityXml(oDataXml,addEvenWhenDisabled)
{
    var oAEXml = addXmlNode(oDataXml,_oTags.associatedentity);
    addControlDataValue(oAEXml,_oTags.notes,$get("chkAENotes"),true);
    addControlDataValue(oAEXml,_oTags.feedback,$get("chkAEFeedback"),addEvenWhenDisabled);
    addControlDataValue(oAEXml,_oTags.activities,$get("chkAEActivities"),true);
    addControlDataValue(oAEXml,_oTags.activityparties,$get("chkAEEnableEmail"),addEvenWhenDisabled)
}
function addConnectionsXml(oDataXml,addEvenWhenDisabled)
{
    addControlDataValue(oDataXml,_oTags.connection,$get("chkCConnections"),addEvenWhenDisabled)
}
function addVisibleInMobileXml(oDataXml)
{
    addControlDataValue(oDataXml,_oTags.visibleinmobile,$get("chkIsEnabledForMobile"));
    addControlDataValue(oDataXml,_oTags.visibleinmobileclient,$get("chkIsEnabledForMobileClient"));
    addControlDataValue(oDataXml,_oTags.readonlyinmobileclient,$get("chkIsReadOnlyForMobileClient"),true);
    !IsNull($get("chkIsOfflineForMobileClient")) && 
        addControlDataValue(oDataXml,_oTags.offlineinmobileclient,$get("chkIsOfflineForMobileClient"),true);
    if(!IsNull($get("numDaysSinceRecordLastModified")))
        addControlDataValue(oDataXml,_oTags.dayssincerecordlastmodified,$get("numDaysSinceRecordLastModified"),true);
    else
        typeof _mobileOfflineFilters != "undefined" && !IsNull(_mobileOfflineFilters) && 
            addTextXmlNode(oDataXml,_oTags.mobileofflinefilters,_mobileOfflineFilters)
}
function addReadingPaneEnabledXml(oDataXml)
{
    addControlDataValue(oDataXml,_oTags.readingpaneenabled,$get("chkIsReadingPaneEnabled"))
}
function addQuickCreateXml(oDataXml)
{
    addControlDataValue(oDataXml,_oTags.isquickcreateenabled,$get("chkIsQuickCreateEnabled"))
}
function addPrimaryAttributeXml(oDataXml)
{
    if(_bCreate)
    {
        var oAttributeXml = addXmlNode(oDataXml,_oTags.attribute);
        addControlDataValue(oAttributeXml,_oTags.displayname,$get("txtAttributeDisplayName"));
        addControlDataValue(oAttributeXml,_oTags.schemaname,$get("txtAttributeSchemaName"));
        addControlDataValue(oAttributeXml,_oTags.reqlevel,$get("selAttributeReqLevel"));
        addControlDataValue(oAttributeXml,_oTags.description,$get("txtAttributeDescription"));
        if(!IsNull($get("txtHelpURL")))
        {
            addControlDataValue(oAttributeXml,_oTags.entityhelpurl,$get("txtHelpURL"));
            addControlDataValue(oAttributeXml,_oTags.entityhelpurlenabled,$get("checkCustomizedHelp"))
        }
        var oTypeXml = addXmlNode(oAttributeXml,_oTags.type);
        addControlDataValue(oTypeXml,_oTags.name,$get("selAttributeType"));
        addControlDataValue(oTypeXml,_oTags.format,$get("selAttributeFormat"));
        addControlDataValue(oTypeXml,_oTags.length,$get("numMaxAttributeLen"))
    }
}
function addPrimaryImageXml(oDataXml)
{
    addControlDataValue(oDataXml,_oTags.primaryimagename,$get("selPrimaryImage"),true)
}
function validateParameters()
{
    var bValid = true;
    bValid = bValid && validateRequiredValue($get("txtSingularName"));
    bValid = bValid && validateRequiredValue($get("txtPluralName"));
    if($get("entityColor"))
        bValid = bValid && validateColorValue($get("entityColor"));
    if($get("enableOneNoteIntegration"))
        bValid = bValid && validateOneNoteIntegrationValue($get("enableOneNoteIntegration"));
    if(Mscrm.FeatureControl.get_Current().isFeatureEnabled(Mscrm.FeatureNames.CustomControlMobile) && !_bCreate && !IsNull(Mscrm.CustomControls))
        bValid = bValid && Mscrm.CustomControls.CustomControlManager.get_instance().validateFieldCustomControls();
    if(_bCreate)
    {
        bValid = bValid && validateSchemaName($get("txtSchemaName"));
        bValid = bValid && validateRequiredValue($get("txtAttributeDisplayName"));
        bValid = bValid && validateSchemaName($get("txtAttributeSchemaName"));
        bValid = bValid && validateRequiredValue($get("selAttributeReqLevel"));
        bValid = bValid && validateRequiredValue($get("numMaxAttributeLen"))
    }
    var entityXml = loadXmlDoc(_sInputXml);
    if($get("numDaysSinceRecordLastModified") && !$get("numDaysSinceRecordLastModified").disabled && entityXml.getElementsByTagName("dayssincerecordlastmodified").length > 0)
    {
        var daysSinceRecordLastModifiedNode = entityXml.getElementsByTagName("dayssincerecordlastmodified")[0].childNodes[0],
            oldValue = daysSinceRecordLastModifiedNode.nodeValue,
            daysSinceRecordLastModified = Mscrm.FormControlInputBehavior.GetBehavior("numDaysSinceRecordLastModified");
        if(_bCreate || oldValue != daysSinceRecordLastModified.get_dataValue() || daysSinceRecordLastModified.get_dataValue() == 0)
        {
            var EnablingMobileOffline = false;
            if(entityXml.getElementsByTagName("dayssincerecordlastmodified").length > 0)
                if(entityXml.getElementsByTagName("offlineinmobileclient")[0].childNodes[0].nodeValue == "false")
                    EnablingMobileOffline = true;
            bValid = bValid && validateDaysSinceRecordLastModifiedValue(daysSinceRecordLastModified.get_dataValue(),oldValue,EnablingMobileOffline)
        }
    }
    var _chkMobileClientOffline = $get("chkIsOfflineForMobileClient");
    if(_chkMobileClientOffline != null && _chkMobileClientOffline.checked && typeof _isMobileOfflineFiltersFeatureAvailable != "undefined" && _isMobileOfflineFiltersFeatureAvailable == true)
    {
        var EnablingMobileOffline = false;
        if(entityXml.getElementsByTagName("offlineinmobileclient").length > 0)
            if(entityXml.getElementsByTagName("offlineinmobileclient")[0].childNodes[0].nodeValue == "false")
                EnablingMobileOffline = true;
        if(typeof _mobileOfflineFilters != "undefined" && !isNullOrEmptyString(_mobileOfflineFilters) && entityXml.getElementsByTagName("mobileofflinefilters") != null && entityXml.getElementsByTagName("mobileofflinefilters").length > 0 && entityXml.getElementsByTagName("mobileofflinefilters")[0].childNodes.length > 0)
        {
            var mobileOfflineFiltersNode = entityXml.getElementsByTagName("mobileofflinefilters")[0].childNodes[0],
                oldMobileOfflineFiltersValue = mobileOfflineFiltersNode.nodeValue,
                xmlFilterDoc = loadXmlDoc(_mobileOfflineFilters),
                conditionElements = xmlFilterDoc.getElementsByTagName("condition"),
                currentConditions = 0;
            if(conditionElements != null)
                currentConditions = conditionElements.length;
            var oldValue = getFilterElementValue(oldMobileOfflineFiltersValue),
                currentValue = getFilterElementValue(_mobileOfflineFilters);
            if(_bCreate || oldValue != currentValue || currentConditions == 0)
                bValid = bValid && validateMobileOfflineFiltersValue(currentConditions,currentValue,oldValue,EnablingMobileOffline)
        }
        else
            if(EnablingMobileOffline && typeof _mobileOfflineFilters != "undefined" && isNullOrEmptyString(_mobileOfflineFilters))
                bValid = bValid && showConfirmForMobileOfflineDefaultFiltersValue()
    }
    if($get("checkCustomizedHelp") && $get("checkCustomizedHelp").checked)
        bValid = bValid && validateRequiredValue($get("txtHelpURL"));
    return bValid
}
function onSingularNameChange()
{
    var oSchemaName = Mscrm.FormControlInputBehavior.GetBehavior("txtSchemaName");
    if(_bCreate && (_txtSingularName.get_dataValue() != null && _txtSingularName.get_dataValue().length > 0) && (oSchemaName.get_dataValue() == null || oSchemaName.get_dataValue().length == 0))
    {
        var regExp = new RegExp(_oConst.sInvalidSchemaNameChars,"g");
        oSchemaName.set_dataValue(_txtSingularName.get_dataValue().replace(regExp,"").substr(0,oSchemaName.get_element().maxLength));
        oSchemaName.get_dataValue() != null && oSchemaName.get_dataValue().length > 0 && 
            oSchemaName.set_dataValue(oSchemaName.get_dataValue().toLowerCase())
    }
}
function onEntityColorChange()
{
    var oEntityColor = Mscrm.FormControlInputBehavior.GetBehavior("entityColor"),
        oPreviewEntityColor = $get("divPreviewEntityColor"),
        entityColorValue = oEntityColor.get_dataValue();
    if(entityColorValue != null && oPreviewEntityColor != null)
    {
        if(!entityColorValue.startsWith("#"))
            entityColorValue = "#" + entityColorValue;
        oPreviewEntityColor.style.backgroundColor = entityColorValue
    }
}
function onAttributeSchemaNameChange()
{
    var oAttributeDisplayName = Mscrm.FormControlInputBehavior.GetBehavior("txtAttributeDisplayName"),
        oAttributeSchemaName = Mscrm.FormControlInputBehavior.GetBehavior("txtAttributeSchemaName");
    if(_bCreate && (oAttributeDisplayName.get_dataValue() != null && oAttributeDisplayName.get_dataValue().length > 0) && (oAttributeSchemaName.get_dataValue() == null || oAttributeSchemaName.get_dataValue().length == 0))
    {
        var regExp = new RegExp(_oConst.sInvalidSchemaNameChars,"g");
        oAttributeSchemaName.set_dataValue(oAttributeDisplayName.get_dataValue().replace(regExp,"").substr(0,oAttributeDisplayName.get_element().maxLength));
        oAttributeSchemaName.set_dataValue(oAttributeSchemaName.get_dataValue().toLowerCase())
    }
}
function isFormDirty()
{
    try
    {
        if(_sInputXml != getEntityXml())
            return true;
        if(Mscrm.FeatureControl.get_Current().isFeatureEnabled(Mscrm.FeatureNames.CustomControlMobile) && !IsNull(Mscrm.CustomControls) && !IsNull(Mscrm.CustomControls.CustomControlManager))
            return isCustomControlsTabDirty();
        return false
    }
    catch(ex)
    {
        return false
    }
}
function isEventsControlsTabDirty()
{
    try
    {
        var entityFormXml = Mscrm.FormLibraryAndEventHandlerUtils.formXml,
            existingFormXml = Mscrm.FormLibraryAndEventHandlerUtils.existingFormXml;
        if(!IsNull(entityFormXml) && IsNull(existingFormXml))
        {
            var libraryNodes = XUI.Xml.SelectNodes(entityFormXml,Mscrm.FormXmlPaths.formLibraryPath,null),
                eventNodes = XUI.Xml.SelectNodes(entityFormXml,Mscrm.FormXmlPaths.formEventPath,null);
            if(!IsNull(libraryNodes) && libraryNodes.length > 0 || !IsNull(eventNodes) && eventNodes.length > 0)
                return true
        }
        if(IsNull(entityFormXml) && !IsNull(existingFormXml))
        {
            var libraryNodes = XUI.Xml.SelectNodes(existingFormXml,Mscrm.FormXmlPaths.formLibraryPath,null),
                eventNodes = XUI.Xml.SelectNodes(existingFormXml,Mscrm.FormXmlPaths.formEventPath,null);
            if(!IsNull(libraryNodes) && libraryNodes.length > 0 || !IsNull(eventNodes) && eventNodes.length > 0)
                return true
        }
        if(!IsNull(entityFormXml) && !IsNull(existingFormXml))
        {
            var newFormXml = convertXmlDocToString(entityFormXml),
                existingXml = convertXmlDocToString(existingFormXml);
            if(newFormXml != existingXml)
                return true
        }
        return false
    }
    catch(ex)
    {
        return false
    }
}
function isCustomControlsTabDirty()
{
    try
    {
        var entityCustomControlXmlDoc = Mscrm.CustomControls.CustomControlManager.get_instance().generateGridSnippetForValidation(),
            existingCustomControlXml = Mscrm.CustomControls.CustomControlManager.get_instance().get_existingXML();
        if(!IsNull(entityCustomControlXmlDoc) && IsNull(existingCustomControlXml) || IsNull(entityCustomControlXmlDoc) && !IsNull(existingCustomControlXml))
            return true;
        if(!IsNull(entityCustomControlXmlDoc) && !IsNull(existingCustomControlXml))
            if(Mscrm.Utilities.isIE10OrHigher())
            {
                var sCustomControlXml = convertXmlDocToString(entityCustomControlXmlDoc),
                    existingXML = convertXmlDocToString(existingCustomControlXml);
                if(sCustomControlXml != existingXML)
                    return true
            }
            else
                return !entityCustomControlXmlDoc.isEqualNode(existingCustomControlXml);
        return false
    }
    catch(ex)
    {
        return false
    }
}
function refreshMsgGrid()
{
    try
    {
        var oPage = $get(_oConst.sMessagesPageId),
            oIFrameElement = XUI.Html.DomUtils.GetFirstChild(oPage),
            oIFrame = $get(oIFrameElement.id);
        oIFrame.contentWindow.$find("gridDisplayStrings").Refresh()
    }
    catch(e)
    {
    }
}
function loadDashboards(sPageId,actionUrl,ev)
{
    var oPage = $get(sPageId),
        oIFrameElement = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild(oPage));
    oIFrameElement.setAttribute("url",actionUrl);
    loadPage(sPageId,ev)
}
