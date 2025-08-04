<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.Performance.PerformancePage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>

<html>

<script type="text/javascript" language="javascript">
function expand()
{

for (var i = 0; i < event.srcElement.parentNode.childNodes.length; i++)
{
var oNode = event.srcElement.parentNode.childNodes[i];
if ("DetailsMaster" == oNode.id)
{
if (oNode.style.display == "inline")
oNode.style.display = "none";
else
oNode.style.display = "inline";
event.cancelBubble = true;
break;
}
}
}
function reveal()
{

var allDivs = document.all.tags("div");
if ((null == allDivs) || (0 == allDivs.length))
return;
for (var i = 0; i < allDivs.length; i++)
{
var details = allDivs[i].all.namedItem("Details");
if (null != details)
allDivs[i].style.display = "inline";
}
}

function Trim(input)
{
var lre = /^\s*/;
var rre = /\s*$/;
input = input.replace(lre, "");
input = input.replace(rre, "");
return input;
}


function CheckForTestFile()
{
var file = document.getElementById('<%=FileUpload1.ClientID%>');
var fileName=file.value;

if (Trim(fileName) =='' )
{
alert("Please select a file to upload!!!");
file.focus();
return false;
}


var extArray = new Array(".xml");


while (fileName.indexOf("\\") != -1)
fileName = fileName.slice(fileName.indexOf("\\") + 1);


var ext = fileName.slice(fileName.lastIndexOf(".")).toLowerCase();


for (var i = 0; i < extArray.length; i++)
{
if (extArray[i] == ext)
{
return true;
}
}
alert("Please only upload files that end in types:  "
+ (extArray.join("  ")) + "\nPlease select a new "
+ "file to upload and submit again.");
file.focus();
return false;
}

</script>

<head>
<cnt:AnonymousHeader id="crmHeader" runat="server" />
<title>Performance Report</title>
</head>
<body onload="reveal();" enableviewstate="false">
<form id="PerformanceForm" action="Performance.aspx" runat="server">
<table width="100%" style="border: black thin solid; background-color: LightSteelBlue;">
<tr>
<td>
<b>Sorting:</b>&nbsp;<br />
<asp:DropDownList ID="DropDownList" runat="server" AutoPostBack="True">
<asp:ListItem Selected="True" Value="ByTimestamp">By time stamp</asp:ListItem>
<asp:ListItem Value="ByTimeToProcess">By time to process</asp:ListItem>
<asp:ListItem Value="BySqlRecordsAffected">By number of sql records affected</asp:ListItem>
</asp:DropDownList>
<asp:ImageButton ID="RefreshImageButton" AlternateText="Refresh" ImageUrl="~/_imgs/grid/refresh16.gif" runat="server" />
&nbsp;
<asp:CheckBox ID="OrganizationCheckBox" Text="Filter by Organization" Checked="true" runat="server" AutoPostBack="True" />
&nbsp;
<b>Filter by Test:</b>&nbsp<asp:TextBox ID="TestNameTextBox" runat="server" AutoPostBack="True" />
&nbsp;
<asp:Button ID="ResetButton" Text="Reset Traces" runat="server" CausesValidation="false"
EnableViewState="false" UseSubmitBehavior="false" />
<asp:Button ID="ExportButton" Text="Export Traces" runat="server" CausesValidation="false"
EnableViewState="false" UseSubmitBehavior="false" />
<hr/>	  <b>Import Traces:</b>&nbsp;<br />

