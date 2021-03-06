Type.registerNamespace("Mscrm");
Mscrm.BaseCategory = function(element) { Mscrm.BaseCategory.initializeBase(this, [element]) };
Mscrm.BaseCategory.GetBehavior = function(id) {
    if (isNullOrEmptyString(id)) return null;
    return Mscrm.BaseCategory.GetElementBehavior($get(id))
};
Mscrm.BaseCategory.GetElementBehavior = function(element) {
    if (IsNull(element)) return null;
    var $v_0 = Sys.UI.Behavior.getBehaviorsByType(element, Mscrm.BaseCategory);
    if (!$v_0.length) return null;
    return $v_0[0]
};
Mscrm.BaseCategory.prototype = {
    $4_3: null,
    $A_3: null,
    add_listItemClickedEvent: function(value) { this.get_events().addHandler("OnListItemClicked", value) },
    remove_listItemClickedEvent: function(value) { this.get_events().removeHandler("OnListItemClicked", value) },
    get_categoryId: function() { return this.$4_3 },
    set_categoryId: function(value) {
        this.$4_3 = value;
        return value
    },
    get_contextId: function() { return this.$A_3 },
    set_contextId: function(value) {
        this.$A_3 = value;
        return value
    },
    initialize: function() { Mscrm.CrmUIBehavior.prototype.initialize.call(this) },
    onListItemClicked: function(eventObject) {
        var $v_0 = this.get_events().getHandler("OnListItemClicked");
        !IsNull($v_0) && $v_0(eventObject);
        this.$1E_3(eventObject)
    },
    $1E_3: function($p0) { $find("RelatedInformationPane").PopulateFormControl($p0) }
};
Mscrm.Category = function(element) { Mscrm.Category.initializeBase(this, [element]) };
Mscrm.Category.prototype = {
    initialize: function() { Mscrm.BaseCategory.prototype.initialize.call(this) },
    listItemKeyPressed: function(eventObject) {
        switch (eventObject.keyCode) {
        case 13:
        case 32:
            this.$o_4(XUI.Html.DomUtils.GetFirstChild(eventObject.target));
            eventObject.stopPropagation();
            eventObject.preventDefault();
            break
        }
    },
    listItemClicked: function(eventObject) {
        var $v_0 = eventObject.target;
        if ($v_0.tagName.toUpperCase() === "IMG") $v_0 = $v_0.parentNode;
        if ($v_0.tagName
            .toUpperCase() ===
            "SPAN" &&
            Sys.UI.DomElement.containsCssClass($v_0, "ms-crm-LookupItem-Name")) $v_0 = $v_0.parentNode;
        this.$o_4($v_0)
    },
    $o_4: function($p0) {
        var $v_0 = {};
        $v_0.Context = this.$A_3;
        $v_0.DisplayName = $p0.getAttribute("title");
        $v_0.Value = $p0.getAttribute("Value");
        $v_0.ObjectType = $p0.getAttribute("otype");
        var $v_1 = $p0.getAttribute("data");
        if (!isNullOrEmptyString($v_1)) {
            for (var $v_2 = {}, $v_3 = $v_1.split("&"), $v_4 = $v_3.length, $v_5 = 0; $v_5 < $v_4; $v_5++) {
                var $v_6 = $v_3[$v_5].split("=");
                if ($v_6.length === 2) {
                    var $v_7 = CrmEncodeDecode.CrmNameValueDecode($v_6[0]),
                        $v_8 = CrmEncodeDecode.CrmNameValueDecode($v_6[1]);
                    $v_2[$v_7] = new Mscrm.FormInputControl.LookupItemData($v_7, $v_8)
                }
            }
            $v_0.keyValues = $v_2
        }
        this.onListItemClicked($v_0)
    }
};
Mscrm.CategoryFollowup = function(element) {
    this.$$d_$y_3 = Function.createDelegate(this, this.$y_3);
    this.$$d_$1P_3 = Function.createDelegate(this, this.$1P_3);
    Mscrm.CategoryFollowup.initializeBase(this, [element])
};
Mscrm.CategoryFollowup.prototype = {
    $B_3: null,
    $2_3: null,
    $1_3: null,
    $3_3: null,
    $F_3: null,
    $N_3: null,
    $W_3: 30,
    $c_3: 6e4,
    $f_3: function($p0) { return $find($p0) },
    initialize: function() {
        Mscrm.CrmUIBehavior.prototype.initialize.call(this);
        this.$B_3 = $find("crmFollowUpForm");
        this.$2_3 = $find("crmForm");
        this.$1_3 = this.$f_3("scheduledend");
        this.$3_3 = this.$f_3("scheduledstart");
        this.$F_3 = this.$B_3.GetControl("subject");
        this.$N_3 = this.$B_3.GetControl("owner");
        this.$B_3.detachCloseAlert();
        this.$B_3.set_saving(true);
        this.$r_3()
    },
    OnTypeChanged: function(typeSelect) {
        if (!IsNull(typeSelect)) {
            this.$1H_3();
            this.$v_3(typeSelect.DataValue);
            this.$1G_3();
            this.$1J_3()
        }
    },
    SaveAndOpenFollowUp: function(categoryType, type, form) {
        var $v_0 = this.SaveFollowUp(categoryType, type, form);
        if (!IsNull($v_0)) {
            Mscrm.Grid.auto(categoryType, null);
            openObj(categoryType, $v_0, null)
        }
    },
    SaveFollowUp: function(categoryType, type, form) {
        this.$1_3.refreshTimeValue();
        var $v_0 = form.BuildXml(true, true, true, false, false);
        if (this.$1R_3(form) && ($v_0 === 1 || $v_0 === 3)) {
            this.$e_3(true);
            var $v_1 = this.$2_3.get_objectId(),
                $v_2 = this.$2_3.get_objectTypeCode(),
                $v_3 = Mscrm.FormControlInputBehavior.GetBehavior("regardingobjectid");
            if (Mscrm.EntityPropUtil.isActivityTypeCode($v_2) && IsNull($v_3)) {
                var $v_B = Mscrm.FormControlInputBehavior.GetBehavior("regardingobjectid"), $v_C = $v_B.get_dataValue();
                if (!IsNull($v_B) && !IsNull($v_C) && $v_C.length > 0) {
                    var $v_D = $v_C[0];
                    $v_2 = parseInt($v_D.type);
                    $v_1 = $v_D.id
                } else {
                    $v_2 = -1;
                    $v_1 = null
                }
            }
            var $v_4 = window.document.getElementById("crmFormSubmitXml").value,
                $v_5,
                $v_6,
                $v_7 = form.GetControl("crmFormRootElem"),
                $v_8 = "</" + $v_7.value + ">";
            if (categoryType === 4401) {
                $v_5 = "<customer>";
                $v_6 = "</customer>";
                if ($v_2 === 1 || $v_2 === 2 || $v_2 === 4
                )
                    $v_4 = $v_4.replace($v_8,
                        String.format('{0}<activityparty><partyid type="{1}">{2}</partyid></activityparty>{3}{4}',
                            $v_5,
                            $v_2,
                            $v_1,
                            $v_6,
                            $v_8))
            } else if (categoryType === 4214) {
                $v_5 = "<customers>";
                $v_6 = "</customers>";
                if ($v_2 === 1 || $v_2 === 2)
                    $v_4 = $v_4.replace($v_8,
                        String.format('{0}<activityparty><partyid type="{1}">{2}</partyid></activityparty>{3}{4}',
                            $v_5,
                            $v_2,
                            $v_1,
                            $v_6,
                            $v_8))
            }
            if (!IsNull($v_2) && !IsNull($v_1) && IsNull($v_3)) {
                $v_8 = "</" + $v_7.value + ">";
                if (!$v_4.length) $v_4 = "<" + $v_7.value + ">" + $v_8;
                $v_4 = $v_4.replace($v_8,
                    String.format('<regardingobjectid type="{0}">{1}</regardingobjectid>{2}', $v_2, $v_1, $v_8))
            }
            var $v_9 = new RemoteCommand("ActivitiesWebService", "CreateFollowupActivity");
            $v_9.SetParameter("objectTypeCode", categoryType);
            $v_9.SetParameter("xml", $v_4);
            $v_9.SetParameter("sourceObjectTypeCode", this.$2_3.get_objectTypeCode());
            $v_9.SetParameter("sourceObjectId", this.$2_3.get_objectId());
            var $v_A = $v_9.Execute();
            if ($v_A.Success) {
                var $v_E = this.$F_3.value;
                this.$v_3(categoryType);
                var $v_F = window.document.getElementById("savemessage");
                $v_F.CreateNotification("GoodSave",
                    3,
                    "Status",
                    String.format(window.LOCID_RELATEDINFO_FLWUP_OK, $v_E, type));
                var $v_G = [];
                $v_F.SetNotifications($v_G);
                this.$r_3();
                this.$e_3(false);
                return $v_A.ReturnValue
            }
            this.$e_3(false);
            return null
        }
        return null
    },
    $1J_3: function() {
        if (!IsNull(this.$3_3) && !IsNull(this.$1_3)) {
            this.$3_3.add_change(this.$$d_$1P_3);
            this.$1_3.add_change(this.$$d_$y_3)
        }
    },
    $1P_3: function($p0) {
        var $v_0 = new Date(this.$3_3.get_dataValueAsDate().getTime() + this.$W_3 * this.$c_3);
        this.$1_3.set_dataValueAsDate($v_0)
    },
    $y_3: function($p0) {
        if (!IsNull(this.$3_3) && !IsNull(this.$1_3))
            if (this.$3_3.get_dataValueAsDate() > this.$1_3.get_dataValueAsDate()) {
                alert(window.LOCID_RELATEDINFO_ENDSTARTERR);
                this.$1_3.set_dataValueAsDate(new Date(this.$3_3.get_dataValueAsDate()
                    .getTime() +
                    this.$W_3 * this.$c_3))
            } else
                this.$W_3 = (this.$1_3.get_dataValueAsDate() - this.$3_3.get_dataValueAsDate()) / 60 / 1e3 -
                (this.$1_3.get_dataValueAsDate().getTimezoneOffset() -
                    this.$3_3.get_dataValueAsDate().getTimezoneOffset())
    },
    $r_3: function() {
        var $v_0 = this.$2_3.get_objectTypeCode(), $v_1 = null;
        if ($v_0 === 112) $v_1 = this.$f_3("followupby");
        else $v_1 = this.$1_3;
        if (IsNull($v_1)) this.$1_3.set_dataValueAsDate($v_1.get_dataValueAsDate());
        else this.$1_3.set_dataValueAsDate(null)
    },
    $1H_3: function() {
        SetCachedSetting("FU_Subject", this.$F_3.value);
        SetCachedSetting("FU_AssignTo", this.$N_3.DataValue);
        SetCachedSetting("FU_DueDate", this.$1_3.get_dataValueAsDate())
    },
    $1G_3: function() {
        this.$F_3.value = GetCachedSetting("FU_Subject", this.$F_3.value);
        this.$N_3.DataValue = GetCachedSetting("FU_AssignTo", this.$N_3.DataValue);
        this.$1_3.set_dataValueAsDate(GetCachedSetting("FU_DueDate", this.$1_3.get_dataValueAsDate()));
        !IsNull(this.$3_3) && this.$3_3.set_dataValueAsDate(this.$1_3.get_dataValueAsDate())
    },
    $v_3: function($p0) {
        var $v_0 = new RemoteCommand("ActivitiesWebService", "RenderFollowupActivityFormData");
        $v_0.SetParameter("objectTypeCode", $p0);
        var $v_1 = $v_0.Execute();
        if ($v_1.Success) {
            window.document.getElementById("followupFormDiv").innerHTML = $v_1.ReturnValue;
            this.$B_3._bSaving = true
        }
    },
    $1R_3: function($p0) {
        if (!IsNull(this.$3_3) && !IsNull(this.$1_3))
            if (this.$3_3.get_dataValueAsDate() > this.$1_3.get_dataValueAsDate()) {
                alert(window.LOCID_RELATEDINFO_ENDSTARTERR);
                return false
            }
        var $v_0 = this.$2_3.GetControl("regardingobjectid"), $v_1 = -1, $v_2 = $v_0.DataValue;
        if (!IsNull($v_0) && !IsNull($v_0.DataValue) && $v_2.items.length > 0) {
            var $v_4 = $v_2;
            $v_1 = $v_4.type
        }
        var $v_3 = $p0.get_objectTypeCode();
        if ($v_1 === 4406 && $v_3 === 4212) {
            alert(window.LOCID_RELATEDINFO_TASKNOTREGOBJ);
            return false
        }
        return true
    },
    $e_3: function($p0) {
        window.document.getElementById("savefollowup").disabled = $p0;
        window.document.getElementById("saveandopenfollowup").disabled = $p0
    }
};
Mscrm.CategoryHeading = function(element) {
    this.$$d_$1N_3 = Function.createDelegate(this, this.$1N_3);
    Mscrm.CategoryHeading.initializeBase(this, [element])
};
Mscrm.CategoryHeading.prototype = {
    $4_3: null,
    $Z_3: null,
    get_categoryId: function() { return this.$4_3 },
    set_categoryId: function(value) {
        this.$4_3 = value;
        return value
    },
    get_$I_3: function() {
        if (IsNull(this.$Z_3)) this.$Z_3 = $get("SectionImage" + this.$4_3, this.get_element());
        return this.$Z_3
    },
    initialize: function() {
        Mscrm.CrmUIBehavior.prototype.initialize.call(this);
        $addHandler(this.get_$I_3(), "click", this.$$d_$1N_3)
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        $removeHandler(this.get_$I_3(), "click", this.$$d_$1N_3);
        Mscrm.CrmUIBehavior.prototype.dispose.call(this)
    },
    $1N_3: function($p0) {
        var $v_0 = $get("Section" + this.$4_3, this.get_element());
        if ($v_0.style.display === "none") {
            $v_0.style.display = "block";
            this.get_$I_3().src = "/_imgs/up.gif";
            this.get_$I_3().alt = window.LOCID_TREE_MINUS
        } else {
            $v_0.style.display = "none";
            this.get_$I_3().src = "/_imgs/down.gif";
            this.get_$I_3().alt = window.LOCID_TREE_PLUS
        }
    }
};
Mscrm.ContextHelper = function(element) {
    this.$$d_$15_3 = Function.createDelegate(this, this.$15_3);
    this.$$d_$18_3 = Function.createDelegate(this, this.$18_3);
    Mscrm.ContextHelper.initializeBase(this, [element])
};
Mscrm.ContextHelper.prototype = {
    $J_3: null,
    $Y_3: null,
    $0_3: null,
    $P_3: null,
    $R_3: null,
    $a_3: null,
    $X_3: null,
    $S_3: null,
    add_change: function(value) { this.get_events().addHandler("OnChange", value) },
    remove_change: function(value) { this.get_events().removeHandler("OnChange", value) },
    get_dataValue: function() { return this.$a_3 },
    set_dataValue: function(value) {
        this.$17_3(value);
        return value
    },
    get_contextControlId: function() { return this.$P_3 },
    set_contextControlId: function(value) {
        this.$P_3 = value;
        return value
    },
    get_focusControlIds: function() { return this.$R_3 },
    set_focusControlIds: function(value) {
        this.$R_3 = value;
        return value
    },
    get_onChangeClientHandler: function() { return this.$X_3 },
    set_onChangeClientHandler: function(value) {
        this.$X_3 = value;
        return value
    },
    get_relatedInformationControl: function() {
        if (IsNull(this.$Y_3)) this.$Y_3 = $find("RelatedInformationPane");
        return this.$Y_3
    },
    get_focusTriggersIds: function() {
        if (IsNull(this.$S_3)) this.$S_3 = this.$R_3.split(",");
        return this.$S_3
    },
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.add_change(this.$$d_$18_3);
        for (var $v_0 = this.get_focusTriggersIds(), $v_1 = $v_0.length, $v_2 = 0; $v_2 < $v_1; $v_2++) {
            var $v_3 = window.document.getElementById($v_0[$v_2]);
            $addHandler($v_3, "focus", this.$$d_$15_3)
        }
        this.$0_3 = window.document.getElementById("ContextSelect");
        this.$J_3 = window.document.getElementById(this.$P_3);
        $addHandler(this.$J_3, "focus", this.$$d_$15_3)
    },
    $18_3: function($p0) {
        var $v_0 = new Function("dayOfWeek", this.$X_3);
        $v_0.call(this, this.$a_3)
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        for (var $v_0 = this.get_focusTriggersIds(), $v_1 = $v_0.length, $v_2 = 0; $v_2 < $v_1; $v_2++) {
            var $v_3 = window.document.getElementById($v_0[$v_2]);
            $removeHandler($v_3, "focus", this.$$d_$15_3)
        }
        $removeHandler(this.$J_3, "focus", this.$$d_$15_3);
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    focus: function() { this.$J_3.focus() },
    $15_3: function($p0) {
        this.$0_3.value !== this.get_element().id &&
            this.get_relatedInformationControl().LoadContext($p0, this.get_element().id)
    },
    $17_3: function($p0) {
        this.$a_3 = $p0;
        var $v_0 = this.get_events().getHandler("OnChange");
        !IsNull($v_0) && $v_0(null)
    }
};
Mscrm.CategoryResources = function(element) { Mscrm.CategoryResources.initializeBase(this, [element]) };
Mscrm.CategoryResources.prototype = {
    ResourceSpecificationTreeClick: function(eventObject) {
        var $v_0 = $find("ResourceSpecificationTree"), $v_1 = $v_0.GetNodeId(eventObject.target);
        if (IsNull($v_1)) return;
        var $v_2 = Number.parseInvariant($v_1);
        if ($v_2 < 0) return;
        $v_0.set_selectedNodeId($v_1);
        var $v_3, $v_4 = -1, $v_5 = $v_0.GetNodeElement($v_2);
        $v_3 = XUI.Xml.SelectSingleNode($v_5, "type", null);
        if (!IsNull($v_3)) {
            $v_4 = parseInt(XUI.Xml.GetText($v_3));
            if ($v_4 === 4e3 || $v_4 === 8) {
                var $v_6 = "";
                $v_3 = XUI.Xml.SelectSingleNode($v_5, "name", null);
                if (!IsNull($v_3)) $v_6 = XUI.Xml.GetText($v_3);
                var $v_7 = "";
                $v_3 = XUI.Xml.SelectSingleNode($v_5, "id", null);
                if (!IsNull($v_3)) $v_7 = XUI.Xml.GetText($v_3);
                var $v_8 = $v_5.parentNode;
                while (!IsNull($v_8)) {
                    var $v_B = parseInt(XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_8, "type", null)));
                    if ($v_B === 4006) break;
                    $v_8 = $v_8.parentNode
                }
                var $v_9 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_8, "id", null)),
                    $v_A = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_8, "effortrequired", null));
                this.$1F_4($v_6, $v_7.toUpperCase(), $v_4, $v_9, $v_A)
            }
        }
    },
    $1F_4: function($p0, $p1, $p2, $p3, $p4) {
        var $v_0 = {};
        $v_0.Context = this.$A_3;
        $v_0.DisplayName = $p0;
        $v_0.Value = $p1;
        $v_0.ObjectType = $p2;
        $v_0.ResourceSpecId = $p3;
        $v_0.Effort = $p4;
        this.onListItemClicked($v_0)
    }
};
Mscrm.CategorySubject = function(element) { Mscrm.CategorySubject.initializeBase(this, [element]) };
Mscrm.CategorySubject.prototype = {
    SubjectClicked: function(subject, eventArguments) {
        if (!IsNull(subject)) {
            var $v_0 = {};
            $v_0.Context = this.$A_3;
            $v_0.DisplayName = eventArguments.get_name();
            $v_0.Value = eventArguments.get_id();
            $v_0.ObjectType = 129;
            this.onListItemClicked($v_0)
        }
    }
};
Mscrm.CategoryLookup = function(element) {
    this.$$d_$1I_4 = Function.createDelegate(this, this.$1I_4);
    Mscrm.CategoryLookup.initializeBase(this, [element])
};
Mscrm.CategoryLookup.prototype = {
    $C_4: null,
    $d_4: null,
    $5_4: null,
    $V_4: null,
    $E_4: null,
    $O_4: null,
    $D_4: null,
    $U_4: null,
    initialize: function() {
        Mscrm.BaseCategory.prototype.initialize.call(this);
        this.$C_4 = window.document.getElementById(this.$A_3);
        this.$d_4 = Mscrm.FormControlInputBehavior.GetBehavior("selObjects");
        this.$5_4 = $get("findValue", this.get_element());
        this.$U_4 = Mscrm.CrmUIBehavior.getBehaviorByName(this.$5_4, "HintText");
        this.$E_4 = $get(this.$4_3 + "_gridParent", this.get_element());
        this.$O_4 = $get("btnGo", this.get_element());
        this.$D_4 = $get(this.$4_3 + "_clearCriteriaButton", this.get_element());
        this.$h_4()
    },
    search: function() {
        this.$5_4.focus();
        this.$U_4.notifyFocus(null);
        this.$h_4()
    },
    clearSearch: function() {
        this.$t_4();
        if (!IsNull(this.$5_4)) this.$5_4.value = "";
        this.search();
        if (!IsNull(this.$5_4)) {
            this.$5_4.focus();
            this.$U_4.notifyTextChanged(null)
        }
    },
    selectChange: function() { this.$h_4() },
    findValueKeyDown: function(eventObject) {
        if (eventObject.keyCode === 13) this.search();
        else eventObject.keyCode !== 40 && eventObject.keyCode !== 9 && eventObject.keyCode !== 18 && this.$t_4()
    },
    $s_4: function() {
        this.$E_4.innerHTML = String.format('"<div style=\'padding:4;text-align:center;color:#999999;\'>"{0}"</div>"',
            window.LOCID_NORECORDS)
    },
    $h_4: function() {
        if (this.$C_4.disabled) {
            this.$s_4();
            return
        }
        window.document.body.style.cursor = "wait";
        if (!IsNull(this.$V_4)) this.$E_4.innerHTML = this.$V_4;
        this.$C_4.RaiseSetAdditionalParamsEvent();
        var $v_0 = new RemoteCommand("LookupService", "RetrieveFormAssistantHtml");
        $v_0.SetParameter("categoryId", this.$4_3);
        $v_0.SetParameter("typeCode", this.$d_4.get_dataValue());
        $v_0.SetParameter("bindingColumns", IsNull(this.$C_4.bindingcolumns) ? "" : this.$C_4.bindingcolumns);
        $v_0.SetParameter("additionalParameters", this.$C_4.additionalparams);
        $v_0.SetParameter("searchValue", this.$5_4.value);
        $v_0.Execute(this.$$d_$1I_4)
    },
    $1I_4: function($p0, $p1) {
        this.$V_4 = this.$E_4.innerHTML;
        if ($p0.Success && typeof $p0.ReturnValue === "string") {
            this.$E_4.innerHTML = $p0.ReturnValue;
            !IsNull(this.$5_4) && !isNullOrEmptyString(this.$5_4.value) && this.$1M_4()
        } else this.$s_4()
    },
    $t_4: function() {
        if (!IsNull(this.$O_4)) {
            this.$O_4.style.display = "inline";
            var $v_0 = XUI.Html.DomUtils.GetFirstChild(this.$O_4);
            if (!IsNull($v_0)) $v_0.src = $v_0.getAttribute("imgBase") + ".gif"
        }
        if (!IsNull(this.$D_4)) this.$D_4.style.display = "none"
    },
    $1M_4: function() {
        this.$D_4.style.display = "inline";
        var $v_0 = XUI.Html.DomUtils.GetFirstChild(this.$D_4);
        $v_0.src = $v_0.getAttribute("imgBase") + ".gif"
    }
};
Mscrm.ContextChangedEventArgs = function(context) {
    Mscrm.ContextChangedEventArgs.initializeBase(this);
    this.$b_1 = context
};
Mscrm.ContextChangedEventArgs.prototype = { $b_1: null, get_context: function() { return this.$b_1 } };
Mscrm.RelatedInformation = function(element) {
    this.$$d_$16_3 = Function.createDelegate(this, this.$16_3);
    this.$$d_$13_3 = Function.createDelegate(this, this.$13_3);
    this.$$d_$1C_3 = Function.createDelegate(this, this.$1C_3);
    this.$$d_ToggleInformationPane = Function.createDelegate(this, this.ToggleInformationPane);
    this.$$d_$z_3 = Function.createDelegate(this, this.$z_3);
    this.$G_3 = -1;
    this.$T_3 = new Array(0);
    Mscrm.RelatedInformation.initializeBase(this, [element])
};
Mscrm.RelatedInformation.prototype = {
    $K_3: null,
    $L_3: null,
    $Q_3: null,
    $8_3: null,
    $0_3: null,
    $M_3: false,
    $i_3: 500,
    $7_3: null,
    $2_3: null,
    add_contextChanged: function(value) { this.get_events().addHandler("OnContextChangedEvent", value) },
    remove_contextChanged: function(value) { this.get_events().removeHandler("OnContextChangedEvent", value) },
    add_expandEvent: function(value) { this.get_events().addHandler("OnExpandEvent", value) },
    remove_expandEvent: function(value) { this.get_events().removeHandler("OnExpandEvent", value) },
    add_collapseEvent: function(value) { this.get_events().addHandler("OnCollapseEvent", value) },
    remove_collapseEvent: function(value) { this.get_events().removeHandler("OnCollapseEvent", value) },
    get_$6_3: function() { return this.get_element().getAttribute("CurrentContext") },
    set_$6_3: function($p0) {
        this.get_element().setAttribute("CurrentContext", $p0);
        return $p0
    },
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.$8_3 = new RemoteCommand("RelatedInformation", "GetContextHtml");
        this.$8_3.ErrorHandler = this.$$d_$z_3;
        this.$7_3 = window.document.getElementById("ShowHideImage");
        this.$j_3(this.$7_3, "click", this.$$d_ToggleInformationPane);
        this.$0_3 = Mscrm.FormControlInputBehavior.GetBehavior("ContextSelect");
        this.$2_3 = $find("crmForm");
        for (var $v_0, $v_1 = this.$0_3.get_options().length, $v_2 = null, $v_3 = 0; $v_3 < $v_1; $v_3++) {
            $v_0 = this.$l_3($v_3).getAttribute("controlId");
            if (!isNullOrEmptyString($v_0)) {
                $v_2 = window.document.getElementById($v_0);
                !IsNull($v_2) && this.$j_3($v_2, "focus", this.$$d_$1C_3)
            }
        }
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        for (var $v_0 = 0, $v_1 = this.$T_3.length; $v_0 < $v_1; $v_0++) {
            var $v_2 = this.$T_3.pop();
            $removeHandler($v_2.Element, $v_2.Name, $v_2.Handler)
        }
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    $j_3: function($p0, $p1, $p2) {
        $addHandler($p0, $p1, $p2);
        var $v_0 = {};
        $v_0.Element = $p0;
        $v_0.Name = $p1;
        $v_0.Handler = $p2;
        Array.add(this.$T_3, $v_0)
    },
    $1A_3: function($p0) {
        var $v_0 = this.get_events().getHandler("OnContextChangedEvent");
        !IsNull($v_0) && $v_0(this, new Mscrm.ContextChangedEventArgs($p0))
    },
    $1D_3: function($p0) { this.LoadContextData(null, $p0) },
    $l_3: function($p0) {
        var $v_0 = this.$0_3.get_element();
        return $v_0.options[$p0]
    },
    LoadContextData: function(contextId, eventTarget) {
        this.$M_3 = false;
        if (!IsNull(this.$G_3)) {
            window.clearTimeout(this.$G_3);
            if (!IsNull(this.$L_3)) contextId = this.$L_3;
            this.$L_3 = null
        }
        this.$w_3();
        var $v_0 = this.$0_3.get_options().length;
        if (!IsNull(contextId)) {
            var $v_3 = this.$0_3.get_dataValue();
            this.$0_3.set_dataValue(contextId);
            if (this.$0_3.get_dataValue() !== contextId)
                for (var $v_4 = 0; $v_4 < $v_0; $v_4++) {
                    var $v_5 = this.$l_3($v_4);
                    if ($v_5.getAttribute("controlId") === contextId) {
                        this.$0_3.set_selectedIndex($v_4);
                        break
                    }
                }
            if (isNullOrEmptyString(this.$0_3.get_dataValue())) {
                this.$Q_3 = contextId;
                this.$0_3.set_dataValue($v_3);
                return
            }
        }
        this.$1L_3(window.document.getElementById("CategoryList"));
        this.$Q_3 = null;
        if (this.get_$6_3() !== this.$0_3.get_dataValue()) {
            this.set_$6_3(this.$0_3.get_dataValue());
            if (!IsNull(eventTarget) && this.$0_3.get_element() === eventTarget) {
                var $v_6 = Mscrm.FormControlInputBehavior.GetBehavior(this.get_$6_3());
                !IsNull($v_6) && this.$q_3($v_6)
            }
            this.$1A_3(this.get_$6_3())
        }
        var $v_1 = this.$0_3.get_selectedOption().getAttribute("ContextXml");
        this.$2_3.BuildXml(false, false, true, false, false);
        var $v_2 = window.document.getElementById("crmFormSubmitXml").value;
        if (!$v_2.length) $v_2 = "<" + window.document.getElementById("crmFormRootElem").value + "/>";
        this.$8_3.SetXmlParameter("context", $v_1);
        this.$8_3.SetParameter("formXml", $v_2);
        this.$8_3.SetParameter("formSubmitId", window.document.getElementById("crmFormSubmitId").value);
        this.$K_3 = this.get_$6_3();
        this.$8_3.Execute(this.$$d_$13_3)
    },
    $1C_3: function($p0) { this.LoadContext($p0, null) },
    LoadContext: function(eventObject, contextId) {
        if (IsNull(contextId)) contextId = eventObject.target.id;
        if (this.$g_3()) {
            if (contextId === this.get_$6_3()) return;
            if (contextId === this.$0_3.get_dataValue() && IsNull(this.get_$6_3())) return;
            this.set_$6_3(contextId);
            return
        }
        contextId !== this.get_$6_3() && contextId !== this.$Q_3 && this.$1O_3(contextId, eventObject.target)
    },
    Expand: function() {
        this.$u_3(true);
        this.$0_3.get_dataValue() !== this.get_$6_3() && this.LoadContextData(this.get_$6_3(), null);
        this.$1B_3()
    },
    $1B_3: function() {
        var $v_0 = this.get_events().getHandler("OnExpand");
        !IsNull($v_0) && $v_0(this, Sys.EventArgs.Empty)
    },
    $u_3: function($p0) {
        var $v_0, $v_1 = false, $v_2;
        if ($p0) {
            $v_0 = "block";
            $v_1 = true;
            $v_2 = "right"
        } else {
            $v_0 = "none";
            $v_2 = "left"
        }
        this.$0_3.get_element().style.display = $v_1 ? "inline" : "none";
        window.document.getElementById("InformationContents").style.display = $v_0;
        window.document.getElementById("InformationAreaTitle").style.display = $v_0;
        var $v_3 = String.format("/_imgs/theme/{0}/collapse_{1}", window.CURRENT_THEME_TYPE, $v_2);
        this.$7_3.src = $v_3 + ".gif";
        this.$7_3.setAttribute("imgBase", $v_3);
        var $v_4 = "RelatedInformationPane", $v_5 = "RelatedInformationPaneContainer";
        if ($p0) {
            this.$7_3.alt = window.LOCID_RELATEDINFO_COLLAPSE;
            this.$7_3.title = window.LOCID_RELATEDINFO_COLLAPSE;
            $v_5 += " RelatedInformationPaneExpandedContainer"
        } else {
            $v_4 += "  RelatedInformationPaneCollapsed";
            $v_5 += " RelatedInformationPaneCollapsedContainer";
            this.$7_3.alt = window.LOCID_RELATEDINFO_EXPAND;
            this.$7_3.title = window.LOCID_RELATEDINFO_EXPAND
        }
        this.get_element().className = $v_4;
        var $v_6 = this.$11_3();
        if (!IsNull($v_6)) {
            $v_6.className = $v_5;
            var $v_7 = this.$12_3($v_6);
            if (!IsNull($v_7))
                if ($p0) {
                    Sys.UI.DomElement.removeCssClass($v_7, "ms-crm-FormBodyRICollapsed");
                    Sys.UI.DomElement.addCssClass($v_7, "ms-crm-FormBodyRIExpanded")
                } else {
                    Sys.UI.DomElement.removeCssClass($v_7, "ms-crm-FormBodyRIExpanded");
                    Sys.UI.DomElement.addCssClass($v_7, "ms-crm-FormBodyRICollapsed")
                }
        }
    },
    Collapse: function() {
        this.$u_3(false);
        this.$19_3()
    },
    $19_3: function() {
        var $v_0 = this.get_events().getHandler("OnCollapse");
        !IsNull($v_0) && $v_0(this, Sys.EventArgs.Empty)
    },
    $m_3: function($p0) {
        var $v_0 = new LookupControlItem;
        $v_0.id = $p0.Value;
        $v_0.data = $p0.Value;
        $v_0.type = String.format("{0}", $p0.ObjectType);
        $v_0.name = $p0.DisplayName;
        return $v_0
    },
    PopulateFormControl: function(eventObject) {
        var $v_0 = false,
            $v_1 = false,
            $v_2 = null,
            $v_3 = window.document.getElementById(eventObject.Context),
            $v_4 = $v_3.className.toLowerCase().replace("ms-crm-field-required", "").trim();
        if (Sys.UI.DomElement.containsCssClass($v_3, "ms-crm-Lookup")) $v_4 = "ms-crm-lookup";
        if (Sys.UI.DomElement.containsCssClass($v_3, "ms-crm-Lookup-Party")) $v_4 = "ms-crm-lookup-party";
        var $v_5 = Mscrm.FormControlInputBehavior.GetBehavior($v_3.id), $v_6 = null, $v_7 = eventObject.Value;
        switch ($v_4) {
        case "ms-crm-lookup":
        case "ms-crm-lookup-transactioncurrency":
        case "ms-crm-lookup-party":
            var $v_8;
            $v_6 = $v_5;
            switch ($v_6.get_lookupStyle().toLowerCase()) {
            case "subject":
            case "single":
                $v_8 = this.$m_3(eventObject);
                if (!this.$n_3($v_6, $v_8)) {
                    $v_8.keyValues = eventObject.keyValues;
                    $v_2 = new Mscrm.FormInputControl.ResultEventArgs;
                    $v_2.get_result().items = new Array(0);
                    Array.add($v_2.get_result().items, $v_8);
                    var $v_C = new Array(0);
                    $v_C = $v_C.concat($v_8);
                    $v_6.Clear(false);
                    $v_6.AddItems($v_C, false);
                    $v_1 = true
                }
                break;
            case "multi":
                $v_8 = this.$m_3(eventObject);
                var $v_9 = eventObject;
                $v_8.resourceSpecId = $v_9.ResourceSpecId;
                $v_8.effort = $v_9.Effort;
                var $v_A = this.$n_3($v_6, $v_8);
                if (!$v_A || $v_A === 2) {
                    var $v_D = new Array(0);
                    $v_D = $v_D.concat($v_8);
                    $v_A === 2 && $v_6.RemoveItem($v_8.id);
                    $v_6.AddItems($v_D, false);
                    $v_1 = true
                }
                break;
            default:
                break
            }
            break;
        case "ms-crm-selectbox":
        case "ms-crm-selectbox-relationshiprole":
        case "ms-crm-text":
            if ($v_5.get_dataValue() !== $v_7) {
                $v_5.set_dataValue($v_7);
                $v_0 = true
            }
            break;
        case "contexthelper":
            var $v_B = $find($v_3.id);
            $v_B.set_dataValue(eventObject.Value);
            break;
        default:
            if ($v_5.get_dataValue() !== $v_7) {
                $v_5.set_dataValue($v_7);
                $v_0 = true
            }
            break
        }
        $v_5 && this.$q_3($v_5);
        $v_1 && $v_6.RaiseOnChangeEvent($v_2);
        $v_0 && $v_5.fireOnChange()
    },
    ToggleInformationPane: function(eventObject) {
        if (this.$g_3()) {
            this.Expand();
            this.focus()
        } else this.Collapse()
    },
    focus: function() { !this.$g_3() && this.$0_3.setFocus() },
    $g_3: function() {
        return this.$7_3.src.indexOf("/_imgs/theme/" + window.CURRENT_THEME_TYPE + "/collapse_left.gif") >= 0
    },
    $11_3: function() {
        var $v_0 = this.get_element().parentNode;
        while (!IsNull($v_0) && $v_0.id !== "tdRelatedInformationPane") {
            if (IsNull($v_0.tagName)) return null;
            $v_0 = $v_0.parentNode
        }
        return $v_0
    },
    $12_3: function($p0) {
        var $v_0 = $p0.parentNode, $v_1 = null, $$t_4 = this;
        XUI.Html.DomUtils.ForEachChild($v_0,
            function($p1_0) {
                if ($p1_0.tagName.toUpperCase() === "DIV" && $p1_0.id === "formBodyContainer") {
                    $v_1 = $p1_0;
                    return true
                }
                return false
            });
        return $v_1
    },
    $w_3: function() {
        if (!IsNull(this.$K_3))
            if (!IsNull(this.$8_3)) {
                this.$8_3.Abort();
                this.$K_3 = null
            }
    },
    $1O_3: function($p0, $p1) {
        !IsNull(this.$G_3) && window.clearTimeout(this.$G_3);
        if (!IsNull(!!$p0)) this.$L_3 = $p0;
        var $$t_3 = this, $v_0 = function() { $$t_3.$1D_3($p1) };
        this.$G_3 = window.setTimeout($v_0, this.$i_3)
    },
    $q_3: function($p0) {
        if (!$p0.get_disabled()) {
            if (!IsNull(this.$2_3)) {
                this.$2_3.set_setInitialFocus(false);
                this.$2_3.GetTab($p0.get_element(), true)
            }
            $p0.setFocus()
        }
    },
    $1L_3: function($p0) {
        var $$t_2 = this;
        XUI.Html.DomUtils.ForEachChild($p0,
            function($p1_0) {
                Mscrm.Utilities.destroyElement($p1_0);
                return false
            });
        $p0.innerHTML = String.format('<DIV id="LoadingInfo" class="InformationLoading">{0}</DIV>',
            CrmEncodeDecode.CrmHtmlEncode(window.LOCID_RELATEDINFO_DATALOADING))
    },
    $1Q_3: function($p0, $p1, $p2, $p3, $p4) {
        for (var $v_0 = 0, $v_1 = $p0.length; $v_0 < $v_1; $v_0++) {
            var $v_2 = $p0[$v_0];
            try {
                eval($v_2.Key.toString())
            } catch ($$e_8) {
                this.$x_3($v_2.Key, $v_2.Value)
            }
        }
        for (var $v_3 = 0, $v_4 = $p1.length;
            $v_3 < $v_4;
            $v_3++
        ) Mscrm.CrmHeader.setScriptFile(Mscrm.CrmUri.create($p1[$v_3]), true);
        for (var $v_5 = 0, $v_6 = $p2.length;
            $v_5 < $v_6;
            $v_5++
        ) Mscrm.CrmHeader.setStyleSheet(Mscrm.CrmUri.create($p2[$v_5]));
        if ($p3.length > 0)
            for (var $v_7, $v_8 = 0, $v_9 = $p3.length; $v_8 < $v_9; $v_8++) {
                var $v_A = $p3[$v_8];
                $v_7 = Mscrm.CrmUri.create($v_A.Key);
                var $v_B = Mscrm.WrpcTokenFuncs.getCrmWrpcToken($v_7);
                IsNull($v_B) && Mscrm.WrpcTokenFuncs.setCrmWrpcToken($v_7, $v_A.Value, $p4)
            }
    },
    $x_3: function($p0, $p1) {
        var $v_0 = String.isInstanceOfType($p1) ? 'window.{0}="{1}"' : "window.{0}={1}";
        eval(String.format($v_0, $p0, $p1))
    },
    $13_3: function($p0, $p1) {
        this.$K_3 = null;
        if (!$p0.Success)
            if (this.$M_3) this.$M_3 = false;
            else this.$k_3(window.document.getElementById("CategoryList"), "");
        else {
            var $v_0 = this.$10_3($p0.ReturnValue.ClientVariables.NameValuePair),
                $v_1 = $p0.ReturnValue.ScriptIncludes.string,
                $v_2 = $p0.ReturnValue.StyleIncludes.string,
                $v_3 = $p0.ReturnValue.WrpcTokens.NameValuePair,
                $v_4 = $p0.ReturnValue.TokenTimestamp,
                $v_5 = $p0.ReturnValue.ContextHtml,
                $v_6 = $p0.ReturnValue.InitStatement;
            this.$1Q_3($v_0, $v_1, $v_2, $v_3, $v_4);
            this.$k_3(window.document.getElementById("CategoryList"), $v_5);
            eval($v_6)
        }
    },
    $10_3: function($p0) {
        for (var $v_0 = $p0.length, $v_1 = 0; $v_1 < $v_0; $v_1++) {
            var $v_2 = $p0[$v_1];
            if (this.$14_3($v_2.Value)) $v_2.Value = ""
        }
        return $p0
    },
    $14_3: function($p0) {
        if (!Object.isInstanceOfType($p0)) return false;
        if (typeof $p0 !== "object") return false;
        var $$dict_2 = $p0;
        for (var $$key_3 in $$dict_2) {
            var $v_0 = { key: $$key_3, value: $$dict_2[$$key_3] };
            return IsNull($v_0)
        }
        return true
    },
    $k_3: function($p0, $p1) {
        if (isNullOrEmptyString($p1))
            $p1 = String.format('<DIV id="NoInfoResults" class="InformationMessage">{0}</DIV>',
                CrmEncodeDecode.CrmHtmlEncode(window.LOCID_RELATEDINFO_NORESULTS));
        $p0.innerHTML = $p1;
        window.setTimeout(this.$$d_$16_3, 50)
    },
    $16_3: function() { var r = window.readyState },
    $n_3: function($p0, $p1) {
        for (var $v_0, $v_1 = $p0.get_lookupItems(), $v_2 = IsNull($v_1) ? 0 : $v_1.length, $v_3 = 0;
            $v_3 < $v_2;
            $v_3++) {
            $v_0 = $v_1[$v_3];
            if ($v_0.id === $p1.id && $v_0.type === $p1.type) {
                if ($v_0.resourceSpecId === $p1.resourceSpecId) return 1;
                return 2
            }
        }
        return 0
    },
    $z_3: function($p0, $p1) {
        if (!IsNull($p1)) {
            var $v_0 = XUI.Xml.SelectSingleNode($p1, "error/displaytext", null);
            !IsNull($v_0) && this.$1K_3(XUI.Xml.GetText($v_0))
        }
    },
    $1K_3: function($p0) {
        this.$M_3 = true;
        window.document.getElementById("CategoryList").innerHTML = String
            .format('<DIV class="InformationMessage">{0}</DIV>', CrmEncodeDecode.CrmHtmlEncode($p0))
    }
};
Mscrm.BaseCategory.registerClass("Mscrm.BaseCategory", Mscrm.CrmUIBehavior);
Mscrm.Category.registerClass("Mscrm.Category", Mscrm.BaseCategory);
Mscrm.CategoryFollowup.registerClass("Mscrm.CategoryFollowup", Mscrm.CrmUIBehavior);
Mscrm.CategoryHeading.registerClass("Mscrm.CategoryHeading", Mscrm.CrmUIBehavior);
Mscrm.ContextHelper.registerClass("Mscrm.ContextHelper", Mscrm.CrmUIControl);
Mscrm.CategoryResources.registerClass("Mscrm.CategoryResources", Mscrm.BaseCategory);
Mscrm.CategorySubject.registerClass("Mscrm.CategorySubject", Mscrm.BaseCategory);
Mscrm.CategoryLookup.registerClass("Mscrm.CategoryLookup", Mscrm.BaseCategory);
Mscrm.ContextChangedEventArgs.registerClass("Mscrm.ContextChangedEventArgs", Sys.EventArgs);
Mscrm.RelatedInformation.registerClass("Mscrm.RelatedInformation", Mscrm.CrmUIControl, Mscrm.IRelatedInformation);
Mscrm.BaseCategory.listItemClickedEventKey = "OnListItemClicked"