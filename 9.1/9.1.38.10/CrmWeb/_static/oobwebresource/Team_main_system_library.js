
Type.registerNamespace("Mscrm");
Mscrm.TeamMainSystemLibraryWebResource = function()
{
};
Mscrm.TeamMainSystemLibraryWebResource.form_onload = function()
{
	Mscrm.TeamMainSystemLibraryWebResource.initializeAADControls();
	var teamType = Xrm.Page.getAttribute("teamtype");
	if(teamType)
	{
		var teamTypeValue = teamType.getValue();
		Mscrm.TeamMainSystemLibraryWebResource.TeamType.access === teamTypeValue && Mscrm.TeamMainSystemLibraryWebResource._enableDisableNavPaneItems$p(true);
		if (!Mscrm.TeamMainSystemLibraryWebResource.isUci())
		{
			Xrm.Page.ui.refreshRibbon();
		}
	}
};
Mscrm.TeamMainSystemLibraryWebResource.teamtype_onchange = function()
{
	var teamId = Xrm.Page.data.entity.getId();	
	var teamType = Xrm.Page.getAttribute("teamtype");
	if (!teamType)
	{
		return;
	}
	var teamTypeValue = teamType.getValue();
	Mscrm.TeamMainSystemLibraryWebResource._enableDisableAzureActiveDirectoryObjectId$p(!(Mscrm.TeamMainSystemLibraryWebResource.TeamType.aadSecurityGroup === teamTypeValue || Mscrm.TeamMainSystemLibraryWebResource.TeamType.aadOfficeGroup === teamTypeValue));	
	Mscrm.TeamMainSystemLibraryWebResource._showMembershipType$p(teamTypeValue);
	if (!teamId)
	{
		return;
	}	
	Mscrm.TeamMainSystemLibraryWebResource.trySetTeamType(teamId, teamType)
};
Mscrm.TeamMainSystemLibraryWebResource._enableDisableNavPaneItems$p = function(disable)
{
	if(Xrm.Page && Xrm.Page.ui && Xrm.Page.ui.navigation && Xrm.Page.ui.navigation.items)
	{
		var securityRoleElement = Xrm.Page.ui.navigation.items.get("navRoles");
		var fieldSecurityProfileElement = Xrm.Page.ui.navigation.items.get("navFieldSecurityProfiles");
		if(typeof(disable) === "boolean")
		{
			securityRoleElement && securityRoleElement.setVisible(!disable);
			fieldSecurityProfileElement && fieldSecurityProfileElement.setVisible(!disable);
		}
	}
};
Mscrm.TeamMainSystemLibraryWebResource.trySetTeamType = function(teamId, teamType)
{
	if(Mscrm.TeamMainSystemLibraryWebResource.isUci())
	{
		Mscrm.TeamMainSystemLibraryWebResource.trySetTeamTypeUci(teamId, teamType);
	}
	else
	{
		Mscrm.TeamMainSystemLibraryWebResource.trySetTeamTypeWeb(teamId, teamType);
	}
};
Mscrm.TeamMainSystemLibraryWebResource._updateTeamType$p = function(teamId, teamType, teamTypeValue)  
{
	if(Mscrm.TeamMainSystemLibraryWebResource.isUci())
	{
		Mscrm.TeamMainSystemLibraryWebResource._updateTeamTypeUci$p(teamId, teamType, teamTypeValue);
	}
	else
	{
		Mscrm.TeamMainSystemLibraryWebResource._updateTeamTypeWeb$p(teamId, teamType, teamTypeValue);
	}
};

Mscrm.TeamMainSystemLibraryWebResource.isUci = function()
{
	return Xrm.Internal.isUci();
}

