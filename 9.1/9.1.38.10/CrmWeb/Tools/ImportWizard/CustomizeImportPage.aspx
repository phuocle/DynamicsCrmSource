
<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.WebImport.CustomizeImportPage" %>

<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web"
	Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<!DOCTYPE html>
<html>
<head>
	<cnt:AppHeader id="crmHeader" runat="server" />

	<script language="javascript" type="text/javascript">

		var NoErrorCustomization = 0;
		var ErrorEntityCustomization = 1;
		var ErrorAttributeCustomization = 2;
		var ErrorPicklistCustomization = 4;
		var ErrorPublishCustomization = 3;

		var customizationLevel;

		var cancelClicked = false;
		var importSubmitted = false;

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
		function GetNextPageDefinition()
		{
			var nextPageUrl = GetNextWizardPageUrl("CustomizeImportPage");
			return new NextPageDefinition(nextPageUrl);
		}

		function WantToSkip()
		{
			false;
		}

		//WizardForm Next button calls this method.
		function moveNext()
		{
			if (importSubmitted == true)
			{
				SetProgressMessageDisplayState(true);
				saveMapAndProceed();
				return;
			}
			disableAllButtons();
			SetProgressMessageDisplayState(true);
			UpdateImportSettings();
			customizationLevel = customizationsPresent();
			if (customizationLevel != Mscrm.CustomizationLevel.customizationNone)
			{
				setProgressMessage(LOCID_CUSTOMIZING_PROGRESS_MESSAGE);
				CallImportWebService("ImportCustomizationsFromMap", new Array("MapXml"), customizationsDone);
			}
			else
			{
				SubmitImportJob();
			}
		}
		
		function saveMapAndProceed()
		{
			document.getElementById("txtMapName").value = Trim(document.getElementById("txtMapName").value);
			var mapName=document.getElementById("txtMapName").value;
			if (isNullOrEmptyString(mapName))
			{
				// we do not need to save if the mapname is not specified
				WizardSetProperty("CustomizationLevel", customizationLevel);
				detachWindowOnBeforeUnload(OnBeforeWindowUnload, parent.window);
                WizardNavigate(_WizardNavigateEnum.NEXT);
				return;
			}
			
			var command = new RemoteCommand("ImportWebService", "UpdateMapName");
			command.SetParameter("mapName", mapName);
			command.SetParameter("importMapId", WizardGetProperty("ImportMapId"));
			command.ErrorHandler = SaveMapErrorHandler;
			// Execute the command and get the result
			oResult = command.Execute();
			if (oResult.Success == true)
			{
				WizardSetProperty("CustomizationLevel", customizationLevel);
                detachWindowOnBeforeUnload(OnBeforeWindowUnload, parent.window);
				WizardNavigate(_WizardNavigateEnum.NEXT);
				return;
			}
			else
			{
				enableAllButtons();
				WizardSetButtonEnabled(false, _WizardButtonsEnum.BACKBUTTON);
				document.getElementById("assignTo").disabled = true;
				document.getElementById("deDupDisabled").disabled = true;
				document.getElementById("deDupEnabled").disabled = true;
				SetProgressMessageDisplayState(false);
			}
		}
		
		function SaveMapErrorHandler(sHResult, oXmlNode)
		{
			if (sHResult == "0x" + LOCID_DUPLICATE_MAP_ERRORCODE)
				alert(LOCID_DUPLICATE_MAP_EXISTS);
			else
				RemoteCommandDefaultErrorHandler(sHResult, oXmlNode);
		}

		//#endregion
		
		function moveBack()
		{
			UpdateImportSettings();
            detachWindowOnBeforeUnload(OnBeforeWindowUnload, parent.window);
			WizardNavigate(_WizardNavigateEnum.BACK);
		}
		
		function SubmitImportJob()
		{
			var propertiesToPost = new Array("ImportId", "ImportMapId", "MapXml", "MapChanged", "DataDelimiter", "FieldDelimiter", "IsFirstRowHeader", "DuplicateDetection", "DefaultOwner", "DefaultOwnerType", "ImportType", "HeaderColumnIndexesToBeIgnored");
			CallImportWebService("SubmitImportJob", propertiesToPost, jobSubmissionDone);
		}
		
		//Callback for SubmitImportJob async web service call
		function jobSubmissionDone(oResult)
		{
			if(oResult.Success == true)
			{
				WizardSetProperty("ImportMapId", '{' + oResult.ReturnValue + '}');
				WizardSetProperty("IsImportJobSubmitted", 'true');
				importSubmitted = true;
				saveMapAndProceed();
			}
			else
			{
				enableAllButtons();
				SetProgressMessageDisplayState(false);
			}
		}
		function setProgressMessage(messageToSet)
		{
			document.getElementById("progressMessage").innerHTML=messageToSet;
		}

		//Callback for ImportCustomizationsFromMap async web service call
		function customizationsDone(oResult)
		{
			if(oResult.Success == true)
			{
				WizardSetProperty("MapXml", oResult.ReturnValue);
				cusotomizationsLeft = checkForCustomizationErrors(oResult.ReturnValue);
				if (cusotomizationsLeft == NoErrorCustomization)
				{
					setProgressMessage(LOCID_PROGRESS_MESSAGE);
					SubmitImportJob();
				}

				else
				{
					WizardSetProperty("JumpBackToDataSourcePage", false);
					WizardSetProperty("WizardMode",1);
					if(cusotomizationsLeft == ErrorPublishCustomization)
					{
						WizardSetButtonEnabled(true, _WizardButtonsEnum.CANCELBUTTON);
						SetProgressMessageDisplayState(false);
						return;
					}
					if (cusotomizationsLeft == ErrorAttributeCustomization || cusotomizationsLeft == ErrorPicklistCustomization)
					{
						WizardSetProperty("JumpBackToAttributeMappingPage", true);
					}
					if (cusotomizationsLeft == ErrorEntityCustomization)
					{
						WizardSetProperty("JumpBackToEntityMappingPage", true);
					}
					moveBack();
				}
			}
			else
			{
				WizardSetButtonEnabled(true, _WizardButtonsEnum.CANCELBUTTON);
				SetProgressMessageDisplayState(false);
			}
		}
		
		function checkForCustomizationErrors(mapXml)
		{
			var mapXmlDoc = XUI.Xml.LoadXml(mapXml);
			

			var publishErrorNode = XUI.Xml.SelectSingleNode(mapXmlDoc, "/Map/Customizations/PublishError/ErrorMessage", null);
			if ( !IsNull(publishErrorNode) )
			{
				alert(LOCID_ERROR_PUBLISH);
				return ErrorPublishCustomization;
			}
			
			var picklistCustomizationErrorNode = XUI.Xml.SelectSingleNode(mapXmlDoc, "/Map/Customizations/PicklistCustomizationError/ErrorMessage", null);
			if ( !IsNull(picklistCustomizationErrorNode) )
			{
				var entityNameNode = XUI.Xml.SelectSingleNode(mapXmlDoc, "/Map/Customizations/PicklistCustomizationError/EntityDisplayName", null);
				var attribNameNode = XUI.Xml.SelectSingleNode(mapXmlDoc, "/Map/Customizations/PicklistCustomizationError/AttributeDisplayName", null);
				var errorMessage = formatString(LOCID_ERROR_PICKLIST_CREATE, XUI.Xml.GetText(entityNameNode), XUI.Xml.GetText(attribNameNode), XUI.Xml.GetText(picklistCustomizationErrorNode));

				alert(errorMessage);
				// TODO: When is this node removed?
				return ErrorPicklistCustomization;
			}
			
			var attributeErrorNode = XUI.Xml.SelectSingleNode(mapXmlDoc, "/Map/Customizations/Entities/Entity/Attributes/Attribute/CustomizationError/ErrorMessage", null);
			if (!IsNull(attributeErrorNode))
			{
				var attributeCustomizationNode = attributeErrorNode.parentNode.parentNode;
				var attributeName = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(attributeCustomizationNode, "CustomizationXml/attribute/displayname", null));
				var errorMessage = formatString(LOCID_ERROR_ATTRIBUTE_CREATION, attributeName, XUI.Xml.GetText(attributeErrorNode));

				alert(errorMessage);
				return ErrorAttributeCustomization;
			}
			else
			{
				var entityErrorNode = XUI.Xml.SelectSingleNode(mapXmlDoc, "/Map/Customizations/Entities/Entity/CustomizationError/ErrorMessage", null);
				if (!IsNull(entityErrorNode))
				{
					var entityCustomizationNode = entityErrorNode.parentNode.parentNode;
					var entityName = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(entityCustomizationNode, "CustomizationXml/DisplayName", null));
					var errorMessage = formatString(LOCID_ERROR_ENTITY_CREATION, entityName, XUI.Xml.GetText(entityErrorNode));

					alert(errorMessage);
					return ErrorEntityCustomization;
				}
			}
			return NoErrorCustomization;
		}
		
		// Checks if customization node is present in the mapXml
		// and returns the appropriate value
		function customizationsPresent()
		{
			var mapXmlDoc = XUI.Xml.LoadXml(WizardGetProperty("MapXml"));
			

			var customizationNode = XUI.Xml.SelectSingleNode(mapXmlDoc, "/Map/Customizations", null);
			if (IsNull(customizationNode))
			{
				// Customization node is not present. Check if picklist customization is needed
				var picklistCreateNode = XUI.Xml.SelectSingleNode(mapXmlDoc, "/Map/EntityMaps/EntityMap[not(@Unused)]/AttributeMaps/AttributeMap[not(@Unused)]/PicklistMaps/PicklistMap[ProcessCode='"+ImportEntityProcessCode_Create+"']", null);
				if(IsNull(picklistCreateNode))
					return Mscrm.CustomizationLevel.customizationNone;
				else
					return Mscrm.CustomizationLevel.customizationPicklist;
			}
			else
			{
				var entityCustomizationNode = XUI.Xml.SelectNodes(customizationNode, "Entities/Entity/CustomizationXml", null);
				if (entityCustomizationNode.length > 0)
				{
					// node to create new entity is present
					return Mscrm.CustomizationLevel.customizationEntity;
				}
			}
			// Only new attributes are to be created
			return Mscrm.CustomizationLevel.customizationAttribute;
		}
		
		function UpdateImportSettings()
		{
			if(document.getElementById("deDupDisabled").checked == true)
				WizardSetProperty("DuplicateDetection", false);
			else
				WizardSetProperty("DuplicateDetection", true);
				
			if (!IsNull(Mscrm.FormControlInputBehavior.GetBehavior("assignTo").get_dataValue()) && !IsNull(Mscrm.FormControlInputBehavior.GetBehavior("assignTo").get_dataValue()[0]))
			{
				WizardSetProperty("DefaultOwner", Mscrm.FormControlInputBehavior.GetBehavior("assignTo").get_dataValue()[0].id);
				WizardSetProperty("DefaultOwnerType", Mscrm.FormControlInputBehavior.GetBehavior("assignTo").get_dataValue()[0].type);
				WizardSetProperty("OwnerDisplayName", Mscrm.FormControlInputBehavior.GetBehavior("assignTo").get_dataValue()[0].name);

			}
			else
			{
				WizardSetProperty("OwnerDisplayName", null);
			}
			
			document.getElementById("txtMapName").value = Trim(document.getElementById("txtMapName").value);
			var mapName=document.getElementById("txtMapName").value;
			if (isNullOrEmptyString(mapName) == false)
			{
				WizardSetProperty("ImportMapName", mapName);
			}
		}
		
		function OnCancelClicked() 
		{
			cancelClicked = true;
			WizardNavigate(_WizardNavigateEnum.CANCEL);
		}

		Sys.Application.add_load(PageOnLoad);
		function PageOnLoad()
		{
			SetProgressMessageDisplayState(false);
		
			var cancelBtn = document.getElementById("buttonCancel");
			cancelBtn.onclick = OnCancelClicked;
			
		<% if(Microsoft.Crm.Security.Organization.CurrentSettings.IsDuplicateDetectionEnabled == false || Microsoft.Crm.Security.Organization.CurrentSettings.IsDuplicateDetectionEnabledForImport == false) { %>
			document.getElementById("duplicateDetectionSection").style.display="none";
			document.getElementById("duplicateDetectionSectionHeader").style.display="none";
			document.getElementById("duplicateDetectionDisabled").style.display="block";
		<% }  %>
		
			Mscrm.FormControlInputBehavior.GetElementBehavior($get('assignTo')).add_change(OwnerChanged);
							
			var dupDetectStatus = WizardGetProperty("DuplicateDetection");
			var defaultOwner = WizardGetProperty("DefaultOwner");
			var defaultOwnerType = WizardGetProperty("DefaultOwnerType");
			var ownerName = WizardGetProperty("OwnerDisplayName");
			
			var importType = WizardGetProperty("ImportType");
			if(importType == ImportType_Update)
			{
				document.getElementById("infoBalloon").style.display="block";
				document.getElementById("infoBalloonImage").alt='<% =CurrentResourceManager.GetString("ImportWizard.CustomizeImportPage.UpdateViaImportWarning") %>';
			}
			else
			{
				document.getElementById("infoBalloon").style.display="none";
			}
			
			if (!IsNull(dupDetectStatus))
			{
				document.getElementById("deDupDisabled").checked = !dupDetectStatus;
			}
			if (!IsNull(defaultOwner)
				&& !IsNull(defaultOwnerType)
				&& !IsNull(ownerName))
			{
				// Preserve the previous selection over back-nexts
				var lookupItem = new LookupControlItem(defaultOwner, defaultOwnerType, ownerName);
				var lookupItems = new Array();
				lookupItems.push(lookupItem);
				Mscrm.FormControlInputBehavior.GetBehavior("assignTo").set_dataValue(lookupItems);
			}
			if (WizardGetProperty("MapChanged") == true)
			{
				document.getElementById("saveMap").style.display = "block";
			}
			else
			{
				document.getElementById("saveMap").style.display = "none";
			}
			
			if (isNullOrEmptyString(WizardGetProperty("ImportMapName")) == false)
			{
				document.getElementById("txtMapName").value = WizardGetProperty("ImportMapName");
			}

            if (!WantToSkip()) 
            {
			    attachWindowOnUnload(OnWizardUnload, parent.window);
			    attachWindowOnBeforeUnload(OnBeforeWindowUnload, parent.window);
            }
		}
		
		function OwnerChanged()
		{
			var enableNextButton = true;
			if(IsNull(Mscrm.FormControlInputBehavior.GetBehavior("assignTo").get_dataValue()))
				enableNextButton = false;
			
			WizardSetButtonEnabled(enableNextButton, _WizardButtonsEnum.NEXTBUTTON);
		}
	</script>
