<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>

table.ms-crm-KBViewerMainTable
{
width: 100%;
height: 360px;
}

tr.ms-crm-KBViewerMainTableHeader
{
vertical-align: top;
}

tr.ms-crm-KBViewerMainTableFooter
{
height: auto;
}

iframe.ms-crm-KBViewerFrame
{
width: 100%;
height: 100%;
border: 1px solid #6699cc;
}

#crmQueues
{
width: 170px;
}

#frmSearchInt
{
margin: 0px;
}

table.ms-crm-KBAppArticleFindTable
{
width: 97.5%;
height: 100%;
border-collapse: collapse;
padding: 1px;
}

table.ms-crm-KBAppArticleFindSubjectDiv
{
display: none;
padding-top: 0px;
}

table.ms-crm-KBAppArticleFindArticleQueueDiv
{
padding-top: 0px
}

/***
tr has been converted to DIV
top:30px is based on .ms-crm-KBAppArticleFindPickList height
left, bottom, right values are based on div.KBSearch_div_ArticleFind (global.css.aspx)
***/
.ms-crm-KBAppArticleFindBigDiv
{
vertical-align: top;
position:absolute;
top:30px;
bottom:8px;
left:8px;
right:8px;
overflow:auto;
}

.ms-crm-KBAppArticleFindCellBtn
{
vertical-align: top;
height: 100%;
}

.ms-crm-KBAppArticleFindPickList
{
vertical-align: top;
height: 25px;
padding:5px;
}

td.ms-crm-KBAppArticleFindInputCell
{
padding-top: 5px;
}

div.ms-crm-KBAppArticleFindDiv
{
padding-top: 2px;
}

.ms-crm-KBAppArticleFindCell
{
vertical-align: top;
margin-top: 0px;
padding-top: 0px;
}

td.ms-crm-KBAppArticleViewerCell
{
vertical-align: top;
height: 85%;
}

div.ms-crm-KBAppArticleViewerDiv
{
width: 100%;
height: 100%
}