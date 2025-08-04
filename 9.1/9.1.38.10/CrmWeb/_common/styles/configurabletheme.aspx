<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" CodeBehind="Microsoft.Crm.Application.Pages.dll"%>
<%@ Import Namespace="CrmTheme=Microsoft.Crm.Application.Themes.Theme" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Security" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

a.ms-crm-breadcrumb-link:hover,
SPAN.ms-crm-Menu-Label-Hovered
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.HoverEffectColorAndBorderChange)%>
<%} else{ %>
<% = this.GetStyleCss(CrmTheme.Current.Global.MenuLabelHover) %>
<% }%>
}

div.treeHome:hover,
SPAN.ms-crm-VS-MenuItem-Icon-Hover,
span.ms-crm-VS-MenuItem-Sep-Hover,
NOBR.ms-crm-FS-MenuItem-Title-Hover,
NOBR.ms-crm-VS-MenuItem-Title-Hover
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetBackgroundColorWithRGBA(CrmTheme.Current.ConfigurableTheme.HoverEffectColorChange, 1)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.ContextMenuBackImage20) %>
<% } %>
}

TR.ms-crm-List-Row:hover,
TR.ms-crm-List-Row-Lite:hover,
TH.ms-crm-List-Sortable:hover,
.cc-grid.cc-grid-desktop .wj-flexgrid .wj-cell.wj-state-selected
{
<% if (!Util.UseTabletExperience(UserInformation.Current)) { %>
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetBackgroundColorWithRGBA(CrmTheme.Current.ConfigurableTheme.HoverEffectColorChange, 1)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Grid.RowHoverLite)%>
<% }}%>
}

.notesWall .post.readMode .attachAction:hover,
.notesWall .post.readMode .attachAction:hover .imageAction
{
<% if (!Util.UseTabletExperience(UserInformation.Current)) { %>
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetBackgroundColorWithRGBA(CrmTheme.Current.ConfigurableTheme.PageHeaderBackgroundColor, 1)%>
<% =this.CssOpacity(CrmTheme.Current.ConfigurableTheme.PageHeaderBackgroundColor.BackColor, 1, "color")%>
<% } else { %>
<% = this.GetBackgroundColorWithRGBA(CrmTheme.Current.Global.NavBarBackground, 0.1)%>
<% =this.CssOpacity(CrmTheme.Current.Global.NavBarBackground.BackColor, 0.1, "color")%>
<% }}%>
}

.ms-crm-control-SideStrip-Hovered,
.ms-crm-recnav-hover,
#popoutButton:hover,
#popoutButton:focus,
#closeButton:hover,
#closeButton:focus,
#hierarchyButton:hover,
#hierarchyButton:focus
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetBackgroundColorWithRGBA(CrmTheme.Current.ConfigurableTheme.HoverEffectColorChange, 1)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Form.RecordNav.HoverStyle) %>
<% }%>
}

LI.menuSelected
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.HoverEffectColorAndBorderChange)%>
<%} else{ %>
<% = this.GetStyleCss(CrmTheme.Current.Global.CommandButtonHover.HoverStyle)%>
<% }%>
}

.ms-crm-commandbar-hoveredOver
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.HoverEffectColorAndBorderChangeImportant)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.CommandButtonHover.HoverStyle)%>
<% }%>
}

.ms-crm-commandbar-split-hover
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.HoverEffectBorderColorChangeImportant)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.CommandSplitButtonHover.HoverStyle)%>
<% }%>
}

.ui-flyout-dialog .ui-dialog-buttonpane .ui-state-hover:hover,
button.activity-button-container:hover
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.DialogButtonHoverEffect)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Dialog.DialogButtonHover)%>
<% }%>
}

.notesWall .notesTextBoxDiv button.attachLink:hover,
.notesWall .notesTextBoxDiv button.doneLink:hover
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.NotesDialogButtonHoverEffectImportant)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Dialog.DialogButtonHover)%>
<% }%>
}

a.ms-crm-List-Message-Link-Lite,
INPUT.ms-crm-Email-Address,
INPUT.ms-crm-LiveId-Email-Address,
SPAN.ms-crm-Lookup-Item,
INPUT.ms-crm-Url
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.GlobalLink)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Form.HeaderHyperlink) %>
<% } %>
}

.ms-crm-List-IndexItem,
.ms-crm-List-SelectedIndex
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.CssOpacityWithImportant(CrmTheme.Current.ConfigurableTheme.GlobalLink.ForeColor, 1, "color")%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Grid.ListIndexItemSelected) %>
<% } %>
}

.ms-crm-Grid-HeaderBackColor
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetBackgroundColorWithRGBA(CrmTheme.Current.ConfigurableTheme.MainNavBarColor, 0.04)%>
<% } else { %>
<% = this.GetBackgroundColorWithRGBA(CrmTheme.Current.Global.NavBarBackground, 0.04)%>
<% }%>
background-image: none;
}

.text a,
.processStep.emptyValue .ms-crm-Inline-Value,
.processStepValue .ms-crm-Inline-EmptyValue,
div.ms-crm-Inline-Value a.help_link, div.ms-crm-Inline-Value a.help_link:active,
div.ms-crm-Inline-Value a.help_link:hover, div.ms-crm-Inline-Value a.help_link:visited,
div.ms-crm-Inline-Value a.helptoc_link:hover, div.ms-crm-Inline-Value a.ImportMapViewLink,
div.ms-crm-Inline-Value a.ImportMapViewLink:link,
div.ms-crm-Inline-Value a.ImportMapViewLink:visited,
div.ms-crm-Inline-Value a.ms-crm-gridurl:active, div.ms-crm-Inline-Value a.ms-crm-gridurl:visited,
div.ms-crm-Inline-Value a.ms-crm-Link:hover, div.ms-crm-Inline-Value a,
.refresh-form div.ms-crm-Inline-Value a.ms-crm-gridurl:active,
.refresh-form div.ms-crm-Inline-Value a.ms-crm-gridurl:visited,
.refresh-form div.ms-crm-Inline-Value a.ms-crm-Link:hover,
DIV.ms-crm-AdvFind-AutoShowEmptyControlLabel,
.acwall .showMoreLink,
.acwall .clickableOwner,
div.dupWarnFlyout-EmptyValue,
.wall .showMoreLink,
.wall .progressTemplate,
.recordWall .progressTemplate,
.wall .firstRunContent .firstRunLinks A,
.recordWall .firstRunContent .firstRunLinks A,
.kmwall .showMoreLink,
A.ms-crm-subgrid-add-link-selected,
a.ms-crm-of-inlineLink:link,
a.ms-crm-of-inlineLink:visited,
a.ms-crm-of-inlineLink:hover,
a.ms-crm-of-inlineLink:active,
a.ms-crm-of-controlLink:link,
a.ms-crm-of-controlLink:visited,
a.ms-crm-of-controlLink:hover,
a.ms-crm-of-controlLink:active,
a.ms-crm-VisualizationPaneDesigner-NewChartLink
.acwall .clickableOwner,
.acwallEmailView .clickableOwner,
.wall .progressTemplate,
.recordWall .progressTemplate,
.userProfile a,
.msdyn-followers .firstRunLinks A,
a.msdyn-followers
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.GlobalLinkImportant)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.GlobalLinkMain)%>
<% } %>
}

.notesWall .post .userName a,
.recordWall .wallContainer .showMoreLink
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.GlobalLinkImportant)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.GlobalLinkMain)%>
<% } %>
}

SPAN.ms-crm-IL-MenuItem-Title-Lookupmore,
SPAN.ms-crm-IL-MenuItem-Title-Lookupmore-qrk,
.onenoteSectionTitle,
.onenoteSection .sectionName a:Link,
a.delveLink
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.GlobalLink)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.LinkMenuCore)%>
<% } %>
}

.wall .post .userName a,
.recordWall .post .userName a,
.recordWall .post .viaSection a,
.MicrosoftMap a,
.wallContainer .postAction .markcomplete a,
.wall .post div.postActions a.textAction,
.recordWall .post div.postActions a.textAction,
.acwall .acTitle,
.acwallEmailView .acTitle,
DIV.ms-crm-AdvFind-AutoShowLabel,
.ms-CustomerCard-Name-Anchor,
.acwall .postAction .trackEmail a,
.acwallEmailView .showMoreLink .text
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.GlobalLink)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.GlobalLinkSecondary)%>
<% } %>
}


.navigationControl,
.navigationControl.sandbox,
.navigationControl.preview
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.MainNavBarColor)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.NavBarBackground)%>
<% }%>
}

<% if (Request.Browser.Browser == "IE") { %>
.navTabButton .navTabButtonArrowDown, .navTabButton #navBarSettingsId,
.navTabButton .navTabHelpImage, .navTabButton .homeButtonImage,
.navTabButton .tabHomeButtonImage,
.navTabButton #navTabGlobalCreateImage,
.navTabButton .navTabHelpImage,
.navTabButton:hover .navTabButtonArrowDown,
.navTabButton:hover #navBarSettingsId,
.navTabButton:hover .navTabHelpImage,
.navTabButton:hover .homeButtonImage,
.navTabButton:hover .tabHomeButtonImage,
.navTabButton:hover #navTabGlobalCreateImage,
.navTabButton:hover .navTabHelpImage,
#TabHome:hover #homeButtonImage,
.navTabButton #navTabLogoImage,
.navTabButton.selected #navTabLogoImage,
.navTabButton:hover #navTabLogoImage
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% if (Util.IsHighContrastEnabled()) { %>
border-width: 1px;
border-style: solid;
<% }%>
<% } else { %>
border-width: 1px;
border-style: solid;
<% }%>
}

.navTabButton .navTabButtonArrowDown, .navTabButton #navBarSettingsId,
.navTabButton .navTabHelpImage, .navTabButton .homeButtonImage,
.navTabButton .tabHomeButtonImage,
.navTabButton #navTabGlobalCreateImage,
.navTabButton .navTabHelpImage
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.MainNavBarBorderColor)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.NavTabButtonImageBorder)%>
<% }%>
}

