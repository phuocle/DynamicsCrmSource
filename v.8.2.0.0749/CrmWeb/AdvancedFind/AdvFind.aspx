<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.AdvancedFind.AdvancedFindPage" %>

<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Application.Types" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<!DOCTYPE html>
<html xmlns:crm>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script language="Javascript">
        var firstInvoke = true;
        Sys.Application.add_load(OnLoadHandler);

        function OnLoadHandler() {

            if (firstInvoke) {
                firstInvoke = false;
                return;
            }


            window.focus();


            $find("userQueryGrid").add_onBeforeFormLoad(LoadSavedSearch);


            var advFind = $find("advFind");
            if (advFind.get_queryListVisible()) {
                advFind.get_queryListControl().add_onQueryChange(HandleQueryChange);
            }

            <%

                if (!advFind.Disabled)
                {
            %>

            var queryString = window.location.search;


            var oUrl = Mscrm.CrmUri.create("/AdvancedFind/fetchData.aspx" + queryString);


            var bAutoRun = oUrl.get_query()["AutoRun"];
            bAutoRun = ((bAutoRun != null) && (bAutoRun.toUpperCase() == "TRUE") || (bAutoRun == "1")) ? true : false;

            delete oUrl.get_query()["AutoRun"];
            delete oUrl.get_query()["etn"];
            delete oUrl.get_query()["UIProvider"];
            delete oUrl.get_query()["DataProvider"];
            $get("resultRender").action = oUrl.toString();

            <%

                if (_privilegeCheck.CanRead)
                {
            %>
            advFind.add_onAfterSave(AfterSave);
            advFind.add_onAfterSaveAs(AfterSave);
            <%
                }
            %>


            if (bAutoRun) {

                setTimeout("ExecuteQuery();", 100);
            }
            <%
                }
            %>
        }


        function LoadSavedSearch(sender, oArgs) {
            ShowQuery();
            <%

                if (!advFind.Disabled)
                {
            %>
            var advFind = $find("advFind");

            if (!(advFind.get_isDirty() || advFind.get_isNameOrDescDirty()) || confirm(LOCID_AF_SEARCHMODIFIED_MSG)) {

                advFind.Load(oArgs.objectID, oArgs.objectTypeCode);
            }
            <%
                }
            %>
            oArgs.breakEvent = true;
        }

    </script>
</head>

<body style="overflow: hidden">
<ui:EventManager runat="server" id="crmEventManager"></ui:EventManager>

<form id="resultRender" action="" method="post" target="resultFrame">
    <input type="hidden" id="FetchXml" name="FetchXml" value=""/>
    <input type="hidden" id="LayoutXml" name="LayoutXml" value=""/>
    <input type="hidden" id="EntityName" name="EntityName" value=""/>
    <input type="hidden" id="DefaultAdvFindViewId" name="DefaultAdvFindViewId" value=""/>
    <input type="hidden" id="ViewId" name="ViewId" value=""/>
    <input type="hidden" id="ViewType" name="ViewType" value=""/>
    <input type="hidden" id="SortCol" name="SortCol" value=""/>
    <input type="hidden" id="UIProvider" name="UIProvider" value=""/>
    <input type="hidden" id="DataProvider" name="DataProvider" value=""/>
</form>

<table cellspacing="0" cellpadding="0" height="100%" width="100%">
    <col width="10px"/><col/><col width="10px"/>
    <tr>
        <td class="AdvFind_td_FindBody">
            <span id="advancedFind" style="display: block; height: 100%">
                <cnt:AppAdvancedFind id="advFind" QueryListVisible="true" TitleVisible="false" IncludeAPIQuery="false" runat="Server"/>
            </span>
            <span id="userQueries" style="display: none; height: 100%">
                <sdk:GridControl id="userQueryGrid" ShowGridMenuBar="false" AutoExpand="Auto" ViewId="E62FC2B4-D7C3-410E-ADAA-BB65FBF6F926" TargetEntityType="userquery" IsLoadOnDemandEnabled=false runat="server"/>
            </span>
            <%

                if (!advFind.Disabled)
                {
            %>
                <span id="searchResults" style="display: none; height: 100%">
                    <iframe name="resultFrame" id="resultFrame" src="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.Application.Utility.CrmUri.Create("/_static/blank.htm", Microsoft.Crm.Application.Security.UserInformation.Current).ToString()) %>" width="100%" height="100%" scrolling="no"></iframe>
                </span>
            <%
                }
            %>
        </td>
    </tr>
    <tr style="display: none">
        <td>
            <div id="btnGetFetchXml" onclick="this.setAttribute('fetchxml', $find('advFind').get_fetchXml());" fetchxml=""/>
            <iframe id="downloadXmlFrame" name="downloadXmlFrame" style="display: none" src="/_static/blank.htm"/>
        </td>
    </tr>
</table>

</body>
</html>