<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.SystemCustomization.WebResourceEditor" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="System.Globalization"%>
<%@ Import Namespace="Microsoft.Crm"%>
<%@ Import Namespace="System.Web" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<!DOCTYPE html>
<html>
<head>

<cnt:AppHeader id="crmHeader" runat="server"/>

<script type="text/javascript">

    var _id = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(id) %>;
    var _name = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(name) %>;
    var _url = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(webResourceUrl) %>;
    var _thisPageUrlPrefix = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(webResourceEditorUrl) %>;

    var _isCustomizabe = '<%= canCustomize.ToString().ToLower() %>';
    var _sName,
        _sDisplayName,
        _sDescription,
        _sType,
        _sLanguageCode,
        _sIsEnabledForMobileClient,
        _sIsAvailableForMobileOffline,
        _sDependencyXML;
    var _originalContents = null;
    var HTML = 1;
    var sourceTab = null, editorTab = null;

    Sys.Application.add_load(PageLoad);

    function PageLoad() {
        sourceTab = $get("tab1Tab");
        editorTab = $get("tab0Tab");
        removeTabIndex();
        var args = getDialogArguments();
        _sName = args.sName;
        _sDisplayName = args.sDisplayName;
        _sDescription = args.sDescription;
        _sType = args.sType;
        _sLanguageCode = args.sLanguageCode;
        _sDependencyXML = args.sDependencyXML;
        _sIsEnabledForMobileClient = args.sIsEnabledForMobileClient;
        _sIsAvailableForMobileOffline = args.sIsAvailableForMobileOffline;
        var canCustomize = true;
        if (_isCustomizabe !== "true")
            canCustomize = false;

        Mscrm.Utilities.enableDisableDomElement($get('tab0'), !canCustomize);
        Mscrm.Utilities.enableDisableDomElement($get('tab1'), !canCustomize);

        if (_sType != HTML) {
            editorTab.style.display = "none";

            $find('crmTabBar').down(sourceTab, true);
            if (canCustomize)
                $get('webResourceContent').focus();
        } else {
            $addHandler(sourceTab, "click", ShowSource);
            $addHandler(editorTab, "click", ShowEditor);
            Mscrm.Utilities.enableDisableDomElement($get('WREditor'), !canCustomize);
        }
        _originalContents = document.getElementById('webResourceContent').value;
        attachWindowOnUnload(OnPageUnload);
    }

    function OnPageUnload() {
        if (_sType == HTML) {
            $removeHandler(sourceTab, "click", ShowSource);
            $removeHandler(editorTab, "click", ShowEditor);
        }
    }

    function removeTabIndex() {
        editorTab.removeAttribute('tabIndex');
        sourceTab.removeAttribute('tabIndex');
        document.getElementById('WREditorIFrame').removeAttribute('tabIndex');
    }

    function ShowEditor() {
        if (_sType == HTML) {
            UpdateRTE();
            $find('crmTabBar').down(editorTab, true);
        }
    }

    function ShowSource() {
        if (_sType == HTML) {
            ReplaceBaseUrlFromBody();

            var frameDocument = window.frames["iframe1"].document;
            if (!IsNull(frameDocument.body))
                frameDocument.body.removeAttribute('contentEditable');
            document.getElementById('webResourceContent').value = GetFrameHtml();
            $find('crmTabBar').down(sourceTab, true);
        }
    }


    function GetFrameHtml() {
        var frameDocument = window.frames["iframe1"].document;
        return GetSerializedDoctype(frameDocument) + XUI.Html.GetOuterHTML(frameDocument.documentElement);
    }


    function GetSerializedDoctype(doc) {
        var doctypeObject = doc.doctype;
        if (IsNull(doctypeObject)) {
            return "";
        }
        var docString = "<!DOCTYPE " + doctypeObject.name;
        docString += !isNullOrEmptyString(doctypeObject.publicId) ? ' PUBLIC "' + doctypeObject.publicId + '"' : "";
        docString += isNullOrEmptyString(doctypeObject.publicId) && !isNullOrEmptyString(doctypeObject.systemId)
            ? ' SYSTEM'
            : "";
        docString += !isNullOrEmptyString(doctypeObject.systemId) ? ' "' + doctypeObject.systemId + '"' : "";
        return docString + ">";
    }

    function applychanges() {
        try {
            if (_sType == HTML) {
                if ($get('tab0').style.display == "none")
                    UpdateRTE();


                ReplaceBaseUrlFromBody();


                if (!IsNull(window.frames["iframe1"].document.body))
                    window.frames["iframe1"].document.body.removeAttribute('contentEditable');


                var meta = window.frames["iframe1"].document.createElement('meta');
                meta.charset = 'utf-8';
                window.frames["iframe1"].document.getElementsByTagName('head')[0].appendChild(meta);
                document.getElementById('webResourceContent').value = GetFrameHtml();
            }

            if (_id.length > 0 || _name.length > 0) {
                var wrContents = document.getElementById('webResourceContent').value;
                if (_originalContents != wrContents) {
                    var command = null;
                    if (_name.length > 0) {
                        command = new RemoteCommand("FormEditorWebService", "UpdateWebResourceFromName");
                        command.SetParameter("name", _name);
                    } else {
                        command = new RemoteCommand("FormEditorWebService", "UpdateWebResource");
                        command.SetParameter("id", _id);
                    }
                    var text = wrContents;
                    if (isNullOrEmptyString(text)) {
                        alert(LOCID_EMPTY_WR_CONTENT);
                        return;
                    }
                    command.SetParameter("content", text);
                    command.SetParameter("dependencyXml", _sDependencyXML);
                    var result = command.Execute();
                    if (result.Success) {
                        if (_id.length > 0) {
                            var wrInfoObject = { id: result.ReturnValue, url: null };
                            Mscrm.Utilities.setReturnValue(wrInfoObject);
                        }
                    } else {
                        return;
                    }
                }
            } else {
                var command = new RemoteCommand("FormEditorWebService", "CreateWebResource");
                command.SetParameter("name", _sName);
                command.SetParameter("type", _sType);
                command.SetParameter("displayName", _sDisplayName);
                command.SetParameter("description", _sDescription);
                command.SetParameter("languageCode", _sLanguageCode);
                var text = (document.getElementById('webResourceContent').value);
                if (isNullOrEmptyString(text)) {
                    alert(LOCID_EMPTY_WR_CONTENT);
                    return;
                }
                command.SetParameter("content", text);
                command.SetParameter("isEnabledForMobileClient", _sIsEnabledForMobileClient);
                command.SetParameter("isavailableformobileoffline", _sIsAvailableForMobileOffline);
                command.SetParameter("dependencyXml", _sDependencyXML);
                var result = command.Execute();
                if (result.Success) {
                    _id = result.ReturnValue;
                    var wrInfoObject = { id: _id, url: _url + _sName };
                    Mscrm.Utilities.setReturnValue(wrInfoObject);
                } else {
                    return;
                }
            }
        } catch (e) {
        }

        closeWindow();
    }

    function cancel() {
        closeWindow();
    }

    function SetItem(itemObj) {
        if (itemObj != null) {
            var src = itemObj.name;
            if (src.toString().split("://").length == 1 && itemObj.serverUrl.length == 0)
                src = "http://" + src;
            else
                src = itemObj.serverUrl + itemObj.name;

            var editor = Mscrm.FormControlInputBehavior.GetBehavior('WREditor');
            switch (itemObj.type) {
            case 'image':
                var altText = itemObj.altText;
                if (IsNull(altText))
                    altText = "";
                editor.InsertValue("<p><IMG height='50' alt='" +
                    CrmEncodeDecode.CrmHtmlAttributeEncode(altText) +
                    "' title='" +
                    CrmEncodeDecode.CrmHtmlAttributeEncode(altText) +
                    "' src=" +
                    CrmEncodeDecode.CrmHtmlAttributeEncode(src) +
                    " width='60'> </IMG></p>");
                break;
            case 'hyperlink':
                editor.InsertValue("<p><a href=" +
                    CrmEncodeDecode.CrmHtmlAttributeEncode(src) +
                    ">" +
                    CrmEncodeDecode.CrmHtmlEncode(itemObj.name) +
                    "</a></p>");
                break;
            }
        }
    }

    var updatedRteOnLoad = false;

    function UpdateRTEOnload() {

        if (!updatedRteOnLoad) {
            updatedRteOnLoad = true;
            UpdateRTE();
        }
    }

