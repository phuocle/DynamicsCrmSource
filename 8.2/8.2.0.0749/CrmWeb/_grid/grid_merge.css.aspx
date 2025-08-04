<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>

TR.mergesection
{
background-color: ButtonFace;
height: 23px;
}

TD.mergesection
{
border-bottom: 1px solid Scrollbar;
text-indent: 5px;
}

TD.mergecell
{
border-bottom: 1px solid ThreeDLightShadow;
cursor: pointer;
}

TD.selected
{
border-bottom: 1px solid ThreeDLightShadow;
}
TD.fieldname
{
border-bottom: 1px solid ThreeDLightShadow;
text-indent: 5px;
}

DIV.merge
{
overflow-y: auto;
width: 100%;
height: 100%;
font-family: MenuText;
background-color: Window;
}

DIV.savingMsg
{
width: 350px;
height: 150px;
filter: progid:DXImageTransform.Microsoft.Shadow(Direction=135, Color='#666666', Strength=4);
background-color: #ffffee;
border: 2px solid #000000;
position: absolute;
top: 160px;
}

table.dlg_merge_MainTable
{
table-layout: fixed;
background-color: Menu;
border: 1px solid ThreeDShadow;
}

table.dlg_merge_HeaderTable
{
border-bottom: 1px solid ThreeDShadow;
}

td.dlg_merge_Main_td
{
background-color: Window;
font-family: MenuText;
}