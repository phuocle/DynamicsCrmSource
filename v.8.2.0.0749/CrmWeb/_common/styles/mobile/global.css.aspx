<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>

<% System.Web.HttpContext.Current.Response.ContentType = "text/css"; %>

body, td, body.main
{
color: #000000;
background-color: #FFFFFF;
overflow: hidden !important;
}

body, button, select, textarea, div, td, input, h2, span,
.ms-crm-DateTime-Container input.ms-crm-Input.ms-crm-DateTime-Container-Input,
td.ms-crm-Select-Input-Container input.ms-crm-SelectBox
{
font-family: "Segoe UI Semilight", Arial, Sans-Serif;
font-size: 14px;
font-weight: normal;
margin: 0px;
padding: 0px;
direction: <% = CrmStyles.BodyDirection %>;
<% if (CrmStyles.IsRightToLeft)
   { %>
    dir: rtl;
<% } %>
<% if (CrmStyles.IsRightToLeft)
   { %>
    text-align: right;
<% }
   else
   { %>
    text-align: left;
<% } %>
}

a
{
text-decoration: none;
color: #1160B7;
}

select
{
width: 100%;
margin: 0px;
}

button
{
text-align: center;
}

form.mobileform
{
margin : 0px;
}

div.error
{
margin-top: 5px;
margin-bottom: 5px;
color: #ff0000;
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right: 5px;
<% }
   else
   { %>
    margin-left: 5px;
<% } %>
}

td.home
{
width: 50%;
}

tr.topDivider
{
background-color: #0a5b9f;
}

td.divider
{
text-align: center;
}

td.noRecordsFound
{
color: #0066CC;
padding-top: 4px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right: 8px;
<% }
   else
   { %>
    padding-left: 8px;
<% } %>
}

div.userInfo
{
margin: 0px;
background-color: #ffffff;
overflow:auto;
<% if (CrmStyles.IsRightToLeft)
   { %>
    text-align: right;
<% }
   else
   { %>
    text-align: left;
<% } %>
}

div.message
{
padding-bottom: 5px;
}

.statusBar
{
width: 100%;
border: #A5ACB5 1px solid;
background-color: #F6F8FA;
text-align: center;
height: 28px;
}

.entityItem
{
height: 55px;
}

a.entityItem
{
color: #0066CC;
}

a.landingPageItem span,
a.relatedEntity
{
color: #000000;
display: block;
font-size: 22px;
font-family: Segoe UI Light, Arial, Sans-serif;
font-weight: lighter;
}

a.landingPageItem span:active,
a.relatedEntity:active
{
color: #ee9805;
}

.landingPageItem
{
height: 44px;
cursor: pointer;
}

img
{
border-top: 0px;
border-right: 0px;
border-bottom: 0px;
border-left: 0px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-left: 3px;
<% }
   else
   { %>
    margin-right: 3px;
<% } %>
}

input.button
{
width: 126px;
min-height: 20px;
font-size: <%= WebUtility.GetFontResourceForStyle("global.css.aspx.button.font_size") %>;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight") %>;
vertical-align: middle;
text-align: center;
color: #000000;
margin-left: 1px;
margin-right: 1px;
background-color: #D8E3EB;
text-decoration: bold;
border-style: solid;
border-color: #666666;
border-width: 1px;
overflow: auto;
}

input.pagingButton
{
min-width: 80px;
min-height: 20px;
vertical-align: middle;
color: #000000;
margin-left: 1px;
margin-right: 1px;
text-decoration: bold;
border: none;
overflow: auto;
}

label.asterisk
{
color: #ff0000;
}

label.plus
{
color: #0000ff;
}

.ltr_ra
{
direction: ltr;
}

#entityFormTable
{
margin-top: 10px;
margin-bottom: 26px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-left: 10px;
<% }
   else
   { %>
    padding-right: 10px;
<% } %>
}

#entityFormTable tbody tr:first-child
{
border-top: 1px solid #d6d6d6;
}

#entityFormTable tbody tr:last-child
{
border-bottom: 1px solid #d6d6d6;
}

#entityFormTable tr
{
table-layout: fixed;
}

#entityFormTable tr td div
{
overflow: hidden !important;
white-space: normal;
}

div#Content.defaultContent
{
top: 70px;
left: 1px;
bottom: 1px;
right: 1px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-left: 0px;
<% }
   else
   { %>
    margin-right: 0px;
<% } %>
}