.navTabButton #navTabLogoImage
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.MainNavBarBorderColor)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.HomeLogoBorder)%>
<% }%>
}

.navTabButton.selected .navTabButtonArrowDown,
.navTabButton.selected #navBarSettingsId,
.navTabButton.selected .navTabHelpImage,
.navTabButton.selected .tabHomeButtonImage,
.navTabButton.selected #navTabGlobalCreateImage,
.navTabButton.selected .navTabHelpImage
{
<% = this.GetStyleCss(CrmTheme.Current.Global.SecondNavTabButtonImageSelectedBorderColorImportant)%>
}

.navTabButton.selected .homeButtonImage
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.MainNavTabButtonImageSelectedBorderColorImportant)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.NavTabButtonImageSelectedBorderImportant)%>
<% }%>
}

.navTabButton:hover .navTabButtonArrowDown,
.navTabButton:hover #navBarSettingsId,
.navTabButton:hover .navTabHelpImage,
.navTabButton:hover .homeButtonImage,
.navTabButton:hover .tabHomeButtonImage,
.navTabButton:hover #navTabGlobalCreateImage,
.navTabButton:hover .navTabHelpImage,
#TabHome:hover #homeButtonImage
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.CssOpacity(CrmTheme.Current.ConfigurableTheme.MainNavBarHoverColor.BackColor, 0.4, "border-color")%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.NavButtonHoverBorder.HoverStyle)%>
<% }%>
}

#TabHome:selected #homeButtonImage
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.MainNavTabButtonImageSelectedBorderColorImportant)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.NavTabButtonImageSelectedBorderImportant)%>
<% }%>
}

.navTabButton.selected #navTabLogoImage, .navTabButton:hover #navTabLogoImage
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.CssOpacity(CrmTheme.Current.ConfigurableTheme.MainNavBarHoverColor.BackColor, 0.4, "border-color")%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.HomeLogoHoverBorderImportant.HoverStyle)%>
<% }%>
}

<% } %>

.navTabSplitterSpan,.navTabSplitterSpan:hover,navTabSplitterSpan.selected
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.MainNavBarColor)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.NavBarBackgroundImportant)%>
<% }%>
}

.navBarSearchTextBoxDiv:hover
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.MainNavBarBorderColor)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.NavBarBackground)%>
<% }%>
}

#TabHomeNode-logo
{
<% if (!CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.HomeLogo)%>
<% }%>
}

.logoBgColor:hover
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% =this.CssOpacity(CrmTheme.Current.ConfigurableTheme.MainNavBarHoverColor.BackColor, 0.4, "background-color")%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.HomeLogoHoverBackgroundImportant.HoverStyle)%>
<% }%>
}

.navTabButton:hover ,#TabUserInfoId:hover,
#TabHome:hover, #TabHome:hover a
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% =this.CssOpacity(CrmTheme.Current.ConfigurableTheme.MainNavBarHoverColor.BackColor, 0.4, "background-color")%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.NavButtonHoverBackground.HoverStyle)%>
<% }%>
}



.globalMruContainer,
.nav-scrl
{
<% = this.GetStyleCss(CrmTheme.Current.Global.NavButtonSelectionImportant.SelectedStyle)%>
}

.navTabButton.selected
{
<% = this.GetStyleCss(CrmTheme.Current.Global.NavButtonSelectionImportant.SelectedStyle)%>
}

.mainTab-nav-scrl,
#TabHome.selected:hover, #TabHome.selected a:hover
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.SecondaryNavBarColor)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.MainTabBackground.SelectedStyle)%>
<% }%>
}

.navHomeButton.selected, .navHomeButton.selected a
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.SecondaryNavBarColorImportant)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.MainTabBackgroundImportant.SelectedStyle)%>
<% }%>
}

.nav-rowBody:hover, .nav-rowBody:focus, .nav-rowBody.selected
{
<% = this.GetStyleCss(CrmTheme.Current.Global.NavBarItemHoverMain.HoverStyle)%>
}

.globalMruContainer .nav-rowBody:hover, .nav-rowBody:focus, .nav-rowBody.selected
{
<% = this.GetStyleCss(CrmTheme.Current.Global.NavBarItemHoverSecondary.HoverStyle)%>
}

.nav-groupTitle
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.GlobalLinkImportant)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.NavBarGroupTitleText)%>
<% }%>
}

.globalMruContainer .nav-groupTitle
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.HeaderColor)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.NavBarGroupTitleText)%>
<% }%>
}

.nav-rowLabel
{
<% = this.GetStyleCss(CrmTheme.Current.Global.NavBarItemText)%>
}

SPAN.ms-crm-Lookup-Item SPAN.ms-crm-LookupItem-Name
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.GlobalLink)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Form.LookupTextColor)%>
<% } %>
}

NOBR.ms-crm-FormSelector-SubItem
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.GlobalLink)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Form.FormRoleCtrlTabLink)%>
<% } %>
}

.ms-crm-List-Data A.ms-crm-List-Link,
.ms-crm-List-Data a.ms-crm-Phone,
.cc-grid.cc-grid-desktop .cc-lookup-nav-button,
.ms-crm-List-Data A.ms-crm-List-Link .ms-crm-LookupItem-Name,
.ms-crm-List-Data A.ms-crm-List-Link span

{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.GlobalLinkImportant)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Grid.GridText) %>
<% } %>
}

span.rsHelperlink,
A.rsHelperlink
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.GlobalLink)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.ResourceHelperLinkText)%>
<% } %>
}

.ms-crm-Inline-EditHintState
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.ControlEffects)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.GlobalControlHover)%>
<% } %>
}

div.ms-crm-Inline-EditIcon,
.ms-crm-RefreshDialog-Main-MDD .ms-crm-Inline-Value
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.ControlEffectsBorder)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.GlobalControlHoverInlineLookup)%>
<% } %>
}

.ms-crm-HeaderTileElement:hover
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.ControlEffectsBackColor)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.GlobalControlHoverBackColor)%>
<% } %>
}

.ms-crm-Inline-Value.ms-crm-Inline-EditHintState div.ms-crm-Inline-GradientMask,
#processConfig .ms-crm-Inline-Value.ms-crm-Inline-EditHintState div.ms-crm-Inline-GradientMask
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% if (IsRightToLeft) { %>
<%= this.CssControlGradient(CrmTheme.Current.ConfigurableTheme.ControlEffectsBackColor.BackColor, "25%", CrmTheme.Current.ConfigurableTheme.ControlEffectsBackColor.BackColor, "100%", "left", true, 0.25)%>
<% } else { %>
<%= this.CssControlGradient(CrmTheme.Current.ConfigurableTheme.ControlEffectsBackColor.BackColor, "25%", CrmTheme.Current.ConfigurableTheme.ControlEffectsBackColor.BackColor, "100%", "right", true, 0.25)%>
<% } %>
<% } else { %>
<% if (IsRightToLeft) { %>
<%= this.CssControlGradient(CrmTheme.Current.Global.GlobalControlHoverBackColor.BackColor, "25%", CrmTheme.Current.Global.GlobalControlHoverBackColor.BackColor, "100%", "left", true, 0.25)%>
<% } else { %>
<%= this.CssControlGradient(CrmTheme.Current.Global.GlobalControlHoverBackColor.BackColor, "25%", CrmTheme.Current.Global.GlobalControlHoverBackColor.BackColor, "100%", "right", true, 0.25)%>
<% } %>
<% } %>
}

.money .ms-crm-Inline-Value.ms-crm-Inline-EditHintState div.ms-crm-Inline-GradientMask
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% if (IsRightToLeft) { %>
<%= this.CssControlGradient(CrmTheme.Current.ConfigurableTheme.ControlEffectsBackColor.BackColor, "25%", CrmTheme.Current.ConfigurableTheme.ControlEffectsBackColor.BackColor, "100%", "right", false, 0)%>
<% } %>
<% } else { %>
<% if (IsRightToLeft) { %>
<%= this.CssControlGradient(CrmTheme.Current.Global.GlobalControlHoverBackColor.BackColor, "25%", CrmTheme.Current.Global.GlobalControlHoverBackColor.BackColor, "100%", "right", false, 0)%>
<% } %>
<% } %>
}

.money .ms-crm-Inline-Value.ms-crm-Inline-EmptyValue.ms-crm-Inline-EditHintState div.ms-crm-Inline-GradientMask
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% if (IsRightToLeft) { %>
<%= this.CssControlGradient(CrmTheme.Current.ConfigurableTheme.ControlEffectsBackColor.BackColor, "25%", CrmTheme.Current.ConfigurableTheme.ControlEffectsBackColor.BackColor, "100%", "left", false, 0)%>
<% } %>
<% } else { %>
<% if (IsRightToLeft) { %>
<%= this.CssControlGradient(CrmTheme.Current.Global.GlobalControlHoverBackColor.BackColor, "25%", CrmTheme.Current.Global.GlobalControlHoverBackColor.BackColor, "100%", "left", false, 0)%>
<% } %>
<% } %>
}

.ms-crm-HeaderTileElement:hover .ms-crm-Inline-Value.ms-crm-HeaderTile div.ms-crm-Inline-GradientMask,
.ms-crm-HeaderTileElement:hover .ms-crm-InlineEditLabel div.ms-crm-Inline-GradientMask
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% if (IsRightToLeft) { %>
<%= this.CssControlGradient(CrmTheme.Current.ConfigurableTheme.ControlEffectsBackColor.BackColor, "15%", CrmTheme.Current.ConfigurableTheme.ControlEffectsBackColor.BackColor, "100%", "left", true, 0.15)%>
<% } else { %>
<%= this.CssControlGradient(CrmTheme.Current.ConfigurableTheme.ControlEffectsBackColor.BackColor, "15%", CrmTheme.Current.ConfigurableTheme.ControlEffectsBackColor.BackColor, "100%", "right", true, 0.15)%>
<% } %>
<% } else { %>
<% if (IsRightToLeft) { %>
<%= this.CssControlGradient(CrmTheme.Current.Global.GlobalControlHoverBackColor.BackColor, "15%", CrmTheme.Current.Global.GlobalControlHoverBackColor.BackColor, "100%", "left", true, 0.15)%>
<% } else { %>
<%= this.CssControlGradient(CrmTheme.Current.Global.GlobalControlHoverBackColor.BackColor, "15%", CrmTheme.Current.Global.GlobalControlHoverBackColor.BackColor, "100%", "right", true, 0.15)%>
<% } %>
<% } %>
}

