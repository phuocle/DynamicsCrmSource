<!DOCTYPE html >
<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.Solution.ComponentDialog" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="cui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />

<script type="text/javascript" language="JavaScript">

Sys.Application.add_load(PageLoad);
function PageLoad()
{
var crmGrid = $find("crmGrid");
crmGrid.SetParameter("disableDblClick","1");
$addHandler(crmGrid.get_element(), 'dblclick', applychanges);
}



function SCItem()
{

this.id = "";
this.name = "";
this.type = "";
this.values = null;
}

function cancel()
{
closeWindow();
}

function applychanges()
{
var rows = $find("crmGrid").get_innerGrid().get_selectedRecords();

if (rows.length <= 0)
{
alert(LOCID_SELECTONEORMORE_WARN);
return;
}

var items = new Array();
for (var i = 0; i < rows.length; i++)
{
var row = rows[i];
var item = new SCItem();
item.id = row[0];
item.type = row[1];
item.name = $find("crmGrid").getCellValue("displayname", item.id);
items.push(item);
}

Mscrm.Utilities.setReturnValue(items);
closeWindow();
return;
}

function ResetGrid()
{
var typefilter = $get("solutionFilter_typefilter");
var crmGrid = $find("crmGrid");
crmGrid.SetParameter("componentTypeFilter",typefilter.DataValue);
crmGrid.SetParameter("suppressfetch","false");
crmGrid.Reset();
}

</script>

</head>
<body>
<frm:DialogForm id="crmForm" supportsdefaultdata="true" runat="server">
<div>
<hr />
</div>

<div style="position:absolute; top:16px; left:0px; height:29px; width:100%;">
<cnt:SolutionComponentFilterSelector GridId="crmGrid" id="solutionFilter" runat="server"  />
</div>

<div style="bottom:0px; right:0px; top:45px; left:0px; position:absolute; width:100%;">
<![if IE 7]>
<div class="ms-crm-IE7-Height-Fix-Dummy-Container">
<![endif]>
<cnt:AppGrid runat="server" id="crmGrid" name="crmGrid"/>
<![if IE 7]>
</div>
<![endif]>
</div>

</frm:DialogForm>
</body>
</html>
