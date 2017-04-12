<!DOCTYPE html>
<%@ Page language="c#" Inherits="Microsoft.Crm.Common.Web.Controls.ListEdit.ListValuePage" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<html>


<head>

    <cnt:AppHeader runat="server" id="crmHeader"/>

</head>


<body scroll="no">
<frm:DialogForm id="crmForm" runat="server">
    <table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
        <col width="80"><col>
        <tr>
            <td class="ms-crm-Field-Required">
                <label for="txtLabel">
                    <loc:Text ResourceId="Web._controls.listedit.dialogs.labels.Label" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
                </label>
            </td>
            <td>
                <ui:TextBox id="txtLabel" runat="server"/>
            </td>
        </tr>
        <tr>
            <td>
                <label for="numValue">
                    <loc:Text ResourceId="Web._controls.listedit.dialogs.labels.Value" runat="server"/>
                </label>
            </td>
            <td>
                <ui:Number id="numValue" Disabled="true" runat="server"/>
            </td>
        </tr>
        <tr>
            <td>
                <label for="txtColor">
                    <loc:Text ResourceId="SystemCustomization.ManageEntityPage.EntitySection.Labels.Color" runat="server"/>
                </label>
            </td>
            <td>
                <table width="100%" cellspacing="0" cellpadding="0">
                    <tr>
                        <td>
                            <ui:Textbox id="txtColor" OnChange="onColorChange();" tabindex="5" runat="server"/>
                        </td>
                        <td style="width: 15%;">
                            <div id="divPreviewColor" class="ms-crm-Input-Container" style="margin-left: 15%;">&nbsp;</div>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</frm:DialogForm>
</body>
</html>