.ms-crm-HeaderTileElement:hover .ms-crm-Inline-Value.ms-crm-HeaderTile:after,
.ms-crm-HeaderTileElement:hover .ms-crm-InlineEditLabel span:first-child:after
{
<% if (CrmStyles.IsTextWrapEnabled) { %>
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% if (IsRightToLeft) { %>
<%= this.CssControlGradient(CrmTheme.Current.ConfigurableTheme.ControlEffectsBackColor.BackColor, "25%", CrmTheme.Current.ConfigurableTheme.ControlEffectsBackColor.BackColor, "100%", "left", true, 0.25)%>
<% } else { %>
<%= this.CssControlGradient(CrmTheme.Current.ConfigurableTheme.ControlEffectsBackColor.BackColor, "25%", CrmTheme.Current.ConfigurableTheme.ControlEffectsBackColor.BackColor, "100%", "right", true, 0.25)%>
<% } %>
<% } else { %>
<% if (IsRightToLeft) { %>
<%= this.CssControlGradient(CrmTheme.Current.Global.GlobalControlHoverBackColor.BackColor, "25%", CrmTheme.Current.Global.GlobalControlHoverBackColor.BackColor, "100%", "left", true, 0.25)%>
<% } else { %>
<%= this.CssControlGradient(CrmTheme.Current.Global.GlobalControlHoverBackColor.BackColor, "25%", CrmTheme.Current.Global.GlobalControlHoverBackColor.BackColor, "100%", "right", true, 0.25)%>
<% } %>
<% } %>
<% } %>
}

.ms-crm-Form-HeaderContainer .ms-crm-Inline-Value.ms-crm-Inline-EditHintState:after,
.ms-crm-Form-AreaContainer .ms-crm-Inline-Value.ms-crm-Inline-EditHintState:after,
.ms-crm-Form-AreaContainerQuick .ms-crm-Inline-Value.ms-crm-Inline-EditHintState:after
{
<% if (CrmStyles.IsTextWrapEnabled) { %>
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% if (IsRightToLeft) { %>
<%= this.CssControlGradient(CrmTheme.Current.ConfigurableTheme.ControlEffectsBackColor.BackColor, "25%", CrmTheme.Current.ConfigurableTheme.ControlEffectsBackColor.BackColor, "100%", "bottom", true, 0.25)%>
<% } else { %>
<%= this.CssControlGradient(CrmTheme.Current.ConfigurableTheme.ControlEffectsBackColor.BackColor, "25%", CrmTheme.Current.ConfigurableTheme.ControlEffectsBackColor.BackColor, "100%", "bottom", true, 0.25)%>
<% } %>
<% } else { %>
<% if (IsRightToLeft) { %>
<%= this.CssControlGradient(CrmTheme.Current.Global.GlobalControlHoverBackColor.BackColor, "25%", CrmTheme.Current.Global.GlobalControlHoverBackColor.BackColor, "100%", "bottom", true, 0.25)%>
<% } else { %>
<%= this.CssControlGradient(CrmTheme.Current.Global.GlobalControlHoverBackColor.BackColor, "25%", CrmTheme.Current.Global.GlobalControlHoverBackColor.BackColor, "100%", "bottom", true, 0.25)%>
<% } %>
<% } %>
<% } %>
}

.ms-crm-Form-AreaContainerQuick .ms-crm-Inline-Value.ms-crm-Inline-EmptyValue:after{
<% if (CrmStyles.IsTextWrapEnabled) { %>
background:none;
<% } %>
}

.money .ms-crm-Inline-Value.ms-crm-Inline-EditHintState:after
{
<% if (CrmStyles.IsTextWrapEnabled) { %>
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% if (IsRightToLeft) { %>
<%= this.CssControlGradient(CrmTheme.Current.ConfigurableTheme.ControlEffectsBackColor.BackColor, "25%", CrmTheme.Current.ConfigurableTheme.ControlEffectsBackColor.BackColor, "100%", "right", false, 0)%>
<% } %>
<% } else { %>
<% if (IsRightToLeft) { %>
<%= this.CssControlGradient(CrmTheme.Current.Global.GlobalControlHoverBackColor.BackColor, "25%", CrmTheme.Current.Global.GlobalControlHoverBackColor.BackColor, "100%", "right", false, 0)%>
<% } %>
<% } %>
<% } %>
}

.money .ms-crm-Inline-Value.ms-crm-Inline-EmptyValue.ms-crm-Inline-EditHintState:after
{
<% if (CrmStyles.IsTextWrapEnabled) { %>
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% if (IsRightToLeft) { %>
<%= this.CssControlGradient(CrmTheme.Current.ConfigurableTheme.ControlEffectsBackColor.BackColor, "25%", CrmTheme.Current.ConfigurableTheme.ControlEffectsBackColor.BackColor, "100%", "left", false, 0)%>
<% } %>
<% } else { %>
<% if (IsRightToLeft) { %>
<%= this.CssControlGradient(CrmTheme.Current.Global.GlobalControlHoverBackColor.BackColor, "25%", CrmTheme.Current.Global.GlobalControlHoverBackColor.BackColor, "100%", "left", false, 0)%>
<% } %>
<% } %>
<% } %>
}


DIV.ms-crm-HeaderTileElement
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.ControlEffectsBorder)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.HeaderTileBorder)%>
<% } %>
}

LI.ms-crm-IL-MenuItem-Hover,
LI.ms-crm-IL-MenuItem-Hover-qrk,
LI.ms-crm-IL-MenuItem-Lookupmore-Hover,
LI.ms-crm-IL-MenuItem-Lookupmore-Selected,
LI.ms-crm-IL-MenuItem-Lookupmore-Hover-qrk,
LI.ms-crm-IL-MenuItem-Lookupmore-Selected-qrk
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
background-color : #F2F2F2;
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.GlobalControlHoverLookupBackground)%>
<% } %>
}

TR.ms-crm-List-SelectedRow,TR.ms-crm-List-SelectedRow-Lite,
.ms-crm-List-FilterButton-Selected,
.cc-grid.cc-grid-desktop .wj-flexgrid .wj-cell.wj-state-multi-selected,
.cc-grid.cc-grid-desktop .wj-flexgrid .wj-cell.wj-header.cc-grid-selectedRow,
.cc-grid.cc-grid-desktop .wj-flexgrid .wj-cell.cc-grid-selectedRow
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetBackgroundColorWithRGBA(CrmTheme.Current.ConfigurableTheme.SelectedEffect, 1)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Grid.RowSelected) %>
<% }%>
}

li.li-selectedflyoutbutton span.ms-crm-More-Menu-Label
<% if (CrmTheme.IsThemeFeatureEnabled()){%>
<% = this.GetBackgroundColorWithRGBA(CrmTheme.Current.ConfigurableTheme.SelectedEffectImportant, 1)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.CommandBarButtonSelectionBackColor)%>
<% }%>
}
li.ms-crm-CommandBar-SplitButton
{
<% if (CrmTheme.IsThemeFeatureEnabled()){%>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.SelectedEffectColorAndBorderChangeImportant)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.CommandBarButtonSelectionImportant)%>
<% }%>
}

#tileFormSelector_hierarchyContainer a.selected,
.ms-crm-CommandBar-button-selected,
span.ms-crm-CommandBarToggleButton-Active
{
<% if (CrmTheme.IsThemeFeatureEnabled()){%>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.SelectedEffectColorAndBorderChangeImportant)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.CommandBarButtonSelectionBackColorImportant)%>
<% }%>
}
.ms-crm-CommandBar-button-split-selected
{
<% if (CrmTheme.IsThemeFeatureEnabled()){%>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.SelectedEffectColorAndBorderChangeImportant)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.CommandBarSplitButtonSelectionImportant)%>
<% }%>
}
.ms-cui-ctl-on
{
<% if (CrmTheme.IsThemeFeatureEnabled()){%>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.SelectedEffectColorAndBorderChange)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.RibbonSelected)%>
<% }%>
}
.bpfConfTitle
{
<% if (CrmTheme.IsThemeFeatureEnabled()){%>
<% = this.GetStyleCss(CrmTheme.Current.Form.FormTitleData) %>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.BpfTitleText)%>
<% }%>
}
label.bpfexpandCollapse
{
<% if (CrmTheme.IsThemeFeatureEnabled()){%>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.GlobalLink)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.BpfTitleText)%>
<% }%>
}
.bpfConfForm .stage .body
{
<% if (CrmTheme.IsThemeFeatureEnabled()){%>
<% if (CrmTheme.IsProcessControlThemeFeatureEnabled()){%>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.ProcessControlBorder)%>
<% } %>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.BpfFormBorder)%>
<% }%>
}
.stage-name .ms-crm-Inline-Value
{
<% if (CrmTheme.IsThemeFeatureEnabled()){%>
<% if (CrmTheme.IsProcessControlThemeFeatureEnabled()){%>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.ProcessControlColor)%>
<% } %>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.BpfStageName)%>
<% }%>
}
.processControlContainer .processStep div.processStepValue div.linkControlLabel,
span.pc_en_field_body div.pc_inline_value.pc_inline_empty_value
{
<% if (CrmTheme.IsThemeFeatureEnabled()){%>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.GlobalLink)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.BpfInlineEmptyValue)%>
<% }%>
}
.processControlContainer .selectedStage.hasNext div.processStageHeadContainer,
.processControlContainer div.hasPrevious.processStageContainer.selectedStage .processStageTailContainer,
.processControlContainer .selectedStage div.stageContentArea,
.processControlContainer .processStageContainer div.selectedStageExtensionUpper,
.processControlContainer .processStageContainer div.selectedStageExtensionLower,
.processControlContainer.ie8 .selectedStage:hover div.selectedStageExtensionLower,
.processControlContainer.ie8 .selectedStage:hover div.selectedStageExtensionUpper,
.processControlContainer.ie8 .selectedStage:focus div.selectedStageExtensionLower,
.processControlContainer.ie8 .selectedStage:focus div.selectedStageExtensionUppe,
.processControlContainer .ui-slider-handle.ui-state-hover:hover,
.processControlContainer .processFooterSeparator hr,
.ui-flyout-dialog.processNavigateMenu .navigateMenuItem.enabled:hover,
.processControlContainer div.stageAdvanceActionContainer.disabled,
.processControlContainer div.stageNavigateActionContainer.disabled
{
<% if (CrmTheme.IsThemeFeatureEnabled()){%>
<% if (CrmTheme.IsProcessControlThemeFeatureEnabled()){%>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.ProcessControlBackColor)%>
<% } %>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.ProcessSelectedBackgroundColor)%>
<% }%>
}

