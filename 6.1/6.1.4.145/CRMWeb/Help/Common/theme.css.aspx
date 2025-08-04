<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>
<%@ Import Namespace="CrmTheme=Microsoft.Crm.Application.Themes.Theme" %>
<%@ Import Namespace="Microsoft.Crm.Application.Security" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>

body.ms-crm-Setting-Context-top,
body
{
<% = this.GetStyleCss(CrmTheme.Current.Global.PageBody) %>
}

div.ms-crm-TopBarContainerGlobal
{
<% = this.GetStyleCss(CrmTheme.Current.Global.Masthead) %>
}

div.ms-crm-TopBarContainerForm
{
<% = this.GetStyleCss(CrmTheme.Current.Form.Masthead) %>
}

A.ms-crm-MastHead-UserInfo-Other,
SPAN.ms-crm-MastHead-UserInfo-Other
{
<% = this.GetStyleCss(CrmTheme.Current.Global.UserInfoText) %>
}

A.ms-crm-MastHead-UserInfo-Record,
SPAN.ms-crm-MastHead-UserInfo-Record
{
<% = this.GetStyleCss(CrmTheme.Current.Global.UserInfoRecordText) %>
}

A.ms-crm-MastHead-UserInfo-SignOut,
SPAN.ms-crm-MastHead-UserInfo-SignOut
{
<% = this.GetStyleCss(CrmTheme.Current.Global.SignOutText) %>
}

A.ms-crm-MastHead-UserInfo-Record-SignOut,
SPAN.ms-crm-MastHead-UserInfo-Record-SignOut
{
<% = this.GetStyleCss(CrmTheme.Current.Global.RecordSignOutText) %>
}


table.htmlBar
{
<% = this.GetStyleCss(CrmTheme.Current.Global.RichTextEditor) %>
}

SPAN.htmlBtnHideable
{
<% = this.GetStyleCss(CrmTheme.Current.Global.RichTextEditorText) %>
}

DIV.ms-crm-AdvFind-TitleArea
{
<% = this.GetStyleCss(CrmTheme.Current.Global.AdvancedFindFilterTitleBack) %>
}

DIV.ms-crm-AdvFind-EmptyField,
DIV.ms-crm-AdvFind-SelectedFilterField
{
<% = this.GetStyleCss(CrmTheme.Current.Global.AdvancedFindBorder) %>
}

div.ms-crm-Context-cell,
div.ms-crm-ContextHeader-Title,
div.ms-crm-Setting-ContextHeader-Title,
table.home_import_table,
td.homepage_menubar,
.ms-crm-appgridmenubar,
.homepage_table,
DIV.feFilterEditor,
.feAFControls,
TABLE.ms-crm-AdvFind-Title-table-WithTopBorder,
TABLE.ms-crm-AdvFind-Title-table,
DIV.ms-crm-AdvFindControl,
.ms-crm-menutopborder,
.ms-crm-PaneControl-LeftRight-footer,
.ms-crm-PaneControl-TopDown-footer,
.ms-crm-CC-splitter,
div.dashboard-brdr,
.ms-crm-control-SideStrip,
table.ms-crm-control-strip-table,
IFRAME.ms-crm-Email-Body,
IFRAME.ms-crm-Custom,
div.ms-crm-DataField,
div.ms-crm-ToolBar-Shadow,
TD.ms-crm-control-SideStrip-LeftRight,
TD.ms-crm-visualizationpane-paneTD
{
<% = this.GetStyleCss(CrmTheme.Current.Global.GeneralBorder) %>
}

TD.ms-crm-Cal-Day-Time
{
<% = this.GetStyleCss(CrmTheme.Current.Global.TitleSectionBack) %>
}

DIV.ms-crm-Home-Cal-Body
{
<% = this.GetStyleCss(CrmTheme.Current.Global.InnerFrameBack) %>
<% = this.GetStyleCss(CrmTheme.Current.Global.CalendarNavBorder) %>
}

div.ms-crm-Home-Cal-CreateNew-Title,
DIV.ms-crm-Home-Cal-Header
{
<% = this.GetStyleCss(CrmTheme.Current.Global.DateText) %>
}

div.ms-crm-Home-Cal-Views-Title
{
<% = this.GetStyleCss(CrmTheme.Current.Global.DateText) %>
<% = this.GetStyleCss(CrmTheme.Current.Global.Gridline) %>
}

Div.ms-crm-Cal-Week-Header
{
<% = this.GetStyleCss(CrmTheme.Current.Global.Gridline) %>
}

TD.ms-crm-Cal-Month-Nav
{
<% = this.GetStyleCss(CrmTheme.Current.Global.DateBarNavGridLine) %>
}

ul.ms-crm-Home-Cal-CreateNew-Items,
body.ms-crm-Cal-Body
{
<% = this.GetStyleCss(CrmTheme.Current.Global.CalendarTitleText) %>
<% = this.GetStyleCss(CrmTheme.Current.Global.Gridline) %>
}
td.ganttHeaderRowBottom,
div.ganttHeaderTop,
div.ganttContainer,
div.gridSpacer
{
<% = this.GetStyleCss(CrmTheme.Current.Global.ServiceCalendarLine) %>
}

hr.separator
{
<% = this.GetStyleCss(CrmTheme.Current.Global.Separator) %>
}

div#ganttPageBodyTable,
div.calendarPane
{
<% = this.GetStyleCss(CrmTheme.Current.Global.ServiceCalendarDateSections) %>
}

div.gridSpacer,
div.ganttSheetHeader,
td.bottomSpacerBar
{
<% = this.GetStyleCss(CrmTheme.Current.Global.ServiceCalendarTitleBack) %>
}

TABLE.ms-crm-Cal-Month-DayOfWeek-Header
{
<% = this.GetStyleCss(CrmTheme.Current.Global.WeekdayBarBack) %>
}
TD.ms-crm-Cal-Month-Day-NotCurrent
{
<% = this.GetStyleCss(CrmTheme.Current.Global.CalDayInactiveBack) %>
}

TD.ms-crm-Cal-Month-Day,
TD.ms-crm-Cal-Month-DayOfWeek
{
<% = this.GetStyleCss(CrmTheme.Current.Global.CalendarLines) %>
}

DIV.ms-crm-MenuBar
{
<% = this.GetStyleCss(CrmTheme.Current.Form.ToolBar) %>
}

div#rofContainer,
div#readFormNavContainer,
div#rofContainer div.ms-crm-Form-Container
{
<% = this.GetStyleCss(CrmTheme.Current.Form.DataContainer) %>
}

UL.ms-crm-MenuList,
div.ms-crm-Standard-Popup,
SPAN.ms-crm-Menu-Group,
SPAN.ms-crm-Menu-Group-Opened,
SPAN.ms-crm-Menu-Group-Hovered
{
<% = this.GetStyleCss(CrmTheme.Current.Global.RightClickMenuChannel) %>
}

button
{
<% = this.GetStyleCss(CrmTheme.Current.Global.Button) %>
}

BUTTON.ms-crm-Button-Hover
{
<% = this.GetStyleCss(CrmTheme.Current.Global.ButtonHover) %>
}

DIV.feEntityHeadingBar,
.ms-crm-PaneControl-LeftRight-footer,
.ms-crm-PaneControl-TopDown-footer,
TD.ms-crm-gridPaneSepMotionHorTD,
DIV.ms-crm-gridPaneSepMotionHorDiv,
div.ms-crm-gridPaneSepDivVer,
DIV.ms-crm-WizardForm-Main,
table.ms-crm-Form-Title,
TABLE.ms-crm-Form-Title-NoNav,
DIV.ms-crm-Form-Layout,
TABLE.ms-crm-Form-Layout
{
<% = this.GetStyleCss(CrmTheme.Current.Form.PageDataArea) %>
}

