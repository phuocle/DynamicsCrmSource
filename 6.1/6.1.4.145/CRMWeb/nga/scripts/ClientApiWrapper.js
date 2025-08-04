// ////////////////////////////////////////////////////////////////////////////////////////////////
// Following is the ClientApi wrapper intended to be referenced in the iFrame hosting customization scripts
// that have been added to application as .js web resources.
// We have this Wrapper since from inside the iframe ClientApi - Xrm.Page.. will need to referenced as 
// parent.Xrm.Page..
// ////////////////////////////////////////////////////////////////////////////////////////////////

Xrm = parent.Xrm;
CrmEncodeDecode = parent.CrmEncodeDecode;

// This is for use by the SDK proxy.
Microsoft = parent.Microsoft;

window.onerror = function (message, url, line) {
	Xrm.Internal.displayError(message, null, null);
};

Mscrm = function () { };

window.alert = function (message) {
	Mscrm.InternalUtilities._Script.alert(message);
};

window.confirm = function (message) {
	throw new Error(Xrm.Internal.getConfirmErrorMessage());
};

Mscrm.InternalUtilities = parent.Mscrm.InternalUtilities;
Mscrm.CrmUri = parent.Mscrm.CrmUri;
Mscrm.BusinessRules = parent.Mscrm.BusinessRules;

Mscrm.RunHandlerWithHandlerName = function (method, eventDetails, parameterArray) {
	try {
		if (!Mscrm.InternalUtilities._Script.isNullOrUndefined(method)) {
			var scopeSplit = method.split('.');
			var scope = Mscrm.GetMethodScope(method, scopeSplit);
			if (!Mscrm.InternalUtilities._Script.isNullOrUndefined(scope) && !Mscrm.InternalUtilities._Script.isNullOrUndefined(scope[scopeSplit[scopeSplit.length - 1]])) 
			{
				return scope[scopeSplit[scopeSplit.length - 1]].apply(null, parameterArray);
			}
		}
	} catch (e) {
		Xrm.Internal.displayError(e.message, eventDetails);
	}
};

Mscrm.RunHandlerWithHandlerObject = function (method, eventDetails, parameter, executionContext) {
	try {
		if (!Mscrm.InternalUtilities._Script.isNullOrUndefined(executionContext)) {
			if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(parameter)) {
				parameter = "executionContext, " + parameter;
			}
			else {
				parameter = "executionContext";
			}
		}

		// The custom parameters are passed as comma separated string to web resource methods.
		// Splitting and parsing this comma separated string into an array of javascript objects is error prone and might not cover all the scenarios.
		// Instead eval method is used to pass the comma separated parameter string as it is to the web resource method, similar to the way web client handles these parameters.
		eval("method" + "(" + parameter + ");");
	} catch (e) {
		Xrm.Internal.displayError(e.message, eventDetails);
	}
};

// Populate the CustomEventHandler model descriptor with the methods corresponding to the method names.
// Do we need to populate only the onChange and onSave handlers here?
Mscrm.HydrateModelDescriptor = function (descriptor) {
	var scopeSplit;
	var scope;
	for (var i = 0; i < descriptor.Properties["OnLoadHandlerNames"].length; i++) {
		scopeSplit = descriptor.Properties["OnLoadHandlerNames"][i].functionName.split('.');
		scope = Mscrm.GetMethodScope(descriptor.Properties["OnLoadHandlerNames"][i].functionName, scopeSplit);
		descriptor.Properties["OnLoadHandlerNames"][i].method = scope[scopeSplit[scopeSplit.length - 1]];
	}

	for (var i = 0; i < descriptor.Properties["OnSaveHandlerNames"].length; i++) {
		scopeSplit = descriptor.Properties["OnSaveHandlerNames"][i].functionName.split('.');
		scope = Mscrm.GetMethodScope(descriptor.Properties["OnSaveHandlerNames"][i].functionName, scopeSplit);
		descriptor.Properties["OnSaveHandlerNames"][i].method = scope[scopeSplit[scopeSplit.length - 1]];
	}

	for (var key in descriptor.Properties["OnChangeHandlerNames"]) {
		var keyValuePair = { key: key, value: descriptor.Properties["OnChangeHandlerNames"][key] };
		for (var i = 0; i < keyValuePair.value.length; i++) {
			scopeSplit = keyValuePair.value[i].functionName.split('.');
			scope = Mscrm.GetMethodScope(keyValuePair.value[i].functionName, scopeSplit);
			keyValuePair.value[i].method = scope[scopeSplit[scopeSplit.length - 1]];
		}
	}

	return descriptor;
};

// Type/Method wrappers added to map types in MoCA with AIR
IsNull = Mscrm.InternalUtilities.JSTypes.isNull;
isNullOrEmptyString = Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString;
Xrm.LookupObject = parent.Microsoft.Crm.Client.Core.ViewModels.LookupControlItem;
Xrm.OptionSetItem = parent.Microsoft.Crm.Client.Core.ViewModels.OptionSetItemWrapper;
isRefreshForm = function () { return true; }
window._IsRefreshForm = "1"; // needs to be a string, since opps.js checks with === "1", which must be typed the same

if (Mscrm.Utilities == null) {
	Mscrm.Utilities = [];
}
Mscrm.Utilities.isRefreshForm = isRefreshForm;
if (Mscrm.RibbonActions == null) {
	Mscrm.RibbonActions = [];
}
Mscrm.RibbonActions.isRefreshForm = isRefreshForm;
Mscrm.RibbonActions.isAutoSaveEnabled = Xrm.Page.context.getIsAutoSaveEnabled;

if (Mscrm.GridRibbonActions == null) 
{
	Mscrm.GridRibbonActions = [];
}
Mscrm.GridRibbonActions.isRefreshForm = isRefreshForm;

if (Xrm.SaveMode == null)
{
	Xrm.SaveMode = parent.Microsoft.Dynamics.Client.Core.Models.SaveMode;
}

// Get method scope
Mscrm.GetMethodScope = function (method, scopeSplit) {
	var scope = window;
	for (var i = 0; i < scopeSplit.length - 1; i++) {
		scope = scope[scopeSplit[i]];
		if (Mscrm.InternalUtilities._Script.isNullOrUndefined(scope)) {
			return null;
		}
	}

	return scope;
};