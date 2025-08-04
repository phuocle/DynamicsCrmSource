<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Sfa.AssignActivityPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Controls" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Web.Sfa" Assembly="Microsoft.Crm.Application.Pages" %>

<html xmlns:Crm>
<head>
    <title>
        <loc:Text ResourceId="Web.SFA.Workflow.AssignActivityForm.Title" runat="server"/>
    </title>
    <cnt:AppHeader id="crmHeader" runat="server"/>

    <script type="text/javascript">

        Sys.Application.add_load(PageLoad);

        function PageLoad() {
            var crmForm = $get("crmForm");
            crmForm.style.height = '100%';
            var crmFormCtrl = $find("crmForm");
            crmFormCtrl.detachCloseAlert();
            crmFormCtrl.add_onSave(saveAndClose);
            attachWindowOnBeforeUnload(OnClose);
            attachWindowOnUnload(OnPageUnload);
            var activityName = GetValueForTag("activityname=");
            var workflowId = GetValueForTag("workflowId=");
            var readOnlyForm = GetValueForTag('readonlymode=');
            if (readOnlyForm == 'true') {
                SetReadOnlyForm(true);
            }

            GenerateAttributeTypeMapping("workflow", null, null, true);
            AddAttributeTypeMapping("ParameterValue0", "Owner");
            $addHandler($get('ParameterValue0'), "focus", OnAttributeFocus);
            $addHandler($get('ShowHideImage'), "click", ToggleGridWidth);
            $addHandler(document, 'keydown', OnKeyDown);

            PopulateSlugControls(CrmEncodeDecode.CrmXmlDecode($get("hidSlugInfo").value));
        }


        function ToggleGridWidth() {
            var gridContainer = $get("gridContainer");
            if (LOCID_UI_DIR === "RTL")
                if (gridContainer.style.left == "208px" || gridContainer.style.left == "")
                    gridContainer.style.left = "27px";
                else
                    gridContainer.style.left = "208px";
            else if (gridContainer.style.right == "208px" || gridContainer.style.right == "")
                gridContainer.style.right = "27px";
            else
                gridContainer.style.right = "208px";
        }

        function saveAndClose(rawEvent) {

            var e = new Sys.UI.DomEvent(rawEvent);
            e.preventDefault();

            $find("crmForm").set_bypassValidation(true);
            SaveAndCloseCustomStepConfiguration();
        }

        function OnClose(oEvent) {
            oEvent = oEvent.rawEvent;

            if ($find("crmForm").get_bypassValidation() || CheckParameters()) {
                return;
            }

            oEvent.returnValue = LOCID_FORMS_SAVE_CONFIRM_TITLE;
            return LOCID_FORMS_SAVE_CONFIRM_TITLE;
        }

        function OnPageUnload() {
            $removeHandler(document, 'keydown', OnKeyDown);
            $removeHandler($get('ShowHideImage'), "click", ToggleGridWidth);
            $removeHandler($get('ParameterValue0'), "focus", OnAttributeFocus);
        }

        function OnKeyDown(eventObj) {
            if (eventObj.keyCode == KEY_F) {
                if (eventObj.ctrlKey && eventObj.shiftKey) {
                    ToggleGridWidth();
                }
            }
        }

    </script>
    <style>
        .gridContainer {
            position: absolute;
            top: 104px;
            bottom: 0px;
            <% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
               { %>
            right: 0px;
            left: 208px;
            <% }
               else
               { %>
            left: 0px;
            right: 208px;
            <% } %>
        }

        .ms-crm-Form-Area {
            position: absolute;

            top: 104px;
            <% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
               { %>
            left: 0px;
            <% }
               else
               { %>
            right: 0px;
            <% } %>
        }

    </style>
</head>
<body>
<div class="ms-crm-Form-Layout">
    <div >
        <!--[if IE 7]>
            <div id="dummyDivIE7" class="ms-crm-IE7-Height-Fix-Dummy-Container">
        <![endif]-->
        <mnu:AppGenericMenuBar id="crmMenuBar" runat="server"/>
        <!--[if IE 7]>
            </div>
        <![endif]-->
    </div>
    <div class="ms-crm-Form-Background" id="tdAreas">
        <div id="areaForm">
            <div id="gridContainer" class="gridContainer">
                <div id="dummyDiv" class="ms-crm-IE7-Height-Fix-Dummy-Container">
                    <cnt:AppGrid id="crmGrid" runat="server" name="crmGrid" supressfetch="true"/>
                </div>
            </div>
            <div class="ms-crm-Form-Area" id="formContainer" style="top: 104px;">
                <frm:AssignActivityForm id="crmForm" runat="server">
                </frm:AssignActivityForm>
            </div>
        </div>
    </div>
</div>
<input type="hidden" id="hidSlugInfo" value="<%= SlugInfo %>"/>
</body>

</html>