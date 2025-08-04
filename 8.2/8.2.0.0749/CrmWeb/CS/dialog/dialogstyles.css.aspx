<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

TR.Suggestion
{
background-color: #ffffae;
padding: 2px;
overflow: auto;
}

TR.Prompt
{
padding: 2px;
overflow: auto;
}

TR.Response
{
padding: 2px;
overflow: auto;
}

span.SuggestionText
{
padding: 2px;
overflow: auto;
}

span.PromptText
{
padding-right: 2px;
padding-bottom: 2px;
padding-top: 2px;
padding-left: 0px;
overflow: auto;
font-size: 12px;
width: 100%;
}

span.ResponseText
{
padding-right: 2px;
padding-bottom: 2px;
padding-top: 2px;
padding-left: 0px;
overflow: auto;
font-size: 12px;
}

span.TypeLabel
{
padding: 2px;
overflow: auto;
text-align: center;
font-size: 12px;
}

td.LeftBar
{
border-left: gray 4px solid;
padding-left: 5px;
}

td.BottomBar
{
border-bottom: gray 1px solid;
padding-left: 5px;
}

td.ScriptCell
{
padding-left: 5px;
}

td.Header
{
BORDER-RIGHT: #c2dcf8 1px solid;
BORDER-TOP: #c2dcf8 1px solid;
BORDER-LEFT: #c2dcf8 1px solid;
HEIGHT: 35px;
}

td.Content
{
BORDER-RIGHT: #c2dcf8 1px solid;
BORDER-BOTTOM: #c2dcf8 1px solid;
BORDER-LEFT: #c2dcf8 1px solid;
HEIGHT: 30%;
VERTICAL-ALIGN: top;
}

td.SuggestionHeader
{
BORDER-RIGHT: #FFB74C 1px solid;
BORDER-TOP: #FFB74C 1px solid;
BORDER-LEFT: #FFB74C 1px solid;
background-color: #FFFBB3;
padding-left: 5px;
HEIGHT: 35px;
}

td.SuggestionContent
{
BORDER-RIGHT: #FFB74C 1px solid;
BORDER-BOTTOM: #FFB74C 1px solid;
BORDER-LEFT: #FFB74C 1px solid;
background-color: #FFFBB3;
padding-left: 5px;
HEIGHT: 10%;
VERTICAL-ALIGN: top;
}



input.none {
border-color: white;
}

h3.TypeLabel
{
font-size : <% = WebUtility.GetFontResourceForStyle("General.13px.font_size") %>;
color : #333333;
margin-top : 5px;
}

span.TypeLabel
{
font-size : <% = WebUtility.GetFontResourceForStyle("General.10px.font_size") %>;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight") %>;
color : #333333;
margin-top : 5px;
}

a.ScriptLink,
a.ScriptLink:link,
a.ScriptLink:visited,
a.ScriptLink:active
{
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Normal.font_weight") %>;
text-decoration: underline;
color: #0000ff;
}

a.ScriptLink:hover
{
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Normal.font_weight") %>;
text-decoration: none;
}

table.UIScriptTable
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    text-align: right;
<% }
   else
   { %>
    text-align: left;
<% } %>
vertical-align:top;
border-collapse:collapse;
table-layout: fixed;
width:100%;
}

table.RowTable
{
border-collapse:collapse;
height:100%;
width:100%;
table-layout:fixed;
}

table.CueTable
{
border-collapse:collapse;
height:100%;
table-layout:fixed;
width:97%;
}

td.PromptResponse
{
VERTICAL-ALIGN: top;
width: 80%;
padding-top:8px;
padding-left:8px;
padding-bottom:8px;
padding-right:8px;
background-color: #e9edf1;
border:0px solid;
}

td.Cue
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    BORDER-RIGHT: 0px;
    BORDER-LEFT: #c2dcf8 1px solid;
<% }
   else
   { %>
    BORDER-LEFT: 0px;
    BORDER-RIGHT: #c2dcf8 1px solid;
<% } %>
BORDER-TOP: #c2dcf8 1px solid;
BORDER-BOTTOM: #c2dcf8 1px solid;
VERTICAL-ALIGN: top;
}

td.Tip
{
BORDER-LEFT: 0px;
BORDER-TOP: 0px;
BORDER-RIGHT: 0px;
BORDER-BOTTOM: #c2dcf8 1px solid;
VERTICAL-ALIGN: top;
height: 10%;
width: 100%;
}

td.CueText
{
BORDER-LEFT: 0px;
BORDER-TOP: 0px;
BORDER-RIGHT: 0px;
BORDER-BOTTOM: 0px;
VERTICAL-ALIGN: top;
}

label.PromptText
{
font-weight: bold;
font-family: Segoe UI, Regular;
font-size:11px;
word-wrap: break-word;
vertical-align: top;
white-space: pre-wrap;
}

label.CueTip
{
font-weight: bold;
font-family: Segoe UI, Regular;
margin-left: 0px;
word-wrap: break-word;
white-space: normal;
}

label.CueText
{
margin-left: 0px;
font-family: Segoe UI, Regular;
color: #3b3b3b;
word-wrap: break-word;
white-space: pre-wrap;
}

div.RadioButton
{
font-family: Segoe UI, Regular;
font-size:11px;
word-wrap: break-word;
width:100%;
}

DIV.Response
{
margin-left: 10px;
}

td.UIScript-Wizard-Form-Footer
{
background-color: #e9edf1;
border-top: 1px solid #ffffff;
height: 20% auto;
<% if (CrmStyles.IsRightToLeft)
   { %>
    text-align: right;
<% }
   else
   { %>
    text-align: left;
<% } %>
min-height: 120px;
}

