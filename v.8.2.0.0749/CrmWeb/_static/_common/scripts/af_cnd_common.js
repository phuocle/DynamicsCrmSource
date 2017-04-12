
var AT_END = 1,
    AT_BEGIN = 2,
    AT_AFTER = 3,
    AT_BEFORE = 4,
    _oControlsCache = null;

function RaiseEvent(oEventToRaise) {
    var oEvent;
    if (this.createEventObject)
        oEvent = this.createEventObject();
    else if (this.element && this.element.createEventObject)
        oEvent = this.element.createEventObject();
    else if (window && window.document && window.document.createEventObject)
        oEvent = window.document.createEventObject();
    else
        return null;
    oEvent.returnValue = true;
    oEventToRaise.fire(oEvent);
    return oEvent
}

function PerformToolbarOperation(sOp, oToolbar, oBtn, vParam) {
    if (!IsNull(oBtn))
        switch (sOp) {
        case "disable":
            oToolbar.disableItem(oBtn, vParam);
            break;
        case "attachclick":
            oToolbar.setAction(oBtn, vParam);
            break
        }
}

function HideVisibleControl(o) {
    if (!IsNull(o.VisibleControl)) {
        o.VisibleControl.ShowControl(false, false);
        o.VisibleControl = null
    }
}

function IsNameOperator(sOp) {
    switch (sOp) {
    case "contains":
    case "doesnotcontain":
    case "beginswith":
    case "doesnotbeginwith":
    case "endswith":
    case "doesnotendwith":
    case "like":
    case "not-like":
        return true
    }
    return false
}

function IsValueBoundOperator(sOp) {
    switch (sOp.toLowerCase()) {
    case "null":
    case "not-null":
    case "yesterday":
    case "today":
    case "tomorrow":
    case "next-seven-days":
    case "last-seven-days":
    case "last-week":
    case "this-week":
    case "next-week":
    case "last-month":
    case "this-month":
    case "next-month":
    case "last-year":
    case "this-year":
    case "next-year":
    case "this-fiscal-year":
    case "this-fiscal-period":
    case "next-fiscal-year":
    case "next-fiscal-period":
    case "last-fiscal-year":
    case "last-fiscal-period":
    case "innext7days":
    case "inlast7days":
    case "nextweek":
    case "lastweek":
    case "thisweek":
    case "nextmonth":
    case "lastmonth":
    case "thismonth":
    case "nextyear":
    case "lastyear":
    case "thisyear":
    case "anytime":
    case "eq-userid":
    case "ne-userid":
    case "eq-userteams":
    case "eq-useroruserhierarchy":
    case "eq-useroruserhierarchyandteams":
    case "eq-useroruserteams":
    case "eq-businessid":
    case "ne-businessid":
    case "containsdata":
    case "doesnotcontaindata":
    case "eq-userlanguage":
    case "child-of":
    case "dedupe-equals":
    case "dedupe-equalsdateonly":
    case "dedupe-equalsdatetime":
        return false
    }
    return true
}