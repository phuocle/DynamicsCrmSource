<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Controls.ATPopup.ATPopupMenu" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>
<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader runat="server" id="crmHeader"/>
<script type="text/javascript" language="javascript">

function getMenuItemElem(e)
{
var o = e.target;

while (o.tagName != "HTML" && o.tagName != "LI")
{
o = o.parentNode;
}

return o;
}

function MenuOnReady()
{
attachWindowOnUnload(MenuOnClose);

var oArgs = getDialogArguments();
oArgs.menuHtc.loadATMenu(window, oArgs.atMenu);
if (oArgs.menuHtc.clickedATMenuItem)
{
$addHandler(window.document.body, "click", oArgs.menuHtc.clickedATMenuItem);
}
else
{
$addHandler(window.document.body, "click", MenuItemClicked);
}
}

function MenuOnClose()
{
var oArgs = getDialogArguments();
oArgs.menuHtc.notifyATMenuClose();
}

Sys.Application.add_load(MenuOnReady);

function MenuItemClicked(e)
{
var oMenuItem = getMenuItemElem(e);
if (!IsNull(oMenuItem))
{
var oArgs = getDialogArguments();
if (IsNull(oMenuItem.action))
{
oArgs.menuHtc.executeATMenu(oMenuItem.menu);
}
else
{
oArgs.menuHtc.executeATClick(oMenuItem);
}
}
}

function closeATWindow()
{
var oArgs = getDialogArguments();
oArgs.menuHtc._okPress = true;
closeWindow();
}

</script>
<title></title>
</head>
<body onkeypress="if(new Sys.UI.DomEvent(event).charCode == 27){return closeWindow();}">
<table width="100%" cellpadding="0">
<tr>
<td>

</td>
</tr>
</table>
</body>