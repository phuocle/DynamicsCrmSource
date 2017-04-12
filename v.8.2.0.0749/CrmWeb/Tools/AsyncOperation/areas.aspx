<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Web.Pages.AsyncOperationAreas" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="System.Globalization" %>

<cnt:AppHeader runat="server" id="crmHeader">
    <script language="javascript">
        function FilterLog(filterObj) {
            var crmGrid = $find("crmGrid");
            crmGrid.SetParameter("FilterListId", filterObj.Value);
            crmGrid.Refresh();
        }

    </script>
</cnt:AppHeader>