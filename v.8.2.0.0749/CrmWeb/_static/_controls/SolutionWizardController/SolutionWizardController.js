Type.registerNamespace("Mscrm");
Mscrm.SolutionWizardController = function(element) {
    this.$$d_$D_3 = Function.createDelegate(this, this.$D_3);
    this.$$d_$Q_3 = Function.createDelegate(this, this.$Q_3);
    this.$$d_$K_3 = Function.createDelegate(this, this.$K_3);
    this.$$d_$O_3 = Function.createDelegate(this, this.$O_3);
    this.$$d_$I_3 = Function.createDelegate(this, this.$I_3);
    this.$$d_$N_3 = Function.createDelegate(this, this.$N_3);
    this.$$d_$J_3 = Function.createDelegate(this, this.$J_3);
    this.$$d_$H_3 = Function.createDelegate(this, this.$H_3);
    this.$$d_$M_3 = Function.createDelegate(this, this.$M_3);
    this.$$d_$L_3 = Function.createDelegate(this, this.$L_3);
    this.$9_3 = {};
    Mscrm.SolutionWizardController.initializeBase(this, [element])
};
Mscrm.SolutionWizardController.setState = function(bNext, bBack, bCancel) {
    var $v_0 = window.top, $v_1 = $v_0.document.getElementById("buttonBack");
    $v_1.disabled = !bBack;
    $v_1 = $v_0.document.getElementById("buttonNext");
    $v_1.disabled = !bNext;
    $v_1 = $v_0.document.getElementById("buttonImport");
    $v_1.disabled = !bNext;
    $v_1 = $v_0.document.getElementById("buttonCancel");
    $v_1.disabled = !bCancel
};
Mscrm.SolutionWizardController.exportImportLog = function() {
    var $v_0 = window.top,
        $v_1 = $v_0.document.getElementById("uploadFileFrame"),
        $v_2 = $v_1.contentWindow.document.getElementById("importJobId");
    $v_1 = $v_0.document.getElementById("processFileFrame");
    var $v_3 = $v_1.contentWindow.document.getElementById("importedsolutionid"),
        $v_4 = Mscrm.CrmUri.create("/_grid/cmds/dlg_exportsolution.aspx");
    $v_4.get_query()["appSolutionId"] = $v_3.value;
    $v_4.get_query()["importJobId"] = $v_2.value;
    $v_4.get_query()["command"] = "exportimportlog";
    openStdWin($v_4, "SolutionLog", 400, 400, "scrollbars=yes")
};
Mscrm.SolutionWizardController.promoteHoldingSolution = function() {
    var $v_0 = window.top,
        $v_1 = $v_0.document.getElementById("processFileFrame"),
        $v_2 = $v_1.contentWindow.document.getElementById("solutionUniqueName");
    Mscrm.FormEditor.promoteSolution($v_2.value,
        function($p1_0) {
            try {
                $v_0.opener.auto(7100)
            } catch ($$e_4) {
            }
        });
    var $v_3 = window.document.getElementById("buttonPromote");
    $v_3.disabled = true
};
Mscrm.SolutionWizardController.publishCustomization = function() { Mscrm.FormEditor.PublishAll() };
Mscrm.SolutionWizardController.prototype = {
    $A_3: 0,
    $0_3: 0,
    $5_3: null,
    $6_3: null,
    $1_3: null,
    $3_3: null,
    $7_3: null,
    $8_3: null,
    $2_3: null,
    $4_3: null,
    fileLoadTitle: null,
    solutionInformationTitle: null,
    postImportActionsTitle: null,
    importingTitle: null,
    resultTitle: null,
    wizardTitleId: null,
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.$5_3 = this.$$d_$L_3;
        this.$6_3 = this.$$d_$M_3;
        this.$1_3 = this.$$d_$H_3;
        this.$3_3 = this.$$d_$J_3;
        this.$7_3 = this.$$d_$N_3;
        this.$2_3 = this.$$d_$I_3;
        this.$8_3 = this.$$d_$O_3;
        this.$4_3 = this.$$d_$K_3;
        this.$P_3()
    },
    handleEvent: function(eventCode, parameters, sourceComponent) {
        switch (eventCode) {
        case 9:
            this.processPage(0);
            break
        }
        return Mscrm.CrmUIControl.prototype.handleEvent.call(this, eventCode, parameters, sourceComponent)
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        this.$F_3();
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    $P_3: function() {
        var $v_0 = $get("buttonBack");
        $addHandler($v_0, "click", this.$6_3);
        $v_0 = $get("buttonNext");
        $addHandler($v_0, "click", this.$5_3);
        $v_0 = $get("buttonCancel");
        $addHandler($v_0, "click", this.$1_3);
        $v_0 = $get("buttonExport");
        $addHandler($v_0, "click", this.$3_3);
        $v_0 = $get("buttonPromote");
        $addHandler($v_0, "click", this.$7_3);
        $v_0 = $get("buttonPublish");
        $addHandler($v_0, "click", this.$8_3);
        $v_0 = $get("buttonImport");
        $addHandler($v_0, "click", this.$4_3);
        $v_0 = $get("buttonClose");
        $addHandler($v_0, "click", this.$2_3)
    },
    $F_3: function() {
        var $v_0 = $get("buttonBack");
        $removeHandler($v_0, "click", this.$6_3);
        $v_0 = $get("buttonNext");
        $removeHandler($v_0, "click", this.$5_3);
        $v_0 = $get("buttonCancel");
        $removeHandler($v_0, "click", this.$1_3);
        $v_0 = $get("buttonExport");
        $removeHandler($v_0, "click", this.$3_3);
        $v_0 = $get("buttonPromote");
        $removeHandler($v_0, "click", this.$7_3);
        $v_0 = $get("buttonPublish");
        $removeHandler($v_0, "click", this.$8_3);
        $v_0 = $get("buttonClose");
        $removeHandler($v_0, "click", this.$2_3);
        $v_0 = $get("buttonImport");
        $removeHandler($v_0, "click", this.$4_3)
    },
    $L_3: function($p0) {
        Mscrm.Performance.PerformanceMarkerManager.get_instance().clearAllMarkers();
        Mscrm.Performance.PerformanceMarkerManager.get_instance().addMarker("File Validation - Start", 1);
        setPerfMarkerTimestamp("FileImportRequestStart");
        this.processPage(1)
    },
    $M_3: function($p0) { this.processPage(2) },
    $H_3: function($p0) { this.processPage(3) },
    $J_3: function($p0) { this.processPage(4) },
    $N_3: function($p0) { this.processPage(8) },
    $O_3: function($p0) {
        Mscrm.Performance.PerformanceMarkerManager.get_instance().clearAllMarkers();
        Mscrm.Performance.PerformanceMarkerManager.get_instance().addMarker("Publish - Start", 1);
        setPerfMarkerTimestamp("PublishCutomizationStart");
        this.processPage(6)
    },
    $K_3: function($p0) {
        Mscrm.Performance.PerformanceMarkerManager.get_instance().clearAllMarkers();
        Mscrm.Performance.PerformanceMarkerManager.get_instance().addMarker("File Import Operation - Start", 1);
        setPerfMarkerTimestamp("FileImportOperationStart");
        this.processPage(7)
    },
    $I_3: function($p0) { this.processPage(5) },
    getStateBag: function(name) { return this.$9_3[name] },
    setStateBag: function(name, value) { this.$9_3[name] = value },
    get_totalPages: function() { return this.$A_3 },
    set_totalPages: function(value) {
        this.$A_3 = value;
        return value
    },
    get_currentPageIndex: function() { return this.$0_3 },
    set_currentPageIndex: function(value) {
        this.$0_3 = value;
        return value
    },
    processPage: function(action) {
        if (IsNull(action)) action = 0;
        switch (this.$0_3) {
        case 0:
            this.processLoadImportFilePage(action);
            break;
        case 1:
            this.processSolutionInformationPage(action);
            break;
        case 2:
            this.processSolutionPostImportAction(action);
            break;
        case 3:
            this.processImportPage(action);
            break;
        case 4:
            break;
        default:
            alert(String.format("page index {0} is unknown", this.$0_3));
            break
        }
        this.setPageTitleAndButton()
    },
    setPageTitleAndButton: function() {
        var $v_0 = window.document.getElementById(this.wizardTitleId), $v_1;
        switch (this.$0_3) {
        case 0:
            $v_1 = window.document.getElementById("buttonImport");
            $v_1.style.display = "none";
            $v_1 = window.document.getElementById("buttonNext");
            $v_1.style.display = "inline";
            XUI.Html.SetText($v_0, this.fileLoadTitle);
            break;
        case 1:
            var $v_2 = window.document.getElementById("processFileFrame").contentWindow.document
                .getElementById("hiddenShowPostImportAction");
            if ($v_2.value === "1") {
                $v_1 = window.document.getElementById("buttonImport");
                $v_1.style.display = "none";
                $v_1 = window.document.getElementById("buttonNext");
                $v_1.style.display = "inline"
            } else {
                $v_1 = window.document.getElementById("buttonImport");
                $v_1.style.display = "inline";
                $v_1 = window.document.getElementById("buttonNext");
                $v_1.style.display = "none"
            }
            XUI.Html.SetText($v_0, this.solutionInformationTitle);
            break;
        case 2:
            $v_1 = window.document.getElementById("buttonImport");
            $v_1.style.display = "inline";
            $v_1 = window.document.getElementById("buttonNext");
            $v_1.style.display = "none";
            XUI.Html.SetText($v_0, this.postImportActionsTitle);
            break;
        case 3:
            $v_1 = window.document.getElementById("buttonImport");
            $v_1.style.display = "none";
            XUI.Html.SetText($v_0, this.importingTitle);
            break;
        case 4:
            $v_1 = window.document.getElementById("buttonBack");
            $v_1.style.display = "none";
            $v_1 = window.document.getElementById("buttonExport");
            $v_1.style.display = "inline";
            $v_1.style.width = "auto";
            $v_1 = window.document.getElementById("buttonCancel");
            $v_1.style.display = "none";
            $v_1 = window.document.getElementById("buttonClose");
            $v_1.style.display = "inline";
            XUI.Html.SetText($v_0, this.resultTitle);
            break;
        default:
            alert(String.format("page index {0} is unknown", this.$0_3));
            break
        }
    },
    processLoadImportFilePage: function(action) {
        var $v_0 = window.top, $v_1;
        if (document.readyState === "complete") {
            $v_1 = window.document.getElementById("buttonNext");
            if (!action) {
                Mscrm.SolutionWizardController.setState(true, false, true);
                var $v_2 = $v_0.document.getElementById("tab0");
                $v_2.style.display = "inline";
                var $v_3 = $v_0.document.getElementById("tab1");
                $v_3.style.display = "none";
                var $v_4 = $v_0.document.getElementById("uploadFileFrame"),
                    $v_5 = $v_4.contentWindow.document.getElementById("progressDiv");
                $v_5.style.display = "none";
                $v_5 = $v_4.contentWindow.document.getElementById("controlDiv");
                $v_5.style.display = "block"
            }
            if (action === 1)
                if (this.$R_3()) {
                    var $v_6 = this.$C_3("parser");
                    if ($v_6) {
                        var $v_7 = $v_0.document.getElementById("uploadFileFrame");
                        this.$0_3++;
                        var $v_8 = $v_7.contentWindow.document.getElementById("progressDiv");
                        $v_8.style.display = "block";
                        $v_8 = $v_7.contentWindow.document.getElementById("controlDiv");
                        $v_8.style.display = "none";
                        $v_1.disabled = true
                    }
                }
            action === 3 && closeWindow();
            return
        } else {
            var $$t_A = this;
            window.setTimeout(function() { $$t_A.processLoadImportFilePage(action) }, 10)
        }
    },
    processSolutionInformationPage: function(action) {
        var $v_0 = window.top, $v_1;
        if (document.readyState === "complete") {
            switch (action) {
            case 0:
                var $v_2 = $v_0.document.getElementById("tab0");
                $v_2.style.display = "none";
                var $v_3 = $v_0.document.getElementById("tab1");
                $v_3.style.display = "inline";
                $v_1 = $v_0.document.getElementById("uploadFileFrame");
                var $v_4 = $v_1.contentWindow.document.getElementById("progressDiv");
                $v_4.style.display = "none";
                $v_4 = $v_1.contentWindow.document.getElementById("controlDiv");
                $v_4.style.display = "block";
                $v_1 = $v_0.document.getElementById("processFileFrame");
                var $v_5 = $v_1.contentWindow.document.getElementById("page_solutionInformation"),
                    $v_6 = $v_1.contentWindow.document.getElementById("page_solutionPostImportAction");
                $v_5.style.display = "block";
                $v_6.style.display = "none";
                var $v_7 = $v_1.contentWindow.document.getElementById("hasError").value;
                if ($v_7 === "true") Mscrm.SolutionWizardController.setState(false, true, true);
                else Mscrm.SolutionWizardController.setState(true, true, true);
                if (window.performance) {
                    var $v_D = document.getElementById("processFileFrame").contentWindow.performance.timing.responseEnd;
                    Mscrm.MetricsStopwatch
                        .createRetroactiveStopwatch("File Import Validation - Processing",
                            window.top.FileImportRequestStart,
                            $v_D);
                    Mscrm.MetricsStopwatch.createRetroactiveStopwatch("Page Load", $v_D, (new Date).getTime())
                }
                Mscrm.Performance.PerformanceMarkerManager.get_instance().addMarker("File Import Validation - End", 1);
                break;
            case 1:
                this.$0_3++;
                $v_1 = $v_0.document.getElementById("processFileFrame");
                var $v_8 = $v_1.contentWindow.document.getElementById("page_process"),
                    $v_9 = $v_1.contentWindow.document.getElementById("page_result"),
                    $v_A = $v_1.contentWindow.document.getElementById("page_solutionInformation"),
                    $v_B = $v_1.contentWindow.document.getElementById("page_solutionPostImportAction"),
                    $v_C = $v_1.contentWindow.document.getElementById("hiddenShowPostImportAction");
                if ($v_C.value === "1") {
                    var $v_E = window.document.getElementById("buttonNext");
                    $v_9.style.display = "none";
                    $v_A.style.display = "none";
                    $v_B.style.display = "block";
                    $v_8.style.display = "none";
                    Mscrm.SolutionWizardController.setState(true, true, true)
                } else this.$B_3();
                break;
            case 7:
                this.$0_3++;
                this.$B_3();
                break;
            case 2:
                this.$0_3 = 0;
                this.processLoadImportFilePage(0);
                break;
            case 3:
                closeWindow();
                break
            }
            return
        } else {
            var $$t_G = this;
            window.setTimeout(function() { $$t_G.processSolutionInformationPage(action) }, 10)
        }
    },
    processSolutionPostImportAction: function(action) {
        var $v_0 = window.top, $v_1, $v_2, $v_3;
        switch (action) {
        case 0:
            $v_1 = $v_0.document.getElementById("processFileFrame");
            $v_2 = $v_1.contentWindow.document.getElementById("page_solutionInformation");
            $v_3 = $v_1.contentWindow.document.getElementById("page_solutionPostImportAction");
            $v_2.style.display = "none";
            $v_3.style.display = "block";
            Mscrm.SolutionWizardController.setState(true, true, true);
            break;
        case 7:
            this.$B_3();
            break;
        case 2:
            this.$0_3--;
            this.processSolutionInformationPage(0);
            break;
        case 3:
            closeWindow();
            break
        }
        return
    },
    processImportPage: function(action) {
        var $v_0 = window.top;
        switch (action) {
        case 0:
            var $v_1 = $v_0.document.getElementById("tab0");
            $v_1.style.display = "none";
            var $v_2 = $v_0.document.getElementById("tab1");
            $v_2.style.display = "inline";
            var $v_3 = $v_0.document.getElementById("processFileFrame"),
                $v_4 = $v_3.contentWindow.document.getElementById("page_process"),
                $v_5 = $v_3.contentWindow.document.getElementById("page_result");
            $v_5.style.display = "block";
            $v_4.style.display = "none";
            Mscrm.SolutionWizardController.setState(false, true, true);
            var $v_6 = $v_3.contentWindow.document.getElementById("hasError").value;
            if ($v_6 !== "true") {
                var $v_7 = $v_3.contentWindow.document.getElementById("hiddenIsManaged"),
                    $v_8 = $v_3.contentWindow.document.getElementById("importAsHoldingStatus");
                if ($v_7.value === "0") {
                    var $v_9 = window.document.getElementById("buttonNext");
                    $v_9.style.display = "none";
                    $v_9 = window.document.getElementById("buttonPublish");
                    $v_9.style.display = "inline";
                    $v_9.style.width = "auto"
                } else if ($v_8.value === "1") {
                    var $v_A = window.document.getElementById("buttonNext");
                    $v_A.style.display = "none";
                    var $v_B = window.document.getElementById("buttonPromote");
                    $v_B.style.display = "inline";
                    $v_B.style.width = "auto"
                }
            }
            Mscrm.MetricsStopwatch
                .createRetroactiveStopwatch("Importing File",
                    window.top.FileImportOperationStart,
                    (new Date)
                    .getTime());
            Mscrm.Performance.PerformanceMarkerManager.get_instance().addMarker("File Import Operation - End", 1);
            try {
                $v_0.opener.auto(7100)
            } catch ($$e_D) {
            }
            break;
        case 5:
            closeWindow();
            break;
        case 4:
            Mscrm.SolutionWizardController.exportImportLog();
            break;
        case 8:
            Mscrm.SolutionWizardController.promoteHoldingSolution();
            break;
        case 6:
            Mscrm.SolutionWizardController.publishCustomization();
            break
        }
        return
    },
    $B_3: function() {
        var $v_0 = this.$C_3("import"), $v_1 = window.top;
        if ($v_0) {
            this.$0_3++;
            window.setTimeout(this.$$d_$Q_3, 100);
            var $v_2 = $v_1.document.getElementById("processFileFrame"),
                $v_3 = $v_2.contentWindow.document.getElementById("page_process"),
                $v_4 = $v_2.contentWindow.document.getElementById("page_result"),
                $v_5 = $v_2.contentWindow.document.getElementById("page_solutionInformation"),
                $v_6 = $v_2.contentWindow.document.getElementById("page_solutionPostImportAction"),
                $v_7 = window.document.getElementById("buttonNext");
            $v_7.disabled = true;
            var $v_8 = window.document.getElementById("buttonImport");
            $v_8.disabled = true;
            $v_4.style.display = "none";
            $v_5.style.display = "none";
            $v_6.style.display = "none";
            $v_3.style.display = "block"
        }
    },
    $Q_3: function() {
        var $v_0 = Mscrm.CrmUri.create("/tools/solution/import/importStatus.aspx"),
            $v_1 = {},
            $v_2 = window.top,
            $v_3 = $v_2.document.getElementById("uploadFileFrame"),
            $v_4 = $v_3.contentWindow.document.getElementById("importJobId");
        $v_1["importjobid"] = $v_4.value;
        var $v_5 = openStdDlg($v_0, $v_1, 460, 275, true, false, null);
        if (!IsNull($v_5) && $v_5) this.$E_3();
        else this.$D_3()
    },
    $E_3: function() {
        this.$C_3("displayResult");
        var $v_0 = window.top, $v_1 = $v_0.document.getElementById("buttonBack");
        $v_1.style.display = "none";
        $v_1 = $v_0.document.getElementById("buttonExport");
        $v_1.style.display = "inline";
        $v_1.style.width = "auto";
        $v_1 = $v_0.document.getElementById("buttonCancel");
        $v_1.style.display = "none";
        $v_1 = $v_0.document.getElementById("buttonClose");
        $v_1.style.display = "inline"
    },
    $D_3: function() {
        if (!this.$G_3()) window.setTimeout(this.$$d_$D_3, 1e3);
        else this.$E_3()
    },
    $G_3: function() {
        var $v_0 = window.top,
            $v_1 = $v_0.document.getElementById("uploadFileFrame"),
            $v_2 = $v_1.contentWindow.document.getElementById("importJobId");
        if (isNullOrEmptyString($v_2.value)) return true;
        var $v_3 = new RemoteCommand("ImportJob", "RetrieveProgress");
        $v_3.SetParameter("id", $v_2.value);
        try {
            var $v_4 = $v_3.Execute();
            if ($v_4.Success) {
                var $v_5 = $v_4.ReturnValue;
                if (!IsNull($v_5) && $v_5.length > 10) {
                    var $v_6 = XUI.Xml.LoadXml($v_5);
                    if (!IsNull($v_6)) {
                        var $v_7 = XUI.Xml.SelectSingleNode($v_6, "importexportxml", null);
                        if ($v_7)
                            if ($v_7.attributes.getNamedItem("succeeded") &&
                                !isNullOrEmptyString($v_7.attributes.getNamedItem("succeeded").nodeValue)) return true
                    }
                }
            }
        } catch ($$e_8) {
        }
        return false
    },
    $R_3: function() {
        var $v_0 = window.top,
            $v_1 = $v_0.document.getElementById("uploadFileFrame").contentWindow.document
                .getElementById("uploadFileName"),
            $v_2 = $v_1.value;
        if ($v_2 === "") {
            alert(window.LOCID_IMPORT_NOFILESPECIFIED);
            $v_1.disabled = false;
            return false
        }
        var $v_3 = new RegExp('[?"/*<>|]');
        if ($v_2.length > 255 || $v_2.search($v_3) !== -1) {
            alert(window.LOCID_IMPORT_INVALIDFILENAME);
            return false
        }
        $v_2 = $v_2.substr($v_2.lastIndexOf("\\") + 1);
        var $v_4 = $v_2.substr($v_2.lastIndexOf(".") + 1).toLowerCase();
        if ($v_4 !== "zip" && $v_4 !== "cab") {
            alert(window.LOCID_IMPORT_INVALIDFILEEXT);
            return false
        }
        return true
    },
    $C_3: function($p0) {
        var $v_0 = window.top,
            $v_1 = $v_0.document.getElementById("uploadFileFrame"),
            $v_2 = $v_1.contentWindow.document.getElementById("uploadFileform"),
            $v_3 = $v_1.contentWindow.document.getElementById("importJobId"),
            $v_4 = $v_1.contentWindow.document.getElementById("action");
        $v_4.value = $p0;
        $v_2.target = "processFileFrame";
        if ($p0 === "import") {
            $v_3.value = $v_0.GetGuid();
            var $v_5 = $v_0.document.getElementById("processFileFrame"),
                $v_6 = $v_5.contentWindow.document.getElementById("overwriteSolution"),
                $v_7 = $v_5.contentWindow.document.getElementById("publishWorkflow"),
                $v_8 = $v_5.contentWindow.document.getElementById("importAsHolding"),
                $v_9 = $v_5.contentWindow.document.getElementById("unmanagedRootsDetected"),
                $v_A = $v_5.contentWindow.document.getElementById("skipProductUpdateDependencies"),
                $v_B = $v_1.contentWindow.document.getElementById("publishWorkflow"),
                $v_C = $v_1.contentWindow.document.getElementById("importAsHolding"),
                $v_D = $v_1.contentWindow.document.getElementById("overwriteSolution"),
                $v_E = $v_1.contentWindow.document.getElementById("skipProductUpdateDependencies"),
                $v_F = $v_1.contentWindow.document.getElementById("unmanagedRootsDetected");
            $v_2.target = "processImportFrame";
            $v_F.value = $v_9.value;
            if (!IsNull($v_6) && $v_6.checked) $v_D.value = "1";
            else $v_D.value = "0";
            if (!IsNull($v_8) && $v_8.checked) $v_C.value = "1";
            else $v_C.value = "0";
            if (!IsNull($v_7) && $v_7.checked) $v_B.value = "1";
            else $v_B.value = "0";
            $v_E.value = $v_A.value
        }
        try {
            $v_2.submit();
            return true
        } catch ($v_G) {
            alert($v_G.message);
            return false
        }
    }
};
Mscrm.SolutionWizardController.registerClass("Mscrm.SolutionWizardController", Mscrm.CrmUIControl);
Mscrm.SolutionWizardController.id_BTN_BACK = "buttonBack";
Mscrm.SolutionWizardController.id_BTN_NEXT = "buttonNext";
Mscrm.SolutionWizardController.id_BTN_CANCEL = "buttonCancel";
Mscrm.SolutionWizardController.id_BTN_EXPORT = "buttonExport";
Mscrm.SolutionWizardController.id_BTN_PROMOTE = "buttonPromote";
Mscrm.SolutionWizardController.id_BTN_PUBLISH = "buttonPublish";
Mscrm.SolutionWizardController.id_BTN_CLOSE = "buttonClose";
Mscrm.SolutionWizardController.id_BTN_IMPORT = "buttonImport";
Mscrm.SolutionWizardController.skipProductUpdateDependencies = "skipProductUpdateDependencies";
Mscrm.SolutionWizardController.importAsHoldingStatus = "importAsHoldingStatus";
Mscrm.SolutionWizardController._pageControlPrefix = "tab";
Mscrm.SolutionWizardController.action_LOAD = 0;
Mscrm.SolutionWizardController.action_NEXT = 1;
Mscrm.SolutionWizardController.action_BACK = 2;
Mscrm.SolutionWizardController.action_CANCEL = 3;
Mscrm.SolutionWizardController.action_EXPORT = 4;
Mscrm.SolutionWizardController.action_CLOSE = 5;
Mscrm.SolutionWizardController.action_PUBLISH = 6;
Mscrm.SolutionWizardController.action_IMPORT = 7;
Mscrm.SolutionWizardController.action_PROMOTE = 8