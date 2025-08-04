function printElement() {
    for (var t, n, u, r = $("[class^=_previewConductor_CalendarPrintView] div.conductorContent"), f, i = 0;
        i < r.length;
        i++)
        if (r[i].style.visibility != "hidden") {
            f = r[i];
            break
        }
    t = f.firstChild.cloneNode(!0);
    t.style.height = "auto";
    t.style.width = "888px";
    $(".theDayContainer", t).css("width", "888px");
    /chrome/.test(navigator.userAgent.toLowerCase()) && $(".theDayContainer", t).css("zoom", "75%");
    $("[class^=_allDayItemContainer_PrintAllDayWellView]", t).css("border", "solid 1px #000");
    $("[class^=_calendarItem_PrintDayView]", t).css("border", "solid 1px #000");
    u = t.outerHTML;
    n = $("iframe.printIframe")[0];
    n = n.contentWindow ? n.contentWindow : n.contentDocument.document ? n.contentDocument.document : n.contentDocument;
    n.document.open();
    n.document.write("<html><head>" +
        document.getElementsByTagName("head").item(0).innerHTML +
        "<script><\/script><\/head><body onload='self.focus();document.execCommand(\"print\", false, null);' style='position:relative; width:888px; height:auto;'>" +
        u +
        "<\/body><\/html>");
    n.document.close()
}
//# sourceMappingURL=../../../../../../../../../../Symbols/retail/amd64/jsmin/printelement.js.srcmap