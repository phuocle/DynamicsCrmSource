<%@ Page Language="c#" Inherits="Microsoft.Crm.Application.Pages.WallPage.TraceWallPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="System.Globalization" %>

<html style="height:100%">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=8">
<cnt:AppHeader id="crmHeader" runat="server" />
<script type="text/javascript" src="<%=GetJSPath("/_common/ClientGlobalContext.js.aspx")%>"></script>
<script type="text/javascript" src="<%=GetJSPath("/_static/_common/scripts/jquery1.5.2.min.js")%>"></script>
<script type="text/javascript" src="<%=GetJSPath("/_static/_common/scripts/jquery.tmpl.js")%>"></script>
<script type="text/javascript" src="<%=GetJSPath("/_static/_common/scripts/jqueryUI1.8.13.custom.min.js")%>"></script>
<script type="text/javascript" src="<%=GetJSPath("/_static/_common/scripts/mscorlib.js")%>"></script>
<script type="text/javascript" src="<%=GetJSPath("/_static/_common/scripts/presence.js")%>"></script>
<script type="text/javascript" src="<%=GetJSPath("/_static/_common/scripts/SalesCommonFramework.js")%>"></script>
<script type="text/javascript" src="<%=GetJSPath("/_static/_common/scripts/SalesCommonImported.js")%>"></script>
<script type="text/javascript" src="<%=GetJSPath("/_static/_common/scripts/SalesCrmSoapProxyService.js")%>"></script>
<script type="text/javascript" src="<%=GetJSPath("/_static/_common/scripts/Wall.Control.js")%>"></script>
<script type="text/javascript" src="<%=GetJSPath("/_static/_controls/wallcontrol/errorreporting/errorreporting.crmsoapserviceproxy.js")%>"></script>
<script type="text/javascript" src="<%=GetJSPath("/_static/_controls/wallcontrol/errorreporting/errorreporting.wall.service.js")%>"></script>
<script type="text/javascript" src="<%=GetJSPath("/_static/_controls/wallcontrol/errorreporting/errorreporting.UI.js")%>"></script>

</head>
<body tabindex='-1'>
<table border="0" cellpadding="0" cellspacing="0" class="wallTable" onclick="void(0);">
<tr>
<td id="wallElementContainer" class="wallCell">
<div id="wall" class="wall">
<div id="header" class="header">
<div class="postArea" id="titleDiv">
<h1 id="title" class="title">
<loc:Text Encoding='HtmlAttribute' ResourceId='Web.Wall_AlertsTitle' runat='server'/>
</h1>
<div class="tearOffDiv">
<a href="#" onclick="dispatchWallCommand('tearoff'); return false;" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Web.Wall_OpenNewWindow' runat='server'/>" class="tearOffLink" id="tearOffLink">
<img alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Web.Wall_OpenNewWindow' runat='server'/>" src="/_imgs/wallcontrol/tearup.png" />
</a>
</div>
</div>
<div class="filterAndRefreshContainer">
<div class="filtersContainer">

<div id="filterContainer" class="wallFilter filters" TemplateId="filterTemplate" FilterType="TraceLevelFilter" IsAsync="false">
</div>
</div>

<div class="wallActionsContainer">
<div class="refreshDiv">
<a id="refreshAllLink" class="refreshPostsLink" href="#" tabindex="3"
onclick="dispatchWallCommand('refreshall'); return false;" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Web.Wall_RefreshWindow' runat='server'/>">
<img class="refreshImage" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Web.Wall_RefreshWindow' runat='server'/>" src="/_imgs/WallControl/refresh.png">
</img>
<span class="refreshLabel">
<loc:Text Encoding='HtmlAttribute' ResourceId='Web.Wall_Refresh' runat='server'/>
</span>
</a>
</div>
<div class="deleteAllDiv">
<a id="deleteAllLink" class="deleteAllLink enableHover" href="#" tabindex="4"
onclick="dispatchWallCommand('deleteallaction'); return false;" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Web.Wall_DeleteAll' runat='server'/>">
<img class="deleteAllImage" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Web.Wall_DeleteAll' runat='server'/>" src="/_imgs/WallControl/deleteall.png">
</img>
</a>
</div>
</div>
</div>
</div>

<script id="postTemplate" type="text/html">
<div id="${postId}" class="post ">
<div class="userThumbnailArea">
<div class="userThumbnail">
{{html formatEntityIconImageWithWindowOpenLink(regardingId, relativeImageUrl, levelBase)}}
</div>
</div>
<div class="wallbody">
<div id="${postId}_userName" class="userName">{{html formatNameWithWindowOpenLink(regardingId)}}</div>
<div class="postActions">
{{tmpl(reverseIfIE7andRtl(markFirstAndLast(getWallActions($item, 'postaction', $data)))) "#actionTemplate"}}
</div>
<div id="${postId}_text" class="text" onselectstart="window.event.cancelBubble=true;return true;">{{html text}}</div>
{{if $data.serverErrorCodeBase != null && $data.serverErrorCodeBase != '' }}
<div id="${postId}_detail" class="text" onselectstart="window.event.cancelBubble=true;return true;" style="display: none;">
<div id="${postId}_errorCode" class="text" onselectstart="window.event.cancelBubble=true;return true;"><b><loc:Text Encoding='Html' ResourceId='Web.Wall_ServerErrorCodeTraceLabel' runat='server'/></b> {{html CrmEncodeDecode.CrmHtmlEncode(serverErrorCodeBase)}}</div>
</div>
{{/if}}
<div class="footer">
<span class="posted">${formatDate(createdOn, formattedCreatedOn)}</span>
</div>
</div>
</div>
</script>

