<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Condition.ActionPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Controls" Assembly="Microsoft.Crm.Application.Components.UI" %>

<html xmlns:Crm>
<head>
    <title>
        <loc:Text ResourceId="Title_Action" runat="server"/>
    </title>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script language="Javascript">
        function window.
        onload()
        {

            window.focus();


            var oArgs = getDialogArguments();
            if (oArgs.Xml != null && oArgs.Xml != null) {
                document.all.appActionBuilder.LoadXml(oArgs.Xml);
            }
            document.all.appActionBuilder.GetUserDefinedList = CreateUI;
            document.all.appActionBuilder.GetUserDefinedXml = GetConfigurationXml;
        }

        function save() {
            window.returnValue = document.all.appActionBuilder.GetXml();
            closeWindow();
        }
    </script>
    <style type="text/css">

        DIV.ms-crm-AdvFind-Filter { width: 100%; }

        DIV.ms-crm-AdvFind-EmptyField { border: 0px; }
    </style>
</head>

<body scroll="no">
<FORM id="resultRender" action="" method="post" target="resultFrame">
    <INPUT type="hidden" name="ActionXml" value="">
</FORM>

<table cellspacing=0 cellpadding=0 height="100%" width="100%">
    <tr>
        <td style="padding-bottom: 5px">
            <crm:MenuBar id="menuBar" runat="server"/>
        </td>
    </tr>
    <tr>
        <td class="Action_td_AppCondition">
        <span id="condition">
            <table width="100%" height="100%" cellpadding=0 cellspacing=0>
                <tr>
                    <td style="padding: 10px; width: 100%">
                        <cnt:AppCondition id="appAction" runat="Server"/>
                    </td>
                </tr>
            </table>
        </span>
    </tr>
</table>
</body>
</html>