<%@ Page language="c#" Inherits="Microsoft.Crm.Service.Web.Viewer" %>
<%@ Register TagPrefix="aspui" Namespace="System.Web.UI" Assembly="System.Web" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>

<!DOCTYPE html>
<html>
<head>
    <style type="text/css">







        body {
            position: absolute;
            width: 100%;
        }

        .comments_container {
            width: 184px;
            position: absolute;
            top: 48px;
            bottom: 24px;
            <% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
               { %>
            left: 0px;
            <% }
               else
               { %>
            right: 0px;
            <% } %>
        }

        #printMainDiv {
            top: 48px;
            bottom: 24px;
            position: absolute;
            left: 0px;
            right: 0px;
        }

        .article_container {
            <% if (isIOS)
               { %>
            -webkit-transform: translateZ(0);
            -webkit-overflow-scrolling: touch;
            overflow: auto;
            <% } %>
        }

        #statusBar {
            position: absolute;
            bottom: 0px;
            left: 0px;
            right: 0px;
        }
    </style>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script type="text/javascript" language="javascript">

        var minArticleBlockWidth = 59;
        var commentsBlockOriginalWidth = 184;
        var minWindowWidth = minArticleBlockWidth + commentsBlockOriginalWidth;

        var commentsBlock;

        Sys.Application.add_load(WindowOnLoad);

        function WindowOnLoad() {
            commentsBlock = $get('tdComments');

            $addHandler(window, "resize", ResizeWindowHandler);

            attachWindowOnUnload(OnPageUnload);
        }


        function ResizeWindowHandler(e) {
            if (commentsBlock.style.display == "none")
                return;

            var windowWidth = window.document.body.clientWidth;
            if (windowWidth < minWindowWidth) {
                var newCommentsWidth = windowWidth - minArticleBlockWidth;
                commentsBlock.style.width = newCommentsWidth + "px";
            } else {
                commentsBlock.style.width = commentsBlockOriginalWidth + "px";
            }

            <% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
               { %>
            $get('printMainDiv').style.left = commentsBlock.style.width;
            <% }
               else
               { %>
            $get('printMainDiv').style.right = commentsBlock.style.width;
            <% } %>
        }

        function OnPageUnload() {
            $removeHandler(window, "resize", ResizeWindowHandler);
            $removeHandler(window, "load", WindowOnLoad);
        }

        var bCommentIFrameSrcSet = false;


        function EmailArticle() {
            var isEmailSent = false;
            if (!IsNull(window.parent)) {
                if (!IsNull(window.parent.Mscrm.ReadFormUtilities) &&
                    window.parent.Mscrm.ReadFormUtilities.isRefreshForm()) {
                    window.parent.Mscrm.AddActivity.addActivityFromRefreshForm(Email, _guidContentId);
                    isEmailSent = true;
                } else if (!IsNull(window.parent.document.getElementById('crmFormSubmit')) &&
                    window.parent.document.getElementById('crmFormSubmit').crmFormSubmitId.value != "") {


                    window.parent.Mscrm.AddActivity.addActivityToForm(Email, _guidContentId);
                    isEmailSent = true;
                } else {
                    isEmailSent = false;
                }
            }

            if (!isEmailSent) {
                openObjEx(Email, null, null, "?contentId=" + _guidContentId);
            }
        }

        function ShowComments() {
            var message = "";
            var printMainElement = document.getElementById("printMainDiv");

            if (commentsBlock.style.display == "none") {
                if (!bCommentIFrameSrcSet) {

                    document.getElementById("frmComments").src = "comments.aspx?id=" + _guidContentId;
                    bCommentIFrameSrcSet = true;
                }
                commentsBlock.style.display = "inline";
                commentsBlock.style.width = "184px";

                <% if (!Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
                   { %>
                printMainElement.style.left = "0px";
                printMainElement.style.right = "184px";


                <% }
                   else
                   { %>
                printMainElement.style.right = "0px";
                printMainElement.style.left = "184px";
                <% } %>

                message = LOCID_KBVIEWER_HIDE;
            } else {
                commentsBlock.style.display = "none";
                printMainElement.style.right = "0px";
                printMainElement.style.left = "0px";
                message = LOCID_KBVIEWER_SHOW;
            }


            if (!IsNull($get('mnuShowComments'))) {
                var messageSpan = Mscrm.Utilities
                    .getChildElementsByClassName($get('mnuShowComments'), 'ms-crm-VS-MenuItem-Title')[1];
                messageSpan.innerHTML = message;
            }

            var btnShowCommentsElement = document.getElementById("btnShowComments");
            btnShowCommentsElement.removeAttribute("title");
            var iconImg = document.getElementById("ico_16_1082");
            var commentsButton = XUI.Html.DomUtils.GetNextSibling(iconImg);
            XUI.Html.SetText(commentsButton, message);
            commentsButton.setAttribute("title", message);
            iconImg.setAttribute("title", message);

        }

        function On(o) {
            o.style.borderColor = "#00377a";
            o.style.backgroundColor = "#64799c";
        }

        function Off(o) {
            o.style.borderColor = "";
            o.style.backgroundColor = "";
        }
    </script>
</head>
<body>

<div style="height: 48px">
    <div style="height: 25px" id="tdMenuContainer">
        <mnu:AppViewerMenuBar id="crmMenuBar" runat="server"/>
    </div>
</div>

<div id="printMainDiv" class="article_container">
    <div class="ms-crm-IE7-Height-Fix-Dummy-Container">
        <aspui:LiteralControl id="printMain" runat="server"/>
    </div>
</div>
<div id="tdComments" class="comments_container" style="display: none;">
    <div class="ms-crm-IE7-Height-Fix-Dummy-Container">
        <iframe id="frmComments" name="frmComments" style="height: 100%; width: 100%; overflow: auto; border: 0px;" src="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.Application.Utility.CrmUri.Create("/_static/blank.htm", Microsoft.Crm.Application.Security.UserInformation.Current).ToString()) %>"></iframe>
    </div>
</div>

<div class="ms-crm-Form-StatusBar" id="statusBar">&nbsp;</div>

</body>

</html>