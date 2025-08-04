<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

<%-- 
TODO: Theming support

File is localized and going to be placed to wwwroot\_static\css\%LCID%\notesv2.css.aspx
--%>

div.notesWall
{
	height: 100%;
}

.ie7 div.notesWall
{
	height: 100%;
}

.notesWall .watermark
{
	font-size: 14px !important ; /* _locID_css@font-size="notesWall_watermark_FontSize" _locComment="Font Size" */
	line-height: 19px;
	color: #666666;
	font-style: normal; /* _locID_css@font-style="notesWall_watermark_FontStyle" _locComment="Font Style {ValidStrings=normal,bold,italic}" */
}

.notesWall .header
{
	padding: 20px 10px 0 10px; 
}

.NotesV2OnlyText,
.notesWall .text,
.NotesV2OnlyText .text,
.noNotesToShow
{
	color: #9B9B9B;
	opacity: 1;
	font-size: <%= WebUtility.GetFontResourceForStyle("General.16px.font_size") %>; /* _locID_css@font-size="notesWall_text_FontSize" _locComment="Font Size" */
	font-family:  <%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Web_Fonts_SemiLight") %>; /* _locID_css@font-family="notesWall_text_FontFamily" _locComment="Font Family" */
	font-weight: lighter;
	line-height: 24px;
	letter-spacing: 0px;
	text-align: center;
	max-height: 72px;
	overflow: hidden;
	margin-right: -1em;
	padding-right: 1em;
	position: relative;
}

.NotesV2OnlyText .text,
.noNotesToShow
{
	<%-- Bug 494635: Ensure Empty Text Message on Notes Tab of Activity Wall uses Microsoft_Crm_Web_Fonts to ensure UI is consistent across all browsers --%>
	font-family:  <%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Web_Fonts") %>;
}

.notesWall .text:before,
.NotesV2OnlyText .text:before
{
	content: '...';
	position: absolute;
	right: 0;
}

.notesWall .text:after,
.NotesV2OnlyText .text:after
{
	content: '';
	position: absolute;
	right: 0;
	width: 1em;
	height: 1em;
	margin-top: 0.2em;
	background-color: white;
}

.rtl .NotesV2OnlyText,
.rtl .notesWall .text,
.rtl .NotesV2OnlyText .text
{
	margin-left: -1em;
	padding-left: 1em;
}

.rtl .notesWall .text:before,
.rtl .NotesV2OnlyText .text:before
{
	left: 0;
}

.rtl .notesWall .text:after,
.rtl .NotesV2OnlyText .text:after
{
	left: 0;
}

.ie7 .filterAndRefreshContainer
{
	padding-top: 27px;
	margin-top: 0;
}

.notesWall .filterAndRefreshContainer .wallActionsContainer
{
	float: right;
	height: 23px;
}

.notesWall .header .filterAndRefreshContainer {
	display:none;
}

.notesWall .wallContainer
{
	padding: 0 10px 0 0; 
	clear: both;
}

.notesWall .post
{
	margin: 0;
	position: relative;
	padding-bottom: 10px;
	clear: both;
	outline: none;
}

.notesWall .createNote
{
	padding-bottom: 10px;
}

.notesWall .notesTextBoxDiv
{
	border: 1px none #cccccc;
	width: 100%;
}

.notesWall .createNote .notesTextBoxDiv
{
	border: 1px solid #cccccc;
	width: 100%;
}

.notesWall .editMode .notesTextBoxDiv
{
	border: 1px solid #0078D7;
	width: 100%;
	background-color: #ffffff;
}

.notesWall .notesTextBoxDiv .notesTextBoxSpacer
{
	margin: 4px 6px 0px 10px;
}

.notesWall .createNote.readMode  .notesTextBoxSpacer
{
	margin: 0;
}