span.ms-crm-Form-Entity-Name
{
<% = this.GetStyleCss(CrmTheme.Current.Form.Header) %>
vertical-align: bottom;
}

.ms-crm-Form-Breadcrumb,
h1.ms-crm-Form
{
<% = this.GetStyleCss(CrmTheme.Current.Form.Header) %>
}

h1.ms-crm-FormMenuBarHeader
{
<% = this.GetStyleCss(CrmTheme.Current.Form.FormMenuBarHeader) %>
}

.ms-crm-FormMenuBarBreadcrumb
{
<% = this.GetStyleCss(CrmTheme.Current.Form.FormMenuBarBreadcrumb) %>
}

h2.ms-crm-Form
{
<% = this.GetStyleCss(CrmTheme.Current.Form.Tab) %>
}

h3.ms-crm-Form,
.refresh-form h2.ms-crm-Form
{
<% = this.GetStyleCss(CrmTheme.Current.Form.SectionTitle) %>
}

TD.noteSubjectField
{
<% = this.GetStyleCss(CrmTheme.Current.Form.Section) %>
}

TD.ms-crm-Form-SectionBar
{
<% = this.GetStyleCss(CrmTheme.Current.Form.SectionLine) %>
}
DIV.ms-crm-Form-SectionBar
{
<% = this.GetStyleCss(CrmTheme.Current.Form.SectionLine) %>
}
BODY.NotesData hr
{
<% = this.GetStyleCss(CrmTheme.Current.Global.SplitterLine) %>
}

.noteHeaderSelected,
.noteTextAreaSelected
{
<% = this.GetStyleCss(CrmTheme.Current.Global.NoteTitleSelected) %>
}

TD.ms-crm-Field-Recommended,
DIV.ms-crm-Field-Recommended,
TD.ms-crm-Field-Normal,
TD.ms-crm-ReadField-Normal,
DIV.ms-crm-ReadField-Normal
{
<% = this.GetStyleCss(CrmTheme.Current.Form.ElementLabel) %>
}
.ms-crm-Form-HeaderContainer
{
<% = this.GetStyleCss(CrmTheme.Current.Form.DataContainer) %>
}

DIV.ms-crm-InlineTabContainer-Read
{
<% = this.GetStyleCss(CrmTheme.Current.Form.DataContainer) %>
}

.ms-crm-Form-Page
{
<% = this.GetStyleCss(CrmTheme.Current.Form.DataContainer) %>
<% = this.GetStyleCss(CrmTheme.Current.Form.FormHeader) %>
}

TABLE.headerContainerTable .ms-crm-Field-Label-Print,
DIV.ms-crm-Field-Normal
{
<% = this.GetStyleCss(CrmTheme.Current.Form.FormHeaderSubfield) %>
}

.ms-crm-Field-Required
{
<% = this.GetStyleCss(CrmTheme.Current.Form.FormRequiredField) %>
}

DIV.ms-crm-Form-HeaderContainer,
A.ms-crm-Masthead-LaunchMobileExpress
{
<% = this.GetStyleCss(CrmTheme.Current.Form.ROFormHeader) %>
}

.ms-crm-Form-FooterContainer TD.ms-crm-Field-Label-Print,
.ms-crm-Form-Title-Label
{
<% = this.GetStyleCss(CrmTheme.Current.Form.FormTitleLabel) %>
}

TABLE.headerContainerTable .ms-crm-Field-Data-Print
{
	<% = this.GetStyleCss(CrmTheme.Current.Form.NavigationArea) %>
}

.ms-crm-Form-FooterContainer TD.ms-crm-Field-Data-Print,
.ms-crm-Form-Title-Data,
.ms-crm-Form-Title-Data h1,
.ms-crm-LookupItemText-Color,
TD.RelatedInformationTitle
{
<% = this.GetStyleCss(CrmTheme.Current.Form.FormTitleData) %>
}

.ms-crm-Field-Label-Print
{
<% = this.GetStyleCss(CrmTheme.Current.Form.ElementPrintLabel) %>
}

.ms-crm-Field-Data-Print
{
<% = this.GetStyleCss(CrmTheme.Current.Form.ElementPrintValue) %>
}

a.ms-crm-List-Message-Link-Lite,
INPUT.ms-crm-Email-Address,
INPUT.ms-crm-LiveId-Email-Address,
SPAN.ms-crm-Lookup-Item,
INPUT.ms-crm-Url
{
<% = this.GetStyleCss(CrmTheme.Current.Form.HeaderHyperlink) %>
}

SPAN.ms-crm-Lookup-Item SPAN.ms-crm-LookupItem-Name,
SPAN.ms-crm-CommandBar-Menu
{
<% = this.GetStyleCss(CrmTheme.Current.Form.LookupTextColor) %>
}

SPAN.ms-crm-Lookup-Item SPAN.ms-crm-LookupItem-Seperator
{
<% = this.GetStyleCss(CrmTheme.Current.Form.LookupTextColor) %>
}

DIV.ms-crm-Form-Information-Title
{
<% = this.GetStyleCss(CrmTheme.Current.Form.AreaTitle) %>
}

.ms-crm-Dashboard-Background,
.ms-crm-Form-Dashboard,
.ms-crm-Dashboard-Body,
.ms-crm-NRForm-Main-Container,
.ms-crm-Form-AreaContainer-qrk,
BODY.NotesData,
div.ms-crm-InlineTab
{
<% = this.GetStyleCss(CrmTheme.Current.Form.Body) %>
}

ul.ms-crm-TabBar
{
<% = this.GetStyleCss(CrmTheme.Current.Global.TabBar) %>
}

li.ms-crm-Tab
{
<% = this.GetStyleCss(CrmTheme.Current.Global.TabStripTab) %>
}

li.ms-crm-Tab-Selected
{
<% = this.GetStyleCss(CrmTheme.Current.Global.TabStripTab.SelectedStyle) %>
}

div.ms-crm-TabS,
div.ms-crm-Tab
{
<% = this.GetStyleCss(CrmTheme.Current.Global.TabStripTabBody) %>
}

DIV.ms-crm-MiniCal-TodayBar,
TD.ms-crm-MiniCal-TodayBar,
TD.ms-crm-MiniCal-DayOfWeek,
TD.ms-crm-MiniCal-Week-Number,
TD.ms-crm-MiniCal-Day
{
<% = this.GetStyleCss(CrmTheme.Current.Global.InnerFrameBack) %>
}

TD.ms-crm-MiniCal-Header
{
<% = this.GetStyleCss(CrmTheme.Current.Global.MiniCalHeader) %>
}
TD.ms-crm-MiniCal-Day-Today
{
<% = this.GetStyleCss(CrmTheme.Current.Global.MiniCalDayToday) %>
}

TD.ms-crm-MiniCal-Month,
TD.ms-crm-MiniCal-TodayBar,
TD.ms-crm-MiniCal-TodayBar-Hovered
{
<% = this.GetStyleCss(CrmTheme.Current.Global.MiniCalendarTodayBar) %>
}

