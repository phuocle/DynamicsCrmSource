Type.registerNamespace("Mscrm");
Mscrm.BreadCrumbControl = function(innerControl) { Mscrm.BreadCrumbControl.initializeBase(this, [innerControl]) };
Mscrm.BreadCrumbControl.prototype = {
    dispose: function() {
        var $v_0 = ".ms-crm-BreadCrumb-Lookup-Parent-Container";
        if (this.get_isDisposed()) return;
        var $v_1 = $P_CRM($v_0);
        if (!IsNull($v_1))
            !IsNull($v_1.get(0)) &&
                Mscrm.BreadCrumbUIRenderer.addRemoveEventHandlerToSpans($v_1.get(0).parentNode, false);
        Mscrm.UIControl.prototype.dispose.call(this)
    }
};
Mscrm.BreadCrumbData = function() {};
Mscrm.BreadCrumbData.prototype = {
    $2_0: null,
    $1_0: null,
    $3_0: null,
    $4_0: null,
    get_name: function() { return this.$2_0 },
    set_name: function(value) {
        this.$2_0 = value;
        return value
    },
    get_id: function() { return this.$1_0 },
    set_id: function(value) {
        this.$1_0 = value;
        return value
    },
    get_objectType: function() { return this.$3_0 },
    set_objectType: function(value) {
        this.$3_0 = value;
        return value
    },
    get_objectTypeName: function() { return this.$4_0 },
    set_objectTypeName: function(value) {
        this.$4_0 = value;
        return value
    }
};
Mscrm.BreadCrumbDataItem = function() {};
Mscrm.BreadCrumbDataItem.prototype = { Name: null, Id: null, ObjectTypeCode: null, EntityName: null };
Mscrm.BreadCrumbDataProvider = function() {};
Mscrm.BreadCrumbDataProvider
    .getAncestorsForEntity = function(targetEntityName,
        targetEntityId,
        primaryFieldIdName,
        primaryFieldName,
        succeedCallback) {
        var $v_0 = String
            .format("<fetch version='1.0' mapping='logical'><entity name='{0}'><attribute name='{1}' /><attribute name='{2}' /><filter type='and'><condition attribute='{1}' operator='above' value='{3}' /></filter></entity></fetch>", targetEntityName, primaryFieldIdName, primaryFieldName, targetEntityId);
        Xrm.Internal.messages.retrieveMultiple($v_0).then(function($p1_0) {
                var $v_1 = $p1_0;
                !IsNull($v_1) &&
                    !IsNull($v_1.entityCollection) &&
                    succeedCallback($v_1.entityCollection, [primaryFieldIdName, primaryFieldName])
            },
            null)
    };
