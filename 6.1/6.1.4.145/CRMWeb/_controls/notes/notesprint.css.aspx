<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
TABLE
{
table-layout:fixed;
}

TEXTAREA.ms-crm-Note-Text
{
font-size: <%= WebUtility.GetFontResourceForStyle("notesprint.css.aspx.preview.font_size")%>;
overflow: hidden;
width: 100%;
border: none;
margin: 0;
cursor: pointer;
resize: none;
height : 15px;
}

TD.noteSubjectField
{
overflow: hidden;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight")%>;
text-overflow : ellipsis;
}

TD.noteCreatedField
{
overflow: hidden;
text-overflow : ellipsis;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight")%>;
color: #999999;
}

TD.noteEditedField
{
overflow: hidden;
text-overflow : ellipsis;
color: #111111;
}

DIV.ms-crm-Note-Text
{
font-size: <%= WebUtility.GetFontResourceForStyle("notesprint.css.aspx.preview.font_size")%>;
font-weight: normal;
overflow: hidden;
width: 100%;
border: none;
margin: 0;
cursor: pointer;
resize: none;
}