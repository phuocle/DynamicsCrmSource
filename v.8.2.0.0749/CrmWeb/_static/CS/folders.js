
function BringToFront() {
    if (tab0.style.display == "none") {
        tab0.style.display = "inline";
        tab1.style.display = "none"
    } else {
        tab1.style.display = "inline";
        tab0.style.display = "none"
    }
    var s = XUI.Html.GetText(tabBack),
        i = tabBack.offsetWidth;
    XUI.Html.SetText(tabBack, XUI.Html.GetText(tabFront));
    tabBack.style.width = tabFront.offsetWidth;
    XUI.Html.SetText(tabFront, s);
    tabFront.style.width = i
}