DIV.ms-crm-MiniCal-TodayBar
{
<% = this.GetStyleCss(CrmTheme.Current.Global.MiniCalendarTodayBarBorder) %>
}
TD.ms-crm-MiniCal-Day-NotCurrent
{
<% = this.GetStyleCss(CrmTheme.Current.Global.MiniCalDayNotCurrent) %>
}
.ms-crm-MiniCal-Border,
div.ms-crm-Home-Cal-MiniCal
{
<% = this.GetStyleCss(CrmTheme.Current.Global.MiniCalBorder) %>
}
TR.ms-crm-MiniCal-Nav
{
<% = this.GetStyleCss(CrmTheme.Current.Global.MiniCalNav) %>
}
TD.ms-crm-MiniCal-Day-Hilited-Current
{
<% = this.GetStyleCss(CrmTheme.Current.Global.MiniCalDayCurrent) %>
}
TD.ms-crm-MiniCal-Day-Hovered,
TD.ms-crm-MiniCal-Month-Hovered,
TD.ms-crm-MiniCal-Nav-Button-Hovered,
TD.ms-crm-MiniCal-TodayBar-Hovered
{
<% = this.GetStyleCss(CrmTheme.Current.Global.MiniCalHovered) %>
}
.ms-crm-Form-Background
{
	/* Original
	background-image: url(/_imgs/form_back.gif);
	*/
}

Div.ms-crm-Form-FormFrameBkgd, TR.ms-crm-Form-FormFrameBkgd
{
<% = this.GetStyleCss(CrmTheme.Current.Form.FormFrameBackground) %>
}

TR.ms-crm-TitleRowBkgd
{
<% = this.GetStyleCss(CrmTheme.Current.Global.TitleRowBackground) %>
}

div.crmAppNav,
div.tree_container
{
<% = this.GetStyleCss(CrmTheme.Current.Global.AppNavBar) %>
}

.ms-cui-tabBody
{
<% = this.GetStyleCss(CrmTheme.Current.Global.Ribbon) %>
}

LI.ms-crm-NavBar-Subarea-Selected,
a.ms-crm-navtree-group-heading-selected,
a.ms-crm-navtree-subarea-link-selected
{
<% = this.GetStyleCss(CrmTheme.Current.Global.AppNavSubareaSelected) %>
}

LI.ms-crm-NavBar-Subarea-Selected-Hovered
{
<% = this.GetStyleCss(CrmTheme.Current.Global.AppNavSubareaSelectedHovered) %>
}

TR.ms-crm-Form-FieldAlternateFieldBkgd
{
<% = this.GetStyleCss(CrmTheme.Current.Form.FormAlternateFieldBackground) %>
}

TD.BizRolesedit_td_u,
TD.BizRolesedit_td_r
{
<% = this.GetStyleCss(CrmTheme.Current.Form.FormSectionLine) %>
}

.ms-crm-ChartText
{
<% = this.GetStyleCss(CrmTheme.Current.Global.ChartText) %>
}

.ms-crm-StatusLabel
{
<% = this.GetStyleCss(CrmTheme.Current.Global.StatusLabel) %>
}

A.ms-crm-Nav-Subarea-Link,
A.ms-crm-Nav-Subarea-Link:link,
A.ms-crm-Nav-Subarea-Link:visited,
A.ms-crm-Nav-Subarea-Link:active
{
<% = this.GetStyleCss(CrmTheme.Current.Form.NavigationArea) %>
}

A.ms-crm-Nav-Group-Heading,
A.ms-crm-Nav-Group-Heading:link,
A.ms-crm-Nav-Group-Heading:visited,
A.ms-crm-Nav-Group-Heading:active,
A.ms-crm-Nav-Group-Heading:hover,
NOBR.ms-crm-Nav-Group-Heading
{
<% = this.GetStyleCss(CrmTheme.Current.Form.NavGroupHeadingNavigationArea) %>
}

.ms-crm-Form-HeaderContainer
{
<% = this.GetStyleCss(CrmTheme.Current.Form.HeaderDashLine) %>
}
.ms-crm-Form-FooterContainer
{
<% = this.GetStyleCss(CrmTheme.Current.Form.FooterDashLine) %>
<% = this.GetStyleCss(CrmTheme.Current.Form.FormFooter) %>
}

LI.ms-crm-ImageStrip-wunderbar_sel,
LI.ms-crm-ImageStrip-wunderbar_hover,
LI.ms-crm-ImageStrip-wunderbar_sel NOBR.ms-crm-NavBar-Area-Title,
LI.ms-crm-ImageStrip-wunderbar_hover NOBR.ms-crm-NavBar-Area-Title
{
<% = this.GetStyleCss(CrmTheme.Current.Global.SiteMapItemSelected) %>
}

NOBR.ms-crm-NavBar-Area-Title
{
<% = this.GetStyleCss(CrmTheme.Current.Global.AppNavWonderBarText) %>
}

.ms-crm-ImageStrip-wunderbar_sel
{
<% = this.GetStyleCss(CrmTheme.Current.Global.AppNavWonderBarSelectBackImage) %>
}

.ms-crm-ImageStrip-wunderbar_hover
{
<% = this.GetStyleCss(CrmTheme.Current.Global.AppNavWonderBarHoverBackImage) %>
}

.ms-crm-ImageStrip-wunderbar_rest
{
<% = this.GetStyleCss(CrmTheme.Current.Global.AppNavWonderBarRestBackImage) %>
}

.associatedGrid_viewRow
{
<% = this.GetStyleCss(CrmTheme.Current.Form.AssociatedGridViewRow) %>
}

DIV.ms-crm-Category-List,
div.CategoryBody
{
<% = this.GetStyleCss(CrmTheme.Current.Form.CategoryBody) %>
}

/*set menu item background color, this must set before set hover/selected color*/
LI.ms-crm-POPUP-MenuItem,
A.ms-crm-POPUP-MenuItem-Anchor,
DIV.ms-crm-POPUP-MenuItem-Separator-h,
LI.ms-crm-AVS-MenuItem,
LI.ms-crm-VS-MenuItem,
SPAN.ms-crm-CM-MenuItem-Icon-Rest-qrk,
A.ms-crm-RS-MenuItem-Anchor,
A.ms-crm-VS-MenuItem-Anchor,
A.ms-crm-MS-MenuItem-Anchor-qrk,
DIV.ms-crm-VS-MenuItem-Separator-h,
span.ms-crm-CMsub-MenuItem-Sep-Rest,
NOBR.ms-crm-CMsub-MenuItem-Title-Rest,
SPAN.ms-crm-CMsub-MenuItem-Icon-Rest,
SPAN.ms-crm-CMsub-MenuItem-Aux-Rest
{
<% = this.GetStyleCss(CrmTheme.Current.Global.ContextMenuItemLink) %>
}

SPAN.ms-crm-Menu-FilterImgWrapper-Open,
SPAN.ms-crm-Menu-Label-Opened,
DIV.ms-crm-Menu-FilterImgWrapper-Open,
DIV.ms-crm-Menu-Label-Opened,
a.ms-cui-ctl-menu-on
{
<% = this.GetStyleCss(CrmTheme.Current.Global.MenuLabelOpened) %>
}

SPAN.ms-crm-Menu-FilterImgWrapper-Hover,
SPAN.ms-crm-Menu-Label-Hovered,
DIV.ms-crm-Menu-FilterImgWrapper-Hover,
DIV.ms-crm-Menu-Label-Hovered,
a.ms-cui-ctl-menu:hover
{
<% = this.GetStyleCss(CrmTheme.Current.Global.MenuLabelHover) %>
}

div.ms-crm-Standard-Item-Glow
{
<% = this.GetStyleCss(CrmTheme.Current.Global.PopupMenuHover) %>
}

span.ms-crm-View-Name-hover,
span.ms-crm-View-Name-select
{
<% = this.GetStyleCss(CrmTheme.Current.Global.ViewSelectorBox) %>
}

