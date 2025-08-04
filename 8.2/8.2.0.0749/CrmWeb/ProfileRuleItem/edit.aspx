<%@ Page Language="c#" Inherits="Microsoft.Crm.Service.Application.Pages.ProfileRuleItem.ProfileRuleItemPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>

<!DOCTYPE html>
<html id="HtmlTag" runat="server">
<head>

    <style type="text/css">

        html, body { overflow: hidden; }

        #descriptionIFrame { height: 99%; }

    </style>

    <cnt:AppHeader id="crmHeader" runat="server"/>

    <script language="Javascript">
        Sys.Application.add_load(PageLoad);

        function PageLoad() {
            var crmFormCtrl = $find("crmForm");
            crmFormCtrl.add_onSave(save);
            attachWindowOnBeforeUnload(formClose);
        }

        function formClose(oEvent) {
            oEvent = oEvent.rawEvent;
            var conditionBuilder = $find("appConditionBuilder");
            if (conditionBuilder.get_isDirty()) {
                oEvent.returnValue = LOCID_FORMS_SAVE_CONFIRM_TITLE;
            }
            if (Mscrm.Utilities.isFirefox() && initialXml != null) {
                Mscrm.Utilities.setReturnValue(initialXml);
            }
        }

        function save() {
            if (Xrm.Page.ui.getFormType() == 3) {
                window.event.returnValue = false;
                args.preventDefault();
            } else {
                var conditionBuilder = $find("appConditionBuilder");
                if (conditionBuilder.ParseXml()) {
                    Mscrm.Utilities.setReturnValue(conditionBuilder.GetXml());
                    detachWindowOnBeforeUnload(formClose);
                }
                if (!IsNull(window.event)) {
                    window.event.returnValue = false;
                }
            }
        }


        Mscrm.Form_onload = function() {
            var conditionXml = document.getElementById("ConditionXml").value;
            if (conditionXml) conditionXml = conditionXml.replace(/dataslugs=""/g, "");
            $find("appConditionBuilder").LoadXml(conditionXml);
        }

        Mscrm.Form_onsave = function(event) {

            var conditionBuilder = $find("appConditionBuilder");
            if (!conditionBuilder.ParseXml()) {
                event.getEventArgs().preventDefault();
                event.getEventArgs().stopPropagation();
            }

            var conditionXml = $find("appConditionBuilder").GetXml();
            Xrm.Page.getAttribute("conditionxml").setValue(conditionXml);
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