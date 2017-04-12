// Adds parentheses around glossary terms 

function fixGlossaryDefs() {
    var spanCollection = document.getElementsByTagName("span");
    for (var i = 0; i < spanCollection.length; i++) {
        if (spanCollection[i].className == "glossarydefinition") {
            var spanValue = trim(spanCollection[i].innerHTML);
            if (spanValue.length > 0) {
                if (spanValue.substring(0, 1) != "(" && spanValue.substring(length - 2, length - 1) != ")") {
                    spanCollection[i].innerHTML = "&nbsp;(" + spanValue + ")";
                }
            }
        }
    }
}

function trim(stringToTrim) {
    return stringToTrim.replace(/^\s+|\s+$/g, "");
}

/* added this function to replace old expand / collapse functionality */

var expandCollapse = function(idValue, level) {
    var targetDiv = document.getElementById("d" + idValue);
    var targetImg = document.getElementById("i" + idValue);

    var aR = "Help-Expand-Section-Microsoft-CRM.png";
    var aD = "Help-Collapse-Section-Microsoft-CRM.png";

    if (level > 1) {
        aD = "Help-Chapter-Closed-Microsoft-CRM.png";
        aR = "Help-Chapter-Open-Microsoft-CRM.png";
    }

    switch (targetDiv.style.display) {
    case "none":
        targetDiv.style.display = "block";
        targetImg.src = aR;
        break;
    default:
        targetDiv.style.display = "none";
        targetImg.src = aD;
        break;
    }
};