div#Content.defaultContent.mastheadHidden
{
top: 20px;
}

div#Content
{
top: 50px;
}

div#Content.mastheadHidden
{
top: 0px;
}

#Content,
div#rofContainer
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right: 10px;
<% }
   else
   { %>
    margin-left: 10px;
<% } %>
overflow-x: hidden;
overflow-y: auto;
left: 0px;
right: 0px;

<% if (Request.Browser.Browser == "IE")
   { %>
    -ms-touch-action: none;
    max-height: 500px;
    -ms-overflow-style: auto;
<% }
   else
   { %>
    clear: both;
    position: absolute;
    top: 115px;
    bottom: 44px;
<% } %>
}

div#rofContainer.mastheadHidden
{
<% if (Request.Browser.Browser != "IE")
   { %>
    top: 101px;
<% } %>
}

.androidStatic #Content,
.androidStatic div#rofContainer
{
position: static;
}

div#rofContainer
{
left: 0px;
right: 0px;
}

tr.form-row0
{
width:100%;
min-height: 24px;
height: 24px;
}

tr.form-row1
{
width:100%;
min-height: 24px;
height: 24px;
}

tr.form-ROrow0,
tr.form-ROrow1
{
width:100%;
min-height: 18px;
height: 40px;
display: table;
}

tr.form-ROrow1
{
border-top: 1px solid #d6d6d6;
border-bottom: 1px solid #d6d6d6;
}

td.actionButton1
{
width: 50%;
}

input.editButton,
input.deleteButton,
input.saveButton,
input.cancelButton
{
width: 100px;
}

table.formTable
{
width: 100%;
table-layout: fixed;
}

.errMsg
{
margin-top: 5px;
color: #ff0000;
}


.edt,
.mtd
{
margin-top: 2px;
margin-bottom: 2px;
vertical-align:middle;
}

.edt
{
width: auto;
display:block;
}

.mtd
{
white-space: nowrap;
}

.medt
{
width: 100%;
border: 1px solid #999999;
}

.ms-crm-Inline-Chrome
{
overflow: hidden;
}

.ms-crm-Mobile-Validation
{
padding-top: 4px;
}

label.currency
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    direction: rtl;
<% } %>
text-align: center;
}

textarea.edt,
input.edt, select.edt
{
width: 100%;
border: 1px solid #999999;
}

textarea
{
width: 100% !important;
}

input.edt, select.edt
{
line-height: 1.5em;
height: 2em;
}

label.edt
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right: 4px;
<% }
   else
   { %>
    margin-left: 4px;
<% } %>
}

input.url
{
text-decoration: none;
color: #0000ff;
}

div.attrName, label.attrName,
.ms-crm-LookupItem-Name,
div.ms-crm-Inline-Chrome div.ms-crm-Inline-Edit input.ms-crm-InlineInput,
div.ms-crm-Inline-Edit textarea.ms-crm-InlineInput
{
color: #666666;
display:inline;
font-size: 14px;
font-family: "Segoe UI Semilight", Arial, Sans-Serif;
}

div.ms-crm-Inline-Edit.ms-crm-Inline-Lookup table tbody tr td input.ms-crm-InlineInput.ms-crm-InlineLookupEdit
{
padding-bottom: 7px;
}

div.lookupItem
{
display:inline;
}

select.defaultWidth
{
width: auto;
}

.mobCellLabel
{
vertical-align: middle;
}

.mobCellLabel,
.mobCellValue,
.mobCellLabelEdit,
.movCellValueRO > div,
{
word-wrap: break-word;
}

.ROLabel
{
width: 40%;
}

.mobCellLabelEdit
{
vertical-align: top;
display: block;
}

.mobCellValue,
.mobCellValueRO
{
padding-left: 8px;
padding-right: 8px;
}

.mobCellValueRO > div
{
word-wrap: break-word;
}

h6
{
font-size: 14px;
font-weight: normal;
color: #666666;
margin: 0px;
text-transform: uppercase;
}

table.relatedEntity
{
padding: 0px;
width: 100%;
}

div.divider
{
height: 20px;
}

.android .ms-crm-me-cmdbar
{
position: relative;
}

.floatrtl,
#mnuctrldiv,
#smmnuctrldiv
.ms-crm-me-cmdbar span
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    float: left;
<% }
   else
   { %>
    float: right;
<% } %>
}