A.ms-crm-View-Name:hover,
A.ms-crm-View-Name-hover:link,
A.ms-crm-View-Name-hover:hover
{
<% = this.GetStyleCss(CrmTheme.Current.Global.ViewSelectorBoxHover) %>
}

A.ms-crm-View-Name:active,
A.ms-crm-View-Name-hover:active,
A.ms-crm-View-Name-hover:visited,
A.ms-crm-View-Name-select,
A.ms-crm-View-Name-select:link,
A.ms-crm-View-Name-select:visited,
A.ms-crm-View-Name-select:hover,
A.ms-crm-View-Name-select:active
{
<% = this.GetStyleCss(CrmTheme.Current.Global.ViewSelectorBoxSelected) %>
}

SPAN.ms-crm-CMsub-MenuItem-Aux-Hover,
span.ms-crm-CMsub-MenuItem-Sep-Hover,
SPAN.ms-crm-CMsub-MenuItem-Icon-Hover,
NOBR.ms-crm-CMsub-MenuItem-Title-Hover,
SPAN.ms-crm-in-CM-MenuItem-Icon-Hover,
SPAN.ms-crm-in-CM-MenuItem-Sep-Hover,
NOBR.ms-crm-in-CM-MenuItem-Title-Hover,
SPAN.ms-crm-CM-MenuItem-Icon-Hover,
SPAN.ms-crm-CM-MenuItem-Icon-Hover-qrk,
span.ms-crm-CM-MenuItem-Sep-Hover,
span.ms-crm-CM-MenuItem-Sep-Hover-qrk,
NOBR.ms-crm-CM-MenuItem-Title-Hover,
NOBR.ms-crm-CM-MenuItem-Title-Hover-qrk
{
<% = this.GetStyleCss(CrmTheme.Current.Global.ContextMenuBackImage18) %>
}

SPAN.ms-crm-POPUP-MenuItem-Icon-Hover,
span.ms-crm-AVS-MenuItem-Aux-Hover,
span.ms-crm-POPUP-MenuItem-Sep-Hover,
NOBR.ms-crm-POPUP-MenuItem-Title-Hover,
div.ms-crm-Standard-Item-Glow,
NOBR.ms-crm-SVS-MenuItem-Title-Hover-qrk,
NOBR.ms-crm-BVS-MenuItem-Title-Hover-qrk,
NOBR.ms-crm-TVS-MenuItem-Title-Hover-qrk,
LI.ms-crm-AVS-MenuItem-Hover,
SPAN.ms-crm-MenuItem-Label-Opened,
SPAN.ms-crm-MenuItem-Label-Hovered,
SPAN.ms-crm-MenuItem-Label-Opened,
SPAN.ms-crm-MenuItem-Label-Hovered,
TR.ms-crm-DE-PreviewSelector,
LI.ms-crm-RV-MenuItem-Hover,
LI.ms-crm-RV-view-item-MenuItem-Hover,
A.ms-crm-RV-MenuItem-Aux-Hover,
A.ms-crm-RV-view-item-MenuItem-Aux-Hover,
LI.ms-crm-MS-MenuItem-Hover-qrk,
A.ms-crm-MS-MenuItem-Aux-Hover-qrk,
A.ms-crm-MS-MenuItem-Anchor-Hover-qrk,
SPAN.ms-crm-AVS-MenuItem-Icon-Hover,
span.ms-crm-AVS-MenuItem-Sep-Hover,
NOBR.ms-crm-AVS-MenuItem-Title-Hover,
SPAN.ms-crm-VS-MenuItem-Icon-Hover,
span.ms-crm-VS-MenuItem-Sep-Hover,
NOBR.ms-crm-VS-MenuItem-Title-Hover,
A.ms-crm-RS-MenuItem-Anchor-Hover,
NOBR.ms-crm-FS-MenuItem-Title-Hover,
NOBR.ms-crm-FS-MenuItem-Title-Hover-qrk,
LI.ms-crm-LK-MenuItem-Hover,
LI.ms-crm-LK-MenuItem-Selected,
LI.ms-crm-LK-MenuItem-Hover-qrk,
LI.ms-crm-LK-MenuItem-Selected-qrk
{
<% = this.GetStyleCss(CrmTheme.Current.Global.ContextMenuBackImage20) %>
}

SPAN.ms-crm-POPUP-MenuItem-Icon-Hover,
span.ms-crm-AVS-MenuItem-Aux-Hover,
SPAN.ms-crm-CMsub-MenuItem-Aux-Hover,
SPAN.ms-crm-CMsub-MenuItem-Icon-Hover,
SPAN.ms-crm-MenuItem-Label-Opened,
SPAN.ms-crm-MenuItem-Label-Hovered,
SPAN.ms-crm-MenuItem-Label-Opened,
SPAN.ms-crm-MenuItem-Label-Hovered,
A.ms-crm-RS-MenuItem-Anchor-Hover,
SPAN.ms-crm-in-CM-MenuItem-Icon-Rest,
LI.ms-crm-RV-MenuItem-Hover,
LI.ms-crm-RV-view-item-MenuItem-Hover,
A.ms-crm-RV-MenuItem-Aux-Hover,
A.ms-crm-RV-view-item-MenuItem-Aux-Hover,
LI.ms-crm-MS-MenuItem-Hover-qrk,
A.ms-crm-MS-MenuItem-Aux-Hover-qrk,
A.ms-crm-MS-MenuItem-Anchor-Hover-qrk,
SPAN.ms-crm-AVS-MenuItem-Icon-Hover,
SPAN.ms-crm-VS-MenuItem-Icon-Hover,
SPAN.ms-crm-in-CM-MenuItem-Icon-Hover,
SPAN.ms-crm-CM-MenuItem-Icon-Hover,
SPAN.ms-crm-CM-MenuItem-Icon-Hover-qrk
{
<% = this.GetStyleCss(CrmTheme.Current.Global.ContextMenuLeftPartHoverBorder) %>
}

NOBR.ms-crm-POPUP-MenuItem-Title-Hover,
SPAN.ms-crm-AVS-MenuItem-Aux-Hover,
SPAN.ms-crm-CMsub-MenuItem-Aux-Hover,
SPAN.ms-crm-MenuItem-Label-Opened,
SPAN.ms-crm-MenuItem-Label-Hovered,
SPAN.ms-crm-MenuItem-Label-Opened,
SPAN.ms-crm-MenuItem-Label-Hovered,
NOBR.ms-crm-VS-MenuItem-Title-Hover,
A.ms-crm-RS-MenuItem-Anchor-Hover,
LI.ms-crm-RV-MenuItem-Hover,
LI.ms-crm-RV-view-item-MenuItem-Hover,
A.ms-crm-RV-MenuItem-Aux-Hover,
A.ms-crm-RV-view-item-MenuItem-Aux-Hover,
LI.ms-crm-MS-MenuItem-Hover,
A.ms-crm-MS-MenuItem-Aux-Hover,
A.ms-crm-MS-MenuItem-Anchor-Hover-qrk,
NOBR.ms-crm-in-CM-MenuItem-Title-Hover,
NOBR.ms-crm-CM-MenuItem-Title-Hover,
NOBR.ms-crm-CM-MenuItem-Title-Hover-qrk
{
<% = this.GetStyleCss(CrmTheme.Current.Global.ContextMenuRightPartHoverBorder) %>
}

