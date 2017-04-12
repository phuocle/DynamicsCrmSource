
function _htmlEncode(s) {
    if (s == null || s == "")
        return s;
    for (var count = 0,
        buffer = "",
        htmlEncode = "",
        cnt = 0;
        cnt < s.length;
        cnt++) {
        var c = s.charCodeAt(cnt);
        if (c > 96 && c < 123 ||
            c > 64 && c < 91 ||
            c == 32 ||
            c > 47 && c < 58 ||
            c == 46 ||
            c == 44 ||
            c == 45 ||
            c == 95)
            buffer += String.fromCharCode(c);
        else
            buffer += "&#" + c + ";";
        if (++count == 500) {
            htmlEncode += buffer;
            buffer = "";
            count = 0
        }
    }
    if (buffer.length)
        htmlEncode += buffer;
    return htmlEncode
}

function innerSurrogateAmpersandWorkaround(s) {
    for (var buffer = "",
        cnt = 0;
        cnt < s.length;
        cnt++) {
        var c0 = s.charCodeAt(cnt);
        if (c0 >= 55296 && c0 <= 57343)
            if (cnt + 1 < s.length) {
                var c1 = s.charCodeAt(cnt + 1);
                if (c1 >= 56320 && c1 <= 57343) {
                    buffer += "CRMEntityReferenceOpen" +
                        ((c0 - 55296) * 1024 + (c1 & 1023) + 65536).toString(16) +
                        "CRMEntityReferenceClose";
                    cnt++
                } else
                    buffer += String.fromCharCode(c0)
            } else
                buffer += String.fromCharCode(c0);
        else
            buffer += String.fromCharCode(c0)
    }
    s = buffer;
    buffer = "";
    for (var cnt = 0; cnt < s.length; cnt++) {
        var c0 = s.charCodeAt(cnt);
        if (c0 >= 55296 && c0 <= 57343)
            buffer += String.fromCharCode(65533);
        else
            buffer += String.fromCharCode(c0)
    }
    s = buffer;
    s = _htmlEncode(s);
    s = s.replace(/CRMEntityReferenceOpen/g, "&#x");
    s = s.replace(/CRMEntityReferenceClose/g, ";");
    return s
}

function CrmXmlEncode(s) {
    if ("undefined" == typeof s || "unknown" == typeof s || null == s)
        return s;
    else if (typeof s != "string")
        s = s.toString();
    return innerSurrogateAmpersandWorkaround(s)
}