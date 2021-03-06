
function FindArticles() {
    var searchMethod = $get("SearchMethod").value;
    if (searchMethod != "CRMAnswer.BrowseSubject" && searchMethod != "CRMAnswer.ArticleQueues" && ValidateInput()) {
        var s = $get("SearchText");
        if (s.value == "") {
            alert(LOCID_PLEASE_ENTER_SEARCH);
            s.focus()
        } else {
            var oSubjectItems = Mscrm.FormControlInputBehavior.GetBehavior("SearchSubject").Items(),
                sSubjectId = "";
            if (oSubjectItems.length > 0)
                sSubjectId = oSubjectItems[0].id;
            var crmGrid = $find("crmGrid");
            crmGrid.SetParameter("stype", "0");
            crmGrid.SetParameter("svalue", s.value);
            crmGrid.SetParameter("suppressFetch", 0);
            crmGrid.SetParameter("ssubject", sSubjectId);
            crmGrid.SetParameter("sinflection", $get("SearchInflection").value);
            crmGrid.SetParameter("queryapi", searchMethod);
            crmGrid.Refresh()
        }
    }
    return false
}

function ValidateInput() {
    var searchMethod = $get("SearchMethod").value;
    if (!IsOnline() && searchMethod == "CRMAnswer.SearchByBody") {
        alert(LOCID_NO_FULL_TEXT_SEARCH_OFFLIN);
        return false
    }
    if ($get("SearchInflection").value == 1) {
        var o = $get("SearchText");
        if (o.value.indexOf("*") != -1) {
            alert(LOCID_NO_ASTERISK);
            o.select();
            return false
        }
    }
    return true
}

function displaySearchOptions(refreshGrid) {
    var method = $get("SearchMethod").value,
        subjectDiv = $get("subjectDiv"),
        searchDiv = $get("searchDiv"),
        articleQueueDiv = $get("articleQueueDiv");
    if (method == "CRMAnswer.BrowseSubject") {
        if (Mscrm.Utilities.isIE7OrIE7CompactMode())
            subjectDiv.style.display = "inline";
        else
            subjectDiv.style.display = "table";
        searchDiv.style.display = "none";
        articleQueueDiv.style.display = "none"
    } else if (method == "CRMAnswer.ArticleQueues") {
        articleQueueDiv.style.display = "inline";
        searchDiv.style.display = "none";
        subjectDiv.style.display = "none"
    } else {
        subjectDiv.style.display = "none";
        articleQueueDiv.style.display = "none";
        searchDiv.style.display = "block";
        var searchSubject = $get("searchSubjectRow"),
            searchOptions = $get("searchOptions");
        if (method == "CRMAnswer.RetrieveByNumber") {
            if (!IsNull(searchSubject))
                searchSubject.style.display = "none";
            if (!IsNull(searchOptions))
                searchOptions.style.display = "none"
        } else {
            if (!IsNull(searchSubject))
                searchSubject.style.display = "";
            if (!IsNull(searchOptions))
                searchOptions.style.display = ""
        }
    }
    refreshGrid &&
        GridRefresh()
}

function answersRetrv(sender, o) {
    if (!IsNull(o)) {
        var crmGrid = $find("crmGrid");
        crmGrid.SetParameter("subject", o.get_id());
        crmGrid.SetParameter("suppressFetch", 0);
        crmGrid.SetParameter("queryapi", "CRMAnswer.RetrieveBySubject");
        crmGrid.Refresh()
    }
}