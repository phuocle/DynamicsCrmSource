<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>







body,
input,
select,
textarea,
table.ms-crm-Loading,
DIV.ms-crm-Grid-Title
{
font-family:<%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Web_Fonts") %>;
font-size: <%= WebUtility.GetFontResourceForStyle("global.css.aspx.body.font_size")%>;
}

td
{
font-size: <%= WebUtility.GetFontResourceForStyle("global.css.aspx.td.font_size")%>;
}

th
{
font-size: <%= WebUtility.GetFontResourceForStyle("global.css.aspx.td.font_size")%>;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Normal.font_weight")%>;
}

a,
a:link img,
a:link,
a:visited img,
a:visited,
a:active img,
a:active,
a:hover img,
a:hover
{
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Normal.font_weight")%>;
text-decoration: none;
}

h2
{
font-size: <%= WebUtility.GetFontResourceForStyle("General.16px.font_size") %>;
}
button
{
font-size: <%= WebUtility.GetFontResourceForStyle("global.css.aspx.button.font_size")%>;
}




.ms-crm-Emphasis-Strong,
.ms-crm-Bold-Header,
.ms-crm-Column-SelectWidth,
.ms-crm-Field-Label-Print,
.ms-crm-Gantt-Progress-Label,
.ms-crm-List-IndexItem,
.ms-crm-List-PreviewLabel,
.ms-crm-List-SelectedIndex,
.ms-crm-MastHead-SignIn-User,
.ms-crm-Unblock-Content-Link,
.ms-crm-Wsdl-Title,
A.ms-crm-Cal-Week-Header,
A.ms-crm-Cal-Week-Header:active,
A.ms-crm-Cal-Week-Header:hover,
A.ms-crm-Cal-Week-Header:link,
A.ms-crm-Cal-Week-Header:visited,
A.ms-crm-TaskTree:active,
A.ms-crm-TaskTree:hover,
A.ms-crm-TaskTree:link,
A.ms-crm-TaskTree:visited,
div.formproperties_div,
div.ganttBlockSelected,
DIV.ms-crm-AddUsers-Licensing-AccessModeLabel,
DIV.ms-crm-Cal-Week-Header,
DIV.ms-crm-GettingStarted-Title,
GanttControlFrame_label,
Input.wfStageDescription,
div.wfStageDescription,
legend.ms-crm-recurrence-dialog-section-title,
SPAN.attachment,
span.bodyheader,
span.location,
SPAN.ms-crm-AdvFind-Message,
SPAN.ms-crm-Menu-Group,
SPAN.ms-crm-Menu-Group-Opened,
SPAN.ms-crm-Menu-Group-Hovered,
SPAN.ms-crm-NextButton,
SPAN.ms-crm-WizardForm-Header-Title,
td.am,
TD.ms-crm-AdvFind-Label,
TD.ms-crm-AdvFind-TitleLabel,
TD.ms-crm-Form-Section,
DIV.ms-crm-Form-Section,
div.ms-crm-Form-StatusBar,
TD.ms-crm-Form-StatusBar,
DIV.ms-crm-Menu-Title,
td.pm,
td.zoomheader,
TEXTAREA.wfStageDescriptionReadOnly,
TEXTAREA.wfStepDescriptionReadOnly,
DIV.wfStageDescriptionReadOnly,
DIV.wfStepDescriptionReadOnly,
.ms-crm-Form-FooterContanier TD.ms-crm-Field-Data-Print,
TR.feEntityHeadingText
{
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight")%>;
}

TD.noteCreatedField
{
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Normal.font_weight")%>;
}

TD.noteSubjectField
{
font-weight: <%= WebUtility.GetFontResourceForStyle("General.600.font_weight")%>;
}

TABLE.headerContainerTable ms-crm-Field-Label-Print,
TABLE.headerContainerTable ms-crm-Field-Data-Print,
.ms-crm-Form-FooterContainer TD.ms-crm-Field-Label-Print,
.ms-crm-Emphasis-None,
span.InformationItem
{
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Normal.font_weight")%>;
}