.processControlContainer .processStageContainer.completedStage .processStageTailContainer div.stageContentArea:hover,
.processControlContainer .processStageContainer.completedStage:focus .processStageTailContainer div.stageContentArea,
.processControlContainer .processStageContainer.selectedStage.completedStage .processStageTailContainer div.stageContentArea,
.processControlContainer .processStageContainer .processStageTailContainer div.stageContentArea:hover,
.processControlContainer .processStageContainer:focus .processStageTailContainer div.stageContentArea,
.processControlContainer .processStageContainer.selectedStage .processStageTailContainer div.stageContentArea,
.processControlContainer .processStageContainer.selectedStage div.stageContentArea
{
<% if (CrmTheme.IsThemeFeatureEnabled()){%>
<% if (CrmTheme.IsProcessControlThemeFeatureEnabled()){%>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.ProcessControlBackColor)%>
<% } %>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.ProcessSelectedBackgroundColor)%>
<% }%>
}

.processControlContainer .glyphsIconContent,
.processControlContainer div.stageFinishedText,
.processControlContainer div.processStep,
.processControlContainer div.stageActionEmptyTextForIcon,
.processControlContainer div.stageActionTextForIcon,
.processControlContainer div.stageCollapsibleButton,
.processControlContainer .collapsibleView .collapsibleFloatContainer .processActionsContainer div.collapseButtonContainer
{
<% if (CrmTheme.IsThemeFeatureEnabled()){%>
<% if (CrmTheme.IsProcessControlThemeFeatureEnabled()){%>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.ProcessControlColor)%>
<% } %>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.ProcessSelectedBackgroundColor)%>
<% }%>
}

.basic-button:hover
{
<% if (CrmTheme.IsThemeFeatureEnabled()){%>
<% = this.GetBackgroundColorWithRGBA(CrmTheme.Current.ConfigurableTheme.HoverEffectColorChange, 1)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Dialog.DialogButtonControlHoverBackColor)%>
<% }%>
}

.processControlContainer .processStageContainer.completedStage .processStageTailContainer div.stageContentArea:hover:before,
.processControlContainer .processStageContainer.completedStage:focus .processStageTailContainer div.stageContentArea:before,
.processControlContainer .processStageContainer.selectedStage.completedStage .processStageTailContainer div.stageContentArea:before,
.processControlContainer .processStageContainer .processStageTailContainer div.stageContentArea:hover:before,
.processControlContainer .processStageContainer:focus .processStageTailContainer div.stageContentArea:before,
.processControlContainer .processStageContainer.selectedStage .processStageTailContainer div.stageContentArea:before
{
<% if (CrmTheme.IsThemeFeatureEnabled()){%>
<% if (CrmTheme.IsProcessControlThemeFeatureEnabled()){%>
<% = this.CssColor( "border-top-color", CrmTheme.Current.ConfigurableTheme.ProcessControlBackColor.BackColor)%>
<% = this.CssColor( "border-bottom-color", CrmTheme.Current.ConfigurableTheme.ProcessControlBackColor.BackColor)%>
<% } %>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.ProcessOpaqueSelectedBorderColor)%>
<% }%>
}

.processControlContainer .processStageContainer.completedStage .processStageTailContainer div.stageContentArea:hover:after,
.processControlContainer .processStageContainer.completedStage:focus .processStageTailContainer div.stageContentArea:after,
.processControlContainer .processStageContainer.selectedStage.completedStage .processStageTailContainer div.stageContentArea:after,
.processControlContainer .processStageContainer .processStageTailContainer div.stageContentArea:hover:after,
.processControlContainer .processStageContainer:focus .processStageTailContainer div.stageContentArea:after,
.processControlContainer .processStageContainer.selectedStage .processStageTailContainer div.stageContentArea:after
{
<% if (CrmTheme.IsThemeFeatureEnabled()){%>
<% if (CrmTheme.IsProcessControlThemeFeatureEnabled()){%>
<% if (IsRightToLeft) { %>
<% = this.CssColor( "border-right-color", CrmTheme.Current.ConfigurableTheme.ProcessControlBackColor.BackColor)%>
<% } else { %>
<% = this.CssColor( "border-left-color", CrmTheme.Current.ConfigurableTheme.ProcessControlBackColor.BackColor)%>
<% } %>
<% } %>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.ProcessOpaqueSelectedBorderColor)%>
<% }%>
}

.processControlContainer .processStageContainer.selectedStage.completedStage:last-child div.stageContentArea
{
<% if (CrmTheme.IsThemeFeatureEnabled()){%>
<% if (CrmTheme.IsProcessControlThemeFeatureEnabled()){%>
<% if (IsRightToLeft) { %>
<% = this.CssColor( "border-left-color", CrmTheme.Current.ConfigurableTheme.ProcessControlBackColor.BackColor)%>
<% } else { %>
<% = this.CssColor( "border-right-color", CrmTheme.Current.ConfigurableTheme.ProcessControlBackColor.BackColor)%>
<% } %>
<% } %>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.ProcessOpaqueSelectedBorderColor)%>
<% }%>
}

.processControlContainer div.collapsibleArea,
.processControlContainer div.processHeaderArea,
.processControlContainer.ie8 .selectedStage div.selectedStageExtensionLower,
.processControlContainer.ie8 .selectedStage div.selectedStageExtensionUpper
{
<% if (CrmTheme.IsThemeFeatureEnabled()){%>
<% if (CrmTheme.IsProcessControlThemeFeatureEnabled()){%>
<% = this.CssOpacity(CrmTheme.Current.ConfigurableTheme.ProcessControlBackColor.BackColor, 0.85, "border-color")%>
<% } %>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.ProcessOpaqueSelectedBorderColor)%>
<% }%>
}

.processControlContainer .selectedStage div.stageLabelMask,
.processControlContainer.rtl .selectedStage div.stageLabelMask,
.processControlContainer.ie8.rtl .selectedStage div.stageLabelMask,
.processControlContainer.ie8 .selectedStage div.stageLabelMask
{
<% if (CrmTheme.IsThemeFeatureEnabled()){%>
display:none;
<% }%>
}

.processControlContainer .scrollButton.left .scrollArrow,
.processControlContainer .scrollButton.left .scrollArrow .scrollArrowInner,
.processControlContainer .scrollButton.right .scrollArrow .scrollArrowInner,
.processControlContainer .scrollButton.right .scrollArrow
{
<% if (CrmTheme.IsThemeFeatureEnabled()){%>
<% if (CrmTheme.IsProcessControlThemeFeatureEnabled()){%>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.ProcessControlBorder)%>
<% } %>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.ProcessSelectedBorderColor)%>
<% }%>
}

TD.ms-crm-MiniCal-Day-Hilited-Current
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetBackgroundColorWithRGBA(CrmTheme.Current.ConfigurableTheme.SelectedEffect, 1)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.MiniCalDayCurrent) %>
<% }%>
}

SPAN.ms-crm-Menu-Label-Opened
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.SelectedEffectBackColorAndBorder)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.MenuLabelOpened) %>
<% }%>
}

.li-selectedflyoutbutton
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.SelectedEffectBackColorAndBorder)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.SelectedFlyOutButtonBorderAndBackground)%>
<% }%>
}

SPAN.ms-crm-AVS-MenuItem-Icon-Selected,
SPAN.ms-crm-AVS-MenuItem-Sep-Selected,
NOBR.ms-crm-AVS-MenuItem-Title-Selected,
LI.ms-crmAVS-MenuItem-Selected,
SPAN.ms-crm-VS-MenuItem-Icon-Selected,
SPAN.ms-crm-VS-MenuItem-Sep-Selected,
.ms-crm-FS-Menu A.ms-crm-FS-MenuItem-Anchor-Selected,
NOBR.ms-crm-VS-MenuItem-Title-Selected,
LI.ms-crm-CalendarView-Selected
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.SelectedEffectBackColorAndBorder)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.ContextMenuItemSelected) %>
<% }%>
}

.ms-cui-ctl-hoveredOver
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.SelectedEffectBackColorAndBorder)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.RibbonSelected) %>
<% }%>
}

#tileFormSelector_hierarchyContainer a.tileFormAnchor:hover,
#tileFormSelector_hierarchyContainer a.tileFormAnchor:focus,
div#crmMasthead .navDropDownMenu a:hover,
.moreActivityMenuSelected
{
<% if (CrmTheme.IsThemeFeatureEnabled()){%>
<% = this.GetBackgroundColorWithRGBA(CrmTheme.Current.ConfigurableTheme.HoverEffectColorChange, 1)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.GlobalSettingsHoverBackColor)%>
<% }%>
}

NOBR.ms-crm-AVS-MenuItem-Title-Hover,
SPAN.ms-crm-AVS-MenuItem-Aux-Hover,
SPAN.ms-crm-AVS-MenuItem-Icon-Hover,
SPAN.ms-crm-AVS-MenuItem-Sep-Hover
{
<% if (CrmTheme.IsThemeFeatureEnabled()){%>
<% = this.GetBackgroundColorWithRGBA(CrmTheme.Current.ConfigurableTheme.HoverEffectColorChange, 1)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.ContextMenuBackImage20) %>
<% }%>
}

