<!DOCTYPE HTML>
<%@ Page language="c#" Inherits="Microsoft.Crm.Web.HelpSystem" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Web" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>

<html>

<title><loc:Text ResourceId="Web.Help.default.aspx_04" CheckForLive="true" runat="server"/></title>

<frameset name="master "id="master" rows="27,40,*,26" border="0" style="border:0px;">
<frame name="topBar" id="topBar" scrolling="no" src="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(topBarUrl)%>" noresize></frame>
<frame name="findBar" id="findBar" scrolling="no" src="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(findBarUrl)%>" noresize></frame>
<frameset name="contentArea" id="contentArea" framespacing="2" cols="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Cols)%>">
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
{ %>
<frame name="helpContents" id="helpContents" scrolling="auto" src="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(helpFile)%>" firstLoad="1" onload="if(this.firstLoad==1){parent.document.getElementById('helpTOC').location='<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(tocUrl)%>';this.firstLoad=0}"></frame>
<frame name="helpTOC" id="helpTOC" scrolling="auto" src="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(TocCrmUri.ToString())%>"></frame>
<% }
else
{ %>
<frame name="helpTOC" id="helpTOC" scrolling="auto" src="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(TocCrmUri.ToString())%>"></frame>
<frame name="helpContents" id="helpContents" scrolling="auto" src="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(helpFile)%>" firstLoad="1" onload="if(this.firstLoad==1){parent.document.getElementById('helpTOC').location='<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(tocUrl)%>';this.firstLoad=0}"></frame>
<%}%>
</frameset>
<frame name="bottomBar" id="bottomBar" scrolling="no" src="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(bottomBarUrl)%>" noresize></frame>
</frameset>

</html>
