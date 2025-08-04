<%@ Page Language="c#" Inherits="Microsoft.Crm.Application.Pages.EmailRouterMigration.MigrationFileHandlerPage" %>

<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Globalization" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Application.Types" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<!DOCTYPE html>
<html xmlns:crm>
<head>
    <cnt:appheader id="crmHeader" runat="server"/>
    <script language="Javascript" type="text/javascript">

        $addHandler(window, "load", PageOnLoad);

        function PageOnLoad() {
            if ("<% = hasError %>" == "True") {

                if (<% = Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(errorCode) %> == "0x8005F032") {
                    openErrorDlg(<% = Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(errorCode) %>,
                        <% = Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(errorMessage) %>);
                } else {
                    if (<% = Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(errorMessage) %> != "") {
                        alert(<% = Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(errorMessage) %>);
                    } else {
                        $get("errorFrame").src = Mscrm.CrmUri
                            .create("/_common/error/popuperror.aspx?hr=" +
                                <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(Microsoft.Crm.CrmEncodeDecode.CrmUrlEncode(errorCode)) %>).toString();
                    }
                }
                window.parent.OnMigrationFileProcessFailure();
            } else if ("<% = hasError %>" == "False") {
                var ele = window.parent.document.getElementById("progressDiv");
                ele.style.display = "none";
                window.parent
                    .SuccessCallBack(<%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(serverProfilesXml) %>,
                        <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(userMappingXml) %>,
                        <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(forwardMailboxXml) %>);
            }
        }

    </script>
</head>

<body scroll="no" class="ms-crm-WizardForm-Main">
<div id="controlDiv" style="position: absolute; top: 0px; bottom: 0px; width: 100%">
    <form id="processFileform" name='processFileform' enctype='multipart/form-data' method='post'
          action='MigrationFileHandler.aspx?action=fileProcess' style="padding: 6px;">
        <div class="mscrm-iw-BorderedDivBlueBackground">
            <span class="mscrm-iw-PageWidth" id="spanForRouter1" runat="server">
                <b><%= CurrentResourceManager.GetString("MigrationWizard.ProcessFilePage.EmailRouterNumberMessage", Microsoft.Crm.Application.Security.UserInformation.Current, 1) %></b>
            </span>
            <br/>
            <br/>
            <input id='File1' type='file' name='processFileName' class="mscrm-iw-PageWidth"/>
            <input id='File2' type='file' name='processFileName' class="mscrm-iw-PageWidth"/>
            <input id='File3' type='file' name='processFileName' class="mscrm-iw-PageWidth"/>
        </div>
        <% = CurrentWrpcContext.GetWrpcTokenAsHiddenInputString(Microsoft.Crm.Application.Utility.CrmUri.Create("/Tools/EmailRouterMigrationWizard/MigrationFileHandler.aspx", Microsoft.Crm.Application.Security.UserInformation.Current)) %>
    </form>
    <div class="mscrm-iw-addButtonDivStyle">
        <ui:Button ID="addMoreRouterButton" OnClick="window.parent.AddInputControlsForMigration();" runat="server"></ui:Button>
    </div>
    <iframe id="errorFrame" name="errorFrame" src="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.Application.Utility.CrmUri.Create("/_static/blank.htm", Microsoft.Crm.Application.Security.UserInformation.Current).ToString()) %>" width="0%" height="0%" scrolling="no" frameborder="0">
    </iframe>
</div>
</body>

</html>