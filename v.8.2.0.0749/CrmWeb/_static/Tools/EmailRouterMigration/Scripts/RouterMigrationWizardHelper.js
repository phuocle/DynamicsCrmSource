Type.registerNamespace("Mscrm");

function AddEventListenersOnFileControls() {
    for (var $v_0 = $get("processFileFrame").contentWindow.document,
        $v_1 = $v_0.getElementsByName("processFileName"),
        $v_2 = 0;
        $v_2 < $v_1.length;
        $v_2++)
        if (!IsNull($v_1[$v_2])) {
            $addHandler($v_1[$v_2], "change", MigrationInputFileHandler);
            $addHandler($v_1[$v_2], "keydown", MigrationInputFileHandler)
        }
}

function RemoveEventListenersFromFileControls() {
    for (var $v_0 = $get("processFileFrame").contentWindow.document,
        $v_1 = $v_0.getElementsByName("processFileName"),
        $v_2 = 0;
        $v_2 < $v_1.length;
        $v_2++)
        if (!IsNull($v_1[$v_2]))
            try {
                $removeHandler($v_1[$v_2], "change", MigrationInputFileHandler);
                $removeHandler($v_1[$v_2], "keydown", MigrationInputFileHandler)
            } catch ($$e_3) {
            }
}

function MigrationInputFileHandler($p0) {
    for (var $v_0 = $get("processFileFrame").contentWindow.document,
        $v_1 = $v_0.getElementsByName("processFileName"),
        $v_2 = 0,
        $v_3 = 0;
        $v_3 < $v_1.length;
        $v_3++) {
        if (!($v_3 % 3)) {
            if ($v_2 === 3) break;
            $v_2 = 0
        }
        if (!IsNull($v_1[$v_3]) && !isNullOrEmptyString($v_1[$v_3].value)) $v_2++
    }
    WizardSetButtonEnabled($v_2 === 3, _WizardButtonsEnum.NEXTBUTTON)
}

function SubmitIFrameForm() {
    WizardSetButtonEnabled(false, _WizardButtonsEnum.CANCELBUTTON);
    WizardSetProperty("fileBeingProcessed", true);
    var $v_0 = $get("processFileFrame"), $v_1 = $v_0.contentWindow.document.getElementById("processFileform");
    $v_1.action = Mscrm.CrmUri.create("/Tools/EmailRouterMigrationWizard/MigrationFileHandler.aspx?action=fileProcess")
        .toString();
    $get("progressMessage").innerHTML = CrmEncodeDecode.CrmHtmlEncode(window.LOCID_MW_FILEPROCESS_PROGRESS);
    try {
        $v_1.submit();
        SetProgressMessageDisplayState(true);
        WizardSetButtonEnabled(true, _WizardButtonsEnum.CANCELBUTTON)
    } catch ($$e_2) {
        alert(window.LOCID_MIGRATION_INVALID_FILE);
        OnMigrationFileProcessFailure()
    }
}

function OnMigrationFileProcessFailure() {
    WizardSetButtonEnabled(true, _WizardButtonsEnum.CANCELBUTTON);
    WizardSetButtonEnabled(false, _WizardButtonsEnum.NEXTBUTTON);
    WizardSetProperty("EmailRoutersCount", 1);
    WizardSetProperty("fileBeingProcessed", false);
    SetProgressMessageDisplayState(false);
    AddEventListenersOnFileControls()
}

function AddInputControlsForMigration() {
    var $v_0 = WizardGetProperty("EmailRoutersCount");
    $v_0++;
    WizardSetProperty("EmailRoutersCount", $v_0);
    var $v_1 = $get("processFileFrame").contentWindow.document, $v_2 = $v_1.getElementById("processFileform");
    $v_2.appendChild(document.createElement("br"));
    $v_2.appendChild(document.createElement("br"));
    var $v_3 = document.createElement("div");
    $v_3.className = "mscrm-iw-BorderedDivBlueBackground";
    var $v_4 = document.createElement("span");
    $v_4.className = "mscrm-iw-PageWidth";
    $v_4.innerHTML = "<b>" +
        CrmEncodeDecode.CrmHtmlEncode(String.format(window.LOCID_MW_EMAIL_ROUTER_FILE_COUNT, $v_0)) +
        "</b>";
    $v_3.appendChild($v_4);
    $v_2.appendChild($v_3);
    $v_3.appendChild(document.createElement("br"));
    $v_3.appendChild(document.createElement("br"));
    $v_3.appendChild($5());
    $v_3.appendChild($5());
    $v_3.appendChild($5());
    $v_2.appendChild($v_3);
    AddEventListenersOnFileControls();
    if ($v_0 >= 4) {
        var $v_5 = $v_1.getElementById("addMoreRouterButton");
        $v_5.disabled = true;
        return
    }
}