.ms-crm-Menu-Text
{
font-size: <%= WebUtility.GetFontResourceForStyle("Standard.Menu.font_size")%>;
}

.ms-crm-Error-Header
{
font-size: <%= WebUtility.GetFontResourceForStyle("General.14px.font_size") %>;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight") %>;
}
DIV.ms-crm-Dialog-Header-Title
{
font-weight:	<%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight")%>;
font-size:		<%= WebUtility.GetFontResourceForStyle("Dialogs.css.aspx.DIV.header.font_size")%>;
}
DIV.ms-crm-RefreshDialog-Header-Title,
TD.ms-crm-RefreshDialog-Error-Title
{
font-weight:	<%= WebUtility.GetFontResourceForStyle("General.Lighter.font_weight")%>;
font-size:		<%= WebUtility.GetFontResourceForStyle("RefreshDialogs.css.aspx.DIV.header.font_size")%>;
}
.ms-crm-Field-Required
{
font-weight:	<%= WebUtility.GetFontResourceForStyle("Req.font_weight")%>;
}
.ms-crm-Field-Recommended
{
font-weight:		<%= WebUtility.GetFontResourceForStyle("Rec.font_weight")%>;
}
.ms-crm-NavHeader-Title,
.ms-crm-ContextHeader-Title,
.ms-crm-Dialog-Title-Reversed,
.ms-crm-Dialog-Title
{
font-weight:    <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight") %>;
font-size:      <%= WebUtility.GetFontResourceForStyle("General.14px.font_size") %>;
}

.ms-crm-Setting-ContextHeader-Title
{
font-size:      <%= WebUtility.GetFontResourceForStyle("General.21px.font_size") %>;
}

TABLE.popupMenu
{
font-size: <%= WebUtility.GetFontResourceForStyle("popupmenu.css.aspx.TABLE.popupMenu.font_size")%>;
}
span.ms-crm-Form-Title
{
font-size:		<%= WebUtility.GetFontResourceForStyle("menu.css.aspx.td.formTitle.font_size")%>;
font-weight:	<%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight")%>;
}
span.ms-crm-solution-title
{
font-size:		<%= WebUtility.GetFontResourceForStyle("menu.css.aspx.td.formTitle.font_size")%>;
font-weight:	<%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight")%>;
}
.ms-crm-Form-Breadcrumb
{
font-size:		<%= WebUtility.GetFontResourceForStyle("menu.css.aspx.td.formBreadcrumb.font_size")%>;
font-weight:	<%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight")%>;
}





li.ms-crm-Tab
{
font-size: <%= WebUtility.GetFontResourceForStyle("tabs.css.aspx.span.tab.font_size")%>;
}
DIV.wizHead
{
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight")%>;
font-size: <%= WebUtility.GetFontResourceForStyle("taskbox.css.aspx.td.wizHead.font_size")%>;
}




.ms-crm-Error-AdditionalInformation
{
font-weight:<%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight") %>;
font-size:<%= WebUtility.GetFontResourceForStyle("General.10px.font_size") %>;
}
TD.ms-crm-Dialog-Error-Title
{
font-weight:	<%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight")%>;
font-size:		<%= WebUtility.GetFontResourceForStyle("General.14px.font_size")%>;
font-family:    <%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Web_Fonts") %>;
}
TD.ms-crm-Dialog-Error-Body
{
font-size:		<%= WebUtility.GetFontResourceForStyle("General.11px.font_size")%>;
font-family:    <%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Web_Fonts") %>;
}
A.ms-crm-Dialog-Error-Link,
A.ms-crm-Dialog-Error-Link:hover
{
font-size:		<%= WebUtility.GetFontResourceForStyle("General.11px.font_size")%>;
font-family:    <%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Web_Fonts") %>;
}
.ms-crm-Grid-Title-Print
{
font-size: <%= WebUtility.GetFontResourceForStyle("General.16px.font_size") %>;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight") %>;
}
TD.ms-crm-MastHead-SignIn
{
font-size: <%= WebUtility.GetFontResourceForStyle("General.11px.font_size") %>;
}
div.aboutdefault_div_warnings
{
font-size:<%= WebUtility.GetFontResourceForStyle("General.10px.font_size") %>;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Normal.font_weight") %>;
}
div.Articlesedit_article_div_secEdit
{
font-size: <%= WebUtility.GetFontResourceForStyle("General.9pt.font_size") %>;
}
.ms-crm-StatusBar-Copyright
{
font-size:          <%= WebUtility.GetFontResourceForStyle("General.9px.font_size") %>;
}
table.ms-crm-ViewForm-Header
{
font-size:			<%= WebUtility.GetFontResourceForStyle("General.11px.font_size") %>;
}
td.ms-crm-SignIn-Banner
{
font-size:<%= WebUtility.GetFontResourceForStyle("General.18px.font_size") %>;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight") %>;
}

