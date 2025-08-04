<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

html, body, div, span, object,
h1, h2, h3, p, a, img
{
margin: 0px;
padding: 0px;
border: 0px;
font-size: 100%;
font: inherit;
}

.ms-crm-of-header
{
color: #262626;
font-family: Segoe UI Light, Segoe UI, Tahoma, Arial;
font-size: 36px;
font-weight: lighter;
white-space: nowrap;
}

.ms-crm-of-page2-header
{
white-space: normal;
}

.ms-crm-of-subHeader
{
color: #666666;
font-size: 21px;
font-weight: normal;
white-space: nowrap;
}

.ms-crm-of-text
{
color: #8B8B8B;
font-size: 14px;
font-weight: normal;
}

.ms-crm-of-note
{
color: #262626;
font-size: 12px;
font-weight: normal;
}

.ms-crm-of-note1
{
color: #000000;
font-family: Segoe UI;
font-size: 12px;
font-weight: normal;
}

a.ms-crm-of-inlineLink:link,
a.ms-crm-of-inlineLink:visited,
a.ms-crm-of-inlineLink:hover,
a.ms-crm-of-inlineLink:active
{
text-decoration: none;
}

a.ms-crm-of-controlLink:link,
a.ms-crm-of-controlLink:visited,
a.ms-crm-of-controlLink:hover,
a.ms-crm-of-controlLink:active
{
font-size: 14px;
font-weight: normal;
text-decoration: none;
}

a.ms-crm-of-button:link,
a.ms-crm-of-button:visited
{
background-color: #ffffff;
border: 1px solid #c6c6c6;
display: inline-block;
color: #444444;
font-size: 11px;
font-weight: normal;
padding: 4px 5px;
text-align: center;
text-decoration: none;
min-width: 76px;
white-space: nowrap;
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-left: 10px;
<% }
   else
   { %>
    margin-right: 10px;
<% } %>
}

a.ms-crm-of-button:hover,
a.ms-crm-of-button:active
{
background-color: #b1d6f0;
border: 1px solid #02dbe3;
}

img.ms-crm-of-previewImage
{
width: 350px;
border: 0px;
}

a.ms-crm-of-previewImageCaption:link,
a.ms-crm-of-previewImageCaption:visited,
a.ms-crm-of-previewImageCaption:hover,
a.ms-crm-of-previewImageCaption:active
{
color: #8B8B8B;
font-size: 11.5px;
font-weight: normal;
text-decoration: none;
}

p.ms-crm-of-progressItem
{
background-repeat: no-repeat;
color: #444444;
font-size: 14px;
font-weight: normal;
line-height: 31px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    background-position: right center;
    padding-right: 32px;
<% }
   else
   { %>
    background-position: left center;
    padding-left: 32px;
<% } %>
}

#optionalFeaturesBody
{
background-color: #ffffff;
}

#topLevelDiv
{
font-family: Segoe UI, Tahoma, Arial;
font-weight: normal;
position: absolute;
top: 0px;
bottom: 0px;
left: 0px;
right: 0px;
overflow: auto;
outline: none;
}

#contentPage1,
#page2,
#page3,
#page4,
#page5,
#page6
{
margin-bottom: 25px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right: 45px;
<% }
   else
   { %>
    margin-left: 45px;
<% } %>
}

#contentPage1,
#page2,
#page4,
#page6
{
margin-top: 22px;
}

#page3,
#page5
{
margin-top: 37px;
}

#page2
{
max-width: 740px;
}

#buttonSectionPage2,
#buttonSection1Page5
{
font-size: 0px;
letter-spacing: 0px;
word-spacing: 0px;
white-space: nowrap;
}


#seeWhatIsNew
{
margin-bottom: 20px;
}

#descriptionPage1,
#descriptionPage2
{
width: 45%;
min-width: 400px;
}

#previewImageThumbnailDiv,
#previewImageThumbnailDiv2
{
width: 202px;
}

#descriptionParentDiv
{
display: inline-block;
width: 100%;
}
#descriptionPage1
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
#descriptionPage2
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

#modernLookAndFeelHeader,
#newSalesAndServiceHeader
{
white-space: normal;
}

#modernLookAndFeelText,
#newSalesAndServiceText
{
margin-top: 6px;
}

#seeLookAndFeelExample,
#seeSalesAndServiceExample
{
margin-top: 5px;
}

#controlSectionPage1
{
margin-top: 20px;
}

#buttonSectionPage1
{
margin-top: 16px;
}

#previewImageThumbnail,
#previewImageThumbnail1
{
border: 1px solid #ccc;
width: 350px;
}

#previewImageThumbnail,
#previewImageThumbnail1
{
margin-top: 30px;
}

#previewCaption,
#previewCaption1
{
margin-top: 3px;
}


.ms-crm-of-previewHeader
{
color: #ffffff;
font-size: 20px;
font-weight: normal;
}

.ms-crm-of-previewTextHeading
{
color: #ffffff;
font-size: 14px;
font-weight: bolder;
margin-top: 15px;
text-align: justify;
}