.notesWall .notesTextBoxDiv .notesTextBox,
.notesWall .notesTextBoxDiv .notesTitleBox
{
	border: 0;
	vertical-align:baseline;
	line-height: 18px;
	width: 100%;
	height: 20px;
	margin: 0;
	padding: 0;
	overflow: hidden;
	font-size: 12px; /* _locID_css@font-size="notesWall_noteTextBoxDiv_FontSize" _locComment="Font Size" */
	font-family: Segoe UI, Tahoma, Arial; /* _locID_css@font-family="notesWall_noteTextBoxDiv_FontFamily" _locComment="Font Family" */
	font-weight: normal;
	color: #444444;;
}

.notesWall .post .notesTextBoxDiv .notesTextBox
{
	margin-top: 2px;
	word-wrap: break-word;
}

.notesWall .notesTextBoxDiv .notesTextBox:focus,
input#createNote_notesTitleBox:focus
{
	outline : 0px;
}

.notesWall .notesTextBoxDiv .notesTitleBox
{
	font-size: 14px; /* _locID_css@font-size="notesWall_notesTextBoxDiv_notesTitleBox_FontSize" _locComment="Font Size" */
	/*This is for SemiBold */
	<% if (Request.Browser.Browser == "Chrome") { %>
	font-weight : 700;
	<% } else { %>
	font-weight : 600;
	<% } %>
}

.notesWall .post.editMode .notesTextBoxDiv .notesTitleBox
{
	border-bottom: 1px dotted #CCCCCC;
}

.notesWall .post.readMode.emptyText .notesTextBox
{
	display: none;
	padding-left:5px;
	box-sizing: border-box;
}

.notesWall .post.emptyAttachment .deleteAttachmentAction,
.notesWall .post.emptyAttachment .attachmentNameSpacer,
.notesWall .post.readMode.emptyAttachment .attachAction,
.notesWall .post.readMode .doneLink,
.notesWall .post.readMode.emptyTitle .notesTitleBox,
.notesWall .post.readMode.emptyTitle .notesTitleGradient,
.notesWall .post.editMode .deleteNotesAction,
.notesWall .createNote.post .auditInformation,
.notesWall .post.editMode .auditInformation,
.notesWall .post.editMode .userName,
.nocreate .notesWall .createNote,
.noedit .notesWall .deleteAttachmentAction,
.nodelete .notesWall .deleteNotesAction,
.noupload .notesWall .notesAttachmentIframe,
.noupload .notesWall .attachLink,
.noupload .notesWall .post.emptyAttachment .attachImage
{
	display: none !important;
}

.notesWall .createNote.post .notesTextBox
{
	display: inline-block !important;
}

.notesWall .post
{
	margin: 0;
	position: relative;
	clear: both;
	outline: none;
}

.wallContainer > .post.readMode {
	outline: none;
}

.notesWall .deleteNotesAction,
.notesWall .post div.deleteAttachmentAction
{
	top: 4px;
	right: 6px;
	display: none;
	float: right;
	position: absolute;
	cursor: pointer;
	z-index: 2;
}

.notesWall .deleteNotesAction .deleteLink,
.notesWall .post div.deleteAttachmentAction .deleteAttachmentLink
{
	z-index: 2;
}

.notesWall .notesTextBoxDiv .attachLink,
.notesWall .notesTextBoxDiv .doneLink
{
	margin: 0;
	display: none;
}

.notesWall .post.editMode .attachLink,
.notesWall .post.editMode #attachButton {
	background-color: #ffffff !important;
	border: 1px solid #0078D7;
	border-color: #0078D7;
	color: #0078D7;
}

.notesWall .wallContainer {
	padding: 0 10px 0 10px;
	clear: both;
}

.notesWall .post.editMode .attachLink,
.notesWall .post.editMode .doneLink
{
	display: inline;
	text-overflow: ellipsis;
	overflow-x: hidden;
	overflow-y: hidden;
	word-wrap: normal;
	text-align: center;
	border: 1px solid #c6c6c6;
	background-color: #0078D7;
	min-width:60px;
	height:25px;
	width:auto;
	background-image:url("");
	color:#ffffff;
}

