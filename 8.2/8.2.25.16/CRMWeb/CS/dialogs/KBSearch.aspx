<!DOCTYPE html>
<%@ Page language="c#" Inherits="Microsoft.Crm.Service.Web.CS.KBSearchPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Service.Application.Controls" Assembly="Microsoft.Crm.Service.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>

<style>
.KBSearch_div_ArticleFind
{
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
right:0px;
<% } else { %>
left:0px;
<% } %>
width : 217px;
}
.KBSearch_Grid
{
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
right:206px;
left:0px;
<% } else { %>
left:206px;
right:0px;
<% } %>
height: 100%;
}
.KBSearch_div_ViewArticle, .KBSearch_div_BtnViewArticle
{
position : absolute;
width : 100%;
}
.KBSearch_div_ViewArticle
{
top : 10px;
bottom : 35px;
}
.KBSearch_div_BtnViewArticle
{
bottom : 10px;
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
text-align : left;
<% } else { %>
text-align : right;
<% } %>
}
div.TreeContainer
{
overflow:visible;
word-wrap:break-word;
}

</style>

<div class="stdTable" >
<div class="KBSearch_div_ViewArticle">
<div class="stdTable">
<div class="KBSearch_div_ArticleFind ms-crm-absolutePosition" >

<cnt:AppArticleFind id="crmArticleFind" runat="server"/>
</div>
<div class="KBSearch_Grid ms-crm-absolutePosition">

<cnt:AppGrid id="crmGrid" runat="server"/>
</div>
</div>
</div>
<div colspan="2" class="KBSearch_div_BtnViewArticle">
<ui:Button ID="btnViewArticle" CssClass="ms-crm-RefreshDialog-Button" OnClick="javascript:ViewArticle(_bHideEmailButton);" ResourceId="Web.CS.Dialogs.KBSearch.aspx.ViewArticle" runat="server"></ui:Button>
</div>
</div>