TH.ms-crm-Group-Links,
TH.ms-crm-Group,
A.ms-crm-Nav-Group-Heading,
A.ms-crm-Nav-Group-Heading:link,
A.ms-crm-Nav-Group-Heading:visited,
A.ms-crm-Nav-Group-Heading:active,
A.ms-crm-Nav-Group-Heading:hover,
NOBR.ms-crm-Nav-Group-Heading
{
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight")%>;
font-size: <%= WebUtility.GetFontResourceForStyle("nav.css.aspx.div.lbTitle.font_size")%>;
}
A.ms-crm-Nav-Area,
A.ms-crm-Nav-Area:link,
A.ms-crm-Nav-Area:visited,
A.ms-crm-Nav-Area:active,
A.ms-crm-Nav-Area:hover
{
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight")%>;
font-size: <%= WebUtility.GetFontResourceForStyle("left.css.aspx.table.area.font_size")%>;
}

TR.ms-crm-MiniCal-Nav,
TD.ms-crm-MiniCal-DayOfWeek,
TD.ms-crm-MiniCal-Week-Number,
TD.ms-crm-MiniCal-Day,
TD.ms-crm-MiniCal-TodayBar,
TD.ms-crm-MiniCal-TodayBar-Hovered,
DIV.ms-crm-MiniCal-TodayBar
{
font-size: <%= WebUtility.GetFontResourceForStyle("Appointment_Calendar_Font_Size")%>;
}
input.ms-crm-SelectBox
{
font-size: <%= WebUtility.GetFontResourceForStyle("select.css.aspx.input.selectBox.font_size")%>;
}
SELECT.ms-crm-SelectBox,
SELECT.ms-crm-SelectBox-WorkflowDesigner
{
font-size:			<%= WebUtility.GetFontResourceForStyle("select.css.aspx.SELECT.selectBox.font_size")%>;
}
.subtitle
{
font-size: <%= WebUtility.GetFontResourceForStyle("map.css.aspx.subtitle.font_size")%>;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight")%>;
}
A.linktitle,
A.linktitle:link,
A.linktitle:visited,
A.linktitle:active,
A.linktitle:hover
{
font-size: <%= WebUtility.GetFontResourceForStyle("map.css.aspx.linktitle.font_size")%>;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight")%>;
}

A.linktitlesm,
A.linktitlesm:link,
A.linktitlesm:visited,
A.linktitlesm:active,
A.linktitlesm:hover
{
font-size: <%= WebUtility.GetFontResourceForStyle("map.css.aspx.linktitlesm.font_size")%>;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight")%>;
}

div.linkhelp
{
font-size: <%= WebUtility.GetFontResourceForStyle("map.css.aspx.linkhelp.font_size")%>;
}

TEXTAREA.ms-crm-Note-Text,
TD.noteEditedField,
TEXTAREA.ms-crm-Note-Text-create
{
font-size: <%= WebUtility.GetFontResourceForStyle("Notes.css.aspx.TEXTAREA.font_size")%>;
}

