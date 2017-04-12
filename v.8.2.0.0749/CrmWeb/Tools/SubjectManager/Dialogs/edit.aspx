<%@ Page language="c#" Inherits="Microsoft.Crm.Service.Web.Tools.Subjects" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm"%>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<script type="text/javascript">

    Sys.Application.add_load(PageLoad);

    function PageLoad() {
        Mscrm.Utilities.setDialogHeaderHeight("DlgHdContainer", "DlgHdBodyContainer", "DlgHdTitle", "DlgHdDesc");
        $addHandler($get("crmForm"), "submit", applychanges);
        $addHandler(window, "beforeunload", onPageUnload);
        $find("crmForm").set_saving(true);
        var titleCtrl = Mscrm.FormControlInputBehavior.GetBehavior("title");
        if (!titleCtrl.get_disabled()) {
            titleCtrl.setFocus();
        }
    }

    function onPageUnload() {
        $removeHandler(document, "keyup", changeonkeyup);
    }

    $addHandler(document, "keyup", changeonkeyup);

    function changeonkeyup(e) {
        if (_bReadOnlyForm) {
            switch (e.keyCode) {
            case KEY_ENTER:
                applychanges();
                break;
            }
        }
    }

    function applychanges() {
        if (_bReadOnlyForm) {
            closeWindow();
        } else {
            if (!Mscrm.DialogsControl.IsValid()) {
                return;
            }
            var titleCtrl = Mscrm.FormControlInputBehavior.GetBehavior("title");
            if (titleCtrl.get_dataValue()) {
                var trimmedValue = Trim(titleCtrl.get_dataValue());
                titleCtrl.set_dataValue(trimmedValue);
            }
            if (titleCtrl.get_dataValue() && titleCtrl.get_dataValue().length > 0) {
                $find("crmForm").BuildXml(true, false);
                var oCrmFormSubmit = $get('crmFormSubmit');
                var oResult = new Object();
                oResult.xml = oCrmFormSubmit.crmFormSubmitXml.value;
                oResult.id = oCrmFormSubmit.crmFormSubmitId.value;
                Mscrm.Utilities.setReturnValue(oResult);
                $find("crmForm").set_saving(true);
                closeWindow();
            } else {
                titleCtrl.setFocus();
                $find("crmForm").displayMissingValue(XUI.Html
                    .GetText(XUI.Html.DomUtils.GetPrevSibling(titleCtrl.get_element().parentNode.parentNode)));
            }
        }
        return false;
    }

    function cancel() {
        closeWindow();
    }

</script>
<frm:HardcodedForm id="crmForm" SupportsDefaultData="true" runat="server">
    <ui:Hidden id="featuremask" Text="1" runat="server"/>

    <table cellpadding="0" cellspacing="3" style="width: 100%; height: 130px; table-layout: fixed;">
        <col style="width: 100px"/><col/>
        <tr>
            <td class="ms-crm-Field-Required" id="Td1">
                <label for="title">
                    <loc:Text ResourceId="Web.Tools.SubjectEditor.Dialogs.Edit.aspx_77" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
                </label>
            </td>
            <td>
                <sdk:TextBoxControl id="title" required maxlength="60" TabIndex="1" runat="server"/>
            </td>
        </tr>
        <tr>
            <td>
                <label for="parentsubject">
                    <loc:Text ResourceId="Web.Tools.SubjectEditor.Dialogs.Edit.aspx_81" runat="server"/>
                </label>
            </td>
            <td id="Td2">
                <sdk:LookupControl id="parentsubject" AccessibilityLabelResourceId="Web.Tools.SubjectEditor.Dialogs.Edit.aspx_81" Required="false" TabIndex="2" runat="server"/>
            </td>
        </tr>
        <tr style="height: 100%">
            <td valign="top">
                <label for="description">
                    <loc:Text ResourceId="Web.Tools.SubjectEditor.Dialogs.Edit.aspx_85" runat="server"/>
                </label>
            </td>
            <td style="height: 76px">
                <sdk:TextAreaControl id="description" runat="server" TabIndex="3" height="100%" maxlength="2000"/>
            </td>
        </tr>
    </table>
</frm:HardcodedForm>