<script id="actionTemplate" type="text/html">
<a id="${$data.commandName}_${$item.parent.data.postId}${$item.parent.data.commentId}" href="#" class="{{if $data.isVisible == false}}hideAction{{/if}} {{if $data.iconUrl != null && $data.iconUrl != '' }}imageAction{{else}}textAction{{/if}} {{if $data.islast}}lastAction{{/if}}" title="${toolTip}" {{if !$data.enabled }} disabled='disabled' {{/if}} onclick="dispatchWallCommand('{{if $data.commandName == null || $data.commandName == '' }}genericaction{{else}}${commandName}{{/if}}', $(this).tmplItem().data); return false;"
onkeydown="var keycode = (window.event ? event.keyCode : event.which); if(keycode == 13 || keycode == 32){dispatchWallCommand('{{if $data.commandName == null || $data.commandName == '' }}genericaction{{else}}${commandName}{{/if}}', $(this).tmplItem().data); return false; }">
{{if $data.iconUrl != null && $data.iconUrl != '' }}
{{if $data.enabled ||  $data.disabledIconUrl == null || $data.disabledIconUrl == '' }}
<img src="${iconUrl}" alt="${toolTip}" border="0" />
{{else}}
<img src="${disabledIconUrl}" alt="${toolTip}" border="0" />
{{/if}}
{{else}}
${text}
{{/if}}
</a>
</script>

<script id="filterTemplate" type="text/html">
<div class="filter {{if $data.isSelected}}selected{{/if}}">
<a id="${$data.commandName}_${$data.context}" class="filterAction" href="#" title="${toolTip}" onclick="dispatchWallCommand('{{if $data.commandName == null || $data.commandName == '' }}genericaction{{else}}${commandName}{{/if}}', $(this).tmplItem().data); return false;">
${text}
</a>
</div>
</script>

<script id="showMoreLinkTemplate" type="text/html">
<a class="showMoreLink" href="#" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Web.Wall_SeeOlderTraces' runat='server'/>">
<div class="textAndArrow">
<div class="arrow"></div>
<div class="text"><loc:Text Encoding='HtmlAttribute' ResourceId='Web.Wall_More' runat='server'/></div>
</div>
<img src="/_imgs/WallControl/progressbar.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Web.Wall_Progress' runat='server'/>" class="progress" >
</img>
</a>
</script>

<div id="progressTemplate" class="progressTemplate">
<div class="textAndArrow">
<div class="arrow"></div>
<div class="text"><loc:Text Encoding='HtmlAttribute' ResourceId='Web.Wall_More' runat='server'/></div>
</div>
<img src="/_imgs/WallControl/progressbar.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Web.Wall_Progress' runat='server'/>" class="progress" >
</img>
<div style="clear: both;"></div>
</div>

<div id="deleteAllProgressTemplate" class="progressTemplate">
<div class="textAndArrow">
<div class="text"><loc:Text Encoding='HtmlAttribute' ResourceId='Web.Wall_DeletingAll' runat='server'/></div>
</div>
<img src="/_imgs/WallControl/progressbar.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Web.Wall_Progress' runat='server'/>" class="progress" >
</img>
<div style="clear: both;"></div>
</div>

<div class="firstRunContent" id="firstRunContent">
<div id="messageContainer" class="noPostsText"><loc:Text Encoding='Html' ResourceId='Web.Wall_NoAlertsMessage' runat='server'/></div>
</div>
<div id="wallContainer">
</div>
</div>
</td>
</tr>
</table>



<script type="text/javascript">

Type.registerNamespace('Wall.Control.Resources');
Wall.Control.Resources.WallControl = function Wall_Control_Resources_WallControl() { }
Wall.Control.Resources.WallControl.registerClass('Wall.Control.Resources.WallControl');
Wall.Control.Resources.WallControl.dateUtils_Today = "<%=CurrentResourceManager.GetString("Web.Wall_Today")%>";
Wall.Control.Resources.WallControl.dateUtils_Yeserday = "<%=CurrentResourceManager.GetString("Web.Wall_Yesterday")%>";

var wallPage;
var wallCommandDispatcher;

applyDocumentStyles();
if (GetGlobalContext().isOutlookOnline()) {
document.onselectstart = null;
wallPage = new ErrorReporting.UI.WallPage();
wallCommandDispatcher = new ErrorReporting.UI.WallCommandDispatcher('wall', wallPage.get_wall(), wallPage.get_wallService());

$(document.body).addClass('hideUserProfile');
}

function dispatchWallCommand(commandName, parameters) {
if (GetGlobalContext().isOutlookOnline()) {
wallCommandDispatcher.dispatchCommand(commandName, parameters);
}
}
</script>
</body>
</html>
