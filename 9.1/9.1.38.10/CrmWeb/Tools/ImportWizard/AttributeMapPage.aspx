
<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.WebImport.AttributeMapPage" %>

<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<!DOCTYPE html>
<html>
<head>
	<cnt:AppHeader id="crmHeader" runat="server" />
	<style type="text/css">
		.MandatoryRow
		{
		}
		.OtherFieldsRow
		{
		}
		.EmptyRow
		{
		}
		.OtherFieldsSelectControl
		{
		}
		.DisabledControl
		{
		}
		
		.ms-crm-AttributeMapPage-InfoBar
		{
			position:absolute;
			top:0px;
			height:10%;
			left:0px;
			right:0px;
		}

		.ms-crm-AttributeMapPage-ContentBlock
		{
			position:absolute;
			top:10%;
			left:0px;
			right:0px;
			height:85%;
		}
		.ms-crm-AttributeMapPage-RecordTypeBlock
		{
			position:absolute;
			top:0px;
			<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ){ %>
			right:0px;
			<% } else { %>
			left: 0px;
			<% } %>
			width:29.5%;
			bottom:0px;
		}

		.ms-crm-AttributeMapPage-RecordTypHdr
		{
			position: absolute;
			color: white;
			font-weight: bold;
			background-color:rgb(85, 142, 213);
			height:29px;
			border:1PX SOLID #bfbfbf;
			position:absolute;
			top:0px;
			left:0px;
			right:0px;

		}
		.ms-crm-AttributeMapPage-RecordTypHdr_Cell1Text
		{
			position:absolute;
			top:6px;
			<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ){ %>
			right:5px;
			<% } else { %>
			left: 5px;
			<% } %>
		}
		.ms-crm-AttributeMapPage-RecordTypeBlockContent
		{
			border:1px solid #bfbfbf;
			background-color:rgb(198, 217, 241);
			position:absolute;
			overflow:auto;
			top:29px;
			left:0px;
			right:0px;
			bottom:0px;
		}
		.ms-crm-AttributeMapPage-RecordMapBlock
		{
			vertical-align:top;
			position:absolute;
			top:0px;
			<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ){ %>
			right:30%;
			left:0px;
			<% } else { %>
			left:30%;
			right:0px;
			<% } %>
			
			bottom:0px;
			border:#bfbfbf 1px solid;
		}
		.ms-crm-AttributeMapPage-MapInner
		{
			overflow:hidden;
			vertical-align:top;
			position:absolute;
			top:0px;
			left:0px;
			right:0px;
			bottom:0px;
		}
		.ms-crm-debugBlock
		{
			position:absolute;
			left:0px;
			right:0px;
			height:20px;
			display:block;
			bottom:0px;
		}
		tr.mscrm-iw-ContainerTable-Row tr,
		tr.mscrm-iw-ContainerTable-Row td
		{
			height:auto;
		}
		.ms-crm-AttributeMapPage-MapInnerHdr
		{
			position: absolute;
			color: white;
			font-weight: bold;
			background-color:rgb(85, 142, 213);
			height:29px;
			border-bottom:1PX SOLID #bfbfbf;
			position: absolute;
			top: 0px;
			left: 0px;
			right: 0px;
		}
		.ms-crm-AttributeMapPageMap
		{
			position: absolute;
			top: 29px;
			bottom: 0px;
			left: 0px;
			right: 0px;
			overflow:hidden;
		}

		.ms-crm-AttributeMapPage-MapInnerHdr_Cell1
		{
			position: absolute;
			top: 0px;
			bottom:0px;
			width: 50%;
			vertical-align:middle;

			<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ){ %>
			right:0px;
			<% } else { %>
			left: 0px;
			<% } %>

		}

		.ms-crm-AttributeMapPage-MapInnerHdr_Cell2
		{
			position: absolute;
			top: 0px;
			bottom: 0px;
			<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ){ %>
			right :50%;
			left: 0px;
			border-right: 1px solid #bfbfbf;
			<% } else { %>
			left :50%;
			right: 0px;
			border-left: 1px solid #bfbfbf;
			<% } %>
			vertical-align:middle;
		}
		.ms-crm-AttributeMapPage-MapInnerHdr_Cell1Text
		{
			position:absolute;
			top:5px;
			<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ){ %>
			right:30px;
			<% } else { %>
			left: 30px;
			<% } %>
		}
		.ms-crm-AttributeMapPage-MapInnerHdr_Cell2Text
		{
			position:absolute;
			top:5px;
			<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ){ %>
			right:0px;
			<% } else { %>
			left: 0px;
			<% } %>
		}

		.SelectEntityMsg
		{
			position:absolute;
			top:35px;
			left:0px;
			right:0px;
			text-align:center;
		}
		

	</style>
