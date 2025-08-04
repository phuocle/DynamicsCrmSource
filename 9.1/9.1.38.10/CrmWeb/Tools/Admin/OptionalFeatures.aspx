<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.Admin.OptionalFeaturesPage" %>

<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Application.Security" %>
<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader runat="server" id="crmHeader"></cnt:AppHeader>
</head>
<body id="optionalFeaturesBody">
<cnt:OptionalFeaturesManager id="optionalFeaturesManager" runat="server"></cnt:OptionalFeaturesManager>
<div id="topLevelDiv" tabindex="-1">
<div id="page1">
<div id="contentPage1">
<h1 class="ms-crm-of-header">
<loc:Text ResourceId="OptionalFeatures.aspx_Title_11" runat="server" />
</h1>
<p id="seeWhatIsNew" class="ms-crm-of-note">
<a id="whatIsNewLink1" href="" target="_blank" rel="noopener noreferrer" class="ms-crm-of-inlineLink" runat="server">
<loc:Text ResourceId="OptionalFeatures.aspx_Text_11" runat="server" />
</a>
</p>
<div id="descriptionParentDiv">
<div id="descriptionPage1">
<div id="featureDescriptionDiv">
<h2 id="modernLookAndFeelHeader" class="ms-crm-of-subHeader">
<loc:Text ResourceId="OptionalFeatures.aspx_Subtitle_11" runat="server" />
</h2>
<p id="modernLookAndFeelText" class="ms-crm-of-text">
<loc:Text ResourceId="OptionalFeatures.aspx_Text_12" runat="server" />
</p>
<p id="seeLookAndFeelExample" class="ms-crm-of-note">
<a id="lookAndFeelExampleLink" href="" target="_blank" rel="noopener noreferrer" class="ms-crm-of-inlineLink" runat="server">
<loc:Text ResourceId="OptionalFeatures.aspx_Text_13" runat="server" />
</a>
</p>
</div>
<div id="previewImageThumbnailDiv">
<div>
<a id="showPreviewLink1" href="#">
<img id="previewImageThumbnail" class="ms-crm-of-previewImage" alt="" src="" runat="server" />
</a>
</div>
<div id="previewCaption">
<a id="showPreviewLink2" class="ms-crm-of-previewImageCaption" href="#">
<loc:Text ResourceId="OptionalFeatures.aspx_Preview_11" runat="server" />
</a>
</div>
</div>
</div>
<div id="descriptionPage2">
<div id="featureDescriptionDiv2">
<h2 id="newSalesAndServiceHeader" class="ms-crm-of-subHeader">
<loc:Text ResourceId="OptionalFeatures.aspx_Subtitle_12" runat="server" />
</h2>
<p id="newSalesAndServiceText" class="ms-crm-of-text">
<loc:Text ResourceId="OptionalFeatures.aspx_Text_14" runat="server" />
</p>
<p id="seeSalesAndServiceExample" class="ms-crm-of-note">
<a id="salesAndServiceExampleLink" href="" target="_blank" rel="noopener noreferrer" class="ms-crm-of-inlineLink" runat="server">
<loc:Text ResourceId="OptionalFeatures.aspx_Text_16" runat="server" />
</a>
</p>
</div>
<div id="previewImageThumbnailDiv2">
<div>
<a id="showPreviewLink3" href="#">
<img id="previewImageThumbnail1" class="ms-crm-of-previewImage" alt="" src="" runat="server" />
</a>
</div>
<div id="previewCaption1">
<a id="showPreviewLink4" class="ms-crm-of-previewImageCaption" href="#">
<loc:Text ResourceId="OptionalFeatures.aspx_Preview_11" runat="server" />
</a>
</div>
</div>
</div>
</div>
<div id="controlSectionPage1">
<div id="firstDiv">
<p id="systemAvailabilityWarning" class="ms-crm-of-note1">
<img class="ms-crm-of-InfoIconImage" alt="" src="/_imgs/error/notif_icn_info16.png"></img>
<loc:Text ResourceId="OptionalFeatures.aspx_Warning_11" runat="server" />
</p>
<a id="learnMoreLink" href="" target="_blank" rel="noopener noreferrer" class="ms-crm-of-note ms-crm-of-inlineLink" runat="server">
<loc:Text ResourceId="OptionalFeatures.aspx_Text_LearnMore" runat="server" />
</a>
</div>
<div id="buttonSectionPage1">
<a id="updateLink" href="#" class="ms-crm-of-button">
<loc:Text ResourceId="OptionalFeatures.aspx_Button_11" runat="server" />
</a>
</div>
</div>
</div>
<div id="popupBackground"></div>
<div id="popupPane">
<div id="popupPaneContent">
<div id="previewContentDiv" tabindex="-1">
<div id="previewImageDiv">
<img id="previewImage" alt="" src="" runat="server" />
</div>
<div id="previewDescriptionDiv">
<div id="previewCloseDiv">
<a id="hidePreviewLink" href="#">
<img id="hidePreviewLinkImage" alt="" src="/_imgs/tools/ico_Close.png" runat="server" />
</a>
</div>
<div id="previewTextDiv">
<h3 class="ms-crm-of-previewHeader">
<loc:Text ResourceId="OptionalFeatures.aspx_Preview_13" runat="server" />
</h3>
<p class="ms-crm-of-previewText ms-crm-of-previewBoldText">
<loc:Text ResourceId="OptionalFeatures.aspx_Preview_14" runat="server" />
</p>
<p id="previewBulletPoint1" class="ms-crm-of-previewText">
<img class="ms-crm-of-previewBulletImage" alt="" src="/_imgs/tools/ico_Blueicon_1.png"></img>
<loc:Text ResourceId="OptionalFeatures.aspx_Preview_15" runat="server" />
</p>
<p id="previewBulletPoint2" class="ms-crm-of-previewText">
<img class="ms-crm-of-previewBulletImage" alt="" src="/_imgs/tools/ico_Blueicon_2.png"></img>
<loc:Text ResourceId="OptionalFeatures.aspx_Preview_16" runat="server" />
</p>
<p id="previewBulletPoint3" class="ms-crm-of-previewText">
<img class="ms-crm-of-previewBulletImage" alt="" src="/_imgs/tools/ico_Blueicon_3.png"></img>
<loc:Text ResourceId="OptionalFeatures.aspx_Preview_17" runat="server" />
</p>
<p id="previewBulletPoint4" class="ms-crm-of-previewText">
<img class="ms-crm-of-previewBulletImage" alt="" src="/_imgs/tools/ico_Blueicon_4.png"></img>
<loc:Text ResourceId="OptionalFeatures.aspx_Preview_18" runat="server" />
</p>
<p class="ms-crm-of-previewText ms-crm-of-previewBoldText">
<a id="previewLookAndFeelExampleLink" href="" target="_blank" rel="noopener noreferrer" class="ms-crm-of-inlineLink" runat="server">
<loc:Text ResourceId="OptionalFeatures.aspx_Preview_19" runat="server" />
</a>
</p>
</div>
</div>
</div>
</div>
</div>
<div id="popupPane1">
<div id="popupPaneContent1">
<div id="previewContentDiv1" tabindex="-1">
<div id="previewImageDiv1">
<img id="previewImage1" alt="" src="" runat="server" />
</div>
<div id="previewDescriptionDiv1">
<div id="previewCloseDiv1">
<a id="hidePreviewLink1" href="#">
<img id="hidePreviewLinkImage1" alt="" src="/_imgs/tools/ico_Close.png" runat="server" />
</a>
</div>
<div id="previewTextDiv1">
<h3 class="ms-crm-of-previewHeader">
<loc:Text ResourceId="OptionalFeatures.aspx_Preview_20" runat="server" />
</h3>
<p class="ms-crm-of-previewText ms-crm-of-previewBoldText">
<loc:Text ResourceId="OptionalFeatures.aspx_Preview_21" runat="server" />
</p>
<p id="p1" class="ms-crm-of-previewTextHeading">
<img class="ms-crm-of-previewBulletImage" alt="" src="/_imgs/tools/ico_Blueicon_1.png"></img>
<loc:Text ResourceId="OptionalFeatures.aspx_Preview_22" runat="server" />
</p>
<p id="p3" class="ms-crm-of-previewText2">
<loc:Text ResourceId="OptionalFeatures.aspx_Preview_24" runat="server" />
</p>
<p id="p4" class="ms-crm-of-previewText2">
<loc:Text ResourceId="OptionalFeatures.aspx_Preview_25" runat="server" />
</p>
<p id="p5" class="ms-crm-of-previewText2">
<loc:Text ResourceId="OptionalFeatures.aspx_Preview_26" runat="server" />
</p>
<p id="p2" class="ms-crm-of-previewTextHeading">
<img class="ms-crm-of-previewBulletImage" alt="" src="/_imgs/tools/ico_Blueicon_2.png"></img>
<loc:Text ResourceId="OptionalFeatures.aspx_Preview_23" runat="server" />
</p>
<p id="p6" class="ms-crm-of-previewText2">
<loc:Text ResourceId="OptionalFeatures.aspx_Preview_27" runat="server" />
</p>
<p id="p7" class="ms-crm-of-previewText2">
<loc:Text ResourceId="OptionalFeatures.aspx_Preview_28" runat="server" />
</p>
<p id="p8" class="ms-crm-of-previewText2">
<loc:Text ResourceId="OptionalFeatures.aspx_Preview_29" runat="server" />
</p>
<p class="ms-crm-of-previewText ms-crm-of-previewBoldText">
<a id="previewLookAndFeelExampleLink1" href="" target="_blank" rel="noopener noreferrer" class="ms-crm-of-inlineLink" runat="server">
<loc:Text ResourceId="OptionalFeatures.aspx_Preview_30" runat="server" />
</a>
</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div id="page2">
<h1 class="ms-crm-of-header ms-crm-of-page2-header">
<loc:Text ResourceId="OptionalFeatures.aspx_Title_21" runat="server" />
</h1>
<div id="controlSectionPage2">
<div id="buttonSectionPage2">
<a id="updateConfirmLink" href="#" class="ms-crm-of-button">
<loc:Text ResourceId="OptionalFeatures.aspx_Button_21" runat="server" />
</a>
<a id="updateCancelLink" href="#" class="ms-crm-of-button">
<loc:Text ResourceId="OptionalFeatures.aspx_Button_22" runat="server" />
</a>
</div>
</div>
</div>