LI.ms-crm-AVS-MenuItem-Hover
{
<% if (CrmTheme.IsThemeFeatureEnabled()){%>
<% = this.GetBackgroundColorWithRGBA(CrmTheme.Current.ConfigurableTheme.HoverEffectColorChange, 1)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.MenuItemHoverBackColor) %>
<% }%>
}

.ms-cui-ctl-on:hover
{
<% if (CrmTheme.IsThemeFeatureEnabled()){%>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.HoverEffectColorAndBorderChange)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.RibbonSelected.HoverStyle) %>
<% }%>
}

#flyoutFormSection_ContentTable tr:hover
{
<% if (CrmTheme.IsThemeFeatureEnabled()){%>
<% = this.GetBackgroundColorWithRGBA(CrmTheme.Current.ConfigurableTheme.HoverEffectColorChange, 1)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.GlobalSettingsHoverBackColor)%>
<% }%>
}

A.default-link:link,
A.default-link:visited,
A.default-link:active
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.GlobalLink)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Settings.SystemSettingsGlobalLink)%>
<% } %>
}
.refresh-form h2.ms-crm-Form
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.HeaderColor)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.GlobalLinkMain)%>
<% } %>
}
.ms-crm-InlineTabHeaderText h2.ms-crm-Form
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.HeaderColor)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.ResourceHelperLinkText)%>
<% } %>
}

#weeklyScheduleTable SPAN.link,
#tabGeneral a.help_link,
#tabGeneral A.help_link:active,
#tabGeneral A.help_link:visited,
#tabGeneral A.help_link:hover,
.ms-crm-S2SLink,
.mscrm-text-SelectedStage.ms-crm-S2SLink,
a.ms-crm-FormEditor-Iframe-GlobalColor
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.GlobalLink)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.ServiceCalendarLink)%>
<% } %>
}

#folderView_hierarchyContainer_View .jstree-hovered
{
<% if (CrmTheme.IsThemeFeatureEnabled()){%>
<% = this.GetBackgroundColorWithRGBA(CrmTheme.Current.ConfigurableTheme.HoverEffectColorChange, 1)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.HierarchyHoverBackgroundColor)%>
<% }%>
}

#moreActivitiesButton:hover,
.activityMoreCommands:hover
{
<% if (CrmTheme.IsThemeFeatureEnabled()){%>
<% = this.GetBackgroundColorWithRGBA(CrmTheme.Current.ConfigurableTheme.HoverEffectColorChange, 1)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.GlobalSettingsHoverBackColor)%>
<% }%>
}

.moreActivityItemselected
{
<% if (CrmTheme.IsThemeFeatureEnabled()){%>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.SelectedEffect)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.NoteTitleSelected)%>
<% }%>
}

.jstree-default .jstree-hovered
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.ControlEffectsBackColor)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.SubjectLookupBackground) %>
<% } %>
}

SPAN.ms-crm-Menu-FilterImgWrapper-Open,
DIV.ms-crm-Menu-FilterImgWrapper-Open,
DIV.ms-crm-Menu-Label-Opened,
a.ms-cui-ctl-menu-on
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.SelectedEffectBackColorAndBorder)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.MenuLabelOpened) %>
<% } %>
}

SPAN.ms-crm-Menu-FilterImgWrapper-Hover,
DIV.ms-crm-Menu-FilterImgWrapper-Hover,
DIV.ms-crm-Menu-Label-Hovered,
a.ms-cui-ctl-menu:hover
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.HoverEffectColorAndBorderChange)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.MenuLabelHover) %>
<% } %>
}

td.viewManager_js_td:hover
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetBackgroundColorWithRGBA(CrmTheme.Current.ConfigurableTheme.HoverEffectColorChange, 1)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.EditViewColumnsHover)%>
<% } %>
}

.ms-crm-TaskBox-On
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetBackgroundColorWithRGBA(CrmTheme.Current.ConfigurableTheme.HoverEffectColorChange, 1)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.EditViewTasksHover)%>
<% } %>
}

.ms-crm-EditView-LeftRightButtons-On:hover
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetBackgroundColorWithRGBA(CrmTheme.Current.ConfigurableTheme.HoverEffectColorChange, 1)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.EditViewLeftRightButtonsHover)%>
<% } %>
}

A.ms-crm-FormSelector:hover
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.HoverEffectColorWithWidth)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Form.FormRoleCtrlHover) %>
<% } %>
}

A.ms-crm-FormSelector-Opened,
A.ms-crm-FormSelector-Opened:link,
A.ms-crm-FormSelector-Opened:visited,
A.ms-crm-FormSelector-Opened:hover
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.SelectedEffectColorAndBorderChangeWithWidth)%>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.SelectedEffectColorAndBorderChangeWithWidth)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Form.FormRoleCtrlOpened) %>
<% } %>
}

.ms-crm-select-date
{
<% if (CrmTheme.IsThemeFeatureEnabled()){%>
<% = this.GetBackgroundColorWithRGBA(CrmTheme.Current.ConfigurableTheme.HoverEffectColorChange, 1)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.DurationSelectHover)%>
<% }%>
}

.wall .filtersMenu li > a:hover,
.wall .filters.viewFiltersInitiator:hover
{
<% if (CrmTheme.IsThemeFeatureEnabled()){%>
<% = this.GetBackgroundColorWithRGBA(CrmTheme.Current.ConfigurableTheme.HoverEffectColorChange, 1)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.DashboardWallButtonHover)%>
<% }%>
}

.wall .filters.viewFiltersInitiator.active,
.wall .filters.viewFiltersInitiator.active:hover
{
<% if (CrmTheme.IsThemeFeatureEnabled()){%>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.SelectedEffect)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.DashboardWallButtonSelected)%>
<% }%>
}

.selectedItem
{
<% if (CrmTheme.IsThemeFeatureEnabled()){%>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.SelectedEffectBackColorAndBorder)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.SelectedTreeOrItem)%>
<% }%>
}

.ms-crm-GlowOn
{
<% if (CrmTheme.IsThemeFeatureEnabled()){%>
<% = this.GetBackgroundColorWithRGBA(CrmTheme.Current.ConfigurableTheme.HoverEffectColorChange, 1)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Form.TreeItemHover.HoverStyle) %>
<% }%>
}

.ms-crm-SelectOn
{
<% if (CrmTheme.IsThemeFeatureEnabled()){%>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.SelectedEffect)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Form.TreeItemHover.SelectedStyle) %>
<% }%>
}

LI.ms-crm-FixedMenuHover,
LI.ms-crm-FixedMenuHover:active
{
<% if (CrmTheme.IsThemeFeatureEnabled()){%>
<% = this.GetBackgroundColorWithRGBA(CrmTheme.Current.ConfigurableTheme.HoverEffectColorChange, 1)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.DashboardLayoutDialogHover)%>
<% }%>
}

LI.ms-crm-FixedMenuSelect,
LI.ms-crm-FixedMenuSelect:active
{
<% if (CrmTheme.IsThemeFeatureEnabled()){%>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.SelectedEffect)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.DashboardLayoutDialogSelected)%>
<% }%>
}

.ms-crm-QCActivitySelect
{
<% if (CrmTheme.IsThemeFeatureEnabled()){%>

<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.HoverEffectColorChange)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Form.QuickCampaignActivitySelected)%>
<% }%>
}

.ms-crm-QCActivityHover
{
<% if (CrmTheme.IsThemeFeatureEnabled()){%>
<% = this.GetBackgroundColorWithRGBA(CrmTheme.Current.ConfigurableTheme.HoverEffectColorChange, 1)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Form.QuickCampaignActivityHover)%>
<% }%>
}

TR.field-List-Row:hover
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetBackgroundColorWithRGBA(CrmTheme.Current.ConfigurableTheme.HoverEffectColorChange, 1)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Grid.GridFieldListRowHover)%>
<% }%>
}

a.mscrm-globalqc-cross:hover,
TH.ViewForm_AddFields_th_gridheader:hover
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetBackgroundColorWithRGBA(CrmTheme.Current.ConfigurableTheme.HoverEffectColorChange, 1)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Grid.GridFieldListHeaderHover)%>
<% }%>
}

#privacy A.ms-crm-Link,
#privacy A.ms-crm-Link:link,
#privacy A.ms-crm-Link:visited,
#privacy A.ms-crm-Link:active
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.GlobalLink)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.Link)%>
<% } %>
}

.ms-crm-AddSeries-Selected
{
<% if (CrmTheme.IsThemeFeatureEnabled()){%>
<% = this.GetBackgroundColorWithRGBA(CrmTheme.Current.ConfigurableTheme.SelectedEffect, 1)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.ChartsAddSeriesSelected)%>
<% }%>
}

span.ms-crm-AddSeries-Button-hover
{
<% if (CrmTheme.IsThemeFeatureEnabled()){%>
<% = this.GetBackgroundColorWithRGBA(CrmTheme.Current.ConfigurableTheme.HoverEffectColorChange, 1)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.ChartsAddSeriesButtonsHover)%>
<% }%>
}

div.mscrm-globalqc-entityname
{
<% if (CrmTheme.IsThemeFeatureEnabled()){%>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.HeaderColor)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.QuickCreateFormHeader)%>
<% }%>
}

A.ms-crm-VisualizationPaneDesigner-NewChartLink,
A.ms-crm-VisualizationPaneDesigner-NewChartLink:link,
A.ms-crm-VisualizationPaneDesigner-NewChartLink:visited,
A.ms-crm-VisualizationPaneDesigner-NewChartLink:active
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.GlobalLink)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.ChartsLink)%>
<% } %>
}

A.ms-crm-VisualizationPaneDesigner-NewChartLink:hover
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.GlobalLink)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.ChartsLinkHover)%>
<% } %>

}