</head>
<body>
	<frm:WizardForm id="crmForm" runat="server">
		<div id="mainBody">
			<div id="infoBalloon" class="mscrm-iw-InfoBarYellow" style="display:none">
				<img id="infoBalloonImage" class="mscrm-iw-InfoBarBalloon" src="/_imgs/importwizard_yellowwarning.gif">&nbsp;&nbsp;<span class="mscrm-iw-InfoBarText"><loc:Text ResourceId="ImportWizard.CustomizeImportPage.UpdateViaImportWarning" runat="server"/></span>
				<br />
			</div>
			<br />
			<loc:Text ResourceId="ImportWizard.CustomizeImportPage.PageDescription" runat="server"/>
			<br />
			<br />
			<span class="mscrm-iw-CustomizeImportPage-SectionHeader" id="duplicateDetectionSectionHeader">
				<loc:Text ResourceId="ImportWizard.CustomizeImportPage.DeDupHeader" runat="server"/>
			</span>
			<div id="duplicateDetectionSection" class="mscrm-iw-BorderedDivBlueBackground">
				<table style="width: 100%">
					<col width="3%" />
					<col />
					<tr>
						<td>
							<input id="deDupEnabled" name="deDupStatus" tabindex="1" type="radio" value="No" checked="checked" />
						</td>
						<td>
							<label for="deDupEnabled"><nobr><loc:Text ResourceId="ImportWizard.CustomizeImportPage.DeDupOptionNo" runat="server"/></nobr></label>
						</td>
					</tr>
					<tr>
						<td>
							<input id="deDupDisabled" name="deDupStatus" tabindex="1" type="radio" value="Yes" />
						</td>
						<td>
							<label for="deDupDisabled"><nobr><loc:Text ResourceId="ImportWizard.CustomizeImportPage.DeDupOptionYes" runat="server"/></nobr></label>
						</td>
					</tr>
				</table>
				<loc:Text ResourceId="ImportWizard.CustomizeImportPage.DeDupDescription" runat="server"/>
			</div>
			<div id="duplicateDetectionDisabled" style="display: none" class="mscrm-iw-BorderedDivBlueBackground">
				<img alt='' src='/_imgs/importwizardinfo.gif' />&nbsp;&nbsp;<span class="mscrm-iw-InfoBarText"><loc:Text ResourceId="IW_MSG_Label_DeDup_Disabled" runat="server" /></span>
			</div>
			<br />
			<span class="mscrm-iw-CustomizeImportPage-SectionHeader">
				<loc:Text ResourceId="ImportWizard.CustomizeImportPage.OwnerMappingHeader" runat="server"/>
			</span>
			<div id="OwnerDiv" class="mscrm-iw-BorderedDivBlueBackground">
				<span class="mscrm-iw-PageWidth" ><sdk:LookupControl id="assignTo" LookupClass="BasicOwner" runat="server" /></span>
				<br />
				<br />
				<ui:LabelUI id="assignToLabel" runat="server"/>
			</div>
			<br />
			<div id="saveMap">
				<span class="mscrm-iw-CustomizeImportPage-SectionHeader">
					<loc:Text ResourceId="ImportWizard.CustomizeImportPage.SaveMapHeader" runat="server"/>
				</span>
				<div class="mscrm-iw-BorderedDivBlueBackground">
					<span class="mscrm-iw-PageWidth" >
						<ui:textbox id="txtMapName" maxlength="40" name="txtMapName" runat="server"/>
					</span>
					<br />
					<br />
					<span id="mapSaveControl" runat="server" />
				</div>
			</div>
		</div>
		<div id="progressDiv" class="mscrm-iw-ProgressDiv">
			<table class="mscrm-iw-ProgressTable">
				<tr>
					<td valign='middle' align='center'>
						<img alt='' src='/_imgs/AdvFind/progress.gif' />
						<br />
						<nobr>
							<label id="progressMessage">
								<loc:Text ResourceId="ImportWizard.CustomizeImportPage.ProgressMessage" runat="server"/>
							</label>
						</nobr>
					</td>
				</tr>
			</table>
		</div>































	</frm:WizardForm>
</body>
</html>