function $D() {
    if (isNullOrEmptyString(WizardGetProperty("ProfilesToCreate"))) {
        $4("serverprofilestep");
        $8();
        return
    }
    var $v_0 = new RemoteCommand("EmailRouterMigration", "CreateServerProfiles");
    $v_0.SetParameter("serverProfilesXml", WizardGetProperty("EmailServerProfiles"));
    $v_0.SetParameter("profileToCreateIds", WizardGetProperty("ProfilesToCreate"));
    $v_0.Execute(function($p1_0, $p1_1) {
        if (!$p1_0 || !$p1_0.Success || isNullOrEmptyString($p1_0.ReturnValue)) {
            $0(false);
            return
        }
        var $v_1 = $p1_0.ReturnValue, $v_2 = XUI.Xml.LoadXml($v_1);
        try {
            WizardSetProperty("EmailServerProfilesCreated",
                XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_2, "/result/created", null)));
            if (!Boolean.parse(XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_2, "/result/success", null)))) {
                $0(false);
                return
            }
        } catch ($$e_5) {
            $0(false);
            return
        }
        WizardSetProperty("ServerProfileCreated", $p1_0.ReturnValue);
        $4("serverprofilestep");
        $8()
    })
}

function $8() {
    if (IsNull(WizardGetProperty("ForwardMailboxToCreateCount")) || !WizardGetProperty("ForwardMailboxToCreateCount")) {
        $4("forwardmailboxstep");
        $7(1, 0);
        return
    }
    var $v_0 = new RemoteCommand("EmailRouterMigration", "CreateForwardMailboxes");
    $v_0.SetParameter("forwardMailboxXml", WizardGetProperty("ForwardMailbox"));
    $v_0.SetParameter("serverProfileCreated", WizardGetProperty("ServerProfileCreated"));
    $v_0.Execute(function($p1_0, $p1_1) {
        if (!$p1_0 || !$p1_0.Success || isNullOrEmptyString($p1_0.ReturnValue)) {
            $0(false);
            return
        }
        var $v_1 = $p1_0.ReturnValue, $v_2 = XUI.Xml.LoadXml($v_1);
        try {
            WizardSetProperty("ForwardMailboxCreated",
                XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_2, "/result/created", null)));
            if (!Boolean.parse(XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_2, "/result/success", null)))) {
                $0(false);
                return
            }
        } catch ($$e_5) {
            $0(false);
            return
        }
        $4("forwardmailboxstep");
        $7(1, 0)
    })
}

function $7($p0, $p1) {
    var $v_0 = null;
    try {
        var $v_2 = WizardGetProperty("UserMappings"), $v_3 = XUI.Xml.LoadXml($v_2);
        $v_0 = XUI.Xml.SelectSingleNode($v_3, '/usermapping/serverprofile[@batch = "' + $p0 + '"]', null)
    } catch ($$e_5) {
    }
    if (!$v_0) {
        $4("userqueueupdatestep");
        $0(true);
        return
    }
    var $v_1 = new RemoteCommand("EmailRouterMigration", "UpdateUserQueuesForEmailRouter");
    $v_1.SetParameter("serverProfileCreated", WizardGetProperty("ServerProfileCreated"));
    $v_1.SetParameter("userMappingXml", XUI.Xml.XMLSerializer.serializeToString($v_0));
    $v_1.SetParameter("updateCountTillNow", $p1);
    $v_1.Execute(function($p1_0, $p1_1) {
        if (!$p1_0 || !$p1_0.Success || isNullOrEmptyString($p1_0.ReturnValue)) {
            $0(false);
            return
        }
        var $v_4 = $p1_0.ReturnValue, $v_5 = XUI.Xml.LoadXml($v_4);
        try {
            $p1 = parseInt(XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_5, "/result/totalUpdateCount", null)));
            WizardSetProperty("UserQueueUpdateCount",
                XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_5, "/result/formattedUpdateCount", null)));
            if (!Boolean.parse(XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_5, "/result/success", null)))) {
                $0(false);
                return
            }
        } catch ($$e_B) {
            $0(false);
            return
        }
        $7($p0 + 1, $p1)
    })
}