.floatltr,
input,
.mnuctrlinvis,
.mnuctrlvis,
.entimg,
.entName,
.blip,
.smLogo,
span.ms-crm-InlineEditLabel span
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    float: right;
<% }
   else
   { %>
    float: left;
<% } %>
}

span.ms-crm-InlineEditLabel span
{
max-width: 100% !important;
}

.entimg
{
height: 38px;
width: 38px;
background-color: #555555;
background-repeat: no-repeat;
background-size: 38px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-left: 6px;
<% }
   else
   { %>
    margin-right: 6px;
<% } %>
}

.entimg.account
{
background-color: #CE7200;
}

.entitynametitle.account
{
color: #CE7200;
}
.entimg.lead
{
background-color: #3052A6;
}

.entitynametitle.lead
{
color: #3052A6;
}

.entimg.opportunity
{
background-color: #3E7239;
}

.entitynametitle.opportunity
{
color: #3E7239;
}


.entimg.contact
{
background-color: #0072C6;
}

.entitynametitle.contact
{
color: #0072C6;
}

.entimg.incident
{
background-color: #7A278F;
}

.entitynametitle.incident
{
color: #7A278F;
}

.entimg.systemuser
{
background-color: #578837;
}

.entitynametitle.systemuser
{
color: #578837;
}

.entimg.phonecall,
.entimg.task,
.entimg.email,
.entimg.letter,
.entimg.appointment,
.entimg.serviceappointment
{
background-color: #C0172B;
}

.entitynametitle.phonecall,
.entitynametitle.task,
.entitynametitle.email,
.entitynametitle.letter,
.entitynametitle.appointment
{
color: #C0172B;
}

.entName
{
max-width: 200px;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
line-height: 38px;
}



#LogoArea
{
overflow: hidden;
}

.mnuctrlvis,
.mnuctrlinvis,
#orgName
{
color: #FFFFFF;
font-size: 14px;
}

.mnuctrlvis
{
display: none;
}

.mnuctrlinvis
{

}

div.lgmnu
{
top: 65px;
}

.mnu,
.lgmnu
{
display: none;
clear: both;
border: 2px solid #002050;
background-color: #FFFFFF;
left: 0px;
right: 0px;
top: 54px;
position: absolute;
z-index: 1000;
<% if (CrmStyles.IsRightToLeft)
   { %>
    text-align: right;
<% }
   else
   { %>
    text-align: left;
<% } %>
}

.mnuOpt
{
cursor: pointer;
padding-top: 10px;
padding-bottom: 20px;
padding-left: 20px;
padding-right: 20px;
}

.mnuOpt a
{
font-size: 22px;
}

#mnuctrldiv,
#smmnuctrldiv
{
cursor: pointer;
position: absolute;
padding-left: 10px;
padding-right: 10px;
padding-top: 20px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    left: 0px;
<% }
   else
   { %>
    right: 0px;
<% } %>
}

#mnuctrldiv
{
top: 20px;
}

#smmnuctrldiv
{
overflow: hidden;
top: 0px;
}

.hdbkclr,
#LogoArea,
#orgName,
.mnuctrlvis,
.mnuctrlinvis,
#orgNameSm
{
background-color: #002050;
color: #FFFFFF;
}

#orgName,
#orgNameSm
{
padding-bottom: 6px;
font-size: 16px;
margin-left: 40px;
margin-right: 40px;
text-align: center;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
}

#orgNameSm
{
margin: 0px;
overflow: hidden;
text-align: center;
text-overflow: ellipsis;
margin-top:10px;
height: 20px;
display: block;
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right: auto;
    margin-left: 40px;
<% }
   else
   { %>
    margin-left: auto;
    margin-right: 40px;
<% } %>
}

#crmLogo
{
display: block;
margin-left: auto;
margin-right: auto;
height: 28px;
margin-top: 7px;
margin-bottom: 4px;
}

.smLogo
{
height: 30px;
width: 30px;
margin-bottom: 7px;
display: block;
margin-top: -3px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right: 7px;
<% }
   else
   { %>
    margin-left: 7px;
<% } %>
}



td div.ms-crm-ReadField-Normal
{
margin-bottom: 4px;
margin-top: 10px;
}



div.ms-crm-InlineTabHeader,
div.ms-crm-Form-Title div.ms-crm-ReadForm-LargeIcon-default,
#formselectorcontainer
{
display: none;
}


