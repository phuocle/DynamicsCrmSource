<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

TABLE.ms-crm-GroupBlank
{
background-color: #ffffff;
width: 100%;
background-repeat: repeat-x;
padding-top: 20px;
}

SPAN.ms-crm-label
{
color: #3B3B3B;
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
}

SPAN.ms-crm-name
{
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight") %>;
color: #000000;
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
}

SPAN.ms-crm-header
{
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight") %>;
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
}

h2.ms-crm-header
{
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight") %>;
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
color: #000000;
}

h2.ms-crm-subheader
{
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight") %>;
color: #3B3B3B;
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
}

SPAN.ms-crm-Group
{
padding: 4px 8px 8px 8px;
}

TH.ms-crm-bold,
TD.ms-crm-bold
{
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight") %>;
}


TD.ms-crm-column,
TH.ms-crm-column
{
width: 150px;
padding: 0px 8px 8px 8px;
}

TD.ms-crm-twocolumn
{
width: 300px;
padding: 0px 8px 8px 8px;
}

TD.ms-crm-threecolumn
{
width: 665px;
padding: 0px 8px 0px 0px;
}

TD.storage-text
{
width: 346px;
padding-bottom: 8px;
}

TD.ms-crm-paddedcolumn
{
padding-left:15px;
padding-right:15px;
}

DIV.ms-crm-indentedgroup
{
padding-left: 25px;
}

TD.ms-crm-toppad
{
padding-top: 8px;
}

SPAN.ms-crm-indentedtext
{
padding-left: 35px;
font-style: <%= WebUtility.GetFontResourceForStyle("General.Italic.font_style") %>;
}

TABLE.ms-crm-StorageBarRow
{

}

TABLE.ms-crm-ResourceUsage TH.ms-crm-OrgName
{
width: 180px;
}

TABLE.ms-crm-ResourceUsage TH.ms-crm-OrgUrl
{
width: 220px;
}

DIV.ms-crm-storagearea
{
padding-left: 16px;
}

DIV.ms-crm-shadedbox
{
border: #A5ACB5 1px solid;
background:#F8F9FB;
margin: 0 auto;
padding:15px;
}

DIV.ms-crm-gradientbox
{
border: #c6cbd2 1px solid;
padding-top:7px;
padding-bottom:7px;
padding-left:5px;
padding-right:5px;
background-color: #FFFFC8;
}

TD.ms-crm-Footer
{
border-top: 1px solid #ffffff;
height: 25px;
vertical-align: middle
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right: 8px;
    padding-left: 15px;
    text-align: left;
<% }
   else
   { %>
    padding-left: 15px;
    padding-right: 8px;
    text-align: right;
<% } %>
}

BUTTON.ms-crm-FooterButton
{
height: 22px;
overflow: visible;
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right: 8px;
<% }
   else
   { %>
    margin-left: 8px;
<% } %>
width: auto;
}

.ms-crm-addonpage
{
padding: 8px;
}

.SmallInputBox
{
width: 60px;
text-align: center;
}

TABLE.ms-crm-addon-page-footer
{
border: 0px;
width: 100%;
}

TR.ms-crm-addon-page-footer
{
}

TR.ms-crm-addoncomplete-page-table-header
{
height: 35px;
vertical-align: middle;
}
TR.ms-crm-addon-page-current-charges-table-sub-header
{
background-color: #F8F9FB;
height: 25px;
}
TR.ms-crm-addoncomplete-page-table-sub-header
{
height: 25px;
}
TR.ms-crm-addon-page-current-charges-table-data-row
{
background-color: #F8F9FB;
height: 40px;
vertical-align:middle;
}

.ms-crm-gray-text-description
{
color:#585858;
}

TD.ms-crm-addon-page-footer
{
padding: 0px 8px 8px 8px;
}
.ms-crm-bold-text
{
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight") %>;
}
.ms-crm-red-text-description
{
color:#FF0000;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight") %>;
}
TD.ms-crm-addon-processing
{
cursor: wait;
text-align: center;
vertical-align: middle;
}
TABLE.ms-crm-UserInputTable
{
border: 1px solid #A5ACB5;
background-color: #ffffff;
width: 100%;
background-image: url(/_imgs/nav_header_back.gif);
background-repeat: repeat-x;
border-collapse: collapse;
padding: 0;

}
TR.ms-crm-ms-crm-addon-page-table-header
{
background-color: #A7CDF1;
height: 30px;
vertical-align: middle;
}
TR.ms-crm-addon-page-table-sub-header
{
background-color: #F8F9FB;
height: 25px;
}
TD.ms-crm-LicenseToAddHeader
{
padding-left: 5px;
border-bottom-color:#84ADD6;
border-bottom:1px solid;
background-color: #A7CDF1;
height: 30px;
vertical-align: middle;
}
TH.ms-crm-LicenseToAddSubHeaderUnitPrice
{
padding-left: 15px;
width: 70px;
text-align: center;
}
div.ms-crm-ColumnSeparator
{
height: 15px;
width: 1px;
background-color: #84ADD6;
}
TH.ms-crm-LicenseToAddSubHeaderDescription
{
padding-left: 15px;
}
TH.ms-crm-LicenseToAddSubHeaderQuantity
{
width: 100px;
text-align: center;
}
TH.ms-crm-LicenseToAddSubHeaderPrice
{
width: 75px;
padding-right: 15px;
text-align: right;
}
TR.ms-crm-addon-page-table-data-row
{
background-color: #FFFFFF;
height: 40px;
vertical-align:middle;
}
TR.ms-crm-addon-page-table-data-row-grey
{
background-color: #F8F9FB;
height: 40px;
vertical-align:middle;
}
.ms-crm-left-padding
{
padding-left: 15px;
}
.ms-crm-gray-text-left-description
{
color:#585858;
}
.ms-crm-left-padding-secondline
{
padding-left: 20px;
}
TD.ms-crm-align-center
{
text-align: center;
}
TD.ms-crm-LicensesToAddPrice
{
text-align: right;
padding-right: 15px;
}
TD.ms-crm-align-right
{
text-align: right;
}
TD.ms-crm-align-left
{
text-align: left;
}
TD.ms-crm-UpdatedTotalMonthlyChargesNonBoldPrice
{
width: 75px;
padding-right: 15px;
text-align: right;
}

