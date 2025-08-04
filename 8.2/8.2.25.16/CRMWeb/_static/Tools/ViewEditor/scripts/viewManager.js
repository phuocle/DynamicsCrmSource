
var _oEntitiesXml = null,
    _oAllFieldsXml = null,
    _oAllFieldPropertiesXml = null,
    _rendererLookupArray = [];
function Init()
{
    addSortingToLookupView();
    $addHandler($get("crmFormSubmit"),"submit",ValidateView);
    for(var oFieldNodeList = XUI.Xml.SelectSingleNode(oGridXml,"/grid/row",null).childNodes,
        i = 0; i < oFieldNodeList.length; i++)
    {
        var oCell = oFieldNodeList.item(i);
        if(oCell.getAttribute("ishidden") == null || oCell.getAttribute("ishidden") != 1)
        {
            var newTd = CreateFieldCell(oCell);
            _cellsRow.appendChild(newTd);
            newTd.innerHTML = GetFieldCellHtml(oCell)
        }
    }
    _cellsRow.appendChild(document.createElement("td"));
    UpdateSortingUI();
    UpdateDataArea();
    InitializeRendererLookupArray()
}
function InitializeRendererLookupArray()
{
    var emailTemplateRenderers = {templatetypecode:"Crm.EmailTemplateGlobal"},
        asyncJobsCustomRenderers = {regardingobjectid:"Crm.SystemRegardingObject"};
    _rendererLookupArray["template"] = emailTemplateRenderers;
    _rendererLookupArray["asyncoperation"] = asyncJobsCustomRenderers
}
function UpdateDataArea()
{
    for(var iDataAreaWidth = 0,
        i = 0; i < _cellsRow.cells.length - 1; i++)
        iDataAreaWidth += Number(_cellsRow.cells[i].width);
    $get("tblDataAreaStretcher").style.width = iDataAreaWidth == 0 ? 1 : iDataAreaWidth + "px"
}
function CreateFieldCell(oCell)
{
    var sFieldName = oCell.getAttribute("name");
    oCell.getAttribute("width") == null && 
        oCell.setAttribute("width",100);
    var iWidth = Number(oCell.getAttribute("width"));
    iWidth = iWidth <= 0 ? _iDefaultGridColumnWidth : iWidth;
    var diableMetaDataBinding = oCell.getAttribute("disableMetaDataBinding"),
        newTd = document.createElement("td");
    newTd.setAttribute("name",CrmEncodeDecode.CrmHtmlAttributeEncode(sFieldName));
    newTd.setAttribute("width",iWidth + 3);
    diableMetaDataBinding != null && 
        newTd.setAttribute("disableMetaDataBinding",diableMetaDataBinding);
    $addHandler(newTd,"click",SetActiveObjectHandler);
    $addHandler(newTd,"dblclick",ViewColumnProperties);
    return newTd
}
function GetFieldCellHtml(oCell)
{
    var sFieldName = oCell.getAttribute("name"),
        oFieldInfo;
    if(oCell.getAttribute("disableMetaDataBinding") != null && oCell.getAttribute("disableMetaDataBinding") == "1")
        oFieldInfo = GetDisableMetaDataBindingFieldInfo(oCell);
    else
        oFieldInfo = GetFieldInfo(sFieldName);
    var sFieldDisplayName = formatString(oFieldInfo.GridFieldDisplayMask,oFieldInfo.InvalidField ? sFieldName : oFieldInfo.DisplayName),
        sTitle = formatString(LOCID_VIEWEDITOR_COLTOOLTIP,sFieldDisplayName),
        sErrTitle = LOCID_VIEWEDITOR_COLERR_TOOLTIP,
        sErrImg = "<IMG alt='" + CrmEncodeDecode.CrmHtmlAttributeEncode(sErrTitle) + "' src='/_imgs/error/notif_icn_warn16.png' onclick='alert(this.alt)'/>&nbsp;",
        sNewTdInnerHTML = formatString("<table cellspacing='0' cellpadding='0' style='table-layout:fixed;width:100%;height:100%;'><col/><col width='6px'/><tr><td id='tdFieldName' title=\"{0}\" class='viewManager_js_td'><a href='#' onclick='return false;' style='display:block;' title=\"{0}\"><nobr style='display:block;'>{2}{1}<img alt='' id='imgSort' src='/_imgs/grid/bar_up.gif' class='ms-crm-List-Sortable addFields_img_barUp' style='visibility:hidden'/></nobr></a></td><td align='middle'><img alt='' src='/_imgs/grid/bar_line.gif' align='absmiddle'/></td></tr></table>",CrmEncodeDecode.CrmHtmlAttributeEncode(oFieldInfo.InvalidField ? sErrTitle : sTitle),CrmEncodeDecode.CrmHtmlEncode(sFieldDisplayName),oFieldInfo.InvalidField ? sErrImg : "");
    return sNewTdInnerHTML
}
function ViewProperties(mode,name,description)
{
    if(!_bInitialized)
        return;
    var aViewInfo,
        crmForm = $get("crmForm");
    if(!IsNull(crmForm.iscustomizable))
        aViewInfo = [crmForm.name.value,crmForm.description.value,crmForm.iscustomizable.value,crmForm.querytype.value];
    else
        aViewInfo = [crmForm.name.value,crmForm.description.value,"1",crmForm.querytype.value];
    var oUrl = Mscrm.CrmUri.create("/Tools/ViewEditor/Dialogs/ViewProperties.aspx?mode=" + mode),
        dialogOptions = new Xrm.DialogOptions;
    dialogOptions.height = 400;
    dialogOptions.width = 500;
    var parameters = [crmForm,mode,name,description],
        viewPropertiesCallback = Mscrm.Utilities.createCallbackFunctionForXrmDialog(callBackForviewProperties,parameters);
    Xrm.Internal.openDialog(oUrl.toString(),dialogOptions,aViewInfo,null,viewPropertiesCallback);
    AddTelemetryLog("ViewProperties")
}
function callBackForviewProperties(oRet,crmForm,mode,name,description)
{
    if(oRet)
    {
        crmForm.name.value = oRet[0];
        crmForm.description.value = oRet[1];
        if(crmForm.name.value != "" && mode != "saveas")
        {
            var formEntityTitleObj = document.getElementById("crmForm_CurrentViewTitle");
            if(!IsNull(formEntityTitleObj))
                formEntityTitleObj.innerHTML = CrmEncodeDecode.CrmHtmlEncode(crmForm.name.value)
        }
    }
    else
        if(mode == "new")
        {
            alert(LOCID_VIEWEDITOR_BASICINFO);
            $find("crmForm").set_saving(true);
            closeWindow()
        }
    var crmFormCtrl = $find("crmForm");
    if(!IsNull(oRet) && mode == "saveas")
    {
        var pkId = crmFormCtrl.get_objectId();
        crmFormCtrl.set_objectId("");
        var ret = crmFormCtrl.SubmitCrmForm(FormEventId_Save,true,true,false,true);
        if(IsNull(ret) || !ret)
        {
            crmFormCtrl.set_objectId(pkId);
            crmForm.name.value = name;
            crmForm.description.value = description
        }
    }
}
function onLinkClicked(entityName)
{
    var oUrl = Mscrm.CrmUri.create("/Tools/SystemSettings/Dialogs/RelevanceSearchConfiguration.aspx");
    oUrl.get_query()["entity"] = entityName;
    oUrl.get_query()["appSolutionId"] = parent.APP_SOLUTION_ID;
    var crmDialog = new Mscrm.CrmDialog(oUrl,Window.Document,800,600,null);
    crmDialog.show()
}
function Remove(oActive)
{
    if(!_bInitialized)
        return;
    if(!oActive)
    {
        alert(LOCID_VIEWEDITOR_RMSELECTCOLUMN);
        return
    }
    if(oActive.getAttribute("name") == _requiredColumn)
    {
        alert(LOCID_VIEWEDITOR_CANTRMREQCOL);
        return
    }
    else
        confirm(LOCID_VIEWEDITOR_REMOVECOLUMN) && 
            RemoveField(oActive);
    AddTelemetryLog("RemoveColumn")
}
function ViewColumnProperties(e)
{
    ColumnProperties(_oActive)
}
function SetActiveObjectHandler(e)
{
    SetActiveObject(this)
}
function SetActiveObject(o)
{
    var s = "2px solid #23b30c";
    if(_oActive)
        _oActive.getElementsByTagName("td")[0].style.border = "";
    o.getElementsByTagName("td")[0].style.border = s;
    _oActive = o
}
function HandleScroll(e)
{
    $get("divGridCols").scrollLeft = e.target.scrollLeft
}
function GetEntityIdFromQuery()
{
    var oUrl = Mscrm.CrmUri.create(window.location.search);
    if(oUrl.get_query()["entityId"] === undefined)
        return "";
    else
        return oUrl.get_query()["entityId"]
}
function AddColumns(oActive,bQuickFindMode)
{
    if(!_bInitialized)
        return;
    var oArgs = {};
    oArgs.PrimaryEntityName = _sPrimaryEntityName;
    oArgs.FieldsXml = oFieldsXml;
    oArgs.FieldPropertiesXml = oPropertiesXml;
    oArgs.GridXml = oGridXml;
    oArgs.bQuickFindMode = bQuickFindMode;
    oArgs.bIsSystemView = _bIsSystemView;
    var oURL = Mscrm.CrmUri.create("/Tools/ViewEditor/Dialogs/AddColumns.aspx");
    oURL.get_query()["mode"] = oArgs.bQuickFindMode ? "qfaddcol" : "viewaddcol";
    oURL.get_query()["entityId"] = GetEntityIdFromQuery();
    oArgs.ShowRelatedEntities = false;
    if(!bQueryAPIBasedView)
    {
        oArgs.ShowRelatedEntities = true;
        oArgs.EntitiesXml = oEntitiesXml;
        oArgs.FetchXml = oFetchXml
    }
    var parameters = [oArgs,oActive],
        callbackObject = Mscrm.Utilities.createCallbackFunctionObject("performActionAfterAddColumns",this,parameters,false),
        crmDialog = new Mscrm.CrmDialog(oURL,oArgs,570,400,null);
    crmDialog.setCallbackReference(callbackObject);
    crmDialog.show();
    AddTelemetryLog("AddColumns")
}
function performActionAfterAddColumns(oReturnValue,oArgs,oActive)
{
    var oFieldObjs = oReturnValue;
    if(!IsNull(oFieldObjs) && oArgs.ShowRelatedEntities)
        with(oReturnValue)
        {
            var oFieldObjs = FieldObjs;
            oFieldsXml = XUI.Xml.LoadXml(FieldsXml);
            oPropertiesXml = XUI.Xml.LoadXml(FieldPropertiesXml)
        }
    if(oFieldObjs)
    {
        for(var i = oFieldObjs.length - 1; i >= 0; i--)
        {
            if(!oActive)
                oActive = _cellsRow.cells[_cellsRow.cells.length - 2];
            AddField(oActive,oFieldObjs[i])
        }
        UpdateFormData()
    }
}
function EditQuickFindFields()
{
    if(!_bInitialized)
        return;
    var oArgs = {};
    oArgs.PrimaryEntityName = _sPrimaryEntityName;
    oArgs.FieldsXml = oFieldsXml;
    oArgs.FieldPropertiesXml = oPropertiesXml;
    oArgs.GridXml = oGridXml;
    oArgs.FetchXml = oFetchXml;
    oArgs.bQuickFindMode = true;
    oArgs.ShowRelatedEntities = false;
    var bQFValidFieldExists = false,
        oURL = Mscrm.CrmUri.create("/Tools/ViewEditor/Dialogs/AddColumns.aspx");
    oURL.get_query()["mode"] = "qfaddsearch";
    oURL.get_query()["entityId"] = GetEntityIdFromQuery();
    var parameters = new Array(oFetchXml),
        crmDialog = new Mscrm.CrmDialog(oURL,oArgs,570,400,null);
    crmDialog.setCallbackInfo("performActionAfterAddingColumns",this,parameters);
    crmDialog.show()
}
function performActionAfterAddingColumns(oFieldObjs,oFetchXml)
{
    if(oFieldObjs)
    {
        for(var sOperator,
            sValue,
            sFilterXml = "<filter type='or' isquickfindfields='1'>",
            i = oFieldObjs.length - 1; i >= 0; i--)
        {
            sOperator = "";
            sValue = "";
            switch(oFieldObjs[i].DataType)
            {
                case "text":
                case "memo":
                case "boolean":
                case "lookup":
                case "owner":
                case "customer":
                case "picklist":
                case "state":
                case "status":
                    sOperator = "like";
                    sValue = "{0}";
                    break;
                case "integer":
                    sOperator = "eq";
                    sValue = "{1}";
                    break;
                case "money":
                    sOperator = "eq";
                    sValue = "{2}";
                    break;
                case "datetime":
                    sOperator = "on";
                    sValue = "{3}";
                    break;
                case "float":
                    sOperator = "eq";
                    sValue = "{4}";
                    break;
                default:
                    continue
            }
            bQFValidFieldExists = true;
            sFilterXml += '<condition attribute="' + oFieldObjs[i].FieldName + '" operator="' + sOperator + '" value="' + sValue + '"/>'
        }
        sFilterXml += "</filter>";
        if(!bQFValidFieldExists)
        {
            alert(LOCID_VIEWEDITOR_QFINVALIDFIELDS);
            return
        }
        _oXmlDoc = XUI.Xml.LoadXml(sFilterXml);
        var oOldFilter = XUI.Xml.SelectSingleNode(oFetchXml,"/fetch/entity//filter[@isquickfindfields=1]",null);
        if(!IsNull(oOldFilter))
            oOldFilter.parentNode.replaceChild(XUI.Xml.SelectSingleNode(_oXmlDoc,"filter",null),oOldFilter);
        else
            XUI.Xml.SelectSingleNode(oFetchXml,"/fetch/entity",null).appendChild(XUI.Xml.SelectSingleNode(_oXmlDoc,"filter",null));
        UpdateFormData()
    }
}
function ColumnProperties(oActive)
{
    if(!_bInitialized)
        return;
    if(oActive == null)
        alert(LOCID_VIEWEDITOR_EDSELECTCOLUMN);
    else
    {
        var sFieldName = oActive.getAttribute("name"),
            size,
            oFieldInfo,
            oArgs,
            ImageProviderWebResource = "";
        try
        {
            if(oActive.getAttribute("disableMetaDataBinding") != null && oActive.getAttribute("disableMetaDataBinding") == "1")
                oFieldInfo = GetDisableMetaDataBindingFieldInfo(oActive);
            else
                oFieldInfo = GetFieldInfo(sFieldName);
            oArgs = {};
            oArgs.fieldDesc = formatString(oFieldInfo.GridFieldDisplayMask,oFieldInfo.DisplayName);
            oArgs.entityDesc = oFieldInfo.EntityDisplayName;
            oArgs.fieldType = oFieldInfo.Type;
            oArgs.sSchemaName = oFieldInfo.SchemaName;
            size = GetGridCellNode(oGridXml,sFieldName).getAttribute("width");
            oArgs.ImageProviderFunctionName = GetGridCellNode(oGridXml,sFieldName).getAttribute("imageproviderfunctionname");
            if(!IsNull(GetGridCellNode(oGridXml,sFieldName).getAttribute("imageproviderwebresource")))
                ImageProviderWebResource = GetGridCellNode(oGridXml,sFieldName).getAttribute("imageproviderwebresource")
        }
        catch(e)
        {
            alert(formatString(LOCID_VIEWEDITOR_INVALIDCOLUMN,sFieldName));
            return false
        }
        for(var oFieldSizes = {},
            i = 0; i < _cellsRow.cells.length; i++)
        {
            var sSipFieldName = _cellsRow.cells[i].getAttribute("name");
            if(sSipFieldName != null)
                if(sSipFieldName.indexOf("internalemailaddress") >= 0 || sSipFieldName.indexOf("emailaddress1") >= 0)
                    oFieldSizes[sSipFieldName] = GetGridCellNode(oGridXml,sSipFieldName).getAttribute("width")
        }
        oArgs.EntitiesXml = oEntitiesXml;
        oArgs.FieldSizes = oFieldSizes;
        if(size == null)
            size = "";
        var parameters = [size,sFieldName,oActive,oFieldInfo,oArgs.bQuickFindMode],
            callbackFunctionObject = Mscrm.Utilities.createCallbackFunctionObject("ColumnPropertiesCallback",this,parameters,false),
            crmDialog = new Mscrm.CrmDialog(Mscrm.CrmUri.create("/Tools/ViewEditor/Dialogs/ColumnProperties.aspx?size=" + CrmEncodeDecode.CrmUrlEncode(size) + "&entityName=" + CrmEncodeDecode.CrmUrlEncode(oFieldInfo.EntityName) + "&attributeName=" + CrmEncodeDecode.CrmUrlEncode(oFieldInfo.SchemaName) + "&ImageProviderWebResource=" + CrmEncodeDecode.CrmUrlEncode(ImageProviderWebResource) + "&FromExportExcel=" + CrmEncodeDecode.CrmUrlEncode(_bFromExportExcel) + "&queryApiBasedView=" + CrmEncodeDecode.CrmUrlEncode(bQueryAPIBasedView)),oArgs,500,500,null);
        crmDialog.setCallbackReference(callbackFunctionObject);
        crmDialog.show()
    }
    AddTelemetryLog("ChangeProperties")
}
function ColumnPropertiesCallback(oReturnValue,size,sFieldName,oActive,oFieldInfo,bQuickFindMode)
{
    if(!IsNull(oReturnValue))
    {
        if(size != oReturnValue.Size)
        {
            GetGridCellNode(oGridXml,sFieldName).setAttribute("width",oReturnValue.Size);
            oActive.width = oReturnValue.Size
        }
        !IsNull(oReturnValue.ImageProviderFunctionName) && 
            GetGridCellNode(oGridXml,sFieldName).setAttribute("imageproviderfunctionname",oReturnValue.ImageProviderFunctionName);
        !IsNull(oReturnValue.ImageProviderWebResource) && 
            GetGridCellNode(oGridXml,sFieldName).setAttribute("imageproviderwebresource","$webresource:" + oReturnValue.ImageProviderWebResource);
        if(oReturnValue.PresenceEnabled != null)
        {
            var relationshipIdToUse;
            if(oReturnValue.PrimaryField == true && oReturnValue.RelationshipId == "")
                relationshipIdToUse = oFieldInfo.RelationshipId;
            else
                relationshipIdToUse = oReturnValue.RelationshipId;
            if(relationshipIdToUse == "")
                if(oReturnValue.PresenceEnabled)
                {
                    _oEntitiesXml = oEntitiesXml;
                    _oAllFieldsXml = oFieldsXml;
                    _oAllFieldPropertiesXml = oPropertiesXml;
                    AddSipColumn(oReturnValue.FieldName,null,oReturnValue.EntityName)
                }
                else
                    RemoveSipColumn(oReturnValue.FieldName);
            else
            {
                var sAlias = "",
                    oAlias = XUI.Xml.SelectSingleNode(oEntitiesXml,'entities/entity[@relid="' + relationshipIdToUse + '"]/@alias',null);
                if(oAlias != null)
                    sAlias = oAlias.value;
                if(sAlias !== "")
                    if(oReturnValue.PresenceEnabled)
                    {
                        _oEntitiesXml = oEntitiesXml;
                        _oAllFieldsXml = oFieldsXml;
                        _oAllFieldPropertiesXml = oPropertiesXml;
                        GetFieldsXmlInternal(oReturnValue.EntityName,sAlias,oGridXml,bQuickFindMode,false,false,false);
                        AddSipColumn(oReturnValue.FieldName,sAlias,oReturnValue.EntityName)
                    }
                    else
                        RemoveSipColumn(sAlias + "." + oReturnValue.FieldName)
            }
        }
        UpdateDataArea();
        UpdateFormData();
        window.IS_GRID_WITH_IMAGE && 
            ClearGridWithImageCache()
    }
}
function ClearGridWithImageCache()
{
    if(window.opener == null || window.opener == undefined)
    {
        if(window.top.opener != null)
            window.top.opener.top.GRID_WITH_IMAGE_CACHE = null;
        return
    }
    if(window.opener.top.location.href.toString().indexOf("edit.aspx") > -1)
        window.opener.top.opener.top.GRID_WITH_IMAGE_CACHE = null;
    else
        window.opener.top.GRID_WITH_IMAGE_CACHE = null
}
function AddSipColumn(sFieldName,sRelationshipId,sEntityName)
{
    var oActive = _cellsRow.cells[_cellsRow.cells.length - 2],
        oFieldObj = {};
    oFieldObj.FieldName = sFieldName;
    oFieldObj.RelationshipId = sRelationshipId;
    oFieldObj.EntityName = sEntityName;
    var oldActive = _oActive;
    AddField(oActive,oFieldObj,10);
    SetActiveObject(oldActive)
}
function RemoveSipColumn(sFieldName)
{
    var oActive = GetRelatedSipCell(sFieldName);
    if(oActive != null)
    {
        var oldActive = _oActive;
        RemoveField(oActive);
        SetActiveObject(oldActive)
    }
}
function GetRelatedSipCell(sFieldName)
{
    for(var i = 0; i < _cellsRow.cells.length; i++)
        if(_cellsRow.cells[i].getAttribute("name") === sFieldName)
            return _cellsRow.cells[i];
    return null
}
function UpdateSortingUI()
{
    var oOrderNodes = XUI.Xml.SelectNodes(oFetchXml,"fetch/entity/order",null);
    if(!IsNull(oOrderNodes) && oOrderNodes.length > 0)
    {
        for(var sortColumnDictionary = {},
            i = 0; i < oOrderNodes.length; i++)
        {
            var orderDirAttr = oOrderNodes[i].getAttribute("descending");
            if(IsNull(orderDirAttr))
                sortColumnDictionary[oOrderNodes[i].getAttribute("attribute")] = true;
            else
                sortColumnDictionary[oOrderNodes[i].getAttribute("attribute")] = oOrderNodes[i].getAttribute("descending") == "true"
        }
        for(var i = 0; i < _cellsRow.cells.length - 1; i++)
        {
            var o = $get("imgSort",_cellsRow.cells[i]);
            if(!IsNull(sortColumnDictionary[_cellsRow.cells[i].getAttribute("name")]))
            {
                var bDescending = sortColumnDictionary[_cellsRow.cells[i].getAttribute("name")];
                with(o.style)
                {
                    visibility = "visible";
                    if(bDescending)
                    {
                        Mscrm.Utilities.flipElementVertically(o);
                        o.alt = LOCID_ALT_COLUMNSORTORDER_DOWN
                    }
                    else
                    {
                        Mscrm.Utilities.cancelElementFlipping(o);
                        o.alt = LOCID_ALT_COLUMNSORTORDER_UP
                    }
                }
                LOCID_UI_DIR == "RTL" && 
                    Mscrm.Utilities.flipElementHorizontally(o)
            }
            else
            {
                o.style.visibility = "hidden";
                o.alt = ""
            }
        }
    }
}
function SetSort()
{
    if(!_bInitialized)
        return;
    if(hasSortableColumns())
    {
        var oOrderNodes = XUI.Xml.SelectNodes(oFetchXml,"fetch/entity/order",null);
        if(IsNull(oOrderNodes) || oOrderNodes.length == 0)
        {
            oOrderNodes = [];
            var sName = getFirstSortableColumn();
            if(sName != null)
            {
                var tempNode = getNewOrderNode(oFetchXml,sName,"false");
                XUI.Xml.SelectSingleNode(oFetchXml,"fetch/entity",null).appendChild(tempNode);
                oOrderNodes[0] = tempNode
            }
        }
        var oArgs = {};
        oArgs.oGridXml = oGridXml;
        oArgs.oPropertiesXml = oPropertiesXml;
        oArgs.oFieldsXml = oFieldsXml;
        oArgs.sSortCol = oOrderNodes;
        oArgs.sEntityName = _sPrimaryEntityName;
        var parameters = [];
        parameters[0] = oOrderNodes;
        var callbackFunctionObject = Mscrm.Utilities.createCallbackFunctionObject("SetSortCallback",this,parameters,false),
            crmDialog = new Mscrm.CrmDialog(Mscrm.CrmUri.create("/Tools/ViewEditor/Dialogs/SetSort.aspx"),oArgs,420,345,null);
        crmDialog.setCallbackReference(callbackFunctionObject);
        crmDialog.show()
    }
    else
        alert(LOCID_VIEWEDITOR_NOSRTBLFIELDS);
    AddTelemetryLog("SetSortings")
}
function SetSortCallback(aSetSort,oOrderNodes)
{
    if(aSetSort)
        if(aSetSort[0])
        {
            oOrderNodes[0].setAttribute("descending",aSetSort[1] ? "true" : "false");
            oOrderNodes[0].setAttribute("attribute",aSetSort[2]);
            if(aSetSort[4] == "undefinedselectattribute" && oOrderNodes.length >= 2)
                XUI.Xml.SelectSingleNode(oFetchXml,"fetch/entity",null).removeChild(oOrderNodes[1]);
            else
                if(aSetSort[4] != "undefinedselectattribute")
                    if(oOrderNodes.length >= 2)
                    {
                        oOrderNodes[1].setAttribute("descending",aSetSort[3] ? "true" : "false");
                        oOrderNodes[1].setAttribute("attribute",aSetSort[4])
                    }
                    else
                    {
                        var tempNode = getNewOrderNode(oFetchXml,aSetSort[4],aSetSort[3] ? "true" : "false"),
                            entityNode = XUI.Xml.SelectSingleNode(oFetchXml,"fetch/entity",null);
                        if(XUI.Html.DomUtils.GetLastChild(entityNode).nodeName == "order")
                            entityNode.appendChild(tempNode);
                        else
                            entityNode.insertBefore(tempNode,XUI.Html.DomUtils.GetNextSibling(oOrderNodes[0]))
                    }
            UpdateSortingUI();
            UpdateFormData()
        }
}
function getNewOrderNode(oFetchXml,attribute,order)
{
    var tempNode = oFetchXml.createElement("order");
    tempNode.setAttribute("attribute",attribute);
    tempNode.setAttribute("descending",order);
    return tempNode
}
function hasSortableColumns()
{
    for(var oNodes = XUI.Xml.SelectNodes(oGridXml,"//row/cell",null),
        iLen = oNodes.length,
        i = 0; i < iLen; i++)
    {
        var sFieldName = oNodes[i].getAttribute("name");
        if(isSortableField(oFieldsXml,_sPrimaryEntityName,sFieldName))
            return true
    }
    return false
}
function Filter()
{
    var crmForm = $get("crmForm");
    if(!_bInitialized)
        return;
    if(crmForm.queryapi.value != "")
    {
        alert(LOCID_VIEWEDITOR_FILTERCRITERIA);
        return
    }
    var oQFFilter;
    if(crmForm.isquickfindquery.value == "1")
    {
        oQFFilter = XUI.Xml.SelectSingleNode(oFetchXml,"/fetch/entity/filter[@isquickfindfields=1]",null);
        !IsNull(oQFFilter) && 
            XUI.Xml.SelectSingleNode(oFetchXml,"/fetch/entity",null).removeChild(oQFFilter)
    }
    var oDialog = {};
    oDialog.sFetchXml = XUI.Xml.XMLSerializer.serializeToString(oFetchXml);
    oDialog.sLayoutXml = crmForm.layoutxml;
    var options = new Xrm.DialogOptions;
    options.width = 600;
    options.height = 500;
    var url = Mscrm.CrmUri.create("/Tools/ViewEditor/Dialogs/SetFilters.aspx?entityCode=" + $get("crmFormSubmit").crmFormSubmitObjectTypeCode.value);
    Xrm.Internal.openDialog(url.toString(),options,oDialog,null,function(oReturned)
    {
        setFiltersCallbackFunction(oReturned,oQFFilter)
    });
    if(crmForm.isquickfindquery.value == "1")
        !IsNull(oQFFilter) && XUI.Xml.SelectSingleNode(oFetchXml,"/fetch/entity",null).appendChild(oQFFilter);
    AddTelemetryLog("EditFilters")
}
function setFiltersCallbackFunction(oReturned,oQFFilter)
{
    if(oReturned)
        if(oReturned.bIsDirty)
        {
            oFetchXml = XUI.Xml.LoadXml(oReturned.sFetchXml);
            var oLinkEntityNodes = XUI.Xml.SelectNodes(oFetchXml,"fetch/entity/link-entity",null);
            if(oLinkEntityNodes.length > 0)
            {
                for(var i = 0; i < oLinkEntityNodes.length; i++)
                    for(var j = i + 1; j < oLinkEntityNodes.length; j++)
                        if(oLinkEntityNodes[i].getAttribute("name") == oLinkEntityNodes[j].getAttribute("name") && oLinkEntityNodes[i].getAttribute("from") == oLinkEntityNodes[j].getAttribute("from") && oLinkEntityNodes[i].getAttribute("to") == oLinkEntityNodes[j].getAttribute("to") && oLinkEntityNodes[i].getAttribute("alias") == oLinkEntityNodes[j].getAttribute("alias"))
                        {
                            oLinkEntityNodes = oLinkEntityNodes.splice(j,1);
                            j--
                        }
                for(var entityNode = oFetchXml.childNodes[0].childNodes[0],
                    i = 0; i < entityNode.childNodes.length; i++)
                    if(entityNode.childNodes[i].nodeName == "link-entity")
                    {
                        entityNode.removeChild(entityNode.childNodes[i]);
                        i--
                    }
                for(var i = 0; i < oLinkEntityNodes.length; i++)
                    entityNode.appendChild(oLinkEntityNodes[i])
            }
            for(var sEntity,
                sFrom,
                sTo,
                sAlias,
                i = 0; i < oLinkEntityNodes.length; i++)
            {
                with(oLinkEntityNodes[i])
                {
                    sEntity = getAttribute("name");
                    sFrom = getAttribute("from");
                    sTo = getAttribute("to");
                    sAlias = getAttribute("alias")
                }
                var oEntityNode = XUI.Xml.SelectSingleNode(oEntitiesXml,'entities/entity[@name="' + sEntity + '" and @fromattr="' + sFrom + '" and @toattr="' + sTo + '"]',null);
                oEntityNode != null && 
                    oEntityNode.setAttribute("alias",sAlias)
            }
        }
    !IsNull(oQFFilter) && 
        XUI.Xml.SelectSingleNode(oFetchXml,"/fetch/entity",null).appendChild(oQFFilter);
    UpdateFormData()
}
function RemoveField(oActive)
{
    var sFieldName = oActive.getAttribute("name"),
        iFieldIndex = oActive.cellIndex;
    GetGridRowNode(oGridXml).removeChild(GetGridCellNode(oGridXml,sFieldName));
    try
    {
        removeFieldFromFetch(oFetchXml,sFieldName)
    }
    catch(e)
    {
    }
    var oRow = oActive.parentNode,
        iIndex = oActive.cellIndex;
    oRow.deleteCell(iIndex);
    _oActive = null;
    UpdateDataArea();
    var xpath = "fetch/entity/order[@attribute='" + sFieldName + "']",
        oNode = XUI.Xml.SelectSingleNode(oFetchXml,xpath,null);
    if(!IsNull(oNode))
    {
        var oAllOrderNodes = XUI.Xml.SelectNodes(oFetchXml,"fetch/entity/order",null);
        if(!IsNull(oAllOrderNodes) && oAllOrderNodes.length == 1)
        {
            var sName = getFirstSortableColumn();
            if(sName != null)
            {
                oNode.setAttribute("attribute",sName);
                UpdateSortingUI()
            }
            else
                oNode.parentNode.removeChild(oNode)
        }
        else
            oNode.parentNode.removeChild(oNode)
    }
    UpdateFormData()
}
function removeFieldFromFetch(oFetchXml,sFieldName)
{
    var oAttrNode = GetFetchAttributeNode(oFetchXml,sFieldName),
        oEntityNode = oAttrNode.parentNode;
    oEntityNode.removeChild(oAttrNode);
    var sVisible = oEntityNode.getAttribute("visible"),
        bVisible = IsNull(sVisible) || sVisible == "true";
    oEntityNode.nodeName == "link-entity" && oEntityNode.childNodes.length == 0 && !bVisible && 
        oEntityNode.parentNode.removeChild(oEntityNode)
}
function getFirstSortableColumn()
{
    for(var sName,
        oNodes = XUI.Xml.SelectNodes(oGridXml,"//row/cell",null),
        iLen = oNodes.length,
        i = 0; i < iLen; i++)
    {
        sName = oNodes[i].getAttribute("name");
        if(isSortableField(oFieldsXml,_sPrimaryEntityName,sName))
            break
    }
    if(i < iLen)
        return sName;
    else
        return null
}
function AddField(oActive,oFieldObj,iWidth)
{
    if(IsNull(iWidth))
        iWidth = 100;
    var sFieldName = oFieldObj.FieldName,
        bSetSorting = !hasSortableColumns(),
        bSortableField = false,
        sEntityName = _sPrimaryEntityName;
    if(IsNull(oFieldObj.RelationshipId) || oFieldObj.RelationshipId.length == 0)
        bSortableField = isSortableField(oFieldsXml,_sPrimaryEntityName,sFieldName);
    else
    {
        sFieldName = oFieldObj.RelationshipId + "." + sFieldName;
        sEntityName = oFieldObj.EntityName
    }
    var oCell = oGridXml.createElement("cell");
    oCell.setAttribute("name",sFieldName);
    oCell.setAttribute("width",iWidth.toString());
    var customRendererName = getCustomRendererName(sEntityName,sFieldName);
    !IsNull(customRendererName) && 
        oCell.setAttribute("cellType",customRendererName);
    !bSortableField && 
        oCell.setAttribute("disableSorting","1");
    if(oActive)
        GetGridRowNode(oGridXml).insertBefore(oCell,GetGridCellNode(oGridXml,oActive.getAttribute("name")).nextSibling);
    else
        GetGridRowNode(oGridXml).appendChild(oCell);
    if(bSetSorting && bSortableField)
    {
        var oNode = oFetchXml.createElement("order");
        oNode.setAttribute("attribute",sFieldName);
        oNode.setAttribute("descending","false");
        GetFetchEntityNode(oFetchXml).appendChild(oNode)
    }
    addFieldToFetch(oFetchXml,oFieldObj,sFieldName,oEntitiesXml);
    var iIndex = 0;
    if(oActive)
        iIndex = oActive.cellIndex + 1;
    var newTd = CreateFieldCell(oCell);
    _cellsRow.insertBefore(newTd,_cellsRow.cells[iIndex]);
    newTd.innerHTML = GetFieldCellHtml(oCell);
    UpdateSortingUI();
    UpdateDataArea();
    XUI.Html.DispatchDomEvent(newTd,XUI.Html.CreateDomEvent("click"))
}
function getCustomRendererName(sEntityName,sFieldName)
{
    if(!IsNull(_rendererLookupArray[sEntityName]))
        return _rendererLookupArray[sEntityName][sFieldName]
}
function addFieldToFetch(oFetchXml,oFieldObj,sFieldName,oEntitiesXml)
{
    var oAttrNode = oFetchXml.createElement("attribute"),
        oPrimaryEntityNode = GetFetchEntityNode(oFetchXml);
    if(IsNull(oFieldObj.RelationshipId) || oFieldObj.RelationshipId.length == 0)
    {
        if(!XUI.Xml.SelectSingleNode(oFetchXml,"/fetch/entity/all-attributes",null))
        {
            oAttrNode.setAttribute("name",sFieldName);
            oPrimaryEntityNode.appendChild(oAttrNode)
        }
    }
    else
    {
        var oFieldName = GetFieldAliasName(sFieldName),
            oLinkEntityNode = XUI.Xml.SelectSingleNode(oFetchXml,'fetch/entity/link-entity[@alias="' + oFieldName.Alias + '"]',null);
        if(oLinkEntityNode == null)
        {
            var oEntityNode = XUI.Xml.SelectSingleNode(oEntitiesXml,'entities/entity[@alias="' + oFieldName.Alias + '"]',null);
            oLinkEntityNode = oFetchXml.createElement("link-entity");
            oLinkEntityNode.setAttribute("alias",oFieldName.Alias);
            oLinkEntityNode.setAttribute("name",oFieldObj.EntityName);
            oLinkEntityNode.setAttribute("from",oEntityNode.getAttribute("fromattr"));
            oLinkEntityNode.setAttribute("to",oEntityNode.getAttribute("toattr"));
            oLinkEntityNode.setAttribute("link-type","outer");
            oLinkEntityNode.setAttribute("visible","false")
        }
        oAttrNode.setAttribute("name",oFieldObj.FieldName);
        oLinkEntityNode.appendChild(oAttrNode);
        oPrimaryEntityNode.appendChild(oLinkEntityNode)
    }
}
function Move(bLeft,e)
{
    if(!_bInitialized)
        return;
    !IsNull(e) && 
        e.stopPropagation();
    if(_oActive)
    {
        bLeft ? MoveLeft() : MoveRight();
        UpdateFormData();
        if(_oActive.offsetLeft <= _oActive.offsetParent.offsetParent.scrollLeft)
        {
            var viewEditorGridArea = document.getElementById("viewEditorGridArea");
            viewEditorGridArea.scrollLeft = _oActive.offsetLeft
        }
        var activeElementPos = _oActive.clientWidth + _oActive.offsetLeft,
            containerWidthInclScroll = _oActive.offsetParent.offsetParent.scrollLeft + _oActive.offsetParent.offsetParent.clientWidth;
        if(activeElementPos > containerWidthInclScroll)
        {
            var viewEditorGridArea = document.getElementById("viewEditorGridArea");
            viewEditorGridArea.scrollLeft = _oActive.offsetParent.offsetParent.scrollLeft + (activeElementPos - containerWidthInclScroll)
        }
    }
    else
        alert(LOCID_VIEWEDITOR_MVSELECTCOLUMN)
}
function swap(oNode1,oNode2)
{
    var oParent1 = oNode1.parentNode,
        oParent2 = oNode2.parentNode,
        oSibling = XUI.Html.DomUtils.GetNextSibling(oNode2);
    if(oSibling === oNode1)
        oSibling = XUI.Html.DomUtils.GetNextSibling(oSibling);
    oParent1.replaceChild(oNode2,oNode1);
    if(oSibling)
        oParent2.insertBefore(oNode1,oSibling);
    else
        oParent2.appendChild(oNode1);
    return true
}
function MoveLeft()
{
    var _oActivePrevSibling = XUI.Html.DomUtils.GetPrevSibling(_oActive);
    if(_oActivePrevSibling && !(_islookupview && _oActivePrevSibling.cellIndex == 0))
    {
        var oParentNode = GetGridRowNode(oGridXml),
            oSwapNode = oParentNode.removeChild(GetGridCellNode(oGridXml,_oActive.getAttribute("name")));
        oParentNode.insertBefore(oSwapNode,GetGridCellNode(oGridXml,_oActivePrevSibling.getAttribute("name")));
        swap(_oActivePrevSibling,_oActive);
        UpdateFormData();
        AddTelemetryLog("ColumnMoveLeft")
    }
}
function MoveRight()
{
    if(_oActive.cellIndex < _cellsRow.cells.length - 2 && !(_islookupview && _oActive.cellIndex == 0))
    {
        var oParentNode = GetGridRowNode(oGridXml),
            _oActiveNextSibling = XUI.Html.DomUtils.GetNextSibling(_oActive),
            oSwapNode = oParentNode.removeChild(GetGridCellNode(oGridXml,_oActiveNextSibling.getAttribute("name")));
        oParentNode.insertBefore(oSwapNode,GetGridCellNode(oGridXml,_oActive.getAttribute("name")));
        swap(_oActive,_oActiveNextSibling);
        UpdateFormData();
        AddTelemetryLog("ColumnMoveRight")
    }
}
function UpdateFormData()
{
    $get("crmForm").layoutxml.value = Trim(XUI.Xml.XMLSerializer.serializeToString(oGridXml));
    $get("crmFormSubmit").crmFormSubmitFetchXml.value = Trim(XUI.Xml.XMLSerializer.serializeToString(oFetchXml))
}
function ValidateView()
{
    if(XUI.Xml.SelectSingleNode(oGridXml,"/grid/row",null).childNodes.length <= 0)
    {
        alert(LOCID_VIEWEDITOR_NOFIELDS);
        return false
    }
    return true
}
function addSortingToLookupView()
{
    if(_islookupview)
    {
        var oOrderNode = XUI.Xml.SelectSingleNode(oFetchXml,"fetch/entity/order",null);
        if(IsNull(oOrderNode))
        {
            oOrderNode = oFetchXml.createElement("order");
            oOrderNode.setAttribute("attribute",_requiredColumn);
            oOrderNode.setAttribute("descending","false");
            XUI.Xml.SelectSingleNode(oFetchXml,"fetch/entity",null).appendChild(oOrderNode)
        }
    }
}
function SaveAs()
{
    var name = crmForm.name.value,
        description = crmForm.description.value;
    ViewProperties("saveas",name,description)
}
function AddTelemetryLog(operationName)
{
    try
    {
        var entityId = Xrm.Internal.getEntityCode(_sPrimaryEntityName),
            userRoleId = window.USER_ROLES.toString(),
            oUrl = Mscrm.CrmUri.create(window.location.search),
            viewId = oUrl.get_query()["id"],
            arguments = {};
        arguments["entityId"] = entityId;
        arguments["operationName"] = operationName;
        arguments["userRoleId"] = userRoleId;
        arguments["viewId"] = viewId;
        Mscrm.MetricsReporting.instance().addMetric("vieweditor",arguments)
    }
    catch(e)
    {
    }
}
