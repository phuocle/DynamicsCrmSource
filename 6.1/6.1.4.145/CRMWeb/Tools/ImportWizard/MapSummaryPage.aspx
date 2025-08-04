<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.WebImport.MapSummaryPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ register tagprefix="frm" namespace="Microsoft.Crm.Application.Forms" assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<!DOCTYPE html>
<html>
<head>
	<cnt:AppHeader id="crmHeader" runat="server" />
	<script language="javascript" type="text/javascript">
		var cancelClicked = false;
		function OnBeforeWindowUnload(oEvent)
		{
			oEvent = oEvent.rawEvent;
			
			if (cancelClicked) 
			{
				if (WizardGetProperty("MapChanged") == true)
				{
					oEvent.returnValue = LOCID_MAPPING_WILLBE_LOST;
					return LOCID_MAPPING_WILLBE_LOST;
				}
			}
			else
			{
				oEvent.returnValue = " ";
				return " ";
			}
		}
		// #region Wizard Container Methods
		function OnCancelClicked() 
		{
		    cancelClicked = true;
			WizardNavigate(_WizardNavigateEnum.CANCEL);
		}
		
        function moveBack() 
        {
            detachWindowOnBeforeUnload(OnBeforeWindowUnload, parent.window);
            WizardNavigate(_WizardNavigateEnum.BACK);
		}
		Sys.Application.add_load(onLoad);
		function onLoad()
		{
			var cancelBtn = document.getElementById("buttonCancel");
			cancelBtn.onclick = OnCancelClicked;
			document.getElementById("buttonBack").onclick = moveBack;
			//This will happen only if the mapped target entity has been deleted or privileges have been removed.
			//We need to disable moving to attribute map page in this case. The edit button will take user to entity map page, which is desired behavior.
			if (unmappedEntityCount > 0) 
			{
				WizardSetButtonEnabled(false, _WizardButtonsEnum.NEXTBUTTON);
				WizardSetButtonEnabled(false, _WizardButtonsEnum.BACKBUTTON);
			}
            if (!WantToSkip()) 
            {
                attachWindowOnUnload(OnWizardUnload, parent.window);
                attachWindowOnBeforeUnload(OnBeforeWindowUnload, parent.window);
            }
		}
		function GetNextPageDefinition()
		{
			var nextPageUrl = GetNextWizardPageUrl("MapSummaryPage");
			var propertiesList = new Array("MapXml");
			var postData = ConstructPostData(propertiesList);
			return new NextPageDefinition(nextPageUrl, postData);
		}
		
		function GetPreviousPageDefinition(existingDefinition)
		{
			var backUrl = existingDefinition["Url"];
			var postData = ConstructPostData(new Array("ImportId", "ImportMapId", "MapXml", "JumpBackToEntityMappingPage"));
			return new NextPageDefinition(backUrl, postData);
		}
		function EditMap() 
		{
			WizardSetProperty("WizardMode", 1);
			WizardSetProperty("JumpBackToEntityMappingPage", true);
			detachWindowOnBeforeUnload(OnBeforeWindowUnload, parent.window);
			WizardNavigate(_WizardNavigateEnum.BACK);
		}
		
		function WantToSkip()
		{
			// JumpBackToDataSourcePage property can be true only in a move back situation AND when wizard mode is 0 (see onload of Customize Import Page).
			// JumpBackToEntityMappingPage property can be true only if job submission on customize import page resulted in an error
			// JumpBackToAttributeMappingPage property can be true only if job submission on customize import page resulted in an error
			if (WizardGetProperty("JumpBackToEntityMappingPage") == true || WizardGetProperty("JumpBackToAttributeMappingPage") == true || WizardGetProperty("JumpBackToDataSourcePage") == true)
			{
				return true;
			}
			else
			{
				return false;
			}
		}
		//#endregion
		//WizardForm Next button calls this method.
		function moveNext() 
        {
		    detachWindowOnBeforeUnload(OnBeforeWindowUnload, parent.window);
			WizardNavigate(_WizardNavigateEnum.NEXT);
		}
	</script>
    <style>
    .ms-crm-MapSummaryContent
    {
        position:absolute;
        top:0px;
        bottom:70px;
        left:0px;
        right:0px;
    }
    
    .ms-crm-MapSummaryEditButton
    {
        position:absolute;
        height:40px;
        bottom:20px;
        left:0px;
        right:0px;
    }
    
    .ms-crm-MapSummaryDebugDiv
    {
        position:absolute;
        height:20px;
        bottom:0px;
        left:0px;
        right:0px;
    }
    
    .ms-crm-MapSummaryContentHeader
    {
        position: absolute;
        color: #376092;
        font-weight: bold;
        background-color:rgb(242, 242, 242); 
        top: 0px;
        height: 25px;
        left: 0px;
        right: 0px;
        border-bottom: 1px solid #bfbfbf;
    }
    .ms-crm-MapSummaryMap
    {
        position: absolute;
        top: 25px;
        bottom: 0px;
        left: 0px;
        right: 0px;
    }
        
    .ms-crm-MapSummaryContentHeader_Cell1
    {
        position: absolute;
        top: 0px;
        <% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ){ %>
        right:0px;
        <% } else { %>
        left: 0px;
        <% } %>
        bottom:0px;
        width: 50%;
        vertical-align:middle;
    }
        
    .ms-crm-MapSummaryContentHeader_Cell2
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
    .ms-crm-MapSummaryContentHeader_Cell1Text
    {
        position:absolute;
        top:5px;
        <% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ){ %>
        right:30px;
        <% } else { %>
        left: 30px;
        <% } %>
    }
    .ms-crm-MapSummaryContentHeader_Cell2Text
    {
        position:absolute;
        top:5px;
        <% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ){ %>
        right:10px;
        <% } else { %>
        left: 10px;
        <% } %>
    }
    