DIV.Notification
{
font-size:			<%= WebUtility.GetFontResourceForStyle("Notifications.css.aspx.DIV.Notification.font_size")%>;
}
span.CategoryHeadingText
{
font-size:		<%= WebUtility.GetFontResourceForStyle("Category.css.aspx.TD.CategoryHeadingText.font_size")%>;
}
div.CategoryBody
{
font-size:			<%= WebUtility.GetFontResourceForStyle("Category.css.aspx.TD.CategoryBody.font_size")%>;
}
TD.RelatedInformationTitle
{
font-weight:<%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight")%>;
font-size:<%= WebUtility.GetFontResourceForStyle("RelatedInformation.css.aspx.TD.RelatedInformationTitle.font_size")%>;
}
DIV.AreaHeading
{
font-size:			<%= WebUtility.GetFontResourceForStyle("RelatedInformation.css.aspx.DIV.AreaHeading.font_size")%>;
font-weight:		<%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight")%>;
}
SELECT.ContextSelect
{
font-size:			<%= WebUtility.GetFontResourceForStyle("RelatedInformation.css.aspx.SELECT.ContextSelect.font_size")%>;
}
DIV.InformationLoading
{
font-size:		<%= WebUtility.GetFontResourceForStyle("RelatedInformation.css.aspx.DIV.InformationLoading.font_size")%>;
}
DIV.InformationMessage
{
font-size:		<%= WebUtility.GetFontResourceForStyle("RelatedInformation.css.aspx.DIV.InformationMessage.font_size")%>;
}


