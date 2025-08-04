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
 * jQuery UI Widget 1.8.17
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 *
 * http://docs.jquery.com/UI/Widget
 */
(function(a,b){if(a.cleanData){var c=a.cleanData;a.cleanData=function(b){for(var e=0,d;(d=b[e])!=null;e++)try{a(d).triggerHandler("remove")}catch(f){}c(b)}}else{var d=a.fn.remove;a.fn.remove=function(b,c){return this.each(function(){if(!c)(!b||a.filter(b,[this]).length)&&a("*",this).add([this]).each(function(){try{a(this).triggerHandler("remove")}catch(b){}});return d.call(a(this),b,c)})}}a.widget=function(b,g,e){var c=b.split(".")[0],f;b=b.split(".")[1];f=c+"-"+b;if(!e){e=g;g=a.Widget}a.expr[":"][f]=function(c){return!!a.data(c,b)};a[c]=a[c]||{};a[c][b]=function(b,a){arguments.length&&this._createWidget(b,a)};var d=new g;d.options=a.extend(true,{},d.options);a[c][b].prototype=a.extend(true,d,{"namespace":c,widgetName:b,widgetEventPrefix:a[c][b].prototype.widgetEventPrefix||b,widgetBaseClass:f},e);a.widget.bridge(b,a[c][b])};a.widget.bridge=function(c,d){a.fn[c]=function(e){var f=typeof e==="string",h=Array.prototype.slice.call(arguments,1),g=this;e=!f&&h.length?a.extend.apply(null,[true,e].concat(h)):e;if(f&&e.charAt(0)==="_")return g;if(f)this.each(function(){var d=a.data(this,c),f=d&&a.isFunction(d[e])?d[e].apply(d,h):d;if(f!==d&&f!==b){g=f;return false}});else this.each(function(){var b=a.data(this,c);if(b)b.option(e||{})._init();else a.data(this,c,new d(e,this))});return g}};a.Widget=function(b,a){arguments.length&&this._createWidget(b,a)};a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(c,b){a.data(b,this.widgetName,this);this.element=a(b);this.options=a.extend(true,{},this.options,this._getCreateOptions(),c);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()});this._create();this._trigger("create");this._init()},_getCreateOptions:function(){return a.metadata&&a.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")},widget:function(){return this.element},option:function(c,e){var d=c;if(arguments.length===0)return a.extend({},this.options);if(typeof c==="string"){if(e===b)return this.options[c];d={};d[c]=e}this._setOptions(d);return this},_setOptions:function(b){var c=this;a.each(b,function(b,a){c._setOption(b,a)});return this},_setOption:function(b,a){this.options[b]=a;b==="disabled"&&this.widget()[a?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",a);return this},enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(f,b,c){var e,d,g=this.options[f];c=c||{};b=a.Event(b);b.type=(f===this.widgetEventPrefix?f:this.widgetEventPrefix+f).toLowerCase();b.target=this.element[0];d=b.originalEvent;if(d)for(e in d)if(!(e in b))b[e]=d[e];this.element.trigger(b,c);return!(a.isFunction(g)&&g.call(this.element[0],b,c)===false||b.isDefaultPrevented())}}})(jQuery)