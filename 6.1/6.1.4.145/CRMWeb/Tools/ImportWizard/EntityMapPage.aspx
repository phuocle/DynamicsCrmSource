<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.WebImport.EntityMapPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<!DOCTYPE html>
<html>
<head>
	<cnt:AppHeader id="crmHeader" runat="server" />
	<script language="javascript" type="text/javascript">
		var _entityDivFileId;
		var unmappedEntityCount;
		var hasMapChanged;
		var isSFMEMap = false;
		var cachedORow;
		var cancelClicked = false;
		Sys.Application.add_load(entityMapPageLoad);
		function OnBeforeWindowUnload(oEvent) 
		{
			oEvent = oEvent.rawEvent;
			
			if (cancelClicked) 
			{
				if (WizardGetProperty("MapChanged") == true || hasMapChanged == true)
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
		function UpdateEntityDropDowns()
		{
			var mapHasError = false;
			
			// TODO - potential optimization; we are loading MapXml multiple times in this page
			// if the xml is not being updated/changed or other good reason to keep them, then we should avoid multiple parsing of xml
			var mapXmlDoc = XUI.Xml.LoadXml(WizardGetProperty("MapXml"));
			var processNodes = XUI.Xml.SelectNodes(mapXmlDoc, "/Map/EntityMaps/EntityMap[not(@Unused)]", null);
			for (var i = 0; i < processNodes.length; i++)
			{
				var processNode = processNodes[i];
				var processCode = processNode.getAttribute("ProcessCode");
				
				if (processCode == ImportEntityProcessCode_Unmapped)
				{
					unmappedEntityCount++;
					continue;
				}
				_entityDivFileId = processNode.getAttribute("InputFileId");
				var oSelectElement = document.getElementById(_entityDivFileId);
				var oSelectElementComponent = Mscrm.FormControlInputBehavior.GetBehavior(_entityDivFileId);
				
				var imageElement = document.getElementById(_entityDivFileId + "_Image");
				var imageSpanElement = document.getElementById(_entityDivFileId + "_ImageSpan");
				var imageEmptySpanElement = document.getElementById(_entityDivFileId + "_EmptyImageSpan");
				if (processCode == ImportEntityProcessCode_Ignore)
				{
					XUI.Html.SetText(document.getElementById(_entityDivFileId + "_OldValue"), ENTITY_MAPPING_ACTION_IGNORE);
					oSelectElementComponent.set_defaultValue(ENTITY_MAPPING_ACTION_IGNORE);
					oSelectElementComponent.set_dataValue(ENTITY_MAPPING_ACTION_IGNORE);
					imageElement.src = "";
				}
				else			//ImportEntityProcessCode_Create and ImportEntityProcessCode_Process
				{
					var newTargetEntityName = processNode.getAttribute((processCode == ImportEntityProcessCode_Create) ? "TargetEntityRef" : "TargetEntityName");
					if (processCode == ImportEntityProcessCode_Create)
					{
						ToggleDisplayNewEntityImage(true);
						if (ReturnOptionObject(oSelectElement, newTargetEntityName) == null)
						{
							var newTargetEntityDisplayName = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(mapXmlDoc, "/Map/Customizations/Entities/Entity[@Id='" + newTargetEntityName + "']/CustomizationXml/DisplayName", null));
							AddOptionToAllSelectElements(newTargetEntityName, newTargetEntityDisplayName);
						}
					}
					if (IndexOf(oSelectElement,newTargetEntityName) == -1)		//this entity has been deleted and process code is Process.
					{
						processNode.setAttribute("ProcessCode", ImportEntityProcessCode_Unmapped);
						
						//remove attribute nodes
						if(XUI.Html.DomUtils.GetFirstChild(processNode) != null)
							processNode.removeChild(XUI.Html.DomUtils.GetFirstChild(processNode));
						processNode.removeAttribute("TargetEntityName");
						unmappedEntityCount++;
						WizardSetProperty("MapXml", XUI.Xml.XMLSerializer.serializeToString(mapXmlDoc));
						// This will make the select element dirty.
						// Required to remove the attribute map nodes for this entity when next button is pressed. 
						oSelectElementComponent.set_defaultValue(-1);
						//ask for regeneration of mapxml
						hasMapChanged = true;
						mapHasError = true;
						continue;
					}
					//prevents oSelectElement from becoming dirty.
					oSelectElementComponent.set_defaultValue(newTargetEntityName);
					oSelectElementComponent.set_dataValue(newTargetEntityName);
					XUI.Html.SetText(document.getElementById(_entityDivFileId + "_OldValue"), newTargetEntityName);
					var imageElement = document.getElementById(_entityDivFileId + "_Image");
					imageElement.src = "/_imgs/importwizard_greentick.gif";
					imageElement.alt = LOCID_MAPPEDIMAGEALT;
					imageElement.setAttribute("title", imageElement.alt);
				}
				imageSpanElement.style.display = (imageElement.src.match("_imgs")) ? "inline" : "none";
				imageEmptySpanElement.style.display = (imageElement.src.match("_imgs")) ? "none" : "inline";
			}
			
			if(mapHasError)
			{
				alert(LOCID_ERROR_INVALIDMAP);
				ToggleAllSelectControls(true);
				WizardSetButtonEnabled(false, _WizardButtonsEnum.NEXTBUTTON);
				WizardSetButtonEnabled(false, _WizardButtonsEnum.BACKBUTTON);
			}
			
			return !mapHasError;
		}
		function IndexOf(oSelectElement, targetEntityName) 
		{
			for(var i=0; i<oSelectElement.length; i++)
			{
				if(oSelectElement.options[i].value == targetEntityName)
				{
					return i;
				}
			}
			return -1;
		}
		function UpdateMappingTable()
		{
			if (isSFMEMap == true) 
			{
				unmappedEntityCount = 0;
				UpdateEntityDropDowns();
				SetBalloonForSFME();
				if (unmappedEntityCount > 0)
				{
					WizardSetButtonEnabled(false, _WizardButtonsEnum.NEXTBUTTON);
				}
				return;
			}
			
			unmappedEntityCount = 0;
			
			if(UpdateEntityDropDowns() == false)
			{
				SetBalloon(false);
				return false;
			}
			if (unmappedEntityCount > 0)
			{
				SetBalloon(false);
				WizardSetButtonEnabled(false, _WizardButtonsEnum.NEXTBUTTON);
			}
			else
				SetBalloon(true);
		}
		// #region Wizard Container Methods
		function GetNextPageDefinition()
		{
			var nextPageUrl = GetNextWizardPageUrl("EntityMapPage");
			var propertiesList = new Array("ImportId", "ImportMapId", "OriginalImportFileId", "MapXml");
			var postData = ConstructPostData(propertiesList);
			return new NextPageDefinition(nextPageUrl, postData);
		}
		function IsMapSFME() 
		{
			var mapXmlDoc = XUI.Xml.LoadXml(WizardGetProperty("MapXml"));
			var originalImportFileId = XUI.Xml.SelectNodes(mapXmlDoc, "/Map/OriginalImportFileId", null);
			if (originalImportFileId.length == 1) 
			{
				WizardSetProperty("OriginalImportFileId", XUI.Xml.GetText(originalImportFileId[0]));
			}
			else 
			{
				WizardSetProperty("OriginalImportFileId", null);
			}
			var entitiesPerFileNode = XUI.Xml.SelectSingleNode(mapXmlDoc, "/Map/EntitiesPerFile", null);
			if (entitiesPerFileNode != null) 
			{
				if (XUI.Xml.GetText(entitiesPerFileNode) == 'Multiple') 
				{
					return true;
				}
			}
			return false;
		}
		
		function WantToSkip()
		{
			// JumpBackToDataSourcePage property can be true only in a move back situation AND when wizard mode is 0 (see onload of Customize Import Page).
			if (WizardGetProperty("JumpBackToDataSourcePage") == true)
				return true;
			else
			{
				if (IsMapSFME() == true)
				{
					// Set property to "Multiple"
					WizardSetProperty("EntitiesPerFile", 2);
					isSFMEMap = true;
				}
				else
				{
					// Set property to "Single"
					WizardSetProperty("EntitiesPerFile", 1);
					isSFMEMap = false;
				}
								// This function will properly set all control values, and set the Next button state
				// If you want to add any onload logic, add it here or in UpdateMappingTable()
				if (UpdateMappingTable() == false)
					return false;
					if (WizardGetProperty("WizardMode") == 0 && findButton(_WizardButtonsEnum.NEXTBUTTON).disabled == false)
					{
					return (handlePageChange(true, true));
					}
					else
					{
						WizardSetProperty("WizardMode", 1);
					return false;
				}
			}
		}
		//#endregion
		//WizardForm Next button calls this method.
		function moveNext()
		{
			SetProgressMessageDisplayState(true);
			setTimeout(function () { pseudoMoveNext(); }, 3);
			disableAllButtons();
		}
		
		function pseudoMoveNext()
		{
		    if (handlePageChange(true, false) == true) 
            {
		        detachWindowOnBeforeUnload(OnBeforeWindowUnload, parent.window);
		        WizardNavigate(_WizardNavigateEnum.NEXT);
		    }
		}
		function pseudoMoveBack()
		{
			// We are not stopping the user from moving back even in case of WebService call error, but are setting the wizard property
			// so that we can re-submit the changes to the web service on next button click
		    if (handlePageChange(false, false) == true) 
            {
		        detachWindowOnBeforeUnload(OnBeforeWindowUnload, parent.window);
		        WizardNavigate(_WizardNavigateEnum.BACK);
		    }
		}
		function moveBack()
		{
			SetProgressMessageDisplayState(true);
			setTimeout(function () { pseudoMoveBack(); }, 3);
			disableAllButtons();		
		}
		// This function returns true if :
		// there is atleast one file not mapped to user entity or if bWaitForCompletion is true and the webservice call returns success
		// It returns false if we are not waiting for completion of the webservice call (any logic to execute after webservice call must
		// put in GetImportMapXmlCallback method
		// Please note that within this function you have to individually set the progressDivDisplayState to false wherever there is a need for it.
		// Do not set it to false where you are calling handlePageChange() with the check if(!handlePageChange(...)) since handlePageChange
		// also returns false in case an async web service call is being made (GetImportMapXml)
		function handlePageChange(isNext, bWaitForCompletion)
		{
			var iNavigateEnum = (isNext == true) ? _WizardNavigateEnum.NEXT : _WizardNavigateEnum.BACK;
		
			var mapXmlDoc = XUI.Xml.LoadXml(WizardGetProperty("MapXml"));
			var mapChanged = XUI.Xml.SelectNodes(mapXmlDoc, "/Map/MapChanged", null);
			if(mapChanged.length == 1 && XUI.Xml.GetText(mapChanged[0]) == "True")
			{
				hasMapChanged = true;
			}
			var ignoreEntities = XUI.Xml.SelectNodes(mapXmlDoc, "/Map/EntityMaps/EntityMap[(@ProcessCode='" + ImportEntityProcessCode_Ignore + "') and not(@Unused)]", null);
			var allEntities = XUI.Xml.SelectNodes(mapXmlDoc, "/Map/EntityMaps/EntityMap[not(@Unused)]", null);
			var entitiesMappedToUser = XUI.Xml.SelectNodes(mapXmlDoc, "/Map/EntityMaps/EntityMap[@TargetEntityName='systemuser' and not(@Unused)]", null);
			// Checking if all entities have been ignored should be done only on Next button click
			if (allEntities.length == ignoreEntities.length && isNext == true)
			{
				alert(LOCID_ALL_FILES_IGNORED);
				enableAllButtons();
				WizardSetProperty("EntityMapPageWSError", true);
				SetProgressMessageDisplayState(false);
				return false;
			}
			if (allEntities.length == (ignoreEntities.length + entitiesMappedToUser.length) && isNext == true && !hasSystemUserCreatePrivilege)
			{
				alert(LOCID_ALL_FILES_MAPPED_TO_USER);
				enableAllButtons();
				WizardSetProperty("EntityMapPageWSError", true);
				SetProgressMessageDisplayState(false);
				return false;
			}
			// If the map hasn't changed, just proceed to the next page
			if( hasMapChanged || WizardGetProperty("EntityMapPageWSError") == true)
			{
				RemoveAttributeNodesFromMapXml();
				RemoveRedundantNewEntityCustomizations();
				var propertiesToPost = new Array("ImportId", "ImportMapId", "MapXml");
				if(bWaitForCompletion == true)
				{
					if (GetImportMapXml(propertiesToPost) == true)
					{
						WizardSetProperty("MapChanged", true);
						WizardSetProperty("EntityMapPageWSError", false);
						return true;
					}
					else
					{
						WizardSetProperty("EntityMapPageWSError", true);
						SetProgressMessageDisplayState(false);
						return false;
					}
					enableAllButtons();
				}
				else
				{
					CallImportWebService("GetImportMapXml", propertiesToPost, function(oResult) {GetImportMapXmlCallback(oResult, iNavigateEnum);});
					return false;
				}
			}
			else
			{
				return true;
			}
		}
		
		function GetImportMapXmlCallback(oResult, iNavigateEnum)
		{
			if(oResult.Success == false)
			{
				WizardSetProperty("EntityMapPageWSError", true);
				SetProgressMessageDisplayState(false);
			}
			else
			{
				WizardSetProperty("MapXml", oResult.ReturnValue);
				WizardSetProperty("MapChanged", true);
				WizardSetProperty("EntityMapPageWSError", false);
				detachWindowOnBeforeUnload(OnBeforeWindowUnload, parent.window);
				WizardNavigate(iNavigateEnum);
			}
			
			enableAllButtons();
		}
		
		function RemoveAttributeNodesFromMapXml()
		{
			var mapXmlDoc = XUI.Xml.LoadXml(WizardGetProperty("MapXml"));
			var allSelectElements = document.getElementById("entityMappingTable").getElementsByTagName("SELECT");
			
			for(var i=0; i<allSelectElements.length; i++)
			{
				var element = allSelectElements[i];
				var elementComponent = Mscrm.FormControlInputBehavior.GetBehavior(element.id);
				if (!elementComponent.get_isDirty())
					continue;
				// element.id is internally generated and will only have any non alpha-numeric characters. It is file_<num>
				var sourceEntityNode = XUI.Xml.SelectSingleNode(mapXmlDoc, "/Map/EntityMaps/EntityMap[@InputFileId='" + element.id + "']", null);
				// Remove the attributemaps node so that it will be calcualted again by the webservice
				var j=sourceEntityNode.childNodes.length;
				while(j--)
				{
					var currentChild = sourceEntityNode.childNodes[j];
					sourceEntityNode.removeChild(currentChild);
				}
				// Remove the customization for these attributes as well
				// element.DefaultValue is internally generated schema name and will only have any non alpha-numeric characters. 
				var customizationNode = XUI.Xml.SelectSingleNode(mapXmlDoc, "/Map/Customizations/Entities/Entity[LogicalName='" + elementComponent.get_defaultValue() +"']", null);
				if(!IsNull(customizationNode))
				{
					//Do not delete the node if the custom entity is mapped with any other file
					var mappedEntity = XUI.Xml.SelectNodes(mapXmlDoc, "/Map/EntityMaps/EntityMap[@TargetEntityName = '" + elementComponent.get_defaultValue() + "' and not(@Unused)]", null);
					if(!IsNull(mappedEntity) && (mappedEntity.length != 0))
					{
						continue;
					}
					customizationNode.parentNode.removeChild(customizationNode);
				}
			}
			WizardSetProperty("MapXml", XUI.Xml.XMLSerializer.serializeToString(mapXmlDoc));
		}
		function RemoveRedundantNewEntityCustomizations()
		{
			var mapXmlDoc = XUI.Xml.LoadXml(WizardGetProperty("MapXml"));
			var customEntities = XUI.Xml.SelectNodes(mapXmlDoc, "/Map/Customizations/Entities/Entity[CustomizationXml]", null);
			for(var i=0; i<customEntities.length; i++)
			{
				var entity = customEntities[i];
				var entityId = entity.getAttribute("Id");
				var totalSourceToNewEntityMappings = XUI.Xml.SelectNodes(mapXmlDoc, "/Map/EntityMaps/EntityMap[@TargetEntityRef='" + entityId + "']", null);
				if (totalSourceToNewEntityMappings.length == 0)
				{
					entity.parentNode.removeChild(entity);
					removeLookupsToNewEntity(entityId, mapXmlDoc);
				}
			}
			WizardSetProperty("MapXml", XUI.Xml.XMLSerializer.serializeToString(mapXmlDoc));
		}
		
		function removeLookupsToNewEntity(entityId, mapXmlDoc)
		{
			var attributeCusotmizationToRemove = XUI.Xml.SelectNodes(mapXmlDoc, "/Map/Customizations/Entities/Entity/Attributes/Attribute[CustomizationXml/attribute/type/entity='" + entityId + "']", null);
			for (var i=0; i<attributeCusotmizationToRemove.length; i++)
			{
				var attributeId = attributeCusotmizationToRemove[i].getAttribute("Id");
				var entityId = attributeCusotmizationToRemove[i].parentNode.parentNode.getAttribute("Id");
				var entityLogicalName = XUI.Xml.SelectSingleNode(attributeCusotmizationToRemove[i].parentNode.parentNode, "LogicalName", null);
				var attributeMappingToModify;
				if (IsNull(entityId) == false)
				{
					// The attribute is part of a new entity being created
					attributeMappingToModify =  XUI.Xml.SelectSingleNode(mapXmlDoc, "/Map/EntityMaps/EntityMap[@TargetEntityRef='" + entityId + "']/AttributeMaps/AttributeMap[SourceAttributeId='" + attributeId + "']", null);
				}
				else
				{
					// the attribute is part of an existing entity
					attributeMappingToModify =  XUI.Xml.SelectSingleNode(mapXmlDoc, "/Map/EntityMaps/EntityMap[@TargetEntityName='" + XUI.Xml.GetText(entityLogicalName) + "']/AttributeMaps/AttributeMap[SourceAttributeId='" + attributeId + "']", null);
				}
				if (IsNull(attributeMappingToModify) == false)
				{
					// Set the attributes status as unmapped.
					XUI.Xml.SetText(XUI.Xml.SelectSingleNode(attributeMappingToModify, "TargetAttributeName", null), "");
					XUI.Xml.SetText(XUI.Xml.SelectSingleNode(attributeMappingToModify, "ProcessCode", null), ImportEntityProcessCode_Unmapped);
					var targetAttributeRefNode = XUI.Xml.SelectSingleNode(attributeMappingToModify, "TargetAttributeRef", null);
					if (!IsNull(targetAttributeRefNode))
						attributeMappingToModify.removeChild(targetAttributeRefNode);
				}
				attributeCusotmizationToRemove[i].parentNode.removeChild(attributeCusotmizationToRemove[i]);
			}
		}
		function EntityMappingChanged(fileId)
		{
			var selectElement = document.getElementById(fileId);
			var imageSpanElement = document.getElementById(fileId + "_ImageSpan");
			var imageEmptySpanElement = document.getElementById(fileId + "_EmptyImageSpan");
			var imageElement = document.getElementById(fileId + "_Image");
			_entityDivFileId = fileId;
			
			if (selectElement.value == ENTITY_MAPPING_ACTION_CREATENEW) // selected value is CreateNew
			{
				var oRow = selectElement.parentNode.parentNode.parentNode;
				FillCreateEntityDiv(selectElement, false);
				cachedORow = oRow;
				ShowCreateEntityDiv();
			}
			else
			{
				document.getElementById("createEntityDiv").style.display = "none";
				ToggleAllSelectControls(false);
				var mapXmlDoc = XUI.Xml.LoadXml(WizardGetProperty("MapXml"));
				var sourceEntityNode = XUI.Xml.SelectSingleNode(mapXmlDoc, "/Map/EntityMaps/EntityMap[@InputFileId='" + fileId + "']", null);
			    
				XUI.Html.SetText(document.getElementById(fileId + "_OldValue"), selectElement.value);
				if (selectElement.value != ENTITY_MAPPING_ACTION_SELECT	&& selectElement.value != ENTITY_MAPPING_ACTION_IGNORE)
				{
					// Change the count when earlier state was select
					if (imageElement.src.match("/_imgs/importwizard_yellowwarning.gif"))
						unmappedEntityCount--;
					imageElement.src = "/_imgs/importwizard_greentick.gif";
					imageElement.alt = LOCID_MAPPEDIMAGEALT;
					imageElement.setAttribute("title",imageElement.alt);
					var oOptGroup = ReturnOptionObject(selectElement,selectElement.value).parentNode;
					if(oOptGroup.label == LOCID_OPTGROUP_NEWENTITIES )
					{
						ToggleDisplayNewEntityImage(true);
						sourceEntityNode.setAttribute("ProcessCode", ImportEntityProcessCode_Create);
						sourceEntityNode.setAttribute("TargetEntityName", "");
						sourceEntityNode.setAttribute("TargetEntityRef", selectElement.value);
					}
					else
					{
						ToggleDisplayNewEntityImage(false);
						sourceEntityNode.setAttribute("ProcessCode", ImportEntityProcessCode_Process);
						sourceEntityNode.setAttribute("TargetEntityName", selectElement.value);
						sourceEntityNode.removeAttribute("TargetEntityRef");
					}
				}
				else if(selectElement.value != ENTITY_MAPPING_ACTION_IGNORE)	// selected value is Select
				{
					// Change the state when earlier state was not select
					if (!imageElement.src.match("/_imgs/importwizard_yellowwarning.gif")) 
						unmappedEntityCount++;
					imageElement.src = "/_imgs/importwizard_yellowwarning.gif";
					imageElement.alt = LOCID_UNMAPPEDIMAGEALT;
					imageElement.setAttribute("title", imageElement.alt);
					
					sourceEntityNode.setAttribute("ProcessCode",ImportEntityProcessCode_Unmapped);
					sourceEntityNode.setAttribute("TargetEntityName","");
					sourceEntityNode.removeAttribute("TargetEntityRef");
					
					ToggleDisplayNewEntityImage(false);					
				}
				else // Selected value is ignore
				{
					// Change the count when earlier state was select or createnew
					if (imageElement.src.match("/_imgs/importwizard_yellowwarning.gif")) 
						unmappedEntityCount--;
					imageElement.src = "";
					sourceEntityNode.setAttribute("ProcessCode", ImportEntityProcessCode_Ignore);
					sourceEntityNode.setAttribute("TargetEntityName","");
					sourceEntityNode.removeAttribute("TargetEntityRef");
					ToggleDisplayNewEntityImage(false);					
				}
				WizardSetProperty("MapXml", XUI.Xml.XMLSerializer.serializeToString(mapXmlDoc));
				if (unmappedEntityCount == 0) 
					hasMapChanged = true;
			}
			imageSpanElement.style.display = (imageElement.src.match("_imgs")) ? "inline" : "none";
			imageEmptySpanElement.style.display = (imageElement.src.match("_imgs")) ? "none" : "inline";
			
			CheckUnmappedEntityCount();
		}
		function CheckUnmappedEntityCount()
		{
			if (unmappedEntityCount == 0) 
			{
				SetBalloon(true);
				WizardSetButtonEnabled(true, _WizardButtonsEnum.NEXTBUTTON);
			}
			else
			{
				SetBalloon(false);
				WizardSetButtonEnabled(false, _WizardButtonsEnum.NEXTBUTTON);
			}
		}		
		function SetBalloon(allMapped) 
		{
			var balloonImageElement = document.getElementById("infoBalloonImage");
			var balloonTextElement = document.getElementById("infoBalloonText");
			balloonImageElement.alt = LOCID_IW_BALLOON_IMAGEALT;
			balloonImageElement.setAttribute("title", balloonImageElement.alt);
			if (allMapped) 
			{
				balloonImageElement.src = "/_imgs/importwizard_solidgreentick.gif"
				XUI.Html.SetText(balloonTextElement, LOCID_IW_ENTITYMAP_ALLMAPPED);
				document.getElementById("infoBalloon").className = "mscrm-iw-InfoBarGreen";
			}
			else 
			{
				balloonImageElement.src = "/_imgs/importwizard_yellowwarning.gif"
				XUI.Html.SetText(balloonTextElement, LOCID_IW_ENTITYMAP_NOTMAPPED);
				document.getElementById("infoBalloon").className = "mscrm-iw-InfoBarYellow";
			}
		}
		function SetBalloonForSFME() 
		{
			SetBalloon(false);
			var balloonTextElement = document.getElementById("infoBalloonText");
			XUI.Html.SetText(balloonTextElement, LOCID_IW_ENTITYMAP_SFME);
		}
		function ReopenCreateEntityDiv(domEvent)
		{
			var oCreateImageSpan = domEvent.target;
			
			//event.srcElement is different in case of pressing enter or doing mouse click
			while (oCreateImageSpan.tagName != "SPAN")
				oCreateImageSpan = oCreateImageSpan.parentNode;
			var fileId = oCreateImageSpan.id;
			fileId = fileId.slice(0, fileId.lastIndexOf("_"));
			var oRow = oCreateImageSpan.parentNode.parentNode;
			_entityDivFileId = fileId;
			FillCreateEntityDiv(null, true);
			cachedORow = oRow;
			ShowCreateEntityDiv();
			document.getElementById("inputInternalName").focus();
		}
		function FillCreateEntityDiv(selectElement, isReopen)
		{
			ToggleAllSelectControls(true, selectElement);
			var mapXmlDoc = XUI.Xml.LoadXml(WizardGetProperty("MapXml"));
			if (isReopen == true)
			{
				document.getElementById("buttonCreateOK").onclick = ModifyNewEntity;
				//read plural and primaryfield from mapXml
				var targetEntityRef = document.getElementById(_entityDivFileId).value;
				var customEntityNode = XUI.Xml.SelectSingleNode(mapXmlDoc, "Map/Customizations/Entities/Entity[@Id='" + targetEntityRef + "']", null);
				document.getElementById("inputInternalName").value = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(customEntityNode, "CustomizationXml/DisplayName", null));
				document.getElementById("inputInternalNamePlural").value = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(customEntityNode, "CustomizationXml/CollectionName", null));
				document.getElementById("inputPrimaryField").value = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(customEntityNode, "CustomizationXml/PrimaryKeyDisplayName", null));
				document.getElementById("buttonCreateOK").disabled = false;
			}
			else
			{
				document.getElementById("buttonCreateOK").onclick = CreateNewEntity;
				var sourceEntityNode = XUI.Xml.SelectSingleNode(mapXmlDoc, "/Map/EntityMaps/EntityMap[@InputFileId='" + _entityDivFileId + "']", null);
				var inputFileName = sourceEntityNode.getAttribute("InputFileName");
				document.getElementById("inputInternalName").value = Trim(inputFileName.slice(0, inputFileName.lastIndexOf(".")).substring(0, 40));
				document.getElementById("inputInternalNamePlural").value = "";
				document.getElementById("inputPrimaryField").value = LOCID_DEFAULT_PRIMARYFIELD_NAME;
				document.getElementById("buttonCreateOK").disabled = true;
			}
		}
		
		function ShowCreateEntityDiv()
		{
			var oRow = cachedORow;
			
			if (LOCID_UI_DIR == "RTL")
			{
				document.getElementById("createEntityDiv").style.right = 0;
			}
			else
			{
				//Can probably set this to 0 - could not test before checkin so keeping old behavior
				document.getElementById("createEntityDiv").style.left = oRow.offsetLeft;
			}
			
			var top = (oRow.rowIndex) * (oRow.offsetHeight);
			//On first run of ShowCreateEntityDiv, div.scrollHeight is zero. It gets set to the actual height after display is made "inline".
			document.getElementById("createEntityDiv").style.top = "0px";
			document.getElementById("createEntityDiv").style.display = "inline";
			var height = document.getElementById("createEntityDiv").scrollHeight;
			document.getElementById("createEntityDiv").style.display = "none";
			var rectRow = oRow.getClientRects()[0];
			var rectTable = document.getElementById("entityMappingTable").parentNode.getClientRects()[0];
			var rowPosRelativeToMapArea = rectRow.bottom - rectTable.top;
			var setDivTop = 0;
			if (document.getElementById("createEntityDiv").parentNode.offsetHeight <= height)
				setDivTop = top + oRow.offsetHeight;
			else
			{
				if ((rowPosRelativeToMapArea + height) > document.getElementById("createEntityDiv").parentNode.offsetHeight && (rowPosRelativeToMapArea - height - oRow.offsetHeight) > 0)
					setDivTop = top - height;
				else
					setDivTop = top + oRow.offsetHeight;
			}
			document.getElementById("createEntityDiv").style.top = setDivTop + "px";
			//Its possible that due to diplaying this div, the scrollbar will appear. In that case, we need to readjust the height of the div.
			document.getElementById("createEntityDiv").style.display = "inline";
			document.getElementById("createEntityDiv").style.width = oRow.scrollWidth;
			document.getElementById("createEntityDiv").style.display = "none";
			document.getElementById("createEntityDiv").style.display = "inline";
			document.getElementById("inputInternalName").focus();
		}
		
		function ToggleAllSelectControls(selectDisabled, exceptSelectElement)
		{
			var allSelectElements = document.getElementsByTagName("SELECT");
			for(var i=0; i<allSelectElements.length; i++)
			{
				var oSelectElement = allSelectElements[i];
				if (exceptSelectElement != null)
					if (exceptSelectElement.id == oSelectElement.id)
						continue;
				oSelectElement.disabled = selectDisabled;
				var oOptGroup = ReturnOptionObject(oSelectElement,oSelectElement.value).parentNode;
				var oCreateImageSpan = document.getElementById(oSelectElement.id + "_CreateImageSpan");
				var oNewEntityImageLink = XUI.Html.DomUtils.GetFirstChild(oCreateImageSpan);
				if (oNewEntityImageLink != null)
				{
					if (selectDisabled == true && oNewEntityImageLink.tagName == "A")
					{
						oNewEntityImageLink.removeAttribute("href");
						oCreateImageSpan.onclick = null;
						
					}
					else if ( selectDisabled==false && oOptGroup.label == LOCID_OPTGROUP_NEWENTITIES )
					{
						oNewEntityImageLink.setAttribute("href", "#");
						$addHandler(oCreateImageSpan, "click", ReopenCreateEntityDiv);
					}
				}
			}
			WizardSetButtonEnabled(!selectDisabled, _WizardButtonsEnum.BACKBUTTON);
			WizardSetButtonEnabled(!selectDisabled, _WizardButtonsEnum.NEXTBUTTON);
		}
		function CancelCreateNewEntity()
		{
			CommonCreateNewEntity();
		}
		function ModifyNewEntity()
		{
			var oldTargetEntityName = XUI.Html.GetText(document.getElementById(_entityDivFileId + "_OldValue"));
			var oSelectElement = document.getElementById(_entityDivFileId);
			var oldTargetEntityDisplayName = oSelectElement.SelectedText;
			var newTargetEntityDisplayName = document.getElementById("inputInternalName").value;
			var newTargetEntityPluralName = document.getElementById("inputInternalNamePlural").value;
			if (!ValidateCreateEntityContents(newTargetEntityDisplayName, newTargetEntityPluralName, oldTargetEntityName))
				return;
			var mapXmlDoc = XUI.Xml.LoadXml(WizardGetProperty("MapXml"));
			var customEntityNode = XUI.Xml.SelectSingleNode(mapXmlDoc, "Map/Customizations/Entities/Entity[@Id='" + oldTargetEntityName + "']", null);
			var referredNodes = XUI.Xml.SelectNodes(mapXmlDoc, "/Map/EntityMaps/EntityMap[@TargetEntityRef='" + oldTargetEntityName + "']", null);
			var referredLookupNodes = XUI.Xml.SelectNodes(mapXmlDoc, "/Map/Customizations/Entities/Entity/Attributes/Attribute/CustomizationXml/attribute/type[name='lookup' and entity='" + oldTargetEntityName + "']", null);
			if (newTargetEntityDisplayName != oldTargetEntityDisplayName) 
			{
				var re = new RegExp("\\W", "g");
				var newTargetEntityName = newTargetEntityDisplayName.replace(re, "");
				newTargetEntityName = newTargetEntityName.substring(0, 40);
				newTargetEntityName = SuggestSchemaName(_entityDivFileId, newTargetEntityName);
				for(var i=0 ; i<referredNodes.length ; i++)
				{
					referredNodes[i].setAttribute("TargetEntityRef",newTargetEntityName);
				}
				for (var i = 0; i < referredLookupNodes.length; i++)
				{
					XUI.Xml.SetText(XUI.Xml.SelectSingleNode(referredLookupNodes[i], "entity", null), newTargetEntityName);
				}
				var allSelectElements = document.getElementsByTagName("SELECT");
				for (var i = 0; i < allSelectElements.length; i++)
				{
					var oSelectElement = allSelectElements[i];
					var oSelectElementComponent = Mscrm.FormControlInputBehavior.GetBehavior(oSelectElement.id);
					var wasDirty = oSelectElementComponent.get_isDirty();
					oSelectElementComponent.RemoveOption(oldTargetEntityName);
					oSelectElementComponent.AddOption(newTargetEntityDisplayName, newTargetEntityName, LOCID_OPTGROUP_NEWENTITIES);
					if (XUI.Html.GetText(document.getElementById(oSelectElement.id + "_OldValue")) == oldTargetEntityName)					
					{
						XUI.Html.SetText(document.getElementById(oSelectElement.id + "_OldValue"), newTargetEntityName);
						oSelectElementComponent.set_dataValue(newTargetEntityName);
						if (!wasDirty)
							oSelectElementComponent.set_defaultValue(oSelectElementComponent.get_dataValue());
					}
				}
				customEntityNode.setAttribute("Id",newTargetEntityName);
			}
			XUI.Xml.SetText(XUI.Xml.SelectSingleNode(customEntityNode, "CustomizationXml/CollectionName", null), document.getElementById("inputInternalNamePlural").value);
			XUI.Xml.SetText(XUI.Xml.SelectSingleNode(customEntityNode, "CustomizationXml/PrimaryKeyDisplayName", null), document.getElementById("inputPrimaryField").value);
			XUI.Xml.SetText(XUI.Xml.SelectSingleNode(customEntityNode, "CustomizationXml/DisplayName", null), newTargetEntityDisplayName);
			WizardSetProperty("MapXml", XUI.Xml.XMLSerializer.serializeToString(mapXmlDoc));			
			CommonCreateNewEntity();
		}
		function SuggestSchemaName(fileId, originalSchemaName)
		{
			var prefixLength = schemaPrefix.length;
			var suffixIndex = 0;
			var oOptGroups = document.getElementById(fileId).getElementsByTagName("OPTGROUP");
			var oNewEntitiesOptGroup = (oOptGroups.length == 2) ? null : oOptGroups[1];
			var oOldEntitiesOptGroup = oOptGroups[oOptGroups.length-1];
			
			//Look in already existing entities, if there is an entity whose schema name matches our current schema name.
			//prefix length is used since finally the current entity schema name will get a prefix (like new_). So that needs to be taken into consideration.
			
			var optionCollection = oOldEntitiesOptGroup.children;
			for (var e = 0; e < optionCollection.length; e++)
			{
				var optionValue = optionCollection[e].value.toLowerCase();
				if (optionValue.substr(prefixLength,originalSchemaName.length) == originalSchemaName.toLowerCase())
				{
					var currentSuffixIndex = parseInt(optionValue.substring(prefixLength + originalSchemaName.length));
					if (currentSuffixIndex == NaN)
						continue;
					suffixIndex = (currentSuffixIndex >= suffixIndex) ? currentSuffixIndex + 1 : suffixIndex;
				}
			}
			// In case of new entities ( those that have just been created, on this page itself) : there is no prefix of new_ for now.
			// So we can directly compare the names. To keep the suffix indexes in order, we are using substring and parseInt. Otherwise names generated
			// would look like Lead0, Lead00, Lead000, and so on.
			
			if (oNewEntitiesOptGroup != null)
			{
				var optionCollection = oNewEntitiesOptGroup.children;
				for (var e = 0; e < optionCollection.length; e++)
				{
					var optionValue = optionCollection[e].value.toLowerCase();
					if (optionValue.substring(0,originalSchemaName.length) == originalSchemaName.toLowerCase())
					{
						var currentSuffixIndex = parseInt(optionValue.substring(originalSchemaName.length));
						if (currentSuffixIndex == NaN)
							continue;
						suffixIndex = (currentSuffixIndex >= suffixIndex) ? currentSuffixIndex + 1 : suffixIndex;
					}
				}
			}
			return (originalSchemaName + suffixIndex.toString() );			
		}
		// Validation is not carried out against oldTargetEntityId (in case of modify new entity)
		function ValidateCreateEntityContents(newDisplayName, newPluralName, oldTargetEntityId)
		{
			var dupDispName = false;
			var dupPluralName = false;
			if (dispNameDict[newDisplayName.toLowerCase()] != null)
				dupDispName = true;
			if (pluralNameDict[newPluralName.toLowerCase()] != null)
				dupPluralName = true;
			var mapXmlDoc = XUI.Xml.LoadXml(WizardGetProperty("MapXml"));
			var customEntitiesNode = XUI.Xml.SelectNodes(mapXmlDoc, "/Map/Customizations/Entities/Entity/CustomizationXml", null);
			for (var i = 0; i < customEntitiesNode.length; i++)
			{
				var customEntityNode = customEntitiesNode[i];
				if (oldTargetEntityId != null && customEntityNode.parentNode.getAttribute("Id") == oldTargetEntityId)
					continue;
				var customDisplayName = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(customEntityNode, "DisplayName", null));
				var customPluralName = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(customEntityNode, "CollectionName", null));
				if (customDisplayName == newDisplayName)
				{
					dupDispName = true;
					break;
				}
				if (customPluralName == newPluralName)
				{
					dupPluralName = true;
					break;
				}
				
			}
			
			if (dupDispName == true)
			{
				alert(LOCID_ENTITYDISPLAYNAME_EXISTS);
				return false;
			}
			if (dupPluralName == true)
			{
				alert(LOCID_ENTITYPLURALNAME_EXISTS);
				return false;
			}
			return true;
		}
		
		function CreateNewEntity()
		{
			var newTargetEntityDisplayName = document.getElementById("inputInternalName").value;
			var newTargetEntityPluralName = document.getElementById("inputInternalNamePlural").value;
			if (!ValidateCreateEntityContents(newTargetEntityDisplayName, newTargetEntityPluralName))
				return;
			var re = new RegExp("\\W", "g");
			var newTargetEntityName = newTargetEntityDisplayName.replace(re, "");
			newTargetEntityName = newTargetEntityName.substring(0, 40);
			newTargetEntityName = SuggestSchemaName(_entityDivFileId, newTargetEntityName);
			
			AddOptionToAllSelectElements(newTargetEntityName, newTargetEntityDisplayName);
			var mapXmlDoc = XUI.Xml.LoadXml(WizardGetProperty("MapXml"));
			
			var entityNode = XUI.Xml.SelectSingleNode(mapXmlDoc, "/Map/EntityMaps/EntityMap[@InputFileId='" + _entityDivFileId + "']", null);
			entityNode.setAttribute("ProcessCode",ImportEntityProcessCode_Create);
			entityNode.setAttribute("TargetEntityName", "");
			entityNode.setAttribute("TargetEntityRef", newTargetEntityName);
			
			var customEntitiesNode = XUI.Xml.SelectSingleNode(mapXmlDoc, "/Map/Customizations/Entities", null);
			if(customEntitiesNode == null)
			{
				var customizationsNode = mapXmlDoc.createElement("Customizations");
				XUI.Xml.SelectSingleNode(mapXmlDoc, "/Map", null).appendChild(customizationsNode);
				
				customEntitiesNode = mapXmlDoc.createElement("Entities");
				customizationsNode.appendChild(customEntitiesNode);
			}
			
			var customEntityNode = mapXmlDoc.createElement("Entity");
			customEntityNode.setAttribute("Id",newTargetEntityName);
			customEntitiesNode.appendChild(customEntityNode);
			
			var customizationXmlNode = mapXmlDoc.createElement("CustomizationXml");
			customEntityNode.appendChild(customizationXmlNode);
			
			var pluralNameNode = mapXmlDoc.createElement("CollectionName");
			var primaryFieldNode = mapXmlDoc.createElement("PrimaryKey");
			var primaryFieldDisplayNode = mapXmlDoc.createElement("PrimaryKeyDisplayName");
			var displayNameNode = mapXmlDoc.createElement("DisplayName");
			XUI.Xml.SetText(pluralNameNode, document.getElementById("inputInternalNamePlural").value);
			XUI.Xml.SetText(primaryFieldNode, "PrimaryField_" + newTargetEntityName);
			XUI.Xml.SetText(primaryFieldDisplayNode, document.getElementById("inputPrimaryField").value);
			XUI.Xml.SetText(displayNameNode, newTargetEntityDisplayName);
			
			customizationXmlNode.appendChild(pluralNameNode);
			customizationXmlNode.appendChild(primaryFieldNode);
			customizationXmlNode.appendChild(primaryFieldDisplayNode);
			customizationXmlNode.appendChild(displayNameNode);
			WizardSetProperty("MapXml", XUI.Xml.XMLSerializer.serializeToString(mapXmlDoc));
			var oImageElement = document.getElementById(_entityDivFileId + "_Image");
			var oImageSpanElement = document.getElementById(_entityDivFileId + "_ImageSpan");
			var oImageEmptySpanElement = document.getElementById(_entityDivFileId + "_EmptyImageSpan");
			// only if previous state was select do we need to update unmappedEntityCount
			if (oImageElement.src.match("/_imgs/importwizard_yellowwarning.gif"))
			{
				unmappedEntityCount--;
			}
			if (unmappedEntityCount == 0)
				hasMapChanged = true;
			oImageElement.src = "/_imgs/importwizard_greentick.gif";
			oImageElement.alt = LOCID_MAPPEDIMAGEALT;
			oImageElement.setAttribute("title", oImageElement.alt);
			oImageSpanElement.style.display = "inline";
			oImageEmptySpanElement.style.display = "none";
			ToggleDisplayNewEntityImage(true);
			XUI.Html.SetText(document.getElementById(_entityDivFileId + "_OldValue"), newTargetEntityName);
			CommonCreateNewEntity();
		}
		
		function AddOptionToAllSelectElements(newTargetEntityName, displayName)
		{
			var allSelectElements = document.getElementsByTagName("SELECT");
			for(var i=0; i<allSelectElements.length; i++)
			{
				var oSelectElement = allSelectElements[i];
				var oSelectActions = oSelectElement.getElementsByTagName("OPTGROUP");
				var oNewOption = document.createElement("OPTION");				
				oNewOption.value = newTargetEntityName;
				XUI.Html.SetText(oNewOption, displayName);
				oNewOption.title = displayName;
				oSelectElement.style.width = "95%";
				if(oSelectActions.length == 2)
				{
					var oNewOptGroup = document.createElement("OPTGROUP");
					oSelectElement.insertBefore(oNewOptGroup, oSelectActions[1]);
					oNewOptGroup.label = LOCID_OPTGROUP_NEWENTITIES;
					oNewOptGroup.id = LOCID_OPTGROUP_NEWENTITIES;
					
					//oNewOptGroup.setAttribute("Sort","ascending");
					oNewOptGroup.Sort = Mscrm.FormInputControl.SortingMode.Ascending;
					oNewOptGroup.appendChild(oNewOption);
				}
				else
				{
					//automatically sorts the options
					Mscrm.FormControlInputBehavior.GetBehavior(oSelectElement.id).AddOption(displayName, newTargetEntityName, LOCID_OPTGROUP_NEWENTITIES);
				}
			}
		}
		function ToggleDisplayNewEntityImage(bool)
		{
			var oCreateImageSpan = document.getElementById(_entityDivFileId + "_CreateImageSpan");
			if (XUI.Html.DomUtils.GetFirstChild(oCreateImageSpan) != null)
			{
				oCreateImageSpan.removeChild(XUI.Html.DomUtils.GetFirstChild(oCreateImageSpan));
				oCreateImageSpan.onclick = null;
			}
			
			if(bool == true)
			{
				var oNewEntityImageLink = document.createElement("a");
				var oNewEntityImage = document.createElement("image");
				oNewEntityImageLink.appendChild(oNewEntityImage);
				oCreateImageSpan.appendChild(oNewEntityImageLink);
				oNewEntityImageLink.setAttribute("href", "#");
				oNewEntityImageLink.tabIndex = -1;
				oNewEntityImage.tabIndex = 0;
				$addHandler(oCreateImageSpan, "click", ReopenCreateEntityDiv);
				
				
				oNewEntityImage.setAttribute("src","/_imgs/importwizard_newentity.gif");
				oNewEntityImage.setAttribute("alt", LOCID_NEWENTITIY_ALT);
			}
		}
		function CommonCreateNewEntity()
		{
			document.getElementById("createEntityDiv").style.display = "none";
			var oSelectElement = document.getElementById(_entityDivFileId);
			oSelectElement.value = XUI.Html.GetText(document.getElementById(_entityDivFileId + "_OldValue"));
			ToggleAllSelectControls(false);
			oSelectElement.focus();
			CheckUnmappedEntityCount();
		}
		
		function ReturnOptionObject(selectElement, dataValue)
		{
			var optionCollection = selectElement.getElementsByTagName("OPTION");
			for(var i=0 ; i < optionCollection.length ; i++)
				if(optionCollection[i].value == dataValue)
					return (optionCollection[i]);
			return(null);			
		}
		function OKbuttonDisabledCheck()
		{
			if (Trim(document.getElementById("inputInternalNamePlural").value).length > 0 && Trim(document.getElementById("inputPrimaryField").value).length > 0 && Trim(document.getElementById("inputInternalName").value).length > 0)
			{
				document.getElementById("buttonCreateOK").disabled = false;
			}
			else
			{
				document.getElementById("buttonCreateOK").disabled = true;
			}
		}
	
		function InternalNamePluralChanged()
		{
			document.getElementById("inputInternalNamePlural").value = Trim(document.getElementById("inputInternalNamePlural").value);
		}
		function InternalNameChanged()
		{
			document.getElementById("inputInternalName").value = Trim(document.getElementById("inputInternalName").value);
		}
		function PrimaryFieldChanged()
		{
			document.getElementById("inputPrimaryField").value=Trim(document.getElementById("inputPrimaryField").value);
		}
		function entityMapPageLoad()
		{
			var cancelBtn = document.getElementById("buttonCancel");
			cancelBtn.onclick = OnCancelClicked;
			// JumpBackToEntityMappingPage property is used to jump from map summary page to entity mapping page.
			WizardSetProperty("JumpBackToEntityMappingPage", false);
			// WantToSkip is called after OnLoad.
			// Skipping is based on the state of the next button after all the controls are set properly.
			// Hence we want to do all the processing in WantToSkip,
			// Please see the WannToSkip method and add any logic there.
			// If we do not do this, the page flashes.
            if(!WantToSkip())
            {
			    attachWindowOnUnload(OnWizardUnload, parent.window);
			    attachWindowOnBeforeUnload(OnBeforeWindowUnload, parent.window);
            }
		}
		function OnCancelClicked() 
		{
		    cancelClicked = true;
		   WizardNavigate(_WizardNavigateEnum.CANCEL);
		}
		function OnEntityMapPageResize()
		{
			if (document.getElementById("createEntityDiv").style.display != "inline")
			{
				return;
			}
			ShowCreateEntityDiv();
		}
		
	</script>
    <style>
    .ms-crm-EntityMapPageDescription
    {
        position:absolute;
        height:50px;
        top:0px;
        left:0px;
        right:0px;
    }
    .ms-crm-EntityMapPageWarning
    {
        position:absolute;
        top:50px;
        height:30px;
        left:0px;
        right:0px;
    }
    .ms-crm-EntityMapPageSpace
    {
        position:absolute;
        top:80px;
        height:15px;
        left:0px;
        right:0px;
    }
    .ms-crm-EntityMapPageContent
    {
        position:absolute;
        top:95px;
        bottom:25px;
        left:0px;
        right:0px;
    }
    .ms-crm-EntityMapPageDebugDiv
    {
        position:absolute;
        height:20px;
        bottom:0px;
        left:0px;
        right:0px;
    }
    .ms-crm-EntityMapPageContentHeader
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
    .ms-crm-EntityMapPageMap
    {
        position: absolute;
        top: 25px;
        bottom: 0px;
        left: 0px;
        right: 0px;
    }
        
    .ms-crm-EntityMapPageContentHeader_Cell1
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
        
    .ms-crm-EntityMapPageContentHeader_Cell2
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
    .ms-crm-EntityMapPageContentHeader_Cell1Text
    {
        position:absolute;
        top:5px;
        <% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ){ %>
        right:30px;
        <% } else { %>
        left: 30px;
        <% } %>
    }
    .ms-crm-EntityMapPageContentHeader_Cell2Text
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
<body onresize="OnEntityMapPageResize();">
<div class="ms-crm-absolutePosition">
	<frm:WizardForm ID="crmForm" runat="server">
		<div id="mainBody" class="mscrm-iw-DivGeneric ms-crm-absolutePosition" style="width:auto;height:auto;">
		<div class="ms-crm-EntityMapPageDescription">
			<loc:Text ResourceId="ImportWizard.EntityMapPage.Description" runat="server" />
		</div>
        <div class="ms-crm-EntityMapPageWarning">
            <div id="infoBalloon" class="mscrm-iw-InfoBarYellow" style="width:100%">
					<img id="infoBalloonImage" class="mscrm-iw-InfoBarBalloon" alt='' src=''>&nbsp;&nbsp; <span id="infoBalloonText" class="mscrm-iw-InfoBarText"></span>
			</div>
        </div>
        <div class="ms-crm-EntityMapPageSpace">&nbsp;</div>
        <div class="ms-crm-EntityMapPageContent">
					<div class="mscrm-iw-Border mscrm-iw-DivGeneric  ms-crm-absolutePosition">
						 <div class="ms-crm-EntityMapPageContentHeader">
								<div class="ms-crm-EntityMapPageContentHeader_Cell1" tabindex=0>
									<div  class="ms-crm-EntityMapPageContentHeader_Cell1Text"><nobr>
									<nobr>
										<loc:Text ResourceId="ImportWizard.EntityMapPage.Label.SourceDataFile" runat="server" />
									</nobr>
								</div> 
								</div>
								<div class="ms-crm-EntityMapPageContentHeader_Cell2" tabindex=0>
									<div class="ms-crm-EntityMapPageContentHeader_Cell2Text" >
									<nobr>
										<loc:Text ResourceId="ImportWizard.EntityMapPage.Label.CrmEntity" runat="server" />
									</nobr>
								</div> 
								</div>
							</div>
							<div class="mscrm-iw-OverFlowDiv ms-crm-EntityMapPageMap">
							<div class="mscrm-iw-OverFlowDiv mscrm-iw-DivGeneric">
								<table cellpadding="0" cellspacing="0" width="100%">
								<tr>
									<td>
										<table id="entityMappingTable" class="mscrm-iw-TableGeneric" cellpadding="0" cellspacing="0" runat="server" >
										</table>
									</td>
								</tr>
								<tr>
									<td>