</head>
<!-- style="position:relative" is addded to fix the IE7 Resize issue. Bug# 170995 -->
<body style="position:relative" onload="OnBodyLoad()" onresize="OnAttributeMapPageResize();">
	<frm:WizardForm id="crmForm" runat="server">
		<div class="ms-crm-absolutePosition">
			<div class="ms-crm-AttributeMapPage-InfoBar">
				<table style="width:100%;"><tr><td> 
					<div id="InfoBalloon" class="mscrm-iw-InfoBarBlue" style="width:100%">
						<img id="InfoBalloonImage" src="" alt="" class="mscrm-iw-InfoBarBalloon"/>
						<span id="InfoBalloonText" class="mscrm-iw-InfoBarText"/>
					</div>
				</td></tr></table>
			</div>

			<div class="ms-crm-AttributeMapPage-ContentBlock">
				<div class="ms-crm-AttributeMapPage-RecordTypeBlock">
					<div class="ms-crm-AttributeMapPage-RecordTypHdr">
					<div class="ms-crm-AttributeMapPage-RecordTypHdr_Cell1Text">
								<nobr title="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(CurrentResourceManager.GetString("ImportWizard.AttributeMapPage.LeftColumnHeader"))%>">
									<loc:Text ResourceId="ImportWizard.AttributeMapPage.LeftColumnHeader" runat="server"/>
								</nobr>
					</div>
					</div>
					<div class="ms-crm-AttributeMapPage-RecordTypeBlockContent">
											<div class="mscrm-iw-OverFlowDiv mscrm-iw-DivGeneric">
												<ul id="entityList" class="mscrm-iw-AMP-EntityList" runat="server" />
											</div>
					</div>
				</div>
				<div class="ms-crm-AttributeMapPage-RecordMapBlock">
					<div id="selectEntityMessage" class="mscrm-iw-AMP-SelectEntityMessage SelectEntityMsg">
						<loc:Text ResourceId="ImportWizard.AttributeMapPage.SelectEntityMessage" runat="server"/>
					</div>
					<div id="progressDiv" class="mscrm-iw-ProgressDiv ms-crm-absolutePosition">
						<table class="mscrm-iw-ProgressTable" style="height:100%">
							<tr>
								<td valign='middle' align='center' style="height:100%">
									<img alt='' src='/_imgs/AdvFind/progress.gif' />
									<br />
									<label id="progressMessage">
										<loc:Text ResourceId="ImportWizard.AttributeMapPage.AttributeMapSection.ProgressMessage" runat="server"/>
									</label>
								</td>
							</tr>
						</table>
					</div>
					<div id="attributeMapArea" class="ms-crm-AttributeMapPage-MapInner">
					 <div class="ms-crm-AttributeMapPage-MapInnerHdr">
								<div class="ms-crm-AttributeMapPage-MapInnerHdr_Cell1" tabindex=0>
									<div  class="ms-crm-AttributeMapPage-MapInnerHdr_Cell1Text">
									<nobr title="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(CurrentResourceManager.GetString("ImportWizard.AttributeMapPage.RightColumnHeaders.Column1"))%>">
										<loc:Text ResourceId="ImportWizard.AttributeMapPage.RightColumnHeaders.Column1" runat="server"/>
									</nobr>
									</div> 
								</div>
								<div class="ms-crm-AttributeMapPage-MapInnerHdr_Cell2" tabindex=0>
										<div class="ms-crm-AttributeMapPage-MapInnerHdr_Cell1" >
											<div  class="ms-crm-AttributeMapPage-MapInnerHdr_Cell1Text">
											<nobr title="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(CurrentResourceManager.GetString("ImportWizard.AttributeMapPage.RightColumnHeaders.Column2"))%>">
												<loc:Text ResourceId="ImportWizard.AttributeMapPage.RightColumnHeaders.Column2" runat="server"/>
											</nobr>
											</div>
										</div>
										<div class="ms-crm-AttributeMapPage-MapInnerHdr_Cell2" style="border-left:0px;border-right:0px;" >
											<div class="ms-crm-AttributeMapPage-MapInnerHdr_Cell2Text" >
											<!-- need this invisible label for JAWS readability-->
											<label for="fieldView" style="display:none">
												<loc:Text ResourceId="ImportWizard.AttributeMapPage.FieldViewSelector.Tooltip" runat="server"/>
											</label>
											<ui:Select id="fieldView" onchange="javascript:Mscrm.AttributeMapPage.onAttributeMapViewChanged()" runat="server" />
											</div>
										</div>  
								</div>
							</div>
							<div class="ms-crm-AttributeMapPageMap">
							<div id="attributeMapCell" class="ms-crm-absolutePosition" style="overflow:auto;">
