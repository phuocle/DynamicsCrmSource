<%@ Page Language="c#" Inherits="Microsoft.Crm.Service.Application.Pages.SlaItem.SlaItemPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<!DOCTYPE html>
<html id="HtmlTag" runat="server">
<head>
    <style>
        html, body { overflow: hidden; }

        #descriptionIFrame { height: 99%; }
    </style>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script language="Javascript">
        Sys.Application.add_load(PageLoad);
        var IsActionCtrldirty = false;

        function PageLoad() {
            var crmFormCtrl = $find("crmForm");
            crmFormCtrl.add_onSave(save);
            attachWindowOnBeforeUnload(formClose);
        }

        function formClose(oEvent) {
            oEvent = oEvent.rawEvent;
            var conditionBuilder1 = $find("appConditionBuilder1");
            var conditionBuilder2 = $find("appConditionBuilder2");
            if (conditionBuilder1.get_isDirty() || conditionBuilder2.get_isDirty()) {
                oEvent.returnValue = LOCID_FORMS_SAVE_CONFIRM_TITLE;
            }
            if (slatype && IsActionCtrldirty) {
                CopyWorkflowStep(Clone["CtrlSuccess"], "ConditionBranchStep13");
            }
            if (Mscrm.Utilities.isFirefox() && initialXml != null) {
                Mscrm.Utilities.setReturnValue(initialXml);
            }
        }

        function save(oEvent) {
            if (Xrm.Page.ui.getFormType() == 3) {
                oEvent.preventDefault();
            } else {
                if (slatype && IsActionCtrldirty) {
                    CopyWorkflowStep(Clone["CtrlSuccess"], "ConditionBranchStep13");
                }
                detachWindowOnBeforeUnload(formClose);
            }
        }

    </script>
</head>
<body scroll="no">
<ui:EventManager runat="server" id="crmEventManager"></ui:EventManager>
<div id="dummyDiv" class="ms-crm-IE7-Height-Fix-Dummy-Container">
    <div id="FormCell" runat="server" style="width: 100%; height: 100%; position: absolute; top: 0px; bottom: 0px;"></div>
</div>
<cnt:AppFooter id="crmFooter" runat="server"/>
<div id="controlHeaderContainer" style="display: none"></div>
</body>
</html>