img.ms-crm-Lookup-Item
{
display: none;
}

div.ms-crm-Inline-Chrome div.ms-crm-Inline-Edit input.ms-crm-InlineInput,
div.ms-crm-Inline-Edit textarea.ms-crm-InlineInput
{
border: 1px solid #CCCCCC;
margin: 0px;
font-weight: normal;
color: #000000;
text-decoration: none;
}

SPAN.ms-crm-Lookup-Item SPAN.ms-crm-LookupItem-Name
{
color: #000000;
}

table.ms-crm-Lookup tbody tr td div.ms-crm-Lookup.ms-crm-InlineLookupEdit
{
height: 100% !important;
width: 100% !important;
padding-top: 0px !important;
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right: 0px !important;
<% }
   else
   { %>
    padding-left: 0px !important;
<% } %>
}

table.ms-crm-Lookup tbody tr,
div.ms-crm-Inline-Edit select.ms-crm-SelectBox
div.ms-crm-Inline-Edit.ms-crm-Inline-OptionSet
{
height: 100% !important;
width: 100%;
padding-left: 0;
padding-right: 0;
}

div.ms-crm-Inline-Edit.ms-crm-Inline-OptionSet
{
height: 26px !important;
}

div.ms-crm-Inline-Edit input
{
clear: both;
}

div#formHeaderContainer.ms-crm-Form-HeaderContainer
{
display: none;
}

span img.ms-crm-ImageStrip-frm_required.ms-crm-Inline-RequiredLevel,
span img.ms-crm-ImageStrip-frm_recommended.ms-crm-Inline-RequiredLevel
{
margin-top: 6px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right: -2px;
<% }
   else
   { %>
    margin-left: -2px;
<% } %>
}

table tbody tr td.ms-crm-Field-Data-Print
{
padding-bottom: 10px;
}

table.ms-crm-Lookup tbody tr td.Lookup_RenderButton_td
{
width: 26px !important;
display: table-cell !important;
<% if (CrmStyles.IsRightToLeft)
   { %>
    border-right: 1px solid #C6C6C6;
<% }
   else
   { %>
    border-left: 1px solid #C6C6C6;
<% } %>
}

.Lookup_RenderButton_td IMG.ms-crm-InlineLookupEdit
{
vertical-align: top;
padding-top: 3px;
padding-bottom: 3px;
padding-left: 2px;
padding-right: 2px;
}

table.ms-crm-Lookup tbody tr TD.ms-crm-InlineLookupEdit-Box
{
width: 0px;
}

div#tdAreas
{
height: 100 !important;
}

.mobile-refresh-form div.ms-crm-Lookup.ms-crm-InlineLookupEdit a
{
display: none;
}

td ul.ms-crm-InlineLookupEdit
{
overflow-y: hidden;
font-size: 16px;
min-height: 21px;
}

td ul.ms-crm-InlineLookupEdit.ms-crm-InlineMultiLookupEdit
{
min-height: 24px;
padding-left: 3px;
}

div.ms-crm-Inline-Edit select.ms-crm-SelectBox
{
font-size: 14px;
margin: 0px;
height: 26px;
}

div.ms-crm-Form-Title-Data h1
{
font-size: 22px;
font-weight: normal;
color: #666666;
margin: 0px;
text-transform: uppercase;
}


td.ms-crm-Field-Data-Print.ms-crm-Inline-DynamicGutter div.ms-crm-Inline-Chrome div.ms-crm-Inline-Value.ms-crm-Inline-Locked
{

<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right: 23px;
<% }
   else
   { %>
    margin-left: 23px;
<% } %>
}

td.ms-crm-Field-Data-Print.ms-crm-Inline-DynamicGutter div.ms-crm-Inline-Chrome div.ms-crm-Inline-Edit
{

<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right: 0px;
    margin-left: 15px;
<% }
   else
   { %>
    margin-left: 0px;
    margin-right: 15px;
<% } %>
}

td.ms-crm-Field-Data-Print.ms-crm-Inline-DynamicGutter div.ms-crm-Inline-Chrome div.ms-crm-Inline-Edit.ms-crm-Inline-Currency,
td.ms-crm-Field-Data-Print.ms-crm-Inline-DynamicGutter div.ms-crm-Inline-Chrome div.ms-crm-Inline-Edit.ms-crm-Inline-Lookup
{

<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-left: 8px;
<% }
   else
   { %>
    margin-right: 8px;
<% } %>
}

