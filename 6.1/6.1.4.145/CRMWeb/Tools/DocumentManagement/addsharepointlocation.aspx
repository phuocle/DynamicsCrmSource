<!DOCTYPE html />
<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.DocumentManagement.AddSharePointDocumentLocation" %>

<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web"
Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<html>
<head>
<cnt:AppHeader ID="crmHeader" runat="server" />

<style type="text/css">
div.sectionHeader
{

<% if(Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft) { %>
padding-right:14px;
<% }else{ %>
padding-left:14px;
<% } %>

width: 200px;
float: left;
font-size: 12pt;
font-family: Segoe UI;
color:#444444;
}

div.sectionSubHeader
{
width: 400px;
position: relative;
display: inline-block;
font-size: 12pt;
font-family: Segoe UI;
color:#B1B1B1;
}

html {
overflow: auto;
}



</style>
</head>
<body>
<frm:DialogForm ID="crmForm" runat="server">

<div id="dialogContainer" width="100%" height = "100%">

<div style="font-size: 12pt;font-family: Segoe UI;color:#444444;"><%if(mode == AddLocationDialogMode.Add)
{%>
<label for="dialogdesc">
<loc:Text ResourceId="AddLocationDialogHeader" runat="server" />
</label>
<% } else {%>
<label for="dialogdesc">
<loc:Text ResourceId="EditLocationDialogHeader" runat="server" />
</label>
<% } %>
</div>

<div>
<div class="sectionHeader" style="padding-top:22px;">
<loc:Text ResourceId="LocationNameLabel" runat="server" />
</div>
<div class="sectionSubHeader"style="padding-top:22px;">
<input type="text" maxlength="160" id="locationNameText" value="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(locationNameTextValue)%>" />
</div>
</div>


<div style="padding-top:28px;font-size: 12pt;font-family: Segoe UI;color:#444444;"><%if(mode == AddLocationDialogMode.Add)
{%>
<label for="relativeUrl">
<loc:Text ResourceId="AddLocationParentSiteLocation" runat="server" />
</label>
<% } else {%>
<label for="relativeUrl">
<loc:Text ResourceId="EditLocationParentSiteLocation" runat="server" />
</label>
<% } %>
</div>


<div style="padding-top:10px;">
<div  class="sectionHeader">
<label for="locationLookup"><loc:Text ResourceId="AddLocationParentSiteLabel" runat="server" /></label>
</div>
<div  class ="sectionSubHeader" style="color='#000000'">
<sdk:LookupControl ID="locationLookup"  AccessibilityLabelResourceId="DocumentManagement.AddLocation.ParentURL.Label" LookupStyle="single" AutoRegisterClientComponent="false" runat="server" />
</div>
</div>
<div style="padding-top:6px;">
<div   class="sectionHeader">
<label for="folderNameText"><loc:Text ResourceId="DocumentManagement.AddLocation.Folder.Label" runat="server" />
</div>
<div class="sectionSubHeader">
<input type="text"  id="folderNameText"  runat="server" />
</div>
</div>
</div>
</frm:DialogForm>
<div id="showProgress" class="ms-crm-Validation-Progress" style="display:none;height:100%;width:100%;">
<div id="progressInner" style="height: 100%; width: 100%">
<div style="top: 45%; text-align: center; position: relative;">
<img alt="" src="/_imgs/AdvFind/progress.gif" />
<br />
<loc:Text ResourceId="CreateFolderNotification" runat="server"/>
</div>
</div>
</div>
</body>
</html>
