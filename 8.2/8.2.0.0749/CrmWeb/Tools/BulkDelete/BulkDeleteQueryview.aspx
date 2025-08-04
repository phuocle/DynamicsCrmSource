<!DOCTYPE html>
<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.BulkDelete.BulkDeleteQueryView" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Sdk" %>

<html xmlns:Crm>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script language="javascript">

        Sys.Application.add_load(BulkDeleteQueryviewOnLoad);

        function BulkDeleteQueryviewOnLoad() {

            var advFind = $find("advFind");
            if (IsNull(advFind)) {
                return;
            }


            if (!IsNull(parent.document.getElementById("fetchXmlData"))) {
                advFind.set_fetchXml(parent.document.getElementById("fetchXmlData").value);
            }


            if (!IsNull(document.getElementById("SimpleToolBar"))) {
                document.getElementById("SimpleToolBar").style.display = "inline";
                document.getElementById("SimpleToolBar").style.height = "0px";
            }
            if (!IsNull(document.getElementById("spnDetailed"))) {
                document.getElementById("spnDetailed").style.border = "0px";
            }
            if (!IsNull(document.getElementById("spnDetailed"))) {
                var inlineMsgSpan = document.getElementById("spnInlineMsg");
                if ("undefined" != typeof(inlineMsgSpan) && "unknown" != typeof(inlineMsgSpan) && null != inlineMsgSpan
                ) {
                    inlineMsgSpan.style.border = "0px";
                }
            }
        }

    </script>
</head>
<body style="background-color: #eaf3ff;">
<cnt:AppAdvancedFind id="advFind" TitleVisible=false IncludeAPIQuery=false DisableValueControlInSimpleMode=true runat="Server"/>
</body>
</html>