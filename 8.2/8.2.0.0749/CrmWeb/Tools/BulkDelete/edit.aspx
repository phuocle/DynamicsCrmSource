<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.BulkDelete.BulkDeletionDetailPage" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Sdk" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script type="text/javascript">

        var _SelectedIndex = -1;
        var _FetchXmlList = "";
        var _EntityList = "";
        var _EntityName = "";
        var fetchXmlNodes;
        var queryPicklist;

        Sys.Application.add_load(PageLoad);

        function PageLoad() {


            LOCID_AF_ALLHIDDENMSG = "";

            queryPicklist = Mscrm.FormControlInputBehavior.GetBehavior("querylist");


            if (!IsNull(queryPicklist)) {
                $addHandler(queryPicklist.get_element(), "change", onSelectedQueryChange);
                _SelectedIndex = queryPicklist.get_dataValue();


                var entityList = "<%= entityNameString %>";
                _EntityList = entityList.split(';');
                _EntityName = _EntityList[_SelectedIndex];


                var fetchXmlEncoded = "<%= Microsoft.Crm.CrmEncodeDecode.CrmXmlEncode(fetchXmlString) %>";
                var fetchXmlDecoded = CrmEncodeDecode.CrmXmlDecode(fetchXmlEncoded);
                fetchXmlDecoded = "<fetchXml>" + fetchXmlDecoded + "</fetchXml>";
                var xmlDoc = XUI.Xml.LoadXml(fetchXmlDecoded);

                fetchXmlNodes = XUI.Xml.SelectNodes(xmlDoc, "fetchXml/fetch", null);

                document.getElementById("advfindcontrol").style.height = "200";

                document.getElementById("fetchXmlData").value = XUI.Xml.XMLSerializer
                    .serializeToString(fetchXmlNodes[_SelectedIndex]);
            } else {

                var queryListLabel = document.getElementById("querylist_c");
                queryListLabel.style.display = "none";
            }
        }

        function onSelectedQueryChange() {
            _SelectedIndex = queryPicklist.get_dataValue();
            _EntityName = _EntityList[_SelectedIndex];

            $get('advfindcontrol').name = "advfindcontrol";
            document.getElementById("fetchXmlData").value = XUI.Xml.XMLSerializer
                .serializeToString(fetchXmlNodes[_SelectedIndex]);
            var submitForm = document.getElementById("fetchXmlForm");
            var url = Mscrm.CrmUri.create("/tools/bulkdelete/bulkdeletequeryview.aspx?entityname=" + _EntityName)
                .toString();
            submitForm.action = url;
            submitForm.submit();
            document.getElementById("advfindcontrol").style.display = "inline";
        }
    </script>
    <style>
        .ms-crm-Form-Nav-Container {
            padding-top: 4px;
            width: <%= AppResourceManager.Default.GetString("DetailForm_Left_Navigation_Width") + "px" %>;
        }

        .ms-crm-NRForm-Main-Container {
            <% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
               { %>
            right: <%= AppResourceManager.Default.GetString("DetailForm_Left_Navigation_Width") + "px" %>;
            <% }
               else
               { %>
            left: <%= AppResourceManager.Default.GetString("DetailForm_Left_Navigation_Width") + "px" %>;
            <% } %>
        }

        #areaViewFailuresFrame {
            position: absolute;
            height: 100% !important;
        }
    </style>
</head>
<body>
<form id="fetchXmlForm" method="post" target="advfindcontrol">
    <input type="hidden" id="fetchXmlData" name="fetchXmlData"/>
</form>
<div class="ms-crm-Form-Layout">
    <div style="height: 98px">
        <div>
            <mnu:AppFormMenuBar id="crmMenuBar" runat="server"/>
        </div>
    </div>
    <div class="ms-crm-NRForm-Background">
        <div class="ms-crm-Form-Nav-Container">
            <cnt:AppNavigationBar id="crmNavBar" runat="server"/>
        </div>
        <div id="tdAreas" class="ms-crm-NRForm-Main-Container">
            <div class="ms-crm-IE7-Height-Fix-Dummy-Container">
                <div id="areaForm" class="ms-crm-Form-Area" style="position: relative; overflow: auto;">
                    <frm:CrudForm id="crmForm" runat="server"/>
                </div>
            </div>
        </div>
    </div>
    <div class="ms-crm-FSBContainer ms-crm-Form-StatusBar">
        <sdk:RenderStatusControl id="crmRenderStatus" runat="server"/>
    </div>
</div>
</body>
</html>