div.UIScript-Wizard-Form-Footer
{
position:absolute;
bottom:0px;
background-color: #e9edf1;
border-top: 1px solid #ffffff;
height: 80px;
width:100%;
<% if (CrmStyles.IsRightToLeft)
   { %>
    text-align: right;
<% }
   else
   { %>
    text-align: left;
<% } %>
}

td.CommentsTableHeight
{
height:68px;
width:100%;
}

td.Comments-Header
{
background-color: #ffffff;
BORDER-RIGHT: #93a0a0 1px solid;
BORDER-BOTTOM: #93a0a0 1px solid;
BORDER-TOP: #93a0a0 1px solid;
BORDER-LEFT: #93a0a0 1px solid;
padding-left: 0px;
vertical-align: bottom;
<% if (CrmStyles.IsRightToLeft)
   { %>
    text-align: right;
<% }
   else
   { %>
    text-align: left;
<% } %>
}

td.Comments-Footer
{
BORDER-RIGHT: #93a0a0 1px solid;
BORDER-BOTTOM: #93a0a0 1px solid;
BORDER-LEFT: #93a0a0 1px solid;
VERTICAL-ALIGN: top;
padding-left: 0px;
height:90%;
}

TEXTAREA.Comments-Textarea
{
border-top-width: #dbdbdb 1px solid;
border-bottom-width: #dbdbdb 1px solid;
width:99.6%;
height:68px;
padding:0px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    text-align: right ;
<% } %>
}

div.LeftFooterButtons
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    text-align:right;
    margin-right:10px;
<% }
   else
   { %>
    text-align:left;
    float: left;
    margin-left:10px;
<% } %>
}

div.RightFooterButtons
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    text-align:left;
    float: left;
    margin-left:10px;
<% }
   else
   { %>
    text-align:right;
    margin-right:10px;
<% } %>
}

td.FinishText
{
vertical-align:top;
<% if (CrmStyles.IsRightToLeft)
   { %>
    text-align:right;
<% }
   else
   { %>
    text-align:left;
<% } %>
}

td.Response
{
padding-top:10px;
}

TEXTAREA.ms-crm-Number
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    text-align: right ;
<% } %>
}

TEXTAREA.ms-crm-Textarea
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    text-align: right ;
<% } %>
}

td.highlight-Table-Col
{
VERTICAL-ALIGN: top;
width: 80%;
padding-top:8px;
padding-left:8px;
padding-bottom:8px;
padding-right:8px;
background-color: #a7cdf0;
border: #CC9933 0px solid;
}

div.HiddenHint
{
display:none;
word-wrap: break-word;
}

TD.ms-crm-DialogWizardForm-Header
{
height: 65px;
}

DIV.ms-crm-DialogWizardForm-Header
{
position: absolute;
top:0px;
height: 64px;
width:100%;
border-bottom: #a0a0a0 1px solid;
}
TABLE.ms-crm-DialogWizardForm-Header
{
height: 100%;
padding-left: 14px;
padding-right: 14px;
padding-top: 14px;
table-layout: fixed;
width: 100%;
}

TD.ms-crm-DialogWizardForm-Header-Title
{
color: #000000;
vertical-align: top;
width: 100%;
padding-top: 5px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right: 5px;
<% }
   else
   { %>
    padding-left: 5px;
<% } %>
}

SPAN.ms-crm-DialogWizardForm-Header-Title
{
color: #000000;
}

SPAN.ms-crm-DialogWizardForm-Header-PageTitle
{
color: #000000;
font-weight:normal;
}

BUTTON.ms-crm-DialogWizardForm-HelpButton
{
height: 22px;
overflow: visible;
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right: 0px;
<% }
   else
   { %>
    margin-left: 0px;
<% } %>
width: 84px;
}

label.Comments-Hint
{
position: absolute;
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right:4px;
<% }
   else
   { %>
    padding-left:4px;
<% } %>
padding-top:4px;
color: #3b3b3b;
}

TD.TipPadding
{
padding-bottom:14px;
}

DIV.ms-crm-StrictDialog-Header-Desc,
DIV.ms-crm-Dialog-Header-Desc
{
padding-top: 4px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right: 5px;
<% }
   else
   { %>
    padding-left: 5px;
<% } %>
}
IMG.ms-crm-Dlg-prNotific
{
display: none;
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-left: 3px;
<% }
   else
   { %>
    margin-right: 3px;
<% } %>
}

DIV.collapseHint
{
position:absolute;
display:block;
top:3px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    left:15px;
<% }
   else
   { %>
    right:15px;
<% } %>
}

DIV.boundary
{
top:0px;
width:1px;
border-left:1px solid #a5acb5;
height:100%;
position:absolute;
}

DIV.sideStrip
{
position:absolute;
display:block;
}

TD.ms-crm-ScriptFrame
{
padding-right: 15px;
padding-left: 15px;
}


TD.TextBoxHyperlink
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right:14px;
    padding-left:21px;
<% }
   else
   { %>
    padding-left:14px;
    padding-right:21px;
<% } %>
}

TD.FormAssistant
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-left:14px;
<% }
   else
   { %>
    padding-right:14px;
<% } %>
}

#rowDesign .prDesigner
{
position:absolute;
top:0px;
bottom:0px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    right:0px;
    margin-left:208px;
<% }
   else
   { %>
    margin-right:208px;
    left:0px;
<% } %>
}
#rowDesign .FormAssistant
{
position:absolute;
width:208px;
top:0px;
bottom:0px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    left:0px;
<% }
   else
   { %>
    right:0px;
<% } %>
}