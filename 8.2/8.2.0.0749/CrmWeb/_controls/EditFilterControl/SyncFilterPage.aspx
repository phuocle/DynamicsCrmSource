<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Controls.EditFilterControl.SyncFilterPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ register tagprefix="frm" namespace="Microsoft.Crm.Application.Forms" assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Sdk" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="System.Web" %>

<!DOCTYPE html>
<html xmlns:Crm>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>

    <script language="javascript">


        Sys.Application.add_load(SyncFilterPageOnLoad);

        function SyncFilterPageOnLoad() {
            var advFind = $find("advFind");
            var arguments = getDialogArguments();
            if (!IsNull(arguments)) {

                if (!isNullOrEmptyString(arguments)) {
                    advFind.Clear();
                    advFind.set_fetchXml(CrmEncodeDecode.CrmXmlDecode(arguments));
                }
            }
        }

        <%

            if (!advFind.Disabled)
            { %>

        function switchTo(sMode) {
            var advancedFind = document.getElementById("advancedFind");
            var searchResults = document.getElementById("searchResults");

            if (sMode == "AF") {
                advancedFind.style.display = "inline";
                searchResults.style.display = "none";
            } else {
                advancedFind.style.display = "none";
                searchResults.style.display = "inline";
            }
        }
        <% } %>

        function cancel() {
            closeWindow(true);
        }

        function GetQuerystringRequiredFieldValue() {

            var nameValue =
                <%= "\"" + CrmEncodeDecode.CrmJavaScriptEncodeNoQuotes(Request.QueryString["requiredFields"].ToString()) + "\"" %>;
            nameValue = decodeURIComponent(nameValue);

            if (isNullOrEmptyString(nameValue)) {
                return;
            } else {

                return nameValue.split(",");
            }
        }

        function ValidateFetchXmlForRequiredFields(conditionNodes) {

            var requiredFields = GetQuerystringRequiredFieldValue();
            if (IsNull(requiredFields)) {

                return true;
            }

            var fetchIsValid = false;
            var fields, requiredField, verfiedFields = 0;
            var conditionNode, conditions;
            fieldsloop:
                for (fields = 0; fields < requiredFields.length; fields++) {
                    requiredField = requiredFields[fields];
                    conditionloop:
                        for (conditions = 0; conditions < conditionNodes.length; conditions++) {
                            conditionNode = conditionNodes[conditions];
                            if (conditionNode.attributes.getNamedItem("attribute").value.toLowerCase() ===
                                requiredField.toLowerCase()) {

                                verfiedFields = verfiedFields + 1;
                                break fieldsloop;
                            }
                        }
                }
            if (verfiedFields >= 1)
                fetchIsValid = true;

            return fetchIsValid;
        }

        function applychanges() {
            var advFind = $find("advFind");


            if (!IsNull(advFind)) {
                var sFetchXml = advFind.get_fetchXml();


                if (isNullOrEmptyString(sFetchXml)) {
                    return;
                }

                var fetchXmlDom = XUI.Xml.LoadXml(sFetchXml);
                if (IsNull(XUI.Xml.GetParserError(fetchXmlDom))) {
                    var conditionNodes = XUI.Xml.SelectNodes(fetchXmlDom, "//condition", null);
                    if (IsNull(conditionNodes)) {
                        if (!window.confirm(LOCID_AF_CRITERIANOTDEFINED)) {
                            return;
                        }
                    } else {
                        var isfetchValid = ValidateFetchXmlForRequiredFields(conditionNodes);
                        if (isfetchValid === true)
                            Mscrm.Utilities.setReturnValue(sFetchXml);
                        else {
                            alert(LOCID_SELECT_A_DURATION);
                            return;
                        }
                    }
                }
            }

            closeWindow(true);
        }
    </script>

</head>
<body style="background-color: #ffffff; overflow: hidden;">
<frm:DialogForm id="crmForm" runat="server" method>
    <form id='searchCriteriaForm' name='searchCriteriaForm' enctype='multipart/form-data' method='post' action='SyncFilterPage.aspx'>
        <input type="hidden" id="fetchXml" name="fetchXml"/>
    </form>
    <div id="advancedFind" style="display: inline;" class="divContainer">
        <div class="divChild1">
            <cnt:AppAdvancedFind id="advFind" TitleVisible=false IncludeAPIQuery=false runat="Server"/>
        </div>
    </div>
</frm:DialogForm>
</body>
</html>