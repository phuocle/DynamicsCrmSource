Type.registerNamespace("Mscrm");
Mscrm.CommandFactory = function() {};
Mscrm.CommandFactory.get_instance = function() { return Mscrm.CommandFactory.$H };
Mscrm.CommandFactory.prototype = {
    $6_0: false,
    execute: function(element) {
        if (this.$6_0) return;
        this.$6_0 = true;
        var $v_0 = element.data("commandInfo"), $v_1 = element.data("commandBarData"), $v_2 = element.data("startPage");
        try {
            switch ($v_0.commandType) {
            case "Search":
                this.$e_0($v_0);
                break;
            case "CreateRecord":
                this.$X_0($v_1, $v_0);
                break;
            case "EditRecord":
                this.$a_0($v_1, $v_0);
                break;
            case "DeleteRecord":
                this.$Z_0($v_1, $v_0);
                break;
            case "MarkActivityAsComplete":
                this.$b_0($v_1);
                break;
            case "AddAttachment":
                this.$V_0($v_1, $v_2);
                break;
            case "Save":
                this.$d_0($v_1, $v_0);
                break;
            case "Cancel":
                this.$W_0($v_1, $v_0);
                break;
            case "Ok":
                break;
            case "CreateRelatedRecord":
                this.$Y_0($v_1, $v_0);
                break
            }
        } catch ($$e_4) {
            this.$0_0()
        }
    },
    $0_0: function() { this.$6_0 = false },
    $b_0: function($p0) {
        var $v_0 = $p0.contextInfo.isNew, $v_1 = {};
        $v_1["Action"] = "MarkAsComplete";
        $v_1["IsNew"] = $v_0;
        $v_1["ObjectId"] = $v_0 ? "" : $p0.contextInfo.entityId;
        $v_1["ObjectTypeCode"] = $p0.contextInfo.objectTypeCode;
        var $$t_5 = this;
        this.$D_0($v_1, function($p1_0, $p1_1) { $$t_5.$2_0(function() { window.location.reload(true) }) })
    },
    $V_0: function($p0, $p1) {
        if (!(IsNull($p1) || !$p1.get_palEnabled()))
            if (!$p0.contextInfo.isNew)
                if (!(IsNull($p0.contextInfo.extraParameters["MaxAttachmentSize"]) ||
                    IsNull($p0.contextInfo.extraParameters["ErrorAttachmentSizeBreached"]) ||
                    IsNull($p0.contextInfo.extraParameters["ErrorAddAttachmentGeneric"]) ||
                    IsNull($p0.contextInfo.extraParameters["AttachmentUploadSucceeded"]))) {
                    var $v_0 = $p0.contextInfo.extraParameters["MaxAttachmentSize"], $$t_8 = this, $$t_9 = this;
                    $p1.getPhotoFromGallery($v_0,
                        function($p1_0) {
                            var $v_1 = {};
                            $v_1["Action"] = "AddAttachment";
                            $v_1["IsNew"] = true;
                            $v_1["ObjectId"] = "";
                            $v_1["ObjectTypeCode"] = 5;
                            $v_1["ParentId"] = $p0.contextInfo.entityId;
                            $v_1["ParentType"] = $p0.contextInfo.objectTypeCode;
                            $v_1["PalDataFile"] = $p1_0;
                            $$t_8.$D_0($v_1,
                                function($p2_0, $p2_1) {
                                    alert($p0.contextInfo.extraParameters["AttachmentUploadSucceeded"]);
                                    $$t_8.$2_0(function() { window.location.reload(true) })
                                })
                        },
                        function($p1_0) {
                            switch ($p1_0) {
                            case 2:
                                alert($p0.contextInfo.extraParameters["ErrorAttachmentSizeBreached"]);
                                break;
                            case 0:
                            case 1:
                                alert($p0.contextInfo.extraParameters["ErrorAddAttachmentGeneric"]);
                                break;
                            case 3:
                                break
                            }
                            $$t_9.$0_0()
                        });
                    return
                }
        this.$0_0()
    },
    $e_0: function($p0) {
        this.toggleSeachPane();
        this.$0_0()
    },
    toggleSeachPane: function() {
        var $v_0 = $P_CRM(".searchRow");
        $v_0.toggleClass("searchRowHidden");
        $P_CRM(".gridContainer").toggle();
        $P_CRM("#MobileCommandBar").toggleClass("hideCommandBar");
        $P_CRM(".mobileNavigationContainer").toggleClass("hideContainer");
        if (!$v_0.hasClass("searchRowHidden")) {
            var $v_1 = $P_CRM(".searchControl");
            $v_1.val("");
            $v_1.focus()
        }
    },
    $X_0: function($p0, $p1) {
        var $v_0 = Mscrm.MobileUtility.getMobileUrl(2, $p0.contextInfo.entityName, null, false);
        $v_0.get_query()["LoadStartTime"] = (new Date).getTime().toString();
        var $$t_3 = this;
        this.$2_0(function() { window.location.href = $v_0.toString() })
    },
    $a_0: function($p0, $p1) {
        var $v_0 = Mscrm.MobileUtility.getMobileUrl(2, $p0.contextInfo.entityName, $p0.contextInfo.entityId, true);
        $v_0.get_query()["LoadStartTime"] = (new Date).getTime().toString();
        $P_CRM("body").scrollTop(0);
        var $$t_3 = this;
        this.$2_0(function() { window.location.href = $v_0.toString() })
    },
    $Z_0: function($p0, $p1) {
        if (confirm(window.LOCID_MEXPRESS_DELETE)) {
            var $v_0 = $p0.contextInfo.isNew, $v_1 = {};
            $v_1["Action"] = "Delete";
            $v_1["IsNew"] = $v_0;
            $v_1["ObjectId"] = $v_0 ? "" : $p0.contextInfo.entityId;
            $v_1["ObjectTypeCode"] = $p0.contextInfo.objectTypeCode;
            var $$t_6 = this;
            this.$D_0($v_1, function($p1_0, $p1_1) { $$t_6.$2_0(function() { window.history.back() }) })
        } else this.$0_0()
    },
    $D_0: function($p0, $p1) {
        $p0["ClientVersion"] = "1.0";
        var $v_0 = new RemoteCommand("MobileExpressWebService", "Execute");
        $v_0.SetParameter("commandJson", JSON.stringify($p0));
        var $$t_8 = this;
        $v_0.ErrorHandler = function($p1_0, $p1_1) {
            Mscrm.MobileProgressBar.hideIndefiniteProgressBar();
            $$t_8.$0_0();
            if (!IsNull($p1_1)) {
                var $v_1 = Mscrm.ErrorInformation.createFromDoc($p1_1);
                Mscrm.MobileUtility.gotoMobileErrorPage($v_1)
            } else openErrorDlg(null, null, null, 0, 0)
        };
        Mscrm.MobileProgressBar.showIndefiniteProgressBar();
        var $$t_9 = this;
        $v_0.Execute(function($p1_0, $p1_1) {
            Mscrm.MobileProgressBar.hideIndefiniteProgressBar();
            $p1_0.Success && !isNullOrEmptyString($p1_0.ReturnValue) && $p1($p1_0, $p1_1)
        })
    },
    $Y_0: function($p0, $p1) {
        var $v_0 = $p0.contextInfo.extraParameters,
            $v_1 = $v_0["RelatedEntityLogicalName"],
            $v_2 = $v_0["RelationshipId"],
            $v_3 = $p0.contextInfo.objectTypeCode.toString(),
            $v_4 = $p0.contextInfo.entityId,
            $v_5 = $v_0["TabId"],
            $v_6 = $v_0["RoleOrdinal"],
            $v_7 = Mscrm.MobileUtility.getMobileUrl2(2, $v_1, null, $v_2, $v_3, $v_4, false, $v_5, $v_6),
            $$t_A = this;
        this.$2_0(function() { window.location.href = $v_7.toString() })
    },
    $d_0: function($p0, $p1) {
        if ($p0.contextInfo.entityName === "annotation") {
            this.$c_0($p0, $p1);
            return
        }
        Mscrm.Utilities.isIE() && Mscrm.Utilities.isMobileRefresh() && Mscrm.InlineEditUtilities.tryCommitAllControls();
        Mscrm.InlineEditUtilities.tryCommitActiveControl(false);
        if (typeof Mscrm.ReadFormUtilities !== "undefined") {
            Mscrm.MobileProgressBar.showIndefiniteProgressBar();
            var $$t_5 = this;
            window.setTimeout(function() {
                    var $v_0 = Mscrm.InlineEditDataService.save(1,
                        function($p2_0) {
                            $$t_5.$R_0();
                            return false
                        },
                        function($p2_0) {
                            $$t_5.$0_0();
                            Mscrm.MobileProgressBar.hideIndefiniteProgressBar();
                            return false
                        },
                        false);
                    if (!IsNull($v_0) && $v_0.get_code() === 6) return;
                    if (!IsNull($v_0) && $v_0.get_success()) {
                        $$t_5.$R_0();
                        return
                    }
                    $$t_5.$0_0();
                    Mscrm.MobileProgressBar.hideIndefiniteProgressBar()
                },
                0)
        } else this.$0_0()
    },
    $R_0: function() {
        Mscrm.MobileProgressBar.hideIndefiniteProgressBar();
        if (this.$J_0()) {
            var $v_0 = String.format("{{'event':'{0}', 'message':'{1}'}}", "SaveSuccess", "");
            this.$L_0($v_0)
        }
        this.$0_0();
        Mscrm.RefreshPageHandler.set_forceNavigationAway(true);
        var $$t_1 = this;
        this.$2_0(function() { window.history.back() })
    },
    $c_0: function($p0, $p1) {
        var $v_0 = "", $v_1 = "", $v_2 = "", $v_3 = "", $v_4 = $P_CRM("input#subject").blur();
        if ($v_4.length === 1) $v_0 = $v_4[0].value;
        var $v_5 = $P_CRM("textarea#notetext").blur();
        if ($v_5.length === 1) $v_1 = $v_5[0].value;
        if ($p0.contextInfo.isNew) {
            var $v_8 = $p0.contextInfo.extraParameters;
            $v_2 = $v_8["ParentId"];
            $v_3 = $v_8["ParentType"]
        }
        var $v_6 = $p0.contextInfo.isNew, $v_7 = {};
        $v_7["Action"] = "SaveNote";
        $v_7["IsNew"] = $v_6;
        $v_7["ObjectId"] = $v_6 ? "" : $p0.contextInfo.entityId;
        $v_7["ObjectTypeCode"] = $p0.contextInfo.objectTypeCode;
        $v_7["Subject"] = $v_0;
        $v_7["NoteText"] = $v_1;
        $v_7["ParentId"] = $v_2;
        $v_7["ParentType"] = $v_3;
        var $$t_E = this;
        this.$D_0($v_7,
            function($p1_0, $p1_1) {
                if ($$t_E.$J_0()) {
                    var $v_9 = String.format("{{'event':'{0}', 'message':'{1}'}}", "SaveSuccess", "");
                    $$t_E.$L_0($v_9)
                }
                $$t_E.$2_0(function() { window.history.back() })
            })
    },
    $W_0: function($p0, $p1) {
        var $v_0 = typeof Mscrm.ReadFormUtilities !== "undefined", $v_1 = false;
        if ($p0.contextInfo.entityName === "annotation") $v_1 = getFrmXml() !== origFrmXml;
        else if ($v_0) $v_1 = Mscrm.ReadFormUtilities.promptOnClose();
        if ($v_1 && !confirm(window.LOCID_FORMS_SAVE_CONFIRM_TITLE)) {
            this.$0_0();
            return
        }
        if (this.$J_0()) {
            var $v_2 = $v_1
                ? String.format("{{'event':'{0}', 'message':'{1}'}}",
                    "Canceling",
                    window.LOCID_FORMS_SAVE_CONFIRM_TITLE)
                : String.format("{{'event':'{0}', 'message':'{1}'}}", "Canceled", "");
            this.$L_0($v_2)
        }
        $v_0 && Mscrm.RefreshPageHandler.set_forceNavigationAway(true);
        var $$t_5 = this;
        this.$2_0(function() { window.history.back() })
    },
    $J_0: function() {
        if (!IsNull(window.external) && !(typeof window.external.notify === "undefined")) return true;
        return false
    },
    $2_0: function($p0) {
        var $v_0 = new Mscrm.ReturnFunctionReference;
        $v_0.content = {};
        var $$t_4 = this;
        $v_0.callback = function($p1_0) {
            try {
                Mscrm.MobileProgressBar.showIndefiniteProgressBar();
                $p0()
            } catch ($$e_3) {
                $$t_4.$0_0();
                Mscrm.MobileProgressBar.hideIndefiniteProgressBar()
            }
        };
        Mscrm.ScriptErrorReporting.promptAndReport(null, $v_0)
    },
    $L_0: function($p0) { window.external.notify($p0) }
};
Mscrm.MobileCommandBar = function(element) {
    this.$$d_$U_3 = Function.createDelegate(this, this.$U_3);
    this.$$d_simulateClickBehaviorOnCommandIcon = Function
        .createDelegate(this, this.simulateClickBehaviorOnCommandIcon);
    this.$$d_$h_3 = Function.createDelegate(this, this.$h_3);
    Mscrm.MobileCommandBar.initializeBase(this, [element])
};
Mscrm.MobileCommandBar.prototype = {
    $1_3: null,
    $B_3: null,
    $C_3: null,
    get_CommandBarData: function() { return this.$1_3 },
    set_CommandBarData: function(value) {
        this.$B_3 = value;
        this.$1_3 = JSON.parse(this.$B_3);
        return value
    },
    get_startPage: function() {
        if (typeof Microsoft !== "undefined" &&
            typeof Microsoft.Crm !== "undefined" &&
            typeof Microsoft.Crm.Client !== "undefined" &&
            typeof Microsoft.Crm.Client.Application !== "undefined" &&
            typeof Microsoft.Crm.Client.Application.PhoneApp !== "undefined" &&
            typeof Microsoft.Crm.Client.Application.PhoneApp
            .StartPage !==
            "undefined") return Microsoft.Crm.Client.Application.PhoneApp.StartPage.get_instance();
        return null
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        var $$t_2 = this;
        this.$N_3().each(function($p1_0, $p1_1) { $removeHandler($p1_1, "click", $$t_2.$$d_$h_3) });
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    endUpdate: function() {
        Sys.Component.prototype.endUpdate.call(this);
        this.$T_3();
        this.$g_3();
        this.$S_3();
        this.$l_3()
    },
    simulateClickBehaviorOnCommandIcon: function(commandDescriptor) {
        for (var $$arr_1 = this.$1_3
                     .commandsInfo,
            $$len_2 = $$arr_1.length,
            $$idx_3 = 0;
            $$idx_3 < $$len_2;
            ++$$idx_3) {
            var $v_0 = $$arr_1[$$idx_3];
            if ($v_0.commandType === commandDescriptor) {
                var $$t_5 = this;
                window.setTimeout(function() { $$t_5.$M_3($P_CRM("#" + $v_0.id)) }, 0);
                return
            }
        }
    },
    viewAttachment: function(mimeType, documentBody, fileName, fileSize) {
        if (IsNull(this.$C_3))
            this.$C_3 = new Mscrm.ViewAttachmentCommand(this, mimeType, documentBody, fileName, fileSize);
        this.$C_3.execute()
    },
    $N_3: function() { return $P_CRM(this.get_element()).find(".ms-crm-me-cmdbarbtn,.ms-crm-me-cmdbaricon") },
    $T_3: function() {
        var $v_0 = this.get_startPage();
        if (IsNull($v_0) || !$v_0.get_palEnabled()) {
            if (Mscrm.MobileUtility.isHostedInWindowsPhoneApp()) {
                this.$O_3();
                return
            }
            this.$K_3();
            return
        }
        var $$t_2 = this;
        $v_0.addNativeBridgeOnReadyOrNow(function() {
            if ($v_0.get_hideCommandBar()) {
                $$t_2.$O_3();
                $v_0.setCommandBar($$t_2.$B_3,
                    $$t_2.$$d_simulateClickBehaviorOnCommandIcon,
                    function($p2_0) { $$t_2.$K_3() })
            } else $$t_2.$K_3()
        })
    },
    $O_3: function() {
        var $v_0 = $P_CRM(this.get_element().children[0]);
        $v_0.hide();
        !this.$P_3() && $P_CRM("#Content").css("bottom", "0px");
        $P_CRM("#rofContainer").css("bottom", "0px")
    },
    $K_3: function() {
        if (this.$1_3.commandsInfo.length > 0) {
            var $v_0 = $P_CRM(this.get_element().children[0]);
            $v_0.show()
        }
    },
    $g_3: function() {
        var $v_0 = this.$1_3.contextInfo;
        ($v_0.entityName === "annotation" && ($v_0.isNew && $v_0.pageContext === "CreateRecord") ||
                !$v_0.isNew && $v_0.pageContext === "EditRecord") &&
            $P_CRM(".header.formTable").hide()
    },
    $S_3: function() {
        var $$t_4 = this;
        this.$N_3().each(function($p1_0, $p1_1) {
            var $v_1 = $$t_4.$f_3($p1_1);
            if (IsNull($v_1)) return;
            $P_CRM($p1_1).data("commandInfo", $v_1).data("commandBarData", $$t_4.$1_3)
                .data("startPage", $$t_4.get_startPage());
            $addHandler($p1_1, "click", $$t_4.$$d_$h_3)
        });
        var $v_0 = $P_CRM("#MobileCommandBarEllipsis");
        $v_0.length && $v_0.bind("click", this.$$d_$U_3)
    },
    $U_3: function($p0) {
        var $v_0 = $P_CRM(this.get_element().children[0]);
        if ($v_0.length) {
            var $v_1 = $v_0.attr("class");
            if ($v_1.indexOf("more") < 0) {
                $v_0.removeClass("less");
                $v_0.addClass("more")
            } else {
                $v_0.removeClass("more");
                $v_0.addClass("less")
            }
        }
    },
    $l_3: function() {
        var $v_0 = this.$1_3.contextInfo;
        ($v_0.pageContext === "Error" ||
                "HideOnException" in $v_0.extraParameters && $v_0.extraParameters["HideOnException"]) &&
            $P_CRM(this.get_element()).hide();
        this.$P_3() && $P_CRM(this.get_element()).hide()
    },
    $P_3: function() {
        var $v_0 = this.$1_3.contextInfo;
        if ($v_0
            .pageContext ===
            "EntityHome" &&
            "IsSearchButtonClicked" in $v_0.extraParameters) return $v_0.extraParameters["IsSearchButtonClicked"];
        return false
    },
    $f_3: function($p0) {
        for (var $v_0 = $p0.id, $$arr_2 = this.$1_3.commandsInfo, $$len_3 = $$arr_2.length, $$idx_4 = 0;
            $$idx_4 < $$len_3;
            ++$$idx_4) {
            var $v_1 = $$arr_2[$$idx_4];
            if ($v_1.id === $v_0 || $v_1.id + "_icon" === $v_0) return $v_1
        }
        return null
    },
    $h_3: function($p0) {
        $p0.preventDefault();
        $p0.stopPropagation();
        this.$M_3($P_CRM($p0.target))
    },
    $M_3: function($p0) {
        var $v_0 = $p0.closest(".ms-crm-me-cmdbarbtn,.ms-crm-me-cmdbaricon");
        Mscrm.CommandFactory.$H.execute($v_0)
    }
};
Mscrm.MobileProgressBar = function() {};
Mscrm.MobileProgressBar.showIndefiniteProgressBar = function() {
    var $v_0 = $P_CRM("#progressOverlay");
    if ($v_0.length < 1) {
        $P_CRM("body")
            .append("<div id='progressOverlay' class='progressOverlayContainer'><img id='DialogLoadingDivImg' alt='' src='/_imgs/progressbar.gif'></div>");
        $v_0 = $P_CRM("#progressOverlay")
    }
    $v_0.show()
};
Mscrm.MobileProgressBar.hideIndefiniteProgressBar = function() {
    var $v_0 = $P_CRM("#progressOverlay");
    $v_0.length > 0 && $v_0.hide()
};
Mscrm.ViewAttachmentCommand = function($p0, $p1, $p2, $p3, $p4) {
    this.$$d_$i_0 = Function.createDelegate(this, this.$i_0);
    this.$$d_$k_0 = Function.createDelegate(this, this.$k_0);
    this.$$d_$j_0 = Function.createDelegate(this, this.$j_0);
    this.$$d_$Q_0 = Function.createDelegate(this, this.$Q_0);
    this.$A_0 = $p0;
    this.$I_0 = $p1;
    this.$7_0 = $p2;
    this.$8_0 = $p3;
    this.$9_0 = $p4
};
Mscrm.ViewAttachmentCommand.prototype = {
    $A_0: null,
    $I_0: null,
    $7_0: null,
    $8_0: null,
    $9_0: null,
    $3_0: null,
    $4_0: false,
    $5_0: false,
    get_$G_0: function() { return this.$A_0.get_startPage() },
    execute: function() {
        if (this.$4_0 || this.$5_0) return;
        !(IsNull(this.get_$G_0()) || !this.get_$G_0().get_palEnabled()) && this.$m_0()
    },
    $m_0: function() {
        if (IsNull(this.$3_0)) {
            if (!(isNullOrEmptyString(this.$7_0) || isNullOrEmptyString(this.$8_0) || isNullOrEmptyString(this.$9_0))) {
                this.$4_0 = true;
                this.get_$G_0().saveAttachment(this.$7_0,
                    this.$8_0,
                    this.$I_0,
                    Number.parseInvariant(this.$9_0),
                    this.$$d_$Q_0,
                    this.$$d_$j_0)
            }
        } else this.$Q_0(this.$3_0)
    },
    $Q_0: function($p0) {
        this.$4_0 = false;
        this.$3_0 = $p0;
        window.setTimeout(this.$$d_$k_0, 0)
    },
    $j_0: function($p0) {
        this.$4_0 = false;
        alert(this.$F_0("ErrorViewAttachmentOutOfSpace"))
    },
    $k_0: function() {
        if (this.$5_0) return;
        if (IsNull(this.$3_0));
        this.$5_0 = true;
        this.get_$G_0().openAttachment(this.$3_0, this.$$d_$i_0)
    },
    $i_0: function($p0) {
        this.$5_0 = false;
        if (!$p0) return;
        var $v_0 = this.$F_0("ErrorViewAttachmentGeneric");
        switch ($p0) {
        case 1:
            $v_0 = this.$F_0("ErrorViewAttachmentUnableToFindAnActivity");
            break;
        case 2:
            $v_0 = this.$F_0("ErrorViewAttachmentUnableToFindTheDataId");
            break;
        default:
            break
        }
        alert($v_0)
    },
    $F_0: function($p0) { return this.$A_0.$1_3.contextInfo.extraParameters[$p0] }
};
Mscrm.CommandFactory.registerClass("Mscrm.CommandFactory");
Mscrm.MobileCommandBar.registerClass("Mscrm.MobileCommandBar", Mscrm.CrmUIControl);
Mscrm.MobileProgressBar.registerClass("Mscrm.MobileProgressBar");
Mscrm.ViewAttachmentCommand.registerClass("Mscrm.ViewAttachmentCommand");
Mscrm.CommandFactory.$H = new Mscrm.CommandFactory;
Mscrm.CommandFactory.notificationJsonFormat = "{{'event':'{0}', 'message':'{1}'}}"