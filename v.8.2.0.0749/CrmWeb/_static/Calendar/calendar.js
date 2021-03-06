
function UpdateCalendarMenu(o) {
    XUI.Html.DomUtils.ForEachChild(o.parentNode,
        Function.createDelegate(this,
            function(child) {
                child.className = ""
            }));
    o.className = "ms-crm-CalendarView-Selected"
}

function getHomeCalendarElements() {
    var parentContext = window.frameElement.ownerDocument.parentWindow || window.frameElement.ownerDocument.defaultView,
        oMainTable = XUI.Html.DomUtils.GetFirstChild(parentContext.$get("topTR")),
        oRightSideCell = XUI.DomUtilities.GetChildElementAt(XUI.DomUtilities.GetChildElementAt(oMainTable, 1), 1),
        oRightSideMenu = XUI.DomUtilities.GetChildElementAt(oRightSideCell, 2),
        rVal = {};
    rVal.oTitle = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils
        .GetFirstChild(XUI.Html.DomUtils.GetFirstChild(oMainTable)));
    rVal.oMiniCalendar = XUI.Html.DomUtils.GetFirstChild(oRightSideCell);
    rVal.oMonthMenuItem = XUI.DomUtilities.GetChildElementAt(oRightSideMenu, 0);
    rVal.oWeekMenuItem = XUI.DomUtilities.GetChildElementAt(oRightSideMenu, 1);
    rVal.oDayMenuItem = XUI.DomUtilities.GetChildElementAt(oRightSideMenu, 2);
    return rVal
}

function FixCalendarFrameHeightForIE7() {
    if (Sys.Browser.agent == Sys.Browser.InternetExplorer && Sys.Browser.version < 8) {
        var frameWrapper = $get("frameWrapper");
        if (!IsNull(frameWrapper)) {
            var wrapperHeight = $get("frameWrapper").clientHeight;
            if (wrapperHeight > 0)
                XUI.Html.DomUtils.GetFirstChild(frameWrapper).style
                    .height = wrapperHeight - Mscrm.Utilities.getVerticalBoxPadding(frameWrapper) + "px"
        }
    }
}