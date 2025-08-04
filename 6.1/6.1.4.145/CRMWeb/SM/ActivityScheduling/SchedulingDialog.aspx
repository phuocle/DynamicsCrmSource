<%@ Page language="c#" Inherits="Microsoft.Crm.Common.Application.Dialogs.SM.ActivitySchedulingDialog" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="pigs" Namespace="Microsoft.Crm.Application.Pages" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="relInfo" Namespace="Microsoft.Crm.Application.Controls.RelatedInformation" Assembly="Microsoft.Crm.Application.Components.Application" %>

<frm:HardcodedForm id="crmForm" runat="server">

<div style="width:98%;height:100%;position:absolute;">
<div id="serviceActivityContainer" class="ms-crm-absolutePosition" style="height:300px;min-width: 550px;">
<div id="formBodyContainer" class="ms-crm-FormBodyContainer ms-crm-FormBodyRIExpanded" style="overflow: hidden">
<div class="ms-crm-IE7-Height-Fix-Dummy-Container">
<div style="height:100%;width:100%">
<table cellpadding="3" cellspacing="0" width="100%" style="TABLE-LAYOUT:fixed;">

<tr style="height:0px;padding:0px;margin:0px;border:0px;">
<td width="135"></td>
<td width="50%"></td>
<td width="50%"></td>
</tr>
<tr style="height:20px">
<frm:FormCell runat="server" id="CustomersCell" ShowLabel="True" ColumnSpan="2"><sdk:PartyListControl id="customers" TabIndex="1" LookupStyle="multi" runat="server"/></frm:FormCell>
</tr>
<tr>
<cnt:AppPrintDividerControl runat="server" colspan="3" ID="ServiceConstraints"/>
</tr>
<tr>
<frm:FormCell runat="server" id="ServiceCell" ShowLabel="True" ColumnSpan="2"><sdk:LookupControl id="serviceid" TabIndex="2" LookupStyle="single" OnSelect="ServiceLookupChanged()" runat="server"/></frm:FormCell>
</tr>
<tr>
<frm:FormCell runat="server" id="ResourcesCell" ShowLabel="True" ColumnSpan="2"><sdk:PartyListControl id="resources" TabIndex="3" LookupStyle="multi" runat="server"/></frm:FormCell>
</tr>
<tr>
<frm:FormCell runat="server" id="SiteCell" ShowLabel="True" ColumnSpan="2"><sdk:LookupControl id="siteid" TabIndex="4" LookupStyle="single" runat="server"/></frm:FormCell>
</tr>
<tr>
<cnt:AppPrintDividerControl runat="server" colspan="3" id="RequestedTime"/>
</tr>
<tr>
<frm:FormCell runat="server" id="StartDateCell" ShowLabel="True"><ui:Select id="SearchStartDate" TabIndex="5" OnChange="StartDateChanged()" runat="server"/></frm:FormCell>
<td>
<span id="specificDateArea" style="display:none"><ui:DateTimeUI id="SearchSpecificDate" runat="server" TabIndex="6" AllowBlankDate="False" DisplayFormat="date"/><label class="ms-crm-Hidden" for="SearchSpecificDate"><loc:Text ResourceId="ServiceScheduling.Activity.SpecificDate.label" runat="server"/></label></span>
<span id="rangeOfDatesForDaysArea" class="SchedulingDialog_span_DatesForDaysArea"><loc:Text ResourceId="For_These_Days" runat="server"/></span>
</td>
</tr>
<tbody id="rangeOfDatesArea" style="display:none">
<tr>
<td colspan="2" valign="top" nowrap>
<table width="100%">
<tr>
<td style="white-space: nowrap"><input type="checkbox" id="DateRangeAfterCheckBox" name="DateRangeAfterCheckBox" style='width:20px;border:0px;' tabindex="7" checked/> <label for="DateRangeAfterCheckBox"><loc:Text ResourceId="On_Or_After" runat="server"/></label> </td>
<td><ui:DateTimeUI id="SearchDateAfter" runat="server" TabIndex="8" AllowBlankDate="True" DisplayFormat="date" /><label class="ms-crm-Hidden" for="SearchDateAfter"><loc:Text ResourceId="ServiceScheduling.Activity.SearchAfterDate.label" runat="server"/></label></td>
</tr>
<tr>
<td style="white-space: nowrap; vertical-align: top"><input type="checkbox" id="DateRangeBeforeCheckBox" name="DateRangeBeforeCheckBox" style='width:20px;border:0px;' tabindex="9" checked/> <label for="DateRangeBeforeCheckBox"><loc:Text ResourceId="On_Or_Before" runat="server"/></label> </td>
<td style="width:100%;vertical-align: top"><ui:DateTimeUI id="SearchDateBefore" runat="server" TabIndex="10" AllowBlankDate="True" DisplayFormat="date" /><label class="ms-crm-Hidden" for="SearchDateBefore"><loc:Text ResourceId="ServiceScheduling.Activity.SearchBeforeDate.label" runat="server"/></label></td>
</tr>
<tr>
<td colspan="2">
<relInfo:ContextHelper runat="server" onChangeClientHandler="SearchDayOfWeekChanged(dayOfWeek)" id="DayOfWeek" ContextControlId="SearchStartDate" FocusControlIds="DayOfWeekAll,DayOfWeek0,DayOfWeek1,DayOfWeek2,DayOfWeek3,DayOfWeek4,DayOfWeek5,DayOfWeek6"/>
</td>
</tr>
</table>
</td>
<td style="white-space: nowrap; vertical-align: top">
<table width="100%">
<tr>
<td nowrap><input type="checkbox" id="DayOfWeekAll" name="DayOfWeekAll" style="border:0px; width:20px" runat="server" TabIndex="11" checked onclick="UpdateDaysCheckboxes();"/><label for="DayOfWeekAll"><loc:Text ResourceId="Days_Of_Week_Select_All" runat="server"/></label></td>
<td nowrap><input type="checkbox" id="DayOfWeek3"   name="DayOfWeek3"   style="border:0px; width:20px" runat="server" TabIndex="12" disabled/><label for="DayOfWeek3"><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(DayOfWeekName3)%></label></td>
</tr>
<tr>
<td nowrap><input type="checkbox" id="DayOfWeek0"   name="DayOfWeek0"   style="border:0px; width:20px" runat="server" TabIndex="11" disabled/><label for="DayOfWeek0"><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(DayOfWeekName0)%></label></td>
<td nowrap><input type="checkbox" id="DayOfWeek4"   name="DayOfWeek4"   style="border:0px; width:20px" runat="server" TabIndex="12" disabled/><label for="DayOfWeek4"><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(DayOfWeekName4)%></label></td>
</tr>
<tr>
<td nowrap><input type="checkbox" id="DayOfWeek1"   name="DayOfWeek1"   style="border:0px; width:20px" runat="server" TabIndex="11" disabled/><label for="DayOfWeek1"><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(DayOfWeekName1)%></label></td>
<td nowrap><input type="checkbox" id="DayOfWeek5"   name="DayOfWeek5"   style="border:0px; width:20px" runat="server" TabIndex="12" disabled/><label for="DayOfWeek5"><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(DayOfWeekName5)%></label></td>
</tr>
<tr>
<td nowrap><input type="checkbox" id="DayOfWeek2"   name="DayOfWeek2"   style="border:0px; width:20px" runat="server" TabIndex="11" disabled/><label for="DayOfWeek2"><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(DayOfWeekName2)%></label></td>
<td nowrap><input type="checkbox" id="DayOfWeek6"   name="DayOfWeek6"   style="border:0px; width:20px" runat="server" TabIndex="12" disabled/><label for="DayOfWeek6"><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(DayOfWeekName6)%></label></td>
</tr>
</table>
</td>
</tr>
</tbody>
<tr>
<frm:FormCell runat="server" id="StartTimeCell" ShowLabel="True"><ui:Select id="SearchStartTime" OnChange="StartTimeChanged()" TabIndex="13" runat="server"/></frm:FormCell>
<td>
<span id="specificTimeArea" style="display:none"><ui:DateTimeUI id="SearchSpecificTime" TabIndex="14" runat="server" AllowBlankDate="False" DisplayFormat="time" /><label class="ms-crm-Hidden" for="SearchSpecificTime"><loc:Text ResourceId="ServiceScheduling.Activity.SpecificTime.label" runat="server"/></label></span>
<table cellpadding="0" cellspacing="0" width="100%" id="rangeOfTimesArea" dir="ltr">
<tr>
<td><ui:DateTimeUI id="SearchTimeAfter" TabIndex="15" runat="server" DisplayFormat="time" AllowBlankDate="False"/><label class="ms-crm-Hidden" for="SearchTimeAfter"><loc:Text ResourceId="ServiceScheduling.Activity.StartTime.label" runat="server"/></label></td>
<td class="SchedulingDialog_td_SearchTimeSep" width="1%">-</td>
<td><ui:DateTimeUI id="SearchTimeBefore" TabIndex="17" runat="server" DisplayFormat="time" AllowBlankDate="False"/><label class="ms-crm-Hidden" for="SearchTimeBefore"><loc:Text ResourceId="ServiceScheduling.Activity.EndTime.label" runat="server"/></label></td>
</tr>
</table>
</td>
</tr>
<tr>
<td class="ms-crm-Field-Required" id="duration_c"><label for="SearchDurationMinutes"><loc:Text ResourceId="Form_Label_Duration" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>
<td>
<div id="SearchDurationBlock">
<sdk:DurationControl runat="server" TabIndex="18" id="SearchDurationMinutes" Disabled="true"/>
</div>
</td>
<td><input type="checkbox" id="UseDefaultDuration" name="UseDefaultDuration" onclick="ShowHideSearchDuration();" style='width:20px;border:0px;' TabIndex="19" value="true" checked><label for="UseDefaultDuration"><loc:Text ResourceId="Use_Default_Duration" runat="server"/></label></td>
</tr>
<tr>
<td colspan="3" style="text-align: center;vertical-align: bottom;">
<pigs:DialogButton ID="SearchButton" CssClass="ms-crm-RefreshDialog-Button" OnClick="Search();" TabIndex="22" ResourceId="Button_Label_Search" runat="server" />
<pigs:DialogButton ID="CancelSearchButton" CssClass="ms-crm-RefreshDialog-Button" OnClick="CancelSearch(new Sys.UI.DomEvent(event));" TabIndex="22" ResourceId="Button_Label_CancelSearch" Hidden="true" runat="server" />
</td>
</tr>
</table>
</div>
</div>
</div>
<div id="tdRelatedInformationPane" class="RelatedInformationPaneContainer RelatedInformationPaneExpandedContainer" style="overflow:auto">
<div style="position:relative;height:100%;">
<sdk:RelatedInformationControl runat="server" id="RelatedInformationPane" TabIndex="30"/>
</div>
</div>
</div>
<div id="gridContainer" class="ms-crm-absolutePosition" style="top:300px;min-height:169px;width:100%">
<table cellspacing="0" cellpadding="0" width="100%">
<tr>
<cnt:AppPrintDividerControl runat="server" id="SearchResults"/>
</tr>
</table>
<div class="ms-crm-absolutePosition" style="width:100%;top:21px;bottom:10px">
<div class="ms-crm-IE7-Height-Fix-Dummy-Container">
<cnt:AppGrid id="crmGrid" runat="server"/>
</div>
</div>
</div>
</div>

</frm:HardcodedForm>