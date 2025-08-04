<!DOCTYPE html>

<%@ Page Language="C#" Inherits="Microsoft.Crm.Application.Pages.Common.CreateTemplateDialog" %>

<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Sdk" Assembly="Microsoft.Crm.Sdk" %>

<html lang='<% = Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TwoLetterISOLanguageName %>'>
<head>
<cnt:appheader id="crmHeader" runat="server" />
<script>
var createDialogControl = null;
function exportExcel() {
createDialogControl = Mscrm.DocumentTemplate.CreateDialogControl.create(document.getElementsByTagName("body")[0], <%=TemplateTypeCode %>);
checkDivWarnigCSS();
}

function close() {
createDialogControl.dispose();
closeWindow();
}

function checkDivWarnigCSS() {
if($P_CRM('div#divWarning').hasClass("ms-crm-RefreshDialog-Warning"))
{
$P_CRM('div#divWarning').removeClass("ms-crm-RefreshDialog-Warning");
}
$P_CRM('div#divWarning').addClass("createTemplateDivWarning");
}
</script>
</head>
<body class="createTemplateDialog">
<frm:DialogForm id="crmForm" runat="server">
<div class="createTemplateClose">
<a class="createTemplateCloseButton" href="javascript:close();" id="buttonClose" title="<loc:Text ResourceId='Button_Label_Close' runat='server'/>">
<div class="navTourButtonImage">
<img alt="<loc:Text ResourceId='Button_Label_Close' runat='server'/>" src="/_imgs/Office/close-icon_12x12.png" unselectable="on" />
</div>
</a>
</div>
<div class="createTemplatePage">
<div class="createTemplateHeader">
<div class="createTemplateTitleText" title="<loc:Text ResourceId='Web.CreateTemplate.Window_Title_Ara' runat='server'/>" tabindex="0">
<loc:Text ResourceId="Web.CreateTemplate.Window_Title_Ara" runat="server" />
</div>
</div>
<div id="createTemplateText" class="createTemplateText" tabindex="0">
<label for="createTemplateText">
<loc:Text ResourceId="Web.CreateTemplate.Window_Text_Ara" runat="server" />
</label>
</div>
<div id="createTemplateDropdowns" class="createTemplateDropdowns">
<div id="createTemplateType" class="createTemplateType">
<% if(!isExcelTemplateEnabled) { %>
<div id="excelTemplate" class="templateType" tabindex="0" style="visibility:hidden">
<%} else { %>
<% if(DocumentType == (int)OfficeDocumentType.Excel) { %>
<div id="excelTemplate" class="templateType selected" tabindex="0">
<%} else { %>
<div id="excelTemplate" class="templateType" tabindex="0">
<%} %>
<%} %>
<div class="templateImage" id="excelImage">
<img src="/_imgs/Office/ico_24_excel.png" alt=""/>
</div>
<div class="templateData">
<label for="excelTemplate" title='<loc:Text ResourceId="DocumentTemplate.ExcelTemplate" runat="server" />'>
<loc:Text ResourceId="DocumentTemplate.ExcelTemplate" runat="server" />
</label>
</div>
</div>
<% if(!isWordTemplateEnabled) { %>
<div id="wordTemplate" class="templateType word" tabindex="0" style="visibility:hidden">
<%} else { %>
<% if (DocumentType == (int)OfficeDocumentType.Word) {%>
<div id="wordTemplate" class="templateType word selected" tabindex="0">
<%} else { %>
<div id="wordTemplate" class="templateType word" tabindex="0">
<%} %>
<%} %>
<div class="templateImage">
<img src="/_imgs/Office/ico_24_word.png" alt=""/>
</div>
<div class="templateData">
<label for="wordTemplate" title='<loc:Text ResourceId="DocumentTemplate.WordTemplate" runat="server" />'>
<loc:Text ResourceId="DocumentTemplate.WordTemplate" runat="server" />
</label>
</div>
</div>
</div>
</div>
<div id="selectDataLabel" class="createTemplateText" tabindex="0">
<label for="selectDataLabel">
<loc:Text ResourceId="DocumentTemplate.SelectData" runat="server" />
</label>
</div>
<div id="createTemplateDropdowns" class="createTemplateDropdowns">
<div class="createTemplateLookFor">
<label class="createDialogText" for="EntityList">
<loc:Text ResourceId="DocumentTemplate_Filter_By_Entity_Label" runat="server" />
</label>
<ui:Select id="EntityList" runat="server" />
</div>
<% if (DocumentType == (int)OfficeDocumentType.Word) { %>
<div id="createTemplateLabelQuery" class="createTemplateLabelQuery hideDropDown">
<%} else { %>
<div id="createTemplateLabelQuery" class="createTemplateLabelQuery">
<%} %>
<div class="createTemplateLookFor">
<label class="createDialogText" for="ViewList">
<loc:Text ResourceId="DocumentTemplate_ViewList_Label" runat="server" />
</label>
<ui:Select id="ViewList" runat="server" />
<a href="#" id="editColumnsLink">
<div class="editColumnText">
<span>
<loc:Text ResourceId="Web.CreateTemplate.Edit_Columns_Title" runat="server" />
</span>
</div>
</a>
</div>
</div>
</div>
</div>
<a target="_blank" href="http://go.microsoft.com/fwlink/?LinkID=624118" class="helpContainer" title="<loc:Text ResourceId='Button_Label_Help' runat='server'/>">
<%= HelpIconTag %>
</a>
</frm:DialogForm>
<div style="display: none">
<iframe name="exportIFrame" title="" class="exportIframe"></iframe>
</div>
<div id='loadingContainer' class="indicatorOff">
<img id="progressImage" class="progressImage" alt='<loc:text resourceid="InlineEditForm_Processing" runat="server" />' src="/_imgs/processing_loader.gif">
</div>
<a href="javascript:close();" id="downloadTemplateClose" class="createTemplateClose" title="<loc:Text ResourceId='Button_Label_Close' runat='server'/>">
<img alt="<loc:Text ResourceId='Button_Label_Close' runat='server'/>" src="/_imgs/Office/close-icon_12x12.png" unselectable="on" />
</a>
<div class="downloadedTitle" id="downloadedTitle">
<%= DownloadStartedText %>
</div>
</body>
</html>