TD.ms-crm-UpdatedTotalMonthlyChargesPrice
{
width: 75px;
padding-right: 15px;
text-align: right;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight") %>;
}
TABLE.ms-crm-CurrentChargesTable
{
border: 1px solid #A5ACB5;
background-color: #ffffff;
width: 100%;
background-image: url(/_imgs/nav_header_back.gif);
background-repeat: repeat-x;
border-collapse: collapse;
padding: 0;
}
TD.ms-crm-CurrentChargesHeader
{
padding-left: 5px;
border-bottom-color:#D3D3D3;
border-bottom:1px solid;
background-color: #EAEAEA;
height: 30px;
vertical-align: middle;
}
TR.ms-crm-CurrentCharges-sub-header
{
background-color: #F8F9FB;
border-bottom-color:#D3D3D3;
}
TR.ms-crm-CurrentCharges-data-row
{
background-color: #F8F9FB;
height: 40px;
vertical-align:middle;
}
TD.ms-crm-CurrentMonthlyChargesTotal
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    text-align: left;
<% }
   else
   { %>
    text-align: right;
<% } %>
padding-right: 15px;
}
div.ms-crm-subscription-control
{
<% if (Request.Browser.Browser != "IE")
   { %>
    width:99%;
    <% if (CrmStyles.IsRightToLeft)
       { %>
        padding-left:0px;
    <% }
       else
       { %>
        padding-right:0px;
    <% } %>

<% }
   else
   { %>
    width:100%;
<% } %>
height:99%;
position:absolute;
padding-top:0px;
padding-bottom:0px;

}
div.ms-crm-ColumnSeparator-gray
{
height: 15px;
width: 1px;
background-color: #D3D3D3;
}
TD.ms-crm-LicensesToAddUnitPrice
{
padding-right: 15px;
padding-top: 8px;
text-align: right;
vertical-align: top;
}
TD.ms-crm-CurrentChargesUnitPrice
{
padding-right: 15px;
padding-top: 8px;
text-align: right;
vertical-align: top;
border-bottom-color:#D3D3D3;
border-bottom:1px solid;
border-top-color:#D3D3D3;
border-top:1px solid;
}
TD.ms-crm-CurrentChargesDescription
{
border-bottom-color:#D3D3D3;
border-bottom:1px solid;
border-top-color:#D3D3D3;
border-top:1px solid;
}
TD.ms-crm-CurrentChargesQuantity
{
text-align: center;
border-bottom-color:#D3D3D3;
border-bottom:1px solid;
border-top-color:#D3D3D3;
border-top:1px solid;
}
TD.ms-crm-CurrentChargesPrice
{
text-align: right;
padding-right: 15px;
border-bottom-color:#D3D3D3;
border-bottom:1px solid;
border-top-color:#D3D3D3;
border-top:1px solid;
}
DIV.ms-crm-header-spacer
{
height: 50px;
}
TABLE.ms-crm-updated-billing-summary
{
border: 0;
width: 100%;
border-collapse: collapse;
padding: 0;
}
TD.ms-crm-SummaryUnitPrice
{
padding-right: 15px;
padding-top: 8px;
text-align: right;
vertical-align: top;
}
TR.ms-crm-summary-data-row
{
height: 40px;
}
TD.ms-crm-summary-quantity
{
padding-right: 15px;
text-align: right;
}
TR.ms-crm-summary-sub-header
{
height: 15px;
}
TD.ms-crm-summary-FooterTaxInfo
{
padding-left: 5px;
text-align: left;
}
.ms-crm-space-between-number-and-text
{
padding-left: 3px;
}
TD.ms-crm-errorrow-FooterTaxInfo
{
vertical-align: top;
width: 280px;
text-align: left;
}
DIV.ms-crm-orgstatus-left-padding
{
padding-left: 40px;

}
DIV.ms-crm-orgstatus-warning
{
border: 1px solid #E0E0E0;
background-color:#FFFFC8;
padding:5px;
padding-left:10px;
overflow:auto;

}

LABEL.ms-crm-strikethrough
{
text-decoration: line-through;
}

SPAN.ms-crm-UpgradeDate
{
padding-left: 5px;
padding-right: 5px;
}

SPAN.ms-crm-UpdateScheduledHeader
{
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight") %>;
font-size: <%= WebUtility.GetFontResourceForStyle("General.20px.font_size") %>;
}

#overlay {
display:none;
position: absolute;
left: 0px;
top: 0px;
width:100%;
height:100%;
text-align:center;
z-index: 1000;
}
#overlay .area
{
width:100%;
height:100%;
z-index:100;
background:transparent url("/_imgs/bitoneimg.png") repeat;
}
#overlay iframe {
background-color: #fff;
text-align:center;
}

.transwizclass
{
margin-top:20px;
}
.transwizclass a img
{
border:0px;
border-style:none;
}
.transwizclass img
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    float:right;
    margin:0 0 3px 10px;
<% }
   else
   { %>
    float:left;
    margin:0 10px 3px 0;
<% } %>
}
.transwizclass div div
{
margin:.2em 0 0 0;
}