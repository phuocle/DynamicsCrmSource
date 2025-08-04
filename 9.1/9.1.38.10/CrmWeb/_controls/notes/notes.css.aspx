<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

TABLE
{
table-layout:fixed;
width:100%;
cursor:pointer;
}

DIV.notesTextBoxSpacer
{
padding: 0px 2px 0px 2px;
height: auto;
}

Div.notesTextBoxActionsDiv
{
display: none;
zoom: 1;
}

TEXTAREA.ms-crm-Note-Text-create,
TEXTAREA.ms-crm-Note-Text-create-active
{
line-height: 18px;

overflow: hidden;
width: 100%;
border: solid 1px #D6D6D6;
padding: 0;
margin: 0;
cursor: text;
margin: 0;
resize: none;
height : 18px;
font-style: italic;
color: #A9A8A7;
border-width: 0px;
outline: none;
}

TEXTAREA.ms-crm-Note-Text-create-active
{
height : 30px;
font-style: normal;
color: #000000;
}

TEXTAREA.ms-crm-Note-Text
{
overflow: hidden;
width: 100%;
border: none;
cursor: text;
resize: none;
height : 15px;
margin: 0px;
padding: 0px;
outline: none;
}

.noteHeader,
.noteHeaderSelected,
.noteHeaderEditing
{
margin: 0px;
padding: 0px;
border: 0px;
}

.noteHeaderSelected
{
resize: none;
}

.noteHeaderEditing
{
border-color: #0072C6;
}

tr.noteHeaderEditing td.noteSubjectField
{
border-width: 1px 1px 0px 1px;
}

TD.noteSubjectField
{
overflow: hidden;
text-overflow : ellipsis;
font-weight: bold\0/IE8+9;

<% if (CrmStyles.IsRightToLeft) { %>
text-align: right;
padding-right: 6px;
<% } else { %>
text-align: left;
padding-left: 6px;
<% } %>


}

TD.noteCreatedField
{
overflow: hidden;
text-overflow : ellipsis;
}

TD.noteEditedField
{
overflow: hidden;
text-overflow : ellipsis;
}

.notesContainerScrollDiv td
{
border-color: #FFFFFF;
border-style: solid;
border-width: 0px;
}

td.textAreaCell
{
margin: 0px;
padding: 1px 6px 5px 6px;
border-width: 0px 1px 0px 1px;
}

tr.noteHeaderSelected td
{
border-color: #B1D6F0;
}

td.attachCell
{
margin: 0px;
<% if (CrmStyles.IsRightToLeft) { %>
padding: 0px 5px 0px 6px;
<% } else { %>
padding: 0px 6px 0px 5px;
<% } %>
border-width: 0px 1px 0px 1px;
}

td.modifiedByOnCell
{
margin: 0px;
<% if (CrmStyles.IsRightToLeft) { %>
padding: 0px 6px 1px 0px;
border-width: 0px 1px 1px 0px;
<% } else { %>
padding: 0px 0px 1px 6px;
border-width: 0px 0px 1px 1px;
<% } %>
}

td.modifyLinkCell
{
margin: 0px;
padding: 0px 0px 1px 0px;
<% if (CrmStyles.IsRightToLeft) { %>
border-width: 0px 0px 1px 1px;
<% } else { %>
border-width: 0px 1px 1px 0px;
<% } %>
}

tr.noteHeaderEditing td
{
border-color: #0072C6;
}

tr.noteHeaderEditing td.modifiedByOnCell,
tr.noteHeaderEditing td.modifyLinkCell
{
background-color: #F8F8F8;
}

a.newNoteButton,
a.newNoteButton:link,
a.newNoteButton:visited,
a.newNoteButton:hover,
newNoteButton
{
text-decoration: underline;
cursor: pointer;
}

a.newNoteButton:active,
a.newNoteButtonSelected
{
background-color: #a7cdf0;
text-decoration: underline;
cursor: pointer;
}

a.moreNotesButton,
a.moreNotesButton:link,
a.moreNotesButton:visited,
a.moreNotesButton:hover
{
color: #0000ff;
text-decoration: underline;
cursor: pointer;
<% if (CrmStyles.IsRightToLeft) { %>
text-align: right ;
<% } else { %>
text-align: left ;
<% } %>
}

moresNotesButtonSelected,
a.moreNotesButton:active
{
background-color: #a7cdf0;
color: #0000ff;
text-decoration: underline;
cursor: pointer;
<% if (CrmStyles.IsRightToLeft) { %>
text-align: right ;
<% } else { %>
text-align: left ;
<% } %>}

.notesContainerDiv
{
-webkit-transform: translateZ(0);
}

.notesContainerScrollDiv
{
zoom:1;
height:100%;
overflow-y: hidden;
margin-top: 0px;

<% if (CrmStyles.IsRightToLeft) { %>
padding-left: 4px;
<% } else { %>
padding-right: 4px;
<% } %>
}

.notesContainerScrollDiv:hover
{
overflow: auto;
}

.notesTextBoxDiv,
.notesTextBoxDivActive
{
border: 1px;
border-style: solid;
border-color: #D6D6D6;
margin-top: 11px;
margin-bottom: 9px;
height: 18px;
}

.notesTextBoxDivActive
{
border-color: #0072C6;
height: auto;
}

.notesTextBoxActionsDiv
{
height: 28px;
background-color: #F8F8F8;
padding: 4px 10px 0px 10px;
}

.noteDoneButton,
.noteAttachButton
{
background-color: #F8F8F8;
background-image: none;
border-color: #D4D4D4;
border-width: 1px;
text-color: #666666;
margin-top: 2px;
height: 20px;
min-width: 60px;
width: auto;
}

.noteDoneButton
{
<% if (CrmStyles.IsRightToLeft) { %>
float: left;
<% } else { %>
float: right;
<% } %>
}

.noteAttachButton
{
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
<% } else { %>
float: left;
<% } %>
}

.noteDoneButton:hover,
.noteDoneButton:focus,
.noteAttachButton:hover,
.noteAttachButton:focus
{
text-color: #000000;
}

.notch
{
position: absolute;
top: 1px;
margin: 2px;
border-left: 8px solid transparent;
border-right: 8px solid transparent;
border-bottom: 8px solid #D6D6D6;
border-top: 0px solid white;
padding: 0;
width: 0;
height: 0;
font-size: 0;
line-height: 0;
_border-right-color: pink;
_border-left-color: pink;
_filter: chroma(color=pink);
}

.notesTextBoxDivActive .notch
{
border-bottom-color: #0072C6;
}

.border-notch
{
border-bottom-color: white !important;
top: 2px;
}