ul.ms-crm-Home-Cal-Views-Items li:hover,
ul.ms-crm-Home-Cal-CreateNew-Items li:hover
{
<% if (CrmTheme.IsThemeFeatureEnabled()){%>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.HoverEffectColorAndBorderChange)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Form.NavigationArea.HoverStyle) %>
<% }%>
}

.ms-crm-optionset-Label-Hovered
{
<% if (CrmTheme.IsThemeFeatureEnabled()){%>
<% = this.GetBackgroundColorWithRGBA(CrmTheme.Current.ConfigurableTheme.HoverEffectColorChange, 1)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.ProcessArgumentButtonHover)%>
<% }%>
}

A.wsdlLink,
A.wsdlLink:visited,
A.wsdlLink:hover
{
<% if (CrmTheme.IsThemeFeatureEnabled()){%>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.GlobalLink)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.DevResourcesGlobalLink)%>
<% }%>
}

A.docManagementLink,
A.docManagementLink:visited,
A.docManagementLink:hover
{
<% if (CrmTheme.IsThemeFeatureEnabled()){%>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.GlobalLink)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.DocumentManagementLink)%>
<% }%>
}

.provisioning #InstanceSelection .instance .onprem-description a
{
<% if (CrmTheme.IsThemeFeatureEnabled()){%>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.GlobalLink)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.SocialInsightsLink)%>
<% }%>
}

.notesWall .post.readMode .attachAction:hover .deleteActionGradientMask
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% if (IsRightToLeft) { %>
<%= this.CssControlGradient(CrmTheme.Current.ConfigurableTheme.HoverEffectColorChange.BackColor, "0%", CrmTheme.Current.ConfigurableTheme.HoverEffectColorChange.BackColor, "0%", "left", true, 0.15, true)%>
<% } else { %>
<%= this.CssControlGradient(CrmTheme.Current.ConfigurableTheme.HoverEffectColorChange.BackColor, "0%", CrmTheme.Current.ConfigurableTheme.HoverEffectColorChange.BackColor, "0%", "right", true, 0.15, true)%>
<% } %>
<% } else { %>
<% if (IsRightToLeft) { %>
<%= this.CssControlGradient(CrmTheme.Current.Global.GlobalControlHoverLookupBackground.BackColor, "15%", CrmTheme.Current.Global.GlobalControlHoverLookupBackground.BackColor, "100%", "left", true, 0.15)%>
<% } else { %>
<%= this.CssControlGradient(CrmTheme.Current.Global.GlobalControlHoverLookupBackground.BackColor, "15%", CrmTheme.Current.Global.GlobalControlHoverLookupBackground.BackColor, "100%", "right", true, 0.15)%>
<% } %>
<% } %>
}

.notesWall .post.readMode .attachAction:hover .ms-crm-Inline-GradientMask
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% if (IsRightToLeft) { %>
<%= this.CssControlGradient(CrmTheme.Current.ConfigurableTheme.HoverEffectColorChange.BackColor, "0%", CrmTheme.Current.ConfigurableTheme.HoverEffectColorChange.BackColor, "0%", "left", true, 0.25, true)%>
<% } else { %>
<%= this.CssControlGradient(CrmTheme.Current.ConfigurableTheme.HoverEffectColorChange.BackColor, "0%", CrmTheme.Current.ConfigurableTheme.HoverEffectColorChange.BackColor, "0%", "right", true, 0.25, true)%>
<% } %>
<% } else { %>
<% if (IsRightToLeft) { %>
<%= this.CssControlGradient(CrmTheme.Current.Global.GlobalControlHoverLookupBackground.BackColor, "25%", CrmTheme.Current.Global.GlobalControlHoverLookupBackground.BackColor, "100%", "left", true, 0.25)%>
<% } else { %>
<%= this.CssControlGradient(CrmTheme.Current.Global.GlobalControlHoverLookupBackground.BackColor, "25%", CrmTheme.Current.Global.GlobalControlHoverLookupBackground.BackColor, "100%", "right", true, 0.25)%>
<% } %>
<% } %>
}

.ms-crm-Settings-Selected
{
<% if (CrmTheme.IsThemeFeatureEnabled()){%>
<% = this.GetBackgroundColorWithRGBA(CrmTheme.Current.ConfigurableTheme.SelectedEffect, 1)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Settings.CaseSettingsSelectedBackgroundColor)%>
<% }%>
}


.ms-crm-ImageStrip-areaChart_sel,
.ms-crm-ImageStrip-areaChart_arrow_sel,
.ms-crm-ImageStrip-barChart_sel,
.ms-crm-ImageStrip-barChart_arrow_sel,
.ms-crm-ImageStrip-bottomRules_sel,
.ms-crm-ImageStrip-bottomRules_arrow_sel,
.ms-crm-ImageStrip-clearRules_sel,
.ms-crm-ImageStrip-columnChart_sel,
.ms-crm-ImageStrip-columnChart_arrow_sel,
.ms-crm-ImageStrip-funnelChart_sel,
.ms-crm-ImageStrip-lineChart_sel,
.ms-crm-ImageStrip-pieChart_sel,
.ms-crm-ImageStrip-tagChart_sel,
.ms-crm-ImageStrip-doughnutChart_sel,
.ms-crm-ImageStrip-topRules_sel,
.ms-crm-ImageStrip-topRules_arrow_sel,
.ms-crm-ImageStrip-topBottomRules_sel,
.ms-crm-ImageStripRtl-areaChart_sel,
.ms-crm-ImageStripRtl-areaChart_arrow_sel,
.ms-crm-ImageStripRtl-barChart_sel,
.ms-crm-ImageStripRtl-barChart_arrow_sel,
.ms-crm-ImageStripRtl-bottomRules_sel,
.ms-crm-ImageStripRtl-bottomRules_arrow_sel,
.ms-crm-ImageStripRtl-clearRules_sel,
.ms-crm-ImageStripRtl-columnChart_sel,
.ms-crm-ImageStripRtl-columnChart_arrow_sel,
.ms-crm-ImageStripRtl-funnelChart_sel,
.ms-crm-ImageStripRtl-lineChart_sel,
.ms-crm-ImageStripRtl-pieChart_sel,
.ms-crm-ImageStripRtl-topRules_sel,
.ms-crm-ImageStripRtl-topRules_arrow_sel,
.ms-crm-ImageStripRtl-topBottomRules_sel
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.CssOpacityWithImportant(CrmTheme.Current.ConfigurableTheme.HoverEffectColorChange.BackColor, 1, "background-color")%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.ChartsButtonHoverEffectColorChangeImportant)%>
<% }%>
}

A.ms-crm-NotesUserLink
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.GlobalLink)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Settings.NotesUserLink)%>
<% } %>
}

TR.ms-crm-List-Row-Lite:hover .ms-crm-Inline-Value div.ms-crm-Inline-GradientMask
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<%= this.CssControlGradient(CrmTheme.Current.ConfigurableTheme.HoverEffectColorChange.BackColor, "25%", CrmTheme.Current.ConfigurableTheme.HoverEffectColorChange.BackColor, "100%", IsRightToLeft ? "left" : "right", true, 0.25)%>
<% } else { %>
<%= this.CssControlGradient(CrmTheme.Current.Grid.RowHoverLite.BackColor, "25%", CrmTheme.Current.Grid.RowHoverLite.BackColor, "100%", IsRightToLeft ? "left" : "right", true, 0.25)%>
<% } %>
}

TR.ms-crm-List-SelectedRow-Lite .ms-crm-Inline-Value div.ms-crm-Inline-GradientMask
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<%= this.CssControlGradient(CrmTheme.Current.ConfigurableTheme.SelectedEffect.BackColor, "25%", CrmTheme.Current.ConfigurableTheme.SelectedEffect.BackColor, "100%", IsRightToLeft ? "left" : "right", true, 0.25)%>
<% } else { %>
<%= this.CssControlGradient(CrmTheme.Current.Grid.RowSelected.BackColor, "25%", CrmTheme.Current.Grid.RowSelected.BackColor, "100%", IsRightToLeft ? "left" : "right", true, 0.25)%>
<% } %>
}

TR.ms-crm-List-Row-Lite .ms-crm-List-DataCell-Lite:hover .ms-crm-Inline-Value div.ms-crm-Inline-GradientMask,
TR.ms-crm-List-SelectedRow-Lite .ms-crm-List-DataCell-Lite:hover .ms-crm-Inline-Value div.ms-crm-Inline-GradientMask
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<%= this.CssControlGradient(CrmTheme.Current.ConfigurableTheme.ControlEffectsBackColor.BackColor, "25%", CrmTheme.Current.ConfigurableTheme.ControlEffectsBackColor.BackColor, "100%", IsRightToLeft ? "left" : "right", true, 0.25)%>
<% } else { %>
<%= this.CssControlGradient(CrmTheme.Current.Global.GlobalControlHoverBackColor.BackColor, "25%", CrmTheme.Current.Global.GlobalControlHoverBackColor.BackColor, "100%", IsRightToLeft ? "left" : "right", true, 0.25)%>
<% } %>
}

.noteDoneButton:hover,
.noteDoneButton:focus,
.noteAttachButton:hover,
.noteAttachButton:focus
{
<% if (CrmTheme.IsThemeFeatureEnabled()){%>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.HoverEffectColorAndBorderChange)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.NoteTabButtonHover)%>
<% }%>
}

.ms-crm-ImageStrip-more_right_hover,
.ms-crm-ImageStrip-more_left_hover,
.ms-crm-ImageStrip-more_up_hover,
.ms-crm-ImageStrip-more_down_hover
{
<% if (CrmTheme.IsThemeFeatureEnabled()){%>
<% = this.GetBackgroundColorWithRGBA(CrmTheme.Current.ConfigurableTheme.HoverEffectColorChange, 1)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.TileViewScrollButtonHover)%>
<% }%>
}

.flyoutItemOnMouseOver
{
<% if (CrmTheme.IsThemeFeatureEnabled()){%>
<% = this.GetBackgroundColorWithRGBA(CrmTheme.Current.ConfigurableTheme.HoverEffectColorChange, 1)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.QuickFindOptionHover)%>
<% }%>
}

