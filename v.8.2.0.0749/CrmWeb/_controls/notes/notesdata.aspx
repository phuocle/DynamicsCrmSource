<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Controls.NotesData.NotesDataPage"%>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<!DOCTYPE html>
<html>
<head>

    <cnt:AppHeader id="crmHeader" runat="server"/>

    <script type="text/javascript">
        Sys.Application.add_load(function() {
            var editNodeElement = $get("editNode");
            if (!IsNull(editNodeElement)) {
                editNodeElement.focus();
                Mscrm.Utilities.click(editNodeElement);
            }


        });


    </script>
</head>
<body class="NotesData">
<cnt:NotesDataControl ID="NotesTable" runat="server"/>
</body>
</html>