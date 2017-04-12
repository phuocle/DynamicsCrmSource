
function AddEvent(elem, evtType, func, capture) {
    capture = capture ? capture : false;
    if (elem.addEventListener)
        elem.addEventListener(evtType, func, capture);
    else if (elem.attachEvent)
        elem.attachEvent("on" + evtType, func);
    else
        elem["on" + evtType] = func
}

function AddOnLoadEvent(func) {
    if (window.addEventListener || window.attachEvent)
        AddEvent(window, "load", func, false);
    else {
        var oldLoad = window.onload
            ? window.onload
            : function() {
            };
        window.onload = function() {
            oldLoad();
            func()
        }
    }
}

function FormatWithCommas(amount) {
    if (isNaN(amount)) {
        alert("Not a number");
        return
    }
    var delimiter = ",",
        array = amount.split(".", 2),
        integer = parseInt(array[0], 10),
        decimal = array[1],
        minus = "";
    if (integer < 0)
        minus = "-";
    integer = Math.abs(integer);
    var tempString = new String(integer),
        stringArray = [];
    while (tempString.length > 3) {
        var substring = tempString.substr(tempString.length - 3);
        stringArray.unshift(substring);
        tempString = tempString.substr(0, tempString.length - 3)
    }
    tempString.length > 0 &&
        stringArray.unshift(tempString);
    tempString = stringArray.join(delimiter);
    if (typeof decimal == "undefined")
        amount = tempString;
    else
        amount = tempString + "." + decimal;
    amount = minus + amount;
    return amount
}