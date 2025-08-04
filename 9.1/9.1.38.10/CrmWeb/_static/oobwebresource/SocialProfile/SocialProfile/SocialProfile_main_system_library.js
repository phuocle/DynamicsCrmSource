/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
var ClientUtility;
(function (ClientUtility) {
    var DataUtils = (function () {
        function DataUtils() {
        }
        return DataUtils;
    }());
    /**
     * Checks if a given object is a function
     * @param object The object check.
     * @returns true if the object is a function; otherwise, false.
     */
    DataUtils.isFunction = function (object) {
        return !!object && typeof object === 'function';
    };
    /**
     * Checks if a given object has a given function
     * @param object The object check.
     * @param functionName The name of the function to check for.
     * @returns true if the object has a given function; otherwise, false.
     */
    DataUtils.hasFunction = function (object, functionName) {
        return !!object && functionName && DataUtils.isFunction(object[functionName]);
    };
    ClientUtility.DataUtils = DataUtils;
})(ClientUtility || (ClientUtility = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="DataUtils.ts" />
var ClientUtility;
(function (ClientUtility) {
    var ClientUtils = (function () {
        function ClientUtils() {
        }
        /**
         * Checks whether the code is running on a UCI client.
         * @returns A flag indicating whether the code is running on a UCI client.
         */
        ClientUtils.isUCI = function () {
            var global = window;
            var xrm = global.Xrm;
            var result = false;
            if (xrm && xrm.Internal && ClientUtility.DataUtils.hasFunction(xrm.Internal, 'isUci')) {
                result = xrm.Internal.isUci();
            }
            else {
                // fall back to url inspection
                result = window && window.parent && window.parent.location && window.parent.location.href && window.parent.location.href.toLowerCase().indexOf('uclient') !== -1;
            }
            return result;
        };
        return ClientUtils;
    }());
    ClientUtility.ClientUtils = ClientUtils;
})(ClientUtility || (ClientUtility = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../../../ClientUtility/Client/Common/Utils.NoClientApi/ClientUtils.ts" />
var SocialProfile;
(function (SocialProfile_1) {
    var SocialProfile = (function () {
        function SocialProfile() {
            var global = window;
            var mscrm = global.Mscrm;
            mscrm.Form_onload = function (context) {
                if (Xrm.Page.ui.getFormType() === 1 /* Create */) {
                    showAlertDialog();
                }
            };
            mscrm.Form_onsave = function (context) {
                if (Xrm.Page.ui.getFormType() === 1 /* Create */) {
                    context.getEventArgs().preventDefault();
                    showAlertDialog();
                }
            };
            function showAlertDialog() {
                // read the localized string from AppCommon localization webresource.
                var displayString = Xrm.Utility.getResourceString("CRM/Localization/Languages/CRM", "Web.cs.createNotSupported");
                var entityName = Xrm.Utility.getResourceString("CRM/Localization/Languages/CRM", "SocialProfile_EntityName");
                var formattedString = null;
                if (entityName && displayString) {
                    formattedString = String.format(displayString, entityName);
                }
                Xrm.Navigation.openAlertDialog({ text: formattedString }, null);
            }
        }
        return SocialProfile;
    }());
    SocialProfile.Instance = new SocialProfile();
    SocialProfile_1.SocialProfile = SocialProfile;
})(SocialProfile || (SocialProfile = {}));
//# sourceMappingURL=SocialProfile_main_system_library.js.map