<asp:FileUpload ID="FileUpload1" Text="Select Import Trace File" runat="server" CausesValidation="false" EnableViewState="false" UseSubmitBehavior="false"/>
<asp:Button ID="ImportButton" Text="Import Traces" runat="server" CausesValidation="false"
EnableViewState="false" onclientclick="return CheckForTestFile()" onclick="ImportButton_Click"/>
</td>
</tr>
</table>
<br />
<asp:XmlDataSource ID="RootData" XPath="Root/PerformanceTraces" EnableCaching="false"
runat="server" />
<asp:DataList ID="RootDataList" DataSourceID="RootData" runat="server" Width="100%">
<ItemTemplate>
<asp:DataList ID="EnvironmentTrace" DataSource='<%# XPathSelect(@"EnvironmentTrace") %>'
runat="server" Width="100%" BorderWidth="1" BorderStyle="Solid" BorderColor="black"
BackColor="lightyellow">
<ItemTemplate>
<b>Environment:</b>
<br />
<table width="100%" style="table-layout: fixed">
<col width="20%" />
<col width="30%" />
<col width="20%" />
<col width="30%" />
<tr>
<td>
Database size (megs):</td>
<td>
<%# XPath("DatabaseSize")%>
</td>
<td>
Disk capacity (megs):</td>
<td>
<%# XPath("DiskDriveCapacity")%>
</td>
</tr>
<tr>
<td>
Disk available (megs):</td>
<td>
<%# XPath("DiskDriveCapacityAvailable")%>
</td>
<td>
Machine name:</td>
<td>
<%# XPath("MachineName")%>
</td>
</tr>
<tr>
<td>
Operating system:</td>
<td>
<%# XPath("OperatingSystem")%>
</td>
<td>
Number of processors:</td>
<td>
<%# XPath("NumberOfProcessors")%>
</td>
</tr>
<tr>
<td>
Physical memory (bytes):</td>
<td>
<%# XPath("PhysicalMemory")%>
</td>
<td>
Memory available (bytes):</td>
<td>
<%# XPath("PhysicalMemoryAvailable")%>
</td>
</tr>
<tr>
<td>
Processor frequency (Mhz):</td>
<td>
<%# XPath("ProcessorFrequency")%>
</td>
<td>
SQL server:</td>
<td>
<%# XPath("SqlServerName")%>
</td>
</tr>
<tr>
<td>
Debug mode:</td>
<td>
<%# XPath("DebugMode")%>
</td>
<td>
Build number:</td>
<td>
<%# XPath("Build")%>
</td>
</tr>
</table>
</ItemTemplate>
</asp:DataList>
<br />
<asp:DataList ID="FirstLevelTraces" DataSource='<%# XPathSelect(@"PerformanceTrace") %>'
runat="server" Width="100%" BorderWidth="1" BorderStyle="Solid" BorderColor="black"
BackColor="lightgray">
<AlternatingItemStyle BorderColor="Black" BorderStyle="None" BorderWidth="1px" />
<ItemStyle BorderColor="Black" BorderStyle="Solid" BorderWidth="1px" />
<ItemTemplate>
<b>
<%# XPath("TraceType") %>
:</b> <a href='<%# XPath("RequestName") %>'>
<%# XPath("RequestName") %>
</a>
<table width="100%" style="table-layout: fixed">
<col width="20%" />
<col width="30%" />
<col width="20%" />
<col width="30%" />
<tr>
<td>
Time stamp:</td>
<td>
<%# XPath("Timestamp")%>
</td>
<td>
Request size:</td>
<td>
<%# XPath("SizeOfRequest")%>
</td>
</tr>
<tr>
<td>
Response size (bytes):</td>
<td>
<%# XPath("SizeOfResponse")%>
</td>
<td>
Memory difference (bytes):</td>
<td>
<%# XPath("VirtualMemoryUsage")%>
</td>
</tr>
<tr>
<td>
Succeeded:</td>
<td>
<%# XPath("Succeeded")%>
</td>
<td>
Number of calls:</td>
<td>
<%# XPath("DeepChildTraceCount")%>
</td>
</tr>
<tr>
<td>
Total sql complexity:</td>
<td>
<%# XPath("TotalSqlComplexity")%>
</td>
<td>
Total sql records affected:</td>
<td>
<%# XPath("TotalSqlRecordsAffected")%>
</td>
</tr>
<tr>
<td>
Time to process (Inclusive):</td>
<td>
<%# XPath("TimeToProcess")%>
</td>
<td>
Time to process (Exclusive):</td>
<td>
<%# XPath("ExclusiveTimeToProcess")%>
</td>
</tr>
</table>
<div onclick="expand();" style="display: none">
<img height="20" width="20" src="/_imgs/debugInfo.gif" alt="Details" />
<table id="DetailsMaster" width="100%" style="display: none">
<tr>
<td style="padding: 10">
<asp:DataList ID="SecondLevelTraces" DataSource='<%# XPathSelect(@"ChildTraces/PerformanceTrace") %>'
runat="server" Width="100%" BorderWidth="1" BorderStyle="Solid" BorderColor="black"
BackColor="white">
<AlternatingItemStyle BorderColor="Black" BorderStyle="None" BorderWidth="1px" />
<ItemStyle BorderColor="Black" BorderStyle="Solid" BorderWidth="1px" />
<ItemTemplate>
<b>
<%# XPath("TraceType") %>
:</b> <a href='<%# XPath("RequestName") %>'>
<%# XPath("RequestName") %>
</a>
<table id="Details" width="100%" style="table-layout: fixed">
<col width="20%" />
<col width="30%" />
<col width="20%" />
<col width="30%" />
<tr>
<td>
Time stamp:</td>
<td>
<%# XPath("Timestamp")%>
</td>
<td>
Request size:</td>
<td>
<%# XPath("SizeOfRequest")%>
</td>
</tr>
<tr>
<td>
Response size (bytes):</td>
<td>
<%# XPath("SizeOfResponse")%>
</td>
<td>
Memory difference (bytes):</td>
<td>
<%# XPath("VirtualMemoryUsage")%>
</td>
</tr>
<tr>
<td>
Succeeded:</td>
<td>
<%# XPath("Succeeded")%>
</td>
<td>
Number of calls:</td>
<td>
<%# XPath("DeepChildTraceCount")%>
</td>
</tr>
<tr>
<td>
Total sql complexity:</td>
<td>
<%# XPath("TotalSqlComplexity")%>
</td>
<td>
Total sql records affected:</td>
<td>
<%# XPath("TotalSqlRecordsAffected")%>
</td>
</tr>
<tr>
<td>
Time to process (Inclusive):</td>
<td>
<%# XPath("TimeToProcess")%>
</td>
<td>
Time to process (Exclusive):</td>
<td>
<%# XPath("ExclusiveTimeToProcess")%>
</td>
</tr>
</table>
<div onclick="expand();" style="display: none">
<img height="20" width="20" src="/_imgs/debugInfo.gif" alt="Details" />
<table id="DetailsMaster" width="100%" style="display: none">
<tr>
<td style="padding: 10">
<asp:DataList ID="ThirdLevelTraces" DataSource='<%# XPathSelect(@"ChildTraces/PerformanceTrace") %>'
runat="server" Width="100%" BorderWidth="1" BorderStyle="Solid" BorderColor="black"
BackColor="white">
<AlternatingItemStyle BorderColor="Black" BorderStyle="None" BorderWidth="1px" />
<ItemStyle BorderColor="Black" BorderStyle="Solid" BorderWidth="1px" />
<ItemTemplate>
<b>
<%# XPath("TraceType") %>
:</b> <a href='<%# XPath("RequestName") %>'>
<%# XPath("RequestName") %>
</a>
<table id="Details" width="100%" style="table-layout: fixed">
<col width="20%" />
<col width="30%" />
<col width="20%" />
<col width="30%" />
<tr>
<td>
Time stamp:</td>
<td>
<%# XPath("Timestamp")%>
</td>
<td>
Request size:</td>
<td>
<%# XPath("SizeOfRequest")%>
</td>
</tr>
<tr>
<td>
Response size (bytes):</td>
<td>
<%# XPath("SizeOfResponse")%>
</td>
<td>
Memory difference (bytes):</td>
<td>
<%# XPath("VirtualMemoryUsage")%>
</td>
</tr>
<tr>
<td>
Succeeded:</td>
<td>
<%# XPath("Succeeded")%>
</td>
<td>
Time to process:</td>
<td>
<%# XPath("TimeToProcess")%>
</td>
</tr>
<tr>
<td>
Total sql complexity:</td>
<td>
<%# XPath("TotalSqlComplexity")%>
</td>
<td>
Total sql records affected:</td>
<td>
<%# XPath("TotalSqlRecordsAffected")%>
</td>
</tr>
<tr>
<td>
Number of calls:</td>
<td>
<%# XPath("DeepChildTraceCount")%>
</td>
</tr>
</table>
</ItemTemplate>
</asp:DataList>
</td>
</tr>
</table>
</div>
</ItemTemplate>
</asp:DataList>
</td>
</tr>
</table>
</div>
</ItemTemplate>
</asp:DataList>
</ItemTemplate>
</asp:DataList>
</form>
</body>
</html>
