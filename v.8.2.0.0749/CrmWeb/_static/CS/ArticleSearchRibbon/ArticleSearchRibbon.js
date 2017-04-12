Type.registerNamespace("Mscrm");
Mscrm.ArticleSearchRibbon = function() {};
Mscrm.ArticleSearchRibbon.fullTextSearchQueryCommand = function(commandProperties, gridControl) {
    if (Mscrm.ArticleSearchRibbon.searchType === "FullTextSearch") commandProperties["On"] = true;
    else commandProperties["On"] = false
};
Mscrm.ArticleSearchRibbon.fullTextSearchCommand = function(gridControl) {
    Mscrm.ArticleSearchRibbon.searchType = "FullTextSearch";
    if (isOutlookHostedWindow()) refreshRibbon();
    else Mscrm.ArticleSearchRibbon.$2()
};
Mscrm.ArticleSearchRibbon.keywordSearchQueryCommand = function(commandProperties, gridControl) {
    if (Mscrm.ArticleSearchRibbon.searchType === "KeywordSearch") commandProperties["On"] = true;
    else commandProperties["On"] = false
};
Mscrm.ArticleSearchRibbon.keywordSearchCommand = function(gridControl) {
    Mscrm.ArticleSearchRibbon.searchType = "KeywordSearch";
    if (isOutlookHostedWindow()) refreshRibbon();
    else Mscrm.ArticleSearchRibbon.$2()
};
Mscrm.ArticleSearchRibbon.titleSearchQueryCommand = function(commandProperties, gridControl) {
    if (Mscrm.ArticleSearchRibbon.searchType === "TitleSearch") commandProperties["On"] = true;
    else commandProperties["On"] = false
};
Mscrm.ArticleSearchRibbon.titleSearchCommand = function(gridControl) {
    Mscrm.ArticleSearchRibbon.searchType = "TitleSearch";
    if (isOutlookHostedWindow()) refreshRibbon();
    else Mscrm.ArticleSearchRibbon.$2()
};
Mscrm.ArticleSearchRibbon.subjectSearchQueryCommand = function(commandProperties, gridControl) {
    if (Mscrm.ArticleSearchRibbon.searchType === "SubjectSearch") commandProperties["On"] = true;
    else commandProperties["On"] = false
};
Mscrm.ArticleSearchRibbon.subjectSearchCommand = function(gridControl) {
    Mscrm.ArticleSearchRibbon.searchType = "SubjectSearch";
    if (isOutlookHostedWindow()) refreshRibbon();
    else Mscrm.ArticleSearchRibbon.$2()
};
Mscrm.ArticleSearchRibbon.articleNumberSearchQueryCommand = function(commandProperties, gridControl) {
    if (Mscrm.ArticleSearchRibbon.searchType === "ArticleNumberSearch") commandProperties["On"] = true;
    else commandProperties["On"] = false
};
Mscrm.ArticleSearchRibbon.articleNumberSearchCommand = function(gridControl) {
    Mscrm.ArticleSearchRibbon.searchType = "ArticleNumberSearch";
    if (isOutlookHostedWindow()) refreshRibbon();
    else Mscrm.ArticleSearchRibbon.$2()
};
Mscrm.ArticleSearchRibbon.subjectCommand = function(gridControl) {
    Mscrm.ArticleSearchRibbon.showSubjectButton() && Mscrm.ArticleSearchRibbon.showSubjectLookup();
    isOutlookHostedWindow() && refreshRibbon()
};
Mscrm.ArticleSearchRibbon.subjectLabelQueryCommand = function(commandProperties, gridControl) {
    var $v_0 = Mscrm.ArticleSearchRibbon.selectedSubject;
    if (Mscrm.ArticleSearchRibbon
        .selectedSubject !==
        "" &&
        Mscrm.ArticleSearchRibbon.selectedSubject
        .length >
        20) $v_0 = String.format("{0}{1}", Mscrm.ArticleSearchRibbon.selectedSubject.substring(0, 20), "...");
    commandProperties["Value"] = $v_0
};
Mscrm.ArticleSearchRibbon.subjectLabelCommand = function(gridControl) {};
Mscrm.ArticleSearchRibbon.exactWordsQueryCommand = function(commandProperties, gridControl) {
    if (Mscrm.ArticleSearchRibbon.searchOption === "ExactWords") commandProperties["On"] = true;
    else commandProperties["On"] = false
};
Mscrm.ArticleSearchRibbon.exactWordsCommand = function(gridControl) {
    Mscrm.ArticleSearchRibbon.searchOption = "ExactWords";
    if (isOutlookHostedWindow()) refreshRibbon();
    else Mscrm.ArticleSearchRibbon.$2()
};
Mscrm.ArticleSearchRibbon.useLikeWordsQueryCommand = function(commandProperties, gridControl) {
    if (Mscrm.ArticleSearchRibbon.searchOption === "UseLikeWords") commandProperties["On"] = true;
    else commandProperties["On"] = false
};
Mscrm.ArticleSearchRibbon.useLikeWordsCommand = function(gridControl) {
    Mscrm.ArticleSearchRibbon.searchOption = "UseLikeWords";
    if (isOutlookHostedWindow()) refreshRibbon();
    else Mscrm.ArticleSearchRibbon.$2()
};
Mscrm.ArticleSearchRibbon.showSubjectLookup = function() {
    var $v_0 = Mscrm.CrmUri.create("/_controls/lookup/lookupsubject.aspx");
    $v_0.get_query()["ShowNewButton"] = "1";
    var $v_1 = new Mscrm.CrmDialog($v_0, "", 500, 500, null);
    $v_1.setCallbackInfo("performActionAfterSelectSubject", Mscrm.ArticleSearchRibbon, null);
    $v_1.show()
};
Mscrm.ArticleSearchRibbon.performActionAfterSelectSubject = function(result) {
    if (!IsNull(result)) {
        var $v_0 = result.items;
        if (!IsNull($v_0) && !IsNull($v_0[0])) {
            Mscrm.ArticleSearchRibbon.selectedSubjectId = $v_0[0].id;
            Mscrm.ArticleSearchRibbon.selectedSubject = $v_0[0].name;
            !isOutlookHostedWindow() && Mscrm.ArticleSearchRibbon.$Q();
            Mscrm.ArticleSearchRibbon.searchType === "SubjectSearch" && Mscrm.ArticleSearchRibbon.retrieveBySubject();
            return
        }
    }
    Mscrm.ArticleSearchRibbon.selectedSubjectId = "00000000-0000-0000-0000-000000000000";
    Mscrm.ArticleSearchRibbon.selectedSubject = "";
    !isOutlookHostedWindow() && Mscrm.ArticleSearchRibbon.$Q()
};
Mscrm.ArticleSearchRibbon.closeArticleSearch = function() {
    var $v_0 = "", $v_1 = "", $v_2 = "", $v_3 = $get(Mscrm.ArticleSearchRibbon._gridId + "_findCriteria");
    XUI.Html.SetText($v_3, "");
    Mscrm.ArticleSearchRibbon.enableSearchRibbon = false;
    var $v_4 = $find(Mscrm.ArticleSearchRibbon._gridId + "_quickFindContainer");
    if ($v_4) {
        var $v_5 = $v_4.GetSavedViewIds();
        $v_1 = $v_5["ViewTitle"];
        $v_0 = $v_5["ViewId"];
        $v_2 = $v_5["ViewType"];
        var $v_6 = $find(Mscrm.ArticleSearchRibbon._gridId + "_SavedNewQuerySelector"),
            $v_7 = !IsNull($v_6) && $v_6.showNewVSControl;
        if ($v_7 && !IsNull($v_0)) {
            $v_6.setViewForNewSavedQuerySelector($v_1, $v_0, $v_2);
            if (!$v_6.showOriginalSelectBox) {
                var $v_8 = $find(Mscrm.ArticleSearchRibbon._gridId);
                handleView(null, $v_8)
            }
        }
    }
    $v_3.focus();
    refreshRibbon()
};
Mscrm.ArticleSearchRibbon.getSearchType = function() {
    if (Mscrm.ArticleSearchRibbon.searchType === "FullTextSearch") return "CRMAnswer.SearchByBody";
    else if (Mscrm.ArticleSearchRibbon.searchType === "KeywordSearch") return "CRMAnswer.SearchByKeywords";
    else if (Mscrm.ArticleSearchRibbon.searchType === "TitleSearch") return "CRMAnswer.SearchByTitle";
    else if (Mscrm.ArticleSearchRibbon.searchType === "SubjectSearch") return "CRMAnswer.RetrieveBySubject";
    else if (Mscrm.ArticleSearchRibbon.searchType === "ArticleNumberSearch") return "CRMAnswer.RetrieveByNumber";
    return ""
};
Mscrm.ArticleSearchRibbon.getSearchOption = function() {
    if (Mscrm.ArticleSearchRibbon.searchType === "ArticleNumberSearch" ||
        Mscrm.ArticleSearchRibbon.searchType === "SubjectSearch") return "";
    if (Mscrm.ArticleSearchRibbon.searchOption === "UseLikeWords") return "1";
    return "0"
};
Mscrm.ArticleSearchRibbon.findArticles = function(text) {
    var $v_0 = Mscrm.GridControl.findComponent(Mscrm.ArticleSearchRibbon._gridId),
        $v_1 = $v_0.GetParameter("viewtype"),
        $v_2;
    if (!IsNull($v_0)) $v_2 = Mscrm.ArticleSearchRibbon._gridId + "_SavedQuerySelector";
    else $v_2 = "crmGrid_SavedQuerySelector";
    var $v_3 = $find($v_2);
    if (IsNull($v_3)) $v_3 = $find(Mscrm.ArticleSearchRibbon._gridId + "_SavedNewQuerySelector");
    if (!IsNull($v_3) && $v_3.showNewVSControl && !$v_3.showOriginalSelectBox) {
        var $v_4 = $v_3.quickFindQuery;
        $v_3.setViewForNewSavedQuerySelector(window.LOCID_SEARCH_RESULTS, $v_4, $v_1)
    }
    $v_0.SetParameter("stype", "0");
    $v_0.SetParameter("svalue", text);
    $v_0.SetParameter("suppressFetch", "0");
    $v_0.SetParameter("ssubject", Mscrm.ArticleSearchRibbon.selectedSubjectId);
    $v_0.SetParameter("sinflection", Mscrm.ArticleSearchRibbon.getSearchOption());
    $v_0.SetParameter("queryapi", Mscrm.ArticleSearchRibbon.getSearchType());
    $v_0.Refresh();
    return false
};
Mscrm.ArticleSearchRibbon.retrieveBySubject = function() {
    var $v_0 = Mscrm.GridControl.findComponent(Mscrm.ArticleSearchRibbon._gridId);
    $v_0.SetParameter("subject", Mscrm.ArticleSearchRibbon.selectedSubjectId);
    $v_0.SetParameter("suppressFetch", "0");
    $v_0.SetParameter("queryapi", "CRMAnswer.RetrieveBySubject");
    var $v_1 = IndexedArticleViewID;
    $v_0.SetParameter("viewid", $v_1);
    $v_0.Refresh()
};
Mscrm.ArticleSearchRibbon.get_$9 = function() {
    if (Mscrm.ArticleSearchRibbon.searchType === "ArticleNumberSearch" ||
        Mscrm.ArticleSearchRibbon.searchType === "SubjectSearch") return false;
    return true
};
Mscrm.ArticleSearchRibbon.showExactWordsButton = function() { return Mscrm.ArticleSearchRibbon.get_$9() };
Mscrm.ArticleSearchRibbon.showUseLikeWordsButton = function() {
    return Mscrm.ArticleSearchRibbon.showExactWordsButton()
};
Mscrm.ArticleSearchRibbon.showSubjectButton = function() {
    if (Mscrm.ArticleSearchRibbon.searchType === "ArticleNumberSearch") return false;
    return true
};
Mscrm.ArticleSearchRibbon.showArticleSearchRibbon = function(selectedEntityTypeCode) {
    if (selectedEntityTypeCode === 127 && Mscrm.ArticleSearchRibbon.enableSearchRibbon) return true;
    var $v_0 = false;
    return $v_0
};
Mscrm.ArticleSearchRibbon.isSearchTabEnabled = function() { return Mscrm.ArticleSearchRibbon.enableSearchRibbon };
Mscrm.ArticleSearchRibbon.enableSearch = function() {
    Mscrm.ArticleSearchRibbon.enableSearchRibbon = true;
    refreshRibbon()
};
Mscrm.ArticleSearchRibbon.setFocusToSearchTab = function() {
    if (isOutlookHostedWindow()) {
        var $v_0 = window.parent.$find("crmRibbonManager");
        $v_0 && $v_0.setTabById("Mscrm.HomepageGrid.ArticleSearchTab");
        getOutlookHostedWindow().activateArticleSearchRibbonTab()
    }
};
Mscrm.ArticleSearchRibbon.suppressSearchByType = function() {
    var $v_0 = Mscrm.GridControl.findComponent(Mscrm.ArticleSearchRibbon._gridId);
    if ($v_0) {
        $v_0.SetParameter("stype", "");
        $v_0.SetParameter("svalue", "");
        $v_0.SetParameter("suppressFetch", "");
        $v_0.SetParameter("ssubject", "");
        $v_0.SetParameter("sinflection", "");
        $v_0.SetParameter("queryapi", "");
        if (Mscrm.ArticleSearchRibbon.enableSearchRibbon) {
            Mscrm.ArticleSearchRibbon.enableSearchRibbon = false;
            refreshRibbon()
        }
    }
    return false
};
Mscrm.ArticleSearchRibbon.$I = function() {
    if (!Mscrm.ArticleSearchRibbon.$0) {
        Mscrm.ArticleSearchRibbon.$0 = [];
        Mscrm.ArticleSearchRibbon.$0[0] = new Mscrm
            .ArticleSearchOption("FullTextSearch",
                Mscrm.ArticleSearchRibbon.$J,
                Mscrm.ArticleSearchRibbon.$K,
                "Mscrm.ArticleSearchRibbon.fullTextSearchCommand(null);",
                false);
        Mscrm.ArticleSearchRibbon.$0[1] = new Mscrm
            .ArticleSearchOption("KeywordSearch",
                Mscrm.ArticleSearchRibbon.$O,
                Mscrm.ArticleSearchRibbon.$P,
                "Mscrm.ArticleSearchRibbon.keywordSearchCommand(null);",
                false);
        Mscrm.ArticleSearchRibbon.$0[2] = new Mscrm
            .ArticleSearchOption("TitleSearch",
                Mscrm.ArticleSearchRibbon.$Y,
                Mscrm.ArticleSearchRibbon.$Z,
                "Mscrm.ArticleSearchRibbon.titleSearchCommand(null);",
                false);
        Mscrm.ArticleSearchRibbon.$0[3] = new Mscrm
            .ArticleSearchOption("SubjectSearch",
                Mscrm.ArticleSearchRibbon.$T,
                Mscrm.ArticleSearchRibbon.$U,
                "Mscrm.ArticleSearchRibbon.subjectSearchCommand(null);",
                false);
        Mscrm.ArticleSearchRibbon.$0[4] = new Mscrm
            .ArticleSearchOption("ArticleNumberSearch",
                Mscrm.ArticleSearchRibbon.$E,
                Mscrm.ArticleSearchRibbon.$F,
                "Mscrm.ArticleSearchRibbon.articleNumberSearchCommand(null);",
                false);
        Mscrm.ArticleSearchRibbon.$0[5] = new Mscrm.ArticleSearchOption(null, null, null, null, true);
        Mscrm.ArticleSearchRibbon.$0[6] = new Mscrm
            .ArticleSearchOption("SubjectValue",
                Mscrm.ArticleSearchRibbon.get_$V(),
                Mscrm.ArticleSearchRibbon.$X,
                "Mscrm.ArticleSearchRibbon.subjectCommand(null);",
                false);
        Mscrm.ArticleSearchRibbon.$0[7] = new Mscrm.ArticleSearchOption(null, null, null, null, true);
        Mscrm.ArticleSearchRibbon.$0[8] = new Mscrm
            .ArticleSearchOption("ExactWords",
                Mscrm.ArticleSearchRibbon.$G,
                Mscrm.ArticleSearchRibbon.$H,
                "Mscrm.ArticleSearchRibbon.exactWordsCommand(null);",
                false);
        Mscrm.ArticleSearchRibbon.$0[9] = new Mscrm
            .ArticleSearchOption("UseLikeWords",
                Mscrm.ArticleSearchRibbon.$a,
                Mscrm.ArticleSearchRibbon.$b,
                "Mscrm.ArticleSearchRibbon.useLikeWordsCommand(null);",
                false)
    }
};
Mscrm.ArticleSearchRibbon.get_$V = function() {
    return String.format("{0}: '{1}'",
        Mscrm.ArticleSearchRibbon.$W,
        Mscrm.ArticleSearchRibbon.selectedSubjectId === "00000000-0000-0000-0000-000000000000"
        ? Mscrm.ArticleSearchRibbon.$S
        : Mscrm.ArticleSearchRibbon.selectedSubject)
};
Mscrm.ArticleSearchRibbon.get_$i = function() {
    Mscrm.ArticleSearchRibbon.$I();
    var $v_0 =
            "<li id='{2}' class='ms-crm-article-search-listItem' tabindex='0' onkeydown='Mscrm.ArticleSearchRibbon.HandleKeyPress(new Sys.UI.DomEvent(event));' onclick={1} title='{3}'><span style='display:inline-block'><span class='ms-crm-article-search-listItem-span'><img src='" + window.CDNURL + "/_imgs/imagestrips/transparent_spacer.gif' id='icon_{2}' class='classImg'/></span><span class='ms-crm-article-search-listItem-innerSpan'/><div id='span_{2}' class='ms-crm-Article-Search-Item-Text'>{0}</div></span></li>",
        $v_1 = new Sys.StringBuilder;
    $v_1.append("<div id='articleSearchMenu' class='articleSearchMenu'>");
    $v_1.append("<ul id='articleSearchList' style='margin-top:10px;'>");
    for (var $v_2 = 0; $v_2 < Mscrm.ArticleSearchRibbon.$0.length; $v_2++) {
        var $v_3 = Mscrm.ArticleSearchRibbon.$0[$v_2];
        if (!$v_3.$C_0) $v_1.append(String.format($v_0, $v_3.$5_0, $v_3.$B_0, $v_3.$4_0, $v_3.$D_0));
        else
            $v_1
                .append("<li height=2px style='line-height:2px' class='ms-crm-article-search-menu-spacer'><span class='ms-crm-article-search-menu-spacer'></span></li>")
    }
    $v_1.append("</ul>");
    $v_1.append("</div>");
    return $v_1.toString()
};
Mscrm.ArticleSearchRibbon.$d = function($p0, $p1) {
    !isNullOrEmptyString($p0) && $P_CRM("#" + $p0).removeClass("ms-crm-article-search-listItem-Hover");
    !isNullOrEmptyString($p1) && $P_CRM("#" + $p1).addClass("ms-crm-article-search-listItem-Hover")
};
Mscrm.ArticleSearchRibbon.$Q = function() {
    var $v_0 = $get("span_SubjectValue");
    XUI.Html.SetText($v_0, Mscrm.ArticleSearchRibbon.get_$V());
    Mscrm.ArticleSearchRibbon.$2()
};
Mscrm.ArticleSearchRibbon.$2 = function() {
    for (var $v_0 = Mscrm.ArticleSearchRibbon.$1.get_jQueryDialog().get(0),
        $v_1 = $v_0.getElementsByTagName("img"),
        $v_2 = 0;
        $v_2 < $v_1.length;
        $v_2++)
        if ($v_1[$v_2].id === "icon_" + Mscrm.ArticleSearchRibbon.searchType ||
            Mscrm.ArticleSearchRibbon
            .get_$9() &&
            $v_1[$v_2]
            .id ===
            "icon_" + Mscrm.ArticleSearchRibbon.searchOption) $v_1[$v_2].className = "ms-crm-ImageStrip-activateButton";
        else $v_1[$v_2].className = "";
    if (Mscrm.ArticleSearchRibbon.get_$9()) {
        $P_CRM("#span_ExactWords").removeClass("ms-crm-Article-Item-Disabled");
        $P_CRM("#span_UseLikeWords").removeClass("ms-crm-Article-Item-Disabled")
    } else {
        $P_CRM("#span_ExactWords").addClass("ms-crm-Article-Item-Disabled");
        $P_CRM("#span_UseLikeWords").addClass("ms-crm-Article-Item-Disabled")
    }
    if (Mscrm.ArticleSearchRibbon.showSubjectButton())
        $P_CRM("#span_SubjectValue").removeClass("ms-crm-Article-Item-Disabled");
    else $P_CRM("#span_SubjectValue").addClass("ms-crm-Article-Item-Disabled");
    Mscrm.ArticleSearchRibbon.setHintText()
};
Mscrm.ArticleSearchRibbon.setHintText = function() {
    var $v_0 = $get(Mscrm.ArticleSearchRibbon._gridId + "_findHintText");
    XUI.Html.SetText($v_0, Mscrm.ArticleSearchRibbon.get_$h())
};
Mscrm.ArticleSearchRibbon.get_gridId = function() { return Mscrm.ArticleSearchRibbon._gridId };
Mscrm.ArticleSearchRibbon.set_gridId = function(value) {
    Mscrm.ArticleSearchRibbon._gridId = value;
    return value
};
Mscrm.ArticleSearchRibbon.get_$h = function() {
    var $v_0 = "";
    Mscrm.ArticleSearchRibbon.$I();
    if (Mscrm.ArticleSearchRibbon.get_$9())
        $v_0 = Mscrm.ArticleSearchRibbon.selectedSubjectId === "00000000-0000-0000-0000-000000000000"
            ? String.format("{0}; {1}", Mscrm.ArticleSearchRibbon.get_$A(), Mscrm.ArticleSearchRibbon.get_$R())
            : String.format("{0}; {1}; {2}",
                Mscrm.ArticleSearchRibbon.get_$A(),
                Mscrm.ArticleSearchRibbon.get_$R(),
                Mscrm.ArticleSearchRibbon.selectedSubject);
    else
        $v_0 = Mscrm.ArticleSearchRibbon.selectedSubjectId === "00000000-0000-0000-0000-000000000000"
            ? String.format("{0}", Mscrm.ArticleSearchRibbon.get_$A())
            : String.format("{0}; {1}", Mscrm.ArticleSearchRibbon.get_$A(), Mscrm.ArticleSearchRibbon.selectedSubject);
    return $v_0
};
Mscrm.ArticleSearchRibbon.get_$A = function() {
    for (var $v_0 = 0; $v_0 < Mscrm.ArticleSearchRibbon.$0.length; $v_0++) {
        var $v_1 = Mscrm.ArticleSearchRibbon.$0[$v_0];
        if ($v_1.$4_0 === Mscrm.ArticleSearchRibbon.searchType) return $v_1.$5_0
    }
    return ""
};
Mscrm.ArticleSearchRibbon.get_$R = function() {
    for (var $v_0 = 0; $v_0 < Mscrm.ArticleSearchRibbon.$0.length; $v_0++) {
        var $v_1 = Mscrm.ArticleSearchRibbon.$0[$v_0];
        if ($v_1.$4_0 === Mscrm.ArticleSearchRibbon.searchOption) return $v_1.$5_0
    }
    return ""
};
Mscrm.ArticleSearchRibbon.showHideSearchMenu = function(domEvent) {
    !Mscrm.ArticleSearchRibbon.$1 && Mscrm.ArticleSearchRibbon.$g();
    if (!Mscrm.ArticleSearchRibbon.$3) {
        var $v_0 = $P_CRM(Mscrm.ArticleSearchRibbon.get_$i());
        Mscrm.ArticleSearchRibbon.$1.setContent($v_0);
        var $v_1 = $P_CRM(domEvent.target);
        Mscrm.ArticleSearchRibbon.$1.show($v_1, null);
        Mscrm.ArticleSearchRibbon.$2();
        $P_CRM("#" + Mscrm.ArticleSearchRibbon.searchType).focus();
        Mscrm.ArticleSearchRibbon.$d(null, Mscrm.ArticleSearchRibbon.searchType)
    } else Mscrm.ArticleSearchRibbon.$1.hide();
    Mscrm.ArticleSearchRibbon.$3 = !Mscrm.ArticleSearchRibbon.$3
};
Mscrm.ArticleSearchRibbon.$g = function() {
    Mscrm.ArticleSearchRibbon.$3 = false;
    Mscrm.ArticleSearchRibbon.$1 = new Mscrm.FlyOutDialog;
    Mscrm.ArticleSearchRibbon.$1.get_options().set_showButtonPane(false);
    Mscrm.ArticleSearchRibbon.$1.get_options().set_modal(true);
    Mscrm.ArticleSearchRibbon.$1.get_options().set_closeOnEscape(true);
    var $$t_0;
    ($$t_0 = Mscrm.ArticleSearchRibbon.$1.get_options())
        .set_dialogClass($$t_0.get_dialogClass() + "ms-crm-articleSearch-Flyout");
    Mscrm.ArticleSearchRibbon.$1.get_options().set_width(170);
    Mscrm.ArticleSearchRibbon.$1.get_options().set_letjQueryHandleTabbing(true);
    Mscrm.ArticleSearchRibbon.$1.bind("flyout-canceled", Mscrm.ArticleSearchRibbon.$8);
    Mscrm.ArticleSearchRibbon.$1.bind("flyout-closed", Mscrm.ArticleSearchRibbon.$8);
    $P_CRM(window).resize(Mscrm.ArticleSearchRibbon.$8)
};
Mscrm.ArticleSearchRibbon.$8 = function($p0) {
    Mscrm.ArticleSearchRibbon.$3 = false;
    $P_CRM(window).unbind("resize", Mscrm.ArticleSearchRibbon.$8);
    Mscrm.ArticleSearchRibbon.$1.dispose();
    Mscrm.ArticleSearchRibbon.$1 = null
};
Mscrm.ArticleSearchOption = function(id, title, tooltip, handler, spacer) {
    this.$4_0 = id;
    this.$5_0 = title;
    this.$D_0 = tooltip;
    this.$B_0 = handler;
    this.$C_0 = spacer
};
Mscrm.ArticleSearchOption.prototype = { $4_0: null, $5_0: null, $D_0: null, $B_0: null, $C_0: false };
Mscrm.ArticleSearchRibbonService = function() {};
Mscrm.ArticleSearchRibbonService.$$cctor = function() {
    Mscrm.GlobalServices.set_articleSearchRibbon(Mscrm.ArticleSearchRibbonService.$N)
};
Mscrm.ArticleSearchRibbonService.prototype = {
    setHintText: function() { Mscrm.ArticleSearchRibbon.setHintText() },
    isSearchTabEnabled: function() { return Mscrm.ArticleSearchRibbon.isSearchTabEnabled() },
    enableSearch: function() { Mscrm.ArticleSearchRibbon.enableSearch() },
    setFocusToSearchTab: function() { Mscrm.ArticleSearchRibbon.setFocusToSearchTab() },
    showHideSearchMenu: function($p0) { Mscrm.ArticleSearchRibbon.showHideSearchMenu($p0) },
    get_searchType: function() { return Mscrm.ArticleSearchRibbon.searchType },
    get_selectedSubjectId: function() { return Mscrm.ArticleSearchRibbon.selectedSubjectId },
    findArticles: function($p0) { return Mscrm.ArticleSearchRibbon.findArticles($p0) },
    closeArticleSearch: function() { Mscrm.ArticleSearchRibbon.closeArticleSearch() },
    get_gridId: function() { return Mscrm.ArticleSearchRibbon._gridId },
    set_gridId: function($p0) {
        Mscrm.ArticleSearchRibbon._gridId = $p0;
        return $p0
    }
};
Mscrm.ArticleSearchRibbon.registerClass("Mscrm.ArticleSearchRibbon");
Mscrm.ArticleSearchOption.registerClass("Mscrm.ArticleSearchOption");
Mscrm.ArticleSearchRibbonService.registerClass("Mscrm.ArticleSearchRibbonService", null, Mscrm.IArticleSearchRibbon);
Mscrm.ArticleSearchRibbon.$J = LOCID_FULL_TEXT_SEACRH_LABEL;
Mscrm.ArticleSearchRibbon.$K = LOCID_FULL_TEXT_SEACRH_TOOLTIP;
Mscrm.ArticleSearchRibbon.$O = LOCID_KEYWORD_SEACRH_LABEL;
Mscrm.ArticleSearchRibbon.$P = LOCID_KEYWORD_SEACRH_TOOLTIP;
Mscrm.ArticleSearchRibbon.$Y = LOCID_TITLE_SEACRH_LABEL;
Mscrm.ArticleSearchRibbon.$Z = LOCID_TITLE_SEACRH_TOOLTIP;
Mscrm.ArticleSearchRibbon.$T = LOCID_SUBJECT_SEACRH_LABEL;
Mscrm.ArticleSearchRibbon.$U = LOCID_SUBJECT_SEACRH_TOOLTIP;
Mscrm.ArticleSearchRibbon.$E = LOCID_ART_NUMBER_SEACRH_LABEL;
Mscrm.ArticleSearchRibbon.$F = LOCID_ART_NUMBER_SEACRH_TOOLTIP;
Mscrm.ArticleSearchRibbon.$W = LOCID_SUBJECT_VALUE_LABEL;
Mscrm.ArticleSearchRibbon.$S = LOCID_SUBJECT_VALUE_NONE;
Mscrm.ArticleSearchRibbon.$X = LOCID_SUBJECT_VALUE_TOOLTIP;
Mscrm.ArticleSearchRibbon.$G = LOCID_EXACT_WORDS_LABEL;
Mscrm.ArticleSearchRibbon.$H = LOCID_EXACT_WORDS_TOOLTIP;
Mscrm.ArticleSearchRibbon.$a = LOCID_USE_LIKE_WORDS_LABEL;
Mscrm.ArticleSearchRibbon.$b = LOCID_USE_LIKE_WORDS_TOOLTIP;
Mscrm.ArticleSearchRibbon.searchType = KB_ISOFFLINE;
Mscrm.ArticleSearchRibbon.searchOption = "ExactWords";
Mscrm.ArticleSearchRibbon.selectedSubject = "";
Mscrm.ArticleSearchRibbon.selectedSubjectId = "00000000-0000-0000-0000-000000000000";
Mscrm.ArticleSearchRibbon.enableSearchRibbon = true;
Mscrm.ArticleSearchRibbon._gridId = "crmGrid";
Mscrm.ArticleSearchRibbon.subjectRibbonButtonDisplayTextLength = 20;
Mscrm.ArticleSearchRibbon.$1 = null;
Mscrm.ArticleSearchRibbon.$3 = false;
Mscrm.ArticleSearchRibbon.$0 = null;
Mscrm.ArticleSearchRibbonService.$N = new Mscrm.ArticleSearchRibbonService;
Mscrm.ArticleSearchRibbonService.$$cctor()