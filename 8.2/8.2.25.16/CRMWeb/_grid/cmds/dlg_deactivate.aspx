<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.DeactivateDialogPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Globalization" %>

<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<script language="JavaScript">


var _sAction = "deactivate";
var _iObjType = <%=ObjType.ToString("D", CultureInfo.InvariantCulture)%>;
var _statusCode;
var _stateCode;
Sys.Application.add_load(PageOnLoad);
function PageOnLoad()
{
_stateCode = Mscrm.FormControlInputBehavior.GetBehavior('stateCode');
_statusCode = Mscrm.FormControlInputBehavior.GetBehavior('statusCode');
<%
if (ObjType == Microsoft.Crm.Util.BusinessUnit && !CanDeleteBUs())
{
%>
alert(LOCID_BU_CANNOTDISABLE);
closeWindow(true);
<%
}
%>
}

function applychanges()
{
if(Mscrm.Utilities.enforceStateTransitions())
{
bulkChangeState(true);
}
else
{
<%=ok%>
}
}

<%

if (cancel != String.Empty)
{
%>
function cancel()
{
<%=cancel%>
}
<%
}
%>

function confirmMode(b)
{
<%
if (actMode)
{
%>
if (b)
{
var o = new Object();
o.iStateCode  = (IsNull(_stateCode))?  -1 : _stateCode.get_dataValue();
if(IsNull(_statusCode))
{
o.iStatusCode = -1;
}
else
{
o.iStatusCode = _statusCode.get_dataValue();
}

if (o.iStateCode == -1 && !IsNull(_statusCode) && !IsNull(_statusCode.get_selectedIndex()) &&
!IsNull(_statusCode.get_element()[_statusCode.get_selectedIndex()]) &&
!IsNull(_statusCode.get_element()[_statusCode.get_selectedIndex()].parentNode.getAttribute('state')))
{
o.iStateCode = _statusCode.get_element()[_statusCode.get_selectedIndex()].parentNode.getAttribute('state');
}
window.returnValue = o;
}
else
{
window.returnValue = false;
}
<%
}
else
{
%>
window.returnValue = b;
<%
}
%>
Mscrm.Utilities.setReturnValue(window.returnValue);
closeWindow(true);
}

function bulkChangeState(b)
{
<%
if (actMode)
{
%>
if (b)
{
var iStateCode  = (IsNull(_stateCode))?  -1 : _stateCode.get_dataValue();
var iStatusCode = -1;
if(!IsNull(_statusCode))
{
iStatusCode = _statusCode.get_dataValue();
}
_custParams += "&iStateCode=" + iStateCode + "&iStatusCode=" + iStatusCode;
go();
}
else
{
Mscrm.Utilities.setReturnValue(b);
closeWindow(true);
}
<%
}
else
{
%>
Mscrm.Utilities.setReturnValue(b);
closeWindow(true);
<%
}
%>
}

</script>
</head>

<body scroll="no">

<frm:DialogForm id="crmForm" runat="server">
<loc:Text id="FormTextTitle" runat="server"/>
<div id="FormTextOkCancelDiv" runat="server">
<br />
<loc:Text id="FormTextOk" runat="server"/>
<br />
<loc:Text id="FormTextCancel" runat="server"/>
</div>
<div id="StatusPickerDiv" runat="server">
<br />
<table cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed">
<col width="80"><col>
<tr>
<td class="dlg_deactivate_td_status"><label for="statusCode"><loc:Text ResourceId="Web._grid.cmds.dlg_deactivate.aspx_87" runat="server"/></label></td>
<td>
<sdk:PicklistStatusControl runat="server" id="statusCode"/>
<sdk:PicklistControl runat="server" id="stateCode"/>
</td>
</tr>
</table>
</div>
<div id="WarningMessageDiv" runat="server">
<br />
<table cellpadding="0" cellspacing="0" width="100%" >
<tr>
<td class="ms-crm-Dialog-Info-Icon" valign="middle">
<img alt="" src="/_imgs/error/notif_icn_info16.png" />
</td>
<td>
<loc:Text id="WarningTextTitle" ResourceId="Web._grid.cmds.dlg_deactivate.aspx_90" runat="server"/>
</td>
</tr>
</table>
</div>
</frm:DialogForm>

</body>
</html>
