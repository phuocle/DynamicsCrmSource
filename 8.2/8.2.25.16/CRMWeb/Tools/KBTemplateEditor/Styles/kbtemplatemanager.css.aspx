<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles"  %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

DIV.editor
{
background-color: #FFFFFF;
height:			100%;
padding:		10px;
overflow:		auto;
vertical-align:	top;
border-width:	1px;
border-style:	solid;
}
TD.section
{
width:			100%;
cursor:			pointer;
border:			1px dashed #6489D4;
}
TD.docprop
{
width:			100%;
border:			1px dashed #ffffff;
}
DIV.title
{
font-weight:	<%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight")%>;
font-size:		<%= WebUtility.GetFontResourceForStyle("kbtemplatemanager.css.aspx.DIV.title.font_size")%>;
}
DIV.instructions
{
color:			#666666;
padding-top:	5px;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:	5px;
<% } else { %>
padding-left:	5px;
<% } %>
}


div.ms-crm-KBTemplateManager
{
height: 100%;
position: relative;
}
div.ms-crm-KBTemplateManager .ms-crm-QuickFindRow
{
height: 22px;
padding-bottom: 6px;
padding-top: 6px;
}
div.ms-crm-KBTemplateManager
{
height: 26px;
}
div.ms-crm-KBTemplateManager
{
height: 100%;
}
div.ms-crm-KBTemplateManager table.ms-crm-QuickFindTable
{
width: 100%;
}
table.ms-crm-QuickFindTable col.quick_find_col_1
{
width: 60%;
}
table.ms-crm-QuickFindTable col.quick_find_col_2
{
width: 20px;
}
table.ms-crm-QuickFindTable col.quick_find_col_4
{
width: 40%;
}


table.ms-crm-KBTemplateProperties
{
width: 100%;
}
table.ms-crm-KBTemplateProperties col.template_properties_col_1
{
width: 80px;
}
.ms-crm-KBTemplateProperties tr.ms-crm-DescriptionRow
{
height:70px;
}
.ms-crm-KBTemplateProperties tr.ms-crm-DescriptionRow td
{
vertical-align:top;
}
.ms-crm-KBTemplateProperties tr.ms-crm-DescriptionRow textarea
{
height:70px;
overflow-y:auto;
}


div.ms-crm-KBSectionProperties
{
height: auto;
}
div.ms-crm-KBSectionProperties table.ms-crm-TableContainer
{
width: 100%;
}
table.ms-crm-TableContainer col.section_properties_col_1
{
width: 70px;
}
table.ms-crm-TableContainer tr.ms-crm-InstructionsRow td
{
vertical-align:top;
}
table.ms-crm-TableContainer tr.ms-crm-InstructionsRow textarea
{
height:70px;
overflow-y:auto;
}


table.ms-crm-TemplateEditorTable
{
table-layout: fixed;
width: 100%;
height: 100%;
}
table.ms-crm-TemplateEditorTable col.template_editor_col_2
{
width: 170px;
}
table.ms-crm-TemplateEditorTable table.ms-crm-ContentTable
{
width: 100%;
}

DIV.ms-crm-MenuBar
{

padding-right:0px !important;
}
table.ms-crm-TemplateEditorTable #editor
{
vertical-align: top !important;
}
.KBTemplateEditorPage_ConfigureMenus_td
{
vertical-align: top;
}
div.editor
{
max-height: 430px;
}
td.ms-crm-MenuBarCell
{
vertical-align: top;
}
div.wizBoxCont
{
height: 457px;
}
table#HTMLBAR
{
border-collapse:separate;
}
div.editor>table
{
border-collapse:separate;
}
form.ms-crm-Form
{
height:100%;
}