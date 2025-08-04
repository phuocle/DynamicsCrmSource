<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.Solution.SolutionImportFileUploadPage" %>

<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
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
</head>
<body class="ms-crm-solution-wizard" scroll="no" onkeypress="if ((new Sys.UI.DomEvent(event)).keyCode == 27) { return closeWindow(); }">
<div id="progressDiv" align="center" class="ms-crm-section" style="display: none; width: 100%; height: 100%" scrolling="no">
    <table height='100%' width='100%' style='cursor: wait'>
        <tr>
            <td valign='middle' align='center'>
                <img alt='' src='/_imgs/AdvFind/progress.gif'/>
                <br>
                <%  = Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(CurrentResourceManager.GetString("SIW_MSG_FileUpload_Progress")) %>
            </td>
        </tr>
    </table>
</div>

<div id="controlDiv" class="ms-crm-section">
    <div class="ms-crm-layouttable" style="padding-left: 6%; padding-right: 6%; width: 87%">
        <div style="padding-bottom: 5px" class="ms-crm-WizardForm-Description">
            <label for="uploadFileName">
                <loc:Text ResourceId='Info.SolutionImport.Upload.File.Text' runat='server'/>
            </label>
        </div>
        <div valign="top">
            <form id="uploadFileform" name='uploadFileform' enctype='multipart/form-data' method='post' action='SolutionImportProcess.aspx'
                  target="processFileFrame">
                <input id='uploadFileName' type='file' title="" name='uploadFileName' class="ms-crm-File-Upload" onkeypress="if ((new Sys.UI.DomEvent(event)).keyCode == 13) { return false; }"/>
                <input type="hidden" name="action" id="action" value=""/>
                <input type="hidden" name="publishWorkflow" id="publishWorkflow" value="0"/>
                <input type="hidden" name="importAsHolding" id="importAsHolding" value="0"/>
                <input type="hidden" name="overwriteSolution" id="overwriteSolution" value="0"/>
                <input type="hidden" name="unmanagedRootsDetected" id="unmanagedRootsDetected" value="0"/>
                <input type="hidden" name="importJobId" id="importJobId" value=""/>
                <input type="hidden" name="skipProductUpdateDependencies" id="skipProductUpdateDependencies" value="false"/>
                <% = CurrentWrpcContext.GetWrpcTokenAsHiddenInputString(Microsoft.Crm.Application.Utility.CrmUri.Create("/Tools/Solution/import/SolutionImportProcess.aspx", Microsoft.Crm.Application.Security.UserInformation.Current)) %>
            </form>
        </div>
    </div>
</div>
</body>
</html>