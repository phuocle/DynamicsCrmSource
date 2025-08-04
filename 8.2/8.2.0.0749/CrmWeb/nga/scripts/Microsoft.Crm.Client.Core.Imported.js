Type.registerNamespace('Mscrm.Imported');

Type.registerNamespace('Microsoft.Crm.Client.Core.Imported');

Microsoft.Crm.Client.Core.Imported.IActiveDeferred$2 = function() {}
Microsoft.Crm.Client.Core.Imported.IActiveDeferred$2.$$ = function(TData, TError) {
    var $$cn = 'IActiveDeferred$2' +
        '$' +
        TData.getName().replace(/\./g, '_') +
        '$' +
        TError.getName().replace(/\./g, '_');
    if (!Microsoft.Crm.Client.Core.Imported[$$cn]) {
        var $$ccr = Microsoft.Crm.Client.Core.Imported[$$cn] = function() {
        };
        $$ccr.registerInterface('Microsoft.Crm.Client.Core.Imported.' + $$cn);
    }
    return Microsoft.Crm.Client.Core.Imported[$$cn];
}
Microsoft.Crm.Client.Core.Imported.IActiveDeferred$2
    .registerInterface('Microsoft.Crm.Client.Core.Imported.IActiveDeferred$2');


Microsoft.Crm.Client.Core.Imported.IDeferred$2 = function() {}
Microsoft.Crm.Client.Core.Imported.IDeferred$2.$$ = function(TData, TError) {
    var $$cn = 'IDeferred$2' + '$' + TData.getName().replace(/\./g, '_') + '$' + TError.getName().replace(/\./g, '_');
    if (!Microsoft.Crm.Client.Core.Imported[$$cn]) {
        var $$ccr = Microsoft.Crm.Client.Core.Imported[$$cn] = function() {
        };
        $$ccr.registerInterface('Microsoft.Crm.Client.Core.Imported.' + $$cn);
    }
    return Microsoft.Crm.Client.Core.Imported[$$cn];
}
Microsoft.Crm.Client.Core.Imported.IDeferred$2.registerInterface('Microsoft.Crm.Client.Core.Imported.IDeferred$2');


Microsoft.Crm.Client.Core.Imported.XPathResultType = function() {}
Microsoft.Crm.Client.Core.Imported.XPathResultType.prototype = {
    ANY_TYPE: 0,
    NUMBER_TYPE: 1,
    STRING_TYPE: 2,
    BOOLEAN_TYPE: 3,
    UNORDERED_NODE_ITERATOR_TYPE: 4,
    ORDERED_NODE_ITERATOR_TYPE: 5,
    UNORDERED_NODE_SNAPSHOT_TYPE: 6,
    ORDERED_NODE_SNAPSHOT_TYPE: 7,
    ANY_UNORDERED_NODE_TYPE: 8,
    FIRST_ORDERED_NODE_TYPE: 9
}
Microsoft.Crm.Client.Core.Imported.XPathResultType
    .registerEnum('Microsoft.Crm.Client.Core.Imported.XPathResultType', false);


Microsoft.Crm.Client.Core.Imported.DeferredPromiseHelper = function() {
}
Microsoft.Crm.Client.Core.Imported.DeferredPromiseHelper.prepareForUnitTests = function() {
    // file:///C:/bt/260759/r/86897c/src/Client/Application/CRMsrc/Core/Imported/DeferredPromiseHelper.cs (19,3)
    Promise.setScheduler(function(fn) { fn(); });
    Microsoft.Crm.Client.Core.Imported.DeferredPromiseHelper.turnOffUnhandledErrorWarnings();
}
Microsoft.Crm.Client.Core.Imported.DeferredPromiseHelper.turnOffUnhandledErrorWarnings = function() {
    // file:///C:/bt/260759/r/86897c/src/Client/Application/CRMsrc/Core/Imported/DeferredPromiseHelper.cs (30,3)
    Promise.onPossiblyUnhandledRejection(function(e) {});;
}
Microsoft.Crm.Client.Core.Imported.DeferredPromiseHelper.when = function() {
    var deferreds = [];
    for (var $$pai_2 = 0; $$pai_2 < arguments.length; ++$$pai_2) {
        deferreds[$$pai_2] = arguments[$$pai_2];
    }
    // file:///C:/bt/260759/r/86897c/src/Client/Application/CRMsrc/Core/Imported/DeferredPromiseHelper.cs (42,3)
    var $$t_1;
    return ($$t_1 = MscrmComponents.DeferredPromiseFactory(Array, Object)).all.apply($$t_1, deferreds);
}
Microsoft.Crm.Client.Core.Imported.DeferredPromiseHelper.whenArray = function(deferreds) {
    // file:///C:/bt/260759/r/86897c/src/Client/Application/CRMsrc/Core/Imported/DeferredPromiseHelper.cs (52,3)
    return MscrmComponents.DeferredPromiseFactory(Array, Object).allArray(deferreds);
}
Microsoft.Crm.Client.Core.Imported.DeferredPromiseHelper.isPending = function(TData, TError, deferred) {
    // file:///C:/bt/260759/r/86897c/src/Client/Application/CRMsrc/Core/Imported/DeferredPromiseHelper.cs (66,3)
    return !(deferred.isRejected() || deferred.isResolved());
}