span.ms-crm-POPUP-MenuItem-Sep-Hover,
span.ms-crm-AVS-MenuItem-Sep-Hover,
NOBR.ms-crm-AVS-MenuItem-Title-Hover,
NOBR.ms-crm-CMsub-MenuItem-Title-Hover,
span.ms-crm-CMsub-MenuItem-Sep-Hover,
span.ms-crm-VS-MenuItem-Sep-Hover,
LI.ms-crm-RV-MenuItem-Hover,
LI.ms-crm-RV-view-item-MenuItem-Hover,
span.ms-crm-in-CM-MenuItem-Sep-Hover,
span.ms-crm-CM-MenuItem-Sep-Hover,
span.ms-crm-CM-MenuItem-Sep-Hover-qrk
{
<% = this.GetStyleCss(CrmTheme.Current.Global.ContextMenuMiddlePartHoverBorder) %>
}
SPAN.ms-crm-POPUP-MenuItem-Separator-hm,
SPAN.ms-crm-POPUP-MenuItem-Separator-hl,
SPAN.ms-crm-POPUP-header-MenuItem-Sep,
SPAN.ms-crm-POPUP-MenuItem-Sep-Rest,
span.ms-crm-CMsub-MenuItem-Sep,
SPAN.ms-crm-AVS-MenuItem-Separator-hm,
SPAN.ms-crm-AVS-MenuItem-Separator-hl,
SPAN.ms-crm-AVS-header-MenuItem-Sep-qrk,
SPAN.ms-crm-AVS-MenuItem-Sep-Rest,
SPAN.ms-crm-VS-MenuItem-Separator-hm,
SPAN.ms-crm-VS-MenuItem-Separator-hl,
span.ms-crm-TVS-MenuItem-Sep-Hover-qrk,
span.ms-crm-BVS-MenuItem-Sep-Hover-qrk,
span.ms-crm-SVS-MenuItem-Sep-Hover-qrk,
SPAN.ms-crm-VS-header-MenuItem-Sep,
SPAN.ms-crm-SVS-MenuItem-Sep-Rest-qrk,
SPAN.ms-crm-BVS-MenuItem-Sep-Rest-qrk,
SPAN.ms-crm-TVS-MenuItem-Sep-Rest-qrk,
SPAN.ms-crm-VS-MenuItem-Sep-Rest,
SPAN.ms-crm-CM-MenuItem-Separator-hl,
span.ms-crm-CM-header-MenuItem-Sep-Rest,
span.ms-crm-CM-header-MenuItem-Sep-Hover,
SPAN.ms-crm-in-CM-MenuItem-Sep-Rest,
span.ms-crm-CM-MenuItem-Sep-Rest,
span.ms-crm-CM-MenuItem-Sep-Rest-qrk,
SPAN.ms-crm-CM-MenuItem-Separator-hm
{
<% = this.GetStyleCss(CrmTheme.Current.Global.DropDownMenuSplitter) %>
}

SPAN.ms-crm-POPUP-MenuItem-Icon-Selected,
NOBR.ms-crm-POPUP-MenuItem-Title-Selected,
SPAN.ms-crm-POPUP-MenuItem-Sep-Selected,
LI.ms-crmAVS-MenuItem-Selected-qrk,
LI.ms-crmAVS-MenuItem-Selected,
TD.ms-crm-CalendarView-Selected,
LI.ms-crm-CalendarView-Selected,
span.ms-crm-CMsub-MenuItem-Sep-Selected,
NOBR.ms-crm-CMsub-MenuItem-Title-Selected,
SPAN.ms-crm-CMsub-MenuItem-Icon-Selected,
SPAN.ms-crm-CMsub-MenuItem-Aux-Selected,
SPAN.ms-crm-AVS-MenuItem-Icon-Selected,
NOBR.ms-crm-AVS-MenuItem-Title-Selected,
SPAN.ms-crm-AVS-MenuItem-Sep-Selected,
SPAN.ms-crm-VS-MenuItem-Icon-Selected,
NOBR.ms-crm-VS-MenuItem-Title-Selected,
SPAN.ms-crm-VS-MenuItem-Sep-Selected,
A.ms-crm-RS-MenuItem-Anchor-Selected,
.ms-crm-FS-Menu A.ms-crm-FS-MenuItem-Anchor-Selected,
A.ms-crm-FS-MenuItem-Anchor-Selected-qrk
{
<% = this.GetStyleCss(CrmTheme.Current.Global.ContextMenuItemSelected) %>
}

A.ms-crm-Nav-Subitem-Link,
A.ms-crm-Nav-Subitem-Link:link,
A.ms-crm-Nav-Subitem-Link:visited,
A.ms-crm-Nav-Subitem-Link:active
{
<% = this.GetStyleCss(CrmTheme.Current.Form.NavigationAreaLink) %>
}

A.ms-crm-Nav-Subarea-Selected,
A.ms-crm-Nav-Subarea-Selected:link,
A.ms-crm-Nav-Subarea-Selected:visited,
A.ms-crm-Nav-Subarea-Selected:active
{
<% = this.GetStyleCss(CrmTheme.Current.Form.NavigationAreaSelected) %>
}

A.ms-crm-Nav-Subitem-Selected,
A.ms-crm-Nav-Subitem-Selected:link,
A.ms-crm-Nav-Subitem-Selected:visited,
A.ms-crm-Nav-Subitem-Selected:active
{
<% = this.GetStyleCss(CrmTheme.Current.Form.NavigationAreaLinkSelected) %>
}

LI.ms-crm-NavBar-Subarea-Hovered,
A.ms-crm-Nav-Subarea-Hovered,
ul.ms-crm-Home-Cal-Views-Items li:hover,
ul.ms-crm-Home-Cal-CreateNew-Items li:hover
{
<% = this.GetStyleCss(CrmTheme.Current.Form.NavigationArea.HoverStyle) %>
}

A.ms-crm-Nav-Subitem-Hovered,
A.ms-crm-Nav-Subitem-Link:hover,
A.ms-crm-Nav-Subitem-Selected:hover
{
<% = this.GetStyleCss(CrmTheme.Current.Form.NavigationAreaLink.HoverStyle) %>
}

TD.ms-crm-Dialog-Header,
DIV.ms-crm-Dialog-Header
{
<% = this.GetStyleCss(CrmTheme.Current.Dialog.Header) %>
}

table.ms-crm-MiniCampaign-Header,
tr.ms-crm-MiniCampaign-Header
{
<% = this.GetStyleCss(CrmTheme.Current.Dialog.Header) %>
<% = this.GetStyleCss(CrmTheme.Current.Dialog.HeaderTitle) %>
}

.ms-crm-WizardForm-Header-Title h2,
DIV.ms-crm-Dialog-Header-Title
{
<% = this.GetStyleCss(CrmTheme.Current.Dialog.HeaderTitle) %>
}

DIV.ms-crm-StrictDialog-Header-Desc,
DIV.ms-crm-Dialog-Header-Desc
{
<% = this.GetStyleCss(CrmTheme.Current.Dialog.HeaderDescription) %>
}

td.ms-crm-MiniCampaign-Main,
DIV.ms-crm-WizardForm-Main,
TD.ms-crm-Dialog-Main,
DIV.ms-crm-Dialog-Main,
DIV.ms-crm-DialogStrict-Main,
DIV.ms-crm-DialogStrict-Main-HeaderLess,
body.ms-crm-ErrorDialog,
body.ms-crm-Dialog-Body
{
<% = this.GetStyleCss(CrmTheme.Current.Dialog.BodyObsolete) %>
}

TD.ms-crm-Dialog-Buttons,
TD.ms-crm-Dialog-Footer,
DIV.ms-crm-Dialog-Footer,
.ms-crm-DialogFooter
{
<% = this.GetStyleCss(CrmTheme.Current.Dialog.Footer) %>
}

DIV.wizHead
{
<% = this.GetStyleCss(CrmTheme.Current.Dialog.FormatToolBarTitle) %>
}

