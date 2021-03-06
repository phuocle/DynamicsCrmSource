Type.registerNamespace("Mscrm");
Mscrm.DuplicateDetectionWizardMode = function() {};
Mscrm.DuplicateDetectionWizardHelper = function() {};
Mscrm.DuplicateDetectionWizardHelper.extractInputsAndCreateDupDetectionJob = function() {
    var $v_0 = "",
        $v_1 = "",
        $v_2 = false,
        $v_3 = -1,
        $v_4 = "",
        $v_5 = false,
        $v_6 = 0,
        $v_7 = 0,
        $v_8 = "",
        $v_9 = "",
        $v_A = "";
    if (IsNull(window.WizardHasProperty)) {
        alert("WizardHasProperty not found");
        return null
    }
    if (IsNull(window.WizardGetProperty)) {
        alert("WizardGetProperty not found");
        return null
    }
    if (window.WizardHasProperty("fetchXml")) $v_0 = window.WizardGetProperty("fetchXml");
    if (window.WizardHasProperty("ddWizardMode")) $v_7 = window.WizardGetProperty("ddWizardMode");
    if (window.WizardHasProperty("jobName")) $v_1 = window.WizardGetProperty("jobName");
    if (window.WizardHasProperty("sendEmail")) $v_2 = window.WizardGetProperty("sendEmail");
    if (window.WizardHasProperty("objectTypeCode")) $v_3 = window.WizardGetProperty("objectTypeCode");
    if (window.WizardHasProperty("targetRecordIds")) $v_8 = window.WizardGetProperty("targetRecordIds");
    if (window.WizardHasProperty("gridXml")) $v_9 = window.WizardGetProperty("gridXml");
    if (window.WizardHasProperty("startDateTime")) $v_A = window.WizardGetProperty("startDateTimeUtc");
    if (window.WizardHasProperty("ccRecipientList")) $v_4 = window.WizardGetProperty("ccRecipientList");
    if (window.WizardHasProperty("isRecurring")) {
        $v_5 = window.WizardGetProperty("isRecurring");
        $v_6 = window.WizardGetProperty("recurrenceDays")
    }
    var $v_B = new RemoteCommand("DuplicateDetection", "CreateDuplicateDetectionJob");
    $v_B.SetParameter("jobName", $v_1);
    $v_B.SetParameter("sendEmail", $v_2);
    $v_B.SetParameter("entityTypeCode", $v_3);
    $v_B.SetParameter("recipients", $v_4);
    $v_B.SetParameter("targetOption", $v_7);
    $v_B.SetParameter("targetIds", $v_8);
    $v_B.SetParameter("gridXml", $v_9);
    $v_B.SetParameter("wizardFetchXml", $v_0);
    $v_B.SetParameter("startTime", $v_A);
    $v_B.SetParameter("rerun", $v_5);
    $v_B.SetParameter("numberOfDays", $v_6);
    var $v_C = $v_B.Execute();
    return $v_C
};
Mscrm.DuplicateDetectionWizardMode.registerClass("Mscrm.DuplicateDetectionWizardMode");
Mscrm.DuplicateDetectionWizardHelper.registerClass("Mscrm.DuplicateDetectionWizardHelper");
Mscrm.DuplicateDetectionWizardMode.systemWide = 0;
Mscrm.DuplicateDetectionWizardMode.forSelectedRecords = 1;
Mscrm.DuplicateDetectionWizardMode.forAllRecordsAllPage = 2