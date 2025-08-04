<!DOCTYPE html>
<%@ Page language="c#" Inherits="Microsoft.Crm.Common.Web.TemplateManagerPage" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<html>
<head>
    <cnt:AppHeader runat="server" id="crmHeader"/>

    <style type="text/css">
        .gridMenuBar {
            top: 35px;
            height: 25px;
            position: absolute;
            width: 100%;
        }

        .tableContainer {
            height: 68px;
            position: absolute;
            top: 0px;
            width: 100%;
        }

        div.stdTable { width: 100%; }
    </style>

    <script language="javascript" type="text/javascript">

        Sys.Application.add_load(function() {
            HandleBackButtonIssues(null);
        });
    </script>
</head>

<body class="stage">

<div class="stdTable">
    <div class="tableContainer">
        <table style="width: 100%; height: 50%" cellpadding="0" cellspacing="0">
            <col width="70%"><col width="30%">
            <tr>
                <td>
                    <label class="ms-crm-Setting-ContextHeader-Title">
                        <loc:Text ResourceId="Web.Tools.map_xml.aspx_170" runat="server"/>
                    </label>
                </td>
                <td>
                    <cnt:AppQuickFind id="crmQuickFind" runat="server"/>
                </td>
            </tr>
        </table>
        <table style="width: 100%; height: 50%" cellpadding="0" cellspacing="0">
            <col><col><col width="80%">
            <tr>
                <td nowrap class="emailtempMgr_home_td_AppViewSelector">
                    <label for="crmGrid_SavedQuerySelector">
                        <span class="ms-crm-Bold-Header">
                            <loc:Text ResourceId="Web.View_Label_70" runat="server"/>
                        </span>
                    </label>
                </td>
                <td>
                    <cnt:AppViewSelector runat="server" id="crmViewSelector"/>
                </td>
                <td align="center">
                    <span class="emailTemplateMgr_home_span_QuickFindSpacer">&nbsp;</span>
                </td>
            </tr>
        </table>
    </div>
    <div class="gridMenuBar">
        <mnu:AppGridMenuBar id="crmMenuBar" runat="server"/>
    </div>

    <div class="ms-crm-absolutePosition" style="top: 94px;">
        <!--[if IE 7]>
            <div class="ms-crm-IE7-Height-Fix-Dummy-Container">
        <![endif]-->
        <cnt:AppGrid runat="server" id="crmGrid" IsGridFilteringEnabled="true"/>
        <!--[if IE 7]>
            </div>
        <![endif]-->
    </div>
</div>
</body>
</html>