function $4($p0) {
    var $v_0 = $get($p0);
    $v_0.style.color = "black"
}

function $0($p0) {
    var $v_0 = $get("spanTitle");
    $v_0.innerHTML = CrmEncodeDecode.CrmHtmlEncode(window.LOCID_MW_FINAL_SUMMARY);
    var $v_1 = $get("migrationInProcessDiv"), $v_2 = $get("LastSummaryPage");
    $v_2.style.display = "inline";
    $v_1.style.display = "none";
    var $v_3 = $get("failureDescription"),
        $v_4 = $get("successDescription"),
        $v_5 = $6(),
        $v_6 = document.createElement("tbody");
    $v_5.appendChild($v_6);
    $v_6.appendChild($1(window.LOCID_MW_PROFILES_CREATE_MSG,
        WizardGetProperty("EmailServerProfilesCreated"),
        false,
        false,
        50,
        50));
    $v_6.appendChild($1(window.LOCID_MW_FWMAILBOX_CREATE_MSG,
        WizardGetProperty("ForwardMailboxCreated"),
        false,
        false,
        50,
        50));
    $v_6.appendChild($1(window.LOCID_MW_USERQUEUE_UPDATE_MSG,
        WizardGetProperty("UserQueueUpdateCount"),
        false,
        false,
        50,
        50));
    if ($p0) {
        $v_3.style.display = "none";
        var $v_8 = $get("detailedSummary");
        $v_8.appendChild($v_5)
    } else {
        $v_4.style.display = "none";
        $v_3.appendChild($v_5)
    }
    var $v_7 = $get("buttonCancel");
    $v_7.disabled = false;
    WizardSetProperty("migrationProcessCompleted", true)
}

function StartMigrationProcess() {
    var $v_0 = $get("spanTitle");
    $v_0.innerHTML = CrmEncodeDecode.CrmHtmlEncode(window.LOCID_MW_MIGRATION_IN_PROCESS);
    var $v_1 = $get("migrationReviewSummary"),
        $v_2 =
            $get("migrationInProcessDiv"),
        $v_3 = $get("migrationProgressDiv");
    $v_2.style.display = "inline";
    $v_1.style.display = "none";
    $v_3.style.display = "inline";
    $get("migrationProgressMessage").innerHTML = CrmEncodeDecode.CrmHtmlEncode(window.LOCID_MW_FILEPROCESS_PROGRESS);
    var $v_4 = $get("buttonNext");
    $v_4.style.display = "none";
    var $v_5 = $get("buttonCancel");
    $v_5.innerHTML = window.LOCID_MIGRATE_FINISH_BTN;
    $v_5.accessKey = window.LOCID_MIGRATE_FINISH_ACCESS_KEY;
    $v_5.title = window.LOCID_FINISH_BUTTON_TOOLTIP;
    $v_5.disabled = true;
    WizardSetProperty("ForwardMailboxCreated", WizardGetProperty("ZeroNumberUserFormat"));
    WizardSetProperty("UserQueueUpdateCount", WizardGetProperty("ZeroNumberUserFormat"));
    WizardSetProperty("EmailServerProfilesCreated", WizardGetProperty("ZeroNumberUserFormat"));
    $D()
}

