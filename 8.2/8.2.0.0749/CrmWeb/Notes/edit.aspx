<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Note" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm"%>
<%@ Import Namespace="Microsoft.Crm.Utility" %>

<!DOCTYPE html>
<html>
<head>


<cnt:AppHeader id="crmHeader" runat="server"/>
<style type="text/css">

    textarea {
        height: 100%;
        overflow-y: auto;
    }

    .ms-crm-BodyContainer {
        width: 100%;
        height: 100%;
        position: relative;
    }

    .ms-crm-StatusContainer {
        height: 25px;
        position: absolute;
        bottom: 0px;
        width: 100%;
    }

    .ms-crm-AttachmentContainer {
        position: absolute;
        bottom: 25px;
        width: 100%;
    }

    .ms-crm-IE7-td-Texarea-Container,
    .ms-crm-IE7-Texarea { position: static; }


    p { margin: 0px; }

    #butRemove,
    #butAttach,
    #butClose {
        width: 84px;
        min-width: 0px;
    }
</style>

<% if (crmForm.ReadOnly == false)
   { %>
    <script type="text/javascript" language="JavaScript">

        var bWorkflowStep = false;

        <% if (_workflowNote)
           { %>
        bWorkflowStep = true;
        <% } %>

        Sys.Application.add_load(PageLoad);
        Sys.Application.add_unload(PageUnload);

        function PageLoad() {

            var descDiv = document.getElementById("DlgHdDesc");
            if (!IsNull(descDiv)) {
                XUI.Html.SetText(descDiv, LOCID_ATTACHMENT_DESCRIPTION);
            }

            if (Mscrm.Utilities.isIosDevice()) {
                $get("hideAttachmentInIpad").style.display = "none";
            }
            var crmFormCtrl = $find("crmForm");
            if (bWorkflowStep == true) {
                crmFormCtrl.add_onSave(SaveWorkflowNote);
                crmFormCtrl.set_bypassValidation(true);
            } else {
                crmFormCtrl.add_onSave(Save);
            }
            crmFormCtrl.detachCloseAlert();
            attachWindowOnBeforeUnload(attachmentClose);


            $addHandler($get('crmFormSubmit'), "submit", validate);
            <%
           if (Request.QueryString["rg"] == "1")
           {
               if (_workflowNote)
               {
                   Response.Write("try{window.opener.notifyChildClose();}catch(e){}");
               }
               else
               {
                   Response.Write("try{window.opener.auto($get('crmFormSubmit').crmFormSubmitObjectType.value);}catch(e){}");
               }
           }
            %>
            <% if (!_hideDescription)
               { %>

            var subject = $get('subject');
            $addHandler(subject, "keypress", SubjectKeyPress);
            if (XUI.Html.GetComputedStyle(subject, "display") != "none" &&
                XUI.Html.GetComputedStyle(subject, "visibility") != "hidden" &&
                !subject.disabled) {
                subject.focus();
            }

            <% if (_workflowNote)
               { %>



            var readOnlyForm = GetValueForTag('readonlymode=');

            if (readOnlyForm == 'true') {
                SetReadOnlyForm(true);
            } else {
                var owner = document.getElementById("crmOwnerLookup");
                owner.disabled = false;
                $addHandler(owner, "focus", OnAttributeFocus);
            }
            GenerateAttributeTypeMapping("annotation", null, null, true);
            AddAttributeTypeMapping("crmOwnerLookup", "Lookup");

            PopulateSlugControls($get('hidSlugInfo').value);
            <% } %>
            <% } %>

            var errorurl = $get('PopupErrorUrl')
            if (errorurl.value != "") {
                var url = errorurl.value;
                errorurl.value = "";
                openStdDlg(url, 'window1', 350, 250, true, false, null);
            }
        }

        <% if (_workflowNote)
           { %>

        function MarkFieldsNotRequired() {
            var allElements = document.getElentsByTagName("*");
            var length = allElements.length;
            for (i = 0; i < length; i++) {
                var ctrl = Mscrm.FormControlInputBehavior.GetBehavior(allElements[i].id);
                if (!IsNull(ctrl) && ctrl.get_requiredLevel() == FIELD_REQUIRED) {
                    ctrl.get_element().setAttribute("req", FIELD_NOT_REQUIRED);
                }
            }
        }

        function BuildWorkflowNoteXml() {
            var objectLookup = Mscrm.FormControlInputBehavior.GetBehavior('crmOwnerLookup');
            var objectLookupXml;
            var slugBehavior = Mscrm.FormUtility.getSlugBehavior(GetValueControlWithSlug(objectLookup.get_element()));
            if (slugBehavior && slugBehavior.get_isDataSlug()) {
                objectLookupXml = slugBehavior.get_slugValue();
            } else {
                objectLookupXml = objectLookup.get_dataXml();
            }

            var ret = $find("crmForm").BuildXml(false, false, true);
            var oCrmFormSubmit = $get('crmFormSubmit');
            var formXml = oCrmFormSubmit.crmFormSubmitXml.value;

            if (formXml.indexOf('</subject>') >= 0) {
                formXml = formXml.replace('</subject>', objectLookupXml + '</subject>');
            } else {
                formXml = formXml.replace('</annotation>', '<subject>' + objectLookupXml + '</subject></annotation>');
            }

            oCrmFormSubmit.crmFormSubmitXml.value = formXml;
            oCrmFormSubmit.crmFormSubmitMode.value = 2;
        }

        function SaveAndCloseWorkflowNote() {
            SaveWorkflowNote();
        }

        function SaveWorkflowNote(sender, args) {


            if (!validate()) {
                if (!IsNull(args)) {
                    args.preventDefault();
                }
                return false;
            }

            var crmFormCtrl = $find("crmForm");
            var ret = crmFormCtrl.BuildXml(true, false, false, true);
            if (ret == 2) {
                if (!IsNull(args)) {
                    args.preventDefault();
                }
                return false;
            }

            BuildWorkflowNoteXml();

            crmFormCtrl.set_saving(true);
            $get('crmFormSubmit').submit();

            if (!IsNull(args)) {

                args.preventDefault();
            }
        }


        <% } %>
        function SubjectKeyPress(domEvent) {

            if (Mscrm.Utilities.getDomEventKeyCode(domEvent) == KEY_ENTER) {
                return false;
            }
        }

        function Save(sender, args) {
            if (!validate()) {
                args.preventDefault();
            }

            if (isOutlookHostedWindow() && !IsNull($get('ObjectId'))) {
                getOutlookHostedWindow().RefreshGrid();
            }
        }

        function PageUnload() {
            try {
                $removeHandler($get('crmFormSubmit'), "submit", validate);
                $removeHandler($get('subject'), "keypress", SubjectKeyPress);
                $removeHandler($get('crmOwnerLookup'), "focus", OnAttributeFocus);
            } catch (e) {
            }
        }
    </script>
<%
   }
   else if (Request.QueryString["rg"] == "1")
   {
%>
    <script language="JavaScript">
        function OnLoad() {
            try {
                window.opener.auto($get('crmFormSubmit').crmFormSubmitObjectType.value);
            } catch (e) {
            };
        }

        window.onload = OnLoad;
    </script>
<%
   }