Mscrm.TeamMainSystemLibraryWebResource.trySetTeamTypeWeb = function(teamId, teamType)
{
	var teamTypeValue = teamType.getValue();
	if(teamTypeValue === Mscrm.TeamMainSystemLibraryWebResource.TeamType.access)
	{
		var fetchXml = "<fetch version='1.0' mapping='logical'><entity name='teamroles'><attribute name='roleid' /><filter type='and'><condition attribute='teamid' operator='eq' value='" + CrmEncodeDecode.CrmXmlAttributeEncode(teamId) + "' /></filter></entity></fetch>";
		Xrm.Internal.messages.retrieveMultiple(fetchXml).then(function(responseRole)
		{
			var role = responseRole.entityCollection;
			if(role.get_count() > 0)
			{
				Xrm.Utility.alertDialog(Xrm.Internal.getResourceString("TEAM_ACCESS_NO_APPLY_WITH_ROLES"), null);
				var oldValue = teamTypeValue === Mscrm.TeamMainSystemLibraryWebResource.TeamType.access ? 0 : Mscrm.TeamMainSystemLibraryWebResource.TeamType.access;
				teamType.setValue(oldValue);
				return;
			}
			else
			{
				Mscrm.TeamMainSystemLibraryWebResource._updateTeamType$p(teamId, teamType, teamTypeValue);
			}
		},function(errorResponse)
		{
			Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback(errorResponse)
		})
	}
	else
	{
		Mscrm.TeamMainSystemLibraryWebResource._updateTeamType$p(teamId, teamType, teamTypeValue);
	}
};

Mscrm.TeamMainSystemLibraryWebResource._updateTeamTypeWeb$p = function(teamId, teamType, teamTypeValue)  
{
	Xrm.Internal.messages.retrieve(Mscrm.InternalUtilities.EntityNames.Team, teamId, ["teamtype"]).then(function(responseTeamType)
	{
		var team = responseTeamType.entity;
		team.initializeValue("teamtype",teamType,Xrm.Objects.AttributeType.integer);
		team.get_changedFieldNames().addRange(["teamtype"]);
		Xrm.Internal.messages.update(team);
		if(Mscrm.TeamMainSystemLibraryWebResource.TeamType.access === teamTypeValue)
		{
			Mscrm.TeamMainSystemLibraryWebResource._enableDisableNavPaneItems$p(true);
		}
		else
		{
			(Mscrm.TeamMainSystemLibraryWebResource.TeamType.aadSecurityGroup === teamTypeValue || Mscrm.TeamMainSystemLibraryWebResource.TeamType.aadOfficeGroup === teamTypeValue) && Mscrm.TeamMainSystemLibraryWebResource._enableDisableAzureActiveDirectoryObjectId$p(false);
			Mscrm.TeamMainSystemLibraryWebResource._enableDisableNavPaneItems$p(false);
		}
		
		Xrm.Page.ui.refreshRibbon();
	},function(errorResponse)
	{
		Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback(errorResponse)
	});
};

Mscrm.TeamMainSystemLibraryWebResource.trySetTeamTypeUci = function(teamId, teamType)
{
	var teamTypeValue = teamType.getValue();
	if(teamTypeValue === Mscrm.TeamMainSystemLibraryWebResource.TeamType.access)
	{
		var queryXml = "<fetch version='1.0' mapping='logical'><entity name='teamroles'><attribute name='roleid' /><filter type='and'><condition attribute='teamid' operator='eq' value='" + encodeURIComponent(teamId) + "' /></filter></entity></fetch>";
		Xrm.WebApi.online.retrieveMultipleRecords("teamroles", "?fetchXml= " + queryXml).then(function (collection) 
		{
			var role = collection.entities;
			if(role.get_count() > 0)
			{
				Xrm.Utility.alertDialog(XrmCore.InternalUtilities.GenericUtilities.getLocalResourceString("TEAM_ACCESS_NO_APPLY_WITH_ROLES"),null);
				var oldValue = teamTypeValue === Mscrm.TeamMainSystemLibraryWebResource.TeamType.access ? 0 : Mscrm.TeamMainSystemLibraryWebResource.TeamType.access;
				teamType.setValue(oldValue);
				return;
			}
			else
			{
				Mscrm.TeamMainSystemLibraryWebResource._updateTeamType$p(teamId, teamType, teamTypeValue);
			}
		}, function (errorResponse) {
			XrmCore.InternalUtilities.GenericUtilities.HandleErrorMessage(errorResponse);
		});
	}
	else
	{
		Mscrm.TeamMainSystemLibraryWebResource._updateTeamType$p(teamId, teamType, teamTypeValue);
	}
};

