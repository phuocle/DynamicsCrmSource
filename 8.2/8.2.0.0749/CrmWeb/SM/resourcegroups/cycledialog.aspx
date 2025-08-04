<%@ Page language="c#" Inherits="Microsoft.Crm.Service.Application.Pages.SM.ResourceGroups.CycleDialogPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script type="text/javascript" language="javascript">
        Sys.Application.add_load(WindowOnLoad);


        function WindowOnLoad() {
            var oArguments = getDialogArguments();
            if (oArguments) {
                var listHtml = "";
                for (var i = 0; i < oArguments.length; i++) {
                    if (i > 0) {
                        listHtml += "<br>";
                    }
                    listHtml += CrmEncodeDecode.CrmHtmlEncode(oArguments[i]);
                }
                $get("cyclelist").innerHTML = listHtml;
            }
        }

        function cancel() {
            closeWindow();
        }


        function applychanges() {
            closeWindow();
        }

    </script>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
    <table width="100%" height="100%" cellspacing="0" cellpadding="0">
        <tr>
            <td>
                <%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(_topText) %>
            </td>
        </tr>
        <tr>
            <td>
                <div id="cyclelist" style="height: 50px; overflow: auto;"></div>
            </td>
        </tr>
        <tr>
            <td>
                <%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(_bottomText) %>
            </td>
        </tr>
    </table>
</frm:DialogForm>
</body>