.ms-crm-of-previewText
{
color: #ffffff;
font-size: 14px;
font-weight: normal;
margin-top: 15px;
text-align: justify;
}

.ms-crm-of-previewText2
{
color: #ffffff;
font-size: 14px;
font-weight: normal;
margin-top: 15px;
text-align: justify;
padding-left: 32px;
}

.ms-crm-of-previewBoldText
{
font-family: Segoe UI Semibold, Segoe UI, Tahoma, Arial;
font-size: 15px;
font-weight: bolder;
}

.ms-crm-of-previewBulletImage
{
border: 0px;
height: 22px;
width: 22px;
margin-top: 2px;
margin-bottom: 25px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    float: right;
    margin-left: 10px;
<% }
   else
   { %>
    float: left;
    margin-right: 10px;
<% } %>
}

.ms-crm-of-InfoIconImage
{
padding-top: 4px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    float: right;
    margin-left: 6px;
<% }
   else
   { %>
    float: left;
    margin-right: 6px;
<% } %>
}

#popupBackground
{
background-color: #000000;
display: none;
filter: alpha(opacity=75);
opacity: 0.75;
position: fixed;
left: 0px;
top: 0px;
height: 100%;
width: 100%;
z-index: 908;
}

#popupPane,
#popupPane1
{
display: none;
position: fixed;
overflow: auto;
left: 0px;
top: 0px;
width: 100%;
height: 100%;
z-index: 909;
}

#popupPaneContent
{
height: 470px;
}


#popupPaneContent,
#popupPaneContent1
{
margin-top: 5%;
margin-bottom: 5%;
z-index: 909;
width: 85%;
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right: 7.5%;
<% }
   else
   { %>
    margin-left: 7.5%;
<% } %>
}

#previewContentDiv,
#previewContentDiv1
{
outline: none;
background-color: #191919;
}

#previewImageDiv,
#previewImageDiv1
{
background-color: #191919;
width: 65%;
padding: 2%;
display: inline-block;
vertical-align: top;
}

#previewDescriptionDiv,
#previewDescriptionDiv1
{
background-color: #191919;
width: 30%;
display: inline-block;
}

#previewImage,
#previewImage1
{
border: 1px solid #ccc;
height: 100%;
width: 100%;
}

#previewTextDiv,
#previewTextDiv1
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-left: 20px;
    padding-right: 10px;
<% }
   else
   { %>
    padding-left: 10px;
    padding-right: 20px;
<% } %>
padding-bottom: 30px
}

#previewCloseDiv,
#previewCloseDiv1
{
height: 23px;
padding-top: 10px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-left: 10px;
    text-align: left;
<% }
   else
   { %>
    padding-right: 10px;
    text-align: right;
<% } %>
}


#controlSectionPage2
{
margin-top: 20px;
}

#buttonSectionPage2
{
margin-top: 5px;
}


#firstHeaderPage3
{
margin-top: 1px;
}

#systemAvailabilityWarning2
{
margin-top: 3px;
margin-bottom: 3px;
}

#progressPanel
{
margin-top: 27px;
margin-bottom: 29px;
}

#videoDiv
{
margin-top: 15px;
height: 300px;
width: 370px;
}

#mediaPlayer,
#mediaPlayer1
{
height: 100%;
width: 100%;
}

#progressAltTextStage1,
#progressAltTextStage2,
#progressAltTextStage3
{
display: none;
font-size: 14px;
min-width: 90px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-left: 10px;
<% }
   else
   { %>
    margin-right: 10px;
<% } %>
}


#firstSubtitleDiv
{
margin-top: -2px;
}

#firstSubtitlePage4,
#systemAvailabilityWarning
{
display: inline;
}

#whatIsNewLink2
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right: 13px;
<% }
   else
   { %>
    margin-left: 13px;
<% } %>
}

#secondSubtitlePage4
{
margin-top: 31px;
}

#firstStepPage4
{
margin-top: 15px;
margin-bottom: 6px;
}

#secondStepPage4
{
margin-bottom: 6px;
}


#page5
{
max-width: 400px;
}

#firstHeaderPage5
{
margin-top: 1px;
margin-bottom: 3px;
}

#migrationWarningBoxPage5
{
background-image: url(/_imgs/tools/ico_Warning.png);
background-repeat: no-repeat;
margin-top: 45px;
margin-bottom: 40px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    background-position: right center;
    padding-right: 42px;
<% }
   else
   { %>
    background-position: left center;
    padding-left: 42px;
<% } %>
}

#progressBoxPage5
{
margin-top: 22px;
}

#buttonSection1Page5
{
margin-top: 5px;
}

#buttonSection2Page5
{
margin-top: 41px;
}

#progressBoxPage5,
#controlSection2Page5,
#enablingProgressItem,
#enabledProgressItem
{
display: none;
}


#supportLinkPage6
{
margin-top: 7px;
}

#buttonSectionPage6
{
margin-top: 37px;
}