DIV.ms-crm-GridActionBar,
DIV.ms-crm-ActionBar
{
<% = this.GetStyleCss(CrmTheme.Current.Grid.ToolBar) %>
}

.ms-crm-List-Index
{
<% = this.GetStyleCss(CrmTheme.Current.Grid.ListIndex) %>
}

.ms-crm-ListControl
{
<% = this.GetStyleCss(CrmTheme.Current.Grid.GridElement) %>
}

.ms-crm-List-IndexItem,
.ms-crm-List-SelectedIndex
{
<% = this.GetStyleCss(CrmTheme.Current.Grid.ListIndexItemSelected) %>
}

SPAN.ms-crm-Menu-FilterImgWrapper,
DIV.ms-crm-Menu-FilterImgWrapper
{
<% = this.GetStyleCss(CrmTheme.Current.Grid.GridFilterBorder) %>
}

table.ms-crm-List-StatusBar
{
<% = this.GetStyleCss(CrmTheme.Current.Grid.StatusBar) %>
}

.ms-crm-List-StatusBar-Label
{
<% = this.GetStyleCss(CrmTheme.Current.Grid.StatusBarSelectionText) %>
}

.ms-crm-List-Paging
{
<% = this.GetStyleCss(CrmTheme.Current.Grid.StatusBarPageNumberText) %>
}

.ms-crm-List-DataArea,
.ms-crm-List-DataAreaEx,
.ms-crm-List-DataAreaEx-Lite
{
<% = this.GetStyleCss(CrmTheme.Current.Grid.DataArea) %>
}

.ms-crm-List-Data,
.ms-crm-List-Data A.ms-crm-List-Link,
.ms-crm-List-Data A.ms-crm-gridurl,
.ms-crm-List-Data a.ms-crm-Phone
{
<% = this.GetStyleCss(CrmTheme.Current.Grid.GridText) %>
}

.ms-crm-List-DeleteContainer,
.ms-crm-List-DataCell,
.ms-crm-List-Row
{
	<% = this.GetStyleCss(CrmTheme.Current.Grid.DataCellBorderBottom) %>
}

.ms-crm-ListAreaEx
{
<% = this.GetStyleCss(CrmTheme.Current.Grid.ListArea) %>
}

.ms-crm-List-Header
{
<% = this.GetStyleCss(CrmTheme.Current.Grid.Header) %>
}

.ms-crm-List-Title
{
<% = this.GetStyleCss(CrmTheme.Current.Grid.TitleArea) %>
}

.ms-crm-list-TitleFilter
{
<% = this.GetStyleCss(CrmTheme.Current.Grid.TitleFilterArea) %>
}
.ms-crm-list-Separator-line
{
<% = this.GetStyleCss(CrmTheme.Current.Grid.GridSeparatorLine) %>
}

TABLE#AppGridFilterContainer
{
<% = this.GetStyleCss(CrmTheme.Current.Grid.FilterArea) %>
}

TR.ms-crm-List-SelectedMultilineRow,
TR.ms-crm-List-SelectedRow,
TR.ms-crm-List-SelectedRow-Lite,
.ms-crm-List-FilterButton-Selected
{
    <% = this.GetStyleCss(CrmTheme.Current.Grid.RowSelected) %>
}

TR.ms-crm-List-SelectedRow-Lite-HighContrast > TD
{
<% = this.GetStyleCss(CrmTheme.Current.Grid.RowSelectedBorderLite) %>
}

TR.ms-crm-List-Row:hover,
TR.ms-crm-List-Row-Lite:hover
{
<% if(!Util.UseTabletExperience(UserInformation.Current)) { %>
<% = this.GetStyleCss(CrmTheme.Current.Grid.RowHoverLite) %>
<% } %>
}

TR.ms-crm-List-HoveredMultilineRow,
TR.ms-crm-List-HoveredRow
{
<% = this.GetStyleCss(CrmTheme.Current.Grid.Row.HoverStyle) %>
}

DIV.ms-crm-Grid-Title,
div.ms-crm-grid-Title-Data-Lite
{
	<% = this.GetStyleCss(CrmTheme.Current.Grid.GridTitle) %>
}

.ms-crm-DataCell-Lite
{
	<% = this.GetStyleCss(CrmTheme.Current.Grid.DataCellLite) %>
}

span.ms-crm-Viz-Name,
span.ms-crm-View-Entity-Name
{
<% = this.GetStyleCss(CrmTheme.Current.Grid.ViewLabel) %>
}

span.ms-crm-View-Name
{
<% = this.GetStyleCss(CrmTheme.Current.Grid.ViewName) %>
}
span.ms-crm-View-Name-hover
{
<% = this.GetStyleCss(CrmTheme.Current.Grid.ViewName.HoverStyle) %>
}

col.ms-crm-List-SortedColumn
{
<% = this.GetStyleCss(CrmTheme.Current.Grid.SortedColumn) %>
}

td.home_camps_td_Label,
td.home_cases_td_Label,
td.home_minicamps_td_Label,
td.home_reports_td_ViewSelector
{
<% = this.GetStyleCss(CrmTheme.Current.Grid.TitleFilterLabel) %>
}

.ms-crm-Form-AreaContainer-qrk,
.ms-crm-Form-LeftBar
{
<% = this.GetStyleCss(CrmTheme.Current.Form.Navigation) %>
}

div.linkhelp
{
<% = this.GetStyleCss(CrmTheme.Current.Settings.AreaDescription) %>
}

A.ms-crm-Link:hover
{
<% = this.GetStyleCss(CrmTheme.Current.Global.Link.HoverStyle) %>
}

A.ms-crm-Link,
A.ms-crm-Link:link,
A.ms-crm-Link:visited,
A.ms-crm-Link:active
{
<% = this.GetStyleCss(CrmTheme.Current.Global.Link) %>
}

.ms-crm-NavHeader-Title,
.ms-crm-ContextHeader-Title
{
<% = this.GetStyleCss(CrmTheme.Current.Settings.PageTitle) %>
}

.ms-crm-Setting-ContextHeader-Title
{
<% = this.GetStyleCss(CrmTheme.Current.Settings.SettingsPageTitle) %>
}

.content
{
<% = this.GetStyleCss(CrmTheme.Current.Settings.PageContents) %>
}

.navigationsubtitle
{
<% = this.GetStyleCss(CrmTheme.Current.Settings.PageSubtitle) %>
}
div.RelatedInformationPane-qrk,
div.RelatedInformationPane
{
<% = this.GetStyleCss(CrmTheme.Current.Form.FormAssistant) %>
}

A.ms-crm-FormSelector,
DIV.ms-crm-FormSelector
{
<% = this.GetStyleCss(CrmTheme.Current.Form.FormRoleTitle) %>
}

A.ms-crm-FormSelector,
A.ms-crm-FormSelector:link,
A.ms-crm-FormSelector:visited
{
<% = this.GetStyleCss(CrmTheme.Current.Form.FormRoleCtrl) %>
}

A.ms-crm-FormSelector:hover
{
<% = this.GetStyleCss(CrmTheme.Current.Form.FormRoleCtrlHover) %>
}

A.ms-crm-FormSelector-Opened,
A.ms-crm-FormSelector-Opened:link,
A.ms-crm-FormSelector-Opened:visited,
A.ms-crm-FormSelector-Opened:hover
{
<% = this.GetStyleCss(CrmTheme.Current.Form.FormRoleCtrlOpened) %>
}

NOBR.ms-crm-FormSelector-SubItem
{
<% = this.GetStyleCss(CrmTheme.Current.Form.FormRoleCtrlTabLink) %>
}

