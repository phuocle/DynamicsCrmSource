<!DOCTYPE HTML>
<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Controls.FindHelpBar.FindHelpBarPage"%>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<html>
<head>
<%
CurrentHeader.SetScriptFile("/help/common/help.js");
CurrentHeader.SetScriptFile("/_static/_common/scripts/GlowingImage.js");
CurrentHeader.SetScriptFile("/help/common/hintText.js");

CurrentHeader.SetResource("LOCID_ENTER_QUERY_FIRST", CurrentResourceManager.GetString("Web.Help.bar_Find.aspx_11"));

CurrentHeader.CreateClientAjaxComponent("Mscrm.GlowingImage", "findCriteriaImg");
%>
<cnt:AnonymousHeader id="crmHeader" runat="server" />

<script type="text/javascript">

Sys.Application.add_load(function () {
$create(Mscrm.HintText,null,null,null,$get("findCriteria"));
});

function find()
{
var helpFind = $get("helpFind");

if ($get("findCriteria").value == "")
{
alert(LOCID_ENTER_QUERY_FIRST);
}
else
{
helpFind.submit();
}

return false;
}

</script>
</head>
<body class="stage" style="padding:10px; border-bottom:1px solid #999999;">

<form id="helpFind" action="find.aspx?helpLcid=<%=HelpLcid.ToString(System.Globalization.CultureInfo.InvariantCulture) %>&ver=<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.CrmEncodeDecode.CrmUrlEncode(HelpVersion))%> " method="post" target="helpContents" onsubmit="return find();">

<table width="100%" cellpadding="0" cellspacing="0">
<col width="100%"><col>
<tr>
<td style="width:100%;overflow:hidden;">
<div style="position:relative;height:100%;">
<label for="findCriteria" id="findHintText" class="ms-crm-Dialog-Lookup-QuickFindHint" style="display:inline-block;"><loc:Text ResourceId="Field_Label_Find_Contents" runat="server"/></label>
</div>
<div style="height:100%;">
<input maxlength="50" name="findCriteria" id="findCriteria" type="text" class="ms-crm-Dialog-Lookup-QuickFind" hintlabelid="findHintText"/>
</div>
</td>
<td class="bar_Find_td_RunBtn">
<a id="findCriteriaButton" class="ms-crm-FindButton" href="#" onclick="find();">
<img id="findCriteriaImg" class="bar_Find_img_find" src="/_imgs/qfind.gif" imgBase="/_imgs/qfind" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Web.Help.bar_Find.aspx_37' runat='server'/>" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Web.Help.bar_Find.aspx_37' runat='server'/>"/>
</a>
</td>
</tr>
</table>

</form>
</body>
</html>