td.ms-crm-Field-Data-Print.ms-crm-Inline-DynamicGutter div.ms-crm-Inline-Chrome.ntext div.ms-crm-Inline-Edit
{

<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-left: 21px;
<% }
   else
   { %>
    margin-right: 21px;
<% } %>
}

td.ms-crm-Field-Data-Print.ms-crm-Inline-DynamicGutter div.ms-crm-Inline-Chrome div.ms-crm-Inline-Edit.ms-crm-Inline-OptionSet,
td.ms-crm-Field-Data-Print.ms-crm-Inline-DynamicGutter div.ms-crm-Inline-Chrome.datetime div.ms-crm-Inline-Edit,
td.ms-crm-Field-Data-Print.ms-crm-Inline-DynamicGutter div.ms-crm-Inline-Chrome div.ms-crm-Inline-Value
{

<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-left: 9px;
<% }
   else
   { %>
    margin-right: 9px;
<% } %>
}

table.ms-crm-CurrencyTable-Refresh tbody tr td div
{

<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-left: 7px;
<% }
   else
   { %>
    margin-right: 7px;
<% } %>
}

div.ms-crm-Field-Data-Print div div.ms-crm-Inline-Value
{
height: 19px;
border: 1px solid #CCCCCC;

<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-left: 9px;
<% }
   else
   { %>
    margin-right: 9px;
<% } %>
}


DIV.ms-crm-IL-MRU-Menu div,
DIV.ms-crm-IL-Menu div,
DIV.ms-crm-IL-MRU-Menu div,
DIV.ms-crm-IL-Menu div,
DIV.ms-crm-IL-MRU-Menu a,
DIV.ms-crm-IL-Menu a,
DIV.ms-crm-IL-MRU-Menu a,
DIV.ms-crm-IL-Menu a,
DIV.ms-crm-IL-MRU-Menu span,
DIV.ms-crm-IL-Menu span,
DIV.ms-crm-IL-MRU-Menu span,
DIV.ms-crm-IL-Menu span,
DIV.ms-crm-IL-Footer div
{
font-size: 11px;
}

.ms-crm-IL-MenuItem-Title,
.ms-crm-IL-MenuItem-Title-Rest
{
vertical-align: top;
}


div.ms-crm-me-cmdbaricontext,
.ms-crm-me-cmdbar div
{
font-weight: normal;
font-size: 8px;
margin-top: 3px;
text-align: center;
text-overflow: ellipsis;
overflow: hidden;
white-space: nowrap;
}

#MobileCommandBarEllipsis
{
height: 100%;
cursor: pointer;
position: absolute;
top: 5px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    left: 5px;
<% }
   else
   { %>
    right: 5px;
<% } %>
}

#ellipsisImg
{
width: 20px;
height: 4px;
}

div.ms-crm-me-cmdbaricon-show
{
display: inline-block;
}

div.ms-crm-me-cmdbarbtn-show,
div.ms-crm-me-cmdbarbtn-hide,
div.ms-crm-me-cmdbaricon-hide
{
display: none;
}

img.cmdbarimg
{
height: 28px;
width: 28px;
margin-left: auto;
margin-right: auto;
display: block;
}

div.ms-crm-me-cmdbaricon
{
padding-left: 5px;
padding-right: 5px;
padding-top: 6px;
padding-bottom: 6px;
width: 44px;
cursor: pointer;
}

.ms-crm-me-cmdbar,
.ms-crm-me-cmdbar.less
{
overflow: hidden;
height: 44px;
}

.ms-crm-me-cmdbar.more
{
height: 64px;
}


.ms-crm-me-cmdbarbtn
{
display: none;
}

.ms-crm-me-cmdbar,
.ms-crm-me-cmdbar span,
.ms-crm-me-cmdbaricon,
.ms-crm-me-cmdbaricontext,
.ms-crm-me-cmdbarbtn,
div.errContent#Content
{
background-color: #FFFFFF;
}

#MobileCommandBar
{
position: absolute;
bottom: 0px;
left: 0px;
width: 100%;
z-index: 1100;
}

.androidStatic #MobileCommandBar
{
display: none;
}



.prevPageInlineButton,
.nextPageInlineButton
{
display: none;
}




