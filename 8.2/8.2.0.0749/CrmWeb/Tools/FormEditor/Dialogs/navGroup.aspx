<%@ Page Language="c#" Inherits="Microsoft.Crm.Application.Pages.Tools.FormEditor.Dialogs.NavigationGroup" %>
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
    <script type="text/javascript" language="javascript">
        var _name = "";
        Sys.Application.add_load(OnLoad);

        function OnLoad() {
            var oArgs = getDialogArguments();
            Mscrm.FormControlInputBehavior.GetBehavior("groupName").set_dataValue(oArgs.displayName);
        }

        function applychanges() {
            var groupNameCtrl = Mscrm.FormControlInputBehavior.GetBehavior("groupName");
            var groupNameValue = groupNameCtrl.get_dataValue();
            if (isNullOrEmptyString(groupNameValue)) {
                alert(LOCID_GROUP_NAME_REQUIRED);
                groupNameCtrl.setFocus();
                return;
            }
            Mscrm.Utilities.setReturnValue(new Mscrm.NavigationGroup(groupNameValue));
            closeWindow();
        }

        function cancel() {
            closeWindow();
        }
    </script>
</head>
<body>

<frm:DialogForm id="crmForm" runat="server">
    <div style="height: 100%; width: 100%; position: relative;">
        <div style="height: 42%; width: 100%"></div>
        <div style="width: 100%">

            <span style="display: inline-block; width: 20%">
                <label id="groupNameLabel" for="groupName">
                    <loc:Text ResourceId="Dlg_Update_Nav_Link_Name" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
                </label>
            </span>
            <span style="display: inline-block; width: 75%">
                <ui:TextBox id="groupName" MaxLength="255" runat="server"/>
            </span>
        </div>
    </div>
</frm:DialogForm>
</body>
</html>