.notesWall .notesTextBoxDiv .doneAction
{
	float: right;
	max-width: 30%;
}

.notesWall .notesTextBoxDiv .doneLink:focus
{
bakground-color:#f1f1f1;
outline:1px solid #BDC3C7;
box-sizing:border-box;
}

.notesWall .notesTextBoxDiv .doneAction .doneLink:hover {
	background-color:#0078D7;
	opacity:0.6;
}

.notesWall .attachAction
{
	display: inline-block;
	position: relative;
	width: 80%;
	float: left;
}

.notesWall .attachAction .attachmentNameSpacer
{
	display:inline-block;
	text-overflow: clip;
	word-wrap: normal;
	overflow: hidden;
	position: relative;
	width: 80%;
	vertical-align: middle;
}

.notesWall .notesTextBoxDiv .attachLink
{
	max-width: 65%;
}

.notesWall .post .footer
{
	line-height: 20px;
	margin: 0;
}

.notesWall .post.editMode .footer,
.notesWall .post.editMode.emptyAttachment .attachAction:hover,
.notesWall .post.editMode.emptyAttachment .attachAction .imageAction,
.notesWall .post.editMode.emptyAttachment .attachAction:hover .imageAction
{
	background-color: #f8f8f8;
}

.notesWall .post.editMode .footer
{
	margin-top: 12px;
}

.notesWall .footer a
{
	color: #0078D7;
	font-size: 12px; /* _locID_css@font-size="notesWall_footer_FontSize" _locComment="Font Size" */
	font-family: Segoe UI, Tahoma, Arial; /* _locID_css@font-family="notesWall_footer_FontFamily" _locComment="Font Family" */
}
.undoText
{
	color: #444444;
}

.deleteNoteDiv a.undoLink
{
	color: #444444;
}
.notesWall .footer a.attachmentFileName:hover
{
	color: #0072c6;
	text-decoration: none;
}

.notesWall .deleteNoteDiv .undoText,
.notesWall .post .deleteAttachmentDiv .undoText
{
	font-weight: bolder;
}

.notesWall .deleteNoteDiv
{
	float: right;
	display: block;
	clear: both;
}

.notesWall .footer span.posted
{
	color: #444444;
}

.notesWall .post .actionArea
{
	display:block;
	overflow: hidden;
	position: relative;
	whitespace: nowrap;
	word-wrap: normal;
	margin: 0px
}

.notesWall .post .attachImage
{
	vertical-align: middle;
	margin-right: 10px;
	margin-left: 10px;
}

.notesWall .post .auditInformation
{
	margin: 0 6px 0 10px
}

.notesWall .post.editMode .actionArea
{
	line-height: 40px;
	margin-right: 10px;
}

.notesWall .attachmentFileName
{
display: inline;
overflow: hidden;
width: 100%;
white-space: nowrap;
vertical-align: middle;
}

/* Wall post section */

.notesWall .readMode.post .userName
{
	display: inline;
	white-space: nowrap;
	color:#0078D7;
}

/* IPad Handling .mobile class*/

.mobile .notesWall .post:hover div.deleteNotesAction,
.mobile .notesWall .attachAction:hover div.deleteAttachmentAction
{
	display: none;
}

.notesWall .post:hover div.deleteNotesAction,
.notesWall .attachAction:hover div.deleteAttachmentAction,
.mobile .notesWall .post.focus div.deleteNotesAction,
.mobile .notesWall .post.focus .attachAction div.deleteAttachmentAction
{
	display: inline;
}

.notesWall .notesAttachmentIframe
{
	display: inline-block;
	height: 26px;
	width: 85%;
}

.notesWall .deleteAttachmentDiv
{
	display: inline-block;
}

