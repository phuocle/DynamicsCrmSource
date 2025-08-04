<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Default" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<!DOCTYPE html>
<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <title>
        <loc:Text ResourceId="Web.default.aspx_99" runat="server"/>
    </title>
</head>
<noscript>
    <div style="padding: 10px; background-color: #C9C7BA;">
        <span class="warningHeader">
            <loc:Text ResourceId="Web.default.aspx_22" runat="server"/>
        </span>
        <hr size="1" color="#000000">
        <span class="warningDescription">
            <% if (Request.Browser.Browser == "IE")
               { %>
                <loc:Text ResourceId="Web.loader.aspx_sec_warning" Encoding="None" runat="server">
                    <loc:Argument runat="server">
                        <i><% = Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(GenerateServerUrl()) %></i>
                    </loc:Argument>
                </loc:Text><br><br>
                <loc:Text ResourceId="Web.default.aspx_Steps" Encoding="None" runat="server"/>
                <br><br>
                <loc:Text ResourceId="Web.default.aspx_Step1" Encoding="None" runat="server"/>
                <br><br>

                <loc:Text ResourceId="Web.default.aspx_Step2" Encoding="None" runat="server"/>
                <br><br>

                <loc:Text ResourceId="Web.default.aspx_Step3" Encoding="None" runat="server"/>
                <br><br>

                <loc:Text ResourceId="Web.default.aspx_Step4" Encoding="None" runat="server">
                    <loc:Argument runat="server">
                        <i><% = Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(GenerateServerUrl()) %></i>
                    </loc:Argument>
                </loc:Text>
            <% }
               else
               { %>
                <loc:Text ResourceId="Web.loader.nonIE.aspx_sec_warning" Encoding="None" runat="server"/>
            <% } %>
        </span>
    </div>
</noscript>
<script type="text/javascript">

    function load() {
        var isLoaded = false;

        if (window.screen.width < 768) {
            alert(LOCID_SCREEN_RESOLUTION_ERROR);
        } else {

            try {
                if (!IsNull(openStdWin(Mscrm.CrmUri.create("/main.aspx"),
                    "MSCRM_MAIN",
                    0,
                    0,
                    "menubar=0, location=0, resizable=1, status=1"))) {
                    isLoaded = true;
                }
            } catch (e) {
            }
        }


        if ((window.name != "MSCRM_MAIN") && (isLoaded == true)) {

            var oMe = window.self;
            oMe.opener = window.self;
            closeWindow();
        }
    }


    function ActiveXTest() {
        if ('ActiveXObject' in window) {
            try {
                return new ActiveXObject("Microsoft.XMLDOM");
            } catch (e) {
                return false;
            }
        }


        return true;
    }

    function XmlTest() {
        try {
            return oXmlHttp = new XMLHttpRequest();
        } catch (e) {
            return false;
        }
    }


    function ScriptTest() {
        try {

            var sDate = new Date().toDateString();
            return true;
        } catch (e) {
            return false;
        }
    }

    function PageOnLoad() {
        if (ActiveXTest()) {

            if (XmlTest()) {
                if (ScriptTest()) {
                    <%
                        if (AppMode)
                        {
                            Response.Write("load();");
                        }
                        else
                        {
                            string queryString = this.GetAppModuleQuery();
                            queryString = String.IsNullOrEmpty(queryString) ? "" : "?" + queryString;
                            Response.Write(@"window.location.replace(" + Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(Microsoft.Crm.Application.Utility.CrmUri.Create("/main.aspx", Microsoft.Crm.Application.Security.UserInformation.Current).ToString() + queryString) + @");");
                        }
                    %>
                } else {
                    window.location.replace(Mscrm.CrmUri.create("/_common/error/unsupportedScriptVersion.aspx")
                        .toString());
                }
            } else {
                window.location.replace(Mscrm.CrmUri.create("/_common/error/unsupportedXmlDom.aspx").toString());
            }
        } else {
            window.location.replace(Mscrm.CrmUri.create("/_common/error/unsupportedSecurity.aspx").toString());
        }
    }

    $addHandler(window, "load", PageOnLoad);
</script>
<%
    if (AppMode)
    {
%>
    <body style="font-size: <%= Microsoft.Crm.Application.Utility.WebUtility.GetFontResourceAttribute("General.12px.font_size") %>;">

    <loc:Text ResourceId="Web.default.aspx_24a" Encoding="None" runat="server">
        <loc:Argument runat="server">
            <span onclick="load();" style="cursor: pointer; font-weight: <%= Microsoft.Crm.Application.Utility.WebUtility.GetFontResourceAttribute("General.Bold.font_weight") %>; color: #0000ff; text-decoration: underline;">
        </loc:Argument><loc:Argument runat="server"></span></loc:Argument>
    </loc:Text>
    <br><br>
    <loc:Text ResourceId="Web.default.aspx_24b" Encoding="None" runat="server"/>

    </body>
<%
    }
%>
</html>