.ms-crm-AboutDialog-Header,
tr.ms-crm-AboutDialog-Header td
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.MainNavBarColorImportant)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.AboutDialogHeader)%>
<% }%>
}

SPAN.listingType a:link,
SPAN.solutionName a:link,
div.reviews a:link
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.GlobalLink)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Settings.DynamicsMarketingLink)%>
<% } %>
}

.ms-crm-Duration-Row:hover
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetBackgroundColorWithRGBA(CrmTheme.Current.ConfigurableTheme.HoverEffectColorChange, 1)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.DurationRowHover)%>
<% } %>
}

.navTourLearningLinkText
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.GlobalLink)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.NavTourLearningLink)%>
<% } %>
}

.stdTable .ms-crm-Setting-ContextHeader-Title,
body.hideUserProfile,
.stage,
div.stdTable,
div#crmRibbonManager,
.ms-crm-control-SideStrip,
DIV.ms-crm-InlineTabContainer-Read,
DIV.ms-crm-InlineTabContainer-Read-SLAKpiQuickView,
TR.ms-crm-Form-HeaderContainer,
div.ms-crm-Form-Area.ms-crm-Form-Area-position,
DIV.ms-crm-Form-FooterContainer,
DIV.ms-crm-Form-AreaContainer,
DIV.ms-crm-Form-AreaContainerQuick,
div#rofContainer,
div.ms-crm-Form-HeaderContainer,
.refresh-form div.ms-crm-Form-HeaderContainer,
.refresh-form-footer table,
.ms-crm-List-Title,
table.ms-crm-Grid-Control-Bar,
div#rofContainer div.ms-crm-Form-Container,
.ms-crm-Dashboard-Area DIV.ms-crm-InlineTab
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.BackgroundColor)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.BackgroundColor)%>
<% } %>
}

.ms-crm-readForm-Container,
.ms-crm-appgridmenubar,
table.ms-crm-control-strip-table,
div#rofContainer div.ms-crm-Form-Container,
div.dashboard-brdr,
IFRAME.ms-crm-Custom,
#dashboardSelector a.ms-crm-View-Name,
#dashboardSelector a.ms-crm-View-Name-select,
.homepage_table
{
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.BackgroundColorAsBorderColorImportant)%>
}

.ms-crm-list-TitleFilter
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.BackgroundColor)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Grid.TitleFilterArea) %>
<% } %>
}

TABLE.ms-crm-Form-Layout
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.BackgroundColor)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Form.PageDataArea) %>
<% } %>
}

div.ms-crm-TopBarContainer
{
position: absolute;
<% if (CrmStyles.IsRightToLeft) { %>
right: 0px;
<% } else { %>
left: 0px;
<% } %>
top: 0px;
width: 100%;
}

div.ms-crm-TopBarContainer.newNavBarMode
{
top: 50px;
background-size:auto 0px;
overflow: hidden;
}

div.ms-crm-TopBarContainerGlobal
{
background-repeat: no-repeat;
}

div.ms-crm-TopBarContainerForm
{
background-repeat : repeat-x;
}

TABLE#AppGridFilterContainer
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.BackgroundColor)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Grid.FilterArea) %>
<% } %>
}

.tabsControl .tabsHeader .tabLink.active
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.CssOpacityWithImportant(CrmTheme.Current.ConfigurableTheme.GlobalLink.ForeColor, 1, "border-top-color")%>
<% } %>
}

button
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.ControlEffectsBorder)%>
<% } else {%>
<% = this.GetStyleCss(CrmTheme.Current.Global.Button) %>
<% } %>
}

.border-callout
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.CssOpacityWithImportant(CrmTheme.Current.ConfigurableTheme.GlobalLink.ForeColor, 1, "border-color")%>
<% } else {%>
border-color: #0072C6;
<% } %>
}

.border-callout .border-notch
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.CssOpacityWithImportant(CrmTheme.Current.ConfigurableTheme.GlobalLink.ForeColor, 1, "border-bottom-color")%>
<% } else {%>
border-bottom-color: #0072C6;
<% } %>
}

.wall .filters .filter.selected, .recordWall .filters .filter.selected
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.CssOpacityWithImportant(CrmTheme.Current.ConfigurableTheme.MainNavBarColor.BackColor, 1, "border-bottom-color")%>
<% } %>
}

.yammerWall .filters .filter.selected
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.CssOpacityWithImportant(CrmTheme.Current.ConfigurableTheme.MainNavBarColor.BackColor, 1, "border-bottom-color")%>
background-color: #f1f1f1;
border-top: 1px solid #BDC3C7;
border-left: 1px solid #BDC3C7;
border-right: 1px solid #BDC3C7;
<% } %>
}

button.activity-button-container
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.CssOpacityWithImportant(CrmTheme.Current.ConfigurableTheme.GlobalLink.ForeColor, 1, "background-color")%>
<% } %>
}

button.activity-button-container:last-of-type
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.CssOpacityWithImportant(CrmTheme.Current.ConfigurableTheme.MainNavBarColor.BackColor, 1, "color")%>
<% = this.CssOpacityWithImportant(CrmTheme.Current.ConfigurableTheme.ControlEffectsBorder.BorderColor, 1, "border-color")%>
<% } %>
}

.ms-crm-RefreshDialog-Footer-MDD > .ms-crm-RefreshDialog-Button:first-child,
.ms-crm-RefreshDialog-Footer-Right > .ms-crm-RefreshDialog-Button:first-child,
.ms-crm-RefreshDialog-Button.ms-crm-Confirm-Button.ms-crm-RefreshDialog-HighlightButton,
.ms-crm-RefreshDialog-Button.ms-crm-Cancel-Button.ms-crm-RefreshDialog-HighlightButton,
.ms-crm-RefreshDialog-Button.ms-crm-Confirm-Button.ms-crm-RefreshDialog-HighlightButton:Disabled,
.ms-crm-RefreshDialog-Button.ms-crm-Cancel-Button.ms-crm-RefreshDialog-HighlightButton:Disabled
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.CssOpacityWithImportant(CrmTheme.Current.ConfigurableTheme.GlobalLink.ForeColor, 1, "background-color")%>
<% } %>
}

.ms-crm-RefreshDialog-Footer > .ms-crm-RefreshDialog-Button:first-child
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.CssOpacityWithImportant(CrmTheme.Current.ConfigurableTheme.GlobalLink.ForeColor, 1, "background-color")%>
<% } %>
color : #FFFFFF;
}
.ms-crm-RefreshDialog-Footer > .ms-crm-RefreshDialog-Button:first-child:Disabled
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
color : #B1B1B1;
background-color:#ffffff !important;
<% } %>
}
.ms-crm-RefreshDialog-Footer-MDD > .ms-crm-RefreshDialog-Button:first-child:Enabled:Hover,
.ms-crm-RefreshDialog-Footer-Right > .ms-crm-RefreshDialog-Button:first-child:Enabled:Hover
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.CssOpacityWithImportant(CrmTheme.Current.ConfigurableTheme.HoverEffectColorChange.BackColor, 1, "background-color")%>
<% } %>
}

.ms-crm-RefreshDialog-Footer-MDD > .ms-crm-RefreshDialog-Button:first-child:Disabled,
.ms-crm-RefreshDialog-Footer-Right > .ms-crm-RefreshDialog-Button:first-child:Disabled,
.ms-crm-RefreshDialog-Footer-MDD > .ms-crm-RefreshDialog-Button:last-child:Disabled,
.ms-crm-RefreshDialog-Footer-Right > .ms-crm-RefreshDialog-Button:last-child:Disabled
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.CssOpacityWithImportant(CrmTheme.Current.ConfigurableTheme.MainNavBarColor.BackColor, 0.25, "background-color")%>
<% } %>
}

.ms-crm-RefreshDialog-Button:Enabled:Hover
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.CssOpacityWithImportant(CrmTheme.Current.ConfigurableTheme.HoverEffectColorChange.BackColor, 1, "background-color")%>
<% } %>
}

.ms-crm-RefreshDialog-Button,
.ms-crm-RefreshDialog-Button.ms-crm-Confirm-Button.ms-crm-RefreshDialog-HighlightButton,
.ms-crm-RefreshDialog-Button.ms-crm-Cancel-Button.ms-crm-RefreshDialog-HighlightButton,
.ms-crm-RefreshDialog-Button.ms-crm-Confirm-Button.ms-crm-RefreshDialog-HighlightButton:Disabled,
.ms-crm-RefreshDialog-Button.ms-crm-Cancel-Button.ms-crm-RefreshDialog-HighlightButton:Disable
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.CssOpacityWithImportant(CrmTheme.Current.ConfigurableTheme.ControlEffectsBorder.BorderColor, 1, "border-color")%>
<% = this.CssOpacityWithImportant(CrmTheme.Current.ConfigurableTheme.MainNavBarColor.BackColor, 1, "color")%>
<% } else {%>
border:	1px solid rgba(0, 120, 215, 1.0) !important;
<% } %>
}

button
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.ControlEffectsBorder)%>
<% } else {%>
<% = this.GetStyleCss(CrmTheme.Current.Global.Button) %>
<% } %>
}

.ms-crm-RefreshDialog-Header-Title,
TD.ms-crm-RefreshDialog-Error-Title,
#tdDialogHeader.ms-crm-RefreshDialog-FormHeader-MDD .ms-crm-Inline-Label,
#tdDialogHeader.ms-crm-RefreshDialog-FormHeader-MDD #lbl_reactivatecase
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.GlobalLinkImportant)%>
<% } %>
}

.tabContainer #notescontrolactivityContainer_notescontrol > div:first-of-type > div:last-of-type > a
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.GlobalLinkImportant)%>
<% } %>
}

.wall .post div.postActions a.textAction, .recordWall .post div.postActions a.textAction
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetStyleCss(CrmTheme.Current.ConfigurableTheme.GlobalLinkImportant)%>
<% } %>
}

