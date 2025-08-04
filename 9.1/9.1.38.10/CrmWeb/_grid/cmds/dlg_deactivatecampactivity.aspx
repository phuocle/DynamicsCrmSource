<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.DeactivateCampActivityDialogPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Globalization" %>

<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<script language="JavaScript">


var _sAction = "deactivatecampactivity";
var _iObjType = <%=ObjType.ToString("D", CultureInfo.InvariantCulture)%>;
var _sStartDate;
var _sEndDate;
var _txtStartDate = null;
var _txtEndDate = null;
Sys.Application.add_load(function() {
_txtStartDate = Mscrm.FormControlInputBehavior.GetBehavior('txtStartDate');
_txtEndDate = Mscrm.FormControlInputBehavior.GetBehavior('txtEndDate');
attachTimeControlEvents();
var dataValue = _txtStartDate.get_dataValue();
if (!IsNull(dataValue))
{
_sStartDate = dataValue;
}
dataValue = _txtEndDate.get_dataValue();
if (!IsNull(dataValue))
{
_sEndDate = dataValue;
}
});

function attachTimeControlEvents( )
{
_txtStartDate.add_change(actualStartChanged);
_txtEndDate.add_change(actualEndChanged);
}

function actualStartChanged( )
{

if ( (!IsNull(_sStartDate)) &&  (IsNull(_txtStartDate.get_dataValue())) )
{
alert(LOCID_STARTDATE_CANNOT_EMPTY);
_txtStartDate.set_dataValue(_sStartDate);
}
if( !IsNull(_txtStartDate.get_dataValue()) && !IsNull(_txtEndDate.get_dataValue()))
{
try
{

if(_txtEndDate.get_dataValue() < _txtStartDate.get_dataValue())
{
alert(LOCID_STARTDATE_GREATERTHAN_END);
_txtStartDate.set_dataValue(_sStartDate);
}
}
catch (e) {}
}
}
function actualEndChanged( )
{
if ( (!IsNull(_sEndDate))  &&  (IsNull(_txtEndDate.get_dataValue()))) {
alert(LOCID_ENDDATE_CANNOT_EMPTY);
_txtEndDate.set_dataValue(_sEndDate);
}
if( !IsNull(_txtEndDate.get_dataValue()) && !IsNull(_txtStartDate.get_dataValue())) {
try {

if(_txtEndDate.get_dataValue() <  _txtStartDate.get_dataValue()) {
alert(LOCID_ENDDATE_LESSTHAN_START);
_txtEndDate.set_dataValue(_sEndDate);
}
}
catch (e) {}
}
}


function applychanges()
{
<%=ok%>
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
o.iStateCode  = ("undefined" == typeof(Mscrm.FormControlInputBehavior.GetBehavior('stateCode')))?  -1 : Mscrm.FormControlInputBehavior.GetBehavior('stateCode').get_dataValue();
o.iStatusCode = (IsNull(Mscrm.FormControlInputBehavior.GetBehavior('statusCode')))? -1 : Mscrm.FormControlInputBehavior.GetBehavior('statusCode').get_dataValue();
if (_txtStartDate.get_dataValue() != null)
{
o.iStartDate = ("undefined" == typeof(_txtStartDate))? -1 : FormatUtcDateTime(_txtStartDate.get_dataValue());
}
else
{
o.iStartDate = "";
}
if (_txtEndDate.get_dataValue() != null)
{
o.iEndDate = ("undefined" == typeof(_txtEndDate))? -1 : FormatUtcDateTime(_txtEndDate.get_dataValue());
}
else
{
o.iEndDate = "";
}
Mscrm.Utilities.setReturnValue(o);
}
else
{
Mscrm.Utilities.setReturnValue(false);
}


<%
}
else
{
%>
Mscrm.Utilities.setReturnValue(b);
<%
}
%>
closeWindow(true);
}


</script>
</head>

<body>

<frm:DialogForm id="crmForm" runat="server">
<loc:Text ResourceId="Web._grid.cmds.dlg_deactivatecampactivity.aspx_85" runat="server"></loc:Text>
<br><br>
<table cellpadding="0" border=0 bordercolor=red cellspacing="0" width="100%" style="table-layout:fixed">
<col width="80"></col>
<tr>
<td width=25% class="dlg_deactivatecampactivity_td_status"><label for="statusCode"><loc:Text ResourceId="Web._grid.cmds.dlg_deactivate.aspx_87" runat="server"/></label></td>
<td width=55% class="dlg_deactivatecampactivity_td_status">
<sdk:PicklistStatusControl runat="server" id="statusCode"/>
<sdk:PicklistControl runat="server" id="stateCode"/>
</td>
<td width=20%>&nbsp;</td>
</tr>
<tr>
<td>
&nbsp;
</td>
</tr>
<tr>
<td class="dlg_deactivatecampactivity_td_StartDate"><label for="txtStartDate"><loc:Text ResourceId="Web._grid.cmds.dlg_deactivate.aspx_88" runat="server"/></label></td>
<td>
<sdk:DateTimeControl id="txtStartDate" runat="server" />
</td>
</tr>
<tr>
<td>
&nbsp;
</td>
</tr>
<tr>
<td class="dlg_deactivatecampactivity_td_EndDate"><label for="txtEndDate"><loc:Text ResourceId="Web._grid.cmds.dlg_deactivate.aspx_89" runat="server"/></label></td>
<td>
<sdk:DateTimeControl id="txtEndDate" runat="server" />
</td>
</tr>

</table>
</frm:DialogForm>

</body>
</html>