</script>
<style>
    div.ms-crm-Tab {
        border-top-style: solid;
        border-top-width: 1px;
        width: auto;
        height: auto;
    }

    .ms-crm-TabContainer {
        top: 20px;
        bottom: 27px;
        left: 0px;
        right: 0px;
    }
</style>
</head>

<body>
<frm:DialogForm id="crmForm" runat="server">
    <div id="wrEditorContainer" style="width: 100%; height: 100%; min-width: 600px; position: relative">
        <div class="ms-crm-TabBar-Cell">
            <cnt:AppTabBar id="crmTabBar" runat="server"/>
        </div>
        <div id="HtmlBar" style="vertical-align: top">
            <div id="tab0" class="ms-crm-Tab ms-crm-TabContainer" style="display: block;">
                <div style="position: absolute; left: 10px; right: 10px; top: 10px; bottom: 10px" style="display: block;">
                    <div id="dummyDiv" class="ms-crm-IE7-Height-Fix-Dummy-Container">
                        <sdk:WebResourceEditorControl id="WREditor" runat="server" OnFrameLoad="UpdateRTEOnload()"/>
                    </div>
                </div>
            </div>
            <div id="tab1" class="ms-crm-Tab ms-crm-TabContainer" style="overflow: auto">
                <div style="position: absolute; left: 10px; right: 10px; top: 10px; bottom: 10px" style="display: block;">

                    <textarea style="position: absolute; height: 100%; width: 100%; overflow: auto" id="webResourceContent" dir="ltr" runat="server"></textarea>
                </div>
            </div>
        </div>
        <div style="padding-top: 5px; position: absolute; bottom: 0px; height: 25px; overflow: hidden">
            <span>
                <loc:Text ResourceId="SystemCustomization.HelpContent.Link.Title" runat="server"/>
                <a target="_blank" href="<%= CurrentResourceManager.GetString("CRM_Dynamics_SDK_Address") %>" class="help_link">
                    <loc:Text ResourceId="Brand_CRM_SDK" runat="server"/>
                </a>
            </span>
        </div>
    </div>
</frm:DialogForm>
</body>
</html>