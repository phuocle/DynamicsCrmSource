Type.registerNamespace("Mscrm.FormInputControl");
Mscrm.FormInputControl.NotesControlBehavior = function(element) {
    this.$$d_$1S_4 = Function.createDelegate(this, this.$1S_4);
    this.$$d_$1H_4 = Function.createDelegate(this, this.$1H_4);
    this.$$d_$1U_4 = Function.createDelegate(this, this.$1U_4);
    this.$$d_$1X_4 = Function.createDelegate(this, this.$1X_4);
    Mscrm.FormInputControl.NotesControlBehavior.initializeBase(this, [element]);
    this.$B_4 = element
};
Mscrm.FormInputControl.NotesControlBehavior.attachNoteControlBehavior = function(element, count) {
    if (!IsNull(Mscrm
            .FormInputControl) &&
        !IsNull(Mscrm.FormInputControl.NotesControlBehavior))
        Mscrm.CrmUIComponent.crmCreate(Mscrm.FormInputControl.NotesControlBehavior, null, null, null, element);
    else
        count < 100 &&
            window.setTimeout(function() {
                    Mscrm.FormInputControl.NotesControlBehavior.attachNoteControlBehavior(element, count + 1)
                },
                50)
};
Mscrm.FormInputControl.NotesControlBehavior.prototype = {
    $B_4: null,
    $3_4: null,
    get_$E_4: function() { return this.$B_4.contentWindow },
    get_$13_4: function() { return this.$B_4.attributes.getNamedItem("url").value },
    get_$X_4: function() { return this.$B_4.src },
    set_$X_4: function($p0) {
        this.$B_4.src = $p0;
        return $p0
    },
    get_$c_4: function() { return this.$B_4.getAttribute("notesxml") },
    get_isDirty: function() {
        var $v_0 = this.$H_4();
        return IsNull($v_0) ? false : $v_0.get_isDirty()
    },
    get_dataXml: function() {
        var $v_0 = this.$H_4();
        return IsNull($v_0) ? "" : $v_0.get_dataXml()
    },
    get_dataValue: function() { return "true" },
    get_disabled: function() { return Mscrm.FormControlInputBehavior.prototype.get_disabled.call(this) },
    set_disabled: function(value) { return value },
    $H_4: function() {
        try {
            if (!IsNull(this.get_$E_4()) && !IsNull(this.get_$E_4().document.body) && !this.$U_4()) {
                var $v_0 = this.get_$E_4().document.getElementsByTagName("TABLE")[0].id;
                return this.get_$E_4().$find($v_0)
            }
            return null
        } catch ($$e_1) {
            return null
        }
    },
    $1T_4: function() {
        var $v_0 = $find("PrimaryEntity");
        !IsNull($v_0) && $v_0.registerOtherData(new Mscrm.HtcProxyFormData(this))
    },
    $1X_4: function($p0) {
        var $v_0 = this.$H_4();
        !IsNull($v_0) && $v_0.unselectControl()
    },
    $1U_4: function($p0) {
        if (!this.$U_4())
            if (!isNullOrEmptyString(this.get_$c_4())) {
                var $v_0 = this.$H_4();
                if (!IsNull($v_0)) {
                    $v_0.set_notesXml(this.get_$c_4());
                    $v_0.restoreNotes($p0)
                }
            }
    },
    $1E_4: function() {
        if (IsNull(this.$3_4)) {
            this.$3_4 = this.get_element().parentNode.parentNode;
            while (!IsNull(this.$3_4) &&
                !IsNull(this.$3_4.parentNode) &&
                !(this.$3_4.tagName.toUpperCase() === "DIV" &&
                (this.$3_4
                    .className ===
                    "ms-crm-InlineTab-Read" ||
                    this.$3_4.className === "ms-crm-InlineTab"))) this.$3_4 = this.$3_4.parentNode
        }
        if (IsNull(this
                .$3_4) ||
            IsNull(this.$3_4.parentNode))
            this.$3_4 = this.get_element().parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
                .parentNode.parentNode;
        return this.$3_4
    },
    $U_4: function() { return !this.get_$X_4().length || this.get_$X_4().indexOf("/_static/blank.htm") !== -1 },
    initialize: function() {
        Mscrm.FormControlInputBehavior.prototype.initialize.call(this);
        $addHandler(this.get_element(), "blur", this.$$d_$1X_4);
        $addHandler(this.get_element(), "load", this.$$d_$1U_4);
        var $v_0 = "";
        if (IsNull(GLOBAL_FONT_STYLE) || IsNull(GLOBAL_FONT_SIZE)
        )
            $v_0 += "<table style='width:100%;height:100%;text-align:center;'><tr><td><img id='imgLoading' src='" +
                window.CDNURL +
                "/_imgs/advfind/progress.gif' alt=\"";
        else
            $v_0 += "<table style='width:100%;height:100%;text-align:center;font-family: " +
                GLOBAL_FONT_STYLE +
                "; font-size: " +
                GLOBAL_FONT_SIZE +
                ";'><tr><td><img id='imgLoading' src='" +
                window.CDNURL +
                "/_imgs/advfind/progress.gif' alt=\"";
        $v_0 += CrmEncodeDecode.CrmHtmlAttributeEncode(window.LOCID_LOADING_NOTES_DATA);
        $v_0 += '" /><BR>' + CrmEncodeDecode.CrmHtmlEncode(window.LOCID_LOADING_NOTES_DATA) + "</td></tr></table>";
        if (!IsNull(this
                .get_$E_4()) &&
            !IsNull(this.get_$E_4().document.body)) this.get_$E_4().document.body.innerHTML = $v_0;
        var $v_1 = $find("crmForm");
        if (!IsNull($v_1)) {
            var $v_2 = $v_1.GetTab(this.get_element(), false), $v_3 = $v_2.className;
            if ($v_3 === "ms-crm-InlineTab") {
                var $v_4 = $find($v_2.id);
                if ($v_4.get_displayState() === "expanded") this.$12_4();
                else $v_4.add_tabStateChange(this.$$d_$1H_4)
            } else if ($v_3 === "ms-crm-Tab") {
                window.setTimeout(this.$$d_$1S_4, 10);
                XUI.Html.DomUtils.GetFirstChild($v_2).style.display = "inline"
            }
            $v_1.get_isNew() && this.$1T_4()
        } else window.setTimeout(this.$$d_$1S_4, 10);
        !isNullOrEmptyString(this.get_$c_4()) && this.refresh();
        this.$t_4(0)
    },
    $t_4: function($p0) {
        var $v_0 = $find("PrimaryEntity");
        if (!IsNull($v_0) && $v_0.get_isNew()) $v_0.registerOtherData(new Mscrm.HtcProxyFormData(this));
        else if ($p0 < 100) {
            var $$t_2 = this;
            window.setTimeout(function() { $$t_2.$t_4($p0 + 1) }, 50)
        }
    },
    $1H_4: function($p0, $p1) {
        if ($p1.get_displayState() === "expanded") {
            $p0.remove_tabStateChange(this.$$d_$1H_4);
            this.$12_4()
        }
    },
    $12_4: function() { this.$U_4() && this.set_$X_4(this.get_$13_4()) },
    dispose: function() {
        if (this.get_isDisposed()) return;
        if (!IsNull(this.get_element())) {
            $removeHandler(this.get_element(), "blur", this.$$d_$1X_4);
            $removeHandler(this.get_element(), "load", this.$$d_$1U_4)
        }
        Mscrm.CrmUIBehavior.prototype.dispose.call(this)
    },
    setFocus: function() {
        var $v_0 = this.$H_4();
        !IsNull($v_0) && $v_0.selectNewButton(true)
    },
    refresh: function() {
        if (this.$U_4()) this.set_$X_4(this.get_$13_4());
        else {
            var $v_0 = this.$H_4();
            !IsNull($v_0) && $v_0.refresh(false)
        }
    },
    $1S_4: function() { this.refresh() },
    isParentTabVisible: function() {
        var $v_0 = this.$1E_4();
        if (!IsNull($v_0) && !($v_0.className === "ms-crm-InlineTab" || $v_0.className === "ms-crm-InlineTab-Read")
        ) return $v_0.style.display !== "none" && !isNullOrEmptyString($v_0.style.display);
        else return true
    }
};
Mscrm.FormInputControl.HashtableNode = function() {};
Mscrm.FormInputControl.HashtableNode.prototype = {
    $I_0: null,
    $K_0: null,
    get_key: function() { return this.$I_0 },
    set_key: function(value) {
        this.$I_0 = value;
        return value
    },
    get_value: function() { return this.$K_0 },
    set_value: function(value) {
        this.$K_0 = value;
        return value
    }
};
Mscrm.FormInputControl.Hashtable = function() { this.$2_0 = [] };
Mscrm.FormInputControl.Hashtable.prototype = {
    $2_0: null,
    get_item: function(index) {
        if (index >= 0 || index < this.$2_0.length) return this.$2_0[index].$K_0;
        else return null
    },
    key: function(item) {
        for (var $v_0 = 0; $v_0 < this.$2_0.length; $v_0++) if (this.$2_0[$v_0].$I_0 === item) return this.$2_0[$v_0];
        return null
    },
    add: function(key, value) {
        if (IsNull(this.key(key))) {
            var $v_0 = new Mscrm.FormInputControl.HashtableNode;
            $v_0.$I_0 = key;
            if (!IsNull(value)) $v_0.$K_0 = value;
            var $v_1 = this.$2_0.length;
            this.$2_0[$v_1] = $v_0;
            return this.$2_0[$v_1]
        } else return null
    },
    remove: function(key) {
        for (var $v_0 = null, $v_1 = 0; $v_1 < this.$2_0.length; $v_1++) if (this.$2_0[$v_1].$I_0 === key) break;
        if ($v_1 >= this.$2_0.length) return null;
        $v_0 = this.$2_0[$v_1];
        Array.removeAt(this.$2_0, $v_1);
        return $v_0
    },
    length: function() { return this.$2_0.length }
};
Mscrm.FormInputControl.Notes = function(element) {
    this.$$d_$1N_3 = Function.createDelegate(this, this.$1N_3);
    this.$$d_$1O_3 = Function.createDelegate(this, this.$1O_3);
    this.$$d_$1P_3 = Function.createDelegate(this, this.$1P_3);
    this.$$d_$1R_3 = Function.createDelegate(this, this.$1R_3);
    this.$$d_$15_3 = Function.createDelegate(this, this.$15_3);
    this.$$d_$1G_3 = Function.createDelegate(this, this.$1G_3);
    this.$$d_openContextMenu = Function.createDelegate(this, this.openContextMenu);
    this.$$d_$1W_3 = Function.createDelegate(this, this.$1W_3);
    this.$9_3 = new Mscrm.FormInputControl.Hashtable;
    this.$M_3 = window.parent.document.getElementById("crmFormSubmit");
    Mscrm.FormInputControl.Notes.initializeBase(this, [element]);
    this.$4_3 = !isNullOrEmptyString(this.get_$Q_3());
    if (this.$4_3) $get("noteAttachButton").setAttribute("style", "display:block");
    else $get("noteAttachButton").setAttribute("style", "display:none");
    this.$8_3 = $get("moreNotesButton");
    this.$5_3 = $get("newNoteButton")
};
Mscrm.FormInputControl.Notes.$j = function($p0, $p1) {
    var $v_0 = $p0.getAttribute("labelTitleandText"),
        $v_1 = $p0.getAttribute("labelTitle"),
        $v_2 = String.format(!$v_0 ? "" : $v_0.toString(), !$v_1 ? "" : $v_1.toString(), $p1);
    return $v_2
};
Mscrm.FormInputControl.Notes.$r = function() {
    var $v_0 = window.parent._IsRefreshForm;
    return !isNullOrEmptyString($v_0) && "1" === $v_0
};
Mscrm.FormInputControl.Notes.refreshGridCallback = function(returnValue, notesObject, editNote) {
    returnValue && notesObject.refresh(editNote)
};
Mscrm.FormInputControl.Notes.prototype = {
    $8_3: null,
    $5_3: null,
    $g_3: 1,
    $0_3: null,
    $A_3: false,
    $S_3: null,
    $C_3: null,
    $4_3: false,
    $7_3: false,
    $L_3: 1,
    $1_3: null,
    $e_3: 0,
    get_$Q_3: function() { return this.get_element().getAttribute("oId") },
    get_$i_3: function() { return this.get_element().getAttribute("ascending") === "true" },
    get_$1M_3: function() { return this.get_element().getAttribute("newNoteTitle") },
    get_$d_3: function() { return this.get_element().getAttribute("NoteWritePermission") },
    get_$V_3: function() { return this.get_element().getAttribute("parentEntityType") },
    get_$1Z_3: function() { return this.get_element().getAttribute("userId") },
    get_$1K_3: function() { return this.get_element().getAttribute("labelTitleandText") },
    get_$1J_3: function() { return this.get_element().getAttribute("labelTitle") },
    get_$1a_3: function() { return this.get_element().getAttribute("wrpcTokenAsQueryString") },
    get_$w_3: function() {
        var $v_0 = this.get_element().parentNode;
        while (!IsNull($v_0) && !Sys.UI.DomElement.containsCssClass($v_0, "notesContainerScrollDiv")
        ) $v_0 = $v_0.parentNode;
        return $v_0
    },
    get_currentNote: function() { return this.$1B_3() },
    get_notesXml: function() { return this.get_element().getAttribute("notesxml") },
    set_notesXml: function(value) {
        this.get_element().setAttribute("notesxml", value);
        return value
    },
    get_isDirty: function() { return this.$1I_3() },
    get_dataXml: function() { return this.$1C_3() },
    get_pageNumber: function() { return this.$1D_3() },
    set_pageNumber: function(value) {
        this.$11_3(value);
        return value
    },
    $1L_3: function() { return "annotation:" + this.$g_3++ },
    $G_3: function() { return !IsNull(this.$5_3) && this.$5_3.className === "newNoteButtonSelected" },
    $q_3: function() { return !IsNull(this.$8_3) && this.$8_3.className === "moreNotesButtonSelected" },
    $s_3: function($p0) {
        while (!IsNull($p0) && $p0.tagName !== "TR") $p0 = $p0.parentNode;
        return $p0
    },
    $6_3: function($p0) {
        var $v_0 = this.$s_3($p0);
        if (!IsNull($v_0)) {
            var $v_1 = $v_0.parentNode;
            if (IsNull($v_1)) return null;
            var $v_2 = $v_0.rowIndex;
            while ($v_2 >= 0) {
                if (!IsNull($v_1.rows[$v_2].getAttribute("oId"))) return $v_1.rows[$v_2];
                $v_2--
            }
        }
        return null
    },
    $1F_3: function($p0) {
        if (!IsNull($p0)) {
            var $v_0 = $p0.parentNode, $v_1;
            if ($p0.getAttribute("isDocument")) $v_1 = $v_0.rows[$p0.rowIndex + 2];
            else $v_1 = $v_0.rows[$p0.rowIndex + 1];
            return XUI.Html.DomUtils.GetFirstChild($v_1.cells[0])
        }
        return null
    },
    $J_3: function($p0, $p1, $p2) {
        if (!IsNull($p0)) {
            var $v_0 = !!$p0.getAttribute("isDocument"), $v_1 = $p0.parentNode, $v_2 = "noteHeader";
            if ($p1) $v_2 = "noteHeaderSelected";
            if ($p2) $v_2 = "noteHeaderEditing";
            $p0.className = $v_2;
            var $v_3 = $v_1.rows[$p0.rowIndex + ($v_0 ? 3 : 2)];
            $v_3.className = $v_2;
            var $v_4 = XUI.Html.DomUtils.GetLastChild(XUI.Html.DomUtils.GetLastChild($v_3));
            $v_4.style.visibility = $p1 ? "visible" : "hidden";
            var $v_5 = null, $v_6 = null;
            $v_6 = $v_1.rows[$p0.rowIndex + 1];
            if ($v_0) {
                $v_5 = $v_1.rows[$v_6.rowIndex + 1];
                $v_5.className = $v_2
            }
            var $v_7 = XUI.Html.DomUtils.GetFirstChild($v_6.cells[0]);
            $v_6.className = $v_7.className = "ms-crm-Note-Text";
            if ($p1) {
                $v_6.className += " " + $v_2;
                $v_7.className += $p2 ? " ms-crm-Note-Text" : " noteTextAreaSelected"
            }
        }
    },
    $1I_3: function() { return this.$9_3.length() > 0 },
    $o_3: function($p0) {
        return "<annotation><notetext>" +
            CrmEncodeDecode.CrmXmlEncode(this.$9_3.get_item($p0)) +
            "</notetext></annotation>"
    },
    $1C_3: function() {
        !IsNull(this.$0_3) && this.endEditNote(null, this.$1F_3(this.$0_3));
        var $v_0 = this.$9_3.length();
        if (!$v_0) return null;
        var $v_1 = new Sys.StringBuilder("<annotations>");
        if (this.get_$i_3()) for (var $v_2 = 0; $v_2 < $v_0; $v_2++) $v_1.append(this.$o_3($v_2));
        else for (var $v_3 = $v_0 - 1; $v_3 >= 0; $v_3--) $v_1.append(this.$o_3($v_3));
        $v_1.append("</annotations>");
        return $v_1.toString()
    },
    $1Y_3: function($p0, $p1) {
        var $v_0 = "", $v_1 = null;
        if (IsNull($p0)) return null;
        else if (this.$b_3($p0)) {
            var $v_2 = Mscrm.DateTimeUtility.localDateTimeNow(),
                $v_3 = String.format(this.get_$1M_3(), Mscrm.DateTimeUtility.formatDate($v_2), timeToString($v_2, 0)),
                $v_4;
            if (!IsNull(this.$M_3) &&
                !IsNull(this.$M_3.crmFormSubmitId) &&
                !isNullOrEmptyString(this.$M_3.crmFormSubmitId.value)) $v_4 = this.$M_3.crmFormSubmitId.value;
            else $v_4 = this.get_$Q_3();
            $v_0 = "<annotation><isdocument>0</isdocument><notetext>" +
                CrmEncodeDecode.CrmXmlEncode($p1) +
                "</notetext><objectid>" +
                $v_4 +
                "</objectid><objecttypecode>" +
                this.get_$V_3() +
                "</objecttypecode><subject>" +
                CrmEncodeDecode.CrmXmlEncode($v_3) +
                "</subject><ownerid type='8'>" +
                this.get_$1Z_3() +
                "</ownerid></annotation>";
            var $v_5 = new RemoteCommand("Annotation", "SaveWithAttachment");
            $v_5.SetParameter("id", "");
            $v_5.SetParameter("update", false);
            $v_5.SetParameter("type", 5);
            $v_5.SetParameter("dataXml", $v_0);
            $v_1 = $v_5.Execute();
            if (!$v_1.Success) return 2;
            var $v_6 = XUI.Xml.LoadXml($v_1.ReturnValue);
            Mscrm.XmlUtil.handleXMLErr($v_6, true);
            $v_1.id = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_6, "/annotation/annotationid", null));
            $v_1.modifiedon = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_6, "/annotation/modifiedonheader", null));
            $v_1.createdon = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_6, "/annotation/createdonheader", null));
            $v_1.subject = String.format(this.get_$1K_3(),
                this.get_$1J_3(),
                XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_6, "/annotation/subject", null)))
        } else {
            $v_0 = "<annotation><notetext>" + CrmEncodeDecode.CrmXmlEncode($p1) + "</notetext></annotation>";
            var $v_7 = new RemoteCommand("Annotation", "UpdateAndRetrieveTimeStamp");
            $v_7.SetParameter("annotationId", $p0);
            $v_7.SetXmlParameter("annotationXml", $v_0);
            $v_1 = $v_7.Execute()
        }
        isOutlookHostedWindow() && getOutlookHostedWindow().refreshGrid();
        return !$v_1.Success ? 2 : $v_1
    },
    $1B_3: function() { return this.$0_3 },
    $f_3: function($p0) {
        if (!IsNull(this.$8_3))
            if ($p0) {
                if (!IsNull(this.$0_3)) {
                    this.$J_3(this.$0_3, false, false);
                    this.$0_3 = null
                } else this.$G_3() && this.selectNewButton(false);
                this.$8_3.className = "moreNotesButtonSelected"
            } else this.$8_3.className = "moreNotesButton"
    },
    $x_3: function($p0, $p1) {
        var $v_0, $v_1, $v_2 = 2;
        if (IsNull(this.$0_3)) {
            $v_0 = this.$5_3.parentNode.parentNode.parentNode;
            $v_1 = 0
        } else {
            $v_0 = this.$0_3.parentNode;
            $v_1 = this.$0_3.rowIndex;
            if (!IsNull(this.$0_3.getAttribute("isDocument"))) $v_2 = 4
        }
        if ($p1) $v_2 = $v_2 + 1;
        if (this.$G_3()) {
            this.selectNewButton(false);
            if (this.$8_3.style.display !== "none") {
                this.$f_3(true);
                return
            }
        }
        this.$q_3() && this.$f_3(false);
        $v_1 + $v_2 < $v_0.rows.length && this.selectNote($p0, $v_0.rows[$v_1 + $v_2]);
        IsNull(this.$0_3) && this.selectNote($p0, $v_0.rows[$v_1])
    },
    $y_3: function($p0) {
        var $v_0, $v_1, $v_2 = 2;
        if (IsNull(this.$0_3)) {
            $v_0 = this.$5_3.parentNode;
            $v_1 = 0
        } else {
            $v_0 = this.$0_3.parentNode;
            $v_1 = this.$0_3.rowIndex
        }
        var $v_3 = this.$s_3($p0.target);
        if ($v_3.className === "noteHeaderSelected") return;
        $v_1 > $v_2 && this.selectNote($p0, $v_0.rows[$v_1 - $v_2])
    },
    $15_3: function($p0) {
        this.$7_3 = false;
        this.selectNote($p0, null)
    },
    $1R_3: function($p0) { this.openNote($p0, null) },
    $1W_3: function($p0) {
        var $v_0 = $find(this.get_element().id);
        $v_0.selectNote($p0, null)
    },
    $a_3: function($p0) {
        this.$A_3 = true;
        this.$7_3 = false;
        var $v_0 = this.$1L_3(),
            $v_1 = this.get_$i_3() ? this.get_element().rows.length : 0,
            $v_2 = this.get_element().insertRow($v_1++);
        $v_2.setAttribute("oId", $v_0);
        $v_2.className = "noteHeader";
        $addHandler($v_2, "focus", this.$$d_$1W_3);
        $v_2.tabIndex = 0;
        var $v_3 = $v_2.insertCell(-1);
        $v_3.colSpan = 3;
        $v_3.className = "noteSubjectField";
        var $v_4 = this.get_element().getAttribute("newNoteTitle"),
            $v_5 = !$v_4 ? "" : $v_4.toString(),
            $v_6 = Mscrm.DateTimeUtility.localDateTimeNow(),
            $v_7 = String.format($v_5,
                CrmEncodeDecode.CrmHtmlEncode(Mscrm.DateTimeUtility.formatDate($v_6)),
                CrmEncodeDecode.CrmHtmlEncode(timeToString($v_6, 0)));
        $v_3.innerHTML = Mscrm.FormInputControl.Notes.$j(this.get_element(), $v_7);
        $v_2 = this.get_element().insertRow($v_1++);
        $v_3 = $v_2.insertCell(-1);
        $v_3.className = "textAreaCell";
        $v_3.colSpan = 3;
        $v_3.style.height = "100%";
        $v_3.style.width = "100%";
        var $v_8 = new Sys
            .StringBuilder('<textarea class="ms-crm-Note-Text" tabIndex="0" unselectable="true" contenteditable="true" maxlength="');
        $v_8.append(CrmEncodeDecode.CrmHtmlAttributeEncode(window.MAX_NOTE_LENGTH));
        $v_8.append('" title="');
        $v_8.append(CrmEncodeDecode.CrmHtmlAttributeEncode(window.LOCID_NOTEAREA_TITLE));
        $v_8.append('" onfocus="');
        $v_8.append(CrmEncodeDecode.CrmHtmlAttributeEncode(this.$D_3("selectNote(new Sys.UI.DomEvent(event), this)")));
        $v_8.append('" oncontextmenu="');
        $v_8.append(CrmEncodeDecode.CrmHtmlAttributeEncode(this
            .$D_3("cancelTextAreaBubble(new Sys.UI.DomEvent(event), this)")));
        $v_8.append('" onkeyup="');
        $v_8.append(CrmEncodeDecode.CrmHtmlAttributeEncode(this
            .$D_3("cancelTextAreaBubble(new Sys.UI.DomEvent(event), this,true)")));
        $v_8.append('" onkeydown="');
        $v_8.append(CrmEncodeDecode.CrmHtmlAttributeEncode(this
            .$D_3("escapeTextAreaBubble(new Sys.UI.DomEvent(event), this)")));
        $v_8.append('" onblur="');
        $v_8.append(CrmEncodeDecode.CrmHtmlAttributeEncode(this.$D_3("endEditNote(new Sys.UI.DomEvent(event), this)")));
        if (this.get_$d_3() === "true") {
            $v_8.append('" onclick="');
            $v_8.append(CrmEncodeDecode.CrmHtmlAttributeEncode(this.$D_3("startEditNote(this)")))
        }
        $v_8.append('">');
        $v_8.append(CrmEncodeDecode.CrmHtmlAttributeEncode($p0));
        $v_8.append("</textarea>");
        $v_3.innerHTML = $v_8.toString();
        var $v_9 = XUI.Html.DomUtils.GetFirstChild($v_3);
        $v_2 = this.get_element().insertRow($v_1++);
        $v_2.className = "noteHeader";
        $v_2.setAttribute("onfocus", this.$D_3("selectNote(new Sys.UI.DomEvent(event), this)"));
        $v_3 = $v_2.insertCell(-1);
        $v_3.className = "noteEditedField NotesDataControl_Render_td modifiedByOnCell";
        $v_3.setAttribute("colSpan", "2");
        var $v_A = Mscrm.DateTimeUtility.localDateTimeNow();
        $v_3.innerHTML = CrmEncodeDecode.CrmHtmlDecode(String
            .format(this.get_element().getAttribute("currentUserLink"),
                CrmEncodeDecode.CrmHtmlEncode(Mscrm.DateTimeUtility.formatDate($v_A)),
                CrmEncodeDecode.CrmHtmlEncode(timeToString($v_A, 0))));
        $v_3 = $v_2.insertCell(-1);
        $v_3.className = "NotesDataControl_Render_td3 modifyLinkCell";
        var $v_B = document.createElement("span");
        $v_B.style.visibility = "hidden";
        var $v_C = document.createElement("a");
        $v_C.setAttribute("onclick", "$find('NotesTable').deleteCurrentNote(new Sys.UI.DomEvent(event));");
        $v_C.className = "NoteActionLink";
        $v_C.tabIndex = 0;
        $v_C.href = "#";
        var $v_D = document.createElement("img");
        $v_D.alt = $v_D.title = this.get_element().getAttribute("DeleteText");
        $v_D.src = Mscrm.CrmUri.create("/_imgs/grid/actions_delete_16.png").toString();
        $v_C.appendChild($v_D);
        $v_B.appendChild($v_C);
        if (!window.UseTabletExperience) {
            var $v_E = document.createElement("a");
            $v_E.setAttribute("onclick", "$find('NotesTable').openNote(new Sys.UI.DomEvent(event), this);");
            $v_C.className = "NoteActionLink";
            $v_E.tabIndex = 0;
            $v_E.href = "#";
            var $v_F = document.createElement("img");
            $v_F.alt = $v_F.title = this.get_element().getAttribute("ModifyText");
            $v_F.src = Mscrm.CrmUri.create("/_imgs/ribbon/attachment_16.png").toString();
            $v_E.appendChild($v_F);
            $v_B.appendChild($v_E)
        }
        $v_3.appendChild($v_B);
        this.$9_3.add($v_0, "");
        this.$N_3($v_9);
        return $v_9
    },
    $D_3: function($p0) {
        return String.format("var c=$find({0});if (!IsNull(c)) c.{1};",
            CrmEncodeDecode.CrmJavaScriptEncode(this.get_element().id),
            $p0)
    },
    $1D_3: function() { return this.$L_3 },
    $11_3: function($p0) { this.$L_3 = $p0 },
    $1O_3: function($p0, $p1) {
        if (!$p0.Success) return;
        var $v_0 = this.get_element().childNodes[1], $v_1 = window.document.createElement("div");
        $v_1.innerHTML = $p0.ReturnValue;
        var $v_2 = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild($v_1)).childNodes[1],
            $v_3 = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild($v_1)).getAttribute("moreRecords");
        $v_3 !== "1" && this.$1V_3(false);
        var $v_4 = $v_2.rows.length;
        if ($v_4 > 0) {
            $v_0.deleteRow();
            var $v_5;
            $v_5 = $v_2.rows[0].cloneNode(true);
            $v_0.appendChild($v_5);
            this.$11_3(this.$L_3 + 1);
            for (var $v_6 = 1; $v_6 < $v_4; $v_6++) $v_0.appendChild($v_2.rows[$v_6].cloneNode(true));
            $v_5.scrollIntoView()
        }
    },
    $1V_3: function($p0) {
        var $v_0 = this.$8_3;
        if (!IsNull($v_0)) $v_0.style.display = $p0 ? "inline" : "none"
    },
    $b_3: function($p0) { return $p0.indexOf("annotation:") !== -1 },
    $1G_3: function($p0) {
        if (!IsNull(this.$1_3))
            if (this.$1_3.get_isVisible()) return;
            else this.closeContextMenu();
        if ($p0.keyCode === 9 && $p0.shiftKey) {
            !this.$7_3 && this.$y_3($p0);
            this.cancelEventBubble($p0);
            return
        } else if ($p0.altKey || $p0.keyCode !== 121 && $p0.shiftKey) {
            this.cancelEventBubble($p0);
            return
        }
        switch (Mscrm.Utilities.getDomEventKeyCode($p0)) {
        case 113:
        case 32:
            this.$7_3 = false;
            this.selectNote($p0, this.$6_3($p0.target));
            break;
        case 13:
            if (this.$G_3()) Mscrm.Utilities.click(this.$5_3);
            else {
                this.$7_3 = false;
                this.selectNote($p0, this.$6_3($p0.target))
            }
            break;
        case 46:
        case 127:
            !this.$G_3() && this.deleteNote($p0, this.$0_3);
            break;
        case 121:
            !this.$G_3() && $p0.shiftKey && this.openKeyContextMenu($p0);
            break;
        case 38:
            this.$y_3($p0);
            break;
        case 40:
            this.$x_3($p0, true);
            break;
        case 9:
            this.$7_3 && this.$x_3($p0, false);
            break
        }
        this.cancelEventBubble($p0)
    },
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        !Mscrm.FormInputControl.Notes.$r() && $addHandler(this.get_element(), "contextmenu", this.$$d_openContextMenu);
        $addHandler(this.get_element(), "keyup", this.$$d_$1G_3);
        $addHandler(this.get_element(), "click", this.$$d_$15_3);
        if (Mscrm.Utilities.isIosDevice()) $addHandler(this.get_element(), "click", this.$$d_$1R_3);
        else $addHandler(this.get_element(), "dblclick", this.$$d_$1R_3);
        this.$h_3();
        this.$S_3 = this.$$d_$1P_3;
        $addHandler(window, "resize", this.$S_3)
    },
    $1P_3: function($p0) {
        if (this.$e_3 === this.get_element().offsetWidth) return;
        this.$e_3 = this.get_element().offsetWidth;
        this.$h_3()
    },
    $h_3: function() {
        for (var $v_0 = this.get_element()
                     .getElementsByTagName("TEXTAREA"),
            $v_1 = 0;
            $v_1 < $v_0.length;
            $v_1++) this.$N_3($v_0[$v_1])
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        !Mscrm.FormInputControl.Notes.$r() &&
            $removeHandler(this.get_element(), "contextmenu", this.$$d_openContextMenu);
        $removeHandler(window, "resize", this.$S_3);
        $removeHandler(this.get_element(), "keyup", this.$$d_$1G_3);
        $removeHandler(this.get_element(), "click", this.$$d_$15_3);
        if (Mscrm.Utilities.isIosDevice()) $removeHandler(this.get_element(), "click", this.$$d_$1R_3);
        else $removeHandler(this.get_element(), "dblclick", this.$$d_$1R_3);
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    restoreNotes: function(eventData) {
        if (this.get_notesXml().length > 0)
            for (var $v_0 = XUI.Xml.LoadXml(this.get_notesXml()),
                $v_1 = XUI.Xml.SelectNodes($v_0, "/annotations/annotation/notetext", null),
                $v_2 = 0;
                $v_2 < $v_1.length;
                $v_2++) {
                var $v_3 = this.$a_3($v_1[$v_2].text);
                this.endEditNote(eventData, $v_3)
            }
    },
    closeContextMenu: function() {
        if (!IsNull(this.$1_3)) {
            this.$1_3.hide();
            this.$1_3.dispose();
            this.$1_3 = null
        }
    },
    openContextMenu: function(eventData) {
        this.$6_3(eventData.target) !== this.$0_3 && this.selectNote(eventData, this.$6_3(eventData.target));
        if (eventData.shiftKey) {
            eventData.preventDefault();
            return
        } else {
            this.$0_3 && this.openKeyContextMenu(eventData);
            return
        }
    },
    openKeyContextMenu: function(eventData) {
        eventData.preventDefault();
        if (IsNull(this.$1_3)) {
            this.$1_3 = Mscrm.Menu.createMenu();
            this.$1_3.set_stylePrefix("POPUP");
            this.$1_3.set_width(170);
            var $v_2 = $get("divMenu");
            if (IsNull($v_2)) return;
            for (var $v_3 = $v_2
                         .getElementsByTagName("div"),
                $v_4 = !!this.$0_3,
                $v_5 = 0;
                $v_5 < $v_3.length;
                $v_5++) {
                var $v_6 = $v_3[$v_5],
                    $v_7 = !($v_4 && this.$4_3),
                    $v_8 = null,
                    $v_9 = Mscrm.MenuItem.createMenuItem($v_6.innerHTML);
                $v_9.set_reference($v_5);
                switch ($v_6.id) {
                case "divMenu_Open":
                    $v_8 = window.CDNURL + "/_imgs/ico_16_5.png";
                    break;
                case "divMenu_Delete":
                    $v_8 = window.CDNURL + "/_imgs/ico/16_l_remove.gif";
                    $v_7 = !($v_4 && IsNull(this.$0_3.getAttribute("noDelete")));
                    break;
                case "divMenu_Print":
                    $v_8 = window.CDNURL + "/_imgs/ico/16_print.gif";
                    break;
                case "divMenu_Refresh":
                    $v_8 = window.CDNURL + "/_imgs/ico/16_l_refresh.gif";
                    $v_7 = !this.$4_3;
                    break;
                case "divMenu_Debug":
                    $v_8 = window.CDNURL + "/_imgs/ico_16_form.gif";
                    var $v_A = Mscrm.MenuItemSeparator.createSeparator(false);
                    this.$1_3.addItem($v_A);
                    break
                }
                var $$t_G = this,
                    $$t_H = this,
                    $v_B = $v_7
                        ? function($p1_0) {}
                        : function($p1_0) {
                            var $v_C = $v_3[$p1_0.get_reference()].getAttribute("action").toString();
                            eval($v_C)
                        };
                $v_9.set_disabled($v_7);
                $v_9.set_actionCallback($v_B);
                $v_9.set_iconPath($v_8);
                this.$1_3.addItem($v_9)
            }
        }
        var $v_0 = eventData.clientX + 10, $v_1 = eventData.clientY;
        if (window.LOCID_UI_DIR === "RTL") $v_0 = eventData.clientX - 10;
        if (!eventData.rawEvent.shiftKey) {
            this.$1_3.set_left($v_0);
            this.$1_3.set_top($v_1)
        } else {
            this.$1_3.set_left(0);
            this.$1_3.set_top(0)
        }
        this.$1_3.show()
    },
    selectNewButton: function(on) {
        if (!IsNull(this.$5_3))
            if (on) {
                if (!IsNull(this.$0_3)) {
                    this.$J_3(this.$0_3, false, false);
                    this.$0_3 = null
                } else this.$q_3() && this.$f_3(false);
                this.$5_3.className = "newNoteButtonSelected"
            } else this.$5_3.className = "newNoteButton"
    },
    unselectControl: function() {
        if (this.$G_3()) this.selectNewButton(false);
        else !IsNull(this.$0_3) && this.$J_3(this.$0_3, false, false)
    },
    selectNote: function(eventData, element) {
        if (IsNull(element)) element = eventData.target;
        var $v_0 = this.$6_3(element);
        if (!IsNull($v_0)) {
            if (this.$G_3()) this.selectNewButton(false);
            else !IsNull(this.$0_3) && this.$J_3(this.$0_3, false, false);
            var $v_1 = element.nodeName.toUpperCase() === "TEXTAREA";
            this.$J_3($v_0, true, $v_1)
        }
        this.$0_3 = $v_0;
        window.UseTabletExperience && this.$p_3()
    },
    openNote: function(eventData, element) {
        if (!window.UseTabletExperience) {
            if (IsNull(element)) element = eventData.target;
            if (this.$4_3) {
                if (element.tagName !== "TEXTAREA") {
                    var $v_0 = this.$6_3(element);
                    if (!(IsNull($v_0) || IsNull($v_0.getAttribute("oId")))) {
                        var $v_1 = $v_0.getAttribute("canEdit");
                        if (!IsNull($v_1) && Boolean.parse($v_1)) {
                            var $v_2 = "pId=" + CrmEncodeDecode.CrmUrlEncode(this.get_$Q_3());
                            $v_2 = $v_2 + "&pType=" + CrmEncodeDecode.CrmUrlEncode(this.get_$V_3());
                            window.parent.openObj(5, $v_0.getAttribute("oId"), $v_2)
                        }
                    }
                }
            } else alert(window.LOCID_CANNOT_OPEN_ITEM)
        }
    },
    $1Q_3: function($p0) {
        if (this.$4_3) {
            var $v_0 = null;
            if (!IsNull($p0) && $p0.tagName !== "TEXTAREA") {
                var $v_3 = this.$6_3($p0);
                if (!(IsNull($v_3) || IsNull($v_3.getAttribute("oId")))) {
                    var $v_4 = $v_3.getAttribute("canEdit");
                    if (!IsNull($v_4) && Boolean.parse($v_4)) $v_0 = $v_3.getAttribute("oId");
                    else return
                }
            }
            var $v_1 = Mscrm.WindowInformation.getWindowInformation(5), $v_2 = $v_1.Url;
            $v_2.setQueryParameter("hideDesc", "1");
            $v_2.setQueryParameter("id", $v_0);
            $v_2.setQueryParameter("pId", this.get_$Q_3());
            $v_2.setQueryParameter("pType", this.get_$V_3());
            window.parent.openStdWin($v_2, buildWinName($v_0), 500, 175, null)
        } else if (!IsNull(window.parent)) {
            var $v_5 = window.parent._sAction;
            !isNullOrEmptyString($v_5) && $v_5 === "addnotes" && alert(window.LOCID_CANNOT_ATTACH_ITEM)
        } else alert(window.LOCID_CANNOT_OPEN_ITEM)
    },
    deleteCurrentNote: function(eventData) { this.deleteNote(eventData, this.$0_3) },
    deleteNote: function(eventData, element) {
        if (!IsNull(element.getAttribute("noDelete"))) return;
        if (this.$4_3 && !this.$b_3(element.getAttribute("oId"))) {
            var $v_0 = Mscrm.CrmUri.create("/_grid/cmds/dlg_delete.aspx");
            $v_0.get_query()["iObjType"] = 5;
            $v_0.get_query()["iTotal"] = "1";
            $v_0.get_query()["sIds"] = element.getAttribute("oId");
            var $v_1 = window.UseTabletExperience ? 590 : 450, $v_2 = 205;
            if (window.UseTabletExperience) {
                var $v_3 = [this, false],
                    $v_4 = Mscrm.Utilities
                        .createCallbackFunctionObject("refreshGridCallback", Mscrm.FormInputControl.Notes, $v_3, false);
                openStdDlgWithCallback($v_0, [].concat(element.getAttribute("oId")), $v_1, $v_2, $v_4)
            } else {
                var $v_5 = new Mscrm.CrmDialog($v_0, [].concat(element.getAttribute("oId")), 450, 205, null);
                $v_5.setCallbackInfo("deleteNoteCallback", this, null);
                $v_5.show()
            }
        } else if (this.$9_3.remove(element.getAttribute("oId"))) {
            var $v_6 = element.parentNode, $v_7 = element.rowIndex;
            $v_6.deleteRow($v_7);
            $v_6.deleteRow($v_7);
            $v_6.deleteRow($v_7);
            this.$0_3 = null;
            this.selectNote(eventData, $v_6.rows[$v_7]);
            IsNull(this.$0_3) && this.selectNewButton(true)
        }
    },
    deleteNoteCallback: function(returnInfo) { !IsNull(returnInfo) && this.refresh(false) },
    insertNote: function() {
        var $v_0 = this.$a_3(null);
        $v_0.focus();
        if (Mscrm.Utilities.isIosDevice()) this.selectNote(new Sys.UI.DomEvent(XUI.Html.CreateDomEvent("click")), $v_0);
        else XUI.Html.DispatchDomEvent($v_0, XUI.Html.CreateDomEvent("click"))
    },
    createNote: function(eventData) {
        if (!this.$P_3) return;
        var $v_0 = $get("noteTextInput-create"), $v_1 = $v_0.value, $v_2 = null;
        if (!isNullOrEmptyString($v_1)) {
            if ($v_1 === this.get_element().getAttribute("NewNoteHintText")) return;
            var $v_3 = this.$a_3($v_1);
            this.endEditNote(eventData, $v_3);
            $v_2 = $v_3.parentNode
        }
        this.$v_3();
        eventData.rawEvent.type === "click" && eventData.target.id === "noteAttachButton" && this.$1Q_3($v_2);
        if (window.UseTabletExperience) {
            $v_0.blur();
            this.$u_3()
        }
    },
    showMoreNotes: function() {
        var $v_0 = this.get_element().childNodes[1],
            $v_1 = $v_0.insertRow(-1),
            $v_2 = $v_1.insertCell(-1),
            $v_3 = "<img id='imgLoadingMoreNotes' src='" + window.CDNURL + "/_imgs/advfind/progress.gif' alt='";
        $v_3 += CrmEncodeDecode.CrmHtmlAttributeEncode(window.LOCID_LOADING_MORE_NOTES);
        $v_3 += "' />";
        $v_2.innerHTML = $v_3;
        $v_2.colSpan = 3;
        $v_2.style.textAlign = "center";
        $v_1.scrollIntoView();
        var $v_4 = new RemoteCommand("Annotation", "RetrieveNotes"), $v_5 = this.$L_3 + 1;
        $v_4.SetParameter("noteDataControlId", this.get_element().id);
        $v_4.SetParameter("parentEntity", this.get_$V_3());
        $v_4.SetParameter("parentEntityId", this.get_$Q_3());
        $v_4.SetParameter("pageNumber", $v_5);
        $v_4.SetParameter("wrpcTokenAsQueryString", this.get_$1a_3());
        $v_4.Execute(this.$$d_$1O_3)
    },
    enterNoteCreator: function() { !this.$P_3 && this.$14_3() },
    leaveNoteCreator: function(eventData) {
        if (this.$W_3) this.$W_3 = false;
        else if (!this.$R_3) this.createNote(eventData);
        else this.$R_3 = false
    },
    $10_3: function($p0) {
        var $v_0 = $get("notesTextBoxActionsDiv");
        $v_0.style.display = $p0 ? "block" : "none"
    },
    $R_3: false,
    setPreventCreateButtonHide: function(state) { this.$R_3 = state },
    $W_3: false,
    $14_3: function() {
        if (!IsNull(this.$0_3)) {
            this.$J_3(this.$0_3, false, false);
            this.$0_3 = null
        }
        var $v_0 = $get("noteTextInput-create");
        $v_0.value = "";
        $v_0.className = "ms-crm-Note-Text-create-active";
        this.$10_3(true);
        this.$P_3 = true;
        var $v_1 = $get("notesTextBoxDiv");
        $v_1.className = "notesTextBoxDiv notesTextBoxDivActive";
        this.$N_3($v_0);
        window.UseTabletExperience && this.$p_3()
    },
    $P_3: false,
    $v_3: function() {
        var $v_0 = this.get_element().getAttribute("NewNoteHintText"), $v_1 = $get("noteTextInput-create");
        $v_1.value = $v_0;
        $v_1.className = "ms-crm-Note-Text-create";
        var $v_2 = $get("notesTextBoxDiv");
        $v_2.className = "notesTextBoxDiv";
        this.$10_3(false);
        this.$P_3 = false;
        $v_1.style.height = "18px"
    },
    refresh: function(editNode) {
        var $v_0 = "";
        if (IsNull(GLOBAL_FONT_STYLE) || IsNull(GLOBAL_FONT_SIZE)
        )
            $v_0 += "<table style='width:100%;height:100%;text-align:center;'><tr><td><img id='imgLoading' src='" +
                window.CDNURL +
                "/_imgs/advfind/progress.gif' alt=\"";
        else
            $v_0 += "<table style='width:100%;height:100%;text-align:center;font-family: " +
                GLOBAL_FONT_STYLE +
                "; font-size: " +
                GLOBAL_FONT_SIZE +
                ";'><tr><td><img id='imgLoading' src='" +
                window.CDNURL +
                "/_imgs/advfind/progress.gif' alt=\"";
        $v_0 += CrmEncodeDecode.CrmHtmlAttributeEncode(window.LOCID_LOADING_NOTES_DATA);
        $v_0 += '" /><BR>' + CrmEncodeDecode.CrmHtmlEncode(window.LOCID_LOADING_NOTES_DATA) + "</td></tr></table>";
        this.closeContextMenu();
        window.document.body.innerHTML = $v_0;
        var $v_1 = Mscrm.CrmUri.create(window.location.href);
        $v_1.get_query()["EditNode"] = editNode ? "true" : "";
        window.location.replace($v_1.toString())
    },
    startEditNote: function(textArea) {
        textArea.className = "";
        textArea.contentEditable = true
    },
    endEditNote: function(eventData, textArea) { this.endEditNoteForce(eventData, textArea, false) },
    endEditNoteForce: function(eventData, textArea, forceFocus) {
        var $v_0 = this.$6_3(textArea);
        if (IsNull($v_0)) return;
        var $v_1 = $v_0.parentNode;
        if (IsNull($v_1)) return;
        var $v_2 = $v_1.rows[$v_0.rowIndex + 2];
        if (XUI.Html.DomUtils.GetFirstChild($v_2.cells[0]).nodeName
            .toUpperCase() ===
            "NOBR") $v_2 = $v_1.rows[$v_0.rowIndex + 3];
        window.UseTabletExperience && this.$u_3();
        if (this.$A_3) {
            if (!IsNull(textArea.getAttribute("maxLength"))) {
                var $v_3 = textArea.getAttribute("maxLength");
                if (textArea.value.length > $v_3)
                    if (confirm(String.format(window
                        .LOCID_MAXLENGTH_EXCEEDED,
                        $v_3))) textArea.value = textArea.value.substring(0, $v_3);
                    else {
                        textArea.select();
                        return
                    }
            }
            if (this.$4_3) {
                var $v_4 = this.$1Y_3($v_0.getAttribute("oId"), textArea.value);
                if ($v_4 === 2) {
                    eventData.target.focus();
                    this.cancelEventBubble(eventData);
                    return
                } else if (this.$b_3($v_0.getAttribute("oId"))) {
                    this.$9_3.remove($v_0.getAttribute("oId"));
                    this.$N_3(textArea);
                    $v_0.setAttribute("oId", $v_4.id);
                    $v_0.setAttribute("canEdit", this.get_$d_3())
                } else {
                    if (Mscrm.Utilities.isChrome() && forceFocus) this.$A_3 = false;
                    var $v_5 = $v_4.ReturnValue.split("|", 2);
                    if ($v_5.length === 2) {
                        var $v_7 = $v_5[1];
                        $v_7 = CrmEncodeDecode.CrmHtmlEncode($v_7);
                        $v_0.cells[0].innerHTML = Mscrm.FormInputControl.Notes.$j(this.get_element(), $v_7)
                    }
                    var $v_6 = $v_5[0];
                    $v_2.cells[0].innerHTML = $v_6;
                    forceFocus && XUI.Html.DomUtils.GetFirstChild($v_2.cells[0]).focus()
                }
            } else this.$9_3.key($v_0.getAttribute("oId")).$K_0 = textArea.value;
            this.$A_3 = false
        }
        if (this.get_$d_3() === "false") {
            textArea.setAttribute("tabIndex", -1);
            textArea.contentEditable = false
        }
    },
    printNote: function(eventData, element) {
        if (IsNull(element)) element = eventData.target;
        if (this.$4_3) {
            if (element.tagName !== "TEXTAREA") {
                var $v_0 = this.$6_3(element);
                if (!(IsNull($v_0) || IsNull($v_0.getAttribute("oId")))) {
                    var $v_1 = Mscrm.CrmUri.create("/_forms/print/print.aspx");
                    $v_1.get_query()["objectType"] = 5;
                    $v_1.get_query()["id"] = $v_0.getAttribute("oId");
                    openStdWin($v_1, "print" + buildWinName($v_0.getAttribute("oId")), 0, 0, null)
                }
            }
        } else alert(window.LOCID_NOTES_CANNOT_PRINT_ITEM)
    },
    cancelTextAreaBubble: function(eventData, textArea, forceCancel) {
        if (XUI.Html.IsContentEditable(textArea) || forceCancel) {
            if (textArea.getAttribute("defaultValue") !== textArea.value) {
                if (eventData.keyCode !== 9) this.$A_3 = true;
                this.$N_3(textArea)
            }
            this.cancelEventBubble(eventData)
        }
    },
    $N_3: function($p0) {
        var $v_0 = this.get_$w_3().scrollTop;
        $p0.style.height = "auto";
        var $v_1 = false;
        if ($p0.scrollHeight > $p0.clientHeight) {
            $p0.style.height = $p0.scrollHeight + "px";
            $v_1 = true
        }
        if ($v_1) this.get_$w_3().scrollTop = $v_0
    },
    escapeTextAreaBubble: function(eventData, textArea) {
        if (Mscrm.Utilities.getDomEventKeyCode(eventData) === 27 && XUI.Html.IsContentEditable(textArea)) {
            this.$7_3 = true;
            this.selectNote(eventData, this.$0_3);
            this.cancelEventBubble(eventData)
        }
        if (eventData.keyCode === 9 && !eventData.shiftKey) {
            var $v_0 = this.$6_3(textArea);
            if ($v_0) {
                var $v_1 = !!$v_0.getAttribute("isDocument");
                if (this.$A_3 && !$v_1) {
                    this.cancelEventBubble(eventData);
                    this.endEditNoteForce(eventData, textArea, true)
                }
            }
        }
    },
    divEventBubble: function(eventData) {
        if (Mscrm.Utilities.getDomEventKeyCode(eventData) === 38 && !eventData.shiftKey ||
            Mscrm.Utilities
            .getDomEventKeyCode(eventData) ===
            40 &&
            !eventData.shiftKey) this.$7_3 && this.cancelEventBubble(eventData)
    },
    noteCreatorKeyHandler: function(eventData, element) {
        if (eventData.keyCode === 9)
            this.$R_3 = element.id === "noteTextInput-create" && !eventData.shiftKey ||
                element.id === "noteDoneButton" && eventData.shiftKey ||
                element.id === "noteAttachButton";
        if (Mscrm.Utilities.getDomEventKeyCode(eventData) === 27) {
            this.$W_3 = true;
            this.$v_3();
            element.blur()
        }
    },
    cancelEventBubble: function(eventData) {
        eventData.stopPropagation();
        eventData.preventDefault()
    },
    $p_3: function() {
        if (IsNull(this.$C_3)) {
            this.$C_3 = this.$$d_$1N_3;
            $addHandler(window.top, "focus", this.$C_3)
        }
    },
    $u_3: function() {
        if (!IsNull(this.$C_3)) {
            $removeHandler(window.top, "focus", this.$C_3);
            this.$C_3 = null
        }
    },
    $1N_3: function($p0) {
        var $v_0 = window.frameElement;
        if (!IsNull($v_0) && !IsNull($v_0.contentWindow.focus)) {
            var $$t_2 = this;
            window.setTimeout(function() { $v_0.contentWindow.focus() }, 0)
        }
    }
};
Mscrm.FormInputControl.NotesControlBehavior.registerClass("Mscrm.FormInputControl.NotesControlBehavior",
    Mscrm.FormControlInputBehavior);
Mscrm.FormInputControl.HashtableNode.registerClass("Mscrm.FormInputControl.HashtableNode");
Mscrm.FormInputControl.Hashtable.registerClass("Mscrm.FormInputControl.Hashtable");
Mscrm.FormInputControl.Notes.registerClass("Mscrm.FormInputControl.Notes", Mscrm.CrmUIControl)