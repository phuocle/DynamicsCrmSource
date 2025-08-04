<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.SPFileUpload" CodeBehind="Microsoft.Crm.Common.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="System.Web" %>
<html>
<head>
<title>
    <loc:Text id="dialogTitle" runat="server"/>
</title>
<cnt:AppHeader id="crmHeader" runat="server"/>
<style type="text/css">
    DIV.ms-crm-Dialog-Header-Title {
        color: #000000 !important;
        font-size: <%= WebUtility.GetFontResourceForStyle("General.36px.font_size") %> !important;
        font-family: Segoe UI !important;
        font-weight: lighter;
        <% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
           { %>
        margin-right: 20px;
        <% }
           else
           { %>
        margin-left: 20px;
        <% } %>
        margin-top: 11px;
    }

    .ms-crm-RefreshDialog-Header {
        top: 0px;
        position: absolute;
        width: 100%;
        height: 75px;
        padding-top: 9px;
    }

    DIV.ms-crm-Dialog-Header {
        top: 20px !important;
        bottom: 30px !important;
        padding-left: 30px !important;
        padding-right: 30px !important;
        border: none !important;
    }

    .ms-crm-AttachmentContainer {
        top: 80px;
        <% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
           { %>
        padding-right: 20px;
        <% }
           else
           { %>
        padding-left: 20px;
        <% } %>
        position: absolute;
        bottom: 0px;
        width: 90%;
    }

    .ms-crm-RefreshDialog-Button_ok {
        height: 24px;
        font-family: Segoe UI, Tahoma, Arial;
        font-size: 11px;
        border: 1px solid #C6C6C6;
        background-image: none;
        margin-top: 10px;
        width: auto;
        min-width: 80px;
        white-space: nowrap;
        text-align: center;
        cursor: pointer;
        border-width: 1px;
        border-style: solid;
        background-repeat: repeat-x;
        padding-left: 5px;
        padding-right: 5px;
        color: #444444;
        background-color: #FFFFFF;
    }

    #btnCross {
        display: block;
        position: absolute;
        top: 20px;
        width: 16px;
        height: 16px;

        <% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
           {
        %>
        left: 30px;
        <%
           }
           else
           {
        %>
        right: 30px;
        <% } %>
    }

    .ms-crm-RefreshDialog-Button_Cancel {
        <% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
           {
        %>
        margin-right: 8px;
        margin-left: 30px;
        <%
           }
           else
           {
        %>
        margin-right: 30px;
        margin-left: 8px;

        <% } %>
    }

    .ms-crm-RefreshDialog-Button_ok:hover { background-color: #B1D6F0; }

    .ms-crm-RefreshDialog-Footer {
        position: absolute;
        bottom: 0px;
        width: 100%;
        min-width: 288px;
        margin-top: 100px;
        height: 44px;
        <% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
           { %>
        text-align: left;
        <% }
           else
           { %>
        text-align: right;
        <% } %>
    }

    td.AppAttachment_Render_td5 { display: none; }

    .ms-crm-WhiteBackground {
        border-color: #D6D6D6;
        border-width: 1px;
    }

    .ms-crm-uploadCommentsText {
        font-size: 12px;
        font-family: Segoe UI;
        color: #666666;
    }

    div.ms-crm-field-normal {
        padding-top: 2px;
        vertical-align: middle;
    }

    input[type="checkbox"] {
        margin: 0px;
        width: 5%;
        <% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
           { %>
        padding-right: 0px;
        <% }
           else
           { %>
        padding-left: 0px;
        <% } %>
    }

    .contentUploadFileTable { height: auto; }

    .ms-crm-overwrite {
        vertical-align: top;
        font-family: Segoe UI;
        color: #666666;
        font-size: 12px;
    }

    .ms-crm-dlglabel {
        vertical-align: top;
        font-family: Segoe UI;
        color: #444444;
        font-size: 12px;
    }
</style>
<script language="JavaScript">


    Sys.Application.add_load(PageLoad);

    function applychanges() {
        window.parent.setPerfMarkerTimestamp("UploadStart");
        var oUrl = Mscrm.CrmUri.create(location.href);
        var isPersonalSitePresent = window.isPersonalSitePresent;
        var oReturn = new Object();
        oReturn.regardingObjectId = oUrl.get_query()["pid"];
        oReturn.regardingTypeCode = oUrl.get_query()["pType"];
        oReturn.foldername = oUrl.get_query()["foldername"];
        oReturn.siteType = 1;
        oReturn.locationId = $get("documentLocations").value;
        oReturn.callback = callbackUpload;
        oReturn.isPersonalSitePresent = isPersonalSitePresent;

        if (Mscrm.Utilities.isNullOrEmptyGuid(oReturn.locationId)) {
            $get("error_document_loc").style.display = "inline";
            return;
        }
        if (!validateFiles()) {
            return;
        } else if (Mscrm.CommandBarActions._oneDriveLocationNotCreated.equals(oReturn.locationId)) {


            window.isOneDriveLocationCreated = false;
            Mscrm.CommandBarActions.uploadCreateOneDriveFolder(oReturn);
        } else {
            callbackUpload(oReturn.locationId);
        }
        showProgress();
        return;
    }

    function callbackUpload(locationId) {
        var attachmentForm = $get('Attachments');
        attachmentForm.LocationId.value = locationId;
        attachmentForm.OverwriteExistingFile.value = $get("OverWriteExisting").checked;
        var uploadData = new FormData();
        var files = $get("userFile").files;
        uploadData.append("file", files[0]);
        var elements = attachmentForm.getElementsByTagName("input");
        for (var i = 0; i < elements.length; i++) {
            var name = elements[i].getAttribute("name");
            var value = elements[i].getAttribute("value");
            if (name && value) {
                uploadData.append(name, value);
            }
        }

        var uploadUrl = new Mscrm.CrmUri("<%= crmAttachment.UploadHandlerUrl.ToString() %>");
        uploadUrl.get_query()["ResponseType"] = "xml";
        var isOneDriveLocationCreated = window.isOneDriveLocationCreated;
        <% if (isInternetExplorer)
           { %>

        $.ajax({ type: "HEAD" }).always(function() {
            <% } %>

            var uploadRequest = $.ajax({
                type: "POST",
                url: uploadUrl.toString(),
                data: uploadData,
                processData: false,
                contentType: false
            });
            uploadRequest.always(function() {
                if (uploadRequest.readyState === 4) {
                    var oReturn = new Object();
                    oReturn.locationId = locationId;
                    oReturn.response = getErrorResponse(uploadRequest);
                    oReturn.isOneDriveLocationCreated = isOneDriveLocationCreated;
                    if (uploadRequest.status >= 200 && uploadRequest.status < 300) {

                        oReturn.isErrorResponse = false;
                    } else {
                        oReturn.isErrorResponse = true;
                    }
                    Mscrm.Utilities.setReturnValue(oReturn);
                    closeWindow(true);
                }
            });
            <% if (isInternetExplorer)
               { %>
        });
        <% } %>
        return;
    }

    function getErrorResponse(request) {
        if (request.responseXML) {
            return request.responseXML;
        }
        if (request.responseText) {
            return request.responseText;
        }
        return request.response;
    }

    function OnPickListChange() {
        var documentLocationControl = $get("documentLocations");
        $get('Attachments').LocationId.value = documentLocationControl.value;
    }

    function PageLoad() {

        var userFileControl = $get("userFile");
        userFileControl.tabIndex = 1;

        var documentLocationControl = $get("documentLocations");
        $get('Attachments').IsSPDocument.value = "true";
        $get('userFile').removeAttribute("style");
        $get('userfile_c').removeAttribute("noWrap");
        var Url = Mscrm.CrmUri.create(window.location.href);
        $get('Attachments').LocationId.value = documentLocationControl.value;

        if (window.location.search.indexOf("rg=1") != -1 && window.location.search.indexOf("refreshGrid") == -1) {
            try {
                window.opener.auto($get('crmFormSubmitObjectType').value);
            } catch (e) {
            }
        }
        if (window.location.search.indexOf("cw=True") != -1) {
            if (IsOutlookClient()) {
                window.returnValue = true;
            } else {
                var regObjId = Url.get_query()["pId"];
                Mscrm.CommandBarActions.refreshParentGridSPForUpload(regObjId);
                window.inlineDialogId = Url.get_query()["inlineDialogId"];
                window.isInlined = true;
            }
            if (window.top != null && window.top.opener != null) {
                window.top.opener["UploadSharePointDocumentEnd"] = (new Date).getTime();
            }

            closeWindow();
            return;
        }
    }

    function cancel() {
        closeWindow();
        return;
    }

    function showProgress() {
        $get('tdRefreshDialogBody').style.display = "none";
        $get('tdDialogFooter').style.display = "none";
        $get('showProgress').style.display = "block";
    }

    function validateFiles() {
        var files = $get("userFile").files;
        if (files.length !== 1) {
            alert(LOCID_FILE_DID_NOT_ATTACH);
            return false;
        }
        if (files[0].name.length > 165) {
            alert(LOCID_SP_UPLOAD_NAME_LENGTH);
            return false;
        }
        if (files[0].size > window.maxUploadFileSize) {
            alert("<%= LargeFileLabel %>");
            return false;
        }
        return true;
    }

</script>
</head>
<body style="height: auto">
<frm:HardcodedForm id="crmForm" runat="server">
    <sdk:HiddenInputControl id="objectid" runat="server"/>
    <sdk:HiddenInputControl id="objecttypecode" runat="server"/>
</frm:HardcodedForm>
<div class="ms-crm-RefreshDialog-Header" id="tdRefreshDialogHeader">
    <a href="#" id="btnCross" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Button_Label_Cancel' runat='server'/>">
        <img alt="" src="/_imgs/CloseDialog.png" style="height: 16px; width: 16px;" onclick="if (!Mscrm.Utilities.resetValidationFailedElement()) { cancel();return false; }">
    </a>
    <div class="ms-crm-Dialog-Header-Title" id="tdDialogHeader">
        <loc:text resourceid="DocumentManagement.AddDocument.Title" runat="server"/>
    </div>
</div>
<div class="ms-crm-AttachmentContainer" id="tdRefreshDialogBody">
    <cnt:appattachment id="crmAttachment" isspdocument="true" runat="server"/>
    <div class="AppAttachment_Render_td2">
        <table style="width: 100%; table-layout: fixed;" cellspacing="0" cellpadding="0">
            <colgroup>
                <col width="25%">
                <col width="75%">
            </colgroup>
            <tbody>
            <tr style="height: 7.5px">
            </tr>
            <tr>
                <td>
                </td>
                <td class="ms-crm-uploadCommentsText">
                    <%= LargeFileLabel %>
                </td>
            </tr>
            <tr style="height: 9.5px">
            </tr>
            <tr>
                <td class="mscrm-docmgmt-LeftColumn">
                    <label for="DlgSettingsLabel" class="ms-crm-dlglabel">
                        <loc:Text ResourceId="Odb_DlgSettings_Label_Text" runat="server"/>
                    </label>
                </td>
                <td style="padding-left: 2">
                    <sdk:PicklistControl runat="server" id="documentLocations" onchange="OnPickListChange();"/>
                </td>
            </tr>
            <tr style="height: 7.5px">
            </tr>
            <tr>
                <td>
                </td>
                <td>
                    <input class="checkbox" type="checkbox" name="to" checked="checked" id="OverWriteExisting"/>
                    <label for="OverWriteExisting" class="ms-crm-overwrite">
                        <loc:text resourceid="Web._grid.cmds.dlg_sp_upload.aspx_1" runat="server"/>
                    </label>
                </td>
            </tr>
            <tr>
                <td></td>
                <td >
                    <div style="padding-top: 5px; padding-bottom: 5px">
                        <div id="error_document_loc" style="display: none;" tabindex="0">
                            <table>
                                <tr>
                                    <td style="vertical-align: top;">
                                        <img style="margin-right: 10px" src="/_imgs/tools/Notification_Error_16.png" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Odb_NewUpload_Dlg_Error_Msg_Document_Name' runat='server'/>"/>
                                    </td>
                                    <td>
                                        <div style="color: #D80303">
                                            <loc:text resourceid="Odb_NewUpload_Dlg_Error_Msg_Document_Location" runat="server"/>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</div>
<div class="ms-crm-RefreshDialog-Footer" id="tdDialogFooter">
    <button id="butBegin" onclick="applychanges();" type="button"
            class="ms-crm-RefreshDialog-Button_ok">
        <loc:text resourceid="Button_Label_OK" runat="server"/>
    </button>
    <button id="cmdDialogCancel" onclick="cancel();" type="button"
            class="ms-crm-RefreshDialog-Button_ok ms-crm-RefreshDialog-Button_Cancel" lasttabelement="true">
        <loc:text resourceid="Button_Label_Cancel" runat="server"/>
    </button>
</div>
<div id="showProgress" class="ms-crm-Validation-Progress" style="display: none; width: 100%; top: 45%; position: absolute;">
    <div id="progressInner" style="height: 80%; width: 100%">
        <div style="text-align: center;">
            <img alt="" src="/_imgs/AdvFind/progress.gif"/>
            <br/>
            <loc:Text ResourceId="UploadNotification" runat="server"/>
        </div>
    </div>
</div>
</body>
</html>