tbody tr td.gridCell a.gridCell
{
font-size: 26px;
font-family: "Segoe UI", Arial, Sans-Serif;
max-height: 56px;
overflow: hidden;
padding-bottom: 4px;
}

.android tbody tr td.gridCell a.gridCell,
.androidStatic tbody tr td.gridCell a.gridCell
{
max-height: 54px;
}

tr td a.gridCell.secondaryColumn
{
font-size: 16px;
font-family: "Segoe UI", Arial, Sans-Serif;
margin-left: 5px;
max-height: 21px;
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
}




span.ms-crm-Inline-ErrorArrowIcon
{
display: none !important;
}

div.ms-crm-Inline-Validation,
.ms-crm-Hidden-NoBehavior
{
border: none;
background-color: transparent;
color: red;
margin-top: 52px;
z-index: 1;
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right: -5px;
<% }
   else
   { %>
    margin-left: -5px;
<% } %>
}

.ms-crm-Mobile-Validation div.ms-crm-Inline-Validation
{
position: static;
margin-top: 0;
width: auto;
}

img.ms-crm-ImageStrip-inlineedit_warning
{
background: transparent;
z-index: -100;
}

div.ms-crm-Inline-Chrome div.ms-crm-Inline-Edit.ms-crm-Inline-HasError,
td.ms-crm-Inline-DynamicGutter div.ms-crm-Inline-Value.ms-crm-Inline-HasError
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right: 0px;
<% }
   else
   { %>
    margin-left: 0px;
<% } %>
}



.entitynametitle
{
color: #555555;
overflow: hidden;
text-overflow: ellipsis;
max-width: 180px;
white-space: nowrap;
font-weight: 700;
<% if (CrmStyles.IsRightToLeft)
   { %>
    float: right;
<% }
   else
   { %>
    float: left;
<% } %>
}

span.chevrons
{
padding-left: 5px;
padding-right: 5px;
display: block;
margin-top: 2px;

<% if (CrmStyles.IsRightToLeft)
   { %>
    float: right;
<% }
   else
   { %>
    float: left;
<% } %>
}

.entityTitle,
.chevrons,
.entitynametitle
{
font-size: 14px;
vertical-align: text-bottom;
margin-top: 4px;
}

.entityTitle
{
color: #666666;
width: 220px;
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
clear: both;
}

.entitynametitle,
.entityTitle
{
text-transform: uppercase;
}

#entityFormTitle
{
margin-top: 5px;
padding-bottom: 5px;
white-space: nowrap;
display: inline-block;
}



#viewSel
{
border: none;
width: 110%;
cursor: pointer;
background-color: #FFF;
-webkit-appearance: none;
}

#findBtn,
#goBtn,
div.viewName,
div#GoHome,
div#GoBack
{
display: none;
}

#entityViewTitle
{
height: 20px;
}

td.pipe
{
width: 50px;
}

td.mobCellControl
{
width: auto;
}

div#viewSelContainer
{
width: 90%;
min-width: 200px;
max-width: 600px;
overflow: hidden;
clear: both;
}

#EntityTitleArea
{
margin-top: 8px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right: 10px;
<% }
   else
   { %>
    margin-left: 10px;
<% } %>
}

#viewform
{
margin-top: 5px;
}




#searchArea
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-left: 10px;
<% }
   else
   { %>
    margin-right: 10px;
<% } %>
}

#searchImg
{
height: 26px;
width: 26px;
cursor: pointer;
border: 1px solid #999999;
margin-top: 10px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right: -1px;
<% }
   else
   { %>
    margin-left: -1px;
<% } %>
}

#searchInputContainer
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-left: 35px;
<% }
   else
   { %>
    margin-right: 35px;
<% } %>
}

.controlsRow.searchRow
{
margin-top: 20px;
}

.controlsRow.searchRow div
{
font-size: 18px;
color: #666666;
}

#txtSearch
{
margin-top: 10px;
<% if (Request.Browser.Browser == "IE" || Request.Browser.Browser == "MSIE Mobile")
   { %>
    height: 26px;
<% }
   else
   { %>
    height: 28px;
<% } %>
}

#searchBackButton
{
border: none;
width: 100px;
height: 30px;
text-align: center;
}

#searchLabel,
#searchTerm,
#cancelLink
{
color: #10AB07;
}

#searchTerm,
#cancelLink
{
font-weight: bold;
margin-top: 10px;
}

#cancelLink
{
cursor: pointer;
}

