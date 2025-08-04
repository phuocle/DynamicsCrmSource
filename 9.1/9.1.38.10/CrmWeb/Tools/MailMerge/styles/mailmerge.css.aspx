<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles"  %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
div.ms-crm-MenuBar
{
padding-right: 0px !important;
}
div.ms-crm-FormBodyContainer
{
position: static;
}
td.ms-crm-Form-LargeIcon-default img
{
position: static;
}
body
{
overflow: auto;
}
.ms-crm-Form-Layout > col
{
width: 100%;
}

.ms-crm-Form-Layout tr.ms-crm-Form-MenuBarRow
{
height: 98px;
}

.ms-crm-Form-Layout tr.ms-crm-Form-ContentRow
{
height: 80%;
}

.ms-crm-Form-Layout tr.ms-crm-From-SelectDataFieldsRow > td
{
vertical-align: top;
}

.ms-crm-Form-Layout tr.ms-crm-From-SelectDataFieldsRow table.ms-crm-SelectDataFieldsTable
{
width: 100%;
}
col.select_fields_col_1
{
width: 30%;
}

table.ms-crm-ZeroedCellSpacing
{
border-spacing: 0px;
border-collapse:collapse;
}
table.ms-crm-ZeroedCellPadding > tbody > tr > td
{
padding:0px;
}

div.ms-crm-MailMerge
{
height: 100%;
position: relative;
}
div.ms-crm-MailMerge div.ms-crm-QuickFindRow
{
padding: 7px 0 7px 0;
height: 20px;
}
div.ms-crm-MailMerge div.ms-crm-QuickFindRow table.ms-crm-QuickFindTable
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
div.ms-crm-MailMerge div.ms-crm-GridMenuBarRow
{
height: 20px;
}
div.ms-crm-MailMerge div.ms-crm-GridRow
{
height: 100%;
}

select:disabled
{
color:#AFAFAF;
}