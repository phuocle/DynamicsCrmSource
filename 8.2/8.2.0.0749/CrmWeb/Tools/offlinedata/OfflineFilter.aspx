<!DOCTYPE html>
<%@ Page language="c#" Inherits="Microsoft.Crm.Web.OfflineFilterPage" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Metadata" %>
<html xmlns:Crm>
<head>
    <title>
        <loc:Text ResourceId="Title_OfflineFilter" runat="server"/>
    </title>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script language="JavaScript">
        var _aParentedToAnyReplicatedEntityList = new Array(<%= GetParentedToAnyReplicatedEntity() %>);
        var _aPriKey = new Array();

        Sys.Application.add_load(OfflineFilterPageOnLoad);

        function OfflineFilterPageOnLoad() {


            var advFind = $find("advFind");
            advFind.set_onPopulateFieldList(AddToFieldList);


            advFind.set_onPopulateOperatorList(AddToOperatorList);

            <%
                if (queryId != null && queryId.Length > 0)
                {
                    if (savedQuery)
                    {
            %>
            advFind.Load(<%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(queryId) %>, SavedQuery);
            <% }
                    else
                    { %>
            advFind.Load(<%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(queryId) %>, UserQuery);
            <%
                    }
                }
            %>


            advFind.set_onGetFetchAttributes(GetAttributesXml);

            <%= _primaryKeyArray %>
        }

        function cancel() {
            closeWindow();
        }

        function IsParentedToAnyReplicatedEntity(sEntityName) {
            var iLen = _aParentedToAnyReplicatedEntityList.length;
            for (i = 0; i < iLen; i++) {
                if (_aParentedToAnyReplicatedEntityList[i] == sEntityName)
                    return true;
            }
            return false;
        }


        function AddToFieldList(oArgs) {

            if (IsParentedToAnyReplicatedEntity(oArgs.sEntityName)) {

                oArgs.sCustomFields = "<result value='primarykey' datatype='custom'>" +
                    CrmEncodeDecode.CrmHtmlEncode(LOCID_OFFLINEFILTER_CHILD) +
                    "</result>";
            }
        }


        function AddToOperatorList(oArgs) {

            if (IsParentedToAnyReplicatedEntity(oArgs.sEntityName) && oArgs.oField.value == "primarykey") {

                oArgs.oOperatorList.AddOption(LOCID_OFFLINEFILTER_OF, "child-of");
            }
        }


        function GetAttributesXml() {
            var advFind = $find("advFind");
            return "<attribute name=\"" + CrmEncodeDecode.CrmXmlEncode(_aPriKey[advFind.get_entityName()]) + "\"/>";
        }

    </script>
</head>
<body scroll="no">
<div style="height: 100%; width: 100%">
    <div style='height: 45px'>
        <mnu:AppGenericMenuBar id="crmMenuBar" runat="server"/>
    </div>
    <div class="ms-crm-absolutePosition" style="top: 45px; left: 10px; right: 10px; bottom: 10px">
        <div id="dummtDiv" class="ms-crm-IE7-Height-Fix-Dummy-Container">
            <div class="OfflineFilter_td_tab0">
                <div class="ms-crm-Tab" id="tab0">
                    <div style="height: 100%; width: 100%" class="gradient">
                        <cnt:AppAdvancedFind id="advFind" QueryListVisible=false runat="Server"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>