.notesWall .post .deleteActionGradientMask
{
	display: inline-block;
	overflow: hidden;
	white-space: nowrap;
	word-wrap: normal;
	vertical-align: middle;
	width: 40px;
	z-index: 1;
	top: 0;
	height: 19px;
	margin-top: 1px;
	right: 1px;
	float:left;

	background: rgba(255, 255, 255, 0.15);
	<%-- The IE <= 8 and IE9 behave very different in the rendering of the gradient mask in RTL mode. 
	The IE9 seems to automatically handle the color direction change. However, IE8 doesn't handle it --%>
	<%if( CrmStyles.IsRightToLeft && Request.Browser.MajorVersion <= 8 ){ %>
	filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffffff', endColorstr='#26ffffff', GradientType=1);
	<% } else { %>
	filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#26ffffff', endColorstr='#ffffffff', GradientType=1);
	<%} %>

<% if (CrmStyles.IsRightToLeft) { %>
	background: -moz-linear-gradient(left, rgba(255, 255, 255, 0.15), #ffffff);
	background: -webkit-gradient(linear, left, right, color-stop(rgba(255, 255, 255, 0.15)), color-stop(#ffffff));
	background: -webkit-linear-gradient(left, rgba(255, 255, 255, 0.15), #ffffff);
	background: -o-linear-gradient(left, rgba(255, 255, 255, 0.15), #ffffff);
	background: -ms-linear-gradient(left, rgba(255, 255, 255, 0.15), #ffffff);
	background: linear-gradient(left, rgba(255, 255, 255, 0.15), #ffffff);
<% } else { %>
	background: -moz-linear-gradient(right, rgba(255, 255, 255, 0.15), #ffffff);
	background: -webkit-gradient(linear, right, left, color-stop(rgba(255, 255, 255, 0.15)), color-stop(#ffffff));
	background: -webkit-linear-gradient(right, rgba(255, 255, 255, 0.15), #ffffff);
	background: -o-linear-gradient(right, rgba(255, 255, 255, 0.15), #ffffff);
	background: -ms-linear-gradient(right, rgba(255, 255, 255, 0.15), #ffffff);
	background: linear-gradient(right, rgba(255, 255, 255, 0.15), #ffffff);
<% } %>
}

.notesWall .post .imageAction
{
	background: white;
}

.notesWall .post.emptyAttachment .attachAction:hover,
.notesWall .post.emptyAttachment .attachAction:hover .imageAction
{
	background: white;
}

.notesWall .readMode.post .ms-crm-Inline-GradientMask
{
	position: absolute;
	width: 15px;
	height: 20px;
	z-index: 1;
	top: 1px;
	right: 0px;

	background: rgba(255, 255, 255, 0.25); /* for non-css3 browsers */

	<%-- The IE <= 8 and IE9 behave very different in the rendering of the gradient mask in RTL mode.
	The IE9 seems to automatically handle the color direction change. However, IE8 doesn't handle it --%>
	<%if( CrmStyles.IsRightToLeft && Request.Browser.MajorVersion <= 8 ){ %>
	filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#3fffffff', GradientType=1);
	<% } else { %>
	filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#3fffffff', endColorstr='#ffffff', GradientType=1);
	<%} %>

<% if (CrmStyles.IsRightToLeft) { %>
	background: -moz-linear-gradient(left,rgb(255, 255, 255) 25%, #ffffffff);
	background: -webkit-gradient(linear,left,right,color-stop(25%, rgb(255, 255, 255)),color-stop(100%, rgb(255, 255, 255)));
	background: -webkit-linear-gradient(left,rgb(255, 255, 255) 25%,rgb(255, 255, 255) 100%);
	background: -o-linear-gradient(left,rgb(255, 255, 255) 25%,rgb(255, 255, 255) 100%);
	background: -ms-linear-gradient(left,rgb(255, 255, 255) 25%,rgb(255, 255, 255) 100%);
	background: linear-gradient(left,rgb(255, 255, 255) 25%,rgb(255, 255, 255) 100%);
<% } else { %>
	background: -moz-linear-gradient(right,rgb(255, 255, 255) 25%,rgb(255, 255, 255) 100%);
	background: -webkit-gradient(linear,right,left,color-stop(25%, rgb(255, 255, 255)),color-stop(100%, rgb(255, 255, 255)));
	background: -webkit-linear-gradient(right,rgb(255, 255, 255) 25%,rgb(255, 255, 255) 100%);
	background: -o-linear-gradient(right,rgb(255, 255, 255) 25%,rgb(255, 255, 255) 100%);
	background: -ms-linear-gradient(right,rgb(255, 255, 255) 25%,rgb(255, 255, 255) 100%);
	background: linear-gradient(right,rgb(255, 255, 255) 25%,rgb(255, 255, 255) 100%);
<% } %>
}

.notesWall .post.editMode .attachAction .ms-crm-Inline-GradientMask
{
	background: rgba(248, 248, 248, 0.25); /* for non-css3 browsers */

	<%-- The IE <= 8 and IE9 behave very different in the rendering of the gradient mask in RTL mode. 
	The IE9 seems to automatically handle the color direction change. However, IE8 doesn't handle it --%>
	<%if( CrmStyles.IsRightToLeft && Request.Browser.MajorVersion <= 8 ){ %>
	filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff8f8f8', endColorstr='#3ff8f8f8', GradientType=1);
	<% } else { %>
	filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#3ff8f8f8', endColorstr='#fff8f8f8', GradientType=1);
	<%} %>

<% if (CrmStyles.IsRightToLeft) { %>
	background: -moz-linear-gradient(left,rgb(248, 248, 248) 25%,rgb(248, 248, 248) 100%);
	background: -webkit-gradient(linear,left,right,color-stop(25%, rgb(248, 248, 248)),color-stop(100%, rgb(215, 235, 249)));
	background: -webkit-linear-gradient(left,rgb(248, 248, 248) 25%,rgb(248, 248, 248) 100%);
	background: -o-linear-gradient(left,rgb(248, 248, 248) 25%,rgb(248, 248, 248) 100%);
	background: -ms-linear-gradient(left,rgb(248, 248, 248) 25%,rgb(248, 248, 248) 100%);
	background: linear-gradient(left,rgb(248, 248, 248) 25%,rgb(248, 248, 248) 100%);
<% } else { %>
	background: -moz-linear-gradient(right,rgb(248, 248, 248) 25%,rgb(248, 248, 248) 100%);
	background: -webkit-gradient(linear,right,left,color-stop(25%, rgb(248, 248, 248)),color-stop(100%, rgb(248, 248, 248)));
	background: -webkit-linear-gradient(right,rgb(248, 248, 248) 25%,rgb(248, 248, 248) 100%);
	background: -o-linear-gradient(right,rgb(248, 248, 248) 25%,rgb(248, 248, 248) 100%);
	background: -ms-linear-gradient(right,rgb(248, 248, 248) 25%,rgb(248, 248, 248) 100%);
	background: linear-gradient(right,rgb(248, 248, 248) 25%,rgb(248, 248, 248) 100%);
<% } %>
}

.notesWall .post.editMode .attachAction .ms-crm-Inline-GradientMask,
.notesWall .post.editMode .attachAction .deleteActionGradientMask
{
	top: 11px;
	position: relative;
}

.notesWall .header .post .notch
{
position: absolute;
top: -9px;
margin: 2px;
border-top: 0;
border-left: 8px solid transparent;
border-right: 8px solid transparent;
border-bottom: 8px solid #ffffff;
padding: 0;
width: 0;
height: 0;
font-size: 0;
line-height: 0;
_border-right-color: pink;
_border-left-color: pink;
_filter: chroma(color=pink);
}

.notesWall .header .post .border-notch
{
border-bottom-color: #0072C6;
top: -10px;
}

.notesWall .header .post.readMode .border-notch
{
border-bottom-color: #cccccc !important;
}

.notesWall .firstRunContent
{
	width: 100%;
	height: auto;
}

.emptyBox
{
	height: 100%;
	position: relative;
	width:100%;
}

.emptyMessageContainer
{
	position: absolute;
	padding-top: 15%;
	width: 99%;
}

.ms-crm-Field-Data-Print[rowspan="8"] .emptyMessageContainer .emptyMessageSeparator,
.ms-crm-Field-Data-Print[rowspan="7"] .emptyMessageContainer .emptyMessageSeparator,
.ms-crm-Field-Data-Print[rowspan="6"] .emptyMessageContainer .emptyMessageSeparator,
.ms-crm-Field-Data-Print[rowspan="5"] .emptyMessageContainer .emptyMessageSeparator,
.ms-crm-Field-Data-Print[rowspan="4"] .emptyMessageContainer .emptyMessageSeparator,
.ms-crm-Field-Data-Print[rowspan="3"] .emptyMessageContainer .emptyMessageSeparator,
.ms-crm-Field-Data-Print[rowspan="2"] .emptyMessageContainer .emptyMessageSeparator,
.ms-crm-Field-Data-Print[rowspan="1"] .emptyMessageContainer .emptyMessageSeparator
{
	display: none;
}


.ms-crm-Field-Data-Print[rowspan="8"] .emptyMessageContainer .emptyMessage,
.ms-crm-Field-Data-Print[rowspan="7"] .emptyMessageContainer .emptyMessage,
.ms-crm-Field-Data-Print[rowspan="6"] .emptyMessageContainer .emptyMessage,
.ms-crm-Field-Data-Print[rowspan="5"] .emptyMessageContainer .emptyMessage,
.ms-crm-Field-Data-Print[rowspan="4"] .emptyMessageContainer .emptyMessage,
.ms-crm-Field-Data-Print[rowspan="3"] .emptyMessageContainer .emptyMessage,
.ms-crm-Field-Data-Print[rowspan="2"] .emptyMessageContainer .emptyMessage,
.ms-crm-Field-Data-Print[rowspan="1"] .emptyMessageContainer .emptyMessage
{
	padding-top:0px;
}

.emptyMessageSeparator
{
	text-align: center;
}

.emptyMessageSeparator
{
<% if (this.IsVisualRefreshEnabled) { %>
	visibility: visible;
<% } else { %>
	visibility: hidden;
<% } %>
}

.notesWall .firstRunContent .emptyBox .emptyMessageContainer .text
{
<% if (this.IsVisualRefreshEnabled) { %>
	display: none;
<% } else { %>
	display: block;
<% } %>
}

.notesWall .firstRunContent .emptyBox .emptyMessageContainer .noNotesToShow
{
<% if (this.IsVisualRefreshEnabled) { %>
	display: block;
<% } else { %>
	display: none;
<% } %>
	padding-top : 10px;
}

/* show more template */

.notesWall .showMoreLink
{
	padding-right: 15px;
	color: #1160b7;
	display:block;
	cursor: pointer;
	clear: both;
}

.notesWall .showMoreLink img.progress
{
	display: none;
	float: right;
	border: 0;
	margin: 5px 5px;
}

.rtl .notesWall .showMoreLink img
{
	-moz-transform: scaleX(-1);
	-o-transform: scaleX(-1);
	-webkit-transform: scaleX(-1);
	transform: scaleX(-1);
	filter: FlipH;
	-ms-filter: "FlipH";
	float:left !important;
}

.notesWall .showMoreLink .text
{
	float: right;
	position: inherit;
	color: #1160b7;
}

.rtl .notesWall .showMoreLink .text
{
	float: left !important;
	position: inherit;
	color: #1160b7;
}

.notesWall .showMoreLink .arrow
{
	float:right;
	background: url('$webresource/msdyn_/Images/seeMoreArrows.png') 0 0; 
	width: 10px; 
	height: 10px;
	margin-top: 8px;
	margin-left: 2px;
	margin-bottom: 7px
	color: #1160b7;
}
.rtl .notesWall .showMoreLink .arrow
{
	float:left !important;
	color: #1160b7;
}
.notesWall .showMoreLinkProgress img
{
	display: block !important;
}
