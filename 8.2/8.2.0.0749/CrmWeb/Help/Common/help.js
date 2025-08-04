
function syncToc() {
    if (typeof top.helpTOC != "undefined" && typeof top.helpTOC.findArticle != "undefined") {
        var sPath = window.location.pathname,
            sPage = sPath.substring(sPath.lastIndexOf("/") + 1, sPath.indexOf(".htm"));
        sPage = sPage.toLowerCase();
        top.helpTOC.findArticle(sPage)
    }
}

function on(o) {
    o.runtimeStyle.color = "#0000ff"
}

function off(o) {
    o.runtimeStyle.color = ""
}

function expand(o) {
    var oNextSibling = XUI.Html.DomUtils.GetNextSibling(o);
    if (oNextSibling.style.display == "none") {
        XUI.Html.DomUtils.GetFirstChild(o).src = "../imgs/d.gif";
        oNextSibling.style.display = "inline";
        o.style.color = "#0000ff";
        o.scrollIntoView()
    } else {
        XUI.Html.DomUtils.GetFirstChild(o).src = "../imgs/r.gif";
        oNextSibling.style.display = "none";
        o.style.color = "#000000";
        if (LOCID_UI_DIR == "RTL")
            o.style += Mscrm.Utilities.FlipImage("h")
    }
}

function submitFeedback(e) {
    if (typeof window.event != "undefined")
        window.event.returnValue = false;
    if (GetRating() == "None") {
        alert(top.bottomBar.fbNoRating_Text);
        return false
    }
    var pathFields = top.helpContents.location.pathname.split("/"),
        sURL = pathFields[pathFields.length - 1],
        sTitle = ParseTitle(document.title),
        sProductVer = document.getElementById("ProdVersion").value,
        sDocVer = document.getElementById("DocVersion").value,
        sDeliverable = document.getElementById("Deliverable").value;
    if (sDeliverable == "")
        sDeliverable = pathFields[1];
    var sSku = document.getElementById("Sku").value;
    if (sSku == "")
        sSku = pathFields[3];
    var sLang = document.getElementById("Language").value;
    if (sLang == "")
        sLang = pathFields[2];
    var sExtension = "",
        sExtensionElement = document.getElementById("CustomExtension");
    if (sExtensionElement != null)
        sExtension = sExtensionElement.value;
    var sSubject = sTitle +
            " (/1:" +
            sDeliverable +
            "/2:" +
            sProductVer +
            "/3:" +
            sDocVer +
            "/4:" +
            sURL +
            "/5:" +
            GetRating() +
            "/6:" +
            sLang +
            "/7:" +
            sSku +
            sExtension +
            ")",
        sBody = document.getElementById("fbResponseText").value;
    if (sBody == "")
        sBody = "---" + top.bottomBar.fbTypeHere_Text + "---";
    location.href = "mailto:mscrmdf@microsoft.com?subject=" + sSubject + "&body=" + sBody
}

function ParseTitle(theTitle) {
    theTitle = theTitle.replace(/\"/g, "--");
    theTitle = theTitle.replace(/'/g, "-");
    if (theTitle == "")
        theTitle = top.bottomBar.fbTitle_Text;
    if (theTitle.length > 50)
        theTitle = theTitle.slice(0, 47) + "...";
    return theTitle
}

function GetRating() {
    if (document.getElementsByName("fbRating")[0].checked)
        return "Yes";
    else if (document.getElementsByName("fbRating")[1].checked)
        return "No";
    else
        return "None"
}

function ScrollItemIntoView(sId) {
    var oElement = document.getElementById(sId);
    typeof oElement != "undefined" &&
        oElement != null &&
        oElement.scrollIntoView()
}