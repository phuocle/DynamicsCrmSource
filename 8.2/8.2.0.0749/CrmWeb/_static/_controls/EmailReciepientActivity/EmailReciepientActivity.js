Type.registerNamespace("Mscrm");
Mscrm.EmailRecipientActivity = function(element) {
    this.$$d_$L_3 = Function.createDelegate(this, this.$L_3);
    this.$$d_$G_3 = Function.createDelegate(this, this.$G_3);
    this.$$d_$6_3 = Function.createDelegate(this, this.$6_3);
    Mscrm.EmailRecipientActivity.initializeBase(this, [element])
};
Mscrm.EmailRecipientActivity.errorHandling = function(response) {
    var $v_0 = $get("InteractionViewMainContainerControl"), $v_1 = document.createElement("div");
    $v_1.className = "interactionViewContainer";
    var $v_2 = document.createElement("span");
    $v_2.innerText = Mscrm.EmailRecipientActivity.localizedStrings.EMAILENGAGEMENT_RECIPIENTACTIVITY_INTERACTIONERROR;
    $v_2.style.paddingTop = "10px";
    $v_1.style.height = "50px";
    $v_1.appendChild($v_2);
    $v_0.appendChild($v_1)
};
Mscrm.EmailRecipientActivity.initializeLocalizedStrings = function() {
    if (!Mscrm.EmailRecipientActivity.localizedStrings)
        Mscrm.EmailRecipientActivity.localizedStrings = window.self.EmailReciepientStrings
};
Mscrm.EmailRecipientActivity.$M = function($p0) {
    if (IsNull($p0) || !Mscrm.InternalUtilities.Utilities.isRefreshForm()) return;
    !Mscrm.InternalUtilities.Utilities.isTurboForm() &&
        Xrm.Page.ui.getTabs().getByName("Email").getSections().getByName("Emailrecipient_section_6") &&
        Xrm.Page.ui.getTabs().getByName("Email").getSections().getByName("Emailrecipient_section_6").setVisible(false);
    var $v_0 = $find($p0.id), $v_1 = new Mscrm.InlineEmailRecipientActivityControlView($v_0), $v_2 = Xrm.Page.ui;
    if (IsNull($v_2.controls)) $v_2.controls = new Xrm.XrmControls;
    if (Mscrm.InternalUtilities.Utilities.isTurboForm()) {
        $v_2.controls.add($v_1);
        Mscrm.EmailRecipientActivity.$A($p0, $v_1)
    }
};
Mscrm.EmailRecipientActivity.$A = function($p0, $p1) {
    if (!IsNull($p0)) {
        var $v_0 = Xrm.Page.ui,
            $v_1 = $P_CRM($p0).parents("table.ms-crm-FormSection:first"),
            $v_2 = IsNull($v_1) ? "" : $v_1.attr("name");
        if (isNullOrEmptyString($v_2)) return;
        var $v_3 = $P_CRM($p0).parents("div.ms-crm-InlineTab-Read:first"), $v_4 = IsNull($v_3) ? "" : $v_3.attr("name");
        if (!isNullOrEmptyString($v_2) && !isNullOrEmptyString($v_4)) {
            var $v_5 = $v_0.tabs.get($v_4);
            if (!IsNull($v_5)) {
                var $v_6 = $v_5.sections.get($v_2);
                !IsNull($v_6) && $v_6.controls.add($p1.getWrapper())
            }
        }
    }
};
Mscrm.EmailRecipientActivity.prototype = {
    $8_3: "EmailRecipientActivityHeader",
    $9_3: "{4d54dc00-92bc-adb5-9407-8d35dee34b85}",
    $3_3: "statuscode",
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        var $v_0 = Xrm.Page.ui.controls.get("emailrecipientactivitycontrol");
        if (Mscrm.InternalUtilities.Utilities.isTurboForm()) {
            if (!IsNull($v_0) && !window.IS_EMAILENGAGEMENT_FEATURE_AVAILABLE) {
                this.$5_3($v_0, false);
                return
            } else if (Xrm.Page.context.client.getClient() === "Outlook" &&
                Xrm.Page.context.client.getClientState() === "Offline") {
                this.$5_3($v_0, false);
                return
            }
            Mscrm.EmailRecipientActivity.initializeLocalizedStrings();
            this.$H_3();
            this.$I_3();
            this.intializeInteractionViewData();
            this.$J_3();
            this.$K_3()
        } else Mscrm.OnLoadDeferredExecutor.queueCallback(this.$$d_$6_3, 2)
    },
    $K_3: function() {
        var $v_0 = $get(this.$9_3);
        if (!(Sys.Browser
            .agent ===
            Sys.Browser.InternetExplorer &&
            Sys.Browser.version === 10)) $v_0.style.tableLayout = "auto"
    },
    intializeInteractionViewData: function() {
        var $v_0,
            $v_1 = Xrm.Page.ui.controls.get("emailrecipientactivitycontrol"),
            $v_2 = Xrm.Page.data.entity.attributes.get("directioncode");
        if ($v_1.getVisible() && Xrm.Page.ui.getFormType() !== 1) {
            var $v_3 = Xrm.Internal.startMetricsStopwatch("EmailRecipientMetrics");
            $v_3.start();
            var $v_4;
            if (!IsNull($v_2) && !$v_2.getValue()) {
                var $v_6 = Xrm.Page.data.entity.attributes.get("parentactivityid");
                $v_0 = $v_6.getValue();
                var $v_7 = IsNull($v_0) ? "" : $v_0[0].id;
                if (isNullOrEmptyString($v_7)) return;
                $v_4 =
                    "<fetch version='1.0' mapping='logical'><entity name = 'interactionforemail'><all-attributes/><filter><condition attribute = 'interactionforemailid' operator= 'eq' value ='" + $v_7 + "'></condition></filter></entity></fetch>"
            } else
                $v_4 =
                    "<fetch version='1.0' mapping='logical'><entity name = 'interactionforemail'><all-attributes/><filter><condition attribute = 'interactionforemailid' operator= 'eq' value ='" + CrmEncodeDecode.CrmXmlAttributeEncode(Xrm.Page.data.entity.getId()) + "'></condition></filter></entity></fetch>";
            var $v_5 = null, $$t_E = this;
            Xrm.Internal.messages.retrieveMultiple($v_4).then(function($p1_0) {
                    if ($p1_0) {
                        $v_5 = $p1_0.entityCollection;
                        if ($v_5.get_count())
                            for (var $v_8 = $get("InteractionViewMainContainerControl"),
                                $$arr_A = $v_5.get_entities(),
                                $$len_B = $$arr_A.length,
                                $$idx_C = 0;
                                $$idx_C < $$len_B;
                                ++$$idx_C) {
                                var $v_9 = $$arr_A[$$idx_C];
                                $v_8.appendChild($$t_E.$N_3($v_9.getValue("emailinteractiontime"),
                                    $v_9.getValue("interactiontype").getValue("value"),
                                    $v_9))
                            }
                    }
                    $v_3.stop()
                },
                Mscrm.EmailRecipientActivity.errorHandling)
        }
    },
    $J_3: function() {
        var $v_0 = $get("EmailRecipentActivityViewContainer");
        if (Mscrm.InternalUtilities.Utilities
            .isHighContrastEnabled())
            !Sys.UI.DomElement.containsCssClass($v_0, "EmailRecipientActivity-HighContrast") &&
                Sys.UI.DomElement.addCssClass($v_0, "EmailRecipientActivity-HighContrast");
        else
            Sys.UI.DomElement.containsCssClass($v_0, "EmailRecipientActivity-HighContrast") &&
                Sys.UI.DomElement.removeCssClass($v_0, "EmailRecipientActivity-HighContrast")
    },
    $N_3: function($p0, $p1, $p2) {
        var $v_0 = document.createElement("div");
        $v_0.className = "interactionViewChildContainer";
        var $v_1 = document.createElement("div"),
            $v_2 = document.createElement("div"),
            $v_3 = document.createElement("div"),
            $v_4 = document.createElement("span");
        $v_4.className = "top";
        $v_1.appendChild($v_4);
        var $v_5 = document.createElement("span");
        Mscrm.EmailRecipientActivity.$0 = Mscrm.EmailRecipientActivity.$0 + 3;
        $v_5.tabIndex = Mscrm.EmailRecipientActivity.$0;
        var $v_6 = Mscrm.DateTimeUtility
            .formatActivitiesSentOrOpenedAsReadableString($p2.getFormattedValue("emailinteractiontime").toString(),
                Mscrm.EmailRecipientActivity.localizedStrings.CustomControl_Justnow_Text,
                Mscrm.EmailRecipientActivity.localizedStrings.CustomControl_Hour_Text,
                Mscrm.EmailRecipientActivity.localizedStrings.CustomControl_Hours_Text,
                Mscrm.EmailRecipientActivity.localizedStrings.CustomControl_Today_Text,
                Mscrm.EmailRecipientActivity.localizedStrings.CustomControl_Yesterday_Text);
        $v_5.title = $v_6;
        $v_5.setAttribute("aria-label", $v_6);
        var $v_7 = document.createTextNode($v_6);
        $v_5.appendChild($v_7);
        $v_1.appendChild($v_5);
        $v_1.className = "cell left";
        $v_0.appendChild($v_1);
        var $v_8 = document.createElement("div"), $v_9 = document.createElement("div");
        $v_9.className = "halfContainer";
        $v_8.className = "top";
        $v_8.appendChild($v_9);
        var $v_A = document.createElement("div"), $v_B = document.createElement("img");
        $v_B.src = this.$F_3($p1);
        $v_A.appendChild($v_B);
        var $v_C = document.createElement("div"), $v_D = document.createElement("div");
        $v_D.className = "halfContainer";
        $v_C.className = "bottom";
        $v_C.appendChild($v_D);
        $v_2.appendChild($v_8);
        $v_2.appendChild($v_A);
        $v_2.appendChild($v_C);
        $v_2.className = "cell middle";
        $v_0.appendChild($v_2);
        var $v_E = document.createElement("span"), $v_F = document.createElement("span");
        $v_F.className = "top";
        $v_3.appendChild($v_F);
        var $v_G = this.$C_3($p1, $p2);
        $v_E.appendChild($v_G);
        var $v_H;
        if (!IsNull($p2.getValue("interactionlocation"))) $v_H = $p2.getValue("interactionlocation").toString();
        else $v_H = "Unknown Location";
        if ($p1 !== 3 && this.$B_3() && $v_H !== "Unknown Location") {
            var $v_I = document.createElement("span"), $v_J = document.createElement("span");
            $v_J.innerText = " | ";
            var $v_K = document.createElement("img");
            $v_K.src = "/_imgs/inlineedit/Map_Blue_16.png";
            var $v_L = document.createElement("a");
            $v_L.id = "mapIconImage";
            $v_L.setAttribute("href", "#");
            $v_L.tabIndex = Mscrm.EmailRecipientActivity.$0++;
            $v_L.title = Mscrm.EmailRecipientActivity.localizedStrings.EmailEngagment_Map_Preview;
            $v_L.setAttribute("aria-label", Mscrm.EmailRecipientActivity.localizedStrings.EmailEngagment_Map_Preview);
            $v_L.className = "anchorForMapControl";
            var $$t_V = this;
            $addHandler($v_L, "click", function($p1_0) { $$t_V.$O_3($p1_0, $v_H, $v_L) });
            $v_L.appendChild($v_K);
            $v_I.appendChild($v_L);
            $v_E.appendChild($v_J);
            $v_E.appendChild($v_I)
        }
        $p1 !== 3 && $v_3.appendChild($v_E);
        if ($p1 === 3) {
            var $v_M = document.createElement("div"), $v_N = document.createElement("span");
            $v_N.innerText = " | ";
            var $v_O = document.createElement("span");
            $v_O.innerText = String.format(Mscrm.EmailRecipientActivity.localizedStrings
                .CustomControl_EmailEngagment_ViewReply);
            $v_O.title = String.format(Mscrm.EmailRecipientActivity.localizedStrings
                .CustomControl_EmailEngagment_ViewReply);
            $v_O.setAttribute("aria-label",
                Mscrm.EmailRecipientActivity.localizedStrings.CustomControl_EmailEngagment_ViewReply);
            Sys.UI.DomElement.addCssClass($v_O, "InteractionViewLink");
            var $v_P = document.createElement("a");
            $v_P.setAttribute("href", "#");
            $v_P.tabIndex = Mscrm.EmailRecipientActivity.$0++;
            var $$t_W = this;
            $addHandler($v_P,
                "click",
                function($p1_0) { Xrm.Utility.openEntityForm("email", $p2.getValue("interactionreplyid").toString()) });
            $v_P.appendChild($v_O);
            $v_M.className = "LeftTextAlign";
            $v_M.appendChild($v_E);
            $v_M.appendChild($v_N);
            $v_M.appendChild($v_P);
            $v_3.appendChild($v_M)
        }
        $v_3.className = "cell right";
        $v_0.appendChild($v_3);
        return $v_0
    },
    $B_3: function() {
        var $v_0 = $get("InteractionViewMainContainerControl"),
            $v_1 = false,
            $v_2 = $v_0.getAttribute("data-bingmapAttr"),
            $v_3 = $v_0.getAttribute("data-bingmapEnabledAttr");
        if ($v_3.toString().toLowerCase() === "true") $v_1 = true;
        var $v_4 = IsNull($v_2) ? "" : $v_2.toString();
        return (IsNull($v_4) ? false : true) && $v_1
    },
    $I_3: function() {
        var $v_0 = $get("emailrecipientactivitycontrol"), $v_1 = document.createElement("div");
        $v_1.setAttribute("class", "interactionViewContainerOpenMap");
        $v_1.setAttribute("id", "parentOpenLocationMap");
        var $v_2 = document.createElement("span");
        $v_2.innerText = String.format(Mscrm.EmailRecipientActivity.localizedStrings.EmailEngagement_Location);
        $v_2.setAttribute("class", "mapSpanTitle");
        $v_1.appendChild($v_2);
        var $v_3 = document.createElement("a");
        $v_3.setAttribute("href", "#");
        $v_3.className = "ee_anchorMapButton";
        $addHandler($v_3, "click", this.$$d_$G_3);
        var $v_4 = document.createElement("img");
        $v_4.src = "/_imgs/Cancel_16.png";
        $v_4.alt = String.format(Mscrm.EmailRecipientActivity.localizedStrings.EmailEngagement_Close_Map);
        $v_4.title = String.format(Mscrm.EmailRecipientActivity.localizedStrings.EmailEngagement_Close_Map);
        $v_4.className = "closeButton mapCloseButton";
        $v_3.appendChild($v_4);
        $v_1.appendChild($v_3);
        var $v_5 = document.createElement("a");
        $v_5.setAttribute("href", "#");
        $v_5.className = "ee_anchorMapButton";
        $addHandler($v_5, "click", this.$$d_$L_3);
        var $v_6 = document.createElement("img");
        $v_6.src = "/_imgs/popout.png";
        $v_6.alt = String.format(Mscrm.EmailRecipientActivity.localizedStrings.EmailEngagement_Popout_Map);
        $v_6.title = String.format(Mscrm.EmailRecipientActivity.localizedStrings.EmailEngagement_Popout_Map);
        $v_6.className = "ms-crm-ImageStrip-popout mapPopoutButton";
        $v_5.appendChild($v_6);
        $v_1.appendChild($v_5);
        var $v_7 = document.createElement("div");
        $v_7.setAttribute("id", "openLocationMap");
        $v_7.setAttribute("class", "mapDiv");
        $v_1.appendChild($v_7);
        var $v_8 = document.createElement("div");
        $v_8.setAttribute("class", "triangle");
        $v_8.setAttribute("id", "arrowMarkDiv");
        $v_8.style.top = $v_0.style.height;
        $v_7.appendChild($v_8);
        $v_0.appendChild($v_1)
    },
    $O_3: function($p0, $p1, $p2) {
        var $v_0 = $get("parentOpenLocationMap"), $v_1 = $P_CRM($v_0);
        $v_0.style.left = "0px";
        $v_0.style.top = ($P_CRM($p0.target).offset().top -
                $P_CRM($get("emailrecipientactivitycontrol")).offset().top -
                $v_1.height() -
                26).toString() +
            "px";
        var $v_2 = $get("arrowMarkDiv");
        $v_2.style.left = ($P_CRM($p0.target).offset().left -
                $P_CRM($get("emailrecipientactivitycontrol")).offset().left -
                40).toString() +
            "px";
        var customControlScriptWindow = Mscrm.Utilities.getTurboFormCustomScriptWindow();
        Mscrm.EmailRecipientActivity.$2 = new customControlScriptWindow.Mscrm
            .MapJSControl(document.getElementById("openLocationMap"),
                document.getElementById("InteractionViewMainContainerControl"),
                Microsoft.Maps,
                Mscrm.TurboForm,
                Mscrm.CrmBrowser,
                Mscrm.InlineEditUtilitiesProxy);
        var $v_3 = {};
        $v_3["Top"] = $v_0.style.top;
        $v_3["Left"] = $v_0.style.left;
        Mscrm.EmailRecipientActivity.$2.RenderAsMap($p1,
            customControlScriptWindow.Mscrm.MapJSControl.geocodeRequestCallback,
            $v_3);
        $v_1.find(".ms-crm-ImageStrip-popout").parent().attr("tabindex", ($p2.tabIndex + 1).toString());
        $v_1.find(".closeButton").parent().attr("tabindex", ($p2.tabIndex + 2).toString());
        Mscrm.EmailRecipientActivity.$1 = $p2;
        var $$t_7 = this;
        window.setTimeout(function() { Mscrm.EmailRecipientActivity.$1.focus() }, 500)
    },
    $L_3: function($p0) { Mscrm.EmailRecipientActivity.$2.OpenBingWebsite() },
    $G_3: function($p0) {
        var $v_0 = $get("parentOpenLocationMap"), $v_1 = $P_CRM($v_0);
        $v_0.style.left = "-10000px";
        $v_0.style.top = "-10000px";
        $v_1.find(".ms-crm-ImageStrip-popout").parent().removeAttr("tabindex");
        $v_1.find(".closeButton").parent().removeAttr("tabindex");
        Mscrm.EmailRecipientActivity.$1.focus()
    },
    $F_3: function($p0) {
        switch ($p0) {
        case 0:
            return "/_imgs/inlineedit/OpenEmail_Icon_16.png";
        case 1:
            return "/_imgs/inlineedit/AttachmentViews_16.png";
        case 2:
            return "/_imgs/inlineedit/LinksClicked_16.png";
        case 3:
            return "/_imgs/inlineedit/RepliedEmail_16.png";
        default:
            return "symbolFont Home-symbol"
        }
    },
    $C_3: function($p0, $p1) {
        var $v_0 = null,
            $v_1 = null,
            $v_2 = null,
            $v_3 = Mscrm.EmailRecipientActivity.localizedStrings.EMAILENGAGMENT_OPENEDBY_WITHOUT_LOCATION;
        switch ($p0) {
        case 0:
            var $v_4 = document.createElement("span"), $v_5 = null;
            if (IsNull($p1.getValue("interactionlocation")) ||
                $p1.getValue("interactionlocation")
                .toString() ===
                "Unknown Location")
                $v_5 = Mscrm.EmailRecipientActivity.localizedStrings.EMAILENGAGEMENT_RECIPIENTACTIVITY_UNKNOWN_LOCATION;
            else {
                $v_5 = $p1.getValue("interactionlocation").toString();
                $v_3 = Mscrm.EmailRecipientActivity.localizedStrings.EmailEngagment_OpenedBy
            }
            $v_5 = CrmEncodeDecode.CrmHtmlEncode($v_5);
            var $v_6 = CrmEncodeDecode.CrmHtmlEncode($p1.getValue("interactionuseragent").toString()),
                $v_7 = "<b>" + $v_6 + "</b>";
            $v_2 = "<b>" + $v_5 + "</b>";
            var $v_8 = this.$E_3(String.format($v_3, $v_7, $v_2), $v_2);
            $v_4.innerHTML = $v_8;
            $v_4.tabIndex = Mscrm.EmailRecipientActivity.$0++;
            $v_8 = $v_8.replace(new RegExp("<(?:.|\\s)*?>", "g"), "");
            $v_4.title = $v_8;
            $v_4.setAttribute("aria-label", $v_8);
            return $v_4;
        case 1:
            return this.$7_3($p1,
                Mscrm.EmailRecipientActivity.localizedStrings.EmailEngagment_AttachmentViewed,
                Mscrm.EmailRecipientActivity.localizedStrings.EmailEngagement_Viewed_Near_Title);
        case 2:
            return this.$7_3($p1,
                Mscrm.EmailRecipientActivity.localizedStrings.EmailEngagment_LinksViewed,
                Mscrm.EmailRecipientActivity.localizedStrings.EmailEngagment_Clicked_Near_Title);
        case 3:
            var $v_9;
            if (IsNull($p1.getValue("interactionrepliedby"))) $v_9 = "";
            else $v_9 = $p1.getValue("interactionrepliedby").toString();
            if (isNullOrEmptyString($v_9))
                $v_9 = Mscrm.EmailRecipientActivity.localizedStrings.EMAILENGAGEMENT_RECIPIENTACTIVITY_NONAME;
            $v_1 = String.format(Mscrm.EmailRecipientActivity.localizedStrings.EmailEngagment_RepliedBy, $v_9);
            $v_0 = document.createElement("span");
            $v_0.innerText = $v_1;
            $v_0.title = $v_1;
            $v_0.tabIndex = Mscrm.EmailRecipientActivity.$0++;
            $v_0.setAttribute("aria-label", $v_1);
            return $v_0;
        default:
            return $v_0
        }
    },
    $7_3: function($p0, $p1, $p2) {
        var $v_0 = "", $v_1 = "", $v_2 = "";
        if (!IsNull($p0.getValue("interactionlocation")) &&
            $p0.getValue("interactionlocation")
            .toString() !==
            "Unknown Location") $v_0 = CrmEncodeDecode.CrmHtmlEncode($p0.getValue("interactionlocation").toString());
        if (Mscrm.InternalUtilities._String.isNullOrEmpty($v_0)) $v_1 = $p1;
        else {
            $v_2 = "<b>" + $v_0 + "</b>";
            $v_1 = String.format($p2, $v_2)
        }
        var $v_3 = document.createElement("span"), $v_4 = document.createElement("span");
        $v_4.tabIndex = Mscrm.EmailRecipientActivity.$0++;
        $v_4.title = $v_1.replace(new RegExp("<(?:.|\\s)*?>", "g"), "");
        $v_4.innerText = $p1;
        $v_4.setAttribute("aria-label", $v_1.replace(new RegExp("<(?:.|\\s)*?>", "g"), ""));
        $v_3.appendChild($v_4);
        var $v_5 = document.createElement("span");
        $v_5.tabIndex = Mscrm.EmailRecipientActivity.$0++;
        var $v_6 = $p0.getValue("interactedcomponenttext").toString();
        $v_5.title = $v_6;
        $v_5.setAttribute("aria-label", $p0.getValue("interactedcomponenttext").toString());
        $v_5.setAttribute("target", "_blank");
        $v_5.innerHTML = this.$D_3($v_1, CrmEncodeDecode.CrmHtmlEncode($v_6));
        Sys.UI.DomElement.addCssClass($v_5, "InteractionViewLink");
        $v_3.appendChild($v_5);
        var $v_7 = document.createElement("span");
        if (!IsNull($p0.getValue("interactionlocation")) &&
            $p0.getValue("interactionlocation")
            .toString() !==
            "Unknown Location")
            $v_7.innerHTML = " " + Mscrm.EmailRecipientActivity.localizedStrings.EmailEngagment_NearLocation + $v_2;
        $v_3.appendChild($v_7);
        return $v_3
    },
    $E_3: function($p0, $p1) {
        var $v_0 = 120;
        if ($p0.indexOf($p1) < $v_0) return $p0;
        else return $p0.slice(0, $v_0) + "... " + $p1
    },
    $D_3: function($p0, $p1) {
        var $v_0 = 120;
        if ($p0.length + $p1.length < $v_0) return $p1;
        else {
            $v_0 = $v_0 - $p0.length;
            return $p1.slice(0, $v_0) + "... "
        }
    },
    $H_3: function() {
        var $v_0 = Xrm.Page.data.entity.attributes.get("opencount"),
            $v_1 = Xrm.Page.data.entity.attributes.get("attachmentopencount"),
            $v_2 = Xrm.Page.data.entity.attributes.get("linksclickedcount"),
            $v_3 = Xrm.Page.data.entity.attributes.get("replycount"),
            $v_4 = Xrm.Page.data.entity.attributes.get("directioncode"),
            $v_5 = Xrm.Page.data.entity.attributes.get("isemailfollowed"),
            $v_6 = IsNull($v_0) ? null : $v_0.getValue(),
            $v_7 = IsNull($v_1) ? null : $v_1.getValue(),
            $v_8 = IsNull($v_3) ? null : $v_3.getValue(),
            $v_9 = IsNull($v_2) ? null : $v_2.getValue(),
            $v_A = !IsNull($v_5) && $v_5.getValue(),
            $v_B = $get("EmailOpened"),
            $v_C = $v_B.tabIndex,
            $v_D = $get(this.$8_3);
        $v_D.setAttribute("tabindex", $v_C - 5);
        $v_D.setAttribute("aria-label", Mscrm.EmailRecipientActivity.localizedStrings.EmailEngagment_HEADER);
        $v_D.setAttribute("title", Mscrm.EmailRecipientActivity.localizedStrings.EmailEngagment_HEADER);
        $v_D.innerText = Mscrm.EmailRecipientActivity.localizedStrings.EMAILENGAGEMENT_RECIPIENTACTIVITY_TITLE;
        Sys.UI.DomElement.addCssClass($v_D, "clsRecipientActivityHeader");
        Mscrm.EmailRecipientActivity.$0 = $get("EmailReplied").tabIndex + 10;
        if (Xrm.Page.ui.getFormType() !== 1 && IsNull($v_6) && IsNull($v_7) && IsNull($v_8) && IsNull($v_9))
            if (!IsNull($v_4) && !$v_4.getValue()) {
                var $v_E =
                        "<fetch version='1.0' mapping='logical'><entity name = 'email' > <attribute name='opencount' /><attribute name='attachmentopencount' /><attribute name='linksclickedcount' /><attribute name='replycount' /><attribute name='isemailfollowed' /><link-entity name='email' to='activityid' from='parentactivityid' alias='b' link-type='inner'><filter><condition attribute='activityid' operator='eq' value= '" + CrmEncodeDecode.CrmXmlAttributeEncode(Xrm.Page.data.entity.getId()) + "'/></filter></link-entity></entity></fetch>",
                    $v_F = null,
                    $$t_J = this;
                Xrm.Internal.messages.retrieveMultiple($v_E).then(function($p1_0) {
                        if ($p1_0) {
                            $v_F = $p1_0.entityCollection;
                            if ($v_F.get_count()) {
                                var $v_G = $v_F.get_entities()[0];
                                $v_6 = $v_G.getValue("opencount");
                                $v_7 = $v_G.getValue("attachmentopencount");
                                $v_9 = $v_G.getValue("linksclickedcount");
                                $v_8 = $v_G.getValue("replycount");
                                var $v_H = $v_G.getValue("isemailfollowed");
                                $v_A = $v_H.get_value() === 1 ? true : false;
                                $$t_J.$4_3($v_6, $v_7, $v_9, $v_8, $v_A)
                            } else $$t_J.$4_3($v_6, $v_7, $v_9, $v_8, $v_A)
                        }
                    },
                    Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
            } else this.$4_3($v_6, $v_7, $v_9, $v_8, $v_A);
        else this.$4_3($v_6, $v_7, $v_9, $v_8, $v_A)
    },
    $4_3: function($p0, $p1, $p2, $p3, $p4) {
        $p0 = isNullOrEmptyString($p0) ? "0" : $p0;
        $p1 = isNullOrEmptyString($p1) ? "0" : $p1;
        $p2 = isNullOrEmptyString($p2) ? "0" : $p2;
        $p3 = isNullOrEmptyString($p3) ? "0" : $p3;
        var $v_0 = $get("EmailopendCount");
        if (!IsNull($v_0)) $v_0.innerHTML = $p0;
        var $v_1 = $get("EmailAttachmentViewCount");
        if (!IsNull($v_1)) $v_1.innerHTML = $p1;
        var $v_2 = $get("EmailClickedCount");
        if (!IsNull($v_2)) $v_2.innerHTML = $p2;
        var $v_3 = $get("EmailRepliedCount");
        if (!IsNull($v_3)) $v_3.innerHTML = $p3;
        var $v_4 = $get("EmailOpened");
        if (!IsNull($v_4)) {
            $v_4.title = String.format(Mscrm.EmailRecipientActivity.localizedStrings.EmailEngagment_OpenActivity, $p0);
            $v_4.setAttribute("aria-label",
                String.format(Mscrm.EmailRecipientActivity.localizedStrings.EmailEngagment_OpenActivity, $p0))
        }
        var $v_5 = $get("EmailOpenedJawsReader");
        if (!IsNull($v_5))
            $v_5.innerText = String.format(Mscrm.EmailRecipientActivity.localizedStrings.EmailEngagment_OpenActivity,
                $p0);
        var $v_6 = $get("AttachmentViewed");
        if (!IsNull($v_6)) {
            $v_6.title = String.format(Mscrm.EmailRecipientActivity.localizedStrings.EmailEngagment_AttachementActivity,
                $p1);
            $v_6.setAttribute("aria-label",
                String.format(Mscrm.EmailRecipientActivity.localizedStrings.EmailEngagment_AttachementActivity, $p1))
        }
        var $v_7 = $get("AttachmentViewedJawsReader");
        if (!IsNull($v_7))
            $v_7.innerText = String.format(Mscrm.EmailRecipientActivity.localizedStrings
                .EmailEngagment_AttachementActivity,
                $p1);
        var $v_8 = $get("LinkClicked");
        if (!IsNull($v_8)) {
            $v_8.title = String.format(Mscrm.EmailRecipientActivity.localizedStrings.EmailEngagment_LinkActivity, $p2);
            $v_8.setAttribute("aria-label",
                String.format(Mscrm.EmailRecipientActivity.localizedStrings.EmailEngagment_LinkActivity, $p2))
        }
        var $v_9 = $get("LinkClickedJawsReader");
        if (!IsNull($v_9))
            $v_9.innerText = String.format(Mscrm.EmailRecipientActivity.localizedStrings.EmailEngagment_LinkActivity,
                $p2);
        var $v_A = $get("EmailReplied");
        if (!IsNull($v_A)) {
            $v_A.title = String.format(Mscrm.EmailRecipientActivity.localizedStrings.EmailEngagment_ReplyActivity, $p3);
            $v_A.setAttribute("aria-label",
                String.format(Mscrm.EmailRecipientActivity.localizedStrings.EmailEngagment_ReplyActivity, $p3))
        }
        var $v_B = $get("EmailRepliedJawsReader");
        if (!IsNull($v_B))
            $v_B.innerText = String.format(Mscrm.EmailRecipientActivity.localizedStrings.EmailEngagment_ReplyActivity,
                $p3);
        if (Mscrm.InternalUtilities.Utilities.isTurboForm()) {
            this.$6_3();
            var $v_C = Xrm.Page.ui.controls.get("emailrecipientactivitycontrol");
            if (!IsNull($v_C)) {
                var $v_D = window.IS_EMAILENGAGEMENT_FEATURE_AVAILABLE &&
                    $v_C.getParent().getVisible() &&
                    $p4 &&
                    Xrm.Page.ui.getFormType() !== 1 &&
                    (Xrm.Page.getAttribute(this.$3_3).getValue() === 2 ||
                        Xrm.Page.getAttribute(this.$3_3).getValue() === 3 ||
                        Xrm.Page.getAttribute(this.$3_3).getValue() === 4);
                this.$5_3($v_C, $v_D)
            }
        } else Mscrm.OnLoadDeferredExecutor.queueCallback(this.$$d_$6_3, 2)
    },
    $5_3: function($p0, $p1) {
        $p0.getParent().controls.getLength() === 1 && $p0.getParent().setVisible($p1);
        $p0.setVisible($p1)
    },
    $6_3: function() { Mscrm.EmailRecipientActivity.$M(this.get_element()) },
    handleEvent: function(eventCode, parameters, sourceComponent) {
        return Mscrm.CrmUIControl.prototype.handleEvent.call(this, eventCode, parameters, sourceComponent)
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    }
};
Mscrm.EmailRecipientActivity.SectionInformation = function() {};
Mscrm.EmailRecipientActivity.SectionInformation
    .prototype = { opened: 0, attachmentViews: 1, linksClicked: 2, replied: 3 };
Mscrm.EmailRecipientActivity.SectionInformation.registerEnum("Mscrm.EmailRecipientActivity.SectionInformation", false);
Mscrm.EmailRecipientActivity.registerClass("Mscrm.EmailRecipientActivity", Mscrm.CrmUIControl);
Mscrm.EmailRecipientActivity.$0 = 0;
Mscrm.EmailRecipientActivity.$2 = null;
Mscrm.EmailRecipientActivity.$1 = null;
Mscrm.EmailRecipientActivity.localizedStrings = null