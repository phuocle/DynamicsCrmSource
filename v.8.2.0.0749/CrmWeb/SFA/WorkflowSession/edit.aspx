<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Web.Pages.WorkflowSessionPage" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script language="JavaScript" type="text/javascript">
        Sys.Application.add_load(function() {

            _UI_TEXT_SELECTABLE = "1";
            HandleCommentsIE7();
        });

        function HandleCommentsIE7() {
            var useragent = window.navigator.userAgent;

            if (useragent.indexOf("MSIE 7.0") > -1) {
                var commentsTextarea = $get("comments");
                if (!IsNull(commentsTextarea)) {
                    var parent = commentsTextarea.parentNode;
                    if (!IsNull(parent)) {
                        commentsTextarea.className += " ms-crm-Comments-Texarea";
                        parent.className += " ms-crm-Comments-Texarea-Container";
                    }
                }
            }
        }

        function refreshWorkflow(workflowId) {
            var command = new RemoteCommand("Workflow", "RefreshWorkflow");
            command.SetParameter("entityId", workflowId);
            command.SetParameter("sessionId", $get('crmFormSubmit').crmFormSubmitId.value);
            command.SetParameter("isUIScript", true);
            var oResult = command.Execute();

            if (oResult.Success) {
                var elContainer = window.document.getElementById("gridDefinitionContainer");
                var elContainerFirstChild = XUI.Html.DomUtils.GetFirstChild(elContainer);
                elContainer.removeChild(elContainerFirstChild);
                elContainer.innerHTML = oResult.ReturnValue;
            }
        }

        function setInputArgument(oid, entityId) {
            var oDialogArgs = new Object();
            oDialogArgs.Xml = "";
            var oUrl = Mscrm.CrmUri.create("/SFA/workflow/mapChildArguments.aspx");
            oUrl.get_query()["workflowId"] = entityId;
            oUrl.get_query()["activityname"] = oid;
            oUrl.get_query()["readonlymode"] = true;
            openStdDlg(oUrl, oDialogArgs, 850, 600);
        }

        function setAssignVariable(oid, entityId) {
            var oDialogArgs = new Object();
            oDialogArgs.Xml = "";
            var oUrl = Mscrm.CrmUri.create("/SFA/workflow/assignValue.aspx");
            oUrl.get_query()["EntityId"] = entityId;
            oUrl.get_query()["StepId"] = oid;
            oUrl.get_query()["readonlymode"] = true;
            var dialogOptions = new Xrm.DialogOptions();
            dialogOptions
                .height =
                <%= Convert.ToInt32(CurrentResourceManager.GetString("SFA/workflow/assignValue.aspx_WINDOW_HEIGHT"), System.Globalization.CultureInfo.InvariantCulture) %>;
            dialogOptions
                .width =
                <%= Convert.ToInt32(CurrentResourceManager.GetString("SFA/workflow/assignValue.aspx_WINDOW_WIDTH"), System.Globalization.CultureInfo.InvariantCulture) %>;
            Xrm.Internal.openDialog(oUrl.toString(), dialogOptions, oDialogArgs, null, null);
        }

        function ConfigureQuery(entityId, stepId) {
            var oDialogArgs = new Object();
            oDialogArgs.Xml = "";
            var oUrl = Mscrm.CrmUri.create("/SFA/workflow/fetchquery.aspx");
            oUrl.get_query()["EntityId"] = entityId;
            oUrl.get_query()["StepId"] = stepId;
            oUrl.get_query()["readonlymode"] = true;
            openStdDlg(oUrl,
                oDialogArgs,
                <%= Convert.ToInt32(CurrentResourceManager.GetString("SFA/workflow/FetchQuery.aspx_WINDOW_WIDTH"), System.Globalization.CultureInfo.InvariantCulture) %>,
                <%= Convert.ToInt32(CurrentResourceManager.GetString("SFA/workflow/FetchQuery.aspx_WINDOW_HEIGHT"), System.Globalization.CultureInfo.InvariantCulture) %>);
        }

        function setPromptResponse(oid, entityId, readOnlyMode) {
            var oDialogArgs = new Object();
            oDialogArgs.Xml = "";
            var oUrl = Mscrm.CrmUri.create("/SFA/workflow/PromptResponse.aspx");
            oUrl.get_query()["EntityId"] = entityId;
            oUrl.get_query()["StepId"] = oid;
            oUrl.get_query()["readonlymode"] = true;

            if (readOnlyMode == "false") {
                oUrl.get_query()["StepDescription"] = CrmEncodeDecode
                    .CrmUrlEncode(Mscrm.FormControlInputBehavior.GetBehavior(oid + "_wfdescwfc").get_dataValue());
            } else {
                oUrl.get_query()["StepDescription"] = CrmEncodeDecode
                    .CrmUrlEncode(XUI.Html.GetText($get(oid + "_wfdescwfc")));
            }
            openStdDlg(oUrl,
                oDialogArgs,
                <%= Convert.ToInt32(CurrentResourceManager.GetString("SFA/workflow/PromptResponse.aspx_WINDOW_WIDTH"), System.Globalization.CultureInfo.InvariantCulture) %>,
                <%= Convert.ToInt32(CurrentResourceManager.GetString("SFA/workflow/PromptResponse.aspx_WINDOW_HEIGHT"), System.Globalization.CultureInfo.InvariantCulture) %>);
        }

    </script>
    <style>
        .ms-crm-Form-Nav-Container {
            padding-top: 4px;
            width: <%= AppResourceManager.Default.GetString("DetailForm_Left_Navigation_Width") + "px" %>;
        }

        .ms-crm-NRForm-Main-Container {
            <% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
               { %>
            right: <%= AppResourceManager.Default.GetString("DetailForm_Left_Navigation_Width") + "px" %>;
            <% }
               else
               { %>
            left: <%= AppResourceManager.Default.GetString("DetailForm_Left_Navigation_Width") + "px" %>;
            <% } %>
        }

        .ms-crm-IE7-td-Texarea-Container {
            position: static;
            top: auto;
            bottom: auto;
            left: auto;
            right: auto;
        }

        .ms-crm-IE7-Texarea {
            position: static;
            top: auto;
            bottom: auto;
            left: auto;
            right: auto;
        }

        .ms-crm-Comments-Texarea {
            position: absolute;
            top: 0px;
            bottom: 0px;
            left: 0px;
            right: 0px;
        }

        .ms-crm-Comments-Texarea-Container {
            position: absolute;
            top: 3px;
            bottom: 2px;
            <% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
               { %>
            left: 2px;
            right: 3px;
            <% }
               else
               { %>
            left: 3px;
            right: 2px;
            <% } %>
        }
    </style>
</head>
<body>
<div class="ms-crm-Form-Layout">
    <div style="height: 98px">
        <div>
            <mnu:AppFormMenuBar id="crmMenuBar" runat="server"/>
        </div>
    </div>
    <div class="ms-crm-NRForm-Background">
        <div class="ms-crm-Form-Nav-Container">
            <cnt:AppNavigationBar id="crmNavBar" runat="server"/>
        </div>
        <div id="tdAreas" class="ms-crm-NRForm-Main-Container">
            <div class="ms-crm-IE7-Height-Fix-Dummy-Container">
                <div id="areaForm">
                    <frm:CrudForm id="crmForm" runat="server"/>
                </div>
            </div>
        </div>
    </div>
    <div class="ms-crm-FSBContainer ms-crm-Form-StatusBar">
        <sdk:RenderStatusControl id="crmRenderStatus" runat="server"/>
    </div>
</div>
</body>
</html>