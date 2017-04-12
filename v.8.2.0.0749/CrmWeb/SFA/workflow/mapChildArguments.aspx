<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Sfa.MapChildArgumentsPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Controls" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Web.Sfa" Assembly="Microsoft.Crm.Application.Pages" %>
<!DOCTYPE html>
<html xmlns:Crm>
<head>
    <title>
        <loc:Text ResourceId="Web.SFA.Workflow.ArgumentMappingDialog.Title" runat="server"/>
    </title>
    <cnt:AppHeader id="crmHeader" runat="server"/>

    <script type="text/javascript">

        Sys.Application.add_load(PageLoad);

        function PageLoad() {
            $get('crmForm').style.height = '100%';
            var crmFormCtrl = $find("crmForm");
            crmFormCtrl.detachCloseAlert();
            crmFormCtrl.add_onSave(saveAndClose);
            attachWindowOnBeforeUnload(OnClose);

            var activityName = GetValueForTag("activityname=");
            var workflowId = GetValueForTag("workflowId=");
            var readOnlyForm = GetValueForTag('readonlymode=');
            if (readOnlyForm == 'true') {
                SetReadOnlyForm(true);
            }

            GenerateChildInteractiveWorkflowActivityTypeMapping(workflowId, activityName);

            PopulateSlugControls($get("hidSlugInfo").value);
        }

        function saveAndClose(sender, args) {
            SaveAndCloseCustomStepConfiguration();

            $find("crmForm").set_bypassValidation(true);

            if (!IsNull(args)) {
                args.preventDefault();
            } else if (!IsNull(sender)) {
                var e = new Sys.UI.DomEvent(sender);
                e.preventDefault();
            }
        }

        function OnClose(oEvent) {
            oEvent = oEvent.rawEvent;

            if ($find("crmForm").get_bypassValidation() || CheckParameters()) {
                return;
            }

            oEvent.returnValue = LOCID_FORMS_SAVE_CONFIRM_TITLE;
            return LOCID_FORMS_SAVE_CONFIRM_TITLE;
        }

    </script>
</head>
<body>
<div style="padding-bottom: 5px">
    <mnu:appgenericmenubar id="crmMenuBar" runat="server"/>
</div>


<div id="areaForm" style="position: absolute; width: 100%; top: 108px; bottom: 25px;" class="ms-crm-FormAndRIContainer">
    <div class="ms-crm-FormBodyContainer ms-crm-FormBodyRIExpanded" id="formBodyContainer">
        <div class="ms-crm-IE7-Height-Fix-Dummy-Container">
            <cnt:AppGrid id="crmGrid" runat="server" name="crmGrid" supressfetch="true"/>
        </div>
    </div>
    <div id="tdRelatedInformationPane" class="RelatedInformationPaneContainer RelatedInformationPaneExpandedContainer">
        <frm:AssignActivityForm id="crmForm" runat="server">
        </frm:AssignActivityForm>
    </div>
</div>
<input type="hidden" id="hidSlugInfo" value="<%= SlugInfo %>"/>
</body>
</html>