function ShowSummaryPage() {
    var $v_0 = $get("spanTitle");
    $v_0.innerHTML = CrmEncodeDecode.CrmHtmlEncode(window.LOCID_REVIEW_SUMMARY_TITLE);
    var $v_1 = $get("serverSelectionPageDiv"), $v_2 = $get("migrationReviewSummary");
    $v_1.style.display = "none";
    $v_2.style.display = "inline";
    for (var $v_3 = $get("migrationReviewControl"),
        $v_4 = $6(),
        $v_5 = "/serverprofiles/serverprofile",
        $v_6 = XUI.Xml.LoadXml(WizardGetProperty("EmailServerProfiles")),
        $v_7 = XUI.Xml.SelectNodes($v_6, $v_5, null),
        $v_8 = "",
        $v_9 = 0,
        $v_A = WizardGetProperty("ZeroNumberUserFormat"),
        $v_B = WizardGetProperty("ZeroNumberUserFormat"),
        $v_C = 0,
        $v_D = WizardGetProperty("ZeroNumberUserFormat"),
        $v_K = 0;
        $v_K < $v_7.length;
        $v_K++) {
        var $v_L = $get("radioyes" + ($v_K + 1));
        if (!IsNull($v_L) && $v_L.checked) {
            $v_9++;
            $v_8 += ($v_K + 1).toString() + " "
        }
    }
    var $v_E = XUI.Xml.SelectSingleNode($v_6, "/serverprofiles", null);
    WizardSetProperty("ProfilesToCreate", $v_8);
    if ($v_9 > 0) $v_A = XUI.Xml.GetText($v_7[$v_9 - 1].attributes.getNamedItem("formatIndex"));
    var $v_F = $v_E.attributes.getNamedItem("formattedUserQueueCount"),
        $v_G = $v_E.attributes.getNamedItem("forwardMailboxCount"),
        $v_H = $v_E.attributes.getNamedItem("formattedForwardMailboxCount");
    if (!IsNull($v_F)) $v_B = XUI.Xml.GetText($v_F);
    if (!IsNull($v_G) && !IsNull($v_H)) {
        $v_C = parseInt(XUI.Xml.GetText($v_G));
        $v_D = XUI.Xml.GetText($v_H)
    }
    WizardSetProperty("ForwardMailboxToCreateCount", $v_C);
    var $v_I = document.createElement("tbody");
    $v_I.appendChild($1(window.LOCID_SERVER_PROFILE_COUNT, $v_A, false, false, 50, 50));
    $v_I.appendChild($1(window.LOCID_FORWARD_MAILBOX_COUNT, $v_D, false, false, 50, 50));
    $v_I.appendChild($1(window.LOCID_USER_QUEUE_MAILBOX_COUNT, $v_B, false, false, 50, 50));
    $v_4.appendChild($v_I);
    $v_3.appendChild($v_4);
    var $v_J = $get("buttonNext");
    $v_J.innerHTML = window.LOCID_MIGRATE_START_BTN;
    $v_J.accessKey = window.LOCID_MIGRATE_START_ACCESS_KEY;
    $v_J.title = window.LOCID_START_BUTTON_TOOLTIP
}

function SetProgressMessageDisplayState(show) {
    var $v_0 = $get("progressDiv"), $v_1 = $get("mainBody");
    if (show) {
        $v_0.style.display = "inline";
        $v_1.style.display = "none"
    } else if (!show) {
        $v_0.style.display = "none";
        $v_1.style.display = "block"
    }
}

function ShowServerProfilePage() {
    var $v_0 = "/serverprofiles/serverprofile",
        $v_1 = XUI.Xml.LoadXml(WizardGetProperty("EmailServerProfiles")),
        $v_2 = XUI.Xml.SelectNodes($v_1, $v_0, null);
    if (IsNull($v_2) || !$v_2.length) {
        alert(window.LOCID_MW_NO_PROFILES_FOUND);
        OnMigrationFileProcessFailure();
        return 0
    }
    var $v_3 = $get("progressDiv"), $v_4 = $get("serverSelectionPageDiv");
    $v_3.style.display = "none";
    $v_4.style.display = "inline";
    var $v_5 = $get("spanTitle");
    $v_5.innerHTML = CrmEncodeDecode.CrmHtmlEncode(window.LOCID_MW_SELECT_PROFILES_HEADER);
    var $v_6 = $get("serverSelectionPageDescription"), $v_7 = XUI.Xml.SelectSingleNode($v_1, "/serverprofiles", null);
    WizardSetProperty("ZeroNumberUserFormat", XUI.Xml.GetText($v_7.attributes.getNamedItem("zeroFormat")));
    var $v_8 = XUI.Xml.GetText($v_2[$v_2.length - 1].attributes.getNamedItem("formatIndex")),
        $v_9 = $2(String.format(window.LOCID_ALL_SERVER_PROFILE_MSG, $v_8), false);
    $v_6.appendChild($v_9);
    $v_6.appendChild(document.createElement("br"));
    for (var $v_A = 0; $v_A < $v_2.length; $v_A++) {
        var $v_B = $v_2[$v_A],
            $v_C = XUI.Xml.SelectSingleNode($v_B, "incoming/serverversion", null),
            $v_D = !IsNull($v_C) ? XUI.Xml.GetText($v_C) : "",
            $v_E = XUI.Xml.SelectSingleNode($v_B, "outgoing/serverversion", null),
            $v_F = !IsNull($v_E) ? XUI.Xml.GetText($v_E) : "",
            $v_G = XUI.Xml.SelectSingleNode($v_B, "incoming/serverloc", null),
            $v_H = !IsNull($v_G) ? XUI.Xml.GetText($v_G) : "",
            $v_I = XUI.Xml.SelectSingleNode($v_B, "outgoing/serverloc", null),
            $v_J = !IsNull($v_I) ? XUI.Xml.GetText($v_I) : "",
            $v_K = XUI.Xml.SelectSingleNode($v_B, "mergeddata/messagecodes", null),
            $v_L = XUI.Xml.GetText($v_K),
            $v_M = XUI.Xml.SelectSingleNode($v_B, "mergeddata/supported", null),
            $v_N = Boolean.parse(XUI.Xml.GetText($v_M)),
            $v_O = "",
            $v_P = "";
        if ($v_N) {
            var $v_Q = XUI.Xml.SelectSingleNode($v_B, "mergeddata/mergedprofiletype", null);
            $v_P = !IsNull($v_Q) ? XUI.Xml.GetText($v_Q) : "";
            var $v_R = XUI.Xml.SelectSingleNode($v_B, "mergeddata/mergedname", null);
            $v_O = !IsNull($v_Q) ? XUI.Xml.GetText($v_R) : ""
        }
        $C($v_A + 1, $v_D, $v_H, $v_F, $v_J, $v_O, $v_P, $v_N, $v_L)
    }
    return $v_2.length
}