<!---------------------------------------------------------Start Create Entity Div Section -------------------------------------------------------------------->									
									<div id="createEntityDiv" class="mscrm-iw-PopupDiv">
										<div class="mscrm-iw-PopupDivInner">
											<table width="100%" cellpadding="0" cellspacing="0">
												<tr class="mscrm-iw-AMP-PopupHeader">
													<td>
														<span id="createEntityDivTitle" class="mscrm-iw-AMP-PopupTitle"></span>
													</td>
													<td>
														<span class="mscrm-iw-AMP-CrossImage">
															<a id="closeCreateDivLink" href="javascript:CancelCreateNewEntity();" ><img src="/_imgs/importwizard_cross.gif" /></a>
														</span>
													</td>
												</tr>
											</table>
											<table width="100%">
												<col width="3%" />
												<colgroup>
													<col width="50%" />
													<col width="50%" />
												</colgroup>
												<tr>
													<td />
													<td>
														<span class="mscrm-iw-PopupDivElement">
															<label for="inputInternalName">
																<nobr>
																	<loc:Text ResourceId="ImportWizard.EntityMapPage.createEntityDiv.InternalName" runat="server" />
																</nobr>
															</label>
														</span>
													</td>
													<td>
														<span class="mscrm-iw-PopupDivElement">
															<label for="inputInternalNamePlural">
																<nobr>
																	<loc:Text ResourceId="ImportWizard.EntityMapPage.createEntityDiv.InternalNamePlural" runat="server" />
																</nobr>
															</label>
														</span>
													</td>
												</tr>
												<tr>
													<td />
													<td>
														<span class="mscrm-iw-PopupDivElement">
															<input id="inputInternalName" onkeyup="OKbuttonDisabledCheck();" onchange="InternalNameChanged();" type="text" name="inputInternalName" maxlength="40" />
														</span>
													</td>
													<td>
														<span class="mscrm-iw-PopupDivElement">
															<input id="inputInternalNamePlural" onkeyup="OKbuttonDisabledCheck();" onchange="InternalNamePluralChanged();" name="inputInternalNamePlural" maxlength="50" />
														</span>
													</td>
												</tr>
												<tr>
													<td />
													<td />
													<td>
														<span class="mscrm-iw-PopupDivElement">
															<label id="PrimaryField" for="inputPrimaryField">
																<nobr>
																	<loc:Text ResourceId="ImportWizard.EntityMapPage.createEntityDiv.PrimaryField" runat="server" />
																</nobr>
															</label>
														</span>
													</td>
												</tr>
												<tr>
													<td />
													<td />
													<td>
														<span class="mscrm-iw-PopupDivElement">
															<input id="inputPrimaryField" onkeyup="OKbuttonDisabledCheck();" onchange="PrimaryFieldChanged();" type="text" name="inputPrimaryField" maxlength="40" />
														</span>
													</td>
												</tr>
												<tr>
													<td />
													<td />
													<td>
														<span id="createEntityDivButtonSpan" class="mscrm-iw-PopupDivElement">
															<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft){ %>
																<div align="left">
															<%}else{ %>
																<div align="right">
															<%} %>
																<ui:Button ID="buttonCreateOK" OnClick="CreateNewEntity();" ResourceId="Button_Label_OK" runat="server" />
																&nbsp;<ui:Button ID="buttonCreateCancel" OnClick="CancelCreateNewEntity();" ResourceId="Button_Label_Cancel" runat="server" />
															</div>
														</span>
													</td>
												</tr>
											</table>
										</div>
										<![if lte IE 6.5]><iframe scroll=none></iframe><![endif]>
									</div>
<!---------------------------------------------------------End Create Entity Div Section -------------------------------------------------------------------->
									</td>
								</tr>
								</table>
							</div>
						</div>
						
					</div>
		    </div>
		
		<div id="progressDiv" class="mscrm-iw-ProgressDiv">
		<table class="mscrm-iw-ProgressTable">
			<tr>
				<td valign='middle' align='center'>
					<img alt='' src='/_imgs/AdvFind/progress.gif' />
					<br/>
					<label id="progressMessage"><loc:Text ResourceId="ImportWizard.EntityMapPage.ProgressMessage" Encoding="None" runat="server"/></label>
				</td>
			</tr>
		</table>
		</div>
        </div>
	</frm:WizardForm>
</body>
</html>
