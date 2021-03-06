
var _sSelectedQueue,
    test = "none";
executeFunctionDeferred(onArtcileFormLoad, false, true);
var isFirefox = Sys.Browser.agent == Sys.Browser.Firefox;

function CanEnableDelete(crmGrid) {
    if (IsNull(crmGrid))
        crmGrid = $find("crmGrid");
    if (!IsNull(crmGrid)) {
        _selectedView = crmGrid.GetParameter("viewid");
        if (!IsNull(_selectedView) && _selectedView != "{9778E83D-E110-4332-85EA-FA2DC89689B5}")
            return true
    }
    return false
}

function CanBulkEdit(crmGrid) {
    if (IsNull(crmGrid))
        crmGrid = $find("crmGrid");
    if (!IsNull(crmGrid)) {
        _selectedView = crmGrid.GetParameter("viewid");
        if (!IsNull(_selectedView) && _selectedView != "{9778E83D-E110-4332-85EA-FA2DC89689B5}")
            return true
    }
    return false
}

function IsQueueSelected(name, crmGrid) {
    if (IsNull(crmGrid))
        crmGrid = $find("crmGrid");
    _selectedView = crmGrid.GetParameter("viewid");
    if (_selectedView == "{9778E83D-E110-4332-84EA-FA2DC89689B5}")
        return name == "Draft";
    else if (_selectedView == "{9778E83D-E110-4332-84EA-FA2DC89689B7}")
        return name == "Unapproved";
    else if (_selectedView == "{9778E83D-E110-4332-85EA-FA2DC89689B5}")
        return name == "Published";
    return true
}

function nodeSelect(sId, sData) {
    RetrieveByQueue(sId)
}

function RetrieveByQueue(sName) {
    var crmGrid = $find("crmGrid");
    if (crmGrid.GetParameter("viewid") == "{00000000-0000-0000-00AA-000010001204}") {
        crmGrid.SetParameter("queue", sName);
        crmGrid.set_pageNumber(1)
    } else {
        crmGrid.SetParameter("viewid", "{00000000-0000-0000-00AA-000010001204}");
        crmGrid.SetParameter("queryapi", "");
        crmGrid.SetParameter("viewtype", SavedQuery);
        crmGrid.Reset()
    }
    _sSelectedQueue = sName
}

function gridOnBeforeFormLoadHandler() {
    var crmGrid = $find("crmGrid"),
        oGridItem = crmGrid.get_innerGrid().get_selectedRecords()[0];
    !IsNull(oGridItem) &&
        !IsNull(oGridItem[0]) &&
        openObj(KbArticle, oGridItem[0]);
    return false
}

function GridRefresh() {
    var method = $get("SearchMethod").value;
    if (method == "CRMAnswer.ArticleQueues")
        RetrieveByQueue(_sSelectedQueue);
    else {
        var crmGrid = $find("crmGrid");
        crmGrid.SetParameter("viewid", "{7AD58FAD-40AF-4E72-AC4E-DB8C82E1E62D}");
        crmGrid.SetParameter("suppressFetch", "1");
        crmGrid.SetParameter("isFetchXmlNotFinal", "true");
        crmGrid.Reset();
        crmGrid.SetParameter("suppressFetch", "0");
        crmGrid.SetParameter("queryapi", method)
    }
}

var SUBMIT = 10,
    REJECT = 11,
    PUBLISH = 12,
    UNPUBLISH = 13,
    _oCurSec = null;

function onArtcileFormLoad() {
    var crmForm = $find("crmForm");
    if (!IsNull(crmForm)) {
        $addHandler($get("title"), "change", editChangeTitle);
        crmForm.add_onSave(ForceSubmitForm);
        if (IsOutlookClient() || Mscrm.Utilities.isIE7()) {
            var crmFormTabContainer = $get("crmFormTabContainer");
            if (!IsNull(crmFormTabContainer))
                crmFormTabContainer.style.position = "absolute"
        }
    }
}

function ForceSubmitForm(sender, oArgs) {
    Mscrm.FormControlInputBehavior.GetBehavior("articlexml").set_dataValue(artGenXml())
}