#searchContainer
{
position: absolute;
bottom: 10px;
left: 10px;
right: 10px;
}

textEllipsis
{
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
}

tr.ms-crm-LoadingContainer td
{
text-align: center;
}

.progressOverlayContainer
{
background-color: #FFFFFF;
opacity: 0.6;
position: absolute;
left: 0px;
right: 0px;
top: 0px;
bottom: 0px;
z-index: 10000;
}

img#DialogLoadingDivImg
{
display: block;
position: absolute;
left: 50%;
top: 50%;
z-index: 1001;
opacity: 1;
}

td.gridCell a
{
line-height: 1.08;
}

td.secondaryGridCell
{
padding-left: 4px;
padding-right: 4px;
padding-bottom: 3px;
}

td.secondaryGridCell a
{
line-height: 1.4;
}


tr td.ms-crm-MiniCal-Day
{
font-size: 14px;

}

tr.ms-crm-MiniCal-Nav td
{
font-size: 28px;
text-align: center;
}

div.ms-crm-MiniCal-TodayBar
{
font-size: 18px;
text-align: center;
}

table.ms-crm-MiniCal
{
border-spacing: 20px;
}

div.ms-crm-modalDialog.ms-crm-MiniCal-Border
{
position: fixed;
z-index: 2100;
display: block;
max-width: 400px;
max-height: 400px;
}

tbody tr.ms-crm-MiniCal-TodayBar
{
height: 35px;
}

body div.ms-crm-Floating-Div
{
position: absolute;
<% if (CrmStyles.IsRightToLeft)
   { %>
    right: 0;
<% }
   else
   { %>
    left: 0;
<% } %>
top: 44px;
bottom: 0px;
background: #d6d6d6;
opacity: 0.7 !important;
}

body.android div.ms-crm-Floating-Div
{
position: fixed;
}

.ms-crm-inlineSelectRow
{
line-height: 2.5;
text-align: center;
}

td div.ms-crm-AboutDialog-HeaderTitle
{
width: 100%;
padding-top: 5px !important;
background-color: #002050;
height: 80px;
width: 300px;
}

tr.ms-crm-AboutDialog-Header td
{
background-color: #002050;
}

tbody td.ms-crm-AboutDialog-HeaderLogo
{
padding-top: 5px !important;
background-color: #002050;
}

td div.ms-crm-AboutDialog-Info
{
padding-top: 0px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-left: 10px;
<% }
   else
   { %>
    padding-right: 10px;
<% } %>
}

.ms-crm-AboutDialog-Header
{
width: 100%;
}

td.emptyColumn
{
display: none;
}

div.recordTitle
{
clear: both;
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
font-size: 20px;
}

div#areaForm
{
min-width: 100%;
}

table.ms-crm-FormSection
{
width: 100%;
}

div.ms-crm-Field-Data-Print div div.ms-crm-Inline-Value span
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right: 4px;
<% }
   else
   { %>
    margin-left: 4px;
<% } %>
}

nobr.gridcellpadding
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right: 5px;
<% }
   else
   { %>
    margin-left: 5px;
<% } %>
}

div.ms-crm-Inline-Value span div.ms-crm-Inline-GradientMask
{
background: none;
}

body.ms-crm-MobileRefresh.searchMode
{
position: absolute;
top: 0px;
bottom: 0px;
left: 0px;
right: 0px;
}

label.crmGrid_findHintText
{
display: none;
}

#crmForm
{
height: auto !important;
}

#InlineDialog
{
z-index: 1101 !important;
}

div#Content.errContent
{
top: 90px;
}

div#Content.errContent.mastheadHidden
{
top: 40px;
}

div.errBanner
{
font-size: 16px;
font-family: "Segoe UI", Arial, Sans-Serif;
font-weight: normal;
border: none;
color: #FFFFFF;
height: 23px;
}

td.mobCellValue div
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-left: 2px;
<% }
   else
   { %>
    padding-right: 2px;
<% } %>
}

table.ms-crm-Lookup tbody tr td div.ms-crm-Lookup.ms-crm-InlineLookupEdit
{
<% if (Request.Browser.Browser == "IE" || Request.Browser.Browser == "MSIE Mobile")
   { %>
    <% if (CrmStyles.IsRightToLeft)
       { %>
        margin-right: 2px;
    <% }
       else
       { %>
        margin-left: 2px;
    <% } %>
<% } %>
}