Mscrm.TeamMainSystemLibraryWebResource._updateTeamTypeUci$p = function(teamId, teamType, teamTypeValue)
{
	var retrieveOptions = "?$select=teamtype";
	Xrm.WebApi.retrieveRecord(XrmCore.InternalUtilities.EntityUtilities.EntityNames.Team, teamId, retrieveOptions).then(function(responseTeamType)
	{
		var team = responseTeamType;
		team["teamtype"] = teamTypeValue;
		Xrm.WebApi.updateRecord(XrmCore.InternalUtilities.EntityUtilities.EntityNames.Team, teamId, team).then(function (entity) 
		{
			if(Mscrm.TeamMainSystemLibraryWebResource.TeamType.access === teamTypeValue)
			{
				Mscrm.TeamMainSystemLibraryWebResource._enableDisableNavPaneItems$p(true);
			}
			else
			{
				(Mscrm.TeamMainSystemLibraryWebResource.TeamType.aadSecurityGroup === teamTypeValue || Mscrm.TeamMainSystemLibraryWebResource.TeamType.aadOfficeGroup === teamTypeValue) && Mscrm.TeamMainSystemLibraryWebResource._enableDisableAzureActiveDirectoryObjectId$p(false);
				Mscrm.TeamMainSystemLibraryWebResource._enableDisableNavPaneItems$p(false);
			}
			
			Xrm.Page.ui.refreshRibbon();
		}, function (errorResponse) {
			XrmCore.InternalUtilities.GenericUtilities.HandleErrorMessage(errorResponse);
		});
	}, function (errorResponse) {
		XrmCore.InternalUtilities.GenericUtilities.HandleErrorMessage(errorResponse);
	});
};

Mscrm.TeamMainSystemLibraryWebResource.trySetMembershipType = function(teamId, membershipType)
{
	if(Mscrm.TeamMainSystemLibraryWebResource.isUci())
	{
		Mscrm.TeamMainSystemLibraryWebResource.trySetMembershipTypeUci(teamId, membershipType);
	}
	else
	{
		Mscrm.TeamMainSystemLibraryWebResource.trySetMembershipTypeWeb(teamId, membershipType);
	}
};
Mscrm.TeamMainSystemLibraryWebResource.trySetMembershipTypeWeb = function(teamId, membershipType)  
{
	Xrm.Internal.messages.retrieve(Mscrm.InternalUtilities.EntityNames.Team, teamId, ["membershiptype"]).then(function(responseType)
	{
		var team = responseTeamType.entity;
		team.initializeValue("membershiptype",membershipType,Xrm.Objects.AttributeType.integer);
		team.get_changedFieldNames().addRange(["membershiptype"]);
		Xrm.Internal.messages.update(team);
		Xrm.Page.ui.refreshRibbon();
	},function(errorResponse)
	{
		Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback(errorResponse)
	});
};

Mscrm.TeamMainSystemLibraryWebResource.trySetMembershipTypeUci = function(teamId, membershipType)  
{
	var retrieveOptions = "?$select=membershiptype";
	Xrm.WebApi.retrieveRecord(XrmCore.InternalUtilities.EntityUtilities.EntityNames.Team, teamId, retrieveOptions).then(function(response)
	{
		var team = response;
		team["membershiptype"] = membershipType;
		Xrm.WebApi.updateRecord(XrmCore.InternalUtilities.EntityUtilities.EntityNames.Team, teamId, team).then(function (entity) 
		{					
			Xrm.Page.ui.refreshRibbon();
		}, function (errorResponse) {
			XrmCore.InternalUtilities.GenericUtilities.HandleErrorMessage(errorResponse);
		});
	}, function (errorResponse) {
		XrmCore.InternalUtilities.GenericUtilities.HandleErrorMessage(errorResponse);
	});
}

