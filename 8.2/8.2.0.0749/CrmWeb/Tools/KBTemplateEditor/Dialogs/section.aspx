<%@ Page language="c#" Inherits="Microsoft.Crm.Service.Application.Pages.Tools.KBTemplateEditor.Dialogs.Section" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script type="text/javascript">

        var sectionTitle = null;
        var sectionInstruct = null;
        var butBegin = null;

        $addHandler(window,
            "load",
            function() {
                sectionTitle = $get("sectionTitle");
                sectionTitle.focus();
                sectionInstruct = $get("sectionInstructId");
                butBegin = $get("butBegin");

                var o = getDialogArguments();

                if (o) {
                    sectionTitle.value = o.Title;
                    sectionInstruct.value = o.Instructions;
                }

                updateUI();
            })

        function applychanges() {
            if (sectionTitle.value == "") {
                alert(LOCID_KBTED_ENTERSECTIONTITLE);
            } else {
                Mscrm.Utilities.setReturnValue(new SectionObj(sectionTitle.value, sectionInstruct.value));
                closeWindow();
            }
        }

        function updateUI() {
            butBegin.disabled = (sectionTitle.value == "");
        }

        function cancel() {
            closeWindow();
        }

    </script>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
    <div class="ms-crm-KBSectionProperties">
        <table class="ms-crm-TableContainer ms-crm-ZeroedCellPadding" cellspacing="5">
            <col class="section_properties_col_1"/>
            <tr>
                <td class="ms-crm-Field-Required" id="title_c">
                    <label for="sectionTitle">
                        <loc:Text ResourceId="Web.Tools.KBTemplateEditor.Dialogs.section.aspx_94" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
                    </label>
                </td>
                <td>
                    <input id="sectionTitle" type="text" class="ms-crm-Text" name="sectionTitle" onblur="value = Trim(value);" maxlength="100" onkeyup="updateUI();" Style="background-color: <%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("Required_Fields_Background_Color")) %>"/>
                </td>
            </tr>
            <tr class="ms-crm-InstructionsRow">
                <td>
                    <label for="sectionInstructId">
                        <loc:Text ResourceId="Web.Tools.KBTemplateEditor.Dialogs.section.aspx_97" runat="server"/>
                    </label>
                </td>
                <td>
                    <textarea id="sectionInstructId" name="sectionInstruct" maxlength="200" onkeyup="updateUI();"></textarea>
                </td>
            </tr>
        </table>
    </div>
</frm:DialogForm>
</body>