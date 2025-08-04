<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.Trial.TrialReminderPage" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Web"%>



<table cellpadding="8" cellspacing="0"  style="width:100%; height:100%; overflow:scroll">
<colgroup>
<col style="width:100px" />
<col />
</colgroup>
<tr valign="middle">
<td><img alt="" src="/_imgs/error/err_48_2.gif" /></td>
<td><div><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(_message)%><br /><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(_details)%></div></td>
</tr>
</table>