<div id="page3">
<h2 id="firstHeaderPage3" class="ms-crm-of-subHeader">
<loc:Text ResourceId="OptionalFeatures.aspx_Subtitle_31" runat="server" />
</h2>
<p id="systemAvailabilityWarning2" class="ms-crm-of-note">
<loc:Text ResourceId="OptionalFeatures.aspx_Warning_31" runat="server" />
</p>
<div id="progressPanel">
<p id="progressStage1" class="ms-crm-of-progressItem">
<span id="progressAltTextStage1">&nbsp;</span>
<loc:Text ResourceId="OptionalFeatures.aspx_Progress_31" runat="server" />
</p>
<p id="progressStage2" class="ms-crm-of-progressItem">
<span id="progressAltTextStage2">&nbsp;</span>
<loc:Text ResourceId="OptionalFeatures.aspx_Progress_32" runat="server" />
</p>
<p id="progressStage3" class="ms-crm-of-progressItem">
<span id="progressAltTextStage3">&nbsp;</span>
<loc:Text ResourceId="OptionalFeatures.aspx_Progress_33" runat="server" />
</p>
</div>
<div id="videoSectionDiv" runat="server">
<h2 class="ms-crm-of-subHeader">
<loc:Text ResourceId="OptionalFeatures.aspx_Subtitle_32" runat="server" />
</h2>
<div id="videoDiv">
<object id="mediaPlayer" classid="clsid:6BF52A52-394A-11d3-B153-00C04F79FAA6">
<param name="url" value="<%= VideoLink %>" />
<param name="src" value="<%= VideoLink %>" />
<param name="autostart" value="false" />
<param name="showcontrols" value="true" />

