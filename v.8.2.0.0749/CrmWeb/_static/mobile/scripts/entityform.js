
function isNull(o) {
    return o === null || o === undefined
}

function getEl(id) {
    try {
        if (document.getElementById)
            return document.getElementById(id)
    } catch (e) {
    }
    try {
        if (document.all)
            return document.all[id]
    } catch (e) {
    }
}

function getNode(name, val, encode) {
    if (encode)
        return "<" + name + ">" + CrmXmlEncode(val) + "</" + name + ">";
    return "<" + name + ">" + val + "</" + name + ">"
}

function getFrmXml() {
    for (var xml = "",
        i = 0;
        true;
        i++) {
        var ctl = getEl("mf_ad" + i);
        if (isNull(ctl))
            break;
        var attrData = [];
        attrData = ctl.value.split(";");
        var obj = getAttrVal(attrData[1], attrData[0], attrData[2]);
        xml += getNode(attrData[0], obj.val, obj.enc)
    }
    return xml
}

var origFrmXml = "",
    isSubmitted = false;

function saveOrigFrmXml() {
    origFrmXml = getFrmXml()
}

function navToUrl(url) {
    try {
        window.navigate &&
            window.navigate(url)
    } catch (e) {
    }
    try {
        if (document.location && document.location.href)
            document.location.href = url
    } catch (e) {
    }
}

function confirmUnload(url) {
    if (window.parent.UseTabletExperience)
        try {
            var bDiv = window.top.document.getElementById("backDiv"),
                frm = window.top.document.getElementById("inlineMEEdit");
            if (!isNull(bDiv) && !isNull(frm)) {
                window.top.document.body.removeChild(bDiv);
                window.top.document.body.removeChild(frm);
                window.parent.DisposeInlineME()
            } else
                window.parent.location.reload(false);
            return
        } catch (err) {
        }
    var oUserModified = getEl("crmFormUserModified");
    if (!isNull(oUserModified))
        if (oUserModified.value == "true") {
            confirm(LOCID_SAVE_WARNING) &&
                navToUrl(url);
            return
        }
    var currFrmXml = getFrmXml();
    if (origFrmXml != currFrmXml) {
        confirm(LOCID_SAVE_WARNING) &&
            navToUrl(url);
        return
    }
    navToUrl(url)
}

function getAttrVal(type, name, frmt) {
    var o = {};
    o.enc = true;
    o.val = "";
    switch (type) {
    case "nvarchar":
    case "ntext":
    case "decimal":
    case "float":
    case "tinyint":
    case "smallint":
        o.val = getEl(name).value;
        break;
    case "state":
    case "status":
    case "picklist":
        var hid = getEl(name + "_h");
        if (isNull(hid))
            o.val = getEl(name).value;
        else
            o.val = hid.value;
        break;
    case "bit":
        var rad1 = getEl(name + "_rad1"),
            rad2 = getEl(name + "_rad2");
        if (rad1.checked && rad1.value == 1 || rad2.checked && rad2.value == 1)
            o.val = "true";
        if (rad1.checked && rad1.value == 0 || rad2.checked && rad2.value == 0)
            o.val = "false";
        break;
    case "money":
        o.val = "<val>" +
            CrmXmlEncode(getEl(name).value) +
            "</val><cs>" +
            CrmXmlEncode(getEl(name + "_cs").value) +
            "</cs>";
        o.enc = false;
        break;
    case "datetime":
        o.val = "<date>" +
            CrmXmlEncode(getEl(name).value) +
            "</date><time>" +
            CrmXmlEncode(getEl(name + "_t").value) +
            "</time>";
        o.enc = false;
        break;
    case "int":
        if (frmt == "duration") {
            var durTimeUnits = name + "_dtu";
            o.val = "<val>" +
                CrmXmlEncode(getEl(name).value) +
                "</val><tu>" +
                CrmXmlEncode(getEl(durTimeUnits).value) +
                "</tu>";
            o.enc = false
        } else
            o.val = getEl(name).value;
        break;
    case "lookup":
    case "customer":
    case "owner":
        var utype = getEl(name + "_type"),
            text = getEl(name),
            sel = getEl(name + "_sel"),
            htext = getEl(name + "_htext"),
            htype = getEl(name + "_htype"),
            hid = getEl(name + "_hid").value,
            txt = "",
            oid = "",
            tp = "",
            usrTxt = "";
        if (isNull(utype)) {
            txt = htext.value;
            usrTxt = txt;
            oid = hid;
            tp = htype.value
        } else {
            tp = utype.value;
            usrTxt = text.value;
            if (htext.value == text.value && htype.value == tp)
                oid = hid;
            if (isNull(sel) || htext.value != text.value || htype.value != tp)
                txt = text.value;
            else {
                txt = sel.options[sel.selectedIndex].text;
                oid = sel.value
            }
        }
        o.val = "<type>" +
            CrmXmlEncode(tp) +
            "</type><txt>" +
            CrmXmlEncode(txt) +
            "</txt><usrTxt>" +
            CrmXmlEncode(usrTxt) +
            "</usrTxt><oid>" +
            CrmXmlEncode(oid) +
            "</oid>";
        o.enc = false;
        break;
    case "partylist":
        break
    }
    return o
}

function fSubmit() {
    var xml = getFrmXml();
    if (origFrmXml != xml)
        getEl("crmFormUserModified").value = "true";
    var oType = getEl("submitObjType").value;
    getEl("sbmtXml").value = getNode(oType, xml, false);
    getEl("crmFormSubmitMode").value = 1;
    if (!isSubmitted) {
        window.parent.UseTabletExperience &&
            window.parent.prepareForEmbeddedEditClose(window);
        isSubmitted = true;
        getEl("frmSubmit").submit()
    }
}

function clrSel(name) {
    var sel = getEl(name);
    if (!isNull(sel))
        sel.selectedIndex = 0
}

function chkLen(Object, max, errTxt) {
    if (Object.value.length > max)
        if (confirm(errTxt))
            Object.value = Object.value.substring(0, max)
}

function chkLenForBb(Object, max, errTxt) {
    Object.value.length > max &&
        alert(errTxt)
}