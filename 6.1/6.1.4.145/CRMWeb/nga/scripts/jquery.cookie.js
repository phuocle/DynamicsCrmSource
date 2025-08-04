/*!
 * Microsoft grants you the right to use these script files for the sole purpose of either: 
 * (i) interacting through your browser with the Microsoft website, subject to the website\ufffds 
 * terms of use; or (ii) using the files as included with a Microsoft product subject to that
 * product\ufffds license terms. Microsoft reserves all other rights to the files not expressly 
 * granted by Microsoft, whether by implication, estoppel or otherwise. The notices and 
 * licenses below are for informational purposes only. */
 /*jslint browser: true */ /*global jQuery: true */
 
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
jQuery.cookie=function(d,b,a){if(arguments.length>1&&String(b)!=="[object Object]"){a=jQuery.extend({},a);if(b===null||b===undefined)a.expires=-1;if(typeof a.expires==="number"){var g=a.expires,e=a.expires=new Date;e.setDate(e.getDate()+g)}b=String(b);return document.cookie=[encodeURIComponent(d),"=",a.raw?b:encodeURIComponent(b),a.expires?"; expires="+a.expires.toUTCString():"",a.path?"; path="+a.path:"",a.domain?"; domain="+a.domain:"",a.secure?"; secure":""].join("")}a=b||{};var c,f=a.raw?function(a){return a}:decodeURIComponent;return(c=new RegExp("(?:^|; )"+encodeURIComponent(d)+"=([^;]*)").exec(document.cookie))?f(c[1]):null}