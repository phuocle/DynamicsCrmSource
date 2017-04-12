<%@ Page language="c#" Inherits="Microsoft.Crm.Service.Application.Pages.Tools.KBTemplateEditor.Dialogs.KBTemplatePropertiesPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>

<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script language="JavaScript">

        var templateTitle = null;
        var templateDescription = null;
        var templateLanguage = null;

        $addHandler(window,
            "load",
            function() {
                templateTitle = $get("templateTitle");
                templateTitle.focus();
                templateDescription = $get("templateDescId");
                templateLanguage = $get("languagecode");
            })

        function applychanges() {
            Mscrm.Utilities.setReturnValue(new TemplateObj(templateTitle.value,
                templateDescription.value,
                templateLanguage.value));
            closeWindow();
        }

        function cancel() {
            Mscrm.Utilities.setReturnValue(false);
            closeWindow();
        }

    </script>
</head>

<body>
<frm:DialogForm id="crmForm" runat="server">
    <table class="ms-crm-KBTemplateProperties ms-crm-ZeroedCellPadding" cellspacing="5">
        <col class="template_properties_col_1"/>
        <tr>
            <td class="ms-crm-Field-Required" id="templatetitle_c">
                <label for="templateTitle">
                    <loc:Text ResourceId="Web.Tools.KBTemplateEditor.Dialogs.kbtemplateproperties.aspx_58" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
                </label>
            </td>
            <td>
                <input id="templateTitle" type="text" class="ms-crm-Text" name="templateTitle" onblur="value = Trim(value);" maxlength="100" onpaste="onPaste();" onkeyup="updateUI();" onkeydown="dismiss(event);" Style="background-color: <%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("Required_Fields_Background_Color")) %>"/>
            </td>
        </tr>
        <tr class="ms-crm-DescriptionRow">
            <td>
                <label for="templateDescId">
                    <loc:Text ResourceId="Web.Tools.KBTemplateEditor.Dialogs.kbtemplateproperties.aspx_62" runat="server"/>
                </label>
            </td>

            <td>
                <ui:TextArea id="templateDescId" scroll="auto" Height="70px" maxlength="200" runat="server"/>
            </td>
        </tr>
        <tr>
            <td id="languagecode_c">
                <label for="languagecode">
                    <loc:MetadataText EntityType="kbarticletemplate" AttributeName="languagecode" runat="server"/>
                </label>
            </td>
            <td>
                <sdk:LanguagePicker id="languagecode" runat="server"/>
            </td>
        </tr>
    </table>
</frm:DialogForm>
</body>