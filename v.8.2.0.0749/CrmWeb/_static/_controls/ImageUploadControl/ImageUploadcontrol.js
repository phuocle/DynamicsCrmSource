Type.registerNamespace("Mscrm");
Mscrm.ImageUploadControl = function() {};
Mscrm.ImageUploadControl.InitializeUploadDialog = function() {
    Mscrm.ImageUploadControl.$A();
    Mscrm.ImageUploadHelper.get_okButton().disabled = true;
    Mscrm.ImageUploadHelper.get_imageUploadForm().target = Mscrm.ImageUploadHelper.previewFrameName;
    if (Mscrm.ImageUploadSettingsProvider
        .isCustomImagePresent())
        Mscrm.ImageUploadHelper.get_previewFrame().src = Mscrm.ImageUploadSettingsProvider.get_customImageSource();
    else {
        Mscrm.ImageUploadHelper.get_previewFrame().src = Mscrm.ImageUploadSettingsProvider.get_defaultImageSource();
        Mscrm.ImageUploadHelper.get_removePictureOption().disabled = true
    }
};
Mscrm.ImageUploadControl.ImageChangedCallback = function(imageSource) {
    Mscrm.Utilities.setReturnValue(imageSource);
    Mscrm.ImageUploadControl.$B();
    closeWindow(true)
};
Mscrm.ImageUploadControl.FileTypeValidationCallback = function() { Mscrm.ImageUploadControl.$5(true) };
Mscrm.ImageUploadControl.FileSizeValidationCallback = function() { Mscrm.ImageUploadControl.$2(true) };
Mscrm.ImageUploadControl.SubmitChanges = function() {
    Mscrm.ImageUploadHelper.get_okButton().disabled = true;
    Mscrm.ImageUploadControl.$4(true);
    if (Mscrm.ImageUploadHelper.get_uploadPictureOption()
        .checked)
        Mscrm.ImageUploadHelper.get_imageUploadForm().action = Mscrm.ImageUploadSettingsProvider.get_uploadImageUrl();
    else {
        Mscrm.ImageUploadHelper.get_imageFileInput().form.reset();
        Mscrm.ImageUploadHelper.get_imageUploadForm().action = Mscrm.ImageUploadSettingsProvider.get_removeImageUrl()
    }
    Mscrm.ImageUploadHelper.get_imageUploadForm().submit()
};
Mscrm.ImageUploadControl.$A = function() {
    $addHandler(Mscrm.ImageUploadHelper.get_uploadPictureOption(), "click", Mscrm.ImageUploadControl.$9);
    $addHandler(Mscrm.ImageUploadHelper.get_removePictureOption(), "click", Mscrm.ImageUploadControl.$8);
    $addHandler(Mscrm.ImageUploadHelper.get_imageFileInput(), "change", Mscrm.ImageUploadControl.$6);
    $addHandler(Mscrm.ImageUploadHelper.get_previewFrame(), "load", Mscrm.ImageUploadControl.$7)
};
Mscrm.ImageUploadControl.$B = function() {
    $removeHandler(Mscrm.ImageUploadHelper.get_uploadPictureOption(), "click", Mscrm.ImageUploadControl.$9);
    $removeHandler(Mscrm.ImageUploadHelper.get_removePictureOption(), "click", Mscrm.ImageUploadControl.$8);
    $removeHandler(Mscrm.ImageUploadHelper.get_imageFileInput(), "change", Mscrm.ImageUploadControl.$6);
    $removeHandler(Mscrm.ImageUploadHelper.get_previewFrame(), "load", Mscrm.ImageUploadControl.$7)
};
Mscrm.ImageUploadControl.$9 = function($p0) {
    Mscrm.ImageUploadHelper.get_imageFileInput().disabled = false;
    if (Mscrm.ImageUploadControl
        .$0 &&
        Mscrm.ImageUploadControl.$1) Mscrm.ImageUploadHelper.get_okButton().disabled = false;
    else Mscrm.ImageUploadHelper.get_okButton().disabled = true
};
Mscrm.ImageUploadControl.$8 = function($p0) {
    Mscrm.ImageUploadHelper.get_imageFileInput().disabled = true;
    Mscrm.ImageUploadHelper.get_okButton().disabled = false
};
Mscrm.ImageUploadControl.$6 = function($p0) {
    Mscrm.ImageUploadControl.$2(false);
    Mscrm.ImageUploadControl.$5(false);
    Mscrm.ImageUploadHelper.get_okButton().disabled = true;
    Mscrm.ImageUploadHelper.get_previewFrame().src = Mscrm.ImageUploadSettingsProvider.get_progressImageSource();
    window.setTimeout(function() { Mscrm.ImageUploadControl.$C() }, 250)
};
Mscrm.ImageUploadControl.$7 = function($p0) {
    if (Mscrm.ImageUploadHelper.get_previewFrameBody()) {
        Mscrm.ImageUploadHelper.get_previewFrameBody().style.margin = "0";
        Mscrm.ImageUploadHelper.get_previewFrameBody().dir = window.LOCID_UI_DIR
    }
    if (Mscrm.ImageUploadHelper.get_previewFrameImage()) {
        Mscrm.ImageUploadHelper.get_previewFrameImage().style.width = "62px";
        Mscrm.ImageUploadHelper.get_previewFrameImage().style.height = "62px";
        Mscrm.ImageUploadHelper.get_previewFrameImage().style.margin = "1px";
        var $v_0 = LOCID_UPLOAD_PICTURE_ALT;
        Mscrm.ImageUploadHelper.get_previewFrameImage().alt = $v_0;
        Mscrm.ImageUploadHelper.get_previewFrameImage().title = $v_0;
        if (Mscrm.ImageUploadHelper.get_previewFrameImage().src.toLowerCase()
            .endsWith(Mscrm.ImageUploadSettingsProvider.get_previewImageUrl()
                .toLowerCase())) Mscrm.ImageUploadHelper.get_okButton().disabled = false
    } else Mscrm.ImageUploadControl.$2(true)
};
Mscrm.ImageUploadControl.$C = function() {
    if (!isNullOrEmptyString(Mscrm.ImageUploadHelper.get_imageFileInput().value)) {
        Mscrm.ImageUploadHelper.get_imageUploadForm().action = Mscrm.ImageUploadSettingsProvider.get_previewImageUrl();
        Mscrm.ImageUploadHelper.get_imageUploadForm().submit()
    } else {
        Mscrm.ImageUploadControl.$0 = false;
        Mscrm.ImageUploadControl.$1 = false;
        Mscrm.ImageUploadHelper.get_previewFrame().src = Mscrm.ImageUploadSettingsProvider.get_defaultImageSource()
    }
};
Mscrm.ImageUploadControl.$5 = function($p0) {
    if ($p0) {
        Mscrm.ImageUploadHelper.get_previewFrame().src = Mscrm.ImageUploadSettingsProvider.get_defaultImageSource();
        Mscrm.ImageUploadHelper.get_okButton().disabled = true;
        Mscrm.ImageUploadControl.$4(false);
        Mscrm.ImageUploadControl.$1 = false
    } else Mscrm.ImageUploadControl.$1 = true;
    Mscrm.ImageUploadHelper.get_fileTypeErrorDiv().style.display = $p0 ? "" : "none"
};
Mscrm.ImageUploadControl.$2 = function($p0) {
    if ($p0) {
        Mscrm.ImageUploadHelper.get_previewFrame().src = Mscrm.ImageUploadSettingsProvider.get_defaultImageSource();
        Mscrm.ImageUploadHelper.get_okButton().disabled = true;
        Mscrm.ImageUploadControl.$4(false);
        Mscrm.ImageUploadControl.$0 = false
    } else Mscrm.ImageUploadControl.$0 = true;
    Mscrm.ImageUploadHelper.get_fileSizeErrorDiv().style.display = $p0 ? "" : "none"
};
Mscrm.ImageUploadControl.$4 = function($p0) {
    Mscrm.ImageUploadHelper.get_loadingDiv().style.display = $p0 ? "" : "none";
    Mscrm.ImageUploadHelper.get_userInputDiv().style.display = $p0 ? "none" : ""
};
Mscrm.ImageUploadHelper = function() {};
Mscrm.ImageUploadHelper.get_removePictureOption = function() { return $get("RemovePictureOption") };
Mscrm.ImageUploadHelper.get_uploadPictureOption = function() { return $get("UploadPictureOption") };
Mscrm.ImageUploadHelper.get_imageUploadForm = function() { return $get("ImageUploadForm") };
Mscrm.ImageUploadHelper.get_imageFileInput = function() { return $get("ImageFileInput") };
Mscrm.ImageUploadHelper.get_previewFrame = function() { return $get(Mscrm.ImageUploadHelper.previewFrameName) };
Mscrm.ImageUploadHelper.get_fileTypeErrorDiv = function() { return $get("FileTypeErrorDiv") };
Mscrm.ImageUploadHelper.get_fileSizeErrorDiv = function() { return $get("FileSizeErrorDiv") };
Mscrm.ImageUploadHelper.get_okButton = function() { return $get("butBegin") };
Mscrm.ImageUploadHelper.get_loadingDiv = function() { return $get("LoadingDiv") };
Mscrm.ImageUploadHelper.get_userInputDiv = function() { return $get("UserInputDiv") };
Mscrm.ImageUploadHelper.get_previewFrameBody = function() {
    return Mscrm.ImageUploadHelper.get_previewFrame().contentWindow.document.getElementsByTagName("Body")[0]
};
Mscrm.ImageUploadHelper.get_previewFrameImage = function() {
    return Mscrm.ImageUploadHelper.get_previewFrame().contentWindow.document.getElementsByTagName("img")[0]
};
Mscrm.ImageUploadSettingsProvider = function() {};
Mscrm.ImageUploadSettingsProvider.isCustomImagePresent = function() { return IS_CUSTOM_IMAGE_PRESENT };
Mscrm.ImageUploadSettingsProvider.get_previewImageUrl = function() {
    return Mscrm.ImageUploadSettingsProvider.$3() + "&operationtype=preview"
};
Mscrm.ImageUploadSettingsProvider.get_uploadImageUrl = function() {
    return Mscrm.ImageUploadSettingsProvider.$3() + "&operationtype=upload"
};
Mscrm.ImageUploadSettingsProvider.get_removeImageUrl = function() {
    return Mscrm.ImageUploadSettingsProvider.$3() + "&operationtype=remove"
};
Mscrm.ImageUploadSettingsProvider.get_customImageSource = function() { return IMAGE_UPLOAD_CUSTOM_IMAGE_URL };
Mscrm.ImageUploadSettingsProvider.get_defaultImageSource = function() {
    return window.CDNURL + "/_imgs/contactphoto.png"
};
Mscrm.ImageUploadSettingsProvider
    .get_progressImageSource = function() { return window.CDNURL + "/_imgs/advfind/progress.gif" };
Mscrm.ImageUploadSettingsProvider.$3 = function() {
    var $v_0 = IMAGE_UPLOAD_ENTITY_ID, $v_1 = IMAGE_UPLOAD_ENTITY_NAME, $v_2 = IMAGE_UPLOAD_ATTRIBUTE_NAME;
    return "dlg_imageupload.aspx?entityid=" +
        CrmEncodeDecode.CrmUrlEncode($v_0) +
        "&attributename=" +
        CrmEncodeDecode.CrmUrlEncode($v_2) +
        "&entityname=" +
        CrmEncodeDecode.CrmUrlEncode($v_1)
};
Mscrm.ImageUploadControl.registerClass("Mscrm.ImageUploadControl");
Mscrm.ImageUploadHelper.registerClass("Mscrm.ImageUploadHelper");
Mscrm.ImageUploadSettingsProvider.registerClass("Mscrm.ImageUploadSettingsProvider");
Mscrm.ImageUploadControl.$0 = false;
Mscrm.ImageUploadControl.$1 = false;
Mscrm.ImageUploadHelper.previewFrameName = "PreviewFrame"