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
	height: auto;	
}

.notesWall .watermark
{
	font-size: 12px !important ; 
	line-height: 19px;
	color: #666666;
	font-style: italic; 
}

.notesWall .header
{
	padding: 10px 10px 0 0; 
}

.NotesV2OnlyText,
.notesWall .text
{
	padding: 10px 10px 0 0;
	color: #444444;
	font-size: 12px; 
	font-family: Segoe UI, Tahoma, Arial; 
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

.notesWall .wallContainer
{
	padding: 0 10px 0 0; 
	clear: both;
}

.notesWall .post
{
	margin: 0;
	position: relative;
	padding-bottom: 20px;
	clear: both;
}

.notesWall .createNote
{
	padding-bottom: 0;
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
	border: 1px solid #01bde3;
	width: 100%;
	background-color: #ffffff;
}

.notesWall .notesTextBoxDiv .notesTextBoxSpacer
{
	margin: 4px 6px 0px 8px;
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
	font-size: 12px; 
	font-family: Segoe UI, Tahoma, Arial; 
	font-weight: normal;
	color: #000;
}

.notesWall .post .notesTextBoxDiv .notesTextBox
{
	margin-top: 2px;
	word-wrap: break-word;
}

.notesWall .notesTextBoxDiv .notesTitleBox
{
	font-size: 14px; 
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
.notesWall .post.editMode .doneLink
{
	display: inline;
	text-overflow: ellipsis;
	overflow-x: hidden;
	overflow-y: hidden;
	word-wrap: normal;
	text-align: center;
	border: 1px solid #c6c6c6;
	background-color: #FDFDFD;
	min-width:60px;
	height:20px;
	width:auto;
	background-image:url("");
}

.notesWall .notesTextBoxDiv .doneAction
{
	float: right;
	max-width: 30%;
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
	color: #000000;
	font-size: 12px; 
	font-family: Segoe UI, Tahoma, Arial; 
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
	margin: 0 6px 0 8px
}

.notesWall .post .attachImage
{
	vertical-align: middle;
}

.notesWall .post .auditInformation
{
	margin: 0 6px 0 8px
}

.notesWall .post.editMode .actionArea
{
	line-height: 40px;
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
border-bottom-color: #cccccc;
}