Mscrm.TeamMainSystemLibraryWebResource._enableDisableAzureActiveDirectoryObjectId$p = function(disable)
{
	var aadObjectId = Xrm.Page.getAttribute("azureactivedirectoryobjectid");
	if(aadObjectId)
	{
		var control = aadObjectId.controls.getByIndex(0);
		if(disable)
		{
			if(Xrm.Internal.isUci())
			{
				aadObjectId.setValue(null);
			}
			else
			{
				aadObjectId.setValue("");
			}
			aadObjectId.setRequiredLevel(Xrm.Constants.AttributeRequiredLevels.none)
		}
		else
			aadObjectId.setRequiredLevel(Xrm.Constants.AttributeRequiredLevels.required);
		control.setDisabled(disable)
	}
};
Mscrm.TeamMainSystemLibraryWebResource._hideAADGroup$p = function(controlName)
{
	var Control = Xrm.Page.getControl(controlName),
		aadObjectId = Xrm.Page.getAttribute("azureactivedirectoryobjectid");
	if(aadObjectId)
		Control && Control.setVisible(false)
};
Mscrm.TeamMainSystemLibraryWebResource._showMembershipType$p = function(teamTypeValue)
{
	let shouldShow = Mscrm.TeamMainSystemLibraryWebResource.isMembershipTypeFeatureEnabled() 
			&& 	Mscrm.TeamMainSystemLibraryWebResource.isAADGroupFeatureEnabled()
			&& (teamTypeValue ==  Mscrm.TeamMainSystemLibraryWebResource.TeamType.aadOfficeGroup 
				|| teamTypeValue == Mscrm.TeamMainSystemLibraryWebResource.TeamType.aadSecurityGroup);
	var control = Xrm.Page.getControl("membershiptype"),
		membershipType = Xrm.Page.getAttribute("membershiptype");

	if(membershipType)
	{
		control && control.setVisible(shouldShow);
	}
};
Mscrm.TeamMainSystemLibraryWebResource.membershiptype_onchange = function()
{
	var teamId = Xrm.Page.data.entity.getId();	
	if (!teamId)
	{
		return;
	}
	
	var membershipType = Xrm.Page.getAttribute("membershiptype");
	if (!membershipType)
	{
		return;
	}

	Mscrm.TeamMainSystemLibraryWebResource.trySetMembershipType(teamId, membershipType)
};
Mscrm.TeamMainSystemLibraryWebResource.initializeAADControls = function ()
{
	var teamTypeModeControl = Xrm.Page.ui.controls.get("teamtype");	
	var teamId = Xrm.Page.data.entity.getId();
	var teamType = Xrm.Page.getAttribute("teamtype");
	if (!teamType)
	{
		return;
	}
	var teamTypeValue = teamType.getValue();

	Mscrm.TeamMainSystemLibraryWebResource._showMembershipType$p(teamTypeValue);

	if (Mscrm.TeamMainSystemLibraryWebResource.isAADGroupFeatureEnabled()) {
		var aadObjectId = Xrm.Page.getAttribute("azureactivedirectoryobjectid");
		var addObjectIdVal = aadObjectId ? aadObjectId.getValue() : null;
		if(addObjectIdVal && Xrm.Page.ui.getFormType() === 2)
		{
			aadObjectId.setRequiredLevel(Xrm.Constants.AttributeRequiredLevels.required)
		}
	}
	else {
		Mscrm.TeamMainSystemLibraryWebResource._hideAADGroup$p("azureactivedirectoryobjectid");
		Mscrm.TeamMainSystemLibraryWebResource._removeOptionFromControl$p(teamTypeModeControl, Mscrm.TeamMainSystemLibraryWebResource.TeamType.aadSecurityGroup)
		Mscrm.TeamMainSystemLibraryWebResource._removeOptionFromControl$p(teamTypeModeControl, Mscrm.TeamMainSystemLibraryWebResource.TeamType.aadOfficeGroup)
	}
};
Mscrm.TeamMainSystemLibraryWebResource.isAADGroupFeatureEnabled = function ()
{
	var isAADGroupEnabled = Xrm.Internal.isUci() ? Xrm.Internal.isFeatureEnabled("AADGroups") : Xrm.Internal.isFeatureEnabled("FCB.AADGroups");
	var isLive = !Xrm.Page.context.isOnPremises();//Xrm.Page.context.isCrmOnline() is not working in UCI client.
	return isAADGroupEnabled && isLive;
};

Mscrm.TeamMainSystemLibraryWebResource.isMembershipTypeFeatureEnabled = function ()
{
	var isMembershipTypeEnabled = Xrm.Internal.isUci() ? Xrm.Internal.isFeatureEnabled("AADGroupsMembershipType") : Xrm.Internal.isFeatureEnabled("FCB.AADGroupsMembershipType");
	var isLive = !Xrm.Page.context.isOnPremises();//Xrm.Page.context.isCrmOnline() is not working in UCI client.
	return isMembershipTypeEnabled && isLive;
};

Mscrm.TeamMainSystemLibraryWebResource._removeOptionFromControl$p = function(control,option)
{
	control.removeOption(option)
};