A.ms-crm-FormSelector-SubItem-Selected,
A.ms-crm-FormSelector-SubItem-Selected:link,
A.ms-crm-FormSelector-SubItem-Selected:visited,
A.ms-crm-FormSelector-SubItem-Selected:active
{
<% = this.GetStyleCss(CrmTheme.Current.Form.FormRoleCtrlTabLink.SelectedStyle) %>
}

A.ms-crm-FormSelector-SubItem-Hovered
{
<% = this.GetStyleCss(CrmTheme.Current.Form.FormRoleCtrlTabLink.HoverStyle) %>
}

UL.ms-crm-Nav-LeftBar,
DIV.ms-crm-Form-Container,
.ms-crm-FormLeftNav-TabLinksRow,
.ms-crm-Form-LeftBar-Header,
.ms-crm-Form-LeftBar
{
<% = this.GetStyleCss(CrmTheme.Current.Dialog.NavBar) %>
}

DIV.ms-crm-FormLeftNav-RelatedRow
{
<% = this.GetStyleCss(CrmTheme.Current.Dialog.NavBarRelatedRow) %>
}

DIV.ms-crm-RS-Header-Title
{
<% = this.GetStyleCss(CrmTheme.Current.Form.RecordSelectHeaderTitle) %>
}

LI.ms-crm-RS-MenuItem
{
<% = this.GetStyleCss(CrmTheme.Current.Form.RecordSelectGridLines) %>
}

UL.ms-crm-RS-Menu
{
<% = this.GetStyleCss(CrmTheme.Current.Form.RecordSelectMenu) %>
}

DIV.ms-crm-RS-Column-Title
{
<% = this.GetStyleCss(CrmTheme.Current.Form.RecordSelectColumnTitle) %>
}

DIV.ms-crm-RecordSelector-Header,
DIV.ms-crm-RS-Menu,
DIV.ms-crm-RecordSelector-Footer
{
<% = this.GetStyleCss(CrmTheme.Current.Form.RecordSelectHeader) %>
}

DIV.ms-crm-RecordSelector-Header
{
<% = this.GetStyleCss(CrmTheme.Current.Form.RecordSelectHeaderTopBorder) %>
}

DIV.ms-crm-RecordSelector-Footer
{
<% = this.GetStyleCss(CrmTheme.Current.Form.RecordSelectFooter) %>
}
.ms-crm-Form-Nav-Container
{
<% = this.GetStyleCss(CrmTheme.Current.Form.NavBarBackground) %>
}

A.recnav-up,
A.recnav-down,
A.recnav-dropdown
{
<% = this.GetStyleCss(CrmTheme.Current.Form.FormRecSetNavCtrl) %>
}

A.linktitle,
A.linktitle:link,
A.linktitle:visited,
A.linktitle:active,
A.linktitle:hover
{
<% = this.GetStyleCss(CrmTheme.Current.Settings.AreaTitle) %>
}

DIV.ms-crm-Splitter-Fixed
{
<% = this.GetStyleCss(CrmTheme.Current.Global.LeftPanelSplitterLine) %>
}

DIV.ms-crm-RecentlyViewed-Header
{
<% = this.GetStyleCss(CrmTheme.Current.Dialog.RecentlyViewedHeader) %>
}
NOBR.ms-crm-RV-Header-Title,
NOBR.ms-crm-RS-Column-Title,
SPAN.ms-crm-RV-MenuItem-Title,
SPAN.ms-crm-FS-MenuItem-Title
{
<% = this.GetStyleCss(CrmTheme.Current.Dialog.RecentlyViewedHeaderTitle) %>
}
SPAN.ms-crm-RV-view-header-MenuItem-Title,
SPAN.ms-crm-RS-MenuItem-Title,
SPAN.ms-crm-RV-view-item-MenuItem-Title
{
<% = this.GetStyleCss(CrmTheme.Current.Dialog.RecentlyViewedMenuTitle) %>
}
DIV.ms-crm-RV-Menu,
DIV.ms-crm-VS-Menu
{
<% = this.GetStyleCss(CrmTheme.Current.Dialog.RecentlyViewedMenu) %>
}
DIV.ms-crm-modalDialog-shadow
{
<% = this.GetStyleCss(CrmTheme.Current.Dialog.DialogShadow) %>
}
SPAN.ms-crm-RV-MenuItem-Separator-vm
{
<% = this.GetStyleCss(CrmTheme.Current.Dialog.RecentlyViewedMenuSeparator) %>
}
A IMG.ms-crm-MastHead-Button:hover
{
<% = this.GetStyleCss(CrmTheme.Current.Global.Masthead.HoverStyle) %>
}
A IMG.ms-crm-MastHead-Button-Selected,
A IMG.ms-crm-MastHead-Button-Selected:hover
{
<% = this.GetStyleCss(CrmTheme.Current.Global.Masthead.SelectedStyle) %>
}

SPAN.ms-crm-NavBar-Title-Icon A.ms-crm-NavBar-Title-Icon-Hovered
{
<% = this.GetStyleCss(CrmTheme.Current.Global.AppNavBarTitle.HoverStyle) %>
}

SPAN.ms-crm-NavBar-Title-Icon A.ms-crm-NavBar-Title-Icon-Selected
{
<% = this.GetStyleCss(CrmTheme.Current.Global.AppNavBarTitle.SelectedStyle) %>
}

div.ms-crm-NavBar-Title
{
<% = this.GetStyleCss(CrmTheme.Current.Global.AppNavBarTitle) %>
}

div.ms-crm-NavBar-Areas
{
<% = this.GetStyleCss(CrmTheme.Current.Global.AppNavBarAreas) %>
}
label.ms-crm-List-Sortable
{
<% = this.GetStyleCss(CrmTheme.Current.Grid.TitleLabelText) %>
}
.ms-crm-List-MessageText,
.ms-crm-List-MessageText-Lite
{
<% = this.GetStyleCss(CrmTheme.Current.Grid.ListMessageText) %>
}
NOBR.ms-crm-NavBar-Subarea-Title,
NOBR.ms-crm-navtree-subarea-title,
NOBR.ms-crm-navtree-node-title
{
<% = this.GetStyleCss(CrmTheme.Current.Global.AppNavSubareaTitle) %>
}
TR.ms-crm-Form-SubGrid-viewRow
{
<% = this.GetStyleCss(CrmTheme.Current.Form.SubGridViewRow) %>
}
.ms-crm-Form-SubGrid-Layout
{
<% = this.GetStyleCss(CrmTheme.Current.Form.SubGridLayout) %>
}

.ms-crm-Input-Container,
DIV.ms-crm-Lookup-Party,
DIV.ms-crm-Lookup,
INPUT.ms-crm-Dialog-Lookup-QuickFind
{
<% = this.GetStyleCss(CrmTheme.Current.Form.InputControl) %>
}

SELECT.ms-crm-SelectBox
{
<% = this.GetStyleCss(CrmTheme.Current.Form.SelectControl) %>
}

IFRAME.noteData
{
<% = this.GetStyleCss(CrmTheme.Current.Form.Notes) %>
}

TD.noteCreatedField,
TD.noteEditedField
{
<% = this.GetStyleCss(CrmTheme.Current.Form.NotesSecondLineText) %>
}