function IsNull(value) {
    // file:///C:/bt/260759/r/86897c/src/Client/Application/CRMsrc/Core/Imported/JsTypes.cs (23,3)
    return typeof(value) === 'undefined' || typeof(value) === 'unknown' || value == null;
}


Type.registerNamespace('Microsoft.Crm.Client.Core.Imported.Cordova');

Microsoft.Crm.Client.Core.Imported.Cordova.PluginOutput = function() {}


Microsoft.Crm.Client.Core.Imported.Cordova.DestinationTypeEnum = function() {}
Microsoft.Crm.Client.Core.Imported.Cordova.DestinationTypeEnum.prototype = {
    datA_URL: 0,
    filE_URI: 1,
    nativE_URI: 2
}
Microsoft.Crm.Client.Core.Imported.Cordova.DestinationTypeEnum
    .registerEnum('Microsoft.Crm.Client.Core.Imported.Cordova.DestinationTypeEnum', false);


Microsoft.Crm.Client.Core.Imported.Cordova.PictureSourceTypeEnum = function() {}
Microsoft.Crm.Client.Core.Imported.Cordova.PictureSourceTypeEnum.prototype = {
    PHOTOLIBRARY: 0,
    CAMERA: 1,
    SAVEDPHOTOALBUM: 2
}
Microsoft.Crm.Client.Core.Imported.Cordova.PictureSourceTypeEnum
    .registerEnum('Microsoft.Crm.Client.Core.Imported.Cordova.PictureSourceTypeEnum', false);


Microsoft.Crm.Client.Core.Imported.Cordova.CordovaPluginOptions = function() {}


Microsoft.Crm.Client.Core.Imported.Cordova.PluginError = function() {
}
Microsoft.Crm.Client.Core.Imported.Cordova.PluginError.prototype = {
    message: null,
    code: 0
}


Microsoft.Crm.Client.Core.Imported.Cordova.CordovaConstants = function() {
}


Type.registerNamespace('Microsoft.Crm.Client.Core.Imported.MediaElement');

Type.registerNamespace('Microsoft.Crm.Client.Core.Imported.Norsync');

Microsoft.Crm.Client.Core.Imported.Norsync.SQLiteRecord = function() {}


Microsoft.Crm.Client.Core.Imported.DeferredPromiseHelper
    .registerClass('Microsoft.Crm.Client.Core.Imported.DeferredPromiseHelper');
Microsoft.Crm.Client.Core.Imported.Cordova.PluginOutput
    .registerClass('Microsoft.Crm.Client.Core.Imported.Cordova.PluginOutput');
Microsoft.Crm.Client.Core.Imported.Cordova.CordovaPluginOptions
    .registerClass('Microsoft.Crm.Client.Core.Imported.Cordova.CordovaPluginOptions');
Microsoft.Crm.Client.Core.Imported.Cordova.PluginError
    .registerClass('Microsoft.Crm.Client.Core.Imported.Cordova.PluginError');
Microsoft.Crm.Client.Core.Imported.Cordova.CordovaConstants
    .registerClass('Microsoft.Crm.Client.Core.Imported.Cordova.CordovaConstants');
Microsoft.Crm.Client.Core.Imported.Norsync.SQLiteRecord
    .registerClass('Microsoft.Crm.Client.Core.Imported.Norsync.SQLiteRecord');
Microsoft.Crm.Client.Core.Imported.Cordova.CordovaConstants.actionTakePicture = 'TakePicture';
Microsoft.Crm.Client.Core.Imported.Cordova.CordovaConstants.actionCaptureVideo = 'CaptureVideo';
Microsoft.Crm.Client.Core.Imported.Cordova.CordovaConstants.actionCaptureAudio = 'CaptureAudio';
Microsoft.Crm.Client.Core.Imported.Cordova.CordovaConstants.actionScanBarCode = 'ScanBarCode';
Microsoft.Crm.Client.Core.Imported.Cordova.CordovaConstants.actionGeolocationCode = 'GeolocationCode';
Microsoft.Crm.Client.Core.Imported.Cordova.CordovaConstants.messageUserCancelledPlugin = 'no image selected';
Microsoft.Crm.Client.Core.Imported.Cordova.CordovaConstants.codeUserCancelledCapturePlugin = '3';
Microsoft.Crm.Client.Core.Imported.Cordova.CordovaConstants
    .messageUserDisabledCameraInPrivacySettings =
    'access to the camera has been prohibited; please enable it in the settings app to continue.';
//@ sourceMappingURL=file:///C:/bt/260759/r/86897c/Target/bin/Release/Microsoft.Crm.Client.Core.Imported.js.srcmap