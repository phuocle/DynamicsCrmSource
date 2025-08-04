<!DOCTYPE HTML>
<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.HelpSystemTopBar" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Controls" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<!DOCTYPE html>
<html>
<head>
<cnt:AnonymousHeader id="crmHeader" runat="server" />
<script type="text/javascript">





var contentArea = null;
Sys.Application.add_load(function(){
Initialize();
window.top.focus();
});

function showTOC()
{

if ( LOCID_UI_DIR == "RTL" )
{
if (contentArea.cols == "*,260")
{
hideTOCLocal();
}
else
{
showTOCLocal();
}
}
else
{
if (contentArea.cols == "260,*")
{
hideTOCLocal();
}
else
{
showTOCLocal();
}
}
}

function showTOCLocal()
{

if ( LOCID_UI_DIR == "RTL" )
{
top.resizeBy(280,0);
contentArea.cols = "*,260";

XUI.Html.DomUtils.GetLastChild(contentArea).style.display = "inline";
}
else
{
top.moveBy(-280,0);
top.resizeBy(280,0);
contentArea.cols = "260,*";

XUI.Html.DomUtils.GetFirstChild(contentArea).style.display = "inline";
}
XUI.Html.SetText(XUI.Html.DomUtils.GetLastChild(XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild(butTOC))), LOCID_HIDE_TOC);
}

function hideTOCLocal()
{

if ( LOCID_UI_DIR == "RTL" )
{
top.moveTo(top.screenLeft, top.screenTop-23) ;
top.resizeBy(-280,0);
contentArea.cols = "*,0";


XUI.Html.DomUtils.GetLastChild(contentArea).style.display = "none";
}
else
{
top.moveBy(280,0);
top.resizeBy(-280,0);
contentArea.cols = "0,*";


XUI.Html.DomUtils.GetFirstChild(contentArea).style.display = "none";
}
XUI.Html.SetText(XUI.Html.DomUtils.GetLastChild(XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild(butTOC))), LOCID_SHOW_TOC);
}






function Initialize()
{
contentArea = top.document.getElementById('contentArea');


if (LOCID_UI_DIR == "RTL")
{
if (contentArea.cols == "*,0")
{
XUI.Html.DomUtils.GetLastChild(contentArea).style.display = "none";
XUI.Html.SetText(XUI.Html.DomUtils.GetLastChild(XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild(butTOC))), LOCID_SHOW_TOC);
}
else
{
XUI.Html.SetText(XUI.Html.DomUtils.GetLastChild(XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild(butTOC))), LOCID_HIDE_TOC);
}
}
else
{
if (contentArea.cols == "0,*")
{
XUI.Html.DomUtils.GetFirstChild(contentArea).style.display = "none";
}

}
}


</script>
</head>
<body>

<div style="width:100%;height:100%">
<div id="tdMenuContainer" style="width:100%;height:100%">
<crm:MenuBar id="crmHelpMenuBar" runat="server"/>
</div>
</div>

</body>
</html>