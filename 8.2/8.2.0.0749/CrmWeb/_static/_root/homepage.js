
function homepageWindowOnload() {
    var isOutlookClient = isOutlookHostedWindow();
    HandleBackButtonIssues(_currentTypeCode);
    !isOutlookClient &&
        window.location.pathname.toUpperCase().endsWith("/HOMEPAGE.ASPX") >= 0 &&
        registerReminder()
}

window.onload = homepageWindowOnload;

function registerReminder() {
    typeof _bShowPendingApprovalReminder != "undefined" &&
        _bShowPendingApprovalReminder != "undefined" &&
        _bShowPendingApprovalReminder != null &&
        setTimeout(openReminder, 0)
}

function openReminder() {
    if (_bShowPendingApprovalReminder) {
        var oUrl = Mscrm.CrmUri.create("/Activities/email/dlg_pendingEmailApproval.aspx"),
            parameters = null,
            dialogOptions = new Xrm.DialogOptions;
        dialogOptions.height = 300;
        dialogOptions.width = 550;
        Xrm.Internal.openDialog(oUrl.toString(), dialogOptions, parameters, null, pendingEmailApprovalAction)
    }
}

function pendingEmailApprovalAction(returnValue) {
    if (typeof returnValue != "undefined" && returnValue != "undefined" && returnValue != null) {
        var url = Mscrm.CrmUri.create(returnValue);
        openStdDlg(url, null, 0, 0)
    }
}