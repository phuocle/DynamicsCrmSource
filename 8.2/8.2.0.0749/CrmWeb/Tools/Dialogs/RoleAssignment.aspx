<!DOCTYPE html>

<%@ Page Language="c#" Inherits="Microsoft.Crm.Application.Pages.Tools.Solution.RoleAssignment" %>

<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<html>
<cnt:AppHeader runat="server" id="crmHeader"/>
<script type="text/javascript" language="javascript">

    Sys.Application.add_load(OnLoad);

    function OnLoad() {
        Mscrm.RoleAssignment.onLoadDialog();
    }

    function handleView(o) {

        var crmGrid = $find("crmGrid");
        crmGrid.SetParameter("oId", o.value);
        crmGrid.Refresh();
    }

    function applychanges() {
        Mscrm.Utilities.setReturnValue(Mscrm.RoleAssignment.onOkPress());
        closeWindow();
    }

    function cancel() {
        closeWindow();
    }

</script>
<body>
<pre id="preDisplayConditionsXml" style="display: none;"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(displayConditionsXml.ToString()) %></pre>
<pre id="preObjectId" style="display: none;"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(objectId.ToString()) %></pre>
<pre id="preEntityName" style="display: none;"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(entityName.ToString()) %></pre>
<frm:DialogForm id="crmForm" runat="server">
    <div style="height: 50px; top: -7px; position: absolute; width: 100%;">
        <table cellpadding="0" cellspacing="0" height="100%" width="100%" style="table-layout: fixed;">
            <col style="width: 5%"/><col style="width: 44%"/><col style="width: 50%"/>
            <tr style="height: 25px">
                <td>
                    <input name="enableVisibility" id="visibleToEveryone" type="radio" onclick="Mscrm.RoleAssignment.onClickVisibleToEveryone();" class="radio">
                </td>
                <td colspan="2">
                    <label for="visibleToEveryone">
                        <loc:Text ResourceId="Dlg_ProcessForm_Role_Assignment_DisplayToEveryOne" runat="server"/>
                    </label>
                </td>
            </tr>
            <tr style="height: 25px">
                <td>
                    <input name="enableVisibility" id="visibleToSelectedRoles" type="radio" onclick="Mscrm.RoleAssignment.onClickVisibleToSelectedRoles();" class="radio">
                </td>
                <td>
                    <label for="visibleToSelectedRoles">
                        <loc:Text ResourceId="Dlg_ProcessForm_Role_Assignment_DisplayToSelectedRoles" runat="server"/>
                    </label>
                </td>
                <td>
                    <table class="stdTable" cellpadding="0" cellspacing="0" id="filterSection" style="display: none">
                        <tr>
                            <td class="home_role_td_SelBusinessUnit">
                                <label for="selBusinessUnit">
                                    <span class="ms-crm-Bold-Header">
                                        <loc:Text ResourceId="Web.Tools.business.home_role.aspx_74" runat="server"/>
                                    </span>
                                </label>
                            </td>
                            <td style="width: 55%">
                                <ui:Select id="selBusinessUnit" runat="server" onchange="handleView(this);"/>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </div>
    <div style="position: absolute; top: 50px; bottom: 80px; width: 100%">
        <![if IE 7]>
            <div class="ms-crm-IE7-Height-Fix-Dummy-Container">
        <![endif]>
        <cnt:AppGrid runat="server" id="crmGrid" IsGridFilteringEnabled="false"/>
        <![if IE 7]>
            </div>
        <![endif]>
    </div>


</frm:DialogForm>
</body>
</html>