Mscrm.BreadCrumbUIRenderer = function() { this.$$d_$M_0 = Function.createDelegate(this, this.$M_0) };
Mscrm.BreadCrumbUIRenderer.get_$I = function() {
    if (!isNullOrEmptyString(window.LOCID_UI_DIR) && window.LOCID_UI_DIR === "RTL") return true;
    else return false
};
Mscrm.BreadCrumbUIRenderer.$G = function($p0) {
    var $v_0 = "", $v_1 = Mscrm.BreadCrumbUIRenderer.get_$I() ? "\u200f" : "", $v_2 = ">";
    if (!IsNull($p0) && $p0.length > 0)
        for (var $v_3 = $p0.length - 1; $v_3 >= 0; $v_3--) {
            var $v_4 = CrmEncodeDecode.CrmHtmlDecode($p0[$v_3].Name);
            if ($v_3 > 0) $v_0 = $v_0 + $v_1 + $v_4 + $v_2;
            else $v_0 = $v_0 + $v_1 + $v_4
        }
    return $v_0
};
Mscrm.BreadCrumbUIRenderer.BuildBreadCrumbControl = function($p0, $p1) {
    Mscrm.BreadCrumbUIRenderer.$8($p1);
    if (!IsNull($p0) && $p0.length > 0) {
        var $v_0 = Mscrm.BreadCrumbUIRenderer.$A($p0), $v_1 = XUI.Html.DomUtils.GetFirstChild($v_0);
        if (!IsNull($v_1)) {
            var $v_2 = Mscrm.BreadCrumbUIRenderer.$B($p1.parentNode.tabIndex);
            $P_CRM.tmpl($v_2, $p0).appendTo($v_1);
            Mscrm.BreadCrumbUIRenderer.$L($v_1);
            $p1.innerHTML = "";
            $p1.appendChild($v_0);
            Mscrm.BreadCrumbUIRenderer.addRemoveEventHandlerToSpans($p1, true);
            Mscrm.BreadCrumbUIRenderer.$7($p1)
        }
    } else {
        var $v_3 = Mscrm.BreadCrumbUIRenderer.$9();
        $p1.innerHTML = "";
        $p1.appendChild($v_3)
    }
};
Mscrm.BreadCrumbUIRenderer.$8 = function($p0) {
    $P_CRM(window).resize(function($p1_0) { Mscrm.BreadCrumbUIRenderer.$H($p0) })
};
Mscrm.BreadCrumbUIRenderer.$7 = function($p0) {
    var $v_0 = 25;
    if (IsNull($p0)) return;
    var $v_1 = $P_CRM($p0),
        $v_2 = $p0.clientWidth,
        $v_3 = $v_1
            .find(".ms-crm-BreadCrumb-Lookup-Parent-Container-Child");
    if (IsNull($v_3)) return;
    var $v_4 = $v_3.children("span");
    if (IsNull($v_4) || !$v_4.length) return;
    for (var $v_5 = $v_4.length, $v_6 = 0, $v_7 = 0, $v_9 = 0; $v_9 < $v_5; $v_9++) {
        if ($v_4[$v_9].clientWidth + $v_6 > $v_2 - $v_0) {
            $v_7 = $v_9;
            break
        }
        $v_6 += $v_4[$v_9].clientWidth
    }
    if (!$v_7) return;
    else if ($P_CRM($v_4[$v_7]).hasClass("ms-crm-BreadCrumb-Lookup-Item-Seperator")) $v_7--;
    var $v_8 = $P_CRM($v_4[$v_7]).clone();
    $v_8.html("...");
    $v_8.addClass("ms-crm-breadcrumb-resize-ellipsis");
    for (var $v_A = $v_7; $v_A < $v_5; $v_A++)
        $P_CRM($v_4[$v_A]).removeClass().addClass("ms-crm-hide-breadcrumb-extra");
    if (!$v_8) return;
    $v_8.insertBefore($v_4[$v_7])
};
Mscrm.BreadCrumbUIRenderer.$H = function($p0) {
    var $v_0 = $P_CRM($p0), $v_1 = $v_0.parents("td").width();
    $v_0.width($v_1);
    var $v_2 = $v_0.find(".ms-crm-BreadCrumb-Lookup-Parent-Container-Child");
    if (IsNull($v_2)) return;
    var $v_3 = $v_2.children("span");
    if (IsNull($v_3) || !$v_3.length) return;
    for (var $v_4 = $v_3.length, $v_5 = 0; $v_5 < $v_4; $v_5++) {
        var $v_6 = $P_CRM($v_3[$v_5]);
        if ($v_6.hasClass("ms-crm-hide-breadcrumb-extra")) {
            $v_6.removeClass("ms-crm-hide-breadcrumb-extra");
            $v_6.addClass("ms-crm-Lookup-Item ms-crm-BreadCrumb-Lookup-Item")
        }
        $v_6.hasClass("ms-crm-breadcrumb-resize-ellipsis") && $v_6.remove()
    }
    Mscrm.BreadCrumbUIRenderer.$7($p0)
};
Mscrm.BreadCrumbUIRenderer.$L = function($p0) {
    if (!IsNull($p0) && $p0.hasChildNodes()) {
        var $v_0 = XUI.Html.DomUtils.GetLastChild($p0);
        !IsNull($v_0) && $p0.removeChild($v_0)
    }
};
Mscrm.BreadCrumbUIRenderer.$A = function($p0) {
    var $v_0 = document.createElement("span");
    Sys.UI.DomElement.addCssClass($v_0, "ms-crm-BreadCrumb-Lookup-Parent-Container");
    $v_0.setAttribute("title", Mscrm.BreadCrumbUIRenderer.$G($p0));
    var $v_1 = document.createElement("span");
    Sys.UI.DomElement.addCssClass($v_1, "ms-crm-BreadCrumb-Lookup-Parent-Container-Child");
    $v_0.appendChild($v_1);
    return $v_0
};
Mscrm.BreadCrumbUIRenderer.$9 = function() {
    var $v_0 = document.createElement("DIV");
    Sys.UI.DomElement.addCssClass($v_0, "ms-crm-Inline-EmptyValue");
    XUI.Html.SetText($v_0, "--");
    return $v_0
};
Mscrm.BreadCrumbUIRenderer.$B = function($p0) {
    var $v_0 = new Sys.StringBuilder;
    $v_0.append(String.format.apply(null,
        ['<span tabindex="{0}" id="span_{1}" role="link" class="ms-crm-Lookup-Item ms-crm-BreadCrumb-Lookup-Item"']
        .concat([$p0.toString(), "${Id}"])));
    $v_0.append('onkeydown="Mscrm.ReadFormUtilities.keyDownHandler(new Sys.UI.DomEvent(event));"');
    $v_0.append('onclick="Mscrm.ReadFormUtilities.openLookup(true, new Sys.UI.DomEvent(event));"');
    $v_0.append('otypename=${EntityName} otype=${ObjectTypeCode} oid=${Id} resolved="true"');
    $v_0.append('onctrlclick="openlui(new Sys.UI.DomEvent(event))"');
    $v_0.append('onfocus="Mscrm.BreadCrumbUIRenderer.focusIn(new Sys.UI.DomEvent(event))"');
    $v_0.append('onblur="Mscrm.BreadCrumbUIRenderer.focusOut(new Sys.UI.DomEvent(event))"');
    $v_0.append(">${Name}</span>");
    $v_0
        .append('<span id="span_seperator_${Id}" class="ms-crm-LookupItem-Seperator ms-crm-BreadCrumb-Lookup-Item-Seperator"> &gt </span>');
    return $v_0.toString()
};
Mscrm.BreadCrumbUIRenderer.focusIn = function($p0) {
    !IsNull($p0) && !IsNull($p0.target) && $P_CRM($p0.target).addClass("ms-crm-focus-breadcrumb-item")
};
Mscrm.BreadCrumbUIRenderer.focusOut = function($p0) {
    !IsNull($p0) && !IsNull($p0.target) && $P_CRM($p0.target).removeClass("ms-crm-focus-breadcrumb-item")
};
Mscrm.BreadCrumbUIRenderer.addRemoveEventHandlerToSpans = function(rootControlElement, addHandlers) {
    if (IsNull(rootControlElement)) return;
    var $v_0 = $P_CRM(rootControlElement), $v_1 = $v_0.find(".ms-crm-BreadCrumb-Lookup-Parent-Container-Child");
    if (IsNull($v_1)) return;
    var $v_2 = $v_1.children("span");
    if (IsNull($v_2) || !$v_2.length) return;
    for (var $v_3 = $v_2.length, $v_4 = 0; $v_4 < $v_3; $v_4++)
        if (addHandlers) {
            $addHandler($v_2[$v_4], "onfocus", Mscrm.BreadCrumbUIRenderer.focusIn);
            $addHandler($v_2[$v_4], "onblur", Mscrm.BreadCrumbUIRenderer.focusOut)
        } else {
            $removeHandler($v_2[$v_4], "onfocus", Mscrm.BreadCrumbUIRenderer.focusIn);
            $removeHandler($v_2[$v_4], "onblur", Mscrm.BreadCrumbUIRenderer.focusOut)
        }
};
Mscrm.BreadCrumbUIRenderer.prototype = {
    $0_0: null,
    $5_0: "",
    $6_0: "",
    get_$J_0: function() {
        if (!IsNull(this
                .$0_0) &&
            !IsNull(this.$0_0.parentNode))
            if (!IsNull(this.$0_0.parentNode
                .getAttribute("primaryfieldname")))
                this.$5_0 = this.$0_0.parentNode.getAttribute("primaryfieldname").toString();
        return this.$5_0
    },
    get_$K_0: function() {
        if (!IsNull(this
                .$0_0) &&
            !IsNull(this.$0_0.parentNode))
            if (!IsNull(this.$0_0.parentNode
                .getAttribute("primarykeyname")))
                this.$6_0 = this.$0_0.parentNode.getAttribute("primarykeyname").toString();
        return this.$6_0
    },
    $M_0: function($p0, $p1) {
        var $v_0 = this.$F_0($p0, $p1);
        Mscrm.BreadCrumbUIRenderer.BuildBreadCrumbControl($v_0, this.$0_0)
    },
    renderBreadCrumbControl: function(rootElement) {
        if (IsNull(rootElement)) {
            var $v_0 = $P_CRM(document).find("[showasbreadcrumbcontrol='1']");
            if (!IsNull($v_0) && !IsNull($v_0.children(".ms-crm-Inline-Value"))
            ) rootElement = $v_0.children(".ms-crm-Inline-Value").get(0)
        }
        this.$0_0 = rootElement;
        Mscrm.BreadCrumbDataProvider.getAncestorsForEntity(Xrm.Page.data.entity.getEntityName(),
            Xrm.Page.data.entity.getId(),
            this.get_$K_0(),
            this.get_$J_0(),
            this.$$d_$M_0)
    },
    $F_0: function($p0, $p1) {
        var $v_0 = null;
        if (!IsNull($p0) && $p0.get_count() > 0) {
            $v_0 = new Array($p0.get_count());
            for (var $v_1 = 0; $v_1 < $p0.get_count(); $v_1++) {
                var $v_2 = new Mscrm.BreadCrumbDataItem;
                $v_2.Id = CrmEncodeDecode.CrmHtmlAttributeEncode($p0.get_item($v_1).getValue($p1[0]).toString());
                $v_2.Name = CrmEncodeDecode.CrmHtmlEncode($p0.get_item($v_1).getValue($p1[1]).toString());
                $v_2.EntityName = CrmEncodeDecode
                    .CrmHtmlAttributeEncode($p0.get_item($v_1).get_identifier().LogicalName.toString());
                $v_2.ObjectTypeCode = CrmEncodeDecode
                    .CrmHtmlAttributeEncode(Xrm.Internal
                        .getEntityCode($p0.get_item($v_1).get_identifier().LogicalName.toString()).toString());
                $v_0[$v_1] = $v_2
            }
        }
        return $v_0
    }
};
Mscrm.BreadCrumbControl.registerClass("Mscrm.BreadCrumbControl", Mscrm.UIControl);
Mscrm.BreadCrumbData.registerClass("Mscrm.BreadCrumbData");
Mscrm.BreadCrumbDataItem.registerClass("Mscrm.BreadCrumbDataItem");
Mscrm.BreadCrumbDataProvider.registerClass("Mscrm.BreadCrumbDataProvider");
Mscrm.BreadCrumbUIRenderer.registerClass("Mscrm.BreadCrumbUIRenderer")