div.info
{
font-size: <%= WebUtility.GetFontResourceForStyle("General.16px.font_size") %>;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Normal.font_weight") %>;
}
div.release
{
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight") %>;
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
}
span.norm
{
font-weight:<%= WebUtility.GetFontResourceForStyle("General.Normal.font_weight") %>;
font-size:<%= WebUtility.GetFontResourceForStyle("General.11px.font_size") %>;
}
body.ms-crm-Cal-Body
{
font-size:			<%= WebUtility.GetFontResourceForStyle("calendar.css.aspx.BODY.font_size")%>;
}
td.ms-crm-ArticleComment-Title
{
font-size: <%= WebUtility.GetFontResourceForStyle("General.8pt.font_size") %>;
font-weight: <% = WebUtility.GetFontResourceForStyle("General.Bold.font_weight") %>;
}
td.ms-crm-ArticleComment-Body
{
font-size: <%= WebUtility.GetFontResourceForStyle("General.8pt.font_size") %>;
}
td.ms-crm-ArticleComment-Info
{
font-size: <%= WebUtility.GetFontResourceForStyle("General.7pt.font_size") %>;
}
div.ms-crm-Help-ErrorMessage
{
font-weight:<%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight") %>;
font-size:<%= WebUtility.GetFontResourceForStyle("General.16px.font_size") %>;
}
span.ms-crm-Viz-Name,
span.ms-crm-Viz-Name-hover,
span.ms-crm-Viz-Name-select,
label.ms-crm-viz-hd,
.ms-crm-Help-Toc-Heading
{
font-size: <%= WebUtility.GetFontResourceForStyle("General.13px.font_size") %>;
}
.ms-crm-Gantt-Progress-Cancel
{
font-size:<%= WebUtility.GetFontResourceForStyle("General.9.font_size") %>;
}
span.calendarTitle
{
font-size:			<%= WebUtility.GetFontResourceForStyle("apptbook.css.aspx.span.calendarTitle.font_size")%>;
font-weight:		<%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight")%>;
}
div.ganttHeaderTop
{
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight")%>;
font-size: <%= WebUtility.GetFontResourceForStyle("GanttControl.css.aspx.div.ganttHeaderTop.font_size")%>;
}
body.ganttFrame
{
font-size: <%= WebUtility.GetFontResourceForStyle("GanttControl.css.aspx.BODY.ganttFrame.font_size")%>;
}
div.ganttHeaderBottom
{
font-size: <%= WebUtility.GetFontResourceForStyle("GanttControl.css.aspx.div.ganttHeaderBottom.font_size")%>;
}
.ms-crm-Salesperson-Error
{
font-size:<%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
}
TABLE.example
{
font-size:			<%= WebUtility.GetFontResourceForStyle("formeditor.dialogs.css.aspx.TABLE.example.font_size")%>;
}
TD.example
{
font-size:			<%= WebUtility.GetFontResourceForStyle("formeditor.dialogs.css.aspx.TD.example.font_size")%>;
}
TABLE.gridheader
{
font-size:			<%= WebUtility.GetFontResourceForStyle("General.11px.font_size") %>;
}
TABLE.visualizationImageTable
{
font-family:        <%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Msgbody_Default_fonts") %>;
}
tr.gridheader
{
font-size:			<%= WebUtility.GetFontResourceForStyle("General.11px.font_size") %>;
}
.ms-crm-File-Upload
{
font-size:			<%= WebUtility.GetFontResourceForStyle("General.8pt.font_size") %>;
}
.ms-crm-SubjectTree-Label
{
font-size:<%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
font-weight:<%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight") %>;
}
div.manageAttribute_div_SchemaName
{
font-size:<%= WebUtility.GetFontResourceForStyle("General.8pt.font_size") %>;
}
div.alternateKey_div_NamePrefix
{
font-size:<%= WebUtility.GetFontResourceForStyle("General.8pt.font_size") %>;
}
input.icon
{
font-size:		<%= WebUtility.GetFontResourceForStyle("updateIcons.css.aspx.input.icon.font_size")%>;
}
div.ms-crm-ViewManager
{
font-size:<%= WebUtility.GetFontResourceForStyle("General.11px.font_size") %>;
}
div.secTitle
{
font-weight:<%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight") %>;
font-size: <%= WebUtility.GetFontResourceForStyle("General.11px.font_size") %>;
}
div.WizardTitle
{
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight") %>;
font-size: <%= WebUtility.GetFontResourceForStyle("General.11px.font_size") %>;
}
TD.ms-crm-WizardForm-Header-Title
{
font-size: <%= WebUtility.GetFontResourceForStyle("General.14px.font_size") %>;
}
A.ms-crm-InlineTabHeaderText,
A.ms-crm-InlineTabHeaderText:link,
A.ms-crm-InlineTabHeaderText:visited,
A.ms-crm-InlineTabHeaderText:active,
A.ms-crm-InlineTabHeaderText:hover
{
font-size: <%= WebUtility.GetFontResourceForStyle("Form.Tab.Header.FontSize") %>;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight") %>;
}

a.ms-crm-InlineTabHeaderText:hover
{
text-decoration: none;
}
DIV.ms-crm-Tab-Print
{
font-size:			<%= WebUtility.GetFontResourceForStyle("print.css.aspx.DIV.printTab.font_size")%>;
font-weight:		<%= WebUtility.GetFontResourceForStyle("print.css.aspx.DIV.printTab.font_weight")%>;
}

LABEL.DashboardNameHint
{
font-size: <%= WebUtility.GetFontResourceForStyle("General.14px.font_size") %>;
}
DIV.editor
{
font-family: <%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Msgbody_Default_fonts") %>;
font-size: <%= WebUtility.GetFontResourceForStyle("General.10px.font_size") %>;
}
li.ms-crm-CommandBarItem
{
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
text-transform: uppercase;
}
div.ui-dialog-content li.ms-crm-CommandBarItem
{
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
text-transform: none;
}
li.ms-crm-CommandBar-MoreMenu
{
font-size: <%= WebUtility.GetFontResourceForStyle("General.14px.font_size") %>;
font-weight:<%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight") %>;
}
.ms-crm-RefreshDialog-Button,
.ms-crm-RefreshDialog-Header-Desc,
.ms-crm-RefreshDialog-Main,
.ms-crm-RefreshDialog-Main-HeaderLess
{
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
}
a.ms-crm-List-Sortable:hover
{
text-decoration: none;
}