function artGenXml() {
    var articleXmlElement = $get("articlexml"),
        sArticleXml = articleXmlElement.value,
        oXml = XUI.Xml.LoadXml(sArticleXml),
        oSectionNodes = XUI.Xml.SelectNodes(oXml, "articledata/section", null),
        iNumNodes = oSectionNodes.length;
    for (ndx = 0; ndx < iNumNodes; ++ndx) {
        var oNode = oSectionNodes[ndx],
            oAttr = oNode.attributes.getNamedItem("id");
        if (!IsNull(oAttr)) {
            var oObj = document.getElementById("SectionEdit" + oAttr.value);
            if (IsNull(oObj))
                continue;
            if (oObj.getAttribute("secHasContent") == "1")
                if (XUI.DomUtilities.HasChildElements(oNode.childNodes.item(0), true)) {
                    var oCDATANode = oNode.childNodes.item(0).childNodes.item(0);
                    XUI.Xml.SetText(oCDATANode, oObj.innerHTML)
                } else {
                    var oCDATANode = oXml.createCDATASection(oObj.innerHTML);
                    oNode.childNodes.item(0).appendChild(oCDATANode)
                }
        }
    }
    var sNewXml = XUI.Xml.XMLSerializer.serializeToString(oXml);
    if (ChangeDoubleQuoteToSingleQuote == true)
        sNewXml = sNewXml.replace(/\"/g, "'");
    return sNewXml.trimEnd()
}

function editChangeTitle() {
    var firstSectionDocProp = $get("SectionDocProp");
    !IsNull(firstSectionDocProp) &&
        XUI.Html.SetText(firstSectionDocProp, $get("title").value)
}

function ClearGutter() {
    if (_oCurSec != null)
        _oCurSec.parentNode.cells[0].innerHTML = "&nbsp;"
}

function secSelect(e) {
    var oSecRow = e;
    if (_oCurSec != oSecRow) {
        ClearGutter();
        _oCurSec = oSecRow;
        if (oSecRow.getAttribute("sectionType") == "docprop")
            oSecRow.parentNode.cells[0].innerHTML = "<img alt='' src='/_imgs/kb/kb-edit-prop.gif'>";
        if (oSecRow.getAttribute("sectionType") == "edit") {
            var sHtml = "<table width='100%' height='100%' cellpadding='0' cellspacing='0'>";
            sHtml += "<tr height='16'><td><img alt='' src='/_imgs/kb/kb-edit-content.gif'></td></tr>";
            sHtml += "<tr><td class='edit_article_td_KBEdit'>&nbsp;</td></tr></table>";
            oSecRow.parentNode.cells[0].innerHTML = sHtml;
            var oEditDiv = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild(oSecRow).rows[1].cells[0]);
            if (oEditDiv.getAttribute("secHasContent") == "0") {
                oEditDiv.setAttribute("secHasContent", "1");
                oEditDiv.setAttribute("instructions", oEditDiv.innerHTML);
                oEditDiv.innerHTML = getEmptyHTML();
                oEditDiv.className = "Articlesedit_article_div_secEdit"
            }
            oEditDiv.focus();
            $find("HTMLBAR").set_editableControl(oEditDiv)
        }
    }
}

function getEmptyHTML() {
    var initialHTML = isFirefox ? "<div/>" : "";
    return initialHTML
}

function secActivate(oEditDiv) {
    var oTbl = oEditDiv.parentNode.parentNode.parentNode.parentNode;
    _oCurSec != oTbl.parentNode &&
        secSelect(oTbl.parentNode)
}

function secUnselect(oEdit) {
    var articleXml = Mscrm.FormControlInputBehavior.GetBehavior("articlexml");
    articleXml.set_dataValue(artGenXml());
    ClearGutter();
    if (oEdit.getAttribute("secHasContent", "1"))
        oEdit.className = "Articlesedit_article_div_secEdit";
    if (oEdit.innerHTML == "" || oEdit.innerHTML == "<div/>" || oEdit.innerHTML == "<div></div>") {
        oEdit.setAttribute("secHasContent", "0");
        oEdit.className = "Articlesedit_article_div_secEdit secEditInit";
        oEdit.innerHTML = oEdit.getAttribute("instructions")
    }
    _oCurSec = null
}

function Submit(iMode) {
    var articleXml = Mscrm.FormControlInputBehavior.GetBehavior("articlexml");
    articleXml.set_dataValue(artGenXml());
    $find("crmForm").SubmitCrmForm(iMode, true, true, false);
    refreshParentGrid()
}

function newComment() {
    var crmDialog = new Mscrm.CrmDialog(Mscrm.CrmUri
        .create("/cs/articles/comment/edit.aspx?parentId=" +
            CrmEncodeDecode.CrmUrlEncode($get("crmFormSubmit").crmFormSubmitId.value)),
        window,
        500,
        350,
        null);
    crmDialog.show()
}

function Reject() {
    var crmDialog = new Mscrm.CrmDialog(Mscrm.CrmUri
        .create("/cs/articles/comment/edit.aspx?mode=reject&parentId=" +
            CrmEncodeDecode.CrmUrlEncode($get("crmFormSubmit").crmFormSubmitId.value)),
        null,
        500,
        350,
        null);
    crmDialog.setCallbackInfo("performActionAfterReject", this, null);
    crmDialog.show()
}

function performActionAfterReject(ret_val) {
    if (ret_val) {
        Submit(REJECT);
        refreshParentGrid()
    }
}

function fullTextSearchCommand() {
    alert("Mscrm.FullTextSearchCommand")
}

function keywordSearchCommand() {
    alert("Mscrm.KeywordSearchCommand")
}

function titleSearchCommand() {
    alert("Mscrm.TitleSearchCommand")
}

function subjectSearchCommand() {
    alert("Mscrm.SubjectSearchCommand")
}

function articleNumberSearchCommand() {
    alert("Mscrm.ArticleNumberSearchCommand")
}

function exactWordsCommand() {
    alert("Mscrm.ExactWordsCommand")
}

function useLikeWordsCommand() {
    alert("Mscrm.UseLikeWordsCommand")
}

function subjectCommand() {
    if (test == "none")
        test = "first";
    else if (test == "first")
        test = "second";
    else if (test == "second")
        test = "third";
    else if (test == "third")
        test = "fourth";
    else
        test = "none";
    alert("subject Comamnd");
    alert(test)
}

function refreshParentGrid() {
    window.top.opener &&
        window.top.opener.auto(Mscrm.EntityTypeCode.KbArticle)
}