</style>
</head>
<body>
<frm:WizardForm id="crmForm" runat="server">
<div id="mainBody" class="mscrm-iw-DivGeneric">
	<div class="ms-crm-absolutePosition">
        <div class="ms-crm-MapSummaryContent">
				<div class="mscrm-iw-Border mscrm-iw-DivGeneric ms-crm-absolutePosition">
					 <div class="ms-crm-MapSummaryContentHeader">
								<div class="ms-crm-MapSummaryContentHeader_Cell1" tabindex=0>
								<div  class="ms-crm-MapSummaryContentHeader_Cell1Text">
								<nobr>
									<loc:Text ResourceId="ImportWizard.EntityMapPage.Label.SourceDataFile" runat="server" />
								</nobr>
							    </div> 
								</div>
								<div class="ms-crm-MapSummaryContentHeader_Cell2" tabindex=0>
								<div class="ms-crm-MapSummaryContentHeader_Cell2Text" >
								<nobr>
									<loc:Text ResourceId="ImportWizard.EntityMapPage.Label.CrmEntity" runat="server" />
								</nobr>
						        </div> 
								</div>
					</div>
					<div class="mscrm-iw-OverFlowDiv ms-crm-MapSummaryMap">
								<div class="mscrm-iw-OverFlowDiv mscrm-iw-DivGeneric">
									<table cellpadding="0" cellspacing="0" width="100%">
										<tr>
											<td>
												<table id="entityMappingSummaryTable" class="mscrm-iw-TableGeneric" cellpadding="0" cellspacing="0" runat="server" >
												</table>
											</td>
										</tr>
										<tr>
											<td />
										</tr>
									</table>
								</div>
							</div>
				</div>
		</div>
        <div class="ms-crm-MapSummaryEditButton">
				<table id="editButtonTable" cellpadding="2" cellspacing="2" style="width:100%">
					<tr>
						<td valign="top" width="5%">
							<img alt='' src='/_imgs/importwizard_yellowwarning.gif'>
						</td>
						<td valign="top" width="75%">
							<loc:Text ResourceId="ImportWizard.MapSummaryPage.Disclaimer" runat="server"/>
						</td>
						<td valign="top" width="20%" class="attrMap_td_MapFile">
							<ui:Button ID="btn_id_edit" OnClick="EditMap();" ResourceId="ImportWizard.ConfirmMappingPage.EditMap" runat="server"></ui:Button>
						</td>
					</tr>
				</table>
		</div>
    </div>
</div>	
</frm:WizardForm>
</body>
</html>
