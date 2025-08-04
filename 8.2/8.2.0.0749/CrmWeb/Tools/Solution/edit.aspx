<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.Solution.SolutionDetailPage" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>

<%@ Import Namespace="Microsoft.Crm"%>
<%@ Import Namespace="Microsoft.Crm.Application.Types"%>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>

<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script type="text/javascript" language="javascript">

        var onloadScript = "<%= navigateTo %>";
        var retry = 0;

        Sys.Application.add_load(function() {
            window.setTimeout(loadDefaultNode, 1);
        });

        function loadDefaultNode() {
            var layoutCon = Sys.Application.findComponent("layoutControl");
            if (!IsNull(layoutCon)) {
                ReloadControls();
                layoutCon.handleEvent(9);
            } else {
                retry++;
                if (retry < 10) {
                    window.setTimeout(loadDefaultNode, 1);
                    return;
                }
            }

            if (onloadScript.length > 10) {
                eval(onloadScript);
            }
        }


        function ReloadControls() {
            try {

                if ($find("Attribute_installedon").get_isDirty()) {
                    $find('Attribute_friendlyname')
                        .set_value(Mscrm.FormControlInputBehavior.GetBehavior("friendlyname").get_dataValue());
                    $find("Attribute_uniquename").set_value(Mscrm.FormControlInputBehavior.GetBehavior("uniquename")
                        .get_dataValue());
                    $find("Attribute_publisherid")
                        .set_value(Mscrm.FormControlInputBehavior.GetBehavior("publisherid").get_dataValue());
                    $find("Attribute_configurationpageid")
                        .set_value(Mscrm.FormControlInputBehavior.GetBehavior("configurationpageid").get_dataValue());
                    $find("Attribute_version").set_value(Mscrm.FormControlInputBehavior.GetBehavior("version")
                        .get_dataValue());
                    $find("Attribute_description")
                        .set_value(Mscrm.FormControlInputBehavior.GetBehavior("description").get_dataValue());
                    $find("Attribute_ismanaged").set_value(Mscrm.FormControlInputBehavior.GetBehavior("ismanaged")
                        .get_dataValue());
                    $find("Attribute_installedon")
                        .set_value(Mscrm.FormControlInputBehavior.GetBehavior("installedon").get_dataValue());
                }
            } catch (e) {
            }
        }

    </script>
</head>
<body scroll="no">
<div id="layoutControl"></div>
<table class="ms-crm-Form-Layout" cellspacing="0" cellpadding="0">
    <col style="width: <loc:Text Encoding='HtmlAttribute' ResourceId='DetailForm_Left_Navigation_Width' runat='server'/>"/><col/>
    <tr id="tr_solutionexplorer_header" style="height: 98px">
        <td colspan="2" style="vertical-align: top">
            <div id="div_mainmenu" class="ms-crm-absolutePosition" style="bottom: auto;">
                <mnu:AppFormMenuBar id="crmMenuBar" runat="server"/>
            </div>
            <div id="div_entitymenu" class="ms-crm-absolutePosition" style="bottom: auto; visibility: hidden;">
                <mnu:AppCustomizationMenuBar id="crmEntityMenuBar" runat="server"/>
            </div>
            <div id="div_submenu" class="ms-crm-absolutePosition" style="bottom: auto; visibility: hidden;">
                <mnu:AppCustomizationMenuBar id="crmSubmenuBar" runat="server"/>
            </div>
        </td>
    </tr>
    <tr id="tr_notificationbar" style="height: 1%; display: none" runat="server">
        <td colspan="2">
            <cnt:AppNotifications id="warningFields" runat="server"/>
        </td>
    </tr>
    <tr id="tr_solutionexplorer_body" class="ms-crm-Form-Background">
        <td colspan="2" style="vertical-align: top">
            <cnt:TreeNavControl id="treeNavControl" runat="server"/>
            <cnt:SolutionSplitterControl id="solutionSplitter" runat="server"></cnt:SolutionSplitterControl>
            <div id="tdAreas" style="position: absolute;" class="ms-crm-transparence">
                <div id="areaForm" class="ms-crm-Form-Area ms-crm-NRForm-Main-Container" style="<%= displayAreaForm ? "" : "visibility:hidden;z-index:-1;" %>width: 100%;">
                    <frm:CrudForm id="crmForm" runat="server"/>
                </div>
                <% if (VisibleArea != DisplayAreas.Form)
                   {
                %>
                    <div id="areaSolutionComponent" style="height: 100%; width: 100%; <%= displayComponentsList ? "" : "visibility:hidden;z-index:-1;" %>">
                        <iframe allowTransparency='-1' src='<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(SolutionComponentsDefaultPath) %>' id='areaSolutionComponentFrame' name='areaSolutionComponentFrame' title="<loc:Text Encoding='HtmlAttribute' ResourceId='Solution.Editor.FrameTitle.Components' runat='server'/>" scrolling='auto' isArea='1' style="padding-left: 5px; padding-right: 5px; width: 100%; height: 100%" frameborder='0'>
                        </iframe>
                    </div>
                <% }
                %>
            </div>
        </td>
    </tr>
    <tr id="tr_solutionexplorer_footer" style="height: 25px">
        <td class="ms-crm-Form-StatusBar" colspan="2">
            <sdk:RenderStatusControl id="crmRenderStatus" runat="server"/>
        </td>
    </tr>
</table>

<iframe id="exportFrame" name="exportFrame" style="display: none" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Solution.Editor.FrameTitle.Export' runat='server'/>"
        src="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(CrmUri.Create("/_static/blank.htm", Microsoft.Crm.Application.Security.UserInformation.Current).ToString()) %>">
</iframe>

</body>
</html>