function $C($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8) {
    var $v_0 = $get("serverPageControl");
    $v_0.appendChild(document.createElement("br"));
    var $v_1 = $2(String.format(window.LOCID_MW_EMAIL_SERVER_MSG, $p0), true);
    $v_1.style.fontSize = "13px";
    $v_0.appendChild($v_1);
    $v_0.appendChild(document.createElement("hr"));
    var $v_2 = $F($p1, $p2, $p3, $p4);
    $v_0.appendChild($v_2);
    $B($p8, $v_0);
    if ($p7) {
        $v_0.appendChild(document.createElement("br"));
        var $v_3 = $E($p0, $p5, $p6);
        $v_0.appendChild($v_3)
    }
}

function $3($p0, $p1, $p2) {
    var $v_0 = document.createElement("td"), $v_1 = document.createElement("label");
    $p1 !== -1 && $v_0.setAttribute("width", $p1 + "%");
    if ($p2) $v_1.innerHTML = String.format("<b>{0}</b>", CrmEncodeDecode.CrmHtmlEncode($p0));
    else $v_1.innerHTML = CrmEncodeDecode.CrmHtmlEncode($p0);
    $v_0.appendChild($v_1);
    return $v_0
}

function $1($p0, $p1, $p2, $p3, $p4, $p5) {
    var $v_0 = document.createElement("tr");
    !isNullOrEmptyString($p0) && $v_0.appendChild($3($p0, $p4, $p2));
    !isNullOrEmptyString($p1) && $v_0.appendChild($3($p1, $p5, $p3));
    return $v_0
}

function $A($p0, $p1, $p2, $p3) {
    var $v_0 = document.createElement("tr");
    $v_0.appendChild($3($p0, 20, false));
    $v_0.appendChild($3($p1, 23, false));
    $v_0.appendChild($3($p2, 23, false));
    $v_0.appendChild($3($p3, 23, false));
    return $v_0
}

function $F($p0, $p1, $p2, $p3) {
    var $v_0 = $6(), $v_1 = document.createElement("tbody");
    $v_0.appendChild($v_1);
    var $v_2 = $A(window.LOCID_MW_INCOMING_SERVER_TYPE, $p0, window.LOCID_MW_INCOMING_SERVER_LOC, $p1),
        $v_3 = $A(window.LOCID_MW_OUTGOING_SERVER_TYPE, $p2, window.LOCID_MW_OUTGOING_SERVER_LOC, $p3);
    $v_1.appendChild($v_2);
    $v_1.appendChild($v_3);
    return $v_0
}