INPUT.ms-crm-ReadOnly,
TEXTAREA.ms-crm-ReadOnly,
DIV.ms-crm-ReadOnly,
SPAN.ms-crm-ReadOnly
{
<% = this.GetStyleCss(CrmTheme.Current.Form.ReadOnlyControl) %>
}
a.newNoteButton,
a.newNoteButton:link,
a.newNoteButton:visited,
a.newNoteButton:hover,
newNoteButton,
a.newNoteButton:active,
a.newNoteButtonSelected
{
<% = this.GetStyleCss(CrmTheme.Current.Form.NewNoteButton) %>
}
.ms-cui-jewel-label,
.ms-cui-tt-span,
.ms-cui-cg-t-i
{
<% = this.GetStyleCss(CrmTheme.Current.Global.RibbonTabTitleTextStyle) %>
}
.ms-cui-tt-a
{
<% = this.GetStyleCss(CrmTheme.Current.Global.RibbonPassiveTabTitle) %>
}
.ms-cui-tt-s > .ms-cui-tt-a,
.ms-cui-tt-s .ms-cui-tt-a:hover,
.ms-cui-tt-a:hover,
.ms-cui-cg-s .ms-cui-tt-a,
.ms-cui-cg-s .ms-cui-tt-a:hover
{
<% = this.GetStyleCss(CrmTheme.Current.Global.RibbonActiveTabTitle) %>
}
.ms-cui-tt-a:hover
{
<% = this.GetStyleCss(CrmTheme.Current.Global.RibbonPassiveTabBorder) %>
}
.ms-cui-cg-lb .ms-cui-tt-a:hover,
.ms-cui-cg-lb.ms-cui-cg-s .ms-cui-tt-s .ms-cui-tt-a:hover
{
<% = this.GetStyleCss(CrmTheme.Current.Global.RibbonActiveTabBackground) %>
}
.ms-crm-msgbar_button_cold
{
<% = this.GetStyleCss(CrmTheme.Current.Global.AppMessageBar) %>
}
.ms-crm-msgbar_button_hover
{
<% = this.GetStyleCss(CrmTheme.Current.Global.AppMessageBar.HoverStyle) %>
}
.ms-crm-msgbar_button_click
{
<% = this.GetStyleCss(CrmTheme.Current.Global.AppMessageBar.SelectedStyle) %>
}
.ms-crm-control-SideStrip-Hovered,
.ms-crm-recnav-hover,
#popoutButton:hover,
#popoutButton:focus
{
<% = this.GetStyleCss(CrmTheme.Current.Form.RecordNav.HoverStyle) %>
}
.ms-crm-recnav-selected
{
<% = this.GetStyleCss(CrmTheme.Current.Form.RecordNav.SelectedStyle) %>
}
.ms-crm-control-SideStrip
{
<% = this.GetStyleCss(CrmTheme.Current.Global.CompControlSideStrip) %>
}
.ms-crm-CompCntrlBrdr
{
<% = this.GetStyleCss(CrmTheme.Current.Global.CompControlBorder) %>
}
.ms-crm-CC-splitter
{
<% = this.GetStyleCss(CrmTheme.Current.Global.ChartPaneSplitter) %>
}
#crmInAppContent
{
<% = this.GetStyleCss(CrmTheme.Current.Global.HelpVisorBorder) %>
}
.ms-crm-SelectOn
{
<% = this.GetStyleCss(CrmTheme.Current.Form.TreeItemHover.SelectedStyle) %>
}
.ms-crm-GlowOn
{
<% = this.GetStyleCss(CrmTheme.Current.Form.TreeItemHover.HoverStyle) %>
}
span.CategoryHeadingText
{
<% = this.GetStyleCss(CrmTheme.Current.Form.CategoryHeadingText) %>
}
.ms-cui-ctl-large:hover,
.ms-cui-ctl-light-hoveredOver,
.ms-cui-ctl-medium:hover,
.ms-cui-ctl:hover,
.ms-cui-mrusb-selecteditem.ms-cui-ctl-light-hoveredOver a,
.ms-cui-ctl-thin:hover
{
<% = this.GetStyleCss(CrmTheme.Current.Global.RibbonHover) %>
}
.ms-cui-ctl-on,
.ms-cui-ctl-dark-highlight,
.ms-cui-ctl-a2.ms-cui-ctl-dark-highlight:hover,
.ms-cui-ctl-a1.ms-cui-ctl-dark-highlight:hover,
.ms-cui-mrusb-selecteditem a:hover,
.ms-cui-ctl-hoveredOver
{
<% = this.GetStyleCss(CrmTheme.Current.Global.RibbonSelected) %>
}
.ms-cui-ctl-split-hover,
.ms-cui-mrusb-selecteditem.ms-cui-ctl-split-hover > *
{
<% = this.GetStyleCss(CrmTheme.Current.Global.RibbonSplitHover) %>
}
.ms-cui-ctl-mousedown,
.ms-cui-ctl-large:active,
.ms-cui-ctl-medium:active,
.ms-cui-ctl:active,
.ms-cui-ctl-a1:active,
.ms-cui-ctl-a2:active,
.ms-cui-ctl-thin:active,
.ms-cui-ctl-on:hover
{
<% = this.GetStyleCss(CrmTheme.Current.Global.RibbonSelected.HoverStyle) %>
}
.ms-crm-stripLeftRight
{
<% = this.GetStyleCss(CrmTheme.Current.Global.ChartPaneLabel) %>
}
NOBR.ms-crm-FS-MenuItem-Title-Hover,
NOBR.ms-crm-FS-MenuItem-Title-Hover-qrk
{
<% = this.GetStyleCss(CrmTheme.Current.Form.FormSelectorHoverBorder) %>
}
DIV.listEdit_valuelist
{
<% = this.GetStyleCss(CrmTheme.Current.Global.PicklistBorder) %>
}
div.editPage,
TD.ms-crm-Email-Body,
DIV.editor
{
<% = this.GetStyleCss(CrmTheme.Current.Form.RichTextEditorBorder) %>
}
.ms-crm-WizardForm-Footer,
.ms-crm-WizardForm-Main,
body.ms-crm-workflow-template-page,
body.ms-crm-solution-wizard,
tr.ms-crm-solution-wizard
{
<% = this.GetStyleCss(CrmTheme.Current.Dialog.BodyBackground) %>
}
.ms-crm-lightbox
{
<% = this.GetStyleCss(CrmTheme.Current.Global.LightBoxBackground) %>
}
.jstree-default .jstree-hovered
{
<% = this.GetStyleCss(CrmTheme.Current.Global.SubjectLookupBackground) %>
}

.mscrm-globalqc-actionbutton
{
<% = this.GetStyleCss(CrmTheme.Current.Dialog.Button) %>
}

IMG.ms-crm-ImageStrip-grid_refresh_hover,
IMG.ms-crm-ImageStrip-grid_refresh,
IMG.ms-crm-GridRefreshImage
{
<% = this.GetStyleCss(CrmTheme.Current.Grid.RefreshImageBackground) %>
}

.ms-crm-RefreshDialog-Button
{
<% = this.GetStyleCss(CrmTheme.Current.Dialog.Button) %>
}
.ms-crm-RefreshDialog-Main,
.ms-crm-RefreshDialog-Main-HeaderLess
{
<% = this.GetStyleCss(CrmTheme.Current.Dialog.Body) %>
}
.ms-crm-RefreshDialog-Header
{
<% = this.GetStyleCss(CrmTheme.Current.Dialog.Header) %>
}
.ms-crm-RefreshDialog-Header-Title,
TD.ms-crm-RefreshDialog-Error-Title
{
<% = this.GetStyleCss(CrmTheme.Current.Dialog.HeaderTitle) %>
}
.ms-crm-RefreshDialog-Header-Desc
{
<% = this.GetStyleCss(CrmTheme.Current.Dialog.HeaderDescription) %>
}
.ms-crm-RefreshDialog-Footer
{
<% = this.GetStyleCss(CrmTheme.Current.Dialog.Footer) %>
}
