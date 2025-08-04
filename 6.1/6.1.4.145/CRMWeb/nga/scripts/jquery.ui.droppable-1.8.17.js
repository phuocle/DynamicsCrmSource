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
 * jQuery UI Droppable 1.8.17
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 *
 * http://docs.jquery.com/UI/Droppables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.mouse.js
 *	jquery.ui.draggable.js
 */
(function(a){a.widget("ui.droppable",{widgetEventPrefix:"drop",options:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect"},_create:function(){var b=this.options,c=b.accept;this.isover=0;this.isout=1;this.accept=a.isFunction(c)?c:function(a){return a.is(c)};this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};a.ui.ddmanager.droppables[b.scope]=a.ui.ddmanager.droppables[b.scope]||[];a.ui.ddmanager.droppables[b.scope].push(this);b.addClasses&&this.element.addClass("ui-droppable")},destroy:function(){for(var c=a.ui.ddmanager.droppables[this.options.scope],b=0;b<c.length;b++)c[b]==this&&c.splice(b,1);this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable");return this},_setOption:function(c,b){if(c=="accept")this.accept=a.isFunction(b)?b:function(a){return a.is(b)};a.Widget.prototype._setOption.apply(this,arguments)},_activate:function(c){var b=a.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass);b&&this._trigger("activate",c,this.ui(b))},_deactivate:function(c){var b=a.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass);b&&this._trigger("deactivate",c,this.ui(b))},_over:function(c){var b=a.ui.ddmanager.current;if(!b||(b.currentItem||b.element)[0]==this.element[0])return;if(this.accept.call(this.element[0],b.currentItem||b.element)){this.options.hoverClass&&this.element.addClass(this.options.hoverClass);this._trigger("over",c,this.ui(b))}},_out:function(c){var b=a.ui.ddmanager.current;if(!b||(b.currentItem||b.element)[0]==this.element[0])return;if(this.accept.call(this.element[0],b.currentItem||b.element)){this.options.hoverClass&&this.element.removeClass(this.options.hoverClass);this._trigger("out",c,this.ui(b))}},_drop:function(e,d){var b=d||a.ui.ddmanager.current;if(!b||(b.currentItem||b.element)[0]==this.element[0])return false;var c=false;this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var d=a.data(this,"droppable");if(d.options.greedy&&!d.options.disabled&&d.options.scope==b.options.scope&&d.accept.call(d.element[0],b.currentItem||b.element)&&a.ui.intersect(b,a.extend(d,{offset:d.element.offset()}),d.options.tolerance)){c=true;return false}});if(c)return false;if(this.accept.call(this.element[0],b.currentItem||b.element)){this.options.activeClass&&this.element.removeClass(this.options.activeClass);this.options.hoverClass&&this.element.removeClass(this.options.hoverClass);this._trigger("drop",e,this.ui(b));return this.element}return false},ui:function(a){return{draggable:a.currentItem||a.element,helper:a.helper,position:a.position,offset:a.positionAbs}}});a.extend(a.ui.droppable,{version:"1.8.17"});a.ui.intersect=function(b,c,m){if(!c.offset)return false;var f=(b.positionAbs||b.position.absolute).left,h=f+b.helperProportions.width,g=(b.positionAbs||b.position.absolute).top,i=g+b.helperProportions.height,d=c.offset.left,k=d+c.proportions.width,e=c.offset.top,j=e+c.proportions.height;switch(m){case"fit":return d<=f&&h<=k&&e<=g&&i<=j;break;case"intersect":return d<f+b.helperProportions.width/2&&h-b.helperProportions.width/2<k&&e<g+b.helperProportions.height/2&&i-b.helperProportions.height/2<j;break;case"pointer":var l=(b.positionAbs||b.position.absolute).left+(b.clickOffset||b.offset.click).left,n=(b.positionAbs||b.position.absolute).top+(b.clickOffset||b.offset.click).top,o=a.ui.isOver(n,l,e,d,c.proportions.height,c.proportions.width);return o;break;case"touch":return(g>=e&&g<=j||i>=e&&i<=j||g<e&&i>j)&&(f>=d&&f<=k||h>=d&&h<=k||f<d&&h>k);break;default:return false}};a.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(d,e){var c=a.ui.ddmanager.droppables[d.options.scope]||[],h=e?e.type:null,g=(d.currentItem||d.element).find(":data(droppable)").andSelf();a:for(var b=0;b<c.length;b++){if(c[b].options.disabled||d&&!c[b].accept.call(c[b].element[0],d.currentItem||d.element))continue;for(var f=0;f<g.length;f++)if(g[f]==c[b].element[0]){c[b].proportions.height=0;continue a}c[b].visible=c[b].element.css("display")!="none";if(!c[b].visible)continue;h=="mousedown"&&c[b]._activate.call(c[b],e);c[b].offset=c[b].element.offset();c[b].proportions={width:c[b].element[0].offsetWidth,height:c[b].element[0].offsetHeight}}},drop:function(b,d){var c=false;a.each(a.ui.ddmanager.droppables[b.options.scope]||[],function(){if(!this.options)return;if(!this.options.disabled&&this.visible&&a.ui.intersect(b,this,this.options.tolerance))c=this._drop.call(this,d)||c;if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],b.currentItem||b.element)){this.isout=1;this.isover=0;this._deactivate.call(this,d)}});return c},dragStart:function(b,c){b.element.parents(":not(body,html)").bind("scroll.droppable",function(){!b.options.refreshPositions&&a.ui.ddmanager.prepareOffsets(b,c)})},drag:function(b,c){b.options.refreshPositions&&a.ui.ddmanager.prepareOffsets(b,c);a.each(a.ui.ddmanager.droppables[b.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible)return;var f=a.ui.intersect(b,this,this.options.tolerance),e=!f&&this.isover==1?"isout":f&&this.isover==0?"isover":null;if(!e)return;var d;if(this.options.greedy){var g=this.element.parents(":data(droppable):eq(0)");if(g.length){d=a.data(g[0],"droppable");d.greedyChild=e=="isover"?1:0}}if(d&&e=="isover"){d.isover=0;d.isout=1;d._out.call(d,c)}this[e]=1;this[e=="isout"?"isover":"isout"]=0;this[e=="isover"?"_over":"_out"].call(this,c);if(d&&e=="isout"){d.isout=0;d.isover=1;d._over.call(d,c)}})},dragStop:function(b,c){b.element.parents(":not(body,html)").unbind("scroll.droppable");!b.options.refreshPositions&&a.ui.ddmanager.prepareOffsets(b,c)}}})(jQuery)