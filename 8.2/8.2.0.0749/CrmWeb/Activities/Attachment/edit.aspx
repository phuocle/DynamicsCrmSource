<%@ Page language="c#" Inherits="Microsoft.Crm.Common.Web.Activities.ActivityAttachment" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm"%>
<%@ Import Namespace="System.Web" %>
<!DOCTYPE html>
<html>
<head>


    <cnt:AppHeader id="crmHeader" runat="server"/>
    <style type="text/css">

        DIV.ms-crm-Dialog-Header-Title {
            color: #262626 !important;
            font-size: <%= WebUtility.GetFontResourceForStyle("General.27px.font_size") %> !important;
            font-family: Segoe UI Tahoma, Arial, Helvetica, sans-serif;
            font-weight: 200;
        }

        DIV.ms-crm-Dialog-Header {
            top: 20px !important;
            bottom: 30px !important;
            padding-left: 30px !important;
            padding-right: 30px !important;
            border: none !important;
        }

        DIV.ms-crm-Dialog-Header-Desc { line-height: 22px !important; }

        td.AppAttachment_Render_td2 { border-top: none !important; }

        div.AppAttachment_Render_td2 { background-color: #F8F8F8 !important; }

        td.AppHtmlAppAttachment_Render_td3 { border: none !important; }

        td.AppAttachment_Render_td4,
        td.AppAttachment_Render_td5,
        td.AppAttachment_Render_td6 {
            text-align: right;
            <% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
               { %>
            padding-right: 3px;
            <% }
               else
               { %>
            padding-left: 3px;
            <% } %>
        }

        td.AppAttachment_Render_td6 {
            height: 44px !important;
            line-height: 0px;
        }

        .ms-crm-AttachmentContainer {
            top: 90px;
            <% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
               { %>
            padding-right: 30px;
            <% }
               else
               { %>
            padding-left: 30px;
            <% } %>
            position: absolute;
            bottom: 0px;
            width: 90%;
        }

        .ms-crm-BodyContainer {
            width: 100%;
            height: 100%;
            position: relative;
            overflow: auto;
        }



        .ms-crm-StatusContainer {
            height: 24px;
            width: 100%;
        }

        #btnUnfollow,
        #btnFollow,
        #butRemove,
        #butAttach,
        #butClose {
            width: auto;
            min-width: 84px;
            background-color: #FFFFFF;
            background-image: none !important;
            border-color: #C6C6C6;
            border-width: 1px;
            color: #444444;
            font-size: <%= WebUtility.GetFontResourceForStyle("General.11px.font_size") %>;
            font-family: Segoe UI;
        }

        #btnUnfollow:hover,
        #btnFollow:hover,
        #butRemove:hover,
        #butAttach:hover,
        #butClose:hover {
            background-color: #B1D6F0;
            background-image: none !important;
        }

    </style>
    <script type="text/javascript">

        Sys.Application.add_load(PageLoad);

        function PageLoad() {

            var inputElement = $get('userFile');
            $addHandler(inputElement, "change", MakeFormDirty);


            var descDiv = document.getElementById("headerdesc");
            if (!IsNull(descDiv)) {
                XUI.Html.SetText(descDiv, LOCID_ATTACHMENT_DESCRIPTION);
            }


            var w = window.document.body.clientWidth;
            var h = window.document.body.clientHeight;

            if (w != 600) w = 600;
            if (h != 280) h = 280;
            resizeWindow(w, h);


            if (window.location.search.indexOf("rg=1") != -1 && window.location.search.indexOf("refreshGrid") == -1) {
                try {
                    window.opener.auto($get('crmFormSubmitObjectType').value);
                } catch (e) {
                }
            }
            if (window.location.search.indexOf("cw=True") != -1) {
                closeWindow();
            }


            $find("crmForm").add_onSave(prevalidate);
        }

        function prevalidate(sender, args) {
            if (!validate()) {
                args.preventDefault();
            }
        }


        function MakeFormDirty() {
            var control = Mscrm.FormControlInputBehavior.GetBehavior('objectid')
            control.set_defaultValue(-1);
            control.set_forceSubmit(true);
        }

    </script>

</head>

<body>
<div class="ms-crm-BodyContainer">
    <frm:HardcodedForm id="crmForm" runat="server">
        <sdk:HiddenInputControl id="objectid" runat="server"/>
        <sdk:HiddenInputControl id="objecttypecode" runat="server"/>
    </frm:HardcodedForm>

    <div class="ms-crm-Dialog-Header">
        <div class="ms-crm-Dialog-Header-Title" id="tdDialogHeader">
            <loc:Text ResourceId="Web.Activities.Attachment.edit.aspx_56" runat="server"/>
        </div>
        <div class="ms-crm-Dialog-Header-Desc" id="headerdesc"></div>
    </div>
    <div class="ms-crm-AttachmentContainer">
        <cnt:AppAttachment id="crmAttachment" runat="server"/>
        <div class="AppAttachment_Render_td2">
            <table style="width: 100%; table-layout: auto;" cellspacing="0" cellpadding="0">
                <colgroup>
                    <col width="80%">
                    <col width="20">
                </colgroup>
                <tbody>
                <tr <%= GetEmailAttachmentInfo(1) %>>
                    <td style="text-align: left"><%= GetEmailAttachmentInfo() %></td>
                    <td class="AppAttachment_Render_td6" style="text-align: right">
                        <ui:button onclick="closeWindow();" id="butClose" resourceid="Button_Label_Close" runat="server"></ui:button>
                        &nbsp;&nbsp;&nbsp;
                    </td>
                </tr>
                <%= GetEmailAttachmentInfo(2) %>
                </tbody>
            </table>
            <div id="progressDiv" style="Position: fixed; Top: 43.5%; Left: 44.5%; display: none;">
                <table class='ms-crm-LoadingContainer' style='width: 100%; height: 100%'>
                    <tr class='ms-crm-LoadingContainer'>
                        <td style='vertical-align: middle' align='center'>
                            <img id='DialogLoadingDivImg' alt='' src='/_imgs/advfind/progress.gif'>
                            <br>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</div>
</body>
</html>