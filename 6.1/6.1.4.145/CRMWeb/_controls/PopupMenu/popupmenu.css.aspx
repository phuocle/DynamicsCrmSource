<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>



TABLE.popupMenu
{
background-color: #ffffff;
border-style: groove;
border-width: 2px;
table-layout: auto;
width:	100%;
<%if (CrmStyles.IsRightToLeft) { %>
direction:rtl;
<%} %>
}

TR.popupMnuRow
{
height: 24px;
}


DIV.popupMnuItem,
DIV.popupMnuItemSel,
DIV.popupMnuDisabledItem,
DIV.popupNotificationItem,
DIV.popupNotificationItemSel,
DIV.popupMoreLinkItem,
DIV.popupMoreLinkItemSel
{
vertical-align: top;
<% if (CrmStyles.IsRightToLeft) { %>
text-align: right;
<% } else { %>
text-align: left;
<% } %>
}


DIV.popupMnuItem,
DIV.popupMnuDisabledItem,
DIV.popupMnuDisabledItemSel
{
padding: 2px 4px 1px 4px;
}
DIV.popupNotificationItem,
DIV.popupNotificationItemSel,
DIV.popupMoreLinkItem,
DIV.popupMoreLinkItemSel
{
padding: 3px 4px 2px 4px;
}


DIV.popupMnuItem
{
color: Black;
}

DIV.popupMnuItemSel
{
padding: 1px 3px 0px 3px;
border: 1px solid #ffb74c;
background-color: #ffe6a0;
color: Black;
}


DIV.popupMnuDisabledItem
{
color: Gray;
}

DIV.popupMnuDisabledItemSel
{
background-color: #A8B1C2;
color: White;
}

DIV.popupMoreLinkItem
{
margin-top: 1px;
text-align: center;
background-color: #c4ddff;
color: #15428b;
}
DIV.popupMoreLinkItemSel
{
margin-top: 1px;
text-align: center;
background-color: #c4ddff;
color: #0000ff;
text-decoration:    underline;
}
DIV.popupNotificationItem,
DIV.popupNotificationItemSel
{
margin-bottom: 1px;
background-color: #ffffae;
border-bottom: 1px solid #c5c5c5;
color: Black;
}


TD.seperator
{
background-color: Gray;
}



SPAN.popupMenuIcon,
IMG.popupMenuIcon
{
height: 16px;
width: 16px;
}
SPAN.popupMenuIconSpace
{
padding: 2px;
}
SPAN.popupText
{
padding-bottom: 2px;
height: 16px;
}

DIV.popupMnuItem
{
cursor: default;
}
