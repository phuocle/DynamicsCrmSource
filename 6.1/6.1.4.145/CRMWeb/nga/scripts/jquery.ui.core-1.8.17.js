/*!
* Microsoft grants you the right to use these script files for the sole purpose of either: 
* (i) interacting through your browser with the Microsoft website, subject to the website\ufffds 
* terms of use; or (ii) using the files as included with a Microsoft product subject to that
* product\ufffds license terms. Microsoft reserves all other rights to the files not expressly 
* granted by Microsoft, whether by implication, estoppel or otherwise. The notices and 
* licenses below are for informational purposes only.
*/
/*!
* Provided for Informational Purposes Only
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
*/
/*!
* jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
*
* Copyright 2008 George McGinley Smith
* All rights reserved.
*
* jQuery Easing Equations v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
*
* Copyright 2001 Robert Penner
* All rights reserved.
*
* BSD License provided for informational purposes only
*
* Redistribution and use in source and binary forms, with or without modification,
* are permitted provided that the following conditions are met:
*
* Redistributions of source code must retain the above copyright notice, this list of
* conditions and the following disclaimer.
* Redistributions in binary form must reproduce the above copyright notice, this list
* of conditions and the following disclaimer in the documentation and/or other materials
* provided with the distribution.
*
* Neither the name of the author nor the names of contributors may be used to endorse
* or promote products derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
* MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
* COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
* EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
* GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
* AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
* NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
* OF THE POSSIBILITY OF SUCH DAMAGE.
*/
/*!
* jQuery UI 1.8.17
*
* Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
*
* http://docs.jquery.com/UI
*/
(function(a,c){a.ui=a.ui||{};if(a.ui.version)return;a.extend(a.ui,{version:"1.8.17",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});a.fn.extend({propAttr:a.fn.prop||a.fn.attr,_focus:a.fn.focus,focus:function(b,c){return typeof b==="number"?this.each(function(){var d=this;setTimeout(function(){a(d).focus();c&&c.call(d)},b)}):this._focus.apply(this,arguments)},scrollParent:function(){var b;if(a.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position")))b=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(a.curCSS(this,"position",1))&&/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0);else b=this.parents().filter(function(){return/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!b.length?a(document):b},zIndex:function(f){if(f!==c)return this.css("zIndex",f);if(this.length){var b=a(this[0]),d,e;while(b.length&&b[0]!==document){d=b.css("position");if(d==="absolute"||d==="relative"||d==="fixed"){e=parseInt(b.css("zIndex"),10);if(!isNaN(e)&&e!==0)return e}b=b.parent()}}return 0},disableSelection:function(){return this.bind((a.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});a.each(["Width","Height"],function(h,b){var g=b==="Width"?["Left","Right"]:["Top","Bottom"],f=b.toLowerCase(),e={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};function d(c,b,d,e){a.each(g,function(){b-=parseFloat(a.curCSS(c,"padding"+this,true))||0;if(d)b-=parseFloat(a.curCSS(c,"border"+this+"Width",true))||0;if(e)b-=parseFloat(a.curCSS(c,"margin"+this,true))||0});return b}a.fn["inner"+b]=function(g){return g===c?e["inner"+b].call(this):this.each(function(){a(this).css(f,d(this,g)+"px")})};a.fn["outer"+b]=function(c,g){return typeof c!=="number"?e["outer"+b].call(this,c):this.each(function(){a(this).css(f,d(this,c,true,g)+"px")})}});function b(b,f){var c=b.nodeName.toLowerCase();if("area"===c){var h=b.parentNode,g=h.name,e;if(!b.href||!g||h.nodeName.toLowerCase()!=="map")return false;e=a("img[usemap=#"+g+"]")[0];return!!e&&d(e)}return(/input|select|textarea|button|object/.test(c)?!b.disabled:"a"==c?b.href||f:f)&&d(b)}function d(b){return!a(b).parents().andSelf().filter(function(){return a.curCSS(this,"visibility")==="hidden"||a.expr.filters.hidden(this)}).length}a.extend(a.expr[":"],{data:function(c,d,b){return!!a.data(c,b[3])},focusable:function(c){return b(c,!isNaN(a.attr(c,"tabindex")))},tabbable:function(e){var d=a.attr(e,"tabindex"),c=isNaN(d);return(c||d>=0)&&b(e,!c)}});a(function(){var c=document.body,b=c.appendChild(b=document.createElement("div"));a.extend(b.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});a.support.minHeight=b.offsetHeight===100;a.support.selectstart="onselectstart"in b;c.removeChild(b).style.display="none"});a.extend(a.ui,{plugin:{add:function(e,f,d){var c=a.ui[e].prototype;for(var b in d){c.plugins[b]=c.plugins[b]||[];c.plugins[b].push([f,d[b]])}},call:function(a,e,d){var b=a.plugins[e];if(!b||!a.element[0].parentNode)return;for(var c=0;c<b.length;c++)a.options[b[c][0]]&&b[c][1].apply(a.element,d)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(b,e){if(a(b).css("overflow")==="hidden")return false;var c=e&&e==="left"?"scrollLeft":"scrollTop",d=false;if(b[c]>0)return true;b[c]=1;d=b[c]>0;b[c]=0;return d},isOverAxis:function(b,a,c){return b>a&&b<a+c},isOver:function(g,f,e,d,b,c){return a.ui.isOverAxis(g,e,b)&&a.ui.isOverAxis(f,d,c)}})})(jQuery)