<!---------------------------------------------------------Create Attribute Div Section -------------------------------------------------------------------->
<div id="createAttributeDiv" class="mscrm-iw-PopupDiv">
	<div class="mscrm-iw-PopupDivInner">
		<table width="100%" cellpadding="0" cellspacing="0">
			<tr class="mscrm-iw-AMP-PopupHeader">
				<td>
					<span id="createAttributeDivTitle" class="mscrm-iw-AMP-PopupTitle"></span>
				</td>
				<td>
					<span class="mscrm-iw-AMP-CrossImage">
						<a id="closeCreateDivLink" onclick="Mscrm.AttributeMapPage.createNewOnCancel();" ><img src="/_imgs/importwizard_cross.gif" /></a>
					</span>
				</td>
			</tr>
		</table>
		<table class="mscrm-iw-TableGenericWidth">
			<col width="4%" />
			<colgroup>
				<col width="50%" />
				<col width="50%" />
			</colgroup>

			<tr>
				<td />
				<td>
					<span class="mscrm-iw-PopupDivElement">
						<label for="attributeDisplayName">
							<nobr title="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(CurrentResourceManager.GetString("ImportWizard.AttributeMapPage.NewAttributeDiv.DisplayNameLabel"))%>">
								<loc:Text ResourceId="ImportWizard.AttributeMapPage.NewAttributeDiv.DisplayNameLabel" runat="server"/>
							</nobr>
						</label>
					</span>
				</td>
				<td>
					<span class="mscrm-iw-PopupDivElement">
						<label for="attributeType">
							<nobr title="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(CurrentResourceManager.GetString("ImportWizard.AttributeMapPage.NewAttributeDiv.TypeLabel"))%>">
								<loc:Text ResourceId="ImportWizard.AttributeMapPage.NewAttributeDiv.TypeLabel" runat="server"/>
							</nobr>
						</label>
					</span>
				</td>
			</tr>
			<tr>
				<td />
				<td>
					<span class="mscrm-iw-PopupDivElement">
						<ui:textbox id="attributeDisplayName" maxLength="45" runat="server" />
					</span>
				</td>
				<td>
					<span class="mscrm-iw-PopupDivElement">
						<ui:select id="attributeType" runat="server"/>
					</span>
				</td>
			</tr>
			<tr id="lookupLabels" style="display: none;">
				<td />
				<td>
					<span class="mscrm-iw-PopupDivElement">
						<label for="lookupEntities">
							<nobr title="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(CurrentResourceManager.GetString("ImportWizard.AttributeMapPage.NewAttribute.LookupEntity"))%>">
								<loc:Text ResourceId="ImportWizard.AttributeMapPage.NewAttribute.LookupEntity" runat="server"/>
							</nobr>
						</label>
					</span>
				</td>
				<td>
					<span class="mscrm-iw-PopupDivElement">
						<nobr title="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(CurrentResourceManager.GetString("ImportWizard.AttributeMapPage.NewAttribute.LookupAttribute"))%>">
							<loc:Text ResourceId="ImportWizard.AttributeMapPage.NewAttribute.LookupAttribute" runat="server"/>
						</nobr>
					</span>
				</td>
			</tr>
			<tr id="lookupEntityAttributeList" style="display: none;">
				<td />
				<td>
					<span class="mscrm-iw-PopupDivElement">
						<ui:select id="lookupEntities" onchange="Mscrm.AttributeMapPage.lookupEntityChanged();" runat="server"/>
					</span>
				</td>
				<td>
					<span class="mscrm-iw-PopupDivElement" id="lookupAttributes">
					</span>
				</td>
			</tr>
			<tr id="newDivPicklistMappings" style="display: none;">
				<td />
				<td colspan="2">
					<table id="newDivPicklistSourceFieldList" class="mscrm-iw-TableGenericWidth">
						<col width="50%" />
						<col width="30%"/>
						<tr>
							<td>
								<span class="mscrm-iw-PopupDivElement">
									<label>
										<nobr title="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(CurrentResourceManager.GetString("ImportWizard.AttributeMapPage.PickList.SourceAttribute"))%>">
											<loc:Text ResourceId="ImportWizard.AttributeMapPage.PickList.SourceAttribute" runat="server"/>
										</nobr>
									</label>
								</span>
							</td>
							<td>
								<span class="mscrm-iw-PopupDivElement">
									<label>
										<nobr title="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(CurrentResourceManager.GetString("ImportWizard.AttributeMapPage.PickList.PicklistAttribute"))%>">
											<loc:Text ResourceId="ImportWizard.AttributeMapPage.PickList.PicklistAttribute" runat="server"/>
										</nobr>
									</label>
								</span>
							</td>
						</tr>
					</table>
				</td>
			</tr>
		</table>
		<table width="96%">
		<tr id="newAttributeErrorRow" style="display:none">
			<td>
				<span id="newAttributeErrorMessage"></span>
			</td>
		</tr>

			<tr>
				<td>
					<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft){ %>
					<div align="left">
					<%}else{ %>
					<div align="right">
					<%} %>
						<ui:Button id="buttonCreateOK" onclick="Mscrm.AttributeMapPage.createNewOnOk();" ResourceId="Button_Label_OK" runat="server" />
						&nbsp;<ui:Button id="buttonCreateCancel" onclick="Mscrm.AttributeMapPage.createNewOnCancel();" ResourceId="Button_Label_Cancel" runat="server" />
					</div>
				</td>
			</tr>
		</table>
	</div>
	<![if lte IE 6.5]><iframe scroll=none></iframe><![endif]>
