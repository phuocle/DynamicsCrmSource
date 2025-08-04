<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Common.Web.SelectDataProviderDialogPage" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Globalization" %>
<%@ Import Namespace="Microsoft.Crm" %>

<html>
<head>
<cnt:AppHeader runat="server" id="crmHeader"/>
<script language="JavaScript" type="text/javascript">
function applychanges()
{
var oUrl = getObjUrl(<%= _ObjType.ToString("D", CultureInfo.InvariantCulture) %>);
var s = oUrl.toString();
s += "&providerid=" + $get("selEntityDataProvider").value + <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(CurrentWrpcContext.GetWrpcTokenAsQueryString(Microsoft.Crm.Application.Utility.CrmUri.Create("/userdefined/edit.aspx", Microsoft.Crm.Application.Security.UserInformation.Current))) %>;
Mscrm.Utilities.setReturnValue(s);
closeWindow(true);
}

function cancel()
{
closeWindow();
}

$addHandler(window, "load", OnLoad);

function OnLoad() {
var cancelCrossbtn = document.getElementsByClassName("ms-crm-RefreshDialog-FirstTopButton");
if (cancelCrossbtn && cancelCrossbtn.length > 0) {
cancelCrossbtn[0].setAttribute("role", "button");
cancelCrossbtn[0].setAttribute("aria-label", "Close");
}

var descLabel = document.getElementsByClassName("ms-crm-RefreshDialog-Header-Desc");
if (descLabel && descLabel.length > 0) {
descLabel[0].removeAttribute("title");
}
}

</script>
</head>

<body role="dialog" aria-labelledby="dialogHeaderTitle">
<frm:DialogForm id="crmForm" runat="server">
<table cellspacing="0" role="presentation" cellpadding="3" width="100%">
<tr>
<td>
<ui:Select id="selEntityDataProvider" TabIndex="0" role="combobox" aria-readonly="true" runat="server"/>
</td>
</tr>
</table>
</frm:DialogForm>
</body>
</html>
