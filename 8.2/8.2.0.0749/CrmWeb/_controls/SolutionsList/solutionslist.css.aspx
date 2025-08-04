<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

.solutionsTab
{
margin-top: 5px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    float:right;
    margin-right: 20px;
<% }
   else
   { %>
    float:left;
    margin-left: 20px;
<% } %>
display: inline;
height: 21px;
font-size : 12px;
font-family : Segoe UI;
font-weight : <%= WebUtility.GetFontResourceForStyle("General.Normal.font_weight") %>;
z-index:9999;
position:relative;
}

.selectedTab
{
background-color: #ffffff;
border:solid #C0C0C0;
border-width:1px 1px 1px 1px;
border-bottom-color: #FFFFFF;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight") %>;
}

.listingType
{
padding-left: 20px;
padding-right: 20px;
padding-top: 2px;
height: 21px;
color: red;
}

.moreLink
{
padding-left: 30px;
padding-right: 30px;
}

.tabContainer
{
background-color: #eff2f6;
height: 26px;
vertical-align: middle;
}

.crmAppSolutionsList
{
overflow:auto;
}

.border
{
border:1px solid #b6babf;
}

.marketplaceTitle
{
line-height: 27px;
vertical-align: middle;
height: 31px;
padding-left:10px;
}

.columnSpacing
{
padding-left: 12px;
display: inline-block;
}

A.listingText:link,
A.listingText:active,
A.listingText:visited,
A.listingText:hover
{
font-size : 12px;
font-family : Segoe UI;
color: #F7941D !important;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight") %>;
}

.imagecontainer
{
border:1px solid #b6babf;
width: 100px;
height: 100px;
display: inline-block;
}

.partnerlogo
{
max-height: 100px;
max-width: 250px;

height: expression(this.height > 100 ? 100: auto);
width: expression(this.width > 250 ? 250: auto);
}

.horizontalSpacer
{
padding-top:12px;
}

.firstcolumn
{
vertical-align: top;
height: 40px;
width: 60px
}

.secondcolumn
{
vertical-align: top;
}

.thirdcolumn
{
width: 100px;
vertical-align: top;
text-align: center;
}

.solutionName
{
font-size : 13px;
font-family : Segoe UI;
font-weight : <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight") %>;
color: #1261E1;
}

.partnerName
{
font-size : 12px;
font-family : Segoe UI;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight") %>;
color: #3B3B3B;
}

a:active,
a:visited,
a:hover,
a:visited,
a
{
color: #1261E1;
}

.dottedline
{
height: 10px;
width: 72px;
}

.numbersrating
{
font-size : 24px;
font-family : Segoe UI;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Normal.font_weight") %>;
color: #C0C0C0;
}

.dottedlinehr
{
color: #ffffff;
background-color: #ffffff;
border: 1px dotted #C0C0C0;
border-style: none none dotted;
}

.reviews
{
font-size : 11px;
font-family : Segoe UI;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Normal.font_weight") %>;
color: #1261E1;
}

.relatedProducts
{
position:absolute;
top:100px;
}

.publisherLabels
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    float: right;
<% }
   else
   { %>
    float: left;
<% } %>
position: absolute;
padding-top: 15px;
}

.publisherImages
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    float: left;
<% }
   else
   { %>
    float: right;
<% } %>
position: relative;
}

.tabbottomborder
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    float: right;
<% }
   else
   { %>
    float: left;
<% } %>
position: absolute;
left: 0px;
top:58px;
z-index: 1;
width: 100%;
font-size: 0px;
}

.framebackground
{
background-color: #f6f8fa;
}

.warningDiv
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right:10px;
<% }
   else
   { %>
    margin-left:10px;
<% } %>
}

.warningImage
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    float:right;
<% }
   else
   { %>
    float:left;
<% } %>

}

.warningText
{
line-height:25px;
}