.notesWall .editMode .notesTextBoxDiv
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.CssOpacityWithImportant(CrmTheme.Current.ConfigurableTheme.MainNavBarColor.BackColor, 1, "border-color")%>
<% } %>
}

.notesWall .header .post .border-notch
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.CssOpacityWithImportant(CrmTheme.Current.ConfigurableTheme.MainNavBarColor.BackColor, 1, "border-bottom-color")%>
<% } else {%>
border-bottom-color: #0072C6;
<% } %>
}

.notesWall .post.editMode .attachLink, .notesWall .post.editMode .doneLink
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.CssOpacityWithImportant(CrmTheme.Current.ConfigurableTheme.GlobalLink.ForeColor, 1, "background-color")%>
<% } else {%>
background-color: ##0078D7;
<% } %>
}

.notesWall .notesTextBoxDiv .doneAction .doneLink:hover
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.CssOpacityWithImportant(CrmTheme.Current.ConfigurableTheme.GlobalLink.ForeColor, 1, "background-color")%>
<% } else {%>
background-color: #0078D7 !important
<% } %>
}

.notesWall .post.editMode .attachLink,
.notesWall .post.editMode #attachButton
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.CssOpacityWithImportant(CrmTheme.Current.ConfigurableTheme.ControlEffectsBorder.BorderColor, 1, "border-color")%>
<% } else {%>
border: 1px solid #0078D7 !important;
border-color: #0078D7 !important;
<% } %>
}
.notesWall .post.editMode .attachLink, .notesWall .post.editMode #attachButton
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.CssOpacityWithImportant(CrmTheme.Current.ConfigurableTheme.GlobalLink.ForeColor, 1, "color")%>
<% } else {%>
color: #0078D7 !important;
<% } %>
}

<% if(Microsoft.Crm.Application.Utility.Util.IsWebClientVisualRefreshFeatureAvailable(null)) { %>

.selectedText,
.navTabButton.navTabButtonRight.selected,
.hoveredText
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.CssOpacityWithImportant(CrmTheme.Current.ConfigurableTheme.MainNavBarColor.BackColor, 1, "background-color")%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.NavBarBackground)%>
<% }%>
}

.navTabButtonLeft:hover + span.navTabButtonRight{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.CssOpacityWithImportant(CrmTheme.Current.ConfigurableTheme.MainNavBarColor.BackColor, 1, "background-color")%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Global.NavBarBackground)%>
<% }%>
}

.ms-crm-metaphor-grid-header,
.ms-crm-metaphor-grid-header-bg-color,
.megaContainerRelevanceSearchBGColor
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetBackgroundColorWithRGBA(CrmTheme.Current.ConfigurableTheme.PageHeaderBackgroundColor, 1)%>
<% } else { %>
<% = this.GetBackgroundColorWithRGBA(CrmTheme.Current.Global.NavBarBackground, 0.1)%>
<% }%>
}

.mscrm-globalqc-actionsavebutton,
.postButton,
.ms-crm-Inline-RecommendationApply
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.CssOpacityWithImportant(CrmTheme.Current.ConfigurableTheme.GlobalLink.ForeColor, 1, "background-color")%>
<% } %>
}

#gridControlBarCompositeControl, .ms-crm-metaphor-grid-header .ms-crm-List-Title
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetBackgroundColorWithRGBA(CrmTheme.Current.ConfigurableTheme.MainNavBarColor, 0.0)%>
<% } else { %>
<% = this.GetBackgroundColorWithRGBA(CrmTheme.Current.Global.NavBarBackground, 0.0)%>
<% }%>
}

.ms-crm-metaphor-dashboard-container #dummyDashboardReflowDiv
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetBackgroundColorWithRGBA(CrmTheme.Current.ConfigurableTheme.PageHeaderBackgroundColor, 1)%>
<% } else { %>
<% = this.GetBackgroundColorWithRGBA(CrmTheme.Current.Global.NavBarBackground, 0.1)%>
<% }%>
}

.ms-crm-metaphor-dashboard-container #dashboardSelector a.ms-crm-View-Name,
.ms-crm-metaphor-dashboard-container #dashboardSelector a.ms-crm-View-Name-select {
border: none !important;
}

.ms-crm-Form-HeaderPosition
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetBackgroundColorWithRGBA(CrmTheme.Current.ConfigurableTheme.PageHeaderBackgroundColor, 1)%>
<% } else { %>
<% = this.GetBackgroundColorWithRGBA(CrmTheme.Current.Global.NavBarBackground, 0.1)%>
<% }%>
}
.ms-crm-FormClipboardBgColor,
.ms-crm-categorizedSearchHeader,
.ms-crm-searchReflowDiv
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetBackgroundColorWithRGBA(CrmTheme.Current.ConfigurableTheme.PageHeaderBackgroundColor, 1)%>
<% =this.CssOpacity(CrmTheme.Current.ConfigurableTheme.PageHeaderBackgroundColor.BackColor, 1, "color")%>
<% } else { %>
<% = this.GetBackgroundColorWithRGBA(CrmTheme.Current.Global.NavBarBackground, 0.1)%>
<% =this.CssOpacity(CrmTheme.Current.Global.NavBarBackground.BackColor, 0.1, "color")%>
<% }%>
}

.ms-crm-HeaderTileElement .ms-crm-Inline-Value.ms-crm-HeaderTile div.ms-crm-Inline-GradientMask,
.ms-crm-HeaderTileElement:hover .ms-crm-Inline-Value.ms-crm-HeaderTile:after,
.ms-crm-HeaderTileElement:hover .ms-crm-InlineEditLabel span:first-child:after,
.ms-crm-HeaderTileElement .ms-crm-InlineEditLabelText:after,
.ms-crm-HeaderTileElement .ms-crm-Inline-Value:after ,
.ms-crm-Form-HeaderContainer .ms-crm-Inline-Value label:after
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% if (Microsoft.Crm.Application.Utility.Util.IsWebClientVisualRefreshFeatureAvailable(null)) { %>
<%= this.CssControlGradient(CrmTheme.Current.ConfigurableTheme.PageHeaderBackgroundColor.BackColor, "25%", CrmTheme.Current.ConfigurableTheme.PageHeaderBackgroundColor.BackColor, "100%", "bottom", true, 0.25, true)%>
<% } else { %>
<% if (IsRightToLeft) { %>
<%= this.CssControlGradient(CrmTheme.Current.ConfigurableTheme.PageHeaderBackgroundColor.BackColor, "25%", CrmTheme.Current.ConfigurableTheme.PageHeaderBackgroundColor.BackColor, "100%", "left", true, 0.25, true)%>
<% } else { %>
<%= this.CssControlGradient(CrmTheme.Current.ConfigurableTheme.PageHeaderBackgroundColor.BackColor, "25%", CrmTheme.Current.ConfigurableTheme.PageHeaderBackgroundColor.BackColor, "100%", "right", true, 0.25, true)%>
<% } %>
<% } %>
<% } else { %>
<% if (IsRightToLeft) { %>
<%= this.CssControlGradient(CrmTheme.Current.Global.NavBarBackground.BackColor, "25%", CrmTheme.Current.Global.NavBarBackground.BackColor, "100%", "left", true, 0.25, true)%>
<% } else { %>
<%= this.CssControlGradient(CrmTheme.Current.Global.NavBarBackground.BackColor, "25%", CrmTheme.Current.Global.NavBarBackground.BackColor, "100%", "right", true, 0.25, true)%>
<% } %>
<% } %>
}

.refresh-form TD.ms-crm-Form-Section,
DIV.ms-crm-Grid-Title-Background-color
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetBackgroundColorWithRGBANoImportant(CrmTheme.Current.ConfigurableTheme.PanelHeaderBackgroundColor, 1)%>
<% } else { %>
<% = this.GetBackgroundColorWithRGBANoImportant(CrmTheme.Current.Global.NavBarBackground, 0.04)%>
<% }%>
}

.ms-crm-PanelHeader-Color
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetBackgroundColorWithRGBANoImportant(CrmTheme.Current.ConfigurableTheme.PanelHeaderBackgroundColor, 1)%>
<% } %>
}

.ms-crm-PageHeader-Color
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetBackgroundColorWithRGBA(CrmTheme.Current.ConfigurableTheme.PageHeaderBackgroundColor, 1)%>
<% } %>
}

#visualizationToolBar, #headerRowTR, #vizTable
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetBackgroundColorWithRGBA(CrmTheme.Current.ConfigurableTheme.PanelHeaderBackgroundColor, 1)%>
<% } %>
}

.ms-crm-List-SelectedRow-Lite
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetBackgroundColorWithRGBA(CrmTheme.Current.ConfigurableTheme.MainNavBarColor, 0.3)%>
<% } %>
}

.ms-crm-List-Row-Lite:hover
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetBackgroundColorWithRGBA(CrmTheme.Current.ConfigurableTheme.MainNavBarColor, 0.2)%>
<% } %>
}

table.ms-crm-List-Header-Lite th.ms-crm-List-Sortable:hover
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetBackgroundColorWithRGBA(CrmTheme.Current.ConfigurableTheme.MainNavBarColor, 0.2)%>
<% } else { %>
<% = this.GetStyleCss(CrmTheme.Current.Grid.RowHoverLite)%>
<% } %>
}

table.ms-crm-control-strip-table
{
border-color: #EFEFEF !important;
}

<% if (Request.Browser.Browser == "IE" || Request.Browser.Browser == "Firefox" ){ %>
div.stdTable .ms-crm-metaphor-grid-header-bg-color
{
<% if (CrmTheme.IsThemeFeatureEnabled()) { %>
<% = this.GetBackgroundColorWithRGBA(CrmTheme.Current.ConfigurableTheme.PageHeaderBackgroundColor, 1)%>
<% } else { %>
<% = this.GetBackgroundColorWithRGBA(CrmTheme.Current.Global.NavBarBackground, 0.1)%>
<% } %>
}
<% } %>

.ms-crm-List-Paging
{

color: #4A4A4A;
}

<% } %>