Mscrm.TeamMainSystemLibraryWebResource.TeamType = function()
{
};
Mscrm.TeamMainSystemLibraryWebResource.TeamType.prototype = { owner: 0, access: 1, aadSecurityGroup: 2, aadOfficeGroup: 3};
Mscrm.TeamMainSystemLibraryWebResource.TeamType.registerEnum("Mscrm.TeamMainSystemLibraryWebResource.TeamType", false);
Mscrm.TeamMainSystemLibraryWebResource.MembershipType = function()
{
};
Mscrm.TeamMainSystemLibraryWebResource.MembershipType.prototype = { memberAandGuests: 0, members: 1, owners: 2, guests: 3};
Mscrm.TeamMainSystemLibraryWebResource.MembershipType.registerEnum("Mscrm.TeamMainSystemLibraryWebResource.MembershipType", false);
Mscrm.TeamGridCommandActions = function()
{
};
Mscrm.TeamGridCommandActions.addTeamMembers = function(gridControl, records, entityTypeCode)
{
	if(Mscrm.TeamGridCommandActions.isUci())
	{
		Mscrm.TeamGridCommandActions.addTeamMembersUci(gridControl, records, entityTypeCode);
	}
	else
	{
		Mscrm.TeamGridCommandActions.addTeamMembersWeb(gridControl, records, entityTypeCode);
	}
};
Mscrm.TeamGridCommandActions.removeTeamMembers = function(gridControl, records, entityTypeCode)
{
	if(Mscrm.TeamGridCommandActions.isUci())
	{
		Mscrm.TeamGridCommandActions.removeTeamMembersUci(gridControl, records, entityTypeCode);
	}
	else
	{
		Mscrm.TeamGridCommandActions.removeTeamMembersWeb(gridControl, records, entityTypeCode);
	}
};
Mscrm.TeamGridCommandActions.manageTeamRoles = function(gridControl, records, entityTypeCode)
{
	if(Mscrm.TeamGridCommandActions.isUci())
	{
		Mscrm.TeamGridCommandActions.manageTeamRolesUci(gridControl, records, entityTypeCode);
	}
	else
	{
		Mscrm.TeamGridCommandActions.manageTeamRolesWeb(gridControl, records, entityTypeCode);
	}
};

Mscrm.TeamGridCommandActions.addTeamMembersWeb = function(gridControl, records, entityTypeCode)
{
	var actionUri = Mscrm.InternalUtilities.GridUtilities.generateStandardActionUri("addtoteam", entityTypeCode, records.length);
	Mscrm.InternalUtilities.GridUtilities.executeStandardAction(actionUri, records, 500, 225, Mscrm.GridCommandActions.createRefreshGridCallback(gridControl));
};
Mscrm.TeamGridCommandActions.removeTeamMembersWeb = function(gridControl, records, entityTypeCode)
{
	var actionUri = Mscrm.InternalUtilities.GridUtilities.generateStandardActionUri("removefromteam", entityTypeCode, records.length);
	Mscrm.InternalUtilities.GridUtilities.executeStandardAction(actionUri,records, 540, 230, Mscrm.GridCommandActions.createRefreshGridCallback(gridControl));
};
Mscrm.TeamGridCommandActions.manageTeamRolesWeb = function(gridControl, records, entityTypeCode)
{
	var actionUri = Mscrm.InternalUtilities.GridUtilities.generateStandardActionUri("role", entityTypeCode, records.length);
	Mscrm.InternalUtilities.GridUtilities.executeStandardAction(actionUri, records, 500, 330, Mscrm.GridCommandActions.createRefreshGridCallback(gridControl));
};

Mscrm.TeamGridCommandActions.addTeamMembersUci = function(gridControl, records, entityTypeCode)
{
	return;
};
Mscrm.TeamGridCommandActions.removeTeamMembersUci = function(gridControl, records, entityTypeCode)
{
	return;
};
Mscrm.TeamGridCommandActions.manageTeamRolesUci = function(gridControl, records, entityTypeCode)
{
	return;
};
Mscrm.TeamGridCommandActions.isUci = function()
{
	return Xrm.Internal.isUci();
};
Mscrm.TeamMainSystemLibraryWebResource.registerClass("Mscrm.TeamMainSystemLibraryWebResource");
Mscrm.TeamGridCommandActions.registerClass("Mscrm.TeamGridCommandActions");
Type.registerNamespace("Mscrm");
Mscrm.Form_onload = Mscrm.TeamMainSystemLibraryWebResource.form_onload;
Mscrm.teamtype_onchange = Mscrm.TeamMainSystemLibraryWebResource.teamtype_onchange;
Mscrm.membershiptype_onchange = Mscrm.TeamMainSystemLibraryWebResource.membershiptype_onchange;