function $E($p0, $p1, $p2) {
    var $v_0 = document.createElement("table");
    $v_0.setAttribute("cellspacing", "0");
    $v_0.setAttribute("cellpadding", "0");
    $v_0.style.width = "75%";
    var $v_1 = document.createElement("tbody");
    $v_0.appendChild($v_1);
    var $v_2 = $2(window.LOCID_MW_NEW_PROFILE_MSG, true),
        $v_3 = document.createElement("tr"),
        $v_4 = document.createElement("td");
    $v_4.appendChild($v_2);
    $v_3.appendChild($v_4);
    var $v_5 = $1(window.LOCID_MW_SERVER_PROFILE_NAME, $p1, false, true, 30, 70),
        $v_6 = $1(window.LOCID_MW_EMAIL_SERVER_TYPE, $p2, false, true, 30, 70),
        $v_7 = document.createElement("tr"),
        $v_8 = document.createElement("td"),
        $v_9 = $2(window.LOCID_MW_MIGRATE_PROFILES, false);
    $v_8.appendChild($v_9);
    $v_8.setAttribute("width", "30%");
    var $v_A = document.createElement("td");
    $v_A.setAttribute("width", "70%");
    $v_A.appendChild($9("radioyes" + $p0, "Radio" + $p0, "Y", true, "mscrm-iw-yes-radio-class"));
    $v_A.appendChild($2(window.LOCID_MW_YES_MSG, true));
    $v_A.appendChild($9("radiono" + $p0, "Radio" + $p0, "N", false, "mscrm-iw-no-radio-class"));
    $v_A.appendChild($2(window.LOCID_MW_NO_MSG, true));
    $v_7.appendChild($v_8);
    $v_7.appendChild($v_A);
    $v_1.appendChild($v_3);
    $v_1.appendChild($v_5);
    $v_1.appendChild($v_6);
    $v_1.appendChild($v_7);
    return $v_0
}

function $B($p0, $p1) {
    if (isNullOrEmptyString($p0)) return;
    var $v_0 = $p0.split(" ");
    if (!IsNull($v_0) && $v_0.length > 0) {
        var $v_1 = document.createElement("table"),
            $v_2 = document.createElement("tbody"),
            $v_3 = document.createElement("tr"),
            $v_4 = document.createElement("td");
        $v_3.appendChild($v_4);
        var $v_5 = document.createElement("img");
        $v_5.setAttribute("src", window.CDNURL + "/_imgs/error/notif_icn_warn16.png");
        $v_5.setAttribute("type", "icon");
        $v_4.appendChild($v_5);
        for (var $v_6 = document.createElement("td"), $v_7, $v_8 = 0; $v_8 < $v_0.length; $v_8++) {
            switch ($v_0[$v_8]) {
            case "1":
                $v_7 = window.LOCID_MW_EXCHANGE_SMTP_MSG;
                break;
            case "2":
                $v_7 = window.LOCID_MW_EXCHANGE_WEBDAV_MSG;
                break;
            case "3":
                $v_7 = window.LOCID_MW_POP3_EXCHANGE_MSG;
                break;
            case "4":
                $v_7 = window.LOCID_MW_CUSTOM_PROFILE_MSG;
                break;
            case "5":
                $v_7 = window.LOCID_MW_NON_SSL_PROFILE_MSG;
                break;
            default:
                $v_7 = "";
                break
            }
            $v_8 > 0 && $v_6.appendChild(document.createElement("br"));
            var $v_9 = $2($v_7, false);
            $v_9.style.color = "#333333";
            $v_6.appendChild($v_9)
        }
        $v_3.appendChild($v_6);
        $v_1.appendChild($v_2);
        $v_2.appendChild($v_3);
        $p1.appendChild(document.createElement("br"));
        $p1.appendChild($v_1)
    }
}

function $2($p0, $p1) {
    var $v_0 = document.createElement("label");
    $v_0.className = "mscrm-iw-PageWidth";
    if ($p1) $v_0.innerHTML = "<b>" + CrmEncodeDecode.CrmHtmlEncode($p0) + "</b>";
    else $v_0.innerHTML = CrmEncodeDecode.CrmHtmlEncode($p0);
    return $v_0
}

function $6() {
    var $v_0 = document.createElement("table");
    $v_0.setAttribute("cellspacing", "0");
    $v_0.setAttribute("cellpadding", "0");
    $v_0.style.width = "100%";
    return $v_0
}

function $9($p0, $p1, $p2, $p3, $p4) {
    var $v_0 = document.createElement("input");
    $v_0.setAttribute("id", $p0);
    $v_0.setAttribute("name", $p1);
    $v_0.setAttribute("type", "radio");
    $v_0.setAttribute("value", $p2);
    $v_0.className = $p4;
    $p3 && $v_0.setAttribute("checked", true);
    return $v_0
}

function $5() {
    var $v_0 = document.createElement("input");
    $v_0.setAttribute("id", "processFileNameId");
    $v_0.setAttribute("type", "file");
    $v_0.setAttribute("name", "processFileName");
    $v_0.className = "mscrm-iw-PageWidth";
    $v_0.setAttribute("onkeypress", "return handleKeyPress(new Sys.UI.DomEvent(event))");
    return $v_0
}