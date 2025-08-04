
var _xmldoc,
    _selectedCorrEntity,
    _selectedRecordAssocEntity,
    _selectedParentAssocEntity,
    _correlationKeyMap = {},
    _recordAssociationMap = {},
    _parentAssociationMap = {},
    _autoCreateExternalPartyMap = {},
    _correlationFieldChangeWarning = {},
    corrFieldChangeInSameSession = {};
Sys.Application.add_load(initialize);
function initialize()
{
    loadCorrelationKeySettings(_correlationKeyMapSettingsXml);
    loadExternalPartyEnabledEntitiesSettings(_externalPartyEnabledEntitiesSettingsXml);
    fetchExternalPartyFieldsForCorrelation(_defaultSelectedEntityLogicalName);
    fetchExternalPartyFieldsForRecordAssociation(_defaultSelectedEntityLogicalName,_defaultSelectedEntityDisplayName);
    fetchExternalPartyFieldsForParentAssociation(_defaultSelectedEntityLogicalName,_defaultSelectedEntityDisplayName)
}
function SelectExternalPartyEntitiesButtonClicked()
{
    var oUrl = Mscrm.CrmUri.create("/Tools/SystemSettings/Dialogs/ExternalPartyEnabledConfiguration.aspx"),
        callbackFunctionObject = Mscrm.Utilities.createCallbackFunctionForXrmDialog(ExternalPartyEnabledConfigCallback,[this]),
        dialogOptions = new Xrm.DialogOptions;
    dialogOptions.height = 600;
    dialogOptions.width = 800;
    Xrm.Internal.openDialog(oUrl.toString(),dialogOptions,null,null,callbackFunctionObject)
}
function SelectAutoCreateExternalPartyEntitiesButtonClicked()
{
    var oUrl = Mscrm.CrmUri.create("/Tools/SystemSettings/Dialogs/AutoCreateExternalPartyEnabledConfiguration.aspx"),
        callbackFunctionObject = Mscrm.Utilities.createCallbackFunctionForXrmDialog(AutoCreateExternalPartyEnabledConfigCallback,[this]),
        dialogOptions = new Xrm.DialogOptions;
    dialogOptions.height = 600;
    dialogOptions.width = 800;
    Xrm.Internal.openDialog(oUrl.toString(),dialogOptions,null,null,callbackFunctionObject)
}
function ExternalPartyEnabledConfigCallback(returnval)
{
    if(returnval && returnval["selectedentities"])
    {
        for(var strToAppend = "",
            strToSearch = "",
            newEntityLogicalName = "",
            i = 0; i < returnval["selectedentities"].childNodes.length; i++)
        {
            newEntityLogicalName = returnval["selectedentities"].childNodes[i].attributes.getNamedItem("name").value;
            strToSearch = "<EntityLogicalName>" + CrmEncodeDecode.CrmXmlEncode(newEntityLogicalName) + "</EntityLogicalName>";
            if(_externalPartyEnabledEntitiesSettingsXml.indexOf(strToSearch) == -1)
            {
                if(strToAppend == "")
                    strToAppend = "<ExternalPartyEntity><EntityLogicalName>" + CrmEncodeDecode.CrmXmlEncode(newEntityLogicalName) + "</EntityLogicalName><IsAutoCreateExternalPartyEnabled>0</IsAutoCreateExternalPartyEnabled></ExternalPartyEntity>";
                else
                    strToAppend += "<ExternalPartyEntity><EntityLogicalName>" + CrmEncodeDecode.CrmXmlEncode(newEntityLogicalName) + "</EntityLogicalName><IsAutoCreateExternalPartyEnabled>0</IsAutoCreateExternalPartyEnabled></ExternalPartyEntity>";
                _externalPartyEnabledEntities.push(newEntityLogicalName);
                addRow("recordassociation","recordAssociationEntitiesTable",newEntityLogicalName,returnval["logicalAndDisplayNamesMapping"][newEntityLogicalName]);
                addRow("parentassociation","parentAssociationEntitiesTable",newEntityLogicalName,returnval["logicalAndDisplayNamesMapping"][newEntityLogicalName]);
                addRow("correlation","corrEntitiesTable",newEntityLogicalName,returnval["logicalAndDisplayNamesMapping"][newEntityLogicalName])
            }
        }
        var position = _externalPartyEnabledEntitiesSettingsXml.indexOf("</ExternalPartyEnabledEntities>");
        _externalPartyEnabledEntitiesSettingsXml = [_externalPartyEnabledEntitiesSettingsXml.slice(0,position),strToAppend,_externalPartyEnabledEntitiesSettingsXml.slice(position)].join("");
        loadExternalPartyEnabledEntitiesSettings(_externalPartyEnabledEntitiesSettingsXml);
        var retval = new StringBuilder;
        retval.Append("<organization>");
        retval.Append("<externalpartyentitysettings>" + CrmEncodeDecode.CrmXmlEncode(_externalPartyEnabledEntitiesSettingsXml) + "</externalpartyentitysettings>");
        retval.Append("</organization>");
        var xml = XUI.Xml.LoadXml(retval.ToString()),
            xmlhttp = new XMLHttpRequest,
            oUrl = Mscrm.CrmUri.create("/Tools/SystemSettings/cmds/cmd_update.aspx");
        xmlhttp.open("POST",oUrl.toString(),false);
        Mscrm.Utilities.setResponseTypeToMSXml(xmlhttp);
        SetTokenInHeader(xmlhttp,oUrl);
        boSuccess = Mscrm.Utilities.safeHttpSend(xmlhttp,xml);
        if(boSuccess)
            boSuccess = handleXMLErr(xmlhttp.responseXML)
    }
}
function AutoCreateExternalPartyEnabledConfigCallback(returnval)
{
    if(returnval)
    {
        var strToReplace = "",
            strToSearch = "",
            newEntityLogicalName = "";
        if(_externalPartyEnabledEntitiesSettingsXml.indexOf("<IsAutoCreateExternalPartyEnabled>1</IsAutoCreateExternalPartyEnabled>") != -1)
            _externalPartyEnabledEntitiesSettingsXml = _externalPartyEnabledEntitiesSettingsXml.split("<IsAutoCreateExternalPartyEnabled>1</IsAutoCreateExternalPartyEnabled>").join("<IsAutoCreateExternalPartyEnabled>0</IsAutoCreateExternalPartyEnabled>");
        for(var i = 0; i < returnval["SelectedAutoCreateExternalPartyEntities"].childNodes.length; i++)
        {
            newEntityLogicalName = returnval["SelectedAutoCreateExternalPartyEntities"].childNodes[i].attributes.getNamedItem("name").value;
            strToSearch = "<EntityLogicalName>" + CrmEncodeDecode.CrmXmlEncode(newEntityLogicalName) + "</EntityLogicalName><IsAutoCreateExternalPartyEnabled>0</IsAutoCreateExternalPartyEnabled>";
            if(_externalPartyEnabledEntitiesSettingsXml.indexOf(strToSearch) != -1)
            {
                strToReplace = "<EntityLogicalName>" + CrmEncodeDecode.CrmXmlEncode(newEntityLogicalName) + "</EntityLogicalName><IsAutoCreateExternalPartyEnabled>1</IsAutoCreateExternalPartyEnabled>";
                _externalPartyEnabledEntitiesSettingsXml = _externalPartyEnabledEntitiesSettingsXml.replace(strToSearch,strToReplace)
            }
        }
        loadExternalPartyEnabledEntitiesSettings(_externalPartyEnabledEntitiesSettingsXml);
        var retval = new StringBuilder;
        retval.Append("<organization>");
        retval.Append("<externalpartyentitysettings>" + CrmEncodeDecode.CrmXmlEncode(_externalPartyEnabledEntitiesSettingsXml) + "</externalpartyentitysettings>");
        retval.Append("</organization>");
        var xml = XUI.Xml.LoadXml(retval.ToString()),
            xmlhttp = new XMLHttpRequest,
            oUrl = Mscrm.CrmUri.create("/Tools/SystemSettings/cmds/cmd_update.aspx");
        xmlhttp.open("POST",oUrl.toString(),false);
        Mscrm.Utilities.setResponseTypeToMSXml(xmlhttp);
        SetTokenInHeader(xmlhttp,oUrl);
        boSuccess = Mscrm.Utilities.safeHttpSend(xmlhttp,xml);
        if(boSuccess)
            boSuccess = handleXMLErr(xmlhttp.responseXML)
    }
}
function sortTable(tableID)
{
    for(var tableData = document.getElementById(tableID).getElementsByTagName("tbody").item(0),
        rowData = tableData.getElementsByTagName("tr"),
        i = 0; i < rowData.length - 1; i++)
        for(var j = 0; j < rowData.length - (i + 1); j++)
            rowData.item(j).getElementsByTagName("td").item(0).innerHTML > rowData.item(j + 1).getElementsByTagName("td").item(0).innerHTML && 
                tableData.insertBefore(rowData.item(j + 1),rowData.item(j))
}
function addRow(context,tableID,entityLogicalName,newEntityDisplayName)
{
    var tableRef = document.getElementById(tableID),
        newRow = tableRef.insertRow(-1);
    newRow.style.height = "25px";
    newRow.onclick = function()
    {
        if(context == "correlation")
            fetchExternalPartyFieldsForCorrelation(entityLogicalName);
        else
            if(context == "recordassociation")
                fetchExternalPartyFieldsForRecordAssociation(entityLogicalName,newEntityDisplayName);
            else
                context == "parentassociation" && 
                    fetchExternalPartyFieldsForParentAssociation(entityLogicalName,newEntityDisplayName)
    };
    var newCell = newRow.insertCell(0);
    if(context == "correlation")
        newCell.id = "corrExternalPartyEnabled_" + entityLogicalName;
    else
        if(context == "recordassociation")
            newCell.id = "recordAssociationExternalPartyEnabled_" + entityLogicalName;
        else
            if(context == "parentassociation")
                newCell.id = "parentAssociationExternalPartyEnabled_" + entityLogicalName;
    newCell.className = "ms-crm-EntityName";
    newCell.innerHTML = newEntityDisplayName;
    sortTable(tableID)
}
function onKeyFetchExternalPartyFieldsForCorrelation(e,entityLogicalName)
{
    if(e.keyCode == 13)
    {
        fetchExternalPartyFieldsForCorrelation(entityLogicalName);
        return false
    }
}
function fetchExternalPartyFieldsForCorrelation(entityLogicalName)
{
    if(this._selectedCorrEntity != entityLogicalName)
    {
        for(var corrEntities = document.getElementById("corrEntitiesTable"),
            i = 0,
            corrEntitiesRow; corrEntitiesRow = corrEntities.rows[i]; i++)
            if(corrEntitiesRow.cells[0].className == "ms-crm-EntityNameSelected")
            {
                corrEntitiesRow.cells[0].className = "ms-crm-EntityName";
                break
            }
        var CorrExternalPartyEnabledEntity = document.getElementById("corrExternalPartyEnabled_" + entityLogicalName);
        if(CorrExternalPartyEnabledEntity != null)
            CorrExternalPartyEnabledEntity.className = "ms-crm-EntityNameSelected";
        this._selectedCorrEntity = entityLogicalName;
        this.entityAttributeSelect(document.getElementById("corrAttributesFields"),entityLogicalName,"correlation");
        if(this._correlationFieldChangeWarning.hasOwnProperty(this._selectedCorrEntity) && this._correlationFieldChangeWarning[this._selectedCorrEntity])
            document.getElementById("corrFieldChangeWarning").className += " ms-crm-Visible";
        else
            document.getElementById("corrFieldChangeWarning").className = "ms-crm-EntityFieldWarning"
    }
}
function onKeyFetchExternalPartyFieldsForRecordAssociation(e,entityLogicalName,entityDisplayName)
{
    if(e.keyCode == 13)
    {
        fetchExternalPartyFieldsForRecordAssociation(entityLogicalName,entityDisplayName);
        return false
    }
}
function fetchExternalPartyFieldsForRecordAssociation(entityLogicalName,entityDisplayName)
{
    if(this._selectedRecordAssocEntity != entityLogicalName)
    {
        for(var recordAssocEntities = document.getElementById("recordAssociationEntitiesTable"),
            i = 0,
            recordAssocEntitiesRow; recordAssocEntitiesRow = recordAssocEntities.rows[i]; i++)
            if(recordAssocEntitiesRow.cells[0].className == "ms-crm-EntityNameSelected")
            {
                recordAssocEntitiesRow.cells[0].className = "ms-crm-EntityName";
                break
            }
        var RecordAssociationExternalPartyEnabledEntity = document.getElementById("recordAssociationExternalPartyEnabled_" + entityLogicalName);
        if(RecordAssociationExternalPartyEnabledEntity != null)
            RecordAssociationExternalPartyEnabledEntity.className = "ms-crm-EntityNameSelected";
        this._selectedRecordAssocEntity = entityLogicalName;
        document.getElementById("recordAssociationDesc").innerHTML = _recordAssocDescription.replace("{0}",entityDisplayName);
        for(i = 0; i < _externalChannelEnabledEntities.length; i++)
            this.entityAttributeSelect(document.getElementById(_externalChannelEnabledEntities[i] + "record_asso_ext_channel_fields"),_externalChannelEnabledEntities[i],"recordassociation")
    }
}
function toggleParentAssocExtChannelVisiblity()
{
    if(this._parentAssociationMap.hasOwnProperty(this._selectedParentAssocEntity) && Object.keys(this._parentAssociationMap[this._selectedParentAssocEntity]).length != 0)
    {
        document.getElementById("extChannelSectionDesc").className = "ms-crm-Visible";
        document.getElementById("extChannelEntityTable").className = "ms-crm-Visible";
        var parentFieldSelect = document.getElementById("parentAttributeField");
        document.getElementById("parentAssocDesc").innerHTML = _parentAssocDescription.replace("{0}",parentFieldSelect.options[parentFieldSelect.selectedIndex].text);
        for(i = 0; i < _externalChannelEnabledEntities.length; i++)
            this.entityAttributeSelect(document.getElementById(_externalChannelEnabledEntities[i] + "parent_asso_ext_channel_fields"),_externalChannelEnabledEntities[i],"ParentAssocExtChannelFields")
    }
    else
    {
        document.getElementById("extChannelSectionDesc").className = "ms-crm-Hidden";
        document.getElementById("extChannelEntityTable").className = "ms-crm-Hidden"
    }
}
function onKeyFetchExternalPartyFieldsForParentAssociation(e,entityLogicalName,entityDisplayName)
{
    if(e.keyCode == 13)
    {
        fetchExternalPartyFieldsForParentAssociation(entityLogicalName,entityDisplayName);
        return false
    }
}
function fetchExternalPartyFieldsForParentAssociation(entityLogicalName,entityDisplayName)
{
    if(this._selectedParentAssocEntity != entityLogicalName)
    {
        for(var parentAssocEntities = document.getElementById("parentAssociationEntitiesTable"),
            i = 0,
            parentAssocEntitiesRow; parentAssocEntitiesRow = parentAssocEntities.rows[i]; i++)
            if(parentAssocEntitiesRow.cells[0].className == "ms-crm-EntityNameSelected")
            {
                parentAssocEntitiesRow.cells[0].className = "ms-crm-EntityName";
                break
            }
        var ParenAssociationExternalPartyEnabledEntity = document.getElementById("parentAssociationExternalPartyEnabled_" + entityLogicalName);
        if(ParenAssociationExternalPartyEnabledEntity != null)
            ParenAssociationExternalPartyEnabledEntity.className = "ms-crm-EntityNameSelected";
        this._selectedParentAssocEntity = entityLogicalName;
        document.getElementById("parentAssoc_selectedEntityName").innerHTML = entityDisplayName + " " + _records + ":";
        this.entityAttributeSelect(document.getElementById("parentAttributeField"),this._selectedParentAssocEntity,"parentAssociationField");
        toggleParentAssocExtChannelVisiblity()
    }
}
function entityAttributeSelect(element,entityName,context)
{
    var attributeSelectorID = element.id,
        attributeSelect = $get(attributeSelectorID);
    this._xmldoc = XUI.Xml.LoadXml("<entities></entities>");
    !IsNull(entityName) && 
        this.valueEntityChange(entityName,attributeSelect,context)
}
function valueEntityChange(entityName,attributeSelect,context)
{
    while(!this.populateAttributeSelector(entityName,attributeSelect,context))
    {
        var _entitydoc = XUI.Xml.LoadXml(this.getAttributesForEntity(entityName,context));
        if(_entitydoc)
        {
            var _entityNode = _entitydoc.getElementsByTagName("entity")[0],
                entitiesNode = this._xmldoc.getElementsByTagName("entities")[0];
            if(_entityNode)
                entitiesNode.appendChild(_entityNode);
            else
                return
        }
    }
}
function populateAttributeSelector(entityName,attributeSelect,context)
{
    var entityNodes = this._xmldoc.getElementsByTagName("entity");
    if(entityNodes)
    {
        while(attributeSelect.options.length > 0)
            attributeSelect.remove(0);
        for(var i = 0; i < entityNodes.length; i++)
            if(XUI.Xml.GetText(XUI.Xml.SelectSingleNode(entityNodes[i],"name",null)) === entityName)
            {
                var blankoption = document.createElement("OPTION");
                blankoption.value = "blank";
                blankoption.text = "";
                attributeSelect.options.add(blankoption);
                for(var attributeNodes = XUI.Xml.SelectNodes(entityNodes[i],"attribute",null),
                    j = 0; j < attributeNodes.length; j++)
                {
                    var option = document.createElement("OPTION");
                    option.value = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(attributeNodes[j],"logicalname",null));
                    option.text = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(attributeNodes[j],"displayname",null));
                    attributeSelect.options.add(option)
                }
                attributeSelect.value = blankoption.value;
                if(context == "correlation" && Object.keys(this._correlationKeyMap).length != 0 && this._correlationKeyMap.hasOwnProperty(entityName))
                    attributeSelect.value = this._correlationKeyMap[entityName];
                else
                    if(context == "recordassociation" && Object.keys(this._recordAssociationMap).length != 0 && this._recordAssociationMap.hasOwnProperty(this._selectedRecordAssocEntity))
                    {
                        if(Object.keys(this._recordAssociationMap[this._selectedRecordAssocEntity]).length != 0 && this._recordAssociationMap[this._selectedRecordAssocEntity].hasOwnProperty(entityName))
                            attributeSelect.value = this._recordAssociationMap[this._selectedRecordAssocEntity][entityName]
                    }
                    else
                        if(context == "ParentAssocExtChannelFields" && this._parentAssociationMap[this._selectedParentAssocEntity][Object.keys(this._parentAssociationMap[this._selectedParentAssocEntity])[0]].hasOwnProperty(entityName))
                            attributeSelect.value = this._parentAssociationMap[this._selectedParentAssocEntity][Object.keys(this._parentAssociationMap[this._selectedParentAssocEntity])[0]][entityName];
                        else
                            if(context == "parentAssociationField" && Object.keys(this._parentAssociationMap).length != 0 && this._parentAssociationMap.hasOwnProperty(this._selectedParentAssocEntity))
                                if(Object.keys(this._parentAssociationMap[this._selectedParentAssocEntity]).length != 0)
                                    attributeSelect.value = Object.keys(this._parentAssociationMap[this._selectedParentAssocEntity])[0];
                return true
            }
    }
    return false
}
function getAttributesForEntity(entityName,context)
{
    var command;
    if(context == "correlation")
        command = new RemoteCommand("Workflow","GetEntityUniqueKeyAttributesXml",null);
    else
        if(context == "recordassociation" || context == "ParentAssocExtChannelFields" || context == "parentAssociationField")
            command = new RemoteCommand("Workflow","GetFormAndGridValidAttributeXmlValueByEntityLogicalName",null);
    command.SetParameter("entityLogicalName",entityName);
    var result = command.Execute();
    if(result.Success)
        return result.ReturnValue;
    else
        return ""
}
function loadCorrelationKeySettings(corrKeyMapSettingsXML)
{
    var correlationKeySettings = XUI.Xml.LoadXml(corrKeyMapSettingsXML),
        externalPartyUniquekeys = correlationKeySettings.getElementsByTagName("ExternalPartyEntity");
    if(externalPartyUniquekeys)
        for(var i = 0; i < externalPartyUniquekeys.length; i++)
            this._correlationKeyMap[XUI.Xml.GetText(XUI.Xml.SelectSingleNode(externalPartyUniquekeys[i],"EntityLogicalName",null))] = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(externalPartyUniquekeys[i],"CorrelationField",null))
}
function loadExternalPartyEnabledEntitiesSettings(ExternalPartyEnabledEntitiesSettingsXml)
{
    var externalPartyEnabledEntitiesSettings = XUI.Xml.LoadXml(ExternalPartyEnabledEntitiesSettingsXml),
        externalPartyEnabledEntities = externalPartyEnabledEntitiesSettings.getElementsByTagName("ExternalPartyEntity"),
        externalChannelEntities,
        externalPartyParentRecords,
        autoCreateExternalpartyNode;
    if(externalPartyEnabledEntities)
        for(var i = 0; i < externalPartyEnabledEntities.length; i++)
        {
            this._autoCreateExternalPartyMap[XUI.Xml.GetText(XUI.Xml.SelectSingleNode(externalPartyEnabledEntities[i],"EntityLogicalName",null))] = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(externalPartyEnabledEntities[i],"IsAutoCreateExternalPartyEnabled",null));
            this._recordAssociationMap[XUI.Xml.GetText(XUI.Xml.SelectSingleNode(externalPartyEnabledEntities[i],"EntityLogicalName",null))] = {};
            externalChannelEntities = XUI.Xml.SelectNodes(externalPartyEnabledEntities[i],"ExternalChannelAccessEnabledEntity",null);
            for(var j = 0; j < externalChannelEntities.length; j++)
                this._recordAssociationMap[XUI.Xml.GetText(XUI.Xml.SelectSingleNode(externalPartyEnabledEntities[i],"EntityLogicalName",null))][XUI.Xml.GetText(XUI.Xml.SelectSingleNode(externalChannelEntities[j],"EntityLogicalName",null))] = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(externalChannelEntities[j],"AssociatedField",null));
            this._parentAssociationMap[XUI.Xml.GetText(XUI.Xml.SelectSingleNode(externalPartyEnabledEntities[i],"EntityLogicalName",null))] = {};
            externalPartyParentRecords = externalPartyEnabledEntities[i].getElementsByTagName("ExternalPartyParentRecord");
            for(var externalPartyParentChannelAccessEntities,
                j = 0; j < externalPartyParentRecords.length; j++)
            {
                this._parentAssociationMap[XUI.Xml.GetText(XUI.Xml.SelectSingleNode(externalPartyEnabledEntities[i],"EntityLogicalName",null))][XUI.Xml.GetText(XUI.Xml.SelectSingleNode(externalPartyParentRecords[j],"FieldLogicalName",null))] = {};
                externalPartyParentChannelAccessEntities = externalPartyParentRecords[j].getElementsByTagName("ExternalChannelAccessEnabledEntity");
                for(var k = 0; k < externalPartyParentChannelAccessEntities.length; k++)
                    this._parentAssociationMap[XUI.Xml.GetText(XUI.Xml.SelectSingleNode(externalPartyEnabledEntities[i],"EntityLogicalName",null))][XUI.Xml.GetText(XUI.Xml.SelectSingleNode(externalPartyParentRecords[j],"FieldLogicalName",null))][XUI.Xml.GetText(XUI.Xml.SelectSingleNode(externalPartyParentChannelAccessEntities[k],"EntityLogicalName",null))] = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(externalPartyParentChannelAccessEntities[k],"AssociatedField",null))
            }
        }
}
function onCorrelationKeyMapFieldChange(o)
{
    if(this._correlationKeyMap.hasOwnProperty(this._selectedCorrEntity) && !(this.corrFieldChangeInSameSession.hasOwnProperty(this._selectedCorrEntity) && this.corrFieldChangeInSameSession[this._selectedCorrEntity]))
    {
        document.getElementById("corrFieldChangeWarning").className += " ms-crm-Visible";
        this._correlationFieldChangeWarning[this._selectedCorrEntity] = true
    }
    else
    {
        document.getElementById("corrFieldChangeWarning").className = "ms-crm-EntityFieldWarning";
        this._correlationFieldChangeWarning[this._selectedCorrEntity] = false
    }
    if(o.value != "blank")
        this._correlationKeyMap[this._selectedCorrEntity] = o.value;
    else
        if(this._correlationKeyMap[this._selectedCorrEntity])
            delete this._correlationKeyMap[this._selectedCorrEntity];
    this.corrFieldChangeInSameSession[this._selectedCorrEntity] = true
}
function onRecordAssociationFieldChange(o)
{
    var selectName = o.id,
        len = selectName.indexOf("record_asso_ext_channel_fields"),
        externalChannelEntityName = selectName.substring(0,len);
    if(o.value != "blank")
        if(this._recordAssociationMap.hasOwnProperty(this._selectedRecordAssocEntity))
            this._recordAssociationMap[this._selectedRecordAssocEntity][externalChannelEntityName] = o.value;
        else
        {
            this._recordAssociationMap[this._selectedRecordAssocEntity] = {};
            this._recordAssociationMap[this._selectedRecordAssocEntity][externalChannelEntityName] = o.value
        }
    else
        if(this._recordAssociationMap.hasOwnProperty(this._selectedRecordAssocEntity) && this._recordAssociationMap[this._selectedRecordAssocEntity].hasOwnProperty(externalChannelEntityName))
            delete this._recordAssociationMap[this._selectedRecordAssocEntity][externalChannelEntityName]
}
function onParentFieldChange(o)
{
    var selectName = o.id;
    if(o.value != "blank")
    {
        this._parentAssociationMap[this._selectedParentAssocEntity] = {};
        this._parentAssociationMap[this._selectedParentAssocEntity][o.value] = {}
    }
    else
        if(this._parentAssociationMap.hasOwnProperty(this._selectedParentAssocEntity) && Object.keys(this._parentAssociationMap[this._selectedParentAssocEntity]).length != 0)
        {
            for(var i = 0; i < Object.keys(this._parentAssociationMap[this._selectedParentAssocEntity][Object.keys(this._parentAssociationMap[this._selectedParentAssocEntity])[0]]).length; i++)
                delete this._parentAssociationMap[this._selectedParentAssocEntity][Object.keys(this._parentAssociationMap[this._selectedParentAssocEntity])[0]][Object.keys(this._parentAssociationMap[this._selectedParentAssocEntity][Object.keys(this._parentAssociationMap[this._selectedParentAssocEntity])[0]])[i]];
            delete this._parentAssociationMap[this._selectedParentAssocEntity]
        }
    toggleParentAssocExtChannelVisiblity()
}
function onParentAssociationFieldChange(o)
{
    var selectName = o.id,
        len = selectName.indexOf("parent_asso_ext_channel_fields"),
        externalChannelEntityName = selectName.substring(0,len);
    if(o.value != "blank")
        this._parentAssociationMap[this._selectedParentAssocEntity][Object.keys(this._parentAssociationMap[this._selectedParentAssocEntity])[0]][externalChannelEntityName] = o.value;
    else
        if(this._parentAssociationMap[this._selectedParentAssocEntity][Object.keys(this._parentAssociationMap[this._selectedParentAssocEntity])[0]].hasOwnProperty(externalChannelEntityName))
            delete this._parentAssociationMap[this._selectedParentAssocEntity][Object.keys(this._parentAssociationMap[this._selectedParentAssocEntity])[0]][externalChannelEntityName]
}
function getExternalPartyCorrKeyMapDataXml()
{
    var correlationKeyMapSettingsXml = "<ExternalPartyEntitiesCorrelationKeys>";
    if(Object.keys(this._correlationKeyMap).length == 0)
    {
        correlationKeyMapSettingsXml = "<ExternalPartyEntitiesCorrelationKeys><ExternalPartyEntity><EntityLogicalName>contact</EntityLogicalName><CorrelationField>emailaddress1</CorrelationField></ExternalPartyEntity><ExternalPartyEntity><EntityLogicalName>systemuser</EntityLogicalName><CorrelationField>internalemailaddress</CorrelationField></ExternalPartyEntity></ExternalPartyEntitiesCorrelationKeys>";
        return correlationKeyMapSettingsXml
    }
    for(var i = 0; i < Object.keys(this._correlationKeyMap).length; i++)
    {
        correlationKeyMapSettingsXml += "<ExternalPartyEntity>";
        correlationKeyMapSettingsXml += "<EntityLogicalName>" + Object.keys(this._correlationKeyMap)[i] + "</EntityLogicalName>";
        correlationKeyMapSettingsXml += "<CorrelationField>" + this._correlationKeyMap[Object.keys(this._correlationKeyMap)[i]] + "</CorrelationField>";
        correlationKeyMapSettingsXml += "</ExternalPartyEntity>"
    }
    correlationKeyMapSettingsXml += "</ExternalPartyEntitiesCorrelationKeys>";
    return correlationKeyMapSettingsXml
}
function getExternalPartyEnableEntitiesSettingsXml()
{
    var externalPartyEnabledEntitiesSettingsXml = "<ExternalPartyEnabledEntities>";
    if(_externalPartyEnabledEntities.length == 0)
    {
        externalPartyEnabledEntitiesSettingsXml = "<ExternalPartyEnabledEntities><ExternalPartyEntity><EntityLogicalName>systemuser</EntityLogicalName><IsAutoCreateExternalPartyEnabled>0</IsAutoCreateExternalPartyEnabled><ExternalChannelAccessEnabledEntity><EntityLogicalName>account</EntityLogicalName><AssociatedField>primarycontactid</AssociatedField></ExternalChannelAccessEnabledEntity><ExternalChannelAccessEnabledEntity><EntityLogicalName>incident</EntityLogicalName><AssociatedField>ownerid</AssociatedField></ExternalChannelAccessEnabledEntity></ExternalPartyEntity><ExternalPartyEntity><EntityLogicalName>contact</EntityLogicalName><IsAutoCreateExternalPartyEnabled>0</IsAutoCreateExternalPartyEnabled><ExternalChannelAccessEnabledEntity><EntityLogicalName>account</EntityLogicalName><AssociatedField>primarycontactid</AssociatedField></ExternalChannelAccessEnabledEntity><ExternalChannelAccessEnabledEntity><EntityLogicalName>incident</EntityLogicalName><AssociatedField>customerid</AssociatedField></ExternalChannelAccessEnabledEntity><ExternalPartyParentRecord><FieldLogicalName>parentcustomerid</FieldLogicalName><ExternalChannelAccessEnabledEntity><EntityLogicalName>account</EntityLogicalName><AssociatedField>primarycontactid</AssociatedField></ExternalChannelAccessEnabledEntity><ExternalChannelAccessEnabledEntity><EntityLogicalName>incident</EntityLogicalName><AssociatedField>customerid</AssociatedField></ExternalChannelAccessEnabledEntity></ExternalPartyParentRecord></ExternalPartyEntity></ExternalPartyEnabledEntities>";
        return externalPartyEnabledEntitiesSettingsXml
    }
    for(i = 0; i < _externalPartyEnabledEntities.length; i++)
    {
        externalPartyEnabledEntitiesSettingsXml += "<ExternalPartyEntity>";
        externalPartyEnabledEntitiesSettingsXml += "<EntityLogicalName>" + _externalPartyEnabledEntities[i] + "</EntityLogicalName>";
        if(this._autoCreateExternalPartyMap.hasOwnProperty(_externalPartyEnabledEntities[i]))
            externalPartyEnabledEntitiesSettingsXml += "<IsAutoCreateExternalPartyEnabled>" + this._autoCreateExternalPartyMap[_externalPartyEnabledEntities[i]] + "</IsAutoCreateExternalPartyEnabled>";
        else
            externalPartyEnabledEntitiesSettingsXml += "<IsAutoCreateExternalPartyEnabled>0</IsAutoCreateExternalPartyEnabled>";
        if(this._recordAssociationMap.hasOwnProperty(_externalPartyEnabledEntities[i]))
            for(var j = 0; j < Object.keys(this._recordAssociationMap[_externalPartyEnabledEntities[i]]).length; j++)
            {
                externalPartyEnabledEntitiesSettingsXml += "<ExternalChannelAccessEnabledEntity>";
                externalPartyEnabledEntitiesSettingsXml += "<EntityLogicalName>" + Object.keys(this._recordAssociationMap[_externalPartyEnabledEntities[i]])[j] + "</EntityLogicalName>";
                externalPartyEnabledEntitiesSettingsXml += "<AssociatedField>" + this._recordAssociationMap[_externalPartyEnabledEntities[i]][Object.keys(this._recordAssociationMap[_externalPartyEnabledEntities[i]])[j]] + "</AssociatedField>";
                externalPartyEnabledEntitiesSettingsXml += "</ExternalChannelAccessEnabledEntity>"
            }
        if(this._parentAssociationMap.hasOwnProperty(_externalPartyEnabledEntities[i]))
            for(var j = 0; j < Object.keys(this._parentAssociationMap[_externalPartyEnabledEntities[i]]).length; j++)
            {
                externalPartyEnabledEntitiesSettingsXml += "<ExternalPartyParentRecord>";
                externalPartyEnabledEntitiesSettingsXml += "<FieldLogicalName>" + Object.keys(this._parentAssociationMap[_externalPartyEnabledEntities[i]])[j] + "</FieldLogicalName>";
                for(var k = 0; k < Object.keys(this._parentAssociationMap[_externalPartyEnabledEntities[i]][Object.keys(this._parentAssociationMap[_externalPartyEnabledEntities[i]])[j]]).length; k++)
                {
                    externalPartyEnabledEntitiesSettingsXml += "<ExternalChannelAccessEnabledEntity>";
                    var externalChannelEntityKey = Object.keys(this._parentAssociationMap[_externalPartyEnabledEntities[i]][Object.keys(this._parentAssociationMap[_externalPartyEnabledEntities[i]])[j]])[k];
                    externalPartyEnabledEntitiesSettingsXml += "<EntityLogicalName>" + externalChannelEntityKey + "</EntityLogicalName>";
                    externalPartyEnabledEntitiesSettingsXml += "<AssociatedField>" + this._parentAssociationMap[_externalPartyEnabledEntities[i]][Object.keys(this._parentAssociationMap[_externalPartyEnabledEntities[i]])[j]][externalChannelEntityKey] + "</AssociatedField>";
                    externalPartyEnabledEntitiesSettingsXml += "</ExternalChannelAccessEnabledEntity>"
                }
                externalPartyEnabledEntitiesSettingsXml += "</ExternalPartyParentRecord>"
            }
        externalPartyEnabledEntitiesSettingsXml += "</ExternalPartyEntity>"
    }
    externalPartyEnabledEntitiesSettingsXml += "</ExternalPartyEnabledEntities>";
    return externalPartyEnabledEntitiesSettingsXml
}