</div>
<!---------------------------------------------------------End Create Attribute Div Section -------------------------------------------------------------------->
<!---------------------------------------------------------Start Lookup Mapping Div Section -------------------------------------------------------------------->
	<div id="lookupMappingDiv" class="mscrm-iw-PopupDiv">
	<div class="mscrm-iw-PopupDivInner">
		<table width="100%" cellpadding="0" cellspacing="0">
			<tr class="mscrm-iw-AMP-PopupHeader">
				<td>
					<span id="lookupMappingDivTitle" class="mscrm-iw-AMP-PopupTitle"></span>
				</td>
				<td>
					<span class="mscrm-iw-AMP-CrossImage">
						<a tabindex="0" id="closeLookupDivLink" onclick="Mscrm.AttributeMapPage.processLookupMappingOnCancel();" ><img src="/_imgs/importwizard_cross.gif" /></a>
					</span>
				</td>
			</tr>
		</table>
		<table class="mscrm-iw-TableGenericWidth">
			<col width="4%" />
			<col />
			<tr>
				<td />
				<td>
					<table id="lookupDivEntityAttributeList" class="mscrm-iw-TableGenericWidth">
						<col width="40%" />
						<col width="60%" />
						<tr>
							<td>
								<span class="mscrm-iw-PopupDivElement">
									<label>
										<nobr title="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(CurrentResourceManager.GetString("ImportWizard.AttributeMapPage.NewAttribute.LookupEntity"))%>">
											<loc:Text ResourceId="ImportWizard.AttributeMapPage.NewAttribute.LookupEntity" runat="server"/>
										</nobr>
									</label>
								</span>
							</td>
							<td>
								<span class="mscrm-iw-PopupDivElement">
									<nobr title="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(CurrentResourceManager.GetString("ImportWizard.AttributeMapPage.NewAttribute.LookupAttribute"))%>">
										<loc:Text ResourceId="ImportWizard.AttributeMapPage.NewAttribute.LookupAttribute" runat="server"/>
									</nobr>
								</span>
							</td>
						</tr>
					</table>
				</td>
			</tr>
		</table>
		<table width="96%">
			<tr>
				<td>
					<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft){ %>
					<div align="left">
					<%}else{ %>
					<div align="right">
					<%} %>
						<ui:Button ID="buttonLookupDivOK" OnClick="Mscrm.AttributeMapPage.processLookupMappingOnOk();" ResourceId="Button_Label_OK" runat="server" />
						&nbsp;<ui:Button ID="buttonLookupDivCancel" OnClick="Mscrm.AttributeMapPage.processLookupMappingOnCancel();" ResourceId="Button_Label_Cancel" runat="server" />
					</div>
				</td>
			</tr>
		</table>
	</div>
	<![if lte IE 6.5]><iframe scroll=none></iframe><![endif]>
