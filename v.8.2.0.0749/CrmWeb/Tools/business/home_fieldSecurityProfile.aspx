<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Pages.Tools.Business.FieldSecurityProfile" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<!DOCTYPE html>
<html>
<head>
    <cnt:AppHeader runat="server" id="crmHeader"/>

    <script type="text/javascript" language="JavaScript">

        Sys.Application.add_load(function() {
            HandleBackButtonIssues(null);
        });

        function handleView(o) {

            var crmGrid = $find("crmGrid");
            crmGrid.SetParameter("oId", o.value);
            crmGrid.Reset();
        }
    </script>
    <style type="text/css">
        div.stdTable {
            position: absolute;
            top: 0px;
            bottom: 0px;
            left: 0px;
            right: 0px;
            padding-top: 3px;
            height: auto;
        }
    </style>
</head>
<body class="stage">
<div class="stdTable">
    <div>
        <label class="ms-crm-Setting-ContextHeader-Title">
            <loc:Text ResourceId="Web.Tools.map_xml.aspx_83" runat="server"/>
        </label>
    </div>
    <div style="height: 25px">
        <mnu:AppGridMenuBar id="crmMenuBar" runat="server"/></td>
    </div>
    <div class="ms-crm-absolutePosition" style="top: 63px">
        <div id="dummyDiv" class="ms-crm-IE7-Height-Fix-Dummy-Container">
            <cnt:AppGrid runat="server" id="crmGrid" IsGridFilteringEnabled="false"/>
        </div>
    </div>
</div>
</body>
</html>