<object type="video/x-ms-wmv" id="mediaPlayer1">
<param name="src" value="<%= VideoLink %>" />
<param name="autostart" value="false" />
<param name="showcontrols" value="true" />
</object>

</object>
</div>
</div>
</div>

<div id="page4">
<h1 class="ms-crm-of-header">
<loc:Text ResourceId="OptionalFeatures.aspx_Title_41" runat="server" />
</h1>
<div id="firstSubtitleDiv">
<h2 id="firstSubtitlePage4" class="ms-crm-of-subHeader">
<loc:Text ResourceId="OptionalFeatures.aspx_Subtitle_41" runat="server" />
</h2>
<a id="whatIsNewLink2" href="" target="_blank" rel="noopener noreferrer" class="ms-crm-of-note ms-crm-of-inlineLink" runat="server">
<loc:Text ResourceId="OptionalFeatures.aspx_Text_41" runat="server" />
</a>
</div>
</div>

<div id="page5">
<h2 id="firstHeaderPage5" class="ms-crm-of-subHeader">
<loc:Text ResourceId="OptionalFeatures.aspx_Subtitle_51" runat="server" />
</h2>
<p class="ms-crm-of-note">
<loc:Text ResourceId="OptionalFeatures.aspx_Text_51" runat="server" />
</p>
<div id="migrationWarningBoxPage5">
<p class="ms-crm-of-note">
<loc:Text ResourceId="OptionalFeatures.aspx_Warning_51" runat="server" />
<a id="customizationMigrationLink2" href="" target="_blank" rel="noopener noreferrer" class="ms-crm-of-inlineLink" runat="server">
<loc:Text ResourceId="OptionalFeatures.aspx_Warning_52" runat="server" />
</a>
</p>
</div>
<div id="progressBoxPage5">
<p id="enablingProgressItem" class="ms-crm-of-progressItem">
<loc:Text ResourceId="OptionalFeatures.aspx_EnablingNewFormsProgressText" runat="server" />
</p>
<p id="enabledProgressItem" class="ms-crm-of-progressItem">
<loc:Text ResourceId="OptionalFeatures.aspx_EnabledNewFormsProgressText" runat="server" />
</p>
</div>
<div id="controlSection1Page5">
<h2 class="ms-crm-of-subHeader">
<loc:Text ResourceId="OptionalFeatures.aspx_Subtitle_52" runat="server" />
</h2>
<div id="buttonSection1Page5">
<a id="enableFormsConfirmLink"  href="#" class="ms-crm-of-button">
<loc:Text ResourceId="OptionalFeatures.aspx_Button_51" runat="server" />
</a>
<a id="enableFormsCancelLink" href="#" class="ms-crm-of-button">
<loc:Text ResourceId="OptionalFeatures.aspx_Button_52" runat="server" />
</a>
</div>
</div>
<div id="controlSection2Page5">
<div id="buttonSection2Page5">
<a id="continueAfterEnablingFormsLink"  href="#" class="ms-crm-of-button">
<loc:Text ResourceId="OptionalFeatures.aspx_ContinueButtonPage5" runat="server" />
</a>
</div>
</div>
</div>

<div id="page6">
<h1 class="ms-crm-of-header">
<loc:Text ResourceId="OptionalFeatures.aspx_Subtitle_61" runat="server" />
</h1>
<p id="contentTextPage6" class="ms-crm-of-note">
<loc:Text ResourceId="OptionalFeatures.aspx_Text_61" runat="server" />
</p>
<p id="supportLinkPage6" class="ms-crm-of-note">
<a id="supportLink" href="" target="_blank" rel="noopener noreferrer" class="ms-crm-of-inlineLink" runat="server">
<loc:Text ResourceId="OptionalFeatures.aspx_Text_62" runat="server" />
</a>
</p>
<div id="buttonSectionPage6">
<a id="retryLink" href="#" class="ms-crm-of-button">
<loc:Text ResourceId="OptionalFeatures.aspx_Button_61" runat="server" />
</a>
</div>
</div>
</div>
</body>
</html>