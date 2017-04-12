<%@ Page Language="c#" Inherits="Microsoft.Crm.Application.Pages.Tools.Solution.ComponentOrder" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Globalization"%>
<%@ Import Namespace="Microsoft.Crm"%>
<%@ Import Namespace="System.Web" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<!DOCTYPE html>
<html>
<head>

    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script type="text/javascript" language="javascript">
        var componentsOrder_listEditComponent;

        function OnLoad() {
            componentsOrder_listEditComponent = $find('componentsOrder');
            Mscrm.ComponentOrder.onLoadOrderPage(componentsOrder_listEditComponent.get_xmlData());
        }

        function applychanges() {
            var returnValue = Mscrm.ComponentOrder.onOkPress(componentsOrder_listEditComponent.get_xmlData());
            Mscrm.Utilities.setReturnValue(returnValue);
            closeWindow();
        }

        function cancel() {
            closeWindow();
        }

        function addValueInFormControl(name, id) {
            formsOrder_listEditComponent.addValue(name, id);
        }

        Sys.Application.add_load(OnLoad);
    </script>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
    <div style="margin-top: 5px;">
        <cnt:FormsOrderList id="componentsOrder" runat="server"/>
    </div>
</frm:DialogForm>
</body>
</html>