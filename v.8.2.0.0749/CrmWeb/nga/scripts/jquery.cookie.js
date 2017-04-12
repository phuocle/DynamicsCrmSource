/*!
 * Microsoft grants you the right to use these script files for the sole purpose of either: 
 * (i) interacting through your browser with the Microsoft website, subject to the website�s 
 * terms of use; or (ii) using the files as included with a Microsoft product subject to that
 * product�s license terms. Microsoft reserves all other rights to the files not expressly 
 * granted by Microsoft, whether by implication, estoppel or otherwise. The notices and 
 * licenses below are for informational purposes only. */
/*!
 * jQuery Cookie plugin
 *
 * Copyright (c) 2010 Klaus Hartl (stilbuero.de)
 *------------------------------------------------------------------------------------
 * MIT License
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *------------------------------------------------------------------------------------
 */
jQuery.cookie = function(n, t, i) {
    var u, r, f, e;
    return arguments.length > 1 && String(t) !== "[object Object]"
        ? (i = jQuery
                .extend({}, i), (t === null || t === undefined) && (i.expires = -1),
            typeof i
                .expires ==
                "number" &&
                (u = i.expires, r = i.expires = new Date, r.setDate(r.getDate() + u)), t = String(t), document
                .cookie = [
                    encodeURIComponent(n), "=", i.raw ? t : encodeURIComponent(t),
                    i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "",
                    i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""
                ].join(""))
        : (i = t || {}, e = i
            .raw
            ? function(n) { return n }
            : decodeURIComponent, (f = new RegExp("(?:^|; )" + encodeURIComponent(n) + "=([^;]*)")
                .exec(document.cookie))
            ? e(f[1])
            : null)
}
//# sourceMappingURL=../../../../../../../../../../Symbols/retail/amd64/jsmin/jquery.cookie.js.srcmap