
var warningDisplayed = 0,
    pathAndFileNameValidationSource = "",
    validate = true;
function CheckPathName()
{
    if(validate)
    {
        if(warningDisplayed == 1 && pathAndFileNameValidationSource == "")
        {
            warningDisplayed = 0;
            return
        }
        if(pathAndFileNameValidationSource == "save")
        {
            warningDisplayed = 1;
            pathAndFileNameValidationSource = ""
        }
        var regExp = new RegExp("[^A-Z0-9._/]"),
            pathValue = _crmFormSubmit.pathAndFileName.value.toUpperCase();
        if(pathValue.search(regExp) != -1)
        {
            alert(LOCID_INVALID_WR_NAME);
            _crmFormSubmit.pathAndFileName.focus();
            return false
        }
        regExp = new RegExp("[/]{2,}");
        if(pathValue.search(regExp) != -1)
        {
            alert(LOCID_INVALID_WR_NAME);
            _crmFormSubmit.pathAndFileName.focus();
            return false
        }
        if(pathValue.toLowerCase().endsWith(".aspx") || pathValue.toLowerCase().endsWith(".ashx") || pathValue.toLowerCase().endsWith(".ascx"))
        {
            alert(LOCID_INVALID_WR_EXTENSION);
            _crmFormSubmit.pathAndFileName.focus();
            return false
        }
    }
    return true
}
function validateSLVersion()
{
    var version = Mscrm.Utilities.validateVersion(_crmFormSubmit.silverlightVersion.value);
    if(version.length == 0)
    {
        _crmFormSubmit.silverlightVersion.focus();
        return false
    }
    else
    {
        _crmFormSubmit.silverlightVersion.value = version;
        return true
    }
}
function setFormDirty()
{
    _formDirty = true
}
function Preview()
{
    if(CanCustomizeWebResource())
    {
        var url = _crmFormSubmit.wrURL.value;
        if(url.length > 0)
        {
            if(_crmFormSubmit.webResourceType.value == typeMapping["xap"])
                url = previewUrl + "?Name=" + CrmEncodeDecode.CrmUrlEncode(XUI.Html.GetText($get("solPrefix")) + _crmFormSubmit.pathAndFileName.value) + "&SilverLightVersion=" + CrmEncodeDecode.CrmUrlEncode(_crmFormSubmit.silverlightVersion.value);
            else
                url = url + "?preview=1";
            openStdWin(Mscrm.CrmUri.create(url),"",1024,800,"status=1,resizable=1,scrollbars=1")
        }
    }
}
function SaveForm(fclose)
{
    if(FormFieldsValid(false))
        if(_crmFormSubmit.userFileId.value.length == 0 && _crmFormSubmit.id.value == "")
            alert(LOCID_EMPTY_WR_CONTENT);
        else
        {
            setResourceDependencies();
            _crmFormSubmit.webResourceType.removeAttribute("disabled");
            $get("labelType").removeAttribute("disabled");
            SubmitPostBack(fclose,"true")
        }
}
function SubmitPostBack(fClose,sAction)
{
    _crmFormSubmit.close.value = fClose;
    _crmFormSubmit.fileName.value = _crmFormSubmit.userFileId.value;
    if(!IsNull(sAction))
        _crmFormSubmit.update.value = sAction;
    _formDirty = false;
    _crmFormSubmit.submit()
}
function DeleteRecord()
{
    onActionMenuClick("delete",9333)
}
function CloseRecord()
{
    closeWindow()
}
function ShowDependencies()
{
    Mscrm.WebResourceUtils.ShowWebResourceDependencies(_crmFormSubmit.id.value,9333)
}
function PublishWebResource()
{
    if(CheckPathName() && validateSLVersion())
        if(_crmFormSubmit.id.value != null && _crmFormSubmit.id.value.length > 0)
        {
            var oDataXml = createXmlDoc("publish"),
                oEntitiesXml = addXmlNode(oDataXml,"webresources");
            addTextXmlNode(oEntitiesXml,"webresource",_crmFormSubmit.id.value);
            var sDataXml = convertXmlDocToString(oDataXml);
            publishEntities(sDataXml,1,PublishCommandCallback,null);
            window.IS_GRID_WITH_IMAGE && 
                ClearGridWithImageCache()
        }
        else
            alert(LOCID_UNSAVED_WR)
}
function ClearGridWithImageCache()
{
    if(window.top.opener.top.location.href.toString().indexOf("edit.aspx") > -1)
        window.top.opener.top.opener.top.GRID_WITH_IMAGE_CACHE = null
}
function PublishCommandCallback(oResult,oCallbackParams)
{
    refreshWebResourceGrid();
    return true
}
function editWR()
{
    if(FormFieldsValid(false) && CanCustomizeWebResource())
    {
        var wrId = CrmEncodeDecode.CrmUrlEncode(_crmFormSubmit.id.value),
            oUrl = Mscrm.CrmUri.create(formatString("/tools/webresourceeditor/webresourceeditor.aspx?id={0}",wrId)),
            oArgs = {};
        if(wrId == null || wrId.length == 0)
        {
            oArgs.sName = $get("solPrefix").innerHTML + _crmFormSubmit.pathAndFileName.value;
            oArgs.sDisplayName = _crmFormSubmit.displayName.value;
            oArgs.sDescription = _crmFormSubmit.description.value;
            oArgs.sLanguageCode = _crmFormSubmit.languagecode.value;
            oArgs.sIsEnabledForMobileClient = _crmFormSubmit.IsEnabledForMobileClient.checked;
            oArgs.sIsAvailableForMobileOffline = _crmFormSubmit.IsAvailableForMobileOffline.checked
        }
        oArgs.sType = _crmFormSubmit.webResourceType.value;
        oArgs.sDependencyXML = _crmFormSubmit.webResourceDependencyXML.value;
        var dialogOptions = new Xrm.DialogOptions;
        dialogOptions.height = 520;
        dialogOptions.width = 750;
        Xrm.Internal.openDialog(oUrl.toString(),dialogOptions,oArgs,null,callBackForeditWR)
    }
}
function callBackForeditWR(result)
{
    if(result != null)
        if(!IsNull(result.url))
        {
            _crmFormSubmit.id.value = result.id;
            SubmitPostBack(false,"false")
        }
}
function enableDisableFormParts()
{
    _crmFormSubmit.webResourceType.setAttribute("disabled","disabled");
    $get("labelType").setAttribute("disabled","disabled");
    _crmFormSubmit.pathAndFileName.setAttribute("disabled","disabled");
    $get("pathAndFileNameLabel").setAttribute("disabled","disabled");
    $get("solPrefix").setAttribute("disabled","disabled");
    _crmFormSubmit.displayName.select();
    try
    {
        _crmFormSubmit.displayName.focus()
    }
    catch(e)
    {
    }
}
function refreshWebResourceGrid()
{
    try
    {
        !IsNull(window.top.opener) && 
            window.top.opener.auto("9333")
    }
    catch(e)
    {
    }
}
function PickListValueChanged()
{
    switch(_crmFormSubmit.webResourceType.value)
    {
        case typeMapping["html"]:
            _crmFormSubmit.editwr.style.display = "inline";
            _crmFormSubmit.silverlightVersion.style.display = "none";
            $get("silverLightVersionLabel").style.display = "none";
            if(isMobileOfflineFCBEnabled())
                HideOrShowMobileRelatedControls("inline");
            else
            {
                HideOrShowMobileRelatedControls("none");
                _crmFormSubmit.IsEnabledForMobileClient.style.display = "inline";
                $get("IsEnabledForMobileClientLabel").style.display = "inline"
            }
            break;
        case typeMapping["css"]:
        case typeMapping["js"]:
        case typeMapping["xsl"]:
        case typeMapping["xml"]:
            _crmFormSubmit.editwr.style.display = "inline";
            _crmFormSubmit.silverlightVersion.style.display = "none";
            $get("silverLightVersionLabel").style.display = "none";
            _crmFormSubmit.IsEnabledForMobileClient.style.display = "none";
            HideOrShowMobileRelatedControls("none");
            break;
        case typeMapping["png"]:
        case typeMapping["jpg"]:
        case typeMapping["gif"]:
        case typeMapping["ico"]:
            _crmFormSubmit.editwr.style.display = "none";
            _crmFormSubmit.silverlightVersion.style.display = "none";
            $get("silverLightVersionLabel").style.display = "none";
            HideOrShowMobileRelatedControls("none");
            break;
        case typeMapping["xap"]:
            _crmFormSubmit.editwr.style.display = "none";
            _crmFormSubmit.silverlightVersion.style.display = "inline";
            $get("silverLightVersionLabel").style.display = "inline";
            HideOrShowMobileRelatedControls("none");
            break;
        default:
            _crmFormSubmit.editwr.style.display = "none";
            _crmFormSubmit.silverlightVersion.style.display = "none";
            $get("silverLightVersionLabel").style.display = "none";
            HideOrShowMobileRelatedControls("none");
            break
    }
}
function HideOrShowMobileRelatedControls(display)
{
    var mobileClientCheckboxControl = _crmFormSubmit.IsEnabledForMobileClient,
        mobileOfflineCheckboxControl = _crmFormSubmit.IsAvailableForMobileOffline,
        libraryGrid = $get("libraryGrid"),
        libraryGridMenubar = $get("libraryMenuBar");
    mobileClientCheckboxControl.style.display = display;
    $get("IsEnabledForMobileClientLabel").style.display = display;
    if(display == "inline")
    {
        HideOrShowMobileOfflineCheckBox(mobileClientCheckboxControl);
        libraryGridMenubar.style.display = "";
        libraryGrid.style.display = "";
        libraryGrid.style.borderColor = "#A9A9A9"
    }
    else
    {
        mobileOfflineCheckboxControl.style.display = display;
        $get("IsAvailableForMobileOfflineLabel").style.display = display;
        libraryGridMenubar.style.display = display;
        libraryGrid.style.display = display;
        libraryGrid.style.borderColor = "#ffffff"
    }
    $get("mobiledependencysectionmessage").style.display = display;
    $get("librarySectionMessage").style.display = display;
    $get("mobiledependencynavigationanchorid").style.display = display
}
function isMobileOfflineFCBEnabled()
{
    if(Mscrm.FeatureControl.get_Current().isFeatureEnabled(Mscrm.FeatureNames.MocaOffline))
        return true;
    return false
}
function HideOrShowMobileOfflineCheckBox(mobileClientCheckboxControl)
{
    var mobileOfflineCheckboxControl = _crmFormSubmit.IsAvailableForMobileOffline;
    if(mobileClientCheckboxControl.checked && isMobileOfflineFCBEnabled())
    {
        mobileOfflineCheckboxControl.style.display = "inline";
        $get("IsAvailableForMobileOfflineLabel").style.display = "inline"
    }
    else
    {
        mobileOfflineCheckboxControl.checked = false;
        mobileOfflineCheckboxControl.style.display = "none";
        $get("IsAvailableForMobileOfflineLabel").style.display = "none"
    }
}
function EnableDisableDeleteWebResource()
{
    if(_crmFormSubmit.id.value.length > 0)
        return true;
    else
        return false
}
function PublishAll()
{
    publishEntitiesAll(PublishCommandCallback,null);
    window.IS_GRID_WITH_IMAGE && 
        ClearGridWithImageCache()
}
function FormFieldsValid(fUploadFile)
{
    pathAndFileNameValidationSource = "save";
    if(!CheckPathName() || !validateSLVersion())
        return false;
    if(_crmFormSubmit.pathAndFileName.value.length == 0)
    {
        alert(LOCID_EMPTY_WR_NAME);
        _crmFormSubmit.pathAndFileName.focus();
        return false
    }
    if(_crmFormSubmit.webResourceType.value.length == 0)
    {
        alert(LOCID_EMPTY_WR_NAME);
        _crmFormSubmit.webResourceType.focus();
        return false
    }
    if(fUploadFile || _crmFormSubmit.webResourceType.value.length > 0 && _crmFormSubmit.userFileId.value.length > 0)
    {
        (IsNull(_crmFormSubmit.id.value) || _crmFormSubmit.id.value.length == 0) && 
            _crmFormSubmit.webResourceType.removeAttribute("disabled");
        $get("labelType").removeAttribute("disabled");
        var sFileName = _crmFormSubmit.userFileId.value,
            sFileName = sFileName.slice(sFileName.lastIndexOf("\\") + 1),
            sExtension = sFileName.slice(sFileName.lastIndexOf(".") + 1).toLowerCase();
        switch(sExtension)
        {
            case "html":
            case "htm":
            case "css":
            case "jscript":
            case "xml":
            case "png":
            case "jpg":
            case "jpeg":
            case "gif":
            case "ico":
            case "xap":
            case "js":
            case "xsl":
            case "xslt":
                break;
            default:
                alert(LOCID_INVALID_TYPE);
                return false;
                break
        }
        if(_crmFormSubmit.webResourceType.value != typeMapping[sExtension])
        {
            alert(LOCID_TYPE_MISMATCH);
            return false
        }
    }
    return true
}
function CanCustomizeWebResource()
{
    if(_isCustomizabe == "true")
        return true;
    else
        return false
}
function MakeEditorReadOnly()
{
    !CanCustomizeWebResource() && 
        Mscrm.Utilities.enableDisableDomElement($get("editorDiv"),true)
}
function ReplaceBaseUrlFromBody()
{
    var wrLinks = window.frames["iframe1"].document.getElementsByTagName("a");
    ReplaceUrlFromElements(wrLinks,"href");
    var wrImages = window.frames["iframe1"].document.getElementsByTagName("IMG");
    ReplaceUrlFromElements(wrImages,"src")
}
function AddBaseUrlToBody()
{
    var wrLinks = window.frames["iframe1"].document.getElementsByTagName("a");
    AddUrlToElements(wrLinks,"href");
    var wrImages = window.frames["iframe1"].document.getElementsByTagName("IMG");
    AddUrlToElements(wrImages,"src")
}
function AddUrlToElements(elemes,attrName)
{
    for(var i = 0; i < elemes.length; i++)
    {
        var currentElem = elemes.item(i);
        if(currentElem != null)
        {
            var attrNode = currentElem.attributes.getNamedItem(attrName);
            if(!IsNull(attrNode))
            {
                var link = attrNode.nodeValue.toLowerCase();
                link = link.replace(_thisPageUrlPrefix.toLowerCase(),"");
                if(!link.startsWith("http://") && !link.startsWith("https://"))
                {
                    link = _url + link;
                    attrNode.nodeValue = link
                }
            }
        }
    }
}
function ReplaceUrlFromElements(elemes,attrName)
{
    for(var i = 0; i < elemes.length; i++)
    {
        var currentElem = elemes.item(i);
        if(currentElem != null)
        {
            var attrNode = currentElem.attributes.getNamedItem(attrName);
            if(attrNode != null)
            {
                var link = attrNode.nodeValue;
                if(link.indexOf(_url) != -1)
                {
                    link = link.replace(_url,"");
                    attrNode.nodeValue = link
                }
            }
        }
    }
}
function setResourceDependencies()
{
    _crmFormSubmit.webResourceDependencyXML.value = XUI.Xml.XMLSerializer.serializeToString(XUI.Xml.SelectSingleNode(Mscrm.FormLibraryAndEventHandlerUtils.dependencyXml,"/Dependencies"))
}
function UpdateRTE()
{
    var iframeDocument = window.frames["iframe1"].document,
        htmlValue = window.document.getElementById("webResourceContent").value;
    try
    {
        iframeDocument.documentElement.innerHTML = htmlValue
    }
    catch(e)
    {
        iframeDocument.close();
        iframeDocument.open();
        iframeDocument.write(htmlValue);
        iframeDocument.close()
    }
    window.AddBaseUrlToBody();
    iframeDocument.body.setAttribute("contentEditable","true")
}
var typeMapping = {html:"1",htm:"1",css:"2",jscript:"3",js:"3",xml:"4",png:"5",jpg:"6",jpeg:"6",gif:"7",xap:"8",xsl:"9",xslt:"9",ico:"10"},
    previewUrl = "/tools/webresourceeditor/preview.aspx"