</div>
<!---------------------------------------------------------End Lookup Mapping Div Section -------------------------------------------------------------------->
<!---------------------------------------------------------Start Picklist Mapping Div Section -------------------------------------------------------------------->
	<div id="picklistMappingDiv" class="mscrm-iw-PopupDiv">
	<div class="mscrm-iw-PopupDivInner">
		<table width="100%" cellpadding="0" cellspacing="0">
			<tr class="mscrm-iw-AMP-PopupHeader">
				<td>
					<span id="picklistMappingDivTitle" class="mscrm-iw-AMP-PopupTitle"></span>
				</td>
				<td>
					<span class="mscrm-iw-AMP-CrossImage">
						<a id="closePicklistDivLink" onclick="Mscrm.AttributeMapPage.processPicklistMappingOnCancel();" ><img src="/_imgs/importwizard_cross.gif" /></a>
					</span>
				</td>
			</tr>
		</table>
		<table class="mscrm-iw-TableGenericWidth">
			<col width="4%" />
			<col />
			<tr>
				<td />
				<td>
					<table id="picklistDivSourceFieldList" class="mscrm-iw-TableGenericWidth">
						<col width="50%" />
						<col width="25%"/>
						<tr>
							<td>
								<span class="mscrm-iw-PopupDivElement">
									<label>
										<nobr title="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(CurrentResourceManager.GetString("ImportWizard.AttributeMapPage.PickList.SourceAttribute"))%>">
											<loc:Text ResourceId="ImportWizard.AttributeMapPage.PickList.SourceAttribute" runat="server"/>
										</nobr>
									</label>
								</span>
							</td>
							<td>
								<span class="mscrm-iw-PopupDivElement">
									<label>
										<nobr title="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(CurrentResourceManager.GetString("ImportWizard.AttributeMapPage.PickList.PicklistAttribute"))%>">
											<loc:Text ResourceId="ImportWizard.AttributeMapPage.PickList.PicklistAttribute" runat="server"/>
										</nobr>
									</label>
								</span>
							</td>
						</tr>
					</table>
				</td>
			</tr>
		</table>
		 <table width="96%">
		 <tr id="picklistErrorRow" style="display:none">
			<td>
				<span id="picklistErrorMessage"></span>
			</td>
		 </tr>
			<tr>
				<td>
					<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft){ %>
					<div align="left">
					<%}else{ %>
					<div align="right">
					<%} %>
						<ui:Button id="buttonPicklistDivOK" onclick="Mscrm.AttributeMapPage.processPicklistMappingOnOk();" ResourceId="Button_Label_OK" runat="server" />&nbsp;
						<ui:Button id="buttonPicklistDivCancel" onclick="Mscrm.AttributeMapPage.processPicklistMappingOnCancel();" ResourceId="Button_Label_Cancel" runat="server" />
					</div>
				</td>
			</tr>
		</table>
	</div>
	<![if lte IE 6.5]><iframe scroll=none"></iframe><![endif]>
</div>
<!---------------------------------------------------------End Picklist Mapping Div Section -------------------------------------------------------------------->
							</div>
						</div>
					</div>
				</div>
				</div>
</div>







































		</div> 
	</frm:WizardForm>
</body>
</html>