%>

</head>

<body>
<div class="ms-crm-BodyContainer">
    <% if (_hideDescription)
       { %>
        <div class="ms-crm-Dialog-Header">
            <div class="ms-crm-Dialog-Header-Title" id="tdDialogHeader">
                <loc:Text ResourceId="Web.Activities.Attachment.edit.aspx_56" runat="server"/>
            </div>
            <div class="ms-crm-Dialog-Header-Desc" id="DlgHdDesc"></div>
        </div>
    <% }
       else
       { %>
        <div height="28">
            <mnu:AppFormMenuBar id="crmMenuBar" HasNavigation="false" runat="server"/>
        </div>
    <% } %>

    <div style="display: none">
        <div style="display: block; width: 100%" id="Div1" runat="server"></div>
    </div>

    <div class="ms-crm-absolutePosition" style="top: 100px; bottom: 100px; overflow: auto">
        <div class="ms-crm-FormAndRIContainer" style="overflow: hidden">
            <div <% if (_workflowNote)
                    { %> class="ms-crm-FormBodyContainer ms-crm-FormBodyRIExpanded" <% }
                    else
                    { %> class="ms-crm-FormBodyContainer" style="left: 0px; right: 0px" <% } %> id="formBodyContainer">
                <frm:HardcodedForm id="crmForm" runat="server">

                    <ui:Hidden ID="isdocument" runat="server"/>
                    <ui:Hidden ID="objectid" runat="server"/>
                    <ui:Hidden ID="objecttypecode" runat="server"/>
                    <ui:Hidden ID="stepid" runat="server"/>

                    <div id="tr_desc" style="height: 100%; display: <% if (_hideDescription)
                                                                       { %>none<% }
                                                                       else
                                                                       { %>block<% } %>;">
                        <div style="padding: 5px; vertical-align: top">
                            <div class="ms-crm-TabBar-Cell">
                                <cnt:AppTabBar id="crmTabBar" runat="server"/>
                            </div>
                            <div style="vertical-align: top">
                                <div class="ms-crm-Tab ms-crm-InlineTab" style="width: auto; height: auto" id="tab0">
                                    <table cellpadding="2" cellspacing="0" height="100%" width="100%" style="table-layout: fixed;">
                                        <col width="80"><col>
                                        <tr>
                                            <td class="ms-crm-Field-Required" id="subject_c">
                                                <label for="subject">
                                                    <loc:Text ResourceId="Web.Notes.edit.aspx_97" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
                                                </label>
                                            </td>
                                            <td>
                                                <sdk:TextBoxControl id="subject" Required="true" MaxLength="255" runat="server"/>
                                            </td>
                                        </tr>
                                        <tr height="100%">
                                            <td colspan="2">
                                                <sdk:TextAreaControl id="notetext" runat="server" TitleResource="Web.Notes.textarea.title" Height="135px"/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="2" nowrap>
                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                    <col width="80"><col>
                                                    <tr>
                                                        <td class="ms-crm-Field-Normal" id="regarding_c">
                                                            <label for="crmOwnerLookup">
                                                                <loc:Text ResourceId="Notes_Parent_Entity" runat="server"/>
                                                            </label>
                                                        </td>
                                                        <frm:FormCell runat="server" ShowLabel="True">
                                                            <sdk:LookupControl id="crmOwnerLookup" AccessibilityLabelResourceId="Notes_Parent_Entity" LookupStyle="single" runat="server"/>
                                                            <div style="display: none">
                                                                <sdk:LookupControl id="ownerid" LookupStyle="single" runat="server"/>
                                                            </div>
                                                        </frm:FormCell>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </frm:HardcodedForm>
            </div>
            <% if (_workflowNote)
               { %>
                <div class="RelatedInformationPaneContainer RelatedInformationPaneExpandedContainer" id="tdRelatedInformationPane">
                    <div style="display: block; width: 100%" id="RelatedInformationPlaceholder" runat="server"></div>
                </div>
            <% } %>
        </div>
    </div>

    <div id="hideAttachmentInIpad">
        <% if (!_hideDescription)
           { %>
        <div id="tr_attach" class="ms-crm-AttachmentContainer">
            <% }
           else
           { %>
            <div class="ms-crm-AttachmentContainer">
                <% } %>
                <cnt:AppAttachment id="crmAttachment" runat="server"/>
                <% if (!_hideDescription)
                   { %>
                </div>
            </div>
            <div class="ms-crm-StatusContainer">
                <div class="ms-crm-Form-StatusBar">
                    <sdk:RenderStatusControl id="crmRenderStatus" runat="server"/>
                </div>
            </div>
            <% }
                   else
                   { %>
            </div>
</div>
<div class="notes_edit_tr_BtnClose ms-crm-StatusContainer">
    <div class="AppAttachment_Render_td2">
        <table style="width: 100%; table-layout: fixed;" cellspacing="0" cellpadding="0">
            <colgroup>


                <col width="12%"><col/><col width="87">
            </colgroup>
            <tbody>
            <tr>
                <td></td>
                <td></td>
                <td class="AppAttachment_Render_td6">
                    <ui:Button OnClick="closeWindow();" id="butClose" ResourceId="Button_Label_Close" runat="server"></ui:Button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</div>
<% } %>
</div>
<% if (_workflowNote)
   { %>
    <input type="hidden" id="hidSlugInfo" value="<%= SlugInfo %>"/>
<% } %>
</body>
</html>