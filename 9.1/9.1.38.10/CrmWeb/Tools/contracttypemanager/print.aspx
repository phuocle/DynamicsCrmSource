<%@ Page language="c#" Inherits="Microsoft.Crm.Service.Web.Tools.ContractTemplatePrintPage" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm"%>
<%@ Import Namespace="System.Globalization" %>
<%@ Import Namespace="Microsoft.Crm.Application.Security" %>
<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
</head>

<body>

<div class="ms-crm-PrintContactTypeEditorForm">

<frm:HardcodedForm id="crmForm" runat="server">
<table cellspacing="5"  class="ms-crm-ContentTable ms-crm-ZeroedCellPadding">
<col class="contracttypemanager_print_col_1" /><col /><col class="contracttypemanager_print_col_3" /><col />
<tr>
<frm:FormCell runat="server"><sdk:TextBoxControl id="name" RenderMode="Print" runat="server"/></frm:FormCell>
<frm:FormCell runat="server"><sdk:TextBoxControl id="abbreviation" RenderMode="Print" runat="server"/></frm:FormCell>
</tr>
<tr>
<frm:FormCell runat="server"><sdk:PicklistControl id="billingfrequencycode" RenderMode="Print" runat="server" /></frm:FormCell>
<frm:FormCell runat="server"><sdk:PicklistControl id="allotmenttypecode" RenderMode="Print" runat="server" /></frm:FormCell>
</tr>
<tr>
<frm:FormCell runat="server"><sdk:PicklistControl id="contractservicelevelcode" RenderMode="Print" runat="server" /></frm:FormCell>
<frm:FormCell runat="server"><sdk:PicklistControl id="usediscountaspercentage" RenderMode="Print" runat="server" /></frm:FormCell>
</tr>
<tr class="ms-crm-DescriptionRow">
<frm:FormCell Colspan="2" runat="server"><sdk:TextAreaControl id="description" Height="75px" RenderMode="Print" runat="server" /></frm:FormCell>
</tr>
<tr>
<td class="ms-crm-Field-Label-Print"><loc:Text ResourceId="Web.Tools.contracttypemanager.edit.aspx_241" runat="server"/></td>
<td colspan="3"><cnt:AppContractCalendar AppContractCalendarDisabled="true" id="effectivitycalendar" runat="server"/></td>
</tr>
</table>
</frm:HardcodedForm>
</div>

</body>
</html>
